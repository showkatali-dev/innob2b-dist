import{m as te,o as e,X as le,Y as ne}from"./index.js";import{q as ce,b as re,c as de,d as N,cC as me,cD as oe,cE as xe,cF as he,Y as je,$ as pe,Z as ge,bL as fe,a0 as Ne,a1 as be}from"./App.js";import{p as ve}from"./index.esm.js";const we=()=>{var w,k;const{site_title:b}=te.useState(),[$]=ce(),M=$.get("q"),v=atob(M),{axiosInstance:z}=re(),{data:o,isLoading:G,error:u}=de(["FLIGHT_BOOKING_DETAILS",v],async()=>{var d,a,m;const s=await z.post("/booking-details",{tracking_id:v,member_id:"1"}),r=(a=(d=s.data)==null?void 0:d.booking)==null?void 0:a.booking_status;if(["hold","confirm","cancel","initiated"].includes(r))return s.data;throw{...s,message:((m=s.data)==null?void 0:m.reason)||"Request failed!"}});if(G)return e.jsx(le,{});if(u)throw u;const{general:{booking_id:y,airlines_pnr:K,supplier_confirmation_id:h},flight:{flight_group:[{routes:[n]}]},pax:{data:j},partner:{customer_support_email:V,customer_hotline:Y,brand_name:Q,logo_400_400:W,address:X,city:Z,state:J,country:U,postal_code:ee},voucher:se}=o,{qr_code:ie,show_supplier_option:_}=se||{},p=ie==="show",{flight_group:c}=(o==null?void 0:o.flight)||{};return e.jsxs("main",{className:"container min-h-screen py-4 overflow-auto hide_scrollbar",children:[e.jsx(ne,{children:e.jsxs("title",{children:["Flight Booking Voucher",b?" - "+b:""]})}),e.jsxs("div",{className:"relative z-10 bg-base-100 w-[800px] mx-auto",children:[e.jsx("div",{className:N("top-0 left-0 flex justify-end w-full p-4 text-white bg-primary -z-10",p&&"absolute"),children:e.jsxs("div",{className:"text-end",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"e-Ticket Itinerary"}),e.jsxs("p",{className:"text-sm",children:["Booking ID: ",y]})]})}),e.jsxs("div",{className:"py-4",children:[e.jsxs("div",{className:N("flex items-end gap-4 mb-6",p&&"pl-4"),children:[p&&e.jsxs("div",{className:"border border-dashed border-primary w-[150px]",children:[e.jsx("div",{className:"p-1 bg-base-200",children:e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=290x290&data=${location.href}`,alt:"",className:"flex w-full aspect-square"})}),e.jsx("div",{className:"flex justify-center p-1 text-center bg-primary text-primary-content",children:"Manage Booking"})]}),e.jsxs("div",{className:N("grid flex-1 grid-cols-3 divide-x bg-neutral/5",_==="yes"&&!!h&&"grid-cols-4"),children:[e.jsxs("div",{className:"p-2",children:[e.jsx("div",{className:"flex items-center gap-2 p-1 mb-2 text-sm text-neutral",children:"Departure"}),e.jsxs("div",{className:"flex items-center gap-1 text-lg",children:[e.jsx(me,{})," ",e.jsx("span",{children:(w=n==null?void 0:n.departure_time)==null?void 0:w.slice(0,10)})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-neutral",children:[e.jsx(ve,{})," ",e.jsx("span",{children:(k=n==null?void 0:n.departure_time)==null?void 0:k.slice(11,16)})]})]}),e.jsxs("div",{className:"p-2 text-center",children:[e.jsx("div",{className:"flex items-center gap-2 p-1 mb-2 text-sm text-neutral",children:"Booking ID"}),e.jsx("h1",{className:"text-lg font-semibold",children:y})]}),e.jsxs("div",{className:"p-2 text-center",children:[e.jsx("div",{className:"flex items-center gap-2 p-1 mb-2 text-sm text-neutral",children:"Airlines PNR"}),e.jsx("h1",{className:"text-lg font-semibold",children:K})]}),_==="yes"&&!!h&&e.jsxs("div",{className:"p-2 text-center",children:[e.jsx("div",{className:"flex items-center gap-2 p-1 mb-2 text-sm text-neutral",children:"GDS/Supplier Ref."}),e.jsx("h1",{className:"text-lg font-semibold",children:h})]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsxs("h1",{className:"flex items-center gap-1 mb-2 text-xl font-semibold",children:[e.jsx(oe,{})," Flight Details"]}),e.jsxs("div",{className:"divide-y bg-neutral/5",children:[e.jsxs("div",{className:"grid grid-cols-4 divide-x",children:[e.jsx("div",{className:"col-span-2 px-4 py-2 text-sm font-medium text-neutral",children:"Flight Number"}),e.jsxs("div",{className:"flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral",children:[e.jsx(xe,{})," Departure"]}),e.jsxs("div",{className:"flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral",children:[e.jsx(he,{})," Arrival"]})]}),c==null?void 0:c.map(s=>{var r;return(r=s==null?void 0:s.routes)==null?void 0:r.map(d=>{const{departure_time:a,origin:m,destination:g,origin_terminal:f,destination_terminal:x,arrival_time:l,operating:t}=d;return e.jsxs("div",{className:"grid grid-cols-4 divide-x",children:[e.jsxs("div",{className:"col-span-2 px-4 py-2 text-sm text-neutral",children:[e.jsx("img",{src:`https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/${t==null?void 0:t.carrier_logo}`,alt:"",className:"flex w-10 h-10 mb-2"}),e.jsxs("h1",{children:[t==null?void 0:t.carrier_name,"-",t==null?void 0:t.flight_number]})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("h1",{className:"font-semibold",children:m}),e.jsx("p",{children:a==null?void 0:a.slice(0,10)}),e.jsx("p",{className:"text-sm text-neutral",children:a==null?void 0:a.slice(11,16)}),e.jsxs("p",{children:["Terminal ",f]})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("h1",{className:"font-semibold",children:g}),e.jsx("p",{children:l==null?void 0:l.slice(0,10)}),e.jsx("p",{className:"text-sm text-neutral",children:l==null?void 0:l.slice(11,16)}),e.jsxs("p",{children:["Terminal ",x]})]})]},a)})})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"flex items-center gap-1 mb-2 text-xl font-semibold",children:"Traveler Details"}),e.jsxs("div",{className:"divide-y bg-neutral/5",children:[e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsx("div",{className:"px-4 py-2 text-sm font-medium text-neutral",children:"Passenger Name"}),e.jsxs("div",{className:"flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral",children:[e.jsx(je,{})," Baggage"]})]}),j==null?void 0:j.map(s=>{const{Id:r,title:d,first_name:a,last_name:m,doc_no:g,doc_country:f,ticket_number:x}=s||{};return e.jsxs("div",{className:"grid grid-cols-2 divide-x",children:[e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{children:e.jsx("div",{className:"rounded badge bg-primary/5 text-neutral",children:(s==null?void 0:s.pax_type)==="ADT"?e.jsxs(e.Fragment,{children:[e.jsx(pe,{})," Adult"]}):s.pax_type==="CNN"?e.jsxs(e.Fragment,{children:[e.jsx(ge,{})," Child"]}):e.jsxs(e.Fragment,{children:[e.jsx(fe,{})," Infant"]})})}),e.jsxs("h1",{className:"text-xl font-semibold",children:[d," ",a," ",m]}),e.jsxs("p",{className:"flex items-center gap-1",children:[e.jsx("img",{src:`/flags/${f}.jpg`,alt:"",className:"h-3.5"}),e.jsxs("span",{className:"text-sm text-neutral",children:["Document: ",g]})]}),x&&e.jsxs("p",{className:"text-sm text-neutral",children:["Ticket No: ",x]})]}),e.jsxs("div",{className:"px-4 py-2 text-sm",children:[e.jsx("p",{children:"Baggage Allowance (Included Baggage):"}),c==null?void 0:c.map(l=>{var t;return(t=l==null?void 0:l.routes)==null?void 0:t.map((i,ae)=>{var I,T,F,C,A,D,O,S,R,B,q,P,H,E,L;return e.jsxs("div",{className:"mb-1",children:[e.jsxs("h6",{children:[e.jsx("strong",{children:i==null?void 0:i.origin})," to"," ",e.jsx("strong",{children:i==null?void 0:i.destination}),":"]}),e.jsxs("p",{className:"text-xs",children:[e.jsx(Ne,{})," Checked Baggage:"," ",(F=(T=(I=i==null?void 0:i.baggages)==null?void 0:I.checked)==null?void 0:T[s==null?void 0:s.pax_type])!=null&&F.weight?`${(D=(A=(C=i==null?void 0:i.baggages)==null?void 0:C.checked)==null?void 0:A[s==null?void 0:s.pax_type])==null?void 0:D.weight} ${(R=(S=(O=i==null?void 0:i.baggages)==null?void 0:O.checked)==null?void 0:S[s==null?void 0:s.pax_type])==null?void 0:R.unit}`:`${(P=(q=(B=i==null?void 0:i.baggages)==null?void 0:B.checked)==null?void 0:q[s==null?void 0:s.pax_type])==null?void 0:P.pieceCount} pieces`," "]}),e.jsxs("p",{className:"text-xs",children:[e.jsx(be,{})," Hand Baggage:"," ",(s==null?void 0:s.pax_type)!=="INF"&&((L=(E=(H=i==null?void 0:i.baggages)==null?void 0:H.carry_on)==null?void 0:E[s==null?void 0:s.pax_type])==null?void 0:L.title)||"7 kg*"]})]},ae)})}),e.jsx("br",{}),e.jsx("p",{children:"Additional:"}),s!=null&&s.baggage_option?e.jsx("p",{children:s==null?void 0:s.baggage_option}):e.jsx("p",{children:"N/A"})]})]},r)})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"flex items-center gap-1 mb-2 text-xl font-semibold",children:"Remarks"}),e.jsxs("div",{className:"p-4 space-y-6 bg-neutral/5",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-sm font-semibold uppercase",children:"Flight Notes"}),e.jsxs("ul",{className:"pl-12 text-sm list-disc",children:[e.jsx("li",{children:"At check-in, please show a Photo Id Proof and the document you gave for reference at reservation time. Not all seat and meal options are offered on all flights."}),e.jsx("li",{children:"Specific rules and restrictions may apply to this fare."}),e.jsx("li",{children:"Taxes are included except where local airport taxes are collected at check-in time."}),e.jsx("li",{children:"In case on international travel please ensure that your passport is valid for at least 6 months in advance and you have all valid visa for your trip."}),e.jsx("li",{children:"International: We recommend you to reconfirm your journey details 48 hrs prior to departure by calling respective airlines call center."})]})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-sm font-semibold uppercase",children:"CHECK-IN AT AIRPORT"}),e.jsx("ul",{className:"pl-12 text-sm list-disc",children:e.jsx("li",{children:"Please report at check-in counter of airline at airport at least 3 Hrs prior to flight departure for International flights and 2 Hrs prior for within country flights."})})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"mb-2 text-sm font-semibold uppercase",children:"CONDITIONS OF CONTRACT AND OTHER IMPORTANT NOTICES"}),e.jsxs("ul",{className:"pl-12 text-sm list-disc",children:[e.jsx("li",{children:'Carriage and other services provided by the carrier are subject to conditions of carriage, which are hereby Incorporated by reference. These conditions may be obtained from the issuing carrier. The itinerary/receipt constitutes the "passenger ticket" for the purposes of article 3 of the warsaw convention, Except where the carrier delivers to the passenger another document complying with the requirements of Article 3.'}),e.jsx("li",{children:"If the passengers journey involves an ultimate destination or stop in a country other than the country of Departure the warsaw convention may be applicable and the convention governs and in most cases limits the Liability of carriers for death or personal injury and in respect of loss of or damage to baggage. See also Notices headed advice to international passengers on limitation of liability and notice of baggage liability."})]})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("img",{src:W,alt:"",className:"w-[200px]"}),e.jsxs("div",{className:"flex divide-x",children:[e.jsxs("div",{className:"px-4 py-5",children:[e.jsx("h1",{className:"text-sm uppercase text-neutral",children:"Customer Service"}),e.jsx("p",{className:"font-semibold",children:V})]}),e.jsxs("div",{className:"px-4 py-5",children:[e.jsx("h1",{className:"text-sm uppercase text-neutral",children:"Helpline"}),e.jsx("p",{className:"font-semibold",children:Y})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 text-sm bg-primary text-primary-content",children:[e.jsxs("p",{children:["Office: ",X,", ",Z,", ",J,", ",U," ",ee]}),e.jsx("p",{children:Q})]})]})]})]})};export{we as default};
