import{aC as O,bd as W,bJ as J,R as x,ah as pe,S as H,K as Q,be as me,u as de,bL as Ee,aa as Z,s as P,bt as Te,a8 as ye,bM as be,a9 as Se,bA as V,U as le,q as Y,_ as we,d as fe,p as Le,e as k,r as z,a0 as ee,J as Ce,b as _e,i as te,v as he,ad as Oe}from"./index-d78cd1ea.js";import{t as Ne,i as Ae}from"./plugin-vueexport-helper-f207eb5f.js";let M;const Re=e=>{var o;if(!O)return 0;if(M!==void 0)return M;const t=document.createElement("div");t.className=`${e}-scrollbar__wrap`,t.style.visibility="hidden",t.style.width="100px",t.style.position="absolute",t.style.top="-9999px",document.body.appendChild(t);const n=t.offsetWidth;t.style.overflow="scroll";const r=document.createElement("div");r.style.width="100%",t.appendChild(r);const c=r.offsetWidth;return(o=t.parentNode)==null||o.removeChild(t),M=n-c,M};function qe(e,o){if(!O)return;if(!o){e.scrollTop=0;return}const t=[];let n=o.offsetParent;for(;n!==null&&e!==n&&e.contains(n);)t.push(n),n=n.offsetParent;const r=o.offsetTop+t.reduce((v,p)=>v+p.offsetTop,0),c=r+o.offsetHeight,u=e.scrollTop,i=u+e.clientHeight;r<u?e.scrollTop=r:c>i&&(e.scrollTop=c-e.clientHeight)}var g=(e=>(e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL",e))(g||{});const X=e=>{const o=W(e)?e:[e],t=[];return o.forEach(n=>{var r;W(n)?t.push(...X(n)):J(n)&&W(n.children)?t.push(...X(n.children)):(t.push(n),J(n)&&((r=n.component)!=null&&r.subTree)&&t.push(...X(n.component.subTree)))}),t},Je=(e,o,t)=>{let n={offsetX:0,offsetY:0};const r=i=>{const v=i.clientX,p=i.clientY,{offsetX:m,offsetY:S}=n,y=e.value.getBoundingClientRect(),h=y.left,s=y.top,a=y.width,d=y.height,l=document.documentElement.clientWidth,f=document.documentElement.clientHeight,N=-h+m,A=-s+S,R=l-h-a+m,K=f-s-d+S,b=L=>{const C=Math.min(Math.max(m+L.clientX-v,N),R),B=Math.min(Math.max(S+L.clientY-p,A),K);n={offsetX:C,offsetY:B},e.value&&(e.value.style.transform=`translate(${Q(C)}, ${Q(B)})`)},w=()=>{document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",b),document.addEventListener("mouseup",w)},c=()=>{o.value&&e.value&&o.value.addEventListener("mousedown",r)},u=()=>{o.value&&e.value&&o.value.removeEventListener("mousedown",r)};x(()=>{pe(()=>{t.value?c():u()})}),H(()=>{u()})},Qe=(e,o={})=>{me(e)||Ne("[useLockscreen]","You need to pass a ref param to this function");const t=o.ns||de("popup"),n=Ee(()=>t.bm("parent","hidden"));if(!O||Z(document.body,n.value))return;let r=0,c=!1,u="0";const i=()=>{setTimeout(()=>{Se(document==null?void 0:document.body,n.value),c&&document&&(document.body.style.width=u)},200)};P(e,v=>{if(!v){i();return}c=!Z(document.body,n.value),c&&(u=document.body.style.width),r=Re(t.namespace.value);const p=document.documentElement.clientHeight<document.body.scrollHeight,m=Te(document.body,"overflowY");r>0&&(p||m==="scroll")&&c&&(document.body.style.width=`calc(100% - ${r}px)`),ye(document.body,n.value)}),be(()=>i())},ke=e=>{if(!e)return{onClick:V,onMousedown:V,onMouseup:V};let o=!1,t=!1;return{onClick:u=>{o&&t&&e(u),o=t=!1},onMousedown:u=>{o=u.target===u.currentTarget},onMouseup:u=>{t=u.target===u.currentTarget}}};let _=[];const oe=e=>{const o=e;o.key===le.esc&&_.forEach(t=>t(o))},Me=e=>{x(()=>{_.length===0&&document.addEventListener("keydown",oe),O&&_.push(e)}),H(()=>{_=_.filter(o=>o!==e),_.length===0&&O&&document.removeEventListener("keydown",oe)})},$="focus-trap.focus-after-trapped",G="focus-trap.focus-after-released",Fe="focus-trap.focusout-prevented",ne={cancelable:!0,bubbles:!1},Ie={cancelable:!0,bubbles:!1},se="focusAfterTrapped",re="focusAfterReleased",De=Symbol("elFocusTrap"),j=Y(),U=Y(0),q=Y(0);let F=0;const ve=e=>{const o=[],t=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:n=>{const r=n.tagName==="INPUT"&&n.type==="hidden";return n.disabled||n.hidden||r?NodeFilter.FILTER_SKIP:n.tabIndex>=0||n===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;t.nextNode();)o.push(t.currentNode);return o},ue=(e,o)=>{for(const t of e)if(!Pe(t,o))return t},Pe=(e,o)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(o&&e===o)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},ge=e=>{const o=ve(e),t=ue(o,e),n=ue(o.reverse(),e);return[t,n]},xe=e=>e instanceof HTMLInputElement&&"select"in e,T=(e,o)=>{if(e&&e.focus){const t=document.activeElement;e.focus({preventScroll:!0}),q.value=window.performance.now(),e!==t&&xe(e)&&o&&e.select()}};function ce(e,o){const t=[...e],n=e.indexOf(o);return n!==-1&&t.splice(n,1),t}const He=()=>{let e=[];return{push:n=>{const r=e[0];r&&n!==r&&r.pause(),e=ce(e,n),e.unshift(n)},remove:n=>{var r,c;e=ce(e,n),(c=(r=e[0])==null?void 0:r.resume)==null||c.call(r)}}},Ye=(e,o=!1)=>{const t=document.activeElement;for(const n of e)if(T(n,o),document.activeElement!==t)return},ae=He(),Ue=()=>U.value>q.value,I=()=>{j.value="pointer",U.value=window.performance.now()},ie=()=>{j.value="keyboard",U.value=window.performance.now()},Ke=()=>(x(()=>{F===0&&(document.addEventListener("mousedown",I),document.addEventListener("touchstart",I),document.addEventListener("keydown",ie)),F++}),H(()=>{F--,F<=0&&(document.removeEventListener("mousedown",I),document.removeEventListener("touchstart",I),document.removeEventListener("keydown",ie))}),{focusReason:j,lastUserFocusTimestamp:U,lastAutomatedFocusTimestamp:q}),D=e=>new CustomEvent(Fe,{...Ie,detail:e}),Be=fe({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[se,re,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:o}){const t=Y();let n,r;const{focusReason:c}=Ke();Me(s=>{e.trapped&&!u.paused&&o("release-requested",s)});const u={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},i=s=>{if(!e.loop&&!e.trapped||u.paused)return;const{key:a,altKey:d,ctrlKey:l,metaKey:f,currentTarget:N,shiftKey:A}=s,{loop:R}=e,K=a===le.tab&&!d&&!l&&!f,b=document.activeElement;if(K&&b){const w=N,[L,C]=ge(w);if(L&&C){if(!A&&b===C){const E=D({focusReason:c.value});o("focusout-prevented",E),E.defaultPrevented||(s.preventDefault(),R&&T(L,!0))}else if(A&&[L,w].includes(b)){const E=D({focusReason:c.value});o("focusout-prevented",E),E.defaultPrevented||(s.preventDefault(),R&&T(C,!0))}}else if(b===w){const E=D({focusReason:c.value});o("focusout-prevented",E),E.defaultPrevented||s.preventDefault()}}};Le(De,{focusTrapRef:t,onKeydown:i}),P(()=>e.focusTrapEl,s=>{s&&(t.value=s)},{immediate:!0}),P([t],([s],[a])=>{s&&(s.addEventListener("keydown",i),s.addEventListener("focusin",m),s.addEventListener("focusout",S)),a&&(a.removeEventListener("keydown",i),a.removeEventListener("focusin",m),a.removeEventListener("focusout",S))});const v=s=>{o(se,s)},p=s=>o(re,s),m=s=>{const a=k(t);if(!a)return;const d=s.target,l=s.relatedTarget,f=d&&a.contains(d);e.trapped||l&&a.contains(l)||(n=l),f&&o("focusin",s),!u.paused&&e.trapped&&(f?r=d:T(r,!0))},S=s=>{const a=k(t);if(!(u.paused||!a))if(e.trapped){const d=s.relatedTarget;!Ae(d)&&!a.contains(d)&&setTimeout(()=>{if(!u.paused&&e.trapped){const l=D({focusReason:c.value});o("focusout-prevented",l),l.defaultPrevented||T(r,!0)}},0)}else{const d=s.target;d&&a.contains(d)||o("focusout",s)}};async function y(){await ee();const s=k(t);if(s){ae.push(u);const a=s.contains(document.activeElement)?n:document.activeElement;if(n=a,!s.contains(a)){const l=new Event($,ne);s.addEventListener($,v),s.dispatchEvent(l),l.defaultPrevented||ee(()=>{let f=e.focusStartEl;Ce(f)||(T(f),document.activeElement!==f&&(f="first")),f==="first"&&Ye(ve(s),!0),(document.activeElement===a||f==="container")&&T(s)})}}}function h(){const s=k(t);if(s){s.removeEventListener($,v);const a=new CustomEvent(G,{...ne,detail:{focusReason:c.value}});s.addEventListener(G,p),s.dispatchEvent(a),!a.defaultPrevented&&(c.value=="keyboard"||!Ue()||s.contains(document.activeElement))&&T(n??document.body),s.removeEventListener(G,p),ae.remove(u)}}return x(()=>{e.trapped&&y(),P(()=>e.trapped,s=>{s?y():h()})}),H(()=>{e.trapped&&h()}),{onKeydown:i}}});function We(e,o,t,n,r,c){return z(e.$slots,"default",{handleKeydown:e.onKeydown})}var Ze=we(Be,[["render",We],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);const Ve=_e({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:te([String,Array,Object])},zIndex:{type:te([String,Number])}}),Xe={click:e=>e instanceof MouseEvent},$e="overlay";var Ge=fe({name:"ElOverlay",props:Ve,emits:Xe,setup(e,{slots:o,emit:t}){const n=de($e),r=v=>{t("click",v)},{onClick:c,onMousedown:u,onMouseup:i}=ke(e.customMaskEvent?void 0:r);return()=>e.mask?he("div",{class:[n.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:c,onMousedown:u,onMouseup:i},[z(o,"default")],g.STYLE|g.CLASS|g.PROPS,["onClick","onMouseup","onMousedown"]):Oe("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[z(o,"default")])}});const et=Ge;export{et as E,De as F,Ze as a,ke as b,Qe as c,X as f,qe as s,Je as u};
