import{a0 as c,o as n}from"./index.js";import{P as e}from"./App.js";const p=({label:o,isRequired:s=!1,action:t,placeholder:a="",defaultValue:l,Input:r,...i})=>{const u=c();return n.jsxs("div",{className:"sb-input-container",children:[n.jsxs("label",{className:"sb-label !line-clamp-1",htmlFor:u,children:[o," ",s&&"*"]}),n.jsx(r,{defaultValue:l,isRequired:s,action:t,className:"block placeholder:text-neutral/50 outline-0 !h-5 !text-base-content !bg-transparent rounded-none w-full font-medium focus:!outline-0 !py-0 !m-0 !border-0 !min-h-0 !shadow-none",placeholder:a,...i})]})};p.propTypes={label:e.string.isRequired,isRequired:e.bool,action:e.func.isRequired,defaultValue:e.any,placeholder:e.string,Input:e.any.isRequired};export{p as I};
