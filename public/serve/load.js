!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("nQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=K.type(e);return"function"===n||K.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(K.isFunction(t))return K.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return K.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return K.filter(t,e,n);t=K.filter(t,e)}return K.grep(e,function(e){return X.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=dt[e]={};return K.each(e.match(pt)||[],function(e,n){t[n]=!0}),t}function s(){Q.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),K.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=K.expando+Math.random()}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(xt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:yt.test(n)?K.parseJSON(n):n}catch(i){}vt.set(e,t,n)}else n=void 0;return n}function l(){return!0}function c(){return!1}function f(){try{return Q.activeElement}catch(e){}}function p(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Ft.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,r=e.length;r>n;n++)mt.set(e[n],"globalEval",!t||mt.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(mt.hasData(e)&&(o=mt.access(e),s=mt.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)K.event.add(t,i,l[i][n])}vt.hasData(e)&&(a=vt.access(e),u=K.extend({},a),vt.set(t,u))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&K.nodeName(e,t)?K.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Ct.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function x(t,n){var r,i=K(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:K.css(i[0],"display");return i.detach(),o}function b(e){var t=Q,n=Wt[e];return n||(n=x(e,t),"none"!==n&&n||(Rt=(Rt||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Rt[0].contentDocument,t.write(),t.close(),n=x(e,t),Rt.detach()),Wt[e]=n),n}function w(e,t,n){var r,i,o,s,a=e.style;return n=n||It(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||K.contains(e.ownerDocument,e)||(s=K.style(e,t)),Bt.test(s)&&$t.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Gt.length;i--;)if(t=Gt[i]+n,t in e)return t;return r}function k(e,t,n){var r=zt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function N(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=K.css(e,n+wt[o],!0,i)),r?("content"===n&&(s-=K.css(e,"padding"+wt[o],!0,i)),"margin"!==n&&(s-=K.css(e,"border"+wt[o]+"Width",!0,i))):(s+=K.css(e,"padding"+wt[o],!0,i),"padding"!==n&&(s+=K.css(e,"border"+wt[o]+"Width",!0,i)));return s}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=It(e),s="border-box"===K.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=w(e,t,o),(0>i||null==i)&&(i=e.style[t]),Bt.test(i))return i;r=s&&(Y.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+N(e,t,n||(s?"border":"content"),r,o)+"px"}function S(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=mt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Tt(r)&&(o[s]=mt.access(r,"olddisplay",b(r.nodeName)))):(i=Tt(r),"none"===n&&i||mt.set(r,"olddisplay",i?n:K.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function j(e,t,n,r,i){return new j.prototype.init(e,t,n,r,i)}function D(){return setTimeout(function(){Yt=void 0}),Yt=K.now()}function A(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=wt[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function q(e,t,n){for(var r,i=(tn[t]||[]).concat(tn["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function L(e,t,n){var r,i,o,s,a,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&Tt(e),g=mt.get(e,"fxshow");n.queue||(a=K._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,K.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=K.css(e,"display"),c="none"===l?mt.get(e,"olddisplay")||b(e.nodeName):l,"inline"===c&&"none"===K.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Jt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||K.style(e,r)}else l=void 0;if(K.isEmptyObject(p))"inline"===("none"===l?b(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=mt.access(e,"fxshow",{}),o&&(g.hidden=!h),h?K(e).show():f.done(function(){K(e).hide()}),f.done(function(){var t;mt.remove(e,"fxshow");for(t in p)K.style(e,t,p[t])});for(r in p)s=q(h?g[r]:0,r,f),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function H(e,t){var n,r,i,o,s;for(n in e)if(r=K.camelCase(n),i=t[r],o=e[n],K.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=K.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function O(e,t,n){var r,i,o=0,s=en.length,a=K.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Yt||D(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Yt||D(),duration:n.duration,tweens:[],createTween:function(t,n){var r=K.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(H(c,l.opts.specialEasing);s>o;o++)if(r=en[o].call(l,e,c,l.opts))return r;return K.map(c,q,l),K.isFunction(l.opts.start)&&l.opts.start.call(e,l),K.fx.timer(K.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(pt)||[];if(K.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function M(e,t,n,r){function i(a){var u;return o[a]=!0,K.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===wn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function P(e,t){var n,r,i=K.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&K.extend(!0,e,r),e}function R(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function W(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function $(e,t,n,r){var i;if(K.isArray(t))K.each(t,function(t,i){n||Nn.test(e)?r(e,i):$(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==K.type(t))r(e,t);else for(i in t)$(e+"["+i+"]",t[i],n,r)}var B=[],I=B.slice,_=B.concat,z=B.push,X=B.indexOf,U={},V=U.toString,G=U.hasOwnProperty,Y={},Q=e.document,J="2.1.1 -offset,-wrap",K=function(e,t){return new K.fn.init(e,t)},Z=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,et=/^-ms-/,tt=/-([\da-z])/gi,nt=function(e,t){return t.toUpperCase()};K.fn=K.prototype={nquery:J,constructor:K,selector:"",length:0,toArray:function(){return I.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:I.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(I.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:z,sort:B.sort,splice:B.splice},K.extend=K.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||K.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(K.isPlainObject(r)||(i=K.isArray(r)))?(i?(i=!1,o=n&&K.isArray(n)?n:[]):o=n&&K.isPlainObject(n)?n:{},s[t]=K.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},K.extend({expando:"nQuery"+(J+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)>=0},isPlainObject:function(e){return"object"!==K.type(e)||e.nodeType||K.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?U[V.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=K.trim(e),e&&(1===e.indexOf("use strict")?(t=Q.createElement("script"),t.text=e,Q.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(et,"ms-").replace(tt,nt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(Z,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?K.merge(r,"string"==typeof e?[e]:e):z.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:X.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return _.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),K.isFunction(e)?(r=I.call(arguments,2),i=function(){return e.apply(t||this,r.concat(I.call(arguments)))},i.guid=e.guid=e.guid||K.guid++,i):void 0},now:Date.now,support:Y}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){U["[object "+t+"]"]=t.toLowerCase()});var rt=function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h,g;if((t?t.ownerDocument||t:$)!==L&&q(t),t=t||L,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(O&&!r){if(i=gt.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&R(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&w.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(s)),n}if(w.qsa&&(!F||!F.test(e))){if(d=f=W,h=t,g=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(l=N(e),(f=t.getAttribute("id"))?d=f.replace(vt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=mt.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return Z.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return S(e.replace(ut,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==V&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[B,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[W]||(t[W]={}),(a=u[r])&&a[0]===B&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function v(e,t,n,i,o,s){return i&&!i[W]&&(i=v(i)),o&&!o[W]&&(o=v(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,v=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:m(v,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y;if(n&&n(y,x,a,u),i)for(l=m(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?tt.call(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=m(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):Z.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return tt.call(t,e)>-1},s,!0),c=[function(e,n,r){return!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))}];i>a;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!T.relative[e[r].type];r++);return v(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ut,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],y=j,x=r||o&&T.find.TAG("*",l),b=B+=null==y?1:Math.random()||.1,w=x.length;for(l&&(j=s!==L&&s);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,s,a)){u.push(c);break}l&&(B=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,s,a);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=J.call(u));v=m(v)}Z.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(B=b,j=y),g};return i?r(s):s}var b,w,T,C,k,N,E,S,j,D,A,q,L,H,O,F,M,P,R,W="sizzle"+-new Date,$=e.document,B=0,I=0,_=n(),z=n(),X=n(),U=function(e,t){return e===t&&(A=!0),0},V="undefined",G=1<<31,Y={}.hasOwnProperty,Q=[],J=Q.pop,K=Q.push,Z=Q.push,et=Q.slice,tt=Q.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),st="\\["+rt+"*("+it+")(?:"+rt+"*([*^$|!~]?=)"+rt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ot+"))|)"+rt+"*\\]",at=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+st+")*)|.*)\\)|)",ut=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),lt=new RegExp("^"+rt+"*,"+rt+"*"),ct=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),ft=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),pt=new RegExp(at),dt=(new RegExp("^"+ot+"$"),{ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+st),PSEUDO:new RegExp("^"+at),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")}),ht=/^[^{]+\{\s*\[native \w/,gt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,mt=/[+~]/,vt=/'|\\/g,yt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),xt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(Q=et.call($.childNodes),$.childNodes),Q[$.childNodes.length].nodeType}catch(bt){Z={apply:Q.length?function(e,t){K.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},q=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:$,r=n.defaultView;return n!==L&&9===n.nodeType&&n.documentElement?(L=n,H=n.documentElement,O=!k(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){q()},!1):r.attachEvent&&r.attachEvent("onunload",function(){q()})),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=ht.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),w.getById=i(function(e){return H.appendChild(e).id=W,!n.getElementsByName||!n.getElementsByName(W).length}),w.getById?(T.find.ID=function(e,t){if(typeof t.getElementById!==V&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(yt,xt);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(yt,xt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==V?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==V&&O?t.getElementsByClassName(e):void 0},M=[],F=[],(w.qsa=ht.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select msallowclip=''><option selected=''></option></select>",e.querySelectorAll("[msallowclip^='']").length&&F.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||F.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=ht.test(P=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=P.call(e,"div"),P.call(e,"[s!='']:x"),M.push("!=",at)}),F=F.length&&new RegExp(F.join("|")),M=M.length&&new RegExp(M.join("|")),t=ht.test(H.compareDocumentPosition),R=t||ht.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return A=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!w.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===$&&R($,e)?-1:t===n||t.ownerDocument===$&&R($,t)?1:D?tt.call(D,e)-tt.call(D,t):0:4&r?-1:1)}:function(e,t){if(e===t)return A=!0,0;var r,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:D?tt.call(D,e)-tt.call(D,t):0;if(o===a)return s(e,t);for(r=e;r=r.parentNode;)u.unshift(r);for(r=t;r=r.parentNode;)l.unshift(r);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},n):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&q(e),n=n.replace(ft,"='$1']"),!(!w.matchesSelector||!O||M&&M.test(n)||F&&F.test(n)))try{var r=P.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&q(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&q(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:dt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(yt,xt),e[3]=(e[3]||e[4]||e[5]||"").replace(yt,xt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return dt.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=N(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(yt,xt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(c=m[W]||(m[W]={}),l=c[e]||[],d=l[0]===B&&l[1],p=l[0]===B&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[B,d,p];break}}else if(y&&(l=(t[W]||(t[W]={}))[e])&&l[0]===B)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[W]||(f[W]={}))[e]=[B,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=tt.call(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(ut,"$1"));return i[W]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),first:l(function(){return[0]}),last:l(function(e,t){return[t-1]})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,N=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=T.preFilter;a;){(!r||(i=lt.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=ct.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ut," ")}),a=a.slice(r.length));for(s in T.filter)!(i=dt[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):z(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=N(e)),n=t.length;n--;)o=y(t[n]),o[W]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&N(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(t=(T.find.ID(s.matches[0].replace(yt,xt),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=dt.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(yt,xt),mt.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return(l||E(e,f))(r,t,!O,n,mt.test(e)&&c(t.parentNode)||t),n},w.sortStable=W.split("").sort(U).join("")===W,w.detectDuplicates=!!A,q(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);K.find=rt,K.expr=rt.selectors,K.expr[":"]=K.expr.pseudos,K.unique=rt.uniqueSort,K.text=rt.getText,K.isXMLDoc=rt.isXML,K.contains=rt.contains;var it=K.expr.match.needsContext,ot=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,st=/^.[^:#\[\.,]*$/;K.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?K.find.matchesSelector(r,e)?[r]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;n>t;t++)if(K.contains(i[t],this))return!0}));for(t=0;n>t;t++)K.find(e,i[t],r);return r=this.pushStack(n>1?K.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&it.test(e)?K(e):e||[],!1).length}});var at,ut=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=K.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ut.exec(e),!n||!n[1]&&t)return!t||t.nquery?(t||at).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:Q,!0)),ot.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=Q.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Q,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof at.ready?at.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))};lt.prototype=K.fn,at=K(Q);var ct=/^(?:parents|prev(?:Until|All))/,ft={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&K(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),K.fn.extend({has:function(e){var t=K(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(K.contains(this,t[e]))return!0
})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=it.test(e)||"string"!=typeof e?K(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?K.unique(o):o)},index:function(e){return e?"string"==typeof e?X.call(K(e),this[0]):X.call(this,e.nquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,r){var i=K.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=K.filter(r,i)),this.length>1&&(ft[e]||K.unique(i),ct.test(e)&&i.reverse()),this.pushStack(i)}});var pt=/\S+/g,dt={};K.Callbacks=function(e){e="string"==typeof e?dt[e]||o(e):K.extend({},e);var t,n,r,i,s,a,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=u.length,r=!0;u&&s>a;a++)if(u[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function o(t){K.each(t,function(t,n){var r=K.type(n);"function"===r?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?s=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,u,n))>-1;)u.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?K.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(n){K.each(t,function(t,o){var s=K.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,r):r}},i={};return r.pipe=r.then,K.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=I.call(arguments),s=o.length,a=1!==s||e&&K.isFunction(e.promise)?s:0,u=1===a?e:K.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?I.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&K.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}});var ht;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(e===!0?--K.readyWait:K.isReady)||(K.isReady=!0,e!==!0&&--K.readyWait>0||(ht.resolveWith(Q,[K]),K.fn.triggerHandler&&(K(Q).triggerHandler("ready"),K(Q).off("ready"))))}}),K.ready.promise=function(t){return ht||(ht=K.Deferred(),"complete"===Q.readyState?setTimeout(K.ready):(Q.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),ht.promise(t)},K.ready.promise();var gt=K.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===K.type(n)){i=!0;for(a in n)K.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,K.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(K(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=K.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,K.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(K.isEmptyObject(o))K.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,K.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{K.isArray(t)?r=t.concat(t.map(K.camelCase)):(i=K.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(pt)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var mt=new a,vt=new a,yt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,xt=/([A-Z])/g;K.extend({hasData:function(e){return vt.hasData(e)||mt.hasData(e)},data:function(e,t,n){return vt.access(e,t,n)},removeData:function(e,t){vt.remove(e,t)},_data:function(e,t,n){return mt.access(e,t,n)},_removeData:function(e,t){mt.remove(e,t)}}),K.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=vt.get(o),1===o.nodeType&&!mt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=K.camelCase(r.slice(5)),u(o,r,i[r])));mt.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){vt.set(this,e)}):gt(this,function(t){var n,r=K.camelCase(e);if(o&&void 0===t){if(n=vt.get(o,e),void 0!==n)return n;if(n=vt.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=vt.get(this,r);vt.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&vt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){vt.remove(this,e)})}}),K.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=mt.get(e,t),n&&(!r||K.isArray(n)?r=mt.access(e,t,K.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),r=n.length,i=n.shift(),o=K._queueHooks(e,t),s=function(){K.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return mt.get(e,n)||mt.access(e,n,{empty:K.Callbacks("once memory").add(function(){mt.remove(e,[t+"queue",n])})})}}),K.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each(function(){var n=K.queue(this,e,t);K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=K.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=mt.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var bt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wt=["Top","Right","Bottom","Left"],Tt=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)},Ct=/^(?:checkbox|radio)$/i;!function(){var e=Q.createDocumentFragment(),t=e.appendChild(Q.createElement("div")),n=Q.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var kt="undefined";Y.focusinBubbles="onfocusin"in e;var Nt=/^key/,Et=/^(?:mouse|pointer|contextmenu)|click/,St=/^(?:focusinfocus|focusoutblur)$/,jt=/^([^.]*)(?:\.(.+)|)$/;K.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=mt.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=K.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof K!==kt&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pt)||[""],l=t.length;l--;)a=jt.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d&&(f=K.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=K.event.special[d]||{},c=K.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&K.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,s)!==!1||e.addEventListener&&e.addEventListener(d,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),K.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=mt.hasData(e)&&mt.get(e);if(m&&(u=m.events)){for(t=(t||"").match(pt)||[""],l=t.length;l--;)if(a=jt.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=K.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||K.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)K.event.remove(e,d+t[l],n,r,!0);K.isEmptyObject(u)&&(delete m.handle,mt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||Q],d=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||Q,3!==r.nodeType&&8!==r.nodeType&&!St.test(d+K.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[K.expando]?t:new K.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:K.makeArray(n,[t]),f=K.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!K.isWindow(r)){for(u=f.delegateType||d,St.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||Q)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(mt.get(s,"events")||{})[t.type]&&mt.get(s,"handle"),c&&c.apply(s,n),c=l&&s[l],c&&c.apply&&K.acceptData(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!K.acceptData(r)||l&&K.isFunction(r[d])&&!K.isWindow(r)&&(a=r[l],a&&(r[l]=null),K.event.triggered=d,r[d](),K.event.triggered=void 0,a&&(r[l]=a)),t.result}},dispatch:function(e){e=K.event.fix(e);var t,n,r,i,o,s=[],a=I.call(arguments),u=(mt.get(this,"events")||{})[e.type]||[],l=K.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(s=K.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((K.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?K(i,this).index(u)>=0:K.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Q,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[K.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Et.test(i)?this.mouseHooks:Nt.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new K.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=Q),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&K.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?K.event.trigger(i,null,t):K.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},K.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!K.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Y.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=mt.access(r,t);i||r.addEventListener(e,n,!0),mt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=mt.access(r,t)-1;i?mt.access(r,t,i):(r.removeEventListener(e,n,!0),mt.remove(r,t))}}}),K.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c;else if(!r)return this;return 1===i&&(o=r,r=function(e){return K().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=K.guid++)),this.each(function(){K.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,K(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){K.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?K.event.trigger(e,t,n,!0):void 0}});var Dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,At=/<([\w:]+)/,qt=/<|&#?\w+;/,Lt=/<(?:script|style|link)/i,Ht=/checked\s*(?:[^=]|=\s*.checked.)/i,Ot=/^$|\/(?:java|ecma)script/i,Ft=/^true\/(.*)/,Mt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Pt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Pt.optgroup=Pt.option,Pt.tbody=Pt.tfoot=Pt.colgroup=Pt.caption=Pt.thead,Pt.th=Pt.td,K.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=K.contains(e.ownerDocument,e);if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(s=v(a),o=v(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||v(e),s=s||v(a),r=0,i=o.length;i>r;r++)m(o[r],s[r]);else m(e,a);return s=v(a,"script"),s.length>0&&g(s,!u&&v(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)if("object"===K.type(i))K.merge(f,i.nodeType?[i]:i);else if(qt.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(At.exec(i)||["",""])[1].toLowerCase(),a=Pt[s]||Pt._default,o.innerHTML=a[1]+i.replace(Dt,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;K.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||-1===K.inArray(i,r))&&(u=K.contains(i.ownerDocument,i),o=v(c.appendChild(i),"script"),u&&g(o),n))for(l=0;i=o[l++];)Ot.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=K.event.special,s=0;void 0!==(n=e[s]);s++){if(K.acceptData(n)&&(i=n[mt.expando],i&&(t=mt.cache[i]))){if(t.events)for(r in t.events)o[r]?K.event.remove(n,r):K.removeEvent(n,r,t.handle);mt.cache[i]&&delete mt.cache[i]}delete vt.cache[n[vt.expando]]}}}),K.fn.extend({text:function(e){return gt(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?K.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||K.cleanData(v(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return gt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Lt.test(e)&&!Pt[(At.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Dt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=_.apply([],e);var n,r,i,o,s,a,u=0,l=this.length,c=this,f=l-1,p=e[0],g=K.isFunction(p);if(g||l>1&&"string"==typeof p&&!Y.checkClone&&Ht.test(p))return this.each(function(n){var r=c.eq(n);g&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=K.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=K.map(v(n,"script"),d),o=i.length;l>u;u++)s=n,u!==f&&(s=K.clone(s,!0,!0),o&&K.merge(i,v(s,"script"))),t.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,K.map(i,h),u=0;o>u;u++)s=i[u],Ot.test(s.type||"")&&!mt.access(s,"globalEval")&&K.contains(a,s)&&(s.src?K._evalUrl&&K._evalUrl(s.src):K.globalEval(s.textContent.replace(Mt,"")))}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var n,r=[],i=K(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),K(i[s])[t](n),z.apply(r,n.get());return this.pushStack(r)}});var Rt,Wt={},$t=/^margin/,Bt=new RegExp("^("+bt+")(?!px)[a-z%]+$","i"),It=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=Q.documentElement,o=Q.createElement("div"),s=Q.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&K.extend(Y,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(Q.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),t}}))}(),K.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var _t=/^(none|table(?!-c[ea]).+)/,zt=new RegExp("^("+bt+")(.*)$","i"),Xt=new RegExp("^([+-])=("+bt+")","i"),Ut={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:"0",fontWeight:"400"},Gt=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=w(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=K.camelCase(t),u=e.style;return t=K.cssProps[a]||(K.cssProps[a]=C(u,a)),s=K.cssHooks[t]||K.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Xt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(K.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||K.cssNumber[a]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,s,a=K.camelCase(t);return t=K.cssProps[a]||(K.cssProps[a]=C(e.style,a)),s=K.cssHooks[t]||K.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=w(e,t,r)),"normal"===i&&t in Vt&&(i=Vt[t]),""===n||n?(o=parseFloat(i),n===!0||K.isNumeric(o)?o||0:i):i}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,r){return n?_t.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Ut,function(){return E(e,t,r)}):E(e,t,r):void 0},set:function(e,n,r){var i=r&&It(e);return k(e,n,r?N(e,t,r,"border-box"===K.css(e,"boxSizing",!1,i),i):0)}}}),K.cssHooks.marginRight=T(Y.reliableMarginRight,function(e,t){return t?K.swap(e,{display:"inline-block"},w,[e,"marginRight"]):void 0}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+wt[r]+t]=o[r]||o[r-2]||o[0];return i}},$t.test(e)||(K.cssHooks[e+t].set=k)}),K.fn.extend({css:function(e,t){return gt(this,function(e,t,n){var r,i,o={},s=0;if(K.isArray(t)){for(r=It(e),i=t.length;i>s;s++)o[t[s]]=K.css(e,t[s],!1,r);return o}return void 0!==n?K.style(e,t,n):K.css(e,t)},e,t,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Tt(this)?K(this).show():K(this).hide()})}}),K.Tween=j,j.prototype={constructor:j,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(K.cssNumber[n]?"":"px")},cur:function(){var e=j.propHooks[this.prop];return e&&e.get?e.get(this):j.propHooks._default.get(this)},run:function(e){var t,n=j.propHooks[this.prop];return this.pos=t=this.options.duration?K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):j.propHooks._default.set(this),this}},j.prototype.init.prototype=j.prototype,j.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},j.propHooks.scrollTop=j.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},K.fx=j.prototype.init,K.fx.step={};var Yt,Qt,Jt=/^(?:toggle|show|hide)$/,Kt=new RegExp("^(?:([+-])=|)("+bt+")([a-z%]*)$","i"),Zt=/queueHooks$/,en=[L],tn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Kt.exec(t),o=i&&i[3]||(K.cssNumber[e]?"":"px"),s=(K.cssNumber[e]||"px"!==o&&+r)&&Kt.exec(K.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,K.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};K.Animation=K.extend(O,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],tn[n]=tn[n]||[],tn[n].unshift(t)},prefilter:function(e,t){t?en.unshift(e):en.push(e)}}),K.speed=function(e,t,n){var r=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t};return r.duration=K.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in K.fx.speeds?K.fx.speeds[r.duration]:K.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){K.isFunction(r.old)&&r.old.call(this),r.queue&&K.dequeue(this,r.queue)},r},K.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Tt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=K.isEmptyObject(e),o=K.speed(t,n,r),s=function(){var t=O(this,K.extend({},e),o);(i||mt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=K.timers,s=mt.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Zt.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&K.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=mt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=K.timers,s=r?r.length:0;for(n.finish=!0,K.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t];K.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(A(t,!0),e,r,i)}}),K.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),K.timers=[],K.fx.tick=function(){var e,t=0,n=K.timers;for(Yt=K.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||K.fx.stop(),Yt=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Qt||(Qt=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Qt),Qt=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=Q.createElement("input"),t=Q.createElement("select"),n=t.appendChild(Q.createElement("option"));e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=n.selected,t.disabled=!0,Y.optDisabled=!n.disabled,e=Q.createElement("input"),e.value="t",e.type="radio",Y.radioValue="t"===e.value}();var nn,rn,on=K.expr.attrHandle;K.fn.extend({attr:function(e,t){return gt(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===kt?K.prop(e,t,n):(1===o&&K.isXMLDoc(e)||(t=t.toLowerCase(),r=K.attrHooks[t]||(K.expr.match.bool.test(t)?rn:nn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=K.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t))
},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(pt);if(o&&1===e.nodeType)for(;n=o[i++];)r=K.propFix[n]||n,K.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),rn={set:function(e,t,n){return t===!1?K.removeAttr(e,n):e.setAttribute(n,n),n}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var n=on[t]||K.find.attr;on[t]=function(e,t,r){var i,o;return r||(o=on[t],on[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,on[t]=o),i}});var sn=/^(?:input|select|textarea|button)$/i;K.fn.extend({prop:function(e,t){return gt(this,K.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!K.isXMLDoc(e),o&&(t=K.propFix[t]||t,i=K.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||sn.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this});var an=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pt)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(an," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=K.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pt)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(an," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?K.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(K.isFunction(e)?function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=K(this),o=e.match(pt)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===kt||"boolean"===n)&&(this.className&&mt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":mt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(an," ").indexOf(t)>=0)return!0;return!1}});var un=/\r/g;K.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=K.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,K(this).val()):e,null==i?i="":"number"==typeof i?i+="":K.isArray(i)&&(i=K.map(i,function(e){return null==e?"":e+""})),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=K.valHooks[i.type]||K.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(un,""):null==n?"":n)}}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(Y.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=K.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=K.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}},Y.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ln=K.now(),cn=/\?/;K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+e),t};var fn,pn,dn=/#.*$/,hn=/([?&])_=[^&]*/,gn=/^(.*?):[ \t]*([^\r\n]*)$/gm,mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,yn=/^\/\//,xn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,bn={},wn={},Tn="*/".concat("*");try{pn=location.href}catch(Cn){pn=Q.createElement("a"),pn.href="",pn=pn.href}fn=xn.exec(pn.toLowerCase())||[],K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:pn,type:"GET",isLocal:mn.test(fn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Tn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?P(P(e,K.ajaxSettings),t):P(K.ajaxSettings,e)},ajaxPrefilter:F(bn),ajaxTransport:F(wn),ajax:function(e,t){function n(e,t,n,s){var u,c,v,y,b,T=t;2!==x&&(x=2,a&&clearTimeout(a),r=void 0,o=s||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(y=R(f,w,n)),y=W(f,y,w,u),u?(f.ifModified&&(b=w.getResponseHeader("Last-Modified"),b&&(K.lastModified[i]=b),b=w.getResponseHeader("etag"),b&&(K.etag[i]=b)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,u=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",u?h.resolveWith(p,[c,T,w]):h.rejectWith(p,[w,T,v]),w.statusCode(m),m=void 0,l&&d.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?c:v]),g.fireWith(p,[w,T]),l&&(d.trigger("ajaxComplete",[w,f]),--K.active||K.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,u,l,c,f=K.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.nquery)?K(p):K.event,h=K.Deferred(),g=K.Callbacks("once memory"),m=f.statusCode||{},v={},y={},x=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=gn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return r&&r.abort(t),n(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||pn)+"").replace(dn,"").replace(yn,fn[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=K.trim(f.dataType||"*").toLowerCase().match(pt)||[""],null==f.crossDomain&&(u=xn.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===fn[1]&&u[2]===fn[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(fn[3]||("http:"===fn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=K.param(f.data,f.traditional)),M(bn,f,t,w),2===x)return w;l=f.global,l&&0===K.active++&&K.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!vn.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(cn.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=hn.test(i)?i.replace(hn,"$1_="+ln++):i+(cn.test(i)?"&":"?")+"_="+ln++)),f.ifModified&&(K.lastModified[i]&&w.setRequestHeader("If-Modified-Since",K.lastModified[i]),K.etag[i]&&w.setRequestHeader("If-None-Match",K.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+Tn+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)w.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===x))return w.abort();b="abort";for(c in{success:1,error:1,complete:1})w[c](f[c]);if(r=M(wn,f,t,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},f.timeout));try{x=1,r.send(v,n)}catch(T){if(!(2>x))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return K.get(e,t,n,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")}}),K.each(["get","post"],function(e,t){K[t]=function(e,n,r,i){return K.isFunction(n)&&(i=i||r,r=n,n=void 0),K.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var kn=/%20/g,Nn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,jn=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var n,r=[],i=function(e,t){t=K.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.nquery&&!K.isPlainObject(e))K.each(e,function(){i(this.name,this.value)});else for(n in e)$(n,e[n],t,i);return r.join("&").replace(kn,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&jn.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Dn=0,An={},qn={0:200,1223:204},Ln=K.ajaxSettings.xhr();e.ActiveXObject&&K(e).on("unload",function(){for(var e in An)An[e]()}),Y.cors=!!Ln&&"withCredentials"in Ln,Y.ajax=Ln=!!Ln,K.ajaxTransport(function(e){var t;return Y.cors||Ln&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++Dn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete An[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(qn[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=An[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Q.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Hn=[],On=/(=)\?(?=&|$)|\?\?/;K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Hn.pop()||K.expando+"_"+ln++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(On.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&On.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(On,"$1"+i):t.jsonp!==!1&&(t.url+=(cn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||K.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Hn.push(i)),s&&K.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||Q;var r=ot.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=K.buildFragment([e],t,i),i&&i.length&&K(i).remove(),K.merge([],r.childNodes))};var Fn=K.fn.load;K.fn.load=function(e,t,n){if("string"!=typeof e&&Fn)return Fn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=K.trim(e.slice(a)),e=e.slice(0,a)),K.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&K.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?K("<div>").append(K.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem}).length},K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){K.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return gt(this,function(t,n,r){var i;return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?K.css(t,n,s):K.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("nquery",[],function(){return K});var Mn=e.nQuery,Pn=e.$;return K.noConflict=function(t){return e.$===K&&(e.$=Pn),t&&e.nQuery===K&&(e.nQuery=Mn),K},typeof t===kt&&(e.nQuery=e.$=K),K});
var prdom = prdom || {};
prdom.query = nQuery.noConflict(true);
//prdom.query.ajaxSetup({
 // cache: true
//});

var ntv = ntv || {};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery replaceText - v1.1 - 11/21/2009
// http://benalman.com/projects/jquery-replacetext-plugin/
// Copyright (c) 2009 "Cowboy" Ben Alman
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(prdom.query);

/*
 * jQuery Extra Selectors - (c) Keith Clark freely distributable under the terms of the MIT license.
 * 
 * twitter.com/keithclarkcouk
 * www.keithclark.co.uk
 */

(function($) {
	function getNthIndex(cur, dir) {
		var t = cur, idx = 0;
		while (cur = cur[dir] ) {
			if (t.tagName == cur.tagName) {
				idx++;
			}
		}
		return idx;
	}

	function isNthOf(elm, pattern, dir) {
		var position = getNthIndex(elm, dir), loop;
		if (pattern == "odd" || pattern == "even") {
			loop = 2;
			position -= !(pattern == "odd");
		} else {
			var nth = pattern.indexOf("n");
			if (nth > -1) {
				loop = parseInt(pattern, 10) || parseInt(pattern.substring(0, nth) + "1", 10);
				position -= (parseInt(pattern.substring(nth + 1), 10) || 0) - 1;
			} else {
				loop = position + 1;
				position -= parseInt(pattern, 10) - 1;
			}
		}
		return (loop<0 ? position<=0 : position >= 0) && position % loop == 0
	}

	var pseudos = {
		"first-of-type": function(elm) {
			return getNthIndex(elm, "previousSibling") == 0;
		},
		"last-of-type": function(elm) { 
			return getNthIndex(elm, "nextSibling") == 0;
		},
		"only-of-type": function(elm) { 
			return pseudos["first-of-type"](elm) && pseudos["last-of-type"](elm);
		},
		"nth-of-type": function(elm, i, match) {
			return isNthOf(elm, match[3], "previousSibling");
		},
		"nth-last-of-type": function(elm, i, match) {
			return isNthOf(elm, match[3], "nextSibling");
		}		
	}
	$.extend($.expr[':'], pseudos);
}(prdom.query));
// static class
ntv.Util = new function(){

    var q = prdom.query;
    this.consts = {
        // DOMAINS
        DOMAIN: "adserve.postrelease.com",
        JDOMAIN: "jadserve.postrelease.com",
        RESIZE_DOMAIN: "ntvimg-a.akamaihd.net",
        ASSETS_DOMAIN: "ntvassets-a.akamaihd.net",
        ASSETS_PREFIX: "s",

        // REQUEST
        VIS_ID: "prx_visitor",
        REQ_KEY: "prx_rk",
        REQ_URL: "prx_url",
        REQ_URL_NTV: "ntv_url",
        PAGE_REF: "prx_referrer",
        IS_MOBILE: "prx_mobile",
        AT: "ntv_at",
        SUB_AT: "ntv_sat",
        FRAUD: "ntv_fr",
        CPM: 'ntv_cpm',
        VALUE: 'ntv_v',
        TOTAL_VALUE: 'ntv_tv',


        // ENTITIES
        ABA: "prx_adp",
        ARTICLE_TMPL: "prx_t",
        AVP: "ntv_a",
        ADV_ID:  "prx_adv",
        PLC_ID: "prx_pl",

        // FILTERS
        ADV_FILTER: "prx_avtf",
        CMP_FILTER: "prx_ctf",
        AD_FILTER: "ntv_atf",
        PTD_FILTER: "ntv_ptd", // placements to display

        // SPECIAL DEBUG/PREVIEW OPTIONS
        REQ_OPTIONS: "prx_ro",
        RENDER_MODE: "prx_rm",
        OVERIDE_ARTICLE: "ntv_oat",
        PASS_PREVIEW: "ntv_tp",
        IP: "prx_userip",
        FORCE_JAVA: "ntv_jat",
        IS_TOUT: "ntv_it",
        FORCE_NET: "ntv_net",
        DEBUG_MODE: "ntv_dm",
        LEGACY_VIDEO_SUPPORT: "ntv_lvs",
        REDIRECT: "ntv_r",

        //VIDEO PLAYER TYPE
        YOUTUBE_PLAYER: 1,
        NATIVO_PLAYER: 2,
        VAST_PLAYER: 3,

        MAX_INT32_VALUE: 2147483647

    };
    var scope = this;
    var consts = this.consts;

    var canExecuteEvents = []; // used on the function canExecute to store when was the last time functions were trying to execute

    /*
     *   Check if the browser is firefox
     */
    this.isFirefox = function() {
        return navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    };


    this.isIE = function() {
        return navigator.userAgent.indexOf("MSIE") > -1 || navigator.userAgent.indexOf("rv:11.0") > -1;
    };

    /*
     *   This function will either run the parameter function right away, and add a onloadValidation function
     *  if the browser is not firefox or will wait for the load event for Firefox.
     */
    this.runWithFirefoxIframeProtection = function(iframeElem, func, onloadValidation) {
        this.isFirefox() ?
            q(iframeElem).bind("load", function () { func() })
            : (function () {
                func();
                if (onloadValidation){
                    q(iframeElem).bind("load", function () { onloadValidation() });
                }
            })()
    };

    /*
     *  This function will check if any of the list elements match the str
     */
    this.match = function(str, list) {
        for (var i = 0; i < list.length; i++) {
            if (str.indexOf(list[i]) >= 0) {
                return true;
            }
        }
        return false;
    };


    /*
     * This function will return a random int32 value between min and max. If the parameters are omitted it will take
     * into account the entire int32 range.
     */
    this.getRandomInt = function(min, max) {
        min = min || 0;
        max = max || consts.MAX_INT32_VALUE;
        return Math.floor(Math.random() * (max - min)) + min;
    };

    /*
     * This function will return the element width, height, and top and left positions.
     */
    this.getElementOffset = function(elem){
        var result = {
            top : elem.offsetTop,
            left : elem.offsetLeft,
            width : elem.offsetWidth,
            height : elem.offsetHeight
        };

        while (elem.offsetParent) {
            elem = elem.offsetParent;
            result.top += elem.offsetTop;
            result.left += elem.offsetLeft;
        }

        return result;
    };

    /*
     * This function will return the element width and height. It will give preference to get the value from the
     * respective attributes, otherwise will try to calculate. The result is rounded and returned as int.
     */
    this.getElementDimensions = function(elem){
        var r = Math.floor;
        var h = 0;
        var w = 0;
        if (elem.nodeName != 'IMG' || elem.complete || elem.id=="prx_disclaimer_iframe"){ // any element or if image check that it finished loading
            h = parseInt(q(elem).attr("height").toString().replace(/\g/gi,""));
            w = parseInt(q(elem).attr("width").toString().replace(/\g/gi,""));
            if (!h || isNaN(h)) h = q(elem).height();
            if (!w || isNaN(w)) w = q(elem).width();
        }
        return {
            w : r(w),
            h : r(h)
        }
    };

    this.setElementDimensions = function(elem, dimensions, maxWidth){
        if (isNaN(dimensions.w)|| isNaN(dimensions.h)){
            return;
        }

        var q = prdom.query;
        var ntvWidth = q(elem).attr('ntv-width'); // the initial with
        var ntvHeight = q(elem).attr('ntv-height'); // the initial height
        if (!ntvWidth){
            ntvWidth = dimensions.w;
            q(elem).attr('ntv-width',ntvWidth);
        }
        if (!ntvHeight){
            ntvHeight = dimensions.h;
            q(elem).attr('ntv-height',ntvHeight);
        }
        maxWidth = maxWidth || Math.MAX_INT32_VALUE;
        var w = Math.min(maxWidth, ntvWidth);
        var h = ntvHeight * w / ntvWidth;
        if (w != dimensions.w || h != dimensions.h && w > 0) {
            q(elem).css({
                'height': h,
                'width': w,
                'max-height': h,
                'max-width': w
            }).attr('height', h).attr('width', w);
        }
    };

    /*
     * This function will get the top and left scroll poisitons
     */
    this.getScrollPos = function(){
        var win = window;
        var docElem = document.documentElement;
        var body = document.body;
        return  {
            top : Math.floor(win.pageYOffset ? win.pageYOffset : docElem.scrollTop ? docElem.scrollTop : body.scrollTop),
            left : Math.floor(win.pageXOffset ? win.pageXOffset : docElem.scrollLeft ? docElem.scrollLeft : body.scrollLeft),
            time : new Date()
        }
    };


    /*
     * This function will generate an array with times in seconds we use to sample time on content,
     * scroll positions.
     */
    this.getSampleTimeArray = function ( cap ) {
        var result = [];
        var i = 0;
        var x = 0;
        var total = 0;
        while (total < cap) {
            x += 2000 + (90 * i);
            result.push(x);
            i++;
            total += x;
        }
        return result;
    };

    /*
     * This function will prevent the func to be executed more than once on a set inverval
     */
    this.canExecute = function (func, id, interval) {
        var now = new Date();
        if ((now - canExecuteEvents['lastCheck' + id]) < interval) {
            if (canExecuteEvents['missedCheck' + id] == 0) {
                canExecuteEvents['missedCheck' + id]++;
                setTimeout(func, interval)
            }
            return false;
        }
        canExecuteEvents['lastCheck' + id] = new Date();
        canExecuteEvents['missedCheck' + id] = 0;
        return true;
    };

    // private helper function
    var setOnLoad = function(element, func) {
        return element.onload = func;
    };

    // private helper function
    var setOnError = function (element, func) {
        return element.onerror = func;
    };

    /*
     * this function append a tracking pixel to a page
     */
    this.appendImage = function (imageUrl) {
        if (imageUrl != null) {
            var pr = PostRelease;
            // append page referrer if needed
            if (imageUrl.indexOf(this.getServerDomain()) > 0){
                if (imageUrl.indexOf(consts.PAGE_REF) < 0 && document.referrer) {
                    imageUrl += '&' + consts.PAGE_REF + '=' + encodeURIComponent(document.referrer);
                }
                if (pr.tout){
                    imageUrl += "&" + consts.IS_TOUT;
                }
            }
            // track page inventory properly in case of CPM impression
            var cpmImp = "ntv_at=46"
            if (imageUrl.indexOf(cpmImp) > 0){
                if (!pr.pageInventoryTracked) {
                    pr.pageInventoryTracked = true;
                    imageUrl = imageUrl.replace(cpmImp, cpmImp + ",302");
                }

            }

            imageUrl = this.adBlockerValidation(imageUrl);

            var img = new Image(1, 1);
            img.src = imageUrl;
            setOnLoad(img, function () {
                setOnLoad(img, null);
                setOnError(img, null);
            });
            setOnError(img, function () {
                setOnLoad(img, null);
                setOnError(img, null);
            });
        }
    };

    /*
     * This function check if the element is on the viewport, what is the element area and what is the viewable area
     */
    this.getElementViewability = function (el) {

        //jquery protection
        if (el instanceof prdom.query) {
            el = el[0];
        }
        var rect;
        try {
            rect = el.getBoundingClientRect();
        } catch (e){
            return {visible : false, totalArea : 0, visibleArea : 0};
        }

        // protection for old browsers
        if (!rect.width){
            rect.width = el.offsetWidth;
        }
        if (!rect.height){
            rect.height = el.offsetHeight
        }
        var win = prdom.win || window;

        var winHeight = win.innerHeight ? win.innerHeight : q(win).height();
        var winWidth = win.innerWidth ? win.innerWidth : q(win).width();

        var visibleHeight = 0;
        var visibleWidth = 0;
        if (rect.top >= 0 ) {
            if (rect.bottom > winHeight) {
                visibleHeight = rect.height - (rect.bottom - winHeight);
            } else {
                visibleHeight = rect.height;
            }
        } else {
            visibleHeight = rect.height + rect.top;
        }
        if (rect.left >= 0) {
            if (rect.right > winWidth) {
                visibleWidth = rect.width - (rect.right - winWidth);
            } else {
                visibleWidth = rect.width;
            }
        } else {
            if (rect.right > winWidth) {
                visibleWidth = rect.width - (rect.right - winWidth);
            }
            visibleWidth +=  (rect.width + rect.left);
        }

        var visibleArea = 0;
        if (visibleWidth > 0 && visibleHeight > 0){
            visibleArea = visibleWidth * visibleHeight;
        }

        var visible = visibleArea > 0 ||
            ((rect.top >= 0 && rect.top <= winHeight) || (rect.bottom >= 0 && rect.bottom <= winHeight))
            &&
            ((rect.left >= 0 && rect.left <= winWidth) || (rect.right >= 0 && rect.right <= winWidth));

        return {
            visible : visible,
            totalArea : rect.width * rect.height,
            visibleArea : visibleArea
        };
    };

    /*
     * This function will try to remove the element el from the array arr
     */
    this.removeElementFromArray = function(arr, el) {
        var index = -1;
        for (var i = 0; i < arr.length; i++) {
            if (el == arr[i]) {
                index = i;
            }
        }
        if (index >= 0) {
            arr.splice(index, 1);
        }
    };


    /*
     * Copy the properties from params to obj
     */
    this.copyProperties = function(params, obj){
        for (var prop in params) {
            if (typeof params[prop] != 'function') {
                obj[prop] = params[prop];
            }
        }
    };

    /* This function will check if the element is not a unit headline link,
     * or if it is but it doesn' have a href link, which means this link should trigger the
     * video to play */
    this.isNotValidHeadlineLink = function (elem){
        var c = elem.attr('class'); // element class
        c = c || "";
        return c.indexOf('prx_viewable_title') == -1 || elem.attr('href') == "#" || !elem.attr('href');
    };

    //random bytes that will be xored with the string
    //string is looped and the 1st byte of the key is xored with the 1st byte of the original array and so on
    this.xorWithKey = function (string, key){
        var result = [];
        for (var i = 0; i < string.length; i++){
            result.push(key[i % key.length] ^ string.charCodeAt(i));
        }
        return result;
    };

    this.arrayBufferToBase64 = function(buffer) {
        var binary = '';
        var bytes = new Uint8Array( buffer );
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode( bytes[ i ] );
        }
        var result = btoa( binary );
        result = result.replace(/[+]/g,'-');
        result = result.replace(/[/]/g,'_');
        return result;
    };

    this.adBlockerEncode = function(url){
        //1. generate random 4 bytes
        var randomBytes = [];
        for (var i = 0; i < 4; i++) {
            randomBytes.push(this.getRandomInt(0, 255) -128);
        }
        //2. xor it with url string (using xor function created below)
        var b = this.xorWithKey(url, randomBytes);
        //3. append random bytes to the head
        var newArray = randomBytes.concat(b);
        //4. base 64 encode entire byte array
        return this.arrayBufferToBase64(newArray);
    };


    var overrideAndEncodeRequest = function(domain, url, assetsPrefix){
        var index = url.indexOf(domain);
        var qs = url.substring(index + domain.length + 1);
        var prefix = '';
        if (assetsPrefix){
            prefix = consts.ASSETS_PREFIX;
        } else {
            qs = scope.adBlockerEncode(qs);
        }
        return url.substring(0,index) + prefix +  scope.adBlockerDomain + '/' + qs;
    };

    this.adBlockerValidation = function(url) {
        if (this.adBlocker){
            // server request
            if (url.indexOf(consts.ASSETS_DOMAIN) >= 0) {
                url = overrideAndEncodeRequest(consts.ASSETS_DOMAIN, url, true);
            } else if (url.indexOf(this.getServerDomain()) >= 0){
                url = overrideAndEncodeRequest(this.getServerDomain(), url);
            } else if (url.indexOf(consts.RESIZE_DOMAIN) >= 0) {
                url = overrideAndEncodeRequest(consts.RESIZE_DOMAIN, url);
            }
        }
        return url;
    };

    // Function to append a script to the page.
    // It has an optional parameter that should be a function that will be called
    // whenever the script is ready.
    // The id parameter is already optional and will force the logic to just add the script once.
    this.appendScript = function(url, onReadyEvent, id, doc) {
        doc = doc || document;
        var e = doc.createElement('script'); e.type = 'text/javascript';
        if (onReadyEvent != undefined) {
            if (e.readyState) {
                e.onreadystatechange = function () { // For old versions of IE
                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                        onReadyEvent();
                    }
                };
            } else {
                e.onload = function() { onReadyEvent() };
            }
        }
        // if id is defined
        if (id != undefined) {
            if (doc.getElementById(id)) { // if the element is already in the page, call the event and exits the function
                onReadyEvent();
                return;
            } else { // else set the id, and the element will be added to the page
                e.id = id;
            }
        }
        url = this.adBlockerValidation(url);
        e.src = ntvApplyProtocolToUrl(url);
        (doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(e);
    };


    this.getServerDomain = function(){
        return this.adBlocker ? this.adBlockerDomain : this.consts.JDOMAIN;
    };

    this.applyImageResizer = function(url){
        url = url.replace("assets.postrelease.com",  this.consts.RESIZE_DOMAIN); // legacy support
        url = url.replace(this.consts.ASSETS_DOMAIN, this.consts.RESIZE_DOMAIN);
        return url;
    };

    this.isAndroidTablet = function(){
        return navigator.userAgent.match(/Android/i) && !navigator.userAgent.match(/Mobile/i);
    };

    this.isiOS = function(){
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    };

    this.writeIframe = function(iframe, htmlStyte, head, body){
        var iframeDoc = iframe.contents()[0] || iframe[0].contentWindow.document;
        iframeDoc.write('<html '+ htmlStyte +'><head>' + head + '</head><body>' + body + '</body></html>');
        return iframeDoc;
    }

};

if (!Object.create) {
    Object.create = function (o) {
        function F() { }
        F.prototype = o;
        return new F();
    };
}

function ntvExtends(superClass, childClass){
    childClass.prototype = Object.create(superClass.prototype);
    childClass.prototype.constructor = childClass;
}

function ntvApplyProtocolToUrl(url){
    if (url.indexOf('http') != 0) {
        var prefix = window.location.protocol;
        if (url.indexOf('//') != 0) {
            prefix += '//';
        }
        url = prefix + url;
    }
    return url;
}

// Function to append a script to the page.
// It has an optional parameter that should be a function that will be called
// whenever the script is ready.
// The id parameter is already optional and will force the logic to just add the script once.
function ntvAppendScript(url, onReadyEvent, id, doc) {
    ntv.Util.appendScript(url,onReadyEvent,id, doc);
}


// Function to append a tracking pixel to a page
function ntvAppendPixelImage(imageUrl) {
    ntv.Util.appendImage(imageUrl);
}

function ntvAppendStylesheet(id, url, doc) {
    var doc = doc || document;
    if (!doc.getElementById(id)) {
        url = ntvApplyProtocolToUrl(url);
        var e = doc.createElement('link'); e.id = id; e.type = 'text/css'; e.rel = 'stylesheet'; e.href = url;
        (doc.getElementsByTagName('head')[0] || doc.documentElement).appendChild(e);
    }
}

function ntvApplyImageResizer(url){
    return ntv.Util.applyImageResizer(url);
}

// This function will make sure jQuery is loaded and assigned to prdom.query
// The even function will be called once the jQuery is available
function ntvjQueryInit(event) {
        event();
}

// Function to insert tracking code along with third party tracking.
// It randomizes the order to insert the main tracking and the 3rd party tracking
// The type parameter should be 1 for pixel tracking, or 2 for js tracking
function ntvInsertTracking(trackingUrl, thirdPartyTrackingTags, type) {
    this.trackingUrl = trackingUrl;
    this.thirdPartyTrackingTags = thirdPartyTrackingTags;
    this.type = type;

    this.track = function () {
        try {
            switch (this.type) {
                case 1:
                    ntvAppendPixelImage(this.trackingUrl);
                    break;
                case 2:
                    ntvAppendScript(this.trackingUrl);
                    break;
                default:
                    ntvAppendPixelImage(this.trackingUrl);
                    break;
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    this.thirdPartyTrack = function () {
        try {
            if (this.thirdPartyTrackingTags.length > 0) {
                prdom.query('body').append(this.thirdPartyTrackingTags);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    var ord = Math.floor(Math.random() * 1e16);
    if (ord < 5000000000000000) {
        this.track();
        this.thirdPartyTrack();
    } else {
        this.thirdPartyTrack();
        this.track();
    }
}

// A stop watch.
// Call resume to start/resume to start the clock 
// and stop to pause/stop the stop.
// The duration function should be used to retrieve the elapsed time in ms
function ntvStopWatch(event, triggerTime) {
    this.startTime = null;
    this.rval = 0;

    this.event = event;
    this.triggerTime = triggerTime;
    this.eventFired = false;

    var obj = this;

    this.stop = function () {
        if (this.startTime != null) {
            this.rval += new Date() - this.startTime;
            this.startTime = null;
        }
    }
    this.reset = function () {
        this.startTime = null;
        this.rval = 0;
    }
    this.resume = function () {
        if (this.startTime == null) {
            this.startTime = new Date();
            this.checkEvent();
        }
    }
    this.duration = function () { // in ms
        var result = this.rval;
        if (this.startTime != null) {
            result += new Date() - this.startTime;
        }
        return result;
    }
    this.checkEvent = function () {
        if (this.event != undefined && this.triggerTime != undefined) {
            if (this.duration() >= this.triggerTime && !this.eventFired) {
                this.event();
                this.eventFired = true;
            } else if (this.startTime != null) {
                setTimeout(function () {
                    obj.checkEvent();
                }, 50);
            }
        }
    }
}

// this class extends ntvStopWatch
function ntvTimeOnContentStopWatch(parent) {
    ntvStopWatch.call(this);
    this.parent = parent;
    this.cap = 600000; // 10 minutes
    this.totalTime = 0;
    this.sampleTimes = ntv.Util.getSampleTimeArray(this.cap);
    this.triggerTime = null;
    this.onLeaveTracked = false;
    this.engagementCountTracked = false;
    var obj = this;

    this.onLeave = function () {
        if (!this.onLeaveTracked) {
            this.onLeaveTracked = true;
            if (this.totalTime > 0) {
                this.trackTimeOnContent(true);
            }
        }
    }

    this.init = function () {
        var obj = this;
        prdom.query(window).bind('beforeunload pagehide unload', function () { obj.onLeave(); });
    }

    obj.init();

    // override check event from stopWatch class
    this.checkEvent = function () {
        if (this.sampleTimes.length >= 0) {
            if (this.triggerTime == null) {
                if (this.sampleTimes.length > 0)
                    this.triggerTime = this.sampleTimes.shift();
                else
                    return;
            }
            //track engagement count if needed
            if (!this.engagementCountTracked && (this.totalTime + this.duration()) >= 5000) {
                this.engagementCountTracked = true;
                ntvAppendPixelImage(this.parent.tracker.getUrl(38));
            }
            // track the delta based on the step size/trigger time
            if (this.duration() >= this.triggerTime) {
                this.trackTimeOnContent(false);
                this.triggerTime = null;
                this.resume();
            } else if (this.startTime != null) {
                var obj = this;
                setTimeout(function () {
                    obj.checkEvent();
                }, 50);
            }
        }
    }

    this.trackTimeOnContent = function (trackTotalTime) {
        var diff = this.duration();
        this.totalTime += diff;
        // adjust the diff in case the number is bigger than the cap
        if (this.totalTime > this.cap) {
            diff -= this.totalTime - this.cap;
            this.totalTime = this.cap;
        }
        if (diff <= 0 && !trackTotalTime) {
            return;
        } else if (diff <= 0) {
            diff = 0;
        }

        var url = this.parent.tracker.getUrl(34);
        // add the value
        url += '&' + PostRelease.consts.VALUE + '=' + diff;

        //only if we want to track total time
        if (trackTotalTime) {
            url += '&' + PostRelease.consts.TOTAL_VALUE + '=' + this.totalTime;
        }

        // do the tracking
        ntvAppendPixelImage(url);
        // reset
        this.reset();
    }

    this.stopAndTrack = function () {
        this.stop();
        this.trackTimeOnContent(false);
    }
}

ntvTimeOnContentStopWatch.prototype = Object.create(ntvStopWatch.prototype);

// This function will make a cross domain get request
function ntvXDomainRequest(url) {
    var xhr;
    if (window.XDomainRequest) {
        xhr = new window.XDomainRequest();
    } else if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    xhr.open('GET', url, false);
    xhr.send();
}

// This function will espace the string if it has not regex special chars
function ntvRegexEscape(string) {
    return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// This function will trim the string removing spaces from the begining and end of the string
function ntvTrim(string) {
    return string.replace(/^\s+|\s+$/gm, '');
}


// Utility object to generate the tracking pixel urls based on the action type
// params.aqID
// params.adID
// params.baseTrackingUrl
// params.adVersionPlacement
function ntvTrackingUrlUtil(params, parent) {

    ntv.Util.copyProperties(params, this);
    this.parent = parent;

    if (!this.parent.hasOwnProperty("recordType")) {
         this.parent.recordType = 1;
    }
    //constants
    this.secondaryImpressionActionType = 2;
    this.clickActionType = 3;
    this.videoStartActionType = 56;
    this.videoEndActionType = 23;
    this.videoProgress25PercentActionType = 39;
    this.videoProgress50PercentActionType = 40;
    this.videoProgress75PercentActionType = 41;
    this.videoHeadlineClick = 48;
    this.clickToUnMute = 55;
    this.readAndClickActionTypes = '2,3';
    this.ArticlePageViewActionType = 52;
    this.videoView = 22;
    this.videoBillableView = 58;
    this.videoViewManualStart = 57;
    this.videoPlayed15SecondsType = 60;
    this.videoPlayed30SecondsType = 61;

    this.getUrl = function (actionTypeID) {
        var result = this.baseTrackingUrl + actionTypeID;

        // Ad Version Placement
        if (this.adVersionPlacement.length > 0 || this.adID >= 100000) {
            result += "&" + PostRelease.consts.AVP  + "=" + this.adVersionPlacement;
        }
        // Record type
        if (this.parent.recordType == 30) {
            result += "&" + PostRelease.consts.FRAUD;
        }
        result += "&ord=" + new Date().getTime()
        return result;
    }

}



/**
* Created by mmurray on 10/15/14.
*/
function ntvHexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

// sets on prdom.onFocus if the tab is visible or not
// it will also fire the events set to onFocusEvents when the onFocus event changes
function ntvInitOnFocusTracking() {
    prdom.onFocus = false;
    prdom.onFocusEvents = [];
    var hidden = "hidden";

    var win = PostRelease.getTopWindow();
    var doc = win.document;

    // Standards:
    if (hidden in doc)
        doc.addEventListener("visibilitychange", onchange);
    else if ((hidden = "mozHidden") in doc)
        doc.addEventListener("mozvisibilitychange", onchange);
    else if ((hidden = "webkitHidden") in doc)
        doc.addEventListener("webkitvisibilitychange", onchange);
    else if ((hidden = "msHidden") in doc)
        doc.addEventListener("msvisibilitychange", onchange);
    // IE 9 and lower:
    else if ('onfocusin' in doc)
        doc.onfocusin = doc.onfocusout = onchange;
    // All others:
    else if ('onpageshow' in win && 'onpagehide' in win)
        win.onpageshow = win.onpagehide = onchange;
    else if ('onfocus' in win && 'onblur' in win)
        win.onfocus = win.onblur = onchange;
    else {
        // in case there is bindable event 
        prdom.onFocus = true;
        return;
    }

    function onchange(evt) {
        var v = 'visible', h = 'hidden',
            evtMap = {
                focus: v, focusin: v, pageshow: v, blur: h, focusout: h, pagehide: h
            };

        evt = evt || window.event;
        if (evt.type in evtMap)
            prdom.onFocus = evtMap[evt.type] == "visible";
        else
            prdom.onFocus = !this[hidden];
    
        for (var i = 0; i < prdom.onFocusEvents.length; i++ ) {
            prdom.onFocusEvents[i]();
        }
        prdom.query(win).trigger("ntvOnFocusChange");
    }
    // set the initial state
    onchange({ type: (document.visibilityState == "visible") ? "focus" : "blur" })
}///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CONFIG SETTINGS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function _pr() {

    // TOOD: need to go over those and check which ones should be "public". if not, those should be
    // defined as var xyz = something;
    this.renderOptions = '';
    this.urlprotocol = window.location.protocol;
    this.advid = '';
    this.adversionplacementid = '';
    this.placementid = '';
    this.makeAdRequest = true;
    this.articleUrlMonitorArr = []; // array with the objects to monitor article url change
    this.requestUrl = window.location;
    this.rt = 1; // record type
    this.adsToFilter = [];
    this.campaignsToFilter = [];
    this.advertisersToFilter = [];
    this.ISManager = {}; // Infinite scroll positions
    this.viewableImpressionTrackers = [];
    this.videoViewableTrackers = [];
    this.inventoryTrackers = [];
    this.videoPlayers = [];
    this.articles = [];
    this.consts = ntv.Util.consts;
    this.ampMode = false;

    // private variables
    var q = prdom.query;
    var debugMode = false;
    var scope = this;

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // START
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.Start = function (conf) {

        // check the config queue
        try {
            if (window._prx) {
                for (var i = 0; i < _prx.length; i++) {
                    if (_prx[i][0] === 'cfg.SetUserAnonymous') {
                        this.renderOptions += 'a';
                    } else if (_prx[i][0] === 'cfg.SetUserPremium') {
                        this.renderOptions += 'p';
                    } else if (_prx[i][0] === 'cfg.ClickOutTracking') {
                        this.makeAdRequest = false;
                    } else if (_prx[i][0] === 'cfg.RequestUrl') {
                        this.requestUrl = ntvTrim(_prx[i][1]);
                    } else if (_prx[i][0] === 'cfg.Debug') {
                        debugMode = true;
                    } else if (_prx[i][0] === 'cfg.Amp') {
                        this.ampMode = true;
                    } else if (_prx[i][0] === 'cfg.ServerDomain'){
                        ntv.Util.adBlockerDomain = _prx[i][1];
                        ntv.Util.adBlocker = 1;
                    }
                }
            }
        }
        catch (err) { }

        // convert config to a query param list
        var configParams = "";
        if (typeof (conf) != "undefined") {
            for (var i in conf) {
                configParams += ("&ntv_" + i + "=" + conf[i]);
            }
        }

        // look up tracking info first
        this.FindTrackerInfo();

        // request ads trigger
        var prx_rtparam = '';
        prx_rtparam += this.CheckIfExistAndAppendQS(this.advid, this.consts.ADV_ID);
        prx_rtparam += this.CheckIfExistAndAppendQS(this.adversionplacementid, this.consts.AVP);
        prx_rtparam += this.CheckIfExistAndAppendQS(this.placementid, this.consts.PLC_ID);
        prx_rtparam += this.CheckIfExistAndAppendQS(this.renderOptions, this.consts.REQ_OPTIONS);
        prx_rtparam += this.FowardQS(this.consts.OVERIDE_ARTICLE);
        prx_rtparam += this.FowardQS(this.consts.ABA);
        prx_rtparam += this.FowardQS(this.consts.RENDER_MODE);
        prx_rtparam += this.FowardQS(this.consts.ARTICLE_TMPL);
        prx_rtparam += this.FowardQS(this.consts.PASS_PREVIEW);
        prx_rtparam += this.FowardQS(this.consts.IP);
        prx_rtparam += configParams;

        if (this.rt == 30) prx_rtparam += '&' + this.consts.FRAUD;
        if (debugMode) prx_rtparam += '&' + this.consts.DEBUG_MODE;

        if (document.referrer.length > 0)
            prx_rtparam += this.CheckIfExistAndAppendQS(document.referrer, this.consts.PAGE_REF);

        if (this.makeAdRequest) {
            this.getAdRequest(prx_rtparam);
        }
        // if track time on content for click out
        else if (this.adversionplacementid != '') {
            //  we set the parameters and instantiate the object
            var params = [];
            params.selector = window;
            params.adVersionPlacement = this.adversionplacementid;
            params.multiArticlesInPage = false;
            params.baseTrackingUrl = window.location.protocol + '//' + ntv.Util.getServerDomain() + '/trk.gif?' + this.consts.AT +'=';
            params.secondaryImpressionTags = "";
            params.moatEnabled = false;
            params.trackTimeOnContent = true;
            params.recordType = 1;
            var ntvAT = new ntvArticleTracker(params);
        }
    };

    /* Returns the top most window we have access to */
    this.getTopWindow = function() {
        var currentWindow = validTopWindow = window;
        while (currentWindow.parent && currentWindow != currentWindow.parent) {
            try {
                currentWindow = currentWindow.parent;

                // check if we have access to it
                if (currentWindow.document)
                    validTopWindow = currentWindow;

            } catch (e) {}
        }

        return validTopWindow;
    }


    this.getAdRequest = function (prx_rtparam) {
        var url = this.requestUrl.toString();
        // we have a protection to allow our solution to work on google cache pages, and in that scenario
        // we use as request URL the one found in the element div#google-cache-hdr div a
        if (url.indexOf('http://webcache.googleusercontent.com') == 0){
            try {
                url = prdom.query("div#google-cache-hdr div a")[0].href;
            } catch (e){}
        }
        ntv.Util.appendScript(ntv.Util.getServerDomain() + '/t?' + this.consts.REQ_URL_NTV + '=' + encodeURIComponent(url)
            + prx_rtparam
        );
    }

    this.getLegacyAdRequest = function (prx_rtparam) {
        ntv.Util.appendScript(this.consts.DOMAIN + '/serve/trigger/' + new Date().getTime() + '.js'
            + '?' + this.consts.REQ_URL + '=' + encodeURIComponent(this.requestUrl)
            + prx_rtparam
        );
    }

    this.CheckIfExistAndAppendQS = function (id, qs) {
        if (id != '') {
            return '&' + qs + '=' + encodeURIComponent(id);
        }
        return '';
    }

    this.FowardQS = function (qs) {
        var value = this.GetQS(qs);
        if (value != '') {
            return '&' + qs + '=' + value;
        }
        return '';
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // RENDERING
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var checkMediation = function(tracking){

        var trackingUrl = tracking.trackingBaseUrl + 311
            + '&' + scope.consts.AVP + '=' + tracking.adVersionPlacement
            + '&ord=' + new Date().getTime()
            + '&' +  scope.consts.SUB_AT + '=';

        if (window.STR){
            ntv.Util.appendImage( trackingUrl + 1 ); // Sharethrough
        }
        if (window._tlModuleLoader){
            ntv.Util.appendImage( trackingUrl + 5 ); // 3lift
        }
        if (window.AdsNative){
            ntv.Util.appendImage( trackingUrl + 21 ); // AdsNative
        }
        if (window.Connatix){
            ntv.Util.appendImage( trackingUrl + 2 ); // Connatix
        }
    }

    this.ProcessResponse = function (resp) {

        // TODO: Should be fixed on the ad server side!
        if (!resp.placements) {
            return; // if the response doesn't have placements, there is nothing to be done as this is not a valid publication section.
        }

        for (var i = 0; i < resp.placements.length; i++) {
            var placement = resp.placements[i];
            // tout response
            if (placement.selector) {
                if (i == 0){ // only check mediation for the first placement
                    checkMediation(placement.tracking);
                }
                this.tout = true;
                if (placement.ads && placement.ads.length > 0) {
                    // if we have an ad, map the ad and push it to be injected
                    this.MapResponseAndPushAd(placement);
                } else {
                    if (!placement.isABA) { // we don' track inventory for ABA
                        var isInfScroll = placement.hasOwnProperty("infScroll");

                        var vcpmParams = placement.tracking.vcpmParams;
                        vcpmParams.thirdPartyTrackingTags = "";
                        vcpmParams.selector = placement.selector;
                        vcpmParams.placementID = placement.id;
                        vcpmParams.infiniteScroll = isInfScroll;
                        vcpmParams.isInvTracking = true;
                        if (vcpmParams.infiniteScroll) {
                            vcpmParams.is_initPos = placement.infScroll.position;
                            vcpmParams.is_interval = placement.infScroll.interval;
                        }
                        new ntvViewableImpressionTracker(vcpmParams);

                        var cpmTracker = {};
                        cpmTracker.url = placement.tracking.trackingBaseUrl;
                        cpmTracker.selector = placement.selector;
                        cpmTracker.placementID = placement.id;
                        cpmTracker.infiniteScroll = isInfScroll;
                        cpmTracker.adVersionPlacement = placement.tracking.adVersionPlacement;
                        cpmTracker.passback = placement.passback;
                        cpmTracker.vcpmParams = placement.tracking.vcpmParams;
                        this.TrackInventory(cpmTracker);
                    }
                }
            }
            else {
                // article response
                this.MapResponseAndRenderArticle(placement);
            }
        }

        // inject extra general purpose tracking code if needed
        if (resp.trackingCode) {
            this.TryAppendTrackingCode(resp.trackingCode);
        }

        // TODO: this is tout no? why are we calling it here?
        this.TryRenderAd();
    }

    this.TryAppendTrackingCode = function(trackingCode) {
        var body = q('body');
        if (body.length > 0) {
            body.append(trackingCode);
        }
        else if (/loaded|complete/.test(document.readyState) === false) {
            setTimeout(function () {
                PostRelease.TryAppendTrackingCode(trackingCode)
            }, 100);
        }
    }

    this.Passback = function() {
        if (this.passbackManager)
            this.passbackManager.next();
    }

    this.MapResponseAndPushAd = function(placement) {
        for (var i = 0; i < placement.ads.length; i++) {
            var obj = [];
            obj.placement = placement.id;
            obj.RenderSelector = placement.selector;
            obj.InjectionMode = placement.injectionMode;
            var ad = placement.ads[i];
            obj.adId = ad.id;
            obj.campaignId = ad.campaignID;
            obj.fLevel = ad.filteringLevel;
            obj.advertiserId = ad.advertiser.id;
            obj.RenderHtml = ad.preview.html;
            obj.ClickUrl = ad.toutClickTracker;
            obj.InfiniteScroll = placement.hasOwnProperty("infScroll");
            if (obj.InfiniteScroll) {
                obj.IS_InitPos = placement.infScroll.position;
                obj.IS_Interval = placement.infScroll.interval;
            }
            else {
                obj.ParentCount = placement.parentCount;
            }

            this.PushAd(obj);
        }
    }

    this.MapResponseAndRenderArticle = function (placement) {
        var obj = [];
        var ad = placement.ads.pop();
        obj.PreviewText = ad.preview.text;
        obj.ImagePreviewUrl = ad.preview.image;
        obj.AuthorName = ad.advertiser.name;
        obj.AuthorUrl = ad.advertiser.url;
        obj.AuthorLogo = ad.advertiser.logo;
        var article = ad.article;
        obj.Headline = article.title;
        obj.HtmlBody = article.body;
        obj.DisplayDate = ad.articleTemplate.displayDate;
        obj.TargetUrl = ad.articleTemplate.targetUrl;
        obj.HideAuthorLink = ad.articleTemplate.hideAuthorLink;
        obj.ArticleUrlShared = ad.articleTemplate.isArticleUrlShared;
        obj.Removals = ad.articleTemplate.removals;
        obj.Fragments = ad.articleTemplate.fragments;
        obj.ArticleID = "ntv" + ad.id;
        obj.paginationNextUrl = article.paginationNextUrl ? article.paginationNextUrl : "";
        obj.paginationPreviousUrl = article.paginationPreviousUrl ? article.paginationPreviousUrl : "";

        this.articles[ad.id] = obj;
        this.Render_TemplateAd(obj);
    }

    this.InfiniteScroll = function (selector, currentPosition, placement, interval) {
        this.selector = selector;
        this.currentPosition = currentPosition;
        this.queryPostion = currentPosition;
        this.placement = placement;
        this.interval = interval;

        this.getSelector = function () {
            return this.selector.replace("%p%", this.currentPosition)
        }

    }

    this.PushAd = function (adPackage) {
        if (adPackage.hasOwnProperty("fLevel")) {
            switch (adPackage.fLevel) {
                case 0: // filter by advertiser (default value)
                    this.advertisersToFilter.push(adPackage.advertiserId);
                    break;
                case 1: // filter by campaign
                    this.campaignsToFilter.push(adPackage.campaignId);
                    break;
                case 2: // filter by ad
                    this.adsToFilter.push(adPackage.adId);
                    break;
            }
        }
        // DFP integration mode
        if (typeof Nativo !== 'undefined') {

            // Need to prepand third party click if exist
            if (adPackage.ClickUrl != undefined) {
                var nativoClickUrl = adPackage.ClickUrl;

                if (Nativo.tpc[adPackage.RenderSelector])
                    adPackage.ClickUrl = Nativo.tpc[adPackage.RenderSelector] + adPackage.ClickUrl;
                else if (Nativo.thirdPartyClickUrl)
                    adPackage.ClickUrl = Nativo.thirdPartyClickUrl + adPackage.ClickUrl;


                var regex = new RegExp(ntvRegexEscape(nativoClickUrl).replace(/(ord=)[^\&]+/, '$1' + '[^\\&]+'),"g");
                adPackage.RenderHtml = adPackage.RenderHtml.replace(regex, adPackage.ClickUrl);
            }

            // store the ads we displayed so far (to filter in case of campaign level tag)
            if (Nativo.atf && Nativo.atf.indexOf(adPackage.adId) < 0) {
                Nativo.atf.push(adPackage.adId);
            }
        }

        if (adPackage.InfiniteScroll && adPackage.IS_Interval > 0 && adPackage.RenderSelector.indexOf('%p%') > 0) // Infinite scroll
        {
            this.setInfiniteScrollManager(adPackage.placement, adPackage.IS_InitPos, adPackage.IS_Interval, adPackage.RenderSelector);
            adPackage.RenderSelector = this.ISManager[adPackage.placement].getSelector();
        }

        prxAds.push(adPackage);
    }

    this.setInfiniteScrollManager = function (placementID, infScrInitPos, infScrInterval, renderSelector) {
        if (this.ISManager[placementID] == undefined) {
            var infiniteScroll = new this.InfiniteScroll(renderSelector,
                infScrInitPos,
                placementID,
                infScrInterval
            );
            this.ISManager[placementID] = infiniteScroll;
        } else {
            this.ISManager[placementID].currentPosition += infScrInterval;
        }
        if (!this.ISMonitorRunning) {
            this.ISMonitorRunning = true;
            this.ISMonitor();
        }
    }

    this.ISMonitor = function () {
        for (var i in this.ISManager) {
            var manager = this.ISManager[i];
            var selector = manager.getSelector()
            if (manager.queryPostion == manager.currentPosition &&
                q(selector).length > 0) {
                manager.queryPostion += manager.interval;
                //this.AddScript(this.consts.DOMAIN + '/serve/is/' + new Date().getTime() + '.js?' -- old .net pipe
                ntv.Util.appendScript(ntv.Util.getServerDomain() + '/t?'
                    + this.consts.PLC_ID + '=' + encodeURIComponent(manager.placement)
                    + '&'+ this.consts.PTD_FILTER + '=' + encodeURIComponent(manager.placement)
                    + this.CheckIfExistAndAppendQS(this.adsToFilter.join(), this.consts.AD_FILTER)
                    + this.CheckIfExistAndAppendQS(this.campaignsToFilter.join(), this.consts.CMP_FILTER)
                    + this.CheckIfExistAndAppendQS(this.advertisersToFilter.join(), this.consts.ADV_FILTER)
                );
            }

        }
        setTimeout("PostRelease.ISMonitor()", 250);
    }


    this.TryRenderAd = function () {
        var displayed = 0;
        for (var i = 0; i < prxAds.length; i++) {
            var a = prxAds[i];

            // check if we can find the node to inject into
            if (a.InjectNode == undefined) {
                if (q(a.RenderSelector).length > 0) {
                    a.InjectNode = q(a.RenderSelector).first();

                    // we might be asked to go higher then the selector
                    if (a.ParentCount && a.ParentCount > 0) {

                        var topWindow = PostRelease.getTopWindow();
                        // first check if we are inside iframe
                        if (window != topWindow) {
                            var topFrame = window;
                            while (topFrame.parent != topWindow)
                                topFrame = window.parent;

                            // make sure we inject in the right context
                            if (topWindow.prdom)
                                prdom = topWindow.prdom;

                            // now find this frame in the top DOM
                            domElement = null;
                            for (var i = 0; i < topWindow.frames.length; i++) {
                                try {
                                    if (topWindow.frames[i] == topFrame)
                                        domElement = topFrame.frameElement;
                                }
                                catch (e) { }
                            }

                            if (domElement)
                            {
                                prdom.win = topWindow;
                                a.InjectNode = q(domElement);

                                // iframe replace should collpase the iframe instead so
                                // the iframe context is not gone
                                if (a.InjectionMode == 1)
                                    a.InjectionMode = 4;
                            }
                        }

                        // now move up x amount of time
                        var pCount = a.ParentCount;
                        while (a.InjectNode.parent() && pCount > 0) {
                            pCount--;
                            a.InjectNode = a.InjectNode.parent();
                        }
                    }

                    PostRelease.InsertAd(a);
                }
            }

            // update which were aleady displayed
            displayed = displayed + (a.InjectNode ? 1 : 0);
        }

        // if we didn't display all ads yet try again later
        if (displayed < prxAds.length) {
            setTimeout('PostRelease.TryRenderAd()', 100);
        }
    }

    this.InsertAd = function (a) {
        switch (a.InjectionMode) {
            case 0: // before
                a.InjectNode.before(a.RenderHtml);
                break;
            case 1: // replace
                a.InjectNode.replaceWith(a.RenderHtml);
                break;
            case 2: // after/append
                a.InjectNode.after(a.RenderHtml);
                break;
            case 3: // prepend
                a.InjectNode.prepend(a.RenderHtml);
                break;
            case 4: // collpase and inject before
                q(a.InjectNode).hide();
                a.InjectNode.before(a.RenderHtml);
                break;
        }
    }

    var getAuthorLinkHtml = function(url, label){
        return '<a href="' + url + '" target="_blank">' + label + '</a>';
    }

    this.Render_TemplateAd = function (adPackage) {

        document.title = adPackage.Headline;
        adPackage.replaced = false;
        // new b page support, based on fragments
        if (adPackage.Fragments && adPackage.Fragments.length > 0) {
            this.TryRenderFragment(adPackage.Fragments, adPackage);
        } else {
            // TODO: can we remove V1 already? what does it take to remove it?
            // support for v1
            if (q('.prx_body').length > 0) {
                q('.prx_title').html(adPackage.Headline);
                q('body *').replaceText(/\bPR_SPONSORED_POST_TITLE\b/gi, adPackage.Headline);
                q('.prx_title_text').html(adPackage.Headline);
                q('a.prx_title_url').attr('href', '#');
                q('a.prx_title').attr('href', '#').attr('title', '').html(adPackage.Headline);
                if (adPackage.HideAuthorLink)
                    q('.prx_author').html(adPackage.AuthorName);
                else
                    q('.prx_author').html(getAuthorLinkHtml(adPackage.AuthorUrl,adPackage.AuthorName));
                q('.prx_author_name').html(adPackage.AuthorName);
                q('a.prx_author_url').attr('href', adPackage.AuthorUrl);
                q('img.prx_image_preview').remove();
                document.title = adPackage.Headline;
                prxContainerElement = q('.prx_body').parent();
                q('.prx_body').html(adPackage.HtmlBody);
                adPackage.replaced = true;
            }
            // support for v2
            if (!adPackage.replaced) {
                q('* :not(iframe)').contents().each(function () {
                    try {
                        if (this.nodeType == 8) {
                            var comment = q.trim(this.data);
                            switch (comment) {
                                case '@Content':
                                    prxContainerElement = q(this).parent();
                                    document.title = adPackage.Headline;
                                    q(this).replaceWith(adPackage.HtmlBody);
                                    adPackage.replaced = true;
                                    break;
                                case '@Title':
                                    q(this).replaceWith(adPackage.Headline);
                                    break;
                                case '@Datetime':
                                    q(this).replaceWith(adPackage.DisplayDate);
                                    break;
                                case '@Author':
                                    if (adPackage.HideAuthorLink)
                                        q(this).replaceWith(adPackage.AuthorName);
                                    else
                                        q(this).replaceWith(getAuthorLinkHtml(adPackage.AuthorUrl,adPackage.AuthorName));
                                    break;
                                case '@AuthorLogo':
                                    var logo = '<img src="' + adPackage.AuthorLogo + '" border="0">';
                                    if (adPackage.HideAuthorLink)
                                        q(this).replaceWith(logo);
                                    else
                                        q(this).replaceWith(getAuthorLinkHtml(adPackage.AuthorUrl,logo));
                                    break;
                                case '@Preview':
                                    q(this).replaceWith(adPackage.PreviewText);
                                    break;
                            }
                        }
                    } catch (err) { }
                });
            }
        }
        if (adPackage.replaced) {
            this.ArticlePostProcessing(adPackage);
        }
        if (/loaded|complete/.test(document.readyState) === false && adPackage.replaced == false) {
            setTimeout(function () { PostRelease.Render_TemplateAd(adPackage) }, 50);
        } else if (!adPackage.replaced) {
            // if the dom is ready, but we were not able to process all fragments, we still need to do post processing and do the removals.
            this.ArticlePostProcessing(adPackage);
        }
    }

    this.ArticlePostProcessing = function(adPackage){
        this.UpdatePagination(adPackage);
        // process removals
        if (adPackage.Removals && adPackage.Removals.length > 0) {
            this.ExecuteRemoval(adPackage.Removals, 100);
        }
        // Protection for non nativo ads inside our ads
        q(window).bind('DOMNodeInserted ready load', function () { PostRelease.disableAdsFromElement(prxContainerElement); });
    }

    this.ReplaceTokens = function(template, ad){
        var logo = '<img src="' + ad.AuthorLogo + '" border="0">';
        template = template.replace(/@Title/g, ad.Headline);
        template = template.replace(/@Datetime/g, ad.DisplayDate);
        template = template.replace(/@AuthorLogo/g, (ad.HideAuthorLink) ?  logo : getAuthorLinkHtml(ad.AuthorUrl,logo));
        template = template.replace(/@Author/g, (ad.HideAuthorLink) ?  ad.AuthorName : getAuthorLinkHtml(ad.AuthorUrl,ad.AuthorName));
        template = template.replace(/@Preview/g, ad.PreviewText);
        template = template.replace(/@Content/g, '<div id="' + ad.ArticleID + '" class="' + ad.ArticleID + '">' + ad.HtmlBody + '</div>');
        template = template.replace(/@BottomArticle/g, "");
        template = template.replace(/@TopArticle/g, "");
        template = template.replace(/@RightRail/g, "");
        return template;
    }

    this.TryRenderFragment = function (fragments, ad) {
        if (!ad.replacedElements) {
            ad.replacedElements = 0;
        }
        for (var i = 0; i < fragments.length; i++) {
            var fragment = fragments[i];
            if (!fragment.InjectNode) {
                if (q(fragment.Selector).length > 0) {
                    var contentInserted = (fragment.FragmentTemplate.indexOf("@Content") > -1) ? true : false;
                    fragment.InjectNode = q(fragment.Selector).first();
                    fragment.RenderHtml = this.ReplaceTokens(fragment.FragmentTemplate, ad);
                    // if it is a companion fragment type and is not replace mode
                    if ( (new RegExp( '\\bTOP\\b|\\bRIGHTRAIL\\b|\\bBOTTOMb\\b')).test(fragment.Type) && fragment.Mode != 1 ){
                        fragment.RenderHtml = q(fragment.RenderHtml).addClass('ntv-companion');
                    } else if (fragment.Type == 'SLIDEMETADATA'){
                        fragment.RenderHtml = q(fragment.RenderHtml).addClass('ntv-gallery-metadata');
                    }
                    fragment.InjectionMode = fragment.Mode;
                    this.InsertAd(fragment);
                    if (contentInserted) {
                        prxContainerElement = q("#" + ad.ArticleID).parent();
                    }
                    ad.replacedElements++;
                }
            }
        }

        if (ad.replacedElements == fragments.length) {
            ad.replaced = true;
        }
    }

    this.ExecuteRemoval = function (removals, tryNumber) {
        var toBeRemoved = [];
        for (var i = 0; i < removals.length; i++) {
            var removal = removals[i];
            if (q(removal.Selector).length > 0) {
                switch (removal.Type) {
                    case 1: // remove
                        q(removal.Selector).remove();
                        break;
                    case 2: // hide
                        q(removal.Selector).css('display', 'none');
                        break;
                }
            } else
                toBeRemoved.push(removal);
        }
        if (toBeRemoved.length > 0 && tryNumber > 0) {
            tryNumber--;
            setTimeout(function () { PostRelease.ExecuteRemoval(toBeRemoved, tryNumber) }, 100);
        }
    }

    
        this.UpdatePagination = (function R(adPackage) {
            var retry = false;
            if (adPackage.paginationNextUrl || adPackage.paginationPreviousUrl) {
                var next = q('a.prx_pagination_next');
                var previous = q('a.prx_pagination_previous');
                if (adPackage.paginationNextUrl != '') {
                    next.attr('href', adPackage.paginationNextUrl).attr('style', 'display:inline');
                }
                else {
                    next.attr('style', 'display:none');
                }

                if (adPackage.paginationPreviousUrl != '') {
                    previous.attr('href', adPackage.paginationPreviousUrl).attr('style', 'display:inline');
                }
                else {
                    previous.attr('style', 'display:none');
                }
                retry = next.length == 0;
            } else {
                var wrapper = q('.prx_pagination_wrapper');
                wrapper.attr('style', 'display:none');
                retry = wrapper.length == 0;
            }
            if (/loaded|complete/.test(document.readyState) === false && retry) {
                setTimeout(function () {
                    R(adPackage);
                }, 100);
            }
        });
    

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // TRACKING
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    this.checkIsAdVisible = function () {
        var pr = PostRelease;
        if (!ntv.Util.canExecute(pr.checkIsAdVisible, "viewable", 100)) {
            return;
        }
        //check if element with id related-ads is visible on screen
        var n = pr.viewableImpressionTrackers.length;
        for (var i = 0; i < n; i++) {
            var tracker = pr.viewableImpressionTrackers[i];

            // protection in case the array was updated due multi-thread
            if (tracker) {
                tracker.checkViewability();
            }
        }
    }

    this.FindTrackerInfo = function () {
        // see if there is a context key already being used, if so replace the generated one
        var existingRenderOptions = this.GetQS(this.consts.REQ_OPTIONS);
        if (existingRenderOptions != '') this.renderOptions = existingRenderOptions;
        var existingAdvID = this.GetQS(this.consts.ADV_ID);
        if (existingAdvID != '') this.advid = existingAdvID;
        var existingAdVersionPlacementID = this.GetQS(this.consts.AVP);
        if (existingAdVersionPlacementID != '') this.adversionplacementid = existingAdVersionPlacementID;
        var existingPlacementID = this.GetQS(this.consts.PLC_ID);
        if (existingPlacementID != '') this.placementid = existingPlacementID;

        // check if fraud flag is present
        if (q.inArray(this.consts.FRAUD, this.GetUrlVars()) != -1) this.rt = 30;
    };


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // MISC
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // adds scripts to document dynamically
    this.AddScript = function (url) {
        var e = document.createElement('script'); e.type = 'text/javascript'; e.src = this.urlprotocol + '//' + url;
        (document.getElementsByTagName('head')[0] || document.documentElement).appendChild(e);
    };

    this.GetQS = function (key, default_) {
        if (default_ == null) default_ = "";
        key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
        var qs = regex.exec(window.location.href);
        if (qs == null)
            return default_;
        else
            return qs[1];
    };

    this.GetUrlVars = function() {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars;
    }

    var openPopupWindow = function(url, windowName){
        window.open(url, windowName, "status=1,width=600,height=400");
        return false;
    }

    this.OpenShareFacebook = function (url) {
        return openPopupWindow(url,"share_facebook");
    };

    this.OpenShareTwitter = function (url) {
        return openPopupWindow(url,"share_twitter");
    };

    this.OpenShareLinkedIn = function (url) {
        return openPopupWindow(url,"share_linkedin");
    };

    this.OpenShareGoogle = function (url) {
        return openPopupWindow(url,"share_google");
    };

    this.OpenSharePinterest = function (url) {
        return openPopupWindow(url,"share_pinterest");
    };

    this.OpenShareStumbleUpon = function (url) {
        return openPopupWindow(url,"share_stumbleupon");
    };


    this.StartUrlChangeMonitor = function () {
        if (!this.articleUrlMonitorRunning) {
            this.articleUrlMonitorRunning = true;
            this.UrlChangeMonitor();
        }
    }

    this.UrlChangeMonitor = function () {
        for (var i = 0; i < this.articleUrlMonitorArr.length; i++) {
            var obj = this.articleUrlMonitorArr[i];
            var active = (window.location.href.indexOf(obj.adVersionPlacement) > 0);
            if (active != obj.urlActive) {
                obj.urlActive = active;
                obj.articleUrlChange();
            }
        }
        setTimeout(function () { PostRelease.UrlChangeMonitor() }, 100);
    }

    this.GetHrefUrl = function (primaryClick, trackFraud) {
        return (trackFraud) ? primaryClick + (prdom.onFocus ? '' : '&' + this.consts.FRAUD) : primaryClick;
    }

    // The viewable inventory tracker needs to be called first in order
    // to infinite scroll logic work.
    this.TrackInventory = function (tracker) {
        if (tracker.infiniteScroll) {
            tracker.selector = this.ISManager[tracker.placementID].getSelector();
        }
        this.inventoryTrackers.push(tracker);
        this.TryTrackInventory();
    }

    this.TryTrackInventory = function () {
        var pr = PostRelease;
        var func = function () { pr.TryTrackInventory(); };
        if (!ntv.Util.canExecute(func, "inventory", 100)) {
            return;
        }
        var totalTracked = 0;
        for (var i = 0; i < pr.inventoryTrackers.length; i++) {
            var tracker = pr.inventoryTrackers[i];
            if (!tracker.tracked) {
                if (q(tracker.selector).length > 0) {
                    tracker.tracked = true;
                    var cacheBursting = "&ord=" + new Date().getTime();
                    var actionType = "303";
                    if (!pr.pageInventoryTracked) {
                        pr.pageInventoryTracked = true;
                        actionType += ",302";
                    }
                    ntvAppendPixelImage(tracker.url + actionType + '&' + this.consts.AVP + '=' + tracker.adVersionPlacement + cacheBursting);
                    if (tracker.passback) {
                        // activate passback
                        this.passbackManager = new ntv.PassbackManager(tracker.passback, tracker.vcpmParams);
                    }
                }
            } else {
                totalTracked++;
            }
        }
        if (totalTracked < pr.inventoryTrackers.length) {
            setTimeout(func, 200);
        }
    }

    // this function will create the video based on the player type.
    this.setupVideo = function(params){
        var renderingParams = params.renderingParams;
        var outerElement = q(this.getTopWindow().document).find('.' + renderingParams.outerCssClass);

        // add the iframe tag if it is not already on the DOM, based on the execution type
        if (renderingParams.videoExecution == 8){ // PRE-EXPANDED video
            outerElement.find('.ntv-play-overlay').remove();
            if (ntv.Util.adBlocker){
                renderingParams.previewImage = renderingParams.previewImage.replace(this.consts.ASSETS_PREFIX + ntv.Util.getServerDomain(), ntv.Util.getServerDomain());
            }
            var previewImg = outerElement.find("img[src*='" + ntv.Util.applyImageResizer(renderingParams.previewImage) + "']");
            if (previewImg.parent().parent().is("a"))
                previewImg.parent().parent().replaceWith(previewImg.parent());
            if (previewImg.parent().is("a"))
                previewImg.parent().replaceWith(previewImg);
            previewImg.replaceWith(renderingParams.iframeTag);
        }


        var player;
        switch (params.playerType) {
            case this.consts.YOUTUBE_PLAYER:
                player = new ntv.YouTubeVideo(params);
                break;
            case this.consts.NATIVO_PLAYER:
            case this.consts.VAST_PLAYER:
                player = new ntv.NativoVideo(params);
                break;
        }
        this.videoPlayers.push(player);

        var linkElem = outerElement.find("." + renderingParams.linkCssClass);
        player.clickedBeforeRendering = false;
        linkElem.map( function() {
            var elem = q(this);
            if (ntv.Util.isNotValidHeadlineLink(elem)){
                elem.click( function() {
                    player.clickedBeforeRendering = true;
                    return false;
                })
                elem.removeAttr("href").css('cursor', 'pointer');
            }
        });
    }


}






/************************************************
	The class is responsible to manage all aspects 
	of passback flow.
 ************************************************/
ntv.PassbackManager = function(passBackParams, viewabilityParams){
	this.vSettings = viewabilityParams;
	this.params = passBackParams;
	this.candidates = [];
	this.vTrackers = [];
	this.consts = PostRelease.consts;
	this.filled = false;
	this.next();
}

ntv.PassbackManager.prototype = {
	// handles the next provider 
	next: function () {
		// we handled the last, nothing to do
		if (this.params.Providers.length == 0)
			return;

		// default is not auto complete
		this.autoFillDetection = false;

		// pop the first from queue
		var passback = this.params.Providers.shift();

		
	    // passback insertion
	    // Head tag is only one
	    if (passback.HeaderTag.length > 0) {
	        prdom.query("head").append(passback.HeaderTag);
	    }

	    // body can represent mulitlple placements
	    if (passback.Placements.length > 0) {
	        for (var i = 0; i < passback.Placements.length; i++) {
	            var placement = passback.Placements[i];

	            var candidate = this.getCandidate(passback);
	            candidate.selector = placement.Selector;
	            candidate.locator = placement.Locator;
	            this.candidates.push(candidate);

	            // track the passback attempt
				this.trackPassback(306, candidate); 

	            this.preInsertion(candidate);

	            // try to inject to body until doc is ready
            	this.tryInjectBody(placement);
	        }
	    }
	    else
	    {
	    	// head only, we can only track attempts
	    	var candidate = this.getCandidate(passback);
	    	this.trackPassback(306, candidate); 
	    }

	    // start monitoring for impression / viewablity etc.
	    this.monitor(30000);
    },

   // generate a candidate object from passback data 
   getCandidate: function(passback) {
   		var candidate = {};
        candidate.providerID = passback.ProviderID;
        candidate.rateType = passback.RateType;
        candidate.amount = passback.Amount;
        candidate.adVersionPlacement = passback.AdVersionPlacement;
        candidate.completed = false;
        return candidate;
   },


   preInsertion: function (candidate) {
   		var data = candidate;
	    var scope = this;
	    switch (candidate.providerID) {
	        case 1: // Sharethrough 
			case 3: // Sharethrough DFP
			case 22: // Sharethrough ajax mode
	        	this.autoFillDetection = true;
	            prdom.query(window).bind("message", function (e) {
	                if (e.originalEvent.origin.indexOf('btlr.sharethrough.com') >= 0) {
	                    setTimeout(function () { scope.validateSTR(data) }, 200);
	                }
	            });
	            break;
	    }
	},

    tryInjectBody: function (placement) {
    	if (prdom.query(placement.Selector).length > 0) {
	        
	    	// we simulate a nativo ad element and use the standard InsertAd method
	        placement.InjectNode = prdom.query(placement.Selector).first();
	        placement.RenderHtml = placement.BodyTag;
	        PostRelease.InsertAd(placement);

	        // TODO: call postInsertion()
	    } else if (/loaded|complete/.test(document.readyState) === false) {
	    	var scope = this;
	        setTimeout(function () { scope.tryInjectBody(placement) }, 50);
	    } 
	},

	validateSTR: function (candidate) {
		var element = prdom.query(candidate.locator);
	    if (element.length > 0) {
	    	var node = element[0];

	        // marking the passback as completed for auto passback if needed
	        candidate.completed = (node.getAttribute('data-str-visited-flag') == 'true');
	    }
	},

	monitor: function(timeLeft) {

		// queue is empty / too much time passed
		if (this.candidates.length == 0 || timeLeft <= 0)
			return;

		for (var i = 0; i < this.candidates.length; i++) {
	        var candidate = this.candidates[i];

	        // some external process will tell us when injection is completed
	        if (this.autoFillDetection && !candidate.completed)
	        	continue;

	        if (candidate.locator)
	        {
	        	var element = prdom.query(candidate.locator);
			    if (element.length > 0) {
			        var width = element[0].offsetWidth;
    				var height = element[0].offsetHeight;

    				// we have injection
    				if (width > 0 && height > 0)
    				{
    					this.filled = true;
    					candidate.completed = true;
    					this.trackPassback(307, candidate); //track passback cpm impression

    					// now also add viewablie tracking
    					this.trackViewable(candidate);
    				}
    				// for auto complete, if element is not visible, it means it was not filled
    				else if (this.autoFillDetection)
    				{
    					this.trackPassback(308, candidate);
    				}
			    }
	        }
	        else {
	        	candidate.completed = true;
	        }
	    }

	    // go over the elements which were completed and remove them
	    var oldQueue = this.candidates;
	    this.candidates = [];
	    for (var i = 0; i < oldQueue.length; i++) {
	    	var candidate = oldQueue[i];
	    	if (!candidate.completed)
	    		this.candidates.push(candidate);
		}


		if (this.autoFillDetection && !this.filled && this.candidates.length == 0) {
	        this.next();// try next provider
	    }
	    else if (this.candidates.length > 0) { // retry next time if we have more waiting
			var scope = this;
			var time = timeLeft-100;
			setTimeout(function () { scope.monitor(time) }, 100);
		}
	},

	getPassbackTrackUrl: function(actionType, passbackUnit)
	{
		// build the URL - amount will only be added for the right impression type
		var extraQS = '';
	    if (	(actionType == 307 && passbackUnit.rateType == 2) || 
	    		(actionType == 309 && passbackUnit.rateType == 3)) {
	        extraQS = '&' + this.consts.VALUE + '=' + passbackUnit.amount;
	    }
	    
	    return this.params.TrackingUrl + actionType + '&' + this.consts.AVP + '=' + passbackUnit.adVersionPlacement  + '&' + 
	    		this.consts.SUB_AT + '=' + passbackUnit.providerID +  extraQS + "&ord=" + new Date().getTime();
	},


	trackPassback: function (actionType, passbackUnit) {
		ntvAppendPixelImage(this.getPassbackTrackUrl(actionType, passbackUnit));
	},

	trackViewable: function (passbackUnit) {
		var parameters = [];
	    parameters.primaryImpressionURL = this.getPassbackTrackUrl(309, passbackUnit);
	    parameters.thirdPartyTrackingTags = "";
	    parameters.selector = passbackUnit.locator;
	    parameters.minimumAreaViewable = this.vSettings.minimumAreaViewable;
	    parameters.minimumExposedTime = this.vSettings.minimumExposedTime;
	    parameters.checkOnFocus = this.vSettings.checkOnFocus;
	    parameters.checkMinimumAreaViewable = this.vSettings.checkMinimumAreaViewable;
	    parameters.infiniteScroll = false;
	    this.vTrackers.push(new ntvViewableImpressionTracker(parameters));
	}
}













_pr.prototype.disableAdsFromElement = function (element) {
    /* Remove link-based ads from NTV units */
    // Detect NTV units
    var ntv_ad = prdom.query(element);
    ntv_ad.removeClass(function (index, css) { return (css.match(/\bitxt\S+/g) || []).join(' '); });
    // Remove all references to Vibrant
    ntv_ad.find("[class*='itxt']").replaceWith(function () { return nQuery(this).text() });

    // other vendors (legacy?)
    ntv_ad.find(".kLink").replaceWith(function () { return nQuery(this).text() });
    ntv_ad.find(".IL_AD").replaceWith(function () { return nQuery(this).text() });
    //ntv_ad.find("div#picad_div").remove();
    //ntv_ad.find("#picad_overlay_div").remove();
    //ntv_ad.find(".GG_ad").remove()
}// This function requires a json object as parameter, and it should have the following properties:
// params.selector
// params.aqID
// params.adID
// params.adVersionID
// params.adVersionPlacement
// params.placementID
// params.psID
// params.baseTrackingUrl
// params.isViewableSecondaryImpression
// params.secondaryImpressionTags
// params.videoStartTags
// params.videoEndTags
// params.videoProgress25PercentTags
// params.videoProgress50PercentTags
// params.videoProgress75PercentTags

function ntvArticleTracker(params) {
    ntv.Util.copyProperties(params,this);
    this.element = null;

    this.tracker = new ntvTrackingUrlUtil(params, this);

    // time on content vars
    this.resetTimeOnContentVars();

    // image resizer var
    this.maxWidth = 0;

    if (this.multiArticlesInPage) {
        this.urlActive = false;
        PostRelease.articleUrlMonitorArr.push(this);
        PostRelease.StartUrlChangeMonitor();
    }

     this.init();
}

ntvArticleTracker.prototype.resetTimeOnContentVars = function () {
    if (this.trackTimeOnContent) {
        this.tos = new ntvTimeOnContentStopWatch(this);
    }
}

ntvArticleTracker.prototype.init = function () {
    if (!prdom.query) {
        prdom.query = nQuery.noConflict(true);
    }
    this.element = prdom.query(eval(this.selector))[0];
    var obj = this;
    obj.videoPlayers = {};
    // we can only start tracking once we get the container element
    if (!this.element) {
        setTimeout(function () { obj.init(); }, 100);
    }
    else {
        var q = prdom.query;
        // bind events
        if (this.trackTimeOnContent) {
            q(window).bind('scroll DOMNodeInserted', function () { obj.trackTime(); });
        }
        q(window).bind('ready load resize orientationchange', function () { obj.resize(); });

        q("iframe").map(function() {
            var elem = q(this);
            if (elem.attr('id') != "prx_full_ad_video" && !elem.hasClass("prx_full_ad_video")){
                return;
            }
            var rand = Math.floor((Math.random() * 1000000) + 1);
            var outerCss = 'ntv-video-wrapper'+ obj.adID +'_'+ rand;
            var videoUrl = elem.prop('src');
            var videoWidth = elem.prop('width');
            var videoHeight = elem.prop('height');
            var src = "";
            if (ntv.Util.isIE()) {
                src = "javascript:document.write('<head><script>document.domain=\\'" + PostRelease.getTopWindow().document.domain + "\\';</script></head><body></body>');window.parent['ntvAT"+ obj.adID +"'].videoPlayers["+ rand +"].init();";
                src = 'src="' + src +'"';
            }

            elem.replaceWith('<div class="ntv-video-wrapper'+ obj.adID +' '+ outerCss+' ntv-video-wrapper"><iframe id="ntvVideoIframe'+ obj.adID +'" width="'+ videoWidth+'" height="'+ videoHeight+'" ' + src + '  frameborder="0" allowfullscreen></iframe></div>');
            var videoParams = q.extend(true, {}, obj); // clone the object
            videoParams.trackTimeOnContent = false;
            videoParams.tos = null;
            // We found a bug that if the YT player starts playing before we create the YT iframe player object,
            // we lose the player controls and we therefore cannot do correct tracking. The solution was to remove
            // auto play from the video URL, and do it once the player object is ready
            if (videoUrl.indexOf('&autoplay=1') > 0){
                videoUrl = videoUrl.replace('&autoplay=1','');
                videoParams.playerVarsAutoPlay = 1;
            }
            videoParams.iframeBody = '<div class="video-wrapper"><iframe frameborder="0" width="'+videoWidth+'" height="'+videoHeight+'" ntv-aspect-ratio="16:9" id="ntvVideo" src="'+videoUrl+'&showsearch=0&showinfo=0&playlist=&modestbranding=1&autohide=1&egm=0&rel=0&wmode=opaque" type="text/html" style="float:none;clear:both;" allowfullscreen ></iframe></div>';
            videoParams.iframeHead = '<style>body{top:0px;left:0px;margin:0;}</style>';
            videoParams.renderingParams = { outerCssClass : outerCss, previewImage: "", article: 1};
            obj.videoPlayers[rand] = new ntv.YouTubeVideo(videoParams);
        }).get();

        // start what can start right away
        this.trackTime();
        this.resize();
        setTimeout(function () { obj.resize(), 1000 });
    }
}

ntvArticleTracker.prototype.trackTime = function () {
    if (this.trackTimeOnContent) {
        if (this.expandableUnit){
            return; // expandable should only track once the unit is opened.
        }
        if (this.multiArticlesInPage) {
            if (this.urlActive) {
                this.tos.resume();
                this.trackSecondaryImpression();
            }
        } else {
            this.tos.resume();
            this.trackSecondaryImpression();
        }
    } else {
        this.trackSecondaryImpression();
    }
}

ntvArticleTracker.prototype.trackSecondaryImpression = function () {
    if (!this.trackedSecondaryImpression) {
        this.trackedSecondaryImpression = true;
        var actionTypes = null;
        if (this.expandableUnit) {
            actionTypes = [this.tracker.readAndClickActionTypes, this.tracker.ArticlePageViewActionType];
        } else {
            // only track nativo secondary impression if viewable secondary impression
            actionTypes = this.multiArticlesInPage ?
                [this.tracker.secondaryImpressionActionType, this.tracker.ArticlePageViewActionType] : // if multiple articles, track secondary impression and ArticlePageView
                this.trackTimeOnContent ?
                    [this.tracker.ArticlePageViewActionType] : // if regular article, track ArticlePageView, as secondary impression is tracked on the server side
                    null; // if video, don't track anything as ArticlePageViewActionType is tracked once the user play the video for the first time.
        }
        var trackingUrl = (actionTypes != null) ? this.tracker.getUrl(actionTypes.join()) : null;
        ntvInsertTracking(trackingUrl, this.secondaryImpressionTags, 1);
    }
}

// this should only be called when the urlActive flag is updated
ntvArticleTracker.prototype.articleUrlChange = function () {
    if (this.urlActive) {
        this.trackTime();
        this.executeMoat(true);
    } else {
        this.tos.onLeave();
        this.resetTimeOnContentVars();
        this.trackedSecondaryImpression = false;
        this.executeMoat(false);
    }
}

ntvArticleTracker.prototype.executeMoat = function (start) {
    try{
        if (this.moatEnabled){
            var p = document.querySelector('.' + this.moatClass);
            if (start)
                p.initMoatTracking();
            else
                p.stopMoatTracking();
        }
    } catch (e) { }
}

ntvArticleTracker.prototype.visible = function (el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    var docElem = document.documentElement;
    var docBody = document.body;
    var myWidth = window.innerWidth ? window.innerWidth : docElem.clientWidth ? docElem.clientWidth : docBody.clientWidth;
    var myHeight = window.innerHeight ? window.innerHeight : docElem.clientHeight ? docElem.clientHeight : docBody.clientHeight;
    var scrollPos = ntv.Util.getScrollPos();
    var YOffset = scrollPos.top;
    var XOffset = scrollPos.left;

    return (top < (YOffset + myHeight) && left < (XOffset + myWidth) && (top + height) > YOffset && (left + width) > XOffset);
}

ntvArticleTracker.prototype.setMaxWidth = function () {
    // set max width allowed for images
    this.maxWidth = prdom.query(this.element).width();
    // if landscape mode
    var deviceCurrentWidth = (window.orientation && (window.orientation == 90 || window.orientation == -90)) ? screen.height : screen.width;
    if (this.maxWidth == -20 || this.maxWidth > deviceCurrentWidth)
        this.maxWidth = deviceCurrentWidth - 20;
    if (this.maxWidth > 840) this.maxWidth = 840;
    this.maxWidth = Math.ceil(this.maxWidth);
}



ntvArticleTracker.prototype.resize = function () {
    this.setMaxWidth();
    var obj = this;
    var q = prdom.query;

    // the following block of code will keep testing if the div.content is loaded
    q(this.element).find("iframe").map(function () { // JS
        q(this).css('float', 'none');
        q(this).css('clear', 'both');
        var dimensions = ntv.Util.getElementDimensions(this);
        if (dimensions.w == 0 && obj.maxWidth > 0) {
            obj.setVideoSize(this, obj.maxWidth);
        } else {
            var id = q(this).attr('id');
            if (id && id.indexOf('ntvVideoIframe') == 0){
                ntv.Util.setElementDimensions(q(this).parent(),dimensions, obj.maxWidth);
                return; // don' resize if nativo video
            }
            ntv.Util.setElementDimensions(this,dimensions, obj.maxWidth);
        }
        obj.setVideoContainerSize(this);
        q(this).show(); //display when iframe has fully loaded
    }).get();
    q(this.element).find("video").map(function () {
        var dimensions = ntv.Util.getElementDimensions(this);
        if (dimensions.w == 0 && obj.maxWidth > 0) {
            obj.setVideoSize(this, obj.maxWidth);
        }
        obj.setVideoContainerSize(this);
    }).get();
    q(this.element).find("img").map(function () { // JS
        var src = q(this).attr('data-original');
        if (!src) {
            var dimensions = ntv.Util.getElementDimensions(this);
            if (dimensions.w == 0 || dimensions.h == 0){
                return; // image is not fully loaded
            }
            ntv.Util.setElementDimensions(this,dimensions, obj.maxWidth);
        } else {
            if (obj.maxWidth > 0) {
                src = ntv.Util.applyImageResizer(src);
                src += "?mode=max&width=" + obj.maxWidth;
                q(this).attr('src', src);
                q(this).css("width", "").css("height", "").css("max-width", "").css("max-height", ""); // remove dimensions styling
            }
        }
        q(this).show(); //display when img has fully loaded
    }).get();
    if (obj.videoPlayers){
        for (var prop in obj.videoPlayers) {
            if (obj.videoPlayers[prop].videoRendering) {
                obj.videoPlayers[prop].videoRendering.resizeIframe();
            }
        }
    }
}

ntvArticleTracker.prototype.setVideoSize = function (element, maxWidth) {
    var aspectRatio = prdom.query(element).attr('ntv-aspect-ratio');
    aspectRatio = (aspectRatio != undefined) ? aspectRatio.split(":") : [16, 9];
    var w = maxWidth;
    var h = Math.ceil(aspectRatio[1] * maxWidth / aspectRatio[0]);
    prdom.query(element).attr('height', h);
    prdom.query(element).attr('width', w);
    prdom.query(element).width(w).height(h);
}

ntvArticleTracker.prototype.setVideoContainerSize = function (element) {
    var element = prdom.query(element);
    var parent = element.parent();
    if (parent.attr('class') && parent.attr('class').indexOf('ntv-video-wrapper') >= 0) {
        var h = element.attr('height');
        var w = element.attr('width');
        if (h > 0 && w > 0)
            parent.width(w).height(h);
    }
}

ntvArticleTracker.prototype.onArticleExpand = function () {
    this.tos.resume();
    this.trackSecondaryImpression();
}

ntvArticleTracker.prototype.onArticleCollapse = function () {
    this.tos.stopAndTrack();
    for (var playerId in this.videoPlayers){
        var player = this.videoPlayers[playerId];
        if (player.getCurrentTime() > 0){
            player.pause();
        }
    }
}
// This function requires a json object as parameter, and it should have the following properties:
// params.cssRule
// params.adID
// params.adVersionID
// params.adVersionPlacement
// params.placementID
// params.baseTrackingUrl
// params.videoStartTags
// params.videoEndTags
// params.videoProgress25PercentTags
// params.videoProgress50PercentTags
// params.videoProgress75PercentTags
// params.trackTimeOnContent
// params.recordType
// params.videoPlayed15Seconds
// params.videoPlayed30Seconds
//
// In order to extent this class you will need to implement the methods:
// postInitHook, postVideoRenderingHook, play, pause, reset, isSeeking, isFullScreen, setUserActive, getCurrentTime, getDuration
// and bind the player to the following events:
// onPlay, onPause, onEnd, onProgress
// You will also need to implement the logic to trigger the following events:
// ntvPlayerReady - when the player is ready
// ntvUserActive - when the user is active so we show the info top bar
// ntvUserInactive - when the user is NOT active so we hide the info top bar
// ntvFullScreenChange
// The child classes need to call the parent init with the firefox protection
ntv.Video = function(params){
    if (!params.hasOwnProperty("recordType")) {
        params.recordType = 30; // default type for video tracker is potential fraud
    }
    var scope = this;
    ntv.Util.copyProperties(params,scope);
    scope.tracker = new ntvTrackingUrlUtil(scope, scope);
    scope.trackingEnabled = true;
    scope.videoTrackers = {};
    scope.actionReported = {};
    scope.lastProgress = 0;
    scope.userInteracted = false;
    scope.intervalID = -1; // used to set interval for tracking on progress
    scope.stopWatch = new ntvStopWatch();
    if (scope.autoPlayParams){
        scope.autoPlayParams.player = scope;
    };
    /*
    scope.autoPlayParams = {
        minViewableArea: 0.3,
        minViewableAreaTime: 1000,
        player: scope,
        onOutOfScreen: 2,
        onVideoEnd: 2,
        onClickVolume: 0.4,
        onClickRestart: true
    };
    */

    if (scope.autoPlayParams && scope.autoPlayParams.onOutOfScreen == 0){
        delete scope.autoPlayParams;
    }

    scope.videoViewDelay = scope.videoViewDelay || 0;
    scope.videoBillableViewDelay = scope.videoBillableViewDelay || 0;

    var readAndClickAT = scope.tracker.readAndClickActionTypes;

    var otherStartActions = "";
    if (scope.trackTimeOnContent){
        otherStartActions += "," + scope.tracker.ArticlePageViewActionType;
    }
    if (scope.videoViewDelay == 0){
        otherStartActions += "," + scope.tracker.videoView + "," + scope.tracker.videoViewManualStart;
        scope.videoStartTags += scope.videoViewTags;
    }

    if (scope.videoBillableViewDelay == 0){
        otherStartActions += "," + scope.tracker.videoBillableView;
    }

    var t = scope.videoTrackers;
    t[56] = { AT:"56" + otherStartActions, eventName:"Start", tags:scope.videoStartTags};
    t[39] = { AT:39, eventName:"FirstQuartile", tags:scope.videoProgress25PercentTags};
    t[40] = { AT:40, eventName:"Midpoint", tags:scope.videoProgress50PercentTags};
    t[41] = { AT:41, eventName:"ThirdQuartile", tags:scope.videoProgress75PercentTags};
    t[23] = { AT:23, eventName:"Complete", tags:scope.videoEndTags};
    t[48] = { AT:48, eventName:"HeadlineClick", tags:""};
    t[55] = { AT:55, eventName:"ClickToUnMute", tags:""};
    t[22] = { AT:22, eventName:"VideoView", tags:scope.videoViewTags};
    t[58] = { AT:58, eventName:"VideoBillableView", tags: ""};
    t[57] = { AT:57, eventName:"VideoViewManualStart", tags:""};
    t[readAndClickAT] = { AT:readAndClickAT, eventName:"ReadAndClick", tags:scope.secondaryImpressionTrackingTags};
    t[2] = { AT:2, eventName:"Read", tags:scope.secondaryImpressionTrackingTags};
    t[3] = { AT:3, eventName:"Click", tags:""};
    t[60] = {AT:60, eventName:"VideoPlayed15Seconds",tags:scope.videoPlayed15Seconds};
    t[61] = {AT:61, eventName:"VideoPlayed30Seconds",tags:scope.videoPlayed30Seconds};

    scope.doc = prdom.query(PostRelease.getTopWindow().document).find("." + this.renderingParams.outerCssClass);
    scope.iframe = scope.doc.find("#ntvVideoIframe" + scope.adID); // iframe that will have the video
};

ntv.Video.prototype = {

    init: function () {
        var scope = this;
        var q = prdom.query;

        // try to add the video
        try {
            // insert the content inside the iframe dynamically
            var iframeDoc = ntv.Util.writeIframe(scope.iframe, 'style="overflow: hidden"', scope.iframeHead, scope.iframeBody);

            scope.iframe.attr('scrolling', "no");

            scope.trackVideoView();
            if (scope.trackTimeOnContent) {
                scope.tos = new ntvTimeOnContentStopWatch(scope);
            }
            scope.doc.bind('ntvPlayerReady', function (e, adID) {
                if (adID == scope.adID) {
                    scope.setupAutoPlay();
                    scope.postVideoRenderingHook();
                }
            });

            scope.iframeContent = q(iframeDoc); // the iframe content that will have the video
            scope.iframeBodyElement = scope.iframeContent.find("body");

            scope.postInitHook();
        } catch (e) {
            console.log(e);
            setTimeout(function() { scope.init()}, 100);
        }

        // try to add the video share for mobile if needed
        if (scope.mobileShareParams && !scope.addedMobileShare){
            scope.addedMobileShare = true;
            scope.mobileShareParams.player = this;
            scope.mobileShare = new ntv.VideoMobileShare(scope.mobileShareParams);
        };
    },

    // this function checks if the iframe content changed, and if so calls init again, restarting the player
    validateIframe: function () {
        var iframeDoc = this.iframe.contents()[0] || this.iframe[0].contentWindow.document;
        var iframeBodyElement = prdom.query(iframeDoc).find("body");
        if (iframeBodyElement.length == 0 || iframeBodyElement.children().length == 0) {
            this.init();
        }
    },

    // abstract, needs to be implemented on child classes
    //postInitHook: function(){},

    // abstract, needs to be implemented on child classes
    //postVideoRenderingHook: function(){},

    // abstract, needs to be implemented on child classes
    //play: function(){},

    // abstract, needs to be implemented on child classes
    //pause: function (){},

    // abstract, needs to be implemented on child classes
    //reset: function (){},

    // abstract, needs to be implemented on child classes
    // isSeeking: function() {}

    // abstract, needs to be implemented on child classes
    // isFullScreen: function(){}

    // abstract, needs to be implemented on child classes
    //setUserActive = function(active){}

    // abstract, needs to be implemented on child classes
    // it should return the video current position
    //getCurrentTime: function () {},

    // abstract, needs to be implemented on child classes
    // it should return the video duration
    //getDuration: function () {},

    // abstract, needs to be implemented on child classes
    // it should mute the player
    //mute = function(){}

    // abstract, needs to be implemented on child classes
    // it should unmute the player
    //unMute = function(){}

    // abstract, needs to be implemented on child classes
    // it should set the player volume
    //setVolume = function(volume){}

    // abstract, needs to be implemented on child classes
    // it should get the player volume
    //getVolume = function(){}

    toggle: function () {
        this.playing ? this.pause() : this.play();
    },

    // should be called when the play button was clicked
    onPlayIntent: function(){
        this.trackReadAndClick();
    },

    startTimeTracking : function(){
        if (this.tos){
            this.tos.resume();
        }
        this.stopWatch.resume();
    },

    stopTimeTracking : function(){
        if (this.tos){
            this.tos.stopAndTrack();
        }
        this.stopWatch.stop();
    },

    // should be called when the video actually started playing
    onPlay: function() {
        var scope = this;
        if (scope.trackingEnabled) {
            scope.startTimeTracking();
        }
        scope.trackReadAndClick();
        scope.trackAction(scope.tracker.videoStartActionType);
        scope.reportPlayingStatus(true);
    },

    onPause: function() {
        var scope = this;
        if (scope.trackingEnabled) {
            scope.stopTimeTracking();
        }
        if (scope.canShowRenderingOverlays()) {
            scope.reportPlayingStatus(false);
        }
        scope.onUserInteracted();
        if (scope.mobileShare) {
            scope.mobileShare.openModalSharePopup();
        }
    },

    onStop: function() {
        var scope = this;
        var ar = scope.actionReported;
        // if tracking is not enabled or the video never start, it doesn' make sense execute onStop
        if (!this.trackingEnabled || !ar[56]){
            return;
        }
        scope.stopTimeTracking();
        if (ntv.Util.isAndroidTablet() || !(scope.getDuration() > 0)) {
            // for android tablet, or when we cannot get the video length
            // whenever they finish the video we try to track the other quartiles if they not yet tracked
            scope.trackAction(39);
            scope.trackAction(40);
            scope.trackAction(41);
        }
        scope.trackAction(scope.tracker.videoEndActionType);
        scope.playing = false;
        // reset tracking to make it fire again, for actions that can fire more than once
        ar[22] = false; // VideoView
        ar[56] = false; // Start
        ar[39] = false; // FirstQuartile
        ar[40] = false; // Midpoint
        ar[41] = false; // ThirdQuartile
        ar[23] = false; // Complete
        ar[57] = false; // VideoViewManualStart
        ar[58] = false; // VideoBillableView
        ar[60] = false; // 15 Second Mark
        ar[61] = false; // 30 Second Mark
        scope.lastProgress = 0;
        scope.stopWatch.reset();
        scope.trackVideoView();
        if (scope.mobileShare) {
            scope.mobileShare.openModalSharePopup();
        }
    },

    onProgress: function () {
        var scope = this;
        var position = scope.getCurrentTime(); //get video position
        var duration = scope.getDuration(); //get video duration
        var currentProgress = Math.round(position / duration * 100); //calculate % complete, rounded to a whole number
        scope.checkProgress({current: currentProgress, last:scope.lastProgress, val:25, action:scope.tracker.videoProgress25PercentActionType});
        scope.checkProgress({current: currentProgress, last:scope.lastProgress, val:50, action:scope.tracker.videoProgress50PercentActionType});
        scope.checkProgress({current: currentProgress, last:scope.lastProgress, val:75, action:scope.tracker.videoProgress75PercentActionType});
        scope.checkProgress({timestamp: position, mark: 15, duration: duration, action: scope.tracker.videoPlayed15SecondsType});
        scope.checkProgress({timestamp: position, mark: 30, duration: duration, action: scope.tracker.videoPlayed30SecondsType});
        scope.lastProgress = currentProgress;
        if (scope.autoPlayTracker){
            if (scope.lastVolume != scope.getVolume()) {
                scope.onUserInteracted();
                scope.lastVolume = scope.getVolume();
            }
        }
    },

    // utility function to bind to onProgress if the player doesn't have an event for when the video duration changes
    bindOnProgress: function(){
        var scope = this;
        var doc = scope.doc;
        doc.bind('ntvVideoStart', function (e, adID) {
            if (adID == scope.adID && scope.intervalID == -1){
                scope.intervalID = setInterval(function () { scope.onProgress() }, 150);
            }
        });

        doc.bind('ntvVideoComplete', function (e, adID) {
            if (adID == scope.adID && scope.intervalID != -1){
                clearInterval(scope.intervalID);
                    scope.intervalID = -1;
            }
        });
    },

    onUserInteracted: function(){
        var scope = this;
        if (!scope.userInteracted){
            scope.userInteracted = true;
            scope.triggerEvent("ntvUserInteracted");
        }
    },

    checkProgress: function (progress) {
        if("current" in progress){
                    if (progress.current >= progress.val 
                            && progress.current < progress.val+10 
                            && progress.last > progress.val-10 && progress.last < progress.current) {
                        this.trackAction(progress.action);
                    }
        }else if("timestamp" in progress){
            if(progress.timestamp >= progress.mark 
                && progress.timestamp < (progress.mark+1)){
                    this.trackAction(progress.action);
            }
        }

    },

    trackAction: function(val) {
        if (prdom.onFocus) this.recordType = 1;
        if (!this.actionReported[val] && this.trackingEnabled) {
            this.actionReported[val] = true;
            var tracker = this.videoTrackers[val];
            if (tracker) {
                ntvInsertTracking(this.tracker.getUrl(tracker.AT), tracker.tags || "", 1);
                this.triggerEvent("ntvVideo"+ tracker.eventName);
            }
        }
    },

    trackReadAndClick: function(){
        if (!this.renderingParams.article && !this.autoPlayParams) {
            this.trackAction(this.tracker.readAndClickActionTypes); // only track on the tout page
        } else if (this.autoPlayParams){
            this.trackAction(this.tracker.secondaryImpressionActionType ); // for auto play we only track the read here
        }
    },

    trackVideoView: function(){
        var scope = this;
        var ar = scope.actionReported;
        var recursiveCall = false;
        // video view
        if (scope.videoViewDelay > 0 && !ar[scope.tracker.videoView]){
            if (scope.stopWatch.duration() < scope.videoViewDelay){
                setTimeout(function () {
                    scope.trackVideoView();
                }, 100);
                recursiveCall = true;
            } else {
                if ((!scope.autoPlayParams || scope.userInteracted)
                    && scope.videoTrackers[scope.tracker.videoView].AT == scope.tracker.videoView){
                    scope.videoTrackers[scope.tracker.videoView].AT += ',' + scope.tracker.videoViewManualStart;
                }
                this.trackAction(scope.tracker.videoView)
            }
        }
        // video billable view
        if (scope.videoBillableViewDelay > 0 && !ar[scope.tracker.videoBillableView]){
            if (scope.stopWatch.duration() < scope.videoBillableViewDelay){
                if (!recursiveCall) {
                    setTimeout(function () {
                        scope.trackVideoView();
                    }, 100);
                }
            } else {
                this.trackAction(scope.tracker.videoBillableView)
            }
        }

    },

    headlineClicked : function(){
        this.trackAction(this.tracker.videoHeadlineClick)
    },

    turnOffAutoPlay: function(){
        var scope = this;
        scope.trackAction(scope.tracker.clickToUnMute);
        scope.trackAction(scope.tracker.clickActionType);
        if (scope.videoViewDelay == 0){
            scope.trackAction(scope.tracker.videoViewManualStart);
        } else if (scope.stopWatch.duration() > scope.videoViewDelay){
            scope.trackAction(scope.tracker.videoViewManualStart);
        }
    },

    reportPlayingStatus: function(status){
        if (status) {
            this.triggerEvent("ntvPlayerPlay");
        } else {
            this.triggerEvent("ntvPlayerPause");
        }
        this.playing = status;
    },

    triggerEvent: function(eventName){
        this.doc.trigger(eventName, [this.adID, this.getVolume()]);
    },

    // this function needs to be called after the player is ready
    setupSkin: function(){
        var params = this.renderingParams;
        params.player = this;
        if (!this.videoRendering) {
            this.videoRendering = new ntv.VideoRendering(params);

        }
    },

    canShowRenderingOverlays: function(){
        var ar = this.actionReported;
        // not auto player, or user interacted or show end screen setting and the video completed
        return !this.autoPlayTracker || this.userInteracted || (this.autoPlayParams.onVideoEnd == 1 && ar[23]);
    },

    setupAutoPlay: function(){
        if (!this.autoPlayParams || this.renderingParams.videoExecution != 8 || this.renderingParams.mobile){ // only run autoplay if it was set and video execution is inline
            return;
        }
        this.lastVolume = this.getVolume();
        this.autoPlayParams.playerElement = this.iframe[0];
        this.autoPlayTracker = new ntv.VideoAutoPlayTracker(this.autoPlayParams);

    }

};// Requires video.js

ntv.NativoVideo = function(params){
    ntv.Video.call(this, params);
    var q = prdom.query;
    var scope = this;
    scope.renderingParams.autoplay = true; // force autoplay, as it only applies to YT
    var doc;
    var player;
    var onAutoPlayerUserInteraction;

    // =======================================================================================
    //                         Private functions
    // =======================================================================================

    var bindPlayerEvents = function (player ){
        player.on('play', function () { scope.onPlay(); });
        player.on('pause', function () {scope.onPause()});
        player.on('ended', function () {scope.onStop()});
        player.on('timeupdate', function () {scope.onProgress()});
        player.on('useractive', function () {scope.triggerEvent('ntvUserActive')});
        player.on('userinactive', function () {scope.triggerEvent('ntvUserInactive')});
        player.on('fullscreenchange', function () {scope.triggerEvent('ntvFullScreenChange')});
        scope.triggerEvent("ntvPlayerReady");
    };

    var onPlayerReady = function(player){
        // all the necessary binding
        scope.trackingEnabled = !scope.vastAsMainSource;
        if (scope.resize){ // resize the player once it is loaded
            scope.resize();
        }
        var c = q(doc);
        if (scope.vastUrl.length > 0){
            player.ads();
            player.vast({
                url: scope.vastUrl,
                playAsMainSource: scope.vastAsMainSource
            });
            player.on('adsready', function() {
                // on vast ready, set the clickthrough and click trackers
                var clickthrough;
                if (player.vastTracker.clickThroughURLTemplate) {
                    clickthrough = VASTUtil.resolveURLTemplates(
                        [player.vastTracker.clickThroughURLTemplate],
                        {
                            CACHEBUSTER: Math.round(Math.random() * 1.0e+10),
                            CONTENTPLAYHEAD: player.vastTracker.progressFormated()
                        }
                    )[0];
                }
                if (clickthrough){
                    c.find('.ntvLearnMore').attr('href',clickthrough);
                }
                c.find('.ntvLearnMore').click( function(){
                    var clicktrackers = player.vastTracker.clickTrackingURLTemplate;
                    if (clicktrackers) {
                        player.vastTracker.trackURLs([clicktrackers]);
                    }
                });
                // hook the video start action to happen when the video played the first frame
                player.on('timeupdate', function () {
                    if (!scope.actionReported[56] && player.currentTime() > 0){
                        scope.onPlay();
                    }
                });
                if (scope.vastAsMainSource) {
                    player.src(player.vast.sources);
                }
            });
            var onVastStart = function(){
                scope.trackingEnabled = scope.vastAsMainSource; // enable tracking, which should only happen for the main content
                bindPlayerEvents(player);
                scope.trackingEnabled ? scope.startTimeTracking() : scope.stopTimeTracking();
                c.find('.vast-skip-button').css('z-index', 10).css('cursor', 'pointer').css('position', 'absolute');
            }
            var onVastStop = function(){
                scope.trackingEnabled = !scope.vastAsMainSource; // disable tracking, which should only happen for the main content
                if (!scope.trackingEnabled) {
                    scope.stopTimeTracking();
                } else {
                    setTimeout(function() {
                        scope.play();
                    }, 200);
                }
            }

            player.on('vast-preroll-ready', onVastStart);
            player.on('vast-preroll-removed', onVastStop);
            player.on('adscanceled', onVastStop);

        }
        var controlSpliterDiv = '<div class="control-spliter"></div>';
        var controlSpliterDivFloatRight = '<div class="control-spliter" style="float:right"></div>';
        var playControlClass = '.vjs-play-control';
        var muteControlClass = '.vjs-mute-control';
        c.find(playControlClass).after(c.find(muteControlClass));
        c.find(playControlClass).after(controlSpliterDiv);
        c.find(muteControlClass).after(c.find(".vjs-volume-control"));
        c.find(muteControlClass).after(controlSpliterDiv);
        c.find(".vjs-fullscreen-control").after(controlSpliterDivFloatRight + '<div class="share-btn-bottom vjs-control"></div>' +  controlSpliterDivFloatRight);
        c.find(".vjs-big-play-button").remove();
        c.find(".top-share-btn").remove();

        //setup skin
        scope.setupSkin();

        if (scope.vastUrl.length == 0) {
            bindPlayerEvents(player);
        }
    };

    // =======================================================================================
    //                         Public functions
    // =======================================================================================

    // this function will be called after the parent init function is executed
    this.postInitHook = function(){
        doc = scope.iframeContent[0];
        var win = doc.defaultView || doc.parentWindow;
        ntvAppendStylesheet("ntvPlayerCss", scope.playerCssUrl, doc);
        ntv.Util.appendScript(scope.videojsUrl, function () {
            win.videojs("ntvVideo", {"controls": true, "inactivityTimeout": 1000,}).ready(function () {
                player = this;
                onPlayerReady(player)
            });
        }, "ntv-videojs", doc);
    }

    this.postVideoRenderingHook = function(){
        q(doc).find('.top-share-btn').remove();
    }

    this.play = function (){
        this.onPlayIntent();
        player.play();
    }

    this.pause = function (){
        player.pause();
    }

    this.toggle = function () {

        if (onAutoPlayerUserInteraction){ //if auto play mode, we don' toggle but call the function for AutoPlayerUserInteraction
            onAutoPlayerUserInteraction();
        } else {
            this.playing ? player.pause() : player.play();
        }
    }

    this.reset = function (){
        player.pause();
        player.currentTime(0);
    }

    this.isSeeking = function() {
        return player.seeking();
    }

    this.isFullScreen = function(){
        return player.isFullscreen();
    }

    this.setUserActive = function(active){
        return player.userActive(active);
    }

    this.getCurrentTime = function () {
        return player.currentTime() || NaN;
    }

    this.getDuration = function () {
        return player.duration() || NaN;
    }

    this.playFullScreen = function() {
        player.enterFullWindow()
    }

    this.mute = function(){
        player.muted(true);
    }

    this.unMute = function(){
        player.muted(false);
    }

    this.setVolume = function(volume){
        player.volume(volume);
    }

    this.getVolume = function(){
        return player.volume();
    }

    this.bindAutoPlayerUserInteraction = function(func){
        this.iframeContent.bind('mouseup', func);
        onAutoPlayerUserInteraction = func;
    }

    this.unbindAutoPlayerUserInteraction = function(){
        this.iframeContent.unbind('mouseup');
        onAutoPlayerUserInteraction = undefined;
    }


    // init the player
    ntv.Util.runWithFirefoxIframeProtection(this.iframe, function() { scope.init() }, function() {scope.validateIframe() });

}
ntvExtends(ntv.Video,ntv.NativoVideo);
// Requires video.js

ntv.YouTubeVideo = function(params) {
    ntv.Video.call(this, params);
    var scope = this;
    var q = prdom.query;
    var player;
    var state;

    // =======================================================================================
    //                         Private functions
    // =======================================================================================

    // bind the YT events
    var onPlayerStateChange = function(event) {
        state = event.data;
        if (event.data == YT.PlayerState.PLAYING) {
            scope.onPlay();
        } else if (event.data == YT.PlayerState.ENDED) {
            scope.onStop();
        } else if (event.data == YT.PlayerState.PAUSED) {
            setTimeout(function() {
                if (state == YT.PlayerState.PAUSED) {
                    scope.onPause()
                }
            }, 200); // add a small delay in case of seeking, as it pauses, buffer and play right away
        }
    };

    // when the player is ready, bind the YT events
    var onPlayerReady = function(event) {
        player = event.target;
        player.addEventListener('onStateChange', function (e) { onPlayerStateChange(e); });
        //setup skin
        if (!ntv.Util.isIE()) {
            scope.setupSkin();
        }
        scope.bindOnProgress();
        scope.triggerEvent("ntvPlayerReady");
        if (scope.playerVarsAutoPlay){
            scope.play();
        }
    };

    // create the YT player
    var setupPlayer = function(element){
        if (player !== undefined){
            return;
        }
        element.style.visibility = "hidden";
        player = new YT.Player(element, {
            height: '390',
            width: '640',
            events: { 'onReady': function (e) { onPlayerReady(e); element.style.visibility = "visible";} }
        });
        q(element.ownerDocument).mouseenter(function () {
            scope.triggerEvent("ntvUserActive");
        }).mouseleave(function () {
            scope.triggerEvent("ntvUserInactive");
        }).mousemove(function (e) {
            if (!e.target.tagName && !e.relatedTarget) {
                scope.triggerEvent("ntvUserInactive");
            }
        });

        //setup skin
        if (ntv.Util.isIE()) {
            scope.setupSkin();
        }
    };

    // wait until the YT library is fully loaded
    var onYouTubeIframeAPIReady = function () {
        if (typeof YT != "undefined") {
            YT.ready(function () {
               setupPlayer(q(scope.iframeContent).find("#ntvVideo")[0]);
            });
        } else {
            setTimeout(function () { onYouTubeIframeAPIReady(); }, 100);
        }
    };

    // =======================================================================================
    //                         Public functions
    // =======================================================================================

    // this function will be called after the parent init function is executed
    this.postInitHook = function() {
        ntv.Util.appendScript('https://www.youtube.com/player_api', function () { onYouTubeIframeAPIReady();  }, "ntv-yt-api");
    };

    this.postVideoRenderingHook = function(){
        var param = this.renderingParams;
        // For YT we want to count the click on the YT site, the user need to initialize the action
        if (!param.autoplay || param.mobile) {
            q(scope.iframeContent).find(".video-preview-img").css("visibility", "hidden");
        }
    };

    this.play = function(){
        this.onPlayIntent();
        player.playVideo();
    };

    this.pause = function(){
        player.pauseVideo();
    };

    this.reset = function(){
        player.seekTo(0);
        player.pauseVideo();
    };

    //override the parent implementation
    this.toggle = function() {
        var param = this.renderingParams;
        if (!param.mobile && param.autoplay) { // for YT toggle only should work for desktop when autoplay
            this.playing ? this.pause() : this.play();
            this.onUserInteracted();
        }
    };

    this.isSeeking = function() {
        return state != 2; // for YT the pause state is not tied to seeking, so we always return false
    };

    this.isFullScreen = function(){
        return false; // we don't need this for YT
    };

    this.setUserActive = function(active){
        active ? scope.triggerEvent("ntvUserActive") : scope.triggerEvent("ntvUserInactive");
    };

    this.getCurrentTime = function() {
        return player.getCurrentTime() || NaN;
    };

    this.getDuration = function() {
        return player.getDuration() || NaN;
    };

    this.mute = function(){
        player.mute();
    };

    this.unMute = function(){
        player.unMute();
    };

    this.setVolume = function(volume){
        player.setVolume(volume * 100);
    };

    this.getVolume = function(){
        return player.getVolume ? player.getVolume() / 100 : 100;
    };

    this.bindAutoPlayerUserInteraction = function(func){
        this.doc.bind('ntvUserInteracted', func);
    };

    this.unbindAutoPlayerUserInteraction = function() {
        this.doc.unbind('ntvUserInteracted');
    };

    // init the player
    ntv.Util.runWithFirefoxIframeProtection(this.iframe, function() { scope.init() }, function() {scope.validateIframe() });

};
ntvExtends(ntv.Video,ntv.YouTubeVideo);// Requires video.js
// Requires nativo-video.js
// Requires youtube-video.js

ntv.VideoRendering = function(params) {
    ntv.Util.copyProperties(params, this);

    var consts = {
        // VIDEO EXECUTION TYPES
        CLICK_TO_EXPAND: 4,
        PRE_EXPANDED: 8
    };

    var q = prdom.query;
    var scope = this;
    var doc = q(PostRelease.getTopWindow().document);

    var outerElement = doc.find("." + scope.outerCssClass);
    var linkElem = outerElement.find("." + scope.linkCssClass);
    var previewImage = ntv.Util.applyImageResizer(scope.previewImage);
    var adID = scope.player.adID;
    var placementID = scope.player.placementID;
    var iframe = scope.player.iframe;
    var iframeDoc = scope.player.iframeContent[0];
    var iframeWindow = iframeDoc.defaultView || iframeDoc.parentWindow;
    var iframeBodyElement = scope.player.iframeBodyElement;

    var initialWidth = 0;
    var initialHeight = 0;

    var displayTxt = "display";
    var inlineTxt = "inline";
    var noneText = "none";

    // =======================================================================================
    //                         Helper functions
    // =======================================================================================

    // This function will update the top info bar, changing its opacity.
    var updateInfoBar = function (animate, opacity) {
        var infoBar = iframeBodyElement.find(".info-bar");
        if (opacity == 1 && (scope.videoPlaying == undefined || !scope.player.trackingEnabled)){ // don't show if the video never played
            return;
        }
        if (!ntv.Util.isIE() && animate)
            infoBar.animate({opacity: opacity}, 400, function () { iframeBodyElement.find(".info-bar").css(displayTxt, opacity == 1 ? inlineTxt : noneText) });
        else {
            infoBar.css("opacity", opacity).css(displayTxt, opacity == 1 ? inlineTxt : noneText);
        }
    };

    // play video wrapper
    var playVideo = function () {
        hideAllOverlays();
        if (scope.videoPlaying !== undefined) {
            if (iframeBodyElement.find(".replayIcon").length > 0){
                scope.player.reset();    // if the video ended, reset before playing again
            }
            scope.player.play();
            scope.videoPlaying = true;
        }
        scope.player.setUserActive(true);
    };

    // alias to check if the player is full screen, with a protection in case the player is not ready
    var isFullScreen = function () {
        return scope.player && scope.player.isFullScreen();
    };

    // update the element width and height
    var updateDimension = function(elem, w, h){
        return elem.attr('height', h).attr('width', w).css('height', h).css('width', w)
    };

    // show a specific overlay (i.e pause screen, info screen, share screen)
    var showOverlay = function (selector) {
        if (scope.player.canShowRenderingOverlays()) {
            updateInfoBar(false, 0);
            scope.player.setUserActive(false);
            iframeBodyElement.find(selector).css(displayTxt, inlineTxt);
            scope.hidePauseScreen = true;
            if (scope.videoPlaying !== undefined) {
                scope.player.pause();
            }
        }
    };

    // hide a spefic overlay
    var hideOverlay = function (selector) {
        iframeBodyElement.find(selector).css(displayTxt, noneText);
        scope.hidePauseScreen = false;
    };

    // hide all overlays
    var hideAllOverlays = function () {
        hideOverlay('.pause-end-screen');
        hideOverlay('.info-overlay');
        hideOverlay('.share-overlay');
        // only remove the preview image if not using mobile share and the video is playing
        if (scope.videoPlaying !== undefined && !scope.player.addedMobileShare) {
            iframeBodyElement.find(".video-preview-img").css(displayTxt, noneText);
        }
    };

    // Resize the player, keeping the initial aspect ratio
    // if updateImage, we use the image resizer to resize the preview image
    var resize = function (updateImage) {
        try {
            var ntvVideoElem = iframeBodyElement.find("#ntvVideo");
            var w = ntvVideoElem.width();
            if (w > 0) {
                var containerW = outerElement.find(".ntv-video-wrapper" + adID).filter(".ntv-video-wrapper" + adID).width(); // removed andSelf() before .filter() - AC (4/19/2016)
                if (containerW > 0) {
                    w = containerW;
                }
                if (isFullScreen() || (iframeWindow.innerWidth < w)) {
                    w = iframeWindow.innerWidth;
                }
                var h = Math.ceil(initialHeight * w / initialWidth);
                if (isNaN(h)){
                    return;
                }
                updateDimension(iframe, '100%', h).css("margin", 0);
                h = iframe.height();
                updateDimension(ntvVideoElem, w, h);
                updateDimension(iframeBodyElement.find("video"), w, h);
                if (scope.overrideInfoIcon) {
                    var logoWidth = w > 480 ? 100 : 50;
                    iframeBodyElement.find("#aut-info-btn").attr('src', scope.advertiserLogoUrl + '?mode=max&width=' + logoWidth + '&height=30')
                }
                var previewImageElem = iframeBodyElement.find("div[class~='video-preview-img'], .video-preview-img");
                if (updateImage == true && previewImageElem.css("visibility") != "hidden") {
                    var previewImageUrl = previewImage + "?mode=" + scope.resizeMode + "&width=" + w + "&height=" + h;
                    var display = previewImageElem.css(displayTxt);
                    
                    // cssText doesn't work in Safari - AC 5/4/2016
                    previewImageElem.css("background", "url(" + ntvApplyProtocolToUrl(previewImageUrl) + ") no-repeat !important").css("background-size", "cover !important").css("display", display);
                }
            }
        } catch (e) {
            console.log(e)
        }
    };

    this.resizeIframe = function(){
        resize();
    }

    // if the player goes full screen we need to hide the share button
    var onFullScreenChange = function () {
        var display = isFullScreen() ? noneText : inlineTxt;
        iframeBodyElement.find(".share-btn-bottom").map(function () {
            if (!q(this).hasClass('top-share-btn')) {
                q(this).css(displayTxt, display);
            }
        });
        iframeBodyElement.find('.control-spliter').map(function () {
            if (q(this).css('float') == 'right') {
                q(this).css(displayTxt, display);
            }
        });
        setTimeout(resize, 200);
    };

    // =======================================================================================
    //                         Main functions
    // =======================================================================================

    var setInitialDimensions = function(){
        iframe.css("position", "relative"); // force the iframe position to be relative

        // get the initial dimensions
        initialWidth = iframe.attr('width');
        initialHeight = iframe.attr('height');

        if (initialWidth == 0 && initialHeight == 0) {
            // default aspect ratio
            initialWidth = 16;
            initialHeight = 9;
        }

        iframe.attr('width', '100%');
    };

    var setupSharingSkin = function () {

        // add our css to the iframe head
        ntvAppendStylesheet("ntvSharingCss", scope.cssUrl, iframeDoc);

        // add the sharing html to the iframe body
        iframeBodyElement.find(".video-wrapper").append(scope.html);

        //dynamically add the learn more table rows
        var learnMoreTR = iframeBodyElement.find('.pause-end-screen table tr')[1];
        iframeBodyElement.find('.share-overlay table tr:last').after(learnMoreTR.outerHTML);
        iframeBodyElement.find('.info-overlay table tr:last').after(learnMoreTR.outerHTML);


        // if CLICK_TO_EXPAND, hide preview image
        if (scope.videoExecution == consts.CLICK_TO_EXPAND && !scope.article) {
            iframeBodyElement.find(".video-preview-img").css("visibility", "hidden");
        }

        // set the initial play icon
        iframeBodyElement.find('a[class ~="replayIcon"]').removeClass("replayIcon").addClass("playIcon");

        var replayLabel = iframeBodyElement.find('a[class ~="replayLabel"]');
        var ntvVideo = iframeBodyElement.find("#ntvVideo");
        var height = ntvVideo.attr('height');

       window.iframeNativo = iframeBodyElement

        setInitialDimensions();

        //setup custom CTA image
        if (scope.customLearnMoreImg != ''){
            iframeBodyElement.find('a[class ~="ntvLearnMoreIcon"]').attr('style', 'background: rgba(255, 255, 255, 0) url('+ scope.customLearnMoreImg +') 0px 50%/contain no-repeat !important;');
        }

        // events binding
        q(window).bind('ready load resize orientationchange', resize);
        q(iframeWindow).bind('ready load resize orientationchange', resize);

        // info overlay
        var infoButtonSelector ='.info-btn a';
        if (scope.overrideInfoIcon) {
            var infoBtnDiv = iframeBodyElement.find('.info-btn');
            infoBtnDiv.find('a').remove();
            infoBtnDiv.removeClass('info-btn');
            infoBtnDiv.addClass('img-info-btn');
            // logic to define the advertiser logo max width
            var w = ntvVideo.width();
            w = w > 480 ? 100 : 50;
            infoBtnDiv.prepend('<img id="aut-info-btn" src="' + scope.advertiserLogoUrl + '?mode=max&width=' + w + '&height=30">');
            infoButtonSelector = '.img-info-btn';
        }
        iframeBodyElement.find(infoButtonSelector).click(function () {
            showOverlay('.info-overlay');
            return false;
        });

        // show share overlay
        iframeBodyElement.find('.share-btn-bottom').click(function () {
            showOverlay('.share-overlay');
            return false;
        });

        // on play or close overlay buttons, we should play the video
        iframeBodyElement.find("a[class ~='play'], div.share-close-btn a, div.info-close-btn a").click(function () {
            playVideo();
            return false;
        });

        iframeBodyElement.find("div[class ~='video-preview-img']").click(function () {
            scope.videoPlaying = true;
            playVideo();
            return false;
        });
         iframeBodyElement.find("div[class ~='video-preview-img'], div[class ~='video-preview-img'] a").click(function () {
            scope.videoPlaying = true;
            playVideo();
            return false;
        });
        // on the play event we should hide all overlays
        q(doc).bind("ntvPlayerPlay", function (e, id) {
            if (id == adID && !isFullScreen()) {
                scope.videoPlaying = true;
                hideAllOverlays();
                if (!scope.player.playedOnce) {
                    scope.player.playedOnce = true;
                    outerElement.find("div[class ~='ntv-mobile-share-bar']").css(displayTxt, inlineTxt);
                }
            }
        });

        // on pause we should show the pause overlay
        q(doc).bind("ntvPlayerPause", function (e, id) {
            if (id == adID && scope.videoPlaying && !scope.player.isSeeking() && !scope.hidePauseScreen && !isFullScreen()) {
                scope.videoPlaying = false;
                replayLabel.text("Resume Video");
                iframeBodyElement.find(" a[class ~='replayIcon']").removeClass("replayIcon").addClass("playIcon");
                setTimeout(function () {
                    showOverlay('div[class ~="pause-end-screen"]')
                }, 200);
            }
        });

        // when the video was completed, we should show the replay overlay
        q(doc).bind('ntvVideoComplete', function (e, id) {
            if (id == adID && !isFullScreen()) {
                scope.videoPlaying = false;
                replayLabel.text("Replay Video");
                iframeBodyElement.find("a[class ~='playIcon']").removeClass("playIcon").addClass("replayIcon");
                showOverlay('.pause-end-screen');
            }
        });

        q(doc).bind('ntvUserActive', function (e, id) { // on user active we should show the info bar
            if (id == adID && scope.videoPlaying) {
                updateInfoBar(true, 1)
            }
        }).bind('ntvUserInactive', function (e, id) { // on user inactive we should hide the info bar
            if (id == adID) {
                updateInfoBar(true, 0)
            }
        }).bind('ntvFullScreenChange', function (e, id) { // bind the full screen change event
            if (id == adID) {
                onFullScreenChange()
            }
        });

        // apply hook to track head and click
        outerElement.find('.prx_viewable_title' + placementID).click(function () {
            scope.player.headlineClicked();
        });

        resize(true);
        setTimeout(resize, 1000); // just in case the dom wasn't ready by the time this was instantiated

        updateInfoBar(false, 0); // hide the info back when the player is created
    };


    var renderPreExpanded = function () {
        // setup and clean the template
        outerElement.find('#ntvVideoDiv' + adID).remove();
        iframe.parent().removeAttr('style');

        //add specific event hooks for this video execution
        linkElem.map( function() {
            var elem = q(this);
            if (ntv.Util.isNotValidHeadlineLink(elem)){
                elem.click( function() {
                    scope.player.toggle();
                    return false;
                });
                elem.removeAttr("href").css('cursor', 'pointer');
            }
        });

        if (scope.player.clickedBeforeRendering){
            scope.player.toggle();
        }
    };

    var clickToExpandLinkClick = function(ntvExpanded){
        if (!outerElement.hasClass(ntvExpanded)) {
            outerElement.addClass(ntvExpanded);
            if (scope.autoplay) {
                setTimeout(function () {
                    if (outerElement.hasClass(ntvExpanded)) {
                        scope.player.play();
                    }
                }, 1000);
            }
        } else {
            outerElement.removeClass(ntvExpanded);
            scope.player.pause();
        }
    };

    var renderClickToExpand = function () {
        // setup and clean the template
        outerElement.addClass('ntvExpandable');
        outerElement.find(".ntv-video-frame").css('transition-duration', scope.expandSpeed).css('-webkit-transition-duration', 'width ' + scope.expandSpeed);
        // fix for expandable ad units so the video wrapper can inherit the correct height and padding
        var videoWrapperParent = outerElement.find(".ntv-video-wrapper" + adID).parent();
        if (videoWrapperParent.attr('class') == 'ntv-video-container') {
            videoWrapperParent.css('height', 'inherit');
            videoWrapperParent.css('padding-bottom', 'inherit');
        }
        iframe.parent().removeAttr('style');

        //add specific event hooks for this video execution
        linkElem.map( function() {
            var elem = q(this);
            if (ntv.Util.isNotValidHeadlineLink(elem)) {
                elem.click(function() {
                    clickToExpandLinkClick("ntvExpanded");
                    return false;
                });
            }
        });

        if (scope.player.clickedBeforeRendering){
            clickToExpandLinkClick("ntvExpanded");
        }

    };

    var init = function () {
        switch (scope.videoExecution) {
            case consts.PRE_EXPANDED:
                renderPreExpanded();
                break;
            case consts.CLICK_TO_EXPAND:
                renderClickToExpand();
                break;
        }
        if (scope.videoExecution) {
            setupSharingSkin();
        } else {
            // get the initial dimensions
            setInitialDimensions();            // events binding
            q(window).bind('resize', resize);
            q(iframeWindow).bind('resize', resize);
            resize();
        }
        q(document).trigger("ntvVideoRenderingReady", [placementID + "_" + adID, iframeBodyElement]);
    };

    init();
};


/**
 * Created by marcelo on 16/10/15.
 * This class is responsible for the video auto play functions. it will track and be able to detect when the video
 * is in view and apply to the auto play constraints to start playing, as well as execute the expected action when
 * the video gets out of screen, finish player or when the user interacts for the first time.
 */
ntv.VideoAutoPlayTracker = function(params){
    ntv.Util.copyProperties(params, this);
    var scope = this;
    var consts = {
        PAUSE: 1,
        RESTART: 2,

        SHOW_END_SCREEN: 1,
        REPLAY: 2,
    };
    var videoPlaying = false;
    var playedOnce = false;
    var q = prdom.query;
    var pr = PostRelease;
    var player = scope.player;


    var notShowEndScreenOrShowEndScreenAndDidntPlayOnce = function(){
        return scope.onVideoEnd != consts.SHOW_END_SCREEN ||
            (scope.onVideoEnd == consts.SHOW_END_SCREEN && !playedOnce);
    }

    // what to do when the video is consider out of screen
    var onPlayerOutOfScreen = function(){
        if (scope.onOutOfScreen == consts.PAUSE){
            player.pause();
        } else if (notShowEndScreenOrShowEndScreenAndDidntPlayOnce()) {
            player.reset();
        }
        videoPlaying = false;
    }

    var stopWatch = new ntvStopWatch(function () {
            if (notShowEndScreenOrShowEndScreenAndDidntPlayOnce()) {
                player.play();
                videoPlaying = true;
            }
        }, scope.minViewableAreaTime);

    // detect if the video is in or out of screen
    var checkIsVisible = function () {
        if (!ntv.Util.canExecute(checkIsVisible, "videoViewable", 100)) {
            return;
        }
        //check if video element is visible on screen
        var viewability = ntv.Util.getElementViewability(scope.playerElement);
        var viewable = (viewability.visibleArea / viewability.totalArea) >= scope.minViewableArea;
        if (viewable && prdom.onFocus) {
            stopWatch.resume()
        } else {
            stopWatch.reset();
        }
        var outOfScreen = (viewability.visibleArea / viewability.totalArea) <= scope.outOfScreenViewableArea;
        if (outOfScreen || !prdom.onFocus){
            stopWatch.eventFired = false; // so we can fire multiple times
            if (videoPlaying){
                onPlayerOutOfScreen();
            }
        }
    }

    // function in charge to turn off auto play, when should be done when the user interacts
    var turnOffAutoPlay = function(){
        q(pr.getTopWindow()).unbind('scroll DOMNodeInserted ready load ntvOnFocusChange');
        player.unbindAutoPlayerUserInteraction();
        player.setVolume(scope.onClickVolume);
        player.unMute();
        player.turnOffAutoPlay();
        if (scope.onClickAction == consts.RESTART){
            player.reset();
        }
        player.play();
    }

    var init = function(){
        player.mute();
        player.userInteracted = false; // reset
        q(pr.getTopWindow()).bind('scroll DOMNodeInserted ready load ntvOnFocusChange', checkIsVisible);

        player.iframeBodyElement.find(".video-preview-img").css("visibility", "hidden");

        // set infinite loop until the user interacts if onViewEnd is set to replay
        player.doc.bind('ntvVideoComplete', function (e, adID) {
            if (adID == player.adID){
                if (scope.onVideoEnd == consts.REPLAY){
                    if (!player.userInteracted){
                        player.reset();
                        player.play();
                    }
                } else {
                    playedOnce = true;
                }
            }
        });
        player.bindAutoPlayerUserInteraction(turnOffAutoPlay);

        setTimeout(checkIsVisible, 100);
    }

    init();
}
ntv.VideoMobileShare = function(params) {
    ntv.Util.copyProperties(params, this);
    var q = prdom.query;
    var metaViewportContent = "";
    var scope = this;
    var player = scope.player;
    var position = 0;
    function preventBackgroundScrolling(event) {
        (window.orientation == 90 || window.orientation == -90) ?  document.body.scrollTop = position : event.preventDefault();
    }
    function touchMoveEvent(action) {
        q(ntv_iframe.contentWindow.document.body)[action]("touchmove", preventBackgroundScrolling);
    }
    
    var ntv_iframe = player.doc.find("#ntvShareIframe" + player.adID)[0];
    window.parent.document.body.appendChild(ntv_iframe);
    var mobileShareIframeDoc = ntv.Util.writeIframe( prdom.query(ntv_iframe), '', this.headHtml , this.bodyHtml);

    var closeModalSharePopup = function () {
        touchMoveEvent("unbind");
        q(ntv_iframe).css("display" , "none");
        // remove 1:1 ratio to viewport - AC (3/10/16)
        q("body").css("overflow", "inherit"); // Restoring Scrolling in background
        q('head').find("meta[name=viewport]").attr("content", metaViewportContent);
        document.querySelector("#ntvVideoIframe" + player.adID).scrollIntoView(true);
        document.body.scrollTop -= (window.screen.availHeight / 2);
    };

    this.openModalSharePopup = function () {
        position = document.body.scrollTop;
        touchMoveEvent("bind");
        // add 1:1 ratio to viewport  - AC (3/10/16)
        q('head').find("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
        q('body').css("overflow","hidden"); // Preventing Scrolling in background
        //Use orientation to determine styling of window.top.document.body so if page is zoomed, the modal 100% of the screen and fixed. Added to help with page zooming.. - AC (3/10/16)
        q(ntv_iframe).css("display", "block");
    };

    var init = function() {
        //Added meta tag to ensure that we have control over viewport as the non-responsive sites will not display modal properly  - AC (3/10/16)
        var metaViewport = q('head').find('meta[name=viewport]');
        if (metaViewport.size() == 0) {
            q('head').append(q('<meta name="viewport" id="ntvviewport" content="">')); //Add Node Once, manipulate later - AC (3/10/16)
        } else {
            metaViewportContent = q(metaViewport[0]).attr('content');
        }

        q(mobileShareIframeDoc).find("a#ntv_cancel").click(closeModalSharePopup);
        q(mobileShareIframeDoc).find("#ntv-share-background").click(closeModalSharePopup)

        var mobileShareIframeBody = q(mobileShareIframeDoc).find("body");
        q(player.doc).trigger("ntvMobileShareReady", [player.placementID + "_" + player.adID, mobileShareIframeBody]);
        mobileShareIframeBody.find("#ntv_video, .ntv_video-title, .fa-play").click(function() {
            player.play();
            closeModalSharePopup();
        });
    }

    init();

}/**
 * Created by marcelo on 24/09/15.
 */

ntv.Gallery = function(params){
    ntv.Util.copyProperties(params,this);

    var scope = this;
    var q = prdom.query;
    var consts = PostRelease.consts;
    var protocol = window.location.protocol;

    this.galleryJS = ntv.Util.adBlockerValidation(protocol + '//s.ntv.io/js/gallery.min.js');
    this.galleyCss = ntv.Util.adBlockerValidation(protocol + '//s.ntv.io/css/gallery.css');

    var legacyGalleryCss = ntv.Util.adBlockerValidation(protocol + '//s.ntv.io/css/gallery-footer.css');
    var sliderSelector = '.slider';

    var GALLERY_SLIDE_VIEW_ACTION_TYPE = 54;

    var gallery; // the gallery slick object
    var metadataElement; // the jquery element that holds the classes that will be filled in real time.

    var iframeSelector = "iframe#ntv-slideshow";
    // find the correct iframe element
    var container = document.body;
    if (q(this.outerCssClass).size() > 0) {
        container = q(this.outerCssClass);
    }
    var iframe = q(container).find(iframeSelector);
    var iframeContent; // the slideshow content jquery element


    /*
     * Generates the tracking url, the redirect Url parameter is optional
     */
    var getTrackingUrl = function(actionType, redirectUrl){
        var result = scope.baseTrackingUrl + actionType + '&' + consts.AVP + "=" + scope.adVersionPlacement + "&ord=" + new Date().getTime();
        if (redirectUrl)
            result += "&" + consts.REDIRECT+ '=' + redirectUrl;
        return result;
    };

    /*
     * This function will create the slider elements that will be rendered as the slideshow inside an iframe
     */
    var buildImageSliderContent = function(){
        var result = "";
        for (var i = 0; i < scope.slideshow.slides.length; i++) {
            slide = scope.slideshow.slides[i];
            if (slide.enabled) {
                result += '<div><div class="ntv-image" style="background-image: url(\'' + location.protocol + slide.image  + '\');'+
                    (slide.clickUrl ? 'cursor: pointer;' : '') + '" ';
                if (slide.clickUrl){
                    var extraParam = ntv.Util.isiOS() ? ',\'location=no\'' : '';
                    result += 'onclick="window.open(\''+ getTrackingUrl(4,slide.clickUrl) +'\',\'_blank\''+ extraParam+ ');"';
                }
                result += '></div></div>';
            }
        }
        return '<div class="slider">' + result + '</div>';
    };

    /*
     * This function will create the legacy footer in case the article template doesn't have the SLIDEMETADATA
     * fragment or the article is not Gallery ad unit, but has a slideshow as part of the content.
     */
    var getLegacyFooter = function(){
        var result = '<table style="width: 100%"><tbody><tr>';
        result += '<td class="ntv-gallery-headline"></td>';
        result += '<td style="text-align: right" class="ntv-gallery-slidenum">';
        result += '<span class="ntv-gallery-current-slide"></span> / <span class="ntv-gallery-total-slides"></span></td></tr></tbody></table>';
        result += '<p class="ntv-gallery-description"></p>';
        result += '<table class="ntv-gallery-detailinfo"><tbody><tr>';
        result += '<td class="ntv-gallery-date"></td>';
        result += '<td style="text-align: right" class="ntv-gallery-photo-credit"></td>';
        result += '</tr></tbody></table>';

        return result;
    };

    /*
     *  Find element including self
     */
    var find = function(element, selector ){
        return element.find(selector).andSelf().filter(selector);
    };

    /*
     * Function that should be triggered once the slide was changed. It should update the metadata element,
     * fire tracking, and update companion assets if needed
     */
    var onSlideChange = function(forceRefreshCompanion) {
        var curSlide = gallery.slick('slickCurrentSlide');
        var slide = scope.slideshow.slides[curSlide];

        // update the meta data element
        if (scope.showHeadline) {
            find(metadataElement, '.ntv-gallery-headline').html(slide.headline);
        }
        find(metadataElement, '.ntv-gallery-current-slide').html(curSlide + 1);
        find(metadataElement, '.ntv-gallery-total-slides').html(scope.slideshow.slides.length);
        if (scope.showDesc) {
            find(metadataElement, '.ntv-gallery-description').html(slide.description);
        }
        if (scope.showDate || scope.showCredit) {
            if (scope.showDate) {
                find(metadataElement, '.ntv-gallery-date').html(slide.date);
            }
            if (scope.showCredit) {
                find(metadataElement, '.ntv-gallery-photo-credit').html(slide.photoCredit);
            }
        } else {
            find(metadataElement, 'ntv-gallery-detailinfo').css('display', 'none');
        }

        // fire tracking
        //noinspection JSUnresolvedVariable
        ntvInsertTracking(getTrackingUrl(GALLERY_SLIDE_VIEW_ACTION_TYPE), scope.thirdPartyTracking, 1);

        // refresh the companion assets if needed
        if (forceRefreshCompanion && scope.refreshCompanionAssets) {
            var adResponse = PostRelease.articles[scope.adID];
            q('.ntv-companion').remove(); // delete the old companions
            if (adResponse.Fragments) {
                for (var i = 0; i < adResponse.Fragments.length; i++) {
                    var fragment = adResponse.Fragments[i];
                    // only process companion fragments
                    if ((new RegExp('\\bTOP\\b|\\bRIGHTRAIL\\b|\\bBOTTOMb\\b')).test(fragment.Type)) {
                        if (fragment.Mode == 1) { // if replace, we need to find the injection node again
                            fragment.InjectNode = prdom.query(fragment.Selector).first();
                        }
                        PostRelease.InsertAd(fragment); // add the companions again
                    }
                }
            }
        }
        if (typeof onNativoSlideChange == 'function') {
            try {
                onNativoSlideChange();
            } catch (err) {
                if (window.console && window.console.log) {
                    window.console.log(err.message);
                }
            }
        }
    };

    /*
     * Function to handle the resize event for the iframe
     */
    var resize = function(){
        var height = iframe.height();
        var width = iframe.width();
        iframeContent.find('body').css('height', height).css('width',width);
        iframeContent.find('.slick-track').css('height', height);
    };

    /*
     * Function to handle the on gallery ready event
     */
    var onGalleryReady = function(){
        onSlideChange(false);
        resize();
    };

    var setupIframe = function(){
        // Set properties on iFrame container
        iframe.attr('frameBorder', 0);
        iframe.attr('scrolling', "no");
        iframe.attr('border', "1px solid #000");

        var iframeDoc = iframe.contents()[0] || iframe[0].contentWindow.document;
        iframeDoc.open();

        // set the iframe header content
        var header = '<link rel="stylesheet" type="text/css" href="'+ scope.galleyCss+'"/>';
        if (scope.customCss){
            header += '<style>' + scope.customCss + '</style>';
        }

        // set the iframe body content
        var body = buildImageSliderContent();

        // write the iframe
        iframeDoc.write('<html style="overflow: hidden"><head>'+ header +'</head><body>'+ body +'</body></html>');
        iframeDoc.close();

        iframeContent = q(iframeDoc);
        resize();


        var iframeWindow = iframeDoc.defaultView || iframeDoc.parentWindow;
        // add the gallery js and bind the events
        ntv.Util.appendScript(scope.galleryJS, function () {
            // events must be set before initialize the slick object
            iframeWindow.$(sliderSelector).on('afterChange', function(){
                onSlideChange(true);
            });
            gallery =  iframeWindow.$(sliderSelector).slick({
                speed: 300,
                slidesToShow: 1
            });
            q(iframeWindow).bind('resize', resize);
            onGalleryReady();
        }, "ntv-gallery", iframeDoc);
    };

    /*
     * The init function should  find the metadataElement or wait until it is ready and then setup the iframe
     */
    this.init = function() {
        // check what element we will render
        for (i = 0; i < scope.slideshow.slides.length; i++){
            var slide = scope.slideshow.slides[i];
            if (slide.headline){
                scope.showHeadline = true;
            }
            if (slide.description){
                scope.showDesc = true;
            }
            if (slide.date){
                scope.showDate = true;
            }
            if (slide.photoCredit){
                scope.showCredit = true;
            }
        }


        // locate and set the metadata element
        if (scope.useLegacyFooter) {
            iframe.replaceWith('<div id="ntv-gallery-wrapper">' + iframe.prop('outerHTML') + '<div class="ntv-gallery-footer">' + getLegacyFooter() + '</div></div>');
            iframe = q(container).find(iframeSelector);
            var width = iframe.width();
            q(container).find("#ntv-gallery-wrapper").css("width", width);
            iframe.css("width", "100%");
            metadataElement = q(container).find(".ntv-gallery-footer");
            ntvAppendStylesheet("ntv-gallery", legacyGalleryCss)
        } else {
            metadataElement = q(container).find(".ntv-gallery-metadata");
        }
        if (metadataElement.length > 0){
            setupIframe();
        } else {
            setTimeout(function () { scope.init() }, 100);
        }
    };



    // init the gallery
    ntv.Util.runWithFirefoxIframeProtection(iframe, function() { scope.init() });

};// params.primaryImpressionURL
// params.thirdPartyTrackingTags
// params.minimumAreaViewable
// params.minimumExposedTime
// params.checkMinimumAreaViewable
// params.placementID
// params.infiniteScroll
// params.is_initPos
// params.is_interval
function ntvViewableImpressionTracker(params) {
    ntv.Util.copyProperties(params,this);
    var obj = this;
    this.win = prdom.win || window; // we set the scope where to search the unit

    this.stopWatch = new ntvStopWatch(function () {
        ntvInsertTracking(obj.primaryImpressionURL, obj.thirdPartyTrackingTags, 1);
        obj.remove(); // once we track the viewable impression, we can remove the tracker
    }, this.minimumExposedTime);

    this.lastCheck = new Date();
    this.missedCheck = 0;

    if (this.checkOnFocus) {
        prdom.onFocusEvents.push(function () {
            if (!prdom.onFocus) {
                obj.stopWatch.reset();
            }
        });
    }

    // infinity scroll logic
    if (this.infiniteScroll && this.is_interval > 0 && this.selector.indexOf("%p%") > 0) {
        PostRelease.setInfiniteScrollManager(this.placementID, this.is_initPos, this.is_interval, this.selector);
        this.selector = PostRelease.ISManager[this.placementID].getSelector();
    }

    PostRelease.viewableImpressionTrackers.push(obj);
    obj.init();
}

ntvViewableImpressionTracker.prototype.init = function () {
    prdom.query(PostRelease.getTopWindow()).bind('scroll DOMNodeInserted ready load ampScroll', PostRelease.checkIsAdVisible);
    setTimeout(PostRelease.checkIsAdVisible, 100);
}

ntvViewableImpressionTracker.prototype.remove = function () {
    ntv.Util.removeElementFromArray(PostRelease.viewableImpressionTrackers, this); // remove this tracker
    if (PostRelease.viewableImpressionTrackers.length == 0) {
        // if there is no tracker left, unbind the events for viewable impression
        prdom.query(PostRelease.getTopWindow()).unbind('scroll DOMNodeInserted ready load', PostRelease.checkIsAdVisible);
    }
}


ntvViewableImpressionTracker.prototype.checkViewability = function () {
    // raw parameters
    var totalArea = 0;
    var visibleArea = 0;
    var visible = true;

    // final IAB viewability result
    var adViewable = false;

    if (!PostRelease.ampMode) {
        var elements = prdom.query(this.selector, this.win.document);
        if (elements.length > 0) {
            // in case of inventory tracking we only check for 1 element
            if (this.isInvTracking)
                elements = [elements[0]];

            var validElements = [];
            for (var i = 0; i < elements.length; i++) {
                // if we cannot get the area on the higher level, we go down one level
                if (elements[i].offsetWidth == 0 || elements[i].offsetHeight == 0) {
                    prdom.query(elements[i]).children().each(function () {
                        validElements.push(this)
                    });
                } else {
                    validElements.push(elements[i]);
                }
            }
            if (validElements.length == 0) {
                validElements.push(elements[0]); // worst case we check at least if the element is on the viewport
            }
            for (var i = 0; i < validElements.length; i++) {
                var obj = ntv.Util.getElementViewability(validElements[i]);
                totalArea += obj.totalArea;
                visibleArea += obj.visibleArea;
                visible &= obj.visible;
            }
            adViewable = ((visibleArea / totalArea) >= this.minimumAreaViewable) || (!this.checkMinimumAreaViewable && totalArea == 0 && visible);
        }
    } else if (PostRelease.checkAmpViewability) {
        adViewable = PostRelease.checkAmpViewability() >= this.minimumAreaViewable ;
    }

    var focusValidation = this.checkOnFocus ? prdom.onFocus : true;
    if (adViewable && focusValidation) {
        this.stopWatch.resume();
    } else {
        this.stopWatch.reset();
    }
}/**
 * Created by marcelo on 01/04/16.
 */
ntv.CompanionAsset = function(){

    var q = prdom.query;

    function resizeIframe(obj) {
        var iframe = q(obj.contentWindow.document.body);
        if (iframe.length == 0) {
            return;
        }
        obj.style.height = iframe[0].scrollHeight + 'px';
        obj.style.width = iframe[0].scrollWidth + 'px';
    }

    q(document).ready(function() {
        q.each(q('.ntv-adunit'), function(idx, obj) {
            if (obj.rendered === undefined) {
                var userScript = unescape(obj.getAttribute("data-ntv-script"));
                ntv.Util.writeIframe( q(obj), '', '', userScript);
                obj.rendered = true;
            }
            resizeIframe(obj);
            var obj = this;
            obj.addEventListener("load", function(){ resizeIframe(obj) });
        });
    });
    /* REVERT TO THIS IF ABOVE DOESNT WORK WITH ZEPTO

        q(document).ready(function() {
        q.each(q('.ntv-adunit'), function(idx, obj) {
            var userScript = unescape(obj.getAttribute("data-ntv-script"));
            var iframe = q(obj).contents()[0].open();
            if (obj.rendered === undefined) {
                iframe.write(userScript);
                iframe.rendered = true;
            }
            iframe.close();
            resizeIframe(obj);
            var obj = this;
            obj.addEventListener("load", function(){ resizeIframe(obj) });
        });
    });
*/

}
var prxAds = [];

var prxContainerElement;


// we create only 1 instance of PostRelease
if (!window.PostRelease) {
    var PostRelease = new _pr();

    ntvInitOnFocusTracking(); // initialise the on focus logic
    
    // make sure we expose the PostRelease also on the top most window
    if (!PostRelease.getTopWindow().PostRelease) 
        PostRelease.getTopWindow().PostRelease = PostRelease;

    if (!PostRelease.getTopWindow().prdom) PostRelease.getTopWindow().prdom = prdom;

    // why do we have try & catch here?
    var autoStart = true;
    try {
        if (window._prx) {
            for (var i = 0; i < _prx.length; i++) {
                if (_prx[i][0] === 'cfg.SetNoAutoStart') {
                    autoStart = false;
                } 
            }
        }
    }
    catch (err) { }
    if (autoStart) {
        PostRelease.Start();
    }
    
}