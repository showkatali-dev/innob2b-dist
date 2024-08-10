import{m as L,o as C,e as b,q as e,a4 as z,a5 as H,I as j,U as y,T as v}from"./index-40b4770e.js";import{W as A,d as B,o as D,n as M,dc as Y,L as q,er as O,et as T,eu as U,V}from"./App-ab507ef2.js";import"./autoplay-4ed993c7.js";const K=()=>{const{isLoading:N,user_data:t}=L.useState(),{site_title:i,intro_video:c,intro_banner:F,system_config:a}=C.useState(),{state:r}=A(),P=(r==null?void 0:r.pathname)||"/",[d,u]=b.useState(!1),{axiosInstance:k}=B(),S=D(),[s,E]=b.useState(!1),[m]=M(),p=m.get("reset_token"),x=m.get("token_expire"),_=async g=>{var h,f,w;if(g.preventDefault(),d||!p||!x)return;u(!0);const o=g.target,I=o.password.value,R=o.cpassword.value;try{const n={reset_token:p,token_expire:x,password:I,cpassword:R},l=await k.post("/user/password-reset-do",n);if(((h=l.data)==null?void 0:h.status)==="success")v("success","Success",(f=l.data)==null?void 0:f.reason),o.reset(),S("/login");else throw new Error(((w=l.data)==null?void 0:w.reason)||"Something went wrong")}catch(n){v("error","Failed!",n.message)}finally{u(!1)}};return N?e.jsx(z,{}):t!=null&&t.login_key?e.jsx(Y,{to:P}):e.jsxs("div",{style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",backgroundSize:"cover",backgroundBlendMode:"multiply"},children:[e.jsx(H,{children:e.jsxs("title",{children:["Forgot Password",i?" - "+i:""]})}),c&&e.jsx("video",{id:"background-video",src:c,poster:F,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:"Your browser does not support the video tag."}),e.jsxs("main",{className:"grid min-h-screen mx-auto md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl",children:[e.jsx("div",{className:"lg:col-span-2"}),e.jsxs("div",{className:"relative flex flex-col items-center justify-center min-h-screen px-8 py-4 md:px-12 bg-base-200/70",children:[e.jsxs(q,{to:"/login",className:"absolute normal-case rounded-full btn btn-ghost btn-sm top-4 left-2 hover:bg-primary/10",children:[e.jsx(O,{})," Back to login"]}),e.jsx("p",{className:"mb-8 font-medium text-center text-neutral",children:"Reset Password"}),e.jsxs("form",{onSubmit:_,className:"flex flex-col w-full gap-y-4",children:[e.jsxs("div",{className:"flex-1 rounded-full join bg-[#E9E7FF] relative",children:[e.jsx("input",{autoComplete:"off",type:s?"text":"password",name:"password","data-type":"password",className:"flex-1 h-10 pl-10 text-sm bg-transparent rounded input focus:outline-0 min-h-8 join-item",placeholder:"New Password"}),e.jsx("span",{className:"absolute inline-flex items-center h-full text-lg left-4 text-primary",children:e.jsx(j,{path:y,size:.8})}),e.jsx("button",{onClick:()=>E(!s),type:"button",className:"h-10 btn join-item min-h-8 bg-[#E9E7FF] border-[#dddaf5] hover:bg-[#dddaf5]",children:s?e.jsx(T,{}):e.jsx(U,{})})]}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{autoComplete:"off",type:s?"text":"password",name:"cpassword","data-type":"password",className:"flex-1 h-10 pl-10 text-sm rounded-full input bg-[#E9E7FF] focus:outline-0 min-h-8",placeholder:"Retype New Password"}),e.jsx("span",{className:"absolute inline-flex items-center text-lg left-4 text-primary",children:e.jsx(j,{path:y,size:.8})})]}),e.jsx("button",{type:"submit",className:"normal-case rounded-full btn btn-primary",children:d?e.jsxs(e.Fragment,{children:[e.jsx(V,{className:"animate-spin"})," Processing..."]}):"Reset password"})]}),e.jsxs("div",{className:"mt-8 text-sm text-center text-neutral/70",children:["© Copyright ",new Date().getFullYear()," © ",a==null?void 0:a.copyright]})]})]})]})};export{K as default};