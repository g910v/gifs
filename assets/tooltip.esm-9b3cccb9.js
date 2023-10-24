import{C as ze,r as f,P as Ve,u as Ge,n as Je,o as Qe,p as et,q as V,t as tt,Z as W,c as Ee,D as h,v as ge,O as nt,m as G}from"./index-1b6b103a.js";import{P as rt}from"./ImgContent-52916a08.js";function B(){return B=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},B.apply(this,arguments)}function P(t){"@babel/helpers - typeof";return P=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},P(t)}function ot(t,i){if(P(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,i||"default");if(P(r)!=="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(i==="string"?String:Number)(t)}function it(t){var i=ot(t,"string");return P(i)==="symbol"?i:String(i)}function Se(t,i,n){return i=it(i),i in t?Object.defineProperty(t,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[i]=n,t}function J(t,i){(i==null||i>t.length)&&(i=t.length);for(var n=0,r=new Array(i);n<i;n++)r[n]=t[n];return r}function at(t){if(Array.isArray(t))return J(t)}function ut(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Te(t,i){if(t){if(typeof t=="string")return J(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(t,i)}}function lt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function st(t){return at(t)||ut(t)||Te(t)||lt()}function ct(t){if(Array.isArray(t))return t}function pt(t,i){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,w,T,m,E=[],S=!0,x=!1;try{if(T=(n=n.call(t)).next,i===0){if(Object(n)!==n)return;S=!1}else for(;!(S=(r=T.call(n)).done)&&(E.push(r.value),E.length!==i);S=!0);}catch(y){x=!0,w=y}finally{try{if(!S&&n.return!=null&&(m=n.return(),Object(m)!==m))return}finally{if(x)throw w}}return E}}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O(t,i){return ct(t)||pt(t,i)||Te(t,i)||ft()}var dt={root:function(i){var n=i.positionState,r=i.classNameState;return Ee("p-tooltip p-component",Se({},"p-tooltip-".concat(n),!0),r)},arrow:"p-tooltip-arrow",text:"p-tooltip-text"},vt={arrow:function(i){var n=i.context;return{top:n.bottom?"0":n.right||n.left||!n.right&&!n.left&&!n.top&&!n.bottom?"50%":null,bottom:n.top?"0":null,left:n.right||!n.right&&!n.left&&!n.top&&!n.bottom?"0":n.top||n.bottom?"50%":null,right:n.left?"0":null}}},mt=`
@layer primereact {
    .p-tooltip {
        position: absolute;
        padding: .25em .5rem;
        /* #3687: Tooltip prevent scrollbar flickering */
        top: -9999px;
        left: -9999px;
    }
    
    .p-tooltip.p-tooltip-right,
    .p-tooltip.p-tooltip-left {
        padding: 0 .25rem;
    }
    
    .p-tooltip.p-tooltip-top,
    .p-tooltip.p-tooltip-bottom {
        padding:.25em 0;
    }
    
    .p-tooltip .p-tooltip-text {
       white-space: pre-line;
       word-break: break-word;
    }
    
    .p-tooltip-arrow {
        position: absolute;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
    }
    
    .p-tooltip-right .p-tooltip-arrow {
        top: 50%;
        left: 0;
        margin-top: -.25rem;
        border-width: .25em .25em .25em 0;
    }
    
    .p-tooltip-left .p-tooltip-arrow {
        top: 50%;
        right: 0;
        margin-top: -.25rem;
        border-width: .25em 0 .25em .25rem;
    }
    
    .p-tooltip.p-tooltip-top {
        padding: .25em 0;
    }
    
    .p-tooltip-top .p-tooltip-arrow {
        bottom: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: .25em .25em 0;
    }
    
    .p-tooltip-bottom .p-tooltip-arrow {
        top: 0;
        left: 50%;
        margin-left: -.25rem;
        border-width: 0 .25em .25rem;
    }
}
`,$=ze.extend({defaultProps:{__TYPE:"Tooltip",appendTo:null,at:null,autoHide:!0,autoZIndex:!0,baseZIndex:0,className:null,content:null,disabled:!1,event:null,hideDelay:0,hideEvent:"mouseleave",id:null,mouseTrack:!1,mouseTrackLeft:5,mouseTrackTop:5,my:null,onBeforeHide:null,onBeforeShow:null,onHide:null,onShow:null,position:"right",showDelay:0,showEvent:"mouseenter",showOnDisabled:!1,style:null,target:null,updateDelay:0,children:void 0},css:{classes:dt,styles:mt,inlineStyles:vt}});function we(t,i){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);i&&(r=r.filter(function(w){return Object.getOwnPropertyDescriptor(t,w).enumerable})),n.push.apply(n,r)}return n}function ht(t){for(var i=1;i<arguments.length;i++){var n=arguments[i]!=null?arguments[i]:{};i%2?we(Object(n),!0).forEach(function(r){Se(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}var yt=f.memo(f.forwardRef(function(t,i){var n=f.useContext(Ve),r=$.getProps(t,n),w=f.useState(!1),T=O(w,2),m=T[0],E=T[1],S=f.useState(r.position),x=O(S,2),y=x[0],Z=x[1],xe=f.useState(""),Q=O(xe,2),ee=Q[0],te=Q[1],ne={props:r,state:{visible:m,position:y,className:ee},context:{right:y==="right",left:y==="left",top:y==="top",bottom:y==="bottom"}},C=$.setMetaData(ne),U=C.ptm,k=C.cx,Oe=C.sx,Pe=C.isUnstyled;Ge($.css.styles,Pe,{name:"tooltip"});var s=f.useRef(null),R=f.useRef(null),p=f.useRef(null),D=f.useRef(null),j=f.useRef(!0),re=f.useRef({}),oe=f.useRef(null),Ce=Je({listener:function(e){!h.isTouchDevice()&&g(e)}}),ie=O(Ce,2),Re=ie[0],De=ie[1],je=Qe({target:p.current,listener:function(e){g(e)},when:m}),ae=O(je,2),Ae=ae[0],Le=ae[1],Ie=function(e){return!(r.content||d(e,"tooltip"))},Me=function(e){return!(r.content||d(e,"tooltip")||r.children)},F=function(e){return d(e,"mousetrack")||r.mouseTrack},ue=function(e){return d(e,"disabled")==="true"||se(e,"disabled")||r.disabled},le=function(e){return d(e,"showondisabled")||r.showOnDisabled},A=function(){return d(p.current,"autohide")||r.autoHide},d=function(e,o){return se(e,"data-pr-".concat(o))?e.getAttribute("data-pr-".concat(o)):null},se=function(e,o){return e&&e.hasAttribute(o)},ce=function(e){var o=[d(e,"showevent")||r.showEvent],u=[d(e,"hideevent")||r.hideEvent];if(F(e))o=["mousemove"],u=["mouseleave"];else{var l=d(e,"event")||r.event;l==="focus"&&(o=["focus"],u=["blur"]),l==="both"&&(o=["focus","mouseenter"],u=["blur","mouseleave"])}return{showEvents:o,hideEvents:u}},He=function(e){return d(e,"position")||y},Ne=function(e){var o=d(e,"mousetracktop")||r.mouseTrackTop,u=d(e,"mousetrackleft")||r.mouseTrackLeft;return{top:o,left:u}},pe=function(e,o){if(R.current){var u=d(e,"tooltip")||r.content;u?(R.current.innerHTML="",R.current.appendChild(document.createTextNode(u)),o()):r.children&&o()}},fe=function(e){pe(p.current,function(){var o=oe.current,u=o.pageX,l=o.pageY;r.autoZIndex&&!W.get(s.current)&&W.set("tooltip",s.current,n&&n.autoZIndex||ge.autoZIndex,r.baseZIndex||n&&n.zIndex.tooltip||ge.zIndex.tooltip),s.current.style.left="",s.current.style.top="",A()&&(s.current.style.pointerEvents="none"),(F(p.current)||e=="mouse")&&!D.current&&(D.current={width:h.getOuterWidth(s.current),height:h.getOuterHeight(s.current)}),de(p.current,{x:u,y:l},e)})},L=function(e){p.current=e.currentTarget;var o=ue(p.current),u=Me(le(p.current)&&o?p.current.firstChild:p.current);if(!(u||o))if(oe.current=e,m)I("updateDelay",fe);else{var l=M(r.onBeforeShow,{originalEvent:e,target:p.current});l&&I("showDelay",function(){E(!0),M(r.onShow,{originalEvent:e,target:p.current})})}},g=function(e){if(X(),m){var o=M(r.onBeforeHide,{originalEvent:e,target:p.current});o&&I("hideDelay",function(){!A()&&j.current===!1||(W.clear(s.current),h.removeClass(s.current,"p-tooltip-active"),E(!1),M(r.onHide,{originalEvent:e,target:p.current}))})}},de=function(e,o,u){var l=0,c=0,v=u||y;if((F(e)||v=="mouse")&&o){var b={width:h.getOuterWidth(s.current),height:h.getOuterHeight(s.current)};l=o.x,c=o.y;var he=Ne(e),N=he.top,_=he.left;switch(v){case"left":l-=b.width+_,c-=b.height/2-N;break;case"right":case"mouse":l+=_,c-=b.height/2-N;break;case"top":l-=b.width/2-_,c-=b.height+N;break;case"bottom":l-=b.width/2-_,c+=N;break}l<=0||D.current.width>b.width?(s.current.style.left="0px",s.current.style.right=window.innerWidth-b.width-l+"px"):(s.current.style.right="",s.current.style.left=l+"px"),s.current.style.top=c+"px",h.addClass(s.current,"p-tooltip-active")}else{var K=h.findCollisionPosition(v),Xe=d(e,"my")||r.my||K.my,Ye=d(e,"at")||r.at||K.at;s.current.style.padding="0px",h.flipfitCollision(s.current,e,Xe,Ye,function(q){var ye=q.at,z=ye.x,Ke=ye.y,qe=q.my.x,be=r.at?z!=="center"&&z!==qe?z:Ke:q.at["".concat(K.axis)];s.current.style.padding="",Z(be),_e(be),h.addClass(s.current,"p-tooltip-active")})}},_e=function(e){if(s.current){var o=getComputedStyle(s.current);e==="left"?s.current.style.left=parseFloat(o.left)-parseFloat(o.paddingLeft)*2+"px":e==="top"&&(s.current.style.top=parseFloat(o.top)-parseFloat(o.paddingTop)*2+"px")}},We=function(){A()||(j.current=!1)},$e=function(e){A()||(j.current=!0,g(e))},Be=function(e){if(e){var o=ce(e),u=o.showEvents,l=o.hideEvents,c=ve(e);u.forEach(function(v){return c==null?void 0:c.addEventListener(v,L)}),l.forEach(function(v){return c==null?void 0:c.addEventListener(v,g)})}},Ze=function(e){if(e){var o=ce(e),u=o.showEvents,l=o.hideEvents,c=ve(e);u.forEach(function(v){return c==null?void 0:c.removeEventListener(v,L)}),l.forEach(function(v){return c==null?void 0:c.removeEventListener(v,g)})}},I=function(e,o){X();var u=d(p.current,e.toLowerCase())||r[e];u?re.current["".concat(e)]=setTimeout(function(){return o()},u):o()},M=function(e){if(e){for(var o=arguments.length,u=new Array(o>1?o-1:0),l=1;l<o;l++)u[l-1]=arguments[l];var c=e.apply(void 0,u);return c===void 0&&(c=!0),c}return!0},X=function(){Object.values(re.current).forEach(function(e){return clearTimeout(e)})},ve=function(e){if(e){if(le(e)){if(e.hasWrapper)return e.parentElement;var o=document.createElement("span");return h.addClass(o,"p-tooltip-target-wrapper"),e.parentNode.insertBefore(o,e),o.appendChild(e),e.hasWrapper=!0,o}else if(e.hasWrapper){var u;(u=e.parentElement).replaceWith.apply(u,st(e.parentElement.childNodes)),delete e.hasWrapper}return e}return null},Ue=function(e){H(e),Y(e)},Y=function(e){me(e||r.target,Be)},H=function(e){me(e||r.target,Ze)},me=function(e,o){if(e=nt.getRefElement(e),e)if(h.isElement(e))o(e);else{var u=function(c){var v=h.find(document,c);v.forEach(function(b){o(b)})};e instanceof Array?e.forEach(function(l){u(l)}):u(e)}};et(function(){m&&p.current&&ue(p.current)&&g()}),V(function(){return Y(),function(){H()}},[L,g,r.target]),V(function(){if(m){var a=He(p.current),e=d(p.current,"classname");Z(a),te(e),fe(a),Re(),Ae()}else Z(r.position),te(""),p.current=null,D.current=null,j.current=!0;return function(){De(),Le()}},[m]),V(function(){m&&I("updateDelay",function(){pe(p.current,function(){de(p.current)})})},[r.content]),tt(function(){X(),H(),W.clear(s.current)}),f.useImperativeHandle(i,function(){return{props:r,updateTargetEvents:Ue,loadTargetEvents:Y,unloadTargetEvents:H,show:L,hide:g,getElement:function(){return s.current},getTarget:function(){return p.current}}});var ke=function(){var e=Ie(p.current),o=G({id:r.id,className:Ee(r.className,k("root",{positionState:y,classNameState:ee})),style:r.style,role:"tooltip","aria-hidden":m,onMouseEnter:function(v){return We()},onMouseLeave:function(v){return $e(v)}},$.getOtherProps(r),U("root")),u=G({className:k("arrow"),style:Oe("arrow",ht({},ne))},U("arrow")),l=G({className:k("text")},U("text"));return f.createElement("div",B({ref:s},o),f.createElement("div",u),f.createElement("div",B({ref:R},l),e&&r.children))};if(m){var Fe=ke();return f.createElement(rt,{element:Fe,appendTo:r.appendTo,visible:!0})}return null}));yt.displayName="Tooltip";export{yt as T};
