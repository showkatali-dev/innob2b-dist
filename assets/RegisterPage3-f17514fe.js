import{m as D,o as T,e as o,q as e,a4 as U,a5 as V,T as j,bd as O}from"./index-40b4770e.js";import{d as Q,e as W,dc as G,de as A,V as J}from"./App-ab507ef2.js";import{d as l}from"./register_form_data-1aa32103.js";import{C as X}from"./CountryWithCodeSelect-59592dbb.js";import{P as Y}from"./PhoneNumberSelect-bde40788.js";import{o as Z}from"./index.esm-ce81629e.js";import"./SingleSelect-75481dc3.js";const le=()=>{var F,k;const{isLoading:p,user_data:b}=D.useState(),{site_title:N}=T.useState(),[i,_]=o.useState(l.account),[s,c]=o.useState(l.partner),P=l.license,q=l.business,[d,h]=o.useState(l.contact_person),I=l.contact_finance,B=l.contact_reservation,[a,y]=o.useState({trade_license_attachment:null,tax_attachment:null,vat_attachment:null,travel_agent_license_attachment:null,id_attachment:null}),[w,v]=o.useState(null),{axiosInstance:g}=Q(),{isLoading:E}=W({queryKey:["BRANCH_LIST",p],enabled:!p,queryFn:async()=>{var r;const t=await g.post("/partner/branch-data",{validation_key:"12121221121212"});return _({...i,branch_id:(r=t.data[0])==null?void 0:r.branch_id}),t.data}}),[C,S]=o.useState(!1);if(p||E)return e.jsx(U,{});if(b!=null&&b.login_key)return e.jsx(G,{to:"/"});const m=async t=>{var u;const r=await O(t);if(r){const x=await g.post("/partner/upload-file",{...r,member_id:"1",category:"agent_register"});if(((u=x.data)==null?void 0:u.status)==="success")return x.data.ObjectURL}},L=async t=>{var r,u,x;if(t.preventDefault(),!C){v(null),S(!0);try{const f=await m(a.trade_license_attachment),z=await m(a.tax_attachment),M=await m(a.vat_attachment),R=await m(a.travel_agent_license_attachment),K=await m(a.id_attachment);if(i.password!==i.confirm_password)throw new Error("Password does not match");if(!(s!=null&&s.contact_no))throw new Error("Please fill out Phone Number");const H={account:i,partner:{...s},license:{...P,trade_license_attachment_url:f,tax_attachment_url:z,vat_attachment_url:M,travel_agent_license_attachment_url:R},business:q,contact_person:{...d,id_card_url:K},contact_finance:I,contact_reservation:B},n=await g.post("/partner/registration",H);if(((r=n.data)==null?void 0:r.status)==="success")v(((u=n==null?void 0:n.data)==null?void 0:u.reason)||"Agent registered successfully");else throw new Error(((x=n==null?void 0:n.data)==null?void 0:x.reason)||"Something wrong happened!")}catch(f){console.error(f),j("error","Failed!",f.message)}finally{S(!1)}}};return e.jsxs("main",{className:"container min-h-screen mt-20 mb-8",children:[e.jsx(V,{children:e.jsxs("title",{children:["Agent Registration",N?" - "+N:""]})}),e.jsx("form",{onSubmit:L,autoComplete:"off",className:"p-5 rounded-lg bg-base-200",children:w?e.jsxs("div",{className:"flex flex-col items-center justify-center w-full gap-4 py-16 text-center",children:[e.jsx("div",{className:"flex items-center justify-center w-16 h-16 text-3xl border rounded-full text-success border-success/20",children:e.jsx(Z,{})}),e.jsx("h1",{className:"text-3xl font-semibold ",children:"Success!"}),e.jsx("p",{className:"max-w-lg",children:w})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("h1",{className:"mb-4 text-xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-primary-focus to-primary w-fit",children:"Account Information"}),e.jsxs("div",{className:"grid grid-cols-2 gap-5 mb-12 gap-x-8",children:[e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["Agency/Company Name ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx("input",{autoComplete:"off",type:"text",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8 focus:border-primary",required:!0,value:s.legal_name,onChange:t=>c({...s,legal_name:t.target.value,brand_name:t.target.value})})]}),e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["Full Name ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx("input",{autoComplete:"off",type:"text",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8 focus:border-primary",value:d.name,required:!0,onChange:t=>h({...d,name:t.target.value})})]}),e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["Email Address ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx("input",{autoComplete:"off",type:"email",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8 focus:border-primary",value:i.email,onChange:t=>{_({...i,email:t.target.value}),h({...d,email_address:t.target.value})}})]}),e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["Phone No. ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx(Y,{placeholder:"Enter Mobile Number",className:"!h-10 !text-sm !bg-transparent !rounded input !input-bordered !border-base-content/20 focus:outline-0 min-h-8 !w-full",defaultValue:String(s.isd_code||"")+String(s.contact_no||""),action:t=>{c({...s,isd_code:t==null?void 0:t.isd_code,contact_no:t==null?void 0:t.mobile}),h({...d,isd_code:t==null?void 0:t.isd_code,contact_no:t==null?void 0:t.mobile})},required:!0})]}),e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["Full Address ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx("input",{autoComplete:"off",type:"text",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8 focus:border-primary",required:!0,value:s.address,onChange:t=>c({...s,address:t.target.value})})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["City ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx("input",{autoComplete:"off",type:"text",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8 focus:border-primary",required:!0,value:s.city,onChange:t=>c({...s,city:t.target.value})})]}),e.jsxs("label",{className:"form-control",children:[e.jsx("div",{className:"inline-block label",children:e.jsxs("span",{className:"label-text",children:["Country ",e.jsx("span",{className:"text-error",children:"*"})]})}),e.jsx(X,{className:"h-10 text-sm bg-transparent !rounded input input-bordered !border-base-content/20 !px-2 focus:outline-0 min-h-8 focus:border-primary",defaultValue:s.country,action:t=>{var r;return c({...s,country:((r=t==null?void 0:t.at(0))==null?void 0:r.value)||""})},required:!0})]})]})]}),e.jsx("div",{className:"mt-5",children:e.jsxs("div",{children:[e.jsx("h1",{className:"mb-4 text-xl font-semibold text-transparent bg-gradient-to-r bg-clip-text from-primary-focus to-primary w-fit",children:"Required Documents"}),e.jsxs("div",{className:"grid grid-cols-2 gap-5 mb-5",children:[e.jsxs("div",{className:"gap-2 form-control",children:[e.jsx("div",{className:"text-sm",children:"Trade License"}),e.jsxs("label",{className:"flex items-center justify-center px-4 py-3 border border-dashed rounded-lg border-primary text-primary min-w-[200px] cursor-pointer",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(A,{})," ",((F=a==null?void 0:a.trade_license_attachment)==null?void 0:F.name)||"Upload"]}),e.jsx("input",{autoComplete:"off",type:"file",onChange:t=>{if(t.target.files[0].size>512e3){j("warning","Attention!","File size should be less than 500KB"),t.target.value=null;return}y({...a,trade_license_attachment:t.target.files[0]})},accept:"image/png, image/jpg, image/jpeg, application/pdf",className:"hidden"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"float-left bg-warning relative w-5 h-4 before:content-['Info'] before:absolute before:left-0 before:top-0 before:inline-flex before:w-full before:h-full before:items-center before:justify-center before:pl-1 before:text-white before:text-[8px] flex after:left-full after:top-0 after:border-8 after:border-base-200 after:border-l-warning after:absolute"}),e.jsx("p",{className:"text-xs text-neutral indent-4",children:"Maximum size of 500KB"})]})]}),e.jsxs("div",{className:"gap-2 form-control",children:[e.jsx("div",{className:"text-sm",children:"National ID"}),e.jsxs("label",{className:"flex items-center justify-center px-4 py-3 border border-dashed rounded-lg border-primary text-primary min-w-[200px] cursor-pointer",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(A,{})," ",((k=a==null?void 0:a.id_attachment)==null?void 0:k.name)||"Upload"]}),e.jsx("input",{autoComplete:"off",type:"file",onChange:t=>{if(t.target.files[0].size>512e3){j("warning","Attention!","File size should be less than 500KB"),t.target.value=null;return}y({...a,id_attachment:t.target.files[0]})},accept:"image/png, image/jpg, image/jpeg, application/pdf",className:"hidden"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"float-left bg-warning relative w-5 h-4 before:content-['Info'] before:absolute before:left-0 before:top-0 before:inline-flex before:w-full before:h-full before:items-center before:justify-center before:pl-1 before:text-white before:text-[8px] flex after:left-full after:top-0 after:border-8 after:border-base-200 after:border-l-warning after:absolute"}),e.jsx("p",{className:"text-xs text-neutral indent-4",children:"Maximum size of 500KB"})]})]})]})]})})]}),e.jsxs("div",{className:"flex justify-between mt-5",children:[e.jsxs("label",{className:"flex items-center gap-1",children:[e.jsx("input",{type:"checkbox",className:"rounded checkbox checkbox-sm checkbox-primary",required:!0}),e.jsx("span",{className:"text-sm",children:"I agree with sharing the above mentioned information"})]}),e.jsx("button",{type:"submit",className:"w-32 h-10 min-h-0 font-normal normal-case rounded btn btn-primary",children:C?e.jsxs(e.Fragment,{children:[e.jsx(J,{className:"mr-1 animate-spin"})," ","Processing..."]}):e.jsx(e.Fragment,{children:"Submit"})})]})]})})]})};export{le as default};