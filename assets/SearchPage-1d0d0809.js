import{D as h,C as R,r as o,P as B,u as C,O as m,m as M,c as F,a as U,b as k,d as I,f as _,e as G,s as V,j as p,g as z}from"./index-cb9328a0.js";import{T as H}from"./tooltip.esm-f272a150.js";import{u as W,a as $}from"./ImgContent-c20c3542.js";import{G as Y}from"./GifsGrid-514ce077.js";function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function q(t){if(Array.isArray(t))return j(t)}function J(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Q(t,e){if(t){if(typeof t=="string")return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}}function X(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Z(t){return q(t)||J(t)||Q(t)||X()}var f={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return f.DEFAULT_MASKS[e]?f.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,n,r){r||!h.isAndroid()||this.validateKey(e,e.data,n)},onKeyPress:function(e,n,r){r||h.isAndroid()||e.ctrlKey||e.altKey||this.validateKey(e,e.key,n)},onPaste:function(e,n,r){if(!r){var a=this.getRegex(n),l=e.clipboardData.getData("text");Z(l).forEach(function(c){if(!a.test(c))return e.preventDefault(),!1})}},validateKey:function(e,n,r){if(n!=null){var a=n.length===1;if(a){var l=this.getRegex(r);l.test(n)||e.preventDefault()}}},validate:function(e,n){var r=e.target.value,a=!0,l=this.getRegex(n);return r&&!l.test(r)&&(a=!1),a}};function x(){return x=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},x.apply(this,arguments)}function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function L(t,e){if(y(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ee(t){var e=L(t,"string");return y(e)==="symbol"?e:String(e)}function te(t,e,n){return e=ee(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var re={root:function(e){var n=e.props,r=e.isFilled;return F("p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":r},n.className)}},b=R.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,children:void 0},css:{classes:re}});function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(r){te(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var A=o.memo(o.forwardRef(function(t,e){var n=o.useContext(B),r=b.getProps(t,n),a=b.setMetaData(K(K({props:r},r.__parentMetadata),{},{context:{disabled:r.disabled}})),l=a.ptm,c=a.cx,g=a.isUnstyled;C(b.css.styles,g,{name:"inputtext",styled:!0});var s=o.useRef(e),d=function(i){r.onKeyDown&&r.onKeyDown(i),r.keyfilter&&f.onKeyPress(i,r.keyfilter,r.validateOnly)},P=function(i){r.onBeforeInput&&r.onBeforeInput(i),r.keyfilter&&f.onBeforeInput(i,r.keyfilter,r.validateOnly)},u=function(i){var S=i.target,w=!0;r.keyfilter&&r.validateOnly&&(w=f.validate(i,r.keyfilter)),r.onInput&&r.onInput(i,w),m.isNotEmpty(S.value)?h.addClass(S,"p-filled"):h.removeClass(S,"p-filled")},v=function(i){r.onPaste&&r.onPaste(i),r.keyfilter&&f.onPaste(i,r.keyfilter,r.validateOnly)};o.useEffect(function(){m.combinedRefs(s,e)},[s,e]);var D=o.useMemo(function(){return m.isNotEmpty(r.value)||m.isNotEmpty(r.defaultValue)},[r.value,r.defaultValue]),T=m.isNotEmpty(r.tooltip),N=M({className:c("root",{isFilled:D}),onBeforeInput:P,onInput:u,onKeyDown:d,onPaste:v},b.getOtherProps(r),l("root"));return o.createElement(o.Fragment,null,o.createElement("input",x({ref:s},N)),T&&o.createElement(H,x({target:s,content:r.tooltip},r.tooltipOptions,{pt:l("tooltip")})))}));A.displayName="InputText";const ie=()=>{const t=W(),{gifList:e,loading:n,totalRecord:r,fetching:a}=$(u=>u.gifGridReducer),[l,c]=U(),{t:g}=k(),[s,d]=o.useState(""),P=()=>{d(""),t(I()),c(u=>(u.delete("text"),u))};return o.useEffect(()=>{const u=setTimeout(()=>{s.length>1&&(t(I()),t(_(s)),c(v=>(v.set("text",s),v)))},1e3);return()=>clearTimeout(u)},[s,t]),o.useEffect(()=>{a&&(e==null?void 0:e.length)!==r&&(t(G()),t(_(s)))},[a,t]),o.useEffect(()=>(l.get("text")&&d(l.get("text")??""),()=>{t(V())}),[]),p.jsxs("div",{className:"w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-8 pt-5",children:[p.jsxs("span",{className:"p-input-icon-left p-input-icon-right lg:mb-6 mb-3 lg:w-9 w-11",children:[p.jsx("i",{className:"pi pi-search w-max"}),p.jsx(A,{value:s,onChange:u=>d(u.target.value),placeholder:g("search"),className:"w-full",style:{backgroundColor:"transparent",border:"1px solid var(--text-color)"}}),n&&p.jsx("i",{className:"pi pi-spin pi-spinner mr-1"}),!n&&!!s.length&&p.jsx("i",{className:"pi pi-times mr-1 cursor-pointer",onClick:P})]}),!n&&(e==null?void 0:e.length)===0&&p.jsx("div",{children:g("emptyMessage")}),e&&p.jsx(Y,{gifList:e}),!!(e!=null&&e.length)&&n&&p.jsx(z,{className:"w-5rem mt-5",strokeWidth:"3"})]})};export{ie as default};
