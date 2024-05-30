import{m as I,l as D,e as N,u as R,o as e,Y as F,Q as n}from"./index.js";import{a as O,r as A,ab as L,ct as M}from"./App.js";import{S as P}from"./SupportTicketSidebar.js";import{D as Q}from"./DropDownSelectCheckout.js";import{T as U}from"./TextInputCheckout.js";import"./SingleSelect.js";const G=()=>{var f;const{site_title:p}=I.useState(),{axiosInstance:u}=O(),{member_id:g}=((f=D.useState())==null?void 0:f.user_data)||{},[a,o]=N.useState({member_id:g,category:"general"}),[d,m]=N.useState(!1),h=A(),b=R(),T=async t=>{var j,k;if(t.preventDefault(),d)return;m(!0);const{attachment_file:r,...x}=a;if(r){let s=null;const l=new FileReader;l.readAsDataURL(r),l.onload=async()=>{var c,S,_;try{if(r){const y=l.result,v=y.match(/^data:image\/([^;]+)/),w=v?v[1]:null,E=y.replace(/^data:image\/[^;]+;base64,/,""),C=await u.post("/tools/upload-base64-file",{image_type:"data",category:"support-ticket",fileExtension:w,documents_image_url:E,member_id:g});((c=C.data)==null?void 0:c.status)==="success"&&(s=C.data.ObjectURL)}const i=await u.post("/support-ticket/create",{...x,attachment_link:s||""});if(((S=i.data)==null?void 0:S.status)==="success")n("success","Success!",i.data.reason),h(`/support-ticket/${i.data.ticket_id}`),b.invalidateQueries(["SUPPORT_TICKET_LIST"]);else throw new Error(((_=i.data)==null?void 0:_.reason)||"Something wrong!")}catch(i){n("error","Error!",i.message)}finally{m(!1)}},l.onerror=c=>{n("error","Error!",c.message)}}else try{const s=await u.post("/support-ticket/create",{...x});if(((j=s.data)==null?void 0:j.status)==="success")n("success","Success!",s.data.reason),h(`/support-ticket/${s.data.ticket_id}`),b.invalidateQueries(["SUPPORT_TICKET_LIST"]);else throw new Error(((k=s.data)==null?void 0:k.reason)||"Something wrong!")}catch(s){n("error","Error!",s.message)}finally{m(!1)}};return e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(F,{children:e.jsxs("title",{children:["Create Support Ticket",p?" - "+p:""]})}),e.jsx("h1",{className:"mb-5 text-3xl font-semibold",children:"Support Ticket"}),e.jsx("hr",{className:"border-neutral/20"}),e.jsxs("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-4 lg:grid-cols-5",children:[e.jsx(P,{}),e.jsxs("div",{className:"sm:col-span-3 lg:col-span-4",children:[e.jsx("div",{className:"mb-1",children:e.jsx("h5",{className:"py-3 text-lg font-medium",children:"Create a Ticket"})}),e.jsxs("form",{onSubmit:T,className:"mb-8",children:[e.jsxs("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3",children:[e.jsx(Q,{label:"Select Category",isRequired:!0,options:[{label:"General",value:"general"},{label:"Booking",value:"booking"},{label:"Support",value:"support"}],action:t=>{var r;return o({...a,category:((r=t[0])==null?void 0:r.value)||""})},defaultValue:a.category,placeholder:"Select"}),a.category==="booking"&&e.jsx(U,{defaultValue:a.booking_id,action:t=>o({...a,booking_id:t.target.value}),label:"Booking ID",placeholder:"Enter Booking ID"}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{className:"sb-label",children:"Attachment"}),e.jsx("input",{autoComplete:"off",className:"w-full bg-transparent border rounded-md border-neutral/20 file-input file-input-ghost focus:outline-0 active:outline-0 file-input-xs",type:"file",accept:"image/*",onChange:t=>o({...a,attachment_file:t.target.files[0]})})]}),e.jsxs("div",{className:"sm:col-span-3 sb-input-container",children:[e.jsx("label",{className:"sb-label",children:"Message"}),e.jsx("textarea",{className:"py-2 sb-input min-h-16",value:a.message,onChange:t=>o({...a,message:t.target.value}),placeholder:"Enter Message"})]})]}),e.jsx("button",{type:"submit",className:`h-10 min-h-0 mt-4 normal-case border-transparent rounded-md btn bg-primary/70 btn-primary ${d?"pointer-events-none":""}`,children:d?e.jsxs(e.Fragment,{children:[e.jsx(L,{className:"mr-2 animate-spin"})," Creating..."]}):e.jsxs(e.Fragment,{children:[e.jsx(M,{})," Create"]})})]})]})]})]})};export{G as default};
