import{m as Q,e as v,l as G,o as a,Y as W,Q as b}from"./index.js";import{aE as Y,b as Z,c as w,r as $,ac as E,as as z}from"./App.js";import{D as S}from"./DropDownSelectCheckout.js";import{T as o}from"./TextInputCheckout.js";import{I as N}from"./InputContainerCheckout.js";import{R as J}from"./RadioInputCheckout.js";import{D as R}from"./DateInputCheckout.js";import{C as X}from"./CountryWithCodeSelect.js";import{P as ee}from"./PhoneNumberSelect.js";import"./SingleSelect.js";import"./InputDate.js";import"./shortcut-buttons-flatpickr.min.js";const pe=()=>{var j;const{site_title:f,component_version:n}=Q.useState(),{team_member_id:m}=Y(),[s,t]=v.useState({user_access_level:"",email:"",fullname:"",isd_code:"",mobile:"",dob:"",gender:"Male",address:"",city:"",state:"",postal_code:"",country:"",status:"",expire_user:"",passwd:"",passwd2:""}),{axiosInstance:p}=Z(),{user_data:{login_key:i,member_id:d}}=G.useState(),{isLoading:C,error:x}=w({queryKey:["TEAM_MEMBER_PROFILE",i,d,m],queryFn:async()=>{var r;const e=await p.post("/user/team-member-profile",{login_key:i,member_id:d,team_member_id:m});if(((r=e==null?void 0:e.data)==null?void 0:r.status)==="success"){const{user_access_level:u,email:c,fullname:l,isd_code:P,mobile:A,dob:I,gender:U,address:k,city:L,state:T,postal_code:B,expire_user:H,country:K,status:O}=e.data.data;return t({...s,user_access_level:u||"",email:c||"",fullname:l||"",isd_code:P||"",mobile:A||"",dob:I||"",gender:U||"Male",address:k||"",city:L||"",state:T||"",postal_code:B||"",expire_user:H||"",country:K||"",status:O||""}),{status:"success"}}}}),{data:q={},isLoading:F,error:_}=w({queryKey:["USER_ACCESS_LEVEL",i,d],queryFn:async()=>(await p.post("/user/team-access-level",{login_key:i,member_id:d})).data}),[g,h]=v.useState(!1),D=$(),V=async e=>{var r,u;e.preventDefault(),h(!0);try{const c={...s,team_member_id:m,login_key:i,member_id:d},l=await p.post("/user/team-member-profile-update",c);((r=l==null?void 0:l.data)==null?void 0:r.status)==="success"?(b("success","Success!",l.data.reason),t({user_access_level:"",email:"",fullname:"",isd_code:"",mobile:"",dob:"",gender:"Male",address:"",city:"",state:"",postal_code:"",country:"",expire_user:"",status:"",passwd:"",passwd2:""}),D("/settings/team")):b("error","Update Failed",((u=l==null?void 0:l.data)==null?void 0:u.reason)||"Something went wrong")}catch(c){b("error","Update Failed",c.message)}finally{h(!1)}};if(x)throw x;if(_)throw _;const{user_access_level:M}=q,y=(j=n==null?void 0:n.general)==null?void 0:j.team;return a.jsxs(a.Fragment,{children:[a.jsx(W,{children:a.jsxs("title",{children:["Updated ",y==="2"?"Team Member":"User"," Profile",f?" - "+f:""]})}),a.jsx("div",{className:"mb-8 sm:col-span-3 lg:col-span-4",children:!F&&!C?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"mb-1",children:a.jsxs("h5",{className:"py-3 text-lg font-medium",children:["Update ",y==="2"?"Team Member":"User"," Profile"]})}),a.jsxs("form",{onSubmit:V,className:"mb-8",children:[a.jsx("div",{className:"mb-4 border-l-4 border-l-[#1D376A] p-2 bg-base-300",children:a.jsx("h1",{className:"text-sm uppercase tracking-wider text-[#1D376A] font-medium",children:"Account Info"})}),a.jsxs("div",{className:"grid gap-4 lg:grid-cols-2",children:[a.jsx(S,{label:"Select User Type",isRequired:!0,options:M.map(e=>({label:e.title,value:e.code})),action:e=>{var r;return t({...s,user_access_level:((r=e[0])==null?void 0:r.value)||""})},defaultValue:s.user_access_level,placeholder:"Select"}),a.jsx(S,{label:"Select Status",isRequired:!0,options:[{label:"Active",value:"active"},{label:"Disable",value:"disable"}],defaultValue:s.status,action:e=>{var r;return t({...s,status:((r=e[0])==null?void 0:r.value)||""})},placeholder:"Select"}),a.jsx(o,{label:"Email Address",type:"email",readOnly:!0,defaultValue:s.email,placeholder:"Enter Email Address"}),a.jsx(N,{label:"Mobile Number",isRequired:!0,defaultValue:String(s.isd_code||"")+String(s.mobile||""),action:e=>t({...s,isd_code:(e==null?void 0:e.isd_code)||"",mobile:(e==null?void 0:e.mobile)||""}),placeholder:"Enter Mobile Number",Input:ee}),a.jsx(o,{label:"Password",type:"password",isRequired:!1,defaultValue:s.passwd,action:e=>t({...s,passwd:e.target.value}),placeholder:"Enter Password"}),a.jsx(o,{label:"Confirm Password",type:"password",isRequired:!1,defaultValue:s.passwd2,action:e=>t({...s,passwd2:e.target.value}),placeholder:"Enter Confirm Password"}),a.jsx(R,{label:"Expire Date",isRequired:!1,defaultValue:s.expire_user,action:e=>t({...s,expire_user:e}),placeholder:"Select Expire Date"})]}),a.jsx("div",{className:"my-4 border-l-4 border-l-[#1D376A] p-2 bg-base-300",children:a.jsx("h1",{className:"text-sm uppercase tracking-wider text-[#1D376A] font-medium",children:"Personal Info"})}),a.jsxs("div",{className:"grid sm:grid-cols-2 xl:grid-cols-3 gap-4",children:[a.jsx(o,{label:"Full Name",isRequired:!0,defaultValue:s.fullname,action:e=>t({...s,fullname:e.target.value}),placeholder:"Enter Full Name"}),a.jsx(J,{label:"Gender",isRequired:!0,defaultValue:s.gender,action:e=>t({...s,gender:e.target.value}),options:[{label:"Male",value:"Male"},{label:"Female",value:"Female"}]}),a.jsx(R,{label:"Date of Birth",isRequired:!0,defaultValue:s.dob,action:e=>t({...s,dob:e}),placeholder:"Select Date of birth"}),a.jsx(o,{label:"Address",isRequired:!0,defaultValue:s.address,action:e=>t({...s,address:e.target.value}),placeholder:"Enter Address"}),a.jsx(o,{label:"City",isRequired:!0,defaultValue:s.city,action:e=>t({...s,city:e.target.value}),placeholder:"Enter City"}),a.jsx(o,{label:"State",isRequired:!0,defaultValue:s.state,action:e=>t({...s,state:e.target.value}),placeholder:"Enter State"}),a.jsx(N,{label:"Country",isRequired:!0,defaultValue:s.country,action:e=>{var r;return t({...s,country:((r=e[0])==null?void 0:r.value)||""})},placeholder:"Select Country",Input:X}),a.jsx(o,{label:"Postal Code",isRequired:!0,defaultValue:s.postal_code,action:e=>t({...s,postal_code:e.target.value}),placeholder:"Enter Zip or Postal Code"})]}),a.jsx("button",{type:"submit",className:`h-10 min-h-0 mt-4 normal-case border-transparent rounded-md btn bg-primary/70 btn-primary ${g?"pointer-events-none":""}`,children:g?a.jsxs(a.Fragment,{children:[a.jsx(E,{className:"mr-2 animate-spin"})," Processing..."]}):a.jsxs(a.Fragment,{children:[a.jsx(z,{})," Update"]})})]})]}):a.jsxs("div",{className:"flex items-center justify-center h-full gap-2 text-xl",children:[a.jsx(E,{className:"mr-2 animate-spin text-primary"})," ","Loading..."]})})]})};export{pe as default};
