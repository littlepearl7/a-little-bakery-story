(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ms(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const be={},Jn=[],mn=()=>{},Fo=()=>!1,Mr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Er=e=>e.startsWith("onUpdate:"),Ce=Object.assign,vs=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},xl=Object.prototype.hasOwnProperty,fe=(e,n)=>xl.call(e,n),re=Array.isArray,Vn=e=>jt(e)==="[object Map]",ar=e=>jt(e)==="[object Set]",Ps=e=>jt(e)==="[object Date]",ie=e=>typeof e=="function",ke=e=>typeof e=="string",vn=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Lo=e=>(he(e)||ie(e))&&ie(e.then)&&ie(e.catch),Po=Object.prototype.toString,jt=e=>Po.call(e),Ml=e=>jt(e).slice(8,-1),Vo=e=>jt(e)==="[object Object]",gs=e=>ke(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kt=ms(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),$r=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},El=/-\w/g,sn=$r(e=>e.replace(El,n=>n.slice(1).toUpperCase())),$l=/\B([A-Z])/g,tt=$r(e=>e.replace($l,"-$1").toLowerCase()),jo=$r(e=>e.charAt(0).toUpperCase()+e.slice(1)),Pr=$r(e=>e?`on${jo(e)}`:""),pn=(e,n)=>!Object.is(e,n),nr=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},Bo=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},wl=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Cl=e=>{const n=ke(e)?Number(e):NaN;return isNaN(n)?e:n};let Vs;const wr=()=>Vs||(Vs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function De(e){if(re(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],s=ke(r)?Al(r):De(r);if(s)for(const i in s)n[i]=s[i]}return n}else if(ke(e)||he(e))return e}const Tl=/;(?![^(]*\))/g,Il=/:([^]+)/,Sl=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Al(e){const n={};return e.replace(Sl,t=>t.startsWith("/*")?"":t).split(Tl).forEach(t=>{if(t){const r=t.split(Il);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function ae(e){let n="";if(ke(e))n=e;else if(re(e))for(let t=0;t<e.length;t++){const r=ae(e[t]);r&&(n+=r+" ")}else if(he(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Dl="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Nl=ms(Dl);function Ho(e){return!!e||e===""}function Ol(e,n,t){if(e.length!==n.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=at(e[s],n[s],t);return r}function js(e,n,t){if(e.size!==n.size)return!1;const r=Array.from(n),s=new Uint8Array(r.length);for(const i of e){let a=-1;for(let u=0;u<r.length;u++)if(!s[u]&&at(i,r[u],t)){a=u;break}if(a<0)return!1;s[a]=1}return!0}function Rl(e,n,t){let r=Vn(e),s=Vn(n);if(r||s||(r=ar(e),s=ar(n),r||s))return r&&s?js(e,n,t):!1;const i=Object.keys(e).length,a=Object.keys(n).length;if(i!==a)return!1;for(const u in e){const d=e.hasOwnProperty(u),f=n.hasOwnProperty(u);if(d&&!f||!d&&f||!at(e[u],n[u],t))return!1}return String(e)===String(n)}function Bs(e,n,t,r){t||(t=[new Map,new Map]);const[s,i]=t;if(s.has(e)||i.has(n))return s.get(e)===n&&i.get(n)===e;s.set(e,n),i.set(n,e);const a=r(e,n,t);return s.delete(e),i.delete(n),a}function at(e,n,t){if(e===n)return!0;let r=Ps(e),s=Ps(n);return r||s?r&&s?e.getTime()===n.getTime():!1:(r=vn(e),s=vn(n),r||s?e===n:(r=re(e),s=re(n),r||s?r&&s?Bs(e,n,t,Ol):!1:(r=he(e),s=he(n),r||s?!r||!s?!1:Bs(e,n,t,Rl):String(e)===String(n))))}const qo=e=>!!(e&&e.__v_isRef===!0),h=e=>ke(e)?e:e==null?"":re(e)||he(e)&&(e.toString===Po||!ie(e.toString))?qo(e)?h(e.value):JSON.stringify(e,Ko,2):String(e),Ko=(e,n)=>qo(n)?Ko(e,n.value):Vn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,s],i)=>(t[Vr(r,i)+" =>"]=s,t),{})}:ar(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Vr(t))}:vn(n)?Vr(n):he(n)&&!re(n)&&!Vo(n)?String(n):n,Vr=(e,n="")=>{var t;return vn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ae;class Fl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Ae&&(Ae.active?(this.parent=Ae,this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const s=this.scopes.slice();for(n=0,t=s.length;n<t;n++)s[n].resume()}const r=this.effects.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}}run(n){if(this._active){const t=Ae;try{return Ae=this,n()}finally{Ae=t}}}on(){++this._on===1&&(this.prevScope=Ae,Ae=this)}off(){if(this._on>0&&--this._on===0){if(Ae===this)Ae=this.prevScope;else{let n=Ae;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,r=s.length;t<r;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ll(){return Ae}let ye;const jr=new WeakSet;class Uo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ae&&(Ae.active?Ae.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,jr.has(this)&&(jr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Hs(this),Go(this);const n=ye,t=on;ye=this,on=!0;try{return this.fn()}finally{Yo(this),ye=n,on=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)ys(n);this.deps=this.depsTail=void 0,Hs(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?jr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xr(this)&&this.run()}get dirty(){return Xr(this)}}let Wo=0,xt,Mt;function zo(e,n=!1){if(e.flags|=8,n){e.next=Mt,Mt=e;return}e.next=xt,xt=e}function _s(){Wo++}function bs(){if(--Wo>0)return;if(Mt){let n=Mt;for(Mt=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;xt;){let n=xt;for(xt=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function Go(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Yo(e){let n,t=e.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ys(r),Pl(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=n,e.depsTail=t}function Xr(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Jo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Jo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Tt)||(e.globalVersion=Tt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Xr(e))))return;e.flags|=2;const n=e.dep,t=ye,r=on;ye=e,on=!0;try{Go(e);const s=e.fn(e._value);(n.version===0||pn(s,e._value))&&(e.flags|=128,e._value=s,n.version++)}catch(s){throw n.version++,s}finally{ye=t,on=r,Yo(e),e.flags&=-3}}function ys(e,n=!1){const{dep:t,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ys(i,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Pl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let on=!0;const Zo=[];function gn(){Zo.push(on),on=!1}function _n(){const e=Zo.pop();on=e===void 0?!0:e}function Hs(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=ye;ye=void 0;try{n()}finally{ye=t}}}let Tt=0;class Vl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ks{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ye||!on||ye===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ye)t=this.activeLink=new Vl(ye,this),ye.deps?(t.prevDep=ye.depsTail,ye.depsTail.nextDep=t,ye.depsTail=t):ye.deps=ye.depsTail=t,Qo(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ye.depsTail,t.nextDep=void 0,ye.depsTail.nextDep=t,ye.depsTail=t,ye.deps===t&&(ye.deps=r)}return t}trigger(n){this.version++,Tt++,this.notify(n)}notify(n){_s();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{bs()}}}function Qo(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)Qo(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const es=new WeakMap,Qn=Symbol(""),ns=Symbol(""),It=Symbol("");function Oe(e,n,t){if(on&&ye){let r=es.get(e);r||es.set(e,r=new Map);let s=r.get(t);s||(r.set(t,s=new ks),s.map=r,s.key=t),s.track()}}function Tn(e,n,t,r,s,i){const a=es.get(e);if(!a){Tt++;return}const u=d=>{d&&d.trigger()};if(_s(),n==="clear")a.forEach(u);else{const d=re(e),f=d&&gs(t);if(d&&t==="length"){const c=Number(r);a.forEach((v,m)=>{(m==="length"||m===It||!vn(m)&&m>=c)&&u(v)})}else switch((t!==void 0||a.has(void 0))&&u(a.get(t)),f&&u(a.get(It)),n){case"add":d?f&&u(a.get("length")):(u(a.get(Qn)),Vn(e)&&u(a.get(ns)));break;case"delete":d||(u(a.get(Qn)),Vn(e)&&u(a.get(ns)));break;case"set":Vn(e)&&u(a.get(Qn));break}}bs()}function st(e){const n=de(e);return n===e||(Oe(n,"iterate",It),Je(e))?n:bn(e)?jn(e)?n.map(t=>Hn(Ze(t))):n.map(Hn):n.map(Ze)}function Cr(e){return Oe(e=de(e),"iterate",It),e}function dn(e,n){return bn(e)?Hn(jn(e)?Ze(n):n):Ze(n)}const jl={__proto__:null,[Symbol.iterator](){return Br(this,Symbol.iterator,e=>dn(this,e))},concat(...e){return st(this).concat(...e.map(n=>re(n)?st(n):n))},entries(){return Br(this,"entries",e=>(e[1]=dn(this,e[1]),e))},every(e,n){return Mn(this,"every",e,n,void 0,arguments)},filter(e,n){return Mn(this,"filter",e,n,t=>t.map(r=>dn(this,r)),arguments)},find(e,n){return Mn(this,"find",e,n,t=>dn(this,t),arguments)},findIndex(e,n){return Mn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Mn(this,"findLast",e,n,t=>dn(this,t),arguments)},findLastIndex(e,n){return Mn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Mn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Hr(this,"includes",e)},indexOf(...e){return Hr(this,"indexOf",e)},join(e){return st(this).join(e)},lastIndexOf(...e){return Hr(this,"lastIndexOf",e)},map(e,n){return Mn(this,"map",e,n,void 0,arguments)},pop(){return ht(this,"pop")},push(...e){return ht(this,"push",e)},reduce(e,...n){return Ks(this,"reduce",e,n)},reduceRight(e,...n){return Ks(this,"reduceRight",e,n)},shift(){return ht(this,"shift")},some(e,n){return Mn(this,"some",e,n,void 0,arguments)},splice(...e){return ht(this,"splice",e)},toReversed(){return st(this).toReversed()},toSorted(e){return st(this).toSorted(e)},toSpliced(...e){return st(this).toSpliced(...e)},unshift(...e){return ht(this,"unshift",e)},values(){return Br(this,"values",e=>dn(this,e))}};function Br(e,n,t){const r=Cr(e),s=r[n],i=s.call(r);if(r!==e&&!Je(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const a=Object.create(Object.getPrototypeOf(i));return a.next=()=>qs(i.next(),t),s!==Xo[n]&&Object.defineProperties(a,{return:{get(){const u=i.return;return typeof u=="function"?u.bind(i):u}},throw:{get(){const u=i.throw;return typeof u=="function"?u.bind(i):u}}}),a}i._next=i.next,i.next=()=>qs(i._next(),t)}return i}function qs(e,n){return e.done||(e.value=n(e.value)),e}const Xo=Array.prototype;function Mn(e,n,t,r,s,i){const a=Cr(e),u=a!==e&&!Je(e),d=a[n];if(d!==Xo[n]){const v=d.apply(e,i);return u?Ze(v):v}let f=t;a!==e&&(u?f=function(v,m){return t.call(this,dn(e,v),m,e)}:t.length>2&&(f=function(v,m){return t.call(this,v,m,e)}));const c=d.call(a,f,r);return u&&s?s(c):c}function Ks(e,n,t,r){const s=Cr(e),i=s!==e&&!Je(e);let a=t,u=!1;s!==e&&(i?(u=r.length===0,a=function(f,c,v){return u&&(u=!1,f=dn(e,f)),t.call(this,f,dn(e,c),v,e)}):t.length>3&&(a=function(f,c,v){return t.call(this,f,c,v,e)}));const d=s[n](a,...r);return u?dn(e,d):d}function Hr(e,n,t){const r=de(e);Oe(r,"iterate",It);const s=r[n](...t);return(s===-1||s===!1)&&Es(t[0])?(t[0]=de(t[0]),r[n](...t)):s}function ht(e,n,t=[]){gn(),_s();const r=de(e)[n].apply(e,t);return bs(),_n(),r}const Bl=ms("__proto__,__v_isRef,__isVue"),ei=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(vn));function Hl(e){vn(e)||(e=String(e));const n=de(this);return Oe(n,"has",e),n.hasOwnProperty(e)}class ni{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Ql:oi:i?si:ri).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const a=re(n);if(!s){let d;if(a&&(d=jl[t]))return d;if(t==="hasOwnProperty")return Hl}const u=Reflect.get(n,t,Fe(n)?n:r);if((vn(t)?ei.has(t):Bl(t))||(s||Oe(n,"get",t),i))return u;if(Fe(u)){const d=a&&gs(t)?u:u.value;return s&&he(d)?rs(d):d}return he(u)?s?rs(u):ft(u):u}}class ti extends ni{constructor(n=!1){super(!1,n)}set(n,t,r,s){let i=n[t];const a=re(n)&&gs(t);if(!this._isShallow){const f=bn(i);if(!Je(r)&&!bn(r)&&(i=de(i),r=de(r)),!a&&Fe(i)&&!Fe(r))return f||(i.value=r),!0}const u=a?Number(t)<n.length:fe(n,t),d=Reflect.set(n,t,r,Fe(n)?n:s);return n===de(s)&&d&&(u?pn(r,i)&&Tn(n,"set",t,r):Tn(n,"add",t,r)),d}deleteProperty(n,t){const r=fe(n,t);n[t];const s=Reflect.deleteProperty(n,t);return s&&r&&Tn(n,"delete",t,void 0),s}has(n,t){const r=Reflect.has(n,t);return(!vn(t)||!ei.has(t))&&Oe(n,"has",t),r}ownKeys(n){return Oe(n,"iterate",re(n)?"length":Qn),Reflect.ownKeys(n)}}class ql extends ni{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Kl=new ti,Ul=new ql,Wl=new ti(!0);const ts=e=>e,Wt=e=>Reflect.getPrototypeOf(e);function zl(e,n,t){return function(...r){const s=this.__v_raw,i=de(s),a=Vn(i),u=e==="entries"||e===Symbol.iterator&&a,d=e==="keys"&&a,f=s[e](...r),c=t?ts:n?Hn:Ze;return!n&&Oe(i,"iterate",d?ns:Qn),Ce(Object.create(f),{next(){const{value:v,done:m}=f.next();return m?{value:v,done:m}:{value:u?[c(v[0]),c(v[1])]:c(v),done:m}}})}}function zt(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function Gl(e,n){const t={get(s){const i=this.__v_raw,a=de(i),u=de(s);e||(pn(s,u)&&Oe(a,"get",s),Oe(a,"get",u));const{has:d}=Wt(a),f=n?ts:e?Hn:Ze;if(d.call(a,s))return f(i.get(s));if(d.call(a,u))return f(i.get(u));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!e&&Oe(de(s),"iterate",Qn),s.size},has(s){const i=this.__v_raw,a=de(i),u=de(s);return e||(pn(s,u)&&Oe(a,"has",s),Oe(a,"has",u)),s===u?i.has(s):i.has(s)||i.has(u)},forEach(s,i){const a=this,u=a.__v_raw,d=de(u),f=n?ts:e?Hn:Ze;return!e&&Oe(d,"iterate",Qn),u.forEach((c,v)=>s.call(i,f(c),f(v),a))}};return Ce(t,e?{add:zt("add"),set:zt("set"),delete:zt("delete"),clear:zt("clear")}:{add(s){const i=de(this),a=Wt(i),u=de(s),d=!n&&!Je(s)&&!bn(s)?u:s;return a.has.call(i,d)||pn(s,d)&&a.has.call(i,s)||pn(u,d)&&a.has.call(i,u)||(i.add(d),Tn(i,"add",d,d)),this},set(s,i){!n&&!Je(i)&&!bn(i)&&(i=de(i));const a=de(this),{has:u,get:d}=Wt(a);let f=u.call(a,s);f||(s=de(s),f=u.call(a,s));const c=d.call(a,s);return a.set(s,i),f?pn(i,c)&&Tn(a,"set",s,i):Tn(a,"add",s,i),this},delete(s){const i=de(this),{has:a,get:u}=Wt(i);let d=a.call(i,s);d||(s=de(s),d=a.call(i,s)),u&&u.call(i,s);const f=i.delete(s);return d&&Tn(i,"delete",s,void 0),f},clear(){const s=de(this),i=s.size!==0,a=s.clear();return i&&Tn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=zl(s,e,n)}),t}function xs(e,n){const t=Gl(e,n);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?n:s==="__v_raw"?r:Reflect.get(fe(t,s)&&s in r?t:r,s,i)}const Yl={get:xs(!1,!1)},Jl={get:xs(!1,!0)},Zl={get:xs(!0,!1)};const ri=new WeakMap,si=new WeakMap,oi=new WeakMap,Ql=new WeakMap;function Xl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ft(e){return bn(e)?e:Ms(e,!1,Kl,Yl,ri)}function ea(e){return Ms(e,!1,Wl,Jl,si)}function rs(e){return Ms(e,!0,Ul,Zl,oi)}function Ms(e,n,t,r,s){if(!he(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const a=Xl(Ml(e));if(a===0)return e;const u=new Proxy(e,a===2?r:t);return s.set(e,u),u}function jn(e){return bn(e)?jn(e.__v_raw):!!(e&&e.__v_isReactive)}function bn(e){return!!(e&&e.__v_isReadonly)}function Je(e){return!!(e&&e.__v_isShallow)}function Es(e){return e?!!e.__v_raw:!1}function de(e){const n=e&&e.__v_raw;return n?de(n):e}function na(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&Bo(e,"__v_skip",!0),e}const Ze=e=>he(e)?ft(e):e,Hn=e=>he(e)?rs(e):e;function Fe(e){return e?e.__v_isRef===!0:!1}function ce(e){return ta(e,!1)}function ta(e,n){return Fe(e)?e:new ra(e,n)}class ra{constructor(n,t){this.dep=new ks,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:de(n),this._value=t?n:Ze(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Je(n)||bn(n);n=r?n:de(n),pn(n,t)&&(this._rawValue=n,this._value=r?n:Ze(n),this.dep.trigger())}}function M(e){return Fe(e)?e.value:e}const sa={get:(e,n,t)=>n==="__v_raw"?e:M(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const s=e[n];return Fe(s)&&!Fe(t)?(s.value=t,!0):Reflect.set(e,n,t,r)}};function ii(e){return jn(e)?e:new Proxy(e,sa)}class oa{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new ks(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Tt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return zo(this,!0),!0}get value(){const n=this.dep.track();return Jo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function ia(e,n,t=!1){let r,s;return ie(e)?r=e:(r=e.get,s=e.set),new oa(r,s,t)}const Gt={},cr=new WeakMap;let Gn;function la(e,n=!1,t=Gn){if(t){let r=cr.get(t);r||cr.set(t,r=[]),r.push(e)}}function aa(e,n,t=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:u,call:d}=t,f=C=>s?C:Je(C)||s===!1||s===0?In(C,1):In(C);let c,v,m,y,x=!1,k=!1;if(Fe(e)?(v=()=>e.value,x=Je(e)):jn(e)?(v=()=>f(e),x=!0):re(e)?(k=!0,x=e.some(C=>jn(C)||Je(C)),v=()=>e.map(C=>{if(Fe(C))return C.value;if(jn(C))return f(C);if(ie(C))return d?d(C,2):C()})):ie(e)?n?v=d?()=>d(e,2):e:v=()=>{if(m){gn();try{m()}finally{_n()}}const C=Gn;Gn=c;try{return d?d(e,3,[y]):e(y)}finally{Gn=C}}:v=mn,n&&s){const C=v,I=s===!0?1/0:s;v=()=>In(C(),I)}const O=Ll(),q=()=>{c.stop(),O&&O.active&&vs(O.effects,c)};if(i&&n){const C=n;n=(...I)=>{try{return C(...I)}finally{q()}}}let K=k?new Array(e.length).fill(Gt):Gt;const B=C=>{if(!(!(c.flags&1)||!c.dirty&&!C))if(n){const I=c.run();if(C||s||x||(k?I.some((U,ee)=>pn(U,K[ee])):pn(I,K))){const U=Gn;gn();try{m&&m(),Gn=c;const ee=[I,K===Gt?void 0:k&&K[0]===Gt?[]:K,y];K=I,d?d(n,3,ee):n(...ee)}finally{Gn=U,_n()}}}else c.run()};return u&&u(B),c=new Uo(v),c.scheduler=a?()=>a(B,!1):B,y=C=>la(C,!1,c),m=c.onStop=()=>{const C=cr.get(c);if(C){if(d)d(C,4);else for(const I of C)I();cr.delete(c)}},n?r?B(!0):K=c.run():a?a(B.bind(null,!0),!0):c.run(),q.pause=c.pause.bind(c),q.resume=c.resume.bind(c),q.stop=q,q}function In(e,n=1/0,t){if(n<=0||!he(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Fe(e))In(e.value,n,t);else if(re(e))for(let r=0;r<e.length;r++)In(e[r],n,t);else if(ar(e)||Vn(e))e.forEach(r=>{In(r,n,t)});else if(Vo(e)){for(const r in e)In(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&In(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bt(e,n,t,r){try{return r?e(...r):e()}catch(s){Tr(s,n,t)}}function Qe(e,n,t,r){if(ie(e)){const s=Bt(e,n,t,r);return s&&Lo(s)&&s.catch(i=>{Tr(i,n,t,void 0,!0)}),s}if(re(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Qe(e[i],n,t,r));return s}}function Tr(e,n,t,r=!0,s=!1){const i=n?n.vnode:null,{errorHandler:a,throwUnhandledErrorInProduction:u}=n&&n.appContext.config||be;if(n){let d=n.parent;const f=n.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;d;){const v=d.ec;if(v&&!d.isUnmounted&&(!s||d.scope.active)){for(let m=0;m<v.length;m++)if(v[m](e,f,c)===!1)return}d=d.parent}if(a){gn(),Bt(a,null,10,[e,f,c]),_n();return}}ca(e,t,i,r,u)}function ca(e,n,t,r=!0,s=!1){if(s)throw e;console.error(e)}const Ve=[];let tn=-1;const fn=[];let On=null,ot=0;const li=Promise.resolve();let ur=null;function ua(e){const n=ur||li;return e?n.then(this?e.bind(this):e):n}function da(e){let n=tn+1,t=Ve.length;for(;n<t;){const r=n+t>>>1,s=Ve[r],i=St(s);i<e||i===e&&s.flags&2?n=r+1:t=r}return n}function Ir(e){if(!(e.flags&1)){const n=St(e),t=Ve[Ve.length-1];!t||!(e.flags&2)&&n>=St(t)?Ve.push(e):Ve.splice(da(n),0,e),e.flags|=1,ai()}}function ai(){ur||(ur=li.then(di))}function fa(e){if(!re(e))On&&e.id===-1?On.splice(ot+1,0,e):e.flags&1||(fn.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)fn.push(e[n]);ai()}function ci(e,n,t,r=tn+1){for(;r<Ve.length;r++){const s=Ve[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||n!==void 0&&!(s.id>=n))continue;Ve.splice(r,1),r=e?r-1:tn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function ui(e,n,t=0){if(fn.length){let r=fn,s=0;if(n){r=[];for(let a=0;a<fn.length;a++){const u=fn[a];(u.i!==void 0?!u.i||u.i.uid<t:n.has(u))?fn[s++]=u:r.push(u)}}const i=[...new Set(r)].sort((a,u)=>St(a)-St(u));if(fn.length=s,On){for(let a=0;a<i.length;a++)On.push(i[a]);return}for(On=i,ot=0;ot<On.length;ot++){const a=On[ot];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}On=null,ot=0}}let qr=!1;function ha(e,n){if(qr){e();return}const t=n===void 0?void 0:new Set(fn);e(),qr=!0;try{ci(void 0,n),ui(void 0,t,n)}finally{qr=!1}}const St=e=>e.id==null?e.flags&2?-1:1/0:e.id;function di(e){try{for(tn=0;tn<Ve.length;tn++){const n=Ve[tn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Bt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;tn<Ve.length;tn++){const n=Ve[tn];n&&(n.flags&=-2)}tn=-1,Ve.length=0,ui(),ur=null,(Ve.length||fn.length)&&di()}}let Ge=null,fi=null;function dr(e){const n=Ge;return Ge=e,fi=e&&e.type.__scopeId||null,n}function hi(e,n=Ge,t){if(!n||e._n)return e;const r=(...s)=>{r._d&&mr(-1);const i=dr(n),a=et.length;let u;try{u=e(...s)}finally{for(let d=et.length;d>a;d--)Bi();dr(i),r._d&&mr(1)}return u};return r._n=!0,r._c=!0,r._d=!0,r}function pa(e,n){if(Ge===null)return e;const t=Or(Ge),r=e.dirs||(e.dirs=[]);for(let s=0;s<n.length;s++){let[i,a,u,d=be]=n[s];i&&(ie(i)&&(i={mounted:i,updated:i}),i.deep&&In(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:u,modifiers:d}))}return e}function Kn(e,n,t,r){let s=e;if(r==="beforeMount")e._mount=e;else if(r==="beforeUpdate"){const u=n&&n._mount;u&&(u._latest=e,e._mount=u)}else if(r==="mounted"){const u=e._latest;e._mount=e._latest=void 0,u&&(s=u,u._mount=void 0)}const i=s.dirs,a=n&&n.dirs;for(let u=0;u<i.length;u++){let d=i[u];a?d.oldValue=a[u].value:r==="mounted"&&d.oldValue!==void 0&&(d=Ce({},d,{oldValue:void 0}));let f=d.dir[r];f&&(gn(),Qe(f,t,8,[e.el,d,s,n]),_n())}}function ma(e,n){if(je){let t=je.provides;const r=je.parent&&je.parent.provides;r===t&&(t=je.provides=Object.create(r)),t[e]=n}}function tr(e,n,t=!1){const r=Ui();if(r||it){let s=it?it._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return t&&ie(n)?n.call(r&&r.proxy):n}}const va=Symbol.for("v-scx"),ga=()=>tr(va);function Bn(e,n,t){return pi(e,n,t)}function pi(e,n,t=be){const{immediate:r,deep:s,flush:i,once:a}=t,u=Ce({},t),d=n&&r||!n&&i!=="post";let f;if(Ft){if(i==="sync"){const y=ga();f=y.__watcherHandles||(y.__watcherHandles=[])}else if(!d){const y=()=>{};return y.stop=mn,y.resume=mn,y.pause=mn,y}}const c=je;u.call=(y,x,k)=>Qe(y,c,x,k);let v=!1;i==="post"?u.scheduler=y=>{y.i=c,Pe(y,c&&c.suspense)}:i!=="sync"&&(v=!0,u.scheduler=(y,x)=>{x?y():Ir(y)}),u.augmentJob=y=>{n&&(y.flags|=4),v&&(y.flags|=2,c&&(y.id=c.uid,y.i=c))};const m=aa(e,n,u);return Ft&&(f?f.push(m):d&&m()),m}function _a(e,n,t){const r=this.proxy,s=ke(e)?e.includes(".")?mi(r,e):()=>r[e]:e.bind(r,r);let i;ie(n)?i=n:(i=n.handler,t=n);const a=Ht(this),u=pi(s,i.bind(r),t);return a(),u}function mi(e,n){const t=n.split(".");return()=>{let r=e;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const ba=Symbol("_vte"),Sr=e=>e.__isTeleport,ze=Symbol("_leaveCb"),pt=Symbol("_enterCb");function ya(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $s(()=>{e.isMounted=!0}),xi(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],vi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},ka={name:"BaseTransition",props:vi,setup(e,{slots:n}){const t=Ui(),r=ya();return()=>{const s=n.default&&bi(n.default(),!0),i=s&&s.length?gi(s):t.subTree?z():void 0;if(!i)return;const a=de(e),{mode:u}=a;if(r.isLeaving)return Kr(i);const d=fr(i);if(!d)return Kr(i);const f=ss(d,a,r,t);d.type!==Re&&Xn(d,f);let c=t.subTree&&fr(t.subTree);if(c&&c.type!==Re&&!Yn(c,d)&&At(t.subTree)){let v=ss(c,a,r,t);if(Xn(c,v),u==="out-in"&&d.type!==Re)return r.isLeaving=!0,v.afterLeave=()=>{if(r.isLeaving=!1,!(t.job.flags&8))if(t.effect.flags&2){const m=()=>{t.job.flags&8||t.update()};m.i=t,Ir(m)}else t.update();delete v.afterLeave,c=void 0},Kr(i);u==="in-out"&&d.type!==Re?v.delayLeave=(m,y,x)=>{const k=_i(r,c);k[String(c.key)]=c,m[ze]=()=>{y(),m[ze]=void 0,delete f.delayedLeave,c=void 0},f.delayedLeave=()=>{x(),delete f.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function gi(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Re){n=t;break}}return n}const xa=ka;function _i(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function ss(e,n,t,r){const{appear:s,mode:i,persisted:a=!1,onBeforeEnter:u,onEnter:d,onAfterEnter:f,onEnterCancelled:c,onBeforeLeave:v,onLeave:m,onAfterLeave:y,onLeaveCancelled:x,onBeforeAppear:k,onAppear:O,onAfterAppear:q,onAppearCancelled:K}=n,B=String(e.key),C=_i(t,e),I=(P,Q)=>{P&&Qe(P,r,9,Q)},U=(P,Q)=>{const J=Q[1];I(P,Q),re(P)?P.every(Y=>Y.length<=1)&&J():P.length<=1&&J()},ee={mode:i,persisted:a,beforeEnter(P){let Q=u;if(!t.isMounted)if(s)Q=k||u;else return;P[ze]&&P[ze](!0);const J=C[B];if(J&&Yn(e,J)){let Y=J.el[ze];if(!Y){const N=At(J);Y=N&&N.el[ze]}Y&&Y()}I(Q,[P])},enter(P){if(C[B]===e)return;let Q=d,J=f,Y=c;if(!t.isMounted)if(s)Q=O||d,J=q||f,Y=K||c;else return;let N=!1;P[pt]=F=>{N||(N=!0,F?I(Y,[P]):I(J,[P]),ee.delayedLeave&&ee.delayedLeave(),P[pt]=void 0)};const w=P[pt].bind(null,!1);Q?U(Q,[P,w]):w()},leave(P,Q){const J=String(e.key);if(P[pt]&&P[pt](!0),t.isUnmounting)return Q();I(v,[P]);let Y=!1;P[ze]=w=>{Y||(Y=!0,Q(),w?I(x,[P]):I(y,[P]),P[ze]=void 0,C[J]===e&&delete C[J])};const N=P[ze].bind(null,!1);C[J]=e,m?U(m,[P,N]):N()},clone(P){const Q=ss(P,n,t,r);return Q.afterLeave=()=>{ee.afterLeave&&ee.afterLeave()},Q.delayLeave=(J,Y,N)=>{ee.delayLeave?ee.delayLeave(J,Y,N):N()},Q.delayedLeave=()=>{ee.delayedLeave&&ee.delayedLeave()},Q}};return ee}function Kr(e){if(Ar(e))return e=qn(e),e.children=null,e}function fr(e){if(!Ar(e))return Sr(e.type)&&e.children?gi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ie(t.default))return t.default()}}function Xn(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;Xn(Sr(t.type)&&fr(t)||t,n)}else if(e.shapeFlag&128){const t=e.suspense;if(t){const r=t.isHydrating?t.pendingBranch:t.activeBranch;r&&Xn(r,n.clone(r))}else e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)}else if(e.transition=n,e.type===W&&re(e.children)){const t=Ti(e.children,!1);t&&Xn(t,n)}}function bi(e,n=!1,t){let r=[],s=0;for(let i=0;i<e.length;i++){let a=e[i];const u=t==null?a.key:String(t)+String(a.key!=null?a.key:i);a.type===W?(a.patchFlag&128&&s++,r=r.concat(bi(a.children,n,u))):(n||a.type!==Re)&&r.push(u!=null?qn(a,{key:u}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function At(e){if(e.component)return At(e.component.subTree);if(e.type===W){const n=re(e.children)&&Ti(e.children,!1);return n?At(n):void 0}if(e.type!==Re)return e}function yi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Us(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const hr=new WeakMap;function Et(e,n,t,r,s=!1){if(re(e)){e.forEach((k,O)=>Et(k,n&&(re(n)?n[O]:n),t,r,s));return}if($t(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Et(e,n,t,r.component.subTree);return}const i=r.shapeFlag&4?Or(r.component):r.el,a=s?null:i,{i:u,r:d}=e,f=n&&n.r,c=u.refs===be?u.refs={}:u.refs,v=u.setupState,m=de(v),y=v===be?Fo:k=>Us(c,k)?!1:fe(m,k),x=(k,O)=>!(O&&Us(c,O));if(f!=null&&f!==d){if(Ws(n),ke(f))c[f]=null,y(f)&&(v[f]=null);else if(Fe(f)){const k=n;x(f,k.k)&&(f.value=null),k.k&&(c[k.k]=null)}}if(ie(d))Bt(d,u,12,[a,c]);else{const k=ke(d),O=Fe(d);if(k||O){const q=()=>{if(e.f){const K=k?y(d)?v[d]:c[d]:x()||!e.k?d.value:c[e.k];if(s)re(K)&&vs(K,i);else if(re(K))K.includes(i)||K.push(i);else if(k)c[d]=[i],y(d)&&(v[d]=c[d]);else{const B=[i];x(d,e.k)&&(d.value=B),e.k&&(c[e.k]=B)}}else k?(c[d]=a,y(d)&&(v[d]=a)):O&&(x(d,e.k)&&(d.value=a),e.k&&(c[e.k]=a))};if(a){const K=()=>{q(),hr.delete(e)};K.id=-1,hr.set(e,K),Pe(K,t)}else Ws(e),q()}}}function Ws(e){const n=hr.get(e);n&&(n.flags|=8,hr.delete(e))}wr().requestIdleCallback;wr().cancelIdleCallback;const $t=e=>!!e.type.__asyncLoader,Ar=e=>e.type.__isKeepAlive;function Ma(e,n){ki(e,"a",n)}function Ea(e,n){ki(e,"da",n)}function ki(e,n,t=je){const r=e.__wdc||(e.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Dt(n,r,t),t){let s=t.parent;for(;s&&s.parent;)Ar(s.parent.vnode)&&$a(r,n,t,s),s=s.parent}}function $a(e,n,t,r){const s=Dt(n,e,r,!0),i=Dt("um",()=>vs(r[n],s),t);i.flags=16}function Dt(e,n,t=je,r=!1){if(t){const s=t[e]||(t[e]=[]),i=n.__weh||(n.__weh=(...a)=>{gn();const u=Ht(t),d=Qe(n,t,e,a);return u(),_n(),d});return r?s.unshift(i):s.push(i),i}}const An=e=>(n,t=je)=>{(!Ft||e==="sp")&&Dt(e,(...r)=>n(...r),t)},wa=An("bm"),$s=An("m"),Ca=An("bu"),Ta=An("u"),xi=An("bum"),Mi=An("um"),Ia=An("sp"),Sa=An("rtg"),Aa=An("rtc");function Da(e,n=je){Dt("ec",e,n)}const Na=Symbol.for("v-ndc");function te(e,n,t,r){let s;const i=t,a=re(e);if(a||ke(e)){const u=a&&jn(e);let d=!1,f=!1;u&&(d=!Je(e),f=bn(e),e=Cr(e)),s=new Array(e.length);for(let c=0,v=e.length;c<v;c++)s[c]=n(d?f?Hn(Ze(e[c])):Ze(e[c]):e[c],c,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let u=0;u<e;u++)s[u]=n(u+1,u,void 0,i)}else if(he(e))if(e[Symbol.iterator])s=Array.from(e,(u,d)=>n(u,d,void 0,i));else{const u=Object.keys(e);s=new Array(u.length);for(let d=0,f=u.length;d<f;d++){const c=u[d];s[d]=n(e[c],c,d,i)}}else s=[];return s}const os=e=>e?Wi(e)?Or(e):os(e.parent):null,wt=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>os(e.parent),$root:e=>os(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>$i(e),$forceUpdate:e=>e.f||(e.f=()=>{Ir(e.update)}),$nextTick:e=>e.n||(e.n=ua.bind(e.proxy)),$watch:e=>_a.bind(e)}),Ur=(e,n)=>e!==be&&!e.__isScriptSetup&&fe(e,n),Oa={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:u,appContext:d}=e;if(n[0]!=="$"){const m=a[n];if(m!==void 0)switch(m){case 1:return r[n];case 2:return s[n];case 4:return t[n];case 3:return i[n]}else{if(Ur(r,n))return a[n]=1,r[n];if(s!==be&&fe(s,n))return a[n]=2,s[n];if(fe(i,n))return a[n]=3,i[n];if(t!==be&&fe(t,n))return a[n]=4,t[n];is&&(a[n]=0)}}const f=wt[n];let c,v;if(f)return n==="$attrs"&&Oe(e.attrs,"get",""),f(e);if((c=u.__cssModules)&&(c=c[n]))return c;if(t!==be&&fe(t,n))return a[n]=4,t[n];if(v=d.config.globalProperties,fe(v,n))return v[n]},set({_:e},n,t){const{data:r,setupState:s,ctx:i}=e;return Ur(s,n)?(s[n]=t,!0):r!==be&&fe(r,n)?(r[n]=t,!0):fe(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(i[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:s,props:i,type:a}},u){let d;return!!(t[u]||e!==be&&u[0]!=="$"&&fe(e,u)||Ur(n,u)||fe(i,u)||fe(r,u)||fe(wt,u)||fe(s.config.globalProperties,u)||(d=a.__cssModules)&&d[u])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:fe(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function zs(e){return re(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let is=!0;function Ra(e){const n=$i(e),t=e.proxy,r=e.ctx;is=!1,n.beforeCreate&&Gs(n.beforeCreate,e,"bc");const{data:s,computed:i,methods:a,watch:u,provide:d,inject:f,created:c,beforeMount:v,mounted:m,beforeUpdate:y,updated:x,activated:k,deactivated:O,beforeDestroy:q,beforeUnmount:K,destroyed:B,unmounted:C,render:I,renderTracked:U,renderTriggered:ee,errorCaptured:P,serverPrefetch:Q,expose:J,inheritAttrs:Y,components:N,directives:w,filters:F}=n;if(f&&Fa(f,r,null),a)for(const le in a){const pe=a[le];ie(pe)&&(r[le]=pe.bind(t))}if(s){const le=s.call(t,t);he(le)&&(e.data=ft(le))}if(is=!0,i)for(const le in i){const pe=i[le],Xe=ie(pe)?pe.bind(t,t):ie(pe.get)?pe.get.bind(t,t):mn,rt=!ie(pe)&&ie(pe.set)?pe.set.bind(t):mn,kn=G({get:Xe,set:rt});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>kn.value,set:He=>kn.value=He})}if(u)for(const le in u)Ei(u[le],r,t,le);if(d){const le=ie(d)?d.call(t):d;Reflect.ownKeys(le).forEach(pe=>{ma(pe,le[pe])})}c&&Gs(c,e,"c");function R(le,pe){re(pe)?pe.forEach(Xe=>le(Xe.bind(t))):pe&&le(pe.bind(t))}if(R(wa,v),R($s,m),R(Ca,y),R(Ta,x),R(Ma,k),R(Ea,O),R(Da,P),R(Aa,U),R(Sa,ee),R(xi,K),R(Mi,C),R(Ia,Q),re(J))if(J.length){const le=e.exposed||(e.exposed={});J.forEach(pe=>{Object.defineProperty(le,pe,{get:()=>t[pe],set:Xe=>t[pe]=Xe,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===mn&&(e.render=I),Y!=null&&(e.inheritAttrs=Y),N&&(e.components=N),w&&(e.directives=w),Q&&yi(e)}function Fa(e,n,t=mn){re(e)&&(e=ls(e));for(const r in e){const s=e[r];let i;he(s)?"default"in s?i=tr(s.from||r,s.default,!0):i=tr(s.from||r):i=tr(s),Fe(i)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):n[r]=i}}function Gs(e,n,t){Qe(re(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Ei(e,n,t,r){let s=r.includes(".")?mi(t,r):()=>t[r];if(ke(e)){const i=n[e];ie(i)&&Bn(s,i)}else if(ie(e))Bn(s,e.bind(t));else if(he(e))if(re(e))e.forEach(i=>Ei(i,n,t,r));else{const i=ie(e.handler)?e.handler.bind(t):n[e.handler];ie(i)&&Bn(s,i,e)}}function $i(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=e.appContext,u=i.get(n);let d;return u?d=u:!s.length&&!t&&!r?d=n:(d={},s.length&&s.forEach(f=>pr(d,f,a,!0)),pr(d,n,a)),he(n)&&i.set(n,d),d}function pr(e,n,t,r=!1){const{mixins:s,extends:i}=n;i&&pr(e,i,t,!0),s&&s.forEach(a=>pr(e,a,t,!0));for(const a in n)if(!(r&&a==="expose")){const u=La[a]||t&&t[a];e[a]=u?u(e[a],n[a]):n[a]}return e}const La={data:Ys,props:Js,emits:Js,methods:vt,computed:vt,beforeCreate:Le,created:Le,beforeMount:Le,mounted:Le,beforeUpdate:Le,updated:Le,beforeDestroy:Le,beforeUnmount:Le,destroyed:Le,unmounted:Le,activated:Le,deactivated:Le,errorCaptured:Le,serverPrefetch:Le,components:vt,directives:vt,watch:Va,provide:Ys,inject:Pa};function Ys(e,n){return n?e?function(){return Ce(ie(e)?e.call(this,this):e,ie(n)?n.call(this,this):n)}:n:e}function Pa(e,n){return vt(ls(e),ls(n))}function ls(e){if(re(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Le(e,n){return e?[...new Set([].concat(e,n))]:n}function vt(e,n){return e?Ce(Object.create(null),e,n):n}function Js(e,n){return e?re(e)&&re(n)?[...new Set([...e,...n])]:Ce(Object.create(null),zs(e),zs(n??{})):n}function Va(e,n){if(!e)return n;if(!n)return e;const t=Ce(Object.create(null),e);for(const r in n)t[r]=Le(e[r],n[r]);return t}function wi(){return{app:null,config:{isNativeTag:Fo,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ja=0;function Ba(e,n){return function(r,s=null){ie(r)||(r=Ce({},r)),s!=null&&!he(s)&&(s=null);const i=wi(),a=new WeakSet,u=[];let d=!1;const f=i.app={_uid:ja++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:bc,get config(){return i.config},set config(c){},use(c,...v){return a.has(c)||(c&&ie(c.install)?(a.add(c),c.install(f,...v)):ie(c)&&(a.add(c),c(f,...v))),f},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),f},component(c,v){return v?(i.components[c]=v,f):i.components[c]},directive(c,v){return v?(i.directives[c]=v,f):i.directives[c]},mount(c,v,m){if(!d){const y=f._ceVNode||Ne(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(y,c,m),d=!0,f._container=c,c.__vue_app__=f,Or(y.component)}},onUnmount(c){u.push(c)},unmount(){d&&(Qe(u,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(c,v){return i.provides[c]=v,f},runWithContext(c){const v=it;it=f;try{return c()}finally{it=v}}};return f}}let it=null;const Ha=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${sn(n)}Modifiers`]||e[`${tt(n)}Modifiers`];function qa(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||be;let s=t;const i=n.startsWith("update:"),a=i&&Ha(r,n.slice(7));a&&(a.trim&&(s=t.map(c=>ke(c)?c.trim():c)),a.number&&(s=s.map(wl)));let u,d=r[u=Pr(n)]||r[u=Pr(sn(n))];!d&&i&&(d=r[u=Pr(tt(n))]),d&&Qe(d,e,6,s);const f=r[u+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[u])return;e.emitted[u]=!0,Qe(f,e,6,s)}}const Ka=new WeakMap;function Ci(e,n,t=!1){const r=t?Ka:n.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let a={},u=!1;if(!ie(e)){const d=f=>{const c=Ci(f,n,!0);c&&(u=!0,Ce(a,c))};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!i&&!u?(he(e)&&r.set(e,null),null):(re(i)?i.forEach(d=>a[d]=null):Ce(a,i),he(e)&&r.set(e,a),a)}function Dr(e,n){return!e||!Mr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),fe(e,n[0].toLowerCase()+n.slice(1))||fe(e,tt(n))||fe(e,n))}function Zs(e){const{type:n,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:u,emit:d,render:f,renderCache:c,props:v,data:m,setupState:y,ctx:x,inheritAttrs:k}=e,O=dr(e);let q,K;try{if(t.shapeFlag&4){const C=s||r,I=C;q=hn(f.call(I,C,c,v,y,m,x)),K=u}else{const C=n;q=hn(C.length>1?C(v,{attrs:u,slots:a,emit:d}):C(v,null)),K=n.props?u:Ua(u)}}catch(C){et.length=0,Tr(C,e,1),q=Ne(Re)}let B=q;if(K&&k!==!1){const C=Object.keys(K),{shapeFlag:I}=B;C.length&&I&7&&(i&&C.some(Er)&&(K=Wa(K,i)),B=qn(B,K,!1,!0))}if(t.dirs&&(B=qn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(t.dirs):t.dirs),t.transition){const C=Sr(B.type)&&fr(B)||B;Xn(C,t.transition)}return q=B,dr(O),q}function Ti(e,n=!0){let t;for(let r=0;r<e.length;r++){const s=e[r];if(Ot(s)){if(s.type!==Re||s.children==="v-if"){if(t)return;t=s}}else return}return t}const Ua=e=>{let n;for(const t in e)(t==="class"||t==="style"||Mr(t))&&((n||(n={}))[t]=e[t]);return n},Wa=(e,n)=>{const t={};for(const r in e)(!Er(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function za(e,n,t){const{props:r,children:s,component:i}=e,{props:a,children:u,patchFlag:d}=n,f=i.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&d>=0){if(d&1024)return!0;if(d&16)return r?Qs(r,a,f):!!a;if(d&8){const c=n.dynamicProps;for(let v=0;v<c.length;v++){const m=c[v];if(Ii(a,r,m)&&!Dr(f,m))return!0}}}else return(s||u)&&(!u||!u.$stable)?!0:r===a?!1:r?a?Qs(r,a,f):!0:!!a;return!1}function Qs(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!fe(e,i)||Ii(n,e,i)&&!Dr(t,i))return!0}return!1}function Ii(e,n,t){const r=e[t],s=n[t];return t==="style"&&he(r)&&he(s)?!at(r,s):r!==s}function Ga({vnode:e,parent:n,suspense:t},r){for(;n;){const s=n.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=n.vnode).el=r,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=r)}const Si={},Ai=()=>Object.create(Si),Di=e=>Object.getPrototypeOf(e)===Si;function Ya(e,n,t,r=!1){const s={},i=Ai();e.propsDefaults=Object.create(null),Ni(e,n,s,i);for(const a in e.propsOptions[0])a in s||(s[a]=void 0);t?e.props=r?s:ea(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function Ja(e,n,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=e,u=de(s),[d]=e.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const c=e.vnode.dynamicProps;for(let v=0;v<c.length;v++){let m=c[v];if(Dr(e.emitsOptions,m))continue;const y=n[m];if(d)if(fe(i,m))y!==i[m]&&(i[m]=y,f=!0);else{const x=sn(m);s[x]=as(d,u,x,y,e,!1)}else y!==i[m]&&(i[m]=y,f=!0)}}}else{Ni(e,n,s,i)&&(f=!0);let c;for(const v in u)(!n||!fe(n,v)&&((c=tt(v))===v||!fe(n,c)))&&(d?t&&(t[v]!==void 0||t[c]!==void 0)&&(s[v]=as(d,u,v,void 0,e,!0)):delete s[v]);if(i!==u)for(const v in i)(!n||!fe(n,v))&&(delete i[v],f=!0)}f&&Tn(e.attrs,"set","")}function Ni(e,n,t,r){const[s,i]=e.propsOptions;let a=!1,u;if(n)for(let d in n){if(kt(d))continue;const f=n[d];let c;s&&fe(s,c=sn(d))?!i||!i.includes(c)?t[c]=f:(u||(u={}))[c]=f:Dr(e.emitsOptions,d)||(!(d in r)||f!==r[d])&&(r[d]=f,a=!0)}if(i){const d=de(t),f=u||be;for(let c=0;c<i.length;c++){const v=i[c];t[v]=as(s,d,v,f[v],e,!fe(f,v))}}return a}function as(e,n,t,r,s,i){const a=e[t];if(a!=null){const u=fe(a,"default");if(u&&r===void 0){const d=a.default;if(a.type!==Function&&!a.skipFactory&&ie(d)){const{propsDefaults:f}=s;if(t in f)r=f[t];else{const c=Ht(s);r=f[t]=d.call(null,n),c()}}else r=d;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!u?r=!1:a[1]&&(r===""||r===tt(t))&&(r=!0))}return r}const Za=new WeakMap;function Oi(e,n,t=!1){const r=t?Za:n.propsCache,s=r.get(e);if(s)return s;const i=e.props,a={},u=[];let d=!1;if(!ie(e)){const c=v=>{d=!0;const[m,y]=Oi(v,n,!0);Ce(a,m),y&&u.push(...y)};!t&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!d)return he(e)&&r.set(e,Jn),Jn;if(re(i))for(let c=0;c<i.length;c++){const v=sn(i[c]);Xs(v)&&(a[v]=be)}else if(i)for(const c in i){const v=sn(c);if(Xs(v)){const m=i[c],y=a[v]=re(m)||ie(m)?{type:m}:Ce({},m),x=y.type;let k=!1,O=!0;if(re(x))for(let q=0;q<x.length;++q){const K=x[q],B=ie(K)&&K.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(O=!1)}else k=ie(x)&&x.name==="Boolean";y[0]=k,y[1]=O,(k||fe(y,"default"))&&u.push(v)}}const f=[a,u];return he(e)&&r.set(e,f),f}function Xs(e){return e[0]!=="$"&&!kt(e)}const ws=e=>e==="_"||e==="_ctx"||e==="$stable",Cs=e=>re(e)?e.map(hn):[hn(e)],Qa=(e,n,t)=>{if(n._n)return n;const r=hi((...s)=>Cs(n(...s)),t);return r._c=!1,r},Ri=(e,n,t)=>{const r=e._ctx;for(const s in e){if(ws(s))continue;const i=e[s];if(ie(i))n[s]=Qa(s,i,r);else if(i!=null){const a=Cs(i);n[s]=()=>a}}},Fi=(e,n)=>{const t=Cs(n);e.slots.default=()=>t},Li=(e,n,t)=>{for(const r in n)(t||!ws(r))&&(e[r]=n[r])},Xa=(e,n,t)=>{const r=e.slots=Ai();if(e.vnode.shapeFlag&32){const s=n._;s?(Li(r,n,t),t&&Bo(r,"_",s,!0)):Ri(n,r)}else n&&Fi(e,n)},ec=(e,n,t)=>{const{vnode:r,slots:s}=e;let i=!0,a=be;if(r.shapeFlag&32){const u=n._;u?t&&u===1?i=!1:Li(s,n,t):(i=!n.$stable,Ri(n,s)),a=n}else n&&(Fi(e,n),a={default:1});if(i)for(const u in s)!ws(u)&&a[u]==null&&delete s[u]},Pe=ic;function nc(e){return tc(e)}function tc(e,n){const t=wr();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:u,createComment:d,setText:f,setElementText:c,parentNode:v,nextSibling:m,setScopeId:y=mn,insertStaticContent:x}=e,k=(p,b,$,D=null,T=null,A=null,j=void 0,V=null,L=!!b.dynamicChildren)=>{if(p===b)return;p&&!Yn(p,b)&&(D=ne(p),He(p,T,A,!0),p=null),b.patchFlag===-2&&(L=!1,b.dynamicChildren=null),b.dynamicChildren&&p&&p.dynamicChildren&&p.dynamicChildren.hasOnce&&(b.dynamicChildren===Jn&&(b.dynamicChildren=[]),b.dynamicChildren.hasOnce=!0);const{type:S,ref:Z,shapeFlag:H}=b;switch(S){case Nr:O(p,b,$,D);break;case Re:q(p,b,$,D);break;case zr:p==null&&K(b,$,D,j);break;case W:N(p,b,$,D,T,A,j,V,L);break;default:H&1?I(p,b,$,D,T,A,j,V,L):H&6?w(p,b,$,D,T,A,j,V,L):(H&64||H&128)&&S.process(p,b,$,D,T,A,j,V,L,Dn)}Z!=null&&T?Et(Z,p&&p.ref,A,b||p,!b):Z==null&&p&&p.ref!=null&&Et(p.ref,null,A,p,!0)},O=(p,b,$,D)=>{if(p==null)r(b.el=u(b.children),$,D);else{const T=b.el=p.el;b.children!==p.children&&f(T,b.children)}},q=(p,b,$,D)=>{p==null?r(b.el=d(b.children||""),$,D):b.el=p.el},K=(p,b,$,D)=>{[p.el,p.anchor]=x(p.children,b,$,D,p.el,p.anchor)},B=({el:p,anchor:b},$,D)=>{let T;for(;p&&p!==b;)T=m(p),r(p,$,D),p=T;r(b,$,D)},C=({el:p,anchor:b})=>{let $;for(;p&&p!==b;)$=m(p),s(p),p=$;s(b)},I=(p,b,$,D,T,A,j,V,L)=>{if(b.type==="svg"?j="svg":b.type==="math"&&(j="mathml"),p==null)U(b,$,D,T,A,j,V,L);else{const S=p.el&&p.el._isVueCE?p.el:null;try{S&&S._beginPatch(),Q(p,b,T,A,j,V,L)}finally{S&&S._endPatch()}}},U=(p,b,$,D,T,A,j,V)=>{let L,S;const{props:Z,shapeFlag:H,transition:X,dirs:se}=p;if(L=p.el=a(p.type,A,Z&&Z.is,Z),H&8?c(L,p.children):H&16&&P(p.children,L,null,D,T,Wr(p,A),j,V),se&&Kn(p,null,D,"created"),ee(L,p,p.scopeId,j,D),Z){for(const ge in Z)ge!=="value"&&!kt(ge)&&i(L,ge,null,Z[ge],A,D);"value"in Z&&i(L,"value",null,Z.value,A),(S=Z.onVnodeBeforeMount)&&un(S,D,p)}se&&Kn(p,null,D,"beforeMount");const ue=rc(T,X);ue?X.beforeEnter(L):X&&!X.persisted&&(L[oc]=!0),r(L,b,$),((S=Z&&Z.onVnodeMounted)||ue||se)&&Pe(()=>{try{S&&un(S,D,p),ue&&X.enter(L),se&&Kn(p,null,D,"mounted")}finally{}},T)},ee=(p,b,$,D,T)=>{if($&&y(p,$),D)for(let A=0;A<D.length;A++)y(p,D[A]);if(T){let A=T.subTree;if(b===A||ji(A.type)&&(A.ssContent===b||A.ssFallback===b)){const j=T.vnode;ee(p,j,j.scopeId,j.slotScopeIds,T.parent)}}},P=(p,b,$,D,T,A,j,V,L=0)=>{for(let S=L;S<p.length;S++){const Z=p[S]=V?Cn(p[S]):hn(p[S]);k(null,Z,b,$,D,T,A,j,V)}},Q=(p,b,$,D,T,A,j)=>{const V=b.el=p.el;let{patchFlag:L,dynamicChildren:S,dirs:Z}=b;L|=p.patchFlag&16;const H=p.props||be,X=b.props||be;let se;if($&&Un($,!1),(se=X.onVnodeBeforeUpdate)&&un(se,$,b,p),Z&&Kn(b,p,$,"beforeUpdate"),$&&Un($,!0),S&&(!p.dynamicChildren||p.dynamicChildren.length!==S.length)&&(L=0,j=!1,S=null),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&c(V,""),S?J(p.dynamicChildren,S,V,$,D,Wr(b,T),A):j||pe(p,b,V,null,$,D,Wr(b,T),A,!1),L>0){if(L&16)Y(V,H,X,$,T);else if(L&2&&H.class!==X.class&&i(V,"class",null,X.class,T),L&4&&i(V,"style",H.style,X.style,T),L&8){const ue=b.dynamicProps;for(let ge=0;ge<ue.length;ge++){const ve=ue[ge],Ee=H[ve],Se=X[ve];(Se!==Ee||ve==="value")&&i(V,ve,Ee,Se,T,$)}}L&1&&p.children!==b.children&&c(V,b.children)}else!j&&S==null&&Y(V,H,X,$,T);((se=X.onVnodeUpdated)||Z)&&Pe(()=>{se&&un(se,$,b,p),Z&&Kn(b,p,$,"updated")},D)},J=(p,b,$,D,T,A,j)=>{for(let V=0;V<b.length;V++){const L=p[V],S=b[V],Z=L.el||Ct(L),H=Z&&(L.type===W||!Yn(L,S)||L.shapeFlag&198)?v(Z):$;k(L,S,H,null,D,T,A,j,!0)}},Y=(p,b,$,D,T)=>{if(b!==$){if(b!==be)for(const A in b)!kt(A)&&!(A in $)&&i(p,A,b[A],null,T,D);for(const A in $){if(kt(A))continue;const j=$[A],V=b[A];j!==V&&A!=="value"&&i(p,A,V,j,T,D)}"value"in $&&i(p,"value",b.value,$.value,T)}},N=(p,b,$,D,T,A,j,V,L)=>{const S=b.el=p?p.el:u(""),Z=b.anchor=p?p.anchor:u("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:se}=b;se&&(V=V?V.concat(se):se),p==null?(r(S,$,D),r(Z,$,D),P(b.children||[],$,Z,T,A,j,V,L)):H>0&&H&64&&X&&p.dynamicChildren&&p.dynamicChildren.length===X.length?(J(p.dynamicChildren,X,$,T,A,j,V),(b.key!=null||T&&b===T.subTree)&&Pi(p,b,!0)):pe(p,b,$,Z,T,A,j,V,L)},w=(p,b,$,D,T,A,j,V,L)=>{b.slotScopeIds=V,p==null?b.shapeFlag&512?T.ctx.activate(b,$,D,j,L):F(b,$,D,T,A,j,L):E(p,b,L)},F=(p,b,$,D,T,A,j)=>{const V=p.component=fc(p,D,T);if(Ar(p)&&(V.ctx.renderer=Dn),hc(V,!1,j),V.asyncDep){if(T&&T.registerDep(V,R,j,A),!p.el){const L=V.subTree=Ne(Re);q(null,L,b,$),p.placeholder=L.el}}else R(V,p,b,$,T,A,j)},E=(p,b,$)=>{const D=b.component=p.component;if(za(p,b,$))if(D.asyncDep&&!D.asyncResolved){b.el=p.el,b.placeholder=p.placeholder,le(D,b,$);return}else D.next=b,D.update();else b.el=p.el,b.placeholder=p.placeholder,D.vnode=b},R=(p,b,$,D,T,A,j)=>{const V=()=>{if(p.isMounted){let{next:H,bu:X,u:se,parent:ue,vnode:ge}=p;{const an=Vi(p);if(an){H&&(H.el=ge.el,le(p,H,j)),an.asyncDep.then(()=>{const xn=()=>{p.job.flags&8||(T&&T.pendingBranch?Pe(xn,T):S())};xn.flags=48,Pe(xn,T)});return}}let ve=H,Ee;Un(p,!1),H?(H.el=ge.el,le(p,H,j)):H=ge,X&&nr(X),(Ee=H.props&&H.props.onVnodeBeforeUpdate)&&un(Ee,ue,H,ge),Un(p,!0);const Se=Zs(p),en=p.subTree;p.subTree=Se,k(en,Se,v(en.el||Ct(en)),ne(en),p,T,A),H.el=Se.el,ve===null&&Ga(p,Se.el),se&&Pe(se,T),(Ee=H.props&&H.props.onVnodeUpdated)&&Pe(()=>un(Ee,ue,H,ge),T)}else{let H;const{el:X,props:se}=b,{bm:ue,m:ge,parent:ve,root:Ee,type:Se}=p,en=$t(b);Un(p,!1),ue&&nr(ue),!en&&(H=se&&se.onVnodeBeforeMount)&&un(H,ve,b),Un(p,!0);{Ee.ce&&Ee.ce._hasShadowRoot()&&Ee.ce._injectChildStyle(Se,p.parent?p.parent.type:void 0);const an=p.subTree=Zs(p);k(null,an,$,D,p,T,A),b.el=an.el}if(ge&&Pe(ge,T),!en&&(H=se&&se.onVnodeMounted)){const an=b;Pe(()=>un(H,ve,an),T)}(b.shapeFlag&256||ve&&$t(ve.vnode)&&ve.vnode.shapeFlag&256)&&p.a&&Pe(p.a,T),p.isMounted=!0,b=$=D=null}};p.scope.on();const L=p.effect=new Uo(V);p.scope.off();const S=p.update=L.run.bind(L),Z=p.job=L.runIfDirty.bind(L);Z.i=p,Z.id=p.uid,L.scheduler=()=>Ir(Z),Un(p,!0),S()},le=(p,b,$)=>{b.component=p;const D=p.vnode.props;p.vnode=b,p.next=null,Ja(p,b.props,D,$),ec(p,b.children,$),gn(),ci(p),_n()},pe=(p,b,$,D,T,A,j,V,L=!1)=>{const S=p&&p.children,Z=p?p.shapeFlag:0,H=b.children,{patchFlag:X,shapeFlag:se}=b;if(X>0){if(X&128){rt(S,H,$,D,T,A,j,V,L);return}else if(X&256){Xe(S,H,$,D,T,A,j,V,L);return}}se&8?(Z&16&&me(S,T,A),H!==S&&c($,H)):Z&16?se&16?rt(S,H,$,D,T,A,j,V,L):me(S,T,A,!0):(Z&8&&c($,""),se&16&&P(H,$,D,T,A,j,V,L))},Xe=(p,b,$,D,T,A,j,V,L)=>{p=p||Jn,b=b||Jn;const S=p.length,Z=b.length,H=Math.min(S,Z);let X;for(X=0;X<H;X++){const se=b[X]=L?Cn(b[X]):hn(b[X]);k(p[X],se,$,null,T,A,j,V,L)}S>Z?me(p,T,A,!0,!1,H):P(b,$,D,T,A,j,V,L,H)},rt=(p,b,$,D,T,A,j,V,L)=>{let S=0;const Z=b.length;let H=p.length-1,X=Z-1;for(;S<=H&&S<=X;){const se=p[S],ue=b[S]=L?Cn(b[S]):hn(b[S]);if(Yn(se,ue))k(se,ue,$,null,T,A,j,V,L);else break;S++}for(;S<=H&&S<=X;){const se=p[H],ue=b[X]=L?Cn(b[X]):hn(b[X]);if(Yn(se,ue))k(se,ue,$,null,T,A,j,V,L);else break;H--,X--}if(S>H){if(S<=X){const se=X+1,ue=se<Z?b[se].el:D;for(;S<=X;)k(null,b[S]=L?Cn(b[S]):hn(b[S]),$,ue,T,A,j,V,L),S++}}else if(S>X)for(;S<=H;)He(p[S],T,A,!0),S++;else{const se=S,ue=S,ge=new Map;for(S=ue;S<=X;S++){const Ke=b[S]=L?Cn(b[S]):hn(b[S]);Ke.key!=null&&ge.set(Ke.key,S)}let ve,Ee=0;const Se=X-ue+1;let en=!1,an=0;const xn=new Array(Se);for(S=0;S<Se;S++)xn[S]=0;for(S=se;S<=H;S++){const Ke=p[S];if(Ee>=Se){He(Ke,T,A,!0);continue}let cn;if(Ke.key!=null)cn=ge.get(Ke.key);else for(ve=ue;ve<=X;ve++)if(xn[ve-ue]===0&&Yn(Ke,b[ve])){cn=ve;break}cn===void 0?He(Ke,T,A,!0):(xn[cn-ue]=S+1,cn>=an?an=cn:en=!0,k(Ke,b[cn],$,null,T,A,j,V,L),Ee++)}const Rs=en?sc(xn):Jn;for(ve=Rs.length-1,S=Se-1;S>=0;S--){const Ke=ue+S,cn=b[Ke],Fs=b[Ke+1],Ls=Ke+1<Z?Fs.el||Ct(Fs):D;xn[S]===0?k(null,cn,$,Ls,T,A,j,V,L):en&&(ve<0||S!==Rs[ve]?kn(cn,$,Ls,2):ve--)}}},kn=(p,b,$,D,T=null)=>{const{el:A,type:j,transition:V,children:L,shapeFlag:S}=p;if(S&6){kn(p.component.subTree,b,$,D);return}if(S&128){p.suspense.move(b,$,D);return}if(S&64){j.move(p,b,$,Dn);return}if(j===W){r(A,b,$);for(let H=0;H<L.length;H++)kn(L[H],b,$,D);r(p.anchor,b,$);return}if(j===zr){B(p,b,$);return}if(D!==2&&S&1&&V)if(D===0)V.persisted&&!A[ze]?r(A,b,$):(V.beforeEnter(A),r(A,b,$),Pe(()=>V.enter(A),T));else{const{leave:H,delayLeave:X,afterLeave:se}=V,ue=()=>{p.ctx.isUnmounted?s(A):r(A,b,$)},ge=()=>{const ve=A._isLeaving||!!A[ze];A._isLeaving&&A[ze](!0),V.persisted&&!ve?ue():H(A,()=>{ue(),se&&se()})};X?X(A,ue,ge):ge()}else r(A,b,$)},He=(p,b,$,D=!1,T=!1)=>{const{type:A,props:j,ref:V,children:L,dynamicChildren:S,shapeFlag:Z,patchFlag:H,dirs:X,cacheIndex:se,memo:ue}=p;if((H===-2||S&&S.hasOnce)&&(T=!1),V!=null&&(gn(),Et(V,null,$,p,!0),_n()),se!=null&&(!p.ctx||p.ctx===b)&&(b.renderCache[se]=void 0),Z&256&&b.ctx.deactivate(p))return;const ge=Z&1&&X,ve=!$t(p);let Ee;if(ve&&(Ee=j&&j.onVnodeBeforeUnmount)&&un(Ee,b,p),Z&6)oe(p.component,$,D);else{if(Z&128){p.suspense.unmount($,D);return}ge&&Kn(p,null,b,"beforeUnmount"),Z&64?p.type.remove(p,b,$,Dn,D):S&&!S.hasOnce&&(A!==W||H>0&&H&64)?me(S,b,$,!1,!0):(A===W&&H&384||!T&&Z&16)&&me(L,b,$),D&&Kt(p)}const Se=ue!=null&&se==null;(ve&&(Ee=j&&j.onVnodeUnmounted)||ge||Se)&&Pe(()=>{Ee&&un(Ee,b,p),ge&&Kn(p,null,b,"unmounted"),Se&&(p.el=null)},$)},Kt=p=>{const{type:b,el:$,anchor:D,transition:T}=p,A=b===W;if(A&&!T){Ut($,D);return}if(b===zr){C(p),T&&!T.persisted&&T.afterLeave&&T.afterLeave();return}const j=A?At(p):p,V=()=>{A?v($)&&Ut($,D):s($),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(j&&j.shapeFlag&1&&T&&!T.persisted){const{leave:L,delayLeave:S}=T,Z=j.el,H=()=>L(Z,V);S?S(Z,V,H):H()}else V()},Ut=(p,b)=>{let $;for(;p!==b;)$=m(p),s(p),p=$;s(b)},oe=(p,b,$)=>{const{bum:D,scope:T,job:A,subTree:j,um:V,m:L,a:S}=p;eo(L),eo(S),D&&nr(D),T.stop(),A?(A.flags|=8,He(j,p,b,$)):j&&(j.transition=p.vnode.transition,He(j,p,b,$)),V&&Pe(V,b);const Z=()=>{p.isUnmounted=!0};Z.flags=16,Pe(Z,b)},me=(p,b,$,D=!1,T=!1,A=0)=>{for(let j=A;j<p.length;j++)He(p[j],b,$,D,T)},ne=p=>{if(p.shapeFlag&6)return ne(p.component.subTree);if(p.shapeFlag&128)return p.suspense.next();const b=m(p.anchor||p.el),$=b&&b[ba];return $?m($):b},qe=(p,b,$)=>{const D=p&&b._vnode?void 0:p&&p.component?p.component.uid:dc();ha(()=>{p==null?b._vnode&&He(b._vnode,null,null,!0):k(b._vnode||null,p,b,null,null,null,$),b._vnode=p},D)},Dn={p:k,um:He,m:kn,r:Kt,mt:F,mc:P,pc:pe,pbc:J,n:ne,o:e};return{render:qe,hydrate:void 0,createApp:Ba(qe)}}function Wr({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Un({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function rc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Pi(e,n,t=!1){const r=e.children,s=n.children;if(re(r)&&re(s))for(let i=0;i<r.length;i++){const a=r[i];let u=s[i];u.shapeFlag&1&&!u.dynamicChildren&&((u.patchFlag<=0||u.patchFlag===32)&&(u=s[i]=Cn(s[i]),u.el=a.el),!t&&u.patchFlag!==-2&&Pi(a,u)),u.type===Nr&&(u.patchFlag===-1&&(u=s[i]=Cn(u)),u.el=a.el),u.type===Re&&!u.el&&(u.el=a.el)}}function sc(e){const n=e.slice(),t=[0];let r,s,i,a,u;const d=e.length;for(r=0;r<d;r++){const f=e[r];if(f!==0){if(s=t[t.length-1],e[s]<f){n[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)u=i+a>>1,e[t[u]]<f?i=u+1:a=u;f<e[t[i]]&&(i>0&&(n[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=n[a];return t}function Vi(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Vi(n)}function eo(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Ct(e){if(e.placeholder)return e.placeholder;const n=e.component;if(n)return Ct(n.subTree);const t=e.suspense;return t&&t.activeBranch?Ct(t.activeBranch):null}const ji=e=>e.__isSuspense,oc=Symbol("_deferredEnter");function ic(e,n){n&&n.pendingBranch?re(e)?n.effects.push(...e):n.effects.push(e):fa(e)}const W=Symbol.for("v-fgt"),Nr=Symbol.for("v-txt"),Re=Symbol.for("v-cmt"),zr=Symbol.for("v-stc"),et=[];let Ue=null;function g(e=!1){et.push(Ue=e?null:[])}function Bi(){et.pop(),Ue=et[et.length-1]||null}let Nt=1;function mr(e,n=!1){Nt+=e,e<0&&Ue&&n&&(Ue.hasOnce=!0)}function Hi(e){return e.dynamicChildren=Nt>0?Ue||Jn:null,Bi(),Nt>0&&Ue&&Ue.push(e),e}function _(e,n,t,r,s,i){return Hi(l(e,n,t,r,s,i,!0))}function Rn(e,n,t,r,s){return Hi(Ne(e,n,t,r,s,!0))}function Ot(e){return e?e.__v_isVNode===!0:!1}function Yn(e,n){return e.type===n.type&&e.key===n.key}const qi=({key:e})=>e??null,rr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?ke(e)||Fe(e)||ie(e)?{i:Ge,r:e,k:n,f:!!t}:e:null);function l(e,n=null,t=null,r=0,s=null,i=e===W?0:1,a=!1,u=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&qi(n),ref:n&&rr(n),scopeId:fi,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ge};return u?(vr(d,t),i&128&&e.normalize(d)):t&&(d.shapeFlag|=ke(t)?8:16),Nt>0&&!a&&Ue&&(d.patchFlag>0||i&6)&&d.patchFlag!==32&&Ue.push(d),d}const Ne=lc;function lc(e,n=null,t=null,r=0,s=null,i=!1){if((!e||e===Na)&&(e=Re),Ot(e)){const u=qn(e,n,!0);return t&&vr(u,t),Nt>0&&!i&&Ue&&(u.shapeFlag&6?Ue[Ue.indexOf(e)]=u:Ue.push(u)),u.patchFlag=-2,u}if(gc(e)&&(e=e.__vccOpts),n){n=ac(n);let{class:u,style:d}=n;u&&!ke(u)&&(n.class=ae(u)),he(d)&&(Es(d)&&!re(d)&&(d=Ce({},d)),n.style=De(d))}const a=ke(e)?1:ji(e)?128:Sr(e)?64:he(e)?4:ie(e)?2:0;return l(e,n,t,r,s,a,i,!0)}function ac(e){return e?Es(e)?Ce({},e):Di(e)?Ce({},e[Gi]||e):e:null}function qn(e,n,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:u,transition:d}=e,f=n?cc(s||{},n):s,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&qi(f),ref:n&&n.ref?t&&i?re(i)?i.concat(rr(n)):[i,rr(n)]:rr(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:u,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==W?a===-1?16:a|16:a,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:d,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&qn(e.ssContent),ssFallback:e.ssFallback&&qn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return d&&r&&Xn(c,d.clone(c)),c}function we(e=" ",n=0){return Ne(Nr,null,e,n)}function z(e="",n=!1){return n?(g(),Rn(Re,null,e)):Ne(Re,null,e)}function hn(e){return e==null||typeof e=="boolean"?Ne(Re):re(e)?Ne(W,null,e.slice()):Ot(e)?Cn(e):Ne(Nr,null,String(e))}function Cn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:qn(e)}function vr(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(re(n))t=16;else if(typeof n=="object")if(r&65){const s=n.default;s&&(s._c&&(s._d=!1),vr(e,s()),s._c&&(s._d=!0));return}else{t=32;const s=n._;!s&&!Di(n)?n._ctx=Ge:s===3&&Ge&&(Ge.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(ie(n)){if(r&65){vr(e,{default:n});return}n={default:n,_ctx:Ge},t=32}else n=String(n),r&64?(t=16,n=[we(n)]):t=8;e.children=n,e.shapeFlag|=t}function cc(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const s in r)if(s==="class")n.class!==r.class&&(n.class=ae([n.class,r.class]));else if(s==="style")n.style=De([n.style,r.style]);else if(Mr(s)){const i=n[s],a=r[s];a&&i!==a&&!(re(i)&&i.includes(a))?n[s]=i?[].concat(i,a):a:a==null&&i==null&&!Er(s)&&(n[s]=a)}else s!==""&&(n[s]=r[s])}return n}function un(e,n,t,r=null){Qe(e,n,7,[t,r])}const uc=wi();let Ki=0;function dc(){return Ki}function fc(e,n,t){const r=e.type,s=(n?n.appContext:e.appContext)||uc,i={uid:Ki++,vnode:e,type:r,parent:n,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(s.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oi(r,s),emitsOptions:Ci(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=n?n.root:i,i.emit=qa.bind(null,i),e.ce&&e.ce(i),i}let je=null;const Ui=()=>je||Ge;let gr,Rt;{const e=wr(),n=(t,r)=>{let s;return(s=e[t])||(s=e[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};gr=n("__VUE_INSTANCE_SETTERS__",t=>je=t),Rt=n("__VUE_SSR_SETTERS__",t=>Ft=t)}const Ht=e=>{const n=je;return gr(e),e.scope.on(),()=>{e.scope.off(),gr(n)}},no=()=>{je&&je.scope.off(),gr(null)};function Wi(e){return e.vnode.shapeFlag&4}let Ft=!1;function hc(e,n=!1,t=!1){n&&Rt(n);const{props:r,children:s}=e.vnode,i=Wi(e);Ya(e,r,i,n),Xa(e,s,t||n);const a=i?pc(e,n):void 0;return n&&Rt(!1),a}function pc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Oa);const{setup:r}=t;if(r){gn();const s=e.setupContext=r.length>1?vc(e):null,i=Ht(e),a=Bt(r,e,0,[e.props,s]),u=Lo(a);if(_n(),i(),(u||e.sp)&&!$t(e)&&yi(e),u){if(a.then(no,no),n)return a.then(d=>{Rt(!0);try{to(e,d,n)}finally{Rt(!1)}}).catch(d=>{Tr(d,e,0,void 0,!0),e.ssrRender=(f,c)=>c("<!---->")});e.asyncDep=a}else to(e,a)}else zi(e)}function to(e,n,t){ie(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:he(n)&&(e.setupState=ii(n)),zi(e)}function zi(e,n,t){const r=e.type;e.render||(e.render=r.render||mn);{const s=Ht(e);gn();try{Ra(e)}finally{_n(),s()}}}const Gi=Symbol(),mc={get(e,n){return Oe(e,"get",""),n===Gi?e:e[n]}};function vc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,mc),slots:e.slots,emit:e.emit,expose:n}}function Or(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ii(na(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in wt)return wt[t](e)},has(n,t){return t in n||t in wt}})):e.proxy}function gc(e){return ie(e)&&"__vccOpts"in e}const G=(e,n)=>ia(e,n,Ft);function _c(e,n,t){try{mr(-1);const r=arguments.length;return r===2?he(n)&&!re(n)?Ot(n)?Ne(e,null,[n]):Ne(e,n):Ne(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Ot(t)&&(t=[t]),Ne(e,n,t))}finally{mr(1)}}const bc="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let cs;const ro=typeof window<"u"&&window.trustedTypes;if(ro)try{cs=ro.createPolicy("vue",{createHTML:e=>e})}catch{}const Yi=cs?e=>cs.createHTML(e):e=>e,yc="http://www.w3.org/2000/svg",kc="http://www.w3.org/1998/Math/MathML",wn=typeof document<"u"?document:null,so=wn&&wn.createElement("template"),xc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const s=n==="svg"?wn.createElementNS(yc,e):n==="mathml"?wn.createElementNS(kc,e):t?wn.createElement(e,{is:t}):wn.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>wn.createTextNode(e),createComment:e=>wn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,s,i){const a=t?t.previousSibling:n.lastChild;if(s&&(s===i||s.nextSibling))for(;n.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{so.innerHTML=Yi(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const u=so.content;if(r==="svg"||r==="mathml"){const d=u.firstChild;for(;d.firstChild;)u.appendChild(d.firstChild);u.removeChild(d)}n.insertBefore(u,t)}return[a?a.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Nn="transition",mt="animation",Lt=Symbol("_vtc"),Ji={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Mc=Ce({},vi,Ji),Ec=e=>(e.displayName="Transition",e.props=Mc,e),$c=Ec((e,{slots:n})=>_c(xa,wc(e),n)),Wn=(e,n=[])=>{re(e)?e.forEach(t=>t(...n)):e&&e(...n)},oo=e=>e?re(e)?e.some(n=>n.length>1):e.length>1:!1;function wc(e){const n={};for(const N in e)N in Ji||(n[N]=e[N]);if(e.css===!1)return n;const{name:t="v",type:r,duration:s,enterFromClass:i=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:u=`${t}-enter-to`,appearFromClass:d=i,appearActiveClass:f=a,appearToClass:c=u,leaveFromClass:v=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:y=`${t}-leave-to`}=e,x=Cc(s),k=x&&x[0],O=x&&x[1],{onBeforeEnter:q,onEnter:K,onEnterCancelled:B,onLeave:C,onLeaveCancelled:I,onBeforeAppear:U=q,onAppear:ee=K,onAppearCancelled:P=B}=n,Q=(N,w,F,E)=>{N._enterCancelled=E,zn(N,w?c:u),zn(N,w?f:a),F&&F()},J=(N,w)=>{N._isLeaving=!1,zn(N,v),zn(N,y),zn(N,m),w&&w()},Y=N=>(w,F)=>{const E=N?ee:K,R=()=>Q(w,N,F);Wn(E,[w,R]),io(()=>{zn(w,N?d:i),En(w,N?c:u),oo(E)||lo(w,r,k,R)})};return Ce(n,{onBeforeEnter(N){Wn(q,[N]),En(N,i),En(N,a)},onBeforeAppear(N){Wn(U,[N]),En(N,d),En(N,f)},onEnter:Y(!1),onAppear:Y(!0),onLeave(N,w){N._isLeaving=!0;const F=()=>J(N,w);En(N,v),N._enterCancelled?(En(N,m),uo(N)):(uo(N),En(N,m)),io(()=>{N._isLeaving&&(zn(N,v),En(N,y),oo(C)||lo(N,r,O,F))}),Wn(C,[N,F])},onEnterCancelled(N){Q(N,!1,void 0,!0),Wn(B,[N])},onAppearCancelled(N){Q(N,!0,void 0,!0),Wn(P,[N])},onLeaveCancelled(N){J(N),Wn(I,[N])}})}function Cc(e){if(e==null)return null;if(he(e))return[Gr(e.enter),Gr(e.leave)];{const n=Gr(e);return[n,n]}}function Gr(e){return Cl(e)}function En(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Lt]||(e[Lt]=new Set)).add(n)}function zn(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[Lt];t&&(t.delete(n),t.size||(e[Lt]=void 0))}function io(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Tc=0;function lo(e,n,t,r){const s=e._endId=++Tc,i=()=>{s===e._endId&&r()};if(t!=null)return setTimeout(i,t);const{type:a,timeout:u,propCount:d}=Ic(e,n);if(!a)return r();const f=a+"end";let c=0;const v=()=>{e.removeEventListener(f,m),i()},m=y=>{y.target===e&&++c>=d&&v()};setTimeout(()=>{c<d&&v()},u+1),e.addEventListener(f,m)}function Ic(e,n){const t=window.getComputedStyle(e),r=x=>(t[x]||"").split(", "),s=r(`${Nn}Delay`),i=r(`${Nn}Duration`),a=ao(s,i),u=r(`${mt}Delay`),d=r(`${mt}Duration`),f=ao(u,d);let c=null,v=0,m=0;n===Nn?a>0&&(c=Nn,v=a,m=i.length):n===mt?f>0&&(c=mt,v=f,m=d.length):(v=Math.max(a,f),c=v>0?a>f?Nn:mt:null,m=c?c===Nn?i.length:d.length:0);const y=c===Nn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Nn}Property`).toString());return{type:c,timeout:v,propCount:m,hasTransform:y}}function ao(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>co(t)+co(e[r])))}function co(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function uo(e){return(e?e.ownerDocument:document).body.offsetHeight}function Sc(e,n,t){const r=e[Lt];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const fo=Symbol("_vod"),Ac=Symbol("_vsh"),Dc=Symbol(""),Nc=/(?:^|;)\s*display\s*:/;function Oc(e,n,t){const r=e.style,s=ke(t);let i=!1;if(t&&!s){if(n)if(ke(n))for(const a of n.split(";")){const u=a.slice(0,a.indexOf(":")).trim();t[u]==null&&gt(r,u,"")}else for(const a in n)t[a]==null&&gt(r,a,"");for(const a in t){a==="display"&&(i=!0);const u=t[a];u!=null?Fc(e,a,!ke(n)&&n?n[a]:void 0,u)||gt(r,a,u):gt(r,a,"")}}else if(s){if(n!==t){const a=r[Dc];a&&(t+=";"+a),r.cssText=t,i=Nc.test(t)}}else n&&e.removeAttribute("style");fo in e&&((!s||n!==t)&&(e[fo]=i?r.display:""),e[Ac]&&(r.display="none"))}const Yt=/\s*!important$/;function gt(e,n,t){if(re(t))t.forEach(r=>gt(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))Yt.test(t)?e.setProperty(n,t.replace(Yt,""),"important"):e.setProperty(n,t);else{const r=Rc(e,n);Yt.test(t)?e.setProperty(tt(r),t.replace(Yt,""),"important"):e[r]=t}}const ho=["Webkit","Moz","ms"],Yr={};function Rc(e,n){const t=Yr[n];if(t)return t;let r=sn(n);if(r!=="filter"&&r in e)return Yr[n]=r;r=jo(r);for(let s=0;s<ho.length;s++){const i=ho[s]+r;if(i in e)return Yr[n]=i}return n}function Fc(e,n,t,r){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&ke(r)&&t===r}const po="http://www.w3.org/1999/xlink";function mo(e,n,t,r,s,i=Nl(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(po,n.slice(6,n.length)):e.setAttributeNS(po,n,t):t==null||i&&!Ho(t)?e.removeAttribute(n):e.setAttribute(n,i?"":vn(t)?String(t):t)}function vo(e,n,t,r,s){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Yi(t):t);return}const i=e.tagName;if(n==="value"&&i!=="PROGRESS"&&!i.includes("-")){const u=i==="OPTION"?e.getAttribute("value")||"":e.value,d=t==null?e.type==="checkbox"?"on":"":String(t);(u!==d||!("_value"in e))&&(e.value=d),t==null&&e.removeAttribute(n),e._value=t;return}let a=!1;if(t===""||t==null){const u=typeof e[n];u==="boolean"?t=Ho(t):t==null&&u==="string"?(t="",a=!0):u==="number"&&(t=0,a=!0)}try{e[n]=t}catch{}a&&e.removeAttribute(s||n)}function Zi(e,n,t,r){e.addEventListener(n,t,r)}function Lc(e,n,t,r){e.removeEventListener(n,t,r)}const go=Symbol("_vei");function Pc(e,n,t,r,s=null){const i=e[go]||(e[go]={}),a=i[n];if(r&&a)a.value=r;else{const[u,d]=Bc(n);if(r){const f=i[n]=Kc(r,s);Zi(e,u,f,d)}else a&&(Lc(e,u,a,d),i[n]=void 0)}}const Vc=/(Once|Passive|Capture)$/,jc=/^on:?(?:Once|Passive|Capture)$/;function Bc(e){let n,t;for(;(t=e.match(Vc))&&!jc.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):tt(e.slice(2)),n]}let Jr=0;const Hc=Promise.resolve(),qc=()=>Jr||(Hc.then(()=>Jr=0),Jr=Date.now());function Kc(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const s=t.value;if(re(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const a=s.slice(),u=[r];for(let d=0;d<a.length&&!r._stopped;d++){const f=a[d];f&&Qe(f,n,5,u)}}else Qe(s,n,5,[r])};return t.value=e,t.attached=qc(),t}const _o=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Uc=(e,n,t,r,s,i)=>{const a=s==="svg";n==="class"?Sc(e,r,a):n==="style"?Oc(e,t,r):Mr(n)?Er(n)||Pc(e,n,t,r,i):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):Wc(e,n,r,a))?(vo(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&mo(e,n,r,a,i,n!=="value")):e._isVueCE&&(zc(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!ke(r)))?vo(e,sn(n),r,i,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),mo(e,n,r,a))};function Wc(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&_o(n)&&ie(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _o(n)&&ke(t)?!1:n in e}function zc(e,n){const t=e._def.props;if(!t)return!1;const r=sn(n);return Array.isArray(t)?t.some(s=>sn(s)===r):Object.keys(t).some(s=>sn(s)===r)}const bo=e=>{const n=e.props["onUpdate:modelValue"]||!1;return re(n)?t=>nr(n,t):n},Zr=Symbol("_assign"),Gc={created(e,{value:n},t){e.checked=at(n,t.props.value),e[Zr]=bo(t),Zi(e,"change",()=>{e[Zr](Yc(e))})},beforeUpdate(e,{value:n,oldValue:t},r){e[Zr]=bo(r),n!==t&&(e.checked=at(n,r.props.value))}};function Yc(e){return"_value"in e?e._value:e.value}const Jc=["ctrl","shift","alt","meta"],Zc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>Jc.some(t=>e[`${t}Key`]&&!n.includes(t))},Ln=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=((s,...i)=>{for(let a=0;a<n.length;a++){const u=Zc[n[a]];if(u&&u(s,n))return}return e(s,...i)}))},Qc=Ce({patchProp:Uc},xc);let yo;function Xc(){return yo||(yo=nc(Qc))}const eu=((...e)=>{const n=Xc().createApp(...e),{mount:t}=n;return n.mount=r=>{const s=tu(r);if(!s)return;const i=n._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,nu(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},n});function nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function tu(e){return ke(e)?document.querySelector(e):e}const ru="./";function Ie(e){return ru+"art/"+e}const Jt=ft({});function ln(e){if(!e)return"no";const n=Ie(e),t=Jt[n];if(t)return t;Jt[n]="pending";const r=new Image;return r.onload=()=>{Jt[n]="ok"},r.onerror=()=>{Jt[n]="no"},r.src=n,"pending"}const ko={sq:{full:Ie("sq-full.webp")},nu:{full:Ie("nu-full.webp")}},Ye=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function Be(e){return Ye.find(n=>n.id===e)||Ye[0]}const Qi={taro:[["荔浦芋泥","焦糖杏仁薄脆"]],matcha:[["春日抹茶粉","蜜红豆"]],mango:[["台农芒果泥","轻盈慕斯"]],tiramisu:[["马斯卡彭","浓缩咖啡液"]],fig:[["波姬红无花果","轻奶油"]],seasonal:[["四季时令鲜果","定制夹心"]],custom:[["双层承重胚","手工定制裱花"]],festival:[["传统红曲","节庆装饰"],["栗蓉","节庆装饰"]],signature:[["高山秋栗","金桂冻","戚风胚"]]},Ts=[{id:"greenery",name:"窗边绿植",category:"绿植",cost:600,shopLevel:1},{id:"lamp",name:"暖黄吊灯",category:"灯具",cost:1200,shopLevel:1},{id:"tables",name:"木桌与藤椅",category:"桌椅",cost:1800,shopLevel:2},{id:"festival",name:"节日花环",category:"节日摆件",cost:2500,shopLevel:3}],Is=[{id:"chen",name:"陈奶奶",month:2,day:2,product:"plain",preference:"每次都买原味奶油蛋糕，给小孙子也带一份。",stories:["“我家小孙子指定要吃你们家的味道。”陈奶奶说，家里三代人的生日蛋糕全是在林记订的。","她看着林念接过店，也和苏晴一起盼着林记的老味道走出栖云镇。"]},{id:"zhang",name:"张叔",month:28,day:4,product:"signature",preference:"桂花栗子蛋糕刚上架时，总会来买一块。",stories:["外婆留下的配方写着：“栗子甜则少放糖，桂花香淡则后撒。”","老街坊们怀念的，是秋天打开蛋糕盒时那股桂花与板栗香；如今，林念把它做成了招牌。"]}],Xi={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},ct=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐鸢",nick:"阿鸢",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶星河",nick:"星河",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function ut(e){return ct.find(n=>n.id===e)}const Pt=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],_r=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function su(e){return _r.find(n=>n.lv===e)||_r[0]}const el=[{id:"oven",name:"烤箱",note:"产能",desc:"好烤箱能一次进更多盘，出品也更稳。",tiers:[{cost:2500,value:40,text:"产能 +40"},{cost:7500,value:90,text:"产能 +90"},{cost:22e3,value:150,text:"产能 +150"}]},{id:"mixer",name:"搅拌机",note:"省力",desc:"奶油和面糊交给它，自己少使点劲。",tiers:[{cost:2e3,value:.1,text:"自付体力 -10%"},{cost:6500,value:.2,text:"自付体力 -20%"},{cost:19e3,value:.3,text:"自付体力 -30%"}]},{id:"fridge",name:"冷藏柜",note:"剩货",desc:"当天没卖完的，第二天还能打折卖掉一部分。",tiers:[{cost:1800,value:.1,text:"剩货回收 +10%"},{cost:5500,value:.18,text:"剩货回收 +18%"},{cost:16e3,value:.26,text:"剩货回收 +26%"}]},{id:"display",name:"展示柜",note:"客流",desc:"摆得好看，路过的人就更愿意进来。",tiers:[{cost:3e3,value:.06,text:"需求 +6%"},{cost:9e3,value:.13,text:"需求 +13%"},{cost:3e4,value:.2,text:"需求 +20%"}]},{id:"packing",name:"包装台",note:"定制",desc:"定制单拼的就是最后那一下体面。",tiers:[{cost:2600,value:.1,text:"定制收入 +10%"},{cost:7500,value:.22,text:"定制收入 +22%"},{cost:24e3,value:.35,text:"定制收入 +35%"}]},{id:"warehouse",name:"仓库",note:"采购",desc:"一次能囤更多原料，少跑几趟。",tiers:[{cost:1600,value:6,text:"单次采购 +6 份"},{cost:5e3,value:12,text:"单次采购 +12 份"},{cost:15e3,value:20,text:"单次采购 +20 份"}]},{id:"cashier",name:"收银系统",note:"售价",desc:"扫码点单，客单价能往上提一点。",tiers:[{cost:2400,value:.03,text:"售价 +3%"},{cost:7e3,value:.06,text:"售价 +6%"},{cost:26e3,value:.1,text:"售价 +10%"}]}];function Ss(e){return el.find(n=>n.id===e)}function xo(e,n){return e.unlocked.filter(t=>(e.levels[t]||1)>=n).length}function ou(e){return e.unlocked.length?e.unlocked.reduce((n,t)=>n+(e.levels[t]||1),0)/e.unlocked.length:1}function iu(e){return Math.max(0,...Object.values(e.partnerSkill))}function lu(e,n){return Object.values(e.partnerTrust).filter(t=>t>=n).length}const dt=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>xo(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>ou(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>xo(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>iu(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>lu(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function au(e){return dt.find(n=>e>=n.from&&e<=n.to)||dt[0]}const nl={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},_t={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:Ie("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:Ie("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:Ie("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:Ie("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:Ie("shop-exterior.webp")}},cu=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function sr(e){return cu[(e-1)%12]}const uu=`# 《林记烘焙》完整文游剧情文案 V5.0（橙光对话体标准版）\r
\r
## 序幕：回家\r
\r
**【场景：大学宿舍 / 栖云镇街道】**\r
**【事件ID：EVT_PROLOGUE_01｜触发条件：新游戏开始】**\r
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
  曾经连说话都不敢大声的胆怯学徒，如今已是林记独当一面的主力研发烘焙师。她那本藏在抽屉里的小本子，已经变成了摆在展示柜C位的招牌系列，拥有了属于自己的代表作。\r
- **【高信赖 + 普通专业：稳定的主力烘焙师】**\r
  小雨成为了林念最贴心可靠的后厨主力，经她手做出的每一款水果蛋糕，都饱含着让人安心的甜美与认真。\r
- **【普通信赖 + 高专业：独立制作能力极强的烘焙师】**\r
  小雨凭借刻苦的练习，练就了一手炉火纯青的抹面与制作技术，成为后厨里出餐最稳、效率最高的技术骨干。\r
- **【普通信赖 + 普通专业：认真负责的正式员工】**\r
  小雨顺利留在林记成为了一名踏实勤恳的正式员工，每天在熟悉的奶油香气里，过着安稳充实的生活。\r
\r
#### 2. 许知遥个人结局\r
- **【高养成：区域运营负责人】** 知遥彻底建立起管理自信，将天生的沟通亲和力与严谨的订单运营体系融会贯通，成为统管多城门店的区域运营负责人。\r
- **【常规养成：独立门店店长】** 知遥成长为熟客们最喜爱的独立店长，把门店日常打理得井井有条。\r
\r
#### 3. 唐鸢个人结局\r
- **【高养成：研发与培训负责人】** 阿鸢重新找回了研发新品的热情，在标准化效率与手工温度之间找到了完美平衡，全面主持林记的新品研发与团队培训。\r
- **【常规养成：生产管理负责人】** 阿鸢以严密的标准化流程守护着林记的后厨防线，确保每一批出品稳定如一。\r
\r
#### 4. 叶星河个人结局\r
- **【高养成：品牌视觉负责人 & 独立工作室主理人】** 星河不仅打造了林记完整的品牌视觉体系，还拥有了自己的独立设计事业，成为业内知名的青年商业设计师。\r
- **【常规养成：长期品牌合作伙伴】** 星河继续以自由设计师身份与林记长期合作，用画笔装点每一季的甜点礼盒。\r
\r
#### 5. 林暖（母亲）个人结局\r
- **【高家庭默契：放心交接的岁月导师】** 林暖彻底放心地将林记交给了女儿，平日里享受悠闲生活，偶尔回店里泡上一壶热茶、看看老街坊，见证女儿独当一面。\r
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
8. **北京（\`city-beijing\`）**：大气厚重的北方都会，节庆伴手礼盒与高端主题旗舰展陈极具号召力。`,lt={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐鸢:"唐鸢",阿鸢:"唐鸢",叶星河:"叶星河",星河:"叶星河",陈奶奶:"陈奶奶",许佳宁:"许佳宁",沈妍:"沈妍",顾客:"顾客"},or={周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe"},Mo={xiaoyu:"小雨",zhiyao:"知遥",kexin:"阿鸢",qinghe:"星河"},du={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},fu={一:1,二:2,三:3,四:4,五:5,六:6},hu=/^(林念|苏晴|林暖|周雨桐|许知遥|唐鸢|叶星河|陈奶奶|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function us(e,n){if(!e)return!0;if(e.trust){for(const t of Object.keys(e.trust))if((n.partnerTrust[t]||0)<e.trust[t])return!1}if(e.momBond&&(n.momBond||0)<e.momBond)return!1;if(e.played){for(const t of e.played)if(!n.played.some(r=>r.indexOf(t)>=0))return!1}if(e.style){const t=n.style||{},r=t[e.style.id]||0;if(r<e.style.min)return!1;const s=Object.keys(t).filter(i=>i!==e.style.id).map(i=>t[i]||0);if(r-Math.max(0,...s)<e.style.lead)return!1}return!0}function ir(e,n){const t=[];for(const r of e||[])r.t==="cond"?t.push(...ir(us(r.test,n)?r.then:r.else,n)):r.t==="choice"?t.push({...r,options:(r.options||[]).map(s=>({...s,branch:ir(s.branch||[],n)})),after:ir(r.after||[],n)}):t.push(r);return t}function Zt(e,n,t){e.lastIndex=0;let r=e.exec(n);for(;r;)t(r),r=e.exec(n)}function pu(e,n){const t=[];if(!e)return t;Zt(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g,e,s=>{t.push({k:"style",id:s[1],v:Number(s[2]),label:du[s[1]]+" +"+s[2]})}),Zt(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g,e,s=>{const i=lt[s[1]];t.push({k:"trust",id:or[i],v:Number(s[2]),label:s[1]+"信赖 +"+s[2]})}),Zt(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g,e,s=>{const i=s[1]?lt[s[1]]:n,a=or[i];a&&t.push({k:"skill",id:a,v:Number(s[2])/10,label:(s[1]||Mo[a])+"专业 +"+s[2]})});const r=Object.keys(lt);return Zt(/信赖度\s*\+\s*(\d+)/g,e,s=>{const i=e.slice(0,s.index);if(r.some(u=>i.endsWith(u)))return;const a=or[n];a&&(t.some(u=>u.k==="trust"&&u.id===a)||t.push({k:"trust",id:a,v:Number(s[1]),label:Mo[a]+"信赖 +"+s[1]}))}),/顾客忠诚度增加|忠诚度提升/.test(e)&&t.push({k:"loyalty",v:4,label:"忠诚 +4"}),/友情值增加/.test(e)&&t.push({k:"friend",v:5,label:"友情 +5"}),t}function bt(e){const n={};let t=!1;const r=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);r&&(n.trust={[or[lt[r[1]]]]:Number(r[2])},t=!0);const s=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);s&&(n.momBond=Number(s[1]),t=!0);const i=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);i&&(n.style={id:i[1],min:Number(i[2]),lead:15},t=!0);const a=e.match(/领先[^0-9]{0,4}(\d+)/);a&&n.style&&(n.style.lead=Number(a[1]));const u=e.match(/M(\d+)/);return u&&/已完成|完成M/.test(e)?(n.played=["M"+u[1]],t=!0):/原创配方研发剧情/.test(e)?(n.played=["M21"],t=!0):/个人作品展/.test(e)&&(n.played=["M25"],t=!0),t?n:null}function yt(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function Qt(e,n){const t=e.trim();if(!t||/^\|/.test(t))return;if(t.startsWith("旁白")){const s=t.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);n.push({t:"nar",who:s&&s[1]?s[1]:"",text:yt(s?s[2]:t)});return}if(/^\*\*[^*]+\*\*$/.test(t)){n.push({t:"nar",text:yt(t.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(t)||/^\*\(.+\)\*$/.test(t)){n.push({t:"note",text:t.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const r=t.match(hu);if(r){n.push({t:"say",who:lt[r[1]],emo:r[2]||"",text:yt(r[4].replace(/\*\*/g,""))});return}n.push({t:"nar",text:yt(t.replace(/\*\*/g,""))})}function $n(e,n={}){const t=[],r={ids:[],month:null,kind:null,test:null,title:"",cond:null};let s="main",i=t,a=null,u=null,d=null,f=null,c=null,v=0,m=!0;const y=()=>s==="branch"&&u?u.branch:s==="then"&&d?d.then:s==="else"&&d?d.else:s==="inline"&&c?c.then:i,x=k=>y().push(k);for(const k of e){const O=k.trim();if(!O){m=!0;continue}if(O.startsWith(">")){let C=O.replace(/^>+\s*/,"").trim();if(!C)continue;const I=C.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(I&&/玩家选择节点/.test(I[1])){s="main",c=null;const ee=I[1],P=ee.match(/节点\s*([\d.\-]+)/),Q=ee.match(/[：:]\s*(.+)$/);a={t:"choice",node:P?P[1]:"",prompt:Q?Q[1].trim():ee,options:[],after:[]},x(a);continue}const U=C.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(U&&a){const ee=vu([C,a.prompt].join(" ")),P=U[3]||"";a.options.push({label:U[2].trim(),hint:P.replace(/^[（(]|[）)]$/g,"").trim(),gains:pu(P,ee),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(C)&&a&&(a.note=C.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const K=O.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(K){const C=K[1],I=(K[2]||"").replace(/^[：:]\s*/,"").trim();if(C.indexOf("事件ID")>=0){C.split("｜").forEach(N=>{const w=N.search(/[：:]/);if(w<0)return;const F=N.slice(0,w).trim(),E=N.slice(w+1).trim();if(F==="事件ID")r.ids.push(E);else if(F==="触发月份"||F==="触发时间"){const R=E.match(/M(\d+)/);R&&(r.month=Number(R[1]))}else if(F==="触发条件"){/新游戏开始|开始游戏/.test(E)&&(r.kind="prologue");const R=bt(E);R&&(r.cond=R)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(C))continue;if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(C)){x({t:"scene",text:C.replace(/^场景\s*[：:]\s*/,"")}),I&&x({t:"nar",text:I});continue}const U=C.match(/^CG\s*[：:]\s*(.+)$/i);if(U){x({t:"cg",key:U[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(C)){x({t:"cgend"});continue}const ee=C.match(/^分支([A-Z])(?:[：:](.*))?$/);if(ee&&a){const Y=ee[1].charCodeAt(0)-65;for(;a.options.length<=Y;)a.options.push({label:"选项"+String.fromCharCode(65+a.options.length),hint:"",gains:[],branch:[]});u=a.options[Y],s="branch",c=null,I&&x({t:"nar",text:yt(I)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(C)){s="main",c=null,a&&(i=a.after),I&&x({t:"nar",text:I});continue}const P=C.match(/^高养成解锁分支[：:]\s*(.*)$/),Q=C.match(/^普通保底分支[：:]\s*(.*)$/);if(P||Q){if(P)c=null,d={t:"cond",test:bt(P[1])||{},then:[],else:[]},f=d,t.push(d),s="then";else{const Y=f&&f.else.length===0?f:null;Y?(d=Y,s="else"):s="main"}continue}if(/^若/.test(C)){const Y=bt(C);Y&&(d={t:"cond",test:Y,then:[],else:[]},t.push(d),c=d,s="inline",v=0,m=!1,I&&Qt(I,y()));continue}const J=C.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);if(J){const Y=bt(J[1]),N=J[1].replace(/[（(]\s*若[^）)]*[）)]/g,"").trim();x({t:"act",text:N,test:Y||null}),I&&x({t:"nar",text:I});continue}I&&x({t:"nar",text:I});continue}const B=O.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(B&&/协助|结局|相册|档案/.test(B[2])){s="main",c=null,x({t:"scene",text:B[2].replace(/[：:]\s*$/,"")});continue}if(s==="inline"&&c){const C=[];Qt(O,C);const I=C[0],U=I&&I.t==="nar";if(m&&v>0&&U){s="main",c=null,Qt(O,i),m=!1;continue}C.forEach(ee=>c.then.push(ee)),m&&(v+=1),m=!1;continue}Qt(O,y()),m=!1}return a&&a.options.forEach(k=>{k.branch.length||(k.branch=[])}),r.title=n.title||"",{beats:mu(t),meta:r}}function mu(e){const n=[];let t=0;for(;t<e.length;){const r=e[t];if(r.t==="act"&&r.test){let s=t+1;for(;s<e.length&&e[s].t!=="act";)s++;n.push({t:"cond",test:r.test,then:e.slice(t,s),else:[]}),t=s}else n.push(r),t++}return n}function vu(e){const n=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);return n?lt[n[1]]:""}function gu(e){const n={level:1,text:"",lines:[],children:[]},t=[n];for(const r of e.split(/\r?\n/)){const s=r.match(/^(#{1,4})\s+(.*)$/);if(s){const i=s[1].length;for(;t.length>1&&t[t.length-1].level>=i;)t.pop();const a={level:i,text:s[2].trim(),lines:[],children:[]};t[t.length-1].children.push(a),t.push(a)}else t[t.length-1].lines.push(r)}return n}function _u(e){const n=gu(e),t=[],r={},s={},i={},a={},u={},d=[];let f=0;const c=y=>(y.order=f++,t.push(y),y),v=[];for(const y of n.children)y.level===1?v.push(...y.children):v.push(y);for(const y of v){const x=y.text||"";if(/^序幕/.test(x)){const{beats:k,meta:O}=$n(y.lines,{title:"序幕 · 回家"});c({id:O.ids[0]||"EVT_PROLOGUE_01",ids:O.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:k});continue}if(/^第[一二三四五六]章/.test(x)){for(const k of y.children){const O=k.text,q=/结算/.test(O)&&/(月末|目标)/.test(O),K=O.match(/M(\d+)/),B=K?Number(K[1]):null;if(q&&!K)continue;if(q){const P=$o(O,B),Q=$n(k.lines,{title:O}),J=Q.beats;if(Q.meta.ids.length&&c({id:Q.meta.ids[0],ids:Q.meta.ids,title:Xt(O),chapter:x,month:B,kind:"main",test:Q.meta.cond,beats:J}),!P)continue;r[P]=r[P]||{pass:[],failId:"",failBeats:[]};for(const Y of k.children){const N=er(Y.text);if(!N)continue;const w=$n(Y.lines,{title:Y.text});N==="pass"?r[P].pass=w.beats:(r[P].failBeats=w.beats,r[P].failId=w.meta.ids[0]||"",w.meta.ids.length&&c({id:w.meta.ids[0],ids:w.meta.ids,title:Eo(Y.text,w.beats),chapter:x,month:null,kind:"short",test:null,beats:w.beats}))}continue}const{beats:C,meta:I}=$n(k.lines,{title:O});if(!I.ids.length)continue;let U=I.cond,ee=B??I.month;U&&!ee&&(ee=I.month);for(const P of k.children){if(er(P.text))continue;const Q=$n(P.lines,{title:P.text});Q.beats.length&&(C.push({t:"scene",text:P.text.replace(/^【|】$/g,"")}),C.push(...Q.beats))}if(c({id:I.ids[0],ids:I.ids,title:Xt(O),chapter:x,month:ee,kind:"main",test:U,beats:C}),k.children.length){const P=$o(O,ee),Q=k.children.filter(J=>er(J.text));if(P&&Q.length){r[P]=r[P]||{pass:[],failId:"",failBeats:[]};for(const J of Q){const Y=er(J.text),N=$n(J.lines,{title:J.text});Y==="pass"?r[P].pass=N.beats:(r[P].failBeats=N.beats,r[P].failId=N.meta.ids[0]||"",N.meta.ids.length&&c({id:N.meta.ids[0],ids:N.meta.ids,title:Eo(J.text,N.beats),chapter:x,month:null,kind:"short",test:null,beats:N.beats}))}}}}continue}if(/^附篇一/.test(x)){for(const k of y.children){const{beats:O,meta:q}=$n(k.lines,{title:k.text}),K=q.cond||bt(k.text)||{};c({id:q.ids[0]||"EVT_STYLE_"+f,ids:q.ids,title:Xt(k.text),chapter:x,month:null,kind:"style",test:K,beats:O})}continue}if(/^附篇二/.test(x)){for(const k of y.children){const O=k.text.match(/^M(\d+)\s*[｜|]\s*(.+)$/);if(!O)continue;const q=Number(O[1]),K=k.lines.filter(U=>!/^\*\*第.+章互动/.test(U.trim())),B=$n(K,{title:O[2]}),C=B.meta.ids[0]||"EVT_FRIEND_M"+q,I={id:C,ids:B.meta.ids.length?B.meta.ids:[C],title:O[2],chapter:"与苏晴的每月互动",month:q,kind:"friend",test:null,beats:B.beats};s[q]=I,c(I)}continue}if(/^第十三章/.test(x)){for(const k of y.children){if(/^13\.7/.test(k.text)){for(const K of k.children){const B=bu(K.text);if(!B)continue;const C=[];for(const I of K.lines){const U=I.trim(),ee=U.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);ee?C.push({title:ee[1],text:(ee[2]||"").trim()}):C.length&&U&&!/^[-*#]/.test(U)&&(C[C.length-1].text+=U)}C.length&&(u[B]=C)}continue}const{beats:O,meta:q}=$n(k.lines,{title:k.text});q.ids.length&&c({id:q.ids[0],ids:q.ids,title:Xt(k.text),chapter:x,month:null,kind:"final",test:null,beats:O})}continue}if(/^第十四章/.test(x)){for(const k of y.children)for(const O of k.lines){const q=O.trim(),K=q.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(K){const I=K[3].replace(/`/g,"").trim().replace(/^cake-/,"");I&&(i[I]={hint:K[4].trim(),flavor:K[5].trim()});continue}const B=q.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);B&&(a[B[1]]=B[2])}continue}}t.length||d.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const m={events:t,stages:r,friend:s,codex:i,cityText:a,partnerEndings:u,warnings:d};return m.find=y=>t.find(x=>x.id===y||(x.ids||[]).includes(y))||null,m}function Xt(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function Eo(e,n){const t=e.match(/《(.+?)》/);if(t)return t[1];const r=n.find(s=>s.t==="nar");return r?r.text.slice(0,12):e}function er(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function $o(e,n){const t=e.match(/第([一二三四五六])阶段/);return t?fu[t[1]]:n?Math.ceil(n/6):null}function bu(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐鸢/.test(e)?"kexin":/叶星河/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}const Te=_u(uu);if(typeof console<"u"){const e={};Te.events.forEach(r=>e[r.kind]=(e[r.kind]||0)+1);let n=0,t=0;Te.events.forEach(r=>{(r.beats||[]).forEach(s=>{s.t==="choice"&&(n+=1,t+=s.options.length)})}),console.log("[剧情] 已加载 "+Te.events.length+" 个事件（"+Object.keys(e).map(r=>r+" "+e[r]).join("，")+"），友情互动 "+Object.keys(Te.friend).length+" 段，阶段结算 "+Object.keys(Te.stages).length+" 组，选择 "+n+" 处 / "+t+" 项"),Te.warnings.length&&Te.warnings.forEach(r=>console.warn("[剧情] "+r))}const yu=["清爽果香","绵甜柔和","醇厚浓香"],ku=["偏少","均衡","偏多"],xu=["简约点缀","日常装饰","丰富装饰"],Mu=[72,90,100],tl=[100,90,72],As={taro:{direction:1,ratio:0,process:1,theme:"做出绵软、微甜，又有清脆夹心的层次。",focus:"芋泥夹层要先冷却，薄脆尽量靠近售卖时再组合。",ratioLabel:"芋泥甜度",processes:["趁热把薄脆拌进芋泥","芋泥冷却后分层夹入薄脆","把薄脆压碎拌入奶油"],distractors:["蜜红豆","轻盈慕斯"]},matcha:{direction:0,ratio:0,process:1,theme:"让茶香清新微苦，红豆甜味恰好托住回甘。",focus:"抹茶少量多次加入，避免高温久烤带出苦味。",ratioLabel:"抹茶用量",processes:["一次加入全部抹茶并延长烘烤","分次拌入抹茶并缩短烘烤","先加红豆再用热奶油冲抹茶"],distractors:["台农芒果泥","动物奶油"]},mango:{direction:0,ratio:1,process:2,theme:"突出成熟芒果的清香，同时保留慕斯的轻盈。",focus:"尝过果泥再调甜度，冷藏定型后再装饰。",ratioLabel:"果泥与慕斯比例",processes:["慕斯远多于果泥","果泥和慕斯大致平衡","大量果泥直接拌入温热慕斯"],distractors:["蜜红豆","轻奶油"]},tiramisu:{direction:2,ratio:1,process:1,theme:"咖啡香醇厚，但奶酪仍要保留轻柔回甘。",focus:"手指饼干快速蘸取咖啡液，留住内部结构。",ratioLabel:"咖啡液浓度",processes:["让饼干长时间浸泡","快速蘸取后分层冷藏","用咖啡液直接冲入奶酪"],distractors:["可可胚","金桂冻"]},fig:{direction:0,ratio:0,process:2,theme:"让无花果的清甜成为主角，奶油只做轻柔衬托。",focus:"选熟度合适的无花果，最后轻放在冷却奶油上。",ratioLabel:"无花果用量",processes:["无花果和奶油长时间打发","烤前放入无花果","奶油冷却后再铺鲜果"],distractors:["浓缩咖啡液","高山秋栗"]},seasonal:{direction:0,ratio:1,process:1,theme:"让当季水果有层次，甜度不盖住果香。",focus:"按季节更换鲜果，果肉与夹心分层组合。",ratioLabel:"鲜果与夹心比例",processes:["将所有水果打成同一层果泥","保留果肉并与夹心分层","增加糖浆并把水果提前烤干"],distractors:["传统红曲","蜜红豆"]},custom:{direction:1,ratio:1,process:0,theme:"按顾客想要的口味设计，同时保证切分时结构稳定。",focus:"先确认承重胚，再固定夹层和手工裱花。",ratioLabel:"夹层与蛋糕胚比例",processes:["使用双层承重胚，逐层固定裱花","把全部夹层叠在单层软胚上","先装饰外层再填入夹心"],distractors:["金桂冻","波姬红无花果"]},festival:{direction:1,ratio:1,process:2,theme:"在节日氛围里保留熟悉的团圆风味。",focus:"传统红曲或栗蓉搭配节庆装饰，出炉冷却后再包装。",ratioLabel:"馅料与蛋糕胚比例",processes:["热蛋糕出炉后立刻装入礼盒","把装饰和馅料一同长时间烘烤","冷却定型后装饰并包装"],distractors:["鲜草莓","浓缩咖啡液"]},signature:{direction:2,ratio:0,process:1,theme:"复原外婆的桂花栗子蛋糕，让秋栗醇厚、金桂清雅。",focus:"栗子甜则少放糖，桂花冻冷却后分层夹入，装盒前现撒金桂。",ratioLabel:"额外糖量",processes:["趁热把金桂干花拌进栗子泥","桂花冻冷却后作为独立夹层","桂花冻趁热浸入戚风胚"],distractors:["桂花蜜","动物奶油"]}},ds={plain:{question:"原味奶油蛋糕切开后有些干，奶油也盖住了戚风的香气。",options:["增加糖浆并厚涂奶油","缩短烘烤，并减薄奶油层","延长烘烤，让外皮更脆"],correct:1,feedback:"先守住戚风的湿润度，再让奶油薄薄衬托。"},strawberry:{question:"顾客觉得奶油有些腻，草莓的酸甜味不够明显。",options:["减少奶油，增加草莓夹层","延长蛋糕胚烘烤时间","改变表面装饰颜色"],correct:0,feedback:"把奶油减薄，并增加草莓果味层。"},chocolate:{question:"巧克力蛋糕入口偏苦，回味也显得厚重。",options:["加入更多纯可可粉","减少甘纳许并调和可可浓度","增加烘烤时间让水分散尽"],correct:1,feedback:"适当收住甘纳许和可可的浓度，保留香气即可。"},taro:{question:"芋泥薄脆放一会儿就不脆了。",options:["把薄脆提前拌进热芋泥","芋泥冷却后分层，临近售卖再组合","把薄脆泡进奶油里"],correct:1,feedback:"减少水分接触，让薄脆临近售卖时再入层。"},matcha:{question:"抹茶的苦味有些突出，蜜红豆也不明显。",options:["增加红豆层并略减抹茶","增加抹茶粉并减少红豆","把红豆打成糖浆淋面"],correct:0,feedback:"略减抹茶浓度，让蜜红豆的甜味接住茶香。"},mango:{question:"芒果慕斯吃起来偏腻，果香不够明亮。",options:["增加慕斯比例","使用成熟芒果泥并平衡慕斯比例","延长烘烤芒果泥的时间"],correct:1,feedback:"用熟芒果的果香提亮口味，保持慕斯轻盈。"},tiramisu:{question:"提拉米苏底层的手指饼干湿软散开了。",options:["延长咖啡浸泡时间","快速蘸咖啡液后立即分层冷藏","增加咖啡液并拌入奶酪"],correct:1,feedback:"饼干快速蘸取咖啡液即可，避免吸水过多。"},fig:{question:"无花果奶油看起来漂亮，但吃不出鲜果香。",options:["增加奶油厚度","烘烤时加入更多无花果","冷却后铺上新鲜无花果"],correct:2,feedback:"最后加入新鲜果肉，保留无花果的香气和口感。"},seasonal:{question:"季节水果蛋糕层次混在一起，果味不够清楚。",options:["保留果肉并和夹心分层","把水果全部打成泥","增加糖浆覆盖水果"],correct:0,feedback:"保留果肉口感，再用独立夹层表现季节变化。"},custom:{question:"生日定制蛋糕切分时夹层容易倾斜。",options:["改用双层承重胚并逐层固定","增加顶部裱花重量","使用单层软胚并增加夹心"],correct:0,feedback:"先稳定承重结构，再逐层填入夹心和装饰。"},festival:{question:"节日限定蛋糕节庆感很足，味道却有些平淡。",options:["增加礼盒装饰层数","选择红曲或栗蓉馅料，冷却后再包装","延长礼盒内的回温时间"],correct:1,feedback:"用红曲或栗蓉明确节日风味，并在冷却后包装。"},signature:{question:"栗子甜度合适，但桂花香气不够鲜明。",options:["增加糖量并提前烤入桂花","桂花冻冷却分层，装盒前现撒金桂","把桂花干花打碎混进戚风胚"],correct:1,feedback:"沿用外婆手记：桂花冻冷却分层，装盒前再现撒金桂。"}};function br(e){return[...new Set(Array.isArray(e)?e:[])].sort()}function rl(e,n){const t=br(n);return(Qi[e]||[]).some(r=>{const s=br(r);return s.length===t.length&&s.every((i,a)=>i===t[a])})}function Eu({coreCorrect:e,directionCorrect:n,ratioOffset:t,processCorrect:r,decoration:s}){const i=[];return e||i.push("核对图鉴中的核心食材，选齐后再做风味判断。"),n||i.push("风味方向和产品主题不太协调。"),t&&i.push("调整主料比例，让主要食材的味道更突出。"),r||i.push("工艺还需要照顾这款蛋糕的口感结构。"),s===2&&i.push("装饰丰富，外观加分；制作成本也相应提高。"),s===0&&i.push("简约装饰控制了成本，可以再考虑提升展示效果。"),i.length||i.push("四项都很协调，可以考虑正式上架。"),i}function $u(e,n){const t=As[e];if(!t)return null;const r=rl(e,n.ingredients),s=n.direction===t.direction,i=Math.abs(n.ratio-t.ratio),a=n.process===t.process,u=n.decoration;if(![0,1,2].includes(n.direction)||![0,1,2].includes(n.ratio)||![0,1,2].includes(n.process)||![0,1,2].includes(u))return null;const d=Math.max(0,(s?100:65)-i*15-(r?0:45)),f=a?100:60,c=Mu[u],v=tl[u],m=Math.round((d+f+c+v)/4);return{type:"development",productId:e,ingredients:br(n.ingredients),direction:n.direction,ratio:n.ratio,process:n.process,decoration:u,coreCorrect:r,scores:{flavor:d,texture:f,appearance:c,cost:v},score:m,passed:r&&m>=75,refined:r&&m>=90,feedback:Eu({coreCorrect:r,directionCorrect:s,ratioOffset:i,processCorrect:a,decoration:u})}}function wu(e){if(!e||![0,1,2].includes(e.sugar)||![0,1,2].includes(e.filling)||![0,1,2].includes(e.garnish))return null;const n=rl("signature",e.ingredients),t=e.sugar===0,r=e.filling===1,s=e.garnish===2,i={flavor:Math.max(0,(t?100:60)-(n?0:45)),texture:r?100:55,appearance:s?100:65,cost:n?90:65},a=Math.round(Object.values(i).reduce((d,f)=>d+f,0)/4),u=[];return n||u.push("请按手记选齐高山秋栗、金桂冻和戚风胚。"),t||u.push("甜栗本身够甜时，要减少额外糖量。"),r||u.push("桂花冻冷却后单独夹入，才能保留清楚的层次。"),s||u.push("装盒前现撒金桂，香气会更鲜明。"),u.length||u.push("外婆手记的风味与做法都复原了。"),{type:"signature",productId:"signature",ingredients:br(e.ingredients),sugar:e.sugar,filling:e.filling,garnish:e.garnish,coreCorrect:n,scores:i,score:a,passed:n&&t&&r&&s&&a>=75,refined:n&&t&&r&&s&&a>=90,feedback:u}}function wo(e){const n=As[e];return[...new Set([...(Qi[e]||[]).flat(),...(n==null?void 0:n.distractors)||[]])]}function Cu(e){return ds[e]||null}const sl="alb-save-v6",yr=5,ol=60,il=40;function Zn(){return{v:6,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,friendship:20,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,stock:60,devices:{},shelf:{},plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],decorations:[],regularCustomers:{chen:{purchases:0,lastPurchaseDay:0,stories:[]},zhang:{purchases:0,lastPurchaseDay:0,stories:[]}},runEndings:[],career:{products:["plain","strawberry","chocolate"],photos:[],decorations:[],endings:[],labReports:{},newGamePlusRuns:0},labPending:null,newGamePlus:!1,doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,monthSnap:{rep:20,unlocked:[],skill:{}},helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],photos:[],log:[],phase:"playing",ending:null,acquired:!1,friendMonth:0,autoStory:!1,stage:1,report:null}}const o=ft(Zn()),rn=ft({events:[]});function Rr(e){return o.devices[e]||0}function Sn(e){const n=Ss(e),t=Rr(e);return t&&n?n.tiers[t-1].value:0}function ll(e){const n=Ss(e),t=Rr(e);return n&&t<n.tiers.length?n.tiers[t]:null}function Tu(e){const n=ll(e);return!n||o.cash<n.cost?!1:(o.cash-=n.cost,o.devices[e]=Rr(e)+1,o.monthCost+=n.cost,_e("升级了"+Ss(e).name+"，"+n.text,"good"),Me(),!0)}const al=G(()=>Ye.filter(e=>o.unlocked.includes(e.id))),Pn=G(()=>o.stamina+ol+o.staff.length*il+Sn("oven")),fs=G(()=>Math.min(4,o.decorations.length));function cl(){return Is.filter(e=>o.month>=e.month&&o.day===e.day)}function Iu(e){cl().forEach(n=>{const t=o.regularCustomers[n.id];if(!e[n.product]||t.lastPurchaseDay===o.dayIndex)return;t.purchases+=1,t.lastPurchaseDay=o.dayIndex;const r=t.purchases===1?0:t.purchases===3?1:-1;r>=0&&!t.stories.includes(r)?(t.stories.push(r),_e(n.name+"和你聊起了老街坊的故事","story")):_e(n.name+"买走了一份"+Be(n.product).name)})}function ul(e){return Xi[o.prices[e]||"std"]}function qt(e){const n=Be(e),t=o.levels[e]||1;return Math.round(n.price*ul(e).priceMul*(1+(t-1)*.05)*(1+Sn("cashier")))}function dl(e){const n=Be(e),t=o.levels[e]||1,r=.7+o.reputation/200+o.popularity/200+o.loyalty/250+o.brand/300;return Math.max(0,Math.round(n.demand*r*ul(e).demandMul*(1+(t-1)*.06)*(1+(o.storeCount-1)*.7)*(1+fs.value*.02)*(1+Sn("display"))))}const fl=G(()=>700+o.shopLevel*180+o.staff.length*500),Fr=G(()=>au(o.month)),Fn=G(()=>{const e=Fr.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const n=e.goals.map(t=>({text:t.text,done:t.check(o),expand:!!t.expand}));return{done:n.filter(t=>t.done).length,need:e.need,list:n}});function hl(){let e=0;for(const n of Object.keys(o.plan))e+=o.plan[n]*Be(n).diff;return e}function Me(){try{Ds(),localStorage.setItem(sl,JSON.stringify(o))}catch{}}function Su(){try{const e=localStorage.getItem(sl);if(!e)return!1;const n=JSON.parse(e);return n.v!==6?!1:(Object.keys(Zn()).forEach(t=>{n[t]!==void 0&&t!=="regularCustomers"&&t!=="career"&&(o[t]=n[t])}),o.regularCustomers=Object.fromEntries(Is.map(t=>[t.id,{...Zn().regularCustomers[t.id],...(n.regularCustomers||{})[t.id]}])),o.career={...Zn().career,...n.career||{}},o.career.labReports={...Zn().career.labReports,...(n.career||{}).labReports||{}},Ds(),!0)}catch{return!1}}function pl(){const e={...Ds()};Object.assign(o,Zn()),o.career=e,rn.events.length=0,o.monthSnap={rep:o.reputation,unlocked:o.unlocked.slice(),skill:Object.assign({},o.partnerSkill)},Lr(),Me()}function Ds(){const e=o.career||Zn().career;return e.products=[...new Set([...e.products||[],...o.unlocked||[]])],e.photos=[...new Set([...e.photos||[],...o.photos||[]])],e.decorations=[...new Set([...e.decorations||[],...o.decorations||[]])],o.phase==="ended"&&o.ending&&o.ending.key&&(o.runEndings=[...new Set([...o.runEndings||[],o.ending.key])],e.endings=[...new Set([...e.endings||[],o.ending.key])]),o.career=e,e}function ml(e,n,t){const r=o.career.labReports[e]||{};o.career.labReports[e]={...r,[n]:{...t,run:(o.career.newGamePlusRuns||0)+1,month:o.month}}}function $e(e,n){return{ok:e,message:n}}function Co(e){if(o.phase!=="playing")return $e(!1,"当前不能进行实验。");if(o.labPending)return $e(!1,"请先处理上次试吃结果。");if(o.ap<2)return $e(!1,"至少需要 2 点行动力：试吃消耗 1 点，合格后上架还需 1 点。");if(o.stock<1)return $e(!1,"原料不足，先采购原料。");const n=e&&e.productId,t=Ye.find(s=>s.id===n);if(!t||o.unlocked.includes(n)||t.month<=0||t.month>o.month)return $e(!1,"这款产品还未开放研发，或已经上架。");if(n==="signature"&&(!e||e.type!=="signature"))return $e(!1,"桂花栗子蛋糕需要进入 M26 专属复原。");const r=n==="signature"?wu(e):$u(n,e||{});return r?(o.ap-=1,o.stock-=1,o.labPending=r,_e("试做「"+t.name+"」消耗 1 点行动力和 1 份原料","story"),Me(),$e(!0,"试吃完成。")):$e(!1,"实验参数不完整，请检查每一项选择。")}function Au(){const e=o.labPending;if(o.phase!=="playing"||!e||!e.passed)return $e(!1,"这份试吃结果还未达到上架要求。");if(o.ap<1)return $e(!1,"行动力不足；试吃结果已保存，明天可以继续。");const n=Ye.find(t=>t.id===e.productId);return!n||n.month>o.month||o.unlocked.includes(e.productId)?$e(!1,"产品状态已变化，请返回实验室确认。"):(o.ap-=1,o.unlocked.push(n.id),o.levels[n.id]=e.refined?1.5:1,ml(n.id,"development",{...e,type:e.type==="signature"?"signature":"development",feedback:e.type==="signature"?["外婆配方复原成功，桂香与秋栗的层次都找回来了。"]:e.feedback}),o.labPending=null,_e("「"+n.name+"」研发完成并正式上架，"+(e.refined?"精制品质，熟练度 Lv1.5":"熟练度 Lv1"),"good"),Me(),$e(!0,n.name+(e.type==="signature"?"复原成功，已加入菜单。":"已正式上架。")))}function To(){return o.labPending?(o.labPending=null,Me(),!0):!1}function Du(e,n){if(o.phase!=="playing")return $e(!1,"当前不能进行改良。");const t=Ye.find(a=>a.id===e),r=Cu(e);if(!t||!r||!o.unlocked.includes(e))return $e(!1,"这款产品目前不能改良。");const s=o.levels[e]||1;if(s>=5)return $e(!1,"这款产品已达到熟练度上限。");if(!Number.isInteger(n)||n<0||n>=r.options.length)return $e(!1,"请选择一个改良方案。");if(o.ap<2)return $e(!1,"至少需要 2 点行动力完成一次改良。");if(o.stock<1)return $e(!1,"原料不足，先采购原料。");if(o.ap-=1,o.stock-=1,n!==r.correct){const a="这次试吃没有解决问题。"+r.feedback;return _e("改良「"+t.name+"」未通过试吃，消耗了 1 份原料","story"),Me(),{...$e(!1,a),retry:!0,feedback:a}}o.ap-=1,o.levels[e]=Math.min(5,s+1),o.style.innovation+=3;const i={type:"improvement",score:100,levelBefore:s,levelAfter:o.levels[e],feedback:[r.feedback]};return ml(e,"improvement",i),_e("改良「"+t.name+"」成功，熟练度提升至 Lv"+o.levels[e],"good"),Me(),{...$e(!0,r.feedback),feedback:r.feedback,level:o.levels[e]}}function Nu(){return o.phase!=="ended"||!o.ending?!1:(pl(),o.newGamePlus=!0,o.career.newGamePlusRuns=(o.career.newGamePlusRuns||0)+1,Me(),!0)}function Ou(){if(o.phase!=="playing")return!1;const e=o.month;for(;o.month===e&&o.phase==="playing";)_l("waste");return o.month!==e}function Ru(){const e=dt.find(n=>!n.final&&n.short.key===(o.ending&&o.ending.key));return o.phase!=="ended"||!e?!1:(o.phase="playing",o.ending=null,o.stamina=o.maxStamina,Lr(),Ns(),Me(),!0)}function Fu(e){const n=Ts.find(t=>t.id===e);return!n||o.phase!=="playing"||o.decorations.includes(e)||o.shopLevel<n.shopLevel||o.cash<n.cost?!1:(o.cash-=n.cost,o.monthCost+=n.cost,o.decorations.push(e),_e("添置了"+n.name+"，店铺舒适度 +1","good"),Me(),!0)}function _e(e,n){o.log.unshift({month:o.month,day:o.day,text:e,tone:n||"normal"}),o.log.length>60&&o.log.pop()}function xe(e){return Math.max(0,Math.min(100,e))}function Lu(e){const n=[];for(const t of e)if(t.kind==="num"){const r=t.value;switch(t.key){case"资金":o.cash=Math.max(0,o.cash+r);break;case"口碑":o.reputation=xe(o.reputation+r);break;case"知名度":o.popularity=xe(o.popularity+r);break;case"友情值":o.friendship=xe(o.friendship+r);break;case"门店":o.storeCount=Math.max(1,o.storeCount+r);break;case"员工":r>0&&Hu();break;case"烘焙":Pu(r*.2);break;case"品质":Vu(r*.05);break}n.push(t.key+(r>=0?"+":"")+r)}else t.key==="配方"?o.unlocked.includes(t.value)||(o.unlocked.push(t.value),n.push("解锁「"+Be(t.value).name+"」")):t.key==="照片"&&(o.photos.includes(t.value)||(o.photos.push(t.value),n.push("获得纪念照片")));return n}function Pu(e){const t=o.unlocked.slice().sort((r,s)=>(o.levels[r]||1)-(o.levels[s]||1))[0];t&&(o.levels[t]=Math.min(5,(o.levels[t]||1)+e))}function Vu(e){o.unlocked.forEach(n=>{o.levels[n]=Math.min(5,(o.levels[n]||1)+e)})}function ju(e){const n=[];for(const t of e||[]){switch(t.k){case"style":o.style[t.id]=(o.style[t.id]||0)+t.v;break;case"trust":if(!t.id)break;o.partnerTrust[t.id]=xe((o.partnerTrust[t.id]||0)+t.v);break;case"skill":if(!t.id)break;o.partnerSkill[t.id]=Math.min(5,Math.round(((o.partnerSkill[t.id]||1)+t.v)*10)/10);break;case"loyalty":o.loyalty=xe(o.loyalty+t.v);break;case"friend":o.friendship=xe(o.friendship+t.v);break}t.label&&n.push(t.label)}return n}function Bu(e,n,t){const r=ju(n.gains);return e&&e.node==="13.6"&&t===1&&(o.acquired=!0),r.length&&_e("选择："+n.label+"（"+r.join("，")+"）","story"),Me(),r}function vl(e){if(!e||o.staff.includes(e))return;o.staff.push(e),o.partnerTrust[e]===void 0&&(o.partnerTrust[e]=10),o.partnerSkill[e]===void 0&&(o.partnerSkill[e]=1);const n=ut(e);n&&_e(n.name+" 加入了林记","story")}function Hu(){const e=ct.find(n=>!o.staff.includes(n.id)&&n.joinMonth<=o.month);e&&vl(e.id)}function gl(){return o.staff.map(e=>ut(e)).filter(Boolean)}const Io={feedback:5,market:3,talk:2,train:5};function qu(e){const n=o.cd[e]||0;return Math.max(0,n-o.dayIndex)}function kr(e){switch(e){case"restock":{const n=o.newGamePlus?300:600;return{name:"原料采购",ap:1,cost:n,note:(o.newGamePlus?"二周目优惠，":"")+"原料 +"+(12+Sn("warehouse"))+" 份",disabled:o.cash<n}}case"feedback":{const n=qu("feedback");return{name:"顾客反馈",ap:1,cost:0,note:n>0?"还要等 "+n+" 天":"口碑 +1，忠诚 +2",disabled:n>0}}case"talk":{const n=o.staff.length?gl()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:n?"和 "+n+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"sqchat":{const n=o.friendMonth===o.month;return{name:"与苏晴互动",ap:1,cost:0,note:n?"这个月已经聊过了":"本月专属剧情，友情 +3",disabled:n}}case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:o.cash<800};case"train":return o.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:o.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const n=_r.find(t=>t.lv===o.shopLevel+1);return n?{name:"装修到「"+n.name+"」",ap:2,cost:n.cost,note:"展示位与产能提升",disabled:o.cash<n.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const n=Pt.find(r=>!o.cities.includes(r.id)&&!o.surveyed.includes(r.id));if(!n)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const t=o.month>=n.month&&o.reputation>=n.rep;return{name:"考察"+n.name,ap:2,cost:2e3,note:t?"考察之后可以筹备开店":"需要第 "+n.month+" 个月、口碑 "+n.rep,disabled:!t||o.cash<2e3}}case"branch":{if(!o.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const n=Pt.find(t=>t.id===o.surveyed[0]);return{name:"在"+n.name+"开店",ap:3,cost:n.cost,note:"门店 +1",disabled:o.cash<n.cost}}default:return{name:e,ap:1,cost:0,note:""}}}function lr(e,n){if(o.phase!=="playing")return!1;const t=kr(e);if(t.disabled||o.ap<t.ap||t.cost&&o.cash<t.cost)return!1;const r=o.cash;switch(e){case"restock":{const s=12+Sn("warehouse");o.cash-=t.cost,o.stock+=s,_e("原料 +"+s+" 份");break}case"feedback":o.reputation=xe(o.reputation+1),o.loyalty=xe(o.loyalty+2),_e("认真听了顾客的意见，口碑上升");break;case"talk":if(n&&n.partner==="mom")o.momBond=xe(o.momBond+4),_e("和妈妈聊了一会儿，家庭默契 +4");else if(o.staff.length){const s=n&&n.partner?n.partner:o.staff[0];if(!o.staff.includes(s))return!1;o.partnerTrust[s]=xe((o.partnerTrust[s]||0)+6);const i=ut(s);_e("和 "+(i?i.nick:"伙伴")+" 聊了很久，信赖 +6")}else o.momBond=xe(o.momBond+4),_e("和妈妈聊了一会儿，家庭默契 +4");break;case"sqchat":{const s=Te.friend[o.month];if(!s)break;o.friendMonth=o.month,o.friendship=xe(o.friendship+3),o.autoStory=!0,nt(s),_e("和苏晴聊了一晚，友情 +3");break}case"market":o.cash-=800,o.popularity=xe(o.popularity+2),o.brand=xe(o.brand+1.5),_e("发了新品帖子，知名度上升");break;case"train":{if(!o.staff.length)return!1;const s=n&&n.partner?n.partner:o.staff[0];o.cash-=400,o.partnerSkill[s]=Math.min(5,(o.partnerSkill[s]||1)+1);const i=ut(s);_e("培训了 "+(i?i.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const s=_r.find(i=>i.lv===o.shopLevel+1);if(!s)return!1;o.cash-=s.cost,o.shopLevel=s.lv,o.maxAp=8+(s.ap||0),o.reputation=xe(o.reputation+3),o.style.community+=2,_e("店铺升级为「"+s.name+"」","good");break}case"survey":{const s=Pt.find(i=>!o.cities.includes(i.id)&&!o.surveyed.includes(i.id));if(!s)return!1;o.cash-=2e3,o.surveyed.push(s.id),_e("去"+s.name+"看了一圈，可以筹备开店了");break}case"branch":{const s=Pt.find(i=>i.id===o.surveyed[0]);if(!s)return!1;o.cash-=s.cost,o.storeCount+=1,o.cities.push(s.id),o.surveyed=o.surveyed.filter(i=>i!==s.id),o.brand=xe(o.brand+6),o.style.efficiency+=3,_e("在"+s.name+"开了新店","good");break}default:return!1}return o.ap-=t.ap,Io[e]&&(o.cd[e]=o.dayIndex+Io[e]),r>o.cash&&(o.monthCost+=r-o.cash),Me(),!0}function Ku(e,n){const t=Math.max(0,Math.min(99,Math.floor(n||0)));t===0?delete o.plan[e]:o.plan[e]=t}function Uu(){if(o.phase!=="playing")return{ok:!1,msg:"游戏已经结束了"};const e=Object.keys(o.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const n=e.reduce((i,a)=>i+o.plan[a],0);if(n>o.stock)return{ok:!1,msg:"原料不够，还差 "+(n-o.stock)+" 份"};const t=hl();if(t>Pn.value)return{ok:!1,msg:"产能不够。今天的产能是 "+Pn.value+" 点，还差 "+(t-Pn.value)};const r=ol+o.staff.length*il+Sn("oven"),s=Math.round(Math.max(0,t-r)*(1-Sn("mixer")));o.stock-=n,o.stamina=Math.max(0,o.stamina-s);for(const i of e)o.shelf[i]=(o.shelf[i]||0)+o.plan[i],o.dayMade+=o.plan[i],o.levels[i]=Math.min(5,(o.levels[i]||1)+o.plan[i]*.02);return _e("做了 "+n+" 个蛋糕，自己出了 "+s+" 点体力"),o.plan={},Me(),{ok:!0,msg:"做好了 "+n+" 个"}}function Wu(){o.orders=[];const e=.35+o.popularity/300,n=Math.random()<e?Math.random()<.35?2:1:0;for(let t=0;t<n;t++){const r=al.value;if(!r.length)break;const s=r[Math.floor(Math.random()*r.length)],i=Math.random(),a=i<.28,u=!a&&i<.66,d=!a&&!u&&i<.75,f=a?"定制":u?"线上":d?"节日":"普通",c=a?1:1+Math.floor(Math.random()*2);o.orders.push({id:"o"+o.month+"-"+o.day+"-"+t,type:f,product:s.id,qty:c,pay:Math.round(qt(s.id)*c*(a?1.6*(1+Sn("packing")):1.25)),taken:!1})}}function zu(e){const n=o.orders.find(t=>t.id===e);return n?(n.taken=!n.taken,Me(),!0):!1}function So(){if(o.phase!=="playing"||o.daySold>0||o.dayRev>0)return null;let e=0,n=0;const t={},r={};for(const s of o.orders){if(!s.taken)continue;const i=o.shelf[s.product]||0;i<s.qty||(o.shelf[s.product]=i-s.qty,e+=s.pay,n+=s.qty,t[s.product]=(t[s.product]||0)+s.qty,o.doneOrders+=1,s.type==="定制"&&(o.customOrders+=1),s.type==="线上"&&(o.onlineOrders+=1),s.type==="节日"&&(o.festivalOrders+=1),o.loyalty=xe(o.loyalty+2))}for(const s of Object.keys(o.shelf)){const i=o.shelf[s]||0;if(i<=0)continue;const a=Math.min(i,dl(s));o.shelf[s]=i-a,e+=a*qt(s),n+=a,t[s]=(t[s]||0)+a,r[s]=(r[s]||0)+a}return Iu(r),o.dayRev=e,o.daySold=n,o.monthRev+=e,Object.keys(t).forEach(s=>{o.monthSold[s]=(o.monthSold[s]||0)+t[s]}),n>0&&(o.reputation=xe(o.reputation+.06),o.loyalty=xe(o.loyalty+.1),o.popularity=xe(o.popularity+.05)),_e("今天卖出 "+n+" 个，收入 "+e,n>0?"good":"bad"),Me(),{rev:e,sold:n}}const hs={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function _l(e){const n=hs[e]||hs.discount;let t=0,r=0;for(const a of Object.keys(o.shelf))t+=o.shelf[a]||0,r+=(o.shelf[a]||0)*qt(a);let s=0;if(t>0){const a=n.cashRate>0?n.cashRate+Sn("fridge"):0;s=Math.round(r*a),o.cash+=s,n.community&&(o.style.community+=n.community*.3,o.reputation=xe(o.reputation+n.community*.05))}o.dayLeft=t,o.shelf={};const i={day:o.day,rev:o.dayRev,sold:o.daySold,left:t,gain:s};return o.dayRev=0,o.daySold=0,o.dayMade=0,Gu(),Me(),i}function Gu(){o.day+=1,o.dayIndex+=1,o.day>yr?(o.day=1,Yu()):Lr()}function Lr(){o.ap=o.maxAp,o.stamina=Math.min(o.maxStamina,o.stamina+70),o.plan={},o.shelf||(o.shelf={}),Wu(),Me()}function Yu(){const e=fl.value;o.monthCost+=e,o.cash+=o.monthRev-e;let n=null;o.cash<0&&(o.usedMomHelp?(o.cash=0,o.reputation=xe(o.reputation-2),n="这个月很难，勉强撑过去了"):(o.cash=3e3,o.usedMomHelp=!0,n="资金见底，妈妈先垫了一笔周转"),_e(n,"bad"));let t=null,r=0;Object.keys(o.monthSold).forEach(f=>{o.monthSold[f]>r&&(r=o.monthSold[f],t=f)});const s=o.monthSnap||{rep:o.reputation,unlocked:[],skill:{}},i=o.unlocked.filter(f=>s.unlocked.indexOf(f)<0),a=[];o.staff.forEach(f=>{const c=s.skill[f]||0,v=o.partnerSkill[f]||0;if(v-c>=.3){const m=ut(f);a.push((m?m.nick||m.name:f)+" 专业 +"+(v-c).toFixed(1))}}),o.report={month:o.month,rev:o.monthRev,cost:o.monthCost,net:o.monthRev-o.monthCost,best:t?Be(t).name:"—",bestN:r,warn:n,fresh:i.map(f=>(Be(f)||{}).name).filter(Boolean),repDelta:Math.round((o.reputation-s.rep)*10)/10,rep:Math.round(o.reputation),grown:a,trust:Object.keys(o.partnerTrust).map(f=>{const c=ut(f);return{name:c?c.nick||c.name:f,v:Math.round(o.partnerTrust[f]||0)}})},o.monthSnap={rep:o.reputation,unlocked:o.unlocked.slice(),skill:Object.assign({},o.partnerSkill)};const u=o.month;if(o.month+=1,o.monthRev=0,o.monthCost=0,o.monthSold={},o.shelf={},ct.forEach(f=>{f.joinMonth===o.month&&vl(f.id)}),u===29){const f=Object.values(o.partnerTrust).filter(c=>c>=70).length;o.helpers=f+(o.momBond>=70?1:0)}const d=dt.find(f=>f.to===u&&!f.final);if(d){const f=Te.stages[d.id];if(!Zu(d)){o.phase="ended",o.ending={...d.short,key:d.short.key,text:""},f&&f.failId&&nt(Te.find(f.failId)),_e("阶段目标没有达成","bad"),Me();return}o.stage=d.id+1,f&&f.pass.length&&nt({id:"STAGE_PASS_"+d.id,title:d.name+" · 阶段达成",chapter:d.name,kind:"stage",beats:f.pass}),_e("第 "+d.id+" 阶段目标达成","good")}if(o.month>36){o.month=36,o.phase="ended";const f=Qu();o.ending={...nl[f],key:f},nt(Te.find(Ju[f])),Me();return}o.stamina=o.maxStamina,Lr(),Ns()}const Ju={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function Zu(e){if(!e.goals.length)return!0;const n=e.goals.filter(t=>t.check(o));return!(n.length<e.need||e.needExpand&&!n.some(t=>t.expand))}function Qu(){if(o.acquired)return"transfer";if(o.storeCount>=6)return"national";if(o.storeCount>=3)return"regional";const e=o.style,n=Object.keys(e).sort((r,s)=>e[s]-e[r])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[n]||"community"}function nt(e){e&&(rn.events.find(n=>n.id===e.id)||rn.events.push(e))}function Ns(){const e=Te.events.filter(n=>!(n.kind!=="main"||o.played.includes(n.id)||n.month==null||o.month<n.month||n.test&&!us(n.test,o)));e.sort((n,t)=>n.month-t.month||n.order-t.order),e.forEach(nt),Te.events.filter(n=>n.kind==="style"&&!o.played.includes(n.id)&&us(n.test,o)).forEach(nt)}function Qr(){const e=Te.events.find(n=>n.kind==="prologue");e&&!o.played.includes(e.id)&&nt(e),Ns()}function Xu(e){(e.ids&&e.ids.length?e.ids:[e.id]).forEach(r=>{o.played.includes(r)||o.played.push(r)}),Lu(e.rewards||[]).length&&_e("剧情："+e.title,"story"),Me()}function Ao(e){const n=(Te.partnerEndings||{})[e];if(!n||!n.length)return null;if(n.length===1)return n[0];const t=o.partnerTrust[e]||0,r=o.partnerSkill[e]||0;return n.length>=4?t>=70&&r>=3?n[0]:t>=70?n[1]:r>=3?n[2]:n[3]:t>=70?n[0]:n[1]}const nn=(...e)=>e.join(","),xr={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:nn("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:nn("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:nn("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:nn("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:nn("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:nn("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:nn("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:nn("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:nn("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:nn("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:nn("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},ed=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/宿舍|卧室|家里|房间/,"home"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]],Do={1:"home",2:"shop",3:"kitchen",4:"shop",5:"shop",6:"market",7:"shop",8:"shop",9:"kitchen",10:"shop",11:"shop",12:"shop",13:"kitchen",14:"shop",15:"shop",16:"market",17:"street",18:"shop",19:"store",20:"shop",21:"shop",22:"store",23:"shop",24:"shop",25:"shop",26:"kitchen",27:"kitchen",28:"street",29:"market",30:"shop",31:"store",32:"street",33:"store",34:"store",35:"studio",36:"shop"},No={1:"shop",2:"street",3:"street",4:"shop",5:"park",6:"market",7:"night",8:"shop",9:"studio",10:"cafe",11:"studio",12:"shop",13:"kitchen",14:"shop",15:"street",16:"park",17:"street",18:"shop",19:"store",20:"street",21:"cafe",22:"night",23:"cafe",24:"studio",25:"street",26:"street",27:"kitchen",28:"shop",29:"park",30:"studio",31:"cafe",32:"street",33:"store",34:"studio",35:"school",36:"shop"};function nd(e){return e?e.kind==="main"&&Do[e.month]?Do[e.month]:e.kind==="friend"&&No[e.month]?No[e.month]:bl(e.title)||"shop":"shop"}function bl(e){const n=e||"";for(const[t,r]of ed)if(t.test(n))return r;return""}const Vt={林念:{in:"ln-sprite-in.webp",out:"ln-sprite-out.webp",face:"ln-face.webp"},苏晴:{in:"sq-sprite-in.webp",out:"sq-sprite-out.webp",face:"sq-face.webp"},林暖:{in:"nu-sprite-in.webp",out:"nu-sprite-out.webp",face:"nu-face.webp"},周雨桐:{in:"xy-sprite-in.webp",out:"xy-sprite-out.webp",face:"xy-face.webp"},许知遥:{in:"zy-sprite-in.webp",out:"zy-sprite-out.webp",face:"zy-face.webp"},唐鸢:{in:"ty-sprite-in.webp",out:"ty-sprite-out.webp",face:"ty-face.webp"},叶星河:{in:"xh-sprite-in.webp",out:"xh-sprite-out.webp",face:"xh-face.webp"}},Oo=Vt,td={shop:"in",kitchen:"in",store:"in",street:"out",home:"out",cafe:"out",market:"out",school:"out",park:"out",night:"out",studio:"out"};function rd(e){return td[e]||"out"}function yl(e,n){const t=Vt[e];if(!t)return"";if(ln(t[n])==="ok")return t[n];const r=n==="in"?"out":"in";return ln(t[r])==="ok"?t[r]:""}function ps(e,n){const t=yl(e,n||"out");return t?Ie(t):""}function sd(){Object.keys(Vt).forEach(e=>{const n=Vt[e];["in","out","face"].forEach(t=>ln(n[t]))}),Object.keys(xr).forEach(e=>ln(xr[e].img))}function Ro(e){const n=Vt[e];return n&&ln(n.face)==="ok"?Ie(n.face):""}function od(e,n){return!!yl(e,n||"out")}const id={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"}};function Os(e){const n=id[e],t=n?n.img:"cg-"+e+".webp";return{src:ln(t)==="ok"?Ie(t):"",name:n?n.name:e}}function ld(e){return!e||!e.img?"":ln(e.img)==="ok"?Ie(e.img):""}const yn=(e,n)=>{const t=e.__vccOpts||e;for(const[r,s]of n)t[r]=s;return t},ad={class:"vn"},cd=["src"],ud={key:0,class:"vn-cg"},dd=["src"],fd={class:"vn-cg-cap"},hd={class:"vn-cast"},pd=["src","alt"],md={class:"vn-top"},vd={class:"vn-titles"},gd={class:"vn-chapter"},_d={key:0,class:"vn-scene"},bd={key:1,class:"vn-scene"},yd={class:"vn-tools"},kd={key:0,class:"vn-choice"},xd={class:"vn-ask"},Md=["onClick"],Ed={class:"t"},$d={key:0,class:"r"},wd={key:1,class:"r"},Cd={key:0,class:"vn-note"},Td={key:0,class:"vn-name"},Id=["src"],Sd={key:1},Ad={class:"vn-text"},Dd={key:0,class:"caret"},Nd={class:"vn-foot"},Od={key:1,class:"vn-dot"},Rd={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:n}){const t=e,r=n,s=ce([]),i=ce(0),a=ce(0),u=ce(!1);let d=0,f=0;function c(oe){for(let me=0;me<oe.length;me++){const ne=oe[me].t;if(ne!=="scene"&&ne!=="cg"&&ne!=="cgend"&&ne!=="act")return me}return Math.max(0,oe.length-1)}const v=G(()=>s.value[i.value]||null),m=G(()=>i.value>=s.value.length-1),y=G(()=>!!v.value&&v.value.t==="choice"),x=G(()=>!!v.value&&v.value.t==="say"),k=G(()=>!!v.value&&v.value.t==="nar"),O=G(()=>v.value&&v.value.text||""),q=G(()=>O.value.slice(0,a.value)),K=G(()=>a.value<O.value.length),B=G(()=>{for(let oe=i.value;oe>=0;oe--)if(s.value[oe].t==="scene")return oe;return-1}),C=G(()=>B.value>=0?s.value[B.value]:null),I=G(()=>{for(let oe=i.value;oe>=0;oe--){if(s.value[oe].t==="act")return s.value[oe].text;if(s.value[oe].t==="scene")return""}return""}),U=G(()=>nd(t.ev)),ee=G(()=>{if(C.value){const oe=bl(C.value.text);if(oe)return oe}return U.value}),P=G(()=>xr[ee.value]||xr.shop),Q=G(()=>ld(P.value)),J=G(()=>rd(ee.value)),Y=G(()=>!!C.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(C.value.text)),N=G(()=>{let oe=-1;for(let me=i.value;me>=0;me--){const ne=s.value[me].t;if(ne==="cg"){oe=me;break}if(ne==="cgend")return""}return oe<0||oe<B.value?"":s.value[oe].key}),w=G(()=>N.value?Os(N.value):null),F={念念:"林念",小雨:"周雨桐",知遥:"许知遥",阿鸢:"唐鸢",鸢姐:"唐鸢",星河:"叶星河",妈妈:"林暖"},E=G(()=>{const oe=ne=>ne&&Oo[ne]&&od(ne,J.value);if(x.value&&oe(v.value.who))return[v.value.who];const me=v.value&&v.value.text||"";for(const ne of Object.keys(Oo))if(oe(ne)&&me.indexOf(ne)>=0)return[ne];for(const ne of Object.keys(F))if(me.indexOf(ne)>=0&&oe(F[ne]))return[F[ne]];for(let ne=i.value;ne>=0;ne--){const qe=s.value[ne];if(qe.t==="say"&&oe(qe.who))return[qe.who]}for(const ne of s.value)if(ne.t==="say"&&oe(ne.who))return[ne.who];return[]}),R=G(()=>x.value?v.value.who:"");Bn(()=>t.ev,()=>{s.value=ir(t.ev.beats||[],o),i.value=c(s.value),a.value=0,u.value=!1,pe()},{immediate:!0});function le(oe){return{left:"50%",zIndex:10+oe}}function pe(){if(clearInterval(d),a.value=0,y.value||!O.value){a.value=O.value.length;return}const oe=Math.max(1,Math.round(O.value.length/40));d=setInterval(()=>{a.value=Math.min(O.value.length,a.value+oe),a.value>=O.value.length&&clearInterval(d)},18)}Bn(()=>i.value,pe);function Xe(oe){let me=oe+1;for(;me<s.value.length;){const ne=s.value[me].t;if(ne==="scene"||ne==="cg"||ne==="cgend"||ne==="act")me++;else break}return Math.min(me,s.value.length-1)}function rt(){if(!y.value){if(K.value){a.value=O.value.length,clearInterval(d);return}m.value||(i.value=Xe(i.value))}}function kn(oe,me){Bu(v.value,oe,me);const ne=(oe.branch||[]).concat(v.value.after||[]);s.value.splice(i.value,1,...ne);let qe=Math.max(0,i.value-1);i.value=Xe(qe)}function He(){for(let oe=i.value+1;oe<s.value.length;oe++)if(s.value[oe].t==="choice"){i.value=oe;return}i.value=s.value.length-1,a.value=O.value.length}function Kt(){clearInterval(d),clearInterval(f),Xu(t.ev),r("done")}function Ut(){u.value=!u.value,clearInterval(f),u.value&&(f=setInterval(()=>{if(m.value){clearInterval(f),u.value=!1;return}if(y.value){clearInterval(f),u.value=!1;return}K.value?a.value=O.value.length:i.value=Xe(i.value)},1400))}return Mi(()=>{clearInterval(d),clearInterval(f)}),(oe,me)=>(g(),_("div",ad,[l("div",{class:ae(["vn-stage",{flash:Y.value}])},[l("div",{class:"vn-bg",style:De({background:P.value.css})},[Q.value?(g(),_("img",{key:0,src:Q.value,alt:"",class:"vn-bg-img"},null,8,cd)):z("",!0),me[0]||(me[0]=l("div",{class:"vn-veil"},null,-1))],4),Ne($c,{name:"cgfade"},{default:hi(()=>[w.value&&w.value.src?(g(),_("div",ud,[l("img",{src:w.value.src,alt:""},null,8,dd),l("div",fd,h(w.value.name),1)])):z("",!0)]),_:1}),l("div",hd,[(g(!0),_(W,null,te(E.value,(ne,qe)=>(g(),_("div",{key:ne,class:ae(["vn-actor",{dim:R.value&&R.value!==ne,off:!R.value}]),style:De(le(qe))},[l("img",{src:M(ps)(ne,J.value),alt:ne},null,8,pd)],6))),128))]),l("div",md,[l("div",vd,[l("div",gd,h(e.ev.title),1),I.value?(g(),_("div",_d,h(I.value),1)):C.value?(g(),_("div",bd,h(C.value.text),1)):z("",!0)]),l("div",yd,[l("button",{type:"button",class:ae({on:u.value}),onClick:Ln(Ut,["stop"])},"自动",2),l("button",{type:"button",onClick:Ln(He,["stop"])},"跳过")])]),y.value?(g(),_("div",kd,[l("div",xd,h(v.value.prompt),1),(g(!0),_(W,null,te(v.value.options,(ne,qe)=>(g(),_("button",{key:qe,type:"button",class:"vn-opt",onClick:Ln(Dn=>kn(ne,qe),["stop"])},[l("span",Ed,h(ne.label),1),ne.gains&&ne.gains.length?(g(),_("span",$d,h(ne.gains.map(Dn=>Dn.label).join(" · ")),1)):ne.hint?(g(),_("span",wd,h(ne.hint),1)):z("",!0)],8,Md))),128)),v.value.note?(g(),_("p",Cd,h(v.value.note),1)):z("",!0)])):(g(),_("div",{key:1,class:ae(["vn-box",{nar:k.value}]),onClick:rt},[x.value?(g(),_("div",Td,[M(Ro)(v.value.who)?(g(),_("img",{key:0,src:M(Ro)(v.value.who),alt:""},null,8,Id)):z("",!0),l("span",null,h(v.value.who),1),v.value.emo&&v.value.emo!=="视角"?(g(),_("em",Sd,h(v.value.emo),1)):z("",!0)])):z("",!0),l("div",Ad,[we(h(q.value),1),K.value?(g(),_("span",Dd)):z("",!0)]),l("div",Nd,[m.value&&!K.value?(g(),_("span",{key:0,class:"vn-end",onClick:Ln(Kt,["stop"])},"结束 ←")):(g(),_("span",Od,"▾"))])],2))],2)]))}},Fd=yn(Rd,[["__scopeId","data-v-3c4018b0"]]),Ld={class:"shop-hero"},Pd={class:"tag"},Vd=["src"],jd={class:"cap"},Bd={class:"small muted"},Hd={class:"card card-pad",style:{"margin-top":"12px"}},qd={class:"between",style:{"margin-bottom":"6px"}},Kd={class:"small"},Ud={class:"between",style:{"margin-bottom":"6px"}},Wd={class:"small"},zd={class:"between",style:{"margin-bottom":"6px"}},Gd={class:"small"},Yd={class:"between"},Jd={class:"small"},Zd={key:0,class:"card card-pad",style:{"margin-top":"12px"}},Qd={class:"dev-body"},Xd={class:"dev-name"},ef={class:"dev-desc"},nf={class:"dev-next"},tf={key:1,class:"card",style:{"margin-top":"12px"}},rf={style:{flex:"1 1 auto","min-width":"0"}},sf={style:{"font-size":"14px","font-weight":"600"}},of={class:"small muted"},lf=["onClick"],af={class:"card card-pad",style:{"margin-top":"12px"}},cf={class:"between",style:{"margin-bottom":"6px"}},uf={class:"small muted"},df={class:"dev-body"},ff={class:"dev-name"},hf={class:"chip",style:{"font-size":"10px"}},pf={class:"dev-desc"},mf=["disabled","onClick"],vf={class:"card card-pad",style:{"margin-top":"12px"}},gf={key:0},_f=["disabled"],bf={key:1},yf={class:"between",style:{"margin-bottom":"6px"}},kf={class:"small"},xf={class:"between",style:{"margin-bottom":"10px"}},Mf={class:"small"},Ef={key:0,class:"shelf-left"},$f={class:"small"},wf={class:"small muted"},Cf={key:2},Tf=["onClick"],If={class:"r"},Sf={class:"card card-pad",style:{"margin-top":"12px"}},Af={class:"dev-body"},Df={class:"dev-name"},Nf={class:"dots"},Of={class:"chip",style:{"font-size":"10px"}},Rf={class:"dev-desc"},Ff={key:0,class:"dev-next"},Lf={key:1,class:"dev-next"},Pf=["disabled","onClick"],Vf={class:"card card-pad",style:{"margin-top":"12px"}},jf={class:"k"},Bf={class:"track"},Hf={class:"v"},qf={__name:"ShopPage",emits:["closed"],setup(e,{emit:n}){const t=n,r=G(()=>su(o.shopLevel)),s=G(()=>Object.values(o.shelf||{}).reduce((y,x)=>y+x,0)),i=G(()=>o.dayRev>0||o.daySold>0),a=G(()=>Object.keys(o.shelf||{}).filter(y=>o.shelf[y]>0).map(y=>({id:y,name:Be(y).name,qty:o.shelf[y]}))),u=ce(!1),d=G(()=>{const y="shop-lv"+o.shopLevel+".webp";return ln(y)==="ok"?Ie(y):Ie("shop-exterior.webp")}),f=G(()=>el.map(y=>{const x=Rr(y.id);return{id:y.id,name:y.name,note:y.note,desc:y.desc,tier:x,now:x?y.tiers[x-1].text:"",next:ll(y.id)}})),c=G(()=>cl().map(y=>({...y,productName:Be(y.product).name,visit:o.regularCustomers[y.id]}))),v=G(()=>Ts.map(y=>({...y,owned:o.decorations.includes(y.id),available:o.shopLevel>=y.shopLevel})));function m(y){const x=_l(y);u.value=!1,t("closed",x)}return(y,x)=>(g(),_("div",null,[l("div",Ld,[l("span",Pd,h(r.value.name),1),l("img",{src:d.value,alt:"林记烘焙"},null,8,Vd),l("div",jd,[x[2]||(x[2]=l("div",{class:"n serif"},"林记烘焙",-1)),l("div",Bd,h(M(sr)(M(o).month))+" · 第 "+h(M(o).day)+" / "+h(M(yr))+" 个经营日 · 共 "+h(M(o).storeCount)+" 家店 ",1)])]),l("div",Hd,[x[7]||(x[7]=l("div",{class:"h2"},"今天",-1)),l("div",qd,[x[3]||(x[3]=l("span",{class:"small muted"},"产能（体力 + 妈妈 + 伙伴）",-1)),l("span",Kd,h(M(Pn))+" 点",1)]),l("div",Ud,[x[4]||(x[4]=l("span",{class:"small muted"},"原料库存",-1)),l("span",Wd,h(M(o).stock)+" 份",1)]),l("div",zd,[x[5]||(x[5]=l("span",{class:"small muted"},"待售成品",-1)),l("span",Gd,h(s.value)+" 个",1)]),l("div",Yd,[x[6]||(x[6]=l("span",{class:"small muted"},"本月固定成本",-1)),l("span",Jd,"¥"+h(M(fl)),1)])]),c.value.length?(g(),_("div",Zd,[x[8]||(x[8]=l("div",{class:"h2"},"今天的常客",-1)),(g(!0),_(W,null,te(c.value,k=>(g(),_("div",{key:k.id,class:"dev"},[l("div",Qd,[l("div",Xd,h(k.name)+" · 想买 "+h(k.productName),1),l("div",ef,h(k.preference),1),l("div",nf," 已买 "+h(k.visit.purchases)+" 次 · 当天自然客流卖出后计入档案 ",1)])]))),128))])):z("",!0),M(o).orders.length?(g(),_("div",tf,[x[9]||(x[9]=l("div",{class:"card-pad",style:{"padding-bottom":"2px"}},[l("div",{class:"h2",style:{margin:"0"}},[we("今日订单 "),l("span",{class:"sub"},"接单后营业时优先交付")])],-1)),(g(!0),_(W,null,te(M(o).orders,k=>(g(),_("div",{key:k.id,class:"cake",style:{"align-items":"center"}},[l("div",rf,[l("div",sf,h(k.type)+" · "+h(M(Be)(k.product).name)+" × "+h(k.qty),1),l("div",of,"交付可得 ¥"+h(k.pay),1)]),l("button",{class:ae(["btn",{primary:k.taken}]),style:{height:"34px",padding:"0 14px","font-size":"13px"},type:"button",onClick:O=>M(zu)(k.id)},h(k.taken?"已接":"接单"),11,lf)]))),128))])):z("",!0),l("div",af,[l("div",cf,[x[10]||(x[10]=l("div",{class:"h2",style:{margin:"0"}},"店铺装饰",-1)),l("span",uf,"舒适度 "+h(M(fs))+" / 4 · 自然客流 +"+h(M(fs)*2)+"%",1)]),(g(!0),_(W,null,te(v.value,k=>(g(),_("div",{key:k.id,class:"dev"},[l("div",df,[l("div",ff,[we(h(k.name)+" ",1),l("span",hf,h(k.category),1)]),l("div",pf,"舒适度 +1 · 店铺等级 "+h(k.shopLevel)+" 解锁",1)]),l("button",{class:"btn",type:"button",style:{height:"34px",padding:"0 12px","font-size":"12.5px",flex:"0 0 auto"},disabled:k.owned||!k.available||M(o).cash<k.cost||M(o).phase!=="playing",onClick:O=>M(Fu)(k.id)},h(k.owned?"已购":k.available?"¥"+k.cost:"等级不足"),9,mf)]))),128))]),l("div",vf,[i.value?(g(),_("div",bf,[x[17]||(x[17]=l("div",{class:"h2"},"今天的成绩",-1)),l("div",yf,[x[13]||(x[13]=l("span",{class:"small muted"},"卖出",-1)),l("span",kf,h(M(o).daySold)+" 个",1)]),l("div",xf,[x[14]||(x[14]=l("span",{class:"small muted"},"收入",-1)),l("span",Mf,"¥"+h(M(o).dayRev),1)]),a.value.length?(g(),_("div",Ef,[x[15]||(x[15]=l("div",{class:"small muted",style:{"margin-bottom":"6px"}},"还剩",-1)),(g(!0),_(W,null,te(a.value,k=>(g(),_("div",{class:"between",key:k.id,style:{"margin-bottom":"4px"}},[l("span",$f,h(k.name),1),l("span",wf,h(k.qty)+" 个",1)]))),128))])):z("",!0),u.value?(g(),_("div",Cf,[x[16]||(x[16]=l("div",{class:"small muted",style:{"margin-bottom":"8px"}},"剩下的怎么处理？",-1)),(g(!0),_(W,null,te(M(hs),(k,O)=>(g(),_("button",{key:O,class:"opt",type:"button",onClick:q=>m(O)},[we(h(k.label)+" ",1),l("span",If,h(k.cashRate?"回收一半成本":"不换钱")+h(k.community?"，社区好感 +"+k.community:""),1)],8,Tf))),128))])):(g(),_("button",{key:1,class:"btn primary block",type:"button",onClick:x[1]||(x[1]=k=>u.value=!0)}," 打烊结算 "))])):(g(),_("div",gf,[x[11]||(x[11]=l("div",{class:"h2"},"营业",-1)),x[12]||(x[12]=l("p",{class:"small muted",style:{margin:"0 0 10px"}}," 开门之后先交付已接的订单，剩下的按客流卖出去。 ",-1)),l("button",{class:"btn primary block",type:"button",disabled:s.value===0,onClick:x[0]||(x[0]=(...k)=>M(So)&&M(So)(...k))},h(s.value===0?"还没有成品，先去厨房做":"开门营业"),9,_f)]))]),l("div",Sf,[x[18]||(x[18]=l("div",{class:"between",style:{"margin-bottom":"6px"}},[l("div",{class:"h2",style:{margin:"0"}},"设备"),l("span",{class:"small muted"},"买了立刻生效")],-1)),(g(!0),_(W,null,te(f.value,k=>(g(),_("div",{key:k.id,class:"dev"},[l("div",Af,[l("div",Df,[we(h(k.name)+" ",1),l("span",Nf,[(g(),_(W,null,te(3,O=>l("i",{key:O,class:ae({on:O<=k.tier})},null,2)),64))]),l("span",Of,h(k.tier?k.now:k.note),1)]),l("div",Rf,h(k.desc),1),k.next?(g(),_("div",Ff,"升级："+h(k.next.text),1)):(g(),_("div",Lf,"已经是最好的了"))]),l("button",{class:"btn",type:"button",style:{height:"34px",padding:"0 12px","font-size":"12.5px",flex:"0 0 auto"},disabled:!k.next||M(o).cash<k.next.cost,onClick:O=>M(Tu)(k.id)},h(k.next?"¥"+k.next.cost:"满级"),9,Pf)]))),128))]),l("div",Vf,[x[19]||(x[19]=l("div",{class:"h2"},"统计",-1)),(g(!0),_(W,null,te([{k:"口碑",v:M(o).reputation,cls:"sage"},{k:"知名度",v:M(o).popularity,cls:"sage"},{k:"顾客忠诚",v:M(o).loyalty,cls:""},{k:"品牌影响",v:M(o).brand,cls:"pink"}],k=>(g(),_("div",{class:"stat",key:k.k},[l("span",jf,h(k.k),1),l("span",Bf,[l("span",{class:ae(["fill",k.cls]),style:De({width:k.v+"%"})},null,6)]),l("span",Hf,h(Math.round(k.v)),1)]))),128))])]))}},Kf=yn(qf,[["__scopeId","data-v-fc080224"]]),Uf=["src"],Wf={key:1,viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},zf=["fill"],Gf=["fill"],Yf=["fill"],Jf=["fill"],Zf=["fill"],Qf=["fill"],Xf=["fill"],eh=["fill"],nh=["fill"],th=["fill"],rh=["fill"],sh={__name:"CakeArt",props:{id:{type:String,default:""},colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){const n=e,t=G(()=>n.id&&ln("cake-"+n.id+".webp")==="ok"?Ie("cake-"+n.id+".webp"):"");return(r,s)=>t.value?(g(),_("img",{key:0,src:t.value,alt:"",class:"cakeart photo"},null,8,Uf)):(g(),_("svg",Wf,[s[0]||(s[0]=l("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),s[1]||(s[1]=l("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),l("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,zf),l("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,Gf),l("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,Yf),l("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,Jf),l("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,Zf),l("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,Qf),l("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,Xf),l("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,eh),l("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,nh),l("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,th),l("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,rh)]))}},kl=yn(sh,[["__scopeId","data-v-bd8df027"]]),oh={class:"card card-pad"},ih={class:"between",style:{"margin-bottom":"8px"}},lh={class:"track",style:{height:"8px",background:"var(--apricot)","border-radius":"999px",overflow:"hidden"}},ah={class:"between small muted",style:{"margin-top":"8px"}},ch={class:"card",style:{"margin-top":"12px"}},uh={class:"art"},dh={class:"body"},fh={class:"name"},hh={class:"chip",style:{"font-size":"10px"}},ph={class:"nums"},mh={class:"tiers"},vh=["onClick"],gh={class:"stepper"},_h=["onClick"],bh=["onClick"],yh={__name:"KitchenPage",setup(e){const n=ce(""),t=ce(!1);let r=0;const s=G(()=>hl()),i=G(()=>Object.values(o.plan).reduce((c,v)=>c+v,0)),a=G(()=>al.value.map(c=>({...c,lv:o.levels[c.id]||1,price:qt(c.id),demand:dl(c.id),tier:o.prices[c.id]||"std",qty:o.plan[c.id]||0})));function u(c,v){const m=o.plan[c]||0;Ku(c,m+v)}function d(c,v){o.prices[c]=v}function f(){const c=Uu();n.value=c.msg,t.value=!c.ok,clearTimeout(r),r=setTimeout(()=>n.value="",2200)}return(c,v)=>(g(),_("div",null,[l("div",oh,[l("div",ih,[v[0]||(v[0]=l("div",{class:"h2",style:{margin:"0"}},"厨房",-1)),l("span",{class:ae(["chip",s.value>M(Pn)?"pink":"sage"])}," 产能 "+h(s.value)+" / "+h(M(Pn)),3)]),l("div",lh,[l("div",{style:De([{height:"100%","border-radius":"999px",transition:"width .3s"},{width:Math.min(100,s.value/Math.max(1,M(Pn))*100)+"%",background:s.value>M(Pn)?"#d95b67":"linear-gradient(90deg,#e9c9a3,#d9a06a)"}])},null,4)]),l("div",ah,[l("span",null,"原料 "+h(M(o).stock)+" 份 · 计划 "+h(i.value)+" 个",1),l("span",null,"体力 "+h(M(o).stamina),1)])]),l("div",ch,[(g(!0),_(W,null,te(a.value,m=>(g(),_("div",{key:m.id,class:"cake"},[l("div",uh,[Ne(kl,{id:m.id,colors:m.colors},null,8,["id","colors"])]),l("div",dh,[l("div",fh,[l("span",null,h(m.name),1),l("span",hh,"Lv"+h(Math.round(m.lv*10)/10),1)]),l("div",ph,[l("span",null,"¥"+h(m.price),1),l("span",null,"预计卖 "+h(m.demand)+" 个",1),l("span",null,h(m.diff)+" 点/个",1)]),l("div",mh,[(g(!0),_(W,null,te(M(Xi),(y,x)=>(g(),_("button",{key:x,type:"button",class:ae(["tier",{on:m.tier===x}]),onClick:k=>d(m.id,x)},h(y.label),11,vh))),128))])]),l("div",gh,[l("button",{type:"button",onClick:y=>u(m.id,-1)},"−",8,_h),l("span",null,h(m.qty),1),l("button",{type:"button",onClick:y=>u(m.id,1)},"+",8,bh)])]))),128))]),n.value?(g(),_("p",{key:0,class:"small",style:De({color:t.value?"var(--berry)":"#6c8a55",margin:"10px 2px 0"})},h(n.value),5)):z("",!0),l("button",{class:"btn primary block",style:{"margin-top":"12px"},type:"button",onClick:f}," 开始制作（消耗原料与体力） "),v[1]||(v[1]=l("p",{class:"small muted",style:{margin:"9px 2px 0","text-align":"center"}}," 妈妈每天帮 60 点产能，每位伙伴 40 点，超出部分才用你的体力 ",-1))]))}},kh=yn(yh,[["__scopeId","data-v-5b6acae2"]]),xh={class:"card",style:{overflow:"hidden"}},Mh={style:{display:"flex"}},Eh={class:"portrait"},$h=["src"],wh={style:{flex:"1 1 auto",padding:"14px"}},Ch={class:"stat",style:{"margin-top":"12px"}},Th={class:"track"},Ih={class:"v"},Sh={class:"card",style:{"margin-top":"12px",overflow:"hidden"}},Ah={style:{display:"flex"}},Dh={class:"portrait"},Nh=["src"],Oh={style:{flex:"1 1 auto",padding:"14px"}},Rh={class:"stat",style:{"margin-top":"12px"}},Fh={class:"track"},Lh={class:"v"},Ph={class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}},Vh={class:"card card-pad",style:{"margin-top":"12px"}},jh={class:"h2"},Bh={class:"sub"},Hh={style:{flex:"1 1 auto","min-width":"0"}},qh={class:"nm"},Kh={class:"chip",style:{"font-size":"10px"}},Uh={key:0,class:"chip pink",style:{"font-size":"10px"}},Wh={class:"nt"},zh={key:0,class:"bars"},Gh={class:"b"},Yh={class:"bt"},Jh={class:"bv"},Zh={class:"b"},Qh={class:"bl"},Xh={class:"bt"},ep={class:"bv"},np={class:"card card-pad",style:{"margin-top":"12px"}},tp={class:"k"},rp={class:"track"},sp={class:"v"},op={__name:"PartnersPage",setup(e){const n=ko.nu,t=ko.sq,r=G(()=>ps("林暖","in")||n.full),s=G(()=>ps("苏晴","in")||t.full),i=G(()=>ct.map(d=>{const f=o.staff.includes(d.id);return{...d,joined:f,trust:Math.round(o.partnerTrust[d.id]||0),skill:Math.round((o.partnerSkill[d.id]||0)*10)/10}})),a=G(()=>o.photos.length),u=G(()=>Object.keys(_t).length);return(d,f)=>(g(),_("div",null,[l("div",xh,[l("div",Mh,[l("div",Eh,[l("img",{src:r.value,alt:"林暖"},null,8,$h)]),l("div",wh,[f[1]||(f[1]=l("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"林暖",-1)),f[2]||(f[2]=l("div",{class:"small muted"},"母亲 · 林记上一任经营者",-1)),l("div",Ch,[f[0]||(f[0]=l("span",{class:"k"},"家庭默契",-1)),l("span",Th,[l("span",{class:"fill",style:De({width:M(o).momBond+"%"})},null,4)]),l("span",Ih,h(Math.round(M(o).momBond)),1)]),f[3]||(f[3]=l("div",{class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}}," 前期仍在店里帮忙，每天能搭 60 点产能。她不会替你把所有事都做完。 ",-1))])])]),l("div",Sh,[l("div",Ah,[l("div",Dh,[l("img",{src:s.value,alt:"苏晴"},null,8,Nh)]),l("div",Oh,[f[5]||(f[5]=l("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"苏晴",-1)),f[6]||(f[6]=l("div",{class:"small muted"},"高中好友 · 摄影从业者",-1)),l("div",Rh,[f[4]||(f[4]=l("span",{class:"k"},"友情",-1)),l("span",Fh,[l("span",{class:"fill pink",style:De({width:M(o).friendship+"%"})},null,4)]),l("span",Lh,h(Math.round(M(o).friendship)),1)]),l("div",Ph," 不在员工名单里。相册 "+h(a.value)+" / "+h(u.value)+" 张。 ",1)])])]),l("div",Vh,[l("div",jh,[f[7]||(f[7]=we("伙伴 ",-1)),l("span",Bh,h(M(o).staff.length)+" / "+h(M(ct).length)+" 人",1)]),(g(!0),_(W,null,te(i.value,c=>(g(),_("div",{key:c.id,class:ae(["mate",{off:!c.joined}])},[l("div",{class:"ava",style:De({background:c.color})},h(c.name.slice(0,1)),5),l("div",Hh,[l("div",qh,[we(h(c.name)+" ",1),l("span",Kh,h(c.role),1),c.joined?z("",!0):(g(),_("span",Uh,"第 "+h(c.joinMonth)+" 个月加入",1))]),l("div",Wh,h(c.issue),1),c.joined?(g(),_("div",zh,[l("span",Gh,[f[8]||(f[8]=l("span",{class:"bl"},"信赖",-1)),l("span",Yh,[l("span",{class:"bf",style:De({width:c.trust+"%"})},null,4)]),l("span",Jh,h(c.trust),1)]),l("span",Zh,[l("span",Qh,h(c.skillName),1),l("span",Xh,[l("span",{class:"bf sage",style:De({width:c.skill*20+"%"})},null,4)]),l("span",ep,h(c.skill),1)])])):z("",!0)])],2))),128))]),l("div",np,[f[9]||(f[9]=l("div",{class:"h2"},[we("经营偏好 "),l("span",{class:"sub"},"长期选择积累出的风格")],-1)),(g(!0),_(W,null,te([{k:"传统",v:M(o).style.tradition},{k:"创新",v:M(o).style.innovation},{k:"效率",v:M(o).style.efficiency},{k:"社区",v:M(o).style.community}],c=>(g(),_("div",{class:"stat",key:c.k},[l("span",tp,h(c.k),1),l("span",rp,[l("span",{class:"fill",style:De({width:Math.min(100,c.v)+"%"})},null,4)]),l("span",sp,h(Math.round(c.v)),1)]))),128))])]))}},ip=yn(op,[["__scopeId","data-v-a78ae096"]]),lp={class:"lab"},ap={class:"lab-head"},cp={class:"lab-sub"},up={key:0,class:"card card-pad result"},dp={class:"result-title"},fp={class:"small muted"},hp=["src"],pp={class:"scores"},mp={class:"feedback"},vp={class:"result-actions"},gp=["disabled"],_p={key:1,class:"small muted"},bp=["disabled"],yp=["disabled","onClick"],kp={class:"product-info"},xp={class:"small muted"},Mp={class:"chip"},Ep={key:0,class:"product-list"},$p=["onClick"],wp={class:"product-info"},Cp={class:"small muted"},Tp={key:1,class:"card card-pad small muted"},Ip={key:2,class:"report-list"},Sp={class:"small muted"},Ap={key:0,class:"small muted"},Dp={key:3,class:"card card-pad small muted"},Np={key:2,class:"card card-pad form"},Op={class:"small muted"},Rp={class:"hint"},Fp={class:"field"},Lp=["onClick"],Pp={class:"field"},Vp=["onClick"],jp={class:"small muted"},Bp={class:"field"},Hp={class:"field-title"},qp=["onClick"],Kp={class:"field"},Up=["onClick"],Wp={class:"field"},zp=["onClick"],Gp=["disabled"],Yp={class:"small muted"},Jp={key:3,class:"card card-pad form"},Zp={class:"field"},Qp=["onClick"],Xp={class:"field"},em=["onClick"],nm={class:"field"},tm=["onClick"],rm={class:"field"},sm=["onClick"],om=["disabled"],im={key:4,class:"card card-pad form"},lm={class:"small muted"},am=["value"],cm={key:0,class:"small feedback-line"},um=["disabled"],dm={class:"small muted"},fm={key:5,class:"small notice"},hm={__name:"ResearchLab",setup(e){const n=ce("home"),t=ce(""),r=ce([]),s=ce(-1),i=ce(-1),a=ce(-1),u=ce(1),d=ce(""),f=ce(-1),c=ce(""),v=ce(""),m=ce(!1),y=G(()=>Ye.filter(w=>w.month>0)),x=G(()=>Ye.filter(w=>o.unlocked.includes(w.id)&&(o.levels[w.id]||1)<5)),k=G(()=>As[t.value]),O=G(()=>{var w;return((w=o.labPending)==null?void 0:w.type)==="signature"?Os("osmanthus").src:""});function q(w){v.value=w}function K(w){if(!o.labPending){if(w.id==="signature"){if(o.month<26)return q("M26 起开放外婆配方复原。");n.value="signature"}else t.value=w.id,n.value="develop";r.value=[],s.value=-1,i.value=-1,a.value=-1,u.value=1,v.value=""}}function B(w){r.value=r.value.includes(w)?r.value.filter(F=>F!==w):[...r.value,w]}function C(){const w=Co({productId:t.value,ingredients:r.value,direction:s.value,ratio:i.value,process:a.value,decoration:u.value});w.ok?q("试吃完成：本次样品已计入原料消耗。"):q(w.message)}function I(){const w=Co({productId:"signature",type:"signature",ingredients:r.value,sugar:s.value,filling:i.value,garnish:a.value});w.ok?q("复原试吃完成：本次样品已计入原料消耗。"):q(w.message)}function U(){const w=Au();q(w.message),w.ok&&(n.value="home")}function ee(){const w=o.labPending;w&&(To(),t.value=w.productId,r.value=w.ingredients.slice(),w.type==="signature"?(s.value=w.sugar,i.value=w.filling,a.value=w.garnish,n.value="signature"):(s.value=w.direction,i.value=w.ratio,a.value=w.process,u.value=w.decoration,n.value="develop"),q("保留了本次试做思路，修改后重试会再消耗一份样品。"))}function P(){To(),n.value="home",q("试吃结果已收起，已消耗的样品不返还。")}function Q(w){o.labPending||(d.value=w.id,f.value=-1,c.value="",v.value="",n.value="improve")}function J(){if(m.value||f.value<0)return;m.value=!0;const w=Du(d.value,f.value);m.value=!1,c.value=w.feedback||"",w.ok?(q(w.message),n.value="home"):w.retry&&(f.value=-1)}function Y(){n.value="home",v.value=""}function N(w){return w.type==="signature"?"外婆配方复原":w.type==="improvement"?`配方改良 · Lv${w.levelAfter}`:`${w.refined?"精制上架":"新品上架"} · ${w.score} 分`}return(w,F)=>(g(),_("section",lp,[l("header",ap,[l("div",null,[F[1]||(F[1]=l("div",{class:"lab-title"},"林记烘焙实验室",-1)),l("div",cp,"行动力 "+h(M(o).ap)+"/"+h(M(o).maxAp)+" · 原料 "+h(M(o).stock)+" 份 · 每次试吃消耗 1 点行动力和 1 份原料",1)]),n.value!=="home"&&!M(o).labPending?(g(),_("button",{key:0,class:"back",type:"button",onClick:Y},"返回")):z("",!0)]),M(o).labPending?(g(),_("div",up,[l("div",dp,h(M(o).labPending.passed?"试吃合格":"还需要调整"),1),l("div",fp,h(M(Be)(M(o).labPending.productId).name)+" · 本次 "+h(M(o).labPending.score)+" 分",1),O.value?(g(),_("img",{key:0,class:"signature-cg",src:O.value,alt:"桂花栗子蛋糕复原插画"},null,8,hp)):z("",!0),l("div",pp,[(g(),_(W,null,te([{key:"flavor",name:"风味"},{key:"texture",name:"口感"},{key:"appearance",name:"外观"},{key:"cost",name:"成本控制"}],E=>l("div",{key:E.key,class:"score"},[l("span",null,h(E.name),1),l("strong",null,h(M(o).labPending.scores[E.key]),1)])),64))]),l("ul",mp,[(g(!0),_(W,null,te(M(o).labPending.feedback,E=>(g(),_("li",{key:E},h(E),1))),128))]),l("div",vp,[M(o).labPending.passed?(g(),_("button",{key:0,class:"btn primary block",type:"button",disabled:M(o).ap<1||M(o).phase!=="playing",onClick:U},h(M(o).labPending.type==="signature"?"完成复原":"正式上架")+" · 再消耗 1 点行动力 ",9,gp)):z("",!0),M(o).labPending.passed&&M(o).ap<1?(g(),_("div",_p,"行动力不足，结果已保存，明天可以继续。")):z("",!0),l("button",{class:"btn block",type:"button",disabled:M(o).phase!=="playing",onClick:ee},"按反馈调整并重试 · 再用 1 份样品",8,bp),l("button",{class:"text-button",type:"button",onClick:P},"收起结果")])])):n.value==="home"?(g(),_(W,{key:1},[F[3]||(F[3]=l("div",{class:"card card-pad intro"},[l("strong",null,"从配方到上架"),l("div",{class:"small muted"},"选配方、做试验、看试吃反馈。合格品可以生产，精制品以更高熟练度起步。")],-1)),F[4]||(F[4]=l("div",{class:"section-title"},"新品研发",-1)),(g(!0),_(W,null,te(y.value,E=>(g(),_("button",{key:E.id,class:"card product-row",type:"button",disabled:E.month>M(o).month||M(o).unlocked.includes(E.id),onClick:R=>K(E)},[l("span",kp,[l("strong",null,h(E.name),1),l("span",xp,h(E.id==="signature"?"M26 · 外婆旧配方复原":`M${E.month} 起 · ${E.desc}`),1)]),l("span",Mp,h(M(o).unlocked.includes(E.id)?"已上架":E.month>M(o).month?`M${E.month}开放`:E.id==="signature"?"复原":"开始实验"),1)],8,yp))),128)),F[5]||(F[5]=l("div",{class:"section-title"},"配方改良",-1)),x.value.length?(g(),_("div",Ep,[(g(!0),_(W,null,te(x.value,E=>(g(),_("button",{key:E.id,class:"card product-row",type:"button",onClick:R=>Q(E)},[l("span",wp,[l("strong",null,h(E.name),1),l("span",Cp,"当前 Lv"+h(M(o).levels[E.id]||1),1)]),F[2]||(F[2]=l("span",{class:"chip"},"诊断问题",-1))],8,$p))),128))])):(g(),_("div",Tp,"目前没有可改良的产品。")),F[6]||(F[6]=l("div",{class:"section-title"},"实验档案",-1)),w.reportRows.length?(g(),_("div",Ip,[(g(!0),_(W,null,te(w.reportRows,E=>(g(),_("div",{key:E.product.id,class:"card card-pad report-row"},[l("strong",null,h(E.product.name),1),(g(),_(W,null,te(["development","improvement"],R=>{var le;return l("div",{key:R,class:"report-entry"},[E.reports[R]?(g(),_(W,{key:0},[l("span",null,h(N(E.reports[R])),1),l("span",Sp,"第 "+h(E.reports[R].run)+" 轮 · M"+h(E.reports[R].month),1),(le=E.reports[R].feedback)!=null&&le.length?(g(),_("div",Ap,h(E.reports[R].feedback.join(" ")),1)):z("",!0)],64)):z("",!0)])}),64))]))),128))])):(g(),_("div",Dp,"完成实验后，报告会保存到这里并跨周目保留。"))],64)):n.value==="develop"&&k.value?(g(),_("div",Np,[l("h2",null,h(M(Be)(t.value).name)+" · 新品设计",1),l("p",Op,h(k.value.theme)+" "+h(k.value.focus),1),l("div",Rp,"图鉴线索："+h((M(Te).codex[t.value]||{}).hint||M(Be)(t.value).desc),1),l("div",Fp,[F[7]||(F[7]=l("div",{class:"field-title"},"风味方向",-1)),(g(!0),_(W,null,te(M(yu),(E,R)=>(g(),_("button",{key:E,type:"button",class:ae(["choice",{chosen:s.value===R}]),onClick:le=>s.value=R},h(E),11,Lp))),128))]),l("div",Pp,[F[8]||(F[8]=l("div",{class:"field-title"},[we("核心食材 "),l("span",{class:"small muted"},"可多选")],-1)),(g(!0),_(W,null,te(M(wo)(t.value),E=>(g(),_("button",{key:E,type:"button",class:ae(["choice",{chosen:r.value.includes(E)}]),onClick:R=>B(E)},h(E),11,Vp))),128)),l("div",jp,"配方提示："+h((M(Te).codex[t.value]||{}).hint||""),1)]),l("div",Bp,[l("div",Hp,h(k.value.ratioLabel),1),(g(!0),_(W,null,te(M(ku),(E,R)=>(g(),_("button",{key:E,type:"button",class:ae(["choice",{chosen:i.value===R}]),onClick:le=>i.value=R},h(E),11,qp))),128))]),l("div",Kp,[F[9]||(F[9]=l("div",{class:"field-title"},"制作工艺",-1)),(g(!0),_(W,null,te(k.value.processes,(E,R)=>(g(),_("button",{key:E,type:"button",class:ae(["choice",{chosen:a.value===R}]),onClick:le=>a.value=R},h(E),11,Up))),128))]),l("div",Wp,[F[10]||(F[10]=l("div",{class:"field-title"},[we("装饰取舍 "),l("span",{class:"small muted"},"越丰富，外观越高，成本分越低")],-1)),(g(!0),_(W,null,te(M(xu),(E,R)=>(g(),_("button",{key:E,type:"button",class:ae(["choice",{chosen:u.value===R}]),onClick:le=>u.value=R},h(E)+" · 外观 "+h([72,90,100][R])+" / 成本 "+h(M(tl)[R]),11,zp))),128))]),l("button",{class:"btn primary block",type:"button",disabled:M(o).ap<2||M(o).stock<1||M(o).phase!=="playing",onClick:C},"开始试吃 · 1 点行动力 + 1 份原料",8,Gp),l("div",Yp,"合格后上架再消耗 1 点行动力，成功研发总计 2 点。"+h(M(o).stock<1?"原料不足，先采购原料。":M(o).ap<2?"当前行动力不足以完成一次试做。":""),1)])):n.value==="signature"?(g(),_("div",Jp,[F[15]||(F[15]=l("h2",null,"外婆的桂花栗子蛋糕 · 复原试验",-1)),F[16]||(F[16]=l("p",{class:"small muted"},"手记线索：「栗子甜则少放糖，桂花香淡则后撒。」先选核心材料，再完成三项判断。",-1)),l("div",Zp,[F[11]||(F[11]=l("div",{class:"field-title"},"核心食材",-1)),(g(!0),_(W,null,te(M(wo)("signature"),E=>(g(),_("button",{key:E,type:"button",class:ae(["choice",{chosen:r.value.includes(E)}]),onClick:R=>B(E)},h(E),11,Qp))),128))]),l("div",Xp,[F[12]||(F[12]=l("div",{class:"field-title"},"栗子甜度",-1)),(g(),_(W,null,te(["减少额外糖量","维持标准糖量","再增加一些糖"],(E,R)=>l("button",{key:E,type:"button",class:ae(["choice",{chosen:s.value===R}]),onClick:le=>s.value=R},h(E),11,em)),64))]),l("div",nm,[F[13]||(F[13]=l("div",{class:"field-title"},"桂花冻的处理",-1)),(g(),_(W,null,te(["趁热拌进栗子泥","冷却后单独夹层","趁热浸入戚风胚"],(E,R)=>l("button",{key:E,type:"button",class:ae(["choice",{chosen:i.value===R}]),onClick:le=>i.value=R},h(E),11,tm)),64))]),l("div",rm,[F[14]||(F[14]=l("div",{class:"field-title"},"金桂的加入时间",-1)),(g(),_(W,null,te(["烘烤前加入","蛋糕冷却后撒","装盒前现撒"],(E,R)=>l("button",{key:E,type:"button",class:ae(["choice",{chosen:a.value===R}]),onClick:le=>a.value=R},h(E),11,sm)),64))]),l("button",{class:"btn primary block",type:"button",disabled:M(o).ap<2||M(o).stock<1||M(o).phase!=="playing",onClick:I},"试吃复原配方 · 1 点行动力 + 1 份原料",8,om)])):n.value==="improve"?(g(),_("div",im,[l("h2",null,h(M(Be)(d.value).name)+" · 改良诊断",1),l("p",lm,h(M(ds)[d.value].question),1),(g(!0),_(W,null,te(M(ds)[d.value].options,(E,R)=>(g(),_("label",{key:E,class:"answer"},[pa(l("input",{"onUpdate:modelValue":F[0]||(F[0]=le=>f.value=le),type:"radio",value:R},null,8,am),[[Gc,f.value,void 0,{number:!0}]]),l("span",null,h(E),1)]))),128)),c.value?(g(),_("p",cm,h(c.value),1)):z("",!0),l("button",{class:"btn primary block",type:"button",disabled:f.value<0||M(o).ap<2||M(o).stock<1||m.value||M(o).phase!=="playing",onClick:J},"提交改良试验 · 1 点行动力 + 1 份原料",8,um),l("div",dm,"答对后再消耗 1 点行动力，熟练度提升 1 级。"+h(M(o).stock<1?"原料不足，先采购原料。":M(o).ap<2?"当前行动力不足以完成一次改良。":""),1)])):z("",!0),v.value?(g(),_("p",fm,h(v.value),1)):z("",!0)]))}},pm=yn(hm,[["__scopeId","data-v-ed7fe0c2"]]),mm={class:"card card-pad"},vm={class:"between"},gm={class:"row",style:{gap:"4px","flex-wrap":"wrap","max-width":"150px","justify-content":"flex-end"}},_m={class:"between small muted",style:{"margin-top":"8px"}},bm={key:0,class:"card card-pad lab-entry"},ym={key:1,class:"act-grid",style:{"margin-top":"10px"}},km=["disabled","onClick"],xm={class:"t"},Mm={class:"c"},Em={class:"n"},$m={key:0,class:"n cost"},wm={key:2,class:"card card-pad",style:{"margin-top":"10px"}},Cm={class:"pills"},Tm=["onClick"],Im={class:"muted"},Sm={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"}},Am={key:4,class:"card card-pad",style:{"margin-top":"12px"}},Dm={class:"between",style:{"margin-bottom":"8px"}},Nm={class:"small muted",style:{"margin-bottom":"8px"}},Om={key:0,class:"chip pink",style:{"font-size":"10px"}},Rm={key:5,class:"card card-pad",style:{"margin-top":"12px"}},Fm={key:0,class:"empty"},Lm={class:"d"},Pm={class:"x"},Vm={__name:"ManagePage",props:{initialSection:{type:String,default:"overview"}},setup(e){const n=e,t=ce(n.initialSection),r=ce("");let s=0;Bn(()=>n.initialSection,v=>t.value=v);const i=G(()=>["restock","feedback","talk","sqchat","market","train","decorate","survey","branch"].map(v=>({id:v,info:kr(v)}))),a=G(()=>t.value==="train"||t.value==="talk"?gl().map(v=>({id:v.id,label:v.nick,sub:"信赖 "+Math.round(o.partnerTrust[v.id]||0)})):[]);function u(v){return v==="train"||v==="talk"?o.staff.length>1:!1}function d(v){const m=kr(v);if(m.disabled||o.ap<m.ap||m.cost&&o.cash<m.cost){c("现在做不了："+m.note);return}if(u(v)){t.value=t.value===v?"overview":v;return}f(v,{})}function f(v,m){const y=lr(v,m);t.value="overview",y||c("没有执行成功，检查一下行动力或资金")}function c(v){r.value=v,clearTimeout(s),s=setTimeout(()=>r.value="",2e3)}return(v,m)=>(g(),_("div",null,[l("div",mm,[l("div",vm,[m[1]||(m[1]=l("div",null,[l("div",{class:"h2",style:{margin:"0"}},"今天的行动力"),l("div",{class:"small muted",style:{"margin-top":"2px"}}," 每个经营日开始回满，不累积 ")],-1)),l("div",gm,[(g(!0),_(W,null,te(M(o).maxAp,y=>(g(),_("span",{key:y,class:ae(["ap-dot",{on:y<=M(o).ap}])},null,2))),128))])]),l("div",_m,[l("span",null,"剩余 "+h(M(o).ap)+" / "+h(M(o).maxAp)+" 点",1),l("span",null,"体力 "+h(M(o).stamina)+" / "+h(M(o).maxStamina),1)])]),t.value==="overview"?(g(),_("div",bm,[m[2]||(m[2]=l("div",null,[l("div",{class:"h2",style:{margin:"0"}},"林记烘焙实验室"),l("div",{class:"small muted"},"亲手研发新品、改良旧配方，回看每次成功实验。")],-1)),l("button",{class:"btn primary",type:"button",onClick:m[0]||(m[0]=y=>t.value="lab")},"进入实验室")])):z("",!0),t.value==="overview"?(g(),_("div",ym,[(g(!0),_(W,null,te(i.value,y=>(g(),_("button",{key:y.id,class:ae(["act",{on:t.value===y.id}]),type:"button",disabled:y.info.disabled||M(o).ap<y.info.ap||y.info.cost>0&&M(o).cash<y.info.cost,onClick:x=>d(y.id)},[l("span",xm,[l("span",null,h(y.info.name),1),l("span",Mm,h(y.info.ap)+"点",1)]),l("span",Em,h(y.info.note),1),y.info.cost>0?(g(),_("span",$m,"花费 ¥"+h(y.info.cost),1)):z("",!0)],10,km))),128))])):z("",!0),t.value!=="overview"&&t.value!=="lab"&&a.value.length?(g(),_("div",wm,[m[3]||(m[3]=l("div",{class:"h2"},"和谁？",-1)),l("div",Cm,[(g(!0),_(W,null,te(a.value,y=>(g(),_("button",{key:y.id,type:"button",class:"pill",onClick:x=>f(t.value,{partner:y.id})},[we(h(y.label)+" ",1),l("span",Im,h(y.sub),1)],8,Tm))),128))])])):z("",!0),r.value?(g(),_("p",Sm,h(r.value),1)):z("",!0),t.value==="overview"?(g(),_("div",Am,[l("div",Dm,[m[4]||(m[4]=l("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),l("span",{class:ae(["chip",M(Fn).done>=M(Fn).need?"sage":""])},h(M(Fn).done)+" / "+h(M(Fn).need||"—"),3)]),l("div",Nm,h(M(Fr).name)+" · 完成 "+h(M(Fn).need)+" 项即可进入下一阶段，否则本局提前结束 ",1),(g(!0),_(W,null,te(M(Fn).list,y=>(g(),_("div",{key:y.text,class:ae(["goal",{done:y.done}])},[m[5]||(m[5]=l("span",{class:"dot"},null,-1)),l("span",null,h(y.text),1),y.expand?(g(),_("span",Om,"扩张")):z("",!0)],2))),128))])):z("",!0),t.value==="overview"?(g(),_("div",Rm,[m[6]||(m[6]=l("div",{class:"h2"},"最近发生的事",-1)),M(o).log.length?z("",!0):(g(),_("div",Fm,"还没有记录。")),(g(!0),_(W,null,te(M(o).log.slice(0,10),(y,x)=>(g(),_("div",{key:x,class:ae(["logline",y.tone])},[l("span",Lm,h(y.month)+"月"+h(y.day)+"日",1),l("span",Pm,h(y.text),1)],2))),128))])):t.value==="lab"?(g(),Rn(pm,{key:6})):z("",!0)]))}},jm=yn(Vm,[["__scopeId","data-v-5f18f238"]]),Bm={class:"seg"},Hm=["onClick"],qm={key:0,class:"card"},Km={class:"art"},Um={class:"body"},Wm={class:"name"},zm={class:"chip",style:{"font-size":"10px"}},Gm={key:0,class:"chip",style:{"font-size":"10px"}},Ym={class:"desc"},Jm={key:0,class:"hint"},Zm={key:1,class:"nums"},Qm={key:1},Xm={class:"photos"},ev={class:"im"},nv=["src","alt"],tv={key:1,class:"small muted"},rv={key:2,style:{"font-size":"20px",opacity:"0.3"}},sv={class:"cp"},ov={class:"ti"},iv={class:"cc"},lv={class:"cc"},av={key:2,class:"lab-list"},cv={key:0,class:"card card-pad small muted"},uv={class:"between"},dv={class:"h2",style:{margin:"0"}},fv={class:"chip",style:{"font-size":"10px"}},hv=["src"],pv={class:"between"},mv={class:"small muted"},vv={key:0,class:"lab-scores"},gv={key:1,class:"small muted"},_v={key:3,class:"card"},bv={style:{flex:"1 1 auto","min-width":"0"}},yv={class:"nm"},kv={key:0,class:"chip sage",style:{"font-size":"10px"}},xv={key:1,class:"chip pink",style:{"font-size":"10px"}},Mv={class:"nt"},Ev={key:0,class:"nt"},$v={key:4,class:"customer-list"},wv={class:"between"},Cv={class:"h2",style:{margin:"0"}},Tv={class:"chip",style:{"font-size":"10px"}},Iv={class:"cc"},Sv={class:"cc"},Av={class:"small muted"},Dv={key:5,class:"collection"},Nv={class:"h2"},Ov={class:"small muted"},Rv={__name:"CodexPage",setup(e){const n=ce("product"),t=G(()=>Ye.map(c=>({...c,flavor:(Te.codex[c.id]||{}).flavor||c.desc,hint:(Te.codex[c.id]||{}).hint||"",owned:o.unlocked.includes(c.id),current:o.unlocked.includes(c.id),collected:o.career.products.includes(c.id),lv:Math.round((o.levels[c.id]||1)*10)/10,price:qt(c.id),sold:o.monthSold[c.id]||0}))),r=G(()=>Object.keys(_t).map(c=>({id:c,..._t[c],owned:o.photos.includes(c),current:o.photos.includes(c),collected:o.career.photos.includes(c)}))),s=G(()=>Ye.map(c=>({...c,reports:o.career.labReports[c.id]||{}})).filter(c=>c.reports.development||c.reports.improvement)),i=G(()=>Os("osmanthus").src),a=G(()=>Pt.map(c=>({...c,owned:o.cities.includes(c.id),surveyed:o.surveyed.includes(c.id)}))),u=G(()=>Is.map(c=>({...c,productName:Ye.find(v=>v.id===c.product).name,visit:o.regularCustomers[c.id]}))),d=G(()=>({products:Ye.map(c=>({id:c.id,name:c.name,collected:o.career.products.includes(c.id),current:o.unlocked.includes(c.id)})),photos:Object.keys(_t).map(c=>({id:c,name:_t[c].title,collected:o.career.photos.includes(c),current:o.photos.includes(c)})),decorations:Ts.map(c=>({id:c.id,name:c.name,collected:o.career.decorations.includes(c.id),current:o.decorations.includes(c.id)})),endings:[...dt.filter(c=>!c.final).map(c=>({id:c.short.key,name:c.short.name,collected:o.career.endings.includes(c.short.key),current:o.runEndings.includes(c.short.key)})),...Object.entries(nl).map(([c,v])=>({id:c,name:v.name,collected:o.career.endings.includes(c),current:o.runEndings.includes(c)}))]}));function f(c){return c.current?"本轮已解锁":c.collected?"已收录 · 本轮未解锁":"尚未收录"}return(c,v)=>(g(),_("div",null,[l("div",Bm,[(g(),_(W,null,te([{k:"product",t:"产品"},{k:"customer",t:"顾客"},{k:"photo",t:"相册"},{k:"city",t:"门店"},{k:"collection",t:"收藏"},{k:"lab",t:"实验档案"}],m=>l("button",{key:m.k,type:"button",class:ae({on:n.value===m.k}),onClick:y=>n.value=m.k},h(m.t),11,Hm)),64))]),n.value==="product"?(g(),_("div",qm,[(g(!0),_(W,null,te(t.value,m=>(g(),_("div",{key:m.id,class:ae(["cake",{locked:!m.owned}])},[l("div",Km,[Ne(kl,{id:m.id,colors:m.colors},null,8,["id","colors"])]),l("div",Um,[l("div",Wm,[l("span",null,h(m.name),1),l("span",zm,h(f(m)),1),m.owned?(g(),_("span",Gm,"Lv"+h(m.lv),1)):z("",!0)]),l("div",Ym,h(m.owned?m.flavor:"第 "+m.month+" 个月解锁"),1),m.owned&&m.hint?(g(),_("div",Jm,"配方："+h(m.hint),1)):z("",!0),m.owned?(g(),_("div",Zm,[l("span",null,"¥"+h(m.price),1),l("span",null,h(m.diff)+" 点/个",1),l("span",null,"本月卖出 "+h(m.sold),1)])):z("",!0)])],2))),128))])):n.value==="photo"?(g(),_("div",Qm,[l("div",Xm,[(g(!0),_(W,null,te(r.value,m=>(g(),_("div",{key:m.id,class:"photo"},[l("div",ev,[m.collected&&m.img?(g(),_("img",{key:0,src:m.img,alt:m.title},null,8,nv)):m.collected?(g(),_("span",tv,"未冲印")):(g(),_("span",rv,"?"))]),l("div",sv,[l("div",ov,h(m.collected?m.title:"还没发生"),1),l("div",iv,h(m.collected?m.caption:"继续经营，它会出现"),1),l("div",lv,h(f(m)),1)])]))),128))])])):n.value==="lab"?(g(),_("div",av,[s.value.length?z("",!0):(g(),_("div",cv,"完成一次新品上架或配方改良后，报告会保存在这里。")),(g(!0),_(W,null,te(s.value,m=>{var y;return g(),_("article",{key:m.id,class:"card card-pad lab-report"},[l("div",uv,[l("div",dv,h(m.name),1),l("span",fv,h(M(o).career.products.includes(m.id)?"配方已收录":"已研发"),1)]),((y=m.reports.development)==null?void 0:y.type)==="signature"&&i.value?(g(),_("img",{key:0,class:"lab-cg",src:i.value,alt:"桂花栗子蛋糕复原插画"},null,8,hv)):z("",!0),(g(),_(W,null,te(["development","improvement"],x=>l("div",{key:x,class:"lab-entry"},[m.reports[x]?(g(),_(W,{key:0},[l("div",pv,[l("strong",null,h(x==="improvement"?"配方改良":m.reports[x].type==="signature"?"外婆配方复原":m.reports[x].refined?"精制新品研发":"新品研发"),1),l("span",mv,"第 "+h(m.reports[x].run)+" 轮 · M"+h(m.reports[x].month),1)]),x==="development"?(g(),_("div",vv,[l("span",null,"总分 "+h(m.reports[x].score),1),(g(),_(W,null,te([{key:"flavor",label:"风味"},{key:"texture",label:"口感"},{key:"appearance",label:"外观"},{key:"cost",label:"成本"}],k=>l("span",{key:k.key},h(k.label)+" "+h(m.reports[x].scores[k.key]),1)),64))])):(g(),_("div",gv,"熟练度 Lv"+h(m.reports[x].levelBefore)+" → Lv"+h(m.reports[x].levelAfter),1)),(g(!0),_(W,null,te(m.reports[x].feedback,k=>(g(),_("p",{key:k,class:"lab-note"},h(k),1))),128))],64)):z("",!0)])),64))])}),128))])):n.value==="city"?(g(),_("div",_v,[(g(!0),_(W,null,te(a.value,m=>(g(),_("div",{key:m.id,class:ae(["city",{on:m.owned,off:!m.owned&&!m.surveyed}])},[v[0]||(v[0]=l("span",{class:"dot"},null,-1)),l("div",bv,[l("div",yv,[we(h(m.name)+" ",1),m.owned?(g(),_("span",kv,"营业中")):m.surveyed?(g(),_("span",xv,"已考察")):z("",!0)]),l("div",Mv,h(m.note),1),m.owned?z("",!0):(g(),_("div",Ev," 第 "+h(m.month)+" 个月可考察 · 口碑 "+h(m.rep)+" · 开店 ¥"+h(m.cost),1))])],2))),128))])):n.value==="customer"?(g(),_("div",$v,[(g(!0),_(W,null,te(u.value,m=>(g(),_("div",{key:m.id,class:"card card-pad customer"},[l("div",wv,[l("div",Cv,h(m.name),1),l("span",Tv,h(m.visit.purchases)+" 次购买",1)]),l("div",Iv,"每月第 "+h(m.day)+" 个经营日 · "+h(m.productName),1),l("div",Sv,h(m.preference),1),(g(!0),_(W,null,te(m.stories,(y,x)=>(g(),_("div",{key:x,class:"customer-story"},[l("div",Av,h(x===0?"第一次购买":"第三次购买"),1),l("div",null,h(m.visit.stories.includes(x)?y:"继续经营，解锁这段回忆"),1)]))),128))]))),128))])):(g(),_("div",Dv,[(g(),_(W,null,te([{key:"products",title:"产品"},{key:"photos",title:"相册"},{key:"decorations",title:"装饰"},{key:"endings",title:"结局"}],m=>l("div",{key:m.key,class:"card card-pad"},[l("div",Nv,h(m.title),1),(g(!0),_(W,null,te(d.value[m.key],y=>(g(),_("div",{key:y.id,class:"between collect-row"},[l("span",null,h(y.name),1),l("span",Ov,h(f(y)),1)]))),128))])),64))]))]))}},Fv=yn(Rv,[["__scopeId","data-v-32cad929"]]),Lv={class:"world"},Pv=["src","alt"],Vv={class:"world-heading"},jv={class:"world-heading-text"},Bv={class:"world-eyebrow"},Hv={class:"world-title"},qv={class:"world-subtitle"},Kv=["src"],Uv=["aria-label","onClick"],Wv={class:"world-hotspot-symbol"},zv={class:"world-hotspot-label"},Gv={class:"world-status"},Yv={key:2,class:"world-toast",role:"status"},Jv={key:3,class:"world-travel"},Zv={class:"world-travel-head"},Qv={class:"world-travel-grid"},Xv=["onClick"],e1=["src"],n1={class:"world-travel-name"},t1={key:0,class:"world-travel-lock"},r1={class:"world-action-sheet"},s1={class:"world-action-icon"},o1={class:"world-action-copy"},i1={key:0},l1={class:"world-action-buttons"},a1=["disabled"],c1={key:0,class:"world-action-tip"},u1={class:"world-footer"},d1={class:"world-chapter"},f1={class:"world-chapter-label"},h1={__name:"SceneMapPage",props:{scene:{type:String,default:"shop"}},emits:["change-scene","open-panel"],setup(e,{emit:n}){const t=e,r=n,s={shop:{name:"林记烘焙",sub:"熟悉的木门后，总有蛋糕香",img:"bg-shop.webp",icon:"🏠"},kitchen:{name:"烘焙后厨",sub:"今天也要做出好吃的蛋糕",img:"bg-kitchen.webp",icon:"🥣"},street:{name:"栖云镇老街",sub:"出门走走，看看小镇的生活",img:"bg-street.webp",icon:"🌿"},home:{name:"林念的家",sub:"家里的灯总为你留着",img:"bg-home.webp",icon:"🪴"},cafe:{name:"街角咖啡馆",sub:"一杯咖啡与一点新灵感",img:"bg-cafe.webp",icon:"☕"},park:{name:"河边公园",sub:"适合散步、说说心里话",img:"bg-park.webp",icon:"🍃"},market:{name:"小镇市集",sub:"看看今天有什么新鲜事",img:"bg-market.webp",icon:"🎪"},studio:{name:"星河的工作室",sub:"配色、包装与有趣的创意",img:"bg-studio.webp",icon:"🎨"},school:{name:"熟悉的高中",sub:"那几年，课间总有人来找我",img:"bg-school.webp",icon:"📚"},store:{name:"品牌新店",sub:"林记走向了更远的地方",img:"bg-store.webp",icon:"🏬"}},i=Object.entries(s).map(([I,U])=>({id:I,...U})),a=G(()=>s[t.scene]||s.shop),u=ce(!1),d=ce(null),f=ce("");let c;function v(I){f.value=I,clearTimeout(c),c=setTimeout(()=>f.value="",2600)}Bn(()=>t.scene,()=>{d.value=null,u.value=!1});function m(I){return I==="studio"?o.month>=21:I==="market"?o.month>=6:I==="store"?o.month>=19:I==="school"?o.month>=4:!0}function y(I){return I==="studio"?"第 21 个月解锁":I==="market"?"第 6 个月解锁":I==="store"?"第 19 个月解锁":I==="school"?"第 4 个月解锁":""}const x={shop:[{id:"shop-kitchen",x:23,y:37,icon:"🥣",label:"去后厨",kind:"scene",value:"kitchen",desc:"准备食材、制作蛋糕与研发新品"},{id:"shop-mom",x:66,y:48,icon:"💬",label:"和妈妈聊聊",kind:"action",value:"momchat",desc:"听听林暖的经营心得，增进家庭默契"},{id:"shop-register",x:35,y:63,icon:"🧾",label:"柜台营业",kind:"panel",value:"shop",desc:"接待顾客、查看订单与打烊结算"},{id:"shop-phone",x:73,y:22,icon:"📱",label:"自媒体宣传",kind:"action",value:"market",desc:"发布蛋糕新品和店铺动态"},{id:"shop-decor",x:27,y:79,icon:"🪑",label:"装修与设备",kind:"panel",value:"shop",desc:"升级林记烘焙的店铺与设施"},{id:"shop-exit",x:83,y:76,icon:"🚶",label:"出门逛逛",kind:"scene",value:"street",desc:"前往栖云镇老街"}],kitchen:[{id:"kitchen-make",x:31,y:50,icon:"🍰",label:"制作蛋糕",kind:"panel",value:"kitchen",desc:"安排今天的生产和定价"},{id:"kitchen-recipe",x:73,y:31,icon:"🧪",label:"研发实验室",kind:"panel",value:"manage",section:"lab",desc:"试做新品、诊断配方并记录实验报告"},{id:"kitchen-mom",x:62,y:65,icon:"💬",label:"问问妈妈",kind:"action",value:"momchat",desc:"和林暖交流烘焙心得"},{id:"kitchen-back",x:18,y:79,icon:"↩",label:"返回店内",kind:"scene",value:"shop",desc:"回到蛋糕店前厅"}],street:[{id:"street-shop",x:19,y:32,icon:"🏠",label:"林记烘焙",kind:"scene",value:"shop",desc:"回自己的蛋糕店"},{id:"street-supplier",x:76,y:39,icon:"🧺",label:"食材铺",kind:"action",value:"restock",desc:"采购新鲜原料，补充库存"},{id:"street-cafe",x:39,y:51,icon:"☕",label:"咖啡馆",kind:"scene",value:"cafe",desc:"街角的独立咖啡店"},{id:"street-suqing",x:66,y:61,icon:"📷",label:"找苏晴",kind:"action",value:"sqchat",desc:"和一直陪伴你的好朋友聊聊天"},{id:"street-park",x:26,y:72,icon:"🌳",label:"河边公园",kind:"scene",value:"park",desc:"去河边走走"},{id:"street-home",x:79,y:80,icon:"🪴",label:"回家",kind:"scene",value:"home",desc:"回家休息一下"}],home:[{id:"home-mom",x:39,y:50,icon:"💬",label:"与妈妈谈心",kind:"action",value:"momchat",desc:"聊聊最近的经营和生活"},{id:"home-memory",x:70,y:29,icon:"📖",label:"翻看旧照片",kind:"panel",value:"codex",desc:"回顾林记和朋友们的故事"},{id:"home-street",x:72,y:79,icon:"🚶",label:"走出家门",kind:"scene",value:"street",desc:"回到老街"}],cafe:[{id:"cafe-suqing",x:70,y:56,icon:"📷",label:"约苏晴聊天",kind:"action",value:"sqchat",desc:"找苏晴聊聊近况"},{id:"cafe-market",x:31,y:43,icon:"📱",label:"合作推广",kind:"action",value:"market",desc:"与周边商家交流宣传"},{id:"cafe-back",x:75,y:80,icon:"↩",label:"返回老街",kind:"scene",value:"street",desc:"离开咖啡馆"}],park:[{id:"park-suqing",x:51,y:51,icon:"📷",label:"与苏晴散步",kind:"action",value:"sqchat",desc:"在河边说说近况"},{id:"park-memory",x:28,y:34,icon:"📒",label:"小镇手账",kind:"panel",value:"codex",desc:"回看收集的生活记忆"},{id:"park-back",x:73,y:79,icon:"↩",label:"回到老街",kind:"scene",value:"street",desc:"结束散步"}],market:[{id:"market-order",x:25,y:47,icon:"🧾",label:"市集营业",kind:"panel",value:"shop",desc:"接待顾客与完成订单"},{id:"market-post",x:70,y:46,icon:"📱",label:"活动宣传",kind:"action",value:"market",desc:"分享林记参加市集的消息"},{id:"market-back",x:74,y:80,icon:"↩",label:"返回老街",kind:"scene",value:"street",desc:"离开市集"}],studio:[{id:"studio-xinghe",x:32,y:52,icon:"🎨",label:"找星河聊聊",kind:"partner",value:"qinghe",desc:"聊聊品牌包装与她的设计工作"},{id:"studio-design",x:70,y:37,icon:"📔",label:"设计图鉴",kind:"panel",value:"codex",desc:"查看蛋糕与装饰收藏"},{id:"studio-back",x:73,y:79,icon:"↩",label:"返回老街",kind:"scene",value:"street",desc:"离开工作室"}],school:[{id:"school-photo",x:48,y:43,icon:"📒",label:"高中回忆",kind:"panel",value:"codex",desc:"回顾与苏晴相识的时光"},{id:"school-back",x:72,y:81,icon:"↩",label:"回到老街",kind:"scene",value:"street",desc:"走出校园"}],store:[{id:"store-operation",x:29,y:55,icon:"🏬",label:"管理门店",kind:"panel",value:"shop",desc:"查看新店和装修进度"},{id:"store-expand",x:74,y:42,icon:"🗺️",label:"城市经营",kind:"panel",value:"manage",desc:"考察城市、筹备分店"},{id:"store-back",x:74,y:80,icon:"↩",label:"返回老街",kind:"scene",value:"street",desc:"返回栖云镇"}]},k=G(()=>x[t.scene]||x.shop),O=G(()=>t.scene==="shop"?{file:"nu-sprite-in.webp",x:57,h:37}:t.scene==="street"||t.scene==="cafe"||t.scene==="park"?{file:"sq-sprite-out.webp",x:70,h:36}:t.scene==="kitchen"&&o.staff.includes("xiaoyu")?{file:"xy-sprite-in.webp",x:69,h:34}:t.scene==="studio"&&o.month>=21?{file:"xh-sprite-out.webp",x:70,h:36}:null);function q(I){if(!m(I)){v(y(I));return}d.value=null,u.value=!1,r("change-scene",I)}function K(I){if(I.kind==="scene"){q(I.value);return}if(I.kind==="panel"){r("open-panel",I.value,I.section||"overview");return}d.value=I}const B=G(()=>{if(!d.value)return null;if(d.value.kind==="partner"){const I=o.staff.includes(d.value.value);return{ap:1,cost:0,disabled:!I,note:I?"和伙伴交流，提升信赖":"她还没有加入林记的合作团队"}}return d.value.value==="momchat"?{ap:1,cost:0,disabled:!1,note:"家庭默契 +4"}:kr(d.value.value)});function C(){if(!d.value)return;if(o.phase!=="playing")return v("本轮经营已经结束");const I=d.value,U=B.value;if(!U||U.disabled||o.ap<U.ap||U.cost&&o.cash<U.cost)return v((U==null?void 0:U.note)||"当前资源不足，暂时无法执行");(I.kind==="partner"?lr("talk",{partner:I.value}):I.value==="momchat"?lr("talk",{partner:"mom"}):lr(I.value,{}))?(v(I.label+" · 已完成"),d.value=null):v("暂时无法执行，请检查行动力或触发条件")}return(I,U)=>{var ee,P,Q,J,Y,N;return g(),_("section",Lv,[l("div",{class:ae(["world-canvas","world-"+e.scene])},[M(ln)(a.value.img)!=="no"?(g(),_("img",{key:0,class:"world-background",src:M(Ie)(a.value.img),alt:a.value.name},null,8,Pv)):z("",!0),U[6]||(U[6]=l("div",{class:"world-vignette","aria-hidden":"true"},null,-1)),l("header",Vv,[l("div",jv,[l("span",Bv,h(e.scene==="shop"?"HOME":"QIYUN TOWN")+" · 第 "+h(M(o).month)+" 月",1),l("h1",Hv,h(a.value.name),1),l("div",qv,h(a.value.sub),1)]),l("button",{type:"button",class:"world-compass","aria-label":"打开地点地图",onClick:U[0]||(U[0]=w=>u.value=!u.value)}," 🗺️ ")]),O.value&&M(ln)(O.value.file)==="ok"?(g(),_("img",{key:1,class:"world-actor",src:M(Ie)(O.value.file),alt:"",style:De({left:O.value.x+"%",height:O.value.h+"%"})},null,12,Kv)):z("",!0),(g(!0),_(W,null,te(k.value,w=>(g(),_("button",{key:w.id,type:"button",class:"world-hotspot",style:De({left:w.x+"%",top:w.y+"%"}),"aria-label":w.label,onClick:F=>K(w)},[l("span",Wv,h(w.icon),1),l("span",zv,h(w.label),1)],12,Uv))),128)),l("div",Gv,[l("span",null,"活力 "+h(M(o).stamina)+"/"+h(M(o).maxStamina),1),l("span",null,"行动力 "+h(M(o).ap)+"/"+h(M(o).maxAp),1),l("span",null,"口碑 "+h(Math.round(M(o).reputation)),1)]),f.value?(g(),_("div",Yv,h(f.value),1)):z("",!0),u.value?(g(),_("div",Jv,[l("div",Zv,[U[5]||(U[5]=l("span",null,"栖云镇 · 地点地图",-1)),l("button",{type:"button","aria-label":"关闭地点地图",onClick:U[1]||(U[1]=w=>u.value=!1)},"✕")]),l("div",Qv,[(g(!0),_(W,null,te(M(i),w=>(g(),_("button",{key:w.id,type:"button",class:ae(["world-travel-place",{locked:!m(w.id),current:e.scene===w.id}]),onClick:F=>q(w.id)},[l("img",{src:M(Ie)(w.img),alt:""},null,8,e1),l("span",n1,h(w.icon)+" "+h(w.name),1),m(w.id)?z("",!0):(g(),_("span",t1,"未开放"))],10,Xv))),128))])])):z("",!0),d.value?(g(),_("div",{key:4,class:"world-action-mask",onClick:U[3]||(U[3]=Ln(w=>d.value=null,["self"]))},[l("div",r1,[l("div",s1,h(d.value.icon),1),l("div",o1,[l("strong",null,h(d.value.label),1),l("span",null,h(d.value.desc),1),B.value?(g(),_("small",i1,[we(h(B.value.ap)+" 点行动力 ",1),B.value.cost?(g(),_(W,{key:0},[we(" · ¥"+h(B.value.cost),1)],64)):z("",!0)])):z("",!0)]),l("div",l1,[l("button",{type:"button",class:"world-action-cancel",onClick:U[2]||(U[2]=w=>d.value=null)},"取消"),l("button",{type:"button",class:"world-action-confirm",disabled:M(o).phase!=="playing"||((ee=B.value)==null?void 0:ee.disabled)||M(o).ap<(((P=B.value)==null?void 0:P.ap)||0)||M(o).cash<(((Q=B.value)==null?void 0:Q.cost)||0),onClick:C},h((J=B.value)!=null&&J.disabled?"暂未开放":"开始行动"),9,a1)]),(Y=B.value)!=null&&Y.disabled?(g(),_("p",c1,h(B.value.note),1)):z("",!0)])])):z("",!0)],2),l("div",u1,[l("div",d1,[l("span",f1,h(((N=M(Fr))==null?void 0:N.name)||"今日经营"),1),l("span",null,"阶段目标 "+h(M(Fn).done)+"/"+h(M(Fn).need),1)]),l("button",{class:"world-travel-button",type:"button",onClick:U[4]||(U[4]=w=>u.value=!u.value)},[...U[7]||(U[7]=[l("span",null,"🧭",-1),we(" 地点地图 ",-1)])]),U[8]||(U[8]=l("span",{class:"world-help"},"点击场景中的标记进行互动",-1))])])}}},p1=yn(h1,[["__scopeId","data-v-7974efbf"]]),m1={class:"app"},v1={class:"topbar"},g1={class:"m serif"},_1={class:"topbar-right"},b1=["title"],y1={class:"purse"},k1={class:"scroll scene-scroll"},x1={class:"between scene-meta"},M1={class:"small muted"},E1={class:"chip"},$1=["disabled"],w1={class:"scene-panel"},C1={class:"scene-panel-head"},T1={class:"small muted"},I1={class:"scene-panel-content"},S1={class:"nav scene-nav"},A1={class:"sheet"},D1={class:"sheet-head"},N1={class:"t serif"},O1={class:"small muted"},R1={class:"sheet-body"},F1={class:"card card-pad"},L1={class:"between small",style:{"margin-bottom":"6px"}},P1={class:"between small",style:{"margin-bottom":"6px"}},V1={class:"between small",style:{"margin-bottom":"6px"}},j1={class:"between small"},B1={key:0,class:"card card-pad",style:{"margin-top":"12px"}},H1={class:"h2"},q1={class:"between small",style:{"margin-bottom":"6px"}},K1={class:"between small",style:{"margin-bottom":"6px"}},U1={class:"between small",style:{"margin-bottom":"6px"}},W1={class:"between small"},z1={class:"between small",style:{"margin-top":"6px"}},G1={key:0,class:"delta"},Y1={key:0,class:"mrep"},J1={class:"mrep-b"},Z1={key:1,class:"mrep"},Q1={class:"mrep-b"},X1={key:2,class:"mrep"},eg={class:"mrep-b"},ng={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},tg={class:"sheet-foot"},rg={key:3,class:"mask"},sg={class:"sheet"},og={class:"sheet-body",style:{"padding-top":"22px"}},ig={class:"small muted serif"},lg={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},ag={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},cg={class:"card card-pad"},ug={class:"between small",style:{"margin-bottom":"6px"}},dg={class:"between small",style:{"margin-bottom":"6px"}},fg={class:"between small"},hg={key:1,class:"card card-pad",style:{"margin-top":"12px"}},pg={class:"pn"},mg={class:"muted small"},vg={class:"pt"},gg={class:"sheet-foot"},_g={__name:"App",setup(e){const n=[{id:"shop",label:"店铺",icon:"house"},{id:"kitchen",label:"厨房",icon:"bowl"},{id:"partners",label:"伙伴",icon:"heart"},{id:"manage",label:"经营",icon:"list"},{id:"codex",label:"图鉴",icon:"book"}],t=ce("shop"),r=ce("shop"),s=ce(""),i=ce("overview");function a(F,E="overview"){s.value=F,F==="manage"&&(i.value=E)}function u(){s.value="",i.value="overview"}const d=ce(null),f=ce(null),c=ce(null),v=ce(!1),m=new URLSearchParams(location.search).get("dev")==="1";function y(){const F=location.hash.replace("#","");return n.some(E=>E.id===F)?F:"shop"}t.value=y(),window.addEventListener("hashchange",()=>t.value=y());const x=G(()=>o.phase==="ended"&&o.ending&&!rn.events.length&&!v.value?o.ending:null),k=G(()=>m&&o.ending&&dt.some(F=>!F.final&&F.short.key===o.ending.key)),O=G(()=>rn.events.length);function q(){rn.events.length&&(d.value=rn.events[0])}function K(){rn.events.shift(),d.value=null,Me();const F=rn.events[0];F&&F.month===o.month&&setTimeout(q,200)}function B(F){f.value=F,F.day===yr&&(c.value=o.report)}function C(){f.value=null,c.value=null,rn.events.length&&q()}function I(){Nu()&&(t.value="shop",v.value=!1,Qr(),q())}function U(){v.value=!0}function ee(){Ru()&&(v.value=!1,f.value=null,c.value=null,Qr(),q())}function P(){d.value||f.value||Ou()&&(d.value=null,c.value=null,f.value=null,q())}Bn(()=>o.autoStory,F=>{F&&(o.autoStory=!1,setTimeout(()=>{!d.value&&rn.events.length&&q()},90))});const Q=G(()=>{if(!x.value)return[];const F=ct.filter(R=>o.staff.includes(R.id)).map(R=>({name:R.nick,role:R.role,...Ao(R.id)||{}})),E=Ao("mom");return E&&F.push({name:"林暖",role:"母亲",...E}),F.filter(R=>R.title)}),J=ce(localStorage.getItem("alb-music")!=="off");let Y=null;function N(){J.value=!J.value,localStorage.setItem("alb-music",J.value?"on":"off"),Y&&(J.value?Y.play().catch(()=>{}):Y.pause())}function w(){if(Y){J.value&&Y.play().catch(()=>{});return}Y=new Audio("./audio/bgm.mp3"),Y.loop=!0,Y.volume=.4,J.value&&Y.play().catch(()=>{})}return $s(()=>{window.addEventListener("pointerdown",w,{once:!0}),sd(),Su()||pl(),Qr(),q()}),(F,E)=>(g(),_("div",m1,[l("div",v1,[l("div",g1,[we(h(M(sr)(M(o).month))+" ",1),l("small",null,"第 "+h(M(o).month)+" / 36 月 · 第 "+h(M(o).day)+" / "+h(M(yr))+" 日",1)]),l("div",_1,[l("button",{class:"music",type:"button",title:J.value?"关掉音乐":"打开音乐",onClick:Ln(N,["stop"])},h(J.value?"♪":"×"),9,b1),l("div",y1,[E[6]||(E[6]=l("span",{class:"y"},"¥",-1)),we(h(M(o).cash.toLocaleString()),1)])])]),l("div",k1,[l("div",x1,[l("span",M1,h(M(Fr).name),1),l("span",E1,"行动力 "+h(M(o).ap)+" · 体力 "+h(M(o).stamina),1)]),m&&M(o).phase==="playing"?(g(),_("button",{key:0,class:"btn",type:"button",style:{width:"100%",margin:"0 0 8px"},disabled:!!d.value||!!f.value,onClick:P},"开发者后门 · 跳过本月",8,$1)):z("",!0),Ne(p1,{scene:r.value,onChangeScene:E[0]||(E[0]=R=>r.value=R),onOpenPanel:a},null,8,["scene"]),s.value?(g(),_("div",{key:1,class:"scene-panel-mask",onClick:Ln(u,["self"])},[l("section",w1,[l("header",C1,[l("div",null,[l("div",T1,"林记烘焙 · "+h(M(sr)(M(o).month)),1),l("strong",null,h({shop:"店铺营业",kitchen:"今日制作",partners:"伙伴与员工",manage:"经营与研发",codex:"手账与图鉴"}[s.value]||"经营"),1)]),l("button",{type:"button",class:"scene-panel-close",onClick:u},"✕")]),l("div",I1,[s.value==="shop"?(g(),Rn(Kf,{key:0,onClosed:B})):s.value==="kitchen"?(g(),Rn(kh,{key:1})):s.value==="partners"?(g(),Rn(ip,{key:2})):s.value==="manage"?(g(),Rn(jm,{key:3,"initial-section":i.value},null,8,["initial-section"])):s.value==="codex"?(g(),Rn(Fv,{key:4})):z("",!0)])])])):z("",!0)]),O.value?(g(),_("button",{key:0,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"calc(var(--nav-h) + 16px)","z-index":"20","box-shadow":"var(--shadow)"},onClick:q}," 有 "+h(O.value)+" 段剧情 ",1)):z("",!0),l("div",S1,[l("button",{class:ae({on:!s.value&&r.value==="shop"}),type:"button",onClick:E[1]||(E[1]=R=>{u(),r.value="shop"})},[...E[7]||(E[7]=[l("span",{class:"nav-emoji"},"🏠",-1),l("span",null,"店内",-1)])],2),l("button",{class:ae({on:r.value==="street"&&!s.value}),type:"button",onClick:E[2]||(E[2]=R=>{u(),r.value="street"})},[...E[8]||(E[8]=[l("span",{class:"nav-emoji"},"🗺️",-1),l("span",null,"小镇",-1)])],2),l("button",{class:ae({on:s.value==="partners"}),type:"button",onClick:E[3]||(E[3]=R=>a("partners"))},[...E[9]||(E[9]=[l("span",{class:"nav-emoji"},"👥",-1),l("span",null,"伙伴",-1)])],2),l("button",{class:ae({on:s.value==="manage"}),type:"button",onClick:E[4]||(E[4]=R=>a("manage"))},[...E[10]||(E[10]=[l("span",{class:"nav-emoji"},"📋",-1),l("span",null,"任务",-1)])],2),l("button",{class:ae({on:s.value==="codex"}),type:"button",onClick:E[5]||(E[5]=R=>a("codex"))},[...E[11]||(E[11]=[l("span",{class:"nav-emoji"},"📖",-1),l("span",null,"手账",-1)])],2)]),d.value?(g(),Rn(Fd,{key:1,ev:d.value,onDone:K},null,8,["ev"])):z("",!0),f.value?(g(),_("div",{key:2,class:"mask",onClick:Ln(C,["self"])},[l("div",A1,[l("div",D1,[l("div",N1,h(c.value?"月末结算":"打烊了"),1),l("div",O1,h(M(sr)(M(o).month))+" · 第 "+h(f.value.day)+" 个经营日",1)]),l("div",R1,[l("div",F1,[l("div",L1,[E[12]||(E[12]=l("span",{class:"muted"},"今天卖出",-1)),l("span",null,h(f.value.sold)+" 个",1)]),l("div",P1,[E[13]||(E[13]=l("span",{class:"muted"},"今日收入",-1)),l("span",null,"¥"+h(f.value.rev),1)]),l("div",V1,[E[14]||(E[14]=l("span",{class:"muted"},"剩下",-1)),l("span",null,h(f.value.left)+" 个",1)]),l("div",j1,[E[15]||(E[15]=l("span",{class:"muted"},"剩货回收",-1)),l("span",null,"¥"+h(f.value.gain),1)])]),c.value?(g(),_("div",B1,[l("div",H1,h(c.value.month)+" 月经营报告",1),l("div",q1,[E[16]||(E[16]=l("span",{class:"muted"},"营业额",-1)),l("span",null,"¥"+h(c.value.rev),1)]),l("div",K1,[E[17]||(E[17]=l("span",{class:"muted"},"支出",-1)),l("span",null,"¥"+h(c.value.cost),1)]),l("div",U1,[E[18]||(E[18]=l("span",{class:"muted"},"净收入",-1)),l("span",{style:De({color:c.value.net>=0?"#6c8a55":"var(--berry)"})},h(c.value.net>=0?"+":"")+h(c.value.net),5)]),l("div",W1,[E[19]||(E[19]=l("span",{class:"muted"},"最受欢迎",-1)),l("span",null,h(c.value.best)+"（"+h(c.value.bestN)+" 个）",1)]),l("div",z1,[E[20]||(E[20]=l("span",{class:"muted"},"口碑",-1)),l("span",null,[we(h(c.value.rep)+" ",1),c.value.repDelta?(g(),_("em",G1,h(c.value.repDelta>0?"+":"")+h(c.value.repDelta),1)):z("",!0)])]),c.value.fresh&&c.value.fresh.length?(g(),_("div",Y1,[E[21]||(E[21]=l("div",{class:"mrep-t"},"这个月新上了",-1)),l("div",J1,h(c.value.fresh.join("、")),1)])):z("",!0),c.value.grown&&c.value.grown.length?(g(),_("div",Z1,[E[22]||(E[22]=l("div",{class:"mrep-t"},"伙伴长进了",-1)),l("div",Q1,h(c.value.grown.join(" · ")),1)])):z("",!0),c.value.trust&&c.value.trust.length?(g(),_("div",X1,[E[23]||(E[23]=l("div",{class:"mrep-t"},"信赖",-1)),l("div",eg,[(g(!0),_(W,null,te(c.value.trust,(R,le)=>(g(),_("span",{key:R.name},h(le?" · ":"")+h(R.name)+" "+h(R.v),1))),128))])])):z("",!0),c.value.warn?(g(),_("p",ng,h(c.value.warn),1)):z("",!0)])):z("",!0)]),l("div",tg,[l("button",{class:"btn primary block",type:"button",onClick:C},h(x.value?"看结局":"继续"),1)])])])):z("",!0),x.value?(g(),_("div",rg,[l("div",sg,[l("div",og,[l("div",ig,h(x.value.name),1),l("h2",lg,h(x.value.title),1),x.value.text?(g(),_("p",ag,h(x.value.text),1)):z("",!0),l("div",cg,[l("div",ug,[E[24]||(E[24]=l("span",{class:"muted"},"门店 / 伙伴",-1)),l("span",null,h(M(o).storeCount)+" 家 · "+h(M(o).staff.length)+" 人",1)]),l("div",dg,[E[25]||(E[25]=l("span",{class:"muted"},"产品 / 相册",-1)),l("span",null,h(M(o).unlocked.length)+" 款 · "+h(M(o).photos.length)+" 张",1)]),l("div",fg,[E[26]||(E[26]=l("span",{class:"muted"},"口碑 / 知名度",-1)),l("span",null,h(Math.round(M(o).reputation))+" / "+h(Math.round(M(o).popularity)),1)])]),Q.value.length?(g(),_("div",hg,[E[27]||(E[27]=l("div",{class:"h2"},"他们的后来",-1)),(g(!0),_(W,null,te(Q.value,(R,le)=>(g(),_("div",{key:le,class:"pl"},[l("div",pg,[we(h(R.name),1),l("span",mg," · "+h(R.title),1)]),l("div",vg,h(R.text),1)]))),128))])):z("",!0)]),l("div",gg,[l("button",{class:"btn block",type:"button",onClick:U},"结束本局"),k.value?(g(),_("button",{key:0,class:"btn block",type:"button",onClick:ee}," 继续剧情 ")):z("",!0),l("button",{class:"btn primary block",type:"button",onClick:I},"开启二周目")])])])):z("",!0)]))}},bg=yn(_g,[["__scopeId","data-v-db1b39f0"]]);eu(bg).mount("#app");
