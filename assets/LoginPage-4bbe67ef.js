import{m,o as u,q as e,a4 as p,a5 as j}from"./index-d20e4767.js";import{n as h,W as b,dc as N,ei as g,dM as v,dN as f}from"./App-e22994df.js";import{L as y}from"./LoginOtp-df8330cb.js";const S=()=>{const{isLoading:i,user_data:r}=m.useState(),{site_title:t,intro_video:n,intro_banner:o,system_config:s,logo:c}=u.useState(),[d]=h(),x=d.get("otp_required"),{state:a}=b(),l=(a==null?void 0:a.pathname)||"/";return i?e.jsx(p,{}):r!=null&&r.login_key?e.jsx(N,{to:l}):e.jsxs("div",{style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",backgroundSize:"cover",backgroundBlendMode:"multiply"},children:[e.jsx(j,{children:e.jsxs("title",{children:["Login",t?" - "+t:""]})}),n&&e.jsx("video",{id:"background-video",src:n,poster:o,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:"Your browser does not support the video tag."}),e.jsxs("main",{className:"grid min-h-screen mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl",children:[e.jsx("div",{className:"lg:col-span-2"}),e.jsxs("div",{className:"flex flex-col items-center justify-between min-h-screen px-8 py-4 md:px-12 bg-base-200/70",children:[e.jsxs("div",{className:"my-auto",children:[e.jsxs("div",{className:"flex flex-col items-center mb-5",children:[e.jsx("div",{className:"flex items-center justify-center w-16 h-16 mb-2 overflow-hidden border rounded-full border-neutral/10",children:e.jsx("img",{src:c,alt:"logo",className:"object-cover object-center w-full"})}),e.jsx("h1",{className:"text-xl font-semibold",children:t})]}),x==="yes"?e.jsx(y,{redirectTo:l}):e.jsx(g,{redirectTo:l}),((s==null?void 0:s.support_contact_no)||(s==null?void 0:s.support_email))&&e.jsxs("div",{className:"mt-8 text-center justify-self-end text-neutral",children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[e.jsx("hr",{className:"w-16 border-secondary"}),e.jsx("span",{className:"text-secondary",children:"Contact"}),e.jsx("hr",{className:"w-16 border-secondary"})]}),(s==null?void 0:s.support_contact_no)&&e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("div",{className:"inline-flex items-center justify-center p-1 border rounded-full border-secondary text-secondary",children:e.jsx(v,{})}),e.jsx("p",{className:"text-sm text-neutral",children:s==null?void 0:s.support_contact_no})]}),(s==null?void 0:s.support_email)&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"inline-flex items-center justify-center p-1 border rounded-full border-secondary text-secondary",children:[" ",e.jsx(f,{})]}),e.jsx("p",{className:"text-sm text-neutral",children:s==null?void 0:s.support_email})]})]})]}),e.jsx("div",{className:"pt-5 text-sm text-center justify-self-end text-neutral/90",children:e.jsxs("p",{children:[" ","Copyright ",new Date().getFullYear()," © ",s==null?void 0:s.copyright]})})]})]})]})};export{S as default};