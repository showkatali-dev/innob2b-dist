import{s as F,r as m,b as w,d as I,e as k,g as P,K as Y,j as e,H as U,aR as C,b6 as T,k as p}from"./index.js";import{D as N}from"./DropDownSelectCheckout.js";import{T as l}from"./TextInputCheckout.js";import{I as S}from"./InputContainerCheckout.js";import{R as L}from"./RadioInputCheckout.js";import{D}from"./DateInputCheckout.js";import{C as H}from"./CountryWithCodeSelect.js";import{P as K}from"./PhoneNumberSelect.js";import"./SingleSelect.js";import"./InputDate.js";import"./shortcut-buttons-flatpickr.min.js";const ae=()=>{var _;const{site_title:b,location_info:E,component_version:i}=F.useState(),{country_code:x,isd_code:f}=E||{},[s,t]=m.useState({user_access_level:"",email:"",fullname:"",isd_code:"",mobile:"",dob:"",gender:"Male",address:"",city:"",state:"",postal_code:"",country:"",status:"active",expire_user:w().add(1,"year").format("YYYY-MM-DD"),passwd:"",passwd2:""}),{axiosInstance:h}=I(),{user_data:{login_key:d,member_id:c}}=k.useState(),{data:R={},isLoading:q,error:g}=P({queryKey:["USER_ACCESS_LEVEL",d,c],queryFn:async()=>(await h.post("/user/team-access-level",{login_key:d,member_id:c})).data}),[j,v]=m.useState(!1),M=Y();m.useEffect(()=>{t(a=>({...a,country:x||"",isd_code:f||""}))},[x,f]);const V=async a=>{var r,y;a.preventDefault(),v(!0);try{const n={...s,login_key:d,member_id:c},o=await h.post("/user/team-member-create",n);((r=o==null?void 0:o.data)==null?void 0:r.status)==="success"?(p("success","Success!",o.data.reason),t({user_access_level:"",email:"",fullname:"",isd_code:"",mobile:"",dob:"",gender:"Male",address:"",city:"",state:"",postal_code:"",country:"",status:"active",expire_user:w().add(1,"year").format("YYYY-MM-DD"),passwd:"",passwd2:""}),M("/settings/team")):p("error","Creation Failed",((y=o==null?void 0:o.data)==null?void 0:y.reason)||"Something went wrong")}catch(n){p("error","Creation Failed",n.message)}finally{v(!1)}};if(g)throw g;const{user_access_level:A}=R,u=(_=i==null?void 0:i.general)==null?void 0:_.team;return e.jsxs(e.Fragment,{children:[e.jsx(U,{children:e.jsxs("title",{children:["Add New ",u==="2"?"Team Member":"User",b?" - "+b:""]})}),e.jsx("div",{className:"mb-8 sm:col-span-3 lg:col-span-4",children:q?e.jsxs("div",{className:"flex items-center justify-center h-full gap-2 text-xl",children:[e.jsx(C,{className:"mr-2 animate-spin text-primary"})," ","Loading..."]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mb-1",children:e.jsxs("h5",{className:"py-3 text-lg font-medium",children:["Add New ",u==="2"?"Team Member":"User"]})}),e.jsxs("form",{onSubmit:V,className:"mb-8",autoComplete:"off",children:[e.jsx("div",{className:"mb-4 border-l-4 border-l-[#1D376A] p-2 bg-base-300",children:e.jsx("h1",{className:"text-sm uppercase tracking-wider text-[#1D376A] font-medium",children:"Account Info"})}),e.jsxs("div",{className:"grid gap-4 lg:grid-cols-2",children:[e.jsx(N,{label:"Select User Type",isRequired:!0,options:A.map(a=>({label:a.title,value:a.code})),action:a=>{var r;return t({...s,user_access_level:((r=a[0])==null?void 0:r.value)||""})},defaultValue:s.user_access_level,placeholder:"Select"}),e.jsx(N,{label:"Select Status",isRequired:!0,options:[{label:"Active",value:"active"},{label:"Disable",value:"disable"}],defaultValue:s.status,action:a=>{var r;return t({...s,status:((r=a[0])==null?void 0:r.value)||""})},placeholder:"Select"}),e.jsx(l,{label:"Email Address",type:"email",isRequired:!0,defaultValue:s.email,action:a=>t({...s,email:a.target.value}),placeholder:"Enter Email Address"}),e.jsx(S,{label:"Mobile Number",isRequired:!0,defaultValue:String(s.isd_code||"")+String(s.mobile||""),action:a=>t({...s,isd_code:a.isd_code||"",mobile:a.mobile||""}),placeholder:"Enter Mobile Number",Input:K}),e.jsx(l,{label:"Password",type:"password",isRequired:!0,defaultValue:s.passwd,action:a=>t({...s,passwd:a.target.value}),placeholder:"Enter Password"}),e.jsx(l,{label:"Confirm Password",type:"password",isRequired:!0,defaultValue:s.passwd2,action:a=>t({...s,passwd2:a.target.value}),placeholder:"Enter Confirm Password"}),e.jsx(D,{label:"Expire Date",isRequired:!1,defaultValue:s.expire_user,action:a=>t({...s,expire_user:a}),placeholder:"Select Expire Date"})]}),e.jsx("div",{className:"my-4 border-l-4 border-l-[#1D376A] p-2 bg-base-300",children:e.jsx("h1",{className:"text-sm uppercase tracking-wider text-[#1D376A] font-medium",children:"Personal Info"})}),e.jsxs("div",{className:"grid sm:grid-cols-2 xl:grid-cols-3 gap-4",children:[e.jsx(l,{label:"Full Name",isRequired:!0,defaultValue:s.fullname,action:a=>t({...s,fullname:a.target.value}),placeholder:"Enter Full Name"}),e.jsx(L,{label:"Gender",isRequired:!0,defaultValue:s.gender,action:a=>t({...s,gender:a.target.value}),options:[{label:"Male",value:"Male"},{label:"Female",value:"Female"}]}),e.jsx(D,{label:"Date of Birth",isRequired:!0,defaultValue:s.dob,action:a=>t({...s,dob:a}),placeholder:"Select Date of birth"}),e.jsx(l,{label:"Address",isRequired:!0,defaultValue:s.address,action:a=>t({...s,address:a.target.value}),placeholder:"Enter Address"}),e.jsx(l,{label:"City",isRequired:!0,defaultValue:s.city,action:a=>t({...s,city:a.target.value}),placeholder:"Enter City"}),e.jsx(l,{label:"State",isRequired:!0,defaultValue:s.state,action:a=>t({...s,state:a.target.value}),placeholder:"Enter State"}),e.jsx(S,{label:"Country",isRequired:!0,defaultValue:s.country,action:a=>{var r;return t({...s,country:((r=a[0])==null?void 0:r.value)||""})},placeholder:"Select Country",Input:H}),e.jsx(l,{label:"Postal Code",isRequired:!0,defaultValue:s.postal_code,action:a=>t({...s,postal_code:a.target.value}),placeholder:"Enter Zip or Postal Code"})]}),e.jsx("button",{type:"submit",className:`h-10 min-h-0 mt-4 normal-case border-transparent rounded-md btn bg-primary/70 btn-primary ${j?"pointer-events-none":""}`,children:j?e.jsxs(e.Fragment,{children:[e.jsx(C,{className:"mr-2 animate-spin"})," Processing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(T,{})," Create New"," ",u==="2"?"Member":"User"]})})]})]})})]})};export{ae as default};
