import{m as H,ag as F,l as J,e as g,o as e,ah as z,ai as S,I as K,y as ve,aj as _e,ak as Ne,al as Se,a0 as ke,am as ee,Q as te,ab as se,G as Y,X as Ce,Y as we}from"./index.js";import{P as T,x as Fe,y as Ie,z as Te,k as Ee,d as le,r as ce,K as De,l as ne,A as Me,C as qe,D as Pe,E as Ae,G as de,b as me,c as ue,H as X,S as re,I as ie,J as Be,q as Re}from"./App.js";import{a as Oe,b as Ve,S as Le,F as He,Q as Ue,c as Ye}from"./index3.js";import{A as ze,a as oe}from"./AccordionItem.js";import{T as G}from"./TextInputCheckout.js";import{I as ae}from"./InputContainerCheckout.js";import{P as pe}from"./PhoneNumberSelect.js";import{D as Z}from"./DateInputCheckout.js";import{D as Ge}from"./DropDownSelectCheckout.js";import{G as Qe}from"./index.esm3.js";import{C as Je}from"./CountryWithCodeSelect.js";import{S as We,E as $e,A as Ke,a as Xe,b as Ze,P as et,c as tt,F as at,d as st}from"./FlightCancellationPolicyModal.js";import{P as nt}from"./PrimaryTabsWithIcon.js";import{F as rt}from"./FlightItineraryData.js";import{w as it}from"./sweetalert2-react-content.es.js";import"./CustomPopOver.js";import"./InputDate.js";import"./shortcut-buttons-flatpickr.min.js";import"./SingleSelect.js";import"./pp.js";const ot=()=>{const{checkout_form_email_modify:a,checkout_form_contact_modify:i}=H.useState().booking_manage||{},{isd_code:l,contact_no:f,email_address:o}=F.useState(),{user_data:{member_id:t,mobile:m,email:d,isd_code:u}}=J.useState(r=>r);return g.useEffect(()=>{const r=location.origin;F.update(c=>{c.member_id=t,c.contact_no=m,c.email_address=d,c.isd_code=u,c.redirect_url=`${r}/booking-details/flight`})},[t,m,d,u]),e.jsxs("div",{className:"grid grid-cols-1 gap-3 p-3 sm:grid-cols-2 lg:grid-cols-3",children:[e.jsx(ae,{label:"Mobile Number",isRequired:!0,defaultValue:String(l||"")+String(f||""),action:r=>F.update(c=>{c.isd_code=r.isd_code||"",c.contact_no=r.mobile||""}),placeholder:"Enter Mobile Number",Input:pe,readOnly:(i==null?void 0:i.toUpperCase())==="DISABLE"&&!!l,autoFormat:!1}),e.jsx(G,{type:"email",label:"E-mail",action:r=>F.update(c=>{c.email_address=r.target.value}),defaultValue:o,placeholder:"example@mail.com",readOnly:(a==null?void 0:a.toUpperCase())==="DISABLE"&&!!o})]})},he=({pax_id:a,pax_type:i,pax_options:l,isDocOptional:f})=>{var P,A,N,C,R,O,V,q,w,b,L,U,Q;const{location_info:{isd_code:o}}=H.useState(),{doc_required:t,frequent_flyer_selection:m,wheelchair_selection:d,pax_dob_required:u,seat_selection:r,meal_selection:c,baggage_selection:x,passport_scan_selection:I,pax_search_selection:_,pax_email_contact_selection:D}=l||{},[M,E]=g.useState(!1),[j,p]=g.useState(!1),{passenger:n}=z.useState(s=>s),[y,v]=g.useState(!1),k=["MRS","MISS","MS"];return g.useEffect(()=>{S(a,{gender:"",wheelchair_required:"no",pax_id:a,first_name:"",last_name:"",dob:"",doc_no:"",doc_dateofexpiry:"",doc_dateofissue:"",frequent_flyer:"",contact_no:"",email_address:""})},[a]),g.useEffect(()=>{S(a,{title:i==="ADT"?"MR":"MSTR",pax_type:i,isd_code:o||""})},[a,i,o]),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"relative p-3 pb-1",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-4",children:[e.jsxs("h6",{className:"font-medium",children:[i==="ADT"?e.jsx(Fe,{className:"mr-0.5"}):i==="CNN"?e.jsx(Ie,{className:"mr-0.5"}):e.jsx(Te,{className:"mr-0.5"})," ",i==="ADT"?"Adult":i==="CNN"?"Child":"Infant"," ","Traveler ",a]}),e.jsxs("div",{className:"flex gap-3 sm:col-span-2 max-lg:-order-1 lg:justify-end",children:[x==="active"&&e.jsx("button",{type:"button",onClick:()=>document.getElementById("baggage_modal").showModal(),className:"normal-case rounded shadow btn btn-square btn-sm btn-ghost bg-primary/5 text-primary hover:bg-primary/20 tooltip tooltip-bottom tooltip-primary","data-tip":"Additional Baggage",children:e.jsx(K,{path:ve,size:1.1})}),r==="active"&&e.jsx("button",{type:"button",onClick:()=>document.getElementById("seat_modal").showModal(),className:"normal-case rounded shadow btn btn-square btn-sm btn-ghost bg-primary/5 text-primary hover:bg-primary/20 tooltip tooltip-bottom tooltip-primary","data-tip":"Select Seat",children:e.jsx(K,{path:_e,size:.8})}),c==="active"&&e.jsx("button",{type:"button",onClick:()=>document.getElementById("meal_modal").showModal(),className:"normal-case rounded shadow btn btn-square btn-sm btn-ghost bg-primary/5 text-primary hover:bg-primary/20 tooltip tooltip-bottom tooltip-primary","data-tip":"Select Meal",children:e.jsx(Qe,{className:"w-6 h-6"})}),I==="active"&&e.jsx("button",{type:"button",onClick:()=>E(!0),className:"normal-case rounded shadow btn btn-square btn-sm btn-ghost bg-primary/5 text-primary hover:bg-primary/20 tooltip tooltip-bottom tooltip-primary","data-tip":"Scan Passport",children:e.jsx(K,{path:Ne,size:.8})}),_==="active"&&e.jsx("button",{type:"button",onClick:()=>p(!0),className:"normal-case rounded shadow btn btn-sm btn-ghost bg-primary/5 text-primary hover:bg-primary/20 btn-square tooltip tooltip-left tooltip-primary","data-tip":"Existing Passenger",children:e.jsx(K,{path:Se,size:.8})})]})]}),e.jsxs("div",{className:"grid grid-flow-col gap-1 pr-8 mb-3",children:[e.jsx(G,{label:"Surname",isRequired:!0,action:s=>S(a,{last_name:s.target.value}),isUpperCase:!0,defaultValue:((P=n[a])==null?void 0:P.last_name)||"",placeholder:"Doe",maxLength:30}),e.jsx(G,{label:"Name",isRequired:!0,action:s=>S(a,{first_name:s.target.value}),isUpperCase:!0,defaultValue:((A=n[a])==null?void 0:A.first_name)||"",placeholder:"John",maxLength:30}),u!=="no"&&e.jsx("div",{className:"max-w-[90px]",children:e.jsx(Z,{label:"DOB",isRequired:u!=="optional",action:s=>S(a,{dob:s}),placeholder:"DOB",defaultValue:(N=n[a])==null?void 0:N.dob})}),e.jsx("div",{children:e.jsx(ae,{label:"Mobile",isRequired:!1,defaultValue:String(((C=n[a])==null?void 0:C.isd_code)||"")+String(((R=n[a])==null?void 0:R.contact_no)||""),action:s=>S(a,{isd_code:(s==null?void 0:s.isd_code)||"",contact_no:(s==null?void 0:s.mobile)||""}),action2:a===1?s=>{var B,W;const h=(B=Object.keys(n))==null?void 0:B.length;if(!(h<2))for(let $=2;$<=h;$++)(W=n==null?void 0:n[$])!=null&&W.contact_no||S($,{isd_code:(s==null?void 0:s.isd_code)||"",contact_no:(s==null?void 0:s.mobile)||""})}:null,placeholder:"Enter Mobile Number",Input:pe,autoFormat:!1})}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("div",{className:"sb-label",children:"Gender"}),e.jsxs("select",{className:"sb-input min-w-12",value:((O=n[a])==null?void 0:O.gender)||"",onChange:s=>{S(a,{gender:s.target.value,title:s.target.value==="F"?k.includes(n[a].title)===!1?n[a].pax_type==="ADT"?"MRS":"MISS":n[a].title:n[a].pax_type==="ADT"?"MR":"MSTR"})},children:[e.jsx("option",{value:"",children:"Select"}),e.jsx("option",{value:"M",children:"M"}),e.jsx("option",{value:"F",children:"F"})]})]})]}),e.jsx("div",{className:"overflow-visible collapse",open:y,children:e.jsx("div",{className:"p-0 collapse-content",children:e.jsxs("div",{className:"grid gap-1 pr-10 sm:grid-cols-2 lg:grid-cols-6",children:[t!=="no"&&!f&&e.jsxs(e.Fragment,{children:[e.jsx(ae,{label:"Country",isRequired:t!=="optional",action:s=>{var h;return S(a,{doc_country:((h=s[0])==null?void 0:h.value)||""})},defaultValue:(V=n[a])==null?void 0:V.doc_country,placeholder:"Country",Input:Je}),e.jsx(G,{label:"Document No.",isRequired:t!=="optional",action:s=>S(a,{doc_no:s.target.value}),isUpperCase:!0,defaultValue:((q=n[a])==null?void 0:q.doc_no)||"",placeholder:"A0123456789"}),e.jsx(Z,{label:"Expiration Date",isRequired:t!=="optional",action:s=>S(a,{doc_dateofexpiry:s}),placeholder:"Expiration Date",defaultValue:(w=n[a])==null?void 0:w.doc_dateofexpiry}),e.jsx(Z,{label:"Issue Date",action:s=>S(a,{doc_dateofissue:s}),defaultValue:(b=n[a])==null?void 0:b.doc_dateofissue,placeholder:"Issue Date"})]}),(m==="active"||m==="optional")&&e.jsx(G,{label:"Frequent Flyer Number",isRequired:m==="active",action:s=>S(a,{frequent_flyer:s.target.value}),isUpperCase:!0,defaultValue:((L=n[a])==null?void 0:L.frequent_flyer)||"",placeholder:"Type frequent flyer number"}),(d==="active"||d==="optional")&&e.jsx(Ge,{label:"Wheelchair Required",isRequired:d==="active",options:[{label:"Yes",value:"yes"},{label:"No",value:"no"}],action:s=>{var h;return S(a,{wheelchair_required:((h=s[0])==null?void 0:h.value)||""})},defaultValue:(U=n[a])==null?void 0:U.wheelchair_required,placeholder:"Select"}),D!=="disable"&&e.jsx(G,{type:"email",label:"E-mail",action:s=>S(a,{email_address:s.target.value}),placeholder:"example@mail.com",defaultValue:((Q=n[a])==null?void 0:Q.email_address)||""})]})})}),e.jsx("button",{onClick:()=>v(!y),className:"absolute border-2 rounded-md bottom-5 btn btn-square btn-secondary btn-xs h-7 w-7 right-2",children:e.jsx(Ee,{className:le("duration-300 transition-all",y?"rotate-180":"rotate-0")})})]}),e.jsx(We,{isOpenScanPassportModal:M,setIsOpenScanPassportModal:E,pax_id:a}),e.jsx($e,{isOpenExistingPassengerModal:j,setIsOpenExistingPassengerModal:p,pax_id:a})]})};he.propTypes={pax_id:T.number,pax_type:T.string,pax_options:T.object};const lt=()=>{const{save_pax:a}=z.useState();return e.jsx("div",{className:"flex justify-end px-3 py-4",children:e.jsxs("label",{htmlFor:"save_pax",className:"flex items-center align-middle",children:[e.jsx("input",{autoComplete:"off",type:"checkbox",id:"save_pax",defaultChecked:a==="yes",onChange:i=>z.update(l=>{l.save_pax=i.target.checked?"yes":"no"}),className:"rounded-sm checkbox checkbox-xs checkbox-primary"}),e.jsx("span",{className:"text-sm select-none",children:"Save Passenger Information"})]})})},xe=({flight_data:a})=>{var p;const{component_version:i}=H.useState(),{search_parameter:{travelers_adult:l,travelers_adult_age:f,travelers_child:o,travelers_child_age:t,travelers_infants:m,travelers_infants_age:d},pax_options:u,supplier:r,flight_group:c}=a||{},x=r==null?void 0:r.currency,I=c==null?void 0:c.every(n=>{var y;return(y=n==null?void 0:n.routes)==null?void 0:y.every(v=>{var k,P;return((k=v==null?void 0:v.origin_airport)==null?void 0:k.country)==="Bangladesh"&&((P=v==null?void 0:v.destination_airport)==null?void 0:P.country)==="Bangladesh"})}),{seat_selection:_,meal_selection:D,baggage_selection:M,pax_save_option:E}=u||{},j=l+o+m;return e.jsxs(e.Fragment,{children:[e.jsxs(ze,{className:`w-full mb-8 bg-base-200 ${((p=i==null?void 0:i.flight)==null?void 0:p.checkout)==="2"?"flight-checkout-v2":""}`,children:[e.jsxs(oe,{isOpen:!0,header:"Enter Traveler Details",className:"border-0",disabled:!0,children:[Array(j).fill("").map((n,y)=>{const v=y+1,k=v<=l?"ADT":v-l<=o?"CNN":"INF";return e.jsx(he,{pax_id:v,pax_type:k,pax_options:u,isDocOptional:(x==null?void 0:x.toLowerCase())==="bdt"&&I,age:k==="ADT"?(f==null?void 0:f.at(y))||30:k==="CNN"?(t==null?void 0:t.at(y-l))||12:(d==null?void 0:d.at(y-l-o))||2},ke())}),E==="active"&&e.jsx(lt,{})]}),e.jsx(oe,{isOpen:!0,header:"Enter Contact Details",className:"border-0",disabled:!0,children:e.jsx(ot,{})})]}),M==="active"&&e.jsx(Ke,{}),_==="active"&&e.jsx(Xe,{}),D==="active"&&e.jsx(Ze,{})]})};xe.propTypes={flight_data:T.object.isRequired};const ct=[{id:1,name:"Flight Itinerary",value:"flight_itinerary",icon:e.jsx(Ae,{})},{id:2,name:"Fare Summary",value:"fare_summary",icon:e.jsx(de,{})}],dt=[{id:2,name:"Fare Summary",value:"fare_summary",icon:e.jsx(de,{})}],be=({flight_data:a})=>{const{user_data:{user_access_level:i}={}}=J.useState(),{system_config:l,supplier_option:f}=H.useState(),{search_result_version:o}=l||{},t=["1","4","5","7"].includes(o)?ct:dt,{show_supplier_option:m}=f||{},[d,u]=g.useState(t[0].value),{flight_group:r,price_breakdown:c}=a||{},[x,I]=g.useState(!1),_=g.useRef(),D=()=>{_.current.style.maxHeight=0,I(!1)},M=()=>{_.current.style.maxHeight=_.current.scrollHeight+"px",I(!0)},E=()=>{x?D():M()},j=ce();return e.jsxs("div",{className:"relative mb-8 rounded-lg bg-base-200",children:[e.jsxs("button",{onClick:()=>j(-1),className:"flex items-center gap-2 px-3 py-3 text-neutral",children:[e.jsx(De,{}),e.jsx("span",{children:"Back to Result"})]}),e.jsxs("div",{className:le("px-3 pt-3 pb-4",o==="5"&&"pl-0"),children:[e.jsxs("div",{className:"flex flex-col gap-5 justify-evenly sm:flex-row sm:items-center",children:[o==="5"?e.jsx("div",{className:"w-full space-y-2",children:r.map((p,n)=>e.jsx("div",{children:e.jsx(Oe,{singleFlightData:p})},n))}):o==="7"?e.jsx("div",{className:"w-full space-y-2",children:r.map((p,n)=>e.jsx("div",{children:e.jsx(Ve,{singleFlightData:p})},n))}):e.jsx("div",{className:"w-full",children:r.map((p,n)=>e.jsxs("div",{children:[n>0&&e.jsx("hr",{className:"my-4 border"}),e.jsx(Le,{singleFlightData:p})]},n))}),e.jsx("div",{className:"flex items-center flex-shrink-0 gap-3 justify-evenly",children:e.jsx("div",{className:"flex gap-2 text-center",children:e.jsx("button",{onClick:E,className:"absolute bottom-0 z-10 min-h-0 font-normal normal-case -translate-x-1/2 translate-y-1/2 rounded shadow btn btn-primary left-1/2 h-9 active:!-translate-x-1/2 active:!translate-y-1/2 no-animation",children:x?e.jsxs(e.Fragment,{children:["Hide Details ",e.jsx(ne,{})]}):e.jsxs(e.Fragment,{children:["View Details ",e.jsx(Me,{})]})})})})]}),e.jsx("div",{className:"flex items-center justify-end mt-4",children:(l==null?void 0:l.show_cart_quotes)==="YES"&&e.jsxs("button",{onClick:()=>ee("quotes",a),className:"addToCartBtn normal-case font-normal btn btn-primary btn-outline border-[#ccc] btn-xs",children:["Quotes",e.jsx(qe,{})]})}),e.jsx("div",{ref:_,className:"overflow-hidden duration-500 details",style:{maxHeight:0},children:e.jsxs("div",{className:"px-3 py-3 content",children:[e.jsx("hr",{className:"my-4 border"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between mb-5",children:[e.jsx(nt,{items:["supernsn","administrator"].includes(i)&&m==="YES"?[...t,{id:3,name:"Debug",value:"debug",icon:e.jsx(Pe,{})}]:t,activeTab:d,action:p=>{u(p),setTimeout(()=>{_.current.style.maxHeight=_.current.scrollHeight+"px"},100)}}),e.jsxs("button",{onClick:D,className:"ml-auto text-xs normal-case hideDetailsBtn btn btn-sm rounded-3xl",children:["Hide Details",e.jsx(ne,{})]})]}),d==="flight_itinerary"&&["1","4","5","7"].includes(o)&&e.jsx(rt,{flight_group:r}),d==="fare_summary"&&e.jsx(He,{price_breakdown:c}),d==="debug"&&m==="YES"&&e.jsx("div",{className:"p-3 border rounded-lg",children:e.jsx("pre",{children:JSON.stringify(a,null,3)})})]})})]})]})};be.propTypes={flight_data:T.object.isRequired};const ge=({validation_data:a})=>{const{data:i}=a;return e.jsxs("div",{className:"relative lg:col-span-5",children:[e.jsx(be,{flight_data:i}),e.jsx(xe,{flight_data:i}),e.jsx(Ue,{})]})};ge.propTypes={validation_data:T.object.isRequired};const fe=({isExpired:a,isChecked:i,hold_possible:l})=>{var A;const f=F.useState(N=>N),{axiosInstance:o}=me(),[t,m]=g.useState(!1),{payment_type:d}=F.useState(),{booking_tracking_id:u,save_pax:r,passenger:c}=z.useState(N=>N),{user_data:{login_key:x,member_id:I,user_access_level:_}={}}=J.useState(),{checkout_url:D}=((A=H.useState())==null?void 0:A.system_config)||{},{data:M,isLoading:E,isError:j}=ue({queryKey:["SERVICE_STATUS",x,I],queryFn:async()=>{var N;try{const C=await o.post("/reports/service-status",{login_key:x,member_id:I});return((N=C==null?void 0:C.data)==null?void 0:N.service_status)||null}catch(C){console.error(C)}}}),p=ce(),n=it(re),y=async()=>{var N,C,R,O,V;if(!t)try{if(m(!0),i.terms_conditions===!1)throw new Error("Please accept Terms & Conditions");if(i.cancellation_policy===!1)throw new Error("Please accept Cancellation Policy");const q={booking_tracking_id:u,member_id:I,save_pax:r,passenger:Object.values(c)},w=await o.post("/flight/update-travellers",q);if(((N=w==null?void 0:w.data)==null?void 0:N.status)==="success")try{const b=await o.post("/flight/create-booking",f);if(((C=b==null?void 0:b.data)==null?void 0:C.status)==="success")if((O=(R=b==null?void 0:b.data)==null?void 0:R.general)!=null&&O.tracking_id)p(`/booking-details/flight?tracking_id=${b.data.general.tracking_id}`,{replace:!0}),te("success","Booking Successful",w.data.reason),z.replace(z._getInitialState()),F.replace(F._getInitialState()),se.replace(se._getInitialState());else{const{payment_option:L,pay_tracking_id:U}=b.data;n.fire({html:e.jsx(et,{payment_options:L,pay_tracking_id:U,checkout_url:D}),showCancelButton:!1,showConfirmButton:!1,allowOutsideClick:!1,customClass:{htmlContainer:"!m-0",popup:"w-full max-w-3xl !p-0 overflow-hidden"}})}else throw _==="supernsn"?new Error(b.data.reason+`
`+((V=b.data)==null?void 0:V.reason_admin)):new Error(b.data.reason)}catch(b){(await re.fire({title:"Booking Failed",html:b.message,icon:"error",showCancelButton:!1,showCloseButton:!1,confirmButtonColor:"hsl(var(--p)/1)",confirmButtonText:"Go Back",allowOutsideClick:!1})).isConfirmed&&p(-1,{replace:!0})}else throw new Error(w==null?void 0:w.data.reason)}catch(q){console.error(q),te("error","Failed",q.message)}finally{m(!1)}};if(E||j)return e.jsxs("button",{className:"w-full btn btn-lg btn-primary btn-outline holdFlightBtn",children:[e.jsx(X,{className:"mr-2 animate-spin"})," Loading..."]});const{block_status:v,flight_block:k,reason:P}=M;return v==="yes"&&k==="yes"?e.jsx("div",{className:"p-3 text-sm border rounded-lg border-error bg-error/10",children:e.jsx("p",{className:"text-error",dangerouslySetInnerHTML:{__html:P}})}):d?e.jsx(e.Fragment,{children:d==="account_balance"?e.jsx("button",{onClick:y,className:"w-full btn btn-lg btn-primary btn-outline holdFlightBtn",disabled:a,children:t?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"mr-2 animate-spin"})," Loading..."]}):l==="yes"?"Hold Flight":"Instant Purchase"}):e.jsx("button",{onClick:y,disabled:a,className:"w-full btn btn-lg btn-primary btn-outline holdFlightBtn",children:t?e.jsxs(e.Fragment,{children:[e.jsx(X,{className:"mr-2 animate-spin"})," Loading..."]}):"Pay and Reserve"})}):e.jsx("div",{className:"p-3 text-sm border rounded-lg border-error bg-error/10",children:e.jsx("p",{className:"text-error",children:"You don't have enough balance."})})};fe.propTypes={isExpired:T.bool,isChecked:T.object,hold_possible:T.string};const je=({session_expire:a,action:i})=>{const{datetime:l,timestamp:f}=a,[o,t]=g.useState(f-Date.now()/1e3);return g.useEffect(()=>{const m=()=>{t(null),i(!0)},d=setInterval(()=>{t(u=>u-1),o<=0&&(clearInterval(d),m())},1e3);return()=>{clearInterval(d)}},[o,i]),e.jsxs("div",{className:"mb-3 overflow-hidden text-sm border rounded-lg session-timeout",children:[e.jsx("h6",{className:"p-1 font-semibold text-center",children:"Session Timeout in"}),e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"flex justify-center gap-4 pb-1 mx-auto text-center",children:o?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"time",children:[e.jsx("h5",{className:"text-xl font-semibold text-primary",children:Math.floor(o/60)}),e.jsx("p",{children:"min"})]}),e.jsx("div",{className:"time",children:e.jsx("h5",{className:"text-xl font-semibold text-primary",children:":"})}),e.jsxs("div",{className:"time",children:[e.jsx("h5",{id:"timeout_sec",className:"text-xl font-semibold text-primary",children:Math.floor(o%60)}),e.jsx("p",{children:"sec"})]})]}):e.jsx("h5",{className:"text-xl font-semibold text-primary",children:"Expired"})})})]})};je.propTypes={session_expire:T.object.isRequired,action:T.func};const ye=({validation_data:a})=>{var C,R,O,V,q,w,b,L,U,Q,s;const{price_change:i,search_price:l,validation_price:f,session_expire:o,data:{sell:t,hold_possible:m,pax_options:d},terms:u,cancellation_terms:r}=a,{terms_selection:c,cancellation_selection:x}=d||{},[I,_]=g.useState(!1),[D,M]=g.useState(!1),{payment_type:E}=F.useState(),{user_data:j}=J.useState(),[p,n]=g.useState({terms_conditions:!1,cancellation_policy:!1}),[y,v]=g.useState(!1),{price_view:{online_payment_option:k,show_flight_fare_rules:P,show_sell_price:A}={}}=H.useState();g.useEffect(()=>{var h;((h=t==null?void 0:t.total)==null?void 0:h.amount)>(j==null?void 0:j.balance)&&m==="no"&&(k==="ACTIVE"?F.update(B=>{B.payment_type="onlinepayment"}):F.update(B=>{B.payment_type=null}))},[(C=t==null?void 0:t.total)==null?void 0:C.amount,j==null?void 0:j.balance,m,k]),g.useEffect(()=>{n({terms_conditions:c==="check"||c==="hide",cancellation_policy:x==="check"||x==="hide"})},[c,x]);const N=h=>{var B;((B=t==null?void 0:t.total)==null?void 0:B.amount)>(j==null?void 0:j.balance)&&m==="no"?(h.preventDefault(),h.target.value==="account_balance"?te("error","Insufficient Balance","Please add balance to your account"):h.target.click()):F.update(W=>{W.payment_type=h.target.value})};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"lg:col-span-2",children:e.jsxs("div",{className:"p-3 mb-3 rounded-lg bg-base-200",children:[(A==null?void 0:A.toUpperCase())==="YES"&&e.jsxs("div",{className:"p-3 mb-3 text-sm border rounded",children:[e.jsxs("h6",{className:"mb-2 font-semibold",children:[e.jsx(ie,{className:"mr-1"})," Price: ",i]}),e.jsxs("p",{children:["Updated Price: ",Y(f.currency)," ",f.amount]}),e.jsxs("p",{children:["Search Price: ",Y(l.currency)," ",l.amount]})]}),P==="YES"&&e.jsxs("div",{className:"p-3 mb-3 text-sm border rounded",children:[e.jsxs("h6",{className:"mb-2 font-semibold",children:[e.jsx(ie,{className:"mr-1"})," Fare Rules & Policy"]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("button",{onClick:()=>ee("fare_rules",a),className:"inline-flex text-primary hover:underline",children:"Penalty and Cancellation Information"}),e.jsx("button",{onClick:()=>ee("fare_rules",a),className:"inline-flex text-primary hover:underline",children:"Flight Fare rules"})]})]}),e.jsx(je,{session_expire:o,action:h=>v(h)}),e.jsxs("div",{className:"p-3 mb-3 text-sm border rounded",children:[e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[e.jsx("p",{children:"Fare/Pax type"}),e.jsx("p",{className:"font-medium",children:"Amount"})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[e.jsx("p",{children:"Base Fare"}),e.jsxs("p",{className:"font-medium",children:[Y((R=t==null?void 0:t.base_fare)==null?void 0:R.currency)," ",(O=t==null?void 0:t.base_fare)==null?void 0:O.amount]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[e.jsx("p",{children:"Tax"}),e.jsxs("p",{className:"font-medium",children:[Y((V=t==null?void 0:t.tax)==null?void 0:V.currency)," ",(q=t==null?void 0:t.tax)==null?void 0:q.amount]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[e.jsx("p",{children:"Total"}),e.jsxs("p",{className:"font-medium",children:[Y((w=t==null?void 0:t.total)==null?void 0:w.currency)," ",(b=t==null?void 0:t.total)==null?void 0:b.amount]})]}),e.jsx("hr",{className:"mb-3 border border-neutral/20"}),e.jsxs("div",{className:"flex items-center justify-between gap-4 mb-3",children:[e.jsx("p",{children:"Total Fare"}),e.jsx("p",{className:"font-medium",children:"Amount"})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4",children:[e.jsx("p",{children:"Total Published Fare"}),e.jsxs("p",{className:"font-medium",children:[Y((L=t==null?void 0:t.total)==null?void 0:L.currency)," ",(U=t==null?void 0:t.total)==null?void 0:U.amount]})]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-4 p-3 mb-3 border rounded-lg text-primary",children:[e.jsx("p",{children:"Total Payable"}),e.jsxs("p",{className:"font-medium fs-4",children:[Y((Q=t==null?void 0:t.total)==null?void 0:Q.currency)," ",(s=t==null?void 0:t.total)==null?void 0:s.amount]})]}),e.jsxs("div",{className:"grid gap-3 mb-3 sm:grid-flow-col lg:grid-flow-row xl:grid-flow-col payment-selection",children:[e.jsxs("div",{className:"relative overflow-hidden rounded-lg",children:[e.jsx("input",{autoComplete:"off",type:"radio",className:"absolute -translate-y-1/2 radio radio-xs radio-primary left-2 top-1/2 peer",name:"payment",id:"balance",value:"account_balance",defaultChecked:E==="account_balance",onClick:N}),e.jsx("label",{htmlFor:"balance",className:"block px-2 py-4 pl-8 text-nowrap bg-primary/10 peer-checked:bg-primary peer-checked:text-white",children:"Account Balance"})]}),k==="ACTIVE"&&e.jsxs("div",{className:"relative overflow-hidden rounded-lg",children:[e.jsx("input",{autoComplete:"off",type:"radio",className:"absolute -translate-y-1/2 radio radio-primary radio-xs top-1/2 left-2 peer",name:"payment",id:"card",value:"onlinepayment",defaultChecked:E==="onlinepayment",onClick:N}),e.jsxs("label",{className:"block px-2 py-4 pl-8 bg-primary/10 peer-checked:bg-primary peer-checked:text-white",htmlFor:"card",children:["Card ",e.jsx(Be,{className:"ml-1"})]})]})]}),c!=="hide"&&e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("input",{autoComplete:"off",className:"rounded checkbox checkbox-xs checkbox-primary",type:"checkbox",checked:p.terms_conditions,id:"terms",onChange:h=>n({...p,terms_conditions:h.target.checked})}),e.jsxs("label",{className:"text-sm font-medium form-check-label",htmlFor:"terms",children:["I have read and accept all"," ",e.jsx("button",{onClick:()=>(u==null?void 0:u.status)==="active"&&_(!0),className:"inline text-primary",children:"Terms & Conditions"})]})]}),x!=="hide"&&e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("input",{autoComplete:"off",className:"rounded checkbox checkbox-xs checkbox-primary",type:"checkbox",checked:p.cancellation_policy,id:"policies",onChange:h=>n({...p,cancellation_policy:h.target.checked})}),e.jsxs("label",{className:"text-sm font-medium form-check-label",htmlFor:"policies",children:["I agree and understand the"," ",e.jsx("button",{onClick:()=>(r==null?void 0:r.status)==="active"&&M(!0),className:"inline text-primary",children:"Cancellation Policies"})]})]}),e.jsx(fe,{isExpired:y,isChecked:p,hold_possible:m}),e.jsx(tt,{})]})}),e.jsx(at,{isActive:I,setIsActive:_,data:u}),e.jsx(st,{isActive:D,setIsActive:M,data:r})]})};ye.propTypes={validation_data:T.object.isRequired};const Et=()=>{const[a]=Re(),{site_title:i}=H.useState(),l=a.get("tracking_id"),{price_view:{show_flight_fare_rules:f}={}}=H.useState(),{user_data:{member_id:o}}=J.useState(),{axiosInstance:t}=me(),{data:m,isLoading:d,error:u}=ue(["VALIDATION_DATA",l,o],async()=>{var c,x;const r=await t.post("/flight/validation-get-status",{booking_tracking_id:l,member_id:o});if(((c=r.data)==null?void 0:c.status)==="success")return r.data;throw{...r,message:((x=r.data)==null?void 0:x.reason)||"Request failed!"}});if(g.useEffect(()=>{z.update(r=>{r.booking_tracking_id=l}),F.update(r=>{r.booking_tracking_id=l})},[l]),d)return e.jsx(Ce,{});if(u)throw u;return e.jsxs(e.Fragment,{children:[e.jsx(we,{children:e.jsxs("title",{children:["Flight Checkout",i?" - "+i:""]})}),e.jsx("main",{className:"container min-h-screen pt-20",children:e.jsxs("div",{className:"grid grid-cols-1 gap-4 pt-2 mb-8 lg:grid-cols-7",children:[e.jsx(ge,{validation_data:m}),e.jsx(ye,{validation_data:m})]})}),f==="YES"&&e.jsx(Ye,{})]})};export{Et as default};
