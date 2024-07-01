import{m as I,e as o,o as e,Q as l,aN as L,G as u,U as Y}from"./index-179efefa.js";import{n as H,e as B}from"./index.esm-ce8af5e8.js";import{b as E,ag as r,x as h,cK as A,e as j,an as P,ao as F}from"./App-5691a897.js";import{a as G}from"./index.esm-94007475.js";const b=["booking_id","creation","agent","pnr","passenger","depart","return","itinerary","timeline","total","status","action"],K=({booking_lists:c,supplier_data:g})=>{var k,y;const{booking_manage:M,site_title:C}=I.useState(),{booking_auto_cancel:_}=M||{},[t,N]=o.useState(1),[f,S]=o.useState(0),[d,O]=o.useState(10),[i,T]=o.useState([]),[a,p]=o.useState(b);o.useEffect(()=>{try{const s=localStorage.getItem("__b"),n=atob(s),x=JSON.parse(n);p(x||b)}catch{localStorage.removeItem("__b"),p(b)}},[]);const $=s=>{if(a.includes(s)){const n=a.filter(x=>x!==s);p(n),localStorage.setItem("__b",btoa(JSON.stringify(n)))}else{const n=[...a,s];p(n),localStorage.setItem("__b",btoa(JSON.stringify(n)))}},v=E();return o.useEffect(()=>{if(!c)return;S(Math.ceil(c.length/d));const s=c.slice((t-1)*d,(t-1)*d+d);T(s)},[c,t,d]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-full mb-4 max-xl:overflow-x-auto",children:e.jsxs("table",{className:"table table-sm bg-base-200",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-[11px]",children:[e.jsx("th",{}),a.includes("booking_id")&&e.jsx("th",{children:"Booking ID"}),a.includes("creation")&&e.jsx("th",{children:"Creation"}),a.includes("agent")&&e.jsx("th",{children:"Agent"}),a.includes("pnr")&&e.jsx("th",{children:"PNR"}),a.includes("passenger")&&e.jsx("th",{children:"Passenger"}),a.includes("depart")&&e.jsx("th",{children:"Depart"}),a.includes("return")&&e.jsx("th",{children:"Return"}),a.includes("itinerary")&&e.jsx("th",{children:"Itinerary"}),a.includes("timeline")&&e.jsx("th",{children:"Timeline"}),a.includes("total")&&e.jsx("th",{children:"Total"}),a.includes("status")&&e.jsx("th",{children:"Status"}),e.jsx("th",{children:e.jsx(r,{button:e.jsx("div",{className:"text-base leading-tight text-base-content",children:e.jsx(G,{})}),arrowClassName:"opacity-0",delay:0,children:e.jsx("ul",{className:"join join-vertical",children:b.map(s=>e.jsxs("li",{onClick:()=>$(s),className:"justify-between font-normal uppercase h-5 min-h-0 btn-xs btn join-item text-[10px] border-y-base-content/20 min-w-28",children:[s," ",a.includes(s)?e.jsx(H,{}):e.jsx(B,{})]},s))})})})]})}),e.jsx("tbody",{children:i.map(s=>{var n,x,m,D,w;return e.jsxs("tr",{onDoubleClick:()=>{(s==null?void 0:s.booking_status)!=="failed"&&((s==null?void 0:s.service_type)==="FLIGHT"?v(`/booking-details/flight?tracking_id=${s.tracking_id}`):(s==null?void 0:s.service_type)==="HOTEL"&&v(`/booking-details/hotel?tracking_id=${s.tracking_id}`))},className:"hover:bg-neutral/10 !text-[11px]",children:[e.jsx("td",{className:"border-0 min-w-12 border-y",children:e.jsx(r,{button:e.jsx("img",{src:(n=g[s==null?void 0:s.supplier_partner_code])==null?void 0:n.logo,alt:(x=g[s==null?void 0:s.supplier_partner_code])==null?void 0:x.supplier_title,className:"rounded-full w-7 h-7"}),side:"right",children:e.jsx("div",{className:"p-2 text-[11px]",children:e.jsx("p",{children:(m=g[s==null?void 0:s.supplier_partner_code])==null?void 0:m.supplier_title})})})}),a.includes("booking_id")&&e.jsx("td",{className:"border-0 border-y",children:s.booking_id}),a.includes("creation")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx(r,{button:e.jsx("p",{className:"text-[11px] line-clamp-1",children:l(new Date(s.timestamp*1e3)).format("DDMMM")}),children:e.jsx("div",{className:"p-2 text-[11px]",children:e.jsx("p",{children:l(new Date(s.timestamp*1e3)).format("DD-MMM-YY")})})})}),a.includes("agent")&&e.jsxs("td",{className:"relative text-center border-0 border-y",children:[e.jsx(r,{button:e.jsx("p",{className:"text-[11px] line-clamp-1",children:s.partner_name}),children:e.jsx("div",{className:"p-2 text-[11px]",children:e.jsx("p",{children:s.partner_name})})}),(s==null?void 0:s.partner_name)!==C&&e.jsx(r,{button:e.jsx("div",{className:"absolute bottom-0 left-0 right-0 pt-2",children:e.jsx("div",{className:"h-0.5 bg-error flex max-w-16 mx-auto"})}),children:e.jsxs("div",{className:"p-2 text-[11px]",children:[e.jsxs("p",{children:["Int. By: ",s.partner_name]}),e.jsx("p",{children:"Mob No: "})]})})]}),a.includes("pnr")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx("div",{className:"relative",children:e.jsx(r,{button:e.jsx("p",{className:"text-[11px] line-clamp-1 text-error",children:s.supplier_confirmation_id}),children:e.jsxs("div",{className:"p-2 text-[11px]",children:[s.supplier_confirmation_id&&e.jsxs("p",{className:"text-error",children:["GDS PNR: ",s.supplier_confirmation_id]}),s.airlines_pnr&&e.jsxs("p",{children:["Airlines PNR: ",s.airlines_pnr]}),e.jsxs("p",{children:["Booking ID: ",s.booking_id]})]})})})}),a.includes("passenger")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx(r,{button:e.jsx("p",{className:"text-[11px] line-clamp-1",children:s.primary_guest_name}),children:e.jsx("div",{className:"p-2 text-[11px]",children:e.jsx("p",{children:s.primary_guest_name})})})}),a.includes("depart")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx(r,{button:e.jsx("p",{className:"text-[11px] line-clamp-1",children:l(new Date(s.checkin_departure_date)).format("DDMMM")}),children:e.jsx("div",{className:"p-2 text-[11px]",children:e.jsx("p",{children:l(new Date(s.checkin_departure_date)).format("DD-MMM-YY")})})})}),a.includes("return")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx(r,{button:e.jsx("p",{className:"text-[11px] line-clamp-1",children:l(new Date(s.checkout_arrival_date)).format("DDMMM")}),children:e.jsx("div",{className:"p-2 text-[11px]",children:e.jsx("p",{children:l(new Date(s.checkout_arrival_date)).format("DD-MMM-YY")})})})}),a.includes("itinerary")&&e.jsxs("td",{className:"border-0 border-y",children:[s.service_type==="FLIGHT"&&e.jsxs("p",{children:[s.departure_airport,"-",s.arrival_airport," (",s.journey_type,")"]}),s.service_type==="HOTEL"&&e.jsx(r,{button:e.jsx("p",{className:"line-clamp-1",children:s.carrier_hotel}),position:"bottom",children:e.jsx("div",{className:"p-2",children:e.jsx("p",{className:"text-xs",children:s.carrier_hotel})})})]}),a.includes("timeline")&&e.jsx("td",{className:"border-0 border-y",children:(_==null?void 0:_.toUpperCase())==="ACTIVE"&&(s==null?void 0:s.booking_status)==="hold"&&e.jsx(r,{button:e.jsx("p",{className:h("text-[11px]",L(l((D=s.auto_cancel)==null?void 0:D.slice(0,10)).format("YYYY-MM-DD"),l().format("YYYY-MM-DD"))<=2&&"border-b-2 border-b-error"),children:l((w=s.auto_cancel)==null?void 0:w.slice(0,10)).format("DDMMM")}),children:e.jsx("div",{className:"p-2",children:e.jsx("p",{className:"text-[11px]",children:s.auto_cancel})})})}),a.includes("total")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx(r,{button:e.jsxs("p",{className:"whitespace-nowrap",children:[u(s.currency)," ",s.sell_total_price]}),children:e.jsxs("div",{className:"p-3 text-[11px]",children:[e.jsxs("p",{children:["Sell: ",u(s.currency)," ",s.sell_total_price]}),e.jsxs("p",{children:["Purchase: ",u(s.currency)," ",s.total_amount]}),e.jsxs("p",{children:["Margin: ",u(s.currency)," ",(s.sell_total_price-s.total_amount).toFixed(2)]})]})})}),a.includes("status")&&e.jsx("td",{className:"border-0 border-y",children:e.jsx("p",{className:h("text-[10px] badge badge-xs rounded-sm border-transparent uppercase",s.booking_status==="hold"?"bg-warning/10 text-warning":s.booking_status==="confirm"?"bg-success/10 text-success":(s==null?void 0:s.booking_status)==="failed"?"bg-error/10 text-error":(s==null?void 0:s.booking_status)==="cancel"?"bg-secondary/10 text-secondary":"bg-info/10 text-info"),children:s.booking_status})}),e.jsx("td",{className:"border-0 border-y",children:a.includes("action")&&e.jsx("div",{className:"flex items-center justify-end gap-3",children:e.jsx(r,{button:e.jsx("button",{className:"focus:outline-0",children:e.jsx(A,{className:"text-xl"})}),arrowClassName:"opacity-0",delay:0,children:e.jsx("ul",{className:"border join join-vertical",children:e.jsx("li",{children:s.booking_status==="confirm"?e.jsx(j,{to:s.service_type==="FLIGHT"?`/booking-details/flight?tracking_id=${s.tracking_id}`:s.service_type==="HOTEL"?`/booking-details/hotel?tracking_id=${s.tracking_id}`:`/booking-details/car?tracking_id=${s.tracking_id}`,className:"font-normal normal-case btn-xs btn join-item",children:"View Details"}):s.booking_status==="hold"?e.jsx(j,{to:s.service_type==="FLIGHT"?`/booking-details/flight?tracking_id=${s.tracking_id}`:s.service_type==="HOTEL"?`/booking-details/hotel?tracking_id=${s.tracking_id}`:`/booking-details/car?tracking_id=${s.tracking_id}`,className:"font-normal normal-case btn-xs btn join-item",children:"View Details"}):s.booking_status==="initiated"?e.jsx(j,{to:s.service_type==="FLIGHT"?`/booking-details/flight?tracking_id=${s.tracking_id}`:s.service_type==="HOTEL"?`/booking-details/hotel?tracking_id=${s.tracking_id}`:`/booking-details/car?tracking_id=${s.tracking_id}`,className:"font-normal normal-case btn-xs btn join-item",children:"View Details"}):s.booking_status==="cancel"?e.jsx(j,{to:s.service_type==="FLIGHT"?`/booking-details/flight?tracking_id=${s.tracking_id}`:s.service_type==="HOTEL"?`/booking-details/hotel?tracking_id=${s.tracking_id}`:`/booking-details/car?tracking_id=${s.tracking_id}`,className:"font-normal normal-case btn-xs btn join-item",children:"View Details"}):e.jsx("button",{onClick:()=>Y("error",`Booking Status: ${s.booking_status}`,`This booking is not available for booking status ${s.booking_status}`),className:"font-normal normal-case btn-xs btn join-item",children:"View Details"})})})})})})]},s.booking_id)})})]})}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-xs",children:["Showing ",(k=i==null?void 0:i.at(0))==null?void 0:k.index," to ",(y=i==null?void 0:i.at(-1))==null?void 0:y.index," of"," ",c==null?void 0:c.length," entries"]}),e.jsxs("label",{className:"flex items-center gap-2 text-xs",children:[e.jsxs("select",{value:d,onChange:s=>O(Number(s.target.value)),className:"bg-transparent rounded select border-base-content/20 select-xs focus:outline-0",children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"20",children:"20"}),e.jsx("option",{value:"30",children:"30"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"})]}),e.jsx("span",{children:"items per page"})]}),e.jsxs("div",{className:"flex justify-end text-sm gap-0.5",children:[e.jsx("div",{onClick:()=>t>1&&N(t-1),className:h("inline-flex items-center justify-center w-8 duration-100 cursor-pointer h-7 hover:bg-neutral/10 opacity-0 pointer-events-none",t>1&&"opacity-100 pointer-events-auto"),children:e.jsx(P,{})}),e.jsx("div",{className:"overflow-x-auto w-fit max-w-[300px] hide_scrollbar",children:e.jsx("div",{className:"flex gap-0 5",children:[...Array(f)].map((s,n)=>e.jsx("div",{onClick:()=>N(n+1),className:h("inline-flex items-center justify-center w-8 duration-100 cursor-pointer h-7 hover:bg-neutral/10",n+1===t?"bg-neutral/10":""),children:n+1},n))})}),e.jsx("div",{onClick:()=>t<f&&N(t+1),className:h("inline-flex items-center justify-center w-8 duration-100 cursor-pointer h-7 hover:bg-neutral/10 opacity-0 pointer-events-none",t<f&&"opacity-100 pointer-events-auto"),children:e.jsx(F,{})})]})]})]})};export{K as B};
