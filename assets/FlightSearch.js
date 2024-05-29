import{P as ae,n as B,s as Ve,d as ie,g as re,o as p,r as q,j as e,i as He,b as sa,c as ne,p as We,q as Qe,t as Ge,w as Ue,x as Le,y as ta,z as la,A as ia,C as na,D as ca,E as oa,G as Pe,J as ma,K as da,a as Re,L as ua,N as pa,H as xa,O as ha,Q as fa}from"./index.js";import{b as ga}from"./index.esm.js";import{T as _a,R as ba,S as qe,a as Me,b as ja,P as va,F as Na,c as ya}from"./Searchbox3.js";import{T as Je,a as wa}from"./index.esm2.js";import{F as ce,R as Ke,S as ze,a as Sa}from"./SearchboxSkeleton.js";import{C as k}from"./Checkbox.js";import{D as Oa,a as Ca,b as ka}from"./drawer.js";import{S as $e}from"./SingleSelect.js";import"./index.esm3.js";import"./SuppliersSelection2.js";import"./MultipleFlight2.js";import"./index3.js";import"./CustomPopOver.js";import"./FlightItineraryData.js";import"./_commonjs-dynamic-modules.js";import"./sweetalert2-react-content.es.js";import"./FareTypeSection.js";import"./InputDate.js";import"./shortcut-buttons-flatpickr.min.js";import"./PrimaryTabsWithIcon.js";const Xe=({filterData:v,additionalData:l})=>{const{flight_search_sidebar:{mobile:{isActive:f}}}=B.useState(),{system_config:N}=Ve.useState(),{axiosInstance:S}=ie(),{data:I=[],isLoading:O}=re("AIRLINES",async()=>{const s=await S.get("/tools/airlines-data");return Object.entries(s.data.data).map(([h,m])=>({value:h,name:m.airline_name}))}),{price:j,no_stop_summery:L,baggage_summery:P,departure:R,arrival:M,operating:z}=p.useState(s=>s),{min_price:$,max_price:C}=v;return q.useEffect(()=>{const{min_price:s,max_price:u,no_stop_summery:h,baggage_summery:m,departure:a,arrival:o,carrier:x}=v;p.update(n=>{n.price={min_price:s-5,max_price:u+5},Object.values(h).forEach(_=>{n.no_stop_summery[_]=!1}),Object.values(m).forEach(_=>{n.baggage_summery[_]=!1}),Object.values(a.timing_slot).forEach(_=>{n.departure[_]&&(n.departure[_].value=!1)}),Object.values(o.timing_slot).forEach(_=>{n.arrival[_]&&(n.arrival[_].value=!1)}),Object.values(x.operating).forEach(_=>{n.operating[_]=!1})})},[v]),O?e.jsx(ce,{}):e.jsx("aside",{className:He("filter-section fixed lg:translate-x-0 max-w-xs lg:max-w-full max-lg:top-0 max-lg:left-0 max-lg:bottom-0 overflow-auto duration-500 z-30 lg:z-0 bg-base-200 lg:bg-transparent lg:sticky lg:top-20 h-fit lg:rounded-lg lg:shadow-custom2 lg:bg-base-200",f?"translate-x-0":"translate-x-[-400px]"),children:e.jsxs("div",{className:"p-5 rounded-lg shadow-lg bg-base-200 lg:max-h-[calc(100vh-80px)] lg:overflow-auto custom-scrollbar",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-4 text-xs text-center border rounded max-sm:hidden",children:[e.jsx("span",{className:"font-medium py-1.5 px-1 bg-base-300 whitespace-nowrap shrink-0",children:"Search Ref:"})," ",e.jsx("input",{type:"text",value:l==null?void 0:l.tracking_id,readOnly:!0,className:"cursor-pointer focus:outline-none",onClick:s=>{navigator.clipboard.writeText(l==null?void 0:l.tracking_id),s.target.value="Copied",setTimeout(()=>{s.target.value=l==null?void 0:l.tracking_id},3e3)}})]}),(l==null?void 0:l.journey_type)!=="MultiCity"&&e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx(_a,{})}),e.jsxs("div",{className:"mb-4 overflow-hidden text-center rounded-lg",children:[e.jsx("div",{className:"p-4 bg-base-300",children:e.jsx("p",{children:sa(l.date).format(N.default_date_format_print)})}),e.jsx("div",{className:"p-4 bg-primary/10 text-primary",children:e.jsx("h1",{className:"text-5xl font-semibold",children:l.total_fight})}),e.jsx("div",{className:"p-4 bg-base-300",children:e.jsxs("p",{children:[l.departure_from," to ",l.arrival_to]})})]}),e.jsx("button",{className:"absolute flex ml-auto btn btn-sm btn-ghost lg:hidden top-1 right-1",children:e.jsx(ne,{})}),e.jsx("div",{className:"flex items-center justify-between gap-5 mt-5 mb-5 lg:mt-0",children:e.jsx("h6",{className:"font-medium",children:"Filters"})}),e.jsxs("h6",{className:"flex items-center gap-1 mb-3 font-medium",children:[e.jsx(We,{className:"mr-1"}),"Price Range"]}),e.jsx(Ke,{min:$-5,max:C+5,defaultValue:[$-5,C+5],value:[j==null?void 0:j.min_price,j==null?void 0:j.max_price],action:s=>p.update(u=>{u.price={min_price:s[0],max_price:s[1]}})}),e.jsxs("h6",{className:"flex items-center gap-1 mb-3 font-medium",children:[e.jsx(Qe,{className:"mr-1"}),"Baggage"]}),e.jsx("div",{className:"flex flex-col gap-3 p-3 mb-8 text-xs border rounded-lg",children:Object.entries(P).sort().map(([s,u])=>e.jsx(k,{label:s,defaultChecked:u,action:h=>p.update(m=>{m.baggage_summery[s]=h})},s))}),e.jsxs("h6",{className:"flex items-center gap-1 mb-3 font-medium",children:[e.jsx(Ge,{className:"mr-1"}),"No of Stops"]}),e.jsx("div",{className:"flex flex-col gap-3 p-3 mb-8 text-xs border rounded-lg",children:Object.entries(L).sort().map(([s,u])=>e.jsx(k,{label:s,defaultChecked:u,action:h=>p.update(m=>{m.no_stop_summery[s]=h})},s))}),e.jsxs("h6",{className:"flex items-center gap-1 mb-3 font-medium",children:[e.jsx(Ue,{}),"Flight Timings"]}),e.jsx("h6",{className:"mb-3 text-xs rounded badge badge-sm text-neutral",children:"Based On Departure Location"}),e.jsx("div",{className:"flex flex-col gap-3 p-3 mb-4 text-xs border rounded-lg",children:Object.entries(R).map(([s,u])=>e.jsx(k,{label:u.label,defaultChecked:u.value,action:h=>p.update(m=>{m.departure[s].value=h})},s))}),e.jsx("h6",{className:"mb-3 text-xs rounded badge badge-sm text-neutral",children:"Based On Arrival Location"}),e.jsx("div",{className:"flex flex-col gap-3 p-3 mb-4 text-xs border rounded-lg",children:Object.entries(M).map(([s,u])=>e.jsx(k,{label:u.label,defaultChecked:u.value,action:h=>p.update(m=>{m.arrival[s].value=h})},s))}),e.jsxs("h6",{className:"flex items-center gap-1 mb-3 font-medium",children:[e.jsx(Je,{}),"Airlines"]}),e.jsx("div",{className:"flex flex-col gap-3 p-3 text-xs border rounded-lg",children:Object.entries(z).sort().map(([s,u])=>{var h;return e.jsx(k,{label:((h=I.find(m=>m.value===s))==null?void 0:h.name)||s,defaultChecked:u,action:m=>p.update(a=>{a.operating[s]=m})},s)})})]})})};Xe.propTypes={filterData:ae.object.isRequired,additionalData:ae.object.isRequired};const Fa=()=>{const{isActive:v}=B.useState(l=>l.price_calendar)||{};return e.jsx("button",{onClick:()=>B.update(l=>{l.price_calendar.isActive=!l.price_calendar.isActive}),className:"normal-case rounded-full shadow btn btn-accent",children:v?e.jsxs(e.Fragment,{children:[e.jsx(Le,{})," Hide pricing calendar ",e.jsx(ta,{})]}):e.jsxs(e.Fragment,{children:[e.jsx(Le,{})," Show pricing calendar ",e.jsx(la,{})]})})},Ze=({filterData:v,additionalData:l})=>{const{flight_search_sidebar:{mobile:{isActive:f}}}=B.useState(),{axiosInstance:N}=ie(),{data:S=[],isLoading:I}=re("AIRLINES",async()=>{const a=await N.get("/tools/airlines-data");return Object.entries(a.data.data).map(([x,n])=>({value:x,name:n.airline_name}))}),{price:O,duration:j,no_stop_summery:L,baggage_summery:P,departure:R,arrival:M,operating:z,cabin_class:$,aircraft_names:C}=p.useState(a=>a),{min_price:s,max_price:u}=v,{min_duration:h,max_duration:m}=v;return q.useEffect(()=>{const{min_price:a,max_price:o,min_duration:x,max_duration:n,cabin_class:_,aircraft_names:W,no_stop_summery:r,baggage_summery:F,departure:K,arrival:X,carrier:se}=v;p.update(y=>{y.price={min_price:a-5,max_price:o+5},y.duration={min_duration:x-5,max_duration:n+5},Object.values(r).forEach(b=>{y.no_stop_summery[b]=!1}),Object.values(_).forEach(b=>{y.cabin_class[b]=!1}),Object.values(W).forEach(b=>{y.aircraft_names[b]=!1}),Object.values(F).forEach(b=>{y.baggage_summery[b]=!1}),Object.values(K.timing_slot).forEach(b=>{y.departure[b]&&(y.departure[b].value=!1)}),Object.values(X.timing_slot).forEach(b=>{y.arrival[b]&&(y.arrival[b].value=!1)}),Object.values(se.operating).forEach(b=>{y.operating[b]=!1})})},[v]),I?e.jsx(ce,{}):e.jsxs(e.Fragment,{children:[e.jsx("aside",{className:He("filter-section fixed lg:translate-x-0 max-w-xs lg:max-w-full max-lg:top-0 max-lg:left-0 max-lg:bottom-0 overflow-auto duration-500 z-30 lg:z-0 bg-base-200 lg:bg-transparent lg:sticky lg:top-20 h-fit lg:rounded-lg lg:shadow-custom2 lg:mb-16",f?"translate-x-0":"translate-x-[-400px]"),children:e.jsxs("div",{className:"py-5 rounded-lg lg:shadow-lg lg:bg-base-200 max-h-screen lg:max-h-[calc(100vh-80px)] overflow-auto custom-scrollbar px-4",children:[e.jsxs("div",{className:"flex items-center gap-1 mb-4 text-xs text-center border rounded max-sm:hidden",children:[e.jsx("span",{className:"font-medium py-1.5 px-1 bg-base-300",children:"Search Ref:"})," ",e.jsx("input",{type:"text",value:l==null?void 0:l.tracking_id,readOnly:!0,className:"cursor-pointer focus:outline-none",onClick:a=>{navigator.clipboard.writeText(l==null?void 0:l.tracking_id),a.target.value="Copied",setTimeout(()=>{a.target.value=l==null?void 0:l.tracking_id},3e3)}})]}),(l==null?void 0:l.journey_type)!=="MultiCity"&&e.jsx("div",{className:"flex justify-center mb-4 max-sm:hidden",children:e.jsx(Fa,{})}),e.jsx("button",{onClick:()=>B.update(a=>{a.flight_search_sidebar.mobile.isActive=!1}),className:"absolute z-30 flex ml-auto btn btn-sm btn-ghost btn-circle bg-red-500/20 hover:bg-red-500 hover:text-white lg:hidden top-1 right-1",children:e.jsx(ne,{})}),e.jsx("div",{className:"flex items-center justify-between gap-5 mt-5 mb-5 lg:mt-0",children:e.jsx("h6",{className:"font-medium",children:"Filters"})}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(We,{className:"mr-1"}),"Price Range"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx(Ke,{min:s-5,max:u+5,defaultValue:[s-5,u+5],value:[O==null?void 0:O.min_price,O==null?void 0:O.max_price],action:a=>p.update(o=>{o.price={min_price:a[0],max_price:a[1]}})})})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(ia,{className:"mr-1"}),"Duration"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx(ba,{min:h>5?h-5:h,max:m+5,defaultValue:[h-5,m+5],value:[j==null?void 0:j.min_duration,j==null?void 0:j.max_duration],action:a=>p.update(o=>{o.duration={min_duration:a[0],max_duration:a[1]}})})})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Qe,{className:"mr-1"}),"Baggage"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(P).sort().map(([a,o])=>e.jsx(k,{label:a,defaultChecked:o,action:x=>p.update(n=>{n.baggage_summery[a]=x})},a))})})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Ge,{className:"mr-1"}),"No of Stops"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(L).sort().map(([a,o])=>e.jsx(k,{label:a,defaultChecked:o,action:x=>p.update(n=>{n.no_stop_summery[a]=x})},a))})})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(na,{className:"mr-1"}),"Cabin"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries($).sort().map(([a,o])=>e.jsx(k,{label:a,defaultChecked:o,action:x=>p.update(n=>{n.cabin_class[a]=x})},a))})})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Je,{}),"Airlines"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(z).sort().map(([a,o])=>{var x;return e.jsx(k,{label:((x=S.find(n=>n.value===a))==null?void 0:x.name)||a,defaultChecked:o,action:n=>p.update(_=>{_.operating[a]=n})},a)})})})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Ue,{}),"Flight Timings"]})}),e.jsxs("div",{className:"px-0 mt-3 collapse-content",children:[e.jsx("h6",{className:"mb-3 text-xs rounded badge badge-sm text-neutral",children:"Based On Departure Location"}),e.jsx("div",{className:"flex flex-col gap-3 mb-4 text-xs",children:Object.entries(R).map(([a,o])=>e.jsx(k,{label:o.label,defaultChecked:o.value,action:x=>p.update(n=>{n.departure[a].value=x})},a))}),e.jsx("h6",{className:"mb-3 text-xs rounded badge badge-sm text-neutral",children:"Based On Arrival Location"}),e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(M).map(([a,o])=>e.jsx(k,{label:o.label,defaultChecked:o.value,action:x=>p.update(n=>{n.arrival[a].value=x})},a))})]})]}),e.jsx("hr",{className:"mt-0 mb-2"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(wa,{className:"mr-1"}),"Aircraft"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(C).sort().map(([a,o])=>e.jsx(k,{label:a,defaultChecked:o,action:x=>p.update(n=>{n.aircraft_names[a]=x})},a))})})]})]})}),f&&e.jsx("div",{onClick:()=>B.update(a=>{a.flight_search_sidebar.mobile.isActive=!1}),className:"fixed top-0 bottom-0 left-0 right-0 z-20 lg:hidden bg-black/10 backdrop-blur-[2px]"})]})};Ze.propTypes={filterData:ae.object.isRequired,additionalData:ae.object.isRequired};const Aa=()=>{const{sortBy:v,amountType:l}=p.useState(f=>f.sorting);return e.jsxs("div",{className:"flex items-center justify-end gap-2 mb-4",children:[e.jsx("div",{className:"mr-1 text-sm font-medium text-neutral",children:"Sort by"}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx($e,{options:[{label:"Invoice Amount",value:"invoice"},{label:"Gross Amount",value:"gross"}],defaultValue:l,className:"btn btn-primary rounded-sm normal-case font-normal min-h-0 h-10 w-[160px] !pl-6 !pr-2 cursor-pointer no-animation",action:f=>p.update(N=>{var S;N.sorting.amountType=(S=f==null?void 0:f.at(0))==null?void 0:S.value}),searchable:!1,hide_arrow:!0}),e.jsx("div",{className:"absolute text-white left-2 z-[1] text-lg pointer-events-none",children:e.jsx(ca,{})})]}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx($e,{options:[{label:"Cheapest",value:"cheapest"},{label:"Fastest",value:"fastest"}],defaultValue:v,className:"btn btn-primary rounded-sm normal-case font-normal min-h-0 h-10 w-[120px] !pl-6 !pr-2 cursor-pointer no-animation",action:f=>p.update(N=>{var S;N.sorting.sortBy=(S=f==null?void 0:f.at(0))==null?void 0:S.value}),searchable:!1,hide_arrow:!0}),e.jsx("div",{className:"absolute text-white left-2 z-[1] pointer-events-none",children:e.jsx(oa,{})})]})]})},Za=()=>{var b,oe,me,de,ue,pe,xe,he,fe,ge,_e,be,je,ve,Ne,ye,we,Se,Oe,Ce,ke,Fe,Ae,Te,Ee,Be,Ie;const{axiosInstance:v}=ie(),{filteredData:l}=Pe.useState(t=>t),{price:f,duration:N,baggage_summery:S,no_stop_summery:I,cabin_class:O,aircraft_names:j,departure:L,arrival:P,operating:R,sorting:M}=p.useState(t=>t),{site_title:z,login_required:$,system_config:C,component_version:s}=Ve.useState(),{search_result_version:u}=C||{},[h]=ma(),m=h.get("tracking_id"),a=da(),[o,x]=q.useState(!0),[n,_]=q.useState(null),{data:W=[]}=re(["AIRPORTS_DATA"],async()=>(await v.get("/tools/airport-autosuggetion-data")).data),{data:r,isLoading:F,error:K}=re(["SEARCH_RESULT",m],async()=>{var i,c,g;const t=await v.get(`/flight_logs?tracking_id=${m}&base_url=${C!=null&&C.supplier_logs_file_base_url?C==null?void 0:C.supplier_logs_file_base_url:""}&login_required=${$}`);if(!m)return a("/"),null;if(((i=t==null?void 0:t.data)==null?void 0:i.status)==="success")return B.update(A=>{var T;A.modal.data=(T=t.data)==null?void 0:T.data[0]}),_((c=t.data)==null?void 0:c.message),t.data;throw{...t,message:((g=t.data)==null?void 0:g.reason)||"Request failed!"}});q.useEffect(()=>{if(!F){if(r){let t=[...r.data];t=t.filter(i=>i.filter.price>f.min_price&&i.filter.price<f.max_price||!f.min_price||!f.max_price),t=t.filter(i=>!(N!=null&&N.min_duration)||i.filter.journey.duration_seconds>N.min_duration&&i.filter.journey.duration_seconds<N.max_duration),t=t.filter(i=>Object.values(S).every(c=>c===!1)?!0:S[i.filter.baggage_summery]===!0),t=t.filter(i=>Object.values(I).every(c=>c===!1)?!0:I[i.filter.no_stop_summery]===!0),t=t.filter(i=>{var c;return Object.values(L).every(g=>g.value===!1)?!0:((c=L[i.filter.departure_timing_slot])==null?void 0:c.value)===!0}),t=t.filter(i=>{var c;return Object.values(P).every(g=>g.value===!1)?!0:((c=P[i.filter.arrival_timing_slot])==null?void 0:c.value)===!0}),t=t.filter(i=>Object.values(R).every(c=>c===!1)?!0:R[i.filter.carrier_operating]===!0),t=t.filter(i=>Object.values(O).every(c=>c===!1)?!0:O[i.filter.cabin_class]===!0),t=t.filter(i=>Object.values(j).every(c=>c===!1)?!0:j[i.filter.aircraft_name]===!0),t=t.map(i=>{var g;return{...i,package_count:((g=[...t].filter(A=>(A==null?void 0:A.filter_unique_filter_code)===(i==null?void 0:i.filter_unique_filter_code)))==null?void 0:g.length)||1}}),t=u==="6"?t.reduce((i,c)=>{var G,H,Z,Y;const g={...c},{journey_type:A,result_type:T,flight_group:Q,supplier:V}=g||{},te=(Y=(Z=(H=(G=Q==null?void 0:Q.at(0))==null?void 0:G.routes)==null?void 0:H.at(0))==null?void 0:Z.operating)==null?void 0:Y.carrier;if(T==="general"&&A==="OneWay"&&te==="FZ"&&(V==null?void 0:V.supplier_code)==="flydubai"){const D=i.findIndex(U=>(U==null?void 0:U.special_name)==="showkat");D===-1?(g.special_name="showkat",g.result_type="group",g.round_group=[{group:{flight_option:"OneWay",data:[c]}}],i.push(g)):i[D].round_group[0].group.data.push(g)}else i.push(g);return i},[]):t,t.sort((i,c)=>M.sortBy==="cheapest"?i.filter.price-c.filter.price:i.filter.journey.duration_seconds-c.filter.journey.duration_seconds),Pe.update(i=>{i.filteredData=t})}x(!1)}},[f,N,r,S,I,L,P,R,M,j,O,F,u]),q.useEffect(()=>{var t;if(((t=r==null?void 0:r.data)==null?void 0:t.length)>0&&W.length>0){const{search_parameter:{journey_type:i,non_stop_flight:c,baggage_option:g,booking_class:A,segment:T,travelers_adult:Q,travelers_child:V,travelers_child_age:te,travelers_infants:G,travelers_infants_age:H,preferred_carrier:Z,supplier_uid:Y,fare_type:D,fare_corporate_code:U,travelers_ptc:Ye,fare_option:De,partner_id:ea,fare_account_code:aa}}=r.data[0],ra=window.location.origin,ee=W.reduce((d,w)=>(d[w.code]=w,d),{});Re.update(d=>{d.partner_id=ea,d.fare_type=D,d.fare_corporate_code=U,d.fare_account_code=aa,d.travelers_ptc=Ye,d.fare_option=De,d.journey_type=i,d.non_stop_flight=c,d.baggage_option=g,d.booking_class=A,d.travelers_adult=Number(Q)||0,d.travelers_child=Number(V)||0,d.travelers_child_age=te.slice(0,Number(V))||[],d.travelers_infants=Number(G)||0,d.travelers_infants_age=(H==null?void 0:H.slice(0,Number(G)))||[],T.forEach((w,J)=>{d.segment[J]={...w,departure_airport_type:w.departure_airport_type,departure_airport:w.departure_airport_type==="AIRPORT"?ee[w.departure_airport]:Object.values(ee).find(E=>E.city_code===w.departure_airport),arrival_airport_type:w.arrival_airport_type,arrival_airport:w.arrival_airport_type==="AIRPORT"?ee[w.arrival_airport]:Object.values(ee).find(E=>E.city_code===w.arrival_airport)}}),d.flight_count=T.length>2?T.length:2,d.supplier_uid=Y}),ua.get(`${ra}/airlines_list.json`).then(d=>{const w=Object.keys(d.data.data).map(J=>{const{iata_code:E,airline_name:le}=d.data.data[J];return{label:`${le} (${E})`,value:E}});Re.update(J=>{J.preferred_carrier=Z.map(E=>w.find(le=>le.value===E))||[]})}),y(!1)}},[r,W]);const X=pa.useMediaQuery({query:"(max-width: 640px)"}),[se,y]=q.useState(!1);if(K)throw K;return e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(xa,{children:e.jsxs("title",{children:["Flight Search",z?" - "+z:""]})}),X&&e.jsxs(Oa,{open:se,onOpenChange:y,children:[e.jsx(Ca,{asChild:!0,children:e.jsxs("button",{className:"flex items-center justify-center w-full gap-2 px-5 py-4 mb-3 duration-100 rounded-md shadow-custom2 bg-base-200 hover:text-primary",children:[e.jsx(ha,{}),e.jsx("span",{children:"Modify Search"})]})}),e.jsx(ka,{children:e.jsx("div",{className:"max-h-[90vh] overflow-auto",children:!F&&(r!=null&&r.filter_data)?((b=s==null?void 0:s.flight)==null?void 0:b.search_box)==="2"?e.jsx(qe,{}):e.jsx(Me,{}):e.jsx(ze,{})})})]}),e.jsxs("button",{onClick:()=>B.update(t=>{t.flight_search_sidebar.mobile.isActive=!0}),className:"flex items-center justify-center w-full gap-2 px-5 py-4 duration-100 rounded-md shadow-custom2 bg-base-200 hover:text-primary lg:hidden",children:[e.jsx(fa,{}),e.jsx("span",{children:"Filters"})]}),!X&&e.jsx(e.Fragment,{children:!F&&(r!=null&&r.filter_data)?((oe=s==null?void 0:s.flight)==null?void 0:oe.search_box)==="2"?e.jsx(qe,{}):((me=s==null?void 0:s.flight)==null?void 0:me.search_box)==="3"?e.jsx(ja,{}):e.jsx(Me,{}):e.jsx(ze,{})}),((pe=(ue=(de=r==null?void 0:r.data)==null?void 0:de.at(0))==null?void 0:ue.search_parameter)==null?void 0:pe.journey_type)!=="MultiCity"&&((xe=r==null?void 0:r.data)==null?void 0:xe.length)>0&&e.jsx(va,{search_parameter:(he=r==null?void 0:r.data[0])==null?void 0:he.search_parameter}),!F&&(r==null?void 0:r.filter_data)&&n&&e.jsx("div",{className:"mb-4 overflow-hidden border rounded-md shadow bg-base-200 border-warning animate-pulse",children:e.jsxs("div",{className:"relative px-3 py-2 bg-warning/10",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"py-1 text-warning",children:e.jsx(ga,{className:"text-xl"})}),e.jsx("div",{children:e.jsx("p",{className:"text-xs font-normal",children:n})})]}),e.jsx("button",{onClick:()=>_(null),className:"absolute top-1 right-1 btn btn-ghost btn-circle btn-sm !bg-transparent",children:e.jsx(ne,{})})]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 mt-5 mb-5 lg:grid-cols-4",children:[!F&&(r!=null&&r.filter_data)?((fe=s==null?void 0:s.flight)==null?void 0:fe.search_filter)==="2"?e.jsx(Ze,{filterData:r.filter_data,additionalData:{date:(_e=(ge=r.data[0])==null?void 0:ge.search_parameter)==null?void 0:_e.departure_date[0],departure_from:(je=(be=r.data[0])==null?void 0:be.search_parameter)==null?void 0:je.departure_airport[0],arrival_to:(ye=(Ne=(ve=r.data[0])==null?void 0:ve.search_parameter)==null?void 0:Ne.arrival_airport)==null?void 0:ye.at(-1),total_fight:(l==null?void 0:l.length)||0,journey_type:(Se=(we=r.data[0])==null?void 0:we.search_parameter)==null?void 0:Se.journey_type,tracking_id:m}}):e.jsx(Xe,{filterData:r.filter_data,additionalData:{date:(Ce=(Oe=r.data[0])==null?void 0:Oe.search_parameter)==null?void 0:Ce.departure_date[0],departure_from:(Fe=(ke=r.data[0])==null?void 0:ke.search_parameter)==null?void 0:Fe.departure_airport[0],arrival_to:(Ee=(Te=(Ae=r.data[0])==null?void 0:Ae.search_parameter)==null?void 0:Te.arrival_airport)==null?void 0:Ee.at(-1),total_fight:(l==null?void 0:l.length)||0,journey_type:(Ie=(Be=r.data[0])==null?void 0:Be.search_parameter)==null?void 0:Ie.journey_type,tracking_id:m}}):e.jsx(ce,{}),e.jsx("section",{className:"lg:col-span-3",children:e.jsxs("div",{children:[!F&&(r!=null&&r.filter_data)?u==="7"?e.jsx(Aa,{}):e.jsx(Na,{filterData:r.filter_data,currency:r==null?void 0:r.currency}):e.jsx("div",{className:"h-20 mb-5 skeleton-box"}),o?e.jsx(Sa,{}):e.jsx(ya,{})]})})]})]})};export{Za as default};
