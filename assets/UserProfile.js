import{e as n,m as Q,l as D,u as B,o as e,X as H,Y as z,O as G,ay as L,Q as C}from"./index.js";import{I as W}from"./InputDate.js";import{C as X}from"./CountryWithCodeSelect.js";import{a as J,b as K,ap as T,aq as Z,ar as $}from"./App.js";import{P as ee}from"./PhoneNumberSelect.js";import"./shortcut-buttons-flatpickr.min.js";import"./SingleSelect.js";const ie=()=>{const[o,u]=n.useState({isd_code:"",mobile:""}),{site_title:p}=Q.useState(),[s,E]=n.useState(!1),{user_data:{login_key:i,member_id:d}}=D.useState(),[b,f]=n.useState(!1),{axiosInstance:x}=J(),_=B(),{data:t,isLoading:F,error:h}=K(["USER_INFO",i,d],async()=>{var l,r;const a=await x.post("/user/profile",{login_key:i,member_id:d});if(((l=a.data)==null?void 0:l.status)==="success"){const{isd_code:c,mobile:m}=a.data.data;return u({isd_code:c,mobile:m}),a.data.data}else throw{...a,message:((r=a.data)==null?void 0:r.reason)||"Request failed!"}}),[S,j]=n.useState("");if(n.useEffect(()=>{t!=null&&t.country&&j(t==null?void 0:t.country)},[t==null?void 0:t.country]),F)return e.jsx(H,{});if(h)throw h;const{fullname:k,email:N,dob:w,gender:y,address:P,city:U,state:I,postal_code:M}=t,V=async a=>{var g;if(a.preventDefault(),!s){E(!0);return}if(b)return;f(!0);const l=a.target,{fullname:r,dob:c,gender:m,address:R,city:Y,state:q,postal_code:A,country:O}=l;try{((g=(await x.post("/user/profile-update",{login_key:i,member_id:d,fullname:r.value,email:N,dob:G(new Date(c.value)).format("YYYY-MM-DD"),gender:m.value,address:R.value,city:Y.value,state:q.value,postal_code:A.value,country:L(O.value),...o})).data)==null?void 0:g.status)==="success"&&(C("success","Success!","Profile was successfully updated"),_.invalidateQueries(["USER_INFO"]))}catch(v){C("error","Error!",v.message)}finally{f(!1)}};return e.jsxs("form",{onSubmit:V,className:"grid grid-cols-1 gap-4 p-4 mb-8 rounded-md shadow lg:grid-cols-2 bg-base-200",children:[e.jsx(z,{children:e.jsxs("title",{children:["User Profile",p?" - "+p:""]})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Email address"})}),e.jsx("input",{autoComplete:"off",type:"email",name:"email",placeholder:"Enter email address",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",readOnly:!0,value:N})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Full name"})}),e.jsx("input",{autoComplete:"off",type:"text",name:"fullname",placeholder:"Enter you full name",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",required:!0,defaultValue:k,disabled:!s})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Mobile"})}),e.jsx(ee,{placeholder:"Enter Mobile Number",className:"!h-10 !text-sm !bg-transparent !rounded input !input-bordered focus:outline-0 min-h-8 !w-full",defaultValue:String(o.isd_code||"")+String(o.mobile||""),action:a=>u(a),disabled:!s})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Date of Birth"})}),e.jsx(W,{name:"dob",placeholder:"Select your date of birth",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",action:()=>{},defaultValue:w,disabled:!s})]}),e.jsxs("div",{className:"form-control",name:"gender",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Gender"})}),e.jsxs("label",{htmlFor:"male",className:"flex items-center mb-2 space-x-2 text-sm",children:[e.jsx("input",{autoComplete:"off",type:"radio",id:"male",name:"gender",className:"radio radio-sm radio-primary",value:"Male",defaultChecked:y==="Male",disabled:!s}),e.jsx("span",{children:"Male"})]}),e.jsxs("label",{htmlFor:"female",className:"flex items-center space-x-2 text-sm",children:[e.jsx("input",{autoComplete:"off",type:"radio",id:"female",name:"gender",className:"radio radio-sm radio-primary",value:"Female",defaultChecked:y==="Female",disabled:!s}),e.jsx("span",{children:"Female"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Address"})}),e.jsx("input",{autoComplete:"off",type:"text",name:"address",placeholder:"Enter Address",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",defaultValue:P,disabled:!s})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"City"})}),e.jsx("input",{autoComplete:"off",type:"text",name:"city",placeholder:"Enter city name",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",defaultValue:U,disabled:!s})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"State"})}),e.jsx("input",{autoComplete:"off",type:"text",name:"state",placeholder:"Enter state name",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",defaultValue:I,disabled:!s})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Country"})}),e.jsx(X,{placeholder:"Enter country name",name:"country",className:"!h-10 text-sm bg-transparent !rounded input input-bordered border-base-content/20 focus:!outline-0 !min-h-8",action:a=>{var l;return j((l=a==null?void 0:a.at(0))==null?void 0:l.value)},defaultValue:S,disabled:!s})]}),e.jsxs("div",{className:"form-control",children:[e.jsx("label",{className:"inline-block label",children:e.jsx("span",{className:"label-text",children:"Postal Code"})}),e.jsx("input",{autoComplete:"off",type:"text",name:"postal_code",placeholder:"Enter zip or postal code",className:"h-10 text-sm bg-transparent rounded input input-bordered focus:outline-0 min-h-8",defaultValue:M,disabled:!s})]})]}),e.jsx("button",{type:"submit",className:"w-full mt-4 normal-case rounded btn btn-sm btn-primary btn-outline",children:b?e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"mr-2 animate-spin"})," Updating..."]}):s?e.jsxs(e.Fragment,{children:[e.jsx(Z,{})," Update Profile"]}):e.jsxs(e.Fragment,{children:[e.jsx($,{})," Edit Profile"]})})]})};export{ie as default};
