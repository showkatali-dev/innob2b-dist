import{o as t}from"./index.js";import{P as s,a6 as l,K as n}from"./App.js";import{a as o,b as m}from"./index.esm4.js";const x=({height:r="300px",emoji:e="sad",text:a="Sorry, we couldn't find any results",btn:i=!1})=>t.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 text-center",style:{height:r},children:[e==="sad"&&t.jsx(o,{className:"w-20 h-20 text-neutral"}),e==="smile"&&t.jsx(m,{className:"w-20 h-20 text-neutral"}),t.jsx("p",{className:"text-neutral sm:text-lg",children:a}),i&&t.jsxs(l,{to:"/",className:"mt-4 rounded-md btn btn-primary btn-outline",children:[t.jsx(n,{})," Go Back to Search"]})]});x.propTypes={height:s.string,emoji:s.string,text:s.string,btn:s.bool};export{x as N};
