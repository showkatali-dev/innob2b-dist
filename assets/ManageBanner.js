import{m as b,l as p,o as e,Y as N}from"./index.js";import{a as g,b as y,a5 as x,c as f,ab as v}from"./App.js";const B=()=>{const{site_title:n}=b.useState(),{axiosInstance:m}=g(),{user_data:{login_key:r,member_id:l}}=p.useState(),{data:s,isLoading:o}=y({queryKey:["PARTNER_ADDS_LIST",r,l],queryFn:async()=>{var t;const a=await m.post("/secure?pathName=/partner/partner-ads-list",{login_key:r,member_id:l});if(((t=a.data)==null?void 0:t.status)==="success")return a.data.data}});return e.jsxs(e.Fragment,{children:[e.jsx(N,{children:e.jsxs("title",{children:["Manage Banner",n?" - "+n:""]})}),e.jsx("div",{className:"mb-8 sm:col-span-3 lg:col-span-4",children:o?e.jsxs("div",{className:"flex items-center justify-center h-full gap-2 text-xl",children:[e.jsx(v,{className:"mr-2 animate-spin text-primary"})," ","Loading..."]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col justify-between gap-4 mb-5 md:items-center md:flex-row",children:[e.jsxs("div",{className:"py-3",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Manage Banner"}),e.jsx("p",{className:"text-sm text-neutral",children:"Manage Banner and advertisements"})]}),e.jsx("div",{className:"flex items-center gap-5",children:e.jsx(x,{to:"/settings/add-banner",className:"h-10 normal-case rounded btn btn-primary btn-outline min-h-8",children:"Add New Banner"})})]}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"border",children:"Sl"}),e.jsx("th",{className:"border",children:"Banner"}),e.jsx("th",{className:"border",children:"Banner Type"}),e.jsx("th",{className:"border",children:"Ads Type"}),e.jsx("th",{className:"border",children:"Status"}),e.jsx("th",{className:"border",children:"Action"})]})}),e.jsx("tbody",{className:"text-center",children:(s==null?void 0:s.length)>0?s.map((a,t)=>{const{banner_position:h,ads_type:j,title:c,ads_image_url:u,banner_id:d,status:i}=a;return e.jsxs("tr",{children:[e.jsx("td",{children:t+1}),e.jsxs("td",{className:"p-1 max-w-60",children:[e.jsx("div",{className:"pb-0 rounded-t",children:e.jsx("img",{src:u,alt:c,className:"w-full rounded"})}),e.jsx("div",{className:"py-1 text-xs text-center rounded-b text-primary",children:c})]}),e.jsx("td",{children:h==="banner-big"?"Big Banner":"Slide"}),e.jsx("td",{className:"capitalize",children:j}),e.jsx("td",{children:e.jsx("div",{className:f("text-xs text-white capitalize badge badge-warning",i==="active"?"badge-success":"badge-error"),children:i})}),e.jsx("td",{children:e.jsx(x,{to:`/settings/manage-banner/${d}`,className:"font-normal normal-case rounded btn btn-xs btn-primary",children:"Modify"})})]},d)}):e.jsx("tr",{children:e.jsx("td",{className:"py-5 text-center text-error",colSpan:"100%",children:"No Data"})})})]})})})]})})]})};export{B as default};