import{r as t,f,e as m,s as d,j as r,g as h,h as x}from"./index-0cdc1f3e.js";import{u as g,a as j,b as E,B as R}from"./ImgContent-e7f107b7.js";import{G as w}from"./GifsGrid-c33ec68d.js";const b=()=>{const e=g(),{gifList:s,loading:n,offset:l,totalRecord:u,fetching:i,error:o}=j(a=>a.gifGridReducer),c=t.useRef(null),p=()=>{e(x()),e(f())};return t.useEffect(()=>{e(f())},[e]),t.useEffect(()=>{i&&(s==null?void 0:s.length)!==u&&(e(m()),e(f()))},[i,e]),t.useEffect(()=>()=>{e(d())},[]),t.useEffect(()=>{var a;o&&((a=c.current)==null||a.show({severity:"warn",summary:"Не удалось выполнить запрос",detail:o,life:4500}))},[o]),r.jsxs("div",{className:"w-full flex flex-column align-items-center justify-content-center p-3 lg:pt-6 pt-5",children:[r.jsx(E,{ref:c,position:"bottom-left"}),!!s&&r.jsx(w,{gifList:s}),!!l&&n&&r.jsx(h,{className:"w-5rem mt-5",strokeWidth:"3"}),o&&r.jsx(R,{text:!0,icon:"pi pi-refresh",onClick:p})]})};export{b as default};
