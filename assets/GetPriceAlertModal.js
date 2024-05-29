import{P as b,r as v,d as I,e as F,j as e,aR as w,k as o,s as E,af as B}from"./index.js";const P=({data:p,refetchBookingDetails:g})=>{const[l,s]=v.useState(!1),{axiosInstance:i}=I(),{tracking_id:d,booking_id:f}=p,{user_data:{member_id:j}}=F.useState(),_=async m=>{var h,c,x;m.preventDefault(),s(!0);const u=m.target,a=u.notes.value,t=u.price_change_accepted.value,y={notes:a,price_change_accepted:t,member_id:j,tracking_id:d};try{const n=await i.post("/flight/issue-ticket",y);document.getElementById("issue_ticket_modal").close(),((h=n.data)==null?void 0:h.status)==="success"?(o("success","Issue Successful",(c=n.data)==null?void 0:c.reason),g()):o("error","Issue Failed",(x=n.data)==null?void 0:x.reason)}catch(n){document.getElementById("issue_ticket_modal").close(),o("error","Issue Failed",n.message)}finally{s(!1)}};return e.jsx("dialog",{id:"issue_ticket_modal",className:"modal",children:e.jsxs("form",{onSubmit:_,className:"p-4 modal-box",children:[e.jsxs("h3",{className:"text-lg font-semibold",children:["Flight - Issue Ticket - ",f]}),e.jsx("hr",{className:"mb-4"}),e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Please provide notes for ticket issuance."}),e.jsx("input",{autoComplete:"off",type:"text",name:"notes",className:"input input-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 mb-2 w-full max-w-[300px]",placeholder:"Type notes"}),e.jsx("p",{className:"mt-4 mb-2 text-sm font-medium text-neutral",children:"Are you agree with the authorized price modification during ticket issuance? We will inform you if there are changes to the price at the time of ticket issuance."}),e.jsxs("select",{type:"text",name:"price_change_accepted",className:"select select-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 mb-4 w-full max-w-[300px]",defaultValue:"no",children:[e.jsx("option",{value:"no",children:"No"}),e.jsx("option",{value:"yes",children:"Yes"})]}),e.jsx("hr",{}),e.jsxs("div",{className:"modal-action",children:[e.jsx("button",{type:"submit",className:`normal-case btn btn-success btn-sm btn-outline ${l?"pointer-events-none":""}`,children:l?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"mr-2 animate-spin"})," Processing..."]}):"Issue Ticket"}),e.jsx("button",{type:"button",onClick:()=>document.getElementById("issue_ticket_modal").close(),className:"normal-case btn btn-sm btn-outline text-neutral/70 hover:bg-neutral/70 border-neutral/70 hover:border-neutral/70",children:"Close"})]})]})})};P.propTypes={data:b.object.isRequired,refetchBookingDetails:b.func.isRequired};const q=({data:p,refetchBookingDetails:g})=>{const{booking_manage:l}=E.useState(),{booking_auto_cancel:s}=l||{},[i,d]=v.useState(!1),{axiosInstance:f}=I(),{tracking_id:j,booking_id:_,booking_status:m,special_notice_status:u,special_notice:a}=p,{user_data:{member_id:t}}=F.useState(),y=v.useMemo(()=>Math.floor(1e5+Math.random()*9e5),[]),h=async c=>{var r,C,S,T;c.preventDefault(),d(!0);const k={reason:((r=c.target.reason)==null?void 0:r.value)||"n/a",member_id:t,tracking_id:j};try{const N=await f.post("/flight/cancel-booking",k);document.getElementById("cancel_flight_modal").close(),((C=N.data)==null?void 0:C.status)==="success"?(o("success","Flight Canceled",(S=N.data)==null?void 0:S.reason),g()):o("error","Cancellation Failed",(T=N.data)==null?void 0:T.reason)}catch(N){o("error","Cancellation Failed",N.message)}finally{d(!1)}};return e.jsx("dialog",{id:"cancel_flight_modal",className:"modal",children:e.jsxs("form",{onSubmit:h,className:"max-w-2xl p-4 rounded-md modal-box",children:[e.jsxs("h3",{className:"pb-2 text-lg font-semibold",children:["Cancel Flight Ticket - ",_]}),e.jsx("hr",{className:"mb-4"}),m==="hold"&&u==="active"&&e.jsxs("div",{className:"p-2 mb-4 text-sm border rounded-md border-warning/20 text-warning",children:[e.jsx("h2",{className:"mb-1 text-lg font-semibold text-red-600",children:"***Attention***"}),e.jsx("div",{className:"mb-2 font-light text-red-400",dangerouslySetInnerHTML:{__html:B(a)||""}})]}),(s==null?void 0:s.toUpperCase())==="YES"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mb-2 text-sm font-medium text-neutral",children:["Type"," ",e.jsx("strong",{className:"pointer-events-none select-none",children:y})," ","to Cancel the Flight Ticket"]}),e.jsx("input",{autoComplete:"off",type:"text",name:"reason",className:"input input-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 w-full max-w-[300px]"}),e.jsx("hr",{className:"mt-4"})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{className:"mb-2 text-sm font-medium text-neutral",children:["To cancel the booking, simply click the"," ",e.jsx("strong",{children:"Cancel Flight"})," button."]}),e.jsx("hr",{className:"mt-4"})]}),e.jsxs("div",{className:"modal-action",children:[e.jsx("button",{type:"submit",className:`normal-case btn btn-error btn-sm btn-outline rounded-md ${i?"pointer-events-none":""}`,children:i?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"mr-2 animate-spin"})," Processing..."]}):"Cancel Flight"}),e.jsx("button",{onClick:()=>document.getElementById("cancel_flight_modal").close(),type:"button",className:"normal-case rounded-md btn btn-sm btn-outline text-neutral/70 hover:bg-neutral/70 border-neutral/70 hover:border-neutral/70",children:"Close"})]})]})})};q.propTypes={data:b.object.isRequired,refetchBookingDetails:b.func.isRequired};const R=({data:p,refetchBookingDetails:g})=>{const[l,s]=v.useState(!1),{axiosInstance:i}=I(),{tracking_id:d,booking_id:f}=p,[j,_]=v.useState(!1),{user_data:{member_id:m}}=F.useState(),u=async a=>{var x,n,k;a.preventDefault(),s(!0);const t=a.target,y=t.notes.value,h=t.price_change_accepted.value,c={notes:y,price_change_accepted:h,member_id:m,tracking_id:d};try{const r=await i.post("/flight/issue-ticket",c);document.getElementById("get_price_alert_modal").close(),((x=r.data)==null?void 0:x.status)==="success"?(o("success","Updated Successfully",(n=r.data)==null?void 0:n.reason),g()):o("error","Failed",(k=r.data)==null?void 0:k.reason)}catch(r){o("error","Failed",r.message)}finally{s(!1)}};return e.jsx("dialog",{id:"get_price_alert_modal",className:"modal",children:e.jsxs("form",{onSubmit:u,className:"p-4 modal-box",children:[e.jsxs("h3",{className:"text-lg font-semibold",children:["Get Price Alert - ",f]}),e.jsx("hr",{className:"mb-4"}),e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Activate this service?"}),e.jsxs("select",{type:"text",name:"",className:"select select-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 mb-4 w-full max-w-[300px]",defaultValue:"no",onChange:a=>_(a.target.value==="yes"),children:[e.jsx("option",{value:"no",children:"No"}),e.jsx("option",{value:"yes",children:"Yes"})]}),j&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Get service for"}),e.jsx("select",{type:"text",name:"",className:"select select-bordered min-h-8 text-sm rounded h-10 focus:outline-0 focus:border-neutral/30 mb-4 w-full max-w-[300px]",defaultValue:"no",children:[...Array(48)].map((a,t)=>e.jsxs("option",{value:t+1,children:[t+1," ",t>0?"Hours":"Hour"]},t))})]}),e.jsx("hr",{}),e.jsxs("div",{className:"modal-action",children:[e.jsx("button",{type:"submit",className:`normal-case btn btn-warning btn-sm btn-outline ${l?"pointer-events-none":""}`,children:l?e.jsxs(e.Fragment,{children:[e.jsx(w,{className:"mr-2 animate-spin"})," Processing..."]}):"Activate"}),e.jsx("button",{type:"button",onClick:()=>document.getElementById("get_price_alert_modal").close(),className:"normal-case btn btn-sm btn-outline text-neutral/70 hover:bg-neutral/70 border-neutral/70 hover:border-neutral/70",children:"Close"})]})]})})};R.propTypes={data:b.object.isRequired,refetchBookingDetails:b.func.isRequired};export{q as C,R as G,P as I};
