import{m as L,e as d,l as T,o as e,Y as A,I as H,b5 as R,Q as N}from"./index.js";import{a as Y,bx as z,aa as M,F as O}from"./App.js";import{I as Q}from"./InputDateWithTime.js";import"./shortcut-buttons-flatpickr.min.js";const G=()=>{var c,x;const{site_title:m,system_config:n}=L.useState(),[t,l]=d.useState(null),[i,o]=d.useState(!1),{axiosInstance:k}=Y(),{user_data:{member_id:w,fullname:S,email:C,partner_id:I,default_currency:u}}=T.useState(),[P,q]=d.useState(""),E=async a=>{var j,y,v,_,g;if(a.preventDefault(),i)return;o(!0),l(null);const r=a.target,p=r.name.value,V=r.platform_type.value,h=r.receiver_id.value,f=((j=r.amount)==null?void 0:j.value)||"",D=((y=r.service_details)==null?void 0:y.value)||"",b=((v=r.pay_link_valid)==null?void 0:v.value)||"";if(!p||!h||!f||!b){o(!1);return}const F={name:p,receiver_id:h,member_id:w,partner_id:I,platform_type:V,service_details:D,payment_type:"amount",amount:f,currency:u,pay_link_valid:b};try{const s=await k.post("/tools/send-payment-link",F);((_=s.data)==null?void 0:_.status)==="success"?l({payment_link:s.data.payment_link,pay_link_valid:s.data.pay_link_valid,message:s.data.reason}):N("error","Sending Failed!",(g=s.data)==null?void 0:g.reason)}catch(s){N("error","Sending Failed!",s.message)}finally{o(!1)}};return(n==null?void 0:n.show_payment_link)!=="YES"?e.jsx(z,{}):e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(A,{children:e.jsxs("title",{children:["Payment",m?" - "+m:""]})}),e.jsxs("form",{onSubmit:E,className:"w-full pt-2",children:[e.jsx("h3",{className:"pb-2 text-lg font-semibold",children:"Send Payment Link"}),e.jsx("hr",{className:"mb-4"}),e.jsxs("div",{className:"grid grid-cols-2 gap-y-4 gap-x-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Select Platform Type."}),e.jsx("select",{type:"text",name:"platform_type",className:"w-full h-10 text-sm rounded select select-bordered min-h-8 focus:outline-0 focus:border-neutral/30 ",required:!0,children:(x=(c=n==null?void 0:n.support_send_alert_platform_type)==null?void 0:c.data)==null?void 0:x.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Enter Receiver ID."}),e.jsx("input",{autoComplete:"off",type:"text",name:"receiver_id",className:"w-full h-10 text-sm rounded input input-bordered min-h-8 focus:outline-0 focus:border-neutral/30 ",defaultValue:C||"",required:!0,placeholder:"Email"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Enter your name."}),e.jsx("input",{autoComplete:"off",type:"text",name:"name",className:"w-full h-10 text-sm rounded input input-bordered min-h-8 focus:outline-0 focus:border-neutral/30 ",defaultValue:S||"",required:!0,placeholder:"Name"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Input Amount."}),e.jsxs("div",{className:"w-full join",children:[e.jsx("span",{className:"flex items-center px-4 border rounded-l bg-neutral/10 text-neutral join-item border-neutral/20",children:u}),e.jsx("input",{autoComplete:"off",type:"text",name:"amount",className:"flex-1 w-full h-10 text-sm rounded input input-bordered min-h-8 focus:outline-0 focus:border-neutral/30 hide_arrow_key join-item",defaultValue:"",required:!0,placeholder:"Amount"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Service Details."}),e.jsx("textarea",{type:"text",name:"service_details",className:"w-full text-sm rounded textarea textarea-bordered min-h-16 focus:outline-0 focus:border-neutral/30",required:!0,placeholder:"Service Details",maxLength:249})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-neutral",children:"Input Validity."}),e.jsx(Q,{name:"pay_link_valid",action:a=>q(a),defaultValue:P,minDate:"today",className:"w-full h-10 text-sm rounded input input-bordered min-h-8 focus:outline-0 focus:border-neutral/30",required:!0,placeholder:"Valid till"})]})]}),e.jsx("div",{className:"flex justify-end mt-4",children:e.jsx("button",{type:"submit",className:`normal-case btn btn-primary rounded-md min-w-[160px] shadow shadow-primary/30 min-h-0 h-10 ${i?"pointer-events-none":""}`,children:i?e.jsxs(e.Fragment,{children:[e.jsx(M,{className:"mr-2 animate-spin"})," Processing..."]}):"Send"})})]}),t&&e.jsxs("div",{className:"relative flex items-center gap-4 p-4 mt-8 border rounded-lg border-success bg-success/10 text-success",children:[e.jsx("button",{onClick:()=>l(null),className:"absolute top-1 right-1 btn btn-ghost btn-circle btn-sm",children:e.jsx(O,{})}),e.jsx("button",{onClick:a=>{navigator.clipboard.writeText(t==null?void 0:t.payment_link),a.target.textContent="Copied",setTimeout(()=>a.target.textContent="Copy",2e3)},className:"absolute font-normal normal-case bottom-1 right-2 !glass btn btn-ghost btn-xs text-primary/70 hover:text-primary",children:"Copy link"}),e.jsx(H,{path:R,size:1,className:"text-xl"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold",children:t==null?void 0:t.message}),e.jsxs("p",{children:["Payment link:"," ",e.jsx("a",{href:t==null?void 0:t.payment_link,target:"_blank",rel:"noreferrer",children:t==null?void 0:t.payment_link}),"."]})]})]})]})};export{G as default};
