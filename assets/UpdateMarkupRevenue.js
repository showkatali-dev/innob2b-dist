import{m as Q,e as b,l as B,o as e,Y,Q as _}from"./index.js";import{aD as $,a as z,b as G,r as J,ab as y,ar as V}from"./App.js";const Z=()=>{var v,j;const{site_title:x}=Q.useState(),{markup_and_revenue_id:u}=$(),[s,r]=b.useState({on_base_fare_ratio_markup:"",on_base_fare_ratio_discount:"",on_base_fare_fixed_markup:"",on_tax_ratio_markup:"",on_tax_fixed_markup:"",ssr_charge_markup:"",ssr_charge_ratio:"",markup_min_active:"",markup_min:"",markup_max_active:"",markup_max:"",ticket_issue_charge:"",penalty_markup:"",supplier_type:""}),{axiosInstance:h}=z(),{user_data:{login_key:p,member_id:d,default_currency:i}}=B.useState(),{data:n,isLoading:N,error:f}=G({queryKey:["UPDATE_MARKUP",p,d,u],queryFn:async()=>{var m,l,o,t;const a=await h.post("/settings/partner-profile",{login_key:p,member_id:d});if(((m=a==null?void 0:a.data)==null?void 0:m.status)==="success"){const F=(o=(l=a==null?void 0:a.data)==null?void 0:l.customer_markup)==null?void 0:o.find(L=>L.Id===u),{on_base_fare_ratio_markup:M,on_base_fare_ratio_discount:S,on_base_fare_fixed_markup:U,on_tax_ratio_markup:A,on_tax_fixed_markup:D,ssr_charge_markup:R,ssr_charge_ratio:I,markup_min_active:P,markup_min:q,markup_max_active:E,markup_max:O,ticket_issue_charge:T,penalty_markup:H,supplier_type:K}=F||{};return r({on_base_fare_ratio_markup:M,on_base_fare_ratio_discount:S,on_base_fare_fixed_markup:U,on_tax_ratio_markup:A,on_tax_fixed_markup:D,ssr_charge_markup:R,ssr_charge_ratio:I,markup_min_active:P,markup_min:q,markup_max_active:E,markup_max:O,ticket_issue_charge:T,penalty_markup:H,supplier_type:K}),a.data}else throw{...a,message:((t=a.data)==null?void 0:t.reason)||"Request failed!"}}}),[g,k]=b.useState(!1),w=J(),C=async a=>{var m,l;a.preventDefault(),k(!0);try{const o={...s,login_key:p,member_id:d,uid:u},t=await h.post("/settings/partner-customer-markup-update",o);((m=t==null?void 0:t.data)==null?void 0:m.status)==="success"?(_("success","Success!",t.data.reason),r({on_base_fare_ratio_markup:"",on_base_fare_ratio_discount:"",on_base_fare_fixed_markup:"",on_tax_ratio_markup:"",on_tax_fixed_markup:"",ssr_charge_markup:"",ssr_charge_ratio:"",markup_min_active:"",markup_min:"",markup_max_active:"",markup_max:"",ticket_issue_charge:"",penalty_markup:""}),w("/settings/markup-revenue-list")):_("error","Update Failed",((l=t==null?void 0:t.data)==null?void 0:l.reason)||"Something went wrong")}catch(o){_("error","Update Failed",o.message)}finally{k(!1)}};if(f)throw f;const c=(v=n==null?void 0:n.customer_markup)==null?void 0:v.find(a=>a.Id===u);return e.jsxs(e.Fragment,{children:[e.jsx(Y,{children:e.jsxs("title",{children:["Markup & Revenue Setup",x?" - "+x:""]})}),e.jsx("form",{onSubmit:C,className:"mb-8 sm:col-span-3 lg:col-span-4",children:N?e.jsxs("div",{className:"flex items-center justify-center h-full gap-2 text-xl",children:[e.jsx(y,{className:"mr-2 animate-spin text-primary"})," ","Loading..."]}):c?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex flex-col justify-between gap-4 mb-5 md:items-center md:flex-row",children:[e.jsxs("div",{className:"py-3 mb-1",children:[e.jsx("h5",{className:"text-lg font-medium",children:(j=n==null?void 0:n.partner_profile)==null?void 0:j.legal_name}),e.jsxs("p",{className:"text-sm text-neutral",children:["Markup & Revenue Setup - ",c.supplier_type]})]}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:`h-10 normal-case rounded btn btn-primary btn-outline min-h-8 ${g?"pointer-events-none":""}`,children:g?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"mr-2 animate-spin"})," ","Processing..."]}):e.jsxs(e.Fragment,{children:[e.jsx(V,{})," Update ",c.supplier_type," Markup & Revenue"]})})})]}),e.jsxs("div",{className:"p-5 space-y-5",children:[e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsxs("div",{className:"gap-2 text-sm form-control",children:[e.jsx("label",{htmlFor:"password",children:"On Base Fare"}),e.jsxs("div",{className:"input-group w-fit whitespace-nowrap",children:[" ",e.jsx("span",{children:"Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"on_base_fare_ratio_markup",value:s.on_base_fare_ratio_markup,onChange:a=>r({...s,on_base_fare_ratio_markup:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsx("span",{children:"%"})," ",e.jsx("span",{children:"Discount"}),e.jsx("input",{autoComplete:"off",type:"text",id:"on_base_fare_ratio_discount",value:s.on_base_fare_ratio_discount,onChange:a=>r({...s,on_base_fare_ratio_discount:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsx("span",{children:"%"})," ",e.jsx("span",{children:"Additional Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"on_base_fare_fixed_markup",value:s.on_base_fare_fixed_markup,onChange:a=>r({...s,on_base_fare_fixed_markup:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsxs("span",{children:[i," Fixed"]})," "]})]})}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsxs("div",{className:"gap-2 text-sm form-control",children:[e.jsx("label",{htmlFor:"password",children:"On Tax"}),e.jsxs("div",{className:"input-group w-fit whitespace-nowrap",children:[" ",e.jsx("span",{children:"Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"on_tax_ratio_markup",value:s.on_tax_ratio_markup,onChange:a=>r({...s,on_tax_ratio_markup:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsx("span",{children:"%"})," ",e.jsx("span",{children:"Additional Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"on_tax_fixed_markup",value:s.on_tax_fixed_markup,onChange:a=>r({...s,on_tax_fixed_markup:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsxs("span",{children:[i," Fixed"]})," "]})]})}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsxs("div",{className:"gap-2 text-sm form-control",children:[e.jsx("label",{htmlFor:"password",children:"On SSR"}),e.jsxs("div",{className:"input-group w-fit whitespace-nowrap",children:[" ",e.jsx("span",{children:"Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"ssr_charge_ratio",value:s.ssr_charge_ratio,onChange:a=>r({...s,ssr_charge_ratio:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsx("span",{children:"%"})," ",e.jsx("span",{children:"Additional Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"ssr_charge_markup",value:s.ssr_charge_markup,onChange:a=>r({...s,ssr_charge_markup:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsxs("span",{children:[i," Fixed"]})," "]})]})}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsxs("div",{className:"gap-2 text-sm form-control",children:[e.jsx("label",{htmlFor:"password",children:"Minimum Markup"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("label",{htmlFor:"minimum_markup_disable_option",className:"flex items-center gap-2",children:[e.jsx("input",{autoComplete:"off",type:"radio",id:"minimum_markup_disable_option",name:"markup_min_active",value:"disable",className:"radio radio-primary radio-sm",checked:s.markup_min_active==="disable",onChange:a=>a.target.checked&&r({...s,markup_min_active:a.target.value})}),e.jsx("span",{children:"Disable"})," "]}),e.jsxs("label",{htmlFor:"minimum_markup_active_option",className:"flex items-center gap-2",children:[e.jsx("input",{autoComplete:"off",type:"radio",id:"minimum_markup_active_option",name:"markup_min_active",value:"active",className:"radio radio-primary radio-sm",checked:s.markup_min_active==="active",onChange:a=>a.target.checked&&r({...s,markup_min_active:a.target.value})}),e.jsx("span",{children:"Active"})," "]})]}),e.jsxs("div",{className:"input-group w-fit whitespace-nowrap",children:[e.jsx("span",{children:"Minmum Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"markup_min",value:s.markup_min,onChange:a=>r({...s,markup_min:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsxs("span",{children:[i," Fixed"]})," "]})]})]})}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsxs("div",{className:"gap-2 text-sm form-control",children:[e.jsx("label",{htmlFor:"password",children:"Maximum Markup"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("label",{htmlFor:"maximum_markup_disable_option",className:"flex items-center gap-2",children:[e.jsx("input",{autoComplete:"off",type:"radio",id:"maximum_markup_disable_option",name:"markup_max_active",value:"disable",className:"radio radio-primary radio-sm",checked:s.markup_max_active==="disable",onChange:a=>a.target.checked&&r({...s,markup_max_active:a.target.value})}),e.jsx("span",{children:"Disable"})," "]}),e.jsxs("label",{htmlFor:"maximum_markup_active_option",className:"flex items-center gap-2",children:[e.jsx("input",{autoComplete:"off",type:"radio",id:"maximum_markup_active_option",name:"markup_max_active",value:"active",className:"radio radio-primary radio-sm",checked:s.markup_max_active==="active",onChange:a=>a.target.checked&&r({...s,markup_max_active:a.target.value})}),e.jsx("span",{children:"Active"})," "]})]}),e.jsxs("div",{className:"input-group w-fit whitespace-nowrap",children:[e.jsx("span",{children:"Maximum Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"markup_max",value:s.markup_max,onChange:a=>r({...s,markup_max:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsxs("span",{children:[i," Fixed"]})," "]})]})]})}),e.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:e.jsx("div",{className:"gap-2 text-sm form-control",children:e.jsxs("div",{className:"input-group w-fit whitespace-nowrap",children:[" ",e.jsx("span",{children:"Ticket Issue Charge"}),e.jsx("input",{autoComplete:"off",type:"text",id:"ticket_issue_charge",value:s.ticket_issue_charge,onChange:a=>r({...s,ticket_issue_charge:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsxs("span",{children:[i," Fixed"]})," ",e.jsx("span",{children:"Penalty Markup"}),e.jsx("input",{autoComplete:"off",type:"text",id:"penalty_markup",value:s.penalty_markup,onChange:a=>r({...s,penalty_markup:a.target.value}),className:"w-20 h-10 min-h-0 text-sm border-solid rounded input border-y border-y-neutral/10 focus:outline-none"}),e.jsx("span",{children:"%"})," "]})})})]})]}):e.jsx("p",{className:"py-8 text-center text-error",children:"No result found"})})]})};export{Z as default};