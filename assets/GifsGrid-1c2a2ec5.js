import{r as t,h as c,j as s}from"./index-30ed3816.js";import{u as m,a as d,T as u,I as p}from"./ImgContent-1a6f197f.js";const g=({gifList:i})=>{const n=m(),a=t.useRef(null),{error:r}=d(e=>e.gifGridReducer),o=t.useCallback(e=>{const l=e.target;l.documentElement.scrollHeight-(l.documentElement.scrollTop+window.innerHeight)<100&&n(c())},[n]);return t.useEffect(()=>(document.addEventListener("scroll",o),()=>{document.removeEventListener("scroll",o)}),[o]),t.useEffect(()=>{var e;r&&((e=a.current)==null||e.show({severity:"warn",summary:"Не удалось выполнить запрос",detail:r,life:4500}))},[r]),s.jsxs(s.Fragment,{children:[s.jsx(u,{ref:a,position:"bottom-left"}),s.jsx("div",{className:"gap-3 lg:w-9 w-11",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(18rem, 1fr))"},children:i.map(e=>s.jsx("div",{className:"h-20rem",children:s.jsx(p,{gif:e},e.key)},e.key))})]})};export{g as G};