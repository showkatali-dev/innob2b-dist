import{e as m,a2 as d,q as e,o as P,aM as B,aI as N,T as $,aN as R,ab as te,aO as ae,P as se}from"./index-40b4770e.js";import{P as g,d as S,b8 as O,b9 as D,ba as q,bb as A,o as M,u as f,bc as L,bd as F,be as E,bf as K,bg as J,bh as z,bi as ne,bj as le}from"./App-ab507ef2.js";import{C as W,a as Y,b as k}from"./SingleSelect-75481dc3.js";import{D as U,I as Z,b as H,c as oe}from"./SuppliersSelection2-07ebf291.js";import{C as G}from"./CountryWithCodeSelect-59592dbb.js";import{P as ie}from"./PrimaryTabsWithIcon-180f2a52.js";import{I as re}from"./StayDurationAtHotel-61ff88d7.js";const _=[{location:"Bangkok Hospital, Soi Phetchaburi 47 Yaek 10, Bang Kapi, Huai Khwang, Bangkok, Thailand"},{location:"Bangkok Hospital Phuket, Hongyokutis Road, Talat Yai, Mueang Phuket District, Phuket, Thailand"},{location:"Bangkok Hospital Pattaya, Sukhumvit Road, Pattaya City, Bang Lamung District, Chon Buri, Thailand"},{location:"Bangkok Hospital Siriroj, Chalermprakiat Ror 9 Road, Wichit, Mueang Phuket District, Phuket, Thailand"},{location:"Bangkok Hospital Hua Hin, Phet Kasem Road, Hua Hin, Hua Hin District, Prachuap Khiri Khan, Thailand"}],Q=({isActive:n,setIsActive:a})=>{var x,v;const{axiosInstance:t}=S(),[l,i]=m.useState(_),s=m.useRef(),r=m.useRef(),h=m.useCallback(o=>{d.update(c=>{c.location=o}),a(!1)},[]);m.useEffect(()=>{n?s.current&&s.current.focus():(i(_),s&&s.current&&(s.current.value=""))},[n]);const u=m.useCallback(o=>{r.current=setTimeout(async()=>{clearTimeout(r.current);try{let c=[];if(o.trim().length>0){const b=await t.post("/hotel/auto-suggestion",{location:o});b.data&&c.push(...b.data)}else c=_;i(c)}catch(c){console.error(c),i([])}},500)},[]),p=m.useCallback(o=>{const c=o.target.value;u(c)},[u]);return e.jsxs(O,{open:n,onOpenChange:a,children:[e.jsx(D,{asChild:!0,children:e.jsx("div",{})}),e.jsx(q,{align:"start",onClick:o=>o.stopPropagation(),asChild:!0,children:e.jsxs(W,{className:"p-0 w-[350px] max-w-full",children:[e.jsx("input",{autoComplete:"off",ref:s,onKeyUp:p,type:"search",className:"w-full pl-10 my-2 text-sm bg-transparent border-none outline-none",placeholder:"Type city, hotel name or country"}),e.jsx("span",{className:"absolute text-sm top-2 left-4",children:e.jsx(A,{className:"inline"})}),e.jsx("hr",{}),e.jsxs(Y,{className:"overflow-auto text-xs max-h-64",children:[((x=s.current)==null?void 0:x.value.trim().length)>0&&e.jsx(k,{onSelect:()=>{var o;return h((o=s==null?void 0:s.current)==null?void 0:o.value)},className:"flex items-center justify-between gap-2 p-2 border-b cursor-pointer border-neutral/20 hover:bg-neutral/10",children:e.jsx("h6",{className:"font-medium",children:(v=s==null?void 0:s.current)==null?void 0:v.value})}),l.length>0?l.map(o=>e.jsx(k,{onSelect:()=>h(o.location),className:"flex items-center justify-between gap-2 p-2 border-b cursor-pointer border-neutral/20 hover:bg-neutral/10",children:e.jsx("h6",{className:"font-medium",children:o.location})},o.location)):e.jsx("p",{className:"py-10 text-center text-error",children:"No result found"})]})]})})]})};Q.propTypes={isActive:g.bool.isRequired,setIsActive:g.func.isRequired};const ce=({label:n,value:a})=>{const[t,l]=m.useState(!1),i=m.useRef();return m.useEffect(()=>{const s=r=>{i.current&&!i.current.contains(r.target)&&l(!1)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[]),e.jsxs("div",{ref:i,className:`sb-input-container sm:col-span-2 group ${t?"active":""}`,children:[e.jsx("label",{className:"sb-label",children:n}),e.jsx("input",{autoComplete:"off",onClick:()=>l(!0),type:"text",className:"sb-input",placeholder:"Select Destination",value:a,readOnly:!0}),e.jsx(Q,{isActive:t,setIsActive:l})]})};ce.propTypes={label:g.string.isRequired,value:g.string.isRequired};const ue=({isStatic:n=!1})=>{const{login_required:a}=P.useState(),{axiosInstance:t}=S(),{occupancies:l,...i}=d.useState(),s=d.useState(),r=M(),h=async()=>{var u,p;B.update(x=>{x.isActive=!0,x.service_type="hotel"});try{const x={...i,occupancies:l.map(o=>{const c={};return c.adult=String(o.adult),o.child>0&&(c.child=String(o.child),c.child_age=o.child_age.map(b=>String(b))),c})},v=await t.post(`/hotel/search?login_required=${a}`,x);if(((u=v.data)==null?void 0:u.status)==="success"){const o=localStorage.getItem("hotelRecentSearch"),c=JSON.parse(o)||[];if(c.some(b=>JSON.stringify(b)===JSON.stringify(s))===!1){const b=[s,...c.slice(0,9)];localStorage.setItem("hotelRecentSearch",JSON.stringify(b))}N.update(()=>N._getInitialState()),r(`/hotel/search?tracking_id=${v.data.tracking_id}`,{replace:!1})}else throw new Error((p=v.data)==null?void 0:p.reason)}catch(x){$("error","Failed",x.message)}finally{B.update(x=>{x.isActive=!1})}};return e.jsxs("button",{onClick:h,type:"button",id:"hotelSearchButton",className:`btn font-normal btn-primary !animate-none normal-case flex-nowrap ${n?"h-full":"sm:absolute top-full left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:active:!-translate-x-1/2 max-sm:w-full sm:active:!-translate-y-1/2 active:scale-95"}`,children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 25 24",fill:"currentColor",className:"text-xl max-sm:hidden",children:e.jsx("path",{d:"M11.1241 0.213867C13.1191 0.213737 15.0737 0.761183 16.7645 1.79355C18.4552 2.82593 19.8137 4.30151 20.6844 6.05144C21.5551 7.80137 21.9029 9.75495 21.688 11.6886C21.473 13.6222 20.7041 15.4578 19.4691 16.9853L24.0341 21.4359C24.2618 21.6658 24.3878 21.9736 24.3849 22.2931C24.3821 22.6127 24.2506 22.9183 24.0189 23.1443C23.7871 23.3702 23.4736 23.4984 23.1458 23.5012C22.8181 23.5039 22.5023 23.3811 22.2666 23.1591L17.7016 18.7085C16.3709 19.7309 14.8087 20.4283 13.1454 20.7424C11.482 21.0565 9.76575 20.9782 8.13974 20.5141C6.51373 20.05 5.02513 19.2135 3.79814 18.0745C2.57115 16.9354 1.64136 15.5268 1.08632 13.9661C0.531283 12.4055 0.367105 10.738 0.607482 9.10295C0.847858 7.46785 1.48582 5.91251 2.46814 4.56668C3.45046 3.22085 4.74866 2.12356 6.25442 1.36636C7.76018 0.609162 9.42984 0.214008 11.1241 0.213867ZM11.1241 2.65122C8.96921 2.65122 6.90259 3.48579 5.37885 4.97134C3.85512 6.4569 2.9991 8.47173 2.9991 10.5726C2.9991 12.6735 3.85512 14.6883 5.37885 16.1739C6.90259 17.6594 8.96921 18.494 11.1241 18.494C13.279 18.494 15.3456 17.6594 16.8693 16.1739C18.3931 14.6883 19.2491 12.6735 19.2491 10.5726C19.2491 8.47173 18.3931 6.4569 16.8693 4.97134C15.3456 3.48579 13.279 2.65122 11.1241 2.65122ZM11.1241 3.8699C12.9475 3.8699 14.6961 4.57608 15.9855 5.83308C17.2748 7.09008 17.9991 8.79495 17.9991 10.5726C17.9991 12.3503 17.2748 14.0552 15.9855 15.3122C14.6961 16.5692 12.9475 17.2753 11.1241 17.2753C9.30073 17.2753 7.55205 16.5692 6.26274 15.3122C4.97342 14.0552 4.2491 12.3503 4.2491 10.5726C4.2491 8.79495 4.97342 7.09008 6.26274 5.83308C7.55205 4.57608 9.30073 3.8699 11.1241 3.8699Z"})}),!n&&e.jsx("span",{className:"uppercase",children:"Search"})]})};ue.propTypes={isStatic:g.bool};const de=[{id:1,name:"Any Star",value:"any"},{id:2,name:"5 Star",value:5},{id:3,name:"4 Star",value:4},{id:4,name:"3 Star",value:3},{id:5,name:"2 Star",value:2},{id:6,name:"1 Star",value:1}],_e=()=>{const{hotel_star_level:n}=d.useState(),{t:a}=f();return e.jsx(U,{items:de.map(t=>({...t,name:a(`star_options.${t.value}`)})),selectedItem:a(`star_options.${n}`),action:t=>d.update(l=>{l.hotel_star_level=t}),icon:e.jsx(L,{className:"text-lg"})})},we=()=>{const{guest_nationality:n}=d.useState(),{t:a}=f();return e.jsxs("div",{className:"sb-input-container ",children:[e.jsx("label",{className:"sb-label",children:a("guest_nationality")}),e.jsx(G,{className:"placeholder:text-neutral/50 outline-0 !h-5 bg-transparent rounded-none w-full font-medium focus:!outline-0 !p-0 !m-0 !border-0 !min-h-0 !shadow-none whitespace-nowrap items-center",placeholder:a("select"),action:t=>d.update(l=>{var i;l.guest_nationality=((i=t[0])==null?void 0:i.value)||""}),defaultValue:n})]})},T=[{id:1,name:"Auto Radius",value:"auto",icon:e.jsx(F,{})},{id:2,name:"2 km",value:2,icon:e.jsx(E,{})},{id:3,name:"5 km",value:5,icon:e.jsx(Z,{})},{id:4,name:"9 km",value:9,icon:e.jsx(K,{})},{id:5,name:"10 km",value:10,icon:e.jsx(J,{})},{id:6,name:"20 km",value:20,icon:e.jsx(z,{})}],Re=()=>{const{radius:n}=d.useState(),{t:a}=f();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-semibold max-sm:hidden",children:e.jsx(ie,{items:T.map(t=>({...t,name:a(`radius.${t.value}`)})),activeTab:n,action:t=>d.update(l=>{l.radius=t})})}),e.jsx("div",{className:"hidden max-sm:block",children:e.jsx(U,{items:T.map(t=>({...t,name:a(`radius.${t.value}`)})),selectedItem:a(`radius.${n}`),action:t=>d.update(l=>{l.radius=t})})})]})},w=[{location:"Bangkok Hospital, Soi Phetchaburi 47 Yaek 10, Bang Kapi, Huai Khwang, Bangkok, Thailand"},{location:"Bangkok Hospital Phuket, Hongyokutis Road, Talat Yai, Mueang Phuket District, Phuket, Thailand"},{location:"Bangkok Hospital Pattaya, Sukhumvit Road, Pattaya City, Bang Lamung District, Chon Buri, Thailand"},{location:"Bangkok Hospital Siriroj, Chalermprakiat Ror 9 Road, Wichit, Mueang Phuket District, Phuket, Thailand"},{location:"Bangkok Hospital Hua Hin, Phet Kasem Road, Hua Hin, Hua Hin District, Prachuap Khiri Khan, Thailand"}],X=({isActive:n,setIsActive:a})=>{var x,v;const{axiosInstance:t}=S(),[l,i]=m.useState(w),s=m.useRef(),r=m.useRef(),h=m.useCallback(o=>{d.update(c=>{c.location=o}),a(!1)},[]);m.useEffect(()=>{n?s.current&&s.current.focus():(i(w),s&&s.current&&(s.current.value=""))},[n]);const u=m.useCallback(o=>{r.current=setTimeout(async()=>{clearTimeout(r.current);try{let c=[];if(o.trim().length>0){const b=await t.post("/hotel/auto-suggestion",{location:o});b.data&&c.push(...b.data)}else c=w;i(c)}catch(c){console.error(c),i([])}},500)},[]),p=m.useCallback(o=>{const c=o.target.value;u(c)},[u]);return e.jsxs(O,{open:n,onOpenChange:a,children:[e.jsx(D,{asChild:!0,children:e.jsx("div",{})}),e.jsx(q,{align:"start",onClick:o=>o.stopPropagation(),asChild:!0,children:e.jsxs(W,{className:"p-0 w-[350px] max-w-full",children:[e.jsx("input",{autoComplete:"off",ref:s,onKeyUp:p,type:"search",className:"w-full pl-10 my-2 text-sm bg-transparent border-none outline-none",placeholder:"Type city, hotel name or country"}),e.jsx("span",{className:"absolute text-sm top-2 left-4",children:e.jsx(A,{className:"inline"})}),e.jsx("hr",{}),e.jsxs(Y,{className:"overflow-auto text-xs max-h-64",children:[((x=s.current)==null?void 0:x.value.trim().length)>0&&e.jsx(k,{onSelect:()=>{var o;return h((o=s==null?void 0:s.current)==null?void 0:o.value)},className:"flex items-center justify-between gap-2 p-2 border-b cursor-pointer border-neutral/20 hover:bg-neutral/10",children:e.jsx("h6",{className:"font-medium",children:(v=s==null?void 0:s.current)==null?void 0:v.value})}),l.length>0?l.map(o=>e.jsx(k,{onSelect:()=>h(o.location),className:"flex items-center justify-between gap-2 p-2 border-b cursor-pointer border-neutral/20 hover:bg-neutral/10",children:e.jsx("h6",{className:"font-medium",children:o.location})},o.location)):e.jsx("p",{className:"py-10 text-center text-error",children:"No result found"})]})]})})]})};X.propTypes={isActive:g.bool.isRequired,setIsActive:g.func.isRequired};const me=({label:n,value:a})=>{const[t,l]=m.useState(!1),i=m.useRef();return m.useEffect(()=>{const s=r=>{i.current&&!i.current.contains(r.target)&&l(!1)};return document.addEventListener("click",s),()=>{document.removeEventListener("click",s)}},[]),e.jsxs("div",{ref:i,className:`sb-input-container sm:col-span-2 group ${t?"active":""}`,children:[e.jsx("label",{className:"sb-label",children:n}),e.jsx("input",{autoComplete:"off",onClick:()=>l(!0),type:"text",className:"sb-input",placeholder:"Select Destination",value:a,readOnly:!0}),e.jsx(X,{isActive:t,setIsActive:l})]})};me.propTypes={label:g.string.isRequired,value:g.string.isRequired};const he="/assets/hotel-loader-eea6ca53.gif",pe=({isStatic:n=!1})=>{const a=d.useState(),[t,l]=m.useState(!1),{login_required:i}=P.useState(),{axiosInstance:s}=S(),{occupancies:r,...h}=d.useState(),{t:u}=f(),p=M(),x=async()=>{var v,o;l(!0),document.body.classList.add("pointer-events-none");try{const c={...h,occupancies:r.map(y=>{const j={};return j.adult=String(y.adult),y.child>0&&(j.child=String(y.child),j.child_age=y.child_age.map(C=>String(C))),j})},b=await s.post(`/hotel/search?login_required=${i}`,c);if(((v=b.data)==null?void 0:v.status)==="success"){const y=localStorage.getItem("hotelRecentSearch"),j=JSON.parse(y)||[];if(j.some(C=>JSON.stringify(C)===JSON.stringify(a))===!1){const C=[a,...j.slice(0,9)];localStorage.setItem("hotelRecentSearch",JSON.stringify(C))}N.update(()=>N._getInitialState()),p(`/hotel/search?tracking_id=${b.data.tracking_id}`,{replace:!1})}else throw new Error((o=b.data)==null?void 0:o.reason)}catch(c){$("error","Failed",c.message)}finally{l(!1),document.body.classList.remove("pointer-events-none")}};return e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:x,type:"button",id:"hotelSearchButton",className:`btn btn-lg btn-primary !animate-none normal-case flex-nowrap min-h-0 h-12 font-normal ${n?"h-full":"sm:absolute top-full left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:active:!-translate-x-1/2 sm:active:!-translate-y-1/2 max-sm:w-full max-sm:mt-4 active:scale-95"}`,children:[n?t?e.jsxs("svg",{className:"w-5 h-5 text-white animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 25 24",fill:"currentColor",className:"text-2xl",children:e.jsx("path",{d:"M11.1241 0.213867C13.1191 0.213737 15.0737 0.761183 16.7645 1.79355C18.4552 2.82593 19.8137 4.30151 20.6844 6.05144C21.5551 7.80137 21.9029 9.75495 21.688 11.6886C21.473 13.6222 20.7041 15.4578 19.4691 16.9853L24.0341 21.4359C24.2618 21.6658 24.3878 21.9736 24.3849 22.2931C24.3821 22.6127 24.2506 22.9183 24.0189 23.1443C23.7871 23.3702 23.4736 23.4984 23.1458 23.5012C22.8181 23.5039 22.5023 23.3811 22.2666 23.1591L17.7016 18.7085C16.3709 19.7309 14.8087 20.4283 13.1454 20.7424C11.482 21.0565 9.76575 20.9782 8.13974 20.5141C6.51373 20.05 5.02513 19.2135 3.79814 18.0745C2.57115 16.9354 1.64136 15.5268 1.08632 13.9661C0.531283 12.4055 0.367105 10.738 0.607482 9.10295C0.847858 7.46785 1.48582 5.91251 2.46814 4.56668C3.45046 3.22085 4.74866 2.12356 6.25442 1.36636C7.76018 0.609162 9.42984 0.214008 11.1241 0.213867ZM11.1241 2.65122C8.96921 2.65122 6.90259 3.48579 5.37885 4.97134C3.85512 6.4569 2.9991 8.47173 2.9991 10.5726C2.9991 12.6735 3.85512 14.6883 5.37885 16.1739C6.90259 17.6594 8.96921 18.494 11.1241 18.494C13.279 18.494 15.3456 17.6594 16.8693 16.1739C18.3931 14.6883 19.2491 12.6735 19.2491 10.5726C19.2491 8.47173 18.3931 6.4569 16.8693 4.97134C15.3456 3.48579 13.279 2.65122 11.1241 2.65122ZM11.1241 3.8699C12.9475 3.8699 14.6961 4.57608 15.9855 5.83308C17.2748 7.09008 17.9991 8.79495 17.9991 10.5726C17.9991 12.3503 17.2748 14.0552 15.9855 15.3122C14.6961 16.5692 12.9475 17.2753 11.1241 17.2753C9.30073 17.2753 7.55205 16.5692 6.26274 15.3122C4.97342 14.0552 4.2491 12.3503 4.2491 10.5726C4.2491 8.79495 4.97342 7.09008 6.26274 5.83308C7.55205 4.57608 9.30073 3.8699 11.1241 3.8699Z"})}):null,n?null:t?e.jsxs(e.Fragment,{children:[" ",e.jsxs("svg",{className:"w-5 h-5 mr-3 -ml-1 text-white animate-spin",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),e.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),e.jsxs("span",{children:[u("searching"),"..."]})]}):e.jsx("span",{children:u("search")})]}),t&&e.jsx("dialog",{className:"modal bg-black/50 z-[9999]",open:!0,children:e.jsxs("div",{className:"max-w-xs rounded-md modal-box",children:[e.jsx("div",{className:"relative z-20 mb-2 text-xl font-semibold text-center",children:u("searching_hotel")}),e.jsx("div",{className:"flex items-center justify-center mb-5",children:e.jsx("img",{src:he,alt:"Hotel Searching...",className:"w-40"})}),e.jsx("p",{className:"px-4 mb-3 text-sm text-center",children:u("hotel_search_waiting")})]})})]})};pe.propTypes={isStatic:g.bool};const xe=[{id:1,name:"Any Star",value:"any"},{id:2,name:"5 Star",value:5},{id:3,name:"4 Star",value:4},{id:4,name:"3 Star",value:3},{id:5,name:"2 Star",value:2},{id:6,name:"1 Star",value:1}],He=()=>{const{hotel_star_level:n}=d.useState(),{t:a}=f();return e.jsx(H,{items:xe.map(t=>({...t,name:a(`star_options.${t.value}`)})),selectedItem:a(`star_options.${n}`),action:t=>d.update(l=>{l.hotel_star_level=t}),icon:e.jsx(L,{className:"text-lg"})})},V=({occupancy:n,index:a,storeName:t})=>{const{t:l}=f(),i=t==="hotel_search_options"?d:R;return e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium",children:l("adults")}),e.jsxs("p",{className:"text-xs",children:[">12 ",l("years")]})]})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>{n.adult>1&&i.update(s=>{s.occupancies[a].adult=n.adult-1})},type:"button",disabled:n.adult===1,className:"rounded minusBtn btn btn-xs btn-primary",children:"-"}),e.jsx("span",{className:"value",children:n.adult}),e.jsx("button",{onClick:()=>n.adult<6&&i.update(s=>{s.occupancies[a].adult=n.adult+1}),type:"button",className:"rounded plusBtn btn btn-xs btn-primary",children:"+"})]})]})};V.propTypes={occupancy:g.object.isRequired,index:g.number.isRequired,storeName:g.string.isRequired};const ee=({occupancy:n,index:a,storeName:t})=>{const l=t==="hotel_search_options"?d:R,i=n.child||0,s=n.child_age||[],{t:r}=f();return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3 child-container",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("div",{children:[e.jsx("h6",{className:"font-medium",children:r("children")}),e.jsxs("p",{className:"text-xs",children:["0-12 ",r("years")]})]})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>{i>0&&l.update(h=>{h.occupancies[a].child=i-1,h.occupancies[a].child_age.pop()})},type:"button",className:"rounded minusBtn btn btn-xs btn-primary",disabled:i===0,children:"-"}),e.jsx("span",{className:"value",children:i}),e.jsx("button",{onClick:()=>{n.child<6&&l.update(h=>{h.occupancies[a].child=i+1,h.occupancies[a].child_age.push(10)})},type:"button",className:"rounded plusBtn btn btn-xs btn-primary",children:"+"})]})]}),s.length>0&&e.jsxs("div",{className:"w-full mb-2",children:[e.jsx("h6",{className:"mb-2 text-xs font-medium",children:r("children_age")}),e.jsx("div",{className:"grid grid-cols-2 gap-3",children:s.map((h,u)=>e.jsxs("select",{className:"select select-xs select-bordered rounded bg-transparent w-full focus:outline-0 font-normal !text-xs",defaultValue:h,onChange:p=>l.update(x=>{x.occupancies[a].child_age[u]=p.target.value}),children:[e.jsxs("option",{value:"17",children:["17 ",r("years_old")]}),e.jsxs("option",{value:"16",children:["16 ",r("years_old")]}),e.jsxs("option",{value:"15",children:["15 ",r("years_old")]}),e.jsxs("option",{value:"14",children:["14 ",r("years_old")]}),e.jsxs("option",{value:"13",children:["13 ",r("years_old")]}),e.jsxs("option",{value:"12",children:["12 ",r("years_old")]}),e.jsxs("option",{value:"11",children:["11 ",r("years_old")]}),e.jsxs("option",{value:"10",children:["10 ",r("years_old")]}),e.jsxs("option",{value:"9",children:["9 ",r("years_old")]}),e.jsxs("option",{value:"8",children:["8 ",r("years_old")]}),e.jsxs("option",{value:"7",children:["7 ",r("years_old")]}),e.jsxs("option",{value:"6",children:["6 ",r("years_old")]}),e.jsxs("option",{value:"5",children:["5 ",r("years_old")]}),e.jsxs("option",{value:"4",children:["4 ",r("years_old")]}),e.jsxs("option",{value:"3",children:["3 ",r("years_old")]}),e.jsxs("option",{value:"2",children:["2 ",r("years_old")]}),e.jsxs("option",{value:"1",children:["1 ",r("years_old")]}),e.jsx("option",{value:"0",children:r("below_1_year")})]},u))})]})]})};ee.propTypes={occupancy:g.object.isRequired,index:g.number.isRequired,storeName:g.string.isRequired};const ge=({storeName:n})=>{const a=n==="hotel_search_options"?d:R,[t,l]=m.useState(!1),i=m.useRef(),{occupancies:s}=a.useState(),r=s.reduce((u,p)=>(u.adult+=p.adult,u.child+=p.child,u),{adult:0,child:0});m.useEffect(()=>{const u=p=>{i.current&&!i.current.contains(p.target)&&p.target.classList.contains("removeBtn")===!1&&l(!1)};return document.addEventListener("click",u),()=>{document.removeEventListener("click",u)}},[]);const{t:h}=f();return e.jsxs("div",{ref:i,className:`relative passengerContainer group sb-input-container ${t?"active":""}`,children:[e.jsx("label",{className:"sb-label",children:h("travelers")}),e.jsx("input",{autoComplete:"off",onClick:()=>l(!0),type:"text",className:"sb-input",value:`${r.adult+r.child} guest(s) in ${s.length} room`,readOnly:!0}),e.jsxs("div",{className:"absolute top-full right-0 z-10 min-w-full py-1 origin-['50%_0'] border rounded mt-0.5 shadow-xl w-max max-w-[360px] lists bg-base-200 transition-all scale-90 -translate-y-8 opacity-0 pointer-events-none group-[.active]:pointer-events-auto group-[.active]:scale-100 group-[.active]:translate-y-0 group-[.active]:opacity-100 text-sm",style:{transition:"all .2s cubic-bezier(.5,0,0,1.25), opacity .15s ease-out"},children:[e.jsx("div",{className:"flex flex-col px-5 py-2 divide-y",children:s.map((u,p)=>e.jsxs("div",{className:"pt-3 rounded-none collapse",children:[e.jsx("input",{type:"radio",name:"occupancy",defaultChecked:p+1===s.length,className:"min-h-0"}),e.jsxs("div",{className:"flex items-center justify-between min-h-0 gap-4 p-0 mb-2 collapse-title",children:[e.jsxs("h6",{className:"font-medium room",children:[h("room")," ",p+1]}),e.jsx("button",{type:"button",onClick:()=>a.update(x=>{x.occupancies=x.occupancies.filter(v=>v.id!==u.id)}),className:"link text-sm !no-underline link-error disabled:cursor-auto disabled:opacity-0 removeBtn z-[2]",disabled:s.length<2,children:h("remove")})]}),e.jsxs("div",{className:"flex flex-wrap gap-4 p-0 collapse-content",children:[e.jsx(V,{storeName:n,occupancy:u,index:p}),e.jsx(ee,{storeName:n,occupancy:u,index:p})]})]},u.id))}),e.jsx("hr",{className:"mb-2"}),e.jsxs("div",{className:"flex gap-2 px-2",children:[e.jsx("button",{onClick:()=>s.length<9&&a.update(u=>{u.occupancies.push({id:te(),adult:1,child:0,child_age:[]})}),className:"flex-1 h-10 min-h-0 normal-case rounded btn btn-primary btn-outline whitespace-nowrap",children:h("add_room")}),e.jsx("button",{onClick:()=>l(!1),type:"button",className:"flex-1 h-10 min-h-0 normal-case rounded btn btn-primary",children:h("apply")})]})]})]})};ge.propTypes={storeName:g.string.isRequired};const be=({label:n,defaultValue:a,minDate:t,action:l})=>{const{t:i}=f();return e.jsxs("div",{className:"sb-input-container ",children:[e.jsxs("label",{className:"sb-label",children:[n," ",(a==null?void 0:a.length)>1&&(a==null?void 0:a.every(s=>!!s&&s!=="Invalid date"))&&e.jsxs("span",{className:"text-xs text-neutral",children:["(",ae(...a.map(s=>se(s).format("YYYY-MM-DD")))," ",i("night"),")"]})]}),e.jsx(re,{className:"sb-input",defaultValue:a,minDate:t,type:"text",action:l})]})};be.propTypes={label:g.string.isRequired,defaultValue:g.array,minDate:g.string.isRequired,action:g.func.isRequired};const Be=()=>{const{guest_nationality:n}=d.useState(),{t:a}=f();return e.jsxs("div",{className:"sb-input-container ",children:[e.jsx("label",{className:"sb-label",children:a("guest_nationality")}),e.jsx(G,{className:"placeholder:text-neutral/50 outline-0 !h-5 bg-transparent rounded-none w-full font-medium focus:!outline-0 !p-0 !m-0 !border-0 !min-h-0 !shadow-none whitespace-nowrap items-center",placeholder:a("select"),action:t=>d.update(l=>{var i;l.guest_nationality=((i=t[0])==null?void 0:i.value)||""}),defaultValue:n})]})},I=[{id:1,name:"Auto Radius",value:"auto",icon:e.jsx(F,{})},{id:2,name:"2 km",value:2,icon:e.jsx(E,{})},{id:3,name:"5 km",value:5,icon:e.jsx(Z,{})},{id:4,name:"9 km",value:9,icon:e.jsx(K,{})},{id:5,name:"10 km",value:10,icon:e.jsx(J,{})},{id:6,name:"20 km",value:20,icon:e.jsx(z,{})}],Te=()=>{const{radius:n}=d.useState(),{t:a}=f();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-semibold max-sm:hidden",children:e.jsx(oe,{items:I.map(t=>({...t,name:a(`radius.${t.value}`)})),activeTab:n,action:t=>d.update(l=>{l.radius=t})})}),e.jsx("div",{className:"hidden max-sm:block",children:e.jsx(H,{items:I.map(t=>({...t,name:a(`radius.${t.value}`)})),selectedItem:a(`radius.${n}`),action:t=>d.update(l=>{l.radius=t}),icon:e.jsx(ne,{className:"mr-1 text-base"})})})]})},ve=[{id:1,name:"Any Meal Type",value:"any"},{id:2,name:"Room Only",value:"room_only"},{id:3,name:"With Breakfast",value:"breakfast"},{id:4,name:"Half Board",value:"half_board"},{id:5,name:"Full Board",value:"full_board"}],Ie=()=>{const{breakfast_option:n}=d.useState(t=>t),{t:a}=f();return e.jsx(H,{items:ve.map(t=>({...t,name:a(`breakfast_options.${t.value}`)})),selectedItem:a(`breakfast_options.${n}`),action:t=>d.update(l=>{l.breakfast_option=t}),icon:e.jsx(le,{className:"text-lg"})})};export{Ie as B,we as G,_e as H,ge as O,Re as R,be as S,ce as a,ue as b,Te as c,He as d,me as e,Be as f,pe as g,he as h};