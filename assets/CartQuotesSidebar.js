import{j as t,aV as a,cO as n}from"./index.js";const s=[{id:1,title:"Cart & Quotes",icon:t.jsx(n,{className:"mr-1"}),link:"/cart-quotes"}],o=()=>t.jsx("ul",{className:"h-full py-4 pr-4 space-y-1 text-sm font-medium border-r text-neutral",children:s.map(e=>t.jsx("li",{children:t.jsxs(a,{to:e.link,end:!0,className:({isActive:r})=>`inline-block w-full px-5 py-3 rounded hover:bg-neutral/5 ${r?"text-primary bg-neutral/5":""}`,children:[e.icon," ",e.title]})},e.id))});export{o as C};
