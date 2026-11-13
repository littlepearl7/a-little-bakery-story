(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ur(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const xe={},ln=[],Ct=()=>{},Ti=()=>!1,js=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bs=e=>e.startsWith("onUpdate:"),Re=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},da=Object.prototype.hasOwnProperty,ge=(e,t)=>da.call(e,t),ae=Array.isArray,Ht=e=>ss(e)==="[object Map]",ws=e=>ss(e)==="[object Set]",$o=e=>ss(e)==="[object Date]",de=e=>typeof e=="function",Se=e=>typeof e=="string",ht=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Ii=e=>(_e(e)||de(e))&&de(e.then)&&de(e.catch),Ai=Object.prototype.toString,ss=e=>Ai.call(e),fa=e=>ss(e).slice(8,-1),Oi=e=>ss(e)==="[object Object]",Kr=e=>Se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},pa=/-\w/g,dt=qs(e=>e.replace(pa,t=>t.slice(1).toUpperCase())),ha=/\B([A-Z])/g,Yt=qs(e=>e.replace(ha,"-$1").toLowerCase()),Ni=qs(e=>e.charAt(0).toUpperCase()+e.slice(1)),lr=qs(e=>e?`on${Ni(e)}`:""),Mt=(e,t)=>!Object.is(e,t),ys=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Ri=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},Gr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},va=e=>{const t=Se(e)?Number(e):NaN;return isNaN(t)?e:t};let Co;const Us=()=>Co||(Co=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function et(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Se(s)?ba(s):et(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(Se(e)||_e(e))return e}const ma=/;(?![^(]*\))/g,ga=/:([^]+)/,ya=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ba(e){const t={};return e.replace(ya,n=>n.startsWith("/*")?"":n).split(ma).forEach(n=>{if(n){const s=n.split(ga);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function be(e){let t="";if(Se(e))t=e;else if(ae(e))for(let n=0;n<e.length;n++){const s=be(e[n]);s&&(t+=s+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const _a="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",ka=Ur(_a);function Di(e){return!!e||e===""}function Ma(e,t,n){if(e.length!==t.length)return!1;let s=!0;for(let o=0;s&&o<e.length;o++)s=bn(e[o],t[o],n);return s}function wo(e,t,n){if(e.size!==t.size)return!1;const s=Array.from(t),o=new Uint8Array(s.length);for(const i of e){let a=-1;for(let c=0;c<s.length;c++)if(!o[c]&&bn(i,s[c],n)){a=c;break}if(a<0)return!1;o[a]=1}return!0}function xa(e,t,n){let s=Ht(e),o=Ht(t);if(s||o||(s=ws(e),o=ws(t),s||o))return s&&o?wo(e,t,n):!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const c in e){const u=e.hasOwnProperty(c),f=t.hasOwnProperty(c);if(u&&!f||!u&&f||!bn(e[c],t[c],n))return!1}return String(e)===String(t)}function Eo(e,t,n,s){n||(n=[new Map,new Map]);const[o,i]=n;if(o.has(e)||i.has(t))return o.get(e)===t&&i.get(t)===e;o.set(e,t),i.set(t,e);const a=s(e,t,n);return o.delete(e),i.delete(t),a}function bn(e,t,n){if(e===t)return!0;let s=$o(e),o=$o(t);return s||o?s&&o?e.getTime()===t.getTime():!1:(s=ht(e),o=ht(t),s||o?e===t:(s=ae(e),o=ae(t),s||o?s&&o?Eo(e,t,n,Ma):!1:(s=_e(e),o=_e(t),s||o?!s||!o?!1:Eo(e,t,n,xa):String(e)===String(t))))}const Pi=e=>!!(e&&e.__v_isRef===!0),p=e=>Se(e)?e:e==null?"":ae(e)||_e(e)&&(e.toString===Ai||!de(e.toString))?Pi(e)?p(e.value):JSON.stringify(e,Li,2):String(e),Li=(e,t)=>Pi(t)?Li(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[ar(s,i)+" =>"]=o,n),{})}:ws(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>ar(n))}:ht(t)?ar(t):_e(t)&&!ae(t)&&!Oi(t)?String(t):t,ar=(e,t="")=>{var n;return ht(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pe;class $a{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Pe&&(Pe.active?(this.parent=Pe,this.index=(Pe.scopes||(Pe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=Pe;try{return Pe=this,t()}finally{Pe=n}}}on(){++this._on===1&&(this.prevScope=Pe,Pe=this)}off(){if(this._on>0&&--this._on===0){if(Pe===this)Pe=this.prevScope;else{let t=Pe;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,s=o.length;n<s;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ca(){return Pe}let Ce;const cr=new WeakSet;class Fi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Pe&&(Pe.active?Pe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,cr.has(this)&&(cr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ji(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,So(this),Bi(this);const t=Ce,n=ft;Ce=this,ft=!0;try{return this.fn()}finally{qi(this),Ce=t,ft=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Yr(t);this.deps=this.depsTail=void 0,So(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?cr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){wr(this)&&this.run()}get dirty(){return wr(this)}}let Vi=0,Vn,jn;function ji(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Vn,Vn=e}function Wr(){Vi++}function zr(){if(--Vi>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vn;){let t=Vn;for(Vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Bi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function qi(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Yr(s),wa(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function wr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ui(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ui(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Hn)||(e.globalVersion=Hn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!wr(e))))return;e.flags|=2;const t=e.dep,n=Ce,s=ft;Ce=e,ft=!0;try{Bi(e);const o=e.fn(e._value);(t.version===0||Mt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{Ce=n,ft=s,qi(e),e.flags&=-3}}function Yr(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Yr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function wa(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let ft=!0;const Hi=[];function wt(){Hi.push(ft),ft=!1}function Et(){const e=Hi.pop();ft=e===void 0?!0:e}function So(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Ce;Ce=void 0;try{t()}finally{Ce=n}}}let Hn=0;class Ea{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ce||!ft||Ce===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ce)n=this.activeLink=new Ea(Ce,this),Ce.deps?(n.prevDep=Ce.depsTail,Ce.depsTail.nextDep=n,Ce.depsTail=n):Ce.deps=Ce.depsTail=n,Ki(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Ce.depsTail,n.nextDep=void 0,Ce.depsTail.nextDep=n,Ce.depsTail=n,Ce.deps===n&&(Ce.deps=s)}return n}trigger(t){this.version++,Hn++,this.notify(t)}notify(t){Wr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{zr()}}}function Ki(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Ki(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Er=new WeakMap,un=Symbol(""),Sr=Symbol(""),Kn=Symbol("");function je(e,t,n){if(ft&&Ce){let s=Er.get(e);s||Er.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Jr),o.map=s,o.key=n),o.track()}}function Rt(e,t,n,s,o,i){const a=Er.get(e);if(!a){Hn++;return}const c=u=>{u&&u.trigger()};if(Wr(),t==="clear")a.forEach(c);else{const u=ae(e),f=u&&Kr(n);if(u&&n==="length"){const d=Number(s);a.forEach((h,k)=>{(k==="length"||k===Kn||!ht(k)&&k>=d)&&c(h)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),f&&c(a.get(Kn)),t){case"add":u?f&&c(a.get("length")):(c(a.get(un)),Ht(e)&&c(a.get(Sr)));break;case"delete":u||(c(a.get(un)),Ht(e)&&c(a.get(Sr)));break;case"set":Ht(e)&&c(a.get(un));break}}zr()}function pn(e){const t=me(e);return t===e||(je(t,"iterate",Kn),st(e))?t:St(e)?Kt(e)?t.map(n=>Wt(rt(n))):t.map(Wt):t.map(rt)}function Hs(e){return je(e=me(e),"iterate",Kn),e}function bt(e,t){return St(e)?Wt(Kt(e)?rt(t):t):rt(t)}const Sa={__proto__:null,[Symbol.iterator](){return ur(this,Symbol.iterator,e=>bt(this,e))},concat(...e){return pn(this).concat(...e.map(t=>ae(t)?pn(t):t))},entries(){return ur(this,"entries",e=>(e[1]=bt(this,e[1]),e))},every(e,t){return It(this,"every",e,t,void 0,arguments)},filter(e,t){return It(this,"filter",e,t,n=>n.map(s=>bt(this,s)),arguments)},find(e,t){return It(this,"find",e,t,n=>bt(this,n),arguments)},findIndex(e,t){return It(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return It(this,"findLast",e,t,n=>bt(this,n),arguments)},findLastIndex(e,t){return It(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return It(this,"forEach",e,t,void 0,arguments)},includes(...e){return dr(this,"includes",e)},indexOf(...e){return dr(this,"indexOf",e)},join(e){return pn(this).join(e)},lastIndexOf(...e){return dr(this,"lastIndexOf",e)},map(e,t){return It(this,"map",e,t,void 0,arguments)},pop(){return An(this,"pop")},push(...e){return An(this,"push",e)},reduce(e,...t){return Io(this,"reduce",e,t)},reduceRight(e,...t){return Io(this,"reduceRight",e,t)},shift(){return An(this,"shift")},some(e,t){return It(this,"some",e,t,void 0,arguments)},splice(...e){return An(this,"splice",e)},toReversed(){return pn(this).toReversed()},toSorted(e){return pn(this).toSorted(e)},toSpliced(...e){return pn(this).toSpliced(...e)},unshift(...e){return An(this,"unshift",e)},values(){return ur(this,"values",e=>bt(this,e))}};function ur(e,t,n){const s=Hs(e),o=s[t],i=o.call(s);if(s!==e&&!st(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(i));return a.next=()=>To(i.next(),n),o!==Gi[t]&&Object.defineProperties(a,{return:{get(){const c=i.return;return typeof c=="function"?c.bind(i):c}},throw:{get(){const c=i.throw;return typeof c=="function"?c.bind(i):c}}}),a}i._next=i.next,i.next=()=>To(i._next(),n)}return i}function To(e,t){return e.done||(e.value=t(e.value)),e}const Gi=Array.prototype;function It(e,t,n,s,o,i){const a=Hs(e),c=a!==e&&!st(e),u=a[t];if(u!==Gi[t]){const h=u.apply(e,i);return c?rt(h):h}let f=n;a!==e&&(c?f=function(h,k){return n.call(this,bt(e,h),k,e)}:n.length>2&&(f=function(h,k){return n.call(this,h,k,e)}));const d=u.call(a,f,s);return c&&o?o(d):d}function Io(e,t,n,s){const o=Hs(e),i=o!==e&&!st(e);let a=n,c=!1;o!==e&&(i?(c=s.length===0,a=function(f,d,h){return c&&(c=!1,f=bt(e,f)),n.call(this,f,bt(e,d),h,e)}):n.length>3&&(a=function(f,d,h){return n.call(this,f,d,h,e)}));const u=o[t](a,...s);return c?bt(e,u):u}function dr(e,t,n){const s=me(e);je(s,"iterate",Kn);const o=s[t](...n);return(o===-1||o===!1)&&Xr(n[0])?(n[0]=me(n[0]),s[t](...n)):o}function An(e,t,n=[]){wt(),Wr();const s=me(e)[t].apply(e,n);return zr(),Et(),s}const Ta=Ur("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ht));function Ia(e){ht(e)||(e=String(e));const t=me(this);return je(t,"has",e),t.hasOwnProperty(e)}class zi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?ja:Zi:i?Qi:Ji).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=ae(t);if(!o){let u;if(a&&(u=Sa[n]))return u;if(n==="hasOwnProperty")return Ia}const c=Reflect.get(t,n,qe(t)?t:s);if((ht(n)?Wi.has(n):Ta(n))||(o||je(t,"get",n),i))return c;if(qe(c)){const u=a&&Kr(n)?c:c.value;return o&&_e(u)?Ir(u):u}return _e(c)?o?Ir(c):Jt(c):c}}class Yi extends zi{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];const a=ae(t)&&Kr(n);if(!this._isShallow){const f=St(i);if(!st(s)&&!St(s)&&(i=me(i),s=me(s)),!a&&qe(i)&&!qe(s))return f||(i.value=s),!0}const c=a?Number(n)<t.length:ge(t,n),u=Reflect.set(t,n,s,qe(t)?t:o);return t===me(o)&&u&&(c?Mt(s,i)&&Rt(t,"set",n,s):Rt(t,"add",n,s)),u}deleteProperty(t,n){const s=ge(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Rt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!ht(n)||!Wi.has(n))&&je(t,"has",n),s}ownKeys(t){return je(t,"iterate",ae(t)?"length":un),Reflect.ownKeys(t)}}class Aa extends zi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Oa=new Yi,Na=new Aa,Ra=new Yi(!0);const Tr=e=>e,is=e=>Reflect.getPrototypeOf(e);function Da(e,t,n){return function(...s){const o=this.__v_raw,i=me(o),a=Ht(i),c=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,f=o[e](...s),d=n?Tr:t?Wt:rt;return!t&&je(i,"iterate",u?Sr:un),Re(Object.create(f),{next(){const{value:h,done:k}=f.next();return k?{value:h,done:k}:{value:c?[d(h[0]),d(h[1])]:d(h),done:k}}})}}function ls(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Pa(e,t){const n={get(o){const i=this.__v_raw,a=me(i),c=me(o);e||(Mt(o,c)&&je(a,"get",o),je(a,"get",c));const{has:u}=is(a),f=t?Tr:e?Wt:rt;if(u.call(a,o))return f(i.get(o));if(u.call(a,c))return f(i.get(c));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!e&&je(me(o),"iterate",un),o.size},has(o){const i=this.__v_raw,a=me(i),c=me(o);return e||(Mt(o,c)&&je(a,"has",o),je(a,"has",c)),o===c?i.has(o):i.has(o)||i.has(c)},forEach(o,i){const a=this,c=a.__v_raw,u=me(c),f=t?Tr:e?Wt:rt;return!e&&je(u,"iterate",un),c.forEach((d,h)=>o.call(i,f(d),f(h),a))}};return Re(n,e?{add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear")}:{add(o){const i=me(this),a=is(i),c=me(o),u=!t&&!st(o)&&!St(o)?c:o;return a.has.call(i,u)||Mt(o,u)&&a.has.call(i,o)||Mt(c,u)&&a.has.call(i,c)||(i.add(u),Rt(i,"add",u,u)),this},set(o,i){!t&&!st(i)&&!St(i)&&(i=me(i));const a=me(this),{has:c,get:u}=is(a);let f=c.call(a,o);f||(o=me(o),f=c.call(a,o));const d=u.call(a,o);return a.set(o,i),f?Mt(i,d)&&Rt(a,"set",o,i):Rt(a,"add",o,i),this},delete(o){const i=me(this),{has:a,get:c}=is(i);let u=a.call(i,o);u||(o=me(o),u=a.call(i,o)),c&&c.call(i,o);const f=i.delete(o);return u&&Rt(i,"delete",o,void 0),f},clear(){const o=me(this),i=o.size!==0,a=o.clear();return i&&Rt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Da(o,e,t)}),n}function Qr(e,t){const n=Pa(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?s:Reflect.get(ge(n,o)&&o in s?n:s,o,i)}const La={get:Qr(!1,!1)},Fa={get:Qr(!1,!0)},Va={get:Qr(!0,!1)};const Ji=new WeakMap,Qi=new WeakMap,Zi=new WeakMap,ja=new WeakMap;function Ba(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jt(e){return St(e)?e:Zr(e,!1,Oa,La,Ji)}function qa(e){return Zr(e,!1,Ra,Fa,Qi)}function Ir(e){return Zr(e,!0,Na,Va,Zi)}function Zr(e,t,n,s,o){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=o.get(e);if(i)return i;const a=Ba(fa(e));if(a===0)return e;const c=new Proxy(e,a===2?s:n);return o.set(e,c),c}function Kt(e){return St(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function st(e){return!!(e&&e.__v_isShallow)}function Xr(e){return e?!!e.__v_raw:!1}function me(e){const t=e&&e.__v_raw;return t?me(t):e}function Ua(e){return!ge(e,"__v_skip")&&Object.isExtensible(e)&&Ri(e,"__v_skip",!0),e}const rt=e=>_e(e)?Jt(e):e,Wt=e=>_e(e)?Ir(e):e;function qe(e){return e?e.__v_isRef===!0:!1}function ne(e){return Ha(e,!1)}function Ha(e,t){return qe(e)?e:new Ka(e,t)}class Ka{constructor(t,n){this.dep=new Jr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:me(t),this._value=n?t:rt(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||st(t)||St(t);t=s?t:me(t),Mt(t,n)&&(this._rawValue=t,this._value=s?t:rt(t),this.dep.trigger())}}function b(e){return qe(e)?e.value:e}const Ga={get:(e,t,n)=>t==="__v_raw"?e:b(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return qe(o)&&!qe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function Xi(e){return Kt(e)?e:new Proxy(e,Ga)}class Wa{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Jr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ce!==this)return ji(this,!0),!0}get value(){const t=this.dep.track();return Ui(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function za(e,t,n=!1){let s,o;return de(e)?s=e:(s=e.get,o=e.set),new Wa(s,o,n)}const as={},Es=new WeakMap;let nn;function Ya(e,t=!1,n=nn){if(n){let s=Es.get(n);s||Es.set(n,s=[]),s.push(e)}}function Ja(e,t,n=xe){const{immediate:s,deep:o,once:i,scheduler:a,augmentJob:c,call:u}=n,f=N=>o?N:st(N)||o===!1||o===0?Dt(N,1):Dt(N);let d,h,k,g,T=!1,_=!1;if(qe(e)?(h=()=>e.value,T=st(e)):Kt(e)?(h=()=>f(e),T=!0):ae(e)?(_=!0,T=e.some(N=>Kt(N)||st(N)),h=()=>e.map(N=>{if(qe(N))return N.value;if(Kt(N))return f(N);if(de(N))return u?u(N,2):N()})):de(e)?t?h=u?()=>u(e,2):e:h=()=>{if(k){wt();try{k()}finally{Et()}}const N=nn;nn=d;try{return u?u(e,3,[g]):e(g)}finally{nn=N}}:h=Ct,t&&o){const N=h,w=o===!0?1/0:o;h=()=>Dt(N(),w)}const I=Ca(),P=()=>{d.stop(),I&&I.active&&Hr(I.effects,d)};if(i&&t){const N=t;t=(...w)=>{try{return N(...w)}finally{P()}}}let j=_?new Array(e.length).fill(as):as;const G=N=>{if(!(!(d.flags&1)||!d.dirty&&!N))if(t){const w=d.run();if(N||o||T||(_?w.some((Z,ee)=>Mt(Z,j[ee])):Mt(w,j))){const Z=nn;wt();try{k&&k(),nn=d;const ee=[w,j===as?void 0:_&&j[0]===as?[]:j,g];j=w,u?u(t,3,ee):t(...ee)}finally{nn=Z,Et()}}}else d.run()};return c&&c(G),d=new Fi(h),d.scheduler=a?()=>a(G,!1):G,g=N=>Ya(N,!1,d),k=d.onStop=()=>{const N=Es.get(d);if(N){if(u)u(N,4);else for(const w of N)w();Es.delete(d)}},t?s?G(!0):j=d.run():a?a(G.bind(null,!0),!0):d.run(),P.pause=d.pause.bind(d),P.resume=d.resume.bind(d),P.stop=P,P}function Dt(e,t=1/0,n){if(t<=0||!_e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,qe(e))Dt(e.value,t,n);else if(ae(e))for(let s=0;s<e.length;s++)Dt(e[s],t,n);else if(ws(e)||Ht(e))e.forEach(s=>{Dt(s,t,n)});else if(Oi(e)){for(const s in e)Dt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Dt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(e,t,n,s){try{return s?e(...s):e()}catch(o){Ks(o,t,n)}}function ot(e,t,n,s){if(de(e)){const o=rs(e,t,n,s);return o&&Ii(o)&&o.catch(i=>{Ks(i,t,n,void 0,!0)}),o}if(ae(e)){const o=[];for(let i=0;i<e.length;i++)o.push(ot(e[i],t,n,s));return o}}function Ks(e,t,n,s=!0,o=!1){const i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:c}=t&&t.appContext.config||xe;if(t){let u=t.parent;const f=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const h=u.ec;if(h&&!u.isUnmounted&&(!o||u.scope.active)){for(let k=0;k<h.length;k++)if(h[k](e,f,d)===!1)return}u=u.parent}if(a){wt(),rs(a,null,10,[e,f,d]),Et();return}}Qa(e,n,i,s,c)}function Qa(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Ke=[];let ct=-1;const _t=[];let Bt=null,hn=0;const el=Promise.resolve();let Ss=null;function Za(e){const t=Ss||el;return e?t.then(this?e.bind(this):e):t}function Xa(e){let t=ct+1,n=Ke.length;for(;t<n;){const s=t+n>>>1,o=Ke[s],i=Gn(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function Gs(e){if(!(e.flags&1)){const t=Gn(e),n=Ke[Ke.length-1];!n||!(e.flags&2)&&t>=Gn(n)?Ke.push(e):Ke.splice(Xa(t),0,e),e.flags|=1,tl()}}function tl(){Ss||(Ss=el.then(rl))}function ec(e){if(!ae(e))Bt&&e.id===-1?Bt.splice(hn+1,0,e):e.flags&1||(_t.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)_t.push(e[t]);tl()}function nl(e,t,n,s=ct+1){for(;s<Ke.length;s++){const o=Ke[s];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;Ke.splice(s,1),s=e?s-1:ct,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function sl(e,t,n=0){if(_t.length){let s=_t,o=0;if(t){s=[];for(let a=0;a<_t.length;a++){const c=_t[a];(c.i!==void 0?!c.i||c.i.uid<n:t.has(c))?_t[o++]=c:s.push(c)}}const i=[...new Set(s)].sort((a,c)=>Gn(a)-Gn(c));if(_t.length=o,Bt){for(let a=0;a<i.length;a++)Bt.push(i[a]);return}for(Bt=i,hn=0;hn<Bt.length;hn++){const a=Bt[hn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Bt=null,hn=0}}let fr=!1;function tc(e,t){if(fr){e();return}const n=t===void 0?void 0:new Set(_t);e(),fr=!0;try{nl(void 0,t),sl(void 0,n,t)}finally{fr=!1}}const Gn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function rl(e){try{for(ct=0;ct<Ke.length;ct++){const t=Ke[ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ct<Ke.length;ct++){const t=Ke[ct];t&&(t.flags&=-2)}ct=-1,Ke.length=0,sl(),Ss=null,(Ke.length||_t.length)&&rl()}}let Be=null,ol=null;function Ts(e){const t=Be;return Be=e,ol=e&&e.type.__scopeId||null,t}function eo(e,t=Be,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Ns(-1);const i=Ts(t),a=Pt.length;let c;try{c=e(...o)}finally{for(let u=Pt.length;u>a;u--)ro();Ts(i),s._d&&Ns(1)}return c};return s._n=!0,s._c=!0,s._d=!0,s}function bs(e,t){if(Be===null)return e;const n=Zs(Be),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,c,u=xe]=t[o];i&&(de(i)&&(i={mounted:i,updated:i}),i.deep&&Dt(a),s.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Zt(e,t,n,s){let o=e;if(s==="beforeMount")e._mount=e;else if(s==="beforeUpdate"){const c=t&&t._mount;c&&(c._latest=e,e._mount=c)}else if(s==="mounted"){const c=e._latest;e._mount=e._latest=void 0,c&&(o=c,c._mount=void 0)}const i=o.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){let u=i[c];a?u.oldValue=a[c].value:s==="mounted"&&u.oldValue!==void 0&&(u=Re({},u,{oldValue:void 0}));let f=u.dir[s];f&&(wt(),ot(f,n,8,[e.el,u,o,t]),Et())}}function nc(e,t){if(Ge){let n=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===n&&(n=Ge.provides=Object.create(s)),n[e]=t}}function _s(e,t,n=!1){const s=Dl();if(s||mn){let o=mn?mn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&de(t)?t.call(s&&s.proxy):t}}const sc=Symbol.for("v-scx"),rc=()=>_s(sc);function pt(e,t,n){return il(e,t,n)}function il(e,t,n=xe){const{immediate:s,deep:o,flush:i,once:a}=n,c=Re({},n),u=t&&s||!t&&i!=="post";let f;if(Qn){if(i==="sync"){const g=rc();f=g.__watcherHandles||(g.__watcherHandles=[])}else if(!u){const g=()=>{};return g.stop=Ct,g.resume=Ct,g.pause=Ct,g}}const d=Ge;c.call=(g,T,_)=>ot(g,d,T,_);let h=!1;i==="post"?c.scheduler=g=>{g.i=d,He(g,d&&d.suspense)}:i!=="sync"&&(h=!0,c.scheduler=(g,T)=>{T?g():Gs(g)}),c.augmentJob=g=>{t&&(g.flags|=4),h&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const k=Ja(e,t,c);return Qn&&(f?f.push(k):u&&k()),k}function oc(e,t,n){const s=this.proxy,o=Se(e)?e.includes(".")?ll(s,e):()=>s[e]:e.bind(s,s);let i;de(t)?i=t:(i=t.handler,n=t);const a=os(this),c=il(o,i.bind(s),n);return a(),c}function ll(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const ic=Symbol("_vte"),Ws=e=>e.__isTeleport,nt=Symbol("_leaveCb"),On=Symbol("_enterCb");function lc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return En(()=>{e.isMounted=!0}),Ys(()=>{e.isUnmounting=!0}),e}const tt=[Function,Array],al={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},ac={name:"BaseTransition",props:al,setup(e,{slots:t}){const n=Dl(),s=lc();return()=>{const o=t.default&&dl(t.default(),!0),i=o&&o.length?cl(o):n.subTree?D():void 0;if(!i)return;const a=me(e),{mode:c}=a;if(s.isLeaving)return pr(i);const u=Is(i);if(!u)return pr(i);const f=Ar(u,a,s,n);u.type!==Fe&&dn(u,f);let d=n.subTree&&Is(n.subTree);if(d&&d.type!==Fe&&!rn(d,u)&&Wn(n.subTree)){let h=Ar(d,a,s,n);if(dn(d,h),c==="out-in"&&u.type!==Fe)return s.isLeaving=!0,h.afterLeave=()=>{if(s.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const k=()=>{n.job.flags&8||n.update()};k.i=n,Gs(k)}else n.update();delete h.afterLeave,d=void 0},pr(i);c==="in-out"&&u.type!==Fe?h.delayLeave=(k,g,T)=>{const _=ul(s,d);_[String(d.key)]=d,k[nt]=()=>{g(),k[nt]=void 0,delete f.delayedLeave,d=void 0},f.delayedLeave=()=>{T(),delete f.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function cl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Fe){t=n;break}}return t}const cc=ac;function ul(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Ar(e,t,n,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:h,onLeave:k,onAfterLeave:g,onLeaveCancelled:T,onBeforeAppear:_,onAppear:I,onAfterAppear:P,onAppearCancelled:j}=t,G=String(e.key),N=ul(n,e),w=(K,te)=>{K&&ot(K,s,9,te)},Z=(K,te)=>{const se=te[1];w(K,te),ae(K)?K.every(z=>z.length<=1)&&se():K.length<=1&&se()},ee={mode:i,persisted:a,beforeEnter(K){let te=c;if(!n.isMounted)if(o)te=_||c;else return;K[nt]&&K[nt](!0);const se=N[G];if(se&&rn(e,se)){let z=se.el[nt];if(!z){const B=Wn(se);z=B&&B.el[nt]}z&&z()}w(te,[K])},enter(K){if(N[G]===e)return;let te=u,se=f,z=d;if(!n.isMounted)if(o)te=I||u,se=P||f,z=j||d;else return;let B=!1;K[On]=R=>{B||(B=!0,R?w(z,[K]):w(se,[K]),ee.delayedLeave&&ee.delayedLeave(),K[On]=void 0)};const q=K[On].bind(null,!1);te?Z(te,[K,q]):q()},leave(K,te){const se=String(e.key);if(K[On]&&K[On](!0),n.isUnmounting)return te();w(h,[K]);let z=!1;K[nt]=q=>{z||(z=!0,te(),q?w(T,[K]):w(g,[K]),K[nt]=void 0,N[se]===e&&delete N[se])};const B=K[nt].bind(null,!1);N[se]=e,k?Z(k,[K,B]):B()},clone(K){const te=Ar(K,t,n,s);return te.afterLeave=()=>{ee.afterLeave&&ee.afterLeave()},te.delayLeave=(se,z,B)=>{ee.delayLeave?ee.delayLeave(se,z,B):B()},te.delayedLeave=()=>{ee.delayedLeave&&ee.delayedLeave()},te}};return ee}function pr(e){if(zs(e))return e=zt(e),e.children=null,e}function Is(e){if(!zs(e))return Ws(e.type)&&e.children?cl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&de(n.default))return n.default()}}function dn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;dn(Ws(n.type)&&Is(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const s=n.isHydrating?n.pendingBranch:n.activeBranch;s&&dn(s,t.clone(s))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===W&&ae(e.children)){const n=bl(e.children,!1);n&&dn(n,t)}}function dl(e,t=!1,n){let s=[],o=0;for(let i=0;i<e.length;i++){let a=e[i];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===W?(a.patchFlag&128&&o++,s=s.concat(dl(a.children,t,c))):(t||a.type!==Fe)&&s.push(c!=null?zt(a,{key:c}):a)}if(o>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Wn(e){if(e.component)return Wn(e.component.subTree);if(e.type===W){const t=ae(e.children)&&bl(e.children,!1);return t?Wn(t):void 0}if(e.type!==Fe)return e}function fl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ao(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const As=new WeakMap;function Bn(e,t,n,s,o=!1){if(ae(e)){e.forEach((_,I)=>Bn(_,t&&(ae(t)?t[I]:t),n,s,o));return}if(vn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Bn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Zs(s.component):s.el,a=o?null:i,{i:c,r:u}=e,f=t&&t.r,d=c.refs===xe?c.refs={}:c.refs,h=c.setupState,k=me(h),g=h===xe?Ti:_=>Ao(d,_)?!1:ge(k,_),T=(_,I)=>!(I&&Ao(d,I));if(f!=null&&f!==u){if(Oo(t),Se(f))d[f]=null,g(f)&&(h[f]=null);else if(qe(f)){const _=t;T(f,_.k)&&(f.value=null),_.k&&(d[_.k]=null)}}if(de(u))rs(u,c,12,[a,d]);else{const _=Se(u),I=qe(u);if(_||I){const P=()=>{if(e.f){const j=_?g(u)?h[u]:d[u]:T()||!e.k?u.value:d[e.k];if(o)ae(j)&&Hr(j,i);else if(ae(j))j.includes(i)||j.push(i);else if(_)d[u]=[i],g(u)&&(h[u]=d[u]);else{const G=[i];T(u,e.k)&&(u.value=G),e.k&&(d[e.k]=G)}}else _?(d[u]=a,g(u)&&(h[u]=a)):I&&(T(u,e.k)&&(u.value=a),e.k&&(d[e.k]=a))};if(a){const j=()=>{P(),As.delete(e)};j.id=-1,As.set(e,j),He(j,n)}else Oo(e),P()}}}function Oo(e){const t=As.get(e);t&&(t.flags|=8,As.delete(e))}Us().requestIdleCallback;Us().cancelIdleCallback;const vn=e=>!!e.type.__asyncLoader,zs=e=>e.type.__isKeepAlive;function uc(e,t){pl(e,"a",t)}function dc(e,t){pl(e,"da",t)}function pl(e,t,n=Ge){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(zn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)zs(o.parent.vnode)&&fc(s,t,n,o),o=o.parent}}function fc(e,t,n,s){const o=zn(t,e,s,!0),i=zn("um",()=>Hr(s[t],o),n);i.flags=16}function zn(e,t,n=Ge,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{wt();const c=os(n),u=ot(t,n,e,a);return c(),Et(),u});return s?o.unshift(i):o.push(i),i}}const Ft=e=>(t,n=Ge)=>{(!Qn||e==="sp")&&zn(e,(...s)=>t(...s),n)},pc=Ft("bm"),En=Ft("m"),hc=Ft("bu"),vc=Ft("u"),Ys=Ft("bum"),to=Ft("um"),mc=Ft("sp"),gc=Ft("rtg"),yc=Ft("rtc");function bc(e,t=Ge){zn("ec",e,t)}const _c=Symbol.for("v-ndc");function oe(e,t,n,s){let o;const i=n,a=ae(e);if(a||Se(e)){const c=a&&Kt(e);let u=!1,f=!1;c&&(u=!st(e),f=St(e),e=Hs(e)),o=new Array(e.length);for(let d=0,h=e.length;d<h;d++)o[d]=t(u?f?Wt(rt(e[d])):rt(e[d]):e[d],d,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,i)}else if(_e(e))if(e[Symbol.iterator])o=Array.from(e,(c,u)=>t(c,u,void 0,i));else{const c=Object.keys(e);o=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];o[u]=t(e[d],d,u,i)}}else o=[];return o}function No(e,t,n,s,o,i){if(n==null&&(n={}),Be.ce||Be.parent&&vn(Be.parent)&&Be.parent.ce){const f=n,d=Object.keys(f).length>0;return t!=="default"&&(f.name=t),v(),Ve(W,null,[Ae("slot",f,s)],d?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const c=Pt.length;v();let u;try{const f=a&&hl(a(n)),d=n.key||i||f&&f.key;u=Ve(W,{key:(d&&!ht(d)?d:`_${t}`)+(!f&&s?"_fb":"")},f||(s?s():[]),f&&e._===1?64:-2)}catch(f){for(let d=Pt.length;d>c;d--)ro();throw f}finally{a&&a._c&&(a._d=!0)}return u}function hl(e){return e.some(t=>_n(t)?!(t.type===Fe||t.type===W&&!hl(t.children)):!0)?e:null}const Or=e=>e?Pl(e)?Zs(e):Or(e.parent):null,qn=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ml(e),$forceUpdate:e=>e.f||(e.f=()=>{Gs(e.update)}),$nextTick:e=>e.n||(e.n=Za.bind(e.proxy)),$watch:e=>oc.bind(e)}),hr=(e,t)=>e!==xe&&!e.__isScriptSetup&&ge(e,t),kc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:a,type:c,appContext:u}=e;if(t[0]!=="$"){const k=a[t];if(k!==void 0)switch(k){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(hr(s,t))return a[t]=1,s[t];if(o!==xe&&ge(o,t))return a[t]=2,o[t];if(ge(i,t))return a[t]=3,i[t];if(n!==xe&&ge(n,t))return a[t]=4,n[t];Nr&&(a[t]=0)}}const f=qn[t];let d,h;if(f)return t==="$attrs"&&je(e.attrs,"get",""),f(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==xe&&ge(n,t))return a[t]=4,n[t];if(h=u.config.globalProperties,ge(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return hr(o,t)?(o[t]=n,!0):s!==xe&&ge(s,t)?(s[t]=n,!0):ge(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:i,type:a}},c){let u;return!!(n[c]||e!==xe&&c[0]!=="$"&&ge(e,c)||hr(t,c)||ge(i,c)||ge(s,c)||ge(qn,c)||ge(o.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ge(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ro(e){return ae(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Mc(e){const t=ml(e),n=e.proxy,s=e.ctx;Nr=!1,t.beforeCreate&&Do(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:h,mounted:k,beforeUpdate:g,updated:T,activated:_,deactivated:I,beforeDestroy:P,beforeUnmount:j,destroyed:G,unmounted:N,render:w,renderTracked:Z,renderTriggered:ee,errorCaptured:K,serverPrefetch:te,expose:se,inheritAttrs:z,components:B,directives:q,filters:R}=t;if(f&&xc(f,s,null),a)for(const $ in a){const S=a[$];de(S)&&(s[$]=S.bind(n))}if(o){const $=o.call(n,n);_e($)&&(e.data=Jt($))}if(Nr=!0,i)for(const $ in i){const S=i[$],O=de(S)?S.bind(n,n):de(S.get)?S.get.bind(n,n):Ct,C=!de(S)&&de(S.set)?S.set.bind(n):Ct,re=U({get:O,set:C});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>re.value,set:$e=>re.value=$e})}if(c)for(const $ in c)vl(c[$],s,n,$);if(u){const $=de(u)?u.call(n):u;Reflect.ownKeys($).forEach(S=>{nc(S,$[S])})}d&&Do(d,e,"c");function x($,S){ae(S)?S.forEach(O=>$(O.bind(n))):S&&$(S.bind(n))}if(x(pc,h),x(En,k),x(hc,g),x(vc,T),x(uc,_),x(dc,I),x(bc,K),x(yc,Z),x(gc,ee),x(Ys,j),x(to,N),x(mc,te),ae(se))if(se.length){const $=e.exposed||(e.exposed={});se.forEach(S=>{Object.defineProperty($,S,{get:()=>n[S],set:O=>n[S]=O,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===Ct&&(e.render=w),z!=null&&(e.inheritAttrs=z),B&&(e.components=B),q&&(e.directives=q),te&&fl(e)}function xc(e,t,n=Ct){ae(e)&&(e=Rr(e));for(const s in e){const o=e[s];let i;_e(o)?"default"in o?i=_s(o.from||s,o.default,!0):i=_s(o.from||s):i=_s(o),qe(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[s]=i}}function Do(e,t,n){ot(ae(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function vl(e,t,n,s){let o=s.includes(".")?ll(n,s):()=>n[s];if(Se(e)){const i=t[e];de(i)&&pt(o,i)}else if(de(e))pt(o,e.bind(n));else if(_e(e))if(ae(e))e.forEach(i=>vl(i,t,n,s));else{const i=de(e.handler)?e.handler.bind(n):t[e.handler];de(i)&&pt(o,i,e)}}function ml(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,c=i.get(t);let u;return c?u=c:!o.length&&!n&&!s?u=t:(u={},o.length&&o.forEach(f=>Os(u,f,a,!0)),Os(u,t,a)),_e(t)&&i.set(t,u),u}function Os(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&Os(e,i,n,!0),o&&o.forEach(a=>Os(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const c=$c[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const $c={data:Po,props:Lo,emits:Lo,methods:Rn,computed:Rn,beforeCreate:Ue,created:Ue,beforeMount:Ue,mounted:Ue,beforeUpdate:Ue,updated:Ue,beforeDestroy:Ue,beforeUnmount:Ue,destroyed:Ue,unmounted:Ue,activated:Ue,deactivated:Ue,errorCaptured:Ue,serverPrefetch:Ue,components:Rn,directives:Rn,watch:wc,provide:Po,inject:Cc};function Po(e,t){return t?e?function(){return Re(de(e)?e.call(this,this):e,de(t)?t.call(this,this):t)}:t:e}function Cc(e,t){return Rn(Rr(e),Rr(t))}function Rr(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Ue(e,t){return e?[...new Set([].concat(e,t))]:t}function Rn(e,t){return e?Re(Object.create(null),e,t):t}function Lo(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:Re(Object.create(null),Ro(e),Ro(t??{})):t}function wc(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const s in t)n[s]=Ue(e[s],t[s]);return n}function gl(){return{app:null,config:{isNativeTag:Ti,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ec=0;function Sc(e,t){return function(s,o=null){de(s)||(s=Re({},s)),o!=null&&!_e(o)&&(o=null);const i=gl(),a=new WeakSet,c=[];let u=!1;const f=i.app={_uid:Ec++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:iu,get config(){return i.config},set config(d){},use(d,...h){return a.has(d)||(d&&de(d.install)?(a.add(d),d.install(f,...h)):de(d)&&(a.add(d),d(f,...h))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,h){return h?(i.components[d]=h,f):i.components[d]},directive(d,h){return h?(i.directives[d]=h,f):i.directives[d]},mount(d,h,k){if(!u){const g=f._ceVNode||Ae(s,o);return g.appContext=i,k===!0?k="svg":k===!1&&(k=void 0),e(g,d,k),u=!0,f._container=d,d.__vue_app__=f,Zs(g.component)}},onUnmount(d){c.push(d)},unmount(){u&&(ot(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(d,h){return i.provides[d]=h,f},runWithContext(d){const h=mn;mn=f;try{return d()}finally{mn=h}}};return f}}let mn=null;const Tc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${dt(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function Ic(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||xe;let o=n;const i=t.startsWith("update:"),a=i&&Tc(s,t.slice(7));a&&(a.trim&&(o=n.map(d=>Se(d)?d.trim():d)),a.number&&(o=o.map(Gr)));let c,u=s[c=lr(t)]||s[c=lr(dt(t))];!u&&i&&(u=s[c=lr(Yt(t))]),u&&ot(u,e,6,o);const f=s[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,ot(f,e,6,o)}}const Ac=new WeakMap;function yl(e,t,n=!1){const s=n?Ac:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let a={},c=!1;if(!de(e)){const u=f=>{const d=yl(f,t,!0);d&&(c=!0,Re(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!c?(_e(e)&&s.set(e,null),null):(ae(i)?i.forEach(u=>a[u]=null):Re(a,i),_e(e)&&s.set(e,a),a)}function Js(e,t){return!e||!js(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ge(e,t[0].toLowerCase()+t.slice(1))||ge(e,Yt(t))||ge(e,t))}function Fo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:h,data:k,setupState:g,ctx:T,inheritAttrs:_}=e,I=Ts(e);let P,j;try{if(n.shapeFlag&4){const N=o||s,w=N;P=kt(f.call(w,N,d,h,g,k,T)),j=c}else{const N=t;P=kt(N.length>1?N(h,{attrs:c,slots:a,emit:u}):N(h,null)),j=t.props?c:Oc(c)}}catch(N){Pt.length=0,Ks(N,e,1),P=Ae(Fe)}let G=P;if(j&&_!==!1){const N=Object.keys(j),{shapeFlag:w}=G;N.length&&w&7&&(i&&N.some(Bs)&&(j=Nc(j,i)),G=zt(G,j,!1,!0))}if(n.dirs&&(G=zt(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition){const N=Ws(G.type)&&Is(G)||G;dn(N,n.transition)}return P=G,Ts(I),P}function bl(e,t=!0){let n;for(let s=0;s<e.length;s++){const o=e[s];if(_n(o)){if(o.type!==Fe||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Oc=e=>{let t;for(const n in e)(n==="class"||n==="style"||js(n))&&((t||(t={}))[n]=e[n]);return t},Nc=(e,t)=>{const n={};for(const s in e)(!Bs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Rc(e,t,n){const{props:s,children:o,component:i}=e,{props:a,children:c,patchFlag:u}=t,f=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Vo(s,a,f):!!a;if(u&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const k=d[h];if(_l(a,s,k)&&!Js(f,k))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?Vo(s,a,f):!0:!!a;return!1}function Vo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(!ge(e,i)||_l(t,e,i)&&!Js(n,i))return!0}return!1}function _l(e,t,n){const s=e[n],o=t[n];return n==="style"&&_e(s)&&_e(o)?!bn(s,o):s!==o}function Dc({vnode:e,parent:t,suspense:n},s){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=s,e=o),o===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const kl={},Ml=()=>Object.create(kl),xl=e=>Object.getPrototypeOf(e)===kl;function Pc(e,t,n,s=!1){const o={},i=Ml();e.propsDefaults=Object.create(null),$l(e,t,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:qa(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Lc(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,c=me(o),[u]=e.propsOptions;let f=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let k=d[h];if(Js(e.emitsOptions,k))continue;const g=t[k];if(u)if(ge(i,k))g!==i[k]&&(i[k]=g,f=!0);else{const T=dt(k);o[T]=Dr(u,c,T,g,e,!1)}else g!==i[k]&&(i[k]=g,f=!0)}}}else{$l(e,t,o,i)&&(f=!0);let d;for(const h in c)(!t||!ge(t,h)&&((d=Yt(h))===h||!ge(t,d)))&&(u?n&&(n[h]!==void 0||n[d]!==void 0)&&(o[h]=Dr(u,c,h,void 0,e,!0)):delete o[h]);if(i!==c)for(const h in i)(!t||!ge(t,h))&&(delete i[h],f=!0)}f&&Rt(e.attrs,"set","")}function $l(e,t,n,s){const[o,i]=e.propsOptions;let a=!1,c;if(t)for(let u in t){if(Fn(u))continue;const f=t[u];let d;o&&ge(o,d=dt(u))?!i||!i.includes(d)?n[d]=f:(c||(c={}))[d]=f:Js(e.emitsOptions,u)||(!(u in s)||f!==s[u])&&(s[u]=f,a=!0)}if(i){const u=me(n),f=c||xe;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Dr(o,u,h,f[h],e,!ge(f,h))}}return a}function Dr(e,t,n,s,o,i){const a=e[n];if(a!=null){const c=ge(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&de(u)){const{propsDefaults:f}=o;if(n in f)s=f[n];else{const d=os(o);s=f[n]=u.call(null,t),d()}}else s=u;o.ce&&o.ce._setProp(n,s)}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===Yt(n))&&(s=!0))}return s}const Fc=new WeakMap;function Cl(e,t,n=!1){const s=n?Fc:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,a={},c=[];let u=!1;if(!de(e)){const d=h=>{u=!0;const[k,g]=Cl(h,t,!0);Re(a,k),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return _e(e)&&s.set(e,ln),ln;if(ae(i))for(let d=0;d<i.length;d++){const h=dt(i[d]);jo(h)&&(a[h]=xe)}else if(i)for(const d in i){const h=dt(d);if(jo(h)){const k=i[d],g=a[h]=ae(k)||de(k)?{type:k}:Re({},k),T=g.type;let _=!1,I=!0;if(ae(T))for(let P=0;P<T.length;++P){const j=T[P],G=de(j)&&j.name;if(G==="Boolean"){_=!0;break}else G==="String"&&(I=!1)}else _=de(T)&&T.name==="Boolean";g[0]=_,g[1]=I,(_||ge(g,"default"))&&c.push(h)}}const f=[a,c];return _e(e)&&s.set(e,f),f}function jo(e){return e[0]!=="$"&&!Fn(e)}const no=e=>e==="_"||e==="_ctx"||e==="$stable",so=e=>ae(e)?e.map(kt):[kt(e)],Vc=(e,t,n)=>{if(t._n)return t;const s=eo((...o)=>so(t(...o)),n);return s._c=!1,s},wl=(e,t,n)=>{const s=e._ctx;for(const o in e){if(no(o))continue;const i=e[o];if(de(i))t[o]=Vc(o,i,s);else if(i!=null){const a=so(i);t[o]=()=>a}}},El=(e,t)=>{const n=so(t);e.slots.default=()=>n},Sl=(e,t,n)=>{for(const s in t)(n||!no(s))&&(e[s]=t[s])},jc=(e,t,n)=>{const s=e.slots=Ml();if(e.vnode.shapeFlag&32){const o=t._;o?(Sl(s,t,n),n&&Ri(s,"_",o,!0)):wl(t,s)}else t&&El(e,t)},Bc=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,a=xe;if(s.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Sl(o,t,n):(i=!t.$stable,wl(t,o)),a=t}else t&&(El(e,t),a={default:1});if(i)for(const c in o)!no(c)&&a[c]==null&&delete o[c]},He=Wc;function qc(e){return Uc(e)}function Uc(e,t){const n=Us();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:h,nextSibling:k,setScopeId:g=Ct,insertStaticContent:T}=e,_=(y,M,A,H=null,L=null,V=null,Q=void 0,J=null,Y=!!M.dynamicChildren)=>{if(y===M)return;y&&!rn(y,M)&&(H=he(y),$e(y,L,V,!0),y=null),M.patchFlag===-2&&(Y=!1,M.dynamicChildren=null),M.dynamicChildren&&y&&y.dynamicChildren&&y.dynamicChildren.hasOnce&&(M.dynamicChildren===ln&&(M.dynamicChildren=[]),M.dynamicChildren.hasOnce=!0);const{type:F,ref:ie,shapeFlag:X}=M;switch(F){case Qs:I(y,M,A,H);break;case Fe:P(y,M,A,H);break;case ks:y==null&&j(M,A,H,Q);break;case W:B(y,M,A,H,L,V,Q,J,Y);break;default:X&1?w(y,M,A,H,L,V,Q,J,Y):X&6?q(y,M,A,H,L,V,Q,J,Y):(X&64||X&128)&&F.process(y,M,A,H,L,V,Q,J,Y,vt)}ie!=null&&L?Bn(ie,y&&y.ref,V,M||y,!M):ie==null&&y&&y.ref!=null&&Bn(y.ref,null,V,y,!0)},I=(y,M,A,H)=>{if(y==null)s(M.el=c(M.children),A,H);else{const L=M.el=y.el;M.children!==y.children&&f(L,M.children)}},P=(y,M,A,H)=>{y==null?s(M.el=u(M.children||""),A,H):M.el=y.el},j=(y,M,A,H)=>{[y.el,y.anchor]=T(y.children,M,A,H,y.el,y.anchor)},G=({el:y,anchor:M},A,H)=>{let L;for(;y&&y!==M;)L=k(y),s(y,A,H),y=L;s(M,A,H)},N=({el:y,anchor:M})=>{let A;for(;y&&y!==M;)A=k(y),o(y),y=A;o(M)},w=(y,M,A,H,L,V,Q,J,Y)=>{if(M.type==="svg"?Q="svg":M.type==="math"&&(Q="mathml"),y==null)Z(M,A,H,L,V,Q,J,Y);else{const F=y.el&&y.el._isVueCE?y.el:null;try{F&&F._beginPatch(),te(y,M,L,V,Q,J,Y)}finally{F&&F._endPatch()}}},Z=(y,M,A,H,L,V,Q,J)=>{let Y,F;const{props:ie,shapeFlag:X,transition:le,dirs:ue}=y;if(Y=y.el=a(y.type,V,ie&&ie.is,ie),X&8?d(Y,y.children):X&16&&K(y.children,Y,null,H,L,vr(y,V),Q,J),ue&&Zt(y,null,H,"created"),ee(Y,y,y.scopeId,Q,H),ie){for(const Me in ie)Me!=="value"&&!Fn(Me)&&i(Y,Me,null,ie[Me],V,H);"value"in ie&&i(Y,"value",null,ie.value,V),(F=ie.onVnodeBeforeMount)&&yt(F,H,y)}ue&&Zt(y,null,H,"beforeMount");const ve=Hc(L,le);ve?le.beforeEnter(Y):le&&!le.persisted&&(Y[Gc]=!0),s(Y,M,A),((F=ie&&ie.onVnodeMounted)||ve||ue)&&He(()=>{try{F&&yt(F,H,y),ve&&le.enter(Y),ue&&Zt(y,null,H,"mounted")}finally{}},L)},ee=(y,M,A,H,L)=>{if(A&&g(y,A),H)for(let V=0;V<H.length;V++)g(y,H[V]);if(L){let V=L.subTree;if(M===V||Al(V.type)&&(V.ssContent===M||V.ssFallback===M)){const Q=L.vnode;ee(y,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},K=(y,M,A,H,L,V,Q,J,Y=0)=>{for(let F=Y;F<y.length;F++){const ie=y[F]=J?Nt(y[F]):kt(y[F]);_(null,ie,M,A,H,L,V,Q,J)}},te=(y,M,A,H,L,V,Q)=>{const J=M.el=y.el;let{patchFlag:Y,dynamicChildren:F,dirs:ie}=M;Y|=y.patchFlag&16;const X=y.props||xe,le=M.props||xe;let ue;if(A&&Xt(A,!1),(ue=le.onVnodeBeforeUpdate)&&yt(ue,A,M,y),ie&&Zt(M,y,A,"beforeUpdate"),A&&Xt(A,!0),F&&(!y.dynamicChildren||y.dynamicChildren.length!==F.length)&&(Y=0,Q=!1,F=null),(X.innerHTML&&le.innerHTML==null||X.textContent&&le.textContent==null)&&d(J,""),F?se(y.dynamicChildren,F,J,A,H,vr(M,L),V):Q||S(y,M,J,null,A,H,vr(M,L),V,!1),Y>0){if(Y&16)z(J,X,le,A,L);else if(Y&2&&X.class!==le.class&&i(J,"class",null,le.class,L),Y&4&&i(J,"style",X.style,le.style,L),Y&8){const ve=M.dynamicProps;for(let Me=0;Me<ve.length;Me++){const ke=ve[Me],Oe=X[ke],De=le[ke];(De!==Oe||ke==="value")&&i(J,ke,Oe,De,L,A)}}Y&1&&y.children!==M.children&&d(J,M.children)}else!Q&&F==null&&z(J,X,le,A,L);((ue=le.onVnodeUpdated)||ie)&&He(()=>{ue&&yt(ue,A,M,y),ie&&Zt(M,y,A,"updated")},H)},se=(y,M,A,H,L,V,Q)=>{for(let J=0;J<M.length;J++){const Y=y[J],F=M[J],ie=Y.el||Un(Y),X=ie&&(Y.type===W||!rn(Y,F)||Y.shapeFlag&198)?h(ie):A;_(Y,F,X,null,H,L,V,Q,!0)}},z=(y,M,A,H,L)=>{if(M!==A){if(M!==xe)for(const V in M)!Fn(V)&&!(V in A)&&i(y,V,M[V],null,L,H);for(const V in A){if(Fn(V))continue;const Q=A[V],J=M[V];Q!==J&&V!=="value"&&i(y,V,J,Q,L,H)}"value"in A&&i(y,"value",M.value,A.value,L)}},B=(y,M,A,H,L,V,Q,J,Y)=>{const F=M.el=y?y.el:c(""),ie=M.anchor=y?y.anchor:c("");let{patchFlag:X,dynamicChildren:le,slotScopeIds:ue}=M;ue&&(J=J?J.concat(ue):ue),y==null?(s(F,A,H),s(ie,A,H),K(M.children||[],A,ie,L,V,Q,J,Y)):X>0&&X&64&&le&&y.dynamicChildren&&y.dynamicChildren.length===le.length?(se(y.dynamicChildren,le,A,L,V,Q,J),(M.key!=null||L&&M===L.subTree)&&Tl(y,M,!0)):S(y,M,A,ie,L,V,Q,J,Y)},q=(y,M,A,H,L,V,Q,J,Y)=>{M.slotScopeIds=J,y==null?M.shapeFlag&512?L.ctx.activate(M,A,H,Q,Y):R(M,A,H,L,V,Q,Y):E(y,M,Y)},R=(y,M,A,H,L,V,Q)=>{const J=y.component=Xc(y,H,L);if(zs(y)&&(J.ctx.renderer=vt),eu(J,!1,Q),J.asyncDep){if(L&&L.registerDep(J,x,Q,V),!y.el){const Y=J.subTree=Ae(Fe);P(null,Y,M,A),y.placeholder=Y.el}}else x(J,y,M,A,L,V,Q)},E=(y,M,A)=>{const H=M.component=y.component;if(Rc(y,M,A))if(H.asyncDep&&!H.asyncResolved){M.el=y.el,M.placeholder=y.placeholder,$(H,M,A);return}else H.next=M,H.update();else M.el=y.el,M.placeholder=y.placeholder,H.vnode=M},x=(y,M,A,H,L,V,Q)=>{const J=()=>{if(y.isMounted){let{next:X,bu:le,u:ue,parent:ve,vnode:Me}=y;{const mt=Il(y);if(mt){X&&(X.el=Me.el,$(y,X,Q)),mt.asyncDep.then(()=>{const Tt=()=>{y.job.flags&8||(L&&L.pendingBranch?He(Tt,L):F())};Tt.flags=48,He(Tt,L)});return}}let ke=X,Oe;Xt(y,!1),X?(X.el=Me.el,$(y,X,Q)):X=Me,le&&ys(le),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&yt(Oe,ve,X,Me),Xt(y,!0);const De=Fo(y),it=y.subTree;y.subTree=De,_(it,De,h(it.el||Un(it)),he(it),y,L,V),X.el=De.el,ke===null&&Dc(y,De.el),ue&&He(ue,L),(Oe=X.props&&X.props.onVnodeUpdated)&&He(()=>yt(Oe,ve,X,Me),L)}else{let X;const{el:le,props:ue}=M,{bm:ve,m:Me,parent:ke,root:Oe,type:De}=y,it=vn(M);Xt(y,!1),ve&&ys(ve),!it&&(X=ue&&ue.onVnodeBeforeMount)&&yt(X,ke,M),Xt(y,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle(De,y.parent?y.parent.type:void 0);const mt=y.subTree=Fo(y);_(null,mt,A,H,y,L,V),M.el=mt.el}if(Me&&He(Me,L),!it&&(X=ue&&ue.onVnodeMounted)){const mt=M;He(()=>yt(X,ke,mt),L)}(M.shapeFlag&256||ke&&vn(ke.vnode)&&ke.vnode.shapeFlag&256)&&y.a&&He(y.a,L),y.isMounted=!0,M=A=H=null}};y.scope.on();const Y=y.effect=new Fi(J);y.scope.off();const F=y.update=Y.run.bind(Y),ie=y.job=Y.runIfDirty.bind(Y);ie.i=y,ie.id=y.uid,Y.scheduler=()=>Gs(ie),Xt(y,!0),F()},$=(y,M,A)=>{M.component=y;const H=y.vnode.props;y.vnode=M,y.next=null,Lc(y,M.props,H,A),Bc(y,M.children,A),wt(),nl(y),Et()},S=(y,M,A,H,L,V,Q,J,Y=!1)=>{const F=y&&y.children,ie=y?y.shapeFlag:0,X=M.children,{patchFlag:le,shapeFlag:ue}=M;if(le>0){if(le&128){C(F,X,A,H,L,V,Q,J,Y);return}else if(le&256){O(F,X,A,H,L,V,Q,J,Y);return}}ue&8?(ie&16&&pe(F,L,V),X!==F&&d(A,X)):ie&16?ue&16?C(F,X,A,H,L,V,Q,J,Y):pe(F,L,V,!0):(ie&8&&d(A,""),ue&16&&K(X,A,H,L,V,Q,J,Y))},O=(y,M,A,H,L,V,Q,J,Y)=>{y=y||ln,M=M||ln;const F=y.length,ie=M.length,X=Math.min(F,ie);let le;for(le=0;le<X;le++){const ue=M[le]=Y?Nt(M[le]):kt(M[le]);_(y[le],ue,A,null,L,V,Q,J,Y)}F>ie?pe(y,L,V,!0,!1,X):K(M,A,H,L,V,Q,J,Y,X)},C=(y,M,A,H,L,V,Q,J,Y)=>{let F=0;const ie=M.length;let X=y.length-1,le=ie-1;for(;F<=X&&F<=le;){const ue=y[F],ve=M[F]=Y?Nt(M[F]):kt(M[F]);if(rn(ue,ve))_(ue,ve,A,null,L,V,Q,J,Y);else break;F++}for(;F<=X&&F<=le;){const ue=y[X],ve=M[le]=Y?Nt(M[le]):kt(M[le]);if(rn(ue,ve))_(ue,ve,A,null,L,V,Q,J,Y);else break;X--,le--}if(F>X){if(F<=le){const ue=le+1,ve=ue<ie?M[ue].el:H;for(;F<=le;)_(null,M[F]=Y?Nt(M[F]):kt(M[F]),A,ve,L,V,Q,J,Y),F++}}else if(F>le)for(;F<=X;)$e(y[F],L,V,!0),F++;else{const ue=F,ve=F,Me=new Map;for(F=ve;F<=le;F++){const Ze=M[F]=Y?Nt(M[F]):kt(M[F]);Ze.key!=null&&Me.set(Ze.key,F)}let ke,Oe=0;const De=le-ve+1;let it=!1,mt=0;const Tt=new Array(De);for(F=0;F<De;F++)Tt[F]=0;for(F=ue;F<=X;F++){const Ze=y[F];if(Oe>=De){$e(Ze,L,V,!0);continue}let gt;if(Ze.key!=null)gt=Me.get(Ze.key);else for(ke=ve;ke<=le;ke++)if(Tt[ke-ve]===0&&rn(Ze,M[ke])){gt=ke;break}gt===void 0?$e(Ze,L,V,!0):(Tt[gt-ve]=F+1,gt>=mt?mt=gt:it=!0,_(Ze,M[gt],A,null,L,V,Q,J,Y),Oe++)}const ko=it?Kc(Tt):ln;for(ke=ko.length-1,F=De-1;F>=0;F--){const Ze=ve+F,gt=M[Ze],Mo=M[Ze+1],xo=Ze+1<ie?Mo.el||Un(Mo):H;Tt[F]===0?_(null,gt,A,xo,L,V,Q,J,Y):it&&(ke<0||F!==ko[ke]?re(gt,A,xo,2):ke--)}}},re=(y,M,A,H,L=null)=>{const{el:V,type:Q,transition:J,children:Y,shapeFlag:F}=y;if(F&6){re(y.component.subTree,M,A,H);return}if(F&128){y.suspense.move(M,A,H);return}if(F&64){Q.move(y,M,A,vt);return}if(Q===W){s(V,M,A);for(let X=0;X<Y.length;X++)re(Y[X],M,A,H);s(y.anchor,M,A);return}if(Q===ks){G(y,M,A);return}if(H!==2&&F&1&&J)if(H===0)J.persisted&&!V[nt]?s(V,M,A):(J.beforeEnter(V),s(V,M,A),He(()=>J.enter(V),L));else{const{leave:X,delayLeave:le,afterLeave:ue}=J,ve=()=>{y.ctx.isUnmounted?o(V):s(V,M,A)},Me=()=>{const ke=V._isLeaving||!!V[nt];V._isLeaving&&V[nt](!0),J.persisted&&!ke?ve():X(V,()=>{ve(),ue&&ue()})};le?le(V,ve,Me):Me()}else s(V,M,A)},$e=(y,M,A,H=!1,L=!1)=>{const{type:V,props:Q,ref:J,children:Y,dynamicChildren:F,shapeFlag:ie,patchFlag:X,dirs:le,cacheIndex:ue,memo:ve}=y;if((X===-2||F&&F.hasOnce)&&(L=!1),J!=null&&(wt(),Bn(J,null,A,y,!0),Et()),ue!=null&&(!y.ctx||y.ctx===M)&&(M.renderCache[ue]=void 0),ie&256&&M.ctx.deactivate(y))return;const Me=ie&1&&le,ke=!vn(y);let Oe;if(ke&&(Oe=Q&&Q.onVnodeBeforeUnmount)&&yt(Oe,M,y),ie&6)ce(y.component,A,H);else{if(ie&128){y.suspense.unmount(A,H);return}Me&&Zt(y,null,M,"beforeUnmount"),ie&64?y.type.remove(y,M,A,vt,H):F&&!F.hasOnce&&(V!==W||X>0&&X&64)?pe(F,M,A,!1,!0):(V===W&&X&384||!L&&ie&16)&&pe(Y,M,A),H&&Qt(y)}const De=ve!=null&&ue==null;(ke&&(Oe=Q&&Q.onVnodeUnmounted)||Me||De)&&He(()=>{Oe&&yt(Oe,M,y),Me&&Zt(y,null,M,"unmounted"),De&&(y.el=null)},A)},Qt=y=>{const{type:M,el:A,anchor:H,transition:L}=y,V=M===W;if(V&&!L){Vt(A,H);return}if(M===ks){N(y),L&&!L.persisted&&L.afterLeave&&L.afterLeave();return}const Q=V?Wn(y):y,J=()=>{V?h(A)&&Vt(A,H):o(A),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(Q&&Q.shapeFlag&1&&L&&!L.persisted){const{leave:Y,delayLeave:F}=L,ie=Q.el,X=()=>Y(ie,J);F?F(ie,J,X):X()}else J()},Vt=(y,M)=>{let A;for(;y!==M;)A=k(y),o(y),y=A;o(M)},ce=(y,M,A)=>{const{bum:H,scope:L,job:V,subTree:Q,um:J,m:Y,a:F}=y;Bo(Y),Bo(F),H&&ys(H),L.stop(),V?(V.flags|=8,$e(Q,y,M,A)):Q&&(Q.transition=y.vnode.transition,$e(Q,y,M,A)),J&&He(J,M);const ie=()=>{y.isUnmounted=!0};ie.flags=16,He(ie,M)},pe=(y,M,A,H=!1,L=!1,V=0)=>{for(let Q=V;Q<y.length;Q++)$e(y[Q],M,A,H,L)},he=y=>{if(y.shapeFlag&6)return he(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const M=k(y.anchor||y.el),A=M&&M[ic];return A?k(A):M},ze=(y,M,A)=>{const H=y&&M._vnode?void 0:y&&y.component?y.component.uid:Zc();tc(()=>{y==null?M._vnode&&$e(M._vnode,null,null,!0):_(M._vnode||null,y,M,null,null,null,A),M._vnode=y},H)},vt={p:_,um:$e,m:re,r:Qt,mt:R,mc:K,pc:S,pbc:se,n:he,o:e};return{render:ze,hydrate:void 0,createApp:Sc(ze)}}function vr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Xt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Hc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Tl(e,t,n=!1){const s=e.children,o=t.children;if(ae(s)&&ae(o))for(let i=0;i<s.length;i++){const a=s[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=Nt(o[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Tl(a,c)),c.type===Qs&&(c.patchFlag===-1&&(c=o[i]=Nt(c)),c.el=a.el),c.type===Fe&&!c.el&&(c.el=a.el)}}function Kc(e){const t=e.slice(),n=[0];let s,o,i,a,c;const u=e.length;for(s=0;s<u;s++){const f=e[s];if(f!==0){if(o=n[n.length-1],e[o]<f){t[s]=o,n.push(s);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,e[n[c]]<f?i=c+1:a=c;f<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Il(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Il(t)}function Bo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Un(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return Un(t.subTree);const n=e.suspense;return n&&n.activeBranch?Un(n.activeBranch):null}const Al=e=>e.__isSuspense,Gc=Symbol("_deferredEnter");function Wc(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):ec(e)}const W=Symbol.for("v-fgt"),Qs=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),Pt=[];let Xe=null;function v(e=!1){Pt.push(Xe=e?null:[])}function ro(){Pt.pop(),Xe=Pt[Pt.length-1]||null}let Yn=1;function Ns(e,t=!1){Yn+=e,e<0&&Xe&&t&&(Xe.hasOnce=!0)}function Ol(e){return e.dynamicChildren=Yn>0?Xe||ln:null,ro(),Yn>0&&Xe&&Xe.push(e),e}function m(e,t,n,s,o,i){return Ol(l(e,t,n,s,o,i,!0))}function Ve(e,t,n,s,o){return Ol(Ae(e,t,n,s,o,!0))}function _n(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Nl=({key:e})=>e??null,Ms=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Se(e)||qe(e)||de(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,s=0,o=null,i=e===W?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Nl(t),ref:t&&Ms(t),scopeId:ol,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Be};return c?(Rs(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Se(n)?8:16),Yn>0&&!a&&Xe&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Xe.push(u),u}const Ae=zc;function zc(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===_c)&&(e=Fe),_n(e)){const c=zt(e,t,!0);return n&&Rs(c,n),Yn>0&&!i&&Xe&&(c.shapeFlag&6?Xe[Xe.indexOf(e)]=c:Xe.push(c)),c.patchFlag=-2,c}if(ru(e)&&(e=e.__vccOpts),t){t=Yc(t);let{class:c,style:u}=t;c&&!Se(c)&&(t.class=be(c)),_e(u)&&(Xr(u)&&!ae(u)&&(u=Re({},u)),t.style=et(u))}const a=Se(e)?1:Al(e)?128:Ws(e)?64:_e(e)?4:de(e)?2:0;return l(e,t,n,s,o,a,i,!0)}function Yc(e){return e?Xr(e)?Re({},e):xl(e)?Re({},e[Fl]||e):e:null}function zt(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:a,children:c,transition:u}=e,f=t?Jc(o||{},t):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&Nl(f),ref:t&&t.ref?n&&i?ae(i)?i.concat(Ms(t)):[i,Ms(t)]:Ms(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return u&&s&&dn(d,u.clone(d)),d}function xt(e=" ",t=0){return Ae(Qs,null,e,t)}function qo(e,t){const n=Ae(ks,null,e);return n.staticCount=t,n}function D(e="",t=!1){return t?(v(),Ve(Fe,null,e)):Ae(Fe,null,e)}function kt(e){return e==null||typeof e=="boolean"?Ae(Fe):ae(e)?Ae(W,null,e.slice()):_n(e)?Nt(e):Ae(Qs,null,String(e))}function Nt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function Rs(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ae(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Rs(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!xl(t)?t._ctx=Be:o===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(de(t)){if(s&65){Rs(e,{default:t});return}t={default:t,_ctx:Be},n=32}else t=String(t),s&64?(n=16,t=[xt(t)]):n=8;e.children=t,e.shapeFlag|=n}function Jc(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=be([t.class,s.class]));else if(o==="style")t.style=et([t.style,s.style]);else if(js(o)){const i=t[o],a=s[o];a&&i!==a&&!(ae(i)&&i.includes(a))?t[o]=i?[].concat(i,a):a:a==null&&i==null&&!Bs(o)&&(t[o]=a)}else o!==""&&(t[o]=s[o])}return t}function yt(e,t,n,s=null){ot(e,t,7,[n,s])}const Qc=gl();let Rl=0;function Zc(){return Rl}function Xc(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||Qc,i={uid:Rl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new $a(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cl(s,o),emitsOptions:yl(s,o),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:s.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Ic.bind(null,i),e.ce&&e.ce(i),i}let Ge=null;const Dl=()=>Ge||Be;let Ds,Jn;{const e=Us(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};Ds=t("__VUE_INSTANCE_SETTERS__",n=>Ge=n),Jn=t("__VUE_SSR_SETTERS__",n=>Qn=n)}const os=e=>{const t=Ge;return Ds(e),e.scope.on(),()=>{e.scope.off(),Ds(t)}},Uo=()=>{Ge&&Ge.scope.off(),Ds(null)};function Pl(e){return e.vnode.shapeFlag&4}let Qn=!1;function eu(e,t=!1,n=!1){t&&Jn(t);const{props:s,children:o}=e.vnode,i=Pl(e);Pc(e,s,i,t),jc(e,o,n||t);const a=i?tu(e,t):void 0;return t&&Jn(!1),a}function tu(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,kc);const{setup:s}=n;if(s){wt();const o=e.setupContext=s.length>1?su(e):null,i=os(e),a=rs(s,e,0,[e.props,o]),c=Ii(a);if(Et(),i(),(c||e.sp)&&!vn(e)&&fl(e),c){if(a.then(Uo,Uo),t)return a.then(u=>{Jn(!0);try{Ho(e,u,t)}finally{Jn(!1)}}).catch(u=>{Ks(u,e,0,void 0,!0),e.ssrRender=(f,d)=>d("<!---->")});e.asyncDep=a}else Ho(e,a)}else Ll(e)}function Ho(e,t,n){de(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=Xi(t)),Ll(e)}function Ll(e,t,n){const s=e.type;e.render||(e.render=s.render||Ct);{const o=os(e);wt();try{Mc(e)}finally{Et(),o()}}}const Fl=Symbol(),nu={get(e,t){return je(e,"get",""),t===Fl?e:e[t]}};function su(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,nu),slots:e.slots,emit:e.emit,expose:t}}function Zs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Xi(Ua(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)},has(t,n){return n in t||n in qn}})):e.proxy}function ru(e){return de(e)&&"__vccOpts"in e}const U=(e,t)=>za(e,t,Qn);function ou(e,t,n){try{Ns(-1);const s=arguments.length;return s===2?_e(t)&&!ae(t)?_n(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&_n(n)&&(n=[n]),Ae(e,t,n))}finally{Ns(1)}}const iu="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pr;const Ko=typeof window<"u"&&window.trustedTypes;if(Ko)try{Pr=Ko.createPolicy("vue",{createHTML:e=>e})}catch{}const Vl=Pr?e=>Pr.createHTML(e):e=>e,lu="http://www.w3.org/2000/svg",au="http://www.w3.org/1998/Math/MathML",Ot=typeof document<"u"?document:null,Go=Ot&&Ot.createElement("template"),cu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Ot.createElementNS(lu,e):t==="mathml"?Ot.createElementNS(au,e):n?Ot.createElement(e,{is:n}):Ot.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Ot.createTextNode(e),createComment:e=>Ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Go.innerHTML=Vl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=Go.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},jt="transition",Nn="animation",Zn=Symbol("_vtc"),jl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},uu=Re({},al,jl),du=e=>(e.displayName="Transition",e.props=uu,e),fu=du((e,{slots:t})=>ou(cc,pu(e),t)),en=(e,t=[])=>{ae(e)?e.forEach(n=>n(...t)):e&&e(...t)},Wo=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function pu(e){const t={};for(const B in e)B in jl||(t[B]=e[B]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:f=a,appearToClass:d=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:k=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,T=hu(o),_=T&&T[0],I=T&&T[1],{onBeforeEnter:P,onEnter:j,onEnterCancelled:G,onLeave:N,onLeaveCancelled:w,onBeforeAppear:Z=P,onAppear:ee=j,onAppearCancelled:K=G}=t,te=(B,q,R,E)=>{B._enterCancelled=E,tn(B,q?d:c),tn(B,q?f:a),R&&R()},se=(B,q)=>{B._isLeaving=!1,tn(B,h),tn(B,g),tn(B,k),q&&q()},z=B=>(q,R)=>{const E=B?ee:j,x=()=>te(q,B,R);en(E,[q,x]),zo(()=>{tn(q,B?u:i),At(q,B?d:c),Wo(E)||Yo(q,s,_,x)})};return Re(t,{onBeforeEnter(B){en(P,[B]),At(B,i),At(B,a)},onBeforeAppear(B){en(Z,[B]),At(B,u),At(B,f)},onEnter:z(!1),onAppear:z(!0),onLeave(B,q){B._isLeaving=!0;const R=()=>se(B,q);At(B,h),B._enterCancelled?(At(B,k),Zo(B)):(Zo(B),At(B,k)),zo(()=>{B._isLeaving&&(tn(B,h),At(B,g),Wo(N)||Yo(B,s,I,R))}),en(N,[B,R])},onEnterCancelled(B){te(B,!1,void 0,!0),en(G,[B])},onAppearCancelled(B){te(B,!0,void 0,!0),en(K,[B])},onLeaveCancelled(B){se(B),en(w,[B])}})}function hu(e){if(e==null)return null;if(_e(e))return[mr(e.enter),mr(e.leave)];{const t=mr(e);return[t,t]}}function mr(e){return va(e)}function At(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Zn]||(e[Zn]=new Set)).add(t)}function tn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Zn];n&&(n.delete(t),n.size||(e[Zn]=void 0))}function zo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let vu=0;function Yo(e,t,n,s){const o=e._endId=++vu,i=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:c,propCount:u}=mu(e,t);if(!a)return s();const f=a+"end";let d=0;const h=()=>{e.removeEventListener(f,k),i()},k=g=>{g.target===e&&++d>=u&&h()};setTimeout(()=>{d<u&&h()},c+1),e.addEventListener(f,k)}function mu(e,t){const n=window.getComputedStyle(e),s=T=>(n[T]||"").split(", "),o=s(`${jt}Delay`),i=s(`${jt}Duration`),a=Jo(o,i),c=s(`${Nn}Delay`),u=s(`${Nn}Duration`),f=Jo(c,u);let d=null,h=0,k=0;t===jt?a>0&&(d=jt,h=a,k=i.length):t===Nn?f>0&&(d=Nn,h=f,k=u.length):(h=Math.max(a,f),d=h>0?a>f?jt:Nn:null,k=d?d===jt?i.length:u.length:0);const g=d===jt&&/\b(?:transform|all)(?:,|$)/.test(s(`${jt}Property`).toString());return{type:d,timeout:h,propCount:k,hasTransform:g}}function Jo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Qo(n)+Qo(e[s])))}function Qo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Zo(e){return(e?e.ownerDocument:document).body.offsetHeight}function gu(e,t,n){const s=e[Zn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xo=Symbol("_vod"),yu=Symbol("_vsh"),bu=Symbol(""),_u=/(?:^|;)\s*display\s*:/;function ku(e,t,n){const s=e.style,o=Se(n);let i=!1;if(n&&!o){if(t)if(Se(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Dn(s,c,"")}else for(const a in t)n[a]==null&&Dn(s,a,"");for(const a in n){a==="display"&&(i=!0);const c=n[a];c!=null?xu(e,a,!Se(t)&&t?t[a]:void 0,c)||Dn(s,a,c):Dn(s,a,"")}}else if(o){if(t!==n){const a=s[bu];a&&(n+=";"+a),s.cssText=n,i=_u.test(n)}}else t&&e.removeAttribute("style");Xo in e&&((!o||t!==n)&&(e[Xo]=i?s.display:""),e[yu]&&(s.display="none"))}const cs=/\s*!important$/;function Dn(e,t,n){if(ae(n))n.forEach(s=>Dn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))cs.test(n)?e.setProperty(t,n.replace(cs,""),"important"):e.setProperty(t,n);else{const s=Mu(e,t);cs.test(n)?e.setProperty(Yt(s),n.replace(cs,""),"important"):e[s]=n}}const ei=["Webkit","Moz","ms"],gr={};function Mu(e,t){const n=gr[t];if(n)return n;let s=dt(t);if(s!=="filter"&&s in e)return gr[t]=s;s=Ni(s);for(let o=0;o<ei.length;o++){const i=ei[o]+s;if(i in e)return gr[t]=i}return t}function xu(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Se(s)&&n===s}const ti="http://www.w3.org/1999/xlink";function ni(e,t,n,s,o,i=ka(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ti,t.slice(6,t.length)):e.setAttributeNS(ti,t,n):n==null||i&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ht(n)?String(n):n)}function si(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Vl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Di(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function on(e,t,n,s){e.addEventListener(t,n,s)}function $u(e,t,n,s){e.removeEventListener(t,n,s)}const ri=Symbol("_vei");function Cu(e,t,n,s,o=null){const i=e[ri]||(e[ri]={}),a=i[t];if(s&&a)a.value=s;else{const[c,u]=Su(t);if(s){const f=i[t]=Au(s,o);on(e,c,f,u)}else a&&($u(e,c,a,u),i[t]=void 0)}}const wu=/(Once|Passive|Capture)$/,Eu=/^on:?(?:Once|Passive|Capture)$/;function Su(e){let t,n;for(;(n=e.match(wu))&&!Eu.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let yr=0;const Tu=Promise.resolve(),Iu=()=>yr||(Tu.then(()=>yr=0),yr=Date.now());function Au(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const o=n.value;if(ae(o)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const a=o.slice(),c=[s];for(let u=0;u<a.length&&!s._stopped;u++){const f=a[u];f&&ot(f,t,5,c)}}else ot(o,t,5,[s])};return n.value=e,n.attached=Iu(),n}const oi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ou=(e,t,n,s,o,i)=>{const a=o==="svg";t==="class"?gu(e,s,a):t==="style"?ku(e,n,s):js(t)?Bs(t)||Cu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nu(e,t,s,a))?(si(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ni(e,t,s,a,i,t!=="value")):e._isVueCE&&(Ru(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(s)))?si(e,dt(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ni(e,t,s,a))};function Nu(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&oi(t)&&de(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return oi(t)&&Se(n)?!1:t in e}function Ru(e,t){const n=e._def.props;if(!n)return!1;const s=dt(t);return Array.isArray(n)?n.some(o=>dt(o)===s):Object.keys(n).some(o=>dt(o)===s)}const Ps=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ae(t)?n=>ys(t,n):t};function Du(e){e.target.composing=!0}function ii(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const an=Symbol("_assign"),us=Symbol("_initialValue");function br(e,t,n){return t&&(e=e.trim()),n&&(e=Gr(e)),e}const _r={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e.parentNode&&(e.type==="text"?e[us]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[us]=e.defaultValue.replace(/\r\n?/g,`
`))),e[an]=Ps(o);const i=s||o.props&&o.props.type==="number";on(e,t?"change":"input",a=>{a.target.composing||e[an](br(e.value,n,i))}),(n||i)&&on(e,"change",()=>{e.value=br(e.value,n,i)}),t||(on(e,"compositionstart",Du),on(e,"compositionend",ii),on(e,"change",ii))},mounted(e,{value:t,modifiers:{trim:n,number:s}}){const o=t??"",i=e[us];delete e[us],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[an](br(e.value,n,s)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:i}},a){if(e[an]=Ps(a),e.composing)return;const c=(i||e.type==="number")&&!/^0\d/.test(e.value)?Gr(e.value):e.value,u=t??"";if(c===u)return;const f=e.getRootNode();(f instanceof Document||f instanceof ShadowRoot)&&f.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===u)||(e.value=u)}},Pu={created(e,{value:t},n){e.checked=bn(t,n.props.value),e[an]=Ps(n),on(e,"change",()=>{e[an](Lu(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e[an]=Ps(s),t!==n&&(e.checked=bn(t,s.props.value))}};function Lu(e){return"_value"in e?e._value:e.value}const Fu=["ctrl","shift","alt","meta"],Vu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Fu.some(n=>e[`${n}Key`]&&!t.includes(n))},$t=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...i)=>{for(let a=0;a<t.length;a++){const c=Vu[t[a]];if(c&&c(o,t))return}return e(o,...i)}))},ju={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},li=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=(o=>{if(!("key"in o))return;const i=Yt(o.key);if(t.some(a=>a===i||ju[a]===i))return e(o)}))},Bu=Re({patchProp:Ou},cu);let ai;function qu(){return ai||(ai=qc(Bu))}const Uu=((...e)=>{const t=qu().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Ku(s);if(!o)return;const i=t._component;!de(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,Hu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function Hu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Ku(e){return Se(e)?document.querySelector(e):e}const Gu="./";function Ie(e){return Gu+"art/"+e}const ds=Jt({});function Je(e){if(!e)return"no";const t=Ie(e),n=ds[t];if(n)return n;ds[t]="pending";const s=new Image;return s.onload=()=>{ds[t]="ok"},s.onerror=()=>{ds[t]="no"},s.src=t,"pending"}const Ye=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function Ee(e){return Ye.find(t=>t.id===e)||Ye[0]}const Bl={taro:[["荔浦芋泥","焦糖杏仁薄脆"]],matcha:[["春日抹茶粉","蜜红豆"]],mango:[["台农芒果泥","轻盈慕斯"]],tiramisu:[["马斯卡彭","浓缩咖啡液"]],fig:[["波姬红无花果","轻奶油"]],seasonal:[["四季时令鲜果","定制夹心"]],custom:[["双层承重胚","手工定制裱花"]],festival:[["传统红曲","节庆装饰"],["栗蓉","节庆装饰"]],signature:[["高山秋栗","金桂冻","戚风胚"]]},gn=[{id:"base",name:"基础烘焙包",price:20,month:1},{id:"dairy",name:"乳制基底",price:10,month:1},{id:"decor",name:"裱花装饰料",price:5,month:1},{id:"strawberry",name:"鲜草莓",price:10,month:1},{id:"cocoa",name:"可可粉",price:10,month:1},{id:"taro",name:"荔浦芋泥",price:10,month:3},{id:"crisp",name:"焦糖杏仁薄脆",price:10,month:3},{id:"matcha",name:"春日抹茶粉",price:10,month:4},{id:"redbean",name:"蜜红豆",price:10,month:4},{id:"mango",name:"台农芒果泥",price:10,month:6},{id:"mascarpone",name:"马斯卡彭",price:10,month:8},{id:"coffee",name:"浓缩咖啡液",price:10,month:8},{id:"fig",name:"波姬红无花果",price:10,month:10},{id:"seasonal",name:"四季时令鲜果",price:10,month:12},{id:"filling",name:"定制夹心",price:10,month:12},{id:"redrice",name:"传统红曲",price:10,month:20},{id:"chestnut",name:"高山秋栗",price:10,month:20},{id:"osmanthus",name:"金桂冻",price:10,month:26}],Sn={plain:{base:1,dairy:1},strawberry:{base:1,dairy:1,strawberry:1},chocolate:{base:1,dairy:1,cocoa:1},taro:{base:1,dairy:1,taro:1,crisp:1},matcha:{base:1,dairy:1,matcha:1,redbean:1},mango:{base:1,dairy:1,mango:1},tiramisu:{base:1,mascarpone:1,coffee:1},fig:{base:1,dairy:1,fig:1},seasonal:{base:1,dairy:1,seasonal:1,filling:1},custom:{base:2,dairy:1,filling:1,decor:1},festival:{base:1,dairy:1,chestnut:1,decor:1},signature:{base:1,dairy:1,chestnut:1,osmanthus:1}},oo=[{id:"greenery",name:"窗边绿植",category:"绿植",cost:600,shopLevel:1},{id:"lamp",name:"暖黄吊灯",category:"灯具",cost:1200,shopLevel:1},{id:"tables",name:"木桌与藤椅",category:"桌椅",cost:1800,shopLevel:2},{id:"festival",name:"节日花环",category:"节日摆件",cost:2500,shopLevel:3}],io=[{id:"chen",name:"陈奶奶",month:2,day:2,product:"plain",preference:"每次都买原味奶油蛋糕，给小孙子也带一份。",stories:["“我家小孙子指定要吃你们家的味道。”陈奶奶说，家里三代人的生日蛋糕全是在林记订的。","她看着林念接过店，也和苏晴一起盼着林记的老味道走出栖云镇。"]},{id:"zhang",name:"张叔",month:28,day:4,product:"signature",preference:"桂花栗子蛋糕刚上架时，总会来买一块。",stories:["外婆留下的配方写着：“栗子甜则少放糖，桂花香淡则后撒。”","老街坊们怀念的，是秋天打开蛋糕盒时那股桂花与板栗香；如今，林念把它做成了招牌。"]}],Wu={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},kn=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐鸢",nick:"阿鸢",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶星河",nick:"星河",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function Mn(e){return kn.find(t=>t.id===e)}const xn=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],Xn=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function zu(e){return Xn.find(t=>t.lv===e)||Xn[0]}const ql=[{id:"oven",name:"烤箱",note:"产能",desc:"好烤箱能一次进更多盘，出品也更稳。",tiers:[{cost:2500,value:40,text:"产能 +40"},{cost:7500,value:90,text:"产能 +90"},{cost:22e3,value:150,text:"产能 +150"}]},{id:"mixer",name:"搅拌机",note:"省力",desc:"奶油和面糊交给它，自己少使点劲。",tiers:[{cost:2e3,value:.1,text:"自付体力 -10%"},{cost:6500,value:.2,text:"自付体力 -20%"},{cost:19e3,value:.3,text:"自付体力 -30%"}]},{id:"fridge",name:"冷藏柜",note:"剩货",desc:"当天没卖完的，第二天还能打折卖掉一部分。",tiers:[{cost:1800,value:.1,text:"剩货回收 +10%"},{cost:5500,value:.18,text:"剩货回收 +18%"},{cost:16e3,value:.26,text:"剩货回收 +26%"}]},{id:"display",name:"展示柜",note:"客流",desc:"摆得好看，路过的人就更愿意进来。",tiers:[{cost:3e3,value:.06,text:"需求 +6%"},{cost:9e3,value:.13,text:"需求 +13%"},{cost:3e4,value:.2,text:"需求 +20%"}]},{id:"packing",name:"包装台",note:"定制",desc:"定制单拼的就是最后那一下体面。",tiers:[{cost:2600,value:.1,text:"定制收入 +10%"},{cost:7500,value:.22,text:"定制收入 +22%"},{cost:24e3,value:.35,text:"定制收入 +35%"}]},{id:"warehouse",name:"仓库",note:"采购",desc:"一次能囤更多原料，少跑几趟。",tiers:[{cost:1600,value:6,text:"单次采购 +6 份"},{cost:5e3,value:12,text:"单次采购 +12 份"},{cost:15e3,value:20,text:"单次采购 +20 份"}]},{id:"cashier",name:"收银系统",note:"售价",desc:"扫码点单，客单价能往上提一点。",tiers:[{cost:2400,value:.03,text:"售价 +3%"},{cost:7e3,value:.06,text:"售价 +6%"},{cost:26e3,value:.1,text:"售价 +10%"}]}];function lo(e){return ql.find(t=>t.id===e)}function ci(e,t){return e.unlocked.filter(n=>(e.levels[n]||1)>=t).length}function Yu(e){return e.unlocked.length?e.unlocked.reduce((t,n)=>t+(e.levels[n]||1),0)/e.unlocked.length:1}function Ju(e){return Math.max(0,...Object.values(e.partnerSkill))}function Qu(e,t){return Object.values(e.partnerTrust).filter(n=>n>=t).length}const $n=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>ci(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>Yu(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>ci(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>Ju(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>Qu(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function Zu(e){return $n.find(t=>e>=t.from&&e<=t.to)||$n[0]}const Ul={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},fs={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:Ie("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:Ie("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:Ie("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:Ie("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:Ie("shop-exterior.webp")}},Xu=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function kr(e){return Xu[(e-1)%12]}const ed=`# 《林记烘焙》完整文游剧情文案 V5.0（橙光对话体标准版）\r
\r
## 序幕：回家\r
\r
**【场景：大学宿舍 / 栖云镇街道】**\r
**【事件ID：EVT_PROLOGUE_01｜触发条件：新游戏开始】**\r
**【CG：graduation-rejection】**\r
**【初始状态：cash = 12000, actionPoints = 8, stamina = 100, shopLevel = 1 (shop-lv1)】**\r
\r
六月的阳光透过宿舍窗帘照在书桌上。\r
林念坐在电脑前，刷新了一次邮箱页面。\r
屏幕上跳出一封新的回复邮件——依然是熟悉的婉拒措辞。\r
\r
毕业前，她对未来充满期待，认真准备简历、参加招聘会、投递心仪的公司。\r
然而现实并不顺利。\r
简历大多石沉大海，几场面试也没有得到满意的结果。看着身边的同学陆续找到工作，林念逐渐陷入焦虑。\r
又一次收到拒信后，她彻底破防。\r
\r
林念：大学四年，毕业即失业。我到底在干什么啊……\r
\r
桌上的手机震动了一下，是高中好友苏晴发来的消息。\r
苏晴（手机消息）：念念，行李收拾得怎么样啦？我已经回栖云镇把摄影器材都安顿好了，等你到家我们去喝冰饮！\r
林念看着屏幕，轻轻叹了口气，手指在屏幕上敲下回复。\r
林念（手机消息）：明天回来，到时候见。\r
无奈之下，她决定先回家。\r
\r
---\r
\r
**【场景：栖云镇·林记烘焙（shop-lv1）】**\r
**【事件ID：EVT_PROLOGUE_02】**\r
\r
推开熟悉的木门，空气里飘着黄油与刚出炉戚风蛋糕的温热香气。\r
母亲林暖经营着这家名为「林记烘焙」的老店，已经有三十多年的历史。店铺最初由外婆创立，后来交给林暖经营。\r
木地板擦得干干净净，玻璃展示柜旁摆着两张旧木桌，墙上挂着手写的中文价目牌。\r
林念从小在店里长大，耳濡目染，早已掌握不错的烘焙手艺。\r
\r
林暖看到女儿最近一直为求职发愁，便放下手中的烤盘，走到林念身边。\r
林暖：既然一时半会儿找不到心仪的工作，不如先回来帮帮我？\r
林念：妈，我又不是学烘焙专业的。\r
林暖：你从小就在这里做蛋糕，手艺可不比别人差。再说了，我也没说让你一辈子待在这里。\r
林暖：店里的事情，你其实也熟悉不少。从今天开始，日常经营交给你试试，我在旁边帮你把关。\r
林念：啊？这么突然？\r
林暖：怎么，不敢？\r
林念：谁说的！\r
\r
旁白：就这样，林念正式接手林记烘焙的日常经营。\r
旁白：最初，她只是打算暂时帮忙，没想到这次回来，会彻底改变自己未来三年的生活。\r
\r
---\r
\r
## 第一章：接手林记（第1—6个月）\r
**章节主题：从毕业生到经营者**\r
**本阶段登场人物：林念、林暖、苏晴、陈奶奶**\r
\r
### M1｜毕业后的新生活\r
**【事件ID：EVT_M01_MAIN｜触发月份：M1第1个经营日】**\r
**【状态变更：解锁初始产品——原味奶油蛋糕（\`cake-plain\`）、草莓奶油蛋糕（\`cake-strawberry\`）、巧克力蛋糕（\`cake-chocolate\`）】**\r
\r
清晨七点，栖云镇的青石板街刚刚热闹起来。\r
林念系好围裙站在玻璃展示柜后，正在核对今天第一批上架的三款经典产品。\r
林暖端着一盘刚切好的草莓奶油蛋糕从后厨走出来。\r
\r
林暖：咱们林记开了三十多年，街坊四邻认的就是这份实在。原味、草莓和巧克力是店里的老三样，今天做多少份、怎么定价，你说了算。\r
林念：好！今天是第一个经营日，我先按老街坊平时的购买量备货，要是体力不够，还得请林老师搭把手。\r
林暖笑着点了点头。\r
林暖：放心，妈在后厨随时给你托底。\r
\r
店门上的风铃叮铃一响，背着相机的苏晴推门走了进来。\r
苏晴：哟，这不是我们栖云镇新上任的林老板吗？\r
林念：苏晴！你来得正好，快帮我看看今天展示柜的摆盘怎么样。\r
苏晴趴在玻璃柜台前打量了一圈。\r
苏晴：摆得很漂亮呀，就是我们林老板看起来比等待进烤箱的面糊还紧张。\r
林念：毕竟是第一天正式管店嘛。以前放假回来只是帮妈打下手，现在从原料采购、定价到安排生产都要自己拿主意，感觉完全不一样。\r
苏晴举起相机对准柜台后的林念。\r
苏晴：来，林老板，看镜头！给你拍一张上任首日纪念照，以后等你成了大企业家，这就是珍贵的历史资料！\r
林念：等一下，我围裙领子还没理好呢！\r
\r
旁白：清脆的快门声里，林念的三年经营生活正式拉开序幕。\r
旁白：【系统提示：解锁基础经营系统（每日5个代表性经营日、8点行动力、100点体力）。解锁友情相册NO.04《新任林老板的第一天》。】\r
\r
---\r
\r
### M2｜熟悉的老顾客\r
**【事件ID：EVT_M02_MAIN｜触发月份：M2第1个经营日】**\r
**【状态变更：解锁「顾客忠诚度与熟客系统」】**\r
\r
午后营业时段，头发花白的陈奶奶笑呵呵地走进店里。\r
苏晴恰好坐在靠窗的旧木桌旁挑照片，主动起身帮陈奶奶拉开了木门。\r
\r
苏晴：陈奶奶，您来买蛋糕啦？\r
陈奶奶：是晴晴呀！我就说刚才隔着窗户看着眼熟。\r
陈奶奶走到展示柜前，笑眯眯地看向林念。\r
陈奶奶：念念呀，听你妈说你大学毕业回来接班啦？真好真好，今天给我拿一份原味奶油蛋糕，我家小孙子指定要吃你们家的味道。\r
林念将打包好的蛋糕递过去。\r
林念：陈奶奶您拿好！我还给小朋友多放了一块试吃装的巧克力小切块。\r
陈奶奶：哎哟，还是你们贴心。我年轻那会儿，这店还是你外婆守着；后来是你妈妈，一晃眼几十个年头过去，我家三代人的生日蛋糕全是在林记订的。\r
林念：谢谢陈奶奶一直惦记着我们。\r
陈奶奶：咱们老街坊信得过林记，你们把老味道守住，以后生意准能越来越红火！\r
\r
送走陈奶奶后，林暖翻开记账本走到林念身边。\r
林暖：念念，看到了吗？林记不需要从零开始，大家伙儿的信任就是咱们最大的底气。你之后也可以看看除了原来的种类以外，大家还期待什么新口味。\r
苏晴在旁边举手。\r
苏晴：这题我会！我平时去街上拍照，好多年轻人都念叨着想吃芋泥或者茶味的新式甜点呢！\r
林念若有所思地点了点头。\r
林念：好，那我这个月就开始琢磨第一款新品！\r
\r
---\r
\r
### M3｜自己的第一款新品：芋泥薄脆\r
**【事件ID：EVT_M03_MAIN｜触发月份：M3第2个经营日】**\r
**【状态变更：解锁「新品研发系统」，解锁新品——芋泥薄脆（\`cake-taro\`）】**\r
\r
晚上八点，店门已经挂上了「打烊」的木牌，后厨的灯却还亮着。\r
操作台上摆着三碗不同奶香比例的荔浦芋泥，旁边是一盘刚出炉的焦糖杏仁薄脆。\r
林暖端着一杯温牛奶走进后厨。\r
\r
林暖：这么晚还在试配方？这已经是今晚第三炉了吧。\r
林念接过牛奶喝了一口。\r
林念：妈，这几天放学路过的学生和年轻上班族，好几次问店里有没有芋泥类的甜点。我想在绵软的荔浦芋泥夹心中间，铺一层现烤的焦糖杏仁薄脆，让口感更有层次。\r
林暖用小叉子尝了一块样品，思索片刻。\r
林暖：味道确实很棒。不过念念，薄脆一旦夹进湿润的芋泥和奶油里，在冷藏柜放上三个小时就会受潮变软，而且单份成本也高了不少。\r
林念愣了一下。\r
林念：啊……我刚才光顾着调刚出炉的口感，忘了测试冷藏后的状态了。\r
林暖温和地笑了笑。\r
林暖：自己在家做点心，好吃就行；但作为店里正式售卖的产品，保存时间、成本和定价，每一样都得算清楚。\r
林念低头看着烤盘，很快有了主意。\r
林念：如果我在焦糖薄脆表面极薄地刷一层可可脂白巧用来隔绝水汽，再把切块规格微调成方形切件，是不是就能同时解决防潮和成本问题了？\r
林暖欣慰地点了点头。\r
林暖：试试看，妈陪你等这一炉的结果。\r
\r
第二天上午，「芋泥薄脆」正式摆上展示柜。\r
苏晴第一个跑来买走两块，一边吃一边连连夸赞。\r
苏晴：天呐念念，这个芋泥配咔嚓脆的夹心绝了！我今天去影棚干活儿就有动力了！\r
林念看着下午四点前便销售一空的展示柜，第一次尝到了独立研发新品的成就感。\r
\r
---\r
\r
### M4｜好朋友的日常与抹茶新香\r
**【事件ID：EVT_M04_MAIN｜触发月份：M4第3个经营日】**\r
**【状态变更：解锁新品——抹茶蛋糕（\`cake-matcha\`），触发高一/高二友情回忆】**\r
\r
四月微风渐暖，林念研发了清新微苦的「抹茶蛋糕（\`cake-matcha\`）」，林暖尝过后也夸赞茶香清雅，特意让林念留出第一块等苏晴下班过来尝鲜。\r
傍晚，苏晴带着刚修完照片的笔记本电脑来到店里，两人坐在旧木桌旁一边吃晚饭，一边吃着抹茶蛋糕聊天。\r
\r
苏晴：哇，这个抹茶配蜜红豆的微苦回甘太正了！比我大学城旁边那家网红店做得还好吃！\r
林念：你喜欢就好！对了，我看你今天特地先发消息问我有没有空才过来，怎么突然这么客气？\r
苏晴眨了眨眼。\r
苏晴：还不是怕林大忙人在研发新品嘛。而且，先问清楚再行动，这可是我们高一同桌那年就立下的规矩呀。\r
林念忍不住笑出声。\r
林念：你还记着高一那件事呢！\r
\r
**【插入回忆片段 8.1：高一——成为真正的朋友】**\r
**【事件ID：EVT_FLASHBACK_HS1】**\r
\r
高一时，林念和苏晴同班同桌，性格合拍的两人很快熟悉起来。\r
某次班级活动需要制作宣传海报，林念觉得苏晴画画很好，没有提前询问就替她向班长答应了下来。\r
放学后，苏晴整理好书包，认真地看向林念。\r
\r
苏晴：我不是不想帮忙，但你以后能不能先问问我？\r
林念：啊？我以为你会喜欢。\r
苏晴：你可以觉得我适合，但不要直接替我做决定。\r
林念愣了一下，认真反思起来。\r
林念：好像确实是我没考虑到。\r
苏晴：我知道你没有恶意，所以我才直接告诉你。\r
林念：那以后我们有什么不舒服的地方，都直接说出来吧。\r
苏晴：嗯？\r
林念：我觉得朋友之间就应该这样。小问题一直憋着，最后可能就变成大问题了。\r
苏晴：那你也要接受我直接说你哦。\r
林念：当然！\r
\r
旁白（林念视角）：\r
那天之后，我觉得苏晴是一个很特别的人。\r
她不会因为怕我不高兴，就把自己的想法藏起来。\r
我突然觉得，能遇到一个愿意认真和自己沟通的人，是一件很幸运的事情。\r
旁白：林念从这时开始，希望和苏晴做一辈子的好朋友。\r
\r
**【接续回忆片段 8.2：高二——隔壁班的好朋友】**\r
高二选科分班后，两人去了隔壁班。\r
但每到课间十分钟，林念总会出现在苏晴班级的后门；去食堂、分零食、换试卷吐槽错题、放学约着一起回家……\r
两人之间多了一句心照不宣的口头禅：「下课来找我。」\r
哪怕后来大学去了不同的城市，每个寒暑假回到栖云镇，她们依然是彼此最熟悉的陪伴。\r
\r
---\r
\r
### M5｜第一笔大型订单（含三向数值分支）\r
**【事件ID：EVT_M05_MAIN｜触发月份：M5第2个经营日】**\r
**【状态变更：解锁「定制订单系统」】**\r
\r
这天上午，一位老街坊带着女儿来到店里，希望为周末的家庭生日聚会预订一款特别的十寸双层生日蛋糕。\r
\r
顾客：念念，这是我们家今年最隆重的一次聚会，你现在是店里的主理人了，这款蛋糕的设计和口味，我们想听听你的建议！\r
林暖在旁边向女儿投来鼓励的目光。\r
林暖：念念，这笔大单由你独立接洽，按你的经营思路来定吧。\r
\r
> **【玩家选择节点 11.1（M5）：第一笔大型定制订单方案】**\r
> - **选项A：采用传统奶油装饰**（\`traditionScore + 5\`，解锁传统产品路线）\r
> - **选项B：尝试新的装饰方式**（\`innovationScore + 5\`，获得新品研发经验）\r
> - **选项C：先询问顾客具体喜好**（\`communityScore + 5\`，顾客忠诚度增加）\r
\r
**【分支A：选择「采用传统奶油装饰」】**\r
林念：阿姨，林记最拿手的就是手工打发的动物奶油裱花。我为您设计一款双层经典复古花边蛋糕，选用当季最饱满的红颜草莓做夹心，保证一家老小吃到的都是最纯正实在的林记老味道。\r
顾客欣喜地点了点头。\r
顾客：好！家里老人最认你们家的传统奶油，就按你说的办！\r
林暖欣慰地笑了笑。\r
林暖：稳扎稳打，把传统手艺做精，这可是咱们立店的根本。\r
\r
**【分支B：选择「尝试新的装饰方式」】**\r
林念：我想为您尝试一款全新的森系撞色抹面与鲜果错落装饰，内层搭配我们新研发的芋泥薄脆与抹茶双拼夹心，拍照好看，口感也更有惊喜感！\r
顾客身旁的年轻女孩眼睛一亮。\r
顾客女儿：哇，这个搭配听起来太棒了！就选这个新设计！\r
旁白：林念在制作过程中摸索出了双层异形承重的新技巧，研发经验大幅提升。\r
\r
**【分支C：选择「先询问顾客具体喜好」】**\r
林念没有急着推销方案，而是倒了两杯温水递给母女俩。\r
林念：阿姨，姐姐，家里长辈平时是不是偏爱少糖绵软的口感？小朋友有没有特别喜欢的水果或者过敏的食材？我们把家里每个人的口味都记下来，做成上下两层不同风味的专属定制款，好不好？\r
顾客感动地握住杯子。\r
顾客：念念真细心！连我们没想到的细节都替我们考虑到了，以后家里订蛋糕全找你！\r
\r
---\r
\r
### M6｜夏日生活节与第一阶段结算\r
**【事件ID：EVT_M06_MAIN｜触发月份：M6第4个经营日】**\r
**【状态变更：解锁新品——芒果慕斯（\`cake-mango\`），解锁「品牌宣传」】**\r
\r
盛夏六月，栖云镇文化广场即将举办一年一度的「夏日生活节」露天市集。\r
活动前两天傍晚，苏晴踩点回来，满头大汗地推开店门。\r
\r
苏晴：念念，幸好我提前去广场看了一眼！这次摊位全在露天草坪上，下午温度超过三十度，普通奶油蛋糕摆出去不到半小时准会化边！\r
林暖皱起眉走到柜台边。\r
林暖：露天市集没有大冷柜，而且大热天逛市集的人走得口干舌燥，太厚重的奶油蛋糕大家也没胃口。\r
林念看着果篮里金黄饱满的台农芒果，眼睛一亮。\r
林念：那我们就专门为市集做一款冰凉清爽的「芒果慕斯（\`cake-mango\`）」！用新鲜芒果泥融合慕斯，装进带独立冰袋底座的透明方杯里，客人拿着小勺就能边走边吃，完全不怕热！\r
林暖赞许地点头。\r
林暖：这个主意好，今晚妈陪你一起把慕斯杯赶出来。\r
\r
周六清晨，林念和林暖推着保温箱来到广场草坪。\r
看着隔壁装潢时髦的网红咖啡车，再看看自家的旧折叠木桌，林念心里有些打鼓。\r
这时，苏晴抱来了一大箱布展道具，麻利地铺开米白亚麻桌布，摆上藤编托盘、小雏菊和暖黄色灯串，又立起一块手写小黑板——「林记烘焙：栖云镇三十年的老味道，也有夏天的第一口冰凉」。\r
\r
苏晴端起相机比了个大拇指。\r
苏晴：看！暖奶油色系的展台配着金黄澄澈的芒果慕斯，在阳光下特别出片！\r
林念惊喜地看着焕然一新的展台。\r
林念：苏晴，太好看了！这下我彻底有底气了！\r
\r
开集后，一位年轻妈妈牵着因为天热哭闹的小女孩路过摊位。\r
林念主动蹲下身，递过去一小杯试吃装的芒果慕斯。\r
林念：小朋友，要不要尝一口冰冰凉凉的芒果小蛋糕呀？\r
小女孩挖了一口放进嘴里，酸甜冰爽的果香化开，一下子破涕为笑。\r
小女孩：妈妈，这个黄黄的小蛋糕好冰好甜呀！\r
年轻妈妈尝了一口，也眼前一亮。\r
年轻妈妈：真好吃，一点都不腻！老板，给我拿四杯芒果慕斯，再拿两盒芋泥薄脆！\r
苏晴按下快门，笑眯眯地从随身打印机里抽出一张母女合影送给客人。\r
苏晴：姐姐，今天在林记买甜点，免费送一张夏日市集纪念照哦！\r
\r
不到下午四点，两百杯芒果慕斯便被抢购一空。\r
傍晚收摊时，晚霞铺满天际，林念看着苏晴相机里一张张年轻食客的笑脸，心里豁然开朗。\r
林念：苏晴，今天真的多亏有你。我第一次真切地觉得，原来三十年的老店，也可以在年轻人的世界里拥有全新的品牌形象。\r
苏晴笑着拍了拍她的肩膀。\r
苏晴：这还只是刚刚开始呢，林老板！\r
\r
---\r
\r
### 【M6月末：第一阶段目标结算】\r
**【检查条件（三项完成两项即可进入第二章）：1. 社区口碑≥25；2. 解锁至少2款新品；3. 完成至少2笔定制订单】**\r
\r
#### ▶ 分支一：阶段达标（进入第二章）\r
**【状态变更：解锁 LV2 精致烘焙店（shop-lv2）筹备与展示柜扩容】**\r
林暖看着账本上稳步增长的营收与市集带回来的满墙好评，欣慰地看向林念。\r
林暖：短短半年，你不仅把老顾客照顾得妥妥帖帖，还带着林记走出了老街。妈攒了一笔装修基金，下个月咱们把展示柜升级成三层，再换上暖黄色的吊灯，让林记真正焕然一新！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.1《街角的灯》\r
**【事件ID：EVT_SHORT_END_01｜触发条件：M6结算完成目标数 < 2】**\r
\r
夏夜的晚风吹过栖云镇的街角，林记烘焙的木门轻轻合上。\r
这半年里，林念并没有做出惊人的商业成绩，但在日复一日揉面、打发奶油的过程中，那些因为毕业求职失利而产生的焦虑，早已被烤箱里的香气抚平了。\r
陈奶奶像往常一样在傍晚来买走最后一块原味蛋糕。\r
\r
陈奶奶：念念呀，现在每天路过林记，看到你在柜台后头笑眯眯的样子，奶奶心里就踏实。\r
林暖端着刚泡好的菊花茶从后厨走出来。\r
林暖：念念，这半年累坏了吧？妈看你现在做事越来越稳当，哪怕咱们不去外头争什么大名气，守着这家店也是稳稳当当的幸福。\r
苏晴背着相机推门进来，熟稔地坐到靠窗的旧木桌旁。\r
苏晴：念念，现在这样每天烤烤蛋糕、晒晒太阳，感觉怎么样？\r
林念看着窗外暖黄的路灯，笑着舒了一口气。\r
林念：以前我总怕自己落后别人一步。现在才发现，我其实很喜欢现在的生活。不用急着去追逐多么宏大的目标，先把眼前这间小店经营好，就已经很好了。\r
\r
旁白：一家小店，一盏街角的暖灯，一种自己喜欢的生活。\r
旁白：【达成阶段短线结局：《街角的灯》】\r
\r
---\r
\r
## 第二章：熟悉的味道（第7—12个月）\r
**章节主题：老店与新品牌**\r
**本阶段登场人物：林念、林暖、苏晴、周雨桐（M8加入）、陈奶奶**\r
\r
### M7｜热闹的除夕\r
**【事件ID：EVT_M07_MAIN｜触发月份：M7（除夕节日节点）】**\r
**【状态变更：解锁「节日订单系统」】**\r
\r
进入第七个月，换上暖黄色吊灯、三层玻璃展示柜与奶油白墙面的林记（\`shop-lv2\`），在寒冬腊月里显得格外温暖明亮。\r
除夕前夕，柜台上的红色预订本已经记了厚厚一沓。\r
\r
林暖将预订本递给林念。\r
林暖：念念，往年除夕这三天的排产都是妈来排。今年整整六十多份团圆蛋糕，你来统筹试试？\r
林念翻开预订本，认真核对起来。\r
林念：妈，交给我吧！我把取货时间按早、中、晚分成三批，提前烤好戚风胚分批抹面，绝不耽误大家吃年夜饭。\r
\r
除夕当天下午，苏晴特意拎着一篮砂糖橘来店里探班，顺便帮母女俩给蛋糕盒系红丝带。\r
苏晴：天呐，你们这后厨简直像过年迎财神一样热闹！我已经帮你们系了三十个蝴蝶结啦！\r
直到傍晚六点，夜空升起第一簇除夕烟花，最后一份预订蛋糕顺利交到了客人手中。\r
林暖端出三碗热腾腾的酒酿小圆子放到桌上。\r
林暖：辛苦咱们的大掌柜和晴晴大功臣了！快趁热吃，吃了圆子，明年咱们林记更红火！\r
林念捧着温热的瓷碗，看着窗外的烟花露出了灿烂的笑容。\r
\r
---\r
\r
### M8｜新的帮手：周雨桐加入（含培养方式分支）\r
**【事件ID：EVT_M08_MAIN｜触发月份：M8第1个经营日】**\r
**【状态变更：解锁「员工系统」，周雨桐加入，解锁新品——提拉米苏（\`cake-tiramisu\`）】**\r
\r
春节过后，随着新品「提拉米苏（\`cake-tiramisu\`）」上市，单靠林念和林暖两个人已经忙不过来日常生产。\r
这天下午，苏晴正坐在吧台边试吃提拉米苏，门口走进来一个二十岁上下、扎着低马尾的女孩。\r
她是中职烹饪相关专业毕业的周雨桐（小雨），双手局促地捏着帆布包带子。\r
\r
周雨桐：林、林店长您好……我叫周雨桐，大家可以叫我小雨。我之前学过西点基础，实习后发现自己真正喜欢的还是做蛋糕……请问这里还在招烘焙学徒吗？\r
林念温和地请她在木桌旁坐下。\r
林念：当然在招，别紧张，先喝口水。平时自己喜欢做哪些甜点呀？\r
周雨桐从包里拿出一本贴着水果贴纸的笔记，声音轻轻的。\r
周雨桐：我平时特别喜欢研究水果、奶油和不同夹心的搭配……不过我还没在这么好的店里正式工作过，我怕自己手脚不够快，会给店里添乱……\r
林暖在旁边看了一眼小雨工整的笔记，笑着对林念点了点头。\r
苏晴也友善地朝小雨眨眨眼。\r
苏晴：小雨妹妹别怕，我们林老板可温柔啦，从来不凶人的！\r
林念笑着合上笔记。\r
林念：小雨，欢迎你加入林记。只要你真心喜欢做蛋糕，这里就有你的位置。\r
\r
在带教小雨处理水果与准备原料的第一周，林念选择了自己的指导方式：\r
\r
> **【玩家选择节点 7.2-1（M8）：对待学徒小雨的指导方式】**\r
> - **选项A：耐心指导**（手把手带着她熟悉流程，小雨信赖度 +10）\r
> - **选项B：鼓励尝试**（夸奖她的切果刀工，鼓励她大胆上手，小雨信赖度 +8，专业能力 +5）\r
> - **选项C：严格要求**（明确每一项原料克重与卫生标准，小雨专业能力 +10，信赖度 +3）\r
\r
**【分支A：耐心指导】**\r
林念：小雨，刚来不用急着求快，我先带你把店里常用的水果切配和奶油打发状态过一遍，有任何拿不准的随时问我。\r
周雨桐感激地点了点头。\r
周雨桐：谢谢念念姐！有你带着我，我心里踏实多了。\r
\r
**【分支B：鼓励尝试】**\r
林念：小雨，你看你切出来的草莓厚薄几乎一模一样，基本功很扎实呀！下午这批杯子蛋糕的装饰你大胆试试，我相信你的审美！\r
周雨桐眼睛微微亮起。\r
周雨桐：真的吗？那、那我认真试试看！\r
\r
**【分支C：严格要求】**\r
林念：小雨，林记的老顾客对口味非常敏感，所以不管是筛面粉还是称糖，每一克都不能马虎。我们从第一天起就把标准立好，好吗？\r
周雨桐立刻挺直腰板。\r
周雨桐：明白！我一定严格按照克重表操作，绝不偷懒！\r
\r
---\r
\r
### M9｜小雨的第一次独立制作 & 苏晴的生日\r
**【事件ID：EVT_M09_MAIN｜触发月份：M9第3个经营日】**\r
**【状态变更：解锁「员工培养与培训系统」】**\r
\r
来到林记满一个月后，林念让小雨尝试独立完成一只六寸草莓奶油蛋糕。\r
小雨屏住呼吸转着裱花台，林暖在旁温和地指点她手腕发力的角度。\r
当成品顺利放进展示柜并被顾客买走时，小雨激动得脸颊通红。\r
\r
周雨桐：念念姐，林阿姨，客人真的买走我做的蛋糕了！\r
林暖笑着拍拍她的手背。\r
林暖：咱们小雨手巧又用心，以后准能成大器。\r
\r
同月也是苏晴22岁的生日。\r
林念和小雨一起挑了一整篮成熟度极佳的波姬红无花果，为苏晴烤制了一款专属的无花果奶油蛋糕。\r
晚上打烊后，苏晴看着切面如繁花绽放的无花果蛋糕，惊喜得合不拢嘴。\r
\r
苏晴：哇！是我最爱的无花果！小雨切的无花果花瓣也太整齐了吧！\r
周雨桐腼腆地笑了笑。\r
周雨桐：祝苏晴姐生日快乐！这是念念姐专门按你的口味调的轻奶油配方呢。\r
林念把第一块蛋糕递给苏晴。\r
林念：祝我们的苏大摄影师二十二岁生日快乐，永远拍自己想拍的风景！\r
\r
---\r
\r
### M10｜开启线上销售与无花果奶油上市\r
**【事件ID：EVT_M10_MAIN｜触发月份：M10第1个经营日】**\r
**【状态变更：解锁「线上经营系统」，解锁新品——无花果奶油（\`cake-fig\`）】**\r
\r
苏晴把生日蛋糕照片发到网上后，引来许多本地年轻人的询问。\r
第二天一早，苏晴便扛着影棚灯来到店里。\r
\r
苏晴：念念，好多上班族私信问能不能手机下单同城配送！咱们干脆把「无花果奶油（\`cake-fig\`）」正式上架，我今天帮店里所有蛋糕拍一套线上菜单写真！\r
周雨桐抱着一摞加固纸盒从后厨跑出来。\r
周雨桐：念念姐，我已经试好了带防滑底托的配送盒，骑手送货绝对不会蹭花奶油！\r
林暖在旁笑呵呵地看着三个忙活的年轻人。\r
林暖：线上这些新鲜玩意儿妈不懂，就全看你们年轻人的啦！\r
林念欣喜地点头。\r
林念：好！今天起，「林记烘焙线上小店」正式上线！\r
\r
---\r
\r
### M11｜藏起来的小本子（周雨桐核心成长事件）\r
**【事件ID：EVT_M11_YUTONG_BOOK｜触发条件：M11—M13期间，小雨信赖度 ≥ 60 且完成至少2次员工互动】**\r
\r
这天打烊后，林念回后厨拿落下的钥匙，却看见小雨一个人坐在角落的工作台前，正对着一本旧本子写写画画。\r
听到脚步声，小雨慌忙想把本子合上，林念温和地走过去。\r
本子摊开的那一页上，画满了精致的蛋糕草图，记录着许多水果、奶油与夹心的搭配想法。\r
\r
周雨桐：我有时候会想一些蛋糕的搭配，但是一直没有机会真正做出来。\r
林念：为什么不试试？\r
周雨桐：我怕做得不好。\r
林念：那就先做一小批，慢慢调整嘛。\r
\r
> **【玩家选择节点 7.2-2（M11）：回应小雨的创意本】**\r
> - **选项A：支持她独立完成一次新品试制**（小雨信赖度 +15，专业能力 +10，\`innovationScore + 5\`）\r
> - **选项B：与她一起研究配方**（小雨信赖度 +12，专业能力 +8，\`communityScore + 3\`）\r
> - **选项C：鼓励她先整理思路，再安排试制**（小雨信赖度 +8，专业能力 +5，\`efficiencyScore + 3\`）\r
\r
**【分支A：选择「支持她独立完成一次新品试制」】**\r
林念：小雨，后厨明天下午的烤炉和鲜果柜全归你调配！你就按本子上的想法，独立做一批试吃装出来，原料损耗全算店里的，放手去做！\r
周雨桐怔怔地看着林念，眼眶微微泛红。\r
周雨桐：念念姐……真的可以让我自己做主试一次吗？我一定全力以赴！\r
\r
**【分支B：选择「与她一起研究配方」】**\r
林念：你对水果风味的直觉比我还敏锐，缺的只是一点量产配比的经验。明天下班后我留下来陪你，我们一起把你画的这款水果蛋糕变成真正的配方！\r
周雨桐露出了安心的笑容。\r
周雨桐：嗯！有念念姐陪着我，我就什么都不怕了！\r
\r
**【分支C：选择「鼓励她先整理思路，再安排试制」】**\r
林念：这些点子都特别棒！小雨，你这周先把最想做的那款水果搭配整理成标准克重表，周五下午我们专门安排一次正式试制评审。\r
周雨桐用力点了点头。\r
周雨桐：好！我今晚就把克重和步骤整理得清清楚楚！\r
\r
**【主线汇合】**\r
几天后，小雨的第一款原创创意水果蛋糕成功出炉。林暖尝了第一口便连声夸赞，苏晴更是专程赶来为小雨和她的作品拍下了专属纪念照。\r
旁白：【系统提示：解锁小雨个人相册、小雨专属蛋糕与新品研发能力！】\r
\r
---\r
\r
### M12｜林记的三十多年与第二阶段结算\r
**【事件ID：EVT_M12_MAIN｜触发月份：M12第3个经营日】**\r
**【状态变更：解锁「配方笔记图鉴」，解锁新品——季节水果蛋糕（\`cake-seasonal\`）】**\r
\r
接手林记满一年的冬夜，结合小雨的果味灵感与外婆戚风底方的「季节水果蛋糕（\`cake-seasonal\`）」正式上架。\r
打烊后，林暖捧出一个珍藏多年的铁皮盒，叫来林念、小雨和刚拍完照的苏晴一起围坐在木桌旁。\r
盒子里是一叠泛黄的老照片，以及外婆留下的手写《配方笔记》。\r
\r
林暖轻声抚过照片上三十多年前的小铺子。\r
林暖：念念，当年你外婆带着我守着一口老烤炉的时候，怎么也想不到，有一天她的外孙女会把林记的蛋糕卖到线上去，还带出了小雨这么有灵气的伙伴。\r
周雨桐双手捧着热茶，眼神里满是憧憬。\r
周雨桐：外婆的字写得好工整呀，每一页都记着当年的食材脾气。\r
苏晴举起相机拍下桌上的旧配方本。\r
苏晴：这就是三代人的接力棒呀！念念，往后的页数就该你和小雨一起写啦。\r
林念握紧手中的钢笔，重重地点了点头。\r
林念：妈，这本笔记我会一页一页继续往下写的。\r
\r
---\r
\r
### 【M12月末：第二阶段目标结算】\r
**【检查条件（四项完成两项即可进入第三章）：1. 店铺升级至LV2；2. 累计完成8笔线上订单；3. 研发至少3款新品；4. 完成年度节日订单目标】**\r
\r
#### ▶ 分支一：阶段达标（进入第三章）\r
林记烘焙成功建立起稳定的线上预订渠道与丰富的时令产品线，小雨也正式转为全职烘焙师。面对不断增长的订单，林念准备迎接新的伙伴与更大的舞台。\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.2《熟悉的味道》\r
**【事件ID：EVT_SHORT_END_02｜触发条件：M12结算完成目标数 < 2】**\r
\r
一年过去，林记依然是栖云镇那家熟悉的老店。\r
又逢除夕夜，店里的长桌上摆满了提前预订的蛋糕。\r
陈奶奶提着红色的蛋糕盒，笑眯眯地看向柜台后的林念、林暖和小雨。\r
\r
陈奶奶：还是你们家的蛋糕好吃，这么多年都没变。只要林记还开在街口，咱们镇上的年味儿就还在。\r
周雨桐开心地替陈奶奶掀开门帘。\r
周雨桐：陈奶奶您慢走，明年我们还给您留最甜的草莓！\r
苏晴坐在吧台边晃着相机，笑吟吟地看向林念。\r
苏晴：林老板，虽然咱们没搞什么线上大扩张，但你看店里热热闹闹的，多好呀。\r
林暖温和地替女儿拂去围裙上的面粉。\r
林暖：是啊，一步一个脚印守着大家熟悉的味道，妈觉得比什么都强。\r
林念看着忙碌的母亲、认真的小雨和熟悉的街坊，心里无比踏实。\r
林念：嗯，这样就已经很好了。\r
\r
旁白：没有成为大品牌，但林记依然是大家熟悉的林记。\r
旁白：【达成阶段短线结局：《熟悉的味道》】\r
\r
---\r
\r
## 第三章：让林记走得更远（第13—18个月）\r
**章节主题：品牌升级与团队磨合**\r
**本阶段登场人物：林念、林暖、苏晴、周雨桐、许知遥（M14加入）、唐鸢（M18加入）**\r
\r
### M13｜产品标准化（含三向数值分支）\r
**【事件ID：EVT_M13_MAIN｜触发月份：M13第2个经营日】**\r
**【状态变更：解锁「配方标准化系统」】**\r
\r
进入第二年，随着每日出货量翻倍，林念和周雨桐在核对线上评价时发现：不同批次的产品偶尔会出现细微的口味差异。\r
林暖也建议林念趁着团队扩大前，把店里的配方规矩立起来。\r
\r
周雨桐拿着记录本问林念。\r
周雨桐：念念姐，那我们要把所有配方都改成精确到克和秒的标准手册吗？\r
\r
> **【玩家选择节点 11.2（M13）：产品标准化的方向】**\r
> - **选项A：坚持手工制作**（\`traditionScore + 8\`，产品特色更强，熟客满意度提升）\r
> - **选项B：引入统一制作流程**（\`efficiencyScore + 8\`，制作体力消耗降低，后续更容易发展多门店）\r
> - **选项C：保留核心手工步骤，其他流程标准化**（\`traditionScore + 4, efficiencyScore + 4\`，获得平衡路线奖励）\r
\r
**【分支A：选择「坚持手工制作」】**\r
林念：林记的灵魂就在于手工打发和根据每日鲜果状态微调的细腻感。我们统一原料品质标准，但保留烘焙师手工操作与现制装饰的传统。\r
林暖赞许地点头。\r
林暖：没错，老顾客吃的就是这份手工的鲜活气儿。\r
\r
**【分支B：选择「引入统一制作流程」】**\r
林念：要想让每一位客人吃到的每一块蛋糕都毫无落差，我们必须把所有原料克重、搅拌时间、烤箱温区全部量化成标准作业表！\r
周雨桐认真地记在笔记本上。\r
周雨桐：好！我这就把后厨的电子秤和计时器全部重新校准一遍！\r
\r
**【分支C：选择「保留核心手工步骤，其他流程标准化」】**\r
林念：我们把前面的原料称配、蛋糕胚烘烤全部做成标准流程，提高效率；而最关键的果酱熬制和奶油裱花依然保留手工微调，兼顾稳定与温度。\r
周雨桐眼睛一亮。\r
周雨桐：这样既不会出错，又能保留每一批水果最好的味道！\r
\r
---\r
\r
### M14｜许知遥加入\r
**【事件ID：EVT_M14_MAIN｜触发月份：M14第1个经营日】**\r
**【状态变更：解锁「订单运营系统」，许知遥加入】**\r
\r
随着线上预订和日常客流同步增长，前厅接待急需专人负责。\r
这天上午，曾有咖啡店和零售服务经验的23岁女孩许知遥来到林记应聘门店运营。\r
\r
许知遥：林店长你好！我叫许知遥。我最擅长的就是跟客人打交道，只要来过店里两次的熟客，他们的口味偏好我基本都能记住！\r
林念微笑着伸出手。\r
林念：太好了，我们现在最缺的就是能把前厅和订单沟通撑起来的伙伴，欢迎你加入林记！\r
\r
知遥入职后的第一周，把前厅招呼得热火朝天，连来串门的苏晴都夸她嘴甜。\r
但到了周五傍晚核对周末定制单时，知遥却拿着两张撞期的取货单，急得红了脸。\r
许知遥：念念、小雨……对不起！今天下午客人太多，我光顾着跟熟客聊天，顺手接了线上两笔加急单，忘了看后厨明早的烤炉上限……\r
周雨桐温声安慰她。\r
周雨桐：知遥姐别急，明早我和念念姐早点来烤胚，还赶得上！\r
许知遥垂下脑袋，有些泄气。\r
许知遥：我以前只管前台点单，从来没管过这么复杂的排期，我是不是管不好订单运营呀……\r
林念把一张画好格子的表格放到她面前。\r
林念：怎么会呢？你能把熟客喜好全记住，这是谁都比不了的本事。从今天起，我们用这张「时段排期核对表」配合你的熟客笔记，每接一单划掉一格，肯定不会再乱了。\r
许知遥重拾信心，用力点了点头。\r
许知遥：好！谢谢念念和小雨，我一定把表格用熟！\r
\r
---\r
\r
### M15｜跨界合作 & 小雨的职业理想 & 苏晴的作品展\r
**【事件ID：EVT_M15_MAIN｜触发月份：M15第3个经营日】**\r
**【状态变更：解锁「商业合作玩法」】**\r
\r
三月春暖，林记与当地精品咖啡馆合作推出下午茶联名套餐，由许知遥负责对接配送，小雨负责制作茶味切块，苏晴负责拍摄联名海报。\r
拍摄间隙，苏晴兴奋地打开平板电脑递给林念、小雨和知遥看。\r
\r
苏晴：给大家宣布个好消息！我独立拍摄的《小镇手艺人》摄影集，下个月就要在省城青年摄影展上展出了！\r
林念由衷地抱了抱好友。\r
林念：苏晴，太为你骄傲了！等展览开幕，我们全店去给你捧场！\r
许知遥拍手笑道。\r
许知遥：到时候我们林记给你包一个庆功甜品台！\r
\r
傍晚回到后厨，正在整理配方的周雨桐也轻轻叫住了林念。\r
周雨桐：念念姐，看着苏晴姐和你都有了自己热爱的事业，我也想清楚了。我以前只想找份稳定的工作，但现在，我想把烘焙当成自己一辈子的事业来做。\r
林念温和地拍了拍她的肩膀。\r
林念：小雨，不必急着证明自己，按照你的步调继续尝试，我们一起走下去。\r
\r
---\r
\r
### M16｜婚礼甜品台与定制升级\r
**【事件ID：EVT_M16_MAIN｜触发月份：M16第2个经营日】**\r
**【状态变更：解锁「大型活动订单」，解锁新品——生日定制蛋糕（\`cake-custom\`）】**\r
\r
四月中旬，林记接到了第一笔百人份户外草坪婚礼甜品台订单，同时正式解锁「生日定制蛋糕（\`cake-custom\`）」。\r
出餐前夜，林暖特意来后厨帮林念和小雨检查双层翻糖与动物奶油的承重支架。\r
\r
林暖：户外草坪风大温度高，支架卡扣一定要锁紧。\r
周雨桐认真地核对着慕斯杯托盘。\r
周雨桐：林阿姨放心，两百份鲜果慕斯杯我都加了吉列丁稳固层！\r
许知遥拿着对讲机和流程表走进来。\r
许知遥：冷链车和婚礼督导我已经对接过三遍了，明天现场动线包在我身上！\r
\r
婚礼当天，布置在草坪上的甜品台惊艳全场，连受邀担任婚礼跟拍的苏晴都忍不住给林记团队拍了一张工作合影。\r
看着独当一面的小雨和井井有条的知遥，林念第一次体会到团队并肩作战的踏实感。\r
\r
---\r
\r
### M17｜临江市考察\r
**【事件ID：EVT_M17_MAIN｜触发月份：M17第3个经营日】**\r
**【状态变更：解锁「外出考察行动」】**\r
\r
周末，林念准备前往邻近的临江市考察商圈市场。\r
出发前，伙伴们纷纷在店里帮她出谋划策。\r
\r
林暖递给女儿一只装满试吃切块的保温袋。\r
林暖：去大城市看铺子别心急，多看看那边的街坊和年轻人平时都爱逛哪儿。\r
许知遥递上一张手绘地图。\r
许知遥：念念，我以前在临江市的咖啡店兼职过，这几个写字楼商圈下午茶需求特别大，我都给你标出来啦！\r
苏晴背起相机包走过来。\r
苏晴：今天我正好去临江市冲印胶片，陪你一起去踩点！\r
\r
在临江市考察的两天里，林念详细记录下不同商圈的消费习惯与经营成本，开设第一家分店的蓝图在心中渐渐清晰。\r
\r
---\r
\r
### M18｜唐鸢加入与第三阶段结算\r
**【事件ID：EVT_M18_MAIN｜触发月份：M18第1个经营日】**\r
**【状态变更：解锁「专业生产管理」，唐鸢加入】**\r
\r
为了筹备分店与生产升级，曾在大型连锁烘焙品牌工作的27岁资深烘焙师唐鸢正式加入林记。\r
入职第三天，唐鸢便拿着秒表和损耗记录板召集了后厨会议。\r
\r
唐鸢：林店长，我观察了三天后厨。林记的味道很好，但制作流程太依赖个人手感了。小雨切水果讲究造型，但耗时偏长；烤炉排班也没有精确到分钟。如果要开分店，这样的效率是不够的。\r
周雨桐紧张地低下头。\r
周雨桐：对不起鸢姐，我以后一定加快速度……\r
许知遥在旁小声打圆场。\r
许知遥：鸢姐，小雨切的水果造型客人们可喜欢了，每次发到网上都有人夸呢。\r
林念平静地接过唐鸢的记录板。\r
林念：鸢姐，你指出的效率问题非常专业，这也是我请你来的原因。但林记立足三十年靠的是手工的温度，我们不能为了快而牺牲品质。接下来，由你负责建立标准化备料流程，小雨负责保留核心风味与装饰灵气，我们一起磨合出属于林记的标准，好吗？\r
唐鸢推了推眼镜，看向林念认真而坚定的眼神，点了点头。\r
唐鸢：好，那就用这个月的出品数据说话。\r
\r
---\r
\r
### 【M18月末：第三阶段目标结算】\r
**【检查条件（四项完成两项即可进入第四章）：1. 产品平均品质≥3级；2. 完成至少3款标准化配方；3. 店铺口碑≥45；4. 至少一名员工专业能力≥3级】**\r
\r
#### ▶ 分支一：阶段达标（进入第四章）\r
经过一个月的磨合，唐鸢的严谨标准与小雨的灵气、知遥的周到逐渐融为一体。林记烘焙正式解锁「分店筹备与多渠道拓展系统」！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.3《小小的团队》\r
**【事件ID：EVT_SHORT_END_03｜触发条件：M18结算完成目标数 < 2】**\r
\r
一年半的时间匆匆而过。\r
在尝试推进标准化与团队磨合的过程中，林念发现，经营好栖云镇的这一家店，其实已经占据了自己大部分精力。\r
这天傍晚打烊后，林念把大家召集到木桌旁，端出了刚烤好的提拉米苏。\r
\r
林念：这段时间为了追赶扩张指标，大家都绷得太紧了。我想好了，我们暂时不去外地开分店了，就留在栖云镇，把我们这家店经营好。\r
周雨桐松了一口气，露出甜甜的笑容。\r
周雨桐：真的吗？其实我最喜欢每天在老店后厨和大家一起研究新口味了！\r
许知遥笑着举起果汁杯。\r
许知遥：不管开不开分店，只要跟大家在一起工作，我每天都超开心！\r
唐鸢神色柔和下来，轻轻推了推眼镜。\r
唐鸢：虽然规模不大，但能把每一块蛋糕做到极致，也是一种专业。\r
林暖和背着相机进门的苏晴相视一笑。\r
苏晴：太好啦！那我的镜头就继续锁定我们栖云镇最快乐的烘焙小分队咯！\r
\r
旁白：林念第一次明白，经营事业不一定要不断扩大规模。有一群可靠的伙伴，有一家喜欢的店，就已经很好。\r
旁白：【达成阶段短线结局：《小小的团队》】\r
\r
---\r
\r
## 第四章：从一家店到一支团队（第19—24个月）\r
**章节主题：信任与责任**\r
**本阶段登场人物：林念、林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河（M21加入）**\r
\r
### M19｜分店筹备与知遥的管理理想（含三向路线分支）\r
**【事件ID：EVT_M19_MAIN｜触发月份：M19第1个经营日】**\r
**【状态变更：解锁「分店系统」与知遥个人剧情】**\r
\r
进入第四章，林记烘焙正式站在了业务扩张的十字路口。\r
这天打烊后，林暖、周雨桐和唐鸢在后厨盘点设备，许知遥拿着一摞装订整齐的报表走进办公室，神情既认真又有些紧张。\r
\r
**【若许知遥信赖度 ≥ 60，额外触发个人交心剧情 \`EVT_M19_ZHIYAO_DREAM\`】**：\r
林念翻看着条理清晰的《跨渠道订单与熟客复购分析方案》，惊讶地抬起头。\r
林念：知遥，这份订单分流和预约预警机制全是你自己利用下班时间设计的？\r
许知遥不好意思地挠了挠头。\r
许知遥：念念，以前我在咖啡店打工的时候，店长总说我只会跟客人热络聊天，管不好账目和库存。但来到林记这一年，每次我疏忽了，你和小雨、鸢姐都手把手教我用表格和制度去补救……\r
许知遥深吸了一口气，眼睛亮晶晶地看着林念。\r
许知遥：其实我心里一直藏着一个目标——我希望有一天，自己也能成为一名真正独当一面的店长，独立负责一家门店！\r
林念笑着合上文件夹，郑重地递还到她手里。\r
林念：知遥，你的沟通天赋加上现在的管理条理，早就具备店长的实力了。机会已经来了，我们一起把新业务做起来！\r
\r
林念召集林暖、小雨、知遥、阿鸢一起商议扩张方案，并叫来刚拍完外景的苏晴听听年轻消费者的看法：\r
\r
> **【玩家选择节点 11.3（M19）：业务扩张路线】**\r
> - **选项A：立即筹备实体分店**（投入资金较大，扩张速度快，\`efficiencyScore + 8\`）\r
> - **选项B：先发展线上销售**（投入较低，解锁线上品牌深度路线，\`innovationScore + 6\`）\r
> - **选项C：与其他店铺合作**（解锁商业联名与专柜合作路线，\`communityScore + 6\`）\r
\r
**【分支A：选择「立即筹备实体分店」】**\r
林念：我们正式在临江市筹备第一家实体直营分店！知遥，新店的前厅筹建和开业活动交给你来挑大梁；鸢姐和小雨负责两家店的统一生产配比！\r
许知遥激动地站起身。\r
许知遥：保证完成任务！我一定把临江分店管得妥妥帖帖！\r
唐鸢点了点头。\r
唐鸢：后厨的跨店备料标准我已经拟好初稿了，随时可以启动。\r
\r
**【分支B：选择「先发展线上销售」】**\r
林念：我们先全面升级线上商城与冷链包装，开通临江市与周边城镇的「次日达鲜作蛋糕专线」！知遥，线上运营中心和客服团队就由你来担任负责人！\r
周雨桐举起手。\r
周雨桐：那我和鸢姐一起优化适合冷链运输的慕斯夹心结构！\r
\r
**【分支C：选择「与其他店铺合作」】**\r
林念：我们与临江市及周边的十家独立咖啡馆、人文书店建立每日鲜配甜品专柜！知遥，各合作门店的每日配送对接与驻店展陈就交给你统筹了！\r
苏晴笑着鼓掌。\r
苏晴：那些独立书店和咖啡馆我都熟，宣传照包在我身上！\r
\r
---\r
\r
### M20｜业务落地与节日限定发布\r
**【事件ID：EVT_M20_MAIN｜触发月份：M20第2个经营日】**\r
**【状态变更：解锁「多渠道/分店经营」，解锁新品——节日限定蛋糕（\`cake-festival\`），解锁LV3品牌旗舰店（shop-lv3）升级权限】**\r
\r
经过一个月的紧张筹备，临江分店（或跨城线上中心/城市合作专柜）正式落地运营。\r
开业当天清晨，林念带着林暖、小雨、阿鸢和苏晴一起来到现场支持许知遥。\r
只见知遥身穿整洁的店长制服，手里拿着运营核对板，从容不迫地安排着试吃引导、收银打包与冷链交接。\r
\r
许知遥擦了擦额角的汗，兴奋地跑向大家。\r
许知遥：念念、林阿姨，你们看！今天一上午三百多单开业礼盒，零差错、零漏单！\r
林暖欣慰地拍了拍知遥的手。\r
林暖：知遥这丫头现在管起店来，真是一点都不含糊。\r
周雨桐端出一盘融合传统红曲与绵密栗蓉的新品切块。\r
周雨桐：鸢姐带我烤的「节日限定蛋糕（\`cake-festival\`）」也出炉啦，试吃的客人都说特别有节庆气氛！\r
苏晴举起相机对准众人。\r
苏晴：来，庆祝我们知遥店长正式上任，也庆祝栖云镇老店升级成LV3品牌旗舰店，大家看镜头笑一个！\r
\r
---\r
\r
### M21｜叶星河加入品牌视觉合作 & 唐鸢的尘封配方\r
**【事件ID：EVT_M21_MAIN｜触发月份：M21第2个经营日】**\r
**【状态变更：解锁「品牌视觉系统」，叶星河开始合作】**\r
\r
**【第一幕：理想主义设计师的碰撞】**\r
随着林记走入更多年轻人的视野，原有的普通纸盒已经跟不上品牌的升级步伐。\r
经苏晴引荐，22岁的自由插画师、品牌设计师叶星河背着画夹来到了林记。\r
她一进门，就兴冲冲地在木桌上铺开了自己设计的包装初稿。\r
\r
叶星河：林店长、苏晴姐，快看！这是我为林记设计的「云端花语」立体折纸蛋糕盒！客人解开丝带的时候，四个盒角会像花瓣一样层层展开，每一面都有我手绘的水彩插画！\r
周雨桐凑过去看，忍不住发出赞叹。\r
周雨桐：哇……上面的草莓和桂花画得好温柔呀，像童话书一样！\r
旁边的唐鸢拿起打样纸盒试折了一下，眉头却立刻皱了起来。\r
唐鸢：叶设计师，你这个盒子折一个需要整整两分半钟，而且顶部全是镂空花瓣，根本没有支撑力。两个盒子一叠放，里面的奶油蛋糕当场就会被压塌。\r
叶星河脸上的笑容一下子僵住了，有些委屈地抱紧画夹。\r
叶星河：可是……如果做成那种四四方方、硬邦邦的普通盒子，我的插画不就变成流水线印刷品了吗？那样还有什么艺术感呀……\r
许知遥见气氛有些僵，连忙端来一杯热花茶打圆场。\r
许知遥：星河妹妹先喝口茶，鸢姐也是担心配送路上蛋糕被压坏了客人会心疼嘛。\r
林念温和地接过画稿，拿起铅笔在草图纸边轻轻画了一个结构。\r
林念：星河，你的水彩笔触特别温暖，一下子就抓住了林记的气质。但商业包装首先要保护好里面的蛋糕，还要让店员十秒内能折好。\r
林念指了指纸上的草图。\r
林念：你看，如果我们把盒体改成鸢姐要求的五层加厚卡扣方盒，保证承重稳固；但在盒子外面加一层你设计的「镂空水彩抽拉腰封」，客人抽开腰封的瞬间，就像拉开画卷一样看到里面的蛋糕——这样是不是既保住了你的艺术巧思，又解决了后厨的实用难题？\r
叶星河怔怔地看着草图，眼睛一下子亮了起来。\r
叶星河：抽拉画卷腰封！对呀，我怎么没想到！原来好的商业设计不是自顾自地画画，而是用更巧妙的结构去帮产品说话！林店长，鸢姐，我这就回去改版！\r
\r
**【第二幕：唐鸢尘封的心愿（若唐鸢信赖度 ≥ 60 触发 \`EVT_M21_KEXIN_RECIPE\`）】**\r
这天深夜，林念巡店经过研发室时，发现唐鸢还留在操作台前，正看着一页写满批注的手写配方稿出神。\r
\r
林念轻声走过去。\r
林念：鸢姐，这么晚还没回去？\r
唐鸢合上笔记本，难得露出一丝柔和而怀念的神情。\r
唐鸢：林念，今天看你引导叶星河的样子，让我突然想起了几年前的自己。\r
林念：几年前？\r
唐鸢指了指那页手稿。\r
唐鸢：其实我刚入行的时候，最喜欢的是研发新口味。这是我三年前设计的「焦糖海盐伯爵茶千层」。当时连锁总部觉得工序比普通款多两道、利润率不够极致，直接否决了。从那以后，我就逼着自己只看效率和数字……直到来到林记，看到你和小雨对蛋糕的热情。\r
林念拿起那页保存得干干净净的手稿，认真地看向唐鸢。\r
林念：鸢姐，在林记，好味道永远不会被冰冷的数字否定。下周的研发排期，我们一起把你这款伯爵茶千层做出来！\r
唐鸢怔了一下，镜片后的眼眶微微发热，嘴角扬起一抹久违的笑容。\r
唐鸢：好。那我可要把压箱底的本事拿出来了。\r
*（支持唐鸢重新研发后，唐鸢信赖度 +15，专业能力 +10，解锁阿鸢专属研发加成）*\r
\r
---\r
\r
### M22｜多门店与多渠道业务磨合\r
**【事件ID：EVT_M22_MAIN｜触发月份：M22第3个经营日】**\r
**【状态变更：解锁「统一库存管理系统」】**\r
\r
双线业务运营满两个月后，栖云镇老店与新渠道之间的销量结构差异显现出来。\r
林念召集全员开了一场跨店协调会。\r
\r
许知遥指着统计表汇报道。\r
许知遥：念念，老店的街坊们偏爱八寸整只的传统奶油蛋糕，但新店这边的年轻白领下午三点就把切块蛋糕买光了，两边按一样的比例备货，损耗有点高。\r
唐鸢翻开生产日志。\r
唐鸢：如果两边后厨各自临时加单，原料库存很容易乱套。\r
周雨桐小声提出建议。\r
周雨桐：那我可以把戚风胚和基础奶油做成统一标准批次，早上先发往两边，到了店里再根据知遥姐的预订表做成整寸或者切块！\r
叶星河也举起手里的设计板。\r
叶星河：我刚画好了切块专用的手提三角盒和整寸礼盒的通用丝带，两边可以随时切换包装！\r
林念欣喜地看着默契配合的众人。\r
林念：太棒了！那我们今天就正式上线「统一库存与差异化备货系统」！\r
\r
---\r
\r
### M23｜与苏晴的小矛盾（含三向沟通分支，无友情BE）\r
**【事件ID：EVT_M23_MAIN｜触发月份：M23第3个经营日】**\r
\r
这段时间，林念全部身心都扑在跨店管理与新视觉落地中，连续两次因为临时处理店务推迟了和苏晴的约饭。\r
到了第三次约好的周末下午，林念处理完一笔紧急库存调拨赶到餐厅时，苏晴已经等了大半个小时。\r
苏晴面前的柠檬水已经化完了冰块。\r
\r
苏晴看着风尘仆仆坐下的林念，认真地放下了水杯。\r
苏晴：念念，我不是不能理解你忙。我只是希望你能提前告诉我，而不是让我一直等。\r
\r
> **【玩家选择节点 11.4（M23）：回应苏晴的坦诚】**\r
> - **选项A：认真解释并道歉**\r
> - **选项B：承认最近确实有些忽略朋友**\r
> - **选项C：主动约定以后提前安排时间**\r
> *（注：三种选择均能圆满解决矛盾，友情不产生BE，解锁不同温情对白）*\r
\r
**【分支A：选择「认真解释并道歉」】**\r
林念诚恳地握住苏晴的手。\r
林念：苏晴，对不起。刚才分店冷链车临时故障，我急着调度就忘了先给你发消息。不管什么原因，让你白白等这么久都是我的不对。\r
苏晴神色缓和下来。\r
苏晴：我不是怪你忙工作，只是怕你什么事都自己扛着，连跟我说一声的时间都没有。\r
\r
**【分支B：选择「承认最近确实有些忽略朋友」】**\r
林念愧疚地低下头。\r
林念：对不起苏晴……这段时间我满脑子都是报表和库存，下意识觉得你最懂我，就把你的时间排在了最后，确实忽略了你的感受。\r
苏晴轻轻叹了口气，替她理了理碎发。\r
苏晴：正因为我们是最好的朋友，有什么不舒服才更要直接说出来呀。还记得我们高一的约定吗？\r
\r
**【分支C：选择「主动约定以后提前安排时间」】**\r
林念认真地拿出随身日程本。\r
林念：苏晴，对不起！从今天起，我们每周三晚上的饭局我直接写进店长固定日程表里，天塌下来也提前半天跟你说，要是临时有急事，我就带着新烤的小蛋糕去你工作室赔罪！\r
苏晴噗嗤一声笑了出来。\r
苏晴：这还差不多！那我可记下了，林大店长不许再赖账！\r
\r
**【主线汇合】**\r
两人相视一笑，就像高一那年放学后的走廊一样，所有的芥蒂都在坦诚的沟通中烟消云散。\r
\r
---\r
\r
### M24｜二十四岁生日与第四阶段结算\r
**【事件ID：EVT_M24_MAIN｜触发月份：M24第5个经营日】**\r
**【状态变更：解锁友情相册NO.10《二十四岁的烛光》】**\r
\r
接手林记满两周年的这天，也是林念24岁的生日。\r
忙完一天的工作后，林念推开栖云镇老店的木门，屋里忽然亮起了温暖的串灯。\r
林暖、苏晴、周雨桐、许知遥、唐鸢和叶星河围站在长桌旁，桌上摆着一只由大家偷偷合作完成的双层手作生日蛋糕。\r
\r
众人：祝念念（林店长）二十四岁生日快乐！\r
周雨桐指着蛋糕夹心笑道。\r
周雨桐：念念姐，上层是我调的百香果芒果冻，下层是鸢姐烤的伯爵茶千层底！\r
叶星河指了指蛋糕顶上的水彩人物插牌。\r
叶星河：还有我画的Q版林店长！\r
许知遥递上一张写满全员留言的贺卡。\r
许知遥：这是我们大家偷偷写的祝福，林店长不许看哭哦！\r
苏晴最后递过来一只厚实的牛皮纸信封。\r
苏晴：打开看看，这是我送你的二十四岁礼物——这两年来林记每一步成长的纪实照片。\r
林暖站在女儿身边，温柔地揽住她的肩膀。\r
林暖：我们念念满二十四岁了，现在身后有一整支这么棒的队伍陪着你呢。\r
林念眼眶微湿，看着身边的家人、好友与伙伴。\r
林念：两年前刚毕业的时候，我还觉得自己什么都做不好。谢谢你们……让我知道，我已经不再是一个人经营一家店了。\r
\r
---\r
\r
### 【M24月末：第四阶段目标结算】\r
**【检查条件（四项完成两项，且至少包含第1或第2项业务扩张目标）：1. 成功开设第一家分店；2. 建立稳定的线上或商业合作渠道；3. 建立统一库存系统；4. 至少两名伙伴信赖度达到50】**\r
\r
#### ▶ 分支一：阶段达标（进入第五章）\r
林记烘焙成功迈出跨区域发展的关键一步，正式进入第五章「区域品牌发展与品牌灵魂重塑」阶段！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.4《栖云镇的招牌》\r
**【事件ID：EVT_SHORT_END_04｜触发条件：M24结算未满足扩张达标要求】**\r
\r
两年的经营时光里，林记烘焙逐渐成为了栖云镇家喻户晓的金字招牌。\r
林念尝试过向外扩张，但最终发现，比起在陌生城市里奔波应付复杂的报表，自己更喜欢守在熟悉的街巷里，把眼前的这家店做到极致。\r
她将栖云镇的门店重新装修了一番，增加了更多宽敞的座位，叶星河为墙面绘上了温馨的壁画，小雨和阿鸢在后厨从容地研发着时令点心，知遥在前厅笑吟吟地招呼着陈奶奶等老熟客。\r
\r
在一个阳光明媚的午后，苏晴站在店门外，拍下了林记最漂亮的一张照片。\r
林念靠在门框边，看着照片笑了笑。\r
林念：其实我们也没有走得很远嘛。\r
苏晴放下相机，眉眼弯弯地看向她。\r
苏晴：但是你已经把这里变成自己喜欢的样子了呀。\r
\r
旁白：没有走向全国，却成为一座小城里不可替代的存在。\r
旁白：【达成阶段短线结局：《栖云镇的招牌》】\r
\r
---\r
\r
## 第五章：找回林记的味道（第25—30个月）\r
**章节主题：传承、友情与团队（全篇最核心剧情章节）**\r
**本阶段登场人物：林念、林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河、陈奶奶**\r
\r
### M25｜进入周边城市市场 & 叶星河的作品展筹备\r
**【事件ID：EVT_M25_MAIN｜触发月份：M25第1个经营日】**\r
**【状态变更：解锁「周边城市品牌扩张」】**\r
\r
进入第三年，林记烘焙开始进入周边城市市场，并收到了省城年度盛会「江南秋日文化节」的正式参展邀请。\r
这天下午，叶星河抱着一摞画册来到店里，有些紧张地找到林念和苏晴（若叶星河信赖度 ≥ 60，触发星河个人剧情）。\r
\r
叶星河：林店长，苏晴姐，下个月青年艺术中心有个青年设计联展，我想报名参加个人作品展示，但不知道怎么把纯插画和商业包装结合起来展示，你们能帮我参谋一下吗？\r
\r
> **【玩家选择节点 7.5（M25）：帮助叶星河准备个人作品展】**\r
> - **选项A：帮助她整理作品脉络**（星河信赖度 +15，专业能力 +8）\r
> - **选项B：联系苏晴一起帮她拍摄实物产品照片**（星河信赖度 +12，专业能力 +10，\`innovationScore + 5\`）\r
> - **选项C：从经营者角度提供商业反馈**（星河信赖度 +10，专业能力 +12，\`efficiencyScore + 5\`）\r
\r
**【分支A】**\r
林念：星河，我们把你最开始的手绘原稿和最终落地的林记抽拉礼盒并排陈列，让观众一眼看到一幅插画是怎么变成温暖商品的。\r
叶星河眼睛一亮。\r
叶星河：这个展陈脉络太清晰了，谢谢林店长！\r
\r
**【分支B】**\r
林念：实物展示交给我们！我让小雨烤好全套样品，再请苏晴帮你拍一组光影质感拉满的包装实景照挂在展位上。\r
苏晴拍了拍相机包。\r
苏晴：包在我身上，保证把星河的设计拍得像艺术品一样！\r
\r
**【分支C】**\r
林念：商业设计展的评委很看重落地效果。我让知遥和鸢姐帮你整理一份新包装上线后的复购提升与损耗下降数据，附在你的设计说明旁。\r
叶星河感激地点了点头。\r
叶星河：有真实经营数据做支撑，我的方案一定能脱颖而出！\r
\r
---\r
\r
### M26｜外婆的旧配方：桂花栗子蛋糕\r
**【事件ID：EVT_M26_MAIN｜触发月份：M26第2个经营日】**\r
**【状态变更：解锁招牌研发，解锁新品——桂花栗子蛋糕（\`cake-signature\`）】**\r
**【CG：osmanthus】**\r
\r
为了筹备两个月后的「江南秋日文化节」，林念把全员召集到店里开选品会。\r
桌面上摆着好几款时下流行的新式甜点样品，但大家尝过一圈后，总觉得差了一点意思。\r
\r
周雨桐放下小勺，有些犹豫地开口。\r
周雨桐：念念姐，这几款伯爵茶慕斯和栗子蒙布朗虽然好看，但总觉得别的网红店也能做，好像少了一点一眼就能认出是「林记」的独特记忆。\r
叶星河托着腮帮子点了点头。\r
叶星河：我画秋日文化节的海报草图时也有这种感觉，总觉得缺一个有故事的核心意象。\r
唐鸢翻看着市场调研报告。\r
唐鸢：这次秋日文化节有几十家省内知名品牌参展，如果只是拿常规款去比拼，很难真正立住林记的品牌招牌。\r
\r
就在众人陷入沉思时，林暖从里屋走了出来，手里捧着那本边角泛黄的外婆旧配方本。\r
她轻轻翻到中间夹着一枚干桂花书签的一页，推到林念面前。\r
\r
林暖：念念，既然是江南的秋日文化节，不如看看你外婆当年最拿手的这款——「桂花栗子蛋糕」？\r
林念凑过去，只见泛黄的纸页上用毛笔小楷写着「金桂秋栗糕」几个字。\r
林念：桂花栗子蛋糕？妈，我小时候好像只在秋天吃过几次，后来怎么一直没见店里做过了？\r
苏晴在旁边听得眼睛一亮。\r
苏晴：我也记得！读小学那会儿，每次秋天路过你们家后巷，隔着老远都能闻到炒板栗混着桂花蜜的甜香！\r
林暖怀念地笑了笑。\r
林暖：这款蛋糕以前在栖云镇可受欢迎了，每到八月桂花一开，街坊们排队来买。但后来镇外高山油栗的进货渠道断了，再加上传统做法要手工慢火炒制栗子泥、用鲜桂花一层层窨制糖浆，太费工夫，保鲜期又短，妈一个人忙不过来，就停做了十几年。\r
\r
林念轻轻抚摸着外婆留下的字迹，心头涌起一股滚烫的冲动。\r
林念：高山秋栗的绵密醇厚，配上江南八月金桂的清雅幽香……没有什么比这款承载了林记两代人记忆的蛋糕，更适合作为我们秋日文化节的招牌主推款了！\r
许知遥兴奋地拍手。\r
许知遥：要是把这款停做了十几年的老招牌重新带回来，不仅镇上的老熟客会开心坏了，新城市的客人也能尝到我们林记压箱底的手艺！\r
唐鸢推了推眼镜，认真地看向配方。\r
唐鸢：如果能把传统风味用现在的烘焙工艺重新呈现，确实很有竞争力。我们先做小批量试制看看。\r
\r
接下来的五天里，林念带着周雨桐和唐鸢一头扎进后厨，林暖也在旁指导栗子去衣与炒制的火候。\r
当第一炉小批量试制的「桂花栗子蛋糕（\`cake-signature\`）」走出烤箱、抹上清香的桂花动物奶油时，整个后厨都弥漫着令人沉醉的秋日甜香。\r
苏晴拍下试制样品发上活动预热主页，许知遥开启了线上线下联合预售通道——短短三天时间，预售订单便突破了八百份，创下了林记成立以来的最高纪录！\r
\r
---\r
\r
### M27｜桂花栗子蛋糕危机（含三向决策分支 & 第十二章伙伴专属协助）\r
**【事件ID：EVT_M27_MAIN｜触发月份：M27｜连续剧情事件】**\r
\r
**【第一幕：突如其来的批量测试危机】**\r
距离秋日文化节开幕只剩下一个多月。\r
为了应对突破八百份的庞大预售订单，林记正式启动了第一次大批量生产与跨城冷链运输模拟测试。\r
然而，测试结束的当天傍晚，研发室里的气氛却降到了冰点。\r
\r
唐鸢拿着刚刚出炉的批次抽检报告走进来，脸色十分凝重。\r
唐鸢：林念，批量生产测试出大问题了。我们在小炉试制时没暴露的隐患，一放大到十倍产能，全炸开了。\r
林念心里一紧，连忙站起身。\r
林念：鸢姐，具体是哪些环节出了问题？\r
\r
周雨桐端着三盘颜色和质地截然不同的栗子泥走进来，急得眼圈都红了。\r
周雨桐：念念姐，你尝尝看……我们大批量采购的五百斤高山板栗，因为来自不同山头和采摘批次，本身的甜度和含水量差异特别大！按照外婆配方里的固定克重放糖和牛奶，第一批炒出来甜得发腻，第三批却淡得没有栗子香，而且水分太多，夹心根本立不住！\r
林念尝了一口，眉头紧紧锁起。\r
林念：怎么会差这么多……那桂花奶油呢？\r
唐鸢指着冷藏柜里存放了二十四小时的样品。\r
唐鸢：更棘手的就是桂花香。小批量现做现吃的时候香气很足，但一旦进入大批量烘烤和二十四小时冷链保存，天然桂花的挥发精油流失得极快，第二天拿出来，几乎只剩下普通奶油味，完全吃不出桂花香了。\r
\r
话音未落，许知遥和叶星河也满头大汗地从冷链测试车那边跑了回来，手里拎着几只变形的样品盒。\r
许知遥声音发颤地打开盒子。\r
许知遥：念念，冷链运输测试也出状况了！模拟两小时跨城车程颠簸之后，十盒蛋糕里有六盒的传统奶油裱花都出现了塌陷和移位……\r
叶星河看着自己设计的礼盒，自责得咬紧嘴唇。\r
叶星河：都怪我……我只顾着外盒腰封好看，内衬底托还是用了普通的平底卡纸，根本卡不住这么重的手工栗子夹心蛋糕！\r
\r
四个致命问题在同一天集中爆发，而后台的预售订单提示音还在不断响起。\r
距离秋日文化节只剩三十几天，如果不能按时交付出合格的产品，林记三十年来攒下的口碑将在一夕之间崩塌。\r
\r
**【第二幕：林念的焦虑与唐鸢的提醒】**\r
接下来的整整三天，林念陷入了接手林记以来最深的焦虑。\r
她又犯了遇到压力就想「一个人扛下所有事」的老毛病——白天应付前厅与供应商，深夜把所有人都劝回家，自己一个人留在后厨，对着一盆盆板栗泥和桂花糖浆一遍遍重做实验。\r
直到第四天清晨六点，唐鸢和周雨桐提前到店里时，看到的是满地报废的试验品，以及趴在操作台边眼底布满血丝、手指还被烤盘烫出一道红印的林念。\r
\r
周雨桐心疼得眼泪直打转。\r
周雨桐：念念姐！你昨晚又一宿没睡吗？你的手都烫伤了……\r
林念揉了揉发胀的太阳穴，声音沙哑而慌乱。\r
林念：我没事……只要我今天再试二十组配比，把每一袋栗子都由我亲自尝一遍，一定能赶在文化节前调出来的……\r
唐鸢快步走上前，一把按住了林念还在发抖的打蛋器。\r
唐鸢：林念，你清醒一点！\r
林念怔怔地抬起头。\r
唐鸢看着她，语气严肃却带着掩饰不住的关心。\r
唐鸢：八百份预售订单，上千斤板栗，这不是靠你一个人熬夜多烤十炉蛋糕就能解决的问题！你现在是林记的主理人，不是当年那个遇到难题只能自己躲在厨房哭的小姑娘了。看看你身后，我们所有人都在等你下指令，你为什么要把我们挡在外面？\r
\r
许知遥和叶星河也推门走了进来，看着憔悴的林念，眼眶通红。\r
许知遥：是啊念念，哪怕天塌下来，也是我们大家一起顶着！\r
林念看着眼前四个焦急而真挚的伙伴，紧绷了几天的弦终于松动下来，深吸了一口气，逼迫自己冷静下来做出总体决策：\r
\r
> **【玩家选择节点 11.5（M27）：应对新品危机的总体决策】**\r
> - **选项A：坚持原计划，大规模生产**（资金压力较大，需要较强团队能力支撑，成功则品牌影响力大幅飞跃）\r
> - **选项B：缩减预售数量，优先保证品质**（风险较低，活动直接收益减少，但稳守口碑，\`traditionScore + 5\`）\r
> - **选项C：延后部分订单，重新优化配方**（主动与顾客沟通分批交付，获得额外研发时间，\`communityScore + 5\`）\r
\r
**【分支A：选择「坚持原计划，大规模生产」】**\r
林念擦干脸上的疲惫，眼神重新变得坚定。\r
林念：鸢姐说得对，是我太钻牛角尖了。每一位预订的客人都是因为信任林记才下单的，我们不砍单！从今天起，调集店里所有备用资金，我把难题拆解给你们每一个人，我们全员联手，在文化节开幕前把这四座大山全部拿下！\r
\r
**【分支B：选择「缩减预售数量，优先保证品质」】**\r
林念果断地合上记录本。\r
林念：品质是林记三十年的命根子，我们绝不能为了冲销量把不成熟的产品交出去。知遥，立刻锁住预售上限，暂停跨城远途新单；剩下的核心订单，我们全员集中全部精力把配方和包装打磨到极致！\r
\r
**【分支C：选择「延后部分订单，重新优化配方」】**\r
林念沉稳地做出安排。\r
林念：我们坦诚地跟顾客沟通。知遥，把外地配送订单的客人逐一联系一遍，诚恳说明我们正在升级锁香工艺，申请延后一周分批发货，并随盒赠送一份手工伴手礼表达歉意。我们用争取来的时间，全员合力把配方彻底攻克！\r
\r
---\r
\r
#### 【第十二章机制：伙伴专属协助判定（根据前期养成自动触发对应分支）】\r
\r
在林念确立总体方案后，团队成员纷纷站出来主动分担难题：\r
\r
**1. 周雨桐（小雨）的协助：**\r
- **【高养成解锁分支：小雨信赖度 ≥ 70 且已完成M11创意研发剧情】**\r
  第二天清早，周雨桐捧着三盘标好记号的栗子泥和一碗晶莹剔透的琥珀色冻块跑进研发室，眼睛亮晶晶的。\r
  周雨桐：念念姐，鸢姐，你们快看！我昨晚把仓库里五批栗子全部测了一遍水分和糖度，按甜度分成了A、B、C三级！以后进货先做小样分级，就再也不怕甜度乱跑了！\r
  林念惊喜地看向她手里的琥珀色冻块。\r
  林念：小雨，那这一碗是什么？\r
  周雨桐脸颊微红，却自信地挺起胸膛。\r
  周雨桐：这是我翻以前那个创意小本子想到的办法！既然桂花烤过容易散香，我就用低温冷萃的桂花蜜做成「微凝桂花冻」，直接嵌在绵密的栗子泥夹心中间，再用轻乳酪奶油代替容易化边的传统高耸裱花——你们快尝尝，这样不仅运输不会塌，桂花香还能锁在夹心里整整三天不散！\r
  林念尝了一小口，清冽的桂花幽香在舌尖瞬间绽放，她激动地握住小雨的手。\r
  林念：小雨！这个桂花冻夹心太绝了！你真的帮了林记天大的忙！\r
  周雨桐开心地笑弯了眉眼。\r
  周雨桐：以前都是念念姐保护我、鼓励我，现在我也终于能替念念姐撑起一片天啦！\r
- **【普通保底分支：未满足高养成条件】**\r
  林念带领小雨耗费数个经营日，在后厨反复进行常规批次抽检与糖量微调，逐步摸索出稳定的栗子泥处理方案。\r
\r
**2. 唐鸢的协助：**\r
- **【高养成解锁分支：阿鸢信赖度 ≥ 70 且已完成原创配方研发剧情】**\r
  唐鸢将一份连夜赶制出来的《桂花栗子动态标准化生产流程图》铺在操作台上。\r
  唐鸢：小雨解决了风味载体，批量生产的损耗和温控就交给我。我结合之前做伯爵茶千层时的分段萃香经验，把传统炒栗工序拆解成了「低温预烘脱水+分段控糖搅拌」两个标准模块。\r
  林念仔细看着流程图上的参数，赞叹不已。\r
  林念：鸢姐，这样一来，哪怕两家店的后厨同时开火，也能做出完全一样醇厚的焦香栗子泥了！\r
  唐鸢微笑着推了推眼镜。\r
  唐鸢：是你让我明白，标准化的真正意义，就是帮好手艺插上翅膀。\r
- **【普通保底分支：未满足高养成条件】**\r
  唐鸢按照常规连锁排产经验，协助后厨重新排定了加班烘烤班次，保障基础产能。\r
\r
**3. 许知遥的协助：**\r
- **【高养成解锁分支：知遥信赖度 ≥ 70 且已完成M19订单管理系统剧情】**\r
  许知遥拿着平板电脑，精神抖擞地走进办公室。\r
  许知遥：念念，前厅和线上预订的八百多位客人，我已经全部按「文化节现场自提」「栖云镇老店自提」「跨城冷链专送」做好三级分流表了！所有需要微调取货时段的熟客我也逐一电话联系完毕，陈奶奶和几十位老街坊不仅没有一句怨言，还在群里给我们全员加油呢！\r
  林念长长地舒了一口气。\r
  林念：有知遥坐镇前厅和大后方，我心里的大石头彻底落下一半了。\r
- **【普通保底分支：未满足高养成条件】**\r
  林念与知遥一起花费额外行动力，逐一处理顾客咨询与订单排期调整。\r
\r
**4. 叶星河的协助：**\r
- **【高养成解锁分支：星河信赖度 ≥ 70 且已完成M25个人作品展剧情】**\r
  叶星河气喘吁吁地从包材厂赶回来，手里拎着一只结构精巧的打样礼盒。\r
  叶星河：林店长，鸢姐，你们看！我把礼盒内部改成了双层十字卡扣加厚防震底托，外盒保留「秋山桂雨」抽拉画卷腰封。刚才我抱着装好蛋糕的样品盒，坐城际公交颠簸了一个来回，打开看里面纹丝不动！\r
  唐鸢亲自上手晃了晃盒子，打开检查后，难得地向叶星河竖起了大拇指。\r
  唐鸢：十秒成型，承重满分。叶设计师，这次是真正合格的商业作品了。\r
  叶星河开心地欢呼起来。\r
- **【普通保底分支：未满足高养成条件】**\r
  团队采购了通用型加固冷链包装盒，通过增加冰袋与防撞棉解决基础运输问题。\r
\r
---\r
\r
### M28｜找回记忆：外婆的十二字批注\r
**【事件ID：EVT_M28_MAIN｜触发月份：M28｜连续剧情事件】**\r
\r
虽然技术与包装难关在伙伴们的协力下逐一突破，但林念站在操作台前看着样品，心里依然有一丝解不开的困惑——\r
改用了分级配比、微凝桂花冻与现代稳固造型之后，这款桂花栗子蛋糕，还算得上是外婆传下来的「林记老味道」吗？\r
\r
苏晴来找林念送内存卡时，一眼就看出了好友眉宇间的犹豫。\r
苏晴：念念，所有技术问题不是都快解决了吗？怎么还皱着眉头呀？\r
林念低头看着手里的样品。\r
林念：苏晴，为了适应现在的批量生产和运输，我们调整了糖量配比，也改了桂花入料的方式和造型。我一直在想……这样做出来的蛋糕，老街坊们吃了，会不会觉得我们已经把外婆的味道弄丢了？\r
苏晴看着林念认真的侧脸，温和地笑了笑，背起自己的相机包。\r
苏晴：关于「什么是林记真正的味道」，我们坐在这儿猜可没用。等我三天，我帮你去找答案。\r
\r
接下来的三天里，苏晴借着自己拍摄《栖云镇人物志》摄影项目的机会，扛着相机和录音笔走遍了青石板街，拜访了陈奶奶等十几位光顾林记二三十年的老顾客。\r
三天后的傍晚，苏晴把林念、林暖、小雨、知遥、阿鸢和星河全都叫到了店里，在投影布上放出了她拍下的一张张老街坊访谈照，并按下了录音笔的播放键。\r
\r
录音笔里传来了陈奶奶熟悉的笑声和街坊们温热的话语：\r
陈奶奶（录音）：晴晴问我记不记得林老太太当年的桂花栗子蛋糕呀？怎么不记得哟！那时候哪有什么死板的标准，有一年秋天雨水多，山上的栗子没那么甜，林老太太就在夹心里多加一勺桂花蜜；有一年霜降早，桂花香淡了，她就在装盒前现撒一把金桂干花。\r
老街坊张叔（录音）：我们老街坊惦记林记的桂花栗子蛋糕，哪是在意上面的奶油花挤成什么形状呀？我们怀念的，是每年秋风一起，全家人围在八仙桌边，打开林记的盒子闻到那股热乎乎、实打实的桂花板栗香！\r
\r
后厨里安安静静的，所有人都被录音里朴实的话语打动了。\r
林暖看着投影幕布上老街坊们的笑脸，眼眶微微泛红，忽然像是想起了什么，快步走到桌边翻开外婆那本旧配方本的封底夹页。\r
在泛黄纸页的最角落，留着一行极小却苍劲有力的铅笔备注。\r
林暖轻轻念了出来：\r
**「栗子甜则少放糖，桂花香淡则后撒。」**\r
\r
林暖转过头，慈爱而笃定地看向林念。\r
林暖：念念，妈全想起来了。你外婆当年在世的时候常跟我说，食材是活的，人是活的，方子也得是活的。她从来没有要求后人每年做出一模一样的死板数字，而是要顺应每一季食材的脾气，把最新鲜、最妥帖的味道送到客人嘴里。\r
周雨桐恍然大悟地轻声惊呼。\r
周雨桐：栗子甜则少放糖，桂花香淡则后撒……原来我们做原料甜度分级和后置桂花冻锁香，刚好和外婆几十年前的想法一模一样！\r
唐鸢也露出了由衷的敬佩之色。\r
唐鸢：用现代科学的方法，去实现老一辈手艺人的智慧——林念，这就是最好的传承。\r
\r
林念看着那十二个字，又看向身边微笑着的苏晴、母亲与全体伙伴，心头最后一层迷雾彻底散去。\r
林念：我终于明白了。传承从来不是一成不变地复刻过去，而是带着外婆和妈妈的心意，用我们这一代人的方式，把林记的味道继续传下去！\r
林念拿起抹刀，声音清亮而充满力量。\r
林念：伙伴们，全员开工——让我们把林记真正的招牌，带去秋日文化节！\r
\r
---\r
\r
### M29｜秋日文化节 & 友情线最高潮（含高三完整回忆）\r
**【事件ID：EVT_M29_MAIN｜触发月份：M29｜强制连续主线剧情】**\r
**【状态变更：friendshipMemories 全解锁】**\r
\r
**【第一幕：秋日文化节的盛况】**\r
十月中旬，省城会展中心迎来了万众瞩目的「江南秋日文化节」。\r
由叶星河设计的林记烘焙主题展位宛如一座微缩的江南秋日庭院，右侧的一面木质展墙上，挂满了苏晴拍摄的《栖云镇老街坊与林记的三十年》纪实摄影照，引得无数游客驻足细看。\r
\r
展台前，许知遥带着店员们热情地引导着排成一条长龙的顾客。\r
许知遥：线上预售自提的客人请往左边通道走，现场购买和试吃的客人请排右边，今天每一份礼盒都配有我们星河设计师手绘的秋山桂雨书签哦！\r
开放式操作台后，唐鸢与周雨桐配合得行云流水，一盒盒刚刚完成最后一道金桂点缀的桂花栗子蛋糕被端上展台。\r
周雨桐将切好的试吃小块递给围观的食客。\r
周雨桐：大家请尝尝看，这是我们林记传承了三代人的桂花栗子蛋糕！\r
一位年轻美食博主尝了一口，眼睛瞬间亮了起来。\r
年轻食客：哇！一打开叶星河设计的那个抽拉腰封，桂花香就扑鼻而来！里面的栗子泥绵密得像云朵一样，中间那层冰凉清润的桂花冻更是神来之笔，完全不腻！我要再买两盒带回家给爸妈尝尝！\r
\r
林暖陪着专程坐大巴车赶来捧场的陈奶奶站在展位旁，看着被人群簇拥的林念和年轻伙伴们，笑得合不拢嘴。\r
陈奶奶：林大姐，你看念念和这群姑娘们多能干！咱们栖云镇的老味道，如今真是走到大城里发光发热咯！\r
林暖欣慰地点了点头。\r
林暖：是啊，从今往后，这林记的大旗，我是彻彻底底可以交给念念了。\r
\r
连续三天的秋日文化节，林记烘焙不仅圆满交付了全部预售订单，现场加售的五百盒礼盒也全部售罄，更收到了省内外多家商业中心与媒体的合作邀约。\r
\r
**【第二幕：暮色展馆与高三回忆】**\r
文化节最后一天傍晚，喧嚣的人群渐渐散去。\r
林暖先带着小雨、知遥、阿鸢和星河去装车清点物料，偌大的展馆角落里，只剩下林念和正在低头拆卸三脚架的苏晴。\r
金红色的晚霞透过高大的玻璃穹顶倾泻而下，落在那面挂满三年记忆的照片墙上。\r
\r
林念静静地看着照片墙上老街坊的笑脸，又看向从大一、大四一直陪自己走到今天的苏晴，胸口涌起一股无法用言语形容的暖流。\r
如果没有苏晴在第一个月第一天推门进来给她拍下第一张照片，没有苏晴在夏日市集帮她搭起展台，没有苏晴在自己最迷茫的危机时刻跑遍全镇找回外婆的味道……她或许很难走到今天。\r
\r
林念快步走过去，在苏晴直起身的那一刻，一下子上前紧紧抱住了苏晴。\r
**【CG：festival】**\r
林念：呜呜呜，你真好！\r
林念：我们要做一辈子的好朋友！\r
\r
苏晴愣了一下，随后轻轻弯起了嘴角。\r
苏晴没有马上回答。\r
她想起了几年前那个晚自习的夜晚。\r
\r
---\r
\r
**【插入完整回忆 8.3：高三——苏晴认定一辈子的朋友】**\r
**【CG：memory】**\r
**【事件ID：EVT_FLASHBACK_HS3_FULL】**\r
\r
高三时，苏晴换了一位新同桌，名叫沈妍。\r
两人刚开始相处正常，但此前沈妍曾与其他同学发生过冲突。\r
某天，同学许佳宁小声提醒苏晴：\r
\r
许佳宁：苏晴，你最近和新同桌相处得还好吗？\r
苏晴：挺好的呀，怎么了？\r
许佳宁：她之前和同学发生过一些冲突，最近状态好像也不太稳定。我也不清楚具体情况，只是觉得你们现在是同桌，还是稍微留意一下比较好。\r
苏晴：啊？这样吗。谢谢你的提醒。\r
\r
之后，沈妍与苏晴相处一直比较正常，苏晴也没有太在意这件事。\r
某节晚自习下课，林念照常来到苏晴班级找她。\r
\r
林念：我给你带了妈妈做的小面包！\r
苏晴：哇！谢谢你！\r
苏晴咬了一口。\r
苏晴：真好吃！\r
苏晴：对了，我跟你讲，我上周看到一本小说……\r
\r
两个人正聊着天，沈妍突然从教室前门冲了进来。\r
她误以为苏晴向老师透露了自己的事情，情绪激动，手里还拿着一把长柄伞。\r
随后，她突然挥动雨伞，冲向苏晴。\r
苏晴完全没有反应过来。\r
林念第一时间冲上前，试图将两人分开，同时大声呼喊老师。\r
周围同学被突发情况吓住，班长赶紧跑去找值班老师。\r
短暂的混乱后，老师赶到现场，制止了冲突。\r
苏晴受了伤，随后由老师陪同处理。学校联系了双方家长，后续也安排了相应的沟通和处理。\r
\r
事情发生后，苏晴被老师叫去询问经过。\r
她一直表现得很冷静，能够清楚地回答老师的问题。\r
直到她走出办公室。\r
她看到了刚从办公室回来的林念。\r
林念的眼睛红红的。\r
一见到苏晴，她就走上前，紧紧抱住了她。\r
\r
林念：你吓死我了……\r
林念：有没有哪里不舒服？\r
\r
苏晴已经记不清林念具体说了什么。\r
她只记得那个拥抱。\r
刚刚还能冷静回答老师问题的她，在看到林念的那一刻，突然忍不住了。\r
那些被压下去的惊吓和委屈一下子涌了上来。\r
她抱着林念哭了出来。\r
\r
旁白（苏晴视角）：\r
刚刚在教室里的时候，我好像什么感觉都没有。\r
老师问我事情经过，我可以很平静地回答。\r
可是看到林念的那一刻，我突然就忍不住了。\r
我想起高一的时候，我们约定过，有什么事情都要直接告诉对方。\r
我也想起高二的时候，每次一下课，她总会出现在我们班后门。\r
原来有一个人会这样在意自己，是一件很幸福的事情。\r
**苏晴想：我想和这个人做一辈子的好朋友。**\r
\r
---\r
\r
**【回到现在：秋日文化节现场】**\r
展馆里的晚霞温柔地笼罩着相拥的两人。\r
苏晴伸出手，轻轻拍了拍林念的后背，声音轻柔而笃定。\r
\r
苏晴：傻瓜，怎么还哭鼻子了？一会儿小雨她们回来看到林大店长哭成小花猫，我可得抓拍下来。\r
林念把脸埋在她肩头，瓮声瓮气地笑骂了一句。\r
林念：你敢拍我就没收你的无花果蛋糕！\r
苏晴弯起嘴角，眼底满是温柔的笑意。\r
\r
旁白（苏晴视角）：\r
其实，早在几年前，我就已经下定决心了。\r
我要和你做一辈子的好朋友。\r
\r
---\r
\r
### M30｜第五阶段总结与结算\r
**【事件ID：EVT_M30_MAIN｜触发月份：M30第5个经营日】**\r
**【注意：系统规则强制要求先完整播放完桂花栗子蛋糕主线与M29友情高潮后，再进行第五阶段目标检查】**\r
**【检查条件（四项完成两项即可进入第六章）：1. 成功研发桂花栗子蛋糕；2. 完成生产和运输测试；3. 完成秋日文化节；4. 至少两位伙伴提供专属协助】**\r
\r
#### ▶ 分支一：阶段达标（进入第六章）\r
秋日文化节之后，林记烘焙的名声响彻省内外。林暖正式将代表林记最高经营权的印章交给女儿，小雨、知遥、阿鸢、星河与苏晴围在林念身边，共同开启最后半年的「全国布局与高端旗舰店」新征程！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.5《桂香留在栖云》\r
**【事件ID：EVT_SHORT_END_05｜触发条件：M30结算完成目标数 < 2】**\r
\r
秋日文化节结束后，林记重新研发的桂花栗子蛋糕获得了当地顾客的由衷喜爱。\r
但经过这次高强度的活动筹备，林念也清醒地发现，团队目前的步调还不适合强行进行大规模的全国扩张。\r
这天午后，门前的金桂树落了一地碎金，林念把所有伙伴叫到小院里，分吃着今年秋天的最后一批桂花栗子蛋糕。\r
\r
林念：这段时间大家都辛苦了。我想了想，我们不急着去外省开连锁了，就把这款桂花栗子蛋糕定为我们林记每年秋天的限定招牌，守好我们现在的门店。\r
唐鸢端着咖啡，赞同地点了点头。\r
唐鸢：量力而行、守住品质，本来就是最成熟的经营决策。\r
周雨桐开心地捧着小盘子。\r
周雨桐：那我明年秋天还可以继续给街坊们做桂花冻夹心！\r
许知遥和叶星河笑作一团。\r
许知遥：陈奶奶今天早上还专门问我，明年秋天能不能提前半年预订呢！\r
叶星河：那明年的秋山桂雨礼盒，我再给大家画一版新插画！\r
苏晴将这段时间拍摄的活动照片整理成册，放到桌子中央。\r
苏晴：来，看镜头——把今年秋天的桂花香，留在我们的相册里吧！\r
\r
旁白：有些味道，不需要传遍全国，也值得一直保留下去。\r
旁白：【达成阶段短线结局：《桂香留在栖云》】\r
\r
---\r
\r
## 第六章：把喜欢的味道带到全国（第31—36个月）\r
**章节主题：品牌扩张与新的开始（本章不设普通失败结局）**\r
**本阶段登场人物：林念、林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河、陈奶奶**\r
\r
### M31｜建立统一供应链\r
**【事件ID：EVT_M31_MAIN｜触发月份：M31第1个经营日】**\r
**【状态变更：解锁「供应链系统」】**\r
\r
进入第三年的最后半年，为了支撑跨城市门店的稳定出品，林念与团队正式建立了统一原料采购、生产与配送体系。\r
\r
唐鸢拿着最新的供应链排期表走进办公室。\r
唐鸢：林念，广西荔浦芋头、高山油栗和牧场鲜奶油的直采冷链已经全部打通了。从这个月起，中央厨房的标准化预处理由我全面负责，你可以从一线制作里彻底抽身，专注整体经营了。\r
周雨桐也拿着新编好的《四季鲜果验收图谱》走过来。\r
周雨桐：念念姐，各分店学徒的水果切配培训手册我也做好了！\r
林暖泡了一壶热茶端进办公室，笑眯眯地看着大家。\r
林暖：现在后厨有阿鸢和小雨，前厅有知遥，包装有星河，妈算是彻底成清闲老太太咯！\r
\r
---\r
\r
### M32｜点亮城市地图 & 商业收购邀约（可选分支）\r
**【事件ID：EVT_M32_MAIN｜触发月份：M32第2个经营日】**\r
**【状态变更：解锁「城市地图系统」（杭州、上海、南京、成都、广州、北京）】**\r
\r
随着供应链运转成熟，林记烘焙开始在更多城市开设门店（\`city-linjiang\`, \`city-hangzhou\`, \`city-shanghai\`, \`city-nanjing\`, \`city-chengdu\`, \`city-guangzhou\`, \`city-beijing\`）。\r
许知遥每天在办公桌前调度着各城市的店长晨会，叶星河则为每座新城市设计了融入当地风物的城市限定腰封，苏晴也常跟着林念出差，记录下一家家新店亮起招牌的瞬间。\r
\r
**【独立可选分支事件：资本收购邀约 \`EVT_M32_ACQUISITION_OFFER\`】**\r
这天下午，一家大型餐饮投资集团正式向林念发出全资收购「林记烘焙」品牌与门店的邀请。\r
\r
> **【玩家选择节点 13.6（M32/M35）：面对品牌收购邀约】**\r
> - **选项A：婉拒收购，坚持自主经营林记**（继续正常推进第六章主线，走向最终结局13.1—13.5）\r
> - **选项B：接受收购邀约，卸下经营重担**（将在结算时进入独立选择型遗憾结局 13.6《转让》）\r
\r
---\r
\r
### M33｜旗舰店设计（含四向风格分支）\r
**【事件ID：EVT_M33_MAIN｜触发月份：M33第3个经营日】**\r
**【状态变更：解锁 LV4 高端主题门店（shop-lv4）】**\r
**【CG：flagship】**\r
\r
第三年的春天，林念决定建设林记烘焙的最高等级门店——LV4 高端主题旗舰店（配备拱形门洞、大理石台面、精致花艺与独立旗舰产品展示空间）。\r
筹备会上，全员齐聚一堂。\r
\r
叶星河铺开一整套完整的品牌视觉与空间设计蓝图。\r
叶星河：林店长，这是我结合这三年林记的成长历程，为大家准备的四套旗舰店终极视觉方案！\r
唐鸢与周雨桐也端出了专为旗舰店研发的首发限定系列。\r
唐鸢：不论选哪一套空间风格，我和小雨都已经配好了对应的主题甜点展陈。\r
苏晴调试着新入手的专业全画幅相机。\r
苏晴：等旗舰店落成那天，我带工作室全套灯光来给咱们拍一套镇店宣传大片！\r
\r
> **【玩家选择节点 11.6（M33）：旗舰店设计风格】**\r
> - **选项A：传统复古风格**（\`traditionScore + 10\`，雕花木窗与岁月铜牌，深受长辈与文化食客喜爱）\r
> - **选项B：现代简约风格**（\`efficiencyScore + 10\`，极简奶油白与通透玻璃动线，出餐与展示效率拉满）\r
> - **选项C：高端主题风格**（\`innovationScore + 10\`，艺术策展式甜品空间，品牌影响力大幅提升）\r
> - **选项D：自然温馨风格**（\`communityScore + 10\`，原木花艺与阳光庭院座位，顾客停留意愿与舒适度最高）\r
\r
---\r
\r
### M34｜全国门店管理体系\r
**【事件ID：EVT_M34_MAIN｜触发月份：M34第2个经营日】**\r
\r
随着旗舰店正式投入运营，林记烘焙逐渐形成跨城市门店网络。\r
这天下午的月度总结会上，林念看着围坐在会议桌旁的伙伴们，心中满是欣慰。\r
\r
许知遥合上运营报表。\r
许知遥：目前各城市门店的店长排班与熟客档案已经全部实现云端同步，顾客满意度连续三个月保持在98%以上！\r
周雨桐笑着接话。\r
周雨桐：今年新招的八名烘焙学徒都已经通过我的抹面和水果搭配考核，下周就能正式上岗了！\r
唐鸢点了点头。\r
唐鸢：中央研发实验室和培训体系运转一切正常，下一季度的全国新品配方已经定稿。\r
叶星河晃了晃手里的画笔。\r
叶星河：三周年店庆的全国统一伴手礼视觉也已经送印啦！\r
林念看着这支能够独立运作的成熟团队，真正完成了从「会做蛋糕的毕业生」到「品牌创始人」的蜕变。\r
\r
---\r
\r
### M35｜整理三年摄影作品：完整相册\r
**【事件ID：EVT_M35_MAIN｜触发月份：M35第4个经营日】**\r
**【CG：album】**\r
\r
三周年庆典前夕的一个傍晚，苏晴来到栖云镇的林记老店找林念。\r
林暖、小雨、知遥、阿鸢和星河也好奇地围了过来。\r
苏晴从包里拿出一本装帧考究的亚麻布面手工相册，递到林念手中——封面上印着一行烫金小字：《林记与我们的三年》。\r
\r
苏晴：念念，这三年来我给你和林记拍了快两千张照片，最近我把它们全部整理了出来，编成了这本相册。\r
林念一页页轻轻翻开：\r
里面有高一教室的素描与高二二班的后门，有林念刚接手林记时紧张的模样，有陈奶奶慈祥的笑脸，有小雨、知遥、阿鸢、星河刚加入时的青涩瞬间，有临江分店、秋日文化节，也有崭新的旗舰店。\r
周雨桐指着自己刚入职时的照片羞红了脸。\r
周雨桐：天呐，我那时候拿抹刀的样子好呆呀！\r
许知遥哈哈大笑。\r
许知遥：你看我那张，手里还攥着写错的预约单呢！\r
林念翻到相册的最后一页，发现上面贴着四个透明相角，中间却留着空白。\r
苏晴笑吟吟地晃了晃手里的相机。\r
苏晴：最后一页我是故意空出来的——留给明天的三周年庆典，我们两个人的合影！\r
\r
---\r
\r
### M36｜林记三周年活动（终局盛典）\r
**【事件ID：EVT_M36_MAIN｜触发月份：M36第5个经营日】**\r
\r
三十六个月的时光，在面粉、奶油与四季更迭的香气中悄然走过。\r
林记烘焙迎来了盛大的三周年店庆。\r
林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河，还有以陈奶奶为代表的老顾客们齐聚一堂。\r
系统根据玩家三年来的综合经营成绩、长期经营偏好与伙伴培养进度，正式进入最终结局篇章——\r
\r
---\r
\r
## 附篇一：四大经营风格专属解锁剧情文案（第6.5节）\r
*（触发条件：某项风格数值 ≥ 60，且领先其他三项风格至少 15 点时解锁对应专属剧情）*\r
\r
### 1. 传统手作派专属剧情：《三代人的老木模》\r
**【触发条件：\`traditionScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_TRADITION】**\r
\r
这天整理老店阁楼时，林暖带着林念从一只樟木箱底找出了外婆当年创业时亲手雕刻的传统糕点木模。\r
周雨桐捧着木模，小心翼翼地擦拭着上面的雕花纹路。\r
\r
周雨桐：林阿姨，念念姐，这木模上的桂花和福字刻得好细致呀，摸起来还有木头的温润感。\r
林暖眼底满是怀念。\r
林暖：这是你外婆年轻时请老木匠用梨木雕的。那时候每逢中秋和重阳，店里都要用它印传统蜜糕。\r
林念接过木模，心里一动。\r
林念：妈，小雨，不如我们用外婆的老木模，结合现在的低糖栗蓉和桂花奶黄，复原一套「岁月传承传统节日礼盒」吧！\r
叶星河立刻举手赞同。\r
叶星河：那我用棉宣纸和红绳来设计这套礼盒的外包装，把老字号的韵味做足！\r
\r
礼盒推出当天，陈奶奶尝了第一口便红了眼眶。\r
陈奶奶：就是这个味儿！跟三十年前林老太太做的一模一样，连花纹都没变！\r
苏晴用镜头记录下老街坊们排队的画面，当地非遗文化栏目也闻讯赶来，为林记三代女性守护传统手艺的故事拍摄了专题纪录片。\r
\r
---\r
\r
### 2. 创意新品派专属剧情：《四季灵感发布会》\r
**【触发条件：\`innovationScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_INNOVATION】**\r
\r
周末午后，林记烘焙举办了一场别开生面的「江南四时风物·创意甜点品鉴会」。\r
长桌上摆满了周雨桐与林念共同研发的节气限定甜点，每一款都配有叶星河手绘的节气诗词透卡。\r
\r
周雨桐站在展台前，自信地向来宾介绍自己的作品。\r
周雨桐：这款「春山碧螺春」用了明前绿茶慕斯配青梅果冻，而「夏荷荔枝」则用玫瑰露做出了荷花瓣的清透感！\r
叶星河晃了晃手里的节气透卡。\r
叶星河：大家拿着透卡对准蛋糕拍照，就能把江南的诗词和甜点拍进同一个画面里哦！\r
唐鸢在后厨稳稳把控着每一道分子慕斯的出品温度。\r
唐鸢：所有创意款的甜度和温度都已经校准完毕，随时可以补货。\r
许知遥看着手机上不断飙升的同城热搜话题，兴奋地喊道。\r
许知遥：念念！苏晴姐拍的九宫格新品图在小红书上爆了，现在预约已经排到下个月啦！\r
\r
---\r
\r
### 3. 高效连锁派专属剧情：《晨光里的零误差》\r
**【触发条件：\`efficiencyScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_EFFICIENCY】**\r
\r
清晨五点，天还没亮，唐鸢与许知遥带着林念来到新建成的中央标准化配料中心。\r
恒温车间内灯火通明，电子看板上实时跳动着各家门店的预订库存与冷链分拨进度。\r
\r
唐鸢指着大屏幕上的数据汇报。\r
唐鸢：林念，你看。早上五点半鲜果完成三级质检，六点整恒温冷链车出发，七点整所有门店的展示柜同时摆上温度、甜度、光泽分毫不差的鲜作蛋糕。\r
许知遥翻开平板上的月度汇总表。\r
许知遥：自从跑通了这套零误差标准体系，我们各家分店的原料报损率降到了历史最低，出餐速度提升了整整一倍！\r
苏晴举着相机拍下晨光中整装待发的冷链车队。\r
苏晴：以前觉得标准化听起来冷冰冰的，今天亲眼看到才明白，把每一份热乎乎的新鲜蛋糕准时送到客人手里，本身就是一件超酷的事！\r
\r
---\r
\r
### 4. 社区温情派专属剧情：《长街百家甜》\r
**【触发条件：\`communityScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_COMMUNITY】**\r
\r
在这个春风和煦的周末，林记联合栖云老街的咖啡馆、花店与书店，共同发起了一场「老街邻里公益烘焙体验日」。\r
青石板街边的梧桐树下摆开了长桌，林念、林暖和小雨免费准备了上百份戚风小胚和动物奶油，教社区的孩子们和老人们一起动手装饰杯子蛋糕。\r
\r
陈奶奶系着小围裙，和孙子一起笨拙地挤出一朵歪歪扭扭的奶油花。\r
陈奶奶：哎哟，平时光看念念和林大姐挤花那么轻松，自己一上手怎么跟画毛毛虫似的！\r
许知遥笑得前仰后合，连忙递上几颗大草莓帮祖孙俩救场。\r
许知遥：陈奶奶，咱们往顶上放一颗大草莓，这叫写意派艺术蛋糕！\r
苏晴穿梭在人群中，快门声响个不停。\r
苏晴：念念，你看整条栖云老街的人今天都聚在咱们门口了，林记简直成了全镇最温暖的客厅！\r
林念看着满街的欢声笑语，心里满是柔和的暖意。\r
\r
---\r
\r
## 附篇二：林念与苏晴36个月专属友情互动剧情（第8.6节｜M1—M36逐月不同剧情）\r
\r
*（设计说明：玩家在36个月的任意月份消耗1点行动力点击「与苏晴互动」时，将根据当前所在月份 M1—M36 触发当月专属的唯一剧情，确保36个月每月互动皆不重复，完整串联起两人从刚毕业回乡到三年后的成长轨迹。每个月只能互动一次。）*\r
\r
**第一章互动：接手初期的陪伴与打气（M1—M6）**\r
\r
### M1｜第一份试吃员聘书\r
**【事件ID：EVT_FRIEND_M01｜互动类型：支持与调侃】**\r
\r
傍晚打烊后，林念趴在收银台前对着第一周的原料进货单按计算器，眉头皱成了小山。\r
苏晴背着相机包推门进来，神神秘秘地从包里抽出一张自己用彩纸打印的卡片，啪地拍在柜台上。\r
\r
苏晴：林老板，请签收你的第一份人事文件！\r
林念拿起卡片一看，上面印着「林记烘焙首席试吃官兼御用摄影师聘书——持有人：苏晴，薪酬：每日边角料蛋糕一份」。\r
林念扑哧一声笑了出来，刚才算账的烦躁一扫而空。\r
林念：苏大摄影师，你这聘书怎么还是自己给自己发的呀？\r
苏晴理直气壮地拉过吧台椅坐下。\r
苏晴：我怕你刚当老板不好意思开口请我帮忙嘛！来，先把今天切下来的原味蛋糕边角料交出来，本试吃官要开始履行职责了！\r
林念转身从冷藏柜里端出一整块完好的草莓奶油蛋糕放到她面前。\r
林念：哪能让我们的首席摄影师吃边角料呀，给，最大颗草莓的归你！\r
\r
### M2｜老街修图夜与热可可\r
**【事件ID：EVT_FRIEND_M02｜互动类型：认真听苏晴讲工作】**\r
\r
夜里九点，苏晴抱着笔记本电脑来到店里，一进门就毫无形象地瘫在旧木桌旁叹气。\r
林念端来一杯刚冲好的热可可和一块巧克力蛋糕放到她手边。\r
\r
林念：怎么啦？我们苏大摄影师今天外拍不顺利？\r
苏晴喝了一大口热可可，委屈地指着电脑屏幕。\r
苏晴：念念，我今天接了个散客写真，明明说好是拍栖云镇的水乡老街胶片感，结果客人刚才非让我把后面的青石板路P成欧洲大教堂！我都快把鼠标抠烂了！\r
林念凑过去看了一眼那张违和感满满的合成图，忍不住笑出声。\r
林念：哈哈，青瓦白墙配哥特教堂，这也太超前了！\r
苏晴用叉子戳了戳巧克力蛋糕，闷闷不乐。\r
苏晴：有时候真怀疑自己回栖云镇做独立摄影是不是太理想化了……\r
林念拉过椅子坐在她身边，温和而认真地看着她。\r
林念：才刚刚第二个月呢，就像我每天也在摸索怎么跟老街坊和年轻客人打交道一样。你的镜头拍出的老街最有灵气了，懂你作品的人一定会越来越多，我永远是你的头号粉丝！\r
苏晴心情瞬间多云转晴，舀起一大勺巧克力蛋糕塞进嘴里。\r
苏晴：还是我们念念最懂我！来，再给我续半杯热可可，我今晚跟这张图拼了！\r
\r
### M3｜芋泥味的砂锅米线\r
**【事件ID：EVT_FRIEND_M03｜互动类型：邀请苏晴吃饭】**\r
\r
研发「芋泥薄脆」的这周，林念连续三天都在后厨试吃不同甜度的芋泥。\r
到了周五傍晚，林念解下围裙，第一时间冲到苏晴工作室门口敲门。\r
\r
林念：苏晴！快救命！带我去吃顿咸的、辣的！\r
苏晴打开门，闻到林念身上浓浓的奶香与芋头香，顿时乐了。\r
苏晴：怎么，我们林老板终于被自己的芋泥淹没啦？\r
林念苦着脸点头。\r
林念：我现在连打个嗝都是荔浦芋头味！今天说什么也不聊蛋糕了，我们去吃一中校门口那家麻辣砂锅米线！\r
苏晴立刻关掉修图灯，抓起钥匙挽住林念的胳膊。\r
苏晴：走走走！我要加双份腐竹、卤蛋和撒尿牛丸！还记得高二那年晚自习课间，我们俩隔着校门铁栏杆买米线，差点被年级主任抓包吗？\r
林念笑着跟她并肩跑进暮色里。\r
林念：怎么不记得，当时还是你跑得快，把米线桶藏在校服外套里带回二班后门的！\r
\r
### M4｜压箱底的高二传纸条本\r
**【事件ID：EVT_FRIEND_M04｜互动类型：高中回忆与分享】**\r
\r
周末下午，苏晴抱着一个落满灰尘的铁皮文具盒跑进店里，神秘兮兮地朝林念招手。\r
林念端着两碟新烤的抹茶蛋糕走过来坐下。\r
\r
林念：这是什么呀？看着好眼熟！\r
苏晴打开文具盒，里面整整齐齐码着一沓叠成方块的格子纸和一本交换日记。\r
苏晴：我妈昨天收拾旧书柜翻出来的！全是我们高一当同桌、高二隔着走廊传纸条攒下的黑历史！\r
林念好奇地展开一张纸条，念出上面的字。\r
林念：「苏晴，第四节课下课速来一班后门，我妈今天烤了蜂蜜小蛋糕，晚一秒就被我同桌抢光了！」\r
苏晴也拆开一张，笑得直拍桌子。\r
苏晴：哈哈哈哈你看这张你写的！「数学最后一道大题算不出，要是毕业找不到工作我就回家卖一辈子小蛋糕」——林老板，你高二的时候原来是个预言家呀！\r
林念羞得伸手去抢纸条，两人在木桌旁笑闹成一团。\r
\r
### M5｜反光板下的救场模特\r
**【事件ID：EVT_FRIEND_M05｜互动类型：支持她的摄影项目】**\r
\r
这天下午店里休息，林念烤了一篮色泽金黄的法式可颂和水果挞，送到苏晴正在取景的河畔公园。\r
苏晴正对着空荡荡的野餐垫发愁，见到林念如同见到了救星。\r
\r
苏晴：念念！你来得太及时了！今天约好的甜品道具商临时放鸽子，正主模特也堵在半路上了！\r
林念把装满可颂的藤编篮摆到野餐垫上。\r
林念：道具这不就来了吗？我刚烤好的，还热乎着呢！\r
苏晴眼睛一亮，拉住林念的手腕把她按在野餐垫边坐下。\r
苏晴：光有可颂不够，趁现在阳光正好，林老板先给我当十分钟试光模特！把这块草莓挞举到嘴边，回头看我——\r
林念有些害羞地举起草莓挞。\r
林念：我又不会摆姿势，拍出来僵硬可别怪我啊。\r
苏晴透过取景框看着沐浴在春光里的好友，嘴角轻轻扬起。\r
苏晴：不用摆姿势，你看着我的时候，本来就是最自然的。\r
\r
### M6｜市集前夜的冰镇西瓜\r
**【事件ID：EVT_FRIEND_M06｜互动类型：主动分享烦恼】**\r
\r
夏日生活节开幕前一天晚上，两人把市集要用的亚麻桌布、灯串和保温箱全部清点完毕。\r
后院的竹椅上摆着半个刚从井水里捞出来的冰镇西瓜，林念拿着勺子挖下最中间的一块递给苏晴。\r
\r
苏晴咬了一大口西瓜，舒爽地叹了口气。\r
苏晴：啊——活过来了！明天就是林记第一次出摊的大日子，林老板紧不紧张？\r
林念捧着西瓜皮，看着夜空里的星星轻声开口。\r
林念：说不紧张是假的。半年前刚回家的时候，我连站柜台都怕算错账，没想到明天就要带着自己研发的芒果慕斯去广场摆摊了。\r
苏晴晃着脚丫子，笑眯眯地撞了撞她的膝盖。\r
苏晴：你就放心吧！明天我就守在你的摊位旁边，谁敢说咱们林记不好，我就拿长焦镜头怼他！更何况，你的芒果慕斯那么好吃，肯定大卖！\r
林念被她逗笑，心底最后一点忐忑也化作了期待。\r
\r
**第二章互动：步入正轨的默契与回忆（M7—M12）**\r
\r
### M7｜除夕夜的仙女棒\r
**【事件ID：EVT_FRIEND_M07｜互动类型：节日陪伴】**\r
\r
除夕夜八点，送走最后一位取团圆蛋糕的顾客，林念刚准备锁上后厨的小门，手机就收到了一条只有五个字的消息：\r
苏晴（手机消息）：下课来找我。\r
林念愣了一下，笑着推开后门——只见苏晴裹着厚厚的红围巾站在巷口路灯下，手里攥着两把长长的仙女棒。\r
\r
苏晴：林大掌柜，忙完别人家的团圆，该轮到我们放寒假了吧！\r
林念快步跑过去，接过她递来的仙女棒。\r
林念：你怎么知道我刚好忙完？\r
苏晴掏出打火机点亮两根仙女棒，璀璨的金色星火在冬夜里噼啪跳跃起来。\r
苏晴：高二那会儿每次晚自习拖堂，我不也是算准了时间在走廊等你嘛！来，许个新年愿望！\r
林念举着跳跃的星火，认真地闭上眼睛。\r
林念：希望新的一年，林记的生意越来越好，我们苏晴的摄影室也客似云来！\r
\r
### M8｜神秘的「二老板」\r
**【事件ID：EVT_FRIEND_M08｜互动类型：日常趣事】**\r
\r
周雨桐入职的第二周，苏晴像往常一样端着相机走进店里，熟门熟路地自己去吧台倒柠檬水、拿试吃小切块。\r
刚来不久的小雨看在眼里，偷偷把林念拉到后厨角落，小声询问。\r
\r
周雨桐：念念姐……外面那位拿相机的姐姐每天都来巡店，她是不是咱们林记深藏不露的二股东呀？\r
站在门帘后的苏晴正好听见，噗嗤一声笑弯了腰，掀帘走进来。\r
苏晴：小雨妹妹，你太有眼光了！我就是林记负责吃垮林老板的最大债主！\r
林念哭笑不得地拍了苏晴一下，向脸红的小雨解释。\r
林念：小雨你别听她胡说，这是我从高一就坐一桌的好朋友苏晴。以后她来讨蛋糕吃，超过一块你就直接拿擀面杖赶她走！\r
苏晴夸张地捂住胸口。\r
苏晴：好哇林念，有了可爱的学徒妹妹，连一块小蛋糕都不舍得给我吃啦！\r
\r
### M9｜大学异地的旧车票\r
**【事件ID：EVT_FRIEND_M09｜互动类型：大学回忆与分享】**\r
\r
苏晴生日前夕，林念帮苏晴整理摄影工作室的展示架，偶然在抽屉里看到一叠保存完好的蓝色高铁票根。\r
每一张票根背面，都用铅笔写着日期和天气，往返于两人当年读大学的两座城市之间。\r
\r
林念拿起最上面的一张票根，眼眸微暖。\r
林念：苏晴，这十几张车票你居然全都留着呢？\r
苏晴走过来，指着其中一张盖着雪花印章的车票。\r
苏晴：当然留着啦。你看这张，是大二那年冬天你期末考失利，我在电话里听你声音不对，买最晚一班高铁去你们学校找你。结果那天北方下暴雪，列车晚点两个小时，我一出站就看见你裹成个球，怀里还揣着两杯热奶茶在出站口跺脚。\r
林念笑着靠在展示架边。\r
林念：那时候虽然隔着几百公里，但每次只要看到你背着相机走出闸机，我就觉得什么难过都过去了。\r
苏晴挽住她的手臂。\r
苏晴：现在更好啦，不用买火车票，抬脚走五分钟就能见着你！\r
\r
### M10｜画册上的咖啡印\r
**【事件ID：EVT_FRIEND_M10｜互动类型：直接表达自己的不满】**\r
\r
线上小店筹备期间，苏晴连续熬了两个通宵帮林记修菜单精修图。\r
这天上午，苏晴把借去参考构图的《法式甜点装盘画册》还给林念，林念翻开封底，发现角落沾了一圈浅褐色的咖啡渍。\r
\r
林念没有憋在心里，而是直接指了指那个角落看向苏晴。\r
林念：苏晴，这本画册的封底是不是你修图喝冰美式的时候不小心蹭到啦？\r
苏晴一看，顿时懊恼地双手合十。\r
苏晴：啊！对不起对不起！前天半夜调无花果那张图的色温，手一抖碰倒了杯子，我当时擦干了以为没留印子，正准备在网上给你重新买一本赔罪呢！\r
林念拿起一张透明磨砂书皮，耐心地帮画册包上边角。\r
林念：不用买新的，包上书皮就看不出来啦。我们高一就约定过嘛，看到不妥的地方直接说出来，不自己生闷气，也不让你猜。\r
苏晴抱住林念的肩膀晃了晃。\r
苏晴：遵命！下次我在修图桌旁边绝对不放不带盖的咖啡杯了！\r
\r
### M11｜秋雨夜的热姜茶\r
**【事件ID：EVT_FRIEND_M11｜互动类型：认真听苏晴讲工作】**\r
\r
十一月下起了冷雨，苏晴去古镇拍老手艺人外景，傍晚回来时淋了一身湿气，连打了两个喷嚏。\r
林念得知后，立刻在后厨煮了一壶红糖姜枣茶装进保温桶，撑着伞送去了苏晴的工作室。\r
\r
苏晴裹着毛毯捧着热腾腾的姜茶，感动得直吸鼻子。\r
苏晴：念念，你简直是我的救命菩萨！今天在古镇蹲了四个小时拍竹编老爷爷，脚都快冻麻了。\r
林念拿吹风机帮她吹着半干的发尾。\r
林念：拍手艺人专题这么辛苦，今天拍到满意的镜头了吗？\r
苏晴提到摄影，眼睛立刻亮了起来，指着显示器上的原片。\r
苏晴：拍到了！你看这张，雨停那一下正好有一束光打在老爷爷满是老茧的手上。念念，我想把咱们栖云镇这些快要被人遗忘的老手艺全都拍下来，办一场真正的纪实展！\r
林念看着屏幕里充满生命力的画面，温和地笑了笑。\r
林念：一定能办成的。不管你拍到多晚，我的热姜茶和烤面包随时给你备着。\r
\r
### M12｜一周年与真皮相机带\r
**【事件ID：EVT_FRIEND_M12｜互动类型：支持她的摄影项目】**\r
\r
接手林记满一周年的这天，林念用自己攒下的第一笔年终分红，定制了一条刻着「SQ」缩写的手工焦糖色真皮相机背带，送给苏晴。\r
\r
苏晴摸着温润厚实的皮质背带，惊喜得睁大了眼睛。\r
苏晴：天呐！我原来的尼龙背带磨脖子好久了，一直舍不得换，你怎么连这都看出来啦？\r
林念帮她把新背带换到相机上，系好安全扣。\r
林念：每次看你拍完菜单图揉肩膀就知道啦。这一年林记能顺顺利利走到今天，有一半功劳都在你这台相机上呢。\r
苏晴背上换好新背带的相机，原地转了一圈，举起镜头对准林念。\r
苏晴：那这第二年的第一张照片，还是得由我们林老板来开光！\r
\r
**第三章互动：各自成长的并肩同行（M13—M18）**\r
\r
### M13｜盲测十碗奶油的代价\r
**【事件ID：EVT_FRIEND_M13｜互动类型：主动分享烦恼】**\r
\r
为了推进产品标准化，林念在后厨一字排开十碗不同打发转速与糖量配比的动物奶油，把苏晴拉来当「铁面裁判」。\r
\r
苏晴吃到第七碗的时候，放下小勺连连摆手。\r
苏晴：林老板，饶命啊！我就算再爱吃奶油，连尝七碗也要算工伤了！\r
林念递过一杯解腻的温柠檬水，有些苦恼地看着记录表。\r
林念：我试了一下午，数字最标准的是第四碗，但总觉得吃起来少了一点以前的手工感。\r
苏晴漱了漱口，指了指排在第六号的小瓷碗。\r
苏晴：选六号！四号虽然挺括，但吃起来像酒店自助餐里的标准奶油；六号是九分发转慢速收尾的对不对？入口那一下最像林阿姨和你平时亲手打出来的绵密感！\r
林念核对了一下底标，惊喜地拍手。\r
林念：苏晴，你的舌头比我的电子秤还准！真不愧是从小吃林记长大的首席试吃官！\r
\r
### M14｜两个社牛的交锋\r
**【事件ID：EVT_FRIEND_M14｜互动类型：日常趣事】**\r
\r
许知遥入职后的第二周，苏晴来店里送修好的宣传照，两个同样开朗健谈的姑娘在吧台前一见如故，从穿搭、胶片机一直聊到镇上的美食八卦。\r
林念端着刚烤好的抹茶切块走出后厨，见苏晴聊得连蛋糕都忘了吃，故意板起脸敲了敲桌面。\r
\r
林念：咳咳，某人今天来林记到底是看老同桌的，还是来跟我们的新店员联谊的呀？\r
许知遥吐了吐舌头，笑着躲到收银台后去整理单据。\r
苏晴笑嘻嘻地凑到林念身边，挽住她的胳膊晃了晃。\r
苏晴：哟，我们林大店长吃醋啦？我是替你考察一下新伙伴嘛！知遥性格又好又爽快，有她在前厅帮你挡着，你就不用每天说得嗓子冒烟了！\r
林念忍不住笑了出来，把抹茶蛋糕塞进她手里。\r
林念：算你有理，快吃你的蛋糕吧！\r
\r
### M15｜省城展厅的布展义工\r
**【事件ID：EVT_FRIEND_M15｜互动类型：支持她的摄影项目】**\r
\r
苏晴的《小镇手艺人》摄影作品入选省城青年摄影展后，布展那天正好是周末。\r
林念把店里的事务托付给林暖、小雨和知遥，自己拎着两大盒手作曲奇，一大早坐城际列车赶去省城展厅帮苏晴布展。\r
\r
空旷的艺术馆展厅里，苏晴正站在梯子上比划画框高度，林念在下面帮她看着水平线。\r
林念：往左偏一点点——好，再往上两厘米，正了！\r
苏晴从梯子上跳下来，擦了擦额头的汗，看着整面墙挂好的二十幅纪实摄影作品，眼圈微微发红。\r
苏晴：念念，这是我人生中第一个正式展位。刚才站在梯子上的时候我还在想，幸好今天有你在下面帮我扶着梯子。\r
林念打开曲奇盒递给她一块黄油曲奇，并肩站在作品墙前。\r
林念：以后不管你的作品挂到多大的美术馆去，只要你需要，我随时来给你扶梯子。\r
\r
### M16｜草坪婚礼后的高跟鞋\r
**【事件ID：EVT_FRIEND_M16｜互动类型：认真听苏晴讲工作】**\r
\r
四月的那场大型户外草坪婚礼，林记负责全场甜品台，而新娘请来的首席跟拍摄影师恰好也是苏晴。\r
直到婚礼晚宴开席，两人终于完成了各自的任务，一前一后躲到草坪边的长椅上，默契地踢掉了磨脚的鞋子。\r
\r
苏晴揉着小腿肚长舒一口气。\r
苏晴：天呐，背着两台单反跟拍了八个小时，我的腿已经不是我自己的了！\r
林念从随身小包里摸出两片创可帮她贴在脚后跟上，又递过去一只预留的奶油泡芙。\r
林念：我今天在后厨盯那座三层翻糖主蛋糕的时候，手心也全是汗，生怕路上颠歪了一点点。\r
苏晴咬了一口泡芙，看着不远处灯火辉煌的草坪婚礼现场，感慨地笑了笑。\r
苏晴：念念，你还记得大一暑假我们俩去兼职发传单，一天才赚六十块钱吗？结果今天，你是这场婚礼的甜品主理人，我是首席摄影师——我们俩居然真的在顶峰会师啦！\r
林念靠在苏晴肩头，笑着碰了碰她手里的泡芙。\r
林念：这还只是半山腰呢，苏大摄影师，山顶还在前头等着我们呢！\r
\r
### M17｜临江老街的生煎包\r
**【事件ID：EVT_FRIEND_M17｜互动类型：邀请苏晴吃饭】**\r
\r
陪林念去临江市考察商圈的那天傍晚，两人走得饥肠辘辘。\r
苏晴收起相机，熟门熟路地拽着林念拐进了一条充满烟火气的老巷子。\r
\r
林念惊讶地看着巷口排着队的生煎铺。\r
林念：苏晴，你对临江市的小巷子怎么比本地人还熟呀？\r
苏晴得意地晃了晃脑袋。\r
苏晴：我上个月来临江拍城市人文专题，早就把这边的宝藏小店摸透了！这家阿婆生煎开了二十五年，底壳脆得像你的芋泥薄脆一样！\r
两人端着刚出锅的生煎包坐在巷口小马扎上，苏晴指了指不远处亮起灯光的文创街区。\r
苏晴：念念，你看那边下班走出来的年轻白领，手里大多拎着咖啡或者轻食，却很少见到一家有温度的现烤手工蛋糕店。要是林记能开在这条街转角，下班路过闻见香味，准能走不动道！\r
林念一边记下位置，一边夹起一只生煎包喂到苏晴嘴边。\r
林念：带苏晴来考察真是赚翻了，既管饱肚子，还送商圈选址顾问服务！\r
\r
### M18｜严肃主管的破冰秘籍\r
**【事件ID：EVT_FRIEND_M18｜互动类型：主动分享烦恼】**\r
\r
唐鸢刚入职的第一周，因为严格推行量化标准，后厨气氛一度有些紧绷。\r
晚上打烊后，林念独自坐在店门外的台阶上托着腮发愁，苏晴骑着小电驴送相片过来，一眼就看穿了她的心事。\r
\r
苏晴在林念身边坐下，戳了戳她的脸颊。\r
苏晴：怎么啦？我们林店长搞不定新来的连锁大神？\r
林念轻轻叹了口气。\r
林念：阿鸢姐技术特别好，人也很敬业，但她太严肃了，每次一拿秒表出来，小雨吓得连切草莓都不敢大喘气。我夹在中间，真怕团队磨合不好。\r
苏晴眨了眨眼睛，狡黠地一笑。\r
苏晴：念念，我今天在后厨抓拍工作照的时候仔细观察过了——唐鸢虽然嘴上硬邦邦的，但小雨切果丁不小心滑刀的时候，她的手第一时间就护过去了。这种面冷心热的实力派，最吃「真诚请教+投喂夜宵」这一套了！\r
林念眼睛一亮。\r
林念：还是你观察得细！那我明天留下来跟她一起核对烘烤曲线，再给她煮碗酒酿圆子试试！\r
\r
**第四章互动：忙碌岁月里的真心守候（M19—M24）**\r
\r
### M19｜空铺子里的第一张合影\r
**【事件ID：EVT_FRIEND_M19｜互动类型：支持她的摄影项目】**\r
\r
分店（或新渠道中心）刚签下场地合同的那天下午，屋里还是一片空荡荡的水泥毛坯。\r
苏晴背着三脚架跟林念一起走进空旷的铺面，阳光从还没挂窗帘的落地窗斜斜地照进来。\r
\r
苏晴把三脚架立在屋子正中央，朝林念招了招手。\r
苏晴：念念，快过来站在这束光里！\r
林念看着满地灰尘的毛坯房，有些不好意思地笑了。\r
林念：这里现在连一面墙都没刷呢，拍出来能好看吗？\r
苏晴认真地调试着镜头焦距。\r
苏晴：我正在筹备一组叫《生长的空间》的纪实摄影。越是空无一物的起点，等将来摆满鲜花和蛋糕的时候，对比起来才越震撼。来，林老板，张开双臂，比划一下未来展示柜摆在哪儿！\r
林念笑着张开双手，在空旷的房间里比划出梦想的轮廓，快门声在空屋里回荡得格外清晰。\r
\r
### M20｜双城奔波的冰糖雪梨\r
**【事件ID：EVT_FRIEND_M20｜互动类型：主动分享烦恼】**\r
\r
新业务刚落地的第一个月，林念每天在栖云镇和临江市之间两头奔波，连续说了几天话，嗓子变得有些干涩沙哑。\r
这天傍晚林念刚下城际大巴走回老店门口，就看见苏晴抱着一只大号闷烧罐靠在门框上等她。\r
\r
林念惊讶地走上前，声音还有些哑。\r
林念：苏晴？你怎么站在门口吹冷风呀？\r
苏晴听见她沙哑的嗓音，眉头立刻拧了起来，不由分说地拧开闷烧罐盖子，盛出一碗温热的川贝冰糖雪梨水塞进她手里。\r
苏晴：我就知道你这个拼命三娘肯定顾不上喝水！快，当着我的面把这一碗全喝光，一口都不许剩！\r
林念小口喝着清甜温润的雪梨水，心里暖洋洋的。\r
林念：知遥和小雨她们今天也劝我少跑两趟，其实交给她们我已经放心多了，就是习惯了什么都去盯一眼。\r
苏晴替她把围巾往上拢了拢。\r
苏晴：学会偷懒也是当大老板的必修课！今晚不许再看报表了，乖乖回家睡觉！\r
\r
### M21｜给小设计师搭桥\r
**【事件ID：EVT_FRIEND_M21｜互动类型：认真听苏晴讲工作】**\r
\r
引荐叶星河来林记合作的那周周末，林念和苏晴在咖啡馆里聊起这位才华横溢却有些理想主义的小姑娘。\r
\r
苏晴搅动着杯子里的拿铁，笑着回忆。\r
苏晴：其实我上个月在青年美展上第一次看到叶星河的水彩画时，她在展位前站了一整天都没卖出几张明信片，因为她画的尺寸太奇怪了，根本塞不进市面上的标准相框里。\r
林念忍不住笑了出来。\r
林念：难怪她第一天来林记，就设计了一个要折两分半钟的立体花瓣盒！不过她改版后的抽拉腰封真的特别惊艳。\r
苏晴托着腮看向窗外，眼神温和。\r
苏晴：因为我刚毕业回栖云镇拍照片的时候，也跟她一样，总怕向商业妥协就会弄丢自己的心气儿。念念，谢谢你愿意耐心地保留她的画，帮她找到艺术和实用的平衡点。\r
林念笑着举起咖啡杯碰了碰她的杯沿。\r
林念：这还不是跟我们苏老师学的？尊重每个人的棱角，才能拍出最好看的照片，也才能做出最好吃的蛋糕呀。\r
\r
### M22｜差点错过的晚场电影\r
**【事件ID：EVT_FRIEND_M22｜互动类型：直接表达自己的不满】**\r
\r
这天周五晚上，苏晴提前买好了两张八点场的经典修复版老电影票。\r
然而七点四十的时候，林念还在办公室里和唐鸢核对两店的冷链损耗表，直到苏晴直接推开办公室的门。\r
\r
苏晴晃了晃手里的两张电影票，微微挑眉。\r
苏晴：林大店长，现在是晚上七点四十二分，距离电影开场还有十八分钟。你不会又要把我一个人扔在电影院吧？\r
林念猛地看了一眼挂钟，顿时倒吸一口凉气，手忙脚乱地关上电脑。\r
林念：天呐！我看报表看入迷了！阿鸢姐，剩下的明天再对，我先走一步！\r
跑出老街的路上，苏晴一边拉着她小跑，一边认真地叮嘱。\r
苏晴：念念，今天幸好电影院离得近。我知道两家店磨合事情多，但要是哪天实在抽不开身，你一定要提前跟我说一声，别一个人硬撑着两头赶，听见没？\r
林念气喘吁吁地握紧苏晴的手。\r
林念：听见啦！今晚的爆米花和可乐全算我的！\r
\r
### M23｜周三晚上的专属席位\r
**【事件ID：EVT_FRIEND_M23｜互动类型：邀请苏晴吃饭】**\r
\r
那次迟到的小矛盾说开之后，迎来了两人约定好的第一个「周三固定约饭夜」。\r
下午五点半，林念准时把店务交接给许知遥，提前二十分钟赶到了老街转角的私房菜馆，点好了苏晴最喜欢的糖醋排骨和桂花山药。\r
\r
六点整，苏晴推门走进包厢，看到桌上已经冒着热气的糖醋排骨和正笑眯眯等着她的林念，愣了一下。\r
苏晴：哇，林大忙人今天居然比我还早到二十分钟！\r
林念拉开身旁的椅子，拍了拍椅垫。\r
林念：那当然，每周三晚上的苏晴专属席位，我现在可是设了三个闹钟提醒自己呢！快坐下尝尝，刚出锅的排骨！\r
苏晴坐下来夹了一块排骨，眉眼弯弯。\r
苏晴：这还差不多。其实我也不是非要你每次都提前到，只要知道你心里一直记着我们的约定，我就很开心啦。\r
\r
### M24｜红光暗房里的两周年\r
**【事件ID：EVT_FRIEND_M24｜互动类型：支持她的摄影项目】**\r
\r
二十四岁生日过后的周末，苏晴神秘兮兮地把林念带进了自己工作室新搭建的传统胶片暗房。\r
暗房里亮着幽暗柔和的安全红灯，水槽里盛着显影液。\r
\r
苏晴递给林念一把塑料夹子，指了指显影盘里的相纸。\r
苏晴：念念，盯紧这张相纸哦，见证奇迹的时刻到了！\r
林念屏住呼吸凑近水面——随着苏晴轻轻晃动托盘，原本洁白的相纸上，一点点浮现出清晰的黑白影调：那是两年前林念刚接手林记的第一天，系着围裙站在柜台后紧张又青涩的笑脸，与昨天24岁生日会上被全体伙伴簇拥着的从容模样拼在一起的双联画。\r
林念看着水波下渐渐定格的画面，眼眶微微湿润。\r
林念：苏晴……原来在你的镜头里，这二十四个月我是这样一点点长大的。\r
苏晴用夹子夹起相纸挂在晾干绳上，侧头对她一笑。\r
苏晴：对呀，别人只看到林老板现在能管两家店有多风光，但我的暗房里，留着你走过的每一步脚印。\r
\r
**第五章互动：风雨同舟的灵魂挚友（M25—M30）**\r
\r
### M25｜秋山采风的野板栗\r
**【事件ID：EVT_FRIEND_M25｜互动类型：认真听苏晴讲工作】**\r
\r
九月初秋，苏晴受省城旅游画报邀请，去栖云镇外的高山古村落拍了一周秋景。\r
回来那天，她连摄影包都没来得及放，就拎着一只沾着露水和泥土气的竹篓冲进了林记后厨。\r
\r
苏晴把竹篓往操作台上一放，擦了擦额头的汗。\r
苏晴：念念！快看我从山里老农家给你背回来的宝贝！\r
林念打开竹篓一看，里面全是刚裂开刺球、色泽油亮饱满的高山野板栗，最上面还放着几片压平的火红枫叶。\r
林念惊喜地捡起一颗栗子。\r
林念：这么新鲜的高山油栗！你去山上拍片子，怎么还背了这么重一篓栗子回来？\r
苏晴笑着拿起一片红枫叶夹进林念的笔记本里。\r
苏晴：我在山上拍古村晒秋的时候，闻见老乡家里炒栗子的香味，第一个想到的就是你！你不是在愁下个月秋日文化节做什么主题吗？你看这秋栗配金桂，多有咱们江南秋天的味道呀！\r
\r
### M26｜后巷石阶上的童年味\r
**【事件ID：EVT_FRIEND_M26｜互动类型：童年与高中回忆】**\r
\r
桂花栗子蛋糕第一炉小样试制成功的那个傍晚，林念偷偷留出了两块温热的蛋糕角，拉着苏晴坐到了林记后厨门外的青石板台阶上。\r
晚风吹过头顶的老桂花树，细碎的金桂花瓣落了两人一肩。\r
\r
苏晴捧着纸盘吃了一大口，幸福地眯起眼睛。\r
苏晴：就是这个味道！念念，你还记不记得高一那年秋天，林阿姨难得做了一次桂花栗子糕，你下晚自习揣在怀里带给我吃，结果我们俩坐在操场看台上吃得满手都是栗子碎！\r
林念笑着拂去苏晴头发上的一片桂花。\r
林念：怎么不记得，那天你还信誓旦旦地说，以后等我继承了林记，你要包下店里所有的桂花栗子蛋糕。\r
苏晴得意地晃了晃手中的小叉子。\r
苏晴：你看，我现在不就吃上林念主理人亲手复原的第一炉桂花栗子蛋糕了吗？愿望成真！\r
\r
### M27｜深夜后厨的烫伤膏\r
**【事件ID：EVT_FRIEND_M27｜互动类型：主动分享烦恼】**\r
\r
桂花栗子蛋糕批量测试出现危机的那几天，林念每晚都在后厨熬夜重做实验。\r
这天夜里十一点，后厨的门被轻轻推开，苏晴没有带相机，只拎着一只保温砂锅和一支烫伤药膏走了进来。\r
\r
苏晴一句话也没多问，先把砂锅里的皮蛋瘦肉粥盛出来晾着，然后拉过林念的右手，看着她食指关节上被烤盘边缘烫出的红印，心疼地叹了口气。\r
苏晴：我就知道，每次你遇到大难关，准会开启不吭声硬扛模式。手伸出来，不许动。\r
林念看着苏晴低头认真帮自己涂药膏、轻轻吹气的样子，紧绷了一整天的眼眶忽然有些发酸。\r
林念：苏晴……要是这次文化节我搞砸了，把外婆和妈妈攒了三十年的招牌弄丢了怎么办？\r
苏晴合上药膏盖子，抬起头，眼神笃定而温柔地看着她。\r
苏晴：不会搞砸的。而且就算天塌下来，林阿姨、小雨、阿鸢、知遥、星河，还有我，我们七个人一起顶着，怕什么？来，先把粥喝了，明天我帮你去找破局的办法！\r
\r
### M28｜跑旧的帆布鞋与小面包\r
**【事件ID：EVT_FRIEND_M28｜互动类型：支持她的摄影项目 / 双向奔赴】**\r
\r
为了帮林念找回老街坊记忆里的桂花栗子蛋糕，苏晴连续三天扛着设备走遍了栖云镇的大街小巷，采访了十几位老顾客。\r
把录音笔和照片交给林念的那天晚上，苏晴累得坐在吧台椅上直打哈欠，帆布鞋的鞋边都磨起了一层毛边。\r
\r
林念没有说话，转身走进后厨，端出一盘刚刚出炉、散发着浓郁奶香的妈妈牌原味小面包，塞进苏晴怀里。\r
苏晴闻着熟悉的面包香，愣了一下，随即笑弯了眼睛。\r
苏晴：哇！是林阿姨配方的热乎小面包！\r
林念拉过椅子坐在她对面，轻声开口。\r
林念：高三那年晚自习，我给你带小面包的时候，从来没想过有一天你会为了帮我守住这家店，跑遍整座栖云镇。苏晴，谢谢你。\r
苏晴咬了一大口松软温热的小面包，含糊不清地笑道。\r
苏晴：跟本首席摄影师客气什么！只要林老板一辈子给我烤小面包，我跑断腿也乐意！\r
\r
### M29｜秋日江畔的晚风\r
**【事件ID：EVT_FRIEND_M29｜互动类型：邀请苏晴吃饭 / 高潮余韵】**\r
\r
秋日文化节大获全胜当晚，热闹的团队庆功宴结束后，林念和苏晴偷偷溜出餐厅，并肩沿着省城的临江步道慢慢散步。\r
江风微凉，吹散了两个多月来的所有疲惫。\r
\r
林念看着江面上倒映的霓虹灯火，轻声笑了笑。\r
林念：今天下午在展馆里抱住你哭的时候，其实我脑子里一下子闪过了好多以前的事。\r
苏晴双手背在身后，倒退着走了两步，笑吟吟地看着林念。\r
苏晴：巧了，我当时脑子里也在放电影呢。念念，高三那年走出老师办公室看到你红着眼睛抱住我的时候，我就在心里偷偷发过誓了——这辈子不管发生什么事，我都绝对不会丢下林念一个人。\r
林念停下脚步，看着月光下挚友清澈的眉眼，伸手勾住了她的小指。\r
林念：拉钩。下个三年，下下个三年，等我们变成陈奶奶那样满头白发的老太太，还要一起在店门口晒太阳吃蛋糕。\r
苏晴用力勾住她的手指晃了晃。\r
苏晴：拉钩，一百年不许变！\r
\r
### M30｜苏晴工作室的新招牌\r
**【事件ID：EVT_FRIEND_M30｜互动类型：支持她的摄影项目】**\r
\r
凭借在秋日文化节上展出的《栖云镇的秋日甜味记忆》纪实摄影系列，苏晴在省内摄影界一举成名，接到了源源不断的商业约拍与展览邀请。\r
第三十个月中旬，苏晴的独立摄影工作室正式扩建重装开业。\r
林念带着小雨、知遥、阿鸢和星河，推着一座精心打造的「胶片相机造型翻糖奶油甜品台」前去贺喜。\r
\r
苏晴看着那只连镜头刻度都用巧克力精细还原的相机蛋糕，惊喜得原地跳了起来。\r
苏晴：天呐！这相机蛋糕也太逼真了吧！我都舍不得切了！\r
林念笑着帮苏晴把新工作室的木质招牌挂正。\r
林念：刚毕业那年，我们俩一个怕找不到工作，一个怕接不到单子。现在你看，林记走出了栖云镇，我们的苏晴也成了真正的大摄影师了！\r
苏晴挽住林念的胳膊，对着工作室门前的落地镜拍下一张合照。\r
苏晴：那是因为我们俩是最佳拍档呀，谁都不许掉队！\r
\r
**第六章互动：走向远方的盛大并肩（M31—M36）**\r
\r
### M31｜林总与苏老师的下午茶\r
**【事件ID：EVT_FRIEND_M31｜互动类型：认真听苏晴讲工作】**\r
\r
建立起标准化供应链后，林念终于不用每天清晨五点去后厨打蛋了；而苏晴的工作室也招了两位年轻的摄影助理。\r
这天下午，难得清闲的两人坐在栖云镇老店的阳光房里，分吃着一碗双皮奶。\r
\r
苏晴端起红茶杯，故意捏着嗓子敬了林念一杯。\r
苏晴：哎呀，现在跟我们林总喝下午茶，都不用听后厨的计时器滴滴响了，真是不习惯呢！\r
林念好笑地白了她一眼，也学着她助理的语气回敬。\r
林念：彼此彼此呀，我刚才去你工作室门口，听到两个小助理一口一个「苏老师」地叫着，派头可比我足多了！\r
苏晴哈哈大笑，放下茶杯伸了个懒腰。\r
苏晴：不管外人叫我们林总还是苏老师，反正关起门来，我永远是那个去一班后门蹭小面包的苏晴，你也永远是我的同桌林念！\r
\r
### M32｜出差高铁上的半副耳机\r
**【事件ID：EVT_FRIEND_M32｜互动类型：邀请苏晴吃饭 / 同行】**\r
\r
为了考察外省新城市的门店选址，林念与受邀拍摄城市风物宣传片的苏晴一起踏上了跨省高铁。\r
列车飞驰在江南的田野间，林念从包里拿出一盒切好的无花果奶油小方，苏晴则递过来一只蓝牙耳机。\r
\r
苏晴把右耳的耳机塞进林念耳朵里，点开手机里熟悉的歌单。\r
苏晴：听听看，是不是我们高二午休时最常拿MP3偷偷听的那首老歌？\r
熟悉的旋律在耳畔响起，林念看着窗外飞速掠过的风景，仿佛又回到了十七岁那年并肩坐在学校大巴车上的午后。\r
林念靠在苏晴肩头，轻声开口。\r
林念：高二春游那次，我们俩也是这样分着一副耳机，当时觉得去一趟邻市就好远好远。没想到现在，我们已经一起坐着高铁，把喜欢的事业带去全国各地了。\r
\r
### M33｜旗舰店的第一束晨光\r
**【事件ID：EVT_FRIEND_M33｜互动类型：支持她的摄影项目】**\r
\r
LV4 高端主题旗舰店正式开业前一天清晨六点，整座门店已经布置完毕，还没有迎来第一位顾客。\r
苏晴带着相机提前来到店里采光，晨曦刚好穿过优雅的拱形门洞，在光洁的大理石台面与繁花之间投下一道金色的光柱。\r
\r
苏晴放下相机，忽然向站在光柱里的林念伸出右手，微微欠身行了个俏皮的礼。\r
苏晴：美丽的林创始人，在你的旗舰店迎接全城客人之前，不知道本摄影师有没有荣幸，请你跳支舞呀？\r
林念忍俊不禁，把手搭在苏晴掌心里。\r
林念：我们俩谁会跳交际舞呀？\r
苏晴拉着她在洒满晨光的大厅里欢快地转了两个圈，裙摆与笑声一同飞扬起来。\r
苏晴：管它会不会呢，开心就行！来，保持这个笑容，我用遥控快门抓拍了哦！\r
\r
### M34｜不许偷看的机密工程\r
**【事件ID：EVT_FRIEND_M34｜互动类型：直接表达自己的不满 / 趣味互动】**\r
\r
距离三周年店庆只剩两个月，林念这天下午端着新烤的芋泥薄脆去苏晴工作室串门，一推门，却见苏晴手忙脚乱地把电脑屏幕上的排版软件最小化，还用身体挡住了桌上一摞刚冲印出来的老照片。\r
\r
林念眯起眼睛走过去，叉着腰看向她。\r
林念：苏晴同志，你背着我搞什么秘密工程呢？连我都不能看？\r
苏晴护着桌上的照片袋，一脸傲娇地摇了摇头。\r
苏晴：绝对机密！这是本大师耗时三年打造的镇店之宝，不到第三十五个月最后一天，就算林老板拿十个草莓蛋糕来贿赂我，我也绝不剧透半个字！\r
林念看着桌角露出的一张高二教学楼速写，心里已然猜到了七八分，眉眼间染上温暖的笑意。\r
林念：好，那我就乖乖等着苏大师揭晓惊喜的那天！\r
\r
### M35｜重返二班后门的合照\r
**【事件ID：EVT_FRIEND_M35｜互动类型：高中回忆与分享】**\r
\r
苏晴将《林记与我们的三年》相册交给林念后的那个周日，两人趁着三周年庆典前的最后一天假期，一起回了趟栖云一中。\r
站在当年高二（2）班熟悉的教室后门走廊上，午后的阳光依旧像六年前一样穿过梧桐树叶落在窗台上。\r
\r
林念站在后门外，像当年一样探出半个脑袋，轻轻敲了两下门框。\r
林念：苏晴同学，下课啦，去不去食堂抢糖醋排骨？\r
站在门内的苏晴转过身，看着门外已经褪去青涩、眼神明亮从容的林念，眼眶微热，却笑得比阳光还灿烂。\r
苏晴：来啦！哪怕再过三十年，只要你敲门喊我，我永远都在！\r
\r
### M36｜翻开下一本三年相册\r
**【事件ID：EVT_FRIEND_M36｜互动类型：三周年终局温情互动】**\r
\r
三周年盛典圆满落幕的夜晚，喧嚣散去，两人回到了栖云镇老店最熟悉的小院里。\r
桌上摆着已经贴上三周年全家福、彻底圆满的《林记与我们的三年》纪念相册。\r
苏晴从背包里又拿出一本一模一样的亚麻布面空白新相册，推到林念面前，封面上写着——《林记与我们的第二个三年》。\r
\r
林念看着那本崭新的相册，惊喜地看向苏晴。\r
林念：你怎么连第二本都准备好啦？\r
苏晴托着腮帮子，笑吟吟地看着她。\r
苏晴：因为林记的故事不会在第三十六个月结束，我们两个人的故事更是一辈子的连载呀！林老板，接下来的日子，我的镜头可还继续归你承包咯？\r
林念翻开新相册的第一页，握紧苏晴的手，笑容温暖而坚定。\r
林念：一言为定，一辈子都不解约！\r
\r
## 第十三章：最终结局与伙伴个人结局完整文案\r
\r
### 13.1 最终结局一：社区老店结局\r
**【触发条件：完成36个月经营，经营规模适中，\`communityScore\` 较高】**\r
**【事件ID：EVT_FINAL_END_COMMUNITY】**\r
\r
三周年的阳光温暖地洒在栖云镇的青石板街上。\r
走过三十六个月的四季流转，林念最终选择把全部的心血留在这座熟悉的小城，继续经营栖云镇的林记烘焙。\r
店铺规模不算庞大，却被大家打理得无比温馨——窗边插着星河挑的鲜花，展示柜里摆着小雨和阿鸢做的时令蛋糕，每一位老街坊进门都不需要报出菜单。\r
\r
清晨的风铃声响起，陈奶奶牵着小孙子走进店里。\r
陈奶奶：知遥丫头，念念，今天我们还是老样子！\r
许知遥笑吟吟地把早就留好的少糖原味奶油蛋糕递过去。\r
许知遥：早就给您留着第一炉最松软的啦，陈奶奶快去窗边坐！\r
周雨桐端着一盘刚出炉的小曲奇从后厨走出来，放到陈奶奶桌前。\r
周雨桐：这是我和鸢姐今天新烤的黄油曲奇，送给小朋友尝尝！\r
唐鸢站在开放式玻璃窗后擦拭着烤盘，嘴角带着温和的笑意。\r
唐鸢：虽然没有开满全国的连锁店，但能把这间店里的每一炉蛋糕都做到一百分，这种踏实感一点也不差。\r
林暖端着一壶刚泡好的桂花茶坐在小院躺椅上。\r
林暖：念念，看着街坊四邻每天高高兴兴地进出咱们林记，妈这心里比什么都满足。\r
\r
苏晴背着相机推门进来，将今天刚拍的一组街巷照片摆到柜台上。\r
苏晴：林老板，三周年纪念照我已经洗出来啦！你看，全栖云镇最有人情味的地方，非咱们林记莫属！\r
林念系着熟悉的围裙走出柜台，看着满屋子熟悉的面孔，脸上满是笃定与平和。\r
林念：是啊。不需要去追逐多么遥远的目标，能守护好大家身边这口熟悉的甜，就是我最喜欢的生活了。\r
\r
旁白：林记依然是一家不算大的店，却拥有着整座小城最高的顾客忠诚度，成为许多人生命中不可或缺的一部分。\r
旁白：【达成最终结局：社区老店结局】\r
\r
---\r
\r
### 13.2 最终结局二：传统手作老字号\r
**【触发条件：完成36个月经营，\`traditionScore\` 为主导最高项】**\r
**【事件ID：EVT_FINAL_END_TRADITION】**\r
\r
三周年店庆这天，栖云镇的林记烘焙门前热闹非凡。\r
凭借着三年来对外婆经典配方的坚守与匠心打磨，林记烘焙正式被授予「传统手作烘焙老字号」牌匾，桂花栗子蛋糕与传统原味奶油蛋糕更成为了远近闻名的代表作。\r
\r
挂牌仪式后，陈奶奶摸着崭新的胡桃木牌匾，激动得连连点头。\r
陈奶奶：好呀，真好！从林老太太到林大姐，再到咱们念念，三代人守着这一门手艺，实至名归！\r
周雨桐捧着刚出炉的桂花栗子蛋糕走出来，香气瞬间盈满前厅。\r
周雨桐：念念姐，今天这批高山秋栗甜度正好，我按外婆「栗子甜则少放糖」的法子做的，大家都夸醇厚又不腻！\r
唐鸢看着整齐排列的传统糕点，由衷地感叹。\r
唐鸢：以前我总觉得传统手艺会被现代工业淘汰，来到林记才明白，真正用心的手作老味道，时间越久越有生命力。\r
叶星河指着墙上装裱起来的《林记三代制饼图谱》。\r
叶星河：能为一家真正的老字号设计视觉和礼盒，也是我这三年最骄傲的作品！\r
许知遥笑着举起预约本。\r
许知遥：现在连外省的食客都专门坐高铁来买咱们的老式鸡蛋糕和桂花栗子蛋糕呢！\r
\r
内室里，林暖将外婆那本写满三代人批注的《配方笔记》郑重交到林念手中。\r
林暖：念念，你外婆把这本笔记传给我的时候，我二十二岁；三年前你接手林记的时候，也是二十二岁。如今，你不仅守住了老味道，还让它比以前更响亮了。\r
林念双手接过沉甸甸的笔记，认真地看向母亲和一旁举着相机记录这一幕的苏晴。\r
林念：妈，您放心。只要林记的烤炉还热着，这份传了三代人的手作温度，就永远不会变。\r
\r
旁白：有些味道，经过很多年依然不会忘记；有些匠心，跨越三代人依然历久弥新。\r
旁白：【达成最终结局：传统手作老字号】\r
\r
---\r
\r
### 13.3 最终结局三：创意烘焙品牌\r
**【触发条件：完成36个月经营，\`innovationScore\` 为主导最高项】**\r
**【事件ID：EVT_FINAL_END_INNOVATION】**\r
\r
三周年庆典当天，林记烘焙的展示柜前围满了专程赶来打卡的年轻顾客。\r
在这三年里，林记以源源不断的新品研发、惊艳的季节限定与极具美感的创意设计脱颖而出，成为了无数年轻人心中最向往的「新锐创意烘焙品牌」。\r
\r
周雨桐站在主展台后，端出了三周年首发限定——「流光四季果味慕斯塔」。\r
周雨桐：念念姐，你看！这是我把这三年小本子上攒下的二十四种水果搭配灵感融汇在一起做出的纪念款！\r
叶星河拿着配套的立体光影插画礼盒走过来。\r
叶星河：再配上我设计的四时花窗透光礼盒，客人一打开盒子，光影落在慕斯镜面上，每一口都是视觉和味觉的双重奇遇！\r
唐鸢微笑着看着后台的研发数据。\r
唐鸢：三年下来，我们一共研发了超过三十款原创配方，而且每一款都做到了美味与稳定的平衡。\r
许知遥拿着平板电脑笑得合不拢嘴。\r
许知遥：念念，刚刚那本全国知名的生活美学杂志打来电话，说下个月要给我们林记的创意研发团队做整整六个版面的专访呢！\r
\r
林暖尝了一口新奇的茶香果味慕斯，笑着看向女儿。\r
林暖：要是三年前有人告诉我，咱们林记能做出像艺术品一样的蛋糕，妈肯定不敢信。念念，你们年轻人真是把老店做出了新天地。\r
苏晴晃了晃手里刚拍好的杂志级宣传大片。\r
苏晴：林大主理人，我这个御用摄影师的镜头，以后可得跟着你们的新品灵感一起升级才行啦！\r
林念看着身边充满活力的伙伴们，眼中闪烁着明亮的光彩。\r
林念：好呀！下一季的新品研发，我们继续大胆尝试，把更多奇妙的味道做出来！\r
\r
旁白：在稳固的根基之上自由生长，林记用天马行空的创意，为传统烘焙写下了全新的篇章。\r
旁白：【达成最终结局：创意烘焙品牌】\r
\r
---\r
\r
### 13.4 最终结局四：区域连锁品牌\r
**【触发条件：完成36个月经营，综合经营成绩达到中高水平，开启多座周边城市门店】**\r
**【事件ID：EVT_FINAL_END_REGIONAL】**\r
\r
三周年庆典当天，栖云镇老店、临江分店以及周边多个城市的林记门店，同时换上了由叶星河设计的三周年庆典橱窗。\r
经过三年的稳扎稳打，林记烘焙已经在多座城市开设直营门店，形成了成熟的团队与稳定的区域供应链。\r
\r
庆典酒会上，各城市的店长齐聚一堂。\r
许知遥站在台前，自信从容地总结着各区域的运营情况。\r
许知遥：目前我们周边五座城市的门店全部实现了盈利增长，跨城会员卡已经累计突破五万名熟客啦！\r
唐鸢拿起话筒补充道。\r
唐鸢：中央冷链配送中心与各店后厨的培训考核也已全部达标，无论客人在哪座城市走进林记，吃到的都是同样新鲜的高品质蛋糕。\r
周雨桐和叶星河端着三周年定制甜品走过来。\r
周雨桐：下个季度的城市限定鲜果系列我和鸢姐已经试制好啦！\r
叶星河：配套的城市风物插画手提袋也已经全部配发到各家分店了！\r
\r
林暖站在人群侧边，看着站在台前温和从容地统筹全局的女儿，眼角眉梢全是欣慰的笑意。\r
林暖：念念，外婆要是能看到你今天把林记带到这么多城市，一定会特别骄傲。\r
苏晴举着相机走到林念身边，笑着碰了碰她的果汁杯。\r
苏晴：从栖云镇的一扇小木窗，到好几座城市都排起长队的知名品牌，林老板，这三年干得漂亮！\r
林念握住母亲的手，又看向身边并肩作战的苏晴和全体伙伴。\r
林念：妈，苏晴，这不是我一个人的功劳。我最高兴的，是终于能够让这么好的一群人，在这里共同经营属于我们大家的事业。\r
\r
旁白：从一间街角老店，到跨越城市的区域连锁品牌。林念带着她的团队，稳健而坚定地走向了更广阔的天地。\r
旁白：【达成最终结局：区域连锁品牌】\r
\r
---\r
\r
### 13.5 最终结局五：全国连锁品牌（最高真结局）\r
**【触发条件：完成36个月经营，经营成绩达到最高水平，解锁全国城市地图与LV4高端主题旗舰店】**\r
**【事件ID：EVT_FINAL_END_NATIONAL】**\r
**【CG：finale】**\r
\r
**【第一幕：全国旗舰店盛大启幕】**\r
三周年纪念日这天，阳光明媚，微风和煦。\r
位于城市核心街区的「林记烘焙」LV4 高端主题旗舰店，在万众瞩目中正式盛大开业。\r
穿过优雅的拱形门洞，一楼是配备光洁大理石台面与精致花艺的现烤工坊及旗舰产品展示空间；二楼则是记录林记三代传承的品牌文化展厅——玻璃展柜里陈列着外婆三十多年前的手写《配方笔记》，墙面上则挂满了苏晴三年来拍摄的纪实摄影作品。\r
\r
此时此刻，不仅在栖云镇与临江市，从江南的杭州、上海、南京，到西南的成都、岭南的广州、北方的北京，全国多座核心城市的林记连锁门店同步迎来了三周年店庆客流高峰。\r
\r
前厅中央，已经成为全国运营负责人的许知遥正拿着对讲机，神采飞扬地向林念汇报。\r
许知遥：念念！北京店、上海店、成都店和广州店刚刚同时发来捷报，三周年限定桂花栗子礼盒在开业半小时内全部预订一空！那个当年连两张预约单都会抄漏的许知遥，现在可是能替你管好全国门店的大总管啦！\r
林念笑着向她比了个大拇指。\r
林念：我们知遥总监现在可是林记最稳的大管家！\r
\r
开放式透明厨房里，已经成为首席研发烘焙师的周雨桐正带着一排年轻学徒做最后的装饰点缀。\r
看到林念走过来，周雨桐端着一只晶莹剔透的四时果味定制蛋糕迎上前，眼神自信而明亮。\r
周雨桐：念念姐，旗舰店的首批三百份纪念甜点全部出炉了！刚才有几个新学徒手有点抖，我就像两年多前你安慰我那样告诉她们「别怕，手腕放松慢慢来」……念念姐，谢谢你当年没有嫌弃那个连说话都不敢大声的我，还把我的小本子变成了真正的菜单。\r
林念温柔地替小雨理了理厨师帽。\r
林念：是你自己从来没有放弃对烘焙的热爱，小雨，现在的你已经是年轻学徒们的榜样了。\r
\r
唐鸢拿着一份全国供应链与研发中心运行报告走过来，一贯严肃的脸上带着温暖的笑意。\r
唐鸢：林念，全国八城的中央冷链与标准化品控全部运行满分。说实话，刚来林记的时候，我以为这只是一家还没有摆脱作坊习惯的老店。但这三年，是你和大家让我重新找回了做蛋糕的初心——标准化守住的是下限，而我们对食材和客人的真心，才是林记走向全国的上限。\r
林念真诚地看向她。\r
林念：鸢姐，要是没有你帮林记立起这身钢筋铁骨，我们的味道绝对走不出江南，谢谢你。\r
\r
这时，叶星河抱着一摞刚刚印好的《林记三周年品牌纪念画册》小跑过来，裙摆飞扬。\r
叶星河：林店长！快看！旗舰店的拱形花艺展区已经被客人们评为年度最美打卡地啦！以前我只会躲在画室里画不切实际的纸盒，是林记让我明白，当设计真正走进千家万户的生活里时，才是最浪漫的艺术！\r
\r
**【第二幕：两代人的传承与老街坊的见证】**\r
二楼的品牌文化展厅里，专程被接来参加庆典的陈奶奶正戴着老花镜，笑呵呵地看着展柜里外婆的老烤盘。\r
陈奶奶：哎哟，我这辈子都没想过，咱们栖云镇街口那间只有两张旧木桌的林记，有一天能开出这么气派的大店，连北京上海的人都能吃上咱们林记的蛋糕！\r
林暖陪在陈奶奶身边，转头看向一步步走向自己的女儿，眼眶微微湿润。\r
林暖：念念，还记得三年前你刚从大学回来那天吗？那时候你坐在后厨的小板凳上叹气，跟妈说「毕业即失业，不知道自己能干什么」。\r
林念握住母亲温和宽厚的手，鼻尖一阵发酸。\r
林念：妈，那时候要不是您让我试着接手林记，在旁边一直耐心地给我托底，我可能到现在还在迷茫呢。\r
林暖欣慰地拍了拍女儿的手背。\r
林暖：妈只是给了你一把钥匙，能把一间社区老店变成今天走向全国的品牌，全靠你自己这三年的汗水，还有你聚拢起来的这群好姑娘。从今天起，妈和你外婆的接力棒，算是完完全全交到你手里了。\r
\r
**【第三幕：露台夕阳与一辈子的约定】**\r
傍晚时分，盛大的开业庆典圆满落幕。\r
林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河与林念一起来到旗舰店顶层的露天花园。\r
温暖的夕阳洒在鲜花簇拥的露台上，桌上摆着那本只差最后一页的《林记与我们的三年》相册。\r
\r
苏晴熟练地架好三脚架，调试好光圈与焦距，笑着看向林念。\r
苏晴：念念，从第一个月第一天你在旧柜台后头紧张地扯围裙，到今天站在全国旗舰店的露台上，我用镜头整整追了你三十六个月。\r
林念看着眼前从高一同桌、高二后门、高三走廊一直陪伴自己走到今天的挚友，眼底满是温柔的笑意。\r
林念：那我们的苏大摄影师觉得，现在的林老板跟三年前比，有什么变化呀？\r
苏晴歪着脑袋想了想，眉眼弯弯地笑了起来。\r
苏晴：以前遇到难题的时候，你总是一个人躲在后厨偷偷焦虑；现在的你呀，身后有一群可以放心托付的伙伴，眼里有光，脚下有路。不过嘛——在我面前爱吃醋、爱撒娇这一点，倒是一点都没变！\r
小雨、知遥、阿鸢和星河在旁边听到，全都忍不住笑出了声。\r
\r
苏晴按下十秒定时快门，小跑着回到队伍正中央，自然而亲密地挽住了林念的手臂。\r
苏晴：来！林记烘焙三周年全家福——三、二、一，大家看镜头，笑一个！\r
\r
「咔嚓——」\r
清脆的快门声响起。\r
画面缓缓定格，化作一张色彩温暖的相片，稳稳地贴进了《林记与我们的三年》相册的最后一页。\r
\r
林念看着相册上定格的笑脸，在心里轻声对自己、也对身边的每一个人说道：\r
林念：三年前，我以为回家接手林记只是一次退而求其次的暂时落脚。直到和你们一起走过这三十六个月的春夏秋冬，我才真正明白——人生从来没有白走的路。\r
\r
旁白：林念终于从那个不知道未来在哪里的大学毕业生，成长为能够独立承担责任的品牌创始人。\r
旁白：有些味道，经过很多年依然不会忘记。\r
旁白：有些朋友，走过很远的路，依然会陪在身边。\r
旁白：从林记的一块小小蛋糕开始，慢慢把生活经营成自己喜欢的样子。\r
旁白：这就是《林记烘焙》。\r
旁白：【达成最高真结局：林记烘焙——走向全国】\r
\r
---\r
\r
### 13.6 可选遗憾结局：《转让》\r
**【触发条件：后期收到品牌收购邀请时，玩家主动选择「接受收购」】**\r
**【事件ID：EVT_FINAL_END_TRANSFER】**\r
\r
签署完品牌转让协议的那个下午，阳光安静地落在办公桌上。\r
面对日益庞大的跨城管理与资金周转压力，林念最终选择接受了大型餐饮集团的收购邀约。\r
「林记烘焙」的品牌依然会继续存在，各个城市的门店依然会每天按时营业，只是这家店不再由林念独立经营。\r
\r
交接完最后一份文件的傍晚，伙伴们纷纷来办公室与林念道别。\r
周雨桐红着眼眶抱了抱林念。\r
周雨桐：念念姐，不管以后谁管这家店，你永远是带我走上烘焙之路的师父。以后我做出了新口味，还是第一个送给你尝！\r
许知遥和叶星河也用力挥了挥手。\r
许知遥：念念，等你休息好了，随时叫我们出来聚餐！\r
唐鸢推了推眼镜，温和地向林念伸出手。\r
唐鸢：这三年辛苦了，林店长。有我守着后厨标准，林记的味道不会乱的，你放心去休息吧。\r
林暖在家里为女儿留了一盏暖灯，温和地告诉她，累了就随时回家歇歇，妈妈永远支持她的决定。\r
\r
搬空店长办公室的最后一天，苏晴背着相机站在店门口等她，自然地伸手接过林念手里的纸箱。\r
两人并肩走到青石板街口，林念停下脚步，回头看了一眼熟悉的招牌。\r
林念：苏晴，你说我在这个时候停下来，是不是有点遗憾？\r
苏晴温柔地笑了笑，挽住了林念的胳膊。\r
苏晴：傻瓜，这三年你流过的汗、做出的好蛋糕都是实实在在的。累了就先歇一歇，重新想想未来想做什么——反正不管你去哪儿，我都会陪着你的。\r
\r
旁白：虽然在经营道路上留下了一丝遗憾，但那些共同成长的岁月与始终陪伴在身边的挚友，从来不曾褪色。\r
旁白：【达成选择型结局：《转让》】\r
\r
---\r
\r
### 13.7 伙伴个人结局档案文案（随最终结局同步展示）\r
\r
#### 1. 周雨桐（小雨）个人结局（四档细分）\r
- **【高信赖 + 高专业：主力研发烘焙师】**\r
【触发条件：trust ≥ 80 且 skillLevel ≥ 4，完成M11《藏起来的小本子》与M27专属协助】\r
午后的研发室里，阳光落在整洁的操作台上。\r
曾经那个攥着帆布包带子、连说话都不敢大声的兼职学徒，如今已经穿上了印有「林记首席研发」字样的主厨围裙。\r
展示柜最显眼的C位上，摆着她独立研发的「江南四时鲜果系列」招牌蛋糕。\r
新来的年轻学徒端着抹面微歪的练习胚，忐忑地站在工作台边。\r
周雨桐温和地走过去，手把手扶住学徒微抖的手腕。\r
周雨桐：别怕，刚开始学抹面的时候，我的手抖得比你还厉害呢。手腕放轻松，心里想着吃蛋糕的人开心的样子，慢慢转转盘就好。\r
林念站在玻璃门外看着这一幕，欣慰地笑了笑。\r
周雨桐转头看见林念，眼睛一下子亮了起来，捧起手边写满新灵感的厚笔记本跑过来。\r
周雨桐：念念姐！下个季度的青梅冻夹心我已经调好配比了，第一口还是留给你尝！谢谢你当年翻开了我的小本子，让我相信自己的想法也能发光。\r
【档案结语】那本曾经藏在抽屉角落的旧笔记本，终于变成了林记最闪耀的四季菜单。她不仅找到了属于自己的舞台，也成为了照亮后来者的一束微光。\r
- **【高信赖 + 普通专业：稳定的主力烘焙师】**\r
【触发条件：trust ≥ 80 且 skillLevel < 4】\r
清晨六点的后厨里，周雨桐已经准时将当日所需的红颜草莓、台农芒果与动物奶油分装得整整齐齐。\r
她或许没有去挑战最繁复华丽的分子甜点技艺，但只要有她在后厨守着烤炉，林念就永远不用担心任何一款经典蛋糕的品质。\r
周雨桐擦了擦额角的细汗，将刚出炉、香气扑鼻的原味戚风端到林念面前。\r
周雨桐：念念姐，今天早上老街坊们预订的二十份草莓蛋糕我已经全部抹好面啦，每一颗草莓都是我挑的最甜的！\r
林念笑着递给她一杯温牛奶。\r
林念：有小雨在后厨坐镇，我现在可省心太多了。\r
周雨桐腼腆地弯起嘴角。\r
周雨桐：只要能一直留在林记，每天给念念姐和大家烤出热乎乎的蛋糕，我就觉得特别幸福了。\r
【档案结语】她成为了林念最贴心、最可靠的后厨主力。经她双手做出的每一块水果蛋糕，都饱含着让人安心的甜美与赤诚。\r
- **【普通信赖 + 高专业：独立制作能力极强的烘焙师】**\r
【触发条件：trust < 80 且 skillLevel ≥ 4】\r
操作台前，周雨桐手中的抹刀行云流水般掠过蛋糕表面，短短三分钟便完成了一只棱角分明、光洁如镜的十寸定制蛋糕。\r
凭借三年来日复一日的刻苦练习，她彻底克服了最初的生疏与胆怯，练就了一手炉火纯青的制作与裱花绝活，成为了后厨里出餐最稳、效率最高的技术骨干。\r
唐鸢翻看着本月的出品合格率报表，赞许地点了点头。\r
唐鸢：小雨，这个月你负责的五百份定制蛋糕又是零返工，技术已经完全达到资深烘焙师的水准了。\r
周雨桐认真地收起抹刀，对着镜子理了理厨师帽。\r
周雨桐：谢谢鸢姐和林店长的培养，接下来的订单高峰，我也会稳稳拿下的！\r
【档案结语】汗水从不辜负认真的人。当她握紧抹刀的那一刻，所有的怯懦都化作了指尖无可挑剔的专业与底气。\r
- **【普通信赖 + 普通专业：认真负责的正式员工】**\r
【触发条件：trust < 80 且 skillLevel < 4】\r
三年期满，周雨桐顺利从兼职学徒转正，成为了林记烘焙一名踏实勤恳的正式烘焙师。\r
每天伴着清晨的第一缕阳光到店筛粉、打蛋、切配鲜果，下班时带走一块自己亲手包装的小切块蛋糕。\r
周雨桐将擦得锃亮的烤盘归位，朝林念微笑着挥了挥手。\r
周雨桐：念念姐，后厨的卫生和明早的备料我都检查过两遍啦，那我先下班咯，明天见！\r
林念温和地点了点头。\r
林念：辛苦啦小雨，路上慢点，明天见。\r
【档案结语】在熟悉的奶油与面粉香气里，她告别了迷茫的过去，拥有了一份安稳、充实而温暖的日常。\r
\r
#### 2. 许知遥个人结局（两档细分）\r
- **【高养成：区域运营负责人】**\r
【触发条件：trust ≥ 75 且 skillLevel ≥ 4，完成M19《知遥的管理理想》与M27专属协助】\r
宽敞明亮的运营办公室里，许知遥身穿干练的职业装，正对着电脑屏幕与各家分店的店长开每周运营例会。\r
桌角放着她当年入职第一个月时，林念陪她一起画的那张《前厅后厨时段核对表》——如今，这张手绘表格已经升级成了覆盖全门店的智能订单与熟客CRM系统。\r
结束视频会议后，许知遥转过身，笑着向推门进来的林念扬了扬手中的季度报表。\r
许知遥：林大老板，各门店的节庆预售排期和跨城冷链调度已经全部对齐，老顾客复购率又创新高啦！\r
林念笑着把一杯热拿铁放到她桌上。\r
林念：还记得当初是谁因为漏抄了两张单子，站在收银台后头红着眼眶说自己不是管店的料吗？\r
许知遥不好意思地笑出声，眼神却格外明亮自信。\r
许知遥：那不是遇到了一个愿意手把手教我的好老板嘛！现在的许总监，可是能替你守好千军万马的大后方了！\r
【档案结语】她彻底建立起了属于自己的管理自信，将天生的沟通亲和力与严谨的订单运营体系融会贯通，成长为统管多城门店的运营大总管。\r
- **【常规养成：独立门店店长】**\r
【触发条件：未完全满足高养成条件】\r
前厅的玻璃门一推开，永远能第一时间听到许知遥清脆爽朗的招呼声。\r
她依然能一口叫出每一位熟客的称呼，记得谁家的孩子不吃酸、哪位老人偏爱少糖原味，更把门店的日常排班、收银盘点与线上客服打理得井井有条。\r
许知遥将系好丝带的蛋糕盒递给陈奶奶，笑得眉眼弯弯。\r
许知遥：陈奶奶您慢走，下周您家小孙子生日的定制单我已经帮您提前锁好烤炉时段啦，保准一分钟都不耽误！\r
【档案结语】从莽撞热情的前台店员，到熟客们交口称赞的金牌店长。有许知遥坐镇的前厅，永远盈满欢声笑语。\r
\r
#### 3. 唐鸢个人结局（两档细分）\r
- **【高养成：首席研发与培训负责人】**\r
【触发条件：trust ≥ 75 且 skillLevel ≥ 4，完成M21《尘封的配方》与M27专属协助】\r
中央研发实验室里，刚出炉的「焦糖海盐伯爵茶千层」与「招牌桂花栗子蛋糕」并排摆在品鉴台上。\r
曾经那个只看秒表与毛利率、把原创热情死死锁进抽屉里的连锁主管，在林记的这三年里，终于找回了最初爱上烘焙时的心动。\r
唐鸢合上最新一版《林记风味动态标准与匠人培训手册》，摘下眼镜，神色温和而从容。\r
唐鸢：林念，新一期分店烘焙师的培训考核全部结束了。我在手册扉页上写了一句话——「标准化是林记的骨骼，而对食材与人的尊重，是林记的灵魂」。\r
林念看着那行端正的字迹，由衷地微笑道。\r
林念：鸢姐，这三年有你在，林记才真正做到了既走得远、又没有弄丢味道。\r
唐鸢嘴角扬起一抹难得一见的温柔笑意。\r
唐鸢：应该是我谢谢林记才对。是这里让我明白，效率和热爱，从来都不是单选题。\r
【档案结语】她解开了束缚自己多年的心结，在严谨的标准化效率与鲜活的手工温度之间找到了完美平衡，成为林记当之无愧的研发与培训领路人。\r
- **【常规养成：生产管理负责人】**\r
【触发条件：未完全满足高养成条件】\r
后厨的生产看板上，每一项原料损耗率、烘烤温区曲线与出餐准点率都被唐鸢把控得严丝合缝。\r
虽然她平时依然话不多、要求严格，但所有店员都知道，只要有鸢姐站在操作台后，无论面对多么庞大的节庆订单潮，后厨都绝不会乱了阵脚。\r
唐鸢看了一眼计时器，干脆利落地宣布。\r
唐鸢：今日三百份预售订单全部质检合格，准时封箱发车。大家表现得很好，准点下班。\r
【档案结语】她以极其专业的标准化流程守护着林记的后厨防线，是林记品质如一最坚实的压舱石。\r
\r
#### 4. 叶星河个人结局（两档细分）\r
- **【高养成：品牌视觉负责人 & 独立设计工作室主理人】**\r
【触发条件：trust ≥ 75 且 skillLevel ≥ 4，完成M25《个人作品展》与M27/M33视觉剧情】\r
青年商业设计大奖的领奖台上，25岁的叶星河捧着奖杯，身后的大屏幕上正展示着她为林记烘焙打造的全套「江南四时腰封礼盒」与旗舰店空间视觉方案。\r
在林念的引导与支持下，她不再是那个只会画华而不实折纸盒的理想主义毕业生，不仅成为了林记的首席品牌视觉负责人，还创办了自己的「星河视觉设计工作室」。\r
庆功会后，叶星河捧着最新一季的手绘礼盒打样跑来找林念和苏晴。\r
叶星河：林店长，苏晴姐！现在业内好多人找我约设计稿，但不管我的工作室接多少大单，林记永远是我的第一顺位甲方！\r
林念笑着接过精美的礼盒。\r
林念：那我们林记可就赖上叶大设计师一辈子咯！\r
叶星河抱住画夹，笑得灿烂而骄傲。\r
叶星河：一言为定！我要用画笔陪着林记走过十年、二十年！\r
【档案结语】她没有为了迎合商业而磨平灵气，而是学会了让艺术真正走进生活。她的画笔，成为了林记被人一眼认出的温暖名片。\r
- **【常规养成：长期品牌合作伙伴】**\r
【触发条件：未完全满足高养成条件】\r
叶星河继续以自由插画师与特约设计师的身份，与林记烘焙保持着稳定而愉快的长期合作。\r
每逢中秋、除夕与店庆，她都会背着画夹来店里坐上一整个下午，一边吃着小雨切的水果蛋糕，一边为林记画出充满温度的节日限定插画包装。\r
叶星河举起画笔对着阳光比划了一下。\r
叶星河：林店长，今年冬天的限定礼盒初稿画好啦，这次我把承重卡扣和插画结合得可稳当了！\r
【档案结语】自由而浪漫的画笔，在每一个重要的节日里，准时为林记的甜点披上最美的衣裳。\r
\r
#### 5. 林暖（母亲）个人结局（两档细分）\r
- **【高家庭默契：放心交接的岁月导师】**\r
【触发条件：家庭默契值 ≥ 75，解锁全部旧配方与母女传承故事】\r
栖云镇老店后院的桂花树下，五十多岁的林暖正悠闲地摇着蒲扇，和陈奶奶等老姐妹一起品着新泡的雨前龙井，桌边放着她刚从老年大学插花班带回来的花篮。\r
操劳了大半辈子的她，终于彻彻底底松开了紧握三十年的账本与烤盘，把林记完完全全交到了女儿林念手中。\r
林念端着一碟刚出炉的少糖桂花栗子蛋糕走出后厨，轻轻放在母亲手边。\r
林念：妈，今天新店和老店的账目我都核对好啦，这是专门给您和陈奶奶留的第一炉蛋糕。\r
林暖慈爱地看着眼前成熟稳重、眼里有光的女儿，欣慰地拍了拍她的手。\r
林暖：好，妈现在呀，什么心都不操了。以前总怕你太年轻挑不起这副担子，现在看着你把林记管得比我和你外婆那时候还要好，妈这心里只有享福的份儿咯。\r
【档案结语】从手把手把关的严师，到潇洒退居幕后的慈母。三十多年的坚守终于迎来了最圆满的传承，属于林暖的悠闲下半场才刚刚开始。\r
- **【常规家庭默契：温暖守望的后盾】**\r
【触发条件：家庭默契值 < 75】\r
虽然林念已经全面接手了林记的日常经营，但闲不住的林暖依然习惯每天早上来后厨转一圈，帮着看看新进的面粉成色、擦擦老烤炉。\r
每当林念忙得不可开交时，转身总能看到母亲在厨房里默默为她留好的一碗热汤。\r
林暖将温热的鸡汤端到办公桌边。\r
林暖：当了大店长也得按时吃饭呀。大方向你来拿主意，后厨这些散碎活儿，妈还能再帮你盯几年呢。\r
【档案结语】无论女儿走得多远、飞得多高，母亲永远是这间老店里最温暖、最坚实的后盾。\r
\r
---\r
\r
## 第十四章：图鉴与收集系统完整文案附录\r
\r
### 14.1 十二款核心蛋糕图鉴文案\r
| 解锁月份 | 产品名称 | 素材文件名 | 配方研发提示 | 图鉴风味描述 |\r
| :--- | :--- | :--- | :--- | :--- |\r
| M1 | 原味奶油蛋糕 | \`cake-plain\` | 鸡蛋+动物奶油+戚风胚 | 三十余年不变的经典配比，云朵般松软的戚风与浓郁纯粹的动物奶香。 |\r
| M1 | 草莓奶油蛋糕 | \`cake-strawberry\` | 草莓+动物奶油+戚风胚 | 严选当季红颜草莓，酸甜多汁的果肉嵌在绵密白雪般的奶油之中。 |\r
| M1 | 巧克力蛋糕 | \`cake-chocolate\` | 黑巧+可可胚+甘纳许 | 微苦醇厚的黑巧甘纳许淋面，入口丝滑浓郁，是巧克力控的心头好。 |\r
| M3 | 芋泥薄脆 | \`cake-taro\` | 荔浦芋泥+焦糖杏仁薄脆 | 林念研发的第一款新品，绵密芋泥撞上咔嚓作响的现烤薄脆。 |\r
| M4 | 抹茶蛋糕 | \`cake-matcha\` | 春日抹茶粉+蜜红豆 | 清新微苦的茶香中和了蜜红豆的绵甜，宛如舌尖上的一场春雨。 |\r
| M6 | 芒果慕斯 | \`cake-mango\` | 台农芒果泥+轻盈慕斯 | 夏日生活节主打甜点，金黄澄澈的果肉冻层，冰爽顺滑。 |\r
| M8 | 提拉米苏 | \`cake-tiramisu\` | 马斯卡彭+浓缩咖啡液 | 浸透咖啡酒香的手指饼干与醇滑芝士交叠，带着微微成熟的回甘。 |\r
| M10 | 无花果奶油 | \`cake-fig\` | 波姬红无花果+轻奶油 | 为苏晴生日研发的秋日甜点，切面如花朵绽放，清甜不腻。 |\r
| M12 | 季节水果蛋糕 | \`cake-seasonal\` | 四季时令鲜果+定制夹心 | 顺应四时风物而变的缤纷果味蛋糕，藏着小雨满满的搭配灵感。 |\r
| M16 | 生日定制蛋糕 | \`cake-custom\` | 双层承重胚+手工定制裱花 | 为每一个值得纪念的日子量身打造，承载着无数家庭的欢笑。 |\r
| M20 | 节日限定蛋糕 | \`cake-festival\` | 传统红曲/栗蓉+节庆装饰 | 逢年过节餐桌上的团圆重头戏，一盒点心便是一份圆满祝福。 |\r
| M26 | 招牌：桂花栗子蛋糕 | \`cake-signature\` | 高山秋栗+金桂冻+戚风胚 | 外婆旧配方与现代工艺的结晶，「栗子甜则少放糖，桂花香淡则后撒」。 |\r
\r
---\r
\r
### 14.2 城市地图风物志文案（第14.7节）\r
1. **栖云镇（初始大本营）**：青石板铺就的江南水乡小城，林记三十多年故事开始的地方，邻里温情最为醇厚。\r
2. **临江市（\`city-linjiang\`）**：充满活力的邻近商业城市，写字楼白领云集，是林记迈出跨城第一步的起点。\r
3. **杭州（\`city-hangzhou\`）**：湖光山色与茶香交融之城，食客偏爱清雅微甜的茶味与桂花系列甜点。\r
4. **上海（\`city-shanghai\`）**：精致摩登的海派都市，对咖啡搭配、精品切块与品牌包装视觉有着极高要求。\r
5. **南京（\`city-nanjing\`）**：底蕴深厚的梧桐古都，传统手作糕点与秋日桂花栗子蛋糕在这里备受欢迎。\r
6. **成都（\`city-chengdu\`）**：悠闲巴适的烟火蓉城，下午茶堂食氛围浓厚，创意鲜果慕斯销量领先。\r
7. **广州（\`city-guangzhou\`）**：讲究食材本味的食在羊城，低糖清爽的动物奶油与时令鲜果款最受青睐。\r
8. **北京（\`city-beijing\`）**：大气厚重的北方都会，节庆伴手礼盒与高端主题旗舰展陈极具号召力。\r
\r
\r
---\r
\r
## 附篇三：新手教程（林暖带林念认店）\r
\r
*（设计说明：序幕「接手林记」结束后弹出「是否查看新手教程」。选「查看」依次播放 T1—T6；选「暂不查看」只播 T7 并把教程标记为已完成。教程不消耗行动力，也不推进日期。）*\r
\r
### T1｜串着铜钥匙的钥匙扣\r
**【事件ID：EVT_TUTORIAL_START｜触发条件：序幕结束后】**\r
**【场景：蛋糕店前厅】**\r
\r
林暖将串着后厨与前厅铜钥匙的钥匙扣递到林念掌心里，钥匙碰在一起，发出很轻的一声响。\r
林暖：念念，虽然你从小在店里长大，但真要自己当家管店，前厅、后厨和街上的进货渠道都得弄清楚。要不要妈先带你把店里店外走一圈？\r
林念捏着那串还带着母亲体温的钥匙，点了点头。\r
林念：好，那您带我看看。\r
林暖解下围裙搭在椅背上，往柜台那边抬了抬下巴。\r
林暖：那就从这间前厅开始。\r
\r
### T2｜前厅的五个角落\r
**【事件ID：EVT_TUTORIAL_FRONT｜触发条件：教程 T1 之后】**\r
**【场景：蛋糕店前厅】**\r
\r
林暖带着林念站在洒满晨光的蛋糕店前厅中央，逐一指向店内的五个核心区域。\r
林暖：咱们林记最重要的地方就是这间前厅，和里头那间独立的后厨。你先看正中间的柜台——平时接待到店顾客、看大家想吃什么口味、结账收银，还有处理街坊们的特殊定制订单，全都在这儿完成。\r
林念走到玻璃柜台后，摸了摸擦得发亮的台面。\r
林念：明白，这里就是我们林记的门面。\r
林暖又指向四周的木墙与展示柜。\r
林暖：再看旁边的装修册。等以后手里攒了充裕的资金，你可以在这儿更换墙面、地板、灯具，添置更大的三层展示柜和货架。店里环境敞亮舒适了，客人们也更愿意坐下来慢慢挑。\r
林暖转身指了指门口，又点了点通往右侧的门帘。\r
林暖：从门口出去就是栖云镇老街；掀开这道门帘，就是咱们的后厨。另外，妈虽然把店交给你了，但平时有空也会回店里坐坐，你想听听以前的经验，就点「和妈妈聊聊」。\r
这时，店门上的风铃轻轻一响，第一位早起的街坊李婶走了进来。\r
李婶：念念今天当家呀？给我拿一份刚出炉的原味奶油蛋糕，给家里孩子当点心！\r
林暖轻轻推了推林念的肩膀。\r
林念熟练地打包结账，把系好丝带的蛋糕盒递过去。\r
林念：李婶您拿好，欢迎常来！\r
林暖站在一旁，看着女儿送客的背影，眼里都是笑意。\r
\r
### T3｜后厨里的老伙计\r
**【事件ID：EVT_TUTORIAL_KITCHEN｜触发条件：教程 T2 之后】**\r
**【场景：烘焙后厨】**\r
\r
送走第一位客人，林暖带林念掀开门帘，走进宽敞的独立烘焙后厨。\r
林暖指向正中央摆着模具与抹刀的操作台。\r
林暖：这里是后厨的核心。每天选定菜单、准备材料、动手制作和装饰蛋糕，都在这张操作台上完成。\r
林念伸手按了按台面，木头被几十年的揉面磨得温润发亮。\r
林暖又依次指向左侧的设备区与右侧的食材区。\r
林暖：设备区摆着咱们的烤箱和打蛋器，以后升级了高级设备，烤出来的蛋糕品质更高、也更省力气；食材区用来查看面粉、鸡蛋、奶油和鲜果的库存，哪种原料快见底了，得及时去街上补货。\r
林念注意到角落里还放着一张盖着白布的实验台，墙上挂着一块空白的员工排班板。\r
林念：妈，那边的实验台和排班板，现在还用不上吗？\r
林暖温和地笑了笑。\r
林暖：一口吃不成胖子。等你把基础配方都练熟了，实验台就能用来研发你自己的新口味；等以后店里生意大了、招了新店员，排班板就派得上大用场。\r
林暖拍了拍操作台。\r
林暖：来，现在先做一炉原味奶油蛋糕，找找手感。\r
\r
### T4｜青石板路与赵叔的食材铺\r
**【事件ID：EVT_TUTORIAL_STREET｜触发条件：教程 T3 之后】**\r
**【场景：栖云镇老街】**\r
\r
从蛋糕店门口走出来，眼前便是青石板铺就的栖云镇中心街道。\r
林暖带着林念站在街口，指点着街道两侧的去处。\r
林暖：这条街连接着镇上的各个角落。左手边这家是老赵叔开的食材铺，店里日常用的面粉、鲜鸡蛋、动物奶油和时令水果，都在这儿买。\r
林暖又指向绿树成荫的街心方向与居民巷。\r
林暖：往前走是镇上的公园，累了可以去散步透透气；苏晴那丫头也常在街上和公园一带拍照，你想找她聊天，点「寻找苏晴」准能碰上。等晚上打烊了，点「回家」就能回咱们自己家里歇着。\r
林暖塞给林念一只采购篮。\r
林暖：走，先去食材铺把明早要用的面粉和草莓买齐。\r
赵叔热情地迎上来，围裙上还沾着面粉。\r
赵叔：哟，林大姐带念念来进货啦？今天清晨刚从农场送来的红颜草莓和鲜牛奶，水灵着呢。以后念念来拿货，叔都给你留最新鲜的批次！\r
林念微笑着付完款，把采购单折好收进围裙口袋。\r
林念：谢谢赵叔，以后就要常来麻烦您啦！\r
\r
### T5｜口袋里的手机\r
**【事件ID：EVT_TUTORIAL_PHONE｜触发条件：教程 T4 之后】**\r
**【场景：栖云镇老街】**\r
\r
刚走出食材铺，林念口袋里的手机「叮咚」响了一声。\r
林暖指了指界面角落常驻的手机按钮。\r
林暖：念念，不管你在店里、后厨还是街上，随时都能打开手机打理店务，不用专门跑回柜台。快打开看看是谁发来的消息。\r
林念点开手机，最先跳出来的是苏晴的消息。\r
苏晴（手机消息）：恭喜林老板正式上任！下午有空来街上找我玩呀！\r
林暖：上面这一排，妈给你挨个说一遍。通知会提醒新订单、快到期、食材不够这些事；人物里记着你认识的每个人，资料和互动进度都在里面；线上接单和订单详情是一对，远处客人下的单和到店、定制的单，统一在这儿核对材料和截止时间。\r
林念往下划，看到日历上标着即将到来的春日花卉节。\r
林暖：日历上会把接下来几个月的活动和节日都标出来，提早备料，别等活动开幕了才发现草莓不够。\r
林暖最后点了点收藏和经营数据。\r
林暖：收藏里是蛋糕图鉴、苏晴的回忆、CG 和结局这些你慢慢攒下来的东西；经营数据是每天的账，赚了多少、花了多少，心里要有数。\r
\r
### T6｜围裙交到你手上\r
**【事件ID：EVT_TUTORIAL_END｜触发条件：教程 T5 之后】**\r
**【场景：蛋糕店前厅】**\r
\r
回到林记烘焙前厅，林暖解下自己的围裙叠好，放进柜台下的抽屉里，温和地看着女儿。\r
林暖：好啦，店里店外和手机上的门道，妈都已经交给你了。从现在起，这家林记烘焙，就正式由你独立当家。\r
林念接过那串铜钥匙，把它挂在了自己的围裙带子上。\r
林念：妈，您就放心吧。\r
林暖：放手去干吧，念念。妈就在镇上，有事招呼一声。\r
林暖推门出去，风铃又响了一次。林念站在柜台后，深深吸了一口气。\r
林念：好，那就从今天开始。\r
\r
### T7｜那我自己先试试\r
**【事件ID：EVT_TUTORIAL_SKIP｜触发条件：教程选择「暂不查看」】**\r
**【场景：蛋糕店前厅】**\r
\r
林念晃了晃手里的铜钥匙，自信地笑了笑。\r
林念：妈，我在林记长了二十二年，闭着眼睛都能摸到烤箱开关呢！让我自己先试试看吧！\r
林暖愣了一下，随即欣慰地点了点头。\r
林暖：好，有志气！你的手机里已经存好了订单和日历提醒，要是有拿不准的，随时在店里找妈聊天。\r
林暖把围裙搭在椅背上。\r
林暖：那今天第一天营业，正式开始吧！\r
`,yn={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐鸢:"唐鸢",阿鸢:"唐鸢",叶星河:"叶星河",星河:"叶星河",陈奶奶:"陈奶奶",张叔:"张叔",李婶:"李婶",赵叔:"赵叔",沈知夏:"沈知夏",许佳宁:"许佳宁",沈妍:"沈妍",顾客:"顾客"},xs={周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe"},ui={xiaoyu:"小雨",zhiyao:"知遥",kexin:"阿鸢",qinghe:"星河"},td={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},nd={一:1,二:2,三:3,四:4,五:5,六:6},sd=/^(林念|苏晴|林暖|周雨桐|许知遥|唐鸢|叶星河|陈奶奶|张叔|李婶|赵叔|沈知夏|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function Lr(e,t){if(!e)return!0;if(e.trust){for(const n of Object.keys(e.trust))if((t.partnerTrust[n]||0)<e.trust[n])return!1}if(e.momBond&&(t.momBond||0)<e.momBond)return!1;if(e.played){for(const n of e.played)if(!t.played.some(s=>s.indexOf(n)>=0))return!1}if(e.style){const n=t.style||{},s=n[e.style.id]||0;if(s<e.style.min)return!1;const o=Object.keys(n).filter(i=>i!==e.style.id).map(i=>n[i]||0);if(s-Math.max(0,...o)<e.style.lead)return!1}return!0}function $s(e,t){const n=[];for(const s of e||[])s.t==="cond"?n.push(...$s(Lr(s.test,t)?s.then:s.else,t)):s.t==="choice"?n.push({...s,options:(s.options||[]).map(o=>({...o,branch:$s(o.branch||[],t)})),after:$s(s.after||[],t)}):n.push(s);return n}function ps(e,t,n){e.lastIndex=0;let s=e.exec(t);for(;s;)n(s),s=e.exec(t)}function rd(e,t){const n=[];if(!e)return n;ps(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g,e,o=>{n.push({k:"style",id:o[1],v:Number(o[2]),label:td[o[1]]+" +"+o[2]})}),ps(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g,e,o=>{const i=yn[o[1]];n.push({k:"trust",id:xs[i],v:Number(o[2]),label:o[1]+"信赖 +"+o[2]})}),ps(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g,e,o=>{const i=o[1]?yn[o[1]]:t,a=xs[i];a&&n.push({k:"skill",id:a,v:Number(o[2])/10,label:(o[1]||ui[a])+"专业 +"+o[2]})});const s=Object.keys(yn);return ps(/信赖度\s*\+\s*(\d+)/g,e,o=>{const i=e.slice(0,o.index);if(s.some(c=>i.endsWith(c)))return;const a=xs[t];a&&(n.some(c=>c.k==="trust"&&c.id===a)||n.push({k:"trust",id:a,v:Number(o[1]),label:ui[a]+"信赖 +"+o[1]}))}),/顾客忠诚度增加|忠诚度提升/.test(e)&&n.push({k:"loyalty",v:4,label:"忠诚 +4"}),n}function Pn(e){const t={};let n=!1;const s=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);s&&(t.trust={[xs[yn[s[1]]]]:Number(s[2])},n=!0);const o=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);o&&(t.momBond=Number(o[1]),n=!0);const i=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);i&&(t.style={id:i[1],min:Number(i[2]),lead:15},n=!0);const a=e.match(/领先[^0-9]{0,4}(\d+)/);a&&t.style&&(t.style.lead=Number(a[1]));const c=e.match(/M(\d+)/);return c&&/已完成|完成M/.test(e)?(t.played=["M"+c[1]],n=!0):/原创配方研发剧情/.test(e)?(t.played=["M21"],n=!0):/个人作品展/.test(e)&&(t.played=["M25"],n=!0),n?t:null}function Ln(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function hs(e,t){const n=e.trim();if(!n||/^\|/.test(n))return;if(n.startsWith("旁白")){const o=n.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);t.push({t:"nar",who:o&&o[1]?o[1]:"",text:Ln(o?o[2]:n)});return}if(/^\*\*[^*]+\*\*$/.test(n)){t.push({t:"nar",text:Ln(n.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(n)||/^\*\(.+\)\*$/.test(n)){t.push({t:"note",text:n.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const s=n.match(sd);if(s){t.push({t:"say",who:yn[s[1]],emo:s[2]||"",text:Ln(s[4].replace(/\*\*/g,""))});return}t.push({t:"nar",text:Ln(n.replace(/\*\*/g,""))})}function lt(e,t={}){const n=[],s={ids:[],month:null,kind:null,test:null,title:"",cond:null};let o="main",i=n,a=null,c=null,u=null,f=null,d=null,h=0,k=!0;const g=()=>o==="branch"&&c?c.branch:o==="then"&&u?u.then:o==="else"&&u?u.else:o==="inline"&&d?d.then:i,T=_=>g().push(_);for(const _ of e){const I=_.trim();if(!I){k=!0;continue}if(I.startsWith(">")){let N=I.replace(/^>+\s*/,"").trim();if(!N)continue;const w=N.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(w&&/玩家选择节点/.test(w[1])){o="main",d=null;const ee=w[1],K=ee.match(/节点\s*([\d.\-]+)/),te=ee.match(/[：:]\s*(.+)$/);a={t:"choice",node:K?K[1]:"",prompt:te?te[1].trim():ee,options:[],after:[]},T(a);continue}const Z=N.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(Z&&a){const ee=id([N,a.prompt].join(" ")),K=Z[3]||"";a.options.push({label:Z[2].trim(),hint:K.replace(/^[（(]|[）)]$/g,"").trim(),gains:rd(K,ee),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(N)&&a&&(a.note=N.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const j=I.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(j){const N=j[1],w=(j[2]||"").replace(/^[：:]\s*/,"").trim();if(N.indexOf("事件ID")>=0){N.split("｜").forEach(B=>{const q=B.search(/[：:]/);if(q<0)return;const R=B.slice(0,q).trim(),E=B.slice(q+1).trim();if(R==="事件ID")s.ids.push(E);else if(R==="触发月份"||R==="触发时间"){const x=E.match(/M(\d+)/);x&&(s.month=Number(x[1]))}else if(R==="触发条件"){/新游戏开始|开始游戏/.test(E)&&(s.kind="prologue");const x=Pn(E);x&&(s.cond=x)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(N))continue;if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(N)){T({t:"scene",text:N.replace(/^场景\s*[：:]\s*/,"")}),w&&T({t:"nar",text:w});continue}const Z=N.match(/^CG\s*[：:]\s*(.+)$/i);if(Z){T({t:"cg",key:Z[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(N)){T({t:"cgend"});continue}const ee=N.match(/^分支([A-Z])(?:[：:](.*))?$/);if(ee&&a){const z=ee[1].charCodeAt(0)-65;for(;a.options.length<=z;)a.options.push({label:"选项"+String.fromCharCode(65+a.options.length),hint:"",gains:[],branch:[]});c=a.options[z],o="branch",d=null,w&&T({t:"nar",text:Ln(w)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(N)){o="main",d=null,a&&(i=a.after),w&&T({t:"nar",text:w});continue}const K=N.match(/^高养成解锁分支[：:]\s*(.*)$/),te=N.match(/^普通保底分支[：:]\s*(.*)$/);if(K||te){if(K)d=null,u={t:"cond",test:Pn(K[1])||{},then:[],else:[]},f=u,n.push(u),o="then";else{const z=f&&f.else.length===0?f:null;z?(u=z,o="else"):o="main"}continue}if(/^若/.test(N)){const z=Pn(N);z&&(u={t:"cond",test:z,then:[],else:[]},n.push(u),d=u,o="inline",h=0,k=!1,w&&hs(w,g()));continue}const se=N.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);if(se){const z=Pn(se[1]),B=se[1].replace(/[（(]\s*若[^）)]*[）)]/g,"").trim();T({t:"act",text:B,test:z||null}),w&&T({t:"nar",text:w});continue}w&&T({t:"nar",text:w});continue}const G=I.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(G&&/协助|结局|相册|档案/.test(G[2])){o="main",d=null,T({t:"scene",text:G[2].replace(/[：:]\s*$/,"")});continue}if(o==="inline"&&d){const N=[];hs(I,N);const w=N[0],Z=w&&w.t==="nar";if(k&&h>0&&Z){o="main",d=null,hs(I,i),k=!1;continue}N.forEach(ee=>d.then.push(ee)),k&&(h+=1),k=!1;continue}hs(I,g()),k=!1}return a&&a.options.forEach(_=>{_.branch.length||(_.branch=[])}),s.title=t.title||"",{beats:od(n),meta:s}}function od(e){const t=[];let n=0;for(;n<e.length;){const s=e[n];if(s.t==="act"&&s.test){let o=n+1;for(;o<e.length&&e[o].t!=="act";)o++;t.push({t:"cond",test:s.test,then:e.slice(n,o),else:[]}),n=o}else t.push(s),n++}return t}function id(e){const t=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);return t?yn[t[1]]:""}function ld(e){const t={level:1,text:"",lines:[],children:[]},n=[t];for(const s of e.split(/\r?\n/)){const o=s.match(/^(#{1,4})\s+(.*)$/);if(o){const i=o[1].length;for(;n.length>1&&n[n.length-1].level>=i;)n.pop();const a={level:i,text:o[2].trim(),lines:[],children:[]};n[n.length-1].children.push(a),n.push(a)}else n[n.length-1].lines.push(s)}return t}function ad(e){const t=ld(e),n=[],s={},o={},i={},a={},c={},u=[];let f=0;const d=g=>(g.order=f++,n.push(g),g),h=[];for(const g of t.children)g.level===1?h.push(...g.children):h.push(g);for(const g of h){const T=g.text||"";if(/^序幕/.test(T)){const{beats:_,meta:I}=lt(g.lines,{title:"序幕 · 回家"});d({id:I.ids[0]||"EVT_PROLOGUE_01",ids:I.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:_});continue}if(/^第[一二三四五六]章/.test(T)){for(const _ of g.children){const I=_.text,P=/结算/.test(I)&&/(月末|目标)/.test(I),j=I.match(/M(\d+)/),G=j?Number(j[1]):null;if(P&&!j)continue;if(P){const K=fi(I,G),te=lt(_.lines,{title:I}),se=te.beats;if(te.meta.ids.length&&d({id:te.meta.ids[0],ids:te.meta.ids,title:vs(I),chapter:T,month:G,kind:"main",test:te.meta.cond,beats:se}),!K)continue;s[K]=s[K]||{pass:[],failId:"",failBeats:[]};for(const z of _.children){const B=ms(z.text);if(!B)continue;const q=lt(z.lines,{title:z.text});B==="pass"?s[K].pass=q.beats:(s[K].failBeats=q.beats,s[K].failId=q.meta.ids[0]||"",q.meta.ids.length&&d({id:q.meta.ids[0],ids:q.meta.ids,title:di(z.text,q.beats),chapter:T,month:null,kind:"short",test:null,beats:q.beats}))}continue}const{beats:N,meta:w}=lt(_.lines,{title:I});if(!w.ids.length)continue;let Z=w.cond,ee=G??w.month;Z&&!ee&&(ee=w.month);for(const K of _.children){if(ms(K.text))continue;const te=lt(K.lines,{title:K.text});te.beats.length&&(N.push({t:"scene",text:K.text.replace(/^【|】$/g,"")}),N.push(...te.beats))}if(d({id:w.ids[0],ids:w.ids,title:vs(I),chapter:T,month:ee,kind:"main",test:Z,beats:N}),_.children.length){const K=fi(I,ee),te=_.children.filter(se=>ms(se.text));if(K&&te.length){s[K]=s[K]||{pass:[],failId:"",failBeats:[]};for(const se of te){const z=ms(se.text),B=lt(se.lines,{title:se.text});z==="pass"?s[K].pass=B.beats:(s[K].failBeats=B.beats,s[K].failId=B.meta.ids[0]||"",B.meta.ids.length&&d({id:B.meta.ids[0],ids:B.meta.ids,title:di(se.text,B.beats),chapter:T,month:null,kind:"short",test:null,beats:B.beats}))}}}}continue}if(/^附篇一/.test(T)){for(const _ of g.children){const{beats:I,meta:P}=lt(_.lines,{title:_.text}),j=P.cond||Pn(_.text)||{};d({id:P.ids[0]||"EVT_STYLE_"+f,ids:P.ids,title:vs(_.text),chapter:T,month:null,kind:"style",test:j,beats:I})}continue}if(/^附篇二/.test(T)){for(const _ of g.children){const I=_.text.match(/^M(\d+)\s*[｜|]\s*(.+)$/);if(!I)continue;const P=Number(I[1]),j=_.lines.filter(Z=>!/^\*\*第.+章互动/.test(Z.trim())),G=lt(j,{title:I[2]}),N=G.meta.ids[0]||"EVT_FRIEND_M"+P,w={id:N,ids:G.meta.ids.length?G.meta.ids:[N],title:I[2],chapter:"与苏晴的每月互动",month:P,kind:"friend",test:null,beats:G.beats};o[P]=w,d(w)}continue}if(/^附篇三/.test(T)){let _=0;for(const I of g.children){const P=I.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);if(!P)continue;const j=lt(I.lines,{title:P[2]}),G=j.meta.ids[0]||"EVT_TUTORIAL_"+P[1];d({id:G,ids:j.meta.ids.length?j.meta.ids:[G],title:P[2],chapter:"新手教程",month:null,kind:"tutorial",order:_++,test:null,beats:j.beats})}continue}if(/^附篇三/.test(T)){let _=0;for(const I of g.children){const P=I.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);if(!P)continue;const j=lt(I.lines,{title:P[2]}),G=j.meta.ids[0]||"EVT_TUTORIAL_"+P[1];d({id:G,ids:j.meta.ids.length?j.meta.ids:[G],title:P[2],chapter:"新手教程",month:null,kind:"tutorial",order:_++,test:null,beats:j.beats})}continue}if(/^第十三章/.test(T)){for(const _ of g.children){if(/^13\.7/.test(_.text)){for(const j of _.children){const G=cd(j.text);if(!G)continue;const N=[];for(const w of j.lines){const Z=w.trim();if(/^【触发条件/.test(Z))continue;const ee=Z.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);ee?N.push({title:ee[1],text:(ee[2]||"").trim()}):N.length&&Z&&!/^[-*#]/.test(Z)&&(N[N.length-1].text+=(N[N.length-1].text?`
`:"")+Z)}N.length&&(c[G]=N)}continue}const{beats:I,meta:P}=lt(_.lines,{title:_.text});P.ids.length&&d({id:P.ids[0],ids:P.ids,title:vs(_.text),chapter:T,month:null,kind:"final",test:null,beats:I})}continue}if(/^第十四章/.test(T)){for(const _ of g.children)for(const I of _.lines){const P=I.trim(),j=P.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(j){const w=j[3].replace(/`/g,"").trim().replace(/^cake-/,"");w&&(i[w]={hint:j[4].trim(),flavor:j[5].trim()});continue}const G=P.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);G&&(a[G[1]]=G[2])}continue}}n.length||u.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const k={events:n,stages:s,friend:o,codex:i,cityText:a,partnerEndings:c,warnings:u};return k.find=g=>n.find(T=>T.id===g||(T.ids||[]).includes(g))||null,k}function vs(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function di(e,t){const n=e.match(/《(.+?)》/);if(n)return n[1];const s=t.find(o=>o.t==="nar");return s?s.text.slice(0,12):e}function ms(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function fi(e,t){const n=e.match(/第([一二三四五六])阶段/);return n?nd[n[1]]:t?Math.ceil(t/6):null}function cd(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐鸢/.test(e)?"kexin":/叶星河/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}const Te=ad(ed);if(typeof console<"u"){const e={};Te.events.forEach(s=>e[s.kind]=(e[s.kind]||0)+1);let t=0,n=0;Te.events.forEach(s=>{(s.beats||[]).forEach(o=>{o.t==="choice"&&(t+=1,n+=o.options.length)})}),console.log("[剧情] 已加载 "+Te.events.length+" 个事件（"+Object.keys(e).map(s=>s+" "+e[s]).join("，")+"），友情互动 "+Object.keys(Te.friend).length+" 段，阶段结算 "+Object.keys(Te.stages).length+" 组，选择 "+t+" 处 / "+n+" 项"),Te.warnings.length&&Te.warnings.forEach(s=>console.warn("[剧情] "+s))}const ud=["清爽果香","绵甜柔和","醇厚浓香"],dd=["偏少","均衡","偏多"],fd=["简约点缀","日常装饰","丰富装饰"],pd=[72,90,100],Hl=[100,90,72],ao={taro:{direction:1,ratio:0,process:1,theme:"做出绵软、微甜，又有清脆夹心的层次。",focus:"芋泥夹层要先冷却，薄脆尽量靠近售卖时再组合。",ratioLabel:"芋泥甜度",processes:["趁热把薄脆拌进芋泥","芋泥冷却后分层夹入薄脆","把薄脆压碎拌入奶油"],distractors:["蜜红豆","轻盈慕斯"]},matcha:{direction:0,ratio:0,process:1,theme:"让茶香清新微苦，红豆甜味恰好托住回甘。",focus:"抹茶少量多次加入，避免高温久烤带出苦味。",ratioLabel:"抹茶用量",processes:["一次加入全部抹茶并延长烘烤","分次拌入抹茶并缩短烘烤","先加红豆再用热奶油冲抹茶"],distractors:["台农芒果泥","动物奶油"]},mango:{direction:0,ratio:1,process:2,theme:"突出成熟芒果的清香，同时保留慕斯的轻盈。",focus:"尝过果泥再调甜度，冷藏定型后再装饰。",ratioLabel:"果泥与慕斯比例",processes:["慕斯远多于果泥","果泥和慕斯大致平衡","大量果泥直接拌入温热慕斯"],distractors:["蜜红豆","轻奶油"]},tiramisu:{direction:2,ratio:1,process:1,theme:"咖啡香醇厚，但奶酪仍要保留轻柔回甘。",focus:"手指饼干快速蘸取咖啡液，留住内部结构。",ratioLabel:"咖啡液浓度",processes:["让饼干长时间浸泡","快速蘸取后分层冷藏","用咖啡液直接冲入奶酪"],distractors:["可可胚","金桂冻"]},fig:{direction:0,ratio:0,process:2,theme:"让无花果的清甜成为主角，奶油只做轻柔衬托。",focus:"选熟度合适的无花果，最后轻放在冷却奶油上。",ratioLabel:"无花果用量",processes:["无花果和奶油长时间打发","烤前放入无花果","奶油冷却后再铺鲜果"],distractors:["浓缩咖啡液","高山秋栗"]},seasonal:{direction:0,ratio:1,process:1,theme:"让当季水果有层次，甜度不盖住果香。",focus:"按季节更换鲜果，果肉与夹心分层组合。",ratioLabel:"鲜果与夹心比例",processes:["将所有水果打成同一层果泥","保留果肉并与夹心分层","增加糖浆并把水果提前烤干"],distractors:["传统红曲","蜜红豆"]},custom:{direction:1,ratio:1,process:0,theme:"按顾客想要的口味设计，同时保证切分时结构稳定。",focus:"先确认承重胚，再固定夹层和手工裱花。",ratioLabel:"夹层与蛋糕胚比例",processes:["使用双层承重胚，逐层固定裱花","把全部夹层叠在单层软胚上","先装饰外层再填入夹心"],distractors:["金桂冻","波姬红无花果"]},festival:{direction:1,ratio:1,process:2,theme:"在节日氛围里保留熟悉的团圆风味。",focus:"传统红曲或栗蓉搭配节庆装饰，出炉冷却后再包装。",ratioLabel:"馅料与蛋糕胚比例",processes:["热蛋糕出炉后立刻装入礼盒","把装饰和馅料一同长时间烘烤","冷却定型后装饰并包装"],distractors:["鲜草莓","浓缩咖啡液"]},signature:{direction:2,ratio:0,process:1,theme:"复原外婆的桂花栗子蛋糕，让秋栗醇厚、金桂清雅。",focus:"栗子甜则少放糖，桂花冻冷却后分层夹入，装盒前现撒金桂。",ratioLabel:"额外糖量",processes:["趁热把金桂干花拌进栗子泥","桂花冻冷却后作为独立夹层","桂花冻趁热浸入戚风胚"],distractors:["桂花蜜","动物奶油"]}},Cs={plain:{question:"原味奶油蛋糕切开后有些干，奶油也盖住了戚风的香气。",options:["增加糖浆并厚涂奶油","缩短烘烤，并减薄奶油层","延长烘烤，让外皮更脆"],correct:1,feedback:"先守住戚风的湿润度，再让奶油薄薄衬托。"},strawberry:{question:"顾客觉得奶油有些腻，草莓的酸甜味不够明显。",options:["减少奶油，增加草莓夹层","延长蛋糕胚烘烤时间","改变表面装饰颜色"],correct:0,feedback:"把奶油减薄，并增加草莓果味层。"},chocolate:{question:"巧克力蛋糕入口偏苦，回味也显得厚重。",options:["加入更多纯可可粉","减少甘纳许并调和可可浓度","增加烘烤时间让水分散尽"],correct:1,feedback:"适当收住甘纳许和可可的浓度，保留香气即可。"},taro:{question:"芋泥薄脆放一会儿就不脆了。",options:["把薄脆提前拌进热芋泥","芋泥冷却后分层，临近售卖再组合","把薄脆泡进奶油里"],correct:1,feedback:"减少水分接触，让薄脆临近售卖时再入层。"},matcha:{question:"抹茶的苦味有些突出，蜜红豆也不明显。",options:["增加红豆层并略减抹茶","增加抹茶粉并减少红豆","把红豆打成糖浆淋面"],correct:0,feedback:"略减抹茶浓度，让蜜红豆的甜味接住茶香。"},mango:{question:"芒果慕斯吃起来偏腻，果香不够明亮。",options:["增加慕斯比例","使用成熟芒果泥并平衡慕斯比例","延长烘烤芒果泥的时间"],correct:1,feedback:"用熟芒果的果香提亮口味，保持慕斯轻盈。"},tiramisu:{question:"提拉米苏底层的手指饼干湿软散开了。",options:["延长咖啡浸泡时间","快速蘸咖啡液后立即分层冷藏","增加咖啡液并拌入奶酪"],correct:1,feedback:"饼干快速蘸取咖啡液即可，避免吸水过多。"},fig:{question:"无花果奶油看起来漂亮，但吃不出鲜果香。",options:["增加奶油厚度","烘烤时加入更多无花果","冷却后铺上新鲜无花果"],correct:2,feedback:"最后加入新鲜果肉，保留无花果的香气和口感。"},seasonal:{question:"季节水果蛋糕层次混在一起，果味不够清楚。",options:["保留果肉并和夹心分层","把水果全部打成泥","增加糖浆覆盖水果"],correct:0,feedback:"保留果肉口感，再用独立夹层表现季节变化。"},custom:{question:"生日定制蛋糕切分时夹层容易倾斜。",options:["改用双层承重胚并逐层固定","增加顶部裱花重量","使用单层软胚并增加夹心"],correct:0,feedback:"先稳定承重结构，再逐层填入夹心和装饰。"},festival:{question:"节日限定蛋糕节庆感很足，味道却有些平淡。",options:["增加礼盒装饰层数","选择红曲或栗蓉馅料，冷却后再包装","延长礼盒内的回温时间"],correct:1,feedback:"用红曲或栗蓉明确节日风味，并在冷却后包装。"},signature:{question:"栗子甜度合适，但桂花香气不够鲜明。",options:["增加糖量并提前烤入桂花","桂花冻冷却分层，装盒前现撒金桂","把桂花干花打碎混进戚风胚"],correct:1,feedback:"沿用外婆手记：桂花冻冷却分层，装盒前再现撒金桂。"}};function Ls(e){return[...new Set(Array.isArray(e)?e:[])].sort()}function Kl(e,t){const n=Ls(t);return(Bl[e]||[]).some(s=>{const o=Ls(s);return o.length===n.length&&o.every((i,a)=>i===n[a])})}function hd({coreCorrect:e,directionCorrect:t,ratioOffset:n,processCorrect:s,decoration:o}){const i=[];return e||i.push("核对图鉴中的核心食材，选齐后再做风味判断。"),t||i.push("风味方向和产品主题不太协调。"),n&&i.push("调整主料比例，让主要食材的味道更突出。"),s||i.push("工艺还需要照顾这款蛋糕的口感结构。"),o===2&&i.push("装饰丰富，外观加分；制作成本也相应提高。"),o===0&&i.push("简约装饰控制了成本，可以再考虑提升展示效果。"),i.length||i.push("四项都很协调，可以考虑正式上架。"),i}function vd(e,t){const n=ao[e];if(!n)return null;const s=Kl(e,t.ingredients),o=t.direction===n.direction,i=Math.abs(t.ratio-n.ratio),a=t.process===n.process,c=t.decoration;if(![0,1,2].includes(t.direction)||![0,1,2].includes(t.ratio)||![0,1,2].includes(t.process)||![0,1,2].includes(c))return null;const u=Math.max(0,(o?100:65)-i*15-(s?0:45)),f=a?100:60,d=pd[c],h=Hl[c],k=Math.round((u+f+d+h)/4);return{type:"development",productId:e,ingredients:Ls(t.ingredients),direction:t.direction,ratio:t.ratio,process:t.process,decoration:c,coreCorrect:s,scores:{flavor:u,texture:f,appearance:d,cost:h},score:k,passed:s&&k>=75,refined:s&&k>=90,feedback:hd({coreCorrect:s,directionCorrect:o,ratioOffset:i,processCorrect:a,decoration:c})}}function md(e){if(!e||![0,1,2].includes(e.sugar)||![0,1,2].includes(e.filling)||![0,1,2].includes(e.garnish))return null;const t=Kl("signature",e.ingredients),n=e.sugar===0,s=e.filling===1,o=e.garnish===2,i={flavor:Math.max(0,(n?100:60)-(t?0:45)),texture:s?100:55,appearance:o?100:65,cost:t?90:65},a=Math.round(Object.values(i).reduce((u,f)=>u+f,0)/4),c=[];return t||c.push("请按手记选齐高山秋栗、金桂冻和戚风胚。"),n||c.push("甜栗本身够甜时，要减少额外糖量。"),s||c.push("桂花冻冷却后单独夹入，才能保留清楚的层次。"),o||c.push("装盒前现撒金桂，香气会更鲜明。"),c.length||c.push("外婆手记的风味与做法都复原了。"),{type:"signature",productId:"signature",ingredients:Ls(e.ingredients),sugar:e.sugar,filling:e.filling,garnish:e.garnish,coreCorrect:t,scores:i,score:a,passed:t&&n&&s&&o&&a>=75,refined:t&&n&&s&&o&&a>=90,feedback:c}}function pi(e){const t=ao[e];return[...new Set([...(Bl[e]||[]).flat(),...(t==null?void 0:t.distractors)||[]])]}function gd(e){return Cs[e]||null}const at=(...e)=>e.join(","),Fs={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:at("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:at("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:at("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:at("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:at("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:at("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:at("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:at("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:at("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:at("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:at("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},yd=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/宿舍|卧室|家里|房间/,"home"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]],hi={1:"home",2:"shop",3:"kitchen",4:"shop",5:"shop",6:"market",7:"shop",8:"shop",9:"kitchen",10:"shop",11:"shop",12:"shop",13:"kitchen",14:"shop",15:"shop",16:"market",17:"street",18:"shop",19:"store",20:"shop",21:"shop",22:"store",23:"shop",24:"shop",25:"shop",26:"kitchen",27:"kitchen",28:"street",29:"market",30:"shop",31:"store",32:"street",33:"store",34:"store",35:"studio",36:"shop"},vi={1:"shop",2:"street",3:"street",4:"shop",5:"park",6:"market",7:"night",8:"shop",9:"studio",10:"cafe",11:"studio",12:"shop",13:"kitchen",14:"shop",15:"street",16:"park",17:"street",18:"shop",19:"store",20:"street",21:"cafe",22:"night",23:"cafe",24:"studio",25:"street",26:"street",27:"kitchen",28:"shop",29:"park",30:"studio",31:"cafe",32:"street",33:"store",34:"studio",35:"school",36:"shop"};function bd(e){return e?e.kind==="main"&&hi[e.month]?hi[e.month]:e.kind==="friend"&&vi[e.month]?vi[e.month]:Gl(e.title)||"shop":"shop"}function Gl(e){const t=e||"";for(const[n,s]of yd)if(n.test(t))return s;return""}const es={林念:{in:"ln-sprite-in.webp",out:"ln-sprite-out.webp",face:"ln-face.webp"},苏晴:{in:"sq-sprite-in.webp",out:"sq-sprite-out.webp",face:"sq-face.webp"},林暖:{in:"nu-sprite-in.webp",out:"nu-sprite-out.webp",face:"nu-face.webp"},周雨桐:{in:"xy-sprite-in.webp",out:"xy-sprite-out.webp",face:"xy-face.webp"},许知遥:{in:"zy-sprite-in.webp",out:"zy-sprite-out.webp",face:"zy-face.webp"},唐鸢:{in:"ty-sprite-in.webp",out:"ty-sprite-out.webp",face:"ty-face.webp"},叶星河:{in:"xh-sprite-in.webp",out:"xh-sprite-out.webp",face:"xh-face.webp"}},mi=es,_d={shop:"in",kitchen:"in",store:"in",street:"out",home:"out",cafe:"out",market:"out",school:"out",park:"out",night:"out",studio:"out"};function kd(e){return _d[e]||"out"}function Wl(e,t){const n=es[e];if(!n)return"";if(Je(n[t])==="ok")return n[t];const s=t==="in"?"out":"in";return Je(n[s])==="ok"?n[s]:""}function Md(e,t){const n=Wl(e,t||"out");return n?Ie(n):""}function xd(){Object.keys(es).forEach(e=>{const t=es[e];["in","out","face"].forEach(n=>Je(t[n]))}),Object.keys(Fs).forEach(e=>Je(Fs[e].img))}function Fr(e){const t=es[e];return t&&Je(t.face)==="ok"?Ie(t.face):""}function $d(e,t){return!!Wl(e,t||"out")}const Cd={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"},"graduation-rejection":{img:"cg-graduation-rejection.webp",name:"毕业季的拒信"},osmanthus:{img:"cg-osmanthus.webp",name:"桂花栗子蛋糕"},festival:{img:"cg-festival.webp",name:"秋日文化节"},memory:{img:"cg-memory.webp",name:"高三晚自习"},flagship:{img:"cg-flagship.webp",name:"旗舰店方案"},album:{img:"cg-album.webp",name:"三年相册"},finale:{img:"cg-finale.webp",name:"三周年合影"}},zl=[{id:"graduation-rejection",event:"EVT_PROLOGUE_01"},{id:"osmanthus",event:"EVT_M26_MAIN"},{id:"festival",event:"EVT_M29_MAIN"},{id:"memory",event:"EVT_M29_MAIN"},{id:"flagship",event:"EVT_M33_MAIN"},{id:"album",event:"EVT_M35_MAIN"},{id:"finale",event:"EVT_FINAL_END_NATIONAL"}];function Vs(e){const t=Cd[e],n=t?t.img:"cg-"+e+".webp";return{src:Je(n)==="ok"?Ie(n):"",name:t?t.name:e}}function wd(e){return!e||!e.img?"":Je(e.img)==="ok"?Ie(e.img):""}const Xs="alb-save-v6",er="alb-manual-save-v1",ts=5,Yl=60,Jl=40;function ut(){return{v:9,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,pantry:{base:12,dairy:8,decor:2,strawberry:2,cocoa:2},legacyStock:0,warehouseCapacity:120,ngpDiscountUsed:!1,devices:{},shelf:{},batches:[],plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],dayPhase:"prep",service:null,productionMini:null,productionResult:null,tutorialSeen:!1,tutorialProgress:0,marketRun:null,cafeRun:null,cafeCollab:0,activityRecords:{market:[],cafe:[]},staffAssignments:{picker:null,packer:null,auto:!1},challenge:null,challengeDayIndex:0,challengeDone:!1,decorations:[],regularCustomers:{chen:{purchases:0,lastPurchaseDay:0,stories:[]},zhang:{purchases:0,lastPurchaseDay:0,stories:[]}},runEndings:[],career:{products:["plain","strawberry","chocolate"],photos:[],cgs:[],decorations:[],endings:[],labReports:{},activityRecords:{market:[],cafe:[]},newGamePlusRuns:0},labPending:null,newGamePlus:!1,doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,monthSnap:{rep:20,unlocked:[],skill:{}},deliveryDay:-1,helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],storyChoices:{},photos:[],log:[],phase:"playing",ending:null,acquired:!1,autoStory:!1,sqchatMonth:0,stage:1,report:null}}const r=Jt(ut()),Le=Jt({events:[]});function tr(e){return r.devices[e]||0}function fn(e){const t=lo(e),n=tr(e);return n&&t?t.tiers[n-1].value:0}function Ql(e){const t=lo(e),n=tr(e);return t&&n<t.tiers.length?t.tiers[n]:null}function Ed(e){const t=Ql(e);return!t||r.phase!=="playing"||r.dayPhase!=="prep"||r.cash<t.cost?!1:(r.cash-=t.cost,r.devices[e]=tr(e)+1,e==="warehouse"&&(r.warehouseCapacity=[120,180,240,320][r.devices[e]]),r.monthCost+=t.cost,ye("升级了"+lo(e).name+"，"+t.text,"good"),fe(),!0)}const Cn=U(()=>Ye.filter(e=>r.unlocked.includes(e.id))),cn=U(()=>r.stamina+Yl+r.staff.length*Jl+fn("oven")),Vr=U(()=>Math.min(4,r.decorations.length)),nr=U(()=>Object.values(r.pantry||{}).reduce((e,t)=>e+Number(t||0),0));function Sd(e=r.plan){return Object.entries(e||{}).reduce((t,[n,s])=>{const o=Sn[n]||{};return Object.entries(o).forEach(([i,a])=>{t[i]=(t[i]||0)+a*s}),t},{})}function co(e=r.plan){const t={};let n=r.legacyStock||0;return Object.entries(e||{}).forEach(([s,o])=>{for(let i=0;i<o;i++){if(n>=1){n-=1;continue}Object.entries(Sn[s]||{}).forEach(([a,c])=>{t[a]=(t[a]||0)+c})}}),Object.keys(t).forEach(s=>{t[s]=Math.max(0,t[s]-((r.pantry||{})[s]||0))}),Object.fromEntries(Object.entries(t).filter(([,s])=>s>0))}function sn(e,t=1){return(r.legacyStock||0)>=t?!0:Object.entries(Sn[e]||{}).every(([n,s])=>((r.pantry||{})[n]||0)+1e-4>=s*t)}function uo(e,t=1){const n=Sn[e]||{},s=Object.fromEntries(Object.entries(n).map(([o,i])=>[o,i*t]));return(r.legacyStock||0)>=t?(r.legacyStock=Math.round((r.legacyStock-t)*100)/100,!0):sn(e,t)?(Object.entries(s).forEach(([o,i])=>{r.pantry[o]=Math.round(((r.pantry[o]||0)-i)*100)/100}),!0):!1}function Td(e){if(r.phase!=="playing"||r.dayPhase!=="prep"||r.ap<1)return{ok:!1,message:"准备阶段需要 1 点行动力采购。"};const t=Object.entries(e||{}).filter(([,c])=>Number(c)>0);if(!t.length||t.some(([c,u])=>{const f=gn.find(d=>d.id===c);return!f||f.month>r.month||!Number.isInteger(Number(u))}))return{ok:!1,message:"请选择原料和整数购买数量。"};const n=Object.fromEntries(t.map(([c,u])=>[c,Number(u)])),s=Object.values(n).reduce((c,u)=>c+u,0),o=t.reduce((c,[u,f])=>c+gn.find(d=>d.id===u).price*f,0),i=r.newGamePlus&&!r.ngpDiscountUsed?Math.min(300,o):0,a=o-i;return nr.value+s>r.warehouseCapacity?{ok:!1,message:"仓库容量不足，请减少购买数量。"}:r.cash<a?{ok:!1,message:"资金不足。"}:(r.ap-=1,r.cash-=a,r.monthCost+=a,Object.entries(n).forEach(([c,u])=>{r.pantry[c]=(r.pantry[c]||0)+u}),r.newGamePlus&&!r.ngpDiscountUsed&&(r.ngpDiscountUsed=!0),ye("采购了 "+t.map(([c,u])=>gn.find(f=>f.id===c).name+" ×"+u).join("、")+(i?"，二周目优惠 ¥"+i:""),"good"),fe(),{ok:!0,message:"采购完成，共 ¥"+a+"。"})}function Id(){const e=co(),t={};return Object.entries(e).forEach(([n,s])=>{t[n]=Math.ceil(s)}),t}function fo(){return io.filter(e=>r.month>=e.month&&r.day===e.day)}function Ad(e){fo().forEach(t=>{const n=r.regularCustomers[t.id];if(!e[t.product]||n.lastPurchaseDay===r.dayIndex)return;n.purchases+=1,n.lastPurchaseDay=r.dayIndex;const s=n.purchases===1?0:n.purchases===3?1:-1;s>=0&&!n.stories.includes(s)?(n.stories.push(s),ye(t.name+"和你聊起了老街坊的故事","story")):ye(t.name+"买走了一份"+Ee(t.product).name)})}function Od(){const e=Ye.filter(n=>n.month===r.month&&r.unlocked.includes(n.id)),t=[{type:"stock",target:""},{type:"custom",target:""}];return e.length&&t.push({type:"new",target:e[Math.floor(Math.random()*e.length)].id}),t[Math.floor(Math.random()*t.length)]}function Zl(){r.challengeDayIndex===r.dayIndex&&r.challenge||(r.challenge=Od(),r.challengeDayIndex=r.dayIndex)}function Mr(e,t,n){Object.entries(Sn[t]||{}).forEach(([s,o])=>{e[s]=(e[s]||0)+o*n})}function Nd(e){return Wu[r.prices[e]||"std"]}function Tn(e){const t=Ee(e),n=r.levels[e]||1;return Math.round(t.price*Nd(e).priceMul*(1+(n-1)*.05)*(1+fn("cashier")))}const Xl=U(()=>700+r.shopLevel*180+r.staff.length*500),sr=U(()=>Zu(r.month)),qt=U(()=>{const e=sr.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const t=e.goals.map(n=>({text:n.text,done:n.check(r),expand:!!n.expand}));return{done:t.filter(n=>n.done).length,need:e.need,list:t}});function ea(){let e=0;for(const t of Object.keys(r.plan))e+=r.plan[t]*Ee(t).diff;return e}function po(){vo();const e=Le.events.map(t=>Te.events.some(n=>n.id===t.id)?t.id:t);return{...r,storyQueue:e,savedAt:Date.now()}}function fe(){try{localStorage.setItem(Xs,JSON.stringify(po()))}catch{}}function ta(e){return!!e&&typeof e=="object"&&[6,7,8,9].includes(e.v)&&Number.isInteger(Number(e.month))&&Number(e.month)>=1&&Number(e.month)<=36&&Number.isInteger(Number(e.day))&&Number(e.day)>=1&&Number(e.day)<=ts&&Number.isFinite(Number(e.cash))&&(e.unlocked===void 0||Array.isArray(e.unlocked))&&(e.played===void 0||Array.isArray(e.played))&&(e.storyChoices===void 0||e.storyChoices&&typeof e.storyChoices=="object"&&!Array.isArray(e.storyChoices))&&(e.storyQueue===void 0||Array.isArray(e.storyQueue))&&(e.career===void 0||e.career&&typeof e.career=="object"&&!Array.isArray(e.career))}function Ut(e){try{const t=typeof e=="string"?JSON.parse(e):e;return ta(t)?{ok:!0,data:t,preview:{month:Number(t.month),day:Number(t.day),savedAt:Number(t.savedAt)||0,cash:Number(t.cash)||0,phase:t.phase||"playing"}}:{ok:!1,message:"存档格式无效或版本不受支持。"}}catch{return{ok:!1,message:"无法读取存档文件。"}}}function ho(e){var t,n,s,o;if(!ta(e))return!1;try{Object.assign(r,ut());const i=e.v!==9;if(Object.keys(ut()).forEach(f=>{e[f]!==void 0&&f!=="regularCustomers"&&f!=="career"&&(r[f]=e[f])}),e.v===6){r.pantry={};let f=Math.max(0,Number(e.stock||0));Object.entries(e.plan||{}).forEach(([T,_])=>{const I=Math.min(f,Math.max(0,Number(_)||0));I&&Mr(r.pantry,T,I),f-=I});const d=(e.unlocked||["plain"]).filter(T=>Sn[T]),h=d.length?d:["plain"],k=Math.floor(f);for(let T=0;T<k;T++)Mr(r.pantry,h[T%h.length],1);const g=f-k;g&&h.forEach(T=>Mr(r.pantry,T,g/h.length)),r.legacyStock=0,r.cash+=Number(e.monthRev||0),r.dayPhase=e.daySold||e.dayRev?"closing":"prep",r.sqchatMonth=Number(e.friendMonth||0),r.batches=Object.entries(e.shelf||{}).filter(([,T])=>T>0).map(([T,_],I)=>({id:"migrated-"+I,product:T,qty:_,quality:"normal",decoration:null})),r.service=null,r.stock=void 0,delete r.friendship,delete r.friendMonth,r.ngpDiscountUsed=!1,r.challenge=null,r.challengeDayIndex=0}r.v=9,r.pantry=r.pantry||{},r.legacyStock=Number(r.legacyStock||0),r.batches=r.batches||[],r.staffAssignments={...ut().staffAssignments,...r.staffAssignments||{}},r.dayPhase=r.dayPhase||"prep",r.regularCustomers=Object.fromEntries(io.map(f=>[f.id,{...ut().regularCustomers[f.id],...(e.regularCustomers||{})[f.id]}])),r.career={...ut().career,...e.career||{}},r.career.labReports={...ut().career.labReports,...(e.career||{}).labReports||{}},r.activityRecords={...ut().activityRecords,...e.activityRecords||{}},r.activityRecords.market=r.activityRecords.market||[],r.activityRecords.cafe=r.activityRecords.cafe||[],r.career.activityRecords={...ut().career.activityRecords,...(e.career||{}).activityRecords||{},market:[...new Set([...((n=(t=e.career)==null?void 0:t.activityRecords)==null?void 0:n.market)||[],...r.activityRecords.market.map(f=>f.id)])],cafe:[...new Set([...((o=(s=e.career)==null?void 0:s.activityRecords)==null?void 0:o.cafe)||[],...r.activityRecords.cafe.map(f=>f.id)])]},r.career.cgs=r.career.cgs||[],r.storyChoices=r.storyChoices||{},r.savedAt=Number(e.savedAt)||0;const a=new Map(Te.events.map(f=>[f.id,f])),c=(e.storyQueue||[]).map(f=>typeof f=="string"?a.get(f):f).filter(f=>f&&typeof f=="object"&&typeof f.id=="string"&&Array.isArray(f.beats));Le.events.splice(0,Le.events.length,...c),r.challengeDayIndex=Number(r.challengeDayIndex||0);const u=r.dayPhase==="prep"&&(!r.challenge||r.challengeDayIndex!==r.dayIndex);return u&&Zl(),vo(),(i||u)&&fe(),!0}catch{return!1}}function xr(e=!1){try{const t=localStorage.getItem(e?er:Xs);return!!t&&Ut(t).ok}catch{return!1}}function Rd(){try{return localStorage.setItem(er,JSON.stringify(po())),!0}catch{return!1}}function gi(){try{return localStorage.getItem(er)||""}catch{return""}}function Dd(){try{return localStorage.getItem(Xs)||""}catch{return""}}function $r(){return JSON.stringify(po(),null,2)}function Cr(e=!0){try{const t=localStorage.getItem(er);if(!t||!Ut(t).ok)return!1;const n=JSON.parse(t);return ho(n)?(e&&fe(),!0):!1}catch{return!1}}function Pd(e){const t=Ut(e);return t.ok?ho(t.data)?(fe(),{ok:!0,preview:t.preview}):{ok:!1,message:"存档无法载入。"}:t}function gs(){try{const e=localStorage.getItem(Xs);return!e||!Ut(e).ok?!1:ho(JSON.parse(e))}catch{return!1}}function na(){const e={...vo()};Object.assign(r,ut()),r.career=e,Le.events.length=0,r.monthSnap={rep:r.reputation,unlocked:r.unlocked.slice(),skill:Object.assign({},r.partnerSkill)},ir(),fe()}function vo(){const e=r.career||ut().career;e.products=[...new Set([...e.products||[],...r.unlocked||[]])],e.photos=[...new Set([...e.photos||[],...r.photos||[]])];const t=e.cgs||[];return zl.forEach(n=>{(r.played||[]).includes(n.event)&&!t.includes(n.id)&&t.push(n.id)}),e.cgs=t,e.decorations=[...new Set([...e.decorations||[],...r.decorations||[]])],r.phase==="ended"&&r.ending&&r.ending.key&&(r.runEndings=[...new Set([...r.runEndings||[],r.ending.key])],e.endings=[...new Set([...e.endings||[],r.ending.key])]),r.career=e,e}function sa(e,t,n){const s=r.career.labReports[e]||{};r.career.labReports[e]={...s,[t]:{...n,run:(r.career.newGamePlusRuns||0)+1,month:r.month}}}function we(e,t){return{ok:e,message:t}}function yi(e){if(r.phase!=="playing")return we(!1,"当前不能进行实验。");if(r.dayPhase!=="prep")return we(!1,"营业开始后不能进行研发。");if(r.labPending)return we(!1,"请先处理上次试吃结果。");if(r.ap<1)return we(!1,"至少需要 1 点行动力才能开始试做。");const t=e&&e.productId,n=Ye.find(o=>o.id===t);if(!n||r.unlocked.includes(t)||n.month<=0||n.month>r.month)return we(!1,"这款产品还未开放研发，或已经上架。");if(t==="signature"&&(!e||e.type!=="signature"))return we(!1,"桂花栗子蛋糕需要进入 M26 专属复原。");const s=t==="signature"?md(e):vd(t,e||{});return s?uo(t,.25)?(r.ap-=1,r.labPending=s,ye("试做「"+n.name+"」消耗 1 点行动力和四分之一配方材料","story"),fe(),we(!0,"试吃完成。")):we(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。"):we(!1,"实验参数不完整，请检查每一项选择。")}function Ld(){const e=r.labPending;if(r.dayPhase!=="prep")return we(!1,"请在营业开始前完成上架。");if(r.phase!=="playing"||!e||!e.passed)return we(!1,"这份试吃结果还未达到上架要求。");if(r.ap<1)return we(!1,"行动力不足；试吃结果已保存，明天可以继续。");const t=Ye.find(n=>n.id===e.productId);return!t||t.month>r.month||r.unlocked.includes(e.productId)?we(!1,"产品状态已变化，请返回实验室确认。"):(r.ap-=1,r.unlocked.push(t.id),r.levels[t.id]=e.refined?1.5:1,sa(t.id,"development",{...e,type:e.type==="signature"?"signature":"development",feedback:e.type==="signature"?["外婆配方复原成功，桂香与秋栗的层次都找回来了。"]:e.feedback}),r.labPending=null,ye("「"+t.name+"」研发完成并正式上架，"+(e.refined?"精制品质，熟练度 Lv1.5":"熟练度 Lv1"),"good"),fe(),we(!0,t.name+(e.type==="signature"?"复原成功，已加入菜单。":"已正式上架。")))}function bi(){return r.labPending?(r.labPending=null,fe(),!0):!1}function Fd(e,t){if(r.phase!=="playing")return we(!1,"当前不能进行改良。");if(r.dayPhase!=="prep")return we(!1,"营业开始后不能进行改良。");const n=Ye.find(c=>c.id===e),s=gd(e);if(!n||!s||!r.unlocked.includes(e))return we(!1,"这款产品目前不能改良。");const o=r.levels[e]||1;if(o>=5)return we(!1,"这款产品已达到熟练度上限。");if(!Number.isInteger(t)||t<0||t>=s.options.length)return we(!1,"请选择一个改良方案。");const i=t===s.correct;if(r.ap<(i?2:1))return we(!1,i?"改良成功需要 2 点行动力。":"改良试吃需要 1 点行动力。");if(!uo(e,.25))return we(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。");if(r.ap-=1,!i){const c="这次试吃没有解决问题。"+s.feedback;return ye("改良「"+n.name+"」未通过试吃，消耗了四分之一配方材料","story"),fe(),{...we(!1,c),retry:!0,feedback:c}}r.ap-=1,r.levels[e]=Math.min(5,o+1),r.style.innovation+=3;const a={type:"improvement",score:100,levelBefore:o,levelAfter:r.levels[e],feedback:[s.feedback]};return sa(e,"improvement",a),ye("改良「"+n.name+"」成功，熟练度提升至 Lv"+r.levels[e],"good"),fe(),{...we(!0,s.feedback),feedback:s.feedback,level:r.levels[e]}}function Vd(){return r.phase!=="ended"||!r.ending?!1:(na(),r.newGamePlus=!0,r.ngpDiscountUsed=!1,r.career.newGamePlusRuns=(r.career.newGamePlusRuns||0)+1,fe(),!0)}function jd(){if(r.phase!=="playing")return!1;const e=r.month;for(;r.month===e&&r.phase==="playing";)r.dayPhase="closing",r.service={tickets:[],current:0},ca("waste");return r.month!==e}function Bd(){const e=$n.find(t=>!t.final&&t.short.key===(r.ending&&r.ending.key));return r.phase!=="ended"||!e?!1:(r.phase="playing",r.ending=null,r.stamina=r.maxStamina,ir(),go(),fe(),!0)}function qd(e){const t=oo.find(n=>n.id===e);return!t||r.phase!=="playing"||r.dayPhase!=="prep"||r.decorations.includes(e)||r.shopLevel<t.shopLevel||r.cash<t.cost?!1:(r.cash-=t.cost,r.monthCost+=t.cost,r.decorations.push(e),ye("添置了"+t.name+"，店铺舒适度 +1","good"),fe(),!0)}function ye(e,t){r.log.unshift({month:r.month,day:r.day,text:e,tone:t||"normal"}),r.log.length>60&&r.log.pop()}function Ne(e){return Math.max(0,Math.min(100,e))}function Ud(e){const t=[];for(const n of e)if(n.kind==="num"){const s=n.value;switch(n.key){case"资金":r.cash=Math.max(0,r.cash+s);break;case"口碑":r.reputation=Ne(r.reputation+s);break;case"知名度":r.popularity=Ne(r.popularity+s);break;case"友情值":break;case"门店":r.storeCount=Math.max(1,r.storeCount+s);break;case"员工":s>0&&Wd();break;case"烘焙":Hd(s*.2);break;case"品质":Kd(s*.05);break}t.push(n.key+(s>=0?"+":"")+s)}else n.key==="配方"?r.unlocked.includes(n.value)||(r.unlocked.push(n.value),t.push("解锁「"+Ee(n.value).name+"」")):n.key==="照片"&&(r.photos.includes(n.value)||(r.photos.push(n.value),t.push("获得纪念照片")));return t}function Hd(e){const n=r.unlocked.slice().sort((s,o)=>(r.levels[s]||1)-(r.levels[o]||1))[0];n&&(r.levels[n]=Math.min(5,(r.levels[n]||1)+e))}function Kd(e){r.unlocked.forEach(t=>{r.levels[t]=Math.min(5,(r.levels[t]||1)+e)})}function Gd(e){const t=[];for(const n of e||[]){switch(n.k){case"style":r.style[n.id]=(r.style[n.id]||0)+n.v;break;case"trust":if(!n.id)break;r.partnerTrust[n.id]=Ne((r.partnerTrust[n.id]||0)+n.v);break;case"skill":if(!n.id)break;r.partnerSkill[n.id]=Math.min(5,Math.round(((r.partnerSkill[n.id]||1)+n.v)*10)/10);break;case"loyalty":r.loyalty=Ne(r.loyalty+n.v);break}n.k!=="friend"&&n.label&&t.push(n.label)}return t}function _i(e,t,n,s=""){const o=e.node||"choice-"+n,i=r.storyChoices[s]||{};if(Object.prototype.hasOwnProperty.call(i,o))return[];const a=Gd(t.gains);return r.storyChoices[s]={...i,[o]:n},e&&e.node==="13.6"&&n===1&&(r.acquired=!0),a.length&&ye("选择："+t.label+"（"+a.join("，")+"）","story"),fe(),a}function ra(e){if(!e||r.staff.includes(e))return;r.staff.push(e),r.partnerTrust[e]===void 0&&(r.partnerTrust[e]=10),r.partnerSkill[e]===void 0&&(r.partnerSkill[e]=1);const t=Mn(e);t&&ye(t.name+" 加入了林记","story")}function Wd(){const e=kn.find(t=>!r.staff.includes(t.id)&&t.joinMonth<=r.month);e&&ra(e.id)}function oa(){return r.staff.map(e=>Mn(e)).filter(Boolean)}const ki={feedback:5,market:3,talk:2,train:5};function zd(e){const t=r.cd[e]||0;return Math.max(0,t-r.dayIndex)}function Lt(e){switch(e){case"restock":return{name:"原料采购",ap:1,cost:0,note:"请前往老街食材铺选择原料",disabled:!0};case"feedback":{const t=zd("feedback");return{name:"顾客反馈",ap:1,cost:0,note:t>0?"还要等 "+t+" 天":"口碑 +1，忠诚 +2",disabled:t>0}}case"talk":{const t=r.staff.length?oa()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:t?"和 "+t+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"sqchat":{const t=r.sqchatMonth===r.month;return{name:"与苏晴互动",ap:1,cost:0,note:t?"这个月已经聊过了":"本月专属相处剧情",disabled:t}}case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:r.cash<800};case"train":return r.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:r.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const t=Xn.find(n=>n.lv===r.shopLevel+1);return t?{name:"装修到「"+t.name+"」",ap:2,cost:t.cost,note:"展示位与产能提升",disabled:r.cash<t.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const t=xn.find(s=>!r.cities.includes(s.id)&&!r.surveyed.includes(s.id));if(!t)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const n=r.month>=t.month&&r.reputation>=t.rep;return{name:"考察"+t.name,ap:2,cost:2e3,note:n?"考察之后可以筹备开店":"需要第 "+t.month+" 个月、口碑 "+t.rep,disabled:!n||r.cash<2e3}}case"branch":{if(!r.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const t=xn.find(n=>n.id===r.surveyed[0]);return{name:"在"+t.name+"开店",ap:3,cost:t.cost,note:"门店 +1",disabled:r.cash<t.cost}}default:return{name:e,ap:1,cost:0,note:""}}}function wn(e,t){if(r.phase!=="playing"||r.dayPhase!=="prep")return!1;const n=Lt(e);if(n.disabled||r.ap<n.ap||n.cost&&r.cash<n.cost)return!1;const s=r.cash;switch(e){case"restock":return!1;case"feedback":r.reputation=Ne(r.reputation+1),r.loyalty=Ne(r.loyalty+2),ye("认真听了顾客的意见，口碑上升");break;case"talk":if(t&&t.partner==="mom")r.momBond=Ne(r.momBond+4),ye("和妈妈聊了一会儿，家庭默契 +4");else if(r.staff.length){const o=t&&t.partner?t.partner:r.staff[0];if(!r.staff.includes(o))return!1;r.partnerTrust[o]=Ne((r.partnerTrust[o]||0)+6);const i=Mn(o);ye("和 "+(i?i.nick:"伙伴")+" 聊了很久，信赖 +6")}else r.momBond=Ne(r.momBond+4),ye("和妈妈聊了一会儿，家庭默契 +4");break;case"sqchat":{const o=Te.friend[r.month];if(!o)break;r.sqchatMonth=r.month,r.autoStory=!0,Gt(o),ye("和苏晴度过了一段只属于两人的时间");break}case"market":r.cash-=800,r.popularity=Ne(r.popularity+2),r.brand=Ne(r.brand+1.5),ye("发了新品帖子，知名度上升");break;case"train":{if(!r.staff.length)return!1;const o=t&&t.partner?t.partner:r.staff[0];r.cash-=400,r.partnerSkill[o]=Math.min(5,(r.partnerSkill[o]||1)+1);const i=Mn(o);ye("培训了 "+(i?i.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const o=Xn.find(i=>i.lv===r.shopLevel+1);if(!o)return!1;r.cash-=o.cost,r.shopLevel=o.lv,r.maxAp=8+(o.ap||0),r.reputation=Ne(r.reputation+3),r.style.community+=2,ye("店铺升级为「"+o.name+"」","good");break}case"survey":{const o=xn.find(i=>!r.cities.includes(i.id)&&!r.surveyed.includes(i.id));if(!o)return!1;r.cash-=2e3,r.surveyed.push(o.id),ye("去"+o.name+"看了一圈，可以筹备开店了");break}case"branch":{const o=xn.find(i=>i.id===r.surveyed[0]);if(!o)return!1;r.cash-=o.cost,r.storeCount+=1,r.cities.push(o.id),r.surveyed=r.surveyed.filter(i=>i!==o.id),r.brand=Ne(r.brand+6),r.style.efficiency+=3,ye("在"+o.name+"开了新店","good");break}default:return!1}return r.ap-=n.ap,ki[e]&&(r.cd[e]=r.dayIndex+ki[e]),s>r.cash&&(r.monthCost+=s-r.cash),fe(),!0}function Yd(e,t){if(r.dayPhase!=="prep"||!r.unlocked.includes(e))return;const n=Math.max(0,Math.min(12,Math.floor(t||0)));n===0?delete r.plan[e]:r.plan[e]=n,fe()}function jr(){if(r.phase!=="playing"||r.dayPhase!=="prep")return{ok:!1,msg:"当前不是制作阶段。"};if(!r.productionResult)return{ok:!1,msg:"先完成或跳过主打蛋糕小游戏。"};const e=Object.keys(r.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const t=e.reduce((a,c)=>a+r.plan[c],0),n=co();if(Object.keys(n).length)return{ok:!1,msg:"原料不足："+Object.entries(n).map(([a,c])=>gn.find(u=>u.id===a).name+" ×"+Math.ceil(c)).join("、")};const s=ea();if(s>cn.value)return{ok:!1,msg:"产能不够。今天的产能是 "+cn.value+" 点，还差 "+(s-cn.value)};const o=Yl+r.staff.length*Jl+fn("oven"),i=Math.round(Math.max(0,s-o)*(1-fn("mixer")));for(const a of e)for(let c=0;c<r.plan[a];c++)uo(a,1);r.stamina=Math.max(0,r.stamina-i);for(const a of e)r.shelf[a]=(r.shelf[a]||0)+r.plan[a],r.dayMade+=r.plan[a],r.levels[a]=Math.min(5,(r.levels[a]||1)+r.plan[a]*.02),r.batches.push({id:"b"+r.dayIndex+"-"+a+"-"+r.batches.length,product:a,qty:r.plan[a],quality:a===r.productionResult.product?r.productionResult.quality:"normal",decoration:a===r.productionResult.product?r.productionResult.decoration:null});return ye("做了 "+t+" 个蛋糕，自己出了 "+i+" 点体力"),r.plan={},r.productionMini=null,r.productionResult=null,r.dayPhase="service-ready",fe(),{ok:!0,msg:"做好了 "+t+" 个"}}const Mi=["mix","oven","piping","fruit"];function Jd(){if(r.dayPhase!=="prep"||r.productionMini||!Object.keys(r.plan).length)return!1;const e=Object.keys(r.plan).sort((t,n)=>r.plan[n]-r.plan[t])[0];return r.productionMini={type:Mi[Math.floor(Math.random()*Mi.length)],product:e,window:58+Math.floor(Math.random()*20),pattern:Math.floor(Math.random()*3)},fe(),!0}function xi(e=0,t=!1,n=null){const s=r.productionMini;if(!s||r.productionResult)return{ok:!1,message:"制作小游戏已结算。"};const o=t?0:Math.max(0,Math.min(100,Math.round(e)));return r.productionResult={product:s.product,quality:o>=90?"perfect":o>=70?"fine":"normal",score:o,priceBonus:o>=90?.1:o>=70?.05:0,decoration:n},r.productionMini=null,fe(),jr()}function Qd(){r.orders=[];const e=Math.min(.9,.55+r.popularity/350),t=1+(Math.random()<e?1:0);for(let n=0;n<t;n++){const s=Cn.value;if(!s.length)break;const o=s[Math.floor(Math.random()*s.length)],i=Math.random(),a=i<.35,c=!a&&i<.68,u=!a&&!c&&i<.8,f=a?"定制":c?"线上":u?"节日":"普通",d=a?1:1+Math.floor(Math.random()*3);r.orders.push({id:"o"+r.month+"-"+r.day+"-"+n,orderNo:"LJ-"+String(r.month).padStart(2,"0")+String(r.day).padStart(2,"0")+"-"+String(n+1).padStart(2,"0"),type:f,customer:a?"预约顾客":c?"线上顾客":u?"节日顾客":"附近顾客",product:o.id,qty:d,pay:Math.round(Tn(o.id)*d*(a?1.6*(1+fn("packing")):c?1.25:1)),due:a?["粉色小花","清爽配色","简洁裱花"][Math.floor(Math.random()*3)]:"",blessing:a?["生日快乐","愿你每天都有好心情","把今天的甜分享给你"][Math.floor(Math.random()*3)]:"",taken:!1})}}function Zd(e){if(r.dayPhase!=="prep")return!1;const t=r.orders.find(n=>n.id===e);return t?(t.taken=!t.taken,fe(),!0):!1}function ia(e,t=1){const n=r.batches.filter(s=>s.product===e&&s.qty>0);return n.reduce((s,o)=>s+o.qty,0)>=t?n[0]:null}function Xd(e,t){const n=r.batches.filter(i=>i.product===e&&i.qty>0);if(n.reduce((i,a)=>i+a.qty,0)<t)return[{qty:t,quality:"normal"}];let s=t;const o=[];for(const i of n){const a=Math.min(s,i.qty);if(a&&(i.qty-=a,o.push({qty:a,quality:i.quality||"normal"}),s-=a,!s))break}return s?[{qty:t,quality:"normal"}]:o}function ef(){var d;if(r.phase!=="playing"||r.dayPhase!=="service-ready"||r.service)return null;const e={tickets:[],current:0,unhappy:0,startedAt:Date.now(),automationUnlocked:rr()},t=r.orders.filter(h=>h.taken);t.forEach(h=>{const k=30+5*(h.qty-1);e.tickets.push({...h,kind:"appointment",status:"waiting",patience:k,remaining:k,customSatisfied:!0})});const n=Math.max(1,Math.min(4,r.shopLevel)),s=[[3,5],[5,7],[7,9],[9,12]],[o,i]=s[n-1],a=o+Math.floor(Math.random()*(i-o+1)),c=Math.max(0,r.reputation-20)/240+Math.max(0,r.popularity-10)/350+Math.max(0,r.loyalty-20)/400,u=Math.max(o,Math.min(i,Math.round(a*(1+c+Vr.value*.02+fn("display"))))),f=Math.max(1,u-t.length);for(let h=0;h<f;h++){const k=fo().find(P=>h===0),g=Cn.value,T=k?Ee(k.product):g[Math.floor(Math.random()*g.length)],_=1+Math.floor(Math.random()*3),I=30+5*(_-1);e.tickets.push({id:"visit-"+r.dayIndex+"-"+h,kind:"walkin",type:k?"熟客":"到店",customer:k?k.name:["附近居民","学生顾客","路过的客人","带孩子的家长","年轻客人"][Math.floor(Math.random()*5)],product:T.id,qty:_,pay:Tn(T.id)*_,clue:k?"我还是想买那款熟悉的蛋糕。":nf(T.id),due:"",blessing:"",status:"waiting",patience:I,remaining:I,customSatisfied:!0})}return r.orders=[],r.service=e,r.dayPhase="service",e.activeTicketId=((d=e.tickets[0])==null?void 0:d.id)||null,e.automationUnlocked&&r.staffAssignments.auto&&uf(),fe(),{customers:e.tickets.length}}const tf={plain:"想吃一款奶油薄一点、味道熟悉的经典蛋糕。",strawberry:"今天想买草莓酸甜口的奶油蛋糕。",chocolate:"有偏浓的可可味蛋糕吗？",taro:"想尝尝芋泥和脆脆夹心的搭配。",matcha:"有清香的茶味吗？希望甜度低一些。",mango:"想要清爽一点的芒果甜点。",tiramisu:"今天想吃咖啡味和奶酪味的蛋糕。",fig:"有没有放新鲜水果、奶油又轻一点的蛋糕？",seasonal:"想挑一款能尝到当季水果的蛋糕。",custom:"想订一份适合庆祝的精致蛋糕。",festival:"最近过节，想带一份有节日气氛的点心。",signature:"听说有桂花和栗子的秋日招牌。"};function nf(e){return tf[e]||"想挑一款店里受欢迎的蛋糕。"}function rr(){return r.shopLevel>=3&&r.staff.filter(e=>(r.partnerSkill[e]||1)>=3).length>=3}function In(e=r.service){if(!e)return[];const t=Math.max(1,Math.min(3,r.shopLevel));return e.tickets.slice(e.current,e.current+t).filter(n=>!["delivered","unavailable"].includes(n.status))}function or(e=r.service){const t=In(e);return t.find(n=>n.id===(e==null?void 0:e.activeTicketId))||t[0]||null}function sf(e){return r.dayPhase!=="service"||!r.service||!In().some(t=>t.id===e)?!1:(r.service.activeTicketId=e,fe(),!0)}function la(e){var t;for(;e.current<e.tickets.length&&["delivered","unavailable"].includes(e.tickets[e.current].status);)e.current+=1;e.activeTicketId=((t=In(e)[0])==null?void 0:t.id)||null}function $i(e){if(r.phase!=="playing"||r.dayPhase!=="prep")return!1;const t=new Set(r.staff),n={picker:null,packer:null,auto:!1,...e||{}};return n.picker&&!t.has(n.picker)&&(n.picker=null),n.packer&&!t.has(n.packer)&&(n.packer=null),n.picker&&n.picker===n.packer&&(n.packer=null),rr()||(n.auto=!1),r.staffAssignments=n,fe(),!0}function rf(e,t,n){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"現在不是营业接待阶段。"};const s=or();if(!s||s.id!==e||s.status!=="waiting")return{ok:!1,message:"这位顾客的订单已在处理。"};if(t!==s.product)return{ok:!1,message:"口味不符合顾客需求，再找找看。"};if(n!==s.qty)return{ok:!1,message:"请按顾客的数量要求找蛋糕。"};if((r.shelf[t]||0)<n)return{ok:!1,message:"展示柜里的数量不够。"};if(In().filter(i=>i.status==="searching").length>=1+(r.staffAssignments.picker?1:0))return{ok:!1,message:"找货工位正忙，先支援或处理另一位顾客。"};const o=ia(t,n);return o?(s.selected=t,s.selectedQty=n,s.packBatchId=o.id,s.findRemaining=2/lf("picker"),s.status="searching",fe(),{ok:!0,message:"在展示柜里找蛋糕。"}):{ok:!1,message:"展示柜里找不到这批蛋糕。"}}function of(e,t=null,n=null){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"現在不是营业接待阶段。"};const s=or();return!s||s.id!==e||s.status!=="found"?{ok:!1,message:"先从展示柜取出正确的蛋糕。"}:s.type==="定制"&&t!==s.due?{ok:!1,message:"装饰还没有符合预订要求。"}:s.type==="定制"&&n!==s.blessing?{ok:!1,message:"祝福语还没有符合预订要求。"}:In().filter(o=>o.status==="packing").length>=1+(r.staffAssignments.packer?1:0)?{ok:!1,message:"打包工位正忙，先支援或处理另一位顾客。"}:(s.decoration=t,s.packedBlessing=n,s.packRemaining=3.6,s.packElapsed=0,s.status="packing",fe(),{ok:!0,message:"开始打包。"})}function lf(e){const t=r.staffAssignments&&r.staffAssignments[e];return t&&r.staff.includes(t)?1+Math.max(0,(r.partnerSkill[t]||1)-1)*.15:1}function af(e=1){if(r.dayPhase!=="service"||!r.service)return;const t=Math.max(0,e);In().forEach(n=>{if(n.remaining=Math.max(0,n.remaining-t),n.status==="searching"&&(n.findRemaining=Math.max(0,n.findRemaining-t),n.findRemaining===0&&(n.status="found")),n.status==="packing"&&(n.packRemaining=Math.max(0,n.packRemaining-t),n.packElapsed=Math.min(3.6,(n.packElapsed||0)+t),n.packRemaining===0&&(n.status="ready")),n.remaining===0&&!n.unhappy){n.unhappy=!0,r.service.unhappy+=1;const s=Math.min(.1,Math.max(0,.5-(r.dayReputationLoss||0)));r.dayReputationLoss=(r.dayReputationLoss||0)+s,r.reputation=Ne(r.reputation-s),ye(n.customer+"等得有些久，耐心少了一点。","bad")}}),Math.floor(Date.now()/1e3)!==r.service.lastSavedSecond&&(r.service.lastSavedSecond=Math.floor(Date.now()/1e3),fe())}function aa(e){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"营业已结束。"};const t=r.service,n=or(t);if(!n||n.id!==e||n.status!=="ready")return{ok:!1,message:"蛋糕还没包好。"};if((r.shelf[n.product]||0)<n.qty)return{ok:!1,message:"展示柜里的数量不够。"};const s=Xd(n.product,n.qty);r.shelf[n.product]-=n.qty;const o=n.pay/n.qty,i=Math.round(s.reduce((a,c)=>a+o*c.qty*(c.quality==="perfect"?1.1:c.quality==="fine"?1.05:1),0));return r.cash+=i,r.dayRev+=i,r.monthRev+=i,r.daySold+=n.qty,r.monthSold[n.product]=(r.monthSold[n.product]||0)+n.qty,r.doneOrders+=1,n.type==="定制"&&(r.customOrders+=1),n.type==="线上"&&(r.onlineOrders+=1),n.type==="节日"&&(r.festivalOrders+=1),(n.customer==="陈奶奶"||n.customer==="张叔")&&Ad({[n.product]:n.qty}),r.loyalty=Ne(r.loyalty+.15),r.popularity=Ne(r.popularity+.02),n.status="delivered",ye("交付「"+Ee(n.product).name+"」×"+n.qty+"，收入 ¥"+i+" 已到账","good"),n.type==="定制"&&(t.customDone=(t.customDone||0)+1),r.challenge&&r.challenge.type==="new"&&r.challenge.target===n.product&&(t.challengeNewSold=(t.challengeNewSold||0)+n.qty),la(t),mo(),fe(),{ok:!0,message:n.customer+"收下了蛋糕，¥"+i+" 已到账。"}}function cf(e){const t=r.service,n=or(t);return!n||n.id!==e||r.dayPhase!=="service"?!1:(n.status="unavailable",la(t),mo(),fe(),!0)}function uf(){const e=r.service;if(e){for(;e.current<e.tickets.length;){const t=e.tickets[e.current];if(e.activeTicketId=t.id,(r.shelf[t.product]||0)<t.qty){t.status="unavailable",e.current+=1;continue}t.status="ready",t.packBatchId=(ia(t.product,t.qty)||{}).id,aa(t.id)}mo()}}function mo(){const e=r.service;if(!e||e.current<e.tickets.length)return;r.dayPhase="closing";const t=e.tickets.filter(n=>n.status==="delivered").length;if(t&&(r.reputation=Ne(r.reputation+.06),r.loyalty=Ne(r.loyalty+.1)),!r.challengeDone&&r.challenge){const n=r.daySold,s=Object.values(r.shelf).reduce((i,a)=>i+a,0),o=r.challenge.type==="stock"?s/Math.max(1,n+s)<=.1:r.challenge.type==="new"?(e.challengeNewSold||0)>=3:(e.customDone||0)>0;if(o){const i=Math.round(r.dayRev*.05);r.cash+=i,r.dayRev+=i,r.monthRev+=i,ye("今日经营挑战完成，额外收入 ¥"+i,"good")}r.challengeDone=!0,ye("今日经营挑战："+(o?"完成":"未完成"),o?"good":"normal")}ye("营业结束，完成 "+t+" / "+e.tickets.length+" 位顾客","good"),fe()}const Br={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function ca(e){if(r.phase!=="playing"||r.dayPhase!=="closing")return null;const t=Br[e]||Br.discount;let n=0,s=0;for(const a of Object.keys(r.shelf))n+=r.shelf[a]||0,s+=(r.shelf[a]||0)*Tn(a);let o=0;if(n>0){const a=t.cashRate>0?t.cashRate+fn("fridge"):0;o=Math.round(s*a),r.cash+=o,t.community&&(r.style.community+=t.community*.3,r.reputation=Ne(r.reputation+t.community*.05))}r.dayLeft=n,r.shelf={},r.batches=[];const i={day:r.day,rev:r.dayRev,sold:r.daySold,left:n,gain:o};return r.dayRev=0,r.daySold=0,r.dayMade=0,r.dayPhase="report",r.service=null,df(),fe(),i}function df(){r.day+=1,r.dayIndex+=1,r.day>ts?(r.day=1,ff()):ir()}function ir(){r.ap=r.maxAp,r.stamina=Math.min(r.maxStamina,r.stamina+70),r.plan={},r.dayPhase="prep",r.service=null,r.productionMini=null,r.productionResult=null,r.dayReputationLoss=0,r.challengeDone=!1,Zl(),r.shelf||(r.shelf={}),Qd(),fe()}function ff(){const e=Xl.value;r.monthCost+=e,r.cash-=e;let t=null;r.cash<0&&(r.usedMomHelp?(r.cash=0,r.reputation=Ne(r.reputation-2),t="这个月很难，勉强撑过去了"):(r.cash=3e3,r.usedMomHelp=!0,t="资金见底，妈妈先垫了一笔周转"),ye(t,"bad"));let n=null,s=0;Object.keys(r.monthSold).forEach(f=>{r.monthSold[f]>s&&(s=r.monthSold[f],n=f)});const o=r.monthSnap||{rep:r.reputation,unlocked:[],skill:{}},i=r.unlocked.filter(f=>o.unlocked.indexOf(f)<0),a=[];r.staff.forEach(f=>{const d=o.skill[f]||0,h=r.partnerSkill[f]||0;if(h-d>=.3){const k=Mn(f);a.push((k?k.nick||k.name:f)+" 专业 +"+(h-d).toFixed(1))}}),r.report={month:r.month,rev:r.monthRev,cost:r.monthCost,net:r.monthRev-r.monthCost,best:n?Ee(n).name:"—",bestN:s,warn:t,fresh:i.map(f=>(Ee(f)||{}).name).filter(Boolean),repDelta:Math.round((r.reputation-o.rep)*10)/10,rep:Math.round(r.reputation),grown:a,trust:Object.keys(r.partnerTrust).map(f=>{const d=Mn(f);return{name:d?d.nick||d.name:f,v:Math.round(r.partnerTrust[f]||0)}})},r.monthSnap={rep:r.reputation,unlocked:r.unlocked.slice(),skill:Object.assign({},r.partnerSkill)};const c=r.month;if(r.month+=1,r.monthRev=0,r.monthCost=0,r.monthSold={},r.shelf={},kn.forEach(f=>{f.joinMonth===r.month&&ra(f.id)}),c===29){const f=Object.values(r.partnerTrust).filter(d=>d>=70).length;r.helpers=f+(r.momBond>=70?1:0)}const u=$n.find(f=>f.to===c&&!f.final);if(u){const f=Te.stages[u.id];if(!hf(u)){r.phase="ended",r.ending={...u.short,key:u.short.key,text:""},f&&f.failId&&Gt(Te.find(f.failId)),ye("阶段目标没有达成","bad"),fe();return}r.stage=u.id+1,f&&f.pass.length&&Gt({id:"STAGE_PASS_"+u.id,title:u.name+" · 阶段达成",chapter:u.name,kind:"stage",beats:f.pass}),ye("第 "+u.id+" 阶段目标达成","good")}if(r.month>36){r.month=36,r.phase="ended";const f=vf();r.ending={...Ul[f],key:f},Gt(Te.find(pf[f])),fe();return}r.stamina=r.maxStamina,ir(),go()}const pf={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function hf(e){if(!e.goals.length)return!0;const t=e.goals.filter(n=>n.check(r));return!(t.length<e.need||e.needExpand&&!t.some(n=>n.expand))}function vf(){if(r.acquired)return"transfer";if(r.storeCount>=6)return"national";if(r.storeCount>=3)return"regional";const e=r.style,t=Object.keys(e).sort((s,o)=>e[o]-e[s])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[t]||"community"}function Gt(e){e&&(Le.events.find(t=>t.id===e.id)||Le.events.push(e))}function go(){const e=Te.events.filter(t=>!(t.kind!=="main"||r.played.includes(t.id)||t.month==null||r.month<t.month||t.test&&!Lr(t.test,r)));e.sort((t,n)=>t.month-n.month||t.order-n.order),e.forEach(Gt),Te.events.filter(t=>t.kind==="style"&&!r.played.includes(t.id)&&Lr(t.test,r)).forEach(Gt)}function mf(e){const t=Te.events.filter(s=>s.kind==="tutorial").sort((s,o)=>(s.order||0)-(o.order||0)),n=e?t.filter(s=>s.id!=="EVT_TUTORIAL_SKIP"):t.filter(s=>s.id==="EVT_TUTORIAL_SKIP");return n.forEach(Gt),r.tutorialSeen=!0,r.tutorialProgress=e?1:0,fe(),n.length}function qr(){const e=Te.events.find(t=>t.kind==="prologue");e&&!r.played.includes(e.id)&&!Le.events.some(t=>t.id===e.id)&&Gt(e),go()}function gf(e){(e.ids&&e.ids.length?e.ids:[e.id]).forEach(s=>{r.played.includes(s)||r.played.push(s)}),Ud(e.rewards||[]).length&&ye("剧情："+e.title,"story"),fe()}const yf={xiaoyu:[{trust:80,skill:4,done:"EVT_M11_YUTONG_BOOK"},{trust:80},{skill:4},{}],zhiyao:[{trust:75,skill:4,done:"EVT_M19_MAIN"},{}],kexin:[{trust:75,skill:4,done:"EVT_M21_MAIN"},{}],qinghe:[{trust:75,skill:4,done:"EVT_M25_MAIN"},{}],mom:[{bond:75},{}]};function Ci(e){const t=(Te.partnerEndings||{})[e];if(!t||!t.length)return null;const n=r.partnerTrust[e]||0,s=r.partnerSkill[e]||0,o=r.momBond||0,i=yf[e];if(!i)return n>=70?t[0]:t[1];for(const a of i)if(!(a.trust!=null&&n<a.trust)&&!(a.skill!=null&&s<a.skill)&&!(a.bond!=null&&o<a.bond)&&!(a.done&&!r.played.includes(a.done)))return t[Math.min(i.indexOf(a),t.length-1)];return t[t.length-1]}const We=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},bf={class:"vn"},_f=["src"],kf={key:0,class:"vn-cg"},Mf=["src"],xf={class:"vn-cg-cap"},$f={key:0,class:"vn-cast"},Cf=["src","alt"],wf={class:"vn-top"},Ef={class:"vn-titles"},Sf={class:"vn-chapter"},Tf={key:0,class:"vn-scene"},If={key:1,class:"vn-scene"},Af={class:"vn-tools"},Of={key:1,class:"vn-choice"},Nf={class:"vn-ask"},Rf=["onClick"],Df={class:"t"},Pf={key:0,class:"vn-note"},Lf={key:0,class:"vn-name"},Ff=["src"],Vf={key:1},jf={class:"vn-text"},Bf={key:0,class:"caret"},qf={class:"vn-foot"},Uf={key:1,class:"vn-dot"},Hf={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:t}){const n=e,s=t,o=ne([]),i=ne(0),a=ne(0),c=ne(!1);let u=0,f=0;function d(ce){for(let pe=0;pe<ce.length;pe++){const he=ce[pe].t;if(he!=="scene"&&he!=="cg"&&he!=="cgend"&&he!=="act")return pe}return Math.max(0,ce.length-1)}const h=U(()=>o.value[i.value]||null),k=U(()=>i.value>=o.value.length-1),g=U(()=>!!h.value&&h.value.t==="choice"),T=U(()=>!!h.value&&h.value.t==="say"),_=U(()=>!!h.value&&h.value.t==="nar"),I=U(()=>h.value&&h.value.text||""),P=U(()=>I.value.slice(0,a.value)),j=U(()=>a.value<I.value.length),G=U(()=>{for(let ce=i.value;ce>=0;ce--)if(o.value[ce].t==="scene")return ce;return-1}),N=U(()=>G.value>=0?o.value[G.value]:null),w=U(()=>{for(let ce=i.value;ce>=0;ce--){if(o.value[ce].t==="act")return o.value[ce].text;if(o.value[ce].t==="scene")return""}return""}),Z=U(()=>bd(n.ev)),ee=U(()=>{if(N.value){const ce=Gl(N.value.text);if(ce)return ce}return Z.value}),K=U(()=>Fs[ee.value]||Fs.shop),te=U(()=>wd(K.value)),se=U(()=>kd(ee.value)),z=U(()=>!!N.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(N.value.text)),B=U(()=>{let ce=-1;for(let pe=i.value;pe>=0;pe--){const he=o.value[pe].t;if(he==="cg"){ce=pe;break}if(he==="cgend")return""}return ce<0||ce<G.value?"":o.value[ce].key}),q=U(()=>B.value?Vs(B.value):null),R={念念:"林念",小雨:"周雨桐",知遥:"许知遥",阿鸢:"唐鸢",鸢姐:"唐鸢",星河:"叶星河",妈妈:"林暖"},E=U(()=>{const ce=Qe=>Qe&&mi[Qe]&&$d(Qe,se.value);if(T.value)return ce(h.value.who)?[h.value.who]:[];const pe=h.value&&h.value.text||"",vt=[...Object.keys(mi),"陈奶奶","张叔","李婶","赵叔","沈知夏"].map(Qe=>({name:Qe,at:pe.indexOf(Qe)})).concat(Object.entries(R).map(([Qe,y])=>({name:y,at:pe.indexOf(Qe)}))).filter(Qe=>Qe.at>=0).sort((Qe,y)=>Qe.at-y.at)[0];return vt&&ce(vt.name)?[vt.name]:[]}),x=U(()=>T.value?h.value.who:"");pt(()=>n.ev,()=>{o.value=$s(n.ev.beats||[],r);const ce=r.storyChoices[n.ev.id]||{};for(let pe=0;pe<o.value.length;pe++){const he=o.value[pe];if(he.t!=="choice"||!Number.isInteger(ce[he.node]))continue;const ze=he.options[ce[he.node]];ze&&(_i(he,ze,ce[he.node],n.ev.id),o.value.splice(pe,1,...ze.branch,...he.after||[]),pe--)}i.value=d(o.value),a.value=0,c.value=!1,S()},{immediate:!0});function $(ce){return{left:"50%",zIndex:10+ce}}function S(){if(clearInterval(u),a.value=0,g.value||!I.value){a.value=I.value.length;return}const ce=Math.max(1,Math.round(I.value.length/40));u=setInterval(()=>{a.value=Math.min(I.value.length,a.value+ce),a.value>=I.value.length&&clearInterval(u)},18)}pt(()=>i.value,S);function O(ce){let pe=ce+1;for(;pe<o.value.length;){const he=o.value[pe].t;if(he==="scene"||he==="cg"||he==="cgend"||he==="act")pe++;else break}return Math.min(pe,o.value.length-1)}function C(){if(!g.value){if(j.value){a.value=I.value.length,clearInterval(u);return}k.value||(i.value=O(i.value))}}function re(ce,pe){_i(h.value,ce,pe,n.ev.id);const he=(ce.branch||[]).concat(h.value.after||[]);o.value.splice(i.value,1,...he);let ze=Math.max(0,i.value-1);i.value=O(ze)}function $e(){for(let ce=i.value+1;ce<o.value.length;ce++)if(o.value[ce].t==="choice"){i.value=ce;return}i.value=o.value.length-1,a.value=I.value.length}function Qt(){clearInterval(u),clearInterval(f),gf(n.ev),s("done")}function Vt(){c.value=!c.value,clearInterval(f),c.value&&(f=setInterval(()=>{if(k.value){clearInterval(f),c.value=!1;return}if(g.value){clearInterval(f),c.value=!1;return}j.value?a.value=I.value.length:i.value=O(i.value)},1400))}return to(()=>{clearInterval(u),clearInterval(f)}),(ce,pe)=>(v(),m("div",bf,[l("div",{class:be(["vn-stage",{flash:z.value}])},[l("div",{class:"vn-bg",style:et({background:K.value.css})},[te.value?(v(),m("img",{key:0,src:te.value,alt:"",class:"vn-bg-img"},null,8,_f)):D("",!0),pe[0]||(pe[0]=l("div",{class:"vn-veil"},null,-1))],4),Ae(fu,{name:"cgfade"},{default:eo(()=>[q.value&&q.value.src?(v(),m("div",kf,[l("img",{src:q.value.src,alt:""},null,8,Mf),l("div",xf,p(q.value.name),1)])):D("",!0)]),_:1}),B.value?D("",!0):(v(),m("div",$f,[(v(!0),m(W,null,oe(E.value,(he,ze)=>(v(),m("div",{key:he,class:be(["vn-actor",{dim:x.value&&x.value!==he,off:!x.value}]),style:et($(ze))},[l("img",{src:b(Md)(he,se.value),alt:he},null,8,Cf)],6))),128))])),l("div",wf,[l("div",Ef,[l("div",Sf,p(e.ev.title),1),w.value?(v(),m("div",Tf,p(w.value),1)):N.value?(v(),m("div",If,p(N.value.text),1)):D("",!0)]),l("div",Af,[l("button",{type:"button",class:be({on:c.value}),onClick:$t(Vt,["stop"])},"自动",2),l("button",{type:"button",onClick:$t($e,["stop"])},"跳过")])]),g.value?(v(),m("div",Of,[l("div",Nf,p(h.value.prompt),1),(v(!0),m(W,null,oe(h.value.options,(he,ze)=>(v(),m("button",{key:ze,type:"button",class:"vn-opt",onClick:$t(vt=>re(he,ze),["stop"])},[l("span",Df,p(he.label),1)],8,Rf))),128)),h.value.note?(v(),m("p",Pf,p(h.value.note),1)):D("",!0)])):(v(),m("div",{key:2,class:be(["vn-box",{nar:_.value}]),onClick:C},[T.value?(v(),m("div",Lf,[b(Fr)(h.value.who)?(v(),m("img",{key:0,src:b(Fr)(h.value.who),alt:""},null,8,Ff)):D("",!0),l("span",null,p(h.value.who),1),h.value.emo&&h.value.emo!=="视角"?(v(),m("em",Vf,p(h.value.emo),1)):D("",!0)])):D("",!0),l("div",jf,[xt(p(P.value),1),j.value?(v(),m("span",Bf)):D("",!0)]),l("div",qf,[k.value&&!j.value?(v(),m("span",{key:0,class:"vn-end",onClick:$t(Qt,["stop"])},"结束 ←")):(v(),m("span",Uf,"▾"))])],2))],2)]))}},Kf=We(Hf,[["__scopeId","data-v-d2ecb655"]]),ns="".replace(/\/$/,""),Gf=typeof window<"u"&&(window.location.protocol==="https:"||["localhost","127.0.0.1"].includes(window.location.hostname)),Wf=/^https:\/\//i.test(ns)||/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(ns),zf=!!ns&&Gf&&Wf,Yf="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function Jf(){const e=new Uint8Array(20);return crypto.getRandomValues(e),Array.from(e,t=>Yf[t&31]).join("")}async function yo(e,t={}){if(!ns)throw new Error("云存档服务暂不可用。");const n=await fetch(ns+e,t),s=await n.json().catch(()=>({}));if(!n.ok){const o=new Error(s.message||"云存档请求失败。");throw o.status=n.status,o.data=s,o}return s}function bo(e){return{"X-Recovery-Code":e.replace(/\s+/g,"").toUpperCase()}}function Qf(e){return yo("/api/save/meta",{headers:bo(e)})}function wi(e,t,n){const s={...bo(e),"Content-Type":"application/json"};return n!=null&&(s["If-Match"]=String(n)),yo("/api/save",{method:"PUT",headers:s,body:t})}async function Zf(e,t){return yo("/api/save",{headers:{...bo(e),"If-Match":String(t)}})}const Xf=["src"],ep={key:1,viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},tp=["fill"],np=["fill"],sp=["fill"],rp=["fill"],op=["fill"],ip=["fill"],lp=["fill"],ap=["fill"],cp=["fill"],up=["fill"],dp=["fill"],fp={__name:"CakeArt",props:{id:{type:String,default:""},colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){const t=e,n=U(()=>t.id&&Je("cake-"+t.id+".webp")==="ok"?Ie("cake-"+t.id+".webp"):"");return(s,o)=>n.value?(v(),m("img",{key:0,src:n.value,alt:"",class:"cakeart photo"},null,8,Xf)):(v(),m("svg",ep,[o[0]||(o[0]=l("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),o[1]||(o[1]=l("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),l("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,tp),l("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,np),l("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,sp),l("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,rp),l("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,op),l("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,ip),l("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,lp),l("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,ap),l("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,cp),l("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,up),l("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,dp)]))}},_o=We(fp,[["__scopeId","data-v-bd8df027"]]),pp={class:"seg"},hp=["onClick"],vp={key:0,class:"card"},mp={class:"art"},gp={class:"body"},yp={class:"name"},bp={class:"chip",style:{"font-size":"10px"}},_p={key:0,class:"chip",style:{"font-size":"10px"}},kp={class:"desc"},Mp={key:0,class:"hint"},xp={key:1,class:"nums"},$p={key:1},Cp={class:"photos"},wp={class:"im"},Ep=["src","alt"],Sp={key:1,class:"small muted"},Tp={key:2,style:{"font-size":"20px",opacity:"0.3"}},Ip={class:"cp"},Ap={class:"ti"},Op={class:"cc"},Np={class:"cc"},Rp={key:2,class:"cg-gallery"},Dp=["disabled","onClick"],Pp={class:"im"},Lp=["src","alt"],Fp={key:1},Vp={class:"cp"},jp={class:"ti"},Bp={class:"cc"},qp={key:3,class:"lab-list"},Up={key:0,class:"card card-pad small muted"},Hp={class:"between"},Kp={class:"h2",style:{margin:"0"}},Gp={class:"chip",style:{"font-size":"10px"}},Wp=["src"],zp={class:"between"},Yp={class:"small muted"},Jp={key:0,class:"lab-scores"},Qp={key:1,class:"small muted"},Zp={key:4,class:"card"},Xp={style:{flex:"1 1 auto","min-width":"0"}},eh={class:"nm"},th={key:0,class:"chip sage",style:{"font-size":"10px"}},nh={key:1,class:"chip pink",style:{"font-size":"10px"}},sh={class:"nt"},rh={key:0,class:"nt"},oh={key:5,class:"customer-list"},ih={class:"between"},lh={class:"h2",style:{margin:"0"}},ah={class:"chip",style:{"font-size":"10px"}},ch={class:"cc"},uh={class:"cc"},dh={class:"small muted"},fh={key:6,class:"collection"},ph={class:"h2"},hh={class:"small muted"},vh=["aria-label"],mh=["src","alt"],gh={__name:"CodexPage",props:{initialSegment:{type:String,default:"product"}},setup(e){const n=ne(e.initialSegment),s=ne(null),o=U(()=>Ye.map(g=>({...g,flavor:(Te.codex[g.id]||{}).flavor||g.desc,hint:(Te.codex[g.id]||{}).hint||"",owned:r.unlocked.includes(g.id),current:r.unlocked.includes(g.id),collected:r.career.products.includes(g.id),lv:Math.round((r.levels[g.id]||1)*10)/10,price:Tn(g.id),sold:r.monthSold[g.id]||0}))),i=U(()=>Object.keys(fs).map(g=>({id:g,...fs[g],owned:r.photos.includes(g),current:r.photos.includes(g),collected:r.career.photos.includes(g)}))),a=U(()=>Ye.map(g=>({...g,reports:r.career.labReports[g.id]||{}})).filter(g=>g.reports.development||g.reports.improvement)),c=U(()=>Vs("osmanthus").src),u=U(()=>zl.map(g=>({id:g.id,...Vs(g.id),collected:r.career.cgs.includes(g.id)}))),f=U(()=>xn.map(g=>({...g,owned:r.cities.includes(g.id),surveyed:r.surveyed.includes(g.id)}))),d=U(()=>io.map(g=>({...g,productName:Ye.find(T=>T.id===g.product).name,visit:r.regularCustomers[g.id]}))),h=U(()=>({products:Ye.map(g=>({id:g.id,name:g.name,collected:r.career.products.includes(g.id),current:r.unlocked.includes(g.id)})),photos:Object.keys(fs).map(g=>({id:g,name:fs[g].title,collected:r.career.photos.includes(g),current:r.photos.includes(g)})),cgs:u.value.map(g=>({id:g.id,name:g.name,collected:g.collected,current:g.collected})),decorations:oo.map(g=>({id:g.id,name:g.name,collected:r.career.decorations.includes(g.id),current:r.decorations.includes(g.id)})),endings:[...$n.filter(g=>!g.final).map(g=>({id:g.short.key,name:g.short.name,collected:r.career.endings.includes(g.short.key),current:r.runEndings.includes(g.short.key)})),...Object.entries(Ul).map(([g,T])=>({id:g,name:T.name,collected:r.career.endings.includes(g),current:r.runEndings.includes(g)}))]}));function k(g){return g.current?"本轮已解锁":g.collected?"已收录 · 本轮未解锁":"尚未收录"}return(g,T)=>(v(),m("div",null,[l("div",pp,[(v(),m(W,null,oe([{k:"product",t:"产品"},{k:"customer",t:"顾客"},{k:"photo",t:"相册"},{k:"cg",t:"CG"},{k:"city",t:"门店"},{k:"collection",t:"收藏"},{k:"lab",t:"实验档案"}],_=>l("button",{key:_.k,type:"button",class:be({on:n.value===_.k}),onClick:I=>n.value=_.k},p(_.t),11,hp)),64))]),n.value==="product"?(v(),m("div",vp,[(v(!0),m(W,null,oe(o.value,_=>(v(),m("div",{key:_.id,class:be(["cake",{locked:!_.owned}])},[l("div",mp,[Ae(_o,{id:_.id,colors:_.colors},null,8,["id","colors"])]),l("div",gp,[l("div",yp,[l("span",null,p(_.name),1),l("span",bp,p(k(_)),1),_.owned?(v(),m("span",_p,"Lv"+p(_.lv),1)):D("",!0)]),l("div",kp,p(_.owned?_.flavor:"第 "+_.month+" 个月解锁"),1),_.owned&&_.hint?(v(),m("div",Mp,"配方："+p(_.hint),1)):D("",!0),_.owned?(v(),m("div",xp,[l("span",null,"¥"+p(_.price),1),l("span",null,p(_.diff)+" 点/个",1),l("span",null,"本月卖出 "+p(_.sold),1)])):D("",!0)])],2))),128))])):n.value==="photo"?(v(),m("div",$p,[l("div",Cp,[(v(!0),m(W,null,oe(i.value,_=>(v(),m("div",{key:_.id,class:"photo"},[l("div",wp,[_.collected&&_.img?(v(),m("img",{key:0,src:_.img,alt:_.title},null,8,Ep)):_.collected?(v(),m("span",Sp,"未冲印")):(v(),m("span",Tp,"?"))]),l("div",Ip,[l("div",Ap,p(_.collected?_.title:"还没发生"),1),l("div",Op,p(_.collected?_.caption:"继续经营，它会出现"),1),l("div",Np,p(k(_)),1)])]))),128))])])):n.value==="cg"?(v(),m("div",Rp,[(v(!0),m(W,null,oe(u.value,_=>(v(),m("button",{key:_.id,class:"photo cg-card",type:"button",disabled:!_.collected||!_.src,onClick:I=>s.value=_},[l("span",Pp,[_.collected&&_.src?(v(),m("img",{key:0,src:_.src,alt:_.name},null,8,Lp)):(v(),m("span",Fp,"?"))]),l("span",Vp,[l("span",jp,p(_.collected?_.name:"还没发生"),1),l("span",Bp,p(k(_)),1)])],8,Dp))),128))])):n.value==="lab"?(v(),m("div",qp,[a.value.length?D("",!0):(v(),m("div",Up,"完成一次新品上架或配方改良后，报告会保存在这里。")),(v(!0),m(W,null,oe(a.value,_=>{var I;return v(),m("article",{key:_.id,class:"card card-pad lab-report"},[l("div",Hp,[l("div",Kp,p(_.name),1),l("span",Gp,p(b(r).career.products.includes(_.id)?"配方已收录":"已研发"),1)]),((I=_.reports.development)==null?void 0:I.type)==="signature"&&c.value?(v(),m("img",{key:0,class:"lab-cg",src:c.value,alt:"桂花栗子蛋糕复原插画"},null,8,Wp)):D("",!0),(v(),m(W,null,oe(["development","improvement"],P=>l("div",{key:P,class:"lab-entry"},[_.reports[P]?(v(),m(W,{key:0},[l("div",zp,[l("strong",null,p(P==="improvement"?"配方改良":_.reports[P].type==="signature"?"外婆配方复原":_.reports[P].refined?"精制新品研发":"新品研发"),1),l("span",Yp,"第 "+p(_.reports[P].run)+" 轮 · M"+p(_.reports[P].month),1)]),P==="development"?(v(),m("div",Jp,[l("span",null,"总分 "+p(_.reports[P].score),1),(v(),m(W,null,oe([{key:"flavor",label:"风味"},{key:"texture",label:"口感"},{key:"appearance",label:"外观"},{key:"cost",label:"成本"}],j=>l("span",{key:j.key},p(j.label)+" "+p(_.reports[P].scores[j.key]),1)),64))])):(v(),m("div",Qp,"熟练度 Lv"+p(_.reports[P].levelBefore)+" → Lv"+p(_.reports[P].levelAfter),1)),(v(!0),m(W,null,oe(_.reports[P].feedback,j=>(v(),m("p",{key:j,class:"lab-note"},p(j),1))),128))],64)):D("",!0)])),64))])}),128))])):n.value==="city"?(v(),m("div",Zp,[(v(!0),m(W,null,oe(f.value,_=>(v(),m("div",{key:_.id,class:be(["city",{on:_.owned,off:!_.owned&&!_.surveyed}])},[T[2]||(T[2]=l("span",{class:"dot"},null,-1)),l("div",Xp,[l("div",eh,[xt(p(_.name)+" ",1),_.owned?(v(),m("span",th,"营业中")):_.surveyed?(v(),m("span",nh,"已考察")):D("",!0)]),l("div",sh,p(_.note),1),_.owned?D("",!0):(v(),m("div",rh," 第 "+p(_.month)+" 个月可考察 · 口碑 "+p(_.rep)+" · 开店 ¥"+p(_.cost),1))])],2))),128))])):n.value==="customer"?(v(),m("div",oh,[(v(!0),m(W,null,oe(d.value,_=>(v(),m("div",{key:_.id,class:"card card-pad customer"},[l("div",ih,[l("div",lh,p(_.name),1),l("span",ah,p(_.visit.purchases)+" 次购买",1)]),l("div",ch,"每月第 "+p(_.day)+" 个经营日 · "+p(_.productName),1),l("div",uh,p(_.preference),1),(v(!0),m(W,null,oe(_.stories,(I,P)=>(v(),m("div",{key:P,class:"customer-story"},[l("div",dh,p(P===0?"第一次购买":"第三次购买"),1),l("div",null,p(_.visit.stories.includes(P)?I:"继续经营，解锁这段回忆"),1)]))),128))]))),128))])):(v(),m("div",fh,[(v(),m(W,null,oe([{key:"products",title:"产品"},{key:"photos",title:"相册"},{key:"cgs",title:"CG"},{key:"decorations",title:"装饰"},{key:"endings",title:"结局"}],_=>l("div",{key:_.key,class:"card card-pad"},[l("div",ph,p(_.title),1),(v(!0),m(W,null,oe(h.value[_.key],I=>(v(),m("div",{key:I.id,class:"between collect-row"},[l("span",null,p(I.name),1),l("span",hh,p(k(I)),1)]))),128))])),64))])),s.value?(v(),m("div",{key:7,class:"cg-lightbox",role:"dialog","aria-modal":"true","aria-label":s.value.name,onClick:T[1]||(T[1]=$t(_=>s.value=null,["self"]))},[l("button",{class:"cg-lightbox-close",type:"button","aria-label":"关闭 CG",onClick:T[0]||(T[0]=_=>s.value=null)},"✕"),l("img",{src:s.value.src,alt:s.value.name},null,8,mh),l("div",null,p(s.value.name),1)],8,vh)):D("",!0)]))}},ua=We(gh,[["__scopeId","data-v-3f325a7e"]]),yh={key:0,class:"title-screen"},bh=["src"],_h={key:1,class:"title-frame title-menu"},kh=["src"],Mh=["disabled"],xh={class:"title-screen-reader","aria-live":"polite"},$h={key:2,class:"title-collection"},Ch={class:"title-collection-body"},wh={key:3,class:"title-panel-mask"},Eh=["aria-label"],Sh={class:"title-panel-head"},Th={class:"title-panel-body"},Ih={key:0,class:"save-group"},Ah=["disabled"],Oh=["disabled"],Nh={key:1,class:"save-group"},Rh=["disabled"],Dh=["disabled"],Ph={key:0,class:"save-note"},Lh={key:1,class:"save-feedback",role:"status"},Fh={key:2,class:"recovery-code"},Vh={key:3,class:"save-preview"},jh={key:2,class:"save-group"},Bh=["disabled"],qh={key:0,class:"save-note"},Uh={key:1,class:"save-feedback",role:"status"},Hh={key:2,class:"save-preview"},Kh={key:3,class:"save-preview"},Gh={key:0,class:"title-panel-foot"},Wh={key:4,class:"title-panel-mask confirm-mask"},zh={class:"confirm-card",role:"dialog","aria-modal":"true","aria-labelledby":"new-game-confirm"},Yh={key:5,class:"title-toast",role:"status"},Jh={key:1,class:"save-center-mask"},Qh={class:"title-panel save-center"},Zh={class:"title-panel-head"},Xh={class:"title-panel-body"},ev=["disabled"],tv=["disabled"],nv={key:0,class:"save-note"},sv={key:1,class:"save-feedback",role:"status"},rv={key:2,class:"recovery-code"},ov={key:3,class:"save-preview"},iv={key:4,class:"save-preview"},lv={class:"title-panel-foot"},av={__name:"TitleScreen",props:{inGame:{type:Boolean,default:!1}},emits:["enter","close","title","collection"],setup(e,{emit:t}){const n=e,s=t,o=ne(n.inGame?"settings":"cover"),i=ne(!1),a=ne(null),c=ne(null),u=ne(""),f=ne(null),d=ne(""),h=ne(!1),k=ne(null),g=ne(0),T=U(()=>(g.value,xr())),_=U(()=>(g.value,xr(!0))),I=zf;En(()=>{!n.inGame&&!gs()&&Cr(!1)});function P(){qr(),s("enter",{})}function j(){if(!gs())return E("没有可继续的本地自动存档。");P()}function G(){if(xr()&&!i.value){i.value=!0;return}gs()||Cr(!1),na(),r.storyChoices={},i.value=!1,P()}function N(){const O=Ut(gi());if(!O.ok)return E("没有可读取的本地手动存档。");a.value={text:gi(),preview:O.preview}}function w(){const O=Dd(),C=Ut(O);if(!C.ok)return E("没有可读取的本地自动存档。");a.value={text:O,preview:C.preview}}async function Z(O){var Qt;const C=(Qt=O.target.files)==null?void 0:Qt[0];if(O.target.value="",!C)return;const re=await new Promise((Vt,ce)=>{const pe=new FileReader;pe.onload=()=>Vt(String(pe.result||"")),pe.onerror=()=>ce(new Error("无法读取存档文件。")),pe.readAsText(C)}).catch(Vt=>(E(Vt.message),""));if(!re)return;const $e=Ut(re);if(!$e.ok)return E($e.message);a.value={text:re,preview:$e.preview}}function ee(){if(!a.value)return;const O=Pd(a.value.text);if(!O.ok)return E(O.message);a.value=null,g.value++,P()}function K(){const O=new Blob([$r()],{type:"application/json"}),C=URL.createObjectURL(O),re=document.createElement("a");re.href=C,re.download="林记烘焙存档.json",re.click(),URL.revokeObjectURL(C),E("存档文件已导出。")}function te(){const O=Rd();O&&g.value++,E(O?"本地手动存档已更新。":"浏览器无法写入本地存档。")}async function se(){var O;if(!I)return!1;if(!u.value.trim())return E("先输入云存档恢复码。"),!1;d.value="正在检查云存档…";try{return c.value=await Qf(u.value),f.value=c.value.revision,d.value="已找到云存档，请核对进度后再恢复或覆盖。",!0}catch(C){return c.value=((O=C.data)==null?void 0:O.meta)||null,C.status===404?(f.value=null,d.value="这个恢复码还没有云存档，可以创建新云档。",!1):(d.value=C.message,!1)}}async function z(){var O;if(!I)return E("云存档服务暂不可用。");if(u.value.trim()||(u.value=Jf()),!(!c.value&&await se())){if(c.value)return E("请先核对云端进度，再点击“确认覆盖云档”。");d.value="正在备份到云端…";try{const C=await wi(u.value,$r(),f.value);f.value=C.revision,c.value=null,d.value=C.created?"云存档已创建。请立即复制恢复码，换设备时需要用它读取。":"云存档已更新。"}catch(C){c.value=((O=C.data)==null?void 0:O.meta)||null,c.value&&(f.value=c.value.revision),d.value=C.status===409?"云存档已有较新进度，请先核对后确认覆盖。":C.message}}}async function B(){var C;if(!c.value)return;const O=c.value.revision;d.value="正在更新云端存档…";try{const re=await wi(u.value,$r(),O);f.value=re.revision,c.value=null,d.value="云存档已更新。"}catch(re){c.value=((C=re.data)==null?void 0:C.meta)||null,c.value&&(f.value=c.value.revision),d.value=re.status===409?"云存档在预览后已有更新，请重新核对后再确认覆盖。":re.message}}async function q(){var O;if(c.value){d.value="正在读取云存档…";try{const C=await Zf(u.value,c.value.revision),re=Ut(C.save);if(!re.ok)throw new Error("云端存档内容无效。");a.value={text:C.save,preview:re.preview},c.value=null,d.value="已将云档载入预览，请确认后恢复。"}catch(C){c.value=((O=C.data)==null?void 0:O.meta)||null,c.value&&(f.value=c.value.revision),d.value=C.status===409?"云档在预览后已有更新，请重新核对。":C.message}}}async function R(){try{await navigator.clipboard.writeText(u.value),h.value=!0}catch{h.value=!1,E("请长按恢复码并手动复制。")}}function E(O){d.value=O}function x(){gs()||Cr(!1),o.value="collection"}function $(){a.value=null,c.value=null,d.value="",n.inGame?s("close"):o.value="menu"}function S(){n.inGame?s("close"):o.value="menu"}return(O,C)=>e.inGame?(v(),m("div",Jh,[l("section",Qh,[l("header",Zh,[C[36]||(C[36]=l("h1",null,"设置与存档",-1)),l("button",{class:"title-close",type:"button","aria-label":"关闭设置",onClick:C[13]||(C[13]=re=>O.$emit("close"))},"✕")]),l("div",Xh,[C[39]||(C[39]=l("h2",null,"本地存档",-1)),C[40]||(C[40]=l("p",{class:"save-note"},"自动存档会持续更新，手动存档保存在当前浏览器。",-1)),l("button",{class:"save-action primary",type:"button",onClick:te},"保存本地手动存档"),l("button",{class:"save-action",type:"button",onClick:K},"导出存档文件"),l("button",{class:"save-action",type:"button",onClick:C[14]||(C[14]=re=>{var $e;return($e=k.value)==null?void 0:$e.click()})},"导入存档文件"),C[41]||(C[41]=l("h2",null,"云存档",-1)),C[42]||(C[42]=l("p",{class:"save-note"},"手动备份到云端。恢复码可以在另一台设备读取同一份存档。",-1)),C[43]||(C[43]=l("label",{class:"save-label",for:"recovery-code-game"},"恢复码",-1)),bs(l("input",{id:"recovery-code-game","onUpdate:modelValue":C[15]||(C[15]=re=>u.value=re),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入或创建恢复码"},null,512),[[_r,u.value]]),l("button",{class:"save-action",type:"button",disabled:!b(I),onClick:se},"检查云存档",8,ev),l("button",{class:"save-action primary",type:"button",disabled:!b(I),onClick:z},"备份到云端",8,tv),b(I)?D("",!0):(v(),m("p",nv,"云存档服务暂不可用，请稍后再试。")),d.value?(v(),m("p",sv,p(d.value),1)):D("",!0),u.value&&u.value.length===20?(v(),m("div",rv,[l("span",null,p(u.value),1),l("button",{type:"button",onClick:R},p(h.value?"已复制":"复制恢复码"),1)])):D("",!0),c.value?(v(),m("div",ov,[C[37]||(C[37]=l("strong",null,"云端存档预览",-1)),l("span",null,"M"+p(c.value.month)+" · 第 "+p(c.value.day)+" 个经营日 · ¥"+p(Number(c.value.cash||0).toLocaleString()),1),l("small",null,"云端更新于 "+p(new Date(c.value.updatedAt).toLocaleString()),1),l("button",{class:"save-action primary",type:"button",onClick:q},"确认读取这份云档")])):D("",!0),a.value?(v(),m("div",iv,[C[38]||(C[38]=l("strong",null,"存档预览",-1)),l("span",null,"M"+p(a.value.preview.month)+" · 第 "+p(a.value.preview.day)+" 个经营日 · ¥"+p(a.value.preview.cash.toLocaleString()),1),l("small",null,p(a.value.preview.savedAt?new Date(a.value.preview.savedAt).toLocaleString():"保存时间未知"),1),l("button",{class:"save-action primary",type:"button",onClick:ee},"确认读取并继续"),l("button",{class:"save-action",type:"button",onClick:C[16]||(C[16]=re=>a.value=null)},"取消")])):D("",!0),l("input",{ref_key:"fileInput",ref:k,class:"save-file",type:"file",accept:"application/json,.json",onChange:Z},null,544)]),l("footer",lv,[l("button",{class:"save-action",type:"button",onClick:C[17]||(C[17]=re=>O.$emit("close"))},"返回游戏"),l("button",{class:"save-action",type:"button",onClick:C[18]||(C[18]=re=>O.$emit("title"))},"返回标题")])])])):(v(),m("div",yh,[o.value==="cover"?(v(),m("div",{key:0,class:"title-frame",role:"button",tabindex:"0","aria-label":"点击任意位置开始游戏",onClick:C[0]||(C[0]=re=>o.value="menu"),onKeydown:[C[1]||(C[1]=li(re=>o.value="menu",["enter"])),C[2]||(C[2]=li($t(re=>o.value="menu",["prevent"]),["space"]))]},[l("img",{src:b(Ie)("cover.webp"),alt:"林记烘焙游戏封面"},null,8,bh),C[19]||(C[19]=l("div",{class:"title-prompt"},"点击任意位置开始游戏",-1))],32)):o.value==="menu"?(v(),m("div",_h,[l("img",{src:b(Ie)("cover-options.webp"),alt:"林记烘焙主菜单"},null,8,kh),l("button",{class:"title-hit title-hit-continue",type:"button",disabled:!T.value,"aria-label":"继续游戏",onClick:j},null,8,Mh),l("button",{class:"title-hit title-hit-new",type:"button","aria-label":"新的开始",onClick:G}),l("button",{class:"title-hit title-hit-load",type:"button","aria-label":"读取存档",onClick:C[3]||(C[3]=re=>{o.value="load",d.value=""})}),l("button",{class:"title-hit title-hit-settings",type:"button","aria-label":"设置",onClick:C[4]||(C[4]=re=>{o.value="settings",d.value=""})}),l("button",{class:"title-hit title-hit-collection",type:"button","aria-label":"查看收集",onClick:x}),l("div",xh,p(T.value?"有本地自动存档":"暂无本地自动存档"),1)])):o.value==="collection"?(v(),m("div",$h,[l("header",null,[C[20]||(C[20]=l("h1",null,"查看收集",-1)),l("button",{class:"title-back",type:"button",onClick:C[5]||(C[5]=re=>o.value="menu")},"返回主菜单")]),l("div",Ch,[Ae(ua,{"initial-segment":"collection"})])])):D("",!0),o.value==="settings"||o.value==="load"?(v(),m("div",wh,[l("section",{class:"title-panel","aria-label":o.value==="settings"?"设置和存档":"读取存档"},[l("header",Sh,[l("button",{class:"title-back",type:"button",onClick:$},"← 返回"),l("h1",null,p(o.value==="settings"?"设置与存档":"读取存档"),1),e.inGame?D("",!0):(v(),m("button",{key:0,class:"title-back",type:"button",onClick:S},"主菜单"))]),l("div",Th,[o.value==="load"?(v(),m("div",Ih,[C[21]||(C[21]=l("h2",null,"本地存档",-1)),C[22]||(C[22]=l("p",{class:"save-note"},"自动存档随经营进度保存，手动存档可在设置里创建。",-1)),l("button",{class:"save-action",type:"button",disabled:!T.value,onClick:w},"预览最近自动存档",8,Ah),l("button",{class:"save-action",type:"button",disabled:!_.value,onClick:N},"预览本地手动存档",8,Oh),l("button",{class:"save-action",type:"button",onClick:C[6]||(C[6]=re=>{var $e;return($e=k.value)==null?void 0:$e.click()})},"从 JSON 文件导入")])):(v(),m("div",Nh,[C[24]||(C[24]=l("h2",null,"本地存档",-1)),C[25]||(C[25]=l("p",{class:"save-note"},"自动存档会持续更新，手动存档保存在当前浏览器。",-1)),l("button",{class:"save-action primary",type:"button",onClick:te},"保存本地手动存档"),l("button",{class:"save-action",type:"button",onClick:K},"导出存档文件"),l("button",{class:"save-action",type:"button",onClick:C[7]||(C[7]=re=>{var $e;return($e=k.value)==null?void 0:$e.click()})},"导入存档文件"),C[26]||(C[26]=l("h2",null,"云存档",-1)),C[27]||(C[27]=l("p",{class:"save-note"},"手动备份到云端。恢复码可以在另一台设备读取同一份存档。",-1)),C[28]||(C[28]=l("label",{class:"save-label",for:"recovery-code"},"恢复码",-1)),bs(l("input",{id:"recovery-code","onUpdate:modelValue":C[8]||(C[8]=re=>u.value=re),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入或创建恢复码"},null,512),[[_r,u.value]]),l("button",{class:"save-action",type:"button",disabled:!b(I),onClick:se},"检查云存档",8,Rh),l("button",{class:"save-action primary",type:"button",disabled:!b(I),onClick:z},"备份到云端",8,Dh),b(I)?D("",!0):(v(),m("p",Ph,"云存档服务暂不可用，请稍后再试。")),d.value?(v(),m("p",Lh,p(d.value),1)):D("",!0),u.value&&u.value.length===20?(v(),m("div",Fh,[l("span",null,p(u.value),1),l("button",{type:"button",onClick:R},p(h.value?"已复制":"复制恢复码"),1)])):D("",!0),c.value?(v(),m("div",Vh,[C[23]||(C[23]=l("strong",null,"云端存档预览",-1)),l("span",null,"M"+p(c.value.month)+" · 第 "+p(c.value.day)+" 个经营日 · ¥"+p(Number(c.value.cash||0).toLocaleString()),1),l("small",null,"云端更新于 "+p(new Date(c.value.updatedAt).toLocaleString()),1),l("button",{class:"save-action",type:"button",onClick:q},"读取这份云档"),l("button",{class:"save-action primary",type:"button",onClick:B},"确认用当前进度覆盖云档")])):D("",!0)])),o.value==="load"?(v(),m("div",jh,[C[30]||(C[30]=l("h2",null,"云存档",-1)),C[31]||(C[31]=l("p",{class:"save-note"},"输入另一台设备保存时使用的恢复码，先查看进度，再确认读取。",-1)),C[32]||(C[32]=l("label",{class:"save-label",for:"recovery-code-load"},"恢复码",-1)),bs(l("input",{id:"recovery-code-load","onUpdate:modelValue":C[9]||(C[9]=re=>u.value=re),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入恢复码"},null,512),[[_r,u.value]]),l("button",{class:"save-action",type:"button",disabled:!b(I),onClick:se},"检查云存档",8,Bh),b(I)?D("",!0):(v(),m("p",qh,"云存档服务暂不可用，请稍后再试。")),d.value?(v(),m("p",Uh,p(d.value),1)):D("",!0),c.value?(v(),m("div",Hh,[C[29]||(C[29]=l("strong",null,"云端存档预览",-1)),l("span",null,"M"+p(c.value.month)+" · 第 "+p(c.value.day)+" 个经营日 · ¥"+p(Number(c.value.cash||0).toLocaleString()),1),l("small",null,"云端更新于 "+p(new Date(c.value.updatedAt).toLocaleString()),1),l("button",{class:"save-action primary",type:"button",onClick:q},"确认读取这份云档")])):D("",!0)])):D("",!0),l("input",{ref_key:"fileInput",ref:k,class:"save-file",type:"file",accept:"application/json,.json",onChange:Z},null,544),a.value?(v(),m("div",Kh,[C[33]||(C[33]=l("strong",null,"存档预览",-1)),l("span",null,"M"+p(a.value.preview.month)+" · 第 "+p(a.value.preview.day)+" 个经营日 · ¥"+p(a.value.preview.cash.toLocaleString()),1),l("small",null,p(a.value.preview.savedAt?new Date(a.value.preview.savedAt).toLocaleString():"保存时间未知"),1),l("button",{class:"save-action primary",type:"button",onClick:ee},"确认读取并继续"),l("button",{class:"save-action",type:"button",onClick:C[10]||(C[10]=re=>a.value=null)},"取消")])):D("",!0)]),e.inGame?(v(),m("footer",Gh,[l("button",{class:"save-action",type:"button",onClick:C[11]||(C[11]=re=>O.$emit("close"))},"返回游戏")])):D("",!0)],8,Eh)])):D("",!0),i.value?(v(),m("div",Wh,[l("section",zh,[C[34]||(C[34]=l("h2",{id:"new-game-confirm"},"开始新的经营？",-1)),C[35]||(C[35]=l("p",null,"本地自动存档会替换。手动备份和已收集内容会保留。",-1)),l("button",{class:"save-action primary",type:"button",onClick:G},"开始新的游戏"),l("button",{class:"save-action",type:"button",onClick:C[12]||(C[12]=re=>i.value=!1)},"继续考虑")])])):D("",!0),d.value&&o.value==="menu"?(v(),m("p",Yh,p(d.value),1)):D("",!0)]))}},Ei=We(av,[["__scopeId","data-v-30ad4db6"]]),cv={class:"card card-pad"},uv={class:"between"},dv={class:"small muted"},fv={class:"chip"},pv=["src"],hv={class:"counter-stats small muted"},vv={key:1,class:"small muted"},mv=["disabled"],gv={key:3,class:"small regular-visit"},yv={key:4,class:"small regular-visit"},bv={key:7,class:"btn block",style:{"margin-top":"10px"},type:"button",disabled:""},_v={key:0,class:"card card-pad section-card"},kv={class:"small muted"},Mv=["onClick"],xv={key:1,class:"active-queue card card-pad"},$v={class:"small muted"},Cv=["onClick"],wv={class:"guest-face"},Ev=["src"],Sv={key:1},Tv={class:"mini-patience"},Iv={key:2,class:"service-card"},Av={class:"card card-pad customer-card"},Ov={class:"between"},Nv={class:"h2",style:{margin:"0"}},Rv={class:"small muted"},Dv={class:"chip"},Pv={class:"customer-clue"},Lv={class:"patience"},Fv={class:"small muted between"},Vv={key:0,class:"card card-pad section-card"},jv={key:0,class:"small muted"},Bv=["onClick"],qv={class:"cake-thumb"},Uv={class:"cake-pick-copy"},Hv={key:1,class:"card card-pad section-card process-status"},Kv={class:"h2"},Gv={class:"small muted"},Wv={key:2,class:"card card-pad section-card"},zv={class:"small muted"},Yv={key:0,class:"decoration-options"},Jv={class:"small muted"},Qv=["onClick"],Zv={class:"small muted",style:{"margin-top":"7px"}},Xv=["onClick"],em=["disabled"],tm={key:3,class:"card card-pad section-card process-status"},nm={class:"h2"},sm={class:"small muted"},rm={class:"patience"},om={key:4,class:"card card-pad section-card"},im={class:"small muted"},lm={key:3,class:"card card-pad section-card"},am={class:"small muted"},cm={key:4,class:"card card-pad section-card"},um={class:"between small"},dm={key:0,class:"leftovers"},fm=["onClick"],pm={key:5,class:"small notice",role:"status"},hm={class:"card card-pad section-card small muted"},vm={__name:"ShopPage",props:{paused:{type:Boolean,default:!1}},emits:["closed","open-panel"],setup(e,{emit:t}){const n=e,s=t,o=ne(""),i=ne(""),a=ne("");let c=0;const u=U(()=>{var x;return((x=r.service)==null?void 0:x.tickets)||[]}),f=U(()=>{var x;return u.value[((x=r.service)==null?void 0:x.current)||0]||null}),d=U(()=>r.service?r.service.tickets.slice(r.service.current,r.service.current+Math.max(1,Math.min(3,r.shopLevel))).filter(x=>!["delivered","unavailable"].includes(x.status)):[]),h=U(()=>d.value.find(x=>{var $;return x.id===(($=r.service)==null?void 0:$.activeTicketId)})||d.value[0]||f.value),k=U(()=>u.value.findIndex(x=>{var $;return x.id===(($=h.value)==null?void 0:$.id)})),g=U(()=>Object.values(r.shelf||{}).reduce((x,$)=>x+$,0)),T=U(()=>Cn.value.filter(x=>(r.shelf[x.id]||0)>0)),_=U(()=>r.orders),I=U(()=>r.day),P=U(()=>fo()),j=U(()=>Lt("feedback")),G=U(()=>h.value?Math.max(0,Math.min(100,h.value.remaining/Math.max(1,h.value.patience||h.value.remaining)*100)):0);function N(){if(!g.value)return R("展示柜还是空的，先去后厨制作蛋糕。");const x=ef();x&&R(x.customers+" 位顾客陆续来到柜台。")}function w(x){if(!h.value)return;const $=rf(h.value.id,x.id,h.value.qty);R($.message)}function Z(){if(!h.value)return;const x=of(h.value.id,i.value||null,a.value||null);R(x.message)}function ee(){h.value&&(R(aa(h.value.id).message),i.value="",a.value="")}function K(){h.value&&(cf(h.value.id),R("今天这款已经售罄，订单没有成交。"))}function te(x){sf(x.id),i.value=x.decoration||"",a.value=x.packedBlessing||""}function se(x){return{waiting:"等候",searching:"找货",found:"待打包",packing:"打包中",ready:"待递交"}[x]||x}function z(x){var S;return x.customer==="陈奶奶"?"customer-chen.webp":x.customer==="张叔"?"customer-zhang.webp":x.kind==="appointment"?"customer-custom.webp":"customer-guest-"+Math.max(1,Number(((S=x.id.match(/(\d+)$/))==null?void 0:S[1])||0)%5+1)+".webp"}function B(){if(r.dayPhase!=="prep"||r.ap<j.value.ap||j.value.disabled)return R(j.value.note);R(wn("feedback",{})?"顾客反馈已记下，口碑 +1。":"现在无法收集反馈。")}function q(x){const $=ca(x);$&&s("closed",$)}function R(x){o.value=x}function E(){!n.paused&&!document.hidden&&r.dayPhase==="service"&&af(.1)}return pt(()=>r.dayPhase,x=>{x==="service"&&!c&&(c=window.setInterval(E,100)),x!=="service"&&c&&(clearInterval(c),c=0)},{immediate:!0}),pt(()=>n.paused,x=>{x&&(o.value="")}),Ys(()=>{c&&clearInterval(c)}),(x,$)=>(v(),m("div",null,[l("div",cv,[l("div",uv,[l("div",null,[$[2]||($[2]=l("div",{class:"h2",style:{margin:"0"}},"柜台营业",-1)),l("div",dv,p(b(r).month)+" 月 · 第 "+p(I.value)+"/"+p(b(ts))+" 个经营日",1)]),l("span",fv,"口碑 "+p(Math.round(b(r).reputation)),1)]),b(Je)("bg-counter.webp")==="ok"?(v(),m("img",{key:0,class:"counter-art",src:b(Ie)("bg-counter.webp"),alt:"林记烘焙营业柜台"},null,8,pv)):D("",!0),l("div",hv,[l("span",null,"待售 "+p(g.value)+" 个",1),l("span",null,"预约 "+p(_.value.length)+" 笔",1),l("span",null,"今日收入 ¥"+p(b(r).dayRev),1)]),b(r).dayPhase==="service-ready"?(v(),m("div",vv,"蛋糕已经摆进展示柜，准备好就开门接待。")):D("",!0),b(r).dayPhase==="prep"?(v(),m("button",{key:2,class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:j.value.disabled||b(r).ap<j.value.ap,onClick:B},"顾客反馈 · "+p(j.value.note),9,mv)):D("",!0),b(r).dayPhase==="prep"&&P.value.length?(v(),m("div",gv,[$[3]||($[3]=l("strong",null,"今日常客来访",-1)),(v(!0),m(W,null,oe(P.value,S=>(v(),m("span",{key:S.id},p(S.name)+" · 想买"+p(b(Ee)(S.product).name),1))),128))])):D("",!0),b(r).dayPhase==="prep"&&b(r).challenge?(v(),m("div",yv,[$[4]||($[4]=l("strong",null,"今日经营挑战",-1)),l("span",null,p(b(r).challenge.type==="stock"?"精准备货 · 剩货率不超过 10%":b(r).challenge.type==="new"?"新品主题日 · "+b(Ee)(b(r).challenge.target).name+" 销售至少 3 份":"定制专场 · 完成当天定制要求"),1)])):D("",!0),b(r).dayPhase==="service-ready"?(v(),m("button",{key:5,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:N},"开门营业")):D("",!0),b(r).dayPhase==="service-ready"?(v(),m("button",{key:6,class:"btn block mini-entry",style:{"margin-top":"8px"},type:"button",onClick:$[0]||($[0]=S=>x.$emit("open-panel","game:delivery"))},"亲自接待客人 · 小游戏")):D("",!0),b(r).dayPhase==="prep"&&!g.value?(v(),m("button",bv,"先去后厨制作蛋糕")):D("",!0)]),b(r).dayPhase==="prep"&&_.value.length?(v(),m("div",_v,[$[5]||($[5]=l("div",{class:"h2"},"今日预约",-1)),(v(!0),m(W,null,oe(_.value,S=>(v(),m("div",{key:S.id,class:"order-row"},[l("div",null,[l("strong",null,p(S.customer)+" · "+p(b(Ee)(S.product).name)+" ×"+p(S.qty),1),l("div",kv,p(S.type==="定制"?"要求："+S.due+" · 祝福："+S.blessing+" · ":"")+"预计收入 ¥"+p(S.pay),1)]),l("button",{class:"btn",type:"button",onClick:O=>b(Zd)(S.id)},p(S.taken?"已接":"接单"),9,Mv)]))),128)),$[6]||($[6]=l("p",{class:"small muted"},"先接下的预约会在营业队列中优先出现。没有接的预约不会加入今天的营业。",-1))])):D("",!0),b(r).dayPhase==="service"&&d.value.length>1?(v(),m("div",xv,[l("div",$v,"正在等候 · 最多同时接待 "+p(Math.min(3,b(r).shopLevel))+" 位",1),(v(!0),m(W,null,oe(d.value,S=>{var O;return v(),m("button",{key:S.id,class:be(["queue-guest",{chosen:S.id===((O=h.value)==null?void 0:O.id),unhappy:S.unhappy}]),type:"button",onClick:C=>te(S)},[l("span",wv,[b(Je)(z(S))==="ok"?(v(),m("img",{key:0,src:b(Ie)(z(S)),alt:""},null,8,Ev)):(v(),m("b",Sv,p(S.customer.slice(0,1)),1))]),l("span",null,[l("strong",null,p(S.customer),1),l("small",null,p(S.qty)+" 个 · "+p(se(S.status))+p(S.unhappy?" · 着急了":""),1)]),l("i",Tv,[l("b",{style:et({width:Math.max(0,S.remaining/Math.max(1,S.patience)*100)+"%"})},null,4)])],10,Cv)}),128))])):D("",!0),b(r).dayPhase==="service"&&h.value?(v(),m("div",Iv,[l("div",Av,[l("div",Ov,[l("div",null,[l("div",Nv,p(h.value.customer),1),l("div",Rv,p(h.value.type)+" · 想买 "+p(h.value.qty)+" 个",1)]),l("span",Dv,p(k.value+1)+"/"+p(u.value.length),1)]),l("p",Pv,"“"+p(h.value.clue||"我想要一份"+b(Ee)(h.value.product).name+"。")+"”",1),l("div",Lv,[l("span",{style:et({width:G.value+"%",background:G.value<33?"var(--berry)":"var(--sage)"})},null,4)]),l("div",Fv,[l("span",null,p(h.value.unhappy?"顾客有点着急，但仍会等你":"耐心倒计时"),1),l("span",null,p(Math.ceil(h.value.remaining))+" 秒",1)])]),h.value.status==="waiting"?(v(),m("div",Vv,[$[7]||($[7]=l("div",{class:"h2"},"从展示柜找蛋糕",-1)),T.value.length?D("",!0):(v(),m("div",jv,"展示柜已经售罄。")),(v(!0),m(W,null,oe(T.value,S=>(v(),m("button",{key:S.id,class:"cake-pick",type:"button",onClick:O=>w(S)},[l("span",qv,[Ae(_o,{id:S.id,colors:S.colors},null,8,["id","colors"])]),l("span",Uv,[l("strong",null,p(S.name),1),l("span",null,"柜中 "+p(b(r).shelf[S.id])+" 个",1)]),l("span",null,"找 ×"+p(h.value.qty)+" →",1)],8,Bv))),128)),T.value.some(S=>S.id===h.value.product&&b(r).shelf[S.id]>=h.value.qty)?D("",!0):(v(),m("button",{key:1,class:"btn block",type:"button",onClick:K},"告知售罄，结束这笔未成交订单"))])):h.value.status==="searching"?(v(),m("div",Hv,[l("div",Kv,p(b(r).staffAssignments.picker?"员工正在找蛋糕":"在展示柜里找蛋糕…"),1),l("p",Gv,p(Math.ceil(h.value.findRemaining||0))+" 秒后取出。",1)])):h.value.status==="found"?(v(),m("div",Wv,[$[8]||($[8]=l("div",{class:"h2"},"蛋糕找到了，开始打包",-1)),l("div",zv,p(b(Ee)(h.value.product).name)+" ×"+p(h.value.qty)+" · 包装约 "+p(2+h.value.qty)+" 秒",1),h.value.type==="定制"?(v(),m("div",Yv,[l("div",Jv,"预约装饰："+p(h.value.due),1),(v(),m(W,null,oe(["粉色小花","清爽配色","简洁裱花"],S=>l("button",{key:S,class:be(["pill",{chosen:i.value===S}]),type:"button",onClick:O=>i.value=S},p(S),11,Qv)),64)),l("div",Zv,"祝福语："+p(h.value.blessing),1),(v(),m(W,null,oe(["生日快乐","愿你每天都有好心情","把今天的甜分享给你"],S=>l("button",{key:S,class:be(["pill",{chosen:a.value===S}]),type:"button",onClick:O=>a.value=S},p(S),11,Xv)),64))])):D("",!0),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:h.value.type==="定制"&&(!i.value||!a.value),onClick:Z},"开始打包",8,em)])):h.value.status==="packing"?(v(),m("div",tm,[l("div",nm,p(b(r).staffAssignments.packer?"员工正在打包":"正在打包蛋糕…"),1),l("div",sm,"还需 "+p(Math.ceil(h.value.packRemaining||0))+" 秒",1),l("div",rm,[l("span",{class:"pack-progress",style:et({width:100-h.value.packRemaining/(2+h.value.qty)*100+"%"})},null,4)])])):h.value.status==="ready"?(v(),m("div",om,[$[9]||($[9]=l("div",{class:"h2"},"包装好了",-1)),l("div",im,"顾客还在等，递给 "+p(h.value.customer)+"。",1),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:ee},"递交蛋糕 · 收款")])):D("",!0)])):D("",!0),b(r).dayPhase==="service"&&h.value&&b(rr)()?(v(),m("div",lm,[$[10]||($[10]=l("div",{class:"h2"},"员工营业协作",-1)),l("div",am,p(b(r).staffAssignments.auto?"员工自动完成找蛋糕、打包和交付。":"员工可分担找蛋糕和打包；你来负责递交。"),1)])):D("",!0),b(r).dayPhase==="closing"?(v(),m("div",cm,[$[13]||($[13]=l("div",{class:"h2"},"今日接待完成",-1)),l("div",um,[$[11]||($[11]=l("span",{class:"muted"},"完成订单",-1)),l("span",null,p(b(r).daySold)+" 个蛋糕 · ¥"+p(b(r).dayRev)+" 已到账",1)]),g.value?(v(),m("div",dm,[$[12]||($[12]=l("div",{class:"small muted"},"剩下的蛋糕怎么处理？",-1)),(v(!0),m(W,null,oe(b(Br),(S,O)=>(v(),m("button",{key:O,class:"leftover-button",type:"button",onClick:C=>q(O)},[xt(p(S.label),1),l("span",null,p(S.cashRate?" · 回收部分成本":S.community?" · 社区好感 +"+S.community:""),1)],8,fm))),128))])):(v(),m("button",{key:1,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:$[1]||($[1]=S=>q("waste"))},"打烊，进入下一经营日"))])):D("",!0),o.value?(v(),m("p",pm,p(o.value),1)):D("",!0),l("div",hm,[l("div",null,"本月固定成本 ¥"+p(b(Xl)),1),$[14]||($[14]=l("div",{style:{"margin-top":"4px"}},"顾客超时只影响口碑，不影响成交收入；切到其他页面或后台时倒计时暂停。",-1))])]))}},mm=We(vm,[["__scopeId","data-v-d3adb36b"]]),gm={class:"card card-pad"},ym={class:"between"},bm={class:"between small muted",style:{"margin-top":"7px"}},_m=["disabled"],km={key:0,class:"challenge-note small"},Mm={key:0,class:"card card-pad compact-card"},xm={class:"product-list"},$m={class:"product-art"},Cm={class:"product-copy"},wm={class:"quantity"},Em=["disabled","onClick"],Sm=["disabled","onClick"],Tm={class:"card card-pad compact-card"},Im={class:"between"},Am={class:"small muted"},Om={key:0,class:"small muted",style:{"margin-top":"5px"}},Nm={key:1,class:"card card-pad minigame"},Rm={class:"between"},Dm={class:"h2",style:{margin:"0"}},Pm={class:"chip"},Lm={class:"small muted"},Fm={class:"gauge"},Vm={class:"pattern"},jm={class:"target-buttons"},Bm=["onClick"],qm={class:"pattern"},Um={class:"target-buttons"},Hm=["onClick"],Km={key:2,class:"card card-pad compact-card"},Gm={class:"small muted"},Wm=["disabled"],zm=["disabled"],Ym={key:6,class:"card card-pad compact-card"},Jm={key:0,class:"small muted"},Qm={key:7,class:"small muted",role:"status"},Zm={__name:"KitchenPage",props:{paused:{type:Boolean,default:!1}},setup(e){const t=e,n=ne(""),s=ne(0),o=ne(0),i=ne([]);let a=0;const c=U(()=>ea()),u=U(()=>Sd()),f=U(()=>co()),d=U(()=>Cn.value.map(q=>({...q,qty:r.plan[q.id]||0,price:Tn(q.id)}))),h=U(()=>r.orders.filter(q=>q.taken)),k=U(()=>r.productionMini),g=U(()=>{var q,R;return((q=r.productionResult)==null?void 0:q.quality)==="perfect"?"完美 · 售价 +10%":((R=r.productionResult)==null?void 0:R.quality)==="fine"?"精致 · 售价 +5%":"普通品质"}),T=U(()=>{var R;return[[0,1,2],[1,2,0],[2,0,1]][((R=k.value)==null?void 0:R.pattern)||0]}),_=U(()=>Object.entries(u.value).map(([q,R])=>{var E;return{id:q,name:((E=gn.find(x=>x.id===q))==null?void 0:E.name)||q,qty:R}})),I=U(()=>r.challenge?r.challenge.type==="stock"?"精准备货：预约优先，剩货率不超过 10%。":r.challenge.type==="new"?"新品主题日："+Ee(r.challenge.target).name+" 至少交付 3 个。":"定制专场：完成当天定制要求。":"");function P(q,R){Yd(q,(r.plan[q]||0)+R)}function j(){const q={};h.value.forEach($=>{q[$.product]=(q[$.product]||0)+$.qty});const R=Math.max(3,Math.min(12,Math.round({1:4,2:6,3:8,4:10}[r.shopLevel]+r.reputation/35)));let E=Math.max(0,R-Object.values(q).reduce(($,S)=>$+S,0));const x=Cn.value.slice().sort(($,S)=>(r.monthSold[S.id]||0)+S.demand-((r.monthSold[$.id]||0)+$.demand));for(let $=0;$<E&&x.length;$++){const S=x[$%Math.min(3,x.length)].id;q[S]=Math.min(12,(q[S]||0)+1)}r.plan=q,fe()}function G(){var q;if(c.value>cn.value)return w("今天的产能不够，先减少计划数量。");if(Object.keys(f.value).length)return w("有原料缺货，请先去食材铺采购。");if(!r.plan||!Object.keys(r.plan).length)return w("先给今天排一些蛋糕。");Jd()&&(o.value=0,s.value=0,i.value=[],w("今天的主打工序抽到了「"+N((q=k.value)==null?void 0:q.type)+"」。"))}function N(q){return{mix:"搅拌",oven:"出炉火候",piping:"裱花",fruit:"摆果"}[q]||"制作"}function w(q){n.value=q}function Z(){!t.paused&&!document.hidden&&k.value&&["mix","oven"].includes(k.value.type)&&(s.value=(s.value+2.4)%100)}function ee(){var E;const q=((E=k.value)==null?void 0:E.window)||66,R=Math.abs(s.value-q);se(Math.max(0,100-Math.round(R*3)))}function K(q){if(q!==T.value[o.value])return se(55);o.value+=1,o.value>=T.value.length&&se(100)}function te(q){const R=[...i.value,q];i.value=R,R.length===3&&se(R.every((E,x)=>E===T.value[x])?100:60)}function se(q){const R=xi(q,!1);w(R.msg||R.message||g.value)}function z(){const q=xi(0,!0);w(q.msg||q.message||"采用普通品质出炉。")}function B(){r.plan={},fe()}return pt(k,q=>{q&&!a&&(a=window.setInterval(Z,80)),!q&&a&&(clearInterval(a),a=0)},{immediate:!0}),En(()=>{k.value&&!a&&(a=window.setInterval(Z,80))}),Ys(()=>{a&&clearInterval(a)}),(q,R)=>(v(),m("div",null,[l("div",gm,[l("div",ym,[R[1]||(R[1]=l("div",{class:"h2",style:{margin:"0"}},"今日生产计划",-1)),l("span",{class:be(["chip",c.value>b(cn)?"pink":"sage"])},"产能 "+p(c.value)+"/"+p(b(cn)),3)]),l("div",bm,[l("span",null,"库存 "+p(b(nr))+"/"+p(b(r).warehouseCapacity)+" 份",1),l("span",null,"体力 "+p(b(r).stamina),1)]),l("button",{class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:b(r).dayPhase!=="prep",onClick:j},"智能备货 · 先满足已接预约",8,_m),b(r).dayPhase==="prep"&&I.value?(v(),m("div",km,[R[2]||(R[2]=l("strong",null,"今日经营挑战",-1)),l("span",null,p(I.value)+"成功后营业收入 +5%。",1)])):D("",!0)]),h.value.length?(v(),m("div",Mm,[R[3]||(R[3]=l("strong",null,"已接预约",-1)),(v(!0),m(W,null,oe(h.value,E=>(v(),m("div",{key:E.id,class:"small muted"},p(b(Ee)(E.product).name)+" ×"+p(E.qty)+p(E.due?" · 装饰："+E.due:""),1))),128))])):D("",!0),l("div",xm,[(v(!0),m(W,null,oe(d.value,E=>(v(),m("div",{key:E.id,class:"product-row"},[l("div",$m,[Ae(_o,{id:E.id,colors:E.colors},null,8,["id","colors"])]),l("div",Cm,[l("strong",null,p(E.name),1),l("span",null,"¥"+p(E.price)+" · 产能 "+p(E.diff),1),l("span",null,"熟练度 Lv"+p(Math.round((b(r).levels[E.id]||1)*10)/10),1)]),l("div",wm,[l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:x=>P(E.id,-1)},"−",8,Em),l("span",null,p(E.qty),1),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:x=>P(E.id,1)},"+",8,Sm)])]))),128))]),l("div",Tm,[l("div",Im,[R[4]||(R[4]=l("strong",null,"材料预算",-1)),l("span",Am,"预计 "+p(Object.values(b(r).plan).reduce((E,x)=>E+x,0))+" 个蛋糕",1)]),_.value.length?D("",!0):(v(),m("div",Om,"选择产品和数量后会列出配方用料。")),(v(!0),m(W,null,oe(_.value,E=>(v(),m("div",{key:E.id,class:"between small",style:{"margin-top":"5px"}},[l("span",null,p(E.name),1),l("span",{class:be({missing:f.value[E.id]})},p(E.qty)+" 份 · 库存 "+p(b(r).pantry[E.id]||0)+p(f.value[E.id]?" · 缺 "+Math.ceil(f.value[E.id]):""),3)]))),128))]),k.value?(v(),m("div",Nm,[l("div",Rm,[l("div",Dm,"主打工序 · "+p(N(k.value.type)),1),l("span",Pm,p(b(Ee)(k.value.product).name),1)]),k.value.type==="mix"||k.value.type==="oven"?(v(),m(W,{key:0},[l("p",Lm,p(k.value.type==="mix"?"指针进入绿色区间时停下搅拌。":"在最佳火候区间及时出炉。"),1),l("div",Fm,[l("span",{class:"target",style:et({left:k.value.window-8+"%"})},null,4),l("i",{style:et({left:s.value+"%"})},null,4)]),l("button",{class:"btn primary block",type:"button",onClick:ee},"停下")],64)):k.value.type==="piping"?(v(),m(W,{key:1},[R[5]||(R[5]=l("p",{class:"small muted"},"按提示顺序点亮三处裱花位置。",-1)),l("div",Vm,p(T.value.map(E=>["花心","左侧","右侧"][E]).join(" → ")),1),l("div",jm,[(v(),m(W,null,oe(["花心","左侧","右侧"],(E,x)=>l("button",{key:E,class:"btn",type:"button",onClick:$=>K(x)},p(E),9,Bm)),64))])],64)):(v(),m(W,{key:2},[R[6]||(R[6]=l("p",{class:"small muted"},"按提示顺序摆放三种鲜果。",-1)),l("div",qm,p(T.value.map(E=>["草莓","蓝莓","薄荷"][E]).join(" → ")),1),l("div",Um,[(v(),m(W,null,oe(["草莓","蓝莓","薄荷"],(E,x)=>l("button",{key:E,class:"btn",type:"button",onClick:$=>te(x)},p(E),9,Hm)),64))])],64)),l("button",{class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:z},"跳过 · 普通品质保底")])):b(r).productionResult?(v(),m("div",Km,[l("strong",null,"本批品质："+p(g.value),1),l("div",Gm,p(b(r).productionResult.quality==="normal"?"基础品质，不影响批量成品。":"效果已记在主打蛋糕批次中。"),1)])):D("",!0),b(r).dayPhase==="prep"&&!k.value&&!b(r).productionResult?(v(),m("button",{key:3,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:!Object.keys(b(r).plan).length,onClick:G},"开始制作 · 随机关键工序",8,Wm)):D("",!0),b(r).dayPhase==="prep"&&b(r).productionResult?(v(),m("button",{key:4,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:c.value>b(cn)||Object.keys(f.value).length>0,onClick:R[0]||(R[0]=(...E)=>b(jr)&&b(jr)(...E))},"完成今日批量制作",8,zm)):D("",!0),b(r).dayPhase==="prep"&&Object.keys(b(r).plan).length?(v(),m("button",{key:5,class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:B},"清空计划")):D("",!0),b(r).dayPhase==="service-ready"||b(r).dayPhase==="service"||b(r).dayPhase==="closing"?(v(),m("div",Ym,[R[7]||(R[7]=l("div",{class:"h2"},"今日成品",-1)),(v(!0),m(W,null,oe(Object.keys(b(r).shelf).filter(E=>b(r).shelf[E]>0),E=>(v(),m("div",{key:E,class:"between small"},[l("span",null,p(b(Ee)(E).name),1),l("span",null,p(b(r).shelf[E])+" 个",1)]))),128)),b(r).dayPhase==="service-ready"?(v(),m("div",Jm,"前往柜台开门营业。")):D("",!0)])):D("",!0),n.value?(v(),m("p",Qm,p(n.value),1)):D("",!0),R[8]||(R[8]=l("div",{class:"small muted tips"},"设备、妈妈和伙伴提供产能；超出免费产能的部分才消耗体力。主打蛋糕小游戏只作用于这款产品的当日批次。",-1))]))}},Xm=We(Zm,[["__scopeId","data-v-79ec2286"]]),e1={class:"card card-pad"},t1={class:"between"},n1={class:"chip"},s1={class:"card card-pad team-card"},r1={class:"between"},o1={class:"small muted"},i1={key:0,class:"avatar real-avatar"},l1=["src","alt"],a1={key:1},c1={key:1,class:"avatar locked-avatar"},u1={class:"partner-info"},d1={class:"partner-title"},f1={class:"chip"},p1={class:"small muted"},h1={class:"partner-actions"},v1=["disabled","onClick"],m1=["disabled","onClick"],g1={class:"card card-pad team-card"},y1={class:"assignment"},b1=["value","disabled"],_1=["value"],k1={class:"assignment"},M1=["value","disabled"],x1=["value","disabled"],$1={key:0,class:"auto-toggle"},C1=["checked","disabled"],w1={key:1,class:"locked-auto"},E1={key:2,class:"small muted",role:"status"},S1={__name:"PartnersPage",setup(e){const t=ne(""),n=U(()=>kn.map(f=>{const d=r.staff.includes(f.id);return d?{id:f.id,joined:d,name:f.name,nick:f.nick,role:f.role,skillName:f.skillName,skill:r.partnerSkill[f.id]||1,trust:Math.round(r.partnerTrust[f.id]||0),avatar:Fr(f.name)}:{id:f.id,joined:d}})),s=U(()=>oa()),o=U(()=>rr()),i=U(()=>r.dayPhase==="prep");function a(f,d){$i({...r.staffAssignments,[f]:d||null}),t.value="营业分工已保存。"}function c(f){o.value&&($i({...r.staffAssignments,auto:f.target.checked}),t.value=f.target.checked?"已启用全自动接待。":"已切回手动接待。")}function u(f,d){const h=Lt(f);if(!i.value||h.disabled||r.ap<h.ap||h.cost&&r.cash<h.cost){t.value=i.value?h.note:"请在营业前安排员工交流与培训。";return}const k=wn(f,{partner:d});t.value=k?f==="talk"?"和伙伴聊了一会儿。":"培训完成，专业能力提升。":"暂时无法完成。"}return(f,d)=>(v(),m("div",null,[l("div",e1,[l("div",t1,[d[2]||(d[2]=l("div",null,[l("div",{class:"h2",style:{margin:"0"}},"林暖"),l("div",{class:"small muted"},"母亲 · 林记上一任经营者")],-1)),l("span",n1,"家庭默契 "+p(Math.round(b(r).momBond)),1)]),d[3]||(d[3]=l("p",{class:"small muted",style:{margin:"7px 0 0"}},"她每天提供 60 点免费产能。和妈妈的互动在店内进行。",-1))]),l("div",s1,[l("div",r1,[d[4]||(d[4]=l("div",{class:"h2",style:{margin:"0"}},"伙伴档案",-1)),l("span",o1,"已加入 "+p(s.value.length)+" / "+p(b(kn).length),1)]),(v(!0),m(W,null,oe(n.value,h=>(v(),m("article",{key:h.id,class:"partner-row"},[h.joined?(v(),m("div",i1,[h.avatar?(v(),m("img",{key:0,src:h.avatar,alt:h.name},null,8,l1)):(v(),m("span",a1,p(h.name.slice(0,1)),1))])):(v(),m("div",c1,"?")),l("div",u1,[h.joined?(v(),m(W,{key:0},[l("div",d1,[l("strong",null,p(h.name),1),l("span",f1,p(h.role),1)]),l("div",p1,"信赖 "+p(h.trust)+" · "+p(h.skillName)+"专业 Lv"+p(h.skill),1),l("div",h1,[l("button",{class:"btn",type:"button",disabled:!i.value||b(r).ap<1,onClick:k=>u("talk",h.id)},"员工交流 · 1 行动力",8,v1),l("button",{class:"btn",type:"button",disabled:!i.value||b(r).ap<2||b(r).cash<400||h.skill>=5,onClick:k=>u("train",h.id)},"培训 · 2 行动力 / ¥400",8,m1)])],64)):(v(),m(W,{key:1},[d[5]||(d[5]=l("strong",null,"未解锁",-1)),d[6]||(d[6]=l("div",{class:"small muted"},"继续经营，等待伙伴加入林记。",-1))],64))])]))),128))]),l("div",g1,[d[13]||(d[13]=l("div",{class:"h2"},"营业分工",-1)),d[14]||(d[14]=l("p",{class:"small muted"},"伙伴可以分担找蛋糕和打包。专业等级越高，负责工位的处理时间越短。",-1)),l("label",y1,[d[8]||(d[8]=l("span",null,"找蛋糕",-1)),l("select",{value:b(r).staffAssignments.picker||"",disabled:!i.value,onChange:d[0]||(d[0]=h=>a("picker",h.target.value))},[d[7]||(d[7]=l("option",{value:""},"自己负责",-1)),(v(!0),m(W,null,oe(s.value,h=>(v(),m("option",{key:h.id,value:h.id},p(h.nick)+" · Lv"+p(b(r).partnerSkill[h.id]||1),9,_1))),128))],40,b1)]),l("label",k1,[d[10]||(d[10]=l("span",null,"打包",-1)),l("select",{value:b(r).staffAssignments.packer||"",disabled:!i.value,onChange:d[1]||(d[1]=h=>a("packer",h.target.value))},[d[9]||(d[9]=l("option",{value:""},"自己负责",-1)),(v(!0),m(W,null,oe(s.value,h=>(v(),m("option",{key:h.id,value:h.id,disabled:h.id===b(r).staffAssignments.picker},p(h.nick)+" · Lv"+p(b(r).partnerSkill[h.id]||1),9,x1))),128))],40,M1)]),o.value?(v(),m("label",$1,[l("input",{type:"checkbox",checked:b(r).staffAssignments.auto,disabled:!i.value,onChange:c},null,40,C1),d[11]||(d[11]=l("span",null,[l("strong",null,"全自动接待"),l("small",null,"员工完成找蛋糕、打包和递交；每天可挑战一项经营目标。")],-1))])):(v(),m("div",w1,[...d[12]||(d[12]=[l("span",{class:"locked-avatar"},"?",-1),l("span",{class:"small muted"},"全自动接待：店铺 Lv3，并有 3 位专业 Lv3 伙伴后开放。",-1)])])),t.value?(v(),m("p",E1,p(t.value),1)):D("",!0)])]))}},T1=We(S1,[["__scopeId","data-v-5ddd734b"]]),I1={class:"lab"},A1={class:"lab-head"},O1={class:"lab-sub"},N1={key:0,class:"card card-pad result"},R1={class:"result-title"},D1={class:"small muted"},P1=["src"],L1={class:"scores"},F1={class:"feedback"},V1={class:"result-actions"},j1=["disabled"],B1={key:1,class:"small muted"},q1=["disabled"],U1={key:0,class:"product-list"},H1=["onClick"],K1={class:"product-info"},G1={class:"small muted"},W1={key:1,class:"card card-pad small muted"},z1=["disabled","onClick"],Y1={class:"product-info"},J1={class:"small muted"},Q1={class:"chip"},Z1={key:2,class:"report-list"},X1={class:"small muted"},eg={key:0,class:"small muted"},tg={key:3,class:"card card-pad small muted"},ng={key:2,class:"card card-pad form"},sg={class:"small muted"},rg={class:"hint"},og={class:"field"},ig=["onClick"],lg={class:"field"},ag=["onClick"],cg={class:"small muted"},ug={class:"field"},dg={class:"field-title"},fg=["onClick"],pg={class:"field"},hg=["onClick"],vg={class:"field"},mg=["onClick"],gg=["disabled"],yg={class:"small muted"},bg={key:3,class:"card card-pad form"},_g={class:"field"},kg=["onClick"],Mg={class:"field"},xg=["onClick"],$g={class:"field"},Cg=["onClick"],wg={class:"field"},Eg=["onClick"],Sg=["disabled"],Tg={class:"small muted"},Ig={key:4,class:"card card-pad form"},Ag={class:"small muted"},Og=["value"],Ng={key:0,class:"small feedback-line"},Rg=["disabled"],Dg={class:"small muted"},Pg={key:5,class:"small notice"},Lg={__name:"ResearchLab",setup(e){const t=ne("home"),n=ne(""),s=ne([]),o=ne(-1),i=ne(-1),a=ne(-1),c=ne(1),u=ne(""),f=ne(-1),d=ne(""),h=ne(""),k=ne(!1),g=U(()=>Ye.filter($=>$.month>0)),T=U(()=>Ye.filter($=>r.unlocked.includes($.id)&&(r.levels[$.id]||1)<5)),_=U(()=>Ye.map($=>({product:$,reports:r.career.labReports[$.id]||{}})).filter($=>$.reports.development||$.reports.improvement)),I=U(()=>ao[n.value]),P=U(()=>{var $;return(($=r.labPending)==null?void 0:$.type)==="signature"?Vs("osmanthus").src:""}),j=U(()=>s.value.length>0&&o.value>=0&&i.value>=0&&a.value>=0),G=U(()=>s.value.length>0&&o.value>=0&&i.value>=0&&a.value>=0),N=U(()=>{var $;return f.value===(($=Cs[u.value])==null?void 0:$.correct)?2:1});function w($){h.value=$}function Z($){if(!r.labPending){if($.id==="signature"){if(r.month<26)return w("M26 起开放外婆配方复原。");t.value="signature"}else n.value=$.id,t.value="develop";s.value=[],o.value=-1,i.value=-1,a.value=-1,c.value=1,h.value=""}}function ee($){s.value=s.value.includes($)?s.value.filter(S=>S!==$):[...s.value,$]}function K(){const $=yi({productId:n.value,ingredients:s.value,direction:o.value,ratio:i.value,process:a.value,decoration:c.value});$.ok?w("试吃完成：本次样品已计入原料消耗。"):w($.message)}function te(){const $=yi({productId:"signature",type:"signature",ingredients:s.value,sugar:o.value,filling:i.value,garnish:a.value});$.ok?w("复原试吃完成：本次样品已计入原料消耗。"):w($.message)}function se(){const $=Ld();w($.message),$.ok&&(t.value="home")}function z(){const $=r.labPending;$&&(bi(),n.value=$.productId,s.value=$.ingredients.slice(),$.type==="signature"?(o.value=$.sugar,i.value=$.filling,a.value=$.garnish,t.value="signature"):(o.value=$.direction,i.value=$.ratio,a.value=$.process,c.value=$.decoration,t.value="develop"),w("保留了本次试做思路，修改后重试会再消耗一份样品。"))}function B(){bi(),t.value="home",w("试吃结果已收起，已消耗的样品不返还。")}function q($){r.labPending||(u.value=$.id,f.value=-1,d.value="",h.value="",t.value="improve")}function R(){if(k.value||f.value<0)return;k.value=!0;const $=Fd(u.value,f.value);k.value=!1,d.value=$.feedback||"",$.ok?(w($.message),t.value="home"):$.retry&&(f.value=-1)}function E(){t.value="home",h.value=""}function x($){return $.type==="signature"?"外婆配方复原":$.type==="improvement"?`配方改良 · Lv${$.levelAfter}`:`${$.refined?"精制上架":"新品上架"} · ${$.score} 分`}return($,S)=>(v(),m("section",I1,[l("header",A1,[l("div",null,[S[1]||(S[1]=l("div",{class:"lab-title"},"林记烘焙实验室",-1)),l("div",O1,"行动力 "+p(b(r).ap)+"/"+p(b(r).maxAp)+" · 分类原料 "+p(b(nr))+" 份 · 试做消耗所选蛋糕配方用料的四分之一",1)]),t.value!=="home"&&!b(r).labPending?(v(),m("button",{key:0,class:"back",type:"button",onClick:E},"返回")):D("",!0)]),b(r).labPending?(v(),m("div",N1,[l("div",R1,p(b(r).labPending.passed?"试吃合格":"还需要调整"),1),l("div",D1,p(b(Ee)(b(r).labPending.productId).name)+" · 本次 "+p(b(r).labPending.score)+" 分",1),P.value?(v(),m("img",{key:0,class:"signature-cg",src:P.value,alt:"桂花栗子蛋糕复原插画"},null,8,P1)):D("",!0),l("div",L1,[(v(),m(W,null,oe([{key:"flavor",name:"风味"},{key:"texture",name:"口感"},{key:"appearance",name:"外观"},{key:"cost",name:"成本控制"}],O=>l("div",{key:O.key,class:"score"},[l("span",null,p(O.name),1),l("strong",null,p(b(r).labPending.scores[O.key]),1)])),64))]),l("ul",F1,[(v(!0),m(W,null,oe(b(r).labPending.feedback,O=>(v(),m("li",{key:O},p(O),1))),128))]),l("div",V1,[b(r).labPending.passed?(v(),m("button",{key:0,class:"btn primary block",type:"button",disabled:b(r).ap<1||b(r).phase!=="playing",onClick:se},p(b(r).labPending.type==="signature"?"完成复原":"正式上架")+" · 再消耗 1 点行动力 ",9,j1)):D("",!0),b(r).labPending.passed&&b(r).ap<1?(v(),m("div",B1,"行动力不足，结果已保存，明天可以继续。")):D("",!0),l("button",{class:"btn block",type:"button",disabled:b(r).phase!=="playing",onClick:z},"按反馈调整并重试 · 再用 1 份样品",8,q1),l("button",{class:"text-button",type:"button",onClick:B},"收起结果")])])):t.value==="home"?(v(),m(W,{key:1},[S[3]||(S[3]=l("div",{class:"card card-pad intro"},[l("strong",null,"从配方到上架"),l("div",{class:"small muted"},"选配方、做试验、看试吃反馈。合格品可以生产，精制品以更高熟练度起步。")],-1)),S[4]||(S[4]=l("div",{class:"section-title"},"配方改良",-1)),T.value.length?(v(),m("div",U1,[(v(!0),m(W,null,oe(T.value,O=>(v(),m("button",{key:O.id,class:"card product-row",type:"button",onClick:C=>q(O)},[l("span",K1,[l("strong",null,p(O.name),1),l("span",G1,"当前 Lv"+p(b(r).levels[O.id]||1),1)]),S[2]||(S[2]=l("span",{class:"chip"},"诊断问题",-1))],8,H1))),128))])):(v(),m("div",W1,"目前没有可改良的产品。")),S[5]||(S[5]=l("div",{class:"section-title"},"新品研发",-1)),(v(!0),m(W,null,oe(g.value,O=>(v(),m("button",{key:O.id,class:"card product-row",type:"button",disabled:O.month>b(r).month||b(r).unlocked.includes(O.id),onClick:C=>Z(O)},[l("span",Y1,[l("strong",null,p(O.name),1),l("span",J1,p(O.id==="signature"?"M26 · 外婆旧配方复原":`M${O.month} 起 · ${O.desc}`),1)]),l("span",Q1,p(b(r).unlocked.includes(O.id)?"已上架":O.month>b(r).month?`M${O.month}开放`:O.id==="signature"?"复原":"开始实验"),1)],8,z1))),128)),S[6]||(S[6]=l("div",{class:"section-title"},"实验档案",-1)),_.value.length?(v(),m("div",Z1,[(v(!0),m(W,null,oe(_.value,O=>(v(),m("div",{key:O.product.id,class:"card card-pad report-row"},[l("strong",null,p(O.product.name),1),(v(),m(W,null,oe(["development","improvement"],C=>{var re;return l("div",{key:C,class:"report-entry"},[O.reports[C]?(v(),m(W,{key:0},[l("span",null,p(x(O.reports[C])),1),l("span",X1,"第 "+p(O.reports[C].run)+" 轮 · M"+p(O.reports[C].month),1),(re=O.reports[C].feedback)!=null&&re.length?(v(),m("div",eg,p(O.reports[C].feedback.join(" ")),1)):D("",!0)],64)):D("",!0)])}),64))]))),128))])):(v(),m("div",tg,"完成实验后，报告会保存到这里并跨周目保留。"))],64)):t.value==="develop"&&I.value?(v(),m("div",ng,[l("h2",null,p(b(Ee)(n.value).name)+" · 新品设计",1),l("p",sg,p(I.value.theme)+" "+p(I.value.focus),1),l("div",rg,"图鉴线索："+p((b(Te).codex[n.value]||{}).hint||b(Ee)(n.value).desc),1),l("div",og,[S[7]||(S[7]=l("div",{class:"field-title"},"风味方向",-1)),(v(!0),m(W,null,oe(b(ud),(O,C)=>(v(),m("button",{key:O,type:"button",class:be(["choice",{chosen:o.value===C}]),onClick:re=>o.value=C},p(O),11,ig))),128))]),l("div",lg,[S[8]||(S[8]=l("div",{class:"field-title"},[xt("核心食材 "),l("span",{class:"small muted"},"可多选")],-1)),(v(!0),m(W,null,oe(b(pi)(n.value),O=>(v(),m("button",{key:O,type:"button",class:be(["choice",{chosen:s.value.includes(O)}]),onClick:C=>ee(O)},p(O),11,ag))),128)),l("div",cg,"配方提示："+p((b(Te).codex[n.value]||{}).hint||""),1)]),l("div",ug,[l("div",dg,p(I.value.ratioLabel),1),(v(!0),m(W,null,oe(b(dd),(O,C)=>(v(),m("button",{key:O,type:"button",class:be(["choice",{chosen:i.value===C}]),onClick:re=>i.value=C},p(O),11,fg))),128))]),l("div",pg,[S[9]||(S[9]=l("div",{class:"field-title"},"制作工艺",-1)),(v(!0),m(W,null,oe(I.value.processes,(O,C)=>(v(),m("button",{key:O,type:"button",class:be(["choice",{chosen:a.value===C}]),onClick:re=>a.value=C},p(O),11,hg))),128))]),l("div",vg,[S[10]||(S[10]=l("div",{class:"field-title"},[xt("装饰取舍 "),l("span",{class:"small muted"},"越丰富，外观越高，成本分越低")],-1)),(v(!0),m(W,null,oe(b(fd),(O,C)=>(v(),m("button",{key:O,type:"button",class:be(["choice",{chosen:c.value===C}]),onClick:re=>c.value=C},p(O)+" · 外观 "+p([72,90,100][C])+" / 成本 "+p(b(Hl)[C]),11,mg))),128))]),l("button",{class:"btn primary block",type:"button",disabled:!j.value||b(r).ap<1||!b(sn)(n.value,.25)||b(r).dayPhase!=="prep"||b(r).phase!=="playing",onClick:K},"开始试吃 · 1 点行动力",8,gg),l("div",yg,p(j.value?b(sn)(n.value,.25)?b(r).ap<1?"当前行动力不足。":b(r).dayPhase!=="prep"?"营业阶段不能试做，请先结束营业日。":"":"配方材料不足，请先采购。":"请先选择风味、食材、主料比例和制作工艺。")+"失败消耗 1 点行动力和四分之一份配方材料；合格后上架再消耗 1 点行动力。",1)])):t.value==="signature"?(v(),m("div",bg,[S[15]||(S[15]=l("h2",null,"外婆的桂花栗子蛋糕 · 复原试验",-1)),S[16]||(S[16]=l("p",{class:"small muted"},"手记线索：「栗子甜则少放糖，桂花香淡则后撒。」先选核心材料，再完成三项判断。",-1)),l("div",_g,[S[11]||(S[11]=l("div",{class:"field-title"},"核心食材",-1)),(v(!0),m(W,null,oe(b(pi)("signature"),O=>(v(),m("button",{key:O,type:"button",class:be(["choice",{chosen:s.value.includes(O)}]),onClick:C=>ee(O)},p(O),11,kg))),128))]),l("div",Mg,[S[12]||(S[12]=l("div",{class:"field-title"},"栗子甜度",-1)),(v(),m(W,null,oe(["减少额外糖量","维持标准糖量","再增加一些糖"],(O,C)=>l("button",{key:O,type:"button",class:be(["choice",{chosen:o.value===C}]),onClick:re=>o.value=C},p(O),11,xg)),64))]),l("div",$g,[S[13]||(S[13]=l("div",{class:"field-title"},"桂花冻的处理",-1)),(v(),m(W,null,oe(["趁热拌进栗子泥","冷却后单独夹层","趁热浸入戚风胚"],(O,C)=>l("button",{key:O,type:"button",class:be(["choice",{chosen:i.value===C}]),onClick:re=>i.value=C},p(O),11,Cg)),64))]),l("div",wg,[S[14]||(S[14]=l("div",{class:"field-title"},"金桂的加入时间",-1)),(v(),m(W,null,oe(["烘烤前加入","蛋糕冷却后撒","装盒前现撒"],(O,C)=>l("button",{key:O,type:"button",class:be(["choice",{chosen:a.value===C}]),onClick:re=>a.value=C},p(O),11,Eg)),64))]),l("button",{class:"btn primary block",type:"button",disabled:!G.value||b(r).ap<1||!b(sn)("signature",.25)||b(r).dayPhase!=="prep"||b(r).phase!=="playing",onClick:te},"试吃复原配方 · 1 点行动力",8,Sg),l("div",Tg,p(G.value?b(sn)("signature",.25)?b(r).ap<1?"当前行动力不足。":b(r).dayPhase!=="prep"?"营业阶段不能试做，请先结束营业日。":"":"配方材料不足，请先采购。":"请选齐复原食材和三项判断。")+"失败消耗 1 点行动力和四分之一份配方材料，复原成功再消耗 1 点行动力。",1)])):t.value==="improve"?(v(),m("div",Ig,[l("h2",null,p(b(Ee)(u.value).name)+" · 改良诊断",1),l("p",Ag,p(b(Cs)[u.value].question),1),(v(!0),m(W,null,oe(b(Cs)[u.value].options,(O,C)=>(v(),m("label",{key:O,class:"answer"},[bs(l("input",{"onUpdate:modelValue":S[0]||(S[0]=re=>f.value=re),type:"radio",value:C},null,8,Og),[[Pu,f.value,void 0,{number:!0}]]),l("span",null,p(O),1)]))),128)),d.value?(v(),m("p",Ng,p(d.value),1)):D("",!0),l("button",{class:"btn primary block",type:"button",disabled:f.value<0||b(r).ap<N.value||!b(sn)(u.value,.25)||k.value||b(r).dayPhase!=="prep"||b(r).phase!=="playing",onClick:R},"提交改良试验 · 失败 1 / 成功 2 点行动力",8,Rg),l("div",Dg,p(f.value<0?"请选择一个改良方案。":b(sn)(u.value,.25)?b(r).ap<N.value?`当前行动力不足：本次至少需要 ${N.value} 点。`:b(r).dayPhase!=="prep"?"营业阶段不能进行改良。":"":"配方材料不足，请先采购。")+"试验消耗四分之一份配方材料；选错消耗 1 点行动力，可免费重选；选对消耗 2 点行动力并提升 1 级。",1)])):D("",!0),h.value?(v(),m("p",Pg,p(h.value),1)):D("",!0)]))}},Fg=We(Lg,[["__scopeId","data-v-28a122e9"]]),Vg={key:1,class:"card card-pad"},jg={class:"small muted"},Bg={class:"between small"},qg={class:"small muted"},Ug=["disabled"],Hg={key:0,class:"branch-row"},Kg={class:"between small"},Gg={class:"small muted"},Wg=["disabled"],zg={class:"card card-pad"},Yg={class:"between"},Jg={class:"chip"},Qg={class:"card card-pad",style:{"margin-top":"10px"}},Zg={class:"between",style:{"margin-bottom":"8px"}},Xg={class:"small muted",style:{"margin-bottom":"8px"}},ey={key:0,class:"chip pink",style:{"font-size":"10px"}},ty={class:"card card-pad",style:{"margin-top":"10px"}},ny={class:"between"},sy={class:"chip"},ry={class:"between small"},oy={class:"between small"},iy={class:"between small"},ly={class:"card card-pad",style:{"margin-top":"10px"}},ay={key:0,class:"empty"},cy={class:"d"},uy={class:"x"},dy={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"},role:"status"},fy={__name:"ManagePage",props:{initialSection:{type:String,default:"overview"}},emits:["open-panel"],setup(e,{emit:t}){const n=e,s=t,o=ne(n.initialSection),i=ne("");let a=0;pt(()=>n.initialSection,k=>o.value=k);const c=U(()=>xn.find(k=>!r.cities.includes(k.id)&&!r.surveyed.includes(k.id))),u=U(()=>Lt("survey")),f=U(()=>Lt("branch"));function d(k){const g=Lt(k);if(r.dayPhase!=="prep"||g.disabled||r.ap<g.ap||r.cash<g.cost){h(r.dayPhase!=="prep"?"请在营业前筹备。":g.note);return}wn(k,{})?h(k==="survey"?"城市考察完成，可以安排开店。":"新店筹备完成。"):h("暂时无法完成这项筹备。")}function h(k){i.value=k,clearTimeout(a),a=setTimeout(()=>i.value="",2200)}return(k,g)=>{var T;return v(),m("div",null,[o.value==="lab"?(v(),Ve(Fg,{key:0})):o.value==="branch"?(v(),m("div",Vg,[g[3]||(g[3]=l("div",{class:"h2"},"城市考察与分店筹备",-1)),l("p",jg,"在准备阶段安排考察和开店。下一站："+p(((T=c.value)==null?void 0:T.name)||"所有城市已纳入版图"),1),l("div",Bg,[l("span",null,p(u.value.name),1),l("span",null,"行动力 "+p(u.value.ap)+" · ¥"+p(u.value.cost),1)]),l("div",qg,p(u.value.note),1),l("button",{class:"btn block",type:"button",disabled:b(r).dayPhase!=="prep"||u.value.disabled||b(r).ap<u.value.ap,onClick:g[0]||(g[0]=_=>d("survey"))},"开始城市考察",8,Ug),b(r).surveyed.length?(v(),m("div",Hg,[l("div",Kg,[l("strong",null,p(f.value.name),1),l("span",null,"行动力 "+p(f.value.ap)+" · ¥"+p(f.value.cost),1)]),l("div",Gg,p(f.value.note),1),l("button",{class:"btn primary block",type:"button",disabled:b(r).dayPhase!=="prep"||f.value.disabled||b(r).ap<f.value.ap,onClick:g[1]||(g[1]=_=>d("branch"))},"筹备并开店",8,Wg)])):D("",!0)])):(v(),m(W,{key:2},[l("div",zg,[l("div",Yg,[g[4]||(g[4]=l("div",null,[l("div",{class:"h2",style:{margin:"0"}},"经营手账"),l("div",{class:"small muted"},"记录阶段目标、经营结果与重要收藏。")],-1)),l("span",Jg,"行动力 "+p(b(r).ap)+"/"+p(b(r).maxAp),1)]),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:g[2]||(g[2]=_=>s("open-panel","codex"))},"打开产品图鉴、顾客档案与相册")]),l("div",Qg,[l("div",Zg,[g[5]||(g[5]=l("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),l("span",{class:be(["chip",b(qt).done>=b(qt).need?"sage":""])},p(b(qt).done)+" / "+p(b(qt).need||"—"),3)]),l("div",Xg,p(b(sr).name)+" · 完成 "+p(b(qt).need)+" 项即可进入下一阶段。",1),(v(!0),m(W,null,oe(b(qt).list,_=>(v(),m("div",{key:_.text,class:be(["goal",{done:_.done}])},[g[6]||(g[6]=l("span",{class:"dot"},null,-1)),l("span",null,p(_.text),1),_.expand?(v(),m("span",ey,"扩张")):D("",!0)],2))),128))]),l("div",ty,[l("div",ny,[g[7]||(g[7]=l("div",{class:"h2"},"本月经营",-1)),l("span",sy,"第 "+p(b(r).day)+"/5 日",1)]),l("div",ry,[g[8]||(g[8]=l("span",{class:"muted"},"本月已到账",-1)),l("span",null,"¥"+p(b(r).monthRev.toLocaleString()),1)]),l("div",oy,[g[9]||(g[9]=l("span",{class:"muted"},"本月销量",-1)),l("span",null,p(Object.values(b(r).monthSold).reduce((_,I)=>_+I,0))+" 个",1)]),l("div",iy,[g[10]||(g[10]=l("span",{class:"muted"},"口碑 / 知名度",-1)),l("span",null,p(Math.round(b(r).reputation))+" / "+p(Math.round(b(r).popularity)),1)])]),l("div",ly,[g[11]||(g[11]=l("div",{class:"h2"},"最近发生的事",-1)),b(r).log.length?D("",!0):(v(),m("div",ay,"还没有记录。")),(v(!0),m(W,null,oe(b(r).log.slice(0,12),(_,I)=>(v(),m("div",{key:I,class:be(["logline",_.tone])},[l("span",cy,p(_.month)+"月"+p(_.day)+"日",1),l("span",uy,p(_.text),1)],2))),128))])],64)),i.value?(v(),m("p",dy,p(i.value),1)):D("",!0)])}}},py=We(fy,[["__scopeId","data-v-baa859ee"]]),hy={class:"world"},vy=["src","alt"],my={class:"world-heading"},gy={class:"world-eyebrow"},yy={class:"world-title"},by={class:"world-subtitle"},_y=["onClick"],ky={class:"world-status"},My={key:1,class:"world-toast",role:"status"},xy={key:2,class:"world-travel"},$y={class:"world-travel-head"},Cy={class:"world-travel-grid"},wy=["onClick"],Ey=["src"],Sy={class:"world-action-sheet"},Ty={key:0},Iy={class:"world-action-buttons"},Ay=["disabled"],Oy={__name:"SceneMapPage",props:{scene:{type:String,default:"shop"}},emits:["change-scene","open-panel"],setup(e,{emit:t}){const n=e,s=t,o={shop:{name:"林记烘焙",sub:"熟悉的木门后，总有蛋糕香",img:"bg-shop.webp",icon:"🏠"},kitchen:{name:"烘焙后厨",sub:"今天也要做出好吃的蛋糕",img:"bg-kitchen.webp",icon:"🥣"},street:{name:"栖云镇老街",sub:"沿着青石板路，去熟悉的地方",img:"bg-street.webp",icon:"🌿"},home:{name:"林念的家",sub:"家里的灯总为你留着",img:"bg-home.webp",icon:"🪴"},cafe:{name:"街角咖啡馆",sub:"一杯咖啡与一点新灵感",img:"bg-cafe.webp",icon:"☕"},park:{name:"河边公园",sub:"适合散步、看看河面",img:"bg-park.webp",icon:"🍃"},market:{name:"小镇市集",sub:"季节活动的摊位已经摆好",img:"bg-market.webp",icon:"🎪"},studio:{name:"设计工作室",sub:"配色、包装与有趣的创意",img:"bg-studio.webp",icon:"🎨"},school:{name:"熟悉的高中",sub:"那些一起走过的旧时光",img:"bg-school.webp",icon:"📚"},store:{name:"品牌新店",sub:"林记走向更远的地方",img:"bg-store.webp",icon:"🏬"}};function i(w){return w==="studio"?r.month>=21:w==="market"?r.month>=6:w==="store"?r.month>=19:w==="school"?r.month>=4:!0}const a=U(()=>Object.entries(o).filter(([w])=>i(w)).map(([w,Z])=>({id:w,...Z}))),c=U(()=>o[n.scene]||o.shop),u=U(()=>n.scene==="shop"?"bg-shop-lv"+r.shopLevel+".webp":c.value.img),f=U(()=>Je(u.value)==="ok"?u.value:c.value.img),d=U(()=>{const w={1:{counter:[56,55],mom:[22,68],phone:[29,51],book:[82,80],diary:[13,82],kitchen:[88,38],door:[92,92]},2:{counter:[57,57],mom:[30,75],phone:[8,64],book:[13,83],diary:[84,77],kitchen:[82,40],door:[92,93]},3:{counter:[64,58],mom:[20,67],phone:[32,55],book:[85,84],diary:[14,84],kitchen:[82,40],door:[92,93]},4:{counter:[78,59],mom:[20,67],phone:[31,56],book:[26,47],diary:[15,84],kitchen:[79,40],door:[92,94]}}[r.shopLevel]||{counter:[56,55],mom:[22,68],phone:[29,51],book:[82,80],diary:[13,82],kitchen:[88,38],door:[92,92]},Z={shop:[{id:"counter",x:w.counter[0],y:w.counter[1],text:"柜台 · 预约与营业",kind:"panel",value:"shop",section:"counter"},{id:"mom",x:w.mom[0],y:w.mom[1],text:"和妈妈聊聊",kind:"action",value:"momchat"},{id:"phone",x:w.phone[0],y:w.phone[1],text:"手机 · 宣传",kind:"action",value:"market"},{id:"book",x:w.book[0],y:w.book[1],text:"装修册 · 店铺升级",kind:"panel",value:"renovation"},{id:"diary",x:w.diary[0],y:w.diary[1],text:"手账 · 目标与图鉴",kind:"panel",value:"manage"},{id:"kitchen",x:w.kitchen[0],y:w.kitchen[1],text:"去后厨 →",kind:"scene",value:"kitchen"},{id:"door",x:w.door[0],y:w.door[1],text:"出门 →",kind:"scene",value:"street"}],kitchen:[{id:"workbench",x:49,y:69,text:"操作台 · 排产与制作",kind:"panel",value:"kitchen"},{id:"lab",x:76,y:44,text:"实验台 · 新品研发",kind:"panel",value:"manage",section:"lab"},{id:"staff",x:20,y:39,text:"排班板 · 员工与培训",kind:"panel",value:"partners"},{id:"back",x:7,y:53,text:"← 回店内",kind:"scene",value:"shop"}],street:[{id:"supplier",x:83,y:56,text:"食材铺 · 采购",kind:"panel",value:"supplier"},{id:"sq",x:70,y:78,text:"和苏晴聊聊",kind:"action",value:"sqchat"},{id:"bakery",x:16,y:55,text:"← 回林记",kind:"scene",value:"shop"},{id:"park",x:40,y:90,text:"去公园 →",kind:"scene",value:"park"},{id:"home",x:80,y:90,text:"回家 →",kind:"scene",value:"home"}],store:[{id:"expansion",x:54,y:67,text:"新店规划桌 · 城市与分店",kind:"panel",value:"manage",section:"branch"},{id:"exit",x:8,y:91,text:"← 回栖云镇",kind:"scene",value:"street"}]};return Z[n.scene]?Z[n.scene]:n.scene==="home"?[{id:"exit",x:10,y:90,text:"← 出门",kind:"scene",value:"street"}]:[{id:"exit",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}]}),h=ne(!1),k=ne(null),g=ne("");let T;pt(()=>n.scene,()=>{k.value=null,h.value=!1});function _(w){g.value=w,clearTimeout(T),T=setTimeout(()=>{g.value=""},2400)}function I(w){if(!i(w))return _("這個地方還沒有開放。");k.value=null,h.value=!1,s("change-scene",w)}const P=U(()=>!k.value||k.value.kind!=="action"?null:k.value.value==="momchat"?{ap:1,cost:0,disabled:!1,note:"家庭默契 +4"}:Lt(k.value.value));function j(w){if(w.kind==="scene")return I(w.value);if(w.kind==="panel")return s("open-panel",w.value,w.section||"overview");k.value=w}function G(){const w=k.value;if(!w||r.phase!=="playing")return;if(r.dayPhase!=="prep")return _("今天已经开门，打烊后再行动。");const Z=P.value;if(!Z||Z.disabled||r.ap<Z.ap||r.cash<Z.cost)return _((Z==null?void 0:Z.note)||"现在暂时无法行动。");(w.value==="momchat"?wn("talk",{partner:"mom"}):wn(w.value,{}))?(_(w.text+" · 已完成"),k.value=null):_("暂时无法执行，请检查行动力或触发条件。")}function N(w){return w==="studio"?"21":w==="market"?"6":w==="store"?"19":"4"}return(w,Z)=>{var ee,K,te,se;return v(),m("section",hy,[l("div",{class:be(["world-canvas","world-"+e.scene])},[b(Je)(f.value)!=="no"?(v(),m("img",{key:0,class:"world-background",src:b(Ie)(f.value),alt:c.value.name},null,8,vy)):D("",!0),Z[6]||(Z[6]=l("div",{class:"world-vignette","aria-hidden":"true"},null,-1)),l("header",my,[l("div",null,[l("span",gy,p(e.scene==="shop"?"HOME":"QIYUN TOWN")+" · 第 "+p(b(r).month)+" 月",1),l("h1",yy,p(c.value.name),1),l("div",by,p(c.value.sub),1)]),l("button",{class:"world-compass",type:"button","aria-label":"打开地点地图",onClick:Z[0]||(Z[0]=z=>h.value=!h.value)},"地图")]),(v(!0),m(W,null,oe(d.value,z=>(v(),m("button",{key:z.id,class:"world-hotspot",type:"button",style:et({left:z.x+"%",top:z.y+"%",transform:z.x>80?"translate(-100%,-50%)":z.x<15?"translate(0,-50%)":"translate(-50%,-50%)"}),onClick:B=>j(z)},p(z.text),13,_y))),128)),l("div",ky,[l("span",null,p(b(sr).name),1),l("span",null,"阶段目标 "+p(b(qt).done)+"/"+p(b(qt).need||"—"),1),l("span",null,"口碑 "+p(Math.round(b(r).reputation)),1)]),g.value?(v(),m("div",My,p(g.value),1)):D("",!0),h.value?(v(),m("div",xy,[l("div",$y,[Z[4]||(Z[4]=l("span",null,"选择地点",-1)),l("button",{type:"button","aria-label":"关闭地点地图",onClick:Z[1]||(Z[1]=z=>h.value=!1)},"✕")]),l("div",Cy,[(v(!0),m(W,null,oe(a.value,z=>(v(),m("button",{key:z.id,type:"button",class:be(["world-travel-place",{current:e.scene===z.id}]),onClick:B=>I(z.id)},[l("img",{src:b(Ie)(z.img),alt:""},null,8,Ey),l("span",null,p(z.icon)+" "+p(z.name),1)],10,wy))),128)),(v(!0),m(W,null,oe(["school","market","store","studio"].filter(z=>!i(z)),z=>(v(),m("div",{key:"locked-"+z,class:"world-travel-place locked"},[Z[5]||(Z[5]=l("span",{class:"locked-avatar"},"?",-1)),l("span",null,"未解锁 · M"+p(N(z)),1)]))),128))])])):D("",!0),k.value?(v(),m("div",{key:3,class:"world-action-mask",onClick:Z[3]||(Z[3]=$t(z=>k.value=null,["self"]))},[l("div",Sy,[l("strong",null,p(k.value.text),1),l("span",null,p((ee=P.value)==null?void 0:ee.note),1),P.value?(v(),m("small",Ty,"消耗 "+p(P.value.ap)+" 点行动力"+p(P.value.cost?" · ¥"+P.value.cost:""),1)):D("",!0),l("div",Iy,[l("button",{class:"world-action-cancel",type:"button",onClick:Z[2]||(Z[2]=z=>k.value=null)},"取消"),l("button",{class:"world-action-confirm",type:"button",disabled:b(r).dayPhase!=="prep"||((K=P.value)==null?void 0:K.disabled)||b(r).ap<(((te=P.value)==null?void 0:te.ap)||0)||b(r).cash<(((se=P.value)==null?void 0:se.cost)||0),onClick:G},"开始行动",8,Ay)])])])):D("",!0)],2)])}}},Ny=We(Oy,[["__scopeId","data-v-b2666a41"]]),Ry={class:"card card-pad"},Dy={class:"between"},Py={class:"chip"},Ly=["disabled"],Fy={class:"card ingredient-list"},Vy={class:"small muted"},jy={class:"stepper"},By=["disabled","onClick"],qy=["disabled","onClick"],Uy=["value","disabled","onInput","onBlur"],Hy=["disabled","onClick"],Ky=["disabled","onClick"],Gy={key:0,class:"small",role:"status"},Wy={class:"purchase-footer"},zy=["disabled"],Yy={__name:"SupplierPage",setup(e){const t=Jt({}),n=ne(""),s=U(()=>gn.filter(f=>f.month<=r.month)),o=U(()=>s.value.reduce((f,d)=>f+(t[d.id]||0)*d.price,0));function i(f,d){t[f]=Math.max(0,Math.min(99,(t[f]||0)+d))}function a(f,d){const h=String(d.target.value||"").replace(/[^0-9]/g,"");t[f]=Math.max(0,Math.min(99,Number(h)||0)),d.target.value=String(t[f]||0)}function c(){Object.keys(t).forEach(f=>{t[f]=0}),Object.assign(t,Id()),n.value="已按今天的生产计划填入缺料数量。"}function u(){const f=Td(t);n.value=f.message,f.ok&&Object.keys(t).forEach(d=>{t[d]=0})}return(f,d)=>(v(),m("div",null,[l("div",Ry,[l("div",Dy,[d[0]||(d[0]=l("div",{class:"h2"},"食材铺",-1)),l("span",Py,"仓库 "+p(b(nr))+"/"+p(b(r).warehouseCapacity),1)]),d[1]||(d[1]=l("p",{class:"small muted"},"选好今天要用的原料，一次结账。数量可以直接输入，也能用 ±5 快速调。采购消耗 1 点行动力；二周目优惠在首笔采购时抵扣，最高 ¥300。",-1)),l("button",{class:"btn",type:"button",disabled:b(r).dayPhase!=="prep",onClick:c},"按生产计划补齐缺料",8,Ly)]),l("div",Fy,[(v(!0),m(W,null,oe(s.value,h=>(v(),m("div",{key:h.id,class:"ingredient"},[l("div",null,[l("strong",null,p(h.name),1),l("div",Vy,"库存 "+p(b(r).pantry[h.id]||0)+" · ¥"+p(h.price)+" / 份",1)]),l("div",jy,[l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,-5)},"−5",8,By),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,-1)},"−",8,qy),l("input",{class:"qty",type:"number",inputmode:"numeric",min:"0",max:"99",value:t[h.id]||0,disabled:b(r).dayPhase!=="prep",onInput:k=>a(h.id,k),onBlur:k=>a(h.id,k)},null,40,Uy),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,1)},"+",8,Hy),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,5)},"+5",8,Ky)])]))),128))]),n.value?(v(),m("p",Gy,p(n.value),1)):D("",!0),l("div",Wy,[l("span",null,"合计 ¥"+p(o.value),1),l("button",{class:"btn primary",type:"button",disabled:b(r).dayPhase!=="prep"||b(r).ap<1||o.value<=0,onClick:u},"确认采购 · 1 点行动力",8,zy)])]))}},Jy=We(Yy,[["__scopeId","data-v-0c0a0343"]]),Qy={class:"card card-pad"},Zy={class:"between"},Xy={class:"chip"},eb={class:"small muted"},tb=["disabled"],nb={class:"card card-pad section-card"},sb={class:"small muted"},rb=["disabled","onClick"],ob={class:"card card-pad section-card"},ib={class:"small muted"},lb=["disabled","onClick"],ab={__name:"RenovationPage",setup(e){const t=U(()=>Xn.find(i=>i.lv===r.shopLevel+1)),n=U(()=>ql.map(i=>({...i,tier:tr(i.id),next:Ql(i.id)}))),s=U(()=>oo.map(i=>({...i,owned:r.decorations.includes(i.id),available:r.shopLevel>=i.shopLevel})));function o(){if(r.dayPhase!=="prep")return;const i=Lt("decorate");!i.disabled&&r.ap>=i.ap&&r.cash>=i.cost&&wn("decorate",{})}return(i,a)=>(v(),m("div",null,[l("div",Qy,[l("div",Zy,[a[0]||(a[0]=l("div",{class:"h2"},"店铺升级",-1)),l("span",Xy,p(b(zu)(b(r).shopLevel).name),1)]),l("div",eb,"舒适度 "+p(b(Vr))+"/4 · 自然客流 +"+p(b(Vr)*2)+"%",1),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:b(r).dayPhase!=="prep"||!t.value||b(Lt)("decorate").disabled||b(r).ap<2,onClick:o},p(t.value?"升级到 "+t.value.name+" · ¥"+t.value.cost+" · 2 点行动力":"已达到最高等级"),9,tb)]),l("div",nb,[a[1]||(a[1]=l("div",{class:"h2"},"装饰",-1)),(v(!0),m(W,null,oe(s.value,c=>(v(),m("div",{key:c.id,class:"row-item"},[l("div",null,[l("strong",null,p(c.name),1),l("div",sb,"舒适度 +1 · 店铺等级 "+p(c.shopLevel)+" · ¥"+p(c.cost),1)]),l("button",{class:"btn",type:"button",disabled:b(r).dayPhase!=="prep"||c.owned||!c.available||b(r).cash<c.cost||b(r).phase!=="playing",onClick:u=>b(qd)(c.id)},p(c.owned?"已购":c.available?"购买":"等级不足"),9,rb)]))),128))]),l("div",ob,[a[2]||(a[2]=l("div",{class:"between"},[l("div",{class:"h2"},"设备"),l("span",{class:"small muted"},"升级后立即生效")],-1)),(v(!0),m(W,null,oe(n.value,c=>{var u;return v(),m("div",{key:c.id,class:"row-item"},[l("div",null,[l("strong",null,p(c.name)+" · "+p(c.tier)+"/3",1),l("div",ib,p(c.desc)+" · "+p(((u=c.next)==null?void 0:u.text)||"已经满级"),1)]),l("button",{class:"btn",type:"button",disabled:b(r).dayPhase!=="prep"||!c.next||b(r).cash<c.next.cost,onClick:f=>b(Ed)(c.id)},p(c.next?"¥"+c.next.cost:"满级"),9,lb)])}),128))])]))}},cb=We(ab,[["__scopeId","data-v-d0e3b39f"]]),ub={class:"mg"},db=["src"],fb={class:"mg-top"},pb={class:"mg-title"},hb={class:"t"},vb={key:0,class:"s"},mb={class:"mg-slot"},gb={class:"mg-body"},yb={__name:"MiniShell",props:{bg:{type:String,required:!0},title:{type:String,default:""},sub:{type:String,default:""}},emits:["exit"],setup(e){const t=e,n=Ie(t.bg+".webp"),s=Je(t.bg+".webp")==="ok"?n:Ie(t.bg+".png");return(o,i)=>(v(),m("div",ub,[l("img",{class:"mg-bg",src:b(s),alt:""},null,8,db),i[1]||(i[1]=l("div",{class:"mg-shade"},null,-1)),l("header",fb,[l("button",{class:"mg-back",type:"button",onClick:i[0]||(i[0]=a=>o.$emit("exit")),"aria-label":"返回"},"←"),l("div",pb,[l("div",hb,p(e.title),1),e.sub?(v(),m("div",vb,p(e.sub),1)):D("",!0)]),l("div",mb,[No(o.$slots,"top",{},void 0)])]),l("div",gb,[No(o.$slots,"default",{},void 0)])]))}},bb=We(yb,[["__scopeId","data-v-5cc92e4c"]]),_b={key:0,class:"cust"},kb={class:"cust-tag"},Mb={class:"bubble"},xb={key:0,class:"hint"},$b={key:1,class:"hint"},Cb={key:1,class:"shelf"},wb=["onClick"],Eb=["src","alt"],Sb={class:"cn"},Tb={class:"cq"},Ib={key:0,class:"empty"},Ab={key:2,class:"bar"},Ob=["disabled"],Nb={key:3,class:"notice"},Rb={key:4,class:"packing"},Db=["src"],Pb={class:"pk-bar"},Lb={class:"ph-card"},Fb={class:"ph-head"},Vb={class:"ph-no"},jb={class:"ph-name"},Bb={class:"ph-desc"},qb={key:6,class:"result"},Ub={class:"rs-row"},Hb={class:"rs-row"},Kb={class:"rs-row"},Gb={class:"rs-say"},Si="圆形的奶油蛋糕，颜色偏浅。",Wb="A",zb=8,Yb=450,Jb={__name:"DeliveryGame",emits:["exit","done"],setup(e,{emit:t}){const n=t,s={plain:"圆形浅黄色的戚风蛋糕胚，外头抹一层白色奶油，表面有细细的抹刀纹，顶上就一片薄奶油花。",strawberry:"圆形白奶油蛋糕，顶上整整齐齐摆着三颗红草莓，侧面能看见夹层里的草莓果肉。",chocolate:"深棕色的圆形蛋糕，外面裹着巧克力奶油，表面撒了一层深色巧克力碎屑。",taro:"淡紫色的圆蛋糕，表面是芋泥，顶面插着几片焦糖色的杏仁薄脆。",matcha:"浅绿色的圆蛋糕，抹面是抹茶奶油，顶上撒了一些暗红色的豆子。",mango:"金黄色的圆形慕斯，表面是很光的镜面，顶上铺着芒果丁和几片芒果。",tiramisu:"方形的一块，表面筛了一层深棕色的粉，边上露出一层白色奶酪。",fig:"白奶油蛋糕，顶上是紫红色的无花果瓣，摆成一朵花的形状。",seasonal:"圆奶油蛋糕，表面堆满了当季水果——草莓、奇异果、蓝莓，五颜六色的。",custom:"双层的大蛋糕，白奶油打底，顶上有裱花和一块小牌子。",festival:"圆蛋糕，红棕色的奶油，顶上有过节的装饰糖珠和小花。",signature:"棕黄色的圆形蛋糕，表面是栗子奶油挤出的螺旋纹路，撒了金桂花瓣。"},o=ne("intro"),i=ne([]),a=ne(0),c=ne(""),u=ne(0),f=ne(0),d=ne(0),h=ne(""),k=ne(!1),g=ne(!1),T=ne(0),_=Jt({rows:[]});let I=null;const P=U(()=>r.shelf||{}),j=U(()=>Cn.value.filter(R=>(P.value[R.id]||0)>0).slice(0,12).map(R=>({...R,n:P.value[R.id]||0}))),G=U(()=>i.value[a.value]||null),N=R=>Je("cake-"+R+".webp")==="ok"?Ie("cake-"+R+".webp"):"",w=R=>Ie("minigame-pack-"+R+".png"),Z=U(()=>{const R=G.value;return R?R.kind==="walk"?R.text:"你好，我来取之前预订的蛋糕，订单编号是 "+R.order+"。":""});function ee(R){const E=String(r.month).padStart(2,"0");return Wb+E+String(100+R*7+Math.floor(Math.random()*90))}function K(){if(r.deliveryDay===r.dayIndex){h.value="今天已经亲自接待过客人了，明天再来。",o.value="result";return}const R=j.value;if(!R.length){h.value="展示柜是空的，先去厨房做点蛋糕再来。";return}const E=[],x=Math.min(4,Math.max(3,R.length));for(let $=0;$<x;$++){const S=R[Math.floor(Math.random()*R.length)];$>=Math.ceil(x/2)?E.push({kind:"pickup",product:S.id,qty:1,order:ee($),customer:"预约顾客"}):E.push({kind:"walk",product:S.id,qty:1,text:"老板，"+(s[S.id]||Si)+"那种，来一份。",customer:"到店顾客"})}i.value=E,a.value=0,u.value=0,f.value=0,d.value=0,c.value="",o.value="play",h.value=""}function te(R){if(o.value==="play"){if((P.value[R]||0)<1){h.value="这款已经卖完了。";return}c.value=c.value===R?"":R,h.value=""}}function se(){o.value==="play"&&(k.value=!k.value)}function z(){const R=G.value;if(!(!R||g.value)){if(!c.value){h.value="先在右边柜子里挑一份蛋糕。";return}if(c.value!==R.product){u.value+=1,h.value="不对，这位客人要的不是这款，再看看描述。",c.value="";return}g.value=!0,T.value=0,h.value="",I=setInterval(()=>{T.value+=1,T.value>=zb&&(clearInterval(I),I=null,B())},Yb)}}function B(){const R=G.value;if(!R)return;const x=Tn(R.product)*R.qty;r.shelf[R.product]=Math.max(0,(r.shelf[R.product]||0)-R.qty),r.cash+=x,r.dayRev+=x,r.monthRev+=x,f.value+=x,d.value+=R.qty,_.rows.push({name:Ee(R.product).name,kind:R.kind,money:x}),g.value=!1,c.value="",fe(),a.value+1>=i.value.length?(o.value="result",r.deliveryDay=r.dayIndex,fe(),n("done",{earned:f.value,sold:d.value,misses:u.value})):a.value+=1}const q=U(()=>{i.value.length;const R=u.value;return R===0?"一次没错，客人都在夸你眼力好":R<=2?"还算利落，就是找货时多看了几眼":"有点手忙脚乱，明天再来练练"});return En(()=>{K()}),to(()=>{I&&clearInterval(I)}),(R,E)=>(v(),Ve(bb,{bg:"minigame-delivery",title:"订单交付",sub:o.value==="play"?"第 "+(a.value+1)+" / "+i.value.length+" 位客人 · 已入账 ¥"+f.value:"柜台接单"},{default:eo(()=>[o.value==="play"?(v(),m("div",_b,[l("div",kb,p(G.value.customer),1),l("div",Mb,p(Z.value),1),G.value.kind==="pickup"?(v(),m("div",xb,"打开手机，按订单号找到这份预订")):(v(),m("div",$b,"照着描述，在右边柜子里挑出来"))])):D("",!0),o.value==="play"?(v(),m("div",Cb,[(v(!0),m(W,null,oe(j.value,x=>(v(),m("button",{key:x.id,type:"button",class:be(["cell",{on:c.value===x.id}]),onClick:$=>te(x.id)},[N(x.id)?(v(),m("img",{key:0,src:N(x.id),alt:x.name},null,8,Eb)):D("",!0),l("div",Sb,p(x.name),1),l("div",Tb,"剩 "+p(x.n),1)],10,wb))),128)),j.value.length?D("",!0):(v(),m("div",Ib,"柜子是空的"))])):D("",!0),o.value==="play"?(v(),m("div",Ab,[l("button",{class:"op",type:"button",onClick:se},"手机 · 查订单"),l("button",{class:"op primary",type:"button",disabled:g.value,onClick:z},p(g.value?"打包中…":"打包交付"),9,Ob)])):D("",!0),h.value?(v(),m("p",Nb,p(h.value),1)):D("",!0),g.value?(v(),m("div",Rb,[E[3]||(E[3]=l("div",{class:"pk-title"},"正在打包",-1)),l("img",{src:w(T.value),alt:""},null,8,Db),l("div",Pb,[l("i",{style:et({width:(T.value+1)/8*100+"%"})},null,4)])])):D("",!0),k.value?(v(),m("div",{key:5,class:"phone",onClick:E[1]||(E[1]=$t(x=>k.value=!1,["self"]))},[l("div",Lb,[l("div",Fb,[E[4]||(E[4]=l("span",null,"订单详情",-1)),l("button",{type:"button",onClick:E[0]||(E[0]=x=>k.value=!1)},"关闭")]),(v(!0),m(W,null,oe(i.value,(x,$)=>(v(),m("div",{key:$,class:be(["ph-row",{now:$===a.value}])},[l("div",Vb,p(x.kind==="pickup"?x.order:"到店单 · 无编号"),1),l("div",jb,p(b(Ee)(x.product).name)+" × "+p(x.qty),1),l("div",Bb,p(s[x.product]||Si),1)],2))),128))])])):D("",!0),o.value==="result"?(v(),m("div",qb,[E[8]||(E[8]=l("h3",null,"今天接待完了",-1)),l("div",Ub,[E[5]||(E[5]=l("span",null,"交付",-1)),l("span",null,p(d.value)+" 份",1)]),l("div",Hb,[E[6]||(E[6]=l("span",null,"入账",-1)),l("span",null,"¥"+p(f.value),1)]),l("div",Kb,[E[7]||(E[7]=l("span",null,"拿错",-1)),l("span",null,p(u.value)+" 次",1)]),l("p",Gb,p(q.value),1),l("button",{class:"op primary",type:"button",onClick:E[2]||(E[2]=x=>n("exit"))},"回店里")])):D("",!0)]),_:1},8,["sub"]))}},Qb=We(Jb,[["__scopeId","data-v-217c2560"]]),Zb={class:"app"},Xb={key:1,class:"topbar"},e0={class:"m serif"},t0={class:"topbar-actions"},n0={class:"purse"},s0={key:2,class:"scroll scene-scroll"},r0={class:"between scene-meta"},o0={class:"small muted"},i0={class:"chip"},l0=["disabled"],a0={class:"scene-panel"},c0={class:"scene-panel-head"},u0={class:"small muted"},d0={class:"scene-panel-content"},f0={key:6,class:"mask"},p0={class:"sheet"},h0={class:"sheet-foot tut-foot"},v0={key:7,class:"mask"},m0={class:"sheet"},g0={class:"sheet-foot tut-foot"},y0={class:"sheet"},b0={class:"sheet-head"},_0={class:"t serif"},k0={class:"small muted"},M0={class:"sheet-body"},x0={class:"card card-pad"},$0={class:"between small",style:{"margin-bottom":"6px"}},C0={class:"between small",style:{"margin-bottom":"6px"}},w0={class:"between small",style:{"margin-bottom":"6px"}},E0={class:"between small"},S0={key:0,class:"card card-pad",style:{"margin-top":"12px"}},T0={class:"h2"},I0={class:"between small",style:{"margin-bottom":"6px"}},A0={class:"between small",style:{"margin-bottom":"6px"}},O0={class:"between small",style:{"margin-bottom":"6px"}},N0={class:"between small"},R0={class:"between small",style:{"margin-top":"6px"}},D0={key:0,class:"delta"},P0={key:0,class:"mrep"},L0={class:"mrep-b"},F0={key:1,class:"mrep"},V0={class:"mrep-b"},j0={key:2,class:"mrep"},B0={class:"mrep-b"},q0={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},U0={class:"sheet-foot"},H0={key:9,class:"mask"},K0={class:"sheet"},G0={class:"sheet-body",style:{"padding-top":"22px"}},W0={class:"small muted serif"},z0={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},Y0={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},J0={class:"card card-pad"},Q0={class:"between small",style:{"margin-bottom":"6px"}},Z0={class:"between small",style:{"margin-bottom":"6px"}},X0={class:"between small"},e_={key:1,class:"card card-pad",style:{"margin-top":"12px"}},t_={class:"pn"},n_={class:"muted small"},s_={class:"pt"},r_={class:"sheet-foot"},o_={__name:"App",setup(e){const t=ne("shop"),n=ne(!1),s=ne(!1),o=ne(""),i=ne(""),a=ne("overview"),c=ne("counter");function u(E,x="overview"){if(typeof E=="string"&&E.indexOf("game:")===0){i.value=E.slice(5);return}if(typeof E=="string"&&E.indexOf("game:")===0){i.value=E.slice(5);return}o.value=E,E==="manage"&&(a.value=x),E==="shop"&&(c.value=x)}function f(){o.value="",a.value="overview",c.value="counter"}const d=ne(null),h=ne(!1),k=ne(null),g=ne(null),T=ne(!1),_=new URLSearchParams(location.search).get("dev")==="1"||window.matchMedia("(max-width: 600px), (pointer: coarse)").matches,I=U(()=>r.phase==="ended"&&r.ending&&!Le.events.length&&!T.value?r.ending:null),P=U(()=>_&&r.ending&&$n.some(E=>!E.final&&E.short.key===r.ending.key)),j=U(()=>Le.events.length);function G(E={}){n.value=!0,s.value=!1,t.value="shop",o.value=E.panel||"",a.value=E.section||"overview",Le.events.length&&(d.value=Le.events[0])}function N(){fe(),n.value=!1,s.value=!1,o.value="",d.value=null,k.value=null,g.value=null,T.value=!1}function w(){Le.events.length&&(d.value=Le.events[0])}function Z(){Le.events.shift(),d.value=null,fe();const E=Le.events[0];E&&(E.month===r.month||E.kind==="tutorial")&&setTimeout(w,200),!E&&!r.tutorialSeen&&r.month===1&&r.played.includes("EVT_PROLOGUE_01")&&(h.value=!0)}function ee(E){h.value=!1,mf(E),w()}function K(E){k.value=E,E.day===ts&&(g.value=r.report)}function te(){k.value=null,g.value=null,Le.events.length&&w()}function se(){Vd()&&(t.value="shop",o.value="",T.value=!1,qr(),w())}function z(){T.value=!0}function B(){Bd()&&(T.value=!1,k.value=null,g.value=null,qr(),w())}function q(){d.value||k.value||jd()&&(d.value=null,g.value=null,k.value=null,w())}pt(()=>r.autoStory,E=>{E&&(r.autoStory=!1,setTimeout(()=>{!d.value&&Le.events.length&&w()},90))});const R=U(()=>{if(!I.value)return[];const E=kn.filter($=>r.staff.includes($.id)).map($=>({name:$.nick,role:$.role,...Ci($.id)||{}})),x=Ci("mom");return x&&E.push({name:"林暖",role:"母亲",...x}),E.filter($=>$.title)});return En(()=>{xd()}),(E,x)=>(v(),m("div",Zb,[n.value?D("",!0):(v(),Ve(Ei,{key:0,onEnter:G})),n.value?(v(),m("div",Xb,[l("div",e0,[xt(p(b(kr)(b(r).month))+" ",1),l("small",null,"第 "+p(b(r).month)+" / 36 月 · 第 "+p(b(r).day)+" / "+p(b(ts))+" 日",1)]),l("div",t0,[l("div",n0,[x[9]||(x[9]=l("span",{class:"y"},"¥",-1)),xt(p(b(r).cash.toLocaleString()),1)]),l("button",{class:"topbar-save",type:"button",onClick:x[0]||(x[0]=$=>s.value=!0)},"设置")])])):D("",!0),n.value?(v(),m("div",s0,[l("div",r0,[l("span",o0,p(b(sr).name),1),l("span",i0,"行动力 "+p(b(r).ap)+" · 体力 "+p(b(r).stamina),1)]),b(_)&&b(r).phase==="playing"?(v(),m("button",{key:0,class:"btn",type:"button",style:{width:"100%",margin:"0 0 8px"},disabled:!!d.value||!!k.value,onClick:q},"开发者后门 · 跳到下个月",8,l0)):D("",!0),Ae(Ny,{scene:t.value,onChangeScene:x[1]||(x[1]=$=>t.value=$),onOpenPanel:u},null,8,["scene"]),o.value?(v(),m("div",{key:1,class:"scene-panel-mask",onClick:$t(f,["self"])},[l("section",a0,[l("header",c0,[l("div",null,[l("div",u0,"林记烘焙 · "+p(b(kr)(b(r).month)),1),l("strong",null,p({shop:"柜台营业",kitchen:"后厨操作台",partners:"员工排班板",manage:"经营手账",codex:"图鉴与相册",supplier:"食材采购",renovation:"店铺升级"}[o.value]||"经营"),1)]),l("button",{type:"button",class:"scene-panel-close",onClick:f},"✕")]),l("div",d0,[o.value==="shop"?(v(),Ve(mm,{key:0,paused:!!d.value,onClosed:K,onOpenPanel:u},null,8,["paused"])):o.value==="renovation"?(v(),Ve(cb,{key:1})):o.value==="supplier"?(v(),Ve(Jy,{key:2})):o.value==="kitchen"?(v(),Ve(Xm,{key:3,paused:!!d.value},null,8,["paused"])):o.value==="partners"?(v(),Ve(T1,{key:4})):o.value==="manage"?(v(),Ve(py,{key:5,"initial-section":a.value,onOpenPanel:u},null,8,["initial-section"])):o.value==="codex"?(v(),Ve(ua,{key:6,"initial-segment":a.value==="collection"?"collection":"product"},null,8,["initial-segment"])):D("",!0)])])])):D("",!0)])):D("",!0),n.value&&j.value?(v(),m("button",{key:3,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"16px","z-index":"20","box-shadow":"var(--shadow)"},onClick:w}," 有 "+p(j.value)+" 段剧情 ",1)):D("",!0),i.value==="delivery"?(v(),Ve(Qb,{key:4,onExit:x[2]||(x[2]=$=>i.value=""),onDone:x[3]||(x[3]=$=>i.value="")})):D("",!0),n.value&&d.value?(v(),Ve(Kf,{key:5,ev:d.value,onDone:Z},null,8,["ev"])):D("",!0),n.value&&h.value?(v(),m("div",f0,[l("div",p0,[x[10]||(x[10]=qo('<div class="sheet-head" data-v-d7a131bb><div class="t serif" data-v-d7a131bb>要不要先看看这家店？</div><div class="small muted" data-v-d7a131bb>林暖 · 林记烘焙前厅</div></div><div class="sheet-body" data-v-d7a131bb><div class="card card-pad" data-v-d7a131bb><p class="small" style="line-height:1.9;margin:0;" data-v-d7a131bb> 林暖把串着钥匙的钥匙扣放进你手心，问要不要带你从前厅、后厨一直走到街上。 看一遍会认得每个角落的用处；跳过也能随时自己摸索。 </p></div></div>',2)),l("div",h0,[l("button",{class:"btn",type:"button",onClick:x[4]||(x[4]=$=>ee(!1))},"暂不查看"),l("button",{class:"btn primary",type:"button",onClick:x[5]||(x[5]=$=>ee(!0))},"带我走一圈")])])])):D("",!0),n.value&&h.value?(v(),m("div",v0,[l("div",m0,[x[11]||(x[11]=qo('<div class="sheet-head" data-v-d7a131bb><div class="t serif" data-v-d7a131bb>要不要先看看这家店？</div><div class="small muted" data-v-d7a131bb>林暖 · 林记烘焙前厅</div></div><div class="sheet-body" data-v-d7a131bb><div class="card card-pad" data-v-d7a131bb><p class="small" style="line-height:1.9;margin:0;" data-v-d7a131bb> 林暖把串着钥匙的钥匙扣放进你手心，问要不要带你从前厅、后厨一直走到街上。 看一遍会认得每个角落的用处；跳过也能随时自己摸索。 </p></div></div>',2)),l("div",g0,[l("button",{class:"btn",type:"button",onClick:x[6]||(x[6]=$=>ee(!1))},"暂不查看"),l("button",{class:"btn primary",type:"button",onClick:x[7]||(x[7]=$=>ee(!0))},"带我走一圈")])])])):D("",!0),n.value&&k.value?(v(),m("div",{key:8,class:"mask",onClick:$t(te,["self"])},[l("div",y0,[l("div",b0,[l("div",_0,p(g.value?"月末结算":"打烊了"),1),l("div",k0,p(b(kr)(b(r).month))+" · 第 "+p(k.value.day)+" 个经营日",1)]),l("div",M0,[l("div",x0,[l("div",$0,[x[12]||(x[12]=l("span",{class:"muted"},"今天卖出",-1)),l("span",null,p(k.value.sold)+" 个",1)]),l("div",C0,[x[13]||(x[13]=l("span",{class:"muted"},"今日收入",-1)),l("span",null,"¥"+p(k.value.rev),1)]),l("div",w0,[x[14]||(x[14]=l("span",{class:"muted"},"剩下",-1)),l("span",null,p(k.value.left)+" 个",1)]),l("div",E0,[x[15]||(x[15]=l("span",{class:"muted"},"剩货回收",-1)),l("span",null,"¥"+p(k.value.gain),1)])]),g.value?(v(),m("div",S0,[l("div",T0,p(g.value.month)+" 月经营报告",1),l("div",I0,[x[16]||(x[16]=l("span",{class:"muted"},"营业额",-1)),l("span",null,"¥"+p(g.value.rev),1)]),l("div",A0,[x[17]||(x[17]=l("span",{class:"muted"},"支出",-1)),l("span",null,"¥"+p(g.value.cost),1)]),l("div",O0,[x[18]||(x[18]=l("span",{class:"muted"},"净收入",-1)),l("span",{style:et({color:g.value.net>=0?"#6c8a55":"var(--berry)"})},p(g.value.net>=0?"+":"")+p(g.value.net),5)]),l("div",N0,[x[19]||(x[19]=l("span",{class:"muted"},"最受欢迎",-1)),l("span",null,p(g.value.best)+"（"+p(g.value.bestN)+" 个）",1)]),l("div",R0,[x[20]||(x[20]=l("span",{class:"muted"},"口碑",-1)),l("span",null,[xt(p(g.value.rep)+" ",1),g.value.repDelta?(v(),m("em",D0,p(g.value.repDelta>0?"+":"")+p(g.value.repDelta),1)):D("",!0)])]),g.value.fresh&&g.value.fresh.length?(v(),m("div",P0,[x[21]||(x[21]=l("div",{class:"mrep-t"},"这个月新上了",-1)),l("div",L0,p(g.value.fresh.join("、")),1)])):D("",!0),g.value.grown&&g.value.grown.length?(v(),m("div",F0,[x[22]||(x[22]=l("div",{class:"mrep-t"},"伙伴长进了",-1)),l("div",V0,p(g.value.grown.join(" · ")),1)])):D("",!0),g.value.trust&&g.value.trust.length?(v(),m("div",j0,[x[23]||(x[23]=l("div",{class:"mrep-t"},"信赖",-1)),l("div",B0,[(v(!0),m(W,null,oe(g.value.trust,($,S)=>(v(),m("span",{key:$.name},p(S?" · ":"")+p($.name)+" "+p($.v),1))),128))])])):D("",!0),g.value.warn?(v(),m("p",q0,p(g.value.warn),1)):D("",!0)])):D("",!0)]),l("div",U0,[l("button",{class:"btn primary block",type:"button",onClick:te},p(I.value?"看结局":"继续"),1)])])])):D("",!0),n.value&&I.value?(v(),m("div",H0,[l("div",K0,[l("div",G0,[l("div",W0,p(I.value.name),1),l("h2",z0,p(I.value.title),1),I.value.text?(v(),m("p",Y0,p(I.value.text),1)):D("",!0),l("div",J0,[l("div",Q0,[x[24]||(x[24]=l("span",{class:"muted"},"门店 / 伙伴",-1)),l("span",null,p(b(r).storeCount)+" 家 · "+p(b(r).staff.length)+" 人",1)]),l("div",Z0,[x[25]||(x[25]=l("span",{class:"muted"},"产品 / 相册",-1)),l("span",null,p(b(r).unlocked.length)+" 款 · "+p(b(r).photos.length)+" 张",1)]),l("div",X0,[x[26]||(x[26]=l("span",{class:"muted"},"口碑 / 知名度",-1)),l("span",null,p(Math.round(b(r).reputation))+" / "+p(Math.round(b(r).popularity)),1)])]),R.value.length?(v(),m("div",e_,[x[27]||(x[27]=l("div",{class:"h2"},"他们的后来",-1)),(v(!0),m(W,null,oe(R.value,($,S)=>(v(),m("div",{key:S,class:"pl"},[l("div",t_,[xt(p($.name),1),l("span",n_," · "+p($.title),1)]),l("div",s_,p($.text),1)]))),128))])):D("",!0)]),l("div",r_,[l("button",{class:"btn block",type:"button",onClick:z},"结束本局"),P.value?(v(),m("button",{key:0,class:"btn block",type:"button",onClick:B}," 继续剧情 ")):D("",!0),l("button",{class:"btn primary block",type:"button",onClick:se},"开启二周目")])])])):D("",!0),n.value&&s.value?(v(),Ve(Ei,{key:10,"in-game":"",onClose:x[8]||(x[8]=$=>s.value=!1),onTitle:N,onEnter:G})):D("",!0)]))}},i_=We(o_,[["__scopeId","data-v-d7a131bb"]]);Uu(i_).mount("#app");
