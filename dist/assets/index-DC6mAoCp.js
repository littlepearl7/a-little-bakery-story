(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kr(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const xe={},an=[],Ct=()=>{},Ii=()=>!1,js=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bs=e=>e.startsWith("onUpdate:"),Ne=Object.assign,Gr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},va=Object.prototype.hasOwnProperty,ye=(e,t)=>va.call(e,t),ae=Array.isArray,Ht=e=>ss(e)==="[object Map]",ws=e=>ss(e)==="[object Set]",Co=e=>ss(e)==="[object Date]",fe=e=>typeof e=="function",Se=e=>typeof e=="string",vt=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Ai=e=>(_e(e)||fe(e))&&fe(e.then)&&fe(e.catch),Ri=Object.prototype.toString,ss=e=>Ri.call(e),ma=e=>ss(e).slice(8,-1),Oi=e=>ss(e)==="[object Object]",Wr=e=>Se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Kr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qs=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},ga=/-\w/g,ft=qs(e=>e.replace(ga,t=>t.slice(1).toUpperCase())),ya=/\B([A-Z])/g,Yt=qs(e=>e.replace(ya,"-$1").toLowerCase()),Ni=qs(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=qs(e=>e?`on${Ni(e)}`:""),xt=(e,t)=>!Object.is(e,t),ys=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Di=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},zr=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ba=e=>{const t=Se(e)?Number(e):NaN;return isNaN(t)?e:t};let wo;const Us=()=>wo||(wo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function et(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],o=Se(s)?xa(s):et(s);if(o)for(const i in o)t[i]=o[i]}return t}else if(Se(e)||_e(e))return e}const _a=/;(?![^(]*\))/g,ka=/:([^]+)/,Ma=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function xa(e){const t={};return e.replace(Ma,n=>n.startsWith("/*")?"":n).split(_a).forEach(n=>{if(n){const s=n.split(ka);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function be(e){let t="";if(Se(e))t=e;else if(ae(e))for(let n=0;n<e.length;n++){const s=be(e[n]);s&&(t+=s+" ")}else if(_e(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const $a="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Ca=Kr($a);function Pi(e){return!!e||e===""}function wa(e,t,n){if(e.length!==t.length)return!1;let s=!0;for(let o=0;s&&o<e.length;o++)s=Mn(e[o],t[o],n);return s}function Eo(e,t,n){if(e.size!==t.size)return!1;const s=Array.from(t),o=new Uint8Array(s.length);for(const i of e){let a=-1;for(let c=0;c<s.length;c++)if(!o[c]&&Mn(i,s[c],n)){a=c;break}if(a<0)return!1;o[a]=1}return!0}function Ea(e,t,n){let s=Ht(e),o=Ht(t);if(s||o||(s=ws(e),o=ws(t),s||o))return s&&o?Eo(e,t,n):!1;const i=Object.keys(e).length,a=Object.keys(t).length;if(i!==a)return!1;for(const c in e){const u=e.hasOwnProperty(c),p=t.hasOwnProperty(c);if(u&&!p||!u&&p||!Mn(e[c],t[c],n))return!1}return String(e)===String(t)}function So(e,t,n,s){n||(n=[new Map,new Map]);const[o,i]=n;if(o.has(e)||i.has(t))return o.get(e)===t&&i.get(t)===e;o.set(e,t),i.set(t,e);const a=s(e,t,n);return o.delete(e),i.delete(t),a}function Mn(e,t,n){if(e===t)return!0;let s=Co(e),o=Co(t);return s||o?s&&o?e.getTime()===t.getTime():!1:(s=vt(e),o=vt(t),s||o?e===t:(s=ae(e),o=ae(t),s||o?s&&o?So(e,t,n,wa):!1:(s=_e(e),o=_e(t),s||o?!s||!o?!1:So(e,t,n,Ea):String(e)===String(t))))}const Li=e=>!!(e&&e.__v_isRef===!0),f=e=>Se(e)?e:e==null?"":ae(e)||_e(e)&&(e.toString===Ri||!fe(e.toString))?Li(e)?f(e.value):JSON.stringify(e,Fi,2):String(e),Fi=(e,t)=>Li(t)?Fi(e,t.value):Ht(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,o],i)=>(n[cr(s,i)+" =>"]=o,n),{})}:ws(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>cr(n))}:vt(t)?cr(t):_e(t)&&!ae(t)&&!Oi(t)?String(t):t,cr=(e,t="")=>{var n;return vt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Le;class Sa{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Le&&(Le.active?(this.parent=Le,this.index=(Le.scopes||(Le.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const o=this.scopes.slice();for(t=0,n=o.length;t<n;t++)o[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=Le;try{return Le=this,t()}finally{Le=n}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){if(this._on>0&&--this._on===0){if(Le===this)Le=this.prevScope;else{let t=Le;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const o=this.scopes.slice();for(n=0,s=o.length;n<s;n++)o[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0}}}function Ta(){return Le}let we;const ur=new WeakSet;class Vi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&(Le.active?Le.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ur.has(this)&&(ur.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,To(this),qi(this);const t=we,n=pt;we=this,pt=!0;try{return this.fn()}finally{Ui(this),we=t,pt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Qr(t);this.deps=this.depsTail=void 0,To(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ur.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Er(this)&&this.run()}get dirty(){return Er(this)}}let ji=0,Vn,jn;function Bi(e,t=!1){if(e.flags|=8,t){e.next=jn,jn=e;return}e.next=Vn,Vn=e}function Yr(){ji++}function Jr(){if(--ji>0)return;if(jn){let t=jn;for(jn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Vn;){let t=Vn;for(Vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function qi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ui(e){let t,n=e.depsTail,s=n;for(;s;){const o=s.prevDep;s.version===-1?(s===n&&(n=o),Qr(s),Ia(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=o}e.deps=t,e.depsTail=n}function Er(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hi(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Hi(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Hn)||(e.globalVersion=Hn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Er(e))))return;e.flags|=2;const t=e.dep,n=we,s=pt;we=e,pt=!0;try{qi(e);const o=e.fn(e._value);(t.version===0||xt(o,e._value))&&(e.flags|=128,e._value=o,t.version++)}catch(o){throw t.version++,o}finally{we=n,pt=s,Ui(e),e.flags&=-3}}function Qr(e,t=!1){const{dep:n,prevSub:s,nextSub:o}=e;if(s&&(s.nextSub=o,e.prevSub=void 0),o&&(o.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Qr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ia(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let pt=!0;const Ki=[];function wt(){Ki.push(pt),pt=!1}function Et(){const e=Ki.pop();pt=e===void 0?!0:e}function To(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=we;we=void 0;try{t()}finally{we=n}}}let Hn=0;class Aa{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!we||!pt||we===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==we)n=this.activeLink=new Aa(we,this),we.deps?(n.prevDep=we.depsTail,we.depsTail.nextDep=n,we.depsTail=n):we.deps=we.depsTail=n,Gi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=we.depsTail,n.nextDep=void 0,we.depsTail.nextDep=n,we.depsTail=n,we.deps===n&&(we.deps=s)}return n}trigger(t){this.version++,Hn++,this.notify(t)}notify(t){Yr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Jr()}}}function Gi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Gi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Sr=new WeakMap,dn=Symbol(""),Tr=Symbol(""),Kn=Symbol("");function je(e,t,n){if(pt&&we){let s=Sr.get(e);s||Sr.set(e,s=new Map);let o=s.get(n);o||(s.set(n,o=new Zr),o.map=s,o.key=n),o.track()}}function Nt(e,t,n,s,o,i){const a=Sr.get(e);if(!a){Hn++;return}const c=u=>{u&&u.trigger()};if(Yr(),t==="clear")a.forEach(c);else{const u=ae(e),p=u&&Wr(n);if(u&&n==="length"){const d=Number(s);a.forEach((h,k)=>{(k==="length"||k===Kn||!vt(k)&&k>=d)&&c(h)})}else switch((n!==void 0||a.has(void 0))&&c(a.get(n)),p&&c(a.get(Kn)),t){case"add":u?p&&c(a.get("length")):(c(a.get(dn)),Ht(e)&&c(a.get(Tr)));break;case"delete":u||(c(a.get(dn)),Ht(e)&&c(a.get(Tr)));break;case"set":Ht(e)&&c(a.get(dn));break}}Jr()}function mn(e){const t=ge(e);return t===e||(je(t,"iterate",Kn),rt(e))?t:St(e)?Kt(e)?t.map(n=>Wt(ot(n))):t.map(Wt):t.map(ot)}function Hs(e){return je(e=ge(e),"iterate",Kn),e}function _t(e,t){return St(e)?Wt(Kt(e)?ot(t):t):ot(t)}const Ra={__proto__:null,[Symbol.iterator](){return dr(this,Symbol.iterator,e=>_t(this,e))},concat(...e){return mn(this).concat(...e.map(t=>ae(t)?mn(t):t))},entries(){return dr(this,"entries",e=>(e[1]=_t(this,e[1]),e))},every(e,t){return It(this,"every",e,t,void 0,arguments)},filter(e,t){return It(this,"filter",e,t,n=>n.map(s=>_t(this,s)),arguments)},find(e,t){return It(this,"find",e,t,n=>_t(this,n),arguments)},findIndex(e,t){return It(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return It(this,"findLast",e,t,n=>_t(this,n),arguments)},findLastIndex(e,t){return It(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return It(this,"forEach",e,t,void 0,arguments)},includes(...e){return fr(this,"includes",e)},indexOf(...e){return fr(this,"indexOf",e)},join(e){return mn(this).join(e)},lastIndexOf(...e){return fr(this,"lastIndexOf",e)},map(e,t){return It(this,"map",e,t,void 0,arguments)},pop(){return An(this,"pop")},push(...e){return An(this,"push",e)},reduce(e,...t){return Ao(this,"reduce",e,t)},reduceRight(e,...t){return Ao(this,"reduceRight",e,t)},shift(){return An(this,"shift")},some(e,t){return It(this,"some",e,t,void 0,arguments)},splice(...e){return An(this,"splice",e)},toReversed(){return mn(this).toReversed()},toSorted(e){return mn(this).toSorted(e)},toSpliced(...e){return mn(this).toSpliced(...e)},unshift(...e){return An(this,"unshift",e)},values(){return dr(this,"values",e=>_t(this,e))}};function dr(e,t,n){const s=Hs(e),o=s[t],i=o.call(s);if(s!==e&&!rt(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(i));return a.next=()=>Io(i.next(),n),o!==Wi[t]&&Object.defineProperties(a,{return:{get(){const c=i.return;return typeof c=="function"?c.bind(i):c}},throw:{get(){const c=i.throw;return typeof c=="function"?c.bind(i):c}}}),a}i._next=i.next,i.next=()=>Io(i._next(),n)}return i}function Io(e,t){return e.done||(e.value=t(e.value)),e}const Wi=Array.prototype;function It(e,t,n,s,o,i){const a=Hs(e),c=a!==e&&!rt(e),u=a[t];if(u!==Wi[t]){const h=u.apply(e,i);return c?ot(h):h}let p=n;a!==e&&(c?p=function(h,k){return n.call(this,_t(e,h),k,e)}:n.length>2&&(p=function(h,k){return n.call(this,h,k,e)}));const d=u.call(a,p,s);return c&&o?o(d):d}function Ao(e,t,n,s){const o=Hs(e),i=o!==e&&!rt(e);let a=n,c=!1;o!==e&&(i?(c=s.length===0,a=function(p,d,h){return c&&(c=!1,p=_t(e,p)),n.call(this,p,_t(e,d),h,e)}):n.length>3&&(a=function(p,d,h){return n.call(this,p,d,h,e)}));const u=o[t](a,...s);return c?_t(e,u):u}function fr(e,t,n){const s=ge(e);je(s,"iterate",Kn);const o=s[t](...n);return(o===-1||o===!1)&&to(n[0])?(n[0]=ge(n[0]),s[t](...n)):o}function An(e,t,n=[]){wt(),Yr();const s=ge(e)[t].apply(e,n);return Jr(),Et(),s}const Oa=Kr("__proto__,__v_isRef,__isVue"),zi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vt));function Na(e){vt(e)||(e=String(e));const t=ge(this);return je(t,"has",e),t.hasOwnProperty(e)}class Yi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const o=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!o;if(n==="__v_isReadonly")return o;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(o?i?Ha:Xi:i?Zi:Qi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const a=ae(t);if(!o){let u;if(a&&(u=Ra[n]))return u;if(n==="hasOwnProperty")return Na}const c=Reflect.get(t,n,qe(t)?t:s);if((vt(n)?zi.has(n):Oa(n))||(o||je(t,"get",n),i))return c;if(qe(c)){const u=a&&Wr(n)?c:c.value;return o&&_e(u)?Ar(u):u}return _e(c)?o?Ar(c):Jt(c):c}}class Ji extends Yi{constructor(t=!1){super(!1,t)}set(t,n,s,o){let i=t[n];const a=ae(t)&&Wr(n);if(!this._isShallow){const p=St(i);if(!rt(s)&&!St(s)&&(i=ge(i),s=ge(s)),!a&&qe(i)&&!qe(s))return p||(i.value=s),!0}const c=a?Number(n)<t.length:ye(t,n),u=Reflect.set(t,n,s,qe(t)?t:o);return t===ge(o)&&u&&(c?xt(s,i)&&Nt(t,"set",n,s):Nt(t,"add",n,s)),u}deleteProperty(t,n){const s=ye(t,n);t[n];const o=Reflect.deleteProperty(t,n);return o&&s&&Nt(t,"delete",n,void 0),o}has(t,n){const s=Reflect.has(t,n);return(!vt(n)||!zi.has(n))&&je(t,"has",n),s}ownKeys(t){return je(t,"iterate",ae(t)?"length":dn),Reflect.ownKeys(t)}}class Da extends Yi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Pa=new Ji,La=new Da,Fa=new Ji(!0);const Ir=e=>e,is=e=>Reflect.getPrototypeOf(e);function Va(e,t,n){return function(...s){const o=this.__v_raw,i=ge(o),a=Ht(i),c=e==="entries"||e===Symbol.iterator&&a,u=e==="keys"&&a,p=o[e](...s),d=n?Ir:t?Wt:ot;return!t&&je(i,"iterate",u?Tr:dn),Ne(Object.create(p),{next(){const{value:h,done:k}=p.next();return k?{value:h,done:k}:{value:c?[d(h[0]),d(h[1])]:d(h),done:k}}})}}function ls(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ja(e,t){const n={get(o){const i=this.__v_raw,a=ge(i),c=ge(o);e||(xt(o,c)&&je(a,"get",o),je(a,"get",c));const{has:u}=is(a),p=t?Ir:e?Wt:ot;if(u.call(a,o))return p(i.get(o));if(u.call(a,c))return p(i.get(c));i!==a&&i.get(o)},get size(){const o=this.__v_raw;return!e&&je(ge(o),"iterate",dn),o.size},has(o){const i=this.__v_raw,a=ge(i),c=ge(o);return e||(xt(o,c)&&je(a,"has",o),je(a,"has",c)),o===c?i.has(o):i.has(o)||i.has(c)},forEach(o,i){const a=this,c=a.__v_raw,u=ge(c),p=t?Ir:e?Wt:ot;return!e&&je(u,"iterate",dn),c.forEach((d,h)=>o.call(i,p(d),p(h),a))}};return Ne(n,e?{add:ls("add"),set:ls("set"),delete:ls("delete"),clear:ls("clear")}:{add(o){const i=ge(this),a=is(i),c=ge(o),u=!t&&!rt(o)&&!St(o)?c:o;return a.has.call(i,u)||xt(o,u)&&a.has.call(i,o)||xt(c,u)&&a.has.call(i,c)||(i.add(u),Nt(i,"add",u,u)),this},set(o,i){!t&&!rt(i)&&!St(i)&&(i=ge(i));const a=ge(this),{has:c,get:u}=is(a);let p=c.call(a,o);p||(o=ge(o),p=c.call(a,o));const d=u.call(a,o);return a.set(o,i),p?xt(i,d)&&Nt(a,"set",o,i):Nt(a,"add",o,i),this},delete(o){const i=ge(this),{has:a,get:c}=is(i);let u=a.call(i,o);u||(o=ge(o),u=a.call(i,o)),c&&c.call(i,o);const p=i.delete(o);return u&&Nt(i,"delete",o,void 0),p},clear(){const o=ge(this),i=o.size!==0,a=o.clear();return i&&Nt(o,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(o=>{n[o]=Va(o,e,t)}),n}function Xr(e,t){const n=ja(e,t);return(s,o,i)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_isShallow"?t:o==="__v_raw"?s:Reflect.get(ye(n,o)&&o in s?n:s,o,i)}const Ba={get:Xr(!1,!1)},qa={get:Xr(!1,!0)},Ua={get:Xr(!0,!1)};const Qi=new WeakMap,Zi=new WeakMap,Xi=new WeakMap,Ha=new WeakMap;function Ka(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jt(e){return St(e)?e:eo(e,!1,Pa,Ba,Qi)}function Ga(e){return eo(e,!1,Fa,qa,Zi)}function Ar(e){return eo(e,!0,La,Ua,Xi)}function eo(e,t,n,s,o){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=o.get(e);if(i)return i;const a=Ka(ma(e));if(a===0)return e;const c=new Proxy(e,a===2?s:n);return o.set(e,c),c}function Kt(e){return St(e)?Kt(e.__v_raw):!!(e&&e.__v_isReactive)}function St(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function to(e){return e?!!e.__v_raw:!1}function ge(e){const t=e&&e.__v_raw;return t?ge(t):e}function Wa(e){return!ye(e,"__v_skip")&&Object.isExtensible(e)&&Di(e,"__v_skip",!0),e}const ot=e=>_e(e)?Jt(e):e,Wt=e=>_e(e)?Ar(e):e;function qe(e){return e?e.__v_isRef===!0:!1}function ee(e){return za(e,!1)}function za(e,t){return qe(e)?e:new Ya(e,t)}class Ya{constructor(t,n){this.dep=new Zr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ge(t),this._value=n?t:ot(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||rt(t)||St(t);t=s?t:ge(t),xt(t,n)&&(this._rawValue=t,this._value=s?t:ot(t),this.dep.trigger())}}function b(e){return qe(e)?e.value:e}const Ja={get:(e,t,n)=>t==="__v_raw"?e:b(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const o=e[t];return qe(o)&&!qe(n)?(o.value=n,!0):Reflect.set(e,t,n,s)}};function el(e){return Kt(e)?e:new Proxy(e,Ja)}class Qa{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Zr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&we!==this)return Bi(this,!0),!0}get value(){const t=this.dep.track();return Hi(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Za(e,t,n=!1){let s,o;return fe(e)?s=e:(s=e.get,o=e.set),new Qa(s,o,n)}const as={},Es=new WeakMap;let sn;function Xa(e,t=!1,n=sn){if(n){let s=Es.get(n);s||Es.set(n,s=[]),s.push(e)}}function ec(e,t,n=xe){const{immediate:s,deep:o,once:i,scheduler:a,augmentJob:c,call:u}=n,p=D=>o?D:rt(D)||o===!1||o===0?Dt(D,1):Dt(D);let d,h,k,g,I=!1,_=!1;if(qe(e)?(h=()=>e.value,I=rt(e)):Kt(e)?(h=()=>p(e),I=!0):ae(e)?(_=!0,I=e.some(D=>Kt(D)||rt(D)),h=()=>e.map(D=>{if(qe(D))return D.value;if(Kt(D))return p(D);if(fe(D))return u?u(D,2):D()})):fe(e)?t?h=u?()=>u(e,2):e:h=()=>{if(k){wt();try{k()}finally{Et()}}const D=sn;sn=d;try{return u?u(e,3,[g]):e(g)}finally{sn=D}}:h=Ct,t&&o){const D=h,E=o===!0?1/0:o;h=()=>Dt(D(),E)}const w=Ta(),A=()=>{d.stop(),w&&w.active&&Gr(w.effects,d)};if(i&&t){const D=t;t=(...E)=>{try{return D(...E)}finally{A()}}}let L=_?new Array(e.length).fill(as):as;const G=D=>{if(!(!(d.flags&1)||!d.dirty&&!D))if(t){const E=d.run();if(D||o||I||(_?E.some((Z,te)=>xt(Z,L[te])):xt(E,L))){const Z=sn;wt();try{k&&k(),sn=d;const te=[E,L===as?void 0:_&&L[0]===as?[]:L,g];L=E,u?u(t,3,te):t(...te)}finally{sn=Z,Et()}}}else d.run()};return c&&c(G),d=new Vi(h),d.scheduler=a?()=>a(G,!1):G,g=D=>Xa(D,!1,d),k=d.onStop=()=>{const D=Es.get(d);if(D){if(u)u(D,4);else for(const E of D)E();Es.delete(d)}},t?s?G(!0):L=d.run():a?a(G.bind(null,!0),!0):d.run(),A.pause=d.pause.bind(d),A.resume=d.resume.bind(d),A.stop=A,A}function Dt(e,t=1/0,n){if(t<=0||!_e(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,qe(e))Dt(e.value,t,n);else if(ae(e))for(let s=0;s<e.length;s++)Dt(e[s],t,n);else if(ws(e)||Ht(e))e.forEach(s=>{Dt(s,t,n)});else if(Oi(e)){for(const s in e)Dt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Dt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function rs(e,t,n,s){try{return s?e(...s):e()}catch(o){Ks(o,t,n)}}function it(e,t,n,s){if(fe(e)){const o=rs(e,t,n,s);return o&&Ai(o)&&o.catch(i=>{Ks(i,t,n,void 0,!0)}),o}if(ae(e)){const o=[];for(let i=0;i<e.length;i++)o.push(it(e[i],t,n,s));return o}}function Ks(e,t,n,s=!0,o=!1){const i=t?t.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:c}=t&&t.appContext.config||xe;if(t){let u=t.parent;const p=t.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const h=u.ec;if(h&&!u.isUnmounted&&(!o||u.scope.active)){for(let k=0;k<h.length;k++)if(h[k](e,p,d)===!1)return}u=u.parent}if(a){wt(),rs(a,null,10,[e,p,d]),Et();return}}tc(e,n,i,s,c)}function tc(e,t,n,s=!0,o=!1){if(o)throw e;console.error(e)}const Ge=[];let ut=-1;const kt=[];let Bt=null,gn=0;const tl=Promise.resolve();let Ss=null;function nc(e){const t=Ss||tl;return e?t.then(this?e.bind(this):e):t}function sc(e){let t=ut+1,n=Ge.length;for(;t<n;){const s=t+n>>>1,o=Ge[s],i=Gn(o);i<e||i===e&&o.flags&2?t=s+1:n=s}return t}function Gs(e){if(!(e.flags&1)){const t=Gn(e),n=Ge[Ge.length-1];!n||!(e.flags&2)&&t>=Gn(n)?Ge.push(e):Ge.splice(sc(t),0,e),e.flags|=1,nl()}}function nl(){Ss||(Ss=tl.then(ol))}function rc(e){if(!ae(e))Bt&&e.id===-1?Bt.splice(gn+1,0,e):e.flags&1||(kt.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)kt.push(e[t]);nl()}function sl(e,t,n,s=ut+1){for(;s<Ge.length;s++){const o=Ge[s];if(o&&o.flags&2){if(e&&o.id!==e.uid||t!==void 0&&!(o.id>=t))continue;Ge.splice(s,1),s=e?s-1:ut,o.flags&4&&(o.flags&=-2),o(),o.flags&4||(o.flags&=-2)}}}function rl(e,t,n=0){if(kt.length){let s=kt,o=0;if(t){s=[];for(let a=0;a<kt.length;a++){const c=kt[a];(c.i!==void 0?!c.i||c.i.uid<n:t.has(c))?kt[o++]=c:s.push(c)}}const i=[...new Set(s)].sort((a,c)=>Gn(a)-Gn(c));if(kt.length=o,Bt){for(let a=0;a<i.length;a++)Bt.push(i[a]);return}for(Bt=i,gn=0;gn<Bt.length;gn++){const a=Bt[gn];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}Bt=null,gn=0}}let pr=!1;function oc(e,t){if(pr){e();return}const n=t===void 0?void 0:new Set(kt);e(),pr=!0;try{sl(void 0,t),rl(void 0,n,t)}finally{pr=!1}}const Gn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ol(e){try{for(ut=0;ut<Ge.length;ut++){const t=Ge[ut];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),rs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ut<Ge.length;ut++){const t=Ge[ut];t&&(t.flags&=-2)}ut=-1,Ge.length=0,rl(),Ss=null,(Ge.length||kt.length)&&ol()}}let Be=null,il=null;function Ts(e){const t=Be;return Be=e,il=e&&e.type.__scopeId||null,t}function Ws(e,t=Be,n){if(!t||e._n)return e;const s=(...o)=>{s._d&&Os(-1);const i=Ts(t),a=Pt.length;let c;try{c=e(...o)}finally{for(let u=Pt.length;u>a;u--)oo();Ts(i),s._d&&Os(1)}return c};return s._n=!0,s._c=!0,s._d=!0,s}function bs(e,t){if(Be===null)return e;const n=Xs(Be),s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[i,a,c,u=xe]=t[o];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Dt(a),s.push({dir:i,instance:n,value:a,oldValue:void 0,arg:c,modifiers:u}))}return e}function Xt(e,t,n,s){let o=e;if(s==="beforeMount")e._mount=e;else if(s==="beforeUpdate"){const c=t&&t._mount;c&&(c._latest=e,e._mount=c)}else if(s==="mounted"){const c=e._latest;e._mount=e._latest=void 0,c&&(o=c,c._mount=void 0)}const i=o.dirs,a=t&&t.dirs;for(let c=0;c<i.length;c++){let u=i[c];a?u.oldValue=a[c].value:s==="mounted"&&u.oldValue!==void 0&&(u=Ne({},u,{oldValue:void 0}));let p=u.dir[s];p&&(wt(),it(p,n,8,[e.el,u,o,t]),Et())}}function ic(e,t){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[e]=t}}function _s(e,t,n=!1){const s=Pl();if(s||bn){let o=bn?bn._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(o&&e in o)return o[e];if(arguments.length>1)return n&&fe(t)?t.call(s&&s.proxy):t}}const lc=Symbol.for("v-scx"),ac=()=>_s(lc);function ht(e,t,n){return ll(e,t,n)}function ll(e,t,n=xe){const{immediate:s,deep:o,flush:i,once:a}=n,c=Ne({},n),u=t&&s||!t&&i!=="post";let p;if(Qn){if(i==="sync"){const g=ac();p=g.__watcherHandles||(g.__watcherHandles=[])}else if(!u){const g=()=>{};return g.stop=Ct,g.resume=Ct,g.pause=Ct,g}}const d=We;c.call=(g,I,_)=>it(g,d,I,_);let h=!1;i==="post"?c.scheduler=g=>{g.i=d,Ke(g,d&&d.suspense)}:i!=="sync"&&(h=!0,c.scheduler=(g,I)=>{I?g():Gs(g)}),c.augmentJob=g=>{t&&(g.flags|=4),h&&(g.flags|=2,d&&(g.id=d.uid,g.i=d))};const k=ec(e,t,c);return Qn&&(p?p.push(k):u&&k()),k}function cc(e,t,n){const s=this.proxy,o=Se(e)?e.includes(".")?al(s,e):()=>s[e]:e.bind(s,s);let i;fe(t)?i=t:(i=t.handler,n=t);const a=os(this),c=ll(o,i.bind(s),n);return a(),c}function al(e,t){const n=t.split(".");return()=>{let s=e;for(let o=0;o<n.length&&s;o++)s=s[n[o]];return s}}const uc=Symbol("_vte"),zs=e=>e.__isTeleport,nt=Symbol("_leaveCb"),Rn=Symbol("_enterCb");function dc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vn(()=>{e.isMounted=!0}),Js(()=>{e.isUnmounting=!0}),e}const tt=[Function,Array],cl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tt,onEnter:tt,onAfterEnter:tt,onEnterCancelled:tt,onBeforeLeave:tt,onLeave:tt,onAfterLeave:tt,onLeaveCancelled:tt,onBeforeAppear:tt,onAppear:tt,onAfterAppear:tt,onAppearCancelled:tt},fc={name:"BaseTransition",props:cl,setup(e,{slots:t}){const n=Pl(),s=dc();return()=>{const o=t.default&&fl(t.default(),!0),i=o&&o.length?ul(o):n.subTree?O():void 0;if(!i)return;const a=ge(e),{mode:c}=a;if(s.isLeaving)return hr(i);const u=Is(i);if(!u)return hr(i);const p=Rr(u,a,s,n);u.type!==Ve&&fn(u,p);let d=n.subTree&&Is(n.subTree);if(d&&d.type!==Ve&&!on(d,u)&&Wn(n.subTree)){let h=Rr(d,a,s,n);if(fn(d,h),c==="out-in"&&u.type!==Ve)return s.isLeaving=!0,h.afterLeave=()=>{if(s.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const k=()=>{n.job.flags&8||n.update()};k.i=n,Gs(k)}else n.update();delete h.afterLeave,d=void 0},hr(i);c==="in-out"&&u.type!==Ve?h.delayLeave=(k,g,I)=>{const _=dl(s,d);_[String(d.key)]=d,k[nt]=()=>{g(),k[nt]=void 0,delete p.delayedLeave,d=void 0},p.delayedLeave=()=>{I(),delete p.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function ul(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ve){t=n;break}}return t}const pc=fc;function dl(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Rr(e,t,n,s){const{appear:o,mode:i,persisted:a=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:p,onEnterCancelled:d,onBeforeLeave:h,onLeave:k,onAfterLeave:g,onLeaveCancelled:I,onBeforeAppear:_,onAppear:w,onAfterAppear:A,onAppearCancelled:L}=t,G=String(e.key),D=dl(n,e),E=(K,ne)=>{K&&it(K,s,9,ne)},Z=(K,ne)=>{const se=ne[1];E(K,ne),ae(K)?K.every(z=>z.length<=1)&&se():K.length<=1&&se()},te={mode:i,persisted:a,beforeEnter(K){let ne=c;if(!n.isMounted)if(o)ne=_||c;else return;K[nt]&&K[nt](!0);const se=D[G];if(se&&on(e,se)){let z=se.el[nt];if(!z){const q=Wn(se);z=q&&q.el[nt]}z&&z()}E(ne,[K])},enter(K){if(D[G]===e)return;let ne=u,se=p,z=d;if(!n.isMounted)if(o)ne=w||u,se=A||p,z=L||d;else return;let q=!1;K[Rn]=P=>{q||(q=!0,P?E(z,[K]):E(se,[K]),te.delayedLeave&&te.delayedLeave(),K[Rn]=void 0)};const U=K[Rn].bind(null,!1);ne?Z(ne,[K,U]):U()},leave(K,ne){const se=String(e.key);if(K[Rn]&&K[Rn](!0),n.isUnmounting)return ne();E(h,[K]);let z=!1;K[nt]=U=>{z||(z=!0,ne(),U?E(I,[K]):E(g,[K]),K[nt]=void 0,D[se]===e&&delete D[se])};const q=K[nt].bind(null,!1);D[se]=e,k?Z(k,[K,q]):q()},clone(K){const ne=Rr(K,t,n,s);return ne.afterLeave=()=>{te.afterLeave&&te.afterLeave()},ne.delayLeave=(se,z,q)=>{te.delayLeave?te.delayLeave(se,z,q):q()},ne.delayedLeave=()=>{te.delayedLeave&&te.delayedLeave()},ne}};return te}function hr(e){if(Ys(e))return e=zt(e),e.children=null,e}function Is(e){if(!Ys(e))return zs(e.type)&&e.children?ul(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&fe(n.default))return n.default()}}function fn(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;fn(zs(n.type)&&Is(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const s=n.isHydrating?n.pendingBranch:n.activeBranch;s&&fn(s,t.clone(s))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===W&&ae(e.children)){const n=_l(e.children,!1);n&&fn(n,t)}}function fl(e,t=!1,n){let s=[],o=0;for(let i=0;i<e.length;i++){let a=e[i];const c=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===W?(a.patchFlag&128&&o++,s=s.concat(fl(a.children,t,c))):(t||a.type!==Ve)&&s.push(c!=null?zt(a,{key:c}):a)}if(o>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function Wn(e){if(e.component)return Wn(e.component.subTree);if(e.type===W){const t=ae(e.children)&&_l(e.children,!1);return t?Wn(t):void 0}if(e.type!==Ve)return e}function pl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ro(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const As=new WeakMap;function Bn(e,t,n,s,o=!1){if(ae(e)){e.forEach((_,w)=>Bn(_,t&&(ae(t)?t[w]:t),n,s,o));return}if(yn(s)&&!o){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Bn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?Xs(s.component):s.el,a=o?null:i,{i:c,r:u}=e,p=t&&t.r,d=c.refs===xe?c.refs={}:c.refs,h=c.setupState,k=ge(h),g=h===xe?Ii:_=>Ro(d,_)?!1:ye(k,_),I=(_,w)=>!(w&&Ro(d,w));if(p!=null&&p!==u){if(Oo(t),Se(p))d[p]=null,g(p)&&(h[p]=null);else if(qe(p)){const _=t;I(p,_.k)&&(p.value=null),_.k&&(d[_.k]=null)}}if(fe(u))rs(u,c,12,[a,d]);else{const _=Se(u),w=qe(u);if(_||w){const A=()=>{if(e.f){const L=_?g(u)?h[u]:d[u]:I()||!e.k?u.value:d[e.k];if(o)ae(L)&&Gr(L,i);else if(ae(L))L.includes(i)||L.push(i);else if(_)d[u]=[i],g(u)&&(h[u]=d[u]);else{const G=[i];I(u,e.k)&&(u.value=G),e.k&&(d[e.k]=G)}}else _?(d[u]=a,g(u)&&(h[u]=a)):w&&(I(u,e.k)&&(u.value=a),e.k&&(d[e.k]=a))};if(a){const L=()=>{A(),As.delete(e)};L.id=-1,As.set(e,L),Ke(L,n)}else Oo(e),A()}}}function Oo(e){const t=As.get(e);t&&(t.flags|=8,As.delete(e))}Us().requestIdleCallback;Us().cancelIdleCallback;const yn=e=>!!e.type.__asyncLoader,Ys=e=>e.type.__isKeepAlive;function hc(e,t){hl(e,"a",t)}function vc(e,t){hl(e,"da",t)}function hl(e,t,n=We){const s=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(zn(t,s,n),n){let o=n.parent;for(;o&&o.parent;)Ys(o.parent.vnode)&&mc(s,t,n,o),o=o.parent}}function mc(e,t,n,s){const o=zn(t,e,s,!0),i=zn("um",()=>Gr(s[t],o),n);i.flags=16}function zn(e,t,n=We,s=!1){if(n){const o=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...a)=>{wt();const c=os(n),u=it(t,n,e,a);return c(),Et(),u});return s?o.unshift(i):o.push(i),i}}const Ft=e=>(t,n=We)=>{(!Qn||e==="sp")&&zn(e,(...s)=>t(...s),n)},gc=Ft("bm"),vn=Ft("m"),yc=Ft("bu"),bc=Ft("u"),Js=Ft("bum"),no=Ft("um"),_c=Ft("sp"),kc=Ft("rtg"),Mc=Ft("rtc");function xc(e,t=We){zn("ec",e,t)}const $c=Symbol.for("v-ndc");function oe(e,t,n,s){let o;const i=n,a=ae(e);if(a||Se(e)){const c=a&&Kt(e);let u=!1,p=!1;c&&(u=!rt(e),p=St(e),e=Hs(e)),o=new Array(e.length);for(let d=0,h=e.length;d<h;d++)o[d]=t(u?p?Wt(ot(e[d])):ot(e[d]):e[d],d,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)o=[];else{o=new Array(e);for(let c=0;c<e;c++)o[c]=t(c+1,c,void 0,i)}else if(_e(e))if(e[Symbol.iterator])o=Array.from(e,(c,u)=>t(c,u,void 0,i));else{const c=Object.keys(e);o=new Array(c.length);for(let u=0,p=c.length;u<p;u++){const d=c[u];o[u]=t(e[d],d,u,i)}}else o=[];return o}function No(e,t,n,s,o,i){if(n==null&&(n={}),Be.ce||Be.parent&&yn(Be.parent)&&Be.parent.ce){const p=n,d=Object.keys(p).length>0;return t!=="default"&&(p.name=t),v(),De(W,null,[Re("slot",p,s)],d?-2:64)}let a=e[t];a&&a._c&&(a._d=!1);const c=Pt.length;v();let u;try{const p=a&&vl(a(n)),d=n.key||i||p&&p.key;u=De(W,{key:(d&&!vt(d)?d:`_${t}`)+(!p&&s?"_fb":"")},p||(s?s():[]),p&&e._===1?64:-2)}catch(p){for(let d=Pt.length;d>c;d--)oo();throw p}finally{a&&a._c&&(a._d=!0)}return u}function vl(e){return e.some(t=>xn(t)?!(t.type===Ve||t.type===W&&!vl(t.children)):!0)?e:null}const Or=e=>e?Ll(e)?Xs(e):Or(e.parent):null,qn=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>gl(e),$forceUpdate:e=>e.f||(e.f=()=>{Gs(e.update)}),$nextTick:e=>e.n||(e.n=nc.bind(e.proxy)),$watch:e=>cc.bind(e)}),vr=(e,t)=>e!==xe&&!e.__isScriptSetup&&ye(e,t),Cc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:o,props:i,accessCache:a,type:c,appContext:u}=e;if(t[0]!=="$"){const k=a[t];if(k!==void 0)switch(k){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return i[t]}else{if(vr(s,t))return a[t]=1,s[t];if(o!==xe&&ye(o,t))return a[t]=2,o[t];if(ye(i,t))return a[t]=3,i[t];if(n!==xe&&ye(n,t))return a[t]=4,n[t];Nr&&(a[t]=0)}}const p=qn[t];let d,h;if(p)return t==="$attrs"&&je(e.attrs,"get",""),p(e);if((d=c.__cssModules)&&(d=d[t]))return d;if(n!==xe&&ye(n,t))return a[t]=4,n[t];if(h=u.config.globalProperties,ye(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:o,ctx:i}=e;return vr(o,t)?(o[t]=n,!0):s!==xe&&ye(s,t)?(s[t]=n,!0):ye(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:o,props:i,type:a}},c){let u;return!!(n[c]||e!==xe&&c[0]!=="$"&&ye(e,c)||vr(t,c)||ye(i,c)||ye(s,c)||ye(qn,c)||ye(o.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ye(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Do(e){return ae(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function wc(e){const t=gl(e),n=e.proxy,s=e.ctx;Nr=!1,t.beforeCreate&&Po(t.beforeCreate,e,"bc");const{data:o,computed:i,methods:a,watch:c,provide:u,inject:p,created:d,beforeMount:h,mounted:k,beforeUpdate:g,updated:I,activated:_,deactivated:w,beforeDestroy:A,beforeUnmount:L,destroyed:G,unmounted:D,render:E,renderTracked:Z,renderTriggered:te,errorCaptured:K,serverPrefetch:ne,expose:se,inheritAttrs:z,components:q,directives:U,filters:P}=t;if(p&&Ec(p,s,null),a)for(const $ in a){const T=a[$];fe(T)&&(s[$]=T.bind(n))}if(o){const $=o.call(n,n);_e($)&&(e.data=Jt($))}if(Nr=!0,i)for(const $ in i){const T=i[$],N=fe(T)?T.bind(n,n):fe(T.get)?T.get.bind(n,n):Ct,C=!fe(T)&&fe(T.set)?T.set.bind(n):Ct,re=B({get:N,set:C});Object.defineProperty(s,$,{enumerable:!0,configurable:!0,get:()=>re.value,set:Ce=>re.value=Ce})}if(c)for(const $ in c)ml(c[$],s,n,$);if(u){const $=fe(u)?u.call(n):u;Reflect.ownKeys($).forEach(T=>{ic(T,$[T])})}d&&Po(d,e,"c");function x($,T){ae(T)?T.forEach(N=>$(N.bind(n))):T&&$(T.bind(n))}if(x(gc,h),x(vn,k),x(yc,g),x(bc,I),x(hc,_),x(vc,w),x(xc,K),x(Mc,Z),x(kc,te),x(Js,L),x(no,D),x(_c,ne),ae(se))if(se.length){const $=e.exposed||(e.exposed={});se.forEach(T=>{Object.defineProperty($,T,{get:()=>n[T],set:N=>n[T]=N,enumerable:!0})})}else e.exposed||(e.exposed={});E&&e.render===Ct&&(e.render=E),z!=null&&(e.inheritAttrs=z),q&&(e.components=q),U&&(e.directives=U),ne&&pl(e)}function Ec(e,t,n=Ct){ae(e)&&(e=Dr(e));for(const s in e){const o=e[s];let i;_e(o)?"default"in o?i=_s(o.from||s,o.default,!0):i=_s(o.from||s):i=_s(o),qe(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):t[s]=i}}function Po(e,t,n){it(ae(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ml(e,t,n,s){let o=s.includes(".")?al(n,s):()=>n[s];if(Se(e)){const i=t[e];fe(i)&&ht(o,i)}else if(fe(e))ht(o,e.bind(n));else if(_e(e))if(ae(e))e.forEach(i=>ml(i,t,n,s));else{const i=fe(e.handler)?e.handler.bind(n):t[e.handler];fe(i)&&ht(o,i,e)}}function gl(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:o,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,c=i.get(t);let u;return c?u=c:!o.length&&!n&&!s?u=t:(u={},o.length&&o.forEach(p=>Rs(u,p,a,!0)),Rs(u,t,a)),_e(t)&&i.set(t,u),u}function Rs(e,t,n,s=!1){const{mixins:o,extends:i}=t;i&&Rs(e,i,n,!0),o&&o.forEach(a=>Rs(e,a,n,!0));for(const a in t)if(!(s&&a==="expose")){const c=Sc[a]||n&&n[a];e[a]=c?c(e[a],t[a]):t[a]}return e}const Sc={data:Lo,props:Fo,emits:Fo,methods:Nn,computed:Nn,beforeCreate:He,created:He,beforeMount:He,mounted:He,beforeUpdate:He,updated:He,beforeDestroy:He,beforeUnmount:He,destroyed:He,unmounted:He,activated:He,deactivated:He,errorCaptured:He,serverPrefetch:He,components:Nn,directives:Nn,watch:Ic,provide:Lo,inject:Tc};function Lo(e,t){return t?e?function(){return Ne(fe(e)?e.call(this,this):e,fe(t)?t.call(this,this):t)}:t:e}function Tc(e,t){return Nn(Dr(e),Dr(t))}function Dr(e){if(ae(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function He(e,t){return e?[...new Set([].concat(e,t))]:t}function Nn(e,t){return e?Ne(Object.create(null),e,t):t}function Fo(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:Ne(Object.create(null),Do(e),Do(t??{})):t}function Ic(e,t){if(!e)return t;if(!t)return e;const n=Ne(Object.create(null),e);for(const s in t)n[s]=He(e[s],t[s]);return n}function yl(){return{app:null,config:{isNativeTag:Ii,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ac=0;function Rc(e,t){return function(s,o=null){fe(s)||(s=Ne({},s)),o!=null&&!_e(o)&&(o=null);const i=yl(),a=new WeakSet,c=[];let u=!1;const p=i.app={_uid:Ac++,_component:s,_props:o,_container:null,_context:i,_instance:null,version:uu,get config(){return i.config},set config(d){},use(d,...h){return a.has(d)||(d&&fe(d.install)?(a.add(d),d.install(p,...h)):fe(d)&&(a.add(d),d(p,...h))),p},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),p},component(d,h){return h?(i.components[d]=h,p):i.components[d]},directive(d,h){return h?(i.directives[d]=h,p):i.directives[d]},mount(d,h,k){if(!u){const g=p._ceVNode||Re(s,o);return g.appContext=i,k===!0?k="svg":k===!1&&(k=void 0),e(g,d,k),u=!0,p._container=d,d.__vue_app__=p,Xs(g.component)}},onUnmount(d){c.push(d)},unmount(){u&&(it(c,p._instance,16),e(null,p._container),delete p._container.__vue_app__)},provide(d,h){return i.provides[d]=h,p},runWithContext(d){const h=bn;bn=p;try{return d()}finally{bn=h}}};return p}}let bn=null;const Oc=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ft(t)}Modifiers`]||e[`${Yt(t)}Modifiers`];function Nc(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||xe;let o=n;const i=t.startsWith("update:"),a=i&&Oc(s,t.slice(7));a&&(a.trim&&(o=n.map(d=>Se(d)?d.trim():d)),a.number&&(o=o.map(zr)));let c,u=s[c=ar(t)]||s[c=ar(ft(t))];!u&&i&&(u=s[c=ar(Yt(t))]),u&&it(u,e,6,o);const p=s[c+"Once"];if(p){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,it(p,e,6,o)}}const Dc=new WeakMap;function bl(e,t,n=!1){const s=n?Dc:t.emitsCache,o=s.get(e);if(o!==void 0)return o;const i=e.emits;let a={},c=!1;if(!fe(e)){const u=p=>{const d=bl(p,t,!0);d&&(c=!0,Ne(a,d))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!c?(_e(e)&&s.set(e,null),null):(ae(i)?i.forEach(u=>a[u]=null):Ne(a,i),_e(e)&&s.set(e,a),a)}function Qs(e,t){return!e||!js(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ye(e,t[0].toLowerCase()+t.slice(1))||ye(e,Yt(t))||ye(e,t))}function Vo(e){const{type:t,vnode:n,proxy:s,withProxy:o,propsOptions:[i],slots:a,attrs:c,emit:u,render:p,renderCache:d,props:h,data:k,setupState:g,ctx:I,inheritAttrs:_}=e,w=Ts(e);let A,L;try{if(n.shapeFlag&4){const D=o||s,E=D;A=Mt(p.call(E,D,d,h,g,k,I)),L=c}else{const D=t;A=Mt(D.length>1?D(h,{attrs:c,slots:a,emit:u}):D(h,null)),L=t.props?c:Pc(c)}}catch(D){Pt.length=0,Ks(D,e,1),A=Re(Ve)}let G=A;if(L&&_!==!1){const D=Object.keys(L),{shapeFlag:E}=G;D.length&&E&7&&(i&&D.some(Bs)&&(L=Lc(L,i)),G=zt(G,L,!1,!0))}if(n.dirs&&(G=zt(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition){const D=zs(G.type)&&Is(G)||G;fn(D,n.transition)}return A=G,Ts(w),A}function _l(e,t=!0){let n;for(let s=0;s<e.length;s++){const o=e[s];if(xn(o)){if(o.type!==Ve||o.children==="v-if"){if(n)return;n=o}}else return}return n}const Pc=e=>{let t;for(const n in e)(n==="class"||n==="style"||js(n))&&((t||(t={}))[n]=e[n]);return t},Lc=(e,t)=>{const n={};for(const s in e)(!Bs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function Fc(e,t,n){const{props:s,children:o,component:i}=e,{props:a,children:c,patchFlag:u}=t,p=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?jo(s,a,p):!!a;if(u&8){const d=t.dynamicProps;for(let h=0;h<d.length;h++){const k=d[h];if(kl(a,s,k)&&!Qs(p,k))return!0}}}else return(o||c)&&(!c||!c.$stable)?!0:s===a?!1:s?a?jo(s,a,p):!0:!!a;return!1}function jo(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let o=0;o<s.length;o++){const i=s[o];if(!ye(e,i)||kl(t,e,i)&&!Qs(n,i))return!0}return!1}function kl(e,t,n){const s=e[n],o=t[n];return n==="style"&&_e(s)&&_e(o)?!Mn(s,o):s!==o}function Vc({vnode:e,parent:t,suspense:n},s){for(;t;){const o=t.subTree;if(o.suspense&&o.suspense.activeBranch===e&&(o.suspense.vnode.el=o.el=s,e=o),o===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const Ml={},xl=()=>Object.create(Ml),$l=e=>Object.getPrototypeOf(e)===Ml;function jc(e,t,n,s=!1){const o={},i=xl();e.propsDefaults=Object.create(null),Cl(e,t,o,i);for(const a in e.propsOptions[0])a in o||(o[a]=void 0);n?e.props=s?o:Ga(o):e.type.props?e.props=o:e.props=i,e.attrs=i}function Bc(e,t,n,s){const{props:o,attrs:i,vnode:{patchFlag:a}}=e,c=ge(o),[u]=e.propsOptions;let p=!1;if((s||a>0)&&!(a&16)){if(a&8){const d=e.vnode.dynamicProps;for(let h=0;h<d.length;h++){let k=d[h];if(Qs(e.emitsOptions,k))continue;const g=t[k];if(u)if(ye(i,k))g!==i[k]&&(i[k]=g,p=!0);else{const I=ft(k);o[I]=Pr(u,c,I,g,e,!1)}else g!==i[k]&&(i[k]=g,p=!0)}}}else{Cl(e,t,o,i)&&(p=!0);let d;for(const h in c)(!t||!ye(t,h)&&((d=Yt(h))===h||!ye(t,d)))&&(u?n&&(n[h]!==void 0||n[d]!==void 0)&&(o[h]=Pr(u,c,h,void 0,e,!0)):delete o[h]);if(i!==c)for(const h in i)(!t||!ye(t,h))&&(delete i[h],p=!0)}p&&Nt(e.attrs,"set","")}function Cl(e,t,n,s){const[o,i]=e.propsOptions;let a=!1,c;if(t)for(let u in t){if(Fn(u))continue;const p=t[u];let d;o&&ye(o,d=ft(u))?!i||!i.includes(d)?n[d]=p:(c||(c={}))[d]=p:Qs(e.emitsOptions,u)||(!(u in s)||p!==s[u])&&(s[u]=p,a=!0)}if(i){const u=ge(n),p=c||xe;for(let d=0;d<i.length;d++){const h=i[d];n[h]=Pr(o,u,h,p[h],e,!ye(p,h))}}return a}function Pr(e,t,n,s,o,i){const a=e[n];if(a!=null){const c=ye(a,"default");if(c&&s===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&fe(u)){const{propsDefaults:p}=o;if(n in p)s=p[n];else{const d=os(o);s=p[n]=u.call(null,t),d()}}else s=u;o.ce&&o.ce._setProp(n,s)}a[0]&&(i&&!c?s=!1:a[1]&&(s===""||s===Yt(n))&&(s=!0))}return s}const qc=new WeakMap;function wl(e,t,n=!1){const s=n?qc:t.propsCache,o=s.get(e);if(o)return o;const i=e.props,a={},c=[];let u=!1;if(!fe(e)){const d=h=>{u=!0;const[k,g]=wl(h,t,!0);Ne(a,k),g&&c.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!u)return _e(e)&&s.set(e,an),an;if(ae(i))for(let d=0;d<i.length;d++){const h=ft(i[d]);Bo(h)&&(a[h]=xe)}else if(i)for(const d in i){const h=ft(d);if(Bo(h)){const k=i[d],g=a[h]=ae(k)||fe(k)?{type:k}:Ne({},k),I=g.type;let _=!1,w=!0;if(ae(I))for(let A=0;A<I.length;++A){const L=I[A],G=fe(L)&&L.name;if(G==="Boolean"){_=!0;break}else G==="String"&&(w=!1)}else _=fe(I)&&I.name==="Boolean";g[0]=_,g[1]=w,(_||ye(g,"default"))&&c.push(h)}}const p=[a,c];return _e(e)&&s.set(e,p),p}function Bo(e){return e[0]!=="$"&&!Fn(e)}const so=e=>e==="_"||e==="_ctx"||e==="$stable",ro=e=>ae(e)?e.map(Mt):[Mt(e)],Uc=(e,t,n)=>{if(t._n)return t;const s=Ws((...o)=>ro(t(...o)),n);return s._c=!1,s},El=(e,t,n)=>{const s=e._ctx;for(const o in e){if(so(o))continue;const i=e[o];if(fe(i))t[o]=Uc(o,i,s);else if(i!=null){const a=ro(i);t[o]=()=>a}}},Sl=(e,t)=>{const n=ro(t);e.slots.default=()=>n},Tl=(e,t,n)=>{for(const s in t)(n||!so(s))&&(e[s]=t[s])},Hc=(e,t,n)=>{const s=e.slots=xl();if(e.vnode.shapeFlag&32){const o=t._;o?(Tl(s,t,n),n&&Di(s,"_",o,!0)):El(t,s)}else t&&Sl(e,t)},Kc=(e,t,n)=>{const{vnode:s,slots:o}=e;let i=!0,a=xe;if(s.shapeFlag&32){const c=t._;c?n&&c===1?i=!1:Tl(o,t,n):(i=!t.$stable,El(t,o)),a=t}else t&&(Sl(e,t),a={default:1});if(i)for(const c in o)!so(c)&&a[c]==null&&delete o[c]},Ke=Qc;function Gc(e){return Wc(e)}function Wc(e,t){const n=Us();n.__VUE__=!0;const{insert:s,remove:o,patchProp:i,createElement:a,createText:c,createComment:u,setText:p,setElementText:d,parentNode:h,nextSibling:k,setScopeId:g=Ct,insertStaticContent:I}=e,_=(y,M,R,H=null,F=null,j=null,Q=void 0,J=null,Y=!!M.dynamicChildren)=>{if(y===M)return;y&&!on(y,M)&&(H=he(y),Ce(y,F,j,!0),y=null),M.patchFlag===-2&&(Y=!1,M.dynamicChildren=null),M.dynamicChildren&&y&&y.dynamicChildren&&y.dynamicChildren.hasOnce&&(M.dynamicChildren===an&&(M.dynamicChildren=[]),M.dynamicChildren.hasOnce=!0);const{type:V,ref:ie,shapeFlag:X}=M;switch(V){case Zs:w(y,M,R,H);break;case Ve:A(y,M,R,H);break;case ks:y==null&&L(M,R,H,Q);break;case W:q(y,M,R,H,F,j,Q,J,Y);break;default:X&1?E(y,M,R,H,F,j,Q,J,Y):X&6?U(y,M,R,H,F,j,Q,J,Y):(X&64||X&128)&&V.process(y,M,R,H,F,j,Q,J,Y,mt)}ie!=null&&F?Bn(ie,y&&y.ref,j,M||y,!M):ie==null&&y&&y.ref!=null&&Bn(y.ref,null,j,y,!0)},w=(y,M,R,H)=>{if(y==null)s(M.el=c(M.children),R,H);else{const F=M.el=y.el;M.children!==y.children&&p(F,M.children)}},A=(y,M,R,H)=>{y==null?s(M.el=u(M.children||""),R,H):M.el=y.el},L=(y,M,R,H)=>{[y.el,y.anchor]=I(y.children,M,R,H,y.el,y.anchor)},G=({el:y,anchor:M},R,H)=>{let F;for(;y&&y!==M;)F=k(y),s(y,R,H),y=F;s(M,R,H)},D=({el:y,anchor:M})=>{let R;for(;y&&y!==M;)R=k(y),o(y),y=R;o(M)},E=(y,M,R,H,F,j,Q,J,Y)=>{if(M.type==="svg"?Q="svg":M.type==="math"&&(Q="mathml"),y==null)Z(M,R,H,F,j,Q,J,Y);else{const V=y.el&&y.el._isVueCE?y.el:null;try{V&&V._beginPatch(),ne(y,M,F,j,Q,J,Y)}finally{V&&V._endPatch()}}},Z=(y,M,R,H,F,j,Q,J)=>{let Y,V;const{props:ie,shapeFlag:X,transition:le,dirs:de}=y;if(Y=y.el=a(y.type,j,ie&&ie.is,ie),X&8?d(Y,y.children):X&16&&K(y.children,Y,null,H,F,mr(y,j),Q,J),de&&Xt(y,null,H,"created"),te(Y,y,y.scopeId,Q,H),ie){for(const Me in ie)Me!=="value"&&!Fn(Me)&&i(Y,Me,null,ie[Me],j,H);"value"in ie&&i(Y,"value",null,ie.value,j),(V=ie.onVnodeBeforeMount)&&bt(V,H,y)}de&&Xt(y,null,H,"beforeMount");const ve=zc(F,le);ve?le.beforeEnter(Y):le&&!le.persisted&&(Y[Jc]=!0),s(Y,M,R),((V=ie&&ie.onVnodeMounted)||ve||de)&&Ke(()=>{try{V&&bt(V,H,y),ve&&le.enter(Y),de&&Xt(y,null,H,"mounted")}finally{}},F)},te=(y,M,R,H,F)=>{if(R&&g(y,R),H)for(let j=0;j<H.length;j++)g(y,H[j]);if(F){let j=F.subTree;if(M===j||Rl(j.type)&&(j.ssContent===M||j.ssFallback===M)){const Q=F.vnode;te(y,Q,Q.scopeId,Q.slotScopeIds,F.parent)}}},K=(y,M,R,H,F,j,Q,J,Y=0)=>{for(let V=Y;V<y.length;V++){const ie=y[V]=J?Ot(y[V]):Mt(y[V]);_(null,ie,M,R,H,F,j,Q,J)}},ne=(y,M,R,H,F,j,Q)=>{const J=M.el=y.el;let{patchFlag:Y,dynamicChildren:V,dirs:ie}=M;Y|=y.patchFlag&16;const X=y.props||xe,le=M.props||xe;let de;if(R&&en(R,!1),(de=le.onVnodeBeforeUpdate)&&bt(de,R,M,y),ie&&Xt(M,y,R,"beforeUpdate"),R&&en(R,!0),V&&(!y.dynamicChildren||y.dynamicChildren.length!==V.length)&&(Y=0,Q=!1,V=null),(X.innerHTML&&le.innerHTML==null||X.textContent&&le.textContent==null)&&d(J,""),V?se(y.dynamicChildren,V,J,R,H,mr(M,F),j):Q||T(y,M,J,null,R,H,mr(M,F),j,!1),Y>0){if(Y&16)z(J,X,le,R,F);else if(Y&2&&X.class!==le.class&&i(J,"class",null,le.class,F),Y&4&&i(J,"style",X.style,le.style,F),Y&8){const ve=M.dynamicProps;for(let Me=0;Me<ve.length;Me++){const ke=ve[Me],Oe=X[ke],Pe=le[ke];(Pe!==Oe||ke==="value")&&i(J,ke,Oe,Pe,F,R)}}Y&1&&y.children!==M.children&&d(J,M.children)}else!Q&&V==null&&z(J,X,le,R,F);((de=le.onVnodeUpdated)||ie)&&Ke(()=>{de&&bt(de,R,M,y),ie&&Xt(M,y,R,"updated")},H)},se=(y,M,R,H,F,j,Q)=>{for(let J=0;J<M.length;J++){const Y=y[J],V=M[J],ie=Y.el||Un(Y),X=ie&&(Y.type===W||!on(Y,V)||Y.shapeFlag&198)?h(ie):R;_(Y,V,X,null,H,F,j,Q,!0)}},z=(y,M,R,H,F)=>{if(M!==R){if(M!==xe)for(const j in M)!Fn(j)&&!(j in R)&&i(y,j,M[j],null,F,H);for(const j in R){if(Fn(j))continue;const Q=R[j],J=M[j];Q!==J&&j!=="value"&&i(y,j,J,Q,F,H)}"value"in R&&i(y,"value",M.value,R.value,F)}},q=(y,M,R,H,F,j,Q,J,Y)=>{const V=M.el=y?y.el:c(""),ie=M.anchor=y?y.anchor:c("");let{patchFlag:X,dynamicChildren:le,slotScopeIds:de}=M;de&&(J=J?J.concat(de):de),y==null?(s(V,R,H),s(ie,R,H),K(M.children||[],R,ie,F,j,Q,J,Y)):X>0&&X&64&&le&&y.dynamicChildren&&y.dynamicChildren.length===le.length?(se(y.dynamicChildren,le,R,F,j,Q,J),(M.key!=null||F&&M===F.subTree)&&Il(y,M,!0)):T(y,M,R,ie,F,j,Q,J,Y)},U=(y,M,R,H,F,j,Q,J,Y)=>{M.slotScopeIds=J,y==null?M.shapeFlag&512?F.ctx.activate(M,R,H,Q,Y):P(M,R,H,F,j,Q,Y):S(y,M,Y)},P=(y,M,R,H,F,j,Q)=>{const J=y.component=su(y,H,F);if(Ys(y)&&(J.ctx.renderer=mt),ru(J,!1,Q),J.asyncDep){if(F&&F.registerDep(J,x,Q,j),!y.el){const Y=J.subTree=Re(Ve);A(null,Y,M,R),y.placeholder=Y.el}}else x(J,y,M,R,F,j,Q)},S=(y,M,R)=>{const H=M.component=y.component;if(Fc(y,M,R))if(H.asyncDep&&!H.asyncResolved){M.el=y.el,M.placeholder=y.placeholder,$(H,M,R);return}else H.next=M,H.update();else M.el=y.el,M.placeholder=y.placeholder,H.vnode=M},x=(y,M,R,H,F,j,Q)=>{const J=()=>{if(y.isMounted){let{next:X,bu:le,u:de,parent:ve,vnode:Me}=y;{const gt=Al(y);if(gt){X&&(X.el=Me.el,$(y,X,Q)),gt.asyncDep.then(()=>{const Tt=()=>{y.job.flags&8||(F&&F.pendingBranch?Ke(Tt,F):V())};Tt.flags=48,Ke(Tt,F)});return}}let ke=X,Oe;en(y,!1),X?(X.el=Me.el,$(y,X,Q)):X=Me,le&&ys(le),(Oe=X.props&&X.props.onVnodeBeforeUpdate)&&bt(Oe,ve,X,Me),en(y,!0);const Pe=Vo(y),lt=y.subTree;y.subTree=Pe,_(lt,Pe,h(lt.el||Un(lt)),he(lt),y,F,j),X.el=Pe.el,ke===null&&Vc(y,Pe.el),de&&Ke(de,F),(Oe=X.props&&X.props.onVnodeUpdated)&&Ke(()=>bt(Oe,ve,X,Me),F)}else{let X;const{el:le,props:de}=M,{bm:ve,m:Me,parent:ke,root:Oe,type:Pe}=y,lt=yn(M);en(y,!1),ve&&ys(ve),!lt&&(X=de&&de.onVnodeBeforeMount)&&bt(X,ke,M),en(y,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle(Pe,y.parent?y.parent.type:void 0);const gt=y.subTree=Vo(y);_(null,gt,R,H,y,F,j),M.el=gt.el}if(Me&&Ke(Me,F),!lt&&(X=de&&de.onVnodeMounted)){const gt=M;Ke(()=>bt(X,ke,gt),F)}(M.shapeFlag&256||ke&&yn(ke.vnode)&&ke.vnode.shapeFlag&256)&&y.a&&Ke(y.a,F),y.isMounted=!0,M=R=H=null}};y.scope.on();const Y=y.effect=new Vi(J);y.scope.off();const V=y.update=Y.run.bind(Y),ie=y.job=Y.runIfDirty.bind(Y);ie.i=y,ie.id=y.uid,Y.scheduler=()=>Gs(ie),en(y,!0),V()},$=(y,M,R)=>{M.component=y;const H=y.vnode.props;y.vnode=M,y.next=null,Bc(y,M.props,H,R),Kc(y,M.children,R),wt(),sl(y),Et()},T=(y,M,R,H,F,j,Q,J,Y=!1)=>{const V=y&&y.children,ie=y?y.shapeFlag:0,X=M.children,{patchFlag:le,shapeFlag:de}=M;if(le>0){if(le&128){C(V,X,R,H,F,j,Q,J,Y);return}else if(le&256){N(V,X,R,H,F,j,Q,J,Y);return}}de&8?(ie&16&&pe(V,F,j),X!==V&&d(R,X)):ie&16?de&16?C(V,X,R,H,F,j,Q,J,Y):pe(V,F,j,!0):(ie&8&&d(R,""),de&16&&K(X,R,H,F,j,Q,J,Y))},N=(y,M,R,H,F,j,Q,J,Y)=>{y=y||an,M=M||an;const V=y.length,ie=M.length,X=Math.min(V,ie);let le;for(le=0;le<X;le++){const de=M[le]=Y?Ot(M[le]):Mt(M[le]);_(y[le],de,R,null,F,j,Q,J,Y)}V>ie?pe(y,F,j,!0,!1,X):K(M,R,H,F,j,Q,J,Y,X)},C=(y,M,R,H,F,j,Q,J,Y)=>{let V=0;const ie=M.length;let X=y.length-1,le=ie-1;for(;V<=X&&V<=le;){const de=y[V],ve=M[V]=Y?Ot(M[V]):Mt(M[V]);if(on(de,ve))_(de,ve,R,null,F,j,Q,J,Y);else break;V++}for(;V<=X&&V<=le;){const de=y[X],ve=M[le]=Y?Ot(M[le]):Mt(M[le]);if(on(de,ve))_(de,ve,R,null,F,j,Q,J,Y);else break;X--,le--}if(V>X){if(V<=le){const de=le+1,ve=de<ie?M[de].el:H;for(;V<=le;)_(null,M[V]=Y?Ot(M[V]):Mt(M[V]),R,ve,F,j,Q,J,Y),V++}}else if(V>le)for(;V<=X;)Ce(y[V],F,j,!0),V++;else{const de=V,ve=V,Me=new Map;for(V=ve;V<=le;V++){const Ze=M[V]=Y?Ot(M[V]):Mt(M[V]);Ze.key!=null&&Me.set(Ze.key,V)}let ke,Oe=0;const Pe=le-ve+1;let lt=!1,gt=0;const Tt=new Array(Pe);for(V=0;V<Pe;V++)Tt[V]=0;for(V=de;V<=X;V++){const Ze=y[V];if(Oe>=Pe){Ce(Ze,F,j,!0);continue}let yt;if(Ze.key!=null)yt=Me.get(Ze.key);else for(ke=ve;ke<=le;ke++)if(Tt[ke-ve]===0&&on(Ze,M[ke])){yt=ke;break}yt===void 0?Ce(Ze,F,j,!0):(Tt[yt-ve]=V+1,yt>=gt?gt=yt:lt=!0,_(Ze,M[yt],R,null,F,j,Q,J,Y),Oe++)}const Mo=lt?Yc(Tt):an;for(ke=Mo.length-1,V=Pe-1;V>=0;V--){const Ze=ve+V,yt=M[Ze],xo=M[Ze+1],$o=Ze+1<ie?xo.el||Un(xo):H;Tt[V]===0?_(null,yt,R,$o,F,j,Q,J,Y):lt&&(ke<0||V!==Mo[ke]?re(yt,R,$o,2):ke--)}}},re=(y,M,R,H,F=null)=>{const{el:j,type:Q,transition:J,children:Y,shapeFlag:V}=y;if(V&6){re(y.component.subTree,M,R,H);return}if(V&128){y.suspense.move(M,R,H);return}if(V&64){Q.move(y,M,R,mt);return}if(Q===W){s(j,M,R);for(let X=0;X<Y.length;X++)re(Y[X],M,R,H);s(y.anchor,M,R);return}if(Q===ks){G(y,M,R);return}if(H!==2&&V&1&&J)if(H===0)J.persisted&&!j[nt]?s(j,M,R):(J.beforeEnter(j),s(j,M,R),Ke(()=>J.enter(j),F));else{const{leave:X,delayLeave:le,afterLeave:de}=J,ve=()=>{y.ctx.isUnmounted?o(j):s(j,M,R)},Me=()=>{const ke=j._isLeaving||!!j[nt];j._isLeaving&&j[nt](!0),J.persisted&&!ke?ve():X(j,()=>{ve(),de&&de()})};le?le(j,ve,Me):Me()}else s(j,M,R)},Ce=(y,M,R,H=!1,F=!1)=>{const{type:j,props:Q,ref:J,children:Y,dynamicChildren:V,shapeFlag:ie,patchFlag:X,dirs:le,cacheIndex:de,memo:ve}=y;if((X===-2||V&&V.hasOnce)&&(F=!1),J!=null&&(wt(),Bn(J,null,R,y,!0),Et()),de!=null&&(!y.ctx||y.ctx===M)&&(M.renderCache[de]=void 0),ie&256&&M.ctx.deactivate(y))return;const Me=ie&1&&le,ke=!yn(y);let Oe;if(ke&&(Oe=Q&&Q.onVnodeBeforeUnmount)&&bt(Oe,M,y),ie&6)ce(y.component,R,H);else{if(ie&128){y.suspense.unmount(R,H);return}Me&&Xt(y,null,M,"beforeUnmount"),ie&64?y.type.remove(y,M,R,mt,H):V&&!V.hasOnce&&(j!==W||X>0&&X&64)?pe(V,M,R,!1,!0):(j===W&&X&384||!F&&ie&16)&&pe(Y,M,R),H&&Zt(y)}const Pe=ve!=null&&de==null;(ke&&(Oe=Q&&Q.onVnodeUnmounted)||Me||Pe)&&Ke(()=>{Oe&&bt(Oe,M,y),Me&&Xt(y,null,M,"unmounted"),Pe&&(y.el=null)},R)},Zt=y=>{const{type:M,el:R,anchor:H,transition:F}=y,j=M===W;if(j&&!F){Vt(R,H);return}if(M===ks){D(y),F&&!F.persisted&&F.afterLeave&&F.afterLeave();return}const Q=j?Wn(y):y,J=()=>{j?h(R)&&Vt(R,H):o(R),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(Q&&Q.shapeFlag&1&&F&&!F.persisted){const{leave:Y,delayLeave:V}=F,ie=Q.el,X=()=>Y(ie,J);V?V(ie,J,X):X()}else J()},Vt=(y,M)=>{let R;for(;y!==M;)R=k(y),o(y),y=R;o(M)},ce=(y,M,R)=>{const{bum:H,scope:F,job:j,subTree:Q,um:J,m:Y,a:V}=y;qo(Y),qo(V),H&&ys(H),F.stop(),j?(j.flags|=8,Ce(Q,y,M,R)):Q&&(Q.transition=y.vnode.transition,Ce(Q,y,M,R)),J&&Ke(J,M);const ie=()=>{y.isUnmounted=!0};ie.flags=16,Ke(ie,M)},pe=(y,M,R,H=!1,F=!1,j=0)=>{for(let Q=j;Q<y.length;Q++)Ce(y[Q],M,R,H,F)},he=y=>{if(y.shapeFlag&6)return he(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const M=k(y.anchor||y.el),R=M&&M[uc];return R?k(R):M},Ye=(y,M,R)=>{const H=y&&M._vnode?void 0:y&&y.component?y.component.uid:nu();oc(()=>{y==null?M._vnode&&Ce(M._vnode,null,null,!0):_(M._vnode||null,y,M,null,null,null,R),M._vnode=y},H)},mt={p:_,um:Ce,m:re,r:Zt,mt:P,mc:K,pc:T,pbc:se,n:he,o:e};return{render:Ye,hydrate:void 0,createApp:Rc(Ye)}}function mr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function en({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function zc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Il(e,t,n=!1){const s=e.children,o=t.children;if(ae(s)&&ae(o))for(let i=0;i<s.length;i++){const a=s[i];let c=o[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=o[i]=Ot(o[i]),c.el=a.el),!n&&c.patchFlag!==-2&&Il(a,c)),c.type===Zs&&(c.patchFlag===-1&&(c=o[i]=Ot(c)),c.el=a.el),c.type===Ve&&!c.el&&(c.el=a.el)}}function Yc(e){const t=e.slice(),n=[0];let s,o,i,a,c;const u=e.length;for(s=0;s<u;s++){const p=e[s];if(p!==0){if(o=n[n.length-1],e[o]<p){t[s]=o,n.push(s);continue}for(i=0,a=n.length-1;i<a;)c=i+a>>1,e[n[c]]<p?i=c+1:a=c;p<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=t[a];return n}function Al(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Al(t)}function qo(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Un(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return Un(t.subTree);const n=e.suspense;return n&&n.activeBranch?Un(n.activeBranch):null}const Rl=e=>e.__isSuspense,Jc=Symbol("_deferredEnter");function Qc(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):rc(e)}const W=Symbol.for("v-fgt"),Zs=Symbol.for("v-txt"),Ve=Symbol.for("v-cmt"),ks=Symbol.for("v-stc"),Pt=[];let Xe=null;function v(e=!1){Pt.push(Xe=e?null:[])}function oo(){Pt.pop(),Xe=Pt[Pt.length-1]||null}let Yn=1;function Os(e,t=!1){Yn+=e,e<0&&Xe&&t&&(Xe.hasOnce=!0)}function Ol(e){return e.dynamicChildren=Yn>0?Xe||an:null,oo(),Yn>0&&Xe&&Xe.push(e),e}function m(e,t,n,s,o,i){return Ol(l(e,t,n,s,o,i,!0))}function De(e,t,n,s,o){return Ol(Re(e,t,n,s,o,!0))}function xn(e){return e?e.__v_isVNode===!0:!1}function on(e,t){return e.type===t.type&&e.key===t.key}const Nl=({key:e})=>e??null,Ms=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Se(e)||qe(e)||fe(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function l(e,t=null,n=null,s=0,o=null,i=e===W?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Nl(t),ref:t&&Ms(t),scopeId:il,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:Be};return c?(Ns(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=Se(n)?8:16),Yn>0&&!a&&Xe&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Xe.push(u),u}const Re=Zc;function Zc(e,t=null,n=null,s=0,o=null,i=!1){if((!e||e===$c)&&(e=Ve),xn(e)){const c=zt(e,t,!0);return n&&Ns(c,n),Yn>0&&!i&&Xe&&(c.shapeFlag&6?Xe[Xe.indexOf(e)]=c:Xe.push(c)),c.patchFlag=-2,c}if(au(e)&&(e=e.__vccOpts),t){t=Xc(t);let{class:c,style:u}=t;c&&!Se(c)&&(t.class=be(c)),_e(u)&&(to(u)&&!ae(u)&&(u=Ne({},u)),t.style=et(u))}const a=Se(e)?1:Rl(e)?128:zs(e)?64:_e(e)?4:fe(e)?2:0;return l(e,t,n,s,o,a,i,!0)}function Xc(e){return e?to(e)?Ne({},e):$l(e)?Ne({},e[Vl]||e):e:null}function zt(e,t,n=!1,s=!1){const{props:o,ref:i,patchFlag:a,children:c,transition:u}=e,p=t?eu(o||{},t):o,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:p,key:p&&Nl(p),ref:t&&t.ref?n&&i?ae(i)?i.concat(Ms(t)):[i,Ms(t)]:Ms(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==W?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&zt(e.ssContent),ssFallback:e.ssFallback&&zt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return u&&s&&fn(d,u.clone(d)),d}function st(e=" ",t=0){return Re(Zs,null,e,t)}function Uo(e,t){const n=Re(ks,null,e);return n.staticCount=t,n}function O(e="",t=!1){return t?(v(),De(Ve,null,e)):Re(Ve,null,e)}function Mt(e){return e==null||typeof e=="boolean"?Re(Ve):ae(e)?Re(W,null,e.slice()):xn(e)?Ot(e):Re(Zs,null,String(e))}function Ot(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:zt(e)}function Ns(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ae(t))n=16;else if(typeof t=="object")if(s&65){const o=t.default;o&&(o._c&&(o._d=!1),Ns(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!$l(t)?t._ctx=Be:o===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(fe(t)){if(s&65){Ns(e,{default:t});return}t={default:t,_ctx:Be},n=32}else t=String(t),s&64?(n=16,t=[st(t)]):n=8;e.children=t,e.shapeFlag|=n}function eu(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const o in s)if(o==="class")t.class!==s.class&&(t.class=be([t.class,s.class]));else if(o==="style")t.style=et([t.style,s.style]);else if(js(o)){const i=t[o],a=s[o];a&&i!==a&&!(ae(i)&&i.includes(a))?t[o]=i?[].concat(i,a):a:a==null&&i==null&&!Bs(o)&&(t[o]=a)}else o!==""&&(t[o]=s[o])}return t}function bt(e,t,n,s=null){it(e,t,7,[n,s])}const tu=yl();let Dl=0;function nu(){return Dl}function su(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||tu,i={uid:Dl++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Sa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wl(s,o),emitsOptions:bl(s,o),emit:null,emitted:null,propsDefaults:xe,inheritAttrs:s.inheritAttrs,ctx:xe,data:xe,props:xe,attrs:xe,slots:xe,refs:xe,setupState:xe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Nc.bind(null,i),e.ce&&e.ce(i),i}let We=null;const Pl=()=>We||Be;let Ds,Jn;{const e=Us(),t=(n,s)=>{let o;return(o=e[n])||(o=e[n]=[]),o.push(s),i=>{o.length>1?o.forEach(a=>a(i)):o[0](i)}};Ds=t("__VUE_INSTANCE_SETTERS__",n=>We=n),Jn=t("__VUE_SSR_SETTERS__",n=>Qn=n)}const os=e=>{const t=We;return Ds(e),e.scope.on(),()=>{e.scope.off(),Ds(t)}},Ho=()=>{We&&We.scope.off(),Ds(null)};function Ll(e){return e.vnode.shapeFlag&4}let Qn=!1;function ru(e,t=!1,n=!1){t&&Jn(t);const{props:s,children:o}=e.vnode,i=Ll(e);jc(e,s,i,t),Hc(e,o,n||t);const a=i?ou(e,t):void 0;return t&&Jn(!1),a}function ou(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Cc);const{setup:s}=n;if(s){wt();const o=e.setupContext=s.length>1?lu(e):null,i=os(e),a=rs(s,e,0,[e.props,o]),c=Ai(a);if(Et(),i(),(c||e.sp)&&!yn(e)&&pl(e),c){if(a.then(Ho,Ho),t)return a.then(u=>{Jn(!0);try{Ko(e,u,t)}finally{Jn(!1)}}).catch(u=>{Ks(u,e,0,void 0,!0),e.ssrRender=(p,d)=>d("<!---->")});e.asyncDep=a}else Ko(e,a)}else Fl(e)}function Ko(e,t,n){fe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=el(t)),Fl(e)}function Fl(e,t,n){const s=e.type;e.render||(e.render=s.render||Ct);{const o=os(e);wt();try{wc(e)}finally{Et(),o()}}}const Vl=Symbol(),iu={get(e,t){return je(e,"get",""),t===Vl?e:e[t]}};function lu(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,iu),slots:e.slots,emit:e.emit,expose:t}}function Xs(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(el(Wa(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in qn)return qn[n](e)},has(t,n){return n in t||n in qn}})):e.proxy}function au(e){return fe(e)&&"__vccOpts"in e}const B=(e,t)=>Za(e,t,Qn);function cu(e,t,n){try{Os(-1);const s=arguments.length;return s===2?_e(t)&&!ae(t)?xn(t)?Re(e,null,[t]):Re(e,t):Re(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xn(n)&&(n=[n]),Re(e,t,n))}finally{Os(1)}}const uu="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Lr;const Go=typeof window<"u"&&window.trustedTypes;if(Go)try{Lr=Go.createPolicy("vue",{createHTML:e=>e})}catch{}const jl=Lr?e=>Lr.createHTML(e):e=>e,du="http://www.w3.org/2000/svg",fu="http://www.w3.org/1998/Math/MathML",Rt=typeof document<"u"?document:null,Wo=Rt&&Rt.createElement("template"),pu={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const o=t==="svg"?Rt.createElementNS(du,e):t==="mathml"?Rt.createElementNS(fu,e):n?Rt.createElement(e,{is:n}):Rt.createElement(e);return e==="select"&&s&&s.multiple!=null&&o.setAttribute("multiple",s.multiple),o},createText:e=>Rt.createTextNode(e),createComment:e=>Rt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Rt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,o,i){const a=n?n.previousSibling:t.lastChild;if(o&&(o===i||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===i||!(o=o.nextSibling)););else{Wo.innerHTML=jl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=Wo.content;if(s==="svg"||s==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}t.insertBefore(c,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},jt="transition",On="animation",Zn=Symbol("_vtc"),Bl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hu=Ne({},cl,Bl),vu=e=>(e.displayName="Transition",e.props=hu,e),mu=vu((e,{slots:t})=>cu(pc,gu(e),t)),tn=(e,t=[])=>{ae(e)?e.forEach(n=>n(...t)):e&&e(...t)},zo=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function gu(e){const t={};for(const q in e)q in Bl||(t[q]=e[q]);if(e.css===!1)return t;const{name:n="v",type:s,duration:o,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:p=a,appearToClass:d=c,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:k=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=e,I=yu(o),_=I&&I[0],w=I&&I[1],{onBeforeEnter:A,onEnter:L,onEnterCancelled:G,onLeave:D,onLeaveCancelled:E,onBeforeAppear:Z=A,onAppear:te=L,onAppearCancelled:K=G}=t,ne=(q,U,P,S)=>{q._enterCancelled=S,nn(q,U?d:c),nn(q,U?p:a),P&&P()},se=(q,U)=>{q._isLeaving=!1,nn(q,h),nn(q,g),nn(q,k),U&&U()},z=q=>(U,P)=>{const S=q?te:L,x=()=>ne(U,q,P);tn(S,[U,x]),Yo(()=>{nn(U,q?u:i),At(U,q?d:c),zo(S)||Jo(U,s,_,x)})};return Ne(t,{onBeforeEnter(q){tn(A,[q]),At(q,i),At(q,a)},onBeforeAppear(q){tn(Z,[q]),At(q,u),At(q,p)},onEnter:z(!1),onAppear:z(!0),onLeave(q,U){q._isLeaving=!0;const P=()=>se(q,U);At(q,h),q._enterCancelled?(At(q,k),Xo(q)):(Xo(q),At(q,k)),Yo(()=>{q._isLeaving&&(nn(q,h),At(q,g),zo(D)||Jo(q,s,w,P))}),tn(D,[q,P])},onEnterCancelled(q){ne(q,!1,void 0,!0),tn(G,[q])},onAppearCancelled(q){ne(q,!0,void 0,!0),tn(K,[q])},onLeaveCancelled(q){se(q),tn(E,[q])}})}function yu(e){if(e==null)return null;if(_e(e))return[gr(e.enter),gr(e.leave)];{const t=gr(e);return[t,t]}}function gr(e){return ba(e)}function At(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Zn]||(e[Zn]=new Set)).add(t)}function nn(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Zn];n&&(n.delete(t),n.size||(e[Zn]=void 0))}function Yo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let bu=0;function Jo(e,t,n,s){const o=e._endId=++bu,i=()=>{o===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:c,propCount:u}=_u(e,t);if(!a)return s();const p=a+"end";let d=0;const h=()=>{e.removeEventListener(p,k),i()},k=g=>{g.target===e&&++d>=u&&h()};setTimeout(()=>{d<u&&h()},c+1),e.addEventListener(p,k)}function _u(e,t){const n=window.getComputedStyle(e),s=I=>(n[I]||"").split(", "),o=s(`${jt}Delay`),i=s(`${jt}Duration`),a=Qo(o,i),c=s(`${On}Delay`),u=s(`${On}Duration`),p=Qo(c,u);let d=null,h=0,k=0;t===jt?a>0&&(d=jt,h=a,k=i.length):t===On?p>0&&(d=On,h=p,k=u.length):(h=Math.max(a,p),d=h>0?a>p?jt:On:null,k=d?d===jt?i.length:u.length:0);const g=d===jt&&/\b(?:transform|all)(?:,|$)/.test(s(`${jt}Property`).toString());return{type:d,timeout:h,propCount:k,hasTransform:g}}function Qo(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Zo(n)+Zo(e[s])))}function Zo(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Xo(e){return(e?e.ownerDocument:document).body.offsetHeight}function ku(e,t,n){const s=e[Zn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const ei=Symbol("_vod"),Mu=Symbol("_vsh"),xu=Symbol(""),$u=/(?:^|;)\s*display\s*:/;function Cu(e,t,n){const s=e.style,o=Se(n);let i=!1;if(n&&!o){if(t)if(Se(t))for(const a of t.split(";")){const c=a.slice(0,a.indexOf(":")).trim();n[c]==null&&Dn(s,c,"")}else for(const a in t)n[a]==null&&Dn(s,a,"");for(const a in n){a==="display"&&(i=!0);const c=n[a];c!=null?Eu(e,a,!Se(t)&&t?t[a]:void 0,c)||Dn(s,a,c):Dn(s,a,"")}}else if(o){if(t!==n){const a=s[xu];a&&(n+=";"+a),s.cssText=n,i=$u.test(n)}}else t&&e.removeAttribute("style");ei in e&&((!o||t!==n)&&(e[ei]=i?s.display:""),e[Mu]&&(s.display="none"))}const cs=/\s*!important$/;function Dn(e,t,n){if(ae(n))n.forEach(s=>Dn(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))cs.test(n)?e.setProperty(t,n.replace(cs,""),"important"):e.setProperty(t,n);else{const s=wu(e,t);cs.test(n)?e.setProperty(Yt(s),n.replace(cs,""),"important"):e[s]=n}}const ti=["Webkit","Moz","ms"],yr={};function wu(e,t){const n=yr[t];if(n)return n;let s=ft(t);if(s!=="filter"&&s in e)return yr[t]=s;s=Ni(s);for(let o=0;o<ti.length;o++){const i=ti[o]+s;if(i in e)return yr[t]=i}return t}function Eu(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&Se(s)&&n===s}const ni="http://www.w3.org/1999/xlink";function si(e,t,n,s,o,i=Ca(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n):n==null||i&&!Pi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":vt(n)?String(n):n)}function ri(e,t,n,s,o){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jl(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let a=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Pi(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(o||t)}function ln(e,t,n,s){e.addEventListener(t,n,s)}function Su(e,t,n,s){e.removeEventListener(t,n,s)}const oi=Symbol("_vei");function Tu(e,t,n,s,o=null){const i=e[oi]||(e[oi]={}),a=i[t];if(s&&a)a.value=s;else{const[c,u]=Ru(t);if(s){const p=i[t]=Du(s,o);ln(e,c,p,u)}else a&&(Su(e,c,a,u),i[t]=void 0)}}const Iu=/(Once|Passive|Capture)$/,Au=/^on:?(?:Once|Passive|Capture)$/;function Ru(e){let t,n;for(;(n=e.match(Iu))&&!Au.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Yt(e.slice(2)),t]}let br=0;const Ou=Promise.resolve(),Nu=()=>br||(Ou.then(()=>br=0),br=Date.now());function Du(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const o=n.value;if(ae(o)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const a=o.slice(),c=[s];for(let u=0;u<a.length&&!s._stopped;u++){const p=a[u];p&&it(p,t,5,c)}}else it(o,t,5,[s])};return n.value=e,n.attached=Nu(),n}const ii=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Pu=(e,t,n,s,o,i)=>{const a=o==="svg";t==="class"?ku(e,s,a):t==="style"?Cu(e,n,s):js(t)?Bs(t)||Tu(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Lu(e,t,s,a))?(ri(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&si(e,t,s,a,i,t!=="value")):e._isVueCE&&(Fu(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!Se(s)))?ri(e,ft(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),si(e,t,s,a))};function Lu(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&ii(t)&&fe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const o=e.tagName;if(o==="IMG"||o==="VIDEO"||o==="CANVAS"||o==="SOURCE")return!1}return ii(t)&&Se(n)?!1:t in e}function Fu(e,t){const n=e._def.props;if(!n)return!1;const s=ft(t);return Array.isArray(n)?n.some(o=>ft(o)===s):Object.keys(n).some(o=>ft(o)===s)}const Ps=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ae(t)?n=>ys(t,n):t};function Vu(e){e.target.composing=!0}function li(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cn=Symbol("_assign"),us=Symbol("_initialValue");function _r(e,t,n){return t&&(e=e.trim()),n&&(e=zr(e)),e}const kr={created(e,{modifiers:{lazy:t,trim:n,number:s}},o){e.parentNode&&(e.type==="text"?e[us]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[us]=e.defaultValue.replace(/\r\n?/g,`
`))),e[cn]=Ps(o);const i=s||o.props&&o.props.type==="number";ln(e,t?"change":"input",a=>{a.target.composing||e[cn](_r(e.value,n,i))}),(n||i)&&ln(e,"change",()=>{e.value=_r(e.value,n,i)}),t||(ln(e,"compositionstart",Vu),ln(e,"compositionend",li),ln(e,"change",li))},mounted(e,{value:t,modifiers:{trim:n,number:s}}){const o=t??"",i=e[us];delete e[us],i!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==i?e[cn](_r(e.value,n,s)):e.value=o},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:s,trim:o,number:i}},a){if(e[cn]=Ps(a),e.composing)return;const c=(i||e.type==="number")&&!/^0\d/.test(e.value)?zr(e.value):e.value,u=t??"";if(c===u)return;const p=e.getRootNode();(p instanceof Document||p instanceof ShadowRoot)&&p.activeElement===e&&e.type!=="range"&&(s&&t===n||o&&e.value.trim()===u)||(e.value=u)}},ju={created(e,{value:t},n){e.checked=Mn(t,n.props.value),e[cn]=Ps(n),ln(e,"change",()=>{e[cn](Bu(e))})},beforeUpdate(e,{value:t,oldValue:n},s){e[cn]=Ps(s),t!==n&&(e.checked=Mn(t,s.props.value))}};function Bu(e){return"_value"in e?e._value:e.value}const qu=["ctrl","shift","alt","meta"],Uu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>qu.some(n=>e[`${n}Key`]&&!t.includes(n))},$t=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((o,...i)=>{for(let a=0;a<t.length;a++){const c=Uu[t[a]];if(c&&c(o,t))return}return e(o,...i)}))},Hu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ai=(e,t)=>{const n=e._withKeys||(e._withKeys={}),s=t.join(".");return n[s]||(n[s]=(o=>{if(!("key"in o))return;const i=Yt(o.key);if(t.some(a=>a===i||Hu[a]===i))return e(o)}))},Ku=Ne({patchProp:Pu},pu);let ci;function Gu(){return ci||(ci=Gc(Ku))}const Wu=((...e)=>{const t=Gu().createApp(...e),{mount:n}=t;return t.mount=s=>{const o=Yu(s);if(!o)return;const i=t._component;!fe(i)&&!i.render&&!i.template&&(i.template=o.innerHTML),o.nodeType===1&&(o.textContent="");const a=n(o,!1,zu(o));return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),a},t});function zu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Yu(e){return Se(e)?document.querySelector(e):e}const Ju="./";function Ae(e){return Ju+"art/"+e}const ds=Jt({});function ze(e){if(!e)return"no";const t=Ae(e),n=ds[t];if(n)return n;ds[t]="pending";const s=new Image;return s.onload=()=>{ds[t]="ok"},s.onerror=()=>{ds[t]="no"},s.src=t,"pending"}const Je=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function $e(e){return Je.find(t=>t.id===e)||Je[0]}const ql={taro:[["荔浦芋泥","焦糖杏仁薄脆"]],matcha:[["春日抹茶粉","蜜红豆"]],mango:[["台农芒果泥","轻盈慕斯"]],tiramisu:[["马斯卡彭","浓缩咖啡液"]],fig:[["波姬红无花果","轻奶油"]],seasonal:[["四季时令鲜果","定制夹心"]],custom:[["双层承重胚","手工定制裱花"]],festival:[["传统红曲","节庆装饰"],["栗蓉","节庆装饰"]],signature:[["高山秋栗","金桂冻","戚风胚"]]},_n=[{id:"base",name:"基础烘焙包",price:20,month:1},{id:"dairy",name:"乳制基底",price:10,month:1},{id:"decor",name:"裱花装饰料",price:5,month:1},{id:"strawberry",name:"鲜草莓",price:10,month:1},{id:"cocoa",name:"可可粉",price:10,month:1},{id:"taro",name:"荔浦芋泥",price:10,month:3},{id:"crisp",name:"焦糖杏仁薄脆",price:10,month:3},{id:"matcha",name:"春日抹茶粉",price:10,month:4},{id:"redbean",name:"蜜红豆",price:10,month:4},{id:"mango",name:"台农芒果泥",price:10,month:6},{id:"mascarpone",name:"马斯卡彭",price:10,month:8},{id:"coffee",name:"浓缩咖啡液",price:10,month:8},{id:"fig",name:"波姬红无花果",price:10,month:10},{id:"seasonal",name:"四季时令鲜果",price:10,month:12},{id:"filling",name:"定制夹心",price:10,month:12},{id:"redrice",name:"传统红曲",price:10,month:20},{id:"chestnut",name:"高山秋栗",price:10,month:20},{id:"osmanthus",name:"金桂冻",price:10,month:26}],Tn={plain:{base:1,dairy:1},strawberry:{base:1,dairy:1,strawberry:1},chocolate:{base:1,dairy:1,cocoa:1},taro:{base:1,dairy:1,taro:1,crisp:1},matcha:{base:1,dairy:1,matcha:1,redbean:1},mango:{base:1,dairy:1,mango:1},tiramisu:{base:1,mascarpone:1,coffee:1},fig:{base:1,dairy:1,fig:1},seasonal:{base:1,dairy:1,seasonal:1,filling:1},custom:{base:2,dairy:1,filling:1,decor:1},festival:{base:1,dairy:1,chestnut:1,decor:1},signature:{base:1,dairy:1,chestnut:1,osmanthus:1}},io=[{id:"greenery",name:"窗边绿植",category:"绿植",cost:600,shopLevel:1},{id:"lamp",name:"暖黄吊灯",category:"灯具",cost:1200,shopLevel:1},{id:"tables",name:"木桌与藤椅",category:"桌椅",cost:1800,shopLevel:2},{id:"festival",name:"节日花环",category:"节日摆件",cost:2500,shopLevel:3}],lo=[{id:"chen",name:"陈奶奶",month:2,day:2,product:"plain",preference:"每次都买原味奶油蛋糕，给小孙子也带一份。",stories:["“我家小孙子指定要吃你们家的味道。”陈奶奶说，家里三代人的生日蛋糕全是在林记订的。","她看着林念接过店，也和苏晴一起盼着林记的老味道走出栖云镇。"]},{id:"zhang",name:"张叔",month:28,day:4,product:"signature",preference:"桂花栗子蛋糕刚上架时，总会来买一块。",stories:["外婆留下的配方写着：“栗子甜则少放糖，桂花香淡则后撒。”","老街坊们怀念的，是秋天打开蛋糕盒时那股桂花与板栗香；如今，林念把它做成了招牌。"]}],Qu={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},$n=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐鸢",nick:"阿鸢",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶星河",nick:"星河",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function Cn(e){return $n.find(t=>t.id===e)}const wn=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],Xn=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function Zu(e){return Xn.find(t=>t.lv===e)||Xn[0]}const Ul=[{id:"oven",name:"烤箱",note:"产能",desc:"好烤箱能一次进更多盘，出品也更稳。",tiers:[{cost:2500,value:40,text:"产能 +40"},{cost:7500,value:90,text:"产能 +90"},{cost:22e3,value:150,text:"产能 +150"}]},{id:"mixer",name:"搅拌机",note:"省力",desc:"奶油和面糊交给它，自己少使点劲。",tiers:[{cost:2e3,value:.1,text:"自付体力 -10%"},{cost:6500,value:.2,text:"自付体力 -20%"},{cost:19e3,value:.3,text:"自付体力 -30%"}]},{id:"fridge",name:"冷藏柜",note:"剩货",desc:"当天没卖完的，第二天还能打折卖掉一部分。",tiers:[{cost:1800,value:.1,text:"剩货回收 +10%"},{cost:5500,value:.18,text:"剩货回收 +18%"},{cost:16e3,value:.26,text:"剩货回收 +26%"}]},{id:"display",name:"展示柜",note:"客流",desc:"摆得好看，路过的人就更愿意进来。",tiers:[{cost:3e3,value:.06,text:"需求 +6%"},{cost:9e3,value:.13,text:"需求 +13%"},{cost:3e4,value:.2,text:"需求 +20%"}]},{id:"packing",name:"包装台",note:"定制",desc:"定制单拼的就是最后那一下体面。",tiers:[{cost:2600,value:.1,text:"定制收入 +10%"},{cost:7500,value:.22,text:"定制收入 +22%"},{cost:24e3,value:.35,text:"定制收入 +35%"}]},{id:"warehouse",name:"仓库",note:"采购",desc:"一次能囤更多原料，少跑几趟。",tiers:[{cost:1600,value:6,text:"单次采购 +6 份"},{cost:5e3,value:12,text:"单次采购 +12 份"},{cost:15e3,value:20,text:"单次采购 +20 份"}]},{id:"cashier",name:"收银系统",note:"售价",desc:"扫码点单，客单价能往上提一点。",tiers:[{cost:2400,value:.03,text:"售价 +3%"},{cost:7e3,value:.06,text:"售价 +6%"},{cost:26e3,value:.1,text:"售价 +10%"}]}];function ao(e){return Ul.find(t=>t.id===e)}function ui(e,t){return e.unlocked.filter(n=>(e.levels[n]||1)>=t).length}function Xu(e){return e.unlocked.length?e.unlocked.reduce((t,n)=>t+(e.levels[n]||1),0)/e.unlocked.length:1}function ed(e){return Math.max(0,...Object.values(e.partnerSkill))}function td(e,t){return Object.values(e.partnerTrust).filter(n=>n>=t).length}const En=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>ui(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>Xu(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>ui(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>ed(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>td(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function nd(e){return En.find(t=>e>=t.from&&e<=t.to)||En[0]}const Hl={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},fs={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:Ae("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:Ae("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:Ae("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:Ae("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:Ae("shop-exterior.webp")}},sd=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function Mr(e){return sd[(e-1)%12]}const rd=`# 《林记烘焙》完整文游剧情文案 V5.0（橙光对话体标准版）\r
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
`,kn={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐鸢:"唐鸢",阿鸢:"唐鸢",叶星河:"叶星河",星河:"叶星河",陈奶奶:"陈奶奶",张叔:"张叔",李婶:"李婶",赵叔:"赵叔",沈知夏:"沈知夏",许佳宁:"许佳宁",沈妍:"沈妍",顾客:"顾客"},xs={周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe"},di={xiaoyu:"小雨",zhiyao:"知遥",kexin:"阿鸢",qinghe:"星河"},od={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},id={一:1,二:2,三:3,四:4,五:5,六:6},ld=/^(林念|苏晴|林暖|周雨桐|许知遥|唐鸢|叶星河|陈奶奶|张叔|李婶|赵叔|沈知夏|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function Fr(e,t){if(!e)return!0;if(e.trust){for(const n of Object.keys(e.trust))if((t.partnerTrust[n]||0)<e.trust[n])return!1}if(e.momBond&&(t.momBond||0)<e.momBond)return!1;if(e.played){for(const n of e.played)if(!t.played.some(s=>s.indexOf(n)>=0))return!1}if(e.style){const n=t.style||{},s=n[e.style.id]||0;if(s<e.style.min)return!1;const o=Object.keys(n).filter(i=>i!==e.style.id).map(i=>n[i]||0);if(s-Math.max(0,...o)<e.style.lead)return!1}return!0}function $s(e,t){const n=[];for(const s of e||[])s.t==="cond"?n.push(...$s(Fr(s.test,t)?s.then:s.else,t)):s.t==="choice"?n.push({...s,options:(s.options||[]).map(o=>({...o,branch:$s(o.branch||[],t)})),after:$s(s.after||[],t)}):n.push(s);return n}function ps(e,t,n){e.lastIndex=0;let s=e.exec(t);for(;s;)n(s),s=e.exec(t)}function ad(e,t){const n=[];if(!e)return n;ps(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g,e,o=>{n.push({k:"style",id:o[1],v:Number(o[2]),label:od[o[1]]+" +"+o[2]})}),ps(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g,e,o=>{const i=kn[o[1]];n.push({k:"trust",id:xs[i],v:Number(o[2]),label:o[1]+"信赖 +"+o[2]})}),ps(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g,e,o=>{const i=o[1]?kn[o[1]]:t,a=xs[i];a&&n.push({k:"skill",id:a,v:Number(o[2])/10,label:(o[1]||di[a])+"专业 +"+o[2]})});const s=Object.keys(kn);return ps(/信赖度\s*\+\s*(\d+)/g,e,o=>{const i=e.slice(0,o.index);if(s.some(c=>i.endsWith(c)))return;const a=xs[t];a&&(n.some(c=>c.k==="trust"&&c.id===a)||n.push({k:"trust",id:a,v:Number(o[1]),label:di[a]+"信赖 +"+o[1]}))}),/顾客忠诚度增加|忠诚度提升/.test(e)&&n.push({k:"loyalty",v:4,label:"忠诚 +4"}),n}function Pn(e){const t={};let n=!1;const s=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);s&&(t.trust={[xs[kn[s[1]]]]:Number(s[2])},n=!0);const o=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);o&&(t.momBond=Number(o[1]),n=!0);const i=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);i&&(t.style={id:i[1],min:Number(i[2]),lead:15},n=!0);const a=e.match(/领先[^0-9]{0,4}(\d+)/);a&&t.style&&(t.style.lead=Number(a[1]));const c=e.match(/M(\d+)/);return c&&/已完成|完成M/.test(e)?(t.played=["M"+c[1]],n=!0):/原创配方研发剧情/.test(e)?(t.played=["M21"],n=!0):/个人作品展/.test(e)&&(t.played=["M25"],n=!0),n?t:null}function Ln(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function hs(e,t){const n=e.trim();if(!n||/^\|/.test(n))return;if(n.startsWith("旁白")){const o=n.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);t.push({t:"nar",who:o&&o[1]?o[1]:"",text:Ln(o?o[2]:n)});return}if(/^\*\*[^*]+\*\*$/.test(n)){t.push({t:"nar",text:Ln(n.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(n)||/^\*\(.+\)\*$/.test(n)){t.push({t:"note",text:n.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const s=n.match(ld);if(s){t.push({t:"say",who:kn[s[1]],emo:s[2]||"",text:Ln(s[4].replace(/\*\*/g,""))});return}t.push({t:"nar",text:Ln(n.replace(/\*\*/g,""))})}function at(e,t={}){const n=[],s={ids:[],month:null,kind:null,test:null,title:"",cond:null};let o="main",i=n,a=null,c=null,u=null,p=null,d=null,h=0,k=!0;const g=()=>o==="branch"&&c?c.branch:o==="then"&&u?u.then:o==="else"&&u?u.else:o==="inline"&&d?d.then:i,I=_=>g().push(_);for(const _ of e){const w=_.trim();if(!w){k=!0;continue}if(w.startsWith(">")){let D=w.replace(/^>+\s*/,"").trim();if(!D)continue;const E=D.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(E&&/玩家选择节点/.test(E[1])){o="main",d=null;const te=E[1],K=te.match(/节点\s*([\d.\-]+)/),ne=te.match(/[：:]\s*(.+)$/);a={t:"choice",node:K?K[1]:"",prompt:ne?ne[1].trim():te,options:[],after:[]},I(a);continue}const Z=D.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(Z&&a){const te=ud([D,a.prompt].join(" ")),K=Z[3]||"";a.options.push({label:Z[2].trim(),hint:K.replace(/^[（(]|[）)]$/g,"").trim(),gains:ad(K,te),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(D)&&a&&(a.note=D.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const L=w.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(L){const D=L[1],E=(L[2]||"").replace(/^[：:]\s*/,"").trim();if(D.indexOf("事件ID")>=0){D.split("｜").forEach(q=>{const U=q.search(/[：:]/);if(U<0)return;const P=q.slice(0,U).trim(),S=q.slice(U+1).trim();if(P==="事件ID")s.ids.push(S);else if(P==="触发月份"||P==="触发时间"){const x=S.match(/M(\d+)/);x&&(s.month=Number(x[1]))}else if(P==="触发条件"){/新游戏开始|开始游戏/.test(S)&&(s.kind="prologue");const x=Pn(S);x&&(s.cond=x)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(D))continue;if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(D)){I({t:"scene",text:D.replace(/^场景\s*[：:]\s*/,"")}),E&&I({t:"nar",text:E});continue}const Z=D.match(/^CG\s*[：:]\s*(.+)$/i);if(Z){I({t:"cg",key:Z[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(D)){I({t:"cgend"});continue}const te=D.match(/^分支([A-Z])(?:[：:](.*))?$/);if(te&&a){const z=te[1].charCodeAt(0)-65;for(;a.options.length<=z;)a.options.push({label:"选项"+String.fromCharCode(65+a.options.length),hint:"",gains:[],branch:[]});c=a.options[z],o="branch",d=null,E&&I({t:"nar",text:Ln(E)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(D)){o="main",d=null,a&&(i=a.after),E&&I({t:"nar",text:E});continue}const K=D.match(/^高养成解锁分支[：:]\s*(.*)$/),ne=D.match(/^普通保底分支[：:]\s*(.*)$/);if(K||ne){if(K)d=null,u={t:"cond",test:Pn(K[1])||{},then:[],else:[]},p=u,n.push(u),o="then";else{const z=p&&p.else.length===0?p:null;z?(u=z,o="else"):o="main"}continue}if(/^若/.test(D)){const z=Pn(D);z&&(u={t:"cond",test:z,then:[],else:[]},n.push(u),d=u,o="inline",h=0,k=!1,E&&hs(E,g()));continue}const se=D.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);if(se){const z=Pn(se[1]),q=se[1].replace(/[（(]\s*若[^）)]*[）)]/g,"").trim();I({t:"act",text:q,test:z||null}),E&&I({t:"nar",text:E});continue}E&&I({t:"nar",text:E});continue}const G=w.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(G&&/协助|结局|相册|档案/.test(G[2])){o="main",d=null,I({t:"scene",text:G[2].replace(/[：:]\s*$/,"")});continue}if(o==="inline"&&d){const D=[];hs(w,D);const E=D[0],Z=E&&E.t==="nar";if(k&&h>0&&Z){o="main",d=null,hs(w,i),k=!1;continue}D.forEach(te=>d.then.push(te)),k&&(h+=1),k=!1;continue}hs(w,g()),k=!1}return a&&a.options.forEach(_=>{_.branch.length||(_.branch=[])}),s.title=t.title||"",{beats:cd(n),meta:s}}function cd(e){const t=[];let n=0;for(;n<e.length;){const s=e[n];if(s.t==="act"&&s.test){let o=n+1;for(;o<e.length&&e[o].t!=="act";)o++;t.push({t:"cond",test:s.test,then:e.slice(n,o),else:[]}),n=o}else t.push(s),n++}return t}function ud(e){const t=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);return t?kn[t[1]]:""}function dd(e){const t={level:1,text:"",lines:[],children:[]},n=[t];for(const s of e.split(/\r?\n/)){const o=s.match(/^(#{1,4})\s+(.*)$/);if(o){const i=o[1].length;for(;n.length>1&&n[n.length-1].level>=i;)n.pop();const a={level:i,text:o[2].trim(),lines:[],children:[]};n[n.length-1].children.push(a),n.push(a)}else n[n.length-1].lines.push(s)}return t}function fd(e){const t=dd(e),n=[],s={},o={},i={},a={},c={},u=[];let p=0;const d=g=>(g.order=p++,n.push(g),g),h=[];for(const g of t.children)g.level===1?h.push(...g.children):h.push(g);for(const g of h){const I=g.text||"";if(/^序幕/.test(I)){const{beats:_,meta:w}=at(g.lines,{title:"序幕 · 回家"});d({id:w.ids[0]||"EVT_PROLOGUE_01",ids:w.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:_});continue}if(/^第[一二三四五六]章/.test(I)){for(const _ of g.children){const w=_.text,A=/结算/.test(w)&&/(月末|目标)/.test(w),L=w.match(/M(\d+)/),G=L?Number(L[1]):null;if(A&&!L)continue;if(A){const K=pi(w,G),ne=at(_.lines,{title:w}),se=ne.beats;if(ne.meta.ids.length&&d({id:ne.meta.ids[0],ids:ne.meta.ids,title:vs(w),chapter:I,month:G,kind:"main",test:ne.meta.cond,beats:se}),!K)continue;s[K]=s[K]||{pass:[],failId:"",failBeats:[]};for(const z of _.children){const q=ms(z.text);if(!q)continue;const U=at(z.lines,{title:z.text});q==="pass"?s[K].pass=U.beats:(s[K].failBeats=U.beats,s[K].failId=U.meta.ids[0]||"",U.meta.ids.length&&d({id:U.meta.ids[0],ids:U.meta.ids,title:fi(z.text,U.beats),chapter:I,month:null,kind:"short",test:null,beats:U.beats}))}continue}const{beats:D,meta:E}=at(_.lines,{title:w});if(!E.ids.length)continue;let Z=E.cond,te=G??E.month;Z&&!te&&(te=E.month);for(const K of _.children){if(ms(K.text))continue;const ne=at(K.lines,{title:K.text});ne.beats.length&&(D.push({t:"scene",text:K.text.replace(/^【|】$/g,"")}),D.push(...ne.beats))}if(d({id:E.ids[0],ids:E.ids,title:vs(w),chapter:I,month:te,kind:"main",test:Z,beats:D}),_.children.length){const K=pi(w,te),ne=_.children.filter(se=>ms(se.text));if(K&&ne.length){s[K]=s[K]||{pass:[],failId:"",failBeats:[]};for(const se of ne){const z=ms(se.text),q=at(se.lines,{title:se.text});z==="pass"?s[K].pass=q.beats:(s[K].failBeats=q.beats,s[K].failId=q.meta.ids[0]||"",q.meta.ids.length&&d({id:q.meta.ids[0],ids:q.meta.ids,title:fi(se.text,q.beats),chapter:I,month:null,kind:"short",test:null,beats:q.beats}))}}}}continue}if(/^附篇一/.test(I)){for(const _ of g.children){const{beats:w,meta:A}=at(_.lines,{title:_.text}),L=A.cond||Pn(_.text)||{};d({id:A.ids[0]||"EVT_STYLE_"+p,ids:A.ids,title:vs(_.text),chapter:I,month:null,kind:"style",test:L,beats:w})}continue}if(/^附篇二/.test(I)){for(const _ of g.children){const w=_.text.match(/^M(\d+)\s*[｜|]\s*(.+)$/);if(!w)continue;const A=Number(w[1]),L=_.lines.filter(Z=>!/^\*\*第.+章互动/.test(Z.trim())),G=at(L,{title:w[2]}),D=G.meta.ids[0]||"EVT_FRIEND_M"+A,E={id:D,ids:G.meta.ids.length?G.meta.ids:[D],title:w[2],chapter:"与苏晴的每月互动",month:A,kind:"friend",test:null,beats:G.beats};o[A]=E,d(E)}continue}if(/^附篇三/.test(I)){let _=0;for(const w of g.children){const A=w.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);if(!A)continue;const L=at(w.lines,{title:A[2]}),G=L.meta.ids[0]||"EVT_TUTORIAL_"+A[1];d({id:G,ids:L.meta.ids.length?L.meta.ids:[G],title:A[2],chapter:"新手教程",month:null,kind:"tutorial",order:_++,test:null,beats:L.beats})}continue}if(/^附篇三/.test(I)){let _=0;for(const w of g.children){const A=w.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);if(!A)continue;const L=at(w.lines,{title:A[2]}),G=L.meta.ids[0]||"EVT_TUTORIAL_"+A[1];d({id:G,ids:L.meta.ids.length?L.meta.ids:[G],title:A[2],chapter:"新手教程",month:null,kind:"tutorial",order:_++,test:null,beats:L.beats})}continue}if(/^第十三章/.test(I)){for(const _ of g.children){if(/^13\.7/.test(_.text)){for(const L of _.children){const G=pd(L.text);if(!G)continue;const D=[];for(const E of L.lines){const Z=E.trim();if(/^【触发条件/.test(Z))continue;const te=Z.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);te?D.push({title:te[1],text:(te[2]||"").trim()}):D.length&&Z&&!/^[-*#]/.test(Z)&&(D[D.length-1].text+=(D[D.length-1].text?`
`:"")+Z)}D.length&&(c[G]=D)}continue}const{beats:w,meta:A}=at(_.lines,{title:_.text});A.ids.length&&d({id:A.ids[0],ids:A.ids,title:vs(_.text),chapter:I,month:null,kind:"final",test:null,beats:w})}continue}if(/^第十四章/.test(I)){for(const _ of g.children)for(const w of _.lines){const A=w.trim(),L=A.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(L){const E=L[3].replace(/`/g,"").trim().replace(/^cake-/,"");E&&(i[E]={hint:L[4].trim(),flavor:L[5].trim()});continue}const G=A.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);G&&(a[G[1]]=G[2])}continue}}n.length||u.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const k={events:n,stages:s,friend:o,codex:i,cityText:a,partnerEndings:c,warnings:u};return k.find=g=>n.find(I=>I.id===g||(I.ids||[]).includes(g))||null,k}function vs(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function fi(e,t){const n=e.match(/《(.+?)》/);if(n)return n[1];const s=t.find(o=>o.t==="nar");return s?s.text.slice(0,12):e}function ms(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function pi(e,t){const n=e.match(/第([一二三四五六])阶段/);return n?id[n[1]]:t?Math.ceil(t/6):null}function pd(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐鸢/.test(e)?"kexin":/叶星河/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}const Ie=fd(rd);if(typeof console<"u"){const e={};Ie.events.forEach(s=>e[s.kind]=(e[s.kind]||0)+1);let t=0,n=0;Ie.events.forEach(s=>{(s.beats||[]).forEach(o=>{o.t==="choice"&&(t+=1,n+=o.options.length)})}),console.log("[剧情] 已加载 "+Ie.events.length+" 个事件（"+Object.keys(e).map(s=>s+" "+e[s]).join("，")+"），友情互动 "+Object.keys(Ie.friend).length+" 段，阶段结算 "+Object.keys(Ie.stages).length+" 组，选择 "+t+" 处 / "+n+" 项"),Ie.warnings.length&&Ie.warnings.forEach(s=>console.warn("[剧情] "+s))}const hd=["清爽果香","绵甜柔和","醇厚浓香"],vd=["偏少","均衡","偏多"],md=["简约点缀","日常装饰","丰富装饰"],gd=[72,90,100],Kl=[100,90,72],co={taro:{direction:1,ratio:0,process:1,theme:"做出绵软、微甜，又有清脆夹心的层次。",focus:"芋泥夹层要先冷却，薄脆尽量靠近售卖时再组合。",ratioLabel:"芋泥甜度",processes:["趁热把薄脆拌进芋泥","芋泥冷却后分层夹入薄脆","把薄脆压碎拌入奶油"],distractors:["蜜红豆","轻盈慕斯"]},matcha:{direction:0,ratio:0,process:1,theme:"让茶香清新微苦，红豆甜味恰好托住回甘。",focus:"抹茶少量多次加入，避免高温久烤带出苦味。",ratioLabel:"抹茶用量",processes:["一次加入全部抹茶并延长烘烤","分次拌入抹茶并缩短烘烤","先加红豆再用热奶油冲抹茶"],distractors:["台农芒果泥","动物奶油"]},mango:{direction:0,ratio:1,process:2,theme:"突出成熟芒果的清香，同时保留慕斯的轻盈。",focus:"尝过果泥再调甜度，冷藏定型后再装饰。",ratioLabel:"果泥与慕斯比例",processes:["慕斯远多于果泥","果泥和慕斯大致平衡","大量果泥直接拌入温热慕斯"],distractors:["蜜红豆","轻奶油"]},tiramisu:{direction:2,ratio:1,process:1,theme:"咖啡香醇厚，但奶酪仍要保留轻柔回甘。",focus:"手指饼干快速蘸取咖啡液，留住内部结构。",ratioLabel:"咖啡液浓度",processes:["让饼干长时间浸泡","快速蘸取后分层冷藏","用咖啡液直接冲入奶酪"],distractors:["可可胚","金桂冻"]},fig:{direction:0,ratio:0,process:2,theme:"让无花果的清甜成为主角，奶油只做轻柔衬托。",focus:"选熟度合适的无花果，最后轻放在冷却奶油上。",ratioLabel:"无花果用量",processes:["无花果和奶油长时间打发","烤前放入无花果","奶油冷却后再铺鲜果"],distractors:["浓缩咖啡液","高山秋栗"]},seasonal:{direction:0,ratio:1,process:1,theme:"让当季水果有层次，甜度不盖住果香。",focus:"按季节更换鲜果，果肉与夹心分层组合。",ratioLabel:"鲜果与夹心比例",processes:["将所有水果打成同一层果泥","保留果肉并与夹心分层","增加糖浆并把水果提前烤干"],distractors:["传统红曲","蜜红豆"]},custom:{direction:1,ratio:1,process:0,theme:"按顾客想要的口味设计，同时保证切分时结构稳定。",focus:"先确认承重胚，再固定夹层和手工裱花。",ratioLabel:"夹层与蛋糕胚比例",processes:["使用双层承重胚，逐层固定裱花","把全部夹层叠在单层软胚上","先装饰外层再填入夹心"],distractors:["金桂冻","波姬红无花果"]},festival:{direction:1,ratio:1,process:2,theme:"在节日氛围里保留熟悉的团圆风味。",focus:"传统红曲或栗蓉搭配节庆装饰，出炉冷却后再包装。",ratioLabel:"馅料与蛋糕胚比例",processes:["热蛋糕出炉后立刻装入礼盒","把装饰和馅料一同长时间烘烤","冷却定型后装饰并包装"],distractors:["鲜草莓","浓缩咖啡液"]},signature:{direction:2,ratio:0,process:1,theme:"复原外婆的桂花栗子蛋糕，让秋栗醇厚、金桂清雅。",focus:"栗子甜则少放糖，桂花冻冷却后分层夹入，装盒前现撒金桂。",ratioLabel:"额外糖量",processes:["趁热把金桂干花拌进栗子泥","桂花冻冷却后作为独立夹层","桂花冻趁热浸入戚风胚"],distractors:["桂花蜜","动物奶油"]}},Cs={plain:{question:"原味奶油蛋糕切开后有些干，奶油也盖住了戚风的香气。",options:["增加糖浆并厚涂奶油","缩短烘烤，并减薄奶油层","延长烘烤，让外皮更脆"],correct:1,feedback:"先守住戚风的湿润度，再让奶油薄薄衬托。"},strawberry:{question:"顾客觉得奶油有些腻，草莓的酸甜味不够明显。",options:["减少奶油，增加草莓夹层","延长蛋糕胚烘烤时间","改变表面装饰颜色"],correct:0,feedback:"把奶油减薄，并增加草莓果味层。"},chocolate:{question:"巧克力蛋糕入口偏苦，回味也显得厚重。",options:["加入更多纯可可粉","减少甘纳许并调和可可浓度","增加烘烤时间让水分散尽"],correct:1,feedback:"适当收住甘纳许和可可的浓度，保留香气即可。"},taro:{question:"芋泥薄脆放一会儿就不脆了。",options:["把薄脆提前拌进热芋泥","芋泥冷却后分层，临近售卖再组合","把薄脆泡进奶油里"],correct:1,feedback:"减少水分接触，让薄脆临近售卖时再入层。"},matcha:{question:"抹茶的苦味有些突出，蜜红豆也不明显。",options:["增加红豆层并略减抹茶","增加抹茶粉并减少红豆","把红豆打成糖浆淋面"],correct:0,feedback:"略减抹茶浓度，让蜜红豆的甜味接住茶香。"},mango:{question:"芒果慕斯吃起来偏腻，果香不够明亮。",options:["增加慕斯比例","使用成熟芒果泥并平衡慕斯比例","延长烘烤芒果泥的时间"],correct:1,feedback:"用熟芒果的果香提亮口味，保持慕斯轻盈。"},tiramisu:{question:"提拉米苏底层的手指饼干湿软散开了。",options:["延长咖啡浸泡时间","快速蘸咖啡液后立即分层冷藏","增加咖啡液并拌入奶酪"],correct:1,feedback:"饼干快速蘸取咖啡液即可，避免吸水过多。"},fig:{question:"无花果奶油看起来漂亮，但吃不出鲜果香。",options:["增加奶油厚度","烘烤时加入更多无花果","冷却后铺上新鲜无花果"],correct:2,feedback:"最后加入新鲜果肉，保留无花果的香气和口感。"},seasonal:{question:"季节水果蛋糕层次混在一起，果味不够清楚。",options:["保留果肉并和夹心分层","把水果全部打成泥","增加糖浆覆盖水果"],correct:0,feedback:"保留果肉口感，再用独立夹层表现季节变化。"},custom:{question:"生日定制蛋糕切分时夹层容易倾斜。",options:["改用双层承重胚并逐层固定","增加顶部裱花重量","使用单层软胚并增加夹心"],correct:0,feedback:"先稳定承重结构，再逐层填入夹心和装饰。"},festival:{question:"节日限定蛋糕节庆感很足，味道却有些平淡。",options:["增加礼盒装饰层数","选择红曲或栗蓉馅料，冷却后再包装","延长礼盒内的回温时间"],correct:1,feedback:"用红曲或栗蓉明确节日风味，并在冷却后包装。"},signature:{question:"栗子甜度合适，但桂花香气不够鲜明。",options:["增加糖量并提前烤入桂花","桂花冻冷却分层，装盒前现撒金桂","把桂花干花打碎混进戚风胚"],correct:1,feedback:"沿用外婆手记：桂花冻冷却分层，装盒前再现撒金桂。"}};function Ls(e){return[...new Set(Array.isArray(e)?e:[])].sort()}function Gl(e,t){const n=Ls(t);return(ql[e]||[]).some(s=>{const o=Ls(s);return o.length===n.length&&o.every((i,a)=>i===n[a])})}function yd({coreCorrect:e,directionCorrect:t,ratioOffset:n,processCorrect:s,decoration:o}){const i=[];return e||i.push("核对图鉴中的核心食材，选齐后再做风味判断。"),t||i.push("风味方向和产品主题不太协调。"),n&&i.push("调整主料比例，让主要食材的味道更突出。"),s||i.push("工艺还需要照顾这款蛋糕的口感结构。"),o===2&&i.push("装饰丰富，外观加分；制作成本也相应提高。"),o===0&&i.push("简约装饰控制了成本，可以再考虑提升展示效果。"),i.length||i.push("四项都很协调，可以考虑正式上架。"),i}function bd(e,t){const n=co[e];if(!n)return null;const s=Gl(e,t.ingredients),o=t.direction===n.direction,i=Math.abs(t.ratio-n.ratio),a=t.process===n.process,c=t.decoration;if(![0,1,2].includes(t.direction)||![0,1,2].includes(t.ratio)||![0,1,2].includes(t.process)||![0,1,2].includes(c))return null;const u=Math.max(0,(o?100:65)-i*15-(s?0:45)),p=a?100:60,d=gd[c],h=Kl[c],k=Math.round((u+p+d+h)/4);return{type:"development",productId:e,ingredients:Ls(t.ingredients),direction:t.direction,ratio:t.ratio,process:t.process,decoration:c,coreCorrect:s,scores:{flavor:u,texture:p,appearance:d,cost:h},score:k,passed:s&&k>=75,refined:s&&k>=90,feedback:yd({coreCorrect:s,directionCorrect:o,ratioOffset:i,processCorrect:a,decoration:c})}}function _d(e){if(!e||![0,1,2].includes(e.sugar)||![0,1,2].includes(e.filling)||![0,1,2].includes(e.garnish))return null;const t=Gl("signature",e.ingredients),n=e.sugar===0,s=e.filling===1,o=e.garnish===2,i={flavor:Math.max(0,(n?100:60)-(t?0:45)),texture:s?100:55,appearance:o?100:65,cost:t?90:65},a=Math.round(Object.values(i).reduce((u,p)=>u+p,0)/4),c=[];return t||c.push("请按手记选齐高山秋栗、金桂冻和戚风胚。"),n||c.push("甜栗本身够甜时，要减少额外糖量。"),s||c.push("桂花冻冷却后单独夹入，才能保留清楚的层次。"),o||c.push("装盒前现撒金桂，香气会更鲜明。"),c.length||c.push("外婆手记的风味与做法都复原了。"),{type:"signature",productId:"signature",ingredients:Ls(e.ingredients),sugar:e.sugar,filling:e.filling,garnish:e.garnish,coreCorrect:t,scores:i,score:a,passed:t&&n&&s&&o&&a>=75,refined:t&&n&&s&&o&&a>=90,feedback:c}}function hi(e){const t=co[e];return[...new Set([...(ql[e]||[]).flat(),...(t==null?void 0:t.distractors)||[]])]}function kd(e){return Cs[e]||null}const ct=(...e)=>e.join(","),Fs={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:ct("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:ct("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:ct("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:ct("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:ct("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:ct("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:ct("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:ct("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:ct("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:ct("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:ct("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},Md=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/宿舍|卧室|家里|房间/,"home"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]],vi={1:"home",2:"shop",3:"kitchen",4:"shop",5:"shop",6:"market",7:"shop",8:"shop",9:"kitchen",10:"shop",11:"shop",12:"shop",13:"kitchen",14:"shop",15:"shop",16:"market",17:"street",18:"shop",19:"store",20:"shop",21:"shop",22:"store",23:"shop",24:"shop",25:"shop",26:"kitchen",27:"kitchen",28:"street",29:"market",30:"shop",31:"store",32:"street",33:"store",34:"store",35:"studio",36:"shop"},mi={1:"shop",2:"street",3:"street",4:"shop",5:"park",6:"market",7:"night",8:"shop",9:"studio",10:"cafe",11:"studio",12:"shop",13:"kitchen",14:"shop",15:"street",16:"park",17:"street",18:"shop",19:"store",20:"street",21:"cafe",22:"night",23:"cafe",24:"studio",25:"street",26:"street",27:"kitchen",28:"shop",29:"park",30:"studio",31:"cafe",32:"street",33:"store",34:"studio",35:"school",36:"shop"};function xd(e){return e?e.kind==="main"&&vi[e.month]?vi[e.month]:e.kind==="friend"&&mi[e.month]?mi[e.month]:Wl(e.title)||"shop":"shop"}function Wl(e){const t=e||"";for(const[n,s]of Md)if(n.test(t))return s;return""}const es={林念:{in:"ln-sprite-in.webp",out:"ln-sprite-out.webp",face:"ln-face.webp"},苏晴:{in:"sq-sprite-in.webp",out:"sq-sprite-out.webp",face:"sq-face.webp"},林暖:{in:"nu-sprite-in.webp",out:"nu-sprite-out.webp",face:"nu-face.webp"},周雨桐:{in:"xy-sprite-in.webp",out:"xy-sprite-out.webp",face:"xy-face.webp"},许知遥:{in:"zy-sprite-in.webp",out:"zy-sprite-out.webp",face:"zy-face.webp"},唐鸢:{in:"ty-sprite-in.webp",out:"ty-sprite-out.webp",face:"ty-face.webp"},叶星河:{in:"xh-sprite-in.webp",out:"xh-sprite-out.webp",face:"xh-face.webp"}},gi=es,$d={shop:"in",kitchen:"in",store:"in",street:"out",home:"out",cafe:"out",market:"out",school:"out",park:"out",night:"out",studio:"out"};function Cd(e){return $d[e]||"out"}function zl(e,t){const n=es[e];if(!n)return"";if(ze(n[t])==="ok")return n[t];const s=t==="in"?"out":"in";return ze(n[s])==="ok"?n[s]:""}function wd(e,t){const n=zl(e,t||"out");return n?Ae(n):""}function Ed(){Object.keys(es).forEach(e=>{const t=es[e];["in","out","face"].forEach(n=>ze(t[n]))}),Object.keys(Fs).forEach(e=>ze(Fs[e].img))}function Vr(e){const t=es[e];return t&&ze(t.face)==="ok"?Ae(t.face):""}function Sd(e,t){return!!zl(e,t||"out")}const Td={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"},"graduation-rejection":{img:"cg-graduation-rejection.webp",name:"毕业季的拒信"},osmanthus:{img:"cg-osmanthus.webp",name:"桂花栗子蛋糕"},festival:{img:"cg-festival.webp",name:"秋日文化节"},memory:{img:"cg-memory.webp",name:"高三晚自习"},flagship:{img:"cg-flagship.webp",name:"旗舰店方案"},album:{img:"cg-album.webp",name:"三年相册"},finale:{img:"cg-finale.webp",name:"三周年合影"}},Yl=[{id:"graduation-rejection",event:"EVT_PROLOGUE_01"},{id:"osmanthus",event:"EVT_M26_MAIN"},{id:"festival",event:"EVT_M29_MAIN"},{id:"memory",event:"EVT_M29_MAIN"},{id:"flagship",event:"EVT_M33_MAIN"},{id:"album",event:"EVT_M35_MAIN"},{id:"finale",event:"EVT_FINAL_END_NATIONAL"}];function Vs(e){const t=Td[e],n=t?t.img:"cg-"+e+".webp";return{src:ze(n)==="ok"?Ae(n):"",name:t?t.name:e}}function Id(e){return!e||!e.img?"":ze(e.img)==="ok"?Ae(e.img):""}const er="alb-save-v6",tr="alb-manual-save-v1",ts=5,Jl=60,Ql=40;function dt(){return{v:9,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,pantry:{base:12,dairy:8,decor:2,strawberry:2,cocoa:2},legacyStock:0,warehouseCapacity:120,ngpDiscountUsed:!1,devices:{},shelf:{},batches:[],plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],dayPhase:"prep",service:null,productionMini:null,productionResult:null,tutorialSeen:!1,tutorialProgress:0,marketRun:null,cafeRun:null,cafeCollab:0,activityRecords:{market:[],cafe:[]},staffAssignments:{picker:null,packer:null,auto:!1},challenge:null,challengeDayIndex:0,challengeDone:!1,decorations:[],regularCustomers:{chen:{purchases:0,lastPurchaseDay:0,stories:[]},zhang:{purchases:0,lastPurchaseDay:0,stories:[]}},runEndings:[],career:{products:["plain","strawberry","chocolate"],photos:[],cgs:[],decorations:[],endings:[],labReports:{},activityRecords:{market:[],cafe:[]},newGamePlusRuns:0},labPending:null,newGamePlus:!1,doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,monthSnap:{rep:20,unlocked:[],skill:{}},deliveryDay:-1,helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],storyChoices:{},photos:[],log:[],phase:"playing",ending:null,acquired:!1,autoStory:!1,sqchatMonth:0,stage:1,report:null}}const r=Jt(dt()),Fe=Jt({events:[]});function nr(e){return r.devices[e]||0}function pn(e){const t=ao(e),n=nr(e);return n&&t?t.tiers[n-1].value:0}function Zl(e){const t=ao(e),n=nr(e);return t&&n<t.tiers.length?t.tiers[n]:null}function Ad(e){const t=Zl(e);return!t||r.phase!=="playing"||r.dayPhase!=="prep"||r.cash<t.cost?!1:(r.cash-=t.cost,r.devices[e]=nr(e)+1,e==="warehouse"&&(r.warehouseCapacity=[120,180,240,320][r.devices[e]]),r.monthCost+=t.cost,me("升级了"+ao(e).name+"，"+t.text,"good"),ue(),!0)}const hn=B(()=>Je.filter(e=>r.unlocked.includes(e.id))),un=B(()=>r.stamina+Jl+r.staff.length*Ql+pn("oven")),jr=B(()=>Math.min(4,r.decorations.length)),sr=B(()=>Object.values(r.pantry||{}).reduce((e,t)=>e+Number(t||0),0));function Rd(e=r.plan){return Object.entries(e||{}).reduce((t,[n,s])=>{const o=Tn[n]||{};return Object.entries(o).forEach(([i,a])=>{t[i]=(t[i]||0)+a*s}),t},{})}function uo(e=r.plan){const t={};let n=r.legacyStock||0;return Object.entries(e||{}).forEach(([s,o])=>{for(let i=0;i<o;i++){if(n>=1){n-=1;continue}Object.entries(Tn[s]||{}).forEach(([a,c])=>{t[a]=(t[a]||0)+c})}}),Object.keys(t).forEach(s=>{t[s]=Math.max(0,t[s]-((r.pantry||{})[s]||0))}),Object.fromEntries(Object.entries(t).filter(([,s])=>s>0))}function rn(e,t=1){return(r.legacyStock||0)>=t?!0:Object.entries(Tn[e]||{}).every(([n,s])=>((r.pantry||{})[n]||0)+1e-4>=s*t)}function fo(e,t=1){const n=Tn[e]||{},s=Object.fromEntries(Object.entries(n).map(([o,i])=>[o,i*t]));return(r.legacyStock||0)>=t?(r.legacyStock=Math.round((r.legacyStock-t)*100)/100,!0):rn(e,t)?(Object.entries(s).forEach(([o,i])=>{r.pantry[o]=Math.round(((r.pantry[o]||0)-i)*100)/100}),!0):!1}function Od(e){if(r.phase!=="playing"||r.dayPhase!=="prep"||r.ap<1)return{ok:!1,message:"准备阶段需要 1 点行动力采购。"};const t=Object.entries(e||{}).filter(([,c])=>Number(c)>0);if(!t.length||t.some(([c,u])=>{const p=_n.find(d=>d.id===c);return!p||p.month>r.month||!Number.isInteger(Number(u))}))return{ok:!1,message:"请选择原料和整数购买数量。"};const n=Object.fromEntries(t.map(([c,u])=>[c,Number(u)])),s=Object.values(n).reduce((c,u)=>c+u,0),o=t.reduce((c,[u,p])=>c+_n.find(d=>d.id===u).price*p,0),i=r.newGamePlus&&!r.ngpDiscountUsed?Math.min(300,o):0,a=o-i;return sr.value+s>r.warehouseCapacity?{ok:!1,message:"仓库容量不足，请减少购买数量。"}:r.cash<a?{ok:!1,message:"资金不足。"}:(r.ap-=1,r.cash-=a,r.monthCost+=a,Object.entries(n).forEach(([c,u])=>{r.pantry[c]=(r.pantry[c]||0)+u}),r.newGamePlus&&!r.ngpDiscountUsed&&(r.ngpDiscountUsed=!0),me("采购了 "+t.map(([c,u])=>_n.find(p=>p.id===c).name+" ×"+u).join("、")+(i?"，二周目优惠 ¥"+i:""),"good"),ue(),{ok:!0,message:"采购完成，共 ¥"+a+"。"})}function Nd(){const e=uo(),t={};return Object.entries(e).forEach(([n,s])=>{t[n]=Math.ceil(s)}),t}function po(){return lo.filter(e=>r.month>=e.month&&r.day===e.day)}function Dd(e){po().forEach(t=>{const n=r.regularCustomers[t.id];if(!e[t.product]||n.lastPurchaseDay===r.dayIndex)return;n.purchases+=1,n.lastPurchaseDay=r.dayIndex;const s=n.purchases===1?0:n.purchases===3?1:-1;s>=0&&!n.stories.includes(s)?(n.stories.push(s),me(t.name+"和你聊起了老街坊的故事","story")):me(t.name+"买走了一份"+$e(t.product).name)})}function Pd(){const e=Je.filter(n=>n.month===r.month&&r.unlocked.includes(n.id)),t=[{type:"stock",target:""},{type:"custom",target:""}];return e.length&&t.push({type:"new",target:e[Math.floor(Math.random()*e.length)].id}),t[Math.floor(Math.random()*t.length)]}function Xl(){r.challengeDayIndex===r.dayIndex&&r.challenge||(r.challenge=Pd(),r.challengeDayIndex=r.dayIndex)}function xr(e,t,n){Object.entries(Tn[t]||{}).forEach(([s,o])=>{e[s]=(e[s]||0)+o*n})}function Ld(e){return Qu[r.prices[e]||"std"]}function Qt(e){const t=$e(e),n=r.levels[e]||1;return Math.round(t.price*Ld(e).priceMul*(1+(n-1)*.05)*(1+pn("cashier")))}const ea=B(()=>700+r.shopLevel*180+r.staff.length*500),rr=B(()=>nd(r.month)),qt=B(()=>{const e=rr.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const t=e.goals.map(n=>({text:n.text,done:n.check(r),expand:!!n.expand}));return{done:t.filter(n=>n.done).length,need:e.need,list:t}});function ta(){let e=0;for(const t of Object.keys(r.plan))e+=r.plan[t]*$e(t).diff;return e}function ho(){mo();const e=Fe.events.map(t=>Ie.events.some(n=>n.id===t.id)?t.id:t);return{...r,storyQueue:e,savedAt:Date.now()}}function ue(){try{localStorage.setItem(er,JSON.stringify(ho()))}catch{}}function na(e){return!!e&&typeof e=="object"&&[6,7,8,9].includes(e.v)&&Number.isInteger(Number(e.month))&&Number(e.month)>=1&&Number(e.month)<=36&&Number.isInteger(Number(e.day))&&Number(e.day)>=1&&Number(e.day)<=ts&&Number.isFinite(Number(e.cash))&&(e.unlocked===void 0||Array.isArray(e.unlocked))&&(e.played===void 0||Array.isArray(e.played))&&(e.storyChoices===void 0||e.storyChoices&&typeof e.storyChoices=="object"&&!Array.isArray(e.storyChoices))&&(e.storyQueue===void 0||Array.isArray(e.storyQueue))&&(e.career===void 0||e.career&&typeof e.career=="object"&&!Array.isArray(e.career))}function Ut(e){try{const t=typeof e=="string"?JSON.parse(e):e;return na(t)?{ok:!0,data:t,preview:{month:Number(t.month),day:Number(t.day),savedAt:Number(t.savedAt)||0,cash:Number(t.cash)||0,phase:t.phase||"playing"}}:{ok:!1,message:"存档格式无效或版本不受支持。"}}catch{return{ok:!1,message:"无法读取存档文件。"}}}function vo(e){var t,n,s,o;if(!na(e))return!1;try{Object.assign(r,dt());const i=e.v!==9;if(Object.keys(dt()).forEach(p=>{e[p]!==void 0&&p!=="regularCustomers"&&p!=="career"&&(r[p]=e[p])}),e.v===6){r.pantry={};let p=Math.max(0,Number(e.stock||0));Object.entries(e.plan||{}).forEach(([I,_])=>{const w=Math.min(p,Math.max(0,Number(_)||0));w&&xr(r.pantry,I,w),p-=w});const d=(e.unlocked||["plain"]).filter(I=>Tn[I]),h=d.length?d:["plain"],k=Math.floor(p);for(let I=0;I<k;I++)xr(r.pantry,h[I%h.length],1);const g=p-k;g&&h.forEach(I=>xr(r.pantry,I,g/h.length)),r.legacyStock=0,r.cash+=Number(e.monthRev||0),r.dayPhase=e.daySold||e.dayRev?"closing":"prep",r.sqchatMonth=Number(e.friendMonth||0),r.batches=Object.entries(e.shelf||{}).filter(([,I])=>I>0).map(([I,_],w)=>({id:"migrated-"+w,product:I,qty:_,quality:"normal",decoration:null})),r.service=null,r.stock=void 0,delete r.friendship,delete r.friendMonth,r.ngpDiscountUsed=!1,r.challenge=null,r.challengeDayIndex=0}r.v=9,r.pantry=r.pantry||{},r.legacyStock=Number(r.legacyStock||0),r.batches=r.batches||[],r.staffAssignments={...dt().staffAssignments,...r.staffAssignments||{}},r.dayPhase=r.dayPhase||"prep",r.regularCustomers=Object.fromEntries(lo.map(p=>[p.id,{...dt().regularCustomers[p.id],...(e.regularCustomers||{})[p.id]}])),r.career={...dt().career,...e.career||{}},r.career.labReports={...dt().career.labReports,...(e.career||{}).labReports||{}},r.activityRecords={...dt().activityRecords,...e.activityRecords||{}},r.activityRecords.market=r.activityRecords.market||[],r.activityRecords.cafe=r.activityRecords.cafe||[],r.career.activityRecords={...dt().career.activityRecords,...(e.career||{}).activityRecords||{},market:[...new Set([...((n=(t=e.career)==null?void 0:t.activityRecords)==null?void 0:n.market)||[],...r.activityRecords.market.map(p=>p.id)])],cafe:[...new Set([...((o=(s=e.career)==null?void 0:s.activityRecords)==null?void 0:o.cafe)||[],...r.activityRecords.cafe.map(p=>p.id)])]},r.career.cgs=r.career.cgs||[],r.storyChoices=r.storyChoices||{},r.savedAt=Number(e.savedAt)||0;const a=new Map(Ie.events.map(p=>[p.id,p])),c=(e.storyQueue||[]).map(p=>typeof p=="string"?a.get(p):p).filter(p=>p&&typeof p=="object"&&typeof p.id=="string"&&Array.isArray(p.beats));Fe.events.splice(0,Fe.events.length,...c),r.challengeDayIndex=Number(r.challengeDayIndex||0);const u=r.dayPhase==="prep"&&(!r.challenge||r.challengeDayIndex!==r.dayIndex);return u&&Xl(),mo(),(i||u)&&ue(),!0}catch{return!1}}function $r(e=!1){try{const t=localStorage.getItem(e?tr:er);return!!t&&Ut(t).ok}catch{return!1}}function Fd(){try{return localStorage.setItem(tr,JSON.stringify(ho())),!0}catch{return!1}}function yi(){try{return localStorage.getItem(tr)||""}catch{return""}}function Vd(){try{return localStorage.getItem(er)||""}catch{return""}}function Cr(){return JSON.stringify(ho(),null,2)}function wr(e=!0){try{const t=localStorage.getItem(tr);if(!t||!Ut(t).ok)return!1;const n=JSON.parse(t);return vo(n)?(e&&ue(),!0):!1}catch{return!1}}function jd(e){const t=Ut(e);return t.ok?vo(t.data)?(ue(),{ok:!0,preview:t.preview}):{ok:!1,message:"存档无法载入。"}:t}function gs(){try{const e=localStorage.getItem(er);return!e||!Ut(e).ok?!1:vo(JSON.parse(e))}catch{return!1}}function sa(){const e={...mo()};Object.assign(r,dt()),r.career=e,Fe.events.length=0,r.monthSnap={rep:r.reputation,unlocked:r.unlocked.slice(),skill:Object.assign({},r.partnerSkill)},lr(),ue()}function mo(){const e=r.career||dt().career;e.products=[...new Set([...e.products||[],...r.unlocked||[]])],e.photos=[...new Set([...e.photos||[],...r.photos||[]])];const t=e.cgs||[];return Yl.forEach(n=>{(r.played||[]).includes(n.event)&&!t.includes(n.id)&&t.push(n.id)}),e.cgs=t,e.decorations=[...new Set([...e.decorations||[],...r.decorations||[]])],r.phase==="ended"&&r.ending&&r.ending.key&&(r.runEndings=[...new Set([...r.runEndings||[],r.ending.key])],e.endings=[...new Set([...e.endings||[],r.ending.key])]),r.career=e,e}function ra(e,t,n){const s=r.career.labReports[e]||{};r.career.labReports[e]={...s,[t]:{...n,run:(r.career.newGamePlusRuns||0)+1,month:r.month}}}function Ee(e,t){return{ok:e,message:t}}function bi(e){if(r.phase!=="playing")return Ee(!1,"当前不能进行实验。");if(r.dayPhase!=="prep")return Ee(!1,"营业开始后不能进行研发。");if(r.labPending)return Ee(!1,"请先处理上次试吃结果。");if(r.ap<1)return Ee(!1,"至少需要 1 点行动力才能开始试做。");const t=e&&e.productId,n=Je.find(o=>o.id===t);if(!n||r.unlocked.includes(t)||n.month<=0||n.month>r.month)return Ee(!1,"这款产品还未开放研发，或已经上架。");if(t==="signature"&&(!e||e.type!=="signature"))return Ee(!1,"桂花栗子蛋糕需要进入 M26 专属复原。");const s=t==="signature"?_d(e):bd(t,e||{});return s?fo(t,.25)?(r.ap-=1,r.labPending=s,me("试做「"+n.name+"」消耗 1 点行动力和四分之一配方材料","story"),ue(),Ee(!0,"试吃完成。")):Ee(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。"):Ee(!1,"实验参数不完整，请检查每一项选择。")}function Bd(){const e=r.labPending;if(r.dayPhase!=="prep")return Ee(!1,"请在营业开始前完成上架。");if(r.phase!=="playing"||!e||!e.passed)return Ee(!1,"这份试吃结果还未达到上架要求。");if(r.ap<1)return Ee(!1,"行动力不足；试吃结果已保存，明天可以继续。");const t=Je.find(n=>n.id===e.productId);return!t||t.month>r.month||r.unlocked.includes(e.productId)?Ee(!1,"产品状态已变化，请返回实验室确认。"):(r.ap-=1,r.unlocked.push(t.id),r.levels[t.id]=e.refined?1.5:1,ra(t.id,"development",{...e,type:e.type==="signature"?"signature":"development",feedback:e.type==="signature"?["外婆配方复原成功，桂香与秋栗的层次都找回来了。"]:e.feedback}),r.labPending=null,me("「"+t.name+"」研发完成并正式上架，"+(e.refined?"精制品质，熟练度 Lv1.5":"熟练度 Lv1"),"good"),ue(),Ee(!0,t.name+(e.type==="signature"?"复原成功，已加入菜单。":"已正式上架。")))}function _i(){return r.labPending?(r.labPending=null,ue(),!0):!1}function qd(e,t){if(r.phase!=="playing")return Ee(!1,"当前不能进行改良。");if(r.dayPhase!=="prep")return Ee(!1,"营业开始后不能进行改良。");const n=Je.find(c=>c.id===e),s=kd(e);if(!n||!s||!r.unlocked.includes(e))return Ee(!1,"这款产品目前不能改良。");const o=r.levels[e]||1;if(o>=5)return Ee(!1,"这款产品已达到熟练度上限。");if(!Number.isInteger(t)||t<0||t>=s.options.length)return Ee(!1,"请选择一个改良方案。");const i=t===s.correct;if(r.ap<(i?2:1))return Ee(!1,i?"改良成功需要 2 点行动力。":"改良试吃需要 1 点行动力。");if(!fo(e,.25))return Ee(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。");if(r.ap-=1,!i){const c="这次试吃没有解决问题。"+s.feedback;return me("改良「"+n.name+"」未通过试吃，消耗了四分之一配方材料","story"),ue(),{...Ee(!1,c),retry:!0,feedback:c}}r.ap-=1,r.levels[e]=Math.min(5,o+1),r.style.innovation+=3;const a={type:"improvement",score:100,levelBefore:o,levelAfter:r.levels[e],feedback:[s.feedback]};return ra(e,"improvement",a),me("改良「"+n.name+"」成功，熟练度提升至 Lv"+r.levels[e],"good"),ue(),{...Ee(!0,s.feedback),feedback:s.feedback,level:r.levels[e]}}function Ud(){return r.phase!=="ended"||!r.ending?!1:(sa(),r.newGamePlus=!0,r.ngpDiscountUsed=!1,r.career.newGamePlusRuns=(r.career.newGamePlusRuns||0)+1,ue(),!0)}function Hd(){if(r.phase!=="playing")return!1;const e=r.month;for(;r.month===e&&r.phase==="playing";)r.dayPhase="closing",r.service={tickets:[],current:0},fa("waste");return r.month!==e}function Kd(){const e=En.find(t=>!t.final&&t.short.key===(r.ending&&r.ending.key));return r.phase!=="ended"||!e?!1:(r.phase="playing",r.ending=null,r.stamina=r.maxStamina,lr(),yo(),ue(),!0)}function Gd(e){const t=io.find(n=>n.id===e);return!t||r.phase!=="playing"||r.dayPhase!=="prep"||r.decorations.includes(e)||r.shopLevel<t.shopLevel||r.cash<t.cost?!1:(r.cash-=t.cost,r.monthCost+=t.cost,r.decorations.push(e),me("添置了"+t.name+"，店铺舒适度 +1","good"),ue(),!0)}function me(e,t){r.log.unshift({month:r.month,day:r.day,text:e,tone:t||"normal"}),r.log.length>60&&r.log.pop()}function Te(e){return Math.max(0,Math.min(100,e))}function Wd(e){const t=[];for(const n of e)if(n.kind==="num"){const s=n.value;switch(n.key){case"资金":r.cash=Math.max(0,r.cash+s);break;case"口碑":r.reputation=Te(r.reputation+s);break;case"知名度":r.popularity=Te(r.popularity+s);break;case"友情值":break;case"门店":r.storeCount=Math.max(1,r.storeCount+s);break;case"员工":s>0&&Qd();break;case"烘焙":zd(s*.2);break;case"品质":Yd(s*.05);break}t.push(n.key+(s>=0?"+":"")+s)}else n.key==="配方"?r.unlocked.includes(n.value)||(r.unlocked.push(n.value),t.push("解锁「"+$e(n.value).name+"」")):n.key==="照片"&&(r.photos.includes(n.value)||(r.photos.push(n.value),t.push("获得纪念照片")));return t}function zd(e){const n=r.unlocked.slice().sort((s,o)=>(r.levels[s]||1)-(r.levels[o]||1))[0];n&&(r.levels[n]=Math.min(5,(r.levels[n]||1)+e))}function Yd(e){r.unlocked.forEach(t=>{r.levels[t]=Math.min(5,(r.levels[t]||1)+e)})}function Jd(e){const t=[];for(const n of e||[]){switch(n.k){case"style":r.style[n.id]=(r.style[n.id]||0)+n.v;break;case"trust":if(!n.id)break;r.partnerTrust[n.id]=Te((r.partnerTrust[n.id]||0)+n.v);break;case"skill":if(!n.id)break;r.partnerSkill[n.id]=Math.min(5,Math.round(((r.partnerSkill[n.id]||1)+n.v)*10)/10);break;case"loyalty":r.loyalty=Te(r.loyalty+n.v);break}n.k!=="friend"&&n.label&&t.push(n.label)}return t}function ki(e,t,n,s=""){const o=e.node||"choice-"+n,i=r.storyChoices[s]||{};if(Object.prototype.hasOwnProperty.call(i,o))return[];const a=Jd(t.gains);return r.storyChoices[s]={...i,[o]:n},e&&e.node==="13.6"&&n===1&&(r.acquired=!0),a.length&&me("选择："+t.label+"（"+a.join("，")+"）","story"),ue(),a}function oa(e){if(!e||r.staff.includes(e))return;r.staff.push(e),r.partnerTrust[e]===void 0&&(r.partnerTrust[e]=10),r.partnerSkill[e]===void 0&&(r.partnerSkill[e]=1);const t=Cn(e);t&&me(t.name+" 加入了林记","story")}function Qd(){const e=$n.find(t=>!r.staff.includes(t.id)&&t.joinMonth<=r.month);e&&oa(e.id)}function ia(){return r.staff.map(e=>Cn(e)).filter(Boolean)}const Mi={feedback:5,market:3,talk:2,train:5};function Zd(e){const t=r.cd[e]||0;return Math.max(0,t-r.dayIndex)}function Lt(e){switch(e){case"restock":return{name:"原料采购",ap:1,cost:0,note:"请前往老街食材铺选择原料",disabled:!0};case"feedback":{const t=Zd("feedback");return{name:"顾客反馈",ap:1,cost:0,note:t>0?"还要等 "+t+" 天":"口碑 +1，忠诚 +2",disabled:t>0}}case"talk":{const t=r.staff.length?ia()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:t?"和 "+t+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"sqchat":{const t=r.sqchatMonth===r.month;return{name:"与苏晴互动",ap:1,cost:0,note:t?"这个月已经聊过了":"本月专属相处剧情",disabled:t}}case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:r.cash<800};case"train":return r.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:r.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const t=Xn.find(n=>n.lv===r.shopLevel+1);return t?{name:"装修到「"+t.name+"」",ap:2,cost:t.cost,note:"展示位与产能提升",disabled:r.cash<t.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const t=wn.find(s=>!r.cities.includes(s.id)&&!r.surveyed.includes(s.id));if(!t)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const n=r.month>=t.month&&r.reputation>=t.rep;return{name:"考察"+t.name,ap:2,cost:2e3,note:n?"考察之后可以筹备开店":"需要第 "+t.month+" 个月、口碑 "+t.rep,disabled:!n||r.cash<2e3}}case"branch":{if(!r.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const t=wn.find(n=>n.id===r.surveyed[0]);return{name:"在"+t.name+"开店",ap:3,cost:t.cost,note:"门店 +1",disabled:r.cash<t.cost}}case"coffee":return{name:"喝一杯手冲",ap:0,cost:18,note:"体力 +12",disabled:r.cash<18};case"walk":return{name:"沿河散步",ap:0,cost:0,note:"口碑 +0.5，忠诚 +2"};default:return{name:e,ap:1,cost:0,note:""}}}function Sn(e,t){if(r.phase!=="playing"||r.dayPhase!=="prep")return!1;const n=Lt(e);if(n.disabled||r.ap<n.ap||n.cost&&r.cash<n.cost)return!1;const s=r.cash;switch(e){case"restock":return!1;case"feedback":r.reputation=Te(r.reputation+1),r.loyalty=Te(r.loyalty+2),me("认真听了顾客的意见，口碑上升");break;case"coffee":r.cash-=18,r.stamina=Math.min(r.maxStamina,r.stamina+12),me("在栖木咖啡喝了杯手冲，体力回来了些");break;case"walk":r.reputation=Te(r.reputation+.5),r.loyalty=Te(r.loyalty+2),me("沿河走了一圈，脑子清醒多了");break;case"talk":if(t&&t.partner==="mom")r.momBond=Te(r.momBond+4),me("和妈妈聊了一会儿，家庭默契 +4");else if(r.staff.length){const o=t&&t.partner?t.partner:r.staff[0];if(!r.staff.includes(o))return!1;r.partnerTrust[o]=Te((r.partnerTrust[o]||0)+6);const i=Cn(o);me("和 "+(i?i.nick:"伙伴")+" 聊了很久，信赖 +6")}else r.momBond=Te(r.momBond+4),me("和妈妈聊了一会儿，家庭默契 +4");break;case"sqchat":{const o=Ie.friend[r.month];if(!o)break;r.sqchatMonth=r.month,r.autoStory=!0,Gt(o),me("和苏晴度过了一段只属于两人的时间");break}case"market":r.cash-=800,r.popularity=Te(r.popularity+2),r.brand=Te(r.brand+1.5),me("发了新品帖子，知名度上升");break;case"train":{if(!r.staff.length)return!1;const o=t&&t.partner?t.partner:r.staff[0];r.cash-=400,r.partnerSkill[o]=Math.min(5,(r.partnerSkill[o]||1)+1);const i=Cn(o);me("培训了 "+(i?i.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const o=Xn.find(i=>i.lv===r.shopLevel+1);if(!o)return!1;r.cash-=o.cost,r.shopLevel=o.lv,r.maxAp=8+(o.ap||0),r.reputation=Te(r.reputation+3),r.style.community+=2,me("店铺升级为「"+o.name+"」","good");break}case"survey":{const o=wn.find(i=>!r.cities.includes(i.id)&&!r.surveyed.includes(i.id));if(!o)return!1;r.cash-=2e3,r.surveyed.push(o.id),me("去"+o.name+"看了一圈，可以筹备开店了");break}case"branch":{const o=wn.find(i=>i.id===r.surveyed[0]);if(!o)return!1;r.cash-=o.cost,r.storeCount+=1,r.cities.push(o.id),r.surveyed=r.surveyed.filter(i=>i!==o.id),r.brand=Te(r.brand+6),r.style.efficiency+=3,me("在"+o.name+"开了新店","good");break}default:return!1}return r.ap-=n.ap,Mi[e]&&(r.cd[e]=r.dayIndex+Mi[e]),s>r.cash&&(r.monthCost+=s-r.cash),ue(),!0}function Xd(e,t){if(r.dayPhase!=="prep"||!r.unlocked.includes(e))return;const n=Math.max(0,Math.min(12,Math.floor(t||0)));n===0?delete r.plan[e]:r.plan[e]=n,ue()}function Br(){if(r.phase!=="playing"||r.dayPhase!=="prep")return{ok:!1,msg:"当前不是制作阶段。"};if(!r.productionResult)return{ok:!1,msg:"先完成或跳过主打蛋糕小游戏。"};const e=Object.keys(r.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const t=e.reduce((a,c)=>a+r.plan[c],0),n=uo();if(Object.keys(n).length)return{ok:!1,msg:"原料不足："+Object.entries(n).map(([a,c])=>_n.find(u=>u.id===a).name+" ×"+Math.ceil(c)).join("、")};const s=ta();if(s>un.value)return{ok:!1,msg:"产能不够。今天的产能是 "+un.value+" 点，还差 "+(s-un.value)};const o=Jl+r.staff.length*Ql+pn("oven"),i=Math.round(Math.max(0,s-o)*(1-pn("mixer")));for(const a of e)for(let c=0;c<r.plan[a];c++)fo(a,1);r.stamina=Math.max(0,r.stamina-i);for(const a of e)r.shelf[a]=(r.shelf[a]||0)+r.plan[a],r.dayMade+=r.plan[a],r.levels[a]=Math.min(5,(r.levels[a]||1)+r.plan[a]*.02),r.batches.push({id:"b"+r.dayIndex+"-"+a+"-"+r.batches.length,product:a,qty:r.plan[a],quality:a===r.productionResult.product?r.productionResult.quality:"normal",decoration:a===r.productionResult.product?r.productionResult.decoration:null});return me("做了 "+t+" 个蛋糕，自己出了 "+i+" 点体力"),r.plan={},r.productionMini=null,r.productionResult=null,r.dayPhase="service-ready",ue(),{ok:!0,msg:"做好了 "+t+" 个"}}const xi=["mix","oven","piping","fruit"];function ef(){if(r.dayPhase!=="prep"||r.productionMini||!Object.keys(r.plan).length)return!1;const e=Object.keys(r.plan).sort((t,n)=>r.plan[n]-r.plan[t])[0];return r.productionMini={type:xi[Math.floor(Math.random()*xi.length)],product:e,window:58+Math.floor(Math.random()*20),pattern:Math.floor(Math.random()*3)},ue(),!0}function $i(e=0,t=!1,n=null){const s=r.productionMini;if(!s||r.productionResult)return{ok:!1,message:"制作小游戏已结算。"};const o=t?0:Math.max(0,Math.min(100,Math.round(e)));return r.productionResult={product:s.product,quality:o>=90?"perfect":o>=70?"fine":"normal",score:o,priceBonus:o>=90?.1:o>=70?.05:0,decoration:n},r.productionMini=null,ue(),Br()}function tf(){return hn.value.filter(e=>(r.shelf[e.id]||0)>0).map(e=>e.id)}function nf(e,t){const n={...t},s=[];for(let o=0;o<e;o++){const i=Object.keys(n).filter(u=>n[u]>0);if(!i.length)break;const a=i[Math.floor(Math.random()*i.length)],c=1+Math.floor(Math.random()*Math.min(2,n[a]));n[a]-=c,s.push({product:a,qty:c,customer:["帶孩子的家長","放學的學生","散步的街坊","外地遊客"][Math.floor(Math.random()*4)]})}return s}function sf(e,t,n){var i;const s=ca(e,t),o=Math.round(s.reduce((a,c)=>a+n*c.qty*(c.quality==="perfect"?1.1:c.quality==="fine"?1.05:1),0));return r.shelf[e]=Math.max(0,(r.shelf[e]||0)-t),r.cash+=o,r.dayRev+=o,r.monthRev+=o,r.daySold+=t,r.monthSold[e]=(r.monthSold[e]||0)+t,((i=r.challenge)==null?void 0:i.type)==="new"&&r.challenge.target===e&&(r.marketRun&&(r.marketRun.challengeNewSold=(r.marketRun.challengeNewSold||0)+t),r.cafeRun&&(r.cafeRun.challengeNewSold=(r.cafeRun.challengeNewSold||0)+t)),o}function rf(e,t,n){if(t.recorded)return;const s=e+"-m"+t.month,o={id:s,month:t.month,day:t.day,sold:t.sold||0,revenue:t.revenue||0,success:n,score:t.score||0,menu:t.menu||null};r.activityRecords[e]=[...(r.activityRecords[e]||[]).filter(i=>i.id!==s),o],r.career.activityRecords[e]=[...new Set([...r.career.activityRecords[e]||[],s])],t.recorded=!0,t.completed=!0,ue()}function of(){if(r.marketRun&&!r.marketRun.completed)return{ok:!0,resumed:!0};if(r.dayPhase!=="service-ready")return{ok:!1,message:"先完成今天的制作，再带蛋糕去市集。"};if((r.activityRecords.market||[]).some(n=>n.month===r.month))return{ok:!1,message:"本月的市集活动已经结算。"};const e=Object.fromEntries(tf().map(n=>[n,r.shelf[n]]));if(!Object.keys(e).length)return{ok:!1,message:"展示柜里还没有可以带去市集的蛋糕。"};const t=nf(5,e);return r.marketRun={month:r.month,day:r.day,inventory:e,demands:t,customerIndex:0,sold:0,revenue:0,score:0,misses:0,completed:!1,recorded:!1},ue(),{ok:!0,resumed:!1}}function la(){const e=r.marketRun;return e&&!e.completed&&e.demands[e.customerIndex]||null}function lf(e){const t=r.marketRun,n=la();if(!t||!n||t.completed)return{ok:!1,message:"今天的市集已经结束。"};if(e!==n.product)return t.misses+=1,t.customerIndex+=1,t.customerIndex>=t.demands.length?qr():ue(),{ok:!1,message:"这位顾客想要"+$e(n.product).name+"，只好先去别的摊位看看。"};if((r.shelf[e]||0)<n.qty)return{ok:!1,message:"这款蛋糕剩余数量不够，选择其他商品吧。"};const s=sf(e,n.qty,Qt(e));return t.sold+=n.qty,t.revenue+=s,t.score+=1,t.customerIndex+=1,t.customerIndex>=t.demands.length?qr():ue(),{ok:!0,message:"市集成交："+$e(e).name+" ×"+n.qty+"，收入 ¥"+s+"。"}}function af(){const e=r.marketRun;return!e||e.completed?!1:(e.misses+=1,e.customerIndex+=1,e.customerIndex>=e.demands.length?qr():ue(),!0)}function qr(){const e=r.marketRun;if(!e||e.recorded)return;const t=e.score>=Math.ceil(e.demands.length*.6),n=t?Math.round(e.revenue*.05):0;n&&(r.cash+=n,r.dayRev+=n,r.monthRev+=n,e.revenue+=n),rf("market",e,t)}function cf(){r.orders=[];const e=Math.min(.9,.55+r.popularity/350),t=1+(Math.random()<e?1:0);for(let n=0;n<t;n++){const s=hn.value;if(!s.length)break;const o=s[Math.floor(Math.random()*s.length)],i=Math.random(),a=i<.35,c=!a&&i<.68,u=!a&&!c&&i<.8,p=a?"定制":c?"线上":u?"节日":"普通",d=a?1:1+Math.floor(Math.random()*3);r.orders.push({id:"o"+r.month+"-"+r.day+"-"+n,orderNo:"LJ-"+String(r.month).padStart(2,"0")+String(r.day).padStart(2,"0")+"-"+String(n+1).padStart(2,"0"),type:p,customer:a?"预约顾客":c?"线上顾客":u?"节日顾客":"附近顾客",product:o.id,qty:d,pay:Math.round(Qt(o.id)*d*(a?1.6*(1+pn("packing")):c?1.25:1)),due:a?["粉色小花","清爽配色","简洁裱花"][Math.floor(Math.random()*3)]:"",blessing:a?["生日快乐","愿你每天都有好心情","把今天的甜分享给你"][Math.floor(Math.random()*3)]:"",taken:!1})}}function uf(e){if(r.dayPhase!=="prep")return!1;const t=r.orders.find(n=>n.id===e);return t?(t.taken=!t.taken,ue(),!0):!1}function aa(e,t=1){const n=r.batches.filter(s=>s.product===e&&s.qty>0);return n.reduce((s,o)=>s+o.qty,0)>=t?n[0]:null}function ca(e,t){const n=r.batches.filter(i=>i.product===e&&i.qty>0);if(n.reduce((i,a)=>i+a.qty,0)<t)return[{qty:t,quality:"normal"}];let s=t;const o=[];for(const i of n){const a=Math.min(s,i.qty);if(a&&(i.qty-=a,o.push({qty:a,quality:i.quality||"normal"}),s-=a,!s))break}return s?[{qty:t,quality:"normal"}]:o}function df(){var d;if(r.phase!=="playing"||r.dayPhase!=="service-ready"||r.service)return null;const e={tickets:[],current:0,unhappy:0,startedAt:Date.now(),automationUnlocked:or()},t=r.orders.filter(h=>h.taken);t.forEach(h=>{const k=30+5*(h.qty-1);e.tickets.push({...h,kind:"appointment",status:"waiting",patience:k,remaining:k,customSatisfied:!0})});const n=Math.max(1,Math.min(4,r.shopLevel)),s=[[3,5],[5,7],[7,9],[9,12]],[o,i]=s[n-1],a=o+Math.floor(Math.random()*(i-o+1)),c=Math.max(0,r.reputation-20)/240+Math.max(0,r.popularity-10)/350+Math.max(0,r.loyalty-20)/400,u=Math.max(o,Math.min(i,Math.round(a*(1+c+jr.value*.02+pn("display"))))),p=Math.max(1,u-t.length);for(let h=0;h<p;h++){const k=po().find(A=>h===0),g=hn.value,I=k?$e(k.product):g[Math.floor(Math.random()*g.length)],_=1+Math.floor(Math.random()*3),w=30+5*(_-1);e.tickets.push({id:"visit-"+r.dayIndex+"-"+h,kind:"walkin",type:k?"熟客":"到店",customer:k?k.name:["附近居民","学生顾客","路过的客人","带孩子的家长","年轻客人"][Math.floor(Math.random()*5)],product:I.id,qty:_,pay:Qt(I.id)*_,clue:k?"我还是想买那款熟悉的蛋糕。":pf(I.id),due:"",blessing:"",status:"waiting",patience:w,remaining:w,customSatisfied:!0})}return r.orders=[],r.service=e,r.dayPhase="service",e.activeTicketId=((d=e.tickets[0])==null?void 0:d.id)||null,e.automationUnlocked&&r.staffAssignments.auto&&_f(),ue(),{customers:e.tickets.length}}const ff={plain:"想吃一款奶油薄一点、味道熟悉的经典蛋糕。",strawberry:"今天想买草莓酸甜口的奶油蛋糕。",chocolate:"有偏浓的可可味蛋糕吗？",taro:"想尝尝芋泥和脆脆夹心的搭配。",matcha:"有清香的茶味吗？希望甜度低一些。",mango:"想要清爽一点的芒果甜点。",tiramisu:"今天想吃咖啡味和奶酪味的蛋糕。",fig:"有没有放新鲜水果、奶油又轻一点的蛋糕？",seasonal:"想挑一款能尝到当季水果的蛋糕。",custom:"想订一份适合庆祝的精致蛋糕。",festival:"最近过节，想带一份有节日气氛的点心。",signature:"听说有桂花和栗子的秋日招牌。"};function pf(e){return ff[e]||"想挑一款店里受欢迎的蛋糕。"}function or(){return r.shopLevel>=3&&r.staff.filter(e=>(r.partnerSkill[e]||1)>=3).length>=3}function In(e=r.service){if(!e)return[];const t=Math.max(1,Math.min(3,r.shopLevel));return e.tickets.slice(e.current,e.current+t).filter(n=>!["delivered","unavailable"].includes(n.status))}function ir(e=r.service){const t=In(e);return t.find(n=>n.id===(e==null?void 0:e.activeTicketId))||t[0]||null}function hf(e){return r.dayPhase!=="service"||!r.service||!In().some(t=>t.id===e)?!1:(r.service.activeTicketId=e,ue(),!0)}function ua(e){var t;for(;e.current<e.tickets.length&&["delivered","unavailable"].includes(e.tickets[e.current].status);)e.current+=1;e.activeTicketId=((t=In(e)[0])==null?void 0:t.id)||null}function Ci(e){if(r.phase!=="playing"||r.dayPhase!=="prep")return!1;const t=new Set(r.staff),n={picker:null,packer:null,auto:!1,...e||{}};return n.picker&&!t.has(n.picker)&&(n.picker=null),n.packer&&!t.has(n.packer)&&(n.packer=null),n.picker&&n.picker===n.packer&&(n.packer=null),or()||(n.auto=!1),r.staffAssignments=n,ue(),!0}function vf(e,t,n){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"現在不是营业接待阶段。"};const s=ir();if(!s||s.id!==e||s.status!=="waiting")return{ok:!1,message:"这位顾客的订单已在处理。"};if(t!==s.product)return{ok:!1,message:"口味不符合顾客需求，再找找看。"};if(n!==s.qty)return{ok:!1,message:"请按顾客的数量要求找蛋糕。"};if((r.shelf[t]||0)<n)return{ok:!1,message:"展示柜里的数量不够。"};if(In().filter(i=>i.status==="searching").length>=1+(r.staffAssignments.picker?1:0))return{ok:!1,message:"找货工位正忙，先支援或处理另一位顾客。"};const o=aa(t,n);return o?(s.selected=t,s.selectedQty=n,s.packBatchId=o.id,s.findRemaining=2/gf("picker"),s.status="searching",ue(),{ok:!0,message:"在展示柜里找蛋糕。"}):{ok:!1,message:"展示柜里找不到这批蛋糕。"}}function mf(e,t=null,n=null){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"現在不是营业接待阶段。"};const s=ir();return!s||s.id!==e||s.status!=="found"?{ok:!1,message:"先从展示柜取出正确的蛋糕。"}:s.type==="定制"&&t!==s.due?{ok:!1,message:"装饰还没有符合预订要求。"}:s.type==="定制"&&n!==s.blessing?{ok:!1,message:"祝福语还没有符合预订要求。"}:In().filter(o=>o.status==="packing").length>=1+(r.staffAssignments.packer?1:0)?{ok:!1,message:"打包工位正忙，先支援或处理另一位顾客。"}:(s.decoration=t,s.packedBlessing=n,s.packRemaining=3.6,s.packElapsed=0,s.status="packing",ue(),{ok:!0,message:"开始打包。"})}function gf(e){const t=r.staffAssignments&&r.staffAssignments[e];return t&&r.staff.includes(t)?1+Math.max(0,(r.partnerSkill[t]||1)-1)*.15:1}function yf(e=1){if(r.dayPhase!=="service"||!r.service)return;const t=Math.max(0,e);In().forEach(n=>{if(n.remaining=Math.max(0,n.remaining-t),n.status==="searching"&&(n.findRemaining=Math.max(0,n.findRemaining-t),n.findRemaining===0&&(n.status="found")),n.status==="packing"&&(n.packRemaining=Math.max(0,n.packRemaining-t),n.packElapsed=Math.min(3.6,(n.packElapsed||0)+t),n.packRemaining===0&&(n.status="ready")),n.remaining===0&&!n.unhappy){n.unhappy=!0,r.service.unhappy+=1;const s=Math.min(.1,Math.max(0,.5-(r.dayReputationLoss||0)));r.dayReputationLoss=(r.dayReputationLoss||0)+s,r.reputation=Te(r.reputation-s),me(n.customer+"等得有些久，耐心少了一点。","bad")}}),Math.floor(Date.now()/1e3)!==r.service.lastSavedSecond&&(r.service.lastSavedSecond=Math.floor(Date.now()/1e3),ue())}function da(e){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"营业已结束。"};const t=r.service,n=ir(t);if(!n||n.id!==e||n.status!=="ready")return{ok:!1,message:"蛋糕还没包好。"};if((r.shelf[n.product]||0)<n.qty)return{ok:!1,message:"展示柜里的数量不够。"};const s=ca(n.product,n.qty);r.shelf[n.product]-=n.qty;const o=n.pay/n.qty,i=Math.round(s.reduce((a,c)=>a+o*c.qty*(c.quality==="perfect"?1.1:c.quality==="fine"?1.05:1),0));return r.cash+=i,r.dayRev+=i,r.monthRev+=i,r.daySold+=n.qty,r.monthSold[n.product]=(r.monthSold[n.product]||0)+n.qty,r.doneOrders+=1,n.type==="定制"&&(r.customOrders+=1),n.type==="线上"&&(r.onlineOrders+=1),n.type==="节日"&&(r.festivalOrders+=1),(n.customer==="陈奶奶"||n.customer==="张叔")&&Dd({[n.product]:n.qty}),r.loyalty=Te(r.loyalty+.15),r.popularity=Te(r.popularity+.02),n.status="delivered",me("交付「"+$e(n.product).name+"」×"+n.qty+"，收入 ¥"+i+" 已到账","good"),n.type==="定制"&&(t.customDone=(t.customDone||0)+1),r.challenge&&r.challenge.type==="new"&&r.challenge.target===n.product&&(t.challengeNewSold=(t.challengeNewSold||0)+n.qty),ua(t),go(),ue(),{ok:!0,message:n.customer+"收下了蛋糕，¥"+i+" 已到账。"}}function bf(e){const t=r.service,n=ir(t);return!n||n.id!==e||r.dayPhase!=="service"?!1:(n.status="unavailable",ua(t),go(),ue(),!0)}function _f(){const e=r.service;if(e){for(;e.current<e.tickets.length;){const t=e.tickets[e.current];if(e.activeTicketId=t.id,(r.shelf[t.product]||0)<t.qty){t.status="unavailable",e.current+=1;continue}t.status="ready",t.packBatchId=(aa(t.product,t.qty)||{}).id,da(t.id)}go()}}function go(){const e=r.service;if(!e||e.current<e.tickets.length)return;r.dayPhase="closing";const t=e.tickets.filter(n=>n.status==="delivered").length;if(t&&(r.reputation=Te(r.reputation+.06),r.loyalty=Te(r.loyalty+.1)),!r.challengeDone&&r.challenge){const n=r.daySold,s=Object.values(r.shelf).reduce((i,a)=>i+a,0),o=r.challenge.type==="stock"?s/Math.max(1,n+s)<=.1:r.challenge.type==="new"?(e.challengeNewSold||0)>=3:(e.customDone||0)>0;if(o){const i=Math.round(r.dayRev*.05);r.cash+=i,r.dayRev+=i,r.monthRev+=i,me("今日经营挑战完成，额外收入 ¥"+i,"good")}r.challengeDone=!0,me("今日经营挑战："+(o?"完成":"未完成"),o?"good":"normal")}me("营业结束，完成 "+t+" / "+e.tickets.length+" 位顾客","good"),ue()}const Ur={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function fa(e){if(r.phase!=="playing"||r.dayPhase!=="closing")return null;const t=Ur[e]||Ur.discount;let n=0,s=0;for(const a of Object.keys(r.shelf))n+=r.shelf[a]||0,s+=(r.shelf[a]||0)*Qt(a);let o=0;if(n>0){const a=t.cashRate>0?t.cashRate+pn("fridge"):0;o=Math.round(s*a),r.cash+=o,t.community&&(r.style.community+=t.community*.3,r.reputation=Te(r.reputation+t.community*.05))}r.dayLeft=n,r.shelf={},r.batches=[];const i={day:r.day,rev:r.dayRev,sold:r.daySold,left:n,gain:o};return r.dayRev=0,r.daySold=0,r.dayMade=0,r.dayPhase="report",r.service=null,kf(),ue(),i}function kf(){r.day+=1,r.dayIndex+=1,r.day>ts?(r.day=1,Mf()):lr()}function lr(){r.ap=r.maxAp,r.stamina=Math.min(r.maxStamina,r.stamina+70),r.plan={},r.dayPhase="prep",r.service=null,r.productionMini=null,r.productionResult=null,r.dayReputationLoss=0,r.challengeDone=!1,Xl(),r.shelf||(r.shelf={}),cf(),ue()}function Mf(){const e=ea.value;r.monthCost+=e,r.cash-=e;let t=null;r.cash<0&&(r.usedMomHelp?(r.cash=0,r.reputation=Te(r.reputation-2),t="这个月很难，勉强撑过去了"):(r.cash=3e3,r.usedMomHelp=!0,t="资金见底，妈妈先垫了一笔周转"),me(t,"bad"));let n=null,s=0;Object.keys(r.monthSold).forEach(p=>{r.monthSold[p]>s&&(s=r.monthSold[p],n=p)});const o=r.monthSnap||{rep:r.reputation,unlocked:[],skill:{}},i=r.unlocked.filter(p=>o.unlocked.indexOf(p)<0),a=[];r.staff.forEach(p=>{const d=o.skill[p]||0,h=r.partnerSkill[p]||0;if(h-d>=.3){const k=Cn(p);a.push((k?k.nick||k.name:p)+" 专业 +"+(h-d).toFixed(1))}}),r.report={month:r.month,rev:r.monthRev,cost:r.monthCost,net:r.monthRev-r.monthCost,best:n?$e(n).name:"—",bestN:s,warn:t,fresh:i.map(p=>($e(p)||{}).name).filter(Boolean),repDelta:Math.round((r.reputation-o.rep)*10)/10,rep:Math.round(r.reputation),grown:a,trust:Object.keys(r.partnerTrust).map(p=>{const d=Cn(p);return{name:d?d.nick||d.name:p,v:Math.round(r.partnerTrust[p]||0)}})},r.monthSnap={rep:r.reputation,unlocked:r.unlocked.slice(),skill:Object.assign({},r.partnerSkill)};const c=r.month;if(r.month+=1,r.monthRev=0,r.monthCost=0,r.monthSold={},r.shelf={},$n.forEach(p=>{p.joinMonth===r.month&&oa(p.id)}),c===29){const p=Object.values(r.partnerTrust).filter(d=>d>=70).length;r.helpers=p+(r.momBond>=70?1:0)}const u=En.find(p=>p.to===c&&!p.final);if(u){const p=Ie.stages[u.id];if(!$f(u)){r.phase="ended",r.ending={...u.short,key:u.short.key,text:""},p&&p.failId&&Gt(Ie.find(p.failId)),me("阶段目标没有达成","bad"),ue();return}r.stage=u.id+1,p&&p.pass.length&&Gt({id:"STAGE_PASS_"+u.id,title:u.name+" · 阶段达成",chapter:u.name,kind:"stage",beats:p.pass}),me("第 "+u.id+" 阶段目标达成","good")}if(r.month>36){r.month=36,r.phase="ended";const p=Cf();r.ending={...Hl[p],key:p},Gt(Ie.find(xf[p])),ue();return}r.stamina=r.maxStamina,lr(),yo()}const xf={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function $f(e){if(!e.goals.length)return!0;const t=e.goals.filter(n=>n.check(r));return!(t.length<e.need||e.needExpand&&!t.some(n=>n.expand))}function Cf(){if(r.acquired)return"transfer";if(r.storeCount>=6)return"national";if(r.storeCount>=3)return"regional";const e=r.style,t=Object.keys(e).sort((s,o)=>e[o]-e[s])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[t]||"community"}function Gt(e){e&&(Fe.events.find(t=>t.id===e.id)||Fe.events.push(e))}function yo(){const e=Ie.events.filter(t=>!(t.kind!=="main"||r.played.includes(t.id)||t.month==null||r.month<t.month||t.test&&!Fr(t.test,r)));e.sort((t,n)=>t.month-n.month||t.order-n.order),e.forEach(Gt),Ie.events.filter(t=>t.kind==="style"&&!r.played.includes(t.id)&&Fr(t.test,r)).forEach(Gt)}function wf(e){const t=Ie.events.filter(s=>s.kind==="tutorial").sort((s,o)=>(s.order||0)-(o.order||0)),n=e?t.filter(s=>s.id!=="EVT_TUTORIAL_SKIP"):t.filter(s=>s.id==="EVT_TUTORIAL_SKIP");return n.forEach(Gt),r.tutorialSeen=!0,r.tutorialProgress=e?1:0,ue(),n.length}function Hr(){const e=Ie.events.find(t=>t.kind==="prologue");e&&!r.played.includes(e.id)&&!Fe.events.some(t=>t.id===e.id)&&Gt(e),yo()}function Ef(e){(e.ids&&e.ids.length?e.ids:[e.id]).forEach(s=>{r.played.includes(s)||r.played.push(s)}),Wd(e.rewards||[]).length&&me("剧情："+e.title,"story"),ue()}const Sf={xiaoyu:[{trust:80,skill:4,done:"EVT_M11_YUTONG_BOOK"},{trust:80},{skill:4},{}],zhiyao:[{trust:75,skill:4,done:"EVT_M19_MAIN"},{}],kexin:[{trust:75,skill:4,done:"EVT_M21_MAIN"},{}],qinghe:[{trust:75,skill:4,done:"EVT_M25_MAIN"},{}],mom:[{bond:75},{}]};function wi(e){const t=(Ie.partnerEndings||{})[e];if(!t||!t.length)return null;const n=r.partnerTrust[e]||0,s=r.partnerSkill[e]||0,o=r.momBond||0,i=Sf[e];if(!i)return n>=70?t[0]:t[1];for(const a of i)if(!(a.trust!=null&&n<a.trust)&&!(a.skill!=null&&s<a.skill)&&!(a.bond!=null&&o<a.bond)&&!(a.done&&!r.played.includes(a.done)))return t[Math.min(i.indexOf(a),t.length-1)];return t[t.length-1]}const Ue=(e,t)=>{const n=e.__vccOpts||e;for(const[s,o]of t)n[s]=o;return n},Tf={class:"vn"},If=["src"],Af={key:0,class:"vn-cg"},Rf=["src"],Of={class:"vn-cg-cap"},Nf={key:0,class:"vn-cast"},Df=["src","alt"],Pf={class:"vn-top"},Lf={class:"vn-titles"},Ff={class:"vn-chapter"},Vf={key:0,class:"vn-scene"},jf={key:1,class:"vn-scene"},Bf={class:"vn-tools"},qf={key:1,class:"vn-choice"},Uf={class:"vn-ask"},Hf=["onClick"],Kf={class:"t"},Gf={key:0,class:"vn-note"},Wf={key:0,class:"vn-name"},zf=["src"],Yf={key:1},Jf={class:"vn-text"},Qf={key:0,class:"caret"},Zf={class:"vn-foot"},Xf={key:1,class:"vn-dot"},ep={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:t}){const n=e,s=t,o=ee([]),i=ee(0),a=ee(0),c=ee(!1);let u=0,p=0;function d(ce){for(let pe=0;pe<ce.length;pe++){const he=ce[pe].t;if(he!=="scene"&&he!=="cg"&&he!=="cgend"&&he!=="act")return pe}return Math.max(0,ce.length-1)}const h=B(()=>o.value[i.value]||null),k=B(()=>i.value>=o.value.length-1),g=B(()=>!!h.value&&h.value.t==="choice"),I=B(()=>!!h.value&&h.value.t==="say"),_=B(()=>!!h.value&&h.value.t==="nar"),w=B(()=>h.value&&h.value.text||""),A=B(()=>w.value.slice(0,a.value)),L=B(()=>a.value<w.value.length),G=B(()=>{for(let ce=i.value;ce>=0;ce--)if(o.value[ce].t==="scene")return ce;return-1}),D=B(()=>G.value>=0?o.value[G.value]:null),E=B(()=>{for(let ce=i.value;ce>=0;ce--){if(o.value[ce].t==="act")return o.value[ce].text;if(o.value[ce].t==="scene")return""}return""}),Z=B(()=>xd(n.ev)),te=B(()=>{if(D.value){const ce=Wl(D.value.text);if(ce)return ce}return Z.value}),K=B(()=>Fs[te.value]||Fs.shop),ne=B(()=>Id(K.value)),se=B(()=>Cd(te.value)),z=B(()=>!!D.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(D.value.text)),q=B(()=>{let ce=-1;for(let pe=i.value;pe>=0;pe--){const he=o.value[pe].t;if(he==="cg"){ce=pe;break}if(he==="cgend")return""}return ce<0||ce<G.value?"":o.value[ce].key}),U=B(()=>q.value?Vs(q.value):null),P={念念:"林念",小雨:"周雨桐",知遥:"许知遥",阿鸢:"唐鸢",鸢姐:"唐鸢",星河:"叶星河",妈妈:"林暖"},S=B(()=>{const ce=Qe=>Qe&&gi[Qe]&&Sd(Qe,se.value);if(I.value)return ce(h.value.who)?[h.value.who]:[];const pe=h.value&&h.value.text||"",mt=[...Object.keys(gi),"陈奶奶","张叔","李婶","赵叔","沈知夏"].map(Qe=>({name:Qe,at:pe.indexOf(Qe)})).concat(Object.entries(P).map(([Qe,y])=>({name:y,at:pe.indexOf(Qe)}))).filter(Qe=>Qe.at>=0).sort((Qe,y)=>Qe.at-y.at)[0];return mt&&ce(mt.name)?[mt.name]:[]}),x=B(()=>I.value?h.value.who:"");ht(()=>n.ev,()=>{o.value=$s(n.ev.beats||[],r);const ce=r.storyChoices[n.ev.id]||{};for(let pe=0;pe<o.value.length;pe++){const he=o.value[pe];if(he.t!=="choice"||!Number.isInteger(ce[he.node]))continue;const Ye=he.options[ce[he.node]];Ye&&(ki(he,Ye,ce[he.node],n.ev.id),o.value.splice(pe,1,...Ye.branch,...he.after||[]),pe--)}i.value=d(o.value),a.value=0,c.value=!1,T()},{immediate:!0});function $(ce){return{left:"50%",zIndex:10+ce}}function T(){if(clearInterval(u),a.value=0,g.value||!w.value){a.value=w.value.length;return}const ce=Math.max(1,Math.round(w.value.length/40));u=setInterval(()=>{a.value=Math.min(w.value.length,a.value+ce),a.value>=w.value.length&&clearInterval(u)},18)}ht(()=>i.value,T);function N(ce){let pe=ce+1;for(;pe<o.value.length;){const he=o.value[pe].t;if(he==="scene"||he==="cg"||he==="cgend"||he==="act")pe++;else break}return Math.min(pe,o.value.length-1)}function C(){if(!g.value){if(L.value){a.value=w.value.length,clearInterval(u);return}k.value||(i.value=N(i.value))}}function re(ce,pe){ki(h.value,ce,pe,n.ev.id);const he=(ce.branch||[]).concat(h.value.after||[]);o.value.splice(i.value,1,...he);let Ye=Math.max(0,i.value-1);i.value=N(Ye)}function Ce(){for(let ce=i.value+1;ce<o.value.length;ce++)if(o.value[ce].t==="choice"){i.value=ce;return}i.value=o.value.length-1,a.value=w.value.length}function Zt(){clearInterval(u),clearInterval(p),Ef(n.ev),s("done")}function Vt(){c.value=!c.value,clearInterval(p),c.value&&(p=setInterval(()=>{if(k.value){clearInterval(p),c.value=!1;return}if(g.value){clearInterval(p),c.value=!1;return}L.value?a.value=w.value.length:i.value=N(i.value)},1400))}return no(()=>{clearInterval(u),clearInterval(p)}),(ce,pe)=>(v(),m("div",Tf,[l("div",{class:be(["vn-stage",{flash:z.value}])},[l("div",{class:"vn-bg",style:et({background:K.value.css})},[ne.value?(v(),m("img",{key:0,src:ne.value,alt:"",class:"vn-bg-img"},null,8,If)):O("",!0),pe[0]||(pe[0]=l("div",{class:"vn-veil"},null,-1))],4),Re(mu,{name:"cgfade"},{default:Ws(()=>[U.value&&U.value.src?(v(),m("div",Af,[l("img",{src:U.value.src,alt:""},null,8,Rf),l("div",Of,f(U.value.name),1)])):O("",!0)]),_:1}),q.value?O("",!0):(v(),m("div",Nf,[(v(!0),m(W,null,oe(S.value,(he,Ye)=>(v(),m("div",{key:he,class:be(["vn-actor",{dim:x.value&&x.value!==he,off:!x.value}]),style:et($(Ye))},[l("img",{src:b(wd)(he,se.value),alt:he},null,8,Df)],6))),128))])),l("div",Pf,[l("div",Lf,[l("div",Ff,f(e.ev.title),1),E.value?(v(),m("div",Vf,f(E.value),1)):D.value?(v(),m("div",jf,f(D.value.text),1)):O("",!0)]),l("div",Bf,[l("button",{type:"button",class:be({on:c.value}),onClick:$t(Vt,["stop"])},"自动",2),l("button",{type:"button",onClick:$t(Ce,["stop"])},"跳过")])]),g.value?(v(),m("div",qf,[l("div",Uf,f(h.value.prompt),1),(v(!0),m(W,null,oe(h.value.options,(he,Ye)=>(v(),m("button",{key:Ye,type:"button",class:"vn-opt",onClick:$t(mt=>re(he,Ye),["stop"])},[l("span",Kf,f(he.label),1)],8,Hf))),128)),h.value.note?(v(),m("p",Gf,f(h.value.note),1)):O("",!0)])):(v(),m("div",{key:2,class:be(["vn-box",{nar:_.value}]),onClick:C},[I.value?(v(),m("div",Wf,[b(Vr)(h.value.who)?(v(),m("img",{key:0,src:b(Vr)(h.value.who),alt:""},null,8,zf)):O("",!0),l("span",null,f(h.value.who),1),h.value.emo&&h.value.emo!=="视角"?(v(),m("em",Yf,f(h.value.emo),1)):O("",!0)])):O("",!0),l("div",Jf,[st(f(A.value),1),L.value?(v(),m("span",Qf)):O("",!0)]),l("div",Zf,[k.value&&!L.value?(v(),m("span",{key:0,class:"vn-end",onClick:$t(Zt,["stop"])},"结束 ←")):(v(),m("span",Xf,"▾"))])],2))],2)]))}},tp=Ue(ep,[["__scopeId","data-v-d2ecb655"]]),ns="".replace(/\/$/,""),np=typeof window<"u"&&(window.location.protocol==="https:"||["localhost","127.0.0.1"].includes(window.location.hostname)),sp=/^https:\/\//i.test(ns)||/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(ns),rp=!!ns&&np&&sp,op="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function ip(){const e=new Uint8Array(20);return crypto.getRandomValues(e),Array.from(e,t=>op[t&31]).join("")}async function bo(e,t={}){if(!ns)throw new Error("云存档服务暂不可用。");const n=await fetch(ns+e,t),s=await n.json().catch(()=>({}));if(!n.ok){const o=new Error(s.message||"云存档请求失败。");throw o.status=n.status,o.data=s,o}return s}function _o(e){return{"X-Recovery-Code":e.replace(/\s+/g,"").toUpperCase()}}function lp(e){return bo("/api/save/meta",{headers:_o(e)})}function Ei(e,t,n){const s={..._o(e),"Content-Type":"application/json"};return n!=null&&(s["If-Match"]=String(n)),bo("/api/save",{method:"PUT",headers:s,body:t})}async function ap(e,t){return bo("/api/save",{headers:{..._o(e),"If-Match":String(t)}})}const cp=["src"],up={key:1,viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},dp=["fill"],fp=["fill"],pp=["fill"],hp=["fill"],vp=["fill"],mp=["fill"],gp=["fill"],yp=["fill"],bp=["fill"],_p=["fill"],kp=["fill"],Mp={__name:"CakeArt",props:{id:{type:String,default:""},colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){const t=e,n=B(()=>t.id&&ze("cake-"+t.id+".webp")==="ok"?Ae("cake-"+t.id+".webp"):"");return(s,o)=>n.value?(v(),m("img",{key:0,src:n.value,alt:"",class:"cakeart photo"},null,8,cp)):(v(),m("svg",up,[o[0]||(o[0]=l("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),o[1]||(o[1]=l("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),l("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,dp),l("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,fp),l("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,pp),l("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,hp),l("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,vp),l("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,mp),l("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,gp),l("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,yp),l("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,bp),l("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,_p),l("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,kp)]))}},ko=Ue(Mp,[["__scopeId","data-v-bd8df027"]]),xp={class:"seg"},$p=["onClick"],Cp={key:0,class:"card"},wp={class:"art"},Ep={class:"body"},Sp={class:"name"},Tp={class:"chip",style:{"font-size":"10px"}},Ip={key:0,class:"chip",style:{"font-size":"10px"}},Ap={class:"desc"},Rp={key:0,class:"hint"},Op={key:1,class:"nums"},Np={key:1},Dp={class:"photos"},Pp={class:"im"},Lp=["src","alt"],Fp={key:1,class:"small muted"},Vp={key:2,style:{"font-size":"20px",opacity:"0.3"}},jp={class:"cp"},Bp={class:"ti"},qp={class:"cc"},Up={class:"cc"},Hp={key:2,class:"cg-gallery"},Kp=["disabled","onClick"],Gp={class:"im"},Wp=["src","alt"],zp={key:1},Yp={class:"cp"},Jp={class:"ti"},Qp={class:"cc"},Zp={key:3,class:"lab-list"},Xp={key:0,class:"card card-pad small muted"},eh={class:"between"},th={class:"h2",style:{margin:"0"}},nh={class:"chip",style:{"font-size":"10px"}},sh=["src"],rh={class:"between"},oh={class:"small muted"},ih={key:0,class:"lab-scores"},lh={key:1,class:"small muted"},ah={key:4,class:"card"},ch={style:{flex:"1 1 auto","min-width":"0"}},uh={class:"nm"},dh={key:0,class:"chip sage",style:{"font-size":"10px"}},fh={key:1,class:"chip pink",style:{"font-size":"10px"}},ph={class:"nt"},hh={key:0,class:"nt"},vh={key:5,class:"customer-list"},mh={class:"between"},gh={class:"h2",style:{margin:"0"}},yh={class:"chip",style:{"font-size":"10px"}},bh={class:"cc"},_h={class:"cc"},kh={class:"small muted"},Mh={key:6,class:"collection"},xh={class:"h2"},$h={class:"small muted"},Ch=["aria-label"],wh=["src","alt"],Eh={__name:"CodexPage",props:{initialSegment:{type:String,default:"product"}},setup(e){const n=ee(e.initialSegment),s=ee(null),o=B(()=>Je.map(g=>({...g,flavor:(Ie.codex[g.id]||{}).flavor||g.desc,hint:(Ie.codex[g.id]||{}).hint||"",owned:r.unlocked.includes(g.id),current:r.unlocked.includes(g.id),collected:r.career.products.includes(g.id),lv:Math.round((r.levels[g.id]||1)*10)/10,price:Qt(g.id),sold:r.monthSold[g.id]||0}))),i=B(()=>Object.keys(fs).map(g=>({id:g,...fs[g],owned:r.photos.includes(g),current:r.photos.includes(g),collected:r.career.photos.includes(g)}))),a=B(()=>Je.map(g=>({...g,reports:r.career.labReports[g.id]||{}})).filter(g=>g.reports.development||g.reports.improvement)),c=B(()=>Vs("osmanthus").src),u=B(()=>Yl.map(g=>({id:g.id,...Vs(g.id),collected:r.career.cgs.includes(g.id)}))),p=B(()=>wn.map(g=>({...g,owned:r.cities.includes(g.id),surveyed:r.surveyed.includes(g.id)}))),d=B(()=>lo.map(g=>({...g,productName:Je.find(I=>I.id===g.product).name,visit:r.regularCustomers[g.id]}))),h=B(()=>({products:Je.map(g=>({id:g.id,name:g.name,collected:r.career.products.includes(g.id),current:r.unlocked.includes(g.id)})),photos:Object.keys(fs).map(g=>({id:g,name:fs[g].title,collected:r.career.photos.includes(g),current:r.photos.includes(g)})),cgs:u.value.map(g=>({id:g.id,name:g.name,collected:g.collected,current:g.collected})),decorations:io.map(g=>({id:g.id,name:g.name,collected:r.career.decorations.includes(g.id),current:r.decorations.includes(g.id)})),endings:[...En.filter(g=>!g.final).map(g=>({id:g.short.key,name:g.short.name,collected:r.career.endings.includes(g.short.key),current:r.runEndings.includes(g.short.key)})),...Object.entries(Hl).map(([g,I])=>({id:g,name:I.name,collected:r.career.endings.includes(g),current:r.runEndings.includes(g)}))]}));function k(g){return g.current?"本轮已解锁":g.collected?"已收录 · 本轮未解锁":"尚未收录"}return(g,I)=>(v(),m("div",null,[l("div",xp,[(v(),m(W,null,oe([{k:"product",t:"产品"},{k:"customer",t:"顾客"},{k:"photo",t:"相册"},{k:"cg",t:"CG"},{k:"city",t:"门店"},{k:"collection",t:"收藏"},{k:"lab",t:"实验档案"}],_=>l("button",{key:_.k,type:"button",class:be({on:n.value===_.k}),onClick:w=>n.value=_.k},f(_.t),11,$p)),64))]),n.value==="product"?(v(),m("div",Cp,[(v(!0),m(W,null,oe(o.value,_=>(v(),m("div",{key:_.id,class:be(["cake",{locked:!_.owned}])},[l("div",wp,[Re(ko,{id:_.id,colors:_.colors},null,8,["id","colors"])]),l("div",Ep,[l("div",Sp,[l("span",null,f(_.name),1),l("span",Tp,f(k(_)),1),_.owned?(v(),m("span",Ip,"Lv"+f(_.lv),1)):O("",!0)]),l("div",Ap,f(_.owned?_.flavor:"第 "+_.month+" 个月解锁"),1),_.owned&&_.hint?(v(),m("div",Rp,"配方："+f(_.hint),1)):O("",!0),_.owned?(v(),m("div",Op,[l("span",null,"¥"+f(_.price),1),l("span",null,f(_.diff)+" 点/个",1),l("span",null,"本月卖出 "+f(_.sold),1)])):O("",!0)])],2))),128))])):n.value==="photo"?(v(),m("div",Np,[l("div",Dp,[(v(!0),m(W,null,oe(i.value,_=>(v(),m("div",{key:_.id,class:"photo"},[l("div",Pp,[_.collected&&_.img?(v(),m("img",{key:0,src:_.img,alt:_.title},null,8,Lp)):_.collected?(v(),m("span",Fp,"未冲印")):(v(),m("span",Vp,"?"))]),l("div",jp,[l("div",Bp,f(_.collected?_.title:"还没发生"),1),l("div",qp,f(_.collected?_.caption:"继续经营，它会出现"),1),l("div",Up,f(k(_)),1)])]))),128))])])):n.value==="cg"?(v(),m("div",Hp,[(v(!0),m(W,null,oe(u.value,_=>(v(),m("button",{key:_.id,class:"photo cg-card",type:"button",disabled:!_.collected||!_.src,onClick:w=>s.value=_},[l("span",Gp,[_.collected&&_.src?(v(),m("img",{key:0,src:_.src,alt:_.name},null,8,Wp)):(v(),m("span",zp,"?"))]),l("span",Yp,[l("span",Jp,f(_.collected?_.name:"还没发生"),1),l("span",Qp,f(k(_)),1)])],8,Kp))),128))])):n.value==="lab"?(v(),m("div",Zp,[a.value.length?O("",!0):(v(),m("div",Xp,"完成一次新品上架或配方改良后，报告会保存在这里。")),(v(!0),m(W,null,oe(a.value,_=>{var w;return v(),m("article",{key:_.id,class:"card card-pad lab-report"},[l("div",eh,[l("div",th,f(_.name),1),l("span",nh,f(b(r).career.products.includes(_.id)?"配方已收录":"已研发"),1)]),((w=_.reports.development)==null?void 0:w.type)==="signature"&&c.value?(v(),m("img",{key:0,class:"lab-cg",src:c.value,alt:"桂花栗子蛋糕复原插画"},null,8,sh)):O("",!0),(v(),m(W,null,oe(["development","improvement"],A=>l("div",{key:A,class:"lab-entry"},[_.reports[A]?(v(),m(W,{key:0},[l("div",rh,[l("strong",null,f(A==="improvement"?"配方改良":_.reports[A].type==="signature"?"外婆配方复原":_.reports[A].refined?"精制新品研发":"新品研发"),1),l("span",oh,"第 "+f(_.reports[A].run)+" 轮 · M"+f(_.reports[A].month),1)]),A==="development"?(v(),m("div",ih,[l("span",null,"总分 "+f(_.reports[A].score),1),(v(),m(W,null,oe([{key:"flavor",label:"风味"},{key:"texture",label:"口感"},{key:"appearance",label:"外观"},{key:"cost",label:"成本"}],L=>l("span",{key:L.key},f(L.label)+" "+f(_.reports[A].scores[L.key]),1)),64))])):(v(),m("div",lh,"熟练度 Lv"+f(_.reports[A].levelBefore)+" → Lv"+f(_.reports[A].levelAfter),1)),(v(!0),m(W,null,oe(_.reports[A].feedback,L=>(v(),m("p",{key:L,class:"lab-note"},f(L),1))),128))],64)):O("",!0)])),64))])}),128))])):n.value==="city"?(v(),m("div",ah,[(v(!0),m(W,null,oe(p.value,_=>(v(),m("div",{key:_.id,class:be(["city",{on:_.owned,off:!_.owned&&!_.surveyed}])},[I[2]||(I[2]=l("span",{class:"dot"},null,-1)),l("div",ch,[l("div",uh,[st(f(_.name)+" ",1),_.owned?(v(),m("span",dh,"营业中")):_.surveyed?(v(),m("span",fh,"已考察")):O("",!0)]),l("div",ph,f(_.note),1),_.owned?O("",!0):(v(),m("div",hh," 第 "+f(_.month)+" 个月可考察 · 口碑 "+f(_.rep)+" · 开店 ¥"+f(_.cost),1))])],2))),128))])):n.value==="customer"?(v(),m("div",vh,[(v(!0),m(W,null,oe(d.value,_=>(v(),m("div",{key:_.id,class:"card card-pad customer"},[l("div",mh,[l("div",gh,f(_.name),1),l("span",yh,f(_.visit.purchases)+" 次购买",1)]),l("div",bh,"每月第 "+f(_.day)+" 个经营日 · "+f(_.productName),1),l("div",_h,f(_.preference),1),(v(!0),m(W,null,oe(_.stories,(w,A)=>(v(),m("div",{key:A,class:"customer-story"},[l("div",kh,f(A===0?"第一次购买":"第三次购买"),1),l("div",null,f(_.visit.stories.includes(A)?w:"继续经营，解锁这段回忆"),1)]))),128))]))),128))])):(v(),m("div",Mh,[(v(),m(W,null,oe([{key:"products",title:"产品"},{key:"photos",title:"相册"},{key:"cgs",title:"CG"},{key:"decorations",title:"装饰"},{key:"endings",title:"结局"}],_=>l("div",{key:_.key,class:"card card-pad"},[l("div",xh,f(_.title),1),(v(!0),m(W,null,oe(h.value[_.key],w=>(v(),m("div",{key:w.id,class:"between collect-row"},[l("span",null,f(w.name),1),l("span",$h,f(k(w)),1)]))),128))])),64))])),s.value?(v(),m("div",{key:7,class:"cg-lightbox",role:"dialog","aria-modal":"true","aria-label":s.value.name,onClick:I[1]||(I[1]=$t(_=>s.value=null,["self"]))},[l("button",{class:"cg-lightbox-close",type:"button","aria-label":"关闭 CG",onClick:I[0]||(I[0]=_=>s.value=null)},"✕"),l("img",{src:s.value.src,alt:s.value.name},null,8,wh),l("div",null,f(s.value.name),1)],8,Ch)):O("",!0)]))}},pa=Ue(Eh,[["__scopeId","data-v-3f325a7e"]]),Sh={key:0,class:"title-screen"},Th=["src"],Ih={key:1,class:"title-frame title-menu"},Ah=["src"],Rh=["disabled"],Oh={class:"title-screen-reader","aria-live":"polite"},Nh={key:2,class:"title-collection"},Dh={class:"title-collection-body"},Ph={key:3,class:"title-panel-mask"},Lh=["aria-label"],Fh={class:"title-panel-head"},Vh={class:"title-panel-body"},jh={key:0,class:"save-group"},Bh=["disabled"],qh=["disabled"],Uh={key:1,class:"save-group"},Hh=["disabled"],Kh=["disabled"],Gh={key:0,class:"save-note"},Wh={key:1,class:"save-feedback",role:"status"},zh={key:2,class:"recovery-code"},Yh={key:3,class:"save-preview"},Jh={key:2,class:"save-group"},Qh=["disabled"],Zh={key:0,class:"save-note"},Xh={key:1,class:"save-feedback",role:"status"},ev={key:2,class:"save-preview"},tv={key:3,class:"save-preview"},nv={key:0,class:"title-panel-foot"},sv={key:4,class:"title-panel-mask confirm-mask"},rv={class:"confirm-card",role:"dialog","aria-modal":"true","aria-labelledby":"new-game-confirm"},ov={key:5,class:"title-toast",role:"status"},iv={key:1,class:"save-center-mask"},lv={class:"title-panel save-center"},av={class:"title-panel-head"},cv={class:"title-panel-body"},uv=["disabled"],dv=["disabled"],fv={key:0,class:"save-note"},pv={key:1,class:"save-feedback",role:"status"},hv={key:2,class:"recovery-code"},vv={key:3,class:"save-preview"},mv={key:4,class:"save-preview"},gv={class:"title-panel-foot"},yv={__name:"TitleScreen",props:{inGame:{type:Boolean,default:!1}},emits:["enter","close","title","collection"],setup(e,{emit:t}){const n=e,s=t,o=ee(n.inGame?"settings":"cover"),i=ee(!1),a=ee(null),c=ee(null),u=ee(""),p=ee(null),d=ee(""),h=ee(!1),k=ee(null),g=ee(0),I=B(()=>(g.value,$r())),_=B(()=>(g.value,$r(!0))),w=rp;vn(()=>{!n.inGame&&!gs()&&wr(!1)});function A(){Hr(),s("enter",{})}function L(){if(!gs())return S("没有可继续的本地自动存档。");A()}function G(){if($r()&&!i.value){i.value=!0;return}gs()||wr(!1),sa(),r.storyChoices={},i.value=!1,A()}function D(){const N=Ut(yi());if(!N.ok)return S("没有可读取的本地手动存档。");a.value={text:yi(),preview:N.preview}}function E(){const N=Vd(),C=Ut(N);if(!C.ok)return S("没有可读取的本地自动存档。");a.value={text:N,preview:C.preview}}async function Z(N){var Zt;const C=(Zt=N.target.files)==null?void 0:Zt[0];if(N.target.value="",!C)return;const re=await new Promise((Vt,ce)=>{const pe=new FileReader;pe.onload=()=>Vt(String(pe.result||"")),pe.onerror=()=>ce(new Error("无法读取存档文件。")),pe.readAsText(C)}).catch(Vt=>(S(Vt.message),""));if(!re)return;const Ce=Ut(re);if(!Ce.ok)return S(Ce.message);a.value={text:re,preview:Ce.preview}}function te(){if(!a.value)return;const N=jd(a.value.text);if(!N.ok)return S(N.message);a.value=null,g.value++,A()}function K(){const N=new Blob([Cr()],{type:"application/json"}),C=URL.createObjectURL(N),re=document.createElement("a");re.href=C,re.download="林记烘焙存档.json",re.click(),URL.revokeObjectURL(C),S("存档文件已导出。")}function ne(){const N=Fd();N&&g.value++,S(N?"本地手动存档已更新。":"浏览器无法写入本地存档。")}async function se(){var N;if(!w)return!1;if(!u.value.trim())return S("先输入云存档恢复码。"),!1;d.value="正在检查云存档…";try{return c.value=await lp(u.value),p.value=c.value.revision,d.value="已找到云存档，请核对进度后再恢复或覆盖。",!0}catch(C){return c.value=((N=C.data)==null?void 0:N.meta)||null,C.status===404?(p.value=null,d.value="这个恢复码还没有云存档，可以创建新云档。",!1):(d.value=C.message,!1)}}async function z(){var N;if(!w)return S("云存档服务暂不可用。");if(u.value.trim()||(u.value=ip()),!(!c.value&&await se())){if(c.value)return S("请先核对云端进度，再点击“确认覆盖云档”。");d.value="正在备份到云端…";try{const C=await Ei(u.value,Cr(),p.value);p.value=C.revision,c.value=null,d.value=C.created?"云存档已创建。请立即复制恢复码，换设备时需要用它读取。":"云存档已更新。"}catch(C){c.value=((N=C.data)==null?void 0:N.meta)||null,c.value&&(p.value=c.value.revision),d.value=C.status===409?"云存档已有较新进度，请先核对后确认覆盖。":C.message}}}async function q(){var C;if(!c.value)return;const N=c.value.revision;d.value="正在更新云端存档…";try{const re=await Ei(u.value,Cr(),N);p.value=re.revision,c.value=null,d.value="云存档已更新。"}catch(re){c.value=((C=re.data)==null?void 0:C.meta)||null,c.value&&(p.value=c.value.revision),d.value=re.status===409?"云存档在预览后已有更新，请重新核对后再确认覆盖。":re.message}}async function U(){var N;if(c.value){d.value="正在读取云存档…";try{const C=await ap(u.value,c.value.revision),re=Ut(C.save);if(!re.ok)throw new Error("云端存档内容无效。");a.value={text:C.save,preview:re.preview},c.value=null,d.value="已将云档载入预览，请确认后恢复。"}catch(C){c.value=((N=C.data)==null?void 0:N.meta)||null,c.value&&(p.value=c.value.revision),d.value=C.status===409?"云档在预览后已有更新，请重新核对。":C.message}}}async function P(){try{await navigator.clipboard.writeText(u.value),h.value=!0}catch{h.value=!1,S("请长按恢复码并手动复制。")}}function S(N){d.value=N}function x(){gs()||wr(!1),o.value="collection"}function $(){a.value=null,c.value=null,d.value="",n.inGame?s("close"):o.value="menu"}function T(){n.inGame?s("close"):o.value="menu"}return(N,C)=>e.inGame?(v(),m("div",iv,[l("section",lv,[l("header",av,[C[36]||(C[36]=l("h1",null,"设置与存档",-1)),l("button",{class:"title-close",type:"button","aria-label":"关闭设置",onClick:C[13]||(C[13]=re=>N.$emit("close"))},"✕")]),l("div",cv,[C[39]||(C[39]=l("h2",null,"本地存档",-1)),C[40]||(C[40]=l("p",{class:"save-note"},"自动存档会持续更新，手动存档保存在当前浏览器。",-1)),l("button",{class:"save-action primary",type:"button",onClick:ne},"保存本地手动存档"),l("button",{class:"save-action",type:"button",onClick:K},"导出存档文件"),l("button",{class:"save-action",type:"button",onClick:C[14]||(C[14]=re=>{var Ce;return(Ce=k.value)==null?void 0:Ce.click()})},"导入存档文件"),C[41]||(C[41]=l("h2",null,"云存档",-1)),C[42]||(C[42]=l("p",{class:"save-note"},"手动备份到云端。恢复码可以在另一台设备读取同一份存档。",-1)),C[43]||(C[43]=l("label",{class:"save-label",for:"recovery-code-game"},"恢复码",-1)),bs(l("input",{id:"recovery-code-game","onUpdate:modelValue":C[15]||(C[15]=re=>u.value=re),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入或创建恢复码"},null,512),[[kr,u.value]]),l("button",{class:"save-action",type:"button",disabled:!b(w),onClick:se},"检查云存档",8,uv),l("button",{class:"save-action primary",type:"button",disabled:!b(w),onClick:z},"备份到云端",8,dv),b(w)?O("",!0):(v(),m("p",fv,"云存档服务暂不可用，请稍后再试。")),d.value?(v(),m("p",pv,f(d.value),1)):O("",!0),u.value&&u.value.length===20?(v(),m("div",hv,[l("span",null,f(u.value),1),l("button",{type:"button",onClick:P},f(h.value?"已复制":"复制恢复码"),1)])):O("",!0),c.value?(v(),m("div",vv,[C[37]||(C[37]=l("strong",null,"云端存档预览",-1)),l("span",null,"M"+f(c.value.month)+" · 第 "+f(c.value.day)+" 个经营日 · ¥"+f(Number(c.value.cash||0).toLocaleString()),1),l("small",null,"云端更新于 "+f(new Date(c.value.updatedAt).toLocaleString()),1),l("button",{class:"save-action primary",type:"button",onClick:U},"确认读取这份云档")])):O("",!0),a.value?(v(),m("div",mv,[C[38]||(C[38]=l("strong",null,"存档预览",-1)),l("span",null,"M"+f(a.value.preview.month)+" · 第 "+f(a.value.preview.day)+" 个经营日 · ¥"+f(a.value.preview.cash.toLocaleString()),1),l("small",null,f(a.value.preview.savedAt?new Date(a.value.preview.savedAt).toLocaleString():"保存时间未知"),1),l("button",{class:"save-action primary",type:"button",onClick:te},"确认读取并继续"),l("button",{class:"save-action",type:"button",onClick:C[16]||(C[16]=re=>a.value=null)},"取消")])):O("",!0),l("input",{ref_key:"fileInput",ref:k,class:"save-file",type:"file",accept:"application/json,.json",onChange:Z},null,544)]),l("footer",gv,[l("button",{class:"save-action",type:"button",onClick:C[17]||(C[17]=re=>N.$emit("close"))},"返回游戏"),l("button",{class:"save-action",type:"button",onClick:C[18]||(C[18]=re=>N.$emit("title"))},"返回标题")])])])):(v(),m("div",Sh,[o.value==="cover"?(v(),m("div",{key:0,class:"title-frame",role:"button",tabindex:"0","aria-label":"点击任意位置开始游戏",onClick:C[0]||(C[0]=re=>o.value="menu"),onKeydown:[C[1]||(C[1]=ai(re=>o.value="menu",["enter"])),C[2]||(C[2]=ai($t(re=>o.value="menu",["prevent"]),["space"]))]},[l("img",{src:b(Ae)("cover.webp"),alt:"林记烘焙游戏封面"},null,8,Th),C[19]||(C[19]=l("div",{class:"title-prompt"},"点击任意位置开始游戏",-1))],32)):o.value==="menu"?(v(),m("div",Ih,[l("img",{src:b(Ae)("cover-options.webp"),alt:"林记烘焙主菜单"},null,8,Ah),l("button",{class:"title-hit title-hit-continue",type:"button",disabled:!I.value,"aria-label":"继续游戏",onClick:L},null,8,Rh),l("button",{class:"title-hit title-hit-new",type:"button","aria-label":"新的开始",onClick:G}),l("button",{class:"title-hit title-hit-load",type:"button","aria-label":"读取存档",onClick:C[3]||(C[3]=re=>{o.value="load",d.value=""})}),l("button",{class:"title-hit title-hit-settings",type:"button","aria-label":"设置",onClick:C[4]||(C[4]=re=>{o.value="settings",d.value=""})}),l("button",{class:"title-hit title-hit-collection",type:"button","aria-label":"查看收集",onClick:x}),l("div",Oh,f(I.value?"有本地自动存档":"暂无本地自动存档"),1)])):o.value==="collection"?(v(),m("div",Nh,[l("header",null,[C[20]||(C[20]=l("h1",null,"查看收集",-1)),l("button",{class:"title-back",type:"button",onClick:C[5]||(C[5]=re=>o.value="menu")},"返回主菜单")]),l("div",Dh,[Re(pa,{"initial-segment":"collection"})])])):O("",!0),o.value==="settings"||o.value==="load"?(v(),m("div",Ph,[l("section",{class:"title-panel","aria-label":o.value==="settings"?"设置和存档":"读取存档"},[l("header",Fh,[l("button",{class:"title-back",type:"button",onClick:$},"← 返回"),l("h1",null,f(o.value==="settings"?"设置与存档":"读取存档"),1),e.inGame?O("",!0):(v(),m("button",{key:0,class:"title-back",type:"button",onClick:T},"主菜单"))]),l("div",Vh,[o.value==="load"?(v(),m("div",jh,[C[21]||(C[21]=l("h2",null,"本地存档",-1)),C[22]||(C[22]=l("p",{class:"save-note"},"自动存档随经营进度保存，手动存档可在设置里创建。",-1)),l("button",{class:"save-action",type:"button",disabled:!I.value,onClick:E},"预览最近自动存档",8,Bh),l("button",{class:"save-action",type:"button",disabled:!_.value,onClick:D},"预览本地手动存档",8,qh),l("button",{class:"save-action",type:"button",onClick:C[6]||(C[6]=re=>{var Ce;return(Ce=k.value)==null?void 0:Ce.click()})},"从 JSON 文件导入")])):(v(),m("div",Uh,[C[24]||(C[24]=l("h2",null,"本地存档",-1)),C[25]||(C[25]=l("p",{class:"save-note"},"自动存档会持续更新，手动存档保存在当前浏览器。",-1)),l("button",{class:"save-action primary",type:"button",onClick:ne},"保存本地手动存档"),l("button",{class:"save-action",type:"button",onClick:K},"导出存档文件"),l("button",{class:"save-action",type:"button",onClick:C[7]||(C[7]=re=>{var Ce;return(Ce=k.value)==null?void 0:Ce.click()})},"导入存档文件"),C[26]||(C[26]=l("h2",null,"云存档",-1)),C[27]||(C[27]=l("p",{class:"save-note"},"手动备份到云端。恢复码可以在另一台设备读取同一份存档。",-1)),C[28]||(C[28]=l("label",{class:"save-label",for:"recovery-code"},"恢复码",-1)),bs(l("input",{id:"recovery-code","onUpdate:modelValue":C[8]||(C[8]=re=>u.value=re),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入或创建恢复码"},null,512),[[kr,u.value]]),l("button",{class:"save-action",type:"button",disabled:!b(w),onClick:se},"检查云存档",8,Hh),l("button",{class:"save-action primary",type:"button",disabled:!b(w),onClick:z},"备份到云端",8,Kh),b(w)?O("",!0):(v(),m("p",Gh,"云存档服务暂不可用，请稍后再试。")),d.value?(v(),m("p",Wh,f(d.value),1)):O("",!0),u.value&&u.value.length===20?(v(),m("div",zh,[l("span",null,f(u.value),1),l("button",{type:"button",onClick:P},f(h.value?"已复制":"复制恢复码"),1)])):O("",!0),c.value?(v(),m("div",Yh,[C[23]||(C[23]=l("strong",null,"云端存档预览",-1)),l("span",null,"M"+f(c.value.month)+" · 第 "+f(c.value.day)+" 个经营日 · ¥"+f(Number(c.value.cash||0).toLocaleString()),1),l("small",null,"云端更新于 "+f(new Date(c.value.updatedAt).toLocaleString()),1),l("button",{class:"save-action",type:"button",onClick:U},"读取这份云档"),l("button",{class:"save-action primary",type:"button",onClick:q},"确认用当前进度覆盖云档")])):O("",!0)])),o.value==="load"?(v(),m("div",Jh,[C[30]||(C[30]=l("h2",null,"云存档",-1)),C[31]||(C[31]=l("p",{class:"save-note"},"输入另一台设备保存时使用的恢复码，先查看进度，再确认读取。",-1)),C[32]||(C[32]=l("label",{class:"save-label",for:"recovery-code-load"},"恢复码",-1)),bs(l("input",{id:"recovery-code-load","onUpdate:modelValue":C[9]||(C[9]=re=>u.value=re),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入恢复码"},null,512),[[kr,u.value]]),l("button",{class:"save-action",type:"button",disabled:!b(w),onClick:se},"检查云存档",8,Qh),b(w)?O("",!0):(v(),m("p",Zh,"云存档服务暂不可用，请稍后再试。")),d.value?(v(),m("p",Xh,f(d.value),1)):O("",!0),c.value?(v(),m("div",ev,[C[29]||(C[29]=l("strong",null,"云端存档预览",-1)),l("span",null,"M"+f(c.value.month)+" · 第 "+f(c.value.day)+" 个经营日 · ¥"+f(Number(c.value.cash||0).toLocaleString()),1),l("small",null,"云端更新于 "+f(new Date(c.value.updatedAt).toLocaleString()),1),l("button",{class:"save-action primary",type:"button",onClick:U},"确认读取这份云档")])):O("",!0)])):O("",!0),l("input",{ref_key:"fileInput",ref:k,class:"save-file",type:"file",accept:"application/json,.json",onChange:Z},null,544),a.value?(v(),m("div",tv,[C[33]||(C[33]=l("strong",null,"存档预览",-1)),l("span",null,"M"+f(a.value.preview.month)+" · 第 "+f(a.value.preview.day)+" 个经营日 · ¥"+f(a.value.preview.cash.toLocaleString()),1),l("small",null,f(a.value.preview.savedAt?new Date(a.value.preview.savedAt).toLocaleString():"保存时间未知"),1),l("button",{class:"save-action primary",type:"button",onClick:te},"确认读取并继续"),l("button",{class:"save-action",type:"button",onClick:C[10]||(C[10]=re=>a.value=null)},"取消")])):O("",!0)]),e.inGame?(v(),m("footer",nv,[l("button",{class:"save-action",type:"button",onClick:C[11]||(C[11]=re=>N.$emit("close"))},"返回游戏")])):O("",!0)],8,Lh)])):O("",!0),i.value?(v(),m("div",sv,[l("section",rv,[C[34]||(C[34]=l("h2",{id:"new-game-confirm"},"开始新的经营？",-1)),C[35]||(C[35]=l("p",null,"本地自动存档会替换。手动备份和已收集内容会保留。",-1)),l("button",{class:"save-action primary",type:"button",onClick:G},"开始新的游戏"),l("button",{class:"save-action",type:"button",onClick:C[12]||(C[12]=re=>i.value=!1)},"继续考虑")])])):O("",!0),d.value&&o.value==="menu"?(v(),m("p",ov,f(d.value),1)):O("",!0)]))}},Si=Ue(yv,[["__scopeId","data-v-30ad4db6"]]),bv={class:"card card-pad"},_v={class:"between"},kv={class:"small muted"},Mv={class:"chip"},xv=["src"],$v={class:"counter-stats small muted"},Cv={key:1,class:"small muted"},wv=["disabled"],Ev={key:3,class:"small regular-visit"},Sv={key:4,class:"small regular-visit"},Tv={key:7,class:"btn block",style:{"margin-top":"10px"},type:"button",disabled:""},Iv={key:0,class:"card card-pad section-card"},Av={class:"small muted"},Rv=["onClick"],Ov={key:1,class:"active-queue card card-pad"},Nv={class:"small muted"},Dv=["onClick"],Pv={class:"guest-face"},Lv=["src"],Fv={key:1},Vv={class:"mini-patience"},jv={key:2,class:"service-card"},Bv={class:"card card-pad customer-card"},qv={class:"between"},Uv={class:"h2",style:{margin:"0"}},Hv={class:"small muted"},Kv={class:"chip"},Gv={class:"customer-clue"},Wv={class:"patience"},zv={class:"small muted between"},Yv={key:0,class:"card card-pad section-card"},Jv={key:0,class:"small muted"},Qv=["onClick"],Zv={class:"cake-thumb"},Xv={class:"cake-pick-copy"},em={key:1,class:"card card-pad section-card process-status"},tm={class:"h2"},nm={class:"small muted"},sm={key:2,class:"card card-pad section-card"},rm={class:"small muted"},om={key:0,class:"decoration-options"},im={class:"small muted"},lm=["onClick"],am={class:"small muted",style:{"margin-top":"7px"}},cm=["onClick"],um=["disabled"],dm={key:3,class:"card card-pad section-card process-status"},fm={class:"h2"},pm={class:"small muted"},hm={class:"patience"},vm={key:4,class:"card card-pad section-card"},mm={class:"small muted"},gm={key:3,class:"card card-pad section-card"},ym={class:"small muted"},bm={key:4,class:"card card-pad section-card"},_m={class:"between small"},km={key:0,class:"leftovers"},Mm=["onClick"],xm={key:5,class:"small notice",role:"status"},$m={class:"card card-pad section-card small muted"},Cm={__name:"ShopPage",props:{paused:{type:Boolean,default:!1}},emits:["closed","open-panel"],setup(e,{emit:t}){const n=e,s=t,o=ee(""),i=ee(""),a=ee("");let c=0;const u=B(()=>{var x;return((x=r.service)==null?void 0:x.tickets)||[]}),p=B(()=>{var x;return u.value[((x=r.service)==null?void 0:x.current)||0]||null}),d=B(()=>r.service?r.service.tickets.slice(r.service.current,r.service.current+Math.max(1,Math.min(3,r.shopLevel))).filter(x=>!["delivered","unavailable"].includes(x.status)):[]),h=B(()=>d.value.find(x=>{var $;return x.id===(($=r.service)==null?void 0:$.activeTicketId)})||d.value[0]||p.value),k=B(()=>u.value.findIndex(x=>{var $;return x.id===(($=h.value)==null?void 0:$.id)})),g=B(()=>Object.values(r.shelf||{}).reduce((x,$)=>x+$,0)),I=B(()=>hn.value.filter(x=>(r.shelf[x.id]||0)>0)),_=B(()=>r.orders),w=B(()=>r.day),A=B(()=>po()),L=B(()=>Lt("feedback")),G=B(()=>h.value?Math.max(0,Math.min(100,h.value.remaining/Math.max(1,h.value.patience||h.value.remaining)*100)):0);function D(){if(!g.value)return P("展示柜还是空的，先去后厨制作蛋糕。");const x=df();x&&P(x.customers+" 位顾客陆续来到柜台。")}function E(x){if(!h.value)return;const $=vf(h.value.id,x.id,h.value.qty);P($.message)}function Z(){if(!h.value)return;const x=mf(h.value.id,i.value||null,a.value||null);P(x.message)}function te(){h.value&&(P(da(h.value.id).message),i.value="",a.value="")}function K(){h.value&&(bf(h.value.id),P("今天这款已经售罄，订单没有成交。"))}function ne(x){hf(x.id),i.value=x.decoration||"",a.value=x.packedBlessing||""}function se(x){return{waiting:"等候",searching:"找货",found:"待打包",packing:"打包中",ready:"待递交"}[x]||x}function z(x){var T;return x.customer==="陈奶奶"?"customer-chen.webp":x.customer==="张叔"?"customer-zhang.webp":x.kind==="appointment"?"customer-custom.webp":"customer-guest-"+Math.max(1,Number(((T=x.id.match(/(\d+)$/))==null?void 0:T[1])||0)%5+1)+".webp"}function q(){if(r.dayPhase!=="prep"||r.ap<L.value.ap||L.value.disabled)return P(L.value.note);P(Sn("feedback",{})?"顾客反馈已记下，口碑 +1。":"现在无法收集反馈。")}function U(x){const $=fa(x);$&&s("closed",$)}function P(x){o.value=x}function S(){!n.paused&&!document.hidden&&r.dayPhase==="service"&&yf(.1)}return ht(()=>r.dayPhase,x=>{x==="service"&&!c&&(c=window.setInterval(S,100)),x!=="service"&&c&&(clearInterval(c),c=0)},{immediate:!0}),ht(()=>n.paused,x=>{x&&(o.value="")}),Js(()=>{c&&clearInterval(c)}),(x,$)=>(v(),m("div",null,[l("div",bv,[l("div",_v,[l("div",null,[$[2]||($[2]=l("div",{class:"h2",style:{margin:"0"}},"柜台营业",-1)),l("div",kv,f(b(r).month)+" 月 · 第 "+f(w.value)+"/"+f(b(ts))+" 个经营日",1)]),l("span",Mv,"口碑 "+f(Math.round(b(r).reputation)),1)]),b(ze)("bg-counter.webp")==="ok"?(v(),m("img",{key:0,class:"counter-art",src:b(Ae)("bg-counter.webp"),alt:"林记烘焙营业柜台"},null,8,xv)):O("",!0),l("div",$v,[l("span",null,"待售 "+f(g.value)+" 个",1),l("span",null,"预约 "+f(_.value.length)+" 笔",1),l("span",null,"今日收入 ¥"+f(b(r).dayRev),1)]),b(r).dayPhase==="service-ready"?(v(),m("div",Cv,"蛋糕已经摆进展示柜，准备好就开门接待。")):O("",!0),b(r).dayPhase==="prep"?(v(),m("button",{key:2,class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:L.value.disabled||b(r).ap<L.value.ap,onClick:q},"顾客反馈 · "+f(L.value.note),9,wv)):O("",!0),b(r).dayPhase==="prep"&&A.value.length?(v(),m("div",Ev,[$[3]||($[3]=l("strong",null,"今日常客来访",-1)),(v(!0),m(W,null,oe(A.value,T=>(v(),m("span",{key:T.id},f(T.name)+" · 想买"+f(b($e)(T.product).name),1))),128))])):O("",!0),b(r).dayPhase==="prep"&&b(r).challenge?(v(),m("div",Sv,[$[4]||($[4]=l("strong",null,"今日经营挑战",-1)),l("span",null,f(b(r).challenge.type==="stock"?"精准备货 · 剩货率不超过 10%":b(r).challenge.type==="new"?"新品主题日 · "+b($e)(b(r).challenge.target).name+" 销售至少 3 份":"定制专场 · 完成当天定制要求"),1)])):O("",!0),b(r).dayPhase==="service-ready"?(v(),m("button",{key:5,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:D},"开门营业")):O("",!0),b(r).dayPhase==="service-ready"?(v(),m("button",{key:6,class:"btn block mini-entry",style:{"margin-top":"8px"},type:"button",onClick:$[0]||($[0]=T=>x.$emit("open-panel","game:delivery"))},"亲自接待客人 · 小游戏")):O("",!0),b(r).dayPhase==="prep"&&!g.value?(v(),m("button",Tv,"先去后厨制作蛋糕")):O("",!0)]),b(r).dayPhase==="prep"&&_.value.length?(v(),m("div",Iv,[$[5]||($[5]=l("div",{class:"h2"},"今日预约",-1)),(v(!0),m(W,null,oe(_.value,T=>(v(),m("div",{key:T.id,class:"order-row"},[l("div",null,[l("strong",null,f(T.customer)+" · "+f(b($e)(T.product).name)+" ×"+f(T.qty),1),l("div",Av,f(T.type==="定制"?"要求："+T.due+" · 祝福："+T.blessing+" · ":"")+"预计收入 ¥"+f(T.pay),1)]),l("button",{class:"btn",type:"button",onClick:N=>b(uf)(T.id)},f(T.taken?"已接":"接单"),9,Rv)]))),128)),$[6]||($[6]=l("p",{class:"small muted"},"先接下的预约会在营业队列中优先出现。没有接的预约不会加入今天的营业。",-1))])):O("",!0),b(r).dayPhase==="service"&&d.value.length>1?(v(),m("div",Ov,[l("div",Nv,"正在等候 · 最多同时接待 "+f(Math.min(3,b(r).shopLevel))+" 位",1),(v(!0),m(W,null,oe(d.value,T=>{var N;return v(),m("button",{key:T.id,class:be(["queue-guest",{chosen:T.id===((N=h.value)==null?void 0:N.id),unhappy:T.unhappy}]),type:"button",onClick:C=>ne(T)},[l("span",Pv,[b(ze)(z(T))==="ok"?(v(),m("img",{key:0,src:b(Ae)(z(T)),alt:""},null,8,Lv)):(v(),m("b",Fv,f(T.customer.slice(0,1)),1))]),l("span",null,[l("strong",null,f(T.customer),1),l("small",null,f(T.qty)+" 个 · "+f(se(T.status))+f(T.unhappy?" · 着急了":""),1)]),l("i",Vv,[l("b",{style:et({width:Math.max(0,T.remaining/Math.max(1,T.patience)*100)+"%"})},null,4)])],10,Dv)}),128))])):O("",!0),b(r).dayPhase==="service"&&h.value?(v(),m("div",jv,[l("div",Bv,[l("div",qv,[l("div",null,[l("div",Uv,f(h.value.customer),1),l("div",Hv,f(h.value.type)+" · 想买 "+f(h.value.qty)+" 个",1)]),l("span",Kv,f(k.value+1)+"/"+f(u.value.length),1)]),l("p",Gv,"“"+f(h.value.clue||"我想要一份"+b($e)(h.value.product).name+"。")+"”",1),l("div",Wv,[l("span",{style:et({width:G.value+"%",background:G.value<33?"var(--berry)":"var(--sage)"})},null,4)]),l("div",zv,[l("span",null,f(h.value.unhappy?"顾客有点着急，但仍会等你":"耐心倒计时"),1),l("span",null,f(Math.ceil(h.value.remaining))+" 秒",1)])]),h.value.status==="waiting"?(v(),m("div",Yv,[$[7]||($[7]=l("div",{class:"h2"},"从展示柜找蛋糕",-1)),I.value.length?O("",!0):(v(),m("div",Jv,"展示柜已经售罄。")),(v(!0),m(W,null,oe(I.value,T=>(v(),m("button",{key:T.id,class:"cake-pick",type:"button",onClick:N=>E(T)},[l("span",Zv,[Re(ko,{id:T.id,colors:T.colors},null,8,["id","colors"])]),l("span",Xv,[l("strong",null,f(T.name),1),l("span",null,"柜中 "+f(b(r).shelf[T.id])+" 个",1)]),l("span",null,"找 ×"+f(h.value.qty)+" →",1)],8,Qv))),128)),I.value.some(T=>T.id===h.value.product&&b(r).shelf[T.id]>=h.value.qty)?O("",!0):(v(),m("button",{key:1,class:"btn block",type:"button",onClick:K},"告知售罄，结束这笔未成交订单"))])):h.value.status==="searching"?(v(),m("div",em,[l("div",tm,f(b(r).staffAssignments.picker?"员工正在找蛋糕":"在展示柜里找蛋糕…"),1),l("p",nm,f(Math.ceil(h.value.findRemaining||0))+" 秒后取出。",1)])):h.value.status==="found"?(v(),m("div",sm,[$[8]||($[8]=l("div",{class:"h2"},"蛋糕找到了，开始打包",-1)),l("div",rm,f(b($e)(h.value.product).name)+" ×"+f(h.value.qty)+" · 包装约 "+f(2+h.value.qty)+" 秒",1),h.value.type==="定制"?(v(),m("div",om,[l("div",im,"预约装饰："+f(h.value.due),1),(v(),m(W,null,oe(["粉色小花","清爽配色","简洁裱花"],T=>l("button",{key:T,class:be(["pill",{chosen:i.value===T}]),type:"button",onClick:N=>i.value=T},f(T),11,lm)),64)),l("div",am,"祝福语："+f(h.value.blessing),1),(v(),m(W,null,oe(["生日快乐","愿你每天都有好心情","把今天的甜分享给你"],T=>l("button",{key:T,class:be(["pill",{chosen:a.value===T}]),type:"button",onClick:N=>a.value=T},f(T),11,cm)),64))])):O("",!0),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:h.value.type==="定制"&&(!i.value||!a.value),onClick:Z},"开始打包",8,um)])):h.value.status==="packing"?(v(),m("div",dm,[l("div",fm,f(b(r).staffAssignments.packer?"员工正在打包":"正在打包蛋糕…"),1),l("div",pm,"还需 "+f(Math.ceil(h.value.packRemaining||0))+" 秒",1),l("div",hm,[l("span",{class:"pack-progress",style:et({width:100-h.value.packRemaining/(2+h.value.qty)*100+"%"})},null,4)])])):h.value.status==="ready"?(v(),m("div",vm,[$[9]||($[9]=l("div",{class:"h2"},"包装好了",-1)),l("div",mm,"顾客还在等，递给 "+f(h.value.customer)+"。",1),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:te},"递交蛋糕 · 收款")])):O("",!0)])):O("",!0),b(r).dayPhase==="service"&&h.value&&b(or)()?(v(),m("div",gm,[$[10]||($[10]=l("div",{class:"h2"},"员工营业协作",-1)),l("div",ym,f(b(r).staffAssignments.auto?"员工自动完成找蛋糕、打包和交付。":"员工可分担找蛋糕和打包；你来负责递交。"),1)])):O("",!0),b(r).dayPhase==="closing"?(v(),m("div",bm,[$[13]||($[13]=l("div",{class:"h2"},"今日接待完成",-1)),l("div",_m,[$[11]||($[11]=l("span",{class:"muted"},"完成订单",-1)),l("span",null,f(b(r).daySold)+" 个蛋糕 · ¥"+f(b(r).dayRev)+" 已到账",1)]),g.value?(v(),m("div",km,[$[12]||($[12]=l("div",{class:"small muted"},"剩下的蛋糕怎么处理？",-1)),(v(!0),m(W,null,oe(b(Ur),(T,N)=>(v(),m("button",{key:N,class:"leftover-button",type:"button",onClick:C=>U(N)},[st(f(T.label),1),l("span",null,f(T.cashRate?" · 回收部分成本":T.community?" · 社区好感 +"+T.community:""),1)],8,Mm))),128))])):(v(),m("button",{key:1,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:$[1]||($[1]=T=>U("waste"))},"打烊，进入下一经营日"))])):O("",!0),o.value?(v(),m("p",xm,f(o.value),1)):O("",!0),l("div",$m,[l("div",null,"本月固定成本 ¥"+f(b(ea)),1),$[14]||($[14]=l("div",{style:{"margin-top":"4px"}},"顾客超时只影响口碑，不影响成交收入；切到其他页面或后台时倒计时暂停。",-1))])]))}},wm=Ue(Cm,[["__scopeId","data-v-d3adb36b"]]),Em={class:"card card-pad"},Sm={class:"between"},Tm={class:"between small muted",style:{"margin-top":"7px"}},Im=["disabled"],Am={key:0,class:"challenge-note small"},Rm={key:0,class:"card card-pad compact-card"},Om={class:"product-list"},Nm={class:"product-art"},Dm={class:"product-copy"},Pm={class:"quantity"},Lm=["disabled","onClick"],Fm=["disabled","onClick"],Vm={class:"card card-pad compact-card"},jm={class:"between"},Bm={class:"small muted"},qm={key:0,class:"small muted",style:{"margin-top":"5px"}},Um={key:1,class:"card card-pad minigame"},Hm={class:"between"},Km={class:"h2",style:{margin:"0"}},Gm={class:"chip"},Wm={class:"small muted"},zm={class:"gauge"},Ym={class:"pattern"},Jm={class:"target-buttons"},Qm=["onClick"],Zm={class:"pattern"},Xm={class:"target-buttons"},e1=["onClick"],t1={key:2,class:"card card-pad compact-card"},n1={class:"small muted"},s1=["disabled"],r1=["disabled"],o1={key:6,class:"card card-pad compact-card"},i1={key:0,class:"small muted"},l1={key:7,class:"small muted",role:"status"},a1={__name:"KitchenPage",props:{paused:{type:Boolean,default:!1}},setup(e){const t=e,n=ee(""),s=ee(0),o=ee(0),i=ee([]);let a=0;const c=B(()=>ta()),u=B(()=>Rd()),p=B(()=>uo()),d=B(()=>hn.value.map(U=>({...U,qty:r.plan[U.id]||0,price:Qt(U.id)}))),h=B(()=>r.orders.filter(U=>U.taken)),k=B(()=>r.productionMini),g=B(()=>{var U,P;return((U=r.productionResult)==null?void 0:U.quality)==="perfect"?"完美 · 售价 +10%":((P=r.productionResult)==null?void 0:P.quality)==="fine"?"精致 · 售价 +5%":"普通品质"}),I=B(()=>{var P;return[[0,1,2],[1,2,0],[2,0,1]][((P=k.value)==null?void 0:P.pattern)||0]}),_=B(()=>Object.entries(u.value).map(([U,P])=>{var S;return{id:U,name:((S=_n.find(x=>x.id===U))==null?void 0:S.name)||U,qty:P}})),w=B(()=>r.challenge?r.challenge.type==="stock"?"精准备货：预约优先，剩货率不超过 10%。":r.challenge.type==="new"?"新品主题日："+$e(r.challenge.target).name+" 至少交付 3 个。":"定制专场：完成当天定制要求。":"");function A(U,P){Xd(U,(r.plan[U]||0)+P)}function L(){const U={};h.value.forEach($=>{U[$.product]=(U[$.product]||0)+$.qty});const P=Math.max(3,Math.min(12,Math.round({1:4,2:6,3:8,4:10}[r.shopLevel]+r.reputation/35)));let S=Math.max(0,P-Object.values(U).reduce(($,T)=>$+T,0));const x=hn.value.slice().sort(($,T)=>(r.monthSold[T.id]||0)+T.demand-((r.monthSold[$.id]||0)+$.demand));for(let $=0;$<S&&x.length;$++){const T=x[$%Math.min(3,x.length)].id;U[T]=Math.min(12,(U[T]||0)+1)}r.plan=U,ue()}function G(){var U;if(c.value>un.value)return E("今天的产能不够，先减少计划数量。");if(Object.keys(p.value).length)return E("有原料缺货，请先去食材铺采购。");if(!r.plan||!Object.keys(r.plan).length)return E("先给今天排一些蛋糕。");ef()&&(o.value=0,s.value=0,i.value=[],E("今天的主打工序抽到了「"+D((U=k.value)==null?void 0:U.type)+"」。"))}function D(U){return{mix:"搅拌",oven:"出炉火候",piping:"裱花",fruit:"摆果"}[U]||"制作"}function E(U){n.value=U}function Z(){!t.paused&&!document.hidden&&k.value&&["mix","oven"].includes(k.value.type)&&(s.value=(s.value+2.4)%100)}function te(){var S;const U=((S=k.value)==null?void 0:S.window)||66,P=Math.abs(s.value-U);se(Math.max(0,100-Math.round(P*3)))}function K(U){if(U!==I.value[o.value])return se(55);o.value+=1,o.value>=I.value.length&&se(100)}function ne(U){const P=[...i.value,U];i.value=P,P.length===3&&se(P.every((S,x)=>S===I.value[x])?100:60)}function se(U){const P=$i(U,!1);E(P.msg||P.message||g.value)}function z(){const U=$i(0,!0);E(U.msg||U.message||"采用普通品质出炉。")}function q(){r.plan={},ue()}return ht(k,U=>{U&&!a&&(a=window.setInterval(Z,80)),!U&&a&&(clearInterval(a),a=0)},{immediate:!0}),vn(()=>{k.value&&!a&&(a=window.setInterval(Z,80))}),Js(()=>{a&&clearInterval(a)}),(U,P)=>(v(),m("div",null,[l("div",Em,[l("div",Sm,[P[1]||(P[1]=l("div",{class:"h2",style:{margin:"0"}},"今日生产计划",-1)),l("span",{class:be(["chip",c.value>b(un)?"pink":"sage"])},"产能 "+f(c.value)+"/"+f(b(un)),3)]),l("div",Tm,[l("span",null,"库存 "+f(b(sr))+"/"+f(b(r).warehouseCapacity)+" 份",1),l("span",null,"体力 "+f(b(r).stamina),1)]),l("button",{class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:b(r).dayPhase!=="prep",onClick:L},"智能备货 · 先满足已接预约",8,Im),b(r).dayPhase==="prep"&&w.value?(v(),m("div",Am,[P[2]||(P[2]=l("strong",null,"今日经营挑战",-1)),l("span",null,f(w.value)+"成功后营业收入 +5%。",1)])):O("",!0)]),h.value.length?(v(),m("div",Rm,[P[3]||(P[3]=l("strong",null,"已接预约",-1)),(v(!0),m(W,null,oe(h.value,S=>(v(),m("div",{key:S.id,class:"small muted"},f(b($e)(S.product).name)+" ×"+f(S.qty)+f(S.due?" · 装饰："+S.due:""),1))),128))])):O("",!0),l("div",Om,[(v(!0),m(W,null,oe(d.value,S=>(v(),m("div",{key:S.id,class:"product-row"},[l("div",Nm,[Re(ko,{id:S.id,colors:S.colors},null,8,["id","colors"])]),l("div",Dm,[l("strong",null,f(S.name),1),l("span",null,"¥"+f(S.price)+" · 产能 "+f(S.diff),1),l("span",null,"熟练度 Lv"+f(Math.round((b(r).levels[S.id]||1)*10)/10),1)]),l("div",Pm,[l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:x=>A(S.id,-1)},"−",8,Lm),l("span",null,f(S.qty),1),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:x=>A(S.id,1)},"+",8,Fm)])]))),128))]),l("div",Vm,[l("div",jm,[P[4]||(P[4]=l("strong",null,"材料预算",-1)),l("span",Bm,"预计 "+f(Object.values(b(r).plan).reduce((S,x)=>S+x,0))+" 个蛋糕",1)]),_.value.length?O("",!0):(v(),m("div",qm,"选择产品和数量后会列出配方用料。")),(v(!0),m(W,null,oe(_.value,S=>(v(),m("div",{key:S.id,class:"between small",style:{"margin-top":"5px"}},[l("span",null,f(S.name),1),l("span",{class:be({missing:p.value[S.id]})},f(S.qty)+" 份 · 库存 "+f(b(r).pantry[S.id]||0)+f(p.value[S.id]?" · 缺 "+Math.ceil(p.value[S.id]):""),3)]))),128))]),k.value?(v(),m("div",Um,[l("div",Hm,[l("div",Km,"主打工序 · "+f(D(k.value.type)),1),l("span",Gm,f(b($e)(k.value.product).name),1)]),k.value.type==="mix"||k.value.type==="oven"?(v(),m(W,{key:0},[l("p",Wm,f(k.value.type==="mix"?"指针进入绿色区间时停下搅拌。":"在最佳火候区间及时出炉。"),1),l("div",zm,[l("span",{class:"target",style:et({left:k.value.window-8+"%"})},null,4),l("i",{style:et({left:s.value+"%"})},null,4)]),l("button",{class:"btn primary block",type:"button",onClick:te},"停下")],64)):k.value.type==="piping"?(v(),m(W,{key:1},[P[5]||(P[5]=l("p",{class:"small muted"},"按提示顺序点亮三处裱花位置。",-1)),l("div",Ym,f(I.value.map(S=>["花心","左侧","右侧"][S]).join(" → ")),1),l("div",Jm,[(v(),m(W,null,oe(["花心","左侧","右侧"],(S,x)=>l("button",{key:S,class:"btn",type:"button",onClick:$=>K(x)},f(S),9,Qm)),64))])],64)):(v(),m(W,{key:2},[P[6]||(P[6]=l("p",{class:"small muted"},"按提示顺序摆放三种鲜果。",-1)),l("div",Zm,f(I.value.map(S=>["草莓","蓝莓","薄荷"][S]).join(" → ")),1),l("div",Xm,[(v(),m(W,null,oe(["草莓","蓝莓","薄荷"],(S,x)=>l("button",{key:S,class:"btn",type:"button",onClick:$=>ne(x)},f(S),9,e1)),64))])],64)),l("button",{class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:z},"跳过 · 普通品质保底")])):b(r).productionResult?(v(),m("div",t1,[l("strong",null,"本批品质："+f(g.value),1),l("div",n1,f(b(r).productionResult.quality==="normal"?"基础品质，不影响批量成品。":"效果已记在主打蛋糕批次中。"),1)])):O("",!0),b(r).dayPhase==="prep"&&!k.value&&!b(r).productionResult?(v(),m("button",{key:3,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:!Object.keys(b(r).plan).length,onClick:G},"开始制作 · 随机关键工序",8,s1)):O("",!0),b(r).dayPhase==="prep"&&b(r).productionResult?(v(),m("button",{key:4,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:c.value>b(un)||Object.keys(p.value).length>0,onClick:P[0]||(P[0]=(...S)=>b(Br)&&b(Br)(...S))},"完成今日批量制作",8,r1)):O("",!0),b(r).dayPhase==="prep"&&Object.keys(b(r).plan).length?(v(),m("button",{key:5,class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:q},"清空计划")):O("",!0),b(r).dayPhase==="service-ready"||b(r).dayPhase==="service"||b(r).dayPhase==="closing"?(v(),m("div",o1,[P[7]||(P[7]=l("div",{class:"h2"},"今日成品",-1)),(v(!0),m(W,null,oe(Object.keys(b(r).shelf).filter(S=>b(r).shelf[S]>0),S=>(v(),m("div",{key:S,class:"between small"},[l("span",null,f(b($e)(S).name),1),l("span",null,f(b(r).shelf[S])+" 个",1)]))),128)),b(r).dayPhase==="service-ready"?(v(),m("div",i1,"前往柜台开门营业。")):O("",!0)])):O("",!0),n.value?(v(),m("p",l1,f(n.value),1)):O("",!0),P[8]||(P[8]=l("div",{class:"small muted tips"},"设备、妈妈和伙伴提供产能；超出免费产能的部分才消耗体力。主打蛋糕小游戏只作用于这款产品的当日批次。",-1))]))}},c1=Ue(a1,[["__scopeId","data-v-79ec2286"]]),u1={class:"card card-pad"},d1={class:"between"},f1={class:"chip"},p1={class:"card card-pad team-card"},h1={class:"between"},v1={class:"small muted"},m1={key:0,class:"avatar real-avatar"},g1=["src","alt"],y1={key:1},b1={key:1,class:"avatar locked-avatar"},_1={class:"partner-info"},k1={class:"partner-title"},M1={class:"chip"},x1={class:"small muted"},$1={class:"partner-actions"},C1=["disabled","onClick"],w1=["disabled","onClick"],E1={class:"card card-pad team-card"},S1={class:"assignment"},T1=["value","disabled"],I1=["value"],A1={class:"assignment"},R1=["value","disabled"],O1=["value","disabled"],N1={key:0,class:"auto-toggle"},D1=["checked","disabled"],P1={key:1,class:"locked-auto"},L1={key:2,class:"small muted",role:"status"},F1={__name:"PartnersPage",setup(e){const t=ee(""),n=B(()=>$n.map(p=>{const d=r.staff.includes(p.id);return d?{id:p.id,joined:d,name:p.name,nick:p.nick,role:p.role,skillName:p.skillName,skill:r.partnerSkill[p.id]||1,trust:Math.round(r.partnerTrust[p.id]||0),avatar:Vr(p.name)}:{id:p.id,joined:d}})),s=B(()=>ia()),o=B(()=>or()),i=B(()=>r.dayPhase==="prep");function a(p,d){Ci({...r.staffAssignments,[p]:d||null}),t.value="营业分工已保存。"}function c(p){o.value&&(Ci({...r.staffAssignments,auto:p.target.checked}),t.value=p.target.checked?"已启用全自动接待。":"已切回手动接待。")}function u(p,d){const h=Lt(p);if(!i.value||h.disabled||r.ap<h.ap||h.cost&&r.cash<h.cost){t.value=i.value?h.note:"请在营业前安排员工交流与培训。";return}const k=Sn(p,{partner:d});t.value=k?p==="talk"?"和伙伴聊了一会儿。":"培训完成，专业能力提升。":"暂时无法完成。"}return(p,d)=>(v(),m("div",null,[l("div",u1,[l("div",d1,[d[2]||(d[2]=l("div",null,[l("div",{class:"h2",style:{margin:"0"}},"林暖"),l("div",{class:"small muted"},"母亲 · 林记上一任经营者")],-1)),l("span",f1,"家庭默契 "+f(Math.round(b(r).momBond)),1)]),d[3]||(d[3]=l("p",{class:"small muted",style:{margin:"7px 0 0"}},"她每天提供 60 点免费产能。和妈妈的互动在店内进行。",-1))]),l("div",p1,[l("div",h1,[d[4]||(d[4]=l("div",{class:"h2",style:{margin:"0"}},"伙伴档案",-1)),l("span",v1,"已加入 "+f(s.value.length)+" / "+f(b($n).length),1)]),(v(!0),m(W,null,oe(n.value,h=>(v(),m("article",{key:h.id,class:"partner-row"},[h.joined?(v(),m("div",m1,[h.avatar?(v(),m("img",{key:0,src:h.avatar,alt:h.name},null,8,g1)):(v(),m("span",y1,f(h.name.slice(0,1)),1))])):(v(),m("div",b1,"?")),l("div",_1,[h.joined?(v(),m(W,{key:0},[l("div",k1,[l("strong",null,f(h.name),1),l("span",M1,f(h.role),1)]),l("div",x1,"信赖 "+f(h.trust)+" · "+f(h.skillName)+"专业 Lv"+f(h.skill),1),l("div",$1,[l("button",{class:"btn",type:"button",disabled:!i.value||b(r).ap<1,onClick:k=>u("talk",h.id)},"员工交流 · 1 行动力",8,C1),l("button",{class:"btn",type:"button",disabled:!i.value||b(r).ap<2||b(r).cash<400||h.skill>=5,onClick:k=>u("train",h.id)},"培训 · 2 行动力 / ¥400",8,w1)])],64)):(v(),m(W,{key:1},[d[5]||(d[5]=l("strong",null,"未解锁",-1)),d[6]||(d[6]=l("div",{class:"small muted"},"继续经营，等待伙伴加入林记。",-1))],64))])]))),128))]),l("div",E1,[d[13]||(d[13]=l("div",{class:"h2"},"营业分工",-1)),d[14]||(d[14]=l("p",{class:"small muted"},"伙伴可以分担找蛋糕和打包。专业等级越高，负责工位的处理时间越短。",-1)),l("label",S1,[d[8]||(d[8]=l("span",null,"找蛋糕",-1)),l("select",{value:b(r).staffAssignments.picker||"",disabled:!i.value,onChange:d[0]||(d[0]=h=>a("picker",h.target.value))},[d[7]||(d[7]=l("option",{value:""},"自己负责",-1)),(v(!0),m(W,null,oe(s.value,h=>(v(),m("option",{key:h.id,value:h.id},f(h.nick)+" · Lv"+f(b(r).partnerSkill[h.id]||1),9,I1))),128))],40,T1)]),l("label",A1,[d[10]||(d[10]=l("span",null,"打包",-1)),l("select",{value:b(r).staffAssignments.packer||"",disabled:!i.value,onChange:d[1]||(d[1]=h=>a("packer",h.target.value))},[d[9]||(d[9]=l("option",{value:""},"自己负责",-1)),(v(!0),m(W,null,oe(s.value,h=>(v(),m("option",{key:h.id,value:h.id,disabled:h.id===b(r).staffAssignments.picker},f(h.nick)+" · Lv"+f(b(r).partnerSkill[h.id]||1),9,O1))),128))],40,R1)]),o.value?(v(),m("label",N1,[l("input",{type:"checkbox",checked:b(r).staffAssignments.auto,disabled:!i.value,onChange:c},null,40,D1),d[11]||(d[11]=l("span",null,[l("strong",null,"全自动接待"),l("small",null,"员工完成找蛋糕、打包和递交；每天可挑战一项经营目标。")],-1))])):(v(),m("div",P1,[...d[12]||(d[12]=[l("span",{class:"locked-avatar"},"?",-1),l("span",{class:"small muted"},"全自动接待：店铺 Lv3，并有 3 位专业 Lv3 伙伴后开放。",-1)])])),t.value?(v(),m("p",L1,f(t.value),1)):O("",!0)])]))}},V1=Ue(F1,[["__scopeId","data-v-5ddd734b"]]),j1={class:"lab"},B1={class:"lab-head"},q1={class:"lab-sub"},U1={key:0,class:"card card-pad result"},H1={class:"result-title"},K1={class:"small muted"},G1=["src"],W1={class:"scores"},z1={class:"feedback"},Y1={class:"result-actions"},J1=["disabled"],Q1={key:1,class:"small muted"},Z1=["disabled"],X1={key:0,class:"product-list"},eg=["onClick"],tg={class:"product-info"},ng={class:"small muted"},sg={key:1,class:"card card-pad small muted"},rg=["disabled","onClick"],og={class:"product-info"},ig={class:"small muted"},lg={class:"chip"},ag={key:2,class:"report-list"},cg={class:"small muted"},ug={key:0,class:"small muted"},dg={key:3,class:"card card-pad small muted"},fg={key:2,class:"card card-pad form"},pg={class:"small muted"},hg={class:"hint"},vg={class:"field"},mg=["onClick"],gg={class:"field"},yg=["onClick"],bg={class:"small muted"},_g={class:"field"},kg={class:"field-title"},Mg=["onClick"],xg={class:"field"},$g=["onClick"],Cg={class:"field"},wg=["onClick"],Eg=["disabled"],Sg={class:"small muted"},Tg={key:3,class:"card card-pad form"},Ig={class:"field"},Ag=["onClick"],Rg={class:"field"},Og=["onClick"],Ng={class:"field"},Dg=["onClick"],Pg={class:"field"},Lg=["onClick"],Fg=["disabled"],Vg={class:"small muted"},jg={key:4,class:"card card-pad form"},Bg={class:"small muted"},qg=["value"],Ug={key:0,class:"small feedback-line"},Hg=["disabled"],Kg={class:"small muted"},Gg={key:5,class:"small notice"},Wg={__name:"ResearchLab",setup(e){const t=ee("home"),n=ee(""),s=ee([]),o=ee(-1),i=ee(-1),a=ee(-1),c=ee(1),u=ee(""),p=ee(-1),d=ee(""),h=ee(""),k=ee(!1),g=B(()=>Je.filter($=>$.month>0)),I=B(()=>Je.filter($=>r.unlocked.includes($.id)&&(r.levels[$.id]||1)<5)),_=B(()=>Je.map($=>({product:$,reports:r.career.labReports[$.id]||{}})).filter($=>$.reports.development||$.reports.improvement)),w=B(()=>co[n.value]),A=B(()=>{var $;return(($=r.labPending)==null?void 0:$.type)==="signature"?Vs("osmanthus").src:""}),L=B(()=>s.value.length>0&&o.value>=0&&i.value>=0&&a.value>=0),G=B(()=>s.value.length>0&&o.value>=0&&i.value>=0&&a.value>=0),D=B(()=>{var $;return p.value===(($=Cs[u.value])==null?void 0:$.correct)?2:1});function E($){h.value=$}function Z($){if(!r.labPending){if($.id==="signature"){if(r.month<26)return E("M26 起开放外婆配方复原。");t.value="signature"}else n.value=$.id,t.value="develop";s.value=[],o.value=-1,i.value=-1,a.value=-1,c.value=1,h.value=""}}function te($){s.value=s.value.includes($)?s.value.filter(T=>T!==$):[...s.value,$]}function K(){const $=bi({productId:n.value,ingredients:s.value,direction:o.value,ratio:i.value,process:a.value,decoration:c.value});$.ok?E("试吃完成：本次样品已计入原料消耗。"):E($.message)}function ne(){const $=bi({productId:"signature",type:"signature",ingredients:s.value,sugar:o.value,filling:i.value,garnish:a.value});$.ok?E("复原试吃完成：本次样品已计入原料消耗。"):E($.message)}function se(){const $=Bd();E($.message),$.ok&&(t.value="home")}function z(){const $=r.labPending;$&&(_i(),n.value=$.productId,s.value=$.ingredients.slice(),$.type==="signature"?(o.value=$.sugar,i.value=$.filling,a.value=$.garnish,t.value="signature"):(o.value=$.direction,i.value=$.ratio,a.value=$.process,c.value=$.decoration,t.value="develop"),E("保留了本次试做思路，修改后重试会再消耗一份样品。"))}function q(){_i(),t.value="home",E("试吃结果已收起，已消耗的样品不返还。")}function U($){r.labPending||(u.value=$.id,p.value=-1,d.value="",h.value="",t.value="improve")}function P(){if(k.value||p.value<0)return;k.value=!0;const $=qd(u.value,p.value);k.value=!1,d.value=$.feedback||"",$.ok?(E($.message),t.value="home"):$.retry&&(p.value=-1)}function S(){t.value="home",h.value=""}function x($){return $.type==="signature"?"外婆配方复原":$.type==="improvement"?`配方改良 · Lv${$.levelAfter}`:`${$.refined?"精制上架":"新品上架"} · ${$.score} 分`}return($,T)=>(v(),m("section",j1,[l("header",B1,[l("div",null,[T[1]||(T[1]=l("div",{class:"lab-title"},"林记烘焙实验室",-1)),l("div",q1,"行动力 "+f(b(r).ap)+"/"+f(b(r).maxAp)+" · 分类原料 "+f(b(sr))+" 份 · 试做消耗所选蛋糕配方用料的四分之一",1)]),t.value!=="home"&&!b(r).labPending?(v(),m("button",{key:0,class:"back",type:"button",onClick:S},"返回")):O("",!0)]),b(r).labPending?(v(),m("div",U1,[l("div",H1,f(b(r).labPending.passed?"试吃合格":"还需要调整"),1),l("div",K1,f(b($e)(b(r).labPending.productId).name)+" · 本次 "+f(b(r).labPending.score)+" 分",1),A.value?(v(),m("img",{key:0,class:"signature-cg",src:A.value,alt:"桂花栗子蛋糕复原插画"},null,8,G1)):O("",!0),l("div",W1,[(v(),m(W,null,oe([{key:"flavor",name:"风味"},{key:"texture",name:"口感"},{key:"appearance",name:"外观"},{key:"cost",name:"成本控制"}],N=>l("div",{key:N.key,class:"score"},[l("span",null,f(N.name),1),l("strong",null,f(b(r).labPending.scores[N.key]),1)])),64))]),l("ul",z1,[(v(!0),m(W,null,oe(b(r).labPending.feedback,N=>(v(),m("li",{key:N},f(N),1))),128))]),l("div",Y1,[b(r).labPending.passed?(v(),m("button",{key:0,class:"btn primary block",type:"button",disabled:b(r).ap<1||b(r).phase!=="playing",onClick:se},f(b(r).labPending.type==="signature"?"完成复原":"正式上架")+" · 再消耗 1 点行动力 ",9,J1)):O("",!0),b(r).labPending.passed&&b(r).ap<1?(v(),m("div",Q1,"行动力不足，结果已保存，明天可以继续。")):O("",!0),l("button",{class:"btn block",type:"button",disabled:b(r).phase!=="playing",onClick:z},"按反馈调整并重试 · 再用 1 份样品",8,Z1),l("button",{class:"text-button",type:"button",onClick:q},"收起结果")])])):t.value==="home"?(v(),m(W,{key:1},[T[3]||(T[3]=l("div",{class:"card card-pad intro"},[l("strong",null,"从配方到上架"),l("div",{class:"small muted"},"选配方、做试验、看试吃反馈。合格品可以生产，精制品以更高熟练度起步。")],-1)),T[4]||(T[4]=l("div",{class:"section-title"},"配方改良",-1)),I.value.length?(v(),m("div",X1,[(v(!0),m(W,null,oe(I.value,N=>(v(),m("button",{key:N.id,class:"card product-row",type:"button",onClick:C=>U(N)},[l("span",tg,[l("strong",null,f(N.name),1),l("span",ng,"当前 Lv"+f(b(r).levels[N.id]||1),1)]),T[2]||(T[2]=l("span",{class:"chip"},"诊断问题",-1))],8,eg))),128))])):(v(),m("div",sg,"目前没有可改良的产品。")),T[5]||(T[5]=l("div",{class:"section-title"},"新品研发",-1)),(v(!0),m(W,null,oe(g.value,N=>(v(),m("button",{key:N.id,class:"card product-row",type:"button",disabled:N.month>b(r).month||b(r).unlocked.includes(N.id),onClick:C=>Z(N)},[l("span",og,[l("strong",null,f(N.name),1),l("span",ig,f(N.id==="signature"?"M26 · 外婆旧配方复原":`M${N.month} 起 · ${N.desc}`),1)]),l("span",lg,f(b(r).unlocked.includes(N.id)?"已上架":N.month>b(r).month?`M${N.month}开放`:N.id==="signature"?"复原":"开始实验"),1)],8,rg))),128)),T[6]||(T[6]=l("div",{class:"section-title"},"实验档案",-1)),_.value.length?(v(),m("div",ag,[(v(!0),m(W,null,oe(_.value,N=>(v(),m("div",{key:N.product.id,class:"card card-pad report-row"},[l("strong",null,f(N.product.name),1),(v(),m(W,null,oe(["development","improvement"],C=>{var re;return l("div",{key:C,class:"report-entry"},[N.reports[C]?(v(),m(W,{key:0},[l("span",null,f(x(N.reports[C])),1),l("span",cg,"第 "+f(N.reports[C].run)+" 轮 · M"+f(N.reports[C].month),1),(re=N.reports[C].feedback)!=null&&re.length?(v(),m("div",ug,f(N.reports[C].feedback.join(" ")),1)):O("",!0)],64)):O("",!0)])}),64))]))),128))])):(v(),m("div",dg,"完成实验后，报告会保存到这里并跨周目保留。"))],64)):t.value==="develop"&&w.value?(v(),m("div",fg,[l("h2",null,f(b($e)(n.value).name)+" · 新品设计",1),l("p",pg,f(w.value.theme)+" "+f(w.value.focus),1),l("div",hg,"图鉴线索："+f((b(Ie).codex[n.value]||{}).hint||b($e)(n.value).desc),1),l("div",vg,[T[7]||(T[7]=l("div",{class:"field-title"},"风味方向",-1)),(v(!0),m(W,null,oe(b(hd),(N,C)=>(v(),m("button",{key:N,type:"button",class:be(["choice",{chosen:o.value===C}]),onClick:re=>o.value=C},f(N),11,mg))),128))]),l("div",gg,[T[8]||(T[8]=l("div",{class:"field-title"},[st("核心食材 "),l("span",{class:"small muted"},"可多选")],-1)),(v(!0),m(W,null,oe(b(hi)(n.value),N=>(v(),m("button",{key:N,type:"button",class:be(["choice",{chosen:s.value.includes(N)}]),onClick:C=>te(N)},f(N),11,yg))),128)),l("div",bg,"配方提示："+f((b(Ie).codex[n.value]||{}).hint||""),1)]),l("div",_g,[l("div",kg,f(w.value.ratioLabel),1),(v(!0),m(W,null,oe(b(vd),(N,C)=>(v(),m("button",{key:N,type:"button",class:be(["choice",{chosen:i.value===C}]),onClick:re=>i.value=C},f(N),11,Mg))),128))]),l("div",xg,[T[9]||(T[9]=l("div",{class:"field-title"},"制作工艺",-1)),(v(!0),m(W,null,oe(w.value.processes,(N,C)=>(v(),m("button",{key:N,type:"button",class:be(["choice",{chosen:a.value===C}]),onClick:re=>a.value=C},f(N),11,$g))),128))]),l("div",Cg,[T[10]||(T[10]=l("div",{class:"field-title"},[st("装饰取舍 "),l("span",{class:"small muted"},"越丰富，外观越高，成本分越低")],-1)),(v(!0),m(W,null,oe(b(md),(N,C)=>(v(),m("button",{key:N,type:"button",class:be(["choice",{chosen:c.value===C}]),onClick:re=>c.value=C},f(N)+" · 外观 "+f([72,90,100][C])+" / 成本 "+f(b(Kl)[C]),11,wg))),128))]),l("button",{class:"btn primary block",type:"button",disabled:!L.value||b(r).ap<1||!b(rn)(n.value,.25)||b(r).dayPhase!=="prep"||b(r).phase!=="playing",onClick:K},"开始试吃 · 1 点行动力",8,Eg),l("div",Sg,f(L.value?b(rn)(n.value,.25)?b(r).ap<1?"当前行动力不足。":b(r).dayPhase!=="prep"?"营业阶段不能试做，请先结束营业日。":"":"配方材料不足，请先采购。":"请先选择风味、食材、主料比例和制作工艺。")+"失败消耗 1 点行动力和四分之一份配方材料；合格后上架再消耗 1 点行动力。",1)])):t.value==="signature"?(v(),m("div",Tg,[T[15]||(T[15]=l("h2",null,"外婆的桂花栗子蛋糕 · 复原试验",-1)),T[16]||(T[16]=l("p",{class:"small muted"},"手记线索：「栗子甜则少放糖，桂花香淡则后撒。」先选核心材料，再完成三项判断。",-1)),l("div",Ig,[T[11]||(T[11]=l("div",{class:"field-title"},"核心食材",-1)),(v(!0),m(W,null,oe(b(hi)("signature"),N=>(v(),m("button",{key:N,type:"button",class:be(["choice",{chosen:s.value.includes(N)}]),onClick:C=>te(N)},f(N),11,Ag))),128))]),l("div",Rg,[T[12]||(T[12]=l("div",{class:"field-title"},"栗子甜度",-1)),(v(),m(W,null,oe(["减少额外糖量","维持标准糖量","再增加一些糖"],(N,C)=>l("button",{key:N,type:"button",class:be(["choice",{chosen:o.value===C}]),onClick:re=>o.value=C},f(N),11,Og)),64))]),l("div",Ng,[T[13]||(T[13]=l("div",{class:"field-title"},"桂花冻的处理",-1)),(v(),m(W,null,oe(["趁热拌进栗子泥","冷却后单独夹层","趁热浸入戚风胚"],(N,C)=>l("button",{key:N,type:"button",class:be(["choice",{chosen:i.value===C}]),onClick:re=>i.value=C},f(N),11,Dg)),64))]),l("div",Pg,[T[14]||(T[14]=l("div",{class:"field-title"},"金桂的加入时间",-1)),(v(),m(W,null,oe(["烘烤前加入","蛋糕冷却后撒","装盒前现撒"],(N,C)=>l("button",{key:N,type:"button",class:be(["choice",{chosen:a.value===C}]),onClick:re=>a.value=C},f(N),11,Lg)),64))]),l("button",{class:"btn primary block",type:"button",disabled:!G.value||b(r).ap<1||!b(rn)("signature",.25)||b(r).dayPhase!=="prep"||b(r).phase!=="playing",onClick:ne},"试吃复原配方 · 1 点行动力",8,Fg),l("div",Vg,f(G.value?b(rn)("signature",.25)?b(r).ap<1?"当前行动力不足。":b(r).dayPhase!=="prep"?"营业阶段不能试做，请先结束营业日。":"":"配方材料不足，请先采购。":"请选齐复原食材和三项判断。")+"失败消耗 1 点行动力和四分之一份配方材料，复原成功再消耗 1 点行动力。",1)])):t.value==="improve"?(v(),m("div",jg,[l("h2",null,f(b($e)(u.value).name)+" · 改良诊断",1),l("p",Bg,f(b(Cs)[u.value].question),1),(v(!0),m(W,null,oe(b(Cs)[u.value].options,(N,C)=>(v(),m("label",{key:N,class:"answer"},[bs(l("input",{"onUpdate:modelValue":T[0]||(T[0]=re=>p.value=re),type:"radio",value:C},null,8,qg),[[ju,p.value,void 0,{number:!0}]]),l("span",null,f(N),1)]))),128)),d.value?(v(),m("p",Ug,f(d.value),1)):O("",!0),l("button",{class:"btn primary block",type:"button",disabled:p.value<0||b(r).ap<D.value||!b(rn)(u.value,.25)||k.value||b(r).dayPhase!=="prep"||b(r).phase!=="playing",onClick:P},"提交改良试验 · 失败 1 / 成功 2 点行动力",8,Hg),l("div",Kg,f(p.value<0?"请选择一个改良方案。":b(rn)(u.value,.25)?b(r).ap<D.value?`当前行动力不足：本次至少需要 ${D.value} 点。`:b(r).dayPhase!=="prep"?"营业阶段不能进行改良。":"":"配方材料不足，请先采购。")+"试验消耗四分之一份配方材料；选错消耗 1 点行动力，可免费重选；选对消耗 2 点行动力并提升 1 级。",1)])):O("",!0),h.value?(v(),m("p",Gg,f(h.value),1)):O("",!0)]))}},zg=Ue(Wg,[["__scopeId","data-v-28a122e9"]]),Yg={key:1,class:"card card-pad"},Jg={class:"small muted"},Qg={class:"between small"},Zg={class:"small muted"},Xg=["disabled"],ey={key:0,class:"branch-row"},ty={class:"between small"},ny={class:"small muted"},sy=["disabled"],ry={class:"card card-pad"},oy={class:"between"},iy={class:"chip"},ly={class:"card card-pad",style:{"margin-top":"10px"}},ay={class:"between",style:{"margin-bottom":"8px"}},cy={class:"small muted",style:{"margin-bottom":"8px"}},uy={key:0,class:"chip pink",style:{"font-size":"10px"}},dy={class:"card card-pad",style:{"margin-top":"10px"}},fy={class:"between"},py={class:"chip"},hy={class:"between small"},vy={class:"between small"},my={class:"between small"},gy={class:"card card-pad",style:{"margin-top":"10px"}},yy={key:0,class:"empty"},by={class:"d"},_y={class:"x"},ky={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"},role:"status"},My={__name:"ManagePage",props:{initialSection:{type:String,default:"overview"}},emits:["open-panel"],setup(e,{emit:t}){const n=e,s=t,o=ee(n.initialSection),i=ee("");let a=0;ht(()=>n.initialSection,k=>o.value=k);const c=B(()=>wn.find(k=>!r.cities.includes(k.id)&&!r.surveyed.includes(k.id))),u=B(()=>Lt("survey")),p=B(()=>Lt("branch"));function d(k){const g=Lt(k);if(r.dayPhase!=="prep"||g.disabled||r.ap<g.ap||r.cash<g.cost){h(r.dayPhase!=="prep"?"请在营业前筹备。":g.note);return}Sn(k,{})?h(k==="survey"?"城市考察完成，可以安排开店。":"新店筹备完成。"):h("暂时无法完成这项筹备。")}function h(k){i.value=k,clearTimeout(a),a=setTimeout(()=>i.value="",2200)}return(k,g)=>{var I;return v(),m("div",null,[o.value==="lab"?(v(),De(zg,{key:0})):o.value==="branch"?(v(),m("div",Yg,[g[3]||(g[3]=l("div",{class:"h2"},"城市考察与分店筹备",-1)),l("p",Jg,"在准备阶段安排考察和开店。下一站："+f(((I=c.value)==null?void 0:I.name)||"所有城市已纳入版图"),1),l("div",Qg,[l("span",null,f(u.value.name),1),l("span",null,"行动力 "+f(u.value.ap)+" · ¥"+f(u.value.cost),1)]),l("div",Zg,f(u.value.note),1),l("button",{class:"btn block",type:"button",disabled:b(r).dayPhase!=="prep"||u.value.disabled||b(r).ap<u.value.ap,onClick:g[0]||(g[0]=_=>d("survey"))},"开始城市考察",8,Xg),b(r).surveyed.length?(v(),m("div",ey,[l("div",ty,[l("strong",null,f(p.value.name),1),l("span",null,"行动力 "+f(p.value.ap)+" · ¥"+f(p.value.cost),1)]),l("div",ny,f(p.value.note),1),l("button",{class:"btn primary block",type:"button",disabled:b(r).dayPhase!=="prep"||p.value.disabled||b(r).ap<p.value.ap,onClick:g[1]||(g[1]=_=>d("branch"))},"筹备并开店",8,sy)])):O("",!0)])):(v(),m(W,{key:2},[l("div",ry,[l("div",oy,[g[4]||(g[4]=l("div",null,[l("div",{class:"h2",style:{margin:"0"}},"经营手账"),l("div",{class:"small muted"},"记录阶段目标、经营结果与重要收藏。")],-1)),l("span",iy,"行动力 "+f(b(r).ap)+"/"+f(b(r).maxAp),1)]),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:g[2]||(g[2]=_=>s("open-panel","codex"))},"打开产品图鉴、顾客档案与相册")]),l("div",ly,[l("div",ay,[g[5]||(g[5]=l("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),l("span",{class:be(["chip",b(qt).done>=b(qt).need?"sage":""])},f(b(qt).done)+" / "+f(b(qt).need||"—"),3)]),l("div",cy,f(b(rr).name)+" · 完成 "+f(b(qt).need)+" 项即可进入下一阶段。",1),(v(!0),m(W,null,oe(b(qt).list,_=>(v(),m("div",{key:_.text,class:be(["goal",{done:_.done}])},[g[6]||(g[6]=l("span",{class:"dot"},null,-1)),l("span",null,f(_.text),1),_.expand?(v(),m("span",uy,"扩张")):O("",!0)],2))),128))]),l("div",dy,[l("div",fy,[g[7]||(g[7]=l("div",{class:"h2"},"本月经营",-1)),l("span",py,"第 "+f(b(r).day)+"/5 日",1)]),l("div",hy,[g[8]||(g[8]=l("span",{class:"muted"},"本月已到账",-1)),l("span",null,"¥"+f(b(r).monthRev.toLocaleString()),1)]),l("div",vy,[g[9]||(g[9]=l("span",{class:"muted"},"本月销量",-1)),l("span",null,f(Object.values(b(r).monthSold).reduce((_,w)=>_+w,0))+" 个",1)]),l("div",my,[g[10]||(g[10]=l("span",{class:"muted"},"口碑 / 知名度",-1)),l("span",null,f(Math.round(b(r).reputation))+" / "+f(Math.round(b(r).popularity)),1)])]),l("div",gy,[g[11]||(g[11]=l("div",{class:"h2"},"最近发生的事",-1)),b(r).log.length?O("",!0):(v(),m("div",yy,"还没有记录。")),(v(!0),m(W,null,oe(b(r).log.slice(0,12),(_,w)=>(v(),m("div",{key:w,class:be(["logline",_.tone])},[l("span",by,f(_.month)+"月"+f(_.day)+"日",1),l("span",_y,f(_.text),1)],2))),128))])],64)),i.value?(v(),m("p",ky,f(i.value),1)):O("",!0)])}}},xy=Ue(My,[["__scopeId","data-v-baa859ee"]]),$y={class:"world"},Cy=["src","alt"],wy={class:"world-heading"},Ey={class:"world-eyebrow"},Sy={class:"world-title"},Ty={class:"world-subtitle"},Iy=["onClick"],Ay={class:"world-status"},Ry={key:1,class:"world-toast",role:"status"},Oy={key:2,class:"world-travel"},Ny={class:"world-travel-head"},Dy={class:"world-travel-grid"},Py=["onClick"],Ly=["src"],Fy={class:"world-action-sheet"},Vy={key:0},jy={class:"world-action-buttons"},By=["disabled"],qy={__name:"SceneMapPage",props:{scene:{type:String,default:"shop"}},emits:["change-scene","open-panel"],setup(e,{emit:t}){const n=e,s=t,o={shop:{name:"林记烘焙",sub:"熟悉的木门后，总有蛋糕香",img:"bg-shop.webp",icon:"🏠"},kitchen:{name:"烘焙后厨",sub:"今天也要做出好吃的蛋糕",img:"bg-kitchen.webp",icon:"🥣"},street:{name:"栖云镇老街",sub:"沿着青石板路，去熟悉的地方",img:"bg-street.webp",icon:"🌿"},home:{name:"林念的家",sub:"家里的灯总为你留着",img:"bg-home.webp",icon:"🪴"},cafe:{name:"街角咖啡馆",sub:"一杯咖啡与一点新灵感",img:"bg-cafe.webp",icon:"☕"},park:{name:"河边公园",sub:"适合散步、看看河面",img:"bg-park.webp",icon:"🍃"},market:{name:"小镇市集",sub:"季节活动的摊位已经摆好",img:"bg-market.webp",icon:"🎪"},studio:{name:"设计工作室",sub:"配色、包装与有趣的创意",img:"bg-studio.webp",icon:"🎨"},school:{name:"熟悉的高中",sub:"那些一起走过的旧时光",img:"bg-school.webp",icon:"📚"},store:{name:"品牌新店",sub:"林记走向更远的地方",img:"bg-store.webp",icon:"🏬"}};function i(E){return E==="studio"?r.month>=21:E==="market"?r.month>=6:E==="store"?r.month>=19:E==="school"?r.month>=4:!0}const a=B(()=>Object.entries(o).filter(([E])=>i(E)).map(([E,Z])=>({id:E,...Z}))),c=B(()=>o[n.scene]||o.shop),u=B(()=>n.scene==="shop"?"bg-shop-lv"+r.shopLevel+".webp":c.value.img),p=B(()=>ze(u.value)==="ok"?u.value:c.value.img),d=B(()=>{const E={1:{counter:[56,55],mom:[22,68],phone:[29,51],book:[82,80],diary:[13,82],kitchen:[88,38],door:[92,92]},2:{counter:[57,57],mom:[30,75],phone:[8,64],book:[13,83],diary:[84,77],kitchen:[82,40],door:[92,93]},3:{counter:[64,58],mom:[20,67],phone:[32,55],book:[85,84],diary:[14,84],kitchen:[82,40],door:[92,93]},4:{counter:[78,59],mom:[20,67],phone:[31,56],book:[26,47],diary:[15,84],kitchen:[79,40],door:[92,94]}}[r.shopLevel]||{counter:[56,55],mom:[22,68],phone:[29,51],book:[82,80],diary:[13,82],kitchen:[88,38],door:[92,92]},Z={shop:[{id:"counter",x:E.counter[0],y:E.counter[1],text:"柜台 · 预约与营业",kind:"panel",value:"shop",section:"counter"},{id:"mom",x:E.mom[0],y:E.mom[1],text:"和妈妈聊聊",kind:"action",value:"momchat"},{id:"phone",x:E.phone[0],y:E.phone[1],text:"手机 · 宣传",kind:"action",value:"market"},{id:"book",x:E.book[0],y:E.book[1],text:"装修册 · 店铺升级",kind:"panel",value:"renovation"},{id:"diary",x:E.diary[0],y:E.diary[1],text:"手账 · 目标与图鉴",kind:"panel",value:"manage"},{id:"kitchen",x:E.kitchen[0],y:E.kitchen[1],text:"去后厨 →",kind:"scene",value:"kitchen"},{id:"door",x:E.door[0],y:E.door[1],text:"出门 →",kind:"scene",value:"street"}],kitchen:[{id:"workbench",x:49,y:69,text:"操作台 · 排产与制作",kind:"panel",value:"kitchen"},{id:"lab",x:76,y:44,text:"实验台 · 新品研发",kind:"panel",value:"manage",section:"lab"},{id:"staff",x:20,y:39,text:"排班板 · 员工与培训",kind:"panel",value:"partners"},{id:"back",x:7,y:53,text:"← 回店内",kind:"scene",value:"shop"}],street:[{id:"supplier",x:83,y:56,text:"食材铺 · 采购",kind:"panel",value:"supplier"},{id:"sq",x:70,y:78,text:"和苏晴聊聊",kind:"action",value:"sqchat"},{id:"bakery",x:16,y:55,text:"← 回林记",kind:"scene",value:"shop"},{id:"park",x:40,y:90,text:"去公园 →",kind:"scene",value:"park"},{id:"home",x:80,y:90,text:"回家 →",kind:"scene",value:"home"}],store:[{id:"expansion",x:54,y:67,text:"新店规划桌 · 城市与分店",kind:"panel",value:"manage",section:"branch"},{id:"exit",x:8,y:91,text:"← 回栖云镇",kind:"scene",value:"street"}],market:[{id:"stall",x:48,y:58,text:"林记摊位 · 参加市集",kind:"panel",value:"game:market"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],cafe:[{id:"collab",x:52,y:56,text:"联名活动 · 咖啡与蛋糕",kind:"panel",value:"game:cafe"},{id:"coffee",x:22,y:74,text:"喝一杯（体力 +12）",kind:"action",value:"coffee"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],park:[{id:"walk",x:50,y:66,text:"在河边走走（心情 +8）",kind:"action",value:"walk"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],studio:[{id:"album",x:52,y:60,text:"看看设计稿与相册",kind:"panel",value:"codex"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],school:[{id:"memories",x:50,y:62,text:"翻翻旧相册",kind:"panel",value:"codex"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}]};return Z[n.scene]?Z[n.scene]:n.scene==="home"?[{id:"exit",x:10,y:90,text:"← 出门",kind:"scene",value:"street"}]:[{id:"exit",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}]}),h=ee(!1),k=ee(null),g=ee("");let I;ht(()=>n.scene,()=>{k.value=null,h.value=!1});function _(E){g.value=E,clearTimeout(I),I=setTimeout(()=>{g.value=""},2400)}function w(E){if(!i(E))return _("這個地方還沒有開放。");k.value=null,h.value=!1,s("change-scene",E)}const A=B(()=>!k.value||k.value.kind!=="action"?null:k.value.value==="momchat"?{ap:1,cost:0,disabled:!1,note:"家庭默契 +4"}:Lt(k.value.value));function L(E){if(E.kind==="scene")return w(E.value);if(E.kind==="panel")return s("open-panel",E.value,E.section||"overview");k.value=E}function G(){const E=k.value;if(!E||r.phase!=="playing")return;if(r.dayPhase!=="prep")return _("今天已经开门，打烊后再行动。");const Z=A.value;if(!Z||Z.disabled||r.ap<Z.ap||r.cash<Z.cost)return _((Z==null?void 0:Z.note)||"现在暂时无法行动。");(E.value==="momchat"?Sn("talk",{partner:"mom"}):Sn(E.value,{}))?(_(E.text+" · 已完成"),k.value=null):_("暂时无法执行，请检查行动力或触发条件。")}function D(E){return E==="studio"?"21":E==="market"?"6":E==="store"?"19":"4"}return(E,Z)=>{var te,K,ne,se;return v(),m("section",$y,[l("div",{class:be(["world-canvas","world-"+e.scene])},[b(ze)(p.value)!=="no"?(v(),m("img",{key:0,class:"world-background",src:b(Ae)(p.value),alt:c.value.name},null,8,Cy)):O("",!0),Z[6]||(Z[6]=l("div",{class:"world-vignette","aria-hidden":"true"},null,-1)),l("header",wy,[l("div",null,[l("span",Ey,f(e.scene==="shop"?"HOME":"QIYUN TOWN")+" · 第 "+f(b(r).month)+" 月",1),l("h1",Sy,f(c.value.name),1),l("div",Ty,f(c.value.sub),1)]),l("button",{class:"world-compass",type:"button","aria-label":"打开地点地图",onClick:Z[0]||(Z[0]=z=>h.value=!h.value)},"地图")]),(v(!0),m(W,null,oe(d.value,z=>(v(),m("button",{key:z.id,class:"world-hotspot",type:"button",style:et({left:z.x+"%",top:z.y+"%",transform:z.x>80?"translate(-100%,-50%)":z.x<15?"translate(0,-50%)":"translate(-50%,-50%)"}),onClick:q=>L(z)},f(z.text),13,Iy))),128)),l("div",Ay,[l("span",null,f(b(rr).name),1),l("span",null,"阶段目标 "+f(b(qt).done)+"/"+f(b(qt).need||"—"),1),l("span",null,"口碑 "+f(Math.round(b(r).reputation)),1)]),g.value?(v(),m("div",Ry,f(g.value),1)):O("",!0),h.value?(v(),m("div",Oy,[l("div",Ny,[Z[4]||(Z[4]=l("span",null,"选择地点",-1)),l("button",{type:"button","aria-label":"关闭地点地图",onClick:Z[1]||(Z[1]=z=>h.value=!1)},"✕")]),l("div",Dy,[(v(!0),m(W,null,oe(a.value,z=>(v(),m("button",{key:z.id,type:"button",class:be(["world-travel-place",{current:e.scene===z.id}]),onClick:q=>w(z.id)},[l("img",{src:b(Ae)(z.img),alt:""},null,8,Ly),l("span",null,f(z.icon)+" "+f(z.name),1)],10,Py))),128)),(v(!0),m(W,null,oe(["school","market","store","studio"].filter(z=>!i(z)),z=>(v(),m("div",{key:"locked-"+z,class:"world-travel-place locked"},[Z[5]||(Z[5]=l("span",{class:"locked-avatar"},"?",-1)),l("span",null,"未解锁 · M"+f(D(z)),1)]))),128))])])):O("",!0),k.value?(v(),m("div",{key:3,class:"world-action-mask",onClick:Z[3]||(Z[3]=$t(z=>k.value=null,["self"]))},[l("div",Fy,[l("strong",null,f(k.value.text),1),l("span",null,f((te=A.value)==null?void 0:te.note),1),A.value?(v(),m("small",Vy,"消耗 "+f(A.value.ap)+" 点行动力"+f(A.value.cost?" · ¥"+A.value.cost:""),1)):O("",!0),l("div",jy,[l("button",{class:"world-action-cancel",type:"button",onClick:Z[2]||(Z[2]=z=>k.value=null)},"取消"),l("button",{class:"world-action-confirm",type:"button",disabled:b(r).dayPhase!=="prep"||((K=A.value)==null?void 0:K.disabled)||b(r).ap<(((ne=A.value)==null?void 0:ne.ap)||0)||b(r).cash<(((se=A.value)==null?void 0:se.cost)||0),onClick:G},"开始行动",8,By)])])])):O("",!0)],2)])}}},Uy=Ue(qy,[["__scopeId","data-v-0c8cd474"]]),Hy={class:"card card-pad"},Ky={class:"between"},Gy={class:"chip"},Wy=["disabled"],zy={class:"card ingredient-list"},Yy={class:"small muted"},Jy={class:"stepper"},Qy=["disabled","onClick"],Zy=["disabled","onClick"],Xy=["value","disabled","onInput","onBlur"],e0=["disabled","onClick"],t0=["disabled","onClick"],n0={key:0,class:"small",role:"status"},s0={class:"purchase-footer"},r0=["disabled"],o0={__name:"SupplierPage",setup(e){const t=Jt({}),n=ee(""),s=B(()=>_n.filter(p=>p.month<=r.month)),o=B(()=>s.value.reduce((p,d)=>p+(t[d.id]||0)*d.price,0));function i(p,d){t[p]=Math.max(0,Math.min(99,(t[p]||0)+d))}function a(p,d){const h=String(d.target.value||"").replace(/[^0-9]/g,"");t[p]=Math.max(0,Math.min(99,Number(h)||0)),d.target.value=String(t[p]||0)}function c(){Object.keys(t).forEach(p=>{t[p]=0}),Object.assign(t,Nd()),n.value="已按今天的生产计划填入缺料数量。"}function u(){const p=Od(t);n.value=p.message,p.ok&&Object.keys(t).forEach(d=>{t[d]=0})}return(p,d)=>(v(),m("div",null,[l("div",Hy,[l("div",Ky,[d[0]||(d[0]=l("div",{class:"h2"},"食材铺",-1)),l("span",Gy,"仓库 "+f(b(sr))+"/"+f(b(r).warehouseCapacity),1)]),d[1]||(d[1]=l("p",{class:"small muted"},"选好今天要用的原料，一次结账。数量可以直接输入，也能用 ±5 快速调。采购消耗 1 点行动力；二周目优惠在首笔采购时抵扣，最高 ¥300。",-1)),l("button",{class:"btn",type:"button",disabled:b(r).dayPhase!=="prep",onClick:c},"按生产计划补齐缺料",8,Wy)]),l("div",zy,[(v(!0),m(W,null,oe(s.value,h=>(v(),m("div",{key:h.id,class:"ingredient"},[l("div",null,[l("strong",null,f(h.name),1),l("div",Yy,"库存 "+f(b(r).pantry[h.id]||0)+" · ¥"+f(h.price)+" / 份",1)]),l("div",Jy,[l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,-5)},"−5",8,Qy),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,-1)},"−",8,Zy),l("input",{class:"qty",type:"number",inputmode:"numeric",min:"0",max:"99",value:t[h.id]||0,disabled:b(r).dayPhase!=="prep",onInput:k=>a(h.id,k),onBlur:k=>a(h.id,k)},null,40,Xy),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,1)},"+",8,e0),l("button",{type:"button",disabled:b(r).dayPhase!=="prep",onClick:k=>i(h.id,5)},"+5",8,t0)])]))),128))]),n.value?(v(),m("p",n0,f(n.value),1)):O("",!0),l("div",s0,[l("span",null,"合计 ¥"+f(o.value),1),l("button",{class:"btn primary",type:"button",disabled:b(r).dayPhase!=="prep"||b(r).ap<1||o.value<=0,onClick:u},"确认采购 · 1 点行动力",8,r0)])]))}},i0=Ue(o0,[["__scopeId","data-v-0c0a0343"]]),l0={class:"card card-pad"},a0={class:"between"},c0={class:"chip"},u0={class:"small muted"},d0=["disabled"],f0={class:"card card-pad section-card"},p0={class:"small muted"},h0=["disabled","onClick"],v0={class:"card card-pad section-card"},m0={class:"small muted"},g0=["disabled","onClick"],y0={__name:"RenovationPage",setup(e){const t=B(()=>Xn.find(i=>i.lv===r.shopLevel+1)),n=B(()=>Ul.map(i=>({...i,tier:nr(i.id),next:Zl(i.id)}))),s=B(()=>io.map(i=>({...i,owned:r.decorations.includes(i.id),available:r.shopLevel>=i.shopLevel})));function o(){if(r.dayPhase!=="prep")return;const i=Lt("decorate");!i.disabled&&r.ap>=i.ap&&r.cash>=i.cost&&Sn("decorate",{})}return(i,a)=>(v(),m("div",null,[l("div",l0,[l("div",a0,[a[0]||(a[0]=l("div",{class:"h2"},"店铺升级",-1)),l("span",c0,f(b(Zu)(b(r).shopLevel).name),1)]),l("div",u0,"舒适度 "+f(b(jr))+"/4 · 自然客流 +"+f(b(jr)*2)+"%",1),l("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:b(r).dayPhase!=="prep"||!t.value||b(Lt)("decorate").disabled||b(r).ap<2,onClick:o},f(t.value?"升级到 "+t.value.name+" · ¥"+t.value.cost+" · 2 点行动力":"已达到最高等级"),9,d0)]),l("div",f0,[a[1]||(a[1]=l("div",{class:"h2"},"装饰",-1)),(v(!0),m(W,null,oe(s.value,c=>(v(),m("div",{key:c.id,class:"row-item"},[l("div",null,[l("strong",null,f(c.name),1),l("div",p0,"舒适度 +1 · 店铺等级 "+f(c.shopLevel)+" · ¥"+f(c.cost),1)]),l("button",{class:"btn",type:"button",disabled:b(r).dayPhase!=="prep"||c.owned||!c.available||b(r).cash<c.cost||b(r).phase!=="playing",onClick:u=>b(Gd)(c.id)},f(c.owned?"已购":c.available?"购买":"等级不足"),9,h0)]))),128))]),l("div",v0,[a[2]||(a[2]=l("div",{class:"between"},[l("div",{class:"h2"},"设备"),l("span",{class:"small muted"},"升级后立即生效")],-1)),(v(!0),m(W,null,oe(n.value,c=>{var u;return v(),m("div",{key:c.id,class:"row-item"},[l("div",null,[l("strong",null,f(c.name)+" · "+f(c.tier)+"/3",1),l("div",m0,f(c.desc)+" · "+f(((u=c.next)==null?void 0:u.text)||"已经满级"),1)]),l("button",{class:"btn",type:"button",disabled:b(r).dayPhase!=="prep"||!c.next||b(r).cash<c.next.cost,onClick:p=>b(Ad)(c.id)},f(c.next?"¥"+c.next.cost:"满级"),9,g0)])}),128))])]))}},b0=Ue(y0,[["__scopeId","data-v-d0e3b39f"]]),_0={class:"mg"},k0=["src"],M0={class:"mg-top"},x0={class:"mg-title"},$0={class:"t"},C0={key:0,class:"s"},w0={class:"mg-slot"},E0={class:"mg-body"},S0={__name:"MiniShell",props:{bg:{type:String,required:!0},title:{type:String,default:""},sub:{type:String,default:""}},emits:["exit"],setup(e){const t=e,n=Ae(t.bg+".webp"),s=ze(t.bg+".webp")==="ok"?n:Ae(t.bg+".png");return(o,i)=>(v(),m("div",_0,[l("img",{class:"mg-bg",src:b(s),alt:""},null,8,k0),i[1]||(i[1]=l("div",{class:"mg-shade"},null,-1)),l("header",M0,[l("button",{class:"mg-back",type:"button",onClick:i[0]||(i[0]=a=>o.$emit("exit")),"aria-label":"返回"},"←"),l("div",x0,[l("div",$0,f(e.title),1),e.sub?(v(),m("div",C0,f(e.sub),1)):O("",!0)]),l("div",w0,[No(o.$slots,"top",{},void 0)])]),l("div",E0,[No(o.$slots,"default",{},void 0)])]))}},ha=Ue(S0,[["__scopeId","data-v-5cc92e4c"]]),T0={key:0,class:"cust"},I0={class:"cust-tag"},A0={class:"bubble"},R0={key:0,class:"hint"},O0={key:1,class:"hint"},N0={key:1,class:"shelf"},D0=["onClick"],P0=["src","alt"],L0={class:"cn"},F0={class:"cq"},V0={key:0,class:"empty"},j0={key:2,class:"bar"},B0=["disabled"],q0={key:3,class:"notice"},U0={key:4,class:"packing"},H0=["src"],K0={class:"pk-bar"},G0={class:"ph-card"},W0={class:"ph-head"},z0={class:"ph-no"},Y0={class:"ph-name"},J0={class:"ph-desc"},Q0={key:6,class:"result"},Z0={class:"rs-row"},X0={class:"rs-row"},eb={class:"rs-row"},tb={class:"rs-say"},Ti="圆形的奶油蛋糕，颜色偏浅。",nb="A",sb=8,rb=450,ob={__name:"DeliveryGame",emits:["exit","done"],setup(e,{emit:t}){const n=t,s={plain:"圆形浅黄色的戚风蛋糕胚，外头抹一层白色奶油，表面有细细的抹刀纹，顶上就一片薄奶油花。",strawberry:"圆形白奶油蛋糕，顶上整整齐齐摆着三颗红草莓，侧面能看见夹层里的草莓果肉。",chocolate:"深棕色的圆形蛋糕，外面裹着巧克力奶油，表面撒了一层深色巧克力碎屑。",taro:"淡紫色的圆蛋糕，表面是芋泥，顶面插着几片焦糖色的杏仁薄脆。",matcha:"浅绿色的圆蛋糕，抹面是抹茶奶油，顶上撒了一些暗红色的豆子。",mango:"金黄色的圆形慕斯，表面是很光的镜面，顶上铺着芒果丁和几片芒果。",tiramisu:"方形的一块，表面筛了一层深棕色的粉，边上露出一层白色奶酪。",fig:"白奶油蛋糕，顶上是紫红色的无花果瓣，摆成一朵花的形状。",seasonal:"圆奶油蛋糕，表面堆满了当季水果——草莓、奇异果、蓝莓，五颜六色的。",custom:"双层的大蛋糕，白奶油打底，顶上有裱花和一块小牌子。",festival:"圆蛋糕，红棕色的奶油，顶上有过节的装饰糖珠和小花。",signature:"棕黄色的圆形蛋糕，表面是栗子奶油挤出的螺旋纹路，撒了金桂花瓣。"},o=ee("intro"),i=ee([]),a=ee(0),c=ee(""),u=ee(0),p=ee(0),d=ee(0),h=ee(""),k=ee(!1),g=ee(!1),I=ee(0),_=Jt({rows:[]});let w=null;const A=B(()=>r.shelf||{}),L=B(()=>hn.value.filter(P=>(A.value[P.id]||0)>0).slice(0,12).map(P=>({...P,n:A.value[P.id]||0}))),G=B(()=>i.value[a.value]||null),D=P=>ze("cake-"+P+".webp")==="ok"?Ae("cake-"+P+".webp"):"",E=P=>Ae("minigame-pack-"+P+".png"),Z=B(()=>{const P=G.value;return P?P.kind==="walk"?P.text:"你好，我来取之前预订的蛋糕，订单编号是 "+P.order+"。":""});function te(P){const S=String(r.month).padStart(2,"0");return nb+S+String(100+P*7+Math.floor(Math.random()*90))}function K(){if(r.deliveryDay===r.dayIndex){h.value="今天已经亲自接待过客人了，明天再来。",o.value="result";return}const P=L.value;if(!P.length){h.value="展示柜是空的，先去厨房做点蛋糕再来。";return}const S=[],x=Math.min(4,Math.max(3,P.length));for(let $=0;$<x;$++){const T=P[Math.floor(Math.random()*P.length)];$>=Math.ceil(x/2)?S.push({kind:"pickup",product:T.id,qty:1,order:te($),customer:"预约顾客"}):S.push({kind:"walk",product:T.id,qty:1,text:"老板，"+(s[T.id]||Ti)+"那种，来一份。",customer:"到店顾客"})}i.value=S,a.value=0,u.value=0,p.value=0,d.value=0,c.value="",o.value="play",h.value=""}function ne(P){if(o.value==="play"){if((A.value[P]||0)<1){h.value="这款已经卖完了。";return}c.value=c.value===P?"":P,h.value=""}}function se(){o.value==="play"&&(k.value=!k.value)}function z(){const P=G.value;if(!(!P||g.value)){if(!c.value){h.value="先在右边柜子里挑一份蛋糕。";return}if(c.value!==P.product){u.value+=1,h.value="不对，这位客人要的不是这款，再看看描述。",c.value="";return}g.value=!0,I.value=0,h.value="",w=setInterval(()=>{I.value+=1,I.value>=sb&&(clearInterval(w),w=null,q())},rb)}}function q(){const P=G.value;if(!P)return;const x=Qt(P.product)*P.qty;r.shelf[P.product]=Math.max(0,(r.shelf[P.product]||0)-P.qty),r.cash+=x,r.dayRev+=x,r.monthRev+=x,p.value+=x,d.value+=P.qty,_.rows.push({name:$e(P.product).name,kind:P.kind,money:x}),g.value=!1,c.value="",ue(),a.value+1>=i.value.length?(o.value="result",r.deliveryDay=r.dayIndex,ue(),n("done",{earned:p.value,sold:d.value,misses:u.value})):a.value+=1}const U=B(()=>{i.value.length;const P=u.value;return P===0?"一次没错，客人都在夸你眼力好":P<=2?"还算利落，就是找货时多看了几眼":"有点手忙脚乱，明天再来练练"});return vn(()=>{K()}),no(()=>{w&&clearInterval(w)}),(P,S)=>(v(),De(ha,{bg:"minigame-delivery",title:"订单交付",sub:o.value==="play"?"第 "+(a.value+1)+" / "+i.value.length+" 位客人 · 已入账 ¥"+p.value:"柜台接单"},{default:Ws(()=>[o.value==="play"?(v(),m("div",T0,[l("div",I0,f(G.value.customer),1),l("div",A0,f(Z.value),1),G.value.kind==="pickup"?(v(),m("div",R0,"打开手机，按订单号找到这份预订")):(v(),m("div",O0,"照着描述，在右边柜子里挑出来"))])):O("",!0),o.value==="play"?(v(),m("div",N0,[(v(!0),m(W,null,oe(L.value,x=>(v(),m("button",{key:x.id,type:"button",class:be(["cell",{on:c.value===x.id}]),onClick:$=>ne(x.id)},[D(x.id)?(v(),m("img",{key:0,src:D(x.id),alt:x.name},null,8,P0)):O("",!0),l("div",L0,f(x.name),1),l("div",F0,"剩 "+f(x.n),1)],10,D0))),128)),L.value.length?O("",!0):(v(),m("div",V0,"柜子是空的"))])):O("",!0),o.value==="play"?(v(),m("div",j0,[l("button",{class:"op",type:"button",onClick:se},"手机 · 查订单"),l("button",{class:"op primary",type:"button",disabled:g.value,onClick:z},f(g.value?"打包中…":"打包交付"),9,B0)])):O("",!0),h.value?(v(),m("p",q0,f(h.value),1)):O("",!0),g.value?(v(),m("div",U0,[S[3]||(S[3]=l("div",{class:"pk-title"},"正在打包",-1)),l("img",{src:E(I.value),alt:""},null,8,H0),l("div",K0,[l("i",{style:et({width:(I.value+1)/8*100+"%"})},null,4)])])):O("",!0),k.value?(v(),m("div",{key:5,class:"phone",onClick:S[1]||(S[1]=$t(x=>k.value=!1,["self"]))},[l("div",G0,[l("div",W0,[S[4]||(S[4]=l("span",null,"订单详情",-1)),l("button",{type:"button",onClick:S[0]||(S[0]=x=>k.value=!1)},"关闭")]),(v(!0),m(W,null,oe(i.value,(x,$)=>(v(),m("div",{key:$,class:be(["ph-row",{now:$===a.value}])},[l("div",z0,f(x.kind==="pickup"?x.order:"到店单 · 无编号"),1),l("div",Y0,f(b($e)(x.product).name)+" × "+f(x.qty),1),l("div",J0,f(s[x.product]||Ti),1)],2))),128))])])):O("",!0),o.value==="result"?(v(),m("div",Q0,[S[8]||(S[8]=l("h3",null,"今天接待完了",-1)),l("div",Z0,[S[5]||(S[5]=l("span",null,"交付",-1)),l("span",null,f(d.value)+" 份",1)]),l("div",X0,[S[6]||(S[6]=l("span",null,"入账",-1)),l("span",null,"¥"+f(p.value),1)]),l("div",eb,[S[7]||(S[7]=l("span",null,"拿错",-1)),l("span",null,f(u.value)+" 次",1)]),l("p",tb,f(U.value),1),l("button",{class:"op primary",type:"button",onClick:S[2]||(S[2]=x=>n("exit"))},"回店里")])):O("",!0)]),_:1},8,["sub"]))}},ib=Ue(ob,[["__scopeId","data-v-217c2560"]]),lb={key:0,class:"cust"},ab={class:"tag"},cb={class:"bubble"},ub={key:1,class:"stand"},db=["onClick"],fb=["src","alt"],pb={class:"n"},hb={class:"p"},vb={key:0,class:"empty"},mb={key:2,class:"bar"},gb={key:3,class:"msg"},yb={key:4,class:"result"},bb={class:"row"},_b={class:"row"},kb={class:"row"},Mb={class:"say"},xb={key:1,class:"say"},$b={__name:"MarketGame",emits:["exit"],setup(e,{emit:t}){const n=t,s=ee(""),o=ee(0),i=ee("loading"),a=B(()=>(o.value,r.marketRun)),c=B(()=>(o.value,la())),u=B(()=>a.value?a.value.demands.length:0),p=B(()=>a.value?a.value.customerIndex:0),d=B(()=>{o.value;const w=a.value&&a.value.inventory||{};return Object.keys(w).filter(A=>(r.shelf[A]||0)>0).map(A=>({id:A,name:$e(A).name,price:Qt(A),left:r.shelf[A]||0}))}),h=w=>ze("cake-"+w+".webp")==="ok"?Ae("cake-"+w+".webp"):"";function k(){const w=of();if(!w.ok){s.value=w.message,i.value="result";return}i.value="play",o.value+=1}function g(w){const A=lf(w);s.value=A.message||"",o.value+=1,r.marketRun&&r.marketRun.completed&&(i.value="result")}function I(){af(),s.value="这位客人去了别家摊位。",o.value+=1,r.marketRun&&r.marketRun.completed&&(i.value="result")}const _=B(()=>{const w=a.value;if(!w)return"";const A=u.value?w.score/u.value:0;return A>=.9?"摊位前排起了小队，今天算是打了个漂亮仗":A>=.6?"卖得还行，几款招牌都被问到了":"有点乱，下次记得先把货摆清楚"});return vn(k),(w,A)=>(v(),De(ha,{bg:"minigame-market",title:"小镇市集",sub:i.value==="play"?"第 "+(p.value+1)+" / "+u.value+" 位客人 · 已卖 ¥"+(a.value&&a.value.revenue||0):"林记摊位"},{default:Ws(()=>[i.value==="play"&&c.value?(v(),m("div",lb,[l("div",ab,f(c.value.customer),1),l("div",cb,[A[1]||(A[1]=st(" 我要 ",-1)),l("b",null,f(b($e)(c.value.product).name),1),st(" × "+f(c.value.qty)+"，还有吗？ ",1)])])):O("",!0),i.value==="play"?(v(),m("div",ub,[(v(!0),m(W,null,oe(d.value,L=>(v(),m("button",{key:L.id,type:"button",class:"item",onClick:G=>g(L.id)},[h(L.id)?(v(),m("img",{key:0,src:h(L.id),alt:L.name},null,8,fb)):O("",!0),l("div",pb,f(L.name),1),l("div",hb,"¥"+f(L.price)+" · 剩 "+f(L.left),1)],8,db))),128)),d.value.length?O("",!0):(v(),m("div",vb,"摊位上没货了"))])):O("",!0),i.value==="play"?(v(),m("div",mb,[l("button",{class:"op",type:"button",onClick:I},"这位客人先看看别家")])):O("",!0),s.value&&i.value==="play"?(v(),m("p",gb,f(s.value),1)):O("",!0),i.value==="result"?(v(),m("div",yb,[l("h3",null,f(a.value&&a.value.completed?"今天收摊了":"还没法出摊"),1),a.value?(v(),m(W,{key:0},[l("div",bb,[A[2]||(A[2]=l("span",null,"卖出",-1)),l("span",null,f(a.value.sold)+" 份",1)]),l("div",_b,[A[3]||(A[3]=l("span",null,"收入",-1)),l("span",null,"¥"+f(a.value.revenue),1)]),l("div",kb,[A[4]||(A[4]=l("span",null,"错过",-1)),l("span",null,f(a.value.misses)+" 位",1)]),l("p",Mb,f(_.value),1)],64)):(v(),m("p",xb,f(s.value),1)),l("button",{class:"op primary",type:"button",onClick:A[0]||(A[0]=L=>n("exit"))},"回店里")])):O("",!0)]),_:1},8,["sub"]))}},Cb=Ue($b,[["__scopeId","data-v-816d45c8"]]),wb={class:"app"},Eb={key:1,class:"topbar"},Sb={class:"m serif"},Tb={class:"topbar-actions"},Ib={class:"purse"},Ab={key:2,class:"scroll scene-scroll"},Rb={class:"between scene-meta"},Ob={class:"small muted"},Nb={class:"chip"},Db=["disabled"],Pb={class:"scene-panel"},Lb={class:"scene-panel-head"},Fb={class:"small muted"},Vb={class:"scene-panel-content"},jb={key:7,class:"mask"},Bb={class:"sheet"},qb={class:"sheet-foot tut-foot"},Ub={key:8,class:"mask"},Hb={class:"sheet"},Kb={class:"sheet-foot tut-foot"},Gb={class:"sheet"},Wb={class:"sheet-head"},zb={class:"t serif"},Yb={class:"small muted"},Jb={class:"sheet-body"},Qb={class:"card card-pad"},Zb={class:"between small",style:{"margin-bottom":"6px"}},Xb={class:"between small",style:{"margin-bottom":"6px"}},e_={class:"between small",style:{"margin-bottom":"6px"}},t_={class:"between small"},n_={key:0,class:"card card-pad",style:{"margin-top":"12px"}},s_={class:"h2"},r_={class:"between small",style:{"margin-bottom":"6px"}},o_={class:"between small",style:{"margin-bottom":"6px"}},i_={class:"between small",style:{"margin-bottom":"6px"}},l_={class:"between small"},a_={class:"between small",style:{"margin-top":"6px"}},c_={key:0,class:"delta"},u_={key:0,class:"mrep"},d_={class:"mrep-b"},f_={key:1,class:"mrep"},p_={class:"mrep-b"},h_={key:2,class:"mrep"},v_={class:"mrep-b"},m_={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},g_={class:"sheet-foot"},y_={key:10,class:"mask"},b_={class:"sheet"},__={class:"sheet-body",style:{"padding-top":"22px"}},k_={class:"small muted serif"},M_={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},x_={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},$_={class:"card card-pad"},C_={class:"between small",style:{"margin-bottom":"6px"}},w_={class:"between small",style:{"margin-bottom":"6px"}},E_={class:"between small"},S_={key:1,class:"card card-pad",style:{"margin-top":"12px"}},T_={class:"pn"},I_={class:"muted small"},A_={class:"pt"},R_={class:"sheet-foot"},O_={__name:"App",setup(e){const t=ee("shop"),n=ee(!1),s=ee(!1),o=ee(""),i=ee(""),a=ee("overview"),c=ee("counter");function u(S,x="overview"){if(typeof S=="string"&&S.indexOf("game:")===0){i.value=S.slice(5);return}if(typeof S=="string"&&S.indexOf("game:")===0){i.value=S.slice(5);return}o.value=S,S==="manage"&&(a.value=x),S==="shop"&&(c.value=x)}function p(){o.value="",a.value="overview",c.value="counter"}const d=ee(null),h=ee(!1),k=ee(null),g=ee(null),I=ee(!1),_=new URLSearchParams(location.search).get("dev")==="1"||window.matchMedia("(max-width: 600px), (pointer: coarse)").matches,w=B(()=>r.phase==="ended"&&r.ending&&!Fe.events.length&&!I.value?r.ending:null),A=B(()=>_&&r.ending&&En.some(S=>!S.final&&S.short.key===r.ending.key)),L=B(()=>Fe.events.length);function G(S={}){n.value=!0,s.value=!1,t.value="shop",o.value=S.panel||"",a.value=S.section||"overview",Fe.events.length&&(d.value=Fe.events[0])}function D(){ue(),n.value=!1,s.value=!1,o.value="",d.value=null,k.value=null,g.value=null,I.value=!1}function E(){Fe.events.length&&(d.value=Fe.events[0])}function Z(){Fe.events.shift(),d.value=null,ue();const S=Fe.events[0];S&&(S.month===r.month||S.kind==="tutorial")&&setTimeout(E,200),!S&&!r.tutorialSeen&&r.month===1&&r.played.includes("EVT_PROLOGUE_01")&&(h.value=!0)}function te(S){h.value=!1,wf(S),E()}function K(S){k.value=S,S.day===ts&&(g.value=r.report)}function ne(){k.value=null,g.value=null,Fe.events.length&&E()}function se(){Ud()&&(t.value="shop",o.value="",I.value=!1,Hr(),E())}function z(){I.value=!0}function q(){Kd()&&(I.value=!1,k.value=null,g.value=null,Hr(),E())}function U(){d.value||k.value||Hd()&&(d.value=null,g.value=null,k.value=null,E())}ht(()=>r.autoStory,S=>{S&&(r.autoStory=!1,setTimeout(()=>{!d.value&&Fe.events.length&&E()},90))});const P=B(()=>{if(!w.value)return[];const S=$n.filter($=>r.staff.includes($.id)).map($=>({name:$.nick,role:$.role,...wi($.id)||{}})),x=wi("mom");return x&&S.push({name:"林暖",role:"母亲",...x}),S.filter($=>$.title)});return vn(()=>{Ed()}),(S,x)=>(v(),m("div",wb,[n.value?O("",!0):(v(),De(Si,{key:0,onEnter:G})),n.value?(v(),m("div",Eb,[l("div",Sb,[st(f(b(Mr)(b(r).month))+" ",1),l("small",null,"第 "+f(b(r).month)+" / 36 月 · 第 "+f(b(r).day)+" / "+f(b(ts))+" 日",1)]),l("div",Tb,[l("div",Ib,[x[10]||(x[10]=l("span",{class:"y"},"¥",-1)),st(f(b(r).cash.toLocaleString()),1)]),l("button",{class:"topbar-save",type:"button",onClick:x[0]||(x[0]=$=>s.value=!0)},"设置")])])):O("",!0),n.value?(v(),m("div",Ab,[l("div",Rb,[l("span",Ob,f(b(rr).name),1),l("span",Nb,"行动力 "+f(b(r).ap)+" · 体力 "+f(b(r).stamina),1)]),b(_)&&b(r).phase==="playing"?(v(),m("button",{key:0,class:"btn",type:"button",style:{width:"100%",margin:"0 0 8px"},disabled:!!d.value||!!k.value,onClick:U},"开发者后门 · 跳到下个月",8,Db)):O("",!0),Re(Uy,{scene:t.value,onChangeScene:x[1]||(x[1]=$=>t.value=$),onOpenPanel:u},null,8,["scene"]),o.value?(v(),m("div",{key:1,class:"scene-panel-mask",onClick:$t(p,["self"])},[l("section",Pb,[l("header",Lb,[l("div",null,[l("div",Fb,"林记烘焙 · "+f(b(Mr)(b(r).month)),1),l("strong",null,f({shop:"柜台营业",kitchen:"后厨操作台",partners:"员工排班板",manage:"经营手账",codex:"图鉴与相册",supplier:"食材采购",renovation:"店铺升级"}[o.value]||"经营"),1)]),l("button",{type:"button",class:"scene-panel-close",onClick:p},"✕")]),l("div",Vb,[o.value==="shop"?(v(),De(wm,{key:0,paused:!!d.value,onClosed:K,onOpenPanel:u},null,8,["paused"])):o.value==="renovation"?(v(),De(b0,{key:1})):o.value==="supplier"?(v(),De(i0,{key:2})):o.value==="kitchen"?(v(),De(c1,{key:3,paused:!!d.value},null,8,["paused"])):o.value==="partners"?(v(),De(V1,{key:4})):o.value==="manage"?(v(),De(xy,{key:5,"initial-section":a.value,onOpenPanel:u},null,8,["initial-section"])):o.value==="codex"?(v(),De(pa,{key:6,"initial-segment":a.value==="collection"?"collection":"product"},null,8,["initial-segment"])):O("",!0)])])])):O("",!0)])):O("",!0),n.value&&L.value?(v(),m("button",{key:3,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"16px","z-index":"20","box-shadow":"var(--shadow)"},onClick:E}," 有 "+f(L.value)+" 段剧情 ",1)):O("",!0),i.value==="delivery"?(v(),De(ib,{key:4,onExit:x[2]||(x[2]=$=>i.value=""),onDone:x[3]||(x[3]=$=>i.value="")})):O("",!0),i.value==="market"?(v(),De(Cb,{key:5,onExit:x[4]||(x[4]=$=>i.value="")})):O("",!0),n.value&&d.value?(v(),De(tp,{key:6,ev:d.value,onDone:Z},null,8,["ev"])):O("",!0),n.value&&h.value?(v(),m("div",jb,[l("div",Bb,[x[11]||(x[11]=Uo('<div class="sheet-head" data-v-6f7ff997><div class="t serif" data-v-6f7ff997>要不要先看看这家店？</div><div class="small muted" data-v-6f7ff997>林暖 · 林记烘焙前厅</div></div><div class="sheet-body" data-v-6f7ff997><div class="card card-pad" data-v-6f7ff997><p class="small" style="line-height:1.9;margin:0;" data-v-6f7ff997> 林暖把串着钥匙的钥匙扣放进你手心，问要不要带你从前厅、后厨一直走到街上。 看一遍会认得每个角落的用处；跳过也能随时自己摸索。 </p></div></div>',2)),l("div",qb,[l("button",{class:"btn",type:"button",onClick:x[5]||(x[5]=$=>te(!1))},"暂不查看"),l("button",{class:"btn primary",type:"button",onClick:x[6]||(x[6]=$=>te(!0))},"带我走一圈")])])])):O("",!0),n.value&&h.value?(v(),m("div",Ub,[l("div",Hb,[x[12]||(x[12]=Uo('<div class="sheet-head" data-v-6f7ff997><div class="t serif" data-v-6f7ff997>要不要先看看这家店？</div><div class="small muted" data-v-6f7ff997>林暖 · 林记烘焙前厅</div></div><div class="sheet-body" data-v-6f7ff997><div class="card card-pad" data-v-6f7ff997><p class="small" style="line-height:1.9;margin:0;" data-v-6f7ff997> 林暖把串着钥匙的钥匙扣放进你手心，问要不要带你从前厅、后厨一直走到街上。 看一遍会认得每个角落的用处；跳过也能随时自己摸索。 </p></div></div>',2)),l("div",Kb,[l("button",{class:"btn",type:"button",onClick:x[7]||(x[7]=$=>te(!1))},"暂不查看"),l("button",{class:"btn primary",type:"button",onClick:x[8]||(x[8]=$=>te(!0))},"带我走一圈")])])])):O("",!0),n.value&&k.value?(v(),m("div",{key:9,class:"mask",onClick:$t(ne,["self"])},[l("div",Gb,[l("div",Wb,[l("div",zb,f(g.value?"月末结算":"打烊了"),1),l("div",Yb,f(b(Mr)(b(r).month))+" · 第 "+f(k.value.day)+" 个经营日",1)]),l("div",Jb,[l("div",Qb,[l("div",Zb,[x[13]||(x[13]=l("span",{class:"muted"},"今天卖出",-1)),l("span",null,f(k.value.sold)+" 个",1)]),l("div",Xb,[x[14]||(x[14]=l("span",{class:"muted"},"今日收入",-1)),l("span",null,"¥"+f(k.value.rev),1)]),l("div",e_,[x[15]||(x[15]=l("span",{class:"muted"},"剩下",-1)),l("span",null,f(k.value.left)+" 个",1)]),l("div",t_,[x[16]||(x[16]=l("span",{class:"muted"},"剩货回收",-1)),l("span",null,"¥"+f(k.value.gain),1)])]),g.value?(v(),m("div",n_,[l("div",s_,f(g.value.month)+" 月经营报告",1),l("div",r_,[x[17]||(x[17]=l("span",{class:"muted"},"营业额",-1)),l("span",null,"¥"+f(g.value.rev),1)]),l("div",o_,[x[18]||(x[18]=l("span",{class:"muted"},"支出",-1)),l("span",null,"¥"+f(g.value.cost),1)]),l("div",i_,[x[19]||(x[19]=l("span",{class:"muted"},"净收入",-1)),l("span",{style:et({color:g.value.net>=0?"#6c8a55":"var(--berry)"})},f(g.value.net>=0?"+":"")+f(g.value.net),5)]),l("div",l_,[x[20]||(x[20]=l("span",{class:"muted"},"最受欢迎",-1)),l("span",null,f(g.value.best)+"（"+f(g.value.bestN)+" 个）",1)]),l("div",a_,[x[21]||(x[21]=l("span",{class:"muted"},"口碑",-1)),l("span",null,[st(f(g.value.rep)+" ",1),g.value.repDelta?(v(),m("em",c_,f(g.value.repDelta>0?"+":"")+f(g.value.repDelta),1)):O("",!0)])]),g.value.fresh&&g.value.fresh.length?(v(),m("div",u_,[x[22]||(x[22]=l("div",{class:"mrep-t"},"这个月新上了",-1)),l("div",d_,f(g.value.fresh.join("、")),1)])):O("",!0),g.value.grown&&g.value.grown.length?(v(),m("div",f_,[x[23]||(x[23]=l("div",{class:"mrep-t"},"伙伴长进了",-1)),l("div",p_,f(g.value.grown.join(" · ")),1)])):O("",!0),g.value.trust&&g.value.trust.length?(v(),m("div",h_,[x[24]||(x[24]=l("div",{class:"mrep-t"},"信赖",-1)),l("div",v_,[(v(!0),m(W,null,oe(g.value.trust,($,T)=>(v(),m("span",{key:$.name},f(T?" · ":"")+f($.name)+" "+f($.v),1))),128))])])):O("",!0),g.value.warn?(v(),m("p",m_,f(g.value.warn),1)):O("",!0)])):O("",!0)]),l("div",g_,[l("button",{class:"btn primary block",type:"button",onClick:ne},f(w.value?"看结局":"继续"),1)])])])):O("",!0),n.value&&w.value?(v(),m("div",y_,[l("div",b_,[l("div",__,[l("div",k_,f(w.value.name),1),l("h2",M_,f(w.value.title),1),w.value.text?(v(),m("p",x_,f(w.value.text),1)):O("",!0),l("div",$_,[l("div",C_,[x[25]||(x[25]=l("span",{class:"muted"},"门店 / 伙伴",-1)),l("span",null,f(b(r).storeCount)+" 家 · "+f(b(r).staff.length)+" 人",1)]),l("div",w_,[x[26]||(x[26]=l("span",{class:"muted"},"产品 / 相册",-1)),l("span",null,f(b(r).unlocked.length)+" 款 · "+f(b(r).photos.length)+" 张",1)]),l("div",E_,[x[27]||(x[27]=l("span",{class:"muted"},"口碑 / 知名度",-1)),l("span",null,f(Math.round(b(r).reputation))+" / "+f(Math.round(b(r).popularity)),1)])]),P.value.length?(v(),m("div",S_,[x[28]||(x[28]=l("div",{class:"h2"},"他们的后来",-1)),(v(!0),m(W,null,oe(P.value,($,T)=>(v(),m("div",{key:T,class:"pl"},[l("div",T_,[st(f($.name),1),l("span",I_," · "+f($.title),1)]),l("div",A_,f($.text),1)]))),128))])):O("",!0)]),l("div",R_,[l("button",{class:"btn block",type:"button",onClick:z},"结束本局"),A.value?(v(),m("button",{key:0,class:"btn block",type:"button",onClick:q}," 继续剧情 ")):O("",!0),l("button",{class:"btn primary block",type:"button",onClick:se},"开启二周目")])])])):O("",!0),n.value&&s.value?(v(),De(Si,{key:11,"in-game":"",onClose:x[9]||(x[9]=$=>s.value=!1),onTitle:D,onEnter:G})):O("",!0)]))}},N_=Ue(O_,[["__scopeId","data-v-6f7ff997"]]);Wu(N_).mount("#app");
