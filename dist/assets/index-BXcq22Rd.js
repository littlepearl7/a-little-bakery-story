(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ws(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const _e={},Qn=[],yn=()=>{},Qi=()=>!1,wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Sr=e=>e.startsWith("onUpdate:"),Se=Object.assign,Ss=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Rl=Object.prototype.hasOwnProperty,he=(e,n)=>Rl.call(e,n),ie=Array.isArray,jn=e=>Gt(e)==="[object Map]",pr=e=>Gt(e)==="[object Set]",ei=e=>Gt(e)==="[object Date]",ae=e=>typeof e=="function",xe=e=>typeof e=="string",bn=e=>typeof e=="symbol",me=e=>e!==null&&typeof e=="object",Zi=e=>(me(e)||ae(e))&&ae(e.then)&&ae(e.catch),Xi=Object.prototype.toString,Gt=e=>Xi.call(e),Fl=e=>Gt(e).slice(8,-1),eo=e=>Gt(e)==="[object Object]",Is=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,wt=ws(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ir=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Ll=/-\w/g,on=Ir(e=>e.replace(Ll,n=>n.slice(1).toUpperCase())),Vl=/\B([A-Z])/g,st=Ir(e=>e.replace(Vl,"-$1").toLowerCase()),no=Ir(e=>e.charAt(0).toUpperCase()+e.slice(1)),Gr=Ir(e=>e?`on${no(e)}`:""),vn=(e,n)=>!Object.is(e,n),cr=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},to=(e,n,t,r=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:r,value:t})},jl=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Bl=e=>{const n=xe(e)?Number(e):NaN;return isNaN(n)?e:n};let ni;const Tr=()=>ni||(ni=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ye(e){if(ie(e)){const n={};for(let t=0;t<e.length;t++){const r=e[t],i=xe(r)?Kl(r):Ye(r);if(i)for(const o in i)n[o]=i[o]}return n}else if(xe(e)||me(e))return e}const ql=/;(?![^(]*\))/g,Hl=/:([^]+)/,Ul=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Kl(e){const n={};return e.replace(Ul,t=>t.startsWith("/*")?"":t).split(ql).forEach(t=>{if(t){const r=t.split(Hl);r.length>1&&(n[r[0].trim()]=r[1].trim())}}),n}function ve(e){let n="";if(xe(e))n=e;else if(ie(e))for(let t=0;t<e.length;t++){const r=ve(e[t]);r&&(n+=r+" ")}else if(me(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Wl="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Gl=ws(Wl);function ro(e){return!!e||e===""}function zl(e,n,t){if(e.length!==n.length)return!1;let r=!0;for(let i=0;r&&i<e.length;i++)r=ft(e[i],n[i],t);return r}function ti(e,n,t){if(e.size!==n.size)return!1;const r=Array.from(n),i=new Uint8Array(r.length);for(const o of e){let l=-1;for(let c=0;c<r.length;c++)if(!i[c]&&ft(o,r[c],t)){l=c;break}if(l<0)return!1;i[l]=1}return!0}function Yl(e,n,t){let r=jn(e),i=jn(n);if(r||i||(r=pr(e),i=pr(n),r||i))return r&&i?ti(e,n,t):!1;const o=Object.keys(e).length,l=Object.keys(n).length;if(o!==l)return!1;for(const c in e){const d=e.hasOwnProperty(c),f=n.hasOwnProperty(c);if(d&&!f||!d&&f||!ft(e[c],n[c],t))return!1}return String(e)===String(n)}function ri(e,n,t,r){t||(t=[new Map,new Map]);const[i,o]=t;if(i.has(e)||o.has(n))return i.get(e)===n&&o.get(n)===e;i.set(e,n),o.set(n,e);const l=r(e,n,t);return i.delete(e),o.delete(n),l}function ft(e,n,t){if(e===n)return!0;let r=ei(e),i=ei(n);return r||i?r&&i?e.getTime()===n.getTime():!1:(r=bn(e),i=bn(n),r||i?e===n:(r=ie(e),i=ie(n),r||i?r&&i?ri(e,n,t,zl):!1:(r=me(e),i=me(n),r||i?!r||!i?!1:ri(e,n,t,Yl):String(e)===String(n))))}const so=e=>!!(e&&e.__v_isRef===!0),h=e=>xe(e)?e:e==null?"":ie(e)||me(e)&&(e.toString===Xi||!ae(e.toString))?so(e)?h(e.value):JSON.stringify(e,io,2):String(e),io=(e,n)=>so(n)?io(e,n.value):jn(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[r,i],o)=>(t[zr(r,o)+" =>"]=i,t),{})}:pr(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>zr(t))}:bn(n)?zr(n):me(n)&&!ie(n)&&!eo(n)?String(n):n,zr=(e,n="")=>{var t;return bn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Oe;class Jl{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Oe&&(Oe.active?(this.parent=Oe,this.index=(Oe.scopes||(Oe.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const r=this.scopes.slice();for(n=0,t=r.length;n<t;n++)r[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const i=this.scopes.slice();for(n=0,t=i.length;n<t;n++)i[n].resume()}const r=this.effects.slice();for(n=0,t=r.length;n<t;n++)r[n].resume()}}run(n){if(this._active){const t=Oe;try{return Oe=this,n()}finally{Oe=t}}}on(){++this._on===1&&(this.prevScope=Oe,Oe=this)}off(){if(this._on>0&&--this._on===0){if(Oe===this)Oe=this.prevScope;else{let n=Oe;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const i=this.scopes.slice();for(t=0,r=i.length;t<r;t++)i[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ql(){return Oe}let ke;const Yr=new WeakSet;class oo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Oe&&(Oe.active?Oe.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yr.has(this)&&(Yr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ao(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,si(this),co(this);const n=ke,t=ln;ke=this,ln=!0;try{return this.fn()}finally{uo(this),ke=n,ln=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Os(n);this.deps=this.depsTail=void 0,si(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){us(this)&&this.run()}get dirty(){return us(this)}}let lo=0,St,It;function ao(e,n=!1){if(e.flags|=8,n){e.next=It,It=e;return}e.next=St,St=e}function Ts(){lo++}function As(){if(--lo>0)return;if(It){let n=It;for(It=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;St;){let n=St;for(St=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(r){e||(e=r)}n=t}}if(e)throw e}function co(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function uo(e){let n,t=e.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Os(r),Zl(r)):n=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}e.deps=n,e.depsTail=t}function us(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(fo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function fo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pt)||(e.globalVersion=Pt,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!us(e))))return;e.flags|=2;const n=e.dep,t=ke,r=ln;ke=e,ln=!0;try{co(e);const i=e.fn(e._value);(n.version===0||vn(i,e._value))&&(e.flags|=128,e._value=i,n.version++)}catch(i){throw n.version++,i}finally{ke=t,ln=r,uo(e),e.flags&=-3}}function Os(e,n=!1){const{dep:t,prevSub:r,nextSub:i}=e;if(r&&(r.nextSub=i,e.prevSub=void 0),i&&(i.prevSub=r,e.nextSub=void 0),t.subs===e&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Os(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Zl(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let ln=!0;const ho=[];function _n(){ho.push(ln),ln=!1}function kn(){const e=ho.pop();ln=e===void 0?!0:e}function si(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=ke;ke=void 0;try{n()}finally{ke=t}}}let Pt=0;class Xl{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ds{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!ke||!ln||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new Xl(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,po(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(n){this.version++,Pt++,this.notify(n)}notify(n){Ts();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{As()}}}function po(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let r=n.deps;r;r=r.nextDep)po(r)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ds=new WeakMap,et=Symbol(""),fs=Symbol(""),Nt=Symbol("");function De(e,n,t){if(ln&&ke){let r=ds.get(e);r||ds.set(e,r=new Map);let i=r.get(t);i||(r.set(t,i=new Ds),i.map=r,i.key=t),i.track()}}function Tn(e,n,t,r,i,o){const l=ds.get(e);if(!l){Pt++;return}const c=d=>{d&&d.trigger()};if(Ts(),n==="clear")l.forEach(c);else{const d=ie(e),f=d&&Is(t);if(d&&t==="length"){const u=Number(r);l.forEach((p,m)=>{(m==="length"||m===Nt||!bn(m)&&m>=u)&&c(p)})}else switch((t!==void 0||l.has(void 0))&&c(l.get(t)),f&&c(l.get(Nt)),n){case"add":d?f&&c(l.get("length")):(c(l.get(et)),jn(e)&&c(l.get(fs)));break;case"delete":d||(c(l.get(et)),jn(e)&&c(l.get(fs)));break;case"set":jn(e)&&c(l.get(et));break}}As()}function ot(e){const n=fe(e);return n===e||(De(n,"iterate",Nt),Je(e))?n:Mn(e)?Bn(e)?n.map(t=>qn(Qe(t))):n.map(qn):n.map(Qe)}function Ar(e){return De(e=fe(e),"iterate",Nt),e}function hn(e,n){return Mn(e)?qn(Bn(e)?Qe(n):n):Qe(n)}const ea={__proto__:null,[Symbol.iterator](){return Jr(this,Symbol.iterator,e=>hn(this,e))},concat(...e){return ot(this).concat(...e.map(n=>ie(n)?ot(n):n))},entries(){return Jr(this,"entries",e=>(e[1]=hn(this,e[1]),e))},every(e,n){return En(this,"every",e,n,void 0,arguments)},filter(e,n){return En(this,"filter",e,n,t=>t.map(r=>hn(this,r)),arguments)},find(e,n){return En(this,"find",e,n,t=>hn(this,t),arguments)},findIndex(e,n){return En(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return En(this,"findLast",e,n,t=>hn(this,t),arguments)},findLastIndex(e,n){return En(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return En(this,"forEach",e,n,void 0,arguments)},includes(...e){return Qr(this,"includes",e)},indexOf(...e){return Qr(this,"indexOf",e)},join(e){return ot(this).join(e)},lastIndexOf(...e){return Qr(this,"lastIndexOf",e)},map(e,n){return En(this,"map",e,n,void 0,arguments)},pop(){return _t(this,"pop")},push(...e){return _t(this,"push",e)},reduce(e,...n){return oi(this,"reduce",e,n)},reduceRight(e,...n){return oi(this,"reduceRight",e,n)},shift(){return _t(this,"shift")},some(e,n){return En(this,"some",e,n,void 0,arguments)},splice(...e){return _t(this,"splice",e)},toReversed(){return ot(this).toReversed()},toSorted(e){return ot(this).toSorted(e)},toSpliced(...e){return ot(this).toSpliced(...e)},unshift(...e){return _t(this,"unshift",e)},values(){return Jr(this,"values",e=>hn(this,e))}};function Jr(e,n,t){const r=Ar(e),i=r[n],o=i.call(r);if(r!==e&&!Je(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const l=Object.create(Object.getPrototypeOf(o));return l.next=()=>ii(o.next(),t),i!==mo[n]&&Object.defineProperties(l,{return:{get(){const c=o.return;return typeof c=="function"?c.bind(o):c}},throw:{get(){const c=o.throw;return typeof c=="function"?c.bind(o):c}}}),l}o._next=o.next,o.next=()=>ii(o._next(),t)}return o}function ii(e,n){return e.done||(e.value=n(e.value)),e}const mo=Array.prototype;function En(e,n,t,r,i,o){const l=Ar(e),c=l!==e&&!Je(e),d=l[n];if(d!==mo[n]){const p=d.apply(e,o);return c?Qe(p):p}let f=t;l!==e&&(c?f=function(p,m){return t.call(this,hn(e,p),m,e)}:t.length>2&&(f=function(p,m){return t.call(this,p,m,e)}));const u=d.call(l,f,r);return c&&i?i(u):u}function oi(e,n,t,r){const i=Ar(e),o=i!==e&&!Je(e);let l=t,c=!1;i!==e&&(o?(c=r.length===0,l=function(f,u,p){return c&&(c=!1,f=hn(e,f)),t.call(this,f,hn(e,u),p,e)}):t.length>3&&(l=function(f,u,p){return t.call(this,f,u,p,e)}));const d=i[n](l,...r);return c?hn(e,d):d}function Qr(e,n,t){const r=fe(e);De(r,"iterate",Nt);const i=r[n](...t);return(i===-1||i===!1)&&Rs(t[0])?(t[0]=fe(t[0]),r[n](...t)):i}function _t(e,n,t=[]){_n(),Ts();const r=fe(e)[n].apply(e,t);return As(),kn(),r}const na=ws("__proto__,__v_isRef,__isVue"),vo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(bn));function ta(e){bn(e)||(e=String(e));const n=fe(this);return De(n,"has",e),n.hasOwnProperty(e)}class go{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,r){if(t==="__v_skip")return n.__v_skip;const i=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return o;if(t==="__v_raw")return r===(i?o?fa:ko:o?_o:bo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(r)?n:void 0;const l=ie(n);if(!i){let d;if(l&&(d=ea[t]))return d;if(t==="hasOwnProperty")return ta}const c=Reflect.get(n,t,Ne(n)?n:r);if((bn(t)?vo.has(t):na(t))||(i||De(n,"get",t),o))return c;if(Ne(c)){const d=l&&Is(t)?c:c.value;return i&&me(d)?ps(d):d}return me(c)?i?ps(c):it(c):c}}class yo extends go{constructor(n=!1){super(!1,n)}set(n,t,r,i){let o=n[t];const l=ie(n)&&Is(t);if(!this._isShallow){const f=Mn(o);if(!Je(r)&&!Mn(r)&&(o=fe(o),r=fe(r)),!l&&Ne(o)&&!Ne(r))return f||(o.value=r),!0}const c=l?Number(t)<n.length:he(n,t),d=Reflect.set(n,t,r,Ne(n)?n:i);return n===fe(i)&&d&&(c?vn(r,o)&&Tn(n,"set",t,r):Tn(n,"add",t,r)),d}deleteProperty(n,t){const r=he(n,t);n[t];const i=Reflect.deleteProperty(n,t);return i&&r&&Tn(n,"delete",t,void 0),i}has(n,t){const r=Reflect.has(n,t);return(!bn(t)||!vo.has(t))&&De(n,"has",t),r}ownKeys(n){return De(n,"iterate",ie(n)?"length":et),Reflect.ownKeys(n)}}class ra extends go{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const sa=new yo,ia=new ra,oa=new yo(!0);const hs=e=>e,Xt=e=>Reflect.getPrototypeOf(e);function la(e,n,t){return function(...r){const i=this.__v_raw,o=fe(i),l=jn(o),c=e==="entries"||e===Symbol.iterator&&l,d=e==="keys"&&l,f=i[e](...r),u=t?hs:n?qn:Qe;return!n&&De(o,"iterate",d?fs:et),Se(Object.create(f),{next(){const{value:p,done:m}=f.next();return m?{value:p,done:m}:{value:c?[u(p[0]),u(p[1])]:u(p),done:m}}})}}function er(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function aa(e,n){const t={get(i){const o=this.__v_raw,l=fe(o),c=fe(i);e||(vn(i,c)&&De(l,"get",i),De(l,"get",c));const{has:d}=Xt(l),f=n?hs:e?qn:Qe;if(d.call(l,i))return f(o.get(i));if(d.call(l,c))return f(o.get(c));o!==l&&o.get(i)},get size(){const i=this.__v_raw;return!e&&De(fe(i),"iterate",et),i.size},has(i){const o=this.__v_raw,l=fe(o),c=fe(i);return e||(vn(i,c)&&De(l,"has",i),De(l,"has",c)),i===c?o.has(i):o.has(i)||o.has(c)},forEach(i,o){const l=this,c=l.__v_raw,d=fe(c),f=n?hs:e?qn:Qe;return!e&&De(d,"iterate",et),c.forEach((u,p)=>i.call(o,f(u),f(p),l))}};return Se(t,e?{add:er("add"),set:er("set"),delete:er("delete"),clear:er("clear")}:{add(i){const o=fe(this),l=Xt(o),c=fe(i),d=!n&&!Je(i)&&!Mn(i)?c:i;return l.has.call(o,d)||vn(i,d)&&l.has.call(o,i)||vn(c,d)&&l.has.call(o,c)||(o.add(d),Tn(o,"add",d,d)),this},set(i,o){!n&&!Je(o)&&!Mn(o)&&(o=fe(o));const l=fe(this),{has:c,get:d}=Xt(l);let f=c.call(l,i);f||(i=fe(i),f=c.call(l,i));const u=d.call(l,i);return l.set(i,o),f?vn(o,u)&&Tn(l,"set",i,o):Tn(l,"add",i,o),this},delete(i){const o=fe(this),{has:l,get:c}=Xt(o);let d=l.call(o,i);d||(i=fe(i),d=l.call(o,i)),c&&c.call(o,i);const f=o.delete(i);return d&&Tn(o,"delete",i,void 0),f},clear(){const i=fe(this),o=i.size!==0,l=i.clear();return o&&Tn(i,"clear",void 0,void 0),l}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=la(i,e,n)}),t}function Ps(e,n){const t=aa(e,n);return(r,i,o)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_isShallow"?n:i==="__v_raw"?r:Reflect.get(he(t,i)&&i in r?t:r,i,o)}const ca={get:Ps(!1,!1)},ua={get:Ps(!1,!0)},da={get:Ps(!0,!1)};const bo=new WeakMap,_o=new WeakMap,ko=new WeakMap,fa=new WeakMap;function ha(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function it(e){return Mn(e)?e:Ns(e,!1,sa,ca,bo)}function pa(e){return Ns(e,!1,oa,ua,_o)}function ps(e){return Ns(e,!0,ia,da,ko)}function Ns(e,n,t,r,i){if(!me(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=i.get(e);if(o)return o;const l=ha(Fl(e));if(l===0)return e;const c=new Proxy(e,l===2?r:t);return i.set(e,c),c}function Bn(e){return Mn(e)?Bn(e.__v_raw):!!(e&&e.__v_isReactive)}function Mn(e){return!!(e&&e.__v_isReadonly)}function Je(e){return!!(e&&e.__v_isShallow)}function Rs(e){return e?!!e.__v_raw:!1}function fe(e){const n=e&&e.__v_raw;return n?fe(n):e}function ma(e){return!he(e,"__v_skip")&&Object.isExtensible(e)&&to(e,"__v_skip",!0),e}const Qe=e=>me(e)?it(e):e,qn=e=>me(e)?ps(e):e;function Ne(e){return e?e.__v_isRef===!0:!1}function ce(e){return va(e,!1)}function va(e,n){return Ne(e)?e:new ga(e,n)}class ga{constructor(n,t){this.dep=new Ds,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:fe(n),this._value=t?n:Qe(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,r=this.__v_isShallow||Je(n)||Mn(n);n=r?n:fe(n),vn(n,t)&&(this._rawValue=n,this._value=r?n:Qe(n),this.dep.trigger())}}function b(e){return Ne(e)?e.value:e}const ya={get:(e,n,t)=>n==="__v_raw"?e:b(Reflect.get(e,n,t)),set:(e,n,t,r)=>{const i=e[n];return Ne(i)&&!Ne(t)?(i.value=t,!0):Reflect.set(e,n,t,r)}};function Mo(e){return Bn(e)?e:new Proxy(e,ya)}class ba{constructor(n,t,r){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Ds(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pt-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return ao(this,!0),!0}get value(){const n=this.dep.track();return fo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function _a(e,n,t=!1){let r,i;return ae(e)?r=e:(r=e.get,i=e.set),new ba(r,i,t)}const nr={},mr=new WeakMap;let Yn;function ka(e,n=!1,t=Yn){if(t){let r=mr.get(t);r||mr.set(t,r=[]),r.push(e)}}function Ma(e,n,t=_e){const{immediate:r,deep:i,once:o,scheduler:l,augmentJob:c,call:d}=t,f=w=>i?w:Je(w)||i===!1||i===0?An(w,1):An(w);let u,p,m,k,S=!1,$=!1;if(Ne(e)?(p=()=>e.value,S=Je(e)):Bn(e)?(p=()=>f(e),S=!0):ie(e)?($=!0,S=e.some(w=>Bn(w)||Je(w)),p=()=>e.map(w=>{if(Ne(w))return w.value;if(Bn(w))return f(w);if(ae(w))return d?d(w,2):w()})):ae(e)?n?p=d?()=>d(e,2):e:p=()=>{if(m){_n();try{m()}finally{kn()}}const w=Yn;Yn=u;try{return d?d(e,3,[k]):e(k)}finally{Yn=w}}:p=yn,n&&i){const w=p,I=i===!0?1/0:i;p=()=>An(w(),I)}const j=Ql(),K=()=>{u.stop(),j&&j.active&&Ss(j.effects,u)};if(o&&n){const w=n;n=(...I)=>{try{return w(...I)}finally{K()}}}let z=$?new Array(e.length).fill(nr):nr;const Z=w=>{if(!(!(u.flags&1)||!u.dirty&&!w))if(n){const I=u.run();if(w||i||S||($?I.some((X,ee)=>vn(X,z[ee])):vn(I,z))){const X=Yn;_n();try{m&&m(),Yn=u;const ee=[I,z===nr?void 0:$&&z[0]===nr?[]:z,k];z=I,d?d(n,3,ee):n(...ee)}finally{Yn=X,kn()}}}else u.run()};return c&&c(Z),u=new oo(p),u.scheduler=l?()=>l(Z,!1):Z,k=w=>ka(w,!1,u),m=u.onStop=()=>{const w=mr.get(u);if(w){if(d)d(w,4);else for(const I of w)I();mr.delete(u)}},n?r?Z(!0):z=u.run():l?l(Z.bind(null,!0),!0):u.run(),K.pause=u.pause.bind(u),K.resume=u.resume.bind(u),K.stop=K,K}function An(e,n=1/0,t){if(n<=0||!me(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,Ne(e))An(e.value,n,t);else if(ie(e))for(let r=0;r<e.length;r++)An(e[r],n,t);else if(pr(e)||jn(e))e.forEach(r=>{An(r,n,t)});else if(eo(e)){for(const r in e)An(e[r],n,t);for(const r of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,r)&&An(e[r],n,t)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function zt(e,n,t,r){try{return r?e(...r):e()}catch(i){Or(i,n,t)}}function Ze(e,n,t,r){if(ae(e)){const i=zt(e,n,t,r);return i&&Zi(i)&&i.catch(o=>{Or(o,n,t,void 0,!0)}),i}if(ie(e)){const i=[];for(let o=0;o<e.length;o++)i.push(Ze(e[o],n,t,r));return i}}function Or(e,n,t,r=!0,i=!1){const o=n?n.vnode:null,{errorHandler:l,throwUnhandledErrorInProduction:c}=n&&n.appContext.config||_e;if(n){let d=n.parent;const f=n.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;d;){const p=d.ec;if(p&&!d.isUnmounted&&(!i||d.scope.active)){for(let m=0;m<p.length;m++)if(p[m](e,f,u)===!1)return}d=d.parent}if(l){_n(),zt(l,null,10,[e,f,u]),kn();return}}xa(e,t,o,r,c)}function xa(e,n,t,r=!0,i=!1){if(i)throw e;console.error(e)}const Le=[];let rn=-1;const pn=[];let Fn=null,lt=0;const xo=Promise.resolve();let vr=null;function $a(e){const n=vr||xo;return e?n.then(this?e.bind(this):e):n}function Ea(e){let n=rn+1,t=Le.length;for(;n<t;){const r=n+t>>>1,i=Le[r],o=Rt(i);o<e||o===e&&i.flags&2?n=r+1:t=r}return n}function Dr(e){if(!(e.flags&1)){const n=Rt(e),t=Le[Le.length-1];!t||!(e.flags&2)&&n>=Rt(t)?Le.push(e):Le.splice(Ea(n),0,e),e.flags|=1,$o()}}function $o(){vr||(vr=xo.then(wo))}function Ca(e){if(!ie(e))Fn&&e.id===-1?Fn.splice(lt+1,0,e):e.flags&1||(pn.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)pn.push(e[n]);$o()}function Eo(e,n,t,r=rn+1){for(;r<Le.length;r++){const i=Le[r];if(i&&i.flags&2){if(e&&i.id!==e.uid||n!==void 0&&!(i.id>=n))continue;Le.splice(r,1),r=e?r-1:rn,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Co(e,n,t=0){if(pn.length){let r=pn,i=0;if(n){r=[];for(let l=0;l<pn.length;l++){const c=pn[l];(c.i!==void 0?!c.i||c.i.uid<t:n.has(c))?pn[i++]=c:r.push(c)}}const o=[...new Set(r)].sort((l,c)=>Rt(l)-Rt(c));if(pn.length=i,Fn){for(let l=0;l<o.length;l++)Fn.push(o[l]);return}for(Fn=o,lt=0;lt<Fn.length;lt++){const l=Fn[lt];l.flags&4&&(l.flags&=-2),l.flags&8||l(),l.flags&=-2}Fn=null,lt=0}}let Zr=!1;function wa(e,n){if(Zr){e();return}const t=n===void 0?void 0:new Set(pn);e(),Zr=!0;try{Eo(void 0,n),Co(void 0,t,n)}finally{Zr=!1}}const Rt=e=>e.id==null?e.flags&2?-1:1/0:e.id;function wo(e){try{for(rn=0;rn<Le.length;rn++){const n=Le[rn];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),zt(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;rn<Le.length;rn++){const n=Le[rn];n&&(n.flags&=-2)}rn=-1,Le.length=0,Co(),vr=null,(Le.length||pn.length)&&wo()}}let ze=null,So=null;function gr(e){const n=ze;return ze=e,So=e&&e.type.__scopeId||null,n}function Io(e,n=ze,t){if(!n||e._n)return e;const r=(...i)=>{r._d&&kr(-1);const o=gr(n),l=tt.length;let c;try{c=e(...i)}finally{for(let d=tt.length;d>l;d--)tl();gr(o),r._d&&kr(1)}return c};return r._n=!0,r._c=!0,r._d=!0,r}function Sa(e,n){if(ze===null)return e;const t=jr(ze),r=e.dirs||(e.dirs=[]);for(let i=0;i<n.length;i++){let[o,l,c,d=_e]=n[i];o&&(ae(o)&&(o={mounted:o,updated:o}),o.deep&&An(l),r.push({dir:o,instance:t,value:l,oldValue:void 0,arg:c,modifiers:d}))}return e}function Kn(e,n,t,r){let i=e;if(r==="beforeMount")e._mount=e;else if(r==="beforeUpdate"){const c=n&&n._mount;c&&(c._latest=e,e._mount=c)}else if(r==="mounted"){const c=e._latest;e._mount=e._latest=void 0,c&&(i=c,c._mount=void 0)}const o=i.dirs,l=n&&n.dirs;for(let c=0;c<o.length;c++){let d=o[c];l?d.oldValue=l[c].value:r==="mounted"&&d.oldValue!==void 0&&(d=Se({},d,{oldValue:void 0}));let f=d.dir[r];f&&(_n(),Ze(f,t,8,[e.el,d,i,n]),kn())}}function Ia(e,n){if(Ve){let t=Ve.provides;const r=Ve.parent&&Ve.parent.provides;r===t&&(t=Ve.provides=Object.create(r)),t[e]=n}}function ur(e,n,t=!1){const r=ol();if(r||ct){let i=ct?ct._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&e in i)return i[e];if(arguments.length>1)return t&&ae(n)?n.call(r&&r.proxy):n}}const Ta=Symbol.for("v-scx"),Aa=()=>ur(Ta);function an(e,n,t){return To(e,n,t)}function To(e,n,t=_e){const{immediate:r,deep:i,flush:o,once:l}=t,c=Se({},t),d=n&&r||!n&&o!=="post";let f;if(qt){if(o==="sync"){const k=Aa();f=k.__watcherHandles||(k.__watcherHandles=[])}else if(!d){const k=()=>{};return k.stop=yn,k.resume=yn,k.pause=yn,k}}const u=Ve;c.call=(k,S,$)=>Ze(k,u,S,$);let p=!1;o==="post"?c.scheduler=k=>{k.i=u,Fe(k,u&&u.suspense)}:o!=="sync"&&(p=!0,c.scheduler=(k,S)=>{S?k():Dr(k)}),c.augmentJob=k=>{n&&(k.flags|=4),p&&(k.flags|=2,u&&(k.id=u.uid,k.i=u))};const m=Ma(e,n,c);return qt&&(f?f.push(m):d&&m()),m}function Oa(e,n,t){const r=this.proxy,i=xe(e)?e.includes(".")?Ao(r,e):()=>r[e]:e.bind(r,r);let o;ae(n)?o=n:(o=n.handler,t=n);const l=Yt(this),c=To(i,o.bind(r),t);return l(),c}function Ao(e,n){const t=n.split(".");return()=>{let r=e;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Da=Symbol("_vte"),Pr=e=>e.__isTeleport,Ge=Symbol("_leaveCb"),kt=Symbol("_enterCb");function Pa(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rr(()=>{e.isMounted=!0}),Fr(()=>{e.isUnmounting=!0}),e}const We=[Function,Array],Oo={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:We,onEnter:We,onAfterEnter:We,onEnterCancelled:We,onBeforeLeave:We,onLeave:We,onAfterLeave:We,onLeaveCancelled:We,onBeforeAppear:We,onAppear:We,onAfterAppear:We,onAppearCancelled:We},Na={name:"BaseTransition",props:Oo,setup(e,{slots:n}){const t=ol(),r=Pa();return()=>{const i=n.default&&No(n.default(),!0),o=i&&i.length?Do(i):t.subTree?H():void 0;if(!o)return;const l=fe(e),{mode:c}=l;if(r.isLeaving)return Xr(o);const d=yr(o);if(!d)return Xr(o);const f=ms(d,l,r,t);d.type!==Pe&&nt(d,f);let u=t.subTree&&yr(t.subTree);if(u&&u.type!==Pe&&!Jn(u,d)&&Ft(t.subTree)){let p=ms(u,l,r,t);if(nt(u,p),c==="out-in"&&d.type!==Pe)return r.isLeaving=!0,p.afterLeave=()=>{if(r.isLeaving=!1,!(t.job.flags&8))if(t.effect.flags&2){const m=()=>{t.job.flags&8||t.update()};m.i=t,Dr(m)}else t.update();delete p.afterLeave,u=void 0},Xr(o);c==="in-out"&&d.type!==Pe?p.delayLeave=(m,k,S)=>{const $=Po(r,u);$[String(u.key)]=u,m[Ge]=()=>{k(),m[Ge]=void 0,delete f.delayedLeave,u=void 0},f.delayedLeave=()=>{S(),delete f.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Do(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Pe){n=t;break}}return n}const Ra=Na;function Po(e,n){const{leavingVNodes:t}=e;let r=t.get(n.type);return r||(r=Object.create(null),t.set(n.type,r)),r}function ms(e,n,t,r){const{appear:i,mode:o,persisted:l=!1,onBeforeEnter:c,onEnter:d,onAfterEnter:f,onEnterCancelled:u,onBeforeLeave:p,onLeave:m,onAfterLeave:k,onLeaveCancelled:S,onBeforeAppear:$,onAppear:j,onAfterAppear:K,onAppearCancelled:z}=n,Z=String(e.key),w=Po(t,e),I=(P,N)=>{P&&Ze(P,r,9,N)},X=(P,N)=>{const Q=N[1];I(P,N),ie(P)?P.every(W=>W.length<=1)&&Q():P.length<=1&&Q()},ee={mode:o,persisted:l,beforeEnter(P){let N=c;if(!t.isMounted)if(i)N=$||c;else return;P[Ge]&&P[Ge](!0);const Q=w[Z];if(Q&&Jn(e,Q)){let W=Q.el[Ge];if(!W){const V=Ft(Q);W=V&&V.el[Ge]}W&&W()}I(N,[P])},enter(P){if(w[Z]===e)return;let N=d,Q=f,W=u;if(!t.isMounted)if(i)N=j||d,Q=K||f,W=z||u;else return;let V=!1;P[kt]=T=>{V||(V=!0,T?I(W,[P]):I(Q,[P]),ee.delayedLeave&&ee.delayedLeave(),P[kt]=void 0)};const M=P[kt].bind(null,!1);N?X(N,[P,M]):M()},leave(P,N){const Q=String(e.key);if(P[kt]&&P[kt](!0),t.isUnmounting)return N();I(p,[P]);let W=!1;P[Ge]=M=>{W||(W=!0,N(),M?I(S,[P]):I(k,[P]),P[Ge]=void 0,w[Q]===e&&delete w[Q])};const V=P[Ge].bind(null,!1);w[Q]=e,m?X(m,[P,V]):V()},clone(P){const N=ms(P,n,t,r);return N.afterLeave=()=>{ee.afterLeave&&ee.afterLeave()},N.delayLeave=(Q,W,V)=>{ee.delayLeave?ee.delayLeave(Q,W,V):V()},N.delayedLeave=()=>{ee.delayedLeave&&ee.delayedLeave()},N}};return ee}function Xr(e){if(Nr(e))return e=Hn(e),e.children=null,e}function yr(e){if(!Nr(e))return Pr(e.type)&&e.children?Do(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&ae(t.default))return t.default()}}function nt(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;nt(Pr(t.type)&&yr(t)||t,n)}else if(e.shapeFlag&128){const t=e.suspense;if(t){const r=t.isHydrating?t.pendingBranch:t.activeBranch;r&&nt(r,n.clone(r))}else e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)}else if(e.transition=n,e.type===Y&&ie(e.children)){const t=Ho(e.children,!1);t&&nt(t,n)}}function No(e,n=!1,t){let r=[],i=0;for(let o=0;o<e.length;o++){let l=e[o];const c=t==null?l.key:String(t)+String(l.key!=null?l.key:o);l.type===Y?(l.patchFlag&128&&i++,r=r.concat(No(l.children,n,c))):(n||l.type!==Pe)&&r.push(c!=null?Hn(l,{key:c}):l)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}function Ft(e){if(e.component)return Ft(e.component.subTree);if(e.type===Y){const n=ie(e.children)&&Ho(e.children,!1);return n?Ft(n):void 0}if(e.type!==Pe)return e}function Ro(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function li(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const br=new WeakMap;function Tt(e,n,t,r,i=!1){if(ie(e)){e.forEach(($,j)=>Tt($,n&&(ie(n)?n[j]:n),t,r,i));return}if(At(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Tt(e,n,t,r.component.subTree);return}const o=r.shapeFlag&4?jr(r.component):r.el,l=i?null:o,{i:c,r:d}=e,f=n&&n.r,u=c.refs===_e?c.refs={}:c.refs,p=c.setupState,m=fe(p),k=p===_e?Qi:$=>li(u,$)?!1:he(m,$),S=($,j)=>!(j&&li(u,j));if(f!=null&&f!==d){if(ai(n),xe(f))u[f]=null,k(f)&&(p[f]=null);else if(Ne(f)){const $=n;S(f,$.k)&&(f.value=null),$.k&&(u[$.k]=null)}}if(ae(d))zt(d,c,12,[l,u]);else{const $=xe(d),j=Ne(d);if($||j){const K=()=>{if(e.f){const z=$?k(d)?p[d]:u[d]:S()||!e.k?d.value:u[e.k];if(i)ie(z)&&Ss(z,o);else if(ie(z))z.includes(o)||z.push(o);else if($)u[d]=[o],k(d)&&(p[d]=u[d]);else{const Z=[o];S(d,e.k)&&(d.value=Z),e.k&&(u[e.k]=Z)}}else $?(u[d]=l,k(d)&&(p[d]=l)):j&&(S(d,e.k)&&(d.value=l),e.k&&(u[e.k]=l))};if(l){const z=()=>{K(),br.delete(e)};z.id=-1,br.set(e,z),Fe(z,t)}else ai(e),K()}}}function ai(e){const n=br.get(e);n&&(n.flags|=8,br.delete(e))}Tr().requestIdleCallback;Tr().cancelIdleCallback;const At=e=>!!e.type.__asyncLoader,Nr=e=>e.type.__isKeepAlive;function Fa(e,n){Fo(e,"a",n)}function La(e,n){Fo(e,"da",n)}function Fo(e,n,t=Ve){const r=e.__wdc||(e.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Lt(n,r,t),t){let i=t.parent;for(;i&&i.parent;)Nr(i.parent.vnode)&&Va(r,n,t,i),i=i.parent}}function Va(e,n,t,r){const i=Lt(n,e,r,!0),o=Lt("um",()=>Ss(r[n],i),t);o.flags=16}function Lt(e,n,t=Ve,r=!1){if(t){const i=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...l)=>{_n();const c=Yt(t),d=Ze(n,t,e,l);return c(),kn(),d});return r?i.unshift(o):i.push(o),o}}const Dn=e=>(n,t=Ve)=>{(!qt||e==="sp")&&Lt(e,(...r)=>n(...r),t)},ja=Dn("bm"),Rr=Dn("m"),Ba=Dn("bu"),qa=Dn("u"),Fr=Dn("bum"),Lo=Dn("um"),Ha=Dn("sp"),Ua=Dn("rtg"),Ka=Dn("rtc");function Wa(e,n=Ve){Lt("ec",e,n)}const Ga=Symbol.for("v-ndc");function te(e,n,t,r){let i;const o=t,l=ie(e);if(l||xe(e)){const c=l&&Bn(e);let d=!1,f=!1;c&&(d=!Je(e),f=Mn(e),e=Ar(e)),i=new Array(e.length);for(let u=0,p=e.length;u<p;u++)i[u]=n(d?f?qn(Qe(e[u])):Qe(e[u]):e[u],u,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)i=[];else{i=new Array(e);for(let c=0;c<e;c++)i[c]=n(c+1,c,void 0,o)}else if(me(e))if(e[Symbol.iterator])i=Array.from(e,(c,d)=>n(c,d,void 0,o));else{const c=Object.keys(e);i=new Array(c.length);for(let d=0,f=c.length;d<f;d++){const u=c[d];i[d]=n(e[u],u,d,o)}}else i=[];return i}const vs=e=>e?ll(e)?jr(e):vs(e.parent):null,Ot=Se(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vs(e.parent),$root:e=>vs(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>jo(e),$forceUpdate:e=>e.f||(e.f=()=>{Dr(e.update)}),$nextTick:e=>e.n||(e.n=$a.bind(e.proxy)),$watch:e=>Oa.bind(e)}),es=(e,n)=>e!==_e&&!e.__isScriptSetup&&he(e,n),za={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:o,accessCache:l,type:c,appContext:d}=e;if(n[0]!=="$"){const m=l[n];if(m!==void 0)switch(m){case 1:return r[n];case 2:return i[n];case 4:return t[n];case 3:return o[n]}else{if(es(r,n))return l[n]=1,r[n];if(i!==_e&&he(i,n))return l[n]=2,i[n];if(he(o,n))return l[n]=3,o[n];if(t!==_e&&he(t,n))return l[n]=4,t[n];gs&&(l[n]=0)}}const f=Ot[n];let u,p;if(f)return n==="$attrs"&&De(e.attrs,"get",""),f(e);if((u=c.__cssModules)&&(u=u[n]))return u;if(t!==_e&&he(t,n))return l[n]=4,t[n];if(p=d.config.globalProperties,he(p,n))return p[n]},set({_:e},n,t){const{data:r,setupState:i,ctx:o}=e;return es(i,n)?(i[n]=t,!0):r!==_e&&he(r,n)?(r[n]=t,!0):he(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:r,appContext:i,props:o,type:l}},c){let d;return!!(t[c]||e!==_e&&c[0]!=="$"&&he(e,c)||es(n,c)||he(o,c)||he(r,c)||he(Ot,c)||he(i.config.globalProperties,c)||(d=l.__cssModules)&&d[c])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:he(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function ci(e){return ie(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let gs=!0;function Ya(e){const n=jo(e),t=e.proxy,r=e.ctx;gs=!1,n.beforeCreate&&ui(n.beforeCreate,e,"bc");const{data:i,computed:o,methods:l,watch:c,provide:d,inject:f,created:u,beforeMount:p,mounted:m,beforeUpdate:k,updated:S,activated:$,deactivated:j,beforeDestroy:K,beforeUnmount:z,destroyed:Z,unmounted:w,render:I,renderTracked:X,renderTriggered:ee,errorCaptured:P,serverPrefetch:N,expose:Q,inheritAttrs:W,components:V,directives:M,filters:T}=n;if(f&&Ja(f,r,null),l)for(const R in l){const F=l[R];ae(F)&&(r[R]=F.bind(t))}if(i){const R=i.call(t,t);me(R)&&(e.data=it(R))}if(gs=!0,o)for(const R in o){const F=o[R],$e=ae(F)?F.bind(t,t):ae(F.get)?F.get.bind(t,t):yn,Pn=!ae(F)&&ae(F.set)?F.set.bind(t):yn,xn=B({get:$e,set:Pn});Object.defineProperty(r,R,{enumerable:!0,configurable:!0,get:()=>xn.value,set:Be=>xn.value=Be})}if(c)for(const R in c)Vo(c[R],r,t,R);if(d){const R=ae(d)?d.call(t):d;Reflect.ownKeys(R).forEach(F=>{Ia(F,R[F])})}u&&ui(u,e,"c");function C(R,F){ie(F)?F.forEach($e=>R($e.bind(t))):F&&R(F.bind(t))}if(C(ja,p),C(Rr,m),C(Ba,k),C(qa,S),C(Fa,$),C(La,j),C(Wa,P),C(Ka,X),C(Ua,ee),C(Fr,z),C(Lo,w),C(Ha,N),ie(Q))if(Q.length){const R=e.exposed||(e.exposed={});Q.forEach(F=>{Object.defineProperty(R,F,{get:()=>t[F],set:$e=>t[F]=$e,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===yn&&(e.render=I),W!=null&&(e.inheritAttrs=W),V&&(e.components=V),M&&(e.directives=M),N&&Ro(e)}function Ja(e,n,t=yn){ie(e)&&(e=ys(e));for(const r in e){const i=e[r];let o;me(i)?"default"in i?o=ur(i.from||r,i.default,!0):o=ur(i.from||r):o=ur(i),Ne(o)?Object.defineProperty(n,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:l=>o.value=l}):n[r]=o}}function ui(e,n,t){Ze(ie(e)?e.map(r=>r.bind(n.proxy)):e.bind(n.proxy),n,t)}function Vo(e,n,t,r){let i=r.includes(".")?Ao(t,r):()=>t[r];if(xe(e)){const o=n[e];ae(o)&&an(i,o)}else if(ae(e))an(i,e.bind(t));else if(me(e))if(ie(e))e.forEach(o=>Vo(o,n,t,r));else{const o=ae(e.handler)?e.handler.bind(t):n[e.handler];ae(o)&&an(i,o,e)}}function jo(e){const n=e.type,{mixins:t,extends:r}=n,{mixins:i,optionsCache:o,config:{optionMergeStrategies:l}}=e.appContext,c=o.get(n);let d;return c?d=c:!i.length&&!t&&!r?d=n:(d={},i.length&&i.forEach(f=>_r(d,f,l,!0)),_r(d,n,l)),me(n)&&o.set(n,d),d}function _r(e,n,t,r=!1){const{mixins:i,extends:o}=n;o&&_r(e,o,t,!0),i&&i.forEach(l=>_r(e,l,t,!0));for(const l in n)if(!(r&&l==="expose")){const c=Qa[l]||t&&t[l];e[l]=c?c(e[l],n[l]):n[l]}return e}const Qa={data:di,props:fi,emits:fi,methods:xt,computed:xt,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:xt,directives:xt,watch:Xa,provide:di,inject:Za};function di(e,n){return n?e?function(){return Se(ae(e)?e.call(this,this):e,ae(n)?n.call(this,this):n)}:n:e}function Za(e,n){return xt(ys(e),ys(n))}function ys(e){if(ie(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function Re(e,n){return e?[...new Set([].concat(e,n))]:n}function xt(e,n){return e?Se(Object.create(null),e,n):n}function fi(e,n){return e?ie(e)&&ie(n)?[...new Set([...e,...n])]:Se(Object.create(null),ci(e),ci(n??{})):n}function Xa(e,n){if(!e)return n;if(!n)return e;const t=Se(Object.create(null),e);for(const r in n)t[r]=Re(e[r],n[r]);return t}function Bo(){return{app:null,config:{isNativeTag:Qi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ec=0;function nc(e,n){return function(r,i=null){ae(r)||(r=Se({},r)),i!=null&&!me(i)&&(i=null);const o=Bo(),l=new WeakSet,c=[];let d=!1;const f=o.app={_uid:ec++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Dc,get config(){return o.config},set config(u){},use(u,...p){return l.has(u)||(u&&ae(u.install)?(l.add(u),u.install(f,...p)):ae(u)&&(l.add(u),u(f,...p))),f},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),f},component(u,p){return p?(o.components[u]=p,f):o.components[u]},directive(u,p){return p?(o.directives[u]=p,f):o.directives[u]},mount(u,p,m){if(!d){const k=f._ceVNode||Te(r,i);return k.appContext=o,m===!0?m="svg":m===!1&&(m=void 0),e(k,u,m),d=!0,f._container=u,u.__vue_app__=f,jr(k.component)}},onUnmount(u){c.push(u)},unmount(){d&&(Ze(c,f._instance,16),e(null,f._container),delete f._container.__vue_app__)},provide(u,p){return o.provides[u]=p,f},runWithContext(u){const p=ct;ct=f;try{return u()}finally{ct=p}}};return f}}let ct=null;const tc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${on(n)}Modifiers`]||e[`${st(n)}Modifiers`];function rc(e,n,...t){if(e.isUnmounted)return;const r=e.vnode.props||_e;let i=t;const o=n.startsWith("update:"),l=o&&tc(r,n.slice(7));l&&(l.trim&&(i=t.map(u=>xe(u)?u.trim():u)),l.number&&(i=i.map(jl)));let c,d=r[c=Gr(n)]||r[c=Gr(on(n))];!d&&o&&(d=r[c=Gr(st(n))]),d&&Ze(d,e,6,i);const f=r[c+"Once"];if(f){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,Ze(f,e,6,i)}}const sc=new WeakMap;function qo(e,n,t=!1){const r=t?sc:n.emitsCache,i=r.get(e);if(i!==void 0)return i;const o=e.emits;let l={},c=!1;if(!ae(e)){const d=f=>{const u=qo(f,n,!0);u&&(c=!0,Se(l,u))};!t&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!o&&!c?(me(e)&&r.set(e,null),null):(ie(o)?o.forEach(d=>l[d]=null):Se(l,o),me(e)&&r.set(e,l),l)}function Lr(e,n){return!e||!wr(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),he(e,n[0].toLowerCase()+n.slice(1))||he(e,st(n))||he(e,n))}function hi(e){const{type:n,vnode:t,proxy:r,withProxy:i,propsOptions:[o],slots:l,attrs:c,emit:d,render:f,renderCache:u,props:p,data:m,setupState:k,ctx:S,inheritAttrs:$}=e,j=gr(e);let K,z;try{if(t.shapeFlag&4){const w=i||r,I=w;K=mn(f.call(I,w,u,p,k,m,S)),z=c}else{const w=n;K=mn(w.length>1?w(p,{attrs:c,slots:l,emit:d}):w(p,null)),z=n.props?c:ic(c)}}catch(w){tt.length=0,Or(w,e,1),K=Te(Pe)}let Z=K;if(z&&$!==!1){const w=Object.keys(z),{shapeFlag:I}=Z;w.length&&I&7&&(o&&w.some(Sr)&&(z=oc(z,o)),Z=Hn(Z,z,!1,!0))}if(t.dirs&&(Z=Hn(Z,null,!1,!0),Z.dirs=Z.dirs?Z.dirs.concat(t.dirs):t.dirs),t.transition){const w=Pr(Z.type)&&yr(Z)||Z;nt(w,t.transition)}return K=Z,gr(j),K}function Ho(e,n=!0){let t;for(let r=0;r<e.length;r++){const i=e[r];if(jt(i)){if(i.type!==Pe||i.children==="v-if"){if(t)return;t=i}}else return}return t}const ic=e=>{let n;for(const t in e)(t==="class"||t==="style"||wr(t))&&((n||(n={}))[t]=e[t]);return n},oc=(e,n)=>{const t={};for(const r in e)(!Sr(r)||!(r.slice(9)in n))&&(t[r]=e[r]);return t};function lc(e,n,t){const{props:r,children:i,component:o}=e,{props:l,children:c,patchFlag:d}=n,f=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&d>=0){if(d&1024)return!0;if(d&16)return r?pi(r,l,f):!!l;if(d&8){const u=n.dynamicProps;for(let p=0;p<u.length;p++){const m=u[p];if(Uo(l,r,m)&&!Lr(f,m))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:r===l?!1:r?l?pi(r,l,f):!0:!!l;return!1}function pi(e,n,t){const r=Object.keys(n);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(!he(e,o)||Uo(n,e,o)&&!Lr(t,o))return!0}return!1}function Uo(e,n,t){const r=e[t],i=n[t];return t==="style"&&me(r)&&me(i)?!ft(r,i):r!==i}function ac({vnode:e,parent:n,suspense:t},r){for(;n;){const i=n.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.suspense.vnode.el=i.el=r,e=i),i===e)(e=n.vnode).el=r,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=r)}const Ko={},Wo=()=>Object.create(Ko),Go=e=>Object.getPrototypeOf(e)===Ko;function cc(e,n,t,r=!1){const i={},o=Wo();e.propsDefaults=Object.create(null),zo(e,n,i,o);for(const l in e.propsOptions[0])l in i||(i[l]=void 0);t?e.props=r?i:pa(i):e.type.props?e.props=i:e.props=o,e.attrs=o}function uc(e,n,t,r){const{props:i,attrs:o,vnode:{patchFlag:l}}=e,c=fe(i),[d]=e.propsOptions;let f=!1;if((r||l>0)&&!(l&16)){if(l&8){const u=e.vnode.dynamicProps;for(let p=0;p<u.length;p++){let m=u[p];if(Lr(e.emitsOptions,m))continue;const k=n[m];if(d)if(he(o,m))k!==o[m]&&(o[m]=k,f=!0);else{const S=on(m);i[S]=bs(d,c,S,k,e,!1)}else k!==o[m]&&(o[m]=k,f=!0)}}}else{zo(e,n,i,o)&&(f=!0);let u;for(const p in c)(!n||!he(n,p)&&((u=st(p))===p||!he(n,u)))&&(d?t&&(t[p]!==void 0||t[u]!==void 0)&&(i[p]=bs(d,c,p,void 0,e,!0)):delete i[p]);if(o!==c)for(const p in o)(!n||!he(n,p))&&(delete o[p],f=!0)}f&&Tn(e.attrs,"set","")}function zo(e,n,t,r){const[i,o]=e.propsOptions;let l=!1,c;if(n)for(let d in n){if(wt(d))continue;const f=n[d];let u;i&&he(i,u=on(d))?!o||!o.includes(u)?t[u]=f:(c||(c={}))[u]=f:Lr(e.emitsOptions,d)||(!(d in r)||f!==r[d])&&(r[d]=f,l=!0)}if(o){const d=fe(t),f=c||_e;for(let u=0;u<o.length;u++){const p=o[u];t[p]=bs(i,d,p,f[p],e,!he(f,p))}}return l}function bs(e,n,t,r,i,o){const l=e[t];if(l!=null){const c=he(l,"default");if(c&&r===void 0){const d=l.default;if(l.type!==Function&&!l.skipFactory&&ae(d)){const{propsDefaults:f}=i;if(t in f)r=f[t];else{const u=Yt(i);r=f[t]=d.call(null,n),u()}}else r=d;i.ce&&i.ce._setProp(t,r)}l[0]&&(o&&!c?r=!1:l[1]&&(r===""||r===st(t))&&(r=!0))}return r}const dc=new WeakMap;function Yo(e,n,t=!1){const r=t?dc:n.propsCache,i=r.get(e);if(i)return i;const o=e.props,l={},c=[];let d=!1;if(!ae(e)){const u=p=>{d=!0;const[m,k]=Yo(p,n,!0);Se(l,m),k&&c.push(...k)};!t&&n.mixins.length&&n.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!d)return me(e)&&r.set(e,Qn),Qn;if(ie(o))for(let u=0;u<o.length;u++){const p=on(o[u]);mi(p)&&(l[p]=_e)}else if(o)for(const u in o){const p=on(u);if(mi(p)){const m=o[u],k=l[p]=ie(m)||ae(m)?{type:m}:Se({},m),S=k.type;let $=!1,j=!0;if(ie(S))for(let K=0;K<S.length;++K){const z=S[K],Z=ae(z)&&z.name;if(Z==="Boolean"){$=!0;break}else Z==="String"&&(j=!1)}else $=ae(S)&&S.name==="Boolean";k[0]=$,k[1]=j,($||he(k,"default"))&&c.push(p)}}const f=[l,c];return me(e)&&r.set(e,f),f}function mi(e){return e[0]!=="$"&&!wt(e)}const Fs=e=>e==="_"||e==="_ctx"||e==="$stable",Ls=e=>ie(e)?e.map(mn):[mn(e)],fc=(e,n,t)=>{if(n._n)return n;const r=Io((...i)=>Ls(n(...i)),t);return r._c=!1,r},Jo=(e,n,t)=>{const r=e._ctx;for(const i in e){if(Fs(i))continue;const o=e[i];if(ae(o))n[i]=fc(i,o,r);else if(o!=null){const l=Ls(o);n[i]=()=>l}}},Qo=(e,n)=>{const t=Ls(n);e.slots.default=()=>t},Zo=(e,n,t)=>{for(const r in n)(t||!Fs(r))&&(e[r]=n[r])},hc=(e,n,t)=>{const r=e.slots=Wo();if(e.vnode.shapeFlag&32){const i=n._;i?(Zo(r,n,t),t&&to(r,"_",i,!0)):Jo(n,r)}else n&&Qo(e,n)},pc=(e,n,t)=>{const{vnode:r,slots:i}=e;let o=!0,l=_e;if(r.shapeFlag&32){const c=n._;c?t&&c===1?o=!1:Zo(i,n,t):(o=!n.$stable,Jo(n,i)),l=n}else n&&(Qo(e,n),l={default:1});if(o)for(const c in i)!Fs(c)&&l[c]==null&&delete i[c]},Fe=_c;function mc(e){return vc(e)}function vc(e,n){const t=Tr();t.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:l,createText:c,createComment:d,setText:f,setElementText:u,parentNode:p,nextSibling:m,setScopeId:k=yn,insertStaticContent:S}=e,$=(g,_,E,L=null,A=null,D=null,G=void 0,U=null,q=!!_.dynamicChildren)=>{if(g===_)return;g&&!Jn(g,_)&&(L=se(g),Be(g,A,D,!0),g=null),_.patchFlag===-2&&(q=!1,_.dynamicChildren=null),_.dynamicChildren&&g&&g.dynamicChildren&&g.dynamicChildren.hasOnce&&(_.dynamicChildren===Qn&&(_.dynamicChildren=[]),_.dynamicChildren.hasOnce=!0);const{type:O,ref:ne,shapeFlag:J}=_;switch(O){case Vr:j(g,_,E,L);break;case Pe:K(g,_,E,L);break;case ts:g==null&&z(_,E,L,G);break;case Y:V(g,_,E,L,A,D,G,U,q);break;default:J&1?I(g,_,E,L,A,D,G,U,q):J&6?M(g,_,E,L,A,D,G,U,q):(J&64||J&128)&&O.process(g,_,E,L,A,D,G,U,q,Nn)}ne!=null&&A?Tt(ne,g&&g.ref,D,_||g,!_):ne==null&&g&&g.ref!=null&&Tt(g.ref,null,D,g,!0)},j=(g,_,E,L)=>{if(g==null)r(_.el=c(_.children),E,L);else{const A=_.el=g.el;_.children!==g.children&&f(A,_.children)}},K=(g,_,E,L)=>{g==null?r(_.el=d(_.children||""),E,L):_.el=g.el},z=(g,_,E,L)=>{[g.el,g.anchor]=S(g.children,_,E,L,g.el,g.anchor)},Z=({el:g,anchor:_},E,L)=>{let A;for(;g&&g!==_;)A=m(g),r(g,E,L),g=A;r(_,E,L)},w=({el:g,anchor:_})=>{let E;for(;g&&g!==_;)E=m(g),i(g),g=E;i(_)},I=(g,_,E,L,A,D,G,U,q)=>{if(_.type==="svg"?G="svg":_.type==="math"&&(G="mathml"),g==null)X(_,E,L,A,D,G,U,q);else{const O=g.el&&g.el._isVueCE?g.el:null;try{O&&O._beginPatch(),N(g,_,A,D,G,U,q)}finally{O&&O._endPatch()}}},X=(g,_,E,L,A,D,G,U)=>{let q,O;const{props:ne,shapeFlag:J,transition:re,dirs:oe}=g;if(q=g.el=l(g.type,D,ne&&ne.is,ne),J&8?u(q,g.children):J&16&&P(g.children,q,null,L,A,ns(g,D),G,U),oe&&Kn(g,null,L,"created"),ee(q,g,g.scopeId,G,L),ne){for(const be in ne)be!=="value"&&!wt(be)&&o(q,be,null,ne[be],D,L);"value"in ne&&o(q,"value",null,ne.value,D),(O=ne.onVnodeBeforeMount)&&dn(O,L,g)}oe&&Kn(g,null,L,"beforeMount");const de=gc(A,re);de?re.beforeEnter(q):re&&!re.persisted&&(q[bc]=!0),r(q,_,E),((O=ne&&ne.onVnodeMounted)||de||oe)&&Fe(()=>{try{O&&dn(O,L,g),de&&re.enter(q),oe&&Kn(g,null,L,"mounted")}finally{}},A)},ee=(g,_,E,L,A)=>{if(E&&k(g,E),L)for(let D=0;D<L.length;D++)k(g,L[D]);if(A){let D=A.subTree;if(_===D||nl(D.type)&&(D.ssContent===_||D.ssFallback===_)){const G=A.vnode;ee(g,G,G.scopeId,G.slotScopeIds,A.parent)}}},P=(g,_,E,L,A,D,G,U,q=0)=>{for(let O=q;O<g.length;O++){const ne=g[O]=U?In(g[O]):mn(g[O]);$(null,ne,_,E,L,A,D,G,U)}},N=(g,_,E,L,A,D,G)=>{const U=_.el=g.el;let{patchFlag:q,dynamicChildren:O,dirs:ne}=_;q|=g.patchFlag&16;const J=g.props||_e,re=_.props||_e;let oe;if(E&&Wn(E,!1),(oe=re.onVnodeBeforeUpdate)&&dn(oe,E,_,g),ne&&Kn(_,g,E,"beforeUpdate"),E&&Wn(E,!0),O&&(!g.dynamicChildren||g.dynamicChildren.length!==O.length)&&(q=0,G=!1,O=null),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&u(U,""),O?Q(g.dynamicChildren,O,U,E,L,ns(_,A),D):G||F(g,_,U,null,E,L,ns(_,A),D,!1),q>0){if(q&16)W(U,J,re,E,A);else if(q&2&&J.class!==re.class&&o(U,"class",null,re.class,A),q&4&&o(U,"style",J.style,re.style,A),q&8){const de=_.dynamicProps;for(let be=0;be<de.length;be++){const ye=de[be],Ce=J[ye],Ae=re[ye];(Ae!==Ce||ye==="value")&&o(U,ye,Ce,Ae,A,E)}}q&1&&g.children!==_.children&&u(U,_.children)}else!G&&O==null&&W(U,J,re,E,A);((oe=re.onVnodeUpdated)||ne)&&Fe(()=>{oe&&dn(oe,E,_,g),ne&&Kn(_,g,E,"updated")},L)},Q=(g,_,E,L,A,D,G)=>{for(let U=0;U<_.length;U++){const q=g[U],O=_[U],ne=q.el||Dt(q),J=ne&&(q.type===Y||!Jn(q,O)||q.shapeFlag&198)?p(ne):E;$(q,O,J,null,L,A,D,G,!0)}},W=(g,_,E,L,A)=>{if(_!==E){if(_!==_e)for(const D in _)!wt(D)&&!(D in E)&&o(g,D,_[D],null,A,L);for(const D in E){if(wt(D))continue;const G=E[D],U=_[D];G!==U&&D!=="value"&&o(g,D,U,G,A,L)}"value"in E&&o(g,"value",_.value,E.value,A)}},V=(g,_,E,L,A,D,G,U,q)=>{const O=_.el=g?g.el:c(""),ne=_.anchor=g?g.anchor:c("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:oe}=_;oe&&(U=U?U.concat(oe):oe),g==null?(r(O,E,L),r(ne,E,L),P(_.children||[],E,ne,A,D,G,U,q)):J>0&&J&64&&re&&g.dynamicChildren&&g.dynamicChildren.length===re.length?(Q(g.dynamicChildren,re,E,A,D,G,U),(_.key!=null||A&&_===A.subTree)&&Xo(g,_,!0)):F(g,_,E,ne,A,D,G,U,q)},M=(g,_,E,L,A,D,G,U,q)=>{_.slotScopeIds=U,g==null?_.shapeFlag&512?A.ctx.activate(_,E,L,G,q):T(_,E,L,A,D,G,q):x(g,_,q)},T=(g,_,E,L,A,D,G)=>{const U=g.component=Cc(g,L,A);if(Nr(g)&&(U.ctx.renderer=Nn),wc(U,!1,G),U.asyncDep){if(A&&A.registerDep(U,C,G,D),!g.el){const q=U.subTree=Te(Pe);K(null,q,_,E),g.placeholder=q.el}}else C(U,g,_,E,A,D,G)},x=(g,_,E)=>{const L=_.component=g.component;if(lc(g,_,E))if(L.asyncDep&&!L.asyncResolved){_.el=g.el,_.placeholder=g.placeholder,R(L,_,E);return}else L.next=_,L.update();else _.el=g.el,_.placeholder=g.placeholder,L.vnode=_},C=(g,_,E,L,A,D,G)=>{const U=()=>{if(g.isMounted){let{next:J,bu:re,u:oe,parent:de,vnode:be}=g;{const cn=el(g);if(cn){J&&(J.el=be.el,R(g,J,G)),cn.asyncDep.then(()=>{const $n=()=>{g.job.flags&8||(A&&A.pendingBranch?Fe($n,A):O())};$n.flags=48,Fe($n,A)});return}}let ye=J,Ce;Wn(g,!1),J?(J.el=be.el,R(g,J,G)):J=be,re&&cr(re),(Ce=J.props&&J.props.onVnodeBeforeUpdate)&&dn(Ce,de,J,be),Wn(g,!0);const Ae=hi(g),nn=g.subTree;g.subTree=Ae,$(nn,Ae,p(nn.el||Dt(nn)),se(nn),g,A,D),J.el=Ae.el,ye===null&&ac(g,Ae.el),oe&&Fe(oe,A),(Ce=J.props&&J.props.onVnodeUpdated)&&Fe(()=>dn(Ce,de,J,be),A)}else{let J;const{el:re,props:oe}=_,{bm:de,m:be,parent:ye,root:Ce,type:Ae}=g,nn=At(_);Wn(g,!1),de&&cr(de),!nn&&(J=oe&&oe.onVnodeBeforeMount)&&dn(J,ye,_),Wn(g,!0);{Ce.ce&&Ce.ce._hasShadowRoot()&&Ce.ce._injectChildStyle(Ae,g.parent?g.parent.type:void 0);const cn=g.subTree=hi(g);$(null,cn,E,L,g,A,D),_.el=cn.el}if(be&&Fe(be,A),!nn&&(J=oe&&oe.onVnodeMounted)){const cn=_;Fe(()=>dn(J,ye,cn),A)}(_.shapeFlag&256||ye&&At(ye.vnode)&&ye.vnode.shapeFlag&256)&&g.a&&Fe(g.a,A),g.isMounted=!0,_=E=L=null}};g.scope.on();const q=g.effect=new oo(U);g.scope.off();const O=g.update=q.run.bind(q),ne=g.job=q.runIfDirty.bind(q);ne.i=g,ne.id=g.uid,q.scheduler=()=>Dr(ne),Wn(g,!0),O()},R=(g,_,E)=>{_.component=g;const L=g.vnode.props;g.vnode=_,g.next=null,uc(g,_.props,L,E),pc(g,_.children,E),_n(),Eo(g),kn()},F=(g,_,E,L,A,D,G,U,q=!1)=>{const O=g&&g.children,ne=g?g.shapeFlag:0,J=_.children,{patchFlag:re,shapeFlag:oe}=_;if(re>0){if(re&128){Pn(O,J,E,L,A,D,G,U,q);return}else if(re&256){$e(O,J,E,L,A,D,G,U,q);return}}oe&8?(ne&16&&ge(O,A,D),J!==O&&u(E,J)):ne&16?oe&16?Pn(O,J,E,L,A,D,G,U,q):ge(O,A,D,!0):(ne&8&&u(E,""),oe&16&&P(J,E,L,A,D,G,U,q))},$e=(g,_,E,L,A,D,G,U,q)=>{g=g||Qn,_=_||Qn;const O=g.length,ne=_.length,J=Math.min(O,ne);let re;for(re=0;re<J;re++){const oe=_[re]=q?In(_[re]):mn(_[re]);$(g[re],oe,E,null,A,D,G,U,q)}O>ne?ge(g,A,D,!0,!1,J):P(_,E,L,A,D,G,U,q,J)},Pn=(g,_,E,L,A,D,G,U,q)=>{let O=0;const ne=_.length;let J=g.length-1,re=ne-1;for(;O<=J&&O<=re;){const oe=g[O],de=_[O]=q?In(_[O]):mn(_[O]);if(Jn(oe,de))$(oe,de,E,null,A,D,G,U,q);else break;O++}for(;O<=J&&O<=re;){const oe=g[J],de=_[re]=q?In(_[re]):mn(_[re]);if(Jn(oe,de))$(oe,de,E,null,A,D,G,U,q);else break;J--,re--}if(O>J){if(O<=re){const oe=re+1,de=oe<ne?_[oe].el:L;for(;O<=re;)$(null,_[O]=q?In(_[O]):mn(_[O]),E,de,A,D,G,U,q),O++}}else if(O>re)for(;O<=J;)Be(g[O],A,D,!0),O++;else{const oe=O,de=O,be=new Map;for(O=de;O<=re;O++){const He=_[O]=q?In(_[O]):mn(_[O]);He.key!=null&&be.set(He.key,O)}let ye,Ce=0;const Ae=re-de+1;let nn=!1,cn=0;const $n=new Array(Ae);for(O=0;O<Ae;O++)$n[O]=0;for(O=oe;O<=J;O++){const He=g[O];if(Ce>=Ae){Be(He,A,D,!0);continue}let un;if(He.key!=null)un=be.get(He.key);else for(ye=de;ye<=re;ye++)if($n[ye-de]===0&&Jn(He,_[ye])){un=ye;break}un===void 0?Be(He,A,D,!0):($n[un-de]=O+1,un>=cn?cn=un:nn=!0,$(He,_[un],E,null,A,D,G,U,q),Ce++)}const Qs=nn?yc($n):Qn;for(ye=Qs.length-1,O=Ae-1;O>=0;O--){const He=de+O,un=_[He],Zs=_[He+1],Xs=He+1<ne?Zs.el||Dt(Zs):L;$n[O]===0?$(null,un,E,Xs,A,D,G,U,q):nn&&(ye<0||O!==Qs[ye]?xn(un,E,Xs,2):ye--)}}},xn=(g,_,E,L,A=null)=>{const{el:D,type:G,transition:U,children:q,shapeFlag:O}=g;if(O&6){xn(g.component.subTree,_,E,L);return}if(O&128){g.suspense.move(_,E,L);return}if(O&64){G.move(g,_,E,Nn);return}if(G===Y){r(D,_,E);for(let J=0;J<q.length;J++)xn(q[J],_,E,L);r(g.anchor,_,E);return}if(G===ts){Z(g,_,E);return}if(L!==2&&O&1&&U)if(L===0)U.persisted&&!D[Ge]?r(D,_,E):(U.beforeEnter(D),r(D,_,E),Fe(()=>U.enter(D),A));else{const{leave:J,delayLeave:re,afterLeave:oe}=U,de=()=>{g.ctx.isUnmounted?i(D):r(D,_,E)},be=()=>{const ye=D._isLeaving||!!D[Ge];D._isLeaving&&D[Ge](!0),U.persisted&&!ye?de():J(D,()=>{de(),oe&&oe()})};re?re(D,de,be):be()}else r(D,_,E)},Be=(g,_,E,L=!1,A=!1)=>{const{type:D,props:G,ref:U,children:q,dynamicChildren:O,shapeFlag:ne,patchFlag:J,dirs:re,cacheIndex:oe,memo:de}=g;if((J===-2||O&&O.hasOnce)&&(A=!1),U!=null&&(_n(),Tt(U,null,E,g,!0),kn()),oe!=null&&(!g.ctx||g.ctx===_)&&(_.renderCache[oe]=void 0),ne&256&&_.ctx.deactivate(g))return;const be=ne&1&&re,ye=!At(g);let Ce;if(ye&&(Ce=G&&G.onVnodeBeforeUnmount)&&dn(Ce,_,g),ne&6)le(g.component,E,L);else{if(ne&128){g.suspense.unmount(E,L);return}be&&Kn(g,null,_,"beforeUnmount"),ne&64?g.type.remove(g,_,E,Nn,L):O&&!O.hasOnce&&(D!==Y||J>0&&J&64)?ge(O,_,E,!1,!0):(D===Y&&J&384||!A&&ne&16)&&ge(q,_,E),L&&Qt(g)}const Ae=de!=null&&oe==null;(ye&&(Ce=G&&G.onVnodeUnmounted)||be||Ae)&&Fe(()=>{Ce&&dn(Ce,_,g),be&&Kn(g,null,_,"unmounted"),Ae&&(g.el=null)},E)},Qt=g=>{const{type:_,el:E,anchor:L,transition:A}=g,D=_===Y;if(D&&!A){Zt(E,L);return}if(_===ts){w(g),A&&!A.persisted&&A.afterLeave&&A.afterLeave();return}const G=D?Ft(g):g,U=()=>{D?p(E)&&Zt(E,L):i(E),A&&!A.persisted&&A.afterLeave&&A.afterLeave()};if(G&&G.shapeFlag&1&&A&&!A.persisted){const{leave:q,delayLeave:O}=A,ne=G.el,J=()=>q(ne,U);O?O(ne,U,J):J()}else U()},Zt=(g,_)=>{let E;for(;g!==_;)E=m(g),i(g),g=E;i(_)},le=(g,_,E)=>{const{bum:L,scope:A,job:D,subTree:G,um:U,m:q,a:O}=g;vi(q),vi(O),L&&cr(L),A.stop(),D?(D.flags|=8,Be(G,g,_,E)):G&&(G.transition=g.vnode.transition,Be(G,g,_,E)),U&&Fe(U,_);const ne=()=>{g.isUnmounted=!0};ne.flags=16,Fe(ne,_)},ge=(g,_,E,L=!1,A=!1,D=0)=>{for(let G=D;G<g.length;G++)Be(g[G],_,E,L,A)},se=g=>{if(g.shapeFlag&6)return se(g.component.subTree);if(g.shapeFlag&128)return g.suspense.next();const _=m(g.anchor||g.el),E=_&&_[Da];return E?m(E):_},qe=(g,_,E)=>{const L=g&&_._vnode?void 0:g&&g.component?g.component.uid:Ec();wa(()=>{g==null?_._vnode&&Be(_._vnode,null,null,!0):$(_._vnode||null,g,_,null,null,null,E),_._vnode=g},L)},Nn={p:$,um:Be,m:xn,r:Qt,mt:T,mc:P,pc:F,pbc:Q,n:se,o:e};return{render:qe,hydrate:void 0,createApp:nc(qe)}}function ns({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function Wn({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function gc(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function Xo(e,n,t=!1){const r=e.children,i=n.children;if(ie(r)&&ie(i))for(let o=0;o<r.length;o++){const l=r[o];let c=i[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[o]=In(i[o]),c.el=l.el),!t&&c.patchFlag!==-2&&Xo(l,c)),c.type===Vr&&(c.patchFlag===-1&&(c=i[o]=In(c)),c.el=l.el),c.type===Pe&&!c.el&&(c.el=l.el)}}function yc(e){const n=e.slice(),t=[0];let r,i,o,l,c;const d=e.length;for(r=0;r<d;r++){const f=e[r];if(f!==0){if(i=t[t.length-1],e[i]<f){n[r]=i,t.push(r);continue}for(o=0,l=t.length-1;o<l;)c=o+l>>1,e[t[c]]<f?o=c+1:l=c;f<e[t[o]]&&(o>0&&(n[r]=t[o-1]),t[o]=r)}}for(o=t.length,l=t[o-1];o-- >0;)t[o]=l,l=n[l];return t}function el(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:el(n)}function vi(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function Dt(e){if(e.placeholder)return e.placeholder;const n=e.component;if(n)return Dt(n.subTree);const t=e.suspense;return t&&t.activeBranch?Dt(t.activeBranch):null}const nl=e=>e.__isSuspense,bc=Symbol("_deferredEnter");function _c(e,n){n&&n.pendingBranch?ie(e)?n.effects.push(...e):n.effects.push(e):Ca(e)}const Y=Symbol.for("v-fgt"),Vr=Symbol.for("v-txt"),Pe=Symbol.for("v-cmt"),ts=Symbol.for("v-stc"),tt=[];let Ue=null;function v(e=!1){tt.push(Ue=e?null:[])}function tl(){tt.pop(),Ue=tt[tt.length-1]||null}let Vt=1;function kr(e,n=!1){Vt+=e,e<0&&Ue&&n&&(Ue.hasOnce=!0)}function rl(e){return e.dynamicChildren=Vt>0?Ue||Qn:null,tl(),Vt>0&&Ue&&Ue.push(e),e}function y(e,n,t,r,i,o){return rl(a(e,n,t,r,i,o,!0))}function fn(e,n,t,r,i){return rl(Te(e,n,t,r,i,!0))}function jt(e){return e?e.__v_isVNode===!0:!1}function Jn(e,n){return e.type===n.type&&e.key===n.key}const sl=({key:e})=>e??null,dr=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||Ne(e)||ae(e)?{i:ze,r:e,k:n,f:!!t}:e:null);function a(e,n=null,t=null,r=0,i=null,o=e===Y?0:1,l=!1,c=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&sl(n),ref:n&&dr(n),scopeId:So,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:ze};return c?(Mr(d,t),o&128&&e.normalize(d)):t&&(d.shapeFlag|=xe(t)?8:16),Vt>0&&!l&&Ue&&(d.patchFlag>0||o&6)&&d.patchFlag!==32&&Ue.push(d),d}const Te=kc;function kc(e,n=null,t=null,r=0,i=null,o=!1){if((!e||e===Ga)&&(e=Pe),jt(e)){const c=Hn(e,n,!0);return t&&Mr(c,t),Vt>0&&!o&&Ue&&(c.shapeFlag&6?Ue[Ue.indexOf(e)]=c:Ue.push(c)),c.patchFlag=-2,c}if(Ac(e)&&(e=e.__vccOpts),n){n=Mc(n);let{class:c,style:d}=n;c&&!xe(c)&&(n.class=ve(c)),me(d)&&(Rs(d)&&!ie(d)&&(d=Se({},d)),n.style=Ye(d))}const l=xe(e)?1:nl(e)?128:Pr(e)?64:me(e)?4:ae(e)?2:0;return a(e,n,t,r,i,l,o,!0)}function Mc(e){return e?Rs(e)?Se({},e):Go(e)?Se({},e[cl]||e):e:null}function Hn(e,n,t=!1,r=!1){const{props:i,ref:o,patchFlag:l,children:c,transition:d}=e,f=n?xc(i||{},n):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:f,key:f&&sl(f),ref:n&&n.ref?t&&o?ie(o)?o.concat(dr(n)):[o,dr(n)]:dr(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==Y?l===-1?16:l|16:l,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:d,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Hn(e.ssContent),ssFallback:e.ssFallback&&Hn(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return d&&r&&nt(u,d.clone(u)),u}function gn(e=" ",n=0){return Te(Vr,null,e,n)}function H(e="",n=!1){return n?(v(),fn(Pe,null,e)):Te(Pe,null,e)}function mn(e){return e==null||typeof e=="boolean"?Te(Pe):ie(e)?Te(Y,null,e.slice()):jt(e)?In(e):Te(Vr,null,String(e))}function In(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Hn(e)}function Mr(e,n){let t=0;const{shapeFlag:r}=e;if(n==null)n=null;else if(ie(n))t=16;else if(typeof n=="object")if(r&65){const i=n.default;i&&(i._c&&(i._d=!1),Mr(e,i()),i._c&&(i._d=!0));return}else{t=32;const i=n._;!i&&!Go(n)?n._ctx=ze:i===3&&ze&&(ze.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(ae(n)){if(r&65){Mr(e,{default:n});return}n={default:n,_ctx:ze},t=32}else n=String(n),r&64?(t=16,n=[gn(n)]):t=8;e.children=n,e.shapeFlag|=t}function xc(...e){const n={};for(let t=0;t<e.length;t++){const r=e[t];for(const i in r)if(i==="class")n.class!==r.class&&(n.class=ve([n.class,r.class]));else if(i==="style")n.style=Ye([n.style,r.style]);else if(wr(i)){const o=n[i],l=r[i];l&&o!==l&&!(ie(o)&&o.includes(l))?n[i]=o?[].concat(o,l):l:l==null&&o==null&&!Sr(i)&&(n[i]=l)}else i!==""&&(n[i]=r[i])}return n}function dn(e,n,t,r=null){Ze(e,n,7,[t,r])}const $c=Bo();let il=0;function Ec(){return il}function Cc(e,n,t){const r=e.type,i=(n?n.appContext:e.appContext)||$c,o={uid:il++,vnode:e,type:r,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Jl(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Yo(r,i),emitsOptions:qo(r,i),emit:null,emitted:null,propsDefaults:_e,inheritAttrs:r.inheritAttrs,ctx:_e,data:_e,props:_e,attrs:_e,slots:_e,refs:_e,setupState:_e,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=rc.bind(null,o),e.ce&&e.ce(o),o}let Ve=null;const ol=()=>Ve||ze;let xr,Bt;{const e=Tr(),n=(t,r)=>{let i;return(i=e[t])||(i=e[t]=[]),i.push(r),o=>{i.length>1?i.forEach(l=>l(o)):i[0](o)}};xr=n("__VUE_INSTANCE_SETTERS__",t=>Ve=t),Bt=n("__VUE_SSR_SETTERS__",t=>qt=t)}const Yt=e=>{const n=Ve;return xr(e),e.scope.on(),()=>{e.scope.off(),xr(n)}},gi=()=>{Ve&&Ve.scope.off(),xr(null)};function ll(e){return e.vnode.shapeFlag&4}let qt=!1;function wc(e,n=!1,t=!1){n&&Bt(n);const{props:r,children:i}=e.vnode,o=ll(e);cc(e,r,o,n),hc(e,i,t||n);const l=o?Sc(e,n):void 0;return n&&Bt(!1),l}function Sc(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,za);const{setup:r}=t;if(r){_n();const i=e.setupContext=r.length>1?Tc(e):null,o=Yt(e),l=zt(r,e,0,[e.props,i]),c=Zi(l);if(kn(),o(),(c||e.sp)&&!At(e)&&Ro(e),c){if(l.then(gi,gi),n)return l.then(d=>{Bt(!0);try{yi(e,d,n)}finally{Bt(!1)}}).catch(d=>{Or(d,e,0,void 0,!0),e.ssrRender=(f,u)=>u("<!---->")});e.asyncDep=l}else yi(e,l)}else al(e)}function yi(e,n,t){ae(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:me(n)&&(e.setupState=Mo(n)),al(e)}function al(e,n,t){const r=e.type;e.render||(e.render=r.render||yn);{const i=Yt(e);_n();try{Ya(e)}finally{kn(),i()}}}const cl=Symbol(),Ic={get(e,n){return De(e,"get",""),n===cl?e:e[n]}};function Tc(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Ic),slots:e.slots,emit:e.emit,expose:n}}function jr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Mo(ma(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in Ot)return Ot[t](e)},has(n,t){return t in n||t in Ot}})):e.proxy}function Ac(e){return ae(e)&&"__vccOpts"in e}const B=(e,n)=>_a(e,n,qt);function Oc(e,n,t){try{kr(-1);const r=arguments.length;return r===2?me(n)&&!ie(n)?jt(n)?Te(e,null,[n]):Te(e,n):Te(e,null,n):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&jt(t)&&(t=[t]),Te(e,n,t))}finally{kr(1)}}const Dc="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let _s;const bi=typeof window<"u"&&window.trustedTypes;if(bi)try{_s=bi.createPolicy("vue",{createHTML:e=>e})}catch{}const ul=_s?e=>_s.createHTML(e):e=>e,Pc="http://www.w3.org/2000/svg",Nc="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,_i=Sn&&Sn.createElement("template"),Rc={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,r)=>{const i=n==="svg"?Sn.createElementNS(Pc,e):n==="mathml"?Sn.createElementNS(Nc,e):t?Sn.createElement(e,{is:t}):Sn.createElement(e);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>Sn.createTextNode(e),createComment:e=>Sn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Sn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,r,i,o){const l=t?t.previousSibling:n.lastChild;if(i&&(i===o||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),t),!(i===o||!(i=i.nextSibling)););else{_i.innerHTML=ul(r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e);const c=_i.content;if(r==="svg"||r==="mathml"){const d=c.firstChild;for(;d.firstChild;)c.appendChild(d.firstChild);c.removeChild(d)}n.insertBefore(c,t)}return[l?l.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},Rn="transition",Mt="animation",Ht=Symbol("_vtc"),dl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Fc=Se({},Oo,dl),Lc=e=>(e.displayName="Transition",e.props=Fc,e),Vc=Lc((e,{slots:n})=>Oc(Ra,jc(e),n)),Gn=(e,n=[])=>{ie(e)?e.forEach(t=>t(...n)):e&&e(...n)},ki=e=>e?ie(e)?e.some(n=>n.length>1):e.length>1:!1;function jc(e){const n={};for(const V in e)V in dl||(n[V]=e[V]);if(e.css===!1)return n;const{name:t="v",type:r,duration:i,enterFromClass:o=`${t}-enter-from`,enterActiveClass:l=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:d=o,appearActiveClass:f=l,appearToClass:u=c,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:m=`${t}-leave-active`,leaveToClass:k=`${t}-leave-to`}=e,S=Bc(i),$=S&&S[0],j=S&&S[1],{onBeforeEnter:K,onEnter:z,onEnterCancelled:Z,onLeave:w,onLeaveCancelled:I,onBeforeAppear:X=K,onAppear:ee=z,onAppearCancelled:P=Z}=n,N=(V,M,T,x)=>{V._enterCancelled=x,zn(V,M?u:c),zn(V,M?f:l),T&&T()},Q=(V,M)=>{V._isLeaving=!1,zn(V,p),zn(V,k),zn(V,m),M&&M()},W=V=>(M,T)=>{const x=V?ee:z,C=()=>N(M,V,T);Gn(x,[M,C]),Mi(()=>{zn(M,V?d:o),Cn(M,V?u:c),ki(x)||xi(M,r,$,C)})};return Se(n,{onBeforeEnter(V){Gn(K,[V]),Cn(V,o),Cn(V,l)},onBeforeAppear(V){Gn(X,[V]),Cn(V,d),Cn(V,f)},onEnter:W(!1),onAppear:W(!0),onLeave(V,M){V._isLeaving=!0;const T=()=>Q(V,M);Cn(V,p),V._enterCancelled?(Cn(V,m),Ci(V)):(Ci(V),Cn(V,m)),Mi(()=>{V._isLeaving&&(zn(V,p),Cn(V,k),ki(w)||xi(V,r,j,T))}),Gn(w,[V,T])},onEnterCancelled(V){N(V,!1,void 0,!0),Gn(Z,[V])},onAppearCancelled(V){N(V,!0,void 0,!0),Gn(P,[V])},onLeaveCancelled(V){Q(V),Gn(I,[V])}})}function Bc(e){if(e==null)return null;if(me(e))return[rs(e.enter),rs(e.leave)];{const n=rs(e);return[n,n]}}function rs(e){return Bl(e)}function Cn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[Ht]||(e[Ht]=new Set)).add(n)}function zn(e,n){n.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const t=e[Ht];t&&(t.delete(n),t.size||(e[Ht]=void 0))}function Mi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let qc=0;function xi(e,n,t,r){const i=e._endId=++qc,o=()=>{i===e._endId&&r()};if(t!=null)return setTimeout(o,t);const{type:l,timeout:c,propCount:d}=Hc(e,n);if(!l)return r();const f=l+"end";let u=0;const p=()=>{e.removeEventListener(f,m),o()},m=k=>{k.target===e&&++u>=d&&p()};setTimeout(()=>{u<d&&p()},c+1),e.addEventListener(f,m)}function Hc(e,n){const t=window.getComputedStyle(e),r=S=>(t[S]||"").split(", "),i=r(`${Rn}Delay`),o=r(`${Rn}Duration`),l=$i(i,o),c=r(`${Mt}Delay`),d=r(`${Mt}Duration`),f=$i(c,d);let u=null,p=0,m=0;n===Rn?l>0&&(u=Rn,p=l,m=o.length):n===Mt?f>0&&(u=Mt,p=f,m=d.length):(p=Math.max(l,f),u=p>0?l>f?Rn:Mt:null,m=u?u===Rn?o.length:d.length:0);const k=u===Rn&&/\b(?:transform|all)(?:,|$)/.test(r(`${Rn}Property`).toString());return{type:u,timeout:p,propCount:m,hasTransform:k}}function $i(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,r)=>Ei(t)+Ei(e[r])))}function Ei(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ci(e){return(e?e.ownerDocument:document).body.offsetHeight}function Uc(e,n,t){const r=e[Ht];r&&(n=(n?[n,...r]:[...r]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const wi=Symbol("_vod"),Kc=Symbol("_vsh"),Wc=Symbol(""),Gc=/(?:^|;)\s*display\s*:/;function zc(e,n,t){const r=e.style,i=xe(t);let o=!1;if(t&&!i){if(n)if(xe(n))for(const l of n.split(";")){const c=l.slice(0,l.indexOf(":")).trim();t[c]==null&&$t(r,c,"")}else for(const l in n)t[l]==null&&$t(r,l,"");for(const l in t){l==="display"&&(o=!0);const c=t[l];c!=null?Jc(e,l,!xe(n)&&n?n[l]:void 0,c)||$t(r,l,c):$t(r,l,"")}}else if(i){if(n!==t){const l=r[Wc];l&&(t+=";"+l),r.cssText=t,o=Gc.test(t)}}else n&&e.removeAttribute("style");wi in e&&((!i||n!==t)&&(e[wi]=o?r.display:""),e[Kc]&&(r.display="none"))}const tr=/\s*!important$/;function $t(e,n,t){if(ie(t))t.forEach(r=>$t(e,n,r));else if(t==null&&(t=""),n.startsWith("--"))tr.test(t)?e.setProperty(n,t.replace(tr,""),"important"):e.setProperty(n,t);else{const r=Yc(e,n);tr.test(t)?e.setProperty(st(r),t.replace(tr,""),"important"):e[r]=t}}const Si=["Webkit","Moz","ms"],ss={};function Yc(e,n){const t=ss[n];if(t)return t;let r=on(n);if(r!=="filter"&&r in e)return ss[n]=r;r=no(r);for(let i=0;i<Si.length;i++){const o=Si[i]+r;if(o in e)return ss[n]=o}return n}function Jc(e,n,t,r){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&xe(r)&&t===r}const Ii="http://www.w3.org/1999/xlink";function Ti(e,n,t,r,i,o=Gl(n)){r&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(Ii,n.slice(6,n.length)):e.setAttributeNS(Ii,n,t):t==null||o&&!ro(t)?e.removeAttribute(n):e.setAttribute(n,o?"":bn(t)?String(t):t)}function Ai(e,n,t,r,i){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?ul(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,d=t==null?e.type==="checkbox"?"on":"":String(t);(c!==d||!("_value"in e))&&(e.value=d),t==null&&e.removeAttribute(n),e._value=t;return}let l=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=ro(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{e[n]=t}catch{}l&&e.removeAttribute(i||n)}function fl(e,n,t,r){e.addEventListener(n,t,r)}function Qc(e,n,t,r){e.removeEventListener(n,t,r)}const Oi=Symbol("_vei");function Zc(e,n,t,r,i=null){const o=e[Oi]||(e[Oi]={}),l=o[n];if(r&&l)l.value=r;else{const[c,d]=nu(n);if(r){const f=o[n]=su(r,i);fl(e,c,f,d)}else l&&(Qc(e,c,l,d),o[n]=void 0)}}const Xc=/(Once|Passive|Capture)$/,eu=/^on:?(?:Once|Passive|Capture)$/;function nu(e){let n,t;for(;(t=e.match(Xc))&&!eu.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):st(e.slice(2)),n]}let is=0;const tu=Promise.resolve(),ru=()=>is||(tu.then(()=>is=0),is=Date.now());function su(e,n){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;const i=t.value;if(ie(i)){const o=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{o.call(r),r._stopped=!0};const l=i.slice(),c=[r];for(let d=0;d<l.length&&!r._stopped;d++){const f=l[d];f&&Ze(f,n,5,c)}}else Ze(i,n,5,[r])};return t.value=e,t.attached=ru(),t}const Di=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,iu=(e,n,t,r,i,o)=>{const l=i==="svg";n==="class"?Uc(e,r,l):n==="style"?zc(e,t,r):wr(n)?Sr(n)||Zc(e,n,t,r,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ou(e,n,r,l))?(Ai(e,n,r),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Ti(e,n,r,l,o,n!=="value")):e._isVueCE&&(lu(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!xe(r)))?Ai(e,on(n),r,o,n):(n==="true-value"?e._trueValue=r:n==="false-value"&&(e._falseValue=r),Ti(e,n,r,l))};function ou(e,n,t,r){if(r)return!!(n==="innerHTML"||n==="textContent"||n in e&&Di(n)&&ae(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const i=e.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Di(n)&&xe(t)?!1:n in e}function lu(e,n){const t=e._def.props;if(!t)return!1;const r=on(n);return Array.isArray(t)?t.some(i=>on(i)===r):Object.keys(t).some(i=>on(i)===r)}const Pi=e=>{const n=e.props["onUpdate:modelValue"]||!1;return ie(n)?t=>cr(n,t):n},os=Symbol("_assign"),au={created(e,{value:n},t){e.checked=ft(n,t.props.value),e[os]=Pi(t),fl(e,"change",()=>{e[os](cu(e))})},beforeUpdate(e,{value:n,oldValue:t},r){e[os]=Pi(r),n!==t&&(e.checked=ft(n,r.props.value))}};function cu(e){return"_value"in e?e._value:e.value}const uu=["ctrl","shift","alt","meta"],du={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>uu.some(t=>e[`${t}Key`]&&!n.includes(t))},Zn=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),r=n.join(".");return t[r]||(t[r]=((i,...o)=>{for(let l=0;l<n.length;l++){const c=du[n[l]];if(c&&c(i,n))return}return e(i,...o)}))},fu=Se({patchProp:iu},Rc);let Ni;function hu(){return Ni||(Ni=mc(fu))}const pu=((...e)=>{const n=hu().createApp(...e),{mount:t}=n;return n.mount=r=>{const i=vu(r);if(!i)return;const o=n._component;!ae(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const l=t(i,!1,mu(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),l},n});function mu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function vu(e){return xe(e)?document.querySelector(e):e}const gu="./";function je(e){return gu+"art/"+e}const rr=it({});function Xe(e){if(!e)return"no";const n=je(e),t=rr[n];if(t)return t;rr[n]="pending";const r=new Image;return r.onload=()=>{rr[n]="ok"},r.onerror=()=>{rr[n]="no"},r.src=n,"pending"}const Ke=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function Ee(e){return Ke.find(n=>n.id===e)||Ke[0]}const hl={taro:[["荔浦芋泥","焦糖杏仁薄脆"]],matcha:[["春日抹茶粉","蜜红豆"]],mango:[["台农芒果泥","轻盈慕斯"]],tiramisu:[["马斯卡彭","浓缩咖啡液"]],fig:[["波姬红无花果","轻奶油"]],seasonal:[["四季时令鲜果","定制夹心"]],custom:[["双层承重胚","手工定制裱花"]],festival:[["传统红曲","节庆装饰"],["栗蓉","节庆装饰"]],signature:[["高山秋栗","金桂冻","戚风胚"]]},ut=[{id:"base",name:"基础烘焙包",price:20,month:1},{id:"dairy",name:"乳制基底",price:10,month:1},{id:"decor",name:"裱花装饰料",price:5,month:1},{id:"strawberry",name:"鲜草莓",price:10,month:1},{id:"cocoa",name:"可可粉",price:10,month:1},{id:"taro",name:"荔浦芋泥",price:10,month:3},{id:"crisp",name:"焦糖杏仁薄脆",price:10,month:3},{id:"matcha",name:"春日抹茶粉",price:10,month:4},{id:"redbean",name:"蜜红豆",price:10,month:4},{id:"mango",name:"台农芒果泥",price:10,month:6},{id:"mascarpone",name:"马斯卡彭",price:10,month:8},{id:"coffee",name:"浓缩咖啡液",price:10,month:8},{id:"fig",name:"波姬红无花果",price:10,month:10},{id:"seasonal",name:"四季时令鲜果",price:10,month:12},{id:"filling",name:"定制夹心",price:10,month:12},{id:"redrice",name:"传统红曲",price:10,month:20},{id:"chestnut",name:"高山秋栗",price:10,month:20},{id:"osmanthus",name:"金桂冻",price:10,month:26}],yt={plain:{base:1,dairy:1},strawberry:{base:1,dairy:1,strawberry:1},chocolate:{base:1,dairy:1,cocoa:1},taro:{base:1,dairy:1,taro:1,crisp:1},matcha:{base:1,dairy:1,matcha:1,redbean:1},mango:{base:1,dairy:1,mango:1},tiramisu:{base:1,mascarpone:1,coffee:1},fig:{base:1,dairy:1,fig:1},seasonal:{base:1,dairy:1,seasonal:1,filling:1},custom:{base:2,dairy:1,filling:1,decor:1},festival:{base:1,dairy:1,chestnut:1,decor:1},signature:{base:1,dairy:1,chestnut:1,osmanthus:1}},Vs=[{id:"greenery",name:"窗边绿植",category:"绿植",cost:600,shopLevel:1},{id:"lamp",name:"暖黄吊灯",category:"灯具",cost:1200,shopLevel:1},{id:"tables",name:"木桌与藤椅",category:"桌椅",cost:1800,shopLevel:2},{id:"festival",name:"节日花环",category:"节日摆件",cost:2500,shopLevel:3}],js=[{id:"chen",name:"陈奶奶",month:2,day:2,product:"plain",preference:"每次都买原味奶油蛋糕，给小孙子也带一份。",stories:["“我家小孙子指定要吃你们家的味道。”陈奶奶说，家里三代人的生日蛋糕全是在林记订的。","她看着林念接过店，也和苏晴一起盼着林记的老味道走出栖云镇。"]},{id:"zhang",name:"张叔",month:28,day:4,product:"signature",preference:"桂花栗子蛋糕刚上架时，总会来买一块。",stories:["外婆留下的配方写着：“栗子甜则少放糖，桂花香淡则后撒。”","老街坊们怀念的，是秋天打开蛋糕盒时那股桂花与板栗香；如今，林念把它做成了招牌。"]}],yu={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},ht=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐鸢",nick:"阿鸢",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶星河",nick:"星河",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function pt(e){return ht.find(n=>n.id===e)}const mt=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],Ut=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function bu(e){return Ut.find(n=>n.lv===e)||Ut[0]}const pl=[{id:"oven",name:"烤箱",note:"产能",desc:"好烤箱能一次进更多盘，出品也更稳。",tiers:[{cost:2500,value:40,text:"产能 +40"},{cost:7500,value:90,text:"产能 +90"},{cost:22e3,value:150,text:"产能 +150"}]},{id:"mixer",name:"搅拌机",note:"省力",desc:"奶油和面糊交给它，自己少使点劲。",tiers:[{cost:2e3,value:.1,text:"自付体力 -10%"},{cost:6500,value:.2,text:"自付体力 -20%"},{cost:19e3,value:.3,text:"自付体力 -30%"}]},{id:"fridge",name:"冷藏柜",note:"剩货",desc:"当天没卖完的，第二天还能打折卖掉一部分。",tiers:[{cost:1800,value:.1,text:"剩货回收 +10%"},{cost:5500,value:.18,text:"剩货回收 +18%"},{cost:16e3,value:.26,text:"剩货回收 +26%"}]},{id:"display",name:"展示柜",note:"客流",desc:"摆得好看，路过的人就更愿意进来。",tiers:[{cost:3e3,value:.06,text:"需求 +6%"},{cost:9e3,value:.13,text:"需求 +13%"},{cost:3e4,value:.2,text:"需求 +20%"}]},{id:"packing",name:"包装台",note:"定制",desc:"定制单拼的就是最后那一下体面。",tiers:[{cost:2600,value:.1,text:"定制收入 +10%"},{cost:7500,value:.22,text:"定制收入 +22%"},{cost:24e3,value:.35,text:"定制收入 +35%"}]},{id:"warehouse",name:"仓库",note:"采购",desc:"一次能囤更多原料，少跑几趟。",tiers:[{cost:1600,value:6,text:"单次采购 +6 份"},{cost:5e3,value:12,text:"单次采购 +12 份"},{cost:15e3,value:20,text:"单次采购 +20 份"}]},{id:"cashier",name:"收银系统",note:"售价",desc:"扫码点单，客单价能往上提一点。",tiers:[{cost:2400,value:.03,text:"售价 +3%"},{cost:7e3,value:.06,text:"售价 +6%"},{cost:26e3,value:.1,text:"售价 +10%"}]}];function Bs(e){return pl.find(n=>n.id===e)}function Ri(e,n){return e.unlocked.filter(t=>(e.levels[t]||1)>=n).length}function _u(e){return e.unlocked.length?e.unlocked.reduce((n,t)=>n+(e.levels[t]||1),0)/e.unlocked.length:1}function ku(e){return Math.max(0,...Object.values(e.partnerSkill))}function Mu(e,n){return Object.values(e.partnerTrust).filter(t=>t>=n).length}const vt=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>Ri(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。陈奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>_u(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>Ri(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>ku(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>Mu(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function xu(e){return vt.find(n=>e>=n.from&&e<=n.to)||vt[0]}const ml={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},sr={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:je("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:je("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:je("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:je("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:je("shop-exterior.webp")}},$u=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function ls(e){return $u[(e-1)%12]}const Eu=`# 《林记烘焙》完整文游剧情文案 V5.0（橙光对话体标准版）\r
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
8. **北京（\`city-beijing\`）**：大气厚重的北方都会，节庆伴手礼盒与高端主题旗舰展陈极具号召力。`,dt={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐鸢:"唐鸢",阿鸢:"唐鸢",叶星河:"叶星河",星河:"叶星河",陈奶奶:"陈奶奶",许佳宁:"许佳宁",沈妍:"沈妍",顾客:"顾客"},fr={周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe"},Fi={xiaoyu:"小雨",zhiyao:"知遥",kexin:"阿鸢",qinghe:"星河"},Cu={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},wu={一:1,二:2,三:3,四:4,五:5,六:6},Su=/^(林念|苏晴|林暖|周雨桐|许知遥|唐鸢|叶星河|陈奶奶|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function ks(e,n){if(!e)return!0;if(e.trust){for(const t of Object.keys(e.trust))if((n.partnerTrust[t]||0)<e.trust[t])return!1}if(e.momBond&&(n.momBond||0)<e.momBond)return!1;if(e.played){for(const t of e.played)if(!n.played.some(r=>r.indexOf(t)>=0))return!1}if(e.style){const t=n.style||{},r=t[e.style.id]||0;if(r<e.style.min)return!1;const i=Object.keys(t).filter(o=>o!==e.style.id).map(o=>t[o]||0);if(r-Math.max(0,...i)<e.style.lead)return!1}return!0}function hr(e,n){const t=[];for(const r of e||[])r.t==="cond"?t.push(...hr(ks(r.test,n)?r.then:r.else,n)):r.t==="choice"?t.push({...r,options:(r.options||[]).map(i=>({...i,branch:hr(i.branch||[],n)})),after:hr(r.after||[],n)}):t.push(r);return t}function ir(e,n,t){e.lastIndex=0;let r=e.exec(n);for(;r;)t(r),r=e.exec(n)}function Iu(e,n){const t=[];if(!e)return t;ir(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g,e,i=>{t.push({k:"style",id:i[1],v:Number(i[2]),label:Cu[i[1]]+" +"+i[2]})}),ir(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g,e,i=>{const o=dt[i[1]];t.push({k:"trust",id:fr[o],v:Number(i[2]),label:i[1]+"信赖 +"+i[2]})}),ir(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g,e,i=>{const o=i[1]?dt[i[1]]:n,l=fr[o];l&&t.push({k:"skill",id:l,v:Number(i[2])/10,label:(i[1]||Fi[l])+"专业 +"+i[2]})});const r=Object.keys(dt);return ir(/信赖度\s*\+\s*(\d+)/g,e,i=>{const o=e.slice(0,i.index);if(r.some(c=>o.endsWith(c)))return;const l=fr[n];l&&(t.some(c=>c.k==="trust"&&c.id===l)||t.push({k:"trust",id:l,v:Number(i[1]),label:Fi[l]+"信赖 +"+i[1]}))}),/顾客忠诚度增加|忠诚度提升/.test(e)&&t.push({k:"loyalty",v:4,label:"忠诚 +4"}),t}function Et(e){const n={};let t=!1;const r=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);r&&(n.trust={[fr[dt[r[1]]]]:Number(r[2])},t=!0);const i=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);i&&(n.momBond=Number(i[1]),t=!0);const o=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);o&&(n.style={id:o[1],min:Number(o[2]),lead:15},t=!0);const l=e.match(/领先[^0-9]{0,4}(\d+)/);l&&n.style&&(n.style.lead=Number(l[1]));const c=e.match(/M(\d+)/);return c&&/已完成|完成M/.test(e)?(n.played=["M"+c[1]],t=!0):/原创配方研发剧情/.test(e)?(n.played=["M21"],t=!0):/个人作品展/.test(e)&&(n.played=["M25"],t=!0),t?n:null}function Ct(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function or(e,n){const t=e.trim();if(!t||/^\|/.test(t))return;if(t.startsWith("旁白")){const i=t.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);n.push({t:"nar",who:i&&i[1]?i[1]:"",text:Ct(i?i[2]:t)});return}if(/^\*\*[^*]+\*\*$/.test(t)){n.push({t:"nar",text:Ct(t.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(t)||/^\*\(.+\)\*$/.test(t)){n.push({t:"note",text:t.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const r=t.match(Su);if(r){n.push({t:"say",who:dt[r[1]],emo:r[2]||"",text:Ct(r[4].replace(/\*\*/g,""))});return}n.push({t:"nar",text:Ct(t.replace(/\*\*/g,""))})}function wn(e,n={}){const t=[],r={ids:[],month:null,kind:null,test:null,title:"",cond:null};let i="main",o=t,l=null,c=null,d=null,f=null,u=null,p=0,m=!0;const k=()=>i==="branch"&&c?c.branch:i==="then"&&d?d.then:i==="else"&&d?d.else:i==="inline"&&u?u.then:o,S=$=>k().push($);for(const $ of e){const j=$.trim();if(!j){m=!0;continue}if(j.startsWith(">")){let w=j.replace(/^>+\s*/,"").trim();if(!w)continue;const I=w.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(I&&/玩家选择节点/.test(I[1])){i="main",u=null;const ee=I[1],P=ee.match(/节点\s*([\d.\-]+)/),N=ee.match(/[：:]\s*(.+)$/);l={t:"choice",node:P?P[1]:"",prompt:N?N[1].trim():ee,options:[],after:[]},S(l);continue}const X=w.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(X&&l){const ee=Au([w,l.prompt].join(" ")),P=X[3]||"";l.options.push({label:X[2].trim(),hint:P.replace(/^[（(]|[）)]$/g,"").trim(),gains:Iu(P,ee),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(w)&&l&&(l.note=w.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const z=j.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(z){const w=z[1],I=(z[2]||"").replace(/^[：:]\s*/,"").trim();if(w.indexOf("事件ID")>=0){w.split("｜").forEach(V=>{const M=V.search(/[：:]/);if(M<0)return;const T=V.slice(0,M).trim(),x=V.slice(M+1).trim();if(T==="事件ID")r.ids.push(x);else if(T==="触发月份"||T==="触发时间"){const C=x.match(/M(\d+)/);C&&(r.month=Number(C[1]))}else if(T==="触发条件"){/新游戏开始|开始游戏/.test(x)&&(r.kind="prologue");const C=Et(x);C&&(r.cond=C)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(w))continue;if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(w)){S({t:"scene",text:w.replace(/^场景\s*[：:]\s*/,"")}),I&&S({t:"nar",text:I});continue}const X=w.match(/^CG\s*[：:]\s*(.+)$/i);if(X){S({t:"cg",key:X[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(w)){S({t:"cgend"});continue}const ee=w.match(/^分支([A-Z])(?:[：:](.*))?$/);if(ee&&l){const W=ee[1].charCodeAt(0)-65;for(;l.options.length<=W;)l.options.push({label:"选项"+String.fromCharCode(65+l.options.length),hint:"",gains:[],branch:[]});c=l.options[W],i="branch",u=null,I&&S({t:"nar",text:Ct(I)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(w)){i="main",u=null,l&&(o=l.after),I&&S({t:"nar",text:I});continue}const P=w.match(/^高养成解锁分支[：:]\s*(.*)$/),N=w.match(/^普通保底分支[：:]\s*(.*)$/);if(P||N){if(P)u=null,d={t:"cond",test:Et(P[1])||{},then:[],else:[]},f=d,t.push(d),i="then";else{const W=f&&f.else.length===0?f:null;W?(d=W,i="else"):i="main"}continue}if(/^若/.test(w)){const W=Et(w);W&&(d={t:"cond",test:W,then:[],else:[]},t.push(d),u=d,i="inline",p=0,m=!1,I&&or(I,k()));continue}const Q=w.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);if(Q){const W=Et(Q[1]),V=Q[1].replace(/[（(]\s*若[^）)]*[）)]/g,"").trim();S({t:"act",text:V,test:W||null}),I&&S({t:"nar",text:I});continue}I&&S({t:"nar",text:I});continue}const Z=j.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(Z&&/协助|结局|相册|档案/.test(Z[2])){i="main",u=null,S({t:"scene",text:Z[2].replace(/[：:]\s*$/,"")});continue}if(i==="inline"&&u){const w=[];or(j,w);const I=w[0],X=I&&I.t==="nar";if(m&&p>0&&X){i="main",u=null,or(j,o),m=!1;continue}w.forEach(ee=>u.then.push(ee)),m&&(p+=1),m=!1;continue}or(j,k()),m=!1}return l&&l.options.forEach($=>{$.branch.length||($.branch=[])}),r.title=n.title||"",{beats:Tu(t),meta:r}}function Tu(e){const n=[];let t=0;for(;t<e.length;){const r=e[t];if(r.t==="act"&&r.test){let i=t+1;for(;i<e.length&&e[i].t!=="act";)i++;n.push({t:"cond",test:r.test,then:e.slice(t,i),else:[]}),t=i}else n.push(r),t++}return n}function Au(e){const n=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);return n?dt[n[1]]:""}function Ou(e){const n={level:1,text:"",lines:[],children:[]},t=[n];for(const r of e.split(/\r?\n/)){const i=r.match(/^(#{1,4})\s+(.*)$/);if(i){const o=i[1].length;for(;t.length>1&&t[t.length-1].level>=o;)t.pop();const l={level:o,text:i[2].trim(),lines:[],children:[]};t[t.length-1].children.push(l),t.push(l)}else t[t.length-1].lines.push(r)}return n}function Du(e){const n=Ou(e),t=[],r={},i={},o={},l={},c={},d=[];let f=0;const u=k=>(k.order=f++,t.push(k),k),p=[];for(const k of n.children)k.level===1?p.push(...k.children):p.push(k);for(const k of p){const S=k.text||"";if(/^序幕/.test(S)){const{beats:$,meta:j}=wn(k.lines,{title:"序幕 · 回家"});u({id:j.ids[0]||"EVT_PROLOGUE_01",ids:j.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:$});continue}if(/^第[一二三四五六]章/.test(S)){for(const $ of k.children){const j=$.text,K=/结算/.test(j)&&/(月末|目标)/.test(j),z=j.match(/M(\d+)/),Z=z?Number(z[1]):null;if(K&&!z)continue;if(K){const P=Vi(j,Z),N=wn($.lines,{title:j}),Q=N.beats;if(N.meta.ids.length&&u({id:N.meta.ids[0],ids:N.meta.ids,title:lr(j),chapter:S,month:Z,kind:"main",test:N.meta.cond,beats:Q}),!P)continue;r[P]=r[P]||{pass:[],failId:"",failBeats:[]};for(const W of $.children){const V=ar(W.text);if(!V)continue;const M=wn(W.lines,{title:W.text});V==="pass"?r[P].pass=M.beats:(r[P].failBeats=M.beats,r[P].failId=M.meta.ids[0]||"",M.meta.ids.length&&u({id:M.meta.ids[0],ids:M.meta.ids,title:Li(W.text,M.beats),chapter:S,month:null,kind:"short",test:null,beats:M.beats}))}continue}const{beats:w,meta:I}=wn($.lines,{title:j});if(!I.ids.length)continue;let X=I.cond,ee=Z??I.month;X&&!ee&&(ee=I.month);for(const P of $.children){if(ar(P.text))continue;const N=wn(P.lines,{title:P.text});N.beats.length&&(w.push({t:"scene",text:P.text.replace(/^【|】$/g,"")}),w.push(...N.beats))}if(u({id:I.ids[0],ids:I.ids,title:lr(j),chapter:S,month:ee,kind:"main",test:X,beats:w}),$.children.length){const P=Vi(j,ee),N=$.children.filter(Q=>ar(Q.text));if(P&&N.length){r[P]=r[P]||{pass:[],failId:"",failBeats:[]};for(const Q of N){const W=ar(Q.text),V=wn(Q.lines,{title:Q.text});W==="pass"?r[P].pass=V.beats:(r[P].failBeats=V.beats,r[P].failId=V.meta.ids[0]||"",V.meta.ids.length&&u({id:V.meta.ids[0],ids:V.meta.ids,title:Li(Q.text,V.beats),chapter:S,month:null,kind:"short",test:null,beats:V.beats}))}}}}continue}if(/^附篇一/.test(S)){for(const $ of k.children){const{beats:j,meta:K}=wn($.lines,{title:$.text}),z=K.cond||Et($.text)||{};u({id:K.ids[0]||"EVT_STYLE_"+f,ids:K.ids,title:lr($.text),chapter:S,month:null,kind:"style",test:z,beats:j})}continue}if(/^附篇二/.test(S)){for(const $ of k.children){const j=$.text.match(/^M(\d+)\s*[｜|]\s*(.+)$/);if(!j)continue;const K=Number(j[1]),z=$.lines.filter(X=>!/^\*\*第.+章互动/.test(X.trim())),Z=wn(z,{title:j[2]}),w=Z.meta.ids[0]||"EVT_FRIEND_M"+K,I={id:w,ids:Z.meta.ids.length?Z.meta.ids:[w],title:j[2],chapter:"与苏晴的每月互动",month:K,kind:"friend",test:null,beats:Z.beats};i[K]=I,u(I)}continue}if(/^第十三章/.test(S)){for(const $ of k.children){if(/^13\.7/.test($.text)){for(const z of $.children){const Z=Pu(z.text);if(!Z)continue;const w=[];for(const I of z.lines){const X=I.trim(),ee=X.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);ee?w.push({title:ee[1],text:(ee[2]||"").trim()}):w.length&&X&&!/^[-*#]/.test(X)&&(w[w.length-1].text+=X)}w.length&&(c[Z]=w)}continue}const{beats:j,meta:K}=wn($.lines,{title:$.text});K.ids.length&&u({id:K.ids[0],ids:K.ids,title:lr($.text),chapter:S,month:null,kind:"final",test:null,beats:j})}continue}if(/^第十四章/.test(S)){for(const $ of k.children)for(const j of $.lines){const K=j.trim(),z=K.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(z){const I=z[3].replace(/`/g,"").trim().replace(/^cake-/,"");I&&(o[I]={hint:z[4].trim(),flavor:z[5].trim()});continue}const Z=K.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);Z&&(l[Z[1]]=Z[2])}continue}}t.length||d.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const m={events:t,stages:r,friend:i,codex:o,cityText:l,partnerEndings:c,warnings:d};return m.find=k=>t.find(S=>S.id===k||(S.ids||[]).includes(k))||null,m}function lr(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function Li(e,n){const t=e.match(/《(.+?)》/);if(t)return t[1];const r=n.find(i=>i.t==="nar");return r?r.text.slice(0,12):e}function ar(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function Vi(e,n){const t=e.match(/第([一二三四五六])阶段/);return t?wu[t[1]]:n?Math.ceil(n/6):null}function Pu(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐鸢/.test(e)?"kexin":/叶星河/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}const Ie=Du(Eu);if(typeof console<"u"){const e={};Ie.events.forEach(r=>e[r.kind]=(e[r.kind]||0)+1);let n=0,t=0;Ie.events.forEach(r=>{(r.beats||[]).forEach(i=>{i.t==="choice"&&(n+=1,t+=i.options.length)})}),console.log("[剧情] 已加载 "+Ie.events.length+" 个事件（"+Object.keys(e).map(r=>r+" "+e[r]).join("，")+"），友情互动 "+Object.keys(Ie.friend).length+" 段，阶段结算 "+Object.keys(Ie.stages).length+" 组，选择 "+n+" 处 / "+t+" 项"),Ie.warnings.length&&Ie.warnings.forEach(r=>console.warn("[剧情] "+r))}const Nu=["清爽果香","绵甜柔和","醇厚浓香"],Ru=["偏少","均衡","偏多"],Fu=["简约点缀","日常装饰","丰富装饰"],Lu=[72,90,100],vl=[100,90,72],qs={taro:{direction:1,ratio:0,process:1,theme:"做出绵软、微甜，又有清脆夹心的层次。",focus:"芋泥夹层要先冷却，薄脆尽量靠近售卖时再组合。",ratioLabel:"芋泥甜度",processes:["趁热把薄脆拌进芋泥","芋泥冷却后分层夹入薄脆","把薄脆压碎拌入奶油"],distractors:["蜜红豆","轻盈慕斯"]},matcha:{direction:0,ratio:0,process:1,theme:"让茶香清新微苦，红豆甜味恰好托住回甘。",focus:"抹茶少量多次加入，避免高温久烤带出苦味。",ratioLabel:"抹茶用量",processes:["一次加入全部抹茶并延长烘烤","分次拌入抹茶并缩短烘烤","先加红豆再用热奶油冲抹茶"],distractors:["台农芒果泥","动物奶油"]},mango:{direction:0,ratio:1,process:2,theme:"突出成熟芒果的清香，同时保留慕斯的轻盈。",focus:"尝过果泥再调甜度，冷藏定型后再装饰。",ratioLabel:"果泥与慕斯比例",processes:["慕斯远多于果泥","果泥和慕斯大致平衡","大量果泥直接拌入温热慕斯"],distractors:["蜜红豆","轻奶油"]},tiramisu:{direction:2,ratio:1,process:1,theme:"咖啡香醇厚，但奶酪仍要保留轻柔回甘。",focus:"手指饼干快速蘸取咖啡液，留住内部结构。",ratioLabel:"咖啡液浓度",processes:["让饼干长时间浸泡","快速蘸取后分层冷藏","用咖啡液直接冲入奶酪"],distractors:["可可胚","金桂冻"]},fig:{direction:0,ratio:0,process:2,theme:"让无花果的清甜成为主角，奶油只做轻柔衬托。",focus:"选熟度合适的无花果，最后轻放在冷却奶油上。",ratioLabel:"无花果用量",processes:["无花果和奶油长时间打发","烤前放入无花果","奶油冷却后再铺鲜果"],distractors:["浓缩咖啡液","高山秋栗"]},seasonal:{direction:0,ratio:1,process:1,theme:"让当季水果有层次，甜度不盖住果香。",focus:"按季节更换鲜果，果肉与夹心分层组合。",ratioLabel:"鲜果与夹心比例",processes:["将所有水果打成同一层果泥","保留果肉并与夹心分层","增加糖浆并把水果提前烤干"],distractors:["传统红曲","蜜红豆"]},custom:{direction:1,ratio:1,process:0,theme:"按顾客想要的口味设计，同时保证切分时结构稳定。",focus:"先确认承重胚，再固定夹层和手工裱花。",ratioLabel:"夹层与蛋糕胚比例",processes:["使用双层承重胚，逐层固定裱花","把全部夹层叠在单层软胚上","先装饰外层再填入夹心"],distractors:["金桂冻","波姬红无花果"]},festival:{direction:1,ratio:1,process:2,theme:"在节日氛围里保留熟悉的团圆风味。",focus:"传统红曲或栗蓉搭配节庆装饰，出炉冷却后再包装。",ratioLabel:"馅料与蛋糕胚比例",processes:["热蛋糕出炉后立刻装入礼盒","把装饰和馅料一同长时间烘烤","冷却定型后装饰并包装"],distractors:["鲜草莓","浓缩咖啡液"]},signature:{direction:2,ratio:0,process:1,theme:"复原外婆的桂花栗子蛋糕，让秋栗醇厚、金桂清雅。",focus:"栗子甜则少放糖，桂花冻冷却后分层夹入，装盒前现撒金桂。",ratioLabel:"额外糖量",processes:["趁热把金桂干花拌进栗子泥","桂花冻冷却后作为独立夹层","桂花冻趁热浸入戚风胚"],distractors:["桂花蜜","动物奶油"]}},Ms={plain:{question:"原味奶油蛋糕切开后有些干，奶油也盖住了戚风的香气。",options:["增加糖浆并厚涂奶油","缩短烘烤，并减薄奶油层","延长烘烤，让外皮更脆"],correct:1,feedback:"先守住戚风的湿润度，再让奶油薄薄衬托。"},strawberry:{question:"顾客觉得奶油有些腻，草莓的酸甜味不够明显。",options:["减少奶油，增加草莓夹层","延长蛋糕胚烘烤时间","改变表面装饰颜色"],correct:0,feedback:"把奶油减薄，并增加草莓果味层。"},chocolate:{question:"巧克力蛋糕入口偏苦，回味也显得厚重。",options:["加入更多纯可可粉","减少甘纳许并调和可可浓度","增加烘烤时间让水分散尽"],correct:1,feedback:"适当收住甘纳许和可可的浓度，保留香气即可。"},taro:{question:"芋泥薄脆放一会儿就不脆了。",options:["把薄脆提前拌进热芋泥","芋泥冷却后分层，临近售卖再组合","把薄脆泡进奶油里"],correct:1,feedback:"减少水分接触，让薄脆临近售卖时再入层。"},matcha:{question:"抹茶的苦味有些突出，蜜红豆也不明显。",options:["增加红豆层并略减抹茶","增加抹茶粉并减少红豆","把红豆打成糖浆淋面"],correct:0,feedback:"略减抹茶浓度，让蜜红豆的甜味接住茶香。"},mango:{question:"芒果慕斯吃起来偏腻，果香不够明亮。",options:["增加慕斯比例","使用成熟芒果泥并平衡慕斯比例","延长烘烤芒果泥的时间"],correct:1,feedback:"用熟芒果的果香提亮口味，保持慕斯轻盈。"},tiramisu:{question:"提拉米苏底层的手指饼干湿软散开了。",options:["延长咖啡浸泡时间","快速蘸咖啡液后立即分层冷藏","增加咖啡液并拌入奶酪"],correct:1,feedback:"饼干快速蘸取咖啡液即可，避免吸水过多。"},fig:{question:"无花果奶油看起来漂亮，但吃不出鲜果香。",options:["增加奶油厚度","烘烤时加入更多无花果","冷却后铺上新鲜无花果"],correct:2,feedback:"最后加入新鲜果肉，保留无花果的香气和口感。"},seasonal:{question:"季节水果蛋糕层次混在一起，果味不够清楚。",options:["保留果肉并和夹心分层","把水果全部打成泥","增加糖浆覆盖水果"],correct:0,feedback:"保留果肉口感，再用独立夹层表现季节变化。"},custom:{question:"生日定制蛋糕切分时夹层容易倾斜。",options:["改用双层承重胚并逐层固定","增加顶部裱花重量","使用单层软胚并增加夹心"],correct:0,feedback:"先稳定承重结构，再逐层填入夹心和装饰。"},festival:{question:"节日限定蛋糕节庆感很足，味道却有些平淡。",options:["增加礼盒装饰层数","选择红曲或栗蓉馅料，冷却后再包装","延长礼盒内的回温时间"],correct:1,feedback:"用红曲或栗蓉明确节日风味，并在冷却后包装。"},signature:{question:"栗子甜度合适，但桂花香气不够鲜明。",options:["增加糖量并提前烤入桂花","桂花冻冷却分层，装盒前现撒金桂","把桂花干花打碎混进戚风胚"],correct:1,feedback:"沿用外婆手记：桂花冻冷却分层，装盒前再现撒金桂。"}};function $r(e){return[...new Set(Array.isArray(e)?e:[])].sort()}function gl(e,n){const t=$r(n);return(hl[e]||[]).some(r=>{const i=$r(r);return i.length===t.length&&i.every((o,l)=>o===t[l])})}function Vu({coreCorrect:e,directionCorrect:n,ratioOffset:t,processCorrect:r,decoration:i}){const o=[];return e||o.push("核对图鉴中的核心食材，选齐后再做风味判断。"),n||o.push("风味方向和产品主题不太协调。"),t&&o.push("调整主料比例，让主要食材的味道更突出。"),r||o.push("工艺还需要照顾这款蛋糕的口感结构。"),i===2&&o.push("装饰丰富，外观加分；制作成本也相应提高。"),i===0&&o.push("简约装饰控制了成本，可以再考虑提升展示效果。"),o.length||o.push("四项都很协调，可以考虑正式上架。"),o}function ju(e,n){const t=qs[e];if(!t)return null;const r=gl(e,n.ingredients),i=n.direction===t.direction,o=Math.abs(n.ratio-t.ratio),l=n.process===t.process,c=n.decoration;if(![0,1,2].includes(n.direction)||![0,1,2].includes(n.ratio)||![0,1,2].includes(n.process)||![0,1,2].includes(c))return null;const d=Math.max(0,(i?100:65)-o*15-(r?0:45)),f=l?100:60,u=Lu[c],p=vl[c],m=Math.round((d+f+u+p)/4);return{type:"development",productId:e,ingredients:$r(n.ingredients),direction:n.direction,ratio:n.ratio,process:n.process,decoration:c,coreCorrect:r,scores:{flavor:d,texture:f,appearance:u,cost:p},score:m,passed:r&&m>=75,refined:r&&m>=90,feedback:Vu({coreCorrect:r,directionCorrect:i,ratioOffset:o,processCorrect:l,decoration:c})}}function Bu(e){if(!e||![0,1,2].includes(e.sugar)||![0,1,2].includes(e.filling)||![0,1,2].includes(e.garnish))return null;const n=gl("signature",e.ingredients),t=e.sugar===0,r=e.filling===1,i=e.garnish===2,o={flavor:Math.max(0,(t?100:60)-(n?0:45)),texture:r?100:55,appearance:i?100:65,cost:n?90:65},l=Math.round(Object.values(o).reduce((d,f)=>d+f,0)/4),c=[];return n||c.push("请按手记选齐高山秋栗、金桂冻和戚风胚。"),t||c.push("甜栗本身够甜时，要减少额外糖量。"),r||c.push("桂花冻冷却后单独夹入，才能保留清楚的层次。"),i||c.push("装盒前现撒金桂，香气会更鲜明。"),c.length||c.push("外婆手记的风味与做法都复原了。"),{type:"signature",productId:"signature",ingredients:$r(e.ingredients),sugar:e.sugar,filling:e.filling,garnish:e.garnish,coreCorrect:n,scores:o,score:l,passed:n&&t&&r&&i&&l>=75,refined:n&&t&&r&&i&&l>=90,feedback:c}}function ji(e){const n=qs[e];return[...new Set([...(hl[e]||[]).flat(),...(n==null?void 0:n.distractors)||[]])]}function qu(e){return Ms[e]||null}const yl="alb-save-v6",Er=5,bl=60,_l=40;function Vn(){return{v:7,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,pantry:{base:12,dairy:8,decor:2,strawberry:2,cocoa:2},legacyStock:0,warehouseCapacity:120,ngpDiscountUsed:!1,devices:{},shelf:{},batches:[],plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:10,style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],dayPhase:"prep",service:null,productionMini:null,productionResult:null,staffAssignments:{picker:null,packer:null,auto:!1},challenge:null,challengeDayIndex:0,challengeDone:!1,decorations:[],regularCustomers:{chen:{purchases:0,lastPurchaseDay:0,stories:[]},zhang:{purchases:0,lastPurchaseDay:0,stories:[]}},runEndings:[],career:{products:["plain","strawberry","chocolate"],photos:[],decorations:[],endings:[],labReports:{},newGamePlusRuns:0},labPending:null,newGamePlus:!1,doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,monthSnap:{rep:20,unlocked:[],skill:{}},helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],photos:[],log:[],phase:"playing",ending:null,acquired:!1,autoStory:!1,sqchatMonth:0,stage:1,report:null}}const s=it(Vn()),sn=it({events:[]});function Br(e){return s.devices[e]||0}function Un(e){const n=Bs(e),t=Br(e);return t&&n?n.tiers[t-1].value:0}function kl(e){const n=Bs(e),t=Br(e);return n&&t<n.tiers.length?n.tiers[t]:null}function Hu(e){const n=kl(e);return!n||s.phase!=="playing"||s.dayPhase!=="prep"||s.cash<n.cost?!1:(s.cash-=n.cost,s.devices[e]=Br(e)+1,e==="warehouse"&&(s.warehouseCapacity=[120,180,240,320][s.devices[e]]),s.monthCost+=n.cost,pe("升级了"+Bs(e).name+"，"+n.text,"good"),ue(),!0)}const Kt=B(()=>Ke.filter(e=>s.unlocked.includes(e.id))),Xn=B(()=>s.stamina+bl+s.staff.length*_l+Un("oven")),xs=B(()=>Math.min(4,s.decorations.length)),qr=B(()=>Object.values(s.pantry||{}).reduce((e,n)=>e+Number(n||0),0));function Uu(e=s.plan){return Object.entries(e||{}).reduce((n,[t,r])=>{const i=yt[t]||{};return Object.entries(i).forEach(([o,l])=>{n[o]=(n[o]||0)+l*r}),n},{})}function Hs(e=s.plan){const n={};let t=s.legacyStock||0;return Object.entries(e||{}).forEach(([r,i])=>{for(let o=0;o<i;o++){if(t>=1){t-=1;continue}Object.entries(yt[r]||{}).forEach(([l,c])=>{n[l]=(n[l]||0)+c})}}),Object.keys(n).forEach(r=>{n[r]=Math.max(0,n[r]-((s.pantry||{})[r]||0))}),Object.fromEntries(Object.entries(n).filter(([,r])=>r>0))}function at(e,n=1){return(s.legacyStock||0)>=n?!0:Object.entries(yt[e]||{}).every(([t,r])=>((s.pantry||{})[t]||0)+1e-4>=r*n)}function Us(e,n=1){const t=yt[e]||{},r=Object.fromEntries(Object.entries(t).map(([i,o])=>[i,o*n]));return(s.legacyStock||0)>=n?(s.legacyStock=Math.round((s.legacyStock-n)*100)/100,!0):at(e,n)?(Object.entries(r).forEach(([i,o])=>{s.pantry[i]=Math.round(((s.pantry[i]||0)-o)*100)/100}),!0):!1}function Ku(e){if(s.phase!=="playing"||s.dayPhase!=="prep"||s.ap<1)return{ok:!1,message:"准备阶段需要 1 点行动力采购。"};const n=Object.entries(e||{}).filter(([,c])=>Number(c)>0);if(!n.length||n.some(([c,d])=>{const f=ut.find(u=>u.id===c);return!f||f.month>s.month||!Number.isInteger(Number(d))}))return{ok:!1,message:"请选择原料和整数购买数量。"};const t=Object.fromEntries(n.map(([c,d])=>[c,Number(d)])),r=Object.values(t).reduce((c,d)=>c+d,0),i=n.reduce((c,[d,f])=>c+ut.find(u=>u.id===d).price*f,0),o=s.newGamePlus&&!s.ngpDiscountUsed?Math.min(300,i):0,l=i-o;return qr.value+r>s.warehouseCapacity?{ok:!1,message:"仓库容量不足，请减少购买数量。"}:s.cash<l?{ok:!1,message:"资金不足。"}:(s.ap-=1,s.cash-=l,s.monthCost+=l,Object.entries(t).forEach(([c,d])=>{s.pantry[c]=(s.pantry[c]||0)+d}),s.newGamePlus&&!s.ngpDiscountUsed&&(s.ngpDiscountUsed=!0),pe("采购了 "+n.map(([c,d])=>ut.find(f=>f.id===c).name+" ×"+d).join("、")+(o?"，二周目优惠 ¥"+o:""),"good"),ue(),{ok:!0,message:"采购完成，共 ¥"+l+"。"})}function Wu(){const e=Hs(),n={};return Object.entries(e).forEach(([t,r])=>{n[t]=Math.ceil(r)}),n}function Ks(){return js.filter(e=>s.month>=e.month&&s.day===e.day)}function Gu(e){Ks().forEach(n=>{const t=s.regularCustomers[n.id];if(!e[n.product]||t.lastPurchaseDay===s.dayIndex)return;t.purchases+=1,t.lastPurchaseDay=s.dayIndex;const r=t.purchases===1?0:t.purchases===3?1:-1;r>=0&&!t.stories.includes(r)?(t.stories.push(r),pe(n.name+"和你聊起了老街坊的故事","story")):pe(n.name+"买走了一份"+Ee(n.product).name)})}function zu(){const e=Ke.filter(t=>t.month===s.month&&s.unlocked.includes(t.id)),n=[{type:"stock",target:""},{type:"custom",target:""}];return e.length&&n.push({type:"new",target:e[Math.floor(Math.random()*e.length)].id}),n[Math.floor(Math.random()*n.length)]}function Ml(){s.challengeDayIndex===s.dayIndex&&s.challenge||(s.challenge=zu(),s.challengeDayIndex=s.dayIndex)}function as(e,n,t){Object.entries(yt[n]||{}).forEach(([r,i])=>{e[r]=(e[r]||0)+i*t})}function Yu(e){return yu[s.prices[e]||"std"]}function Jt(e){const n=Ee(e),t=s.levels[e]||1;return Math.round(n.price*Yu(e).priceMul*(1+(t-1)*.05)*(1+Un("cashier")))}const xl=B(()=>700+s.shopLevel*180+s.staff.length*500),Hr=B(()=>xu(s.month)),Ln=B(()=>{const e=Hr.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const n=e.goals.map(t=>({text:t.text,done:t.check(s),expand:!!t.expand}));return{done:n.filter(t=>t.done).length,need:e.need,list:n}});function $l(){let e=0;for(const n of Object.keys(s.plan))e+=s.plan[n]*Ee(n).diff;return e}function ue(){try{Ws(),localStorage.setItem(yl,JSON.stringify(s))}catch{}}function Ju(){try{const e=localStorage.getItem(yl);if(!e)return!1;const n=JSON.parse(e);if(n.v!==6&&n.v!==7)return!1;const t=n.v===6;if(Object.keys(Vn()).forEach(i=>{n[i]!==void 0&&i!=="regularCustomers"&&i!=="career"&&(s[i]=n[i])}),n.v===6){s.pantry={};let i=Math.max(0,Number(n.stock||0));Object.entries(n.plan||{}).forEach(([f,u])=>{const p=Math.min(i,Math.max(0,Number(u)||0));p&&as(s.pantry,f,p),i-=p});const o=(n.unlocked||["plain"]).filter(f=>yt[f]),l=o.length?o:["plain"],c=Math.floor(i);for(let f=0;f<c;f++)as(s.pantry,l[f%l.length],1);const d=i-c;d&&l.forEach(f=>as(s.pantry,f,d/l.length)),s.legacyStock=0,s.cash+=Number(n.monthRev||0),s.v=7,s.dayPhase=n.daySold||n.dayRev?"closing":"prep",s.sqchatMonth=Number(n.friendMonth||0),s.batches=Object.entries(n.shelf||{}).filter(([,f])=>f>0).map(([f,u],p)=>({id:"migrated-"+p,product:f,qty:u,quality:"normal",decoration:null})),s.service=null,s.stock=void 0,delete s.friendship,delete s.friendMonth,s.ngpDiscountUsed=!1,s.challenge=null,s.challengeDayIndex=0}s.pantry=s.pantry||{},s.legacyStock=Number(s.legacyStock||0),s.batches=s.batches||[],s.staffAssignments={...Vn().staffAssignments,...s.staffAssignments||{}},s.dayPhase=s.dayPhase||"prep",s.regularCustomers=Object.fromEntries(js.map(i=>[i.id,{...Vn().regularCustomers[i.id],...(n.regularCustomers||{})[i.id]}])),s.career={...Vn().career,...n.career||{}},s.career.labReports={...Vn().career.labReports,...(n.career||{}).labReports||{}},s.challengeDayIndex=Number(s.challengeDayIndex||0);const r=s.dayPhase==="prep"&&(!s.challenge||s.challengeDayIndex!==s.dayIndex);return r&&Ml(),Ws(),(t||r)&&ue(),!0}catch{return!1}}function El(){const e={...Ws()};Object.assign(s,Vn()),s.career=e,sn.events.length=0,s.monthSnap={rep:s.reputation,unlocked:s.unlocked.slice(),skill:Object.assign({},s.partnerSkill)},Wr(),ue()}function Ws(){const e=s.career||Vn().career;return e.products=[...new Set([...e.products||[],...s.unlocked||[]])],e.photos=[...new Set([...e.photos||[],...s.photos||[]])],e.decorations=[...new Set([...e.decorations||[],...s.decorations||[]])],s.phase==="ended"&&s.ending&&s.ending.key&&(s.runEndings=[...new Set([...s.runEndings||[],s.ending.key])],e.endings=[...new Set([...e.endings||[],s.ending.key])]),s.career=e,e}function Cl(e,n,t){const r=s.career.labReports[e]||{};s.career.labReports[e]={...r,[n]:{...t,run:(s.career.newGamePlusRuns||0)+1,month:s.month}}}function Me(e,n){return{ok:e,message:n}}function Bi(e){if(s.phase!=="playing")return Me(!1,"当前不能进行实验。");if(s.dayPhase!=="prep")return Me(!1,"营业开始后不能进行研发。");if(s.labPending)return Me(!1,"请先处理上次试吃结果。");if(s.ap<2)return Me(!1,"至少需要 2 点行动力：试吃消耗 1 点，合格后上架还需 1 点。");const n=e&&e.productId,t=Ke.find(i=>i.id===n);if(!t||s.unlocked.includes(n)||t.month<=0||t.month>s.month)return Me(!1,"这款产品还未开放研发，或已经上架。");if(n==="signature"&&(!e||e.type!=="signature"))return Me(!1,"桂花栗子蛋糕需要进入 M26 专属复原。");const r=n==="signature"?Bu(e):ju(n,e||{});return r?Us(n,.25)?(s.ap-=1,s.labPending=r,pe("试做「"+t.name+"」消耗 1 点行动力和四分之一配方材料","story"),ue(),Me(!0,"试吃完成。")):Me(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。"):Me(!1,"实验参数不完整，请检查每一项选择。")}function Qu(){const e=s.labPending;if(s.dayPhase!=="prep")return Me(!1,"请在营业开始前完成上架。");if(s.phase!=="playing"||!e||!e.passed)return Me(!1,"这份试吃结果还未达到上架要求。");if(s.ap<1)return Me(!1,"行动力不足；试吃结果已保存，明天可以继续。");const n=Ke.find(t=>t.id===e.productId);return!n||n.month>s.month||s.unlocked.includes(e.productId)?Me(!1,"产品状态已变化，请返回实验室确认。"):(s.ap-=1,s.unlocked.push(n.id),s.levels[n.id]=e.refined?1.5:1,Cl(n.id,"development",{...e,type:e.type==="signature"?"signature":"development",feedback:e.type==="signature"?["外婆配方复原成功，桂香与秋栗的层次都找回来了。"]:e.feedback}),s.labPending=null,pe("「"+n.name+"」研发完成并正式上架，"+(e.refined?"精制品质，熟练度 Lv1.5":"熟练度 Lv1"),"good"),ue(),Me(!0,n.name+(e.type==="signature"?"复原成功，已加入菜单。":"已正式上架。")))}function qi(){return s.labPending?(s.labPending=null,ue(),!0):!1}function Zu(e,n){if(s.phase!=="playing")return Me(!1,"当前不能进行改良。");if(s.dayPhase!=="prep")return Me(!1,"营业开始后不能进行改良。");const t=Ke.find(l=>l.id===e),r=qu(e);if(!t||!r||!s.unlocked.includes(e))return Me(!1,"这款产品目前不能改良。");const i=s.levels[e]||1;if(i>=5)return Me(!1,"这款产品已达到熟练度上限。");if(!Number.isInteger(n)||n<0||n>=r.options.length)return Me(!1,"请选择一个改良方案。");if(s.ap<2)return Me(!1,"至少需要 2 点行动力完成一次改良。");if(!Us(e,.25))return Me(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。");if(s.ap-=1,n!==r.correct){const l="这次试吃没有解决问题。"+r.feedback;return pe("改良「"+t.name+"」未通过试吃，消耗了四分之一配方材料","story"),ue(),{...Me(!1,l),retry:!0,feedback:l}}s.ap-=1,s.levels[e]=Math.min(5,i+1),s.style.innovation+=3;const o={type:"improvement",score:100,levelBefore:i,levelAfter:s.levels[e],feedback:[r.feedback]};return Cl(e,"improvement",o),pe("改良「"+t.name+"」成功，熟练度提升至 Lv"+s.levels[e],"good"),ue(),{...Me(!0,r.feedback),feedback:r.feedback,level:s.levels[e]}}function Xu(){return s.phase!=="ended"||!s.ending?!1:(El(),s.newGamePlus=!0,s.ngpDiscountUsed=!1,s.career.newGamePlusRuns=(s.career.newGamePlusRuns||0)+1,ue(),!0)}function ed(){if(s.phase!=="playing")return!1;const e=s.month;for(;s.month===e&&s.phase==="playing";)s.dayPhase="closing",s.service={tickets:[],current:0},Dl("waste");return s.month!==e}function nd(){const e=vt.find(n=>!n.final&&n.short.key===(s.ending&&s.ending.key));return s.phase!=="ended"||!e?!1:(s.phase="playing",s.ending=null,s.stamina=s.maxStamina,Wr(),zs(),ue(),!0)}function td(e){const n=Vs.find(t=>t.id===e);return!n||s.phase!=="playing"||s.dayPhase!=="prep"||s.decorations.includes(e)||s.shopLevel<n.shopLevel||s.cash<n.cost?!1:(s.cash-=n.cost,s.monthCost+=n.cost,s.decorations.push(e),pe("添置了"+n.name+"，店铺舒适度 +1","good"),ue(),!0)}function pe(e,n){s.log.unshift({month:s.month,day:s.day,text:e,tone:n||"normal"}),s.log.length>60&&s.log.pop()}function we(e){return Math.max(0,Math.min(100,e))}function rd(e){const n=[];for(const t of e)if(t.kind==="num"){const r=t.value;switch(t.key){case"资金":s.cash=Math.max(0,s.cash+r);break;case"口碑":s.reputation=we(s.reputation+r);break;case"知名度":s.popularity=we(s.popularity+r);break;case"友情值":break;case"门店":s.storeCount=Math.max(1,s.storeCount+r);break;case"员工":r>0&&ad();break;case"烘焙":sd(r*.2);break;case"品质":id(r*.05);break}n.push(t.key+(r>=0?"+":"")+r)}else t.key==="配方"?s.unlocked.includes(t.value)||(s.unlocked.push(t.value),n.push("解锁「"+Ee(t.value).name+"」")):t.key==="照片"&&(s.photos.includes(t.value)||(s.photos.push(t.value),n.push("获得纪念照片")));return n}function sd(e){const t=s.unlocked.slice().sort((r,i)=>(s.levels[r]||1)-(s.levels[i]||1))[0];t&&(s.levels[t]=Math.min(5,(s.levels[t]||1)+e))}function id(e){s.unlocked.forEach(n=>{s.levels[n]=Math.min(5,(s.levels[n]||1)+e)})}function od(e){const n=[];for(const t of e||[]){switch(t.k){case"style":s.style[t.id]=(s.style[t.id]||0)+t.v;break;case"trust":if(!t.id)break;s.partnerTrust[t.id]=we((s.partnerTrust[t.id]||0)+t.v);break;case"skill":if(!t.id)break;s.partnerSkill[t.id]=Math.min(5,Math.round(((s.partnerSkill[t.id]||1)+t.v)*10)/10);break;case"loyalty":s.loyalty=we(s.loyalty+t.v);break}t.k!=="friend"&&t.label&&n.push(t.label)}return n}function ld(e,n,t){const r=od(n.gains);return e&&e.node==="13.6"&&t===1&&(s.acquired=!0),r.length&&pe("选择："+n.label+"（"+r.join("，")+"）","story"),ue(),r}function wl(e){if(!e||s.staff.includes(e))return;s.staff.push(e),s.partnerTrust[e]===void 0&&(s.partnerTrust[e]=10),s.partnerSkill[e]===void 0&&(s.partnerSkill[e]=1);const n=pt(e);n&&pe(n.name+" 加入了林记","story")}function ad(){const e=ht.find(n=>!s.staff.includes(n.id)&&n.joinMonth<=s.month);e&&wl(e.id)}function Sl(){return s.staff.map(e=>pt(e)).filter(Boolean)}const Hi={feedback:5,market:3,talk:2,train:5};function cd(e){const n=s.cd[e]||0;return Math.max(0,n-s.dayIndex)}function On(e){switch(e){case"restock":return{name:"原料采购",ap:1,cost:0,note:"请前往老街食材铺选择原料",disabled:!0};case"feedback":{const n=cd("feedback");return{name:"顾客反馈",ap:1,cost:0,note:n>0?"还要等 "+n+" 天":"口碑 +1，忠诚 +2",disabled:n>0}}case"talk":{const n=s.staff.length?Sl()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:n?"和 "+n+" 聊聊，信赖 +6":"和妈妈聊聊，家庭默契 +4"}}case"sqchat":{const n=s.sqchatMonth===s.month;return{name:"与苏晴互动",ap:1,cost:0,note:n?"这个月已经聊过了":"本月专属相处剧情",disabled:n}}case"market":return{name:"市场宣传",ap:2,cost:800,note:"知名度 +3，品牌 +2",disabled:s.cash<800};case"train":return s.staff.length?{name:"员工培训",ap:2,cost:400,note:"选一位伙伴，专业 +1",disabled:s.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const n=Ut.find(t=>t.lv===s.shopLevel+1);return n?{name:"装修到「"+n.name+"」",ap:2,cost:n.cost,note:"展示位与产能提升",disabled:s.cash<n.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const n=mt.find(r=>!s.cities.includes(r.id)&&!s.surveyed.includes(r.id));if(!n)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const t=s.month>=n.month&&s.reputation>=n.rep;return{name:"考察"+n.name,ap:2,cost:2e3,note:t?"考察之后可以筹备开店":"需要第 "+n.month+" 个月、口碑 "+n.rep,disabled:!t||s.cash<2e3}}case"branch":{if(!s.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const n=mt.find(t=>t.id===s.surveyed[0]);return{name:"在"+n.name+"开店",ap:3,cost:n.cost,note:"门店 +1",disabled:s.cash<n.cost}}default:return{name:e,ap:1,cost:0,note:""}}}function gt(e,n){if(s.phase!=="playing"||s.dayPhase!=="prep")return!1;const t=On(e);if(t.disabled||s.ap<t.ap||t.cost&&s.cash<t.cost)return!1;const r=s.cash;switch(e){case"restock":return!1;case"feedback":s.reputation=we(s.reputation+1),s.loyalty=we(s.loyalty+2),pe("认真听了顾客的意见，口碑上升");break;case"talk":if(n&&n.partner==="mom")s.momBond=we(s.momBond+4),pe("和妈妈聊了一会儿，家庭默契 +4");else if(s.staff.length){const i=n&&n.partner?n.partner:s.staff[0];if(!s.staff.includes(i))return!1;s.partnerTrust[i]=we((s.partnerTrust[i]||0)+6);const o=pt(i);pe("和 "+(o?o.nick:"伙伴")+" 聊了很久，信赖 +6")}else s.momBond=we(s.momBond+4),pe("和妈妈聊了一会儿，家庭默契 +4");break;case"sqchat":{const i=Ie.friend[s.month];if(!i)break;s.sqchatMonth=s.month,s.autoStory=!0,rt(i),pe("和苏晴度过了一段只属于两人的时间");break}case"market":s.cash-=800,s.popularity=we(s.popularity+2),s.brand=we(s.brand+1.5),pe("发了新品帖子，知名度上升");break;case"train":{if(!s.staff.length)return!1;const i=n&&n.partner?n.partner:s.staff[0];s.cash-=400,s.partnerSkill[i]=Math.min(5,(s.partnerSkill[i]||1)+1);const o=pt(i);pe("培训了 "+(o?o.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const i=Ut.find(o=>o.lv===s.shopLevel+1);if(!i)return!1;s.cash-=i.cost,s.shopLevel=i.lv,s.maxAp=8+(i.ap||0),s.reputation=we(s.reputation+3),s.style.community+=2,pe("店铺升级为「"+i.name+"」","good");break}case"survey":{const i=mt.find(o=>!s.cities.includes(o.id)&&!s.surveyed.includes(o.id));if(!i)return!1;s.cash-=2e3,s.surveyed.push(i.id),pe("去"+i.name+"看了一圈，可以筹备开店了");break}case"branch":{const i=mt.find(o=>o.id===s.surveyed[0]);if(!i)return!1;s.cash-=i.cost,s.storeCount+=1,s.cities.push(i.id),s.surveyed=s.surveyed.filter(o=>o!==i.id),s.brand=we(s.brand+6),s.style.efficiency+=3,pe("在"+i.name+"开了新店","good");break}default:return!1}return s.ap-=t.ap,Hi[e]&&(s.cd[e]=s.dayIndex+Hi[e]),r>s.cash&&(s.monthCost+=r-s.cash),ue(),!0}function ud(e,n){if(s.dayPhase!=="prep"||!s.unlocked.includes(e))return;const t=Math.max(0,Math.min(12,Math.floor(n||0)));t===0?delete s.plan[e]:s.plan[e]=t,ue()}function $s(){if(s.phase!=="playing"||s.dayPhase!=="prep")return{ok:!1,msg:"当前不是制作阶段。"};if(!s.productionResult)return{ok:!1,msg:"先完成或跳过主打蛋糕小游戏。"};const e=Object.keys(s.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const n=e.reduce((l,c)=>l+s.plan[c],0),t=Hs();if(Object.keys(t).length)return{ok:!1,msg:"原料不足："+Object.entries(t).map(([l,c])=>ut.find(d=>d.id===l).name+" ×"+Math.ceil(c)).join("、")};const r=$l();if(r>Xn.value)return{ok:!1,msg:"产能不够。今天的产能是 "+Xn.value+" 点，还差 "+(r-Xn.value)};const i=bl+s.staff.length*_l+Un("oven"),o=Math.round(Math.max(0,r-i)*(1-Un("mixer")));for(const l of e)for(let c=0;c<s.plan[l];c++)Us(l,1);s.stamina=Math.max(0,s.stamina-o);for(const l of e)s.shelf[l]=(s.shelf[l]||0)+s.plan[l],s.dayMade+=s.plan[l],s.levels[l]=Math.min(5,(s.levels[l]||1)+s.plan[l]*.02),s.batches.push({id:"b"+s.dayIndex+"-"+l+"-"+s.batches.length,product:l,qty:s.plan[l],quality:l===s.productionResult.product?s.productionResult.quality:"normal",decoration:l===s.productionResult.product?s.productionResult.decoration:null});return pe("做了 "+n+" 个蛋糕，自己出了 "+o+" 点体力"),s.plan={},s.productionMini=null,s.productionResult=null,s.dayPhase="service-ready",ue(),{ok:!0,msg:"做好了 "+n+" 个"}}const Ui=["mix","oven","piping","fruit"];function dd(){if(s.dayPhase!=="prep"||s.productionMini||!Object.keys(s.plan).length)return!1;const e=Object.keys(s.plan).sort((n,t)=>s.plan[t]-s.plan[n])[0];return s.productionMini={type:Ui[Math.floor(Math.random()*Ui.length)],product:e,window:58+Math.floor(Math.random()*20),pattern:Math.floor(Math.random()*3)},ue(),!0}function Ki(e=0,n=!1,t=null){const r=s.productionMini;if(!r||s.productionResult)return{ok:!1,message:"制作小游戏已结算。"};const i=n?0:Math.max(0,Math.min(100,Math.round(e)));return s.productionResult={product:r.product,quality:i>=90?"perfect":i>=70?"fine":"normal",score:i,priceBonus:i>=90?.1:i>=70?.05:0,decoration:t},s.productionMini=null,ue(),$s()}function fd(){s.orders=[];const e=Math.min(.9,.55+s.popularity/350),n=1+(Math.random()<e?1:0);for(let t=0;t<n;t++){const r=Kt.value;if(!r.length)break;const i=r[Math.floor(Math.random()*r.length)],o=Math.random(),l=o<.35,c=!l&&o<.68,d=!l&&!c&&o<.8,f=l?"定制":c?"线上":d?"节日":"普通",u=l?1:1+Math.floor(Math.random()*3);s.orders.push({id:"o"+s.month+"-"+s.day+"-"+t,type:f,customer:l?"预约顾客":c?"线上顾客":d?"节日顾客":"附近顾客",product:i.id,qty:u,pay:Math.round(Jt(i.id)*u*(l?1.6*(1+Un("packing")):c?1.25:1)),due:l?["粉色小花","清爽配色","简洁裱花"][Math.floor(Math.random()*3)]:"",blessing:l?["生日快乐","愿你每天都有好心情","把今天的甜分享给你"][Math.floor(Math.random()*3)]:"",taken:!1})}}function hd(e){if(s.dayPhase!=="prep")return!1;const n=s.orders.find(t=>t.id===e);return n?(n.taken=!n.taken,ue(),!0):!1}function Il(e,n=1){const t=s.batches.filter(r=>r.product===e&&r.qty>0);return t.reduce((r,i)=>r+i.qty,0)>=n?t[0]:null}function pd(e,n){const t=s.batches.filter(o=>o.product===e&&o.qty>0);if(t.reduce((o,l)=>o+l.qty,0)<n)return[{qty:n,quality:"normal"}];let r=n;const i=[];for(const o of t){const l=Math.min(r,o.qty);if(l&&(o.qty-=l,i.push({qty:l,quality:o.quality||"normal"}),r-=l,!r))break}return r?[{qty:n,quality:"normal"}]:i}function md(){var u;if(s.phase!=="playing"||s.dayPhase!=="service-ready"||s.service)return null;const e={tickets:[],current:0,unhappy:0,startedAt:Date.now(),automationUnlocked:Ur()},n=s.orders.filter(p=>p.taken);n.forEach(p=>{const m=30+5*(p.qty-1);e.tickets.push({...p,kind:"appointment",status:"waiting",patience:m,remaining:m,customSatisfied:!0})});const t=Math.max(1,Math.min(4,s.shopLevel)),r=[[3,5],[5,7],[7,9],[9,12]],[i,o]=r[t-1],l=i+Math.floor(Math.random()*(o-i+1)),c=Math.max(0,s.reputation-20)/240+Math.max(0,s.popularity-10)/350+Math.max(0,s.loyalty-20)/400,d=Math.max(i,Math.min(o,Math.round(l*(1+c+xs.value*.02+Un("display"))))),f=Math.max(1,d-n.length);for(let p=0;p<f;p++){const m=Ks().find(K=>p===0),k=Kt.value,S=m?Ee(m.product):k[Math.floor(Math.random()*k.length)],$=1+Math.floor(Math.random()*3),j=30+5*($-1);e.tickets.push({id:"visit-"+s.dayIndex+"-"+p,kind:"walkin",type:m?"熟客":"到店",customer:m?m.name:["附近居民","学生顾客","路过的客人","带孩子的家长","年轻客人"][Math.floor(Math.random()*5)],product:S.id,qty:$,pay:Jt(S.id)*$,clue:m?"我还是想买那款熟悉的蛋糕。":gd(S.id),due:"",blessing:"",status:"waiting",patience:j,remaining:j,customSatisfied:!0})}return s.orders=[],s.service=e,s.dayPhase="service",e.activeTicketId=((u=e.tickets[0])==null?void 0:u.id)||null,e.automationUnlocked&&s.staffAssignments.auto&&xd(),ue(),{customers:e.tickets.length}}const vd={plain:"想吃一款奶油薄一点、味道熟悉的经典蛋糕。",strawberry:"今天想买草莓酸甜口的奶油蛋糕。",chocolate:"有偏浓的可可味蛋糕吗？",taro:"想尝尝芋泥和脆脆夹心的搭配。",matcha:"有清香的茶味吗？希望甜度低一些。",mango:"想要清爽一点的芒果甜点。",tiramisu:"今天想吃咖啡味和奶酪味的蛋糕。",fig:"有没有放新鲜水果、奶油又轻一点的蛋糕？",seasonal:"想挑一款能尝到当季水果的蛋糕。",custom:"想订一份适合庆祝的精致蛋糕。",festival:"最近过节，想带一份有节日气氛的点心。",signature:"听说有桂花和栗子的秋日招牌。"};function gd(e){return vd[e]||"想挑一款店里受欢迎的蛋糕。"}function Ur(){return s.shopLevel>=3&&s.staff.filter(e=>(s.partnerSkill[e]||1)>=3).length>=3}function bt(e=s.service){if(!e)return[];const n=Math.max(1,Math.min(3,s.shopLevel));return e.tickets.slice(e.current,e.current+n).filter(t=>!["delivered","unavailable"].includes(t.status))}function Kr(e=s.service){const n=bt(e);return n.find(t=>t.id===(e==null?void 0:e.activeTicketId))||n[0]||null}function yd(e){return s.dayPhase!=="service"||!s.service||!bt().some(n=>n.id===e)?!1:(s.service.activeTicketId=e,ue(),!0)}function Tl(e){var n;for(;e.current<e.tickets.length&&["delivered","unavailable"].includes(e.tickets[e.current].status);)e.current+=1;e.activeTicketId=((n=bt(e)[0])==null?void 0:n.id)||null}function Wi(e){if(s.phase!=="playing"||s.dayPhase!=="prep")return!1;const n=new Set(s.staff),t={picker:null,packer:null,auto:!1,...e||{}};return t.picker&&!n.has(t.picker)&&(t.picker=null),t.packer&&!n.has(t.packer)&&(t.packer=null),t.picker&&t.picker===t.packer&&(t.packer=null),Ur()||(t.auto=!1),s.staffAssignments=t,ue(),!0}function bd(e,n,t){if(s.dayPhase!=="service"||!s.service)return{ok:!1,message:"現在不是营业接待阶段。"};const r=Kr();if(!r||r.id!==e||r.status!=="waiting")return{ok:!1,message:"这位顾客的订单已在处理。"};if(n!==r.product)return{ok:!1,message:"口味不符合顾客需求，再找找看。"};if(t!==r.qty)return{ok:!1,message:"请按顾客的数量要求找蛋糕。"};if((s.shelf[n]||0)<t)return{ok:!1,message:"展示柜里的数量不够。"};if(bt().filter(o=>o.status==="searching").length>=1+(s.staffAssignments.picker?1:0))return{ok:!1,message:"找货工位正忙，先支援或处理另一位顾客。"};const i=Il(n,t);return i?(r.selected=n,r.selectedQty=t,r.packBatchId=i.id,r.findRemaining=2/Al("picker"),r.status="searching",ue(),{ok:!0,message:"在展示柜里找蛋糕。"}):{ok:!1,message:"展示柜里找不到这批蛋糕。"}}function _d(e,n=null,t=null){if(s.dayPhase!=="service"||!s.service)return{ok:!1,message:"現在不是营业接待阶段。"};const r=Kr();return!r||r.id!==e||r.status!=="found"?{ok:!1,message:"先从展示柜取出正确的蛋糕。"}:r.type==="定制"&&n!==r.due?{ok:!1,message:"装饰还没有符合预订要求。"}:r.type==="定制"&&t!==r.blessing?{ok:!1,message:"祝福语还没有符合预订要求。"}:bt().filter(i=>i.status==="packing").length>=1+(s.staffAssignments.packer?1:0)?{ok:!1,message:"打包工位正忙，先支援或处理另一位顾客。"}:(r.decoration=n,r.packedBlessing=t,r.packRemaining=(2+r.qty)*Math.max(.6,1-Un("packing"))/Al("packer"),r.status="packing",ue(),{ok:!0,message:"开始打包。"})}function Al(e){const n=s.staffAssignments&&s.staffAssignments[e];return n&&s.staff.includes(n)?1+Math.max(0,(s.partnerSkill[n]||1)-1)*.15:1}function kd(e=1){if(s.dayPhase!=="service"||!s.service)return;const n=Math.max(0,e);bt().forEach(t=>{if(t.remaining=Math.max(0,t.remaining-n),t.status==="searching"&&(t.findRemaining=Math.max(0,t.findRemaining-n),t.findRemaining===0&&(t.status="found")),t.status==="packing"&&(t.packRemaining=Math.max(0,t.packRemaining-n),t.packRemaining===0&&(t.status="ready")),t.remaining===0&&!t.unhappy){t.unhappy=!0,s.service.unhappy+=1;const r=Math.min(.1,Math.max(0,.5-(s.dayReputationLoss||0)));s.dayReputationLoss=(s.dayReputationLoss||0)+r,s.reputation=we(s.reputation-r),pe(t.customer+"等得有些久，耐心少了一点。","bad")}}),Math.floor(Date.now()/1e3)!==s.service.lastSavedSecond&&(s.service.lastSavedSecond=Math.floor(Date.now()/1e3),ue())}function Ol(e){if(s.dayPhase!=="service"||!s.service)return{ok:!1,message:"营业已结束。"};const n=s.service,t=Kr(n);if(!t||t.id!==e||t.status!=="ready")return{ok:!1,message:"蛋糕还没包好。"};if((s.shelf[t.product]||0)<t.qty)return{ok:!1,message:"展示柜里的数量不够。"};const r=pd(t.product,t.qty);s.shelf[t.product]-=t.qty;const i=t.pay/t.qty,o=Math.round(r.reduce((l,c)=>l+i*c.qty*(c.quality==="perfect"?1.1:c.quality==="fine"?1.05:1),0));return s.cash+=o,s.dayRev+=o,s.monthRev+=o,s.daySold+=t.qty,s.monthSold[t.product]=(s.monthSold[t.product]||0)+t.qty,s.doneOrders+=1,t.type==="定制"&&(s.customOrders+=1),t.type==="线上"&&(s.onlineOrders+=1),t.type==="节日"&&(s.festivalOrders+=1),(t.customer==="陈奶奶"||t.customer==="张叔")&&Gu({[t.product]:t.qty}),s.loyalty=we(s.loyalty+.15),s.popularity=we(s.popularity+.02),t.status="delivered",pe("交付「"+Ee(t.product).name+"」×"+t.qty+"，收入 ¥"+o+" 已到账","good"),t.type==="定制"&&(n.customDone=(n.customDone||0)+1),s.challenge&&s.challenge.type==="new"&&s.challenge.target===t.product&&(n.challengeNewSold=(n.challengeNewSold||0)+t.qty),Tl(n),Gs(),ue(),{ok:!0,message:t.customer+"收下了蛋糕，¥"+o+" 已到账。"}}function Md(e){const n=s.service,t=Kr(n);return!t||t.id!==e||s.dayPhase!=="service"?!1:(t.status="unavailable",Tl(n),Gs(),ue(),!0)}function xd(){const e=s.service;if(e){for(;e.current<e.tickets.length;){const n=e.tickets[e.current];if(e.activeTicketId=n.id,(s.shelf[n.product]||0)<n.qty){n.status="unavailable",e.current+=1;continue}n.status="ready",n.packBatchId=(Il(n.product,n.qty)||{}).id,Ol(n.id)}Gs()}}function Gs(){const e=s.service;if(!e||e.current<e.tickets.length)return;s.dayPhase="closing";const n=e.tickets.filter(t=>t.status==="delivered").length;if(n&&(s.reputation=we(s.reputation+.06),s.loyalty=we(s.loyalty+.1)),!s.challengeDone&&s.challenge){const t=s.daySold,r=Object.values(s.shelf).reduce((o,l)=>o+l,0),i=s.challenge.type==="stock"?r/Math.max(1,t+r)<=.1:s.challenge.type==="new"?(e.challengeNewSold||0)>=3:(e.customDone||0)>0;if(i){const o=Math.round(s.dayRev*.05);s.cash+=o,s.dayRev+=o,s.monthRev+=o,pe("今日经营挑战完成，额外收入 ¥"+o,"good")}s.challengeDone=!0,pe("今日经营挑战："+(i?"完成":"未完成"),i?"good":"normal")}pe("营业结束，完成 "+n+" / "+e.tickets.length+" 位顾客","good"),ue()}const Es={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function Dl(e){if(s.phase!=="playing"||s.dayPhase!=="closing")return null;const n=Es[e]||Es.discount;let t=0,r=0;for(const l of Object.keys(s.shelf))t+=s.shelf[l]||0,r+=(s.shelf[l]||0)*Jt(l);let i=0;if(t>0){const l=n.cashRate>0?n.cashRate+Un("fridge"):0;i=Math.round(r*l),s.cash+=i,n.community&&(s.style.community+=n.community*.3,s.reputation=we(s.reputation+n.community*.05))}s.dayLeft=t,s.shelf={},s.batches=[];const o={day:s.day,rev:s.dayRev,sold:s.daySold,left:t,gain:i};return s.dayRev=0,s.daySold=0,s.dayMade=0,s.dayPhase="report",s.service=null,$d(),ue(),o}function $d(){s.day+=1,s.dayIndex+=1,s.day>Er?(s.day=1,Ed()):Wr()}function Wr(){s.ap=s.maxAp,s.stamina=Math.min(s.maxStamina,s.stamina+70),s.plan={},s.dayPhase="prep",s.service=null,s.productionMini=null,s.productionResult=null,s.dayReputationLoss=0,s.challengeDone=!1,Ml(),s.shelf||(s.shelf={}),fd(),ue()}function Ed(){const e=xl.value;s.monthCost+=e,s.cash-=e;let n=null;s.cash<0&&(s.usedMomHelp?(s.cash=0,s.reputation=we(s.reputation-2),n="这个月很难，勉强撑过去了"):(s.cash=3e3,s.usedMomHelp=!0,n="资金见底，妈妈先垫了一笔周转"),pe(n,"bad"));let t=null,r=0;Object.keys(s.monthSold).forEach(f=>{s.monthSold[f]>r&&(r=s.monthSold[f],t=f)});const i=s.monthSnap||{rep:s.reputation,unlocked:[],skill:{}},o=s.unlocked.filter(f=>i.unlocked.indexOf(f)<0),l=[];s.staff.forEach(f=>{const u=i.skill[f]||0,p=s.partnerSkill[f]||0;if(p-u>=.3){const m=pt(f);l.push((m?m.nick||m.name:f)+" 专业 +"+(p-u).toFixed(1))}}),s.report={month:s.month,rev:s.monthRev,cost:s.monthCost,net:s.monthRev-s.monthCost,best:t?Ee(t).name:"—",bestN:r,warn:n,fresh:o.map(f=>(Ee(f)||{}).name).filter(Boolean),repDelta:Math.round((s.reputation-i.rep)*10)/10,rep:Math.round(s.reputation),grown:l,trust:Object.keys(s.partnerTrust).map(f=>{const u=pt(f);return{name:u?u.nick||u.name:f,v:Math.round(s.partnerTrust[f]||0)}})},s.monthSnap={rep:s.reputation,unlocked:s.unlocked.slice(),skill:Object.assign({},s.partnerSkill)};const c=s.month;if(s.month+=1,s.monthRev=0,s.monthCost=0,s.monthSold={},s.shelf={},ht.forEach(f=>{f.joinMonth===s.month&&wl(f.id)}),c===29){const f=Object.values(s.partnerTrust).filter(u=>u>=70).length;s.helpers=f+(s.momBond>=70?1:0)}const d=vt.find(f=>f.to===c&&!f.final);if(d){const f=Ie.stages[d.id];if(!wd(d)){s.phase="ended",s.ending={...d.short,key:d.short.key,text:""},f&&f.failId&&rt(Ie.find(f.failId)),pe("阶段目标没有达成","bad"),ue();return}s.stage=d.id+1,f&&f.pass.length&&rt({id:"STAGE_PASS_"+d.id,title:d.name+" · 阶段达成",chapter:d.name,kind:"stage",beats:f.pass}),pe("第 "+d.id+" 阶段目标达成","good")}if(s.month>36){s.month=36,s.phase="ended";const f=Sd();s.ending={...ml[f],key:f},rt(Ie.find(Cd[f])),ue();return}s.stamina=s.maxStamina,Wr(),zs()}const Cd={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function wd(e){if(!e.goals.length)return!0;const n=e.goals.filter(t=>t.check(s));return!(n.length<e.need||e.needExpand&&!n.some(t=>t.expand))}function Sd(){if(s.acquired)return"transfer";if(s.storeCount>=6)return"national";if(s.storeCount>=3)return"regional";const e=s.style,n=Object.keys(e).sort((r,i)=>e[i]-e[r])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[n]||"community"}function rt(e){e&&(sn.events.find(n=>n.id===e.id)||sn.events.push(e))}function zs(){const e=Ie.events.filter(n=>!(n.kind!=="main"||s.played.includes(n.id)||n.month==null||s.month<n.month||n.test&&!ks(n.test,s)));e.sort((n,t)=>n.month-t.month||n.order-t.order),e.forEach(rt),Ie.events.filter(n=>n.kind==="style"&&!s.played.includes(n.id)&&ks(n.test,s)).forEach(rt)}function cs(){const e=Ie.events.find(n=>n.kind==="prologue");e&&!s.played.includes(e.id)&&rt(e),zs()}function Id(e){(e.ids&&e.ids.length?e.ids:[e.id]).forEach(r=>{s.played.includes(r)||s.played.push(r)}),rd(e.rewards||[]).length&&pe("剧情："+e.title,"story"),ue()}function Gi(e){const n=(Ie.partnerEndings||{})[e];if(!n||!n.length)return null;if(n.length===1)return n[0];const t=s.partnerTrust[e]||0,r=s.partnerSkill[e]||0;return n.length>=4?t>=70&&r>=3?n[0]:t>=70?n[1]:r>=3?n[2]:n[3]:t>=70?n[0]:n[1]}const tn=(...e)=>e.join(","),Cr={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:tn("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:tn("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:tn("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:tn("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:tn("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:tn("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:tn("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:tn("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:tn("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:tn("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:tn("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},Td=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/宿舍|卧室|家里|房间/,"home"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]],zi={1:"home",2:"shop",3:"kitchen",4:"shop",5:"shop",6:"market",7:"shop",8:"shop",9:"kitchen",10:"shop",11:"shop",12:"shop",13:"kitchen",14:"shop",15:"shop",16:"market",17:"street",18:"shop",19:"store",20:"shop",21:"shop",22:"store",23:"shop",24:"shop",25:"shop",26:"kitchen",27:"kitchen",28:"street",29:"market",30:"shop",31:"store",32:"street",33:"store",34:"store",35:"studio",36:"shop"},Yi={1:"shop",2:"street",3:"street",4:"shop",5:"park",6:"market",7:"night",8:"shop",9:"studio",10:"cafe",11:"studio",12:"shop",13:"kitchen",14:"shop",15:"street",16:"park",17:"street",18:"shop",19:"store",20:"street",21:"cafe",22:"night",23:"cafe",24:"studio",25:"street",26:"street",27:"kitchen",28:"shop",29:"park",30:"studio",31:"cafe",32:"street",33:"store",34:"studio",35:"school",36:"shop"};function Ad(e){return e?e.kind==="main"&&zi[e.month]?zi[e.month]:e.kind==="friend"&&Yi[e.month]?Yi[e.month]:Pl(e.title)||"shop":"shop"}function Pl(e){const n=e||"";for(const[t,r]of Td)if(t.test(n))return r;return""}const Wt={林念:{in:"ln-sprite-in.webp",out:"ln-sprite-out.webp",face:"ln-face.webp"},苏晴:{in:"sq-sprite-in.webp",out:"sq-sprite-out.webp",face:"sq-face.webp"},林暖:{in:"nu-sprite-in.webp",out:"nu-sprite-out.webp",face:"nu-face.webp"},周雨桐:{in:"xy-sprite-in.webp",out:"xy-sprite-out.webp",face:"xy-face.webp"},许知遥:{in:"zy-sprite-in.webp",out:"zy-sprite-out.webp",face:"zy-face.webp"},唐鸢:{in:"ty-sprite-in.webp",out:"ty-sprite-out.webp",face:"ty-face.webp"},叶星河:{in:"xh-sprite-in.webp",out:"xh-sprite-out.webp",face:"xh-face.webp"}},Ji=Wt,Od={shop:"in",kitchen:"in",store:"in",street:"out",home:"out",cafe:"out",market:"out",school:"out",park:"out",night:"out",studio:"out"};function Dd(e){return Od[e]||"out"}function Nl(e,n){const t=Wt[e];if(!t)return"";if(Xe(t[n])==="ok")return t[n];const r=n==="in"?"out":"in";return Xe(t[r])==="ok"?t[r]:""}function Pd(e,n){const t=Nl(e,n||"out");return t?je(t):""}function Nd(){Object.keys(Wt).forEach(e=>{const n=Wt[e];["in","out","face"].forEach(t=>Xe(n[t]))}),Object.keys(Cr).forEach(e=>Xe(Cr[e].img))}function Cs(e){const n=Wt[e];return n&&Xe(n.face)==="ok"?je(n.face):""}function Rd(e,n){return!!Nl(e,n||"out")}const Fd={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"}};function Ys(e){const n=Fd[e],t=n?n.img:"cg-"+e+".webp";return{src:Xe(t)==="ok"?je(t):"",name:n?n.name:e}}function Ld(e){return!e||!e.img?"":Xe(e.img)==="ok"?je(e.img):""}const en=(e,n)=>{const t=e.__vccOpts||e;for(const[r,i]of n)t[r]=i;return t},Vd={class:"vn"},jd=["src"],Bd={key:0,class:"vn-cg"},qd=["src"],Hd={class:"vn-cg-cap"},Ud={class:"vn-cast"},Kd=["src","alt"],Wd={class:"vn-top"},Gd={class:"vn-titles"},zd={class:"vn-chapter"},Yd={key:0,class:"vn-scene"},Jd={key:1,class:"vn-scene"},Qd={class:"vn-tools"},Zd={key:0,class:"vn-choice"},Xd={class:"vn-ask"},ef=["onClick"],nf={class:"t"},tf={key:0,class:"r"},rf={key:1,class:"r"},sf={key:0,class:"vn-note"},of={key:0,class:"vn-name"},lf=["src"],af={key:1},cf={class:"vn-text"},uf={key:0,class:"caret"},df={class:"vn-foot"},ff={key:1,class:"vn-dot"},hf={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done"],setup(e,{emit:n}){const t=e,r=n,i=ce([]),o=ce(0),l=ce(0),c=ce(!1);let d=0,f=0;function u(le){for(let ge=0;ge<le.length;ge++){const se=le[ge].t;if(se!=="scene"&&se!=="cg"&&se!=="cgend"&&se!=="act")return ge}return Math.max(0,le.length-1)}const p=B(()=>i.value[o.value]||null),m=B(()=>o.value>=i.value.length-1),k=B(()=>!!p.value&&p.value.t==="choice"),S=B(()=>!!p.value&&p.value.t==="say"),$=B(()=>!!p.value&&p.value.t==="nar"),j=B(()=>p.value&&p.value.text||""),K=B(()=>j.value.slice(0,l.value)),z=B(()=>l.value<j.value.length),Z=B(()=>{for(let le=o.value;le>=0;le--)if(i.value[le].t==="scene")return le;return-1}),w=B(()=>Z.value>=0?i.value[Z.value]:null),I=B(()=>{for(let le=o.value;le>=0;le--){if(i.value[le].t==="act")return i.value[le].text;if(i.value[le].t==="scene")return""}return""}),X=B(()=>Ad(t.ev)),ee=B(()=>{if(w.value){const le=Pl(w.value.text);if(le)return le}return X.value}),P=B(()=>Cr[ee.value]||Cr.shop),N=B(()=>Ld(P.value)),Q=B(()=>Dd(ee.value)),W=B(()=>!!w.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(w.value.text)),V=B(()=>{let le=-1;for(let ge=o.value;ge>=0;ge--){const se=i.value[ge].t;if(se==="cg"){le=ge;break}if(se==="cgend")return""}return le<0||le<Z.value?"":i.value[le].key}),M=B(()=>V.value?Ys(V.value):null),T={念念:"林念",小雨:"周雨桐",知遥:"许知遥",阿鸢:"唐鸢",鸢姐:"唐鸢",星河:"叶星河",妈妈:"林暖"},x=B(()=>{const le=se=>se&&Ji[se]&&Rd(se,Q.value);if(S.value&&le(p.value.who))return[p.value.who];const ge=p.value&&p.value.text||"";for(const se of Object.keys(Ji))if(le(se)&&ge.indexOf(se)>=0)return[se];for(const se of Object.keys(T))if(ge.indexOf(se)>=0&&le(T[se]))return[T[se]];for(let se=o.value;se>=0;se--){const qe=i.value[se];if(qe.t==="say"&&le(qe.who))return[qe.who]}for(const se of i.value)if(se.t==="say"&&le(se.who))return[se.who];return[]}),C=B(()=>S.value?p.value.who:"");an(()=>t.ev,()=>{i.value=hr(t.ev.beats||[],s),o.value=u(i.value),l.value=0,c.value=!1,F()},{immediate:!0});function R(le){return{left:"50%",zIndex:10+le}}function F(){if(clearInterval(d),l.value=0,k.value||!j.value){l.value=j.value.length;return}const le=Math.max(1,Math.round(j.value.length/40));d=setInterval(()=>{l.value=Math.min(j.value.length,l.value+le),l.value>=j.value.length&&clearInterval(d)},18)}an(()=>o.value,F);function $e(le){let ge=le+1;for(;ge<i.value.length;){const se=i.value[ge].t;if(se==="scene"||se==="cg"||se==="cgend"||se==="act")ge++;else break}return Math.min(ge,i.value.length-1)}function Pn(){if(!k.value){if(z.value){l.value=j.value.length,clearInterval(d);return}m.value||(o.value=$e(o.value))}}function xn(le,ge){ld(p.value,le,ge);const se=(le.branch||[]).concat(p.value.after||[]);i.value.splice(o.value,1,...se);let qe=Math.max(0,o.value-1);o.value=$e(qe)}function Be(){for(let le=o.value+1;le<i.value.length;le++)if(i.value[le].t==="choice"){o.value=le;return}o.value=i.value.length-1,l.value=j.value.length}function Qt(){clearInterval(d),clearInterval(f),Id(t.ev),r("done")}function Zt(){c.value=!c.value,clearInterval(f),c.value&&(f=setInterval(()=>{if(m.value){clearInterval(f),c.value=!1;return}if(k.value){clearInterval(f),c.value=!1;return}z.value?l.value=j.value.length:o.value=$e(o.value)},1400))}return Lo(()=>{clearInterval(d),clearInterval(f)}),(le,ge)=>(v(),y("div",Vd,[a("div",{class:ve(["vn-stage",{flash:W.value}])},[a("div",{class:"vn-bg",style:Ye({background:P.value.css})},[N.value?(v(),y("img",{key:0,src:N.value,alt:"",class:"vn-bg-img"},null,8,jd)):H("",!0),ge[0]||(ge[0]=a("div",{class:"vn-veil"},null,-1))],4),Te(Vc,{name:"cgfade"},{default:Io(()=>[M.value&&M.value.src?(v(),y("div",Bd,[a("img",{src:M.value.src,alt:""},null,8,qd),a("div",Hd,h(M.value.name),1)])):H("",!0)]),_:1}),a("div",Ud,[(v(!0),y(Y,null,te(x.value,(se,qe)=>(v(),y("div",{key:se,class:ve(["vn-actor",{dim:C.value&&C.value!==se,off:!C.value}]),style:Ye(R(qe))},[a("img",{src:b(Pd)(se,Q.value),alt:se},null,8,Kd)],6))),128))]),a("div",Wd,[a("div",Gd,[a("div",zd,h(e.ev.title),1),I.value?(v(),y("div",Yd,h(I.value),1)):w.value?(v(),y("div",Jd,h(w.value.text),1)):H("",!0)]),a("div",Qd,[a("button",{type:"button",class:ve({on:c.value}),onClick:Zn(Zt,["stop"])},"自动",2),a("button",{type:"button",onClick:Zn(Be,["stop"])},"跳过")])]),k.value?(v(),y("div",Zd,[a("div",Xd,h(p.value.prompt),1),(v(!0),y(Y,null,te(p.value.options,(se,qe)=>(v(),y("button",{key:qe,type:"button",class:"vn-opt",onClick:Zn(Nn=>xn(se,qe),["stop"])},[a("span",nf,h(se.label),1),se.gains&&se.gains.length?(v(),y("span",tf,h(se.gains.map(Nn=>Nn.label).join(" · ")),1)):se.hint?(v(),y("span",rf,h(se.hint),1)):H("",!0)],8,ef))),128)),p.value.note?(v(),y("p",sf,h(p.value.note),1)):H("",!0)])):(v(),y("div",{key:1,class:ve(["vn-box",{nar:$.value}]),onClick:Pn},[S.value?(v(),y("div",of,[b(Cs)(p.value.who)?(v(),y("img",{key:0,src:b(Cs)(p.value.who),alt:""},null,8,lf)):H("",!0),a("span",null,h(p.value.who),1),p.value.emo&&p.value.emo!=="视角"?(v(),y("em",af,h(p.value.emo),1)):H("",!0)])):H("",!0),a("div",cf,[gn(h(K.value),1),z.value?(v(),y("span",uf)):H("",!0)]),a("div",df,[m.value&&!z.value?(v(),y("span",{key:0,class:"vn-end",onClick:Zn(Qt,["stop"])},"结束 ←")):(v(),y("span",ff,"▾"))])],2))],2)]))}},pf=en(hf,[["__scopeId","data-v-3c4018b0"]]),mf=["src"],vf={key:1,viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},gf=["fill"],yf=["fill"],bf=["fill"],_f=["fill"],kf=["fill"],Mf=["fill"],xf=["fill"],$f=["fill"],Ef=["fill"],Cf=["fill"],wf=["fill"],Sf={__name:"CakeArt",props:{id:{type:String,default:""},colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){const n=e,t=B(()=>n.id&&Xe("cake-"+n.id+".webp")==="ok"?je("cake-"+n.id+".webp"):"");return(r,i)=>t.value?(v(),y("img",{key:0,src:t.value,alt:"",class:"cakeart photo"},null,8,mf)):(v(),y("svg",vf,[i[0]||(i[0]=a("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),i[1]||(i[1]=a("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),a("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,gf),a("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,yf),a("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,bf),a("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,_f),a("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,kf),a("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,Mf),a("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,xf),a("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,$f),a("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,Ef),a("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,Cf),a("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,wf)]))}},Js=en(Sf,[["__scopeId","data-v-bd8df027"]]),If={class:"card card-pad"},Tf={class:"between"},Af={class:"small muted"},Of={class:"chip"},Df=["src"],Pf={class:"counter-stats small muted"},Nf={key:1,class:"small muted"},Rf=["disabled"],Ff={key:3,class:"small regular-visit"},Lf={key:4,class:"small regular-visit"},Vf={key:6,class:"btn block",style:{"margin-top":"10px"},type:"button",disabled:""},jf={key:0,class:"card card-pad section-card"},Bf={class:"small muted"},qf=["onClick"],Hf={key:1,class:"active-queue card card-pad"},Uf={class:"small muted"},Kf=["onClick"],Wf={class:"guest-face"},Gf=["src"],zf={key:1},Yf={class:"mini-patience"},Jf={key:2,class:"service-card"},Qf={class:"card card-pad customer-card"},Zf={class:"between"},Xf={class:"h2",style:{margin:"0"}},eh={class:"small muted"},nh={class:"chip"},th={class:"customer-clue"},rh={class:"patience"},sh={class:"small muted between"},ih={key:0,class:"card card-pad section-card"},oh={key:0,class:"small muted"},lh=["onClick"],ah={class:"cake-thumb"},ch={class:"cake-pick-copy"},uh={key:1,class:"card card-pad section-card process-status"},dh={class:"h2"},fh={class:"small muted"},hh={key:2,class:"card card-pad section-card"},ph={class:"small muted"},mh={key:0,class:"decoration-options"},vh={class:"small muted"},gh=["onClick"],yh={class:"small muted",style:{"margin-top":"7px"}},bh=["onClick"],_h=["disabled"],kh={key:3,class:"card card-pad section-card process-status"},Mh={class:"h2"},xh={class:"small muted"},$h={class:"patience"},Eh={key:4,class:"card card-pad section-card"},Ch={class:"small muted"},wh={key:3,class:"card card-pad section-card"},Sh={class:"small muted"},Ih={key:4,class:"card card-pad section-card"},Th={class:"between small"},Ah={key:0,class:"leftovers"},Oh=["onClick"],Dh={key:5,class:"small notice",role:"status"},Ph={class:"card card-pad section-card small muted"},Nh={__name:"ShopPage",props:{paused:{type:Boolean,default:!1}},emits:["closed"],setup(e,{emit:n}){const t=e,r=n,i=ce(""),o=ce(""),l=ce("");let c=0;const d=B(()=>{var C;return((C=s.service)==null?void 0:C.tickets)||[]}),f=B(()=>{var C;return d.value[((C=s.service)==null?void 0:C.current)||0]||null}),u=B(()=>s.service?s.service.tickets.slice(s.service.current,s.service.current+Math.max(1,Math.min(3,s.shopLevel))).filter(C=>!["delivered","unavailable"].includes(C.status)):[]),p=B(()=>u.value.find(C=>{var R;return C.id===((R=s.service)==null?void 0:R.activeTicketId)})||u.value[0]||f.value),m=B(()=>d.value.findIndex(C=>{var R;return C.id===((R=p.value)==null?void 0:R.id)})),k=B(()=>Object.values(s.shelf||{}).reduce((C,R)=>C+R,0)),S=B(()=>Kt.value.filter(C=>(s.shelf[C.id]||0)>0)),$=B(()=>s.orders),j=B(()=>s.day),K=B(()=>Ks()),z=B(()=>On("feedback")),Z=B(()=>p.value?Math.max(0,Math.min(100,p.value.remaining/Math.max(1,p.value.patience||p.value.remaining)*100)):0);function w(){if(!k.value)return T("展示柜还是空的，先去后厨制作蛋糕。");const C=md();C&&T(C.customers+" 位顾客陆续来到柜台。")}function I(C){if(!p.value)return;const R=bd(p.value.id,C.id,p.value.qty);T(R.message)}function X(){if(!p.value)return;const C=_d(p.value.id,o.value||null,l.value||null);T(C.message)}function ee(){p.value&&(T(Ol(p.value.id).message),o.value="",l.value="")}function P(){p.value&&(Md(p.value.id),T("今天这款已经售罄，订单没有成交。"))}function N(C){yd(C.id),o.value=C.decoration||"",l.value=C.packedBlessing||""}function Q(C){return{waiting:"等候",searching:"找货",found:"待打包",packing:"打包中",ready:"待递交"}[C]||C}function W(C){var F;return C.customer==="陈奶奶"?"customer-chen.webp":C.customer==="张叔"?"customer-zhang.webp":C.kind==="appointment"?"customer-custom.webp":"customer-guest-"+Math.max(1,Number(((F=C.id.match(/(\d+)$/))==null?void 0:F[1])||0)%5+1)+".webp"}function V(){if(s.dayPhase!=="prep"||s.ap<z.value.ap||z.value.disabled)return T(z.value.note);T(gt("feedback",{})?"顾客反馈已记下，口碑 +1。":"现在无法收集反馈。")}function M(C){const R=Dl(C);R&&r("closed",R)}function T(C){i.value=C}function x(){!t.paused&&!document.hidden&&s.dayPhase==="service"&&kd(.1)}return an(()=>s.dayPhase,C=>{C==="service"&&!c&&(c=window.setInterval(x,100)),C!=="service"&&c&&(clearInterval(c),c=0)},{immediate:!0}),an(()=>t.paused,C=>{C&&(i.value="")}),Fr(()=>{c&&clearInterval(c)}),(C,R)=>(v(),y("div",null,[a("div",If,[a("div",Tf,[a("div",null,[R[1]||(R[1]=a("div",{class:"h2",style:{margin:"0"}},"柜台营业",-1)),a("div",Af,h(b(s).month)+" 月 · 第 "+h(j.value)+"/"+h(b(Er))+" 个经营日",1)]),a("span",Of,"口碑 "+h(Math.round(b(s).reputation)),1)]),b(Xe)("bg-counter.webp")==="ok"?(v(),y("img",{key:0,class:"counter-art",src:b(je)("bg-counter.webp"),alt:"林记烘焙营业柜台"},null,8,Df)):H("",!0),a("div",Pf,[a("span",null,"待售 "+h(k.value)+" 个",1),a("span",null,"预约 "+h($.value.length)+" 笔",1),a("span",null,"今日收入 ¥"+h(b(s).dayRev),1)]),b(s).dayPhase==="service-ready"?(v(),y("div",Nf,"蛋糕已经摆进展示柜，准备好就开门接待。")):H("",!0),b(s).dayPhase==="prep"?(v(),y("button",{key:2,class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:z.value.disabled||b(s).ap<z.value.ap,onClick:V},"顾客反馈 · "+h(z.value.note),9,Rf)):H("",!0),b(s).dayPhase==="prep"&&K.value.length?(v(),y("div",Ff,[R[2]||(R[2]=a("strong",null,"今日常客来访",-1)),(v(!0),y(Y,null,te(K.value,F=>(v(),y("span",{key:F.id},h(F.name)+" · 想买"+h(b(Ee)(F.product).name),1))),128))])):H("",!0),b(s).dayPhase==="prep"&&b(s).challenge?(v(),y("div",Lf,[R[3]||(R[3]=a("strong",null,"今日经营挑战",-1)),a("span",null,h(b(s).challenge.type==="stock"?"精准备货 · 剩货率不超过 10%":b(s).challenge.type==="new"?"新品主题日 · "+b(Ee)(b(s).challenge.target).name+" 销售至少 3 份":"定制专场 · 完成当天定制要求"),1)])):H("",!0),b(s).dayPhase==="service-ready"?(v(),y("button",{key:5,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:w},"开门营业")):H("",!0),b(s).dayPhase==="prep"&&!k.value?(v(),y("button",Vf,"先去后厨制作蛋糕")):H("",!0)]),b(s).dayPhase==="prep"&&$.value.length?(v(),y("div",jf,[R[4]||(R[4]=a("div",{class:"h2"},"今日预约",-1)),(v(!0),y(Y,null,te($.value,F=>(v(),y("div",{key:F.id,class:"order-row"},[a("div",null,[a("strong",null,h(F.customer)+" · "+h(b(Ee)(F.product).name)+" ×"+h(F.qty),1),a("div",Bf,h(F.type==="定制"?"要求："+F.due+" · 祝福："+F.blessing+" · ":"")+"预计收入 ¥"+h(F.pay),1)]),a("button",{class:"btn",type:"button",onClick:$e=>b(hd)(F.id)},h(F.taken?"已接":"接单"),9,qf)]))),128)),R[5]||(R[5]=a("p",{class:"small muted"},"先接下的预约会在营业队列中优先出现。没有接的预约不会加入今天的营业。",-1))])):H("",!0),b(s).dayPhase==="service"&&u.value.length>1?(v(),y("div",Hf,[a("div",Uf,"正在等候 · 最多同时接待 "+h(Math.min(3,b(s).shopLevel))+" 位",1),(v(!0),y(Y,null,te(u.value,F=>{var $e;return v(),y("button",{key:F.id,class:ve(["queue-guest",{chosen:F.id===(($e=p.value)==null?void 0:$e.id),unhappy:F.unhappy}]),type:"button",onClick:Pn=>N(F)},[a("span",Wf,[b(Xe)(W(F))==="ok"?(v(),y("img",{key:0,src:b(je)(W(F)),alt:""},null,8,Gf)):(v(),y("b",zf,h(F.customer.slice(0,1)),1))]),a("span",null,[a("strong",null,h(F.customer),1),a("small",null,h(F.qty)+" 个 · "+h(Q(F.status))+h(F.unhappy?" · 着急了":""),1)]),a("i",Yf,[a("b",{style:Ye({width:Math.max(0,F.remaining/Math.max(1,F.patience)*100)+"%"})},null,4)])],10,Kf)}),128))])):H("",!0),b(s).dayPhase==="service"&&p.value?(v(),y("div",Jf,[a("div",Qf,[a("div",Zf,[a("div",null,[a("div",Xf,h(p.value.customer),1),a("div",eh,h(p.value.type)+" · 想买 "+h(p.value.qty)+" 个",1)]),a("span",nh,h(m.value+1)+"/"+h(d.value.length),1)]),a("p",th,"“"+h(p.value.clue||"我想要一份"+b(Ee)(p.value.product).name+"。")+"”",1),a("div",rh,[a("span",{style:Ye({width:Z.value+"%",background:Z.value<33?"var(--berry)":"var(--sage)"})},null,4)]),a("div",sh,[a("span",null,h(p.value.unhappy?"顾客有点着急，但仍会等你":"耐心倒计时"),1),a("span",null,h(Math.ceil(p.value.remaining))+" 秒",1)])]),p.value.status==="waiting"?(v(),y("div",ih,[R[6]||(R[6]=a("div",{class:"h2"},"从展示柜找蛋糕",-1)),S.value.length?H("",!0):(v(),y("div",oh,"展示柜已经售罄。")),(v(!0),y(Y,null,te(S.value,F=>(v(),y("button",{key:F.id,class:"cake-pick",type:"button",onClick:$e=>I(F)},[a("span",ah,[Te(Js,{id:F.id,colors:F.colors},null,8,["id","colors"])]),a("span",ch,[a("strong",null,h(F.name),1),a("span",null,"柜中 "+h(b(s).shelf[F.id])+" 个",1)]),a("span",null,"找 ×"+h(p.value.qty)+" →",1)],8,lh))),128)),S.value.some(F=>F.id===p.value.product&&b(s).shelf[F.id]>=p.value.qty)?H("",!0):(v(),y("button",{key:1,class:"btn block",type:"button",onClick:P},"告知售罄，结束这笔未成交订单"))])):p.value.status==="searching"?(v(),y("div",uh,[a("div",dh,h(b(s).staffAssignments.picker?"员工正在找蛋糕":"在展示柜里找蛋糕…"),1),a("p",fh,h(Math.ceil(p.value.findRemaining||0))+" 秒后取出。",1)])):p.value.status==="found"?(v(),y("div",hh,[R[7]||(R[7]=a("div",{class:"h2"},"蛋糕找到了，开始打包",-1)),a("div",ph,h(b(Ee)(p.value.product).name)+" ×"+h(p.value.qty)+" · 包装约 "+h(2+p.value.qty)+" 秒",1),p.value.type==="定制"?(v(),y("div",mh,[a("div",vh,"预约装饰："+h(p.value.due),1),(v(),y(Y,null,te(["粉色小花","清爽配色","简洁裱花"],F=>a("button",{key:F,class:ve(["pill",{chosen:o.value===F}]),type:"button",onClick:$e=>o.value=F},h(F),11,gh)),64)),a("div",yh,"祝福语："+h(p.value.blessing),1),(v(),y(Y,null,te(["生日快乐","愿你每天都有好心情","把今天的甜分享给你"],F=>a("button",{key:F,class:ve(["pill",{chosen:l.value===F}]),type:"button",onClick:$e=>l.value=F},h(F),11,bh)),64))])):H("",!0),a("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:p.value.type==="定制"&&(!o.value||!l.value),onClick:X},"开始打包",8,_h)])):p.value.status==="packing"?(v(),y("div",kh,[a("div",Mh,h(b(s).staffAssignments.packer?"员工正在打包":"正在打包蛋糕…"),1),a("div",xh,"还需 "+h(Math.ceil(p.value.packRemaining||0))+" 秒",1),a("div",$h,[a("span",{class:"pack-progress",style:Ye({width:100-p.value.packRemaining/(2+p.value.qty)*100+"%"})},null,4)])])):p.value.status==="ready"?(v(),y("div",Eh,[R[8]||(R[8]=a("div",{class:"h2"},"包装好了",-1)),a("div",Ch,"顾客还在等，递给 "+h(p.value.customer)+"。",1),a("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:ee},"递交蛋糕 · 收款")])):H("",!0)])):H("",!0),b(s).dayPhase==="service"&&p.value&&b(Ur)()?(v(),y("div",wh,[R[9]||(R[9]=a("div",{class:"h2"},"员工营业协作",-1)),a("div",Sh,h(b(s).staffAssignments.auto?"员工自动完成找蛋糕、打包和交付。":"员工可分担找蛋糕和打包；你来负责递交。"),1)])):H("",!0),b(s).dayPhase==="closing"?(v(),y("div",Ih,[R[12]||(R[12]=a("div",{class:"h2"},"今日接待完成",-1)),a("div",Th,[R[10]||(R[10]=a("span",{class:"muted"},"完成订单",-1)),a("span",null,h(b(s).daySold)+" 个蛋糕 · ¥"+h(b(s).dayRev)+" 已到账",1)]),k.value?(v(),y("div",Ah,[R[11]||(R[11]=a("div",{class:"small muted"},"剩下的蛋糕怎么处理？",-1)),(v(!0),y(Y,null,te(b(Es),(F,$e)=>(v(),y("button",{key:$e,class:"leftover-button",type:"button",onClick:Pn=>M($e)},[gn(h(F.label),1),a("span",null,h(F.cashRate?" · 回收部分成本":F.community?" · 社区好感 +"+F.community:""),1)],8,Oh))),128))])):(v(),y("button",{key:1,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:R[0]||(R[0]=F=>M("waste"))},"打烊，进入下一经营日"))])):H("",!0),i.value?(v(),y("p",Dh,h(i.value),1)):H("",!0),a("div",Ph,[a("div",null,"本月固定成本 ¥"+h(b(xl)),1),R[13]||(R[13]=a("div",{style:{"margin-top":"4px"}},"顾客超时只影响口碑，不影响成交收入；切到其他页面或后台时倒计时暂停。",-1))])]))}},Rh=en(Nh,[["__scopeId","data-v-beaaef89"]]),Fh={class:"card card-pad"},Lh={class:"between"},Vh={class:"between small muted",style:{"margin-top":"7px"}},jh=["disabled"],Bh={key:0,class:"challenge-note small"},qh={key:0,class:"card card-pad compact-card"},Hh={class:"product-list"},Uh={class:"product-art"},Kh={class:"product-copy"},Wh={class:"quantity"},Gh=["disabled","onClick"],zh=["disabled","onClick"],Yh={class:"card card-pad compact-card"},Jh={class:"between"},Qh={class:"small muted"},Zh={key:0,class:"small muted",style:{"margin-top":"5px"}},Xh={key:1,class:"card card-pad minigame"},ep={class:"between"},np={class:"h2",style:{margin:"0"}},tp={class:"chip"},rp={class:"small muted"},sp={class:"gauge"},ip={class:"pattern"},op={class:"target-buttons"},lp=["onClick"],ap={class:"pattern"},cp={class:"target-buttons"},up=["onClick"],dp={key:2,class:"card card-pad compact-card"},fp={class:"small muted"},hp=["disabled"],pp=["disabled"],mp={key:6,class:"card card-pad compact-card"},vp={key:0,class:"small muted"},gp={key:7,class:"small muted",role:"status"},yp={__name:"KitchenPage",props:{paused:{type:Boolean,default:!1}},setup(e){const n=e,t=ce(""),r=ce(0),i=ce(0),o=ce([]);let l=0;const c=B(()=>$l()),d=B(()=>Uu()),f=B(()=>Hs()),u=B(()=>Kt.value.map(M=>({...M,qty:s.plan[M.id]||0,price:Jt(M.id)}))),p=B(()=>s.orders.filter(M=>M.taken)),m=B(()=>s.productionMini),k=B(()=>{var M,T;return((M=s.productionResult)==null?void 0:M.quality)==="perfect"?"完美 · 售价 +10%":((T=s.productionResult)==null?void 0:T.quality)==="fine"?"精致 · 售价 +5%":"普通品质"}),S=B(()=>{var T;return[[0,1,2],[1,2,0],[2,0,1]][((T=m.value)==null?void 0:T.pattern)||0]}),$=B(()=>Object.entries(d.value).map(([M,T])=>{var x;return{id:M,name:((x=ut.find(C=>C.id===M))==null?void 0:x.name)||M,qty:T}})),j=B(()=>s.challenge?s.challenge.type==="stock"?"精准备货：预约优先，剩货率不超过 10%。":s.challenge.type==="new"?"新品主题日："+Ee(s.challenge.target).name+" 至少交付 3 个。":"定制专场：完成当天定制要求。":"");function K(M,T){ud(M,(s.plan[M]||0)+T)}function z(){const M={};p.value.forEach(R=>{M[R.product]=(M[R.product]||0)+R.qty});const T=Math.max(3,Math.min(12,Math.round({1:4,2:6,3:8,4:10}[s.shopLevel]+s.reputation/35)));let x=Math.max(0,T-Object.values(M).reduce((R,F)=>R+F,0));const C=Kt.value.slice().sort((R,F)=>(s.monthSold[F.id]||0)+F.demand-((s.monthSold[R.id]||0)+R.demand));for(let R=0;R<x&&C.length;R++){const F=C[R%Math.min(3,C.length)].id;M[F]=Math.min(12,(M[F]||0)+1)}s.plan=M,ue()}function Z(){var M;if(c.value>Xn.value)return I("今天的产能不够，先减少计划数量。");if(Object.keys(f.value).length)return I("有原料缺货，请先去食材铺采购。");if(!s.plan||!Object.keys(s.plan).length)return I("先给今天排一些蛋糕。");dd()&&(i.value=0,r.value=0,o.value=[],I("今天的主打工序抽到了「"+w((M=m.value)==null?void 0:M.type)+"」。"))}function w(M){return{mix:"搅拌",oven:"出炉火候",piping:"裱花",fruit:"摆果"}[M]||"制作"}function I(M){t.value=M}function X(){!n.paused&&!document.hidden&&m.value&&["mix","oven"].includes(m.value.type)&&(r.value=(r.value+2.4)%100)}function ee(){var x;const M=((x=m.value)==null?void 0:x.window)||66,T=Math.abs(r.value-M);Q(Math.max(0,100-Math.round(T*3)))}function P(M){if(M!==S.value[i.value])return Q(55);i.value+=1,i.value>=S.value.length&&Q(100)}function N(M){const T=[...o.value,M];o.value=T,T.length===3&&Q(T.every((x,C)=>x===S.value[C])?100:60)}function Q(M){const T=Ki(M,!1);I(T.msg||T.message||k.value)}function W(){const M=Ki(0,!0);I(M.msg||M.message||"采用普通品质出炉。")}function V(){s.plan={},ue()}return an(m,M=>{M&&!l&&(l=window.setInterval(X,80)),!M&&l&&(clearInterval(l),l=0)},{immediate:!0}),Rr(()=>{m.value&&!l&&(l=window.setInterval(X,80))}),Fr(()=>{l&&clearInterval(l)}),(M,T)=>(v(),y("div",null,[a("div",Fh,[a("div",Lh,[T[1]||(T[1]=a("div",{class:"h2",style:{margin:"0"}},"今日生产计划",-1)),a("span",{class:ve(["chip",c.value>b(Xn)?"pink":"sage"])},"产能 "+h(c.value)+"/"+h(b(Xn)),3)]),a("div",Vh,[a("span",null,"库存 "+h(b(qr))+"/"+h(b(s).warehouseCapacity)+" 份",1),a("span",null,"体力 "+h(b(s).stamina),1)]),a("button",{class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:b(s).dayPhase!=="prep",onClick:z},"智能备货 · 先满足已接预约",8,jh),b(s).dayPhase==="prep"&&j.value?(v(),y("div",Bh,[T[2]||(T[2]=a("strong",null,"今日经营挑战",-1)),a("span",null,h(j.value)+"成功后营业收入 +5%。",1)])):H("",!0)]),p.value.length?(v(),y("div",qh,[T[3]||(T[3]=a("strong",null,"已接预约",-1)),(v(!0),y(Y,null,te(p.value,x=>(v(),y("div",{key:x.id,class:"small muted"},h(b(Ee)(x.product).name)+" ×"+h(x.qty)+h(x.due?" · 装饰："+x.due:""),1))),128))])):H("",!0),a("div",Hh,[(v(!0),y(Y,null,te(u.value,x=>(v(),y("div",{key:x.id,class:"product-row"},[a("div",Uh,[Te(Js,{id:x.id,colors:x.colors},null,8,["id","colors"])]),a("div",Kh,[a("strong",null,h(x.name),1),a("span",null,"¥"+h(x.price)+" · 产能 "+h(x.diff),1),a("span",null,"熟练度 Lv"+h(Math.round((b(s).levels[x.id]||1)*10)/10),1)]),a("div",Wh,[a("button",{type:"button",disabled:b(s).dayPhase!=="prep",onClick:C=>K(x.id,-1)},"−",8,Gh),a("span",null,h(x.qty),1),a("button",{type:"button",disabled:b(s).dayPhase!=="prep",onClick:C=>K(x.id,1)},"+",8,zh)])]))),128))]),a("div",Yh,[a("div",Jh,[T[4]||(T[4]=a("strong",null,"材料预算",-1)),a("span",Qh,"预计 "+h(Object.values(b(s).plan).reduce((x,C)=>x+C,0))+" 个蛋糕",1)]),$.value.length?H("",!0):(v(),y("div",Zh,"选择产品和数量后会列出配方用料。")),(v(!0),y(Y,null,te($.value,x=>(v(),y("div",{key:x.id,class:"between small",style:{"margin-top":"5px"}},[a("span",null,h(x.name),1),a("span",{class:ve({missing:f.value[x.id]})},h(x.qty)+" 份 · 库存 "+h(b(s).pantry[x.id]||0)+h(f.value[x.id]?" · 缺 "+Math.ceil(f.value[x.id]):""),3)]))),128))]),m.value?(v(),y("div",Xh,[a("div",ep,[a("div",np,"主打工序 · "+h(w(m.value.type)),1),a("span",tp,h(b(Ee)(m.value.product).name),1)]),m.value.type==="mix"||m.value.type==="oven"?(v(),y(Y,{key:0},[a("p",rp,h(m.value.type==="mix"?"指针进入绿色区间时停下搅拌。":"在最佳火候区间及时出炉。"),1),a("div",sp,[a("span",{class:"target",style:Ye({left:m.value.window-8+"%"})},null,4),a("i",{style:Ye({left:r.value+"%"})},null,4)]),a("button",{class:"btn primary block",type:"button",onClick:ee},"停下")],64)):m.value.type==="piping"?(v(),y(Y,{key:1},[T[5]||(T[5]=a("p",{class:"small muted"},"按提示顺序点亮三处裱花位置。",-1)),a("div",ip,h(S.value.map(x=>["花心","左侧","右侧"][x]).join(" → ")),1),a("div",op,[(v(),y(Y,null,te(["花心","左侧","右侧"],(x,C)=>a("button",{key:x,class:"btn",type:"button",onClick:R=>P(C)},h(x),9,lp)),64))])],64)):(v(),y(Y,{key:2},[T[6]||(T[6]=a("p",{class:"small muted"},"按提示顺序摆放三种鲜果。",-1)),a("div",ap,h(S.value.map(x=>["草莓","蓝莓","薄荷"][x]).join(" → ")),1),a("div",cp,[(v(),y(Y,null,te(["草莓","蓝莓","薄荷"],(x,C)=>a("button",{key:x,class:"btn",type:"button",onClick:R=>N(C)},h(x),9,up)),64))])],64)),a("button",{class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:W},"跳过 · 普通品质保底")])):b(s).productionResult?(v(),y("div",dp,[a("strong",null,"本批品质："+h(k.value),1),a("div",fp,h(b(s).productionResult.quality==="normal"?"基础品质，不影响批量成品。":"效果已记在主打蛋糕批次中。"),1)])):H("",!0),b(s).dayPhase==="prep"&&!m.value&&!b(s).productionResult?(v(),y("button",{key:3,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:!Object.keys(b(s).plan).length,onClick:Z},"开始制作 · 随机关键工序",8,hp)):H("",!0),b(s).dayPhase==="prep"&&b(s).productionResult?(v(),y("button",{key:4,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:c.value>b(Xn)||Object.keys(f.value).length>0,onClick:T[0]||(T[0]=(...x)=>b($s)&&b($s)(...x))},"完成今日批量制作",8,pp)):H("",!0),b(s).dayPhase==="prep"&&Object.keys(b(s).plan).length?(v(),y("button",{key:5,class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:V},"清空计划")):H("",!0),b(s).dayPhase==="service-ready"||b(s).dayPhase==="service"||b(s).dayPhase==="closing"?(v(),y("div",mp,[T[7]||(T[7]=a("div",{class:"h2"},"今日成品",-1)),(v(!0),y(Y,null,te(Object.keys(b(s).shelf).filter(x=>b(s).shelf[x]>0),x=>(v(),y("div",{key:x,class:"between small"},[a("span",null,h(b(Ee)(x).name),1),a("span",null,h(b(s).shelf[x])+" 个",1)]))),128)),b(s).dayPhase==="service-ready"?(v(),y("div",vp,"前往柜台开门营业。")):H("",!0)])):H("",!0),t.value?(v(),y("p",gp,h(t.value),1)):H("",!0),T[8]||(T[8]=a("div",{class:"small muted tips"},"设备、妈妈和伙伴提供产能；超出免费产能的部分才消耗体力。主打蛋糕小游戏只作用于这款产品的当日批次。",-1))]))}},bp=en(yp,[["__scopeId","data-v-79ec2286"]]),_p={class:"card card-pad"},kp={class:"between"},Mp={class:"chip"},xp={class:"card card-pad team-card"},$p={class:"between"},Ep={class:"small muted"},Cp={key:0,class:"avatar real-avatar"},wp=["src","alt"],Sp={key:1},Ip={key:1,class:"avatar locked-avatar"},Tp={class:"partner-info"},Ap={class:"partner-title"},Op={class:"chip"},Dp={class:"small muted"},Pp={class:"partner-actions"},Np=["disabled","onClick"],Rp=["disabled","onClick"],Fp={class:"card card-pad team-card"},Lp={class:"assignment"},Vp=["value","disabled"],jp=["value"],Bp={class:"assignment"},qp=["value","disabled"],Hp=["value","disabled"],Up={key:0,class:"auto-toggle"},Kp=["checked","disabled"],Wp={key:1,class:"locked-auto"},Gp={key:2,class:"small muted",role:"status"},zp={__name:"PartnersPage",setup(e){const n=ce(""),t=B(()=>ht.map(f=>{const u=s.staff.includes(f.id);return u?{id:f.id,joined:u,name:f.name,nick:f.nick,role:f.role,skillName:f.skillName,skill:s.partnerSkill[f.id]||1,trust:Math.round(s.partnerTrust[f.id]||0),avatar:Cs(f.name)}:{id:f.id,joined:u}})),r=B(()=>Sl()),i=B(()=>Ur()),o=B(()=>s.dayPhase==="prep");function l(f,u){Wi({...s.staffAssignments,[f]:u||null}),n.value="营业分工已保存。"}function c(f){i.value&&(Wi({...s.staffAssignments,auto:f.target.checked}),n.value=f.target.checked?"已启用全自动接待。":"已切回手动接待。")}function d(f,u){const p=On(f);if(!o.value||p.disabled||s.ap<p.ap||p.cost&&s.cash<p.cost){n.value=o.value?p.note:"请在营业前安排员工交流与培训。";return}const m=gt(f,{partner:u});n.value=m?f==="talk"?"和伙伴聊了一会儿。":"培训完成，专业能力提升。":"暂时无法完成。"}return(f,u)=>(v(),y("div",null,[a("div",_p,[a("div",kp,[u[2]||(u[2]=a("div",null,[a("div",{class:"h2",style:{margin:"0"}},"林暖"),a("div",{class:"small muted"},"母亲 · 林记上一任经营者")],-1)),a("span",Mp,"家庭默契 "+h(Math.round(b(s).momBond)),1)]),u[3]||(u[3]=a("p",{class:"small muted",style:{margin:"7px 0 0"}},"她每天提供 60 点免费产能。和妈妈的互动在店内进行。",-1))]),a("div",xp,[a("div",$p,[u[4]||(u[4]=a("div",{class:"h2",style:{margin:"0"}},"伙伴档案",-1)),a("span",Ep,"已加入 "+h(r.value.length)+" / "+h(b(ht).length),1)]),(v(!0),y(Y,null,te(t.value,p=>(v(),y("article",{key:p.id,class:"partner-row"},[p.joined?(v(),y("div",Cp,[p.avatar?(v(),y("img",{key:0,src:p.avatar,alt:p.name},null,8,wp)):(v(),y("span",Sp,h(p.name.slice(0,1)),1))])):(v(),y("div",Ip,"?")),a("div",Tp,[p.joined?(v(),y(Y,{key:0},[a("div",Ap,[a("strong",null,h(p.name),1),a("span",Op,h(p.role),1)]),a("div",Dp,"信赖 "+h(p.trust)+" · "+h(p.skillName)+"专业 Lv"+h(p.skill),1),a("div",Pp,[a("button",{class:"btn",type:"button",disabled:!o.value||b(s).ap<1,onClick:m=>d("talk",p.id)},"员工交流 · 1 行动力",8,Np),a("button",{class:"btn",type:"button",disabled:!o.value||b(s).ap<2||b(s).cash<400||p.skill>=5,onClick:m=>d("train",p.id)},"培训 · 2 行动力 / ¥400",8,Rp)])],64)):(v(),y(Y,{key:1},[u[5]||(u[5]=a("strong",null,"未解锁",-1)),u[6]||(u[6]=a("div",{class:"small muted"},"继续经营，等待伙伴加入林记。",-1))],64))])]))),128))]),a("div",Fp,[u[13]||(u[13]=a("div",{class:"h2"},"营业分工",-1)),u[14]||(u[14]=a("p",{class:"small muted"},"伙伴可以分担找蛋糕和打包。专业等级越高，负责工位的处理时间越短。",-1)),a("label",Lp,[u[8]||(u[8]=a("span",null,"找蛋糕",-1)),a("select",{value:b(s).staffAssignments.picker||"",disabled:!o.value,onChange:u[0]||(u[0]=p=>l("picker",p.target.value))},[u[7]||(u[7]=a("option",{value:""},"自己负责",-1)),(v(!0),y(Y,null,te(r.value,p=>(v(),y("option",{key:p.id,value:p.id},h(p.nick)+" · Lv"+h(b(s).partnerSkill[p.id]||1),9,jp))),128))],40,Vp)]),a("label",Bp,[u[10]||(u[10]=a("span",null,"打包",-1)),a("select",{value:b(s).staffAssignments.packer||"",disabled:!o.value,onChange:u[1]||(u[1]=p=>l("packer",p.target.value))},[u[9]||(u[9]=a("option",{value:""},"自己负责",-1)),(v(!0),y(Y,null,te(r.value,p=>(v(),y("option",{key:p.id,value:p.id,disabled:p.id===b(s).staffAssignments.picker},h(p.nick)+" · Lv"+h(b(s).partnerSkill[p.id]||1),9,Hp))),128))],40,qp)]),i.value?(v(),y("label",Up,[a("input",{type:"checkbox",checked:b(s).staffAssignments.auto,disabled:!o.value,onChange:c},null,40,Kp),u[11]||(u[11]=a("span",null,[a("strong",null,"全自动接待"),a("small",null,"员工完成找蛋糕、打包和递交；每天可挑战一项经营目标。")],-1))])):(v(),y("div",Wp,[...u[12]||(u[12]=[a("span",{class:"locked-avatar"},"?",-1),a("span",{class:"small muted"},"全自动接待：店铺 Lv3，并有 3 位专业 Lv3 伙伴后开放。",-1)])])),n.value?(v(),y("p",Gp,h(n.value),1)):H("",!0)])]))}},Yp=en(zp,[["__scopeId","data-v-5ddd734b"]]),Jp={class:"lab"},Qp={class:"lab-head"},Zp={class:"lab-sub"},Xp={key:0,class:"card card-pad result"},em={class:"result-title"},nm={class:"small muted"},tm=["src"],rm={class:"scores"},sm={class:"feedback"},im={class:"result-actions"},om=["disabled"],lm={key:1,class:"small muted"},am=["disabled"],cm=["disabled","onClick"],um={class:"product-info"},dm={class:"small muted"},fm={class:"chip"},hm={key:0,class:"product-list"},pm=["onClick"],mm={class:"product-info"},vm={class:"small muted"},gm={key:1,class:"card card-pad small muted"},ym={key:2,class:"report-list"},bm={class:"small muted"},_m={key:0,class:"small muted"},km={key:3,class:"card card-pad small muted"},Mm={key:2,class:"card card-pad form"},xm={class:"small muted"},$m={class:"hint"},Em={class:"field"},Cm=["onClick"],wm={class:"field"},Sm=["onClick"],Im={class:"small muted"},Tm={class:"field"},Am={class:"field-title"},Om=["onClick"],Dm={class:"field"},Pm=["onClick"],Nm={class:"field"},Rm=["onClick"],Fm=["disabled"],Lm={class:"small muted"},Vm={key:3,class:"card card-pad form"},jm={class:"field"},Bm=["onClick"],qm={class:"field"},Hm=["onClick"],Um={class:"field"},Km=["onClick"],Wm={class:"field"},Gm=["onClick"],zm=["disabled"],Ym={key:4,class:"card card-pad form"},Jm={class:"small muted"},Qm=["value"],Zm={key:0,class:"small feedback-line"},Xm=["disabled"],ev={class:"small muted"},nv={key:5,class:"small notice"},tv={__name:"ResearchLab",setup(e){const n=ce("home"),t=ce(""),r=ce([]),i=ce(-1),o=ce(-1),l=ce(-1),c=ce(1),d=ce(""),f=ce(-1),u=ce(""),p=ce(""),m=ce(!1),k=B(()=>Ke.filter(M=>M.month>0)),S=B(()=>Ke.filter(M=>s.unlocked.includes(M.id)&&(s.levels[M.id]||1)<5)),$=B(()=>qs[t.value]),j=B(()=>{var M;return((M=s.labPending)==null?void 0:M.type)==="signature"?Ys("osmanthus").src:""});function K(M){p.value=M}function z(M){if(!s.labPending){if(M.id==="signature"){if(s.month<26)return K("M26 起开放外婆配方复原。");n.value="signature"}else t.value=M.id,n.value="develop";r.value=[],i.value=-1,o.value=-1,l.value=-1,c.value=1,p.value=""}}function Z(M){r.value=r.value.includes(M)?r.value.filter(T=>T!==M):[...r.value,M]}function w(){const M=Bi({productId:t.value,ingredients:r.value,direction:i.value,ratio:o.value,process:l.value,decoration:c.value});M.ok?K("试吃完成：本次样品已计入原料消耗。"):K(M.message)}function I(){const M=Bi({productId:"signature",type:"signature",ingredients:r.value,sugar:i.value,filling:o.value,garnish:l.value});M.ok?K("复原试吃完成：本次样品已计入原料消耗。"):K(M.message)}function X(){const M=Qu();K(M.message),M.ok&&(n.value="home")}function ee(){const M=s.labPending;M&&(qi(),t.value=M.productId,r.value=M.ingredients.slice(),M.type==="signature"?(i.value=M.sugar,o.value=M.filling,l.value=M.garnish,n.value="signature"):(i.value=M.direction,o.value=M.ratio,l.value=M.process,c.value=M.decoration,n.value="develop"),K("保留了本次试做思路，修改后重试会再消耗一份样品。"))}function P(){qi(),n.value="home",K("试吃结果已收起，已消耗的样品不返还。")}function N(M){s.labPending||(d.value=M.id,f.value=-1,u.value="",p.value="",n.value="improve")}function Q(){if(m.value||f.value<0)return;m.value=!0;const M=Zu(d.value,f.value);m.value=!1,u.value=M.feedback||"",M.ok?(K(M.message),n.value="home"):M.retry&&(f.value=-1)}function W(){n.value="home",p.value=""}function V(M){return M.type==="signature"?"外婆配方复原":M.type==="improvement"?`配方改良 · Lv${M.levelAfter}`:`${M.refined?"精制上架":"新品上架"} · ${M.score} 分`}return(M,T)=>(v(),y("section",Jp,[a("header",Qp,[a("div",null,[T[1]||(T[1]=a("div",{class:"lab-title"},"林记烘焙实验室",-1)),a("div",Zp,"行动力 "+h(b(s).ap)+"/"+h(b(s).maxAp)+" · 分类原料 "+h(b(qr))+" 份 · 试做消耗所选蛋糕配方用料的四分之一",1)]),n.value!=="home"&&!b(s).labPending?(v(),y("button",{key:0,class:"back",type:"button",onClick:W},"返回")):H("",!0)]),b(s).labPending?(v(),y("div",Xp,[a("div",em,h(b(s).labPending.passed?"试吃合格":"还需要调整"),1),a("div",nm,h(b(Ee)(b(s).labPending.productId).name)+" · 本次 "+h(b(s).labPending.score)+" 分",1),j.value?(v(),y("img",{key:0,class:"signature-cg",src:j.value,alt:"桂花栗子蛋糕复原插画"},null,8,tm)):H("",!0),a("div",rm,[(v(),y(Y,null,te([{key:"flavor",name:"风味"},{key:"texture",name:"口感"},{key:"appearance",name:"外观"},{key:"cost",name:"成本控制"}],x=>a("div",{key:x.key,class:"score"},[a("span",null,h(x.name),1),a("strong",null,h(b(s).labPending.scores[x.key]),1)])),64))]),a("ul",sm,[(v(!0),y(Y,null,te(b(s).labPending.feedback,x=>(v(),y("li",{key:x},h(x),1))),128))]),a("div",im,[b(s).labPending.passed?(v(),y("button",{key:0,class:"btn primary block",type:"button",disabled:b(s).ap<1||b(s).phase!=="playing",onClick:X},h(b(s).labPending.type==="signature"?"完成复原":"正式上架")+" · 再消耗 1 点行动力 ",9,om)):H("",!0),b(s).labPending.passed&&b(s).ap<1?(v(),y("div",lm,"行动力不足，结果已保存，明天可以继续。")):H("",!0),a("button",{class:"btn block",type:"button",disabled:b(s).phase!=="playing",onClick:ee},"按反馈调整并重试 · 再用 1 份样品",8,am),a("button",{class:"text-button",type:"button",onClick:P},"收起结果")])])):n.value==="home"?(v(),y(Y,{key:1},[T[3]||(T[3]=a("div",{class:"card card-pad intro"},[a("strong",null,"从配方到上架"),a("div",{class:"small muted"},"选配方、做试验、看试吃反馈。合格品可以生产，精制品以更高熟练度起步。")],-1)),T[4]||(T[4]=a("div",{class:"section-title"},"新品研发",-1)),(v(!0),y(Y,null,te(k.value,x=>(v(),y("button",{key:x.id,class:"card product-row",type:"button",disabled:x.month>b(s).month||b(s).unlocked.includes(x.id),onClick:C=>z(x)},[a("span",um,[a("strong",null,h(x.name),1),a("span",dm,h(x.id==="signature"?"M26 · 外婆旧配方复原":`M${x.month} 起 · ${x.desc}`),1)]),a("span",fm,h(b(s).unlocked.includes(x.id)?"已上架":x.month>b(s).month?`M${x.month}开放`:x.id==="signature"?"复原":"开始实验"),1)],8,cm))),128)),T[5]||(T[5]=a("div",{class:"section-title"},"配方改良",-1)),S.value.length?(v(),y("div",hm,[(v(!0),y(Y,null,te(S.value,x=>(v(),y("button",{key:x.id,class:"card product-row",type:"button",onClick:C=>N(x)},[a("span",mm,[a("strong",null,h(x.name),1),a("span",vm,"当前 Lv"+h(b(s).levels[x.id]||1),1)]),T[2]||(T[2]=a("span",{class:"chip"},"诊断问题",-1))],8,pm))),128))])):(v(),y("div",gm,"目前没有可改良的产品。")),T[6]||(T[6]=a("div",{class:"section-title"},"实验档案",-1)),M.reportRows.length?(v(),y("div",ym,[(v(!0),y(Y,null,te(M.reportRows,x=>(v(),y("div",{key:x.product.id,class:"card card-pad report-row"},[a("strong",null,h(x.product.name),1),(v(),y(Y,null,te(["development","improvement"],C=>{var R;return a("div",{key:C,class:"report-entry"},[x.reports[C]?(v(),y(Y,{key:0},[a("span",null,h(V(x.reports[C])),1),a("span",bm,"第 "+h(x.reports[C].run)+" 轮 · M"+h(x.reports[C].month),1),(R=x.reports[C].feedback)!=null&&R.length?(v(),y("div",_m,h(x.reports[C].feedback.join(" ")),1)):H("",!0)],64)):H("",!0)])}),64))]))),128))])):(v(),y("div",km,"完成实验后，报告会保存到这里并跨周目保留。"))],64)):n.value==="develop"&&$.value?(v(),y("div",Mm,[a("h2",null,h(b(Ee)(t.value).name)+" · 新品设计",1),a("p",xm,h($.value.theme)+" "+h($.value.focus),1),a("div",$m,"图鉴线索："+h((b(Ie).codex[t.value]||{}).hint||b(Ee)(t.value).desc),1),a("div",Em,[T[7]||(T[7]=a("div",{class:"field-title"},"风味方向",-1)),(v(!0),y(Y,null,te(b(Nu),(x,C)=>(v(),y("button",{key:x,type:"button",class:ve(["choice",{chosen:i.value===C}]),onClick:R=>i.value=C},h(x),11,Cm))),128))]),a("div",wm,[T[8]||(T[8]=a("div",{class:"field-title"},[gn("核心食材 "),a("span",{class:"small muted"},"可多选")],-1)),(v(!0),y(Y,null,te(b(ji)(t.value),x=>(v(),y("button",{key:x,type:"button",class:ve(["choice",{chosen:r.value.includes(x)}]),onClick:C=>Z(x)},h(x),11,Sm))),128)),a("div",Im,"配方提示："+h((b(Ie).codex[t.value]||{}).hint||""),1)]),a("div",Tm,[a("div",Am,h($.value.ratioLabel),1),(v(!0),y(Y,null,te(b(Ru),(x,C)=>(v(),y("button",{key:x,type:"button",class:ve(["choice",{chosen:o.value===C}]),onClick:R=>o.value=C},h(x),11,Om))),128))]),a("div",Dm,[T[9]||(T[9]=a("div",{class:"field-title"},"制作工艺",-1)),(v(!0),y(Y,null,te($.value.processes,(x,C)=>(v(),y("button",{key:x,type:"button",class:ve(["choice",{chosen:l.value===C}]),onClick:R=>l.value=C},h(x),11,Pm))),128))]),a("div",Nm,[T[10]||(T[10]=a("div",{class:"field-title"},[gn("装饰取舍 "),a("span",{class:"small muted"},"越丰富，外观越高，成本分越低")],-1)),(v(!0),y(Y,null,te(b(Fu),(x,C)=>(v(),y("button",{key:x,type:"button",class:ve(["choice",{chosen:c.value===C}]),onClick:R=>c.value=C},h(x)+" · 外观 "+h([72,90,100][C])+" / 成本 "+h(b(vl)[C]),11,Rm))),128))]),a("button",{class:"btn primary block",type:"button",disabled:b(s).ap<2||!b(at)(t.value,.25)||b(s).dayPhase!=="prep"||b(s).phase!=="playing",onClick:w},"开始试吃 · 1 点行动力",8,Fm),a("div",Lm,"失败也会消耗这次投入的材料；合格后上架再消耗 1 点行动力。"+h(b(at)(t.value,.25)?b(s).ap<2?"当前行动力不足以完成一次试做。":"":"配方材料不足，请先采购。"),1)])):n.value==="signature"?(v(),y("div",Vm,[T[15]||(T[15]=a("h2",null,"外婆的桂花栗子蛋糕 · 复原试验",-1)),T[16]||(T[16]=a("p",{class:"small muted"},"手记线索：「栗子甜则少放糖，桂花香淡则后撒。」先选核心材料，再完成三项判断。",-1)),a("div",jm,[T[11]||(T[11]=a("div",{class:"field-title"},"核心食材",-1)),(v(!0),y(Y,null,te(b(ji)("signature"),x=>(v(),y("button",{key:x,type:"button",class:ve(["choice",{chosen:r.value.includes(x)}]),onClick:C=>Z(x)},h(x),11,Bm))),128))]),a("div",qm,[T[12]||(T[12]=a("div",{class:"field-title"},"栗子甜度",-1)),(v(),y(Y,null,te(["减少额外糖量","维持标准糖量","再增加一些糖"],(x,C)=>a("button",{key:x,type:"button",class:ve(["choice",{chosen:i.value===C}]),onClick:R=>i.value=C},h(x),11,Hm)),64))]),a("div",Um,[T[13]||(T[13]=a("div",{class:"field-title"},"桂花冻的处理",-1)),(v(),y(Y,null,te(["趁热拌进栗子泥","冷却后单独夹层","趁热浸入戚风胚"],(x,C)=>a("button",{key:x,type:"button",class:ve(["choice",{chosen:o.value===C}]),onClick:R=>o.value=C},h(x),11,Km)),64))]),a("div",Wm,[T[14]||(T[14]=a("div",{class:"field-title"},"金桂的加入时间",-1)),(v(),y(Y,null,te(["烘烤前加入","蛋糕冷却后撒","装盒前现撒"],(x,C)=>a("button",{key:x,type:"button",class:ve(["choice",{chosen:l.value===C}]),onClick:R=>l.value=C},h(x),11,Gm)),64))]),a("button",{class:"btn primary block",type:"button",disabled:b(s).ap<2||!b(at)("signature",.25)||b(s).dayPhase!=="prep"||b(s).phase!=="playing",onClick:I},"试吃复原配方 · 1 点行动力",8,zm),T[17]||(T[17]=a("div",{class:"small muted"},"失败也会消耗已投入材料，合格后完成复原再消耗 1 点行动力。",-1))])):n.value==="improve"?(v(),y("div",Ym,[a("h2",null,h(b(Ee)(d.value).name)+" · 改良诊断",1),a("p",Jm,h(b(Ms)[d.value].question),1),(v(!0),y(Y,null,te(b(Ms)[d.value].options,(x,C)=>(v(),y("label",{key:x,class:"answer"},[Sa(a("input",{"onUpdate:modelValue":T[0]||(T[0]=R=>f.value=R),type:"radio",value:C},null,8,Qm),[[au,f.value,void 0,{number:!0}]]),a("span",null,h(x),1)]))),128)),u.value?(v(),y("p",Zm,h(u.value),1)):H("",!0),a("button",{class:"btn primary block",type:"button",disabled:f.value<0||b(s).ap<2||!b(at)(d.value,.25)||m.value||b(s).dayPhase!=="prep"||b(s).phase!=="playing",onClick:Q},"提交改良试验 · 1 点行动力",8,Xm),a("div",ev,"试做消耗配方材料的四分之一；答对后再消耗 1 点行动力，熟练度提升 1 级。"+h(b(at)(d.value,.25)?b(s).ap<2?"当前行动力不足以完成一次改良。":"":"配方材料不足，请先采购。"),1)])):H("",!0),p.value?(v(),y("p",nv,h(p.value),1)):H("",!0)]))}},rv=en(tv,[["__scopeId","data-v-339ec16c"]]),sv={key:1,class:"card card-pad"},iv={class:"small muted"},ov={class:"between small"},lv={class:"small muted"},av=["disabled"],cv={key:0,class:"branch-row"},uv={class:"between small"},dv={class:"small muted"},fv=["disabled"],hv={class:"card card-pad"},pv={class:"between"},mv={class:"chip"},vv={class:"card card-pad",style:{"margin-top":"10px"}},gv={class:"between",style:{"margin-bottom":"8px"}},yv={class:"small muted",style:{"margin-bottom":"8px"}},bv={key:0,class:"chip pink",style:{"font-size":"10px"}},_v={class:"card card-pad",style:{"margin-top":"10px"}},kv={class:"between"},Mv={class:"chip"},xv={class:"between small"},$v={class:"between small"},Ev={class:"between small"},Cv={class:"card card-pad",style:{"margin-top":"10px"}},wv={key:0,class:"empty"},Sv={class:"d"},Iv={class:"x"},Tv={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"},role:"status"},Av={__name:"ManagePage",props:{initialSection:{type:String,default:"overview"}},emits:["open-panel"],setup(e,{emit:n}){const t=e,r=n,i=ce(t.initialSection),o=ce("");let l=0;an(()=>t.initialSection,m=>i.value=m);const c=B(()=>mt.find(m=>!s.cities.includes(m.id)&&!s.surveyed.includes(m.id))),d=B(()=>On("survey")),f=B(()=>On("branch"));function u(m){const k=On(m);if(s.dayPhase!=="prep"||k.disabled||s.ap<k.ap||s.cash<k.cost){p(s.dayPhase!=="prep"?"请在营业前筹备。":k.note);return}gt(m,{})?p(m==="survey"?"城市考察完成，可以安排开店。":"新店筹备完成。"):p("暂时无法完成这项筹备。")}function p(m){o.value=m,clearTimeout(l),l=setTimeout(()=>o.value="",2200)}return(m,k)=>{var S;return v(),y("div",null,[i.value==="lab"?(v(),fn(rv,{key:0})):i.value==="branch"?(v(),y("div",sv,[k[3]||(k[3]=a("div",{class:"h2"},"城市考察与分店筹备",-1)),a("p",iv,"在准备阶段安排考察和开店。下一站："+h(((S=c.value)==null?void 0:S.name)||"所有城市已纳入版图"),1),a("div",ov,[a("span",null,h(d.value.name),1),a("span",null,"行动力 "+h(d.value.ap)+" · ¥"+h(d.value.cost),1)]),a("div",lv,h(d.value.note),1),a("button",{class:"btn block",type:"button",disabled:b(s).dayPhase!=="prep"||d.value.disabled||b(s).ap<d.value.ap,onClick:k[0]||(k[0]=$=>u("survey"))},"开始城市考察",8,av),b(s).surveyed.length?(v(),y("div",cv,[a("div",uv,[a("strong",null,h(f.value.name),1),a("span",null,"行动力 "+h(f.value.ap)+" · ¥"+h(f.value.cost),1)]),a("div",dv,h(f.value.note),1),a("button",{class:"btn primary block",type:"button",disabled:b(s).dayPhase!=="prep"||f.value.disabled||b(s).ap<f.value.ap,onClick:k[1]||(k[1]=$=>u("branch"))},"筹备并开店",8,fv)])):H("",!0)])):(v(),y(Y,{key:2},[a("div",hv,[a("div",pv,[k[4]||(k[4]=a("div",null,[a("div",{class:"h2",style:{margin:"0"}},"经营手账"),a("div",{class:"small muted"},"记录阶段目标、经营结果与重要收藏。")],-1)),a("span",mv,"行动力 "+h(b(s).ap)+"/"+h(b(s).maxAp),1)]),a("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:k[2]||(k[2]=$=>r("open-panel","codex"))},"打开产品图鉴、顾客档案与相册")]),a("div",vv,[a("div",gv,[k[5]||(k[5]=a("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),a("span",{class:ve(["chip",b(Ln).done>=b(Ln).need?"sage":""])},h(b(Ln).done)+" / "+h(b(Ln).need||"—"),3)]),a("div",yv,h(b(Hr).name)+" · 完成 "+h(b(Ln).need)+" 项即可进入下一阶段。",1),(v(!0),y(Y,null,te(b(Ln).list,$=>(v(),y("div",{key:$.text,class:ve(["goal",{done:$.done}])},[k[6]||(k[6]=a("span",{class:"dot"},null,-1)),a("span",null,h($.text),1),$.expand?(v(),y("span",bv,"扩张")):H("",!0)],2))),128))]),a("div",_v,[a("div",kv,[k[7]||(k[7]=a("div",{class:"h2"},"本月经营",-1)),a("span",Mv,"第 "+h(b(s).day)+"/5 日",1)]),a("div",xv,[k[8]||(k[8]=a("span",{class:"muted"},"本月已到账",-1)),a("span",null,"¥"+h(b(s).monthRev.toLocaleString()),1)]),a("div",$v,[k[9]||(k[9]=a("span",{class:"muted"},"本月销量",-1)),a("span",null,h(Object.values(b(s).monthSold).reduce(($,j)=>$+j,0))+" 个",1)]),a("div",Ev,[k[10]||(k[10]=a("span",{class:"muted"},"口碑 / 知名度",-1)),a("span",null,h(Math.round(b(s).reputation))+" / "+h(Math.round(b(s).popularity)),1)])]),a("div",Cv,[k[11]||(k[11]=a("div",{class:"h2"},"最近发生的事",-1)),b(s).log.length?H("",!0):(v(),y("div",wv,"还没有记录。")),(v(!0),y(Y,null,te(b(s).log.slice(0,12),($,j)=>(v(),y("div",{key:j,class:ve(["logline",$.tone])},[a("span",Sv,h($.month)+"月"+h($.day)+"日",1),a("span",Iv,h($.text),1)],2))),128))])],64)),o.value?(v(),y("p",Tv,h(o.value),1)):H("",!0)])}}},Ov=en(Av,[["__scopeId","data-v-baa859ee"]]),Dv={class:"seg"},Pv=["onClick"],Nv={key:0,class:"card"},Rv={class:"art"},Fv={class:"body"},Lv={class:"name"},Vv={class:"chip",style:{"font-size":"10px"}},jv={key:0,class:"chip",style:{"font-size":"10px"}},Bv={class:"desc"},qv={key:0,class:"hint"},Hv={key:1,class:"nums"},Uv={key:1},Kv={class:"photos"},Wv={class:"im"},Gv=["src","alt"],zv={key:1,class:"small muted"},Yv={key:2,style:{"font-size":"20px",opacity:"0.3"}},Jv={class:"cp"},Qv={class:"ti"},Zv={class:"cc"},Xv={class:"cc"},e1={key:2,class:"lab-list"},n1={key:0,class:"card card-pad small muted"},t1={class:"between"},r1={class:"h2",style:{margin:"0"}},s1={class:"chip",style:{"font-size":"10px"}},i1=["src"],o1={class:"between"},l1={class:"small muted"},a1={key:0,class:"lab-scores"},c1={key:1,class:"small muted"},u1={key:3,class:"card"},d1={style:{flex:"1 1 auto","min-width":"0"}},f1={class:"nm"},h1={key:0,class:"chip sage",style:{"font-size":"10px"}},p1={key:1,class:"chip pink",style:{"font-size":"10px"}},m1={class:"nt"},v1={key:0,class:"nt"},g1={key:4,class:"customer-list"},y1={class:"between"},b1={class:"h2",style:{margin:"0"}},_1={class:"chip",style:{"font-size":"10px"}},k1={class:"cc"},M1={class:"cc"},x1={class:"small muted"},$1={key:5,class:"collection"},E1={class:"h2"},C1={class:"small muted"},w1={__name:"CodexPage",setup(e){const n=ce("product"),t=B(()=>Ke.map(u=>({...u,flavor:(Ie.codex[u.id]||{}).flavor||u.desc,hint:(Ie.codex[u.id]||{}).hint||"",owned:s.unlocked.includes(u.id),current:s.unlocked.includes(u.id),collected:s.career.products.includes(u.id),lv:Math.round((s.levels[u.id]||1)*10)/10,price:Jt(u.id),sold:s.monthSold[u.id]||0}))),r=B(()=>Object.keys(sr).map(u=>({id:u,...sr[u],owned:s.photos.includes(u),current:s.photos.includes(u),collected:s.career.photos.includes(u)}))),i=B(()=>Ke.map(u=>({...u,reports:s.career.labReports[u.id]||{}})).filter(u=>u.reports.development||u.reports.improvement)),o=B(()=>Ys("osmanthus").src),l=B(()=>mt.map(u=>({...u,owned:s.cities.includes(u.id),surveyed:s.surveyed.includes(u.id)}))),c=B(()=>js.map(u=>({...u,productName:Ke.find(p=>p.id===u.product).name,visit:s.regularCustomers[u.id]}))),d=B(()=>({products:Ke.map(u=>({id:u.id,name:u.name,collected:s.career.products.includes(u.id),current:s.unlocked.includes(u.id)})),photos:Object.keys(sr).map(u=>({id:u,name:sr[u].title,collected:s.career.photos.includes(u),current:s.photos.includes(u)})),decorations:Vs.map(u=>({id:u.id,name:u.name,collected:s.career.decorations.includes(u.id),current:s.decorations.includes(u.id)})),endings:[...vt.filter(u=>!u.final).map(u=>({id:u.short.key,name:u.short.name,collected:s.career.endings.includes(u.short.key),current:s.runEndings.includes(u.short.key)})),...Object.entries(ml).map(([u,p])=>({id:u,name:p.name,collected:s.career.endings.includes(u),current:s.runEndings.includes(u)}))]}));function f(u){return u.current?"本轮已解锁":u.collected?"已收录 · 本轮未解锁":"尚未收录"}return(u,p)=>(v(),y("div",null,[a("div",Dv,[(v(),y(Y,null,te([{k:"product",t:"产品"},{k:"customer",t:"顾客"},{k:"photo",t:"相册"},{k:"city",t:"门店"},{k:"collection",t:"收藏"},{k:"lab",t:"实验档案"}],m=>a("button",{key:m.k,type:"button",class:ve({on:n.value===m.k}),onClick:k=>n.value=m.k},h(m.t),11,Pv)),64))]),n.value==="product"?(v(),y("div",Nv,[(v(!0),y(Y,null,te(t.value,m=>(v(),y("div",{key:m.id,class:ve(["cake",{locked:!m.owned}])},[a("div",Rv,[Te(Js,{id:m.id,colors:m.colors},null,8,["id","colors"])]),a("div",Fv,[a("div",Lv,[a("span",null,h(m.name),1),a("span",Vv,h(f(m)),1),m.owned?(v(),y("span",jv,"Lv"+h(m.lv),1)):H("",!0)]),a("div",Bv,h(m.owned?m.flavor:"第 "+m.month+" 个月解锁"),1),m.owned&&m.hint?(v(),y("div",qv,"配方："+h(m.hint),1)):H("",!0),m.owned?(v(),y("div",Hv,[a("span",null,"¥"+h(m.price),1),a("span",null,h(m.diff)+" 点/个",1),a("span",null,"本月卖出 "+h(m.sold),1)])):H("",!0)])],2))),128))])):n.value==="photo"?(v(),y("div",Uv,[a("div",Kv,[(v(!0),y(Y,null,te(r.value,m=>(v(),y("div",{key:m.id,class:"photo"},[a("div",Wv,[m.collected&&m.img?(v(),y("img",{key:0,src:m.img,alt:m.title},null,8,Gv)):m.collected?(v(),y("span",zv,"未冲印")):(v(),y("span",Yv,"?"))]),a("div",Jv,[a("div",Qv,h(m.collected?m.title:"还没发生"),1),a("div",Zv,h(m.collected?m.caption:"继续经营，它会出现"),1),a("div",Xv,h(f(m)),1)])]))),128))])])):n.value==="lab"?(v(),y("div",e1,[i.value.length?H("",!0):(v(),y("div",n1,"完成一次新品上架或配方改良后，报告会保存在这里。")),(v(!0),y(Y,null,te(i.value,m=>{var k;return v(),y("article",{key:m.id,class:"card card-pad lab-report"},[a("div",t1,[a("div",r1,h(m.name),1),a("span",s1,h(b(s).career.products.includes(m.id)?"配方已收录":"已研发"),1)]),((k=m.reports.development)==null?void 0:k.type)==="signature"&&o.value?(v(),y("img",{key:0,class:"lab-cg",src:o.value,alt:"桂花栗子蛋糕复原插画"},null,8,i1)):H("",!0),(v(),y(Y,null,te(["development","improvement"],S=>a("div",{key:S,class:"lab-entry"},[m.reports[S]?(v(),y(Y,{key:0},[a("div",o1,[a("strong",null,h(S==="improvement"?"配方改良":m.reports[S].type==="signature"?"外婆配方复原":m.reports[S].refined?"精制新品研发":"新品研发"),1),a("span",l1,"第 "+h(m.reports[S].run)+" 轮 · M"+h(m.reports[S].month),1)]),S==="development"?(v(),y("div",a1,[a("span",null,"总分 "+h(m.reports[S].score),1),(v(),y(Y,null,te([{key:"flavor",label:"风味"},{key:"texture",label:"口感"},{key:"appearance",label:"外观"},{key:"cost",label:"成本"}],$=>a("span",{key:$.key},h($.label)+" "+h(m.reports[S].scores[$.key]),1)),64))])):(v(),y("div",c1,"熟练度 Lv"+h(m.reports[S].levelBefore)+" → Lv"+h(m.reports[S].levelAfter),1)),(v(!0),y(Y,null,te(m.reports[S].feedback,$=>(v(),y("p",{key:$,class:"lab-note"},h($),1))),128))],64)):H("",!0)])),64))])}),128))])):n.value==="city"?(v(),y("div",u1,[(v(!0),y(Y,null,te(l.value,m=>(v(),y("div",{key:m.id,class:ve(["city",{on:m.owned,off:!m.owned&&!m.surveyed}])},[p[0]||(p[0]=a("span",{class:"dot"},null,-1)),a("div",d1,[a("div",f1,[gn(h(m.name)+" ",1),m.owned?(v(),y("span",h1,"营业中")):m.surveyed?(v(),y("span",p1,"已考察")):H("",!0)]),a("div",m1,h(m.note),1),m.owned?H("",!0):(v(),y("div",v1," 第 "+h(m.month)+" 个月可考察 · 口碑 "+h(m.rep)+" · 开店 ¥"+h(m.cost),1))])],2))),128))])):n.value==="customer"?(v(),y("div",g1,[(v(!0),y(Y,null,te(c.value,m=>(v(),y("div",{key:m.id,class:"card card-pad customer"},[a("div",y1,[a("div",b1,h(m.name),1),a("span",_1,h(m.visit.purchases)+" 次购买",1)]),a("div",k1,"每月第 "+h(m.day)+" 个经营日 · "+h(m.productName),1),a("div",M1,h(m.preference),1),(v(!0),y(Y,null,te(m.stories,(k,S)=>(v(),y("div",{key:S,class:"customer-story"},[a("div",x1,h(S===0?"第一次购买":"第三次购买"),1),a("div",null,h(m.visit.stories.includes(S)?k:"继续经营，解锁这段回忆"),1)]))),128))]))),128))])):(v(),y("div",$1,[(v(),y(Y,null,te([{key:"products",title:"产品"},{key:"photos",title:"相册"},{key:"decorations",title:"装饰"},{key:"endings",title:"结局"}],m=>a("div",{key:m.key,class:"card card-pad"},[a("div",E1,h(m.title),1),(v(!0),y(Y,null,te(d.value[m.key],k=>(v(),y("div",{key:k.id,class:"between collect-row"},[a("span",null,h(k.name),1),a("span",C1,h(f(k)),1)]))),128))])),64))]))]))}},S1=en(w1,[["__scopeId","data-v-32cad929"]]),I1={class:"world"},T1=["src","alt"],A1={class:"world-heading"},O1={class:"world-eyebrow"},D1={class:"world-title"},P1={class:"world-subtitle"},N1=["onClick"],R1={class:"world-status"},F1={key:1,class:"world-toast",role:"status"},L1={key:2,class:"world-travel"},V1={class:"world-travel-head"},j1={class:"world-travel-grid"},B1=["onClick"],q1=["src"],H1={class:"world-action-sheet"},U1={key:0},K1={class:"world-action-buttons"},W1=["disabled"],G1={__name:"SceneMapPage",props:{scene:{type:String,default:"shop"}},emits:["change-scene","open-panel"],setup(e,{emit:n}){const t=e,r=n,i={shop:{name:"林记烘焙",sub:"熟悉的木门后，总有蛋糕香",img:"bg-shop.webp",icon:"🏠"},kitchen:{name:"烘焙后厨",sub:"今天也要做出好吃的蛋糕",img:"bg-kitchen.webp",icon:"🥣"},street:{name:"栖云镇老街",sub:"沿着青石板路，去熟悉的地方",img:"bg-street.webp",icon:"🌿"},home:{name:"林念的家",sub:"家里的灯总为你留着",img:"bg-home.webp",icon:"🪴"},cafe:{name:"街角咖啡馆",sub:"一杯咖啡与一点新灵感",img:"bg-cafe.webp",icon:"☕"},park:{name:"河边公园",sub:"适合散步、看看河面",img:"bg-park.webp",icon:"🍃"},market:{name:"小镇市集",sub:"季节活动的摊位已经摆好",img:"bg-market.webp",icon:"🎪"},studio:{name:"设计工作室",sub:"配色、包装与有趣的创意",img:"bg-studio.webp",icon:"🎨"},school:{name:"熟悉的高中",sub:"那些一起走过的旧时光",img:"bg-school.webp",icon:"📚"},store:{name:"品牌新店",sub:"林记走向更远的地方",img:"bg-store.webp",icon:"🏬"}};function o(I){return I==="studio"?s.month>=21:I==="market"?s.month>=6:I==="store"?s.month>=19:I==="school"?s.month>=4:!0}const l=B(()=>Object.entries(i).filter(([I])=>o(I)).map(([I,X])=>({id:I,...X}))),c=B(()=>i[t.scene]||i.shop),d=B(()=>t.scene==="shop"?"bg-shop-lv"+s.shopLevel+".webp":c.value.img),f=B(()=>Xe(d.value)==="ok"?d.value:c.value.img),u=B(()=>{const I={shop:[{id:"counter",x:61,y:55,text:"柜台 · 预约与营业",kind:"panel",value:"shop",section:"counter"},{id:"mom",x:87,y:47,text:"和妈妈聊聊",kind:"action",value:"momchat"},{id:"phone",x:14,y:71,text:"手机 · 宣传",kind:"action",value:"market"},{id:"book",x:20,y:84,text:"装修册 · 店铺升级",kind:"panel",value:"renovation"},{id:"diary",x:79,y:84,text:"手账 · 目标与图鉴",kind:"panel",value:"manage"},{id:"kitchen",x:94,y:73,text:"去后厨 →",kind:"scene",value:"kitchen"},{id:"door",x:94,y:91,text:"出门 →",kind:"scene",value:"street"}],kitchen:[{id:"workbench",x:49,y:69,text:"操作台 · 排产与制作",kind:"panel",value:"kitchen"},{id:"lab",x:76,y:44,text:"实验台 · 新品研发",kind:"panel",value:"manage",section:"lab"},{id:"staff",x:20,y:39,text:"排班板 · 员工与培训",kind:"panel",value:"partners"},{id:"back",x:7,y:91,text:"← 回店内",kind:"scene",value:"shop"}],street:[{id:"supplier",x:83,y:56,text:"食材铺 · 采购",kind:"panel",value:"supplier"},{id:"sq",x:70,y:78,text:"和苏晴聊聊",kind:"action",value:"sqchat"},{id:"bakery",x:16,y:55,text:"← 回林记",kind:"scene",value:"shop"},{id:"park",x:40,y:90,text:"去公园 →",kind:"scene",value:"park"},{id:"home",x:80,y:90,text:"回家 →",kind:"scene",value:"home"}],store:[{id:"expansion",x:54,y:67,text:"新店规划桌 · 城市与分店",kind:"panel",value:"manage",section:"branch"},{id:"exit",x:8,y:91,text:"← 回栖云镇",kind:"scene",value:"street"}]};return I[t.scene]?I[t.scene]:t.scene==="home"?[{id:"exit",x:10,y:90,text:"← 出门",kind:"scene",value:"street"}]:[{id:"exit",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}]}),p=ce(!1),m=ce(null),k=ce("");let S;an(()=>t.scene,()=>{m.value=null,p.value=!1});function $(I){k.value=I,clearTimeout(S),S=setTimeout(()=>{k.value=""},2400)}function j(I){if(!o(I))return $("這個地方還沒有開放。");m.value=null,p.value=!1,r("change-scene",I)}const K=B(()=>!m.value||m.value.kind!=="action"?null:m.value.value==="momchat"?{ap:1,cost:0,disabled:!1,note:"家庭默契 +4"}:On(m.value.value));function z(I){if(I.kind==="scene")return j(I.value);if(I.kind==="panel")return r("open-panel",I.value,I.section||"overview");m.value=I}function Z(){const I=m.value;if(!I||s.phase!=="playing")return;if(s.dayPhase!=="prep")return $("今天已经开门，打烊后再行动。");const X=K.value;if(!X||X.disabled||s.ap<X.ap||s.cash<X.cost)return $((X==null?void 0:X.note)||"现在暂时无法行动。");(I.value==="momchat"?gt("talk",{partner:"mom"}):gt(I.value,{}))?($(I.text+" · 已完成"),m.value=null):$("暂时无法执行，请检查行动力或触发条件。")}function w(I){return I==="studio"?"21":I==="market"?"6":I==="store"?"19":"4"}return(I,X)=>{var ee,P,N,Q;return v(),y("section",I1,[a("div",{class:ve(["world-canvas","world-"+e.scene])},[b(Xe)(f.value)!=="no"?(v(),y("img",{key:0,class:"world-background",src:b(je)(f.value),alt:c.value.name},null,8,T1)):H("",!0),X[6]||(X[6]=a("div",{class:"world-vignette","aria-hidden":"true"},null,-1)),a("header",A1,[a("div",null,[a("span",O1,h(e.scene==="shop"?"HOME":"QIYUN TOWN")+" · 第 "+h(b(s).month)+" 月",1),a("h1",D1,h(c.value.name),1),a("div",P1,h(c.value.sub),1)]),a("button",{class:"world-compass",type:"button","aria-label":"打开地点地图",onClick:X[0]||(X[0]=W=>p.value=!p.value)},"地图")]),(v(!0),y(Y,null,te(u.value,W=>(v(),y("button",{key:W.id,class:"world-hotspot",type:"button",style:Ye({left:W.x+"%",top:W.y+"%",transform:W.x>80?"translate(-100%,-50%)":W.x<15?"translate(0,-50%)":"translate(-50%,-50%)"}),onClick:V=>z(W)},h(W.text),13,N1))),128)),a("div",R1,[a("span",null,h(b(Hr).name),1),a("span",null,"阶段目标 "+h(b(Ln).done)+"/"+h(b(Ln).need||"—"),1),a("span",null,"口碑 "+h(Math.round(b(s).reputation)),1)]),k.value?(v(),y("div",F1,h(k.value),1)):H("",!0),p.value?(v(),y("div",L1,[a("div",V1,[X[4]||(X[4]=a("span",null,"选择地点",-1)),a("button",{type:"button","aria-label":"关闭地点地图",onClick:X[1]||(X[1]=W=>p.value=!1)},"✕")]),a("div",j1,[(v(!0),y(Y,null,te(l.value,W=>(v(),y("button",{key:W.id,type:"button",class:ve(["world-travel-place",{current:e.scene===W.id}]),onClick:V=>j(W.id)},[a("img",{src:b(je)(W.img),alt:""},null,8,q1),a("span",null,h(W.icon)+" "+h(W.name),1)],10,B1))),128)),(v(!0),y(Y,null,te(["school","market","store","studio"].filter(W=>!o(W)),W=>(v(),y("div",{key:"locked-"+W,class:"world-travel-place locked"},[X[5]||(X[5]=a("span",{class:"locked-avatar"},"?",-1)),a("span",null,"未解锁 · M"+h(w(W)),1)]))),128))])])):H("",!0),m.value?(v(),y("div",{key:3,class:"world-action-mask",onClick:X[3]||(X[3]=Zn(W=>m.value=null,["self"]))},[a("div",H1,[a("strong",null,h(m.value.text),1),a("span",null,h((ee=K.value)==null?void 0:ee.note),1),K.value?(v(),y("small",U1,"消耗 "+h(K.value.ap)+" 点行动力"+h(K.value.cost?" · ¥"+K.value.cost:""),1)):H("",!0),a("div",K1,[a("button",{class:"world-action-cancel",type:"button",onClick:X[2]||(X[2]=W=>m.value=null)},"取消"),a("button",{class:"world-action-confirm",type:"button",disabled:b(s).dayPhase!=="prep"||((P=K.value)==null?void 0:P.disabled)||b(s).ap<(((N=K.value)==null?void 0:N.ap)||0)||b(s).cash<(((Q=K.value)==null?void 0:Q.cost)||0),onClick:Z},"开始行动",8,W1)])])])):H("",!0)],2)])}}},z1=en(G1,[["__scopeId","data-v-169e9b18"]]),Y1={class:"card card-pad"},J1={class:"between"},Q1={class:"chip"},Z1=["disabled"],X1={class:"card ingredient-list"},eg={class:"small muted"},ng={class:"stepper"},tg=["disabled","onClick"],rg=["disabled","onClick"],sg={key:0,class:"small",role:"status"},ig={class:"purchase-footer"},og=["disabled"],lg={__name:"SupplierPage",setup(e){const n=it({}),t=ce(""),r=B(()=>ut.filter(d=>d.month<=s.month)),i=B(()=>r.value.reduce((d,f)=>d+(n[f.id]||0)*f.price,0));function o(d,f){n[d]=Math.max(0,Math.min(99,(n[d]||0)+f))}function l(){Object.keys(n).forEach(d=>{n[d]=0}),Object.assign(n,Wu()),t.value="已按今天的生产计划填入缺料数量。"}function c(){const d=Ku(n);t.value=d.message,d.ok&&Object.keys(n).forEach(f=>{n[f]=0})}return(d,f)=>(v(),y("div",null,[a("div",Y1,[a("div",J1,[f[0]||(f[0]=a("div",{class:"h2"},"食材铺",-1)),a("span",Q1,"仓库 "+h(b(qr))+"/"+h(b(s).warehouseCapacity),1)]),f[1]||(f[1]=a("p",{class:"small muted"},"选好今天要用的原料，一次结账。采购消耗 1 点行动力；二周目优惠在首笔采购时抵扣，最高 ¥300。",-1)),a("button",{class:"btn",type:"button",disabled:b(s).dayPhase!=="prep",onClick:l},"按生产计划补齐缺料",8,Z1)]),a("div",X1,[(v(!0),y(Y,null,te(r.value,u=>(v(),y("div",{key:u.id,class:"ingredient"},[a("div",null,[a("strong",null,h(u.name),1),a("div",eg,"库存 "+h(b(s).pantry[u.id]||0)+" · ¥"+h(u.price)+" / 份",1)]),a("div",ng,[a("button",{type:"button",disabled:b(s).dayPhase!=="prep",onClick:p=>o(u.id,-1)},"−",8,tg),a("span",null,h(n[u.id]||0),1),a("button",{type:"button",disabled:b(s).dayPhase!=="prep",onClick:p=>o(u.id,1)},"+",8,rg)])]))),128))]),t.value?(v(),y("p",sg,h(t.value),1)):H("",!0),a("div",ig,[a("span",null,"合计 ¥"+h(i.value),1),a("button",{class:"btn primary",type:"button",disabled:b(s).dayPhase!=="prep"||b(s).ap<1||i.value<=0,onClick:c},"确认采购 · 1 点行动力",8,og)])]))}},ag=en(lg,[["__scopeId","data-v-dbe995a5"]]),cg={class:"card card-pad"},ug={class:"between"},dg={class:"chip"},fg={class:"small muted"},hg=["disabled"],pg={class:"card card-pad section-card"},mg={class:"small muted"},vg=["disabled","onClick"],gg={class:"card card-pad section-card"},yg={class:"small muted"},bg=["disabled","onClick"],_g={__name:"RenovationPage",setup(e){const n=B(()=>Ut.find(o=>o.lv===s.shopLevel+1)),t=B(()=>pl.map(o=>({...o,tier:Br(o.id),next:kl(o.id)}))),r=B(()=>Vs.map(o=>({...o,owned:s.decorations.includes(o.id),available:s.shopLevel>=o.shopLevel})));function i(){if(s.dayPhase!=="prep")return;const o=On("decorate");!o.disabled&&s.ap>=o.ap&&s.cash>=o.cost&&gt("decorate",{})}return(o,l)=>(v(),y("div",null,[a("div",cg,[a("div",ug,[l[0]||(l[0]=a("div",{class:"h2"},"店铺升级",-1)),a("span",dg,h(b(bu)(b(s).shopLevel).name),1)]),a("div",fg,"舒适度 "+h(b(xs))+"/4 · 自然客流 +"+h(b(xs)*2)+"%",1),a("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:b(s).dayPhase!=="prep"||!n.value||b(On)("decorate").disabled||b(s).ap<2,onClick:i},h(n.value?"升级到 "+n.value.name+" · ¥"+n.value.cost+" · 2 点行动力":"已达到最高等级"),9,hg)]),a("div",pg,[l[1]||(l[1]=a("div",{class:"h2"},"装饰",-1)),(v(!0),y(Y,null,te(r.value,c=>(v(),y("div",{key:c.id,class:"row-item"},[a("div",null,[a("strong",null,h(c.name),1),a("div",mg,"舒适度 +1 · 店铺等级 "+h(c.shopLevel)+" · ¥"+h(c.cost),1)]),a("button",{class:"btn",type:"button",disabled:b(s).dayPhase!=="prep"||c.owned||!c.available||b(s).cash<c.cost||b(s).phase!=="playing",onClick:d=>b(td)(c.id)},h(c.owned?"已购":c.available?"购买":"等级不足"),9,vg)]))),128))]),a("div",gg,[l[2]||(l[2]=a("div",{class:"between"},[a("div",{class:"h2"},"设备"),a("span",{class:"small muted"},"升级后立即生效")],-1)),(v(!0),y(Y,null,te(t.value,c=>{var d;return v(),y("div",{key:c.id,class:"row-item"},[a("div",null,[a("strong",null,h(c.name)+" · "+h(c.tier)+"/3",1),a("div",yg,h(c.desc)+" · "+h(((d=c.next)==null?void 0:d.text)||"已经满级"),1)]),a("button",{class:"btn",type:"button",disabled:b(s).dayPhase!=="prep"||!c.next||b(s).cash<c.next.cost,onClick:f=>b(Hu)(c.id)},h(c.next?"¥"+c.next.cost:"满级"),9,bg)])}),128))])]))}},kg=en(_g,[["__scopeId","data-v-d0e3b39f"]]),Mg={class:"app"},xg={class:"topbar"},$g={class:"m serif"},Eg={class:"purse"},Cg={class:"scroll scene-scroll"},wg={class:"between scene-meta"},Sg={class:"small muted"},Ig={class:"chip"},Tg=["disabled"],Ag={class:"scene-panel"},Og={class:"scene-panel-head"},Dg={class:"small muted"},Pg={class:"scene-panel-content"},Ng={class:"sheet"},Rg={class:"sheet-head"},Fg={class:"t serif"},Lg={class:"small muted"},Vg={class:"sheet-body"},jg={class:"card card-pad"},Bg={class:"between small",style:{"margin-bottom":"6px"}},qg={class:"between small",style:{"margin-bottom":"6px"}},Hg={class:"between small",style:{"margin-bottom":"6px"}},Ug={class:"between small"},Kg={key:0,class:"card card-pad",style:{"margin-top":"12px"}},Wg={class:"h2"},Gg={class:"between small",style:{"margin-bottom":"6px"}},zg={class:"between small",style:{"margin-bottom":"6px"}},Yg={class:"between small",style:{"margin-bottom":"6px"}},Jg={class:"between small"},Qg={class:"between small",style:{"margin-top":"6px"}},Zg={key:0,class:"delta"},Xg={key:0,class:"mrep"},e0={class:"mrep-b"},n0={key:1,class:"mrep"},t0={class:"mrep-b"},r0={key:2,class:"mrep"},s0={class:"mrep-b"},i0={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},o0={class:"sheet-foot"},l0={key:3,class:"mask"},a0={class:"sheet"},c0={class:"sheet-body",style:{"padding-top":"22px"}},u0={class:"small muted serif"},d0={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},f0={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},h0={class:"card card-pad"},p0={class:"between small",style:{"margin-bottom":"6px"}},m0={class:"between small",style:{"margin-bottom":"6px"}},v0={class:"between small"},g0={key:1,class:"card card-pad",style:{"margin-top":"12px"}},y0={class:"pn"},b0={class:"muted small"},_0={class:"pt"},k0={class:"sheet-foot"},M0={__name:"App",setup(e){const n=ce("shop"),t=ce(""),r=ce("overview"),i=ce("counter");function o(P,N="overview"){t.value=P,P==="manage"&&(r.value=N),P==="shop"&&(i.value=N)}function l(){t.value="",r.value="overview",i.value="counter"}const c=ce(null),d=ce(null),f=ce(null),u=ce(!1),p=new URLSearchParams(location.search).get("dev")==="1",m=B(()=>s.phase==="ended"&&s.ending&&!sn.events.length&&!u.value?s.ending:null),k=B(()=>p&&s.ending&&vt.some(P=>!P.final&&P.short.key===s.ending.key)),S=B(()=>sn.events.length);function $(){sn.events.length&&(c.value=sn.events[0])}function j(){sn.events.shift(),c.value=null,ue();const P=sn.events[0];P&&P.month===s.month&&setTimeout($,200)}function K(P){d.value=P,P.day===Er&&(f.value=s.report)}function z(){d.value=null,f.value=null,sn.events.length&&$()}function Z(){Xu()&&(n.value="shop",t.value="",u.value=!1,cs(),$())}function w(){u.value=!0}function I(){nd()&&(u.value=!1,d.value=null,f.value=null,cs(),$())}function X(){c.value||d.value||ed()&&(c.value=null,f.value=null,d.value=null,$())}an(()=>s.autoStory,P=>{P&&(s.autoStory=!1,setTimeout(()=>{!c.value&&sn.events.length&&$()},90))});const ee=B(()=>{if(!m.value)return[];const P=ht.filter(Q=>s.staff.includes(Q.id)).map(Q=>({name:Q.nick,role:Q.role,...Gi(Q.id)||{}})),N=Gi("mom");return N&&P.push({name:"林暖",role:"母亲",...N}),P.filter(Q=>Q.title)});return Rr(()=>{Nd(),Ju()||El(),cs(),$()}),(P,N)=>(v(),y("div",Mg,[a("div",xg,[a("div",$g,[gn(h(b(ls)(b(s).month))+" ",1),a("small",null,"第 "+h(b(s).month)+" / 36 月 · 第 "+h(b(s).day)+" / "+h(b(Er))+" 日",1)]),a("div",Eg,[N[1]||(N[1]=a("span",{class:"y"},"¥",-1)),gn(h(b(s).cash.toLocaleString()),1)])]),a("div",Cg,[a("div",wg,[a("span",Sg,h(b(Hr).name),1),a("span",Ig,"行动力 "+h(b(s).ap)+" · 体力 "+h(b(s).stamina),1)]),p&&b(s).phase==="playing"?(v(),y("button",{key:0,class:"btn",type:"button",style:{width:"100%",margin:"0 0 8px"},disabled:!!c.value||!!d.value,onClick:X},"开发者后门 · 跳到下个月",8,Tg)):H("",!0),Te(z1,{scene:n.value,onChangeScene:N[0]||(N[0]=Q=>n.value=Q),onOpenPanel:o},null,8,["scene"]),t.value?(v(),y("div",{key:1,class:"scene-panel-mask",onClick:Zn(l,["self"])},[a("section",Ag,[a("header",Og,[a("div",null,[a("div",Dg,"林记烘焙 · "+h(b(ls)(b(s).month)),1),a("strong",null,h({shop:"柜台营业",kitchen:"后厨操作台",partners:"员工排班板",manage:"经营手账",codex:"图鉴与相册",supplier:"食材采购",renovation:"店铺升级"}[t.value]||"经营"),1)]),a("button",{type:"button",class:"scene-panel-close",onClick:l},"✕")]),a("div",Pg,[t.value==="shop"?(v(),fn(Rh,{key:0,paused:!!c.value,onClosed:K},null,8,["paused"])):t.value==="renovation"?(v(),fn(kg,{key:1})):t.value==="supplier"?(v(),fn(ag,{key:2})):t.value==="kitchen"?(v(),fn(bp,{key:3,paused:!!c.value},null,8,["paused"])):t.value==="partners"?(v(),fn(Yp,{key:4})):t.value==="manage"?(v(),fn(Ov,{key:5,"initial-section":r.value,onOpenPanel:o},null,8,["initial-section"])):t.value==="codex"?(v(),fn(S1,{key:6})):H("",!0)])])])):H("",!0)]),S.value?(v(),y("button",{key:0,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"16px","z-index":"20","box-shadow":"var(--shadow)"},onClick:$}," 有 "+h(S.value)+" 段剧情 ",1)):H("",!0),c.value?(v(),fn(pf,{key:1,ev:c.value,onDone:j},null,8,["ev"])):H("",!0),d.value?(v(),y("div",{key:2,class:"mask",onClick:Zn(z,["self"])},[a("div",Ng,[a("div",Rg,[a("div",Fg,h(f.value?"月末结算":"打烊了"),1),a("div",Lg,h(b(ls)(b(s).month))+" · 第 "+h(d.value.day)+" 个经营日",1)]),a("div",Vg,[a("div",jg,[a("div",Bg,[N[2]||(N[2]=a("span",{class:"muted"},"今天卖出",-1)),a("span",null,h(d.value.sold)+" 个",1)]),a("div",qg,[N[3]||(N[3]=a("span",{class:"muted"},"今日收入",-1)),a("span",null,"¥"+h(d.value.rev),1)]),a("div",Hg,[N[4]||(N[4]=a("span",{class:"muted"},"剩下",-1)),a("span",null,h(d.value.left)+" 个",1)]),a("div",Ug,[N[5]||(N[5]=a("span",{class:"muted"},"剩货回收",-1)),a("span",null,"¥"+h(d.value.gain),1)])]),f.value?(v(),y("div",Kg,[a("div",Wg,h(f.value.month)+" 月经营报告",1),a("div",Gg,[N[6]||(N[6]=a("span",{class:"muted"},"营业额",-1)),a("span",null,"¥"+h(f.value.rev),1)]),a("div",zg,[N[7]||(N[7]=a("span",{class:"muted"},"支出",-1)),a("span",null,"¥"+h(f.value.cost),1)]),a("div",Yg,[N[8]||(N[8]=a("span",{class:"muted"},"净收入",-1)),a("span",{style:Ye({color:f.value.net>=0?"#6c8a55":"var(--berry)"})},h(f.value.net>=0?"+":"")+h(f.value.net),5)]),a("div",Jg,[N[9]||(N[9]=a("span",{class:"muted"},"最受欢迎",-1)),a("span",null,h(f.value.best)+"（"+h(f.value.bestN)+" 个）",1)]),a("div",Qg,[N[10]||(N[10]=a("span",{class:"muted"},"口碑",-1)),a("span",null,[gn(h(f.value.rep)+" ",1),f.value.repDelta?(v(),y("em",Zg,h(f.value.repDelta>0?"+":"")+h(f.value.repDelta),1)):H("",!0)])]),f.value.fresh&&f.value.fresh.length?(v(),y("div",Xg,[N[11]||(N[11]=a("div",{class:"mrep-t"},"这个月新上了",-1)),a("div",e0,h(f.value.fresh.join("、")),1)])):H("",!0),f.value.grown&&f.value.grown.length?(v(),y("div",n0,[N[12]||(N[12]=a("div",{class:"mrep-t"},"伙伴长进了",-1)),a("div",t0,h(f.value.grown.join(" · ")),1)])):H("",!0),f.value.trust&&f.value.trust.length?(v(),y("div",r0,[N[13]||(N[13]=a("div",{class:"mrep-t"},"信赖",-1)),a("div",s0,[(v(!0),y(Y,null,te(f.value.trust,(Q,W)=>(v(),y("span",{key:Q.name},h(W?" · ":"")+h(Q.name)+" "+h(Q.v),1))),128))])])):H("",!0),f.value.warn?(v(),y("p",i0,h(f.value.warn),1)):H("",!0)])):H("",!0)]),a("div",o0,[a("button",{class:"btn primary block",type:"button",onClick:z},h(m.value?"看结局":"继续"),1)])])])):H("",!0),m.value?(v(),y("div",l0,[a("div",a0,[a("div",c0,[a("div",u0,h(m.value.name),1),a("h2",d0,h(m.value.title),1),m.value.text?(v(),y("p",f0,h(m.value.text),1)):H("",!0),a("div",h0,[a("div",p0,[N[14]||(N[14]=a("span",{class:"muted"},"门店 / 伙伴",-1)),a("span",null,h(b(s).storeCount)+" 家 · "+h(b(s).staff.length)+" 人",1)]),a("div",m0,[N[15]||(N[15]=a("span",{class:"muted"},"产品 / 相册",-1)),a("span",null,h(b(s).unlocked.length)+" 款 · "+h(b(s).photos.length)+" 张",1)]),a("div",v0,[N[16]||(N[16]=a("span",{class:"muted"},"口碑 / 知名度",-1)),a("span",null,h(Math.round(b(s).reputation))+" / "+h(Math.round(b(s).popularity)),1)])]),ee.value.length?(v(),y("div",g0,[N[17]||(N[17]=a("div",{class:"h2"},"他们的后来",-1)),(v(!0),y(Y,null,te(ee.value,(Q,W)=>(v(),y("div",{key:W,class:"pl"},[a("div",y0,[gn(h(Q.name),1),a("span",b0," · "+h(Q.title),1)]),a("div",_0,h(Q.text),1)]))),128))])):H("",!0)]),a("div",k0,[a("button",{class:"btn block",type:"button",onClick:w},"结束本局"),k.value?(v(),y("button",{key:0,class:"btn block",type:"button",onClick:I}," 继续剧情 ")):H("",!0),a("button",{class:"btn primary block",type:"button",onClick:Z},"开启二周目")])])])):H("",!0)]))}},x0=en(M0,[["__scopeId","data-v-7407f5fc"]]);pu(x0).mount("#app");
