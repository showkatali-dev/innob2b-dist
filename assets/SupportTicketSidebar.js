import{o as t}from"./index.js";import{af as r,cs as n,ct as s}from"./App.js";const c=[{id:1,title:"Support Ticket",icon:t.jsx(n,{}),link:"/support-ticket"},{id:2,title:"Add New Ticket",icon:t.jsx(s,{}),link:"/support-ticket/create-ticket"}],p=()=>t.jsx("ul",{className:"sm:sticky py-4 pr-4 space-y-1 text-sm font-medium border-r top-20 h-fit text-neutral sm:min-h-[calc(100vh-80px)]",children:c.map(e=>t.jsx("li",{children:t.jsxs(r,{to:e.link,end:!0,className:({isActive:i})=>`inline-block w-full px-5 py-3 rounded hover:bg-neutral/5 ${i?"text-primary bg-neutral/5":""}`,children:[e.icon," ",e.title]})},e.id))});export{p as S};
