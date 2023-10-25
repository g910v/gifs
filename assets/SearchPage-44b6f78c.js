import{D as x,C as R,r as o,P as B,u as C,O as y,m as M,c as F,a as k,b as U,d as G,e as V,f as K,g as I,h as z,s as H,j as p,i as W,k as $}from"./index-b5e105f4.js";import{T as Y,B as q}from"./ImgContent-c335eea1.js";import{G as J}from"./GifsGrid-c7193214.js";function _(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Q(t){if(Array.isArray(t))return _(t)}function X(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Z(t,e){if(t){if(typeof t=="string")return _(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,e)}}function L(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ee(t){return Q(t)||X(t)||Z(t)||L()}var d={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(e){return d.DEFAULT_MASKS[e]?d.DEFAULT_MASKS[e]:e},onBeforeInput:function(e,n,r){r||!x.isAndroid()||this.validateKey(e,e.data,n)},onKeyPress:function(e,n,r){r||x.isAndroid()||e.ctrlKey||e.altKey||this.validateKey(e,e.key,n)},onPaste:function(e,n,r){if(!r){var a=this.getRegex(n),i=e.clipboardData.getData("text");ee(i).forEach(function(f){if(!a.test(f))return e.preventDefault(),!1})}},validateKey:function(e,n,r){if(n!=null){var a=n.length===1;if(a){var i=this.getRegex(r);i.test(n)||e.preventDefault()}}},validate:function(e,n){var r=e.target.value,a=!0,i=this.getRegex(n);return r&&!i.test(r)&&(a=!1),a}};function P(){return P=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},P.apply(this,arguments)}function g(t){"@babel/helpers - typeof";return g=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(t)}function te(t,e){if(g(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(g(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function re(t){var e=te(t,"string");return g(e)==="symbol"?e:String(e)}function ne(t,e,n){return e=re(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ae={root:function(e){var n=e.props,r=e.isFilled;return F("p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":r},n.className)}},h=R.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,children:void 0},css:{classes:ae}});function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A(Object(n),!0).forEach(function(r){ne(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var T=o.memo(o.forwardRef(function(t,e){var n=o.useContext(B),r=h.getProps(t,n),a=h.setMetaData(D(D({props:r},r.__parentMetadata),{},{context:{disabled:r.disabled}})),i=a.ptm,f=a.cx,v=a.isUnstyled;C(h.css.styles,v,{name:"inputtext",styled:!0});var c=o.useRef(e),l=function(s){r.onKeyDown&&r.onKeyDown(s),r.keyfilter&&d.onKeyPress(s,r.keyfilter,r.validateOnly)},m=function(s){r.onBeforeInput&&r.onBeforeInput(s),r.keyfilter&&d.onBeforeInput(s,r.keyfilter,r.validateOnly)},O=function(s){var w=s.target,E=!0;r.keyfilter&&r.validateOnly&&(E=d.validate(s,r.keyfilter)),r.onInput&&r.onInput(s,E),y.isNotEmpty(w.value)?x.addClass(w,"p-filled"):x.removeClass(w,"p-filled")},j=function(s){r.onPaste&&r.onPaste(s),r.keyfilter&&d.onPaste(s,r.keyfilter,r.validateOnly)};o.useEffect(function(){y.combinedRefs(c,e)},[c,e]);var u=o.useMemo(function(){return y.isNotEmpty(r.value)||y.isNotEmpty(r.defaultValue)},[r.value,r.defaultValue]),b=y.isNotEmpty(r.tooltip),N=M({className:f("root",{isFilled:u}),onBeforeInput:m,onInput:O,onKeyDown:l,onPaste:j},h.getOtherProps(r),i("root"));return o.createElement(o.Fragment,null,o.createElement("input",P({ref:c},N)),b&&o.createElement(Y,P({target:c,content:r.tooltip},r.tooltipOptions,{pt:i("tooltip")})))}));T.displayName="InputText";const le=()=>{const t=k(),{gifList:e,loading:n,totalRecord:r,fetching:a,error:i}=U(u=>u.gifGridReducer),[f,v]=G(),{t:c}=V(),[l,m]=o.useState(""),O=()=>{m(""),t(K()),v(u=>(u.delete("text"),u))},j=()=>{t($()),t(I(l))};return o.useEffect(()=>{const u=setTimeout(()=>{l.length>1&&(t(K()),t(I(l)),v(b=>(b.set("text",l),b)))},1e3);return()=>clearTimeout(u)},[l,t]),o.useEffect(()=>{a&&(e==null?void 0:e.length)!==r&&(t(z()),t(I(l)))},[a,t]),o.useEffect(()=>(f.get("text")&&m(f.get("text")??""),()=>{t(H())}),[]),p.jsxs("div",{className:"w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-8 pt-5",children:[p.jsxs("span",{className:"p-input-icon-left p-input-icon-right lg:mb-6 mb-3 lg:w-9 w-11",children:[p.jsx("i",{className:"pi pi-search w-max"}),p.jsx(T,{value:l,onChange:u=>m(u.target.value),placeholder:c("search"),className:"w-full",style:{backgroundColor:"transparent",border:"1px solid var(--text-color)"}}),n&&p.jsx("i",{className:"pi pi-spin pi-spinner mr-1"}),!n&&!!l.length&&p.jsx("i",{className:"pi pi-times mr-1 cursor-pointer",onClick:O})]}),!n&&(e==null?void 0:e.length)===0&&p.jsx("div",{children:c("emptyMessage")}),e&&p.jsx(J,{gifList:e}),!!(e!=null&&e.length)&&n&&p.jsx(W,{className:"w-5rem mt-5",strokeWidth:"3"}),i&&p.jsx(q,{text:!0,icon:"pi pi-refresh",onClick:j})]})};export{le as default};
