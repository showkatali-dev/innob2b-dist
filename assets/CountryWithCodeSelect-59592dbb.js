import{q as i}from"./index-40b4770e.js";import{e as l,aa as m}from"./App-ab507ef2.js";import{S as d}from"./SingleSelect-75481dc3.js";const f=({name:o,action:a,placeholder:e,className:r,...n})=>{const{data:s=[]}=l(["COUNTRY"],async()=>{const u=window.location.origin,c=await m.get(`${u}/country.json`);return Object.values(c.data.data).map(t=>({label:`${t.country_name} (${t.country_code})`,value:t.country_code}))});return i.jsx(d,{options:s,className:r,name:o,action:a,placeholder:e,defaultValue:!0,...n})};export{f as C};