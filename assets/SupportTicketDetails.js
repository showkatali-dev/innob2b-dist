import{l as _,e as T,u as C,o as e,Q as v,m as F,Y as R}from"./index.js";import{P as S,b as w,U as H,aE as q,c as U,cu as D,cw as L,cr as O,ac as Q}from"./App.js";import{S as K}from"./SupportTicketSidebar.js";const E=({ticket_details:d,setAddSupportTicketNote:a})=>{const{ticket_status:l,ticket_id:i}=d||{},{user_data:{member_id:o}}=_.useState(),{axiosInstance:m}=w(),[s,x]=T.useState(!1),u=C(),y=async p=>{var j,b,f,n,c;if(p.preventDefault(),s)return;x(!0);const h=p.target,k={member_id:o,ticket_id:i,ticket_status:h.ticket_status.value,notes:h.notes.value};try{const t=await m.post("/support-ticket/reply",k);if(a(!1),((j=t.data)==null?void 0:j.status)==="success")v("success","Reply Sent!",(b=t==null?void 0:t.data)==null?void 0:b.reason),u.invalidateQueries(["SUPPORT_TICKET_DETAILS",o,i]);else throw new Error(((f=t.data)==null?void 0:f.reason)||"Something wrong!")}catch(t){v("error","Error!",(c=(n=t==null?void 0:t.response)==null?void 0:n.data)==null?void 0:c.reason)}finally{x(!1)}};return e.jsxs("form",{onSubmit:y,className:"flex gap-4 p-3 mb-8 border rounded-md border-primary",children:[e.jsx("div",{className:"flex-1",children:e.jsx("textarea",{name:"notes",className:"w-full h-full p-0 bg-transparent rounded min-h-16 textarea focus:outline-0",placeholder:"Write a note..."})}),e.jsxs("div",{className:"grid gap-4",children:[e.jsxs("div",{className:"gap-1 form-control",children:[e.jsx("label",{className:"text-sm font-medium",children:"Ticket Status"}),e.jsxs("select",{className:"w-full bg-transparent rounded select select-sm select-bordered select-primary focus:outline-0",name:"ticket_status",defaultValue:l,children:[e.jsx("option",{value:"open",children:"Open"}),e.jsx("option",{value:"hold",children:"Hold"}),e.jsx("option",{value:"close",children:"Close"})]})]}),e.jsx("button",{type:"submit",className:"w-40 tracking-wider normal-case rounded-md btn-sm btn btn-primary",children:s?e.jsxs(e.Fragment,{children:[e.jsx(H,{className:"animate-spin"})," Processing..."]}):e.jsx(e.Fragment,{children:"Update Ticket"})})]})]})};E.propTypes={ticket_details:S.object.isRequired,setAddSupportTicketNote:S.func.isRequired};const W=()=>{var n,c,t;const{site_title:d}=F.useState(),{ticket_id:a}=q(),[l,i]=T.useState(!1),{axiosInstance:o}=w(),{member_id:m}=((n=_.useState())==null?void 0:n.user_data)||{},{data:s,isLoading:x,error:u}=U({queryKey:["SUPPORT_TICKET_DETAILS",m,a],queryFn:async()=>{var g,N;const r=await o.post("/support-ticket/details",{member_id:m,ticket_id:a});if(((g=r.data)==null?void 0:g.status)==="success")return r.data;throw{...r,message:((N=r.data)==null?void 0:N.reason)||"Request failed!"}}});if(u)throw u;const{fullname:y,email:p,phone:h,category:k,ticket_status:j,support_message:b,attachment_link:f}=(s==null?void 0:s.summery)||{};return e.jsx(e.Fragment,{children:e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(R,{children:e.jsxs("title",{children:["Support Ticket - ",a,d?" - "+d:""]})}),e.jsx("h1",{className:"mb-5 text-3xl font-semibold",children:"Support Ticket"}),e.jsx("hr",{className:"border-neutral/20"}),e.jsxs("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-5",children:[e.jsx(K,{}),e.jsx("div",{className:"sm:col-span-3 lg:col-span-4",children:x?e.jsxs("div",{className:"flex items-center justify-center h-full gap-2 text-xl",children:[e.jsx(Q,{className:"mr-2 animate-spin text-primary"})," ","Loading..."]}):e.jsxs("div",{className:"p-4 rounded-lg bg-base-200",children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("h5",{className:"text-xl font-semibold",children:[e.jsx(D,{})," Ticket ID - ",a]}),e.jsxs("div",{className:"flex flex-col items-end gap-3",children:[e.jsxs("div",{className:"text-xs",children:[e.jsxs("p",{className:"capitalize",children:["Category: ",k]}),e.jsxs("p",{className:"text-base font-semibold capitalize",children:["Ticket Status: ",j]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("a",{href:f,target:"_blank",rel:"noreferrer",className:"tracking-wider text-white normal-case rounded-md shadow btn-sm btn btn-info",children:[e.jsx(L,{})," View Attachment"]}),e.jsx("button",{onClick:()=>i(!l),className:"tracking-wider normal-case rounded-md shadow btn-sm btn btn-primary",children:l?"Cancel":e.jsxs(e.Fragment,{children:[e.jsx(O,{})," Add Note"]})})]})]})]}),l&&e.jsx(E,{ticket_details:(s==null?void 0:s.summery)||{},setAddSupportTicketNote:i}),e.jsxs("div",{className:"flex gap-4 p-3 mb-8 border rounded-md",children:[e.jsx("div",{className:"flex-1",children:e.jsx("p",{children:b})}),e.jsxs("div",{className:"p-3 rounded-md bg-base-100",children:[e.jsx("h6",{className:"mb-1 font-semibold text-primary",children:"Ticket by"}),e.jsx("p",{className:"mb-1 text-sm font-semibold",children:y}),e.jsx("div",{className:"text-xs",children:e.jsxs("div",{className:"text-xs",children:[e.jsxs("p",{children:["Email: ",p]}),e.jsxs("p",{children:["Phone Number: ",h]})]})})]})]}),e.jsxs("h3",{className:"mb-3 text-lg font-semibold",children:[((c=s==null?void 0:s.data)==null?void 0:c.length)||0," Answers"]}),e.jsx("div",{className:"flex flex-col gap-4",children:(t=s==null?void 0:s.data)==null?void 0:t.map(r=>{const{Id:g,fullname:N,email:P,phone:A,notes:I}=r||{};return e.jsxs("div",{className:"flex gap-4 p-3 mb-8 border rounded-md",children:[e.jsx("div",{className:"flex-1",children:e.jsx("p",{children:I})}),e.jsxs("div",{className:"p-3 rounded-md bg-base-100",children:[e.jsx("h6",{className:"mb-1 font-semibold text-primary",children:"Reply by"}),e.jsx("p",{className:"mb-1 text-sm font-semibold",children:N}),e.jsx("div",{className:"text-xs",children:e.jsxs("div",{className:"text-xs",children:[e.jsxs("p",{children:["Email: ",P]}),e.jsxs("p",{children:["Phone Number: ",A]})]})})]})]},g)})})]})})]})]})})};export{W as default};
