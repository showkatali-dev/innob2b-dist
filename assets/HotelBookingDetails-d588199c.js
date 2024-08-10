import{o as V,q as e,P as T,I as y,aX as Se,aY as Fe,ad as le,aZ as ie,aD as Te,aE as Be,aF as De,H as M,e as R,m as P,a_ as He,ay as Me,az as oe,u as Ee,aA as Re,aC as Pe,T as B,a4 as Ae,a5 as Oe}from"./index-40b4770e.js";import{P as w,e as xe,aa as Le,a_ as $e,aV as qe,aY as Ve,bt as ze,bQ as Ge,bu as Ue,bv as Ye,bM as Qe,bR as We,a3 as q,s as ce,_ as de,bS as Ke,L as Z,a7 as Xe,a8 as Je,d as z,V as Ze,ad as he,n as es}from"./App-ab507ef2.js";import{k as ee,j as me,g as ss}from"./index.esm-ce81629e.js";import{A as ts}from"./ActivityLogs-88d5eec4.js";import{R as as}from"./RefundData-f1adda88.js";import{B as rs,a as ns}from"./BookingAgencyDetails-51394c0e.js";import{S as ls,a as is}from"./SendBookingPayLinkModal-717d008b.js";const ue=({booking_details:a})=>{var ae;const{general:{generated_date:t,supplier_confirmation_id:l,hotel_ref_id:x,booking_id:r},booking:{booking_status:u},hotel:{search_parameter:{checkIn:h,checkOut:c,total_night:i,guest_nationality:m},room:{data:p}},pax:{data:o,primary:{guest_contact_no:b,guest_email:d}}}=a,{hotel_contents:j}=(a==null?void 0:a.hotel)||{},{name:f,contacts:n,address:g,star_rating:D,primary_photo:_,policies:ye,property_type:se}=j||{},{full_address:ve}=g||{},{phone_numbers:G,fax:_e,email_address:U,website:we}=n||{},{checkin:ke,checkout:v,fees:S,know_before_you_go:Y,pets:F}=ye||{},{begin_time:A,end_time:O,instructions:Q,special_instructions:W}=ke||{},{system_config:Ce}=V.useState(),{data:K=[]}=xe(["COUNTRY"],async()=>{const k=window.location.origin,H=await Le.get(`${k}/country.json`);return Object.values(H.data.data).map(E=>({label:`${E.country_name} (${E.country_code})`,value:E.country_code}))});let te=1;return e.jsxs("div",{className:"tab-pane",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-8 mb-6 lg:grid-cols-12",children:[e.jsxs("div",{className:"border-2 border-b-4 border-primary lg:col-span-3 p-0.5",children:[e.jsxs("div",{className:"relative flex justify-center h-8 shadow-inner shadow-primary bg-gradient-to-b from-primary-focus to-primary",children:[e.jsxs("div",{className:"relative flex justify-between w-[80%] -translate-y-1/3",children:[e.jsx("div",{className:"flex w-2 h-6 bg-white border border-t-4 border-b-4 rounded-lg shadow-inner border-b-white"}),e.jsx("div",{className:"flex w-2 h-6 bg-white border border-t-4 border-b-4 rounded-lg shadow-inner border-b-white"})]}),e.jsx("div",{className:"absolute flex items-center h-full text-xs text-white",children:"Check-in"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-1",children:[e.jsx("h1",{className:"text-lg font-semibold",children:T(h).format("MMMM")}),e.jsx("h1",{className:"text-2xl",children:T(h).format("DD")}),e.jsx("p",{className:"text-xs",children:T(h).format("dddd")})]})]}),e.jsxs("div",{className:"border-2 border-b-4 border-primary lg:col-span-3 p-0.5",children:[e.jsxs("div",{className:"relative flex justify-center h-8 shadow-inner shadow-primary bg-gradient-to-b from-primary-focus to-primary",children:[e.jsxs("div",{className:"relative flex justify-between w-[80%] -translate-y-1/3",children:[e.jsx("div",{className:"flex w-2 h-6 bg-white border border-t-4 border-b-4 rounded-lg shadow-inner border-b-white"}),e.jsx("div",{className:"flex w-2 h-6 bg-white border border-t-4 border-b-4 rounded-lg shadow-inner border-b-white"})]}),e.jsx("div",{className:"absolute flex items-center h-full text-xs text-white",children:"Check-out"})]}),e.jsxs("div",{className:"flex flex-col items-center justify-center p-1",children:[e.jsx("h1",{className:"text-lg font-semibold",children:T(c).format("MMMM")}),e.jsx("h1",{className:"text-2xl",children:T(c).format("DD")}),e.jsx("p",{className:"text-xs",children:T(c).format("dddd")})]})]}),e.jsxs("div",{className:"p-0.5 border-2 border-b-4 border-primary lg:col-span-2",children:[e.jsx("div",{className:"flex justify-center h-8 shadow-inner shadow-primary bg-gradient-to-b from-primary-focus to-primary",children:e.jsxs("div",{className:"relative flex justify-between w-[80%] -translate-y-1/3",children:[e.jsx("div",{className:"flex w-2 h-6 bg-white border border-t-4 border-b-4 rounded-lg shadow-inner border-b-white"}),e.jsx("div",{className:"flex w-2 h-6 bg-white border border-t-4 border-b-4 rounded-lg shadow-inner border-b-white"})]})}),e.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 p-1",children:[e.jsx("h2",{className:"text-4xl font-semibold sm:text-4xl",children:i}),e.jsx("h5",{className:"mt-2 text-sm font-semibold",children:"Nights"})]})]}),e.jsx("div",{className:"border rounded lg:col-span-4 card",children:e.jsx("div",{className:"p-5 card-body",children:e.jsxs("ul",{className:"whitespace-nowrap",children:[e.jsx("li",{children:e.jsxs("p",{className:"text-sm",children:["Booking Status:"," ",e.jsx("span",{className:"badge badge-neutral badge-sm",children:u})]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-xs xl:text-[13px] text-neutral",children:["Date Of Issue:"," ",T(t).format(Ce.default_date_format_print)]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-xs xl:text-[13px] text-neutral",children:["Supplier Ref: ",l]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-xs xl:text-[13px] text-neutral",children:["Hotel Ref: ",x||l]})}),e.jsx("li",{children:e.jsxs("p",{className:"text-xs xl:text-[13px] text-neutral h-3.5",children:["Nationality:"," ",e.jsx("img",{src:`/flags/${m}.jpg`,alt:m,className:"inline h-4 align-middle border"})," ",(ae=K==null?void 0:K.find(k=>(k==null?void 0:k.value)===m))==null?void 0:ae.label]})})]})})})]}),e.jsx("div",{className:"w-full mb-6 overflow-auto",children:e.jsxs("table",{className:"table text-sm text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm border",children:"Booking ID"}),e.jsx("th",{className:"text-sm border",children:"Hotel Conf. ID"}),e.jsx("th",{className:"text-sm border",children:"Supplier Ref"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"border text",children:r}),e.jsx("td",{className:"border text",children:x||l}),e.jsx("td",{className:"border text",children:l})]})})]})}),e.jsx("div",{className:"p-4 mb-6 border rounded",children:e.jsxs("div",{className:"flex flex-col gap-2 md:flex-row",children:[e.jsx("div",{className:"shrink-0",children:e.jsx("img",{className:"object-cover object-center w-full mr-1 rounded h-full min-h-[150px] md:w-52",alt:f,src:_})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h5",{className:"mb-1 text-lg font-semibold",children:f}),e.jsx("h5",{className:"mb-1",children:e.jsx("div",{className:"text-warning",children:Array(Math.floor(D||0)).fill("").map((k,H)=>e.jsx($e,{className:"text-warning"},H))})}),e.jsxs("ul",{className:"flex flex-col text-xs text-neutral",children:[e.jsxs("p",{className:"text-sm text-primary",children:[e.jsx(qe,{className:"mr-1"}),ve]}),se&&e.jsxs("p",{children:[e.jsx(Ve,{className:"mr-1"})," Property Type:"," ",se]}),e.jsxs("p",{className:"",children:[e.jsx(ze,{className:"mr-1"})," Phone: ",G==null?void 0:G.join(", ")]}),e.jsxs("p",{className:"",children:[e.jsx(Ge,{className:"mr-1"})," Fax: ",_e]}),e.jsxs("p",{className:"",children:[e.jsx(Ue,{className:"mr-1"})," Email:"," ",U==null?void 0:U.join(", ")]}),e.jsxs("p",{children:[e.jsx(Ye,{className:"mr-1"})," Website: ",e.jsx("span",{children:we})]})]})]})]})}),e.jsx("div",{className:"w-full mb-6 overflow-auto",children:e.jsxs("table",{className:"table text-sm",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm border",children:"Room"}),e.jsx("th",{className:"text-sm border",children:"Rate Plan"}),e.jsx("th",{className:"text-sm border",children:"Guest Name"})]})}),e.jsx("tbody",{children:p.map(k=>{var ne;const{name:H,room_number:E,occupancies:C,rate_type:Ie,bed_option:X,meal_option:J,cancellation_policies:L,amenities:I,rate_comments:$}=k||{};let re=[];for(let s=0;s<(C==null?void 0:C.total_room);s++)re.push(String(te)),te++;return e.jsxs("tr",{children:[e.jsxs("td",{className:"border min-w-[150px]",children:[e.jsxs("h1",{className:"text-xs font-medium text-primary",children:["Room No:"," ",e.jsx("span",{className:"font-normal",children:E})]}),C.total_room," X ",H," ",e.jsx("br",{}),e.jsxs("ul",{className:"flex flex-col gap-1 text-xs",children:[X==null?void 0:X.map((s,N)=>s.included==="yes"?e.jsxs("li",{className:"align-middle list-item text-secondary",children:[e.jsx(Qe,{className:"text-xl"})," Includes"," ",s.quantity," ",s.type]},N):e.jsxs("li",{className:"list-item",children:[e.jsx(We,{className:"text-xl"})," Beds for"," ",s.charge]},N)),J==null?void 0:J.map((s,N)=>s.included==="yes"?e.jsxs("li",{className:"align-middle list-item text-secondary",children:[e.jsx(y,{path:Se,size:.8})," Includes"," ",s.type]},N):e.jsxs("li",{className:"list-item",children:[e.jsx(y,{path:Fe,size:.8})," ","Breakfast for ",s.charge]},N))]}),e.jsx("br",{}),e.jsx(q,{button:e.jsxs("div",{className:"text-[10px] flex items-center px-1 py-0.5 font-medium rounded bg-secondary/10 text-secondary w-fit gap-0.5",children:[e.jsx("span",{className:"mr-1",children:"Sleeps:"}),C.adult>0&&[...Array(Number(C.adult))].map((s,N)=>e.jsx(ce,{},N)),C.child>0&&[...Array(Number(C.child))].map((s,N)=>e.jsx(de,{},N))]}),children:e.jsxs("div",{className:"flex flex-col gap-1 px-3 py-2 text-xs",children:[e.jsxs("div",{className:"text-primary",children:[e.jsx(ce,{})," Adult: ",C.adult]}),e.jsxs("div",{className:"text-secondary",children:[e.jsx(de,{})," Child: ",C.child]})]})}),((ne=L==null?void 0:L.policy_breakdown)==null?void 0:ne.some(s=>s==null?void 0:s.details))&&e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("p",{className:"mb-1 text-[10px] font-semibold text-warning",children:[e.jsx(Ke,{})," Cancellation Policy"]}),e.jsx(q,{button:e.jsx("button",{className:"text-lg text-neutral",children:e.jsx(ee,{})}),children:e.jsx("div",{className:"px-3 py-3",children:L.policy_breakdown.map((s,N)=>e.jsx("p",{className:"mb-1 text-xs font-semibold text-warning",children:s==null?void 0:s.details},N))})})]})]}),e.jsxs("td",{className:"border",children:[Ie,(I==null?void 0:I.length)>0&&e.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[e.jsx("ul",{className:"text-xs list-disc list-inside list line-clamp-3",children:I==null?void 0:I.map(s=>e.jsx("li",{children:s==null?void 0:s.title},s==null?void 0:s.title))}),I.length>3&&e.jsx(q,{button:e.jsx("button",{className:"text-lg text-neutral",children:e.jsx(ee,{})}),position:"left",children:e.jsx("ul",{className:"p-3 text-xs list-disc list-inside list",children:I==null?void 0:I.map(s=>e.jsx("li",{children:s==null?void 0:s.title},s==null?void 0:s.title))})})]}),!!$&&e.jsxs("div",{className:"flex items-center gap-3 mt-1",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"bg-yellow-500 h-4 text-[10px] leading-tight flex w-fit px-1 items-center justify-center relative text-white float-start",children:[e.jsx("p",{children:"Note"}),e.jsx("div",{className:"absolute left-full top-0 h-0 w-0 border-[8px] border-transparent border-l-yellow-500"})]}),e.jsx("p",{className:"text-xs text-neutral indent-4 line-clamp-2 inner-html",dangerouslySetInnerHTML:{__html:le($)}})]}),$.length>30&&e.jsx(q,{button:e.jsx("button",{className:"text-lg text-neutral",children:e.jsx(ee,{})}),position:"left",children:e.jsx("div",{className:"px-2 py-3 text-xs text-neutral",children:e.jsx("p",{className:" inner-html",dangerouslySetInnerHTML:{__html:le($)}})})})]})]}),e.jsx("td",{className:"border",children:o==null?void 0:o.filter(s=>re.includes(s==null?void 0:s.room_number)).map((s,N)=>(s==null?void 0:s.first_name)!=="TBA"&&e.jsxs("p",{children:[s==null?void 0:s.title," ",s==null?void 0:s.first_name," ",s==null?void 0:s.last_name]},N))})]},E)})})]})}),(A&&O||(v==null?void 0:v.time)||!!Q||!!W)&&e.jsxs("div",{className:"p-4 mb-6 text-sm border rounded",children:[e.jsxs("h4",{className:"mb-3 text-base font-semibold text-primary",children:[e.jsx(y,{path:ie,size:.8})," Check-in terms and conditions"]}),(A&&O||(v==null?void 0:v.time))&&e.jsxs("div",{className:"flex flex-col gap-2 mb-2 text-sm",children:[!!A&&!!O&&e.jsxs("div",{children:[e.jsxs("span",{className:"font-medium",children:[e.jsx(me,{className:"mb-0.5 text-lg text-secondary mr-1"})," ","Check-in:"]})," ",A," to ",O]}),!!(v!=null&&v.time)&&e.jsxs("div",{children:[e.jsxs("span",{className:"font-medium",children:[" ",e.jsx(me,{className:"mb-0.5 text-lg text-secondary mr-1"})," ","Check-out:"]})," ",v==null?void 0:v.time]})]}),!!Q&&e.jsxs("div",{className:"mb-3 text-sm instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Instructions:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:Q}})]}),!!W&&e.jsxs("div",{className:"text-sm instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Special Instructions:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:W}})]}),e.jsx("br",{})]}),(!!(S!=null&&S.optional)||!!Y||!!(F!=null&&F.at(0)))&&e.jsxs("div",{className:"mb-6 text-sm border rounded",children:[e.jsxs("div",{className:"p-4",children:[e.jsxs("h4",{className:"mb-3 text-base font-semibold text-primary",children:[e.jsx(y,{path:ie,size:.8})," Additional Information"]}),!!(S!=null&&S.optional)&&e.jsxs("div",{className:"mb-3 text-sm instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Fees:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:S==null?void 0:S.optional}})]}),!!Y&&e.jsxs("div",{className:"mb-3 text-sm instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Know before you go:"}),e.jsx("div",{className:" inner-html",dangerouslySetInnerHTML:{__html:Y}})]}),!!(F!=null&&F.at(0))&&e.jsxs("div",{className:"text-sm instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Pets:"}),e.jsx("ul",{children:F==null?void 0:F.map((k,H)=>e.jsx("li",{children:k},H))})]})]}),e.jsx("br",{})]}),(!!d||!!b)&&e.jsx("div",{className:"mb-6 text-sm border rounded",children:e.jsxs("div",{className:"p-4",children:[e.jsxs("h4",{className:"mb-3 text-base font-semibold text-primary",children:[e.jsx(y,{path:Te,size:.8})," Guest Contacts Details"]}),!!d&&e.jsxs("p",{className:"mb-1",children:[e.jsx(y,{path:Be,size:.6})," Email:",d]}),!!b&&e.jsxs("p",{children:[e.jsx(y,{path:De,size:.6})," Contact Number:"," ",b]})]})}),e.jsx("div",{className:"mb-6 text-sm border rounded",children:e.jsxs("div",{className:"p-4",children:[e.jsx("h5",{className:"mb-1 text-base font-semibold text-info",children:"Booking Notes"}),e.jsxs("ul",{className:"",children:[e.jsx("li",{children:"Booking amount is payable as per reservation details. Please collect all extra funds directly from clients prior to departure."}),e.jsx("li",{children:"All vouchers issued are on the condition that all arrangements executed whether by a person or bodies, are as agents only, and that they shall not be responsible for any damage, loss, injury, delay or inconvenience caused to passengers as a result of any such arrangements. We will not accept any responsibility for additional expenses due to the changes or delays in air, road, rail, sea or any other causes; all such expenses will have to be borne by passengers."}),e.jsx("li",{children:"Voucher covers only those taxes which are included in the booking price (if included); all various other applicable taxes / fees need to be settled directly by passenger."}),e.jsx("li",{children:"We have no relevance with the room service or food menu or any other service as these are all as per the hotel standards."})]}),e.jsx("br",{}),e.jsx("h5",{className:"mb-1 text-base font-semibold text-info",children:"Check In/Check Out Timings & Policies"}),e.jsxs("ul",{className:"",children:[e.jsx("li",{children:"The usual check-in time is 14:00 hours. Rooms may not be available for early check-in, unless specifically communicated in advance. However, luggage may be deposited at the hotel reception and collected once the room is allotted."}),e.jsx("li",{children:"Note that reservations may be cancelled automatically after 18:00 hours if hotel(s) are not informed about the approximate time of late arrival."}),e.jsx("li",{children:"Official check-out time is at 12:00 hours. Any late check-out may involve additional charges. Please check with the hotel reception in advance."})]}),e.jsx("br",{}),e.jsx("h5",{className:"mb-1 text-base font-semibold text-info",children:"Credit Card Guarantee"}),e.jsx("ul",{className:"",children:e.jsx("li",{children:"Please note hotels may ask for a credit card imprint or cash deposit at the time of check in to cover extra services such as mini bar, laundry, telephone calls etc. This amount may vary from hotel to hotel. Check your booking details carefully and inform us immediately if you have any queries."})}),e.jsx("br",{})]})})]})};ue.propTypes={booking_details:w.object.isRequired};const be=({rooms:a,price:t,isSupplier:l=!1})=>{const{currency:x,sell_total_price:r}=t||{};return e.jsx("div",{className:"mb-6 tab-pane",children:e.jsxs("div",{className:"mb-6 border rounded",children:[e.jsx("div",{className:"p-4",children:e.jsx("h5",{className:"font-semibold",children:l?"Supplier Fare":"Customer Fare"})}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table text-sm whitespace-nowrap",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm border",children:"Room"}),e.jsx("th",{className:"text-sm border",children:"Base Fare"}),e.jsx("th",{className:"text-sm border",children:"Tax"}),e.jsx("th",{className:"text-sm border",children:"Extra Person Fee"}),e.jsx("th",{className:"text-sm border",children:"Sub-Total"})]})}),e.jsx("tbody",{children:a==null?void 0:a.map((u,h)=>{const{price:c,name:i}=u,{sell:{price_breakdown:{currency:m,base_fare:p,tax:o,extra_person_fee:b,total:d}}}=c||{sell:{price_breakdown:{}}};return e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:i}),e.jsxs("td",{className:"border",children:[M(m)," ",Number(p).toFixed(2)]}),e.jsxs("td",{className:"border",children:[M(m)," ",Number(o).toFixed(2)]}),e.jsxs("td",{className:"border",children:[M(m)," ",Number(b).toFixed(2)]}),e.jsxs("td",{className:"border",children:[M(m)," ",Number(d).toFixed(2)]})]},h)})}),e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm border text-base-content",colSpan:"4",children:"Total"}),e.jsxs("th",{className:"text-sm border text-base-content",children:[M(x)," ",Number(r).toFixed(2)]})]})})]})})]})})};be.propTypes={rooms:w.array.isRequired,price:w.object.isRequired,isSupplier:w.bool};const os=({invoice_data:a})=>e.jsx("div",{className:"mb-5 tab-pane ",children:e.jsxs("div",{className:"border rounded",children:[e.jsx("div",{className:"p-4 border-b",children:e.jsx("h5",{className:"font-semibold",children:"Invoices"})}),e.jsx("div",{className:"p-4",children:e.jsxs("div",{className:"divide-y divide-dashed border-y",children:[e.jsxs("div",{className:"grid grid-cols-6 text-[11px] *:p-2 font-medium bg-neutral/5",children:[e.jsx("div",{children:"Invoice Id"}),e.jsx("div",{children:"Date"}),e.jsx("div",{children:"Due Date"}),e.jsx("div",{children:"Invoice Amount"}),e.jsx("div",{children:"Total Due"}),e.jsx("div",{children:"Status"})]}),a==null?void 0:a.map(t=>{const{invoice_id:l,invoice_date:x,invoice_due_date:r,invoice_amount:u,default_currency:h,total_due:c,status:i}=t||{};return e.jsxs("div",{className:"grid grid-cols-6 text-[11px] *:p-2",children:[e.jsx("div",{children:l}),e.jsx("div",{children:x}),e.jsx("div",{children:r}),e.jsxs("div",{children:[M(h)," ",u]}),e.jsxs("div",{children:[M(h)," ",c]}),e.jsx("div",{children:e.jsx("span",{className:"w-12 font-normal border-transparent badge badge-sm badge-warning bg-warning/10 text-[11px] text-warning",children:i})})]},l)})]})})]})}),je=({booking_details:a})=>{var f;const{booking_manage:t}=V.useState(),{booking_hold_vocuher_download:l,booking_send_vocuher:x}=t||{},[r,u]=R.useState("itinerary"),{general:h,tracking_id:c,booking:{booking_status:i},price:m,invoice_data:p,refund_data:o}=a,{data:b}=((f=a==null?void 0:a.hotel)==null?void 0:f.room)||{},{user_data:d}=P.useState(),j=n=>btoa(JSON.stringify(n));return e.jsxs("div",{className:"p-4 rounded-lg lg:col-span-3 bg-base-200",children:[e.jsxs("div",{className:"mb-8 border rounded",children:[e.jsxs("div",{className:"flex justify-between p-4 border-b max-sm:flex-col",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"mb-1 text-2xl font-semibold",children:h==null?void 0:h.booking_id}),e.jsx("p",{className:"text-neutral",children:"Booking ID"})]}),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex flex-wrap items-center gap-1 ml-auto w-fit",children:[(i==="confirm"||i==="hold"&&(l==null?void 0:l.toUpperCase())==="YES")&&e.jsxs(e.Fragment,{children:[e.jsxs(Z,{to:`/voucher/hotel?q=${btoa(c)}`,target:"_blank",className:"h-10 min-h-0 text-sm normal-case btn border-neutral/70 hover:bg-neutral/70 hover:text-white btn-outline btn-primary",children:[e.jsx(y,{path:He,size:.8})," Hotel Voucher"]}),e.jsxs("div",{className:"dropdown dropdown-end",children:[e.jsxs("button",{tabIndex:"0",className:"h-10 min-h-0 text-sm btn border-neutral/70 hover:bg-neutral/70 hover:!text-white btn-outline btn-info normal-case",children:[e.jsx(y,{path:Me,size:.8})," Download"," ",e.jsx(Xe,{})]}),e.jsxs("ul",{tabIndex:"0",className:"z-20 p-2 mt-3 overflow-hidden shadow-md menu menu-sm dropdown-content shadow-primary/20 bg-base-200 rounded-box w-52 join join-vertical",children:[e.jsx("li",{className:"border-t join-item",children:e.jsx(Z,{to:`/voucher?q=${j({tracking_id:c})}`,target:"_blank",children:"Voucher"})}),e.jsx("li",{className:"border-t join-item",children:e.jsxs(Z,{to:`/voucher?q=${j({tracking_id:c,price:!0})}`,target:"_blank",children:["Voucher ",e.jsx("span",{className:"text-xs",children:"(with price)"})]})})]})]})]}),i==="hold"&&e.jsx(e.Fragment,{children:e.jsxs("button",{type:"button",onClick:()=>{var n;return(n=document.getElementById("send_booking_pay_link_modal"))==null?void 0:n.showModal()},className:"h-10 min-h-0 text-sm btn border-neutral/70 hover:bg-neutral/70 hover:!text-white btn-outline btn-info normal-case",children:[e.jsx(y,{path:oe,size:.8})," Send Pay Link"," "]})}),(i==="hold"&&x==="ACTIVE"&&l==="YES"||i==="confirm"&&x==="ACTIVE")&&e.jsxs("button",{type:"button",onClick:()=>{var n;return(n=document.getElementById("send_voucher_modal"))==null?void 0:n.showModal()},className:"h-10 min-h-0 text-sm btn border-neutral/70 hover:bg-neutral/70 hover:!text-white btn-outline btn-secondary normal-case",children:[e.jsx(y,{path:oe,size:.8})," Send Voucher"]}),e.jsx("button",{onClick:()=>window.location.reload(),className:"h-10 w-10 p-0 min-h-0 btn border-neutral/70 hover:!text-white btn-outline btn-neutral normal-case",children:e.jsx(Je,{className:"text-xl"})})]})})]}),e.jsx("div",{className:"px-4",children:e.jsxs("ul",{className:"flex items-center text-sm font-medium booking-list-details-tab",children:[e.jsx("li",{onClick:()=>u("itinerary"),className:`p-4 border-b-2 border-transparent cursor-pointer ${r==="itinerary"?"active":""}`,children:"Itinerary"}),e.jsx("li",{onClick:()=>u("fare_breakdown_customer"),className:`p-4 border-b-2 border-transparent cursor-pointer ${r==="fare_breakdown_customer"?"active":""}`,children:"Fare"}),(d==null?void 0:d.user_access_level)==="supernsn"&&e.jsxs(e.Fragment,{children:[(p==null?void 0:p.length)>0&&e.jsx("li",{onClick:()=>u("invoices"),className:`p-4 border-b-2 border-transparent cursor-pointer ${r==="invoices"?"active":""}`,children:"Invoices"}),i==="cancel"&&(o==null?void 0:o.length)>0&&e.jsx("li",{onClick:()=>u("refund"),className:`p-4 border-b-2 border-transparent cursor-pointer ${r==="refund"?"active":""}`,children:"Refund"})]})]})})]}),e.jsxs("div",{id:"hotel-tab-content",className:"tab-content",children:[r==="itinerary"&&e.jsx(ue,{booking_details:a}),r==="fare_breakdown_customer"&&e.jsx(be,{rooms:b,price:m}),(d==null?void 0:d.user_access_level)==="supernsn"&&e.jsxs(e.Fragment,{children:[r==="invoices"&&e.jsx(os,{invoice_data:p}),i==="cancel"&&r==="refund"&&e.jsx(as,{refund_data:o}),r==="activity_logs"&&e.jsx(ts,{})]})]})]})};je.propTypes={booking_details:w.object.isRequired};const pe=({auto_cancel:a})=>{const[t,l]=R.useState(x(a));R.useEffect(()=>{const i=setInterval(()=>{l(x(a))},1e3);return()=>clearInterval(i)},[a]);function x(i){const m=new Date,o=new Date(i)-m;if(o<=0)return{days:0,hours:0,minutes:0,seconds:0};const b=Math.floor(o/(1e3*60*60*24)),d=Math.floor(o%(1e3*60*60*24)/(1e3*60*60)),j=Math.floor(o%(1e3*60*60)/(1e3*60)),f=Math.floor(o%(1e3*60)/1e3);return{days:b,hours:d,minutes:j,seconds:f}}const{days:r,hours:u,minutes:h,seconds:c}=t;return e.jsx("div",{className:"mb-5 rounded card bg-error border-error",children:e.jsxs("div",{className:"p-5 text-center card-body",children:[e.jsx("p",{className:"text-sm text-white",children:"System will cancel the booking automatically"}),e.jsx("h3",{className:"mt-2 font-mono text-2xl font-extrabold text-white capitalize",children:`${r}d ${u}h ${h}m ${c}s`})]})})};pe.propTypes={auto_cancel:w.string};const fe=({booking_details:a})=>{var f;const{booking:t,general:l,partner:x,tracking_id:r}=a||{},{system_config:u,booking_manage:h}=V.useState(),{booking_auto_cancel:c,hotel_confirm_cancel:i}=h||{},{axiosInstance:m}=z(),{member_id:p}=((f=P.useState())==null?void 0:f.user_data)||{},[o,b]=R.useState(!1),d=Ee(),j=async()=>{var n,g,D;if(!o){b(!0);try{const _=await m.post("/secure?pathName=/supplier-booking-details",{member_id:p,tracking_id:r});if(((n=_==null?void 0:_.data)==null?void 0:n.status)==="success")await d.invalidateQueries(["FLIGHT_BOOKING_DETAILS"]),B("success","Booking Details Synced",(g=_.data)==null?void 0:g.reason);else throw new Error((D=_==null?void 0:_.data)==null?void 0:D.reason)}catch(_){B("error","Sync Failed!",_.message)}finally{b(!1)}}};return e.jsxs("div",{className:"sticky p-4 rounded-lg bg-base-200 h-fit top-5",children:[e.jsx("div",{className:`mb-5 rounded card ${t.booking_status==="hold"?"bg-warning border-warning":""} ${t.booking_status==="confirm"?"bg-success border-success":""} ${t.booking_status==="cancel"?"bg-error border-error":""}`,children:e.jsxs("div",{className:"p-5 text-center card-body",children:[e.jsx("h3",{className:"mb-2 text-2xl font-semibold text-white capitalize",children:t.booking_status}),((t==null?void 0:t.booking_status)==="confirm"||(t==null?void 0:t.booking_status)==="hold")&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-sm",children:(t==null?void 0:t.booking_status)==="hold"?"Auto Release of Bookings":"Last Update"}),e.jsx("p",{className:"text-sm",children:T(new Date(t.auto_cancel)).format(`dddd, ${u.default_date_format_print} HH:mma`)})]})]})}),(c==null?void 0:c.toUpperCase())==="ACTIVE"&&t.booking_status==="hold"&&e.jsx(pe,{auto_cancel:t.auto_cancel}),e.jsx("div",{className:"mb-5 border rounded card",children:e.jsxs("div",{className:"p-5 text-center card-body",children:[e.jsx("h5",{className:"mb-1 font-semibold",children:"Manage Hotel Booking"}),e.jsxs("div",{className:"grid gap-2",children:[(t==null?void 0:t.booking_status)==="hold"&&e.jsxs("button",{onClick:()=>{var n;return(n=document.getElementById("issue_hotel_voucher_modal"))==null?void 0:n.showModal()},className:"normal-case btn btn-outline btn-success whitespace-nowrap flex-nowrap",children:[e.jsx(y,{path:Re,size:.8}),"Issue Voucher"]}),((t==null?void 0:t.booking_status)==="confirm"||(t==null?void 0:t.booking_status)==="hold")&&e.jsxs(e.Fragment,{children:[((i==null?void 0:i.toUpperCase())==="ACTIVE"||t.booking_status==="hold")&&e.jsxs("button",{onClick:()=>{var n;return(n=document.getElementById("cancel_hotel_modal"))==null?void 0:n.showModal()},className:"normal-case btn btn-outline btn-error",children:[e.jsx(y,{path:Pe,size:.8}),"Cancel Booking"]}),e.jsx("button",{onClick:j,className:"font-normal normal-case btn btn-outline btn-info flex-nowrap whitespace-nowrap",children:o?e.jsxs(e.Fragment,{children:[e.jsx(Ze,{className:"animate-spin"}),"Processing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(ss,{}),"Sync Booking Details"]})})]})]})]})}),e.jsx(rs,{details:x}),e.jsx(ns,{info:l})]})};fe.propTypes={booking_details:w.object.isRequired};const ge=({data:a,refetchBookingDetails:t})=>{const[l,x]=R.useState(!1),{axiosInstance:r}=z(),{tracking_id:u,booking_id:h}=a,{user_data:{member_id:c}}=P.useState(),i=async m=>{var d,j,f;m.preventDefault(),x(!0);const b={reason:m.target.reason.value,member_id:c,tracking_id:u};try{const n=await r.post("/secure?pathName=/hotel/cancel-booking",b);document.getElementById("cancel_hotel_modal").close(),((d=n.data)==null?void 0:d.status)==="success"?(B("success","Flight Canceled",(j=n.data)==null?void 0:j.reason),t()):B("error","Cancellation Failed",(f=n.data)==null?void 0:f.reason)}catch(n){B("error","Cancellation Failed",n.message)}finally{x(!1)}};return e.jsx("dialog",{id:"cancel_hotel_modal",className:"modal",children:e.jsxs("form",{onSubmit:i,className:"p-4 modal-box",children:[e.jsxs("h3",{className:"text-lg font-semibold",children:["Cancel Hotel Booking - ",h]}),e.jsx("hr",{className:"mb-4"}),e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Type reason to Cancel the Hotel Booking"}),e.jsx("input",{autoComplete:"off",type:"text",name:"reason",className:"input input-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 w-full max-w-[300px]",placeholder:"Type reason to cancel the booking"}),e.jsx("hr",{className:"mt-4"}),e.jsxs("div",{className:"modal-action",children:[e.jsx("button",{type:"submit",className:`normal-case btn btn-error btn-sm btn-outline ${l?"pointer-events-none":""}`,children:l?e.jsxs(e.Fragment,{children:[e.jsx(he,{className:"mr-2 animate-spin"})," Processing..."]}):"Cancel Booking"}),e.jsx("button",{onClick:()=>document.getElementById("cancel_hotel_modal").close(),type:"button",className:"normal-case btn btn-sm btn-outline text-neutral/70 hover:bg-neutral/70 border-neutral/70 hover:border-neutral/70",children:"Close"})]})]})})};ge.propTypes={data:w.object.isRequired,refetchBookingDetails:w.func.isRequired};const Ne=({data:a,refetchBookingDetails:t})=>{const[l,x]=R.useState(!1),{axiosInstance:r}=z(),{tracking_id:u,booking_id:h}=a,{user_data:{member_id:c}}=P.useState(),i=async m=>{var j,f,n;m.preventDefault(),x(!0);const p=m.target,o=p.notes.value,b=p.price_change_accepted.value,d={notes:o,price_change_accepted:b,member_id:c,tracking_id:u};try{const g=await r.post("/secure?pathName=/hotel/issue-voucher",d);document.getElementById("issue_hotel_voucher_modal").close(),((j=g.data)==null?void 0:j.status)==="success"?(B("success","Issue Successful",(f=g.data)==null?void 0:f.reason),t()):B("error","Issue Failed",(n=g.data)==null?void 0:n.reason)}catch(g){B("error","Issue Failed",g.message)}finally{x(!1)}};return e.jsx("dialog",{id:"issue_hotel_voucher_modal",className:"modal",children:e.jsxs("form",{onSubmit:i,className:"p-4 modal-box",children:[e.jsxs("h3",{className:"text-lg font-semibold",children:["Hotel - Issue Voucher - ",h]}),e.jsx("hr",{className:"mb-4"}),e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Please provide notes for voucher issuance."}),e.jsx("input",{autoComplete:"off",type:"text",name:"notes",className:"input input-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 mb-2 w-full max-w-[300px]",placeholder:"Type notes"}),e.jsx("p",{className:"mt-4 mb-2 text-sm font-medium text-neutral",children:"Are you agree with the authorized price modification during voucher issuance? We will inform you if there are changes to the price at the time of voucher issuance."}),e.jsxs("select",{type:"text",name:"price_change_accepted",className:"select select-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 mb-4 w-full max-w-[300px]",defaultValue:"no",children:[e.jsx("option",{value:"no",children:"No"}),e.jsx("option",{value:"yes",children:"Yes"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"modal-action",children:[e.jsx("button",{type:"submit",className:`normal-case btn btn-success btn-sm btn-outline ${l?"pointer-events-none":""}`,children:l?e.jsxs(e.Fragment,{children:[e.jsx(he,{className:"mr-2 animate-spin"})," Processing..."]}):"Issue Voucher - Confirm"}),e.jsx("button",{type:"button",onClick:()=>document.getElementById("issue_hotel_voucher_modal").close(),className:"normal-case btn btn-sm btn-outline text-neutral/70 hover:bg-neutral/70 border-neutral/70 hover:border-neutral/70",children:"Close"})]})]})})};Ne.propTypes={data:w.object.isRequired,refetchBookingDetails:w.func.isRequired};const js=()=>{const{site_title:a,booking_manage:t}=V.useState(),{hotel_confirm_cancel:l}=t||{},[x]=es(),r=x.get("tracking_id"),{user_data:{member_id:u}}=P.useState(j=>j),{axiosInstance:h}=z(),{data:c,isLoading:i,error:m,refetch:p}=xe(["BOOKING_DETAILS_HOTEL",r,u],async()=>{var n,g,D;const j=await h.post("/booking-details",{tracking_id:r,member_id:u}),f=(g=(n=j.data)==null?void 0:n.booking)==null?void 0:g.booking_status;if(["hold","confirm","cancel","initiated"].includes(f))return j.data;throw{...j,message:((D=j.data)==null?void 0:D.reason)||"Request failed!"}});if(i)return e.jsx(Ae,{});if(m)throw m;const{general:{booking_id:o},booking:{booking_status:b},pax:{primary:d}}=c;return e.jsxs(e.Fragment,{children:[e.jsx(Oe,{children:e.jsxs("title",{children:["Hotel Booking Details",a?" - "+a:""]})}),e.jsx("main",{className:"container min-h-screen pt-20 mb-8",children:e.jsxs("div",{className:"grid grid-cols-1 gap-5 pt-2 lg:grid-cols-4",children:[e.jsx(je,{booking_details:c}),e.jsx(fe,{booking_details:c})]})}),b==="hold"&&e.jsxs(e.Fragment,{children:[e.jsx(Ne,{data:{tracking_id:r,booking_id:o},refetchBookingDetails:p}),e.jsx(ls,{data:{booking_id:o,tracking_id:r,guest_info:d}})]}),(b==="hold"||b==="confirm")&&e.jsxs(e.Fragment,{children:[e.jsx(is,{data:{booking_id:o,tracking_id:r,guest_info:d}}),((l==null?void 0:l.toUpperCase())==="ACTIVE"||b==="hold")&&e.jsx(ge,{data:{booking_id:o,tracking_id:r},refetchBookingDetails:p})]})]})};export{js as default};