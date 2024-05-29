import{l as f,e as b,m as j,o as s,Y as N,Q as c}from"./index.js";import{a as y,ap as P,ag as _}from"./App.js";const E=()=>{const{user_data:{login_key:u,member_id:m,email:p}}=f.useState(),[h,r]=b.useState(!1),{axiosInstance:w}=y(),{site_title:t}=j.useState(),x=async n=>{var o,l;n.preventDefault(),r(!0);try{const e=n.target,g=e.existing_password.value,i=e.password.value,d=e.cpassword.value;if(i!==d)throw new Error("Passwords do not match");const a=await w.post("/user/update-password",{login_key:u,member_id:m,email:p,existing_password:g,password:i,cpassword:d});if(((o=a.data)==null?void 0:o.status)==="success")c("success","Success!",a.data.reason),e.reset();else throw new Error(((l=a.data)==null?void 0:l.reason)||"Something wrong. Please try again")}catch(e){c("error","Failed!",e.message)}finally{r(!1)}};return s.jsxs("form",{onSubmit:x,className:"p-4 mb-8 rounded-md shadow bg-base-200",children:[s.jsx(N,{children:s.jsxs("title",{children:["Change Password",t?" - "+t:""]})}),s.jsxs("div",{className:"grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2",children:[s.jsxs("div",{className:"form-control lg:col-span-2",children:[s.jsx("label",{className:"inline-block label",children:s.jsx("span",{className:"label-text",children:"Current Password"})}),s.jsx("input",{autoComplete:"off",type:"password",name:"existing_password",placeholder:"Enter your current password",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",defaultValue:""})]}),s.jsxs("div",{className:"form-control",children:[s.jsx("label",{className:"inline-block label",children:s.jsx("span",{className:"label-text",children:"New Password"})}),s.jsx("input",{autoComplete:"off",type:"password",placeholder:"Enter new password",className:"w-full h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",required:!0,defaultValue:"",name:"password"})]}),s.jsxs("div",{className:"form-control",children:[s.jsx("label",{className:"inline-block label",children:s.jsx("span",{className:"label-text",children:"Confirm New Password"})}),s.jsx("input",{autoComplete:"off",type:"password",placeholder:"Confirm new password",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",required:!0,defaultValue:"",name:"cpassword"})]})]}),s.jsx("button",{type:"submit",className:"h-10 min-h-0 mt-4 normal-case rounded btn btn-primary btn-outline",children:h?s.jsxs(s.Fragment,{children:[s.jsx(P,{className:"mr-2 animate-spin"})," Please wait..."]}):s.jsxs(s.Fragment,{children:[s.jsx(_,{})," Change Password"]})})]})};export{E as default};
