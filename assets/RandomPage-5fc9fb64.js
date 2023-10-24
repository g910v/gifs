import{r as u,I as ie,C as U,P as K,u as z,O,m as b,c as d,R as oe,h as se,i as k,k as le,j as y,l as S}from"./index-1b6b103a.js";import{T as ue}from"./tooltip.esm-9b3cccb9.js";import{u as ce,a as F,T as fe,S as pe,I as de}from"./ImgContent-52916a08.js";function D(){return D=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},D.apply(this,arguments)}function ge(r){if(Array.isArray(r))return r}function me(r,n){var e=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(e!=null){var t,a,i,o,s=[],l=!0,c=!1;try{if(i=(e=e.call(r)).next,n===0){if(Object(e)!==e)return;l=!1}else for(;!(l=(t=i.call(e)).done)&&(s.push(t.value),s.length!==n);l=!0);}catch(p){c=!0,a=p}finally{try{if(!l&&e.return!=null&&(o=e.return(),Object(o)!==o))return}finally{if(c)throw a}}return s}}function N(r,n){(n==null||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}function q(r,n){if(r){if(typeof r=="string")return N(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return N(r,n)}}function ye(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function be(r,n){return ge(r)||me(r,n)||q(r,n)||ye()}function f(r){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},f(r)}function ve(r){if(Array.isArray(r))return N(r)}function he(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function T(r){return ve(r)||he(r)||q(r)||Ce()}function xe(r,n){if(!(r instanceof n))throw new TypeError("Cannot call a class as a function")}function Pe(r,n){if(f(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var t=e.call(r,n||"default");if(f(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function Ee(r){var n=Pe(r,"string");return f(n)==="symbol"?n:String(n)}function B(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,Ee(t.key),t)}}function Oe(r,n,e){return n&&B(r.prototype,n),e&&B(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function we(r,n){var e=typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=Se(r))||n&&r&&typeof r.length=="number"){e&&(r=e);var t=0,a=function(){};return{s:a,n:function(){return t>=r.length?{done:!0}:{done:!1,value:r[t++]}},e:function(c){throw c},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i=!0,o=!1,s;return{s:function(){e=e.call(r)},n:function(){var c=e.next();return i=c.done,c},e:function(c){o=!0,s=c},f:function(){try{!i&&e.return!=null&&e.return()}finally{if(o)throw s}}}}function Se(r,n){if(r){if(typeof r=="string")return R(r,n);var e=Object.prototype.toString.call(r).slice(8,-1);if(e==="Object"&&r.constructor&&(e=r.constructor.name),e==="Map"||e==="Set")return Array.from(r);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return R(r,n)}}function R(r,n){(n==null||n>r.length)&&(n=r.length);for(var e=0,t=new Array(n);e<n;e++)t[e]=r[e];return t}var je=function(){function r(){xe(this,r)}return Oe(r,null,[{key:"equals",value:function(e,t,a){return a&&e&&f(e)==="object"&&t&&f(t)==="object"?this.resolveFieldData(e,a)===this.resolveFieldData(t,a):this.deepEquals(e,t)}},{key:"deepEquals",value:function(e,t){if(e===t)return!0;if(e&&t&&f(e)=="object"&&f(t)=="object"){var a=Array.isArray(e),i=Array.isArray(t),o,s,l;if(a&&i){if(s=e.length,s!==t.length)return!1;for(o=s;o--!==0;)if(!this.deepEquals(e[o],t[o]))return!1;return!0}if(a!==i)return!1;var c=e instanceof Date,p=t instanceof Date;if(c!==p)return!1;if(c&&p)return e.getTime()===t.getTime();var C=e instanceof RegExp,x=t instanceof RegExp;if(C!==x)return!1;if(C&&x)return e.toString()===t.toString();var v=Object.keys(e);if(s=v.length,s!==Object.keys(t).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,v[o]))return!1;for(o=s;o--!==0;)if(l=v[o],!this.deepEquals(e[l],t[l]))return!1;return!0}return e!==e&&t!==t}},{key:"resolveFieldData",value:function(e,t){if(!e||!t)return null;try{var a=e[t];if(this.isNotEmpty(a))return a}catch{}if(Object.keys(e).length){if(this.isFunction(t))return t(e);if(this.isNotEmpty(e[t]))return e[t];if(t.indexOf(".")===-1)return e[t];for(var i=t.split("."),o=e,s=0,l=i.length;s<l;++s){if(o==null)return null;o=o[i[s]]}return o}return null}},{key:"findDiffKeys",value:function(e,t){return!e||!t?{}:Object.keys(e).filter(function(a){return!t.hasOwnProperty(a)}).reduce(function(a,i){return a[i]=e[i],a},{})}},{key:"reduceKeys",value:function(e,t){var a={};return!e||!t||t.length===0||Object.keys(e).filter(function(i){return t.some(function(o){return i.startsWith(o)})}).forEach(function(i){a[i]=e[i],delete e[i]}),a}},{key:"reorderArray",value:function(e,t,a){e&&t!==a&&(a>=e.length&&(a%=e.length,t%=e.length),e.splice(a,0,e.splice(t,1)[0]))}},{key:"findIndexInList",value:function(e,t,a){var i=this;return t?a?t.findIndex(function(o){return i.equals(o,e,a)}):t.findIndex(function(o){return o===e}):-1}},{key:"getJSXElement",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,a):e}},{key:"getItemValue",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,a):e}},{key:"getProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=e?e[t]:void 0;return i===void 0?a[t]:i}},{key:"getPropCaseInsensitive",value:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=this.toFlatCase(t);for(var o in e)if(e.hasOwnProperty(o)&&this.toFlatCase(o)===i)return e[o];for(var s in a)if(a.hasOwnProperty(s)&&this.toFlatCase(s)===i)return a[s]}},{key:"getMergedProps",value:function(e,t){return Object.assign({},t,e)}},{key:"getDiffProps",value:function(e,t){return this.findDiffKeys(e,t)}},{key:"getPropValue",value:function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,a):e}},{key:"getComponentProp",value:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.isNotEmpty(e)?this.getProp(e.props,t,a):void 0}},{key:"getComponentProps",value:function(e,t){return this.isNotEmpty(e)?this.getMergedProps(e.props,t):void 0}},{key:"getComponentDiffProps",value:function(e,t){return this.isNotEmpty(e)?this.getDiffProps(e.props,t):void 0}},{key:"isValidChild",value:function(e,t,a){if(e){var i=this.getComponentProp(e,"__TYPE")||(e.type?e.type.displayName:void 0),o=i===t;try{var s}catch{}return o}return!1}},{key:"getRefElement",value:function(e){return e?f(e)==="object"&&e.hasOwnProperty("current")?e.current:e:null}},{key:"combinedRefs",value:function(e,t){e&&t&&(typeof t=="function"?t(e.current):t.current=e.current)}},{key:"removeAccents",value:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e}},{key:"toFlatCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}},{key:"toCapitalCase",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e[0].toUpperCase()+e.slice(1):e}},{key:"trim",value:function(e){return this.isNotEmpty(e)&&this.isString(e)?e.trim():e}},{key:"isEmpty",value:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&f(e)==="object"&&Object.keys(e).length===0}},{key:"isNotEmpty",value:function(e){return!this.isEmpty(e)}},{key:"isFunction",value:function(e){return!!(e&&e.constructor&&e.call&&e.apply)}},{key:"isObject",value:function(e){return e!==null&&e instanceof Object&&e.constructor===Object}},{key:"isDate",value:function(e){return e!==null&&e instanceof Date&&e.constructor===Date}},{key:"isArray",value:function(e){return e!==null&&Array.isArray(e)}},{key:"isString",value:function(e){return e!==null&&typeof e=="string"}},{key:"isPrintableCharacter",value:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}},{key:"isLetter",value:function(e){return e&&(e.toUpperCase()!=e.toLowerCase()||e.codePointAt(0)>127)}},{key:"findLast",value:function(e,t){var a;if(this.isNotEmpty(e))try{a=e.findLast(t)}catch{a=T(e).reverse().find(t)}return a}},{key:"findLastIndex",value:function(e,t){var a=-1;if(this.isNotEmpty(e))try{a=e.findLastIndex(t)}catch{a=e.lastIndexOf(T(e).reverse().find(t))}return a}},{key:"sort",value:function(e,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,s=this.compare(e,t,i,a),l=a;return(this.isEmpty(e)||this.isEmpty(t))&&(l=o===1?a:o),l*s}},{key:"compare",value:function(e,t,a){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=-1,s=this.isEmpty(e),l=this.isEmpty(t);return s&&l?o=0:s?o=i:l?o=-i:typeof e=="string"&&typeof t=="string"?o=a(e,t):o=e<t?-1:e>t?1:0,o}},{key:"localeComparator",value:function(e){return new Intl.Collator(e,{numeric:!0}).compare}},{key:"findChildrenByKey",value:function(e,t){var a=we(e),i;try{for(a.s();!(i=a.n()).done;){var o=i.value;if(o.key===t)return o.children||[];if(o.children){var s=this.findChildrenByKey(o.children,t);if(s.length>0)return s}}}catch(l){a.e(l)}finally{a.f()}return[]}},{key:"mutateFieldData",value:function(e,t,a){if(!(f(e)!=="object"||typeof t!="string"))for(var i=t.split("."),o=e,s=0,l=i.length;s<l;++s){if(s+1-l===0){o[i[s]]=a;break}o[i[s]]||(o[i[s]]={}),o=o[i[s]]}}}]),r}(),L=0;function Ie(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pr_id_";return L++,"".concat(r).concat(L)}var V=u.memo(u.forwardRef(function(r,n){var e=ie.getPTI(r),t=u.useState(r.id),a=be(t,2),i=a[0],o=a[1];return u.useEffect(function(){je.isEmpty(i)&&o(Ie("pr_icon_clip_"))},[i]),u.createElement("svg",D({ref:n,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("g",{clipPath:"url(#".concat(i,")")},u.createElement("path",{d:"M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z",fill:"currentColor"})),u.createElement("defs",null,u.createElement("clipPath",{id:i},u.createElement("rect",{width:"14",height:"14",fill:"white"}))))}));V.displayName="SpinnerIcon";function w(){return w=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(r[t]=e[t])}return r},w.apply(this,arguments)}function h(r){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},h(r)}function De(r,n){if(h(r)!=="object"||r===null)return r;var e=r[Symbol.toPrimitive];if(e!==void 0){var t=e.call(r,n||"default");if(h(t)!=="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(r)}function Ne(r){var n=De(r,"string");return h(n)==="symbol"?n:String(n)}function g(r,n,e){return n=Ne(n),n in r?Object.defineProperty(r,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[n]=e,r}var Ae={root:function(n){var e=n.props;return d("p-badge p-component",g({"p-badge-no-gutter":O.isNotEmpty(e.value)&&String(e.value).length===1,"p-badge-dot":O.isEmpty(e.value),"p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge"},"p-badge-".concat(e.severity),e.severity!==null))}},_e=`
@layer primereact {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }
    
    .p-overlay-badge {
        position: relative;
    }
    
    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }
    
    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }
    
    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,P=U.extend({defaultProps:{__TYPE:"Badge",__parentMetadata:null,value:null,severity:null,size:null,style:null,className:null,children:void 0},css:{classes:Ae,styles:_e}});function M(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,t)}return e}function ke(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?M(Object(e),!0).forEach(function(t){g(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):M(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}var H=u.memo(u.forwardRef(function(r,n){var e=u.useContext(K),t=P.getProps(r,e),a=P.setMetaData(ke({props:t},t.__parentMetadata)),i=a.ptm,o=a.cx,s=a.isUnstyled;z(P.css.styles,s,{name:"badge"});var l=u.useRef(null);u.useImperativeHandle(n,function(){return{props:t,getElement:function(){return l.current}}});var c=b({ref:l,style:t.style,className:d(t.className,o("root"))},P.getOtherProps(t),i("root"));return u.createElement("span",c,t.value)}));H.displayName="Badge";var Fe={icon:function(n){var e=n.props;return d("p-button-icon p-c",g({},"p-button-icon-".concat(e.iconPos),e.label))},loadingIcon:function(n){var e=n.props,t=n.className;return d(t,{"p-button-loading-icon":e.loading})},label:"p-button-label p-c",root:function(n){var e,t=n.props,a=n.size,i=n.disabled;return d("p-button p-component",(e={"p-button-icon-only":(t.icon||t.loading)&&!t.label&&!t.children,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-disabled":i,"p-button-loading":t.loading,"p-button-outlined":t.outlined,"p-button-raised":t.raised,"p-button-link":t.link,"p-button-text":t.text,"p-button-rounded":t.rounded,"p-button-loading-label-only":t.loading&&!t.icon&&t.label},g(e,"p-button-loading-".concat(t.iconPos),t.loading&&t.label),g(e,"p-button-".concat(a),a),g(e,"p-button-".concat(t.severity),t.severity),e))}},E=U.extend({defaultProps:{__TYPE:"Button",__parentMetadata:null,badge:null,badgeClassName:null,className:null,children:void 0,disabled:!1,icon:null,iconPos:"left",label:null,link:!1,loading:!1,loadingIcon:null,outlined:!1,raised:!1,rounded:!1,severity:null,size:null,text:!1,tooltip:null,tooltipOptions:null,visible:!0},css:{classes:Fe}});function $(r,n){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(r);n&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable})),e.push.apply(e,t)}return e}function j(r){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?$(Object(e),!0).forEach(function(t){g(r,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(e)):$(Object(e)).forEach(function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(e,t))})}return r}var A=u.memo(u.forwardRef(function(r,n){var e=u.useContext(K),t=E.getProps(r,e),a=t.disabled||t.loading,i=j(j({props:t},t.__parentMetadata),{},{context:{disabled:a}}),o=E.setMetaData(i),s=o.ptm,l=o.cx,c=o.isUnstyled;z(E.css.styles,c,{name:"button",styled:!0});var p=u.useRef(n);if(u.useEffect(function(){O.combinedRefs(p,n)},[p,n]),t.visible===!1)return null;var C=function(){var m=d("p-button-icon p-c",g({},"p-button-icon-".concat(t.iconPos),t.label)),ne=b({className:l("icon")},s("icon"));m=d(m,{"p-button-loading-icon":t.loading});var re=b({className:l("loadingIcon",{className:m})},s("loadingIcon")),ae=t.loading?t.loadingIcon||u.createElement(V,w({},re,{spin:!0})):t.icon;return se.getJSXIcon(ae,j({},ne),{props:t})},x=function(){if(t.label){var m=b({className:l("label")},s("label"));return u.createElement("span",m,t.label)}return!t.children&&!t.label&&u.createElement("span",{className:l("label"),dangerouslySetInnerHTML:{__html:"&nbsp;"}})},v=function(){if(t.badge){var m=b({className:d(t.badgeClassName),value:t.badge,unstyled:t.unstyled,__parentMetadata:{parent:i}},s("badge"));return u.createElement(H,m,t.badge)}return null},Y=!a||t.tooltipOptions&&t.tooltipOptions.showOnDisabled,J=O.isNotEmpty(t.tooltip)&&Y,X={large:"lg",small:"sm"},G=X[t.size],W=C(),Z=x(),Q=v(),ee=t.label?t.label+(t.badge?" "+t.badge:""):t["aria-label"],te=b({ref:p,"aria-label":ee,className:d(t.className,l("root",{size:G,disabled:a})),disabled:a},E.getOtherProps(t),s("root"));return u.createElement(u.Fragment,null,u.createElement("button",te,W,Z,t.children,Q,u.createElement(oe,null)),J&&u.createElement(ue,w({target:p,content:t.tooltip},t.tooltipOptions,{pt:s("tooltip")})))}));A.displayName="Button";const Te="_imageContainer_1xvpv_1",Be="_switchButtons_1xvpv_19",I={imageContainer:Te,switchButtons:Be},$e=()=>{const[r,n]=u.useState(0),e=ce(),{gifList:t,loading:a}=F(l=>l.gifRandomReducer),i=u.useRef(null),{error:o}=F(l=>l.gifRandomReducer);u.useEffect(()=>{e(k())},[e]);const s=()=>{r===t.length-1&&e(k()),n(l=>l+=1)};return u.useEffect(()=>{var l;o&&((l=i.current)==null||l.show({severity:"warn",summary:"Не удалось выполнить запрос",detail:o,life:4500}))},[o]),u.useEffect(()=>()=>{e(le())},[]),y.jsxs("div",{style:{height:"80vh"},className:"w-full flex align-items-center justify-content-center sm:p-3",children:[y.jsx(fe,{ref:i,position:"bottom-left"}),y.jsx(A,{disabled:!r,onClick:()=>n(l=>l-=1),text:!0,icon:"pi pi-angle-left",className:S(I.switchButtons)}),y.jsx("div",{className:S(I.imageContainer),children:a||!t.length?y.jsx(pe,{className:"w-full h-full"}):y.jsx(de,{gif:t[r]})}),y.jsx(A,{onClick:s,text:!0,icon:"pi pi-angle-right",className:S(I.switchButtons)})]})};export{$e as default};
