import{o as e}from"./index.js";import{P as c}from"./App.js";const t=({label:o,defaultChecked:s,action:r})=>e.jsxs("label",{className:"flex items-center gap-0.5 cursor-pointer",children:[e.jsx("input",{autoComplete:"off",type:"checkbox",checked:s,onClick:a=>r(a.target.checked),className:"rounded-sm checkbox checkbox-xs checkbox-primary"}),e.jsx("span",{className:"capitalize select-none",children:o})]});t.propTypes={label:c.any.isRequired,defaultChecked:c.bool,action:c.func.isRequired};export{t as C};