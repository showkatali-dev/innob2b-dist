import{e as u,o as e,l as h,m as p,X as b,Y as f}from"./index.js";import{P as j,cO as g,a5 as o,cP as y,U as w,q as N,cv as v,cQ as L,cR as k,cS as P}from"./App.js";import{d as F,e as S,c as _}from"./index.esm.js";import{L as T}from"./LoginOtp.js";const i=({redirectTo:l=null})=>{const[s,t]=u.useState(!1);return e.jsxs("div",{children:[e.jsx("p",{className:"mb-8 text-sm text-center text-neutral/80",children:"Please login to continue"}),e.jsx(g,{redirectTo:l,children:e.jsxs("div",{className:"flex flex-col w-full gap-y-4",children:[e.jsxs("label",{className:"gap-2 form-control",children:[e.jsx("span",{className:"text-[13px] text-neutral",children:"Email"}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{autoComplete:"off",type:"email",name:"email",className:"flex-1 h-10 pr-10 text-sm border rounded-full input input-bordered border-base-content/10 bg-base-200 focus:outline-0 min-h-8 focus:border-primary",placeholder:"Enter Email"}),e.jsx("span",{className:"absolute flex items-center justify-center w-8 h-8 text-lg rounded-full right-1.5 bg-base-100 text-neutral",children:e.jsx(F,{})})]})]}),e.jsxs("label",{className:"gap-2 form-control",children:[e.jsx("span",{className:"text-[13px] text-neutral",children:"Password"}),e.jsxs("div",{className:"relative flex items-center",children:[e.jsx("input",{autoComplete:"off",type:s?"text":"password",name:"password","data-type":"password",className:"flex-1 h-10 pr-10 text-sm border rounded-full input input-bordered border-base-content/10 bg-base-200 focus:outline-0 min-h-8 focus:border-primary",placeholder:"Password"}),e.jsx("span",{className:"absolute flex items-center justify-center w-8 h-8 text-lg rounded-full right-1.5 bg-base-100 text-neutral",children:e.jsx(S,{})})]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsxs("label",{className:"flex items-center gap-2 text-sm cursor-pointer text-neutral",children:[e.jsx("input",{type:"checkbox",className:"toggle toggle-xs border-neutral bg-neutral",checked:s,onChange:a=>t(a.target.checked)}),e.jsx("span",{children:"Show Password"})]}),e.jsxs(o,{to:"/forgot-password",className:"text-sm text-neutral",children:[e.jsx(y,{})," Forgot password?"]})]}),e.jsxs("button",{type:"submit",className:"h-10 min-h-0 font-normal normal-case transition-all duration-300 rounded-full shadow-lg btn btn-primary shadow-primary/50 hover:shadow-none",children:["Log In ",e.jsx(_,{})]})]})})]})};i.propTypes={redirectTo:j.string};const q=()=>{const{isLoading:l,user_data:s}=h.useState(),{site_title:t,intro_video:a,intro_banner:c,logo:d}=p.useState(),{state:r}=w(),n=!(r!=null&&r.pathname)||r.pathname==="/"?"/":r.pathname,[m]=N(),x=m.get("otp_required");return l?e.jsx(b,{}):s!=null&&s.login_key?e.jsx(v,{to:n}):e.jsxs("div",{style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))",backgroundSize:"cover",backgroundBlendMode:"multiply"},children:[e.jsx(f,{children:e.jsxs("title",{children:["Login",t?" - "+t:""]})}),a&&e.jsx("video",{id:"background-video",src:a,poster:c,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:"Your browser does not support the video tag."}),e.jsx("main",{className:"flex items-center justify-center min-h-screen gap-4 px-5 py-16",children:e.jsxs("div",{className:"w-full max-w-lg",children:[e.jsxs("div",{className:"relative w-full p-8 mb-4 shadow-lg rounded-2xl bg-base-200",children:[e.jsx("div",{className:"absolute top-0 z-10 flex items-center justify-center p-1 mb-2 overflow-hidden -translate-x-1/2 -translate-y-1/2 border rounded-lg h-14 border-neutral/10 left-1/2 bg-base-200",children:e.jsx("img",{src:d,alt:"logo",className:"object-cover object-center w-full h-full"})}),e.jsx("div",{className:"flex flex-col items-center pt-4 mt-2 mb-3",children:e.jsxs("h1",{className:"text-xl font-semibold",children:["Let's Get Started ",t]})}),x==="yes"?e.jsx(T,{redirectTo:n}):e.jsx(i,{redirectTo:n})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-center gap-2 mb-3",children:[e.jsx("hr",{className:"w-20 border-b-2 border-primary"}),e.jsx("span",{className:"text-white",children:"Or Login With"}),e.jsx("hr",{className:"w-20 border-b-2 border-primary"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-4",children:[e.jsx("span",{className:"flex items-center justify-center text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-400 w-9 h-9",children:e.jsx(L,{})}),e.jsx("span",{className:"flex items-center justify-center text-white rounded-full cursor-pointer w-9 h-9 bg-cyan-500 hover:bg-cyan-400",children:e.jsx(k,{})}),e.jsx("span",{className:"flex items-center justify-center text-white bg-pink-500 rounded-full cursor-pointer hover:bg-pink-400 w-9 h-9",children:e.jsx(P,{})})]}),e.jsx("div",{className:"flex items-center justify-center gap-2 mt-5 mb-3",children:e.jsx("span",{className:"text-white",children:"Or"})}),e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"my-animated-button",children:e.jsx(o,{to:"/register",children:"Apply for an Agent Account"})})})]})]})})]})};export{q as default};