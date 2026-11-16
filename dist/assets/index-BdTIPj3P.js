(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();/**
* @vue/shared v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Al(e){const n=Object.create(null);for(const t of e.split(","))n[t]=1;return t=>t in n}const Re={},It=[],Vn=()=>{},Co=()=>!1,ys=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),bs=e=>e.startsWith("onUpdate:"),Ge=Object.assign,Nl=(e,n)=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)},Su=Object.prototype.hasOwnProperty,Ne=(e,n)=>Su.call(e,n),_e=Array.isArray,ut=e=>xr(e)==="[object Map]",At=e=>xr(e)==="[object Set]",ha=e=>xr(e)==="[object Date]",Ce=e=>typeof e=="function",Le=e=>typeof e=="string",Sn=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",Io=e=>(Oe(e)||Ce(e))&&Ce(e.then)&&Ce(e.catch),Eo=Object.prototype.toString,xr=e=>Eo.call(e),Au=e=>xr(e).slice(8,-1),To=e=>xr(e)==="[object Object]",Ol=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,lr=Al(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_s=e=>{const n=Object.create(null);return(t=>n[t]||(n[t]=e(t)))},Nu=/-\w/g,xn=_s(e=>e.replace(Nu,n=>n.slice(1).toUpperCase())),Ou=/\B([A-Z])/g,pt=_s(e=>e.replace(Ou,"-$1").toLowerCase()),xo=_s(e=>e.charAt(0).toUpperCase()+e.slice(1)),Fs=_s(e=>e?`on${xo(e)}`:""),Rn=(e,n)=>!Object.is(e,n),Xr=(e,...n)=>{for(let t=0;t<e.length;t++)e[t](...n)},wo=(e,n,t,s=!1)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,writable:s,value:t})},wr=e=>{const n=parseFloat(e);return isNaN(n)?e:n},Pu=e=>{const n=Le(e)?Number(e):NaN;return isNaN(n)?e:n};let ga;const ks=()=>ga||(ga=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function tn(e){if(_e(e)){const n={};for(let t=0;t<e.length;t++){const s=e[t],l=Le(s)?Lu(s):tn(s);if(l)for(const o in l)n[o]=l[o]}return n}else if(Le(e)||Oe(e))return e}const Ru=/;(?![^(]*\))/g,Du=/:([^]+)/,Vu=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Lu(e){const n={};return e.replace(Vu,t=>t.startsWith("/*")?"":t).split(Ru).forEach(t=>{if(t){const s=t.split(Du);s.length>1&&(n[s[0].trim()]=s[1].trim())}}),n}function ye(e){let n="";if(Le(e))n=e;else if(_e(e))for(let t=0;t<e.length;t++){const s=ye(e[t]);s&&(n+=s+" ")}else if(Oe(e))for(const t in e)e[t]&&(n+=t+" ");return n.trim()}const Hu="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Fu=Al(Hu);function So(e){return!!e||e===""}function Uu(e,n,t){if(e.length!==n.length)return!1;let s=!0;for(let l=0;s&&l<e.length;l++)s=Hn(e[l],n[l],t);return s}function ya(e,n,t){if(e.size!==n.size)return!1;const s=Array.from(n),l=new Uint8Array(s.length);for(const o of e){let i=-1;for(let c=0;c<s.length;c++)if(!l[c]&&Hn(o,s[c],t)){i=c;break}if(i<0)return!1;l[i]=1}return!0}function ju(e,n,t){let s=ut(e),l=ut(n);if(s||l||(s=At(e),l=At(n),s||l))return s&&l?ya(e,n,t):!1;const o=Object.keys(e).length,i=Object.keys(n).length;if(o!==i)return!1;for(const c in e){const v=e.hasOwnProperty(c),m=n.hasOwnProperty(c);if(v&&!m||!v&&m||!Hn(e[c],n[c],t))return!1}return String(e)===String(n)}function ba(e,n,t,s){t||(t=[new Map,new Map]);const[l,o]=t;if(l.has(e)||o.has(n))return l.get(e)===n&&o.get(n)===e;l.set(e,n),o.set(n,e);const i=s(e,n,t);return l.delete(e),o.delete(n),i}function Hn(e,n,t){if(e===n)return!0;let s=ha(e),l=ha(n);return s||l?s&&l?e.getTime()===n.getTime():!1:(s=Sn(e),l=Sn(n),s||l?e===n:(s=_e(e),l=_e(n),s||l?s&&l?ba(e,n,t,Uu):!1:(s=Oe(e),l=Oe(n),s||l?!s||!l?!1:ba(e,n,t,ju):String(e)===String(n))))}function qu(e,n){return e.findIndex(t=>Hn(t,n))}const Ao=e=>!!(e&&e.__v_isRef===!0),u=e=>Le(e)?e:e==null?"":_e(e)||Oe(e)&&(e.toString===Eo||!Ce(e.toString))?Ao(e)?u(e.value):JSON.stringify(e,No,2):String(e),No=(e,n)=>Ao(n)?No(e,n.value):ut(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((t,[s,l],o)=>(t[Us(s,o)+" =>"]=l,t),{})}:At(n)?{[`Set(${n.size})`]:[...n.values()].map(t=>Us(t))}:Sn(n)?Us(n):Oe(n)&&!_e(n)&&!To(n)?String(n):n,Us=(e,n="")=>{var t;return Sn(e)?`Symbol(${(t=e.description)!=null?t:n})`:e};/**
* @vue/reactivity v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ze;class Gu{constructor(n=!1){this.detached=n,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!n&&Ze&&(Ze.active?(this.parent=Ze,this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let n,t;if(this.scopes){const s=this.scopes.slice();for(n=0,t=s.length;n<t;n++)s[n].pause()}for(n=0,t=this.effects.length;n<t;n++)this.effects[n].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let n,t;if(this.scopes){const l=this.scopes.slice();for(n=0,t=l.length;n<t;n++)l[n].resume()}const s=this.effects.slice();for(n=0,t=s.length;n<t;n++)s[n].resume()}}run(n){if(this._active){const t=Ze;try{return Ze=this,n()}finally{Ze=t}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){if(this._on>0&&--this._on===0){if(Ze===this)Ze=this.prevScope;else{let n=Ze;for(;n;){if(n.prevScope===this){n.prevScope=this.prevScope;break}n=n.prevScope}}this.prevScope=void 0}}stop(n){if(this._active){this._active=!1;let t,s;for(t=0,s=this.effects.length;t<s;t++)this.effects[t].stop();for(this.effects.length=0,t=0,s=this.cleanups.length;t<s;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const l=this.scopes.slice();for(t=0,s=l.length;t<s;t++)l[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!n){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0}}}function Bu(){return Ze}let De;const js=new WeakSet;class Oo{constructor(n){this.fn=n,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&(Ze.active?Ze.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,js.has(this)&&(js.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ro(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,_a(this),Do(this);const n=De,t=wn;De=this,wn=!0;try{return this.fn()}finally{Vo(this),De=n,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let n=this.deps;n;n=n.nextDep)Dl(n);this.deps=this.depsTail=void 0,_a(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?js.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){al(this)&&this.run()}get dirty(){return al(this)}}let Po=0,ar,or;function Ro(e,n=!1){if(e.flags|=8,n){e.next=or,or=e;return}e.next=ar,ar=e}function Pl(){Po++}function Rl(){if(--Po>0)return;if(or){let n=or;for(or=void 0;n;){const t=n.next;n.next=void 0,n.flags&=-9,n=t}}let e;for(;ar;){let n=ar;for(ar=void 0;n;){const t=n.next;if(n.next=void 0,n.flags&=-9,n.flags&1)try{n.trigger()}catch(s){e||(e=s)}n=t}}if(e)throw e}function Do(e){for(let n=e.deps;n;n=n.nextDep)n.version=-1,n.prevActiveLink=n.dep.activeLink,n.dep.activeLink=n}function Vo(e){let n,t=e.depsTail,s=t;for(;s;){const l=s.prevDep;s.version===-1?(s===t&&(t=l),Dl(s),Qu(s)):n=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=l}e.deps=n,e.depsTail=t}function al(e){for(let n=e.deps;n;n=n.nextDep)if(n.dep.version!==n.version||n.dep.computed&&(Lo(n.dep.computed)||n.dep.version!==n.version))return!0;return!!e._dirty}function Lo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===dr)||(e.globalVersion=dr,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!al(e))))return;e.flags|=2;const n=e.dep,t=De,s=wn;De=e,wn=!0;try{Do(e);const l=e.fn(e._value);(n.version===0||Rn(l,e._value))&&(e.flags|=128,e._value=l,n.version++)}catch(l){throw n.version++,l}finally{De=t,wn=s,Vo(e),e.flags&=-3}}function Dl(e,n=!1){const{dep:t,prevSub:s,nextSub:l}=e;if(s&&(s.nextSub=l,e.prevSub=void 0),l&&(l.prevSub=s,e.nextSub=void 0),t.subs===e&&(t.subs=s,!s&&t.computed)){t.computed.flags&=-5;for(let o=t.computed.deps;o;o=o.nextDep)Dl(o,!0)}!n&&!--t.sc&&t.map&&t.map.delete(t.key)}function Qu(e){const{prevDep:n,nextDep:t}=e;n&&(n.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=n,e.nextDep=void 0)}let wn=!0;const Ho=[];function Fn(){Ho.push(wn),wn=!1}function Un(){const e=Ho.pop();wn=e===void 0?!0:e}function _a(e){const{cleanup:n}=e;if(e.cleanup=void 0,n){const t=De;De=void 0;try{n()}finally{De=t}}}let dr=0;class Ku{constructor(n,t){this.sub=n,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vl{constructor(n){this.computed=n,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(n){if(!De||!wn||De===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==De)t=this.activeLink=new Ku(De,this),De.deps?(t.prevDep=De.depsTail,De.depsTail.nextDep=t,De.depsTail=t):De.deps=De.depsTail=t,Fo(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const s=t.nextDep;s.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=s),t.prevDep=De.depsTail,t.nextDep=void 0,De.depsTail.nextDep=t,De.depsTail=t,De.deps===t&&(De.deps=s)}return t}trigger(n){this.version++,dr++,this.notify(n)}notify(n){Pl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Rl()}}}function Fo(e){if(e.dep.sc++,e.sub.flags&4){const n=e.dep.computed;if(n&&!e.dep.subs){n.flags|=20;for(let s=n.deps;s;s=s.nextDep)Fo(s)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const ol=new WeakMap,Tt=Symbol(""),il=Symbol(""),fr=Symbol("");function rn(e,n,t){if(wn&&De){let s=ol.get(e);s||ol.set(e,s=new Map);let l=s.get(t);l||(s.set(t,l=new Vl),l.map=s,l.key=t),l.track()}}function Yn(e,n,t,s,l,o){const i=ol.get(e);if(!i){dr++;return}const c=v=>{v&&v.trigger()};if(Pl(),n==="clear")i.forEach(c);else{const v=_e(e),m=v&&Ol(t);if(v&&t==="length"){const p=Number(s);i.forEach((_,g)=>{(g==="length"||g===fr||!Sn(g)&&g>=p)&&c(_)})}else switch((t!==void 0||i.has(void 0))&&c(i.get(t)),m&&c(i.get(fr)),n){case"add":v?m&&c(i.get("length")):(c(i.get(Tt)),ut(e)&&c(i.get(il)));break;case"delete":v||(c(i.get(Tt)),ut(e)&&c(i.get(il)));break;case"set":ut(e)&&c(i.get(Tt));break}}Rl()}function Dt(e){const n=Ae(e);return n===e||(rn(n,"iterate",fr),yn(e))?n:jn(e)?ct(e)?n.map(t=>dt(_n(t))):n.map(dt):n.map(_n)}function Ms(e){return rn(e=Ae(e),"iterate",fr),e}function Nn(e,n){return jn(e)?dt(ct(e)?_n(n):n):_n(n)}const zu={__proto__:null,[Symbol.iterator](){return qs(this,Symbol.iterator,e=>Nn(this,e))},concat(...e){return Dt(this).concat(...e.map(n=>_e(n)?Dt(n):n))},entries(){return qs(this,"entries",e=>(e[1]=Nn(this,e[1]),e))},every(e,n){return Qn(this,"every",e,n,void 0,arguments)},filter(e,n){return Qn(this,"filter",e,n,t=>t.map(s=>Nn(this,s)),arguments)},find(e,n){return Qn(this,"find",e,n,t=>Nn(this,t),arguments)},findIndex(e,n){return Qn(this,"findIndex",e,n,void 0,arguments)},findLast(e,n){return Qn(this,"findLast",e,n,t=>Nn(this,t),arguments)},findLastIndex(e,n){return Qn(this,"findLastIndex",e,n,void 0,arguments)},forEach(e,n){return Qn(this,"forEach",e,n,void 0,arguments)},includes(...e){return Gs(this,"includes",e)},indexOf(...e){return Gs(this,"indexOf",e)},join(e){return Dt(this).join(e)},lastIndexOf(...e){return Gs(this,"lastIndexOf",e)},map(e,n){return Qn(this,"map",e,n,void 0,arguments)},pop(){return Yt(this,"pop")},push(...e){return Yt(this,"push",e)},reduce(e,...n){return Ma(this,"reduce",e,n)},reduceRight(e,...n){return Ma(this,"reduceRight",e,n)},shift(){return Yt(this,"shift")},some(e,n){return Qn(this,"some",e,n,void 0,arguments)},splice(...e){return Yt(this,"splice",e)},toReversed(){return Dt(this).toReversed()},toSorted(e){return Dt(this).toSorted(e)},toSpliced(...e){return Dt(this).toSpliced(...e)},unshift(...e){return Yt(this,"unshift",e)},values(){return qs(this,"values",e=>Nn(this,e))}};function qs(e,n,t){const s=Ms(e),l=s[n],o=l.call(s);if(s!==e&&!yn(e)){if(o[Symbol.toStringTag]==="Array Iterator"){const i=Object.create(Object.getPrototypeOf(o));return i.next=()=>ka(o.next(),t),l!==Uo[n]&&Object.defineProperties(i,{return:{get(){const c=o.return;return typeof c=="function"?c.bind(o):c}},throw:{get(){const c=o.throw;return typeof c=="function"?c.bind(o):c}}}),i}o._next=o.next,o.next=()=>ka(o._next(),t)}return o}function ka(e,n){return e.done||(e.value=n(e.value)),e}const Uo=Array.prototype;function Qn(e,n,t,s,l,o){const i=Ms(e),c=i!==e&&!yn(e),v=i[n];if(v!==Uo[n]){const _=v.apply(e,o);return c?_n(_):_}let m=t;i!==e&&(c?m=function(_,g){return t.call(this,Nn(e,_),g,e)}:t.length>2&&(m=function(_,g){return t.call(this,_,g,e)}));const p=v.call(i,m,s);return c&&l?l(p):p}function Ma(e,n,t,s){const l=Ms(e),o=l!==e&&!yn(e);let i=t,c=!1;l!==e&&(o?(c=s.length===0,i=function(m,p,_){return c&&(c=!1,m=Nn(e,m)),t.call(this,m,Nn(e,p),_,e)}):t.length>3&&(i=function(m,p,_){return t.call(this,m,p,_,e)}));const v=l[n](i,...s);return c?Nn(e,v):v}function Gs(e,n,t){const s=Ae(e);rn(s,"iterate",fr);const l=s[n](...t);return(l===-1||l===!1)&&Fl(t[0])?(t[0]=Ae(t[0]),s[n](...t)):l}function Yt(e,n,t=[]){Fn(),Pl();const s=Ae(e)[n].apply(e,t);return Rl(),Un(),s}const Zu=Al("__proto__,__v_isRef,__isVue"),jo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Sn));function Yu(e){Sn(e)||(e=String(e));const n=Ae(this);return rn(n,"has",e),n.hasOwnProperty(e)}class qo{constructor(n=!1,t=!1){this._isReadonly=n,this._isShallow=t}get(n,t,s){if(t==="__v_skip")return n.__v_skip;const l=this._isReadonly,o=this._isShallow;if(t==="__v_isReactive")return!l;if(t==="__v_isReadonly")return l;if(t==="__v_isShallow")return o;if(t==="__v_raw")return s===(l?o?ac:Ko:o?Qo:Bo).get(n)||Object.getPrototypeOf(n)===Object.getPrototypeOf(s)?n:void 0;const i=_e(n);if(!l){let v;if(i&&(v=zu[t]))return v;if(t==="hasOwnProperty")return Yu}const c=Reflect.get(n,t,an(n)?n:s);if((Sn(t)?jo.has(t):Zu(t))||(l||rn(n,"get",t),o))return c;if(an(c)){const v=i&&Ol(t)?c:c.value;return l&&Oe(v)?cl(v):v}return Oe(c)?l?cl(c):vt(c):c}}class Go extends qo{constructor(n=!1){super(!1,n)}set(n,t,s,l){let o=n[t];const i=_e(n)&&Ol(t);if(!this._isShallow){const m=jn(o);if(!yn(s)&&!jn(s)&&(o=Ae(o),s=Ae(s)),!i&&an(o)&&!an(s))return m||(o.value=s),!0}const c=i?Number(t)<n.length:Ne(n,t),v=Reflect.set(n,t,s,an(n)?n:l);return n===Ae(l)&&v&&(c?Rn(s,o)&&Yn(n,"set",t,s):Yn(n,"add",t,s)),v}deleteProperty(n,t){const s=Ne(n,t);n[t];const l=Reflect.deleteProperty(n,t);return l&&s&&Yn(n,"delete",t,void 0),l}has(n,t){const s=Reflect.has(n,t);return(!Sn(t)||!jo.has(t))&&rn(n,"has",t),s}ownKeys(n){return rn(n,"iterate",_e(n)?"length":Tt),Reflect.ownKeys(n)}}class Wu extends qo{constructor(n=!1){super(!0,n)}set(n,t){return!0}deleteProperty(n,t){return!0}}const Xu=new Go,Ju=new Wu,ec=new Go(!0);const ul=e=>e,Hr=e=>Reflect.getPrototypeOf(e);function nc(e,n,t){return function(...s){const l=this.__v_raw,o=Ae(l),i=ut(o),c=e==="entries"||e===Symbol.iterator&&i,v=e==="keys"&&i,m=l[e](...s),p=t?ul:n?dt:_n;return!n&&rn(o,"iterate",v?il:Tt),Ge(Object.create(m),{next(){const{value:_,done:g}=m.next();return g?{value:_,done:g}:{value:c?[p(_[0]),p(_[1])]:p(_),done:g}}})}}function Fr(e){return function(...n){return e==="delete"?!1:e==="clear"?void 0:this}}function tc(e,n){const t={get(l){const o=this.__v_raw,i=Ae(o),c=Ae(l);e||(Rn(l,c)&&rn(i,"get",l),rn(i,"get",c));const{has:v}=Hr(i),m=n?ul:e?dt:_n;if(v.call(i,l))return m(o.get(l));if(v.call(i,c))return m(o.get(c));o!==i&&o.get(l)},get size(){const l=this.__v_raw;return!e&&rn(Ae(l),"iterate",Tt),l.size},has(l){const o=this.__v_raw,i=Ae(o),c=Ae(l);return e||(Rn(l,c)&&rn(i,"has",l),rn(i,"has",c)),l===c?o.has(l):o.has(l)||o.has(c)},forEach(l,o){const i=this,c=i.__v_raw,v=Ae(c),m=n?ul:e?dt:_n;return!e&&rn(v,"iterate",Tt),c.forEach((p,_)=>l.call(o,m(p),m(_),i))}};return Ge(t,e?{add:Fr("add"),set:Fr("set"),delete:Fr("delete"),clear:Fr("clear")}:{add(l){const o=Ae(this),i=Hr(o),c=Ae(l),v=!n&&!yn(l)&&!jn(l)?c:l;return i.has.call(o,v)||Rn(l,v)&&i.has.call(o,l)||Rn(c,v)&&i.has.call(o,c)||(o.add(v),Yn(o,"add",v,v)),this},set(l,o){!n&&!yn(o)&&!jn(o)&&(o=Ae(o));const i=Ae(this),{has:c,get:v}=Hr(i);let m=c.call(i,l);m||(l=Ae(l),m=c.call(i,l));const p=v.call(i,l);return i.set(l,o),m?Rn(o,p)&&Yn(i,"set",l,o):Yn(i,"add",l,o),this},delete(l){const o=Ae(this),{has:i,get:c}=Hr(o);let v=i.call(o,l);v||(l=Ae(l),v=i.call(o,l)),c&&c.call(o,l);const m=o.delete(l);return v&&Yn(o,"delete",l,void 0),m},clear(){const l=Ae(this),o=l.size!==0,i=l.clear();return o&&Yn(l,"clear",void 0,void 0),i}}),["keys","values","entries",Symbol.iterator].forEach(l=>{t[l]=nc(l,e,n)}),t}function Ll(e,n){const t=tc(e,n);return(s,l,o)=>l==="__v_isReactive"?!e:l==="__v_isReadonly"?e:l==="__v_isShallow"?n:l==="__v_raw"?s:Reflect.get(Ne(t,l)&&l in s?t:s,l,o)}const rc={get:Ll(!1,!1)},sc={get:Ll(!1,!0)},lc={get:Ll(!0,!1)};const Bo=new WeakMap,Qo=new WeakMap,Ko=new WeakMap,ac=new WeakMap;function oc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vt(e){return jn(e)?e:Hl(e,!1,Xu,rc,Bo)}function ic(e){return Hl(e,!1,ec,sc,Qo)}function cl(e){return Hl(e,!0,Ju,lc,Ko)}function Hl(e,n,t,s,l){if(!Oe(e)||e.__v_raw&&!(n&&e.__v_isReactive)||e.__v_skip||!Object.isExtensible(e))return e;const o=l.get(e);if(o)return o;const i=oc(Au(e));if(i===0)return e;const c=new Proxy(e,i===2?s:t);return l.set(e,c),c}function ct(e){return jn(e)?ct(e.__v_raw):!!(e&&e.__v_isReactive)}function jn(e){return!!(e&&e.__v_isReadonly)}function yn(e){return!!(e&&e.__v_isShallow)}function Fl(e){return e?!!e.__v_raw:!1}function Ae(e){const n=e&&e.__v_raw;return n?Ae(n):e}function uc(e){return!Ne(e,"__v_skip")&&Object.isExtensible(e)&&wo(e,"__v_skip",!0),e}const _n=e=>Oe(e)?vt(e):e,dt=e=>Oe(e)?cl(e):e;function an(e){return e?e.__v_isRef===!0:!1}function Z(e){return cc(e,!1)}function cc(e,n){return an(e)?e:new dc(e,n)}class dc{constructor(n,t){this.dep=new Vl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?n:Ae(n),this._value=t?n:_n(n),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(n){const t=this._rawValue,s=this.__v_isShallow||yn(n)||jn(n);n=s?n:Ae(n),Rn(n,t)&&(this._rawValue=n,this._value=s?n:_n(n),this.dep.trigger())}}function y(e){return an(e)?e.value:e}const fc={get:(e,n,t)=>n==="__v_raw"?e:y(Reflect.get(e,n,t)),set:(e,n,t,s)=>{const l=e[n];return an(l)&&!an(t)?(l.value=t,!0):Reflect.set(e,n,t,s)}};function zo(e){return ct(e)?e:new Proxy(e,fc)}class pc{constructor(n,t,s){this.fn=n,this.setter=t,this._value=void 0,this.dep=new Vl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=dr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return Ro(this,!0),!0}get value(){const n=this.dep.track();return Lo(this),n&&(n.version=this.dep.version),this._value}set value(n){this.setter&&this.setter(n)}}function vc(e,n,t=!1){let s,l;return Ce(e)?s=e:(s=e.get,l=e.set),new pc(s,l,t)}const Ur={},ss=new WeakMap;let kt;function mc(e,n=!1,t=kt){if(t){let s=ss.get(t);s||ss.set(t,s=[]),s.push(e)}}function hc(e,n,t=Re){const{immediate:s,deep:l,once:o,scheduler:i,augmentJob:c,call:v}=t,m=x=>l?x:yn(x)||l===!1||l===0?Wn(x,1):Wn(x);let p,_,g,h,C=!1,b=!1;if(an(e)?(_=()=>e.value,C=yn(e)):ct(e)?(_=()=>m(e),C=!0):_e(e)?(b=!0,C=e.some(x=>ct(x)||yn(x)),_=()=>e.map(x=>{if(an(x))return x.value;if(ct(x))return m(x);if(Ce(x))return v?v(x,2):x()})):Ce(e)?n?_=v?()=>v(e,2):e:_=()=>{if(g){Fn();try{g()}finally{Un()}}const x=kt;kt=p;try{return v?v(e,3,[h]):e(h)}finally{kt=x}}:_=Vn,n&&l){const x=_,Q=l===!0?1/0:l;_=()=>Wn(x(),Q)}const E=Bu(),T=()=>{p.stop(),E&&E.active&&Nl(E.effects,p)};if(o&&n){const x=n;n=(...Q)=>{try{return x(...Q)}finally{T()}}}let w=b?new Array(e.length).fill(Ur):Ur;const S=x=>{if(!(!(p.flags&1)||!p.dirty&&!x))if(n){const Q=p.run();if(x||l||C||(b?Q.some((pe,le)=>Rn(pe,w[le])):Rn(Q,w))){const pe=kt;Fn();try{g&&g(),kt=p;const le=[Q,w===Ur?void 0:b&&w[0]===Ur?[]:w,h];w=Q,v?v(n,3,le):n(...le)}finally{kt=pe,Un()}}}else p.run()};return c&&c(S),p=new Oo(_),p.scheduler=i?()=>i(S,!1):S,h=x=>mc(x,!1,p),g=p.onStop=()=>{const x=ss.get(p);if(x){if(v)v(x,4);else for(const Q of x)Q();ss.delete(p)}},n?s?S(!0):w=p.run():i?i(S.bind(null,!0),!0):p.run(),T.pause=p.pause.bind(p),T.resume=p.resume.bind(p),T.stop=T,T}function Wn(e,n=1/0,t){if(n<=0||!Oe(e)||e.__v_skip||(t=t||new Map,(t.get(e)||0)>=n))return e;if(t.set(e,n),n--,an(e))Wn(e.value,n,t);else if(_e(e))for(let s=0;s<e.length;s++)Wn(e[s],n,t);else if(At(e)||ut(e))e.forEach(s=>{Wn(s,n,t)});else if(To(e)){for(const s in e)Wn(e[s],n,t);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Wn(e[s],n,t)}return e}/**
* @vue/runtime-core v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sr(e,n,t,s){try{return s?e(...s):e()}catch(l){$s(l,n,t)}}function kn(e,n,t,s){if(Ce(e)){const l=Sr(e,n,t,s);return l&&Io(l)&&l.catch(o=>{$s(o,n,t,void 0,!0)}),l}if(_e(e)){const l=[];for(let o=0;o<e.length;o++)l.push(kn(e[o],n,t,s));return l}}function $s(e,n,t,s=!0,l=!1){const o=n?n.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:c}=n&&n.appContext.config||Re;if(n){let v=n.parent;const m=n.proxy,p=`https://vuejs.org/error-reference/#runtime-${t}`;for(;v;){const _=v.ec;if(_&&!v.isUnmounted&&(!l||v.scope.active)){for(let g=0;g<_.length;g++)if(_[g](e,m,p)===!1)return}v=v.parent}if(i){Fn(),Sr(i,null,10,[e,m,p]),Un();return}}gc(e,t,o,s,c)}function gc(e,n,t,s=!0,l=!1){if(l)throw e;console.error(e)}const un=[];let In=-1;const On=[];let lt=null,Vt=0;const Zo=Promise.resolve();let ls=null;function pr(e){const n=ls||Zo;return e?n.then(this?e.bind(this):e):n}function yc(e){let n=In+1,t=un.length;for(;n<t;){const s=n+t>>>1,l=un[s],o=vr(l);o<e||o===e&&l.flags&2?n=s+1:t=s}return n}function Cs(e){if(!(e.flags&1)){const n=vr(e),t=un[un.length-1];!t||!(e.flags&2)&&n>=vr(t)?un.push(e):un.splice(yc(n),0,e),e.flags|=1,Yo()}}function Yo(){ls||(ls=Zo.then(Jo))}function bc(e){if(!_e(e))lt&&e.id===-1?lt.splice(Vt+1,0,e):e.flags&1||(On.push(e),e.flags|=1);else for(let n=0;n<e.length;n++)On.push(e[n]);Yo()}function Wo(e,n,t,s=In+1){for(;s<un.length;s++){const l=un[s];if(l&&l.flags&2){if(e&&l.id!==e.uid||n!==void 0&&!(l.id>=n))continue;un.splice(s,1),s=e?s-1:In,l.flags&4&&(l.flags&=-2),l(),l.flags&4||(l.flags&=-2)}}}function Xo(e,n,t=0){if(On.length){let s=On,l=0;if(n){s=[];for(let i=0;i<On.length;i++){const c=On[i];(c.i!==void 0?!c.i||c.i.uid<t:n.has(c))?On[l++]=c:s.push(c)}}const o=[...new Set(s)].sort((i,c)=>vr(i)-vr(c));if(On.length=l,lt){for(let i=0;i<o.length;i++)lt.push(o[i]);return}for(lt=o,Vt=0;Vt<lt.length;Vt++){const i=lt[Vt];i.flags&4&&(i.flags&=-2),i.flags&8||i(),i.flags&=-2}lt=null,Vt=0}}let Bs=!1;function _c(e,n){if(Bs){e();return}const t=n===void 0?void 0:new Set(On);e(),Bs=!0;try{Wo(void 0,n),Xo(void 0,t,n)}finally{Bs=!1}}const vr=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Jo(e){try{for(In=0;In<un.length;In++){const n=un[In];n&&!(n.flags&8)&&(n.flags&4&&(n.flags&=-2),Sr(n,n.i,n.i?15:14),n.flags&4||(n.flags&=-2))}}finally{for(;In<un.length;In++){const n=un[In];n&&(n.flags&=-2)}In=-1,un.length=0,Xo(),ls=null,(un.length||On.length)&&Jo()}}let ln=null,ei=null;function as(e){const n=ln;return ln=e,ei=e&&e.type.__scopeId||null,n}function mt(e,n=ln,t){if(!n||e._n)return e;const s=(...l)=>{s._d&&cs(-1);const o=as(n),i=Jn.length;let c;try{c=e(...l)}finally{for(let v=Jn.length;v>i;v--)Gl();as(o),s._d&&cs(1)}return c};return s._n=!0,s._c=!0,s._d=!0,s}function fn(e,n){if(ln===null)return e;const t=ws(ln),s=e.dirs||(e.dirs=[]);for(let l=0;l<n.length;l++){let[o,i,c,v=Re]=n[l];o&&(Ce(o)&&(o={mounted:o,updated:o}),o.deep&&Wn(i),s.push({dir:o,instance:t,value:i,oldValue:void 0,arg:c,modifiers:v}))}return e}function gt(e,n,t,s){let l=e;if(s==="beforeMount")e._mount=e;else if(s==="beforeUpdate"){const c=n&&n._mount;c&&(c._latest=e,e._mount=c)}else if(s==="mounted"){const c=e._latest;e._mount=e._latest=void 0,c&&(l=c,c._mount=void 0)}const o=l.dirs,i=n&&n.dirs;for(let c=0;c<o.length;c++){let v=o[c];i?v.oldValue=i[c].value:s==="mounted"&&v.oldValue!==void 0&&(v=Ge({},v,{oldValue:void 0}));let m=v.dir[s];m&&(Fn(),kn(m,t,8,[e.el,v,l,n]),Un())}}function kc(e,n){if(cn){let t=cn.provides;const s=cn.parent&&cn.parent.provides;s===t&&(t=cn.provides=Object.create(s)),t[e]=n}}function Jr(e,n,t=!1){const s=Ai();if(s||Ft){let l=Ft?Ft._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(l&&e in l)return l[e];if(arguments.length>1)return t&&Ce(n)?n.call(s&&s.proxy):n}}const Mc=Symbol.for("v-scx"),$c=()=>Jr(Mc);function sn(e,n,t){return ni(e,n,t)}function ni(e,n,t=Re){const{immediate:s,deep:l,flush:o,once:i}=t,c=Ge({},t),v=n&&s||!n&&o!=="post";let m;if(br){if(o==="sync"){const h=$c();m=h.__watcherHandles||(h.__watcherHandles=[])}else if(!v){const h=()=>{};return h.stop=Vn,h.resume=Vn,h.pause=Vn,h}}const p=cn;c.call=(h,C,b)=>kn(h,p,C,b);let _=!1;o==="post"?c.scheduler=h=>{h.i=p,en(h,p&&p.suspense)}:o!=="sync"&&(_=!0,c.scheduler=(h,C)=>{C?h():Cs(h)}),c.augmentJob=h=>{n&&(h.flags|=4),_&&(h.flags|=2,p&&(h.id=p.uid,h.i=p))};const g=hc(e,n,c);return br&&(m?m.push(g):v&&g()),g}function Cc(e,n,t){const s=this.proxy,l=Le(e)?e.includes(".")?ti(s,e):()=>s[e]:e.bind(s,s);let o;Ce(n)?o=n:(o=n.handler,t=n);const i=Nr(this),c=ni(l,o.bind(s),t);return i(),c}function ti(e,n){const t=n.split(".");return()=>{let s=e;for(let l=0;l<t.length&&s;l++)s=s[t[l]];return s}}const st=new WeakMap,ri=Symbol("_vte"),Is=e=>e.__isTeleport,Mt=e=>e&&(e.disabled||e.disabled===""),Ic=e=>e&&(e.defer||e.defer===""),$a=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Ca=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,dl=(e,n)=>{const t=e&&e.to;return Le(t)?n?n(t):null:t},Ec={name:"Teleport",__isTeleport:!0,process(e,n,t,s,l,o,i,c,v,m){const{mc:p,pc:_,pbc:g,o:{insert:h,querySelector:C,createText:b,createComment:E,parentNode:T}}=m,w=Mt(n.props);let{dynamicChildren:S}=n;const x=(le,B,G)=>{le.shapeFlag&16&&p(le.children,B,G,l,o,i,c,v)},Q=(le=n)=>{const B=Mt(le.props),G=le.target=dl(le.props,C),O=fl(G,le,b,h);G&&(i!=="svg"&&$a(G)?i="svg":i!=="mathml"&&Ca(G)&&(i="mathml"),l&&l.isCE&&(l.ce._teleportTargets||(l.ce._teleportTargets=new Set)).add(G),B||(x(le,G,O),er(le,!1)))},pe=le=>{const B=()=>{if(st.get(le)===B){if(st.delete(le),Mt(le.props)){const G=T(le.el)||t;x(le,G,le.anchor),er(le,!0)}Q(le)}};st.set(le,B),en(B,o)};if(e==null){const le=n.el=b(""),B=n.anchor=b("");if(h(le,t,s),h(B,t,s),Ic(n.props)||o&&o.pendingBranch){pe(n);return}w&&(x(n,t,B),er(n,!0)),Q()}else{n.el=e.el;const le=n.anchor=e.anchor,B=st.get(e);if(B){B.flags|=8,st.delete(e),pe(n);return}n.targetStart=e.targetStart;const G=n.target=e.target,O=n.targetAnchor=e.targetAnchor,oe=Mt(e.props),A=oe?t:G,N=oe?le:O;if(i==="svg"||$a(G)?i="svg":(i==="mathml"||Ca(G))&&(i="mathml"),S?(g(e.dynamicChildren,S,A,l,o,i,c),ql(e,n,!0)):v||_(e,n,A,N,l,o,i,c,!1),w)oe?n.props&&e.props&&n.props.to!==e.props.to&&(n.props.to=e.props.to):jr(n,t,le,m,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const he=dl(n.props,C);he&&(n.target=he,jr(n,he,null,m,0))}else oe&&jr(n,G,O,m,1);er(n,w)}},remove(e,n,t,{um:s,o:{remove:l}},o){const{shapeFlag:i,children:c,anchor:v,targetStart:m,targetAnchor:p,target:_,props:g}=e,h=Mt(g),C=o||!h,b=st.get(e);if(b&&(b.flags|=8,st.delete(e)),_&&(l(m),l(p)),o&&l(v),!b&&(h||_)&&i&16)for(let E=0;E<c.length;E++){const T=c[E];s(T,n,t,C,!!T.dynamicChildren)}},move:jr,hydrate:Tc};function jr(e,n,t,{o:{insert:s},m:l},o=2){o===0&&(e.targetStart&&s(e.targetStart,n,t),s(e.targetAnchor,n,t),t=e.targetAnchor);const{el:i,anchor:c,shapeFlag:v,children:m,props:p}=e,_=o===2;if(_&&s(i,n,t),!st.has(e)&&(!_||Mt(p))&&v&16)for(let g=0;g<m.length;g++)l(m[g],n,t,2);_&&s(c,n,t)}function Tc(e,n,t,s,l,o,{o:{nextSibling:i,parentNode:c,querySelector:v,insert:m,createText:p}},_){function g(E,T){let w=T;for(;w;){if(w&&w.nodeType===8){if(w.data==="teleport start anchor")n.targetStart=w;else if(w.data==="teleport anchor"){n.targetAnchor=w,E._lpa=n.targetAnchor&&i(n.targetAnchor);break}}w=i(w)}}function h(E,T){T.anchor=_(i(E),T,c(E),t,s,l,o)}const C=n.target=dl(n.props,v),b=Mt(n.props);if(C){const E=C._lpa||C.firstChild;n.shapeFlag&16&&(b?(h(e,n),g(C,E),n.targetAnchor||fl(C,n,p,m,c(e)===C?e:null)):(n.anchor=i(e),g(C,E),n.targetAnchor||fl(C,n,p,m),_(E&&i(E),n,C,t,s,l,o))),er(n,b)}else b&&n.shapeFlag&16&&(h(e,n),n.targetStart=e,n.targetAnchor=i(e));return n.anchor&&i(n.anchor)}const xc=Ec;function er(e,n){const t=e.ctx;if(t&&t.ut){let s,l;for(n?(s=e.el,l=e.anchor):(s=e.targetStart,l=e.targetAnchor);s&&s!==l;)s.nodeType===1&&s.setAttribute("data-v-owner",t.uid),s=s.nextSibling;t.ut()}}function fl(e,n,t,s,l=null){const o=n.targetStart=t(""),i=n.targetAnchor=t("");return o[ri]=i,e&&(s(o,e,l),s(i,e,l)),i}const gn=Symbol("_leaveCb"),Wt=Symbol("_enterCb");function wc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return tt(()=>{e.isMounted=!0}),ci(()=>{e.isUnmounting=!0}),e}const hn=[Function,Array],si={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:hn,onEnter:hn,onAfterEnter:hn,onEnterCancelled:hn,onBeforeLeave:hn,onLeave:hn,onAfterLeave:hn,onLeaveCancelled:hn,onBeforeAppear:hn,onAppear:hn,onAfterAppear:hn,onAppearCancelled:hn},Sc={name:"BaseTransition",props:si,setup(e,{slots:n}){const t=Ai(),s=wc();return()=>{const l=n.default&&oi(n.default(),!0),o=l&&l.length?li(l):t.subTree?I():void 0;if(!o)return;const i=Ae(e),{mode:c}=i;if(s.isLeaving)return Qs(o);const v=os(o);if(!v)return Qs(o);const m=pl(v,i,s,t);v.type!==Ye&&xt(v,m);let p=t.subTree&&os(t.subTree);if(p&&p.type!==Ye&&!$t(p,v)&&mr(t.subTree)){let _=pl(p,i,s,t);if(xt(p,_),c==="out-in"&&v.type!==Ye)return s.isLeaving=!0,_.afterLeave=()=>{if(s.isLeaving=!1,!(t.job.flags&8))if(t.effect.flags&2){const g=()=>{t.job.flags&8||t.update()};g.i=t,Cs(g)}else t.update();delete _.afterLeave,p=void 0},Qs(o);c==="in-out"&&v.type!==Ye?_.delayLeave=(g,h,C)=>{const b=ai(s,p);b[String(p.key)]=p,g[gn]=()=>{h(),g[gn]=void 0,delete m.delayedLeave,p=void 0},m.delayedLeave=()=>{C(),delete m.delayedLeave,p=void 0}}:p=void 0}else p&&(p=void 0);return o}}};function li(e){let n=e[0];if(e.length>1){for(const t of e)if(t.type!==Ye){n=t;break}}return n}const Ac=Sc;function ai(e,n){const{leavingVNodes:t}=e;let s=t.get(n.type);return s||(s=Object.create(null),t.set(n.type,s)),s}function pl(e,n,t,s){const{appear:l,mode:o,persisted:i=!1,onBeforeEnter:c,onEnter:v,onAfterEnter:m,onEnterCancelled:p,onBeforeLeave:_,onLeave:g,onAfterLeave:h,onLeaveCancelled:C,onBeforeAppear:b,onAppear:E,onAfterAppear:T,onAppearCancelled:w}=n,S=String(e.key),x=ai(t,e),Q=(B,G)=>{B&&kn(B,s,9,G)},pe=(B,G)=>{const O=G[1];Q(B,G),_e(B)?B.every(oe=>oe.length<=1)&&O():B.length<=1&&O()},le={mode:o,persisted:i,beforeEnter(B){let G=c;if(!t.isMounted)if(l)G=b||c;else return;B[gn]&&B[gn](!0);const O=x[S];if(O&&$t(e,O)){let oe=O.el[gn];if(!oe){const A=mr(O);oe=A&&A.el[gn]}oe&&oe()}Q(G,[B])},enter(B){if(x[S]===e)return;let G=v,O=m,oe=p;if(!t.isMounted)if(l)G=E||v,O=T||m,oe=w||p;else return;let A=!1;B[Wt]=he=>{A||(A=!0,he?Q(oe,[B]):Q(O,[B]),le.delayedLeave&&le.delayedLeave(),B[Wt]=void 0)};const N=B[Wt].bind(null,!1);G?pe(G,[B,N]):N()},leave(B,G){const O=String(e.key);if(B[Wt]&&B[Wt](!0),t.isUnmounting)return G();Q(_,[B]);let oe=!1;B[gn]=N=>{oe||(oe=!0,G(),N?Q(C,[B]):Q(h,[B]),B[gn]=void 0,x[O]===e&&delete x[O])};const A=B[gn].bind(null,!1);x[O]=e,g?pe(g,[B,A]):A()},clone(B){const G=pl(B,n,t,s);return G.afterLeave=()=>{le.afterLeave&&le.afterLeave()},G.delayLeave=(O,oe,A)=>{le.delayLeave?le.delayLeave(O,oe,A):A()},G.delayedLeave=()=>{le.delayedLeave&&le.delayedLeave()},G}};return le}function Qs(e){if(Es(e))return e=ft(e),e.children=null,e}function os(e){if(!Es(e))return Is(e.type)&&e.children?li(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:n,children:t}=e;if(t){if(n&16)return t[0];if(n&32&&Ce(t.default))return t.default()}}function xt(e,n){if(e.shapeFlag&6&&e.component){e.transition=n;const t=e.component.subTree;xt(Is(t.type)&&os(t)||t,n)}else if(e.shapeFlag&128){const t=e.suspense;if(t){const s=t.isHydrating?t.pendingBranch:t.activeBranch;s&&xt(s,n.clone(s))}else e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)}else if(e.transition=n,e.type===F&&_e(e.children)){const t=hi(e.children,!1);t&&xt(t,n)}}function oi(e,n=!1,t){let s=[],l=0;for(let o=0;o<e.length;o++){let i=e[o];const c=t==null?i.key:String(t)+String(i.key!=null?i.key:o);i.type===F?(i.patchFlag&128&&l++,s=s.concat(oi(i.children,n,c))):(n||i.type!==Ye)&&s.push(c!=null?ft(i,{key:c}):i)}if(l>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function mr(e){if(e.component)return mr(e.component.subTree);if(e.type===F){const n=_e(e.children)&&hi(e.children,!1);return n?mr(n):void 0}if(e.type!==Ye)return e}function ii(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Ia(e,n){let t;return!!((t=Object.getOwnPropertyDescriptor(e,n))&&!t.configurable)}const is=new WeakMap;function ir(e,n,t,s,l=!1){if(_e(e)){e.forEach((b,E)=>ir(b,n&&(_e(n)?n[E]:n),t,s,l));return}if(Ht(s)&&!l){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ir(e,n,t,s.component.subTree);return}const o=s.shapeFlag&4?ws(s.component):s.el,i=l?null:o,{i:c,r:v}=e,m=n&&n.r,p=c.refs===Re?c.refs={}:c.refs,_=c.setupState,g=Ae(_),h=_===Re?Co:b=>Ia(p,b)?!1:Ne(g,b),C=(b,E)=>!(E&&Ia(p,E));if(m!=null&&m!==v){if(Ea(n),Le(m))p[m]=null,h(m)&&(_[m]=null);else if(an(m)){const b=n;C(m,b.k)&&(m.value=null),b.k&&(p[b.k]=null)}}if(Ce(v))Sr(v,c,12,[i,p]);else{const b=Le(v),E=an(v);if(b||E){const T=()=>{if(e.f){const w=b?h(v)?_[v]:p[v]:C()||!e.k?v.value:p[e.k];if(l)_e(w)&&Nl(w,o);else if(_e(w))w.includes(o)||w.push(o);else if(b)p[v]=[o],h(v)&&(_[v]=p[v]);else{const S=[o];C(v,e.k)&&(v.value=S),e.k&&(p[e.k]=S)}}else b?(p[v]=i,h(v)&&(_[v]=i)):E&&(C(v,e.k)&&(v.value=i),e.k&&(p[e.k]=i))};if(i){const w=()=>{T(),is.delete(e)};w.id=-1,is.set(e,w),en(w,t)}else Ea(e),T()}}}function Ea(e){const n=is.get(e);n&&(n.flags|=8,is.delete(e))}ks().requestIdleCallback;ks().cancelIdleCallback;const Ht=e=>!!e.type.__asyncLoader,Es=e=>e.type.__isKeepAlive;function Nc(e,n){ui(e,"a",n)}function Oc(e,n){ui(e,"da",n)}function ui(e,n,t=cn){const s=e.__wdc||(e.__wdc=()=>{let l=t;for(;l;){if(l.isDeactivated)return;l=l.parent}return e()});if(hr(n,s,t),t){let l=t.parent;for(;l&&l.parent;)Es(l.parent.vnode)&&Pc(s,n,t,l),l=l.parent}}function Pc(e,n,t,s){const l=hr(n,e,s,!0),o=hr("um",()=>Nl(s[n],l),t);o.flags=16}function hr(e,n,t=cn,s=!1){if(t){const l=t[e]||(t[e]=[]),o=n.__weh||(n.__weh=(...i)=>{Fn();const c=Nr(t),v=kn(n,t,e,i);return c(),Un(),v});return s?l.unshift(o):l.push(o),o}}const nt=e=>(n,t=cn)=>{(!br||e==="sp")&&hr(e,(...s)=>n(...s),t)},Rc=nt("bm"),tt=nt("m"),Dc=nt("bu"),Vc=nt("u"),ci=nt("bum"),Ar=nt("um"),Lc=nt("sp"),Hc=nt("rtg"),Fc=nt("rtc");function Uc(e,n=cn){hr("ec",e,n)}const jc=Symbol.for("v-ndc");function se(e,n,t,s){let l;const o=t,i=_e(e);if(i||Le(e)){const c=i&&ct(e);let v=!1,m=!1;c&&(v=!yn(e),m=jn(e),e=Ms(e)),l=new Array(e.length);for(let p=0,_=e.length;p<_;p++)l[p]=n(v?m?dt(_n(e[p])):_n(e[p]):e[p],p,void 0,o)}else if(typeof e=="number")if(!Number.isInteger(e)||e<0)l=[];else{l=new Array(e);for(let c=0;c<e;c++)l[c]=n(c+1,c,void 0,o)}else if(Oe(e))if(e[Symbol.iterator])l=Array.from(e,(c,v)=>n(c,v,void 0,o));else{const c=Object.keys(e);l=new Array(c.length);for(let v=0,m=c.length;v<m;v++){const p=c[v];l[v]=n(e[p],p,v,o)}}else l=[];return l}function Ta(e,n,t,s,l,o){if(t==null&&(t={}),ln.ce||ln.parent&&Ht(ln.parent)&&ln.parent.ce){const m=t,p=Object.keys(m).length>0;return n!=="default"&&(m.name=n),d(),xe(F,null,[qe("slot",m,s)],p?-2:64)}let i=e[n];i&&i._c&&(i._d=!1);const c=Jn.length;d();let v;try{const m=i&&di(i(t)),p=t.key||o||m&&m.key;v=xe(F,{key:(p&&!Sn(p)?p:`_${n}`)+(!m&&s?"_fb":"")},m||(s?s():[]),m&&e._===1?64:-2)}catch(m){for(let p=Jn.length;p>c;p--)Gl();throw m}finally{i&&i._c&&(i._d=!0)}return v}function di(e){return e.some(n=>jt(n)?!(n.type===Ye||n.type===F&&!di(n.children)):!0)?e:null}const vl=e=>e?Ni(e)?ws(e):vl(e.parent):null,ur=Ge(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>vl(e.parent),$root:e=>vl(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>pi(e),$forceUpdate:e=>e.f||(e.f=()=>{Cs(e.update)}),$nextTick:e=>e.n||(e.n=pr.bind(e.proxy)),$watch:e=>Cc.bind(e)}),Ks=(e,n)=>e!==Re&&!e.__isScriptSetup&&Ne(e,n),qc={get({_:e},n){if(n==="__v_skip")return!0;const{ctx:t,setupState:s,data:l,props:o,accessCache:i,type:c,appContext:v}=e;if(n[0]!=="$"){const g=i[n];if(g!==void 0)switch(g){case 1:return s[n];case 2:return l[n];case 4:return t[n];case 3:return o[n]}else{if(Ks(s,n))return i[n]=1,s[n];if(l!==Re&&Ne(l,n))return i[n]=2,l[n];if(Ne(o,n))return i[n]=3,o[n];if(t!==Re&&Ne(t,n))return i[n]=4,t[n];ml&&(i[n]=0)}}const m=ur[n];let p,_;if(m)return n==="$attrs"&&rn(e.attrs,"get",""),m(e);if((p=c.__cssModules)&&(p=p[n]))return p;if(t!==Re&&Ne(t,n))return i[n]=4,t[n];if(_=v.config.globalProperties,Ne(_,n))return _[n]},set({_:e},n,t){const{data:s,setupState:l,ctx:o}=e;return Ks(l,n)?(l[n]=t,!0):s!==Re&&Ne(s,n)?(s[n]=t,!0):Ne(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(o[n]=t,!0)},has({_:{data:e,setupState:n,accessCache:t,ctx:s,appContext:l,props:o,type:i}},c){let v;return!!(t[c]||e!==Re&&c[0]!=="$"&&Ne(e,c)||Ks(n,c)||Ne(o,c)||Ne(s,c)||Ne(ur,c)||Ne(l.config.globalProperties,c)||(v=i.__cssModules)&&v[c])},defineProperty(e,n,t){return t.get!=null?e._.accessCache[n]=0:Ne(t,"value")&&this.set(e,n,t.value,null),Reflect.defineProperty(e,n,t)}};function xa(e){return _e(e)?e.reduce((n,t)=>(n[t]=null,n),{}):e}let ml=!0;function Gc(e){const n=pi(e),t=e.proxy,s=e.ctx;ml=!1,n.beforeCreate&&wa(n.beforeCreate,e,"bc");const{data:l,computed:o,methods:i,watch:c,provide:v,inject:m,created:p,beforeMount:_,mounted:g,beforeUpdate:h,updated:C,activated:b,deactivated:E,beforeDestroy:T,beforeUnmount:w,destroyed:S,unmounted:x,render:Q,renderTracked:pe,renderTriggered:le,errorCaptured:B,serverPrefetch:G,expose:O,inheritAttrs:oe,components:A,directives:N,filters:he}=n;if(m&&Bc(m,s,null),i)for(const z in i){const re=i[z];Ce(re)&&(s[z]=re.bind(t))}if(l){const z=l.call(t,t);Oe(z)&&(e.data=vt(z))}if(ml=!0,o)for(const z in o){const re=o[z],ae=Ce(re)?re.bind(t,t):Ce(re.get)?re.get.bind(t,t):Vn,L=!Ce(re)&&Ce(re.set)?re.set.bind(t):Vn,P=H({get:ae,set:L});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>P.value,set:D=>P.value=D})}if(c)for(const z in c)fi(c[z],s,t,z);if(v){const z=Ce(v)?v.call(t):v;Reflect.ownKeys(z).forEach(re=>{kc(re,z[re])})}p&&wa(p,e,"c");function ge(z,re){_e(re)?re.forEach(ae=>z(ae.bind(t))):re&&z(re.bind(t))}if(ge(Rc,_),ge(tt,g),ge(Dc,h),ge(Vc,C),ge(Nc,b),ge(Oc,E),ge(Uc,B),ge(Fc,pe),ge(Hc,le),ge(ci,w),ge(Ar,x),ge(Lc,G),_e(O))if(O.length){const z=e.exposed||(e.exposed={});O.forEach(re=>{Object.defineProperty(z,re,{get:()=>t[re],set:ae=>t[re]=ae,enumerable:!0})})}else e.exposed||(e.exposed={});Q&&e.render===Vn&&(e.render=Q),oe!=null&&(e.inheritAttrs=oe),A&&(e.components=A),N&&(e.directives=N),G&&ii(e)}function Bc(e,n,t=Vn){_e(e)&&(e=hl(e));for(const s in e){const l=e[s];let o;Oe(l)?"default"in l?o=Jr(l.from||s,l.default,!0):o=Jr(l.from||s):o=Jr(l),an(o)?Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):n[s]=o}}function wa(e,n,t){kn(_e(e)?e.map(s=>s.bind(n.proxy)):e.bind(n.proxy),n,t)}function fi(e,n,t,s){let l=s.includes(".")?ti(t,s):()=>t[s];if(Le(e)){const o=n[e];Ce(o)&&sn(l,o)}else if(Ce(e))sn(l,e.bind(t));else if(Oe(e))if(_e(e))e.forEach(o=>fi(o,n,t,s));else{const o=Ce(e.handler)?e.handler.bind(t):n[e.handler];Ce(o)&&sn(l,o,e)}}function pi(e){const n=e.type,{mixins:t,extends:s}=n,{mixins:l,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,c=o.get(n);let v;return c?v=c:!l.length&&!t&&!s?v=n:(v={},l.length&&l.forEach(m=>us(v,m,i,!0)),us(v,n,i)),Oe(n)&&o.set(n,v),v}function us(e,n,t,s=!1){const{mixins:l,extends:o}=n;o&&us(e,o,t,!0),l&&l.forEach(i=>us(e,i,t,!0));for(const i in n)if(!(s&&i==="expose")){const c=Qc[i]||t&&t[i];e[i]=c?c(e[i],n[i]):n[i]}return e}const Qc={data:Sa,props:Aa,emits:Aa,methods:nr,computed:nr,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:nr,directives:nr,watch:zc,provide:Sa,inject:Kc};function Sa(e,n){return n?e?function(){return Ge(Ce(e)?e.call(this,this):e,Ce(n)?n.call(this,this):n)}:n:e}function Kc(e,n){return nr(hl(e),hl(n))}function hl(e){if(_e(e)){const n={};for(let t=0;t<e.length;t++)n[e[t]]=e[t];return n}return e}function on(e,n){return e?[...new Set([].concat(e,n))]:n}function nr(e,n){return e?Ge(Object.create(null),e,n):n}function Aa(e,n){return e?_e(e)&&_e(n)?[...new Set([...e,...n])]:Ge(Object.create(null),xa(e),xa(n??{})):n}function zc(e,n){if(!e)return n;if(!n)return e;const t=Ge(Object.create(null),e);for(const s in n)t[s]=on(e[s],n[s]);return t}function vi(){return{app:null,config:{isNativeTag:Co,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zc=0;function Yc(e,n){return function(s,l=null){Ce(s)||(s=Ge({},s)),l!=null&&!Oe(l)&&(l=null);const o=vi(),i=new WeakSet,c=[];let v=!1;const m=o.app={_uid:Zc++,_component:s,_props:l,_container:null,_context:o,_instance:null,version:xd,get config(){return o.config},set config(p){},use(p,..._){return i.has(p)||(p&&Ce(p.install)?(i.add(p),p.install(m,..._)):Ce(p)&&(i.add(p),p(m,..._))),m},mixin(p){return o.mixins.includes(p)||o.mixins.push(p),m},component(p,_){return _?(o.components[p]=_,m):o.components[p]},directive(p,_){return _?(o.directives[p]=_,m):o.directives[p]},mount(p,_,g){if(!v){const h=m._ceVNode||qe(s,l);return h.appContext=o,g===!0?g="svg":g===!1&&(g=void 0),e(h,p,g),v=!0,m._container=p,p.__vue_app__=m,ws(h.component)}},onUnmount(p){c.push(p)},unmount(){v&&(kn(c,m._instance,16),e(null,m._container),delete m._container.__vue_app__)},provide(p,_){return o.provides[p]=_,m},runWithContext(p){const _=Ft;Ft=m;try{return p()}finally{Ft=_}}};return m}}let Ft=null;const Wc=(e,n)=>n==="modelValue"||n==="model-value"?e.modelModifiers:e[`${n}Modifiers`]||e[`${xn(n)}Modifiers`]||e[`${pt(n)}Modifiers`];function Xc(e,n,...t){if(e.isUnmounted)return;const s=e.vnode.props||Re;let l=t;const o=n.startsWith("update:"),i=o&&Wc(s,n.slice(7));i&&(i.trim&&(l=t.map(p=>Le(p)?p.trim():p)),i.number&&(l=l.map(wr)));let c,v=s[c=Fs(n)]||s[c=Fs(xn(n))];!v&&o&&(v=s[c=Fs(pt(n))]),v&&kn(v,e,6,l);const m=s[c+"Once"];if(m){if(!e.emitted)e.emitted={};else if(e.emitted[c])return;e.emitted[c]=!0,kn(m,e,6,l)}}const Jc=new WeakMap;function mi(e,n,t=!1){const s=t?Jc:n.emitsCache,l=s.get(e);if(l!==void 0)return l;const o=e.emits;let i={},c=!1;if(!Ce(e)){const v=m=>{const p=mi(m,n,!0);p&&(c=!0,Ge(i,p))};!t&&n.mixins.length&&n.mixins.forEach(v),e.extends&&v(e.extends),e.mixins&&e.mixins.forEach(v)}return!o&&!c?(Oe(e)&&s.set(e,null),null):(_e(o)?o.forEach(v=>i[v]=null):Ge(i,o),Oe(e)&&s.set(e,i),i)}function Ts(e,n){return!e||!ys(n)?!1:(n=n.slice(2),n=n==="Once"?n:n.replace(/Once$/,""),Ne(e,n[0].toLowerCase()+n.slice(1))||Ne(e,pt(n))||Ne(e,n))}function Na(e){const{type:n,vnode:t,proxy:s,withProxy:l,propsOptions:[o],slots:i,attrs:c,emit:v,render:m,renderCache:p,props:_,data:g,setupState:h,ctx:C,inheritAttrs:b}=e,E=as(e);let T,w;try{if(t.shapeFlag&4){const x=l||s,Q=x;T=Pn(m.call(Q,x,p,_,h,g,C)),w=c}else{const x=n;T=Pn(x.length>1?x(_,{attrs:c,slots:i,emit:v}):x(_,null)),w=n.props?c:ed(c)}}catch(x){Jn.length=0,$s(x,e,1),T=qe(Ye)}let S=T;if(w&&b!==!1){const x=Object.keys(w),{shapeFlag:Q}=S;x.length&&Q&7&&(o&&x.some(bs)&&(w=nd(w,o)),S=ft(S,w,!1,!0))}if(t.dirs&&(S=ft(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition){const x=Is(S.type)&&os(S)||S;xt(x,t.transition)}return T=S,as(E),T}function hi(e,n=!0){let t;for(let s=0;s<e.length;s++){const l=e[s];if(jt(l)){if(l.type!==Ye||l.children==="v-if"){if(t)return;t=l}}else return}return t}const ed=e=>{let n;for(const t in e)(t==="class"||t==="style"||ys(t))&&((n||(n={}))[t]=e[t]);return n},nd=(e,n)=>{const t={};for(const s in e)(!bs(s)||!(s.slice(9)in n))&&(t[s]=e[s]);return t};function td(e,n,t){const{props:s,children:l,component:o}=e,{props:i,children:c,patchFlag:v}=n,m=o.emitsOptions;if(n.dirs||n.transition)return!0;if(t&&v>=0){if(v&1024)return!0;if(v&16)return s?Oa(s,i,m):!!i;if(v&8){const p=n.dynamicProps;for(let _=0;_<p.length;_++){const g=p[_];if(gi(i,s,g)&&!Ts(m,g))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:s===i?!1:s?i?Oa(s,i,m):!0:!!i;return!1}function Oa(e,n,t){const s=Object.keys(n);if(s.length!==Object.keys(e).length)return!0;for(let l=0;l<s.length;l++){const o=s[l];if(!Ne(e,o)||gi(n,e,o)&&!Ts(t,o))return!0}return!1}function gi(e,n,t){const s=e[t],l=n[t];return t==="style"&&Oe(s)&&Oe(l)?!Hn(s,l):s!==l}function rd({vnode:e,parent:n,suspense:t},s){for(;n;){const l=n.subTree;if(l.suspense&&l.suspense.activeBranch===e&&(l.suspense.vnode.el=l.el=s,e=l),l===e)(e=n.vnode).el=s,n=n.parent;else break}t&&t.activeBranch===e&&(t.vnode.el=s)}const yi={},bi=()=>Object.create(yi),_i=e=>Object.getPrototypeOf(e)===yi;function sd(e,n,t,s=!1){const l={},o=bi();e.propsDefaults=Object.create(null),ki(e,n,l,o);for(const i in e.propsOptions[0])i in l||(l[i]=void 0);t?e.props=s?l:ic(l):e.type.props?e.props=l:e.props=o,e.attrs=o}function ld(e,n,t,s){const{props:l,attrs:o,vnode:{patchFlag:i}}=e,c=Ae(l),[v]=e.propsOptions;let m=!1;if((s||i>0)&&!(i&16)){if(i&8){const p=e.vnode.dynamicProps;for(let _=0;_<p.length;_++){let g=p[_];if(Ts(e.emitsOptions,g))continue;const h=n[g];if(v)if(Ne(o,g))h!==o[g]&&(o[g]=h,m=!0);else{const C=xn(g);l[C]=gl(v,c,C,h,e,!1)}else h!==o[g]&&(o[g]=h,m=!0)}}}else{ki(e,n,l,o)&&(m=!0);let p;for(const _ in c)(!n||!Ne(n,_)&&((p=pt(_))===_||!Ne(n,p)))&&(v?t&&(t[_]!==void 0||t[p]!==void 0)&&(l[_]=gl(v,c,_,void 0,e,!0)):delete l[_]);if(o!==c)for(const _ in o)(!n||!Ne(n,_))&&(delete o[_],m=!0)}m&&Yn(e.attrs,"set","")}function ki(e,n,t,s){const[l,o]=e.propsOptions;let i=!1,c;if(n)for(let v in n){if(lr(v))continue;const m=n[v];let p;l&&Ne(l,p=xn(v))?!o||!o.includes(p)?t[p]=m:(c||(c={}))[p]=m:Ts(e.emitsOptions,v)||(!(v in s)||m!==s[v])&&(s[v]=m,i=!0)}if(o){const v=Ae(t),m=c||Re;for(let p=0;p<o.length;p++){const _=o[p];t[_]=gl(l,v,_,m[_],e,!Ne(m,_))}}return i}function gl(e,n,t,s,l,o){const i=e[t];if(i!=null){const c=Ne(i,"default");if(c&&s===void 0){const v=i.default;if(i.type!==Function&&!i.skipFactory&&Ce(v)){const{propsDefaults:m}=l;if(t in m)s=m[t];else{const p=Nr(l);s=m[t]=v.call(null,n),p()}}else s=v;l.ce&&l.ce._setProp(t,s)}i[0]&&(o&&!c?s=!1:i[1]&&(s===""||s===pt(t))&&(s=!0))}return s}const ad=new WeakMap;function Mi(e,n,t=!1){const s=t?ad:n.propsCache,l=s.get(e);if(l)return l;const o=e.props,i={},c=[];let v=!1;if(!Ce(e)){const p=_=>{v=!0;const[g,h]=Mi(_,n,!0);Ge(i,g),h&&c.push(...h)};!t&&n.mixins.length&&n.mixins.forEach(p),e.extends&&p(e.extends),e.mixins&&e.mixins.forEach(p)}if(!o&&!v)return Oe(e)&&s.set(e,It),It;if(_e(o))for(let p=0;p<o.length;p++){const _=xn(o[p]);Pa(_)&&(i[_]=Re)}else if(o)for(const p in o){const _=xn(p);if(Pa(_)){const g=o[p],h=i[_]=_e(g)||Ce(g)?{type:g}:Ge({},g),C=h.type;let b=!1,E=!0;if(_e(C))for(let T=0;T<C.length;++T){const w=C[T],S=Ce(w)&&w.name;if(S==="Boolean"){b=!0;break}else S==="String"&&(E=!1)}else b=Ce(C)&&C.name==="Boolean";h[0]=b,h[1]=E,(b||Ne(h,"default"))&&c.push(_)}}const m=[i,c];return Oe(e)&&s.set(e,m),m}function Pa(e){return e[0]!=="$"&&!lr(e)}const Ul=e=>e==="_"||e==="_ctx"||e==="$stable",jl=e=>_e(e)?e.map(Pn):[Pn(e)],od=(e,n,t)=>{if(n._n)return n;const s=mt((...l)=>jl(n(...l)),t);return s._c=!1,s},$i=(e,n,t)=>{const s=e._ctx;for(const l in e){if(Ul(l))continue;const o=e[l];if(Ce(o))n[l]=od(l,o,s);else if(o!=null){const i=jl(o);n[l]=()=>i}}},Ci=(e,n)=>{const t=jl(n);e.slots.default=()=>t},Ii=(e,n,t)=>{for(const s in n)(t||!Ul(s))&&(e[s]=n[s])},id=(e,n,t)=>{const s=e.slots=bi();if(e.vnode.shapeFlag&32){const l=n._;l?(Ii(s,n,t),t&&wo(s,"_",l,!0)):$i(n,s)}else n&&Ci(e,n)},ud=(e,n,t)=>{const{vnode:s,slots:l}=e;let o=!0,i=Re;if(s.shapeFlag&32){const c=n._;c?t&&c===1?o=!1:Ii(l,n,t):(o=!n.$stable,$i(n,l)),i=n}else n&&(Ci(e,n),i={default:1});if(o)for(const c in l)!Ul(c)&&i[c]==null&&delete l[c]},en=md;function cd(e){return dd(e)}function dd(e,n){const t=ks();t.__VUE__=!0;const{insert:s,remove:l,patchProp:o,createElement:i,createText:c,createComment:v,setText:m,setElementText:p,parentNode:_,nextSibling:g,setScopeId:h=Vn,insertStaticContent:C}=e,b=(k,M,V,K=null,Y=null,U=null,te=void 0,ue=null,ie=!!M.dynamicChildren)=>{if(k===M)return;k&&!$t(k,M)&&(K=Me(k),D(k,Y,U,!0),k=null),M.patchFlag===-2&&(ie=!1,M.dynamicChildren=null),M.dynamicChildren&&k&&k.dynamicChildren&&k.dynamicChildren.hasOnce&&(M.dynamicChildren===It&&(M.dynamicChildren=[]),M.dynamicChildren.hasOnce=!0);const{type:W,ref:fe,shapeFlag:ce}=M;switch(W){case xs:E(k,M,V,K);break;case Ye:T(k,M,V,K);break;case Zs:k==null&&w(M,V,K,te);break;case F:A(k,M,V,K,Y,U,te,ue,ie);break;default:ce&1?Q(k,M,V,K,Y,U,te,ue,ie):ce&6?N(k,M,V,K,Y,U,te,ue,ie):(ce&64||ce&128)&&W.process(k,M,V,K,Y,U,te,ue,ie,Xe)}fe!=null&&Y?ir(fe,k&&k.ref,U,M||k,!M):fe==null&&k&&k.ref!=null&&ir(k.ref,null,U,k,!0)},E=(k,M,V,K)=>{if(k==null)s(M.el=c(M.children),V,K);else{const Y=M.el=k.el;M.children!==k.children&&m(Y,M.children)}},T=(k,M,V,K)=>{k==null?s(M.el=v(M.children||""),V,K):M.el=k.el},w=(k,M,V,K)=>{[k.el,k.anchor]=C(k.children,M,V,K,k.el,k.anchor)},S=({el:k,anchor:M},V,K)=>{let Y;for(;k&&k!==M;)Y=g(k),s(k,V,K),k=Y;s(M,V,K)},x=({el:k,anchor:M})=>{let V;for(;k&&k!==M;)V=g(k),l(k),k=V;l(M)},Q=(k,M,V,K,Y,U,te,ue,ie)=>{if(M.type==="svg"?te="svg":M.type==="math"&&(te="mathml"),k==null)pe(M,V,K,Y,U,te,ue,ie);else{const W=k.el&&k.el._isVueCE?k.el:null;try{W&&W._beginPatch(),G(k,M,Y,U,te,ue,ie)}finally{W&&W._endPatch()}}},pe=(k,M,V,K,Y,U,te,ue)=>{let ie,W;const{props:fe,shapeFlag:ce,transition:j,dirs:J}=k;if(ie=k.el=i(k.type,U,fe&&fe.is,fe),ce&8?p(ie,k.children):ce&16&&B(k.children,ie,null,K,Y,zs(k,U),te,ue),J&&gt(k,null,K,"created"),le(ie,k,k.scopeId,te,K),fe){for(const ee in fe)ee!=="value"&&!lr(ee)&&o(ie,ee,null,fe[ee],U,K);"value"in fe&&o(ie,"value",null,fe.value,U),(W=fe.onVnodeBeforeMount)&&An(W,K,k)}J&&gt(k,null,K,"beforeMount");const ne=fd(Y,j);ne?j.beforeEnter(ie):j&&!j.persisted&&(ie[vd]=!0),s(ie,M,V),((W=fe&&fe.onVnodeMounted)||ne||J)&&en(()=>{try{W&&An(W,K,k),ne&&j.enter(ie),J&&gt(k,null,K,"mounted")}finally{}},Y)},le=(k,M,V,K,Y)=>{if(V&&h(k,V),K)for(let U=0;U<K.length;U++)h(k,K[U]);if(Y){let U=Y.subTree;if(M===U||Ti(U.type)&&(U.ssContent===M||U.ssFallback===M)){const te=Y.vnode;le(k,te,te.scopeId,te.slotScopeIds,Y.parent)}}},B=(k,M,V,K,Y,U,te,ue,ie=0)=>{for(let W=ie;W<k.length;W++){const fe=k[W]=ue?Zn(k[W]):Pn(k[W]);b(null,fe,M,V,K,Y,U,te,ue)}},G=(k,M,V,K,Y,U,te)=>{const ue=M.el=k.el;let{patchFlag:ie,dynamicChildren:W,dirs:fe}=M;ie|=k.patchFlag&16;const ce=k.props||Re,j=M.props||Re;let J;if(V&&yt(V,!1),(J=j.onVnodeBeforeUpdate)&&An(J,V,M,k),fe&&gt(M,k,V,"beforeUpdate"),V&&yt(V,!0),W&&(!k.dynamicChildren||k.dynamicChildren.length!==W.length)&&(ie=0,te=!1,W=null),(ce.innerHTML&&j.innerHTML==null||ce.textContent&&j.textContent==null)&&p(ue,""),W?O(k.dynamicChildren,W,ue,V,K,zs(M,Y),U):te||re(k,M,ue,null,V,K,zs(M,Y),U,!1),ie>0){if(ie&16)oe(ue,ce,j,V,Y);else if(ie&2&&ce.class!==j.class&&o(ue,"class",null,j.class,Y),ie&4&&o(ue,"style",ce.style,j.style,Y),ie&8){const ne=M.dynamicProps;for(let ee=0;ee<ne.length;ee++){const ve=ne[ee],me=ce[ve],ke=j[ve];(ke!==me||ve==="value")&&o(ue,ve,me,ke,Y,V)}}ie&1&&k.children!==M.children&&p(ue,M.children)}else!te&&W==null&&oe(ue,ce,j,V,Y);((J=j.onVnodeUpdated)||fe)&&en(()=>{J&&An(J,V,M,k),fe&&gt(M,k,V,"updated")},K)},O=(k,M,V,K,Y,U,te)=>{for(let ue=0;ue<M.length;ue++){const ie=k[ue],W=M[ue],fe=ie.el||cr(ie),ce=fe&&(ie.type===F||!$t(ie,W)||ie.shapeFlag&198)?_(fe):V;b(ie,W,ce,null,K,Y,U,te,!0)}},oe=(k,M,V,K,Y)=>{if(M!==V){if(M!==Re)for(const U in M)!lr(U)&&!(U in V)&&o(k,U,M[U],null,Y,K);for(const U in V){if(lr(U))continue;const te=V[U],ue=M[U];te!==ue&&U!=="value"&&o(k,U,ue,te,Y,K)}"value"in V&&o(k,"value",M.value,V.value,Y)}},A=(k,M,V,K,Y,U,te,ue,ie)=>{const W=M.el=k?k.el:c(""),fe=M.anchor=k?k.anchor:c("");let{patchFlag:ce,dynamicChildren:j,slotScopeIds:J}=M;J&&(ue=ue?ue.concat(J):J),k==null?(s(W,V,K),s(fe,V,K),B(M.children||[],V,fe,Y,U,te,ue,ie)):ce>0&&ce&64&&j&&k.dynamicChildren&&k.dynamicChildren.length===j.length?(O(k.dynamicChildren,j,V,Y,U,te,ue),(M.key!=null||Y&&M===Y.subTree)&&ql(k,M,!0)):re(k,M,V,fe,Y,U,te,ue,ie)},N=(k,M,V,K,Y,U,te,ue,ie)=>{M.slotScopeIds=ue,k==null?M.shapeFlag&512?Y.ctx.activate(M,V,K,te,ie):he(M,V,K,Y,U,te,ie):be(k,M,ie)},he=(k,M,V,K,Y,U,te)=>{const ue=k.component=kd(k,K,Y);if(Es(k)&&(ue.ctx.renderer=Xe),Md(ue,!1,te),ue.asyncDep){if(Y&&Y.registerDep(ue,ge,te,U),!k.el){const ie=ue.subTree=qe(Ye);T(null,ie,M,V),k.placeholder=ie.el}}else ge(ue,k,M,V,Y,U,te)},be=(k,M,V)=>{const K=M.component=k.component;if(td(k,M,V))if(K.asyncDep&&!K.asyncResolved){M.el=k.el,M.placeholder=k.placeholder,z(K,M,V);return}else K.next=M,K.update();else M.el=k.el,M.placeholder=k.placeholder,K.vnode=M},ge=(k,M,V,K,Y,U,te)=>{const ue=()=>{if(k.isMounted){let{next:ce,bu:j,u:J,parent:ne,vnode:ee}=k;{const Ie=Ei(k);if(Ie){ce&&(ce.el=ee.el,z(k,ce,te)),Ie.asyncDep.then(()=>{const Ke=()=>{k.job.flags&8||(Y&&Y.pendingBranch?en(Ke,Y):W())};Ke.flags=48,en(Ke,Y)});return}}let ve=ce,me;yt(k,!1),ce?(ce.el=ee.el,z(k,ce,te)):ce=ee,j&&Xr(j),(me=ce.props&&ce.props.onVnodeBeforeUpdate)&&An(me,ne,ce,ee),yt(k,!0);const ke=Na(k),Se=k.subTree;k.subTree=ke,b(Se,ke,_(Se.el||cr(Se)),Me(Se),k,Y,U),ce.el=ke.el,ve===null&&rd(k,ke.el),J&&en(J,Y),(me=ce.props&&ce.props.onVnodeUpdated)&&en(()=>An(me,ne,ce,ee),Y)}else{let ce;const{el:j,props:J}=M,{bm:ne,m:ee,parent:ve,root:me,type:ke}=k,Se=Ht(M);yt(k,!1),ne&&Xr(ne),!Se&&(ce=J&&J.onVnodeBeforeMount)&&An(ce,ve,M),yt(k,!0);{me.ce&&me.ce._hasShadowRoot()&&me.ce._injectChildStyle(ke,k.parent?k.parent.type:void 0);const Ie=k.subTree=Na(k);b(null,Ie,V,K,k,Y,U),M.el=Ie.el}if(ee&&en(ee,Y),!Se&&(ce=J&&J.onVnodeMounted)){const Ie=M;en(()=>An(ce,ve,Ie),Y)}(M.shapeFlag&256||ve&&Ht(ve.vnode)&&ve.vnode.shapeFlag&256)&&k.a&&en(k.a,Y),k.isMounted=!0,M=V=K=null}};k.scope.on();const ie=k.effect=new Oo(ue);k.scope.off();const W=k.update=ie.run.bind(ie),fe=k.job=ie.runIfDirty.bind(ie);fe.i=k,fe.id=k.uid,ie.scheduler=()=>Cs(fe),yt(k,!0),W()},z=(k,M,V)=>{M.component=k;const K=k.vnode.props;k.vnode=M,k.next=null,ld(k,M.props,K,V),ud(k,M.children,V),Fn(),Wo(k),Un()},re=(k,M,V,K,Y,U,te,ue,ie=!1)=>{const W=k&&k.children,fe=k?k.shapeFlag:0,ce=M.children,{patchFlag:j,shapeFlag:J}=M;if(j>0){if(j&128){L(W,ce,V,K,Y,U,te,ue,ie);return}else if(j&256){ae(W,ce,V,K,Y,U,te,ue,ie);return}}J&8?(fe&16&&X(W,Y,U),ce!==W&&p(V,ce)):fe&16?J&16?L(W,ce,V,K,Y,U,te,ue,ie):X(W,Y,U,!0):(fe&8&&p(V,""),J&16&&B(ce,V,K,Y,U,te,ue,ie))},ae=(k,M,V,K,Y,U,te,ue,ie)=>{k=k||It,M=M||It;const W=k.length,fe=M.length,ce=Math.min(W,fe);let j;for(j=0;j<ce;j++){const J=M[j]=ie?Zn(M[j]):Pn(M[j]);b(k[j],J,V,null,Y,U,te,ue,ie)}W>fe?X(k,Y,U,!0,!1,ce):B(M,V,K,Y,U,te,ue,ie,ce)},L=(k,M,V,K,Y,U,te,ue,ie)=>{let W=0;const fe=M.length;let ce=k.length-1,j=fe-1;for(;W<=ce&&W<=j;){const J=k[W],ne=M[W]=ie?Zn(M[W]):Pn(M[W]);if($t(J,ne))b(J,ne,V,null,Y,U,te,ue,ie);else break;W++}for(;W<=ce&&W<=j;){const J=k[ce],ne=M[j]=ie?Zn(M[j]):Pn(M[j]);if($t(J,ne))b(J,ne,V,null,Y,U,te,ue,ie);else break;ce--,j--}if(W>ce){if(W<=j){const J=j+1,ne=J<fe?M[J].el:K;for(;W<=j;)b(null,M[W]=ie?Zn(M[W]):Pn(M[W]),V,ne,Y,U,te,ue,ie),W++}}else if(W>j)for(;W<=ce;)D(k[W],Y,U,!0),W++;else{const J=W,ne=W,ee=new Map;for(W=ne;W<=j;W++){const ze=M[W]=ie?Zn(M[W]):Pn(M[W]);ze.key!=null&&ee.set(ze.key,W)}let ve,me=0;const ke=j-ne+1;let Se=!1,Ie=0;const Ke=new Array(ke);for(W=0;W<ke;W++)Ke[W]=0;for(W=J;W<=ce;W++){const ze=k[W];if(me>=ke){D(ze,Y,U,!0);continue}let pn;if(ze.key!=null)pn=ee.get(ze.key);else for(ve=ne;ve<=j;ve++)if(Ke[ve-ne]===0&&$t(ze,M[ve])){pn=ve;break}pn===void 0?D(ze,Y,U,!0):(Ke[pn-ne]=W+1,pn>=Ie?Ie=pn:Se=!0,b(ze,M[pn],V,null,Y,U,te,ue,ie),me++)}const $n=Se?pd(Ke):It;for(ve=$n.length-1,W=ke-1;W>=0;W--){const ze=ne+W,pn=M[ze],Rt=M[ze+1],Zt=ze+1<fe?Rt.el||cr(Rt):K;Ke[W]===0?b(null,pn,V,Zt,Y,U,te,ue,ie):Se&&(ve<0||W!==$n[ve]?P(pn,V,Zt,2):ve--)}}},P=(k,M,V,K,Y=null)=>{const{el:U,type:te,transition:ue,children:ie,shapeFlag:W}=k;if(W&6){P(k.component.subTree,M,V,K);return}if(W&128){k.suspense.move(M,V,K);return}if(W&64){te.move(k,M,V,Xe);return}if(te===F){s(U,M,V);for(let ce=0;ce<ie.length;ce++)P(ie[ce],M,V,K);s(k.anchor,M,V);return}if(te===Zs){S(k,M,V);return}if(K!==2&&W&1&&ue)if(K===0)ue.persisted&&!U[gn]?s(U,M,V):(ue.beforeEnter(U),s(U,M,V),en(()=>ue.enter(U),Y));else{const{leave:ce,delayLeave:j,afterLeave:J}=ue,ne=()=>{k.ctx.isUnmounted?l(U):s(U,M,V)},ee=()=>{const ve=U._isLeaving||!!U[gn];U._isLeaving&&U[gn](!0),ue.persisted&&!ve?ne():ce(U,()=>{ne(),J&&J()})};j?j(U,ne,ee):ee()}else s(U,M,V)},D=(k,M,V,K=!1,Y=!1)=>{const{type:U,props:te,ref:ue,children:ie,dynamicChildren:W,shapeFlag:fe,patchFlag:ce,dirs:j,cacheIndex:J,memo:ne}=k;if((ce===-2||W&&W.hasOnce)&&(Y=!1),ue!=null&&(Fn(),ir(ue,null,V,k,!0),Un()),J!=null&&(!k.ctx||k.ctx===M)&&(M.renderCache[J]=void 0),fe&256&&M.ctx.deactivate(k))return;const ee=fe&1&&j,ve=!Ht(k);let me;if(ve&&(me=te&&te.onVnodeBeforeUnmount)&&An(me,M,k),fe&6)R(k.component,V,K);else{if(fe&128){k.suspense.unmount(V,K);return}ee&&gt(k,null,M,"beforeUnmount"),fe&64?k.type.remove(k,M,V,Xe,K):W&&!W.hasOnce&&(U!==F||ce>0&&ce&64)?X(W,M,V,!1,!0):(U===F&&ce&384||!Y&&fe&16)&&X(ie,M,V),K&&$(k)}const ke=ne!=null&&J==null;(ve&&(me=te&&te.onVnodeUnmounted)||ee||ke)&&en(()=>{me&&An(me,M,k),ee&&gt(k,null,M,"unmounted"),ke&&(k.el=null)},V)},$=k=>{const{type:M,el:V,anchor:K,transition:Y}=k,U=M===F;if(U&&!Y){q(V,K);return}if(M===Zs){x(k),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave();return}const te=U?mr(k):k,ue=()=>{U?_(V)&&q(V,K):l(V),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(te&&te.shapeFlag&1&&Y&&!Y.persisted){const{leave:ie,delayLeave:W}=Y,fe=te.el,ce=()=>ie(fe,ue);W?W(fe,ue,ce):ce()}else ue()},q=(k,M)=>{let V;for(;k!==M;)V=g(k),l(k),k=V;l(M)},R=(k,M,V)=>{const{bum:K,scope:Y,job:U,subTree:te,um:ue,m:ie,a:W}=k;Ra(ie),Ra(W),K&&Xr(K),Y.stop(),U?(U.flags|=8,D(te,k,M,V)):te&&(te.transition=k.vnode.transition,D(te,k,M,V)),ue&&en(ue,M);const fe=()=>{k.isUnmounted=!0};fe.flags=16,en(fe,M)},X=(k,M,V,K=!1,Y=!1,U=0)=>{for(let te=U;te<k.length;te++)D(k[te],M,V,K,Y)},Me=k=>{if(k.shapeFlag&6)return Me(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const M=g(k.anchor||k.el),V=M&&M[ri];return V?g(V):M},Ve=(k,M,V)=>{const K=k&&M._vnode?void 0:k&&k.component?k.component.uid:_d();_c(()=>{k==null?M._vnode&&D(M._vnode,null,null,!0):b(M._vnode||null,k,M,null,null,null,V),M._vnode=k},K)},Xe={p:b,um:D,m:P,r:$,mt:he,mc:B,pc:re,pbc:O,n:Me,o:e};return{render:Ve,hydrate:void 0,createApp:Yc(Ve)}}function zs({type:e,props:n},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&n&&n.encoding&&n.encoding.includes("html")?void 0:t}function yt({effect:e,job:n},t){t?(e.flags|=32,n.flags|=4):(e.flags&=-33,n.flags&=-5)}function fd(e,n){return(!e||e&&!e.pendingBranch)&&n&&!n.persisted}function ql(e,n,t=!1){const s=e.children,l=n.children;if(_e(s)&&_e(l))for(let o=0;o<s.length;o++){const i=s[o];let c=l[o];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[o]=Zn(l[o]),c.el=i.el),!t&&c.patchFlag!==-2&&ql(i,c)),c.type===xs&&(c.patchFlag===-1&&(c=l[o]=Zn(c)),c.el=i.el),c.type===Ye&&!c.el&&(c.el=i.el)}}function pd(e){const n=e.slice(),t=[0];let s,l,o,i,c;const v=e.length;for(s=0;s<v;s++){const m=e[s];if(m!==0){if(l=t[t.length-1],e[l]<m){n[s]=l,t.push(s);continue}for(o=0,i=t.length-1;o<i;)c=o+i>>1,e[t[c]]<m?o=c+1:i=c;m<e[t[o]]&&(o>0&&(n[s]=t[o-1]),t[o]=s)}}for(o=t.length,i=t[o-1];o-- >0;)t[o]=i,i=n[i];return t}function Ei(e){const n=e.subTree.component;if(n)return n.asyncDep&&!n.asyncResolved?n:Ei(n)}function Ra(e){if(e)for(let n=0;n<e.length;n++)e[n].flags|=8}function cr(e){if(e.placeholder)return e.placeholder;const n=e.component;if(n)return cr(n.subTree);const t=e.suspense;return t&&t.activeBranch?cr(t.activeBranch):null}const Ti=e=>e.__isSuspense,vd=Symbol("_deferredEnter");function md(e,n){n&&n.pendingBranch?_e(e)?n.effects.push(...e):n.effects.push(e):bc(e)}const F=Symbol.for("v-fgt"),xs=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Zs=Symbol.for("v-stc"),Jn=[];let vn=null;function d(e=!1){Jn.push(vn=e?null:[])}function Gl(){Jn.pop(),vn=Jn[Jn.length-1]||null}let gr=1;function cs(e,n=!1){gr+=e,e<0&&vn&&n&&(vn.hasOnce=!0)}function xi(e){return e.dynamicChildren=gr>0?vn||It:null,Gl(),gr>0&&vn&&vn.push(e),e}function f(e,n,t,s,l,o){return xi(a(e,n,t,s,l,o,!0))}function xe(e,n,t,s,l){return xi(qe(e,n,t,s,l,!0))}function jt(e){return e?e.__v_isVNode===!0:!1}function $t(e,n){return e.type===n.type&&e.key===n.key}const wi=({key:e})=>e??null,es=({ref:e,ref_key:n,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Le(e)||an(e)||Ce(e)?{i:ln,r:e,k:n,f:!!t}:e:null);function a(e,n=null,t=null,s=0,l=null,o=e===F?0:1,i=!1,c=!1){const v={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&wi(n),ref:n&&es(n),scopeId:ei,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:ln};return c?(ds(v,t),o&128&&e.normalize(v)):t&&(v.shapeFlag|=Le(t)?8:16),gr>0&&!i&&vn&&(v.patchFlag>0||o&6)&&v.patchFlag!==32&&vn.push(v),v}const qe=hd;function hd(e,n=null,t=null,s=0,l=null,o=!1){if((!e||e===jc)&&(e=Ye),jt(e)){const c=ft(e,n,!0);return t&&ds(c,t),gr>0&&!o&&vn&&(c.shapeFlag&6?vn[vn.indexOf(e)]=c:vn.push(c)),c.patchFlag=-2,c}if(Ed(e)&&(e=e.__vccOpts),n){n=gd(n);let{class:c,style:v}=n;c&&!Le(c)&&(n.class=ye(c)),Oe(v)&&(Fl(v)&&!_e(v)&&(v=Ge({},v)),n.style=tn(v))}const i=Le(e)?1:Ti(e)?128:Is(e)?64:Oe(e)?4:Ce(e)?2:0;return a(e,n,t,s,l,i,o,!0)}function gd(e){return e?Fl(e)?Ge({},e):_i(e)?Ge({},e[Pi]||e):e:null}function ft(e,n,t=!1,s=!1){const{props:l,ref:o,patchFlag:i,children:c,transition:v}=e,m=n?yd(l||{},n):l,p={__v_isVNode:!0,__v_skip:!0,type:e.type,props:m,key:m&&wi(m),ref:n&&n.ref?t&&o?_e(o)?o.concat(es(n)):[o,es(n)]:es(n):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:c,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==F?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:v,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ft(e.ssContent),ssFallback:e.ssFallback&&ft(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce,cacheIndex:e.cacheIndex};return v&&s&&xt(p,v.clone(p)),p}function $e(e=" ",n=0){return qe(xs,null,e,n)}function I(e="",n=!1){return n?(d(),xe(Ye,null,e)):qe(Ye,null,e)}function Pn(e){return e==null||typeof e=="boolean"?qe(Ye):_e(e)?qe(F,null,e.slice()):jt(e)?Zn(e):qe(xs,null,String(e))}function Zn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ft(e)}function ds(e,n){let t=0;const{shapeFlag:s}=e;if(n==null)n=null;else if(_e(n))t=16;else if(typeof n=="object")if(s&65){const l=n.default;l&&(l._c&&(l._d=!1),ds(e,l()),l._c&&(l._d=!0));return}else{t=32;const l=n._;!l&&!_i(n)?n._ctx=ln:l===3&&ln&&(ln.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else if(Ce(n)){if(s&65){ds(e,{default:n});return}n={default:n,_ctx:ln},t=32}else n=String(n),s&64?(t=16,n=[$e(n)]):t=8;e.children=n,e.shapeFlag|=t}function yd(...e){const n={};for(let t=0;t<e.length;t++){const s=e[t];for(const l in s)if(l==="class")n.class!==s.class&&(n.class=ye([n.class,s.class]));else if(l==="style")n.style=tn([n.style,s.style]);else if(ys(l)){const o=n[l],i=s[l];i&&o!==i&&!(_e(o)&&o.includes(i))?n[l]=o?[].concat(o,i):i:i==null&&o==null&&!bs(l)&&(n[l]=i)}else l!==""&&(n[l]=s[l])}return n}function An(e,n,t,s=null){kn(e,n,7,[t,s])}const bd=vi();let Si=0;function _d(){return Si}function kd(e,n,t){const s=e.type,l=(n?n.appContext:e.appContext)||bd,o={uid:Si++,vnode:e,type:s,parent:n,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Gu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(l.provides),ids:n?n.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mi(s,l),emitsOptions:mi(s,l),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=n?n.root:o,o.emit=Xc.bind(null,o),e.ce&&e.ce(o),o}let cn=null;const Ai=()=>cn||ln;let fs,yr;{const e=ks(),n=(t,s)=>{let l;return(l=e[t])||(l=e[t]=[]),l.push(s),o=>{l.length>1?l.forEach(i=>i(o)):l[0](o)}};fs=n("__VUE_INSTANCE_SETTERS__",t=>cn=t),yr=n("__VUE_SSR_SETTERS__",t=>br=t)}const Nr=e=>{const n=cn;return fs(e),e.scope.on(),()=>{e.scope.off(),fs(n)}},Da=()=>{cn&&cn.scope.off(),fs(null)};function Ni(e){return e.vnode.shapeFlag&4}let br=!1;function Md(e,n=!1,t=!1){n&&yr(n);const{props:s,children:l}=e.vnode,o=Ni(e);sd(e,s,o,n),id(e,l,t||n);const i=o?$d(e,n):void 0;return n&&yr(!1),i}function $d(e,n){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,qc);const{setup:s}=t;if(s){Fn();const l=e.setupContext=s.length>1?Id(e):null,o=Nr(e),i=Sr(s,e,0,[e.props,l]),c=Io(i);if(Un(),o(),(c||e.sp)&&!Ht(e)&&ii(e),c){if(i.then(Da,Da),n)return i.then(v=>{yr(!0);try{Va(e,v,n)}finally{yr(!1)}}).catch(v=>{$s(v,e,0,void 0,!0),e.ssrRender=(m,p)=>p("<!---->")});e.asyncDep=i}else Va(e,i)}else Oi(e)}function Va(e,n,t){Ce(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Oe(n)&&(e.setupState=zo(n)),Oi(e)}function Oi(e,n,t){const s=e.type;e.render||(e.render=s.render||Vn);{const l=Nr(e);Fn();try{Gc(e)}finally{Un(),l()}}}const Pi=Symbol(),Cd={get(e,n){return rn(e,"get",""),n===Pi?e:e[n]}};function Id(e){const n=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Cd),slots:e.slots,emit:e.emit,expose:n}}function ws(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(zo(uc(e.exposed)),{get(n,t){if(t in n)return n[t];if(t in ur)return ur[t](e)},has(n,t){return t in n||t in ur}})):e.proxy}function Ed(e){return Ce(e)&&"__vccOpts"in e}const H=(e,n)=>vc(e,n,br);function Td(e,n,t){try{cs(-1);const s=arguments.length;return s===2?Oe(n)&&!_e(n)?jt(n)?qe(e,null,[n]):qe(e,n):qe(e,null,n):(s>3?t=Array.prototype.slice.call(arguments,2):s===3&&jt(t)&&(t=[t]),qe(e,n,t))}finally{cs(1)}}const xd="3.5.45";/**
* @vue/runtime-dom v3.5.45
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yl;const La=typeof window<"u"&&window.trustedTypes;if(La)try{yl=La.createPolicy("vue",{createHTML:e=>e})}catch{}const Ri=yl?e=>yl.createHTML(e):e=>e,wd="http://www.w3.org/2000/svg",Sd="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,Ha=zn&&zn.createElement("template"),Ad={insert:(e,n,t)=>{n.insertBefore(e,t||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,t,s)=>{const l=n==="svg"?zn.createElementNS(wd,e):n==="mathml"?zn.createElementNS(Sd,e):t?zn.createElement(e,{is:t}):zn.createElement(e);return e==="select"&&s&&s.multiple!=null&&l.setAttribute("multiple",s.multiple),l},createText:e=>zn.createTextNode(e),createComment:e=>zn.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>zn.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},insertStaticContent(e,n,t,s,l,o){const i=t?t.previousSibling:n.lastChild;if(l&&(l===o||l.nextSibling))for(;n.insertBefore(l.cloneNode(!0),t),!(l===o||!(l=l.nextSibling)););else{Ha.innerHTML=Ri(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const c=Ha.content;if(s==="svg"||s==="mathml"){const v=c.firstChild;for(;v.firstChild;)c.appendChild(v.firstChild);c.removeChild(v)}n.insertBefore(c,t)}return[i?i.nextSibling:n.firstChild,t?t.previousSibling:n.lastChild]}},rt="transition",Xt="animation",_r=Symbol("_vtc"),Di={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Nd=Ge({},si,Di),Od=e=>(e.displayName="Transition",e.props=Nd,e),Vi=Od((e,{slots:n})=>Td(Ac,Pd(e),n)),bt=(e,n=[])=>{_e(e)?e.forEach(t=>t(...n)):e&&e(...n)},Fa=e=>e?_e(e)?e.some(n=>n.length>1):e.length>1:!1;function Pd(e){const n={};for(const A in e)A in Di||(n[A]=e[A]);if(e.css===!1)return n;const{name:t="v",type:s,duration:l,enterFromClass:o=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:v=o,appearActiveClass:m=i,appearToClass:p=c,leaveFromClass:_=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:h=`${t}-leave-to`}=e,C=Rd(l),b=C&&C[0],E=C&&C[1],{onBeforeEnter:T,onEnter:w,onEnterCancelled:S,onLeave:x,onLeaveCancelled:Q,onBeforeAppear:pe=T,onAppear:le=w,onAppearCancelled:B=S}=n,G=(A,N,he,be)=>{A._enterCancelled=be,_t(A,N?p:c),_t(A,N?m:i),he&&he()},O=(A,N)=>{A._isLeaving=!1,_t(A,_),_t(A,h),_t(A,g),N&&N()},oe=A=>(N,he)=>{const be=A?le:w,ge=()=>G(N,A,he);bt(be,[N,ge]),Ua(()=>{_t(N,A?v:o),Kn(N,A?p:c),Fa(be)||ja(N,s,b,ge)})};return Ge(n,{onBeforeEnter(A){bt(T,[A]),Kn(A,o),Kn(A,i)},onBeforeAppear(A){bt(pe,[A]),Kn(A,v),Kn(A,m)},onEnter:oe(!1),onAppear:oe(!0),onLeave(A,N){A._isLeaving=!0;const he=()=>O(A,N);Kn(A,_),A._enterCancelled?(Kn(A,g),Ba(A)):(Ba(A),Kn(A,g)),Ua(()=>{A._isLeaving&&(_t(A,_),Kn(A,h),Fa(x)||ja(A,s,E,he))}),bt(x,[A,he])},onEnterCancelled(A){G(A,!1,void 0,!0),bt(S,[A])},onAppearCancelled(A){G(A,!0,void 0,!0),bt(B,[A])},onLeaveCancelled(A){O(A),bt(Q,[A])}})}function Rd(e){if(e==null)return null;if(Oe(e))return[Ys(e.enter),Ys(e.leave)];{const n=Ys(e);return[n,n]}}function Ys(e){return Pu(e)}function Kn(e,n){n.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e[_r]||(e[_r]=new Set)).add(n)}function _t(e,n){n.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const t=e[_r];t&&(t.delete(n),t.size||(e[_r]=void 0))}function Ua(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Dd=0;function ja(e,n,t,s){const l=e._endId=++Dd,o=()=>{l===e._endId&&s()};if(t!=null)return setTimeout(o,t);const{type:i,timeout:c,propCount:v}=Vd(e,n);if(!i)return s();const m=i+"end";let p=0;const _=()=>{e.removeEventListener(m,g),o()},g=h=>{h.target===e&&++p>=v&&_()};setTimeout(()=>{p<v&&_()},c+1),e.addEventListener(m,g)}function Vd(e,n){const t=window.getComputedStyle(e),s=C=>(t[C]||"").split(", "),l=s(`${rt}Delay`),o=s(`${rt}Duration`),i=qa(l,o),c=s(`${Xt}Delay`),v=s(`${Xt}Duration`),m=qa(c,v);let p=null,_=0,g=0;n===rt?i>0&&(p=rt,_=i,g=o.length):n===Xt?m>0&&(p=Xt,_=m,g=v.length):(_=Math.max(i,m),p=_>0?i>m?rt:Xt:null,g=p?p===rt?o.length:v.length:0);const h=p===rt&&/\b(?:transform|all)(?:,|$)/.test(s(`${rt}Property`).toString());return{type:p,timeout:_,propCount:g,hasTransform:h}}function qa(e,n){for(;e.length<n.length;)e=e.concat(e);return Math.max(...n.map((t,s)=>Ga(t)+Ga(e[s])))}function Ga(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ba(e){return(e?e.ownerDocument:document).body.offsetHeight}function Ld(e,n,t){const s=e[_r];s&&(n=(n?[n,...s]:[...s]).join(" ")),n==null?e.removeAttribute("class"):t?e.setAttribute("class",n):e.className=n}const Qa=Symbol("_vod"),Hd=Symbol("_vsh"),Fd=Symbol(""),Ud=/(?:^|;)\s*display\s*:/;function jd(e,n,t){const s=e.style,l=Le(t);let o=!1;if(t&&!l){if(n)if(Le(n))for(const i of n.split(";")){const c=i.slice(0,i.indexOf(":")).trim();t[c]==null&&tr(s,c,"")}else for(const i in n)t[i]==null&&tr(s,i,"");for(const i in t){i==="display"&&(o=!0);const c=t[i];c!=null?Gd(e,i,!Le(n)&&n?n[i]:void 0,c)||tr(s,i,c):tr(s,i,"")}}else if(l){if(n!==t){const i=s[Fd];i&&(t+=";"+i),s.cssText=t,o=Ud.test(t)}}else n&&e.removeAttribute("style");Qa in e&&((!l||n!==t)&&(e[Qa]=o?s.display:""),e[Hd]&&(s.display="none"))}const qr=/\s*!important$/;function tr(e,n,t){if(_e(t))t.forEach(s=>tr(e,n,s));else if(t==null&&(t=""),n.startsWith("--"))qr.test(t)?e.setProperty(n,t.replace(qr,""),"important"):e.setProperty(n,t);else{const s=qd(e,n);qr.test(t)?e.setProperty(pt(s),t.replace(qr,""),"important"):e[s]=t}}const Ka=["Webkit","Moz","ms"],Ws={};function qd(e,n){const t=Ws[n];if(t)return t;let s=xn(n);if(s!=="filter"&&s in e)return Ws[n]=s;s=xo(s);for(let l=0;l<Ka.length;l++){const o=Ka[l]+s;if(o in e)return Ws[n]=o}return n}function Gd(e,n,t,s){return e.tagName==="TEXTAREA"&&(n==="width"||n==="height")&&Le(s)&&t===s}const za="http://www.w3.org/1999/xlink";function Za(e,n,t,s,l,o=Fu(n)){s&&n.startsWith("xlink:")?t==null?e.removeAttributeNS(za,n.slice(6,n.length)):e.setAttributeNS(za,n,t):t==null||o&&!So(t)?e.removeAttribute(n):e.setAttribute(n,o?"":Sn(t)?String(t):t)}function Ya(e,n,t,s,l){if(n==="innerHTML"||n==="textContent"){t!=null&&(e[n]=n==="innerHTML"?Ri(t):t);return}const o=e.tagName;if(n==="value"&&o!=="PROGRESS"&&!o.includes("-")){const c=o==="OPTION"?e.getAttribute("value")||"":e.value,v=t==null?e.type==="checkbox"?"on":"":String(t);(c!==v||!("_value"in e))&&(e.value=v),t==null&&e.removeAttribute(n),e._value=t;return}let i=!1;if(t===""||t==null){const c=typeof e[n];c==="boolean"?t=So(t):t==null&&c==="string"?(t="",i=!0):c==="number"&&(t=0,i=!0)}try{e[n]=t}catch{}i&&e.removeAttribute(l||n)}function it(e,n,t,s){e.addEventListener(n,t,s)}function Bd(e,n,t,s){e.removeEventListener(n,t,s)}const Wa=Symbol("_vei");function Qd(e,n,t,s,l=null){const o=e[Wa]||(e[Wa]={}),i=o[n];if(s&&i)i.value=s;else{const[c,v]=Zd(n);if(s){const m=o[n]=Xd(s,l);it(e,c,m,v)}else i&&(Bd(e,c,i,v),o[n]=void 0)}}const Kd=/(Once|Passive|Capture)$/,zd=/^on:?(?:Once|Passive|Capture)$/;function Zd(e){let n,t;for(;(t=e.match(Kd))&&!zd.test(e);)n||(n={}),e=e.slice(0,e.length-t[1].length),n[t[1].toLowerCase()]=!0;return[e[2]===":"?e.slice(3):pt(e.slice(2)),n]}let Xs=0;const Yd=Promise.resolve(),Wd=()=>Xs||(Yd.then(()=>Xs=0),Xs=Date.now());function Xd(e,n){const t=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=t.attached)return;const l=t.value;if(_e(l)){const o=s.stopImmediatePropagation;s.stopImmediatePropagation=()=>{o.call(s),s._stopped=!0};const i=l.slice(),c=[s];for(let v=0;v<i.length&&!s._stopped;v++){const m=i[v];m&&kn(m,n,5,c)}}else kn(l,n,5,[s])};return t.value=e,t.attached=Wd(),t}const Xa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jd=(e,n,t,s,l,o)=>{const i=l==="svg";n==="class"?Ld(e,s,i):n==="style"?jd(e,t,s):ys(n)?bs(n)||Qd(e,n,t,s,o):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):ef(e,n,s,i))?(Ya(e,n,s),!e.tagName.includes("-")&&(n==="value"||n==="checked"||n==="selected")&&Za(e,n,s,i,o,n!=="value")):e._isVueCE&&(nf(e,n)||e._def.__asyncLoader&&(/[A-Z]/.test(n)||!Le(s)))?Ya(e,xn(n),s,o,n):(n==="true-value"?e._trueValue=s:n==="false-value"&&(e._falseValue=s),Za(e,n,s,i))};function ef(e,n,t,s){if(s)return!!(n==="innerHTML"||n==="textContent"||n in e&&Xa(n)&&Ce(t));if(n==="spellcheck"||n==="draggable"||n==="translate"||n==="autocorrect"||n==="sandbox"&&e.tagName==="IFRAME"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA")return!1;if(n==="width"||n==="height"){const l=e.tagName;if(l==="IMG"||l==="VIDEO"||l==="CANVAS"||l==="SOURCE")return!1}return Xa(n)&&Le(t)?!1:n in e}function nf(e,n){const t=e._def.props;if(!t)return!1;const s=xn(n);return Array.isArray(t)?t.some(l=>xn(l)===s):Object.keys(t).some(l=>xn(l)===s)}const qt=e=>{const n=e.props["onUpdate:modelValue"]||!1;return _e(n)?t=>Xr(n,t):n};function tf(e){e.target.composing=!0}function Ja(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const Dn=Symbol("_assign"),Gr=Symbol("_initialValue");function Js(e,n,t){return n&&(e=e.trim()),t&&(e=wr(e)),e}const et={created(e,{modifiers:{lazy:n,trim:t,number:s}},l){e.parentNode&&(e.type==="text"?e[Gr]=e.defaultValue.replace(/[\r\n]/g,""):e.type==="textarea"&&(e[Gr]=e.defaultValue.replace(/\r\n?/g,`
`))),e[Dn]=qt(l);const o=s||l.props&&l.props.type==="number";it(e,n?"change":"input",i=>{i.target.composing||e[Dn](Js(e.value,t,o))}),(t||o)&&it(e,"change",()=>{e.value=Js(e.value,t,o)}),n||(it(e,"compositionstart",tf),it(e,"compositionend",Ja),it(e,"change",Ja))},mounted(e,{value:n,modifiers:{trim:t,number:s}}){const l=n??"",o=e[Gr];delete e[Gr],o!==void 0&&(e.type==="text"||e.type==="textarea")&&e.value!==o?e[Dn](Js(e.value,t,s)):e.value=l},beforeUpdate(e,{value:n,oldValue:t,modifiers:{lazy:s,trim:l,number:o}},i){if(e[Dn]=qt(i),e.composing)return;const c=(o||e.type==="number")&&!/^0\d/.test(e.value)?wr(e.value):e.value,v=n??"";if(c===v)return;const m=e.getRootNode();(m instanceof Document||m instanceof ShadowRoot)&&m.activeElement===e&&e.type!=="range"&&(s&&n===t||l&&e.value.trim()===v)||(e.value=v)}},rf={created(e,{value:n},t){e.checked=Hn(n,t.props.value),e[Dn]=qt(t),it(e,"change",()=>{e[Dn](kr(e))})},beforeUpdate(e,{value:n,oldValue:t},s){e[Dn]=qt(s),n!==t&&(e.checked=Hn(n,s.props.value))}},Br={deep:!0,created(e,{value:n,modifiers:{number:t}},s){e._modelValue=n,it(e,"change",()=>{const l=Array.prototype.filter.call(e.options,v=>v.selected).map(v=>t?wr(kr(v)):kr(v)),o=e.multiple,i=o?At(e._modelValue)?new Set(l):l:l[0],c=e._pendingValue=[o,o?_e(i)?l.slice():l:i];try{e[Dn](i)}finally{pr(()=>{e._pendingValue===c&&(e._pendingValue=void 0)})}}),e[Dn]=qt(s)},mounted(e,{value:n,modifiers:{number:t}}){eo(e,n,t)},beforeUpdate(e,{value:n},t){e._modelValue=n,e[Dn]=qt(t)},updated(e,{value:n,modifiers:{number:t}}){const s=e._pendingValue;e._pendingValue=void 0,(!s||s[0]!==e.multiple||!sf(n,s[1],s[0]))&&eo(e,n,t)}};function sf(e,n,t){if(!t||_e(e))return Hn(e,n);if(At(e)){if(e.size!==n.length)return!1;for(const s of n)if(!e.has(s))return!1;return!0}return!1}function eo(e,n,t=!1){const s=e.multiple,l=_e(n);if(!(s&&!l&&!At(n))){for(let o=0,i=e.options.length;o<i;o++){const c=e.options[o],v=kr(c);if(s)if(l){const m=typeof v;m==="string"||m==="number"?c.selected=n.some(p=>String(p)===String(v)):c.selected=qu(n,v)>-1}else c.selected=n.has(v)||t&&typeof v=="string"&&n.has(wr(v));else if(Hn(kr(c),n)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!s&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function kr(e){return"_value"in e?e._value:e.value}const lf=["ctrl","shift","alt","meta"],af={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>lf.some(t=>e[`${t}Key`]&&!n.includes(t))},mn=(e,n)=>{if(!e)return e;const t=e._withMods||(e._withMods={}),s=n.join(".");return t[s]||(t[s]=((l,...o)=>{for(let i=0;i<n.length;i++){const c=af[n[i]];if(c&&c(l,n))return}return e(l,...o)}))},of={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},bl=(e,n)=>{const t=e._withKeys||(e._withKeys={}),s=n.join(".");return t[s]||(t[s]=(l=>{if(!("key"in l))return;const o=pt(l.key);if(n.some(i=>i===o||of[i]===o))return e(l)}))},uf=Ge({patchProp:Jd},Ad);let no;function cf(){return no||(no=cd(uf))}const df=((...e)=>{const n=cf().createApp(...e),{mount:t}=n;return n.mount=s=>{const l=pf(s);if(!l)return;const o=n._component;!Ce(o)&&!o.render&&!o.template&&(o.template=l.innerHTML),l.nodeType===1&&(l.textContent="");const i=t(l,!1,ff(l));return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},n});function ff(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function pf(e){return Le(e)?document.querySelector(e):e}const vf="./";function Pe(e){return vf+"art/"+e}const Qr=vt({});function We(e){if(!e)return"no";const n=Pe(e),t=Qr[n];if(t)return t;Qr[n]="pending";const s=new Image;return s.onload=()=>{Qr[n]="ok"},s.onerror=()=>{Qr[n]="no"},s.src=n,"pending"}const Qe=[{id:"plain",name:"原味奶油蛋糕",month:0,diff:8,price:88,demand:7,desc:"店里的老方子。戚风胚，薄薄一层奶油。",colors:{sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"}},{id:"strawberry",name:"草莓奶油蛋糕",month:0,diff:12,price:128,demand:6,desc:"整颗草莓夹在奶油里，切开时会掉下来两颗。",colors:{sponge:"#F4DDB6",cream:"#FFF8F2",accent:"#E05B66"}},{id:"chocolate",name:"巧克力蛋糕",month:0,diff:12,price:118,demand:5,desc:"可可粉筛三遍，吃起来不苦，回味有点厚。",colors:{sponge:"#8A5A3B",cream:"#C89B72",accent:"#5C3823"}},{id:"taro",name:"芋泥薄脆",month:3,diff:18,price:168,demand:5,desc:"林念的第一款新品。少一分糖，中间夹一层薄薄的芋泥。",colors:{sponge:"#E5D5E8",cream:"#FBF2FA",accent:"#B48FC0"}},{id:"matcha",name:"抹茶蛋糕",month:4,diff:12,price:148,demand:4,desc:"宇治抹茶配红豆。火候差一点就会发苦。",colors:{sponge:"#C9D8A8",cream:"#F6FAEE",accent:"#7E9B52"}},{id:"mango",name:"芒果慕斯",month:6,diff:18,price:178,demand:4,desc:"夏天限定。芒果要挑熟的，不然酸味会盖住奶香。",colors:{sponge:"#F7D98C",cream:"#FFF6E2",accent:"#E9A93C"}},{id:"tiramisu",name:"提拉米苏",month:8,diff:18,price:188,demand:4,desc:"手指饼干浸得刚好，多一秒就散。",colors:{sponge:"#D8B98E",cream:"#F3E6D3",accent:"#6B4A34"}},{id:"fig",name:"无花果奶油",month:10,diff:12,price:198,demand:3,desc:"白奶油，上面摆一层无花果。苏晴喜欢这个。",colors:{sponge:"#EFDCC0",cream:"#FFFAF4",accent:"#A5587B"}},{id:"seasonal",name:"季节水果蛋糕",month:12,diff:18,price:218,demand:3,desc:"每个月换一次水果。春天莓果，秋天梨和无花果。",colors:{sponge:"#F6E4C4",cream:"#FFFAF0",accent:"#D9736A"}},{id:"custom",name:"生日定制蛋糕",month:16,diff:22,price:288,demand:2,desc:"客人说什么就做什么。难的不是手艺，是听懂。",colors:{sponge:"#F3E2C6",cream:"#FFFCF7",accent:"#D98CA0"}},{id:"festival",name:"节日限定蛋糕",month:20,diff:22,price:328,demand:2,desc:"一年只做几次。包装盒是专门订的。",colors:{sponge:"#EADCCB",cream:"#FFFBF5",accent:"#C2554F"}},{id:"signature",name:"桂花栗子蛋糕",month:26,diff:22,price:398,demand:2,desc:"外婆旧配方与现代工艺的结晶。栗子甜则少放糖，桂花香淡则后撒。",colors:{sponge:"#EEDCBB",cream:"#FFFCF5",accent:"#C89B3C"}}];function Ue(e){return Qe.find(n=>n.id===e)||Qe[0]}const Bl={taro:[["荔浦芋泥","焦糖杏仁薄脆"]],matcha:[["春日抹茶粉","蜜红豆"]],mango:[["台农芒果泥","轻盈慕斯"]],tiramisu:[["马斯卡彭","浓缩咖啡液"]],fig:[["波姬红无花果","轻奶油"]],seasonal:[["四季时令鲜果","定制夹心"]],custom:[["双层承重胚","手工定制裱花"]],festival:[["传统红曲","节庆装饰"],["栗蓉","节庆装饰"]],signature:[["高山秋栗","金桂冻","戚风胚"]]},bn=[{id:"base",name:"基础烘焙包",price:20,month:1},{id:"dairy",name:"乳制基底",price:10,month:1},{id:"decor",name:"裱花装饰料",price:5,month:1},{id:"strawberry",name:"鲜草莓",price:10,month:1},{id:"cocoa",name:"可可粉",price:10,month:1},{id:"taro",name:"荔浦芋泥",price:10,month:3},{id:"crisp",name:"焦糖杏仁薄脆",price:10,month:3},{id:"matcha",name:"春日抹茶粉",price:10,month:4},{id:"redbean",name:"蜜红豆",price:10,month:4},{id:"mango",name:"台农芒果泥",price:10,month:6},{id:"mascarpone",name:"马斯卡彭",price:10,month:8},{id:"coffee",name:"浓缩咖啡液",price:10,month:8},{id:"fig",name:"波姬红无花果",price:10,month:10},{id:"seasonal",name:"四季时令鲜果",price:10,month:12},{id:"filling",name:"定制夹心",price:10,month:12},{id:"redrice",name:"传统红曲",price:10,month:20},{id:"chestnut",name:"高山秋栗",price:10,month:20},{id:"osmanthus",name:"金桂冻",price:10,month:26}],ht={plain:{base:1,dairy:1},strawberry:{base:1,dairy:1,strawberry:1},chocolate:{base:1,dairy:1,cocoa:1},taro:{base:1,dairy:1,taro:1,crisp:1},matcha:{base:1,dairy:1,matcha:1,redbean:1},mango:{base:1,dairy:1,mango:1},tiramisu:{base:1,mascarpone:1,coffee:1},fig:{base:1,dairy:1,fig:1},seasonal:{base:1,dairy:1,seasonal:1,filling:1},custom:{base:2,dairy:1,filling:1,decor:1},festival:{base:1,dairy:1,chestnut:1,decor:1},signature:{base:1,dairy:1,chestnut:1,osmanthus:1}},Ql=[{id:"greenery",name:"窗边绿植",category:"绿植",cost:600,shopLevel:1},{id:"lamp",name:"暖黄吊灯",category:"灯具",cost:1200,shopLevel:1},{id:"tables",name:"木桌与藤椅",category:"桌椅",cost:1800,shopLevel:2},{id:"festival",name:"节日花环",category:"节日摆件",cost:2500,shopLevel:3}],Kl=[{id:"chen",name:"张奶奶",month:2,day:2,product:"plain",preference:"每次都买原味奶油蛋糕，给小孙子也带一份。",stories:["“我家小孙子指定要吃你们家的味道。”张奶奶说，家里三代人的生日蛋糕全是在林记订的。","她看着林念接过店，也和苏晴一起盼着林记的老味道走出栖云镇。"]},{id:"zhang",name:"陈叔",month:28,day:4,product:"signature",preference:"桂花栗子蛋糕刚上架时，总会来买一块。",stories:["外婆留下的配方写着：“栗子甜则少放糖，桂花香淡则后撒。”","老街坊们怀念的，是秋天打开蛋糕盒时那股桂花与板栗香；如今，林念把它做成了招牌。"]}],mf={low:{label:"亲民",priceMul:.85,demandMul:1.35},std:{label:"标准",priceMul:1,demandMul:1},high:{label:"精品",priceMul:1.22,demandMul:.72}},Nt=[{id:"xiaoyu",name:"周雨桐",nick:"小雨",role:"烘焙学徒",joinMonth:8,color:"#C9A9C4",issue:"不敢相信自己的想法值得被认可",skillName:"烘焙"},{id:"zhiyao",name:"许知遥",nick:"知遥",role:"门店运营",joinMonth:14,color:"#A9C4C9",issue:"擅长沟通，但缺乏管理信心",skillName:"运营"},{id:"kexin",name:"唐鸢",nick:"阿鸢",role:"资深烘焙师",joinMonth:18,color:"#C9B58A",issue:"太追求标准化，差点丢掉研发的热情",skillName:"研发"},{id:"qinghe",name:"叶星河",nick:"星河",role:"品牌设计师",joinMonth:21,color:"#A8B99B",issue:"创意丰富，但不擅长商业设计",skillName:"设计"}];function Gt(e){return Nt.find(n=>n.id===e)}const Ot=[{id:"qiyun",name:"栖云镇",month:0,cost:0,rep:0,note:"初始门店。住了二十年的小镇。"},{id:"linjiang",name:"临江市",month:20,cost:12e3,rep:34,note:"开车四十分钟。第一家分店。"},{id:"hangzhou",name:"杭州",month:24,cost:26e3,rep:44,note:"第一家真正的外地店。"},{id:"shanghai",name:"上海",month:27,cost:42e3,rep:54,note:"房租很贵，客单价也高。"},{id:"nanjing",name:"南京",month:30,cost:58e3,rep:62,note:"老街上的店，保留木质结构。"},{id:"chengdu",name:"成都",month:32,cost:74e3,rep:70,note:"本地团队自己跑起来的。"},{id:"guangzhou",name:"广州",month:34,cost:92e3,rep:78,note:"第一次把季节水果换成热带水果。"},{id:"beijing",name:"北京",month:35,cost:12e4,rep:85,note:"旗舰店。开业那天是我生日。"}],Mr=[{lv:1,name:"社区老店",ap:0,seats:2,cost:0,desc:"木地板，一个玻璃展示柜，两张旧木桌。手写价目牌。"},{lv:2,name:"精致烘焙店",ap:1,seats:6,cost:15e3,desc:"暖黄吊灯，三层展示柜，奶油白墙面，小方砖地面。"},{lv:3,name:"品牌旗舰店",ap:1,seats:12,cost:45e3,desc:"整面墙的木质货架，开放式厨房用玻璃隔断，有休息区。"},{lv:4,name:"高端主题门店",ap:1,seats:20,cost:9e4,desc:"拱形门洞，大理石台面，花艺布置，像走进一本绘本。"}];function hf(e){return Mr.find(n=>n.lv===e)||Mr[0]}const zl=[{id:"oven",name:"烤箱",note:"产能",desc:"好烤箱能一次进更多盘，出品也更稳。",tiers:[{cost:2500,value:40,text:"产能 +40"},{cost:7500,value:90,text:"产能 +90"},{cost:22e3,value:150,text:"产能 +150"}]},{id:"mixer",name:"搅拌机",note:"省力",desc:"奶油和面糊交给它，自己少使点劲。",tiers:[{cost:2e3,value:.1,text:"自付体力 -10%"},{cost:6500,value:.2,text:"自付体力 -20%"},{cost:19e3,value:.3,text:"自付体力 -30%"}]},{id:"fridge",name:"冷藏柜",note:"剩货",desc:"当天没卖完的，第二天还能打折卖掉一部分。",tiers:[{cost:1800,value:.1,text:"剩货回收 +10%"},{cost:5500,value:.18,text:"剩货回收 +18%"},{cost:16e3,value:.26,text:"剩货回收 +26%"}]},{id:"display",name:"展示柜",note:"客流",desc:"摆得好看，路过的人就更愿意进来。",tiers:[{cost:3e3,value:.06,text:"需求 +6%"},{cost:9e3,value:.13,text:"需求 +13%"},{cost:3e4,value:.2,text:"需求 +20%"}]},{id:"packing",name:"包装台",note:"定制",desc:"定制单拼的就是最后那一下体面。",tiers:[{cost:2600,value:.1,text:"定制收入 +10%"},{cost:7500,value:.22,text:"定制收入 +22%"},{cost:24e3,value:.35,text:"定制收入 +35%"}]},{id:"warehouse",name:"仓库",note:"采购",desc:"一次能囤更多原料，少跑几趟。",tiers:[{cost:1600,value:6,text:"单次采购 +6 份"},{cost:5e3,value:12,text:"单次采购 +12 份"},{cost:15e3,value:20,text:"单次采购 +20 份"}]},{id:"cashier",name:"收银系统",note:"售价",desc:"扫码点单，客单价能往上提一点。",tiers:[{cost:2400,value:.03,text:"售价 +3%"},{cost:7e3,value:.06,text:"售价 +6%"},{cost:26e3,value:.1,text:"售价 +10%"}]}];function Zl(e){return zl.find(n=>n.id===e)}function to(e,n){return e.unlocked.filter(t=>(e.levels[t]||1)>=n).length}function gf(e){return e.unlocked.length?e.unlocked.reduce((n,t)=>n+(e.levels[t]||1),0)/e.unlocked.length:1}function yf(e){return Math.max(0,...Object.values(e.partnerSkill))}function bf(e,n){return Object.values(e.partnerTrust).filter(t=>t>=n).length}const Bt=[{id:1,from:1,to:6,name:"第一章 · 接手林记",need:2,goals:[{text:"口碑达到 25",check:e=>e.reputation>=25},{text:"解锁 2 款新品",check:e=>e.unlocked.length>=5},{text:"完成 2 笔定制订单",check:e=>e.customOrders>=2}],short:{key:"street_lamp",name:"短文结局 · 街角的灯",title:"一家小店，一种喜欢的生活",text:"林念发现自己其实很喜欢现在的生活。虽然没有做出惊人的成绩，但熟悉的顾客依然每天来买蛋糕。林暖看着忙碌的女儿，觉得她已经成长了不少。苏晴偶尔来店里，坐在窗边陪她聊天。"}},{id:2,from:7,to:12,name:"第二章 · 熟悉的味道",need:2,goals:[{text:"店铺升级到 LV2",check:e=>e.shopLevel>=2},{text:"累计完成 8 笔线上订单",check:e=>e.onlineOrders>=8},{text:"至少 3 款产品熟练度到 3 级",check:e=>to(e,3)>=3},{text:"完成 3 笔节日订单",check:e=>e.festivalOrders>=3}],short:{key:"familiar_taste",name:"短文结局 · 熟悉的味道",title:"没有成为大品牌，但林记依然是大家熟悉的林记",text:"一年过去，林记依然是栖云镇那家熟悉的老店。除夕夜，店里摆满提前预订的蛋糕。张奶奶笑着说，还是你们家的蛋糕好吃，这么多年都没变。"}},{id:3,from:13,to:18,name:"第三章 · 让林记走得更远",need:2,goals:[{text:"产品平均熟练度达到 2.5 级",check:e=>gf(e)>=2.5},{text:"至少 3 款产品熟练度到 3 级",check:e=>to(e,3)>=3},{text:"口碑达到 45",check:e=>e.reputation>=45},{text:"有一名伙伴专业能力到 3 级",check:e=>yf(e)>=3}],short:{key:"small_team",name:"短文结局 · 小小的团队",title:"有一群可靠的伙伴，有一家喜欢的店，就已经很好",text:"林念发现经营一家店已经占据了自己大部分精力。她决定暂时放弃扩张，继续和伙伴们经营好栖云镇的林记。她第一次明白，经营事业不一定要不断扩大规模。"}},{id:4,from:19,to:24,name:"第四章 · 从一家店到一支团队",need:2,needExpand:!0,goals:[{text:"成功开设第一家分店",check:e=>e.storeCount>=2,expand:!0},{text:"线上订单累计 25 笔",check:e=>e.onlineOrders>=25,expand:!0},{text:"口碑达到 55",check:e=>e.reputation>=55},{text:"两名伙伴信赖度达到 50",check:e=>bf(e,50)>=2}],short:{key:"qiyun_sign",name:"短文结局 · 栖云镇的招牌",title:"没有走向全国，却成为一座小城里不可替代的存在",text:"林记逐渐成为栖云镇非常有名的烘焙店。林念尝试过扩张，但最终发现自己更喜欢现在的经营方式。苏晴拍下店铺最漂亮的照片，说，你已经把这里变成自己喜欢的样子了。"}},{id:5,from:25,to:30,name:"第五章 · 找回林记的味道",need:2,goals:[{text:"解锁「招牌 · 从一块开始」",check:e=>e.unlocked.includes("signature")},{text:"招牌蛋糕熟练度到 2 级",check:e=>(e.levels.signature||1)>=2},{text:"口碑达到 65",check:e=>e.reputation>=65},{text:"两名伙伴提供过专属协助",check:e=>e.helpers>=2}],short:{key:"osmanthus",name:"短文结局 · 桂香留在栖云",title:"有些味道，不需要传遍全国，也值得一直保留下去",text:"秋日文化节之后，桂花栗子蛋糕获得当地顾客的喜爱。林念发现团队还不适合大规模扩张，于是把它定为每年秋天的限定。伙伴们坐在店里，吃着最后一批。"}},{id:6,from:31,to:36,name:"第六章 · 把喜欢的味道带到全国",need:0,goals:[],final:!0}];function _f(e){return Bt.find(n=>e>=n.from&&e<=n.to)||Bt[0]}const Li={community:{name:"社区老店",title:"林记还是那条街上，那家一直亮着灯的店",text:"店铺规模不大，但拥有很高的顾客忠诚度。很多人从小在这里买蛋糕，现在带着孩子来。"},tradition:{name:"传统手作老字号",title:"有些味道，经过很多年依然不会忘记",text:"林记保留了外婆的经典配方，形成了自己的传统烘焙文化。桂花栗子蛋糕成了每年秋天的约定。"},creative:{name:"创意烘焙品牌",title:"把喜欢的东西，做成了别人也喜欢的样子",text:"林记以新品研发、季节限定和创意设计出名，吸引了很多年轻顾客。"},regional:{name:"区域连锁品牌",title:"这一片地方，都认识这家店",text:"林记在多个城市开设门店，有了成熟的团队和稳定的供应链。"},national:{name:"全国连锁品牌",title:"从一块蛋糕开始，慢慢成为更好的自己",text:"林记建立了完整的研发、生产、供应链和运营体系。高端主题旗舰店正式开业。"},transfer:{name:"转让",title:"招牌还挂在街口，只是不再由她掌舵",text:"林记的招牌依然会挂在各个城市的街口，经典配方的蛋糕依然每天出炉。苏晴在门口等她，接过她手里的纸箱。"}},Kr={sq_visit:{title:"第一次探店",caption:"她站在门口拍了一张。这张她留了三年。",img:Pe("sq-friends.webp")},first_order:{title:"第一张顾客回图",caption:"蛋糕上插着蜡烛，一位头发花白的阿姨在笑。",img:null},sq_birthday:{title:"九月的生日",caption:"白奶油，一层无花果。她吹蜡烛的时候闭着眼。",img:null},community:{title:"夏日生活节",caption:"价目牌是手写的，字歪歪扭扭，但很好看。",img:Pe("shop-exterior.webp")},ln_birthday:{title:"十二月的雪",caption:"蛋糕很朴素，切开是三层不同的颜色。",img:Pe("nu-duo.webp")},ln_birthday_2:{title:"二十四岁",caption:"小雨做的蛋糕，抹面不平，草莓摆得有点挤。",img:null},sq_birthday_3:{title:"第三年的九月",caption:"关了灯的门店里，两份外卖和一个小蛋糕。",img:null},album:{title:"一本相册",caption:"最后一页是空的。她说留给我自己贴。",img:Pe("sq-friends.webp")},finale:{title:"三周年",caption:"三个人在后厨分了一个很小的蛋糕。",img:Pe("shop-exterior.webp")}},kf=["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];function el(e){return kf[(e-1)%12]}const Mf=`# 《林记烘焙》完整文游剧情文案 V5.0（橙光对话体标准版）\r
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
林暖把一串铜钥匙放进林念手心，认真地看着她。\r
林暖：念念，既然接手了林记，要不要让妈妈带你把前厅、后厨和老街走一遍？我把每个地方的用处都讲给你听。\r
\r
> **【玩家选择节点 0.1（序幕）：要跟妈妈熟悉店铺吗？】**\r
> - **选项A：好呀，妈带我走一圈吧。**\r
> - **选项B：我想先自己熟悉一下。**\r
\r
**【分支A】**\r
林念接过钥匙，笑着点了点头。\r
林念：好呀，那我们从前厅开始吧。\r
林暖：好，跟着我，咱们慢慢看。\r
\r
**【分支B】**\r
林念把钥匙握在手里，轻轻摇了摇头。\r
林念：谢谢妈，我想先自己试着熟悉一下。\r
林暖：也好。今天你先按自己的节奏来，遇到不懂的随时问我。\r
\r
**【主线汇合】**\r
林暖拍了拍林念的肩膀，转身把围裙挂到柜台旁。\r
\r
---\r
\r
## 第一章：接手林记（第1—6个月）\r
**章节主题：从毕业生到经营者**\r
**本阶段登场人物：林念、林暖、苏晴、张奶奶**\r
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
午后营业时段，头发花白的张奶奶笑呵呵地走进店里。\r
苏晴恰好坐在靠窗的旧木桌旁挑照片，主动起身帮张奶奶拉开了木门。\r
\r
苏晴：张奶奶，您来买蛋糕啦？\r
张奶奶：是晴晴呀！我就说刚才隔着窗户看着眼熟。\r
张奶奶走到展示柜前，笑眯眯地看向林念。\r
张奶奶：念念呀，听你妈说你大学毕业回来接班啦？真好真好，今天给我拿一份原味奶油蛋糕，我家小孙子指定要吃你们家的味道。\r
林念将打包好的蛋糕递过去。\r
林念：张奶奶您拿好！我还给小朋友多放了一块试吃装的巧克力小切块。\r
张奶奶：哎哟，还是你们贴心。我年轻那会儿，这店还是你外婆守着；后来是你妈妈，一晃眼几十个年头过去，我家三代人的生日蛋糕全是在林记订的。\r
林念：谢谢张奶奶一直惦记着我们。\r
张奶奶：咱们老街坊信得过林记，你们把老味道守住，以后生意准能越来越红火！\r
\r
送走张奶奶后，林暖翻开记账本走到林念身边。\r
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
张奶奶像往常一样在傍晚来买走最后一块原味蛋糕。\r
\r
张奶奶：念念呀，现在每天路过林记，看到你在柜台后头笑眯眯的样子，奶奶心里就踏实。\r
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
**本阶段登场人物：林念、林暖、苏晴、周雨桐（M8加入）、张奶奶**\r
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
张奶奶提着红色的蛋糕盒，笑眯眯地看向柜台后的林念、林暖和小雨。\r
\r
张奶奶：还是你们家的蛋糕好吃，这么多年都没变。只要林记还开在街口，咱们镇上的年味儿就还在。\r
周雨桐开心地替张奶奶掀开门帘。\r
周雨桐：张奶奶您慢走，明年我们还给您留最甜的草莓！\r
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
她将栖云镇的门店重新装修了一番，增加了更多宽敞的座位，叶星河为墙面绘上了温馨的壁画，小雨和阿鸢在后厨从容地研发着时令点心，知遥在前厅笑吟吟地招呼着张奶奶等老熟客。\r
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
**本阶段登场人物：林念、林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河、张奶奶**\r
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
  许知遥：念念，前厅和线上预订的八百多位客人，我已经全部按「文化节现场自提」「栖云镇老店自提」「跨城冷链专送」做好三级分流表了！所有需要微调取货时段的熟客我也逐一电话联系完毕，张奶奶和几十位老街坊不仅没有一句怨言，还在群里给我们全员加油呢！\r
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
接下来的三天里，苏晴借着自己拍摄《栖云镇人物志》摄影项目的机会，扛着相机和录音笔走遍了青石板街，拜访了张奶奶等十几位光顾林记二三十年的老顾客。\r
三天后的傍晚，苏晴把林念、林暖、小雨、知遥、阿鸢和星河全都叫到了店里，在投影布上放出了她拍下的一张张老街坊访谈照，并按下了录音笔的播放键。\r
\r
录音笔里传来了张奶奶熟悉的笑声和街坊们温热的话语：\r
张奶奶（录音）：晴晴问我记不记得林老太太当年的桂花栗子蛋糕呀？怎么不记得哟！那时候哪有什么死板的标准，有一年秋天雨水多，山上的栗子没那么甜，林老太太就在夹心里多加一勺桂花蜜；有一年霜降早，桂花香淡了，她就在装盒前现撒一把金桂干花。\r
老街坊陈叔（录音）：我们老街坊惦记林记的桂花栗子蛋糕，哪是在意上面的奶油花挤成什么形状呀？我们怀念的，是每年秋风一起，全家人围在八仙桌边，打开林记的盒子闻到那股热乎乎、实打实的桂花板栗香！\r
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
林暖陪着专程坐大巴车赶来捧场的张奶奶站在展位旁，看着被人群簇拥的林念和年轻伙伴们，笑得合不拢嘴。\r
张奶奶：林大姐，你看念念和这群姑娘们多能干！咱们栖云镇的老味道，如今真是走到大城里发光发热咯！\r
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
许知遥：张奶奶今天早上还专门问我，明年秋天能不能提前半年预订呢！\r
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
**本阶段登场人物：林念、林暖、苏晴、周雨桐、许知遥、唐鸢、叶星河、张奶奶**\r
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
里面有高一教室的素描与高二二班的后门，有林念刚接手林记时紧张的模样，有张奶奶慈祥的笑脸，有小雨、知遥、阿鸢、星河刚加入时的青涩瞬间，有临江分店、秋日文化节，也有崭新的旗舰店。\r
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
### M36｜终章：我们都在这里（全员合流三周年盛典）\r
**【事件ID：EVT_M36_MAIN｜触发月份：M36第5个经营日】**\r
**【场景：蛋糕店前厅】**\r
\r
三十六个月的时光，在面粉、奶油与四季更迭的香气中悄然走过。\r
今天是「林记烘焙」林念接手满三周年的纪念庆典日。\r
清晨八点，阳光穿过擦得一尘不染的玻璃窗洒进前厅，店里店外早已被鲜花与暖奶油色系的庆典丝带装点一新。\r
\r
叶星河站在梯子上，把最后一张手绘的「林记三周年」烫金主题海报挂正，拍了拍手跳下来。\r
叶星河：林店长，快看！门口的木绣球花艺拱门和店里的纪念插画墙全部布置好啦，今天不管从哪个角度拍都超级好看！\r
许知遥拿着平板电脑，从容地核对今日的宾客名单与伴手礼盒数量。\r
许知遥：念念，今天预约到场的老顾客和各店代表一共有八十多位，三周年伴手礼盒我已经按顺序全部排好号了，保证今天前厅秩序井然，绝不漏掉一位客人！\r
\r
后厨的玻璃隔断门推开，周雨桐与唐鸢合力推着餐车走了出来。\r
餐车正中央，是一座融合了林记三年来所有代表作元素的三层纪念主蛋糕——底层是醇厚的桂花栗子夹心，中层是酥脆的芋泥薄脆与抹茶红豆，顶层则点缀着晶莹剔透的四季鲜果与原味动物奶油花冠。\r
周雨桐眼睛亮晶晶地看向林念。\r
周雨桐：念念姐，我和唐鸢姐早上五点就起来烤胚抹面了，每一颗草莓和每一朵奶油花都是按最高标准做的！\r
唐鸢推了推眼镜，一贯严肃的眉眼间带着温和的笑意。\r
唐鸢：温度、湿度与承重结构全部检查过了。这三年的研发手艺，今天全都浓缩在这一座蛋糕里了。\r
\r
这时，店门上的铜铃轻轻响起。\r
系着深绿色围裙的沈知秋端着一只精致的木质托盘走了进来，空气里瞬间多了一缕清雅的花香咖啡气息。\r
沈知秋：恭喜三周年，林店长。今天这么重要的日子，「秋屿咖啡」怎么能缺席呢？我把《栖云四季》菜单里的四款特调咖啡都做成了迷你试饮杯带过来了，专门配你们今天的庆典蛋糕。\r
林念惊喜地迎上去接过托盘。\r
林念：知秋姐！我还以为你上午在店里忙不过来呢，太感谢你了！\r
沈知秋温和地笑了笑。\r
沈知秋：今天秋屿特意挂了半天「参加老朋友店庆」的木牌。毕竟没有林记，就没有我们现在的四季菜单呀。\r
\r
苏晴背着两台相机从门外走进来，熟练地测了一下窗边的光线，笑着朝众人晃了晃镜头。\r
苏晴：各位林记的大功臣们，本首席摄影师今天可是带了足足四张内存卡来的！从现在开始，大家今天的一举一动全都归我抓拍了哦！\r
\r
上午十点整，三周年庆典正式开始。\r
就在林暖陪着林念站在主展台前准备切开第一块庆典蛋糕时，门口的风铃再次清脆地响起——\r
六十七岁的张奶奶、六十三岁的陈叔，还有已经从九岁长到十二岁、个子抽高了一大截的小满，结伴从洒满阳光的青石板街上走了进来。\r
\r
许知遥第一个笑着迎了上去。\r
许知遥：张奶奶、陈叔、小满！你们一起来啦，快请进，窗边最好的位置一直给你们留着呢！\r
小满今天穿了一条漂亮的新裙子，怀里紧紧抱着一只系着粉色丝带的画袋，一进门就欢快地跑到林念面前。\r
小满：林念姐姐，三周年快乐！你们快打开看看，这是我偷偷画了大半年的三周年秘密礼物！\r
林念解开丝带，取出一本厚达三十六页、手工装订的彩铅水彩画册——封面上歪歪扭扭却无比认真地写着：《小满眼里的林记三年》。\r
叶星河、周雨桐和苏晴好奇地凑过来一起翻看。\r
第一页，是九岁的小满趴在旧玻璃柜前数硬币买草莓蛋糕。\r
中间画着林暖阿姨在门口摆木绣球、小雨姐姐第一次端出水果蛋糕、知遥姐姐笑眯眯地打包、唐鸢姐姐认真看秒表、星河姐姐画礼盒、知秋姐姐冲咖啡、苏晴姐姐举着相机。\r
还有陈叔修架子、张奶奶在紫藤花下办读书会——三年来小店里的每一处变化，都被小女孩用画笔一页页留在了纸上。\r
周雨桐看得眼眶微红，摸了摸小满的脑袋。\r
周雨桐：小满……原来这三年我们大家工作时的样子，你全都记在画里了。\r
叶星河竖起大拇指赞叹道。\r
叶星河：我们的小满现在已经是真正的插画师了，这本画册比任何商业画报都珍贵！\r
小满骄傲地扬起小下巴。\r
小满：那当然啦！林念姐姐以前教过我，「第一次做不好，就再试一次」！这本画册我是画了整整三遍才挑出最好看的送给你们的！\r
\r
这时，一直安静站在旁边的陈叔走上前，从那只熟悉的帆布工具包里，取出了一块用红绒布包裹的长方木牌。\r
揭开红布，一阵温润内敛的楠木清香散开——那是一块由陈叔亲手打磨雕刻的金丝楠木纪念牌，正面苍劲有力地刻着「林记烘焙·三载匠心，岁岁常甜」，边角处还用精巧的微雕手法雕出了林记老店门头的轮廓。\r
陈叔将纪念木牌稳稳地立在三周年主展示台中央，看了林暖一眼，又看向林念。\r
陈叔：二十多年前，我帮阿暖修门口那块老招牌的时候，跟她说林记能再挂三十年。\r
陈叔顿了顿，向来严肃的脸上露出一抹温和而笃定的笑意。\r
陈叔：这三年看着你这小丫头带着这群姑娘把店一步步做大，还让我这把老骨头重新捡起了木工刨子。这块木牌是我这半个月在家雕的，送给你镇店。林记的招牌，以后能挂一辈子。\r
林暖看着那块雕工精湛的木牌，感慨地向老邻居道谢。\r
林暖：老陈，从我年轻那会儿到念念当家，咱们林记的木头家当，可全亏了你这双手帮衬了。\r
唐鸢也认真地向陈叔点了点头。\r
唐鸢：陈叔，您说的「手艺不能丢了人的温度」，我们后厨一直记着呢。\r
\r
最后，头发花白的张奶奶微笑着走上前，从随身布袋里拿出一封用棉宣纸信封郑重封好的手写信，放进林念手里。\r
张奶奶：念念，老陈送了木牌，小满送了画册，奶奶也没什么贵重东西，就代表咱们「梧桐树下读书会」的老伙计们，还有镇小的孩子们，给你写了这封感谢信。\r
张奶奶握住林念的手，目光慈祥地扫过店里的每一个人。\r
张奶奶：三年前你刚接手的时候，奶奶还怕你一个小姑娘守着老店会觉得寂寞。现在你看，你不仅把蛋糕做得越来越好，还让老陈重新拿起了工具，让小满画出了这么好的画，让我的读书会重新热闹了起来。\r
张奶奶轻声感叹道。\r
张奶奶：念念，不管你们林记将来把店开到多少座大城市去，在咱们老街坊心里，这里永远是栖云镇最温暖的那个家。\r
\r
林念双手捧着沉甸甸的画册、感谢信与木牌，看着眼前的张奶奶、陈叔和小满，鼻尖发酸，深深地向三位常客鞠了一躬。\r
林念：谢谢张奶奶，谢谢陈叔，谢谢小满！是你们每天推开这扇门，才让林记不只是一间卖蛋糕的铺子，而成了装满故事的地方！\r
\r
林暖站在女儿身旁，看着满屋子熟悉而温暖的面孔，眼眶微微湿润。\r
她伸手替林念理了理衣领，就像三年前第一天把店铺钥匙交给她时那样，温和而郑重地开口。\r
林暖：念念，三年前把钥匙交给你的时候，妈心里其实还在担心你能不能撑得住。但今天站在这儿，看着你身边的苏晴、小雨、知遥、唐鸢、星河、知秋，还有张老师、老陈和小满……妈已经完完全全不再担心你能不能把店经营好了。\r
林暖慈爱地拍了拍女儿的手背。\r
林暖：从今天起，妈正式从林记「退休」去过自己的新生活了。妈现在最期待的，是看着你和大家一起，去写林记烘焙的下一个故事。\r
\r
林念握紧母亲的手，又看向身边一路相伴的每一个人，眼底闪烁着晶莹而坚定的光芒。\r
林念：妈，您放心。这三年是我人生中最珍贵的时光——因为我不仅找到了自己真正热爱的事业，更重要的是，我们大家都在这里。\r
\r
一旁的苏晴早已在店堂正中央架好了三脚架，翻开了桌上那本只差最后一页空白的《林记与我们的三年》纪念相册。\r
苏晴拍了拍手，朗声笑道。\r
苏晴：来来来！林记烘焙三周年庆典全员大合照！谁都不许少——\r
苏晴指挥着大家站位。\r
苏晴：林阿姨、张奶奶、陈叔，你们三位长辈坐正中间！小满挨着张奶奶拿好画册！小雨、知遥、唐鸢、星河、知秋姐，大家围在后面一排！念念，把你的中心位留好，我设了十秒定时快门，这就过来！\r
伴着滴滴作响的倒计时声，苏晴小跑着回到林念身边，自然而亲密地挽住了林念的胳膊。\r
苏晴：三、二、一——大家看镜头，笑一个！\r
\r
**【CG：group】**\r
\r
咔嚓一声。\r
冲洗出来的这张三周年全员大合照，被林念与苏晴一起，稳稳地贴进了《林记与我们的三年》相册的最后一页。\r
\r
**【CG 结束】**\r
\r
之后的故事，取决于这三年你把林记带成了什么样子。\r
\r
林念站在洒满夕阳的店门口，看着门头上那块历经岁月却依旧温润的「林记烘焙」招牌，在心里轻声说道。\r
林念：三年前刚毕业的时候，我曾因为找不到方向而焦虑迷茫。直到回到这里，和大家一起走过这三十六个月，我才真正明白——\r
旁白：有些事业，最初只是一个临时的选择，后来却成为真正热爱的事情。\r
旁白：有些味道，经过很多年依然不会忘记。\r
旁白：有些朋友，走过很远的路，依然会陪在身边。\r
旁白：经营一家蛋糕店，最终留下的不只是营业额、配方和店铺等级，还有那些愿意一次又一次走进店里的人。\r
旁白：从林记的一块小小蛋糕开始，我们用三年的时间，把生活经营成了自己最喜欢的样子。\r
旁白：这就是《林记烘焙》。\r
旁白：【全剧终】\r
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
礼盒推出当天，张奶奶尝了第一口便红了眼眶。\r
张奶奶：就是这个味儿！跟三十年前林老太太做的一模一样，连花纹都没变！\r
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
张奶奶系着小围裙，和孙子一起笨拙地挤出一朵歪歪扭扭的奶油花。\r
张奶奶：哎哟，平时光看念念和林大姐挤花那么轻松，自己一上手怎么跟画毛毛虫似的！\r
许知遥笑得前仰后合，连忙递上几颗大草莓帮祖孙俩救场。\r
许知遥：张奶奶，咱们往顶上放一颗大草莓，这叫写意派艺术蛋糕！\r
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
林念：拉钩。下个三年，下下个三年，等我们变成张奶奶那样满头白发的老太太，还要一起在店门口晒太阳吃蛋糕。\r
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
清晨的风铃声响起，张奶奶牵着小孙子走进店里。\r
张奶奶：知遥丫头，念念，今天我们还是老样子！\r
许知遥笑吟吟地把早就留好的少糖原味奶油蛋糕递过去。\r
许知遥：早就给您留着第一炉最松软的啦，张奶奶快去窗边坐！\r
周雨桐端着一盘刚出炉的小曲奇从后厨走出来，放到张奶奶桌前。\r
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
挂牌仪式后，张奶奶摸着崭新的胡桃木牌匾，激动得连连点头。\r
张奶奶：好呀，真好！从林老太太到林大姐，再到咱们念念，三代人守着这一门手艺，实至名归！\r
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
二楼的品牌文化展厅里，专程被接来参加庆典的张奶奶正戴着老花镜，笑呵呵地看着展柜里外婆的老烤盘。\r
张奶奶：哎哟，我这辈子都没想过，咱们栖云镇街口那间只有两张旧木桌的林记，有一天能开出这么气派的大店，连北京上海的人都能吃上咱们林记的蛋糕！\r
林暖陪在张奶奶身边，转头看向一步步走向自己的女儿，眼眶微微湿润。\r
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
许知遥将系好丝带的蛋糕盒递给张奶奶，笑得眉眼弯弯。\r
许知遥：张奶奶您慢走，下周您家小孙子生日的定制单我已经帮您提前锁好烤炉时段啦，保准一分钟都不耽误！\r
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
栖云镇老店后院的桂花树下，五十多岁的林暖正悠闲地摇着蒲扇，和张奶奶等老姐妹一起品着新泡的雨前龙井，桌边放着她刚从老年大学插花班带回来的花篮。\r
操劳了大半辈子的她，终于彻彻底底松开了紧握三十年的账本与烤盘，把林记完完全全交到了女儿林念手中。\r
林念端着一碟刚出炉的少糖桂花栗子蛋糕走出后厨，轻轻放在母亲手边。\r
林念：妈，今天新店和老店的账目我都核对好啦，这是专门给您和张奶奶留的第一炉蛋糕。\r
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
*（设计说明：序幕中林暖提出带林念熟悉店铺，并在剧情对话内展示「跟妈妈走一圈 / 我想先自己熟悉」两个选项。选前者依次播放 T1—T6；选后者只播 T7 并把教程标记为已完成。查看教程时，T2 后练习柜台接待、T3 后练习制作、T4 后练习采购、T5 后练习手机；练习使用独立数据，不消耗正式存档中的原料、成品、资金、行动力或经营日。每一步完成后继续下一段剧情，刷新后可以接着练习。场景顶部的「地图」可切换已开放地点，「手机」在所有场景均可打开。教程不推进正式经营日期。）*\r
\r
### T1｜从前厅开始\r
**【事件ID：EVT_TUTORIAL_START｜触发条件：序幕结束后】**\r
**【场景：蛋糕店前厅】**\r
\r
林暖带林念来到洒满晨光的前厅门口，先指了指正中的柜台。\r
林暖：咱们就从这里开始。你每天要和柜台、展示柜打交道，先记住它们各自负责什么。\r
林念：好，我认真记下来。\r
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
林暖：接下来试试在柜台交付一笔预约单。客人会报订单号，先打开「手机订单」。\r
林暖：可以在手机里输入编号查询，也可以从列表里直接点同一个编号。记下单上写的蛋糕和份数，再回柜台。\r
林暖：从右边展示柜选对蛋糕，按「核对蛋糕并取货」，再按「开始打包」。动画播完，这笔练习单就交付了。\r
林暖：去柜台试试吧，这次只练手。\r
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
林暖：先照操作单的顺序取齐原料。搅拌时按住按钮，进度到了绿色区间就松手，小游戏会自动判定并进入下一步。\r
林暖：烘烤前先选炉温，松手时也会自动判定。出炉后进入转盘裱花，等指针经过亮起的位置就点一下，一共六次；偏了也没关系，可以等下一圈。\r
林暖：好，动手做一炉吧。\r
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
林暖：走，先去食材铺把明早要用的原料备齐。练习时可以直接输入数量；确认后只是熟悉采购界面，不会扣钱或改变仓库。\r
赵叔热情地迎上来，围裙上还沾着面粉。\r
赵叔：哟，林大姐带念念来进货啦？今天清晨刚从农场送来的红颜草莓和鲜牛奶，水灵着呢。以后念念来拿货，叔都给你留最新鲜的批次！\r
林念把填好的练习采购单折好，收进围裙口袋。\r
林念：谢谢赵叔，以后就要常来麻烦您啦！\r
\r
### T5｜口袋里的手机\r
**【事件ID：EVT_TUTORIAL_PHONE｜触发条件：教程 T4 之后】**\r
**【场景：栖云镇老街】**\r
\r
刚走出食材铺，林念口袋里的手机「叮咚」响了一声。\r
林暖指了指界面角落常驻的手机按钮。\r
林暖：念念，不管你在店里、后厨还是街上，随时都能打开手机打理店务，不用专门跑回柜台。快打开看看是谁发来的消息。\r
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
`,$f=`# 《林记烘焙》林暖·36个月「和妈妈聊聊」完整人物剧情文案（橙光对话体标准版）

## 一、核心设计与成长机制总览

* **人物定位**：林暖（50岁左右，林记烘焙前任店主、林念的母亲）。
* **核心弧光**：林暖不再是蛋糕店的日常实际经营者，不会事事替林念包办解决，而是拥有独立的情感与生活变化——
  1. **前期（M1—M12）**：刚交出钥匙，还会习惯性地惦记店铺、担心女儿累着或算错账，通过分享过去的经验和老顾客故事帮女儿站稳脚跟；
  2. **中期（M13—M24）**：看到女儿尝试新包装、咖啡联名、市集摆摊与团队管理，从最初的微怔到逐渐理解时代的变化，真正学会放手不插手；
  3. **后期（M25—M36）**：坦然聊起自己年轻时的遗憾与初心，以普通顾客和母亲的视角见证新店开业，同时开启自己学插花、和老姐妹出游的退休新生活，完成两代人最温暖的传承。
* **三大贯穿机制**：
  1. **家庭默契值（\`familyHarmony\`）**：初始为 \`20\`，每次完成月度「和妈妈聊聊」专属剧情提升 \`+3 ~ +5\` 点；关键节点（M6、M8、M12、M24、M30、M35、M36）达到对应默契值可解锁深度回忆与旧物传承。
  2. **妈妈的旧物收藏（共4件，收录于手机「收藏」系统）**：
     * \`店铺钥匙\`（M1解锁）
     * \`旧配方本\`（M6初次解锁、M31补全）
     * \`老店照片\`（M10解锁）
     * \`手写笔记\`（M35解锁）
  3. **母女专属CG（共6张，收录于手机「CG收藏」系统）**：分别在 **M1、M6、M8、M12、M24、M36** 触发。
* **精确插入节点原则**：全部安排在每月**无主线冲突且无沈知秋剧情冲突的经营日（主要为每月第1、3、5个经营日的午后或傍晚闭店后）**，玩家点击蛋糕店前厅的**【和妈妈聊聊】**即可触发当月唯一剧情。

---

## 二、第一阶段：交接与适应（第1—6个月｜第一年·初期）
**阶段主题：从妈妈的蛋糕店，到自己的蛋糕店**

---

### 第1个月｜交到你手上了
**【插入节点：M1 · 第1个经营日 · 傍晚打烊闭店后 18:00】**
**【事件ID：EVT_MOM_M01｜前置条件：完成第一天正式营业｜状态变更：\`familyHarmony + 5\`，解锁旧物收藏《店铺钥匙》，解锁 \`母女CG 01｜交到你手上了\`】**

第一天营业结束，夕阳的余晖透过前厅的玻璃窗落在木柜台上。
林念刚把收银匣锁好，林暖便从后厨走了出来，手里拿着那串陪伴了她三十多年的黄铜店铺钥匙。
钥匙圈已经被岁月磨得温润发亮，上面还挂着一枚小小的木雕蛋糕挂件。

林暖拉起林念的手，将那串沉甸甸的铜钥匙轻轻放进女儿掌心里。
**【触发母女CG 01｜交到你手上了：暮色温柔的蛋糕店前厅里，林暖温和地将磨得发亮的黄铜店铺钥匙放进林念手中，两代人的手叠在一起】**

林念低头看着手心里的钥匙，心里既感动又有一点点发怵。
林念：妈，今天站了一整天柜台，我才发现以前看您管店好像轻轻松松的，轮到自己拿主意的时候，连明早备多少面粉都要犹豫半天……我真怕自己做得不如您。
林暖看着女儿紧张的模样，扑哧一声笑了出来，伸手替她理了理耳边的碎发。
林暖：傻丫头，你以为妈二十二岁刚从你外婆手里接过这串钥匙的时候，有多从容呀？
林念好奇地抬起头。
林念：您那时候也会紧张吗？
林暖靠在柜台边，眼里满是怀念的笑意。
林暖：何止是紧张。我接手的第一周，因为怕面糊消泡，半夜两点还爬起来去后厨看烤箱；有一次把糖和盐的罐子看岔了，烤出一整炉咸戚风，自己躲在后厨哭了一鼻子呢。
林念忍不住笑出了声。
林念：真的呀？我还以为林老师从小到大都是不会出错的烘焙大师呢！
林暖温和地拍了拍她的手背。
林暖：谁都是从生手一步步走过来的。念念，妈把钥匙交到你手上，不是要你事事都模仿妈的做法。这是你的二十二岁，也是属于你的蛋糕店，不用急着做得和我一样，慢慢找到你自己的节奏就好。
林念握紧掌心里温热的铜钥匙，重重地点了点头。
林念：嗯！那我就按自己的步调，一步一步来！

旁白：【系统提示：获得手机收藏旧物《店铺钥匙》！家庭默契值提升。】

---

### 第2个月｜第一本经营账本
**【插入节点：M2 · 第3个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M02｜状态变更：\`familyHarmony + 3\`】**

晚上打烊后，前厅的吊灯还亮着。
林念正趴在木桌前，对着一本崭新的硬壳账本一笔一划地核算这几天的收支。
林暖拎着一袋刚买的水果走进店里，看到女儿咬着笔头算账的样子，眼神一下子柔和下来。

林暖走到桌边看了一眼密密麻麻的数字。
林暖：念念，算得这么认真呀？我年轻那会儿刚管店的时候，也是像你这样，连买一卷包装绳的几毛钱都要记在账本边角上。
林念抬起头，指着账本上的总数，有些得意又有些困惑。
林念：妈，您快帮我看一眼！这几天我们的蛋糕卖得特别好，柜台营业收入加起来比上周多了好几百块呢！可是奇怪了，为什么我核对钱匣和食材卡的时候，总觉得手里剩下来的钱没多多少呀？
林暖拉过椅子在女儿身边坐下，拿起铅笔在账本上轻轻圈出了几个条目。
林暖：因为你光盯着「营业收入」看，还没学会算真正的「实际利润」呀。
林念凑过去认真地看。
林暖指着进货单耐心地解释。
林暖：你看，这周草莓蛋糕卖得多，但红颜草莓刚上市进价高，而且挑拣损耗掉的果子、每天多开两小时烤箱的电费、还有打烊没卖完打折处理的边角料，全都是隐形成本。柜台收进来的钱叫流水，扣掉原料、损耗和水电之后稳稳落进袋子里的，才叫利润。
林念恍然大悟地拍了一下脑门。
林念：原来是这样！我光看着卖出去的份数高兴，把草莓损耗和烘烤成本漏算了！
林暖笑着把剥好的橘子塞进她手里。
林暖：现在搞明白就不算晚。会做蛋糕是手艺，算得清利润才叫当家。慢慢记，你这本账已经比妈当年第一本清楚多啦。

---

### 第3个月｜老顾客的口味
**【插入节点：M3 · 第4个经营日 · 午后空闲时段 15:00】**
**【事件ID：EVT_MOM_M03｜状态变更：\`familyHarmony + 3\`】**

午后，店里刚送走一位住在镇西头的周爷爷。
老人家买走了一块最普通的原味奶油蛋糕，临走前还念叨了一句：「还是老林记的奶油顺口，吃着心里舒坦。」
正好来店里送干桂花的林暖听见了，站在门口笑着目送老人走远。

林念擦着柜台，好奇地问母亲。
林念：妈，这位周爷爷每次来都只买一块原味小方，而且每次都要专门叮嘱一句「边角上多抹一点点奶油」，您跟他很熟吗？
林暖转过身，眼底带着温暖的追忆。
林暖：周爷爷可是咱们店二十多年的老熟客了。早些年周奶奶还在世的时候，老两口每个月发退休金那天，都会手挽手来咱们店里买一块原味蛋糕分着吃。那时候周奶奶最爱吃蛋糕边角上多出来的那一抹奶油花。
林念愣住了，手里的抹布轻轻停了下来。
林暖轻声继续说道。
林暖：后来周奶奶走了，周爷爷还是每个月准时来买同一块蛋糕。每次他来，我都会在切块边角上多给他挤一朵小小的奶油花，老人家看到了，就知道咱们还记着他们老两口的事。
林念看着门外安静的青石板街，心头涌起一股酸涩而温暖的触动。
林念：原来一块小小的奶油蛋糕里，藏着这么长久的故事。
林暖温和地看着女儿。
林暖：念念，咱们开在栖云镇这样的社区小店，跟大商场里那些流水线店铺不一样。对我们来说，最重要的本事不是做出多么昂贵的点心，而是记住每一位走进门来的老顾客，记住他们生活里的甜和念想。
林念郑重地点了点头，在熟客笔记上认真记下了周爷爷的习惯。

---

### 第4个月｜第一次新品
**【插入节点：M4 · 第1个经营日 · 下午备休时段 16:00】**
**【事件ID：EVT_MOM_M04｜状态变更：\`familyHarmony + 4\`】**

在后厨实验台反复摸索之后，林念终于做出了自己接手林记以来的第一批新口味样品。
这天下午，林暖刚走进店里，林念便有些紧张地端着两只小瓷盘迎了上去。

林念：妈！您来得正好，这是我刚刚调好配比的新品样品，您快帮我尝尝看，挑挑毛病！
林暖洗净双手，坐在木桌旁，拿起小叉子细致地尝了一口芋泥薄脆与春日抹茶切块。
林念双手交握在胸前，目不转睛地盯着母亲的表情。
林念：怎么样妈？会不会觉得跟我外婆和您的传统做法差别太大、太花哨了？

林暖没有立刻说话，而是又细细品尝了一口夹心中的焦糖杏仁薄脆，随后放下小叉子，脸上露出了赞许的笑意。
林暖：慕斯与戚风的湿度结合得很好，特别是中间这层刷了白巧防潮的薄脆，一口咬下去既有传统芋泥的绵厚，又有年轻人喜欢的酥脆感。念念，这真是你自己琢磨出来的？
林念松了一大口气，开心地笑了起来。
林念：是呀！我原本还担心您会觉得我乱改老方子呢！
林暖温和地摇了摇头。
林暖：妈可没那么老古董。当年你外婆只会做老式鸡蛋糕和桃酥，是我二十多岁的时候硬着头皮引进了鲜奶油和水果夹心，才有了现在的林记。
林暖鼓励地拍了拍女儿的肩膀。
林暖：每一代人都有每一代人的口味。只要用料实诚、味道经得起挑剔，就不要害怕尝试和过去不一样的东西。大胆去做吧，妈是你的第一个捧场客！

---

### 第5个月｜店门口的花
**【插入节点：M5 · 第4个经营日 · 上午营业前 09:30】**
**【事件ID：EVT_MOM_M05｜状态变更：\`familyHarmony + 3\`】**

五月清晨的阳光明媚温暖，林念刚打开店门准备营业，就看见母亲林暖双手捧着一盆开得正盛的粉白木绣球花，沿着青石板街笑吟吟地走了过来。

林念连忙迎上去接过花盆。
林念：妈，您怎么一大早抱了这么大一盆木绣球过来呀？
林暖擦了擦额角的薄汗，指了指店门口台阶右侧的空位。
林暖：放在门口迎客呀。昨天我去花市转悠，一眼就瞧见这盆绣球开得喜人，摆在咱们木门框旁边准好看。
母女俩合力把花盆摆在门口的阳光下，微风吹过，团团簇簇的花球轻轻摇晃，整间小店瞬间多了几分盎然的春意。

林暖站在台阶下端详着店门，眼神里透出淡淡的怀念。
林暖：念念，你还记不记得咱们店门口以前是什么样子的？
林念歪着头想了想。
林念：好像我上小学之前，门口连这块木头招牌都没有吧？
林暖笑着点了点头。
林暖：对，那时候家里手头紧，请不起设计招牌的木匠。我就去镇外采了一大捧野蔷薇和雏菊，种在门口的旧陶罐里。街坊们老远看到花开了，就知道林记开门烤蛋糕了。后来日子一点点好起来，我才添了遮阳棚、换了玻璃窗、挂起了木牌。
林念看着门口盛开的木绣球，心里暖洋洋的。
林念：原来我们林记的一砖一瓦、一花一草，都是妈这样一点点攒出来的。以后这盆花我每天早上亲自浇水，绝不让它蔫了！

---

### 第6个月｜妈妈的拿手菜谱
**【插入节点：M6 · 第2个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M06｜前置条件：\`familyHarmony ≥ 30\`｜状态变更：\`familyHarmony + 5\`，解锁旧物收藏《旧配方本（上）》，解锁 \`母女CG 02｜旧配方本的温度\`】**

接手林记满半年的这个傍晚，林暖来到店里时，随身带了一只用蓝印花布仔细包裹着的小包袱。
她把林念叫到前厅的木桌旁坐下，一层层打开花布，露出了里面一本封皮泛黄、边角有些卷起的线装笔记本。

**【触发母女CG 02｜旧配方本的温度：暖黄灯光下，林暖与林念并肩坐在木桌前，一起翻开泛黄的旧配方本，纸页上写满了跨越数十年的工整字迹与手绘批注】**

林念轻轻抚摸着厚实的纸页，只见上面不仅有外婆早年的毛笔字迹，更多的是母亲林暖三十多年来用钢笔写下的修改记录：「某年冬，鲜奶油打发时间减十秒」「某年春，草莓夹心糖量降一成，更合街坊口味」。

林暖指着其中最完整的一页经典奶油配方，轻声开口。
林暖：念念，这半年妈在旁边看着你，从一开始的手忙脚乱，到现在连定制大单都能处理得井井有条，妈知道你已经真正入行了。
林念抬起头看着母亲。
林念：妈，这本是您攒了三十年的拿手菜谱吧？
林暖温和地笑了笑，将那本旧配方本推到林念面前。
林暖：这里面记着妈这三十年来改过的所有经典方子。今天，妈先把前半本最核心的经典系列完整交给你。至于后半本那些还没完全改好的老方子，等你的手艺再精进些，我们母女俩再一起琢磨。
林念双手捧起那本带着母亲掌心温度的旧配方本，眼眶微热。
林念：谢谢妈！我一定会把上面的每一道方子都练到最好！

旁白：【系统提示：解锁手机收藏旧物《旧配方本》！获得林暖经典配方精通加成。】

---

## 三、第二阶段：熟悉的味道（第7—12个月｜第一年·中期）
**阶段主题：理解一家老店背后的故事**

---

### 第7个月｜忙碌的夏天
**【插入节点：M7 · 第2个经营日 · 下午 14:30】**
**【事件ID：EVT_MOM_M07｜状态变更：\`familyHarmony + 3\`】**

进入盛夏（及节庆订单高峰期），店里的线上与到店订单源源不断。
下午两点半，正是一天中最闷热的时候，林念刚在后厨烤完三炉蛋糕胚，顾不上擦汗又跑到前厅核对下一批订单，嘴唇都有些发白。
林暖提着一只竹篮走进店里，一眼就看出了女儿的疲惫。

林暖没有先问生意，而是直接从竹篮里端出一碗冰镇绿豆百合汤，拉着林念按在木椅上坐下。
林暖：先把这碗绿豆汤喝完，手里的单子放下歇十分钟。
林念端着冰凉清甜的绿豆汤喝了两口，还惦记着后厨。
林念：妈，后厨还有两份下午四点要取的订单没抹面呢，我想把每一笔订单的装饰都做到满分……
林暖拿过毛巾替她擦了擦额头上的汗，语气里带着几分心疼与严肃。
林暖：念念，想把每件事都做好是好事，但开店是一场跑几十年的马拉松，不是百米冲刺。你要是为了眼前的几张单子把自己累病了，明天谁来给客人们烤蛋糕？
林念看着母亲关切的眼神，紧绷的神经渐渐松弛下来。
林念：我知道错了妈……我这一忙起来就容易钻牛角尖，忘了休息。
林暖温和地摸了摸她的头。
林暖：把绿豆汤喝完，靠在椅背上闭眼歇会儿。下午那两份抹面，妈去后厨替你搭把手。

---

### 第8个月｜熟悉的味道
**【插入节点：M8 · 第4个经营日 · 傍晚闭店后 18:00】**
**【事件ID：EVT_MOM_M08｜前置条件：\`familyHarmony ≥ 40\`｜状态变更：\`familyHarmony + 5\`，解锁 \`母女CG 03｜复原桂花栗子香\`】**

院子里的早桂悄然吐蕊，傍晚的微风里已经带上了一丝初秋的甜香。
打烊后，林暖把林念叫到后厨操作台前，翻开了旧配方本里夹着干桂花书签的那一页。

林暖：念念，闻见外头的桂花香了吗？趁着今天晚上清静，妈带你一起试着复原一次咱们林记当年的招牌——桂花栗子蛋糕，怎么样？
林念眼睛一下子亮了起来，立刻系好围裙站到母亲身边。
林念：好呀！我一直想学这款蛋糕的传统做法呢！

**【触发母女CG 03｜复原桂花栗子香：灯火温暖的后厨操作台前，林暖手把手教林念慢火翻炒金黄的栗子泥，空气中飘散着桂花与板栗的甜香】**

母女俩并肩站在灶台前，林暖握着木铲慢火翻炒着过筛后的栗子泥，林念则在旁边小心地一勺勺加入桂花糖浆。
林暖看着锅里渐渐变得绵密油亮的栗蓉，脸上露出了怀念的微笑。
林暖：这款蛋糕第一次在咱们店里推出的时候，你才刚满五岁。那天也是这样一个傍晚，我和你外婆在后厨炒栗子泥，香味顺着窗户飘出去半条街，结果第二天早上还没开门，街坊们就排到巷口了。
林念闻着扑鼻的桂花栗子香，尝了一小口温热的馅料，甜香醇厚得让人心头一颤。
林念：真好吃……妈，这就是我小时候记忆里秋天的味道。等以后时机成熟了，我一定要让更多人重新吃到这款桂花栗子蛋糕！

---

### 第9个月｜秋天的栗子
**【插入节点：M9 · 第2个经营日 · 上午采购时段 10:00】**
**【事件ID：EVT_MOM_M09｜状态变更：\`familyHarmony + 3\`】**

这天上午，林暖陪着林念一起去街道的食材铺挑选秋季新上市的板栗与鲜果。
摊位上摆着两筐栗子：左边一筐个头极大、外壳光亮，标价昂贵；右边一筐个头中等、外壳带着自然的褐绒毛，价格实惠不少。

林念正准备挑左边那筐最贵的大栗子，林暖却轻轻拉了拉她的衣袖，拿起右边那筐小一些的高山油栗剥开一颗。
林暖：念念，买食材可不能光看个头和标价。你看左边那种大板栗，水分多、淀粉少，炖菜好吃，但打成蛋糕夹心栗子泥就会发水不香；右边这种本地高山油栗虽然个头小，但肉质粉糯、油性足，炒出来的栗蓉才真正醇厚。
林念接过母亲剥开的油栗闻了闻，果然有一股浓郁的坚果甜香。
林念：我还以为做高端蛋糕一定要选最贵的进口大原料才行呢！
林暖笑着将油栗装进采购篮里。
林暖：好食材不一定是最贵的，但一定要最适合你自己的产品。摸清每一种食材的脾气，比盲目花高价重要得多。

---

### 第10个月｜那张老照片
**【插入节点：M10 · 第4个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M10｜状态变更：\`familyHarmony + 4\`，解锁旧物收藏《老店照片》】**

M10刚开通线上销售不久，店里添置了新的打包台。
这天傍晚收拾前厅旧抽屉时，林暖从最底层翻出了一只泛黄的相框，擦干净灰尘递给林念。
相框里是一张黑白带点偏黄的胶片老照片——照片上的林记烘焙门脸只有现在的一半大，木柜台简陋质朴，年轻时的林暖梳着两条麻花辫站在柜台后，笑得眉眼弯弯。

林念凑过去惊喜地端详着照片。
林念：哇，妈！您二十多岁的时候跟我长得好像呀！那时候店里的展示柜居然这么小，只摆得下两盘蛋糕。
林暖看着照片里年轻的自己，感慨地笑了笑。
林暖：是啊，那时候店里连空调都没有，夏天全靠头顶一把吊扇转悠，柜台也是请街坊木匠拿杉木板拼的。
林念轻声问。
林念：那时候条件这么简陋，您心里会不会觉得苦呀？
林暖摇了摇头，眼神格外明亮。
林暖：一点都不觉得苦。那时候每天天一亮推开店门，看着阳光照在那口小柜台上，心里就对未来充满了盼头，觉得只要肯下力气，日子一定会越过越甜。念念，这张老照片送给你收着，不管以后林记变成什么样，别忘了咱们是从这张小柜台出发的。

旁白：【系统提示：获得手机收藏旧物《老店照片》！】

---

### 第11个月｜雨天的客人
**【插入节点：M11 · 第1个经营日 · 雨天傍晚 17:30】**
**【事件ID：EVT_MOM_M11｜状态变更：\`familyHarmony + 3\`】**

深秋的傍晚下起了瓢泼大雨，街上几乎没有行人。
就在林念以为今天不会再有客人的时候，一位穿着雨衣的中年大叔顶着风雨推门进来，取走了提前预订的一只六寸草莓蛋糕——原来今天是他女儿住校回家的日子。
送走客人后，正好在店里避雨的林暖端来两杯热茶，和林念一起站在窗前看着雨幕。

林暖：看到刚才那位客人，妈突然想起十多年前的一个台风天。
林念好奇地转过头。
林念：台风天也有人来买蛋糕吗？
林暖温和地点了点头。
林暖：那天外头风雨大得连树枝都刮断了，我本来都准备关门了，结果镇东头的小张浑身湿透地跑来敲门，说那天是他妻子生完宝宝出院的第一天，想买一块热乎的鸡蛋糕给她补补。我当时二话不说，重新开炉给他现烤了一锅，还借了他一把大黑伞。
林暖看着门外温暖的招牌灯光，轻声说道。
林暖：从那以后，他们家孩子从一岁到十几岁的生日蛋糕，全是在咱们林记订的。念念，一家小店开久了你就会发现，我们卖的不只是一块点心，而是人与人之间互相惦记的那份人情味。

---

### 第12个月｜第一个年末
**【插入节点：M12 · 第4个经营日 · 夜晚闭店后 20:00】**
**【事件ID：EVT_MOM_M12｜前置条件：\`familyHarmony ≥ 50\`｜状态变更：\`familyHarmony + 5\`，解锁 \`母女CG 04｜第一个年末的账本\`】**

不知不觉，林念接手林记烘焙已经满整整一年了。
年末盘点的这个夜晚，前厅的门已经锁好，林暖和林念并肩坐在温暖的吊灯下，一起整理这一整年的厚厚账本与订单记录。

**【触发母女CG 04｜第一个年末的账本：冬夜温暖的灯光下，桌上摊开着第一年的满页账本与新品卡片，林暖看着身旁认真汇总数据的林念，眼中满是欣慰与认可】**

林念合上最后一页十二月的结算表，长长地舒了一口气，转头看向母亲。
林念：妈，这一年的总账全部盘完啦！不仅老街坊的订单一单没丢，加上小雨来了之后我们研发的几款新品和线上订单，今年的净收益比去年整整涨了四成呢！
林暖翻看着账本上工整清晰的分类统计、损耗控制与熟客备注，良久，她轻轻合上账本，郑重地看向女儿。
林暖：念念，跟你说句心里话。一年前把钥匙交给你的时候，妈心里其实偷偷做好了准备——想着要是你撑不下去了，或者算不明白账，妈随时再把围裙系回来替你兜底。
林念怔了一下，鼻子微微发酸。
林念：妈……
林暖握住女儿的手，笑容温和而骄傲。
林暖：但今天看完这本年度账本，妈知道是我小看我的女儿了。你没有照搬我的老路子，你搞线上预订、带学徒、做新品，已经完完全全摸索出了属于你林念自己的经营方式。这第一年，你做得比妈当年还要好。
林念眼眶微红，靠在母亲温暖的肩膀上笑了起来。
林念：那是因为我背后一直有林老师给我撑腰呀！

---

## 四、第三阶段：新的尝试（第13—18个月｜第二年·初期）
**阶段主题：不必复制过去，可以创造新的东西**

---

### 第13个月｜新一年的计划
**【插入节点：M13 · 第1个经营日 · 上午 10:00】**
**【事件ID：EVT_MOM_M13｜状态变更：\`familyHarmony + 3\`】**

第二年开春的第一天，林暖来店里给门口的木绣球剪枝，顺便问起女儿新一年的打算。
林暖：念念，第一年稳稳当当地走过来了，这第二年，你心里有什么新计划吗？
林念拿出一本写得井井有条的《第二年经营规划手册》递给母亲。
林念：妈，您看！今年我想先把店里的配方做一次系统的标准化整理，然后再招一位专门负责前厅和订单运营的伙伴，等到了春天，我还想试试跟街上的咖啡馆和市集做联名合作！
林暖翻看着手册上清晰的时间轴与目标，眼中闪过一丝惊讶。
林暖：我原本以为你今年只是想再多研究两款新蛋糕。没想到，你已经不再只是想着怎么把眼前的铺子维持好，而是开始为林记的未来铺路了。
林念有些不好意思地笑了笑。
林念：因为我想看看，在守住咱们老味道的基础上，林记还能走多远。
林暖欣慰地合上手册递还给她。
林暖：好，既然想清楚了方向，今年就放开手脚去试吧！

---

### 第14个月｜不一样的包装
**【插入节点：M14 · 第3个经营日 · 下午 15:00】**
**【事件ID：EVT_MOM_M14｜状态变更：\`familyHarmony + 3\`】**

这天下午，林念正在前厅和刚入职不久的许知遥一起整理新定制的暖奶油色系手提蛋糕盒与丝带。
林暖路过店里看到这一摞新盒子，拿起一个看了看，起初有些不解地皱了皱眉。

林暖：念念，咱们以前用的那种白卡纸盒结实又便宜，这新换的带透明天窗和定制丝带的盒子，一个成本要贵出一块多钱呢，真有必要花这个冤枉钱吗？
话音刚落，两位来取生日蛋糕的年轻女孩走进店里。一看到新换的暖奶油色天窗礼盒，两个女孩顿时惊喜地欢呼起来。
年轻顾客：哇！林记现在的包装盒也太好看了吧！不用拆盒子就能看到里面漂亮的草莓裱花，拎出去送朋友太有面子了！我先拍张照发小红书！
看着客人们欢天喜地拍照离开的背影，林暖愣了愣，随即失笑地摇了摇头。
林暖：看来真是妈落伍了。以前大家买蛋糕只图个肚子饱、味道好；现在的年轻人买蛋糕，买的还有拆礼物时的那份开心。
林念笑着挽住母亲的胳膊。
林念：好马也要配好鞍嘛！咱们的蛋糕这么好吃，配上好看的衣裳，才能让更多年轻人一眼爱上呀。

---

### 第15个月｜一份特别的订单
**【插入节点：M15 · 第1个经营日 · 傍晚闭店后 18:00】**
**【事件ID：EVT_MOM_M15｜状态变更：\`familyHarmony + 3\`】**

这天傍晚，林念对着一张刚接下的特殊定制订单发愁——客人要求做一款「吃起来像小时候外婆家院子」的纪念日蛋糕，却没有给出具体的口味要求。
正好来店里看望女儿的林暖见状，泡了一杯热菊花茶放到林念手边。

林暖：怎么啦？遇到难伺候的定制单了？
林念苦着脸把订单要求给母亲看。
林念：妈，这位客人只说想要「小时候外婆家院子的感觉」，我正发愁到底该做成多复杂的翻糖微缩景观呢。
林暖看了一眼订单备注，温和地笑了笑。
林暖：念念，妈以前也接过一单类似的。那时候有位从外地回来的先生，说想订一款「十八岁离家那天的味道」。我当时也没有去做复杂的造型，而是先跟他聊了十分钟家常，问出他离家那天正是槐花盛开的五月，母亲给他装了一袋槐花蜜拌桂花糕。
林念眼睛一亮。
林暖轻轻点拨道。
林暖：遇到这种带故事的特殊订单，别急着在造型上炫技。先去跟客人聊聊天，弄清楚他心里真正怀念的是哪种气味、哪种季节的记忆，再去决定怎么做，准错不了。

---

### 第16个月｜咖啡与蛋糕
**【插入节点：M16 · 第4个经营日 · 下午 15:30】**
**【事件ID：EVT_MOM_M16｜状态变更：\`familyHarmony + 3\`】**

午后，林念在后厨实验台调试搭配咖啡的减糖版抹茶与巧克力切块，林暖好奇地走进后厨看她忙活。
林念：妈，我最近和街道转角「秋屿咖啡」的沈知秋店长在聊合作，准备把我们的蛋糕和她的手冲咖啡做成联名下午茶呢！
林暖饶有兴致地拿起一块减糖版黑巧切块端详。
林暖：咖啡配蛋糕？以前咱们街坊吃蛋糕都是配热茶或者豆浆，跟苦滋滋的咖啡搭在一起，大家能习惯吗？
林念笑着给母亲解释了咖啡油脂与动物奶油互补的原理。
林暖听完，若有所思地点了点头。
林暖：说起来，妈年轻那会儿，镇上茶馆的老板也找我商量过，看能不能做一批配碧螺春吃的低糖绿豆糕和茶味鸡蛋糕。那时候妈胆子小，怕两头顾不过来就没敢试。现在你能跟秋屿咖啡的沈姑娘一起把甜品和饮品结合起来，倒是把妈当年没走成的路给走通了！

---

### 第17个月｜第一次联名
**【插入节点：M17 · 第2个经营日 · 下午 14:30】**
**【事件ID：EVT_MOM_M17｜状态变更：\`familyHarmony + 4\`】**

当林记烘焙与秋屿咖啡的联名下午茶正式步入正轨后，林暖特意在一个阳光和煦的下午，悄悄去体验了一份「草莓鲜奶蛋糕＋花香拿铁」联名套餐。
回到林记前厅后，林暖笑眯眯地把体验感受告诉了林念。

林念紧张地问。
林念：妈，您去喝过啦？感觉怎么样，咖啡会不会太苦？
林暖摇了摇头，认真地评价道。
林暖：那个叫沈知秋的姑娘手艺确实讲究，拿铁温润顺口，跟咱们的草莓蛋糕配在一起很舒服。不过妈以老顾客的嘴给你提个小建议——下午茶套餐的蛋糕切块份量可以比单卖的稍微精致一小圈，夹心的奶油打发再轻盈半分，这样客人喝完一整杯拿铁再吃完蛋糕，肚子刚好八分饱，不会觉得顶得慌。
林念立刻记在笔记本上，钦佩地向母亲竖起大拇指。
林念：姜还是老的辣！林老师这一口下去，直接把我们下个月的改良方向都指出来啦！

---

### 第18个月｜摊位上的回忆
**【插入节点：M18 · 第3个经营日 · 傍晚闭店后 18:00】**
**【事件ID：EVT_MOM_M18｜状态变更：\`familyHarmony + 3\`】**

随着林记参加市集与外场活动的次数增多，这天傍晚，林暖帮着林念一起收拾从活动现场拉回来的折叠展架与保温箱。
摸着展架上熟悉的帆布棚顶，林暖眼神温和地笑了起来。

林暖：看着你们现在推着保温箱去市集摆摊，妈就想起二十多年前镇上赶庙会的时候。那时候还没有这么好的冷链冰盒，我为了不让奶油化掉，大清早用棉被裹着冰块桶，踩着三轮车去庙会口出摊。
林念一边擦拭展架，一边听得入神。
林念：踩三轮车去摆摊？那得多累呀！
林暖看着眼前干练利落的女儿，眼底满是欣慰。
林暖：那时候是累，但看着一车蛋糕被抢光的时候，心里的欢喜跟你现在是一模一样的。念念，看着你现在带着小雨、知遥和刚来的唐鸢一起忙活，妈突然觉得，你正在经历的很多事情，既像当年的我，又比当年的我走得宽广多了。

---

## 五、第四阶段：从一个人到一群人（第19—24个月｜第二年·后期）
**阶段主题：学会合作，也学会放手**

---

### 第19个月｜有人帮忙的日子
**【插入节点：M19 · 第3个经营日 · 下午 15:00】**
**【事件ID：EVT_MOM_M19｜状态变更：\`familyHarmony + 3\`】**

随着店里准备拓展分店与新业务，员工人数增多，林念开始学习如何用后厨的【员工排班板】统筹全员工作。
这天下午，林暖来店里送自己晒的陈皮，看到林念正对着排班板反复斟酌每个人的班次。

林暖：怎么啦？人手多了，排起班来反而觉得比以前自己干的时候更费神了？
林念揉了揉眉心，苦笑着点头。
林念：是呀妈。以前只有我和您两个人的时候，什么活儿我抓起来就干了；现在店里有小雨、知遥、唐鸢姐，我总怕排得不够妥当，有时候看她们忙，我还是忍不住想自己冲上去全干了。
林暖拉过椅子坐下，温和地笑了笑。
林暖：妈年轻时第一次请帮工阿姨的时候，也犯过这个毛病。明明请了人来洗模具、打鸡蛋，我却总在旁边盯着，嫌人家打蛋的手法跟我不一样，最后把人家弄得束手束脚，我自己也累得半死。
林念不好意思地吐了吐舌头。
林念：我现在好像就是这样……
林暖拍了拍女儿的肩膀。
林暖：既然决定从一个人变成一群人，当掌柜的就得明白一个道理——你只有两只手，不可能永远什么事情都亲自完成。学会把位置留给伙伴，你才能腾出手来看更远的路。

---

### 第20个月｜把工作交给别人
**【插入节点：M20 · 第3个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M20｜状态变更：\`familyHarmony + 3\`】**

新业务刚落地的第一个月，林念傍晚回到老店后厨检查时，发现唐鸢和小雨整理备料区的方式跟自己平时的习惯不太一样，心里难免有些不踏实。
正好过来探望的林暖看出了女儿的纠结。

林念小声跟母亲念叨。
林念：妈，您看，我平时习惯把时令鲜果按颜色排在保鲜柜上层，可唐鸢姐今天把它们全改成按出餐先后顺序分盒贴标了；知遥记熟客账单的格式也跟我的不太一样……我要不要让她们全都改回我的方式呀？
林暖走到保鲜柜前看了一眼，反问道。
林暖：那你今天看她们按这个方法出餐，速度变快了吗？有没有出错？
林念诚实地摇了摇头。
林念：没有出错，而且唐鸢姐这套分盒法，今天高峰期找原料反而比我以前快了不少。
林暖笑着点了点她的额头。
林暖：那不就结了？念念，管理一家店，不是把每个员工都改造成另一个林念，更不是要求所有人都照着你一个人的习惯转。只要守住品质底线，让专业的人用最适合团队的办法去发挥所长，这才是真正的本事。
林念豁然开朗，笑着把保鲜柜的门轻轻合上。
林念：我明白啦！只要结果好，我就彻底放手让她们去发挥！

---

### 第21个月｜丰收的秋天
**【插入节点：M21 · 第5个经营日 · 下午市集时段 14:30】**
**【事件ID：EVT_MOM_M21｜状态变更：\`familyHarmony + 4\`】**

金秋时节，林记烘焙参加小镇举办的「秋季丰收市集」。
这一次，林暖没有再像第一年那样提前帮女儿烤胚备料，而是换了一身清爽的秋装，完全以一位普通参观者的身份来到了市集现场。

站在热闹的人群外围，林暖安静地看着林记的摊位——
林念正有条不紊地协调着全局，小雨在补货，知遥在热情地引导排队，叶星河设计的丰收季包装引来阵阵夸赞。从头到尾，林念没有露出一丝慌乱。
直到客流稍缓，林念才发现了站在不远处的母亲，惊喜地端着一碟现烤的焦糖苹果甜品跑了过来。

林念：妈！您怎么来啦？也不提前跟我说一声，快来摊位里头坐！
林暖接过小碟子，看着满头薄汗却神采飞扬的女儿，眼里满是笑意。
林暖：我要是提前说，你又要分心照顾我了。刚才我在边上看了好一会儿，看着你在摊位前独当一面的样子，妈恍惚间还以为看到了三十年前的自己——不，你现在带着这么好的一群伙伴，比妈当年在市集手忙脚乱的时候强太多了。
林念挽住母亲的手臂，开心地晃了晃。
林念：那今天林老师就只管安心逛市集、吃甜点，剩下的全交给我们！

---

### 第22个月｜一份礼物
**【插入节点：M22 · 第4个经营日 · 傍晚闭店后 18:00】**
**【事件ID：EVT_MOM_M22｜状态变更：\`familyHarmony + 4\`】**

这天傍晚，林念在叶星河的设计工作室忙活了大半天，捧着一只从未在店里售卖过的特殊蛋糕礼盒回到了店里，递到林暖面前。

林念：妈，送给您的！快打开看看！
林暖惊讶地解开丝带——只见淡雅的米白色礼盒封面上，印着一幅根据M10那张老店照片手绘的水彩插画：年轻时梳着麻花辫的林暖站在小木柜台后微笑，门边盛开着一丛粉白的木绣球，盒盖内侧印着一行小字：「致林记永远的引路人——林暖女士」。
盒子里装着一只按林暖最爱的甜度烤制的桂花红枣戚风蛋糕。

林暖捧着那只礼盒，指尖轻轻摩挲着盒面上的水彩画，眼眶一下子红了。
林暖：你这丫头……今天既不是妈的生日，又不是过节，怎么突然弄这么隆重的礼物？
林念握住母亲略带薄茧的手，轻声而认真地开口。
林念：以前我读书的时候总觉得您管这管那很唠叨；直到自己接手了林记，亲手揉了快两年的面团，我才知道您一个人把这家店撑了三十年、把我养大，到底付出了多少辛苦。妈，以前我从来没好好跟您说过——谢谢您。
林暖擦了擦眼角，笑着拍了拍女儿的手背，声音微颤却无比温暖。
林暖：傻孩子，只要看你现在过得开心、有奔头，妈这三十年就全都值了。

---

### 第23个月｜忙碌之外
**【插入节点：M23 · 第5个经营日 · 晚间 19:00】**
**【事件ID：EVT_MOM_M23｜状态变更：\`familyHarmony + 3\`】**

第二年临近尾声，多渠道订单与年终活动筹备交织在一起，林念忙得连着好几天都是匆匆啃两个面包对付晚饭。
这天晚上七点，林暖直接来到店里，不容分说地合上了林念面前的订单文件夹。

林暖：走，跟妈回家吃饭。今天家里炖了你最爱吃的山药排骨汤，天塌下来也得先吃完这顿热乎饭再说。
回到家里的餐桌旁，林念喝着鲜美的排骨汤，紧绷了一周的胃终于暖和起来。
林暖一边给女儿夹菜，一边语重心长地开口。
林暖：念念，前两天苏晴来找你的时候，妈看你也因为临时加班改了约会时间。妈知道你现在事业心强，想把每一笔订单都接住，但人不能活成一张拉得太满的弓。
林念捧着饭碗，有些愧疚地点了点头。
林念：嗯，我已经跟苏晴道过歉、约好每周固定休息的时间了。
林暖温和地笑了笑。
林暖：这就对了。经营事业固然重要，但不管是陪朋友散步、去河边吹风，还是回家跟妈喝碗热汤，都要给自己留出一点真正属于生活的空隙。店是为了让人过得幸福才开的，可别本末倒置了。

---

### 第24个月｜两周年
**【插入节点：M24 · 第4个经营日 · 下午 16:00】**
**【事件ID：EVT_MOM_M24｜前置条件：\`familyHarmony ≥ 65\`｜状态变更：\`familyHarmony + 5\`，解锁 \`母女CG 05｜两周年的店门合影\`】**

林念接手林记烘焙满两周年的前一天下午，阳光将店门前的青石板街照得暖融融的。
苏晴举着相机站在街对面，林暖与林念并肩站在焕然一新的「林记烘焙」招牌下。

**【触发母女CG 05｜两周年的店门合影：洒满暖阳的蛋糕店门口，盛开的木绣球花旁，神情从容自信的林念挽着温柔含笑的母亲林暖，在「林记烘焙」招牌下定格下两周年合影】**

拍完照片后，母女俩站在门口看着进进出出的熟客与忙碌的店员，一起回顾起这两年来的点点滴滴。
林念感慨地看着店门。
林念：妈，两年前我刚站在这儿的时候，心里还想着「先帮妈看几个月店，等找到工作就走」。没想到一晃眼两年过去，我现在已经完全离不开这里了。
林暖转过头看着比两年前成熟、挺拔了许多的女儿，眼神里再也没有了最初的担忧，只剩下满满的笃定与欣慰。
林暖：这两年，从只有我们母女俩守着三款老蛋糕，到现在有了小雨、知遥、唐鸢、星河，有了线上小店和联名下午茶……念念，如果你说第一年结束时妈心里还留着一分牵挂，那么今天满两周年，妈可以彻彻底底地告诉你——我已经完完全全放心把林记交给你了。
林念用力抱了抱母亲的肩膀。
林念：谢谢妈！接下来的第三年，我会带着林记走得更稳、更远！

---

## 六、第五阶段：走向更远的地方（第25—30个月｜第三年·初期）
**阶段主题：从经营小店到建立品牌**

---

### 第25个月｜一个新的想法
**【插入节点：M25 · 第3个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M25｜状态变更：\`familyHarmony + 3\`】**

进入第三年，随着周边城市的邀约越来越多，林念开始认真思考将「林记烘焙」从一家小镇名店发展为真正独立品牌的可能性。
这天傍晚，林念把自己的品牌扩张构想一五一十地讲给了林暖听。

讲完之后，林念期待地看着母亲。
林念：妈，您觉得我这个建立林记品牌的计划怎么样？您快给我提提建议！
出乎林念意料的是，林暖这一次并没有立刻给出具体的做法建议，而是温和地替她添了一杯温水，轻声反问。
林暖：念念，在妈给你提建议之前，你先问问自己——你想把林记做成大品牌、开出品牌新店，是因为看别人都在扩张，还是因为你心里真正想好了要带给客人什么？
林念怔了一下，顺着母亲的话认真思考了许久，随后坚定地抬起头。
林念：我不是为了跟谁比规模。我是希望哪怕有一天客人走出了栖云镇，去到别的城市、别的街区，依然能在一个叫「林记」的地方，吃到那口用料实诚、让人安心的蛋糕。
林暖欣慰地笑了。
林暖：只要你自己心里想清楚了真正想要的是什么，那就不需要妈再教你该怎么走了。

---

### 第26个月｜妈妈的遗憾
**【插入节点：M26 · 第4个经营日 · 晚间 19:30】**
**【事件ID：EVT_MOM_M26｜状态变更：\`familyHarmony + 4\`】**

秋夜微凉，母女俩在老店后院拣选新收下来的桂花。
聊起未来的新店规划时，林暖看着满筛子的金桂，第一次向女儿讲起了自己年轻时的一段往事。

林暖：念念，其实妈三十五岁那年，也动过开第二家店的念头。
林念惊讶地抬起头。
林念：真的吗？我从来没听您提起过！那后来为什么没开成呀？
林暖轻轻筛着桂花，语气平静而坦然。
林暖：那时候邻镇的百货大楼招商，特意来请林记过去开分店。连铺面位置我都去看了两回，心里热乎了好一阵子。可那年你外婆刚好摔伤了腿需要人照顾，你也才刚上小学一年级，每天放学回来都要在后厨写作业……我左思右想，觉得要是两头跑，既顾不好老的，也陪不好小的，就把合同退了。
林念心里一酸，握住母亲的手。
林念：妈，原来您当年是为了外婆和我，才放弃了开新店的机会……您心里会不会觉得很遗憾？
林暖温和地摇了摇头，眼神清澈而满足。
林暖：守着老店看着你平平安安长大，妈一点都不后悔。只是那时候偶尔会想，如果林记能走出去会是什么光景。现在好了，你没有妈当年的牵绊，又有这么好的团队——念念，去大胆尝试你想做的事情吧，把你自己和妈当年的那份好奇，一起去看看。

---

### 第27个月｜新店的准备
**【插入节点：M27 · 第2个经营日 · 下午 15:00】**
**【事件ID：EVT_MOM_M27｜状态变更：\`familyHarmony + 3\`】**

在攻克配方与筹备未来品牌新店的过程中，林念拿来了叶星河画的几版新店内部空间与动线图纸，请母亲一起参谋。
林暖戴上老花镜，指着图纸上的柜台高度与休息区座椅间距，分享了自己三十年的经验。

林暖：叶姑娘画的灯光和配色真好看，比妈当年的审美强多了。不过念念，你看这个展示柜的玻璃倾角和取餐台高度，如果稍微往下降五公分，不管是带孩子来的家长，还是年纪大一点的老人，低头看蛋糕的时候都会觉得更亲切、不压抑。
林念立刻拿红笔在图纸上标了出来。
林念：对呀！我们光顾着看视觉效果，差点忽略了不同身高客人的视线舒适度！
林暖指了指角落的等候椅。
林暖：还有这儿，哪怕新店开得再气派，也记得在取餐区旁边留两把软垫椅子和一壶温水。店铺装修得再高级，最终留住人的，还是让客人觉得自己被体贴照顾的那份舒服感。

---

### 第28个月｜不只是招牌
**【插入节点：M28 · 第3个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M28｜状态变更：\`familyHarmony + 4\`】**

这天傍晚，在打磨招牌桂花栗子蛋糕与品牌定位的间隙，林暖向林念抛出了一个问题。
林暖：念念，现在新店的名字、包装和招牌菜都快齐活了。不过妈想问你——如果有一位从来没听说过栖云镇的陌生客人，第一次走进咱们的品牌新店，你希望他走出门的时候，记住林记烘焙的什么？

林念放下手里的抹刀，认真地思索了片刻。
林念：我希望他记住的，不只是门头上「林记烘焙」这四个字，也不只是漂亮的包装盒；而是咬下第一口蛋糕时，能吃出这是用当季最新鲜的水果、最纯正的动物奶油和最不惜工本的手艺做出来的诚意。就像外婆留下的那句「栗子甜则少放糖，桂花香淡则后撒」一样，记住我们对待食物的真心。
林暖听完，眼底漾起了深深的笑意，轻轻鼓了鼓掌。
林暖：能说出这句话，妈就知道，不管以后林记开出多少家新店，那个最核心的魂儿，你已经牢牢攥在手里了。

---

### 第29个月｜老朋友的支持
**【插入节点：M29 · 第2个经营日 · 上午 10:30】**
**【事件ID：EVT_MOM_M29｜状态变更：\`familyHarmony + 3\`】**

秋日文化节前夕，林暖早上去公园散步买菜回来，一进店门就笑得合不拢嘴。
林念正在核对清单，好奇地迎上去。
林念：妈，今天去公园遇到什么喜事啦，这么开心？
林暖把菜篮子放下，眉飞色舞地说道。
林暖：刚才我在公园门口遇到陈奶奶、周爷爷还有以前住老街的几位老邻居了！他们听说咱们林记不仅要把桂花栗子蛋糕带去文化节，接下来还要开真正的品牌新店，一个个比自己家里办喜事还激动，拉着我的手问新店什么时候剪彩，说到时候要组团坐公交车去给你撑场面呢！
林念听着老街坊们的心意，心里涌起满满的感动。
林暖看着店里挂着的老牌匾，感慨万千。
林暖：那一刻妈才真切地感觉到，咱们守了三十多年的这间小店，早就不只是我们林家自己的营生了，它已经长进了栖云镇街坊们的生活里，成了大家共同的骄傲。

---

### 第30个月｜选择与坚持
**【插入节点：M30 · 第4个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M30｜前置条件：\`familyHarmony ≥ 75\`｜状态变更：\`familyHarmony + 5\`】**

随着品牌规模扩大、准备迈向最后半年的新店扩张期，有几家大型原料批发商找上门来，推销价格低廉一半的植脂奶油与工业冷冻果茸，声称只要换用这批原料，林记的利润率立刻能翻一番。
林念当场回绝了推销，傍晚跟母亲聊起这件事时，林暖赞许地点了点头。

林暖：回绝得好。念念，妈十几年前也遇到过一模一样的诱惑。那时候整条街的点心铺子为了打价格战，全都换成了便宜又好打发的人造奶油，只有咱们林记还咬牙用着贵好几倍的动物鲜奶油，有整整半年时间，咱们店里每个月都在贴钱。
林念惊讶地问。
林念：贴了半年钱？那您当时没动摇过吗？
林暖眼神坚定地摇了摇头。
林暖：怎么没动摇过？但每次看到街坊们牵着几岁的小孙子来店里买蛋糕，我就想，进孩子和老人嘴里的东西，良心上不能掺一点假。结果半年过去，那些换了劣质奶油的店客源全流失了，老顾客们兜了一圈全都回到了林记。
林暖认真地看着女儿。
林暖：规模越大，成本表上的数字就越容易迷人眼。念念，妈很高兴你在面对更大的利益时，依然守住了咱们林记最底线的坚持。

---

## 七、第六阶段：新的传承（第31—36个月｜第三年·后期）
**阶段主题：传承不是重复，而是继续向前**

---

### 第31个月｜旧配方的新故事
**【插入节点：M31 · 第3个经营日 · 下午 15:00】**
**【事件ID：EVT_MOM_M31｜状态变更：\`familyHarmony + 4\`，补全旧物收藏《旧配方本（完整篇）》】**

这天下午，林念在重新整理母亲第6个月交给她的那本《旧配方本》时，发现在本子最后几页夹层里，还记着好几道只有名字和初步思路、却没有画上句号的半成品方子——比如「酒酿桂花舒芙蕾」「焦糖柿子挞」。

林念捧着配方本去问正好来店里喝茶的林暖。
林念：妈，我在旧配方本最后几页看到这几个方子，上面只写了一半，是您以前没来得及做出来的吗？
林暖凑过去看了一眼，笑着点了点头。
林暖：哟，那都是我四十来岁的时候突发奇想记下来的点子。那时候不懂你们现在的低温慢烤和慕斯定型技术，试了两次总觉得口感差口气，就搁下了。
林念眼睛亮晶晶地拿起笔。
林念：妈，这些搭配思路放在现在看都特别超前！如果用我和小雨、唐鸢姐现在的烘焙工艺去改良，一定能把它们真正做出来！
林暖温和地把笔递到女儿手里。
林暖：那就交给你啦。以前是妈写方子你照着学，现在这后半本没写完的故事，就由你用自己的方式去把它们补全吧！

旁白：【系统提示：旧物收藏《旧配方本》已升级补全为完整版，解锁隐藏传统改良配方灵感！】

---

### 第32个月｜一份暖冬礼盒
**【插入节点：M32 · 第3个经营日 · 下午 16:00】**
**【事件ID：EVT_MOM_M32｜状态变更：\`familyHarmony + 3\`】**

暖冬甜品节即将到来，林念把叶星河设计的三款冬季礼盒打样和几款冬日巧克力、姜饼样品摆在桌上，特意邀请母亲一起来挑选。

林念：妈，今年暖冬节我们准备推出一款主打「家的温度」的节日礼盒，您快帮我挑挑看，哪一款丝带和糕点搭配最有过节的气氛？
林暖饶有兴致地拿起一条暖红色的绒面丝带，比在绘着冬雪屋檐的礼盒上。
林暖：我喜欢这个暖红色的绒布带子，摸着手感暖和，看着也喜庆。以前每年冬天快过年的时候，咱们店里也是最忙的，外头冷风呼呼地吹，后厨的烤箱一开，满屋子都是热乎乎的黄油和可可香。
林念笑着把母亲选中的绒面丝带记下。
林念：那就听林老师的！今年我们的暖冬礼盒就用这款绒面红丝带，把当年老店后厨的那股暖和气儿，装进每一个盒子里送出去！

---

### 第33个月｜新店的第一天
**【插入节点：M33 · 第4个经营日 · 上午 11:00】**
**【事件ID：EVT_MOM_M33｜状态变更：\`familyHarmony + 5\`】**

品牌新店（及旗舰店）正式开门营业的第一天，鲜花锦簇，宾客盈门。
林暖事先和林念说好，今天她不穿店员围裙，也不去后厨帮忙，而是完全以一位普通顾客的身份来看看新店。
上午十一点，林暖挎着自己的小布包，排在进店的客人队伍里，一步步走进明亮宽敞的新店前厅。

她没有打扰正在招呼客人的许知遥和林念，而是安安静静地走过光洁的展示柜，看了看后厨玻璃窗里忙碌的周雨桐和唐鸢，又在叶星河布置的品牌文化墙前驻足许久，最后像普通客人一样在柜台点了一份草莓奶油蛋糕，坐在阳光充足的休息区慢慢品尝。

直到中午客流稍歇，林念才端着一杯热茶走到母亲桌前坐下。
林念：妈，这位尊贵的顾客，今天对我们林记新店的第一天表现还满意吗？
林暖放下小银叉，眼角眉梢全是掩饰不住的骄傲与温柔。
林暖：从进门的问候、展示柜的温度、座位的高低，到这一口跟老店分毫不差的草莓蛋糕……念念，今天妈作为一名普通顾客坐在你的新店里，可以给你打一百分。

---

### 第34个月｜妈妈的新生活
**【插入节点：M34 · 第4个经营日 · 下午 15:00】**
**【事件ID：EVT_MOM_M34｜状态变更：\`familyHarmony + 4\`】**

这天下午，林念难得清闲，在老店前厅等母亲过来聊天。
到了三点半，林暖才戴着一顶优雅的遮阳草帽、怀里抱着一束修剪得错落有致的文心兰与洋桔梗，春风满面地走进了店里。

林念惊喜地迎上去接过花束。
林念：哇，妈，这束花插得太有艺术感了吧！您从哪儿买来的呀？
林暖得意地扬了扬下巴，把花插进柜台的花瓶里。
林暖：什么买来的，这是你妈我今天下午在镇文化馆插花班亲手插的毕业作品！老师还夸我有色彩天赋呢！
林念睁大了眼睛，由衷地替母亲高兴。
林念：您去报了插花班呀？
林暖笑着在木椅上坐下，眼里闪着年轻般的光彩。
林暖：以前守着店的时候，三十年如一日围着灶台转，连出趟远门都怕耽误了老街坊买蛋糕。现在看到你把老店和新店都管得这么好，妈也终于能彻底卸下担子，去学学以前一直没空学的插花、跟陈阿姨她们报个下个月去江南古镇的旅游团了！
林念看着容光焕发的母亲，心里涌起一股说不出的欣慰——原来在自己学会独立成长的同时，母亲也终于找回了属于她自己的人生下半场。

---

### 第35个月｜最后的那本笔记
**【插入节点：M35 · 第2个经营日 · 傍晚闭店后 18:30】**
**【事件ID：EVT_MOM_M35｜前置条件：\`familyHarmony ≥ 85\`｜状态变更：\`familyHarmony + 5\`，解锁终极旧物收藏《手写笔记》】**

距离三年之期只剩最后一个月。
这天傍晚打烊后，林暖来到店里，从包里拿出了另一本以前从未示人过的厚实皮面手写本，郑重地交到林念手中。
不同于M6那本只记录配料克重的菜谱，这本《手写笔记》里，完整记录着外婆和林暖两代人三十多年来对每一季食材产地、火候微调心得、老顾客家庭故事以及经营感悟的全部手记。

林念双手接过那本沉甸甸的笔记，指尖微微发颤。
林念：妈，这是您和外婆压箱底的全部心血笔记吧……
林暖温和地看着女儿，眼神慈爱而通透。
林暖：这是林记最后的一本老笔记了，今天妈把它完完整整地交给你。不过念念，你要记住——这本笔记里写的，全都只是外婆和妈走过的过去。
林暖指了指笔记本后半部分预留的几十页空白纸张。
林暖：真正让林记活下去的，从来不是锁在纸上的老规矩。过去的故事我们已经写完了，从今往后，林记未来的味道是什么样，全都由你林念自己来决定。
林念将那本笔记紧紧贴在胸口，用力点了点头。
林念：我记住了，妈。我会带着您和外婆的心意，把属于我们这一代人的新味道继续写下去。

旁白：【系统提示：获得终极手机收藏旧物《手写笔记》！母女家庭默契值达到满阶！】

---

### 第36个月｜林记的下一个故事
**【插入节点：M36 · 第3个经营日 · 傍晚 17:30（三周年庆典前夕）】**
**【事件ID：EVT_MOM_M36｜前置条件：完成前35个月母女支线｜状态变更：解锁 \`母女CG 06｜三周年的初心老店\`，达成母女成长线圆满结局】**

三周年纪念日这天傍晚，送走了白天的喧嚣与热闹，林暖和林念没有留在气派的新店，而是一起慢慢走回了栖云镇青石板街最初的那间老店。
夕阳像三年前的那个傍晚一样，穿过木门窗棂，温柔地洒在熟悉的玻璃展示柜和旧木桌上。
空气里依然飘着最纯粹的黄油与烤戚风蛋糕的甜香。

**【触发母女CG 06｜三周年的初心老店：三年后的夕阳余晖中，林暖与林念并肩站在最初的老店柜台前，与M1交接钥匙时的画面遥相呼应；林暖温和从容，林念自信坚定，窗外木绣球花开正盛】**

林暖伸手轻轻抚过那张陪伴了自己半生的木柜台，转过头看向身旁的女儿，眼里满是温柔的感慨。
林暖：念念，还记得三年前的今天吗？那时候你因为找不到工作躲在屋里掉眼泪，妈把那串铜钥匙塞进你手里的时候，心里还在想，这丫头能坚持三个月就算不错了。
林念忍不住笑了出来，伸手挽住母亲的胳膊，把头轻轻靠在母亲肩上。
林念：那时候我也觉得自己只是暂时回来帮您看几天店呢。谁能想到，这一看就是整整三十六个月，而且我再也不想离开这儿了。

林暖慈爱地拍了拍女儿的手背，目光投向门外洒满金晖的栖云镇长街。
林暖：这三年来，妈看着你从算不清利润、怕做不好新品的小姑娘，一步步学会了带团队、交朋友、开新店，把林记变成了连妈都意想不到的模样。
林暖转过头，对着女儿露出了最舒心、最骄傲的笑容。
林暖：念念，现在的妈，已经完完全全不再担心你能不能把这家店经营好了。妈现在每天最期待的，是坐在台下看着我的女儿，在接下来的三年、十年里，还能为林记创造出多少新的故事。

林念握紧口袋里那串已经磨得愈发温润的店铺钥匙，迎着母亲的目光，笑得清亮而笃定。
林念：妈，您就放心瞧好吧——我们林记的故事，才刚刚开始呢！

旁白：从妈妈的蛋糕店，到自己的烘焙品牌。三十六个月的时光，不仅让一间老店焕发出全新的生机，也让一对母女在放手与独立中，找到了最温暖的相处方式。
旁白：【达成林暖人物支线圆满结局：《林记的下一个故事》】

---

## 八、母女成长机制与手机收藏图鉴附录

### 1. 妈妈的旧物收藏（手机「收藏—特殊物品」文案）

| 收藏编号 | 物品名称 | 解锁月份 | 物品图鉴描述与点击回忆文本 |
| :--- | :--- | :--- | :--- |
| **ITEM 01** | **《店铺钥匙》** | 第1个月（M1） | **【图鉴描述】**：一串被岁月磨得温润发亮的黄铜钥匙，挂着一枚小小的木雕蛋糕挂件。<br>**【回忆寄语】**：「不用急着做得和妈妈一样，慢慢找到你自己的节奏就好。」——这是二十二岁那年夏天，林念接过的第一份信任。 |
| **ITEM 02** | **《旧配方本》** | 第6个月（M6解锁）<br>第31个月（M31补全） | **【图鉴描述】**：用蓝印花布包裹的泛黄线装菜谱，记录着林暖三十年来反复调整的经典蛋糕配比与未竟的新品灵感。<br>**【回忆寄语】**：「前半本是妈妈为你打下的底子，后半本没写完的故事，就由你用自己的方式去补全吧。」 |
| **ITEM 03** | **《老店照片》** | 第10个月（M10） | **【图鉴描述】**：装在旧木相框里的泛黄胶片照。照片里只有两盘蛋糕的小木柜台后，年轻时的林暖梳着麻花辫，眼里盛满对未来的期待。<br>**【回忆寄语】**：「那时候条件虽然简陋，但每天推开店门看见阳光，就觉得日子一定会越过越甜。」 |
| **ITEM 04** | **《手写笔记》** | 第35个月（M35） | **【图鉴描述】**：林暖珍藏多年的完整手写烘焙心得录，记满了外婆与母亲两代人对四季食材脾气、火候微调与老顾客故事的全部心血。<br>**【回忆寄语】**：「这些配方记录着过去，但林记未来的味道，应该由你林念自己来决定。」 |

---

### 2. 六张母女专属CG图鉴汇总（手机「收藏—CG收藏」文案）

| CG编号 | CG名称 | 触发月份 | 画面构图描述 | 收藏图鉴配文 |
| :--- | :--- | :--- | :--- | :--- |
| **MOM CG 01** | 《交到你手上了》 | 第1个月（M1） | 暮色温柔的前厅木柜台旁，林暖双手将黄铜店铺钥匙放进林念掌心，眼神温和而鼓励。 | 「从今天起，这家开了三十年的小店，就正式交到你手上了。」 |
| **MOM CG 02** | 《旧配方本的温度》 | 第6个月（M6） | 暖黄吊灯下，母女俩并肩坐在木桌前翻阅展开的蓝印花布旧配方本，指尖划过数十年的批注。 | 「每一行改过的克重里，都藏着一家老店对客人的真心。」 |
| **MOM CG 03** | 《复原桂花栗子香》 | 第8个月（M8） | 秋夜的后厨灶台前，林暖手把手教林念慢火翻炒金黄栗子泥，热气中飘散着点点金桂。 | 「五岁那年闻过的秋日甜香，在二十二岁的后厨里重新升起了热气。」 |
| **MOM CG 04** | 《第一个年末的账本》 | 第12个月（M12） | 冬夜打烊后的前厅，桌上摊开厚厚的年度账本，林暖含笑看着认真算完最后一笔账的女儿。 | 「那一天，妈妈第一次真正承认，女儿已经有了属于自己的经营方式。」 |
| **MOM CG 05** | 《两周年的店门合影》 | 第24个月（M24） | 阳光灿烂的「林记烘焙」招牌与木绣球花旁，成熟从容的林念挽着母亲的手臂笑对镜头。 | 「两年的风雨与甜香，终于让妈妈可以放心地松开牵引的手。」 |
| **MOM CG 06** | 《三周年的初心老店》 | 第36个月（M36） | 三年后的夕阳再次洒满最初的老店柜台，母女俩并肩而立，林暖眼中满是对女儿未来的期待。 | 「传承从来不是重复过去，而是带着妈妈的祝福，去创造属于你的下一个故事。」 |
`,Cf=`# 《秋屿来信》——沈知秋完整人物剧情文案（含精确时间节点与防撞排期）

## 一、人物核心档案与养成机制

* **姓名**：沈知秋
* **年龄**：28岁
* **身份**：「秋屿咖啡」主理人
* **外观特征**：温和柔顺的棕发，常穿整洁的店员制服与深绿色咖啡师围裙，举手投足间带着从容沉静的气质。
* **性格特点**：温柔、理性、细致，有自己的经营原则。曾在城市精品咖啡馆工作多年，积累了扎实的咖啡萃取、饮品研发与门店运营经验后，主动回到栖云镇开设「秋屿咖啡」。
* **核心目标**：不急于扩张，也不盲目追逐热门网红爆款，希望把「秋屿咖啡」经营成一家能长期存在、让常客随时找得到熟悉味道的小店，并完成一份属于栖云镇的**《栖云四季》咖啡甜品菜单**。
* **双维度关系养成（无爱情线，纯女性友谊与事业伙伴）**：
  * **熟悉度（\`familiarity\`）**：通过日常拜访、聊天、触发日常支线与主线章节提升。
  * **合作默契（\`coopSynergy\`）**：通过联名搭配小游戏、联名菜单经营、完成手机合作订单与主题活动提升。
  * **关系阶段递进**：\`初识\`（完成第一章）→ \`熟悉\`（完成第二章）→ \`信任\`（完成第三章）→ \`朋友\`（完成第四、五章）→ \`默契伙伴\`（完成第六章及特别篇）。

---

## 二、《秋屿来信》全流程精确插入节点总表（与主线零冲突排期）

*（排期原则：每个月共5个经营日。主线剧情集中在各月第1—3个经营日的白天或月末第5个经营日结算；沈知秋《秋屿来信》全部安排在**无主线冲突的第4个经营日、闭店打烊后或夜晚回家途中**，并完全避开 M26—M29 桂花栗子蛋糕高潮连续事件链。）*

| 章节 / 事件 | 唯一事件ID | 精确插入月份与经营日 | 具体触发时段与场景 | 同月主线节点（已错开避撞） |
| :--- | :--- | :--- | :--- | :--- |
| **第一章：午后初见** | \`EVT_ZHIQIU_CH01\` | **M11 · 第4个经营日** | **下午自由活动时段（15:00）**｜街道采购后路过秋屿咖啡 | M11主线在第2个经营日（小雨的创意本） |
| **第二章：恰好的搭配** | \`EVT_ZHIQIU_CH02\` | **M13 · 第4个经营日** | **下午备休时段（16:00）**｜收到手机消息带样品前往秋屿咖啡 | M13主线在第2个经营日（产品标准化） |
| **第三章：菜单上的分歧** | \`EVT_ZHIQIU_CH03\` | **M15 · 第4个经营日** | **傍晚打烊闭店后（18:30）**｜林记闭店后带方案前往秋屿咖啡 | M15主线在第3个经营日（首次跨界合作） |
| **第四章：忙碌的周末** | \`EVT_ZHIQIU_CH04\` | **M17 · 第5个经营日** | **周末下午（14:00）至闭店后（18:30）**｜前往秋屿咖啡送补货触发 | M17主线在第3个经营日（临江市考察） |
| **第五章：为什么回到这里** | \`EVT_ZHIQIU_CH05\` | **M20 · 第4个经营日** | **雨天下午自由活动时段（15:30）**｜雨天拜访秋屿咖啡触发 | M20主线在第2个经营日清晨（分店落地） |
| **第六章·第一幕：计划启动** | \`EVT_ZHIQIU_CH06_A\` | **M21 · 第4个经营日** | **上午备料结束后（10:30）**｜沈知秋来林记烘焙前厅邀约 | M21主线在第2个经营日（叶星河与唐鸢） |
| **第六章·春季篇：春日花园** | \`EVT_ZHIQIU_CH06_SPR\` | **M22 · 第1个经营日** | **春日午后（14:00）**｜秋屿咖啡发布春季联名 | M22主线在第3个经营日（两店磨合） |
| **第六章·夏季篇：夏日微风** | \`EVT_ZHIQIU_CH06_SUM\` | **M24 · 第2个经营日** | **盛夏午后（14:30）**｜秋屿咖啡发布夏季联名 | M24主线在第5个经营日（24岁生日结算） |
| **第六章·秋季篇：秋日漫游** | \`EVT_ZHIQIU_CH06_AUT\` | **M25 · 第4个经营日** | **金秋傍晚闭店后（17:30）**｜秋屿咖啡发布秋季联名 | M25主线在第1个经营日（避开M26—29危机） |
| **第六章·冬季篇 & 正式菜单** | \`EVT_ZHIQIU_CH06_WIN\` | **M30 · 第2个经营日** | **初冬傍晚闭店后（18:30）**｜完成冬季联名并获赠首本正式菜单 | M30主线在第5个经营日（第五章阶段结算） |
| **特别篇：秋屿的灯一直亮着** | \`EVT_ZHIQIU_SP_NIGHT\` | **M32 · 第4个经营日** | **夜晚闭店回家途中（21:00）**｜路过亮灯的秋屿咖啡触发 | M32主线在第2个经营日（点亮城市地图） |

---

## 三、《秋屿来信》六章主线与特别篇完整剧本

---

### 第一章：午后初见
**【插入节点：M11（第11个月）· 第4个经营日 · 下午自由活动时段 15:00】**
**【前置条件：林记烘焙已升至LV2、已在M5完成特殊定制订单、当天无主线事件冲突】**
**【场景：栖云镇街道 → 秋屿咖啡】**
**【事件ID：EVT_ZHIQIU_CH01】**
**【状态变更：解锁「秋屿咖啡」地图、沈知秋人物资料、咖啡购买功能、基础互动、联名小游戏入口（待激活），关系阶段 = 初识】**

十一月中旬的午后，阳光斜斜洒在栖云镇的青石板街道上。
林念刚把店里的下午茶交接给周雨桐，自己去老街食材铺核对完下周的鲜奶订单。
往回走经过街角时，空气里忽然飘来一阵醇厚而干净的烘焙咖啡豆香气。
原本闲置的转角铺面已经换上了温润的胡桃木门框，门边挂着一块手写木牌——「秋屿咖啡」。
林念好奇地停下脚步，推开了木门。

门上的铜铃轻轻响了一声。
店内的空间不算很大，原木桌椅旁摆放着生机勃勃的散尾葵与虎皮兰，暖黄色的吊灯光线柔和，让人一进门便觉得格外放松。
吧台后，一位留着棕色长发、系着深绿色围裙的年轻女子正低头将刚烘焙好的咖啡豆分装进密封罐里。

听到铃声，女子抬起头，露出一抹温和而礼貌的微笑。
沈知秋：欢迎光临。今天店里刚试营业，随便坐，想喝点什么可以看看手写黑板。
林念走到吧台前，目光被整齐排列的手冲滤杯和咖啡豆吸引。
林念：你好，我是街对面「林记烘焙」的林念，闻着咖啡香就忍不住进来看看了。恭喜新店开业！
沈知秋愣了一下，随即眉眼温和地舒展开来。
沈知秋：原来你就是林记烘焙的新店长林念。我是这家「秋屿咖啡」的店主，我叫沈知秋。
沈知秋转身取过一只温好的瓷杯，熟练地为林念倒了一小杯刚萃好的手冲咖啡。
沈知秋：其实我刚回栖云镇筹备店铺的时候，就经常听街坊们提起林记。前几天我特意去买过一块你们店里的原味奶油蛋糕，动物奶油打发得非常干净，戚风胚也很松软。
林念接过瓷杯，有些惊喜地笑了笑。
林念：真的吗？谢谢你的夸奖！那是我妈妈传下来的老方子，我接手之后也一直在努力保持原来的品质。

**【触发CG 01｜午后初见：暖色灯光下的木质吧台前，系着深绿围裙的沈知秋微笑着递出咖啡杯，阳光落在两人之间的咖啡蒸汽上】**

林念尝了一口手冲咖啡，柔和的坚果与柑橘尾韵在舌尖散开。
林念：这杯咖啡好顺口呀，一点涩味都没有。以前我喝咖啡总怕太苦，但这一杯喝完嘴里居然是甜的。
沈知秋靠在吧台边，认真地擦拭着手里的量豆勺。
沈知秋：只要豆子新鲜、烘焙和萃取的温度恰当，咖啡本身就有很多丰富的风味层次。
沈知秋顿了顿，目光温和地看向林念。
沈知秋：说起来，林店长，我心里一直有个想法。很多客人来秋屿喝下午茶的时候，都会问店里有没有配咖啡的甜点。但我只擅长做咖啡，对烘焙实在外行，又不想随便进一批冷冻半成品敷衍客人……
林念立刻听出了她的弦外之音，眼睛亮了起来。
林念：沈店长的意思是，想和我们林记烘焙试试合作吗？
沈知秋微笑着点了点头。
沈知秋：如果你感兴趣的话。不过咖啡和蛋糕的脾气不一样，不是随便摆在一个盘子里就叫搭配。不知道林店长哪天有空，能不能带几款店里的蛋糕样品过来，我们先一起试试味道？
林念爽快地一口答应下来。
林念：没问题！等我回后厨把样品配方整理好，一定拿过来找你！

旁白：推开秋屿咖啡木门的那个午后，林念还没有想到，眼前这位温柔而理性的咖啡店主，会成为自己未来经营路上最默契的同行者。
旁白：【系统提示：解锁「秋屿咖啡」日常购买与基础人物互动！在M11—M13期间完成2次日常互动后，将于M13第4个经营日开启第二章。】

---

### 第二章：恰好的搭配
**【插入节点：M13（第13个月）· 第4个经营日 · 下午备休时段 16:00】**
**【前置条件：已完成第一章，且在M11—M13期间与沈知秋完成至少2次日常互动；若M13第4个经营日未满2次互动，则顺延至满2次互动后的当月第4个经营日16:00触发】**
**【场景：秋屿咖啡·靠窗木桌】**
**【事件ID：EVT_ZHIQIU_CH02】**
**【状态变更：联名小游戏正式开放、解锁第一份联名菜单、解锁沈知秋咖啡偏好记录，关系阶段 = 熟悉】**

M13第4个经营日下午四点，林记烘焙的日间客流告一段落。
两天前刚在后厨完成「产品配方标准化」整理的林念，收到了沈知秋发来的手机消息，便提着一只四格保温试吃盒，准时推开了秋屿咖啡的门。
沈知秋早已在靠窗的木桌上摆好了四只不同杯型的咖啡杯，吧台上的磨豆机正发出均匀轻柔的嗡鸣声。

沈知秋：来得正好，坐吧。我刚把今天要试的四款咖啡豆研磨好。
林念打开保温盒，将四小块切得整整齐齐的标准样品摆上木托盘。
林念：知秋姐，我前两天刚把店里的标准配方整理好，今天带了最有代表性的四款样品过来——草莓鲜奶蛋糕、经典巧克力蛋糕、抹茶红豆蛋糕，还有秋天试做的栗子蒙布朗。
沈知秋走到桌边坐下，拿出一本封皮素雅的记录本和两把试吃小叉。
沈知秋：那我们就一样一样来试。

**【触发CG 02｜第一次合作：阳光洒满的窗边木桌上摆着四款精致蛋糕与四杯咖啡，林念与沈知秋并肩而坐，认真品尝并记录风味】**

沈知秋先将一杯拉花细腻的温热拿铁推到草莓鲜奶蛋糕旁。
沈知秋：你先尝尝看，用草莓鲜奶蛋糕配这杯中度烘焙的鲜奶拿铁。
林念尝了一口草莓蛋糕，再抿了一口拿铁，眼睛微微睁大。
林念：哇……拿铁柔和的奶香把草莓的果酸衬托得更温柔了，咽下去之后满嘴都是清甜的奶味，完全不会抢掉蛋糕本身的风头！
沈知秋在笔记本上写下一行字，嘴角带着浅浅的笑意。
沈知秋：因为你们的动物奶油乳脂香很纯，如果配酸度太高的美式反而会冲撞；配温润的拿铁，就像两个性格温和的人坐在一起聊天，最适合午后放松。

接着，沈知秋又将一杯油脂丰厚的冰美式推到巧克力蛋糕前。
沈知秋：再试试看巧克力蛋糕配这杯美式。
林念试了一口，惊喜地点头。
林念：刚才单吃巧克力甘纳许的时候，吃到第三口会觉得稍微有点厚重；但喝一口微苦清爽的美式，甜腻感一下子就被化解掉了，可可的香气反而更突出了！
沈知秋赞许地看向林念。
沈知秋：林店长的味觉很敏锐。甜品和咖啡的搭配，有时候是顺应，有时候则是互补。

随后，两人又尝试了剩下的两组搭配：
- **抹茶红豆蛋糕 ＋ 卡布奇诺**：绵密厚实的奶泡包裹着微苦回甘的抹茶香，尾调透出蜜红豆的沙甜，层次分明。
- **栗子蒙布朗 ＋ 深烘手冲咖啡**：深烘咖啡独有的焦糖与烟熏木质香，与醇厚绵密的栗子泥完美交融，满口皆是浓郁的秋日气息。

试吃完四组样品，沈知秋放下记录笔，认真地看向林念。
沈知秋：林念，你的蛋糕底子做得非常扎实。如果要作为秋屿的联名下午茶切块，我建议把巧克力蛋糕的淋面甜度再降半成，抹茶款的红豆颗粒稍微集中在中层——这样客人在一口蛋糕、一口咖啡交替品尝的时候，风味过渡会更自然。
林念立刻拿出自己的随身配比本记了下来，由衷地感叹道。
林念：知秋姐，你对风味细节的把控太厉害了！我以前只想着怎么把蛋糕本身做好吃，从来没想过和饮品搭配在一起会有这么多门道。
沈知秋温和地笑了笑。
沈知秋：你对甜点食材的理解也帮了我很大忙。那从今天起，我们就挑出最搭的组合，正式在两家店同步推出第一份联名菜单吧。

---

#### 【系统玩法接入：第一次联名搭配小游戏文案】
* **玩法引导提示**：请从已解锁的蛋糕配方中选择1款蛋糕，并搭配1款秋屿咖啡，组合成首期联名下午茶。
* **搭配结算评价文案**：
  * **【完美契合（S级评价）】**（如：草莓蛋糕+拿铁 / 巧克力蛋糕+美式 / 抹茶蛋糕+卡布奇诺 / 栗子蛋糕+深烘咖啡）
    沈知秋：风味平衡得恰到好处。咖啡衬托出了蛋糕的香气，蛋糕又柔和了咖啡的苦味，这就是最理想的下午茶搭配。
  * **【风味尚可（A级评价）】**（如：原味奶油蛋糕+任意基础奶咖）
    沈知秋：中规中矩的组合，口感很安全，不管是老人还是年轻客人都能接受。
  * **【略显冲突（B级评价）】**（如：草莓鲜奶蛋糕+重度深烘苦咖啡）
    沈知秋：深烘的焦苦味有点太强势了，把草莓原本清新的果香盖住了，下次我们换温和一点的豆子试试吧。

---

### 第三章：菜单上的分歧
**【插入节点：M15（第15个月）· 第4个经营日 · 傍晚打烊闭店后 18:30】**
**【前置条件：在M15第3个经营日完成首次跨界合作联名活动，且累计完成至少5笔联名订单】**
**【场景：林记烘焙闭店后 → 秋屿咖啡】**
**【事件ID：EVT_ZHIQIU_CH03】**
**【状态变更：解锁三款基础联名套餐、获得经营管理经验、解锁收藏品《沈知秋的经营记录》，关系阶段 = 信任】**

M15第3个经营日推出的第一期春日联名下午茶，在栖云镇收获了空前的热度。
到了第4个经营日傍晚六点半，林记烘焙刚刚挂上「打烊」的木牌，干劲十足的林念便拿着一份连夜写好的扩充方案，兴冲冲地跑进了街对面的秋屿咖啡。

林念把方案铺在吧台上，眼睛亮晶晶的。
林念：知秋姐！你看昨天和今天的联名销量数据，比我们预想的高了快一倍！我昨晚打烊后仔细想过了，不如我们趁热打铁，下个月一口气再增加五六种蛋糕和特调咖啡的联名套餐，把展示柜全都铺满，肯定能吸引更多客人来打卡！

吧台后的沈知秋刚清洗完咖啡机，擦干双手，接过林念写得密密麻麻的方案仔细看了一遍。
然而，她并没有像林念预想的那样露出兴奋的神情，而是轻轻放下了方案，神色平静而认真。
沈知秋：林念，这份方案里的六款新套餐，我不同意现在推出。
林念脸上的笑容怔住了，有些不解地看向她。
林念：为什么呀？现在大家对我们的联名这么感兴趣，趁着热度多推几款新口味，不是能卖得更好吗？
沈知秋摇了摇头，语气依然温和，却带着不容动摇的坚持。
沈知秋：菜单不是越厚越好。如果同时在线上和店里挂出七八种联名套餐，意味着你和小雨每天要在后厨多备五种不同保质期的鲜果和慕斯馅，我也要同时准备六种不同烘焙度与基底的特调原料。
林念还是有些不服气，小声争辩道。
林念：辛苦一点我不怕的，只要能把名气打出去……知秋姐，你这样会不会有一点太保守了？

气氛一时有些安静。
沈知秋没有生气，她转身从吧台抽屉里拿出一本记满表格与曲线的深绿色账册，翻开推到林念面前。
沈知秋：念念，我不是怕辛苦，也不是不想让生意变好。你先看看我这本经营记录。
林念低头看去，只见账册上极其细致地记录着第一期联名以来的每一笔数据：每种原料的开封损耗率、高峰期单杯饮品的平均制作时长、顾客等待超过十分钟后的退单率，以及扣除报损后的真实净利率。

沈知秋指着其中两行数据，耐心地向林念解释。
沈知秋：你看昨天下午，光是现有的两款联名套餐，在客流高峰期就已经让我的出杯时间延长到了八分钟。如果一口气增加到六款，后厨备料分散，不仅出餐会变慢、品控会下降，那些点单率不到百分之十的小众款式还会产生大量的鲜果和鲜奶报损。
林念看着账册上精确到克与分钟的记录，刚才的冲动渐渐冷却下来。
沈知秋温和地看着她。
沈知秋：好产品不等于好经营。把每一款端上桌的套餐都控制在团队能从容驾驭的范围内，客人吃到的永远是95分以上的品质；可如果为了追逐一时的热闹把摊子铺得太散，最后累垮的是自己，消耗的也是客人的信任。

林念怔怔地看着那本经营记录，忽然想起了母亲林暖以前教她算成本时说过的话。
她有些不好意思地红了脸，主动从包里拿出自己的《产品研发记录本》放到桌上。
林念：对不起知秋姐……是我光顾着冲销量，没算清楚背后的库存压力和出餐时间。你看，这是我记录的各款蛋糕备料时长和保鲜周期，如果结合你的出杯数据，我们其实只需要保留三款受众最广、备料又能互通的经典套餐就够了。
沈知秋接过林念的研发本，眼底露出了欣慰而赞赏的笑意。
沈知秋：你能这么快听进去并且拿出自己的研发数据来核对，已经比我当年刚管店的时候厉害太多了。那我们就按你说的——精简保留三款最有特色的套餐，把定价和成本结构算到最合理，再根据熟客的反馈一步步微调。
林念用力点了点头。
林念：好！今天打烊后来知秋姐这儿，真是上了一堂最实在的经营课！

---

#### 【系统玩法接入：联名菜单经营小游戏引导文案】
* **玩法目标**：在有限的备料库存与制作精力下，从候选联名方案中挑选 **3款核心套餐**，综合考量「制作成本」「套餐定价（亲民/标准/精品）」「顾客偏好」与「预计报损率」，实现单日净收益与顾客满意度双达标。
* **达标结算台词**：
  沈知秋：成本控制得很稳，三款套餐的销量和出餐速度也刚刚好。看来我们的林店长，已经真正掌握「少即是多」的经营门道了。

---

### 第四章：忙碌的周末
**【插入节点：M17（第17个月）· 第5个经营日（周末）· 下午营业时段 14:00 至 闭店后 18:30】**
**【前置条件：完成第三章，累计完成规定数量联名订单，在林念M17第3个经营日从临江市考察归来后的周末触发】**
**【场景：秋屿咖啡】**
**【事件ID：EVT_ZHIQIU_CH04】**
**【状态变更：沈知秋熟悉度与合作默契大幅提升、解锁周末限定套餐、解锁 \`CG 03｜忙碌的周末\`，关系阶段 = 朋友】**

M17的最后一个经营日恰逢周末，栖云镇街道举办了热闹的文旅打卡活动，街上的游客比平时翻了整整两倍。
下午两点，林念将店里的日常事务交接给周雨桐和许知遥，自己提着当天第二批补充的联名蛋糕切块走进秋屿咖啡时，眼前的景象让她吃了一惊——
原本安静雅致的咖啡店里座无虚席，吧台前还排着七八位等待取餐的客人，线上订单打印机的提示音更是一声接一声地响个不停。

吧台后只有沈知秋一个人。
向来从容整洁的她，此刻额前的碎发已经被汗水濡湿，一只手在压意式浓缩手柄，另一只手还要忙着给冰杯加冰、核对取餐号。因为连续几个小时高强度连轴转，她打发奶泡的手腕都在微微发颤。

林念快步走进吧台内侧，将蛋糕保温箱放好。
林念：知秋姐！今天怎么突然来了这么多客人？你从早上忙到现在还没休息过吧？
沈知秋深吸了一口气，勉强露出一个温和的微笑，额角却滑下一滴汗水。
沈知秋：今天镇上有活动，游客比预计的多太多了……没事，你把蛋糕放下就快回林记忙吧，我一个人应付得过来。
话音未落，沈知秋转身去拿高处的纸杯时，因为低血糖和疲惫，脚步微微晃了一下，险些碰翻手边的糖浆瓶。

林念眼疾手快地一把扶住她的胳膊，语气不容拒绝地直接拿过了吧台上的备用围裙系在腰间。
林念：这还叫应付得过来呀？林记那边今天有小雨和知遥守着，我现在哪儿也不去，就留在这儿帮你！
沈知秋愣了一下，有些迟疑地看着林念。
沈知秋：可是……这怎么好意思麻烦你……
林念已经麻利地洗净双手，拿起菜单牌和点单笔看向她。
林念：我们可是合作伙伴，你的店就是我的半个主场！知秋姐，按我们上次讨论的——现在客流太大，我们立刻把制作耗时超过五分钟的手冲和复杂特调暂时挂牌停售，把所有精力集中在出杯最快的拿铁、美式和三款核心联名蛋糕套餐上！你只管专心萃咖啡，点单、装盘、打包和补冰块全交给我！

看着林念果断而熟练的模样，沈知秋眼底闪过一丝震动，随即重重地点了点头。
沈知秋：好，听你的！

---

#### 【系统玩法接入：特殊联名活动小游戏（限时高峰协作）】
* **玩法内容**：在限时回合内，与沈知秋配合处理涌入的周末顾客订单，合理分配有限的蛋糕与咖啡库存，优先保障核心套餐供应，达成顾客满意度与营业额目标。

---

**【小游戏完成后接续剧情（18:30 打烊闭店后）】**
在两人的默契配合下，原本混乱拥挤的排队长龙渐渐变得井然有序。
直到傍晚六点半，最后一位周末游客满意地提着联名下午茶离开，秋屿咖啡终于恢复了安静。

沈知秋将门口的木牌翻到「休息中」，转身看着正弯腰帮她擦桌子的林念。
她没有说话，只是走到吧台后，用自己珍藏的一支玫瑰夏威夷咖啡豆，安安静静地冲煮了两杯热咖啡，端到靠窗的木桌上。

沈知秋：念念，别擦了，过来坐会儿吧。

**【触发CG 03｜忙碌的周末：夕阳余晖洒进打烊后的咖啡馆，解下围裙的沈知秋与林念面对面坐在窗边，桌上摆着两杯冒着热气的咖啡与一块分食的蛋糕，神情疲惫却格外柔和放松】**

林念在窗边坐下，捧起温热的咖啡杯舒了一口气。
林念：呼——今天下午这一仗打得真痛快！知秋姐，你的手腕还酸不酸？
沈知秋轻轻活动了一下手腕，低头看着杯中清澈的咖啡液，声音比平时柔和了许多。
沈知秋：好多了。其实今天下午你刚进门的时候，我脑子里还在想，秋屿是我自己的店，不管多忙多累，我都应该自己一个人扛下来，不能让外人觉得我连一家小店都管不好。
林念认真地看着她。
林念：我刚开始管林记的时候也是这样想的，什么事都自己抓着，结果差点把自己累倒在后厨。
沈知秋抬起眼眸，对着林念露出了认识以来最真挚、最松弛的一个笑容。
沈知秋：是啊。今天和你一起站在吧台后面忙完这一场，我突然明白了一件事——原来有时候把事情交给信任的人一起分担，并不意味着自己做得不够好。
沈知秋举起咖啡杯，轻轻碰了碰林念的杯沿。
沈知秋：今天真的很谢谢你，念念。这杯咖啡，是我请朋友喝的。
林念眉眼弯弯地回碰了一下。
林念：能喝到沈店长亲手冲的私房豆子，那我下次周末还来给你当兼职店员！

---

### 第五章：为什么回到这里
**【插入节点：M20（第20个月）· 第4个经营日（雨天）· 下午自由活动时段 15:30】**
**【前置条件：完成第四章，人物熟悉度达标，在M20第2个经营日林记新业务落地后的第4个经营日雨天午后前往秋屿咖啡触发】**
**【场景：秋屿咖啡·雨天午后】**
**【事件ID：EVT_ZHIQIU_CH05】**
**【状态变更：解锁沈知秋的过去、解锁《旧笔记本》图鉴、解锁 \`CG 04｜雨天的故事\`、开放特殊深度对话】**

M20第4个经营日，是一个淅淅沥沥下着小雨的下午。
前两天刚忙完分店与新渠道开业的林念，把店务交给唐鸢、知遥和小雨，独自撑着伞走到街道上透气。
雨天的街道行人很少，秋屿咖啡里只放着轻柔的黑胶爵士乐，空气中弥漫着雨水与烘焙咖啡豆交织的湿润气息。
林念收起雨伞走进店里时，看到沈知秋没有站在吧台后，而是独自坐在靠窗的角落位置，正在一页页擦拭并整理一本边角有些泛黄的旧皮面笔记本。

林念放轻脚步走过去。
林念：知秋姐，今天下雨客人少，怎么在看旧本子呀？
沈知秋抬起头，眼神里带着一抹怀念的温柔，朝对面的座位指了指。
沈知秋：是念念呀，快坐。听说你们林记这周新业务刚落地，忙坏了吧？趁今天下雨清闲，我把以前在城里工作时攒下的笔记拿出来透透气。

**【触发CG 04｜雨天的故事：窗外雨丝如织，玻璃窗上凝着细密水珠，沈知秋手指轻抚翻开的旧笔记本，与林念隔着一盏暖黄台灯安静交谈】**

林念好奇地凑过去看了一眼。
只见泛黄的纸页上字迹工整，前半部分密密麻麻记录着上百种咖啡豆的杯测曲线、水温参数与特调尝试，后半部分则夹着好几张手绘的街角小店平面草图。

林念由衷地赞叹道。
林念：知秋姐，这本笔记记了得有好几年吧？连每一款豆子在不同湿度下的研磨刻度都标得这么清楚。
沈知秋轻轻翻过一页，语气平和地讲起了自己的过去。
沈知秋：这本笔记陪了我整整五年。大学毕业后，我留在省城一家很有名的精品咖啡馆工作，从最基础的吧台学徒做起，后来慢慢开始负责饮品研发，最后管起了三家门店的日常运营。
林念有些惊讶地看着她。
林念：管三家门店的运营？那你当时在城里发展得那么好，为什么后来会决定回栖云镇开这一家小小的秋屿咖啡呢？

沈知秋端起手边的温水抿了一口，目光投向窗外被雨水洗得干干净净的青石板街。
沈知秋：那五年确实让我学到了很多真本事，不管是咖啡技术还是算账管店，都是那时候打下的底子。我一点也不后悔去大城市闯过那几年。
沈知秋转过头，微微一笑。
沈知秋：只是做到第五年的时候，店里为了每个月冲话题热度，要求我们每两周就必须推出一款博眼球的网红猎奇饮品。有时候明明知道那个配方并不好喝，却为了拍照噱头不得不做；以前熟悉的常客再来的时候，菜单上早就找不到他们喜欢的经典款了。
林念若有所思地点了点头。
沈知秋指了指旧笔记本最后一页那张画着「秋屿咖啡」雏形的铅笔草图。
沈知秋：那时候我就发现，我真正热爱的不是在商业浪潮里不停追逐下一个爆款，而是安安静静地做好每一杯咖啡，看着熟悉的客人推门进来，不用看菜单就能点出那杯属于他的味道。于是我辞了职，带着攒下的积蓄和这本笔记回到了栖云镇。

沈知秋看着林念，眼神清澈而笃定：
沈知秋：我一直觉得，一家店不一定要有多大。只要有人愿意一次又一次地回来，就已经是一件很值得高兴的事情了。

林念怔怔地听着这句话，心头涌起一股强烈的共鸣。
林念：知秋姐，我太明白你的感觉了！这几天分店刚开，我也经常问自己到底想把林记做成什么样。可是每次看到陈奶奶她们推开门说「还是你们家的味道让人安心」的时候，我就觉得，守住这份让人愿意一次次回来的心意，比什么都重要。
沈知秋欣慰地看着林念，将那本旧笔记本往她面前推了推。
沈知秋：虽然你做的是蛋糕，我做的是咖啡，但我就知道，我和林店长其实是同一种人。

旁白：窗外的雨声淅沥，两颗同样认真经营着小店的心，在这个午后真正走在了一起。

---

### 第六章：栖云四季（人物主线高潮｜分阶段跨月推进）
**【前置条件：完成前五章、已解锁草莓/芒果/栗子/巧克力四类核心蛋糕配方、完成至少1次季节性活动】**
**【状态变更：完成《栖云四季》联名菜单、解锁四季限定收藏图鉴、解锁 \`CG 05｜栖云四季\`，关系阶段 = 默契伙伴（最高阶段）】**

#### 【第一幕：未完成的心愿（插入节点：M21 · 第4个经营日 · 上午备料结束后 10:30）】
**【场景：林记烘焙前厅｜事件ID：EVT_ZHIQIU_CH06_A】**

M21第4个经营日上午十点半，早高峰刚刚过去，沈知秋罕见地主动带着她那本珍藏的旧笔记本，来到了林记烘焙的前厅。
她翻开笔记本的最后几页空白处，递到林念面前。
页面顶端写着四个娟秀的字——**《栖云四季》**。
下面分列着「春、夏、秋、冬」四个季节栏，每一栏左边写好了咖啡特调的构想，右边的甜品搭档栏却一直空着。

林念惊讶地看着那几页手稿。
林念：知秋姐，这是……
沈知秋温和而认真地看着林念。
沈知秋：这是我刚开秋屿咖啡时就一直想完成的一个心愿——制作一份真正属于栖云镇的「四季咖啡菜单」。我希望用四组咖啡和甜品的搭配，把咱们小镇一年四季的春花、夏风、秋叶和冬雪全都装进菜单里。
沈知秋轻轻叹了口气，随即露出笑意。
沈知秋：以前我一个人只会做咖啡，右边这一半的甜品栏空了整整两年。现在，我想正式邀请林记烘焙的林念店长，在接下来的春、夏、秋、冬四个季节里，和我一起把这份《栖云四季》填满，你愿意吗？
林念毫不犹豫地握住笔，用力点了点头。
林念：我当然愿意！知秋姐，我们就跟着栖云镇接下来的四季轮回，一组一组把它们做出来！

---

#### 【第二幕：四季联名套餐的逐季推出（M22 — M30 分节点嵌入）】
*（设计说明：以下四个子事件分别嵌入对应季节月份的空闲经营日，玩家需使用后厨实际库存制作对应蛋糕，与秋屿咖啡共同完成限时联名活动。）*

##### 1. 春季篇：【春日花园】（草莓鲜奶蛋糕 ＋ 花香拿铁）
**【插入节点：M22 · 第1个经营日 · 下午 14:00（配合日历春季花卉节档期）】**
**【事件ID：EVT_ZHIQIU_CH06_SPR｜主题：花朵、春风、新鲜水果】**
春日花开时节，林念端出选用头茬红颜草莓与轻盈动物奶油制作的「草莓鲜奶蛋糕」，沈知秋则萃取了带有天然栀子与茉莉花香的浅烘浓缩，融合成一杯温润的「花香拿铁」。
林念看着托盘上粉白相间的蛋糕与点缀着干花瓣的拿铁，眼睛亮晶晶的。
林念：一口酸甜多汁的新鲜草莓，再配上一口带着春花香气的拿铁，真的就像坐在春天的花园里吹风一样！
沈知秋在《栖云四季》的第一页郑重写下「春日花园」四个字。
沈知秋：这就是栖云镇春天的味道。第一页，我们完成了。

##### 2. 夏季篇：【夏日微风】（芒果慕斯 ＋ 柑橘冰咖啡）
**【插入节点：M24 · 第2个经营日 · 下午 14:30（配合日历夏日水果节档期，错开第5个经营日林念生日）】**
**【事件ID：EVT_ZHIQIU_CH06_SUM｜主题：清爽、水果、夏日阳光】**
盛夏骄阳似火，林念带来了冰凉顺滑、果香馥郁的「芒果慕斯」，沈知秋则用鲜榨红西柚与蜜柑汁打底，缓缓冲入冷萃咖啡液，制成一杯分层澄澈的「柑橘冰咖啡」。
沈知秋将挂着冰珠的玻璃杯放到金黄的芒果慕斯旁。
沈知秋：芒果的绵密热带果甜，配上柑橘冰咖啡的气泡清爽感，哪怕外头再热，吃下这一套也能立刻静下心来。
林念笑着擦了擦额角的汗。
林念：客人们都说，我们这组「夏日微风」简直是栖云镇夏天的解暑神器！

##### 3. 秋季篇：【秋日漫游】（栗子蒙布朗 ＋ 深烘咖啡）
**【插入节点：M25 · 第4个经营日 · 傍晚闭店后 17:30（配合初秋丰收季，在M26桂花栗子蛋糕大危机开启前完成，绝不干扰M26—M29连续主线）】**
**【事件ID：EVT_ZHIQIU_CH06_AUT｜主题：栗子、焦糖、秋日落叶】**
金秋落叶铺满街道时，林念用高山油栗泥与焦糖脆底做出了层次丰富的「栗子蒙布朗」，沈知秋则拿出了自己最拿手的曼特宁拼配豆，手冲出一杯醇厚回甘的「深烘咖啡」。
沈知秋闻着空气中交织的板栗香与焦糖烘焙香，眼神格外温柔。
沈知秋：我的店叫「秋屿」，秋天也是我最喜欢的季节。深烘咖啡的木质焦糖韵，刚好能托住栗子泥的绵厚。
林念看着窗外飘落的黄叶，笑着点头。
林念：喝着这杯深烘，吃着栗子蛋糕，就像在秋天的河岸小道上漫步一样踏实。

##### 4. 冬季篇：【冬日暖阳】（巧克力蛋糕 ＋ 热摩卡）
**【插入节点：M30 · 第2个经营日 · 傍晚闭店后 18:30（秋日文化节高潮圆满落幕后、初冬暖冬甜品节开启时，错开M30第5个经营日阶段结算）】**
**【事件ID：EVT_ZHIQIU_CH06_WIN｜主题：巧克力、坚果、温暖】**
寒冬初至，北风吹过街巷，刚刚经历完秋日文化节大捷的林念，端出了微苦丝滑、内夹烤榛子碎的「巧克力蛋糕」来到秋屿咖啡；沈知秋则在热浓缩中加入可可脂与绵密热奶泡，做成了暖手又暖心的「热摩卡」。
林念捧着热气腾腾的摩卡杯呵了一口气。
林念：冬天最幸福的事，就是推门进屋能吃到双倍浓郁的巧克力和热摩卡了！

---

#### 【第三幕：心愿达成与第一本正式菜单（紧接M30第2个经营日晚间触发）】
当冬日暖阳套餐完成试吃，沈知秋从吧台内侧拿出了由叶星河帮忙排版、刚刚印制装帧好的第一版正式画册菜单。
画册封面上印着水彩手绘的栖云镇街景与四组晶莹诱人的咖啡甜点插画——《栖云四季：秋屿咖啡 × 林记烘焙联合出品》。

**【触发CG 05｜栖云四季：秋屿咖啡窗明几净的展示台前，春、夏、秋、冬四组联名咖啡与蛋糕完整陈列，沈知秋将第一本正式印制的《栖云四季》纪念菜单郑重交到林念手中，两人眼中皆是圆满的笑意】**

沈知秋抚过菜单封面上并排印着的两个店名，声音里带着一丝不易察觉的激动。
沈知秋：念念，看着这四组产品整整齐齐印在菜单上的这一刻，我心里那个悬了两年的计划，终于真正落地了。
沈知秋将第一本编号为「NO.001」的正式菜单递到林念手里。
沈知秋：这第一本正式菜单，我想送给你留作纪念。如果没有林记烘焙，没有你一次次陪我试配比、改菜单，这份《栖云四季》永远只能停留在我的旧草稿本上。
林念双手接过那本沉甸甸的菜单，翻开扉页，只见上面有沈知秋亲手写下的一行字：
**【CG：zhiqiu-menu】**
*「致林念：谢谢你让秋屿的咖啡，找到了最恰好的那份甜。」*
林念眼眶微热，抬起头对沈知秋露出了灿烂的笑容。
林念：知秋姐，以后不管过多少个春夏秋冬，我们两家店的四季菜单，都要一直这样写下去！

---

## 四、特别篇：秋屿的灯一直亮着
**【插入节点：M32（第32个月）· 第4个经营日 · 夜晚闭店回家途中 21:00】**
**【前置条件：已完成第六章全部内容，错开M32第2个经营日「点亮城市地图」主线，在林念晚间从蛋糕店点击「回家」经过街道时自动触发】**
**【场景：栖云镇街道 → 秋屿咖啡·夜晚】**
**【事件ID：EVT_ZHIQIU_SP_NIGHT】**
**【状态变更：解锁 \`CG 06｜秋屿的夜晚\`，开启长期自由联名与高阶日常互动】**

M32第4个经营日，是一个安静的夜晚。
晚上九点，林念核对完外地新店的报表，锁好林记烘焙的店门准备回家。
路过街道转角时，她发现原本应该已经打烊的「秋屿咖啡」里，依然亮着一盏温暖的落地灯。
透过擦得干干净净的玻璃窗，可以看到沈知秋正坐在窗边整理当天的经营记录，手边还放着一张画了一半的新菜单草稿。

林念轻轻推开门走了进去。
林念：知秋姐，这么晚了还没回家呀？
沈知秋闻声抬起头，看到是林念，脸上立刻浮现出柔和的笑意。
沈知秋：刚把今天的账目盘完。快进来坐，外头夜风凉，我刚热了一壶低因红茶拿铁。

林念走到窗边坐下，看了一眼桌上的新草稿纸，好奇地问。
林念：知秋姐，你桌上这张草稿……是不是又在筹备什么新的大项目啦？
沈知秋轻轻合上账本，笑着摇了摇头，给林念倒了一杯温热的红茶拿铁。
沈知秋：这次不是什么大项目，也没有给自己定什么必须完成的期限。只是今天下午闻到院子里的桂花香，突然想试几个好玩的新搭配，留着以后慢慢做给熟客尝。

**【触发CG 06｜秋屿的夜晚：静谧的夜色中，秋屿咖啡的暖黄灯光透过玻璃窗洒在青石板街面上；窗内的木桌旁，沈知秋与林念捧着热饮安静对坐，气氛温和而松弛】**

两人坐在窗边，像老朋友一样聊起了各自店里最近的日常趣事——谁家的猫今天蹲在店门口讨食，哪位老街坊又夸了新烤的蛋糕。
聊着聊着，沈知秋看着桌上袅袅升起的热气，轻声开口。

沈知秋：以前我总觉得，开好一家店，就应该把所有事情都安排得妥妥当当。
沈知秋转过头，目光温柔地看向林念。
沈知秋：现在觉得，偶尔留一点空白也不错。

林念捧着温热的杯子，看着窗外宁静的街巷，心里一片柔软。
她突然觉得，沈知秋的这句话，不仅是在说开咖啡店，也说中了自己这几年的成长。
林念：是啊，留一点空白，才有地方装下意外的惊喜和朋友嘛。知秋姐，以后只要看到秋屿的灯还亮着，我下班路过可就要进来讨杯热茶喝咯。
沈知秋眉眼弯弯地笑了。
沈知秋：随时欢迎。只要你在街对面开店，秋屿的这盏灯，就一直给你留着。

旁白：两家街角的小店，两盏彼此守望的暖灯。不必强求把店开到全世界，只要认真经营着自己喜欢的生活，每一天都是最好的季节。

---

## 五、沈知秋的8个日常支线事件完整剧本（精确触发节点与防撞规则）

*（防撞机制说明：日常支线仅在玩家于**每月无主线任务的空闲经营日（优先为每月第1、4、5个经营日）**主动进入「秋屿咖啡」时根据天气、时段和熟悉度触发；若当天已有主线剧情或苏晴月度剧情，则自动顺延，绝不与主线弹窗冲突。）*

### 1. 日常事件一：【今日特调】
**【事件ID：EVT_ZHIQIU_DAILY_01｜具体插入节点：M12起任意空闲经营日 · 上午10:00—12:00访问秋屿咖啡】**

林念刚走进咖啡店，沈知秋便端着一只小巧的玻璃分享壶朝她招了招手。
沈知秋：念念，来得正好，快帮我尝尝今天刚试出来的这杯「青梅冷萃」。
林念接过试饮杯尝了一口，酸甜清爽的青梅果香伴着干净的咖啡尾韵在口中化开。
林念：哇，青梅的酸度把冷萃的果香完全提亮了！知秋姐，这杯要是夏天配我们店里的轻乳酪蛋糕肯定绝配！
沈知秋满意地在便签上打了个勾。
沈知秋：有林店长这句话我就放心了，这一壶算你的试饮福利，带回店里慢慢喝吧。

---

### 2. 日常事件二：【忘记吃午饭】
**【事件ID：EVT_ZHIQIU_DAILY_02｜具体插入节点：M14起任意空闲经营日 · 下午13:30—15:00访问秋屿咖啡】**

下午两点半，林念端着刚出炉的咸味火腿芝士司康走进咖啡店，发现沈知秋正站在吧台后核对豆单，肚子却不合时宜地轻轻叫了一声。
林念忍不住笑了出来，把温热的司康塞到她手里。
林念：沈大店长，我就猜到你一忙起来准又忘了吃午饭！
沈知秋难得有些不好意思地红了耳根，接过司康咬了一口。
沈知秋：上午刚到了一批新的埃塞俄比亚日晒豆，光顾着测研磨度，一看表已经两点多了……还是你的司康来得及时。
林念假装严肃地叉起腰。
林念：以后你要是再忙忘吃饭，我就让知遥每天中午准时来给你送林记员工餐！

---

### 3. 日常事件三：【新买的咖啡杯】
**【事件ID：EVT_ZHIQIU_DAILY_03｜具体插入节点：M16 · 第4个经营日 · 下午自由活动时段（熟悉度 ≥ 40）】**

吧台架子上多了一排素雅的手工粗陶咖啡杯，每一只杯身的釉色纹理都略有不同。
沈知秋正小心翼翼地将它们擦干上架。
林念好奇地拿起一只浅青色的杯子端详。
林念：知秋姐，这批新杯子好漂亮呀，摸起来手感特别温润。
沈知秋眼里闪着喜爱的小光芒，指了指其中一只绘着小小奶油花图案的米白陶杯。
沈知秋：我平时没什么别的爱好，就喜欢收集各种手工陶杯。你看这一只，是我特意托陶艺师多烧的，以后你来秋屿喝咖啡，这只就是林店长的专属杯。
林念开心地捧起那只专属陶杯。
林念：太好看啦！那我明天还要来用它喝拿铁！

---

### 4. 日常事件四：【雨天的客人】
**【事件ID：EVT_ZHIQIU_DAILY_04｜具体插入节点：M18 · 第4个经营日（或任意雨天空闲经营日）· 下午15:00访问秋屿咖啡】**

窗外下着淅淅沥沥的小雨，店里只有两三位熟客在安静看书。
沈知秋把两杯热气腾腾的肉桂拿铁端到窗边，和林念一起看着屋檐滴落的水珠。
林念：以前在学校的时候，我最讨厌下雨天了，出门鞋子容易湿，店里的客人也会变少。
沈知秋轻轻搅动着咖啡，温和地笑了笑。
沈知秋：我倒是很喜欢雨天。晴天的时候大家都急匆匆地赶路，只有下雨天，走进店里的客人才会真正慢下来，安安静静地喝完一整杯热咖啡。
林念听着窗外的雨声与店里的轻音乐，点了点头。
林念：和知秋姐坐在一起听雨，好像连下雨天都变得温柔起来了。

---

### 5. 日常事件五：【旧笔记本】
**【事件ID：EVT_ZHIQIU_DAILY_05｜具体插入节点：M21 · 第1个经营日 · 下午自由活动时段（第五章完成后解锁）】**

午后空闲时，沈知秋把那本旧皮面笔记本放在吧台上，翻开其中夹着一张老照片的一页给林念看。
照片里是几年前留着短发的沈知秋，正站在一台巨大的商用双头咖啡机前专注地拉花。
林念凑过去惊喜地看。
林念：哇，知秋姐以前留短发的样子好干练呀！不过那时候看起来好像比现在严肃一点。
沈知秋看着旧照片，忍俊不禁。
沈知秋：那时候在城里带团队，总觉得不板着脸镇不住场子。哪像现在在栖云镇，天天被你投喂甜点，连脾气都被养甜了。

---

### 6. 日常事件六：【新菜单讨论】
**【事件ID：EVT_ZHIQIU_DAILY_06｜具体插入节点：M31 · 第4个经营日 · 下午自由活动时段（第六章完成后解锁）】**

吧台上摆着几颗刚上市的时令鲜果和两袋新烘焙的拼配豆。
沈知秋朝刚进门的林念招了招手。
沈知秋：念念，上一期的四季联名客人们都很喜欢。我在想，下个月我们可以做一期周末快闪微调版，你最近后厨有什么新灵感吗？
林念立刻来了兴致，趴在吧台上比划起来。
林念：我和小雨这周刚试了一款焦糖海盐风味的奶油夹心，如果配你的冷萃奶咖，咸甜交织肯定很有趣！
沈知秋笑着拿出记录本。
沈知秋：那就这么定了，这周四打烊后，我们再开一场两个人的试吃会。

---

### 7. 日常事件七：【打烊之后】
**【事件ID：EVT_ZHIQIU_DAILY_07｜具体插入节点：M19起任意空闲经营日 · 晚间19:30闭店后访问秋屿咖啡】**

夜色渐深，沈知秋正在清洗浓缩手柄，看到刚锁好林记店门的林念走进来，顺手递给她一杯温热的牛奶。
沈知秋：今天林记的生意怎么样？刚才看你们店门口排了不少人。
林念接过热牛奶喝了一口，放松地靠在吧台边。
林念：今天接了两笔生日定制单，虽然忙了一整天，但客人取蛋糕的时候特别开心。你呢，知秋姐？
沈知秋擦干吧台台面，解下深绿色围裙。
沈知秋：今天也很顺利，老熟客们都按时来了。走吧，正好我也收拾完了，我们一起沿着街道走一段再回家。

---

### 8. 日常事件八：【一份伴手礼】
**【事件ID：EVT_ZHIQIU_DAILY_08｜具体插入节点：M19 / M31 除夕前夕或中秋节当日 · 第2个经营日傍晚访问秋屿咖啡】**

逢年过节这天，林念刚走进秋屿咖啡，沈知秋便从吧台下拿出一只系着深绿色麻绳的牛皮纸礼袋递给她。
沈知秋：节日快乐，念念。这是我昨晚刚烘焙好的节庆拼配挂耳咖啡包，还有一瓶我自己熬的桂花糖浆，带回去给林阿姨和店里的姑娘们尝尝。
林念也笑着把自己带来的节日限定蛋糕礼盒放到吧台上。
林念：知秋姐节日快乐！我就知道你会准备礼物，你看，我们林记的节日礼盒也给你留好头一份啦！

---

## 六、系统联动与收藏图鉴文案附录

### 1. 手机系统联动文案
* **【手机—人物档案：沈知秋】**
  * *基础简介*：「秋屿咖啡」主理人，28岁。温柔理性、做事细致的独立咖啡师。比起盲目扩张，她更希望在栖云镇守好一家能让人随时找回熟悉味道的小店。
  * *满阶寄语（默契伙伴）*：「街对面的灯光，和手边的那杯咖啡一样，都是栖云镇最让人安心的存在。」
* **【手机—通知消息模板（按精确节点推送）】**
  * *M11第4个经营日14:30推送*：「【系统通知】栖云镇街道转角新开了一家『秋屿咖啡』，采购完食材后去看看吧！」
  * *M13第4个经营日15:00推送*：「【沈知秋】念念，这周的试饮咖啡豆已经养好豆了，今天下午四点带几款标准蛋糕样品来秋屿坐坐吧。」
  * *M17第5个经营日13:30推送*：「【系统通知】周末街道游客激增，秋屿咖啡似乎正忙得不可开交，带上补货蛋糕去看看沈知秋吧！」
  * *M21第4个经营日10:00推送*：「【沈知秋】念念，关于我一直想做的那份《栖云四季》菜单，今天上午忙完备料我有空过来找你聊聊吗？」
* **【手机—收藏：沈知秋的旧笔记本】**
  * *图鉴描述*：「一本陪伴了沈知秋五年的深绿色皮面笔记。前半本写满了城市精品咖啡馆时期的专业萃取参数与损耗模型，后半本则画满了栖云镇秋屿咖啡的草图，以及与林念共同完成的《栖云四季》手稿。」

---

### 2. 《秋屿来信》六张专属CG图鉴汇总
| CG编号 | CG名称 | 精确解锁节点 | 收藏图鉴配文 |
| :--- | :--- | :--- | :--- |
| **CG 01** | 《午后初见》 | M11·第4个经营日下午（第一章） | 「木门推开的那一刻，烘焙咖啡豆的香气与温柔的笑意一同落入午后阳光里。」 |
| **CG 02** | 《第一次合作》 | M13·第4个经营日下午（第二章） | 「一口微苦的咖啡，一口清甜的奶油。原来最恰好的搭配，是彼此衬托。」 |
| **CG 03** | 《忙碌的周末》 | M17·第5个经营日闭店后（第四章） | 「原来有时候把事情交给信任的人一起分担，并不意味着自己做得不够好。」 |
| **CG 04** | 《雨天的故事》 | M20·第4个经营日雨天午后（第五章） | 「一家店不一定要有多大。只要有人愿意一次又一次地回来，就很值得高兴了。」 |
| **CG 05** | 《栖云四季》 | M30·第2个经营日闭店后（第六章） | 「春花、夏风、秋栗与冬雪，我们用一年的时间，把整座小镇的四季装进了菜单里。」 |
| **CG 06** | 《秋屿的夜晚》 | M32·第4个经营日夜晚21:00（特别篇） | 「只要你还在街对面烤着蛋糕，秋屿窗边的这盏灯，就一直为你亮着。」 |
`,If=`# 《林记烘焙》三位常客（张奶奶、陈叔、小满）36个月完整人物剧情文案（橙光对话体标准版）\r
\r
## 零、三位常客设定总览与全周期防撞排期表\r
\r
* **叙事核心定位**：\r
\r
  * **张奶奶（67岁，退休小学教师）**——代表**小镇的人情与回忆**（把温暖留给身边的人，重新找回退休生活的乐趣）。\r
\r
  * **陈叔（63岁，退休木工）**——代表**老街的岁月与手艺**（沉默可靠的行动派长辈，重新拾起放下的木工手艺）。\r
\r
  * **小满（9岁→12岁，小学生）**——代表**童真、成长与未来**（喜欢画蛋糕的小女孩，与林记烘焙一同长大）。\r
\r
* **全周期36个月零冲突排期表**（严格错开主线剧情、苏晴月度剧情、沈知秋《秋屿来信》与林暖母女支线）：\r
\r
| 月份 | 常客角色 | 剧情名称 | 唯一事件ID | 精确插入经营日与时段 | 同月其他核心剧情（已错开避撞） | \r
| ----- | ----- | ----- | ----- | ----- | ----- | \r
| **M1** | 小满 | 草莓蛋糕 | \`EVT_XIAOMAN_M01\` | **M1 · 第3个经营日 · 下午16:30** | 第1日清晨主线 / 第1日傍晚林暖 | \r
| **M2** | 张奶奶 | 熟悉的老顾客 | \`EVT_GRANNY_M02\` | **M2 · 第2个经营日 · 上午10:30** | 第1日午后主线 / 第3日傍晚林暖 | \r
| **M3** | 陈叔 | 窗边的老顾客 | \`EVT_UNCLE_M03\` | **M3 · 第1个经营日 · 下午14:30** | 第2日晚上主线 / 第4日下午林暖 | \r
| **M4** | 张奶奶 | 一份小蛋糕 | \`EVT_GRANNY_M04\` | **M4 · 第2个经营日 · 下午14:30** | 第1日林暖 / 第3日主线 / 第4日小满 | \r
| **M4** | 小满 | 奇怪的蛋糕 | \`EVT_XIAOMAN_M04\` | **M4 · 第4个经营日 · 下午16:30** | 第1日林暖 / 第2日张奶奶 / 第3日主线 | \r
| **M6** | 陈叔 | 松动的木架 | \`EVT_UNCLE_M06\` | **M6 · 第1个经营日 · 傍晚17:30** | 第2日林暖 / 第4日夏日生活节 / 第5日结算 | \r
| **M7** | 张奶奶 | 老同事聚会 | \`EVT_GRANNY_M07\` | **M7 · 第1个经营日 · 上午10:00** | 第2日林暖 / 第3—4日除夕主线 / 第5日小满 | \r
| **M7** | 小满 | 一张生日画 | \`EVT_XIAOMAN_M07\` | **M7 · 第5个经营日 · 上午10:30** | 第1日张奶奶 / 第2日林暖 / 第3—4日主线 | \r
| **M9** | 陈叔 | **老招牌（关键剧情）** | \`EVT_UNCLE_M09\` | **M9 · 第4个经营日 · 下午15:30** | 第2日林暖 / 第3日小雨与苏晴生日主线 | \r
| **M10** | 张奶奶 | 桂花的味道 | \`EVT_GRANNY_M10\` | **M10 · 第2个经营日 · 下午15:00** | 第1日主线 / 第3日小满 / 第4日林暖 | \r
| **M10** | 小满 | **失败的作品（关键剧情）** | \`EVT_XIAOMAN_M10\` | **M10 · 第3个经营日 · 下午16:30** | 第1日主线 / 第2日张奶奶 / 第4日林暖 | \r
| **M12** | 陈叔 | 放下的工具 | \`EVT_UNCLE_M12\` | **M12 · 第1个经营日 · 下午15:00** | 第3日主线 / 第4日林暖 / 第5日阶段结算 | \r
| **M13** | 张奶奶 | 读书会的邀请 | \`EVT_GRANNY_M13\` | **M13 · 第3个经营日 · 上午10:30** | 第1日林暖 / 第2日主线 / 第4日沈知秋 | \r
| **M14** | 小满 | 第一次成功 | \`EVT_XIAOMAN_M14\` | **M14 · 第4个经营日 · 下午16:30** | 第1日知遥加入主线 / 第3日林暖 | \r
| **M16** | 陈叔 | 一件小作品 | \`EVT_UNCLE_M16\` | **M16 · 第1个经营日 · 上午11:00** | 第2日婚礼主线 / 第4日林暖与沈知秋 | \r
| **M17** | 张奶奶 | **没有取消的聚会（关键剧情）** | \`EVT_GRANNY_M17\` | **M17 · 第1个经营日 · 下午14:00** | 第2日林暖 / 第3日主线 / 第5日沈知秋 | \r
| **M18** | 小满 | 学校里的画展 | \`EVT_XIAOMAN_M18\` | **M18 · 第2个经营日 · 下午16:30** | 第1日唐鸢加入 / 第3日林暖 / 第4日交叉剧情 | \r
| **M18** | 张奶奶×陈叔 | **共同剧情：老街上的下午** | \`EVT_CROSS_M18\` | **M18 · 第4个经营日 · 下午15:00** | 第1日主线 / 第2日小满 / 第5日阶段结算 | \r
| **M20** | 陈叔 | 木头的温度 | \`EVT_UNCLE_M20\` | **M20 · 第1个经营日 · 下午15:00** | 第2日主线 / 第3日林暖 / 第4日沈知秋 | \r
| **M21** | 张奶奶 | 旧照片 | \`EVT_GRANNY_M21\` | **M21 · 第3个经营日 · 下午15:00** | 第2日主线 / 第4日沈知秋 / 第5日林暖 | \r
| **M22** | 小满 | 夏日水果蛋糕 | \`EVT_XIAOMAN_M22\` | **M22 · 第2个经营日 · 下午16:30** | 第1日沈知秋 / 第3日主线 / 第4日林暖 | \r
| **M24** | 陈叔 | **市集的准备（关键剧情）** | \`EVT_UNCLE_M24\` | **M24 · 第1个经营日 · 下午15:00** | 第2日沈知秋 / 第4日林暖 / 第5日生日主线 | \r
| **M25** | 张奶奶×小满 | 孩子们的读书会 | \`EVT_GRANNY_M25\` | **M25 · 第2个经营日 · 下午15:00** | 第1日主线 / 第3日林暖 / 第4日沈知秋 | \r
| **M25** | 小满 | 市集的小画家 | \`EVT_XIAOMAN_M25\` | **M25 · 第5个经营日 · 上午10:30** | 错开同月第1—4日全部剧情 | \r
| **M28** | 三人共同 | **小满的画 / 一幅画和一个画框** | \`EVT_CROSS_M28\` | **M28 · 第1个经营日 · 下午15:00** | 第2日主线（找回记忆） / 第3日林暖 | \r
| **M29** | 张奶奶 | 特别的生日 | \`EVT_GRANNY_M29\` | **M29 · 第1个经营日 · 上午10:30** | 第2日林暖 / 第3—4日文化节主线 / 第5日小满 | \r
| **M29** | 小满 | 老街上的朋友 | \`EVT_XIAOMAN_M29\` | **M29 · 第5个经营日 · 下午15:30** | 文化节圆满落幕次日触发 | \r
| **M31** | 陈叔 | 老手艺的新用途 | \`EVT_UNCLE_M31\` | **M31 · 第2个经营日 · 下午15:00** | 第1日主线 / 第3日林暖 / 第4日沈知秋 | \r
| **M32** | 小满 | 长大一点点 | \`EVT_XIAOMAN_M32\` | **M32 · 第1个经营日 · 下午16:30** | 第2日主线 / 第3日林暖 / 第4日沈知秋 | \r
| **M33** | 张奶奶 | 重新热闹起来 | \`EVT_GRANNY_M33\` | **M33 · 第2个经营日 · 下午15:00** | 第3日旗舰店设计主线 / 第4日林暖 | \r
| **M34** | 陈叔 | 老招牌的故事 | \`EVT_UNCLE_M34\` | **M34 · 第1个经营日 · 下午15:30** | 第2日主线 / 第4日林暖 | \r
| **M35** | 小满 | 一份特别的礼物 | \`EVT_XIAOMAN_M35\` | **M35 · 第1个经营日 · 下午16:30** | 第2日林暖 / 第4日苏晴相册主线 | \r
| **M36** | 三人共同 | **三份心意并入主线终章** | 见 \`文案v6.md\` 的 \`EVT_M36_MAIN\` | **M36 · 第5个经营日 10:00 庆典现场** | 已取消单独支线，全部并入 M36《我们都在这里》 | \r
\r
## 一、张奶奶——把温暖留给身边的人（67岁｜退休小学教师）\r
\r
* **性格与习惯**：温和、细心、健谈，偶尔有些固执；不愿麻烦别人，买蛋糕时常借口说带给老朋友，实则是自己也想尝尝；最爱桂花栗子蛋糕、原味奶油蛋糕与柠檬磅蛋糕。\r
\r
### 1. M2｜熟悉的老顾客\r
\r
**【插入节点：M2 · 第2个经营日 · 上午营业时段 10:30】**\r
**【事件ID：EVT_GRANNY_M02】**\r
\r
上午十点半，阳光照进干净的前厅。\r
身穿素雅碎花衬衫、头发梳理得一丝不乱的张奶奶推门走进店里，手里还挎着一只装有两本书的布袋。\r
看到站在柜台后的林念，张奶奶温和地笑了起来。\r
\r
张奶奶：哟，今天不是阿暖看店，换成我们小念念当家啦？\r
林念笑着迎上去。\r
林念：张奶奶好！我上个月刚从大学毕业回来，现在妈妈把店交给我打理啦。您今天还是要点一小块少糖的原味奶油蛋糕吗？\r
张奶奶欣慰地点了点头。\r
张奶奶：对，只要一小块就够了，多了吃不完浪费。我看着你从小背着书包在店门口跑进跑出，一晃眼都成大姑娘了。\r
林念把打包好的小方盒递到张奶奶手里。\r
林念：张奶奶您拿好！刚接手店务，我还有好多地方怕做不好呢。\r
张奶奶拍了拍林念的手背，眼神像当年在讲台上看学生一样慈爱。\r
张奶奶：别怕，万事开头难。当年你妈妈刚接班的时候也常常紧张，你这孩子从小做事就认真，慢慢适应，千万别把自己累坏了。\r
\r
### 2. M4｜一份小蛋糕\r
\r
**【插入节点：M4 · 第2个经营日 · 下午茶时段 14:30】**\r
**【事件ID：EVT_GRANNY_M04】**\r
\r
周四下午，张奶奶准时来到店里，站在展示柜前看了好一会儿。\r
张奶奶：念念，今天给奶奶拿一份原味奶油蛋糕，嗯……要是刚烤出来的柠檬磅蛋糕还有的话，也切薄薄的一小片。\r
林念笑吟吟地帮她装盒。\r
林念：张奶奶，今天家里有老姐妹来喝茶呀？\r
张奶奶眼神微微闪了一下，假装自然地扶了扶老花镜。\r
张奶奶：啊……是呀，给老姐妹带的……\r
话音刚落，张奶奶发现自己忘了带外带布袋，干脆在靠窗的木桌旁坐了下来，自己拿起小叉子津津有味地吃了起来。\r
林念端着一杯温水走过去，忍俊不禁。\r
张奶奶脸颊微红，随即大方地笑了出来。\r
张奶奶：好吧，瞒不过你这鬼灵精。什么带给老姐妹呀，其实就是我自己馋这一口了！以前教书的时候天天备课改作业，总觉得吃甜点是小孩子的事；退休以后才想通，每周四下午来林记吃一小块蛋糕，就是我给自己的小奖励。\r
林念笑着把温水放在她手边。\r
林念：那以后每周四下午，我都给张奶奶留最松软的那一块！\r
\r
### 3. M7｜老同事聚会\r
\r
**【插入节点：M7 · 第1个经营日 · 上午 10:00】**\r
**【事件ID：EVT_GRANNY_M07】**\r
\r
这天一早，张奶奶拿着一张手写的名单来到柜台前，神情格外精神。\r
张奶奶：念念，下周是我们镇小退休老教师的年度茶话会，轮到我来张罗。我想跟你们店预订二十份适合老年人吃的小蛋糕，不知道方不方便？\r
林念立刻拿出定制订单本。\r
林念：当然方便！张奶奶，老老师们平时在口味上有什么需要特别注意的吗？\r
张奶奶从口袋里掏出一张记得清清楚楚的小纸条。\r
张奶奶：你看，李老师牙口不好要绵软一点的，王老师不能吃太甜，赵老师最喜欢带点柠檬清香的……年纪大了，能聚在一起喝杯茶不容易，我想让大家都能吃得舒心。\r
林念看着纸条上娟秀工整的字迹，心里满是敬意。\r
林念：张奶奶您放心，我一定按您写的备注，把这二十份小蛋糕分门别类做好标贴！\r
\r
### 4. M10｜桂花的味道\r
\r
**【插入节点：M10 · 第2个经营日 · 下午 15:00】**\r
**【事件ID：EVT_GRANNY_M10】**\r
\r
十月金桂飘香，张奶奶散步来到店里，肩头还落着两片细碎的桂花瓣。\r
闻着店里的香气，张奶奶坐在窗边，眼神有些怀念。\r
\r
张奶奶：一闻到十月的桂花香，我就想起二十多年前还在镇小当班主任的时候。那时候学校操场边有一排老桂花树，每到秋天期中考试结束，我都会来找你外婆和你妈妈买一大盒桂花糕，切成小块分给班里的孩子们。\r
林念托着腮在桌边听得入神。\r
林念：做张奶奶的学生也太幸福了吧！\r
张奶奶轻轻叹了口气，眼里带着温柔的笑意。\r
张奶奶：那时候每天听着教室里叽叽喳喳的读书声，虽然吵得脑仁疼，但心里特别充实。现在退休好些年了，家里安安静静的，每到桂花开的时候，还真有点想念当年那群调皮捣蛋的小家伙呢。\r
\r
### 5. M13｜读书会的邀请\r
\r
**【插入节点：M13 · 第3个经营日 · 上午 10:30】**\r
**【事件ID：EVT_GRANNY_M13】**\r
\r
第二年开春，张奶奶走进店里时脚步都比平时轻快了不少。\r
张奶奶：念念，跟你说个好消息！我和几位退休的老邻居商量好了，准备在社区活动室办一个「梧桐树下读书会」，每个月大家聚在一起读读书、聊聊家常。\r
林念由衷地替她高兴。\r
林念：太棒了张奶奶！有您这位老教师主持，读书会一定特别有意思！\r
张奶奶笑眯眯地看向林念。\r
张奶奶：读书会光喝白开水可不行，我想正式邀请我们林记烘焙当读书会的特约茶点师，每次活动帮我准备一小篮原味蛋糕和柠檬磅蛋糕，你看怎么样？\r
林念拍着胸脯答应下来。\r
林念：包在我身上！每次读书会我都给您准备最新鲜的茶点！\r
\r
### 6. M17｜没有取消的聚会（关键剧情）\r
\r
**【插入节点：M17 · 第1个经营日 · 下午 14:00—17:00】**\r
**【事件ID：EVT_GRANNY_M17｜状态变更：解锁《社区读书会纪念CG》、解锁「桂花奶油蛋糕配方线索」与张奶奶专属人物回忆】**\r
\r
这天是社区读书会原本定好聚会的日子。\r
然而下午两点，张奶奶却独自一人来到林记烘焙前厅，神情有些落寞地欲言又止。\r
\r
林念正在将烤好的柠檬磅蛋糕装盒，抬头看到张奶奶，连忙迎上去。\r
林念：张奶奶，我正准备让知遥把今天的读书会茶点给您送到活动室去呢，您怎么亲自跑来啦？\r
张奶奶有些不好意思地摆了摆手，声音低了下来。\r
张奶奶：念念，对不起呀，今天这批茶点……要是还没切的话，能不能先帮奶奶退掉？只算我一个人的那一份就行。\r
林念愣了一下，关切地问。\r
林念：怎么啦张奶奶？是今天的读书会出什么岔子了吗？\r
张奶奶叹了口气，不想给别人添麻烦似地勉强笑了笑。\r
张奶奶：这个月正好赶上好几家老姐妹去外地帮儿女带孩子，还有两位老同事犯了风湿腿疼出不了门。到今天中午一看，报名的只剩下三个人了……我想着就三个人，干脆把这次活动取消算了，免得折腾大家。\r
\r
林念看着张奶奶怀里那本贴满了彩色批注签、准备了整整半个月的散文集，心里一阵酸楚。\r
她立刻解下围裙，转身对后厨的周雨桐和前厅的许知遥交代了一声，随后端起那篮香气四溢的茶点，温和而坚定地挽住张奶奶的胳膊。\r
林念：张奶奶，三个人也是读书会呀！您准备了这么久的读书笔记，怎么能取消呢？既然活动室太大显得冷清，今天下午我们就把读书会搬到咱们街心公园的紫藤花架下办一场「春日主题下午茶读书会」！我去帮您把另外两位腿脚不便的爷爷奶奶请出来晒太阳！\r
\r
在林念和许知遥的热情张罗下，紫藤花架下的小木桌铺上了温馨的桌布，摆上了温热的桂花红茶、柠檬磅蛋糕与原味奶油切块。\r
不仅原本报名的三位老朋友到了，连路过公园的陈叔和几位散步的老街坊也被蛋糕香与朗读声吸引过来，围坐了一整圈。\r
\r
**【触发张奶奶专属CG｜没有取消的聚会：春光融融的紫藤花架下，戴着老花镜的张奶奶捧着书卷微笑朗读，林念在一旁为老人们添茶递糕，周围坐满了认真倾听的老街坊】**\r
\r
活动结束后，张奶奶摸着微热的眼眶，从书页里抽出一张自己珍藏多年的手写古法糖桂花配比卡递给林念。\r
张奶奶：念念，今天要不是你，我这老太太差点就因为抹不开面子把读书会给关了。这张是我母亲当年教我的古法桂花蜜渍方子，做进你的奶油蛋糕里一定好吃。谢谢你帮奶奶守住了这群老朋友的聚会。\r
\r
旁白：【系统提示：完成张奶奶关键剧情《没有取消的聚会》！解锁「桂花奶油蛋糕配方线索」、读书会专属装饰与张奶奶人物CG！】\r
\r
### 7. M21｜旧照片\r
\r
**【插入节点：M21 · 第3个经营日 · 下午 15:00】**\r
**【事件ID：EVT_GRANNY_M21】**\r
\r
秋高气爽的午后，张奶奶来店里喝下午茶时，从布袋里拿出一本边角磨损的旧影集给林念看。\r
翻开影集，里面是一张张黑白与早年彩色的毕业班大合照，年轻时的张奶奶站在孩子们中间，风华正茂。\r
\r
林念指着其中一张照片第三排的小姑娘，惊讶地睁大了眼睛。\r
林念：张奶奶！这、这不是我妈妈小时候吗？！\r
张奶奶笑得合不拢嘴。\r
张奶奶：可不是嘛！你妈妈读小学四年级的时候，我正好教她们班语文。那时候阿暖在班里最文静，但每次写作文写到外婆的烤炉，字里行间全是香气。\r
林念看着照片里十岁出头的母亲和年轻的张奶奶，只觉得岁月奇妙而温暖。\r
张奶奶轻声感慨道。\r
张奶奶：一晃眼四十年过去了，当年的小阿暖成了林大姐，她的女儿又成了林店长。能守在栖云镇看着你们两代人长大，就是我当老师这辈子最幸福的事。\r
\r
### 8. M25｜孩子们的读书会（与小满交集）\r
\r
**【插入节点：M25 · 第2个经营日 · 下午 15:00】**\r
**【事件ID：EVT_GRANNY_M25】**\r
\r
自从上次户外下午茶之后，张奶奶的社区读书会越办越红火，最近更是新开了一个周末「少儿绘本故事角」。\r
这天下午，张奶奶带着几个小朋友来店里买小蛋糕，排在最前面的正是林记的小常客——小满。\r
\r
小满举着画册开心地向林念炫耀。\r
小满：林念姐姐！我现在每周都去张奶奶的故事角听故事哦！张奶奶讲的童话比电视上还好听，我还给张奶奶讲的故事配了插画呢！\r
张奶奶慈爱地摸了摸小满的羊角辫。\r
张奶奶：小满这孩子可聪明了，我刚讲完故事，她三两下就能把里面的小动物和蛋糕画出来。念念，现在每周听着这群孩子的笑声，我感觉自己又回到三十年前站在讲台上的时候了！\r
\r
### 9. M29｜特别的生日\r
\r
**【插入节点：M29 · 第1个经营日 · 上午 10:30】**\r
**【事件ID：EVT_GRANNY_M29】**\r
\r
这天上午，几位三十多岁、西装革履的青年男女走进林记烘焙，找到林念。\r
原来他们都是张奶奶二十年前教过的学生，如今在各地工作，得知这周是张奶奶六十七岁生日，特意相约回栖云镇给恩师过生日，委托林念制作一只「讲台与金桂」主题的双层生日蛋糕。\r
\r
生日会当天，当林念端着缀满金桂与书卷糖牌的桂花栗子蛋糕送到社区活动室时，被学生们围在中间的张奶奶惊喜得捂住了嘴。\r
学生代表：张老师，还记得以前每年秋天您请我们吃林记的桂花糕吗？今天换我们请您吃林记的桂花栗子蛋糕，祝您健康长寿！\r
张奶奶眼含热泪地切开蛋糕，向林念投去了感激而温暖的目光。\r
\r
### 10. M33｜重新热闹起来\r
\r
**【插入节点：M33 · 第2个经营日 · 下午 15:00】**\r
**【事件ID：EVT_GRANNY_M33】**\r
\r
进入第三年后期，张奶奶的「梧桐树下读书会」已经发展成了栖云镇每周固定的品牌文化活动，既有白发苍苍的老街坊，也有放学来画画读绘本的小朋友。\r
张奶奶特意送来一张手写的烫金邀请卡，邀请林念与母亲林暖常去读书会坐坐。\r
\r
张奶奶：念念，以前刚退休那几年，我总觉得人老了就没用处了。是你们林记的一块块下午茶甜点，帮我把老街坊和孩子们重新聚拢在了一起，让我的退休日子重新热闹了起来。\r
\r
## 二、陈叔——老街上一直没变的熟悉身影（63岁｜退休木工）\r
\r
* **性格与习惯**：话不多、做事认真、冷面热心肠的行动派；曾经帮林暖修过柜台和招牌，退休后一度放下木工工具，在林念的邀请下重新找回手艺乐趣；最爱栗子蛋糕、巧克力蛋糕与传统海绵蛋糕。\r
\r
### 1. M3｜窗边的老顾客\r
\r
**【插入节点：M3 · 第1个经营日 · 下午 14:30】**\r
**【事件ID：EVT_UNCLE_M03】**\r
\r
接手林记的第三个月，林念注意到了店里一位雷打不动的常客——住在老街西头的退休木工陈叔。\r
他每次都在下午两点半左右推门进来，话不多，只是指一指传统海绵蛋糕或巧克力蛋糕，然后坐在靠窗最角落的旧木桌旁，配着自带的保温杯浓茶安安静静地吃完。\r
\r
这天下午，陈叔刚走进店门，还没开口，林念便微笑着将切好的一块传统海绵蛋糕和一块减糖黑巧切块端到了靠窗的木桌上。\r
林念：陈叔您来啦！今天的海绵蛋糕刚出炉十分钟，温度正好，您坐着慢慢吃。\r
一贯沉默寡言的陈叔愣了一下，看了看桌上的蛋糕，黝黑朴实的脸上露出一丝难得的笑意。\r
陈叔：……记性不错，跟阿暖那时候一样细心。\r
陈叔坐下吃了一口，轻轻点了点头。\r
陈叔：火候很正，手艺没丢。\r
\r
### 2. M6｜松动的木架\r
\r
**【插入节点：M6 · 第1个经营日 · 傍晚闭店前 17:30】**\r
**【事件ID：EVT_UNCLE_M06】**\r
\r
这天傍晚，林念正在把烤好的面包盘往墙边的双层木质展示架上摆，木架右侧的榫卯支架因为年头太久，忽然发出「吱呀」一声轻响，微微晃动了一下。\r
正在窗边喝完最后一口茶的陈叔听到声音，立刻放下保温杯走过来，伸手托住了木架边缘。\r
\r
陈叔：先把托盘拿下来，右边这根立柱的楔子松了，再往上压重物要塌。\r
林念连忙把面包盘端下来。\r
林念：啊，谢谢陈叔提醒！我明天去街上找找看有没有修家具的师傅。\r
陈叔没多说话，转身走出店门。\r
正当林念以为陈叔已经回家了的时候，不过五分钟，陈叔便拎着一只磨得发亮的帆布工具包大步走了回来。\r
他熟练地蹲下身，拿出木工锤、刨刀和两块备用的老榆木楔子，叮叮当当地敲打校准了十几分钟，原本摇晃的展示架瞬间变得稳如泰山。\r
\r
林念感激地递上一盒打包好的栗子切块。\r
林念：陈叔，太谢谢您了！这盒蛋糕您一定得收下，算是修理费！\r
陈叔摆了摆手，把工具收回帆布包里，只拿走了桌上一块普通的原味海绵蛋糕。\r
陈叔：顺手敲两锤子的事，街坊四邻的，算什么修理费。那盒好的留着卖钱吧，我走了。\r
\r
### 3. M9｜老招牌（关键剧情）\r
\r
**【插入节点：M9 · 第4个经营日 · 下午 15:30】**\r
**【事件ID：EVT_UNCLE_M09｜状态变更：解锁林暖旧日回忆碎片与陈叔老街往事】**\r
\r
九月秋风渐起，林念站在店门口擦拭那块挂了二十多年的「林记烘焙」胡桃木老招牌。\r
路过的陈叔停下脚步，背着手仰头看了那块木招牌许久，伸手摸了摸招牌右下角一道严丝合缝的燕尾榫补丁。\r
\r
陈叔看着门口的招牌，缓缓开口。\r
陈叔：这块牌子，我还记得。当年林暖刚接手的时候，边角有些松动，我帮她重新修过。\r
\r
林念惊讶地顺着陈叔手指的方向看去——那块燕尾榫嵌入得极为精巧，她从小看到大，还以为本来就是招牌上的雕花纹路。\r
林念：陈叔，原来店门口这块招牌当年是您帮我妈妈修好的呀！\r
陈叔眼里难得流露出一丝温和的追忆。\r
陈叔：那都是二十多年前的事了。那年秋天刮大风，这块老木牌从横梁上摔下来磕裂了一角，你妈妈那时候才二十出头，急得抱着木牌跑到我木匠铺门口掉眼泪，说这是你外婆留下的念想，不能换新的。\r
林念静静地听着，仿佛看到了年轻时的母亲。\r
陈叔拍了拍结实的木框。\r
陈叔：我当时花了三天工夫，用百年老胡桃木给她下了两个暗榫锁死，跟她说保准能再挂三十年。一转眼，都传到你手里了，这木头还跟当年一样硬朗。\r
\r
### 4. M12｜放下的工具\r
\r
**【插入节点：M12 · 第1个经营日 · 下午 15:00】**\r
**【事件ID：EVT_UNCLE_M12】**\r
\r
入冬后的一天下午，陈叔来店里买蛋糕时，林念注意到他双手干干净净的，再也没有了以前指缝里常年带着的淡淡松木刨花味。\r
林念递过热茶，随口关切地问了一句。\r
林念：陈叔，最近天冷了，看您好像好久没在院子里做木活儿啦？\r
陈叔端着茶杯的手顿了一下，不在意似地笑了笑。\r
陈叔：年纪大了，眼睛也没以前好使了。现在街上年轻人买家具都去商场买现成的板材货，谁还用得着老木匠手工打东西呀？前阵子我把铺子里的刨子和凿子都抹了油，封进箱子里收起来了。\r
林念听出陈叔语气背后那一丝英雄无用武之地的落寞，心里默默记下了这件事。\r
\r
### 5. M16｜一件小作品\r
\r
**【插入节点：M16 · 第1个经营日 · 上午 11:00】**\r
**【事件ID：EVT_UNCLE_M16】**\r
\r
为了筹备店里的定制蛋糕展示与新品陈列，林念跑了好几家日用杂货铺，买回来的塑料或铁艺蛋糕托盘总觉得冷冰冰的，配不上林记温暖的手作质感。\r
这天上午，林念特意画了一张草图，等到陈叔来店里时，诚恳地递到了他面前。\r
\r
林念：陈叔，我想请您帮我们林记个大忙！店里最近上了新品，我买了好多现成的铁架子都不好看，只有您做的实木器皿最有温度。您能不能出山帮我们店里做一件小型的双层旋转木质蛋糕托盘呀？\r
陈叔看着草图，原本平静的双眼一下子亮了起来，却还嘴硬地嘀咕了一句。\r
陈叔：我工具都收起来好几个月了，手生了……\r
林念笑着把草图塞进他手里。\r
林念：全栖云镇谁不知道陈叔的榫卯手艺是头一份呀！工钱和木料钱我按规矩付，再加未来一个月的栗子蛋糕！\r
陈叔看着尺寸图，手指不自觉地在桌面上比划起下料的角度，嘴角终于压不住地扬了起来。\r
陈叔：……行吧，既然你们小辈开店用得着，我回去把刨子拿出来试试。\r
\r
五天后，陈叔捧来了一座不用一颗铁钉、打磨得如绸缎般温润的樱桃木双层蛋糕架。看着客人们围着木架啧啧称奇，陈叔背着手站在窗边，眼里重新有了光彩。\r
\r
### 6. M20｜木头的温度\r
\r
**【插入节点：M20 · 第1个经营日 · 下午 15:00】**\r
**【事件ID：EVT_UNCLE_M20】**\r
\r
自从帮林记做了那件旋转木托盘后，陈叔又恢复了每天在自家小院里刨木头的习惯。\r
这天下午来店里吃栗子蛋糕时，陈叔主动跟林念聊起了自己年轻时学艺的故事。\r
\r
陈叔：做木工跟你们做蛋糕其实是一个理儿。好木头是有脾气的，春天潮、秋天燥，下刨子的时候得顺着木纹的走向走，急不得，也省不得力气。\r
林念认真地听着。\r
林念：难怪您做的木架子摸起来那么舒服，一点毛刺都没有。\r
陈叔喝了一口热茶，温和地看了林念一眼。\r
陈叔：机器冲出来的板子虽然快，但摸上去是凉的；只有人手一寸一寸打磨出来的木头，才带着人的温度。你们林记的蛋糕也是这样，别把那点温度弄丢了。\r
\r
### 7. M24｜市集的准备（关键剧情）\r
\r
**【插入节点：M24 · 第1个经营日 · 下午 15:00】**\r
**【事件ID：EVT_UNCLE_M24｜状态变更：解锁「木质市集展示架」「特殊摊位装饰」与《陈叔专属人物CG》】**\r
\r
林记烘焙即将参加大型小镇市集挑战，林念和许知遥、小雨正在前厅清点市集要带的几十款大小不一的切块、整寸蛋糕与伴手礼盒，却发现普通的平铺折叠桌根本摆不下这么多品类，叠放起来又容易挡住后排的商品。\r
\r
正当林念对着摊位平面图犯愁时，坐在窗边的陈叔走了过来，低头看了一眼桌上的尺寸单。\r
陈叔：要去赶大市集了？\r
林念苦笑着点了点头。\r
林念：是呀陈叔，市集给的标准摊位只有两米宽，我们这次带的品种多，普通桌子摆不开，正愁怎么陈列呢。\r
陈叔拿起铅笔，在图纸背面几笔勾勒出一套三层阶梯式可拆卸的榫卯木质展架结构。\r
陈叔：普通桌子当然摆不开。用这种三层阶梯折叠木架，底下卡住保温冰盒，上面按尺寸留出圆盘槽和方盒槽，到了市集现场三分钟就能插销拼好，收摊拆开一提就能走。\r
林念惊喜地看着那张精妙的结构图。\r
林念：陈叔！这个设计太实用了！可是离市集开集只有四天了，做这么大一套展架会不会太赶？\r
陈叔把图纸折好揣进兜里，干脆利落地摆了摆手。\r
陈叔：家里正好有几块烘干好的老松木，四天够了。你们安心备你们的蛋糕，架子交给我。\r
\r
**【触发陈叔专属CG｜市集的准备：洒满夕阳的木工房小院里，木屑与刨花在光柱中飞舞，精神矍铄的陈叔戴着老花镜，正全神贯注地用木刨打磨一套精巧的三层阶梯式木质蛋糕展示架】**\r
\r
市集开集前一天，陈叔准时将那套散发着淡淡松木清香的定制展示架送到了店里。\r
当林记的蛋糕摆上这套独一无二的木质展架出现在市集上时，立刻成为了全场最亮眼的摊位！\r
旁白：【系统提示：完成陈叔关键剧情《市集的准备》！解锁小镇市集专属加成道具「木质市集展示架」、特殊摊位装饰及陈叔人物CG！】\r
\r
### 8. M28｜小满的画（详见第四部分三人交叉共同剧情 M28）\r
\r
**【插入节点：M28 · 第1个经营日 · 下午 15:00｜事件ID：EVT_UNCLE_M28 / EVT_CROSS_M28】**\r
*（小满希望把自己的画装裱起来，陈叔答应帮她制作小木画框，并与张奶奶一起完成首次三人完整互动，详见第四部分。）*\r
\r
### 9. M31｜老手艺的新用途\r
\r
**【插入节点：M31 · 第2个经营日 · 下午 15:00】**\r
**【事件ID：EVT_UNCLE_M31】**\r
\r
自从帮林记做了市集展架、又帮小满做了小画框之后，老街坊和来林记买蛋糕的年轻客人们纷纷打听是谁做的木器。\r
这天下午，陈叔来店里时，破天荒地带了一小袋自己用边角料雕的小木勺、小蛋糕名牌支架和小木马摆件，放在吧台边。\r
\r
陈叔有些不好意思地咳了一声。\r
陈叔：在家里闲着也是闲着，刨了点小玩意儿。你们店里要是有带小孩来的客人，或者摆价目牌用得着，就留着用吧。\r
林念拿起一只雕着小松鼠图案的甜品木勺，爱不释手。\r
林念：陈叔，这些小木器太精致了！我们在展示柜旁边专门给您辟一个「老街木艺角」吧，既能当我们的特色餐具，喜欢木艺的客人也能认识您的老手艺！\r
陈叔嘴上说着「随便你折腾」，眼角的笑纹却深深地漾了开来——他彻底找回了退休生活里最纯粹的快乐。\r
\r
### 10. M34｜老招牌的故事\r
\r
**【插入节点：M34 · 第1个经营日 · 下午 15:30】**\r
**【事件ID：EVT_UNCLE_M34】**\r
\r
当林记的品牌新店与旗舰店相继落成后，栖云镇最初的老店也迎来了一次维护保养。\r
陈叔主动搬来梯子，把老店门口那块挂了三十多年的胡桃木老招牌取了下来，花了一整天时间，用古法蜂蜡和桐油一点点为它做了一次深度封护保养。\r
\r
重新挂回门头时，老招牌既保留了岁月沉淀的温润包浆，又焕发出沉稳的光泽。\r
陈叔拍了拍双手，抬头看着招牌对林念说。\r
陈叔：外头的新店开得再大、灯牌再亮，老街的这块木头牌子也得一直挂在这儿。有它在，林记的根就在。\r
\r
## 三、小满——喜欢画蛋糕的小女孩（9岁→12岁｜栖云镇小学生）\r
\r
* **性格与习惯**：活泼、直率、好奇心强，说话充满童真年龄感；随身背着一本小画册和彩铅盒，最崇拜能把面粉变成漂亮蛋糕的林念姐姐；最爱草莓奶油蛋糕、芒果慕斯与一切造型可爱的小蛋糕。\r
\r
### 1. M1｜草莓蛋糕\r
\r
**【插入节点：M1 · 第3个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M01】**\r
\r
下午四点半，镇中心小学放学的铃声刚过不久。\r
一个背着黄色小书包、扎着两个圆圆羊角辫的九岁小女孩跑进店里，把小鼻子凑在玻璃展示柜前，目不转睛地盯着里面红彤彤的草莓奶油蛋糕。\r
\r
林念蹲下身，笑眯眯地隔着玻璃柜跟她打招呼。\r
林念：小朋友，放学啦？是不是想吃草莓奶油蛋糕呀？\r
小女孩眨了眨大眼睛，数了数手里攥着的零花钱硬币，脆生生地开口。\r
小满：漂亮姐姐！我叫小满！今天我数学口算拿了一百分，妈妈奖励了我零花钱，让我自己来林记买我最喜欢的草莓蛋糕！\r
林念挑了一块草莓最大、奶油花最饱满的切块装进小盒子里，还在盒盖上贴了一张草莓贴纸递给她。\r
林念：恭喜小满拿一百分！给，这是姐姐奖励你的最大颗草莓！\r
小满接过蛋糕盒，开心地原地蹦了一下。\r
小满：哇！姐姐你好厉害呀，能把白白的奶油变成小云朵，还能把草莓变成小皇冠！等我吃完这块蛋糕，我要把你的草莓小皇冠画进我的画册里！\r
\r
### 2. M4｜奇怪的蛋糕\r
\r
**【插入节点：M4 · 第4个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M04】**\r
\r
这天放学后，已经成为店里常客的小满一进门，就献宝似地从书包里掏出一本涂得五颜六色的小画册，啪地翻开举到林念面前。\r
小满：林念姐姐，快看快看！这是我昨天晚上设计的超级无敌大蛋糕！\r
林念凑过去一看，只见画纸上画着一座足有五层楼高、长着彩虹翅膀、顶上还立着一只喷火小恐龙和十颗大草莓的奇特蛋糕。\r
林念忍俊不禁地睁大眼睛。\r
林念：哇，小满，这个蛋糕还会飞呀？\r
小满一手叉腰，一脸认真地比划着。\r
小满：对呀！第一层是草莓味，第二层是芒果味，翅膀是棉花糖做的！林念姐姐，你这么厉害，以后能不能做出会飞的彩虹恐龙蛋糕呀？\r
林念笑着摸了摸她的小脑袋。\r
林念：会飞的翅膀姐姐还得修炼一下，不过用棉花糖和水果做出彩虹层次的蛋糕，姐姐倒是可以为你试试看哦！\r
\r
### 3. M7｜一张生日画\r
\r
**【插入节点：M7 · 第5个经营日 · 上午 10:30】**\r
**【事件ID：EVT_XIAOMAN_M07】**\r
\r
寒假里的一天上午，小满捏着一张画满了向日葵和小兔子图案的画纸跑进店里，小脸上带着几分焦急。\r
小满：林念姐姐，明天是我同桌朵朵的生日！我画了一只小兔子向日葵蛋糕想送给她，可是……可是画纸不能吃，我也不知道怎么把画变成真正的蛋糕……\r
林念接过那张充满童趣的画纸，温和地笑着安慰她。\r
林念：小满别急，画纸虽然不能吃，但我们可以照着你的画，用黄油奶油挤出向日葵花瓣，再用蛋白糖做出立耳朵的小兔子呀！\r
林念带着小满站在后厨玻璃窗外，照着她的画一步步把小兔子装饰摆上六寸蛋糕。\r
小满看着画纸上的图案一点点变成香喷喷的实物，眼睛里仿佛盛满了小星星。\r
小满：天呐！林念姐姐你真的有魔法！我的画活过来啦！\r
\r
### 4. M10｜失败的作品（关键剧情）\r
\r
**【插入节点：M10 · 第3个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M10｜状态变更：解锁《小满的第一张蛋糕设计图》、解锁「特殊蛋糕外观设计灵感」与《小满专属回忆CG》】**\r
\r
这天下午放学后，小满没有像往常那样蹦蹦跳跳地跑进店里，而是低着头慢吞吞地推开门，怀里抱着那本小画册，眼圈红红的，手心里还攥着一团揉皱的画纸。\r
她走到靠窗的木桌旁坐下，把下巴抵在桌面上，连最喜欢的草莓蛋糕端上来都没动叉子。\r
\r
林念擦干手走过去，在小满身边蹲下身，轻声询问。\r
林念：小满，今天怎么不开心呀？是谁欺负我们家小画家了吗？\r
小满吸了吸鼻子，把手心里那团揉皱的画纸慢慢展开推给林念看。\r
画纸上画着一只双层秋日水果蛋糕，但因为水彩颜料涂得太急，草莓红和芒果黄洇在了一起，边缘的线条也画歪了。\r
\r
小满扁着嘴巴，声音闷闷的。\r
小满：学校美术社团今天布置作业，让画一幅「最喜欢的甜点设计图」。我想把林念姐姐店里最好看的蛋糕画出来，可是我画了三张都涂花掉了……同桌画的苹果又圆又整齐，我是不是根本没有画画的天赋呀？\r
\r
林念看着垂头丧气的小满，是转身去后厨端来了一碟造型有些歪斜、边缘还烤焦了一小块的戚风试验品，加上一小碗刚打发好的奶油和几颗草莓，放在小满面前。\r
小满愣愣地看着那块烤歪的小蛋糕。\r
小满：林念姐姐，这块蛋糕怎么长歪啦？\r
林念笑着拿起小勺，温和地看着小满的眼睛。\r
林念：这是姐姐前天在后厨研发新口味时烤失败的第一炉样品呀。你看，在做出展示柜里那些漂亮的蛋糕之前，姐姐也会把蛋糕烤塌、把奶油打花。\r
林念轻轻抚平小满那张皱巴巴的画纸，柔声说道：\r
林念：做蛋糕也是这样呀。第一次做不好，就再试一次。\r
\r
**【触发小满专属CG｜失败的作品：暖黄色的午后阳光下，林念蹲在木桌旁，用裱花袋在那块微歪的小蛋糕上挤出一朵可爱的奶油笑脸，小满破涕为笑地重新拿起画笔】**\r
\r
小满看着那朵歪歪扭扭却格外可爱的奶油笑脸，噗哧一声破涕为笑，用力擦了擦眼角。\r
小满：原来林念姐姐也会做坏蛋糕呀！那、那我也再试一次！这次我等第一层颜色干了再涂第二层！\r
小满趴在木桌上，一边吃着草莓蛋糕，一边认认真真地重新画了起来。\r
半小时后，一幅色彩明快、充满童真灵气的《彩虹草莓云朵蛋糕设计图》终于诞生了！\r
小满开心地把第一张原稿双手送给林念。\r
小满：林念姐姐，这张我最满意的设计图送给你！以后我们一起做新蛋糕！\r
\r
旁白：【系统提示：完成小满关键剧情《失败的作品》！获得收藏品《小满的第一张蛋糕设计图》、解锁设计工作室「童趣特殊蛋糕外观灵感」及小满专属CG！】\r
\r
### 5. M14｜第一次成功\r
\r
**【插入节点：M14 · 第4个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M14】**\r
\r
四个月后的一天下午，小满举着一张贴着小红花的奖状，像只快乐的小麻雀一样冲进了林记烘焙！\r
小满：林念姐姐！知遥姐姐！小雨姐姐！你们快看！我上次重画的那张蛋糕设计图，在学校美术社团评比里拿到一等奖啦！\r
许知遥和周雨桐纷纷围过来鼓掌欢呼，林念更是端出一份早就为她准备好的迷你双球草莓蛋糕作为庆功礼。\r
小满挺起小胸脯，骄傲地宣布。\r
小满：美术老师说我画的蛋糕看着就能闻到香味！我跟老师说了，那是因为我有全世界最厉害的林念姐姐当指导老师！\r
\r
### 6. M18｜学校里的画展\r
\r
**【插入节点：M18 · 第2个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M18】**\r
\r
第二年年中，镇中心小学举办校园开放日画展，十岁的小满特意送来了一张她自己手绘的邀请门票。\r
小满：林念姐姐，这次学校画展的主题是《我最喜欢的栖云镇角落》，我画的就是我们林记烘焙哦！\r
林念趁着下午空闲去学校参观时，在展板正中央看到了小满的画——暖奶油色的店门、盛开的木绣球、挂着围裙微笑的林念，还有窗边喝茶的陈叔与看书的张奶奶，整幅画充满了蓬勃的暖意。\r
\r
### 7. M22｜夏日水果蛋糕\r
\r
**【插入节点：M22 · 第2个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M22｜状态变更：获得夏日缤纷水果蛋糕研发线索】**\r
\r
盛夏午后，满头大汗的小满跑进店里，翻开自己已经画满了一半的第二本画册。\r
小满：林念姐姐，夏天太热啦！我昨天做梦梦到了一座「水果游泳池蛋糕」——里面有黄色的大芒果、紫色的蓝莓、粉色的水蜜桃，全都泡在冰冰凉凉的酸奶冻里！\r
正在旁边整理配方的周雨桐和叶星河听得眼睛一亮。\r
周雨桐：水果游泳池！念念姐，小满这个点子太适合做我们今年的盛夏限定新品了！\r
林念笑着捏了捏小满的脸颊。\r
林念：我们的小满设计师，现在都能给林记提供正式的新品研发线索啦！\r
\r
### 8. M25｜市集的小画家\r
\r
**【插入节点：M25 · 第5个经营日 · 上午 10:30】**\r
**【事件ID：EVT_XIAOMAN_M25】**\r
\r
小镇市集周末开集这天，满十一岁、个子长高了一截的小满主动带着画板来到林记烘焙的市集摊位前。\r
在叶星河的指导下，小满坐在摊位一角，现场为林记绘制手绘插画宣传牌与「买蛋糕送简笔画小卡片」。\r
她笔下圆滚滚的桂花兔子和草莓小熊萌翻了路过的游客，不少年轻人和小朋友为了拿到一张小满手绘的甜品卡，专门排起长队购买林记的蛋糕！\r
\r
### 9. M29｜老街上的朋友\r
\r
**【插入节点：M29 · 第5个经营日 · 下午 15:30】**\r
**【事件ID：EVT_XIAOMAN_M29】**\r
\r
因为经常在林记烘焙画画，又参加了张奶奶的周末读书会、请陈叔做过画框，小满渐渐和店里的其他常客也成了忘年交。\r
这天下午，小满翻开画册给林念看她新开的专栏——《林记里的好朋友》。\r
第一页是戴着老花镜讲故事的张奶奶，第二页是拿着木工锤修架子的陈叔，第三页是端着相机的苏晴姐姐和林记的所有姐姐们。\r
小满托着下巴笑嘻嘻地说。\r
小满：以前我来林记只是为了吃草莓蛋糕，现在我每次来，都能见到好多好多好朋友！\r
\r
### 10. M32｜长大一点点\r
\r
**【插入节点：M32 · 第1个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M32】**\r
\r
进入第三年冬天，即将升入小学六年级的小满已经褪去了刚出场时的稚气，变成了一个文静干练不少的小少女。\r
这天放学后，她抱来整整三大本画满的速写本，坐在店里认真地按时间顺序做分类整理。\r
\r
林念端来一杯热可可放到她手边。\r
林念：小满，这三年你居然已经画完三大本画册啦？\r
小满看着第一本第一页那只歪歪扭扭的草莓皇冠，不好意思地笑了。\r
小满：林念姐姐，你看我九岁那年画的第一张蛋糕，线条都是抖的；再看现在画的透视和光影，星河姐姐都夸我进步神速呢！我决定了，等我以后考大学，我也要像星河姐姐和苏晴姐姐一样学美术，回来给林记当一辈子的甜品画师！\r
\r
### 11. M35｜一份特别的礼物\r
\r
**【插入节点：M35 · 第1个经营日 · 下午放学后 16:30】**\r
**【事件ID：EVT_XIAOMAN_M35】**\r
\r
距离林记三周年庆典只剩最后一个月，小满来店里时总是神神秘秘地把一本新画册藏在书包最里层，连吃草莓蛋糕的时候都在偷偷观察店里的每一个角落。\r
小满：林念姐姐，你别偷看哦！我在准备一份超级厉害的三周年大礼，等下个月店庆那天再送给你！\r
\r
## 四、三位常客之间的交叉群像剧情（小镇熟人圈联动）\r
\r
*（设计说明：让张奶奶、陈叔与小满在林记烘焙这方小小空间里自然相遇、彼此温暖，构成鲜活立体的小镇生活图景。**三周年的三份心意已并入主线终章 M36《我们都在这里》，此处不再单独拆分。**）*\r
\r
### 1. M18 共同剧情：《老街上的下午》（张奶奶 × 陈叔）\r
\r
**【插入节点：M18（第18个月）· 第4个经营日 · 下午 15:00】**\r
**【场景：蛋糕店前厅·靠窗木桌】**\r
**【事件ID：EVT_CROSS_M18｜前置条件：已完成张奶奶M17与陈叔M16剧情】**\r
\r
这是一个阳光慵懒的午后。\r
陈叔像往常一样坐在靠窗的木桌旁喝茶吃海绵蛋糕，恰好张奶奶也挎着书袋走进店里买柠檬磅蛋糕。\r
两位老街坊一照面，熟稔地打起了招呼。\r
\r
张奶奶笑眯眯地在陈叔对面的椅子上坐下。\r
张奶奶：老陈，今天没在院子里刨木头，也来念念这儿偷闲啦？\r
陈叔给张奶奶倒了一杯热茶，点了点头。\r
陈叔：张老师今天不也没去读书会嘛。刚听念念说，店里准备往临江市那边看铺子了，这小丫头比她妈当年胆子大。\r
\r
林念端着两碟试吃新品走过来，好奇地坐在两位长辈旁边。\r
林念：张奶奶，陈叔，你们认识好多年了吧？我们林记最开始在老街开张的时候，你们就常来吗？\r
张奶奶和陈叔相视一笑，话匣子一下子打开了。\r
张奶奶：何止认识呀，老陈年轻那会儿手艺好，我们镇小教室里的讲台和黑板框，全是他带徒弟打的。三十多年前你外婆刚开林记的时候，这街上还没有柏油路，全是青石板。\r
陈叔指了指前厅靠里的那根老木柱。\r
陈叔：那时候你们店只有半间门面，连张像样的桌子都没有。张老师每次下课来买鸡蛋糕，都是站在门口捧着油纸包吃；后来阿暖接了班，找我打了两张方木桌摆在窗边，我和张老师才算在你们店里有了落脚的地儿。\r
张奶奶感慨地看着如今敞亮温馨的店铺。\r
张奶奶：是啊，老街上的铺子换了一茬又一茬，只有林记的烤蛋糕香，和老陈你敲木头的声音，陪着我们这帮老骨头走过了大半辈子。\r
\r
林念静静地听着两位老人你一言我一语地拼凑出老街与林记的旧时光，只觉得手里的每一块蛋糕都多了一份沉甸甸的分量。\r
\r
### 2. M28 共同剧情：《一幅画和一个画框》（张奶奶 × 陈叔 × 小满 三人首次完整同框）\r
\r
**【插入节点：M28（第28个月）· 第1个经营日 · 下午 15:00】**\r
**【场景：蛋糕店前厅】**\r
**【事件ID：EVT_CROSS_M28｜前置条件：已完成张奶奶M25、陈叔M24与小满M25剧情】**\r
\r
秋日的午后，林记烘焙前厅格外热闹。\r
张奶奶正坐在窗边翻看新一期的读书会绘本，小满背着画板跑进店里，手里小心翼翼地捧着两幅刚刚画好的水彩画。\r
\r
小满跑到张奶奶身边，先把第一幅画递了过去。\r
小满：张奶奶！你看，这是我画的《张奶奶在窗边看书》！上次在读书会看阳光照在您的银头发上特别好看，我就画下来送给您啦！\r
张奶奶戴上老花镜一看，画上的老太太坐在林记的花窗下捧书微笑，连桌上的柠檬磅蛋糕都画得惟妙惟肖。\r
张奶奶惊喜得合不拢嘴，连连夸奖。\r
张奶奶：哎哟，我们小满现在画得真是越来越有灵气了！你看这光影和配色，比画报上印的还好看！\r
\r
小满得到夸奖，小脸红扑扑的，随后又拿起手里的第二幅画——那是一幅画着栖云老街与林记烘焙门头的秋日长卷，只是画纸边缘有些软，小满有些犯愁地看向坐在旁边的陈叔。\r
小满：陈爷爷，这幅《秋天的林记》我想好好保存起来，可是画纸放进书包里总是容易卷边……陈爷爷您那么会做木头宝贝，能不能帮我做一个小小的木头画框呀？\r
一贯严肃的陈叔看着仰着小脸期待地望着自己的小满，冷峻的眉眼瞬间柔和了下来。\r
陈叔接过画纸，拿手掌比量了一下长宽尺寸。\r
陈叔：能做。用老松木刨四根窄边条，开个十字小榫口，再压一片薄玻璃，明天下午你放学过来拿。\r
\r
第二天下午，当陈叔真的带来那只打磨得光滑无比、还雕了一朵小小草莓浮雕的实木画框帮小满把画装裱好时，小满开心得欢呼起来，当场又掏出画本，刷刷几笔为陈叔画了一幅《认真刨木头的陈爷爷肖像》回赠给他。\r
张奶奶在旁边笑眯眯地看着一老一小互送礼物，林念端出三份热腾腾的栗子蛋糕摆上桌——店堂里满是跨越了三代人的欢声笑语。\r
\r
## 五、三位常客的剧情奖励、手机档案与系统关联汇总\r
\r
### 1. 玩法与系统解锁对照表\r
\r
| 常客姓名 | 关联核心玩法 | 解锁特殊配方 / 装饰 / 纪念物 | \r
| ----- | ----- | ----- | \r
| **张奶奶** | 定制订单、蛋糕制作、社区节日活动 | ① 配方线索：\`桂花奶油蛋糕\` | \r
\r
② 店铺装饰：\`梧桐读书会书架与花瓶\`\r
\r
③ 终局纪念物：《张奶奶与读书会的感谢信》 |\r
| **陈叔** | 店铺装修、后厨设备维护、小镇市集活动 | ① 店铺装饰：\`樱桃木双层旋转托盘\`、\`修复版百年老招牌\`\r
\r
② 市集道具：\`三层榫卯木质市集展示架\`（大幅提升市集陈列上限与美观度）\r
\r
③ 终局纪念物：《金丝楠木三周年纪念木牌》 |\r
| **小满** | 后厨实验台研发、设计工作室、手机图鉴收藏 | ① 研发线索：\`盛夏水果游泳池慕斯\`\r
\r
② 设计工作室灵感：\`彩虹草莓云朵外观\`、\`手绘童趣菜单牌\`\r
\r
③ 终局纪念物：《小满的手绘林记三年画册》 |\r
\r
### 2. 手机系统「人物—常客档案」文案\r
\r
* **【张奶奶（67岁｜退休小学教师）】**\r
\r
  * *常购偏好*：桂花栗子蛋糕、少糖原味奶油蛋糕、柠檬磅蛋糕。\r
\r
  * *档案寄语*：「她把大半辈子的耐心留给了讲台，又在林记的一块块下午茶甜点里，重新找回了被老友与孩童环绕的热闹晚年。」\r
\r
* **【陈叔（63岁｜退休木工）】**\r
\r
  * *常购偏好*：传统海绵蛋糕、减糖巧克力蛋糕、栗子蛋糕。\r
\r
  * *档案寄语*：「他从不说漂亮话，却用一双布满老茧的手，替两代店主守住了门口的招牌，也重新拾起了热爱的木工手艺。」\r
\r
* **【小满（9岁→12岁｜小学生）】**\r
\r
  * *常购偏好*：草莓奶油蛋糕、芒果慕斯、造型可爱的小切块。\r
\r
  * *档案寄语*：「趴在展示柜前数硬币的小女孩，在林记的奶油香气里长高了一大截，用画笔把三年的甜味永远留在了纸上。」`,Ef={林念:"lin-nian",林暖:"mom",苏晴:"sura",沈知秋:"zhiqiu",周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe",张奶奶:"granny",陈叔:"uncle",小满:"xiaoman"};function ps(e){return Ef[e]||""}function ro(e,n){const t=e[n];if(!t||t.t!=="phoneMessage")return"";if(t.who!=="林念")return ps(t.who);for(let s=n-1;s>=0;s--)if(!(e[s].t!=="phoneMessage"||e[s].who==="林念"))return ps(e[s].who);return""}function _l(e,n){return`story:${e}:${n+1}`}function vs(e,n){Array.isArray(e.phoneMessages)||(e.phoneMessages=[]);const t=e.phoneMessages.find(l=>l.id===n.id);if(t)return n.read&&(t.read=!0),t;const s={...n,read:!!n.read};return e.phoneMessages.push(s),s}function Tf(e,n){const t=new Map((n||[]).map(s=>[s.id,s]));(e.played||[]).forEach(s=>{const l=t.get(s);if(!l)return;let o=0,i="";const c=v=>(v||[]).forEach(m=>{var p,_,g;if(m.t==="phoneMessage"){const h=ps(m.who),C=m.who==="林念"?i:h;C&&vs(e,{id:_l(l.id,o++),eventId:l.id,contactId:C,sender:m.who==="林念"?"player":C,text:m.text,read:!0}),h&&h!=="lin-nian"&&(i=h)}else if(m.t==="choice"){const h=(_=(p=e.storyChoices)==null?void 0:p[l.id])==null?void 0:_[m.node];Number.isInteger(h)&&((g=m.options)!=null&&g[h])&&c(m.options[h].branch),m.after&&c(m.after)}});c(l.beats)})}const Ut={林念:"林念",苏晴:"苏晴",林暖:"林暖",周雨桐:"周雨桐",小雨:"周雨桐",许知遥:"许知遥",知遥:"许知遥",唐鸢:"唐鸢",阿鸢:"唐鸢",叶星河:"叶星河",星河:"叶星河",陈奶奶:"陈奶奶",张叔:"张叔",李婶:"李婶",赵叔:"赵叔",沈知夏:"沈知夏",许佳宁:"许佳宁",沈妍:"沈妍",沈知秋:"沈知秋",张奶奶:"张奶奶",陈叔:"陈叔",小满:"小满",顾客:"顾客"},ns={周雨桐:"xiaoyu",许知遥:"zhiyao",唐鸢:"kexin",叶星河:"qinghe"},so={xiaoyu:"小雨",zhiyao:"知遥",kexin:"阿鸢",qinghe:"星河"},xf={tradition:"传统",innovation:"创新",efficiency:"效率",community:"社区"},wf={一:1,二:2,三:3,四:4,五:5,六:6},Sf=/^(林念|苏晴|林暖|沈知秋|周雨桐|许知遥|唐鸢|叶星河|张奶奶|陈叔|小满|陈奶奶|张叔|李婶|赵叔|沈知夏|许佳宁|沈妍|小雨|知遥|阿鸢|星河|顾客)(?:（([^）]{1,12})）)?([^：:]{0,24})[：:]\s*(.+)$/;function kl(e,n){if(!e)return!0;if(e.trust){for(const t of Object.keys(e.trust))if((n.partnerTrust[t]||0)<e.trust[t])return!1}if(e.momBond&&(n.momBond||0)<e.momBond)return!1;if(e.played){for(const t of e.played)if(!n.played.some(s=>s.indexOf(t)>=0))return!1}if(e.style){const t=n.style||{},s=t[e.style.id]||0;if(s<e.style.min)return!1;const l=Object.keys(t).filter(o=>o!==e.style.id).map(o=>t[o]||0);if(s-Math.max(0,...l)<e.style.lead)return!1}return!0}function ts(e,n){const t=[];for(const s of e||[])s.t==="cond"?t.push(...ts(kl(s.test,n)?s.then:s.else,n)):s.t==="choice"?t.push({...s,options:(s.options||[]).map(l=>({...l,branch:ts(l.branch||[],n)})),after:ts(s.after||[],n)}):t.push(s);return t}function zr(e,n,t){e.lastIndex=0;let s=e.exec(n);for(;s;)t(s),s=e.exec(n)}function Af(e,n){const t=[];if(!e)return t;zr(/(tradition|innovation|efficiency|community)Score\s*\+\s*(\d+)/g,e,l=>{t.push({k:"style",id:l[1],v:Number(l[2]),label:xf[l[1]]+" +"+l[2]})}),zr(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*\+\s*(\d+)/g,e,l=>{const o=Ut[l[1]];t.push({k:"trust",id:ns[o],v:Number(l[2]),label:l[1]+"信赖 +"+l[2]})}),zr(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)?专业能力\s*\+\s*(\d+)/g,e,l=>{const o=l[1]?Ut[l[1]]:n,i=ns[o];i&&t.push({k:"skill",id:i,v:Number(l[2])/10,label:(l[1]||so[i])+"专业 +"+l[2]})});const s=Object.keys(Ut);return zr(/信赖度\s*\+\s*(\d+)/g,e,l=>{const o=e.slice(0,l.index);if(s.some(c=>o.endsWith(c)))return;const i=ns[n];i&&(t.some(c=>c.k==="trust"&&c.id===i)||t.push({k:"trust",id:i,v:Number(l[1]),label:so[i]+"信赖 +"+l[1]}))}),/顾客忠诚度增加|忠诚度提升/.test(e)&&t.push({k:"loyalty",v:4,label:"忠诚 +4"}),t}function rr(e){const n={};let t=!1;const s=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)信赖度\s*[≥>=]+\s*(\d+)/);s&&(n.trust={[ns[Ut[s[1]]]]:Number(s[2])},t=!0);const l=e.match(/家庭默契\s*[≥>=]+\s*(\d+)/);l&&(n.momBond=Number(l[1]),t=!0);const o=e.match(/familyHarmony\s*[≥>=]+\s*(\d+)/);o&&(n.momBond=Number(o[1]),t=!0);const i=e.match(/(tradition|innovation|efficiency|community)Score\s*[≥>=]+\s*(\d+)/);i&&(n.style={id:i[1],min:Number(i[2]),lead:15},t=!0);const c=e.match(/领先[^0-9]{0,4}(\d+)/);c&&n.style&&(n.style.lead=Number(c[1]));const v=e.match(/M(\d+)/);return v&&/已完成|完成M/.test(e)?(n.played=["M"+v[1]],t=!0):/原创配方研发剧情/.test(e)?(n.played=["M21"],t=!0):/个人作品展/.test(e)&&(n.played=["M25"],t=!0),t?n:null}function sr(e){return e.replace(/[（(]\s*`?(?:cake|city|EVT|shop)-?[A-Za-z0-9_]*`?\s*[）)]/g,"").replace(/`/g,"").trim()}function Zr(e,n){const t=e.trim();if(!t||/^\|/.test(t))return;if(t.startsWith("旁白")){const l=t.match(/^旁白\s*(?:（([^）]*)）)?\s*[：:]\s*(.*)$/);n.push({t:"nar",who:l&&l[1]?l[1]:"",text:sr(l?l[2]:t)});return}if(/^\*\*[^*]+\*\*$/.test(t)){n.push({t:"nar",text:sr(t.replace(/\*\*/g,""))});return}if(/^\*（.+）\*$/.test(t)||/^\*\(.+\)\*$/.test(t)){n.push({t:"note",text:t.replace(/^\*[（(]|[）)]\*$/g,"").trim()});return}const s=t.match(Sf);if(s){const l=Ut[s[1]];n.push({t:/手机消息|短信/.test(s[2]||"")&&ps(l)?"phoneMessage":"say",who:l,emo:s[2]||"",text:sr(s[4].replace(/\*\*/g,""))});return}n.push({t:"nar",text:sr(t.replace(/\*\*/g,""))})}function dn(e,n={}){const t=[],s={ids:[],month:null,kind:null,test:null,title:"",cond:null};let l="main",o=t,i=null,c=null,v=null,m=null,p=null,_=0,g=!0;const h=()=>l==="branch"&&c?c.branch:l==="then"&&v?v.then:l==="else"&&v?v.else:l==="inline"&&p?p.then:o,C=b=>h().push(b);for(const b of e){const E=b.trim();if(!E){g=!0;continue}if(E.startsWith(">")){let x=E.replace(/^>+\s*/,"").trim();if(!x)continue;const Q=x.match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(Q&&/玩家选择节点/.test(Q[1])){l="main",p=null;const le=Q[1],B=le.match(/节点\s*([\d.\-]+)/),G=le.match(/[：:]\s*(.+)$/);i={t:"choice",node:B?B[1]:"",prompt:G?G[1].trim():le,options:[],after:[]},C(i);continue}const pe=x.match(/^[-*]\s*\*\*选项([A-Z])[：:](.+?)\*\*(.*)$/);if(pe&&i){const le=Of([x,i.prompt].join(" ")),B=pe[3]||"";i.options.push({label:pe[2].trim(),hint:B.replace(/^[（(]|[）)]$/g,"").trim(),gains:Af(B,le),branch:[]});continue}/^\*[（(].+[）)]\*$/.test(x)&&i&&(i.note=x.replace(/^\*[（(]|[）)]\*$/g,"").trim());continue}const w=E.replace(/^[*-]\s+/,"").trim().match(/^\*{0,2}【(.+?)】\*{0,2}(.*)$/);if(w){const x=w[1],Q=(w[2]||"").replace(/^[：:]\s*/,"").trim();if(x.indexOf("事件ID")>=0){x.split("｜").forEach(he=>{const be=he.search(/[：:]/);if(be<0)return;const ge=he.slice(0,be).trim(),z=he.slice(be+1).trim();if(ge==="事件ID")s.ids.push(z.replace(/`/g,""));else if(ge==="场景")C({t:"scene",text:z});else if(ge==="触发月份"||ge==="触发时间"){const re=z.match(/M(\d+)/);re&&(s.month=Number(re[1]))}else if(ge==="触发条件"){/新游戏开始|开始游戏/.test(z)&&(s.kind="prologue");const re=rr(z);re&&(s.cond=re)}});continue}if(/^(触发条件|状态变更|初始状态|检查条件|注意|系统提示)/.test(x))continue;const pe=x.match(/^触发(张奶奶|陈叔|小满|群像)(?:专属)?CG\s*[｜|：:]\s*([^：:｜|]+)/);if(pe){const N={"张奶奶|没有取消的聚会":"regular-granny-m17","陈叔|市集的准备":"regular-uncle-m24","小满|失败的作品":"regular-xiaoman-m10","群像|我们都在这里":"regular-group-m36"}[pe[1]+"|"+pe[2].trim()];N&&C({t:"cg",key:N});continue}if(/^(场景|插入回忆|接续回忆|回忆片段|回到现在|闪回|时间|地点)/.test(x)){C({t:"scene",text:x.replace(/^场景\s*[：:]\s*/,"")}),Q&&C({t:"nar",text:Q});continue}const le=x.match(/^触发(母女)?CG\s*(\d+)\s*[｜|：:]\s*([^：:｜|]+)/);if(le){const N=le[1]?"mom":"zhiqiu";C({t:"cg",key:N+"-"+String(le[2]).padStart(2,"0")});continue}const B=x.match(/^CG\s*[：:]\s*(.+)$/i);if(B){C({t:"cg",key:B[1].trim()});continue}if(/^CG\s*(结束|收起)/.test(x)){C({t:"cgend"});continue}const G=x.match(/^分支([A-Z])(?:[：:](.*))?$/);if(G&&i){const N=G[1].charCodeAt(0)-65;for(;i.options.length<=N;)i.options.push({label:"选项"+String.fromCharCode(65+i.options.length),hint:"",gains:[],branch:[]});c=i.options[N],l="branch",p=null,Q&&C({t:"nar",text:sr(Q)});continue}if(/^(主线汇合|汇合|汇合点)$/.test(x)){l="main",p=null,i&&(o=i.after),Q&&C({t:"nar",text:Q});continue}const O=x.match(/^高养成解锁分支[：:]\s*(.*)$/),oe=x.match(/^普通保底分支[：:]\s*(.*)$/);if(O||oe){if(O)p=null,v={t:"cond",test:rr(O[1])||{},then:[],else:[]},m=v,t.push(v),l="then";else{const N=m&&m.else.length===0?m:null;N?(v=N,l="else"):l="main"}continue}if(/^若/.test(x)){const N=rr(x);N&&(v={t:"cond",test:N,then:[],else:[]},t.push(v),p=v,l="inline",_=0,g=!1,Q&&Zr(Q,h()));continue}const A=x.match(/^第[一二三四五六七八九十]+幕[：:]\s*(.*)$/);if(A){const N=rr(A[1]),he=A[1].replace(/[（(]\s*若[^）)]*[）)]/g,"").trim();C({t:"act",text:he,test:N||null}),Q&&C({t:"nar",text:Q});continue}Q&&C({t:"nar",text:Q});continue}const S=E.match(/^\*\*\s*(\d+\.\s*)?(.+?)\s*\*\*$/);if(S&&/协助|结局|相册|档案/.test(S[2])){l="main",p=null,C({t:"scene",text:S[2].replace(/[：:]\s*$/,"")});continue}if(l==="inline"&&p){const x=[];Zr(E,x);const Q=x[0],pe=Q&&Q.t==="nar";if(g&&_>0&&pe){l="main",p=null,Zr(E,o),g=!1;continue}x.forEach(le=>p.then.push(le)),g&&(_+=1),g=!1;continue}Zr(E,h()),g=!1}return i&&i.options.forEach(b=>{b.branch.length||(b.branch=[])}),s.title=n.title||"",{beats:Nf(t),meta:s}}function Nf(e){const n=[];let t=0;for(;t<e.length;){const s=e[t];if(s.t==="act"&&s.test){let l=t+1;for(;l<e.length&&e[l].t!=="act";)l++;n.push({t:"cond",test:s.test,then:e.slice(t,l),else:[]}),t=l}else n.push(s),t++}return n}function Of(e){const n=e.match(/(小雨|知遥|阿鸢|星河|周雨桐|许知遥|唐鸢|叶星河)/);return n?Ut[n[1]]:""}function Yl(e){const n={level:1,text:"",lines:[],children:[]},t=[n];for(const s of e.split(/\r?\n/)){const l=s.match(/^(#{1,6})\s+(.*)$/);if(l){const o=l[1].length;for(;t.length>1&&t[t.length-1].level>=o;)t.pop();const i={level:o,text:l[2].trim(),lines:[],children:[]};t[t.length-1].children.push(i),t.push(i)}else t[t.length-1].lines.push(s)}return n}function Pf(e){const n=Yl(e),t=[],s={},l={},o={},i={},c={},v=[];let m=0;const p=h=>(h.order=m++,t.push(h),h),_=[];for(const h of n.children)h.level===1?_.push(...h.children):_.push(h);for(const h of _){const C=h.text||"";if(/^序幕/.test(C)){const{beats:b,meta:E}=dn(h.lines,{title:"序幕 · 回家"});p({id:E.ids[0]||"EVT_PROLOGUE_01",ids:E.ids,title:"序幕 · 回家",chapter:"",month:0,kind:"prologue",test:null,beats:b});continue}if(/^第[一二三四五六]章/.test(C)){for(const b of h.children){const E=b.text,T=/结算/.test(E)&&/(月末|目标)/.test(E),w=E.match(/M(\d+)/),S=w?Number(w[1]):null;if(T&&!w)continue;if(T){const B=ao(E,S),G=dn(b.lines,{title:E}),O=G.beats;if(G.meta.ids.length&&p({id:G.meta.ids[0],ids:G.meta.ids,title:Lt(E),chapter:C,month:S,kind:"main",test:G.meta.cond,beats:O}),!B)continue;s[B]=s[B]||{pass:[],failId:"",failBeats:[]};for(const oe of b.children){const A=Yr(oe.text);if(!A)continue;const N=dn(oe.lines,{title:oe.text});A==="pass"?s[B].pass=N.beats:(s[B].failBeats=N.beats,s[B].failId=N.meta.ids[0]||"",N.meta.ids.length&&p({id:N.meta.ids[0],ids:N.meta.ids,title:lo(oe.text,N.beats),chapter:C,month:null,kind:"short",test:null,beats:N.beats}))}continue}const{beats:x,meta:Q}=dn(b.lines,{title:E});if(!Q.ids.length)continue;let pe=Q.cond,le=S??Q.month;pe&&!le&&(le=Q.month);for(const B of b.children){if(Yr(B.text))continue;const G=dn(B.lines,{title:B.text});G.beats.length&&(x.push({t:"scene",text:B.text.replace(/^【|】$/g,"")}),x.push(...G.beats))}if(p({id:Q.ids[0],ids:Q.ids,title:Lt(E),chapter:C,month:le,kind:"main",test:pe,beats:x}),b.children.length){const B=ao(E,le),G=b.children.filter(O=>Yr(O.text));if(B&&G.length){s[B]=s[B]||{pass:[],failId:"",failBeats:[]};for(const O of G){const oe=Yr(O.text),A=dn(O.lines,{title:O.text});oe==="pass"?s[B].pass=A.beats:(s[B].failBeats=A.beats,s[B].failId=A.meta.ids[0]||"",A.meta.ids.length&&p({id:A.meta.ids[0],ids:A.meta.ids,title:lo(O.text,A.beats),chapter:C,month:null,kind:"short",test:null,beats:A.beats}))}}}}continue}if(/^附篇一/.test(C)){for(const b of h.children){const{beats:E,meta:T}=dn(b.lines,{title:b.text}),w=T.cond||rr(b.text)||{};p({id:T.ids[0]||"EVT_STYLE_"+m,ids:T.ids,title:Lt(b.text),chapter:C,month:null,kind:"style",test:w,beats:E})}continue}if(/^附篇二/.test(C)){for(const b of h.children){const E=b.text.match(/^M(\d+)\s*[｜|]\s*(.+)$/);if(!E)continue;const T=Number(E[1]),w=b.lines.filter(pe=>!/^\*\*第.+章互动/.test(pe.trim())),S=dn(w,{title:E[2]}),x=S.meta.ids[0]||"EVT_FRIEND_M"+T,Q={id:x,ids:S.meta.ids.length?S.meta.ids:[x],title:E[2],chapter:"与苏晴的每月互动",month:T,kind:"friend",test:null,beats:S.beats};l[T]=Q,p(Q)}continue}if(/^附篇三/.test(C)){let b=0;for(const E of h.children){const T=E.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);if(!T)continue;const w=dn(E.lines,{title:T[2]}),S=w.meta.ids[0]||"EVT_TUTORIAL_"+T[1];p({id:S,ids:w.meta.ids.length?w.meta.ids:[S],title:T[2],chapter:"新手教程",month:null,kind:"tutorial",order:b++,test:null,beats:w.beats})}continue}if(/^附篇三/.test(C)){let b=0;for(const E of h.children){const T=E.text.match(/^(T\d+)\s*[｜|]\s*(.+)$/);if(!T)continue;const w=dn(E.lines,{title:T[2]}),S=w.meta.ids[0]||"EVT_TUTORIAL_"+T[1];p({id:S,ids:w.meta.ids.length?w.meta.ids:[S],title:T[2],chapter:"新手教程",month:null,kind:"tutorial",order:b++,test:null,beats:w.beats})}continue}if(/^第十三章/.test(C)){for(const b of h.children){if(/^13\.7/.test(b.text)){for(const w of b.children){const S=Rf(w.text);if(!S)continue;const x=[];for(const Q of w.lines){const pe=Q.trim();if(/^【触发条件/.test(pe))continue;const le=pe.match(/^[-*]\s*\*\*【(.+?)】\*\*\s*(.*)$/);le?x.push({title:le[1],text:(le[2]||"").trim()}):x.length&&pe&&!/^[-*#]/.test(pe)&&(x[x.length-1].text+=(x[x.length-1].text?`
`:"")+pe)}x.length&&(c[S]=x)}continue}const{beats:E,meta:T}=dn(b.lines,{title:b.text});T.ids.length&&p({id:T.ids[0],ids:T.ids,title:Lt(b.text),chapter:C,month:null,kind:"final",test:null,beats:E})}continue}if(/^第十四章/.test(C)){for(const b of h.children)for(const E of b.lines){const T=E.trim(),w=T.match(/^\|\s*(M\d+|初始)\s*\|([^|]*)\|([^|]*)\|([^|]*)\|([^|]*)\|/);if(w){const Q=w[3].replace(/`/g,"").trim().replace(/^cake-/,"");Q&&(o[Q]={hint:w[4].trim(),flavor:w[5].trim()});continue}const S=T.match(/^\d+\.\s*\*\*(.+?)（.*?）\*\*[：:]\s*(.+)$/);S&&(i[S[1]]=S[2])}continue}}t.length||v.push("没有解析出任何事件，检查 v5_0.md 是否还在根目录");const g={events:t,stages:s,friend:l,codex:o,cityText:i,partnerEndings:c,warnings:v};return g.find=h=>t.find(C=>C.id===h||(C.ids||[]).includes(h))||null,g}function Lt(e){return e.replace(/^M\d+\s*[｜|]\s*/,"").replace(/[（(]\s*(?:含|可选)[^）)]*[）)]/g,"").replace(/^【|】$/g,"").trim()}function lo(e,n){const t=e.match(/《(.+?)》/);if(t)return t[1];const s=n.find(l=>l.t==="nar");return s?s.text.slice(0,12):e}function Yr(e){return e?/未达标/.test(e)?"fail":/达标/.test(e)?"pass":"":""}function ao(e,n){const t=e.match(/第([一二三四五六])阶段/);return t?wf[t[1]]:n?Math.ceil(n/6):null}function Rf(e){return/周雨桐|小雨/.test(e)?"xiaoyu":/许知遥/.test(e)?"zhiyao":/唐鸢/.test(e)?"kexin":/叶星河/.test(e)?"qinghe":/林暖/.test(e)?"mom":""}function Hi(e,n,t){const s=[],l=Yl(e),o=i=>{const c=i.lines.join(`
`),v=c.match(/【[^】]*事件ID[：:]\s*`?(EVT_(?:MOM|ZHIQIU)_[A-Z0-9_]+)/);if(v){const m=v[1],p=dn(i.lines,{title:i.text}),_=i.text+`
`+c,g=_.match(/M(\d+)/),h=i.text.split(/[｜|]/).pop().trim(),C=_.match(/familyHarmony\s*\+\s*(\d+)/),b=_.match(/(?:解锁|补全)旧物收藏《([^》]+)》/),E=_.match(/(?:插入节点|具体插入节点)[^\n】]*第(\d+)个经营日/),T=_.match(/(?:母女)?CG\s*(\d+)/),w=_.match(/familyHarmony\s*[≥>=]+\s*(\d+)/),S=b?b[1].replace(/[（(].*?[）)]/g,""):"";s.push({id:m,ids:[m],title:h||Lt(i.text),chapter:n==="mom"?"林暖 · 和妈妈聊聊":"沈知秋 · 秋屿来信",month:g?Number(g[1]):null,day:E?Number(E[1]):1,kind:n,storyline:n,bondGain:C?Number(C[1]):0,bondRequired:w?Number(w[1]):0,keepsake:S,cgId:T?(n==="zhiQiu"?"zhiqiu":"mom")+"-"+String(T[1]).padStart(2,"0"):"",beats:p.beats,order:t+s.length})}i.children.forEach(o)};if(l.children.forEach(o),n==="zhiQiu"){const i={EVT_ZHIQIU_CH02:"念念，这周的试饮咖啡豆已经养好豆了，今天下午四点带几款标准蛋糕样品来秋屿坐坐吧。",EVT_ZHIQIU_CH06_A:"念念，关于我一直想做的那份《栖云四季》菜单，今天上午忙完备料我有空过来找你聊聊吗？"};s.forEach(p=>{i[p.id]&&p.beats.unshift({t:"phoneMessage",who:"沈知秋",emo:"手机消息",text:i[p.id]})});const c=p=>{if(/第三幕：心愿达成/.test(p.text))return p;for(const _ of p.children){const g=c(_);if(g)return g}return null},v=c(l),m=s.find(p=>p.id==="EVT_ZHIQIU_CH06_WIN");if(v&&m){const p=dn(v.lines,{title:v.text});m.beats.push({t:"scene",text:"秋屿咖啡 · 四季菜单发布"},...p.beats)}}return s}function Df(e,n){const t=[],s=Yl(e),l={GRANNY:"张奶奶",UNCLE:"陈叔",XIAOMAN:"小满",CROSS:"常客们"},o=i=>{if(i.level>=3&&/^(?:\d+\.\s*)?M\d+/.test(i.text)&&!/详见/.test(i.text)){const c=i.lines.join(`
`),v=c.match(/事件ID[：:]\s*`?(EVT_(?:GRANNY|UNCLE|XIAOMAN|CROSS)_[A-Z0-9_]+)/);if(v&&v[1]!=="EVT_UNCLE_M28"){const m=v[1],p=dn(i.lines,{title:i.text}),_=i.text+`
`+c,g=_.match(/M(\d+)/),h=_.match(/(?:插入节点|具体插入节点)[^\n】]*第(\d+)个经营日/),C=i.text.replace(/^\d+\.\s*/,"").split(/[｜|]/).pop().trim(),b=C.match(/《([^》]+)》/),E=b?b[1]:C.replace(/^M\d+\s*/,"").replace(/^共同剧情[：:]?\s*/,"").replace(/[（(].*/,"").trim(),T=m.indexOf("EVT_CROSS_")===0,w=m.match(/^EVT_(GRANNY|UNCLE|XIAOMAN|CROSS)_/);t.push({id:m,ids:[m],title:E||Lt(i.text),chapter:"常客 · "+l[w?w[1]:"CROSS"],month:g?Number(g[1]):null,day:h?Number(h[1]):1,kind:"regular",storyline:"regular",regularPerson:l[w?w[1]:"CROSS"],group:T,beats:p.beats,order:n+t.length})}}i.children.forEach(o)};return s.children.forEach(o),t}const Mn=Pf(Mf),Or=Hi($f,"mom",Mn.events.length),Ss=Hi(Cf,"zhiQiu",Mn.events.length+Or.length),Wl=Df(If,Mn.events.length+Or.length+Ss.length),Xl=(e,n)=>e.month-n.month||e.day-n.day||e.order-n.order;Or.sort(Xl);Ss.sort(Xl);Wl.sort(Xl);Mn.events.push(...Or,...Ss,...Wl);Mn.mom=Or;Mn.zhiQiu=Ss;Mn.customers=Wl;Mn.prologue=Mn.events.find(e=>e.kind==="prologue"&&e.beats.length)||{id:"EVT_PROLOGUE_01",ids:["EVT_PROLOGUE_01"],title:"序幕 · 回家",month:0,kind:"prologue",beats:[{t:"cg",key:"graduation-rejection"},{t:"scene",text:"大学宿舍"},{t:"nar",text:"六月的阳光透过宿舍窗帘照在书桌上。林念刷新邮箱后，又收到了一封婉拒信。她收拾好行李，决定先回栖云镇看看。"}]};Mn.find=e=>Mn.events.find(n=>n.id===e||(n.ids||[]).includes(e))||null;const Ee=Mn;if(typeof console<"u"){const e={};Ee.events.forEach(s=>e[s.kind]=(e[s.kind]||0)+1);let n=0,t=0;Ee.events.forEach(s=>{(s.beats||[]).forEach(l=>{l.t==="choice"&&(n+=1,t+=l.options.length)})}),console.log("[剧情] 已加载 "+Ee.events.length+" 个事件（"+Object.keys(e).map(s=>s+" "+e[s]).join("，")+"），友情互动 "+Object.keys(Ee.friend).length+" 段，阶段结算 "+Object.keys(Ee.stages).length+" 组，选择 "+n+" 处 / "+t+" 项"),Ee.warnings.length&&Ee.warnings.forEach(s=>console.warn("[剧情] "+s))}const Fi=["清爽果香","绵甜柔和","醇厚浓香"],Ui=["偏少","均衡","偏多"],ji=["简约点缀","日常装饰","丰富装饰"],Vf=[72,90,100],qi=[100,90,72],As={taro:{direction:1,ratio:0,process:1,theme:"做出绵软、微甜，又有清脆夹心的层次。",focus:"芋泥夹层要先冷却，薄脆尽量靠近售卖时再组合。",ratioLabel:"芋泥甜度",processes:["趁热把薄脆拌进芋泥","芋泥冷却后分层夹入薄脆","把薄脆压碎拌入奶油"],distractors:["蜜红豆","轻盈慕斯"]},matcha:{direction:0,ratio:0,process:1,theme:"让茶香清新微苦，红豆甜味恰好托住回甘。",focus:"抹茶少量多次加入，避免高温久烤带出苦味。",ratioLabel:"抹茶用量",processes:["一次加入全部抹茶并延长烘烤","分次拌入抹茶并缩短烘烤","先加红豆再用热奶油冲抹茶"],distractors:["台农芒果泥","动物奶油"]},mango:{direction:0,ratio:1,process:2,theme:"突出成熟芒果的清香，同时保留慕斯的轻盈。",focus:"尝过果泥再调甜度，冷藏定型后再装饰。",ratioLabel:"果泥与慕斯比例",processes:["慕斯远多于果泥","果泥和慕斯大致平衡","大量果泥直接拌入温热慕斯"],distractors:["蜜红豆","轻奶油"]},tiramisu:{direction:2,ratio:1,process:1,theme:"咖啡香醇厚，但奶酪仍要保留轻柔回甘。",focus:"手指饼干快速蘸取咖啡液，留住内部结构。",ratioLabel:"咖啡液浓度",processes:["让饼干长时间浸泡","快速蘸取后分层冷藏","用咖啡液直接冲入奶酪"],distractors:["可可胚","金桂冻"]},fig:{direction:0,ratio:0,process:2,theme:"让无花果的清甜成为主角，奶油只做轻柔衬托。",focus:"选熟度合适的无花果，最后轻放在冷却奶油上。",ratioLabel:"无花果用量",processes:["无花果和奶油长时间打发","烤前放入无花果","奶油冷却后再铺鲜果"],distractors:["浓缩咖啡液","高山秋栗"]},seasonal:{direction:0,ratio:1,process:1,theme:"让当季水果有层次，甜度不盖住果香。",focus:"按季节更换鲜果，果肉与夹心分层组合。",ratioLabel:"鲜果与夹心比例",processes:["将所有水果打成同一层果泥","保留果肉并与夹心分层","增加糖浆并把水果提前烤干"],distractors:["传统红曲","蜜红豆"]},custom:{direction:1,ratio:1,process:0,theme:"按顾客想要的口味设计，同时保证切分时结构稳定。",focus:"先确认承重胚，再固定夹层和手工裱花。",ratioLabel:"夹层与蛋糕胚比例",processes:["使用双层承重胚，逐层固定裱花","把全部夹层叠在单层软胚上","先装饰外层再填入夹心"],distractors:["金桂冻","波姬红无花果"]},festival:{direction:1,ratio:1,process:2,theme:"在节日氛围里保留熟悉的团圆风味。",focus:"传统红曲或栗蓉搭配节庆装饰，出炉冷却后再包装。",ratioLabel:"馅料与蛋糕胚比例",processes:["热蛋糕出炉后立刻装入礼盒","把装饰和馅料一同长时间烘烤","冷却定型后装饰并包装"],distractors:["鲜草莓","浓缩咖啡液"]},signature:{direction:2,ratio:0,process:1,theme:"复原外婆的桂花栗子蛋糕，让秋栗醇厚、金桂清雅。",focus:"栗子甜则少放糖，桂花冻冷却后分层夹入，装盒前现撒金桂。",ratioLabel:"额外糖量",processes:["趁热把金桂干花拌进栗子泥","桂花冻冷却后作为独立夹层","桂花冻趁热浸入戚风胚"],distractors:["桂花蜜","动物奶油"]}},rs={plain:{question:"原味奶油蛋糕切开后有些干，奶油也盖住了戚风的香气。",options:["增加糖浆并厚涂奶油","缩短烘烤，并减薄奶油层","延长烘烤，让外皮更脆"],correct:1,feedback:"先守住戚风的湿润度，再让奶油薄薄衬托。"},strawberry:{question:"顾客觉得奶油有些腻，草莓的酸甜味不够明显。",options:["减少奶油，增加草莓夹层","延长蛋糕胚烘烤时间","改变表面装饰颜色"],correct:0,feedback:"把奶油减薄，并增加草莓果味层。"},chocolate:{question:"巧克力蛋糕入口偏苦，回味也显得厚重。",options:["加入更多纯可可粉","减少甘纳许并调和可可浓度","增加烘烤时间让水分散尽"],correct:1,feedback:"适当收住甘纳许和可可的浓度，保留香气即可。"},taro:{question:"芋泥薄脆放一会儿就不脆了。",options:["把薄脆提前拌进热芋泥","芋泥冷却后分层，临近售卖再组合","把薄脆泡进奶油里"],correct:1,feedback:"减少水分接触，让薄脆临近售卖时再入层。"},matcha:{question:"抹茶的苦味有些突出，蜜红豆也不明显。",options:["增加红豆层并略减抹茶","增加抹茶粉并减少红豆","把红豆打成糖浆淋面"],correct:0,feedback:"略减抹茶浓度，让蜜红豆的甜味接住茶香。"},mango:{question:"芒果慕斯吃起来偏腻，果香不够明亮。",options:["增加慕斯比例","使用成熟芒果泥并平衡慕斯比例","延长烘烤芒果泥的时间"],correct:1,feedback:"用熟芒果的果香提亮口味，保持慕斯轻盈。"},tiramisu:{question:"提拉米苏底层的手指饼干湿软散开了。",options:["延长咖啡浸泡时间","快速蘸咖啡液后立即分层冷藏","增加咖啡液并拌入奶酪"],correct:1,feedback:"饼干快速蘸取咖啡液即可，避免吸水过多。"},fig:{question:"无花果奶油看起来漂亮，但吃不出鲜果香。",options:["增加奶油厚度","烘烤时加入更多无花果","冷却后铺上新鲜无花果"],correct:2,feedback:"最后加入新鲜果肉，保留无花果的香气和口感。"},seasonal:{question:"季节水果蛋糕层次混在一起，果味不够清楚。",options:["保留果肉并和夹心分层","把水果全部打成泥","增加糖浆覆盖水果"],correct:0,feedback:"保留果肉口感，再用独立夹层表现季节变化。"},custom:{question:"生日定制蛋糕切分时夹层容易倾斜。",options:["改用双层承重胚并逐层固定","增加顶部裱花重量","使用单层软胚并增加夹心"],correct:0,feedback:"先稳定承重结构，再逐层填入夹心和装饰。"},festival:{question:"节日限定蛋糕节庆感很足，味道却有些平淡。",options:["增加礼盒装饰层数","选择红曲或栗蓉馅料，冷却后再包装","延长礼盒内的回温时间"],correct:1,feedback:"用红曲或栗蓉明确节日风味，并在冷却后包装。"},signature:{question:"栗子甜度合适，但桂花香气不够鲜明。",options:["增加糖量并提前烤入桂花","桂花冻冷却分层，装盒前现撒金桂","把桂花干花打碎混进戚风胚"],correct:1,feedback:"沿用外婆手记：桂花冻冷却分层，装盒前再现撒金桂。"}};function ms(e){return[...new Set(Array.isArray(e)?e:[])].sort()}function Gi(e,n){const t=ms(n);return(Bl[e]||[]).some(s=>{const l=ms(s);return l.length===t.length&&l.every((o,i)=>o===t[i])})}function Lf({coreCorrect:e,directionCorrect:n,ratioOffset:t,processCorrect:s,decoration:l}){const o=[];return e||o.push("核对图鉴中的核心食材，选齐后再做风味判断。"),n||o.push("风味方向和产品主题不太协调。"),t&&o.push("调整主料比例，让主要食材的味道更突出。"),s||o.push("工艺还需要照顾这款蛋糕的口感结构。"),l===2&&o.push("装饰丰富，外观加分；制作成本也相应提高。"),l===0&&o.push("简约装饰控制了成本，可以再考虑提升展示效果。"),o.length||o.push("四项都很协调，可以考虑正式上架。"),o}function Hf(e,n){const t=As[e];if(!t)return null;const s=Gi(e,n.ingredients),l=n.direction===t.direction,o=Math.abs(n.ratio-t.ratio),i=n.process===t.process,c=n.decoration;if(![0,1,2].includes(n.direction)||![0,1,2].includes(n.ratio)||![0,1,2].includes(n.process)||![0,1,2].includes(c))return null;const v=Math.max(0,(l?100:65)-o*15-(s?0:45)),m=i?100:60,p=Vf[c],_=qi[c],g=Math.round((v+m+p+_)/4);return{type:"development",productId:e,ingredients:ms(n.ingredients),direction:n.direction,ratio:n.ratio,process:n.process,decoration:c,coreCorrect:s,scores:{flavor:v,texture:m,appearance:p,cost:_},score:g,passed:s&&g>=75,refined:s&&g>=90,feedback:Lf({coreCorrect:s,directionCorrect:l,ratioOffset:o,processCorrect:i,decoration:c})}}function Ff(e){if(!e||![0,1,2].includes(e.sugar)||![0,1,2].includes(e.filling)||![0,1,2].includes(e.garnish))return null;const n=Gi("signature",e.ingredients),t=e.sugar===0,s=e.filling===1,l=e.garnish===2,o={flavor:Math.max(0,(t?100:60)-(n?0:45)),texture:s?100:55,appearance:l?100:65,cost:n?90:65},i=Math.round(Object.values(o).reduce((v,m)=>v+m,0)/4),c=[];return n||c.push("请按手记选齐高山秋栗、金桂冻和戚风胚。"),t||c.push("甜栗本身够甜时，要减少额外糖量。"),s||c.push("桂花冻冷却后单独夹入，才能保留清楚的层次。"),l||c.push("装盒前现撒金桂，香气会更鲜明。"),c.length||c.push("外婆手记的风味与做法都复原了。"),{type:"signature",productId:"signature",ingredients:ms(e.ingredients),sugar:e.sugar,filling:e.filling,garnish:e.garnish,coreCorrect:n,scores:o,score:i,passed:n&&t&&s&&l&&i>=75,refined:n&&t&&s&&l&&i>=90,feedback:c}}function Ml(e){const n=As[e];return[...new Set([...(Bl[e]||[]).flat(),...(n==null?void 0:n.distractors)||[]])]}function Uf(e){return rs[e]||null}const Cn=(...e)=>e.join(","),hs={shop:{name:"林记烘焙 · 店内",img:"bg-shop.webp",css:Cn("radial-gradient(34% 26% at 24% 8%, rgba(255,232,170,.75), rgba(255,232,170,0) 72%)","radial-gradient(30% 24% at 70% 6%, rgba(255,238,186,.55), rgba(255,238,186,0) 72%)","linear-gradient(200deg, rgba(255,244,214,.55) 0%, rgba(255,244,214,0) 42%)","radial-gradient(120% 70% at 50% 116%, rgba(120,74,42,.5), rgba(120,74,42,0) 72%)","linear-gradient(180deg,#f8e6c9 0%,#eed3aa 40%,#cda279 74%,#9c7049 100%)")},kitchen:{name:"后厨",img:"bg-kitchen.webp",css:Cn("radial-gradient(38% 30% at 30% 6%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(190deg, rgba(255,255,248,.5), rgba(255,255,248,0) 48%)","radial-gradient(120% 64% at 50% 114%, rgba(96,120,110,.34), rgba(96,120,110,0) 72%)","linear-gradient(180deg,#eef4ef 0%,#dde7e0 52%,#bcc9c1 100%)")},street:{name:"栖云镇 · 街上",img:"bg-street.webp",css:Cn("radial-gradient(40% 32% at 72% 22%, rgba(255,214,150,.9), rgba(255,214,150,0) 70%)","radial-gradient(60% 40% at 20% 62%, rgba(120,86,86,.35), rgba(120,86,86,0) 72%)","linear-gradient(180deg, rgba(96,66,72,.18) 40%, rgba(60,38,42,.5) 100%)","linear-gradient(180deg,#ffeacb 0%,#f8c69c 34%,#dc9b85 62%,#8d6b72 100%)")},home:{name:"家里",img:"bg-home.webp",css:Cn("radial-gradient(46% 36% at 64% 12%, rgba(255,252,238,.9), rgba(255,252,238,0) 70%)","linear-gradient(205deg, rgba(255,250,235,.5) 0%, rgba(255,250,235,0) 46%)","radial-gradient(110% 60% at 50% 114%, rgba(96,112,140,.3), rgba(96,112,140,0) 72%)","linear-gradient(180deg,#dfe7f3 0%,#cbd6e7 50%,#a4b0c6 100%)")},cafe:{name:"咖啡店",img:"bg-cafe.webp",css:Cn("radial-gradient(32% 26% at 64% 12%, rgba(255,226,170,.8), rgba(255,226,170,0) 72%)","linear-gradient(200deg, rgba(255,238,206,.45), rgba(255,238,206,0) 44%)","radial-gradient(120% 64% at 50% 114%, rgba(70,44,28,.45), rgba(70,44,28,0) 72%)","linear-gradient(180deg,#e6d3bd 0%,#c9a889 48%,#8b674c 100%)")},market:{name:"市集 / 活动",img:"bg-market.webp",css:Cn("radial-gradient(circle at 18% 16%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(circle at 48% 11%, rgba(255,228,160,.75), rgba(255,228,160,0) 10%)","radial-gradient(circle at 78% 17%, rgba(255,236,180,.85), rgba(255,236,180,0) 11%)","radial-gradient(70% 46% at 50% 26%, rgba(255,244,210,.55), rgba(255,244,210,0) 72%)","radial-gradient(120% 66% at 50% 116%, rgba(96,56,36,.45), rgba(96,56,36,0) 72%)","linear-gradient(180deg,#ffeccd 0%,#f7c894 40%,#cf9264 72%,#8f6146 100%)")},store:{name:"门店",img:"bg-store.webp",css:Cn("radial-gradient(46% 32% at 50% 6%, rgba(255,251,240,.95), rgba(255,251,240,0) 70%)","linear-gradient(200deg, rgba(255,252,244,.6) 0%, rgba(255,252,244,0) 46%)","radial-gradient(110% 56% at 50% 112%, rgba(140,102,64,.34), rgba(140,102,64,0) 72%)","linear-gradient(180deg,#fdf7ec 0%,#efdcc2 52%,#caa983 100%)")},school:{name:"学校",img:"bg-school.webp",css:Cn("radial-gradient(44% 34% at 22% 10%, rgba(255,255,242,.85), rgba(255,255,242,0) 70%)","linear-gradient(200deg, rgba(250,255,238,.5), rgba(250,255,238,0) 46%)","radial-gradient(110% 58% at 50% 114%, rgba(96,110,70,.28), rgba(96,110,70,0) 72%)","linear-gradient(180deg,#eef2e2 0%,#dae3c8 52%,#b0bd9c 100%)")},park:{name:"河边",img:"bg-park.webp",css:Cn("radial-gradient(46% 32% at 70% 12%, rgba(255,248,214,.85), rgba(255,248,214,0) 70%)","linear-gradient(200deg, rgba(240,255,236,.4), rgba(240,255,236,0) 44%)","radial-gradient(120% 62% at 50% 114%, rgba(70,96,88,.35), rgba(70,96,88,0) 72%)","linear-gradient(180deg,#e6efe0 0%,#cbdcc4 42%,#9cb39a 74%,#778d83 100%)")},night:{name:"夜里",img:"bg-night.webp",css:Cn("radial-gradient(34% 28% at 62% 30%, rgba(255,204,138,.5), rgba(255,204,138,0) 72%)","radial-gradient(26% 22% at 24% 44%, rgba(255,208,150,.32), rgba(255,208,150,0) 72%)","linear-gradient(180deg,#2e3450 0%,#3a3e5a 46%,#222438 100%)")},studio:{name:"工作室",img:"bg-studio.webp",css:Cn("radial-gradient(48% 36% at 42% 8%, rgba(255,255,250,.85), rgba(255,255,250,0) 70%)","linear-gradient(200deg, rgba(255,255,250,.5), rgba(255,255,250,0) 46%)","radial-gradient(110% 56% at 50% 114%, rgba(120,112,96,.24), rgba(120,112,96,0) 72%)","linear-gradient(180deg,#f5f3ef 0%,#e3dfd7 52%,#c2bcb2 100%)")}},jf=[[/后厨|厨房|研发室|操作台|烤箱|烤炉/,"kitchen"],[/秋屿咖啡|咖啡店|咖啡馆|下午茶/,"cafe"],[/市集|生活节|文化节|展览|活动当天|摊位/,"market"],[/旗舰店|新店|分店|开业|门店/,"store"],[/宿舍|卧室|家里|房间/,"home"],[/教室|学校|晚自习|办公室|班会|走廊/,"school"],[/河边|公园|街角|长椅|散步/,"park"],[/打烊|深夜|晚上|夜里|关灯|路灯/,"night"],[/工作室|设计室|画室/,"studio"],[/店内|店里|店内景|展示柜|柜台|烘焙店|林记烘焙/,"shop"],[/街上|街道|门口|路上|镇|巷/,"street"]],oo={1:"home",2:"shop",3:"kitchen",4:"shop",5:"shop",6:"market",7:"shop",8:"shop",9:"kitchen",10:"shop",11:"shop",12:"shop",13:"kitchen",14:"shop",15:"shop",16:"market",17:"street",18:"shop",19:"store",20:"shop",21:"shop",22:"store",23:"shop",24:"shop",25:"shop",26:"kitchen",27:"kitchen",28:"street",29:"market",30:"shop",31:"store",32:"street",33:"store",34:"store",35:"studio",36:"shop"},io={1:"shop",2:"street",3:"street",4:"shop",5:"park",6:"market",7:"night",8:"shop",9:"studio",10:"cafe",11:"studio",12:"shop",13:"kitchen",14:"shop",15:"street",16:"park",17:"street",18:"shop",19:"store",20:"street",21:"cafe",22:"night",23:"cafe",24:"studio",25:"street",26:"street",27:"kitchen",28:"shop",29:"park",30:"studio",31:"cafe",32:"street",33:"store",34:"studio",35:"school",36:"shop"};function qf(e){return!e||e.storyline==="mom"?"shop":e.storyline==="zhiQiu"?e.id==="EVT_ZHIQIU_CH06_A"?"shop":"cafe":e.kind==="main"&&oo[e.month]?oo[e.month]:e.kind==="friend"&&io[e.month]?io[e.month]:Bi(e.title)||"shop"}function Bi(e){const n=e||"";for(const[t,s]of jf)if(t.test(n))return s;return""}const $r={林念:{in:"ln-sprite-in.webp",out:"ln-sprite-out.webp",face:"ln-face.webp"},沈知秋:{in:"zhiqiu-sprite-in.webp",out:"zhiqiu-sprite-out.webp",face:"zhiqiu-face.webp"},苏晴:{in:"sq-sprite-in.webp",out:"sq-sprite-out.webp",face:"sq-face.webp"},林暖:{in:"nu-sprite-in.webp",out:"nu-sprite-out.webp",face:"nu-face.webp"},周雨桐:{in:"xy-sprite-in.webp",out:"xy-sprite-out.webp",face:"xy-face.webp"},许知遥:{in:"zy-sprite-in.webp",out:"zy-sprite-out.webp",face:"zy-face.webp"},唐鸢:{in:"ty-sprite-in.webp",out:"ty-sprite-out.webp",face:"ty-face.webp"},叶星河:{in:"xh-sprite-in.webp",out:"xh-sprite-out.webp",face:"xh-face.webp"},张奶奶:{in:"regular-granny-zhang.webp",out:"regular-granny-zhang.webp",face:""},陈叔:{in:"regular-uncle-chen.webp",out:"regular-uncle-chen.webp",face:""},小满:{in:"regular-xiaoman.webp",out:"regular-xiaoman.webp",face:""}},uo=$r,Gf={shop:"in",kitchen:"in",store:"in",street:"out",home:"out",cafe:"out",market:"out",school:"out",park:"out",night:"out",studio:"out"};function Bf(e){return Gf[e]||"out"}function Qi(e,n){const t=$r[e];if(!t)return"";if(We(t[n])==="ok")return t[n];const s=n==="in"?"out":"in";return We(t[s])==="ok"?t[s]:""}function Qf(e,n){const t=Qi(e,n||"out");return t?Pe(t):""}function Kf(){Object.keys($r).forEach(e=>{const n=$r[e];["in","out","face"].forEach(t=>We(n[t]))}),Object.keys(hs).forEach(e=>We(hs[e].img))}function Tn(e){const n=$r[e];return n&&We(n.face)==="ok"?Pe(n.face):""}function zf(e,n){return!!Qi(e,n||"out")}const Zf={friends:{img:"sq-friends.webp",name:"合影"},mom:{img:"nu-duo.webp",name:"母亲"},shop:{img:"shop-exterior.webp",name:"林记烘焙"},"graduation-rejection":{img:"cg-graduation-rejection.webp",name:"毕业季的拒信"},"mom-01":{img:"cg-mom-01.webp",name:"交到你手上了"},"mom-02":{img:"cg-mom-02.webp",name:"旧配方本的温度"},"mom-03":{img:"cg-mom-03.webp",name:"复原桂花栗子香"},"mom-04":{img:"cg-mom-04.webp",name:"第一个年末的账本"},"mom-05":{img:"cg-mom-05.webp",name:"两周年的店门合影"},"mom-06":{img:"cg-mom-06.webp",name:"三周年的初心老店"},"zhiqiu-01":{img:"cg-zhiqiu-01.webp",name:"午后初见"},"zhiqiu-02":{img:"cg-zhiqiu-02.webp",name:"第一次合作"},"zhiqiu-03":{img:"cg-zhiqiu-03.webp",name:"忙碌的周末"},"zhiqiu-04":{img:"cg-zhiqiu-04.webp",name:"雨天的故事"},"zhiqiu-05":{img:"cg-zhiqiu-05.webp",name:"栖云四季"},"zhiqiu-06":{img:"cg-zhiqiu-06.webp",name:"秋屿的夜晚"},"zhiqiu-menu":{img:"cg-zhiqiu-menu.webp",name:"栖云四季纪念菜单"},osmanthus:{img:"cg-osmanthus.webp",name:"桂花栗子蛋糕"},festival:{img:"cg-festival.webp",name:"秋日文化节"},memory:{img:"cg-memory.webp",name:"高三晚自习"},flagship:{img:"cg-flagship.webp",name:"旗舰店方案"},album:{img:"cg-album.webp",name:"三年相册"},finale:{img:"cg-finale.webp",name:"三周年合影"},group:{img:"cg-group.webp",name:"我们都在这里"}},Ki=[{id:"graduation-rejection",event:"EVT_PROLOGUE_01"},{id:"osmanthus",event:"EVT_M26_MAIN"},{id:"festival",event:"EVT_M29_MAIN"},{id:"memory",event:"EVT_M29_MAIN"},{id:"flagship",event:"EVT_M33_MAIN"},{id:"album",event:"EVT_M35_MAIN"},{id:"group",event:"EVT_M36_MAIN"},{id:"finale",event:"EVT_FINAL_END_NATIONAL"},{id:"mom-01",event:"EVT_MOM_M01"},{id:"mom-02",event:"EVT_MOM_M06"},{id:"mom-03",event:"EVT_MOM_M08"},{id:"mom-04",event:"EVT_MOM_M12"},{id:"mom-05",event:"EVT_MOM_M24"},{id:"mom-06",event:"EVT_MOM_M36"},{id:"zhiqiu-01",event:"EVT_ZHIQIU_CH01"},{id:"zhiqiu-02",event:"EVT_ZHIQIU_CH02"},{id:"zhiqiu-03",event:"EVT_ZHIQIU_CH04"},{id:"zhiqiu-04",event:"EVT_ZHIQIU_CH05"},{id:"zhiqiu-05",event:"EVT_ZHIQIU_CH06_WIN"},{id:"zhiqiu-menu",event:"EVT_ZHIQIU_CH06_WIN"},{id:"zhiqiu-06",event:"EVT_ZHIQIU_SP_NIGHT"}];function Cr(e){const n=Zf[e],t=n?n.img:"cg-"+e+".webp";return{src:We(t)==="ok"?Pe(t):"",name:n?n.name:e}}function Yf(e){return!e||!e.img?"":We(e.img)==="ok"?Pe(e.img):""}const Ns="alb-save-v6",Wf="alb-manual-save-v1",Xf="alb-manual-slot-v1-",zi=3,Ir=5,Zi=60,Yi=40;function En(){return{v:10,month:1,day:1,cash:12e3,reputation:20,popularity:10,loyalty:20,brand:5,shopLevel:1,storeCount:1,cities:["qiyun"],surveyed:[],ap:8,maxAp:8,stamina:100,maxStamina:100,pantry:{base:12,dairy:8,decor:2,strawberry:2,cocoa:2},legacyStock:0,warehouseCapacity:120,ngpDiscountUsed:!1,devices:{},shelf:{},batches:[],plan:{},prices:{},levels:{plain:1,strawberry:1,chocolate:1},unlocked:["plain","strawberry","chocolate"],staff:[],partnerTrust:{},partnerSkill:{},momBond:20,formalBusinessDays:0,momKeepsakes:[],style:{tradition:0,innovation:0,efficiency:0,community:0},orders:[],dayPhase:"prep",service:null,productionMini:null,productionResult:null,bakingRecords:[],recipeNames:{},marketPoints:0,tutorialSeen:!1,tutorialPromptPending:!1,tutorialProgress:0,tutorialPractice:null,tutorialPracticeProgress:0,marketRun:null,cafeRun:null,cafeCollab:0,activityRecords:{market:[],cafe:[]},sceneVisits:{},scenePhotos:[],sceneEvents:[],outfit:"auto",unlockedOutfits:["auto","daily","bakery"],designWorks:[],cafeRelation:0,cafeLastTalk:0,cafeDailyTalks:0,customOrderMonths:[],customAtM5:!1,notices:[],unlockNotified:[],dailyLedger:[],daySpend:0,staffAssignments:{picker:null,packer:null,auto:!1},challenge:null,challengeDayIndex:0,challengeDone:!1,decorations:[],regularCustomers:{chen:{purchases:0,lastPurchaseDay:0,stories:[]},zhang:{purchases:0,lastPurchaseDay:0,stories:[]}},runEndings:[],career:{products:["plain","strawberry","chocolate"],photos:[],cgs:[],decorations:[],endings:[],keepsakes:[],labReports:{},activityRecords:{market:[],cafe:[]},newGamePlusRuns:0},labPending:null,newGamePlus:!1,doneOrders:0,customOrders:0,onlineOrders:0,festivalOrders:0,monthSnap:{rep:20,unlocked:[],skill:{}},deliveryDay:-1,helpers:0,usedMomHelp:!1,dayIndex:1,cd:{},dayRev:0,daySold:0,dayLeft:0,dayMade:0,monthRev:0,monthCost:0,monthSold:{},played:[],storyChoices:{},phoneMessages:[],photos:[],log:[],phase:"playing",ending:null,acquired:!1,autoStory:!1,sqchatMonth:0,stage:1,report:null}}const r=vt(En()),we=vt({events:[]});function Pr(e){return r.devices[e]||0}function Pt(e){const n=Zl(e),t=Pr(e);return t&&n?n.tiers[t-1].value:0}function Ct(e){const n=Zl(e),t=Pr(e);return n&&t<n.tiers.length?n.tiers[t]:null}function Wi(e){const n=Ct(e);return!n||r.phase!=="playing"||r.dayPhase!=="prep"||r.cash<n.cost?!1:(r.cash-=n.cost,r.devices[e]=Pr(e)+1,e==="warehouse"&&(r.warehouseCapacity=[120,180,240,320][r.devices[e]]),r.monthCost+=n.cost,r.daySpend+=n.cost,Te("升级了"+Zl(e).name+"，"+n.text,"good"),de(),!0)}const qn=H(()=>Qe.filter(e=>r.unlocked.includes(e.id)));function je(e){var n;return((n=r.recipeNames)==null?void 0:n[e])||Ue(e).name}function Jf(e,n){if(!r.unlocked.includes(e))return!1;const t=String(n||"").trim().slice(0,20);return t?(r.recipeNames={...r.recipeNames||{},[e]:t},de(),!0):!1}const wt=H(()=>r.stamina+Zi+r.staff.length*Yi+Pt("oven")),$l=H(()=>Math.min(4,r.decorations.length)),Rr=H(()=>Object.values(r.pantry||{}).reduce((e,n)=>e+Number(n||0),0));function ep(e=r.plan){return Object.entries(e||{}).reduce((n,[t,s])=>{const l=ht[t]||{};return Object.entries(l).forEach(([o,i])=>{n[o]=(n[o]||0)+i*s}),n},{})}function Os(e=r.plan){const n={};let t=r.legacyStock||0;return Object.entries(e||{}).forEach(([s,l])=>{for(let o=0;o<l;o++){if(t>=1){t-=1;continue}Object.entries(ht[s]||{}).forEach(([i,c])=>{n[i]=(n[i]||0)+c})}}),Object.keys(n).forEach(s=>{n[s]=Math.max(0,n[s]-((r.pantry||{})[s]||0))}),Object.fromEntries(Object.entries(n).filter(([,s])=>s>0))}function at(e,n=1){return(r.legacyStock||0)>=n?!0:Object.entries(ht[e]||{}).every(([t,s])=>((r.pantry||{})[t]||0)+1e-4>=s*n)}function Jl(e,n=1){const t=ht[e]||{},s=Object.fromEntries(Object.entries(t).map(([l,o])=>[l,o*n]));return(r.legacyStock||0)>=n?(r.legacyStock=Math.round((r.legacyStock-n)*100)/100,!0):at(e,n)?(Object.entries(s).forEach(([l,o])=>{r.pantry[l]=Math.round(((r.pantry[l]||0)-o)*100)/100}),!0):!1}function np(e){if(r.phase!=="playing"||r.dayPhase!=="prep"||r.ap<1)return{ok:!1,message:"准备阶段需要 1 点行动力采购。"};const n=Object.entries(e||{}).filter(([,c])=>Number(c)>0);if(!n.length||n.some(([c,v])=>{const m=bn.find(p=>p.id===c);return!m||m.month>r.month||!Number.isInteger(Number(v))}))return{ok:!1,message:"请选择原料和整数购买数量。"};const t=Object.fromEntries(n.map(([c,v])=>[c,Number(v)])),s=Object.values(t).reduce((c,v)=>c+v,0),l=n.reduce((c,[v,m])=>c+bn.find(p=>p.id===v).price*m,0),o=r.newGamePlus&&!r.ngpDiscountUsed?Math.min(300,l):0,i=l-o;return Rr.value+s>r.warehouseCapacity?{ok:!1,message:"仓库容量不足，请减少购买数量。"}:r.cash<i?{ok:!1,message:"资金不足。"}:(r.ap-=1,r.cash-=i,r.monthCost+=i,r.daySpend+=i,Object.entries(t).forEach(([c,v])=>{r.pantry[c]=(r.pantry[c]||0)+v}),r.newGamePlus&&!r.ngpDiscountUsed&&(r.ngpDiscountUsed=!0),Te("采购了 "+n.map(([c,v])=>bn.find(m=>m.id===c).name+" ×"+v).join("、")+(o?"，二周目优惠 ¥"+o:""),"good"),de(),{ok:!0,message:"采购完成，共 ¥"+i+"。"})}function tp(){const e=Os(),n={};return Object.entries(e).forEach(([t,s])=>{n[t]=Math.ceil(s)}),n}function ea(){return Kl.filter(e=>r.month>=e.month&&r.day===e.day)}function rp(e){ea().forEach(n=>{const t=r.regularCustomers[n.id];if(!e[n.product]||t.lastPurchaseDay===r.dayIndex)return;t.purchases+=1,t.lastPurchaseDay=r.dayIndex;const s=t.purchases===1?0:t.purchases===3?1:-1;s>=0&&!t.stories.includes(s)?(t.stories.push(s),Te(n.name+"和你聊起了老街坊的故事","story")):Te(n.name+"买走了一份"+Ue(n.product).name)})}function sp(){const e=Qe.filter(t=>t.month===r.month&&r.unlocked.includes(t.id)),n=[{type:"stock",target:""},{type:"custom",target:""}];return e.length&&n.push({type:"new",target:e[Math.floor(Math.random()*e.length)].id}),n[Math.floor(Math.random()*n.length)]}function Xi(){r.challengeDayIndex===r.dayIndex&&r.challenge||(r.challenge=sp(),r.challengeDayIndex=r.dayIndex)}function nl(e,n,t){Object.entries(ht[n]||{}).forEach(([s,l])=>{e[s]=(e[s]||0)+l*t})}function lp(e){return mf[r.prices[e]||"std"]}function Gn(e){const n=Ue(e),t=r.levels[e]||1;return Math.round(n.price*lp(e).priceMul*(1+(t-1)*.05)*(1+Pt("cashier")))}const Ji=H(()=>700+r.shopLevel*180+r.staff.length*500),Ps=H(()=>_f(r.month)),ot=H(()=>{const e=Ps.value;if(!e||!e.goals||!e.goals.length)return{done:0,need:0,list:[]};const n=e.goals.map(t=>({text:t.text,done:t.check(r),expand:!!t.expand}));return{done:n.filter(t=>t.done).length,need:e.need,list:n}});function na(){let e=0;for(const n of Object.keys(r.plan))e+=r.plan[n]*Ue(n).diff;return e}function ta(){sa();const e=we.events.map(n=>Ee.events.some(t=>t.id===n.id)?n.id:n);return{...r,storyQueue:e,savedAt:Date.now()}}function de(){try{localStorage.setItem(Ns,JSON.stringify(ta()))}catch{}}function eu(e){return!!e&&typeof e=="object"&&[6,7,8,9,10].includes(e.v)&&Number.isInteger(Number(e.month))&&Number(e.month)>=1&&Number(e.month)<=36&&Number.isInteger(Number(e.day))&&Number(e.day)>=1&&Number(e.day)<=Ir&&Number.isFinite(Number(e.cash))&&(e.unlocked===void 0||Array.isArray(e.unlocked))&&(e.played===void 0||Array.isArray(e.played))&&(e.storyChoices===void 0||e.storyChoices&&typeof e.storyChoices=="object"&&!Array.isArray(e.storyChoices))&&(e.storyQueue===void 0||Array.isArray(e.storyQueue))&&(e.career===void 0||e.career&&typeof e.career=="object"&&!Array.isArray(e.career))}function Xn(e){try{const n=typeof e=="string"?JSON.parse(e):e;return eu(n)?{ok:!0,data:n,preview:{month:Number(n.month),day:Number(n.day),savedAt:Number(n.savedAt)||0,cash:Number(n.cash)||0,phase:n.phase||"playing"}}:{ok:!1,message:"存档格式无效或版本不受支持。"}}catch{return{ok:!1,message:"无法读取存档文件。"}}}function ra(e){var n,t,s,l;if(!eu(e))return!1;try{Object.assign(r,En());const o=e.v!==10;if(Object.keys(En()).forEach(p=>{e[p]!==void 0&&p!=="regularCustomers"&&p!=="career"&&(r[p]=e[p])}),e.v===6){r.pantry={};let p=Math.max(0,Number(e.stock||0));Object.entries(e.plan||{}).forEach(([b,E])=>{const T=Math.min(p,Math.max(0,Number(E)||0));T&&nl(r.pantry,b,T),p-=T});const _=(e.unlocked||["plain"]).filter(b=>ht[b]),g=_.length?_:["plain"],h=Math.floor(p);for(let b=0;b<h;b++)nl(r.pantry,g[b%g.length],1);const C=p-h;C&&g.forEach(b=>nl(r.pantry,b,C/g.length)),r.legacyStock=0,r.cash+=Number(e.monthRev||0),r.dayPhase=e.daySold||e.dayRev?"closing":"prep",r.sqchatMonth=Number(e.friendMonth||0),r.batches=Object.entries(e.shelf||{}).filter(([,b])=>b>0).map(([b,E],T)=>({id:"migrated-"+T,product:b,qty:E,quality:"normal",decoration:null})),r.service=null,r.stock=void 0,delete r.friendship,delete r.friendMonth,r.ngpDiscountUsed=!1,r.challenge=null,r.challengeDayIndex=0}r.v=10,r.pantry=r.pantry||{},r.legacyStock=Number(r.legacyStock||0),r.batches=r.batches||[],r.staffAssignments={...En().staffAssignments,...r.staffAssignments||{}},r.dayPhase=r.dayPhase||"prep",r.regularCustomers=Object.fromEntries(Kl.map(p=>[p.id,{...En().regularCustomers[p.id],...(e.regularCustomers||{})[p.id]}])),r.career={...En().career,...e.career||{}},r.career.labReports={...En().career.labReports,...(e.career||{}).labReports||{}},r.career.keepsakes=r.career.keepsakes||[],r.activityRecords={...En().activityRecords,...e.activityRecords||{}},r.activityRecords.market=r.activityRecords.market||[],r.activityRecords.cafe=r.activityRecords.cafe||[],r.career.activityRecords={...En().career.activityRecords,...(e.career||{}).activityRecords||{},market:[...new Set([...((t=(n=e.career)==null?void 0:n.activityRecords)==null?void 0:t.market)||[],...r.activityRecords.market.map(p=>p.id)])],cafe:[...new Set([...((l=(s=e.career)==null?void 0:s.activityRecords)==null?void 0:l.cafe)||[],...r.activityRecords.cafe.map(p=>p.id)])]},r.career.cgs=r.career.cgs||[],r.momKeepsakes=r.momKeepsakes||[],r.formalBusinessDays=Number(r.formalBusinessDays||0),r.cafeDailyTalks=Number(r.cafeDailyTalks||0),r.customOrderMonths=r.customOrderMonths||[],e.customAtM5===void 0&&e.customOrders>0&&e.month>=11&&(r.customAtM5=!0),r.service&&r.dayPhase==="service"&&r.service.formalBusiness===void 0&&(r.service.formalBusiness=!0),r.storyChoices=r.storyChoices||{},r.phoneMessages=Array.isArray(e.phoneMessages)?e.phoneMessages:[],e.v<10&&Tf(r,Ee.events),r.savedAt=Number(e.savedAt)||0;const i=new Map(Ee.events.map(p=>[p.id,p])),c=(e.storyQueue||[]).map(p=>typeof p=="string"?i.get(p):p).filter(p=>p&&typeof p=="object"&&typeof p.id=="string"&&Array.isArray(p.beats));we.events.splice(0,we.events.length,...c),r.challengeDayIndex=Number(r.challengeDayIndex||0);const v=r.dayPhase==="prep"&&(!r.challenge||r.challengeDayIndex!==r.dayIndex);v&&Xi();const m=JSON.stringify(r.career);return sa(),(o||v||m!==JSON.stringify(r.career))&&de(),!0}catch{return!1}}function nu(e){const n=Number(e);return Number.isInteger(n)&&n>=1&&n<=zi?Xf+n:""}function co(e=!1,n=1){try{const t=e?gs(n):localStorage.getItem(Ns);return!!t&&Xn(t).ok}catch{return!1}}function ap(e=1){const n=nu(e);if(!n)return!1;try{return localStorage.setItem(n,JSON.stringify(ta())),!0}catch{return!1}}function gs(e=1){const n=nu(e);if(!n)return"";try{return localStorage.getItem(n)||(Number(e)===1?localStorage.getItem(Wf):"")||""}catch{return""}}function op(){try{return localStorage.getItem(Ns)||""}catch{return""}}function tl(){return JSON.stringify(ta(),null,2)}function rl(e=!0,n=1){try{const t=gs(n);if(!t||!Xn(t).ok)return!1;const s=JSON.parse(t);return ra(s)?(e&&de(),!0):!1}catch{return!1}}function ip(e){const n=Xn(e);return n.ok?ra(n.data)?(de(),{ok:!0,preview:n.preview}):{ok:!1,message:"存档无法载入。"}:n}function Wr(){try{const e=localStorage.getItem(Ns);return!e||!Xn(e).ok?!1:ra(JSON.parse(e))}catch{return!1}}function tu(){const e={...sa()};Object.assign(r,En()),r.career=e,we.events.length=0,r.monthSnap={rep:r.reputation,unlocked:r.unlocked.slice(),skill:Object.assign({},r.partnerSkill)},Ds(),de()}function sa(){const e=r.career||En().career;e.products=[...new Set([...e.products||[],...r.unlocked||[]])],e.photos=[...new Set([...e.photos||[],...r.photos||[]])],e.keepsakes=[...new Set([...e.keepsakes||[],...r.momKeepsakes||[]])];const n=e.cgs||[];return Ki.forEach(t=>{(r.played||[]).includes(t.event)&&!n.includes(t.id)&&n.push(t.id)}),e.cgs=n,e.decorations=[...new Set([...e.decorations||[],...r.decorations||[]])],r.phase==="ended"&&r.ending&&r.ending.key&&(r.runEndings=[...new Set([...r.runEndings||[],r.ending.key])],e.endings=[...new Set([...e.endings||[],r.ending.key])]),r.career=e,e}function ru(e,n,t){const s=r.career.labReports[e]||{};r.career.labReports[e]={...s,[n]:{...t,run:(r.career.newGamePlusRuns||0)+1,month:r.month}}}function Fe(e,n){return{ok:e,message:n}}function Cl(e){if(r.phase!=="playing")return Fe(!1,"当前不能进行实验。");if(r.dayPhase!=="prep")return Fe(!1,"营业开始后不能进行研发。");if(r.labPending)return Fe(!1,"请先处理上次试吃结果。");if(r.ap<1)return Fe(!1,"至少需要 1 点行动力才能开始试做。");const n=e&&e.productId,t=Qe.find(l=>l.id===n);if(!t||r.unlocked.includes(n)||t.month<=0||t.month>r.month)return Fe(!1,"这款产品还未开放研发，或已经上架。");if(n==="signature"&&(!e||e.type!=="signature"))return Fe(!1,"桂花栗子蛋糕需要进入 M26 专属复原。");const s=n==="signature"?Ff(e):Hf(n,e||{});return s?Jl(n,.25)?(r.ap-=1,r.labPending=s,Te("试做「"+t.name+"」消耗 1 点行动力和四分之一配方材料","story"),de(),Fe(!0,"试吃完成。")):Fe(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。"):Fe(!1,"实验参数不完整，请检查每一项选择。")}function up(e){const n=Cl(e);if(!n.ok||!r.labPending)return n;const t={taro:"戚风",matcha:"抹茶",mango:"原味",tiramisu:"原味",fig:"戚风",seasonal:"戚风",custom:"戚风",festival:"原味",signature:"戚风"},s={taro:"栗子泥",matcha:"鲜奶油",mango:"鲜奶油",tiramisu:"芝士",fig:"鲜奶油",seasonal:"鲜奶油",custom:"鲜奶油",festival:"巧克力奶油",signature:"栗子泥"},l=e.base===(t[e.productId]||"戚风"),o=e.cream===(s[e.productId]||"鲜奶油"),i=(l?0:15)+(o?0:15),c=r.labPending;return c.score=Math.max(0,c.score-i),c.passed=c.passed&&c.score>=75,c.refined=c.refined&&c.score>=90,c.base=e.base,c.cream=e.cream,l||c.feedback.push("蛋糕胚与目标风味不够契合，试着换一种胚体。"),o||c.feedback.push("夹心与主题不够协调，试着调整奶油或夹层。"),de(),n}function su(){const e=r.labPending;if(r.dayPhase!=="prep")return Fe(!1,"请在营业开始前完成上架。");if(r.phase!=="playing"||!e||!e.passed)return Fe(!1,"这份试吃结果还未达到上架要求。");if(r.ap<1)return Fe(!1,"行动力不足；试吃结果已保存，明天可以继续。");const n=Qe.find(t=>t.id===e.productId);return!n||n.month>r.month||r.unlocked.includes(e.productId)?Fe(!1,"产品状态已变化，请返回实验室确认。"):(r.ap-=1,r.unlocked.push(n.id),r.levels[n.id]=e.refined?1.5:1,ru(n.id,"development",{...e,type:e.type==="signature"?"signature":"development",feedback:e.type==="signature"?["外婆配方复原成功，桂香与秋栗的层次都找回来了。"]:e.feedback}),r.labPending=null,Te("「"+n.name+"」研发完成并正式上架，"+(e.refined?"精制品质，熟练度 Lv1.5":"熟练度 Lv1"),"good"),de(),Fe(!0,n.name+(e.type==="signature"?"复原成功，已加入菜单。":"已正式上架。")))}function Il(){return r.labPending?(r.labPending=null,de(),!0):!1}function cp(e,n){if(r.phase!=="playing")return Fe(!1,"当前不能进行改良。");if(r.dayPhase!=="prep")return Fe(!1,"营业开始后不能进行改良。");const t=Qe.find(c=>c.id===e),s=Uf(e);if(!t||!s||!r.unlocked.includes(e))return Fe(!1,"这款产品目前不能改良。");const l=r.levels[e]||1;if(l>=5)return Fe(!1,"这款产品已达到熟练度上限。");if(!Number.isInteger(n)||n<0||n>=s.options.length)return Fe(!1,"请选择一个改良方案。");const o=n===s.correct;if(r.ap<(o?2:1))return Fe(!1,o?"改良成功需要 2 点行动力。":"改良试吃需要 1 点行动力。");if(!Jl(e,.25))return Fe(!1,"这款蛋糕的试做原料不足，请先到食材铺采购。");if(r.ap-=1,!o){const c="这次试吃没有解决问题。"+s.feedback;return Te("改良「"+t.name+"」未通过试吃，消耗了四分之一配方材料","story"),de(),{...Fe(!1,c),retry:!0,feedback:c}}r.ap-=1,r.levels[e]=Math.min(5,l+1),r.style.innovation+=3;const i={type:"improvement",score:100,levelBefore:l,levelAfter:r.levels[e],feedback:[s.feedback]};return ru(e,"improvement",i),Te("改良「"+t.name+"」成功，熟练度提升至 Lv"+r.levels[e],"good"),de(),{...Fe(!0,s.feedback),feedback:s.feedback,level:r.levels[e]}}function dp(){return r.phase!=="ended"||!r.ending?!1:(tu(),r.newGamePlus=!0,r.ngpDiscountUsed=!1,r.career.newGamePlusRuns=(r.career.newGamePlusRuns||0)+1,de(),!0)}function fp(){if(r.phase!=="playing")return!1;const e=r.month;for(;r.month===e&&r.phase==="playing";)r.dayPhase="closing",r.service={tickets:[],current:0},ia("waste");return r.month!==e}function pp(){const e=Bt.find(n=>!n.final&&n.short.key===(r.ending&&r.ending.key));return r.phase!=="ended"||!e?!1:(r.phase="playing",r.ending=null,r.stamina=r.maxStamina,Ds(),Dr(),de(),!0)}function vp(e){const n=Ql.find(t=>t.id===e);return!n||r.phase!=="playing"||r.dayPhase!=="prep"||r.decorations.includes(e)||r.shopLevel<n.shopLevel||r.cash<n.cost?!1:(r.cash-=n.cost,r.monthCost+=n.cost,r.daySpend+=n.cost,r.decorations.push(e),Te("添置了"+n.name+"，店铺舒适度 +1","good"),de(),!0)}function Te(e,n){r.log.unshift({month:r.month,day:r.day,text:e,tone:n||"normal"}),r.log.length>60&&r.log.pop()}function He(e){return Math.max(0,Math.min(100,e))}function mp(e){const n=[];for(const t of e)if(t.kind==="num"){const s=t.value;switch(t.key){case"资金":r.cash=Math.max(0,r.cash+s);break;case"口碑":r.reputation=He(r.reputation+s);break;case"知名度":r.popularity=He(r.popularity+s);break;case"友情值":break;case"门店":r.storeCount=Math.max(1,r.storeCount+s);break;case"员工":s>0&&bp();break;case"烘焙":hp(s*.2);break;case"品质":gp(s*.05);break}n.push(t.key+(s>=0?"+":"")+s)}else t.key==="配方"?r.unlocked.includes(t.value)||(r.unlocked.push(t.value),n.push("解锁「"+Ue(t.value).name+"」")):t.key==="照片"&&(r.photos.includes(t.value)||(r.photos.push(t.value),n.push("获得纪念照片")));return n}function hp(e){const t=r.unlocked.slice().sort((s,l)=>(r.levels[s]||1)-(r.levels[l]||1))[0];t&&(r.levels[t]=Math.min(5,(r.levels[t]||1)+e))}function gp(e){r.unlocked.forEach(n=>{r.levels[n]=Math.min(5,(r.levels[n]||1)+e)})}function yp(e){const n=[];for(const t of e||[]){switch(t.k){case"style":r.style[t.id]=(r.style[t.id]||0)+t.v;break;case"trust":if(!t.id)break;r.partnerTrust[t.id]=He((r.partnerTrust[t.id]||0)+t.v);break;case"skill":if(!t.id)break;r.partnerSkill[t.id]=Math.min(5,Math.round(((r.partnerSkill[t.id]||1)+t.v)*10)/10);break;case"loyalty":r.loyalty=He(r.loyalty+t.v);break}t.k!=="friend"&&t.label&&n.push(t.label)}return n}function fo(e,n,t,s=""){const l=e.node||"choice-"+t,o=r.storyChoices[s]||{};if(Object.prototype.hasOwnProperty.call(o,l))return[];const i=yp(n.gains);return r.storyChoices[s]={...o,[l]:t},e&&e.node==="13.6"&&t===1&&(r.acquired=!0),i.length&&Te("选择："+n.label+"（"+i.join("，")+"）","story"),de(),i}function lu(e){if(!e||r.staff.includes(e))return;r.staff.push(e),r.partnerTrust[e]===void 0&&(r.partnerTrust[e]=10),r.partnerSkill[e]===void 0&&(r.partnerSkill[e]=1);const n=Gt(e);n&&Te(n.name+" 加入了林记","story")}function bp(){const e=Nt.find(n=>!r.staff.includes(n.id)&&n.joinMonth<=r.month);e&&lu(e.id)}function au(){return r.staff.map(e=>Gt(e)).filter(Boolean)}const po={feedback:5,market:3,talk:2,train:5};function _p(e){const n=r.cd[e]||0;return Math.max(0,n-r.dayIndex)}function ou(){return we.events.some(e=>!e.storyline)}function la(){const e=Ee.mom.find(n=>!r.played.includes(n.id));return e?e.month>r.month||e.month===r.month&&r.day<e.day?{event:null,note:"还没到和妈妈聊这段往事的时候。"}:e.id==="EVT_MOM_M01"&&r.formalBusinessDays<1?{event:null,note:"先完成第一天正式营业，再和妈妈聊聊。"}:e.bondRequired&&r.momBond<e.bondRequired?{event:null,note:"家庭默契还不够，继续经营后再来听这段故事。"}:e.id==="EVT_MOM_M36"&&!Ee.mom.slice(0,35).every(n=>r.played.includes(n.id))?{event:null,note:"先听完前 35 个月的母女故事。"}:ou()?{event:null,note:"先看完排在前面的主线或苏晴剧情。"}:{event:e,note:"播放「"+e.title+"」"}:{event:null,note:"林暖的月度故事已经全部听完。"}}function kp(e){const n=s=>r.played.includes(s),t=e.id;return t==="EVT_ZHIQIU_CH01"?r.shopLevel>=2&&(r.customAtM5||r.month>=11&&r.customOrders>0):t==="EVT_ZHIQIU_CH02"?n("EVT_ZHIQIU_CH01")&&r.cafeDailyTalks>=2:t==="EVT_ZHIQIU_CH03"?n("EVT_ZHIQIU_CH02")&&r.cafeCollab>=5:t==="EVT_ZHIQIU_CH04"?n("EVT_ZHIQIU_CH03")&&r.cafeCollab>=5:t==="EVT_ZHIQIU_CH05"?n("EVT_ZHIQIU_CH04")&&r.cafeRelation>=20:t==="EVT_ZHIQIU_CH06_A"?n("EVT_ZHIQIU_CH05")&&r.activityRecords.market.length+r.activityRecords.cafe.length>0:t==="EVT_ZHIQIU_CH06_SPR"?n("EVT_ZHIQIU_CH06_A"):t==="EVT_ZHIQIU_CH06_SUM"?n("EVT_ZHIQIU_CH06_SPR"):t==="EVT_ZHIQIU_CH06_AUT"?n("EVT_ZHIQIU_CH06_SUM"):t==="EVT_ZHIQIU_CH06_WIN"?n("EVT_ZHIQIU_CH06_AUT"):t==="EVT_ZHIQIU_SP_NIGHT"?n("EVT_ZHIQIU_CH06_WIN"):t==="EVT_ZHIQIU_DAILY_01"||t==="EVT_ZHIQIU_DAILY_02"?n("EVT_ZHIQIU_CH01"):t==="EVT_ZHIQIU_DAILY_03"?n("EVT_ZHIQIU_CH02")&&r.cafeRelation>=40:t==="EVT_ZHIQIU_DAILY_04"?n("EVT_ZHIQIU_CH02"):t==="EVT_ZHIQIU_DAILY_05"?n("EVT_ZHIQIU_CH05"):t==="EVT_ZHIQIU_DAILY_08"?n("EVT_ZHIQIU_CH03"):t==="EVT_ZHIQIU_DAILY_06"?n("EVT_ZHIQIU_CH06_WIN"):t==="EVT_ZHIQIU_DAILY_07"?n("EVT_ZHIQIU_CH03"):!0}function iu(){if(r.month>=26&&r.month<=29)return{event:null,note:"桂花栗子蛋糕的主线期间，秋屿剧情暂缓。"};const e=Ee.zhiQiu.find(n=>!r.played.includes(n.id));return e?e.month>r.month||e.month===r.month&&r.day<e.day?{event:null,note:"今天可以和沈知秋聊聊咖啡与小镇生活。"}:kp(e)?ou()?{event:null,note:"先看完排在前面的主线、母女或苏晴剧情。"}:{event:e,note:"播放「"+e.title+"」"}:{event:null,note:"这段故事的前置条件还没有完成。"}:{event:null,note:"今天可以和沈知秋聊聊咖啡与小镇生活。"}}function Ln(e){switch(e){case"momchat":{const n=la();return{name:"和妈妈聊聊",ap:1,cost:0,note:n.note,disabled:!n.event}}case"zhiqiuchat":{const n=iu(),t=!r.played.includes("EVT_ZHIQIU_CH01")&&r.month<11,s=r.cafeLastTalk===r.dayIndex,l=n.note.indexOf("先看完排在前面的")===0;return{name:"拜访秋屿咖啡",ap:1,cost:0,note:t?"秋屿咖啡的故事从第 11 个月开始。":s?"今天已经来过秋屿咖啡。":n.note,disabled:t||s||l||!nn("cafe").open}}case"restock":return{name:"原料采购",ap:1,cost:0,note:"请前往老街食材铺选择原料",disabled:!0};case"feedback":{const n=_p("feedback");return{name:"顾客反馈",ap:1,cost:0,note:n>0?"还要等 "+n+" 天":"听听顾客对店里的建议",disabled:n>0}}case"talk":{const n=r.staff.length?au()[0].nick:null;return{name:"伙伴交流",ap:1,cost:0,note:n?"和 "+n+" 聊聊近况":"前往前厅触发林暖的月度故事",disabled:!n}}case"sqchat":{const n=r.sqchatMonth===r.month,t=!!Ee.friend[r.month];return{name:"与苏晴互动",ap:1,cost:0,note:n?"这个月已经聊过了":t?"本月专属相处剧情":"本月没有新的互动剧情",disabled:n||!t}}case"market":return{name:"市场宣传",ap:2,cost:800,note:"发布新品内容，让更多人认识林记",disabled:r.cash<800};case"train":return r.staff.length?{name:"员工培训",ap:2,cost:400,note:"为一位伙伴安排专业训练",disabled:r.cash<400}:{name:"员工培训",ap:2,cost:0,note:"还没有伙伴可以培训",disabled:!0};case"decorate":{const n=Mr.find(t=>t.lv===r.shopLevel+1);return n?{name:"装修到「"+n.name+"」",ap:2,cost:n.cost,note:"展示位与产能提升",disabled:r.cash<n.cost}:{name:"店铺装修",ap:2,cost:0,note:"已经是最高等级",disabled:!0}}case"survey":{const n=Ot.find(s=>!r.cities.includes(s.id)&&!r.surveyed.includes(s.id));if(!n)return{name:"外出考察",ap:2,cost:0,note:"没有新的城市可去",disabled:!0};const t=r.month>=n.month&&r.reputation>=n.rep;return{name:"考察"+n.name,ap:2,cost:2e3,note:t?"考察之后可以筹备开店":"需要第 "+n.month+" 个月、口碑 "+n.rep,disabled:!t||r.cash<2e3}}case"branch":{if(!r.surveyed.length)return{name:"分店筹备",ap:3,cost:0,note:"先外出考察一座城市",disabled:!0};const n=Ot.find(t=>t.id===r.surveyed[0]);return{name:"在"+n.name+"开店",ap:3,cost:n.cost,note:"在当地开设一间新店",disabled:r.cash<n.cost}}case"coffee":return{name:"喝一杯手冲",ap:0,cost:18,note:"喝杯热饮，歇一会儿",disabled:r.cash<18};case"walk":return{name:"沿河散步",ap:0,cost:0,note:"吹吹河风，调整状态"};default:return{name:e,ap:1,cost:0,note:""}}}function Kt(e,n){if(r.phase!=="playing"||r.dayPhase!=="prep")return!1;const t=Ln(e);if(t.disabled||r.ap<t.ap||t.cost&&r.cash<t.cost)return!1;const s=r.cash;switch(e){case"restock":return!1;case"feedback":r.reputation=He(r.reputation+1),r.loyalty=He(r.loyalty+2),Te("认真听了顾客的意见，口碑上升");break;case"coffee":r.cash-=18,r.stamina=Math.min(r.maxStamina,r.stamina+12),Te("在秋屿咖啡喝了杯手冲，体力回来了些");break;case"walk":r.reputation=He(r.reputation+.5),r.loyalty=He(r.loyalty+2),Te("沿河走了一圈，脑子清醒多了");break;case"talk":if(r.staff.length){const l=n&&n.partner?n.partner:r.staff[0];if(!r.staff.includes(l))return!1;r.partnerTrust[l]=He((r.partnerTrust[l]||0)+6);const o=Gt(l);Te("和 "+(o?o.nick:"伙伴")+" 聊了很久，信赖 +6")}else return!1;break;case"momchat":{const l=la();if(!l.event)return!1;we.events.unshift(l.event),r.autoStory=!0,Te("和妈妈聊起了「"+l.event.title+"」","story");break}case"zhiqiuchat":{const l=iu();r.cafeLastTalk=r.dayIndex,r.cafeRelation=He(r.cafeRelation+3),r.played.includes("EVT_ZHIQIU_CH01")&&(r.cafeDailyTalks+=1),l.event?(we.events.unshift(l.event),r.autoStory=!0,Te("在秋屿咖啡和沈知秋聊起了「"+l.event.title+"」","story")):Te("在秋屿咖啡和沈知秋聊了聊近况");break}case"sqchat":{const l=Ee.friend[r.month];if(!l)return!1;r.sqchatMonth=r.month,r.autoStory=!0;const o=we.events.findIndex(i=>i.id===l.id);o>=0&&we.events.splice(o,1),we.events.unshift(l),Te("和苏晴度过了一段只属于两人的时间");break}case"market":r.cash-=800,r.popularity=He(r.popularity+2),r.brand=He(r.brand+1.5),Te("发了新品帖子，知名度上升");break;case"train":{if(!r.staff.length)return!1;const l=n&&n.partner?n.partner:r.staff[0];r.cash-=400,r.partnerSkill[l]=Math.min(5,(r.partnerSkill[l]||1)+1);const o=Gt(l);Te("培训了 "+(o?o.nick:"伙伴")+"，专业能力提升");break}case"decorate":{const l=Mr.find(o=>o.lv===r.shopLevel+1);if(!l)return!1;r.cash-=l.cost,r.shopLevel=l.lv,r.maxAp=8+(l.ap||0),r.reputation=He(r.reputation+3),r.style.community+=2,Te("店铺升级为「"+l.name+"」","good");break}case"survey":{const l=Ot.find(o=>!r.cities.includes(o.id)&&!r.surveyed.includes(o.id));if(!l)return!1;r.cash-=2e3,r.surveyed.push(l.id),Te("去"+l.name+"看了一圈，可以筹备开店了");break}case"branch":{const l=Ot.find(o=>o.id===r.surveyed[0]);if(!l)return!1;r.cash-=l.cost,r.storeCount+=1,r.cities.push(l.id),r.surveyed=r.surveyed.filter(o=>o!==l.id),r.brand=He(r.brand+6),r.style.efficiency+=3,Te("在"+l.name+"开了新店","good");break}default:return!1}return r.ap-=t.ap,po[e]&&(r.cd[e]=r.dayIndex+po[e]),s>r.cash&&(r.monthCost+=s-r.cash),s>r.cash&&(r.daySpend+=s-r.cash),de(),!0}function uu(e,n){if(r.dayPhase!=="prep"||!r.unlocked.includes(e))return;const t=Math.max(0,Math.min(12,Math.floor(n||0)));t===0?delete r.plan[e]:r.plan[e]=t,de()}function El(){if(r.phase!=="playing"||r.dayPhase!=="prep")return{ok:!1,msg:"当前不是制作阶段。"};if(!r.productionResult)return{ok:!1,msg:"先完成或跳过主打蛋糕小游戏。"};const e=Object.keys(r.plan);if(!e.length)return{ok:!1,msg:"先去厨房排一下今天的产量"};const n=e.reduce((i,c)=>i+r.plan[c],0),t=Os();if(Object.keys(t).length)return{ok:!1,msg:"原料不足："+Object.entries(t).map(([i,c])=>bn.find(v=>v.id===i).name+" ×"+Math.ceil(c)).join("、")};const s=na();if(s>wt.value)return{ok:!1,msg:"产能不够。今天的产能是 "+wt.value+" 点，还差 "+(s-wt.value)};const l=Zi+r.staff.length*Yi+Pt("oven"),o=Math.round(Math.max(0,s-l)*(1-Pt("mixer")));for(const i of e)for(let c=0;c<r.plan[i];c++)Jl(i,1);r.stamina=Math.max(0,r.stamina-o);for(const i of e)r.shelf[i]=(r.shelf[i]||0)+r.plan[i],r.dayMade+=r.plan[i],r.levels[i]=Math.min(5,(r.levels[i]||1)+r.plan[i]*.02),r.batches.push({id:"b"+r.dayIndex+"-"+i+"-"+r.batches.length,product:i,qty:r.plan[i],quality:i===r.productionResult.product?r.productionResult.quality:"normal",decoration:i===r.productionResult.product?r.productionResult.decoration:null});return Te("做了 "+n+" 个蛋糕，自己出了 "+o+" 点体力"),r.plan={},r.productionMini=null,r.productionResult=null,r.dayPhase="service-ready",de(),{ok:!0,msg:"做好了 "+n+" 个"}}const vo=["mix","oven","piping","fruit"];function Mp(){if(r.dayPhase!=="prep"||r.productionMini||!Object.keys(r.plan).length)return!1;const e=Object.keys(r.plan).sort((n,t)=>r.plan[t]-r.plan[n])[0];return r.productionMini={type:vo[Math.floor(Math.random()*vo.length)],product:e,window:58+Math.floor(Math.random()*20),pattern:Math.floor(Math.random()*3)},de(),!0}function $p(e=0,n=!1,t=null){const s=r.productionMini;if(!s||r.productionResult)return{ok:!1,message:"制作小游戏已结算。"};const l=n?0:Math.max(0,Math.min(100,Math.round(e)));r.productionResult={product:s.product,quality:l>=90?"perfect":l>=70?"fine":"normal",score:l,priceBonus:l>=90?.1:l>=70?.05:0,decoration:t},r.productionMini=null;const o=El();if(o.ok&&!n){const i=l>=90?30:l>=70?12:0;return r.cash+=i,r.dayRev+=i,r.monthRev+=i,r.bakingRecords=[...r.bakingRecords||[],{day:r.dayIndex,product:s.product,score:l,bonus:i}].slice(-50),r.levels[s.product]=Math.min(5,(r.levels[s.product]||1)+l/1e3),de(),{...o,bonus:i,score:l}}return o}function Cp(){return qn.value.filter(e=>(r.shelf[e.id]||0)>0).map(e=>e.id)}function Ip(e,n){const t={...n},s=[];for(let l=0;l<e;l++){const o=Object.keys(t).filter(v=>t[v]>0);if(!o.length)break;const i=o[Math.floor(Math.random()*o.length)],c=1+Math.floor(Math.random()*Math.min(2,t[i]));t[i]-=c,s.push({product:i,qty:c,customer:["帶孩子的家長","放學的學生","散步的街坊","外地遊客"][Math.floor(Math.random()*4)]})}return s}function cu(e,n,t){var o;const s=yu(e,n),l=Math.round(s.reduce((i,c)=>i+t*c.qty*(c.quality==="perfect"?1.1:c.quality==="fine"?1.05:1),0));return r.shelf[e]=Math.max(0,(r.shelf[e]||0)-n),r.cash+=l,r.dayRev+=l,r.monthRev+=l,r.daySold+=n,r.monthSold[e]=(r.monthSold[e]||0)+n,((o=r.challenge)==null?void 0:o.type)==="new"&&r.challenge.target===e&&(r.marketRun&&(r.marketRun.challengeNewSold=(r.marketRun.challengeNewSold||0)+n),r.cafeRun&&(r.cafeRun.challengeNewSold=(r.cafeRun.challengeNewSold||0)+n)),l}function du(e,n,t){if(n.recorded)return;const s=e+"-m"+n.month,l={id:s,month:n.month,day:n.day,sold:n.sold||0,revenue:n.revenue||0,success:t,score:n.score||0,menu:n.menu||null};r.activityRecords[e]=[...(r.activityRecords[e]||[]).filter(o=>o.id!==s),l],r.career.activityRecords[e]=[...new Set([...r.career.activityRecords[e]||[],s])],n.recorded=!0,n.completed=!0,e==="cafe"&&(r.cafeCollab+=l.sold),de()}function Ep(e={}){if(r.marketRun&&!r.marketRun.completed)return{ok:!0,resumed:!0};if(r.dayPhase!=="service-ready")return{ok:!1,message:"先完成今天的制作，再带蛋糕去市集。"};if((r.activityRecords.market||[]).some(s=>s.month===r.month))return{ok:!1,message:"本月的市集活动已经结算。"};const n=Object.fromEntries(Cp().map(s=>{var l;return[s,Math.min(r.shelf[s],Math.max(0,Math.floor(((l=e.inventory)==null?void 0:l[s])??r.shelf[s])))]}).filter(([,s])=>s>0));if(!Object.keys(n).length)return{ok:!1,message:"展示柜里还没有可以带去市集的蛋糕。"};const t=Ip(5,n);return r.marketRun={month:r.month,day:r.day,inventory:n,theme:String(e.theme||"小镇甜品市集"),target:Math.ceil(t.length*.6),demands:t,customerIndex:0,sold:0,revenue:0,score:0,misses:0,completed:!1,recorded:!1},de(),{ok:!0,resumed:!1}}function fu(){const e=r.marketRun;return e&&!e.completed&&e.demands[e.customerIndex]||null}function Tp(e){const n=r.marketRun,t=fu();if(!n||!t||n.completed)return{ok:!1,message:"今天的市集已经结束。"};if(e!==t.product)return n.misses+=1,n.customerIndex+=1,n.customerIndex>=n.demands.length?Tl():de(),{ok:!1,message:"这位顾客想要"+Ue(t.product).name+"，只好先去别的摊位看看。"};if((r.shelf[e]||0)<t.qty||(n.inventory[e]||0)<t.qty)return{ok:!1,message:"摊位配货不足，无法交付这么多份。"};const s=cu(e,t.qty,Gn(e));return n.inventory[e]-=t.qty,n.sold+=t.qty,n.revenue+=s,n.score+=1,n.customerIndex+=1,n.customerIndex>=n.demands.length?Tl():de(),{ok:!0,message:"市集成交："+Ue(e).name+" ×"+t.qty+"，收入 ¥"+s+"。"}}function sl(){const e=r.marketRun;return!e||e.completed?!1:(e.misses+=1,e.customerIndex+=1,e.customerIndex>=e.demands.length?Tl():de(),!0)}function Tl(){const e=r.marketRun;if(!e||e.recorded)return;const n=e.score>=Math.ceil(e.demands.length*.6),t=n?Math.round(e.revenue*.05):0;t&&(r.cash+=t,r.dayRev+=t,r.monthRev+=t,e.revenue+=t),n&&(r.marketPoints=(r.marketPoints||0)+e.score*10),du("market",e,n)}function xp(e,n=1){const t=r.marketRun;if(!t||t.completed||!r.unlocked.includes(e))return{ok:!1,message:"当前无法补货。"};const s=(r.shelf[e]||0)-(t.inventory[e]||0),l=Math.max(1,Math.floor(n));if(s<l)return{ok:!1,message:"店铺没有多余的现货可调拨。"};const o=l*5;return r.cash<o?{ok:!1,message:"运货费用不足。"}:(r.cash-=o,r.monthCost+=o,r.daySpend+=o,t.inventory[e]=(t.inventory[e]||0)+l,t.misses+=.2,de(),{ok:!0,message:`调拨了 ${l} 份，运费 ¥${o}。`})}const Qt={americano:"bold",latte:"mellow",cappuccino:"mellow",mocha:"bold",iced:"fresh"},mo={plain:"mellow",strawberry:"mellow",chocolate:"bold",taro:"bold",matcha:"fresh",mango:"fresh",tiramisu:"bold",fig:"fresh",seasonal:"fresh",custom:"mellow",festival:"bold",signature:"bold"},wp={americano:"美式",latte:"拿铁",cappuccino:"卡布奇诺",mocha:"摩卡",iced:"冰咖啡"},Sp={matcha:["latte","cappuccino","iced"],strawberry:["latte","cappuccino","iced"],tiramisu:["americano","mocha","cappuccino"]};function pu(e,n){if(!mo[e]||!Qt[n])return!1;const t=Sp[e];return t?t.includes(n):mo[e]===Qt[n]}function Ap({product:e,coffee:n,price:t,theme:s}={}){if(r.cafeRun&&!r.cafeRun.completed)return{ok:!0,resumed:!0};if(r.dayPhase!=="service-ready")return{ok:!1,message:"先完成今天的制作，再开始咖啡联名。"};if((r.activityRecords.cafe||[]).some(v=>v.month===r.month))return{ok:!1,message:"本月的咖啡联名已经结算。"};if(!r.unlocked.includes(e)||!Qt[n])return{ok:!1,message:"请选择已上架的蛋糕和咖啡。"};if((r.shelf[e]||0)<1)return{ok:!1,message:"展示柜里没有这款蛋糕。"};const l=Math.max(1,Math.round(Number(t)||0)),o=Qt[n],i={mellow:"fresh",fresh:"bold",bold:"mellow"}[o],c=[o,o,i].map((v,m)=>({customer:["附近居民","年轻客人","咖啡爱好者"][m],profile:v}));return r.cafeRun={month:r.month,day:r.day,menu:{product:e,coffee:n,price:l,theme:String(s||"栖云午后")},customers:c,customerIndex:0,sold:0,revenue:0,score:0,misses:0,completed:!1,recorded:!1},de(),{ok:!0,resumed:!1}}function vu(){const e=r.cafeRun;return e&&!e.completed&&e.customers[e.customerIndex]||null}function Np(e=null){const n=r.cafeRun,t=vu();if(!n||!t||n.completed)return{ok:!1,message:"本次联名已经结束。"};const{price:s}=n.menu,l=(e==null?void 0:e.product)||n.menu.product,o=(e==null?void 0:e.coffee)||n.menu.coffee;if(!r.unlocked.includes(l)||!Qt[o])return{ok:!1,message:"请选择已解锁的蛋糕和咖啡。"};const i=pu(l,o),c=s<=Math.round(Gn(l)*1.25+65);if(!(i&&c&&(t.profile===Qt[o]||n.menu.theme==="四季果香")))return n.misses+=1,de(),{ok:!1,message:i?c?"这位顾客想要另一种风味，请换搭配。":"套餐价格超过了顾客预算，请在下一轮调整。":"蛋糕与咖啡的风味没有搭好，再试一份。"};if((r.shelf[l]||0)<1)return{ok:!1,message:"这款蛋糕售罄，无法完成联名订单。"};const m=cu(l,1,s);return r.cash-=8,r.monthCost+=8,r.daySpend+=8,n.sold+=1,n.revenue+=m,n.menu.lastServed={product:l,coffee:o},n.score+=1,n.customerIndex+=1,n.customerIndex>=n.customers.length?mu():de(),{ok:!0,message:"联名套餐交付："+Ue(l).name+" + "+wp[o]+"，收入 ¥"+m+"。"}}function Op(){const e=r.cafeRun;return!e||e.completed?!1:(e.misses+=1,e.customerIndex+=1,e.customerIndex>=e.customers.length?mu():de(),!0)}function mu(){const e=r.cafeRun;if(!e||e.recorded)return;const n=e.score>=2,t=n?Math.round(e.revenue*.05):0;t&&(r.cash+=t,r.dayRev+=t,r.monthRev+=t,e.revenue+=t),du("cafe",e,n)}function Pp(){r.orders=[];const e=Math.min(.9,.55+r.popularity/350),n=1+(Math.random()<e?1:0);for(let t=0;t<n;t++){const s=qn.value;if(!s.length)break;const l=s[Math.floor(Math.random()*s.length)],o=Math.random(),i=o<.35,c=!i&&o<.68,v=!i&&!c&&o<.8,m=i?"定制":c?"线上":v?"节日":"普通",p=i?1:1+Math.floor(Math.random()*3);r.orders.push({id:"o"+r.month+"-"+r.day+"-"+t,orderNo:"LJ-"+String(r.month).padStart(2,"0")+String(r.day).padStart(2,"0")+"-"+String(t+1).padStart(2,"0"),type:m,customer:i?"预约顾客":c?"线上顾客":v?"节日顾客":"附近顾客",product:l.id,qty:p,pay:Math.round(Gn(l.id)*p*(i?1.6*(1+Pt("packing")):c?1.25:1)),due:i?["粉色小花","清爽配色","简洁裱花"][Math.floor(Math.random()*3)]:"",blessing:i?["生日快乐","愿你每天都有好心情","把今天的甜分享给你"][Math.floor(Math.random()*3)]:"",taken:!1})}}function hu(e){if(r.dayPhase!=="prep")return!1;const n=r.orders.find(t=>t.id===e);return n?(n.taken=!n.taken,de(),!0):!1}function gu(e,n=1){const t=r.batches.filter(s=>s.product===e&&s.qty>0);return t.reduce((s,l)=>s+l.qty,0)>=n?t[0]:null}function yu(e,n){const t=r.batches.filter(o=>o.product===e&&o.qty>0);if(t.reduce((o,i)=>o+i.qty,0)<n)return[{qty:n,quality:"normal"}];let s=n;const l=[];for(const o of t){const i=Math.min(s,o.qty);if(i&&(o.qty-=i,l.push({qty:i,quality:o.quality||"normal"}),s-=i,!s))break}return s?[{qty:n,quality:"normal"}]:l}function bu(){var p;if(r.phase!=="playing"||r.dayPhase!=="service-ready"||r.service)return null;const e={tickets:[],current:0,unhappy:0,startedAt:Date.now(),formalBusiness:!0,automationUnlocked:aa()},n=r.orders.filter(_=>_.taken);n.forEach(_=>{const g=30+5*(_.qty-1);e.tickets.push({..._,kind:"appointment",status:"waiting",patience:g,remaining:g,customSatisfied:!0})});const t=Math.max(1,Math.min(4,r.shopLevel)),s=[[3,5],[5,7],[7,9],[9,12]],[l,o]=s[t-1],i=l+Math.floor(Math.random()*(o-l+1)),c=Math.max(0,r.reputation-20)/240+Math.max(0,r.popularity-10)/350+Math.max(0,r.loyalty-20)/400,v=Math.max(l,Math.min(o,Math.round(i*(1+c+$l.value*.02+Pt("display"))))),m=Math.max(1,v-n.length);for(let _=0;_<m;_++){const g=ea().find(T=>_===0),h=qn.value,C=g?Ue(g.product):h[Math.floor(Math.random()*h.length)],b=1+Math.floor(Math.random()*3),E=30+5*(b-1);e.tickets.push({id:"visit-"+r.dayIndex+"-"+_,kind:"walkin",type:g?"熟客":"到店",customer:g?g.name:["附近居民","学生顾客","路过的客人","带孩子的家长","年轻客人"][Math.floor(Math.random()*5)],product:C.id,qty:b,pay:Gn(C.id)*b,clue:g?"我还是想买那款熟悉的蛋糕。":Dp(C.id),due:"",blessing:"",status:"waiting",patience:E,remaining:E,customSatisfied:!0})}return r.orders=[],r.service=e,r.dayPhase="service",e.activeTicketId=((p=e.tickets[0])==null?void 0:p.id)||null,e.automationUnlocked&&r.staffAssignments.auto&&jp(),de(),{customers:e.tickets.length}}const Rp={plain:"想吃一款奶油薄一点、味道熟悉的经典蛋糕。",strawberry:"今天想买草莓酸甜口的奶油蛋糕。",chocolate:"有偏浓的可可味蛋糕吗？",taro:"想尝尝芋泥和脆脆夹心的搭配。",matcha:"有清香的茶味吗？希望甜度低一些。",mango:"想要清爽一点的芒果甜点。",tiramisu:"今天想吃咖啡味和奶酪味的蛋糕。",fig:"有没有放新鲜水果、奶油又轻一点的蛋糕？",seasonal:"想挑一款能尝到当季水果的蛋糕。",custom:"想订一份适合庆祝的精致蛋糕。",festival:"最近过节，想带一份有节日气氛的点心。",signature:"听说有桂花和栗子的秋日招牌。"};function Dp(e){return Rp[e]||"想挑一款店里受欢迎的蛋糕。"}function aa(){return r.shopLevel>=3&&r.staff.filter(e=>(r.partnerSkill[e]||1)>=3).length>=3}function zt(e=r.service){if(!e)return[];const n=Math.max(1,Math.min(3,r.shopLevel));return e.tickets.slice(e.current,e.current+n).filter(t=>!["delivered","unavailable"].includes(t.status))}function Rs(e=r.service){const n=zt(e);return n.find(t=>t.id===(e==null?void 0:e.activeTicketId))||n[0]||null}function Jt(e){return r.dayPhase!=="service"||!r.service||!zt().some(n=>n.id===e)?!1:(r.service.activeTicketId=e,de(),!0)}function _u(e){var n;for(;e.current<e.tickets.length&&["delivered","unavailable"].includes(e.tickets[e.current].status);)e.current+=1;e.activeTicketId=((n=zt(e)[0])==null?void 0:n.id)||null}function ho(e){if(r.phase!=="playing"||r.dayPhase!=="prep")return!1;const n=new Set(r.staff),t={picker:null,packer:null,auto:!1,...e||{}};return t.picker&&!n.has(t.picker)&&(t.picker=null),t.packer&&!n.has(t.packer)&&(t.packer=null),t.picker&&t.picker===t.packer&&(t.packer=null),aa()||(t.auto=!1),r.staffAssignments=t,de(),!0}function Vp(e,n,t){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"現在不是营业接待阶段。"};const s=Rs();if(!s||s.id!==e||s.status!=="waiting")return{ok:!1,message:"这位顾客的订单已在处理。"};if(n!==s.product)return{ok:!1,message:"口味不符合顾客需求，再找找看。"};if(t!==s.qty)return{ok:!1,message:"请按顾客的数量要求找蛋糕。"};if((r.shelf[n]||0)<t)return{ok:!1,message:"展示柜里的数量不够。"};if(zt().filter(o=>o.status==="searching").length>=1+(r.staffAssignments.picker?1:0))return{ok:!1,message:"找货工位正忙，先支援或处理另一位顾客。"};const l=gu(n,t);return l?(s.selected=n,s.selectedQty=t,s.packBatchId=l.id,s.findRemaining=2/Hp("picker"),s.status="searching",de(),{ok:!0,message:"在展示柜里找蛋糕。"}):{ok:!1,message:"展示柜里找不到这批蛋糕。"}}function Lp(e,n=null,t=null){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"現在不是营业接待阶段。"};const s=Rs();return!s||s.id!==e||s.status!=="found"?{ok:!1,message:"先从展示柜取出正确的蛋糕。"}:s.type==="定制"&&n!==s.due?{ok:!1,message:"装饰还没有符合预订要求。"}:s.type==="定制"&&t!==s.blessing?{ok:!1,message:"祝福语还没有符合预订要求。"}:zt().filter(l=>l.status==="packing").length>=1+(r.staffAssignments.packer?1:0)?{ok:!1,message:"打包工位正忙，先支援或处理另一位顾客。"}:(s.decoration=n,s.packedBlessing=t,s.packRemaining=3.6,s.packElapsed=0,s.status="packing",de(),{ok:!0,message:"开始打包。"})}function Hp(e){const n=r.staffAssignments&&r.staffAssignments[e];return n&&r.staff.includes(n)?1+Math.max(0,(r.partnerSkill[n]||1)-1)*.15:1}function Fp(e=1){if(r.dayPhase!=="service"||!r.service)return;const n=Math.max(0,e);zt().forEach(t=>{if(t.remaining=Math.max(0,t.remaining-n),t.status==="searching"&&(t.findRemaining=Math.max(0,t.findRemaining-n),t.findRemaining===0&&(t.status="found")),t.status==="packing"&&(t.packRemaining=Math.max(0,t.packRemaining-n),t.packElapsed=Math.min(3.6,(t.packElapsed||0)+n),t.packRemaining===0&&(t.status="ready")),t.remaining===0&&!t.unhappy){t.unhappy=!0,r.service.unhappy+=1;const s=Math.min(.1,Math.max(0,.5-(r.dayReputationLoss||0)));r.dayReputationLoss=(r.dayReputationLoss||0)+s,r.reputation=He(r.reputation-s),Te(t.customer+"等得有些久，耐心少了一点。","bad")}}),Math.floor(Date.now()/1e3)!==r.service.lastSavedSecond&&(r.service.lastSavedSecond=Math.floor(Date.now()/1e3),de())}function xl(e){if(r.dayPhase!=="service"||!r.service)return{ok:!1,message:"营业已结束。"};const n=r.service,t=Rs(n);if(!t||t.id!==e||t.status!=="ready")return{ok:!1,message:"蛋糕还没包好。"};if((r.shelf[t.product]||0)<t.qty)return{ok:!1,message:"展示柜里的数量不够。"};const s=yu(t.product,t.qty);r.shelf[t.product]-=t.qty;const l=t.pay/t.qty,o=Math.round(s.reduce((i,c)=>i+l*c.qty*(c.quality==="perfect"?1.1:c.quality==="fine"?1.05:1),0));return r.cash+=o,r.dayRev+=o,r.monthRev+=o,r.daySold+=t.qty,r.monthSold[t.product]=(r.monthSold[t.product]||0)+t.qty,r.doneOrders+=1,t.type==="定制"&&(r.customOrders+=1,r.customOrderMonths.push(r.month),r.month===5&&(r.customAtM5=!0)),t.type==="线上"&&(r.onlineOrders+=1),t.type==="节日"&&(r.festivalOrders+=1),(t.customer==="张奶奶"||t.customer==="陈叔")&&rp({[t.product]:t.qty}),r.loyalty=He(r.loyalty+.15),r.popularity=He(r.popularity+.02),t.revenue=o,t.status="delivered",Te("交付「"+Ue(t.product).name+"」×"+t.qty+"，收入 ¥"+o+" 已到账","good"),t.type==="定制"&&(n.customDone=(n.customDone||0)+1),r.challenge&&r.challenge.type==="new"&&r.challenge.target===t.product&&(n.challengeNewSold=(n.challengeNewSold||0)+t.qty),_u(n),oa(),de(),{ok:!0,message:t.customer+"收下了蛋糕，¥"+o+" 已到账。"}}function Up(e){const n=r.service,t=Rs(n);return!t||t.id!==e||r.dayPhase!=="service"?!1:(t.status="unavailable",_u(n),oa(),de(),!0)}function jp(){const e=r.service;if(e){for(;e.current<e.tickets.length;){const n=e.tickets[e.current];if(e.activeTicketId=n.id,(r.shelf[n.product]||0)<n.qty){n.status="unavailable",e.current+=1;continue}n.status="ready",n.packBatchId=(gu(n.product,n.qty)||{}).id,xl(n.id)}oa()}}function oa(){const e=r.service;if(!e||e.current<e.tickets.length)return;r.dayPhase="closing";const n=e.tickets.filter(t=>t.status==="delivered").length;if(n&&(r.reputation=He(r.reputation+.06),r.loyalty=He(r.loyalty+.1)),!r.challengeDone&&r.challenge){const t=r.daySold,s=Object.values(r.shelf).reduce((o,i)=>o+i,0),l=r.challenge.type==="stock"?s/Math.max(1,t+s)<=.1:r.challenge.type==="new"?(e.challengeNewSold||0)>=3:(e.customDone||0)>0;if(l){const o=Math.round(r.dayRev*.05);r.cash+=o,r.dayRev+=o,r.monthRev+=o,Te("今日经营挑战完成，额外收入 ¥"+o,"good")}r.challengeDone=!0,Te("今日经营挑战："+(l?"完成":"未完成"),l?"good":"normal")}Te("营业结束，完成 "+n+" / "+e.tickets.length+" 位顾客","good"),de()}const wl={discount:{label:"打折卖掉",cashRate:.5,community:1},staff:{label:"留给伙伴",cashRate:0,community:2},share:{label:"社区分享",cashRate:0,community:3},waste:{label:"报损处理",cashRate:0,community:0}};function ia(e){if(r.phase!=="playing"||r.dayPhase!=="closing")return null;r.service&&r.service.formalBusiness&&!r.service.formalCounted&&(r.formalBusinessDays+=1,r.service.formalCounted=!0);const n=wl[e]||wl.discount;let t=0,s=0;for(const i of Object.keys(r.shelf))t+=r.shelf[i]||0,s+=(r.shelf[i]||0)*Gn(i);let l=0;if(t>0){const i=n.cashRate>0?n.cashRate+Pt("fridge"):0;l=Math.round(s*i),r.cash+=l,n.community&&(r.style.community+=n.community*.3,r.reputation=He(r.reputation+n.community*.05))}r.dayLeft=t,r.shelf={},r.batches=[];const o={day:r.day,rev:r.dayRev,sold:r.daySold,left:t,gain:l};return r.dailyLedger.unshift({month:r.month,day:r.day,rev:r.dayRev+l,cost:r.daySpend,sold:r.daySold,orders:r.doneOrders}),r.dailyLedger=r.dailyLedger.slice(0,40),r.dayRev=0,r.daySold=0,r.dayMade=0,r.dayPhase="report",r.service=null,Gp(),r.phase==="playing"&&Dr(),de(),o}function qp(){return r.phase!=="playing"||!["prep","service-ready","closing"].includes(r.dayPhase)?null:(r.dayPhase="closing",ia("discount"))}function Gp(){r.day+=1,r.dayIndex+=1,r.day>Ir?(r.day=1,Bp()):Ds()}function Ds(){r.daySpend=0,r.ap=r.maxAp,r.stamina=Math.min(r.maxStamina,r.stamina+70),r.plan={},r.dayPhase="prep",r.service=null,r.productionMini=null,r.productionResult=null,r.dayReputationLoss=0,r.challengeDone=!1,Xi(),r.shelf||(r.shelf={}),Pp(),de()}function Bp(){const e=Ji.value;r.monthCost+=e,r.cash-=e;let n=null;r.cash<0&&(r.usedMomHelp?(r.cash=0,r.reputation=He(r.reputation-2),n="这个月很难，勉强撑过去了"):(r.cash=3e3,r.usedMomHelp=!0,n="资金见底，妈妈先垫了一笔周转"),Te(n,"bad"));let t=null,s=0;Object.keys(r.monthSold).forEach(m=>{r.monthSold[m]>s&&(s=r.monthSold[m],t=m)});const l=r.monthSnap||{rep:r.reputation,unlocked:[],skill:{}},o=r.unlocked.filter(m=>l.unlocked.indexOf(m)<0),i=[];r.staff.forEach(m=>{const p=l.skill[m]||0,_=r.partnerSkill[m]||0;if(_-p>=.3){const g=Gt(m);i.push((g?g.nick||g.name:m)+" 专业 +"+(_-p).toFixed(1))}}),r.report={month:r.month,rev:r.monthRev,cost:r.monthCost,net:r.monthRev-r.monthCost,best:t?Ue(t).name:"—",bestN:s,warn:n,fresh:o.map(m=>(Ue(m)||{}).name).filter(Boolean),repDelta:Math.round((r.reputation-l.rep)*10)/10,rep:Math.round(r.reputation),grown:i,trust:Object.keys(r.partnerTrust).map(m=>{const p=Gt(m);return{name:p?p.nick||p.name:m,v:Math.round(r.partnerTrust[m]||0)}})},r.monthSnap={rep:r.reputation,unlocked:r.unlocked.slice(),skill:Object.assign({},r.partnerSkill)};const c=r.month;if(r.month+=1,r.monthRev=0,r.monthCost=0,r.monthSold={},r.shelf={},Nt.forEach(m=>{m.joinMonth===r.month&&lu(m.id)}),c===29){const m=Object.values(r.partnerTrust).filter(p=>p>=70).length;r.helpers=m+(r.momBond>=70?1:0)}const v=Bt.find(m=>m.to===c&&!m.final);if(v){const m=Ee.stages[v.id];if(!Kp(v)){r.phase="ended",r.ending={...v.short,key:v.short.key,text:""},m&&m.failId&&Et(Ee.find(m.failId)),Te("阶段目标没有达成","bad"),de();return}r.stage=v.id+1,m&&m.pass.length&&Et({id:"STAGE_PASS_"+v.id,title:v.name+" · 阶段达成",chapter:v.name,kind:"stage",beats:m.pass}),Te("第 "+v.id+" 阶段目标达成","good")}if(r.month>36){r.month=36,r.phase="ended";const m=zp();r.ending={...Li[m],key:m},Et(Ee.find(Qp[m])),de();return}r.stamina=r.maxStamina,Ds(),Dr()}const Qp={community:"EVT_FINAL_END_COMMUNITY",tradition:"EVT_FINAL_END_TRADITION",creative:"EVT_FINAL_END_INNOVATION",regional:"EVT_FINAL_END_REGIONAL",national:"EVT_FINAL_END_NATIONAL",transfer:"EVT_FINAL_END_TRANSFER"};function Kp(e){if(!e.goals.length)return!0;const n=e.goals.filter(t=>t.check(r));return!(n.length<e.need||e.needExpand&&!n.some(t=>t.expand))}function zp(){if(r.acquired)return"transfer";if(r.storeCount>=6)return"national";if(r.storeCount>=3)return"regional";const e=r.style,n=Object.keys(e).sort((s,l)=>e[l]-e[s])[0];return{tradition:"tradition",innovation:"creative",community:"community",efficiency:"regional"}[n]||"community"}function Et(e){e&&(we.events.find(n=>n.id===e.id)||we.events.push(e))}function Dr(){const e=Ee.events.filter(l=>!(l.kind!=="main"||r.played.includes(l.id)||l.month==null||r.month<l.month||l.test&&!kl(l.test,r)));e.sort((l,o)=>l.month-o.month||l.order-o.order),e.forEach(Et),Ee.events.filter(l=>l.kind==="style"&&!r.played.includes(l.id)&&kl(l.test,r)).forEach(Et);const n=l=>l.month<r.month||l.month===r.month&&l.day<=r.day,t=l=>{const o=i=>r.played.includes(i);return l.id==="EVT_CROSS_M18"?o("EVT_GRANNY_M17")&&o("EVT_UNCLE_M16"):l.id==="EVT_CROSS_M28"?o("EVT_GRANNY_M25")&&o("EVT_UNCLE_M24")&&o("EVT_XIAOMAN_M25"):!0};["张奶奶","陈叔","小满"].forEach(l=>{const o=Ee.customers.find(i=>i.regularPerson===l&&!r.played.includes(i.id));o&&n(o)&&t(o)&&Et(o)});const s=Ee.customers.find(l=>l.group&&!r.played.includes(l.id));s&&n(s)&&t(s)&&Et(s)}function Zp(e){const n=Ee.events.filter(l=>l.kind==="tutorial").sort((l,o)=>(l.order||0)-(o.order||0)),t=e?n.filter(l=>l.id!=="EVT_TUTORIAL_SKIP"):n.filter(l=>l.id==="EVT_TUTORIAL_SKIP"),s=t.filter(l=>!we.events.some(o=>o.id===l.id));return we.events.unshift(...s),r.tutorialSeen=!0,r.tutorialPromptPending=!1,r.tutorialProgress=e?1:0,de(),t.length}const Yp=[{season:0,title:"春日花卉节",place:"公园 · 小镇市集",materials:["strawberry","decor"],detail:"草莓与花卉装饰是春季订单的主角。"},{season:1,title:"夏日水果节",place:"秋屿咖啡 · 小镇市集",materials:["mango","strawberry"],detail:"准备新鲜水果，留意秋屿咖啡的夏日联名邀请。"},{season:2,title:"秋日丰收季",place:"小镇市集",materials:["chestnut","decor"],detail:"秋栗与坚果风味适合节日摊位。"},{season:3,title:"暖冬甜品节",place:"林记烘焙 · 秋屿咖啡",materials:["cocoa","decor"],detail:"巧克力与礼盒订单会更受欢迎。"}];function ku(e=r.month){return Yp[Math.floor((e-1)%12/3)]}function nn(e){switch(e){case"school":return{open:!1,reason:"高中仅在回忆与主线剧情中出现，不作为日常地图。"};case"home":return{open:r.dayIndex>=2,reason:"第一天营业结束后，林念才有时间回家整理。"};case"park":return{open:r.dayIndex>=2,reason:"完成第一天经营后，苏晴会带你熟悉公园。"};case"river":return{open:(r.sceneVisits.park||0)>0&&(r.sqchatMonth>0||r.dayIndex>=3),reason:"先去公园散步，认识通往河岸的小路。"};case"lab":return{open:r.month>=3&&r.unlocked.length>=3,reason:"掌握三款基础配方，并经营到第 3 个月。"};case"staff":return{open:r.staff.length>=1,reason:"招聘第一位伙伴后开放排班板。"};case"studio":return{open:r.customOrders>=1,reason:"完成第一份定制订单后，叶星河会邀请你来设计。"};case"cafe":return{open:r.shopLevel>=2&&r.month>=6,reason:"店铺达到 Lv2 且进入第 6 个月，秋屿咖啡开放。"};case"market":return{open:r.shopLevel>=3&&r.month>=6,reason:"店铺达到 Lv3，并完成前期经营（第 6 个月起）。"};case"store":return{open:r.shopLevel>=4&&r.customOrders>=2&&r.brand>=25&&r.month>=19,reason:"店铺 Lv4、完成 2 份定制、品牌 ≥25，并推进到第 19 个月。"};default:return{open:!0,reason:""}}}function St(e,n,t="shop"){(r.notices||[]).some(s=>s.title===e)||(r.notices.unshift({id:"n-"+Date.now()+"-"+r.notices.length,title:e,detail:n,target:t,month:r.month,day:r.day,seen:!1}),r.notices=r.notices.slice(0,60),de())}function Mu(e){return nn(e).open?(r.sceneVisits[e]=(r.sceneVisits[e]||0)+1,e==="park"&&r.sceneVisits[e]===1&&St("河边的小路","公园通往河边。你可以去看看风景，也许会遇到特别的人。","river"),e==="cafe"&&r.sceneVisits[e]===1&&St("秋屿咖啡","从第 11 个月起，可以在这里遇见咖啡店主沈知秋。","cafe"),e==="studio"&&r.sceneVisits[e]===1&&St("叶星河的设计工作室","定制订单带来了新的设计灵感，试着制作一份包装设计。","studio"),de(),!0):!1}function Wp(e){if(!["park","river"].includes(e))return{ok:!1,message:"只能在风景地点拍照。"};const n=e+"-"+r.month;return r.scenePhotos.some(t=>t.id===n)?{ok:!1,message:"这个月已经收集过这里的风景了。"}:r.dayPhase!=="prep"||r.ap<1?{ok:!1,message:"拍摄风景需要准备阶段的 1 点行动力。"}:(r.ap-=1,r.scenePhotos.push({id:n,place:e,month:r.month,day:r.day,title:e==="river"?"河岸晚风":"公园花影"}),r.loyalty=Math.min(100,r.loyalty+1),St("新的风景照片","拍摄的照片已经存入手机收藏。",e),de(),{ok:!0,message:"拍到了「"+(e==="river"?"河岸晚风":"公园花影")+"」，已收入收藏。"})}const $u=[{id:"walk",title:"河边的第一次散步",detail:"苏晴陪林念沿着水边慢慢走，聊起接手蛋糕店后忙碌的生活。",unlock:()=>r.dayIndex>=3,reward:"苏晴好感与河岸回忆"},{id:"lost",title:"遗失的物品",detail:"在长椅下发现一枚小小的钥匙扣。循着线索找到失主，是常来林记的小镇居民。",unlock:()=>(r.sceneVisits.river||0)>=2,reward:"小镇纪念物与人物线索"},{id:"rain",title:"雨天的小插曲",detail:"约好见面的午后下起雨，林念和苏晴帮陌生人遮住了刚买的甜点。",unlock:()=>r.month>=5,reward:"特殊订单线索"},{id:"festival",title:"河岸灯会",detail:"夜色里亮起一串串小灯，林记的节日甜点为小镇添上了温暖。",unlock:()=>r.month>=6,reward:"灯会纪念与限定照片"},{id:"bridge",title:"旧桥边的回忆",detail:"苏晴在旧桥边提起那年一起走过的路，林念终于想起了很多珍贵的小事。",unlock:()=>r.sqchatMonth>=4,reward:"苏晴专属回忆"}];function Xp(e){const n=$u.find(t=>t.id===e);return!n||!n.unlock()?{ok:!1,message:"这段故事还没有到来的时机。"}:r.sceneEvents.includes(e)?{ok:!1,message:"这段回忆已经收藏。"}:r.dayPhase!=="prep"||r.ap<1?{ok:!1,message:"今天先完成店里的营业，明天再来吧。"}:(r.ap-=1,r.sceneEvents.push(e),(e==="walk"||e==="bridge")&&(r.loyalty=Math.min(100,r.loyalty+3)),e==="festival"&&(r.marketPoints+=2),St("河边回忆 · "+n.title,n.reward+"已记入手机收藏。","river"),de(),{ok:!0,message:n.detail+`
获得：`+n.reward})}function Jp(e){return r.unlockedOutfits.includes(e)?(r.outfit=e,de(),!0):!1}function ev({shape:e,color:n,decoration:t,packaging:s}){if(!nn("studio").open||r.dayPhase!=="prep"||r.ap<1)return{ok:!1,message:"现在还无法进行设计。"};if((r.pantry.decor||0)<1)return{ok:!1,message:"需要 1 份裱花装饰料，请先去食材铺补货。"};const l="design-"+r.designWorks.length+"-"+r.dayIndex;return r.pantry.decor-=1,r.ap-=1,r.designWorks.push({id:l,shape:e,color:n,decoration:t,packaging:s,month:r.month,day:r.day}),r.brand=Math.min(100,r.brand+1),St("设计作品已保存","新设计已归入手机收藏，将为品牌形象积累经验。","studio"),de(),{ok:!0,message:"设计保存成功！消耗装饰料 ×1，品牌 +1。"}}function nv(){const e=Ln("zhiqiuchat");return e.disabled||r.dayPhase!=="prep"||r.ap<e.ap?{ok:!1,message:e.note||"当前无法交流。"}:Kt("zhiqiuchat",{})?{ok:!0,message:e.note}:{ok:!1,message:"当前无法交流。"}}function ll(e=!1){const n=Ee.prologue||Ee.events.find(t=>t.kind==="prologue");if(n&&(e||!r.played.includes(n.id))){const t=we.events.findIndex(s=>s.id===n.id);t>=0&&we.events.splice(t,1),we.events.unshift(n)}Dr()}function tv(e){(e.ids&&e.ids.length?e.ids:[e.id]).forEach(s=>{r.played.includes(s)||r.played.push(s)}),e.storyline==="mom"?(r.momBond=He(r.momBond+(e.bondGain||0)),e.keepsake&&!r.momKeepsakes.includes(e.keepsake)&&r.momKeepsakes.push(e.keepsake)):e.storyline==="zhiQiu"&&(r.cafeRelation=He(r.cafeRelation+(e.id.indexOf("_DAILY_")>=0?2:7))),mp(e.rewards||[]).length&&Te("剧情："+e.title,"story"),e.storyline==="regular"&&Dr(),de()}const rv={xiaoyu:[{trust:80,skill:4,done:"EVT_M11_YUTONG_BOOK"},{trust:80},{skill:4},{}],zhiyao:[{trust:75,skill:4,done:"EVT_M19_MAIN"},{}],kexin:[{trust:75,skill:4,done:"EVT_M21_MAIN"},{}],qinghe:[{trust:75,skill:4,done:"EVT_M25_MAIN"},{}],mom:[{bond:75},{}]};function go(e){const n=(Ee.partnerEndings||{})[e];if(!n||!n.length)return null;const t=r.partnerTrust[e]||0,s=r.partnerSkill[e]||0,l=r.momBond||0,o=rv[e];if(!o)return t>=70?n[0]:n[1];for(const i of o)if(!(i.trust!=null&&t<i.trust)&&!(i.skill!=null&&s<i.skill)&&!(i.bond!=null&&l<i.bond)&&!(i.done&&!r.played.includes(i.done)))return n[Math.min(o.indexOf(i),n.length-1)];return n[n.length-1]}const Be=(e,n)=>{const t=e.__vccOpts||e;for(const[s,l]of n)t[s]=l;return t},sv={class:"phone-body",role:"dialog","aria-label":"林念的手机"},lv={class:"phone-top"},av=["aria-label"],ov={key:0,class:"phone-tabs","aria-label":"手机功能"},iv=["data-tab-id","onClick"],uv={key:0},cv={key:1},dv={class:"phone-content"},fv={key:0,class:"phone-notice",role:"status"},pv={class:"chat-heading"},vv=["src","alt"],mv={key:0,class:"phone-empty"},hv={class:"chat-bubble"},gv={key:0,class:"phone-empty"},yv=["onClick"],bv=["src","alt"],_v={class:"inbox-copy"},kv={key:1},Mv={key:0,class:"phone-empty"},$v=["src","alt"],Cv={class:"person-copy"},Iv={key:0},Ev={class:"person-actions"},Tv=["onClick"],xv={key:0,class:"phone-empty"},wv=["disabled","onClick"],Sv={key:0,class:"phone-empty"},Av={class:"phone-card-title"},Nv={class:"phone-sub"},Ov={class:"phone-card"},Pv={key:0},Rv={class:"phone-stats"},Dv={key:0,class:"phone-empty"},Vv={class:"phone-entry"},Lv={class:"phone-entry"},Hv={class:"phone-stats"},Fv={class:"phone-entry"},Uv={class:"phone-entry"},jv={key:0,class:"phone-empty"},qv=["onClick"],Gv=["onClick"],Bv={key:0,class:"phone-empty"},Qv={key:1,class:"phone-guide-foot"},Kv={class:"phone-guide-copy"},zv=["src"],Zv={key:2,class:"phone-foot"},Yv={__name:"PhonePage",props:{tutorial:{type:Boolean,default:!1},tutorialProgress:{type:Number,default:0},storyMessage:{type:Object,default:null}},emits:["close","navigate","open-panel","tutorial-step","tutorial-done","story-message-done"],setup(e,{emit:n}){const t=e,s=n,l=[["messages","消息"],["people","人物"],["notices","通知"],["online","线上接单"],["orders","订单详情"],["calendar","日历"],["collections","收藏"],["finance","经营数据"]],o=[{tab:"messages",text:"先看看苏晴发来的祝贺。以后收到的剧情短信也会保存在这里，点联系人就能回看。"},{tab:"people",text:"人物页只会显示你已经认识的人。点开人物卡，可以查看资料和与对方的聊天。"},{tab:"notices",text:"通知会提醒你新订单、活动和材料情况。点开提醒可以查看详情。"},{tab:"online",text:"线上接单会列出远处客人下的订单。接单后，要备好对应蛋糕再按时交付。"},{tab:"orders",text:"订单详情里能核对编号、蛋糕、份数和特别要求。预约客人来取货时，也可以在这儿查单。"},{tab:"calendar",text:"日历标着接下来的节日和活动，提前备料会从容一些。"},{tab:"collections",text:"收藏里能回看图鉴、相册、CG、结局和实验记录。"},{tab:"finance",text:"经营数据记录每天的收入、支出和销量，打烊后可以看看本日情况。"}],i=Z((t.tutorial,"messages")),c=Z(""),v=Z(""),m=Z(""),p=[{id:"granny",name:"张奶奶",detail:"67岁 · 退休小学教师",preference:"桂花栗子蛋糕、少糖原味奶油蛋糕与柠檬磅蛋糕。",note:"她把耐心留给讲台，又在林记的下午茶里重新遇见老友。",avatar:Pe("regular-granny-zhang.webp"),firstEvent:"EVT_GRANNY_M02"},{id:"uncle",name:"陈叔",detail:"63岁 · 退休木工",preference:"传统海绵蛋糕、减糖巧克力蛋糕与栗子蛋糕。",note:"他用一双布满老茧的手，替老街守住招牌，也重新拾起木工手艺。",avatar:Pe("regular-uncle-chen.webp"),firstEvent:"EVT_UNCLE_M03"},{id:"xiaoman",name:"小满",detail:"9岁到12岁 · 栖云镇小学生",preference:"草莓奶油蛋糕、芒果慕斯与造型可爱的小切块。",note:"她在林记的奶油香气里长大，用画笔记下三年的甜味。",avatar:Pe("regular-xiaoman.webp"),firstEvent:"EVT_XIAOMAN_M01"}],_=H(()=>{const L=[{id:"mom",name:"林暖",detail:"妈妈 · 林记前任店主",summary:`家庭默契 ${Math.round(r.momBond)}。在店里和妈妈聊聊，可以听到她的经营建议。`,avatar:Tn("林暖")}];return(r.played.includes("EVT_PROLOGUE_01")||r.phoneMessages.some(P=>P.contactId==="sura"))&&L.push({id:"sura",name:"苏晴",detail:"高中好友 · 摄影师",summary:`本月互动${r.sqchatMonth===r.month?"已完成":"尚未完成"}。公园和河边藏着更多共同回忆。`,avatar:Tn("苏晴")}),Nt.filter(P=>r.staff.includes(P.id)).forEach(P=>L.push({id:P.id,name:P.name,detail:P.role,summary:`信赖 ${Math.round(r.partnerTrust[P.id]||0)} · 专业 ${Math.round(r.partnerSkill[P.id]||0)}`,avatar:Tn(P.name)})),r.played.includes("EVT_ZHIQIU_CH01")&&L.push({id:"zhiqiu",name:"沈知秋",detail:"秋屿咖啡主理人",summary:`熟悉度 ${r.cafeRelation}。喜欢研究咖啡与甜点搭配。`,avatar:Tn("沈知秋")||Pe("zhiqiu-sprite-out.webp")}),p.forEach(P=>{r.played.includes(P.firstEvent)&&L.push({...P,detail:`${P.detail} · 常客`,summary:`${P.note}
常买：${P.preference}`})}),L}),g=H(()=>_.value.find(L=>L.id===c.value)||null),h=H(()=>r.phoneMessages.filter(L=>L.contactId===c.value)),C=H(()=>_.value.map(L=>{const P=r.phoneMessages.filter(D=>D.contactId===L.id);return{...L,last:P[P.length-1]||null,unread:P.filter(D=>!D.read).length}}));function b(L){return Ee.customers.filter(P=>P.regularPerson===L).length}function E(L){return Ee.customers.filter(P=>P.regularPerson===L&&r.played.includes(P.id)).length}const T=H(()=>{var L;return[...r.orders||[],...((L=r.service)==null?void 0:L.tickets)||[]]}),w=H(()=>T.value.filter(L=>{const P=v.value.trim().toLowerCase();return!P||String(L.orderNo||L.id).toLowerCase().includes(P)||String(L.customer||"").includes(P)})),S=H(()=>r.orders.filter(L=>["线上","定制","节日"].includes(L.type))),x=H(()=>ku()),Q=H(()=>x.value.materials.map(L=>({...bn.find(P=>P.id===L),stock:r.pantry[L]||0}))),pe=H(()=>(r.dayRev||0)-(r.daySpend||0)),le=H(()=>[...(r.notices||[]).filter(L=>!L.seen),...r.orders.filter(L=>!L.taken).length?[{id:"pending-orders",title:"待接的线上订单",detail:`还有 ${r.orders.filter(L=>!L.taken).length} 笔订单等待确认。`,target:"online"}]:[],...Q.value.some(L=>L.stock<2)?[{id:"low-stock",title:"节日材料提醒",detail:`${x.value.title}即将用到的材料不足，可提前采购。`,target:"supplier"}]:[]]);function B(L){let P=!1;r.phoneMessages.forEach(D=>{D.contactId===L&&!D.read&&(D.read=!0,P=!0)}),P&&de()}function G(L){c.value=L,i.value="messages",B(L)}function O(L){if(t.storyMessage)return;c.value="",i.value=L;const P=o.findIndex(D=>D.tab===L);t.tutorial&&P>=0&&P!==t.tutorialProgress&&s("tutorial-step",P),oe()}function oe(){pr(()=>{const L=document.querySelector(".phone-tabs .active");L!=null&&L.scrollIntoView&&L.scrollIntoView({block:"nearest",inline:"center"})})}function A(){if(t.tutorialProgress>=o.length-1){s("tutorial-done");return}const L=t.tutorialProgress+1,P=o[L].tab;i.value=P,c.value="",s("tutorial-step",L),oe()}function N(){t.storyMessage?s("story-message-done"):s("close")}function he(){t.tutorial&&(vs(r,{id:"tutorial:EVT_TUTORIAL_PHONE:sura-congratulations",eventId:"EVT_TUTORIAL_PHONE",contactId:"sura",sender:"sura",text:"恭喜林老板正式上任！下午有空来街上找我玩呀！",read:!0}),de())}tt(()=>{t.tutorial&&he(),t.tutorial&&(c.value=t.tutorialProgress===0?"sura":""),t.storyMessage&&(c.value=t.storyMessage.contactId,B(t.storyMessage.contactId)),oe()}),sn(()=>[t.tutorial,t.tutorialProgress],([L,P])=>{L&&(he(),i.value=o[Math.max(0,Math.min(o.length-1,P))].tab,c.value=P===0?"sura":"",oe())}),sn(()=>t.storyMessage,L=>{L&&(i.value="messages",c.value=L.contactId,B(L.contactId))});const be=H(()=>o[Math.max(0,Math.min(o.length-1,t.tutorialProgress))].text);function ge(L){if(t.tutorial||t.storyMessage)return;const P=hu(L.id);m.value=P?L.taken?"已接受该订单，准备好蛋糕后会进入待交付列表。":"已取消接受。":"当前不是营业准备阶段，不能修改订单。"}function z(L){if(t.tutorial||t.storyMessage){m.value="讲解期间可以查看页面，暂不能执行店务操作。";return}if(L==="online"||L==="orders"){i.value=L;return}if(L==="supplier"){s("close"),s("open-panel","supplier");return}const P=nn(L);if(!P.open){m.value=P.reason;return}s("navigate",L)}function re(L){!L.seen&&r.notices.some(P=>P.id===L.id)&&(L.seen=!0,de()),L.target&&z(L.target)}function ae(L){return L.status==="delivered"||L.status==="done"?"已交付":L.status==="waiting"||L.status==="packing"?"待取货":L.taken?"已接单 · 待制作":"待接单"}return(L,P)=>{var D;return d(),xe(xc,{to:"body"},[a("div",{class:"phone-mask",onClick:mn(N,["self"])},[a("section",sv,[a("header",lv,[a("div",null,[P[9]||(P[9]=a("span",null,"QIYUN · 林念的手机",-1)),a("h2",null,u(e.storyMessage?"剧情消息":g.value?g.value.name:"今天想做点什么？"),1)]),a("button",{type:"button","aria-label":e.storyMessage?"返回剧情":"关闭手机",onClick:N},"✕",8,av)]),e.storyMessage?I("",!0):(d(),f("nav",ov,[(d(),f(F,null,se(l,$=>a("button",{key:$[0],"data-tab-id":$[0],type:"button",class:ye({active:i.value===$[0]}),onClick:q=>O($[0])},[$e(u($[1]),1),$[0]==="notices"&&le.value.length?(d(),f("i",uv,u(le.value.length),1)):I("",!0),$[0]==="messages"&&y(r).phoneMessages.filter(q=>!q.read).length?(d(),f("i",cv,u(y(r).phoneMessages.filter(q=>!q.read).length),1)):I("",!0)],10,iv)),64))])),a("main",dv,[m.value?(d(),f("p",fv,u(m.value),1)):I("",!0),i.value==="messages"?(d(),f(F,{key:1},[g.value?(d(),f(F,{key:0},[a("button",{class:"phone-back",type:"button",onClick:P[0]||(P[0]=$=>c.value="")},"‹ 返回消息列表"),a("div",pv,[g.value.avatar?(d(),f("img",{key:0,src:g.value.avatar,alt:g.value.name},null,8,vv)):I("",!0),a("div",null,[a("strong",null,u(g.value.name),1),a("small",null,u(g.value.detail),1)])]),h.value.length?I("",!0):(d(),f("div",mv,"暂无消息")),(d(!0),f(F,null,se(h.value,$=>(d(),f("div",{key:$.id,class:ye(["chat-row",{sent:$.sender==="player"}])},[a("small",null,u($.sender==="player"?"林念":g.value.name),1),a("div",hv,u($.text),1)],2))),128)),e.storyMessage?(d(),f("button",{key:1,class:"phone-primary",type:"button",onClick:P[1]||(P[1]=$=>s("story-message-done"))},"返回剧情")):I("",!0)],64)):(d(),f(F,{key:1},[P[10]||(P[10]=a("h3",null,"消息",-1)),C.value.length?I("",!0):(d(),f("p",gv,"暂无消息")),(d(!0),f(F,null,se(C.value,$=>(d(),f("button",{key:$.id,type:"button",class:"phone-card inbox-card",onClick:q=>G($.id)},[$.avatar?(d(),f("img",{key:0,src:$.avatar,alt:$.name},null,8,bv)):I("",!0),a("span",_v,[a("strong",null,u($.name),1),a("small",null,u($.last?$.last.text:"暂无消息"),1)]),$.unread?(d(),f("i",kv,u($.unread),1)):I("",!0)],8,yv))),128))],64))],64)):I("",!0),i.value==="people"?(d(),f(F,{key:2},[P[11]||(P[11]=a("h3",null,"认识的人",-1)),_.value.length?I("",!0):(d(),f("p",Mv,"认识新朋友后，她们会出现在这里。")),(d(!0),f(F,null,se(_.value,$=>(d(),f("article",{key:$.id,class:"phone-card person-card"},[$.avatar?(d(),f("img",{key:0,src:$.avatar,alt:$.name},null,8,$v)):I("",!0),a("div",Cv,[a("strong",null,u($.name)+" · "+u($.detail),1),a("p",null,u($.summary),1),["granny","uncle","xiaoman"].includes($.id)?(d(),f("small",Iv,"已读常客故事 "+u(E($.name))+" / "+u(b($.name)),1)):I("",!0)]),a("div",Ev,[a("button",{type:"button",onClick:q=>G($.id)},"打开对话",8,Tv),$.id==="mom"?(d(),f("button",{key:0,type:"button",onClick:P[2]||(P[2]=q=>z("shop"))},"回林记烘焙")):$.id==="sura"?(d(),f("button",{key:1,type:"button",onClick:P[3]||(P[3]=q=>z("park"))},"去公园")):$.id==="zhiqiu"?(d(),f("button",{key:2,type:"button",onClick:P[4]||(P[4]=q=>z("cafe"))},"去秋屿咖啡")):I("",!0)])]))),128))],64)):i.value==="online"?(d(),f(F,{key:3},[P[13]||(P[13]=a("h3",null,"线上接单",-1)),P[14]||(P[14]=a("p",{class:"phone-sub"},"订单由每日经营系统生成；接单后要制作对应商品，前往柜台交付。",-1)),S.value.length?I("",!0):(d(),f("p",xv,"今天暂时没有新的线上、定制或节日订单。")),(d(!0),f(F,null,se(S.value,$=>(d(),f("article",{key:$.id,class:"phone-card"},[a("strong",null,u($.orderNo)+" · "+u($.type),1),a("p",null,[$e(u($.customer)+"："+u(y(je)($.product))+" ×"+u($.qty),1),P[12]||(P[12]=a("br",null,null,-1)),$e(u($.due||$.blessing||"按约定品质制作")+" · 报酬 ¥"+u($.pay),1)]),a("button",{disabled:y(r).dayPhase!=="prep",onClick:q=>ge($)},u($.taken?"已接受 · 点击撤销":"接受订单"),9,wv)]))),128))],64)):i.value==="orders"?(d(),f(F,{key:4},[P[20]||(P[20]=a("h3",null,"订单详情",-1)),fn(a("input",{"onUpdate:modelValue":P[5]||(P[5]=$=>v.value=$),class:"phone-search",type:"search",placeholder:"搜索订单号 / 顾客","aria-label":"搜索订单"},null,512),[[et,v.value]]),w.value.length?I("",!0):(d(),f("p",Sv,"没有匹配的订单。已完成且结束营业的订单可在经营记录中查看。")),(d(!0),f(F,null,se(w.value,$=>(d(),f("article",{key:$.id+"-"+($.kind||""),class:"phone-card"},[a("div",Av,[a("strong",null,u($.orderNo||$.id),1),a("span",null,u(ae($)),1)]),a("p",null,[$e("顾客："+u($.customer||"到店顾客")+" · "+u($.type||"普通"),1),P[15]||(P[15]=a("br",null,null,-1)),$e("蛋糕："+u(y(je)($.product))+" ×"+u($.qty),1),P[16]||(P[16]=a("br",null,null,-1)),$e("规格："+u($.qty>1?"共 "+$.qty+" 份":"标准规格"),1),P[17]||(P[17]=a("br",null,null,-1)),$e("特殊要求："+u($.due||$.blessing||"按标准配方制作"),1),P[18]||(P[18]=a("br",null,null,-1)),$e("材料："+u(Object.entries(y(ht)[$.product]||{}).map(([q,R])=>{var X;return(((X=y(bn).find(Me=>Me.id===q))==null?void 0:X.name)||q)+"×"+R}).join("、")),1),P[19]||(P[19]=a("br",null,null,-1)),$e("报酬：¥"+u($.pay||0),1)])]))),128)),!e.tutorial&&!e.storyMessage?(d(),f("button",{key:1,class:"phone-primary",onClick:P[6]||(P[6]=$=>{s("close"),s("open-panel","game:delivery")})},"进入独立订单交付小游戏")):I("",!0)],64)):i.value==="calendar"?(d(),f(F,{key:5},[a("h3",null,"第 "+u(y(r).month)+" 月 · "+u(x.value.title),1),a("p",Nv,"第 "+u(y(r).day)+" / 5 个经营日 · "+u(x.value.place),1),a("article",Ov,[P[21]||(P[21]=a("strong",null,"本季活动",-1)),a("p",null,u(x.value.detail),1),y(r).day===5?(d(),f("p",Pv,"明天将进入新的经营月，记得提前补齐材料。")):I("",!0)]),P[22]||(P[22]=a("h3",null,"材料准备清单",-1)),(d(!0),f(F,null,se(Q.value,$=>(d(),f("div",{key:$.id,class:"phone-material"},[a("span",null,u($.name),1),a("b",{class:ye({missing:$.stock<2})},"库存 "+u($.stock),3)]))),128)),!e.tutorial&&!e.storyMessage?(d(),f("button",{key:0,class:"phone-primary",onClick:P[7]||(P[7]=$=>z("supplier"))},"去食材铺采购")):I("",!0)],64)):i.value==="collections"?(d(),f(F,{key:6},[P[23]||(P[23]=a("h3",null,"收藏 · 旅行与回忆",-1)),a("div",Rv,[a("span",null,"风景 "+u(y(r).scenePhotos.length),1),a("span",null,"河岸故事 "+u(y(r).sceneEvents.length)+"/5",1),a("span",null,"设计 "+u(y(r).designWorks.length),1)]),P[24]||(P[24]=a("h3",null,"风景相册",-1)),y(r).scenePhotos.length?I("",!0):(d(),f("p",Dv,"公园和河边可以拍摄第一张风景照。")),(d(!0),f(F,null,se([...y(r).scenePhotos].reverse(),$=>(d(),f("div",{key:$.id,class:"phone-entry"},"📷 "+u($.title)+" · 第"+u($.month)+"月",1))),128)),P[25]||(P[25]=a("h3",null,"苏晴的河岸回忆",-1)),(d(!0),f(F,null,se(y(r).sceneEvents,$=>(d(),f("div",{key:$,class:"phone-entry"},"♡ "+u({walk:"第一次散步",lost:"遗失的物品",rain:"雨天的小插曲",festival:"河岸灯会",bridge:"旧桥边的回忆"}[$]),1))),128)),P[26]||(P[26]=a("h3",null,"研发与活动记录",-1)),a("div",Vv,"已掌握 "+u(y(r).unlocked.length)+" 款蛋糕配方 · 制作记录 "+u(y(r).bakingRecords.length),1),a("div",Lv,"市集 "+u(y(r).activityRecords.market.length)+" 次 · 秋屿联名 "+u(y(r).activityRecords.cafe.length)+" 次",1),!e.tutorial&&!e.storyMessage?(d(),f("button",{key:1,class:"phone-primary",onClick:P[8]||(P[8]=$=>{s("close"),s("open-panel","codex")})},"查看完整图鉴 / CG / 结局收藏")):I("",!0)],64)):i.value==="finance"?(d(),f(F,{key:7},[P[27]||(P[27]=a("h3",null,"每日经营数据",-1)),a("div",Hv,[a("span",null,"今日收入 ¥"+u(y(r).dayRev),1),a("span",null,"今日支出 ¥"+u(y(r).daySpend),1),a("span",null,"净额 ¥"+u(pe.value),1)]),a("div",Fv,"今日销售 "+u(y(r).daySold)+" 份 · 累计完成订单 "+u(y(r).doneOrders)+" 笔",1),a("div",Uv,"本月营业额 ¥"+u(y(r).monthRev)+" · 本月总支出 ¥"+u(y(r).monthCost),1),P[28]||(P[28]=a("h3",null,"最近经营日",-1)),y(r).dailyLedger.length?I("",!0):(d(),f("p",jv,"完成第一天营业后开始记录日报。")),(d(!0),f(F,null,se(y(r).dailyLedger.slice(0,12),$=>(d(),f("div",{key:$.month+"-"+$.day,class:"phone-ledger"},[a("span",null,u($.month)+"月"+u($.day)+"日 · 卖出 "+u($.sold)+" 份",1),a("b",{class:ye({missing:$.rev-$.cost<0})},"净 ¥"+u($.rev-$.cost),3)]))),128))],64)):i.value==="notices"?(d(),f(F,{key:8},[P[29]||(P[29]=a("h3",null,"消息与特别提醒",-1)),P[30]||(P[30]=a("p",{class:"phone-sub"},"点击消息可直接前往对应场景；尚未开放的地点会提示解锁条件。",-1)),(d(!0),f(F,null,se(le.value,$=>(d(),f("article",{key:$.id,class:"phone-card phone-alert"},[a("strong",null,u($.title),1),a("p",null,u($.detail),1),a("button",{onClick:q=>re($)},"查看并前往 →",8,qv)]))),128)),(d(!0),f(F,null,se(y(r).notices.filter($=>$.seen).slice(0,25),$=>(d(),f("article",{key:$.id,class:"phone-card"},[a("strong",null,u($.title)+" · 已读",1),a("p",null,u($.detail),1),a("button",{onClick:q=>re($)},"前往 →",8,Gv)]))),128)),!y(r).notices.length&&!le.value.length?(d(),f("p",Bv,"暂时没有新消息。经营与探索后会收到提醒。")):I("",!0)],64)):I("",!0)]),e.tutorial?(d(),f("footer",Qv,[a("div",Kv,[y(Tn)("林暖")?(d(),f("img",{key:0,src:y(Tn)("林暖"),alt:"林暖"},null,8,zv)):I("",!0),a("div",null,[a("strong",null,"林暖 · "+u(((D=l.find($=>{var q;return $[0]===((q=o[e.tutorialProgress])==null?void 0:q.tab)}))==null?void 0:D[1])||"手机讲解"),1),a("p",null,u(be.value),1)])]),a("button",{type:"button",onClick:A},u(e.tutorialProgress>=o.length-1?"完成讲解":"下一项"),1)])):e.storyMessage?I("",!0):(d(),f("footer",Zv,[P[31]||(P[31]=a("span",null,"林记烘焙 · 让每一天都有一点甜",-1)),a("button",{onClick:N},"返回游戏")]))])])])}}},Cu=Be(Yv,[["__scopeId","data-v-c849a43b"]]),Wv=["src"],Xv={key:0,class:"vn-cg"},Jv=["src"],em={class:"vn-cg-cap"},nm={key:2,class:"vn-cast"},tm=["src","alt"],rm={class:"vn-top"},sm={key:0,class:"vn-titles"},lm={class:"vn-chapter"},am={key:0,class:"vn-scene"},om={key:1,class:"vn-scene"},im={class:"vn-tools"},um={key:3,class:"vn-choice"},cm={class:"vn-ask"},dm=["onClick"],fm={class:"t"},pm={key:0,class:"vn-note"},vm={key:0,class:"guide-speaker"},mm=["src"],hm={key:1,class:"vn-name"},gm=["src"],ym={key:1},bm={class:"vn-text"},_m={key:0,class:"caret"},km={class:"vn-foot"},Mm={class:"vn-hold-hint"},$m={key:0,class:"vn-dot"},Cm={__name:"StoryModal",props:{ev:{type:Object,required:!0}},emits:["done","guide-target"],setup(e,{emit:n}){const t=e,s=n,l=Z([]),o=Z(0),i=Z(0),c=Z(!1);let v=0,m=0,p=0,_=0,g=0,h=0;const C=Z(!1),b=Z(!1),E=Z(""),T=H(()=>r.phoneMessages.find(ee=>ee.id===E.value)||null);function w(ee){for(let ve=0;ve<ee.length;ve++){const me=ee[ve].t;if(me!=="scene"&&me!=="cg"&&me!=="cgend"&&me!=="act")return ve}return Math.max(0,ee.length-1)}const S=H(()=>l.value[o.value]||null),x=H(()=>o.value>=l.value.length-1),Q=H(()=>!!S.value&&S.value.t==="choice"),pe=H(()=>!!S.value&&S.value.t==="say"),le=H(()=>!!S.value&&S.value.t==="nar"),B=H(()=>["EVT_TUTORIAL_START","EVT_TUTORIAL_FRONT","EVT_TUTORIAL_KITCHEN","EVT_TUTORIAL_STREET","EVT_TUTORIAL_PHONE"].includes(t.ev.id)),G=H(()=>pe.value?S.value.who:""),O=H(()=>S.value&&S.value.text||""),oe=H(()=>{var me;return B.value?t.ev.id==="EVT_TUTORIAL_PHONE"?"phone":((me=({EVT_TUTORIAL_START:[[/柜台|展示柜/,"counter"]],EVT_TUTORIAL_FRONT:[[/柜台|展示柜|接待顾客|收银|结账/,"counter"],[/装修册/,"book"],[/门口|出门|出去/,"door"],[/门帘|去后厨/,"kitchen"],[/和妈妈聊聊|找妈妈/,"mom"]],EVT_TUTORIAL_KITCHEN:[[/操作台|排产|菜单/,"workbench"],[/设备区|烤箱|打蛋器/,"devices"],[/食材区|食材|库存/,"pantry"],[/实验台|研发/,"lab"],[/排班板|店员|员工/,"staff"],[/做一炉|制作蛋糕|蛋糕制作/,"baking"]],EVT_TUTORIAL_STREET:[[/食材铺|采购|农场/,"supplier"],[/公园|散步/,"park"],[/苏晴|寻找苏晴/,"sq"],[/回家|休息/,"home"]]}[t.ev.id]||[]).map(([ke,Se])=>({at:O.value.search(ke),id:Se})).filter(ke=>ke.at>=0).sort((ke,Se)=>ke.at-Se.at)[0])==null?void 0:me.id)||"":""}),A=Z({});let N="";const he=H(()=>O.value.slice(0,i.value)),be=H(()=>i.value<O.value.length);function ge(){const ee=oe.value;s("guide-target",ee),!(!ee||typeof document>"u")&&pr(()=>{if(ee!==oe.value)return;const ve=document.querySelector(`[data-guide-key="${ee}"]`),me=document.querySelector(".vn-stage"),ke=document.querySelector(".vn-guide-box");if(!ve||!me||!ke)return;const Se=ve.getBoundingClientRect(),Ie=me.getBoundingClientRect(),Ke=ke.getBoundingClientRect(),$n={left:Se.left-64,right:Se.right+64,top:Se.top-72,bottom:Se.bottom+72},ze=12,pn=Math.max(ze,Ie.width-Ke.width-12),Rt=52,Zt=Math.max(Rt,Ie.height-Ke.height-150),Vs=[{key:"top-left",x:ze,y:Rt},{key:"top-right",x:pn,y:Rt},{key:"bottom-left",x:ze,y:Zt},{key:"bottom-right",x:pn,y:Zt}].map(Je=>({...Je,rect:{left:Ie.left+Je.x,right:Ie.left+Je.x+Ke.width,top:Ie.top+Je.y,bottom:Ie.top+Je.y+Ke.height}})),da=Je=>Je.rect.left<$n.right&&Je.rect.right>$n.left&&Je.rect.top<$n.bottom&&Je.rect.bottom>$n.top,Ls=Vs.find(Je=>Je.key===N),fa=Vs.filter(Je=>!da(Je)),Tu=($n.left+$n.right)/2,xu=($n.top+$n.bottom)/2,Hs=Ls&&!da(Ls)?Ls:(fa.length?fa:Vs).sort((Je,wu)=>{const pa=Lr=>{const va=(Lr.rect.left+Lr.rect.right)/2-Tu,ma=(Lr.rect.top+Lr.rect.bottom)/2-xu;return va*va+ma*ma};return pa(wu)-pa(Je)})[0];N=Hs.key,A.value={left:`${Hs.x}px`,right:"auto",top:`${Hs.y}px`,bottom:"auto",transform:"none"}})}sn(oe,()=>pr(ge),{flush:"post"}),tt(()=>window.addEventListener("resize",ge));const z=H(()=>{for(let ee=o.value;ee>=0;ee--)if(l.value[ee].t==="scene")return ee;return-1}),re=H(()=>z.value>=0?l.value[z.value]:null),ae=H(()=>{for(let ee=o.value;ee>=0;ee--){if(l.value[ee].t==="act")return l.value[ee].text;if(l.value[ee].t==="scene")return""}return""}),L=H(()=>qf(t.ev)),P=H(()=>{if(re.value){const ee=Bi(re.value.text);if(ee)return ee}return L.value}),D=H(()=>hs[P.value]||hs.shop),$=H(()=>Yf(D.value)),q=H(()=>Bf(P.value));function R(ee){return ee!=="林念"||r.outfit==="auto"?q.value:r.outfit==="bakery"?"in":"out"}const X=H(()=>!!re.value&&/回忆|闪回|高中|高三|晚自习|那年|那一年/.test(re.value.text)),Me=H(()=>{let ee=-1;for(let me=o.value;me>=0;me--){const ke=l.value[me].t;if(ke==="cg"){ee=me;break}if(ke==="cgend")return""}if(ee<0||ee<z.value)return"";const ve=l.value[ee].key;return Cr(ve).src?ve:""}),Ve=H(()=>Me.value?Cr(Me.value):null),Xe={念念:"林念",小雨:"周雨桐",知遥:"许知遥",阿鸢:"唐鸢",鸢姐:"唐鸢",星河:"叶星河",妈妈:"林暖"},Bn=H(()=>{const ee=Ie=>Ie&&uo[Ie]&&zf(Ie,R(Ie));if(pe.value)return ee(S.value.who)?[S.value.who]:[];const ve=S.value&&S.value.text||"",Se=[...Object.keys(uo),"张奶奶","陈叔","小满","李婶","赵叔","沈知秋","陈奶奶","张叔","沈知夏"].map(Ie=>({name:Ie,at:ve.indexOf(Ie)})).concat(Object.entries(Xe).map(([Ie,Ke])=>({name:Ke,at:ve.indexOf(Ie)}))).filter(Ie=>Ie.at>=0).sort((Ie,Ke)=>Ie.at-Ke.at)[0];return Se&&ee(Se.name)?[Se.name]:[]}),k=H(()=>pe.value?S.value.who:"");sn(()=>t.ev,()=>{b.value=!1,E.value="",A.value={},N="",l.value=ts(t.ev.beats||[],r);const ee=r.storyChoices[t.ev.id]||{};for(let ve=0;ve<l.value.length;ve++){const me=l.value[ve];if(me.t!=="choice"||!Number.isInteger(ee[me.node]))continue;const ke=me.options[ee[me.node]];ke&&(fo(me,ke,ee[me.node],t.ev.id),l.value.splice(ve,1,...ke.branch,...me.after||[]),ve--)}o.value=w(l.value),i.value=0,c.value=!1,V()},{immediate:!0});function M(ee){return{left:"50%",zIndex:10+ee}}function V(){if(clearInterval(v),clearTimeout(p),i.value=0,Q.value||!O.value){i.value=O.value.length;return}const ee=Math.max(1,Math.round(O.value.length/40));v=setInterval(()=>{i.value=Math.min(O.value.length,i.value+ee),i.value>=O.value.length&&clearInterval(v)},18)}sn(()=>o.value,V);function K(ee){let ve=ee+1;for(;ve<l.value.length;){const me=l.value[ve].t;if(me==="scene"||me==="cg"||me==="cgend"||me==="act")ve++;else break}return Math.min(ve,l.value.length-1)}function Y(ee){const ve=l.value[ee];if(!ve||ve.t!=="phoneMessage")return;const me=ro(l.value,ee);if(!me)return;const ke=l.value.slice(0,ee).filter(Ie=>Ie.t==="phoneMessage").length,Se=vs(r,{id:_l(t.ev.id,ke),eventId:t.ev.id,contactId:me,sender:ve.who==="林念"?"player":me,text:ve.text,read:!0});E.value=Se.id,b.value=!0,c.value=!1,clearInterval(m),fe(),clearTimeout(p),de()}sn([()=>t.ev.id,()=>o.value],()=>{b.value||Y(o.value)},{flush:"post"});function U(){b.value&&(b.value=!1,E.value="",x.value?J():o.value=K(o.value))}function te(ee,ve){let me=l.value.slice(0,ee).filter(ke=>ke.t==="phoneMessage").length;for(let ke=ee;ke<=ve&&ke<l.value.length;ke++){const Se=l.value[ke];if(Se.t!=="phoneMessage")continue;const Ie=ro(l.value,ke);Ie&&vs(r,{id:_l(t.ev.id,me),eventId:t.ev.id,contactId:Ie,sender:Se.who==="林念"?"player":Ie,text:Se.text,read:!1}),me+=1}de()}function ue(){if(!(Q.value||b.value)){if(be.value){i.value=O.value.length,clearInterval(v);return}if(x.value){J();return}o.value=K(o.value)}}function ie(){if(Date.now()<h){h=0;return}ue()}function W(ee){if(!(Q.value||b.value||ee.button!==void 0&&ee.button!==0)){clearTimeout(_);try{ee.currentTarget.setPointerCapture(ee.pointerId)}catch{}_=setTimeout(()=>{C.value=!0,g=setInterval(()=>{Q.value?fe():be.value?(i.value=O.value.length,clearInterval(v)):x.value?J():o.value=K(o.value)},110)},300)}}function fe(){clearTimeout(_),clearInterval(g),g=0,C.value&&(h=Date.now()+350),C.value=!1}function ce(ee,ve){fo(S.value,ee,ve,t.ev.id);const me=(ee.branch||[]).concat(S.value.after||[]);l.value.splice(o.value,1,...me);let ke=Math.max(0,o.value-1);o.value=K(ke)}function j(){if(!b.value){for(let ee=o.value+1;ee<l.value.length;ee++)if(l.value[ee].t==="choice"){te(o.value+1,ee-1),o.value=ee;return}te(o.value+1,l.value.length-1),o.value=l.value.length-1,i.value=O.value.length}}function J(){clearTimeout(p),fe(),clearInterval(v),clearInterval(m),tv(t.ev),s("done")}sn([x,be,Q,b],([ee,ve,me,ke])=>{clearTimeout(p),ee&&!ve&&!me&&!ke&&(p=setTimeout(J,1300))},{immediate:!0});function ne(){b.value||(c.value=!c.value,clearInterval(m),c.value&&(m=setInterval(()=>{if(x.value){clearInterval(m),c.value=!1;return}if(Q.value){clearInterval(m),c.value=!1;return}be.value?i.value=O.value.length:o.value=K(o.value)},1400)))}return Ar(()=>{s("guide-target",""),window.removeEventListener("resize",ge),fe(),clearInterval(v),clearInterval(m),clearTimeout(p)}),(ee,ve)=>(d(),f("div",{class:ye(["vn",{"vn-guide":B.value}])},[a("div",{class:ye(["vn-stage",{flash:X.value}])},[B.value?I("",!0):(d(),f("div",{key:0,class:"vn-bg",style:tn({background:D.value.css})},[$.value?(d(),f("img",{key:0,src:$.value,alt:"",class:"vn-bg-img"},null,8,Wv)):I("",!0),ve[1]||(ve[1]=a("div",{class:"vn-veil"},null,-1))],4)),B.value?I("",!0):(d(),xe(Vi,{key:1,name:"cgfade"},{default:mt(()=>[Ve.value&&Ve.value.src?(d(),f("div",Xv,[a("img",{src:Ve.value.src,alt:""},null,8,Jv),a("div",em,u(Ve.value.name),1)])):I("",!0)]),_:1})),!B.value&&!Me.value?(d(),f("div",nm,[(d(!0),f(F,null,se(Bn.value,(me,ke)=>(d(),f("div",{key:me,class:ye(["vn-actor",{dim:k.value&&k.value!==me,off:!k.value}]),style:tn(M(ke))},[a("img",{src:y(Qf)(me,R(me)),alt:me},null,8,tm)],6))),128))])):I("",!0),a("div",rm,[B.value?I("",!0):(d(),f("div",sm,[a("div",lm,u(e.ev.title),1),ae.value?(d(),f("div",am,u(ae.value),1)):re.value?(d(),f("div",om,u(re.value.text),1)):I("",!0)])),a("div",im,[a("button",{type:"button",class:ye({on:c.value}),onClick:mn(ne,["stop"])},"自动",2),a("button",{type:"button",onClick:mn(j,["stop"])},"跳过")])]),Q.value?(d(),f("div",um,[a("div",cm,u(S.value.prompt),1),(d(!0),f(F,null,se(S.value.options,(me,ke)=>(d(),f("button",{key:ke,type:"button",class:"vn-opt",onClick:mn(Se=>ce(me,ke),["stop"])},[a("span",fm,u(me.label),1)],8,dm))),128)),S.value.note?(d(),f("p",pm,u(S.value.note),1)):I("",!0)])):(d(),f("div",{key:4,class:ye(["vn-box",{nar:le.value,"vn-guide-box":B.value}]),style:tn(B.value?A.value:void 0),onClick:ie,onPointerdown:W,onPointerup:fe,onPointercancel:fe,onContextmenu:ve[0]||(ve[0]=mn(()=>{},["prevent"]))},[B.value&&pe.value?(d(),f("div",vm,[y(Tn)(G.value)?(d(),f("img",{key:0,src:y(Tn)(G.value),alt:""},null,8,mm)):I("",!0),a("span",null,u(G.value),1),ve[2]||(ve[2]=a("small",null,"带你认地图",-1))])):I("",!0),pe.value&&!B.value?(d(),f("div",hm,[y(Tn)(S.value.who)?(d(),f("img",{key:0,src:y(Tn)(S.value.who),alt:""},null,8,gm)):I("",!0),a("span",null,u(S.value.who),1),S.value.emo&&S.value.emo!=="视角"?(d(),f("em",ym,u(S.value.emo),1)):I("",!0)])):I("",!0),a("div",bm,[$e(u(he.value),1),be.value?(d(),f("span",_m)):I("",!0)]),a("div",km,[a("span",Mm,u(C.value?"快进中…":"长按快进"),1),be.value||!x.value?(d(),f("span",$m,"▾")):I("",!0)])],38))],2),b.value&&T.value?(d(),xe(Cu,{key:0,"story-message":T.value,onStoryMessageDone:U},null,8,["story-message"])):I("",!0)],2))}},Im=Be(Cm,[["__scopeId","data-v-f794e52d"]]),Er="".replace(/\/$/,""),Em=typeof window<"u"&&(window.location.protocol==="https:"||["localhost","127.0.0.1"].includes(window.location.hostname)),Tm=/^https:\/\//i.test(Er)||/^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(Er),xm=!!Er&&Em&&Tm,wm="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function Sm(){const e=new Uint8Array(20);return crypto.getRandomValues(e),Array.from(e,n=>wm[n&31]).join("")}async function ua(e,n={}){if(!Er)throw new Error("云存档服务暂不可用。");const t=await fetch(Er+e,n),s=await t.json().catch(()=>({}));if(!t.ok){const l=new Error(s.message||"云存档请求失败。");throw l.status=t.status,l.data=s,l}return s}function ca(e){return{"X-Recovery-Code":e.replace(/\s+/g,"").toUpperCase()}}function Am(e){return ua("/api/save/meta",{headers:ca(e)})}function yo(e,n,t){const s={...ca(e),"Content-Type":"application/json"};return t!=null&&(s["If-Match"]=String(t)),ua("/api/save",{method:"PUT",headers:s,body:n})}async function Nm(e,n){return ua("/api/save",{headers:{...ca(e),"If-Match":String(n)}})}const Om=["src"],Pm={key:1,viewBox:"0 0 120 120",class:"cakeart","aria-hidden":"true"},Rm=["fill"],Dm=["fill"],Vm=["fill"],Lm=["fill"],Hm=["fill"],Fm=["fill"],Um=["fill"],jm=["fill"],qm=["fill"],Gm=["fill"],Bm=["fill"],Qm={__name:"CakeArt",props:{id:{type:String,default:""},colors:{type:Object,default:()=>({sponge:"#F0D9AE",cream:"#FFF8EE",accent:"#E8B86D"})}},setup(e){const n=e,t=H(()=>n.id&&We("cake-"+n.id+".webp")==="ok"?Pe("cake-"+n.id+".webp"):"");return(s,l)=>t.value?(d(),f("img",{key:0,src:t.value,alt:"",class:"cakeart photo"},null,8,Om)):(d(),f("svg",Pm,[l[0]||(l[0]=a("ellipse",{cx:"60",cy:"104",rx:"39",ry:"6",fill:"rgba(107,74,52,0.10)"},null,-1)),l[1]||(l[1]=a("ellipse",{cx:"60",cy:"97",rx:"43",ry:"9",fill:"#FFFDF9",stroke:"rgba(107,74,52,0.12)"},null,-1)),a("path",{d:"M21 56 L99 56 L99 90 A39 8 0 0 1 21 90 Z",fill:e.colors.sponge},null,8,Rm),a("rect",{x:"21",y:"56",width:"78",height:"15",fill:e.colors.cream},null,8,Dm),a("circle",{cx:"32",cy:"71",r:"4",fill:e.colors.cream},null,8,Vm),a("circle",{cx:"48",cy:"71",r:"5.4",fill:e.colors.cream},null,8,Lm),a("circle",{cx:"66",cy:"71",r:"4",fill:e.colors.cream},null,8,Hm),a("circle",{cx:"84",cy:"71",r:"5",fill:e.colors.cream},null,8,Fm),a("ellipse",{cx:"60",cy:"56",rx:"39",ry:"9.5",fill:e.colors.cream,stroke:"rgba(107,74,52,0.10)"},null,8,Um),a("circle",{cx:"46",cy:"54",r:"5",fill:e.colors.accent},null,8,jm),a("circle",{cx:"66",cy:"52",r:"4.4",fill:e.colors.accent,opacity:"0.85"},null,8,qm),a("circle",{cx:"76",cy:"57",r:"3.4",fill:e.colors.accent,opacity:"0.7"},null,8,Gm),a("circle",{cx:"55",cy:"58",r:"3",fill:e.colors.accent,opacity:"0.55"},null,8,Bm)]))}},Iu=Be(Qm,[["__scopeId","data-v-bd8df027"]]),Km={class:"seg"},zm=["onClick"],Zm={key:0,class:"card"},Ym={class:"art"},Wm={class:"body"},Xm={class:"name"},Jm={class:"chip",style:{"font-size":"10px"}},eh={key:0,class:"chip",style:{"font-size":"10px"}},nh={class:"desc"},th={key:0,class:"hint"},rh={key:1,class:"nums"},sh={key:1},lh={class:"photos"},ah={class:"im"},oh=["src","alt"],ih={key:1,class:"small muted"},uh={key:2,style:{"font-size":"20px",opacity:"0.3"}},ch={class:"cp"},dh={class:"ti"},fh={class:"cc"},ph={class:"cc"},vh={key:2,class:"cg-gallery"},mh=["disabled","onClick"],hh={class:"im"},gh=["src","alt"],yh={key:1},bh={class:"cp"},_h={class:"ti"},kh={class:"cc"},Mh={key:3,class:"lab-list"},$h={key:0,class:"card card-pad small muted"},Ch={class:"between"},Ih={class:"h2",style:{margin:"0"}},Eh={class:"chip",style:{"font-size":"10px"}},Th=["src"],xh={class:"between"},wh={class:"small muted"},Sh={key:0,class:"lab-scores"},Ah={key:1,class:"small muted"},Nh={key:4,class:"card"},Oh={style:{flex:"1 1 auto","min-width":"0"}},Ph={class:"nm"},Rh={key:0,class:"chip sage",style:{"font-size":"10px"}},Dh={key:1,class:"chip pink",style:{"font-size":"10px"}},Vh={class:"nt"},Lh={key:0,class:"nt"},Hh={key:5,class:"customer-list"},Fh={class:"between"},Uh={class:"h2",style:{margin:"0"}},jh={class:"chip",style:{"font-size":"10px"}},qh={class:"cc"},Gh={class:"cc"},Bh={class:"small muted"},Qh={key:6,class:"collection"},Kh={class:"h2"},zh={class:"small muted"},Zh=["aria-label"],Yh=["src","alt"],Wh={__name:"CodexPage",props:{initialSegment:{type:String,default:"product"}},setup(e){const t=Z(e.initialSegment),s=Z(null),l=H(()=>Qe.map(h=>({...h,flavor:(Ee.codex[h.id]||{}).flavor||h.desc,hint:(Ee.codex[h.id]||{}).hint||"",owned:r.unlocked.includes(h.id),current:r.unlocked.includes(h.id),collected:r.career.products.includes(h.id),lv:Math.round((r.levels[h.id]||1)*10)/10,price:Gn(h.id),sold:r.monthSold[h.id]||0}))),o=H(()=>Object.keys(Kr).map(h=>({id:h,...Kr[h],owned:r.photos.includes(h),current:r.photos.includes(h),collected:r.career.photos.includes(h)}))),i=H(()=>Qe.map(h=>({...h,reports:r.career.labReports[h.id]||{}})).filter(h=>h.reports.development||h.reports.improvement)),c=H(()=>Cr("osmanthus").src),v=H(()=>Ki.map(h=>({id:h.id,...Cr(h.id),collected:r.career.cgs.includes(h.id)}))),m=H(()=>Ot.map(h=>({...h,owned:r.cities.includes(h.id),surveyed:r.surveyed.includes(h.id)}))),p=H(()=>Kl.filter(h=>{var C;return(((C=r.regularCustomers[h.id])==null?void 0:C.purchases)||0)>0}).map(h=>({...h,productName:Qe.find(C=>C.id===h.product).name,visit:r.regularCustomers[h.id]}))),_=H(()=>({products:Qe.map(h=>({id:h.id,name:h.name,collected:r.career.products.includes(h.id),current:r.unlocked.includes(h.id)})),photos:Object.keys(Kr).map(h=>({id:h,name:Kr[h].title,collected:r.career.photos.includes(h),current:r.photos.includes(h)})),cgs:v.value.map(h=>({id:h.id,name:h.name,collected:h.collected,current:h.collected})),decorations:Ql.map(h=>({id:h.id,name:h.name,collected:r.career.decorations.includes(h.id),current:r.decorations.includes(h.id)})),keepsakes:["店铺钥匙","旧配方本","老店照片","手写笔记"].map(h=>({id:h,name:h,collected:(r.career.keepsakes||[]).includes(h),current:(r.momKeepsakes||[]).includes(h)})),endings:[...Bt.filter(h=>!h.final).map(h=>({id:h.short.key,name:h.short.name,collected:r.career.endings.includes(h.short.key),current:r.runEndings.includes(h.short.key)})),...Object.entries(Li).map(([h,C])=>({id:h,name:C.name,collected:r.career.endings.includes(h),current:r.runEndings.includes(h)}))]}));function g(h){return h.current?"本轮已解锁":h.collected?"已收录 · 本轮未解锁":"尚未收录"}return(h,C)=>(d(),f("div",null,[a("div",Km,[(d(),f(F,null,se([{k:"product",t:"产品"},{k:"customer",t:"顾客"},{k:"photo",t:"相册"},{k:"cg",t:"CG"},{k:"city",t:"门店"},{k:"collection",t:"收藏"},{k:"lab",t:"实验档案"}],b=>a("button",{key:b.k,type:"button",class:ye({on:t.value===b.k}),onClick:E=>t.value=b.k},u(b.t),11,zm)),64))]),t.value==="product"?(d(),f("div",Zm,[(d(!0),f(F,null,se(l.value,b=>(d(),f("div",{key:b.id,class:ye(["cake",{locked:!b.owned}])},[a("div",Ym,[qe(Iu,{id:b.id,colors:b.colors},null,8,["id","colors"])]),a("div",Wm,[a("div",Xm,[a("span",null,u(b.name),1),a("span",Jm,u(g(b)),1),b.owned?(d(),f("span",eh,"Lv"+u(b.lv),1)):I("",!0)]),a("div",nh,u(b.owned?b.flavor:"第 "+b.month+" 个月解锁"),1),b.owned&&b.hint?(d(),f("div",th,"配方："+u(b.hint),1)):I("",!0),b.owned?(d(),f("div",rh,[a("span",null,"¥"+u(b.price),1),a("span",null,u(b.diff)+" 点/个",1),a("span",null,"本月卖出 "+u(b.sold),1)])):I("",!0)])],2))),128))])):t.value==="photo"?(d(),f("div",sh,[a("div",lh,[(d(!0),f(F,null,se(o.value,b=>(d(),f("div",{key:b.id,class:"photo"},[a("div",ah,[b.collected&&b.img?(d(),f("img",{key:0,src:b.img,alt:b.title},null,8,oh)):b.collected?(d(),f("span",ih,"未冲印")):(d(),f("span",uh,"?"))]),a("div",ch,[a("div",dh,u(b.collected?b.title:"还没发生"),1),a("div",fh,u(b.collected?b.caption:"继续经营，它会出现"),1),a("div",ph,u(g(b)),1)])]))),128))])])):t.value==="cg"?(d(),f("div",vh,[(d(!0),f(F,null,se(v.value,b=>(d(),f("button",{key:b.id,class:"photo cg-card",type:"button",disabled:!b.collected||!b.src,onClick:E=>s.value=b},[a("span",hh,[b.collected&&b.src?(d(),f("img",{key:0,src:b.src,alt:b.name},null,8,gh)):(d(),f("span",yh,"?"))]),a("span",bh,[a("span",_h,u(b.collected?b.name:"还没发生"),1),a("span",kh,u(g(b)),1)])],8,mh))),128))])):t.value==="lab"?(d(),f("div",Mh,[i.value.length?I("",!0):(d(),f("div",$h,"完成一次新品上架或配方改良后，报告会保存在这里。")),(d(!0),f(F,null,se(i.value,b=>{var E;return d(),f("article",{key:b.id,class:"card card-pad lab-report"},[a("div",Ch,[a("div",Ih,u(b.name),1),a("span",Eh,u(y(r).career.products.includes(b.id)?"配方已收录":"已研发"),1)]),((E=b.reports.development)==null?void 0:E.type)==="signature"&&c.value?(d(),f("img",{key:0,class:"lab-cg",src:c.value,alt:"桂花栗子蛋糕复原插画"},null,8,Th)):I("",!0),(d(),f(F,null,se(["development","improvement"],T=>a("div",{key:T,class:"lab-entry"},[b.reports[T]?(d(),f(F,{key:0},[a("div",xh,[a("strong",null,u(T==="improvement"?"配方改良":b.reports[T].type==="signature"?"外婆配方复原":b.reports[T].refined?"精制新品研发":"新品研发"),1),a("span",wh,"第 "+u(b.reports[T].run)+" 轮 · M"+u(b.reports[T].month),1)]),T==="development"?(d(),f("div",Sh,[a("span",null,"总分 "+u(b.reports[T].score),1),(d(),f(F,null,se([{key:"flavor",label:"风味"},{key:"texture",label:"口感"},{key:"appearance",label:"外观"},{key:"cost",label:"成本"}],w=>a("span",{key:w.key},u(w.label)+" "+u(b.reports[T].scores[w.key]),1)),64))])):(d(),f("div",Ah,"熟练度 Lv"+u(b.reports[T].levelBefore)+" → Lv"+u(b.reports[T].levelAfter),1)),(d(!0),f(F,null,se(b.reports[T].feedback,w=>(d(),f("p",{key:w,class:"lab-note"},u(w),1))),128))],64)):I("",!0)])),64))])}),128))])):t.value==="city"?(d(),f("div",Nh,[(d(!0),f(F,null,se(m.value,b=>(d(),f("div",{key:b.id,class:ye(["city",{on:b.owned,off:!b.owned&&!b.surveyed}])},[C[2]||(C[2]=a("span",{class:"dot"},null,-1)),a("div",Oh,[a("div",Ph,[$e(u(b.name)+" ",1),b.owned?(d(),f("span",Rh,"营业中")):b.surveyed?(d(),f("span",Dh,"已考察")):I("",!0)]),a("div",Vh,u(b.note),1),b.owned?I("",!0):(d(),f("div",Lh," 第 "+u(b.month)+" 个月可考察 · 口碑 "+u(b.rep)+" · 开店 ¥"+u(b.cost),1))])],2))),128))])):t.value==="customer"?(d(),f("div",Hh,[(d(!0),f(F,null,se(p.value,b=>(d(),f("div",{key:b.id,class:"card card-pad customer"},[a("div",Fh,[a("div",Uh,u(b.name),1),a("span",jh,u(b.visit.purchases)+" 次购买",1)]),a("div",qh,"每月第 "+u(b.day)+" 个经营日 · "+u(b.productName),1),a("div",Gh,u(b.preference),1),(d(!0),f(F,null,se(b.stories,(E,T)=>(d(),f("div",{key:T,class:"customer-story"},[a("div",Bh,u(T===0?"第一次购买":"第三次购买"),1),a("div",null,u(b.visit.stories.includes(T)?E:"继续经营，解锁这段回忆"),1)]))),128))]))),128))])):(d(),f("div",Qh,[(d(),f(F,null,se([{key:"products",title:"产品"},{key:"photos",title:"相册"},{key:"cgs",title:"CG"},{key:"decorations",title:"装饰"},{key:"keepsakes",title:"妈妈的旧物"},{key:"endings",title:"结局"}],b=>a("div",{key:b.key,class:"card card-pad"},[a("div",Kh,u(b.title),1),(d(!0),f(F,null,se(_.value[b.key],E=>(d(),f("div",{key:E.id,class:"between collect-row"},[a("span",null,u(E.name),1),a("span",zh,u(g(E)),1)]))),128))])),64))])),s.value?(d(),f("div",{key:7,class:"cg-lightbox",role:"dialog","aria-modal":"true","aria-label":s.value.name,onClick:C[1]||(C[1]=mn(b=>s.value=null,["self"]))},[a("button",{class:"cg-lightbox-close",type:"button","aria-label":"关闭 CG",onClick:C[0]||(C[0]=b=>s.value=null)},"✕"),a("img",{src:s.value.src,alt:s.value.name},null,8,Yh),a("div",null,u(s.value.name),1)],8,Zh)):I("",!0)]))}},Eu=Be(Wh,[["__scopeId","data-v-956ef2e8"]]),Xh=["role","tabindex","aria-label"],Jh=["src","alt"],e1={key:0,class:"title-prompt"},n1=["disabled"],t1={class:"title-screen-reader","aria-live":"polite"},r1={key:0,class:"title-collection"},s1={class:"title-collection-body"},l1={key:1,class:"title-panel-mask"},a1=["aria-label"],o1={class:"title-panel-head"},i1={class:"title-panel-body"},u1={key:0,class:"save-group"},c1=["disabled"],d1={class:"manual-slots"},f1={class:"manual-slot-info"},p1={key:0},v1={key:1},m1=["disabled","onClick"],h1={key:1,class:"save-group"},g1={class:"manual-slots"},y1={class:"manual-slot-info"},b1={key:0},_1={key:1},k1=["onClick"],M1={key:1,class:"manual-slot-confirm"},$1=["onClick"],C1=["disabled"],I1=["disabled"],E1={key:0,class:"save-note"},T1={key:1,class:"save-feedback",role:"status"},x1={key:2,class:"recovery-code"},w1={key:3,class:"save-preview"},S1={key:2,class:"save-group"},A1=["disabled"],N1={key:0,class:"save-note"},O1={key:1,class:"save-feedback",role:"status"},P1={key:2,class:"save-preview"},R1={key:3,class:"save-preview"},D1={key:0,class:"title-panel-foot"},V1={key:2,class:"title-panel-mask confirm-mask"},L1={class:"confirm-card",role:"dialog","aria-modal":"true","aria-labelledby":"new-game-confirm"},H1={key:3,class:"title-toast",role:"status"},F1={key:1,class:"save-center-mask"},U1={class:"title-panel save-center"},j1={class:"title-panel-head"},q1={class:"title-panel-body"},G1={class:"manual-slots"},B1={class:"manual-slot-info"},Q1={key:0},K1={key:1},z1=["onClick"],Z1={key:1,class:"manual-slot-confirm"},Y1=["onClick"],W1=["disabled"],X1=["disabled"],J1={key:0,class:"save-note"},eg={key:1,class:"save-feedback",role:"status"},ng={key:2,class:"recovery-code"},tg={key:3,class:"save-preview"},rg={key:4,class:"save-preview"},sg={class:"title-panel-foot"},lg={__name:"TitleScreen",props:{inGame:{type:Boolean,default:!1}},emits:["enter","close","title","collection"],setup(e,{expose:n,emit:t}){const s=e,l=t,o=Z(s.inGame?"settings":"cover"),i=Z(!1),c=Z(null),v=Z(null),m=Z(null),p=Z(""),_=Z(null),g=Z(""),h=Z(!1),C=Z(null),b=Z(0),E=H(()=>(b.value,co())),T=H(()=>(b.value,Array.from({length:zi},(q,R)=>{const X=R+1,Me=Xn(gs(X));return{slot:X,preview:Me.ok?Me.preview:null}}))),w=xm;tt(()=>{!s.inGame&&!Wr()&&rl(!1)});const S=Z(!1);n({cancelTransition:()=>{S.value=!1}});function x(q){S.value||(S.value=!0,setTimeout(q,420))}function Q(q={}){x(()=>{l("enter",q)})}function pe(){if(!S.value){if(!Wr())return L("没有可继续的本地自动存档。");Q()}}function le(){if(co()&&!i.value){i.value=!0;return}Wr()||rl(!1),tu(),r.storyChoices={},i.value=!1,Q({fresh:!0})}function B(q){const R=gs(q),X=Xn(R);if(!X.ok)return L("这个本地存档位没有可读取的存档。");c.value={text:R,preview:X.preview}}function G(){const q=op(),R=Xn(q);if(!R.ok)return L("没有可读取的本地自动存档。");c.value={text:q,preview:R.preview}}async function O(q){var Ve;const R=(Ve=q.target.files)==null?void 0:Ve[0];if(q.target.value="",!R)return;const X=await new Promise((Xe,Bn)=>{const k=new FileReader;k.onload=()=>Xe(String(k.result||"")),k.onerror=()=>Bn(new Error("无法读取存档文件。")),k.readAsText(R)}).catch(Xe=>(L(Xe.message),""));if(!X)return;const Me=Xn(X);if(!Me.ok)return L(Me.message);c.value={text:X,preview:Me.preview}}function oe(){if(!c.value)return;const q=ip(c.value.text);if(!q.ok)return L(q.message);c.value=null,b.value++,Q()}function A(){const q=new Blob([tl()],{type:"application/json"}),R=URL.createObjectURL(q),X=document.createElement("a");X.href=R,X.download="林记烘焙存档.json",X.click(),URL.revokeObjectURL(R),L("存档文件已导出。")}function N(q){var R;if((R=T.value.find(X=>X.slot===q))!=null&&R.preview){v.value=q;return}he(q)}function he(q){const R=ap(q);v.value=null,R&&b.value++,L(R?`本地存档位 ${q} 已保存。`:"浏览器无法写入本地存档。")}async function be(){var q;if(!w)return!1;if(!p.value.trim())return L("先输入云存档恢复码。"),!1;g.value="正在检查云存档…";try{return m.value=await Am(p.value),_.value=m.value.revision,g.value="已找到云存档，请核对进度后再恢复或覆盖。",!0}catch(R){return m.value=((q=R.data)==null?void 0:q.meta)||null,R.status===404?(_.value=null,g.value="这个恢复码还没有云存档，可以创建新云档。",!1):(g.value=R.message,!1)}}async function ge(){var q;if(!w)return L("云存档服务暂不可用。");if(p.value.trim()||(p.value=Sm()),!(!m.value&&await be())){if(m.value)return L("请先核对云端进度，再点击“确认覆盖云档”。");g.value="正在备份到云端…";try{const R=await yo(p.value,tl(),_.value);_.value=R.revision,m.value=null,g.value=R.created?"云存档已创建。请立即复制恢复码，换设备时需要用它读取。":"云存档已更新。"}catch(R){m.value=((q=R.data)==null?void 0:q.meta)||null,m.value&&(_.value=m.value.revision),g.value=R.status===409?"云存档已有较新进度，请先核对后确认覆盖。":R.message}}}async function z(){var R;if(!m.value)return;const q=m.value.revision;g.value="正在更新云端存档…";try{const X=await yo(p.value,tl(),q);_.value=X.revision,m.value=null,g.value="云存档已更新。"}catch(X){m.value=((R=X.data)==null?void 0:R.meta)||null,m.value&&(_.value=m.value.revision),g.value=X.status===409?"云存档在预览后已有更新，请重新核对后再确认覆盖。":X.message}}async function re(){var q;if(m.value){g.value="正在读取云存档…";try{const R=await Nm(p.value,m.value.revision),X=Xn(R.save);if(!X.ok)throw new Error("云端存档内容无效。");c.value={text:R.save,preview:X.preview},m.value=null,g.value="已将云档载入预览，请确认后恢复。"}catch(R){m.value=((q=R.data)==null?void 0:q.meta)||null,m.value&&(_.value=m.value.revision),g.value=R.status===409?"云档在预览后已有更新，请重新核对。":R.message}}}async function ae(){try{await navigator.clipboard.writeText(p.value),h.value=!0}catch{h.value=!1,L("请长按恢复码并手动复制。")}}function L(q){g.value=q}function P(){Wr()||rl(!1),o.value="collection"}function D(){c.value=null,m.value=null,g.value="",s.inGame?l("close"):o.value="menu"}function $(){s.inGame?l("close"):o.value="menu"}return(q,R)=>e.inGame?(d(),f("div",F1,[a("section",U1,[a("header",j1,[R[37]||(R[37]=a("h1",null,"设置与存档",-1)),a("button",{class:"title-close",type:"button","aria-label":"关闭设置",onClick:R[14]||(R[14]=X=>q.$emit("close"))},"✕")]),a("div",q1,[R[40]||(R[40]=a("h2",null,"本地存档",-1)),R[41]||(R[41]=a("p",{class:"save-note"},"自动存档会持续更新；手动槽位保存在当前浏览器，可以保留不同经营进度。",-1)),a("div",G1,[(d(!0),f(F,null,se(T.value,X=>{var Me;return d(),f("div",{key:X.slot,class:"manual-slot"},[a("div",B1,[a("strong",null,"手动槽位 "+u(X.slot)+" · "+u(X.preview?"已保存":"空槽位"),1),X.preview?(d(),f("small",Q1,"M"+u(X.preview.month)+" · 第 "+u(X.preview.day)+" 个经营日 · ¥"+u(X.preview.cash.toLocaleString()),1)):I("",!0),(Me=X.preview)!=null&&Me.savedAt?(d(),f("small",K1,"保存于 "+u(new Date(X.preview.savedAt).toLocaleString()),1)):I("",!0)]),v.value!==X.slot?(d(),f("button",{key:0,class:"save-action primary",type:"button",onClick:Ve=>N(X.slot)},u(X.preview?"覆盖这个槽位":"保存到此槽位"),9,z1)):(d(),f("div",Z1,[a("span",null,"确认覆盖槽位 "+u(X.slot)+"？",1),a("button",{class:"save-action primary",type:"button",onClick:Ve=>he(X.slot)},"确认保存",8,Y1),a("button",{class:"save-action",type:"button",onClick:R[15]||(R[15]=Ve=>v.value=null)},"取消")]))])}),128))]),a("button",{class:"save-action",type:"button",onClick:A},"导出存档文件"),a("button",{class:"save-action",type:"button",onClick:R[16]||(R[16]=X=>{var Me;return(Me=C.value)==null?void 0:Me.click()})},"导入存档文件"),R[42]||(R[42]=a("h2",null,"云存档",-1)),R[43]||(R[43]=a("p",{class:"save-note"},"手动备份到云端。恢复码可以在另一台设备读取同一份存档。",-1)),R[44]||(R[44]=a("label",{class:"save-label",for:"recovery-code-game"},"恢复码",-1)),fn(a("input",{id:"recovery-code-game","onUpdate:modelValue":R[17]||(R[17]=X=>p.value=X),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入或创建恢复码"},null,512),[[et,p.value]]),a("button",{class:"save-action",type:"button",disabled:!y(w),onClick:be},"检查云存档",8,W1),a("button",{class:"save-action primary",type:"button",disabled:!y(w),onClick:ge},"备份到云端",8,X1),y(w)?I("",!0):(d(),f("p",J1,"云存档服务暂不可用，请稍后再试。")),g.value?(d(),f("p",eg,u(g.value),1)):I("",!0),p.value&&p.value.length===20?(d(),f("div",ng,[a("span",null,u(p.value),1),a("button",{type:"button",onClick:ae},u(h.value?"已复制":"复制恢复码"),1)])):I("",!0),m.value?(d(),f("div",tg,[R[38]||(R[38]=a("strong",null,"云端存档预览",-1)),a("span",null,"M"+u(m.value.month)+" · 第 "+u(m.value.day)+" 个经营日 · ¥"+u(Number(m.value.cash||0).toLocaleString()),1),a("small",null,"云端更新于 "+u(new Date(m.value.updatedAt).toLocaleString()),1),a("button",{class:"save-action primary",type:"button",onClick:re},"确认读取这份云档")])):I("",!0),c.value?(d(),f("div",rg,[R[39]||(R[39]=a("strong",null,"存档预览",-1)),a("span",null,"M"+u(c.value.preview.month)+" · 第 "+u(c.value.preview.day)+" 个经营日 · ¥"+u(c.value.preview.cash.toLocaleString()),1),a("small",null,u(c.value.preview.savedAt?new Date(c.value.preview.savedAt).toLocaleString():"保存时间未知"),1),a("button",{class:"save-action primary",type:"button",onClick:oe},"确认读取并继续"),a("button",{class:"save-action",type:"button",onClick:R[18]||(R[18]=X=>c.value=null)},"取消")])):I("",!0),a("input",{ref_key:"fileInput",ref:C,class:"save-file",type:"file",accept:"application/json,.json",onChange:O},null,544)]),a("footer",sg,[a("button",{class:"save-action",type:"button",onClick:R[19]||(R[19]=X=>q.$emit("close"))},"返回游戏"),a("button",{class:"save-action",type:"button",onClick:R[20]||(R[20]=X=>q.$emit("title"))},"返回标题")])])])):(d(),f("div",{key:0,class:ye(["title-screen",{leaving:S.value}])},[qe(Vi,{name:"cover-dissolve"},{default:mt(()=>[o.value==="cover"||o.value==="menu"?(d(),f("div",{key:o.value,class:ye(["title-frame",{"title-menu":o.value==="menu"}]),role:o.value==="cover"?"button":void 0,tabindex:o.value==="cover"?0:void 0,"aria-label":o.value==="cover"?"点击任意位置开始游戏":void 0,onClick:R[2]||(R[2]=X=>o.value==="cover"&&(o.value="menu")),onKeydown:[R[3]||(R[3]=bl(X=>o.value==="cover"&&(o.value="menu"),["enter"])),R[4]||(R[4]=bl(mn(X=>o.value==="cover"&&(o.value="menu"),["prevent"]),["space"]))]},[a("img",{src:y(Pe)(o.value==="cover"?"cover.webp":"cover-options.webp"),alt:o.value==="cover"?"林记烘焙游戏封面":"林记烘焙主菜单"},null,8,Jh),o.value==="cover"?(d(),f("div",e1,"点击任意位置开始游戏")):(d(),f(F,{key:1},[a("button",{class:"title-hit title-hit-continue",type:"button",disabled:!E.value,"aria-label":"继续游戏",onClick:pe},null,8,n1),a("button",{class:"title-hit title-hit-new",type:"button","aria-label":"新的开始",onClick:le}),a("button",{class:"title-hit title-hit-load",type:"button","aria-label":"读取存档",onClick:R[0]||(R[0]=X=>{o.value="load",g.value=""})}),a("button",{class:"title-hit title-hit-settings",type:"button","aria-label":"设置",onClick:R[1]||(R[1]=X=>{o.value="settings",g.value=""})}),a("button",{class:"title-hit title-hit-collection",type:"button","aria-label":"查看收集",onClick:P}),a("div",t1,u(E.value?"有本地自动存档":"暂无本地自动存档"),1)],64))],42,Xh)):I("",!0)]),_:1}),o.value==="collection"?(d(),f("div",r1,[a("header",null,[R[21]||(R[21]=a("h1",null,"查看收集",-1)),a("button",{class:"title-back",type:"button",onClick:R[5]||(R[5]=X=>o.value="menu")},"返回主菜单")]),a("div",s1,[qe(Eu,{"initial-segment":"collection"})])])):I("",!0),o.value==="settings"||o.value==="load"?(d(),f("div",l1,[a("section",{class:"title-panel","aria-label":o.value==="settings"?"设置和存档":"读取存档"},[a("header",o1,[a("button",{class:"title-back",type:"button",onClick:D},"← 返回"),a("h1",null,u(o.value==="settings"?"设置与存档":"读取存档"),1),e.inGame?I("",!0):(d(),f("button",{key:0,class:"title-back",type:"button",onClick:$},"主菜单"))]),a("div",i1,[o.value==="load"?(d(),f("div",u1,[R[22]||(R[22]=a("h2",null,"本地存档",-1)),R[23]||(R[23]=a("p",{class:"save-note"},"自动存档随经营进度保存；三个手动槽位可分别保留不同进度。",-1)),a("button",{class:"save-action",type:"button",disabled:!E.value,onClick:G},"预览最近自动存档",8,c1),a("div",d1,[(d(!0),f(F,null,se(T.value,X=>{var Me;return d(),f("div",{key:X.slot,class:"manual-slot"},[a("div",f1,[a("strong",null,"手动槽位 "+u(X.slot)+" · "+u(X.preview?"已保存":"空槽位"),1),X.preview?(d(),f("small",p1,"M"+u(X.preview.month)+" · 第 "+u(X.preview.day)+" 个经营日 · ¥"+u(X.preview.cash.toLocaleString()),1)):I("",!0),(Me=X.preview)!=null&&Me.savedAt?(d(),f("small",v1,"保存于 "+u(new Date(X.preview.savedAt).toLocaleString()),1)):I("",!0)]),a("button",{class:"save-action",type:"button",disabled:!X.preview,onClick:Ve=>B(X.slot)},"预览并读取",8,m1)])}),128))]),a("button",{class:"save-action",type:"button",onClick:R[6]||(R[6]=X=>{var Me;return(Me=C.value)==null?void 0:Me.click()})},"从 JSON 文件导入")])):(d(),f("div",h1,[R[25]||(R[25]=a("h2",null,"本地存档",-1)),R[26]||(R[26]=a("p",{class:"save-note"},"自动存档会持续更新；手动槽位保存在当前浏览器，可以保留不同经营进度。",-1)),a("div",g1,[(d(!0),f(F,null,se(T.value,X=>{var Me;return d(),f("div",{key:X.slot,class:"manual-slot"},[a("div",y1,[a("strong",null,"手动槽位 "+u(X.slot)+" · "+u(X.preview?"已保存":"空槽位"),1),X.preview?(d(),f("small",b1,"M"+u(X.preview.month)+" · 第 "+u(X.preview.day)+" 个经营日 · ¥"+u(X.preview.cash.toLocaleString()),1)):I("",!0),(Me=X.preview)!=null&&Me.savedAt?(d(),f("small",_1,"保存于 "+u(new Date(X.preview.savedAt).toLocaleString()),1)):I("",!0)]),v.value!==X.slot?(d(),f("button",{key:0,class:"save-action primary",type:"button",onClick:Ve=>N(X.slot)},u(X.preview?"覆盖这个槽位":"保存到此槽位"),9,k1)):(d(),f("div",M1,[a("span",null,"确认覆盖槽位 "+u(X.slot)+"？",1),a("button",{class:"save-action primary",type:"button",onClick:Ve=>he(X.slot)},"确认保存",8,$1),a("button",{class:"save-action",type:"button",onClick:R[7]||(R[7]=Ve=>v.value=null)},"取消")]))])}),128))]),a("button",{class:"save-action",type:"button",onClick:A},"导出存档文件"),a("button",{class:"save-action",type:"button",onClick:R[8]||(R[8]=X=>{var Me;return(Me=C.value)==null?void 0:Me.click()})},"导入存档文件"),R[27]||(R[27]=a("h2",null,"云存档",-1)),R[28]||(R[28]=a("p",{class:"save-note"},"手动备份到云端。恢复码可以在另一台设备读取同一份存档。",-1)),R[29]||(R[29]=a("label",{class:"save-label",for:"recovery-code"},"恢复码",-1)),fn(a("input",{id:"recovery-code","onUpdate:modelValue":R[9]||(R[9]=X=>p.value=X),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入或创建恢复码"},null,512),[[et,p.value]]),a("button",{class:"save-action",type:"button",disabled:!y(w),onClick:be},"检查云存档",8,C1),a("button",{class:"save-action primary",type:"button",disabled:!y(w),onClick:ge},"备份到云端",8,I1),y(w)?I("",!0):(d(),f("p",E1,"云存档服务暂不可用，请稍后再试。")),g.value?(d(),f("p",T1,u(g.value),1)):I("",!0),p.value&&p.value.length===20?(d(),f("div",x1,[a("span",null,u(p.value),1),a("button",{type:"button",onClick:ae},u(h.value?"已复制":"复制恢复码"),1)])):I("",!0),m.value?(d(),f("div",w1,[R[24]||(R[24]=a("strong",null,"云端存档预览",-1)),a("span",null,"M"+u(m.value.month)+" · 第 "+u(m.value.day)+" 个经营日 · ¥"+u(Number(m.value.cash||0).toLocaleString()),1),a("small",null,"云端更新于 "+u(new Date(m.value.updatedAt).toLocaleString()),1),a("button",{class:"save-action",type:"button",onClick:re},"读取这份云档"),a("button",{class:"save-action primary",type:"button",onClick:z},"确认用当前进度覆盖云档")])):I("",!0)])),o.value==="load"?(d(),f("div",S1,[R[31]||(R[31]=a("h2",null,"云存档",-1)),R[32]||(R[32]=a("p",{class:"save-note"},"输入另一台设备保存时使用的恢复码，先查看进度，再确认读取。",-1)),R[33]||(R[33]=a("label",{class:"save-label",for:"recovery-code-load"},"恢复码",-1)),fn(a("input",{id:"recovery-code-load","onUpdate:modelValue":R[10]||(R[10]=X=>p.value=X),class:"save-input",autocomplete:"off",autocapitalize:"characters",spellcheck:"false",placeholder:"输入恢复码"},null,512),[[et,p.value]]),a("button",{class:"save-action",type:"button",disabled:!y(w),onClick:be},"检查云存档",8,A1),y(w)?I("",!0):(d(),f("p",N1,"云存档服务暂不可用，请稍后再试。")),g.value?(d(),f("p",O1,u(g.value),1)):I("",!0),m.value?(d(),f("div",P1,[R[30]||(R[30]=a("strong",null,"云端存档预览",-1)),a("span",null,"M"+u(m.value.month)+" · 第 "+u(m.value.day)+" 个经营日 · ¥"+u(Number(m.value.cash||0).toLocaleString()),1),a("small",null,"云端更新于 "+u(new Date(m.value.updatedAt).toLocaleString()),1),a("button",{class:"save-action primary",type:"button",onClick:re},"确认读取这份云档")])):I("",!0)])):I("",!0),a("input",{ref_key:"fileInput",ref:C,class:"save-file",type:"file",accept:"application/json,.json",onChange:O},null,544),c.value?(d(),f("div",R1,[R[34]||(R[34]=a("strong",null,"存档预览",-1)),a("span",null,"M"+u(c.value.preview.month)+" · 第 "+u(c.value.preview.day)+" 个经营日 · ¥"+u(c.value.preview.cash.toLocaleString()),1),a("small",null,u(c.value.preview.savedAt?new Date(c.value.preview.savedAt).toLocaleString():"保存时间未知"),1),a("button",{class:"save-action primary",type:"button",onClick:oe},"确认读取并继续"),a("button",{class:"save-action",type:"button",onClick:R[11]||(R[11]=X=>c.value=null)},"取消")])):I("",!0)]),e.inGame?(d(),f("footer",D1,[a("button",{class:"save-action",type:"button",onClick:R[12]||(R[12]=X=>q.$emit("close"))},"返回游戏")])):I("",!0)],8,a1)])):I("",!0),i.value?(d(),f("div",V1,[a("section",L1,[R[35]||(R[35]=a("h2",{id:"new-game-confirm"},"开始新的经营？",-1)),R[36]||(R[36]=a("p",null,"本地自动存档会替换。手动备份和已收集内容会保留。",-1)),a("button",{class:"save-action primary",type:"button",onClick:le},"开始新的游戏"),a("button",{class:"save-action",type:"button",onClick:R[13]||(R[13]=X=>i.value=!1)},"继续考虑")])])):I("",!0),g.value&&o.value==="menu"?(d(),f("p",H1,u(g.value),1)):I("",!0)],2))}},bo=Be(lg,[["__scopeId","data-v-b9a0ca09"]]),ag={class:"card card-pad"},og={class:"between"},ig={class:"small muted"},ug={class:"chip"},cg=["src"],dg={class:"counter-stats small muted"},fg={key:1,class:"small muted"},pg=["disabled"],vg={key:3,class:"small regular-visit"},mg={key:4,class:"small regular-visit"},hg={key:7,class:"btn block",style:{"margin-top":"10px"},type:"button",disabled:""},gg={key:0,class:"card card-pad section-card"},yg={class:"small muted"},bg=["disabled","onClick"],_g={key:1,class:"card card-pad section-card small muted"},kg={key:2,class:"card card-pad section-card"},Mg={class:"between small"},$g={key:0,class:"leftovers"},Cg=["onClick"],Ig={key:3,class:"small notice",role:"status"},Eg={class:"card card-pad section-card small muted"},Tg={__name:"ShopPage",emits:["closed","open-panel"],setup(e,{emit:n}){const t=n,s=Z(""),l=H(()=>Object.values(r.shelf||{}).reduce((g,h)=>g+h,0)),o=H(()=>r.orders),i=H(()=>ea()),c=H(()=>Ln("feedback")),v={discount:"整理并打折售出",staff:"留给一起工作的伙伴",share:"分享给街坊邻居",waste:"妥善报损处理"};function m(){if(!l.value){s.value="展示柜还是空的，先去后厨制作蛋糕。";return}bu()&&t("open-panel","game:delivery")}function p(){if(r.dayPhase!=="prep"||r.ap<c.value.ap||c.value.disabled){s.value=c.value.note;return}s.value=Kt("feedback",{})?"谢谢你把顾客的意见认真记了下来。":"现在无法收集反馈。"}function _(g){const h=ia(g);h&&t("closed",h)}return(g,h)=>(d(),f("div",null,[a("div",ag,[a("div",og,[a("div",null,[h[2]||(h[2]=a("div",{class:"h2",style:{margin:"0"}},"柜台营业",-1)),a("div",ig,u(y(r).month)+" 月 · 第 "+u(y(r).day)+"/"+u(y(Ir))+" 个经营日",1)]),a("span",ug,"口碑 "+u(Math.round(y(r).reputation)),1)]),y(We)("bg-counter.webp")==="ok"?(d(),f("img",{key:0,class:"counter-art",src:y(Pe)("bg-counter.webp"),alt:"林记烘焙营业柜台"},null,8,cg)):I("",!0),a("div",dg,[a("span",null,"待售 "+u(l.value)+" 个",1),a("span",null,"预约 "+u(o.value.length)+" 笔",1),a("span",null,"今日收入 ¥"+u(y(r).dayRev.toLocaleString()),1)]),y(r).dayPhase==="service-ready"?(d(),f("div",fg,"蛋糕已经摆进展示柜，准备好就开门接待。")):I("",!0),y(r).dayPhase==="prep"?(d(),f("button",{key:2,class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:c.value.disabled||y(r).ap<c.value.ap,onClick:p},"顾客反馈 · "+u(c.value.note),9,pg)):I("",!0),y(r).dayPhase==="prep"&&i.value.length?(d(),f("div",vg,[h[3]||(h[3]=a("strong",null,"今日常客来访",-1)),(d(!0),f(F,null,se(i.value,C=>(d(),f("span",{key:C.id},u(C.name)+" · 想买"+u(y(Ue)(C.product).name),1))),128))])):I("",!0),y(r).dayPhase==="prep"&&y(r).challenge?(d(),f("div",mg,[h[4]||(h[4]=a("strong",null,"今日经营挑战",-1)),a("span",null,u(y(r).challenge.type==="stock"?"精准备货 · 剩货率不超过 10%":y(r).challenge.type==="new"?"新品主题日 · "+y(Ue)(y(r).challenge.target).name+" 销售至少 3 份":"定制专场 · 完成当天定制要求"),1)])):I("",!0),y(r).dayPhase==="service-ready"?(d(),f("button",{key:5,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:m},"开门营业 · 开始接待")):I("",!0),y(r).dayPhase==="service"?(d(),f("button",{key:6,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:h[0]||(h[0]=C=>t("open-panel","game:delivery"))},"继续全屏订单交付")):I("",!0),y(r).dayPhase==="prep"&&!l.value?(d(),f("button",hg,"先去后厨制作蛋糕")):I("",!0)]),y(r).dayPhase==="prep"&&o.value.length?(d(),f("div",gg,[h[5]||(h[5]=a("div",{class:"h2"},"今日预约",-1)),(d(!0),f(F,null,se(o.value,C=>(d(),f("div",{key:C.id,class:"order-row"},[a("div",null,[a("strong",null,u(C.customer)+" · "+u(y(Ue)(C.product).name)+" ×"+u(C.qty),1),a("div",yg,u(C.type==="定制"?"装饰："+C.due+" · 祝福："+C.blessing+" · ":"")+"预计收入 ¥"+u(C.pay),1)]),a("button",{class:"btn",type:"button",disabled:C.taken,onClick:b=>y(hu)(C.id)},u(C.taken?"已接单":"接下预约"),9,bg)]))),128)),h[6]||(h[6]=a("p",{class:"small muted"},"接下的预约会在营业队列中优先出现。",-1))])):I("",!0),y(r).dayPhase==="service"?(d(),f("div",_g,"顾客正在等待。请进入全屏订单交付继续营业；离开交付页面时，耐心计时会暂停。")):I("",!0),y(r).dayPhase==="closing"?(d(),f("div",kg,[h[9]||(h[9]=a("div",{class:"h2"},"今日接待完成",-1)),a("div",Mg,[h[7]||(h[7]=a("span",{class:"muted"},"营业结果",-1)),a("span",null,u(y(r).daySold)+" 个蛋糕 · ¥"+u(y(r).dayRev.toLocaleString())+" 已到账",1)]),l.value?(d(),f("div",$g,[h[8]||(h[8]=a("div",{class:"small muted"},"选择剩余成品的处理方式",-1)),(d(!0),f(F,null,se(y(wl),(C,b)=>(d(),f("button",{key:b,class:"leftover-button",type:"button",onClick:E=>_(b)},[$e(u(C.label),1),a("span",null,u(v[b]),1)],8,Cg))),128))])):(d(),f("button",{key:1,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:h[1]||(h[1]=C=>_("waste"))},"打烊，进入下一经营日"))])):I("",!0),s.value?(d(),f("p",Ig,u(s.value),1)):I("",!0),a("div",Eg,[a("div",null,"本月固定成本 ¥"+u(y(Ji)),1),h[10]||(h[10]=a("div",{style:{"margin-top":"4px"}},"顾客超时会影响口碑，完成订单仍按原价结算。",-1))])]))}},xg=Be(Tg,[["__scopeId","data-v-837f5709"]]),wg={class:"card card-pad"},Sg={class:"between"},Ag={class:"between small muted",style:{"margin-top":"7px"}},Ng=["disabled"],Og={key:0,class:"challenge-note small"},Pg={key:0,class:"card card-pad compact-card"},Rg={class:"product-list"},Dg={class:"product-art"},Vg={class:"product-copy"},Lg={class:"quantity"},Hg=["disabled","onClick"],Fg=["disabled","onClick"],Ug={class:"card card-pad compact-card"},jg={class:"between"},qg={class:"small muted"},Gg={key:0,class:"small muted",style:{"margin-top":"5px"}},Bg={key:1,class:"card card-pad compact-card"},Qg={key:2,class:"card card-pad compact-card"},Kg={class:"small muted"},zg=["disabled"],Zg={key:6,class:"card card-pad compact-card"},Yg={key:0,class:"small muted"},Wg={key:7,class:"small muted",role:"status"},Xg={__name:"KitchenPage",emits:["open-panel"],setup(e,{emit:n}){const t=n,s=Z(""),l=H(()=>na()),o=H(()=>ep()),i=H(()=>Os()),c=H(()=>qn.value.map(E=>({...E,qty:r.plan[E.id]||0,price:Gn(E.id)}))),v=H(()=>r.orders.filter(E=>E.taken)),m=H(()=>r.productionMini),p=H(()=>{var E,T;return((E=r.productionResult)==null?void 0:E.quality)==="perfect"?"完美 · 售价 +10%":((T=r.productionResult)==null?void 0:T.quality)==="fine"?"精致 · 售价 +5%":"普通品质"}),_=H(()=>Object.entries(o.value).map(([E,T])=>{var w;return{id:E,name:((w=bn.find(S=>S.id===E))==null?void 0:w.name)||E,qty:T}})),g=H(()=>r.challenge?r.challenge.type==="stock"?"精准备货：预约优先，剩货率不超过 10%。":r.challenge.type==="new"?"新品主题日："+Ue(r.challenge.target).name+" 至少交付 3 个。":"定制专场：完成当天定制要求。":"");function h(E,T){uu(E,(r.plan[E]||0)+T)}function C(){const E={};v.value.forEach(x=>{E[x.product]=(E[x.product]||0)+x.qty});const T=Math.max(3,Math.min(12,Math.round({1:4,2:6,3:8,4:10}[r.shopLevel]+r.reputation/35)));let w=Math.max(0,T-Object.values(E).reduce((x,Q)=>x+Q,0));const S=qn.value.slice().sort((x,Q)=>(r.monthSold[Q.id]||0)+Q.demand-((r.monthSold[x.id]||0)+x.demand));for(let x=0;x<w&&S.length;x++){const Q=S[x%Math.min(3,S.length)].id;E[Q]=Math.min(12,(E[Q]||0)+1)}r.plan=E,de()}function b(){r.plan={},de()}return(E,T)=>(d(),f("div",null,[a("div",wg,[a("div",Sg,[T[2]||(T[2]=a("div",{class:"h2",style:{margin:"0"}},"今日生产计划",-1)),a("span",{class:ye(["chip",l.value>y(wt)?"pink":"sage"])},"产能 "+u(l.value)+"/"+u(y(wt)),3)]),a("div",Ag,[a("span",null,"库存 "+u(y(Rr))+"/"+u(y(r).warehouseCapacity)+" 份",1),a("span",null,"体力 "+u(y(r).stamina),1)]),a("button",{class:"btn block",style:{"margin-top":"9px"},type:"button",disabled:y(r).dayPhase!=="prep",onClick:C},"智能备货 · 先满足已接预约",8,Ng),y(r).dayPhase==="prep"&&g.value?(d(),f("div",Og,[T[3]||(T[3]=a("strong",null,"今日经营挑战",-1)),a("span",null,u(g.value)+"成功后营业收入 +5%。",1)])):I("",!0)]),v.value.length?(d(),f("div",Pg,[T[4]||(T[4]=a("strong",null,"已接预约",-1)),(d(!0),f(F,null,se(v.value,w=>(d(),f("div",{key:w.id,class:"small muted"},u(y(Ue)(w.product).name)+" ×"+u(w.qty)+u(w.due?" · 装饰："+w.due:""),1))),128))])):I("",!0),a("div",Rg,[(d(!0),f(F,null,se(c.value,w=>(d(),f("div",{key:w.id,class:"product-row"},[a("div",Dg,[qe(Iu,{id:w.id,colors:w.colors},null,8,["id","colors"])]),a("div",Vg,[a("strong",null,u(w.name),1),a("span",null,"¥"+u(w.price)+" · 产能 "+u(w.diff),1),a("span",null,"熟练度 Lv"+u(Math.round((y(r).levels[w.id]||1)*10)/10),1)]),a("div",Lg,[a("button",{type:"button",disabled:y(r).dayPhase!=="prep",onClick:S=>h(w.id,-1)},"−",8,Hg),a("span",null,u(w.qty),1),a("button",{type:"button",disabled:y(r).dayPhase!=="prep",onClick:S=>h(w.id,1)},"+",8,Fg)])]))),128))]),a("div",Ug,[a("div",jg,[T[5]||(T[5]=a("strong",null,"材料预算",-1)),a("span",qg,"预计 "+u(Object.values(y(r).plan).reduce((w,S)=>w+S,0))+" 个蛋糕",1)]),_.value.length?I("",!0):(d(),f("div",Gg,"选择产品和数量后会列出配方用料。")),(d(!0),f(F,null,se(_.value,w=>(d(),f("div",{key:w.id,class:"between small",style:{"margin-top":"5px"}},[a("span",null,u(w.name),1),a("span",{class:ye({missing:i.value[w.id]})},u(w.qty)+" 份 · 库存 "+u(y(r).pantry[w.id]||0)+u(i.value[w.id]?" · 缺 "+Math.ceil(i.value[w.id]):""),3)]))),128))]),m.value?(d(),f("div",Bg,[...T[6]||(T[6]=[a("strong",null,"今日主打工序已准备",-1),a("p",{class:"small muted"},"请进入独立制作页面继续完成完整的食材、搅拌、烘烤和装饰流程。",-1)])])):y(r).productionResult?(d(),f("div",Qg,[a("strong",null,"本批品质："+u(p.value),1),a("div",Kg,u(y(r).productionResult.quality==="normal"?"基础品质，不影响批量成品。":"效果已记在主打蛋糕批次中。"),1)])):I("",!0),y(r).dayPhase==="prep"&&!y(r).productionResult?(d(),f("button",{key:3,class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:T[0]||(T[0]=w=>t("open-panel","game:baking"))},"进入独立蛋糕制作小游戏 →")):I("",!0),y(r).dayPhase==="prep"&&y(r).productionResult?(d(),f("button",{key:4,class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:l.value>y(wt)||Object.keys(i.value).length>0,onClick:T[1]||(T[1]=(...w)=>y(El)&&y(El)(...w))},"完成今日批量制作",8,zg)):I("",!0),y(r).dayPhase==="prep"&&Object.keys(y(r).plan).length?(d(),f("button",{key:5,class:"btn block",style:{"margin-top":"8px"},type:"button",onClick:b},"清空计划")):I("",!0),y(r).dayPhase==="service-ready"||y(r).dayPhase==="service"||y(r).dayPhase==="closing"?(d(),f("div",Zg,[T[7]||(T[7]=a("div",{class:"h2"},"今日成品",-1)),(d(!0),f(F,null,se(Object.keys(y(r).shelf).filter(w=>y(r).shelf[w]>0),w=>(d(),f("div",{key:w,class:"between small"},[a("span",null,u(y(Ue)(w).name),1),a("span",null,u(y(r).shelf[w])+" 个",1)]))),128)),y(r).dayPhase==="service-ready"?(d(),f("div",Yg,"前往柜台开门营业。")):I("",!0)])):I("",!0),s.value?(d(),f("p",Wg,u(s.value),1)):I("",!0),T[8]||(T[8]=a("div",{class:"small muted tips"},"设备、妈妈和伙伴提供产能；超出免费产能的部分才消耗体力。主打蛋糕小游戏只作用于这款产品的当日批次。",-1))]))}},Jg=Be(Xg,[["__scopeId","data-v-e9585c7e"]]),e0={class:"card card-pad"},n0={class:"between"},t0={class:"chip"},r0={class:"card card-pad team-card"},s0={class:"between"},l0={class:"small muted"},a0={key:0,class:"avatar real-avatar"},o0=["src","alt"],i0={key:1},u0={key:1,class:"avatar locked-avatar"},c0={class:"partner-info"},d0={class:"partner-title"},f0={class:"chip"},p0={class:"small muted"},v0={class:"partner-actions"},m0=["disabled","onClick"],h0=["disabled","onClick"],g0={class:"card card-pad team-card"},y0={class:"assignment"},b0=["value","disabled"],_0=["value"],k0={class:"assignment"},M0=["value","disabled"],$0=["value","disabled"],C0={key:0,class:"auto-toggle"},I0=["checked","disabled"],E0={key:1,class:"locked-auto"},T0={key:2,class:"small muted",role:"status"},x0={__name:"PartnersPage",setup(e){const n=Z(""),t=H(()=>Nt.map(m=>{const p=r.staff.includes(m.id);return p?{id:m.id,joined:p,name:m.name,nick:m.nick,role:m.role,skillName:m.skillName,skill:r.partnerSkill[m.id]||1,trust:Math.round(r.partnerTrust[m.id]||0),avatar:Tn(m.name)}:{id:m.id,joined:p}})),s=H(()=>au()),l=H(()=>aa()),o=H(()=>r.dayPhase==="prep");function i(m,p){ho({...r.staffAssignments,[m]:p||null}),n.value="营业分工已保存。"}function c(m){l.value&&(ho({...r.staffAssignments,auto:m.target.checked}),n.value=m.target.checked?"已启用全自动接待。":"已切回手动接待。")}function v(m,p){const _=Ln(m);if(!o.value||_.disabled||r.ap<_.ap||_.cost&&r.cash<_.cost){n.value=o.value?_.note:"请在营业前安排员工交流与培训。";return}const g=Kt(m,{partner:p});n.value=g?m==="talk"?"和伙伴聊了一会儿。":"培训完成，专业能力提升。":"暂时无法完成。"}return(m,p)=>(d(),f("div",null,[a("div",e0,[a("div",n0,[p[2]||(p[2]=a("div",null,[a("div",{class:"h2",style:{margin:"0"}},"林暖"),a("div",{class:"small muted"},"母亲 · 林记上一任经营者")],-1)),a("span",t0,"家庭默契 "+u(Math.round(y(r).momBond)),1)]),p[3]||(p[3]=a("p",{class:"small muted",style:{margin:"7px 0 0"}},"她每天提供 60 点免费产能。和妈妈的互动在店内进行。",-1))]),a("div",r0,[a("div",s0,[p[4]||(p[4]=a("div",{class:"h2",style:{margin:"0"}},"伙伴档案",-1)),a("span",l0,"已加入 "+u(s.value.length)+" / "+u(y(Nt).length),1)]),(d(!0),f(F,null,se(t.value,_=>(d(),f("article",{key:_.id,class:"partner-row"},[_.joined?(d(),f("div",a0,[_.avatar?(d(),f("img",{key:0,src:_.avatar,alt:_.name},null,8,o0)):(d(),f("span",i0,u(_.name.slice(0,1)),1))])):(d(),f("div",u0,"?")),a("div",c0,[_.joined?(d(),f(F,{key:0},[a("div",d0,[a("strong",null,u(_.name),1),a("span",f0,u(_.role),1)]),a("div",p0,"信赖 "+u(_.trust)+" · "+u(_.skillName)+"专业 Lv"+u(_.skill),1),a("div",v0,[a("button",{class:"btn",type:"button",disabled:!o.value||y(r).ap<1,onClick:g=>v("talk",_.id)},"员工交流 · 1 行动力",8,m0),a("button",{class:"btn",type:"button",disabled:!o.value||y(r).ap<2||y(r).cash<400||_.skill>=5,onClick:g=>v("train",_.id)},"培训 · 2 行动力 / ¥400",8,h0)])],64)):(d(),f(F,{key:1},[p[5]||(p[5]=a("strong",null,"未解锁",-1)),p[6]||(p[6]=a("div",{class:"small muted"},"继续经营，等待伙伴加入林记。",-1))],64))])]))),128))]),a("div",g0,[p[13]||(p[13]=a("div",{class:"h2"},"营业分工",-1)),p[14]||(p[14]=a("p",{class:"small muted"},"伙伴可以分担找蛋糕和打包。专业等级越高，负责工位的处理时间越短。",-1)),a("label",y0,[p[8]||(p[8]=a("span",null,"找蛋糕",-1)),a("select",{value:y(r).staffAssignments.picker||"",disabled:!o.value,onChange:p[0]||(p[0]=_=>i("picker",_.target.value))},[p[7]||(p[7]=a("option",{value:""},"自己负责",-1)),(d(!0),f(F,null,se(s.value,_=>(d(),f("option",{key:_.id,value:_.id},u(_.nick)+" · Lv"+u(y(r).partnerSkill[_.id]||1),9,_0))),128))],40,b0)]),a("label",k0,[p[10]||(p[10]=a("span",null,"打包",-1)),a("select",{value:y(r).staffAssignments.packer||"",disabled:!o.value,onChange:p[1]||(p[1]=_=>i("packer",_.target.value))},[p[9]||(p[9]=a("option",{value:""},"自己负责",-1)),(d(!0),f(F,null,se(s.value,_=>(d(),f("option",{key:_.id,value:_.id,disabled:_.id===y(r).staffAssignments.picker},u(_.nick)+" · Lv"+u(y(r).partnerSkill[_.id]||1),9,$0))),128))],40,M0)]),l.value?(d(),f("label",C0,[a("input",{type:"checkbox",checked:y(r).staffAssignments.auto,disabled:!o.value,onChange:c},null,40,I0),p[11]||(p[11]=a("span",null,[a("strong",null,"全自动接待"),a("small",null,"员工完成找蛋糕、打包和递交；每天可挑战一项经营目标。")],-1))])):(d(),f("div",E0,[...p[12]||(p[12]=[a("span",{class:"locked-avatar"},"?",-1),a("span",{class:"small muted"},"全自动接待：店铺 Lv3，并有 3 位专业 Lv3 伙伴后开放。",-1)])])),n.value?(d(),f("p",T0,u(n.value),1)):I("",!0)])]))}},w0=Be(x0,[["__scopeId","data-v-5ddd734b"]]),S0={class:"lab"},A0={class:"lab-head"},N0={class:"lab-sub"},O0={key:0,class:"card card-pad result"},P0={class:"result-title"},R0={class:"small muted"},D0=["src"],V0={class:"scores"},L0={class:"feedback"},H0={class:"result-actions"},F0=["disabled"],U0={key:1,class:"small muted"},j0=["disabled"],q0={key:0,class:"product-list"},G0=["onClick"],B0={class:"product-info"},Q0={class:"small muted"},K0={key:1,class:"card card-pad small muted"},z0=["disabled","onClick"],Z0={class:"product-info"},Y0={class:"small muted"},W0={class:"chip"},X0={key:2,class:"report-list"},J0={class:"small muted"},ey={key:0,class:"small muted"},ny={key:3,class:"card card-pad small muted"},ty={key:2,class:"card card-pad form"},ry={class:"small muted"},sy={class:"hint"},ly={class:"field"},ay=["onClick"],oy={class:"field"},iy=["onClick"],uy={class:"small muted"},cy={class:"field"},dy={class:"field-title"},fy=["onClick"],py={class:"field"},vy=["onClick"],my={class:"field"},hy=["onClick"],gy=["disabled"],yy={class:"small muted"},by={key:3,class:"card card-pad form"},_y={class:"field"},ky=["onClick"],My={class:"field"},$y=["onClick"],Cy={class:"field"},Iy=["onClick"],Ey={class:"field"},Ty=["onClick"],xy=["disabled"],wy={class:"small muted"},Sy={key:4,class:"card card-pad form"},Ay={class:"small muted"},Ny=["value"],Oy={key:0,class:"small feedback-line"},Py=["disabled"],Ry={class:"small muted"},Dy={key:5,class:"small notice"},Vy={__name:"ResearchLab",setup(e){const n=Z("home"),t=Z(""),s=Z([]),l=Z(-1),o=Z(-1),i=Z(-1),c=Z(1),v=Z(""),m=Z(-1),p=Z(""),_=Z(""),g=Z(!1),h=H(()=>Qe.filter(z=>z.month>0)),C=H(()=>Qe.filter(z=>r.unlocked.includes(z.id)&&(r.levels[z.id]||1)<5)),b=H(()=>Qe.map(z=>({product:z,reports:r.career.labReports[z.id]||{}})).filter(z=>z.reports.development||z.reports.improvement)),E=H(()=>As[t.value]),T=H(()=>{var z;return((z=r.labPending)==null?void 0:z.type)==="signature"?Cr("osmanthus").src:""}),w=H(()=>s.value.length>0&&l.value>=0&&o.value>=0&&i.value>=0),S=H(()=>s.value.length>0&&l.value>=0&&o.value>=0&&i.value>=0),x=H(()=>{var z;return m.value===((z=rs[v.value])==null?void 0:z.correct)?2:1});function Q(z){_.value=z}function pe(z){if(!r.labPending){if(z.id==="signature"){if(r.month<26)return Q("M26 起开放外婆配方复原。");n.value="signature"}else t.value=z.id,n.value="develop";s.value=[],l.value=-1,o.value=-1,i.value=-1,c.value=1,_.value=""}}function le(z){s.value=s.value.includes(z)?s.value.filter(re=>re!==z):[...s.value,z]}function B(){const z=Cl({productId:t.value,ingredients:s.value,direction:l.value,ratio:o.value,process:i.value,decoration:c.value});z.ok?Q("试吃完成：本次样品已计入原料消耗。"):Q(z.message)}function G(){const z=Cl({productId:"signature",type:"signature",ingredients:s.value,sugar:l.value,filling:o.value,garnish:i.value});z.ok?Q("复原试吃完成：本次样品已计入原料消耗。"):Q(z.message)}function O(){const z=su();Q(z.message),z.ok&&(n.value="home")}function oe(){const z=r.labPending;z&&(Il(),t.value=z.productId,s.value=z.ingredients.slice(),z.type==="signature"?(l.value=z.sugar,o.value=z.filling,i.value=z.garnish,n.value="signature"):(l.value=z.direction,o.value=z.ratio,i.value=z.process,c.value=z.decoration,n.value="develop"),Q("保留了本次试做思路，修改后重试会再消耗一份样品。"))}function A(){Il(),n.value="home",Q("试吃结果已收起，已消耗的样品不返还。")}function N(z){r.labPending||(v.value=z.id,m.value=-1,p.value="",_.value="",n.value="improve")}function he(){if(g.value||m.value<0)return;g.value=!0;const z=cp(v.value,m.value);g.value=!1,p.value=z.feedback||"",z.ok?(Q(z.message),n.value="home"):z.retry&&(m.value=-1)}function be(){n.value="home",_.value=""}function ge(z){return z.type==="signature"?"外婆配方复原":z.type==="improvement"?`配方改良 · Lv${z.levelAfter}`:`${z.refined?"精制上架":"新品上架"} · ${z.score} 分`}return(z,re)=>(d(),f("section",S0,[a("header",A0,[a("div",null,[re[1]||(re[1]=a("div",{class:"lab-title"},"林记烘焙实验室",-1)),a("div",N0,"行动力 "+u(y(r).ap)+"/"+u(y(r).maxAp)+" · 分类原料 "+u(y(Rr))+" 份 · 试做消耗所选蛋糕配方用料的四分之一",1)]),n.value!=="home"&&!y(r).labPending?(d(),f("button",{key:0,class:"back",type:"button",onClick:be},"返回")):I("",!0)]),y(r).labPending?(d(),f("div",O0,[a("div",P0,u(y(r).labPending.passed?"试吃合格":"还需要调整"),1),a("div",R0,u(y(Ue)(y(r).labPending.productId).name)+" · 本次 "+u(y(r).labPending.score)+" 分",1),T.value?(d(),f("img",{key:0,class:"signature-cg",src:T.value,alt:"桂花栗子蛋糕复原插画"},null,8,D0)):I("",!0),a("div",V0,[(d(),f(F,null,se([{key:"flavor",name:"风味"},{key:"texture",name:"口感"},{key:"appearance",name:"外观"},{key:"cost",name:"成本控制"}],ae=>a("div",{key:ae.key,class:"score"},[a("span",null,u(ae.name),1),a("strong",null,u(y(r).labPending.scores[ae.key]),1)])),64))]),a("ul",L0,[(d(!0),f(F,null,se(y(r).labPending.feedback,ae=>(d(),f("li",{key:ae},u(ae),1))),128))]),a("div",H0,[y(r).labPending.passed?(d(),f("button",{key:0,class:"btn primary block",type:"button",disabled:y(r).ap<1||y(r).phase!=="playing",onClick:O},u(y(r).labPending.type==="signature"?"完成复原":"正式上架")+" · 再消耗 1 点行动力 ",9,F0)):I("",!0),y(r).labPending.passed&&y(r).ap<1?(d(),f("div",U0,"行动力不足，结果已保存，明天可以继续。")):I("",!0),a("button",{class:"btn block",type:"button",disabled:y(r).phase!=="playing",onClick:oe},"按反馈调整并重试 · 再用 1 份样品",8,j0),a("button",{class:"text-button",type:"button",onClick:A},"收起结果")])])):n.value==="home"?(d(),f(F,{key:1},[re[3]||(re[3]=a("div",{class:"card card-pad intro"},[a("strong",null,"从配方到上架"),a("div",{class:"small muted"},"选配方、做试验、看试吃反馈。合格品可以生产，精制品以更高熟练度起步。")],-1)),re[4]||(re[4]=a("div",{class:"section-title"},"配方改良",-1)),C.value.length?(d(),f("div",q0,[(d(!0),f(F,null,se(C.value,ae=>(d(),f("button",{key:ae.id,class:"card product-row",type:"button",onClick:L=>N(ae)},[a("span",B0,[a("strong",null,u(ae.name),1),a("span",Q0,"当前 Lv"+u(y(r).levels[ae.id]||1),1)]),re[2]||(re[2]=a("span",{class:"chip"},"诊断问题",-1))],8,G0))),128))])):(d(),f("div",K0,"目前没有可改良的产品。")),re[5]||(re[5]=a("div",{class:"section-title"},"新品研发",-1)),(d(!0),f(F,null,se(h.value,ae=>(d(),f("button",{key:ae.id,class:"card product-row",type:"button",disabled:ae.month>y(r).month||y(r).unlocked.includes(ae.id),onClick:L=>pe(ae)},[a("span",Z0,[a("strong",null,u(ae.name),1),a("span",Y0,u(ae.id==="signature"?"M26 · 外婆旧配方复原":`M${ae.month} 起 · ${ae.desc}`),1)]),a("span",W0,u(y(r).unlocked.includes(ae.id)?"已上架":ae.month>y(r).month?`M${ae.month}开放`:ae.id==="signature"?"复原":"开始实验"),1)],8,z0))),128)),re[6]||(re[6]=a("div",{class:"section-title"},"实验档案",-1)),b.value.length?(d(),f("div",X0,[(d(!0),f(F,null,se(b.value,ae=>(d(),f("div",{key:ae.product.id,class:"card card-pad report-row"},[a("strong",null,u(ae.product.name),1),(d(),f(F,null,se(["development","improvement"],L=>{var P;return a("div",{key:L,class:"report-entry"},[ae.reports[L]?(d(),f(F,{key:0},[a("span",null,u(ge(ae.reports[L])),1),a("span",J0,"第 "+u(ae.reports[L].run)+" 轮 · M"+u(ae.reports[L].month),1),(P=ae.reports[L].feedback)!=null&&P.length?(d(),f("div",ey,u(ae.reports[L].feedback.join(" ")),1)):I("",!0)],64)):I("",!0)])}),64))]))),128))])):(d(),f("div",ny,"完成实验后，报告会保存到这里并跨周目保留。"))],64)):n.value==="develop"&&E.value?(d(),f("div",ty,[a("h2",null,u(y(Ue)(t.value).name)+" · 新品设计",1),a("p",ry,u(E.value.theme)+" "+u(E.value.focus),1),a("div",sy,"图鉴线索："+u((y(Ee).codex[t.value]||{}).hint||y(Ue)(t.value).desc),1),a("div",ly,[re[7]||(re[7]=a("div",{class:"field-title"},"风味方向",-1)),(d(!0),f(F,null,se(y(Fi),(ae,L)=>(d(),f("button",{key:ae,type:"button",class:ye(["choice",{chosen:l.value===L}]),onClick:P=>l.value=L},u(ae),11,ay))),128))]),a("div",oy,[re[8]||(re[8]=a("div",{class:"field-title"},[$e("核心食材 "),a("span",{class:"small muted"},"可多选")],-1)),(d(!0),f(F,null,se(y(Ml)(t.value),ae=>(d(),f("button",{key:ae,type:"button",class:ye(["choice",{chosen:s.value.includes(ae)}]),onClick:L=>le(ae)},u(ae),11,iy))),128)),a("div",uy,"配方提示："+u((y(Ee).codex[t.value]||{}).hint||""),1)]),a("div",cy,[a("div",dy,u(E.value.ratioLabel),1),(d(!0),f(F,null,se(y(Ui),(ae,L)=>(d(),f("button",{key:ae,type:"button",class:ye(["choice",{chosen:o.value===L}]),onClick:P=>o.value=L},u(ae),11,fy))),128))]),a("div",py,[re[9]||(re[9]=a("div",{class:"field-title"},"制作工艺",-1)),(d(!0),f(F,null,se(E.value.processes,(ae,L)=>(d(),f("button",{key:ae,type:"button",class:ye(["choice",{chosen:i.value===L}]),onClick:P=>i.value=L},u(ae),11,vy))),128))]),a("div",my,[re[10]||(re[10]=a("div",{class:"field-title"},[$e("装饰取舍 "),a("span",{class:"small muted"},"越丰富，外观越高，成本分越低")],-1)),(d(!0),f(F,null,se(y(ji),(ae,L)=>(d(),f("button",{key:ae,type:"button",class:ye(["choice",{chosen:c.value===L}]),onClick:P=>c.value=L},u(ae)+" · 外观 "+u([72,90,100][L])+" / 成本 "+u(y(qi)[L]),11,hy))),128))]),a("button",{class:"btn primary block",type:"button",disabled:!w.value||y(r).ap<1||!y(at)(t.value,.25)||y(r).dayPhase!=="prep"||y(r).phase!=="playing",onClick:B},"开始试吃 · 1 点行动力",8,gy),a("div",yy,u(w.value?y(at)(t.value,.25)?y(r).ap<1?"当前行动力不足。":y(r).dayPhase!=="prep"?"营业阶段不能试做，请先结束营业日。":"":"配方材料不足，请先采购。":"请先选择风味、食材、主料比例和制作工艺。")+"失败消耗 1 点行动力和四分之一份配方材料；合格后上架再消耗 1 点行动力。",1)])):n.value==="signature"?(d(),f("div",by,[re[15]||(re[15]=a("h2",null,"外婆的桂花栗子蛋糕 · 复原试验",-1)),re[16]||(re[16]=a("p",{class:"small muted"},"手记线索：「栗子甜则少放糖，桂花香淡则后撒。」先选核心材料，再完成三项判断。",-1)),a("div",_y,[re[11]||(re[11]=a("div",{class:"field-title"},"核心食材",-1)),(d(!0),f(F,null,se(y(Ml)("signature"),ae=>(d(),f("button",{key:ae,type:"button",class:ye(["choice",{chosen:s.value.includes(ae)}]),onClick:L=>le(ae)},u(ae),11,ky))),128))]),a("div",My,[re[12]||(re[12]=a("div",{class:"field-title"},"栗子甜度",-1)),(d(),f(F,null,se(["减少额外糖量","维持标准糖量","再增加一些糖"],(ae,L)=>a("button",{key:ae,type:"button",class:ye(["choice",{chosen:l.value===L}]),onClick:P=>l.value=L},u(ae),11,$y)),64))]),a("div",Cy,[re[13]||(re[13]=a("div",{class:"field-title"},"桂花冻的处理",-1)),(d(),f(F,null,se(["趁热拌进栗子泥","冷却后单独夹层","趁热浸入戚风胚"],(ae,L)=>a("button",{key:ae,type:"button",class:ye(["choice",{chosen:o.value===L}]),onClick:P=>o.value=L},u(ae),11,Iy)),64))]),a("div",Ey,[re[14]||(re[14]=a("div",{class:"field-title"},"金桂的加入时间",-1)),(d(),f(F,null,se(["烘烤前加入","蛋糕冷却后撒","装盒前现撒"],(ae,L)=>a("button",{key:ae,type:"button",class:ye(["choice",{chosen:i.value===L}]),onClick:P=>i.value=L},u(ae),11,Ty)),64))]),a("button",{class:"btn primary block",type:"button",disabled:!S.value||y(r).ap<1||!y(at)("signature",.25)||y(r).dayPhase!=="prep"||y(r).phase!=="playing",onClick:G},"试吃复原配方 · 1 点行动力",8,xy),a("div",wy,u(S.value?y(at)("signature",.25)?y(r).ap<1?"当前行动力不足。":y(r).dayPhase!=="prep"?"营业阶段不能试做，请先结束营业日。":"":"配方材料不足，请先采购。":"请选齐复原食材和三项判断。")+"失败消耗 1 点行动力和四分之一份配方材料，复原成功再消耗 1 点行动力。",1)])):n.value==="improve"?(d(),f("div",Sy,[a("h2",null,u(y(Ue)(v.value).name)+" · 改良诊断",1),a("p",Ay,u(y(rs)[v.value].question),1),(d(!0),f(F,null,se(y(rs)[v.value].options,(ae,L)=>(d(),f("label",{key:ae,class:"answer"},[fn(a("input",{"onUpdate:modelValue":re[0]||(re[0]=P=>m.value=P),type:"radio",value:L},null,8,Ny),[[rf,m.value,void 0,{number:!0}]]),a("span",null,u(ae),1)]))),128)),p.value?(d(),f("p",Oy,u(p.value),1)):I("",!0),a("button",{class:"btn primary block",type:"button",disabled:m.value<0||y(r).ap<x.value||!y(at)(v.value,.25)||g.value||y(r).dayPhase!=="prep"||y(r).phase!=="playing",onClick:he},"提交改良试验 · 失败 1 / 成功 2 点行动力",8,Py),a("div",Ry,u(m.value<0?"请选择一个改良方案。":y(at)(v.value,.25)?y(r).ap<x.value?`当前行动力不足：本次至少需要 ${x.value} 点。`:y(r).dayPhase!=="prep"?"营业阶段不能进行改良。":"":"配方材料不足，请先采购。")+"试验消耗四分之一份配方材料；选错消耗 1 点行动力，可免费重选；选对消耗 2 点行动力并提升 1 级。",1)])):I("",!0),_.value?(d(),f("p",Dy,u(_.value),1)):I("",!0)]))}},Ly=Be(Vy,[["__scopeId","data-v-28a122e9"]]),Hy={key:1,class:"card card-pad"},Fy={class:"small muted"},Uy={class:"between small"},jy={class:"small muted"},qy=["disabled"],Gy={key:0,class:"branch-row"},By={class:"between small"},Qy={class:"small muted"},Ky=["disabled"],zy={class:"card card-pad"},Zy={class:"between"},Yy={class:"chip"},Wy={class:"card card-pad",style:{"margin-top":"10px"}},Xy={class:"between",style:{"margin-bottom":"8px"}},Jy={class:"small muted",style:{"margin-bottom":"8px"}},eb={key:0,class:"chip pink",style:{"font-size":"10px"}},nb={class:"card card-pad",style:{"margin-top":"10px"}},tb={class:"between"},rb={class:"chip"},sb={class:"between small"},lb={class:"between small"},ab={class:"between small"},ob={class:"card card-pad",style:{"margin-top":"10px"}},ib={key:0,class:"empty"},ub={class:"d"},cb={class:"x"},db={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 2px 0"},role:"status"},fb={__name:"ManagePage",props:{initialSection:{type:String,default:"overview"}},emits:["open-panel"],setup(e,{emit:n}){const t=e,s=n,l=Z(t.initialSection),o=Z("");let i=0;sn(()=>t.initialSection,g=>l.value=g);const c=H(()=>Ot.find(g=>!r.cities.includes(g.id)&&!r.surveyed.includes(g.id))),v=H(()=>Ln("survey")),m=H(()=>Ln("branch"));function p(g){const h=Ln(g);if(r.dayPhase!=="prep"||h.disabled||r.ap<h.ap||r.cash<h.cost){_(r.dayPhase!=="prep"?"请在营业前筹备。":h.note);return}Kt(g,{})?_(g==="survey"?"城市考察完成，可以安排开店。":"新店筹备完成。"):_("暂时无法完成这项筹备。")}function _(g){o.value=g,clearTimeout(i),i=setTimeout(()=>o.value="",2200)}return(g,h)=>{var C;return d(),f("div",null,[l.value==="lab"?(d(),xe(Ly,{key:0})):l.value==="branch"?(d(),f("div",Hy,[h[3]||(h[3]=a("div",{class:"h2"},"城市考察与分店筹备",-1)),a("p",Fy,"在准备阶段安排考察和开店。下一站："+u(((C=c.value)==null?void 0:C.name)||"所有城市已纳入版图"),1),a("div",Uy,[a("span",null,u(v.value.name),1),a("span",null,"行动力 "+u(v.value.ap)+" · ¥"+u(v.value.cost),1)]),a("div",jy,u(v.value.note),1),a("button",{class:"btn block",type:"button",disabled:y(r).dayPhase!=="prep"||v.value.disabled||y(r).ap<v.value.ap,onClick:h[0]||(h[0]=b=>p("survey"))},"开始城市考察",8,qy),y(r).surveyed.length?(d(),f("div",Gy,[a("div",By,[a("strong",null,u(m.value.name),1),a("span",null,"行动力 "+u(m.value.ap)+" · ¥"+u(m.value.cost),1)]),a("div",Qy,u(m.value.note),1),a("button",{class:"btn primary block",type:"button",disabled:y(r).dayPhase!=="prep"||m.value.disabled||y(r).ap<m.value.ap,onClick:h[1]||(h[1]=b=>p("branch"))},"筹备并开店",8,Ky)])):I("",!0)])):(d(),f(F,{key:2},[a("div",zy,[a("div",Zy,[h[4]||(h[4]=a("div",null,[a("div",{class:"h2",style:{margin:"0"}},"经营手账"),a("div",{class:"small muted"},"记录阶段目标、经营结果与重要收藏。")],-1)),a("span",Yy,"行动力 "+u(y(r).ap)+"/"+u(y(r).maxAp),1)]),a("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",onClick:h[2]||(h[2]=b=>s("open-panel","codex"))},"打开产品图鉴、顾客档案与相册")]),a("div",Wy,[a("div",Xy,[h[5]||(h[5]=a("div",{class:"h2",style:{margin:"0"}},"阶段目标",-1)),a("span",{class:ye(["chip",y(ot).done>=y(ot).need?"sage":""])},u(y(ot).done)+" / "+u(y(ot).need||"—"),3)]),a("div",Jy,u(y(Ps).name)+" · 完成 "+u(y(ot).need)+" 项即可进入下一阶段。",1),(d(!0),f(F,null,se(y(ot).list,b=>(d(),f("div",{key:b.text,class:ye(["goal",{done:b.done}])},[h[6]||(h[6]=a("span",{class:"dot"},null,-1)),a("span",null,u(b.text),1),b.expand?(d(),f("span",eb,"扩张")):I("",!0)],2))),128))]),a("div",nb,[a("div",tb,[h[7]||(h[7]=a("div",{class:"h2"},"本月经营",-1)),a("span",rb,"第 "+u(y(r).day)+"/5 日",1)]),a("div",sb,[h[8]||(h[8]=a("span",{class:"muted"},"本月已到账",-1)),a("span",null,"¥"+u(y(r).monthRev.toLocaleString()),1)]),a("div",lb,[h[9]||(h[9]=a("span",{class:"muted"},"本月销量",-1)),a("span",null,u(Object.values(y(r).monthSold).reduce((b,E)=>b+E,0))+" 个",1)]),a("div",ab,[h[10]||(h[10]=a("span",{class:"muted"},"口碑 / 知名度",-1)),a("span",null,u(Math.round(y(r).reputation))+" / "+u(Math.round(y(r).popularity)),1)])]),a("div",ob,[h[11]||(h[11]=a("div",{class:"h2"},"最近发生的事",-1)),y(r).log.length?I("",!0):(d(),f("div",ib,"还没有记录。")),(d(!0),f(F,null,se(y(r).log.slice(0,12),(b,E)=>(d(),f("div",{key:E,class:ye(["logline",b.tone])},[a("span",ub,u(b.month)+"月"+u(b.day)+"日",1),a("span",cb,u(b.text),1)],2))),128))])],64)),o.value?(d(),f("p",db,u(o.value),1)):I("",!0)])}}},pb=Be(fb,[["__scopeId","data-v-baa859ee"]]),vb={class:"world"},mb=["src","alt"],hb={class:"world-heading"},gb={class:"world-eyebrow"},yb={class:"world-title"},bb={class:"world-subtitle"},_b=["data-guide-key","onClick"],kb={class:"world-status"},Mb={key:1,class:"world-toast",role:"status"},$b={key:2,class:"world-travel"},Cb={class:"world-travel-head"},Ib={class:"world-travel-grid"},Eb=["title","onClick"],Tb=["src"],xb={class:"world-action-sheet"},wb={key:0},Sb={class:"world-action-buttons"},Ab=["disabled"],Nb={__name:"SceneMapPage",props:{scene:{type:String,default:"shop"},guideTarget:{type:String,default:""}},emits:["change-scene","open-panel","rest-day"],setup(e,{emit:n}){const t=e,s=n,l={shop:{name:"林记烘焙",sub:"熟悉的木门后，总有蛋糕香",img:"bg-shop.webp",icon:"🏠"},kitchen:{name:"烘焙后厨",sub:"今天也要做出好吃的蛋糕",img:"bg-kitchen.webp",icon:"🥣"},street:{name:"栖云镇老街",sub:"沿着青石板路，去熟悉的地方",img:"bg-street.webp",icon:"🌿"},home:{name:"林念的家",sub:"家里的灯总为你留着",img:"bg-home.webp",icon:"🪴"},cafe:{name:"秋屿咖啡",sub:"一杯咖啡与一点新灵感",img:"bg-cafe.webp",icon:"☕"},park:{name:"栖云镇公园",sub:"在花影里散步，遇见熟悉的人",img:"bg-park.webp",icon:"🍃"},river:{name:"栖云河岸",sub:"桥边晚风与藏在水声里的故事",img:"bg-park.webp",icon:"🌊"},market:{name:"小镇市集",sub:"季节活动的摊位已经摆好",img:"bg-market.webp",icon:"🎪"},studio:{name:"设计工作室",sub:"配色、包装与有趣的创意",img:"bg-studio.webp",icon:"🎨"},store:{name:"品牌新店",sub:"林记走向更远的地方",img:"bg-store.webp",icon:"🏬"}},o=H(()=>Object.entries(l).map(([S,x])=>({id:S,...x,gate:nn(S)}))),i=H(()=>l[t.scene]||l.shop),c=H(()=>t.scene==="shop"?"bg-shop-lv"+r.shopLevel+".webp":i.value.img),v=H(()=>We(c.value)==="ok"?c.value:i.value.img),m=H(()=>{const S={1:{counter:[56,55],mom:[22,70],book:[79,80],kitchen:[87,38],door:[85,93]},2:{counter:[57,57],mom:[27,76],book:[17,83],kitchen:[82,40],door:[85,92]},3:{counter:[64,58],mom:[20,69],book:[84,83],kitchen:[82,40],door:[84,93]},4:{counter:[78,59],mom:[20,67],book:[27,47],kitchen:[79,40],door:[84,92]}}[r.shopLevel],x={shop:[{id:"counter",x:S.counter[0],y:S.counter[1],text:"柜台 · 预约与营业",kind:"panel",value:"shop",section:"counter"},...la().event||t.guideTarget==="mom"?[{id:"mom",x:S.mom[0],y:S.mom[1],text:"和妈妈聊聊",kind:"action",value:"momchat"}]:[],{id:"book",x:S.book[0],y:S.book[1],text:"装修册 · 店铺升级",kind:"panel",value:"renovation"},{id:"kitchen",x:S.kitchen[0],y:S.kitchen[1],text:"去后厨 →",kind:"scene",value:"kitchen"},{id:"door",x:S.door[0],y:S.door[1],text:"出门 →",kind:"scene",value:"street"}],kitchen:[{id:"workbench",x:52,y:55,text:"操作台 · 排产",kind:"panel",value:"kitchen"},{id:"baking",x:49,y:74,text:"制作蛋糕",kind:"panel",value:"game:baking"},{id:"lab",x:75,y:31,text:"实验台 · 研发",kind:"panel",value:"game:research",unlock:"lab"},{id:"devices",x:21,y:41,text:"设备区",kind:"panel",value:"feature",section:"devices"},{id:"pantry",x:73,y:84,text:"食材区 · 库存",kind:"panel",value:"feature",section:"pantry"},{id:"staff",x:25,y:88,text:"员工排班板",kind:"panel",value:"partners",unlock:"staff"},{id:"back",x:9,y:55,text:"← 回前厅",kind:"scene",value:"shop"}],street:[{id:"supplier",x:83,y:52,text:"食材铺 · 采购",kind:"panel",value:"supplier"},{id:"sq",x:57,y:67,text:"找苏晴",kind:"action",value:"sqchat"},{id:"bakery",x:12,y:52,text:"← 林记",kind:"scene",value:"shop"},{id:"park",x:29,y:79,text:"公园 →",kind:"scene",value:"park"},{id:"home",x:74,y:91,text:"回家 →",kind:"scene",value:"home"},{id:"cafe",x:73,y:34,text:"秋屿咖啡",kind:"scene",value:"cafe"},{id:"studio",x:20,y:34,text:"设计工作室",kind:"scene",value:"studio"},{id:"market",x:22,y:91,text:"小镇市集",kind:"scene",value:"market"},{id:"store",x:78,y:77,text:"品牌新店",kind:"scene",value:"store"}],store:[{id:"expansion",x:54,y:67,text:"新店规划桌 · 城市与分店",kind:"panel",value:"manage",section:"branch"},{id:"staff",x:40,y:49,text:"员工管理",kind:"panel",value:"partners"},{id:"figures",x:75,y:84,text:"多门店经营数据",kind:"panel",value:"feature",section:"branch"},{id:"exit",x:8,y:91,text:"← 回栖云镇",kind:"scene",value:"street"}],market:[{id:"stall",x:48,y:58,text:"林记摊位 · 参加市集",kind:"panel",value:"game:market"},{id:"calendar",x:76,y:77,text:"本季活动",kind:"panel",value:"feature",section:"calendar"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],cafe:[{id:"collab",x:52,y:56,text:"联名活动 · 咖啡与蛋糕",kind:"panel",value:"game:cafe"},{id:"coffee",x:22,y:74,text:"喝一杯热饮",kind:"action",value:"coffee"},{id:"owner",x:75,y:75,text:r.played.includes("EVT_ZHIQIU_CH01")?"和沈知秋聊聊":"拜访秋屿咖啡",kind:"action",value:"zhiqiuchat"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],park:[{id:"walk",x:51,y:56,text:"在公园散步",kind:"action",value:"walk"},{id:"flowers",x:74,y:75,text:"拍摄花影",kind:"panel",value:"feature",section:"park"},{id:"sq",x:21,y:73,text:"和苏晴聊聊",kind:"action",value:"sqchat"},{id:"river",x:53,y:89,text:"去河边 →",kind:"scene",value:"river"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],river:[{id:"views",x:50,y:58,text:"河边风景探索",kind:"panel",value:"feature",section:"river"},{id:"stories",x:60,y:77,text:"河岸特殊事件",kind:"panel",value:"feature",section:"river"},{id:"back",x:10,y:90,text:"← 回公园",kind:"scene",value:"park"}],studio:[{id:"design",x:52,y:55,text:"蛋糕与包装设计",kind:"panel",value:"feature",section:"studio"},{id:"album",x:52,y:76,text:"已收藏的设计稿",kind:"panel",value:"feature",section:"designs"},{id:"back",x:10,y:90,text:"← 回老街",kind:"scene",value:"street"}],home:[{id:"bedroom",x:49,y:66,text:"卧室 · 休息",kind:"rest"},{id:"wardrobe",x:72,y:42,text:"衣柜 · 换装",kind:"panel",value:"feature",section:"wardrobe"},{id:"back",x:10,y:90,text:"← 去街上",kind:"scene",value:"street"}]};return x[t.scene]||x.shop}),p=Z(!1),_=Z(null),g=Z("");let h;sn(()=>t.scene,()=>{_.value=null,p.value=!1});function C(S){g.value=S,clearTimeout(h),h=setTimeout(()=>{g.value=""},2400)}function b(S){const x=nn(S);if(!x.open)return C(x.reason);_.value=null,p.value=!1,Mu(S),s("change-scene",S)}const E=H(()=>!_.value||_.value.kind!=="action"?null:Ln(_.value.value));function T(S){if(S.kind==="scene")return b(S.value);if(S.unlock&&!nn(S.unlock).open)return C(nn(S.unlock).reason);if(S.kind==="rest"){s("open-panel","feature","bedroom");return}if(S.kind==="panel")return s("open-panel",S.value,S.section||"overview");_.value=S}function w(){const S=_.value;if(!S||r.phase!=="playing")return;if(r.dayPhase!=="prep")return C("今天已经开门，打烊后再行动。");const x=E.value;if(!x||x.disabled||r.ap<x.ap||r.cash<x.cost)return C((x==null?void 0:x.note)||"现在暂时无法行动。");Kt(S.value,{})?(C(S.text+" · 已完成"),_.value=null):C("暂时无法执行，请检查行动力或触发条件。")}return(S,x)=>{var Q,pe,le,B;return d(),f("section",vb,[a("div",{class:ye(["world-canvas","world-"+e.scene])},[y(We)(v.value)!=="no"?(d(),f("img",{key:0,class:"world-background",src:y(Pe)(v.value),alt:i.value.name},null,8,mb)):I("",!0),x[5]||(x[5]=a("div",{class:"world-vignette","aria-hidden":"true"},null,-1)),a("header",hb,[a("div",null,[a("span",gb,u(e.scene==="shop"?"HOME":"QIYUN TOWN")+" · 第 "+u(y(r).month)+" 月",1),a("h1",yb,u(i.value.name),1),a("div",bb,u(i.value.sub),1)]),a("button",{class:"world-compass",type:"button","aria-label":"打开地点地图",onClick:x[0]||(x[0]=G=>p.value=!p.value)},"地图")]),(d(!0),f(F,null,se(m.value,G=>(d(),f("button",{key:G.id,class:ye(["world-hotspot",{"world-hotspot-locked":G.unlock&&!y(nn)(G.unlock).open||G.kind==="scene"&&!y(nn)(G.value).open,"world-hotspot-guide-target":e.guideTarget===G.id}]),"data-guide-key":e.guideTarget===G.id?G.id:void 0,type:"button",style:tn({left:G.x+"%",top:G.y+"%",transform:G.x>80?"translate(-100%,-50%)":G.x<15?"translate(0,-50%)":"translate(-50%,-50%)"}),onClick:O=>T(G)},u(G.unlock&&!y(nn)(G.unlock).open||G.kind==="scene"&&!y(nn)(G.value).open?"🔒 ":"")+u(G.text),15,_b))),128)),a("div",kb,[a("span",null,u(y(Ps).name),1),a("span",null,"阶段目标 "+u(y(ot).done)+"/"+u(y(ot).need||"—"),1),a("span",null,"口碑 "+u(Math.round(y(r).reputation)),1)]),g.value?(d(),f("div",Mb,u(g.value),1)):I("",!0),p.value?(d(),f("div",$b,[a("div",Cb,[x[4]||(x[4]=a("span",null,"选择地点",-1)),a("button",{type:"button","aria-label":"关闭地点地图",onClick:x[1]||(x[1]=G=>p.value=!1)},"✕")]),a("div",Ib,[(d(!0),f(F,null,se(o.value,G=>(d(),f("button",{key:G.id,type:"button",class:ye(["world-travel-place",{current:e.scene===G.id,locked:!G.gate.open}]),title:G.gate.reason,onClick:O=>b(G.id)},[a("img",{src:y(Pe)(G.img),alt:""},null,8,Tb),a("span",null,u(G.gate.open?G.icon:"🔒")+" "+u(G.name),1)],10,Eb))),128))])])):I("",!0),_.value?(d(),f("div",{key:3,class:"world-action-mask",onClick:x[3]||(x[3]=mn(G=>_.value=null,["self"]))},[a("div",xb,[a("strong",null,u(_.value.text),1),a("span",null,u((Q=E.value)==null?void 0:Q.note),1),E.value?(d(),f("small",wb,"消耗 "+u(E.value.ap)+" 点行动力"+u(E.value.cost?" · ¥"+E.value.cost:""),1)):I("",!0),a("div",Sb,[a("button",{class:"world-action-cancel",type:"button",onClick:x[2]||(x[2]=G=>_.value=null)},"取消"),a("button",{class:"world-action-confirm",type:"button",disabled:y(r).dayPhase!=="prep"||((pe=E.value)==null?void 0:pe.disabled)||y(r).ap<(((le=E.value)==null?void 0:le.ap)||0)||y(r).cash<(((B=E.value)==null?void 0:B.cost)||0),onClick:w},"开始行动",8,Ab)])])])):I("",!0)],2)])}}},Ob=Be(Nb,[["__scopeId","data-v-1d28a293"]]),Pb={class:"scene-feature"},Rb={key:0,class:"feature-message",role:"status"},Db={class:"feature-preview"},Vb=["disabled"],Lb={key:0,class:"feature-help"},Hb={class:"feature-help"},Fb={class:"feature-list"},Ub={key:0},jb=["disabled","onClick"],qb={class:"outfit-grid"},Gb=["onClick"],Bb=["src","alt"],Qb={class:"feature-select"},Kb={class:"feature-select"},zb={class:"feature-select"},Zb={class:"feature-select"},Yb={class:"feature-preview"},Wb=["disabled"],Xb={key:0,class:"feature-help"},Jb=["disabled","onClick"],e_={key:0,class:"feature-npc"},n_={key:1,class:"feature-help"},t_=["disabled"],r_={class:"feature-help"},s_={class:"feature-preview"},l_={class:"feature-help"},a_={class:"feature-help"},o_={__name:"SceneFeaturePage",props:{section:{type:String,default:"pantry"}},emits:["open-panel","rest-day"],setup(e,{emit:n}){const t=n,s=Z(""),l=vt({shape:"圆形",color:"奶油白",decoration:"草莓与花朵",packaging:"牛皮纸礼盒"}),o=H(()=>ku()),i=H(()=>o.value.materials.map(_=>({...bn.find(g=>g.id===_),stock:r.pantry[_]||0}))),c={pantry:"食材区 · 原料库存",devices:"设备区 · 烘焙升级",wardrobe:"衣柜 · 日常穿搭",bedroom:"卧室 · 夜晚休息",studio:"设计工作台",designs:"设计作品收藏",river:"河岸风景与事件",park:"花影与风景相册",cafe:"秋屿咖啡",calendar:"本季小镇日历",branch:"品牌新店经营"};function v(_){const g=_();s.value=(g==null?void 0:g.message)||(g?"操作已完成。":"当前无法操作。")}function m(_){const g=Wi(_);s.value=g?"设备升级完成，生产数据已保存。":"资金不足，或当前不是营业准备阶段。"}function p(){v(()=>ev({...l}))}return(_,g)=>(d(),f("section",Pb,[a("h3",null,u(c[e.section]||"小镇生活"),1),s.value?(d(),f("p",Rb,u(s.value),1)):I("",!0),e.section==="bedroom"?(d(),f(F,{key:1},[g[13]||(g[13]=a("p",{class:"feature-help"},"回到自己的房间，结束今天，明早继续经营。还没开门的日子也可以选择休息；若已经备货，剩余蛋糕将按打折方式处理。",-1)),a("p",Db,[$e("今天：第 "+u(y(r).month)+" 月第 "+u(y(r).day)+" 日",1),g[12]||(g[12]=a("br",null,null,-1)),$e("营业阶段："+u({prep:"准备营业","service-ready":"已备货，待开门",service:"正在接待顾客",closing:"已打烊"}[y(r).dayPhase]||y(r).dayPhase),1)]),a("button",{class:"feature-primary",disabled:!["prep","service-ready","closing"].includes(y(r).dayPhase),onClick:g[0]||(g[0]=h=>t("rest-day"))},"休息 · 进入下一天",8,Vb),y(r).dayPhase==="service"?(d(),f("p",Lb,"柜台还有顾客，请先完成交付。")):I("",!0)],64)):e.section==="pantry"?(d(),f(F,{key:2},[a("p",Hb,"当前仓储 "+u(y(Rr))+" / "+u(y(r).warehouseCapacity)+" 份。制作蛋糕、研发和活动共用这份库存。",1),a("div",Fb,[(d(!0),f(F,null,se(y(bn),h=>(d(),f("div",{key:h.id,class:"feature-line"},[a("span",null,[$e(u(h.name)+" ",1),h.month>y(r).month?(d(),f("small",Ub,"第 "+u(h.month)+" 月解锁",1)):I("",!0)]),a("b",{class:ye({low:(y(r).pantry[h.id]||0)<2})},u(Number(y(r).pantry[h.id]||0).toFixed(1).replace(/\.0$/,""))+" 份",3)]))),128))]),a("button",{class:"feature-primary",onClick:g[1]||(g[1]=h=>t("open-panel","supplier"))},"去食材铺补货")],64)):e.section==="devices"?(d(),f(F,{key:3},[g[14]||(g[14]=a("p",{class:"feature-help"},"升级消耗真实金币。设备效果直接影响产能、冷藏与打包效率，保留在经营存档中。",-1)),(d(!0),f(F,null,se(y(zl),h=>{var C;return d(),f("div",{key:h.id,class:"feature-row"},[a("div",null,[a("strong",null,u(h.name),1),a("small",null,"Lv"+u(y(Pr)(h.id))+" · "+u(((C=y(Ct)(h.id))==null?void 0:C.text)||"已满级"),1)]),a("button",{disabled:!y(Ct)(h.id)||y(r).cash<y(Ct)(h.id).cost||y(r).dayPhase!=="prep",onClick:b=>m(h.id)},u(y(Ct)(h.id)?"升级 ¥"+y(Ct)(h.id).cost:"已满级"),9,jb)])}),128))],64)):e.section==="wardrobe"?(d(),f(F,{key:4},[g[15]||(g[15]=a("p",{class:"feature-help"},"从已解锁的服装里挑一套。换装不消耗行动力，选择会保存到本局档案。",-1)),a("div",qb,[(d(),f(F,null,se([{id:"auto",title:"按场合换装",img:"ln-sprite-in.webp"},{id:"daily",title:"小镇日常",img:"ln-sprite-out.webp"},{id:"bakery",title:"烘焙工作服",img:"ln-sprite-in.webp"}],h=>a("button",{key:h.id,class:ye(["outfit",{active:y(r).outfit===h.id}]),onClick:C=>v(()=>({ok:y(Jp)(h.id),message:"已换上「"+h.title+"」。"}))},[a("img",{src:y(Pe)(h.img),alt:h.title},null,8,Bb),a("span",null,u(h.title),1)],10,Gb)),64))])],64)):e.section==="studio"?(d(),f(F,{key:5},[g[25]||(g[25]=a("p",{class:"feature-help"},"完成一套蛋糕与包装视觉方案，需要行动力和装饰料，可为林记积累品牌经验。",-1)),a("label",Qb,[g[17]||(g[17]=$e("蛋糕造型",-1)),fn(a("select",{"onUpdate:modelValue":g[2]||(g[2]=h=>l.shape=h)},[...g[16]||(g[16]=[a("option",null,"圆形",-1),a("option",null,"方形",-1),a("option",null,"双层",-1),a("option",null,"花环形",-1)])],512),[[Br,l.shape]])]),a("label",Kb,[g[19]||(g[19]=$e("主体配色",-1)),fn(a("select",{"onUpdate:modelValue":g[3]||(g[3]=h=>l.color=h)},[...g[18]||(g[18]=[a("option",null,"奶油白",-1),a("option",null,"樱花粉",-1),a("option",null,"抹茶绿",-1),a("option",null,"巧克力棕",-1)])],512),[[Br,l.color]])]),a("label",zb,[g[21]||(g[21]=$e("表面装饰",-1)),fn(a("select",{"onUpdate:modelValue":g[4]||(g[4]=h=>l.decoration=h)},[...g[20]||(g[20]=[a("option",null,"草莓与花朵",-1),a("option",null,"巧克力碎",-1),a("option",null,"坚果与焦糖",-1),a("option",null,"季节鲜果",-1)])],512),[[Br,l.decoration]])]),a("label",Zb,[g[23]||(g[23]=$e("礼盒包装",-1)),fn(a("select",{"onUpdate:modelValue":g[5]||(g[5]=h=>l.packaging=h)},[...g[22]||(g[22]=[a("option",null,"牛皮纸礼盒",-1),a("option",null,"粉色丝带礼盒",-1),a("option",null,"鼠尾草绿包装",-1),a("option",null,"节日限定包装",-1)])],512),[[Br,l.packaging]])]),a("p",Yb,[$e("方案预览："+u(l.color)+" · "+u(l.shape)+"蛋糕 · "+u(l.decoration),1),g[24]||(g[24]=a("br",null,null,-1)),$e(u(l.packaging),1)]),a("button",{class:"feature-primary",disabled:y(r).dayPhase!=="prep"||y(r).ap<1||(y(r).pantry.decor||0)<1,onClick:p},"保存设计方案",8,Wb),a("button",{class:"feature-secondary",onClick:g[6]||(g[6]=h=>t("open-panel","feature","designs"))},"查看以往作品")],64)):e.section==="designs"?(d(),f(F,{key:6},[g[26]||(g[26]=a("p",{class:"feature-help"},"设计稿在存档中永久保留，可作为定制订单与联名包装的创意记录。",-1)),y(r).designWorks.length?I("",!0):(d(),f("p",Xb,"还没有作品。去设计工作台完成第一份设计吧。")),(d(!0),f(F,null,se([...y(r).designWorks].reverse(),h=>(d(),f("div",{key:h.id,class:"feature-row feature-design"},[a("div",null,[a("strong",null,u(h.color)+" · "+u(h.shape)+"蛋糕",1),a("small",null,u(h.decoration)+" / "+u(h.packaging)+" · 第"+u(h.month)+"月"+u(h.day)+"日",1)])]))),128))],64)):e.section==="park"||e.section==="river"?(d(),f(F,{key:7},[g[28]||(g[28]=a("p",{class:"feature-help"},"风景照片每个月每个地点可收藏一次，花费 1 点行动力。",-1)),a("button",{class:"feature-primary",onClick:g[7]||(g[7]=h=>v(()=>y(Wp)(e.section)))},"📷 拍摄"+u(e.section==="river"?"河岸晚风":"公园花影"),1),e.section==="river"?(d(),f(F,{key:0},[g[27]||(g[27]=a("h4",null,"河岸特殊事件",-1)),(d(!0),f(F,null,se(y($u),h=>(d(),f("div",{key:h.id,class:"feature-row feature-story"},[a("div",null,[a("strong",null,u(h.title),1),a("small",null,u(y(r).sceneEvents.includes(h.id)?"已收集 · "+h.reward:h.unlock()?h.detail:"尚未满足触发条件"),1)]),a("button",{disabled:!h.unlock()||y(r).sceneEvents.includes(h.id)||y(r).dayPhase!=="prep"||y(r).ap<1,onClick:C=>v(()=>y(Xp)(h.id))},u(y(r).sceneEvents.includes(h.id)?"已完成":"触发"),9,Jb)]))),128))],64)):I("",!0)],64)):e.section==="cafe"?(d(),f(F,{key:8},[y(r).played.includes("EVT_ZHIQIU_CH01")?(d(),f("div",e_,[g[29]||(g[29]=a("strong",null,"沈知秋",-1)),a("small",null,"秋屿咖啡主理人 · 熟悉度 "+u(y(r).cafeRelation),1),g[30]||(g[30]=a("p",null,"“咖啡与甜点的搭配，像是两个人互相照亮。你的蛋糕很适合这里。”",-1))])):(d(),f("p",n_,"这间咖啡店还没有正式对外开放。")),a("button",{class:"feature-primary",disabled:!y(r).played.includes("EVT_ZHIQIU_CH01"),onClick:g[8]||(g[8]=h=>v(y(nv)))},"聊天 · 1 行动力",8,t_),a("button",{class:"feature-secondary",onClick:g[9]||(g[9]=h=>t("open-panel","game:cafe"))},"一起设计联名套餐")],64)):e.section==="calendar"?(d(),f(F,{key:9},[a("p",r_,"第 "+u(y(r).month)+" 月 · "+u(o.value.title),1),a("p",s_,[$e("地点："+u(o.value.place),1),g[31]||(g[31]=a("br",null,null,-1)),$e(u(o.value.detail),1)]),g[32]||(g[32]=a("h4",null,"提前准备的材料",-1)),(d(!0),f(F,null,se(i.value,h=>(d(),f("div",{key:h.id,class:"feature-line"},[a("span",null,u(h.name),1),a("strong",null,"现有 "+u(h.stock)+" 份",1)]))),128)),a("button",{class:"feature-primary",onClick:g[10]||(g[10]=h=>t("open-panel","supplier"))},"前往采购")],64)):e.section==="branch"?(d(),f(F,{key:10},[a("p",l_,"当前 "+u(y(r).storeCount)+" 家门店 · 品牌 "+u(Math.round(y(r).brand))+" · 已开设城市 "+u(y(r).cities.length)+" 个",1),(d(!0),f(F,null,se(y(Ot).filter(h=>y(r).cities.includes(h.id)),h=>(d(),f("div",{key:h.id,class:"feature-line"},[a("span",null,u(h.name),1),g[33]||(g[33]=a("strong",null,"已营业",-1))]))),128)),g[34]||(g[34]=a("p",{class:"feature-preview"},"拓展新城市需要考察、经营资金与口碑；分店收入与主店共享经营存档。",-1)),a("button",{class:"feature-primary",onClick:g[11]||(g[11]=h=>t("open-panel","manage","branch"))},"进入多门店管理"),a("p",a_,"品牌解锁状态："+u(y(nn)("store").open?"已开放":y(nn)("store").reason),1)],64)):I("",!0)]))}},i_=Be(o_,[["__scopeId","data-v-b22c0e2d"]]),u_={class:"card card-pad"},c_={class:"between"},d_={class:"chip"},f_={class:"small muted"},p_=["disabled"],v_={class:"card ingredient-list"},m_={class:"small muted"},h_={class:"stepper"},g_=["disabled","onClick"],y_=["disabled","onClick"],b_=["value","disabled","onInput","onBlur"],__=["disabled","onClick"],k_=["disabled","onClick"],M_={key:0,class:"small",role:"status"},$_={class:"purchase-footer"},C_=["disabled"],I_={__name:"SupplierPage",props:{tutorial:{type:Boolean,default:!1}},emits:["done"],setup(e,{emit:n}){const t=e,s=n,l=vt(t.tutorial?{base:2}:{}),o=Z(""),i=H(()=>bn.filter(g=>g.month<=r.month)),c=H(()=>i.value.reduce((g,h)=>g+(l[h.id]||0)*h.price,0));function v(g,h){l[g]=Math.max(0,Math.min(99,(l[g]||0)+h))}function m(g,h){const C=String(h.target.value||"").replace(/[^0-9]/g,"");l[g]=Math.max(0,Math.min(99,Number(C)||0)),h.target.value=String(l[g]||0)}function p(){Object.keys(l).forEach(g=>{l[g]=0}),Object.assign(l,tp()),o.value="已按今天的生产计划填入缺料数量。"}function _(){if(t.tutorial){if(c.value<=0){o.value="先输入要准备的原料数量。";return}s("done");return}const g=np(l);o.value=g.message,g.ok&&Object.keys(l).forEach(h=>{l[h]=0})}return(g,h)=>(d(),f("div",null,[a("div",u_,[a("div",c_,[h[0]||(h[0]=a("div",{class:"h2"},"食材铺",-1)),a("span",d_,"仓库 "+u(y(Rr))+"/"+u(y(r).warehouseCapacity),1)]),a("p",f_,u(e.tutorial?"练习任务：给明天准备 2 份基础烘焙包。数量可直接输入；本次不会扣款、消耗行动力或改变仓库。":"选好今天要用的原料，一次结账。数量可以直接输入，也能用 ±5 快速调。采购消耗 1 点行动力；二周目优惠在首笔采购时抵扣，最高 ¥300。"),1),e.tutorial?I("",!0):(d(),f("button",{key:0,class:"btn",type:"button",disabled:y(r).dayPhase!=="prep",onClick:p},"按生产计划补齐缺料",8,p_))]),a("div",v_,[(d(!0),f(F,null,se(i.value,C=>(d(),f("div",{key:C.id,class:"ingredient"},[a("div",null,[a("strong",null,u(C.name),1),a("div",m_,"库存 "+u(y(r).pantry[C.id]||0)+" · ¥"+u(C.price)+" / 份",1)]),a("div",h_,[a("button",{type:"button",disabled:!e.tutorial&&y(r).dayPhase!=="prep",onClick:b=>v(C.id,-5)},"−5",8,g_),a("button",{type:"button",disabled:!e.tutorial&&y(r).dayPhase!=="prep",onClick:b=>v(C.id,-1)},"−",8,y_),a("input",{class:"qty",type:"number",inputmode:"numeric",min:"0",max:"99",value:l[C.id]||0,disabled:!e.tutorial&&y(r).dayPhase!=="prep",onInput:b=>m(C.id,b),onBlur:b=>m(C.id,b)},null,40,b_),a("button",{type:"button",disabled:!e.tutorial&&y(r).dayPhase!=="prep",onClick:b=>v(C.id,1)},"+",8,__),a("button",{type:"button",disabled:!e.tutorial&&y(r).dayPhase!=="prep",onClick:b=>v(C.id,5)},"+5",8,k_)])]))),128))]),o.value?(d(),f("p",M_,u(o.value),1)):I("",!0),a("div",$_,[a("span",null,u(e.tutorial?"练习合计":"合计")+" ¥"+u(c.value),1),a("button",{class:"btn primary",type:"button",disabled:!e.tutorial&&(y(r).dayPhase!=="prep"||y(r).ap<1)||c.value<=0,onClick:_},u(e.tutorial?"确认练习采购":"确认采购 · 1 点行动力"),9,C_)])]))}},_o=Be(I_,[["__scopeId","data-v-1922984c"]]),E_={class:"card card-pad"},T_={class:"between"},x_={class:"chip"},w_={class:"small muted"},S_=["disabled"],A_={class:"card card-pad section-card"},N_={class:"small muted"},O_=["disabled","onClick"],P_={class:"card card-pad section-card"},R_={class:"small muted"},D_=["disabled","onClick"],V_={__name:"RenovationPage",setup(e){const n=H(()=>Mr.find(o=>o.lv===r.shopLevel+1)),t=H(()=>zl.map(o=>({...o,tier:Pr(o.id),next:Ct(o.id)}))),s=H(()=>Ql.map(o=>({...o,owned:r.decorations.includes(o.id),available:r.shopLevel>=o.shopLevel})));function l(){if(r.dayPhase!=="prep")return;const o=Ln("decorate");!o.disabled&&r.ap>=o.ap&&r.cash>=o.cost&&Kt("decorate",{})}return(o,i)=>(d(),f("div",null,[a("div",E_,[a("div",T_,[i[0]||(i[0]=a("div",{class:"h2"},"店铺升级",-1)),a("span",x_,u(y(hf)(y(r).shopLevel).name),1)]),a("div",w_,"舒适度 "+u(y($l))+"/4 · 自然客流 +"+u(y($l)*2)+"%",1),a("button",{class:"btn primary block",style:{"margin-top":"10px"},type:"button",disabled:y(r).dayPhase!=="prep"||!n.value||y(Ln)("decorate").disabled||y(r).ap<2,onClick:l},u(n.value?"升级到 "+n.value.name+" · ¥"+n.value.cost+" · 2 点行动力":"已达到最高等级"),9,S_)]),a("div",A_,[i[1]||(i[1]=a("div",{class:"h2"},"装饰",-1)),(d(!0),f(F,null,se(s.value,c=>(d(),f("div",{key:c.id,class:"row-item"},[a("div",null,[a("strong",null,u(c.name),1),a("div",N_,"改善店内环境 · 店铺等级 "+u(c.shopLevel)+" · ¥"+u(c.cost),1)]),a("button",{class:"btn",type:"button",disabled:y(r).dayPhase!=="prep"||c.owned||!c.available||y(r).cash<c.cost||y(r).phase!=="playing",onClick:v=>y(vp)(c.id)},u(c.owned?"已购":c.available?"购买":"等级不足"),9,O_)]))),128))]),a("div",P_,[i[2]||(i[2]=a("div",{class:"between"},[a("div",{class:"h2"},"设备"),a("span",{class:"small muted"},"升级后立即生效")],-1)),(d(!0),f(F,null,se(t.value,c=>{var v;return d(),f("div",{key:c.id,class:"row-item"},[a("div",null,[a("strong",null,u(c.name)+" · "+u(c.tier)+"/3",1),a("div",R_,u(c.desc)+" · "+u(((v=c.next)==null?void 0:v.text)||"已经满级"),1)]),a("button",{class:"btn",type:"button",disabled:y(r).dayPhase!=="prep"||!c.next||y(r).cash<c.next.cost,onClick:m=>y(Wi)(c.id)},u(c.next?"¥"+c.next.cost:"满级"),9,D_)])}),128))])]))}},L_=Be(V_,[["__scopeId","data-v-8ca6b519"]]),H_=["aria-label"],F_={class:"mg-frame"},U_=["src"],j_={class:"mg-top"},q_={class:"mg-title"},G_={class:"t"},B_={key:0,class:"s"},Q_={class:"mg-slot"},K_={class:"mg-body"},z_={__name:"MiniShell",props:{bg:{type:String,required:!0},title:{type:String,default:""},sub:{type:String,default:""}},emits:["exit"],setup(e){const n=e,t=Pe(n.bg+".webp"),s=We(n.bg+".webp")==="ok"?t:Pe(n.bg+".png");return(l,o)=>(d(),f("div",{class:"mg",role:"region","aria-label":e.title+"独立游戏界面"},[a("div",F_,[a("img",{class:"mg-bg",src:y(s),alt:""},null,8,U_),o[1]||(o[1]=a("div",{class:"mg-shade"},null,-1)),a("header",j_,[a("button",{class:"mg-back",type:"button",onClick:o[0]||(o[0]=i=>l.$emit("exit")),"aria-label":"返回"},"←"),a("div",q_,[a("div",G_,u(e.title),1),e.sub?(d(),f("div",B_,u(e.sub),1)):I("",!0)]),a("div",Q_,[Ta(l.$slots,"top",{},void 0)])]),a("div",K_,[Ta(l.$slots,"default",{},void 0)])])],8,H_))}},Vr=Be(z_,[["__scopeId","data-v-9fb4ab19"]]),Z_={key:0,class:"game-scroll"},Y_={class:"game-card"},W_={class:"game-title"},X_={class:"game-lead"},J_={key:0,class:"game-stats"},ek={key:1,class:"game-message"},nk={key:0,class:"customer-queue"},tk=["disabled","onClick"],rk={class:"customer"},sk={class:"customer-name"},lk={class:"patience"},ak={class:"case"},ok=["disabled","onClick"],ik=["src","alt"],uk={class:"delivery-bar game-card"},ck={class:"game-row"},dk={key:0,class:"game-lead"},fk={key:1,class:"custom-options"},pk={class:"game-section"},vk={class:"choice-grid"},mk=["onClick"],hk={class:"choice-grid"},gk=["onClick"],yk={key:2,class:"game-message",role:"status"},bk={class:"game-grid"},_k=["disabled"],kk=["disabled"],Mk=["disabled"],$k={class:"phone-screen game-card"},Ck={class:"game-row"},Ik={class:"game-row"},Ek={class:"game-lead",role:"status"},Tk=["aria-pressed","onClick"],xk={key:0},wk={key:0},Sk={key:3,class:"packing-mask"},Ak={class:"game-card pack-card"},Nk=["src"],Ok={key:4,class:"game-scroll"},Pk={class:"game-card"},Rk={class:"game-title"},Dk={class:"game-stats"},Vk={class:"game-lead"},ko=3600,Lk={__name:"DeliveryGame",props:{paused:{type:Boolean,default:!1},tutorial:{type:Boolean,default:!1}},emits:["exit"],setup(e,{emit:n}){const t=e,s=n,l=Z("intro"),o=Z(null),i=Z(""),c=Z(""),v=Z(""),m=Z(0),p=Z(""),_=Z(!1),g=Z(""),h=Z(""),C=Z(""),b=Z(""),E=Z(!1),T=Z(0),w=Z(0),S=Z(!1),x=Z(!1),Q=Z(!1),pe=["粉色小花","清爽配色","简洁裱花"],le=["生日快乐","愿你每天都有好心情","把今天的甜分享给你"],B={plain:"圆形浅黄色戚风胚，外层抹薄薄的白奶油，顶端只有奶油花。",strawberry:"圆形白奶油蛋糕，顶部摆三颗红草莓，侧面能看到草莓果肉夹层。",chocolate:"深棕色圆形蛋糕，巧克力奶油抹面，顶上撒细碎的可可巧克力屑。",taro:"淡紫色圆蛋糕，夹着芋泥，顶端有焦糖杏仁薄脆。",matcha:"浅绿色茶香奶油蛋糕，顶部点缀蜜红豆颗粒。",mango:"金黄色圆形慕斯，顶部有芒果丁和切成薄片的芒果。",tiramisu:"方形蛋糕，表面深棕色可可粉，侧面白色奶酪层清晰可见。",fig:"白奶油蛋糕，顶部的紫红色无花果果瓣排成花形。",seasonal:"圆形奶油蛋糕，顶部装饰多种当季水果，颜色丰富。",custom:"双层圆形奶油蛋糕，有精致裱花、庆祝小牌和专属装饰。",festival:"红棕色奶油蛋糕，顶部布满节庆糖珠和糖花。",signature:"棕黄色圆形蛋糕，表层栗子奶油呈螺旋纹，撒有细小金桂。"},G=H(()=>{var j;return t.tutorial?o.value?[o.value]:[]:((j=r.service)==null?void 0:j.tickets)||[]}),O=H(()=>{var j;return t.tutorial?o.value:G.value.find(J=>{var ne;return J.id===((ne=r.service)==null?void 0:ne.activeTicketId)})||G.value[((j=r.service)==null?void 0:j.current)||0]||null}),oe=H(()=>G.value.findIndex(j=>{var J;return j.id===((J=O.value)==null?void 0:J.id)})),A=H(()=>{if(t.tutorial)return O.value?[O.value]:[];if(!r.service)return[];const j=Math.max(1,Math.min(3,r.shopLevel));return r.service.tickets.slice(r.service.current,r.service.current+j).filter(J=>!["delivered","unavailable"].includes(J.status))}),N=H(()=>{var j;return((j=O.value)==null?void 0:j.kind)==="appointment"}),he=H(()=>h.value?G.value.filter(j=>{var J;return((J=j.orderNo)==null?void 0:J.toUpperCase())===h.value}):G.value),be=H(()=>qn.value.map(j=>({...j,qty:t.tutorial?j.id==="plain"?1:0:r.shelf[j.id]||0})).filter(j=>!t.tutorial||j.id==="plain")),ge=j=>We(`cake-${j}.webp`)==="ok"?Pe(`cake-${j}.webp`):"",z=H(()=>G.value.filter(j=>j.status==="delivered")),re=H(()=>z.value.length),ae=H(()=>z.value.reduce((j,J)=>j+J.qty,0)),L=H(()=>z.value.reduce((j,J)=>j+Number(J.revenue||0),0)),P=H(()=>O.value?Math.max(0,Math.min(100,O.value.remaining/Math.max(1,O.value.patience)*100)):0),D=H(()=>O.value?B[O.value.product]||`我想要一份${je(O.value.product)}。`:""),$=H(()=>O.value?N.value?`你好，我来取预订的蛋糕，订单编号是 ${O.value.orderNo}。`:`你好，想要这种蛋糕：${D.value} 请给我 ${O.value.qty} 份。`:""),q={waiting:"等候",searching:"找货中",found:"待打包",packing:"打包中",ready:"待递交",delivered:"已交付",unavailable:"已结束"},R=H(()=>O.value?O.value.status==="waiting"?"核对蛋糕并取货":O.value.status==="searching"?"员工正在找货":O.value.status==="found"?"开始打包":O.value.status==="packing"?"继续打包动画":O.value.status==="ready"?"递交蛋糕 · 收款":"处理下一位顾客":"");function X(){if(t.tutorial){o.value={id:"tutorial-order",kind:"appointment",orderNo:"LJ-DEMO",customer:"练习顾客",product:"plain",qty:1,patience:30,remaining:30,status:"waiting",unhappy:!1,type:"预约",due:"",blessing:""},i.value="",C.value="",l.value="play",p.value="打开「手机订单」，查询顾客报的编号，或直接从列表选中对应的预约单。";return}if(r.dayPhase==="service-ready"&&!r.service&&!bu())return p.value="请先制作蛋糕、接好预约单，再开始柜台接待。";if(!r.service){p.value=r.dayPhase==="closing"?"今天营业已经结束。":"当前不能开始营业，请先在后厨制作蛋糕。";return}if(!O.value){l.value="result";return}Jt(O.value.id),l.value="play",p.value="根据顾客描述挑选蛋糕；预约顾客请先在手机里核对订单。",["packing","ready"].includes(O.value.status)&&K()}function Me(j){E.value||!Jt(j.id)||(i.value="",C.value="",c.value="",v.value="",["packing","ready"].includes(j.status)&&K())}function Ve(){g.value="",h.value="",b.value=""}function Xe(){Ve(),_.value=!0}function Bn(j){C.value=j.id,N.value?j.id===O.value.id?b.value="订单编号已核对，记下蛋糕和份数，再返回柜台。":b.value=`这笔订单属于其他顾客。请找编号 ${O.value.orderNo}。`:b.value="已查看订单详情。",p.value=b.value}function k(){h.value=g.value.trim().toUpperCase(),h.value?he.value.length?Bn(he.value[0]):b.value="没有找到这个编号。请核对后再试，或点「显示全部」查看列表。":Ve()}function M(j){var J;E.value||!O.value||O.value.status!=="waiting"||(i.value=j,p.value=`已选${je(j)}，柜台现有 ${((J=be.value.find(ne=>ne.id===j))==null?void 0:J.qty)||0} 份。`)}function V(){const j=O.value;if(!(!j||E.value)){if(j.kind==="appointment"&&C.value!==j.id){p.value="请先在手机中查询订单号，或点选列表里与顾客编号一致的订单。";return}if(j.status==="waiting"){if(!i.value)return p.value="先从右侧展示柜选择一款蛋糕。";if(i.value!==j.product){m.value+=1,i.value="",p.value="这款蛋糕的外观或口味不符合需求，请重新看描述。";return}if(!t.tutorial&&(r.shelf[j.product]||0)<j.qty)return p.value="该款库存不足，请登记缺货结束这笔未成交订单。";if(t.tutorial){j.status="found",p.value="蛋糕与预约单吻合，开始打包。";return}const J=Vp(j.id,i.value,j.qty);p.value=J.message;return}if(j.status==="searching")return p.value="找货还在进行中，稍等片刻。";if(j.status==="found"){if(t.tutorial){j.status="ready",K();return}const J=Lp(j.id,j.type==="定制"?c.value:null,j.type==="定制"?v.value:null);if(!J.ok)return p.value=J.message;p.value=J.message,K();return}if(j.status==="packing")return K();if(j.status==="ready")return ue();p.value="请从当前等候队列里选择一位顾客。"}}function K(){E.value=!0,T.value+=1,w.value=0,S.value=!1,x.value=!1,Q.value=!1,p.value=""}function Y(){E.value&&(S.value=!0)}function U(){x.value=!0,p.value=""}function te(){const j=O.value;if(!j||j.status!=="ready"||Q.value)return;if(t.tutorial){Q.value=!0,E.value=!1,S.value=!1,j.status="delivered",p.value="练习订单已交付。正式营业时，库存和收入会在这一步结算。",l.value="result";return}const J=xl(j.id);if(!J.ok){E.value=!1,S.value=!1,p.value=J.message;return}Q.value=!0,E.value=!1,S.value=!1,p.value=J.message,i.value="",C.value="",c.value="",v.value="",O.value?Jt(O.value.id):(r.deliveryDay=r.dayIndex,de(),l.value="result")}function ue(){const j=O.value;if(!j||E.value)return;if(t.tutorial){j.status="delivered",l.value="result";return}const J=xl(j.id);if(!J.ok)return p.value=J.message;p.value=J.message,i.value="",C.value="",O.value?Jt(O.value.id):(r.deliveryDay=r.dayIndex,de(),l.value="result")}function ie(){const j=O.value;!j||E.value||Up(j.id)&&(m.value+=1,p.value="缺货已记录，当前订单不会扣除库存。",i.value="",C.value="",O.value?Jt(O.value.id):(r.deliveryDay=r.dayIndex,de(),l.value="result"))}let W=0,fe=0;function ce(){var ne;const j=performance.now();if(l.value!=="play"||t.paused||document.hidden||_.value){fe=j;return}const J=fe?Math.min(.2,(j-fe)/1e3):0;fe=j,!(J<=0)&&(t.tutorial||Fp(J),E.value&&S.value&&!x.value&&(w.value=Math.min(ko,w.value+J*1e3),w.value>=ko&&((ne=O.value)==null?void 0:ne.status)==="ready"&&te()))}return sn(()=>t.paused,(j,J)=>{J&&!j&&E.value&&K()}),tt(()=>{fe=performance.now(),W=window.setInterval(ce,50)}),Ar(()=>{W&&window.clearInterval(W)}),(j,J)=>(d(),xe(Vr,{bg:"minigame-delivery",title:"订单交付",sub:e.tutorial?"小游戏体验 · 不消耗经营资源":l.value==="play"?"已完成 "+re.value+" / "+G.value.length+" 单 · 今日 ¥"+y(r).dayRev:"顾客点单与预约取货",onExit:J[4]||(J[4]=ne=>s("exit"))},{default:mt(()=>[l.value==="intro"?(d(),f("div",Z_,[a("div",Y_,[a("h3",W_,u(e.tutorial?"订单交付小游戏体验":"接待今日顾客"),1),a("p",X_,u(e.tutorial?"在手机里按编号查询或直接点订单，核对后从展示柜选蛋糕并打包。":"普通客人会描述蛋糕外观，预约客人会报真实订单编号。取货、找货和打包都会推进耐心计时；离开游戏或切后台时会暂停。"),1),e.tutorial?I("",!0):(d(),f("div",J_,[a("span",null,"货架现货 "+u(Object.values(y(r).shelf).reduce((ne,ee)=>ne+ee,0))+" 份",1),a("span",null,"预约订单 "+u(y(r).orders.filter(ne=>ne.taken).length)+" 笔",1)])),p.value?(d(),f("p",ek,u(p.value),1)):I("",!0),a("button",{class:"game-btn primary",style:{width:"100%","margin-top":"10px"},type:"button",onClick:X},u(e.tutorial?"开始订单练习":y(r).service?"继续当日营业":"开始柜台营业"),1)])])):I("",!0),l.value==="play"&&O.value?(d(),f(F,{key:1},[A.value.length>1?(d(),f("div",nk,[(d(!0),f(F,null,se(A.value,ne=>(d(),f("button",{key:ne.id,class:ye(["queue-ticket",{active:ne.id===O.value.id,unhappy:ne.unhappy}]),type:"button",disabled:E.value,onClick:ee=>Me(ne)},[a("span",null,u(ne.customer),1),a("small",null,u(ne.qty)+" 份 · "+u(q[ne.status])+u(ne.unhappy?" · 有些着急":""),1),a("i",null,[a("b",{style:tn({width:Math.max(0,ne.remaining/Math.max(1,ne.patience)*100)+"%"})},null,4)])],10,tk))),128))])):I("",!0),a("div",rk,[a("span",sk,u(O.value.customer)+" · "+u(N.value?"预约取货":"到店购买")+" · "+u(oe.value+1)+"/"+u(G.value.length),1),a("p",null,u($.value),1),a("div",lk,[a("i",{style:tn({width:P.value+"%"})},null,4)]),a("small",null,u(O.value.unhappy?"顾客有点着急，但仍会等你":"耐心倒计时")+" · "+u(Math.ceil(O.value.remaining))+" 秒",1)]),a("div",ak,[(d(!0),f(F,null,se(be.value,ne=>(d(),f("button",{key:ne.id,class:ye(["cake-cell",{active:i.value===ne.id,empty:ne.qty<O.value.qty}]),type:"button",disabled:E.value||O.value.status!=="waiting",onClick:ee=>M(ne.id)},[ge(ne.id)?(d(),f("img",{key:0,src:ge(ne.id),alt:ne.name},null,8,ik)):I("",!0),a("span",null,u(y(je)(ne.id)),1),a("small",null,u(ne.qty<O.value.qty?"缺货":"剩 "+ne.qty),1)],10,ok))),128))]),a("div",uk,[a("div",ck,[a("span",null,"当前需求 "+u(O.value.qty)+" 份",1),a("span",null,u(i.value?y(je)(i.value):"请选择展示柜蛋糕"),1)]),O.value.status==="searching"?(d(),f("div",dk,u(y(r).staffAssignments.picker?"员工正在找蛋糕":"正在核对展示柜")+" · 还需 "+u(Math.ceil(O.value.findRemaining||0))+" 秒 ",1)):I("",!0),O.value.status==="found"&&O.value.type==="定制"?(d(),f("div",fk,[a("div",pk,"预约要求 · 装饰："+u(O.value.due)+" · 祝福："+u(O.value.blessing),1),a("div",vk,[(d(),f(F,null,se(pe,ne=>a("button",{key:ne,class:ye(["game-btn",{selected:c.value===ne}]),type:"button",onClick:ee=>c.value=ne},u(ne),11,mk)),64))]),a("div",hk,[(d(),f(F,null,se(le,ne=>a("button",{key:ne,class:ye(["game-btn",{selected:v.value===ne}]),type:"button",onClick:ee=>v.value=ne},u(ne),11,gk)),64))])])):I("",!0),p.value?(d(),f("p",yk,u(p.value),1)):I("",!0),a("div",bk,[a("button",{class:"game-btn",type:"button",disabled:E.value,onClick:Xe},"📱 手机订单",8,_k),e.tutorial?I("",!0):(d(),f("button",{key:0,class:"game-btn",type:"button",disabled:E.value,onClick:ie},"登记缺货",8,kk)),a("button",{class:"game-btn primary",type:"button",disabled:E.value||O.value.status==="searching",onClick:V},u(R.value),9,Mk)])])],64)):I("",!0),_.value?(d(),f("div",{key:2,class:"phone-backdrop",onClick:J[2]||(J[2]=mn(ne=>_.value=!1,["self"]))},[a("section",$k,[a("div",Ck,[J[5]||(J[5]=a("h3",{class:"game-title"},"📱 手机 · 当日订单",-1)),a("button",{class:"game-btn",type:"button",onClick:J[0]||(J[0]=ne=>_.value=!1)},"返回柜台")]),a("div",Ik,[fn(a("input",{"onUpdate:modelValue":J[1]||(J[1]=ne=>g.value=ne),class:"order-input",type:"search","aria-label":"预约订单编号",placeholder:"输入预约订单编号",onKeyup:bl(k,["enter"])},null,544),[[et,g.value]]),a("button",{class:"game-btn primary",type:"button",onClick:k},"查询"),h.value?(d(),f("button",{key:0,class:"game-btn",type:"button",onClick:Ve},"显示全部")):I("",!0)]),a("p",Ek,u(b.value||"输入编号查询，或直接点选列表里的订单。"),1),(d(!0),f(F,null,se(he.value,ne=>(d(),f("button",{key:ne.id,class:ye(["game-btn order-detail",{selected:C.value===ne.id}]),"aria-pressed":C.value===ne.id,type:"button",onClick:ee=>Bn(ne)},[a("strong",null,u(ne.orderNo||"到店单 · 无编号")+" · "+u(ne.customer),1),a("span",null,u(y(je)(ne.product))+" × "+u(ne.qty)+" · "+u(ne.type)+" · "+u(q[ne.status]||ne.status),1),B[ne.product]?(d(),f("span",xk,"外观："+u(B[ne.product]),1)):I("",!0),a("span",null,"装饰："+u(ne.due||"按标准配方")+" · 祝福："+u(ne.blessing||"无"),1),a("span",null,[$e("取货：第 "+u(y(r).month)+" 月第 "+u(y(r).day)+" 日",1),ne.pay?(d(),f("span",wk," · 报酬 ¥"+u(ne.pay),1)):I("",!0)])],10,Tk))),128))])])):I("",!0),E.value?(d(),f("div",Sk,[a("div",Ak,[J[7]||(J[7]=a("h3",{class:"game-title"},"蛋糕正在打包……",-1)),x.value?(d(),f(F,{key:1},[J[6]||(J[6]=a("p",{class:"pack-error",role:"status"},"打包动画加载失败",-1)),a("button",{class:"game-btn",style:{width:"100%"},type:"button",onClick:K},"重试")],64)):(d(),f("img",{key:T.value,src:y(Pe)("minigame-packing.gif")+"?once="+T.value,alt:"蛋糕打包动画",onLoad:Y,onError:U},null,40,Nk))])])):I("",!0),l.value==="result"?(d(),f("div",Ok,[a("div",Pk,[a("h3",Rk,u(e.tutorial?"订单练习完成":"今日柜台结算"),1),a("div",Dk,[a("span",null,u(e.tutorial?"已体验订单核对、选货与打包":"完成交付 "+ae.value+" 份"),1),a("span",null,u(e.tutorial?"不影响正式经营":"本局收入 ¥"+L.value),1),a("span",null,u(e.tutorial?"练习订单已交付":"选错／缺货 "+m.value+" 次"),1),a("span",null,u(e.tutorial?"练习订单 LJ-DEMO":"订单完成 "+re.value+" / "+G.value.length),1)]),a("p",Vk,u(e.tutorial?"普通顾客按外观描述选货；预约顾客先查订单号。正式交付时才会扣除成品并到账。":"交付和缺货处理均已记入经营数据。已完成订单不会因刷新重复结算。"),1),a("button",{class:"game-btn primary",style:{width:"100%"},type:"button",onClick:J[3]||(J[3]=ne=>s("exit"))},u(e.tutorial?"完成小游戏练习":"返回蛋糕店"),1)])])):I("",!0)]),_:1},8,["sub"]))}},Mo=Be(Lk,[["__scopeId","data-v-b2046ed4"]]),Hk={key:0,class:"game-banner"},Fk={class:"game-scroll"},Uk={key:0,class:"game-card"},jk={class:"game-title"},qk={class:"game-stats"},Gk={key:0,class:"game-message"},Bk={key:1,class:"game-card"},Qk={class:"game-row"},Kk=["onClick"],zk=["onClick"],Zk={class:"game-grid"},Yk=["onClick"],Wk=["src"],Xk={class:"game-grid"},Jk=["onClick"],e2={key:2,class:"game-card"},n2={class:"game-title"},t2={class:"game-grid"},r2=["disabled","onClick"],s2=["src"],l2={class:"game-grid"},a2=["onClick"],o2={key:0,class:"game-lead"},i2={key:3,class:"game-card"},u2={class:"game-title"},c2={class:"game-stats"},d2={key:4,class:"game-message"},f2={__name:"MarketGame",emits:["exit"],setup(e,{emit:n}){const t=n,s=Z("intro"),l=Z(""),o=Z({}),i=Z(["","",""]),c=Z(""),v=Z(90);let m;const p=H(()=>r.marketRun),_=H(()=>fu()),g=H(()=>{var A;return Object.entries(((A=p.value)==null?void 0:A.inventory)||{}).map(([N,he])=>({id:N,qty:he,price:Gn(N)}))}),h=H(()=>g.value.filter(A=>(r.shelf[A.id]||0)>A.qty)),C=H(()=>qn.value.filter(A=>(r.shelf[A.id]||0)>0)),b=H(()=>["春日甜品市集","夏日水果节","秋日丰收集市","冬日暖心甜品节"][Math.floor((r.month-1)%12/3)]),E=A=>We(`cake-${A}.webp`)==="ok"?Pe(`cake-${A}.webp`):"",T=H(()=>{var A;return((A=p.value)==null?void 0:A.sold)||0}),w=H(()=>{var A;return((A=p.value)==null?void 0:A.revenue)||0}),S=H(()=>p.value?Math.round(p.value.score/Math.max(1,p.value.customerIndex)*100):100);function x(){if(r.marketRun&&!r.marketRun.completed){s.value="play",B(!0);return}s.value="prep",o.value=Object.fromEntries(C.value.map(A=>[A.id,Math.min(2,r.shelf[A.id]||0)])),i.value=["","",""],c.value=""}function Q(A,N){o.value={...o.value,[A]:Math.max(0,Math.min(r.shelf[A]||0,(o.value[A]||0)+N))}}function pe(A){if(!c.value)return l.value="先点选上方商品，再点击希望摆放的摊位位置。";i.value[A]=c.value,l.value="展示位置已安排，可继续调整。"}function le(){const A=Object.fromEntries(Object.entries(o.value).filter(([,be])=>be>0));if(!Object.keys(A).length)return l.value="至少带一款蛋糕去市集。";if(!i.value.some(be=>be&&A[be]))return l.value="先将商品布置到至少一个摊位展示位置。";if(Object.keys(A).some(be=>!i.value.includes(be)))return l.value="调拨的每种蛋糕都必须放到展示位置（最多三款），请调整备货。";const N=Ep({inventory:A,theme:b.value});if(!N.ok)return l.value=N.message;const he=r.marketRun;he.stand=i.value.filter(be=>A[be]),he.endsAt=Date.now()+9e4,de(),s.value="play",l.value="市集开张！看清客人需要的口味与数量。",B()}function B(A=!1){var N;if(clearInterval(m),(N=p.value)!=null&&N.endsAt||(p.value.endsAt=Date.now()+9e4,de()),m=setInterval(()=>{var he;if(v.value=Math.max(0,Math.ceil((((he=p.value)==null?void 0:he.endsAt)-Date.now())/1e3)),v.value<=0){for(clearInterval(m);r.marketRun&&!r.marketRun.completed;)sl();s.value="result",l.value="活动时间结束，收摊结算。"}},250),v.value=Math.max(0,Math.ceil((p.value.endsAt-Date.now())/1e3)),A&&v.value<=0){for(;r.marketRun&&!r.marketRun.completed;)sl();s.value="result"}}function G(A){if(s.value!=="play"||!_.value)return;const N=Tp(A);l.value=N.message,p.value.completed&&(clearInterval(m),s.value="result")}function O(A){const N=xp(A);l.value=N.message}function oe(){sl(),l.value="客人没有买到想要的蛋糕，满意度降低。",p.value.completed&&(clearInterval(m),s.value="result")}return tt(()=>{r.marketRun&&!r.marketRun.completed&&(s.value="intro",l.value="发现上次未结束的市集，可继续营业。")}),Ar(()=>clearInterval(m)),(A,N)=>(d(),xe(Vr,{bg:"minigame-market",title:"小镇市集",sub:s.value==="play"?b.value+" · 剩余 "+v.value+" 秒":b.value,onExit:N[1]||(N[1]=he=>t("exit"))},{default:mt(()=>{var he,be,ge,z,re,ae,L,P,D;return[s.value==="play"&&_.value?(d(),f("div",Hk,[a("b",null,u(_.value.customer),1),N[2]||(N[2]=$e("：想买 ",-1)),a("b",null,u(y(je)(_.value.product)),1),$e(" × "+u(_.value.qty)+" 份！",1),N[3]||(N[3]=a("br",null,null,-1)),a("small",null,"营业额 ¥"+u(w.value)+" · 销量 "+u(T.value)+" · 满意度 "+u(S.value)+"%",1)])):I("",!0),a("div",Fk,[s.value==="intro"?(d(),f("div",Uk,[a("h3",jk,u(b.value),1),N[4]||(N[4]=a("p",{class:"game-lead"},"先从店内库存调拨蛋糕，再安排摊位展示位置。开张后需要在 90 秒内接待顾客，错卖会影响满意度。",-1)),a("div",qk,[a("span",null,"今日货架 "+u(Object.values(y(r).shelf).reduce(($,q)=>$+q,0))+" 份",1),a("span",null,"本月活动积分 "+u(y(r).marketPoints||0),1)]),l.value?(d(),f("p",Gk,u(l.value),1)):I("",!0),a("button",{class:"game-btn primary",type:"button",style:{width:"100%","margin-top":"8px"},onClick:x},u(p.value&&!p.value.completed?"继续市集":"准备市集商品"),1)])):I("",!0),s.value==="prep"?(d(),f("div",Bk,[N[6]||(N[6]=a("h3",{class:"game-title"},"备货与布置摊位",-1)),N[7]||(N[7]=a("p",{class:"game-lead"},"调拨数量不能超过主店真实库存。展示位置会影响实际可售商品，点击商品再点位置进行陈列。",-1)),N[8]||(N[8]=a("div",{class:"game-section"},"① 选择调拨数量",-1)),(d(!0),f(F,null,se(C.value,$=>(d(),f("div",{key:$.id,class:"game-row"},[a("span",null,u(y(je)($.id))+" · 现货 "+u(y(r).shelf[$.id]),1),a("div",Qk,[a("button",{class:"game-btn",type:"button",onClick:q=>Q($.id,-1)},"−",8,Kk),a("b",null,u(o.value[$.id]||0),1),a("button",{class:"game-btn",type:"button",onClick:q=>Q($.id,1)},"＋",8,zk)])]))),128)),N[9]||(N[9]=a("div",{class:"game-section"},"② 选择陈列商品",-1)),a("div",Zk,[(d(!0),f(F,null,se(C.value.filter($=>o.value[$.id]>0),$=>(d(),f("button",{key:$.id,type:"button",class:ye(["game-btn game-tile",{selected:c.value===$.id}]),onClick:q=>c.value=$.id},[E($.id)?(d(),f("img",{key:0,src:E($.id),alt:""},null,8,Wk)):I("",!0),a("small",null,u(y(je)($.id)),1)],10,Yk))),128))]),N[10]||(N[10]=a("div",{class:"game-section"},"③ 放入三个展示位置",-1)),a("div",Xk,[(d(!0),f(F,null,se(i.value,($,q)=>(d(),f("button",{key:q,class:"game-btn",type:"button",onClick:R=>pe(q)},[$e("位置 "+u(q+1),1),N[5]||(N[5]=a("br",null,null,-1)),$e(u($?y(je)($):"点击放置"),1)],8,Jk))),128))]),a("button",{class:"game-btn primary",type:"button",style:{width:"100%"},onClick:le},"布置完成 · 开始营业")])):I("",!0),s.value==="play"?(d(),f("div",e2,[a("h3",n2,"摊位销售 · "+u(((he=p.value)==null?void 0:he.customerIndex)+1)+" / "+u((be=p.value)==null?void 0:be.demands.length),1),N[11]||(N[11]=a("p",{class:"game-lead"},"按需求点击展示台上的蛋糕，系统会自动检查数量、收款并从现货扣除。",-1)),a("div",t2,[(d(!0),f(F,null,se([...new Set(((ge=p.value)==null?void 0:ge.stand)||Object.keys(((z=p.value)==null?void 0:z.inventory)||{}))],$=>{var q,R,X,Me;return d(),f("button",{key:$,type:"button",class:"game-btn game-tile",disabled:!(((R=(q=p.value)==null?void 0:q.inventory)==null?void 0:R[$])>0),onClick:Ve=>G($)},[E($)?(d(),f("img",{key:0,src:E($),alt:""},null,8,s2)):I("",!0),a("span",null,u(y(je)($)),1),a("small",null,"摊位 "+u(((Me=(X=p.value)==null?void 0:X.inventory)==null?void 0:Me[$])||0)+" 份",1)],8,r2)}),128))]),N[12]||(N[12]=a("div",{class:"game-section"},"补货 · 从主店调拨（运费 ¥5/份）",-1)),a("div",l2,[(d(!0),f(F,null,se(h.value,$=>(d(),f("button",{key:$.id,class:"game-btn",type:"button",onClick:q=>O($.id)},"＋ "+u(y(je)($.id)),9,a2))),128)),h.value.length?I("",!0):(d(),f("span",o2,"店里没有剩余现货可调拨。"))]),a("button",{class:"game-btn",style:{width:"100%"},type:"button",onClick:oe},"无法满足 · 放弃这笔订单")])):I("",!0),s.value==="result"?(d(),f("div",i2,[a("h3",u2,"市集收摊 · "+u(((re=p.value)==null?void 0:re.score)>=(((ae=p.value)==null?void 0:ae.target)||99)?"达成目标":"继续努力"),1),a("div",c2,[a("span",null,"卖出 "+u(T.value)+" 份",1),a("span",null,"活动收入 ¥"+u(w.value),1),a("span",null,"成交顾客 "+u(((L=p.value)==null?void 0:L.score)||0)+" 位",1),a("span",null,"失误 "+u(((P=p.value)==null?void 0:P.misses)||0)+" 次",1),a("span",null,"目标 "+u(((D=p.value)==null?void 0:D.target)||0)+" 单",1),a("span",null,"活动积分 "+u(y(r).marketPoints||0),1)]),N[13]||(N[13]=a("p",{class:"game-lead"},"销售与库存已同步到主店，活动记录已存入收藏系统。",-1)),a("button",{class:"game-btn primary",style:{width:"100%"},type:"button",onClick:N[0]||(N[0]=$=>t("exit"))},"回到小镇")])):I("",!0),l.value&&s.value!=="intro"?(d(),f("div",d2,u(l.value),1)):I("",!0)])]}),_:1},8,["sub"]))}},p2={key:0,class:"game-banner"},v2={class:"game-scroll"},m2={key:0,class:"game-card"},h2={class:"game-title"},g2={class:"game-stats"},y2={key:0,class:"game-message"},b2={key:1,class:"game-card"},_2={class:"game-title"},k2={class:"game-grid four"},M2=["onClick"],$2=["src"],C2={class:"game-grid"},I2=["onClick"],E2={class:"game-row"},T2={class:"game-stats"},x2={class:"game-row"},w2={class:"game-grid two"},S2=["onClick"],A2={class:"game-lead"},N2={key:2,class:"game-card"},O2={class:"game-stats"},P2={key:3,class:"game-message"},R2={__name:"CafeGame",emits:["exit"],setup(e,{emit:n}){const t=n,s=[{id:"americano",name:"美式咖啡",profile:"bold",note:"深烘浓香"},{id:"latte",name:"拿铁",profile:"mellow",note:"温柔奶香"},{id:"cappuccino",name:"卡布奇诺",profile:"mellow",note:"绵密奶泡"},{id:"mocha",name:"摩卡",profile:"bold",note:"巧克力香"},{id:"iced",name:"冰咖啡",profile:"fresh",note:"清爽明亮"}],l={bold:"浓郁醇厚",mellow:"温柔奶香",fresh:"轻盈清爽"},o=Z("intro"),i=Z(""),c=Z("latte"),v=Z(0),m=Z(""),p=Z("奶油白礼盒"),_=Z(""),g=H(()=>r.cafeRun),h=H(()=>vu()),C=H(()=>qn.value.map(O=>({...O,stock:r.shelf[O.id]||0})).filter(O=>O.stock>0)),b=H(()=>s.find(O=>O.id===c.value)),E=H(()=>["春日花园下午茶","夏日水果特调","秋日暖心咖啡","冬日巧克力时光"][Math.floor((r.month-1)%12/3)]),T=H(()=>i.value&&pu(i.value,c.value)),w=H(()=>i.value?Math.round(Gn(i.value)*1.25+65):0),S=O=>We(`cake-${O}.webp`)==="ok"?Pe(`cake-${O}.webp`):"";function x(){if(g.value&&!g.value.completed){o.value="play",i.value=g.value.menu.product,c.value=g.value.menu.coffee;return}o.value="setup",_.value="选择真实库存里的蛋糕，再设计咖啡、售价和包装。"}function Q(O){i.value=O,v.value||(v.value=Math.round(Gn(O)*1.2+18))}function pe(){if(!i.value)return _.value="请先选择一款有库存的蛋糕。";if(!T.value)return _.value="口味冲突：尝试把清爽蛋糕搭配冰咖啡、浓郁蛋糕搭配美式或摩卡。";if(v.value<1||!Number.isFinite(Number(v.value)))return _.value="请输入有效套餐价格。";const O=Ap({product:i.value,coffee:c.value,price:v.value,theme:E.value});if(!O.ok)return _.value=O.message;r.cafeRun.menu.name=String(m.value||`${je(i.value)}下午茶`).slice(0,20),r.cafeRun.menu.packing=p.value,de(),o.value="play",_.value="套餐开始营业。根据顾客口味要求，随时调整组合。"}function le(){if(!i.value)return _.value="先为顾客选择蛋糕。";const O=Np({product:i.value,coffee:c.value});if(_.value=O.message,g.value.completed){o.value="result";return}O.ok&&(i.value="",c.value="latte")}function B(){Op(),_.value="这位客人暂时没能买到喜欢的组合。",g.value.completed&&(o.value="result")}function G(){var O;(O=g.value)!=null&&O.menu&&(g.value.menu.price=Math.max(1,g.value.menu.price-10),de(),_.value="本次套餐售价已下调 ¥10。")}return(O,oe)=>{var A;return d(),xe(Vr,{bg:"minigame-cafe",title:"秋屿咖啡联名",sub:o.value==="play"?"已接待 "+(((A=g.value)==null?void 0:A.customerIndex)||0)+" / 3 位客人":E.value,onExit:oe[3]||(oe[3]=N=>t("exit"))},{default:mt(()=>{var N,he,be,ge,z,re,ae,L,P;return[o.value==="play"&&h.value?(d(),f("div",p2,[a("b",null,u(h.value.customer),1),oe[4]||(oe[4]=$e("：想要一份",-1)),a("b",null,u(l[h.value.profile]),1),oe[5]||(oe[5]=$e("的蛋糕和咖啡搭配。",-1)),oe[6]||(oe[6]=a("br",null,null,-1)),a("small",null,"今日联名收益 ¥"+u(((N=g.value)==null?void 0:N.revenue)||0)+" · 客人偏好明确，请仔细搭配",1)])):I("",!0),a("div",v2,[o.value==="intro"?(d(),f("div",m2,[a("h3",h2,u(E.value),1),oe[7]||(oe[7]=a("p",{class:"game-lead"},"和咖啡店联合设计套餐，先选蛋糕、咖啡与价格，营业时根据三位顾客的喜好重新搭配。每笔成交都会扣除店内蛋糕，并计算咖啡制作成本。",-1)),a("div",g2,[a("span",null,"合作经验 "+u(y(r).cafeCollab),1),a("span",null,"可用蛋糕 "+u(C.value.reduce((D,$)=>D+$.stock,0))+" 份",1)]),_.value?(d(),f("p",y2,u(_.value),1)):I("",!0),a("button",{class:"game-btn primary",style:{width:"100%","margin-top":"8px"},type:"button",onClick:x},u(g.value&&!g.value.completed?"继续联名活动":"设计联名套餐"),1)])):I("",!0),o.value==="setup"||o.value==="play"?(d(),f("div",b2,[a("h3",_2,u(o.value==="setup"?"① 设计联名组合":"挑选这位客人的套餐"),1),oe[11]||(oe[11]=a("div",{class:"game-section"},"左侧蛋糕 · 来自店铺实际库存",-1)),a("div",k2,[(d(!0),f(F,null,se(C.value,D=>(d(),f("button",{key:D.id,type:"button",class:ye(["game-btn game-tile",{selected:i.value===D.id}]),onClick:$=>Q(D.id)},[S(D.id)?(d(),f("img",{key:0,src:S(D.id),alt:""},null,8,$2)):I("",!0),a("span",null,u(y(je)(D.id)),1),a("small",null,"库存 "+u(D.stock),1)],10,M2))),128))]),oe[12]||(oe[12]=a("div",{class:"game-section"},"右侧咖啡",-1)),a("div",C2,[(d(),f(F,null,se(s,D=>a("button",{key:D.id,type:"button",class:ye(["game-btn",{selected:c.value===D.id}]),onClick:$=>c.value=D.id},[$e(u(D.name),1),oe[8]||(oe[8]=a("br",null,null,-1)),a("small",null,u(D.note),1)],10,I2)),64))]),a("div",E2,[oe[9]||(oe[9]=a("strong",null,"中央组合区域",-1)),a("span",null,u(T.value?"✓ 风味协调":"尚需调整搭配"),1)]),a("div",T2,[a("span",null,u(i.value?y(je)(i.value):"尚未选蛋糕"),1),a("span",null,"＋ "+u(b.value.name),1)]),o.value==="setup"?(d(),f(F,{key:0},[oe[10]||(oe[10]=a("div",{class:"game-section"},"② 套餐命名、价格与包装",-1)),fn(a("input",{class:"name-input","onUpdate:modelValue":oe[0]||(oe[0]=D=>m.value=D),maxlength:"20",placeholder:"套餐名称（可选）"},null,512),[[et,m.value]]),a("div",x2,[a("span",null,"定价（建议不高于 ¥"+u(w.value)+"）",1),fn(a("input",{class:"game-number",type:"number",min:"1",inputmode:"numeric","onUpdate:modelValue":oe[1]||(oe[1]=D=>v.value=D)},null,512),[[et,v.value,void 0,{number:!0}]])]),a("div",w2,[(d(),f(F,null,se(["奶油白礼盒","樱花粉丝带","鼠尾草绿礼盒","焦糖色纸袋"],D=>a("button",{key:D,type:"button",class:ye(["game-btn",{selected:p.value===D}]),onClick:$=>p.value=D},u(D),11,S2)),64))]),a("button",{class:"game-btn primary",style:{width:"100%"},type:"button",onClick:pe},"确认套餐 · 开始联名")],64)):(d(),f(F,{key:1},[a("p",A2,"套餐统一售价 ¥"+u((be=(he=g.value)==null?void 0:he.menu)==null?void 0:be.price)+" · "+u((z=(ge=g.value)==null?void 0:ge.menu)==null?void 0:z.packing)+"。顾客口味不同，可以重新挑选蛋糕与饮品。",1),a("div",{class:"game-grid"},[a("button",{class:"game-btn",type:"button",onClick:G},"售价 −¥10"),a("button",{class:"game-btn",type:"button",onClick:B},"本单暂不成交"),a("button",{class:"game-btn primary",type:"button",onClick:le},"确认组合交付")])],64))])):I("",!0),o.value==="result"?(d(),f("div",N2,[oe[13]||(oe[13]=a("h3",{class:"game-title"},"联名活动结算",-1)),a("div",O2,[a("span",null,"售出 "+u(((re=g.value)==null?void 0:re.sold)||0)+" 套",1),a("span",null,"活动收入 ¥"+u(((ae=g.value)==null?void 0:ae.revenue)||0),1),a("span",null,"顾客满意 "+u(((L=g.value)==null?void 0:L.score)||0)+" / 3",1),a("span",null,"搭配失误 "+u(((P=g.value)==null?void 0:P.misses)||0)+" 次",1),a("span",null,"累计合作经验 "+u(y(r).cafeCollab),1),a("span",null,"本月主题 "+u(E.value),1)]),oe[14]||(oe[14]=a("p",{class:"game-lead"},"套餐、交易记录和营业收益已归入主游戏经营数据与收藏记录。",-1)),a("button",{class:"game-btn primary",type:"button",style:{width:"100%"},onClick:oe[2]||(oe[2]=D=>t("exit"))},"返回咖啡店")])):I("",!0),_.value&&o.value!=="intro"?(d(),f("div",P2,u(_.value),1)):I("",!0)])]}),_:1},8,["sub"])}}},D2=Be(R2,[["__scopeId","data-v-a5f7851a"]]),Tr=6;function Sl(e=Math.random){const n=e()*360,t=Array.from({length:Tr},(s,l)=>(n+l*60+(e()-.5)*24+360)%360);for(let s=t.length-1;s>0;s-=1){const l=Math.floor(e()*(s+1));[t[s],t[l]]=[t[l],t[s]]}return{targets:t,speed:54+e()*12,angle:e()*360,current:0,results:[]}}function V2(e=1){const n=Number(e),t=Math.max(0,Math.min(4,(Number.isFinite(n)?n:1)-1))/4;return{perfect:11-5*t,close:18-7*t,poor:26-10*t}}function L2(e,n){const t=((Number(e)-Number(n))%360+360)%360;return Math.min(t,360-t)}function H2(e,n,t=1){const s=L2(e,n),l=V2(t);return s<=l.perfect?{score:100,tier:"perfect",difference:s}:s<=l.close?{score:70,tier:"close",difference:s}:s<=l.poor?{score:30,tier:"poor",difference:s}:{score:0,tier:"miss",difference:s}}function F2(e){return!Array.isArray(e)||e.length!==Tr?null:Math.round(e.reduce((n,t)=>n+t.score,0)/Tr)}function U2(e,n=Math.random){if((e==null?void 0:e.phase)==="decoration")return{...e,phase:"piping",garnish:"",scores:{...e.scores,garnish:0},piping:Sl(n),migrated:!0};if((e==null?void 0:e.phase)!=="piping")return e;const t=e.piping;return!t||!Array.isArray(t.targets)||t.targets.length!==Tr||!Array.isArray(t.results)||t.results.length>Tr?{...e,piping:Sl(n),migrated:!0}:{...e,migrated:!1}}const j2={key:0,class:"game-banner"},q2={class:"game-progress"},G2={class:"game-scroll"},B2={key:0,class:"game-card"},Q2={class:"game-title"},K2={class:"game-lead"},z2={key:0,class:"game-grid"},Z2=["onClick"],Y2=["src","alt"],W2={key:1,class:"game-row"},X2={class:"game-lead"},J2={key:2,class:"game-lead"},eM={key:3,class:"game-message"},nM={key:1,class:"game-card"},tM={class:"game-lead"},rM={class:"game-grid"},sM=["onClick"],lM=["disabled"],aM={key:2,class:"game-card"},oM=["aria-valuenow"],iM={class:"game-center"},uM={key:3,class:"game-card"},cM={class:"game-row"},dM={class:"game-grid",style:{flex:"1",margin:"0"}},fM=["onClick"],pM=["aria-valuenow"],vM={class:"game-center"},mM={key:4,class:"game-card piping-card"},hM={class:"game-title"},gM={key:1,class:"piping-dot"},yM={key:2},bM={class:"piping-count"},_M={key:0,class:"piping-feedback",role:"status"},kM=["disabled"],MM={key:5,class:"game-card"},$M={class:"game-title"},CM={class:"game-center"},IM=["src"],EM={class:"game-stats"},TM={class:"game-lead"},xM={key:6,class:"game-message"},wM={__name:"BakingGame",props:{tutorial:{type:Boolean,default:!1}},emits:["exit"],setup(e,{emit:n}){const t=e,s=n,l=Z("intro"),o=Z(t.tutorial?"plain":Object.keys(r.plan)[0]||"strawberry"),i=Z(t.tutorial?1:Math.max(1,r.plan[o.value]||2)),c=Z([]),v=Z(0),m=Z(0),p=Z(175),_=Z(0),g=Z({materials:0,mix:0,oven:0,garnish:0}),h=Z(null),C=Z(0),b=Z(""),E=Z(null);let T,w,S=0,x=0;const Q=H(()=>ht[o.value]||{}),pe=H(()=>Object.keys(Q.value)),le=H(()=>[...new Set([...pe.value,"base","dairy","decor","cocoa","strawberry","matcha","mango","chestnut"])].map(k=>bn.find(M=>M.id===k)).filter(Boolean)),B=k=>{var M;return((M=bn.find(V=>V.id===k))==null?void 0:M.name)||k},G=k=>We(`cake-${k}.webp`)==="ok"?Pe(`cake-${k}.webp`):"",O=H(()=>{var k;return l.value==="ingredients"?20:l.value==="mix"?40:l.value==="oven"?60:l.value==="piping"?70+(((k=h.value)==null?void 0:k.results.length)||0)*5:l.value==="result"?100:0}),oe=H(()=>({plain:{cake:"#f4dfb2",cream:"#fff7e7",edge:"#d6b775",flower:"classic"},strawberry:{cake:"#f7d3d1",cream:"#fff1eb",edge:"#cf777e",flower:"berry"},chocolate:{cake:"#704c43",cream:"#e8c5a5",edge:"#4a302a",flower:"cocoa"},taro:{cake:"#d6c3df",cream:"#fff1fa",edge:"#92739f",flower:"taro"},matcha:{cake:"#b9c49b",cream:"#fff8e2",edge:"#738457",flower:"matcha"},mango:{cake:"#f3c779",cream:"#fff2cf",edge:"#c08228",flower:"mango"},tiramisu:{cake:"#ad7b60",cream:"#f5dec4",edge:"#694233",flower:"tiramisu"},fig:{cake:"#e5c5ca",cream:"#fff0f1",edge:"#9c596b",flower:"fig"},seasonal:{cake:"#e3d09a",cream:"#fff2d8",edge:"#a56e4b",flower:"seasonal"},custom:{cake:"#f5ccd8",cream:"#fff2f5",edge:"#a36d81",flower:"custom"},festival:{cake:"#c9856e",cream:"#ffebdc",edge:"#8c493d",flower:"festival"},signature:{cake:"#d2a868",cream:"#fff0ca",edge:"#98703e",flower:"signature"}})[o.value]||{cake:"#f4dfb2",cream:"#fff7e7",edge:"#d6b775",flower:"classic"}),A=H(()=>({"--cake-color":oe.value.cake,"--cream-color":oe.value.cream,"--cake-edge":oe.value.edge})),N=H(()=>`piping-flower flower-${oe.value.flower}`),he=H(()=>({transform:`rotate(${C.value}deg)`})),be=H(()=>t.tutorial?1:Number(r.levels[o.value])||1);function ge(){t.tutorial||!r.productionMini||l.value==="intro"||l.value==="result"||(r.productionMini.checkpoint={phase:l.value,picked:[...c.value],mix:v.value,bake:m.value,heat:p.value,wrong:_.value,scores:{...g.value},piping:h.value?{...h.value,angle:C.value,targets:[...h.value.targets],results:[...h.value.results]}:null},de())}function z(){var K;if(t.tutorial)return!1;const k=r.productionMini,M=k==null?void 0:k.checkpoint;if(!k||!M||!["ingredients","mix","oven","decoration","piping"].includes(M.phase))return!1;const V=U2(M);return o.value=k.product,i.value=r.plan[k.product]||i.value,c.value=[...V.picked||[]],v.value=Number(V.mix)||0,m.value=Number(V.bake)||0,p.value=Number(V.heat)||175,_.value=Number(V.wrong)||0,g.value={materials:0,mix:0,oven:0,garnish:0,...V.scores},l.value=V.phase,h.value=V.piping||null,C.value=Number((K=h.value)==null?void 0:K.angle)||0,b.value="已恢复上次完成的操作步骤，可以接着制作。",V.migrated&&ge(),!0}function re(){if(t.tutorial){o.value="plain",i.value=1,c.value=[],h.value=null,_.value=0,b.value="选取原味奶油蛋糕需要的材料，接着完成搅拌、烘烤和六次裱花练习。练习不会消耗经营资源。",l.value="ingredients";return}if(r.dayPhase!=="prep")return b.value="今天已经完成制作，请在下一个营业日再来。";if(!z()){if(!r.unlocked.includes(o.value))return b.value="配方还未解锁。";if(uu(o.value,i.value),Object.keys(Os()).length)return b.value="材料不足，请先到街上的食材铺采购，再来制作。";if(na()>wt.value)return b.value="今天的产能不足，请降低排产数量。";if(!at(o.value))return b.value="请先补齐这款蛋糕所需的材料。";if(!r.productionMini&&!Mp())return b.value="请先完成排产后再开始制作。";r.productionMini.product!==o.value&&(o.value=r.productionMini.product),c.value=[],_.value=0,b.value="按配方逐一准备原料。其他批次会由店里的伙伴协助完成。",l.value="ingredients",ge()}}function ae(k){if(!c.value.includes(k)){if(!pe.value.includes(k)){_.value++,b.value=`${B(k)}不是本次配方需要的原料。`;return}if(k!==pe.value[c.value.length]){_.value++,b.value=`请按操作单的顺序放入：先取${B(pe.value[c.value.length])}。`,ge();return}if(!t.tutorial&&(r.pantry[k]||0)+(r.legacyStock||0)<Q.value[k]*i.value){b.value=`${B(k)}余量不足，请检查排产或购买材料。`;return}c.value=[...c.value,k],b.value=`${B(k)}已放到操作台。`,ge()}}function L(){if(c.value.length!==pe.value.length)return b.value="还有食材没有放到操作台。";g.value.materials=Math.max(40,100-_.value*15),b.value="按住搅拌按钮，到绿色的最佳区间（72%～86%）松开。",l.value="mix",ge()}function P(){T&&(clearInterval(T),T=void 0,ge())}function D(k,M){var V;k==="mix"&&l.value!=="mix"||k==="bake"&&l.value!=="oven"||T||((V=M==null?void 0:M.currentTarget)!=null&&V.setPointerCapture&&M.currentTarget.setPointerCapture(M.pointerId),T=setInterval(()=>{const K=k==="mix"?v:m;K.value=Math.min(100,K.value+1.8),K.value>=100&&P()},46))}function $(){if(l.value==="mix"){if(P(),v.value<8)return b.value="再多搅拌一会儿才能成型。";g.value.mix=Math.max(0,100-Math.abs(v.value-79)*2.8),l.value="oven",b.value="设定炉温，再按住烘烤按钮，在 72%～86% 停止。",ge()}}function q(){if(l.value==="oven"){if(P(),m.value<8)return b.value="蛋糕胚还没有烤熟。";g.value.oven=Math.max(0,100-Math.abs(m.value-79)*2.8-Math.abs(p.value-175)*1.4),h.value=Sl(),C.value=h.value.angle,l.value="piping",b.value="指针对准亮起的位置就点一下，一共六次。",ge()}}function R(k){const M=Number(k)*Math.PI/180;return{left:`${50+42*Math.cos(M)}%`,top:`${50+42*Math.sin(M)}%`}}function X(k){if(l.value!=="piping"||!h.value){w=void 0;return}S||(S=k);const M=Math.min(80,k-S);S=k,C.value=(C.value+M*h.value.speed/1e3)%360,k-x>=1500&&(h.value.angle=C.value,ge(),x=k),w=requestAnimationFrame(X)}function Me(){l.value==="piping"&&h.value&&w===void 0?(S=0,w=requestAnimationFrame(X)):l.value!=="piping"&&w!==void 0&&(cancelAnimationFrame(w),w=void 0,S=0)}function Ve(){S=0}function Xe(){if(!h.value||h.value.results.length>=6)return;const k=h.value.current,M=H2(C.value,h.value.targets[k],be.value),V=[...h.value.results,M];h.value={...h.value,current:V.length,angle:C.value,results:V};const K={perfect:"精准命中",close:"接近目标",poor:"偏差较大",miss:"没有命中"};b.value=`${K[M.tier]} · ${M.score} 分`,V.length===6&&(g.value.garnish=F2(V),b.value=`六次裱花完成 · 平均 ${g.value.garnish} 分`),ge(),V.length===6&&Bn()}function Bn(){if(!h.value||h.value.results.length!==6)return b.value="完成六次裱花后才能入库。";const k=Math.round(g.value.materials*.3+g.value.mix*.25+g.value.oven*.25+g.value.garnish*.2);if(t.tutorial){E.value={score:k,bonus:0,name:je(o.value),qty:1,grade:k>=90?"优秀":k>=70?"良好":"普通"},l.value="result";return}const M=$p(k,!1,"转盘裱花");if(!M.ok){b.value=M.msg||M.message;return}E.value={score:k,bonus:M.bonus||0,name:je(o.value),qty:r.dayMade,grade:k>=90?"优秀":k>=70?"良好":"普通"},de(),l.value="result"}return sn(l,Me),tt(()=>{z(),document.addEventListener("visibilitychange",Ve),Me()}),Ar(()=>{P(),ge(),document.removeEventListener("visibilitychange",Ve),w!==void 0&&cancelAnimationFrame(w)}),(k,M)=>(d(),xe(Vr,{bg:"minigame-production",title:"蛋糕制作",sub:e.tutorial?"小游戏体验 · 不消耗经营资源":l.value==="intro"?"每日制作 · 一天只需完成一次":"制作进度 "+O.value+"%",onExit:M[4]||(M[4]=V=>s("exit"))},{default:mt(()=>{var V,K,Y;return[l.value!=="intro"&&l.value!=="result"?(d(),f("div",j2,[$e(u(y(je)(o.value))+" · "+u({ingredients:"准备材料",mix:"搅拌蛋糕胚",oven:"烘烤定型",piping:"转盘裱花"}[l.value])+" ",1),a("div",q2,[a("i",{style:tn({width:O.value+"%"})},null,4)])])):I("",!0),a("div",G2,[l.value==="intro"?(d(),f("div",B2,[a("h3",Q2,u(e.tutorial?"跟着做一份原味奶油蛋糕":"今天的主打蛋糕"),1),a("p",K2,u(e.tutorial?"小游戏会依次练习选材料、搅拌、烘烤和六次裱花。按住按钮控制搅拌和烘烤；裱花时看准指针与亮起的位置重合再点击，练习不会消耗材料。":"选择配方并安排数量。完成选料、搅拌、烘烤和六次裱花，即可为今天整批蛋糕定级。"),1),e.tutorial?I("",!0):(d(),f("div",z2,[(d(!0),f(F,null,se(y(qn),U=>(d(),f("button",{key:U.id,type:"button",class:ye(["game-btn game-tile",{selected:o.value===U.id}]),onClick:te=>{o.value=U.id,i.value=y(r).plan[U.id]||2}},[G(U.id)?(d(),f("img",{key:0,src:G(U.id),alt:U.name},null,8,Y2)):I("",!0),a("span",null,u(y(je)(U.id)),1),a("small",null,"难度 "+u(U.diff),1)],10,Z2))),128))])),e.tutorial?I("",!0):(d(),f("div",W2,[M[5]||(M[5]=a("strong",null,"制作数量",-1)),fn(a("input",{class:"game-number",type:"number",min:"1",max:"12","onUpdate:modelValue":M[0]||(M[0]=U=>i.value=U)},null,512),[[et,i.value,void 0,{number:!0}]])])),a("p",X2,"配方原料："+u(Object.entries(Q.value).map(([U,te])=>B(U)+" ×"+te*i.value).join("、")),1),e.tutorial?I("",!0):(d(),f("p",J2,"已有排产 "+u(Object.values(y(r).plan).reduce((U,te)=>U+te,0))+" 份 · 体力 "+u(y(r).stamina)+" · 优秀额外奖励 ¥30",1)),b.value?(d(),f("div",eM,u(b.value),1)):I("",!0),a("button",{class:"game-btn primary",type:"button",style:{width:"100%","margin-top":"10px"},onClick:re},u(e.tutorial?"开始小游戏体验":"进入操作台"),1)])):I("",!0),l.value==="ingredients"?(d(),f("div",nM,[M[7]||(M[7]=a("h3",{class:"game-title"},"① 备齐制作材料",-1)),a("p",tM,"按顺序取用："+u(pe.value.map(B).join(" → "))+"。已取 "+u(c.value.length)+" / "+u(pe.value.length)+" 种",1),a("div",rM,[(d(!0),f(F,null,se(le.value,U=>(d(),f("button",{key:U.id,type:"button",class:ye(["game-btn",{selected:c.value.includes(U.id)}]),onClick:te=>ae(U.id)},[$e(u(U.name),1),M[6]||(M[6]=a("br",null,null,-1)),$e(u(e.tutorial?"练习材料":"仓库 "+(y(r).pantry[U.id]||0)),1)],10,sM))),128))]),a("button",{class:"game-btn primary",type:"button",style:{width:"100%"},disabled:c.value.length<pe.value.length,onClick:L},"原料齐了 · 开始搅拌",8,lM)])):I("",!0),l.value==="mix"?(d(),f("div",aM,[M[9]||(M[9]=a("h3",{class:"game-title"},"② 掌握搅拌程度",-1)),M[10]||(M[10]=a("p",{class:"game-lead"},"绿色区间是理想程度；过早和过晚都会降低松软度。",-1)),a("div",{class:"quality-track",role:"progressbar","aria-valuenow":Math.round(v.value),"aria-valuemin":"0","aria-valuemax":"100","aria-label":"搅拌进度"},[M[8]||(M[8]=a("span",{class:"quality-zone"},null,-1)),a("span",{class:"quality-cursor",style:tn({left:v.value+"%"})},null,4)],8,oM),a("div",iM,u(Math.round(v.value))+"%",1),a("button",{class:"game-btn primary",type:"button",style:{width:"100%","touch-action":"none"},onPointerdown:M[1]||(M[1]=mn(U=>D("mix",U),["prevent"])),onPointerup:$,onPointercancel:$},"按住搅拌 · 松开自动判定",32)])):I("",!0),l.value==="oven"?(d(),f("div",uM,[M[13]||(M[13]=a("h3",{class:"game-title"},"③ 炉温和烘烤时间",-1)),a("div",cM,[M[11]||(M[11]=a("span",null,"设定温度",-1)),a("div",dM,[(d(),f(F,null,se([160,175,190],U=>a("button",{key:U,type:"button",class:ye(["game-btn",{selected:p.value===U}]),onClick:te=>p.value=U},u(U)+"°C",11,fM)),64))])]),a("div",{class:"quality-track",role:"progressbar","aria-valuenow":Math.round(m.value),"aria-valuemin":"0","aria-valuemax":"100","aria-label":"烘烤进度"},[M[12]||(M[12]=a("span",{class:"quality-zone"},null,-1)),a("span",{class:"quality-cursor",style:tn({left:m.value+"%"})},null,4)],8,pM),a("div",vM,"烘烤 "+u(Math.round(m.value))+"%",1),a("button",{class:"game-btn primary",type:"button",style:{width:"100%","touch-action":"none"},onPointerdown:M[2]||(M[2]=mn(U=>D("bake",U),["prevent"])),onPointerup:q,onPointercancel:q},"按住烘烤 · 松开自动判定",32)])):I("",!0),l.value==="piping"?(d(),f("div",mM,[a("h3",hM,"④ 裱花挑战 · 还需完成 "+u(6-(((V=h.value)==null?void 0:V.results.length)||0))+" 次",1),M[18]||(M[18]=a("p",{class:"game-lead"},"等指针经过亮起的位置时，点蛋糕或下方按钮。错过也计入本轮，可以等它再转回来。",-1)),a("button",{class:"piping-board",style:tn(A.value),type:"button","aria-label":"点击蛋糕进行裱花",onClick:Xe},[M[15]||(M[15]=a("span",{class:"piping-ring"},null,-1)),M[16]||(M[16]=a("span",{class:"piping-cake"},[a("i",{class:"piping-cream"})],-1)),(d(!0),f(F,null,se(h.value.targets,(U,te)=>{var ue,ie,W,fe;return d(),f("span",{class:ye(["piping-target",{active:te===h.value.current,completed:te<h.value.results.length,missed:((ue=h.value.results[te])==null?void 0:ue.tier)==="miss"}]),key:te,style:tn(R(U))},[((ie=h.value.results[te])==null?void 0:ie.tier)==="perfect"||((W=h.value.results[te])==null?void 0:W.tier)==="close"?(d(),f("i",{key:0,class:ye(N.value)},null,2)):((fe=h.value.results[te])==null?void 0:fe.tier)==="poor"?(d(),f("i",gM)):te===h.value.current?(d(),f("b",yM)):I("",!0)],6)}),128)),a("span",{class:"piping-pointer",style:tn(he.value)},[...M[14]||(M[14]=[a("i",null,null,-1)])],4)],4),a("div",bM,[a("strong",null,u(((K=h.value)==null?void 0:K.results.length)||0)+" / 6",1),M[17]||(M[17]=a("span",null,"本轮操作进度",-1)),a("span",null,"熟练度 Lv"+u(be.value),1)]),b.value?(d(),f("p",_M,u(b.value),1)):I("",!0),a("button",{class:"game-btn primary piping-click",type:"button",disabled:((Y=h.value)==null?void 0:Y.results.length)>=6,onClick:Xe},"裱花",8,kM)])):I("",!0),l.value==="result"&&E.value?(d(),f("div",MM,[a("h3",$M,"制作完成 · "+u(E.value.grade),1),a("div",CM,[G(o.value)?(d(),f("img",{key:0,src:G(o.value),style:{height:"130px","max-width":"75%","object-fit":"contain"},alt:"完成蛋糕"},null,8,IM)):I("",!0)]),a("div",EM,[a("span",null,"综合得分 "+u(E.value.score),1),a("span",null,"蛋糕 "+u(E.value.name),1),a("span",null,u(e.tutorial?"练习完成":"今日累计制作 "+E.value.qty+" 份"),1),a("span",null,u(e.tutorial?"不影响正式经营":"额外奖励 ¥"+E.value.bonus),1)]),a("p",TM,u(e.tutorial?"你已经体验了选料、搅拌、烘烤和六次裱花。正式营业时，小游戏成绩会影响当日主打批次品质。":"已入库，可用于订单、市集和联名。今天完成一次制作小游戏即可。"),1),a("button",{class:"game-btn primary",type:"button",style:{width:"100%"},onClick:M[3]||(M[3]=U=>s("exit"))},u(e.tutorial?"完成小游戏练习":"返回烘焙后厨"),1)])):I("",!0),b.value&&l.value!=="intro"&&l.value!=="result"&&l.value!=="piping"?(d(),f("div",xM,u(b.value),1)):I("",!0)])]}),_:1},8,["sub"]))}},$o=Be(wM,[["__scopeId","data-v-be222657"]]),SM={class:"game-scroll"},AM={key:0,class:"game-card"},NM={class:"game-stats"},OM={class:"game-grid two"},PM=["disabled","onClick"],RM=["src"],DM={key:1,class:"game-card"},VM={class:"game-title"},LM={class:"game-lead"},HM={class:"game-grid four"},FM=["onClick"],UM={class:"game-grid two"},jM=["onClick"],qM={class:"game-grid two"},GM=["onClick"],BM={class:"game-grid"},QM=["onClick"],KM={class:"game-grid"},zM=["onClick"],ZM={class:"game-section"},YM={class:"game-grid"},WM=["onClick"],XM={class:"game-grid"},JM=["onClick"],e3={class:"game-lead"},n3={key:2,class:"game-card"},t3={class:"game-title"},r3={class:"game-center"},s3=["src"],l3={class:"game-stats"},a3={key:0},o3={key:3,class:"game-card game-center"},i3={key:4,class:"game-message"},u3={__name:"ResearchGame",emits:["exit"],setup(e,{emit:n}){const t=n,s=Z("intro"),l=Z(""),o=Z("戚风"),i=Z("鲜奶油"),c=Z([]),v=Z(0),m=Z(1),p=Z(1),_=Z(1),g=Z(""),h=Z(""),C=Z(null),b=H(()=>Qe.filter(A=>A.month>0&&!r.unlocked.includes(A.id))),E=H(()=>As[l.value]),T=H(()=>Ml(l.value)),w=H(()=>Qe.find(A=>A.id===l.value)),S=A=>We(`cake-${A}.webp`)==="ok"?Pe(`cake-${A}.webp`):"",x=H(()=>["冬日暖心","春日花园","夏日果香","秋日收获"][Math.floor((r.month-1)%12/3)]);function Q(A){if(r.labPending)return h.value="先处理保留的试吃结果，再开始新实验。";const N=Qe.find(he=>he.id===A);if(!N||N.month>r.month)return h.value=`这款配方要第 ${(N==null?void 0:N.month)||"?"} 个月才能研发。`;l.value=A,c.value=[],g.value=N.name,h.value="根据目标风味，先选四类食材，再调整制作细节。",s.value="compose"}function pe(A){c.value=c.value.includes(A)?c.value.filter(N=>N!==A):[...c.value,A]}function le(){if(!c.value.length)return h.value="请至少选择一种特色原料。";const A=up({productId:l.value,type:l.value==="signature"?"signature":void 0,ingredients:c.value,base:o.value,cream:i.value,direction:v.value,ratio:m.value,process:p.value,decoration:_.value,sugar:v.value,filling:m.value,garnish:p.value});if(!A.ok)return h.value=A.message;C.value={...r.labPending},s.value="result",h.value="已消耗 1 点行动力与四分之一配方原料。"}function B(){const A=su();if(!A.ok)return h.value=A.message;Jf(l.value,g.value||w.value.name),h.value="新配方已永久收藏，能用于制作、交付、市集和联名。",s.value="unlocked"}function G(){r.labPending&&Il(),s.value="compose",h.value="已保留选择，修改后可再次试做（重新消耗少量原料）。"}function O(){var A;r.labPending&&(l.value=r.labPending.productId,g.value=((A=Qe.find(N=>N.id===l.value))==null?void 0:A.name)||"",C.value={...r.labPending},s.value="result")}const oe=H(()=>qn.value.length);return(A,N)=>(d(),xe(Vr,{bg:"minigame-research",title:"配方研发",sub:x.value+" · 已有配方 "+oe.value+" 款",onExit:N[2]||(N[2]=he=>t("exit"))},{default:mt(()=>{var he,be,ge,z,re,ae,L,P;return[a("div",SM,[s.value==="intro"?(d(),f("div",AM,[N[3]||(N[3]=a("h3",{class:"game-title"},"从灵感到新配方",-1)),N[4]||(N[4]=a("p",{class:"game-lead"},"选择研发目标，在配方本里组合蛋糕胚、奶油、风味材料和装饰，反复试做。实验真正消耗食材与行动力，成功后永久解锁商品。",-1)),a("div",NM,[a("span",null,"研发行动力 "+u(y(r).ap),1),a("span",null,"已收藏 "+u(oe.value)+" / "+u(y(Qe).length),1)]),y(r).labPending?(d(),f("button",{key:0,class:"game-btn primary",type:"button",style:{width:"100%",margin:"10px 0"},onClick:O},"继续上次试吃（"+u(y(r).labPending.score)+" 分）",1)):I("",!0),N[5]||(N[5]=a("div",{class:"game-section"},"可研发目标及解锁时间",-1)),a("div",OM,[(d(!0),f(F,null,se(b.value,D=>(d(),f("button",{key:D.id,type:"button",class:"game-btn game-tile",disabled:D.month>y(r).month||!!y(r).labPending,onClick:$=>Q(D.id)},[S(D.id)?(d(),f("img",{key:0,src:S(D.id),alt:""},null,8,RM)):I("",!0),a("span",null,u(D.name),1),a("small",null,u(D.month>y(r).month?`第 ${D.month} 月开放`:"可开始试做"),1)],8,PM))),128))])])):I("",!0),s.value==="compose"?(d(),f("div",DM,[a("h3",VM,u((he=w.value)==null?void 0:he.name)+" · 配方本",1),a("p",LM,[$e("研发主题："+u((be=E.value)==null?void 0:be.theme),1),N[6]||(N[6]=a("br",null,null,-1)),$e("提示："+u((ge=E.value)==null?void 0:ge.focus),1)]),N[7]||(N[7]=a("div",{class:"game-section"},"① 蛋糕胚",-1)),a("div",HM,[(d(),f(F,null,se(["原味","巧克力","抹茶","戚风"],D=>a("button",{key:D,class:ye(["game-btn",{selected:o.value===D}]),type:"button",onClick:$=>o.value=D},u(D),11,FM)),64))]),N[8]||(N[8]=a("div",{class:"game-section"},"② 奶油与夹心",-1)),a("div",UM,[(d(),f(F,null,se(["鲜奶油","巧克力奶油","栗子泥","芝士"],D=>a("button",{key:D,class:ye(["game-btn",{selected:i.value===D}]),type:"button",onClick:$=>i.value=D},u(D),11,jM)),64))]),N[9]||(N[9]=a("div",{class:"game-section"},"③ 水果与风味 · 可多选",-1)),a("div",qM,[(d(!0),f(F,null,se(T.value,D=>(d(),f("button",{key:D,class:ye(["game-btn",{selected:c.value.includes(D)}]),type:"button",onClick:$=>pe(D)},u(D),11,GM))),128))]),N[10]||(N[10]=a("div",{class:"game-section"},"④ 表面装饰",-1)),a("div",BM,[(d(!0),f(F,null,se(y(ji),(D,$)=>(d(),f("button",{key:D,class:ye(["game-btn",{selected:_.value===$}]),type:"button",onClick:q=>_.value=$},u(D),11,QM))),128))]),N[11]||(N[11]=a("div",{class:"game-section"},"风味方向",-1)),a("div",KM,[(d(!0),f(F,null,se(y(Fi),(D,$)=>(d(),f("button",{key:D,class:ye(["game-btn",{selected:v.value===$}]),type:"button",onClick:q=>v.value=$},u(D),11,zM))),128))]),a("div",ZM,u(((z=E.value)==null?void 0:z.ratioLabel)||"主料比例"),1),a("div",YM,[(d(!0),f(F,null,se(y(Ui),(D,$)=>(d(),f("button",{key:D,class:ye(["game-btn",{selected:m.value===$}]),type:"button",onClick:q=>m.value=$},u(D),11,WM))),128))]),N[12]||(N[12]=a("div",{class:"game-section"},"制作工艺",-1)),a("div",XM,[(d(!0),f(F,null,se(((re=E.value)==null?void 0:re.processes)||[],(D,$)=>(d(),f("button",{key:D,class:ye(["game-btn",{selected:p.value===$}]),type:"button",onClick:q=>p.value=$},u(D),11,JM))),128))]),a("p",e3,"核心原料线索："+u((y(Bl)[l.value]||[]).flat().length)+" 种 · 实验消耗四分之一配方材料与 1 点行动力。",1),a("button",{class:"game-btn primary",style:{width:"100%"},type:"button",onClick:le},"开始试做 · 查看品鉴")])):I("",!0),s.value==="result"&&C.value?(d(),f("div",n3,[a("h3",t3,u(C.value.passed?"试吃合格 · 可以上架":"研发线索 · 需要调整"),1),a("div",r3,[S(C.value.productId)?(d(),f("img",{key:0,src:S(C.value.productId),style:{height:"110px","max-width":"70%","object-fit":"contain"},alt:"试做成品"},null,8,s3)):I("",!0)]),a("div",l3,[a("span",null,"综合 "+u(C.value.score)+" 分",1),a("span",null,"口味 "+u((ae=C.value.scores)==null?void 0:ae.flavor),1),a("span",null,"口感 "+u((L=C.value.scores)==null?void 0:L.texture),1),a("span",null,"外观 "+u((P=C.value.scores)==null?void 0:P.appearance),1)]),(d(!0),f(F,null,se(C.value.feedback,(D,$)=>(d(),f("p",{key:$,class:"game-lead"},"• "+u(D),1))),128)),C.value.passed?(d(),f("div",a3,[N[13]||(N[13]=a("div",{class:"game-section"},"给新蛋糕命名",-1)),fn(a("input",{class:"game-number",style:{width:"100%","text-align":"left",padding:"0 10px","box-sizing":"border-box"},"onUpdate:modelValue":N[0]||(N[0]=D=>g.value=D),maxlength:"20","aria-label":"新配方名称"},null,512),[[et,g.value]]),a("button",{class:"game-btn primary",style:{width:"100%","margin-top":"9px"},type:"button",onClick:B},"确认上架 · 消耗 1 点行动力")])):I("",!0),a("button",{class:"game-btn",style:{width:"100%","margin-top":"8px"},type:"button",onClick:G},"调整搭配后再试")])):I("",!0),s.value==="unlocked"?(d(),f("div",o3,[N[14]||(N[14]=a("h3",{class:"game-title"},"🎂 新配方研发成功",-1)),a("p",null,u(y(je)(l.value)),1),N[15]||(N[15]=a("p",{class:"game-lead"},"已加入永久配方收藏，未来生产与经营均可使用。",-1)),a("button",{class:"game-btn primary",style:{width:"100%"},type:"button",onClick:N[1]||(N[1]=D=>t("exit"))},"返回后厨")])):I("",!0),h.value?(d(),f("div",i3,u(h.value),1)):I("",!0)])]}),_:1},8,["sub"]))}},c3={class:"practice-mask"},d3=["aria-label"],f3={class:"practice-banner"},p3={class:"hint"},v3={class:"practice-task"},m3={class:"phone-mock"},h3=["onClick"],g3={class:"phone-content"},y3={class:"practice-progress"},b3={class:"practice-task"},_3={key:0,class:"mock-counter"},k3={key:1,class:"mock-counter"},M3={key:3,class:"practice-progress"},$3={__name:"TutorialPractice",props:{step:{type:String,required:!0}},emits:["done"],setup(e,{emit:n}){const t=e,s=n,l=Z(r.tutorialPractice===t.step?Number(r.tutorialPracticeProgress||0):0),o=Z("通知"),i=["通知","订单","日历","收藏"],c={counter:["从柜台旁取一份原味奶油蛋糕。","核对客人的需求，再把蛋糕装进纸盒。","把纸盒递给客人，完成一次接待。"],production:["选择戚风胚和奶油，先备好基础材料。","轻轻搅拌，让面糊保持细腻。","观察烤箱火候，在合适的时候出炉。","抹平奶油，给蛋糕加上简单装饰。"],phone:["打开通知，留意今天的店务提醒。","打开订单，查看客人预订的蛋糕。","浏览日历或收藏，确认重要日程和回忆。"]},v=H(()=>({counter:{title:"前厅练习 · 接待客人",hint:"这是一笔练习订单，不会扣除成品或增加收入。",image:"柜台"},production:{title:"后厨练习 · 做一份蛋糕",hint:"练习材料、搅拌、烘烤和装饰，不会消耗库存。",image:"后厨"},phone:{title:"手机练习 · 查看店务",hint:"不同页面各自记录通知、订单、日历与收藏。",image:"手机"}})[t.step]||{title:"新手练习",hint:"",image:""}),m=H(()=>c[t.step]||[]);function p(){l.value+=1,r.tutorialPracticeProgress=l.value,de(),l.value>=m.value.length&&s("done",t.step)}function _(g){o.value=g}return(g,h)=>(d(),f("div",c3,[a("section",{class:"practice-card",role:"dialog","aria-modal":"true","aria-label":v.value.title},[a("div",f3,[a("span",null,"林暖带你认识 · "+u(v.value.image),1)]),a("h1",null,u(v.value.title),1),a("p",p3,u(v.value.hint),1),e.step==="phone"?(d(),f(F,{key:0},[a("div",v3,u(m.value[Math.min(l.value,m.value.length-1)])+" 点开页面后，按下方按钮继续。",1),a("div",m3,[a("nav",null,[(d(),f(F,null,se(i,C=>a("button",{key:C,type:"button",class:ye({active:o.value===C}),onClick:b=>_(C)},u(C),11,h3)),64))]),a("div",g3,u(o.value==="订单"?"练习订单 LJ-TEST · 原味奶油蛋糕 × 2":o.value==="日历"?"明天：准备营业日":o.value==="收藏"?"这里会保存图鉴、剧情和照片":"欢迎来到林记烘焙，记得查看当天安排。"),1)]),a("div",y3,"练习 "+u(Math.min(l.value+1,m.value.length))+" / "+u(m.value.length),1),a("button",{class:"practice-action practice-next",type:"button",onClick:p},u(l.value+1>=m.value.length?"完成手机练习":"继续练习 →"),1)],64)):(d(),f(F,{key:1},[a("div",b3,u(m.value[Math.min(l.value,m.value.length-1)]),1),e.step==="counter"?(d(),f("div",_3,[h[0]||(h[0]=a("span",null,"原味奶油蛋糕 × 1",-1)),a("b",null,u(["取出蛋糕","装盒","递交"][Math.min(l.value,2)]),1)])):(d(),f("div",k3,[a("span",null,u(["戚风胚 · 奶油","搅拌均匀","烘烤出炉","抹面装饰"][Math.min(l.value,3)]),1),h[1]||(h[1]=a("b",null,"练习材料",-1))]))],64)),e.step!=="phone"?(d(),f("button",{key:2,class:"practice-action",type:"button",onClick:p},u(l.value+1>=m.value.length?"完成练习":"下一步"),1)):I("",!0),m.value.length&&e.step!=="phone"?(d(),f("div",M3,"练习 "+u(Math.min(l.value+1,m.value.length))+" / "+u(m.value.length),1)):I("",!0)],8,d3)]))}},C3=Be($3,[["__scopeId","data-v-fc41d81b"]]),I3={class:"app"},E3={key:1,class:"topbar game-in"},T3={class:"m serif"},x3={class:"topbar-actions"},w3={class:"purse"},S3={key:2,class:"scroll scene-scroll game-in"},A3={class:"between scene-meta"},N3={class:"small muted"},O3={class:"chip"},P3=["disabled"],R3={class:"scene-panel"},D3={class:"scene-panel-head"},V3={class:"small muted"},L3={class:"scene-panel-content"},H3={key:2,class:"scene-panel-mask"},F3={class:"scene-panel"},U3={class:"scene-panel-content"},j3=["data-guide-key"],q3={class:"sheet"},G3={class:"sheet-head"},B3={class:"t serif"},Q3={class:"small muted"},K3={class:"sheet-body"},z3={class:"card card-pad"},Z3={class:"between small",style:{"margin-bottom":"6px"}},Y3={class:"between small",style:{"margin-bottom":"6px"}},W3={class:"between small",style:{"margin-bottom":"6px"}},X3={class:"between small"},J3={key:0,class:"card card-pad",style:{"margin-top":"12px"}},e5={class:"h2"},n5={class:"between small",style:{"margin-bottom":"6px"}},t5={class:"between small",style:{"margin-bottom":"6px"}},r5={class:"between small",style:{"margin-bottom":"6px"}},s5={class:"between small"},l5={class:"between small",style:{"margin-top":"6px"}},a5={key:0,class:"delta"},o5={key:0,class:"mrep"},i5={class:"mrep-b"},u5={key:1,class:"mrep"},c5={class:"mrep-b"},d5={key:2,class:"mrep"},f5={class:"mrep-b"},p5={key:3,class:"small",style:{color:"var(--berry)",margin:"10px 0 0"}},v5={class:"sheet-foot"},m5={key:16,class:"mask"},h5={class:"sheet"},g5={class:"sheet-body",style:{"padding-top":"22px"}},y5={class:"small muted serif"},b5={class:"serif",style:{"font-size":"20px",margin:"6px 0 10px","line-height":"1.5"}},_5={key:0,style:{"font-size":"14px","line-height":"1.85",color:"var(--caramel-soft)",margin:"0 0 18px"}},k5={class:"card card-pad"},M5={class:"between small",style:{"margin-bottom":"6px"}},$5={class:"between small",style:{"margin-bottom":"6px"}},C5={class:"between small"},I5={key:1,class:"card card-pad",style:{"margin-top":"12px"}},E5={class:"pn"},T5={class:"muted small"},x5={class:"pt"},w5={class:"sheet-foot"},S5={__name:"App",setup(e){const n=Z("shop"),t=Z(""),s=Z(!1),l=Z(!1),o=Z(""),i=Z(""),c=Z(!1),v=Z("pantry"),m=Z("overview"),p=Z("counter");function _(D,$="overview"){if(typeof D=="string"&&D.indexOf("game:")===0){i.value=D.slice(5);return}o.value=D,D==="manage"&&(m.value=$),D==="shop"&&(p.value=$),D==="feature"&&(v.value=$)}function g(D){nn(D).open&&(Mu(D),c.value=!1,n.value=D)}function h(){const D=qp();D&&(C(),n.value="home",he(D))}function C(){o.value="",m.value="overview",p.value="counter"}const b=Z(null),E=Z(null),T=Z(null),w=Z(!1),S=new URLSearchParams(location.search).get("dev")==="1",x=H(()=>r.phase==="ended"&&r.ending&&!we.events.length&&!w.value?r.ending:null),Q=H(()=>r.ending&&Bt.some(D=>!D.final&&D.short.key===r.ending.key)),pe=H(()=>we.events.length),le=H(()=>s.value&&r.tutorialPractice==="phone"&&!c.value?"phone":t.value);function B(D={}){const $=D.fresh===!0,q=Ee.prologue||Ee.events.find(Me=>Me.kind==="prologue"),R=r.played.includes(q.id);r.tutorialPractice||ll($||!R);const X=!R;if(X&&(r.tutorialPractice=null,r.tutorialPracticeProgress=0),s.value=!0,l.value=!1,n.value="shop",o.value=D.panel||"",c.value=!1,m.value=D.section||"overview",r.tutorialPromptPending&&(r.tutorialPromptPending=!1),X){r.tutorialSeen=!1;for(let Me=we.events.length-1;Me>=0;Me--)(we.events[Me].kind==="tutorial"||we.events[Me].id===q.id)&&we.events.splice(Me,1);we.events.unshift(q),b.value=q,de()}!X&&!r.tutorialPractice&&we.events.length&&(b.value=we.events[0]),r.tutorialPractice||(r.productionMini||r.productionResult?i.value="baking":r.labPending?i.value="research":r.dayPhase==="service"&&r.service?i.value="delivery":r.marketRun&&!r.marketRun.completed?i.value="market":r.cafeRun&&!r.cafeRun.completed&&(i.value="cafe"))}function G(){de(),s.value=!1,l.value=!1,o.value="",c.value=!1,b.value=null,E.value=null,T.value=null,w.value=!1}function O(){if(r.tutorialPractice||!we.events.length)return;const D=we.events[0];D.kind==="tutorial"&&(D.id.includes("KITCHEN")?n.value="kitchen":D.id.includes("STREET")||D.id.includes("PHONE")?n.value="street":n.value="shop"),b.value=D}function oe(){var R;const D=b.value;if(we.events.shift(),b.value=null,de(),(D==null?void 0:D.id)===Ee.prologue.id){const X=(R=r.storyChoices[D.id])==null?void 0:R["0.1"];r.tutorialPromptPending=!1,Zp(X===0),O(),de();return}const $={EVT_TUTORIAL_FRONT:"counter",EVT_TUTORIAL_KITCHEN:"production",EVT_TUTORIAL_STREET:"purchase",EVT_TUTORIAL_PHONE:"phone"}[D==null?void 0:D.id];if($){r.tutorialPractice=$,r.tutorialPracticeProgress=0,de();return}const q=we.events[0];(q==null?void 0:q.kind)==="tutorial"&&setTimeout(O,200)}function A(D){r.tutorialPractice===D&&(r.tutorialPractice=null,r.tutorialPracticeProgress=0,D==="phone"&&(c.value=!1),r.tutorialProgress+=1,de(),setTimeout(O,180))}function N(D){r.tutorialPractice==="phone"&&(r.tutorialPracticeProgress=Math.max(0,Math.min(7,Number(D)||0)),de())}function he(D){E.value=D,D.day===Ir&&(T.value=r.report)}function be(){E.value=null,T.value=null,we.events.length&&O()}function ge(){dp()&&(n.value="shop",o.value="",w.value=!1,ll(),O())}function z(){w.value=!0}function re(){pp()&&(w.value=!1,E.value=null,T.value=null,ll(),O())}function ae(){b.value||E.value||fp()&&(b.value=null,T.value=null,E.value=null,O())}sn(()=>r.autoStory,D=>{D&&(r.autoStory=!1,setTimeout(()=>{!b.value&&we.events.length&&O()},90))});const L=[["home","卧室与衣柜开放","经营一天后，可以回家休息、更换林念的日常服装。","home"],["park","公园开放","苏晴提起了小镇公园，空闲时可以去散步、拍照。","park"],["river","河岸开放","公园尽头的小路通向河边，那里有新的故事。","river"],["lab","实验台开放","基础配方逐渐熟练，现在可以在后厨研发新口味。","kitchen"],["studio","设计工作室开放","完成定制订单后，叶星河邀请林念尝试蛋糕与包装设计。","studio"],["cafe","秋屿咖啡开放","秋屿咖啡将于第 11 个月开放沈知秋剧情。","cafe"],["staff","员工排班板开放","第一位伙伴加入后，可以安排岗位和培训。","kitchen"],["market","小镇市集开放","林记烘焙收到了参加季节市集的邀请。","market"],["store","品牌新店开放","林念已经有能力规划更远处的品牌门店。","store"]];sn(()=>[r.dayIndex,r.month,r.shopLevel,r.brand,r.customOrders,r.staff.length,r.sqchatMonth,r.sceneVisits.park],()=>{L.forEach(([D,$,q,R])=>{nn(D).open&&!r.unlockNotified.includes(D)&&(r.unlockNotified.push(D),St($,q,R))})},{immediate:!0});const P=H(()=>{if(!x.value)return[];const D=Nt.filter(q=>r.staff.includes(q.id)).map(q=>({name:q.nick,role:q.role,...go(q.id)||{}})),$=go("mom");return $&&D.push({name:"林暖",role:"母亲",...$}),D.filter(q=>q.title)});return tt(()=>{Kf()}),(D,$)=>(d(),f("div",I3,[s.value?I("",!0):(d(),xe(bo,{key:0,onEnter:B})),s.value?(d(),f("div",E3,[a("div",T3,[$e(u(y(el)(y(r).month))+" ",1),a("small",null,"第 "+u(y(r).month)+" / 36 月 · 第 "+u(y(r).day)+" / "+u(y(Ir))+" 日",1)]),a("div",x3,[a("div",w3,[$[15]||($[15]=a("span",{class:"y"},"¥",-1)),$e(u(y(r).cash.toLocaleString()),1)]),a("button",{class:"topbar-save",type:"button",onClick:$[0]||($[0]=q=>l.value=!0)},"设置")])])):I("",!0),s.value?(d(),f("div",S3,[a("div",A3,[a("span",N3,u(y(Ps).name),1),a("span",O3,"行动力 "+u(y(r).ap)+" · 体力 "+u(y(r).stamina),1)]),S&&y(r).phase==="playing"?(d(),f("button",{key:0,class:"btn",type:"button",style:{width:"100%",margin:"0 0 8px"},disabled:!!b.value||!!E.value,onClick:ae},"开发者后门 · 跳到下个月",8,P3)):I("",!0),qe(Ob,{scene:n.value,"guide-target":le.value,onChangeScene:$[1]||($[1]=q=>n.value=q),onOpenPanel:_},null,8,["scene","guide-target"]),o.value?(d(),f("div",{key:1,class:"scene-panel-mask",onClick:mn(C,["self"])},[a("section",R3,[a("header",D3,[a("div",null,[a("div",V3,"林记烘焙 · "+u(y(el)(y(r).month)),1),a("strong",null,u({shop:"柜台营业",kitchen:"后厨操作台",partners:"员工排班板",manage:"经营手账",codex:"图鉴与相册",supplier:"食材采购",renovation:"店铺升级",feature:"小镇互动"}[o.value]||"经营"),1)]),a("button",{type:"button",class:"scene-panel-close",onClick:C},"✕")]),a("div",L3,[o.value==="shop"?(d(),xe(xg,{key:0,onClosed:he,onOpenPanel:_})):o.value==="renovation"?(d(),xe(L_,{key:1})):o.value==="supplier"?(d(),xe(_o,{key:2})):o.value==="kitchen"?(d(),xe(Jg,{key:3,onOpenPanel:_})):o.value==="partners"?(d(),xe(w0,{key:4})):o.value==="manage"?(d(),xe(pb,{key:5,"initial-section":m.value,onOpenPanel:_},null,8,["initial-section"])):o.value==="codex"?(d(),xe(Eu,{key:6,"initial-segment":m.value==="collection"?"collection":"product"},null,8,["initial-segment"])):o.value==="feature"?(d(),xe(i_,{key:7,section:v.value,onOpenPanel:_,onRestDay:h},null,8,["section"])):I("",!0)])])])):I("",!0),s.value&&y(r).tutorialPractice==="purchase"?(d(),f("div",H3,[a("section",F3,[$[16]||($[16]=a("header",{class:"scene-panel-head"},[a("div",null,[a("div",{class:"small muted"},"林记烘焙 · 新手教程"),a("strong",null,"街道练习 · 采购原料")])],-1)),a("div",U3,[qe(_o,{tutorial:"",onDone:$[2]||($[2]=q=>A("purchase"))})])])])):I("",!0)])):I("",!0),s.value&&!i.value?(d(),f("button",{key:3,class:ye(["phone-fab",{"phone-fab-guide-target":le.value==="phone"}]),"data-guide-key":le.value==="phone"?"phone":void 0,type:"button","aria-label":"打开常驻手机",onClick:$[3]||($[3]=q=>c.value=!0)},[...$[17]||($[17]=[a("span",null,"▣",-1),a("small",null,"手机",-1)])],10,j3)):I("",!0),s.value&&c.value&&!i.value?(d(),xe(Cu,{key:4,tutorial:y(r).tutorialPractice==="phone","tutorial-progress":y(r).tutorialPracticeProgress,onClose:$[4]||($[4]=q=>c.value=!1),onNavigate:g,onOpenPanel:_,onTutorialStep:N,onTutorialDone:$[5]||($[5]=q=>A("phone"))},null,8,["tutorial","tutorial-progress"])):I("",!0),s.value&&pe.value?(d(),f("button",{key:5,class:"btn primary",type:"button",style:{position:"absolute",right:"14px",bottom:"16px","z-index":"20","box-shadow":"var(--shadow)"},onClick:O}," 有 "+u(pe.value)+" 段剧情 ",1)):I("",!0),i.value==="baking"?(d(),xe($o,{key:6,onExit:$[6]||($[6]=q=>i.value="")})):I("",!0),i.value==="research"?(d(),xe(u3,{key:7,onExit:$[7]||($[7]=q=>i.value="")})):I("",!0),i.value==="delivery"?(d(),xe(Mo,{key:8,paused:!!b.value,onExit:$[8]||($[8]=q=>i.value="")},null,8,["paused"])):I("",!0),s.value&&y(r).tutorialPractice&&!["counter","production","purchase","phone"].includes(y(r).tutorialPractice)?(d(),xe(C3,{key:9,step:y(r).tutorialPractice,onDone:A},null,8,["step"])):I("",!0),i.value==="market"?(d(),xe(f2,{key:10,onExit:$[9]||($[9]=q=>i.value="")})):I("",!0),i.value==="cafe"?(d(),xe(D2,{key:11,onExit:$[10]||($[10]=q=>i.value="")})):I("",!0),s.value&&y(r).tutorialPractice==="counter"?(d(),xe(Mo,{key:12,tutorial:"",onExit:$[11]||($[11]=q=>A("counter"))})):I("",!0),s.value&&y(r).tutorialPractice==="production"?(d(),xe($o,{key:13,tutorial:"",onExit:$[12]||($[12]=q=>A("production"))})):I("",!0),s.value&&b.value?(d(),xe(Im,{key:14,ev:b.value,onGuideTarget:$[13]||($[13]=q=>t.value=q),onDone:oe},null,8,["ev"])):I("",!0),s.value&&E.value?(d(),f("div",{key:15,class:"mask",onClick:mn(be,["self"])},[a("div",q3,[a("div",G3,[a("div",B3,u(T.value?"月末结算":"打烊了"),1),a("div",Q3,u(y(el)(y(r).month))+" · 第 "+u(E.value.day)+" 个经营日",1)]),a("div",K3,[a("div",z3,[a("div",Z3,[$[18]||($[18]=a("span",{class:"muted"},"今天卖出",-1)),a("span",null,u(E.value.sold)+" 个",1)]),a("div",Y3,[$[19]||($[19]=a("span",{class:"muted"},"今日收入",-1)),a("span",null,"¥"+u(E.value.rev),1)]),a("div",W3,[$[20]||($[20]=a("span",{class:"muted"},"剩下",-1)),a("span",null,u(E.value.left)+" 个",1)]),a("div",X3,[$[21]||($[21]=a("span",{class:"muted"},"剩货回收",-1)),a("span",null,"¥"+u(E.value.gain),1)])]),T.value?(d(),f("div",J3,[a("div",e5,u(T.value.month)+" 月经营报告",1),a("div",n5,[$[22]||($[22]=a("span",{class:"muted"},"营业额",-1)),a("span",null,"¥"+u(T.value.rev),1)]),a("div",t5,[$[23]||($[23]=a("span",{class:"muted"},"支出",-1)),a("span",null,"¥"+u(T.value.cost),1)]),a("div",r5,[$[24]||($[24]=a("span",{class:"muted"},"净收入",-1)),a("span",{style:tn({color:T.value.net>=0?"#6c8a55":"var(--berry)"})},u(T.value.net>=0?"+":"")+u(T.value.net),5)]),a("div",s5,[$[25]||($[25]=a("span",{class:"muted"},"最受欢迎",-1)),a("span",null,u(T.value.best)+"（"+u(T.value.bestN)+" 个）",1)]),a("div",l5,[$[26]||($[26]=a("span",{class:"muted"},"口碑",-1)),a("span",null,[$e(u(T.value.rep)+" ",1),T.value.repDelta?(d(),f("em",a5,u(T.value.repDelta>0?"+":"")+u(T.value.repDelta),1)):I("",!0)])]),T.value.fresh&&T.value.fresh.length?(d(),f("div",o5,[$[27]||($[27]=a("div",{class:"mrep-t"},"这个月新上了",-1)),a("div",i5,u(T.value.fresh.join("、")),1)])):I("",!0),T.value.grown&&T.value.grown.length?(d(),f("div",u5,[$[28]||($[28]=a("div",{class:"mrep-t"},"伙伴长进了",-1)),a("div",c5,u(T.value.grown.join(" · ")),1)])):I("",!0),T.value.trust&&T.value.trust.length?(d(),f("div",d5,[$[29]||($[29]=a("div",{class:"mrep-t"},"信赖",-1)),a("div",f5,[(d(!0),f(F,null,se(T.value.trust,(q,R)=>(d(),f("span",{key:q.name},u(R?" · ":"")+u(q.name)+" "+u(q.v),1))),128))])])):I("",!0),T.value.warn?(d(),f("p",p5,u(T.value.warn),1)):I("",!0)])):I("",!0)]),a("div",v5,[a("button",{class:"btn primary block",type:"button",onClick:be},u(x.value?"看结局":"继续"),1)])])])):I("",!0),s.value&&x.value?(d(),f("div",m5,[a("div",h5,[a("div",g5,[a("div",y5,u(x.value.name),1),a("h2",b5,u(x.value.title),1),x.value.text?(d(),f("p",_5,u(x.value.text),1)):I("",!0),a("div",k5,[a("div",M5,[$[30]||($[30]=a("span",{class:"muted"},"门店 / 伙伴",-1)),a("span",null,u(y(r).storeCount)+" 家 · "+u(y(r).staff.length)+" 人",1)]),a("div",$5,[$[31]||($[31]=a("span",{class:"muted"},"产品 / 相册",-1)),a("span",null,u(y(r).unlocked.length)+" 款 · "+u(y(r).photos.length)+" 张",1)]),a("div",C5,[$[32]||($[32]=a("span",{class:"muted"},"口碑 / 知名度",-1)),a("span",null,u(Math.round(y(r).reputation))+" / "+u(Math.round(y(r).popularity)),1)])]),P.value.length?(d(),f("div",I5,[$[33]||($[33]=a("div",{class:"h2"},"他们的后来",-1)),(d(!0),f(F,null,se(P.value,(q,R)=>(d(),f("div",{key:R,class:"pl"},[a("div",E5,[$e(u(q.name),1),a("span",T5," · "+u(q.title),1)]),a("div",x5,u(q.text),1)]))),128))])):I("",!0)]),a("div",w5,[a("button",{class:"btn block",type:"button",onClick:z},"结束本局"),Q.value?(d(),f("button",{key:0,class:"btn block",type:"button",onClick:re}," 继续剧情 ")):I("",!0),a("button",{class:"btn primary block",type:"button",onClick:ge},"开启二周目")])])])):I("",!0),s.value&&l.value?(d(),xe(bo,{key:17,"in-game":"",onClose:$[14]||($[14]=q=>l.value=!1),onTitle:G,onEnter:B})):I("",!0)]))}},A5=Be(S5,[["__scopeId","data-v-eb8ea2f7"]]);df(A5).mount("#app");
