///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JQUERY ENGINE 1.6.4
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function(a,b){function cu(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cr(a){if(!cg[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ch||(ch=c.createElement("iframe"),ch.frameBorder=ch.width=ch.height=0),b.appendChild(ch);if(!ci||!ch.createElement)ci=(ch.contentWindow||ch.contentDocument).document,ci.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),ci.close();d=ci.createElement(a),ci.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ch)}cg[a]=e}return cg[a]}function cq(a,b){var c={};f.each(cm.concat.apply([],cm.slice(0,b)),function(){c[this]=a});return c}function cp(){cn=b}function co(){setTimeout(cp,0);return cn=f.now()}function cf(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ce(){try{return new a.XMLHttpRequest}catch(b){}}function b$(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bZ(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bY(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bA.test(a)?d(a,e):bY(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)bY(a+"["+e+"]",b[e],c,d);else d(a,b)}function bX(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bW(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bP,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bW(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bW(a,c,d,e,"*",g));return l}function bV(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bL),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function by(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bt:bu;if(d>0){c!=="border"&&f.each(e,function(){c||(d-=parseFloat(f.css(a,"padding"+this))||0),c==="margin"?d+=parseFloat(f.css(a,c+this))||0:d-=parseFloat(f.css(a,"border"+this+"Width"))||0});return d+"px"}d=bv(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0,c&&f.each(e,function(){d+=parseFloat(f.css(a,"padding"+this))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+this+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+this))||0)});return d+"px"}function bl(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bd,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bk(a){f.nodeName(a,"input")?bj(a):"getElementsByTagName"in a&&f.grep(a.getElementsByTagName("input"),bj)}function bj(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bi(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function bh(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bg(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c=f.expando,d=f.data(a),e=f.data(b,d);if(d=d[c]){var g=d.events;e=e[c]=f.extend({},d);if(g){delete e.handle,e.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)f.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function bf(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function V(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(Q.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function U(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function M(a,b){return(a&&a!=="*"?a+".":"")+b.replace(y,"`").replace(z,"&")}function L(a){var b,c,d,e,g,h,i,j,k,l,m,n,o,p=[],q=[],r=f._data(this,"events");if(!(a.liveFired===this||!r||!r.live||a.target.disabled||a.button&&a.type==="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var s=r.live.slice(0);for(i=0;i<s.length;i++)g=s[i],g.origType.replace(w,"")===a.type?q.push(g.selector):s.splice(i--,1);e=f(a.target).closest(q,a.currentTarget);for(j=0,k=e.length;j<k;j++){m=e[j];for(i=0;i<s.length;i++){g=s[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,d=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,d=f(a.relatedTarget).closest(g.selector)[0],d&&f.contains(h,d)&&(d=h);(!d||d!==h)&&p.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=p.length;j<k;j++){e=p[j];if(c&&e.level>c)break;a.currentTarget=e.elem,a.data=e.handleObj.data,a.handleObj=e.handleObj,o=e.handleObj.origHandler.apply(e.elem,arguments);if(o===!1||a.isPropagationStopped()){c=e.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function J(a,c,d){var e=f.extend({},d[0]);e.type=a,e.originalEvent={},e.liveFired=b,f.event.handle.call(c,e),e.isDefaultPrevented()&&d[0].preventDefault()}function D(){return!0}function C(){return!1}function m(a,c,d){var e=c+"defer",g=c+"queue",h=c+"mark",i=f.data(a,e,b,!0);i&&(d==="queue"||!f.data(a,g,b,!0))&&(d==="mark"||!f.data(a,h,b,!0))&&setTimeout(function(){!f.data(a,g,b,!0)&&!f.data(a,h,b,!0)&&(f.removeData(a,e,!0),i.resolve())},0)}function l(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function k(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(j,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNaN(d)?i.test(d)?f.parseJSON(d):d:parseFloat(d)}catch(g){}f.data(a,c,d)}else d=b}return d}var c=a.document,d=a.navigator,e=a.location,f=function(){function K(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(K,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.nQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/\d/,n=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,o=/^[\],:{}\s]*$/,p=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,q=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,r=/(?:^|:|,)(?:\s*\[)+/g,s=/(webkit)[ \/]([\w.]+)/,t=/(opera)(?:.*version)?[ \/]([\w.]+)/,u=/(msie) ([\w.]+)/,v=/(mozilla)(?:.*? rv:([\w.]+))?/,w=/-([a-z]|[0-9])/ig,x=/^-ms-/,y=function(a,b){return(b+"").toUpperCase()},z=d.userAgent,A,B,C,D=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=Array.prototype.push,G=Array.prototype.slice,H=String.prototype.trim,I=Array.prototype.indexOf,J={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=n.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.nquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",nquery:"1.6.4",length:0,size:function(){return this.length},toArray:function(){return G.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?F.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),B.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(G.apply(this,arguments),"slice",G.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:F,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.nQuery===e&&(a.nQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;B.resolveWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!B){B=e._Deferred();if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",C,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",C),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&K()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNaN:function(a){return a==null||!m.test(a)||isNaN(a)},type:function(a){return a==null?String(a):J[D.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!E.call(a,"constructor")&&!E.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||E.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(o.test(b.replace(p,"@").replace(q,"]").replace(r,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(x,"ms-").replace(w,y)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:H?function(a){return a==null?"":H.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?F.call(c,a):e.merge(c,a)}return c},inArray:function(a,b){if(!b)return-1;if(I)return I.call(b,a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=G.call(arguments,2),g=function(){return a.apply(c,f.concat(G.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=s.exec(a)||t.exec(a)||u.exec(a)||a.indexOf("compatible")<0&&v.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),A=e.uaMatch(z),A.browser&&(e.browser[A.browser]=!0,e.browser.version=A.version),e.browser.webkit&&(e.browser.safari=!0),j.test("�")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?C=function(){c.removeEventListener("DOMContentLoaded",C,!1),e.ready()}:c.attachEvent&&(C=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",C),e.ready())});return e}(),g="done fail isResolved isRejected promise then always pipe".split(" "),h=[].slice;f.extend({_Deferred:function(){var a=[],b,c,d,e={done:function(){if(!d){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=f.type(i),j==="array"?e.done.apply(e,i):j==="function"&&a.push(i);k&&e.resolveWith(k[0],k[1])}return this},resolveWith:function(e,f){if(!d&&!b&&!c){f=f||[],c=1;try{while(a[0])a.shift().apply(e,f)}finally{b=[e,f],c=0}}return this},resolve:function(){e.resolveWith(this,arguments);return this},isResolved:function(){return!!c||!!b},cancel:function(){d=1,a=[];return this}};return e},Deferred:function(a){var b=f._Deferred(),c=f._Deferred(),d;f.extend(b,{then:function(a,c){b.done(a).fail(c);return this},always:function(){return b.done.apply(b,arguments).fail.apply(this,arguments)},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,pipe:function(a,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[c,"reject"]},function(a,c){var e=c[0],g=c[1],h;f.isFunction(e)?b[a](function(){h=e.apply(this,arguments),h&&f.isFunction(h.promise)?h.promise().then(d.resolve,d.reject):d[g+"With"](this===b?d:this,[h])}):b[a](d[g])})}).promise()},promise:function(a){if(a==null){if(d)return d;d=a={}}var c=g.length;while(c--)a[g[c]]=b[g[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){function i(a){return function(c){b[a]=arguments.length>1?h.call(arguments,0):c,--e||g.resolveWith(g,h.call(b,0))}}var b=arguments,c=0,d=b.length,e=d,g=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred();if(d>1){for(;c<d;c++)b[c]&&f.isFunction(b[c].promise)?b[c].promise().then(i(c),g.reject):--e;e||g.resolveWith(g,b)}else g!==a&&g.resolveWith(g,d?[a]:[]);return g.promise()}}),f.support=function(){var a=c.createElement("div"),b=c.documentElement,d,e,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;a.setAttribute("className","t"),a.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=a.getElementsByTagName("*"),e=a.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=a.getElementsByTagName("input")[0],k={leadingWhitespace:a.firstChild.nodeType===3,tbody:!a.getElementsByTagName("tbody").length,htmlSerialize:!!a.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55$/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:a.className!=="t",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,k.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,k.optDisabled=!h.disabled;try{delete a.test}catch(v){k.deleteExpando=!1}!a.addEventListener&&a.attachEvent&&a.fireEvent&&(a.attachEvent("onclick",function(){k.noCloneEvent=!1}),a.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),k.radioValue=i.value==="t",i.setAttribute("checked","checked"),a.appendChild(i),l=c.createDocumentFragment(),l.appendChild(a.firstChild),k.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,a.innerHTML="",a.style.width=a.style.paddingLeft="1px",m=c.getElementsByTagName("body")[0],o=c.createElement(m?"div":"body"),p={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},m&&f.extend(p,{position:"absolute",left:"-1000px",top:"-1000px"});for(t in p)o.style[t]=p[t];o.appendChild(a),n=m||b,n.insertBefore(o,n.firstChild),k.appendChecked=i.checked,k.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,k.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",k.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",q=a.getElementsByTagName("td"),u=q[0].offsetHeight===0,q[0].style.display="",q[1].style.display="none",k.reliableHiddenOffsets=u&&q[0].offsetHeight===0,a.innerHTML="",c.defaultView&&c.defaultView.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",a.appendChild(j),k.reliableMarginRight=(parseInt((c.defaultView.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0),o.innerHTML="",n.removeChild(o);if(a.attachEvent)for(t in{submit:1,change:1,focusin:1})s="on"+t,u=s in a,u||(a.setAttribute(s,"return;"),u=typeof a[s]=="function"),k[t+"Bubbles"]=u;o=l=g=h=m=j=a=i=null;return k}(),f.boxModel=f.support.boxModel;var i=/^(?:\{.*\}|\[.*\])$/,j=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"nQuery"+(f.fn.nquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!l(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i=f.expando,j=typeof c=="string",k=a.nodeType,l=k?f.cache:a,m=k?a[f.expando]:a[f.expando]&&f.expando;if((!m||e&&m&&l[m]&&!l[m][i])&&j&&d===b)return;m||(k?a[f.expando]=m=++f.uuid:m=f.expando),l[m]||(l[m]={},k||(l[m].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?l[m][i]=f.extend(l[m][i],c):l[m]=f.extend(l[m],c);g=l[m],e&&(g[i]||(g[i]={}),g=g[i]),d!==b&&(g[f.camelCase(c)]=d);if(c==="events"&&!g[c])return g[i]&&g[i].events;j?(h=g[c],h==null&&(h=g[f.camelCase(c)])):h=g;return h}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e=f.expando,g=a.nodeType,h=g?f.cache:a,i=g?a[f.expando]:f.expando;if(!h[i])return;if(b){d=c?h[i][e]:h[i];if(d){d[b]||(b=f.camelCase(b)),delete d[b];if(!l(d))return}}if(c){delete h[i][e];if(!l(h[i]))return}var j=h[i][e];f.support.deleteExpando||!h.setInterval?delete h[i]:h[i]=null,j?(h[i]={},g||(h[i].toJSON=f.noop),h[i][e]=j):g&&(f.support.deleteExpando?delete a[f.expando]:a.removeAttribute?a.removeAttribute(f.expando):a[f.expando]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d=null;if(typeof a=="undefined"){if(this.length){d=f.data(this[0]);if(this[0].nodeType===1){var e=this[0].attributes,g;for(var h=0,i=e.length;h<i;h++)g=e[h].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),k(this[0],g,d[g]))}}return d}if(typeof a=="object")return this.each(function(){f.data(this,a)});var j=a.split(".");j[1]=j[1]?"."+j[1]:"";if(c===b){d=this.triggerHandler("getData"+j[1]+"!",[j[0]]),d===b&&this.length&&(d=f.data(this[0],a),d=k(this[0],a,d));return d===b&&j[1]?this.data(j[0]):d}return this.each(function(){var b=f(this),d=[j[0],c];b.triggerHandler("setData"+j[1]+"!",d),f.data(this,a,c),b.triggerHandler("changeData"+j[1]+"!",d)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,c){a&&(c=(c||"fx")+"mark",f.data(a,c,(f.data(a,c,b,!0)||0)+1,!0))},_unmark:function(a,c,d){a!==!0&&(d=c,c=a,a=!1);if(c){d=d||"fx";var e=d+"mark",g=a?0:(f.data(c,e,b,!0)||1)-1;g?f.data(c,e,g,!0):(f.removeData(c,e,!0),m(c,d,"mark"))}},queue:function(a,c,d){if(a){c=(c||"fx")+"queue";var e=f.data(a,c,b,!0);d&&(!e||f.isArray(d)?e=f.data(a,c,f.makeArray(d),!0):e.push(d));return e||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e;d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),d.call(a,function(){f.dequeue(a,b)})),c.length||(f.removeData(a,b+"queue",!0),m(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){f.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f._Deferred(),!0))h++,l.done(m);m();return d.promise()}});var n=/[\n\t\r]/g,o=/\s+/,p=/\r/g,q=/^(?:button|input)$/i,r=/^(?:button|input|object|select|textarea)$/i,s=/^a(?:rea)?$/i,t=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,u,v;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(o);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(o);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(n," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(o);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(n," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e=this[0];if(!arguments.length){if(e){c=f.valHooks[e.nodeName.toLowerCase()]||f.valHooks[e.type];if(c&&"get"in c&&(d=c.get(e,"value"))!==b)return d;d=e.value;return typeof d=="string"?d.replace(p,""):d==null?"":d}return b}var g=f.isFunction(a);return this.each(function(d){var e=f(this),h;if(this.nodeType===1){g?h=a.call(this,d,e.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c=a.selectedIndex,d=[],e=a.options,g=a.type==="select-one";if(c<0)return null;for(var h=g?c:0,i=g?c+1:e.length;h<i;h++){var j=e[h];if(j.selected&&(f.support.optDisabled?!j.disabled:j.getAttribute("disabled")===null)&&(!j.parentNode.disabled||!f.nodeName(j.parentNode,"optgroup"))){b=f(j).val();if(g)return b;d.push(b)}}if(g&&!d.length&&e.length)return f(e[c]).val();return d},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attrFix:{tabindex:"tabIndex"},attr:function(a,c,d,e){var g=a.nodeType;if(!a||g===3||g===8||g===2)return b;if(e&&c in f.attrFn)return f(a)[c](d);if(!("getAttribute"in a))return f.prop(a,c,d);var h,i,j=g!==1||!f.isXMLDoc(a);j&&(c=f.attrFix[c]||c,i=f.attrHooks[c],i||(t.test(c)?i=v:u&&(i=u)));if(d!==b){if(d===null){f.removeAttr(a,c);return b}if(i&&"set"in i&&j&&(h=i.set(a,d,c))!==b)return h;a.setAttribute(c,""+d);return d}if(i&&"get"in i&&j&&(h=i.get(a,c))!==null)return h;h=a.getAttribute(c);return h===null?b:h},removeAttr:function(a,b){var c;a.nodeType===1&&(b=f.attrFix[b]||b,f.attr(a,b,""),a.removeAttribute(b),t.test(b)&&(c=f.propFix[b]||b)in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(q.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(u&&f.nodeName(a,"button"))return u.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(u&&f.nodeName(a,"button"))return u.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e=a.nodeType;if(!a||e===3||e===8||e===2)return b;var g,h,i=e!==1||!f.isXMLDoc(a);i&&(c=f.propFix[c]||c,h=f.propHooks[c]);return d!==b?h&&"set"in h&&(g=h.set(a,d,c))!==b?g:a[c]=d:h&&"get"in h&&(g=h.get(a,c))!==null?g:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):r.test(a.nodeName)||s.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabIndex=f.propHooks.tabIndex,v={get:function(a,c){var d;return f.prop(a,c)===!0||(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},f.support.getSetAttribute||(u=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&d.nodeValue!==""?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})})),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var w=/\.(.*)$/,x=/^(?:textarea|input|select)$/i,y=/\./g,z=/ /g,A=/[^\w\s.|`]/g,B=function(a){return a.replace(A,"\\$&")};f.event={add:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){if(d===!1)d=C;else if(!d)return;var g,h;d.handler&&(g=d,d=g.handler),d.guid||(d.guid=f.guid++);var i=f._data(a);if(!i)return;var j=i.events,k=i.handle;j||(i.events=j={}),k||(i.handle=k=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.handle.apply(k.elem,arguments):b}),k.elem=a,c=c.split(" ");var l,m=0,n;while(l=c[m++]){h=g?f.extend({},g):{handler:d,data:e},l.indexOf(".")>-1?(n=l.split("."),l=n.shift(),h.namespace=n.slice(0).sort().join(".")):(n=[],h.namespace=""),h.type=l,h.guid||(h.guid=d.guid);var o=j[l],p=f.event.special[l]||{};if(!o){o=j[l]=[];if(!p.setup||p.setup.call(a,e,n,k)===!1)a.addEventListener?a.addEventListener(l,k,!1):a.attachEvent&&a.attachEvent("on"+l,k)}p.add&&(p.add.call(a,h),h.handler.guid||(h.handler.guid=d.guid)),o.push(h),f.event.global[l]=!0}a=null}},global:{},remove:function(a,c,d,e){if(a.nodeType!==3&&a.nodeType!==8){d===!1&&(d=C);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=f.hasData(a)&&f._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(d=c.handler,c=c.type);if(!c||typeof c=="string"&&c.charAt(0)==="."){c=c||"";for(h in t)f.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+f.map(m.slice(0).sort(),B).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!d){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))f.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=f.event.special[h]||{};for(j=e||0;j<p.length;j++){q=p[j];if(d.guid===q.guid){if(l||n.test(q.namespace))e==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(e!=null)break}}if(p.length===0||e!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&f.removeEvent(a,h,s.handle),g=null,delete 
t[h]}if(f.isEmptyObject(t)){var u=s.handle;u&&(u.elem=null),delete s.events,delete s.handle,f.isEmptyObject(s)&&f.removeData(a,b,!0)}}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){var h=c.type||c,i=[],j;h.indexOf("!")>=0&&(h=h.slice(0,-1),j=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if(!!e&&!f.event.customEvent[h]||!!f.event.global[h]){c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.exclusive=j,c.namespace=i.join("."),c.namespace_re=new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)");if(g||!e)c.preventDefault(),c.stopPropagation();if(!e){f.each(f.cache,function(){var a=f.expando,b=this[a];b&&b.events&&b.events[h]&&f.event.trigger(c,d,b.handle.elem)});return}if(e.nodeType===3||e.nodeType===8)return;c.result=b,c.target=e,d=d!=null?f.makeArray(d):[],d.unshift(c);var k=e,l=h.indexOf(":")<0?"on"+h:"";do{var m=f._data(k,"handle");c.currentTarget=k,m&&m.apply(k,d),l&&f.acceptData(k)&&k[l]&&k[l].apply(k,d)===!1&&(c.result=!1,c.preventDefault()),k=k.parentNode||k.ownerDocument||k===c.target.ownerDocument&&a}while(k&&!c.isPropagationStopped());if(!c.isDefaultPrevented()){var n,o=f.event.special[h]||{};if((!o._default||o._default.call(e.ownerDocument,c)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)){try{l&&e[h]&&(n=e[l],n&&(e[l]=null),f.event.triggered=h,e[h]())}catch(p){}n&&(e[l]=n),f.event.triggered=b}}return c.result}},handle:function(c){c=f.event.fix(c||a.event);var d=((f._data(this,"events")||{})[c.type]||[]).slice(0),e=!c.exclusive&&!c.namespace,g=Array.prototype.slice.call(arguments,0);g[0]=c,c.currentTarget=this;for(var h=0,i=d.length;h<i;h++){var j=d[h];if(e||c.namespace_re.test(j.namespace)){c.handler=j.handler,c.data=j.data,c.handleObj=j;var k=j.handler.apply(this,g);k!==b&&(c.result=k,k===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[f.expando])return a;var d=a;a=f.Event(d);for(var e=this.props.length,g;e;)g=this.props[--e],a[g]=d[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=a.target.ownerDocument||c,i=h.documentElement,j=h.body;a.pageX=a.clientX+(i&&i.scrollLeft||j&&j.scrollLeft||0)-(i&&i.clientLeft||j&&j.clientLeft||0),a.pageY=a.clientY+(i&&i.scrollTop||j&&j.scrollTop||0)-(i&&i.clientTop||j&&j.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:f.proxy,special:{ready:{setup:f.bindReady,teardown:f.noop},live:{add:function(a){f.event.add(this,M(a.origType,a.selector),f.extend({},a,{handler:L,guid:a.handler.guid}))},remove:function(a){f.event.remove(this,M(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!this.preventDefault)return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?D:C):this.type=a,b&&f.extend(this,b),this.timeStamp=f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=D;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=D;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=D,this.stopPropagation()},isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C};var E=function(a){var b=a.relatedTarget,c=!1,d=a.type;a.type=a.data,b!==this&&(b&&(c=f.contains(this,b)),c||(f.event.handle.apply(this,arguments),a.type=d))},F=function(a){a.type=a.data,f.event.handle.apply(this,arguments)};f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={setup:function(c){f.event.add(this,b,c&&c.selector?F:E,a)},teardown:function(a){f.event.remove(this,b,a&&a.selector?F:E)}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(a,b){if(!f.nodeName(this,"form"))f.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="submit"||c==="image")&&f(b).closest("form").length&&J("submit",this,arguments)}),f.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=f.nodeName(b,"input")||f.nodeName(b,"button")?b.type:"";(c==="text"||c==="password")&&f(b).closest("form").length&&a.keyCode===13&&J("submit",this,arguments)});else return!1},teardown:function(a){f.event.remove(this,".specialSubmit")}});if(!f.support.changeBubbles){var G,H=function(a){var b=f.nodeName(a,"input")?a.type:"",c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?f.map(a.options,function(a){return a.selected}).join("-"):"":f.nodeName(a,"select")&&(c=a.selectedIndex);return c},I=function(c){var d=c.target,e,g;if(!!x.test(d.nodeName)&&!d.readOnly){e=f._data(d,"_change_data"),g=H(d),(c.type!=="focusout"||d.type!=="radio")&&f._data(d,"_change_data",g);if(e===b||g===e)return;if(e!=null||g)c.type="change",c.liveFired=b,f.event.trigger(c,arguments[1],d)}};f.event.special.change={filters:{focusout:I,beforedeactivate:I,click:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(c==="radio"||c==="checkbox"||f.nodeName(b,"select"))&&I.call(this,a)},keydown:function(a){var b=a.target,c=f.nodeName(b,"input")?b.type:"";(a.keyCode===13&&!f.nodeName(b,"textarea")||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&I.call(this,a)},beforeactivate:function(a){var b=a.target;f._data(b,"_change_data",H(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in G)f.event.add(this,c+".specialChange",G[c]);return x.test(this.nodeName)},teardown:function(a){f.event.remove(this,".specialChange");return x.test(this.nodeName)}},G=f.event.special.change.filters,G.focus=G.beforeactivate}f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){function e(a){var c=f.event.fix(a);c.type=b,c.originalEvent={},f.event.trigger(c,null,c.target),c.isDefaultPrevented()&&a.preventDefault()}var d=0;f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.each(["bind","one"],function(a,c){f.fn[c]=function(a,d,e){var g;if(typeof a=="object"){for(var h in a)this[c](h,d,a[h],e);return this}if(arguments.length===2||d===!1)e=d,d=b;c==="one"?(g=function(a){f(this).unbind(a,g);return e.apply(this,arguments)},g.guid=e.guid||f.guid++):g=e;if(a==="unload"&&c!=="one")this.one(a,d,e);else for(var i=0,j=this.length;i<j;i++)f.event.add(this[i],a,g,d);return this}}),f.fn.extend({unbind:function(a,b){if(typeof a=="object"&&!a.preventDefault)for(var c in a)this.unbind(c,a[c]);else for(var d=0,e=this.length;d<e;d++)f.event.remove(this[d],a,b);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f.data(this,"lastToggle"+a.guid)||0)%d;f.data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var K={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};f.each(["live","die"],function(a,c){f.fn[c]=function(a,d,e,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:f(this.context);if(typeof a=="object"&&!a.preventDefault){for(var o in a)n[c](o,d,a[o],m);return this}if(c==="die"&&!a&&g&&g.charAt(0)==="."){n.unbind(g);return this}if(d===!1||f.isFunction(d))e=d||C,d=b;a=(a||"").split(" ");while((h=a[i++])!=null){j=w.exec(h),k="",j&&(k=j[0],h=h.replace(w,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,K[h]?(a.push(K[h]+k),h=h+k):h=(K[h]||h)+k;if(c==="live")for(var p=0,q=n.length;p<q;p++)f.event.add(n[p],"live."+M(h,m),{data:d,selector:m,handler:e,origType:h,origHandler:e,preType:l});else n.unbind("live."+M(h,m),e)}return this}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=0,e=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,f,g){f=f||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return f;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(e.call(n)==="[object Array]")if(!u)f.push.apply(f,n);else if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&f.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&f.push(j[t]);else p(n,f);o&&(k(o,h,f,g),k.uniqueSort(f));return f};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(!f)g=o=!0;else if(f===!0)continue}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a);};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("parentNode",b,f,a,e,c)},"~":function(a,b,c){var e,f=d++,g=u;typeof b=="string"&&!j.test(b)&&(b=b.toLowerCase(),e=b,g=t),g("previousSibling",b,f,a,e,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=d++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(e.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var f=a.length;c<f;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){if(a===b){g=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(e||!l.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return k(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};f.find=k,f.expr=k.selectors,f.expr[":"]=f.expr.filters,f.unique=k.uniqueSort,f.text=k.getText,f.isXMLDoc=k.isXML,f.contains=k.contains}();var N=/Until$/,O=/^(?:parents|prevUntil|prevAll)/,P=/,/,Q=/^.[^:#\[\.,]*$/,R=Array.prototype.slice,S=f.expr.match.POS,T={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(V(this,a,!1),"not",a)},filter:function(a){return this.pushStack(V(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(d=0,e=a.length;d<e;d++)i=a[d],j[i]||(j[i]=S.test(i)?f(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.nquery?h.index(g)>-1:f(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=S.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(l?l.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.nquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(U(c[0])||U(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c),g=R.call(arguments);N.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!T[a]?f.unique(e):e,(this.length>1||P.test(d))&&O.test(a)&&(e=e.reverse());return this.pushStack(e,a,g.join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var W=/ nQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|object|embed|option|style)/i,bb=/checked\s*(?:[^=]|=\s*.checked.)/i,bc=/\/(java|ecma)script/i,bd=/^\s*<!(?:\[CDATA\[|\-\-)/,be={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};be.optgroup=be.option,be.tbody=be.tfoot=be.colgroup=be.caption=be.thead,be.th=be.td,f.support.htmlSerialize||(be._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){f(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!be[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bb.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bf(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bl)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i;b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof a[0]=="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!ba.test(a[0])&&(f.support.checkClone||!bb.test(a[0]))&&(g=!0,h=f.fragments[a[0]],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean
(a,i,e,d)),g&&(f.fragments[a[0]]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d=a.cloneNode(!0),e,g,h;if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bh(a,d),e=bi(a),g=bi(d);for(h=0;e[h];++h)g[h]&&bh(e[h],g[h])}if(b){bg(a,d);if(c){e=bi(a),g=bi(d);for(h=0;e[h];++h)bg(e[h],g[h])}}e=g=null;return d},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=be[l]||be._default,n=m[0],o=b.createElement("div");o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bk(k[i]);else bk(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||bc.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.expando,g=f.event.special,h=f.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&f.noData[j.nodeName.toLowerCase()])continue;c=j[f.expando];if(c){b=d[c]&&d[c][e];if(b&&b.events){for(var k in b.events)g[k]?f.event.remove(j,k):f.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[f.expando]:j.removeAttribute&&j.removeAttribute(f.expando),delete d[c]}}}});var bm=/alpha\([^)]*\)/i,bn=/opacity=([^)]*)/,bo=/([A-Z]|^ms)/g,bp=/^-?\d+(?:px)?$/i,bq=/^-?\d/,br=/^([\-+])=([\-+.\de]+)/,bs={position:"absolute",visibility:"hidden",display:"block"},bt=["Left","Right"],bu=["Top","Bottom"],bv,bw,bx;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bv(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=br.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bv)return bv(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return by(a,b,d);f.swap(a,bs,function(){e=by(a,b,d)});return e}},set:function(a,b){if(!bp.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bn.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNaN(b)?"":"alpha(opacity="+b*100+")",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bm,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bm.test(g)?g.replace(bm,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bv(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bw=function(a,c){var d,e,g;c=c.replace(bo,"-$1").toLowerCase();if(!(e=a.ownerDocument.defaultView))return b;if(g=e.getComputedStyle(a,null))d=g.getPropertyValue(c),d===""&&!f.contains(a.ownerDocument.documentElement,a)&&(d=f.style(a,c));return d}),c.documentElement.currentStyle&&(bx=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bp.test(d)&&bq.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bv=bw||bx,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bz=/%20/g,bA=/\[\]$/,bB=/\r?\n/g,bC=/#.*$/,bD=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bE=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bF=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bG=/^(?:GET|HEAD)$/,bH=/^\/\//,bI=/\?/,bJ=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bK=/^(?:select|textarea)/i,bL=/\s+/,bM=/([?&])_=[^&]*/,bN=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bO=f.fn.load,bP={},bQ={},bR,bS,bT=["*/"]+["*"];try{bR=e.href}catch(bU){bR=c.createElement("a"),bR.href="",bR=bR.href}bS=bN.exec(bR.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bO)return bO.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bJ,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bK.test(this.nodeName)||bE.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bB,"\r\n")}}):{name:b.name,value:c.replace(bB,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.bind(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?bX(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),bX(a,b);return a},ajaxSettings:{url:bR,isLocal:bF.test(bS[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bT},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bV(bP),ajaxTransport:bV(bQ),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?bZ(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=b$(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.resolveWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f._Deferred(),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bD.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.done,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bC,"").replace(bH,bS[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bL),d.crossDomain==null&&(r=bN.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bS[1]&&r[2]==bS[2]&&(r[3]||(r[1]==="http:"?80:443))==(bS[3]||(bS[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bW(bP,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bG.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bI.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bM,"$1_="+x);d.url=y+(y===d.url?(bI.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bT+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bW(bQ,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){s<2?w(-1,z):f.error(z)}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.nquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)bY(g,a[g],c,e);return d.join("&").replace(bz,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var b_=f.now(),ca=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+b_++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ca.test(b.url)||e&&ca.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ca,l),b.url===j&&(e&&(k=k.replace(ca,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cb=a.ActiveXObject?function(){for(var a in cd)cd[a](0,1)}:!1,cc=0,cd;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ce()||cf()}:ce,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cb&&delete cd[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cc,cb&&(cd||(cd={},f(a).unload(cb)),cd[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cg={},ch,ci,cj=/^(?:toggle|show|hide)$/,ck=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cl,cm=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cn;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cq("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cr(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cq("hide",3),a,b,c);for(var d=0,e=this.length;d<e;d++)if(this[d].style){var g=f.css(this[d],"display");g!=="none"&&!f._data(this[d],"olddisplay")&&f._data(this[d],"olddisplay",g)}for(d=0;d<e;d++)this[d].style&&(this[d].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cq("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return this[e.queue===!1?"each":"queue"](function(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(f.support.inlineBlockNeedsLayout?(j=cr(this.nodeName),j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)):this.style.display="inline-block"))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)k=new f.fx(this,b,i),h=a[i],cj.test(h)?k[h==="toggle"?d?"show":"hide":h]():(l=ck.exec(h),m=k.cur(),l?(n=parseFloat(l[2]),o=l[3]||(f.cssNumber[i]?"":"px"),o!=="px"&&(f.style(this,i,(n||1)+o),m=(n||1)/k.cur()*m,f.style(this,i,m+o)),l[1]&&(n=(l[1]==="-="?-1:1)*n+m),k.custom(m,n,o)):k.custom(m,h,""));return!0})},stop:function(a,b){a&&this.queue([]),this.each(function(){var a=f.timers,c=a.length;b||f._unmark(!0,this);while(c--)a[c].elem===this&&(b&&a[c](!0),a.splice(c,1))}),b||this.dequeue();return this}}),f.each({slideDown:cq("show",1),slideUp:cq("hide",1),slideToggle:cq("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default,d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue!==!1?f.dequeue(this):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return d.step(a)}var d=this,e=f.fx;this.startTime=cn||co(),this.start=a,this.end=b,this.unit=c||this.unit||(f.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&f.timers.push(g)&&!cl&&(cl=setInterval(e.tick,e.interval))},show:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=cn||co(),c=!0,d=this.elem,e=this.options,g,h;if(a||b>=e.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),e.animatedProperties[this.prop]=!0;for(g in e.animatedProperties)e.animatedProperties[g]!==!0&&(c=!1);if(c){e.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){d.style["overflow"+b]=e.overflow[a]}),e.hide&&f(d).hide();if(e.hide||e.show)for(var i in e.animatedProperties)f.style(d,i,e.orig[i]);e.complete.call(d)}return!1}e.duration==Infinity?this.now=b:(h=b-this.startTime,this.state=h/e.duration,this.pos=f.easing[e.animatedProperties[this.prop]](this.state,h,0,1,e.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){for(var a=f.timers,b=0;b<a.length;++b)a[b]()||a.splice(b--,1);a.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cl),cl=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cs=/^t(?:able|d|h)$/i,ct=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cu(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);f.offset.initialize();var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.offset.doesNotAddBorder&&(!f.offset.doesAddBorderForTableAndCells||!cs.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={initialize:function(){var a=c.body,b=c.createElement("div"),d,e,g,h,i=parseFloat(f.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";f.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),d=b.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,this.doesNotAddBorder=e.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,e.style.position="fixed",e.style.top="20px",this.supportsFixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",this.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),f.offset.initialize=f.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.offset.initialize(),f.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=ct.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!ct.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cu(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cu(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a&&a.style?parseFloat(f.css(a,d,"padding")):null},f.fn["outer"+c]=function(a){var b=this[0];return b&&b.style?parseFloat(f.css(b,d,a?"margin":"border")):null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNaN(j)?i:j}return this.css(d,typeof a=="string"?a:a+"px")}}),a.nQuery=a.$=f})(window);
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