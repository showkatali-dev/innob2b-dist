import{m as f,e as r,l as S,u as _,o as e,Y as A,Q as b,b6 as F}from"./index.js";import{r as B}from"./index.esm2.js";import{a as w,r as I,T as C}from"./App.js";import{F as T}from"./FileInputBoxForSettings.js";const L=()=>{const{site_title:c}=f.useState(),[s,i]=r.useState({banner_position:"banner-slide",title:"",summery:"",status:"active",link:""}),[p,h]=r.useState(null),{axiosInstance:o}=w(),{user_data:{login_key:x,member_id:d}}=S.useState(),g=_(),j=I(),v=async a=>{var n;const t=await F(a);if(t){const l=await o.post("/secure?pathName=/tools/upload-cdn",{...t,member_id:d,category:"partner-banner"});if(((n=l.data)==null?void 0:n.status)==="success")return l.data.ObjectURL}},[N,u]=r.useState(!1),y=async a=>{var t;a.preventDefault(),u(!0);try{const n=await v(p),l={...s,login_key:x,member_id:d,ads_image_url:n,link:n},m=await o.post("/secure?pathName=/partner/partner-ads-add",l);((t=m.data)==null?void 0:t.status)==="success"&&(b("success","Success!",m.data.reason),g.invalidateQueries(["PARTNER_ADDS_LIST"]),j("/settings/manage-banner"))}catch(n){console.error(n),b("error","Failed!",n.message)}finally{u(!1)}};return e.jsxs(e.Fragment,{children:[e.jsx(A,{children:e.jsxs("title",{children:["Add Banner",c?" - "+c:""]})}),e.jsxs("form",{onSubmit:y,className:"mb-5 sm:col-span-3 lg:col-span-4",children:[e.jsx("div",{className:"flex flex-col justify-between gap-4 mb-2 md:items-center md:flex-row",children:e.jsx("div",{className:"py-3 mb-1",children:e.jsx("h5",{className:"text-lg font-medium",children:"Add Banner Image"})})}),e.jsxs("div",{className:"grid gap-5 mb-5 sm:grid-cols-3",children:[e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{className:"sb-label",children:"Banner Type"}),e.jsxs("select",{className:"sb-input",value:s==null?void 0:s.banner_position,onChange:a=>i({...s,banner_position:a.target.value}),children:[e.jsx("option",{value:"banner-slide",children:"Banner Slide"}),e.jsx("option",{value:"banner-big",children:"Big Banner"})]})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{className:"sb-label",children:"Banner Title"}),e.jsx("input",{className:"sb-input",value:s==null?void 0:s.title,onChange:a=>i({...s,title:a.target.value}),placeholder:"Enter Banner Title"})]}),e.jsx(T,{label:"Banner Image",action:a=>h(a.target.files[0]),isLinkActive:!1,accept:"image/*"}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{className:"sb-label",children:"Status"}),e.jsxs("select",{className:"sb-input",value:s==null?void 0:s.status,onChange:a=>i({...s,status:a.target.value}),children:[e.jsx("option",{value:"disable",children:"Disable"}),e.jsx("option",{value:"active",children:"Active"})]})]}),e.jsxs("div",{className:"sm:col-span-3 sb-input-container",children:[e.jsx("label",{className:"sb-label",children:"Summary Description"}),e.jsx("textarea",{className:"sb-input !min-h-16",value:s==null?void 0:s.summery,onChange:a=>i({...s,summery:a.target.value}),placeholder:"Enter Summary Description"})]})]}),e.jsx("button",{type:"submit",className:"h-10 min-h-0 rounded btn btn-primary h10 w-36 btn-outline",children:N?e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"animate-spin"})," Adding..."]}):e.jsxs(e.Fragment,{children:[e.jsx(B,{})," Add"]})})]})]})};export{L as default};
