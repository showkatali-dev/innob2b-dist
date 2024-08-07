import{o as g,m as j,q as e,a5 as p}from"./index-d20e4767.js";import{d as f,e as y,L as o,c as N,dj as v,ad as _}from"./App-e22994df.js";const S=()=>{const{site_title:t}=g.useState(),{axiosInstance:x}=f(),{user_data:{login_key:n,member_id:d}}=j.useState(),{data:s,isLoading:b}=y({queryKey:["PARTNER_ADDS_LIST",n,d],queryFn:async()=>{var r;const a=await x.post("/secure?pathName=/partner/partner-ads-list",{login_key:n,member_id:d});if(((r=a.data)==null?void 0:r.status)==="success")return a.data.data}});return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsxs("title",{children:["Manage Banner",t?" - "+t:""]})}),e.jsx("div",{className:"mb-8 sm:col-span-3 lg:col-span-4",children:b?e.jsxs("div",{className:"flex items-center justify-center h-full gap-2 text-xl min-h-[400px]",children:[e.jsx(_,{className:"mr-2 animate-spin text-primary"})," ","Loading..."]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col justify-between gap-4 mb-5 md:items-center md:flex-row",children:[e.jsxs("div",{className:"py-3",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Manage Banner"}),e.jsx("p",{className:"text-sm text-neutral",children:"Manage Banner and advertisements"})]}),e.jsx("div",{className:"flex items-center gap-5",children:e.jsx(o,{to:"/settings/add-banner",className:"h-10 normal-case rounded btn btn-primary btn-outline min-h-8",children:"Add New Banner"})})]}),e.jsx("div",{className:"overflow-auto",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"table text-center",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-sm font-medium uppercase text-base-content",children:[e.jsx("th",{children:"Sl"}),e.jsx("th",{children:"Banner"}),e.jsx("th",{children:"Banner Type"}),e.jsx("th",{children:"Ads Type"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Action"})]})}),e.jsx("tbody",{className:"text-center",children:(s==null?void 0:s.length)>0?s.map((a,r)=>{const{banner_position:m,ads_type:h,title:i,ads_image_url:u,banner_id:c,status:l}=a;return e.jsxs("tr",{className:"duration-200 cursor-pointer hover:bg-base-100 group",children:[e.jsx("td",{className:"border-0 border-y-8 border-y-base-100 bg-base-200 group-hover:bg-[#eff5f9] duration-200",children:r+1}),e.jsxs("td",{className:"border-0 border-y-8 border-y-base-100 bg-base-200 group-hover:bg-[#eff5f9] duration-200 py-2 max-w-60",children:[e.jsx("div",{className:"pb-0 rounded-t",children:e.jsx("img",{src:u,alt:i,className:"w-full rounded"})}),e.jsx("div",{className:"py-1 text-xs text-center rounded-b text-primary",children:i})]}),e.jsx("td",{className:"border-0 border-y-8 border-y-base-100 bg-base-200 group-hover:bg-[#eff5f9] duration-200",children:m==="banner-big"?"Big Banner":"Slide"}),e.jsx("td",{className:"border-0 border-y-8 border-y-base-100 bg-base-200 group-hover:bg-[#eff5f9] duration-200 capitalize",children:h}),e.jsx("td",{className:"border-0 border-y-8 border-y-base-100 bg-base-200 group-hover:bg-[#eff5f9] duration-200",children:e.jsx("div",{className:N("text-xs capitalize badge badge-warning text-warning bg-warning/10 border-transparent",l==="active"?"badge-success text-success bg-success/10":"badge-error text-error bg-error/10"),children:l})}),e.jsx("td",{className:"border-0 border-y-8 border-y-base-100 bg-base-200 group-hover:bg-[#eff5f9] duration-200",children:e.jsx(o,{to:`/settings/manage-banner/${c}`,className:"font-normal normal-case rounded btn btn-xs btn-primary",children:e.jsx(v,{})})})]},c)}):e.jsx("tr",{children:e.jsx("td",{className:"py-5 text-center text-error",colSpan:"100%",children:"No Data"})})})]})})})]})})]})};export{S as default};