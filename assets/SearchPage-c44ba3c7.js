import{D as b,C as R,r as o,P as B,u as C,O as m,m as F,c as M,a as U,b as k,d as I,f as _,e as G,s as L,j as f,g as V}from"./index-c22511dd.js";import{T as z}from"./tooltip.esm-06a0e81b.js";import{u as H,a as W}from"./ImgContent-1cf545bb.js";import{G as $}from"./GifsGrid-5bbfcf4e.js";function j(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y(t){if(Array.isArray(t))return j(t)}function q(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function J(t,e){if(t){if(typeof t=="string")return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(t,e)}}function Q(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function X(t){return Y(t)||q(t)||J(t)||Q()}var c={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return c.DEFAULT_MASKS[e]?c.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,n,r){r||!b.isAndroid()||this.validateKey(e,e.data,n)},onKeyPress:function(e,n,r){r||b.isAndroid()||e.ctrlKey||e.altKey||this.validateKey(e,e.key,n)},onPaste:function(e,n,r){if(!r){var a=this.getRegex(n),l=e.clipboardData.getData("text");X(l).forEach(function(p){if(!a.test(p))return e.preventDefault(),!1})}},validateKey:function(e,n,r){if(n!=null){var a=n.length===1;if(a){var l=this.getRegex(r);l.test(n)||e.preventDefault()}}},validate:function(e,n){var r=e.target.value,a=!0,l=this.getRegex(n);return r&&!l.test(r)&&(a=!1),a}};function h(){return h=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},h.apply(this,arguments)}function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function Z(t,e){if(y(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(y(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ee(t){var e=Z(t,"string");return y(e)==="symbol"?e:String(e)}function te(t,e,n){return e=ee(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var re={root:function(e){var n=e.props,r=e.isFilled;return M("p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":r},n.className)}},v=R.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,children:void 0},css:{classes:re}});function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function K(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(r){te(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var A=o.memo(o.forwardRef(function(t,e){var n=o.useContext(B),r=v.getProps(t,n),a=v.setMetaData(K(K({props:r},r.__parentMetadata),{},{context:{disabled:r.disabled}})),l=a.ptm,p=a.cx,x=a.isUnstyled;C(v.css.styles,x,{name:"inputtext",styled:!0});var i=o.useRef(e),d=function(s){r.onKeyDown&&r.onKeyDown(s),r.keyfilter&&c.onKeyPress(s,r.keyfilter,r.validateOnly)},P=function(s){r.onBeforeInput&&r.onBeforeInput(s),r.keyfilter&&c.onBeforeInput(s,r.keyfilter,r.validateOnly)},u=function(s){var S=s.target,w=!0;r.keyfilter&&r.validateOnly&&(w=c.validate(s,r.keyfilter)),r.onInput&&r.onInput(s,w),m.isNotEmpty(S.value)?b.addClass(S,"p-filled"):b.removeClass(S,"p-filled")},g=function(s){r.onPaste&&r.onPaste(s),r.keyfilter&&c.onPaste(s,r.keyfilter,r.validateOnly)};o.useEffect(function(){m.combinedRefs(i,e)},[i,e]);var D=o.useMemo(function(){return m.isNotEmpty(r.value)||m.isNotEmpty(r.defaultValue)},[r.value,r.defaultValue]),T=m.isNotEmpty(r.tooltip),N=F({className:p("root",{isFilled:D}),onBeforeInput:P,onInput:u,onKeyDown:d,onPaste:g},v.getOtherProps(r),l("root"));return o.createElement(o.Fragment,null,o.createElement("input",h({ref:i},N)),T&&o.createElement(z,h({target:i,content:r.tooltip},r.tooltipOptions,{pt:l("tooltip")})))}));A.displayName="InputText";const se=()=>{const t=H(),{gifList:e,loading:n,totalRecord:r,fetching:a}=W(u=>u.gifGridReducer),[l,p]=U(),{t:x}=k(),[i,d]=o.useState(""),P=()=>{d(""),t(I()),p(u=>(u.delete("text"),u))};return o.useEffect(()=>{const u=setTimeout(()=>{i.length>1&&(t(I()),t(_(i)),p(g=>(g.set("text",i),g)))},1e3);return()=>clearTimeout(u)},[i,t,p]),o.useEffect(()=>{a&&e.length!==r&&(t(G()),t(_(i)))},[a,t]),o.useEffect(()=>(l.get("text")&&d(l.get("text")??""),()=>{t(L())}),[]),f.jsxs("div",{className:"w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-8 pt-5",children:[f.jsxs("span",{className:"p-input-icon-left p-input-icon-right lg:mb-6 mb-3 lg:w-9 w-11",children:[f.jsx("i",{className:"pi pi-search w-max"}),f.jsx(A,{value:i,onChange:u=>d(u.target.value),placeholder:x("search"),className:"w-full",style:{backgroundColor:"transparent",border:"1px solid var(--text-color)"}}),n&&f.jsx("i",{className:"pi pi-spin pi-spinner mr-1"}),!n&&!!i.length&&f.jsx("i",{className:"pi pi-times mr-1 cursor-pointer",onClick:P})]}),f.jsx($,{gifList:e}),!!e.length&&n&&f.jsx(V,{className:"w-5rem mt-5",strokeWidth:"3"})]})};export{se as default};
