import{o as i}from"./index.js";import{b as l,s as m}from"./App.js";import{S as d}from"./SingleSelect.js";const f=({name:t,action:a,placeholder:e,className:r,...n})=>{const{data:s=[]}=l(["COUNTRY"],async()=>{const u=window.location.origin,c=await m.get(`${u}/country.json`);return Object.values(c.data.data).map(o=>({label:`${o.country_name} (${o.country_code})`,value:o.country_code}))});return i.jsx(d,{options:s,className:r,name:t,action:a,placeholder:e,defaultValue:!0,...n})};export{f as C};
