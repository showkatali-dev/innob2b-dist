import{o as D,m as E,q as e,a4 as M,a5 as R,T as d}from"./index-d20e4767.js";import{dP as I,d as q,e as B,an as b,dQ as v,dR as g,dS as w,dT as y,dU as k,dV as C,dW as h,dX as L,dY as O,dZ as Q,d_ as H,d$ as K,e0 as U,e1 as V}from"./App-e22994df.js";const $=()=>{var p;const{site_title:j}=D.useState(),{status:S,firebaseAuth:m}=I(),{member_id:n,login_key:c}=((p=E.useState())==null?void 0:p.user_data)||{},{axiosInstance:r}=q(),{data:f=[],isLoading:F,error:N,refetch:o}=B({queryKey:["SSO_BIND",c,n],queryFn:async()=>{var s;return((s=(await r.post("/secure?pathName=/user/sso-bind-list",{login_key:c,member_id:n})).data)==null?void 0:s.connected_data)||[]}});if(N)throw N;if(F)return e.jsx(M,{});const l=f.filter(t=>t.status==="connected").map(t=>t.platform),x=f.filter(t=>t.status==="no").map(t=>t.platform),Y=()=>{h(m,L).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},A=()=>{h(m,O).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},G=()=>{h(m,Q).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},T=()=>{h(m,H).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},W=()=>{h(m,K).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},_=()=>{h(m,U).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},P=()=>{h(m,V).then(async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-bind",{login_key:c,member_id:n,data:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))})},u=async t=>{var i,a;const s=await r.post("/secure?pathName=/user/sso-disconnect",{login_key:c,member_id:n,sso_platform:t});((i=s.data)==null?void 0:i.status)==="success"&&(await o(),d("success","Success!",(a=s.data)==null?void 0:a.reason))};return e.jsxs("div",{className:"p-4 mb-8 rounded-md bg-base-200",children:[e.jsx(R,{children:e.jsxs("title",{children:["Social Authentication",j?" - "+j:""]})}),e.jsx("div",{className:"min-h-[75vh] gap-4",children:S!=="active"?e.jsx("div",{children:e.jsx("p",{children:"This service is currently not available"})}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"mb-4 text-xl font-semibold",children:"Connected Accounts"}),e.jsxs("div",{className:"flex flex-col gap-4 mb-12",children:[(l==null?void 0:l.length)===0&&e.jsx("p",{className:"text-neutral",children:"No connected accounts"}),l.includes("google")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"text-5xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Google"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Google"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("google"),children:"Click to Disconnect"})]}),l.includes("facebook")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(v,{className:"text-5xl text-blue-700"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Facebook"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Facebook"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("facebook"),children:"Click to Disconnect"})]}),l.includes("github")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{className:"text-5xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Github"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Github"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("github"),children:"Click to Disconnect"})]}),l.includes("twitter")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{className:"text-5xl text-blue-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Twitter"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Twitter"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("twitter"),children:"Click to Disconnect"})]}),l.includes("apple")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{className:"text-5xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Apple"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Apple"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("apple"),children:"Click to Disconnect"})]}),l.includes("microsoft")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"text-5xl text-red-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Microsoft"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Microsoft"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("microsoft"),children:"Click to Disconnect"})]}),l.includes("yahoo")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"text-5xl text-indigo-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Yahoo"}),e.jsx("p",{className:"text-sm text-neutral",children:"You can Sign in with Yahoo"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:()=>u("yahoo"),children:"Click to Disconnect"})]})]}),e.jsx("h1",{className:"mb-4 text-xl font-semibold",children:"Available Options"}),e.jsxs("div",{className:"flex flex-col gap-4",children:[x.includes("google")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(b,{className:"text-5xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Google"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Google"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:Y,children:"Click to Connect"})]}),x.includes("facebook")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(v,{className:"text-5xl text-blue-700"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Facebook"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Facebook"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:A,children:"Click to Connect"})]}),x.includes("github")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{className:"text-5xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Github"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Github"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:G,children:"Click to Connect"})]}),x.includes("twitter")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(w,{className:"text-5xl text-blue-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Twitter"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Twitter"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:T,children:"Click to Connect"})]}),x.includes("apple")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(y,{className:"text-5xl"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Apple"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Apple"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:W,children:"Click to Connect"})]}),x.includes("microsoft")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(k,{className:"text-5xl text-red-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Microsoft"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Microsoft"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:_,children:"Click to Connect"})]}),x.includes("yahoo")&&e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(C,{className:"text-5xl text-indigo-500"}),e.jsxs("div",{children:[e.jsx("h2",{className:"font-medium",children:"Yahoo"}),e.jsx("p",{className:"text-sm text-neutral",children:"Enable Sign in with Yahoo"})]})]}),e.jsx("button",{className:"text-sm font-medium text-primary hover:underline",onClick:P,children:"Click to Connect"})]})]})]})})]})};export{$ as default};