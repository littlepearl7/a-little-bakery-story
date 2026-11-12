(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ts(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const pe={},Kt=[],ct=()=>{},gi=()=>!1,ur=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),fr=e=>e.startsWith("onUpdate:"),ke=Object.assign,ns=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},zo=Object.prototype.hasOwnProperty,ie=(e,t)=>zo.call(e,t),K=Array.isArray,It=e=>Fn(e)==="[object Map]",Zn=e=>Fn(e)==="[object Set]",Ms=e=>Fn(e)==="[object Date]",Z=e=>typeof e=="function",ge=e=>typeof e=="string",ut=e=>typeof e=="symbol",oe=e=>e!==null&&typeof e=="object",vi=e=>(oe(e)||Z(e))&&Z(e.then)&&Z(e.catch),_i=Object.prototype.toString,Fn=e=>_i.call(e),Go=e=>Fn(e).slice(8,-1),yi=e=>Fn(e)==="[object Object]",rs=e=>ge(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,gn=ts(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return(n=>t[n]||(t[n]=e(n)))},Yo=/-\w/g,Qe=dr(e=>e.replace(Yo,t=>t.slice(1).toUpperCase())),Jo=/\B([A-Z])/g,Gt=dr(e=>e.replace(Jo,"-$1").toLowerCase()),bi=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Er=dr(e=>e?`on${bi(e)}`:""),lt=(e,t)=>!Object.is(e,t),Cr=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},xi=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Zo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Xo=e=>{const t=ge(e)?Number(e):NaN;return isNaN(t)?e:t};let Es;const hr=()=>Es||(Es=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function De(e){if(K(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=ge(r)?nl(r):De(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(ge(e)||oe(e))return e}const Qo=/;(?![^(]*\))/g,el=/:([^]+)/,tl=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function nl(e){const t={};return e.replace(tl,n=>n.startsWith("/*")?"":n).split(Qo).forEach(n=>{if(n){const r=n.split(el);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ve(e){let t="";if(ge(e))t=e;else if(K(e))for(let n=0;n<e.length;n++){const r=ve(e[n]);r&&(t+=r+" ")}else if(oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const rl="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",sl=ts(rl);function ki(e){return!!e||e===""}function il(e,t,n){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=pr(e[s],t[s],n);return r}function Cs(e,t,n){if(e.size!==t.size)return!1;const r=Array.from(t),s=new Uint8Array(r.length);for(const i of e){let o=-1;for(let l=0;l<r.length;l++)if(!s[l]&&pr(i,r[l],n)){o=l;break}if(o<0)return!1;s[o]=1}return!0}function ol(e,t,n){let r=It(e),s=It(t);if(r||s||(r=Zn(e),s=Zn(t),r||s))return r&&s?Cs(e,t,n):!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const l in e){const c=e.hasOwnProperty(l),g=t.hasOwnProperty(l);if(c&&!g||!c&&g||!pr(e[l],t[l],n))return!1}return String(e)===String(t)}function Ts(e,t,n,r){n||(n=[new Map,new Map]);const[s,i]=n;if(s.has(e)||i.has(t))return s.get(e)===t&&i.get(t)===e;s.set(e,t),i.set(t,e);const o=r(e,t,n);return s.delete(e),i.delete(t),o}function pr(e,t,n){if(e===t)return!0;let r=Ms(e),s=Ms(t);return r||s?r&&s?e.getTime()===t.getTime():!1:(r=ut(e),s=ut(t),r||s?e===t:(r=K(e),s=K(t),r||s?r&&s?Ts(e,t,n,il):!1:(r=oe(e),s=oe(t),r||s?!r||!s?!1:Ts(e,t,n,ol):String(e)===String(t))))}const Mi=e=>!!(e&&e.__v_isRef===!0),v=e=>ge(e)?e:e==null?"":K(e)||oe(e)&&(e.toString===_i||!Z(e.toString))?Mi(e)?v(e.value):JSON.stringify(e,Ei,2):String(e),Ei=(e,t)=>Mi(t)?Ei(e,t.value):It(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[Tr(r,i)+" =>"]=s,n),{})}:Zn(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Tr(n))}:ut(t)?Tr(t):oe(t)&&!K(t)&&!yi(t)?String(t):t,Tr=(e,t="")=>{var n;return ut(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ce;class ll{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Ce&&(Ce.active?(this.parent=Ce,this.index=(Ce.scopes||(Ce.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes){const r=this.scopes.slice();for(t=0,n=r.length;t<n;t++)r[t].pause()}for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes){const s=this.scopes.slice();for(t=0,n=s.length;t<n;t++)s[t].resume()}const r=this.effects.slice();for(t=0,n=r.length;t<n;t++)r[t].resume()}}run(t){if(this._active){const n=Ce;try{return Ce=this,t()}finally{Ce=n}}}on(){++this._on===1&&(this.prevScope=Ce,Ce=this)}off(){if(this._on>0&&--this._on===0){if(Ce===this)Ce=this.prevScope;else{let t=Ce;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function al(){return Ce}let he;const wr=new WeakSet;class Ci{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ce&&(Ce.active?Ce.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wr.has(this)&&(wr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ws(this),Si(this);const t=he,n=et;he=this,et=!0;try{return this.fn()}finally{Ai(this),he=t,et=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)os(t);this.deps=this.depsTail=void 0,ws(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Pr(this)&&this.run()}get dirty(){return Pr(this)}}let Ti=0,vn,_n;function wi(e,t=!1){if(e.flags|=8,t){e.next=_n,_n=e;return}e.next=vn,vn=e}function ss(){Ti++}function is(){if(--Ti>0)return;if(_n){let t=_n;for(_n=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;vn;){let t=vn;for(vn=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(r){e||(e=r)}t=n}}if(e)throw e}function Si(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Ai(e){let t,n=e.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),os(r),cl(r)):t=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}e.deps=t,e.depsTail=n}function Pr(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Ii(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Ii(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Mn)||(e.globalVersion=Mn,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Pr(e))))return;e.flags|=2;const t=e.dep,n=he,r=et;he=e,et=!0;try{Si(e);const s=e.fn(e._value);(t.version===0||lt(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{he=n,et=r,Ai(e),e.flags&=-3}}function os(e,t=!1){const{dep:n,prevSub:r,nextSub:s}=e;if(r&&(r.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=r,e.nextSub=void 0),n.subs===e&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)os(i,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function cl(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let et=!0;const $i=[];function ft(){$i.push(et),et=!1}function dt(){const e=$i.pop();et=e===void 0?!0:e}function ws(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=he;he=void 0;try{t()}finally{he=n}}}let Mn=0;class ul{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ls{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!he||!et||he===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==he)n=this.activeLink=new ul(he,this),he.deps?(n.prevDep=he.depsTail,he.depsTail.nextDep=n,he.depsTail=n):he.deps=he.depsTail=n,Oi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=he.depsTail,n.nextDep=void 0,he.depsTail.nextDep=n,he.depsTail=n,he.deps===n&&(he.deps=r)}return n}trigger(t){this.version++,Mn++,this.notify(t)}notify(t){ss();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{is()}}}function Oi(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let r=t.deps;r;r=r.nextDep)Oi(r)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Vr=new WeakMap,Ut=Symbol(""),Br=Symbol(""),En=Symbol("");function we(e,t,n){if(et&&he){let r=Vr.get(e);r||Vr.set(e,r=new Map);let s=r.get(n);s||(r.set(n,s=new ls),s.map=r,s.key=n),s.track()}}function xt(e,t,n,r,s,i){const o=Vr.get(e);if(!o){Mn++;return}const l=c=>{c&&c.trigger()};if(ss(),t==="clear")o.forEach(l);else{const c=K(e),g=c&&rs(n);if(c&&n==="length"){const u=Number(r);o.forEach((h,p)=>{(p==="length"||p===En||!ut(p)&&p>=u)&&l(h)})}else switch((n!==void 0||o.has(void 0))&&l(o.get(n)),g&&l(o.get(En)),t){case"add":c?g&&l(o.get("length")):(l(o.get(Ut)),It(e)&&l(o.get(Br)));break;case"delete":c||(l(o.get(Ut)),It(e)&&l(o.get(Br)));break;case"set":It(e)&&l(o.get(Ut));break}}is()}function Jt(e){const t=se(e);return t===e||(we(t,"iterate",En),We(e))?t:ht(e)?$t(e)?t.map(n=>Ot(ze(n))):t.map(Ot):t.map(ze)}function mr(e){return we(e=se(e),"iterate",En),e}function st(e,t){return ht(e)?Ot($t(e)?ze(t):t):ze(t)}const fl={__proto__:null,[Symbol.iterator](){return Sr(this,Symbol.iterator,e=>st(this,e))},concat(...e){return Jt(this).concat(...e.map(t=>K(t)?Jt(t):t))},entries(){return Sr(this,"entries",e=>(e[1]=st(this,e[1]),e))},every(e,t){return vt(this,"every",e,t,void 0,arguments)},filter(e,t){return vt(this,"filter",e,t,n=>n.map(r=>st(this,r)),arguments)},find(e,t){return vt(this,"find",e,t,n=>st(this,n),arguments)},findIndex(e,t){return vt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return vt(this,"findLast",e,t,n=>st(this,n),arguments)},findLastIndex(e,t){return vt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return vt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Ar(this,"includes",e)},indexOf(...e){return Ar(this,"indexOf",e)},join(e){return Jt(this).join(e)},lastIndexOf(...e){return Ar(this,"lastIndexOf",e)},map(e,t){return vt(this,"map",e,t,void 0,arguments)},pop(){return ln(this,"pop")},push(...e){return ln(this,"push",e)},reduce(e,...t){return As(this,"reduce",e,t)},reduceRight(e,...t){return As(this,"reduceRight",e,t)},shift(){return ln(this,"shift")},some(e,t){return vt(this,"some",e,t,void 0,arguments)},splice(...e){return ln(this,"splice",e)},toReversed(){return Jt(this).toReversed()},toSorted(e){return Jt(this).toSorted(e)},toSpliced(...e){return Jt(this).toSpliced(...e)},unshift(...e){return ln(this,"unshift",e)},values(){return Sr(this,"values",e=>st(this,e))}};function Sr(e,t,n){const r=mr(e),s=r[t],i=s.call(r);if(r!==e&&!We(e)){if(i[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(i));return o.next=()=>Ss(i.next(),n),s!==Ni[t]&&Object.defineProperties(o,{return:{get(){const l=i.return;return typeof l=="function"?l.bind(i):l}},throw:{get(){const l=i.throw;return typeof l=="function"?l.bind(i):l}}}),o}i._next=i.next,i.next=()=>Ss(i._next(),n)}return i}function Ss(e,t){return e.done||(e.value=t(e.value)),e}const Ni=Array.prototype;function vt(e,t,n,r,s,i){const o=mr(e),l=o!==e&&!We(e),c=o[t];if(c!==Ni[t]){const h=c.apply(e,i);return l?ze(h):h}let g=n;o!==e&&(l?g=function(h,p){return n.call(this,st(e,h),p,e)}:n.length>2&&(g=function(h,p){return n.call(this,h,p,e)}));const u=c.call(o,g,r);return l&&s?s(u):u}function As(e,t,n,r){const s=mr(e),i=s!==e&&!We(e);let o=n,l=!1;s!==e&&(i?(l=r.length===0,o=function(g,u,h){return l&&(l=!1,g=st(e,g)),n.call(this,g,st(e,u),h,e)}):n.length>3&&(o=function(g,u,h){return n.call(this,g,u,h,e)}));const c=s[t](o,...r);return l?st(e,c):c}function Ar(e,t,n){const r=se(e);we(r,"iterate",En);const s=r[t](...n);return(s===-1||s===!1)&&us(n[0])?(n[0]=se(n[0]),r[t](...n)):s}function ln(e,t,n=[]){ft(),ss();const r=se(e)[t].apply(e,n);return is(),dt(),r}const dl=ts("__proto__,__v_isRef,__isVue"),Di=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ut));function hl(e){ut(e)||(e=String(e));const t=se(this);return we(t,"has",e),t.hasOwnProperty(e)}class Fi{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ml:Vi:i?Pi:Ri).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=K(t);if(!s){let c;if(o&&(c=fl[n]))return c;if(n==="hasOwnProperty")return hl}const l=Reflect.get(t,n,$e(t)?t:r);if((ut(n)?Di.has(n):dl(n))||(s||we(t,"get",n),i))return l;if($e(l)){const c=o&&rs(n)?l:l.value;return s&&oe(c)?Hr(c):c}return oe(l)?s?Hr(l):rn(l):l}}class Li extends Fi{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];const o=K(t)&&rs(n);if(!this._isShallow){const g=ht(i);if(!We(r)&&!ht(r)&&(i=se(i),r=se(r)),!o&&$e(i)&&!$e(r))return g||(i.value=r),!0}const l=o?Number(n)<t.length:ie(t,n),c=Reflect.set(t,n,r,$e(t)?t:s);return t===se(s)&&c&&(l?lt(r,i)&&xt(t,"set",n,r):xt(t,"add",n,r)),c}deleteProperty(t,n){const r=ie(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&xt(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!ut(n)||!Di.has(n))&&we(t,"has",n),r}ownKeys(t){return we(t,"iterate",K(t)?"length":Ut),Reflect.ownKeys(t)}}class pl extends Fi{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ml=new Li,gl=new pl,vl=new Li(!0);const jr=e=>e,Vn=e=>Reflect.getPrototypeOf(e);function _l(e,t,n){return function(...r){const s=this.__v_raw,i=se(s),o=It(i),l=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,g=s[e](...r),u=n?jr:t?Ot:ze;return!t&&we(i,"iterate",c?Br:Ut),ke(Object.create(g),{next(){const{value:h,done:p}=g.next();return p?{value:h,done:p}:{value:l?[u(h[0]),u(h[1])]:u(h),done:p}}})}}function Bn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function yl(e,t){const n={get(s){const i=this.__v_raw,o=se(i),l=se(s);e||(lt(s,l)&&we(o,"get",s),we(o,"get",l));const{has:c}=Vn(o),g=t?jr:e?Ot:ze;if(c.call(o,s))return g(i.get(s));if(c.call(o,l))return g(i.get(l));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!e&&we(se(s),"iterate",Ut),s.size},has(s){const i=this.__v_raw,o=se(i),l=se(s);return e||(lt(s,l)&&we(o,"has",s),we(o,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const o=this,l=o.__v_raw,c=se(l),g=t?jr:e?Ot:ze;return!e&&we(c,"iterate",Ut),l.forEach((u,h)=>s.call(i,g(u),g(h),o))}};return ke(n,e?{add:Bn("add"),set:Bn("set"),delete:Bn("delete"),clear:Bn("clear")}:{add(s){const i=se(this),o=Vn(i),l=se(s),c=!t&&!We(s)&&!ht(s)?l:s;return o.has.call(i,c)||lt(s,c)&&o.has.call(i,s)||lt(l,c)&&o.has.call(i,l)||(i.add(c),xt(i,"add",c,c)),this},set(s,i){!t&&!We(i)&&!ht(i)&&(i=se(i));const o=se(this),{has:l,get:c}=Vn(o);let g=l.call(o,s);g||(s=se(s),g=l.call(o,s));const u=c.call(o,s);return o.set(s,i),g?lt(i,u)&&xt(o,"set",s,i):xt(o,"add",s,i),this},delete(s){const i=se(this),{has:o,get:l}=Vn(i);let c=o.call(i,s);c||(s=se(s),c=o.call(i,s)),l&&l.call(i,s);const g=i.delete(s);return c&&xt(i,"delete",s,void 0),g},clear(){const s=se(this),i=s.size!==0,o=s.clear();return i&&xt(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_l(s,e,t)}),n}function as(e,t){const n=yl(e,t);return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_isShallow"?t:s==="__v_raw"?r:Reflect.get(ie(n,s)&&s in r?n:r,s,i)}const bl={get:as(!1,!1)},xl={get:as(!1,!0)},kl={get:as(!0,!1)};const Ri=new WeakMap,Pi=new WeakMap,Vi=new WeakMap,Ml=new WeakMap;function El(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rn(e){return ht(e)?e:cs(e,!1,ml,bl,Ri)}function Cl(e){return cs(e,!1,vl,xl,Pi)}function Hr(e){return cs(e,!0,gl,kl,Vi)}function cs(e,t,n,r,s){if(!oe(e)||e.__v_raw&&!(t&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const i=s.get(e);if(i)return i;const o=El(Go(e));if(o===0)return e;const l=new Proxy(e,o===2?r:n);return s.set(e,l),l}function $t(e){return ht(e)?$t(e.__v_raw):!!(e&&e.__v_isReactive)}function ht(e){return!!(e&&e.__v_isReadonly)}function We(e){return!!(e&&e.__v_isShallow)}function us(e){return e?!!e.__v_raw:!1}function se(e){const t=e&&e.__v_raw;return t?se(t):e}function Tl(e){return!ie(e,"__v_skip")&&Object.isExtensible(e)&&xi(e,"__v_skip",!0),e}const ze=e=>oe(e)?rn(e):e,Ot=e=>oe(e)?Hr(e):e;function $e(e){return e?e.__v_isRef===!0:!1}function Pe(e){return wl(e,!1)}function wl(e,t){return $e(e)?e:new Sl(e,t)}class Sl{constructor(t,n){this.dep=new ls,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:se(t),this._value=n?t:ze(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,r=this.__v_isShallow||We(t)||ht(t);t=r?t:se(t),lt(t,n)&&(this._rawValue=t,this._value=r?t:ze(t),this.dep.trigger())}}function D(e){return $e(e)?e.value:e}const Al={get:(e,t,n)=>t==="__v_raw"?e:D(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Bi(e){return $t(e)?e:new Proxy(e,Al)}class Il{constructor(t,n,r){this.fn=t,this.setter=n,this._value=void 0,this.dep=new ls(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mn-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&he!==this)return wi(this,!0),!0}get value(){const t=this.dep.track();return Ii(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function $l(e,t,n=!1){let r,s;return Z(e)?r=e:(r=e.get,s=e.set),new Il(r,s,n)}const jn={},Xn=new WeakMap;let Bt;function Ol(e,t=!1,n=Bt){if(n){let r=Xn.get(n);r||Xn.set(n,r=[]),r.push(e)}}function Nl(e,t,n=pe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,g=M=>s?M:We(M)||s===!1||s===0?St(M,1):St(M);let u,h,p,y,L=!1,w=!1;if($e(e)?(h=()=>e.value,L=We(e)):$t(e)?(h=()=>g(e),L=!0):K(e)?(w=!0,L=e.some(M=>$t(M)||We(M)),h=()=>e.map(M=>{if($e(M))return M.value;if($t(M))return g(M);if(Z(M))return c?c(M,2):M()})):Z(e)?t?h=c?()=>c(e,2):e:h=()=>{if(p){ft();try{p()}finally{dt()}}const M=Bt;Bt=u;try{return c?c(e,3,[y]):e(y)}finally{Bt=M}}:h=ct,t&&s){const M=h,V=s===!0?1/0:s;h=()=>St(M(),V)}const O=al(),I=()=>{u.stop(),O&&O.active&&ns(O.effects,u)};if(i&&t){const M=t;t=(...V)=>{try{return M(...V)}finally{I()}}}let A=w?new Array(e.length).fill(jn):jn;const B=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(t){const V=u.run();if(M||s||L||(w?V.some((re,z)=>lt(re,A[z])):lt(V,A))){const re=Bt;ft();try{p&&p(),Bt=u;const z=[V,A===jn?void 0:w&&A[0]===jn?[]:A,y];A=V,c?c(t,3,z):t(...z)}finally{Bt=re,dt()}}}else u.run()};return l&&l(B),u=new Ci(h),u.scheduler=o?()=>o(B,!1):B,y=M=>Ol(M,!1,u),p=u.onStop=()=>{const M=Xn.get(u);if(M){if(c)c(M,4);else for(const V of M)V();Xn.delete(u)}},t?r?B(!0):A=u.run():o?o(B.bind(null,!0),!0):u.run(),I.pause=u.pause.bind(u),I.resume=u.resume.bind(u),I.stop=I,I}function St(e,t=1/0,n){if(t<=0||!oe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,$e(e))St(e.value,t,n);else if(K(e))for(let r=0;r<e.length;r++)St(e[r],t,n);else if(Zn(e)||It(e))e.forEach(r=>{St(r,t,n)});else if(yi(e)){for(const r in e)St(e[r],t,n);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&St(e[r],t,n)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ln(e,t,n,r){try{return r?e(...r):e()}catch(s){gr(s,t,n)}}function Ge(e,t,n,r){if(Z(e)){const s=Ln(e,t,n,r);return s&&vi(s)&&s.catch(i=>{gr(i,t,n,void 0,!0)}),s}if(K(e)){const s=[];for(let i=0;i<e.length;i++)s.push(Ge(e[i],t,n,r));return s}}function gr(e,t,n,r=!0,s=!1){const i=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:l}=t&&t.appContext.config||pe;if(t){let c=t.parent;const g=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const h=c.ec;if(h&&!c.isUnmounted&&(!s||c.scope.active)){for(let p=0;p<h.length;p++)if(h[p](e,g,u)===!1)return}c=c.parent}if(o){ft(),Ln(o,null,10,[e,g,u]),dt();return}}Dl(e,n,i,r,l)}function Dl(e,t,n,r=!0,s=!1){if(s)throw e;console.error(e)}const Fe=[];let Ze=-1;const it=[];let wt=null,Xt=0;const ji=Promise.resolve();let Qn=null;function Fl(e){const t=Qn||ji;return e?t.then(this?e.bind(this):e):t}function Ll(e){let t=Ze+1,n=Fe.length;for(;t<n;){const r=t+n>>>1,s=Fe[r],i=Cn(s);i<e||i===e&&s.flags&2?t=r+1:n=r}return t}function vr(e){if(!(e.flags&1)){const t=Cn(e),n=Fe[Fe.length-1];!n||!(e.flags&2)&&t>=Cn(n)?Fe.push(e):Fe.splice(Ll(t),0,e),e.flags|=1,Hi()}}function Hi(){Qn||(Qn=ji.then(qi))}function Rl(e){if(!K(e))wt&&e.id===-1?wt.splice(Xt+1,0,e):e.flags&1||(it.push(e),e.flags|=1);else for(let t=0;t<e.length;t++)it.push(e[t]);Hi()}function Ki(e,t,n,r=Ze+1){for(;r<Fe.length;r++){const s=Fe[r];if(s&&s.flags&2){if(e&&s.id!==e.uid||t!==void 0&&!(s.id>=t))continue;Fe.splice(r,1),r=e?r-1:Ze,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ui(e,t,n=0){if(it.length){let r=it,s=0;if(t){r=[];for(let o=0;o<it.length;o++){const l=it[o];(l.i!==void 0?!l.i||l.i.uid<n:t.has(l))?it[s++]=l:r.push(l)}}const i=[...new Set(r)].sort((o,l)=>Cn(o)-Cn(l));if(it.length=s,wt){for(let o=0;o<i.length;o++)wt.push(i[o]);return}for(wt=i,Xt=0;Xt<wt.length;Xt++){const o=wt[Xt];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}wt=null,Xt=0}}let Ir=!1;function Pl(e,t){if(Ir){e();return}const n=t===void 0?void 0:new Set(it);e(),Ir=!0;try{Ki(void 0,t),Ui(void 0,n,t)}finally{Ir=!1}}const Cn=e=>e.id==null?e.flags&2?-1:1/0:e.id;function qi(e){try{for(Ze=0;Ze<Fe.length;Ze++){const t=Fe[Ze];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ln(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ze<Fe.length;Ze++){const t=Fe[Ze];t&&(t.flags&=-2)}Ze=-1,Fe.length=0,Ui(),Qn=null,(Fe.length||it.length)&&qi()}}let at=null,Wi=null;function er(e){const t=at;return at=e,Wi=e&&e.type.__scopeId||null,t}function zi(e,t=at,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&sr(-1);const i=er(t),o=Wt.length;let l;try{l=e(...s)}finally{for(let c=Wt.length;c>o;c--)ko();er(i),r._d&&sr(1)}return l};return r._n=!0,r._c=!0,r._d=!0,r}function Lt(e,t,n,r){let s=e;if(r==="beforeMount")e._mount=e;else if(r==="beforeUpdate"){const l=t&&t._mount;l&&(l._latest=e,e._mount=l)}else if(r==="mounted"){const l=e._latest;e._mount=e._latest=void 0,l&&(s=l,l._mount=void 0)}const i=s.dirs,o=t&&t.dirs;for(let l=0;l<i.length;l++){let c=i[l];o?c.oldValue=o[l].value:r==="mounted"&&c.oldValue!==void 0&&(c=ke({},c,{oldValue:void 0}));let g=c.dir[r];g&&(ft(),Ge(g,n,8,[e.el,c,s,t]),dt())}}function Vl(e,t){if(Le){let n=Le.provides;const r=Le.parent&&Le.parent.provides;r===n&&(n=Le.provides=Object.create(r)),n[e]=t}}function zn(e,t,n=!1){const r=To();if(r||en){let s=en?en._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&Z(t)?t.call(r&&r.proxy):t}}const Bl=Symbol.for("v-scx"),jl=()=>zn(Bl);function Qt(e,t,n){return Gi(e,t,n)}function Gi(e,t,n=pe){const{immediate:r,deep:s,flush:i,once:o}=n,l=ke({},n),c=t&&r||!t&&i!=="post";let g;if($n){if(i==="sync"){const y=jl();g=y.__watcherHandles||(y.__watcherHandles=[])}else if(!c){const y=()=>{};return y.stop=ct,y.resume=ct,y.pause=ct,y}}const u=Le;l.call=(y,L,w)=>Ge(y,u,L,w);let h=!1;i==="post"?l.scheduler=y=>{y.i=u,Ne(y,u&&u.suspense)}:i!=="sync"&&(h=!0,l.scheduler=(y,L)=>{L?y():vr(y)}),l.augmentJob=y=>{t&&(y.flags|=4),h&&(y.flags|=2,u&&(y.id=u.uid,y.i=u))};const p=Nl(e,t,l);return $n&&(g?g.push(p):c&&p()),p}function Hl(e,t,n){const r=this.proxy,s=ge(e)?e.includes(".")?Yi(r,e):()=>r[e]:e.bind(r,r);let i;Z(t)?i=t:(i=t.handler,n=t);const o=Rn(this),l=Gi(s,i.bind(r),n);return o(),l}function Yi(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Kl=Symbol("_vte"),_r=e=>e.__isTeleport,qe=Symbol("_leaveCb"),an=Symbol("_enterCb");function Ul(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return fs(()=>{e.isMounted=!0}),no(()=>{e.isUnmounting=!0}),e}const Ue=[Function,Array],Ji={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ue,onEnter:Ue,onAfterEnter:Ue,onEnterCancelled:Ue,onBeforeLeave:Ue,onLeave:Ue,onAfterLeave:Ue,onLeaveCancelled:Ue,onBeforeAppear:Ue,onAppear:Ue,onAfterAppear:Ue,onAppearCancelled:Ue},ql={name:"BaseTransition",props:Ji,setup(e,{slots:t}){const n=To(),r=Ul();return()=>{const s=t.default&&Qi(t.default(),!0),i=s&&s.length?Zi(s):n.subTree?te():void 0;if(!i)return;const o=se(e),{mode:l}=o;if(r.isLeaving)return $r(i);const c=tr(i);if(!c)return $r(i);const g=Kr(c,o,r,n);c.type!==Ae&&qt(c,g);let u=n.subTree&&tr(n.subTree);if(u&&u.type!==Ae&&!Ht(u,c)&&Tn(n.subTree)){let h=Kr(u,o,r,n);if(qt(u,h),l==="out-in"&&c.type!==Ae)return r.isLeaving=!0,h.afterLeave=()=>{if(r.isLeaving=!1,!(n.job.flags&8))if(n.effect.flags&2){const p=()=>{n.job.flags&8||n.update()};p.i=n,vr(p)}else n.update();delete h.afterLeave,u=void 0},$r(i);l==="in-out"&&c.type!==Ae?h.delayLeave=(p,y,L)=>{const w=Xi(r,u);w[String(u.key)]=u,p[qe]=()=>{y(),p[qe]=void 0,delete g.delayedLeave,u=void 0},g.delayedLeave=()=>{L(),delete g.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return i}}};function Zi(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ae){t=n;break}}return t}const Wl=ql;function Xi(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Kr(e,t,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:g,onEnterCancelled:u,onBeforeLeave:h,onLeave:p,onAfterLeave:y,onLeaveCancelled:L,onBeforeAppear:w,onAppear:O,onAfterAppear:I,onAppearCancelled:A}=t,B=String(e.key),M=Xi(n,e),V=(P,U)=>{P&&Ge(P,r,9,U)},re=(P,U)=>{const Y=U[1];V(P,U),K(P)?P.every(q=>q.length<=1)&&Y():P.length<=1&&Y()},z={mode:i,persisted:o,beforeEnter(P){let U=l;if(!n.isMounted)if(s)U=w||l;else return;P[qe]&&P[qe](!0);const Y=M[B];if(Y&&Ht(e,Y)){let q=Y.el[qe];if(!q){const S=Tn(Y);q=S&&S.el[qe]}q&&q()}V(U,[P])},enter(P){if(M[B]===e)return;let U=c,Y=g,q=u;if(!n.isMounted)if(s)U=O||c,Y=I||g,q=A||u;else return;let S=!1;P[an]=_e=>{S||(S=!0,_e?V(q,[P]):V(Y,[P]),z.delayedLeave&&z.delayedLeave(),P[an]=void 0)};const X=P[an].bind(null,!1);U?re(U,[P,X]):X()},leave(P,U){const Y=String(e.key);if(P[an]&&P[an](!0),n.isUnmounting)return U();V(h,[P]);let q=!1;P[qe]=X=>{q||(q=!0,U(),X?V(L,[P]):V(y,[P]),P[qe]=void 0,M[Y]===e&&delete M[Y])};const S=P[qe].bind(null,!1);M[Y]=e,p?re(p,[P,S]):S()},clone(P){const U=Kr(P,t,n,r);return U.afterLeave=()=>{z.afterLeave&&z.afterLeave()},U.delayLeave=(Y,q,S)=>{z.delayLeave?z.delayLeave(Y,q,S):S()},U.delayedLeave=()=>{z.delayedLeave&&z.delayedLeave()},U}};return z}function $r(e){if(yr(e))return e=Nt(e),e.children=null,e}function tr(e){if(!yr(e))return _r(e.type)&&e.children?Zi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&Z(n.default))return n.default()}}function qt(e,t){if(e.shapeFlag&6&&e.component){e.transition=t;const n=e.component.subTree;qt(_r(n.type)&&tr(n)||n,t)}else if(e.shapeFlag&128){const n=e.suspense;if(n){const r=n.isHydrating?n.pendingBranch:n.activeBranch;r&&qt(r,t.clone(r))}else e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)}else if(e.transition=t,e.type===ee&&K(e.children)){const n=ao(e.children,!1);n&&qt(n,t)}}function Qi(e,t=!1,n){let r=[],s=0;for(let i=0;i<e.length;i++){let o=e[i];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===ee?(o.patchFlag&128&&s++,r=r.concat(Qi(o.children,t,l))):(t||o.type!==Ae)&&r.push(l!=null?Nt(o,{key:l}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Tn(e){if(e.component)return Tn(e.component.subTree);if(e.type===ee){const t=K(e.children)&&ao(e.children,!1);return t?Tn(t):void 0}if(e.type!==Ae)return e}function eo(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Is(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const nr=new WeakMap;function yn(e,t,n,r,s=!1){if(K(e)){e.forEach((w,O)=>yn(w,t&&(K(t)?t[O]:t),n,r,s));return}if(bn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&yn(e,t,n,r.component.subTree);return}const i=r.shapeFlag&4?ps(r.component):r.el,o=s?null:i,{i:l,r:c}=e,g=t&&t.r,u=l.refs===pe?l.refs={}:l.refs,h=l.setupState,p=se(h),y=h===pe?gi:w=>Is(u,w)?!1:ie(p,w),L=(w,O)=>!(O&&Is(u,O));if(g!=null&&g!==c){if($s(t),ge(g))u[g]=null,y(g)&&(h[g]=null);else if($e(g)){const w=t;L(g,w.k)&&(g.value=null),w.k&&(u[w.k]=null)}}if(Z(c))Ln(c,l,12,[o,u]);else{const w=ge(c),O=$e(c);if(w||O){const I=()=>{if(e.f){const A=w?y(c)?h[c]:u[c]:L()||!e.k?c.value:u[e.k];if(s)K(A)&&ns(A,i);else if(K(A))A.includes(i)||A.push(i);else if(w)u[c]=[i],y(c)&&(h[c]=u[c]);else{const B=[i];L(c,e.k)&&(c.value=B),e.k&&(u[e.k]=B)}}else w?(u[c]=o,y(c)&&(h[c]=o)):O&&(L(c,e.k)&&(c.value=o),e.k&&(u[e.k]=o))};if(o){const A=()=>{I(),nr.delete(e)};A.id=-1,nr.set(e,A),Ne(A,n)}else $s(e),I()}}}function $s(e){const t=nr.get(e);t&&(t.flags|=8,nr.delete(e))}hr().requestIdleCallback;hr().cancelIdleCallback;const bn=e=>!!e.type.__asyncLoader,yr=e=>e.type.__isKeepAlive;function zl(e,t){to(e,"a",t)}function Gl(e,t){to(e,"da",t)}function to(e,t,n=Le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(wn(t,r,n),n){let s=n.parent;for(;s&&s.parent;)yr(s.parent.vnode)&&Yl(r,t,n,s),s=s.parent}}function Yl(e,t,n,r){const s=wn(t,e,r,!0),i=wn("um",()=>ns(r[t],s),n);i.flags=16}function wn(e,t,n=Le,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{ft();const l=Rn(n),c=Ge(t,n,e,o);return l(),dt(),c});return r?s.unshift(i):s.push(i),i}}const Et=e=>(t,n=Le)=>{(!$n||e==="sp")&&wn(e,(...r)=>t(...r),n)},Jl=Et("bm"),fs=Et("m"),Zl=Et("bu"),Xl=Et("u"),no=Et("bum"),ro=Et("um"),Ql=Et("sp"),ea=Et("rtg"),ta=Et("rtc");function na(e,t=Le){wn("ec",e,t)}const ra=Symbol.for("v-ndc");function me(e,t,n,r){let s;const i=n,o=K(e);if(o||ge(e)){const l=o&&$t(e);let c=!1,g=!1;l&&(c=!We(e),g=ht(e),e=mr(e)),s=new Array(e.length);for(let u=0,h=e.length;u<h;u++)s[u]=t(c?g?Ot(ze(e[u])):ze(e[u]):e[u],u,void 0,i)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)s=[];else{s=new Array(e);for(let l=0;l<e;l++)s[l]=t(l+1,l,void 0,i)}else if(oe(e))if(e[Symbol.iterator])s=Array.from(e,(l,c)=>t(l,c,void 0,i));else{const l=Object.keys(e);s=new Array(l.length);for(let c=0,g=l.length;c<g;c++){const u=l[c];s[c]=t(e[u],u,c,i)}}else s=[];return s}const Ur=e=>e?wo(e)?ps(e):Ur(e.parent):null,xn=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ur(e.parent),$root:e=>Ur(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>io(e),$forceUpdate:e=>e.f||(e.f=()=>{vr(e.update)}),$nextTick:e=>e.n||(e.n=Fl.bind(e.proxy)),$watch:e=>Hl.bind(e)}),Or=(e,t)=>e!==pe&&!e.__isScriptSetup&&ie(e,t),sa={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=e;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Or(r,t))return o[t]=1,r[t];if(s!==pe&&ie(s,t))return o[t]=2,s[t];if(ie(i,t))return o[t]=3,i[t];if(n!==pe&&ie(n,t))return o[t]=4,n[t];qr&&(o[t]=0)}}const g=xn[t];let u,h;if(g)return t==="$attrs"&&we(e.attrs,"get",""),g(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(n!==pe&&ie(n,t))return o[t]=4,n[t];if(h=c.config.globalProperties,ie(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Or(s,t)?(s[t]=n,!0):r!==pe&&ie(r,t)?(r[t]=n,!0):ie(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,props:i,type:o}},l){let c;return!!(n[l]||e!==pe&&l[0]!=="$"&&ie(e,l)||Or(t,l)||ie(i,l)||ie(r,l)||ie(xn,l)||ie(s.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ie(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Os(e){return K(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let qr=!0;function ia(e){const t=io(e),n=e.proxy,r=e.ctx;qr=!1,t.beforeCreate&&Ns(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:g,created:u,beforeMount:h,mounted:p,beforeUpdate:y,updated:L,activated:w,deactivated:O,beforeDestroy:I,beforeUnmount:A,destroyed:B,unmounted:M,render:V,renderTracked:re,renderTriggered:z,errorCaptured:P,serverPrefetch:U,expose:Y,inheritAttrs:q,components:S,directives:X,filters:_e}=t;if(g&&oa(g,r,null),o)for(const fe in o){const le=o[fe];Z(le)&&(r[fe]=le.bind(n))}if(s){const fe=s.call(n,n);oe(fe)&&(e.data=rn(fe))}if(qr=!0,i)for(const fe in i){const le=i[fe],pt=Z(le)?le.bind(n,n):Z(le.get)?le.get.bind(n,n):ct,Yt=!Z(le)&&Z(le.set)?le.set.bind(n):ct,mt=G({get:pt,set:Yt});Object.defineProperty(r,fe,{enumerable:!0,configurable:!0,get:()=>mt.value,set:Ve=>mt.value=Ve})}if(l)for(const fe in l)so(l[fe],r,n,fe);if(c){const fe=Z(c)?c.call(n):c;Reflect.ownKeys(fe).forEach(le=>{Vl(le,fe[le])})}u&&Ns(u,e,"c");function ue(fe,le){K(le)?le.forEach(pt=>fe(pt.bind(n))):le&&fe(le.bind(n))}if(ue(Jl,h),ue(fs,p),ue(Zl,y),ue(Xl,L),ue(zl,w),ue(Gl,O),ue(na,P),ue(ta,re),ue(ea,z),ue(no,A),ue(ro,M),ue(Ql,U),K(Y))if(Y.length){const fe=e.exposed||(e.exposed={});Y.forEach(le=>{Object.defineProperty(fe,le,{get:()=>n[le],set:pt=>n[le]=pt,enumerable:!0})})}else e.exposed||(e.exposed={});V&&e.render===ct&&(e.render=V),q!=null&&(e.inheritAttrs=q),S&&(e.components=S),X&&(e.directives=X),U&&eo(e)}function oa(e,t,n=ct){K(e)&&(e=Wr(e));for(const r in e){const s=e[r];let i;oe(s)?"default"in s?i=zn(s.from||r,s.default,!0):i=zn(s.from||r):i=zn(s),$e(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ns(e,t,n){Ge(K(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function so(e,t,n,r){let s=r.includes(".")?Yi(n,r):()=>n[r];if(ge(e)){const i=t[e];Z(i)&&Qt(s,i)}else if(Z(e))Qt(s,e.bind(n));else if(oe(e))if(K(e))e.forEach(i=>so(i,t,n,r));else{const i=Z(e.handler)?e.handler.bind(n):t[e.handler];Z(i)&&Qt(s,i,e)}}function io(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,l=i.get(t);let c;return l?c=l:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(g=>rr(c,g,o,!0)),rr(c,t,o)),oe(t)&&i.set(t,c),c}function rr(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&rr(e,i,n,!0),s&&s.forEach(o=>rr(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const l=la[o]||n&&n[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const la={data:Ds,props:Fs,emits:Fs,methods:un,computed:un,beforeCreate:Oe,created:Oe,beforeMount:Oe,mounted:Oe,beforeUpdate:Oe,updated:Oe,beforeDestroy:Oe,beforeUnmount:Oe,destroyed:Oe,unmounted:Oe,activated:Oe,deactivated:Oe,errorCaptured:Oe,serverPrefetch:Oe,components:un,directives:un,watch:ca,provide:Ds,inject:aa};function Ds(e,t){return t?e?function(){return ke(Z(e)?e.call(this,this):e,Z(t)?t.call(this,this):t)}:t:e}function aa(e,t){return un(Wr(e),Wr(t))}function Wr(e){if(K(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Oe(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?ke(Object.create(null),e,t):t}function Fs(e,t){return e?K(e)&&K(t)?[...new Set([...e,...t])]:ke(Object.create(null),Os(e),Os(t??{})):t}function ca(e,t){if(!e)return t;if(!t)return e;const n=ke(Object.create(null),e);for(const r in t)n[r]=Oe(e[r],t[r]);return n}function oo(){return{app:null,config:{isNativeTag:gi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ua=0;function fa(e,t){return function(r,s=null){Z(r)||(r=ke({},r)),s!=null&&!oe(s)&&(s=null);const i=oo(),o=new WeakSet,l=[];let c=!1;const g=i.app={_uid:ua++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ka,get config(){return i.config},set config(u){},use(u,...h){return o.has(u)||(u&&Z(u.install)?(o.add(u),u.install(g,...h)):Z(u)&&(o.add(u),u(g,...h))),g},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),g},component(u,h){return h?(i.components[u]=h,g):i.components[u]},directive(u,h){return h?(i.directives[u]=h,g):i.directives[u]},mount(u,h,p){if(!c){const y=g._ceVNode||Ie(r,s);return y.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),e(y,u,p),c=!0,g._container=u,u.__vue_app__=g,ps(y.component)}},onUnmount(u){l.push(u)},unmount(){c&&(Ge(l,g._instance,16),e(null,g._container),delete g._container.__vue_app__)},provide(u,h){return i.provides[u]=h,g},runWithContext(u){const h=en;en=g;try{return u()}finally{en=h}}};return g}}let en=null;const da=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Qe(t)}Modifiers`]||e[`${Gt(t)}Modifiers`];function ha(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||pe;let s=n;const i=t.startsWith("update:"),o=i&&da(r,t.slice(7));o&&(o.trim&&(s=n.map(u=>ge(u)?u.trim():u)),o.number&&(s=s.map(Zo)));let l,c=r[l=Er(t)]||r[l=Er(Qe(t))];!c&&i&&(c=r[l=Er(Gt(t))]),c&&Ge(c,e,6,s);const g=r[l+"Once"];if(g){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Ge(g,e,6,s)}}const pa=new WeakMap;function lo(e,t,n=!1){const r=n?pa:t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},l=!1;if(!Z(e)){const c=g=>{const u=lo(g,t,!0);u&&(l=!0,ke(o,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!l?(oe(e)&&r.set(e,null),null):(K(i)?i.forEach(c=>o[c]=null):ke(o,i),oe(e)&&r.set(e,o),o)}function br(e,t){return!e||!ur(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),ie(e,t[0].toLowerCase()+t.slice(1))||ie(e,Gt(t))||ie(e,t))}function Ls(e){const{type:t,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:g,renderCache:u,props:h,data:p,setupState:y,ctx:L,inheritAttrs:w}=e,O=er(e);let I,A;try{if(n.shapeFlag&4){const M=s||r,V=M;I=ot(g.call(V,M,u,h,y,p,L)),A=l}else{const M=t;I=ot(M.length>1?M(h,{attrs:l,slots:o,emit:c}):M(h,null)),A=t.props?l:ma(l)}}catch(M){Wt.length=0,gr(M,e,1),I=Ie(Ae)}let B=I;if(A&&w!==!1){const M=Object.keys(A),{shapeFlag:V}=B;M.length&&V&7&&(i&&M.some(fr)&&(A=ga(A,i)),B=Nt(B,A,!1,!0))}if(n.dirs&&(B=Nt(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition){const M=_r(B.type)&&tr(B)||B;qt(M,n.transition)}return I=B,er(O),I}function ao(e,t=!0){let n;for(let r=0;r<e.length;r++){const s=e[r];if(An(s)){if(s.type!==Ae||s.children==="v-if"){if(n)return;n=s}}else return}return n}const ma=e=>{let t;for(const n in e)(n==="class"||n==="style"||ur(n))&&((t||(t={}))[n]=e[n]);return t},ga=(e,t)=>{const n={};for(const r in e)(!fr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function va(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:l,patchFlag:c}=t,g=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Rs(r,o,g):!!o;if(c&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(co(o,r,p)&&!br(g,p))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Rs(r,o,g):!0:!!o;return!1}function Rs(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(!ie(e,i)||co(t,e,i)&&!br(n,i))return!0}return!1}function co(e,t,n){const r=e[n],s=t[n];return n==="style"&&oe(r)&&oe(s)?!pr(r,s):r!==s}function _a({vnode:e,parent:t,suspense:n},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=r,e=s),s===e)(e=t.vnode).el=r,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=r)}const uo={},fo=()=>Object.create(uo),ho=e=>Object.getPrototypeOf(e)===uo;function ya(e,t,n,r=!1){const s={},i=fo();e.propsDefaults=Object.create(null),po(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Cl(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function ba(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,l=se(s),[c]=e.propsOptions;let g=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(br(e.emitsOptions,p))continue;const y=t[p];if(c)if(ie(i,p))y!==i[p]&&(i[p]=y,g=!0);else{const L=Qe(p);s[L]=zr(c,l,L,y,e,!1)}else y!==i[p]&&(i[p]=y,g=!0)}}}else{po(e,t,s,i)&&(g=!0);let u;for(const h in l)(!t||!ie(t,h)&&((u=Gt(h))===h||!ie(t,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=zr(c,l,h,void 0,e,!0)):delete s[h]);if(i!==l)for(const h in i)(!t||!ie(t,h))&&(delete i[h],g=!0)}g&&xt(e.attrs,"set","")}function po(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,l;if(t)for(let c in t){if(gn(c))continue;const g=t[c];let u;s&&ie(s,u=Qe(c))?!i||!i.includes(u)?n[u]=g:(l||(l={}))[u]=g:br(e.emitsOptions,c)||(!(c in r)||g!==r[c])&&(r[c]=g,o=!0)}if(i){const c=se(n),g=l||pe;for(let u=0;u<i.length;u++){const h=i[u];n[h]=zr(s,c,h,g[h],e,!ie(g,h))}}return o}function zr(e,t,n,r,s,i){const o=e[n];if(o!=null){const l=ie(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&Z(c)){const{propsDefaults:g}=s;if(n in g)r=g[n];else{const u=Rn(s);r=g[n]=c.call(null,t),u()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Gt(n))&&(r=!0))}return r}const xa=new WeakMap;function mo(e,t,n=!1){const r=n?xa:t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},l=[];let c=!1;if(!Z(e)){const u=h=>{c=!0;const[p,y]=mo(h,t,!0);ke(o,p),y&&l.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!c)return oe(e)&&r.set(e,Kt),Kt;if(K(i))for(let u=0;u<i.length;u++){const h=Qe(i[u]);Ps(h)&&(o[h]=pe)}else if(i)for(const u in i){const h=Qe(u);if(Ps(h)){const p=i[u],y=o[h]=K(p)||Z(p)?{type:p}:ke({},p),L=y.type;let w=!1,O=!0;if(K(L))for(let I=0;I<L.length;++I){const A=L[I],B=Z(A)&&A.name;if(B==="Boolean"){w=!0;break}else B==="String"&&(O=!1)}else w=Z(L)&&L.name==="Boolean";y[0]=w,y[1]=O,(w||ie(y,"default"))&&l.push(h)}}const g=[o,l];return oe(e)&&r.set(e,g),g}function Ps(e){return e[0]!=="$"&&!gn(e)}const ds=e=>e==="_"||e==="_ctx"||e==="$stable",hs=e=>K(e)?e.map(ot):[ot(e)],ka=(e,t,n)=>{if(t._n)return t;const r=zi((...s)=>hs(t(...s)),n);return r._c=!1,r},go=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ds(s))continue;const i=e[s];if(Z(i))t[s]=ka(s,i,r);else if(i!=null){const o=hs(i);t[s]=()=>o}}},vo=(e,t)=>{const n=hs(t);e.slots.default=()=>n},_o=(e,t,n)=>{for(const r in t)(n||!ds(r))&&(e[r]=t[r])},Ma=(e,t,n)=>{const r=e.slots=fo();if(e.vnode.shapeFlag&32){const s=t._;s?(_o(r,t,n),n&&xi(r,"_",s,!0)):go(t,r)}else t&&vo(e,t)},Ea=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=pe;if(r.shapeFlag&32){const l=t._;l?n&&l===1?i=!1:_o(s,t,n):(i=!t.$stable,go(t,s)),o=t}else t&&(vo(e,t),o={default:1});if(i)for(const l in s)!ds(l)&&o[l]==null&&delete s[l]},Ne=Ia;function Ca(e){return Ta(e)}function Ta(e,t){const n=hr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:g,setElementText:u,parentNode:h,nextSibling:p,setScopeId:y=ct,insertStaticContent:L}=e,w=(d,m,_,T=null,x=null,E=null,F=void 0,N=null,$=!!m.dynamicChildren)=>{if(d===m)return;d&&!Ht(d,m)&&(T=Ft(d),Ve(d,x,E,!0),d=null),m.patchFlag===-2&&($=!1,m.dynamicChildren=null),m.dynamicChildren&&d&&d.dynamicChildren&&d.dynamicChildren.hasOnce&&(m.dynamicChildren===Kt&&(m.dynamicChildren=[]),m.dynamicChildren.hasOnce=!0);const{type:k,ref:j,shapeFlag:R}=m;switch(k){case xr:O(d,m,_,T);break;case Ae:I(d,m,_,T);break;case Dr:d==null&&A(m,_,T,F);break;case ee:S(d,m,_,T,x,E,F,N,$);break;default:R&1?V(d,m,_,T,x,E,F,N,$):R&6?X(d,m,_,T,x,E,F,N,$):(R&64||R&128)&&k.process(d,m,_,T,x,E,F,N,$,on)}j!=null&&x?yn(j,d&&d.ref,E,m||d,!m):j==null&&d&&d.ref!=null&&yn(d.ref,null,E,d,!0)},O=(d,m,_,T)=>{if(d==null)r(m.el=l(m.children),_,T);else{const x=m.el=d.el;m.children!==d.children&&g(x,m.children)}},I=(d,m,_,T)=>{d==null?r(m.el=c(m.children||""),_,T):m.el=d.el},A=(d,m,_,T)=>{[d.el,d.anchor]=L(d.children,m,_,T,d.el,d.anchor)},B=({el:d,anchor:m},_,T)=>{let x;for(;d&&d!==m;)x=p(d),r(d,_,T),d=x;r(m,_,T)},M=({el:d,anchor:m})=>{let _;for(;d&&d!==m;)_=p(d),s(d),d=_;s(m)},V=(d,m,_,T,x,E,F,N,$)=>{if(m.type==="svg"?F="svg":m.type==="math"&&(F="mathml"),d==null)re(m,_,T,x,E,F,N,$);else{const k=d.el&&d.el._isVueCE?d.el:null;try{k&&k._beginPatch(),U(d,m,x,E,F,N,$)}finally{k&&k._endPatch()}}},re=(d,m,_,T,x,E,F,N)=>{let $,k;const{props:j,shapeFlag:R,transition:H,dirs:W}=d;if($=d.el=o(d.type,E,j&&j.is,j),R&8?u($,d.children):R&16&&P(d.children,$,null,T,x,Nr(d,E),F,N),W&&Lt(d,null,T,"created"),z($,d,d.scopeId,F,T),j){for(const de in j)de!=="value"&&!gn(de)&&i($,de,null,j[de],E,T);"value"in j&&i($,"value",null,j.value,E),(k=j.onVnodeBeforeMount)&&rt(k,T,d)}W&&Lt(d,null,T,"beforeMount");const ne=wa(x,H);ne?H.beforeEnter($):H&&!H.persisted&&($[Aa]=!0),r($,m,_),((k=j&&j.onVnodeMounted)||ne||W)&&Ne(()=>{try{k&&rt(k,T,d),ne&&H.enter($),W&&Lt(d,null,T,"mounted")}finally{}},x)},z=(d,m,_,T,x)=>{if(_&&y(d,_),T)for(let E=0;E<T.length;E++)y(d,T[E]);if(x){let E=x.subTree;if(m===E||xo(E.type)&&(E.ssContent===m||E.ssFallback===m)){const F=x.vnode;z(d,F,F.scopeId,F.slotScopeIds,x.parent)}}},P=(d,m,_,T,x,E,F,N,$=0)=>{for(let k=$;k<d.length;k++){const j=d[k]=N?bt(d[k]):ot(d[k]);w(null,j,m,_,T,x,E,F,N)}},U=(d,m,_,T,x,E,F)=>{const N=m.el=d.el;let{patchFlag:$,dynamicChildren:k,dirs:j}=m;$|=d.patchFlag&16;const R=d.props||pe,H=m.props||pe;let W;if(_&&Rt(_,!1),(W=H.onVnodeBeforeUpdate)&&rt(W,_,m,d),j&&Lt(m,d,_,"beforeUpdate"),_&&Rt(_,!0),k&&(!d.dynamicChildren||d.dynamicChildren.length!==k.length)&&($=0,F=!1,k=null),(R.innerHTML&&H.innerHTML==null||R.textContent&&H.textContent==null)&&u(N,""),k?Y(d.dynamicChildren,k,N,_,T,Nr(m,x),E):F||le(d,m,N,null,_,T,Nr(m,x),E,!1),$>0){if($&16)q(N,R,H,_,x);else if($&2&&R.class!==H.class&&i(N,"class",null,H.class,x),$&4&&i(N,"style",R.style,H.style,x),$&8){const ne=m.dynamicProps;for(let de=0;de<ne.length;de++){const ce=ne[de],xe=R[ce],Ee=H[ce];(Ee!==xe||ce==="value")&&i(N,ce,xe,Ee,x,_)}}$&1&&d.children!==m.children&&u(N,m.children)}else!F&&k==null&&q(N,R,H,_,x);((W=H.onVnodeUpdated)||j)&&Ne(()=>{W&&rt(W,_,m,d),j&&Lt(m,d,_,"updated")},T)},Y=(d,m,_,T,x,E,F)=>{for(let N=0;N<m.length;N++){const $=d[N],k=m[N],j=$.el||kn($),R=j&&($.type===ee||!Ht($,k)||$.shapeFlag&198)?h(j):_;w($,k,R,null,T,x,E,F,!0)}},q=(d,m,_,T,x)=>{if(m!==_){if(m!==pe)for(const E in m)!gn(E)&&!(E in _)&&i(d,E,m[E],null,x,T);for(const E in _){if(gn(E))continue;const F=_[E],N=m[E];F!==N&&E!=="value"&&i(d,E,N,F,x,T)}"value"in _&&i(d,"value",m.value,_.value,x)}},S=(d,m,_,T,x,E,F,N,$)=>{const k=m.el=d?d.el:l(""),j=m.anchor=d?d.anchor:l("");let{patchFlag:R,dynamicChildren:H,slotScopeIds:W}=m;W&&(N=N?N.concat(W):W),d==null?(r(k,_,T),r(j,_,T),P(m.children||[],_,j,x,E,F,N,$)):R>0&&R&64&&H&&d.dynamicChildren&&d.dynamicChildren.length===H.length?(Y(d.dynamicChildren,H,_,x,E,F,N),(m.key!=null||x&&m===x.subTree)&&yo(d,m,!0)):le(d,m,_,j,x,E,F,N,$)},X=(d,m,_,T,x,E,F,N,$)=>{m.slotScopeIds=N,d==null?m.shapeFlag&512?x.ctx.activate(m,_,T,F,$):_e(m,_,T,x,E,F,$):Re(d,m,$)},_e=(d,m,_,T,x,E,F)=>{const N=d.component=La(d,T,x);if(yr(d)&&(N.ctx.renderer=on),Ra(N,!1,F),N.asyncDep){if(x&&x.registerDep(N,ue,F,E),!d.el){const $=N.subTree=Ie(Ae);I(null,$,m,_),d.placeholder=$.el}}else ue(N,d,m,_,x,E,F)},Re=(d,m,_)=>{const T=m.component=d.component;if(va(d,m,_))if(T.asyncDep&&!T.asyncResolved){m.el=d.el,m.placeholder=d.placeholder,fe(T,m,_);return}else T.next=m,T.update();else m.el=d.el,m.placeholder=d.placeholder,T.vnode=m},ue=(d,m,_,T,x,E,F)=>{const N=()=>{if(d.isMounted){let{next:R,bu:H,u:W,parent:ne,vnode:de}=d;{const tt=bo(d);if(tt){R&&(R.el=de.el,fe(d,R,F)),tt.asyncDep.then(()=>{const gt=()=>{d.job.flags&8||(x&&x.pendingBranch?Ne(gt,x):k())};gt.flags=48,Ne(gt,x)});return}}let ce=R,xe;Rt(d,!1),R?(R.el=de.el,fe(d,R,F)):R=de,H&&Cr(H),(xe=R.props&&R.props.onVnodeBeforeUpdate)&&rt(xe,ne,R,de),Rt(d,!0);const Ee=Ls(d),Ye=d.subTree;d.subTree=Ee,w(Ye,Ee,h(Ye.el||kn(Ye)),Ft(Ye),d,x,E),R.el=Ee.el,ce===null&&_a(d,Ee.el),W&&Ne(W,x),(xe=R.props&&R.props.onVnodeUpdated)&&Ne(()=>rt(xe,ne,R,de),x)}else{let R;const{el:H,props:W}=m,{bm:ne,m:de,parent:ce,root:xe,type:Ee}=d,Ye=bn(m);Rt(d,!1),ne&&Cr(ne),!Ye&&(R=W&&W.onVnodeBeforeMount)&&rt(R,ce,m),Rt(d,!0);{xe.ce&&xe.ce._hasShadowRoot()&&xe.ce._injectChildStyle(Ee,d.parent?d.parent.type:void 0);const tt=d.subTree=Ls(d);w(null,tt,_,T,d,x,E),m.el=tt.el}if(de&&Ne(de,x),!Ye&&(R=W&&W.onVnodeMounted)){const tt=m;Ne(()=>rt(R,ce,tt),x)}(m.shapeFlag&256||ce&&bn(ce.vnode)&&ce.vnode.shapeFlag&256)&&d.a&&Ne(d.a,x),d.isMounted=!0,m=_=T=null}};d.scope.on();const $=d.effect=new Ci(N);d.scope.off();const k=d.update=$.run.bind($),j=d.job=$.runIfDirty.bind($);j.i=d,j.id=d.uid,$.scheduler=()=>vr(j),Rt(d,!0),k()},fe=(d,m,_)=>{m.component=d;const T=d.vnode.props;d.vnode=m,d.next=null,ba(d,m.props,T,_),Ea(d,m.children,_),ft(),Ki(d),dt()},le=(d,m,_,T,x,E,F,N,$=!1)=>{const k=d&&d.children,j=d?d.shapeFlag:0,R=m.children,{patchFlag:H,shapeFlag:W}=m;if(H>0){if(H&128){Yt(k,R,_,T,x,E,F,N,$);return}else if(H&256){pt(k,R,_,T,x,E,F,N,$);return}}W&8?(j&16&&Me(k,x,E),R!==k&&u(_,R)):j&16?W&16?Yt(k,R,_,T,x,E,F,N,$):Me(k,x,E,!0):(j&8&&u(_,""),W&16&&P(R,_,T,x,E,F,N,$))},pt=(d,m,_,T,x,E,F,N,$)=>{d=d||Kt,m=m||Kt;const k=d.length,j=m.length,R=Math.min(k,j);let H;for(H=0;H<R;H++){const W=m[H]=$?bt(m[H]):ot(m[H]);w(d[H],W,_,null,x,E,F,N,$)}k>j?Me(d,x,E,!0,!1,R):P(m,_,T,x,E,F,N,$,R)},Yt=(d,m,_,T,x,E,F,N,$)=>{let k=0;const j=m.length;let R=d.length-1,H=j-1;for(;k<=R&&k<=H;){const W=d[k],ne=m[k]=$?bt(m[k]):ot(m[k]);if(Ht(W,ne))w(W,ne,_,null,x,E,F,N,$);else break;k++}for(;k<=R&&k<=H;){const W=d[R],ne=m[H]=$?bt(m[H]):ot(m[H]);if(Ht(W,ne))w(W,ne,_,null,x,E,F,N,$);else break;R--,H--}if(k>R){if(k<=H){const W=H+1,ne=W<j?m[W].el:T;for(;k<=H;)w(null,m[k]=$?bt(m[k]):ot(m[k]),_,ne,x,E,F,N,$),k++}}else if(k>H)for(;k<=R;)Ve(d[k],x,E,!0),k++;else{const W=k,ne=k,de=new Map;for(k=ne;k<=H;k++){const Be=m[k]=$?bt(m[k]):ot(m[k]);Be.key!=null&&de.set(Be.key,k)}let ce,xe=0;const Ee=H-ne+1;let Ye=!1,tt=0;const gt=new Array(Ee);for(k=0;k<Ee;k++)gt[k]=0;for(k=W;k<=R;k++){const Be=d[k];if(xe>=Ee){Ve(Be,x,E,!0);continue}let nt;if(Be.key!=null)nt=de.get(Be.key);else for(ce=ne;ce<=H;ce++)if(gt[ce-ne]===0&&Ht(Be,m[ce])){nt=ce;break}nt===void 0?Ve(Be,x,E,!0):(gt[nt-ne]=k+1,nt>=tt?tt=nt:Ye=!0,w(Be,m[nt],_,null,x,E,F,N,$),xe++)}const bs=Ye?Sa(gt):Kt;for(ce=bs.length-1,k=Ee-1;k>=0;k--){const Be=ne+k,nt=m[Be],xs=m[Be+1],ks=Be+1<j?xs.el||kn(xs):T;gt[k]===0?w(null,nt,_,ks,x,E,F,N,$):Ye&&(ce<0||k!==bs[ce]?mt(nt,_,ks,2):ce--)}}},mt=(d,m,_,T,x=null)=>{const{el:E,type:F,transition:N,children:$,shapeFlag:k}=d;if(k&6){mt(d.component.subTree,m,_,T);return}if(k&128){d.suspense.move(m,_,T);return}if(k&64){F.move(d,m,_,on);return}if(F===ee){r(E,m,_);for(let R=0;R<$.length;R++)mt($[R],m,_,T);r(d.anchor,m,_);return}if(F===Dr){B(d,m,_);return}if(T!==2&&k&1&&N)if(T===0)N.persisted&&!E[qe]?r(E,m,_):(N.beforeEnter(E),r(E,m,_),Ne(()=>N.enter(E),x));else{const{leave:R,delayLeave:H,afterLeave:W}=N,ne=()=>{d.ctx.isUnmounted?s(E):r(E,m,_)},de=()=>{const ce=E._isLeaving||!!E[qe];E._isLeaving&&E[qe](!0),N.persisted&&!ce?ne():R(E,()=>{ne(),W&&W()})};H?H(E,ne,de):de()}else r(E,m,_)},Ve=(d,m,_,T=!1,x=!1)=>{const{type:E,props:F,ref:N,children:$,dynamicChildren:k,shapeFlag:j,patchFlag:R,dirs:H,cacheIndex:W,memo:ne}=d;if((R===-2||k&&k.hasOnce)&&(x=!1),N!=null&&(ft(),yn(N,null,_,d,!0),dt()),W!=null&&(!d.ctx||d.ctx===m)&&(m.renderCache[W]=void 0),j&256&&m.ctx.deactivate(d))return;const de=j&1&&H,ce=!bn(d);let xe;if(ce&&(xe=F&&F.onVnodeBeforeUnmount)&&rt(xe,m,d),j&6)Q(d.component,_,T);else{if(j&128){d.suspense.unmount(_,T);return}de&&Lt(d,null,m,"beforeUnmount"),j&64?d.type.remove(d,m,_,on,T):k&&!k.hasOnce&&(E!==ee||R>0&&R&64)?Me(k,m,_,!1,!0):(E===ee&&R&384||!x&&j&16)&&Me($,m,_),T&&J(d)}const Ee=ne!=null&&W==null;(ce&&(xe=F&&F.onVnodeUnmounted)||de||Ee)&&Ne(()=>{xe&&rt(xe,m,d),de&&Lt(d,null,m,"unmounted"),Ee&&(d.el=null)},_)},J=d=>{const{type:m,el:_,anchor:T,transition:x}=d,E=m===ee;if(E&&!x){ae(_,T);return}if(m===Dr){M(d),x&&!x.persisted&&x.afterLeave&&x.afterLeave();return}const F=E?Tn(d):d,N=()=>{E?h(_)&&ae(_,T):s(_),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(F&&F.shapeFlag&1&&x&&!x.persisted){const{leave:$,delayLeave:k}=x,j=F.el,R=()=>$(j,N);k?k(j,N,R):R()}else N()},ae=(d,m)=>{let _;for(;d!==m;)_=p(d),s(d),d=_;s(m)},Q=(d,m,_)=>{const{bum:T,scope:x,job:E,subTree:F,um:N,m:$,a:k}=d;Vs($),Vs(k),T&&Cr(T),x.stop(),E?(E.flags|=8,Ve(F,d,m,_)):F&&(F.transition=d.vnode.transition,Ve(F,d,m,_)),N&&Ne(N,m);const j=()=>{d.isUnmounted=!0};j.flags=16,Ne(j,m)},Me=(d,m,_,T=!1,x=!1,E=0)=>{for(let F=E;F<d.length;F++)Ve(d[F],m,_,T,x)},Ft=d=>{if(d.shapeFlag&6)return Ft(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const m=p(d.anchor||d.el),_=m&&m[Kl];return _?p(_):m},ys=(d,m,_)=>{const T=d&&m._vnode?void 0:d&&d.component?d.component.uid:Fa();Pl(()=>{d==null?m._vnode&&Ve(m._vnode,null,null,!0):w(m._vnode||null,d,m,null,null,null,_),m._vnode=d},T)},on={p:w,um:Ve,m:mt,r:J,mt:_e,mc:P,pc:le,pbc:Y,n:Ft,o:e};return{render:ys,hydrate:void 0,createApp:fa(ys)}}function Nr({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rt({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function wa(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function yo(e,t,n=!1){const r=e.children,s=t.children;if(K(r)&&K(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=bt(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&yo(o,l)),l.type===xr&&(l.patchFlag===-1&&(l=s[i]=bt(l)),l.el=o.el),l.type===Ae&&!l.el&&(l.el=o.el)}}function Sa(e){const t=e.slice(),n=[0];let r,s,i,o,l;const c=e.length;for(r=0;r<c;r++){const g=e[r];if(g!==0){if(s=n[n.length-1],e[s]<g){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,e[n[l]]<g?i=l+1:o=l;g<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function bo(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bo(t)}function Vs(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function kn(e){if(e.placeholder)return e.placeholder;const t=e.component;if(t)return kn(t.subTree);const n=e.suspense;return n&&n.activeBranch?kn(n.activeBranch):null}const xo=e=>e.__isSuspense,Aa=Symbol("_deferredEnter");function Ia(e,t){t&&t.pendingBranch?K(e)?t.effects.push(...e):t.effects.push(e):Rl(e)}const ee=Symbol.for("v-fgt"),xr=Symbol.for("v-txt"),Ae=Symbol.for("v-cmt"),Dr=Symbol.for("v-stc"),Wt=[];let je=null;function b(e=!1){Wt.push(je=e?null:[])}function ko(){Wt.pop(),je=Wt[Wt.length-1]||null}let Sn=1;function sr(e,t=!1){Sn+=e,e<0&&je&&t&&(je.hasOnce=!0)}function Mo(e){return e.dynamicChildren=Sn>0?je||Kt:null,ko(),Sn>0&&je&&je.push(e),e}function C(e,t,n,r,s,i){return Mo(f(e,t,n,r,s,i,!0))}function jt(e,t,n,r,s){return Mo(Ie(e,t,n,r,s,!0))}function An(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const Eo=({key:e})=>e??null,Gn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ge(e)||$e(e)||Z(e)?{i:at,r:e,k:t,f:!!n}:e:null);function f(e,t=null,n=null,r=0,s=null,i=e===ee?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eo(t),ref:t&&Gn(t),scopeId:Wi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:at};return l?(ir(c,n),i&128&&e.normalize(c)):n&&(c.shapeFlag|=ge(n)?8:16),Sn>0&&!o&&je&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&je.push(c),c}const Ie=$a;function $a(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===ra)&&(e=Ae),An(e)){const l=Nt(e,t,!0);return n&&ir(l,n),Sn>0&&!i&&je&&(l.shapeFlag&6?je[je.indexOf(e)]=l:je.push(l)),l.patchFlag=-2,l}if(ja(e)&&(e=e.__vccOpts),t){t=Oa(t);let{class:l,style:c}=t;l&&!ge(l)&&(t.class=ve(l)),oe(c)&&(us(c)&&!K(c)&&(c=ke({},c)),t.style=De(c))}const o=ge(e)?1:xo(e)?128:_r(e)?64:oe(e)?4:Z(e)?2:0;return f(e,t,n,r,s,o,i,!0)}function Oa(e){return e?us(e)?ke({},e):ho(e)?ke({},e[Ao]||e):e:null}function Nt(e,t,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=e,g=t?Na(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:g,key:g&&Eo(g),ref:t&&t.ref?n&&i?K(i)?i.concat(Gn(t)):[i,Gn(t)]:Gn(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Nt(e.ssContent),ssFallback:e.ssFallback&&Nt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return c&&r&&qt(u,c.clone(u)),u}function He(e=" ",t=0){return Ie(xr,null,e,t)}function te(e="",t=!1){return t?(b(),jt(Ae,null,e)):Ie(Ae,null,e)}function ot(e){return e==null||typeof e=="boolean"?Ie(Ae):K(e)?Ie(ee,null,e.slice()):An(e)?bt(e):Ie(xr,null,String(e))}function bt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Nt(e)}function ir(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(K(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),ir(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!ho(t)?t._ctx=at:s===3&&at&&(at.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else if(Z(t)){if(r&65){ir(e,{default:t});return}t={default:t,_ctx:at},n=32}else t=String(t),r&64?(n=16,t=[He(t)]):n=8;e.children=t,e.shapeFlag|=n}function Na(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ve([t.class,r.class]));else if(s==="style")t.style=De([t.style,r.style]);else if(ur(s)){const i=t[s],o=r[s];o&&i!==o&&!(K(i)&&i.includes(o))?t[s]=i?[].concat(i,o):o:o==null&&i==null&&!fr(s)&&(t[s]=o)}else s!==""&&(t[s]=r[s])}return t}function rt(e,t,n,r=null){Ge(e,t,7,[n,r])}const Da=oo();let Co=0;function Fa(){return Co}function La(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||Da,i={uid:Co++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ll(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:mo(r,s),emitsOptions:lo(r,s),emit:null,emitted:null,propsDefaults:pe,inheritAttrs:r.inheritAttrs,ctx:pe,data:pe,props:pe,attrs:pe,slots:pe,refs:pe,setupState:pe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ha.bind(null,i),e.ce&&e.ce(i),i}let Le=null;const To=()=>Le||at;let or,In;{const e=hr(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};or=t("__VUE_INSTANCE_SETTERS__",n=>Le=n),In=t("__VUE_SSR_SETTERS__",n=>$n=n)}const Rn=e=>{const t=Le;return or(e),e.scope.on(),()=>{e.scope.off(),or(t)}},Bs=()=>{Le&&Le.scope.off(),or(null)};function wo(e){return e.vnode.shapeFlag&4}let $n=!1;function Ra(e,t=!1,n=!1){t&&In(t);const{props:r,children:s}=e.vnode,i=wo(e);ya(e,r,i,t),Ma(e,s,n||t);const o=i?Pa(e,t):void 0;return t&&In(!1),o}function Pa(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,sa);const{setup:r}=n;if(r){ft();const s=e.setupContext=r.length>1?Ba(e):null,i=Rn(e),o=Ln(r,e,0,[e.props,s]),l=vi(o);if(dt(),i(),(l||e.sp)&&!bn(e)&&eo(e),l){if(o.then(Bs,Bs),t)return o.then(c=>{In(!0);try{js(e,c,t)}finally{In(!1)}}).catch(c=>{gr(c,e,0,void 0,!0),e.ssrRender=(g,u)=>u("<!---->")});e.asyncDep=o}else js(e,o)}else So(e)}function js(e,t,n){Z(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:oe(t)&&(e.setupState=Bi(t)),So(e)}function So(e,t,n){const r=e.type;e.render||(e.render=r.render||ct);{const s=Rn(e);ft();try{ia(e)}finally{dt(),s()}}}const Ao=Symbol(),Va={get(e,t){return we(e,"get",""),t===Ao?e:e[t]}};function Ba(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,Va),slots:e.slots,emit:e.emit,expose:t}}function ps(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Bi(Tl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in xn)return xn[n](e)},has(t,n){return n in t||n in xn}})):e.proxy}function ja(e){return Z(e)&&"__vccOpts"in e}const G=(e,t)=>$l(e,t,$n);function Ha(e,t,n){try{sr(-1);const r=arguments.length;return r===2?oe(t)&&!K(t)?An(t)?Ie(e,null,[t]):Ie(e,t):Ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&An(n)&&(n=[n]),Ie(e,t,n))}finally{sr(1)}}const Ka="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gr;const Hs=typeof window<"u"&&window.trustedTypes;if(Hs)try{Gr=Hs.createPolicy("vue",{createHTML:e=>e})}catch{}const Io=Gr?e=>Gr.createHTML(e):e=>e,Ua="http://www.w3.org/2000/svg",qa="http://www.w3.org/1998/Math/MathML",yt=typeof document<"u"?document:null,Ks=yt&&yt.createElement("template"),Wa={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?yt.createElementNS(Ua,e):t==="mathml"?yt.createElementNS(qa,e):n?yt.createElement(e,{is:n}):yt.createElement(e);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>yt.createTextNode(e),createComment:e=>yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ks.innerHTML=Io(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const l=Ks.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}t.insertBefore(l,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Ct="transition",cn="animation",On=Symbol("_vtc"),$o={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},za=ke({},Ji,$o),Ga=e=>(e.displayName="Transition",e.props=za,e),Ya=Ga((e,{slots:t})=>Ha(Wl,Ja(e),t)),Pt=(e,t=[])=>{K(e)?e.forEach(n=>n(...t)):e&&e(...t)},Us=e=>e?K(e)?e.some(t=>t.length>1):e.length>1:!1;function Ja(e){const t={};for(const S in e)S in $o||(t[S]=e[S]);if(e.css===!1)return t;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:g=o,appearToClass:u=l,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:y=`${n}-leave-to`}=e,L=Za(s),w=L&&L[0],O=L&&L[1],{onBeforeEnter:I,onEnter:A,onEnterCancelled:B,onLeave:M,onLeaveCancelled:V,onBeforeAppear:re=I,onAppear:z=A,onAppearCancelled:P=B}=t,U=(S,X,_e,Re)=>{S._enterCancelled=Re,Vt(S,X?u:l),Vt(S,X?g:o),_e&&_e()},Y=(S,X)=>{S._isLeaving=!1,Vt(S,h),Vt(S,y),Vt(S,p),X&&X()},q=S=>(X,_e)=>{const Re=S?z:A,ue=()=>U(X,S,_e);Pt(Re,[X,ue]),qs(()=>{Vt(X,S?c:i),_t(X,S?u:l),Us(Re)||Ws(X,r,w,ue)})};return ke(t,{onBeforeEnter(S){Pt(I,[S]),_t(S,i),_t(S,o)},onBeforeAppear(S){Pt(re,[S]),_t(S,c),_t(S,g)},onEnter:q(!1),onAppear:q(!0),onLeave(S,X){S._isLeaving=!0;const _e=()=>Y(S,X);_t(S,h),S._enterCancelled?(_t(S,p),Ys(S)):(Ys(S),_t(S,p)),qs(()=>{S._isLeaving&&(Vt(S,h),_t(S,y),Us(M)||Ws(S,r,O,_e))}),Pt(M,[S,_e])},onEnterCancelled(S){U(S,!1,void 0,!0),Pt(B,[S])},onAppearCancelled(S){U(S,!0,void 0,!0),Pt(P,[S])},onLeaveCancelled(S){Y(S),Pt(V,[S])}})}function Za(e){if(e==null)return null;if(oe(e))return[Fr(e.enter),Fr(e.leave)];{const t=Fr(e);return[t,t]}}function Fr(e){return Xo(e)}function _t(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[On]||(e[On]=new Set)).add(t)}function Vt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const n=e[On];n&&(n.delete(t),n.size||(e[On]=void 0))}function qs(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Xa=0;function Ws(e,t,n,r){const s=e._endId=++Xa,i=()=>{s===e._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:l,propCount:c}=Qa(e,t);if(!o)return r();const g=o+"end";let u=0;const h=()=>{e.removeEventListener(g,p),i()},p=y=>{y.target===e&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},l+1),e.addEventListener(g,p)}function Qa(e,t){const n=window.getComputedStyle(e),r=L=>(n[L]||"").split(", "),s=r(`${Ct}Delay`),i=r(`${Ct}Duration`),o=zs(s,i),l=r(`${cn}Delay`),c=r(`${cn}Duration`),g=zs(l,c);let u=null,h=0,p=0;t===Ct?o>0&&(u=Ct,h=o,p=i.length):t===cn?g>0&&(u=cn,h=g,p=c.length):(h=Math.max(o,g),u=h>0?o>g?Ct:cn:null,p=u?u===Ct?i.length:c.length:0);const y=u===Ct&&/\b(?:transform|all)(?:,|$)/.test(r(`${Ct}Property`).toString());return{type:u,timeout:h,propCount:p,hasTransform:y}}function zs(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>Gs(n)+Gs(e[r])))}function Gs(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ys(e){return(e?e.ownerDocument:document).body.offsetHeight}function ec(e,t,n){const r=e[On];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Js=Symbol("_vod"),tc=Symbol("_vsh"),nc=Symbol(""),rc=/(?:^|;)\s*display\s*:/;function sc(e,t,n){const r=e.style,s=ge(n);let i=!1;if(n&&!s){if(t)if(ge(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&fn(r,l,"")}else for(const o in t)n[o]==null&&fn(r,o,"");for(const o in n){o==="display"&&(i=!0);const l=n[o];l!=null?oc(e,o,!ge(t)&&t?t[o]:void 0,l)||fn(r,o,l):fn(r,o,"")}}else if(s){if(t!==n){const o=r[nc];o&&(n+=";"+o),r.cssText=n,i=rc.test(n)}}else t&&e.removeAttribute("style");Js in e&&((!s||t!==n)&&(e[Js]=i?r.display:""),e[tc]&&(r.display="none"))}const Hn=/\s*!important$/;function fn(e,t,n){if(K(n))n.forEach(r=>fn(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))Hn.test(n)?e.setProperty(t,n.replace(Hn,""),"important"):e.setProperty(t,n);else{const r=ic(e,t);Hn.test(n)?e.setProperty(Gt(r),n.replace(Hn,""),"important"):e[r]=n}}const Zs=["Webkit","Moz","ms"],Lr={};function ic(e,t){const n=Lr[t];if(n)return n;let r=Qe(t);if(r!=="filter"&&r in e)return Lr[t]=r;r=bi(r);for(let s=0;s<Zs.length;s++){const i=Zs[s]+r;if(i in e)return Lr[t]=i}return t}function oc(e,t,n,r){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&ge(r)&&n===r}const Xs="http://www.w3.org/1999/xlink";function Qs(e,t,n,r,s,i=sl(t)){r&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Xs,t.slice(6,t.length)):e.setAttributeNS(Xs,t,n):n==null||i&&!ki(n)?e.removeAttribute(t):e.setAttribute(t,i?"":ut(n)?String(n):n)}function ei(e,t,n,r,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Io(n):n);return}const i=e.tagName;if(t==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?e.getAttribute("value")||"":e.value,c=n==null?e.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=ki(n):n==null&&l==="string"?(n="",o=!0):l==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function lc(e,t,n,r){e.addEventListener(t,n,r)}function ac(e,t,n,r){e.removeEventListener(t,n,r)}const ti=Symbol("_vei");function cc(e,t,n,r,s=null){const i=e[ti]||(e[ti]={}),o=i[t];if(r&&o)o.value=r;else{const[l,c]=dc(t);if(r){const g=i[t]=mc(r,s);lc(e,l,g,c)}else o&&(ac(e,l,o,c),i[t]=void 0)}}const uc=/(Once|Passive|Capture)$/,fc=/^on:?(?:Once|Passive|Capture)$/;function dc(e){let t,n;for(;(n=e.match(uc))&&!fc.test(e);)t||(t={}),e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):Gt(e.slice(2)),t]}let Rr=0;const hc=Promise.resolve(),pc=()=>Rr||(hc.then(()=>Rr=0),Rr=Date.now());function mc(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(K(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),l=[r];for(let c=0;c<o.length&&!r._stopped;c++){const g=o[c];g&&Ge(g,t,5,l)}}else Ge(s,t,5,[r])};return n.value=e,n.attached=pc(),n}const ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,gc=(e,t,n,r,s,i)=>{const o=s==="svg";t==="class"?ec(e,r,o):t==="style"?sc(e,n,r):ur(t)?fr(t)||cc(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):vc(e,t,r,o))?(ei(e,t,r),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Qs(e,t,r,o,i,t!=="value")):e._isVueCE&&(_c(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!ge(r)))?ei(e,Qe(t),r,i,t):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Qs(e,t,r,o))};function vc(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&ni(t)&&Z(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ni(t)&&ge(n)?!1:t in e}function _c(e,t){const n=e._def.props;if(!n)return!1;const r=Qe(t);return Array.isArray(n)?n.some(s=>Qe(s)===r):Object.keys(n).some(s=>Qe(s)===r)}const yc=["ctrl","shift","alt","meta"],bc={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>yc.some(n=>e[`${n}Key`]&&!t.includes(n))},dn=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<t.length;o++){const l=bc[t[o]];if(l&&l(s,t))return}return e(s,...i)}))},xc=ke({patchProp:gc},Wa);let ri;function kc(){return ri||(ri=Ca(xc))}const Mc=((...e)=>{const t=kc().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Cc(r);if(!s)return;const i=t._component;!Z(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ec(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t});function Ec(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Cc(e){return ge(e)?document.querySelector(e):e}const Tc="./";function Se(e){return Tc+"art/"+e}const Kn=rn({});function sn(e){if(!e)return"no";const t=Se(e),n=Kn[t];if(n)return n;Kn[t]="pending";const r=new Image;return r.onload=()=>{Kn[t]="ok"},r.onerror=()=>{Kn[t]="no"},r.src=t,"pending"}const si={sq:{name:"苏晴",full:Se("sq-full.webp"),face:Se("sq-exp-1.webp"),emotions:{开心:1,惊喜:2,思考:3,加油:4,好吃:5,满足:6}},nu:{name:"林暖",full:Se("nu-full.webp"),face:Se("nu-exp-6.webp"),emotions:{开心:1,惊讶:2,欣慰:3,认真:4,担心:5,温柔:6}}},Nn=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function kt(e){return Nn.find(t=>t.id===e)||Nn[0]}const Oo={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},nn=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐鸢",nick:"阿鸢",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶星河",nick:"星河",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function lr(e){return nn.find(t=>t.id===e)}const Dn=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],ar=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function wc(e){return ar.find(t=>t.lv===e)||ar[0]}const No=[{id:"oven",name:"烤箱",note:"产能",desc:"好烤箱能一次进更多盘，出品也更稳。",tiers:[{cost:2500,value:40,text:"产能 +40"},{cost:7500,value:90,text:"产能 +90"},{cost:22e3,value:150,text:"产能 +150"}]},{id:"mixer",name:"搅拌机",note:"省力",desc:"奶油和面糊交给它，自己少使点劲。",tiers:[{cost:2e3,value:.1,text:"自付体力 -10%"},{cost:6500,value:.2,text:"自付体力 -20%"},{cost:19e3,value:.3,text:"自付体力 -30%"}]},{id:"fridge",name:"冷藏柜",note:"剩货",desc:"当天没卖完的，第二天还能打折卖掉一部分。",tiers:[{cost:1800,value:.1,text:"剩货回收 +10%"},{cost:5500,value:.18,text:"剩货回收 +18%"},{cost:16e3,value:.26,text:"剩货回收 +26%"}]},{id:"display",name:"展示柜",note:"客流",desc:"摆得好看，路过的人就更愿意进来。",tiers:[{cost:3e3,value:.06,text:"需求 +6%"},{cost:9e3,value:.13,text:"需求 +13%"},{cost:3e4,value:.2,text:"需求 +20%"}]},{id:"packing",name:"包装台",note:"定制",desc:"定制单拼的就是最后那一下体面。",tiers:[{cost:2600,value:.1,text:"定制收入 +10%"},{cost:7500,value:.22,text:"定制收入 +22%"},{cost:24e3,value:.35,text:"定制收入 +35%"}]},{id:"warehouse",name:"仓库",note:"采购",desc:"一次能囤更多原料，少跑几趟。",tiers:[{cost:1600,value:6,text:"单次采购 +6 份"},{cost:5e3,value:12,text:"单次采购 +12 份"},{cost:15e3,value:20,text:"单次采购 +20 份"}]},{id:"cashier",name:"收银系统",note:"售价",desc:"扫码点单，客单价能往上提一点。",tiers:[{cost:2400,value:.03,text:"售价 +3%"},{cost:7e3,value:.06,text:"售价 +6%"},{cost:26e3,value:.1,text:"售价 +10%"}]}];function ms(e){return No.find(t=>t.id===e)}function ii(e,t){return e.unlocked.filter(n=>(e.levels[n]||1)>=t).length}function Sc(e){return e.unlocked.length?e.unlocked.reduce((t,n)=>t+(e.levels[n]||1),0)/e.unlocked.length:1}function Ac(e){return Math.max(0,...Object.values(e.partnerSkill))}function Ic(e,t){return Object.values(e.partnerTrust).filter(n=>n>=t).length}const Yr=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>ii(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>Sc(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>ii(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>Ac(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>Ic(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function $c(e){return Yr.find(t=>e>=t.from&&e<=t.to)||Yr[0]}const Oc={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},Jr={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:Se("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:Se("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:Se("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:Se("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:Se("shop-exterior.webp")}},Nc=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function Zr(e){return Nc[(e-1)%12]}const Dc=`# 《林记烘焙》完整文游剧情文案 V5.0（橙光对话体标准版）\r
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
傍晚回到后厨，正在整理配方的周雨桐也轻轻叫住了林念（\`EVT_M15_YUTONG_TALK\`）。\r
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
这天下午，叶星河抱着一摞画册来到店里，有些紧张地找到林念和苏晴（**若叶星河信赖度 ≥ 60，触发星河个人剧情 \`EVT_M25_QINGHE_EXHIBITION\`**）。\r
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
如果没有苏晴在M1第一天推门进来给她拍下第一张照片，没有苏晴在夏日市集帮她搭起展台，没有苏晴在自己最迷茫的危机时刻跑遍全镇找回外婆的味道……她或许很难走到今天。\r
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
里面有高一教室的素描与高二三班的后门，有林念刚接手林记时紧张的模样，有陈奶奶慈祥的笑脸，有小雨、知遥、阿鸢、星河刚加入时的青涩瞬间，有临江分店、秋日文化节，也有崭新的旗舰店。\r
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
## 附篇二：苏晴友情日常互动模块文案（第8.6节）\r
*（日常经营中消耗1点行动力与苏晴互动时，玩家可自由选择的5类固定温情交互）*\r
\r
1. **【主动分享烦恼】**\r
   林念趴在吧台上，轻轻叹了口气。\r
   林念：苏晴，今天店里事情堆在一起，我突然又有点怕自己做不好了……\r
   苏晴伸手揉了揉林念的脑袋，递给她一颗奶糖。\r
   苏晴：怕什么呀，天塌下来还有我陪你一起吃掉卖剩下的蛋糕呢！来，深呼吸，先把最急的一件事挑出来，我们一件一件解决。\r
2. **【认真听苏晴讲工作】**\r
   苏晴翻着相机里的预览图，眼睛亮晶晶的。\r
   苏晴：念念我跟你说，今天外拍遇到一对结婚五十年的爷爷奶奶，他们牵手看镜头的眼神特别感人！\r
   林念凑过去认真地看着屏幕。\r
   林念：听你描述我都能感受到那份温度了！等照片洗出来，一定要第一个拿给我看！\r
3. **【邀请苏晴吃饭】**\r
   林念解下围裙挂好，朝苏晴招了招手。\r
   林念：收工啦！今天不聊工作，我们去吃高中校门口那家砂锅米线！\r
   苏晴立刻合上修图电脑跳了起来。\r
   苏晴：走走走！我要加双份腐竹和卤蛋！\r
4. **【支持她的摄影项目】**\r
   林念端出一篮刚烤好、色泽金黄的法式可颂与水果挞。\r
   林念：听说你下周要拍一组复古胶片主题？我帮你烤了一篮甜点当拍摄道具，拿去用吧！\r
   苏晴惊喜地抱住林念的胳膊。\r
   苏晴：太棒了！有林老板的独家道具加持，我这组片子稳了！\r
5. **【直接表达自己的不满】**\r
   林念拿起桌上的甜品画册，指了指封底的一角。\r
   林念：苏晴，你上次借我的那本甜品画册，角落怎么沾了一点咖啡印呀？\r
   苏晴不好意思地双手合十。\r
   苏晴：啊！对不起对不起，我前天修图熬夜不小心蹭到了，正准备给你买本新的赔罪呢！谢谢你直接跟我说，没自己生闷气！\r
\r
---\r
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
苏晴：念念，从M1第一天你在旧柜台后头紧张地扯围裙，到今天站在全国旗舰店的露台上，我用镜头整整追了你三十六个月。\r
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
8. **北京（\`city-beijing\`）**：大气厚重的北方都会，节庆伴手礼盒与高端主题旗舰展陈极具号召力。`,tn={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐鸢:"唐鸢",阿鸢:"唐鸢",叶星河:"叶星河",星河:"叶星河",陈奶奶:"陈奶奶",许佳宁:"许佳宁",沈妍:"沈妍",顾客:"顾客"},Yn={周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe"},oi={xiaoyu:"小雨",zhiyao:"知遥",kexin:"阿鸢",qinghe:"星河"},Fc={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},Lc={一:1,二:2,三:3,四:4,五:5,六:6},Rc=/^(林念|苏晴|林暖|周雨桐|许知遥|唐鸢|叶星河|陈奶奶|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function Xr(e,t){if(!e)return!0;if(e.trust){for(const n of Object.keys(e.trust))if((t.partnerTrust[n]||0)<e.trust[n])return!1}if(e.momBond&&(t.momBond||0)<e.momBond)return!1;if(e.played){for(const n of e.played)if(!t.played.some(r=>r.indexOf(n)>=0))return!1}if(e.style){const n=t.style||{},r=n[e.style.id]||0;if(r<e.style.min)return!1;const s=Object.keys(n).filter(i=>i!==e.style.id).map(i=>n[i]||0);if(r-Math.max(0,...s)<e.style.lead)return!1}return!0}function Jn(e,t){const n=[];for(const r of e||[])r.t==="cond"?n.push(...Jn(Xr(r.test,t)?r.then:r.else,t)):r.t==="choice"?n.push({...r,options:(r.options||[]).map(s=>({...s,branch:Jn(s.branch||[],t)})),after:Jn(r.after||[],t)}):n.push(r);return n}function Un(e,t,n){e.lastIndex=0;let r=e.exec(t);for(;r;)n(r),r=e.exec(t)}function Pc(e,t){const n=[];if(!e)return n;Un(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g,e,s=>{n.push({k:"style",id:s[1],v:Number(s[2]),label:Fc[s[1]]+" +"+s[2]})}),Un(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g,e,s=>{const i=tn[s[1]];n.push({k:"trust",id:Yn[i],v:Number(s[2]),label:s[1]+"信赖 +"+s[2]})}),Un(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g,e,s=>{const i=s[1]?tn[s[1]]:t,o=Yn[i];o&&n.push({k:"skill",id:o,v:Number(s[2])/10,label:(s[1]||oi[o])+"专业 +"+s[2]})});const r=Object.keys(tn);return Un(/信赖度\s*\+\s*(\d+)/g,e,s=>{const i=e.slice(0,s.index);if(r.some(l=>i.endsWith(l)))return;const o=Yn[t];o&&(n.some(l=>l.k==="trust"&&l.id===o)||n.push({k:"trust",id:o,v:Number(s[1]),label:oi[o]+"信赖 +"+s[1]}))}),/顾客忠诚度增加|忠诚度提升/.test(e)&&n.push({k:"loyalty",v:4,label:"忠诚 +4"}),/友情值增加/.test(e)&&n.push({k:"friend",v:5,label:"友情 +5"}),n}function hn(e){const t={};let n=!1;const r=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);r&&(t.trust={[Yn[tn[r[1]]]]:Number(r[2])},n=!0);const s=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);s&&(t.momBond=Number(s[1]),n=!0);const i=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);i&&(t.style={id:i[1],min:Number(i[2]),lead:15},n=!0);const o=e.match(/领先[^0-9]{0,4}(\d+)/);o&&t.style&&(t.style.lead=Number(o[1]));const l=e.match(/M(\d+)/);return l&&/已完成|完成M/.test(e)?(t.played=["M"+l[1]],n=!0):/原创配方研发剧情/.test(e)?(t.played=["M21"],n=!0):/个人作品展/.test(e)&&(t.played=["M25"],n=!0),n?t:null}function pn(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function mn(e,t){const n=e.trim();if(!n||/^\|/.test(n))return;if(n.startsWith("旁白")){const s=n.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);t.push({t:"nar",who:s&&s[1]?s[1]:"",text:pn(s?s[2]:n)});return}if(/^\*\*[^*]+\*\*$/.test(n)){t.push({t:"nar",text:pn(n.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(n)||/^\*\(.+\)\*$/.test(n)){t.push({t:"note",text:n.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const r=n.match(Rc);if(r){t.push({t:"say",who:tn[r[1]],emo:r[2]||"",text:pn(r[4].replace(/\*\*/g,""))});return}t.push({t:"nar",text:pn(n.replace(/\*\*/g,""))})}function Tt(e,t={}){const n=[],r={ids:[],month:null,kind:null,test:null,title:"",cond:null};let s="main",i=n,o=null,l=null,c=null,g=null,u=null,h=0,p=!0;const y=()=>s==="branch"&&l?l.branch:s==="then"&&c?c.then:s==="else"&&c?c.else:s==="inline"&&u?u.then:i,L=w=>y().push(w);for(const w of e){const O=w.trim();if(!O){p=!0;continue}if(O.startsWith(">")){let M=O.replace(/^>+\s*/,"").trim();if(!M)continue;const V=M.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(V&&/玩家选择节点/.test(V[1])){s="main",u=null;const z=V[1],P=z.match(/节点\s*([\d.\-]+)/),U=z.match(/[：:]\s*(.+)$/);o={t:"choice",node:P?P[1]:"",prompt:U?U[1].trim():z,options:[],after:[]},L(o);continue}const re=M.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(re&&o){const z=Bc([M,o.prompt].join(" ")),P=re[3]||"";o.options.push({label:re[2].trim(),hint:P.replace(/^[（(]|[）)]$/g,"").trim(),gains:Pc(P,z),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(M)&&o&&(o.note=M.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const A=O.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(A){const M=A[1],V=(A[2]||"").replace(/^[：:]\s*/,"").trim();if(M.indexOf("事件ID")>=0){M.split("｜").forEach(S=>{const X=S.search(/[：:]/);if(X<0)return;const _e=S.slice(0,X).trim(),Re=S.slice(X+1).trim();if(_e==="事件ID")r.ids.push(Re);else if(_e==="触发月份"||_e==="触发时间"){const ue=Re.match(/M(\d+)/);ue&&(r.month=Number(ue[1]))}else if(_e==="触发条件"){/新游戏开始|开始游戏/.test(Re)&&(r.kind="prologue");const ue=hn(Re);ue&&(r.cond=ue)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(M))continue;if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(M)){L({t:"scene",text:M.replace(/^场景\s*[：:]\s*/,"")}),V&&L({t:"nar",text:V});continue}const re=M.match(/^CG\s*[：:]\s*(.+)$/i);if(re){L({t:"cg",key:re[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(M)){L({t:"cgend"});continue}const z=M.match(/^分支([A-Z])(?:[：:](.*))?$/);if(z&&o){const q=z[1].charCodeAt(0)-65;for(;o.options.length<=q;)o.options.push({label:"选项"+String.fromCharCode(65+o.options.length),hint:"",gains:[],branch:[]});l=o.options[q],s="branch",u=null,V&&L({t:"nar",text:pn(V)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(M)){s="main",u=null,o&&(i=o.after),V&&L({t:"nar",text:V});continue}const P=M.match(/^高养成解锁分支[：:]\s*(.*)$/),U=M.match(/^普通保底分支[：:]\s*(.*)$/);if(P||U){if(P)u=null,c={t:"cond",test:hn(P[1])||{},then:[],else:[]},g=c,n.push(c),s="then";else{const q=g&&g.else.length===0?g:null;q?(c=q,s="else"):s="main"}continue}if(/^若/.test(M)){const q=hn(M);q&&(c={t:"cond",test:q,then:[],else:[]},n.push(c),u=c,s="inline",h=0,p=!1,V&&mn(V,y()));continue}const Y=M.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);if(Y){const q=hn(Y[1]),S=Y[1].replace(/[（(]\s*若[^）)]*[）)]/g,"").trim();L({t:"act",text:S,test:q||null}),V&&L({t:"nar",text:V});continue}V&&L({t:"nar",text:V});continue}const B=O.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(B&&/协助|结局|相册|档案/.test(B[2])){s="main",u=null,L({t:"scene",text:B[2].replace(/[：:]\s*$/,"")});continue}if(s==="inline"&&u){const M=[];mn(O,M);const V=M[0],re=V&&V.t==="nar";if(p&&h>0&&re){s="main",u=null,mn(O,i),p=!1;continue}M.forEach(z=>u.then.push(z)),p&&(h+=1),p=!1;continue}mn(O,y()),p=!1}return o&&o.options.forEach(w=>{w.branch.length||(w.branch=[])}),r.title=t.title||"",{beats:Vc(n),meta:r}}function Vc(e){const t=[];let n=0;for(;n<e.length;){const r=e[n];if(r.t==="act"&&r.test){let s=n+1;for(;s<e.length&&e[s].t!=="act";)s++;t.push({t:"cond",test:r.test,then:e.slice(n,s),else:[]}),n=s}else t.push(r),n++}return t}function Bc(e){const t=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);return t?tn[t[1]]:""}function jc(e){const t={level:1,text:"",lines:[],children:[]},n=[t];for(const r of e.split(/\r?\n/)){const s=r.match(/^(#{1,4})\s+(.*)$/);if(s){const i=s[1].length;for(;n.length>1&&n[n.length-1].level>=i;)n.pop();const o={level:i,text:s[2].trim(),lines:[],children:[]};n[n.length-1].children.push(o),n.push(o)}else n[n.length-1].lines.push(r)}return t}function Hc(e){const t=jc(e),n=[],r={},s=[],i={},o={},l={},c=[];let g=0;const u=y=>(y.order=g++,n.push(y),y),h=[];for(const y of t.children)y.level===1?h.push(...y.children):h.push(y);for(const y of h){const L=y.text||"";if(/^序幕/.test(L)){const{beats:w,meta:O}=Tt(y.lines,{title:"序幕 · 回家"});u({id:O.ids[0]||"EVT_PROLOGUE_01",ids:O.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:w});continue}if(/^第[一二三四五六]章/.test(L)){for(const w of y.children){const O=w.text,I=/结算/.test(O)&&/(月末|目标)/.test(O),A=O.match(/M(\d+)/),B=A?Number(A[1]):null;if(I&&!A)continue;if(I){const P=ai(O,B),U=Tt(w.lines,{title:O}),Y=U.beats;if(U.meta.ids.length&&u({id:U.meta.ids[0],ids:U.meta.ids,title:qn(O),chapter:L,month:B,kind:"main",test:U.meta.cond,beats:Y}),!P)continue;r[P]=r[P]||{pass:[],failId:"",failBeats:[]};for(const q of w.children){const S=Wn(q.text);if(!S)continue;const X=Tt(q.lines,{title:q.text});S==="pass"?r[P].pass=X.beats:(r[P].failBeats=X.beats,r[P].failId=X.meta.ids[0]||"",X.meta.ids.length&&u({id:X.meta.ids[0],ids:X.meta.ids,title:li(q.text,X.beats),chapter:L,month:null,kind:"short",test:null,beats:X.beats}))}continue}const{beats:M,meta:V}=Tt(w.lines,{title:O});if(!V.ids.length)continue;let re=V.cond,z=B??V.month;re&&!z&&(z=V.month);for(const P of w.children){if(Wn(P.text))continue;const U=Tt(P.lines,{title:P.text});U.beats.length&&(M.push({t:"scene",text:P.text.replace(/^【|】$/g,"")}),M.push(...U.beats))}if(u({id:V.ids[0],ids:V.ids,title:qn(O),chapter:L,month:z,kind:"main",test:re,beats:M}),w.children.length){const P=ai(O,z),U=w.children.filter(Y=>Wn(Y.text));if(P&&U.length){r[P]=r[P]||{pass:[],failId:"",failBeats:[]};for(const Y of U){const q=Wn(Y.text),S=Tt(Y.lines,{title:Y.text});q==="pass"?r[P].pass=S.beats:(r[P].failBeats=S.beats,r[P].failId=S.meta.ids[0]||"",S.meta.ids.length&&u({id:S.meta.ids[0],ids:S.meta.ids,title:li(Y.text,S.beats),chapter:L,month:null,kind:"short",test:null,beats:S.beats}))}}}}continue}if(/^附篇一/.test(L)){for(const w of y.children){const{beats:O,meta:I}=Tt(w.lines,{title:w.text}),A=I.cond||hn(w.text)||{};u({id:I.ids[0]||"EVT_STYLE_"+g,ids:I.ids,title:qn(w.text),chapter:L,month:null,kind:"style",test:A,beats:O})}continue}if(/^附篇二/.test(L)){let w=null;for(const O of y.lines){const I=O.trim();if(!I)continue;const A=I.match(/^(\d+)\.\s*\*\*【(.+?)】\*\*/);if(A){w={id:"DAILY_"+A[1],ids:["DAILY_"+A[1]],title:A[2],kind:"daily",month:null,test:null,beats:[]},s.push(w);continue}if(!w)continue;const B=[];mn(I.replace(/^[*\-]\s*/,""),B),B.forEach(M=>w.beats.push(M))}continue}if(/^第十三章/.test(L)){for(const w of y.children){if(/^13\.7/.test(w.text)){for(const A of w.children){const B=Kc(A.text);if(!B)continue;const M=[];for(const V of A.lines){const re=V.trim(),z=re.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);z?M.push({title:z[1],text:(z[2]||"").trim()}):M.length&&re&&!/^[-*#]/.test(re)&&(M[M.length-1].text+=re)}M.length&&(l[B]=M)}continue}const{beats:O,meta:I}=Tt(w.lines,{title:w.text});I.ids.length&&u({id:I.ids[0],ids:I.ids,title:qn(w.text),chapter:L,month:null,kind:"final",test:null,beats:O})}continue}if(/^第十四章/.test(L)){for(const w of y.children)for(const O of w.lines){const I=O.trim(),A=I.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(A){const V=A[3].replace(/`/g,"").trim().replace(/^cake-/,"");V&&(i[V]={hint:A[4].trim(),flavor:A[5].trim()});continue}const B=I.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);B&&(o[B[1]]=B[2])}continue}}n.length||c.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const p={events:n,stages:r,daily:s,codex:i,cityText:o,partnerEndings:l,warnings:c};return p.find=y=>n.find(L=>L.id===y||(L.ids||[]).includes(y))||null,p}function qn(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function li(e,t){const n=e.match(/《(.+?)》/);if(n)return n[1];const r=t.find(s=>s.t==="nar");return r?r.text.slice(0,12):e}function Wn(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function ai(e,t){const n=e.match(/第([一二三四五六])阶段/);return n?Lc[n[1]]:t?Math.ceil(t/6):null}function Kc(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐鸢/.test(e)?"kexin":/叶星河/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}const Te=Hc(Dc);if(typeof console<"u"){const e={};Te.events.forEach(r=>e[r.kind]=(e[r.kind]||0)+1);let t=0,n=0;Te.events.forEach(r=>{(r.beats||[]).forEach(s=>{s.t==="choice"&&(t+=1,n+=s.options.length)})}),console.log("[剧情] 已加载 "+Te.events.length+" 个事件（"+Object.keys(e).map(r=>r+" "+e[r]).join("，")+"），日常互动 "+Te.daily.length+" 段，阶段结算 "+Object.keys(Te.stages).length+" 组，选择 "+t+" 处 / "+n+" 项"),Te.warnings.length&&Te.warnings.forEach(r=>console.warn("[剧情] "+r))}const Do="alb-save-v6",cr=5,Fo=60,Lo=40;function gs(){return{v:6,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,friendship:20,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,stock:60,devices:{},shelf:{},plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],photos:[],log:[],phase:"playing",ending:null,acquired:!1,dailyIdx:0,autoStory:!1,stage:1,report:null}}const a=rn(gs()),Xe=rn({events:[]});function kr(e){return a.devices[e]||0}function Mt(e){const t=ms(e),n=kr(e);return n&&t?t.tiers[n-1].value:0}function Ro(e){const t=ms(e),n=kr(e);return t&&n<t.tiers.length?t.tiers[n]:null}function Uc(e){const t=Ro(e);return!t||a.cash<t.cost?!1:(a.cash-=t.cost,a.devices[e]=kr(e)+1,a.monthCost+=t.cost,ye("升级了"+ms(e).name+"，"+t.text,"good"),Ke(),!0)}const Po=G(()=>Nn.filter(e=>a.unlocked.includes(e.id))),At=G(()=>a.stamina+Fo+a.staff.length*Lo+Mt("oven"));function Vo(e){return Oo[a.prices[e]||"std"]}function Pn(e){const t=kt(e),n=a.levels[e]||1;return Math.round(t.price*Vo(e).priceMul*(1+(n-1)*.05)*(1+Mt("cashier")))}function Bo(e){const t=kt(e),n=a.levels[e]||1,r=.7+a.reputation/200+a.popularity/200+a.loyalty/250+a.brand/300;return Math.max(0,Math.round(t.demand*r*Vo(e).demandMul*(1+(n-1)*.06)*(1+(a.storeCount-1)*.7)*(1+Mt("display"))))}const jo=G(()=>700+a.shopLevel*180+a.staff.length*500),vs=G(()=>$c(a.month)),Zt=G(()=>{const e=vs.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const t=e.goals.map(n=>({text:n.text,done:n.check(a),expand:!!n.expand}));return{done:t.filter(n=>n.done).length,need:e.need,list:t}});function Ho(){let e=0;for(const t of Object.keys(a.plan))e+=a.plan[t]*kt(t).diff;return e}function Ke(){try{localStorage.setItem(Do,JSON.stringify(a))}catch{}}function qc(){try{const e=localStorage.getItem(Do);if(!e)return!1;const t=JSON.parse(e);return t.v!==6?!1:(Object.keys(gs()).forEach(n=>{t[n]!==void 0&&(a[n]=t[n])}),!0)}catch{return!1}}function ci(){Object.assign(a,gs()),Xe.events.length=0,_s(),Ke()}function ye(e,t){a.log.unshift({month:a.month,day:a.day,text:e,tone:t||"normal"}),a.log.length>60&&a.log.pop()}function be(e){return Math.max(0,Math.min(100,e))}function Wc(e){const t=[];for(const n of e)if(n.kind==="num"){const r=n.value;switch(n.key){case"资金":a.cash=Math.max(0,a.cash+r);break;case"口碑":a.reputation=be(a.reputation+r);break;case"知名度":a.popularity=be(a.popularity+r);break;case"友情值":a.friendship=be(a.friendship+r);break;case"门店":a.storeCount=Math.max(1,a.storeCount+r);break;case"员工":r>0&&Zc();break;case"烘焙":zc(r*.2);break;case"品质":Gc(r*.05);break}t.push(n.key+(r>=0?"+":"")+r)}else n.key==="配方"?a.unlocked.includes(n.value)||(a.unlocked.push(n.value),t.push("解锁「"+kt(n.value).name+"」")):n.key==="照片"&&(a.photos.includes(n.value)||(a.photos.push(n.value),t.push("获得纪念照片")));return t}function zc(e){const n=a.unlocked.slice().sort((r,s)=>(a.levels[r]||1)-(a.levels[s]||1))[0];n&&(a.levels[n]=Math.min(5,(a.levels[n]||1)+e))}function Gc(e){a.unlocked.forEach(t=>{a.levels[t]=Math.min(5,(a.levels[t]||1)+e)})}function Yc(e){const t=[];for(const n of e||[]){switch(n.k){case"style":a.style[n.id]=(a.style[n.id]||0)+n.v;break;case"trust":if(!n.id)break;a.partnerTrust[n.id]=be((a.partnerTrust[n.id]||0)+n.v);break;case"skill":if(!n.id)break;a.partnerSkill[n.id]=Math.min(5,Math.round(((a.partnerSkill[n.id]||1)+n.v)*10)/10);break;case"loyalty":a.loyalty=be(a.loyalty+n.v);break;case"friend":a.friendship=be(a.friendship+n.v);break}n.label&&t.push(n.label)}return t}function Jc(e,t,n){const r=Yc(t.gains);return e&&e.node==="13.6"&&n===1&&(a.acquired=!0),r.length&&ye("选择："+t.label+"（"+r.join("，")+"）","story"),Ke(),r}function Ko(e){if(!e||a.staff.includes(e))return;a.staff.push(e),a.partnerTrust[e]===void 0&&(a.partnerTrust[e]=10),a.partnerSkill[e]===void 0&&(a.partnerSkill[e]=1);const t=lr(e);t&&ye(t.name+" 加入了林记","story")}function Zc(){const e=nn.find(t=>!a.staff.includes(t.id)&&t.joinMonth<=a.month);e&&Ko(e.id)}function Uo(){return a.staff.map(e=>lr(e)).filter(Boolean)}const ui={feedback:5,market:3,talk:2,train:5};function Xc(e){const t=a.cd[e]||0;return Math.max(0,t-a.dayIndex)}function Qr(e){switch(e){case"restock":return{name:"原料采购",ap:1,cost:600,note:"原料 +"+(12+Mt("warehouse"))+" 份",disabled:a.cash<600};case"feedback":{const t=Xc("feedback");return{name:"顾客反馈",ap:1,cost:0,note:t>0?"还要等 "+t+" 天":"口碑 +1.5，忠诚 +2",disabled:t>0}}case"talk":{const t=a.staff.length?Uo()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:t?"和 "+t+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"sqchat":return{name:"和苏晴聊聊",ap:1,cost:0,note:"友情 +3，她会说点什么"};case"research":return{name:"新品研发",ap:2,cost:0,note:"选一款产品，熟练度 +1"};case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:a.cash<800};case"train":return a.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:a.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const t=ar.find(n=>n.lv===a.shopLevel+1);return t?{name:"装修到「"+t.name+"」",ap:2,cost:t.cost,note:"展示位与产能提升",disabled:a.cash<t.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const t=Dn.find(r=>!a.cities.includes(r.id)&&!a.surveyed.includes(r.id));if(!t)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const n=a.month>=t.month&&a.reputation>=t.rep;return{name:"考察"+t.name,ap:2,cost:2e3,note:n?"考察之后可以筹备开店":"需要第 "+t.month+" 个月、口碑 "+t.rep,disabled:!n||a.cash<2e3}}case"branch":{if(!a.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const t=Dn.find(n=>n.id===a.surveyed[0]);return{name:"在"+t.name+"开店",ap:3,cost:t.cost,note:"门店 +1",disabled:a.cash<t.cost}}default:return{name:e,ap:1,cost:0,note:""}}}function Qc(e,t){if(a.phase!=="playing")return!1;const n=Qr(e);if(n.disabled||a.ap<n.ap||n.cost&&a.cash<n.cost)return!1;const r=a.cash;switch(e){case"restock":{const s=12+Mt("warehouse");a.cash-=600,a.stock+=s,ye("原料 +"+s+" 份");break}case"feedback":a.reputation=be(a.reputation+1.5),a.loyalty=be(a.loyalty+2),ye("认真听了顾客的意见，口碑上升");break;case"talk":if(a.staff.length){const s=t&&t.partner?t.partner:a.staff[0];a.partnerTrust[s]=be((a.partnerTrust[s]||0)+6);const i=lr(s);ye("和 "+(i?i.nick:"伙伴")+" 聊了很久，信赖 +6")}else a.momBond=be(a.momBond+4),ye("和妈妈聊了一会儿，家庭默契 +4");break;case"sqchat":{const s=Te.daily;if(!s.length)break;const i=s[a.dailyIdx%s.length];a.dailyIdx+=1,a.friendship=be(a.friendship+3),a.autoStory=!0,zt(i),ye("和苏晴聊了几句，友情 +3");break}case"research":{const s=t&&t.product?t.product:a.unlocked[0],i=a.levels[s]||1;if(i>=5)return!1;a.levels[s]=Math.min(5,i+1),a.style.innovation+=3,ye("推进了「"+kt(s).name+"」的做法，熟练度提升");break}case"market":a.cash-=800,a.popularity=be(a.popularity+2),a.brand=be(a.brand+1.5),ye("发了新品帖子，知名度上升");break;case"train":{if(!a.staff.length)return!1;const s=t&&t.partner?t.partner:a.staff[0];a.cash-=400,a.partnerSkill[s]=Math.min(5,(a.partnerSkill[s]||1)+1);const i=lr(s);ye("培训了 "+(i?i.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const s=ar.find(i=>i.lv===a.shopLevel+1);if(!s)return!1;a.cash-=s.cost,a.shopLevel=s.lv,a.maxAp=8+(s.ap||0),a.reputation=be(a.reputation+3),a.style.community+=2,ye("店铺升级为「"+s.name+"」","good");break}case"survey":{const s=Dn.find(i=>!a.cities.includes(i.id)&&!a.surveyed.includes(i.id));if(!s)return!1;a.cash-=2e3,a.surveyed.push(s.id),ye("去"+s.name+"看了一圈，可以筹备开店了");break}case"branch":{const s=Dn.find(i=>i.id===a.surveyed[0]);if(!s)return!1;a.cash-=s.cost,a.storeCount+=1,a.cities.push(s.id),a.surveyed=a.surveyed.filter(i=>i!==s.id),a.brand=be(a.brand+6),a.style.efficiency+=3,ye("在"+s.name+"开了新店","good");break}default:return!1}return a.ap-=n.ap,ui[e]&&(a.cd[e]=a.dayIndex+ui[e]),r>a.cash&&(a.monthCost+=r-a.cash),Ke(),!0}function eu(e,t){const n=Math.max(0,Math.min(99,Math.floor(t||0)));n===0?delete a.plan[e]:a.plan[e]=n}function tu(){if(a.phase!=="playing")return{ok:!1,msg:"游戏已经结束了"};const e=Object.keys(a.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const t=e.reduce((i,o)=>i+a.plan[o],0);if(t>a.stock)return{ok:!1,msg:"原料不够，还差 "+(t-a.stock)+" 份"};const n=Ho();if(n>At.value)return{ok:!1,msg:"产能不够。今天的产能是 "+At.value+" 点，还差 "+(n-At.value)};const r=Fo+a.staff.length*Lo+Mt("oven"),s=Math.round(Math.max(0,n-r)*(1-Mt("mixer")));a.stock-=t,a.stamina=Math.max(0,a.stamina-s);for(const i of e)a.shelf[i]=(a.shelf[i]||0)+a.plan[i],a.dayMade+=a.plan[i],a.levels[i]=Math.min(5,(a.levels[i]||1)+a.plan[i]*.02);return ye("做了 "+t+" 个蛋糕，自己出了 "+s+" 点体力"),a.plan={},Ke(),{ok:!0,msg:"做好了 "+t+" 个"}}function nu(){a.orders=[];const e=.35+a.popularity/300,t=Math.random()<e?Math.random()<.35?2:1:0;for(let n=0;n<t;n++){const r=Po.value;if(!r.length)break;const s=r[Math.floor(Math.random()*r.length)],i=Math.random(),o=i<.28,l=!o&&i<.66,c=!o&&!l&&i<.75,g=o?"定制":l?"线上":c?"节日":"普通",u=o?1:1+Math.floor(Math.random()*2);a.orders.push({id:"o"+a.month+"-"+a.day+"-"+n,type:g,product:s.id,qty:u,pay:Math.round(Pn(s.id)*u*(o?1.6*(1+Mt("packing")):1.25)),taken:!1})}}function ru(e){const t=a.orders.find(n=>n.id===e);return t?(t.taken=!t.taken,Ke(),!0):!1}function fi(){if(a.phase!=="playing"||a.daySold>0||a.dayRev>0)return null;let e=0,t=0;const n={};for(const r of a.orders){if(!r.taken)continue;const s=a.shelf[r.product]||0;s<r.qty||(a.shelf[r.product]=s-r.qty,e+=r.pay,t+=r.qty,n[r.product]=(n[r.product]||0)+r.qty,a.doneOrders+=1,r.type==="定制"&&(a.customOrders+=1),r.type==="线上"&&(a.onlineOrders+=1),r.type==="节日"&&(a.festivalOrders+=1),a.loyalty=be(a.loyalty+2))}for(const r of Object.keys(a.shelf)){const s=a.shelf[r]||0;if(s<=0)continue;const i=Math.min(s,Bo(r));a.shelf[r]=s-i,e+=i*Pn(r),t+=i,n[r]=(n[r]||0)+i}return a.dayRev=e,a.daySold=t,a.monthRev+=e,Object.keys(n).forEach(r=>{a.monthSold[r]=(a.monthSold[r]||0)+n[r]}),t>0&&(a.reputation=be(a.reputation+.12),a.loyalty=be(a.loyalty+.1),a.popularity=be(a.popularity+.05)),ye("今天卖出 "+t+" 个，收入 "+e,t>0?"good":"bad"),Ke(),{rev:e,sold:t}}const es={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function su(e){const t=es[e]||es.discount;let n=0,r=0;for(const o of Object.keys(a.shelf))n+=a.shelf[o]||0,r+=(a.shelf[o]||0)*Pn(o);let s=0;if(n>0){const o=t.cashRate>0?t.cashRate+Mt("fridge"):0;s=Math.round(r*o),a.cash+=s,t.community&&(a.style.community+=t.community*.3)}t.community>=2&&(a.reputation=be(a.reputation+1)),a.dayLeft=n,a.shelf={};const i={day:a.day,rev:a.dayRev,sold:a.daySold,left:n,gain:s};return a.dayRev=0,a.daySold=0,a.dayMade=0,iu(),Ke(),i}function iu(){a.day+=1,a.dayIndex+=1,a.day>cr?(a.day=1,ou()):_s()}function _s(){a.ap=a.maxAp,a.stamina=Math.min(a.maxStamina,a.stamina+70),a.plan={},a.shelf||(a.shelf={}),nu(),Ke()}function ou(){const e=jo.value;a.monthCost+=e,a.cash+=a.monthRev-e;let t=null;a.cash<0&&(a.usedMomHelp?(a.cash=0,a.reputation=be(a.reputation-2),t="这个月很难，勉强撑过去了"):(a.cash=3e3,a.usedMomHelp=!0,t="资金见底，妈妈先垫了一笔周转"),ye(t,"bad"));let n=null,r=0;Object.keys(a.monthSold).forEach(o=>{a.monthSold[o]>r&&(r=a.monthSold[o],n=o)}),a.report={month:a.month,rev:a.monthRev,cost:a.monthCost,net:a.monthRev-a.monthCost,best:n?kt(n).name:"—",bestN:r,warn:t};const s=a.month;if(a.month+=1,a.monthRev=0,a.monthCost=0,a.monthSold={},a.shelf={},Nn.forEach(o=>{o.month>0&&o.month<=a.month&&!a.unlocked.includes(o.id)&&(a.unlocked.push(o.id),ye("新配方入手："+o.name,"story"))}),nn.forEach(o=>{o.joinMonth===a.month&&Ko(o.id)}),s===29){const o=Object.values(a.partnerTrust).filter(l=>l>=70).length;a.helpers=o+(a.momBond>=70?1:0)}const i=Yr.find(o=>o.to===s&&!o.final);if(i){const o=Te.stages[i.id];if(!au(i)){a.phase="ended",a.ending={...i.short,key:i.short.key,text:""},o&&o.failId&&zt(Te.find(o.failId)),ye("阶段目标没有达成","bad"),Ke();return}a.stage=i.id+1,o&&o.pass.length&&zt({id:"STAGE_PASS_"+i.id,title:i.name+" · 阶段达成",chapter:i.name,kind:"stage",beats:o.pass}),ye("第 "+i.id+" 阶段目标达成","good")}if(a.month>36){a.month=36,a.phase="ended";const o=cu();a.ending={...Oc[o],key:o},zt(Te.find(lu[o])),Ke();return}a.stamina=a.maxStamina,_s(),qo()}const lu={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function au(e){if(!e.goals.length)return!0;const t=e.goals.filter(n=>n.check(a));return!(t.length<e.need||e.needExpand&&!t.some(n=>n.expand))}function cu(){if(a.acquired)return"transfer";if(a.storeCount>=6)return"national";if(a.storeCount>=3)return"regional";const e=a.style,t=Object.keys(e).sort((r,s)=>e[s]-e[r])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[t]||"community"}function zt(e){e&&(Xe.events.find(t=>t.id===e.id)||Xe.events.push(e))}function qo(){const e=Te.events.filter(t=>!(t.kind!=="main"||a.played.includes(t.id)||t.month==null||a.month<t.month||t.test&&!Xr(t.test,a)));e.sort((t,n)=>t.month-n.month||t.order-n.order),e.forEach(zt),Te.events.filter(t=>t.kind==="style"&&!a.played.includes(t.id)&&Xr(t.test,a)).forEach(zt)}function di(){const e=Te.events.find(t=>t.kind==="prologue");e&&!a.played.includes(e.id)&&zt(e),qo()}function uu(e){const t=e.ids&&e.ids.length?e.ids:[e.id];e.kind!=="daily"&&t.forEach(r=>{a.played.includes(r)||a.played.push(r)}),Wc(e.rewards||[]).length&&ye("剧情："+e.title,"story"),Ke()}function hi(e){const t=(Te.partnerEndings||{})[e];if(!t||!t.length)return null;if(t.length===1)return t[0];const n=a.partnerTrust[e]||0,r=a.partnerSkill[e]||0;return t.length>=4?n>=70&&r>=3?t[0]:n>=70?t[1]:r>=3?t[2]:t[3]:n>=70?t[0]:t[1]}const Je=(...e)=>e.join(","),pi={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:Je("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:Je("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:Je("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:Je("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:Je("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:Je("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:Je("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:Je("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:Je("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:Je("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:Je("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},fu=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/宿舍|卧室|家里|房间|厨房里/,"home"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]];function du(e){const t=e||"";for(const[n,r]of fu)if(n.test(t))return r;return"shop"}const Mr={林念:{file:"ln-sprite.webp",face:"ln-face.webp"},苏晴:{file:"sq-sprite.webp",face:"sq-exp-1.webp"},林暖:{file:"nu-sprite.webp",face:"nu-exp-6.webp"},周雨桐:{file:"xy-sprite.webp",face:"xy-face.webp"},许知遥:{file:"zy-sprite.webp",face:"zy-face.webp"},唐鸢:{file:"ty-sprite.webp",face:"ty-face.webp"},叶星河:{file:"xh-sprite.webp",face:"xh-face.webp"}},hu=Mr;function pu(e){const t=Mr[e];return t&&sn(t.file)==="ok"?Se(t.file):""}function mi(e){const t=Mr[e];return t&&sn(t.face)==="ok"?Se(t.face):""}function mu(e){const t=Mr[e];return!!t&&sn(t.file)==="ok"}const gu={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"}};function vu(e){const t=gu[e],n=t?t.img:"cg-"+e+".webp";return{src:sn(n)==="ok"?Se(n):"",name:t?t.name:e}}function _u(e){return!e||!e.img?"":sn(e.img)==="ok"?Se(e.img):""}const Dt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},yu={class:"vn"},bu=["src"],xu={key:0,class:"vn-cg"},ku=["src"],Mu={class:"vn-cg-cap"},Eu={class:"vn-cast"},Cu=["src","alt"],Tu={class:"vn-top"},wu={class:"vn-titles"},Su={class:"vn-chapter"},Au={key:0,class:"vn-scene"},Iu={key:1,class:"vn-scene"},$u={class:"vn-tools"},Ou={key:0,class:"vn-choice"},Nu={class:"vn-ask"},Du=["onClick"],Fu={class:"t"},Lu={key:0,class:"r"},Ru={key:1,class:"r"},Pu={key:0,class:"vn-note"},Vu={key:0,class:"vn-name"},Bu=["src"],ju={key:1},Hu={class:"vn-text"},Ku={key:0,class:"caret"},Uu={class:"vn-foot"},qu={key:1,class:"vn-dot"},Wu={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:t}){const n=e,r=t,s=Pe([]),i=Pe(0),o=Pe(0),l=Pe(!1);let c=0,g=0;function u(J){for(let ae=0;ae<J.length;ae++){const Q=J[ae].t;if(Q!=="scene"&&Q!=="cg"&&Q!=="cgend"&&Q!=="act")return ae}return Math.max(0,J.length-1)}const h=G(()=>s.value[i.value]||null),p=G(()=>i.value>=s.value.length-1),y=G(()=>!!h.value&&h.value.t==="choice"),L=G(()=>!!h.value&&h.value.t==="say"),w=G(()=>!!h.value&&h.value.t==="nar"),O=G(()=>h.value&&h.value.text||""),I=G(()=>O.value.slice(0,o.value)),A=G(()=>o.value<O.value.length),B=G(()=>{for(let J=i.value;J>=0;J--)if(s.value[J].t==="scene")return J;return-1}),M=G(()=>B.value>=0?s.value[B.value]:null),V=G(()=>{for(let J=i.value;J>=0;J--){if(s.value[J].t==="act")return s.value[J].text;if(s.value[J].t==="scene")return""}return""}),re=G(()=>M.value?du(M.value.text):"shop"),z=G(()=>pi[re.value]||pi.shop),P=G(()=>_u(z.value)),U=G(()=>!!M.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(M.value.text)),Y=G(()=>{let J=-1;for(let ae=i.value;ae>=0;ae--){const Q=s.value[ae].t;if(Q==="cg"){J=ae;break}if(Q==="cgend")return""}return J<0||J<B.value?"":s.value[J].key}),q=G(()=>Y.value?vu(Y.value):null),S=G(()=>{let J=0;for(let Q=i.value;Q>=0;Q--)if(s.value[Q].t==="scene"||s.value[Q].t==="act"){J=Q+1;break}const ae=[];for(let Q=J;Q<=i.value;Q++){const Me=s.value[Q];Me.t==="say"&&hu[Me.who]&&mu(Me.who)&&!ae.includes(Me.who)&&ae.push(Me.who)}return ae}),X=G(()=>L.value?h.value.who:"");Qt(()=>n.ev,()=>{s.value=Jn(n.ev.beats||[],a),i.value=u(s.value),o.value=0,l.value=!1,ue()},{immediate:!0});const _e={1:[50],2:[31,69],3:[22,50,78]};function Re(J,ae){return{left:((_e[ae]||_e[3])[J]||50)+"%",zIndex:10+J}}function ue(){if(clearInterval(c),o.value=0,y.value||!O.value){o.value=O.value.length;return}const J=Math.max(1,Math.round(O.value.length/40));c=setInterval(()=>{o.value=Math.min(O.value.length,o.value+J),o.value>=O.value.length&&clearInterval(c)},18)}Qt(()=>i.value,ue);function fe(J){let ae=J+1;for(;ae<s.value.length;){const Q=s.value[ae].t;if(Q==="scene"||Q==="cg"||Q==="cgend"||Q==="act")ae++;else break}return Math.min(ae,s.value.length-1)}function le(){if(!y.value){if(A.value){o.value=O.value.length,clearInterval(c);return}p.value||(i.value=fe(i.value))}}function pt(J,ae){Jc(h.value,J,ae);const Q=(J.branch||[]).concat(h.value.after||[]);s.value.splice(i.value,1,...Q);let Me=Math.max(0,i.value-1);i.value=fe(Me)}function Yt(){for(let J=i.value+1;J<s.value.length;J++)if(s.value[J].t==="choice"){i.value=J;return}i.value=s.value.length-1,o.value=O.value.length}function mt(){clearInterval(c),clearInterval(g),uu(n.ev),r("done")}function Ve(){l.value=!l.value,clearInterval(g),l.value&&(g=setInterval(()=>{if(p.value){clearInterval(g),l.value=!1;return}if(y.value){clearInterval(g),l.value=!1;return}A.value?o.value=O.value.length:i.value=fe(i.value)},1400))}return ro(()=>{clearInterval(c),clearInterval(g)}),(J,ae)=>(b(),C("div",yu,[f("div",{class:ve(["vn-stage",{flash:U.value}])},[f("div",{class:"vn-bg",style:De({background:z.value.css})},[P.value?(b(),C("img",{key:0,src:P.value,alt:"",class:"vn-bg-img"},null,8,bu)):te("",!0),ae[0]||(ae[0]=f("div",{class:"vn-veil"},null,-1))],4),Ie(Ya,{name:"cgfade"},{default:zi(()=>[q.value&&q.value.src?(b(),C("div",xu,[f("img",{src:q.value.src,alt:""},null,8,ku),f("div",Mu,v(q.value.name),1)])):te("",!0)]),_:1}),f("div",Eu,[(b(!0),C(ee,null,me(S.value,(Q,Me)=>(b(),C("div",{key:Q+"-"+S.value.length,class:ve(["vn-actor",{dim:X.value&&X.value!==Q,off:!X.value}]),style:De(Re(Me,S.value.length))},[f("img",{src:D(pu)(Q),alt:Q},null,8,Cu)],6))),128))]),f("div",Tu,[f("div",wu,[f("div",Su,v(e.ev.title),1),V.value?(b(),C("div",Au,v(V.value),1)):M.value?(b(),C("div",Iu,v(M.value.text),1)):te("",!0)]),f("div",$u,[f("button",{type:"button",class:ve({on:l.value}),onClick:dn(Ve,["stop"])},"自动",2),f("button",{type:"button",onClick:dn(Yt,["stop"])},"跳过")])]),y.value?(b(),C("div",Ou,[f("div",Nu,v(h.value.prompt),1),(b(!0),C(ee,null,me(h.value.options,(Q,Me)=>(b(),C("button",{key:Me,type:"button",class:"vn-opt",onClick:dn(Ft=>pt(Q,Me),["stop"])},[f("span",Fu,v(Q.label),1),Q.gains&&Q.gains.length?(b(),C("span",Lu,v(Q.gains.map(Ft=>Ft.label).join(" · ")),1)):Q.hint?(b(),C("span",Ru,v(Q.hint),1)):te("",!0)],8,Du))),128)),h.value.note?(b(),C("p",Pu,v(h.value.note),1)):te("",!0)])):(b(),C("div",{key:1,class:ve(["vn-box",{nar:w.value}]),onClick:le},[L.value?(b(),C("div",Vu,[D(mi)(h.value.who)?(b(),C("img",{key:0,src:D(mi)(h.value.who),alt:""},null,8,Bu)):te("",!0),f("span",null,v(h.value.who),1),h.value.emo&&h.value.emo!=="视角"?(b(),C("em",ju,v(h.value.emo),1)):te("",!0)])):te("",!0),f("div",Hu,[He(v(I.value),1),A.value?(b(),C("span",Ku)):te("",!0)]),f("div",Uu,[p.value&&!A.value?(b(),C("span",{key:0,class:"vn-end",onClick:dn(mt,["stop"])},"结束 ←")):(b(),C("span",qu,"▾"))])],2))],2)]))}},zu=Dt(Wu,[["__scopeId","data-v-3d9a0545"]]),Gu={class:"shop-hero"},Yu={class:"tag"},Ju=["src"],Zu={class:"cap"},Xu={class:"small muted"},Qu={class:"card card-pad",style:{"margin-top":"12px"}},ef={class:"between",style:{"margin-bottom":"6px"}},tf={class:"small"},nf={class:"between",style:{"margin-bottom":"6px"}},rf={class:"small"},sf={class:"between",style:{"margin-bottom":"6px"}},of={class:"small"},lf={class:"between"},af={class:"small"},cf={key:0,class:"card",style:{"margin-top":"12px"}},uf={style:{flex:"1 1 auto","min-width":"0"}},ff={style:{"font-size":"14px","font-weight":"600"}},df={class:"small muted"},hf=["onClick"],pf={class:"card card-pad",style:{"margin-top":"12px"}},mf={key:0},gf=["disabled"],vf={key:1},_f={class:"between",style:{"margin-bottom":"6px"}},yf={class:"small"},bf={class:"between",style:{"margin-bottom":"10px"}},xf={class:"small"},kf={key:0,class:"shelf-left"},Mf={class:"small"},Ef={class:"small muted"},Cf={key:2},Tf=["onClick"],wf={class:"r"},Sf={class:"card card-pad",style:{"margin-top":"12px"}},Af={class:"dev-body"},If={class:"dev-name"},$f={class:"dots"},Of={class:"chip",style:{"font-size":"10px"}},Nf={class:"dev-desc"},Df={key:0,class:"dev-next"},Ff={key:1,class:"dev-next"},Lf=["disabled","onClick"],Rf={class:"card card-pad",style:{"margin-top":"12px"}},Pf={class:"k"},Vf={class:"track"},Bf={class:"v"},jf={__name:"ShopPage",emits:["closed"],setup(e,{emit:t}){const n=t,r=G(()=>wc(a.shopLevel)),s=G(()=>Object.values(a.shelf||{}).reduce((u,h)=>u+h,0)),i=G(()=>a.dayRev>0||a.daySold>0),o=G(()=>Object.keys(a.shelf||{}).filter(u=>a.shelf[u]>0).map(u=>({id:u,name:kt(u).name,qty:a.shelf[u]}))),l=Pe(!1),c=G(()=>No.map(u=>{const h=kr(u.id);return{id:u.id,name:u.name,note:u.note,desc:u.desc,tier:h,now:h?u.tiers[h-1].text:"",next:Ro(u.id)}}));function g(u){const h=su(u);l.value=!1,n("closed",h)}return(u,h)=>(b(),C("div",null,[f("div",Gu,[f("span",Yu,v(r.value.name),1),f("img",{src:D(Se)("shop-exterior.webp"),alt:"林记烘焙"},null,8,Ju),f("div",Zu,[h[2]||(h[2]=f("div",{class:"n serif"},"林记烘焙",-1)),f("div",Xu,v(D(Zr)(D(a).month))+" · 第 "+v(D(a).day)+" / "+v(D(cr))+" 个经营日 · 共 "+v(D(a).storeCount)+" 家店 ",1)])]),f("div",Qu,[h[7]||(h[7]=f("div",{class:"h2"},"今天",-1)),f("div",ef,[h[3]||(h[3]=f("span",{class:"small muted"},"产能（体力 + 妈妈 + 伙伴）",-1)),f("span",tf,v(D(At))+" 点",1)]),f("div",nf,[h[4]||(h[4]=f("span",{class:"small muted"},"原料库存",-1)),f("span",rf,v(D(a).stock)+" 份",1)]),f("div",sf,[h[5]||(h[5]=f("span",{class:"small muted"},"待售成品",-1)),f("span",of,v(s.value)+" 个",1)]),f("div",lf,[h[6]||(h[6]=f("span",{class:"small muted"},"本月固定成本",-1)),f("span",af,"¥"+v(D(jo)),1)])]),D(a).orders.length?(b(),C("div",cf,[h[8]||(h[8]=f("div",{class:"card-pad",style:{"padding-bottom":"2px"}},[f("div",{class:"h2",style:{margin:"0"}},[He("今日订单 "),f("span",{class:"sub"},"接单后营业时优先交付")])],-1)),(b(!0),C(ee,null,me(D(a).orders,p=>(b(),C("div",{key:p.id,class:"cake",style:{"align-items":"center"}},[f("div",uf,[f("div",ff,v(p.type)+" · "+v(D(kt)(p.product).name)+" × "+v(p.qty),1),f("div",df,"交付可得 ¥"+v(p.pay),1)]),f("button",{class:ve(["btn",{primary:p.taken}]),style:{height:"34px",padding:"0 14px","font-size":"13px"},type:"button",onClick:y=>D(ru)(p.id)},v(p.taken?"已接":"接单"),11,hf)]))),128))])):te("",!0),f("div",pf,[i.value?(b(),C("div",vf,[h[15]||(h[15]=f("div",{class:"h2"},"今天的成绩",-1)),f("div",_f,[h[11]||(h[11]=f("span",{class:"small muted"},"卖出",-1)),f("span",yf,v(D(a).daySold)+" 个",1)]),f("div",bf,[h[12]||(h[12]=f("span",{class:"small muted"},"收入",-1)),f("span",xf,"¥"+v(D(a).dayRev),1)]),o.value.length?(b(),C("div",kf,[h[13]||(h[13]=f("div",{class:"small muted",style:{"margin-bottom":"6px"}},"还剩",-1)),(b(!0),C(ee,null,me(o.value,p=>(b(),C("div",{class:"between",key:p.id,style:{"margin-bottom":"4px"}},[f("span",Mf,v(p.name),1),f("span",Ef,v(p.qty)+" 个",1)]))),128))])):te("",!0),l.value?(b(),C("div",Cf,[h[14]||(h[14]=f("div",{class:"small muted",style:{"margin-bottom":"8px"}},"剩下的怎么处理？",-1)),(b(!0),C(ee,null,me(D(es),(p,y)=>(b(),C("button",{key:y,class:"opt",type:"button",onClick:L=>g(y)},[He(v(p.label)+" ",1),f("span",wf,v(p.cashRate?"回收一半成本":"不换钱")+v(p.community?"，社区好感 +"+p.community:""),1)],8,Tf))),128))])):(b(),C("button",{key:1,class:"btn primary block",type:"button",onClick:h[1]||(h[1]=p=>l.value=!0)}," 打烊结算 "))])):(b(),C("div",mf,[h[9]||(h[9]=f("div",{class:"h2"},"营业",-1)),h[10]||(h[10]=f("p",{class:"small muted",style:{margin:"0 0 10px"}}," 开门之后先交付已接的订单，剩下的按客流卖出去。 ",-1)),f("button",{class:"btn primary block",type:"button",disabled:s.value===0,onClick:h[0]||(h[0]=(...p)=>D(fi)&&D(fi)(...p))},v(s.value===0?"还没有成品，先去厨房做":"开门营业"),9,gf)]))]),f("div",Sf,[h[16]||(h[16]=f("div",{class:"between",style:{"margin-bottom":"6px"}},[f("div",{class:"h2",style:{margin:"0"}},"设备"),f("span",{class:"small muted"},"买了立刻生效")],-1)),(b(!0),C(ee,null,me(c.value,p=>(b(),C("div",{key:p.id,class:"dev"},[f("div",Af,[f("div",If,[He(v(p.name)+" ",1),f("span",$f,[(b(),C(ee,null,me(3,y=>f("i",{key:y,class:ve({on:y<=p.tier})},null,2)),64))]),f("span",Of,v(p.tier?p.now:p.note),1)]),f("div",Nf,v(p.desc),1),p.next?(b(),C("div",Df,"升级："+v(p.next.text),1)):(b(),C("div",Ff,"已经是最好的了"))]),f("button",{class:"btn",type:"button",style:{height:"34px",padding:"0 12px","font-size":"12.5px",flex:"0 0 auto"},disabled:!p.next||D(a).cash<p.next.cost,onClick:y=>D(Uc)(p.id)},v(p.next?"¥"+p.next.cost:"满级"),9,Lf)]))),128))]),f("div",Rf,[h[17]||(h[17]=f("div",{class:"h2"},"统计",-1)),(b(!0),C(ee,null,me([{k:"口碑",v:D(a).reputation,cls:"sage"},{k:"知名度",v:D(a).popularity,cls:"sage"},{k:"顾客忠诚",v:D(a).loyalty,cls:""},{k:"品牌影响",v:D(a).brand,cls:"pink"}],p=>(b(),C("div",{class:"stat",key:p.k},[f("span",Pf,v(p.k),1),f("span",Vf,[f("span",{class:ve(["fill",p.cls]),style:De({width:p.v+"%"})},null,6)]),f("span",Bf,v(Math.round(p.v)),1)]))),128))])]))}},Hf=Dt(jf,[["__scopeId","data-v-4fff0539"]]),Kf=["src"],Uf={key:1,viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},qf=["fill"],Wf=["fill"],zf=["fill"],Gf=["fill"],Yf=["fill"],Jf=["fill"],Zf=["fill"],Xf=["fill"],Qf=["fill"],ed=["fill"],td=["fill"],nd={__name:"CakeArt",props:{id:{type:String,default:""},colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){const t=e,n=G(()=>t.id&&sn("cake-"+t.id+".webp")==="ok"?Se("cake-"+t.id+".webp"):"");return(r,s)=>n.value?(b(),C("img",{key:0,src:n.value,alt:"",class:"cakeart photo"},null,8,Kf)):(b(),C("svg",Uf,[s[0]||(s[0]=f("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),s[1]||(s[1]=f("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),f("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,qf),f("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,Wf),f("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,zf),f("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,Gf),f("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,Yf),f("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,Jf),f("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,Zf),f("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,Xf),f("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,Qf),f("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,ed),f("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,td)]))}},Wo=Dt(nd,[["__scopeId","data-v-bd8df027"]]),rd={class:"card card-pad"},sd={class:"between",style:{"margin-bottom":"8px"}},id={class:"track",style:{height:"8px",background:"var(--apricot)","border-radius":"999px",overflow:"hidden"}},od={class:"between small muted",style:{"margin-top":"8px"}},ld={class:"card",style:{"margin-top":"12px"}},ad={class:"art"},cd={class:"body"},ud={class:"name"},fd={class:"chip",style:{"font-size":"10px"}},dd={class:"nums"},hd={class:"tiers"},pd=["onClick"],md={class:"stepper"},gd=["onClick"],vd=["onClick"],_d={__name:"KitchenPage",setup(e){const t=Pe(""),n=Pe(!1);let r=0;const s=G(()=>Ho()),i=G(()=>Object.values(a.plan).reduce((u,h)=>u+h,0)),o=G(()=>Po.value.map(u=>({...u,lv:a.levels[u.id]||1,price:Pn(u.id),demand:Bo(u.id),tier:a.prices[u.id]||"std",qty:a.plan[u.id]||0})));function l(u,h){const p=a.plan[u]||0;eu(u,p+h)}function c(u,h){a.prices[u]=h}function g(){const u=tu();t.value=u.msg,n.value=!u.ok,clearTimeout(r),r=setTimeout(()=>t.value="",2200)}return(u,h)=>(b(),C("div",null,[f("div",rd,[f("div",sd,[h[0]||(h[0]=f("div",{class:"h2",style:{margin:"0"}},"厨房",-1)),f("span",{class:ve(["chip",s.value>D(At)?"pink":"sage"])}," 产能 "+v(s.value)+" / "+v(D(At)),3)]),f("div",id,[f("div",{style:De([{height:"100%","border-radius":"999px",transition:"width .3s"},{width:Math.min(100,s.value/Math.max(1,D(At))*100)+"%",background:s.value>D(At)?"#d95b67":"linear-gradient(90deg,#e9c9a3,#d9a06a)"}])},null,4)]),f("div",od,[f("span",null,"原料 "+v(D(a).stock)+" 份 · 计划 "+v(i.value)+" 个",1),f("span",null,"体力 "+v(D(a).stamina),1)])]),f("div",ld,[(b(!0),C(ee,null,me(o.value,p=>(b(),C("div",{key:p.id,class:"cake"},[f("div",ad,[Ie(Wo,{id:p.id,colors:p.colors},null,8,["id","colors"])]),f("div",cd,[f("div",ud,[f("span",null,v(p.name),1),f("span",fd,"Lv"+v(Math.round(p.lv*10)/10),1)]),f("div",dd,[f("span",null,"¥"+v(p.price),1),f("span",null,"预计卖 "+v(p.demand)+" 个",1),f("span",null,v(p.diff)+" 点/个",1)]),f("div",hd,[(b(!0),C(ee,null,me(D(Oo),(y,L)=>(b(),C("button",{key:L,type:"button",class:ve(["tier",{on:p.tier===L}]),onClick:w=>c(p.id,L)},v(y.label),11,pd))),128))])]),f("div",md,[f("button",{type:"button",onClick:y=>l(p.id,-1)},"−",8,gd),f("span",null,v(p.qty),1),f("button",{type:"button",onClick:y=>l(p.id,1)},"+",8,vd)])]))),128))]),t.value?(b(),C("p",{key:0,class:"small",style:De({color:n.value?"var(--berry)":"#6c8a55",margin:"10px 2px 0"})},v(t.value),5)):te("",!0),f("button",{class:"btn primary block",style:{"margin-top":"12px"},type:"button",onClick:g}," 开始制作（消耗原料与体力） "),h[1]||(h[1]=f("p",{class:"small muted",style:{margin:"9px 2px 0","text-align":"center"}}," 妈妈每天帮 60 点产能，每位伙伴 40 点，超出部分才用你的体力 ",-1))]))}},yd=Dt(_d,[["__scopeId","data-v-5b6acae2"]]),bd={class:"card",style:{overflow:"hidden"}},xd={style:{display:"flex"}},kd={class:"portrait"},Md=["src"],Ed={style:{flex:"1 1 auto",padding:"14px"}},Cd={class:"stat",style:{"margin-top":"12px"}},Td={class:"track"},wd={class:"v"},Sd={class:"card",style:{"margin-top":"12px",overflow:"hidden"}},Ad={style:{display:"flex"}},Id={class:"portrait"},$d=["src"],Od={style:{flex:"1 1 auto",padding:"14px"}},Nd={class:"stat",style:{"margin-top":"12px"}},Dd={class:"track"},Fd={class:"v"},Ld={class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}},Rd={class:"card card-pad",style:{"margin-top":"12px"}},Pd={class:"h2"},Vd={class:"sub"},Bd={style:{flex:"1 1 auto","min-width":"0"}},jd={class:"nm"},Hd={class:"chip",style:{"font-size":"10px"}},Kd={key:0,class:"chip pink",style:{"font-size":"10px"}},Ud={class:"nt"},qd={key:0,class:"bars"},Wd={class:"b"},zd={class:"bt"},Gd={class:"bv"},Yd={class:"b"},Jd={class:"bl"},Zd={class:"bt"},Xd={class:"bv"},Qd={class:"card card-pad",style:{"margin-top":"12px"}},eh={class:"k"},th={class:"track"},nh={class:"v"},rh={__name:"PartnersPage",setup(e){const t=si.nu,n=si.sq,r=G(()=>nn.map(o=>{const l=a.staff.includes(o.id);return{...o,joined:l,trust:Math.round(a.partnerTrust[o.id]||0),skill:Math.round((a.partnerSkill[o.id]||0)*10)/10}})),s=G(()=>a.photos.length),i=G(()=>Object.keys(Jr).length);return(o,l)=>(b(),C("div",null,[f("div",bd,[f("div",xd,[f("div",kd,[f("img",{src:D(t).full,alt:"林暖"},null,8,Md)]),f("div",Ed,[l[1]||(l[1]=f("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"林暖",-1)),l[2]||(l[2]=f("div",{class:"small muted"},"母亲 · 林记上一任经营者",-1)),f("div",Cd,[l[0]||(l[0]=f("span",{class:"k"},"家庭默契",-1)),f("span",Td,[f("span",{class:"fill",style:De({width:D(a).momBond+"%"})},null,4)]),f("span",wd,v(Math.round(D(a).momBond)),1)]),l[3]||(l[3]=f("div",{class:"small muted",style:{"margin-top":"6px","line-height":"1.6"}}," 前期仍在店里帮忙，每天能搭 60 点产能。她不会替你把所有事都做完。 ",-1))])])]),f("div",Sd,[f("div",Ad,[f("div",Id,[f("img",{src:D(n).full,alt:"苏晴"},null,8,$d)]),f("div",Od,[l[5]||(l[5]=f("div",{class:"serif",style:{"font-size":"18px","font-weight":"600"}},"苏晴",-1)),l[6]||(l[6]=f("div",{class:"small muted"},"高中好友 · 摄影从业者",-1)),f("div",Nd,[l[4]||(l[4]=f("span",{class:"k"},"友情",-1)),f("span",Dd,[f("span",{class:"fill pink",style:De({width:D(a).friendship+"%"})},null,4)]),f("span",Fd,v(Math.round(D(a).friendship)),1)]),f("div",Ld," 不在员工名单里。相册 "+v(s.value)+" / "+v(i.value)+" 张。 ",1)])])]),f("div",Rd,[f("div",Pd,[l[7]||(l[7]=He("伙伴 ",-1)),f("span",Vd,v(D(a).staff.length)+" / "+v(D(nn).length)+" 人",1)]),(b(!0),C(ee,null,me(r.value,c=>(b(),C("div",{key:c.id,class:ve(["mate",{off:!c.joined}])},[f("div",{class:"ava",style:De({background:c.color})},v(c.name.slice(0,1)),5),f("div",Bd,[f("div",jd,[He(v(c.name)+" ",1),f("span",Hd,v(c.role),1),c.joined?te("",!0):(b(),C("span",Kd,"第 "+v(c.joinMonth)+" 个月加入",1))]),f("div",Ud,v(c.issue),1),c.joined?(b(),C("div",qd,[f("span",Wd,[l[8]||(l[8]=f("span",{class:"bl"},"信赖",-1)),f("span",zd,[f("span",{class:"bf",style:De({width:c.trust+"%"})},null,4)]),f("span",Gd,v(c.trust),1)]),f("span",Yd,[f("span",Jd,v(c.skillName),1),f("span",Zd,[f("span",{class:"bf sage",style:De({width:c.skill*20+"%"})},null,4)]),f("span",Xd,v(c.skill),1)])])):te("",!0)])],2))),128))]),f("div",Qd,[l[9]||(l[9]=f("div",{class:"h2"},[He("经营偏好 "),f("span",{class:"sub"},"长期选择积累出的风格")],-1)),(b(!0),C(ee,null,me([{k:"传统",v:D(a).style.tradition},{k:"创新",v:D(a).style.innovation},{k:"效率",v:D(a).style.efficiency},{k:"社区",v:D(a).style.community}],c=>(b(),C("div",{class:"stat",key:c.k},[f("span",eh,v(c.k),1),f("span",th,[f("span",{class:"fill",style:De({width:Math.min(100,c.v)+"%"})},null,4)]),f("span",nh,v(Math.round(c.v)),1)]))),128))])]))}},sh=Dt(rh,[["__scopeId","data-v-ead7304a"]]),ih={class:"card card-pad"},oh={class:"between"},lh={class:"row",style:{gap:"4px","flex-wrap":"wrap","max-width":"150px","justify-content":"flex-end"}},ah={class:"between small muted",style:{"margin-top":"8px"}},ch={class:"act-grid",style:{"margin-top":"10px"}},uh=["disabled","onClick"],fh={class:"t"},dh={class:"c"},hh={class:"n"},ph={key:0,class:"n cost"},mh={key:0,class:"card card-pad",style:{"margin-top":"10px"}},gh={class:"h2"},vh={class:"pills"},_h=["onClick"],yh={class:"muted"},bh={key:1,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"}},xh={class:"card card-pad",style:{"margin-top":"12px"}},kh={class:"between",style:{"margin-bottom":"8px"}},Mh={class:"small muted",style:{"margin-bottom":"8px"}},Eh={key:0,class:"chip pink",style:{"font-size":"10px"}},Ch={class:"card card-pad",style:{"margin-top":"12px"}},Th={key:0,class:"empty"},wh={class:"d"},Sh={class:"x"},Ah={__name:"ManagePage",setup(e){const t=Pe(""),n=Pe("");let r=0;const s=G(()=>["restock","feedback","talk","sqchat","research","market","train","decorate","survey","branch"].map(u=>({id:u,info:Qr(u)}))),i=G(()=>t.value==="research"?a.unlocked.map(u=>({id:u,label:kt(u).name,sub:"Lv"+Math.round((a.levels[u]||1)*10)/10})):t.value==="train"||t.value==="talk"?Uo().map(u=>({id:u.id,label:u.nick,sub:"信赖 "+Math.round(a.partnerTrust[u.id]||0)})):[]);function o(u){return u==="research"?a.unlocked.length>1:u==="train"||u==="talk"?a.staff.length>1:!1}function l(u){const h=Qr(u);if(h.disabled||a.ap<h.ap||h.cost&&a.cash<h.cost){g("现在做不了："+h.note);return}if(o(u)){t.value=t.value===u?"":u;return}c(u,{})}function c(u,h){const p=Qc(u,h);t.value="",p||g("没有执行成功，检查一下行动力或资金")}function g(u){n.value=u,clearTimeout(r),r=setTimeout(()=>n.value="",2e3)}return(u,h)=>(b(),C("div",null,[f("div",ih,[f("div",oh,[h[0]||(h[0]=f("div",null,[f("div",{class:"h2",style:{margin:"0"}},"今天的行动力"),f("div",{class:"small muted",style:{"margin-top":"2px"}}," 每个经营日开始回满，不累积 ")],-1)),f("div",lh,[(b(!0),C(ee,null,me(D(a).maxAp,p=>(b(),C("span",{key:p,class:ve(["ap-dot",{on:p<=D(a).ap}])},null,2))),128))])]),f("div",ah,[f("span",null,"剩余 "+v(D(a).ap)+" / "+v(D(a).maxAp)+" 点",1),f("span",null,"体力 "+v(D(a).stamina)+" / "+v(D(a).maxStamina),1)])]),f("div",ch,[(b(!0),C(ee,null,me(s.value,p=>(b(),C("button",{key:p.id,class:ve(["act",{on:t.value===p.id}]),type:"button",disabled:p.info.disabled||D(a).ap<p.info.ap||p.info.cost>0&&D(a).cash<p.info.cost,onClick:y=>l(p.id)},[f("span",fh,[f("span",null,v(p.info.name),1),f("span",dh,v(p.info.ap)+"点",1)]),f("span",hh,v(p.info.note),1),p.info.cost>0?(b(),C("span",ph,"花费 ¥"+v(p.info.cost),1)):te("",!0)],10,uh))),128))]),t.value&&i.value.length?(b(),C("div",mh,[f("div",gh,v(t.value==="research"?"研发哪一款？":"和谁？"),1),f("div",vh,[(b(!0),C(ee,null,me(i.value,p=>(b(),C("button",{key:p.id,type:"button",class:"pill",onClick:y=>c(t.value,t.value==="research"?{product:p.id}:{partner:p.id})},[He(v(p.label)+" ",1),f("span",yh,v(p.sub),1)],8,_h))),128))])])):te("",!0),n.value?(b(),C("p",bh,v(n.value),1)):te("",!0),f("div",xh,[f("div",kh,[h[1]||(h[1]=f("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),f("span",{class:ve(["chip",D(Zt).done>=D(Zt).need?"sage":""])},v(D(Zt).done)+" / "+v(D(Zt).need||"—"),3)]),f("div",Mh,v(D(vs).name)+" · 完成 "+v(D(Zt).need)+" 项即可进入下一阶段，否则本局提前结束 ",1),(b(!0),C(ee,null,me(D(Zt).list,p=>(b(),C("div",{key:p.text,class:ve(["goal",{done:p.done}])},[h[2]||(h[2]=f("span",{class:"dot"},null,-1)),f("span",null,v(p.text),1),p.expand?(b(),C("span",Eh,"扩张")):te("",!0)],2))),128))]),f("div",Ch,[h[3]||(h[3]=f("div",{class:"h2"},"最近发生的事",-1)),D(a).log.length?te("",!0):(b(),C("div",Th,"还没有记录。")),(b(!0),C(ee,null,me(D(a).log.slice(0,10),(p,y)=>(b(),C("div",{key:y,class:ve(["logline",p.tone])},[f("span",wh,v(p.month)+"月"+v(p.day)+"日",1),f("span",Sh,v(p.text),1)],2))),128))])]))}},Ih=Dt(Ah,[["__scopeId","data-v-ea10304e"]]),$h={class:"seg"},Oh=["onClick"],Nh={key:0,class:"card"},Dh={class:"art"},Fh={class:"body"},Lh={class:"name"},Rh={key:0,class:"chip",style:{"font-size":"10px"}},Ph={class:"desc"},Vh={key:0,class:"hint"},Bh={key:1,class:"nums"},jh={key:1},Hh={class:"photos"},Kh={class:"im"},Uh=["src","alt"],qh={key:1,class:"small muted"},Wh={key:2,style:{"font-size":"20px",opacity:"0.3"}},zh={class:"cp"},Gh={class:"ti"},Yh={class:"cc"},Jh={key:2,class:"card"},Zh={style:{flex:"1 1 auto","min-width":"0"}},Xh={class:"nm"},Qh={key:0,class:"chip sage",style:{"font-size":"10px"}},ep={key:1,class:"chip pink",style:{"font-size":"10px"}},tp={class:"nt"},np={key:0,class:"nt"},rp={__name:"CodexPage",setup(e){const t=Pe("product"),n=G(()=>Nn.map(i=>({...i,flavor:(Te.codex[i.id]||{}).flavor||i.desc,hint:(Te.codex[i.id]||{}).hint||"",owned:a.unlocked.includes(i.id),lv:Math.round((a.levels[i.id]||1)*10)/10,price:Pn(i.id),sold:a.monthSold[i.id]||0}))),r=G(()=>Object.keys(Jr).map(i=>({id:i,...Jr[i],owned:a.photos.includes(i)}))),s=G(()=>Dn.map(i=>({...i,owned:a.cities.includes(i.id),surveyed:a.surveyed.includes(i.id)})));return(i,o)=>(b(),C("div",null,[f("div",$h,[(b(),C(ee,null,me([{k:"product",t:"产品"},{k:"photo",t:"相册"},{k:"city",t:"门店"}],l=>f("button",{key:l.k,type:"button",class:ve({on:t.value===l.k}),onClick:c=>t.value=l.k},v(l.t),11,Oh)),64))]),t.value==="product"?(b(),C("div",Nh,[(b(!0),C(ee,null,me(n.value,l=>(b(),C("div",{key:l.id,class:ve(["cake",{locked:!l.owned}])},[f("div",Dh,[Ie(Wo,{id:l.id,colors:l.colors},null,8,["id","colors"])]),f("div",Fh,[f("div",Lh,[f("span",null,v(l.name),1),l.owned?(b(),C("span",Rh,"Lv"+v(l.lv),1)):te("",!0)]),f("div",Ph,v(l.owned?l.flavor:"第 "+l.month+" 个月解锁"),1),l.owned&&l.hint?(b(),C("div",Vh,"配方："+v(l.hint),1)):te("",!0),l.owned?(b(),C("div",Bh,[f("span",null,"¥"+v(l.price),1),f("span",null,v(l.diff)+" 点/个",1),f("span",null,"本月卖出 "+v(l.sold),1)])):te("",!0)])],2))),128))])):t.value==="photo"?(b(),C("div",jh,[f("div",Hh,[(b(!0),C(ee,null,me(r.value,l=>(b(),C("div",{key:l.id,class:"photo"},[f("div",Kh,[l.owned&&l.img?(b(),C("img",{key:0,src:l.img,alt:l.title},null,8,Uh)):l.owned?(b(),C("span",qh,"未冲印")):(b(),C("span",Wh,"?"))]),f("div",zh,[f("div",Gh,v(l.owned?l.title:"还没发生"),1),f("div",Yh,v(l.owned?l.caption:"继续经营，它会出现"),1)])]))),128))])])):(b(),C("div",Jh,[(b(!0),C(ee,null,me(s.value,l=>(b(),C("div",{key:l.id,class:ve(["city",{on:l.owned,off:!l.owned&&!l.surveyed}])},[o[0]||(o[0]=f("span",{class:"dot"},null,-1)),f("div",Zh,[f("div",Xh,[He(v(l.name)+" ",1),l.owned?(b(),C("span",Qh,"营业中")):l.surveyed?(b(),C("span",ep,"已考察")):te("",!0)]),f("div",tp,v(l.note),1),l.owned?te("",!0):(b(),C("div",np," 第 "+v(l.month)+" 个月可考察 · 口碑 "+v(l.rep)+" · 开店 ¥"+v(l.cost),1))])],2))),128))]))]))}},sp=Dt(rp,[["__scopeId","data-v-fceeb2d8"]]),ip={class:"app"},op={class:"topbar"},lp={class:"m serif"},ap={class:"purse"},cp={class:"scroll"},up={class:"between",style:{margin:"-4px 2px 10px"}},fp={class:"small muted"},dp={class:"chip",style:{"font-size":"10px"}},hp={class:"nav"},pp=["onClick"],mp={class:"ico",viewBox:"0 0 24 24",width:"19",height:"19",fill:"none",stroke:"currentColor","stroke-width":"1.6","stroke-linecap":"round","stroke-linejoin":"round"},gp=["d"],vp={class:"sheet"},_p={class:"sheet-head"},yp={class:"t serif"},bp={class:"small muted"},xp={class:"sheet-body"},kp={class:"card card-pad"},Mp={class:"between small",style:{"margin-bottom":"6px"}},Ep={class:"between small",style:{"margin-bottom":"6px"}},Cp={class:"between small",style:{"margin-bottom":"6px"}},Tp={class:"between small"},wp={key:0,class:"card card-pad",style:{"margin-top":"12px"}},Sp={class:"h2"},Ap={class:"between small",style:{"margin-bottom":"6px"}},Ip={class:"between small",style:{"margin-bottom":"6px"}},$p={class:"between small",style:{"margin-bottom":"6px"}},Op={class:"between small"},Np={key:0,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},Dp={class:"sheet-foot"},Fp={key:3,class:"mask"},Lp={class:"sheet"},Rp={class:"sheet-body",style:{"padding-top":"22px"}},Pp={class:"small muted serif"},Vp={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},Bp={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},jp={class:"card card-pad"},Hp={class:"between small",style:{"margin-bottom":"6px"}},Kp={class:"between small",style:{"margin-bottom":"6px"}},Up={class:"between small"},qp={key:1,class:"card card-pad",style:{"margin-top":"12px"}},Wp={class:"pn"},zp={class:"muted small"},Gp={class:"pt"},Yp={__name:"App",setup(e){const t=[{id:"shop",label:"店铺",icon:"house"},{id:"kitchen",label:"厨房",icon:"bowl"},{id:"partners",label:"伙伴",icon:"heart"},{id:"manage",label:"经营",icon:"list"},{id:"codex",label:"图鉴",icon:"book"}],n={house:"M3.5 10.8 12 4l8.5 6.8V20a1 1 0 0 1-1 1h-4.6v-6H9.1v6H4.5a1 1 0 0 1-1-1z",bowl:"M4 11h16a8 8 0 0 1-8 8 8 8 0 0 1-8-8zM9 7.5c0-1.5 1-2 1-3M13 7.5c0-1.5 1-2 1-3",heart:"M12 20s-7.5-4.6-7.5-9.5A4.2 4.2 0 0 1 12 7.6a4.2 4.2 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20z",list:"M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",book:"M5 4.5h11.5A2.5 2.5 0 0 1 19 7v13H7.5A2.5 2.5 0 0 1 5 17.5zM5 17.5A2.5 2.5 0 0 1 7.5 15H19"},r=Pe("shop"),s=Pe(null),i=Pe(null),o=Pe(null);function l(){const O=location.hash.replace("#","");return t.some(I=>I.id===O)?O:"shop"}r.value=l(),window.addEventListener("hashchange",()=>r.value=l());const c=G(()=>a.phase==="ended"&&a.ending&&!Xe.events.length?a.ending:null),g=G(()=>Xe.events.length);function u(){Xe.events.length&&(s.value=Xe.events[0])}function h(){Xe.events.shift(),s.value=null,Ke();const O=Xe.events[0];O&&O.month===a.month&&setTimeout(u,200)}function p(O){i.value=O,O.day===cr&&(o.value=a.report)}function y(){i.value=null,o.value=null,Xe.events.length&&u()}function L(){ci(),r.value="shop",di(),u()}Qt(()=>a.autoStory,O=>{O&&(a.autoStory=!1,setTimeout(()=>{!s.value&&Xe.events.length&&u()},90))});const w=G(()=>{if(!c.value)return[];const O=nn.filter(A=>a.staff.includes(A.id)).map(A=>({name:A.nick,role:A.role,...hi(A.id)||{}})),I=hi("mom");return I&&O.push({name:"林暖",role:"母亲",...I}),O.filter(A=>A.title)});return fs(()=>{qc()||ci(),di(),u()}),(O,I)=>(b(),C("div",ip,[f("div",op,[f("div",lp,[He(v(D(Zr)(D(a).month))+" ",1),f("small",null,"第 "+v(D(a).month)+" / 36 月 · 第 "+v(D(a).day)+" / "+v(D(cr))+" 日",1)]),f("div",ap,[I[0]||(I[0]=f("span",{class:"y"},"¥",-1)),He(v(D(a).cash.toLocaleString()),1)])]),f("div",cp,[f("div",up,[f("span",fp,v(D(vs).name),1),f("span",dp,"行动力 "+v(D(a).ap),1)]),r.value==="shop"?(b(),jt(Hf,{key:0,onClosed:p})):r.value==="kitchen"?(b(),jt(yd,{key:1})):r.value==="partners"?(b(),jt(sh,{key:2})):r.value==="manage"?(b(),jt(Ih,{key:3})):r.value==="codex"?(b(),jt(sp,{key:4})):te("",!0)]),g.value?(b(),C("button",{key:0,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"calc(var(--nav-h) + 16px)","z-index":"20","box-shadow":"var(--shadow)"},onClick:u}," 有 "+v(g.value)+" 段剧情 ",1)):te("",!0),f("div",hp,[(b(),C(ee,null,me(t,A=>f("button",{key:A.id,type:"button",class:ve({on:r.value===A.id}),onClick:B=>r.value=A.id},[(b(),C("svg",mp,[f("path",{d:n[A.icon]},null,8,gp)])),f("span",null,v(A.label),1)],10,pp)),64))]),s.value?(b(),jt(zu,{key:1,ev:s.value,onDone:h},null,8,["ev"])):te("",!0),i.value?(b(),C("div",{key:2,class:"mask",onClick:dn(y,["self"])},[f("div",vp,[f("div",_p,[f("div",yp,v(o.value?"月末结算":"打烊了"),1),f("div",bp,v(D(Zr)(D(a).month))+" · 第 "+v(i.value.day)+" 个经营日",1)]),f("div",xp,[f("div",kp,[f("div",Mp,[I[1]||(I[1]=f("span",{class:"muted"},"今天卖出",-1)),f("span",null,v(i.value.sold)+" 个",1)]),f("div",Ep,[I[2]||(I[2]=f("span",{class:"muted"},"今日收入",-1)),f("span",null,"¥"+v(i.value.rev),1)]),f("div",Cp,[I[3]||(I[3]=f("span",{class:"muted"},"剩下",-1)),f("span",null,v(i.value.left)+" 个",1)]),f("div",Tp,[I[4]||(I[4]=f("span",{class:"muted"},"剩货回收",-1)),f("span",null,"¥"+v(i.value.gain),1)])]),o.value?(b(),C("div",wp,[f("div",Sp,v(o.value.month)+" 月经营报告",1),f("div",Ap,[I[5]||(I[5]=f("span",{class:"muted"},"营业额",-1)),f("span",null,"¥"+v(o.value.rev),1)]),f("div",Ip,[I[6]||(I[6]=f("span",{class:"muted"},"支出",-1)),f("span",null,"¥"+v(o.value.cost),1)]),f("div",$p,[I[7]||(I[7]=f("span",{class:"muted"},"净收入",-1)),f("span",{style:De({color:o.value.net>=0?"#6c8a55":"var(--berry)"})},v(o.value.net>=0?"+":"")+v(o.value.net),5)]),f("div",Op,[I[8]||(I[8]=f("span",{class:"muted"},"最受欢迎",-1)),f("span",null,v(o.value.best)+"（"+v(o.value.bestN)+" 个）",1)]),o.value.warn?(b(),C("p",Np,v(o.value.warn),1)):te("",!0)])):te("",!0)]),f("div",Dp,[f("button",{class:"btn primary block",type:"button",onClick:y},v(c.value?"看结局":"继续"),1)])])])):te("",!0),c.value?(b(),C("div",Fp,[f("div",Lp,[f("div",Rp,[f("div",Pp,v(c.value.name),1),f("h2",Vp,v(c.value.title),1),c.value.text?(b(),C("p",Bp,v(c.value.text),1)):te("",!0),f("div",jp,[f("div",Hp,[I[9]||(I[9]=f("span",{class:"muted"},"门店 / 伙伴",-1)),f("span",null,v(D(a).storeCount)+" 家 · "+v(D(a).staff.length)+" 人",1)]),f("div",Kp,[I[10]||(I[10]=f("span",{class:"muted"},"产品 / 相册",-1)),f("span",null,v(D(a).unlocked.length)+" 款 · "+v(D(a).photos.length)+" 张",1)]),f("div",Up,[I[11]||(I[11]=f("span",{class:"muted"},"口碑 / 知名度",-1)),f("span",null,v(Math.round(D(a).reputation))+" / "+v(Math.round(D(a).popularity)),1)])]),w.value.length?(b(),C("div",qp,[I[12]||(I[12]=f("div",{class:"h2"},"他们的后来",-1)),(b(!0),C(ee,null,me(w.value,(A,B)=>(b(),C("div",{key:B,class:"pl"},[f("div",Wp,[He(v(A.name),1),f("span",zp," · "+v(A.title),1)]),f("div",Gp,v(A.text),1)]))),128))])):te("",!0)]),f("div",{class:"sheet-foot"},[f("button",{class:"btn primary block",type:"button",onClick:L},"再开一次")])])])):te("",!0)]))}},Jp=Dt(Yp,[["__scopeId","data-v-bfea201f"]]);Mc(Jp).mount("#app");
