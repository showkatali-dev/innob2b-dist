import{m as x,e as g,a4 as h,O as D,o as b}from"./index.js";import{P as t,t as y}from"./App.js";import{F as M,S}from"./shortcut-buttons-flatpickr.min.js";const Y=({className:s,defaultValue:o,minDate:n,action:r,isStatic:i=!1,showMonths:u=2,...l})=>{const c=y.useMediaQuery({query:"(max-width: 640px)"}),{system_config:m}=x.useState(),{default_date_format:p}=m||{};return g.createElement(M,{...l,key:h(),options:{minDate:n||null,showMonths:c?1:u,static:i,defaultDate:o,disableMobile:!0,altInput:!0,altFormat:p||"F j, Y",plugins:[S({button:{label:"Clear"},onClick:function(e,a){a.clear(),a.close()}})]},onChange:([e])=>r(D(e).format("YYYY-MM-DD")),render:({defaultValue:e,value:a,...f},d)=>b.jsx("input",{autoComplete:"off",className:s,defaultValue:e,ref:d,value:a,...f})})};Y.propTypes={className:t.string.isRequired,defaultValue:t.string,minDate:t.string,action:t.func,isStatic:t.bool,showMonths:t.number};export{Y as I};