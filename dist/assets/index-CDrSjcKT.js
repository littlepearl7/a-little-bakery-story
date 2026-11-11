(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Xs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const de={},jt=[],lt=()=>{},di=()=>!1,as=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),cs=e=>e.startsWith("onUpdate:"),ke=Object.assign,Qs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},jo=Object.prototype.hasOwnProperty,ie=(e,t)=>jo.call(e,t),K=Array.isArray,At=e=>$n(e)==="[object Map]",Yn=e=>$n(e)==="[object Set]",yr=e=>$n(e)==="[object Date]",J=e=>typeof e=="function",pe=e=>typeof e=="string",at=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",hi=e=>(oe(e)||J(e))&&J(e.then)&&J(e.catch),pi=Object.prototype.toString,$n=e=>pi.call(e),Ho=e=>$n(e).slice(8,-1),mi=e=>$n(e)==="[object Object]",er=e=>pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,fn=Xs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),us=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Uo=/-\w/g,Ze=us(e=>e.replace(Uo,t=>t.slice(1).toUpperCase())),Ko=/\B([A-Z])/g,Wt=us(e=>e.replace(Ko,"-$1").toLowerCase()),gi=us(e=>e.charAt(0).toUpperCase()+e.slice(1)),xs=us(e=>e?`on${gi(e)}`:""),it=(e,t)=>!Object.is(e,t),ks=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},vi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},qo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Wo=e=>{const t=pe(e)?Number(e):NaN;return isNaN(t)?e:t};let br;const fs=()=>br||(br=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ne(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=pe(s)?Jo(s):Ne(s);if(r)for(const i in r)t[i]=r[i]}return t}else if(pe(e)||oe(e))return e}const zo=/;(?![^(]*\))/g,Go=/:([^]+)/,Yo=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Jo(e){const t={};return e.replace(Yo,n=>n.startsWith("/*")?"":n).split(zo).forEach(n=>{if(n){const s=n.split(Go);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function ve(e){let t="";if(pe(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const s=ve(e[n]);s&&(t+=s+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Zo="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Xo=Xs(Zo);function _i(e){return!!e||e===""}function Qo(e,t,n){if(e.length!==t.length)return!1;let s=!0;for(let r=0;s&&r<e.length;r++)s=ds(e[r],t[r],n);return s}function xr(e,t,n){if(e.size!==t.size)return!1;const s=Array.from(t),r=new Uint8Array(s.length);for(const i of e){let o=-1;for(let l=0;l<s.length;l++)if(!r[l]&&ds(i,s[l],n)){o=l;break}if(o<0)return!1;r[o]=1}return!0}function el(e,t,n){let s=At(e),r=At(t);if(s||r||(s=Yn(e),r=Yn(t),s||r))return s&&r?xr(e,t,n):!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const l in e){const u=e.hasOwnProperty(l),m=t.hasOwnProperty(l);if(u&&!m||!u&&m||!ds(e[l],t[l],n))return!1}return String(e)===String(t)}function kr(e,t,n,s){n||(n=[new Map,new Map]);const[r,i]=n;if(r.has(e)||i.has(t))return r.get(e)===t&&i.get(t)===e;r.set(e,t),i.set(t,e);const o=s(e,t,n);return r.delete(e),i.delete(t),o}function ds(e,t,n){if(e===t)return!0;let s=yr(e),r=yr(t);return s||r?s&&r?e.getTime()===t.getTime():!1:(s=at(e),r=at(t),s||r?e===t:(s=K(e),r=K(t),s||r?s&&r?kr(e,t,n,Qo):!1:(s=oe(e),r=oe(t),s||r?!s||!r?!1:kr(e,t,n,el):String(e)===String(t))))}const yi=e=>!!(e&&e.__v_isRef===!0),v=e=>pe(e)?e:e==null?"":K(e)||oe(e)&&(e.toString===pi||!J(e.toString))?yi(e)?v(e.value):JSON.stringify(e,bi,2):String(e),bi=(e,t)=>yi(t)?bi(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r],i)=>(n[Ms(s,i)+" =>"]=r,n),{})}:Yn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ms(n))}:at(t)?Ms(t):oe(t)&&!K(t)&&!mi(t)?String(t):t,Ms=(e,t="")=>{var n;return at(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ee;class tl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ee&&(Ee.active?(this.parent=Ee,this.index=(Ee.scopes||(Ee.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=Ee;try{return Ee=this,t()}finally{Ee=n}}}on(){++this._on===1&&(this.prevScope=Ee,Ee=this)}off(){if(this._on>0&&--this._on===0){if(Ee===this)Ee=this.prevScope;else{let t=Ee;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const r=this.scopes.slice();for(n=0,s=r.length;n<s;n++)r[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function nl(){return Ee}let fe;const Es=new WeakSet;class xi{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ee&&(Ee.active?Ee.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Es.has(this)&&(Es.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Mr(this),Ei(this);const t=fe,n=Xe;fe=this,Xe=!0;try{return this.fn()}finally{Ti(this),fe=t,Xe=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)sr(t);this.deps=this.depsTail=void 0,Mr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Es.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Fs(this)&&this.run()}get dirty(){return Fs(this)}}let ki=0,dn,hn;function Mi(e,t=!1){if(e.flags|=8,t){e.next=hn,hn=e;return}e.next=dn,dn=e}function tr(){ki++}function nr(){if(--ki>0)return;if(hn){let t=hn;for(hn=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;dn;){let t=dn;for(dn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Ei(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ti(e){let t,n=e.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),sr(s),sl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=n}function Fs(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ci(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ci(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===_n)||(e.globalVersion=_n,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Fs(e))))return;e.flags|=2;const t=e.dep,n=fe,s=Xe;fe=e,Xe=!0;try{Ei(e);const r=e.fn(e._value);(t.version===0||it(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=n,Xe=s,Ti(e),e.flags&=-3}}function sr(e,t=!1){const{dep:n,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)sr(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function sl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Xe=!0;const Si=[];function ct(){Si.push(Xe),Xe=!1}function ut(){const e=Si.pop();Xe=e===void 0?!0:e}function Mr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let _n=0;class rl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class rr{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!Xe||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new rl(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,wi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=s)}return n}trigger(t){this.version++,_n++,this.notify(t)}notify(t){tr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{nr()}}}function wi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)wi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Ls=new WeakMap,Ht=Symbol(""),Rs=Symbol(""),yn=Symbol("");function Ce(e,t,n){if(Xe&&fe){let s=Ls.get(e);s||Ls.set(e,s=new Map);let r=s.get(n);r||(s.set(n,r=new rr),r.map=s,r.key=n),r.track()}}function yt(e,t,n,s,r,i){const o=Ls.get(e);if(!o){_n++;return}const l=u=>{u&&u.trigger()};if(tr(),t==="clear")o.forEach(l);else{const u=K(e),m=u&&er(n);if(u&&n==="length"){const c=Number(s);o.forEach((h,g)=>{(g==="length"||g===yn||!at(g)&&g>=c)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),m&&l(o.get(yn)),t){case"add":u?m&&l(o.get("length")):(l(o.get(Ht)),At(e)&&l(o.get(Rs)));break;case"delete":u||(l(o.get(Ht)),At(e)&&l(o.get(Rs)));break;case"set":At(e)&&l(o.get(Ht));break}}nr()}function Gt(e){const t=re(e);return t===e||(Ce(t,"iterate",yn),He(e))?t:ft(e)?It(e)?t.map(n=>$t(Ke(n))):t.map($t):t.map(Ke)}function hs(e){return Ce(e=re(e),"iterate",yn),e}function nt(e,t){return ft(e)?$t(It(e)?Ke(t):t):Ke(t)}const il={__proto__:null,[Symbol.iterator](){return Ts(this,Symbol.iterator,e=>nt(this,e))},concat(...e){return Gt(this).concat(...e.map(t=>K(t)?Gt(t):t))},entries(){return Ts(this,"entries",e=>(e[1]=nt(this,e[1]),e))},every(e,t){return mt(this,"every",e,t,void 0,arguments)},filter(e,t){return mt(this,"filter",e,t,n=>n.map(s=>nt(this,s)),arguments)},find(e,t){return mt(this,"find",e,t,n=>nt(this,n),arguments)},findIndex(e,t){return mt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return mt(this,"findLast",e,t,n=>nt(this,n),arguments)},findLastIndex(e,t){return mt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return mt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cs(this,"includes",e)},indexOf(...e){return Cs(this,"indexOf",e)},join(e){return Gt(this).join(e)},lastIndexOf(...e){return Cs(this,"lastIndexOf",e)},map(e,t){return mt(this,"map",e,t,void 0,arguments)},pop(){return nn(this,"pop")},push(...e){return nn(this,"push",e)},reduce(e,...t){return Tr(this,"reduce",e,t)},reduceRight(e,...t){return Tr(this,"reduceRight",e,t)},shift(){return nn(this,"shift")},some(e,t){return mt(this,"some",e,t,void 0,arguments)},splice(...e){return nn(this,"splice",e)},toReversed(){return Gt(this).toReversed()},toSorted(e){return Gt(this).toSorted(e)},toSpliced(...e){return Gt(this).toSpliced(...e)},unshift(...e){return nn(this,"unshift",e)},values(){return Ts(this,"values",e=>nt(this,e))}};function Ts(e,t,n){const s=hs(e),r=s[t],i=r.call(s);if(s!==e&&!He(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Er(i.next(),n),r!==Ai[t]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Er(i._next(),n)}return i}function Er(e,t){return e.done||(e.value=t(e.value)),e}const Ai=Array.prototype;function mt(e,t,n,s,r,i){const o=hs(e),l=o!==e&&!He(e),u=o[t];if(u!==Ai[t]){const h=u.apply(e,i);return l?Ke(h):h}let m=n;o!==e&&(l?m=function(h,g){return n.call(this,nt(e,h),g,e)}:n.length>2&&(m=function(h,g){return n.call(this,h,g,e)}));const c=u.call(o,m,s);return l&&r?r(c):c}function Tr(e,t,n,s){const r=hs(e),i=r!==e&&!He(e);let o=n,l=!1;r!==e&&(i?(l=s.length===0,o=function(m,c,h){return l&&(l=!1,m=nt(e,m)),n.call(this,m,nt(e,c),h,e)}):n.length>3&&(o=function(m,c,h){return n.call(this,m,c,h,e)}));const u=r[t](o,...s);return l?nt(e,u):u}function Cs(e,t,n){const s=re(e);Ce(s,"iterate",yn);const r=s[t](...n);return(r===-1||r===!1)&&lr(n[0])?(n[0]=re(n[0]),s[t](...n)):r}function nn(e,t,n=[]){ct(),tr();const s=re(e)[t].apply(e,n);return nr(),ut(),s}const ol=Xs("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(at));function ll(e){at(e)||(e=String(e));const t=re(this);return Ce(t,"has",e),t.hasOwnProperty(e)}class $i{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?vl:Fi:i?Di:Ni).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=K(t);if(!r){let u;if(o&&(u=il[n]))return u;if(n==="hasOwnProperty")return ll}const l=Reflect.get(t,n,Ie(t)?t:s);if((at(n)?Ii.has(n):ol(n))||(r||Ce(t,"get",n),i))return l;if(Ie(l)){const u=o&&er(n)?l:l.value;return r&&oe(u)?Vs(u):u}return oe(l)?r?Vs(l):en(l):l}}class Oi extends $i{constructor(t=!1){super(!1,t)}set(t,n,s,r){let i=t[n];const o=K(t)&&er(n);if(!this._isShallow){const m=ft(i);if(!He(s)&&!ft(s)&&(i=re(i),s=re(s)),!o&&Ie(i)&&!Ie(s))return m||(i.value=s),!0}const l=o?Number(n)<t.length:ie(t,n),u=Reflect.set(t,n,s,Ie(t)?t:r);return t===re(r)&&u&&(l?it(s,i)&&yt(t,"set",n,s):yt(t,"add",n,s)),u}deleteProperty(t,n){const s=ie(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&s&&yt(t,"delete",n,void 0),r}has(t,n){const s=Reflect.has(t,n);return(!at(n)||!Ii.has(n))&&Ce(t,"has",n),s}ownKeys(t){return Ce(t,"iterate",K(t)?"length":Ht),Reflect.ownKeys(t)}}class al extends $i{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const cl=new Oi,ul=new al,fl=new Oi(!0);const Ps=e=>e,Rn=e=>Reflect.getPrototypeOf(e);function dl(e,t,n){return function(...s){const r=this.__v_raw,i=re(r),o=At(i),l=e==="entries"||e===Symbol.iterator&&o,u=e==="keys"&&o,m=r[e](...s),c=n?Ps:t?$t:Ke;return!t&&Ce(i,"iterate",u?Rs:Ht),ke(Object.create(m),{next(){const{value:h,done:g}=m.next();return g?{value:h,done:g}:{value:l?[c(h[0]),c(h[1])]:c(h),done:g}}})}}function Pn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function hl(e,t){const n={get(r){const i=this.__v_raw,o=re(i),l=re(r);e||(it(r,l)&&Ce(o,"get",r),Ce(o,"get",l));const{has:u}=Rn(o),m=t?Ps:e?$t:Ke;if(u.call(o,r))return m(i.get(r));if(u.call(o,l))return m(i.get(l));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&Ce(re(r),"iterate",Ht),r.size},has(r){const i=this.__v_raw,o=re(i),l=re(r);return e||(it(r,l)&&Ce(o,"has",r),Ce(o,"has",l)),r===l?i.has(r):i.has(r)||i.has(l)},forEach(r,i){const o=this,l=o.__v_raw,u=re(l),m=t?Ps:e?$t:Ke;return!e&&Ce(u,"iterate",Ht),l.forEach((c,h)=>r.call(i,m(c),m(h),o))}};return ke(n,e?{add:Pn("add"),set:Pn("set"),delete:Pn("delete"),clear:Pn("clear")}:{add(r){const i=re(this),o=Rn(i),l=re(r),u=!t&&!He(r)&&!ft(r)?l:r;return o.has.call(i,u)||it(r,u)&&o.has.call(i,r)||it(l,u)&&o.has.call(i,l)||(i.add(u),yt(i,"add",u,u)),this},set(r,i){!t&&!He(i)&&!ft(i)&&(i=re(i));const o=re(this),{has:l,get:u}=Rn(o);let m=l.call(o,r);m||(r=re(r),m=l.call(o,r));const c=u.call(o,r);return o.set(r,i),m?it(i,c)&&yt(o,"set",r,i):yt(o,"add",r,i),this},delete(r){const i=re(this),{has:o,get:l}=Rn(i);let u=o.call(i,r);u||(r=re(r),u=o.call(i,r)),l&&l.call(i,r);const m=i.delete(r);return u&&yt(i,"delete",r,void 0),m},clear(){const r=re(this),i=r.size!==0,o=r.clear();return i&&yt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=dl(r,e,t)}),n}function ir(e,t){const n=hl(e,t);return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_isShallow"?t:r==="__v_raw"?s:Reflect.get(ie(n,r)&&r in s?n:s,r,i)}const pl={get:ir(!1,!1)},ml={get:ir(!1,!0)},gl={get:ir(!0,!1)};const Ni=new WeakMap,Di=new WeakMap,Fi=new WeakMap,vl=new WeakMap;function _l(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function en(e){return ft(e)?e:or(e,!1,cl,pl,Ni)}function yl(e){return or(e,!1,fl,ml,Di)}function Vs(e){return or(e,!0,ul,gl,Fi)}function or(e,t,n,s,r){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=r.get(e);if(i)return i;const o=_l(Ho(e));if(o===0)return e;const l=new Proxy(e,o===2?s:n);return r.set(e,l),l}function It(e){return ft(e)?It(e.__v_raw):!!(e&&e.__v_isReactive)}function ft(e){return!!(e&&e.__v_isReadonly)}function He(e){return!!(e&&e.__v_isShallow)}function lr(e){return e?!!e.__v_raw:!1}function re(e){const t=e&&e.__v_raw;return t?re(t):e}function bl(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&vi(e,"__v_skip",!0),e}const Ke=e=>oe(e)?en(e):e,$t=e=>oe(e)?Vs(e):e;function Ie(e){return e?e.__v_isRef===!0:!1}function Re(e){return xl(e,!1)}function xl(e,t){return Ie(e)?e:new kl(e,t)}class kl{constructor(t,n){this.dep=new rr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:re(t),this._value=n?t:Ke(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||He(t)||ft(t);t=s?t:re(t),it(t,n)&&(this._rawValue=t,this._value=s?t:Ke(t),this.dep.trigger())}}function F(e){return Ie(e)?e.value:e}const Ml={get:(e,t,n)=>t==="__v_raw"?e:F(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return Ie(r)&&!Ie(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function Li(e){return It(e)?e:new Proxy(e,Ml)}class El{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new rr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=_n-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Mi(this,!0),!0}get value(){const t=this.dep.track();return Ci(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Tl(e,t,n=!1){let s,r;return J(e)?s=e:(s=e.get,r=e.set),new El(s,r,n)}const Vn={},Jn=new WeakMap;let Pt;function Cl(e,t=!1,n=Pt){if(n){let s=Jn.get(n);s||Jn.set(n,s=[]),s.push(e)}}function Sl(e,t,n=de){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:l,call:u}=n,m=k=>r?k:He(k)||r===!1||r===0?St(k,1):St(k);let c,h,g,b,L=!1,S=!1;if(Ie(e)?(h=()=>e.value,L=He(e)):It(e)?(h=()=>m(e),L=!0):K(e)?(S=!0,L=e.some(k=>It(k)||He(k)),h=()=>e.map(k=>{if(Ie(k))return k.value;if(It(k))return m(k);if(J(k))return u?u(k,2):k()})):J(e)?t?h=u?()=>u(e,2):e:h=()=>{if(g){ct();try{g()}finally{ut()}}const k=Pt;Pt=c;try{return u?u(e,3,[b]):e(b)}finally{Pt=k}}:h=lt,t&&r){const k=h,B=r===!0?1/0:r;h=()=>St(k(),B)}const O=nl(),I=()=>{c.stop(),O&&O.active&&Qs(O.effects,c)};if(i&&t){const k=t;t=(...B)=>{try{return k(...B)}finally{I()}}}let A=S?new Array(e.length).fill(Vn):Vn;const V=k=>{if(!(!(c.flags&1)||!c.dirty&&!k))if(t){const B=c.run();if(k||r||L||(S?B.some((se,z)=>it(se,A[z])):it(B,A))){const se=Pt;ct();try{g&&g(),Pt=c;const z=[B,A===Vn?void 0:S&&A[0]===Vn?[]:A,b];A=B,u?u(t,3,z):t(...z)}finally{Pt=se,ut()}}}else c.run()};return l&&l(V),c=new xi(h),c.scheduler=o?()=>o(V,!1):V,b=k=>Cl(k,!1,c),g=c.onStop=()=>{const k=Jn.get(c);if(k){if(u)u(k,4);else for(const B of k)B();Jn.delete(c)}},t?s?V(!0):A=c.run():o?o(V.bind(null,!0),!0):c.run(),I.pause=c.pause.bind(c),I.resume=c.resume.bind(c),I.stop=I,I}function St(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Ie(e))St(e.value,t,n);else if(K(e))for(let s=0;s<e.length;s++)St(e[s],t,n);else if(Yn(e)||At(e))e.forEach(s=>{St(s,t,n)});else if(mi(e)){for(const s in e)St(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&St(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function On(e,t,n,s){try{return s?e(...s):e()}catch(r){ps(r,t,n)}}function qe(e,t,n,s){if(J(e)){const r=On(e,t,n,s);return r&&hi(r)&&r.catch(i=>{ps(i,t,n,void 0,!0)}),r}if(K(e)){const r=[];for(let i=0;i<e.length;i++)r.push(qe(e[i],t,n,s));return r}}function ps(e,t,n,s=!0,r=!1){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||de;if(t){let u=t.parent;const m=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;u;){const h=u.ec;if(h&&!u.isUnmounted&&(!r||u.scope.active)){for(let g=0;g<h.length;g++)if(h[g](e,m,c)===!1)return}u=u.parent}if(o){ct(),On(o,null,10,[e,m,c]),ut();return}}wl(e,n,i,s,l)}function wl(e,t,n,s=!0,r=!1){if(r)throw e;console.error(e)}const De=[];let Ye=-1;const st=[];let Ct=null,Jt=0;const Ri=Promise.resolve();let Zn=null;function Al(e){const t=Zn||Ri;return e?t.then(this?e.bind(this):e):t}function Il(e){let t=Ye+1,n=De.length;for(;t<n;){const s=t+n>>>1,r=De[s],i=bn(r);i<e||i===e&&r.flags&2?t=s+1:n=s}return t}function ms(e){if(!(e.flags&1)){const t=bn(e),n=De[De.length-1];!n||!(e.flags&2)&&t>=bn(n)?De.push(e):De.splice(Il(t),0,e),e.flags|=1,Pi()}}function Pi(){Zn||(Zn=Ri.then(ji))}function $l(e){if(!K(e))Ct&&e.id===-1?Ct.splice(Jt+1,0,e):e.flags&1||(st.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)st.push(e[t]);Pi()}function Vi(e,t,n,s=Ye+1){for(;s<De.length;s++){const r=De[s];if(r&&r.flags&2){if(e&&r.id!==e.uid||t!==void 0&&!(r.id>=t))continue;De.splice(s,1),s=e?s-1:Ye,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Bi(e,t,n=0){if(st.length){let s=st,r=0;if(t){s=[];for(let o=0;o<st.length;o++){const l=st[o];(l.i!==void 0?!l.i||l.i.uid<n:t.has(l))?st[r++]=l:s.push(l)}}const i=[...new Set(s)].sort((o,l)=>bn(o)-bn(l));if(st.length=r,Ct){for(let o=0;o<i.length;o++)Ct.push(i[o]);return}for(Ct=i,Jt=0;Jt<Ct.length;Jt++){const o=Ct[Jt];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}Ct=null,Jt=0}}let Ss=!1;function Ol(e,t){if(Ss){e();return}const n=t===void 0?void 0:new Set(st);e(),Ss=!0;try{Vi(void 0,t),Bi(void 0,n,t)}finally{Ss=!1}}const bn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ji(e){try{for(Ye=0;Ye<De.length;Ye++){const t=De[Ye];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),On(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ye<De.length;Ye++){const t=De[Ye];t&&(t.flags&=-2)}Ye=-1,De.length=0,Bi(),Zn=null,(De.length||st.length)&&ji()}}let ot=null,Hi=null;function Xn(e){const t=ot;return ot=e,Hi=e&&e.type.__scopeId||null,t}function Ui(e,t=ot,n){if(!t||e._n)return e;const s=(...r)=>{s._d&&ns(-1);const i=Xn(t),o=Kt.length;let l;try{l=e(...r)}finally{for(let u=Kt.length;u>o;u--)_o();Xn(i),s._d&&ns(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function Dt(e,t,n,s){let r=e;if(s==="beforeMount")e._mount=e;else if(s==="beforeUpdate"){const l=t&&t._mount;l&&(l._latest=e,e._mount=l)}else if(s==="mounted"){const l=e._latest;e._mount=e._latest=void 0,l&&(r=l,l._mount=void 0)}const i=r.dirs,o=t&&t.dirs;for(let l=0;l<i.length;l++){let u=i[l];o?u.oldValue=o[l].value:s==="mounted"&&u.oldValue!==void 0&&(u=ke({},u,{oldValue:void 0}));let m=u.dir[s];m&&(ct(),qe(m,n,8,[e.el,u,r,t]),ut())}}function Nl(e,t){if(Fe){let n=Fe.provides;const s=Fe.parent&&Fe.parent.provides;s===n&&(n=Fe.provides=Object.create(s)),n[e]=t}}function Kn(e,t,n=!1){const s=ko();if(s||Xt){let r=Xt?Xt._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&J(t)?t.call(s&&s.proxy):t}}const Dl=Symbol.for("v-scx"),Fl=()=>Kn(Dl);function Zt(e,t,n){return Ki(e,t,n)}function Ki(e,t,n=de){const{immediate:s,deep:r,flush:i,once:o}=n,l=ke({},n),u=t&&s||!t&&i!=="post";let m;if(Cn){if(i==="sync"){const b=Fl();m=b.__watcherHandles||(b.__watcherHandles=[])}else if(!u){const b=()=>{};return b.stop=lt,b.resume=lt,b.pause=lt,b}}const c=Fe;l.call=(b,L,S)=>qe(b,c,L,S);let h=!1;i==="post"?l.scheduler=b=>{b.i=c,Oe(b,c&&c.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(b,L)=>{L?b():ms(b)}),l.augmentJob=b=>{t&&(b.flags|=4),h&&(b.flags|=2,c&&(b.id=c.uid,b.i=c))};const g=Sl(e,t,l);return Cn&&(m?m.push(g):u&&g()),g}function Ll(e,t,n){const s=this.proxy,r=pe(e)?e.includes(".")?qi(s,e):()=>s[e]:e.bind(s,s);let i;J(t)?i=t:(i=t.handler,n=t);const o=Nn(this),l=Ki(r,i.bind(s),n);return o(),l}function qi(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const Rl=Symbol("_vte"),gs=e=>e.__isTeleport,je=Symbol("_leaveCb"),sn=Symbol("_enterCb");function Pl(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ar(()=>{e.isMounted=!0}),Xi(()=>{e.isUnmounting=!0}),e}const Be=[Function,Array],Wi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},Vl={name:"BaseTransition",props:Wi,setup(e,{slots:t}){const n=ko(),s=Pl();return()=>{const r=t.default&&Yi(t.default(),!0),i=r&&r.length?zi(r):n.subTree?ee():void 0;if(!i)return;const o=re(e),{mode:l}=o;if(s.isLeaving)return ws(i);const u=Qn(i);if(!u)return ws(i);const m=Bs(u,o,s,n);u.type!==we&&Ut(u,m);let c=n.subTree&&Qn(n.subTree);if(c&&c.type!==we&&!Bt(c,u)&&xn(n.subTree)){let h=Bs(c,o,s,n);if(Ut(c,h),l==="out-in"&&u.type!==we)return s.isLeaving=!0,h.afterLeave=()=>{if(s.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const g=()=>{n.job.flags&8||n.update()};g.i=n,ms(g)}else n.update();delete h.afterLeave,c=void 0},ws(i);l==="in-out"&&u.type!==we?h.delayLeave=(g,b,L)=>{const S=Gi(s,c);S[String(c.key)]=c,g[je]=()=>{b(),g[je]=void 0,delete m.delayedLeave,c=void 0},m.delayedLeave=()=>{L(),delete m.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function zi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==we){t=n;break}}return t}const Bl=Vl;function Gi(e,t){const{leavingVNodes:n}=e;let s=n.get(t.type);return s||(s=Object.create(null),n.set(t.type,s)),s}function Bs(e,t,n,s){const{appear:r,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:m,onEnterCancelled:c,onBeforeLeave:h,onLeave:g,onAfterLeave:b,onLeaveCancelled:L,onBeforeAppear:S,onAppear:O,onAfterAppear:I,onAppearCancelled:A}=t,V=String(e.key),k=Gi(n,e),B=(P,q)=>{P&&qe(P,s,9,q)},se=(P,q)=>{const U=q[1];B(P,q),K(P)?P.every(X=>X.length<=1)&&U():P.length<=1&&U()},z={mode:i,persisted:o,beforeEnter(P){let q=l;if(!n.isMounted)if(r)q=S||l;else return;P[je]&&P[je](!0);const U=k[V];if(U&&Bt(e,U)){let X=U.el[je];if(!X){const w=xn(U);X=w&&w.el[je]}X&&X()}B(q,[P])},enter(P){if(k[V]===e)return;let q=u,U=m,X=c;if(!n.isMounted)if(r)q=O||u,U=I||m,X=A||c;else return;let w=!1;P[sn]=ye=>{w||(w=!0,ye?B(X,[P]):B(U,[P]),z.delayedLeave&&z.delayedLeave(),P[sn]=void 0)};const Z=P[sn].bind(null,!1);q?se(q,[P,Z]):Z()},leave(P,q){const U=String(e.key);if(P[sn]&&P[sn](!0),n.isUnmounting)return q();B(h,[P]);let X=!1;P[je]=Z=>{X||(X=!0,q(),Z?B(L,[P]):B(b,[P]),P[je]=void 0,k[U]===e&&delete k[U])};const w=P[je].bind(null,!1);k[U]=e,g?se(g,[P,w]):w()},clone(P){const q=Bs(P,t,n,s);return q.afterLeave=()=>{z.afterLeave&&z.afterLeave()},q.delayLeave=(U,X,w)=>{z.delayLeave?z.delayLeave(U,X,w):w()},q.delayedLeave=()=>{z.delayedLeave&&z.delayedLeave()},q}};return z}function ws(e){if(vs(e))return e=Ot(e),e.children=null,e}function Qn(e){if(!vs(e))return gs(e.type)&&e.children?zi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&J(n.default))return n.default()}}function Ut(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Ut(gs(n.type)&&Qn(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const s=n.isHydrating?n.pendingBranch:n.activeBranch;s&&Ut(s,t.clone(s))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===ne&&K(e.children)){const n=ro(e.children,!1);n&&Ut(n,t)}}function Yi(e,t=!1,n){let s=[],r=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ne?(o.patchFlag&128&&r++,s=s.concat(Yi(o.children,t,l))):(t||o.type!==we)&&s.push(l!=null?Ot(o,{key:l}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function xn(e){if(e.component)return xn(e.component.subTree);if(e.type===ne){const t=K(e.children)&&ro(e.children,!1);return t?xn(t):void 0}if(e.type!==we)return e}function Ji(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Cr(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const es=new WeakMap;function pn(e,t,n,s,r=!1){if(K(e)){e.forEach((S,O)=>pn(S,t&&(K(t)?t[O]:t),n,s,r));return}if(mn(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&pn(e,t,n,s.component.subTree);return}const i=s.shapeFlag&4?fr(s.component):s.el,o=r?null:i,{i:l,r:u}=e,m=t&&t.r,c=l.refs===de?l.refs={}:l.refs,h=l.setupState,g=re(h),b=h===de?di:S=>Cr(c,S)?!1:ie(g,S),L=(S,O)=>!(O&&Cr(c,O));if(m!=null&&m!==u){if(Sr(t),pe(m))c[m]=null,b(m)&&(h[m]=null);else if(Ie(m)){const S=t;L(m,S.k)&&(m.value=null),S.k&&(c[S.k]=null)}}if(J(u))On(u,l,12,[o,c]);else{const S=pe(u),O=Ie(u);if(S||O){const I=()=>{if(e.f){const A=S?b(u)?h[u]:c[u]:L()||!e.k?u.value:c[e.k];if(r)K(A)&&Qs(A,i);else if(K(A))A.includes(i)||A.push(i);else if(S)c[u]=[i],b(u)&&(h[u]=c[u]);else{const V=[i];L(u,e.k)&&(u.value=V),e.k&&(c[e.k]=V)}}else S?(c[u]=o,b(u)&&(h[u]=o)):O&&(L(u,e.k)&&(u.value=o),e.k&&(c[e.k]=o))};if(o){const A=()=>{I(),es.delete(e)};A.id=-1,es.set(e,A),Oe(A,n)}else Sr(e),I()}}}function Sr(e){const t=es.get(e);t&&(t.flags|=8,es.delete(e))}fs().requestIdleCallback;fs().cancelIdleCallback;const mn=e=>!!e.type.__asyncLoader,vs=e=>e.type.__isKeepAlive;function jl(e,t){Zi(e,"a",t)}function Hl(e,t){Zi(e,"da",t)}function Zi(e,t,n=Fe){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(kn(t,s,n),n){let r=n.parent;for(;r&&r.parent;)vs(r.parent.vnode)&&Ul(s,t,n,r),r=r.parent}}function Ul(e,t,n,s){const r=kn(t,e,s,!0),i=kn("um",()=>Qs(s[t],r),n);i.flags=16}function kn(e,t,n=Fe,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{ct();const l=Nn(n),u=qe(t,n,e,o);return l(),ut(),u});return s?r.unshift(i):r.push(i),i}}const xt=e=>(t,n=Fe)=>{(!Cn||e==="sp")&&kn(e,(...s)=>t(...s),n)},Kl=xt("bm"),ar=xt("m"),ql=xt("bu"),Wl=xt("u"),Xi=xt("bum"),Qi=xt("um"),zl=xt("sp"),Gl=xt("rtg"),Yl=xt("rtc");function Jl(e,t=Fe){kn("ec",e,t)}const Zl=Symbol.for("v-ndc");function _e(e,t,n,s){let r;const i=n,o=K(e);if(o||pe(e)){const l=o&&It(e);let u=!1,m=!1;l&&(u=!He(e),m=ft(e),e=hs(e)),r=new Array(e.length);for(let c=0,h=e.length;c<h;c++)r[c]=t(u?m?$t(Ke(e[c])):Ke(e[c]):e[c],c,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)r=[];else{r=new Array(e);for(let l=0;l<e;l++)r[l]=t(l+1,l,void 0,i)}else if(oe(e))if(e[Symbol.iterator])r=Array.from(e,(l,u)=>t(l,u,void 0,i));else{const l=Object.keys(e);r=new Array(l.length);for(let u=0,m=l.length;u<m;u++){const c=l[u];r[u]=t(e[c],c,u,i)}}else r=[];return r}const js=e=>e?Mo(e)?fr(e):js(e.parent):null,gn=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>js(e.parent),$root:e=>js(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>to(e),$forceUpdate:e=>e.f||(e.f=()=>{ms(e.update)}),$nextTick:e=>e.n||(e.n=Al.bind(e.proxy)),$watch:e=>Ll.bind(e)}),As=(e,t)=>e!==de&&!e.__isScriptSetup&&ie(e,t),Xl={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:l,appContext:u}=e;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(As(s,t))return o[t]=1,s[t];if(r!==de&&ie(r,t))return o[t]=2,r[t];if(ie(i,t))return o[t]=3,i[t];if(n!==de&&ie(n,t))return o[t]=4,n[t];Hs&&(o[t]=0)}}const m=gn[t];let c,h;if(m)return t==="$attrs"&&Ce(e.attrs,"get",""),m(e);if((c=l.__cssModules)&&(c=c[t]))return c;if(n!==de&&ie(n,t))return o[t]=4,n[t];if(h=u.config.globalProperties,ie(h,t))return h[t]},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return As(r,t)?(r[t]=n,!0):s!==de&&ie(s,t)?(s[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,props:i,type:o}},l){let u;return!!(n[l]||e!==de&&l[0]!=="$"&&ie(e,l)||As(t,l)||ie(i,l)||ie(s,l)||ie(gn,l)||ie(r.config.globalProperties,l)||(u=o.__cssModules)&&u[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function wr(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Hs=!0;function Ql(e){const t=to(e),n=e.proxy,s=e.ctx;Hs=!1,t.beforeCreate&&Ar(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:l,provide:u,inject:m,created:c,beforeMount:h,mounted:g,beforeUpdate:b,updated:L,activated:S,deactivated:O,beforeDestroy:I,beforeUnmount:A,destroyed:V,unmounted:k,render:B,renderTracked:se,renderTriggered:z,errorCaptured:P,serverPrefetch:q,expose:U,inheritAttrs:X,components:w,directives:Z,filters:ye}=t;if(m&&ea(m,s,null),o)for(const he in o){const le=o[he];J(le)&&(s[he]=le.bind(n))}if(r){const he=r.call(n,n);oe(he)&&(e.data=en(he))}if(Hs=!0,i)for(const he in i){const le=i[he],dt=J(le)?le.bind(n,n):J(le.get)?le.get.bind(n,n):lt,zt=!J(le)&&J(le.set)?le.set.bind(n):lt,ht=Y({get:dt,set:zt});Object.defineProperty(s,he,{enumerable:!0,configurable:!0,get:()=>ht.value,set:G=>ht.value=G})}if(l)for(const he in l)eo(l[he],s,n,he);if(u){const he=J(u)?u.call(n):u;Reflect.ownKeys(he).forEach(le=>{Nl(le,he[le])})}c&&Ar(c,e,"c");function me(he,le){K(le)?le.forEach(dt=>he(dt.bind(n))):le&&he(le.bind(n))}if(me(Kl,h),me(ar,g),me(ql,b),me(Wl,L),me(jl,S),me(Hl,O),me(Jl,P),me(Yl,se),me(Gl,z),me(Xi,A),me(Qi,k),me(zl,q),K(U))if(U.length){const he=e.exposed||(e.exposed={});U.forEach(le=>{Object.defineProperty(he,le,{get:()=>n[le],set:dt=>n[le]=dt,enumerable:!0})})}else e.exposed||(e.exposed={});B&&e.render===lt&&(e.render=B),X!=null&&(e.inheritAttrs=X),w&&(e.components=w),Z&&(e.directives=Z),q&&Ji(e)}function ea(e,t,n=lt){K(e)&&(e=Us(e));for(const s in e){const r=e[s];let i;oe(r)?"default"in r?i=Kn(r.from||s,r.default,!0):i=Kn(r.from||s):i=Kn(r),Ie(i)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[s]=i}}function Ar(e,t,n){qe(K(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function eo(e,t,n,s){let r=s.includes(".")?qi(n,s):()=>n[s];if(pe(e)){const i=t[e];J(i)&&Zt(r,i)}else if(J(e))Zt(r,e.bind(n));else if(oe(e))if(K(e))e.forEach(i=>eo(i,t,n,s));else{const i=J(e.handler)?e.handler.bind(n):t[e.handler];J(i)&&Zt(r,i,e)}}function to(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let u;return l?u=l:!r.length&&!n&&!s?u=t:(u={},r.length&&r.forEach(m=>ts(u,m,o,!0)),ts(u,t,o)),oe(t)&&i.set(t,u),u}function ts(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&ts(e,i,n,!0),r&&r.forEach(o=>ts(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const l=ta[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const ta={data:Ir,props:$r,emits:$r,methods:on,computed:on,beforeCreate:$e,created:$e,beforeMount:$e,mounted:$e,beforeUpdate:$e,updated:$e,beforeDestroy:$e,beforeUnmount:$e,destroyed:$e,unmounted:$e,activated:$e,deactivated:$e,errorCaptured:$e,serverPrefetch:$e,components:on,directives:on,watch:sa,provide:Ir,inject:na};function Ir(e,t){return t?e?function(){return ke(J(e)?e.call(this,this):e,J(t)?t.call(this,this):t)}:t:e}function na(e,t){return on(Us(e),Us(t))}function Us(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function $e(e,t){return e?[...new Set([].concat(e,t))]:t}function on(e,t){return e?ke(Object.create(null),e,t):t}function $r(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:ke(Object.create(null),wr(e),wr(t??{})):t}function sa(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const s in t)n[s]=$e(e[s],t[s]);return n}function no(){return{app:null,config:{isNativeTag:di,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ra=0;function ia(e,t){return function(s,r=null){J(s)||(s=ke({},s)),r!=null&&!oe(r)&&(r=null);const i=no(),o=new WeakSet,l=[];let u=!1;const m=i.app={_uid:ra++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:Ra,get config(){return i.config},set config(c){},use(c,...h){return o.has(c)||(c&&J(c.install)?(o.add(c),c.install(m,...h)):J(c)&&(o.add(c),c(m,...h))),m},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),m},component(c,h){return h?(i.components[c]=h,m):i.components[c]},directive(c,h){return h?(i.directives[c]=h,m):i.directives[c]},mount(c,h,g){if(!u){const b=m._ceVNode||Ae(s,r);return b.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),e(b,c,g),u=!0,m._container=c,c.__vue_app__=m,fr(b.component)}},onUnmount(c){l.push(c)},unmount(){u&&(qe(l,m._instance,16),e(null,m._container),delete m._container.__vue_app__)},provide(c,h){return i.provides[c]=h,m},runWithContext(c){const h=Xt;Xt=m;try{return c()}finally{Xt=h}}};return m}}let Xt=null;const oa=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ze(t)}Modifiers`]||e[`${Wt(t)}Modifiers`];function la(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||de;let r=n;const i=t.startsWith("update:"),o=i&&oa(s,t.slice(7));o&&(o.trim&&(r=n.map(c=>pe(c)?c.trim():c)),o.number&&(r=r.map(qo)));let l,u=s[l=xs(t)]||s[l=xs(Ze(t))];!u&&i&&(u=s[l=xs(Wt(t))]),u&&qe(u,e,6,r);const m=s[l+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,qe(m,e,6,r)}}const aa=new WeakMap;function so(e,t,n=!1){const s=n?aa:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},l=!1;if(!J(e)){const u=m=>{const c=so(m,t,!0);c&&(l=!0,ke(o,c))};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}return!i&&!l?(oe(e)&&s.set(e,null),null):(K(i)?i.forEach(u=>o[u]=null):ke(o,i),oe(e)&&s.set(e,o),o)}function _s(e,t){return!e||!as(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Wt(t))||ie(e,t))}function Or(e){const{type:t,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:l,emit:u,render:m,renderCache:c,props:h,data:g,setupState:b,ctx:L,inheritAttrs:S}=e,O=Xn(e);let I,A;try{if(n.shapeFlag&4){const k=r||s,B=k;I=rt(m.call(B,k,c,h,b,g,L)),A=l}else{const k=t;I=rt(k.length>1?k(h,{attrs:l,slots:o,emit:u}):k(h,null)),A=t.props?l:ca(l)}}catch(k){Kt.length=0,ps(k,e,1),I=Ae(we)}let V=I;if(A&&S!==!1){const k=Object.keys(A),{shapeFlag:B}=V;k.length&&B&7&&(i&&k.some(cs)&&(A=ua(A,i)),V=Ot(V,A,!1,!0))}if(n.dirs&&(V=Ot(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition){const k=gs(V.type)&&Qn(V)||V;Ut(k,n.transition)}return I=V,Xn(O),I}function ro(e,t=!0){let n;for(let s=0;s<e.length;s++){const r=e[s];if(En(r)){if(r.type!==we||r.children==="v-if"){if(n)return;n=r}}else return}return n}const ca=e=>{let t;for(const n in e)(n==="class"||n==="style"||as(n))&&((t||(t={}))[n]=e[n]);return t},ua=(e,t)=>{const n={};for(const s in e)(!cs(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function fa(e,t,n){const{props:s,children:r,component:i}=e,{props:o,children:l,patchFlag:u}=t,m=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Nr(s,o,m):!!o;if(u&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const g=c[h];if(io(o,s,g)&&!_s(m,g))return!0}}}else return(r||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?Nr(s,o,m):!0:!!o;return!1}function Nr(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(!ie(e,i)||io(t,e,i)&&!_s(n,i))return!0}return!1}function io(e,t,n){const s=e[n],r=t[n];return n==="style"&&oe(s)&&oe(r)?!ds(s,r):s!==r}function da({vnode:e,parent:t,suspense:n},s){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.suspense.vnode.el=r.el=s,e=r),r===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const oo={},lo=()=>Object.create(oo),ao=e=>Object.getPrototypeOf(e)===oo;function ha(e,t,n,s=!1){const r={},i=lo();e.propsDefaults=Object.create(null),co(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:yl(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function pa(e,t,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,l=re(r),[u]=e.propsOptions;let m=!1;if((s||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let g=c[h];if(_s(e.emitsOptions,g))continue;const b=t[g];if(u)if(ie(i,g))b!==i[g]&&(i[g]=b,m=!0);else{const L=Ze(g);r[L]=Ks(u,l,L,b,e,!1)}else b!==i[g]&&(i[g]=b,m=!0)}}}else{co(e,t,r,i)&&(m=!0);let c;for(const h in l)(!t||!ie(t,h)&&((c=Wt(h))===h||!ie(t,c)))&&(u?n&&(n[h]!==void 0||n[c]!==void 0)&&(r[h]=Ks(u,l,h,void 0,e,!0)):delete r[h]);if(i!==l)for(const h in i)(!t||!ie(t,h))&&(delete i[h],m=!0)}m&&yt(e.attrs,"set","")}function co(e,t,n,s){const[r,i]=e.propsOptions;let o=!1,l;if(t)for(let u in t){if(fn(u))continue;const m=t[u];let c;r&&ie(r,c=Ze(u))?!i||!i.includes(c)?n[c]=m:(l||(l={}))[c]=m:_s(e.emitsOptions,u)||(!(u in s)||m!==s[u])&&(s[u]=m,o=!0)}if(i){const u=re(n),m=l||de;for(let c=0;c<i.length;c++){const h=i[c];n[h]=Ks(r,u,h,m[h],e,!ie(m,h))}}return o}function Ks(e,t,n,s,r,i){const o=e[n];if(o!=null){const l=ie(o,"default");if(l&&s===void 0){const u=o.default;if(o.type!==Function&&!o.skipFactory&&J(u)){const{propsDefaults:m}=r;if(n in m)s=m[n];else{const c=Nn(r);s=m[n]=u.call(null,t),c()}}else s=u;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!l?s=!1:o[1]&&(s===""||s===Wt(n))&&(s=!0))}return s}const ma=new WeakMap;function uo(e,t,n=!1){const s=n?ma:t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},l=[];let u=!1;if(!J(e)){const c=h=>{u=!0;const[g,b]=uo(h,t,!0);ke(o,g),b&&l.push(...b)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!u)return oe(e)&&s.set(e,jt),jt;if(K(i))for(let c=0;c<i.length;c++){const h=Ze(i[c]);Dr(h)&&(o[h]=de)}else if(i)for(const c in i){const h=Ze(c);if(Dr(h)){const g=i[c],b=o[h]=K(g)||J(g)?{type:g}:ke({},g),L=b.type;let S=!1,O=!0;if(K(L))for(let I=0;I<L.length;++I){const A=L[I],V=J(A)&&A.name;if(V==="Boolean"){S=!0;break}else V==="String"&&(O=!1)}else S=J(L)&&L.name==="Boolean";b[0]=S,b[1]=O,(S||ie(b,"default"))&&l.push(h)}}const m=[o,l];return oe(e)&&s.set(e,m),m}function Dr(e){return e[0]!=="$"&&!fn(e)}const cr=e=>e==="_"||e==="_ctx"||e==="$stable",ur=e=>K(e)?e.map(rt):[rt(e)],ga=(e,t,n)=>{if(t._n)return t;const s=Ui((...r)=>ur(t(...r)),n);return s._c=!1,s},fo=(e,t,n)=>{const s=e._ctx;for(const r in e){if(cr(r))continue;const i=e[r];if(J(i))t[r]=ga(r,i,s);else if(i!=null){const o=ur(i);t[r]=()=>o}}},ho=(e,t)=>{const n=ur(t);e.slots.default=()=>n},po=(e,t,n)=>{for(const s in t)(n||!cr(s))&&(e[s]=t[s])},va=(e,t,n)=>{const s=e.slots=lo();if(e.vnode.shapeFlag&32){const r=t._;r?(po(s,t,n),n&&vi(s,"_",r,!0)):fo(t,s)}else t&&ho(e,t)},_a=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=de;if(s.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:po(r,t,n):(i=!t.$stable,fo(t,r)),o=t}else t&&(ho(e,t),o={default:1});if(i)for(const l in r)!cr(l)&&o[l]==null&&delete r[l]},Oe=Ea;function ya(e){return ba(e)}function ba(e,t){const n=fs();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:l,createComment:u,setText:m,setElementText:c,parentNode:h,nextSibling:g,setScopeId:b=lt,insertStaticContent:L}=e,S=(d,p,_,C=null,y=null,M=null,D=void 0,N=null,$=!!p.dynamicChildren)=>{if(d===p)return;d&&!Bt(d,p)&&(C=Ln(d),G(d,y,M,!0),d=null),p.patchFlag===-2&&($=!1,p.dynamicChildren=null),p.dynamicChildren&&d&&d.dynamicChildren&&d.dynamicChildren.hasOnce&&(p.dynamicChildren===jt&&(p.dynamicChildren=[]),p.dynamicChildren.hasOnce=!0);const{type:x,ref:j,shapeFlag:R}=p;switch(x){case ys:O(d,p,_,C);break;case we:I(d,p,_,C);break;case $s:d==null&&A(p,_,C,D);break;case ne:w(d,p,_,C,y,M,D,N,$);break;default:R&1?B(d,p,_,C,y,M,D,N,$):R&6?Z(d,p,_,C,y,M,D,N,$):(R&64||R&128)&&x.process(d,p,_,C,y,M,D,N,$,tn)}j!=null&&y?pn(j,d&&d.ref,M,p||d,!p):j==null&&d&&d.ref!=null&&pn(d.ref,null,M,d,!0)},O=(d,p,_,C)=>{if(d==null)s(p.el=l(p.children),_,C);else{const y=p.el=d.el;p.children!==d.children&&m(y,p.children)}},I=(d,p,_,C)=>{d==null?s(p.el=u(p.children||""),_,C):p.el=d.el},A=(d,p,_,C)=>{[d.el,d.anchor]=L(d.children,p,_,C,d.el,d.anchor)},V=({el:d,anchor:p},_,C)=>{let y;for(;d&&d!==p;)y=g(d),s(d,_,C),d=y;s(p,_,C)},k=({el:d,anchor:p})=>{let _;for(;d&&d!==p;)_=g(d),r(d),d=_;r(p)},B=(d,p,_,C,y,M,D,N,$)=>{if(p.type==="svg"?D="svg":p.type==="math"&&(D="mathml"),d==null)se(p,_,C,y,M,D,N,$);else{const x=d.el&&d.el._isVueCE?d.el:null;try{x&&x._beginPatch(),q(d,p,y,M,D,N,$)}finally{x&&x._endPatch()}}},se=(d,p,_,C,y,M,D,N)=>{let $,x;const{props:j,shapeFlag:R,transition:H,dirs:W}=d;if($=d.el=o(d.type,M,j&&j.is,j),R&8?c($,d.children):R&16&&P(d.children,$,null,C,y,Is(d,M),D,N),W&&Dt(d,null,C,"created"),z($,d,d.scopeId,D,C),j){for(const ue in j)ue!=="value"&&!fn(ue)&&i($,ue,null,j[ue],M,C);"value"in j&&i($,"value",null,j.value,M),(x=j.onVnodeBeforeMount)&&tt(x,C,d)}W&&Dt(d,null,C,"beforeMount");const te=xa(y,H);te?H.beforeEnter($):H&&!H.persisted&&($[Ma]=!0),s($,p,_),((x=j&&j.onVnodeMounted)||te||W)&&Oe(()=>{try{x&&tt(x,C,d),te&&H.enter($),W&&Dt(d,null,C,"mounted")}finally{}},y)},z=(d,p,_,C,y)=>{if(_&&b(d,_),C)for(let M=0;M<C.length;M++)b(d,C[M]);if(y){let M=y.subTree;if(p===M||vo(M.type)&&(M.ssContent===p||M.ssFallback===p)){const D=y.vnode;z(d,D,D.scopeId,D.slotScopeIds,y.parent)}}},P=(d,p,_,C,y,M,D,N,$=0)=>{for(let x=$;x<d.length;x++){const j=d[x]=N?_t(d[x]):rt(d[x]);S(null,j,p,_,C,y,M,D,N)}},q=(d,p,_,C,y,M,D)=>{const N=p.el=d.el;let{patchFlag:$,dynamicChildren:x,dirs:j}=p;$|=d.patchFlag&16;const R=d.props||de,H=p.props||de;let W;if(_&&Ft(_,!1),(W=H.onVnodeBeforeUpdate)&&tt(W,_,p,d),j&&Dt(p,d,_,"beforeUpdate"),_&&Ft(_,!0),x&&(!d.dynamicChildren||d.dynamicChildren.length!==x.length)&&($=0,D=!1,x=null),(R.innerHTML&&H.innerHTML==null||R.textContent&&H.textContent==null)&&c(N,""),x?U(d.dynamicChildren,x,N,_,C,Is(p,y),M):D||le(d,p,N,null,_,C,Is(p,y),M,!1),$>0){if($&16)X(N,R,H,_,y);else if($&2&&R.class!==H.class&&i(N,"class",null,H.class,y),$&4&&i(N,"style",R.style,H.style,y),$&8){const te=p.dynamicProps;for(let ue=0;ue<te.length;ue++){const ce=te[ue],be=R[ce],Me=H[ce];(Me!==be||ce==="value")&&i(N,ce,be,Me,y,_)}}$&1&&d.children!==p.children&&c(N,p.children)}else!D&&x==null&&X(N,R,H,_,y);((W=H.onVnodeUpdated)||j)&&Oe(()=>{W&&tt(W,_,p,d),j&&Dt(p,d,_,"updated")},C)},U=(d,p,_,C,y,M,D)=>{for(let N=0;N<p.length;N++){const $=d[N],x=p[N],j=$.el||vn($),R=j&&($.type===ne||!Bt($,x)||$.shapeFlag&198)?h(j):_;S($,x,R,null,C,y,M,D,!0)}},X=(d,p,_,C,y)=>{if(p!==_){if(p!==de)for(const M in p)!fn(M)&&!(M in _)&&i(d,M,p[M],null,y,C);for(const M in _){if(fn(M))continue;const D=_[M],N=p[M];D!==N&&M!=="value"&&i(d,M,N,D,y,C)}"value"in _&&i(d,"value",p.value,_.value,y)}},w=(d,p,_,C,y,M,D,N,$)=>{const x=p.el=d?d.el:l(""),j=p.anchor=d?d.anchor:l("");let{patchFlag:R,dynamicChildren:H,slotScopeIds:W}=p;W&&(N=N?N.concat(W):W),d==null?(s(x,_,C),s(j,_,C),P(p.children||[],_,j,y,M,D,N,$)):R>0&&R&64&&H&&d.dynamicChildren&&d.dynamicChildren.length===H.length?(U(d.dynamicChildren,H,_,y,M,D,N),(p.key!=null||y&&p===y.subTree)&&mo(d,p,!0)):le(d,p,_,j,y,M,D,N,$)},Z=(d,p,_,C,y,M,D,N,$)=>{p.slotScopeIds=N,d==null?p.shapeFlag&512?y.ctx.activate(p,_,C,D,$):ye(p,_,C,y,M,D,$):Te(d,p,$)},ye=(d,p,_,C,y,M,D)=>{const N=d.component=Ia(d,C,y);if(vs(d)&&(N.ctx.renderer=tn),$a(N,!1,D),N.asyncDep){if(y&&y.registerDep(N,me,D,M),!d.el){const $=N.subTree=Ae(we);I(null,$,p,_),d.placeholder=$.el}}else me(N,d,p,_,y,M,D)},Te=(d,p,_)=>{const C=p.component=d.component;if(fa(d,p,_))if(C.asyncDep&&!C.asyncResolved){p.el=d.el,p.placeholder=d.placeholder,he(C,p,_);return}else C.next=p,C.update();else p.el=d.el,p.placeholder=d.placeholder,C.vnode=p},me=(d,p,_,C,y,M,D)=>{const N=()=>{if(d.isMounted){let{next:R,bu:H,u:W,parent:te,vnode:ue}=d;{const Qe=go(d);if(Qe){R&&(R.el=ue.el,he(d,R,D)),Qe.asyncDep.then(()=>{const pt=()=>{d.job.flags&8||(y&&y.pendingBranch?Oe(pt,y):x())};pt.flags=48,Oe(pt,y)});return}}let ce=R,be;Ft(d,!1),R?(R.el=ue.el,he(d,R,D)):R=ue,H&&ks(H),(be=R.props&&R.props.onVnodeBeforeUpdate)&&tt(be,te,R,ue),Ft(d,!0);const Me=Or(d),ze=d.subTree;d.subTree=Me,S(ze,Me,h(ze.el||vn(ze)),Ln(ze),d,y,M),R.el=Me.el,ce===null&&da(d,Me.el),W&&Oe(W,y),(be=R.props&&R.props.onVnodeUpdated)&&Oe(()=>tt(be,te,R,ue),y)}else{let R;const{el:H,props:W}=p,{bm:te,m:ue,parent:ce,root:be,type:Me}=d,ze=mn(p);Ft(d,!1),te&&ks(te),!ze&&(R=W&&W.onVnodeBeforeMount)&&tt(R,ce,p),Ft(d,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(Me,d.parent?d.parent.type:void 0);const Qe=d.subTree=Or(d);S(null,Qe,_,C,d,y,M),p.el=Qe.el}if(ue&&Oe(ue,y),!ze&&(R=W&&W.onVnodeMounted)){const Qe=p;Oe(()=>tt(R,ce,Qe),y)}(p.shapeFlag&256||ce&&mn(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Oe(d.a,y),d.isMounted=!0,p=_=C=null}};d.scope.on();const $=d.effect=new xi(N);d.scope.off();const x=d.update=$.run.bind($),j=d.job=$.runIfDirty.bind($);j.i=d,j.id=d.uid,$.scheduler=()=>ms(j),Ft(d,!0),x()},he=(d,p,_)=>{p.component=d;const C=d.vnode.props;d.vnode=p,d.next=null,pa(d,p.props,C,_),_a(d,p.children,_),ct(),Vi(d),ut()},le=(d,p,_,C,y,M,D,N,$=!1)=>{const x=d&&d.children,j=d?d.shapeFlag:0,R=p.children,{patchFlag:H,shapeFlag:W}=p;if(H>0){if(H&128){zt(x,R,_,C,y,M,D,N,$);return}else if(H&256){dt(x,R,_,C,y,M,D,N,$);return}}W&8?(j&16&&Mt(x,y,M),R!==x&&c(_,R)):j&16?W&16?zt(x,R,_,C,y,M,D,N,$):Mt(x,y,M,!0):(j&8&&c(_,""),W&16&&P(R,_,C,y,M,D,N,$))},dt=(d,p,_,C,y,M,D,N,$)=>{d=d||jt,p=p||jt;const x=d.length,j=p.length,R=Math.min(x,j);let H;for(H=0;H<R;H++){const W=p[H]=$?_t(p[H]):rt(p[H]);S(d[H],W,_,null,y,M,D,N,$)}x>j?Mt(d,y,M,!0,!1,R):P(p,_,C,y,M,D,N,$,R)},zt=(d,p,_,C,y,M,D,N,$)=>{let x=0;const j=p.length;let R=d.length-1,H=j-1;for(;x<=R&&x<=H;){const W=d[x],te=p[x]=$?_t(p[x]):rt(p[x]);if(Bt(W,te))S(W,te,_,null,y,M,D,N,$);else break;x++}for(;x<=R&&x<=H;){const W=d[R],te=p[H]=$?_t(p[H]):rt(p[H]);if(Bt(W,te))S(W,te,_,null,y,M,D,N,$);else break;R--,H--}if(x>R){if(x<=H){const W=H+1,te=W<j?p[W].el:C;for(;x<=H;)S(null,p[x]=$?_t(p[x]):rt(p[x]),_,te,y,M,D,N,$),x++}}else if(x>H)for(;x<=R;)G(d[x],y,M,!0),x++;else{const W=x,te=x,ue=new Map;for(x=te;x<=H;x++){const Pe=p[x]=$?_t(p[x]):rt(p[x]);Pe.key!=null&&ue.set(Pe.key,x)}let ce,be=0;const Me=H-te+1;let ze=!1,Qe=0;const pt=new Array(Me);for(x=0;x<Me;x++)pt[x]=0;for(x=W;x<=R;x++){const Pe=d[x];if(be>=Me){G(Pe,y,M,!0);continue}let et;if(Pe.key!=null)et=ue.get(Pe.key);else for(ce=te;ce<=H;ce++)if(pt[ce-te]===0&&Bt(Pe,p[ce])){et=ce;break}et===void 0?G(Pe,y,M,!0):(pt[et-te]=x+1,et>=Qe?Qe=et:ze=!0,S(Pe,p[et],_,null,y,M,D,N,$),be++)}const gr=ze?ka(pt):jt;for(ce=gr.length-1,x=Me-1;x>=0;x--){const Pe=te+x,et=p[Pe],vr=p[Pe+1],_r=Pe+1<j?vr.el||vn(vr):C;pt[x]===0?S(null,et,_,_r,y,M,D,N,$):ze&&(ce<0||x!==gr[ce]?ht(et,_,_r,2):ce--)}}},ht=(d,p,_,C,y=null)=>{const{el:M,type:D,transition:N,children:$,shapeFlag:x}=d;if(x&6){ht(d.component.subTree,p,_,C);return}if(x&128){d.suspense.move(p,_,C);return}if(x&64){D.move(d,p,_,tn);return}if(D===ne){s(M,p,_);for(let R=0;R<$.length;R++)ht($[R],p,_,C);s(d.anchor,p,_);return}if(D===$s){V(d,p,_);return}if(C!==2&&x&1&&N)if(C===0)N.persisted&&!M[je]?s(M,p,_):(N.beforeEnter(M),s(M,p,_),Oe(()=>N.enter(M),y));else{const{leave:R,delayLeave:H,afterLeave:W}=N,te=()=>{d.ctx.isUnmounted?r(M):s(M,p,_)},ue=()=>{const ce=M._isLeaving||!!M[je];M._isLeaving&&M[je](!0),N.persisted&&!ce?te():R(M,()=>{te(),W&&W()})};H?H(M,te,ue):ue()}else s(M,p,_)},G=(d,p,_,C=!1,y=!1)=>{const{type:M,props:D,ref:N,children:$,dynamicChildren:x,shapeFlag:j,patchFlag:R,dirs:H,cacheIndex:W,memo:te}=d;if((R===-2||x&&x.hasOnce)&&(y=!1),N!=null&&(ct(),pn(N,null,_,d,!0),ut()),W!=null&&(!d.ctx||d.ctx===p)&&(p.renderCache[W]=void 0),j&256&&p.ctx.deactivate(d))return;const ue=j&1&&H,ce=!mn(d);let be;if(ce&&(be=D&&D.onVnodeBeforeUnmount)&&tt(be,p,d),j&6)kt(d.component,_,C);else{if(j&128){d.suspense.unmount(_,C);return}ue&&Dt(d,null,p,"beforeUnmount"),j&64?d.type.remove(d,p,_,tn,C):x&&!x.hasOnce&&(M!==ne||R>0&&R&64)?Mt(x,p,_,!1,!0):(M===ne&&R&384||!y&&j&16)&&Mt($,p,_),C&&ae(d)}const Me=te!=null&&W==null;(ce&&(be=D&&D.onVnodeUnmounted)||ue||Me)&&Oe(()=>{be&&tt(be,p,d),ue&&Dt(d,null,p,"unmounted"),Me&&(d.el=null)},_)},ae=d=>{const{type:p,el:_,anchor:C,transition:y}=d,M=p===ne;if(M&&!y){Q(_,C);return}if(p===$s){k(d),y&&!y.persisted&&y.afterLeave&&y.afterLeave();return}const D=M?xn(d):d,N=()=>{M?h(_)&&Q(_,C):r(_),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(D&&D.shapeFlag&1&&y&&!y.persisted){const{leave:$,delayLeave:x}=y,j=D.el,R=()=>$(j,N);x?x(j,N,R):R()}else N()},Q=(d,p)=>{let _;for(;d!==p;)_=g(d),r(d),d=_;r(p)},kt=(d,p,_)=>{const{bum:C,scope:y,job:M,subTree:D,um:N,m:$,a:x}=d;Fr($),Fr(x),C&&ks(C),y.stop(),M?(M.flags|=8,G(D,d,p,_)):D&&(D.transition=d.vnode.transition,G(D,d,p,_)),N&&Oe(N,p);const j=()=>{d.isUnmounted=!0};j.flags=16,Oe(j,p)},Mt=(d,p,_,C=!1,y=!1,M=0)=>{for(let D=M;D<d.length;D++)G(d[D],p,_,C,y)},Ln=d=>{if(d.shapeFlag&6)return Ln(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const p=g(d.anchor||d.el),_=p&&p[Rl];return _?g(_):p},mr=(d,p,_)=>{const C=d&&p._vnode?void 0:d&&d.component?d.component.uid:Aa();Ol(()=>{d==null?p._vnode&&G(p._vnode,null,null,!0):S(p._vnode||null,d,p,null,null,null,_),p._vnode=d},C)},tn={p:S,um:G,m:ht,r:ae,mt:ye,mc:P,pc:le,pbc:U,n:Ln,o:e};return{render:mr,hydrate:void 0,createApp:ia(mr)}}function Is({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Ft({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function xa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function mo(e,t,n=!1){const s=e.children,r=t.children;if(K(s)&&K(r))for(let i=0;i<s.length;i++){const o=s[i];let l=r[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=r[i]=_t(r[i]),l.el=o.el),!n&&l.patchFlag!==-2&&mo(o,l)),l.type===ys&&(l.patchFlag===-1&&(l=r[i]=_t(l)),l.el=o.el),l.type===we&&!l.el&&(l.el=o.el)}}function ka(e){const t=e.slice(),n=[0];let s,r,i,o,l;const u=e.length;for(s=0;s<u;s++){const m=e[s];if(m!==0){if(r=n[n.length-1],e[r]<m){t[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<m?i=l+1:o=l;m<e[n[i]]&&(i>0&&(t[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function go(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:go(t)}function Fr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function vn(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return vn(t.subTree);const n=e.suspense;return n&&n.activeBranch?vn(n.activeBranch):null}const vo=e=>e.__isSuspense,Ma=Symbol("_deferredEnter");function Ea(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):$l(e)}const ne=Symbol.for("v-fgt"),ys=Symbol.for("v-txt"),we=Symbol.for("v-cmt"),$s=Symbol.for("v-stc"),Kt=[];let Ve=null;function E(e=!1){Kt.push(Ve=e?null:[])}function _o(){Kt.pop(),Ve=Kt[Kt.length-1]||null}let Mn=1;function ns(e,t=!1){Mn+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function yo(e){return e.dynamicChildren=Mn>0?Ve||jt:null,_o(),Mn>0&&Ve&&Ve.push(e),e}function T(e,t,n,s,r,i){return yo(f(e,t,n,s,r,i,!0))}function Vt(e,t,n,s,r){return yo(Ae(e,t,n,s,r,!0))}function En(e){return e?e.__v_isVNode===!0:!1}function Bt(e,t){return e.type===t.type&&e.key===t.key}const bo=({key:e})=>e??null,qn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?pe(e)||Ie(e)||J(e)?{i:ot,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,s=0,r=null,i=e===ne?0:1,o=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&bo(t),ref:t&&qn(t),scopeId:Hi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ot};return l?(ss(u,n),i&128&&e.normalize(u)):n&&(u.shapeFlag|=pe(n)?8:16),Mn>0&&!o&&Ve&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&Ve.push(u),u}const Ae=Ta;function Ta(e,t=null,n=null,s=0,r=null,i=!1){if((!e||e===Zl)&&(e=we),En(e)){const l=Ot(e,t,!0);return n&&ss(l,n),Mn>0&&!i&&Ve&&(l.shapeFlag&6?Ve[Ve.indexOf(e)]=l:Ve.push(l)),l.patchFlag=-2,l}if(Fa(e)&&(e=e.__vccOpts),t){t=Ca(t);let{class:l,style:u}=t;l&&!pe(l)&&(t.class=ve(l)),oe(u)&&(lr(u)&&!K(u)&&(u=ke({},u)),t.style=Ne(u))}const o=pe(e)?1:vo(e)?128:gs(e)?64:oe(e)?4:J(e)?2:0;return f(e,t,n,s,r,o,i,!0)}function Ca(e){return e?lr(e)?ke({},e):ao(e)?ke({},e[To]||e):e:null}function Ot(e,t,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:l,transition:u}=e,m=t?Sa(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&bo(m),ref:t&&t.ref?n&&i?K(i)?i.concat(qn(t)):[i,qn(t)]:qn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ne?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:u,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return u&&s&&Ut(c,u.clone(c)),c}function Ue(e=" ",t=0){return Ae(ys,null,e,t)}function ee(e="",t=!1){return t?(E(),Vt(we,null,e)):Ae(we,null,e)}function rt(e){return e==null||typeof e=="boolean"?Ae(we):K(e)?Ae(ne,null,e.slice()):En(e)?_t(e):Ae(ys,null,String(e))}function _t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function ss(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),ss(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!ao(t)?t._ctx=ot:r===3&&ot&&(ot.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(J(t)){if(s&65){ss(e,{default:t});return}t={default:t,_ctx:ot},n=32}else t=String(t),s&64?(n=16,t=[Ue(t)]):n=8;e.children=t,e.shapeFlag|=n}function Sa(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=ve([t.class,s.class]));else if(r==="style")t.style=Ne([t.style,s.style]);else if(as(r)){const i=t[r],o=s[r];o&&i!==o&&!(K(i)&&i.includes(o))?t[r]=i?[].concat(i,o):o:o==null&&i==null&&!cs(r)&&(t[r]=o)}else r!==""&&(t[r]=s[r])}return t}function tt(e,t,n,s=null){qe(e,t,7,[n,s])}const wa=no();let xo=0;function Aa(){return xo}function Ia(e,t,n){const s=e.type,r=(t?t.appContext:e.appContext)||wa,i={uid:xo++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:uo(s,r),emitsOptions:so(s,r),emit:null,emitted:null,propsDefaults:de,inheritAttrs:s.inheritAttrs,ctx:de,data:de,props:de,attrs:de,slots:de,refs:de,setupState:de,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=la.bind(null,i),e.ce&&e.ce(i),i}let Fe=null;const ko=()=>Fe||ot;let rs,Tn;{const e=fs(),t=(n,s)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};rs=t("__VUE_INSTANCE_SETTERS__",n=>Fe=n),Tn=t("__VUE_SSR_SETTERS__",n=>Cn=n)}const Nn=e=>{const t=Fe;return rs(e),e.scope.on(),()=>{e.scope.off(),rs(t)}},Lr=()=>{Fe&&Fe.scope.off(),rs(null)};function Mo(e){return e.vnode.shapeFlag&4}let Cn=!1;function $a(e,t=!1,n=!1){t&&Tn(t);const{props:s,children:r}=e.vnode,i=Mo(e);ha(e,s,i,t),va(e,r,n||t);const o=i?Oa(e,t):void 0;return t&&Tn(!1),o}function Oa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Xl);const{setup:s}=n;if(s){ct();const r=e.setupContext=s.length>1?Da(e):null,i=Nn(e),o=On(s,e,0,[e.props,r]),l=hi(o);if(ut(),i(),(l||e.sp)&&!mn(e)&&Ji(e),l){if(o.then(Lr,Lr),t)return o.then(u=>{Tn(!0);try{Rr(e,u,t)}finally{Tn(!1)}}).catch(u=>{ps(u,e,0,void 0,!0),e.ssrRender=(m,c)=>c("<!---->")});e.asyncDep=o}else Rr(e,o)}else Eo(e)}function Rr(e,t,n){J(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Li(t)),Eo(e)}function Eo(e,t,n){const s=e.type;e.render||(e.render=s.render||lt);{const r=Nn(e);ct();try{Ql(e)}finally{ut(),r()}}}const To=Symbol(),Na={get(e,t){return Ce(e,"get",""),t===To?e:e[t]}};function Da(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Na),slots:e.slots,emit:e.emit,expose:t}}function fr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Li(bl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gn)return gn[n](e)},has(t,n){return n in t||n in gn}})):e.proxy}function Fa(e){return J(e)&&"__vccOpts"in e}const Y=(e,t)=>Tl(e,t,Cn);function La(e,t,n){try{ns(-1);const s=arguments.length;return s===2?oe(t)&&!K(t)?En(t)?Ae(e,null,[t]):Ae(e,t):Ae(e,null,t):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&En(n)&&(n=[n]),Ae(e,t,n))}finally{ns(1)}}const Ra="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qs;const Pr=typeof window<"u"&&window.trustedTypes;if(Pr)try{qs=Pr.createPolicy("vue",{createHTML:e=>e})}catch{}const Co=qs?e=>qs.createHTML(e):e=>e,Pa="http://www.w3.org/2000/svg",Va="http://www.w3.org/1998/Math/MathML",vt=typeof document<"u"?document:null,Vr=vt&&vt.createElement("template"),Ba={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t==="svg"?vt.createElementNS(Pa,e):t==="mathml"?vt.createElementNS(Va,e):n?vt.createElement(e,{is:n}):vt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>vt.createTextNode(e),createComment:e=>vt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>vt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{Vr.innerHTML=Co(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=Vr.content;if(s==="svg"||s==="mathml"){const u=l.firstChild;for(;u.firstChild;)l.appendChild(u.firstChild);l.removeChild(u)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Et="transition",rn="animation",Sn=Symbol("_vtc"),So={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ja=ke({},Wi,So),Ha=e=>(e.displayName="Transition",e.props=ja,e),Ua=Ha((e,{slots:t})=>La(Bl,Ka(e),t)),Lt=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},Br=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function Ka(e){const t={};for(const w in e)w in So||(t[w]=e[w]);if(e.css===!1)return t;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:u=i,appearActiveClass:m=o,appearToClass:c=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:b=`${n}-leave-to`}=e,L=qa(r),S=L&&L[0],O=L&&L[1],{onBeforeEnter:I,onEnter:A,onEnterCancelled:V,onLeave:k,onLeaveCancelled:B,onBeforeAppear:se=I,onAppear:z=A,onAppearCancelled:P=V}=t,q=(w,Z,ye,Te)=>{w._enterCancelled=Te,Rt(w,Z?c:l),Rt(w,Z?m:o),ye&&ye()},U=(w,Z)=>{w._isLeaving=!1,Rt(w,h),Rt(w,b),Rt(w,g),Z&&Z()},X=w=>(Z,ye)=>{const Te=w?z:A,me=()=>q(Z,w,ye);Lt(Te,[Z,me]),jr(()=>{Rt(Z,w?u:i),gt(Z,w?c:l),Br(Te)||Hr(Z,s,S,me)})};return ke(t,{onBeforeEnter(w){Lt(I,[w]),gt(w,i),gt(w,o)},onBeforeAppear(w){Lt(se,[w]),gt(w,u),gt(w,m)},onEnter:X(!1),onAppear:X(!0),onLeave(w,Z){w._isLeaving=!0;const ye=()=>U(w,Z);gt(w,h),w._enterCancelled?(gt(w,g),qr(w)):(qr(w),gt(w,g)),jr(()=>{w._isLeaving&&(Rt(w,h),gt(w,b),Br(k)||Hr(w,s,O,ye))}),Lt(k,[w,ye])},onEnterCancelled(w){q(w,!1,void 0,!0),Lt(V,[w])},onAppearCancelled(w){q(w,!0,void 0,!0),Lt(P,[w])},onLeaveCancelled(w){U(w),Lt(B,[w])}})}function qa(e){if(e==null)return null;if(oe(e))return[Os(e.enter),Os(e.leave)];{const t=Os(e);return[t,t]}}function Os(e){return Wo(e)}function gt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Sn]||(e[Sn]=new Set)).add(t)}function Rt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const n=e[Sn];n&&(n.delete(t),n.size||(e[Sn]=void 0))}function jr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Wa=0;function Hr(e,t,n,s){const r=e._endId=++Wa,i=()=>{r===e._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:u}=za(e,t);if(!o)return s();const m=o+"end";let c=0;const h=()=>{e.removeEventListener(m,g),i()},g=b=>{b.target===e&&++c>=u&&h()};setTimeout(()=>{c<u&&h()},l+1),e.addEventListener(m,g)}function za(e,t){const n=window.getComputedStyle(e),s=L=>(n[L]||"").split(", "),r=s(`${Et}Delay`),i=s(`${Et}Duration`),o=Ur(r,i),l=s(`${rn}Delay`),u=s(`${rn}Duration`),m=Ur(l,u);let c=null,h=0,g=0;t===Et?o>0&&(c=Et,h=o,g=i.length):t===rn?m>0&&(c=rn,h=m,g=u.length):(h=Math.max(o,m),c=h>0?o>m?Et:rn:null,g=c?c===Et?i.length:u.length:0);const b=c===Et&&/\b(?:transform|all)(?:,|$)/.test(s(`${Et}Property`).toString());return{type:c,timeout:h,propCount:g,hasTransform:b}}function Ur(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,s)=>Kr(n)+Kr(e[s])))}function Kr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function qr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ga(e,t,n){const s=e[Sn];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Wr=Symbol("_vod"),Ya=Symbol("_vsh"),Ja=Symbol(""),Za=/(?:^|;)\s*display\s*:/;function Xa(e,t,n){const s=e.style,r=pe(n);let i=!1;if(n&&!r){if(t)if(pe(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&ln(s,l,"")}else for(const o in t)n[o]==null&&ln(s,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?ec(e,o,!pe(t)&&t?t[o]:void 0,l)||ln(s,o,l):ln(s,o,"")}}else if(r){if(t!==n){const o=s[Ja];o&&(n+=";"+o),s.cssText=n,i=Za.test(n)}}else t&&e.removeAttribute("style");Wr in e&&((!r||t!==n)&&(e[Wr]=i?s.display:""),e[Ya]&&(s.display="none"))}const Bn=/\s*!important$/;function ln(e,t,n){if(K(n))n.forEach(s=>ln(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))Bn.test(n)?e.setProperty(t,n.replace(Bn,""),"important"):e.setProperty(t,n);else{const s=Qa(e,t);Bn.test(n)?e.setProperty(Wt(s),n.replace(Bn,""),"important"):e[s]=n}}const zr=["Webkit","Moz","ms"],Ns={};function Qa(e,t){const n=Ns[t];if(n)return n;let s=Ze(t);if(s!=="filter"&&s in e)return Ns[t]=s;s=gi(s);for(let r=0;r<zr.length;r++){const i=zr[r]+s;if(i in e)return Ns[t]=i}return t}function ec(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(s)&&n===s}const Gr="http://www.w3.org/1999/xlink";function Yr(e,t,n,s,r,i=Xo(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Gr,t.slice(6,t.length)):e.setAttributeNS(Gr,t,n):n==null||i&&!_i(n)?e.removeAttribute(t):e.setAttribute(t,i?"":at(n)?String(n):n)}function Jr(e,t,n,s,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Co(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,u=n==null?e.type==="checkbox"?"on":"":String(n);(l!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=_i(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function tc(e,t,n,s){e.addEventListener(t,n,s)}function nc(e,t,n,s){e.removeEventListener(t,n,s)}const Zr=Symbol("_vei");function sc(e,t,n,s,r=null){const i=e[Zr]||(e[Zr]={}),o=i[t];if(s&&o)o.value=s;else{const[l,u]=oc(t);if(s){const m=i[t]=cc(s,r);tc(e,l,m,u)}else o&&(nc(e,l,o,u),i[t]=void 0)}}const rc=/(Once|Passive|Capture)$/,ic=/^on:?(?:Once|Passive|Capture)$/;function oc(e){let t,n;for(;(n=e.match(rc))&&!ic.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Wt(e.slice(2)),t]}let Ds=0;const lc=Promise.resolve(),ac=()=>Ds||(lc.then(()=>Ds=0),Ds=Date.now());function cc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const r=n.value;if(K(r)){const i=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{i.call(s),s._stopped=!0};const o=r.slice(),l=[s];for(let u=0;u<o.length&&!s._stopped;u++){const m=o[u];m&&qe(m,t,5,l)}}else qe(r,t,5,[s])};return n.value=e,n.attached=ac(),n}const Xr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,uc=(e,t,n,s,r,i)=>{const o=r==="svg";t==="class"?Ga(e,s,o):t==="style"?Xa(e,n,s):as(t)?cs(t)||sc(e,t,n,s,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):fc(e,t,s,o))?(Jr(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Yr(e,t,s,o,i,t!=="value")):e._isVueCE&&(dc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(s)))?Jr(e,Ze(t),s,i,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Yr(e,t,s,o))};function fc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Xr(t)&&J(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Xr(t)&&pe(n)?!1:t in e}function dc(e,t){const n=e._def.props;if(!n)return!1;const s=Ze(t);return Array.isArray(n)?n.some(r=>Ze(r)===s):Object.keys(n).some(r=>Ze(r)===s)}const hc=["ctrl","shift","alt","meta"],pc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>hc.some(n=>e[`${n}Key`]&&!t.includes(n))},an=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((r,...i)=>{for(let o=0;o<t.length;o++){const l=pc[t[o]];if(l&&l(r,t))return}return e(r,...i)}))},mc=ke({patchProp:uc},Ba);let Qr;function gc(){return Qr||(Qr=ya(mc))}const vc=((...e)=>{const t=gc().createApp(...e),{mount:n}=t;return t.mount=s=>{const r=yc(s);if(!r)return;const i=t._component;!J(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,_c(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function _c(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function yc(e){return pe(e)?document.querySelector(e):e}const bc="./";function Le(e){return bc+"art/"+e}const ei={sq:{name:"苏晴",full:Le("sq-full.webp"),face:Le("sq-exp-1.webp"),emotions:{开心:1,惊喜:2,思考:3,加油:4,好吃:5,满足:6}},nu:{name:"林暖",full:Le("nu-full.webp"),face:Le("nu-exp-6.webp"),emotions:{开心:1,惊讶:2,欣慰:3,认真:4,担心:5,温柔:6}}},wn=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function bt(e){return wn.find(t=>t.id===e)||wn[0]}const wo={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},Qt=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐可欣",nick:"可欣",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶清禾",nick:"清禾",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function is(e){return Qt.find(t=>t.id===e)}const An=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],os=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function xc(e){return os.find(t=>t.lv===e)||os[0]}function ti(e,t){return e.unlocked.filter(n=>(e.levels[n]||1)>=t).length}function kc(e){return e.unlocked.length?e.unlocked.reduce((t,n)=>t+(e.levels[n]||1),0)/e.unlocked.length:1}function Mc(e){return Math.max(0,...Object.values(e.partnerSkill))}function Ec(e,t){return Object.values(e.partnerTrust).filter(n=>n>=t).length}const Ws=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>ti(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>kc(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>ti(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>Mc(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>Ec(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function Tc(e){return Ws.find(t=>e>=t.from&&e<=t.to)||Ws[0]}const Cc={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},zs={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:Le("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:Le("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:Le("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:Le("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:Le("shop-exterior.webp")}},Sc=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function Gs(e){return Sc[(e-1)%12]}const wc=`# 《林记烘焙》完整文游剧情文案 V5.0\r
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
旁白：桌上的手机震动了一下，是高中好友苏晴发来的消息。\r
苏晴（手机消息）：念念，行李收拾得怎么样啦？我已经回栖云镇把摄影器材都安顿好了，等你到家我们去喝冰饮！\r
林念看着屏幕，轻轻叹了口气，回复了一句「明天回来」。\r
无奈之下，她决定先回家。\r
\r
**【场景：栖云镇·林记烘焙（shop-lv1）】**\r
**【事件ID：EVT_PROLOGUE_02】**\r
\r
推开熟悉的木门，空气里飘着黄油与刚出炉戚风蛋糕的温热香气。\r
母亲林暖经营着这家名为「林记烘焙」的老店，已经有三十多年的历史。店铺最初由外婆创立，后来交给林暖经营。\r
木地板擦得干干净净，玻璃展示柜旁摆着两张旧木桌，墙上挂着手写的中文价目牌。\r
林念从小在店里长大，耳濡目染，早已掌握不错的烘焙手艺。\r
\r
林暖看到女儿最近一直为求职发愁，便放下手中的烤盘，温和地提出：\r
\r
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
## 第一章：接手林记（第1—6个月）\r
\r
**章节主题：从毕业生到经营者**\r
**本阶段人员：仅林念、林暖母女二人经营**\r
\r
### M1｜毕业后的新生活\r
\r
**【事件ID：EVT_M01_MAIN｜触发月份：M1第1个经营日】**\r
**【状态变更：recipeUnlocked = \\[cake-plain（原味奶油蛋糕）, cake-strawberry（草莓奶油蛋糕）, cake-chocolate（巧克力蛋糕）\\]】**\r
\r
清晨七点，栖云镇的青石板街刚刚热闹起来。\r
林念系好围裙站在玻璃展示柜后，正在核对今天第一批上架的三款经典产品：原味奶油蛋糕、草莓奶油蛋糕和巧克力蛋糕。\r
\r
林暖：咱们林记开了三十多年，街坊四邻认的就是这份实在。原味、草莓和巧克力是店里的老三样，今天做多少份、怎么定价，你说了算。\r
林念：好！今天是第一个经营日，我先按老街坊平时的购买量备货，要是体力不够，还得请林老师搭把手。\r
林暖笑着点头：放心，妈在后厨随时给你托底。\r
\r
店门上的风铃叮铃一响，背着相机的苏晴推门走了进来。\r
\r
苏晴：哟，这不是我们栖云镇新上任的林老板吗？\r
林念：苏晴！你来得正好，快帮我看看今天展示柜的摆盘怎么样。\r
苏晴：摆得很漂亮呀，就是我们林老板看起来比等待进烤箱的面糊还紧张。\r
林念：毕竟是第一天正式管店嘛。以前放假回来只是帮妈打下手，现在从原料采购、定价到安排生产都要自己拿主意，感觉肩上的担子完全不一样。\r
苏晴举起相机对准柜台后的林念：来，林老板，看镜头！给你拍一张上任首日纪念照，以后等你成了大企业家，这就是珍贵的历史资料！\r
林念：等一下，我围裙领子还没理好呢！\r
\r
旁白：清脆的快门声里，林念的三年经营生活正式拉开序幕。\r
旁白：【系统提示：解锁基础经营系统（每日5个代表性经营日、8点行动力、100点体力）。解锁友情相册NO.04《新任林老板的第一天》。】\r
\r
### M2｜熟悉的老顾客\r
\r
**【事件ID：EVT_M02_MAIN｜触发月份：M2第1个经营日】**\r
**【状态变更：解锁「顾客忠诚度与熟客系统」】**\r
\r
午后营业时段，头发花白的陈奶奶笑呵呵地走进店里。\r
她是看着林念长大的老街坊，也是林记十几年的老熟客。\r
\r
陈奶奶：念念呀，听你妈说你大学毕业回来接班啦？真好真好，今天给我拿一份原味奶油蛋糕，我家小孙子指定要吃你们家的味道。\r
林念将打包好的蛋糕递过去：陈奶奶您拿好！我还给小朋友多放了一块试吃装的巧克力小切块。\r
陈奶奶：哎哟，还是你们贴心。我年轻那会儿，这店还是你外婆守着；后来是你妈妈，一晃眼几十个年头过去，我家三代人的生日蛋糕全是在林记订的。\r
林念：谢谢陈奶奶一直惦记着我们。\r
陈奶奶：咱们老街坊信得过林记，你们把老味道守住，以后生意准能越来越红火！\r
\r
送走陈奶奶后，林暖翻开记账本走到林念身边。\r
\r
林暖：念念，看到了吗？林记不需要从零开始，大家伙儿的信任就是咱们最大的底气。你之后也可以看看除了原来的种类以外，大家还期待什么新口味。\r
\r
### M3｜自己的第一款新品：芋泥薄脆\r
\r
**【事件ID：EVT_M03_MAIN｜触发月份：M3第2个经营日】**\r
**【状态变更：解锁「新品研发系统」，recipeUnlocked += \\[cake-taro（芋泥薄脆）\\]】**\r
\r
打烊后的厨房里，林念正对着几碗细腻的荔浦芋泥和一盘刚烤好的杏仁薄脆做记录。\r
\r
林暖：这么晚还在试配方？\r
林念：嗯。这几天有好几个年轻客人问店里有没有芋泥类的甜点。我想在传统绵密的芋泥夹心里，加一层刷了薄白巧隔湿的焦糖杏仁薄脆，既有老味道的扎实，又有酥脆的新口感。\r
林暖尝了一小勺，满意地点点头：甜度克制，薄脆也没有因为接触奶油变软，看得出是下功夫琢磨过了。明天就上架试试吧！\r
\r
第二天，「芋泥薄脆」一上架展示柜，便吸引了不少年轻顾客驻足购买，很快销售一空。\r
林念看着打烊结算单上亮眼的销量数据，第一次尝到了独立研发新品的成就感。\r
\r
### M4｜好朋友的日常与抹茶新香\r
\r
**【事件ID：EVT_M04_MAIN｜触发月份：M4第3个经营日】**\r
**【状态变更：recipeUnlocked += \\[cake-matcha（抹茶蛋糕）\\]，触发高一/高二友情回忆】**\r
\r
四月微风渐暖，林念研发了清新微苦的「抹茶蛋糕（\`cake-matcha\`）」，特意留出第一块等苏晴下班过来尝鲜。\r
傍晚，苏晴带着刚修完照片的笔记本电脑来到店里，两人坐在旧木桌旁一边吃晚饭，一边吃着抹茶蛋糕聊天。\r
\r
苏晴：哇，这个抹茶配蜜红豆的微苦回甘太正了！比我大学城旁边那家网红店做得还好吃！ \\\r
林念：你喜欢就好！对了，我看你今天特地先发消息问我有没有空才过来，怎么突然这么客气？\\\r
 苏晴眨了眨眼：还不是怕林大忙人在研发新品嘛。而且，先问清楚再行动，这可是我们高一同桌那年就立下的规矩呀。 \\\r
林念忍不住笑出声：你还记着高一那件事呢！\r
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
### M5｜第一笔大型订单（含三向数值分支）\r
\r
**【事件ID：EVT_M05_MAIN｜触发月份：M5第2个经营日】**\r
**【状态变更：解锁「定制订单系统」】**\r
\r
这天上午，一位老街坊带着女儿来到店里，希望为周末的家庭生日聚会预订一款特别的十寸双层生日蛋糕。\r
\r
顾客：念念，这是我们家今年最隆重的一次聚会，你现在是店里的主理人了，这款蛋糕的设计和口味，我们想听听你的建议！\r
林暖在旁边向女儿投来鼓励的目光：念念，这笔大单由你独立接洽，按你的经营思路来定吧。\r
\r
> **【玩家选择节点 11.1（M5）：第一笔大型定制订单方案】**\r
>\r
> * **选项A：采用传统奶油装饰**（\`traditionScore + 5\`，解锁传统产品路线）\r
>\r
> * **选项B：尝试新的装饰方式**（\`innovationScore + 5\`，获得新品研发经验）\r
>\r
> * **选项C：先询问顾客具体喜好**（\`communityScore + 5\`，顾客忠诚度增加）\r
\r
**【分支A：选择「采用传统奶油装饰」】**\r
林念：阿姨，林记最拿手的就是手工打发的动物奶油裱花。我为您设计一款双层经典复古花边蛋糕，选用当季最饱满的红颜草莓做夹心，保证一家老小吃到的都是最纯正实在的林记老味道。\r
顾客欣喜地点头：好！家里老人最认你们家的传统奶油，就按你说的办！\r
林暖欣慰一笑：稳扎稳打，把传统手艺做精，这可是咱们立店的根本。\r
\r
**【分支B：选择「尝试新的装饰方式」】**\r
林念：我想为您尝试一款全新的森系撞色抹面与鲜果错落装饰，内层搭配我们新研发的芋泥薄脆与抹茶双拼夹心，拍照好看，口感也更有惊喜感！\r
年轻女孩眼睛一亮：哇，这个搭配听起来太棒了！就选这个新设计！\r
林念在制作过程中摸索出了双层异形承重的新技巧，研发经验大幅提升。\r
\r
**【分支C：选择「先询问顾客具体喜好」】**\r
林念没有急着推销方案，而是倒了两杯温水递给母女俩：阿姨，姐姐，家里长辈平时是不是偏爱少糖绵软的口感？小朋友有没有特别喜欢的水果或者过敏的食材？我们把家里每个人的口味都记下来，做成上下两层不同风味的专属定制款，好不好？\r
顾客感动地说：念念真细心！连我们没想到的细节都替我们考虑到了，以后家里订蛋糕全找你！\r
\r
### M6｜夏日生活节与第一阶段结算\r
\r
**【事件ID：EVT_M06_MAIN｜触发月份：M6第4个经营日】**\r
**【状态变更：recipeUnlocked += \\[cake-mango（芒果慕斯）\\]】**\r
\r
盛夏来临，栖云镇举办一年一度的「夏日生活节」市集。\r
林念特意研发了冰凉爽滑的「芒果慕斯（\`cake-mango\`）」带到市集展位，苏晴则扛着单反相机和布置道具前来助阵。\r
\r
苏晴：看！我把林记的展台布置成暖奶油色系了，配上你今天做的金黄芒果慕斯，在阳光下特别出片！\r
林念看着络绎不绝的食客，心里第一次对「品牌宣传」有了真切的体会。\r
\r
### 【M6月末：第一阶段目标结算】\r
\r
**【检查条件（三项完成两项即可进入第二章）：1. 社区口碑≥25；2. 解锁至少2款新品；3. 完成至少2笔定制订单】**\r
\r
#### ▶ 分支一：阶段达标（进入第二章）\r
\r
**【状态变更：解锁 LV2 精致烘焙店（shop-lv2）筹备与展示柜扩容】**\r
林暖看着账本上稳步增长的营收与满墙的顾客好评，欣慰地拍了拍林念的肩膀。\r
林暖：短短半年，你不仅把老顾客照顾得妥妥帖帖，还做出了好几款受欢迎的新品。妈攒了一笔装修基金，下个月咱们把店里的展示柜升级成三层，再换上暖黄色的吊灯，让林记焕然一新！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.1《街角的灯》\r
\r
**【事件ID：EVT_SHORT_END_01｜触发条件：M6结算完成目标数 < 2】**\r
\r
夏夜的晚风吹过栖云镇的街角，林记烘焙的木门轻轻合上。\r
这半年里，林念并没有做出惊人的商业成绩，也没有急着把店铺改头换面。\r
但在日复一日揉面、打发奶油、和街坊四邻互道早安的过程中，林念发现，自己那些因为毕业求职失利而产生的焦虑，早已被烤箱里的香气抚平了。\r
\r
熟悉的顾客依然每天准时来买蛋糕。\r
林暖看着在厨房里熟练收拾模具的女儿，觉得她比刚回家时沉稳、开朗了许多。\r
周末的午后，苏晴背着相机来到店里，没有聊什么宏大的创业计划，只是坐在靠窗的旧木桌旁，陪林念分吃一块草莓奶油蛋糕。\r
\r
苏晴：念念，现在这样每天烤烤蛋糕、晒晒太阳，感觉怎么样？\r
林念看着窗外暖黄的路灯，笑着舒了一口气。\r
林念：以前我总怕自己落后别人一步。现在才发现，我其实很喜欢现在的生活。不用急着去追逐多么宏大的目标，先把眼前这间小店守好，就已经很幸福了。\r
\r
旁白：一家小店，一盏街角的暖灯，一种自己喜欢的生活。\r
旁白：【达成阶段短线结局：《街角的灯》】\r
\r
## 第二章：熟悉的味道（第7—12个月）\r
\r
**章节主题：老店与新品牌**\r
\r
### M7｜除夕节日订单\r
\r
**【事件ID：EVT_M07_MAIN｜触发月份：M7（除夕节点）】**\r
**【状态变更：解锁「节日订单系统」】**\r
\r
换上三层展示柜与奶油白墙面的林记（\`shop-lv2\`），在寒冬腊月里显得格外温馨。\r
除夕前夕，店里迎来了全年最热闹的预订高峰——几十户老街坊早早来预订除夕团圆蛋糕。\r
\r
林暖：念念，咱们栖云镇的人家，年夜饭桌上一向少不了一只林记的奶油蛋糕。今年这几十张团圆单，你来排产试试？\r
林念看着排满整页的订单，有条不紊地按取货时段分批备料、烘烤、裱花。\r
当除夕夜最后一盒蛋糕交到顾客手中，听着门外此起彼伏的「新年快乐」，林念真切地感受到自己与这座小城的万家灯火紧密相连。\r
\r
### M8｜新的帮手：周雨桐加入（含培养方式分支）\r
\r
**【事件ID：EVT_M08_MAIN｜触发月份：M8第1个经营日】**\r
**【状态变更：解锁「员工系统」，周雨桐加入，recipeUnlocked += \\[cake-tiramisu（提拉米苏）\\]】**\r
\r
春节过后，随着新产品「提拉米苏（\`cake-tiramisu\`）」推出，单靠林念和林暖两个人已经忙不过来日常生产。\r
这天，20岁的周雨桐（小雨）来到店里应聘兼职烘焙学徒。\r
她是中职烹饪相关专业毕业，实习后发现自己真正热爱的是甜点烘焙，尤其喜欢琢磨水果与奶油的搭配，只是性格内向温和，说话时总是有些拘谨、不够自信。\r
\r
周雨桐：林、林店长您好……我叫周雨桐，之前学过西点基础，我很喜欢你们家的蛋糕，请问我可以来当兼职学徒吗？\r
林念笑着迎她进门：当然欢迎！以后大家就叫你小雨吧。\r
\r
在带教小雨处理水果与准备原料的第一周，林念选择了自己的指导方式：\r
\r
> **【玩家选择节点 7.2-1（M8）：对待学徒小雨的指导方式】**\r
>\r
> * **选项A：耐心指导**（手把手带着她熟悉流程，小雨信赖度 +10）\r
>\r
> * **选项B：鼓励尝试**（夸奖她的切果刀工，鼓励她大胆上手，小雨信赖度 +8，专业能力 +5）\r
>\r
> * **选项C：严格要求**（明确每一项原料克重与卫生标准，小雨专业能力 +10，信赖度 +3）\r
\r
**【分支A：耐心指导】**\r
林念：小雨，刚来不用急着求快，我先带你把店里常用的水果切配和奶油打发状态过一遍，有任何拿不准的随时问我。\r
周雨桐感激地点点头：谢谢念念姐！有你带着我，我心里踏实多了。\r
\r
**【分支B：鼓励尝试】**\r
林念：小雨，你看你切出来的草莓厚薄几乎一模一样，基本功很扎实呀！下午这批杯子蛋糕的装饰你大胆试试，我相信你的审美！\r
周雨桐眼睛微微亮起：真的吗？那、那我认真试试看！\r
\r
**【分支C：严格要求】**\r
林念：小雨，林记的老顾客对口味非常敏感，所以不管是筛面粉还是称糖，每一克都不能马虎。我们从第一天起就把标准立好，好吗？\r
周雨桐立刻挺直腰板：明白！我一定严格按照克重表操作，绝不偷懒！\r
\r
### M9｜小雨的第一次独立制作 & 苏晴生日\r
\r
**【事件ID：EVT_M09_MAIN｜触发月份：M9第3个经营日】**\r
**【状态变更：解锁「员工培养与培训系统」】**\r
\r
经过一个月的练习，小雨第一次独立完成了一整盘草莓奶油蛋糕的抹面与装饰。\r
看着小雨小心翼翼捧出成品的样子，林念由衷地给予了肯定，小雨的脸上也渐渐多了自信的笑容。\r
\r
同月也是苏晴22岁的生日。\r
林念发现九月的波姬红无花果清甜多汁，便专门为苏晴试制了一款全新的无花果奶油蛋糕。\r
吹灭蜡烛后，苏晴一边吃着蛋糕，一边用拍立得和林念拍下了生日纪念照。\r
\r
### M10｜开启线上销售与无花果奶油上市\r
\r
**【事件ID：EVT_M10_MAIN｜触发月份：M10第1个经营日】**\r
**【状态变更：解锁「线上经营系统」，recipeUnlocked += \\[cake-fig（无花果奶油）\\]】**\r
\r
在苏晴的建议与帮助下，林念将广受好评的「无花果奶油蛋糕（\`cake-fig\`）」正式加入主菜单，并为全部八款在售蛋糕拍摄了精美的菜单写真，正式上线了林记烘焙的同城线上预订页面。\r
越来越多的年轻顾客开始通过手机预订蛋糕，林记的客源结构迎来了第一次升级。\r
\r
### M11｜藏起来的小本子（周雨桐核心成长事件）\r
\r
**【事件ID：EVT_M11_YUTONG_BOOK｜触发条件：M11—M13期间，小雨信赖度 ≥ 60 且完成至少2次员工互动】**\r
**【若信赖度暂未达到，将在M11触发常规日常研发事件，并在信赖度达标当月立即触发本剧情】**\r
\r
这天打烊后，林念回后厨拿落下的钥匙，却看见小雨一个人坐在角落的工作台前，正对着一本边角有些磨损的旧笔记本写写画画。\r
听到脚步声，小雨慌忙想把本子合上，林念温和地走过去。\r
本子摊开的那一页上，画满了精致的蛋糕切面草图，旁边密密麻麻记着时令水果、酸奶慕斯与奶油夹心的搭配灵感。\r
\r
周雨桐小声说：念念姐……我有时候会想一些蛋糕的搭配，但是一直没有机会真正做出来。\r
林念看着那些充满灵气的草图，轻声问：为什么不试试？\r
周雨桐低下头，手指轻轻捏着衣角：我怕做得不好。\r
林念笑着合上笔记本递还给她：那就先做一小批，慢慢调整嘛。\r
\r
> **【玩家选择节点 7.2-2（M11）：回应小雨的创意本】**\r
>\r
> * **选项A：支持她独立完成一次新品试制**（小雨信赖度 +15，专业能力 +10，\`innovationScore + 5\`）\r
>\r
> * **选项B：与她一起研究配方**（小雨信赖度 +12，专业能力 +8，\`communityScore + 3\`）\r
>\r
> * **选项C：鼓励她先整理思路，再安排试制**（小雨信赖度 +8，专业能力 +5，\`efficiencyScore + 3\`）\r
\r
**【分支A：选择「支持她独立完成一次新品试制」】**\r
林念：小雨，后厨明天下午的烤炉和鲜果柜全归你调配！你就按本子上的想法，独立做一批试吃装出来，原料损耗全算店里的，放手去做！\r
周雨桐怔怔地看着林念，眼眶一下子红了：念念姐……真的可以让我自己做主试一次吗？我、我一定全力以赴！\r
\r
**【分支B：选择「与她一起研究配方」】**\r
林念：你对水果风味的直觉比我还敏锐，缺的只是一点量产配比的经验。明天下班后我留下来陪你，我们一起把你画的这款水果蛋糕变成真正的配方！\r
周雨桐露出灿烂的笑容：嗯！有念念姐陪着我，我就什么都不怕了！\r
\r
**【分支C：选择「鼓励她先整理思路，再安排试制」】**\r
林念：这些点子都特别棒！小雨，你这周先把最想做的那款水果搭配整理成标准克重表，周五下午我们专门安排一次正式试制评审。\r
周雨桐用力点头：好！我今晚就把克重和步骤整理得清清楚楚！\r
\r
**【主线汇合】**\r
几天后，小雨人生中的第一款原创创意水果蛋糕成功出炉，不仅成为了店里的热销款，也让小雨彻底明白——原来自己的想法真的值得被看见、被认可。\r
旁白：【系统提示：解锁小雨个人相册、小雨专属研发能力！】\r
\r
### M12｜林记的三十多年与第二阶段结算\r
\r
**【事件ID：EVT_M12_MAIN｜触发月份：M12第3个经营日】**\r
**【状态变更：解锁「配方笔记图鉴」，recipeUnlocked += \\[cake-seasonal（季节水果蛋糕）\\]】**\r
\r
接手林记满一年的冬夜，林暖拿出了外婆留下的旧照片与手写《配方笔记》，与林念一起回顾了林记从三十多年前的小铺子走到今天的点滴。\r
结合小雨的果味灵感与外婆的戚风底方，「季节水果蛋糕（\`cake-seasonal\`）」正式诞生。\r
\r
### 【M12月末：第二阶段目标结算】\r
\r
**【检查条件（四项完成两项即可进入第三章）：1. 店铺升级至LV2；2. 累计完成8笔线上订单；3. 研发至少3款新品；4. 完成年度节日订单目标】**\r
\r
#### ▶ 分支一：阶段达标（进入第三章）\r
\r
林记烘焙成功建立起稳定的线上预订渠道与丰富的时令产品线，小雨也从兼职学徒转为正式烘焙师。面对不断增长的订单，林念准备迎接新的伙伴与更大的舞台。\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.2《熟悉的味道》\r
\r
**【事件ID：EVT_SHORT_END_02｜触发条件：M12结算完成目标数 < 2】**\r
\r
一年过去，林记依然是栖云镇那家最让人安心的老店。\r
没有铺天盖地的线上宣传，也没有眼花缭乱的扩张计划。\r
又逢除夕夜，店里的长桌上整整齐齐摆满了街坊们提前预订的团圆蛋糕。\r
陈奶奶提着红色的蛋糕盒，笑眯眯地对林念和林暖说：\r
\r
陈奶奶：还是你们家的蛋糕好吃，这么多年都没变。只要林记还开在街口，咱们镇上的年味儿就还在。\r
\r
送走最后一位客人，林念看着身边忙碌却从容的母亲，又看了看认真擦拭展示柜的小雨和坐在吧台边修图的苏晴。\r
林念心里想：这样一步一个脚印地守着老味道，其实也很好。\r
\r
旁白：没有成为声名远播的大品牌，但林记依然是大家心里最熟悉的林记。\r
旁白：【达成阶段短线结局：《熟悉的味道》】\r
\r
## 第三章：让林记走得更远（第13—18个月）\r
\r
**章节主题：品牌升级与团队磨合**\r
\r
### M13｜产品标准化（含三向数值分支）\r
\r
**【事件ID：EVT_M13_MAIN｜触发月份：M13第2个经营日】**\r
**【状态变更：解锁「配方标准化系统」】**\r
\r
进入第二年，随着每日制作的蛋糕数量翻倍，林念发现不同批次的产品在甜度和奶油打发硬度上偶尔会出现细微差异。\r
为了保证品质稳定，林念开始着手整理林记的标准配方手册：\r
\r
> **【玩家选择节点 11.2（M13）：产品标准化的方向】**\r
>\r
> * **选项A：坚持手工制作**（\`traditionScore + 8\`，产品特色更强，熟客满意度提升）\r
>\r
> * **选项B：引入统一制作流程**（\`efficiencyScore + 8\`，制作体力消耗降低，后续更容易发展多门店）\r
>\r
> * **选项C：保留核心手工步骤，其他流程标准化**（\`traditionScore + 4, efficiencyScore + 4\`，获得平衡路线奖励）\r
\r
**【分支A：选择「坚持手工制作」】**\r
林念：林记的灵魂就在于手工打发和根据每日鲜果状态微调的细腻感。我们统一原料品质标准，但保留烘焙师手工操作与现制装饰的传统，绝不用机器流水线替代手艺。\r
\r
**【分支B：选择「引入统一制作流程」】**\r
林念：要想让每一位客人吃到的每一块蛋糕都毫无落差，我们必须把所有原料克重、搅拌时间、烤箱温区全部量化成标准作业表，大幅提升出餐稳定性！\r
\r
**【分支C：选择「保留核心手工步骤，其他流程标准化」】**\r
林念：我们把前面的原料称配、蛋糕胚烘烤全部做成标准流程，提高效率；而最关键的果酱熬制和奶油裱花依然保留手工微调，兼顾稳定与温度。\r
\r
### M14｜许知遥加入\r
\r
**【事件ID：EVT_M14_MAIN｜触发月份：M14第1个经营日】**\r
**【状态变更：解锁「订单运营系统」，许知遥加入】**\r
\r
随着订单暴增，前厅接待与线上客服急需专人负责。\r
23岁的许知遥正式加入林记。她曾有咖啡店和零售服务经验，性格开朗、极善沟通，很快就能叫出大半熟客的名字。\r
但面对繁杂的定制排期与库存管理，知遥心里其实有些缺乏管理信心，生怕自己管不好大局。\r
林念耐心地与她一起梳理前厅接待与预约登记流程，鼓励她逐步接手门店日常运营。\r
\r
### M15｜跨界合作 & 小雨的职业理想 & 苏晴的作品展\r
\r
**【事件ID：EVT_M15_MAIN｜触发月份：M15第3个经营日】**\r
**【状态变更：解锁「商业合作玩法」】**\r
\r
本月，林记与当地精品咖啡馆联合推出春日联名下午茶，大获好评。\r
苏晴受邀为联名活动拍摄海报，并兴奋地向林念展示了自己即将参展的独立摄影作品集。\r
与此同时，在后厨独当一面的小雨也在工作间隙向林念敞开了心扉（\`EVT_M15_YUTONG_TALK\`）：\r
\r
周雨桐：念念姐，其实刚来林记那会儿，我只是想找一份稳定的工作养活自己。但是这大半年看着客人们吃到我做的蛋糕时开心的样子……我现在真的想把烘焙当成自己一辈子的事业来做。\r
林念温和地看着她：小雨，你早就已经是一名很优秀的烘焙师了。不用急着向谁证明自己，按照你的节奏大胆往前走，林记永远是你的舞台。\r
\r
### M16｜婚礼甜品台与定制升级\r
\r
**【事件ID：EVT_M16_MAIN｜触发月份：M16第2个经营日】**\r
**【状态变更：解锁「大型活动订单」，recipeUnlocked += \\[cake-custom（生日定制蛋糕）\\]】**\r
\r
林记接到了第一笔大型户外婚礼甜品台订单，同时正式解锁高阶产品「生日定制蛋糕（\`cake-custom\`）」。\r
林念与小雨负责后厨定制研发，知遥第一次尝试统筹整场活动的客户对接与配送时间表。\r
活动圆满完成后，知遥对订单管理的信心明显提升了不少。\r
\r
### M17｜临江市考察\r
\r
**【事件ID：EVT_M17_MAIN｜触发月份：M17第3个经营日】**\r
**【状态变更：解锁「外出考察行动」】**\r
\r
林念前往邻近的临江市考察商圈市场。\r
看着临江市热闹的商业街区与年轻白领客群，林念发现不同城市的消费习惯与栖云镇截然不同，也开始认真思考林记下一步的品牌扩张方向。\r
\r
### M18｜唐可欣加入与第三阶段结算\r
\r
**【事件ID：EVT_M18_MAIN｜触发月份：M18第1个经营日】**\r
**【状态变更：解锁「专业生产管理」，唐可欣加入】**\r
\r
为了升级生产体系，曾在大型连锁烘焙品牌担任主管的27岁资深烘焙师唐可欣加入林记。\r
唐可欣专业、理性、要求严格，入职第一周便对后厨流程提出了全套标准化改造方案。\r
起初，她认为林念保留过多手工弹性的做法不够成熟，两人在生产理念上产生了一定分歧；但在共同完成月末的高峰订单后，唐可欣也初步看到了林记对食材品质的坚持。\r
\r
### 【M18月末：第三阶段目标结算】\r
\r
**【检查条件（四项完成两项即可进入第四章）：1. 产品平均品质≥3级；2. 完成至少3款标准化配方；3. 店铺口碑≥45；4. 至少一名员工专业能力≥3级】**\r
\r
#### ▶ 分支一：阶段达标（进入第四章）\r
\r
林记烘焙成功完成了团队磨合与配方标准化升级，正式解锁「分店筹备与多渠道拓展系统」！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.3《小小的团队》\r
\r
**【事件ID：EVT_SHORT_END_03｜触发条件：M18结算完成目标数 < 2】**\r
\r
一年半的时间匆匆而过。\r
在尝试推进标准化与团队管理的过程中，林念发现，经营好栖云镇的这一家店，其实已经占据了自己大部分的精力。\r
与其勉强自己去应付复杂的跨城扩张，她更享受每天在后厨和伙伴们一起揉面、试吃新品的时光。\r
\r
于是，林念决定暂时放下开设分店的计划，和林暖、小雨、知遥、可欣一起，专心把栖云镇的林记打理得井井有条。\r
每天清晨，大家一起备料；傍晚打烊后，围在一起分享当天剩下的小蛋糕和生活里的趣事，苏晴也常带着相机来凑热闹。\r
\r
林念看着身边热闹而默契的伙伴们，心里一片澄明。\r
她第一次明白，经营一项事业，不一定要永无止境地扩大规模。\r
\r
旁白：有一群可靠的伙伴，有一家大家都喜欢的店，就已经很好。\r
旁白：【达成阶段短线结局：《小小的团队》】\r
\r
## 第四章：从一家店到一支团队（第19—24个月）\r
\r
**章节主题：信任与责任**\r
\r
### M19｜分店筹备与知遥的管理理想（含三向路线分支）\r
\r
**【事件ID：EVT_M19_MAIN｜触发月份：M19第1个经营日】**\r
**【状态变更：解锁「分店系统」与知遥个人剧情】**\r
\r
进入第四章，林记烘焙站在了业务扩张的十字路口。\r
许知遥在整理完近半年的订单数据后，主动向林念提交了一份规范化的《跨渠道订单管理方案》。\r
**【若许知遥信赖度 ≥ 60，额外触发个人交心剧情 \`EVT_M19_ZHIYAO_DREAM\`】**：\r
许知遥有些不好意思地对林念说：念念，以前我在咖啡店打工的时候，总觉得自己只会跟客人聊天，管不好账和货。但这一年在林记，是你一直鼓励我用表格管单子……其实我心里一直有个目标，我希望有一天，自己也能独立负责一家门店！\r
林念笑着把新业务筹备计划书递给她：知遥，机会已经来了。\r
\r
面对接下来的扩张方向，林念需要做出战略抉择：\r
\r
> **【玩家选择节点 11.3（M19）：业务扩张路线】**\r
>\r
> * **选项A：立即筹备实体分店**（投入资金较大，扩张速度快，\`efficiencyScore + 8\`）\r
>\r
> * **选项B：先发展线上销售**（投入较低，解锁线上品牌深度路线，\`innovationScore + 6\`）\r
>\r
> * **选项C：与其他店铺合作**（解锁商业联名与专柜合作路线，\`communityScore + 6\`）\r
\r
**【分支A：选择「立即筹备实体分店」】**\r
林念决定正式在临江市筹备第一家实体直营分店，由许知遥负责新店前厅筹建，唐可欣统筹两店生产标准。\r
\r
**【分支B：选择「先发展线上销售」】**\r
林念决定先升级冷链包装与线上商城，开通跨城次日达礼盒专线，以轻资产方式打开周边城市市场。\r
\r
**【分支C：选择「与其他店铺合作」】**\r
林念决定与临江市及周边的多家精品咖啡馆、书店建立每日鲜配甜品专柜合作，稳步扩大林记的品牌辐射力。\r
\r
### M20｜业务落地与节日限定发布\r
\r
**【事件ID：EVT_M20_MAIN｜触发月份：M20第2个经营日】**\r
**【状态变更：解锁「多渠道/分店经营」，recipeUnlocked += \\[cake-festival（节日限定蛋糕）\\]，解锁LV3品牌旗舰店（shop-lv3）升级权限】**\r
\r
随着临江分店（或线上商城/合作专柜）正式投入运营，林记同步推出了「节日限定蛋糕（\`cake-festival\`）」。\r
栖云镇主店也完成了第三次焕新升级（\`shop-lv3\`）：整面墙的温润木质货架、通透的开放式厨房玻璃隔断、品牌故事展示墙与舒适的顾客休息区，让老街坊与年轻游客都赞不绝口。\r
\r
### M21｜叶清禾加入品牌视觉合作 & 唐可欣的尘封配方\r
\r
**【事件ID：EVT_M21_MAIN｜触发月份：M21第2个经营日】**\r
**【状态变更：解锁「品牌视觉系统」，叶清禾开始合作】**\r
\r
为了统一林记升级后的包装与视觉形象，22岁的自由插画师、品牌设计师叶清禾开始与林记长期合作。\r
清禾创意丰富、审美出众，但最初设计的包装盒过于理想主义，忽略了后厨折叠效率与运输承重。在林念与唐可欣的引导下，清禾开始学习将插画美学与商业实用性结合。\r
\r
**【同月或M22，若唐可欣信赖度 ≥ 60，触发唐可欣个人剧情 \`EVT_M21_KEXIN_RECIPE\`】**：\r
打烊后的研发室里，唐可欣罕见地拿出一份自己珍藏多年的手写配方手稿。\r
唐可欣：林念，其实我刚入行的时候，最喜欢的是研发新口味。这是我三年前设计的「焦糖海盐伯爵茶千层」，当时连锁总部觉得工序比普通款多两道、利润率不够极致，直接毙掉了。久而久之，我也把自己变成了一个只看效率和数字的人……直到来到林记，看到你和小雨对蛋糕的热情。\r
林念接过那份保存完好的手稿，认真地说：可欣姐，在林记，好味道永远不会被冰冷的数字否定。下周的研发排期，我们一起把你这款原创蛋糕做出来！\r
*（支持唐可欣重新研发后，唐可欣信赖度 +15，专业能力 +10，解锁可欣专属研发加成）*\r
\r
### M22｜多门店与多渠道业务磨合\r
\r
**【事件ID：EVT_M22_MAIN｜触发月份：M22第3个经营日】**\r
**【状态变更：解锁「统一库存管理系统」】**\r
\r
随着业务量扩大，不同门店与渠道之间的原料调拨与库存差异显现出来。\r
林念联合许知遥与唐可欣，正式建立起「统一库存与每日动态备货系统」，彻底解决了多线运营的损耗问题。\r
\r
### M23｜与苏晴的小矛盾（含三向沟通分支，无友情BE）\r
\r
**【事件ID：EVT_M23_MAIN｜触发月份：M23第3个经营日】**\r
\r
这段时间，林念全部身心都扑在跨店管理与新视觉落地中，连续两次因为临时处理店务推迟了和苏晴的约饭。\r
到了第三次约好的周末下午，林念处理完一笔紧急库存调拨赶到餐厅时，苏晴已经等了大半个小时。\r
\r
苏晴看着风尘仆仆坐下的林念，认真地开口：\r
苏晴：念念，我不是不能理解你忙。我只是希望你能提前告诉我，而不是让我一直等。\r
\r
> **【玩家选择节点 11.4（M23）：回应苏晴的坦诚】**\r
>\r
> * **选项A：认真解释并道歉**\r
>\r
> * **选项B：承认最近确实有些忽略朋友**\r
>\r
> * **选项C：主动约定以后提前安排时间**\r
>   *（注：三种选择均能圆满解决矛盾，友情不产生BE，解锁不同温情对白）*\r
\r
**【分支A：选择「认真解释并道歉」】**\r
林念诚恳地握住苏晴的手：苏晴，对不起。刚才分店冷链车临时故障，我急着调度就忘了先给你发消息。不管什么原因，让你白白等这么久都是我的不对。\r
苏晴神色缓和下来：我不是怪你忙工作，只是怕你什么事都自己扛着，连跟我说一声的时间都没有。\r
\r
**【分支B：选择「承认最近确实有些忽略朋友」】**\r
林念愧疚地低下头：对不起苏晴……这段时间我满脑子都是报表和库存，下意识觉得你最懂我，就把你的时间排在了最后，确实忽略了你的感受。\r
苏晴轻轻叹了口气，替她理了理碎发：正因为我们是最好的朋友，有什么不舒服才更要直接说出来呀。还记得我们高一的约定吗？\r
\r
**【分支C：选择「主动约定以后提前安排时间」】**\r
林念认真地拿出日程本：苏晴，对不起！从今天起，我们每周三晚上的饭局我直接写进店长固定日程表里，天塌下来也提前半天跟你说，要是临时有急事，我就带着新烤的小蛋糕去你工作室赔罪！\r
苏晴噗嗤一笑：这还差不多！那我可记下了，林大店长不许再赖账！\r
\r
**【主线汇合】**\r
两人相视一笑，就像高一那年放学后的走廊一样，所有的芥蒂都在坦诚的沟通中烟消云散。\r
\r
### M24｜二十四岁生日与第四阶段结算\r
\r
**【事件ID：EVT_M24_MAIN｜触发月份：M24第5个经营日】**\r
**【状态变更：解锁友情相册NO.10《二十四岁的烛光》】**\r
\r
林念24岁生日这天，林暖、苏晴与小雨、知遥、可欣、清禾一起为她筹办了惊喜生日会。\r
团队亲手制作了生日蛋糕，苏晴则送上了自己两年来跟拍林记成长的纪实照片集。\r
看着身边的家人、挚友与团队，林念真正体会到了从「一个人」到「一群人」的幸福。\r
\r
### 【M24月末：第四阶段目标结算】\r
\r
**【检查条件（四项完成两项，且至少包含第1或第2项业务扩张目标）：1. 成功开设第一家分店；2. 建立稳定的线上或商业合作渠道；3. 建立统一库存系统；4. 至少两名伙伴信赖度达到50】**\r
\r
#### ▶ 分支一：阶段达标（进入第五章）\r
\r
林记烘焙成功迈出跨区域发展的关键一步，正式进入第五章「区域品牌发展与品牌灵魂重塑」阶段！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.4《栖云镇的招牌》\r
\r
**【事件ID：EVT_SHORT_END_04｜触发条件：M24结算未满足扩张达标要求】**\r
\r
两年的经营时光里，林记烘焙逐渐成为了栖云镇家喻户晓的金字招牌。\r
林念尝试过向外扩张，也在多渠道经营中摸索过一段时间，但最终她发现，比起在陌生城市里奔波应付复杂的报表，自己更喜欢守在熟悉的街巷里，把眼前的这家店做到极致。\r
\r
于是，林念用攒下的资金将栖云镇的门店重新装修了一番，增加了宽敞的堂食座位与暖光休息区，也让小雨、知遥、可欣拥有了更舒适从容的工作环境。\r
在一个阳光明媚的午后，苏晴站在店门外，拍下了林记最漂亮的一张全家福。\r
\r
林念靠在门框边，看着照片笑了笑：\r
林念：其实我们也没有走得很远嘛。\r
苏晴放下相机，眉眼弯弯地看向她：\r
苏晴：但是你已经把这里变成自己喜欢的样子了呀。\r
\r
旁白：没有走向全国，却成为了一座小城里无可替代的温暖存在。\r
旁白：【达成阶段短线结局：《栖云镇的招牌》】\r
\r
## 第五章：找回林记的味道（第25—30个月）\r
\r
**章节主题：传承、友情与团队（全篇最核心剧情章节）**\r
\r
### M25｜进入周边城市市场 & 叶清禾的作品展筹备\r
\r
**【事件ID：EVT_M25_MAIN｜触发月份：M25第1个经营日】**\r
**【状态变更：解锁「周边城市品牌扩张」】**\r
\r
进入第三年，林记烘焙开始向周边城市拓展市场，并收到了年度盛会「秋日文化节」的参展邀请。\r
**【同月，若叶清禾信赖度 ≥ 60，触发清禾个人剧情 \`EVT_M25_QINGHE_EXHIBITION\`】**：\r
叶清禾抱着一摞画册来到店里，有些紧张地向林念求助：\r
叶清禾：林店长，下个月青年艺术中心有个插画与商业设计联展，我想报名参加个人作品展示，但不知道怎么把纯插画和商业包装结合起来展示，你能帮我参谋一下吗？\r
\r
> **【玩家选择节点 7.5（M25）：帮助叶清禾准备个人作品展】**\r
>\r
> * **选项A：帮助她整理作品脉络**（清禾信赖度 +15，专业能力 +8）\r
>\r
> * **选项B：联系苏晴一起帮她拍摄实物产品照片**（清禾信赖度 +12，专业能力 +10，\`innovationScore + 5\`）\r
>\r
> * **选项C：从经营者角度提供商业反馈**（清禾信赖度 +10，专业能力 +12，\`efficiencyScore + 5\`）\r
\r
**【分支A】** 林念陪清禾一起将初稿手绘与最终落地的林记礼盒并排陈列，清晰展现出「从艺术灵感到温暖商品」的蜕变过程。\r
**【分支B】** 林念请苏晴为清禾设计的全套包装拍摄了极具质感的实景大片，让展位视觉冲击力倍增。\r
**【分支C】** 林念帮清禾补充了包装改良后的损耗下降率与顾客好评数据，让她的作品展兼具艺术美感与商业说服力。\r
**【汇合】** 作品展大获成功，叶清禾真正成长为兼具创意与商业思维的品牌设计师。\r
\r
### M26｜外婆的旧配方：桂花栗子蛋糕\r
\r
**【事件ID：EVT_M26_MAIN｜触发月份：M26第2个经营日】**\r
**【状态变更：解锁招牌研发，recipeUnlocked += \\[cake-signature（招牌蛋糕：桂花栗子蛋糕）\\]】**\r
**【CG：osmanthus】**\r
\r
为了在秋日文化节上拿出一款真正代表林记灵魂的主打产品，林暖拿出了外婆珍藏的旧配方本，翻到了停做多年的经典招牌——「桂花栗子蛋糕（\`cake-signature\`）」。\r
\r
林暖：这款桂花栗子蛋糕是你外婆当年的心头好，每到秋天桂花盛开时，镇上的街坊都要排队来买。后来因为手工炒栗子和锁住鲜桂花香气的工序太繁琐，才渐渐停做了。\r
林念看着泛黄纸页上的字迹，坚定地说：妈，今年秋天，我们把外婆的桂花栗子蛋糕重新带回来吧！\r
\r
小批量试制非常顺利，清甜的桂花与绵密的秋栗赢得了一致好评，秋日文化节预售通道开启后，订单迅速爆满。\r
\r
### M27｜桂花栗子蛋糕危机（含三向决策分支 & 第十二章伙伴专属协助）\r
\r
**【事件ID：EVT_M27_MAIN｜触发月份：M27｜连续剧情事件】**\r
\r
距离秋日文化节只剩下一个多月。\r
当团队开始进行大批量生产和跨城冷链运输测试时，四个严重问题同时暴露出来：\r
\r
1. 不同批次采购的栗子甜度和水分存在明显差异，固定配比导致口味忽甜忽淡；\r
\r
2. 桂花香气在批量烘烤和冷藏保存过程中极易变淡流失；\r
\r
3. 原有的传统动物奶油装饰过于娇嫩，不适合长时间跨城运输；\r
\r
4. 现有礼盒内衬无法充分固定蛋糕，颠簸后容易移位受损。\r
\r
看着逼近的交付日期，林念陷入了强烈的焦虑之中。关键时刻，她必须先确定应对危机的总体方针：\r
\r
> **【玩家选择节点 11.5（M27）：应对新品危机】**\r
>\r
> * **选项A：坚持原计划，大规模生产**（资金压力较大，需要较强团队能力支撑，成功则品牌影响力大幅飞跃）\r
>\r
> * **选项B：缩减预售数量，优先保证品质**（风险较低，活动直接收益减少，但稳守口碑，\`traditionScore + 5\`）\r
>\r
> * **选项C：延后部分订单，重新优化配方**（主动与顾客沟通分批交付，获得额外研发时间，\`communityScore + 5\`）\r
\r
**【分支A：坚持原计划】** 林念：我们不砍单！立刻调集备用资金和全部研发力量，在文化节开幕前把四大难题全部攻克！\r
**【分支B：缩减预售数量】** 林念：品质是林记不可触碰的底线。先锁住预售上限，确保送到客人手里的每一盒蛋糕都完美无瑕！\r
**【分支C：延后部分订单】** 林念：我们坦诚向远途预订的顾客说明情况，将非现场订单延后一周分批配送，先腾出时间把配方彻底打磨好！\r
\r
#### 【第十二章机制：伙伴专属协助判定（根据前期养成自动触发对应分支）】\r
\r
**1. 周雨桐（小雨）的协助：**\r
\r
* **【高养成解锁分支：小雨信赖度 ≥ 70 且已完成M11创意研发剧情】**\r
  小雨捧着三盘标好记号的栗子泥小样跑进研发室，眼睛亮晶晶地说：\r
  周雨桐：念念姐，你别急！我昨晚把新到的五批栗子全部测了一遍水分和糖度，按甜度分成了A、B、C三级，还用我之前小本子上的果冻锁鲜法，试出了「微凝桂花冻夹心」小样！你快尝尝，这样不仅每一批甜度都稳了，桂花香也能锁在夹心里三天不散！\r
  林念惊喜地握住小雨的手：小雨，你真的帮了我天大的忙！现在的你，已经是咱们林记最棒的主力研发师了！\r
\r
* **【普通保底分支：未满足高养成条件】**\r
  林念带领小雨耗费数个经营日，在后厨反复进行常规批次抽检与配比调整，逐步摸索出稳定的甜度方案。\r
\r
**2. 唐可欣的协助：**\r
\r
* **【高养成解锁分支：可欣信赖度 ≥ 70 且已完成原创配方研发剧情】**\r
  唐可欣将一份连夜赶制出来的《桂花栗子动态标准化生产流程图》铺在操作台上：\r
  唐可欣：林念，批量生产的损耗和温控交给我。我把传统炒栗工序拆解成了「低温预烘+分段控糖搅拌」两个标准模块，既保留了手工炒制的醇厚焦香，又能让两家店的后厨出餐效率提高一倍！\r
\r
* **【普通保底分支：未满足高养成条件】**\r
  唐可欣按照常规连锁排产经验，协助后厨重新排定了加班烘烤班次，保障基础产能。\r
\r
**3. 许知遥的协助：**\r
\r
* **【高养成解锁分支：知遥信赖度 ≥ 70 且已完成M19订单管理系统剧情】**\r
  许知遥拿着平板电脑从容地走进来：\r
  许知遥：念念，前厅和线上预订的八百多位客人我已经全部按「现场自提」「同城闪送」「跨城冷链」做好三级分流了！所有需要调整配送时段的客人我也逐一电话沟通完毕，大家不仅没有退单，还在留言区给我们加油呢！\r
\r
* **【普通保底分支：未满足高养成条件】**\r
  林念与知遥一起花费额外行动力，逐一处理顾客咨询与订单排期调整。\r
\r
**4. 叶清禾的协助：**\r
\r
* **【高养成解锁分支：清禾信赖度 ≥ 70 且已完成M25个人作品展剧情】**\r
  叶清禾拎着一只全新的打样礼盒赶到店里：\r
  叶清禾：林店长，你看！我把礼盒内托改成了双层卡扣式加厚防震底座，外盒用「秋山金桂」镂空腰封固定，刚才我抱着它模拟颠簸测试了一路，里面的蛋糕纹丝不动！\r
\r
* **【普通保底分支：未满足高养成条件】**\r
  团队采购了通用型加固冷链包装盒，通过增加冰袋与防撞棉解决基础运输问题。\r
\r
### M28｜找回记忆：外婆的十二字批注\r
\r
**【事件ID：EVT_M28_MAIN｜触发月份：M28｜连续剧情事件】**\r
\r
在团队攻克技术难关的同时，苏晴也用自己的方式向林念伸出了援手。\r
她背着相机走遍栖云镇的老街，采访了陈奶奶等十几位光顾林记几十年的老顾客，将他们记忆中关于桂花栗子蛋糕的故事与老照片整理成册，带回店里。\r
\r
看着照片上老街坊们温暖的笑容，林暖（若家庭默契 ≥ 70，触发深度传承回忆）轻轻翻开外婆旧配方本的封底，指着上面一行历经岁月却依旧清晰的字迹：\r
**「栗子甜则少放糖，桂花香淡则后撒。」**\r
\r
林暖温和地看着女儿：念念，你外婆当年做蛋糕，从来不是死板地照搬去年的克重。顺应每一年秋天的食材脾气，把最妥帖的味道送到客人嘴里，这才是林记真正的传承。\r
林念恍然大悟，结合小雨的原料分级、可欣的动态流程与清禾的新礼盒，全新的「林记招牌桂花栗子蛋糕」终于完美定型！\r
\r
### M29｜秋日文化节 & 友情线最高潮（含高三完整回忆）\r
\r
**【事件ID：EVT_M29_MAIN｜触发月份：M29｜强制连续主线剧情】**\r
**【状态变更：friendshipMemories 全解锁】**\r
\r
金秋十月，秋日文化节盛大开启。\r
林记烘焙的展位前，苏晴拍摄的《栖云镇的秋日甜味记忆》摄影展板引来无数游客驻足；全新升级的桂花栗子蛋糕更是凭借馥郁的桂花幽香与绵密醇厚的栗子夹心惊艳全场，所有预售与现场订单圆满交付！\r
\r
活动圆满落幕的傍晚，夕阳将展馆染成一片暖金。\r
看着空下来的展台，林念鼻子一酸，快步走到正在收拾相机的苏晴面前，一下子紧紧抱住了她。\r
\r
**【CG：festival】**\r
林念：呜呜呜，你真好！\r
林念：我们要做一辈子的好朋友！\r
\r
苏晴弯起嘴角，轻轻拍了拍林念的后背。\r
她没有马上回答，思绪却随着这个温暖的拥抱，回到了几年前那个高三晚自习的夜晚——\r
\r
**【插入完整回忆 8.3：高三——苏晴认定一辈子的朋友】**\r
**【事件ID：EVT_FLASHBACK_HS3_FULL】**\r
**【CG：memory】**\r
\r
高三时，苏晴换了一位新同桌，名叫沈妍。\r
\r
两人刚开始相处正常，但此前沈妍曾与其他同学发生过冲突。\r
\r
某天，同学许佳宁小声提醒苏晴：\r
\r
许佳宁：苏晴，你最近和新同桌相处得还好吗？\r
\r
苏晴：挺好的呀，怎么了？\r
\r
许佳宁：她之前和同学发生过一些冲突，最近状态好像也不太稳定。我也不清楚具体情况，只是觉得你们现在是同桌，还是稍微留意一下比较好。\r
\r
苏晴：啊？这样吗。谢谢你的提醒。\r
\r
之后，沈妍与苏晴相处一直比较正常，苏晴也没有太在意这件事。\r
\r
某节晚自习下课，林念照常来到苏晴班级找她。\r
\r
林念：我给你带了妈妈做的小面包！\r
\r
苏晴：哇！谢谢你！\r
\r
苏晴咬了一口。\r
\r
苏晴：真好吃！\r
\r
苏晴：对了，我跟你讲，我上周看到一本小说……\r
\r
两个人正聊着天，沈妍突然从教室前门冲了进来。\r
\r
她误以为苏晴向老师透露了自己的事情，情绪激动，手里还拿着一把长柄伞。\r
\r
随后，她突然挥动雨伞，冲向苏晴。\r
\r
苏晴完全没有反应过来。\r
\r
林念第一时间冲上前，试图将两人分开，同时大声呼喊老师。\r
\r
周围同学被突发情况吓住，班长赶紧跑去找值班老师。\r
\r
短暂的混乱后，老师赶到现场，制止了冲突。\r
\r
苏晴受了伤，随后由老师陪同处理。学校联系了双方家长，后续也安排了相应的沟通和处理。\r
\r
事情发生后，苏晴被老师叫去询问经过。\r
\r
她一直表现得很冷静，能够清楚地回答老师的问题。\r
\r
直到她走出办公室。\r
\r
她看到了刚从办公室回来的林念。\r
\r
林念的眼睛红红的。\r
\r
一见到苏晴，她就走上前，紧紧抱住了她。\r
\r
林念：你吓死我了……\r
\r
林念：有没有哪里不舒服？\r
\r
苏晴已经记不清林念具体说了什么。\r
\r
她只记得那个拥抱。\r
\r
刚刚还能冷静回答老师问题的她，在看到林念的那一刻，突然忍不住了。\r
\r
那些被压下去的惊吓和委屈一下子涌了上来。\r
\r
她抱着林念哭了出来。\r
\r
旁白（苏晴视角）：\r
\r
刚刚在教室里的时候，我好像什么感觉都没有。\r
\r
老师问我事情经过，我可以很平静地回答。\r
\r
可是看到林念的那一刻，我突然就忍不住了。\r
\r
我想起高一的时候，我们约定过，有什么事情都要直接告诉对方。\r
\r
我也想起高二的时候，每次一下课，她总会出现在我们班后门。\r
\r
原来有一个人会这样在意自己，是一件很幸福的事情。\r
\r
**苏晴想：我想和这个人做一辈子的好朋友。**\r
\r
**【回到现在：秋日文化节现场】**\r
晚霞映照在两个女孩含笑的眉眼间。\r
\r
旁白（苏晴视角）：\r
其实，早在几年前，我就已经下定决心了。\r
我要和你做一辈子的好朋友。\r
\r
### M30｜第五阶段总结与结算\r
\r
**【事件ID：EVT_M30_MAIN｜触发月份：M30第5个经营日】**\r
**【注意：系统规则强制要求先完整播放完桂花栗子蛋糕主线与M29友情高潮后，再进行第五阶段目标检查】**\r
**【检查条件（四项完成两项即可进入第六章）：1. 成功研发桂花栗子蛋糕；2. 完成生产和运输测试；3. 完成秋日文化节；4. 至少两位伙伴提供专属协助】**\r
\r
#### ▶ 分支一：阶段达标（进入第六章）\r
\r
凭借秋日文化节的轰动效应，林记烘焙正式确立了独特的品牌文化，解锁「高端主题旗舰店（\`shop-lv4\`）筹备」与「全国城市地图拓展」！\r
\r
#### ▶ 分支二：阶段未达标 → 触发短线结局 10.5《桂香留在栖云》\r
\r
**【事件ID：EVT_SHORT_END_05｜触发条件：M30结算完成目标数 < 2】**\r
\r
秋日文化节结束后，林记重新研发的桂花栗子蛋糕获得了当地顾客的由衷喜爱。\r
但经过这次高强度的活动筹备，林念也清醒地意识到，以团队目前的精力与节奏，还不适合强行推进大规模的跨省扩张。\r
于是，她放下了紧绷的野心，决定将这款凝聚着外婆记忆与伙伴心血的桂花栗子蛋糕，定为林记每年秋天的保留限定产品。\r
\r
十月末的午后，苏晴将这段时间拍摄的活动照片整理成册带到店里。\r
桂花树的落英铺满了门前的石阶，林念和林暖、苏晴、小雨、知遥、可欣、清禾一起围坐在店里，分吃着今年秋天的最后一批桂花栗子蛋糕。\r
\r
旁白：有些味道，不需要传遍全国，也值得在熟悉的地方一直保留下去。\r
旁白：【达成阶段短线结局：《桂香留在栖云》】\r
\r
## 第六章：把喜欢的味道带到全国（第31—36个月）\r
\r
**章节主题：品牌扩张与新的开始（本章不设普通失败结局）**\r
\r
### M31｜建立统一供应链\r
\r
**【事件ID：EVT_M31_MAIN｜触发月份：M31第1个经营日】**\r
**【状态变更：解锁「供应链系统」】**\r
\r
进入最后半年，林记正式建立起统一的鲜果直采、中央预处理与冷链配送体系。\r
唐可欣全面接管生产与品控标准，林暖也放心将最后的重大采购权交接给林念，开始享受半退休的悠闲生活。\r
\r
### M32｜点亮城市地图 & 商业收购邀约（可选分支）\r
\r
**【事件ID：EVT_M32_MAIN｜触发月份：M32第2个经营日】**\r
**【状态变更：解锁「城市地图系统」（杭州、上海、南京、成都、广州、北京）】**\r
\r
随着供应链成熟，林记烘焙的足迹开始根据玩家的拓展步伐点亮更多城市地图（\`city-linjiang\`, \`city-hangzhou\`, \`city-shanghai\`, \`city-nanjing\`, \`city-chengdu\`, \`city-guangzhou\`, \`city-beijing\`）。\r
\r
**【独立可选分支事件：资本收购邀约 \`EVT_M32_ACQUISITION_OFFER\`】**\r
名声大噪的林记吸引了一家大型餐饮投资集团的注意，对方提出以丰厚的资金全资收购「林记烘焙」的品牌与全部门店经营权。\r
\r
> **【玩家选择节点 13.6（M32/M35）：面对品牌收购邀约】**\r
>\r
> * **选项A：婉拒收购，坚持自主经营林记**（继续正常推进第六章主线，走向最终结局13.1—13.5）\r
>\r
> * **选项B：接受收购邀约，卸下经营重担**（将在结算时进入独立选择型遗憾结局 13.6《转让》）\r
\r
### M33｜旗舰店设计（含四向风格分支）\r
\r
**【事件ID：EVT_M33_MAIN｜触发月份：M33第3个经营日】**\r
**【状态变更：解锁 LV4 高端主题门店（shop-lv4）】**\r
**【CG：flagship】**\r
\r
林念决定打造林记烘焙的最高等级门店——LV4 旗舰店（配备拱形门洞、大理石台面、精致花艺与独立旗舰展示空间）。\r
叶清禾拿出了一整套成熟的品牌视觉方案，并请林念拍板最终的旗舰店主题风格：\r
\r
> **【玩家选择节点 11.6（M33）：旗舰店设计风格】**\r
>\r
> * **选项A：传统复古风格**（\`traditionScore + 10\`，雕花木窗与岁月铜牌，深受长辈与文化食客喜爱）\r
>\r
> * **选项B：现代简约风格**（\`efficiencyScore + 10\`，极简奶油白与通透玻璃动线，出餐与展示效率拉满）\r
>\r
> * **选项C：高端主题风格**（\`innovationScore + 10\`，艺术策展式甜品空间，品牌影响力大幅提升）\r
>\r
> * **选项D：自然温馨风格**（\`communityScore + 10\`，原木花艺与阳光庭院座位，顾客停留意愿与舒适度最高）\r
\r
装修落成当天，苏晴带着专业摄影设备走遍旗舰店的每一个角落，拍下了惊艳全城的宣传大片。\r
\r
### M34｜全国门店管理体系\r
\r
**【事件ID：EVT_M34_MAIN｜触发月份：M34第2个经营日】**\r
\r
在林念的统筹下，周雨桐、许知遥、唐可欣、叶清禾各司其职，林记形成了集新品研发、人才培训、门店运营与视觉升级于一体的成熟体系。\r
\r
### M35｜整理三年摄影作品：完整相册\r
\r
**【事件ID：EVT_M35_MAIN｜触发月份：M35第4个经营日】**\r
**【CG：album】**\r
\r
三周年庆典前夕，苏晴将这三十六个月以来拍摄的所有照片装订成册，送给林念。\r
从高一同桌、高二后门、高三走廊的拥抱，到22岁刚接手老店时的青涩，再到如今的独当一面，整本《友情相册》只差最后一页等待填满。\r
\r
### M36｜林记三周年活动（终局盛典）\r
\r
**【事件ID：EVT_M36_MAIN｜触发月份：M36第5个经营日】**\r
\r
林记烘焙迎来三周年店庆。\r
林暖、苏晴、全体伙伴与陈奶奶等老顾客齐聚一堂。\r
苏晴按下快门，定格下三周年合影，系统根据三年综合经营规模、主导经营偏好与伙伴养成进度，进入最终结局篇章。\r
\r
## 附篇一：四大经营风格专属解锁剧情文案（第6.5节）\r
\r
*（触发条件：某项风格数值 ≥ 60，且领先其他三项风格至少 15 点时解锁对应专属剧情）*\r
\r
### 1. 传统手作派专属剧情：《三代人的老木模》\r
\r
**【触发条件：\`traditionScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_TRADITION】**\r
林暖带着林念在老店阁楼找出了外婆当年创业时亲手雕刻的传统糕点木模。\r
母女俩与小雨一起用古法熬制糖浆，推出了「岁月传承传统节日礼盒」。陈奶奶等老街坊尝过后眼眶湿润，当地非遗文化栏目也专程来林记拍摄了传统西点手艺专题片。\r
\r
### 2. 创意新品派专属剧情：《四季灵感发布会》\r
\r
**【触发条件：\`innovationScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_INNOVATION】**\r
林念联合周雨桐与叶清禾，在店里举办了一场别开生面的「四季风物创意甜点品鉴会」。\r
将江南春茶、夏荷、秋桂、冬雪融于法式慕斯与中式糕点之中，独特的造型与奇妙的食材碰撞在小红书等社交平台上引发打卡热潮，年轻顾客络绎不绝。\r
\r
### 3. 高效连锁派专属剧情：《晨光里的零误差》\r
\r
**【触发条件：\`efficiencyScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_EFFICIENCY】**\r
清晨五点，唐可欣与许知遥带着林念参观新建成的中央标准化配料中心与数字看板。\r
从鲜果入库质检、恒温冷链分拨到各门店准点上架，全链路实现了零损耗、零延误，同行纷纷前来取经学习林记的管理体系。\r
\r
### 4. 社区温情派专属剧情：《长街百家甜》\r
\r
**【触发条件：\`communityScore ≥ 60\` 且领先 ≥ 15｜事件ID：EVT_STYLE_COMMUNITY】**\r
林记联合整条老街的咖啡馆、花店与书店，发起了一场「社区周末公益烘焙体验日」。\r
林念免费教社区的孩子们和老人们一起动手装饰杯子蛋糕，整条栖云老街都飘荡着欢声笑语与奶油甜香，林记成为了全镇人心里最温暖的客厅。\r
\r
## 附篇二：苏晴友情日常互动模块文案（第8.6节）\r
\r
*（日常经营中消耗1点行动力与苏晴互动时，玩家可自由选择的5类固定温情交互）*\r
\r
1. **【主动分享烦恼】**\r
\r
   * 林念：苏晴，今天店里事情堆在一起，我突然又有点怕自己做不好了……\r
\r
   * 苏晴：怕什么呀，天塌下来还有我陪你一起吃掉卖剩下的蛋糕呢！来，深呼吸，先把最急的一件事挑出来，我们一件一件解决。\r
\r
2. **【认真听苏晴讲工作】**\r
\r
   * 苏晴：念念我跟你说，今天外拍遇到一对结婚五十年的爷爷奶奶，他们牵手看镜头的眼神特别感人！\r
\r
   * 林念：听你描述我都能想象出画面了！等照片洗出来，一定要第一个拿给我看！\r
\r
3. **【邀请苏晴吃饭】**\r
\r
   * 林念：收工啦！今天不聊工作，我们去吃高中校门口那家砂锅米线！\r
\r
   * 苏晴：走走走！我要加双份腐竹和卤蛋！\r
\r
4. **【支持她的摄影项目】**\r
\r
   * 林念：听说你下周要拍一组复古胶片主题？我帮你烤一篮法式乡村面包和水果挞当拍摄道具吧！\r
\r
   * 苏晴：太棒了！有林老板的独家道具加持，我这组片子稳了！\r
\r
5. **【直接表达自己的不满】**\r
\r
   * 林念：苏晴，你上次借我的那本甜品画册，角落怎么沾了一点咖啡印呀？\r
\r
   * 苏晴：啊！对不起对不起，我前天修图熬夜不小心蹭到了，正准备给你买本新的赔罪呢！谢谢你直接跟我说，没自己生闷气！\r
\r
## 第十三章：最终结局与伙伴个人结局完整文案\r
\r
### 13.1 最终结局一：社区老店结局\r
\r
**【触发条件：完成36个月经营，经营规模适中，\`communityScore\` 较高】**\r
**【事件ID：EVT_FINAL_END_COMMUNITY】**\r
\r
三周年的阳光洒在栖云镇熟悉的街巷里。\r
走过三十六个月的四季流转，林念最终选择把全部的热爱留在栖云镇的这家林记烘焙。\r
店铺虽然没有扩张成庞大的商业帝国，却被林念打理得无比温馨舒适——窗边永远插着当季的鲜花，展示柜里摆着街坊们最爱的口味，店里的每一位熟客进门都不需要报出菜单。\r
\r
陈奶奶带着小孙子坐在木桌旁吃着草莓蛋糕，苏晴坐在吧台边翻看新印出来的相册，林暖端着热茶站在门口与邻居寒暄。\r
林念系着围裙走出厨房，脸上是前所未有的笃定与平和。\r
\r
旁白：经营好一家店，守护好一方街坊的日常，本身就是一种圆满的人生选择。\r
旁白：【达成最终结局：栖云镇的温暖老店】\r
\r
### 13.2 最终结局二：传统手作老字号\r
\r
**【触发条件：完成36个月经营，\`traditionScore\` 为主导最高项】**\r
**【事件ID：EVT_FINAL_END_TRADITION】**\r
\r
三年磨砺，林记烘焙凭借着对外婆古法配方的坚守与创新传承，正式被评定为当地极具代表性的「传统手作烘焙老字号」。\r
「桂花栗子蛋糕」与「传统原味奶油蛋糕」成为了无数食客慕名而来的城市名片。\r
从外婆、林暖到林念，三代女性用半个世纪的匠心，证明了手工的温度永远不会被时代淘汰。\r
\r
林暖将外婆那本写满三代人批注的《配方笔记》郑重交到林念手中。\r
林念：妈，您放心，只要林记的烤箱还热着，这份老味道就永远不会变。\r
\r
旁白：有些味道，穿越数十载光阴，依然在舌尖与心头温热如初。\r
旁白：【达成最终结局：传统手作老字号】\r
\r
### 13.3 最终结局三：创意烘焙品牌\r
\r
**【触发条件：完成36个月经营，\`innovationScore\` 为主导最高项】**\r
**【事件ID：EVT_FINAL_END_INNOVATION】**\r
\r
三周年庆典上，林记烘焙最新一季的「二十四节气创意甜点系列」再次引爆全网。\r
在林念、周雨桐与叶清禾的共同打造下，林记从一个传统的街角蛋糕店，蜕变为年轻食客心中最具巧思与美感的「新锐创意烘焙品牌」。\r
每一季的限定新品与插画礼盒，都成为大家翘首以盼的惊喜，苏晴为林记拍摄的视觉大片更是登上了知名生活美学杂志封面。\r
\r
林念站在充满艺术感的展示柜前，对身边的伙伴们笑道：\r
林念：下一季的新品研发，我们继续大胆造梦吧！\r
\r
旁白：在保留初心的底座上自由生长，每一块蛋糕都是一场全新的奇遇。\r
旁白：【达成最终结局：创意烘焙品牌】\r
\r
### 13.4 最终结局四：区域连锁品牌\r
\r
**【触发条件：完成36个月经营，综合经营成绩达到中高水平，开启多座周边城市门店】**\r
**【事件ID：EVT_FINAL_END_REGIONAL】**\r
\r
三年时光，林记烘焙从栖云镇出发，在临江市及周边多座城市扎下了深深的根基，成长为拥有成熟供应链与管理团队的区域知名连锁品牌。\r
唐可欣把控着高水准的研发与生产中心，许知遥带领着各城市的店长将门店打理得井井有条，周雨桐与叶清禾不断为品牌注入新鲜活力。\r
\r
三周年酒会上，林念举起酒杯，向一路陪伴的母亲林暖、挚友苏晴和全体伙伴致敬。\r
林念：谢谢大家，是你们陪我把林记从一家小店，变成了一支真正能并肩远行的队伍。\r
\r
旁白：稳健前行，步履不停，属于林记的故事正在更多城市的街角上演。\r
旁白：【达成最终结局：区域连锁品牌】\r
\r
### 13.5 最终结局五：全国连锁品牌\r
\r
**【触发条件：完成36个月经营，经营成绩达到最高水平，解锁全国城市地图与LV4高端主题旗舰店】**\r
**【事件ID：EVT_FINAL_END_NATIONAL】**\r
**【CG：finale】**\r
\r
三周年纪念日这天，林记烘焙的高端主题旗舰店正式盛大开业。\r
从江南小城栖云镇，到杭州、上海、南京、成都、广州、北京，林记烘焙建立起了完整的研发、生产、供应链与全国连锁运营体系。\r
旗舰店内，大理石台面与精致花艺交相辉映，来自全国各地的食客在这里品尝着桂花栗子蛋糕，翻阅着品牌纪念册里那段从一间老店出发的故事。\r
\r
庆典结束后，林暖、苏晴与所有核心伙伴聚在旗舰店的阳光露台上。\r
苏晴举起相机，将这一刻永远定格在《友情相册》的最后一页。\r
\r
苏晴：林老板，三年之期已到，给自己打几分呀？\r
林念看着身边最重要的人们，眉眼舒展，笑得温暖而自信：\r
林念：满分。因为最好的味道和最好的人，都在我身边。\r
\r
旁白：从林记的一块小小蛋糕开始，那个曾经对未来迷茫的女孩，终于亲手把生活经营成了自己最喜欢的样子。\r
旁白：【达成最高结局：全国连锁品牌】\r
\r
### 13.6 可选遗憾结局：《转让》\r
\r
**【触发条件：后期收到品牌收购邀请时，玩家主动选择「接受收购」】**\r
**【事件ID：EVT_FINAL_END_TRANSFER】**\r
\r
签署完品牌转让协议的那个下午，阳光安静地落在办公桌上。\r
面对日益庞大的跨城管理压力，林念最终选择接受了餐饮集团的收购邀约。\r
「林记烘焙」的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然会每天按时出炉，只是这家店不再由林念独立掌舵。\r
\r
搬空店长办公室的最后一天，苏晴背着相机站在门口等她，自然地接过她手里的纸箱。\r
\r
林念回头看了一眼熟悉的招牌，轻声说：苏晴，你说我在这个时候停下来，是不是有点遗憾？\r
苏晴温柔地笑了笑，挽住她的胳膊：傻瓜，这三年你流过的汗、做出的好蛋糕都是实实在在的。累了就先歇一歇，重新想想未来想做什么——反正不管你去哪儿，我都会陪着你的。\r
\r
旁白：虽然在经营道路上留下了一丝遗憾，但那些共同走过的时光与身边的挚友，依然是岁月赠予的礼物。\r
旁白：【达成选择型结局：《转让》】\r
\r
### 13.7 伙伴个人结局档案文案（随最终结局同步展示）\r
\r
#### 1. 周雨桐（小雨）个人结局（四档细分）\r
\r
* **【高信赖 + 高专业：首席创意研发主厨】**\r
  曾经连说话都不敢大声的内向学徒，如今已是林记独当一面的主力研发烘焙师。她那本藏在抽屉里的小本子，已经变成了摆在展示柜C位的四季招牌系列，她自己也开始温柔地带领新一届年轻学徒。\r
\r
* **【高信赖 + 普通专业：温暖可靠的主力烘焙师】**\r
  小雨成为了林念最贴心的后厨主力。她或许不追求最复杂的炫技，但经她手做出的每一款水果蛋糕，都饱含着让人安心的甜美与认真。\r
\r
* **【普通信赖 + 高专业：技术精湛的独立烘焙师】**\r
  小雨凭借扎实刻苦的练习，练就了一手炉火纯青的抹面与制作技术，成为后厨里出餐最稳、效率最高的技术骨干。\r
\r
* **【普通信赖 + 普通专业：认真负责的正式员工】**\r
  小雨顺利留在林记成为了一名踏实勤恳的正式烘焙师，每天在熟悉的奶油香气里，过着安稳而充实的生活。\r
\r
#### 2. 许知遥个人结局\r
\r
* **【高养成：区域运营负责人】** 知遥彻底克服了对数字与管理的畏惧，将自己天生的亲和力与严谨的运营体系融会贯通，成为统管多家门店的运营总监。\r
\r
* **【常规养成：金牌门店店长】** 知遥成为了熟客们最喜爱的金牌店长，有她在的前厅，永远充满了欢声笑语。\r
\r
#### 3. 唐可欣个人结局\r
\r
* **【高养成：首席研发与培训负责人】** 可欣找回了最初对烘焙研发的热忱，在标准化与手工灵魂之间找到了完美平衡，主持着林记的中央研发室与人才培养体系。\r
\r
* **【常规养成：生产管理主管】** 可欣以严密的品控标准守卫着林记的后厨防线，确保每一批产品都品质如一。\r
\r
#### 4. 叶清禾个人结局\r
\r
* **【高养成：品牌视觉主理人 & 独立工作室创始人】** 清禾不仅打造了林记深入人心的品牌视觉体系，还创办了自己的独立设计工作室，成为业内小有名气的新锐商业插画师。\r
\r
* **【常规养成：长期特约设计师】** 清禾继续以自由设计师身份与林记保持愉快合作，每年为节日礼盒绘下温暖的插画。\r
\r
#### 5. 林暖（母亲）个人结局\r
\r
* **【高家庭默契：潇洒退居幕后的岁月导师】** 林暖彻底放心地将林记交给了女儿，平日里约老姐妹喝茶、旅游，偶尔回店里泡上一壶桂花茶，笑看女儿独当一面。\r
\r
## 第十四章：图鉴与收集系统完整文案附录\r
\r
### 14.1 十二款核心蛋糕图鉴文案\r
\r
| 解锁月份 | 产品名称 | 素材文件名 | 配方研发提示 | 图鉴风味描述 | \r
| ----- | ----- | ----- | ----- | ----- | \r
| M1 | 原味奶油蛋糕 | \`cake-plain\` | 鸡蛋+动物奶油+戚风胚 | 三十余年不变的经典配比，云朵般松软的戚风与浓郁纯粹的动物奶香。 | \r
| M1 | 草莓奶油蛋糕 | \`cake-strawberry\` | 草莓+动物奶油+戚风胚 | 严选当季红颜草莓，酸甜多汁的果肉嵌在绵密白雪般的奶油之中。 | \r
| M1 | 巧克力蛋糕 | \`cake-chocolate\` | 黑巧+可可胚+甘纳许 | 微苦醇厚的黑巧甘纳许淋面，入口丝滑浓郁，是巧克力控的心头好。 | \r
| M3 | 芋泥薄脆 | \`cake-taro\` | 荔浦芋泥+焦糖杏仁薄脆 | 林念研发的第一款新品，绵密芋泥撞上咔嚓作响的现烤薄脆。 | \r
| M4 | 抹茶蛋糕 | \`cake-matcha\` | 春日抹茶粉+蜜红豆 | 清新微苦的茶香中和了蜜红豆的绵甜，宛如舌尖上的一场春雨。 | \r
| M6 | 芒果慕斯 | \`cake-mango\` | 台农芒果泥+轻盈慕斯 | 夏日生活节主打甜点，金黄澄澈的果肉冻层，冰爽顺滑。 | \r
| M8 | 提拉米苏 | \`cake-tiramisu\` | 马斯卡彭+浓缩咖啡液 | 浸透咖啡酒香的手指饼干与醇滑芝士交叠，带着微微成熟的回甘。 | \r
| M10 | 无花果奶油 | \`cake-fig\` | 波姬红无花果+轻奶油 | 为苏晴生日研发的秋日甜点，切面如花朵绽放，清甜不腻。 | \r
| M12 | 季节水果蛋糕 | \`cake-seasonal\` | 四季时令鲜果+定制夹心 | 顺应四时风物而变的缤纷果味蛋糕，藏着小雨满满的搭配灵感。 | \r
| M16 | 生日定制蛋糕 | \`cake-custom\` | 双层承重胚+手工定制裱花 | 为每一个值得纪念的日子量身打造，承载着无数家庭的欢笑。 | \r
| M20 | 节日限定蛋糕 | \`cake-festival\` | 传统红曲/栗蓉+节庆装饰 | 逢年过节餐桌上的团圆重头戏，一盒点心便是一份圆满祝福。 | \r
| M26 | 招牌：桂花栗子蛋糕 | \`cake-signature\` | 高山秋栗+金桂冻+戚风胚 | 外婆旧配方与现代工艺的结晶，「栗子甜则少放糖，桂花香淡则后撒」。 | \r
\r
### 14.2 城市地图风物志文案（第14.7节）\r
\r
1. **栖云镇（初始大本营）**：青石板铺就的江南水乡小城，林记三十多年故事开始的地方，邻里温情最为醇厚。\r
\r
2. **临江市（\`city-linjiang\`）**：充满活力的邻近商业城市，写字楼白领云集，是林记迈出跨城第一步的起点。\r
\r
3. **杭州（\`city-hangzhou\`）**：湖光山色与茶香交融之城，食客偏爱清雅微甜的茶味与桂花系列甜点。\r
\r
4. **上海（\`city-shanghai\`）**：精致摩登的海派都市，对咖啡搭配、精品切块与品牌包装视觉有着极高要求。\r
\r
5. **南京（\`city-nanjing\`）**：底蕴深厚的梧桐古都，传统手作糕点与秋日桂花栗子蛋糕在这里备受欢迎。\r
\r
6. **成都（\`city-chengdu\`）**：悠闲巴适的烟火蓉城，下午茶堂食氛围浓厚，创意鲜果慕斯销量领先。\r
\r
7. **广州（\`city-guangzhou\`）**：讲究食材本味的食在羊城，低糖清爽的动物奶油与时令鲜果款最受青睐。\r
\r
8. **北京（\`city-beijing\`）**：大气厚重的北方都会，节庆伴手礼盒与高端主题旗舰展陈极具号召力。`,In={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐可欣:"唐可欣",可欣:"唐可欣",叶清禾:"叶清禾",清禾:"叶清禾",陈奶奶:"陈奶奶",许佳宁:"许佳宁",沈妍:"沈妍",顾客:"顾客"},Wn={周雨桐:"xiaoyu",许知遥:"zhiyao",唐可欣:"kexin",叶清禾:"qinghe"},ni={xiaoyu:"小雨",zhiyao:"知遥",kexin:"可欣",qinghe:"清禾"},Ac={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},Ic={一:1,二:2,三:3,四:4,五:5,六:6},$c=/^(林念|苏晴|林暖|周雨桐|许知遥|唐可欣|叶清禾|陈奶奶|许佳宁|沈妍|小雨|知遥|可欣|清禾|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function Ys(e,t){if(!e)return!0;if(e.trust){for(const n of Object.keys(e.trust))if((t.partnerTrust[n]||0)<e.trust[n])return!1}if(e.momBond&&(t.momBond||0)<e.momBond)return!1;if(e.played){for(const n of e.played)if(!t.played.some(s=>s.indexOf(n)>=0))return!1}if(e.style){const n=t.style||{},s=n[e.style.id]||0;if(s<e.style.min)return!1;const r=Object.keys(n).filter(i=>i!==e.style.id).map(i=>n[i]||0);if(s-Math.max(0,...r)<e.style.lead)return!1}return!0}function zn(e,t){const n=[];for(const s of e||[])s.t==="cond"?n.push(...zn(Ys(s.test,t)?s.then:s.else,t)):s.t==="choice"?n.push({...s,options:(s.options||[]).map(r=>({...r,branch:zn(r.branch||[],t)})),after:zn(s.after||[],t)}):n.push(s);return n}function Oc(e,t){const n=[];if(!e)return n;for(const s of e.matchAll(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g))n.push({k:"style",id:s[1],v:Number(s[2]),label:Ac[s[1]]+" +"+s[2]});for(const s of e.matchAll(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)信赖度\s*\+\s*(\d+)/g)){const r=In[s[1]];n.push({k:"trust",id:Wn[r],v:Number(s[2]),label:s[1]+"信赖 +"+s[2]})}for(const s of e.matchAll(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)?专业能力\s*\+\s*(\d+)/g)){const r=s[1]?In[s[1]]:t,i=Wn[r];i&&n.push({k:"skill",id:i,v:Number(s[2])/10,label:(s[1]||ni[i])+"专业 +"+s[2]})}for(const s of e.matchAll(new RegExp("(?<![小知可清])(?<![周许唐叶])信赖度\\s*\\+\\s*(\\d+)","g"))){const r=Wn[t];r&&(n.some(i=>i.k==="trust"&&i.id===r)||n.push({k:"trust",id:r,v:Number(s[1]),label:ni[r]+"信赖 +"+s[1]}))}return/顾客忠诚度增加|忠诚度提升/.test(e)&&n.push({k:"loyalty",v:4,label:"忠诚 +4"}),/友情值增加/.test(e)&&n.push({k:"friend",v:5,label:"友情 +5"}),n}function Gn(e){const t={};let n=!1;const s=e.match(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)信赖度\s*[≥>=]+\s*(\d+)/);s&&(t.trust={[Wn[In[s[1]]]]:Number(s[2])},n=!0);const r=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);r&&(t.momBond=Number(r[1]),n=!0);const i=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);i&&(t.style={id:i[1],min:Number(i[2]),lead:15},n=!0);const o=e.match(/领先[^0-9]{0,4}(\d+)/);o&&t.style&&(t.style.lead=Number(o[1]));const l=e.match(/M(\d+)/);return l&&/已完成|完成M/.test(e)?(t.played=["M"+l[1]],n=!0):/原创配方研发剧情/.test(e)?(t.played=["M21"],n=!0):/个人作品展/.test(e)&&(t.played=["M25"],n=!0),n?t:null}function cn(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function un(e,t){const n=e.trim();if(!n||/^\|/.test(n))return;if(n.startsWith("旁白")){const r=n.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);t.push({t:"nar",who:r&&r[1]?r[1]:"",text:cn(r?r[2]:n)});return}if(/^\*\*[^*]+\*\*$/.test(n)){t.push({t:"nar",text:cn(n.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(n)||/^\*\(.+\)\*$/.test(n)){t.push({t:"note",text:n.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const s=n.match($c);if(s){t.push({t:"say",who:In[s[1]],emo:s[2]||"",text:cn(s[4].replace(/\*\*/g,""))});return}t.push({t:"nar",text:cn(n.replace(/\*\*/g,""))})}function Tt(e,t={}){const n=[],s={ids:[],month:null,kind:null,test:null,title:"",cond:null};let r="main",i=n,o=null,l=null,u=null,m=null,c=null,h=0,g=!0;const b=()=>r==="branch"&&l?l.branch:r==="then"&&u?u.then:r==="else"&&u?u.else:r==="inline"&&c?c.then:i,L=S=>b().push(S);for(const S of e){const O=S.trim();if(!O){g=!0;continue}if(O.startsWith(">")){let k=O.replace(/^>+\s*/,"").trim();if(!k)continue;const B=k.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(B&&/玩家选择节点/.test(B[1])){r="main",c=null;const z=B[1],P=z.match(/节点\s*([\d.\-]+)/),q=z.match(/[：:]\s*(.+)$/);o={t:"choice",node:P?P[1]:"",prompt:q?q[1].trim():z,options:[],after:[]},L(o);continue}const se=k.match(/^\*\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(se&&o){const z=Nc([k,o.prompt].join(" ")),P=se[3]||"";o.options.push({label:se[2].trim(),hint:P.replace(/^[（(]|[）)]$/g,"").trim(),gains:Oc(P,z),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(k)&&o&&(o.note=k.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const A=O.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(A){const k=A[1],B=(A[2]||"").replace(/^[：:]\s*/,"").trim();if(/^事件ID/.test(k)){k.split("｜").forEach(X=>{const w=X.search(/[：:]/);if(w<0)return;const Z=X.slice(0,w).trim(),ye=X.slice(w+1).trim();if(Z==="事件ID")s.ids.push(ye);else if(Z==="触发月份"||Z==="触发时间"){const Te=ye.match(/M(\d+)/);Te&&(s.month=Number(Te[1]))}else if(Z==="触发条件"){/新游戏开始|开始游戏/.test(ye)&&(s.kind="prologue");const Te=Gn(ye);Te&&(s.cond=Te)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(k))continue;if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(k)){L({t:"scene",text:k.replace(/^场景\s*[：:]\s*/,"")}),B&&L({t:"nar",text:B});continue}const se=k.match(/^CG\s*[：:]\s*(.+)$/i);if(se){L({t:"cg",key:se[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(k)){L({t:"cgend"});continue}const z=k.match(/^分支([A-Z])(?:[：:](.*))?$/);if(z&&o){const U=z[1].charCodeAt(0)-65;for(;o.options.length<=U;)o.options.push({label:"选项"+String.fromCharCode(65+o.options.length),hint:"",gains:[],branch:[]});l=o.options[U],r="branch",c=null,B&&L({t:"nar",text:cn(B)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(k)){r="main",c=null,o&&(i=o.after),B&&L({t:"nar",text:B});continue}const P=k.match(/^高养成解锁分支[：:]\s*(.*)$/),q=k.match(/^普通保底分支[：:]\s*(.*)$/);if(P||q){if(P)c=null,u={t:"cond",test:Gn(P[1])||{},then:[],else:[]},m=u,n.push(u),r="then";else{const U=m&&m.else.length===0?m:null;U?(u=U,r="else"):r="main"}continue}if(/^若/.test(k)){const U=Gn(k);U&&(u={t:"cond",test:U,then:[],else:[]},n.push(u),c=u,r="inline",h=0,g=!1,B&&un(B,b()));continue}B&&L({t:"nar",text:B});continue}const V=O.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(V&&/协助|结局|相册|档案/.test(V[2])){r="main",c=null,L({t:"scene",text:V[2].replace(/[：:]\s*$/,"")});continue}if(r==="inline"&&c){const k=[];un(O,k);const B=k[0],se=B&&B.t==="nar";if(g&&h>0&&se){r="main",c=null,un(O,i),g=!1;continue}k.forEach(z=>c.then.push(z)),g&&(h+=1),g=!1;continue}un(O,b()),g=!1}return o&&o.options.forEach(S=>{S.branch.length||(S.branch=[])}),s.title=t.title||"",{beats:n,meta:s}}function Nc(e){const t=e.match(/(小雨|知遥|可欣|清禾|周雨桐|许知遥|唐可欣|叶清禾)/);return t?In[t[1]]:""}function Dc(e){const t={level:1,text:"",lines:[],children:[]},n=[t];for(const s of e.split(/\r?\n/)){const r=s.match(/^(#{1,4})\s+(.*)$/);if(r){const i=r[1].length;for(;n.length>1&&n[n.length-1].level>=i;)n.pop();const o={level:i,text:r[2].trim(),lines:[],children:[]};n[n.length-1].children.push(o),n.push(o)}else n[n.length-1].lines.push(s)}return t}function Fc(e){const t=Dc(e),n=[],s={},r=[],i={},o={},l={},u=[];let m=0;const c=b=>(b.order=m++,n.push(b),b),h=[];for(const b of t.children)b.level===1?h.push(...b.children):h.push(b);for(const b of h){const L=b.text||"";if(/^序幕/.test(L)){const{beats:S,meta:O}=Tt(b.lines,{title:"序幕 · 回家"});c({id:O.ids[0]||"EVT_PROLOGUE_01",ids:O.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:S});continue}if(/^第[一二三四五六]章/.test(L)){for(const S of b.children){const O=S.text,I=/结算/.test(O)&&/(月末|目标)/.test(O),A=O.match(/M(\d+)/),V=A?Number(A[1]):null;if(I&&!A)continue;if(I){const P=ri(O,V),q=Tt(S.lines,{title:O}),U=q.beats;if(q.meta.ids.length&&c({id:q.meta.ids[0],ids:q.meta.ids,title:jn(O),chapter:L,month:V,kind:"main",test:q.meta.cond,beats:U}),!P)continue;s[P]=s[P]||{pass:[],failId:"",failBeats:[]};for(const X of S.children){const w=Hn(X.text);if(!w)continue;const Z=Tt(X.lines,{title:X.text});w==="pass"?s[P].pass=Z.beats:(s[P].failBeats=Z.beats,s[P].failId=Z.meta.ids[0]||"",Z.meta.ids.length&&c({id:Z.meta.ids[0],ids:Z.meta.ids,title:si(X.text,Z.beats),chapter:L,month:null,kind:"short",test:null,beats:Z.beats}))}continue}const{beats:k,meta:B}=Tt(S.lines,{title:O});if(!B.ids.length)continue;let se=B.cond,z=V??B.month;se&&!z&&(z=B.month);for(const P of S.children){if(Hn(P.text))continue;const q=Tt(P.lines,{title:P.text});q.beats.length&&(k.push({t:"scene",text:P.text.replace(/^【|】$/g,"")}),k.push(...q.beats))}if(c({id:B.ids[0],ids:B.ids,title:jn(O),chapter:L,month:z,kind:"main",test:se,beats:k}),S.children.length){const P=ri(O,z),q=S.children.filter(U=>Hn(U.text));if(P&&q.length){s[P]=s[P]||{pass:[],failId:"",failBeats:[]};for(const U of q){const X=Hn(U.text),w=Tt(U.lines,{title:U.text});X==="pass"?s[P].pass=w.beats:(s[P].failBeats=w.beats,s[P].failId=w.meta.ids[0]||"",w.meta.ids.length&&c({id:w.meta.ids[0],ids:w.meta.ids,title:si(U.text,w.beats),chapter:L,month:null,kind:"short",test:null,beats:w.beats}))}}}}continue}if(/^附篇一/.test(L)){for(const S of b.children){const{beats:O,meta:I}=Tt(S.lines,{title:S.text}),A=I.cond||Gn(S.text)||{};c({id:I.ids[0]||"EVT_STYLE_"+m,ids:I.ids,title:jn(S.text),chapter:L,month:null,kind:"style",test:A,beats:O})}continue}if(/^附篇二/.test(L)){let S=null;for(const O of b.lines){const I=O.trim();if(!I)continue;const A=I.match(/^(\d+)\.\s*\*\*【(.+?)】\*\*/);if(A){S={id:"DAILY_"+A[1],ids:["DAILY_"+A[1]],title:A[2],kind:"daily",month:null,test:null,beats:[]},r.push(S);continue}if(!S)continue;const V=[];un(I.replace(/^[*\-]\s*/,""),V),V.forEach(k=>S.beats.push(k))}continue}if(/^第十三章/.test(L)){for(const S of b.children){if(/^13\.7/.test(S.text)){for(const A of S.children){const V=Lc(A.text);if(!V)continue;const k=[];for(const B of A.lines){const se=B.trim(),z=se.match(/^\*\s*\*\*【(.+?)】\*\*\s*(.*)$/);z?k.push({title:z[1],text:z[2]}):k.length&&se&&(k[k.length-1].text+=se)}k.length&&(l[V]=k)}continue}const{beats:O,meta:I}=Tt(S.lines,{title:S.text});I.ids.length&&c({id:I.ids[0],ids:I.ids,title:jn(S.text),chapter:L,month:null,kind:"final",test:null,beats:O})}continue}if(/^第十四章/.test(L)){for(const S of b.children)for(const O of S.lines){const I=O.trim(),A=I.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(A){const B=A[3].replace(/`/g,"").trim().replace(/^cake-/,"");B&&(i[B]={hint:A[4].trim(),flavor:A[5].trim()});continue}const V=I.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);V&&(o[V[1]]=V[2])}continue}}n.length||u.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const g={events:n,stages:s,daily:r,codex:i,cityText:o,partnerEndings:l,warnings:u};return g.find=b=>n.find(L=>L.id===b||(L.ids||[]).includes(b))||null,g}function jn(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function si(e,t){const n=e.match(/《(.+?)》/);if(n)return n[1];const s=t.find(r=>r.t==="nar");return s?s.text.slice(0,12):e}function Hn(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function ri(e,t){const n=e.match(/第([一二三四五六])阶段/);return n?Ic[n[1]]:t?Math.ceil(t/6):null}function Lc(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐可欣/.test(e)?"kexin":/叶清禾/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}const Se=Fc(wc);if(typeof console<"u"){const e={};Se.events.forEach(t=>e[t.kind]=(e[t.kind]||0)+1),console.log("[剧情] 已加载 "+Se.events.length+" 个事件（"+Object.keys(e).map(t=>t+" "+e[t]).join("，")+"），日常互动 "+Se.daily.length+" 段，阶段结算 "+Object.keys(Se.stages).length+" 组"),Se.warnings.length&&Se.warnings.forEach(t=>console.warn("[剧情] "+t))}const Ao="alb-save-v6",ls=5,Io=60,$o=40;function dr(){return{v:6,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,friendship:20,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,stock:60,shelf:{},plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],photos:[],log:[],phase:"playing",ending:null,acquired:!1,dailyIdx:0,autoStory:!1,stage:1,report:null}}const a=en(dr()),Je=en({events:[]}),Oo=Y(()=>wn.filter(e=>a.unlocked.includes(e.id))),wt=Y(()=>a.stamina+Io+a.staff.length*$o);function No(e){return wo[a.prices[e]||"std"]}function Dn(e){const t=bt(e),n=a.levels[e]||1;return Math.round(t.price*No(e).priceMul*(1+(n-1)*.05))}function Do(e){const t=bt(e),n=a.levels[e]||1,s=.7+a.reputation/200+a.popularity/200+a.loyalty/250+a.brand/300;return Math.max(0,Math.round(t.demand*s*No(e).demandMul*(1+(n-1)*.06)*(1+(a.storeCount-1)*.7)))}const Fo=Y(()=>700+a.shopLevel*180+a.staff.length*500),hr=Y(()=>Tc(a.month)),Yt=Y(()=>{const e=hr.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const t=e.goals.map(n=>({text:n.text,done:n.check(a),expand:!!n.expand}));return{done:t.filter(n=>n.done).length,need:e.need,list:t}});function Lo(){let e=0;for(const t of Object.keys(a.plan))e+=a.plan[t]*bt(t).diff;return e}function We(){try{localStorage.setItem(Ao,JSON.stringify(a))}catch{}}function Rc(){try{const e=localStorage.getItem(Ao);if(!e)return!1;const t=JSON.parse(e);return t.v!==6?!1:(Object.keys(dr()).forEach(n=>{t[n]!==void 0&&(a[n]=t[n])}),!0)}catch{return!1}}function ii(){Object.assign(a,dr()),Je.events.length=0,pr(),We()}function xe(e,t){a.log.unshift({month:a.month,day:a.day,text:e,tone:t||"normal"}),a.log.length>60&&a.log.pop()}function ge(e){return Math.max(0,Math.min(100,e))}function Pc(e){const t=[];for(const n of e)if(n.kind==="num"){const s=n.value;switch(n.key){case"资金":a.cash=Math.max(0,a.cash+s);break;case"口碑":a.reputation=ge(a.reputation+s);break;case"知名度":a.popularity=ge(a.popularity+s);break;case"友情值":a.friendship=ge(a.friendship+s);break;case"门店":a.storeCount=Math.max(1,a.storeCount+s);break;case"员工":s>0&&Uc();break;case"烘焙":Vc(s*.2);break;case"品质":Bc(s*.05);break}t.push(n.key+(s>=0?"+":"")+s)}else n.key==="配方"?a.unlocked.includes(n.value)||(a.unlocked.push(n.value),t.push("解锁「"+bt(n.value).name+"」")):n.key==="照片"&&(a.photos.includes(n.value)||(a.photos.push(n.value),t.push("获得纪念照片")));return t}function Vc(e){const n=a.unlocked.slice().sort((s,r)=>(a.levels[s]||1)-(a.levels[r]||1))[0];n&&(a.levels[n]=Math.min(5,(a.levels[n]||1)+e))}function Bc(e){a.unlocked.forEach(t=>{a.levels[t]=Math.min(5,(a.levels[t]||1)+e)})}function jc(e){const t=[];for(const n of e||[]){switch(n.k){case"style":a.style[n.id]=(a.style[n.id]||0)+n.v;break;case"trust":if(!n.id)break;a.partnerTrust[n.id]=ge((a.partnerTrust[n.id]||0)+n.v);break;case"skill":if(!n.id)break;a.partnerSkill[n.id]=Math.min(5,Math.round(((a.partnerSkill[n.id]||1)+n.v)*10)/10);break;case"loyalty":a.loyalty=ge(a.loyalty+n.v);break;case"friend":a.friendship=ge(a.friendship+n.v);break}n.label&&t.push(n.label)}return t}function Hc(e,t,n){const s=jc(t.gains);return e&&e.node==="13.6"&&n===1&&(a.acquired=!0),s.length&&xe("选择："+t.label+"（"+s.join("，")+"）","story"),We(),s}function Ro(e){if(!e||a.staff.includes(e))return;a.staff.push(e),a.partnerTrust[e]===void 0&&(a.partnerTrust[e]=10),a.partnerSkill[e]===void 0&&(a.partnerSkill[e]=1);const t=is(e);t&&xe(t.name+" 加入了林记","story")}function Uc(){const e=Qt.find(t=>!a.staff.includes(t.id)&&t.joinMonth<=a.month);e&&Ro(e.id)}function Po(){return a.staff.map(e=>is(e)).filter(Boolean)}const oi={feedback:5,market:3,talk:2,train:5};function Kc(e){const t=a.cd[e]||0;return Math.max(0,t-a.dayIndex)}function Js(e){switch(e){case"restock":return{name:"原料采购",ap:1,cost:600,note:"原料 +12 份",disabled:a.cash<600};case"feedback":{const t=Kc("feedback");return{name:"顾客反馈",ap:1,cost:0,note:t>0?"还要等 "+t+" 天":"口碑 +1.5，忠诚 +2",disabled:t>0}}case"talk":{const t=a.staff.length?Po()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:t?"和 "+t+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"sqchat":return{name:"和苏晴聊聊",ap:1,cost:0,note:"友情 +3，她会说点什么"};case"research":return{name:"新品研发",ap:2,cost:0,note:"选一款产品，熟练度 +1"};case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:a.cash<800};case"train":return a.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:a.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const t=os.find(n=>n.lv===a.shopLevel+1);return t?{name:"装修到「"+t.name+"」",ap:2,cost:t.cost,note:"展示位与产能提升",disabled:a.cash<t.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const t=An.find(s=>!a.cities.includes(s.id)&&!a.surveyed.includes(s.id));if(!t)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const n=a.month>=t.month&&a.reputation>=t.rep;return{name:"考察"+t.name,ap:2,cost:2e3,note:n?"考察之后可以筹备开店":"需要第 "+t.month+" 个月、口碑 "+t.rep,disabled:!n||a.cash<2e3}}case"branch":{if(!a.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const t=An.find(n=>n.id===a.surveyed[0]);return{name:"在"+t.name+"开店",ap:3,cost:t.cost,note:"门店 +1",disabled:a.cash<t.cost}}default:return{name:e,ap:1,cost:0,note:""}}}function qc(e,t){if(a.phase!=="playing")return!1;const n=Js(e);if(n.disabled||a.ap<n.ap||n.cost&&a.cash<n.cost)return!1;const s=a.cash;switch(e){case"restock":a.cash-=600,a.stock+=12,xe("原料 +12 份");break;case"feedback":a.reputation=ge(a.reputation+1.5),a.loyalty=ge(a.loyalty+2),xe("认真听了顾客的意见，口碑上升");break;case"talk":if(a.staff.length){const r=t&&t.partner?t.partner:a.staff[0];a.partnerTrust[r]=ge((a.partnerTrust[r]||0)+6);const i=is(r);xe("和 "+(i?i.nick:"伙伴")+" 聊了很久，信赖 +6")}else a.momBond=ge(a.momBond+4),xe("和妈妈聊了一会儿，家庭默契 +4");break;case"sqchat":{const r=Se.daily;if(!r.length)break;const i=r[a.dailyIdx%r.length];a.dailyIdx+=1,a.friendship=ge(a.friendship+3),a.autoStory=!0,qt(i),xe("和苏晴聊了几句，友情 +3");break}case"research":{const r=t&&t.product?t.product:a.unlocked[0],i=a.levels[r]||1;if(i>=5)return!1;a.levels[r]=Math.min(5,i+1),a.style.innovation+=3,xe("推进了「"+bt(r).name+"」的做法，熟练度提升");break}case"market":a.cash-=800,a.popularity=ge(a.popularity+2),a.brand=ge(a.brand+1.5),xe("发了新品帖子，知名度上升");break;case"train":{if(!a.staff.length)return!1;const r=t&&t.partner?t.partner:a.staff[0];a.cash-=400,a.partnerSkill[r]=Math.min(5,(a.partnerSkill[r]||1)+1);const i=is(r);xe("培训了 "+(i?i.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const r=os.find(i=>i.lv===a.shopLevel+1);if(!r)return!1;a.cash-=r.cost,a.shopLevel=r.lv,a.maxAp=8+(r.ap||0),a.reputation=ge(a.reputation+3),a.style.community+=2,xe("店铺升级为「"+r.name+"」","good");break}case"survey":{const r=An.find(i=>!a.cities.includes(i.id)&&!a.surveyed.includes(i.id));if(!r)return!1;a.cash-=2e3,a.surveyed.push(r.id),xe("去"+r.name+"看了一圈，可以筹备开店了");break}case"branch":{const r=An.find(i=>i.id===a.surveyed[0]);if(!r)return!1;a.cash-=r.cost,a.storeCount+=1,a.cities.push(r.id),a.surveyed=a.surveyed.filter(i=>i!==r.id),a.brand=ge(a.brand+6),a.style.efficiency+=3,xe("在"+r.name+"开了新店","good");break}default:return!1}return a.ap-=n.ap,oi[e]&&(a.cd[e]=a.dayIndex+oi[e]),s>a.cash&&(a.monthCost+=s-a.cash),We(),!0}function Wc(e,t){const n=Math.max(0,Math.min(99,Math.floor(t||0)));n===0?delete a.plan[e]:a.plan[e]=n}function zc(){if(a.phase!=="playing")return{ok:!1,msg:"游戏已经结束了"};const e=Object.keys(a.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const t=e.reduce((i,o)=>i+a.plan[o],0);if(t>a.stock)return{ok:!1,msg:"原料不够，还差 "+(t-a.stock)+" 份"};const n=Lo();if(n>wt.value)return{ok:!1,msg:"产能不够。今天的产能是 "+wt.value+" 点，还差 "+(n-wt.value)};const s=Io+a.staff.length*$o,r=Math.max(0,n-s);a.stock-=t,a.stamina=Math.max(0,a.stamina-r);for(const i of e)a.shelf[i]=(a.shelf[i]||0)+a.plan[i],a.dayMade+=a.plan[i],a.levels[i]=Math.min(5,(a.levels[i]||1)+a.plan[i]*.02);return xe("做了 "+t+" 个蛋糕，自己出了 "+r+" 点体力"),a.plan={},We(),{ok:!0,msg:"做好了 "+t+" 个"}}function Gc(){a.orders=[];const e=.35+a.popularity/300,t=Math.random()<e?Math.random()<.35?2:1:0;for(let n=0;n<t;n++){const s=Oo.value;if(!s.length)break;const r=s[Math.floor(Math.random()*s.length)],i=Math.random(),o=i<.28,l=!o&&i<.66,u=!o&&!l&&i<.75,m=o?"定制":l?"线上":u?"节日":"普通",c=o?1:1+Math.floor(Math.random()*2);a.orders.push({id:"o"+a.month+"-"+a.day+"-"+n,type:m,product:r.id,qty:c,pay:Math.round(Dn(r.id)*c*(o?1.6:1.25)),taken:!1})}}function Yc(e){const t=a.orders.find(n=>n.id===e);return t?(t.taken=!t.taken,We(),!0):!1}function li(){if(a.phase!=="playing"||a.daySold>0||a.dayRev>0)return null;let e=0,t=0;const n={};for(const s of a.orders){if(!s.taken)continue;const r=a.shelf[s.product]||0;r<s.qty||(a.shelf[s.product]=r-s.qty,e+=s.pay,t+=s.qty,n[s.product]=(n[s.product]||0)+s.qty,a.doneOrders+=1,s.type==="定制"&&(a.customOrders+=1),s.type==="线上"&&(a.onlineOrders+=1),s.type==="节日"&&(a.festivalOrders+=1),a.loyalty=ge(a.loyalty+2))}for(const s of Object.keys(a.shelf)){const r=a.shelf[s]||0;if(r<=0)continue;const i=Math.min(r,Do(s));a.shelf[s]=r-i,e+=i*Dn(s),t+=i,n[s]=(n[s]||0)+i}return a.dayRev=e,a.daySold=t,a.monthRev+=e,Object.keys(n).forEach(s=>{a.monthSold[s]=(a.monthSold[s]||0)+n[s]}),t>0&&(a.reputation=ge(a.reputation+.12),a.loyalty=ge(a.loyalty+.1),a.popularity=ge(a.popularity+.05)),xe("今天卖出 "+t+" 个，收入 "+e,t>0?"good":"bad"),We(),{rev:e,sold:t}}const Zs={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function Jc(e){const t=Zs[e]||Zs.discount;let n=0,s=0;for(const o of Object.keys(a.shelf))n+=a.shelf[o]||0,s+=(a.shelf[o]||0)*Dn(o);let r=0;n>0&&(r=Math.round(s*t.cashRate),a.cash+=r,t.community&&(a.style.community+=t.community*.3)),t.community>=2&&(a.reputation=ge(a.reputation+1)),a.dayLeft=n,a.shelf={};const i={day:a.day,rev:a.dayRev,sold:a.daySold,left:n,gain:r};return a.dayRev=0,a.daySold=0,a.dayMade=0,Zc(),We(),i}function Zc(){a.day+=1,a.dayIndex+=1,a.day>ls?(a.day=1,Xc()):pr()}function pr(){a.ap=a.maxAp,a.stamina=Math.min(a.maxStamina,a.stamina+70),a.plan={},a.shelf||(a.shelf={}),Gc(),We()}function Xc(){const e=Fo.value;a.monthCost+=e,a.cash+=a.monthRev-e;let t=null;a.cash<0&&(a.usedMomHelp?(a.cash=0,a.reputation=ge(a.reputation-2),t="这个月很难，勉强撑过去了"):(a.cash=3e3,a.usedMomHelp=!0,t="资金见底，妈妈先垫了一笔周转"),xe(t,"bad"));let n=null,s=0;Object.keys(a.monthSold).forEach(o=>{a.monthSold[o]>s&&(s=a.monthSold[o],n=o)}),a.report={month:a.month,rev:a.monthRev,cost:a.monthCost,net:a.monthRev-a.monthCost,best:n?bt(n).name:"—",bestN:s,warn:t};const r=a.month;if(a.month+=1,a.monthRev=0,a.monthCost=0,a.monthSold={},a.shelf={},wn.forEach(o=>{o.month>0&&o.month<=a.month&&!a.unlocked.includes(o.id)&&(a.unlocked.push(o.id),xe("新配方入手："+o.name,"story"))}),Qt.forEach(o=>{o.joinMonth===a.month&&Ro(o.id)}),r===29){const o=Object.values(a.partnerTrust).filter(l=>l>=70).length;a.helpers=o+(a.momBond>=70?1:0)}const i=Ws.find(o=>o.to===r&&!o.final);if(i){const o=Se.stages[i.id];if(!eu(i)){a.phase="ended",a.ending={...i.short,key:i.short.key,text:""},o&&o.failId&&qt(Se.find(o.failId)),xe("阶段目标没有达成","bad"),We();return}a.stage=i.id+1,o&&o.pass.length&&qt({id:"STAGE_PASS_"+i.id,title:i.name+" · 阶段达成",chapter:i.name,kind:"stage",beats:o.pass}),xe("第 "+i.id+" 阶段目标达成","good")}if(a.month>36){a.month=36,a.phase="ended";const o=tu();a.ending={...Cc[o],key:o},qt(Se.find(Qc[o])),We();return}a.stamina=a.maxStamina,pr(),Vo()}const Qc={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function eu(e){if(!e.goals.length)return!0;const t=e.goals.filter(n=>n.check(a));return!(t.length<e.need||e.needExpand&&!t.some(n=>n.expand))}function tu(){if(a.acquired)return"transfer";if(a.storeCount>=6)return"national";if(a.storeCount>=3)return"regional";const e=a.style,t=Object.keys(e).sort((s,r)=>e[r]-e[s])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[t]||"community"}function qt(e){e&&(Je.events.find(t=>t.id===e.id)||Je.events.push(e))}function Vo(){const e=Se.events.filter(t=>!(t.kind!=="main"||a.played.includes(t.id)||t.month==null||a.month<t.month||t.test&&!Ys(t.test,a)));e.sort((t,n)=>t.month-n.month||t.order-n.order),e.forEach(qt),Se.events.filter(t=>t.kind==="style"&&!a.played.includes(t.id)&&Ys(t.test,a)).forEach(qt)}function ai(){const e=Se.events.find(t=>t.kind==="prologue");e&&!a.played.includes(e.id)&&qt(e),Vo()}function nu(e){const t=e.ids&&e.ids.length?e.ids:[e.id];e.kind!=="daily"&&t.forEach(s=>{a.played.includes(s)||a.played.push(s)}),Pc(e.rewards||[]).length&&xe("剧情："+e.title,"story"),We()}function ci(e){const t=(Se.partnerEndings||{})[e];if(!t||!t.length)return null;if(t.length===1)return t[0];const n=a.partnerTrust[e]||0,s=a.partnerSkill[e]||0;return t.length>=4?n>=70&&s>=3?t[0]:n>=70?t[1]:s>=3?t[2]:t[3]:n>=70?t[0]:t[1]}const Ge=(...e)=>e.join(","),ui={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:Ge("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:Ge("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:Ge("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:Ge("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:Ge("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:Ge("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:Ge("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:Ge("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:Ge("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:Ge("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:Ge("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},su=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/宿舍|卧室|家里|房间|厨房里/,"home"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]];function ru(e){const t=e||"";for(const[n,s]of su)if(n.test(t))return s;return"shop"}const bs={林念:{file:"ln-sprite.webp",face:"ln-face.webp"},苏晴:{file:"sq-sprite.webp",face:"sq-exp-1.webp"},林暖:{file:"nu-sprite.webp",face:"nu-exp-6.webp"},周雨桐:{file:"xy-sprite.webp",face:"xy-face.webp"},许知遥:{file:"zy-sprite.webp",face:"zy-face.webp"},唐可欣:{file:"kx-sprite.webp",face:"kx-face.webp"},叶清禾:{file:"qh-sprite.webp",face:"qh-face.webp"}},iu=bs,Un=en({});function Fn(e){if(!e)return"no";const t=Le(e),n=Un[t];if(n)return n;Un[t]="pending";const s=new Image;return s.onload=()=>{Un[t]="ok"},s.onerror=()=>{Un[t]="no"},s.src=t,"pending"}function ou(e){const t=bs[e];return t&&Fn(t.file)==="ok"?Le(t.file):""}function fi(e){const t=bs[e];return t&&Fn(t.face)==="ok"?Le(t.face):""}function lu(e){const t=bs[e];return!!t&&Fn(t.file)==="ok"}const au={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"}};function cu(e){const t=au[e],n=t?t.img:"cg-"+e+".webp";return{src:Fn(n)==="ok"?Le(n):"",name:t?t.name:e}}function uu(e){return!e||!e.img?"":Fn(e.img)==="ok"?Le(e.img):""}const Nt=(e,t)=>{const n=e.__vccOpts||e;for(const[s,r]of t)n[s]=r;return n},fu={class:"vn"},du=["src"],hu={key:0,class:"vn-cg"},pu=["src"],mu={class:"vn-cg-cap"},gu={class:"vn-cast"},vu=["src","alt"],_u={class:"vn-top"},yu={class:"vn-titles"},bu={class:"vn-chapter"},xu={key:0,class:"vn-scene"},ku={class:"vn-tools"},Mu={key:0,class:"vn-choice"},Eu={class:"vn-ask"},Tu=["onClick"],Cu={class:"t"},Su={key:0,class:"r"},wu={key:1,class:"r"},Au={key:0,class:"vn-note"},Iu={key:0,class:"vn-name"},$u=["src"],Ou={key:1},Nu={class:"vn-text"},Du={key:0,class:"caret"},Fu={class:"vn-foot"},Lu={key:1,class:"vn-dot"},Ru={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:t}){const n=e,s=t,r=Re([]),i=Re(0),o=Re(0),l=Re(!1);let u=0,m=0;function c(G){for(let ae=0;ae<G.length;ae++){const Q=G[ae].t;if(Q!=="scene"&&Q!=="cg"&&Q!=="cgend")return ae}return Math.max(0,G.length-1)}const h=Y(()=>r.value[i.value]||null),g=Y(()=>i.value>=r.value.length-1),b=Y(()=>!!h.value&&h.value.t==="choice"),L=Y(()=>!!h.value&&h.value.t==="say"),S=Y(()=>!!h.value&&h.value.t==="nar"),O=Y(()=>h.value&&h.value.text||""),I=Y(()=>O.value.slice(0,o.value)),A=Y(()=>o.value<O.value.length),V=Y(()=>{for(let G=i.value;G>=0;G--)if(r.value[G].t==="scene")return G;return-1}),k=Y(()=>V.value>=0?r.value[V.value]:null),B=Y(()=>k.value?ru(k.value.text):"shop"),se=Y(()=>ui[B.value]||ui.shop),z=Y(()=>uu(se.value)),P=Y(()=>!!k.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(k.value.text)),q=Y(()=>{let G=-1;for(let ae=i.value;ae>=0;ae--){const Q=r.value[ae].t;if(Q==="cg"){G=ae;break}if(Q==="cgend")return""}return G<0||G<V.value?"":r.value[G].key}),U=Y(()=>q.value?cu(q.value):null),X=Y(()=>{const G=[];for(let ae=V.value+1;ae<=i.value;ae++){const Q=r.value[ae];Q.t==="say"&&iu[Q.who]&&lu(Q.who)&&!G.includes(Q.who)&&G.push(Q.who)}return G}),w=Y(()=>L.value?h.value.who:"");Zt(()=>n.ev,()=>{r.value=zn(n.ev.beats||[],a),i.value=c(r.value),o.value=0,l.value=!1,Te()},{immediate:!0});const Z={1:[50],2:[31,69],3:[22,50,78]};function ye(G,ae){return{left:((Z[ae]||Z[3])[G]||50)+"%",zIndex:10+G}}function Te(){if(clearInterval(u),o.value=0,b.value||!O.value){o.value=O.value.length;return}const G=Math.max(1,Math.round(O.value.length/40));u=setInterval(()=>{o.value=Math.min(O.value.length,o.value+G),o.value>=O.value.length&&clearInterval(u)},18)}Zt(()=>i.value,Te);function me(G){let ae=G+1;for(;ae<r.value.length;){const Q=r.value[ae].t;if(Q==="scene"||Q==="cg"||Q==="cgend")ae++;else break}return Math.min(ae,r.value.length-1)}function he(){if(!b.value){if(A.value){o.value=O.value.length,clearInterval(u);return}g.value||(i.value=me(i.value))}}function le(G,ae){Hc(h.value,G,ae);const Q=(G.branch||[]).concat(h.value.after||[]);r.value.splice(i.value,1,...Q);let kt=Math.max(0,i.value-1);i.value=me(kt)}function dt(){for(let G=i.value+1;G<r.value.length;G++)if(r.value[G].t==="choice"){i.value=G;return}i.value=r.value.length-1,o.value=O.value.length}function zt(){clearInterval(u),clearInterval(m),nu(n.ev),s("done")}function ht(){l.value=!l.value,clearInterval(m),l.value&&(m=setInterval(()=>{if(g.value){clearInterval(m),l.value=!1;return}if(b.value){clearInterval(m),l.value=!1;return}A.value?o.value=O.value.length:i.value=me(i.value)},1400))}return Qi(()=>{clearInterval(u),clearInterval(m)}),(G,ae)=>(E(),T("div",fu,[f("div",{class:ve(["vn-stage",{flash:P.value}])},[f("div",{class:"vn-bg",style:Ne({background:se.value.css})},[z.value?(E(),T("img",{key:0,src:z.value,alt:"",class:"vn-bg-img"},null,8,du)):ee("",!0),ae[0]||(ae[0]=f("div",{class:"vn-veil"},null,-1))],4),Ae(Ua,{name:"cgfade"},{default:Ui(()=>[U.value&&U.value.src?(E(),T("div",hu,[f("img",{src:U.value.src,alt:""},null,8,pu),f("div",mu,v(U.value.name),1)])):ee("",!0)]),_:1}),f("div",gu,[(E(!0),T(ne,null,_e(X.value,(Q,kt)=>(E(),T("div",{key:Q+"-"+X.value.length,class:ve(["vn-actor",{dim:w.value&&w.value!==Q,off:!w.value}]),style:Ne(ye(kt,X.value.length))},[f("img",{src:F(ou)(Q),alt:Q},null,8,vu)],6))),128))]),f("div",_u,[f("div",yu,[f("div",bu,v(e.ev.title),1),k.value?(E(),T("div",xu,v(k.value.text),1)):ee("",!0)]),f("div",ku,[f("button",{type:"button",class:ve({on:l.value}),onClick:an(ht,["stop"])},"自动",2),f("button",{type:"button",onClick:an(dt,["stop"])},"跳过")])]),b.value?(E(),T("div",Mu,[f("div",Eu,v(h.value.prompt),1),(E(!0),T(ne,null,_e(h.value.options,(Q,kt)=>(E(),T("button",{key:kt,type:"button",class:"vn-opt",onClick:an(Mt=>le(Q,kt),["stop"])},[f("span",Cu,v(Q.label),1),Q.gains&&Q.gains.length?(E(),T("span",Su,v(Q.gains.map(Mt=>Mt.label).join(" · ")),1)):Q.hint?(E(),T("span",wu,v(Q.hint),1)):ee("",!0)],8,Tu))),128)),h.value.note?(E(),T("p",Au,v(h.value.note),1)):ee("",!0)])):(E(),T("div",{key:1,class:ve(["vn-box",{nar:S.value}]),onClick:he},[L.value?(E(),T("div",Iu,[F(fi)(h.value.who)?(E(),T("img",{key:0,src:F(fi)(h.value.who),alt:""},null,8,$u)):ee("",!0),f("span",null,v(h.value.who),1),h.value.emo&&h.value.emo!=="视角"?(E(),T("em",Ou,v(h.value.emo),1)):ee("",!0)])):ee("",!0),f("div",Nu,[Ue(v(I.value),1),A.value?(E(),T("span",Du)):ee("",!0)]),f("div",Fu,[g.value&&!A.value?(E(),T("span",{key:0,class:"vn-end",onClick:an(zt,["stop"])},"结束 ←")):(E(),T("span",Lu,"▾"))])],2))],2)]))}},Pu=Nt(Ru,[["__scopeId","data-v-4cd3c51a"]]),Vu={class:"shop-hero"},Bu={class:"tag"},ju=["src"],Hu={class:"cap"},Uu={class:"small muted"},Ku={class:"card card-pad",style:{"margin-top":"12px"}},qu={class:"between",style:{"margin-bottom":"6px"}},Wu={class:"small"},zu={class:"between",style:{"margin-bottom":"6px"}},Gu={class:"small"},Yu={class:"between",style:{"margin-bottom":"6px"}},Ju={class:"small"},Zu={class:"between"},Xu={class:"small"},Qu={key:0,class:"card",style:{"margin-top":"12px"}},ef={style:{flex:"1 1 auto","min-width":"0"}},tf={style:{"font-size":"14px","font-weight":"600"}},nf={class:"small muted"},sf=["onClick"],rf={class:"card card-pad",style:{"margin-top":"12px"}},of={key:0},lf=["disabled"],af={key:1},cf={class:"between",style:{"margin-bottom":"6px"}},uf={class:"small"},ff={class:"between",style:{"margin-bottom":"10px"}},df={class:"small"},hf={key:0,class:"shelf-left"},pf={class:"small"},mf={class:"small muted"},gf={key:2},vf=["onClick"],_f={class:"r"},yf={class:"card card-pad",style:{"margin-top":"12px"}},bf={class:"k"},xf={class:"track"},kf={class:"v"},Mf={__name:"ShopPage",emits:["closed"],setup(e,{emit:t}){const n=t,s=Y(()=>xc(a.shopLevel)),r=Y(()=>Object.values(a.shelf||{}).reduce((m,c)=>m+c,0)),i=Y(()=>a.dayRev>0||a.daySold>0),o=Y(()=>Object.keys(a.shelf||{}).filter(m=>a.shelf[m]>0).map(m=>({id:m,name:bt(m).name,qty:a.shelf[m]}))),l=Re(!1);function u(m){const c=Jc(m);l.value=!1,n("closed",c)}return(m,c)=>(E(),T("div",null,[f("div",Vu,[f("span",Bu,v(s.value.name),1),f("img",{src:F(Le)("shop-exterior.webp"),alt:"林记烘焙"},null,8,ju),f("div",Hu,[c[2]||(c[2]=f("div",{class:"n serif"},"林记烘焙",-1)),f("div",Uu,v(F(Gs)(F(a).month))+" · 第 "+v(F(a).day)+" / "+v(F(ls))+" 个经营日 · 共 "+v(F(a).storeCount)+" 家店 ",1)])]),f("div",Ku,[c[7]||(c[7]=f("div",{class:"h2"},"今天",-1)),f("div",qu,[c[3]||(c[3]=f("span",{class:"small muted"},"产能（体力 + 妈妈 + 伙伴）",-1)),f("span",Wu,v(F(wt))+" 点",1)]),f("div",zu,[c[4]||(c[4]=f("span",{class:"small muted"},"原料库存",-1)),f("span",Gu,v(F(a).stock)+" 份",1)]),f("div",Yu,[c[5]||(c[5]=f("span",{class:"small muted"},"待售成品",-1)),f("span",Ju,v(r.value)+" 个",1)]),f("div",Zu,[c[6]||(c[6]=f("span",{class:"small muted"},"本月固定成本",-1)),f("span",Xu,"¥"+v(F(Fo)),1)])]),F(a).orders.length?(E(),T("div",Qu,[c[8]||(c[8]=f("div",{class:"card-pad",style:{"padding-bottom":"2px"}},[f("div",{class:"h2",style:{margin:"0"}},[Ue("今日订单 "),f("span",{class:"sub"},"接单后营业时优先交付")])],-1)),(E(!0),T(ne,null,_e(F(a).orders,h=>(E(),T("div",{key:h.id,class:"cake",style:{"align-items":"center"}},[f("div",ef,[f("div",tf,v(h.type)+" · "+v(F(bt)(h.product).name)+" × "+v(h.qty),1),f("div",nf,"交付可得 ¥"+v(h.pay),1)]),f("button",{class:ve(["btn",{primary:h.taken}]),style:{height:"34px",padding:"0 14px","font-size":"13px"},type:"button",onClick:g=>F(Yc)(h.id)},v(h.taken?"已接":"接单"),11,sf)]))),128))])):ee("",!0),f("div",rf,[i.value?(E(),T("div",af,[c[15]||(c[15]=f("div",{class:"h2"},"今天的成绩",-1)),f("div",cf,[c[11]||(c[11]=f("span",{class:"small muted"},"卖出",-1)),f("span",uf,v(F(a).daySold)+" 个",1)]),f("div",ff,[c[12]||(c[12]=f("span",{class:"small muted"},"收入",-1)),f("span",df,"¥"+v(F(a).dayRev),1)]),o.value.length?(E(),T("div",hf,[c[13]||(c[13]=f("div",{class:"small muted",style:{"margin-bottom":"6px"}},"还剩",-1)),(E(!0),T(ne,null,_e(o.value,h=>(E(),T("div",{class:"between",key:h.id,style:{"margin-bottom":"4px"}},[f("span",pf,v(h.name),1),f("span",mf,v(h.qty)+" 个",1)]))),128))])):ee("",!0),l.value?(E(),T("div",gf,[c[14]||(c[14]=f("div",{class:"small muted",style:{"margin-bottom":"8px"}},"剩下的怎么处理？",-1)),(E(!0),T(ne,null,_e(F(Zs),(h,g)=>(E(),T("button",{key:g,class:"opt",type:"button",onClick:b=>u(g)},[Ue(v(h.label)+" ",1),f("span",_f,v(h.cashRate?"回收一半成本":"不换钱")+v(h.community?"，社区好感 +"+h.community:""),1)],8,vf))),128))])):(E(),T("button",{key:1,class:"btn primary block",type:"button",onClick:c[1]||(c[1]=h=>l.value=!0)}," 打烊结算 "))])):(E(),T("div",of,[c[9]||(c[9]=f("div",{class:"h2"},"营业",-1)),c[10]||(c[10]=f("p",{class:"small muted",style:{margin:"0 0 10px"}}," 开门之后先交付已接的订单，剩下的按客流卖出去。 ",-1)),f("button",{class:"btn primary block",type:"button",disabled:r.value===0,onClick:c[0]||(c[0]=(...h)=>F(li)&&F(li)(...h))},v(r.value===0?"还没有成品，先去厨房做":"开门营业"),9,lf)]))]),f("div",yf,[c[16]||(c[16]=f("div",{class:"h2"},"统计",-1)),(E(!0),T(ne,null,_e([{k:"口碑",v:F(a).reputation,cls:"sage"},{k:"知名度",v:F(a).popularity,cls:"sage"},{k:"顾客忠诚",v:F(a).loyalty,cls:""},{k:"品牌影响",v:F(a).brand,cls:"pink"}],h=>(E(),T("div",{class:"stat",key:h.k},[f("span",bf,v(h.k),1),f("span",xf,[f("span",{class:ve(["fill",h.cls]),style:Ne({width:h.v+"%"})},null,6)]),f("span",kf,v(Math.round(h.v)),1)]))),128))])]))}},Ef=Nt(Mf,[["__scopeId","data-v-a0480f22"]]),Tf={viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},Cf=["fill"],Sf=["fill"],wf=["fill"],Af=["fill"],If=["fill"],$f=["fill"],Of=["fill"],Nf=["fill"],Df=["fill"],Ff=["fill"],Lf=["fill"],Rf={__name:"CakeArt",props:{colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){return(t,n)=>(E(),T("svg",Tf,[n[0]||(n[0]=f("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),n[1]||(n[1]=f("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),f("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,Cf),f("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,Sf),f("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,wf),f("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,Af),f("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,If),f("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,$f),f("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,Of),f("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,Nf),f("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,Df),f("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,Ff),f("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,Lf)]))}},Bo=Nt(Rf,[["__scopeId","data-v-93de33d5"]]),Pf={class:"card card-pad"},Vf={class:"between",style:{"margin-bottom":"8px"}},Bf={class:"track",style:{height:"8px",background:"var(--apricot)","border-radius":"999px",overflow:"hidden"}},jf={class:"between small muted",style:{"margin-top":"8px"}},Hf={class:"card",style:{"margin-top":"12px"}},Uf={class:"art"},Kf={class:"body"},qf={class:"name"},Wf={class:"chip",style:{"font-size":"10px"}},zf={class:"nums"},Gf={class:"tiers"},Yf=["onClick"],Jf={class:"stepper"},Zf=["onClick"],Xf=["onClick"],Qf={__name:"KitchenPage",setup(e){const t=Re(""),n=Re(!1);let s=0;const r=Y(()=>Lo()),i=Y(()=>Object.values(a.plan).reduce((c,h)=>c+h,0)),o=Y(()=>Oo.value.map(c=>({...c,lv:a.levels[c.id]||1,price:Dn(c.id),demand:Do(c.id),tier:a.prices[c.id]||"std",qty:a.plan[c.id]||0})));function l(c,h){const g=a.plan[c]||0;Wc(c,g+h)}function u(c,h){a.prices[c]=h}function m(){const c=zc();t.value=c.msg,n.value=!c.ok,clearTimeout(s),s=setTimeout(()=>t.value="",2200)}return(c,h)=>(E(),T("div",null,[f("div",Pf,[f("div",Vf,[h[0]||(h[0]=f("div",{class:"h2",style:{margin:"0"}},"厨房",-1)),f("span",{class:ve(["chip",r.value>F(wt)?"pink":"sage"])}," 产能 "+v(r.value)+" / "+v(F(wt)),3)]),f("div",Bf,[f("div",{style:Ne([{height:"100%","border-radius":"999px",transition:"width .3s"},{width:Math.min(100,r.value/Math.max(1,F(wt))*100)+"%",background:r.value>F(wt)?"#d95b67":"linear-gradient(90deg,#e9c9a3,#d9a06a)"}])},null,4)]),f("div",jf,[f("span",null,"原料 "+v(F(a).stock)+" 份 · 计划 "+v(i.value)+" 个",1),f("span",null,"体力 "+v(F(a).stamina),1)])]),f("div",Hf,[(E(!0),T(ne,null,_e(o.value,g=>(E(),T("div",{key:g.id,class:"cake"},[f("div",Uf,[Ae(Bo,{colors:g.colors},null,8,["colors"])]),f("div",Kf,[f("div",qf,[f("span",null,v(g.name),1),f("span",Wf,"Lv"+v(Math.round(g.lv*10)/10),1)]),f("div",zf,[f("span",null,"¥"+v(g.price),1),f("span",null,"预计卖 "+v(g.demand)+" 个",1),f("span",null,v(g.diff)+" 点/个",1)]),f("div",Gf,[(E(!0),T(ne,null,_e(F(wo),(b,L)=>(E(),T("button",{key:L,type:"button",class:ve(["tier",{on:g.tier===L}]),onClick:S=>u(g.id,L)},v(b.label),11,Yf))),128))])]),f("div",Jf,[f("button",{type:"button",onClick:b=>l(g.id,-1)},"−",8,Zf),f("span",null,v(g.qty),1),f("button",{type:"button",onClick:b=>l(g.id,1)},"+",8,Xf)])]))),128))]),t.value?(E(),T("p",{key:0,class:"small",style:Ne({color:n.value?"var(--berry)":"#6c8a55",margin:"10px 2px 0"})},v(t.value),5)):ee("",!0),f("button",{class:"btn primary block",style:{"margin-top":"12px"},type:"button",onClick:m}," 开始制作（消耗原料与体力） "),h[1]||(h[1]=f("p",{class:"small muted",style:{margin:"9px 2px 0","text-align":"center"}}," 妈妈每天帮 60 点产能，每位伙伴 40 点，超出部分才用你的体力 ",-1))]))}},ed=Nt(Qf,[["__scopeId","data-v-1004f0dd"]]),td={class:"card",style:{overflow:"hidden"}},nd={style:{display:"flex"}},sd={class:"portrait"},rd=["src"],id={style:{flex:"1 1 auto",padding:"14px"}},od={class:"stat",style:{"margin-top":"12px"}},ld={class:"track"},ad={class:"v"},cd={class:"card",style:{"margin-top":"12px",overflow:"hidden"}},ud={style:{display:"flex"}},fd={class:"portrait"},dd=["src"],hd={style:{flex:"1 1 auto",padding:"14px"}},pd={class:"stat",style:{"margin-top":"12px"}},md={class:"track"},gd={class:"v"},vd={class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}},_d={class:"card card-pad",style:{"margin-top":"12px"}},yd={class:"h2"},bd={class:"sub"},xd={style:{flex:"1 1 auto","min-width":"0"}},kd={class:"nm"},Md={class:"chip",style:{"font-size":"10px"}},Ed={key:0,class:"chip pink",style:{"font-size":"10px"}},Td={class:"nt"},Cd={key:0,class:"bars"},Sd={class:"b"},wd={class:"bt"},Ad={class:"bv"},Id={class:"b"},$d={class:"bl"},Od={class:"bt"},Nd={class:"bv"},Dd={class:"card card-pad",style:{"margin-top":"12px"}},Fd={class:"k"},Ld={class:"track"},Rd={class:"v"},Pd={__name:"PartnersPage",setup(e){const t=ei.nu,n=ei.sq,s=Y(()=>Qt.map(o=>{const l=a.staff.includes(o.id);return{...o,joined:l,trust:Math.round(a.partnerTrust[o.id]||0),skill:Math.round((a.partnerSkill[o.id]||0)*10)/10}})),r=Y(()=>a.photos.length),i=Y(()=>Object.keys(zs).length);return(o,l)=>(E(),T("div",null,[f("div",td,[f("div",nd,[f("div",sd,[f("img",{src:F(t).full,alt:"林暖"},null,8,rd)]),f("div",id,[l[1]||(l[1]=f("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"林暖",-1)),l[2]||(l[2]=f("div",{class:"small muted"},"母亲 · 林记上一任经营者",-1)),f("div",od,[l[0]||(l[0]=f("span",{class:"k"},"家庭默契",-1)),f("span",ld,[f("span",{class:"fill",style:Ne({width:F(a).momBond+"%"})},null,4)]),f("span",ad,v(Math.round(F(a).momBond)),1)]),l[3]||(l[3]=f("div",{class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}}," 前期仍在店里帮忙，每天能搭 60 点产能。她不会替你把所有事都做完。 ",-1))])])]),f("div",cd,[f("div",ud,[f("div",fd,[f("img",{src:F(n).full,alt:"苏晴"},null,8,dd)]),f("div",hd,[l[5]||(l[5]=f("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"苏晴",-1)),l[6]||(l[6]=f("div",{class:"small muted"},"高中好友 · 摄影从业者",-1)),f("div",pd,[l[4]||(l[4]=f("span",{class:"k"},"友情",-1)),f("span",md,[f("span",{class:"fill pink",style:Ne({width:F(a).friendship+"%"})},null,4)]),f("span",gd,v(Math.round(F(a).friendship)),1)]),f("div",vd," 不在员工名单里。相册 "+v(r.value)+" / "+v(i.value)+" 张。 ",1)])])]),f("div",_d,[f("div",yd,[l[7]||(l[7]=Ue("伙伴 ",-1)),f("span",bd,v(F(a).staff.length)+" / "+v(F(Qt).length)+" 人",1)]),(E(!0),T(ne,null,_e(s.value,u=>(E(),T("div",{key:u.id,class:ve(["mate",{off:!u.joined}])},[f("div",{class:"ava",style:Ne({background:u.color})},v(u.name.slice(0,1)),5),f("div",xd,[f("div",kd,[Ue(v(u.name)+" ",1),f("span",Md,v(u.role),1),u.joined?ee("",!0):(E(),T("span",Ed,"第 "+v(u.joinMonth)+" 个月加入",1))]),f("div",Td,v(u.issue),1),u.joined?(E(),T("div",Cd,[f("span",Sd,[l[8]||(l[8]=f("span",{class:"bl"},"信赖",-1)),f("span",wd,[f("span",{class:"bf",style:Ne({width:u.trust+"%"})},null,4)]),f("span",Ad,v(u.trust),1)]),f("span",Id,[f("span",$d,v(u.skillName),1),f("span",Od,[f("span",{class:"bf sage",style:Ne({width:u.skill*20+"%"})},null,4)]),f("span",Nd,v(u.skill),1)])])):ee("",!0)])],2))),128))]),f("div",Dd,[l[9]||(l[9]=f("div",{class:"h2"},[Ue("经营偏好 "),f("span",{class:"sub"},"长期选择积累出的风格")],-1)),(E(!0),T(ne,null,_e([{k:"传统",v:F(a).style.tradition},{k:"创新",v:F(a).style.innovation},{k:"效率",v:F(a).style.efficiency},{k:"社区",v:F(a).style.community}],u=>(E(),T("div",{class:"stat",key:u.k},[f("span",Fd,v(u.k),1),f("span",Ld,[f("span",{class:"fill",style:Ne({width:Math.min(100,u.v)+"%"})},null,4)]),f("span",Rd,v(Math.round(u.v)),1)]))),128))])]))}},Vd=Nt(Pd,[["__scopeId","data-v-ead7304a"]]),Bd={class:"card card-pad"},jd={class:"between"},Hd={class:"row",style:{gap:"4px","flex-wrap":"wrap","max-width":"150px","justify-content":"flex-end"}},Ud={class:"between small muted",style:{"margin-top":"8px"}},Kd={class:"act-grid",style:{"margin-top":"10px"}},qd=["disabled","onClick"],Wd={class:"t"},zd={class:"c"},Gd={class:"n"},Yd={key:0,class:"n cost"},Jd={key:0,class:"card card-pad",style:{"margin-top":"10px"}},Zd={class:"h2"},Xd={class:"pills"},Qd=["onClick"],eh={class:"muted"},th={key:1,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"}},nh={class:"card card-pad",style:{"margin-top":"12px"}},sh={class:"between",style:{"margin-bottom":"8px"}},rh={class:"small muted",style:{"margin-bottom":"8px"}},ih={key:0,class:"chip pink",style:{"font-size":"10px"}},oh={class:"card card-pad",style:{"margin-top":"12px"}},lh={key:0,class:"empty"},ah={class:"d"},ch={class:"x"},uh={__name:"ManagePage",setup(e){const t=Re(""),n=Re("");let s=0;const r=Y(()=>["restock","feedback","talk","sqchat","research","market","train","decorate","survey","branch"].map(c=>({id:c,info:Js(c)}))),i=Y(()=>t.value==="research"?a.unlocked.map(c=>({id:c,label:bt(c).name,sub:"Lv"+Math.round((a.levels[c]||1)*10)/10})):t.value==="train"||t.value==="talk"?Po().map(c=>({id:c.id,label:c.nick,sub:"信赖 "+Math.round(a.partnerTrust[c.id]||0)})):[]);function o(c){return c==="research"?a.unlocked.length>1:c==="train"||c==="talk"?a.staff.length>1:!1}function l(c){const h=Js(c);if(h.disabled||a.ap<h.ap||h.cost&&a.cash<h.cost){m("现在做不了："+h.note);return}if(o(c)){t.value=t.value===c?"":c;return}u(c,{})}function u(c,h){const g=qc(c,h);t.value="",g||m("没有执行成功，检查一下行动力或资金")}function m(c){n.value=c,clearTimeout(s),s=setTimeout(()=>n.value="",2e3)}return(c,h)=>(E(),T("div",null,[f("div",Bd,[f("div",jd,[h[0]||(h[0]=f("div",null,[f("div",{class:"h2",style:{margin:"0"}},"今天的行动力"),f("div",{class:"small muted",style:{"margin-top":"2px"}}," 每个经营日开始回满，不累积 ")],-1)),f("div",Hd,[(E(!0),T(ne,null,_e(F(a).maxAp,g=>(E(),T("span",{key:g,class:ve(["ap-dot",{on:g<=F(a).ap}])},null,2))),128))])]),f("div",Ud,[f("span",null,"剩余 "+v(F(a).ap)+" / "+v(F(a).maxAp)+" 点",1),f("span",null,"体力 "+v(F(a).stamina)+" / "+v(F(a).maxStamina),1)])]),f("div",Kd,[(E(!0),T(ne,null,_e(r.value,g=>(E(),T("button",{key:g.id,class:ve(["act",{on:t.value===g.id}]),type:"button",disabled:g.info.disabled||F(a).ap<g.info.ap||g.info.cost>0&&F(a).cash<g.info.cost,onClick:b=>l(g.id)},[f("span",Wd,[f("span",null,v(g.info.name),1),f("span",zd,v(g.info.ap)+"点",1)]),f("span",Gd,v(g.info.note),1),g.info.cost>0?(E(),T("span",Yd,"花费 ¥"+v(g.info.cost),1)):ee("",!0)],10,qd))),128))]),t.value&&i.value.length?(E(),T("div",Jd,[f("div",Zd,v(t.value==="research"?"研发哪一款？":"和谁？"),1),f("div",Xd,[(E(!0),T(ne,null,_e(i.value,g=>(E(),T("button",{key:g.id,type:"button",class:"pill",onClick:b=>u(t.value,t.value==="research"?{product:g.id}:{partner:g.id})},[Ue(v(g.label)+" ",1),f("span",eh,v(g.sub),1)],8,Qd))),128))])])):ee("",!0),n.value?(E(),T("p",th,v(n.value),1)):ee("",!0),f("div",nh,[f("div",sh,[h[1]||(h[1]=f("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),f("span",{class:ve(["chip",F(Yt).done>=F(Yt).need?"sage":""])},v(F(Yt).done)+" / "+v(F(Yt).need||"—"),3)]),f("div",rh,v(F(hr).name)+" · 完成 "+v(F(Yt).need)+" 项即可进入下一阶段，否则本局提前结束 ",1),(E(!0),T(ne,null,_e(F(Yt).list,g=>(E(),T("div",{key:g.text,class:ve(["goal",{done:g.done}])},[h[2]||(h[2]=f("span",{class:"dot"},null,-1)),f("span",null,v(g.text),1),g.expand?(E(),T("span",ih,"扩张")):ee("",!0)],2))),128))]),f("div",oh,[h[3]||(h[3]=f("div",{class:"h2"},"最近发生的事",-1)),F(a).log.length?ee("",!0):(E(),T("div",lh,"还没有记录。")),(E(!0),T(ne,null,_e(F(a).log.slice(0,10),(g,b)=>(E(),T("div",{key:b,class:ve(["logline",g.tone])},[f("span",ah,v(g.month)+"月"+v(g.day)+"日",1),f("span",ch,v(g.text),1)],2))),128))])]))}},fh=Nt(uh,[["__scopeId","data-v-ea10304e"]]),dh={class:"seg"},hh=["onClick"],ph={key:0,class:"card"},mh={class:"art"},gh={class:"body"},vh={class:"name"},_h={key:0,class:"chip",style:{"font-size":"10px"}},yh={class:"desc"},bh={key:0,class:"hint"},xh={key:1,class:"nums"},kh={key:1},Mh={class:"photos"},Eh={class:"im"},Th=["src","alt"],Ch={key:1,class:"small muted"},Sh={key:2,style:{"font-size":"20px",opacity:"0.3"}},wh={class:"cp"},Ah={class:"ti"},Ih={class:"cc"},$h={key:2,class:"card"},Oh={style:{flex:"1 1 auto","min-width":"0"}},Nh={class:"nm"},Dh={key:0,class:"chip sage",style:{"font-size":"10px"}},Fh={key:1,class:"chip pink",style:{"font-size":"10px"}},Lh={class:"nt"},Rh={key:0,class:"nt"},Ph={__name:"CodexPage",setup(e){const t=Re("product"),n=Y(()=>wn.map(i=>({...i,flavor:(Se.codex[i.id]||{}).flavor||i.desc,hint:(Se.codex[i.id]||{}).hint||"",owned:a.unlocked.includes(i.id),lv:Math.round((a.levels[i.id]||1)*10)/10,price:Dn(i.id),sold:a.monthSold[i.id]||0}))),s=Y(()=>Object.keys(zs).map(i=>({id:i,...zs[i],owned:a.photos.includes(i)}))),r=Y(()=>An.map(i=>({...i,owned:a.cities.includes(i.id),surveyed:a.surveyed.includes(i.id)})));return(i,o)=>(E(),T("div",null,[f("div",dh,[(E(),T(ne,null,_e([{k:"product",t:"产品"},{k:"photo",t:"相册"},{k:"city",t:"门店"}],l=>f("button",{key:l.k,type:"button",class:ve({on:t.value===l.k}),onClick:u=>t.value=l.k},v(l.t),11,hh)),64))]),t.value==="product"?(E(),T("div",ph,[(E(!0),T(ne,null,_e(n.value,l=>(E(),T("div",{key:l.id,class:ve(["cake",{locked:!l.owned}])},[f("div",mh,[Ae(Bo,{colors:l.colors},null,8,["colors"])]),f("div",gh,[f("div",vh,[f("span",null,v(l.name),1),l.owned?(E(),T("span",_h,"Lv"+v(l.lv),1)):ee("",!0)]),f("div",yh,v(l.owned?l.flavor:"第 "+l.month+" 个月解锁"),1),l.owned&&l.hint?(E(),T("div",bh,"配方："+v(l.hint),1)):ee("",!0),l.owned?(E(),T("div",xh,[f("span",null,"¥"+v(l.price),1),f("span",null,v(l.diff)+" 点/个",1),f("span",null,"本月卖出 "+v(l.sold),1)])):ee("",!0)])],2))),128))])):t.value==="photo"?(E(),T("div",kh,[f("div",Mh,[(E(!0),T(ne,null,_e(s.value,l=>(E(),T("div",{key:l.id,class:"photo"},[f("div",Eh,[l.owned&&l.img?(E(),T("img",{key:0,src:l.img,alt:l.title},null,8,Th)):l.owned?(E(),T("span",Ch,"未冲印")):(E(),T("span",Sh,"?"))]),f("div",wh,[f("div",Ah,v(l.owned?l.title:"还没发生"),1),f("div",Ih,v(l.owned?l.caption:"继续经营，它会出现"),1)])]))),128))])])):(E(),T("div",$h,[(E(!0),T(ne,null,_e(r.value,l=>(E(),T("div",{key:l.id,class:ve(["city",{on:l.owned,off:!l.owned&&!l.surveyed}])},[o[0]||(o[0]=f("span",{class:"dot"},null,-1)),f("div",Oh,[f("div",Nh,[Ue(v(l.name)+" ",1),l.owned?(E(),T("span",Dh,"营业中")):l.surveyed?(E(),T("span",Fh,"已考察")):ee("",!0)]),f("div",Lh,v(l.note),1),l.owned?ee("",!0):(E(),T("div",Rh," 第 "+v(l.month)+" 个月可考察 · 口碑 "+v(l.rep)+" · 开店 ¥"+v(l.cost),1))])],2))),128))]))]))}},Vh=Nt(Ph,[["__scopeId","data-v-182ebe56"]]),Bh={class:"app"},jh={class:"topbar"},Hh={class:"m serif"},Uh={class:"purse"},Kh={class:"scroll"},qh={class:"between",style:{margin:"-4px 2px 10px"}},Wh={class:"small muted"},zh={class:"chip",style:{"font-size":"10px"}},Gh={class:"nav"},Yh=["onClick"],Jh={class:"ico",viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},Zh=["d"],Xh={class:"sheet"},Qh={class:"sheet-head"},ep={class:"t serif"},tp={class:"small muted"},np={class:"sheet-body"},sp={class:"card card-pad"},rp={class:"between small",style:{"margin-bottom":"6px"}},ip={class:"between small",style:{"margin-bottom":"6px"}},op={class:"between small",style:{"margin-bottom":"6px"}},lp={class:"between small"},ap={key:0,class:"card card-pad",style:{"margin-top":"12px"}},cp={class:"h2"},up={class:"between small",style:{"margin-bottom":"6px"}},fp={class:"between small",style:{"margin-bottom":"6px"}},dp={class:"between small",style:{"margin-bottom":"6px"}},hp={class:"between small"},pp={key:0,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},mp={class:"sheet-foot"},gp={key:3,class:"mask"},vp={class:"sheet"},_p={class:"sheet-body",style:{"padding-top":"22px"}},yp={class:"small muted serif"},bp={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},xp={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},kp={class:"card card-pad"},Mp={class:"between small",style:{"margin-bottom":"6px"}},Ep={class:"between small",style:{"margin-bottom":"6px"}},Tp={class:"between small"},Cp={key:1,class:"card card-pad",style:{"margin-top":"12px"}},Sp={class:"pn"},wp={class:"muted small"},Ap={class:"pt"},Ip={__name:"App",setup(e){const t=[{id:"shop",label:"店铺",icon:"house"},{id:"kitchen",label:"厨房",icon:"bowl"},{id:"partners",label:"伙伴",icon:"heart"},{id:"manage",label:"经营",icon:"list"},{id:"codex",label:"图鉴",icon:"book"}],n={house:"M3.5 10.8 12 4l8.5 6.8V20a1 1 0 0 1-1 1h-4.6v-6H9.1v6H4.5a1 1 0 0 1-1-1z",bowl:"M4 11h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8zM9 7.5c0-1.5 1-2 1-3M13 7.5c0-1.5 1-2 1-3",heart:"M12 20s-7.5-4.6-7.5-9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20z",list:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",book:"M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13H7.5A2.5 2.5 0 0 1 5 17.5zM5 17.5A2.5 2.5 0 0 1 7.5 15H19"},s=Re("shop"),r=Re(null),i=Re(null),o=Re(null);function l(){const O=location.hash.replace("#","");return t.some(I=>I.id===O)?O:"shop"}s.value=l(),window.addEventListener("hashchange",()=>s.value=l());const u=Y(()=>a.phase==="ended"&&a.ending&&!Je.events.length?a.ending:null),m=Y(()=>Je.events.length);function c(){Je.events.length&&(r.value=Je.events[0])}function h(){Je.events.shift(),r.value=null,We();const O=Je.events[0];O&&O.month===a.month&&setTimeout(c,200)}function g(O){i.value=O,O.day===ls&&(o.value=a.report)}function b(){i.value=null,o.value=null,Je.events.length&&c()}function L(){ii(),s.value="shop",ai(),c()}Zt(()=>a.autoStory,O=>{O&&(a.autoStory=!1,setTimeout(()=>{!r.value&&Je.events.length&&c()},90))});const S=Y(()=>{if(!u.value)return[];const O=Qt.filter(A=>a.staff.includes(A.id)).map(A=>({name:A.nick,role:A.role,...ci(A.id)||{}})),I=ci("mom");return I&&O.push({name:"林暖",role:"母亲",...I}),O.filter(A=>A.title)});return ar(()=>{Rc()||ii(),ai(),c()}),(O,I)=>(E(),T("div",Bh,[f("div",jh,[f("div",Hh,[Ue(v(F(Gs)(F(a).month))+" ",1),f("small",null,"第 "+v(F(a).month)+" / 36 月 · 第 "+v(F(a).day)+" / "+v(F(ls))+" 日",1)]),f("div",Uh,[I[0]||(I[0]=f("span",{class:"y"},"¥",-1)),Ue(v(F(a).cash.toLocaleString()),1)])]),f("div",Kh,[f("div",qh,[f("span",Wh,v(F(hr).name),1),f("span",zh,"行动力 "+v(F(a).ap),1)]),s.value==="shop"?(E(),Vt(Ef,{key:0,onClosed:g})):s.value==="kitchen"?(E(),Vt(ed,{key:1})):s.value==="partners"?(E(),Vt(Vd,{key:2})):s.value==="manage"?(E(),Vt(fh,{key:3})):s.value==="codex"?(E(),Vt(Vh,{key:4})):ee("",!0)]),m.value?(E(),T("button",{key:0,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"calc(var(--nav-h) + 16px)","z-index":"20","box-shadow":"var(--shadow)"},onClick:c}," 有 "+v(m.value)+" 段剧情 ",1)):ee("",!0),f("div",Gh,[(E(),T(ne,null,_e(t,A=>f("button",{key:A.id,type:"button",class:ve({on:s.value===A.id}),onClick:V=>s.value=A.id},[(E(),T("svg",Jh,[f("path",{d:n[A.icon]},null,8,Zh)])),f("span",null,v(A.label),1)],10,Yh)),64))]),r.value?(E(),Vt(Pu,{key:1,ev:r.value,onDone:h},null,8,["ev"])):ee("",!0),i.value?(E(),T("div",{key:2,class:"mask",onClick:an(b,["self"])},[f("div",Xh,[f("div",Qh,[f("div",ep,v(o.value?"月末结算":"打烊了"),1),f("div",tp,v(F(Gs)(F(a).month))+" · 第 "+v(i.value.day)+" 个经营日",1)]),f("div",np,[f("div",sp,[f("div",rp,[I[1]||(I[1]=f("span",{class:"muted"},"今天卖出",-1)),f("span",null,v(i.value.sold)+" 个",1)]),f("div",ip,[I[2]||(I[2]=f("span",{class:"muted"},"今日收入",-1)),f("span",null,"¥"+v(i.value.rev),1)]),f("div",op,[I[3]||(I[3]=f("span",{class:"muted"},"剩下",-1)),f("span",null,v(i.value.left)+" 个",1)]),f("div",lp,[I[4]||(I[4]=f("span",{class:"muted"},"剩货回收",-1)),f("span",null,"¥"+v(i.value.gain),1)])]),o.value?(E(),T("div",ap,[f("div",cp,v(o.value.month)+" 月经营报告",1),f("div",up,[I[5]||(I[5]=f("span",{class:"muted"},"营业额",-1)),f("span",null,"¥"+v(o.value.rev),1)]),f("div",fp,[I[6]||(I[6]=f("span",{class:"muted"},"支出",-1)),f("span",null,"¥"+v(o.value.cost),1)]),f("div",dp,[I[7]||(I[7]=f("span",{class:"muted"},"净收入",-1)),f("span",{style:Ne({color:o.value.net>=0?"#6c8a55":"var(--berry)"})},v(o.value.net>=0?"+":"")+v(o.value.net),5)]),f("div",hp,[I[8]||(I[8]=f("span",{class:"muted"},"最受欢迎",-1)),f("span",null,v(o.value.best)+"（"+v(o.value.bestN)+" 个）",1)]),o.value.warn?(E(),T("p",pp,v(o.value.warn),1)):ee("",!0)])):ee("",!0)]),f("div",mp,[f("button",{class:"btn primary block",type:"button",onClick:b},v(u.value?"看结局":"继续"),1)])])])):ee("",!0),u.value?(E(),T("div",gp,[f("div",vp,[f("div",_p,[f("div",yp,v(u.value.name),1),f("h2",bp,v(u.value.title),1),u.value.text?(E(),T("p",xp,v(u.value.text),1)):ee("",!0),f("div",kp,[f("div",Mp,[I[9]||(I[9]=f("span",{class:"muted"},"门店 / 伙伴",-1)),f("span",null,v(F(a).storeCount)+" 家 · "+v(F(a).staff.length)+" 人",1)]),f("div",Ep,[I[10]||(I[10]=f("span",{class:"muted"},"产品 / 相册",-1)),f("span",null,v(F(a).unlocked.length)+" 款 · "+v(F(a).photos.length)+" 张",1)]),f("div",Tp,[I[11]||(I[11]=f("span",{class:"muted"},"口碑 / 知名度",-1)),f("span",null,v(Math.round(F(a).reputation))+" / "+v(Math.round(F(a).popularity)),1)])]),S.value.length?(E(),T("div",Cp,[I[12]||(I[12]=f("div",{class:"h2"},"他们的后来",-1)),(E(!0),T(ne,null,_e(S.value,(A,V)=>(E(),T("div",{key:V,class:"pl"},[f("div",Sp,[Ue(v(A.name),1),f("span",wp," · "+v(A.title),1)]),f("div",Ap,v(A.text),1)]))),128))])):ee("",!0)]),f("div",{class:"sheet-foot"},[f("button",{class:"btn primary block",type:"button",onClick:L},"再开一次")])])])):ee("",!0)]))}},$p=Nt(Ip,[["__scopeId","data-v-bfea201f"]]);vc($p).mount("#app");
