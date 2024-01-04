import{a as $e,d as it,j as we,h as ue,t as at,u as st}from"./plugin-vueexport-helper-f207eb5f.js";import{b as Fe,H as Be,i as de,bd as ot,J as ce,bc as Te,q as $,c as A,d as Y,u as qe,s as te,p as Ce,ac as De,ax as ze,o as pe,L as Ue,r as X,n as G,e as O,_ as Ge,aA as Je,j as re,R as Ke,S as ke,bm as ft,ai as lt,v as ne,a7 as ut,a0 as Ye,P as dt,b_ as ct,K as Ee,bo as oe,w as fe,a as pt,g as vt,f as Ae,x as mt,ak as Pe,a4 as Se,G as je,bU as ht,h as gt,Q as yt}from"./index-d78cd1ea.js";import{c as ve}from"./el-input-8390a414.js";import{o as bt}from"./baseClone-10758ba4.js";var wt=4;function Re(i){return bt(i,wt)}const Ft=Fe({size:{type:String,values:Be},disabled:Boolean}),qt=Fe({...Ft,model:Object,rules:{type:de(Object)},labelPosition:{type:String,values:["left","right","top"],default:"right"},requireAsteriskPosition:{type:String,values:["left","right"],default:"left"},labelWidth:{type:[String,Number],default:""},labelSuffix:{type:String,default:""},inline:Boolean,inlineMessage:Boolean,statusIcon:Boolean,showMessage:{type:Boolean,default:!0},validateOnRuleChange:{type:Boolean,default:!0},hideRequiredAsterisk:Boolean,scrollToError:Boolean,scrollIntoViewOptions:{type:[Object,Boolean]}}),xt={validate:(i,e,t)=>(ot(i)||ce(i))&&Te(e)&&ce(t)};function Ot(){const i=$([]),e=A(()=>{if(!i.value.length)return"0";const s=Math.max(...i.value);return s?`${s}px`:""});function t(s){const a=i.value.indexOf(s);return a===-1&&e.value,a}function n(s,a){if(s&&a){const o=t(a);i.value.splice(o,1,s)}else s&&i.value.push(s)}function r(s){const a=t(s);a>-1&&i.value.splice(a,1)}return{autoLabelWidth:e,registerLabelWidth:n,deregisterLabelWidth:r}}const H=(i,e)=>{const t=ve(e);return t.length>0?i.filter(n=>n.prop&&t.includes(n.prop)):i},_t="ElForm",Et=Y({name:_t}),At=Y({...Et,props:qt,emits:xt,setup(i,{expose:e,emit:t}){const n=i,r=[],s=$e(),a=qe("form"),o=A(()=>{const{labelPosition:v,inline:f}=n;return[a.b(),a.m(s.value||"default"),{[a.m(`label-${v}`)]:v,[a.m("inline")]:f}]}),u=v=>{r.push(v)},b=v=>{v.prop&&r.splice(r.indexOf(v),1)},p=(v=[])=>{n.model&&H(r,v).forEach(f=>f.resetField())},g=(v=[])=>{H(r,v).forEach(f=>f.clearValidate())},w=A(()=>!!n.model),_=v=>{if(r.length===0)return[];const f=H(r,v);return f.length?f:[]},E=async v=>y(void 0,v),d=async(v=[])=>{if(!w.value)return!1;const f=_(v);if(f.length===0)return!0;let h={};for(const q of f)try{await q.validate("")}catch(x){h={...h,...x}}return Object.keys(h).length===0?!0:Promise.reject(h)},y=async(v=[],f)=>{const h=!Je(f);try{const q=await d(v);return q===!0&&(f==null||f(q)),q}catch(q){if(q instanceof Error)throw q;const x=q;return n.scrollToError&&l(Object.keys(x)[0]),f==null||f(!1,x),h&&Promise.reject(x)}},l=v=>{var f;const h=H(r,v)[0];h&&((f=h.$el)==null||f.scrollIntoView(n.scrollIntoViewOptions))};return te(()=>n.rules,()=>{n.validateOnRuleChange&&E().catch(v=>it())},{deep:!0}),Ce(we,De({...ze(n),emit:t,resetFields:p,clearValidate:g,validateField:y,addField:u,removeField:b,...Ot()})),e({validate:E,validateField:y,resetFields:p,clearValidate:g,scrollToField:l}),(v,f)=>(pe(),Ue("form",{class:G(O(o))},[X(v.$slots,"default")],2))}});var Pt=Ge(At,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form.vue"]]);function B(){return B=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},B.apply(this,arguments)}function St(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,k(i,e)}function me(i){return me=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},me(i)}function k(i,e){return k=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},k(i,e)}function jt(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function ee(i,e,t){return jt()?ee=Reflect.construct.bind():ee=function(r,s,a){var o=[null];o.push.apply(o,s);var u=Function.bind.apply(r,o),b=new u;return a&&k(b,a.prototype),b},ee.apply(null,arguments)}function Rt(i){return Function.toString.call(i).indexOf("[native code]")!==-1}function he(i){var e=typeof Map=="function"?new Map:void 0;return he=function(n){if(n===null||!Rt(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(n))return e.get(n);e.set(n,r)}function r(){return ee(n,arguments,me(this).constructor)}return r.prototype=Object.create(n.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),k(r,n)},he(i)}var Nt=/%[sdj%]/g,Vt=function(){};typeof process<"u"&&process.env;function ge(i){if(!i||!i.length)return null;var e={};return i.forEach(function(t){var n=t.field;e[n]=e[n]||[],e[n].push(t)}),e}function N(i){for(var e=arguments.length,t=new Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];var r=0,s=t.length;if(typeof i=="function")return i.apply(null,t);if(typeof i=="string"){var a=i.replace(Nt,function(o){if(o==="%%")return"%";if(r>=s)return o;switch(o){case"%s":return String(t[r++]);case"%d":return Number(t[r++]);case"%j":try{return JSON.stringify(t[r++])}catch{return"[Circular]"}break;default:return o}});return a}return i}function Mt(i){return i==="string"||i==="url"||i==="hex"||i==="email"||i==="date"||i==="pattern"}function P(i,e){return!!(i==null||e==="array"&&Array.isArray(i)&&!i.length||Mt(e)&&typeof i=="string"&&!i)}function Wt(i,e,t){var n=[],r=0,s=i.length;function a(o){n.push.apply(n,o||[]),r++,r===s&&t(n)}i.forEach(function(o){e(o,a)})}function Ne(i,e,t){var n=0,r=i.length;function s(a){if(a&&a.length){t(a);return}var o=n;n=n+1,o<r?e(i[o],s):t([])}s([])}function Lt(i){var e=[];return Object.keys(i).forEach(function(t){e.push.apply(e,i[t]||[])}),e}var Ve=function(i){St(e,i);function e(t,n){var r;return r=i.call(this,"Async Validation Error")||this,r.errors=t,r.fields=n,r}return e}(he(Error));function It(i,e,t,n,r){if(e.first){var s=new Promise(function(w,_){var E=function(l){return n(l),l.length?_(new Ve(l,ge(l))):w(r)},d=Lt(i);Ne(d,t,E)});return s.catch(function(w){return w}),s}var a=e.firstFields===!0?Object.keys(i):e.firstFields||[],o=Object.keys(i),u=o.length,b=0,p=[],g=new Promise(function(w,_){var E=function(y){if(p.push.apply(p,y),b++,b===u)return n(p),p.length?_(new Ve(p,ge(p))):w(r)};o.length||(n(p),w(r)),o.forEach(function(d){var y=i[d];a.indexOf(d)!==-1?Ne(y,t,E):Wt(y,t,E)})});return g.catch(function(w){return w}),g}function $t(i){return!!(i&&i.message!==void 0)}function Bt(i,e){for(var t=i,n=0;n<e.length;n++){if(t==null)return t;t=t[e[n]]}return t}function Me(i,e){return function(t){var n;return i.fullFields?n=Bt(e,i.fullFields):n=e[t.field||i.fullField],$t(t)?(t.field=t.field||i.fullField,t.fieldValue=n,t):{message:typeof t=="function"?t():t,fieldValue:n,field:t.field||i.fullField}}}function We(i,e){if(e){for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];typeof n=="object"&&typeof i[t]=="object"?i[t]=B({},i[t],n):i[t]=n}}return i}var Ze=function(e,t,n,r,s,a){e.required&&(!n.hasOwnProperty(e.field)||P(t,a||e.type))&&r.push(N(s.messages.required,e.fullField))},Tt=function(e,t,n,r,s){(/^\s+$/.test(t)||t==="")&&r.push(N(s.messages.whitespace,e.fullField))},Q,Ct=function(){if(Q)return Q;var i="[a-fA-F\\d:]",e=function(h){return h&&h.includeBoundaries?"(?:(?<=\\s|^)(?="+i+")|(?<="+i+")(?=\\s|$))":""},t="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",n="[a-fA-F\\d]{1,4}",r=(`
(?:
(?:`+n+":){7}(?:"+n+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+n+":){6}(?:"+t+"|:"+n+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+n+":){5}(?::"+t+"|(?::"+n+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+n+":){4}(?:(?::"+n+"){0,1}:"+t+"|(?::"+n+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+n+":){3}(?:(?::"+n+"){0,2}:"+t+"|(?::"+n+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+n+":){2}(?:(?::"+n+"){0,3}:"+t+"|(?::"+n+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+n+":){1}(?:(?::"+n+"){0,4}:"+t+"|(?::"+n+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+n+"){0,5}:"+t+"|(?::"+n+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),s=new RegExp("(?:^"+t+"$)|(?:^"+r+"$)"),a=new RegExp("^"+t+"$"),o=new RegExp("^"+r+"$"),u=function(h){return h&&h.exact?s:new RegExp("(?:"+e(h)+t+e(h)+")|(?:"+e(h)+r+e(h)+")","g")};u.v4=function(f){return f&&f.exact?a:new RegExp(""+e(f)+t+e(f),"g")},u.v6=function(f){return f&&f.exact?o:new RegExp(""+e(f)+r+e(f),"g")};var b="(?:(?:[a-z]+:)?//)",p="(?:\\S+(?::\\S*)?@)?",g=u.v4().source,w=u.v6().source,_="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",E="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",d="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",y="(?::\\d{2,5})?",l='(?:[/?#][^\\s"]*)?',v="(?:"+b+"|www\\.)"+p+"(?:localhost|"+g+"|"+w+"|"+_+E+d+")"+y+l;return Q=new RegExp("(?:^"+v+"$)","i"),Q},Le={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},J={integer:function(e){return J.number(e)&&parseInt(e,10)===e},float:function(e){return J.number(e)&&!J.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!J.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(Le.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(Ct())},hex:function(e){return typeof e=="string"&&!!e.match(Le.hex)}},Dt=function(e,t,n,r,s){if(e.required&&t===void 0){Ze(e,t,n,r,s);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],o=e.type;a.indexOf(o)>-1?J[o](t)||r.push(N(s.messages.types[o],e.fullField,e.type)):o&&typeof t!==e.type&&r.push(N(s.messages.types[o],e.fullField,e.type))},zt=function(e,t,n,r,s){var a=typeof e.len=="number",o=typeof e.min=="number",u=typeof e.max=="number",b=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,p=t,g=null,w=typeof t=="number",_=typeof t=="string",E=Array.isArray(t);if(w?g="number":_?g="string":E&&(g="array"),!g)return!1;E&&(p=t.length),_&&(p=t.replace(b,"_").length),a?p!==e.len&&r.push(N(s.messages[g].len,e.fullField,e.len)):o&&!u&&p<e.min?r.push(N(s.messages[g].min,e.fullField,e.min)):u&&!o&&p>e.max?r.push(N(s.messages[g].max,e.fullField,e.max)):o&&u&&(p<e.min||p>e.max)&&r.push(N(s.messages[g].range,e.fullField,e.min,e.max))},z="enum",Ut=function(e,t,n,r,s){e[z]=Array.isArray(e[z])?e[z]:[],e[z].indexOf(t)===-1&&r.push(N(s.messages[z],e.fullField,e[z].join(", ")))},Gt=function(e,t,n,r,s){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(t)||r.push(N(s.messages.pattern.mismatch,e.fullField,t,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(t)||r.push(N(s.messages.pattern.mismatch,e.fullField,t,e.pattern))}}},m={required:Ze,whitespace:Tt,type:Dt,range:zt,enum:Ut,pattern:Gt},Jt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t,"string")&&!e.required)return n();m.required(e,t,r,a,s,"string"),P(t,"string")||(m.type(e,t,r,a,s),m.range(e,t,r,a,s),m.pattern(e,t,r,a,s),e.whitespace===!0&&m.whitespace(e,t,r,a,s))}n(a)},Kt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&m.type(e,t,r,a,s)}n(a)},kt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t===""&&(t=void 0),P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&(m.type(e,t,r,a,s),m.range(e,t,r,a,s))}n(a)},Yt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&m.type(e,t,r,a,s)}n(a)},Zt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),P(t)||m.type(e,t,r,a,s)}n(a)},Ht=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&(m.type(e,t,r,a,s),m.range(e,t,r,a,s))}n(a)},Qt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&(m.type(e,t,r,a,s),m.range(e,t,r,a,s))}n(a)},Xt=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(t==null&&!e.required)return n();m.required(e,t,r,a,s,"array"),t!=null&&(m.type(e,t,r,a,s),m.range(e,t,r,a,s))}n(a)},er=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&m.type(e,t,r,a,s)}n(a)},tr="enum",rr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s),t!==void 0&&m[tr](e,t,r,a,s)}n(a)},nr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t,"string")&&!e.required)return n();m.required(e,t,r,a,s),P(t,"string")||m.pattern(e,t,r,a,s)}n(a)},ir=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t,"date")&&!e.required)return n();if(m.required(e,t,r,a,s),!P(t,"date")){var u;t instanceof Date?u=t:u=new Date(t),m.type(e,u,r,a,s),u&&m.range(e,u.getTime(),r,a,s)}}n(a)},ar=function(e,t,n,r,s){var a=[],o=Array.isArray(t)?"array":typeof t;m.required(e,t,r,a,s,o),n(a)},le=function(e,t,n,r,s){var a=e.type,o=[],u=e.required||!e.required&&r.hasOwnProperty(e.field);if(u){if(P(t,a)&&!e.required)return n();m.required(e,t,r,o,s,a),P(t,a)||m.type(e,t,r,o,s)}n(o)},sr=function(e,t,n,r,s){var a=[],o=e.required||!e.required&&r.hasOwnProperty(e.field);if(o){if(P(t)&&!e.required)return n();m.required(e,t,r,a,s)}n(a)},K={string:Jt,method:Kt,number:kt,boolean:Yt,regexp:Zt,integer:Ht,float:Qt,array:Xt,object:er,enum:rr,pattern:nr,date:ir,url:le,hex:le,email:le,required:ar,any:sr};function ye(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var be=ye(),Z=function(){function i(t){this.rules=null,this._messages=be,this.define(t)}var e=i.prototype;return e.define=function(n){var r=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(s){var a=n[s];r.rules[s]=Array.isArray(a)?a:[a]})},e.messages=function(n){return n&&(this._messages=We(ye(),n)),this._messages},e.validate=function(n,r,s){var a=this;r===void 0&&(r={}),s===void 0&&(s=function(){});var o=n,u=r,b=s;if(typeof u=="function"&&(b=u,u={}),!this.rules||Object.keys(this.rules).length===0)return b&&b(null,o),Promise.resolve(o);function p(d){var y=[],l={};function v(h){if(Array.isArray(h)){var q;y=(q=y).concat.apply(q,h)}else y.push(h)}for(var f=0;f<d.length;f++)v(d[f]);y.length?(l=ge(y),b(y,l)):b(null,o)}if(u.messages){var g=this.messages();g===be&&(g=ye()),We(g,u.messages),u.messages=g}else u.messages=this.messages();var w={},_=u.keys||Object.keys(this.rules);_.forEach(function(d){var y=a.rules[d],l=o[d];y.forEach(function(v){var f=v;typeof f.transform=="function"&&(o===n&&(o=B({},o)),l=o[d]=f.transform(l)),typeof f=="function"?f={validator:f}:f=B({},f),f.validator=a.getValidationMethod(f),f.validator&&(f.field=d,f.fullField=f.fullField||d,f.type=a.getType(f),w[d]=w[d]||[],w[d].push({rule:f,value:l,source:o,field:d}))})});var E={};return It(w,u,function(d,y){var l=d.rule,v=(l.type==="object"||l.type==="array")&&(typeof l.fields=="object"||typeof l.defaultField=="object");v=v&&(l.required||!l.required&&d.value),l.field=d.field;function f(x,M){return B({},M,{fullField:l.fullField+"."+x,fullFields:l.fullFields?[].concat(l.fullFields,[x]):[x]})}function h(x){x===void 0&&(x=[]);var M=Array.isArray(x)?x:[x];!u.suppressWarning&&M.length&&i.warning("async-validator:",M),M.length&&l.message!==void 0&&(M=[].concat(l.message));var R=M.map(Me(l,o));if(u.first&&R.length)return E[l.field]=1,y(R);if(!v)y(R);else{if(l.required&&!d.value)return l.message!==void 0?R=[].concat(l.message).map(Me(l,o)):u.error&&(R=[u.error(l,N(u.messages.required,l.field))]),y(R);var I={};l.defaultField&&Object.keys(d.value).map(function(W){I[W]=l.defaultField}),I=B({},I,d.rule.fields);var U={};Object.keys(I).forEach(function(W){var V=I[W],ie=Array.isArray(V)?V:[V];U[W]=ie.map(f.bind(null,W))});var T=new i(U);T.messages(u.messages),d.rule.options&&(d.rule.options.messages=u.messages,d.rule.options.error=u.error),T.validate(d.value,d.rule.options||u,function(W){var V=[];R&&R.length&&V.push.apply(V,R),W&&W.length&&V.push.apply(V,W),y(V.length?V:null)})}}var q;if(l.asyncValidator)q=l.asyncValidator(l,d.value,h,d.source,u);else if(l.validator){try{q=l.validator(l,d.value,h,d.source,u)}catch(x){console.error==null||console.error(x),u.suppressValidatorError||setTimeout(function(){throw x},0),h(x.message)}q===!0?h():q===!1?h(typeof l.message=="function"?l.message(l.fullField||l.field):l.message||(l.fullField||l.field)+" fails"):q instanceof Array?h(q):q instanceof Error&&h(q.message)}q&&q.then&&q.then(function(){return h()},function(x){return h(x)})},function(d){p(d)},o)},e.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!K.hasOwnProperty(n.type))throw new Error(N("Unknown rule type %s",n.type));return n.type||"string"},e.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var r=Object.keys(n),s=r.indexOf("message");return s!==-1&&r.splice(s,1),r.length===1&&r[0]==="required"?K.required:K[this.getType(n)]||void 0},i}();Z.register=function(e,t){if(typeof t!="function")throw new Error("Cannot register a validator by type, validator is not a function");K[e]=t};Z.warning=Vt;Z.messages=be;Z.validators=K;const or=["","error","validating","success"],fr=Fe({label:String,labelWidth:{type:[String,Number],default:""},prop:{type:de([String,Array])},required:{type:Boolean,default:void 0},rules:{type:de([Object,Array])},error:String,validateStatus:{type:String,values:or},for:String,inlineMessage:{type:[String,Boolean],default:""},showMessage:{type:Boolean,default:!0},size:{type:String,values:Be}}),Ie="ElLabelWrap";var lr=Y({name:Ie,props:{isAutoWidth:Boolean,updateAll:Boolean},setup(i,{slots:e}){const t=re(we,void 0),n=re(ue);n||at(Ie,"usage: <el-form-item><label-wrap /></el-form-item>");const r=qe("form"),s=$(),a=$(0),o=()=>{var p;if((p=s.value)!=null&&p.firstElementChild){const g=window.getComputedStyle(s.value.firstElementChild).width;return Math.ceil(Number.parseFloat(g))}else return 0},u=(p="update")=>{Ye(()=>{e.default&&i.isAutoWidth&&(p==="update"?a.value=o():p==="remove"&&(t==null||t.deregisterLabelWidth(a.value)))})},b=()=>u("update");return Ke(()=>{b()}),ke(()=>{u("remove")}),ft(()=>b()),te(a,(p,g)=>{i.updateAll&&(t==null||t.registerLabelWidth(p,g))}),lt(A(()=>{var p,g;return(g=(p=s.value)==null?void 0:p.firstElementChild)!=null?g:null}),b),()=>{var p,g;if(!e)return null;const{isAutoWidth:w}=i;if(w){const _=t==null?void 0:t.autoLabelWidth,E=n==null?void 0:n.hasLabel,d={};if(E&&_&&_!=="auto"){const y=Math.max(0,Number.parseInt(_,10)-a.value),l=t.labelPosition==="left"?"marginRight":"marginLeft";y&&(d[l]=`${y}px`)}return ne("div",{ref:s,class:[r.be("item","label-wrap")],style:d},[(p=e.default)==null?void 0:p.call(e)])}else return ne(ut,{ref:s},[(g=e.default)==null?void 0:g.call(e)])}}});const ur=["role","aria-labelledby"],dr=Y({name:"ElFormItem"}),cr=Y({...dr,props:fr,setup(i,{expose:e}){const t=i,n=dt(),r=re(we,void 0),s=re(ue,void 0),a=$e(void 0,{formItem:!1}),o=qe("form-item"),u=st().value,b=$([]),p=$(""),g=ct(p,100),w=$(""),_=$();let E,d=!1;const y=A(()=>{if((r==null?void 0:r.labelPosition)==="top")return{};const c=Ee(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return c?{width:c}:{}}),l=A(()=>{if((r==null?void 0:r.labelPosition)==="top"||r!=null&&r.inline)return{};if(!t.label&&!t.labelWidth&&I)return{};const c=Ee(t.labelWidth||(r==null?void 0:r.labelWidth)||"");return!t.label&&!n.label?{marginLeft:c}:{}}),v=A(()=>[o.b(),o.m(a.value),o.is("error",p.value==="error"),o.is("validating",p.value==="validating"),o.is("success",p.value==="success"),o.is("required",ie.value||t.required),o.is("no-asterisk",r==null?void 0:r.hideRequiredAsterisk),(r==null?void 0:r.requireAsteriskPosition)==="right"?"asterisk-right":"asterisk-left",{[o.m("feedback")]:r==null?void 0:r.statusIcon}]),f=A(()=>Te(t.inlineMessage)?t.inlineMessage:(r==null?void 0:r.inlineMessage)||!1),h=A(()=>[o.e("error"),{[o.em("error","inline")]:f.value}]),q=A(()=>t.prop?ce(t.prop)?t.prop:t.prop.join("."):""),x=A(()=>!!(t.label||n.label)),M=A(()=>t.for||(b.value.length===1?b.value[0]:void 0)),R=A(()=>!M.value&&x.value),I=!!s,U=A(()=>{const c=r==null?void 0:r.model;if(!(!c||!t.prop))return oe(c,t.prop).value}),T=A(()=>{const{required:c}=t,F=[];t.rules&&F.push(...ve(t.rules));const j=r==null?void 0:r.rules;if(j&&t.prop){const S=oe(j,t.prop).value;S&&F.push(...ve(S))}if(c!==void 0){const S=F.map((L,D)=>[L,D]).filter(([L])=>Object.keys(L).includes("required"));if(S.length>0)for(const[L,D]of S)L.required!==c&&(F[D]={...L,required:c});else F.push({required:c})}return F}),W=A(()=>T.value.length>0),V=c=>T.value.filter(j=>!j.trigger||!c?!0:Array.isArray(j.trigger)?j.trigger.includes(c):j.trigger===c).map(({trigger:j,...S})=>S),ie=A(()=>T.value.some(c=>c.required)),Qe=A(()=>{var c;return g.value==="error"&&t.showMessage&&((c=r==null?void 0:r.showMessage)!=null?c:!0)}),xe=A(()=>`${t.label||""}${(r==null?void 0:r.labelSuffix)||""}`),C=c=>{p.value=c},Xe=c=>{var F,j;const{errors:S,fields:L}=c;(!S||!L)&&console.error(c),C("error"),w.value=S?(j=(F=S==null?void 0:S[0])==null?void 0:F.message)!=null?j:`${t.prop} is required`:"",r==null||r.emit("validate",t.prop,!1,w.value)},et=()=>{C("success"),r==null||r.emit("validate",t.prop,!0,"")},tt=async c=>{const F=q.value;return new Z({[F]:c}).validate({[F]:U.value},{firstFields:!0}).then(()=>(et(),!0)).catch(S=>(Xe(S),Promise.reject(S)))},Oe=async(c,F)=>{if(d||!t.prop)return!1;const j=Je(F);if(!W.value)return F==null||F(!1),!1;const S=V(c);return S.length===0?(F==null||F(!0),!0):(C("validating"),tt(S).then(()=>(F==null||F(!0),!0)).catch(L=>{const{fields:D}=L;return F==null||F(!1,D),j?!1:Promise.reject(D)}))},ae=()=>{C(""),w.value="",d=!1},_e=async()=>{const c=r==null?void 0:r.model;if(!c||!t.prop)return;const F=oe(c,t.prop);d=!0,F.value=Re(E),await Ye(),ae(),d=!1},rt=c=>{b.value.includes(c)||b.value.push(c)},nt=c=>{b.value=b.value.filter(F=>F!==c)};te(()=>t.error,c=>{w.value=c||"",C(c?"error":"")},{immediate:!0}),te(()=>t.validateStatus,c=>C(c||""));const se=De({...ze(t),$el:_,size:a,validateState:p,labelId:u,inputIds:b,isGroup:R,hasLabel:x,addInputId:rt,removeInputId:nt,resetField:_e,clearValidate:ae,validate:Oe});return Ce(ue,se),Ke(()=>{t.prop&&(r==null||r.addField(se),E=Re(U.value))}),ke(()=>{r==null||r.removeField(se)}),e({size:a,validateMessage:w,validateState:p,validate:Oe,clearValidate:ae,resetField:_e}),(c,F)=>{var j;return pe(),Ue("div",{ref_key:"formItemRef",ref:_,class:G(O(v)),role:O(R)?"group":void 0,"aria-labelledby":O(R)?O(u):void 0},[ne(O(lr),{"is-auto-width":O(y).width==="auto","update-all":((j=O(r))==null?void 0:j.labelWidth)==="auto"},{default:fe(()=>[O(x)?(pe(),pt(vt(O(M)?"label":"div"),{key:0,id:O(u),for:O(M),class:G(O(o).e("label")),style:Ae(O(y))},{default:fe(()=>[X(c.$slots,"label",{label:O(xe)},()=>[mt(Pe(O(xe)),1)])]),_:3},8,["id","for","class","style"])):Se("v-if",!0)]),_:3},8,["is-auto-width","update-all"]),je("div",{class:G(O(o).e("content")),style:Ae(O(l))},[X(c.$slots,"default"),ne(ht,{name:`${O(o).namespace.value}-zoom-in-top`},{default:fe(()=>[O(Qe)?X(c.$slots,"error",{key:0,error:w.value},()=>[je("div",{class:G(O(h))},Pe(w.value),3)]):Se("v-if",!0)]),_:3},8,["name"])],6)],10,ur)}}});var He=Ge(cr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/form/src/form-item.vue"]]);const gr=gt(Pt,{FormItem:He}),yr=yt(He);export{yr as E,gr as a};
