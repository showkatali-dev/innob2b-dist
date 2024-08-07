import{q as e,aJ as ae,e as y,I as F,Y as Z,aP as ee,aQ as M,aN as L,ab as W,m as K,P,T as B,aR as Ie,o as V,aS as se,a4 as qe,a5 as Re}from"./index-d20e4767.js";import{P as v,a3 as Te,bs as Fe,aV as H,aY as Oe,bt as Me,bu as De,bv as Le,bw as ze,bx as Ee,by as ie,bz as le,bA as ne,bB as re,bC as oe,bD as ce,j as O,S as He,o as Pe,bE as de,bF as me,bG as Be,c as z,bH as Ye,bI as $e,d as J,e as xe,H as Y,bJ as Qe,b as We,bK as Ke,a_ as Ve,a$ as Je,ap as Ge,n as Ue}from"./App-e22994df.js";import{C as D}from"./CustomDivider-35e04667.js";import{P as Xe}from"./index.esm-b0ac7726.js";import{w as Ze}from"./sweetalert2-react-content.es-3af9e28c.js";import{i as ue,j as te}from"./index.esm-eea12382.js";import{T as he}from"./index.esm-0dc5ee46.js";import{H as es}from"./HotelImageSlider-a6ce1845.js";import{S as ss,O as ts}from"./StayDurationAtHotel-f9afdf9c.js";import{R as as}from"./Room-0b6e590b.js";import{C as $}from"./Checkbox-26c9aafd.js";import{b as is,A as ls,I as ns,a as rs,M as os}from"./index.modern-fd8131b1.js";import"./index-968316a2.js";import"./index.esm-3f9d9474.js";const pe=({contacts:l,address:o,name_local:t,property_type:s})=>{const{address_line_1:n,city:i,country:d,local_lang:c,latitude:h,longitude:g}=o||{},{phone_numbers:m,email_address:x,website:a}=l||{};return e.jsxs("div",{className:"px-4",children:[e.jsx("h1",{className:"mb-2 text-xl font-bold",children:"Location"}),t&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx("h2",{className:"text-base font-semibold",children:t}),(c==null?void 0:c.full_address)&&e.jsx(Te,{button:e.jsx("div",{children:e.jsx(Fe,{className:"ml-1 mb-0.5 text-primary"})}),position:"left",isDisabled:!(c!=null&&c.full_address),children:e.jsxs("div",{className:"px-2 py-4",children:[e.jsx("h3",{className:"mb-2 text-base font-semibold",children:"Local Language:"}),e.jsxs("p",{className:"text-sm text-secondary",children:[e.jsx(H,{className:"mr-1"}),c==null?void 0:c.full_address]})]})})]}),e.jsxs("p",{className:"text-sm text-primary",children:[e.jsx(H,{className:"mr-1"}),n,", ",i,", ",d," "]}),e.jsxs("div",{className:"grid gap-2 mt-2 mb-4 text-xs select-none text-neutral",children:[s&&e.jsxs("p",{children:[e.jsx(Oe,{className:"mr-1"})," Property Type: ",s]}),e.jsxs("p",{children:[e.jsx(Me,{className:"mr-1"})," Phone: ",m==null?void 0:m.join(", ")]}),e.jsxs("p",{children:[e.jsx(De,{className:"mr-1"})," Email:"," ",e.jsx("span",{className:"inline-flex flex-wrap gap-1",children:x==null?void 0:x.join(", ")})]}),e.jsxs("p",{children:[e.jsx(Le,{className:"mr-1"})," Website: ",e.jsx("span",{children:a})]})]}),e.jsxs("div",{className:"relative overflow-hidden rounded",children:[e.jsx("img",{src:"https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg",className:"object-cover w-full h-36 rounded-2",alt:""}),e.jsx("div",{className:"absolute top-0 left-0 flex items-center justify-center w-full h-full bg-white/10 ",children:e.jsxs("button",{onClick:async()=>{var p;await ae.update(C=>{C.isShow=!0}),(p=document.getElementById("hotel_map_"+h+"_"+g))==null||p.showModal()},className:"h-10 min-h-0 normal-case rounded shadow-md btn btn-primary shadow-primary/50",children:[e.jsx(H,{})," Show on map"]})})]})]})};pe.propTypes={contacts:v.object.isRequired,address:v.object.isRequired,name_local:v.string};const be=({descriptions:l=[],spoken_languages:o})=>(l==null?void 0:l.every(t=>{var s,n;return((n=(s=t==null?void 0:t.text)==null?void 0:s.trim())==null?void 0:n.length)>0}))===!1&&(o==null?void 0:o.length)===0?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-4",children:[e.jsx("h5",{className:"mb-3 text-xl font-bold",children:"Hotel description"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[(o==null?void 0:o.length)>0&&e.jsx("div",{className:"flex flex-col gap-4 mb-4",children:e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-2 text-base font-medium capitalize",children:[e.jsx(ze,{className:"mr-1"})," Spoken Languages"]}),e.jsx("ul",{className:"grid grid-cols-2 text-sm gap-x-4 gap-y-1",children:o.map(t=>e.jsxs("li",{className:"list-item",children:[e.jsx(Xe,{className:"text-primary"})," ",t.title]},t.title))})]})}),l.map((t,s)=>{var n,i;return((i=(n=t.text)==null?void 0:n.trim())==null?void 0:i.length)>0?e.jsxs("div",{className:"mb-4",children:[e.jsxs("h6",{className:"mb-2 text-base font-medium capitalize",children:[e.jsx(Ee,{className:"mr-1"})," ",t.title]}),e.jsx("p",{className:"text-xs inner-html",dangerouslySetInnerHTML:{__html:t.text}})]},s):null})]})]}),e.jsx(D,{})]});be.propTypes={descriptions:v.array,spoken_languages:v.array};const cs=[{id:1,name:"Amenities"},{id:2,name:"Location"}],fe=({data:l,initialTab:o})=>{const{facilities:t,point_of_interests:s,amenities:n,nearest_airports:i,train_stations:d,connected_locations:c,neighbourhoods:h,stadiums:g}=l||{},[m,x]=y.useState(1);return y.useEffect(()=>{o&&x(o)},[o]),e.jsxs("div",{className:"",children:[e.jsx("ul",{className:"flex items-end justify-start mb-4 text-center border-b rounded-md",children:cs.map(a=>e.jsx("li",{onClick:()=>x(a.id),className:`px-4 py-3 border-b-4 cursor-pointer group ${m===a.id?"active border-primary":"border-transparent"}`,children:e.jsx("h6",{className:"font-medium group-[.active]:text-primary",children:a.name})},a.id))}),e.jsxs("div",{className:"p-4 text-start max-h-[75vh] overflow-auto custom-scrollbar",children:[m===1&&e.jsxs("div",{children:[t&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(ie,{})," Facilities"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:t.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.title},p))})]}),n&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(ue,{})," Amenities"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:n.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.title},p))})]}),s&&e.jsxs("div",{className:"mb-4",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(he,{})," Point of Interests"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:s.map((a,p)=>e.jsx("li",{children:a.name},p))})]})]}),m===2&&e.jsxs("div",{children:[c&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(le,{className:"text-2xl"})," Connected Locations"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:c.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.name},p))})]}),i&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(ne,{className:"text-2xl"})," Nearest Airports"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:i.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.name},p))})]}),d&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(re,{className:"text-2xl"})," Train Station"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:d.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.name},p))})]}),h&&e.jsxs("div",{className:"mb-8",children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(oe,{className:"text-2xl"})," Neighbourhoods"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:h.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.name},p))})]}),g&&e.jsxs("div",{children:[e.jsxs("h6",{className:"mb-3 text-base font-semibold",children:[e.jsx(ce,{className:"text-2xl"})," Stadiums"]}),e.jsx("ul",{className:"grid grid-cols-3 pl-4 text-xs list-disc list-inside gap-x-5 gap-y-2 text-neutral",children:g.map((a,p)=>e.jsx("li",{className:"items-center gap-2 list-item",children:a.name},p))})]})]})]})]})};fe.propTypes={data:v.object,initialTab:v.number};const je=({details:l})=>{const{point_of_interests:o,amenities:t,nearest_airports:s,train_stations:n,connected_locations:i,neighbourhoods:d,stadiums:c,facilities:h}=l||{},g=Ze(He),m=(x,a)=>{g.fire({html:e.jsx(fe,{data:x,initialTab:a}),showConfirmButton:!1,showCloseButton:!0,customClass:{popup:"w-full max-w-5xl",closeButton:"text-red-500"}})};return e.jsxs("div",{className:"px-4",children:[e.jsx("h5",{className:"mb-3 text-sm",children:"What other amenities are there?"}),e.jsxs("div",{className:"grid grid-cols-1 gap-4",children:[h&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(ie,{})," Facilities"]}),e.jsx("ul",{className:"text-xs text-neutral",children:h.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:Z[ee(x.icon)],size:.7})," ",x.title]},a))}),e.jsxs("button",{onClick:()=>m(l),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),t&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(ue,{})," Amenities"]}),e.jsx("ul",{className:"text-xs text-neutral",children:t.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:Z[ee(x.icon)],size:.7})," ",x.title]},a))}),e.jsxs("button",{onClick:()=>m(l),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),o&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(he,{})," Point of Interests"]}),e.jsx("ul",{className:"text-xs text-neutral",children:o.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:M,size:.7})," ",x.name]},a))}),e.jsxs("button",{onClick:()=>m(l),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),i&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(le,{className:"text-2xl"})," Connected Locations"]}),e.jsx("ul",{className:"text-xs text-neutral",children:i.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:M,size:.7})," ",x.name]},a))}),e.jsxs("button",{onClick:()=>m(l,2),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),s&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(ne,{className:"text-2xl"})," Nearest"]}),e.jsx("ul",{className:"text-xs text-neutral",children:s.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:M,size:.7})," ",x.name]},a))}),e.jsxs("button",{onClick:()=>m(l,2),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),n&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(re,{className:"text-2xl"})," Train Station"]}),e.jsx("ul",{className:"text-xs text-neutral",children:n.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:M,size:.7})," ",x.name]},a))}),e.jsxs("button",{onClick:()=>m(l,2),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),d&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(oe,{className:"text-2xl"})," Neighbourhoods"]}),e.jsx("ul",{className:"text-xs text-neutral",children:d.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:M,size:.7})," ",x.name]},a))}),e.jsxs("button",{onClick:()=>m(l,2),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]}),c&&e.jsxs("div",{className:"relative mb-4 h-fit w-fit",children:[e.jsxs("h6",{className:"mb-2 text-base font-normal",children:[e.jsx(ce,{className:"text-2xl"})," Stadiums"]}),e.jsx("ul",{className:"text-xs text-neutral",children:c.slice(0,10).map((x,a)=>e.jsxs("li",{className:"flex items-center gap-2 ",children:[" ",e.jsx(F,{path:M,size:.7})," ",x.name]},a))}),e.jsxs("button",{onClick:()=>m(l,2),className:"absolute bottom-0 right-0 z-10 flex items-center justify-end gap-2 px-2 py-0 pl-8 ml-auto text-xs font-semibold w-fit text-primary bg-gradient-to-r from-base-200/20 via-base-200 to-base-200",children:["See All ",e.jsx(O,{})]})]})]})]})};je.propTypes={details:v.object.isRequired};const ge=({chain:l,brand:o})=>!l&&!o?null:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"px-4",children:e.jsxs("div",{className:`grid rounded-lg border border-secondary/30 overflow-hidden ${l&&o?"grid-cols-2":"grid-cols-1"}`,children:[o&&e.jsxs("div",{className:"text-center flex flex-col",children:[e.jsx("div",{className:"px-2 py-1 text-sm font-semibold text-white bg-secondary relative before:absolute before:w-0 before:h-0 before:border-[15px] before:contents-[''] before:border-secondary  before:border-r-transparent before:z-[1] before:border-b-transparent before:-right-7 before:top-0 ",children:"Brand"}),e.jsx("div",{className:"flex items-center justify-center flex-1 w-full",children:e.jsx("h3",{className:"px-2 py-5 text-lg font-medium text-center",children:o})})]}),l&&e.jsxs("div",{className:"text-center flex flex-col",children:[e.jsx("div",{className:"flex items-center justify-center flex-1 w-full",children:e.jsx("h3",{className:"px-2 py-5 text-lg font-medium text-center",children:l})}),e.jsx("div",{className:"px-2 py-1 text-sm font-semibold text-white bg-secondary relative before:absolute before:w-0 before:h-0 before:border-[15px] before:contents-[''] before:border-secondary  before:border-l-transparent before:z-[1] before:border-t-transparent before:-left-7 before:top-0",children:"Chain"})]})]})}),e.jsx(D,{})]});ge.propTypes={chain:v.string,brand:v.string};const Ne=({policies:l})=>{const{checkin:o,checkout:t,fees:s,know_before_you_go:n,pets:i}=l||{},{begin_time:d,end_time:c,instructions:h,special_instructions:g}=o||{};return(d&&c||(t==null?void 0:t.time)||!!h||!!g||!!(s!=null&&s.optional)||!!n||!!(i!=null&&i.at(0)))===!1?null:e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-4",children:[e.jsx("h4",{className:"mb-3 text-xl font-bold",children:"Policies"}),(d&&c||(t==null?void 0:t.time)||!!h||!!g)&&e.jsxs("div",{className:"mb-4 overflow-hidden border rounded-md border-primary/10",children:[e.jsx("div",{className:"p-3 bg-primary/5",children:e.jsx("h5",{className:"font-medium",children:"Check-in terms and conditions"})}),e.jsxs("div",{className:"p-3",children:[(d&&c||(t==null?void 0:t.time))&&e.jsxs("div",{className:"flex flex-col gap-2 mb-2 text-sm",children:[!!d&&!!c&&e.jsxs("div",{children:[e.jsxs("span",{className:"font-medium",children:[e.jsx(te,{className:"mb-0.5 text-lg text-secondary mr-1"})," ","Check-in:"]})," ",d?e.jsxs(e.Fragment,{children:[d," to ",c]}):"❌"]}),!!(t!=null&&t.time)&&e.jsxs("div",{children:[e.jsxs("span",{className:"font-medium",children:[" ",e.jsx(te,{className:"mb-0.5 text-lg text-secondary mr-1"})," ","Check-out:"]})," ",(t==null?void 0:t.time)||"❌"]})]}),!!h&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Instructions:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:h||"No data available"}})]}),!!g&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Special Instructions:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:g||"No data available"}})]})]})]}),(!!(s!=null&&s.optional)||!!n||!!(i!=null&&i.at(0)))&&e.jsxs("div",{className:"mb-4 overflow-hidden border rounded-md",children:[e.jsx("div",{className:"p-3 bg-primary/5",children:e.jsx("h5",{className:"font-medium",children:"Additional Information"})}),e.jsxs("div",{className:"p-3",children:[!!(s!=null&&s.optional)&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Fees:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:(s==null?void 0:s.optional)||"No data available"}})]}),!!n&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Know before you go:"}),e.jsx("div",{className:"inner-html",dangerouslySetInnerHTML:{__html:n||"No data available"}})]}),!!(i!=null&&i.at(0))&&e.jsxs("div",{className:"text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Pets:"}),i!=null&&i.at(0)?e.jsx("ul",{children:i==null?void 0:i.map((m,x)=>e.jsx("li",{children:m},x))}):e.jsx("div",{children:"No data available"})]})]})]})]}),e.jsx(D,{})]})};Ne.propTypes={policies:v.object};const ye=({details:l})=>{const{contacts:o,address:t,descriptions:s,spoken_languages:n,name_local:i,brand:d,chain:c,policies:h,property_type:g}=l||{};return e.jsxs("aside",{className:"z-10 py-4 rounded-lg lg:col-span-2 bg-base-200 h-fit top-5",children:[e.jsx(pe,{contacts:o,address:t,name_local:i,property_type:g}),e.jsx(D,{}),e.jsx(ge,{brand:d,chain:c}),e.jsx(Ne,{policies:h}),e.jsx(be,{descriptions:s,spoken_languages:n}),e.jsx(je,{details:l})]})};ye.propTypes={details:v.object.isRequired};const ds=()=>{const l=Pe(),{occupancies:o,hotel_id:t,checkIn:s,checkOut:n,guest_nationality:i}=L.useState(),d=async()=>{const c=JSON.stringify({hotel_id:t,checkIn:s,checkOut:n,occupancies:o,guest_nationality:i}),h=btoa(c);l(`/hotel/details?q=${h}`)};return e.jsx("button",{onClick:d,className:"h-full tracking-wider normal-case btn btn-primary",children:"Change"})},ve=({rooms:l})=>e.jsx("div",{id:"roomContainer",className:"flex flex-col gap-4 room-container",children:Object.values(l).map(o=>{const{title:t}=o||{};return e.jsxs("div",{"data-scroll":t,className:"relative duration-100 border border-transparent rounded-lg shadow-sm bg-base-200 collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",id:t,name:t,defaultChecked:!0,className:"!min-h-0"}),e.jsx("div",{className:"collapse-title bg-base-200 p-0 !min-h-0 text-white",children:e.jsx("div",{className:"px-3 py-1 rounded-t-lg bg-primary",children:e.jsx("h5",{className:"mb-1 text-lg font-semibold",children:t})})}),e.jsx("div",{className:"w-full overflow-auto hide_scrollbar p-0.5 collapse-content",children:e.jsxs("table",{className:"w-full text-sm room-table",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-neutral bg-base-200",children:[e.jsx("th",{className:"!text-center py-2 border-y border-y-neutral/10",children:"Your Choice"}),e.jsx("th",{className:"!text-center py-2 border-y border-y-neutral/10",children:"Facilities"}),e.jsx("th",{className:"!text-center py-2 border-y border-y-neutral/10",children:"Price"})]})}),o.base_data.sort((s,n)=>s.summery.sell_total_price-n.summery.sell_total_price).map(s=>e.jsx("tbody",{className:"rounded-lg hover:ring-1 hover:ring-primary",children:e.jsx(as,{room:s})},W()))]})})]},t)})});ve.propTypes={rooms:v.object.isRequired};const Q=({options:l,action:o})=>{const[t,s]=y.useState(!1),[n,i]=y.useState("Any"),[d,c]=y.useState([]),h=y.useRef(),g=(m,x)=>{if(x){d.length===0?i(m):d.length>0?i(`${d.length+1} Options`):i("Any");const a=[...d,m];return c(a),a}else{d.length===2?i(d[0]):d.length>2?i(`${d.length-1} Options`):i("Any");const a=d.filter(p=>p!==m);return c(a),a}};return y.useEffect(()=>{const m=x=>{h.current&&!h.current.contains(x.target)&&s(!1)};return document.addEventListener("click",m),()=>{document.removeEventListener("click",m)}},[]),e.jsxs("div",{ref:h,className:`relative selection-container group ${t?"active":""}`,children:[e.jsxs("button",{type:"button",onClick:()=>s(!t),className:"flex items-center justify-between w-full px-1 text-sm capitalize rounded-xl text-start",children:[n," ",e.jsx("i",{className:"ml-1 inline-flex align-middle items-center pointer-events-none",children:t?e.jsx(de,{}):e.jsx(me,{})})]}),e.jsx("ul",{className:"absolute top-full right-0 z-10 w-64 min-w-full py-1 origin-['50%_0'] border rounded mt-2 shadow-xl max-w-max lists bg-base-200 transition-all scale-90 -translate-y-8 opacity-0 pointer-events-none group-[.active]:pointer-events-auto group-[.active]:scale-100 group-[.active]:translate-y-0 group-[.active]:opacity-100 text-sm",style:{transition:"all .2s cubic-bezier(.5,0,0,1.25), opacity .15s ease-out"},children:l.map(m=>e.jsx("li",{className:"px-4 py-2 cursor-pointer hover:bg-neutral/10 text-xs",children:e.jsx($,{label:m.name,defaultChecked:d.includes(m.name),action:x=>o(g(m.name,x))})},m.id))})]})};Q.propTypes={options:v.array.isRequired,action:v.func.isRequired};const _e=({category_1:l,category_2:o,action_1:t,action_2:s})=>{const[n,i]=y.useState(!1),[d,c]=y.useState("Any"),[h,g]=y.useState([]),m=y.useRef(),x=(a,p,C)=>{var I,k,A,_;if(p){const N=[...h,a];return g(N),N.length===1?c(N[0]):N.length>1?c(`${N.length} Options`):c("Any"),C===l.name?((I=l.options.filter(w=>N.includes(w.name)))==null?void 0:I.map(w=>w.name))||[]:((k=o.options.filter(w=>N.includes(w.name)))==null?void 0:k.map(w=>w.name))||[]}else{const N=h.filter(w=>w!==a);return g(N),N.length===1?c(N[0]):N.length>1?c(`${N.length} Options`):c("Any"),C===l.name?((A=l.options.filter(w=>N.includes(w.name)))==null?void 0:A.map(w=>w.name))||[]:((_=o.options.filter(w=>N.includes(w.name)))==null?void 0:_.map(w=>w.name))||[]}};return y.useEffect(()=>{const a=p=>{m.current&&!m.current.contains(p.target)&&i(!1)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[]),e.jsxs("div",{ref:m,className:`relative selection-container group ${n?"active":""}`,children:[e.jsxs("button",{type:"button",onClick:()=>i(!n),className:"flex items-center justify-between w-full px-1 text-sm capitalize rounded-xl text-start",children:[d," ",e.jsx("i",{className:"ml-1 inline-flex align-middle items-center pointer-events-none",children:n?e.jsx(de,{}):e.jsx(me,{})})]}),e.jsxs("ul",{className:"absolute top-full right-0 z-10 w-64 min-w-full py-1 origin-['50%_0'] border rounded mt-2 shadow-xl max-w-max lists bg-base-200 transition-all scale-90 -translate-y-8 opacity-0 pointer-events-none group-[.active]:pointer-events-auto group-[.active]:scale-100 group-[.active]:translate-y-0 group-[.active]:opacity-100 text-sm",style:{transition:"all .2s cubic-bezier(.5,0,0,1.25), opacity .15s ease-out"},children:[e.jsx("h2",{className:"px-2 mb-1 font-semibold",children:l.name}),l.options.map(a=>e.jsx("li",{className:"px-4 py-2 cursor-pointer text-xs hover:bg-neutral/10",children:e.jsx($,{label:a.name,defaultChecked:h.includes(a.name),action:p=>t(x(a.name,p,l.name))})},a.id)),e.jsx("h2",{className:"px-2 mt-3 mb-1 font-semibold",children:o.name}),o.options.map(a=>e.jsx("li",{className:"px-4 py-2 cursor-pointer text-xs hover:bg-neutral/10",children:e.jsx($,{label:a.name,defaultChecked:h.includes(a.name),action:p=>s(x(a.name,p,o.name))})},a.id))]})]})};_e.propTypes={category_1:v.object.isRequired,category_2:v.object.isRequired,action_1:v.func.isRequired,action_2:v.func.isRequired};const ms=({rooms:l})=>{const[o,t]=y.useState(!1),s=y.useRef();return y.useEffect(()=>{const n=i=>{o&&s.current&&!s.current.contains(i.target)&&t(!1)};return document.addEventListener("click",n),()=>document.removeEventListener("click",n)},[o]),!l||Object.keys(l).length===0?null:e.jsxs("div",{ref:s,className:"fixed bottom-4 left-8 z-30 max-lg:hidden",children:[e.jsx("div",{onClick:()=>t(!o),className:"flex w-10 shadow-md h-10 bg-secondary rounded-full justify-center items-center text-xl text-white cursor-pointer",children:e.jsx(Be,{})}),e.jsx("div",{onClick:n=>{n.stopPropagation(),t(!0)},className:z("absolute -top-4 -translate-y-full -left-2 shadow-lg shadow-secondary border-black flex items-center justify-center  border bg-base-200 p-2 hover:bg-secondary hover:text-white origin-bottom-left rounded-full text-xs w-[150px] font-medium cursor-pointer scale-0 duration-300",!o&&"scale-100"),children:"Room Categories"}),e.jsx("ul",{className:z("rounded flex flex-col p-1 absolute -top-4 -translate-y-full -left-2 shadow-lg shadow-secondary/40 bg-base-200 scale-0 origin-bottom-left duration-300",o&&"scale-100"),children:Object.values(l).map(n=>{var i;return e.jsxs("li",{onClick:()=>{const d=document.querySelector(`div[data-scroll="${n==null?void 0:n.title}"]`),c=(d==null?void 0:d.getBoundingClientRect().top)+window.scrollY-75;window.scrollTo({top:c,behavior:"smooth"})},className:"rounded flex gap-1 text-sm whitespace-nowrap w-full items-center px-4 py-2 hover:bg-neutral/10 cursor-pointer",children:[n==null?void 0:n.title," ",e.jsxs("span",{className:"text-xs text-neutral font-normal",children:["(",(i=n==null?void 0:n.base_data)==null?void 0:i.length,")"]})]},n==null?void 0:n.title)})})]})},we=({validation_data:l})=>{const{data:o,hotel_contents:t}=l||{},{rooms:s,total_rooms:n}=o||{},{room_type:i}=t||{},[d,c]=y.useState(s),[h,g]=y.useState([]),[m,x]=y.useState([]),[a,p]=y.useState([]),[C,I]=y.useState([]),[k,A]=y.useState("category");if(y.useEffect(()=>{if((s==null?void 0:s.length)>0){const r=s.reduce((u,b)=>{const j={...b};return j.data=j.data.filter(f=>{var S,q,G,U,X;return(m.length===0||m.includes((q=(S=b==null?void 0:b.summery)==null?void 0:S.policies)==null?void 0:q.summery))&&(h.length===0||h.includes(f==null?void 0:f.rate_type))&&(a.length===0||a.includes((U=(G=f==null?void 0:f.bed_option)==null?void 0:G.at(0))==null?void 0:U.title))&&(C.length===0||((X=f==null?void 0:f.amenities)==null?void 0:X.some(E=>C.includes(E==null?void 0:E.title))))}),j.data.length>0&&u.push(j),u},[]);c(r)}},[m,h,a,C,s]),!(n>0))return e.jsx("p",{className:"py-12 text-center text-error",children:"Sorry! Currently no rooms available"});const _=s.reduce((r,u)=>{var b;return(b=u==null?void 0:u.data)==null||b.forEach(j=>{const f=j==null?void 0:j.rate_type;f&&r.includes(f)===!1&&r.push(f)}),r},[]).filter(r=>r),N=s.reduce((r,u)=>{var j,f;const b=(f=(j=u==null?void 0:u.summery)==null?void 0:j.policies)==null?void 0:f.summery;return b&&r.includes(b)===!1&&r.push(b),r},[]),w=s.reduce((r,u)=>{var b;return(b=u==null?void 0:u.data)==null||b.forEach(j=>{var S,q;const f=(q=(S=j==null?void 0:j.bed_option)==null?void 0:S.at(0))==null?void 0:q.title;f&&r.includes(f)===!1&&r.push(f)}),r},[]).filter(r=>r),R=s.reduce((r,u)=>{var b;return(b=u==null?void 0:u.data)==null||b.forEach(j=>{var f;(f=j==null?void 0:j.amenities)==null||f.forEach(S=>{const q=S==null?void 0:S.title;q&&r.includes(q)===!1&&r.push(q)})}),r},[]).filter(r=>r);k==="category"?d.sort((r,u)=>{var b,j;return((b=r==null?void 0:r.summery)==null?void 0:b.room_category_priority)-((j=u==null?void 0:u.summery)==null?void 0:j.room_category_priority)}):d.sort((r,u)=>{var b,j;return((b=r==null?void 0:r.summery)==null?void 0:b.sell_total_price)-((j=u==null?void 0:u.summery)==null?void 0:j.sell_total_price)});const T=d.reduce((r,u)=>{if(u.data=u.data.map(b=>(b.room_content=i==null?void 0:i.find(j=>j.room_id===String(b.room_number)),b)),k==="category"){const b=u.summery.room_category;r[b]?r[b].base_data=[...r[b].base_data,u]:r[b]={title:u.summery.room_category_name,base_data:[u]}}else r.price_low_to_high?r.price_low_to_high.base_data=[...r.price_low_to_high.base_data,u]:r.price_low_to_high={title:"Price Low to High",base_data:[u]};return r},{});return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"px-4 py-4 mb-4 rounded-lg bg-base-200",children:[e.jsx("h5",{className:"mb-2 text-xl font-medium",children:"Filter Rooms"}),e.jsx("div",{className:"mb-3 rounded-lg",children:e.jsx("div",{className:"flex gap-3",children:e.jsx("div",{className:"flex-1",children:e.jsxs("div",{className:"grid grid-flow-row gap-3 sm:grid-flow-col",children:[_.length>0&&e.jsxs("div",{className:"text-sm sb-input-container",children:[e.jsx("label",{htmlFor:"",className:"sb-label",children:"Meals"}),e.jsx(Q,{options:_.map((r,u)=>({id:u,name:r})),action:r=>g(r)})]}),N.length>0&&e.jsxs("div",{className:"text-sm sb-input-container",children:[e.jsx("label",{htmlFor:"",className:"sb-label",children:"Cancellation Policy"}),e.jsx(Q,{options:N.map((r,u)=>({id:u,name:r})),action:r=>x(r)})]}),w.length>0&&e.jsxs("div",{className:"text-sm sb-input-container",children:[e.jsx("label",{htmlFor:"",className:"sb-label",children:"Beds & Amenities"}),e.jsx(_e,{category_1:{name:"Bed",options:w.map((r,u)=>({id:u,name:r}))},action_1:r=>p(r),category_2:{name:"Amenities",options:R.map((r,u)=>({id:u,name:r}))},action_2:r=>I(r)})]})]})})})})]}),e.jsxs("ul",{className:"px-4 py-4 mb-4 rounded-lg bg-base-200 flex items-center justify-end gap-3 flex-wrap",children:[e.jsx("li",{className:"font-semibold text-sm",children:"Sort By"}),e.jsxs("li",{onClick:()=>A("category"),className:z("btn btn-sm btn-primary normal-case rounded-none no-animation duration-0",k!=="category"&&"btn-outline"),children:[e.jsx(Ye,{}),"Category"]}),e.jsxs("li",{onClick:()=>A("price"),className:z("btn btn-sm btn-primary normal-case rounded-none no-animation duration-0",k!=="price"&&"btn-outline"),children:[e.jsx($e,{})," Price"," ",e.jsx("span",{className:"text-xs font-normal",children:"(low to high)"})]})]}),k==="category"&&e.jsx(ms,{rooms:T}),e.jsx(ve,{rooms:T})]})};we.propTypes={validation_data:v.object.isRequired};const Se=({selectedQuote:l,setSelectedQuote:o})=>{const{axiosInstance:t}=J(),[s,n]=y.useState(!1),[i,d]=y.useState(!1),{user_data:{member_id:c,email:h,fullname:g,isd_code:m,mobile:x,address:a,country:p}}=K.useState(),{data:C=[],isLoading:I,refetch:k}=xe({queryKey:["QUOTE_LIST",c],queryFn:async()=>{var N;const _=await t.post("/cart-quotes/list",{member_id:c});if(((N=_.data)==null?void 0:N.status)==="success")return _.data.data}}),A=async _=>{var T;if(_.preventDefault(),i)return;d(!0);const R={quotes_title:_.target.quotes_title.value,member_id:c,cus_name:g,cus_address:a,cus_country:p,cus_isd:m,cus_phone:x,cus_email:h,quotes_validity:P().add(30,"days").format("YYYY-MM-DD"),service_charge_type:"RATIO",service_charge:"1"};try{const r=await t.post("/cart-quotes/create",R);((T=r.data)==null?void 0:T.status)==="success"&&(k(),o(r.data.quotes_id),n(!1))}catch(r){B("error","Failed",r.message)}finally{d(!1)}};return e.jsxs("div",{className:"mb-4",children:[e.jsx("h5",{className:"mb-2 text-lg font-semibold",children:"Select a quote:"}),e.jsx("ul",{className:"w-full px-3 mb-4 overflow-auto rounded-none max-h-40 join join-vertical",children:I?e.jsxs("div",{className:"flex items-center justify-center h-40",children:[e.jsx(Y,{className:"mr-2 animate-spin"})," Loading..."]}):C==null?void 0:C.map((_,N)=>e.jsxs("li",{onClick:()=>o(_.quotes_id),className:"flex items-center justify-between p-2 join-item border-y border-primary/10 hover:bg-primary/10 text-primary cursor-pointer",children:[e.jsxs("h6",{className:"text-sm font-semibold",children:[N+1,". ",_==null?void 0:_.quotes_title," - ",_==null?void 0:_.quotes_id]}),l===_.quotes_id?e.jsx(Qe,{className:"ml-2"}):null]},_.quotes_id))}),e.jsx("div",{className:"flex flex-col gap-2 px-3 mb-2",children:e.jsx("form",{onSubmit:A,className:"join",children:s?e.jsxs(e.Fragment,{children:[e.jsx("input",{autoComplete:"off",type:"text",name:"quotes_title",placeholder:"Enter new quote title",className:"w-full h-10 bg-transparent rounded input input-bordered input-primary join-item focus:outline-0"}),e.jsx("button",{type:"submit",className:"h-10 min-h-0 normal-case btn btn-primary join-item no-animation",children:i?e.jsxs(e.Fragment,{children:[e.jsx(Y,{className:"mr-2 animate-spin"})," Creating..."]}):"Create"})]}):e.jsx("button",{onClick:()=>n(!0),className:"w-full h-10 min-h-0 border-dashed btn btn-primary btn-outline",children:"+ Create new Quote"})})})]})};Se.propTypes={selectedQuote:v.any,setSelectedQuote:v.func.isRequired};const xs=()=>{const{active:l,data:o}=Ie.useState(p=>p.modal),{system_config:t}=V.useState(),{room_tracking_id:s,tracking_id:n,room_category_name:i}=(o==null?void 0:o.summery)||{},{user_data:{member_id:d}}=K.useState(),[c,h]=y.useState(null),[g,m]=y.useState(!1),{axiosInstance:x}=J(),a=async()=>{var p,C,I;if(!(!c||g)){m(!0);try{const k={member_id:d,quotes_id:c,order_view:"1",group_id:"1",group_title:"Day 1",item_title:i,service_type:"HOTEL",tracking_id:n,room_tracking_id:s,margin_type:"FIXED",margin_value:"1",notes:"n/a"},A=await x.post("/cart-quotes/item-add",k);if(((p=A==null?void 0:A.data)==null?void 0:p.status)==="success")B("success","Added!",(C=A.data)==null?void 0:C.reason);else throw new Error((I=A.data)==null?void 0:I.reason)}catch(k){B("error","Adding Failed!",k.message)}finally{m(!1)}}};return e.jsx("div",{className:"modal",open:l==="quotes",children:e.jsxs("div",{className:"max-w-3xl p-0 rounded-md modal-box bg-base-200",children:[e.jsxs("div",{className:"flex items-start justify-between px-4 py-2 text-white rounded-t-md bg-primary-focus",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Add to Quotes"}),e.jsx("button",{onClick:se,className:"btn btn-sm btn-circle btn-ghost",children:e.jsx(We,{})})]}),e.jsx("div",{className:"p-5 max-h-[60vh] h-full overflow-auto",children:e.jsxs("div",{className:"px-3",children:[e.jsx(Se,{selectedQuote:c,setSelectedQuote:h}),e.jsx("div",{className:"flex justify-center",children:c&&(t==null?void 0:t.show_cart_quotes)==="YES"&&e.jsx("button",{onClick:a,className:"w-full min-h-0 font-normal normal-case shadow-lg btn btn-primary h-11 shadow-primary/30",children:g?e.jsxs(e.Fragment,{children:[" ",e.jsx(Y,{className:"mr-2 animate-spin"})," Adding..."]}):"Add this to Quotes"})})]})}),e.jsx("div",{className:"flex justify-end gap-3 px-4 py-2 mt-2 border-t bg-base-300",children:e.jsx("button",{onClick:se,className:"min-h-0 normal-case bg-white btn h-11 hover:bg-white border-primary hover:border-primary",children:"Close"})})]})})},Ce=({hotelData:l})=>{const{checkIn:o,checkOut:t}=L.useState(),{hotel_contents:s}=l||{},{star_rating:n}=s||{},i=Array.isArray(s==null?void 0:s.hotel_photo)?s==null?void 0:s.hotel_photo:s!=null&&s.hotel_photo?Object.values(s==null?void 0:s.hotel_photo):[];return e.jsxs("section",{className:"lg:col-span-3",children:[e.jsxs("div",{className:"py-4 mb-5 rounded-lg bg-base-200",children:[e.jsxs("div",{className:"relative flex items-center gap-3 px-4 pr-20 mb-4",children:[e.jsxs("h5",{className:"flex items-start gap-2 text-xl font-semibold",children:[e.jsx(Ke,{className:"my-1 text-2xl"})," ",s==null?void 0:s.name]}),e.jsx("div",{className:"absolute flex flex-col items-end right-4 top-2",children:e.jsxs("div",{className:"flex text-warning flex-nowrap",children:[Array(Math.floor(n||0)).fill("").map((d,c)=>e.jsx(Ve,{},c)),Number(n)%Math.floor(n)>0&&e.jsx(Je,{})]})})]}),e.jsx(es,{images:i}),e.jsx(D,{}),e.jsxs("div",{className:"grid grid-flow-col gap-5 mx-4 rounded-md",children:[e.jsx(ss,{label:"Stay Duration",minDate:"today",defaultValue:[o,t],action:d=>L.update(c=>{c.checkIn=P(new Date(d[0])).format("YYYY-MM-DD"),c.checkOut=P(new Date(d[1])).format("YYYY-MM-DD")})}),e.jsx(ts,{storeName:"hotel_details_options"}),e.jsx(ds,{})]})]}),e.jsx(we,{validation_data:l}),e.jsx(xs,{})]})};Ce.propTypes={hotelData:v.object.isRequired};const ke=({hotel_info:l,position:o})=>{const{room_pic:t,hotel_name:s}=l||{},[n,i]=y.useState(!0),[d,c]=is();return e.jsxs(e.Fragment,{children:[e.jsx(ls,{ref:d,onClick:()=>i(!0),position:o,title:"AdvancedMarker that opens an Infowindow when clicked."}),n&&e.jsx(ns,{anchor:c,maxWidth:200,onCloseClick:()=>i(!1),children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("img",{className:"w-8 h-8 rounded-full",src:t,alt:""}),e.jsx("h1",{className:"text-sm font-semibold",children:s})]})})]})};ke.propTypes={hotel_info:v.object,position:v.object.isRequired};const us=W(),Ae=({position:l,hotel_info:o})=>{const{system_config:t}=V.useState(),{isShow:s}=ae.useState(),n=s?location.hostname==="localhost"?"AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg":t==null?void 0:t.google_map_key:null;return n?e.jsx(rs,{apiKey:n,children:e.jsx("dialog",{id:`hotel_map_${l.lat}_${l.lng}`,className:"modal",children:e.jsxs("div",{className:"max-w-5xl p-4 rounded-md modal-box bg-base-200",children:[e.jsx("div",{children:e.jsx("button",{onClick:()=>{var i;return(i=document.getElementById(`hotel_map_${l.lat}_${l.lng}`))==null?void 0:i.close()},className:"absolute z-20 btn btn-sm btn-circle btn-ghost right-2 top-2 text-error bg-black/10",children:"✕"})}),e.jsx("div",{className:"max-h-[70vh] h-full overflow-auto",children:e.jsx(os,{mapId:us,center:l,zoom:15,className:"min-h-[400px] h-full",children:e.jsx(ke,{hotel_info:o,position:l})})})]})})}):null};Ae.propTypes={position:v.object.isRequired,hotel_info:v.object.isRequired};const As=()=>{var p;Ge();const{site_title:l}=V.useState(),{axiosInstance:o}=J(),[t]=Ue(),{user_data:{member_id:s}}=K.useState(),n=t.get("q"),{data:i,isLoading:d,error:c}=xe(["HOTEL_VALIDATION_DETAILS",n,s],async()=>{var k,A,_,N,w;const C=atob(n),I=await o.post("/hotel/rooms",JSON.parse(C));if(((k=I==null?void 0:I.data)==null?void 0:k.status)==="success"){const R=await o.post("/hotel/validation-get-detail",{tracking_id:I.data.tracking_id,member_id:s});if(((A=R.data)==null?void 0:A.status)==="success"){const{search_parameter:{hotel_id:T,checkIn:r,checkOut:u,occupancies:b,guest_nationality:j}}=R.data;return L.update(f=>{f.tracking_id=I.data.tracking_id,f.hotel_id=T,f.checkIn=r,f.checkOut=u,f.occupancies=b.map(S=>{const q={};return q.id=W(),q.adult=Number(S.adult),q.child=S.child?Number(S.child):0,q.child_age=S.child_age?S.child_age:[],q}),f.guest_nationality=j}),(N=(_=R.data)==null?void 0:_.hotel_contents)!=null&&N.name||(R.data.hotel_contents=await o.post("/hotel/get-hotel-details",{hotel_id:T}).then(f=>{var S;return(S=f.data)==null?void 0:S.data})),R.data}else throw{...R,message:((w=R.data)==null?void 0:w.reason)||"Request failed!"}}});if(d)return e.jsx(qe,{});if(c)throw c;const{address:h,name:g,primary_photo:m}=(i==null?void 0:i.hotel_contents)||{},x={lat:Number(h==null?void 0:h.latitude),lng:Number(h==null?void 0:h.longitude)},a={room_pic:m||"/no_image.jpg",hotel_name:g};return e.jsxs(e.Fragment,{children:[e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(Re,{children:e.jsxs("title",{children:[((p=i==null?void 0:i.hotel_contents)==null?void 0:p.name)||"Hotel Details",l?" - "+l:""]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-3 lg:grid-cols-5",children:[e.jsx(Ce,{hotelData:i}),e.jsx(ye,{details:i.hotel_contents})]})]}),e.jsx(Ae,{position:x,hotel_info:a})]})};export{As as default};
