import{r as a,i as o,j as s}from"./index-0cdc1f3e.js";import{u as c,I as i}from"./ImgContent-e7f107b7.js";const p=({gifList:l})=>{const r=c(),t=a.useCallback(e=>{const n=e.target;n.documentElement.scrollHeight-(n.documentElement.scrollTop+window.innerHeight)<100&&r(o())},[r]);return a.useEffect(()=>(document.addEventListener("scroll",t),()=>{document.removeEventListener("scroll",t)}),[t]),s.jsx("div",{className:"gap-3 lg:w-9 w-11",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(18rem, 1fr))"},children:l.map(e=>s.jsx("div",{className:"h-20rem",children:s.jsx(i,{gif:e},e.key)},e.key))})};export{p as G};
