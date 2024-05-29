import{s as k,J as D,r as v,d as F,e as w,g as R,j as e,H as C,a6 as V,a9 as d}from"./index.js";import{I as j}from"./InputDateRange.js";import"./shortcut-buttons-flatpickr.min.js";const H=()=>{const{site_title:m}=k.useState(),[t,p]=D(),[n,_]=v.useState(null),[l,N]=v.useState(null),i=t.get("invoice_id")||"",c=t.get("invoice_status")||"all",u=t.get("create_date_range")||"",x=t.get("due_date_range")||"",r=t.get("booking_reference_id")||"",o=t.get("limit_data")||10,{axiosInstance:f}=F(),{user_data:{login_key:g,member_id:I}}=w.useState(),{data:h=[],isLoading:b}=R({queryKey:["INVOICE_HISTORY",i,c,u,x,r,o],queryFn:async()=>{var a;const s=await f.post("/secure?pathName=/finance/history-invoices",{login_key:g,member_id:I,invoice_id:i,invoice_status:c,create_date_range:u,due_date_range:x,booking_reference_id:r,limit_data:o});if(((a=s.data)==null?void 0:a.status)==="success")return s.data.data}}),y=s=>{s.preventDefault();const a=s.target,S={due_date_range:(l==null?void 0:l.length)>1?l.join(" to "):null,create_date_range:(n==null?void 0:n.length)>1?n.join(" to "):null,limit_data:a.limit_data.value,booking_reference_id:a.reference_id.value,invoice_id:a.invoice_id.value,invoice_status:a.invoice_status.value};p(S)};return e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(C,{children:e.jsxs("title",{children:["Invoices",m?" - "+m:""]})}),e.jsxs("div",{className:"pt-2",children:[e.jsxs("form",{onSubmit:y,className:"relative p-4 mb-16 shadow-md sm:px-6 bg-base-200 rounded-b-2xl rounded-2xl",children:[e.jsx("h2",{className:"mb-3 text-lg font-semibold",children:"Invoices"}),e.jsxs("div",{className:"grid grid-cols-1 gap-5 mb-5 sm:mb-8 sm:grid-cols-2 lg:grid-cols-4",children:[e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"invoice-dates",className:"sb-label",children:"Invoice Dates"}),e.jsx(j,{className:"sb-input",defaultValue:n,action:s=>_(s),placeholder:"Select Invoice Dates"})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"invoice-due-dates",className:"sb-label",children:"Invoice Due Dates"}),e.jsx(j,{className:"sb-input",defaultValue:l,action:s=>N(s),placeholder:"Select Invoice Due Dates"})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"invoice-id",className:"sb-label",children:"Invoice Id"}),e.jsx("input",{autoComplete:"off",className:"sb-input",type:"text",name:"invoice_id",defaultValue:i,placeholder:"Type Invoice Id"})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"booking-reference-id",className:"sb-label",children:"Booking Reference Id"}),e.jsx("input",{autoComplete:"off",className:"sb-input",type:"text",id:"booking-reference-id",name:"reference_id",defaultValue:r,placeholder:"Booking Reference Id"})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"invoice-status",className:"sb-label",children:"Invoice Status"}),e.jsxs("select",{id:"invoice-status",name:"invoice_status",className:"sb-input",defaultValue:c,children:[e.jsx("option",{value:"All",children:"All"}),e.jsx("option",{value:"Unpaid",children:"Unpaid"}),e.jsx("option",{value:"Paid",children:"Paid"}),e.jsx("option",{value:"Overdue",children:"Overdue"}),e.jsx("option",{value:"Cancelled",children:"Cancelled"}),e.jsx("option",{value:"Refunded",children:"Refunded"})]})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"invoice-amount",className:"sb-label",children:"Invoice Amount"}),e.jsx("input",{autoComplete:"off",className:"sb-input",type:"text",id:"invoice-amount",name:"invoice_amount",placeholder:"Type Invoice Amount"})]}),e.jsxs("div",{className:"sb-input-container",children:[e.jsx("label",{htmlFor:"invoice-status",className:"sb-label",children:"Show Data Limit"}),e.jsxs("select",{id:"invoice-status",className:"sb-input",name:"limit_data",defaultValue:o,children:[e.jsx("option",{value:"10",children:"10"}),e.jsx("option",{value:"20",children:"20"}),e.jsx("option",{value:"30",children:"30"}),e.jsx("option",{value:"50",children:"50"}),e.jsx("option",{value:"100",children:"100"}),e.jsx("option",{value:"500",children:"500"}),e.jsx("option",{value:"1000",children:"1000"})]})]})]}),e.jsx("button",{type:"submit",className:`btn btn-lg min-h-0 h-12 btn-primary sm:absolute static top-full left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:active:!-translate-x-1/2 sm:active:!-translate-y-1/2 sm:active:scale-95 !animate-none normal-case flex-nowrap font-normal max-sm:w-full ${b?"pointer-events-none":""}`,children:b?e.jsxs(e.Fragment,{children:[e.jsx(V,{className:"mr-2 animate-spin"})," Processing..."]}):e.jsx(e.Fragment,{children:"Search"})})]}),e.jsx("div",{className:"w-full mb-8 overflow-x-auto",children:e.jsxs("table",{className:"table text-sm booking-list-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"text-sm border",children:"Invoice Id"}),e.jsx("th",{className:"text-sm border",children:"Invoice Date"}),e.jsx("th",{className:"text-sm border",children:"Invoice Due Date"}),e.jsx("th",{className:"text-sm border",children:"Booking Ref"}),e.jsx("th",{className:"text-sm border",children:"Status"}),e.jsx("th",{className:"text-sm border",children:"Invoice Amount"}),e.jsx("th",{className:"text-sm border",children:"Total Due"}),e.jsx("th",{className:"text-sm border",children:"Balance"}),e.jsx("th",{className:"text-sm border",children:"Download"})]})}),e.jsx("tbody",{children:h.length>0?h.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border",children:s.invoice_id}),e.jsx("td",{className:"border text-primary",children:s.invoice_date}),e.jsx("td",{className:"border",children:s.invoice_due_date}),e.jsx("td",{className:"text-xs border",children:e.jsx("a",{href:"#",className:"no-underline link link-primary",children:s.booking_reference_id})}),e.jsx("td",{className:"text-xs border",children:s.status}),e.jsxs("td",{className:"text-xs border",children:[d(s.default_currency)," ",s.invoice_amount]}),e.jsxs("td",{className:"text-xs border",children:[d(s.default_currency)," ",s.total_due]}),e.jsxs("td",{className:"text-xs border",children:[d(s.default_currency)," ",s.balance]}),e.jsx("td",{className:"text-xs border",children:e.jsxs("a",{href:"#",className:"no-underline link link-primary",children:[s.service_type," Invoice"]})})]},s.Id)):e.jsx("tr",{children:e.jsx("td",{colSpan:"100%",className:"py-2 text-sm text-center text-error",children:"no data available"})})})]})})]})]})};export{H as default};
