(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vs(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Q={},vt=[],We=()=>{},Ei=()=>!1,An=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),In=e=>e.startsWith("onUpdate:"),re=Object.assign,bs=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zo=Object.prototype.hasOwnProperty,U=(e,t)=>Zo.call(e,t),j=Array.isArray,at=e=>tn(e)==="[object Map]",vn=e=>tn(e)==="[object Set]",Us=e=>tn(e)==="[object Date]",N=e=>typeof e=="function",se=e=>typeof e=="string",ze=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Oi=e=>(G(e)||N(e))&&N(e.then)&&N(e.catch),Ti=Object.prototype.toString,tn=e=>Ti.call(e),Qo=e=>tn(e).slice(8,-1),Ai=e=>tn(e)==="[object Object]",xs=e=>se(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,jt=vs(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fn=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},el=/-\w/g,Te=Fn(e=>e.replace(el,t=>t.slice(1).toUpperCase())),tl=/\B([A-Z])/g,wt=Fn(e=>e.replace(tl,"-$1").toLowerCase()),Ii=Fn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=Fn(e=>e?`on${Ii(e)}`:""),qe=(e,t)=>!Object.is(e,t),Vn=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},Fi=(e,t,n,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:n})},nl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ws;const Dn=()=>Ws||(Ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function xe(e){if(j(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],i=se(s)?ll(s):xe(s);if(i)for(const o in i)t[o]=i[o]}return t}else if(se(e)||G(e))return e}const sl=/;(?![^(]*\))/g,il=/:([^]+)/,ol=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function ll(e){const t={};return e.replace(ol,n=>n.startsWith("/*")?"":n).split(sl).forEach(n=>{if(n){const s=n.split(il);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function fe(e){let t="";if(se(e))t=e;else if(j(e))for(let n=0;n<e.length;n++){const s=fe(e[n]);s&&(t+=s+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rl="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",cl=vs(rl);function Di(e){return!!e||e===""}function al(e,t,n){if(e.length!==t.length)return!1;let s=!0;for(let i=0;s&&i<e.length;i++)s=Pn(e[i],t[i],n);return s}function zs(e,t,n){if(e.size!==t.size)return!1;const s=Array.from(t),i=new Uint8Array(s.length);for(const o of e){let r=-1;for(let l=0;l<s.length;l++)if(!i[l]&&Pn(o,s[l],n)){r=l;break}if(r<0)return!1;i[r]=1}return!0}function ul(e,t,n){let s=at(e),i=at(t);if(s||i||(s=vn(e),i=vn(t),s||i))return s&&i?zs(e,t,n):!1;const o=Object.keys(e).length,r=Object.keys(t).length;if(o!==r)return!1;for(const l in e){const a=e.hasOwnProperty(l),m=t.hasOwnProperty(l);if(a&&!m||!a&&m||!Pn(e[l],t[l],n))return!1}return String(e)===String(t)}function Gs(e,t,n,s){n||(n=[new Map,new Map]);const[i,o]=n;if(i.has(e)||o.has(t))return i.get(e)===t&&o.get(t)===e;i.set(e,t),o.set(t,e);const r=s(e,t,n);return i.delete(e),o.delete(t),r}function Pn(e,t,n){if(e===t)return!0;let s=Us(e),i=Us(t);return s||i?s&&i?e.getTime()===t.getTime():!1:(s=ze(e),i=ze(t),s||i?e===t:(s=j(e),i=j(t),s||i?s&&i?Gs(e,t,n,al):!1:(s=G(e),i=G(t),s||i?!s||!i?!1:Gs(e,t,n,ul):String(e)===String(t))))}const Pi=e=>!!(e&&e.__v_isRef===!0),g=e=>se(e)?e:e==null?"":j(e)||G(e)&&(e.toString===Ti||!N(e.toString))?Pi(e)?g(e.value):JSON.stringify(e,Ri,2):String(e),Ri=(e,t)=>Pi(t)?Ri(e,t.value):at(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,i],o)=>(n[qn(s,o)+" =>"]=i,n),{})}:vn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>qn(n))}:ze(t)?qn(t):G(t)&&!j(t)&&!Ai(t)?String(t):t,qn=(e,t="")=>{var n;return ze(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ae;class fl{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&ae&&(ae.active?(this.parent=ae,this.index=(ae.scopes||(ae.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const i=this.scopes.slice();for(t=0,n=i.length;t<n;t++)i[t].resume()}const s=this.effects.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}}run(t){if(this._active){const n=ae;try{return ae=this,t()}finally{ae=n}}}on(){++this._on===1&&(this.prevScope=ae,ae=this)}off(){if(this._on>0&&--this._on===0){if(ae===this)ae=this.prevScope;else{let t=ae;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(n=0,s=i.length;n<s;n++)i[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function dl(){return ae}let Z;const Un=new WeakSet;class ji{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ae&&(ae.active?ae.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Un.has(this)&&(Un.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ni(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ys(this),Hi(this);const t=Z,n=Ae;Z=this,Ae=!0;try{return this.fn()}finally{Bi(this),Z=t,Ae=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$s(t);this.deps=this.depsTail=void 0,Ys(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Un.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ns(this)&&this.run()}get dirty(){return ns(this)}}let Li=0,Lt,Nt;function Ni(e,t=!1){if(e.flags|=8,t){e.next=Nt,Nt=e;return}e.next=Lt,Lt=e}function ks(){Li++}function ws(){if(--Li>0)return;if(Nt){let t=Nt;for(Nt=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;Lt;){let t=Lt;for(Lt=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=n}}if(e)throw e}function Hi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Bi(e){let t,n=e.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),$s(s),hl(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}e.deps=t,e.depsTail=n}function ns(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ki(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ki(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ut)||(e.globalVersion=Ut,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ns(e))))return;e.flags|=2;const t=e.dep,n=Z,s=Ae;Z=e,Ae=!0;try{Hi(e);const i=e.fn(e._value);(t.version===0||qe(i,e._value))&&(e.flags|=128,e._value=i,t.version++)}catch(i){throw t.version++,i}finally{Z=n,Ae=s,Bi(e),e.flags&=-3}}function $s(e,t=!1){const{dep:n,prevSub:s,nextSub:i}=e;if(s&&(s.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=s,e.nextSub=void 0),n.subs===e&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let o=n.computed.deps;o;o=o.nextDep)$s(o,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function hl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Ae=!0;const Vi=[];function Ge(){Vi.push(Ae),Ae=!1}function Ye(){const e=Vi.pop();Ae=e===void 0?!0:e}function Ys(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=Z;Z=void 0;try{t()}finally{Z=n}}}let Ut=0;class pl{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cs{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Z||!Ae||Z===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Z)n=this.activeLink=new pl(Z,this),Z.deps?(n.prevDep=Z.depsTail,Z.depsTail.nextDep=n,Z.depsTail=n):Z.deps=Z.depsTail=n,qi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Z.depsTail,n.nextDep=void 0,Z.depsTail.nextDep=n,Z.depsTail=n,Z.deps===n&&(Z.deps=s)}return n}trigger(t){this.version++,Ut++,this.notify(t)}notify(t){ks();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ws()}}}function qi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)qi(s)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ss=new WeakMap,xt=Symbol(""),is=Symbol(""),Wt=Symbol("");function de(e,t,n){if(Ae&&Z){let s=ss.get(e);s||ss.set(e,s=new Map);let i=s.get(n);i||(s.set(n,i=new Cs),i.map=s,i.key=n),i.track()}}function nt(e,t,n,s,i,o){const r=ss.get(e);if(!r){Ut++;return}const l=a=>{a&&a.trigger()};if(ks(),t==="clear")r.forEach(l);else{const a=j(e),m=a&&xs(n);if(a&&n==="length"){const f=Number(s);r.forEach((p,y)=>{(y==="length"||y===Wt||!ze(y)&&y>=f)&&l(p)})}else switch((n!==void 0||r.has(void 0))&&l(r.get(n)),m&&l(r.get(Wt)),t){case"add":a?m&&l(r.get("length")):(l(r.get(xt)),at(e)&&l(r.get(is)));break;case"delete":a||(l(r.get(xt)),at(e)&&l(r.get(is)));break;case"set":at(e)&&l(r.get(xt));break}}ws()}function Ct(e){const t=W(e);return t===e||(de(t,"iterate",Wt),$e(e))?t:Je(e)?ut(e)?t.map(n=>ft(Ce(n))):t.map(ft):t.map(Ce)}function Rn(e){return de(e=W(e),"iterate",Wt),e}function Be(e,t){return Je(e)?ft(ut(e)?Ce(t):t):Ce(t)}const ml={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,e=>Be(this,e))},concat(...e){return Ct(this).concat(...e.map(t=>j(t)?Ct(t):t))},entries(){return Wn(this,"entries",e=>(e[1]=Be(this,e[1]),e))},every(e,t){return Qe(this,"every",e,t,void 0,arguments)},filter(e,t){return Qe(this,"filter",e,t,n=>n.map(s=>Be(this,s)),arguments)},find(e,t){return Qe(this,"find",e,t,n=>Be(this,n),arguments)},findIndex(e,t){return Qe(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Qe(this,"findLast",e,t,n=>Be(this,n),arguments)},findLastIndex(e,t){return Qe(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Qe(this,"forEach",e,t,void 0,arguments)},includes(...e){return zn(this,"includes",e)},indexOf(...e){return zn(this,"indexOf",e)},join(e){return Ct(this).join(e)},lastIndexOf(...e){return zn(this,"lastIndexOf",e)},map(e,t){return Qe(this,"map",e,t,void 0,arguments)},pop(){return Ft(this,"pop")},push(...e){return Ft(this,"push",e)},reduce(e,...t){return Xs(this,"reduce",e,t)},reduceRight(e,...t){return Xs(this,"reduceRight",e,t)},shift(){return Ft(this,"shift")},some(e,t){return Qe(this,"some",e,t,void 0,arguments)},splice(...e){return Ft(this,"splice",e)},toReversed(){return Ct(this).toReversed()},toSorted(e){return Ct(this).toSorted(e)},toSpliced(...e){return Ct(this).toSpliced(...e)},unshift(...e){return Ft(this,"unshift",e)},values(){return Wn(this,"values",e=>Be(this,e))}};function Wn(e,t,n){const s=Rn(e),i=s[t],o=i.call(s);if(s!==e&&!$e(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const r=Object.create(Object.getPrototypeOf(o));return r.next=()=>Js(o.next(),n),i!==Ui[t]&&Object.defineProperties(r,{return:{get(){const l=o.return;return typeof l=="function"?l.bind(o):l}},throw:{get(){const l=o.throw;return typeof l=="function"?l.bind(o):l}}}),r}o._next=o.next,o.next=()=>Js(o._next(),n)}return o}function Js(e,t){return e.done||(e.value=t(e.value)),e}const Ui=Array.prototype;function Qe(e,t,n,s,i,o){const r=Rn(e),l=r!==e&&!$e(e),a=r[t];if(a!==Ui[t]){const p=a.apply(e,o);return l?Ce(p):p}let m=n;r!==e&&(l?m=function(p,y){return n.call(this,Be(e,p),y,e)}:n.length>2&&(m=function(p,y){return n.call(this,p,y,e)}));const f=a.call(r,m,s);return l&&i?i(f):f}function Xs(e,t,n,s){const i=Rn(e),o=i!==e&&!$e(e);let r=n,l=!1;i!==e&&(o?(l=s.length===0,r=function(m,f,p){return l&&(l=!1,m=Be(e,m)),n.call(this,m,Be(e,f),p,e)}):n.length>3&&(r=function(m,f,p){return n.call(this,m,f,p,e)}));const a=i[t](r,...s);return l?Be(e,a):a}function zn(e,t,n){const s=W(e);de(s,"iterate",Wt);const i=s[t](...n);return(i===-1||i===!1)&&Es(n[0])?(n[0]=W(n[0]),s[t](...n)):i}function Ft(e,t,n=[]){Ge(),ks();const s=W(e)[t].apply(e,n);return ws(),Ye(),s}const gl=vs("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ze));function _l(e){ze(e)||(e=String(e));const t=W(this);return de(t,"has",e),t.hasOwnProperty(e)}class zi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,s){if(n==="__v_skip")return t.__v_skip;const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return s===(i?o?Sl:Xi:o?Ji:Yi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=j(t);if(!i){let a;if(r&&(a=ml[n]))return a;if(n==="hasOwnProperty")return _l}const l=Reflect.get(t,n,he(t)?t:s);if((ze(n)?Wi.has(n):gl(n))||(i||de(t,"get",n),o))return l;if(he(l)){const a=r&&xs(n)?l:l.value;return i&&G(a)?ls(a):a}return G(l)?i?ls(l):nn(l):l}}class Gi extends zi{constructor(t=!1){super(!1,t)}set(t,n,s,i){let o=t[n];const r=j(t)&&xs(n);if(!this._isShallow){const m=Je(o);if(!$e(s)&&!Je(s)&&(o=W(o),s=W(s)),!r&&he(o)&&!he(s))return m||(o.value=s),!0}const l=r?Number(n)<t.length:U(t,n),a=Reflect.set(t,n,s,he(t)?t:i);return t===W(i)&&a&&(l?qe(s,o)&&nt(t,"set",n,s):nt(t,"add",n,s)),a}deleteProperty(t,n){const s=U(t,n);t[n];const i=Reflect.deleteProperty(t,n);return i&&s&&nt(t,"delete",n,void 0),i}has(t,n){const s=Reflect.has(t,n);return(!ze(n)||!Wi.has(n))&&de(t,"has",n),s}ownKeys(t){return de(t,"iterate",j(t)?"length":xt),Reflect.ownKeys(t)}}class yl extends zi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const vl=new Gi,bl=new yl,xl=new Gi(!0);const os=e=>e,dn=e=>Reflect.getPrototypeOf(e);function kl(e,t,n){return function(...s){const i=this.__v_raw,o=W(i),r=at(o),l=e==="entries"||e===Symbol.iterator&&r,a=e==="keys"&&r,m=i[e](...s),f=n?os:t?ft:Ce;return!t&&de(o,"iterate",a?is:xt),re(Object.create(m),{next(){const{value:p,done:y}=m.next();return y?{value:p,done:y}:{value:l?[f(p[0]),f(p[1])]:f(p),done:y}}})}}function hn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wl(e,t){const n={get(i){const o=this.__v_raw,r=W(o),l=W(i);e||(qe(i,l)&&de(r,"get",i),de(r,"get",l));const{has:a}=dn(r),m=t?os:e?ft:Ce;if(a.call(r,i))return m(o.get(i));if(a.call(r,l))return m(o.get(l));o!==r&&o.get(i)},get size(){const i=this.__v_raw;return!e&&de(W(i),"iterate",xt),i.size},has(i){const o=this.__v_raw,r=W(o),l=W(i);return e||(qe(i,l)&&de(r,"has",i),de(r,"has",l)),i===l?o.has(i):o.has(i)||o.has(l)},forEach(i,o){const r=this,l=r.__v_raw,a=W(l),m=t?os:e?ft:Ce;return!e&&de(a,"iterate",xt),l.forEach((f,p)=>i.call(o,m(f),m(p),r))}};return re(n,e?{add:hn("add"),set:hn("set"),delete:hn("delete"),clear:hn("clear")}:{add(i){const o=W(this),r=dn(o),l=W(i),a=!t&&!$e(i)&&!Je(i)?l:i;return r.has.call(o,a)||qe(i,a)&&r.has.call(o,i)||qe(l,a)&&r.has.call(o,l)||(o.add(a),nt(o,"add",a,a)),this},set(i,o){!t&&!$e(o)&&!Je(o)&&(o=W(o));const r=W(this),{has:l,get:a}=dn(r);let m=l.call(r,i);m||(i=W(i),m=l.call(r,i));const f=a.call(r,i);return r.set(i,o),m?qe(o,f)&&nt(r,"set",i,o):nt(r,"add",i,o),this},delete(i){const o=W(this),{has:r,get:l}=dn(o);let a=r.call(o,i);a||(i=W(i),a=r.call(o,i)),l&&l.call(o,i);const m=o.delete(i);return a&&nt(o,"delete",i,void 0),m},clear(){const i=W(this),o=i.size!==0,r=i.clear();return o&&nt(i,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=kl(i,e,t)}),n}function Ms(e,t){const n=wl(e,t);return(s,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?t:i==="__v_raw"?s:Reflect.get(U(n,i)&&i in s?n:s,i,o)}const $l={get:Ms(!1,!1)},Cl={get:Ms(!1,!0)},Ml={get:Ms(!0,!1)};const Yi=new WeakMap,Ji=new WeakMap,Xi=new WeakMap,Sl=new WeakMap;function El(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function nn(e){return Je(e)?e:Ss(e,!1,vl,$l,Yi)}function Ol(e){return Ss(e,!1,xl,Cl,Ji)}function ls(e){return Ss(e,!0,bl,Ml,Xi)}function Ss(e,t,n,s,i){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=i.get(e);if(o)return o;const r=El(Qo(e));if(r===0)return e;const l=new Proxy(e,r===2?s:n);return i.set(e,l),l}function ut(e){return Je(e)?ut(e.__v_raw):!!(e&&e.__v_isReactive)}function Je(e){return!!(e&&e.__v_isReadonly)}function $e(e){return!!(e&&e.__v_isShallow)}function Es(e){return e?!!e.__v_raw:!1}function W(e){const t=e&&e.__v_raw;return t?W(t):e}function Tl(e){return!U(e,"__v_skip")&&Object.isExtensible(e)&&Fi(e,"__v_skip",!0),e}const Ce=e=>G(e)?nn(e):e,ft=e=>G(e)?ls(e):e;function he(e){return e?e.__v_isRef===!0:!1}function ke(e){return Al(e,!1)}function Al(e,t){return he(e)?e:new Il(e,t)}class Il{constructor(t,n){this.dep=new Cs,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:W(t),this._value=n?t:Ce(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,s=this.__v_isShallow||$e(t)||Je(t);t=s?t:W(t),qe(t,n)&&(this._rawValue=t,this._value=s?t:Ce(t),this.dep.trigger())}}function E(e){return he(e)?e.value:e}const Fl={get:(e,t,n)=>t==="__v_raw"?e:E(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const i=e[t];return he(i)&&!he(n)?(i.value=n,!0):Reflect.set(e,t,n,s)}};function Zi(e){return ut(e)?e:new Proxy(e,Fl)}class Dl{constructor(t,n,s){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Cs(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ut-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return Ni(this,!0),!0}get value(){const t=this.dep.track();return Ki(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Pl(e,t,n=!1){let s,i;return N(e)?s=e:(s=e.get,i=e.set),new Dl(s,i,n)}const pn={},bn=new WeakMap;let _t;function Rl(e,t=!1,n=_t){if(n){let s=bn.get(n);s||bn.set(n,s=[]),s.push(e)}}function jl(e,t,n=Q){const{immediate:s,deep:i,once:o,scheduler:r,augmentJob:l,call:a}=n,m=A=>i?A:$e(A)||i===!1||i===0?rt(A,1):rt(A);let f,p,y,T,B=!1,F=!1;if(he(e)?(p=()=>e.value,B=$e(e)):ut(e)?(p=()=>m(e),B=!0):j(e)?(F=!0,B=e.some(A=>ut(A)||$e(A)),p=()=>e.map(A=>{if(he(A))return A.value;if(ut(A))return m(A);if(N(A))return a?a(A,2):A()})):N(e)?t?p=a?()=>a(e,2):e:p=()=>{if(y){Ge();try{y()}finally{Ye()}}const A=_t;_t=f;try{return a?a(e,3,[T]):e(T)}finally{_t=A}}:p=We,t&&i){const A=p,te=i===!0?1/0:i;p=()=>rt(A(),te)}const P=dl(),V=()=>{f.stop(),P&&P.active&&bs(P.effects,f)};if(o&&t){const A=t;t=(...te)=>{try{return A(...te)}finally{V()}}}let L=F?new Array(e.length).fill(pn):pn;const H=A=>{if(!(!(f.flags&1)||!f.dirty&&!A))if(t){const te=f.run();if(A||i||B||(F?te.some((Xe,je)=>qe(Xe,L[je])):qe(te,L))){const Xe=_t;Ge();try{y&&y(),_t=f;const je=[te,L===pn?void 0:F&&L[0]===pn?[]:L,T];L=te,a?a(t,3,je):t(...je)}finally{_t=Xe,Ye()}}}else f.run()};return l&&l(H),f=new ji(p),f.scheduler=r?()=>r(H,!1):H,T=A=>Rl(A,!1,f),y=f.onStop=()=>{const A=bn.get(f);if(A){if(a)a(A,4);else for(const te of A)te();bn.delete(f)}},t?s?H(!0):L=f.run():r?r(H.bind(null,!0),!0):f.run(),V.pause=f.pause.bind(f),V.resume=f.resume.bind(f),V.stop=V,V}function rt(e,t=1/0,n){if(t<=0||!G(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,he(e))rt(e.value,t,n);else if(j(e))for(let s=0;s<e.length;s++)rt(e[s],t,n);else if(vn(e)||at(e))e.forEach(s=>{rt(s,t,n)});else if(Ai(e)){for(const s in e)rt(e[s],t,n);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&rt(e[s],t,n)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sn(e,t,n,s){try{return s?e(...s):e()}catch(i){jn(i,t,n)}}function De(e,t,n,s){if(N(e)){const i=sn(e,t,n,s);return i&&Oi(i)&&i.catch(o=>{jn(o,t,n,void 0,!0)}),i}if(j(e)){const i=[];for(let o=0;o<e.length;o++)i.push(De(e[o],t,n,s));return i}}function jn(e,t,n,s=!0,i=!1){const o=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||Q;if(t){let a=t.parent;const m=t.proxy,f=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const p=a.ec;if(p&&!a.isUnmounted&&(!i||a.scope.active)){for(let y=0;y<p.length;y++)if(p[y](e,m,f)===!1)return}a=a.parent}if(r){Ge(),sn(r,null,10,[e,m,f]),Ye();return}}Ll(e,n,o,s,l)}function Ll(e,t,n,s=!0,i=!1){if(i)throw e;console.error(e)}const _e=[];let Ee=-1;const Ke=[];let lt=null,St=0;const Qi=Promise.resolve();let xn=null;function eo(e){const t=xn||Qi;return e?t.then(this?e.bind(this):e):t}function Nl(e){let t=Ee+1,n=_e.length;for(;t<n;){const s=t+n>>>1,i=_e[s],o=zt(i);o<e||o===e&&i.flags&2?t=s+1:n=s}return t}function Os(e){if(!(e.flags&1)){const t=zt(e),n=_e[_e.length-1];!n||!(e.flags&2)&&t>=zt(n)?_e.push(e):_e.splice(Nl(t),0,e),e.flags|=1,to()}}function to(){xn||(xn=Qi.then(io))}function Hl(e){if(!j(e))lt&&e.id===-1?lt.splice(St+1,0,e):e.flags&1||(Ke.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)Ke.push(e[t]);to()}function no(e,t,n,s=Ee+1){for(;s<_e.length;s++){const i=_e[s];if(i&&i.flags&2){if(e&&i.id!==e.uid||t!==void 0&&!(i.id>=t))continue;_e.splice(s,1),s=e?s-1:Ee,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function so(e,t,n=0){if(Ke.length){let s=Ke,i=0;if(t){s=[];for(let r=0;r<Ke.length;r++){const l=Ke[r];(l.i!==void 0?!l.i||l.i.uid<n:t.has(l))?Ke[i++]=l:s.push(l)}}const o=[...new Set(s)].sort((r,l)=>zt(r)-zt(l));if(Ke.length=i,lt){for(let r=0;r<o.length;r++)lt.push(o[r]);return}for(lt=o,St=0;St<lt.length;St++){const r=lt[St];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}lt=null,St=0}}let Gn=!1;function Bl(e,t){if(Gn){e();return}const n=t===void 0?void 0:new Set(Ke);e(),Gn=!0;try{no(void 0,t),so(void 0,n,t)}finally{Gn=!1}}const zt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function io(e){try{for(Ee=0;Ee<_e.length;Ee++){const t=_e[Ee];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),sn(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ee<_e.length;Ee++){const t=_e[Ee];t&&(t.flags&=-2)}Ee=-1,_e.length=0,so(),xn=null,(_e.length||Ke.length)&&io()}}let Ue=null,oo=null;function kn(e){const t=Ue;return Ue=e,oo=e&&e.type.__scopeId||null,t}function Kl(e,t=Ue,n){if(!t||e._n)return e;const s=(...i)=>{s._d&&ci(-1);const o=kn(t),r=kt.length;let l;try{l=e(...i)}finally{for(let a=kt.length;a>r;a--)To();kn(o),s._d&&ci(1)}return l};return s._n=!0,s._c=!0,s._d=!0,s}function mt(e,t,n,s){let i=e;if(s==="beforeMount")e._mount=e;else if(s==="beforeUpdate"){const l=t&&t._mount;l&&(l._latest=e,e._mount=l)}else if(s==="mounted"){const l=e._latest;e._mount=e._latest=void 0,l&&(i=l,l._mount=void 0)}const o=i.dirs,r=t&&t.dirs;for(let l=0;l<o.length;l++){let a=o[l];r?a.oldValue=r[l].value:s==="mounted"&&a.oldValue!==void 0&&(a=re({},a,{oldValue:void 0}));let m=a.dir[s];m&&(Ge(),De(m,n,8,[e.el,a,i,t]),Ye())}}function Vl(e,t){if(ye){let n=ye.provides;const s=ye.parent&&ye.parent.provides;s===n&&(n=ye.provides=Object.create(s)),n[e]=t}}function gn(e,t,n=!1){const s=Br();if(s||Et){let i=Et?Et._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return n&&N(t)?t.call(s&&s.proxy):t}}const ql=Symbol.for("v-scx"),Ul=()=>gn(ql);function _n(e,t,n){return lo(e,t,n)}function lo(e,t,n=Q){const{immediate:s,deep:i,flush:o,once:r}=n,l=re({},n),a=t&&s||!t&&o!=="post";let m;if(Xt){if(o==="sync"){const T=Ul();m=T.__watcherHandles||(T.__watcherHandles=[])}else if(!a){const T=()=>{};return T.stop=We,T.resume=We,T.pause=We,T}}const f=ye;l.call=(T,B,F)=>De(T,f,B,F);let p=!1;o==="post"?l.scheduler=T=>{T.i=f,ge(T,f&&f.suspense)}:o!=="sync"&&(p=!0,l.scheduler=(T,B)=>{B?T():Os(T)}),l.augmentJob=T=>{t&&(T.flags|=4),p&&(T.flags|=2,f&&(T.id=f.uid,T.i=f))};const y=jl(e,t,l);return Xt&&(m?m.push(y):a&&y()),y}function Wl(e,t,n){const s=this.proxy,i=se(e)?e.includes(".")?ro(s,e):()=>s[e]:e.bind(s,s);let o;N(t)?o=t:(o=t.handler,n=t);const r=on(this),l=lo(i,o.bind(s),n);return r(),l}function ro(e,t){const n=t.split(".");return()=>{let s=e;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const zl=Symbol("_vte"),Ln=e=>e.__isTeleport,Yn=Symbol("_leaveCb");function Gl(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Pe){t=n;break}}return t}function co(e){if(!Ts(e))return Ln(e.type)&&e.children?Gl(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&N(n.default))return n.default()}}function Ht(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;Ht(Ln(n.type)&&co(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const s=n.isHydrating?n.pendingBranch:n.activeBranch;s&&Ht(s,t.clone(s))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===q&&j(e.children)){const n=_o(e.children,!1);n&&Ht(n,t)}}function rs(e){if(e.component)return rs(e.component.subTree);if(e.type===q){const t=j(e.children)&&_o(e.children,!1);return t?rs(t):void 0}if(e.type!==Pe)return e}function ao(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Zs(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const wn=new WeakMap;function Bt(e,t,n,s,i=!1){if(j(e)){e.forEach((F,P)=>Bt(F,t&&(j(t)?t[P]:t),n,s,i));return}if(Kt(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Bt(e,t,n,s.component.subTree);return}const o=s.shapeFlag&4?Ds(s.component):s.el,r=i?null:o,{i:l,r:a}=e,m=t&&t.r,f=l.refs===Q?l.refs={}:l.refs,p=l.setupState,y=W(p),T=p===Q?Ei:F=>Zs(f,F)?!1:U(y,F),B=(F,P)=>!(P&&Zs(f,P));if(m!=null&&m!==a){if(Qs(t),se(m))f[m]=null,T(m)&&(p[m]=null);else if(he(m)){const F=t;B(m,F.k)&&(m.value=null),F.k&&(f[F.k]=null)}}if(N(a))sn(a,l,12,[r,f]);else{const F=se(a),P=he(a);if(F||P){const V=()=>{if(e.f){const L=F?T(a)?p[a]:f[a]:B()||!e.k?a.value:f[e.k];if(i)j(L)&&bs(L,o);else if(j(L))L.includes(o)||L.push(o);else if(F)f[a]=[o],T(a)&&(p[a]=f[a]);else{const H=[o];B(a,e.k)&&(a.value=H),e.k&&(f[e.k]=H)}}else F?(f[a]=r,T(a)&&(p[a]=r)):P&&(B(a,e.k)&&(a.value=r),e.k&&(f[e.k]=r))};if(r){const L=()=>{V(),wn.delete(e)};L.id=-1,wn.set(e,L),ge(L,n)}else Qs(e),V()}}}function Qs(e){const t=wn.get(e);t&&(t.flags|=8,wn.delete(e))}Dn().requestIdleCallback;Dn().cancelIdleCallback;const Kt=e=>!!e.type.__asyncLoader,Ts=e=>e.type.__isKeepAlive;function Yl(e,t){uo(e,"a",t)}function Jl(e,t){uo(e,"da",t)}function uo(e,t,n=ye){const s=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Gt(t,s,n),n){let i=n.parent;for(;i&&i.parent;)Ts(i.parent.vnode)&&Xl(s,t,n,i),i=i.parent}}function Xl(e,t,n,s){const i=Gt(t,e,s,!0),o=Gt("um",()=>bs(s[t],i),n);o.flags=16}function Gt(e,t,n=ye,s=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Ge();const l=on(n),a=De(t,n,e,r);return l(),Ye(),a});return s?i.unshift(o):i.push(o),o}}const it=e=>(t,n=ye)=>{(!Xt||e==="sp")&&Gt(e,(...s)=>t(...s),n)},Zl=it("bm"),fo=it("m"),Ql=it("bu"),er=it("u"),tr=it("bum"),nr=it("um"),sr=it("sp"),ir=it("rtg"),or=it("rtc");function lr(e,t=ye){Gt("ec",e,t)}const rr=Symbol.for("v-ndc");function oe(e,t,n,s){let i;const o=n,r=j(e);if(r||se(e)){const l=r&&ut(e);let a=!1,m=!1;l&&(a=!$e(e),m=Je(e),e=Rn(e)),i=new Array(e.length);for(let f=0,p=e.length;f<p;f++)i[f]=t(a?m?ft(Ce(e[f])):Ce(e[f]):e[f],f,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let l=0;l<e;l++)i[l]=t(l+1,l,void 0,o)}else if(G(e))if(e[Symbol.iterator])i=Array.from(e,(l,a)=>t(l,a,void 0,o));else{const l=Object.keys(e);i=new Array(l.length);for(let a=0,m=l.length;a<m;a++){const f=l[a];i[a]=t(e[f],f,a,o)}}else i=[];return i}const cs=e=>e?Do(e)?Ds(e):cs(e.parent):null,Vt=re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>cs(e.parent),$root:e=>cs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>po(e),$forceUpdate:e=>e.f||(e.f=()=>{Os(e.update)}),$nextTick:e=>e.n||(e.n=eo.bind(e.proxy)),$watch:e=>Wl.bind(e)}),Jn=(e,t)=>e!==Q&&!e.__isScriptSetup&&U(e,t),cr={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:o,accessCache:r,type:l,appContext:a}=e;if(t[0]!=="$"){const y=r[t];if(y!==void 0)switch(y){case 1:return s[t];case 2:return i[t];case 4:return n[t];case 3:return o[t]}else{if(Jn(s,t))return r[t]=1,s[t];if(i!==Q&&U(i,t))return r[t]=2,i[t];if(U(o,t))return r[t]=3,o[t];if(n!==Q&&U(n,t))return r[t]=4,n[t];as&&(r[t]=0)}}const m=Vt[t];let f,p;if(m)return t==="$attrs"&&de(e.attrs,"get",""),m(e);if((f=l.__cssModules)&&(f=f[t]))return f;if(n!==Q&&U(n,t))return r[t]=4,n[t];if(p=a.config.globalProperties,U(p,t))return p[t]},set({_:e},t,n){const{data:s,setupState:i,ctx:o}=e;return Jn(i,t)?(i[t]=n,!0):s!==Q&&U(s,t)?(s[t]=n,!0):U(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:i,props:o,type:r}},l){let a;return!!(n[l]||e!==Q&&l[0]!=="$"&&U(e,l)||Jn(t,l)||U(o,l)||U(s,l)||U(Vt,l)||U(i.config.globalProperties,l)||(a=r.__cssModules)&&a[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:U(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function ei(e){return j(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let as=!0;function ar(e){const t=po(e),n=e.proxy,s=e.ctx;as=!1,t.beforeCreate&&ti(t.beforeCreate,e,"bc");const{data:i,computed:o,methods:r,watch:l,provide:a,inject:m,created:f,beforeMount:p,mounted:y,beforeUpdate:T,updated:B,activated:F,deactivated:P,beforeDestroy:V,beforeUnmount:L,destroyed:H,unmounted:A,render:te,renderTracked:Xe,renderTriggered:je,errorCaptured:ot,serverPrefetch:rn,expose:dt,inheritAttrs:Tt,components:cn,directives:an,filters:Bn}=t;if(m&&ur(m,s,null),r)for(const ne in r){const X=r[ne];N(X)&&(s[ne]=X.bind(n))}if(i){const ne=i.call(n,n);G(ne)&&(e.data=nn(ne))}if(as=!0,o)for(const ne in o){const X=o[ne],ht=N(X)?X.bind(n,n):N(X.get)?X.get.bind(n,n):We,un=!N(X)&&N(X.set)?X.set.bind(n):We,pt=J({get:ht,set:un});Object.defineProperty(s,ne,{enumerable:!0,configurable:!0,get:()=>pt.value,set:Me=>pt.value=Me})}if(l)for(const ne in l)ho(l[ne],s,n,ne);if(a){const ne=N(a)?a.call(n):a;Reflect.ownKeys(ne).forEach(X=>{Vl(X,ne[X])})}f&&ti(f,e,"c");function pe(ne,X){j(X)?X.forEach(ht=>ne(ht.bind(n))):X&&ne(X.bind(n))}if(pe(Zl,p),pe(fo,y),pe(Ql,T),pe(er,B),pe(Yl,F),pe(Jl,P),pe(lr,ot),pe(or,Xe),pe(ir,je),pe(tr,L),pe(nr,A),pe(sr,rn),j(dt))if(dt.length){const ne=e.exposed||(e.exposed={});dt.forEach(X=>{Object.defineProperty(ne,X,{get:()=>n[X],set:ht=>n[X]=ht,enumerable:!0})})}else e.exposed||(e.exposed={});te&&e.render===We&&(e.render=te),Tt!=null&&(e.inheritAttrs=Tt),cn&&(e.components=cn),an&&(e.directives=an),rn&&ao(e)}function ur(e,t,n=We){j(e)&&(e=us(e));for(const s in e){const i=e[s];let o;G(i)?"default"in i?o=gn(i.from||s,i.default,!0):o=gn(i.from||s):o=gn(i),he(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function ti(e,t,n){De(j(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,s){let i=s.includes(".")?ro(n,s):()=>n[s];if(se(e)){const o=t[e];N(o)&&_n(i,o)}else if(N(e))_n(i,e.bind(n));else if(G(e))if(j(e))e.forEach(o=>ho(o,t,n,s));else{const o=N(e.handler)?e.handler.bind(n):t[e.handler];N(o)&&_n(i,o,e)}}function po(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let a;return l?a=l:!i.length&&!n&&!s?a=t:(a={},i.length&&i.forEach(m=>$n(a,m,r,!0)),$n(a,t,r)),G(t)&&o.set(t,a),a}function $n(e,t,n,s=!1){const{mixins:i,extends:o}=t;o&&$n(e,o,n,!0),i&&i.forEach(r=>$n(e,r,n,!0));for(const r in t)if(!(s&&r==="expose")){const l=fr[r]||n&&n[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const fr={data:ni,props:si,emits:si,methods:Pt,computed:Pt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:Pt,directives:Pt,watch:hr,provide:ni,inject:dr};function ni(e,t){return t?e?function(){return re(N(e)?e.call(this,this):e,N(t)?t.call(this,this):t)}:t:e}function dr(e,t){return Pt(us(e),us(t))}function us(e){if(j(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function Pt(e,t){return e?re(Object.create(null),e,t):t}function si(e,t){return e?j(e)&&j(t)?[...new Set([...e,...t])]:re(Object.create(null),ei(e),ei(t??{})):t}function hr(e,t){if(!e)return t;if(!t)return e;const n=re(Object.create(null),e);for(const s in t)n[s]=me(e[s],t[s]);return n}function mo(){return{app:null,config:{isNativeTag:Ei,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pr=0;function mr(e,t){return function(s,i=null){N(s)||(s=re({},s)),i!=null&&!G(i)&&(i=null);const o=mo(),r=new WeakSet,l=[];let a=!1;const m=o.app={_uid:pr++,_component:s,_props:i,_container:null,_context:o,_instance:null,version:zr,get config(){return o.config},set config(f){},use(f,...p){return r.has(f)||(f&&N(f.install)?(r.add(f),f.install(m,...p)):N(f)&&(r.add(f),f(m,...p))),m},mixin(f){return o.mixins.includes(f)||o.mixins.push(f),m},component(f,p){return p?(o.components[f]=p,m):o.components[f]},directive(f,p){return p?(o.directives[f]=p,m):o.directives[f]},mount(f,p,y){if(!a){const T=m._ceVNode||Ie(s,i);return T.appContext=o,y===!0?y="svg":y===!1&&(y=void 0),e(T,f,y),a=!0,m._container=f,f.__vue_app__=m,Ds(T.component)}},onUnmount(f){l.push(f)},unmount(){a&&(De(l,m._instance,16),e(null,m._container),delete m._container.__vue_app__)},provide(f,p){return o.provides[f]=p,m},runWithContext(f){const p=Et;Et=m;try{return f()}finally{Et=p}}};return m}}let Et=null;const gr=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Te(t)}Modifiers`]||e[`${wt(t)}Modifiers`];function _r(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||Q;let i=n;const o=t.startsWith("update:"),r=o&&gr(s,t.slice(7));r&&(r.trim&&(i=n.map(f=>se(f)?f.trim():f)),r.number&&(i=i.map(nl)));let l,a=s[l=Kn(t)]||s[l=Kn(Te(t))];!a&&o&&(a=s[l=Kn(wt(t))]),a&&De(a,e,6,i);const m=s[l+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,De(m,e,6,i)}}const yr=new WeakMap;function go(e,t,n=!1){const s=n?yr:t.emitsCache,i=s.get(e);if(i!==void 0)return i;const o=e.emits;let r={},l=!1;if(!N(e)){const a=m=>{const f=go(m,t,!0);f&&(l=!0,re(r,f))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!o&&!l?(G(e)&&s.set(e,null),null):(j(o)?o.forEach(a=>r[a]=null):re(r,o),G(e)&&s.set(e,r),r)}function Nn(e,t){return!e||!An(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),U(e,t[0].toLowerCase()+t.slice(1))||U(e,wt(t))||U(e,t))}function ii(e){const{type:t,vnode:n,proxy:s,withProxy:i,propsOptions:[o],slots:r,attrs:l,emit:a,render:m,renderCache:f,props:p,data:y,setupState:T,ctx:B,inheritAttrs:F}=e,P=kn(e);let V,L;try{if(n.shapeFlag&4){const A=i||s,te=A;V=Ve(m.call(te,A,f,p,T,y,B)),L=l}else{const A=t;V=Ve(A.length>1?A(p,{attrs:l,slots:r,emit:a}):A(p,null)),L=t.props?l:vr(l)}}catch(A){kt.length=0,jn(A,e,1),V=Ie(Pe)}let H=V;if(L&&F!==!1){const A=Object.keys(L),{shapeFlag:te}=H;A.length&&te&7&&(o&&A.some(In)&&(L=br(L,o)),H=Ot(H,L,!1,!0))}if(n.dirs&&(H=Ot(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition){const A=Ln(H.type)&&co(H)||H;Ht(A,n.transition)}return V=H,kn(P),V}function _o(e,t=!0){let n;for(let s=0;s<e.length;s++){const i=e[s];if(Fs(i)){if(i.type!==Pe||i.children==="v-if"){if(n)return;n=i}}else return}return n}const vr=e=>{let t;for(const n in e)(n==="class"||n==="style"||An(n))&&((t||(t={}))[n]=e[n]);return t},br=(e,t)=>{const n={};for(const s in e)(!In(s)||!(s.slice(9)in t))&&(n[s]=e[s]);return n};function xr(e,t,n){const{props:s,children:i,component:o}=e,{props:r,children:l,patchFlag:a}=t,m=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?oi(s,r,m):!!r;if(a&8){const f=t.dynamicProps;for(let p=0;p<f.length;p++){const y=f[p];if(yo(r,s,y)&&!Nn(m,y))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?oi(s,r,m):!0:!!r;return!1}function oi(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let i=0;i<s.length;i++){const o=s[i];if(!U(e,o)||yo(t,e,o)&&!Nn(n,o))return!0}return!1}function yo(e,t,n){const s=e[n],i=t[n];return n==="style"&&G(s)&&G(i)?!Pn(s,i):s!==i}function kr({vnode:e,parent:t,suspense:n},s){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=s,e=i),i===e)(e=t.vnode).el=s,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=s)}const vo={},bo=()=>Object.create(vo),xo=e=>Object.getPrototypeOf(e)===vo;function wr(e,t,n,s=!1){const i={},o=bo();e.propsDefaults=Object.create(null),ko(e,t,i,o);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);n?e.props=s?i:Ol(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function $r(e,t,n,s){const{props:i,attrs:o,vnode:{patchFlag:r}}=e,l=W(i),[a]=e.propsOptions;let m=!1;if((s||r>0)&&!(r&16)){if(r&8){const f=e.vnode.dynamicProps;for(let p=0;p<f.length;p++){let y=f[p];if(Nn(e.emitsOptions,y))continue;const T=t[y];if(a)if(U(o,y))T!==o[y]&&(o[y]=T,m=!0);else{const B=Te(y);i[B]=fs(a,l,B,T,e,!1)}else T!==o[y]&&(o[y]=T,m=!0)}}}else{ko(e,t,i,o)&&(m=!0);let f;for(const p in l)(!t||!U(t,p)&&((f=wt(p))===p||!U(t,f)))&&(a?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=fs(a,l,p,void 0,e,!0)):delete i[p]);if(o!==l)for(const p in o)(!t||!U(t,p))&&(delete o[p],m=!0)}m&&nt(e.attrs,"set","")}function ko(e,t,n,s){const[i,o]=e.propsOptions;let r=!1,l;if(t)for(let a in t){if(jt(a))continue;const m=t[a];let f;i&&U(i,f=Te(a))?!o||!o.includes(f)?n[f]=m:(l||(l={}))[f]=m:Nn(e.emitsOptions,a)||(!(a in s)||m!==s[a])&&(s[a]=m,r=!0)}if(o){const a=W(n),m=l||Q;for(let f=0;f<o.length;f++){const p=o[f];n[p]=fs(i,a,p,m[p],e,!U(m,p))}}return r}function fs(e,t,n,s,i,o){const r=e[n];if(r!=null){const l=U(r,"default");if(l&&s===void 0){const a=r.default;if(r.type!==Function&&!r.skipFactory&&N(a)){const{propsDefaults:m}=i;if(n in m)s=m[n];else{const f=on(i);s=m[n]=a.call(null,t),f()}}else s=a;i.ce&&i.ce._setProp(n,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===wt(n))&&(s=!0))}return s}const Cr=new WeakMap;function wo(e,t,n=!1){const s=n?Cr:t.propsCache,i=s.get(e);if(i)return i;const o=e.props,r={},l=[];let a=!1;if(!N(e)){const f=p=>{a=!0;const[y,T]=wo(p,t,!0);re(r,y),T&&l.push(...T)};!n&&t.mixins.length&&t.mixins.forEach(f),e.extends&&f(e.extends),e.mixins&&e.mixins.forEach(f)}if(!o&&!a)return G(e)&&s.set(e,vt),vt;if(j(o))for(let f=0;f<o.length;f++){const p=Te(o[f]);li(p)&&(r[p]=Q)}else if(o)for(const f in o){const p=Te(f);if(li(p)){const y=o[f],T=r[p]=j(y)||N(y)?{type:y}:re({},y),B=T.type;let F=!1,P=!0;if(j(B))for(let V=0;V<B.length;++V){const L=B[V],H=N(L)&&L.name;if(H==="Boolean"){F=!0;break}else H==="String"&&(P=!1)}else F=N(B)&&B.name==="Boolean";T[0]=F,T[1]=P,(F||U(T,"default"))&&l.push(p)}}const m=[r,l];return G(e)&&s.set(e,m),m}function li(e){return e[0]!=="$"&&!jt(e)}const As=e=>e==="_"||e==="_ctx"||e==="$stable",Is=e=>j(e)?e.map(Ve):[Ve(e)],Mr=(e,t,n)=>{if(t._n)return t;const s=Kl((...i)=>Is(t(...i)),n);return s._c=!1,s},$o=(e,t,n)=>{const s=e._ctx;for(const i in e){if(As(i))continue;const o=e[i];if(N(o))t[i]=Mr(i,o,s);else if(o!=null){const r=Is(o);t[i]=()=>r}}},Co=(e,t)=>{const n=Is(t);e.slots.default=()=>n},Mo=(e,t,n)=>{for(const s in t)(n||!As(s))&&(e[s]=t[s])},Sr=(e,t,n)=>{const s=e.slots=bo();if(e.vnode.shapeFlag&32){const i=t._;i?(Mo(s,t,n),n&&Fi(s,"_",i,!0)):$o(t,s)}else t&&Co(e,t)},Er=(e,t,n)=>{const{vnode:s,slots:i}=e;let o=!0,r=Q;if(s.shapeFlag&32){const l=t._;l?n&&l===1?o=!1:Mo(i,t,n):(o=!t.$stable,$o(t,i)),r=t}else t&&(Co(e,t),r={default:1});if(o)for(const l in i)!As(l)&&r[l]==null&&delete i[l]},ge=Dr;function Or(e){return Tr(e)}function Tr(e,t){const n=Dn();n.__VUE__=!0;const{insert:s,remove:i,patchProp:o,createElement:r,createText:l,createComment:a,setText:m,setElementText:f,parentNode:p,nextSibling:y,setScopeId:T=We,insertStaticContent:B}=e,F=(d,h,_,k=null,v=null,x=null,S=void 0,M=null,C=!!h.dynamicChildren)=>{if(d===h)return;d&&!Dt(d,h)&&(k=fn(d),Me(d,v,x,!0),d=null),h.patchFlag===-2&&(C=!1,h.dynamicChildren=null),h.dynamicChildren&&d&&d.dynamicChildren&&d.dynamicChildren.hasOnce&&(h.dynamicChildren===vt&&(h.dynamicChildren=[]),h.dynamicChildren.hasOnce=!0);const{type:b,ref:I,shapeFlag:O}=h;switch(b){case Hn:P(d,h,_,k);break;case Pe:V(d,h,_,k);break;case Zn:d==null&&L(h,_,k,S);break;case q:cn(d,h,_,k,v,x,S,M,C);break;default:O&1?te(d,h,_,k,v,x,S,M,C):O&6?an(d,h,_,k,v,x,S,M,C):(O&64||O&128)&&b.process(d,h,_,k,v,x,S,M,C,It)}I!=null&&v?Bt(I,d&&d.ref,x,h||d,!h):I==null&&d&&d.ref!=null&&Bt(d.ref,null,x,d,!0)},P=(d,h,_,k)=>{if(d==null)s(h.el=l(h.children),_,k);else{const v=h.el=d.el;h.children!==d.children&&m(v,h.children)}},V=(d,h,_,k)=>{d==null?s(h.el=a(h.children||""),_,k):h.el=d.el},L=(d,h,_,k)=>{[d.el,d.anchor]=B(d.children,h,_,k,d.el,d.anchor)},H=({el:d,anchor:h},_,k)=>{let v;for(;d&&d!==h;)v=y(d),s(d,_,k),d=v;s(h,_,k)},A=({el:d,anchor:h})=>{let _;for(;d&&d!==h;)_=y(d),i(d),d=_;i(h)},te=(d,h,_,k,v,x,S,M,C)=>{if(h.type==="svg"?S="svg":h.type==="math"&&(S="mathml"),d==null)Xe(h,_,k,v,x,S,M,C);else{const b=d.el&&d.el._isVueCE?d.el:null;try{b&&b._beginPatch(),rn(d,h,v,x,S,M,C)}finally{b&&b._endPatch()}}},Xe=(d,h,_,k,v,x,S,M)=>{let C,b;const{props:I,shapeFlag:O,transition:D,dirs:R}=d;if(C=d.el=r(d.type,x,I&&I.is,I),O&8?f(C,d.children):O&16&&ot(d.children,C,null,k,v,Xn(d,x),S,M),R&&mt(d,null,k,"created"),je(C,d,d.scopeId,S,k),I){for(const Y in I)Y!=="value"&&!jt(Y)&&o(C,Y,null,I[Y],x,k);"value"in I&&o(C,"value",null,I.value,x),(b=I.onVnodeBeforeMount)&&He(b,k,d)}R&&mt(d,null,k,"beforeMount");const K=Ar(v,D);K?D.beforeEnter(C):D&&!D.persisted&&(C[Fr]=!0),s(C,h,_),((b=I&&I.onVnodeMounted)||K||R)&&ge(()=>{try{b&&He(b,k,d),K&&D.enter(C),R&&mt(d,null,k,"mounted")}finally{}},v)},je=(d,h,_,k,v)=>{if(_&&T(d,_),k)for(let x=0;x<k.length;x++)T(d,k[x]);if(v){let x=v.subTree;if(h===x||Oo(x.type)&&(x.ssContent===h||x.ssFallback===h)){const S=v.vnode;je(d,S,S.scopeId,S.slotScopeIds,v.parent)}}},ot=(d,h,_,k,v,x,S,M,C=0)=>{for(let b=C;b<d.length;b++){const I=d[b]=M?tt(d[b]):Ve(d[b]);F(null,I,h,_,k,v,x,S,M)}},rn=(d,h,_,k,v,x,S)=>{const M=h.el=d.el;let{patchFlag:C,dynamicChildren:b,dirs:I}=h;C|=d.patchFlag&16;const O=d.props||Q,D=h.props||Q;let R;if(_&&gt(_,!1),(R=D.onVnodeBeforeUpdate)&&He(R,_,h,d),I&&mt(h,d,_,"beforeUpdate"),_&&gt(_,!0),b&&(!d.dynamicChildren||d.dynamicChildren.length!==b.length)&&(C=0,S=!1,b=null),(O.innerHTML&&D.innerHTML==null||O.textContent&&D.textContent==null)&&f(M,""),b?dt(d.dynamicChildren,b,M,_,k,Xn(h,v),x):S||X(d,h,M,null,_,k,Xn(h,v),x,!1),C>0){if(C&16)Tt(M,O,D,_,v);else if(C&2&&O.class!==D.class&&o(M,"class",null,D.class,v),C&4&&o(M,"style",O.style,D.style,v),C&8){const K=h.dynamicProps;for(let Y=0;Y<K.length;Y++){const z=K[Y],ie=O[z],ce=D[z];(ce!==ie||z==="value")&&o(M,z,ie,ce,v,_)}}C&1&&d.children!==h.children&&f(M,h.children)}else!S&&b==null&&Tt(M,O,D,_,v);((R=D.onVnodeUpdated)||I)&&ge(()=>{R&&He(R,_,h,d),I&&mt(h,d,_,"updated")},k)},dt=(d,h,_,k,v,x,S)=>{for(let M=0;M<h.length;M++){const C=d[M],b=h[M],I=C.el||qt(C),O=I&&(C.type===q||!Dt(C,b)||C.shapeFlag&198)?p(I):_;F(C,b,O,null,k,v,x,S,!0)}},Tt=(d,h,_,k,v)=>{if(h!==_){if(h!==Q)for(const x in h)!jt(x)&&!(x in _)&&o(d,x,h[x],null,v,k);for(const x in _){if(jt(x))continue;const S=_[x],M=h[x];S!==M&&x!=="value"&&o(d,x,M,S,v,k)}"value"in _&&o(d,"value",h.value,_.value,v)}},cn=(d,h,_,k,v,x,S,M,C)=>{const b=h.el=d?d.el:l(""),I=h.anchor=d?d.anchor:l("");let{patchFlag:O,dynamicChildren:D,slotScopeIds:R}=h;R&&(M=M?M.concat(R):R),d==null?(s(b,_,k),s(I,_,k),ot(h.children||[],_,I,v,x,S,M,C)):O>0&&O&64&&D&&d.dynamicChildren&&d.dynamicChildren.length===D.length?(dt(d.dynamicChildren,D,_,v,x,S,M),(h.key!=null||v&&h===v.subTree)&&So(d,h,!0)):X(d,h,_,I,v,x,S,M,C)},an=(d,h,_,k,v,x,S,M,C)=>{h.slotScopeIds=M,d==null?h.shapeFlag&512?v.ctx.activate(h,_,k,S,C):Bn(h,_,k,v,x,S,C):Ls(d,h,C)},Bn=(d,h,_,k,v,x,S)=>{const M=d.component=Hr(d,k,v);if(Ts(d)&&(M.ctx.renderer=It),Kr(M,!1,S),M.asyncDep){if(v&&v.registerDep(M,pe,S,x),!d.el){const C=M.subTree=Ie(Pe);V(null,C,h,_),d.placeholder=C.el}}else pe(M,d,h,_,v,x,S)},Ls=(d,h,_)=>{const k=h.component=d.component;if(xr(d,h,_))if(k.asyncDep&&!k.asyncResolved){h.el=d.el,h.placeholder=d.placeholder,ne(k,h,_);return}else k.next=h,k.update();else h.el=d.el,h.placeholder=d.placeholder,k.vnode=h},pe=(d,h,_,k,v,x,S)=>{const M=()=>{if(d.isMounted){let{next:O,bu:D,u:R,parent:K,vnode:Y}=d;{const Le=Eo(d);if(Le){O&&(O.el=Y.el,ne(d,O,S)),Le.asyncDep.then(()=>{const Ze=()=>{d.job.flags&8||(v&&v.pendingBranch?ge(Ze,v):b())};Ze.flags=48,ge(Ze,v)});return}}let z=O,ie;gt(d,!1),O?(O.el=Y.el,ne(d,O,S)):O=Y,D&&Vn(D),(ie=O.props&&O.props.onVnodeBeforeUpdate)&&He(ie,K,O,Y),gt(d,!0);const ce=ii(d),Se=d.subTree;d.subTree=ce,F(Se,ce,p(Se.el||qt(Se)),fn(Se),d,v,x),O.el=ce.el,z===null&&kr(d,ce.el),R&&ge(R,v),(ie=O.props&&O.props.onVnodeUpdated)&&ge(()=>He(ie,K,O,Y),v)}else{let O;const{el:D,props:R}=h,{bm:K,m:Y,parent:z,root:ie,type:ce}=d,Se=Kt(h);gt(d,!1),K&&Vn(K),!Se&&(O=R&&R.onVnodeBeforeMount)&&He(O,z,h),gt(d,!0);{ie.ce&&ie.ce._hasShadowRoot()&&ie.ce._injectChildStyle(ce,d.parent?d.parent.type:void 0);const Le=d.subTree=ii(d);F(null,Le,_,k,d,v,x),h.el=Le.el}if(Y&&ge(Y,v),!Se&&(O=R&&R.onVnodeMounted)){const Le=h;ge(()=>He(O,z,Le),v)}(h.shapeFlag&256||z&&Kt(z.vnode)&&z.vnode.shapeFlag&256)&&d.a&&ge(d.a,v),d.isMounted=!0,h=_=k=null}};d.scope.on();const C=d.effect=new ji(M);d.scope.off();const b=d.update=C.run.bind(C),I=d.job=C.runIfDirty.bind(C);I.i=d,I.id=d.uid,C.scheduler=()=>Os(I),gt(d,!0),b()},ne=(d,h,_)=>{h.component=d;const k=d.vnode.props;d.vnode=h,d.next=null,$r(d,h.props,k,_),Er(d,h.children,_),Ge(),no(d),Ye()},X=(d,h,_,k,v,x,S,M,C=!1)=>{const b=d&&d.children,I=d?d.shapeFlag:0,O=h.children,{patchFlag:D,shapeFlag:R}=h;if(D>0){if(D&128){un(b,O,_,k,v,x,S,M,C);return}else if(D&256){ht(b,O,_,k,v,x,S,M,C);return}}R&8?(I&16&&At(b,v,x),O!==b&&f(_,O)):I&16?R&16?un(b,O,_,k,v,x,S,M,C):At(b,v,x,!0):(I&8&&f(_,""),R&16&&ot(O,_,k,v,x,S,M,C))},ht=(d,h,_,k,v,x,S,M,C)=>{d=d||vt,h=h||vt;const b=d.length,I=h.length,O=Math.min(b,I);let D;for(D=0;D<O;D++){const R=h[D]=C?tt(h[D]):Ve(h[D]);F(d[D],R,_,null,v,x,S,M,C)}b>I?At(d,v,x,!0,!1,O):ot(h,_,k,v,x,S,M,C,O)},un=(d,h,_,k,v,x,S,M,C)=>{let b=0;const I=h.length;let O=d.length-1,D=I-1;for(;b<=O&&b<=D;){const R=d[b],K=h[b]=C?tt(h[b]):Ve(h[b]);if(Dt(R,K))F(R,K,_,null,v,x,S,M,C);else break;b++}for(;b<=O&&b<=D;){const R=d[O],K=h[D]=C?tt(h[D]):Ve(h[D]);if(Dt(R,K))F(R,K,_,null,v,x,S,M,C);else break;O--,D--}if(b>O){if(b<=D){const R=D+1,K=R<I?h[R].el:k;for(;b<=D;)F(null,h[b]=C?tt(h[b]):Ve(h[b]),_,K,v,x,S,M,C),b++}}else if(b>D)for(;b<=O;)Me(d[b],v,x,!0),b++;else{const R=b,K=b,Y=new Map;for(b=K;b<=D;b++){const be=h[b]=C?tt(h[b]):Ve(h[b]);be.key!=null&&Y.set(be.key,b)}let z,ie=0;const ce=D-K+1;let Se=!1,Le=0;const Ze=new Array(ce);for(b=0;b<ce;b++)Ze[b]=0;for(b=R;b<=O;b++){const be=d[b];if(ie>=ce){Me(be,v,x,!0);continue}let Ne;if(be.key!=null)Ne=Y.get(be.key);else for(z=K;z<=D;z++)if(Ze[z-K]===0&&Dt(be,h[z])){Ne=z;break}Ne===void 0?Me(be,v,x,!0):(Ze[Ne-K]=b+1,Ne>=Le?Le=Ne:Se=!0,F(be,h[Ne],_,null,v,x,S,M,C),ie++)}const Ks=Se?Ir(Ze):vt;for(z=Ks.length-1,b=ce-1;b>=0;b--){const be=K+b,Ne=h[be],Vs=h[be+1],qs=be+1<I?Vs.el||qt(Vs):k;Ze[b]===0?F(null,Ne,_,qs,v,x,S,M,C):Se&&(z<0||b!==Ks[z]?pt(Ne,_,qs,2):z--)}}},pt=(d,h,_,k,v=null)=>{const{el:x,type:S,transition:M,children:C,shapeFlag:b}=d;if(b&6){pt(d.component.subTree,h,_,k);return}if(b&128){d.suspense.move(h,_,k);return}if(b&64){S.move(d,h,_,It);return}if(S===q){s(x,h,_);for(let O=0;O<C.length;O++)pt(C[O],h,_,k);s(d.anchor,h,_);return}if(S===Zn){H(d,h,_);return}if(k!==2&&b&1&&M)if(k===0)M.persisted&&!x[Yn]?s(x,h,_):(M.beforeEnter(x),s(x,h,_),ge(()=>M.enter(x),v));else{const{leave:O,delayLeave:D,afterLeave:R}=M,K=()=>{d.ctx.isUnmounted?i(x):s(x,h,_)},Y=()=>{const z=x._isLeaving||!!x[Yn];x._isLeaving&&x[Yn](!0),M.persisted&&!z?K():O(x,()=>{K(),R&&R()})};D?D(x,K,Y):Y()}else s(x,h,_)},Me=(d,h,_,k=!1,v=!1)=>{const{type:x,props:S,ref:M,children:C,dynamicChildren:b,shapeFlag:I,patchFlag:O,dirs:D,cacheIndex:R,memo:K}=d;if((O===-2||b&&b.hasOnce)&&(v=!1),M!=null&&(Ge(),Bt(M,null,_,d,!0),Ye()),R!=null&&(!d.ctx||d.ctx===h)&&(h.renderCache[R]=void 0),I&256&&h.ctx.deactivate(d))return;const Y=I&1&&D,z=!Kt(d);let ie;if(z&&(ie=S&&S.onVnodeBeforeUnmount)&&He(ie,h,d),I&6)Xo(d.component,_,k);else{if(I&128){d.suspense.unmount(_,k);return}Y&&mt(d,null,h,"beforeUnmount"),I&64?d.type.remove(d,h,_,It,k):b&&!b.hasOnce&&(x!==q||O>0&&O&64)?At(b,h,_,!1,!0):(x===q&&O&384||!v&&I&16)&&At(C,h,_),k&&Ns(d)}const ce=K!=null&&R==null;(z&&(ie=S&&S.onVnodeUnmounted)||Y||ce)&&ge(()=>{ie&&He(ie,h,d),Y&&mt(d,null,h,"unmounted"),ce&&(d.el=null)},_)},Ns=d=>{const{type:h,el:_,anchor:k,transition:v}=d,x=h===q;if(x&&!v){Hs(_,k);return}if(h===Zn){A(d),v&&!v.persisted&&v.afterLeave&&v.afterLeave();return}const S=x?rs(d):d,M=()=>{x?p(_)&&Hs(_,k):i(_),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(S&&S.shapeFlag&1&&v&&!v.persisted){const{leave:C,delayLeave:b}=v,I=S.el,O=()=>C(I,M);b?b(I,M,O):O()}else M()},Hs=(d,h)=>{let _;for(;d!==h;)_=y(d),i(d),d=_;i(h)},Xo=(d,h,_)=>{const{bum:k,scope:v,job:x,subTree:S,um:M,m:C,a:b}=d;ri(C),ri(b),k&&Vn(k),v.stop(),x?(x.flags|=8,Me(S,d,h,_)):S&&(S.transition=d.vnode.transition,Me(S,d,h,_)),M&&ge(M,h);const I=()=>{d.isUnmounted=!0};I.flags=16,ge(I,h)},At=(d,h,_,k=!1,v=!1,x=0)=>{for(let S=x;S<d.length;S++)Me(d[S],h,_,k,v)},fn=d=>{if(d.shapeFlag&6)return fn(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=y(d.anchor||d.el),_=h&&h[zl];return _?y(_):h},Bs=(d,h,_)=>{const k=d&&h._vnode?void 0:d&&d.component?d.component.uid:Nr();Bl(()=>{d==null?h._vnode&&Me(h._vnode,null,null,!0):F(h._vnode||null,d,h,null,null,null,_),h._vnode=d},k)},It={p:F,um:Me,m:pt,r:Ns,mt:Bn,mc:ot,pc:X,pbc:dt,n:fn,o:e};return{render:Bs,hydrate:void 0,createApp:mr(Bs)}}function Xn({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function gt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ar(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function So(e,t,n=!1){const s=e.children,i=t.children;if(j(s)&&j(i))for(let o=0;o<s.length;o++){const r=s[o];let l=i[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[o]=tt(i[o]),l.el=r.el),!n&&l.patchFlag!==-2&&So(r,l)),l.type===Hn&&(l.patchFlag===-1&&(l=i[o]=tt(l)),l.el=r.el),l.type===Pe&&!l.el&&(l.el=r.el)}}function Ir(e){const t=e.slice(),n=[0];let s,i,o,r,l;const a=e.length;for(s=0;s<a;s++){const m=e[s];if(m!==0){if(i=n[n.length-1],e[i]<m){t[s]=i,n.push(s);continue}for(o=0,r=n.length-1;o<r;)l=o+r>>1,e[n[l]]<m?o=l+1:r=l;m<e[n[o]]&&(o>0&&(t[s]=n[o-1]),n[o]=s)}}for(o=n.length,r=n[o-1];o-- >0;)n[o]=r,r=t[r];return n}function Eo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Eo(t)}function ri(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function qt(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return qt(t.subTree);const n=e.suspense;return n&&n.activeBranch?qt(n.activeBranch):null}const Oo=e=>e.__isSuspense,Fr=Symbol("_deferredEnter");function Dr(e,t){t&&t.pendingBranch?j(e)?t.effects.push(...e):t.effects.push(e):Hl(e)}const q=Symbol.for("v-fgt"),Hn=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),Zn=Symbol.for("v-stc"),kt=[];let we=null;function w(e=!1){kt.push(we=e?null:[])}function To(){kt.pop(),we=kt[kt.length-1]||null}let Yt=1;function ci(e,t=!1){Yt+=e,e<0&&we&&t&&(we.hasOnce=!0)}function Ao(e){return e.dynamicChildren=Yt>0?we||vt:null,To(),Yt>0&&we&&we.push(e),e}function $(e,t,n,s,i,o){return Ao(u(e,t,n,s,i,o,!0))}function yt(e,t,n,s,i){return Ao(Ie(e,t,n,s,i,!0))}function Fs(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const Io=({key:e})=>e??null,yn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?se(e)||he(e)||N(e)?{i:Ue,r:e,k:t,f:!!n}:e:null);function u(e,t=null,n=null,s=0,i=null,o=e===q?0:1,r=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Io(t),ref:t&&yn(t),scopeId:oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ue};return l?(Cn(a,n),o&128&&e.normalize(a)):n&&(a.shapeFlag|=se(n)?8:16),Yt>0&&!r&&we&&(a.patchFlag>0||o&6)&&a.patchFlag!==32&&we.push(a),a}const Ie=Pr;function Pr(e,t=null,n=null,s=0,i=null,o=!1){if((!e||e===rr)&&(e=Pe),Fs(e)){const l=Ot(e,t,!0);return n&&Cn(l,n),Yt>0&&!o&&we&&(l.shapeFlag&6?we[we.indexOf(e)]=l:we.push(l)),l.patchFlag=-2,l}if(Wr(e)&&(e=e.__vccOpts),t){t=Rr(t);let{class:l,style:a}=t;l&&!se(l)&&(t.class=fe(l)),G(a)&&(Es(a)&&!j(a)&&(a=re({},a)),t.style=xe(a))}const r=se(e)?1:Oo(e)?128:Ln(e)?64:G(e)?4:N(e)?2:0;return u(e,t,n,s,i,r,o,!0)}function Rr(e){return e?Es(e)?re({},e):xo(e)?re({},e[Ro]||e):e:null}function Ot(e,t,n=!1,s=!1){const{props:i,ref:o,patchFlag:r,children:l,transition:a}=e,m=t?jr(i||{},t):i,f={__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&Io(m),ref:t&&t.ref?n&&o?j(o)?o.concat(yn(t)):[o,yn(t)]:yn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==q?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:a,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ot(e.ssContent),ssFallback:e.ssFallback&&Ot(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return a&&s&&Ht(f,a.clone(f)),f}function Fe(e=" ",t=0){return Ie(Hn,null,e,t)}function ee(e="",t=!1){return t?(w(),yt(Pe,null,e)):Ie(Pe,null,e)}function Ve(e){return e==null||typeof e=="boolean"?Ie(Pe):j(e)?Ie(q,null,e.slice()):Fs(e)?tt(e):Ie(Hn,null,String(e))}function tt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ot(e)}function Cn(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(j(t))n=16;else if(typeof t=="object")if(s&65){const i=t.default;i&&(i._c&&(i._d=!1),Cn(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!xo(t)?t._ctx=Ue:i===3&&Ue&&(Ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(N(t)){if(s&65){Cn(e,{default:t});return}t={default:t,_ctx:Ue},n=32}else t=String(t),s&64?(n=16,t=[Fe(t)]):n=8;e.children=t,e.shapeFlag|=n}function jr(...e){const t={};for(let n=0;n<e.length;n++){const s=e[n];for(const i in s)if(i==="class")t.class!==s.class&&(t.class=fe([t.class,s.class]));else if(i==="style")t.style=xe([t.style,s.style]);else if(An(i)){const o=t[i],r=s[i];r&&o!==r&&!(j(o)&&o.includes(r))?t[i]=o?[].concat(o,r):r:r==null&&o==null&&!In(i)&&(t[i]=r)}else i!==""&&(t[i]=s[i])}return t}function He(e,t,n,s=null){De(e,t,7,[n,s])}const Lr=mo();let Fo=0;function Nr(){return Fo}function Hr(e,t,n){const s=e.type,i=(t?t.appContext:e.appContext)||Lr,o={uid:Fo++,vnode:e,type:s,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new fl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wo(s,i),emitsOptions:go(s,i),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:s.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=_r.bind(null,o),e.ce&&e.ce(o),o}let ye=null;const Br=()=>ye||Ue;let Mn,Jt;{const e=Dn(),t=(n,s)=>{let i;return(i=e[n])||(i=e[n]=[]),i.push(s),o=>{i.length>1?i.forEach(r=>r(o)):i[0](o)}};Mn=t("__VUE_INSTANCE_SETTERS__",n=>ye=n),Jt=t("__VUE_SSR_SETTERS__",n=>Xt=n)}const on=e=>{const t=ye;return Mn(e),e.scope.on(),()=>{e.scope.off(),Mn(t)}},ai=()=>{ye&&ye.scope.off(),Mn(null)};function Do(e){return e.vnode.shapeFlag&4}let Xt=!1;function Kr(e,t=!1,n=!1){t&&Jt(t);const{props:s,children:i}=e.vnode,o=Do(e);wr(e,s,o,t),Sr(e,i,n||t);const r=o?Vr(e,t):void 0;return t&&Jt(!1),r}function Vr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,cr);const{setup:s}=n;if(s){Ge();const i=e.setupContext=s.length>1?Ur(e):null,o=on(e),r=sn(s,e,0,[e.props,i]),l=Oi(r);if(Ye(),o(),(l||e.sp)&&!Kt(e)&&ao(e),l){if(r.then(ai,ai),t)return r.then(a=>{Jt(!0);try{ui(e,a,t)}finally{Jt(!1)}}).catch(a=>{jn(a,e,0,void 0,!0),e.ssrRender=(m,f)=>f("<!---->")});e.asyncDep=r}else ui(e,r)}else Po(e)}function ui(e,t,n){N(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=Zi(t)),Po(e)}function Po(e,t,n){const s=e.type;e.render||(e.render=s.render||We);{const i=on(e);Ge();try{ar(e)}finally{Ye(),i()}}}const Ro=Symbol(),qr={get(e,t){return de(e,"get",""),t===Ro?e:e[t]}};function Ur(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,qr),slots:e.slots,emit:e.emit,expose:t}}function Ds(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Zi(Tl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Vt)return Vt[n](e)},has(t,n){return n in t||n in Vt}})):e.proxy}function Wr(e){return N(e)&&"__vccOpts"in e}const J=(e,t)=>Pl(e,t,Xt),zr="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ds;const fi=typeof window<"u"&&window.trustedTypes;if(fi)try{ds=fi.createPolicy("vue",{createHTML:e=>e})}catch{}const jo=ds?e=>ds.createHTML(e):e=>e,Gr="http://www.w3.org/2000/svg",Yr="http://www.w3.org/1998/Math/MathML",et=typeof document<"u"?document:null,di=et&&et.createElement("template"),Jr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const i=t==="svg"?et.createElementNS(Gr,e):t==="mathml"?et.createElementNS(Yr,e):n?et.createElement(e,{is:n}):et.createElement(e);return e==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:e=>et.createTextNode(e),createComment:e=>et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,i,o){const r=n?n.previousSibling:t.lastChild;if(i&&(i===o||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{di.innerHTML=jo(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=di.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}t.insertBefore(l,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Xr=Symbol("_vtc");function Zr(e,t,n){const s=e[Xr];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const hi=Symbol("_vod"),Qr=Symbol("_vsh"),ec=Symbol(""),tc=/(?:^|;)\s*display\s*:/;function nc(e,t,n){const s=e.style,i=se(n);let o=!1;if(n&&!i){if(t)if(se(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();n[l]==null&&Rt(s,l,"")}else for(const r in t)n[r]==null&&Rt(s,r,"");for(const r in n){r==="display"&&(o=!0);const l=n[r];l!=null?ic(e,r,!se(t)&&t?t[r]:void 0,l)||Rt(s,r,l):Rt(s,r,"")}}else if(i){if(t!==n){const r=s[ec];r&&(n+=";"+r),s.cssText=n,o=tc.test(n)}}else t&&e.removeAttribute("style");hi in e&&((!i||t!==n)&&(e[hi]=o?s.display:""),e[Qr]&&(s.display="none"))}const mn=/\s*!important$/;function Rt(e,t,n){if(j(n))n.forEach(s=>Rt(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))mn.test(n)?e.setProperty(t,n.replace(mn,""),"important"):e.setProperty(t,n);else{const s=sc(e,t);mn.test(n)?e.setProperty(wt(s),n.replace(mn,""),"important"):e[s]=n}}const pi=["Webkit","Moz","ms"],Qn={};function sc(e,t){const n=Qn[t];if(n)return n;let s=Te(t);if(s!=="filter"&&s in e)return Qn[t]=s;s=Ii(s);for(let i=0;i<pi.length;i++){const o=pi[i]+s;if(o in e)return Qn[t]=o}return t}function ic(e,t,n,s){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&se(s)&&n===s}const mi="http://www.w3.org/1999/xlink";function gi(e,t,n,s,i,o=cl(t)){s&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(mi,t.slice(6,t.length)):e.setAttributeNS(mi,t,n):n==null||o&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,o?"":ze(n)?String(n):n)}function _i(e,t,n,s,i){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?jo(n):n);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,a=n==null?e.type==="checkbox"?"on":"":String(n);(l!==a||!("_value"in e))&&(e.value=a),n==null&&e.removeAttribute(t),e._value=n;return}let r=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Di(n):n==null&&l==="string"?(n="",r=!0):l==="number"&&(n=0,r=!0)}try{e[t]=n}catch{}r&&e.removeAttribute(i||t)}function oc(e,t,n,s){e.addEventListener(t,n,s)}function lc(e,t,n,s){e.removeEventListener(t,n,s)}const yi=Symbol("_vei");function rc(e,t,n,s,i=null){const o=e[yi]||(e[yi]={}),r=o[t];if(s&&r)r.value=s;else{const[l,a]=uc(t);if(s){const m=o[t]=hc(s,i);oc(e,l,m,a)}else r&&(lc(e,l,r,a),o[t]=void 0)}}const cc=/(Once|Passive|Capture)$/,ac=/^on:?(?:Once|Passive|Capture)$/;function uc(e){let t,n;for(;(n=e.match(cc))&&!ac.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):wt(e.slice(2)),t]}let es=0;const fc=Promise.resolve(),dc=()=>es||(fc.then(()=>es=0),es=Date.now());function hc(e,t){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;const i=n.value;if(j(i)){const o=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{o.call(s),s._stopped=!0};const r=i.slice(),l=[s];for(let a=0;a<r.length&&!s._stopped;a++){const m=r[a];m&&De(m,t,5,l)}}else De(i,t,5,[s])};return n.value=e,n.attached=dc(),n}const vi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,pc=(e,t,n,s,i,o)=>{const r=i==="svg";t==="class"?Zr(e,s,r):t==="style"?nc(e,n,s):An(t)?In(t)||rc(e,t,n,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):mc(e,t,s,r))?(_i(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&gi(e,t,s,r,o,t!=="value")):e._isVueCE&&(gc(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!se(s)))?_i(e,Te(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),gi(e,t,s,r))};function mc(e,t,n,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&vi(t)&&N(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return vi(t)&&se(n)?!1:t in e}function gc(e,t){const n=e._def.props;if(!n)return!1;const s=Te(t);return Array.isArray(n)?n.some(i=>Te(i)===s):Object.keys(n).some(i=>Te(i)===s)}const _c=["ctrl","shift","alt","meta"],yc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>_c.some(n=>e[`${n}Key`]&&!t.includes(n))},hs=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),s=t.join(".");return n[s]||(n[s]=((i,...o)=>{for(let r=0;r<t.length;r++){const l=yc[t[r]];if(l&&l(i,t))return}return e(i,...o)}))},vc=re({patchProp:pc},Jr);let bi;function bc(){return bi||(bi=Or(vc))}const xc=((...e)=>{const t=bc().createApp(...e),{mount:n}=t;return t.mount=s=>{const i=wc(s);if(!i)return;const o=t._component;!N(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const r=n(i,!1,kc(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},t});function kc(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function wc(e){return se(e)?document.querySelector(e):e}const $c="./";function ve(e){return $c+"art/"+e}const Sn={ln:{name:"林念",full:ve("ln-full.webp"),face:ve("ln-face.webp"),emotions:{}},sq:{name:"苏晴",full:ve("sq-full.webp"),face:ve("sq-exp-1.webp"),emotions:{开心:1,惊喜:2,思考:3,加油:4,好吃:5,满足:6}},nu:{name:"林暖",full:ve("nu-full.webp"),face:ve("nu-exp-6.webp"),emotions:{开心:1,惊讶:2,欣慰:3,认真:4,担心:5,温柔:6}}};function Cc(e,t){const n=Sn[e];if(!n)return ve("ln-face.webp");const s=t&&n.emotions[t];return s?ve(e+"-exp-"+s+".webp"):n.face}const Zt=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"招牌 · 从一块开始",month:26,diff:22,price:398,demand:2,desc:"三层夹心，切开是三种颜色，像三年。",colors:{sponge:"#F0D9AE",cream:"#FFFDF8",accent:"#8A6A4F"}}];function st(e){return Zt.find(t=>t.id===e)||Zt[0]}const Lo={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},Qt=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐可欣",nick:"可欣",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶清禾",nick:"清禾",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function En(e){return Qt.find(t=>t.id===e)}const en=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],On=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function Mc(e){return On.find(t=>t.lv===e)||On[0]}function xi(e,t){return e.unlocked.filter(n=>(e.levels[n]||1)>=t).length}function Sc(e){return e.unlocked.length?e.unlocked.reduce((t,n)=>t+(e.levels[n]||1),0)/e.unlocked.length:1}function Ec(e){return Math.max(0,...Object.values(e.partnerSkill))}function Oc(e,t){return Object.values(e.partnerTrust).filter(n=>n>=t).length}const ps=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>xi(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>Sc(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>xi(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>Ec(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>Oc(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function Tc(e){return ps.find(t=>e>=t.from&&e<=t.to)||ps[0]}const ts={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"}},ms={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:ve("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:ve("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:ve("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:ve("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:ve("shop-exterior.webp")}},Ac=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function gs(e){return Ac[(e-1)%12]}const Ic=`# 《林记烘焙》剧情对话

> **这份文件是游戏里所有对话的唯一来源。改完保存，游戏刷新页面就生效，不用动代码。**
>
> 依据 \`剧情大纲.md\`（V3.0）编写。时间换算：游戏第 1 个月 = 1 月，共 36 个月。
> 生日：苏晴在 9 月（第 9 / 21 / 33 个月），林念在 12 月（第 12 / 24 / 36 个月）。
> 关键剧情按月份固定触发，不使用随机弹窗。

---

## 第一章 接手林记（第 1—6 个月）

### M1｜毕业后的新生活

- 事件ID：m01
- 触发：开局
- 场景：店内
- 奖励：烘焙+3，口碑+2

旁白：毕业那年的六月，我收到了第七封拒信。
旁白：邮件很短，两行。开头是「感谢您对我司的关注」。
林念：大学四年，毕业即失业。我到底在干什么啊……
旁白：我在出租屋里坐了一整晚，第二天买了回家的车票。
旁白：栖云镇没什么变化。街口的花店换了招牌，梧桐树又高了一点。
旁白：林记烘焙的木门推开时，还是那声响。
林暖：回来啦。行李先放着，过来帮我把这个蛋糕脱模。
林念：妈，我刚进门。
林暖：那正好，进门就当学徒。
旁白：后厨的味道一点没变。奶油，黄油，还有烤箱预热时的铁腥味。
旁白：我从小在这里长大。放学后趴在靠窗那张台子上写作业，写完就看我妈妈做蛋糕。
林暖：工作找得怎么样？
林念：……还在找。
林暖：嗯。
旁白：她没有追问。只是把脱模刀递给我，让我沿着边缘走一圈。
林念：妈，我又不是学烘焙专业的。
林暖：你从小就在这里做蛋糕，手艺可不比别人差。再说了，我也没说让你一辈子待在这里。
林暖：店里的事情，你其实也熟悉不少。从今天开始，日常经营交给你试试，我在旁边帮你把关。
林念：啊？这么突然？
林暖：怎么，不敢？
林念：谁说的！
旁白：就这样，我接下了林记的日常经营。
旁白：当时的想法很简单，暂时帮一阵子。
旁白：我不知道这一留，就是三年。
旁白：门被推开。
苏晴：听说林老板回来了。
林念：你怎么知道。
苏晴：你妈跟我妈说的，我妈跟我说的。
旁白：她背着相机站在门口，头发被外面的风吹得有点乱。
苏晴：所以现在该叫你林老板了？
林念：别。你先别叫。
苏晴：那我先叫三天，看看习不习惯。

### M2｜熟悉的老顾客

- 事件ID：m02
- 触发：月份=2
- 场景：店内
- 奖励：口碑+4，资金+300

旁白：早上八点半，门口已经有人在等了。
陈奶奶：小姑娘，今天是你看了？
林念：奶奶您早。我妈在后面，我去叫她。
陈奶奶：不用叫。我就订个蛋糕，你能做我就跟你说。
陈奶奶：我孙女下个月生日，八岁。她只吃你们家的。
林念：好，我记一下。要多大的？
陈奶奶：八寸。上面要放小兔子。她去年就想要小兔子，去年没有。
旁白：我翻开订单本，前面那一页是去年的记录。同样的名字，同样写了小兔子，旁边画了一个圈。
林念：去年的小兔子为什么没做？
陈奶奶：那时候你妈妈腰不好，我一个人来取的，就没好意思提。
旁白：我把这一页折了个角。
林暖：做店，最要紧的是把帐算明白。
旁白：晚上关店，妈妈把原料单摊在桌上，一样一样教我。
林暖：面粉一袋多少，出几个胚，一个胚卖多少。奶油开盖之后能放几天，卖不掉就是亏。
林念：以前我都不知道蛋糕是要算成本的。
林暖：你不用算。你只管吃。
林念：……
林暖：现在要算了。

### M3｜自己的第一款新品

- 事件ID：m03
- 触发：月份=3
- 场景：后厨
- 奖励：烘焙+5，品质+3

旁白：会做蛋糕，和会卖蛋糕，中间隔着一段很长的路。
旁白：我从小会做，但那都是照着妈妈的方子做。方子是死的，客人是活的。
旁白：三月我开始试一款新的。芋泥。
旁白：蒸、压、过筛，一次一次调糖。第一版太甜，第二版太干，第三版芋泥把奶油压塌了。
林暖：你为什么要加这一层？
林念：我觉得中间空。
林暖：那就填。填之前先想想客人会不会喜欢。
旁白：第四版我少放了两分糖，芋泥压得很薄，只留一层。
旁白：切开的时候能看见，但不会抢戏。
林暖：这个可以。
林念：真的？
林暖：真的。你给它起个名字。
旁白：我想了三天。最后写在牌子上的四个字：芋泥薄脆。
旁白：第一个星期只卖了六块。第二个星期，有人专门来问。

### M4｜好朋友的日常

- 事件ID：m04
- 触发：月份=4
- 场景：店外
- 奖励：友情值+12，照片:sq_visit

旁白：苏晴说她请我吃饭，地点我选。
林念：你请我？你哪来的钱。
苏晴：接了个拍摄，人家给了钱。
林念：那也不能让你请。
苏晴：你一个月卖六块蛋糕，我一个月拍两场。我请。
旁白：我们去了镇东那家面馆。高中的时候常来，老板已经换了儿子。
苏晴：你还记得高三那次，你从你们班跑到我们班后门，就为了给我送半个面包。
林念：记得。你当时在哭。
苏晴：那是因为我考砸了。你还站在那儿等了我一节课。
林念：我以为你要打我。
苏晴：我打你干什么。
旁白：她低头吃面，过了一会儿才说。
苏晴：那半年我挺难过的。不过每次下课看见你站在门口，就觉得也还行。
林念：……你今天怎么突然说这个。
苏晴：没有。就是想到了。
旁白：结账的时候她还是抢着付了。走出门口，她举起相机对着我。
苏晴：别动。
林念：你拍我干什么。
苏晴：记录林老板创业第一天。

### M5｜一次大型生日订单

- 事件ID：m05
- 触发：月份=5
- 场景：店内
- 奖励：资金+800，口碑+6，照片:first_order

顾客：你好，我想订一个生日蛋糕。六寸。
林念：好的。什么时候要？
顾客：周六。我女儿十岁。她想要……她说想要一个「和别的小朋友不一样的」。
林念：那她喜欢什么颜色？
顾客：她说喜欢紫色。但是她妈妈不喜欢紫色。
旁白：我拿着笔停了一下。
旁白：这种单最难。不是难在做，是难在不知道要听谁的。

? 这单怎么接？
- 稳妥起见，按店里最经典的款式做|口碑+5，资金+200
- 大胆一点，用紫色做一款店里没做过的|品质+3，口碑+8，烘焙+2

旁白：那一晚我把草图画了三遍。
旁白：周六上午十点，客人来取。她妈妈先看了一眼，没说话。
旁白：然后小女孩从后面跑过来，站住了。
顾客：……是紫色的。
旁白：她妈妈笑了一下，说，那就紫色的吧。
旁白：他们走后，我在订单本上写了一行：第一个十岁生日。写完我又划掉了。
旁白：因为我想，以后会有很多个。

### M6｜第一次品牌展示

- 事件ID：m06
- 触发：月份=6
- 场景：市集
- 奖励：知名度+10，口碑+5，照片:community

旁白：镇上的生活市集在河边，一个月一次。今年第一次邀请林记。
林暖：以前也有人来问，我都没去。
林念：为什么不去？
林暖：一个人搬不动那么多东西。
旁白：这次我们有两个人，加一个苏晴。
苏晴：摊位我来看。你们只管做。
旁白：她带了一块灰布，几张打印的照片，还有一叠手写卡片。
林念：这些照片哪来的？
苏晴：你店里的。我这两个月一直在拍。
旁白：我从来不知道自己店里原来长这样。玻璃柜的反光，早上第一炉出来的样子，客人推门时的手。
苏晴：东西好，也要让人看见。
旁白：那天我们带了六十份小蛋糕，两点半就空了。
旁白：收摊的时候河面上有风。我看见隔壁摊位的阿姨在拍我们那块布。
林念：她拍我们干什么。
苏晴：因为好看啊。

---

## 第二章 熟悉的味道（第 7—12 个月）

### M7｜热闹的除夕

- 事件ID：m07
- 触发：月份=7
- 场景：后厨
- 奖励：资金+2500，口碑+8

旁白：除夕前半个月，订单本就不够用了。
旁白：有些名字我看着眼熟。翻到去年的、前年的，都是同一个姓。
林暖：这些是几十年的老主顾。他们家的小孩，我抱过。
林念：一共多少单？
林暖：八十七。
林念：八十七？
林暖：这还是今年劝退了一些的。
旁白：那半个月我们每天四点起。奶油不够就去镇上拿，来不及就自己打。
旁白：除夕当天下午四点，最后一单取走。
旁白：我坐在后厨的凳子上，手抬不起来。
林暖：累吧。
林念：嗯。
林暖：这才第一年。
旁白：她从冰箱里拿出一个小蛋糕，是那天剩下的。
林暖：吃吧。年三十了。

### M8｜新的帮手

- 事件ID：m08
- 触发：月份=8
- 场景：后厨
- 奖励：员工+1，口碑+3

旁白：过了年，订单没少，反而更多了。线上开始有人问，也有些是从市集找过来的。
旁白：我和妈妈两个人的手，已经不够用了。
旁白：那天下午来了个女孩，站在门口很久才推门。
小雨：请问……你们招人吗？
林念：招。你会做蛋糕吗？
小雨：不太会。我在学校学过一点，但是做得不好。
林念：那你会什么？
小雨：我……我什么都愿意做。
旁白：她说话声音很小。说到一半会停下来看我一眼，好像怕说错。

? 怎么安排她？
- 先从最基础的准备工作做起|口碑+3，品质+2
- 直接让她上手试着做一款|品质+4，烘焙+3

旁白：她叫周雨桐。大家都叫她小雨。
旁白：她话不多。让她洗水果，她能洗一个下午，每一颗都擦干。
林念：不用这么仔细，反正还要切。
小雨：我怕坏了。
旁白：那天晚上我跟妈妈说，这姑娘有点意思。
林暖：哪里有意思？
林念：她怕东西坏。

### M9｜小雨的第一次尝试 · 苏晴的生日

- 事件ID：m09
- 触发：月份=9
- 场景：后厨
- 奖励：品质+4，友情值+20，照片:sq_birthday

旁白：九月，小雨做完了她在这里的第一款完整蛋糕。
旁白：抹面不平，边上有一道痕。她自己看了很久，没敢拿出来。
林念：拿过来。
小雨：我再做一次。
林念：先拿过来。
旁白：我切了一块。胚子有点干，奶油打得偏硬。
林念：胚子烤多了三分钟。下次提前看。
小雨：……嗯。
林念：但是味道是对的。
小雨：真的吗？
林念：真的。你明天再做一次，我看着。
旁白：那天也是苏晴的生日。
旁白：我提前留了一个白奶油蛋糕，上面摆一层无花果。
旁白：因为她高中的时候说过一次喜欢。说过三次，我记得。
苏晴：你居然还记得。
林念：你说过三次。
苏晴：那我下次说五次。
旁白：她吹蜡烛的时候闭着眼。屋里只有操作台上那盏灯亮着。
苏晴：我许了个愿。
林念：许什么了？
苏晴：不说。
苏晴：但是我保证，和你有关。

### M10｜线上销售

- 事件ID：m10
- 触发：月份=10
- 场景：店内
- 奖励：知名度+8，资金+500

旁白：镇上年轻人不多，但手机上有。
旁白：苏晴说要帮我拍一套产品照片。她收了我一顿饭。
苏晴：白盘子。不要反光。窗边靠左。
林念：你拍一张要这么久？
苏晴：你做一个蛋糕要这么久，我说过什么了吗。
旁白：她拍了两个小时，最后留下九张。
旁白：第一张发出去的晚上，有个人在下面问：可以送到镇上另一头吗？
林念：可以。
旁白：那天我骑车绕了大半个镇子，送到的时候奶油有点歪。
旁白：客人说没关系，然后就关上了门。

### M11｜一次订单考验

- 事件ID：m11
- 触发：月份=11
- 场景：店内
- 奖励：口碑+4，品质+3

旁白：十一月接了两单大的，同一天取。
旁白：我答应的时候没算过时间。
旁白：前一天晚上才发现，两个蛋糕都要在上午十点前完成，而后厨只有一个烤箱。
林念：妈，来不及。
林暖：那就先做一个。
林念：两个都答应了。
林暖：答应了就要做。想想怎么排。
旁白：那天我们把第一单的胚子提前一晚烤好，冷藏定型。第二天只做装饰。
旁白：第二单改成下午两点取。我打电话过去道歉，客人说没关系，反正是晚上吃。
旁白：晚上关店，我在本子上写了一行：接单之前先看烤箱。
旁白：这一行后来被小雨看见了。她笑了一下，也写在了自己的本子上。

### M12｜林记的三十多年

- 事件ID：m12
- 触发：月份=12
- 场景：店内
- 奖励：烘焙+4，口碑+5，照片:ln_birthday

旁白：十二月的一个下午，妈妈从阁楼上搬下来一个纸箱。
旁白：里面是照片，一叠一叠，用橡皮筋捆着。
林暖：这些是你外婆那时候的。
旁白：最早的一张是黑白的。一间很小的门面，招牌是手写的三个字。
林念：那时候就这么小？
林暖：就这么小。一张台子，一个炉子。
旁白：往后翻，招牌换过三次。柜台换过两次。那张靠窗的台子一直在。
林念：这张台子还在用。
林暖：你小时候就在这上面写作业。
旁白：箱子底下有一本硬壳本子，封皮发黄。
林暖：这是配方本。你外婆的。
林念：我能看吗？
林暖：先别急。等你真的要看的时候再看。
旁白：那天也是我的生日。
旁白：妈妈没有做蛋糕。她煮了一碗面，卧了两个蛋。
林暖：生日吃面。蛋糕是给别人做的。
林念：那我自己做一个？
林暖：你今年不用做。
旁白：面很咸。我吃完了。

---

## 第三章 让林记走得更远（第 13—18 个月）

### M13｜产品标准化

- 事件ID：m13
- 触发：月份=13
- 场景：后厨
- 奖励：品质+6，口碑+3

旁白：有位老顾客说，上个月的草莓蛋糕比这个月的好吃。
旁白：我把两个月的记录翻出来，配方一模一样。
旁白：可味道确实不一样。草莓的批次不同，奶油的牌子换过一次，天气也不同。
林念：妈，我们能不能所有东西都称重，按表做？
林暖：能。但是做出来就不一样了。
林念：哪里不一样？
林暖：手不一样。今天手重一点，明天手轻一点。客人吃习惯了，就是我们家的味道。
旁白：我没说话。
旁白：那几天我一直在想，客人到底要的是「每次一样」，还是「一直是那个味道」。

? 这件事怎么定？
- 保留手工的弹性，只把关键几项定死|品质+4，口碑+6
- 全部称重标准化，追求每批一致|品质+8，口碑+1

旁白：最后我定了一张表，只写了一部分。糖、奶油、烘烤时间写死。
旁白：剩下那一栏，我写着：看情况。
旁白：妈妈看见了，笑了一下，没说什么。

### M14｜知遥加入

- 事件ID：m14
- 触发：月份=14
- 场景：店内
- 奖励：员工+1，口碑+5

旁白：线上订单、定制订单、还有每天来的老顾客，全挤在一起。
旁白：我一天要接三十几个电话，做蛋糕的时间被切成了碎片。
许知遥：你这里是不是缺一个专门管前台的人？
林念：你哪位？
许知遥：来面试的。我在咖啡店做过两年。
旁白：她说话很快，进门先看了一眼柜台，又看了一眼排队的人。
许知遥：你现在这个流程，客人要等很久。
林念：我知道。
许知遥：那你还让他们等？
林念：……
许知遥：我来管。你去后面做蛋糕。
旁白：她第一天就把门口那块「请稍等」的牌子挪了位置。
旁白：第三天，陈奶奶进门时她直接说：奶奶，还是八寸，小兔子，下个月十二号对吧。
旁白：陈奶奶愣了一下，说，对。

### M15｜第一次跨界合作

- 事件ID：m15
- 触发：月份=15
- 场景：店外
- 奖励：知名度+10，资金+800

旁白：镇上那家咖啡店来找我，说想做一个下午茶套餐。
旁白：条件是他们出场地和咖啡，我们出三款小蛋糕，利润对半。
林念：三款，每天多少份？
对方：二十份。先试一个月。
旁白：我算了一晚上。算完发现，如果不加班，做不出来。
许知遥：那就涨价。
林念：涨价人家不要。
许知遥：不是涨他们的价。是我们只做十五份。
旁白：最后谈成十五份。第一天卖完是下午三点。
旁白：那个月苏晴拍了一组照片，发在她自己的账号上。
旁白：有人在下面问，照片是谁拍的。她说，是我朋友店里的东西，我拍的。
旁白：那是我第一次觉得，她也在往前走。

### M16｜婚礼甜品台

- 事件ID：m16
- 触发：月份=16
- 场景：店外
- 奖励：资金+3000，口碑+10

旁白：五月接到一个婚礼的单。甜品台，一百二十位客人。
林念：这个我们没做过。
许知遥：没做过不等于做不了。你去谈，我来排。
旁白：婚礼在镇外的院子里。我们凌晨四点开始做，六点半装车。
旁白：搭台子的时候我发现少带了一盒装饰。
林念：完了。
小雨：我带了。
林念：你带了什么？
小雨：所有东西我都多带了一份。
旁白：那天她背了一个很大的包，里面全是备用的。
旁白：中午十二点，新人入场。我们在院子角落站着，看客人拿我们的东西吃。
许知遥：你看那个穿蓝裙子的，拿了三次。
林念：嗯。
许知遥：下次我们可以做这一个。

### M17｜新的城市

- 事件ID：m17
- 触发：月份=17
- 场景：临江市
- 奖励：知名度+6

旁白：临江市离镇上四十分钟车程。地铁通了以后，很多人搬过去住。
旁白：我去看了一天，从早走到晚。
旁白：那边的面包店，一个奶油卷卖三十八。我们的卖十八。
旁白：那边的房租，是我们这边的六倍。
旁白：回来的车上我一直在算。算到最后发现，如果开在那里，一天要卖两百个才不亏。
旁白：晚上我跟妈妈说，临江好像可以做。
林暖：那就再去看两次。看三次再决定。

### M18｜可欣加入

- 事件ID：m18
- 触发：月份=18
- 场景：后厨
- 奖励：员工+1，品质+8

旁白：唐可欣来的时候，带了一个文件夹。
旁白：里面是她做的生产排期表，还有一份原料损耗统计。
唐可欣：你们的损耗率是百分之十一。
林念：……有这么高？
唐可欣：我在上一家店做到百分之四。
旁白：她在连锁品牌做了五年，说话直接，不绕弯。
唐可欣：手做可以，但是要有一个底线。哪些必须一样，哪些可以不一样，你得写下来。
林念：写了。
唐可欣：写得太松了。
旁白：那天我们争了很久。争到最后她合上文件夹。
唐可欣：我不是要你把店做成工厂。我是要你在我请假的时候，客人吃到的还是一样。
旁白：这句话我记住了。

---

## 第四章 从一家店到一支团队（第 19—24 个月）

### M19｜第一次管理难题

- 事件ID：m19
- 触发：月份=19
- 场景：店内
- 奖励：品质+5，口碑+4

旁白：准备分店的那两个月，我发现一件事。
旁白：我做不到同时管所有事。
旁白：后厨要盯，订单要盯，装修要盯，招人要盯。每天醒来第一件事是想今天漏了什么。
唐可欣：你现在是店里最大的瓶颈。
林念：我知道。
唐可欣：知道还不改？
许知遥：她不是不改。她是不放心。
旁白：那句话很难听，但是对的。

? 分店怎么筹？
- 先把产品品质稳住，再谈开店|品质+6，口碑+6
- 先把经营效率提上去，边开边改|资金+1500，品质+2，口碑+1

旁白：那天晚上我列了一张表，把手上所有事分成三类。
旁白：只有我能做的，别人也能做的，还有根本不用做的。
旁白：第三类比我想的多。

### M20｜第一家分店

- 事件ID：m20
- 触发：月份=20
- 场景：临江市
- 奖励：门店+1，知名度+12

旁白：第一家分店开在临江市的旧街上。四十二平米，比老店还小。
旁白：签约那天我一个人去的。签完在门口站了十分钟。
旁白：招牌挂上去的时候，我拍了一张照片发给妈妈。
林暖：字有点歪。
林念：是角度问题。
林暖：明天我去看看。
旁白：第二天她真的来了。站在门口看了很久，然后进门，摸了摸柜台。
林暖：这柜台比我店里那个好。
林念：新的当然好。
林暖：我那个用了二十六年。
旁白：知遥从那天起常驻临江。
许知遥：老板娘，我有个要求。
林念：什么？
许知遥：老店的账，也让我看。
林念：为什么？
许知遥：因为我不想开一家好店，然后看着另一家烂掉。

### M21｜清禾开始合作 · 苏晴的生日

- 事件ID：m21
- 触发：月份=21
- 场景：店内
- 奖励：知名度+8，友情值+15，员工+1

旁白：招牌挂上以后，我越看越觉得不对。
旁白：老店是妈妈那时候的样子，新店是我随手定的样子，两边不像一家。
旁白：苏晴给我推了一个人。
苏晴：叶清禾，学美术的，做过包装。她缺活，你缺人。
旁白：清禾来的时候带了一本速写本，里面全是她自己画的东西。颜色很烈，不太像一个蛋糕店会用的。
林念：这个颜色……会不会太亮？
叶清禾：你觉得不好看？
林念：好看。但是客人会不会觉得不像蛋糕店？
叶清禾：那你想让人一进门就想到蛋糕，还是想到这家店？
旁白：我愣住了。
旁白：那天也是苏晴的生日。她二十八号要去外地拍一个项目，走之前来店里坐了半小时。
苏晴：今年不用给我做蛋糕了，我赶时间。
林念：那不行。
旁白：我用最快的速度做了一个很小的，上面只摆了一片无花果。
苏晴：你每次都放无花果。
林念：你说过喜欢。
苏晴：我说过三次，你记了六年。
旁白：她走的时候把蛋糕盒抱在怀里，像抱着一个很怕碰坏的东西。

### M22｜两家店的磨合

- 事件ID：m22
- 触发：月份=22
- 场景：店内
- 奖励：品质+4，口碑+5

旁白：老店卖得最好的是芋泥薄脆。新店卖得最好的是草莓。
旁白：老店的客人要小份，新店的客人要大份。
旁白：老店十点开门就有人，新店要到下午。
旁白：第一个月，老店缺货，新店剩货。
许知遥：两边不能各订各的。
林念：那怎么订？
许知遥：每天晚上九点，两个店报数，我来配。
旁白：她做了一个表，用最笨的办法，每天手动填。
旁白：第三个月，缺货和剩货都少了。
旁白：我在表上看见一行她自己加的字：周五多备八份，对面中学放学。

### M23｜朋友之间的坦诚

- 事件ID：m23
- 触发：月份=23
- 场景：店内
- 奖励：友情值+10，口碑+2

旁白：那阵子我推掉了苏晴三次。
旁白：第一次是签合同。第二次是店里漏水。第三次我说我忘了。
旁白：她那天直接来了店里，站在操作台外面等我洗完手。
苏晴：我不是不能理解你忙。我只是希望你能提前告诉我，而不是让我一直等。
旁白：我手上还沾着奶油，站在那儿没有马上说话。
旁白：我想起高一那年，她也是这么直接跟我说的。

? 怎么回她？
- 直接认错，把事情说清楚|友情值+15，口碑+2
- 先说自己太忙，让她别介意|友情值-5

旁白：那天我们在关了灯的店里坐了很久。
旁白：她说她最近也忙，接了一个拍老街的项目，每天早出晚归。
苏晴：我不是要你赔我时间。我是怕有一天我们连生气都懒得生气了。
林念：不会。
苏晴：你怎么知道不会。
林念：因为你说出来了。
旁白：她笑了一下，说，这倒是。

### M24｜二十四岁

- 事件ID：m24
- 触发：月份=24
- 场景：后厨
- 奖励：友情值+12，品质+3，照片:ln_birthday_2

旁白：二十四岁生日那天，我在临江的新店里盯装修。
旁白：晚上九点回到老店，灯是开的。
旁白：小雨、知遥、可欣、我妈妈，都站在后厨。
旁白：桌上放着一个蛋糕。抹面不平，边上有一道痕。
小雨：我做的。做了三次。
林念：我知道。这个痕是你的。
小雨：……是缺点了。
林念：是记号。
旁白：苏晴没来。她在外面拍片子，让知遥带了一个信封过来。
旁白：里面是一叠照片。第一张是老店的门，第二张是市集那天，第三张是两个店并排的招牌。
旁白：最后一张是空的，背面写着：这一张留着，等你想拍什么的时候再拍。
旁白：那天我第一次觉得，我已经不是一个人在开一家店了。

---

## 第五章 找回林记的味道（第 25—30 个月）

### M25｜更大的市场

- 事件ID：m25
- 触发：月份=25
- 场景：店内
- 奖励：知名度+8，资金+2000

旁白：第三年开始，有人来谈加盟。
旁白：对方说得很轻松：配方给我们，我们照着做，挂你们的牌子。
唐可欣：不行。
林念：我知道不行。但是听起来很快。
唐可欣：快的东西，坏得也快。
旁白：我拒绝了。但是那天晚上我一直在想一个问题。
旁白：我们到底在卖什么。是蛋糕，还是别的什么。
旁白：如果只是蛋糕，那配方给别人也没关系。
旁白：我坐在后厨想了很久，没有得到答案。

### M26｜外婆的旧配方

- 事件ID：m26
- 触发：月份=26
- 场景：店内
- 奖励：烘焙+5，口碑+4

旁白：那天妈妈把阁楼上那个硬壳本子拿了下来。
林暖：你现在可以看了。
旁白：本子很旧，边角起毛。里面是外婆的字，竖着写，墨已经淡了。
旁白：翻到中间某一页，掉出来一张纸。
旁白：上面写着：桂花栗子。秋天做。
林念：这个是什么？
林暖：你外婆以前秋天做的一款。镇上很多人都记得。
林念：现在怎么不做了？
林暖：栗子贵了，桂花要去外面收。后来炉子换了，做不出那个样子。就停了。
旁白：那张纸上只有三行字，没有配比，没有时间。
林暖：她做东西不写全。写全了她自己也不会看了。
旁白：我拿着那张纸，看了很久。
旁白：秋天就要到了。

### M27｜意料之外的困难

- 事件ID：m27
- 触发：月份=27
- 场景：后厨
- 奖励：品质+3，口碑+2

旁白：小批量的桂花栗子做出来了。我尝了一口，觉得对。
旁白：镇上秋天有个文化节，主办方来问我们参不参加。我说参加。
旁白：预售开出去，三百份。
旁白：然后问题来了。
旁白：栗子的批次不一样，甜度差很多。第一锅要加糖，第二锅加了就过甜。
旁白：桂花香留不住。做出来当天很香，第二天就淡了。
旁白：原来的奶油装饰放两个小时就塌。礼盒装进去，盒子一斜，蛋糕就歪。
旁白：距离文化节还有一个月零三天。
唐可欣：这不是多做几次就能解决的。
林念：那怎么办。
唐可欣：要么改产品，要么改承诺。
旁白：那天晚上我一个人在店里坐到十一点。
旁白：三百份的预售已经收钱了。

? 怎么办？
- 缩减订单，退一部分钱，保住品质|资金-3000，口碑+8
- 坚持原计划，想办法把三百份做出来|资金+2000，口碑-2，品质+2

旁白：我给妈妈打了个电话。她没说什么，只是问，你怕的是什么。
旁白：我说，怕做不出来。
林暖：那就先想能做出来的。

### M28｜找回记忆

- 事件ID：m28
- 触发：月份=28
- 场景：店内
- 奖励：烘焙+6，友情值+12

旁白：苏晴知道以后，第二天就来了。
苏晴：我最近在拍老街的项目。可以顺便采访几个人。
林念：采访什么？
苏晴：问他们记不记得那个蛋糕。
旁白：她花了四天，跑了七户人家。
旁白：有人记得桂花味，说那年秋天一进门就能闻到。
旁白：有人记得栗子，说很糯，不噎。
旁白：有个阿姨说，她记不清味道了。只记得每年秋天，一家人围着桌子分一个。
旁白：苏晴把照片洗出来，摊在桌上。
旁白：妈妈一张一张看，看到第三张的时候停住了。
林暖：你外婆做的时候，桂花是最后撒的。
林念：最后撒？
林暖：她说过，栗子甜就少放糖，桂花香淡就后撒。
旁白：我跑上楼，把那张纸翻出来。
旁白：纸的背面还有一行很小很小的字，我之前没看见。
旁白：「栗子甜则少放糖，桂花香淡则后撒。」
旁白：我坐在地上，看了很久。
旁白：原来她从来没有要求每年做出一样的味道。
旁白：她只是要求，每一年都要好吃。

? 新版本怎么做？
- 完全按外婆的做法复刻|口碑+10，品质+2
- 在原有风味上，改成适合运输的版本|品质+8，口碑+12，知名度+6

旁白：那天晚上，我们几个人在后厨站了一圈。
旁白：可欣改流程，小雨试配比，知遥重排发货，清禾重新画礼盒。
旁白：妈妈坐在角落，讲外婆以前怎么做。
旁白：我负责最后定味道。
旁白：凌晨三点，第一版改好的桂花栗子出炉。
旁白：我切了一块给妈妈。
旁白：她吃得很慢，然后放下叉子。
林暖：这个不是我妈妈的味道。
旁白：我心里一沉。
林暖：但是她会喜欢。

### M29｜秋日文化节

- 事件ID：m29_festival
- 触发：月份=29
- 场景：市集
- 奖励：知名度+20，口碑+15，资金+6000

旁白：文化节那天，天气很好。
旁白：我们的摊子在河边第三棵梧桐下面。清禾设计的礼盒是米色的，上面只印了一行小字。
旁白：三百份，上午十一点开始卖。
旁白：十二点四十，卖完了。
旁白：有个老人站在摊子前面，吃了很久。
老人：这个味道，我小时候吃过。
许知遥：您要再拿一个吗？
老人：不了。一个就够了。
旁白：下午我们把摊子收了，回到店里。
旁白：妈妈坐在靠窗那张台子上，看着外面。
林暖：你外婆要是看见今天，会说什么。
林念：会说什么？
林暖：她会说，栗子还是买贵了。
旁白：大家都笑了。
旁白：人都散了以后，苏晴还在收相机。
旁白：我走过去，抱住了她。
林念：呜呜呜，你真好！
林念：我们要做一辈子的好朋友！
旁白：苏晴弯起了嘴角。
旁白：她没有马上回答。
旁白：她想起了几年前那个晚自习的夜晚。

### M29｜高三那年的晚自习

- 事件ID：m29_memory
- 触发：月份=29
- 场景：回忆
- 奖励：友情值+25

旁白：高三那年，苏晴换了新同桌。叫沈妍。
旁白：刚开始相处正常。但沈妍之前和别的同学起过冲突。
旁白：某天课间，许佳宁凑到苏晴旁边，声音很小。
许佳宁：苏晴，你最近和新同桌相处得还好吗？
苏晴：挺好的呀，怎么了？
许佳宁：她之前和同学发生过一些冲突，最近状态好像也不太稳定。我也不清楚具体情况，只是觉得你们现在是同桌，还是稍微留意一下比较好。
苏晴：啊？这样吗。谢谢你的提醒。
旁白：之后相处一直正常，苏晴也就没太在意。
旁白：那天晚自习下课，我照常去她们班后门找她。
林念：我给你带了妈妈做的小面包！
苏晴：哇！谢谢你！
旁白：她咬了一口。
苏晴：真好吃！
苏晴：对了，我跟你讲，我上周看到一本小说……
旁白：话没说完。
旁白：沈妍从教室前门冲了进来。
旁白：她手里拿着一把长柄伞。
旁白：她以为苏晴跟老师说了什么。
旁白：伞挥下来的时候，苏晴完全没有反应。
旁白：我冲上去，想把她们分开，一边喊老师。
旁白：教室里一下就乱了。有人往后退，有人站着不动。班长跑出去找值班老师。
旁白：值班老师来得很快。
旁白：苏晴受了伤，被老师带去处理。学校联系了双方家长。
旁白：后来苏晴被叫去问经过。
旁白：她回答得很清楚。什么时候，谁在哪里，发生了什么。一句多余的话都没有。
旁白：老师让她先回去休息。
旁白：她走出办公室，看见我从另一间办公室出来。
旁白：我的眼睛是红的。
旁白：我走过去，抱住了她。
林念：你吓死我了……
林念：有没有哪里不舒服？
旁白：后来的话，她记不清了。
旁白：她只记得那个拥抱。
旁白：刚刚还能平静回答问题的她，在那一刻突然忍不住了。
苏晴：……我没事。
旁白：她说完这三个字，就哭了。
旁白（苏晴）：在教室里的时候，我好像什么感觉都没有。
旁白（苏晴）：老师问我，我可以很平静地回答。
旁白（苏晴）：可是看到林念的那一刻，我突然就忍不住了。
旁白（苏晴）：我想起高一的时候，我们约定过，有什么事情都要直接告诉对方。
旁白（苏晴）：我也想起高二的时候，每次一下课，她总会出现在我们班后门。
旁白（苏晴）：原来有一个人会这样在意自己，是一件很幸福的事情。
苏晴：我想和这个人做一辈子的好朋友。
旁白：回到现在。河边，梧桐树下面。
苏晴：嗯。
苏晴：好啊。
旁白：她说这两个字的时候，声音很轻。
旁白：但是她早就想好了。
旁白（苏晴）：其实，早在几年前，我就已经下定决心了。
旁白（苏晴）：我要和你做一辈子的好朋友。

### M30｜新的机会

- 事件ID：m30
- 触发：月份=30
- 场景：店内
- 奖励：知名度+10，资金+3000

旁白：文化节之后，来谈合作的人多了。
旁白：有商场，有平台，也有别的城市的人。
许知遥：这些我筛过了。三家可以谈。
林念：你筛的标准是什么？
许知遥：对方能不能等。愿意等的，才做得长。
旁白：那天晚上我在本子上写了一行字。
旁白：明年这个时候，我们要在几个城市有店。
旁白：写完我看了很久，觉得自己有点不像自己。

---

## 第六章 把喜欢的味道带到全国（第 31—36 个月）

### M31｜标准化供应链

- 事件ID：m31
- 触发：月份=31
- 场景：后厨
- 奖励：品质+8，资金+2000

旁白：栗子从一家供应商变成了三家。
旁白：可欣做了一张表，每一批进来都要测甜度，不合格的退回去。
唐可欣：退了三批。供应商骂了我两次。
林念：还合作吗？
唐可欣：合作。他现在知道我们的底线在哪。
旁白：那年我几乎没有碰过面粉。
旁白：每天的事是开会、看表、签字、打电话。
林暖：你多久没做蛋糕了？
林念：……两个月。
林暖：手会忘的。
旁白：那天下午我留在后厨，一个人做了六个原味。
旁白：做到第四个，手感才回来。

### M32｜新的城市

- 事件ID：m32
- 触发：月份=32
- 场景：店外
- 奖励：门店+1，知名度+12

旁白：第四家店开在外省。第一次不在我能开车到的地方。
旁白：开业那天我没去。我在老店做蛋糕。
旁白：晚上知遥发来一段视频。队伍排到了路口。
林念：人怎么这么多？
许知遥：因为我们在这里没有名气。没名气的人，只能靠东西好吃。
旁白：我看着视频里那块招牌。清禾把「林记烘焙」四个字改小了一点，旁边加了一行。
旁白：那行写着：栖云镇，一九八九年。

### M33｜旗舰店设计 · 苏晴的生日

- 事件ID：m33
- 触发：月份=33
- 场景：店内
- 奖励：知名度+15，友情值+18，照片:sq_birthday_3

旁白：旗舰店的方案改了七次。
旁白：清禾想做得很素，可欣说要能看见后厨，我说要有一张靠窗的长台子。
叶清禾：为什么一定要靠窗？
林念：因为我小时候就在靠窗那张台子上写作业。
旁白：她愣了一下，然后在图上画了一张长台子。
旁白：那天也是苏晴的生日。她在旗舰店拍宣传照，从早上拍到下午。
旁白：晚上我们把灯关了一半，在还没摆好的店里坐下来。
苏晴：你这次又没提前说生日快乐。
林念：我准备了。
旁白：我从包里拿出一个盒子。很小的一个蛋糕，只够两个人吃。
苏晴：这么大点？
林念：店里今天没有别的。
苏晴：那正好。
旁白：她插了一根蜡烛，点着，又吹了。
林念：你许什么愿了？
苏晴：这次可以说。
苏晴：我希望明年这个时候，你还能坐下来跟我吃一个这么小的蛋糕。
旁白：那天她没有拍照。
旁白：她说，这次的不用拍。

### M34｜全国布局

- 事件ID：m34
- 触发：月份=34
- 场景：店内
- 奖励：门店+1，知名度+15

旁白：第五家、第六家，开会的时候已经要用表格了。
旁白：知遥管门店，可欣管研发和培训，小雨成了主力，清禾管所有看得见的东西。
旁白：我一天要看四份报表。
林念：妈，我好像不太做蛋糕了。
林暖：你现在做的是别的东西。
林念：什么东西？
林暖：让别人也能做好蛋糕的东西。
旁白：那天她拿出那个硬壳本子，翻到最后一页。
林暖：你外婆最后写的不是配方。
旁白：那一页只有一句话：做的人要高兴，吃的人才高兴。
旁白：我在旁边写了一句：我会记住。

### M35｜一本相册

- 事件ID：m35
- 触发：月份=35
- 场景：店内
- 奖励：友情值+15，照片:album

旁白：苏晴抱着一个牛皮纸包的东西来店里。
苏晴：先把手上的活放下。
林念：又搞什么。
苏晴：闭眼。
旁白：睁开的时候，桌上摊着一本相册。
旁白：第一页是老店的门。那年我拖着行李回来，头发乱着，穿着旧外套。
旁白：后面是市集、除夕、婚礼、第一家分店、秋日文化节、旗舰店的空店。
旁白：中间还夹着一张我以为没人看见的照片。我趴在靠窗那张台子上睡着了。
林念：这张你什么时候拍的。
苏晴：你忙着的时候啊。
旁白：翻到最后一页，是空的。
苏晴：这一页留给你自己。
林念：留给我放什么？
苏晴：你想放什么就放什么。
旁白：我合上相册，说了句谢谢。
苏晴：谢什么。我只是记录。做的人是你。

### M36｜三周年

- 事件ID：m36
- 触发：月份=36
- 场景：店内
- 奖励：照片:finale，资金+5000

旁白：三周年那天，也是我的生日。
旁白：旗舰店门口摆了一排桌子，来的客人比预想的多。
旁白：妈妈来得最晚。她在门口站了一会儿才进来。
林暖：招牌做得比我那时候大。
林念：你以前说太小。
林暖：现在这样，挺好。
旁白：苏晴举着相机在人群里挤来挤去，一边拍一边喊让我别动。
旁白：知遥在门口指挥取号，可欣在后厨，小雨带着新人。
旁白：清禾把三周年的那张海报挂了三次才挂正。
旁白：下午三点，人都走得差不多了。
旁白：我们几个人坐在店里的长台子边上，分了一个很小的蛋糕。
旁白：我想起三年前的夏天，我坐在出租屋里，看着第七封拒信。
旁白：那时候我以为，找工作是一件必须完成的事。
旁白：现在我知道，做一件自己想做的事，也可以是一件正经事。
林暖：这家店，现在真的可以放心交给你了。
林念：其实最开始，我只是想帮一阵子。
苏晴：那现在呢？
林念：现在想把它做得更好。
苏晴：那我就继续等着吃新品啦。
旁白：那天晚上打烊以后，我一个人在后厨站了一会儿。
旁白：面粉的味道，黄油的味道，还有烤箱预热时的铁腥味。
旁白：和三年前一模一样。

---

## 随机事件

### 随机 · 老顾客的孙女

- 事件ID：ev_old_customer
- 触发：随机
- 场景：店内
- 奖励：口碑+4

陈奶奶：小姑娘，我孙女说，她要自己挑。
旁白：小女孩趴在玻璃柜上，看了很久。
小女孩：这个上面有草莓。
林念：对。
小女孩：那个上面有花。
林念：也有。
小女孩：我都要。
陈奶奶：只能要一个。
旁白：她又看了很久，最后指了指最边上的那一个。
小女孩：这个。
林念：这个没有装饰。
小女孩：这个看起来最好吃。
旁白：陈奶奶付钱的时候说，这孩子和她妈妈小时候一模一样。

### 随机 · 一张定制单

- 事件ID：ev_custom
- 触发：随机
- 场景：店内
- 奖励：口碑+3

顾客：我想订一个蛋糕。不用好看，要好吃。
林念：那您喜欢什么口味？
顾客：我妈喜欢不甜的。
旁白：不甜，是最难的一个要求。

? 怎么做？
- 按店里的方子减糖|口碑+3，资金+200
- 单独调一版，用水果的甜味顶上|品质+3，口碑+5

旁白：他第二天来取，拿在手里掂了一下。
顾客：这么轻。
林念：因为没那么多奶油。
顾客：行。
旁白：三天后他回来，又订了一个。

### 随机 · 门口的猫

- 事件ID：ev_cat
- 触发：随机
- 场景：店外
- 奖励：口碑+2

旁白：有只橘猫开始在门口蹲着。不叫，也不进来。
许知遥：它在等谁啊。
林念：可能等我掉东西。
旁白：后来我们在门外放了一个碗。它来得越来越准时。
旁白：有客人说，是因为这只猫才进店的。
旁白：我问是哪一个客人。知遥说，很多个。

### 随机 · 小雨的新想法

- 事件ID：ev_xiaoyu_idea
- 触发：随机
- 场景：后厨
- 奖励：品质+3

小雨：老板，我能不能……试着做一款？
林念：可以。
小雨：如果不好吃呢。
林念：那就再试一次。
旁白：她做了一款加了柠檬皮的戚风。酸了一点，但是清爽。
旁白：后来这款上了季节菜单。
旁白：菜单上写的是她起的名字，很小的一行。

---

## 编辑说明

### 怎么加一个新事件

复制任意一个 \`###\` 开头的段落，改标题和内容即可。\`##\` 是章节，\`###\` 是一个事件。

### 每行对话的格式

\`\`\`
角色名：台词
角色名（表情）：台词
旁白：描写
\`\`\`

- 冒号用中文全角「：」。
- 不加角色名、只写「旁白」就是旁白，不显示头像。
- 表情可以不写，会使用该角色的默认头像。

### 当前可用的表情（没有的会自动退回默认头像）

| 角色 | 可用表情 |
| --- | --- |
| 林念 | 暂无（只有默认头像，需要补画） |
| 苏晴 | 开心、惊喜、思考、加油、好吃、满足 |
| 林暖 | 开心、惊讶、欣慰、认真、担心、温柔 |
| 周雨桐 / 许知遥 / 唐可欣 / 叶清禾 / 陈奶奶 / 许佳宁 / 沈妍 | 暂无头像，显示姓名首字 |

### 触发条件怎么写

- \`开局\`
- \`月份=3\` 或 \`月份=9,21,33\`（逗号表示多个）
- \`月份=12 且 口碑>=40\`
- \`随机\`

可用于条件的数值名：月份、资金、烘焙、品质、口碑、知名度、友情值、门店、员工、配方数。

### 奖励怎么写

逗号分隔，例如：\`资金+500，口碑+8，友情值+10，配方:strawberry，照片:sq_visit，员工+1，门店+1\`

- \`资金\` / \`烘焙\` / \`品质\` / \`口碑\` / \`知名度\` / \`友情值\` / \`门店\` / \`员工\` 用 \`+数字\`
- \`配方:编号\` 解锁指定蛋糕（编号见 \`src/data.js\`）
- \`照片:编号\` 解锁相册里的一张图

### 带选项的事件

在对话中间插入一行 \`? 问题文字\`，紧接着写若干 \`- 选项文案|奖励\`：

\`\`\`
? 怎么回应？
- 直接认错|友情值+15
- 先说自己太忙|友情值-5
\`\`\`

### 注意

- 事件 ID 不能重复。
- 同一月份有多个事件时，按文件里的顺序依次播放。
- 文件里所有 \`##\` 章节标题只用于阅读，游戏不读。
`,Fc={月份:e=>e.month,资金:e=>e.money,烘焙:e=>e.skill,品质:e=>e.quality,口碑:e=>e.reputation,知名度:e=>e.fame,友情值:e=>e.friendship,门店:e=>e.stores,员工:e=>e.staff,配方数:e=>e.recipes.length};function Dc(e,t){const n=Fc[t];return n?n(e):0}function ki(e){const t=[];return e&&e.split(/[，,、]/).forEach(n=>{const s=n.trim();if(!s)return;let i=s.match(/^(.+?)\s*([+\-])\s*(\d+)$/);if(i){t.push({kind:"num",key:i[1].trim(),value:(i[2]==="-"?-1:1)*Number(i[3])});return}i=s.match(/^(.+?)\s*[:：]\s*(.+)$/),i&&t.push({kind:"id",key:i[1].trim(),value:i[2].trim()})}),t}function Pc(e){const t=(e||"").trim();if(!t)return null;if(t==="开局")return{type:"start"};if(t==="随机")return{type:"random"};const n=[];for(const s of t.split("且")){const i=s.trim();if(!i)continue;const o=i.match(/^(.+?)\s*(>=|<=|==|=|>|<)\s*(.+)$/);if(!o)return null;n.push({key:o[1].trim(),op:o[2],values:o[3].split(/[,，]/).map(r=>r.trim())})}return n.length?{type:"cond",conds:n}:null}function Rc(e,t){return!e||e.type!=="cond"?!1:e.conds.every(n=>{const s=Number(Dc(t,n.key));if(n.op==="="||n.op==="==")return n.values.some(o=>Number(o)===s);const i=Number(n.values[0]);return n.op===">="?s>=i:n.op==="<="?s<=i:n.op===">"?s>i:n.op==="<"?s<i:!1})}const jc=/^([^\s：:（()【】]{1,8})(?:（([^）)]*)）)?\s*[：:]\s*(.*)$/;function Lc(e,t,n){const s={},i=[];let o=!1;for(const r of t){const l=r.trim();if(!l||l.startsWith(">"))continue;if(l.startsWith("?")||l.startsWith("？")){i.push({type:"ask",text:l.slice(1).trim(),options:[]}),o=!0;continue}if(l.startsWith("-")){const m=l.replace(/^-\s*/,"");if(o){const p=m.search(/[|｜]/),y=i[i.length-1];p>=0?y.options.push({text:m.slice(0,p).trim(),rewards:ki(m.slice(p+1))}):y.options.push({text:m.trim(),rewards:[]});continue}const f=m.match(/^([^：:]+)[：:]\s*(.*)$/);f&&(s[f[1].trim()]=f[2].trim());continue}if(o=!1,l.startsWith("旁白")){const m=l.match(/^旁白\s*(?:（[^）]*）)?\s*[：:]\s*(.*)$/);i.push({type:"say",speaker:null,text:m?m[1]:l});continue}const a=l.match(jc);a?i.push({type:"say",speaker:a[1],emotion:a[2]||"",text:a[3]}):n.push("「"+e+"」里有一行没看懂，已跳过："+l)}return s.事件ID?{id:s.事件ID,title:e,scene:s.场景||"",triggerText:s.触发||"",trigger:Pc(s.触发),rewards:ki(s.奖励),beats:i}:null}function Nc(e){const t=[],n=[],s=e.split(/\r?\n/);let i=null,o=[];const r=()=>{if(i!==null&&o.some(a=>/^-\s*事件ID\s*[：:]/.test(a.trim()))){const a=Lc(i,o,t);a&&n.push(a)}o=[]};for(const l of s){const a=l.match(/^(#{2,3})\s+(.*)$/);if(a){r(),i=a[2].trim();continue}i!==null&&o.push(l)}return r(),{events:n,warnings:t}}const bt=Nc(Ic);typeof console<"u"&&(bt.warnings.length&&(console.warn("[剧情] 有 "+bt.warnings.length+" 行没解析成功："),bt.warnings.forEach(e=>console.warn("  "+e))),console.log("[剧情] 已加载 "+bt.events.length+" 个事件"));const No="alb-save-v5",Tn=5,Ho=60,Bo=40;function Ps(){return{v:5,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,friendship:20,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,stock:60,shelf:{},plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],photos:[],log:[],phase:"playing",ending:null,stage:1,report:null}}const c=nn(Ps()),Oe=nn({events:[]}),Ko=J(()=>Zt.filter(e=>c.unlocked.includes(e.id))),ct=J(()=>c.stamina+Ho+c.staff.length*Bo);function Vo(e){return Lo[c.prices[e]||"std"]}function ln(e){const t=st(e),n=c.levels[e]||1;return Math.round(t.price*Vo(e).priceMul*(1+(n-1)*.05))}function qo(e){const t=st(e),n=c.levels[e]||1,s=.7+c.reputation/200+c.popularity/200+c.loyalty/250+c.brand/300;return Math.max(0,Math.round(t.demand*s*Vo(e).demandMul*(1+(n-1)*.06)*(1+(c.storeCount-1)*.7)))}const Uo=J(()=>700+c.shopLevel*180+c.staff.length*500),Rs=J(()=>Tc(c.month)),Mt=J(()=>{const e=Rs.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const t=e.goals.map(n=>({text:n.text,done:n.check(c),expand:!!n.expand}));return{done:t.filter(n=>n.done).length,need:e.need,list:t}});function Wo(){let e=0;for(const t of Object.keys(c.plan))e+=c.plan[t]*st(t).diff;return e}function Re(){try{localStorage.setItem(No,JSON.stringify(c))}catch{}}function Hc(){try{const e=localStorage.getItem(No);if(!e)return!1;const t=JSON.parse(e);return t.v!==5?!1:(Object.keys(Ps()).forEach(n=>{t[n]!==void 0&&(c[n]=t[n])}),!0)}catch{return!1}}function wi(){Object.assign(c,Ps()),Oe.events.length=0,js(),Re()}function le(e,t){c.log.unshift({month:c.month,day:c.day,text:e,tone:t||"normal"}),c.log.length>60&&c.log.pop()}function ue(e){return Math.max(0,Math.min(100,e))}function $i(e){const t=[];for(const n of e)if(n.kind==="num"){const s=n.value;switch(n.key){case"资金":c.cash=Math.max(0,c.cash+s);break;case"口碑":c.reputation=ue(c.reputation+s);break;case"知名度":c.popularity=ue(c.popularity+s);break;case"友情值":c.friendship=ue(c.friendship+s);break;case"门店":c.storeCount=Math.max(1,c.storeCount+s);break;case"员工":s>0&&Vc();break;case"烘焙":Bc(s*.2);break;case"品质":Kc(s*.05);break}t.push(n.key+(s>=0?"+":"")+s)}else n.key==="配方"?c.unlocked.includes(n.value)||(c.unlocked.push(n.value),t.push("解锁「"+st(n.value).name+"」")):n.key==="照片"&&(c.photos.includes(n.value)||(c.photos.push(n.value),t.push("获得纪念照片")));return t}function Bc(e){const n=c.unlocked.slice().sort((s,i)=>(c.levels[s]||1)-(c.levels[i]||1))[0];n&&(c.levels[n]=Math.min(5,(c.levels[n]||1)+e))}function Kc(e){c.unlocked.forEach(t=>{c.levels[t]=Math.min(5,(c.levels[t]||1)+e)})}function zo(e){if(!e||c.staff.includes(e))return;c.staff.push(e),c.partnerTrust[e]===void 0&&(c.partnerTrust[e]=10),c.partnerSkill[e]===void 0&&(c.partnerSkill[e]=1);const t=En(e);t&&le(t.name+" 加入了林记","story")}function Vc(){const e=Qt.find(t=>!c.staff.includes(t.id)&&t.joinMonth<=c.month);e&&zo(e.id)}function Go(){return c.staff.map(e=>En(e)).filter(Boolean)}const Ci={feedback:5,market:3,talk:2,train:5};function qc(e){const t=c.cd[e]||0;return Math.max(0,t-c.dayIndex)}function _s(e){switch(e){case"restock":return{name:"原料采购",ap:1,cost:600,note:"原料 +12 份",disabled:c.cash<600};case"feedback":{const t=qc("feedback");return{name:"顾客反馈",ap:1,cost:0,note:t>0?"还要等 "+t+" 天":"口碑 +1.5，忠诚 +2",disabled:t>0}}case"talk":{const t=c.staff.length?Go()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:t?"和 "+t+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"research":return{name:"新品研发",ap:2,cost:0,note:"选一款产品，熟练度 +1"};case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:c.cash<800};case"train":return c.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:c.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const t=On.find(n=>n.lv===c.shopLevel+1);return t?{name:"装修到「"+t.name+"」",ap:2,cost:t.cost,note:"展示位与产能提升",disabled:c.cash<t.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const t=en.find(s=>!c.cities.includes(s.id)&&!c.surveyed.includes(s.id));if(!t)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const n=c.month>=t.month&&c.reputation>=t.rep;return{name:"考察"+t.name,ap:2,cost:2e3,note:n?"考察之后可以筹备开店":"需要第 "+t.month+" 个月、口碑 "+t.rep,disabled:!n||c.cash<2e3}}case"branch":{if(!c.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const t=en.find(n=>n.id===c.surveyed[0]);return{name:"在"+t.name+"开店",ap:3,cost:t.cost,note:"门店 +1",disabled:c.cash<t.cost}}default:return{name:e,ap:1,cost:0,note:""}}}function Uc(e,t){if(c.phase!=="playing")return!1;const n=_s(e);if(n.disabled||c.ap<n.ap||n.cost&&c.cash<n.cost)return!1;const s=c.cash;switch(e){case"restock":c.cash-=600,c.stock+=12,le("原料 +12 份");break;case"feedback":c.reputation=ue(c.reputation+1.5),c.loyalty=ue(c.loyalty+2),le("认真听了顾客的意见，口碑上升");break;case"talk":if(c.staff.length){const i=t&&t.partner?t.partner:c.staff[0];c.partnerTrust[i]=ue((c.partnerTrust[i]||0)+6);const o=En(i);le("和 "+(o?o.nick:"伙伴")+" 聊了很久，信赖 +6")}else c.momBond=ue(c.momBond+4),le("和妈妈聊了一会儿，家庭默契 +4");break;case"research":{const i=t&&t.product?t.product:c.unlocked[0],o=c.levels[i]||1;if(o>=5)return!1;c.levels[i]=Math.min(5,o+1),c.style.innovation+=3,le("推进了「"+st(i).name+"」的做法，熟练度提升");break}case"market":c.cash-=800,c.popularity=ue(c.popularity+2),c.brand=ue(c.brand+1.5),le("发了新品帖子，知名度上升");break;case"train":{if(!c.staff.length)return!1;const i=t&&t.partner?t.partner:c.staff[0];c.cash-=400,c.partnerSkill[i]=Math.min(5,(c.partnerSkill[i]||1)+1);const o=En(i);le("培训了 "+(o?o.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const i=On.find(o=>o.lv===c.shopLevel+1);if(!i)return!1;c.cash-=i.cost,c.shopLevel=i.lv,c.maxAp=8+(i.ap||0),c.reputation=ue(c.reputation+3),c.style.community+=2,le("店铺升级为「"+i.name+"」","good");break}case"survey":{const i=en.find(o=>!c.cities.includes(o.id)&&!c.surveyed.includes(o.id));if(!i)return!1;c.cash-=2e3,c.surveyed.push(i.id),le("去"+i.name+"看了一圈，可以筹备开店了");break}case"branch":{const i=en.find(o=>o.id===c.surveyed[0]);if(!i)return!1;c.cash-=i.cost,c.storeCount+=1,c.cities.push(i.id),c.surveyed=c.surveyed.filter(o=>o!==i.id),c.brand=ue(c.brand+6),c.style.efficiency+=3,le("在"+i.name+"开了新店","good");break}default:return!1}return c.ap-=n.ap,Ci[e]&&(c.cd[e]=c.dayIndex+Ci[e]),s>c.cash&&(c.monthCost+=s-c.cash),Re(),!0}function Wc(e,t){const n=Math.max(0,Math.min(99,Math.floor(t||0)));n===0?delete c.plan[e]:c.plan[e]=n}function zc(){if(c.phase!=="playing")return{ok:!1,msg:"游戏已经结束了"};const e=Object.keys(c.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const t=e.reduce((o,r)=>o+c.plan[r],0);if(t>c.stock)return{ok:!1,msg:"原料不够，还差 "+(t-c.stock)+" 份"};const n=Wo();if(n>ct.value)return{ok:!1,msg:"产能不够。今天的产能是 "+ct.value+" 点，还差 "+(n-ct.value)};const s=Ho+c.staff.length*Bo,i=Math.max(0,n-s);c.stock-=t,c.stamina=Math.max(0,c.stamina-i);for(const o of e)c.shelf[o]=(c.shelf[o]||0)+c.plan[o],c.dayMade+=c.plan[o],c.levels[o]=Math.min(5,(c.levels[o]||1)+c.plan[o]*.02);return le("做了 "+t+" 个蛋糕，自己出了 "+i+" 点体力"),c.plan={},Re(),{ok:!0,msg:"做好了 "+t+" 个"}}function Gc(){c.orders=[];const e=.35+c.popularity/300,t=Math.random()<e?Math.random()<.35?2:1:0;for(let n=0;n<t;n++){const s=Ko.value;if(!s.length)break;const i=s[Math.floor(Math.random()*s.length)],o=Math.random(),r=o<.28,l=!r&&o<.66,a=!r&&!l&&o<.75,m=r?"定制":l?"线上":a?"节日":"普通",f=r?1:1+Math.floor(Math.random()*2);c.orders.push({id:"o"+c.month+"-"+c.day+"-"+n,type:m,product:i.id,qty:f,pay:Math.round(ln(i.id)*f*(r?1.6:1.25)),taken:!1})}}function Yc(e){const t=c.orders.find(n=>n.id===e);return t?(t.taken=!t.taken,Re(),!0):!1}function Mi(){if(c.phase!=="playing"||c.daySold>0||c.dayRev>0)return null;let e=0,t=0;const n={};for(const s of c.orders){if(!s.taken)continue;const i=c.shelf[s.product]||0;i<s.qty||(c.shelf[s.product]=i-s.qty,e+=s.pay,t+=s.qty,n[s.product]=(n[s.product]||0)+s.qty,c.doneOrders+=1,s.type==="定制"&&(c.customOrders+=1),s.type==="线上"&&(c.onlineOrders+=1),s.type==="节日"&&(c.festivalOrders+=1),c.loyalty=ue(c.loyalty+2))}for(const s of Object.keys(c.shelf)){const i=c.shelf[s]||0;if(i<=0)continue;const o=Math.min(i,qo(s));c.shelf[s]=i-o,e+=o*ln(s),t+=o,n[s]=(n[s]||0)+o}return c.dayRev=e,c.daySold=t,c.monthRev+=e,Object.keys(n).forEach(s=>{c.monthSold[s]=(c.monthSold[s]||0)+n[s]}),t>0&&(c.reputation=ue(c.reputation+.12),c.loyalty=ue(c.loyalty+.1),c.popularity=ue(c.popularity+.05)),le("今天卖出 "+t+" 个，收入 "+e,t>0?"good":"bad"),Re(),{rev:e,sold:t}}const ys={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function Jc(e){const t=ys[e]||ys.discount;let n=0,s=0;for(const r of Object.keys(c.shelf))n+=c.shelf[r]||0,s+=(c.shelf[r]||0)*ln(r);let i=0;n>0&&(i=Math.round(s*t.cashRate),c.cash+=i,t.community&&(c.style.community+=t.community*.3)),t.community>=2&&(c.reputation=ue(c.reputation+1)),c.dayLeft=n,c.shelf={};const o={day:c.day,rev:c.dayRev,sold:c.daySold,left:n,gain:i};return c.dayRev=0,c.daySold=0,c.dayMade=0,Xc(),Re(),o}function Xc(){c.day+=1,c.dayIndex+=1,c.day>Tn?(c.day=1,Zc()):js()}function js(){c.ap=c.maxAp,c.stamina=Math.min(c.maxStamina,c.stamina+70),c.plan={},c.shelf||(c.shelf={}),Gc(),Re()}function Zc(){const e=Uo.value;c.monthCost+=e,c.cash+=c.monthRev-e;let t=null;c.cash<0&&(c.usedMomHelp?(c.cash=0,c.reputation=ue(c.reputation-2),t="这个月很难，勉强撑过去了"):(c.cash=3e3,c.usedMomHelp=!0,t="资金见底，妈妈先垫了一笔周转"),le(t,"bad"));let n=null,s=0;Object.keys(c.monthSold).forEach(r=>{c.monthSold[r]>s&&(s=c.monthSold[r],n=r)}),c.report={month:c.month,rev:c.monthRev,cost:c.monthCost,net:c.monthRev-c.monthCost,best:n?st(n).name:"—",bestN:s,warn:t};const i=c.month;if(c.month+=1,c.monthRev=0,c.monthCost=0,c.monthSold={},c.shelf={},Zt.forEach(r=>{r.month>0&&r.month<=c.month&&!c.unlocked.includes(r.id)&&(c.unlocked.push(r.id),le("新配方入手："+r.name,"story"))}),Qt.forEach(r=>{r.joinMonth===c.month&&zo(r.id)}),i===29){const r=Object.values(c.partnerTrust).filter(l=>l>=70).length;c.helpers=r+(c.momBond>=70?1:0)}const o=ps.find(r=>r.to===i&&!r.final);if(o){if(!Qc(o)){c.phase="ended",c.ending=o.short,le("阶段目标没有达成","bad"),Re();return}c.stage=o.id+1,le("第 "+o.id+" 阶段目标达成","good")}if(c.month>36){c.month=36,c.phase="ended",c.ending=ea(),Re();return}c.stamina=c.maxStamina,js(),Yo()}function Qc(e){if(!e.goals.length)return!0;const t=e.goals.filter(n=>n.check(c));return!(t.length<e.need||e.needExpand&&!t.some(n=>n.expand))}function ea(){if(c.storeCount>=6)return{...ts.national,key:"national"};if(c.storeCount>=3)return{...ts.regional,key:"regional"};const e=c.style,t=Object.keys(e).sort((i,o)=>e[o]-e[i])[0],s={tradition:"tradition",innovation:"creative",community:"community"}[t]||"community";return{...ts[s],key:s}}function Yo(){const e=bt.events.filter(n=>!c.played.includes(n.id)&&n.trigger&&n.trigger.type==="cond"&&Rc(n.trigger,c)),t=bt.events.filter(n=>!c.played.includes(n.id)&&n.trigger&&n.trigger.type==="random");t.length&&Math.random()<.4&&e.push(t[Math.floor(Math.random()*t.length)]),e.sort((n,s)=>n.id.localeCompare(s.id)),e.forEach(n=>{Oe.events.find(s=>s.id===n.id)||Oe.events.push(n)})}function Si(){Yo();const e=bt.events.find(t=>t.trigger&&t.trigger.type==="start");e&&!c.played.includes(e.id)&&Oe.events.unshift(e)}function ta(e,t){c.played.includes(e.id)||c.played.push(e.id);const n=$i(e.rewards||[]);t&&t.length&&n.push(...$i(t)),n.length&&le("剧情："+e.title,"story"),Re()}const $t=(e,t)=>{const n=e.__vccOpts||e;for(const[s,i]of t)n[s]=i;return n},na={class:"sheet"},sa={class:"sheet-head"},ia={class:"t serif"},oa={key:0,class:"small muted"},la={key:0,class:"say narration"},ra={class:"txt"},ca={key:1,class:"say"},aa={class:"av"},ua=["src","alt"],fa={key:1,class:"fb"},da={class:"bubble"},ha={class:"who"},pa={class:"txt"},ma={key:2,class:"say"},ga={class:"bubble",style:{width:"100%"}},_a={class:"txt",style:{"margin-bottom":"10px"}},ya={key:0,class:"opts"},va=["onClick"],ba={key:0,class:"r"},xa={class:"sheet-foot"},ka={key:2,class:"small muted",style:{"text-align":"center"}},wa={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:t}){const n=e,s=t,i=ke(0),o=ke([]),r=ke(null);_n(()=>n.ev.id,()=>{i.value=n.ev.beats.length?1:0,o.value=[]},{immediate:!0});const l=J(()=>n.ev.beats[i.value-1]||null),a=J(()=>n.ev.beats.slice(0,i.value)),m=J(()=>i.value>=n.ev.beats.length),f=J(()=>l.value&&l.value.type==="ask"),p={林念:"ln",苏晴:"sq",林暖:"nu"};function y(L){return!L.speaker||!Sn[p[L.speaker]]?"":Cc(p[L.speaker],L.emotion)}function T(L){return L.map(H=>H.kind==="num"?H.key+(H.value>=0?"+":"")+H.value:H.key+"："+H.value).join("，")}async function B(){await eo(),r.value&&(r.value.scrollTop=r.value.scrollHeight)}function F(){f.value||m.value||(i.value+=1,B())}function P(L){o.value=o.value.concat(L.rewards||[]),i.value+=1,B()}function V(){ta(n.ev,o.value),s("done")}return(L,H)=>(w(),$("div",{class:"mask",onClick:hs(F,["self"])},[u("div",na,[u("div",sa,[u("div",ia,g(e.ev.title),1),e.ev.scene?(w(),$("div",oa,g(e.ev.scene),1)):ee("",!0)]),u("div",{class:"sheet-body",ref_key:"bodyEl",ref:r,onClick:F},[(w(!0),$(q,null,oe(a.value,(A,te)=>(w(),$(q,{key:te},[A.type==="say"&&!A.speaker?(w(),$("div",la,[u("div",ra,g(A.text),1)])):A.type==="say"?(w(),$("div",ca,[u("div",aa,[y(A)?(w(),$("img",{key:0,src:y(A),alt:A.speaker},null,8,ua)):(w(),$("span",fa,g(A.speaker.slice(0,1)),1))]),u("div",da,[u("div",ha,g(A.speaker),1),u("div",pa,g(A.text),1)])])):A.type==="ask"?(w(),$("div",ma,[u("div",ga,[H[0]||(H[0]=u("div",{class:"who"},"选择",-1)),u("div",_a,g(A.text),1)])])):ee("",!0)],64))),128)),f.value?(w(),$("div",ya,[(w(!0),$(q,null,oe(l.value.options,(A,te)=>(w(),$("button",{key:te,class:"opt",type:"button",onClick:hs(Xe=>P(A),["stop"])},[Fe(g(A.text)+" ",1),A.rewards.length?(w(),$("span",ba,g(T(A.rewards)),1)):ee("",!0)],8,va))),128))])):ee("",!0)],512),u("div",xa,[m.value?(w(),$("button",{key:0,class:"btn primary block",type:"button",onClick:V}," 结束 ")):f.value?(w(),$("div",ka,"选一个吧")):(w(),$("button",{key:1,class:"btn block",type:"button",onClick:F}," 继续 "))])])]))}},$a=$t(wa,[["__scopeId","data-v-b4aa96cc"]]),Ca={class:"shop-hero"},Ma={class:"tag"},Sa=["src"],Ea={class:"cap"},Oa={class:"small muted"},Ta={class:"card card-pad",style:{"margin-top":"12px"}},Aa={class:"between",style:{"margin-bottom":"6px"}},Ia={class:"small"},Fa={class:"between",style:{"margin-bottom":"6px"}},Da={class:"small"},Pa={class:"between",style:{"margin-bottom":"6px"}},Ra={class:"small"},ja={class:"between"},La={class:"small"},Na={key:0,class:"card",style:{"margin-top":"12px"}},Ha={style:{flex:"1 1 auto","min-width":"0"}},Ba={style:{"font-size":"14px","font-weight":"600"}},Ka={class:"small muted"},Va=["onClick"],qa={class:"card card-pad",style:{"margin-top":"12px"}},Ua={key:0},Wa=["disabled"],za={key:1},Ga={class:"between",style:{"margin-bottom":"6px"}},Ya={class:"small"},Ja={class:"between",style:{"margin-bottom":"10px"}},Xa={class:"small"},Za={key:0,class:"shelf-left"},Qa={class:"small"},eu={class:"small muted"},tu={key:2},nu=["onClick"],su={class:"r"},iu={class:"card card-pad",style:{"margin-top":"12px"}},ou={class:"k"},lu={class:"track"},ru={class:"v"},cu={__name:"ShopPage",emits:["closed"],setup(e,{emit:t}){const n=t,s=J(()=>Mc(c.shopLevel)),i=J(()=>Object.values(c.shelf||{}).reduce((m,f)=>m+f,0)),o=J(()=>c.dayRev>0||c.daySold>0),r=J(()=>Object.keys(c.shelf||{}).filter(m=>c.shelf[m]>0).map(m=>({id:m,name:st(m).name,qty:c.shelf[m]}))),l=ke(!1);function a(m){const f=Jc(m);l.value=!1,n("closed",f)}return(m,f)=>(w(),$("div",null,[u("div",Ca,[u("span",Ma,g(s.value.name),1),u("img",{src:E(ve)("shop-exterior.webp"),alt:"林记烘焙"},null,8,Sa),u("div",Ea,[f[2]||(f[2]=u("div",{class:"n serif"},"林记烘焙",-1)),u("div",Oa,g(E(gs)(E(c).month))+" · 第 "+g(E(c).day)+" / "+g(E(Tn))+" 个经营日 · 共 "+g(E(c).storeCount)+" 家店 ",1)])]),u("div",Ta,[f[7]||(f[7]=u("div",{class:"h2"},"今天",-1)),u("div",Aa,[f[3]||(f[3]=u("span",{class:"small muted"},"产能（体力 + 妈妈 + 伙伴）",-1)),u("span",Ia,g(E(ct))+" 点",1)]),u("div",Fa,[f[4]||(f[4]=u("span",{class:"small muted"},"原料库存",-1)),u("span",Da,g(E(c).stock)+" 份",1)]),u("div",Pa,[f[5]||(f[5]=u("span",{class:"small muted"},"待售成品",-1)),u("span",Ra,g(i.value)+" 个",1)]),u("div",ja,[f[6]||(f[6]=u("span",{class:"small muted"},"本月固定成本",-1)),u("span",La,"¥"+g(E(Uo)),1)])]),E(c).orders.length?(w(),$("div",Na,[f[8]||(f[8]=u("div",{class:"card-pad",style:{"padding-bottom":"2px"}},[u("div",{class:"h2",style:{margin:"0"}},[Fe("今日订单 "),u("span",{class:"sub"},"接单后营业时优先交付")])],-1)),(w(!0),$(q,null,oe(E(c).orders,p=>(w(),$("div",{key:p.id,class:"cake",style:{"align-items":"center"}},[u("div",Ha,[u("div",Ba,g(p.type)+" · "+g(E(st)(p.product).name)+" × "+g(p.qty),1),u("div",Ka,"交付可得 ¥"+g(p.pay),1)]),u("button",{class:fe(["btn",{primary:p.taken}]),style:{height:"34px",padding:"0 14px","font-size":"13px"},type:"button",onClick:y=>E(Yc)(p.id)},g(p.taken?"已接":"接单"),11,Va)]))),128))])):ee("",!0),u("div",qa,[o.value?(w(),$("div",za,[f[15]||(f[15]=u("div",{class:"h2"},"今天的成绩",-1)),u("div",Ga,[f[11]||(f[11]=u("span",{class:"small muted"},"卖出",-1)),u("span",Ya,g(E(c).daySold)+" 个",1)]),u("div",Ja,[f[12]||(f[12]=u("span",{class:"small muted"},"收入",-1)),u("span",Xa,"¥"+g(E(c).dayRev),1)]),r.value.length?(w(),$("div",Za,[f[13]||(f[13]=u("div",{class:"small muted",style:{"margin-bottom":"6px"}},"还剩",-1)),(w(!0),$(q,null,oe(r.value,p=>(w(),$("div",{class:"between",key:p.id,style:{"margin-bottom":"4px"}},[u("span",Qa,g(p.name),1),u("span",eu,g(p.qty)+" 个",1)]))),128))])):ee("",!0),l.value?(w(),$("div",tu,[f[14]||(f[14]=u("div",{class:"small muted",style:{"margin-bottom":"8px"}},"剩下的怎么处理？",-1)),(w(!0),$(q,null,oe(E(ys),(p,y)=>(w(),$("button",{key:y,class:"opt",type:"button",onClick:T=>a(y)},[Fe(g(p.label)+" ",1),u("span",su,g(p.cashRate?"回收一半成本":"不换钱")+g(p.community?"，社区好感 +"+p.community:""),1)],8,nu))),128))])):(w(),$("button",{key:1,class:"btn primary block",type:"button",onClick:f[1]||(f[1]=p=>l.value=!0)}," 打烊结算 "))])):(w(),$("div",Ua,[f[9]||(f[9]=u("div",{class:"h2"},"营业",-1)),f[10]||(f[10]=u("p",{class:"small muted",style:{margin:"0 0 10px"}}," 开门之后先交付已接的订单，剩下的按客流卖出去。 ",-1)),u("button",{class:"btn primary block",type:"button",disabled:i.value===0,onClick:f[0]||(f[0]=(...p)=>E(Mi)&&E(Mi)(...p))},g(i.value===0?"还没有成品，先去厨房做":"开门营业"),9,Wa)]))]),u("div",iu,[f[16]||(f[16]=u("div",{class:"h2"},"统计",-1)),(w(!0),$(q,null,oe([{k:"口碑",v:E(c).reputation,cls:"sage"},{k:"知名度",v:E(c).popularity,cls:"sage"},{k:"顾客忠诚",v:E(c).loyalty,cls:""},{k:"品牌影响",v:E(c).brand,cls:"pink"}],p=>(w(),$("div",{class:"stat",key:p.k},[u("span",ou,g(p.k),1),u("span",lu,[u("span",{class:fe(["fill",p.cls]),style:xe({width:p.v+"%"})},null,6)]),u("span",ru,g(Math.round(p.v)),1)]))),128))])]))}},au=$t(cu,[["__scopeId","data-v-a0480f22"]]),uu={viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},fu=["fill"],du=["fill"],hu=["fill"],pu=["fill"],mu=["fill"],gu=["fill"],_u=["fill"],yu=["fill"],vu=["fill"],bu=["fill"],xu=["fill"],ku={__name:"CakeArt",props:{colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){return(t,n)=>(w(),$("svg",uu,[n[0]||(n[0]=u("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),n[1]||(n[1]=u("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),u("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,fu),u("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,du),u("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,hu),u("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,pu),u("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,mu),u("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,gu),u("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,_u),u("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,yu),u("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,vu),u("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,bu),u("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,xu)]))}},Jo=$t(ku,[["__scopeId","data-v-93de33d5"]]),wu={class:"card card-pad"},$u={class:"between",style:{"margin-bottom":"8px"}},Cu={class:"track",style:{height:"8px",background:"var(--apricot)","border-radius":"999px",overflow:"hidden"}},Mu={class:"between small muted",style:{"margin-top":"8px"}},Su={class:"card",style:{"margin-top":"12px"}},Eu={class:"art"},Ou={class:"body"},Tu={class:"name"},Au={class:"chip",style:{"font-size":"10px"}},Iu={class:"nums"},Fu={class:"tiers"},Du=["onClick"],Pu={class:"stepper"},Ru=["onClick"],ju=["onClick"],Lu={__name:"KitchenPage",setup(e){const t=ke(""),n=ke(!1);let s=0;const i=J(()=>Wo()),o=J(()=>Object.values(c.plan).reduce((f,p)=>f+p,0)),r=J(()=>Ko.value.map(f=>({...f,lv:c.levels[f.id]||1,price:ln(f.id),demand:qo(f.id),tier:c.prices[f.id]||"std",qty:c.plan[f.id]||0})));function l(f,p){const y=c.plan[f]||0;Wc(f,y+p)}function a(f,p){c.prices[f]=p}function m(){const f=zc();t.value=f.msg,n.value=!f.ok,clearTimeout(s),s=setTimeout(()=>t.value="",2200)}return(f,p)=>(w(),$("div",null,[u("div",wu,[u("div",$u,[p[0]||(p[0]=u("div",{class:"h2",style:{margin:"0"}},"厨房",-1)),u("span",{class:fe(["chip",i.value>E(ct)?"pink":"sage"])}," 产能 "+g(i.value)+" / "+g(E(ct)),3)]),u("div",Cu,[u("div",{style:xe([{height:"100%","border-radius":"999px",transition:"width .3s"},{width:Math.min(100,i.value/Math.max(1,E(ct))*100)+"%",background:i.value>E(ct)?"#d95b67":"linear-gradient(90deg,#e9c9a3,#d9a06a)"}])},null,4)]),u("div",Mu,[u("span",null,"原料 "+g(E(c).stock)+" 份 · 计划 "+g(o.value)+" 个",1),u("span",null,"体力 "+g(E(c).stamina),1)])]),u("div",Su,[(w(!0),$(q,null,oe(r.value,y=>(w(),$("div",{key:y.id,class:"cake"},[u("div",Eu,[Ie(Jo,{colors:y.colors},null,8,["colors"])]),u("div",Ou,[u("div",Tu,[u("span",null,g(y.name),1),u("span",Au,"Lv"+g(Math.round(y.lv*10)/10),1)]),u("div",Iu,[u("span",null,"¥"+g(y.price),1),u("span",null,"预计卖 "+g(y.demand)+" 个",1),u("span",null,g(y.diff)+" 点/个",1)]),u("div",Fu,[(w(!0),$(q,null,oe(E(Lo),(T,B)=>(w(),$("button",{key:B,type:"button",class:fe(["tier",{on:y.tier===B}]),onClick:F=>a(y.id,B)},g(T.label),11,Du))),128))])]),u("div",Pu,[u("button",{type:"button",onClick:T=>l(y.id,-1)},"−",8,Ru),u("span",null,g(y.qty),1),u("button",{type:"button",onClick:T=>l(y.id,1)},"+",8,ju)])]))),128))]),t.value?(w(),$("p",{key:0,class:"small",style:xe({color:n.value?"var(--berry)":"#6c8a55",margin:"10px 2px 0"})},g(t.value),5)):ee("",!0),u("button",{class:"btn primary block",style:{"margin-top":"12px"},type:"button",onClick:m}," 开始制作（消耗原料与体力） "),p[1]||(p[1]=u("p",{class:"small muted",style:{margin:"9px 2px 0","text-align":"center"}}," 妈妈每天帮 60 点产能，每位伙伴 40 点，超出部分才用你的体力 ",-1))]))}},Nu=$t(Lu,[["__scopeId","data-v-1004f0dd"]]),Hu={class:"card",style:{overflow:"hidden"}},Bu={style:{display:"flex"}},Ku={class:"portrait"},Vu=["src"],qu={style:{flex:"1 1 auto",padding:"14px"}},Uu={class:"stat",style:{"margin-top":"12px"}},Wu={class:"track"},zu={class:"v"},Gu={class:"card",style:{"margin-top":"12px",overflow:"hidden"}},Yu={style:{display:"flex"}},Ju={class:"portrait"},Xu=["src"],Zu={style:{flex:"1 1 auto",padding:"14px"}},Qu={class:"stat",style:{"margin-top":"12px"}},ef={class:"track"},tf={class:"v"},nf={class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}},sf={class:"card card-pad",style:{"margin-top":"12px"}},of={class:"h2"},lf={class:"sub"},rf={style:{flex:"1 1 auto","min-width":"0"}},cf={class:"nm"},af={class:"chip",style:{"font-size":"10px"}},uf={key:0,class:"chip pink",style:{"font-size":"10px"}},ff={class:"nt"},df={key:0,class:"bars"},hf={class:"b"},pf={class:"bt"},mf={class:"bv"},gf={class:"b"},_f={class:"bl"},yf={class:"bt"},vf={class:"bv"},bf={class:"card card-pad",style:{"margin-top":"12px"}},xf={class:"k"},kf={class:"track"},wf={class:"v"},$f={__name:"PartnersPage",setup(e){const t=Sn.nu,n=Sn.sq,s=J(()=>Qt.map(r=>{const l=c.staff.includes(r.id);return{...r,joined:l,trust:Math.round(c.partnerTrust[r.id]||0),skill:Math.round((c.partnerSkill[r.id]||0)*10)/10}})),i=J(()=>c.photos.length),o=J(()=>Object.keys(ms).length);return(r,l)=>(w(),$("div",null,[u("div",Hu,[u("div",Bu,[u("div",Ku,[u("img",{src:E(t).full,alt:"林暖"},null,8,Vu)]),u("div",qu,[l[1]||(l[1]=u("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"林暖",-1)),l[2]||(l[2]=u("div",{class:"small muted"},"母亲 · 林记上一任经营者",-1)),u("div",Uu,[l[0]||(l[0]=u("span",{class:"k"},"家庭默契",-1)),u("span",Wu,[u("span",{class:"fill",style:xe({width:E(c).momBond+"%"})},null,4)]),u("span",zu,g(Math.round(E(c).momBond)),1)]),l[3]||(l[3]=u("div",{class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}}," 前期仍在店里帮忙，每天能搭 60 点产能。她不会替你把所有事都做完。 ",-1))])])]),u("div",Gu,[u("div",Yu,[u("div",Ju,[u("img",{src:E(n).full,alt:"苏晴"},null,8,Xu)]),u("div",Zu,[l[5]||(l[5]=u("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"苏晴",-1)),l[6]||(l[6]=u("div",{class:"small muted"},"高中好友 · 摄影从业者",-1)),u("div",Qu,[l[4]||(l[4]=u("span",{class:"k"},"友情",-1)),u("span",ef,[u("span",{class:"fill pink",style:xe({width:E(c).friendship+"%"})},null,4)]),u("span",tf,g(Math.round(E(c).friendship)),1)]),u("div",nf," 不在员工名单里。相册 "+g(i.value)+" / "+g(o.value)+" 张。 ",1)])])]),u("div",sf,[u("div",of,[l[7]||(l[7]=Fe("伙伴 ",-1)),u("span",lf,g(E(c).staff.length)+" / "+g(E(Qt).length)+" 人",1)]),(w(!0),$(q,null,oe(s.value,a=>(w(),$("div",{key:a.id,class:fe(["mate",{off:!a.joined}])},[u("div",{class:"ava",style:xe({background:a.color})},g(a.name.slice(0,1)),5),u("div",rf,[u("div",cf,[Fe(g(a.name)+" ",1),u("span",af,g(a.role),1),a.joined?ee("",!0):(w(),$("span",uf,"第 "+g(a.joinMonth)+" 个月加入",1))]),u("div",ff,g(a.issue),1),a.joined?(w(),$("div",df,[u("span",hf,[l[8]||(l[8]=u("span",{class:"bl"},"信赖",-1)),u("span",pf,[u("span",{class:"bf",style:xe({width:a.trust+"%"})},null,4)]),u("span",mf,g(a.trust),1)]),u("span",gf,[u("span",_f,g(a.skillName),1),u("span",yf,[u("span",{class:"bf sage",style:xe({width:a.skill*20+"%"})},null,4)]),u("span",vf,g(a.skill),1)])])):ee("",!0)])],2))),128))]),u("div",bf,[l[9]||(l[9]=u("div",{class:"h2"},[Fe("经营偏好 "),u("span",{class:"sub"},"长期选择积累出的风格")],-1)),(w(!0),$(q,null,oe([{k:"传统",v:E(c).style.tradition},{k:"创新",v:E(c).style.innovation},{k:"效率",v:E(c).style.efficiency},{k:"社区",v:E(c).style.community}],a=>(w(),$("div",{class:"stat",key:a.k},[u("span",xf,g(a.k),1),u("span",kf,[u("span",{class:"fill",style:xe({width:Math.min(100,a.v)+"%"})},null,4)]),u("span",wf,g(Math.round(a.v)),1)]))),128))])]))}},Cf=$t($f,[["__scopeId","data-v-ead7304a"]]),Mf={class:"card card-pad"},Sf={class:"between"},Ef={class:"row",style:{gap:"4px","flex-wrap":"wrap","max-width":"150px","justify-content":"flex-end"}},Of={class:"between small muted",style:{"margin-top":"8px"}},Tf={class:"act-grid",style:{"margin-top":"10px"}},Af=["disabled","onClick"],If={class:"t"},Ff={class:"c"},Df={class:"n"},Pf={key:0,class:"n cost"},Rf={key:0,class:"card card-pad",style:{"margin-top":"10px"}},jf={class:"h2"},Lf={class:"pills"},Nf=["onClick"],Hf={class:"muted"},Bf={key:1,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"}},Kf={class:"card card-pad",style:{"margin-top":"12px"}},Vf={class:"between",style:{"margin-bottom":"8px"}},qf={class:"small muted",style:{"margin-bottom":"8px"}},Uf={key:0,class:"chip pink",style:{"font-size":"10px"}},Wf={class:"card card-pad",style:{"margin-top":"12px"}},zf={key:0,class:"empty"},Gf={class:"d"},Yf={class:"x"},Jf={__name:"ManagePage",setup(e){const t=ke(""),n=ke("");let s=0;const i=J(()=>["restock","feedback","talk","research","market","train","decorate","survey","branch"].map(f=>({id:f,info:_s(f)}))),o=J(()=>t.value==="research"?c.unlocked.map(f=>({id:f,label:st(f).name,sub:"Lv"+Math.round((c.levels[f]||1)*10)/10})):t.value==="train"||t.value==="talk"?Go().map(f=>({id:f.id,label:f.nick,sub:"信赖 "+Math.round(c.partnerTrust[f.id]||0)})):[]);function r(f){return f==="research"?c.unlocked.length>1:f==="train"||f==="talk"?c.staff.length>1:!1}function l(f){const p=_s(f);if(p.disabled||c.ap<p.ap||p.cost&&c.cash<p.cost){m("现在做不了："+p.note);return}if(r(f)){t.value=t.value===f?"":f;return}a(f,{})}function a(f,p){const y=Uc(f,p);t.value="",y||m("没有执行成功，检查一下行动力或资金")}function m(f){n.value=f,clearTimeout(s),s=setTimeout(()=>n.value="",2e3)}return(f,p)=>(w(),$("div",null,[u("div",Mf,[u("div",Sf,[p[0]||(p[0]=u("div",null,[u("div",{class:"h2",style:{margin:"0"}},"今天的行动力"),u("div",{class:"small muted",style:{"margin-top":"2px"}}," 每个经营日开始回满，不累积 ")],-1)),u("div",Ef,[(w(!0),$(q,null,oe(E(c).maxAp,y=>(w(),$("span",{key:y,class:fe(["ap-dot",{on:y<=E(c).ap}])},null,2))),128))])]),u("div",Of,[u("span",null,"剩余 "+g(E(c).ap)+" / "+g(E(c).maxAp)+" 点",1),u("span",null,"体力 "+g(E(c).stamina)+" / "+g(E(c).maxStamina),1)])]),u("div",Tf,[(w(!0),$(q,null,oe(i.value,y=>(w(),$("button",{key:y.id,class:fe(["act",{on:t.value===y.id}]),type:"button",disabled:y.info.disabled||E(c).ap<y.info.ap||y.info.cost>0&&E(c).cash<y.info.cost,onClick:T=>l(y.id)},[u("span",If,[u("span",null,g(y.info.name),1),u("span",Ff,g(y.info.ap)+"点",1)]),u("span",Df,g(y.info.note),1),y.info.cost>0?(w(),$("span",Pf,"花费 ¥"+g(y.info.cost),1)):ee("",!0)],10,Af))),128))]),t.value&&o.value.length?(w(),$("div",Rf,[u("div",jf,g(t.value==="research"?"研发哪一款？":"和谁？"),1),u("div",Lf,[(w(!0),$(q,null,oe(o.value,y=>(w(),$("button",{key:y.id,type:"button",class:"pill",onClick:T=>a(t.value,t.value==="research"?{product:y.id}:{partner:y.id})},[Fe(g(y.label)+" ",1),u("span",Hf,g(y.sub),1)],8,Nf))),128))])])):ee("",!0),n.value?(w(),$("p",Bf,g(n.value),1)):ee("",!0),u("div",Kf,[u("div",Vf,[p[1]||(p[1]=u("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),u("span",{class:fe(["chip",E(Mt).done>=E(Mt).need?"sage":""])},g(E(Mt).done)+" / "+g(E(Mt).need||"—"),3)]),u("div",qf,g(E(Rs).name)+" · 完成 "+g(E(Mt).need)+" 项即可进入下一阶段，否则本局提前结束 ",1),(w(!0),$(q,null,oe(E(Mt).list,y=>(w(),$("div",{key:y.text,class:fe(["goal",{done:y.done}])},[p[2]||(p[2]=u("span",{class:"dot"},null,-1)),u("span",null,g(y.text),1),y.expand?(w(),$("span",Uf,"扩张")):ee("",!0)],2))),128))]),u("div",Wf,[p[3]||(p[3]=u("div",{class:"h2"},"最近发生的事",-1)),E(c).log.length?ee("",!0):(w(),$("div",zf,"还没有记录。")),(w(!0),$(q,null,oe(E(c).log.slice(0,10),(y,T)=>(w(),$("div",{key:T,class:fe(["logline",y.tone])},[u("span",Gf,g(y.month)+"月"+g(y.day)+"日",1),u("span",Yf,g(y.text),1)],2))),128))])]))}},Xf=$t(Jf,[["__scopeId","data-v-0fde078f"]]),Zf={class:"seg"},Qf=["onClick"],ed={key:0,class:"card"},td={class:"art"},nd={class:"body"},sd={class:"name"},id={key:0,class:"chip",style:{"font-size":"10px"}},od={class:"desc"},ld={key:0,class:"nums"},rd={key:1},cd={class:"photos"},ad={class:"im"},ud=["src","alt"],fd={key:1,class:"small muted"},dd={key:2,style:{"font-size":"20px",opacity:"0.3"}},hd={class:"cp"},pd={class:"ti"},md={class:"cc"},gd={key:2,class:"card"},_d={style:{flex:"1 1 auto","min-width":"0"}},yd={class:"nm"},vd={key:0,class:"chip sage",style:{"font-size":"10px"}},bd={key:1,class:"chip pink",style:{"font-size":"10px"}},xd={class:"nt"},kd={key:0,class:"nt"},wd={__name:"CodexPage",setup(e){const t=ke("product"),n=J(()=>Zt.map(o=>({...o,owned:c.unlocked.includes(o.id),lv:Math.round((c.levels[o.id]||1)*10)/10,price:ln(o.id),sold:c.monthSold[o.id]||0}))),s=J(()=>Object.keys(ms).map(o=>({id:o,...ms[o],owned:c.photos.includes(o)}))),i=J(()=>en.map(o=>({...o,owned:c.cities.includes(o.id),surveyed:c.surveyed.includes(o.id)})));return(o,r)=>(w(),$("div",null,[u("div",Zf,[(w(),$(q,null,oe([{k:"product",t:"产品"},{k:"photo",t:"相册"},{k:"city",t:"门店"}],l=>u("button",{key:l.k,type:"button",class:fe({on:t.value===l.k}),onClick:a=>t.value=l.k},g(l.t),11,Qf)),64))]),t.value==="product"?(w(),$("div",ed,[(w(!0),$(q,null,oe(n.value,l=>(w(),$("div",{key:l.id,class:fe(["cake",{locked:!l.owned}])},[u("div",td,[Ie(Jo,{colors:l.colors},null,8,["colors"])]),u("div",nd,[u("div",sd,[u("span",null,g(l.name),1),l.owned?(w(),$("span",id,"Lv"+g(l.lv),1)):ee("",!0)]),u("div",od,g(l.owned?l.desc:"第 "+l.month+" 个月解锁"),1),l.owned?(w(),$("div",ld,[u("span",null,"¥"+g(l.price),1),u("span",null,g(l.diff)+" 点/个",1),u("span",null,"本月卖出 "+g(l.sold),1)])):ee("",!0)])],2))),128))])):t.value==="photo"?(w(),$("div",rd,[u("div",cd,[(w(!0),$(q,null,oe(s.value,l=>(w(),$("div",{key:l.id,class:"photo"},[u("div",ad,[l.owned&&l.img?(w(),$("img",{key:0,src:l.img,alt:l.title},null,8,ud)):l.owned?(w(),$("span",fd,"未冲印")):(w(),$("span",dd,"?"))]),u("div",hd,[u("div",pd,g(l.owned?l.title:"还没发生"),1),u("div",md,g(l.owned?l.caption:"继续经营，它会出现"),1)])]))),128))])])):(w(),$("div",gd,[(w(!0),$(q,null,oe(i.value,l=>(w(),$("div",{key:l.id,class:fe(["city",{on:l.owned,off:!l.owned&&!l.surveyed}])},[r[0]||(r[0]=u("span",{class:"dot"},null,-1)),u("div",_d,[u("div",yd,[Fe(g(l.name)+" ",1),l.owned?(w(),$("span",vd,"营业中")):l.surveyed?(w(),$("span",bd,"已考察")):ee("",!0)]),u("div",xd,g(l.note),1),l.owned?ee("",!0):(w(),$("div",kd," 第 "+g(l.month)+" 个月可考察 · 口碑 "+g(l.rep)+" · 开店 ¥"+g(l.cost),1))])],2))),128))]))]))}},$d=$t(wd,[["__scopeId","data-v-3998c7ee"]]),Cd={class:"app"},Md={class:"topbar"},Sd={class:"m serif"},Ed={class:"purse"},Od={class:"scroll"},Td={class:"between",style:{margin:"-4px 2px 10px"}},Ad={class:"small muted"},Id={class:"chip",style:{"font-size":"10px"}},Fd={class:"nav"},Dd=["onClick"],Pd={class:"ico",viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},Rd=["d"],jd={class:"sheet"},Ld={class:"sheet-head"},Nd={class:"t serif"},Hd={class:"small muted"},Bd={class:"sheet-body"},Kd={class:"card card-pad"},Vd={class:"between small",style:{"margin-bottom":"6px"}},qd={class:"between small",style:{"margin-bottom":"6px"}},Ud={class:"between small",style:{"margin-bottom":"6px"}},Wd={class:"between small"},zd={key:0,class:"card card-pad",style:{"margin-top":"12px"}},Gd={class:"h2"},Yd={class:"between small",style:{"margin-bottom":"6px"}},Jd={class:"between small",style:{"margin-bottom":"6px"}},Xd={class:"between small",style:{"margin-bottom":"6px"}},Zd={class:"between small"},Qd={key:0,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},eh={class:"sheet-foot"},th={key:3,class:"mask"},nh={class:"sheet"},sh={class:"sheet-body",style:{"padding-top":"22px"}},ih={class:"small muted serif"},oh={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},lh={style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},rh={class:"card card-pad"},ch={class:"between small",style:{"margin-bottom":"6px"}},ah={class:"between small",style:{"margin-bottom":"6px"}},uh={class:"between small"},fh={__name:"App",setup(e){const t=[{id:"shop",label:"店铺",icon:"house"},{id:"kitchen",label:"厨房",icon:"bowl"},{id:"partners",label:"伙伴",icon:"heart"},{id:"manage",label:"经营",icon:"list"},{id:"codex",label:"图鉴",icon:"book"}],n={house:"M3.5 10.8 12 4l8.5 6.8V20a1 1 0 0 1-1 1h-4.6v-6H9.1v6H4.5a1 1 0 0 1-1-1z",bowl:"M4 11h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8zM9 7.5c0-1.5 1-2 1-3M13 7.5c0-1.5 1-2 1-3",heart:"M12 20s-7.5-4.6-7.5-9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20z",list:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",book:"M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13H7.5A2.5 2.5 0 0 1 5 17.5zM5 17.5A2.5 2.5 0 0 1 7.5 15H19"},s=ke("shop"),i=ke(null),o=ke(null),r=ke(null);function l(){const F=location.hash.replace("#","");return t.some(P=>P.id===F)?F:"shop"}s.value=l(),window.addEventListener("hashchange",()=>s.value=l());const a=J(()=>c.phase==="ended"&&c.ending&&!Oe.events.length?c.ending:null),m=J(()=>Oe.events.length);function f(){Oe.events.length&&(i.value=Oe.events[0])}function p(){Oe.events.shift(),i.value=null,Re(),Oe.events.length&&setTimeout(f,220)}function y(F){o.value=F,F.day===Tn&&(r.value=c.report)}function T(){o.value=null,r.value=null,Oe.events.length&&f()}function B(){wi(),s.value="shop",Si(),f()}return fo(()=>{Hc()||wi(),Si(),f()}),(F,P)=>(w(),$("div",Cd,[u("div",Md,[u("div",Sd,[Fe(g(E(gs)(E(c).month))+" ",1),u("small",null,"第 "+g(E(c).month)+" / 36 月 · 第 "+g(E(c).day)+" / "+g(E(Tn))+" 日",1)]),u("div",Ed,[P[0]||(P[0]=u("span",{class:"y"},"¥",-1)),Fe(g(E(c).cash.toLocaleString()),1)])]),u("div",Od,[u("div",Td,[u("span",Ad,g(E(Rs).name),1),u("span",Id,"行动力 "+g(E(c).ap),1)]),s.value==="shop"?(w(),yt(au,{key:0,onClosed:y})):s.value==="kitchen"?(w(),yt(Nu,{key:1})):s.value==="partners"?(w(),yt(Cf,{key:2})):s.value==="manage"?(w(),yt(Xf,{key:3})):s.value==="codex"?(w(),yt($d,{key:4})):ee("",!0)]),m.value?(w(),$("button",{key:0,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"calc(var(--nav-h) + 16px)","z-index":"20","box-shadow":"var(--shadow)"},onClick:f}," 有 "+g(m.value)+" 段剧情 ",1)):ee("",!0),u("div",Fd,[(w(),$(q,null,oe(t,V=>u("button",{key:V.id,type:"button",class:fe({on:s.value===V.id}),onClick:L=>s.value=V.id},[(w(),$("svg",Pd,[u("path",{d:n[V.icon]},null,8,Rd)])),u("span",null,g(V.label),1)],10,Dd)),64))]),i.value?(w(),yt($a,{key:1,ev:i.value,onDone:p},null,8,["ev"])):ee("",!0),o.value?(w(),$("div",{key:2,class:"mask",onClick:hs(T,["self"])},[u("div",jd,[u("div",Ld,[u("div",Nd,g(r.value?"月末结算":"打烊了"),1),u("div",Hd,g(E(gs)(E(c).month))+" · 第 "+g(o.value.day)+" 个经营日",1)]),u("div",Bd,[u("div",Kd,[u("div",Vd,[P[1]||(P[1]=u("span",{class:"muted"},"今天卖出",-1)),u("span",null,g(o.value.sold)+" 个",1)]),u("div",qd,[P[2]||(P[2]=u("span",{class:"muted"},"今日收入",-1)),u("span",null,"¥"+g(o.value.rev),1)]),u("div",Ud,[P[3]||(P[3]=u("span",{class:"muted"},"剩下",-1)),u("span",null,g(o.value.left)+" 个",1)]),u("div",Wd,[P[4]||(P[4]=u("span",{class:"muted"},"剩货回收",-1)),u("span",null,"¥"+g(o.value.gain),1)])]),r.value?(w(),$("div",zd,[u("div",Gd,g(r.value.month)+" 月经营报告",1),u("div",Yd,[P[5]||(P[5]=u("span",{class:"muted"},"营业额",-1)),u("span",null,"¥"+g(r.value.rev),1)]),u("div",Jd,[P[6]||(P[6]=u("span",{class:"muted"},"支出",-1)),u("span",null,"¥"+g(r.value.cost),1)]),u("div",Xd,[P[7]||(P[7]=u("span",{class:"muted"},"净收入",-1)),u("span",{style:xe({color:r.value.net>=0?"#6c8a55":"var(--berry)"})},g(r.value.net>=0?"+":"")+g(r.value.net),5)]),u("div",Zd,[P[8]||(P[8]=u("span",{class:"muted"},"最受欢迎",-1)),u("span",null,g(r.value.best)+"（"+g(r.value.bestN)+" 个）",1)]),r.value.warn?(w(),$("p",Qd,g(r.value.warn),1)):ee("",!0)])):ee("",!0)]),u("div",eh,[u("button",{class:"btn primary block",type:"button",onClick:T},g(a.value?"看结局":"继续"),1)])])])):ee("",!0),a.value?(w(),$("div",th,[u("div",nh,[u("div",sh,[u("div",ih,g(a.value.name),1),u("h2",oh,g(a.value.title),1),u("p",lh,g(a.value.text),1),u("div",rh,[u("div",ch,[P[9]||(P[9]=u("span",{class:"muted"},"门店 / 伙伴",-1)),u("span",null,g(E(c).storeCount)+" 家 · "+g(E(c).staff.length)+" 人",1)]),u("div",ah,[P[10]||(P[10]=u("span",{class:"muted"},"产品 / 相册",-1)),u("span",null,g(E(c).unlocked.length)+" 款 · "+g(E(c).photos.length)+" 张",1)]),u("div",uh,[P[11]||(P[11]=u("span",{class:"muted"},"口碑 / 知名度",-1)),u("span",null,g(Math.round(E(c).reputation))+" / "+g(Math.round(E(c).popularity)),1)])])]),u("div",{class:"sheet-foot"},[u("button",{class:"btn primary block",type:"button",onClick:B},"再开一次")])])])):ee("",!0)]))}};xc(fh).mount("#app");
