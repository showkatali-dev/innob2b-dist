import{s as Ye,J as Be,d as Ee,g as ce,j as e,ab as $e,H as ze,i as xe,d$ as oe,b as h,co as Ve,V as me,as as pe,I as he,cp as Ge,cq as Ke,af as Ue,L as Xe}from"./index.js";import{q as Je,h as je}from"./index.esm.js";import{C as Qe}from"./CustomPopOver.js";import{g as We}from"./index.esm2.js";import{H as Ze}from"./index.esm6.js";const rs=()=>{var z,V,G;const{site_title:D}=Ye.useState(),[Ne]=Be(),ue=Ne.get("q"),q=atob(ue),{axiosInstance:be}=Ee(),{data:m,isLoading:fe,error:F}=ce(["BOOKING_DETAILS_HOTEL",q],async()=>{var x,v,t;const l=await be.post("/booking-details",{tracking_id:q,member_id:"1"}),o=(v=(x=l.data)==null?void 0:x.booking)==null?void 0:v.booking_status;if(["hold","confirm","cancel","initiated"].includes(o))return l.data;throw{...l,message:((t=l.data)==null?void 0:t.reason)||"Request failed!"}}),{data:_=[]}=ce(["COUNTRY"],async()=>{const l=window.location.origin,o=await Xe.get(`${l}/country.json`);return Object.values(o.data.data).map(x=>({label:`${x.country_name} (${x.country_code})`,value:x.country_code}))});if(fe)return e.jsx($e,{});if(F)throw F;const{general:{booking_id:ve,hotel_ref_id:ge,supplier_confirmation_id:L,generated_date:ye,supplier_invoice_company:_e,supplier_invoice_number:R},hotel:{search_parameter:{checkIn:w,checkOut:C,total_night:we,total_room:Ce,total_adult:k,total_child:Y},room:{data:A},hotel_contents:{primary_photo:Ae,star_rating:Ie,name:B,address:{full_address:Se},contacts:{phone_numbers:I,email_address:S},property_type:E,policies:He}},pax:{primary:j,data:H},partner:{customer_support_email:Me,customer_hotline:Oe,brand_name:Pe,legal_name:Te,state:De,logo_400_400:qe}}=m,{google_map_site_link:Fe}=((V=(z=m==null?void 0:m.hotel)==null?void 0:z.hotel_contents)==null?void 0:V.address)||{},{checkin:Le,checkout:r,fees:c,know_before_you_go:M,pets:i}=He||{},{begin_time:f,end_time:g,instructions:O,special_instructions:P}=Le||{};let $=1;return e.jsxs("main",{className:"container min-h-screen py-4 overflow-auto hide_scrollbar",children:[e.jsx(ze,{children:e.jsxs("title",{children:["Hotel Booking Voucher",D?" - "+D:""]})}),e.jsxs("div",{className:"relative z-10 bg-base-100 w-[800px] mx-auto",children:[e.jsx("div",{className:xe("top-0 left-0 flex justify-end w-full p-4 text-white bg-primary -z-10","absolute"),children:e.jsxs("div",{className:"text-end",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Accommodation Voucher"}),e.jsx("p",{className:"text-sm",children:"Reservation Confirmed & Guaranteed"})]})}),e.jsxs("div",{className:"py-4",children:[e.jsxs("div",{className:xe("flex items-end gap-4 mb-6","pl-4"),children:[e.jsxs("div",{className:"border border-dashed border-primary w-[150px]",children:[e.jsx("div",{className:"p-1 bg-base-200",children:e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=290x290&data=${Fe}`,alt:"",className:"flex w-full aspect-square"})}),e.jsx("div",{className:"flex justify-center p-1 text-center bg-primary text-primary-content",children:"Scan For Map"})]}),e.jsxs("div",{className:"grid flex-1 grid-cols-3 divide-x rounded-lg bg-neutral/5",children:[e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"flex items-center gap-2 p-1 mb-1 text-sm uppercase text-neutral",children:"CHECK-IN"}),e.jsxs("div",{className:"flex items-center gap-1 text-lg",children:[e.jsx(oe,{className:"text-3xl"}),e.jsxs("div",{children:[e.jsxs("p",{children:[h(w).format("DD")," ",e.jsx("span",{className:"text-sm",children:h(w).format("MMM'YY")})]}),e.jsx("p",{className:"text-sm text-neutral",children:h(w).format("dddd")})]})]})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"CHECK-OUT"}),e.jsxs("div",{className:"flex items-center gap-1 text-lg",children:[e.jsx(oe,{className:"text-3xl"}),e.jsxs("div",{children:[e.jsxs("p",{children:[h(C).format("DD")," ",e.jsx("span",{className:"text-sm",children:h(C).format("MMM'YY")})]}),e.jsx("p",{className:"text-sm text-neutral",children:h(C).format("dddd")})]})]})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"STAY"}),e.jsxs("h1",{className:"text-lg font-semibold",children:[we," ",e.jsx("span",{className:"text-sm",children:"Nights"})]})]})]})]}),e.jsxs("div",{className:"grid flex-1 grid-cols-3 mb-6 text-center rounded-lg bg-neutral/5",children:[e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"Booking ID"}),e.jsx("h1",{className:"text-lg font-semibold",children:ve})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"Hotel Conf. ID"}),e.jsx("h1",{className:"text-lg font-semibold",children:ge||L})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"Nationality"}),e.jsx("h1",{className:"text-lg font-semibold",children:(G=_==null?void 0:_.find(l=>(l==null?void 0:l.value)===(j==null?void 0:j.guest_nationality)))==null?void 0:G.label})]})]}),e.jsxs("div",{className:"flex gap-4 p-4 mb-6 rounded-lg bg-neutral/5",children:[e.jsx("img",{className:"flex rounded-lg w-[200px] aspect-square",src:Ae,alt:B}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-1 text-sm",children:[e.jsx(Je,{className:"text-warning"})," ",e.jsxs("span",{className:"text-neutral",children:[Ie," Star"]})]}),e.jsx("h5",{className:"mb-2 font-semibold",children:B}),E&&e.jsxs("p",{className:"text-sm",children:["Property Type : ",E]}),e.jsxs("div",{className:"text-xs text-neutral",children:[e.jsxs("p",{children:["Address: ",Se]}),e.jsxs("p",{children:["Phone : ",I==null?void 0:I.join(", ")]}),e.jsxs("p",{children:["Mail : ",S==null?void 0:S.join(", ")]})]})]})]}),e.jsxs("div",{className:"grid grid-cols-3 mb-6 border-y",children:[e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"LEAD PAX"}),e.jsx("h1",{className:"text-lg font-semibold",children:j==null?void 0:j.guest_name})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"DATE OF BOOKING"}),e.jsx("h1",{className:"text-lg font-semibold",children:h(ye).format("dddd, DD-MMM-YY")})]}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"p-1 mb-1 text-sm uppercase text-neutral",children:"OCCUPANCY"}),e.jsxs("h1",{className:"text-lg font-semibold",children:[Ce," Rooms, ",k&&`${k} Adult`," ",!!Y&&`${Y} Child`]})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"flex items-center gap-1 mb-2 text-xl font-semibold",children:"Room & Guest Details"}),e.jsxs("div",{className:"divide-y rounded-lg bg-neutral/5",children:[e.jsxs("div",{className:"grid grid-cols-3 divide-x",children:[e.jsx("div",{className:"px-4 py-2",children:e.jsx("div",{className:"p-1 text-sm uppercase text-neutral",children:"Room"})}),e.jsx("div",{className:"px-4 py-2",children:e.jsx("div",{className:"p-1 text-sm uppercase text-neutral",children:"Rate Plan"})}),e.jsx("div",{className:"px-4 py-2",children:e.jsx("div",{className:"p-1 text-sm uppercase text-neutral",children:"Guest Name"})})]}),A==null?void 0:A.map(l=>{var Q,W,Z,ee,se,ae,le,te,re,ie,ne,de;const{room_number:o,name:x,rate_type:v,occupancies:t,rate_comments:K,price:n,meal_option:d}=l||{},Re=(Z=(W=(Q=m==null?void 0:m.hotel)==null?void 0:Q.hotel_contents)==null?void 0:W.room_type)==null?void 0:Z.find(s=>(s==null?void 0:s.room_id)===o),{room_pic:U,room_size:X,amenities:ke,bed_type:N,views:T,paid_amenities:u}=Re||{},b=[...((ee=l==null?void 0:l.amenities)==null?void 0:ee.map(s=>s==null?void 0:s.title))||[],...ke||[],...(N==null?void 0:N.map(s=>{var a;return(a=s==null?void 0:s.configuration)==null?void 0:a.map(p=>p==null?void 0:p.type)}))||[]],y=N==null?void 0:N.reduce((s,a)=>(a!=null&&a.description&&s.some(p=>(p==null?void 0:p.description)===(a==null?void 0:a.description))===!1&&s.push(a),s),[]);let J=[];for(let s=0;s<(t==null?void 0:t.total_room);s++)J.push(String($)),$++;return e.jsxs("div",{children:[e.jsxs("div",{className:"grid grid-cols-3 divide-x",children:[e.jsx("div",{className:"px-4 py-2",children:e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col gap-1",children:[((se=n==null?void 0:n.promo_tag)==null?void 0:se.description)&&e.jsxs("div",{className:"relative flex px-2 py-1 pr-6 text-xs font-light text-white bg-gradient-to-r from-secondary-focus to-secondary -left-3 w-fit !line-clamp-1",children:[n.promo_tag.description,e.jsx("span",{className:"absolute top-0 right-0 h-0 border-y-[12px] border-x-[12px] border-transparent border-r-[#F1F1F5]"})]}),U&&e.jsx("img",{src:U||"/no_image.jpg",alt:x,className:"h-[80px] min-w-[80px] object-cover object-center rounded"}),e.jsxs("h5",{className:"text-[15px] font-medium",children:[t==null?void 0:t.total_room," X ",x]}),e.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[X&&e.jsxs("span",{className:"text-[10px] flex items-center px-1 py-0.5 font-medium rounded bg-secondary/10 text-secondary w-fit gap-1",children:[e.jsx(Ve,{})," ",e.jsxs("span",{children:[X," m",e.jsx("sup",{children:"2"})]})]}),e.jsx(Qe,{button:e.jsxs("div",{className:"text-[10px] flex items-center px-1 py-0.5 font-medium rounded bg-secondary/10 text-secondary w-fit gap-0.5",children:[e.jsx("span",{className:"mr-1",children:"Sleeps:"}),Number(t.adult)>0&&[...Array(Number(t.adult))].map((s,a)=>e.jsx(me,{},a)),Number(t.child)>0&&[...Array(Number(t.child))].map((s,a)=>e.jsx(pe,{},a))]}),children:e.jsxs("div",{className:"flex flex-col gap-1 px-3 py-2 text-xs",children:[e.jsxs("div",{className:"text-primary",children:[e.jsx(me,{})," Adult: ",t.adult]}),e.jsxs("div",{className:"text-secondary",children:[e.jsx(pe,{})," Child: ",t.child]})]})})]})]})})}),e.jsx("div",{className:"px-4 py-2",children:e.jsxs("ul",{className:"flex flex-col gap-1 text-xs",children:[(y==null?void 0:y.length)>0&&e.jsxs("li",{className:"align-middle list-item text-secondary",children:[e.jsx(We,{className:"text-xl"})," ",y.map(s=>s.description).join("/")]}),(!d||(d==null?void 0:d.some(s=>(s==null?void 0:s.included)==="yes"))===!1)&&v&&e.jsxs("li",{className:"align-middle list-item text-secondary",children:[e.jsx(he,{path:Ge,size:.8})," ",v]}),(d==null?void 0:d.length)>0&&(d==null?void 0:d.map((s,a)=>e.jsxs("li",{className:"align-middle list-item text-secondary",children:[e.jsx(he,{path:Ke,size:.8})," ",s.title]},a))),T==null?void 0:T.map((s,a)=>s&&e.jsxs("li",{className:"align-middle list-item text-secondary",children:[e.jsx(Ze,{className:"mr-1"})," ",s]},a))]})}),e.jsx("div",{className:"px-4 py-2",children:e.jsx("div",{className:"space-y-1 font-semibold",children:H==null?void 0:H.filter(s=>J.includes(s==null?void 0:s.room_number)).map((s,a)=>e.jsxs("p",{children:[s==null?void 0:s.title," ",s==null?void 0:s.first_name," ",s==null?void 0:s.last_name]},a))})})]}),!!K&&e.jsxs("div",{className:"p-1 pl-4",children:[e.jsxs("div",{className:"bg-yellow-500 h-4 text-[10px] flex w-fit px-1 float-start items-center justify-center relative text-white",children:[e.jsx("p",{children:"Note"}),e.jsx("div",{className:"absolute left-full top-0 h-0 w-0 border-[8px] border-transparent border-l-yellow-500"})]}),e.jsx("p",{className:"text-xs text-neutral indent-4",dangerouslySetInnerHTML:{__html:Ue(K)}})]}),((te=(le=(ae=n==null?void 0:n.purchase)==null?void 0:ae.price_breakdown)==null?void 0:le.payable_at_property)==null?void 0:te.length)>0&&e.jsxs("div",{className:"p-1 pl-4",children:[e.jsxs("div",{className:"bg-primary h-4 text-[10px] flex w-fit px-1 items-center justify-center relative text-white",children:[e.jsx("p",{children:"Payable at Property"}),e.jsx("div",{className:"absolute left-full top-0 h-0 w-0 border-[8px] border-transparent border-l-primary"})]}),(ne=(ie=(re=n==null?void 0:n.purchase)==null?void 0:re.price_breakdown)==null?void 0:ie.payable_at_property)==null?void 0:ne.map(s=>e.jsxs("div",{className:"pl-2 text-xs",children:[e.jsxs("strong",{children:[s==null?void 0:s.title,":"]})," ",e.jsxs("span",{children:[s==null?void 0:s.currency," ",s==null?void 0:s.amount]})," ",e.jsxs("span",{className:"neutral",children:["(",s==null?void 0:s.remark,")"]})]},s==null?void 0:s.title))]}),(b==null?void 0:b.length)>0&&e.jsxs("div",{className:"p-1 pl-4",children:[e.jsxs("div",{className:"bg-primary h-4 text-[10px] flex w-fit px-1 float-start items-center justify-center relative text-white",children:[e.jsx("p",{children:"Amenities"}),e.jsx("div",{className:"absolute left-full top-0 h-0 w-0 border-[8px] border-transparent border-l-primary"})]}),e.jsx("p",{className:"text-xs text-neutral indent-4",children:b==null?void 0:b.join(", ")})]}),(u==null?void 0:u.length)>0&&e.jsxs("div",{className:"p-1 pl-4",children:[e.jsxs("div",{className:"bg-primary h-4 text-[10px] flex w-fit px-1 float-start items-center justify-center relative text-white",children:[e.jsxs("p",{children:["Paid Amenities"," ",e.jsx("span",{className:"text-white/80",children:"(Charge Applicable)"})]}),e.jsx("div",{className:"absolute left-full top-0 h-0 w-0 border-[8px] border-transparent border-l-primary"})]}),e.jsx("p",{className:"text-xs text-neutral indent-4",children:(de=u==null?void 0:u.map(s=>s))==null?void 0:de.join(", ")})]})]},o)})]})]}),R&&e.jsx("div",{className:"mb-6",children:e.jsxs("p",{className:"text-sm text-neutral",children:["Payable through ",Te,", acting as agent for the service operating company, details of which can be provided upon request. Company: ",_e," VAT:"," ",R," Reference: ",L]})}),(f&&g||(r==null?void 0:r.time)||!!O||!!P)&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"flex items-center gap-1 mb-2 text-xl font-semibold",children:"Policies"}),e.jsxs("div",{className:"p-4 space-y-6 rounded-lg bg-neutral/5",children:[(f&&g||(r==null?void 0:r.time))&&e.jsxs("div",{className:"flex flex-col gap-2 mb-2 text-sm",children:[!!f&&!!g&&e.jsxs("div",{children:[e.jsxs("span",{className:"font-medium",children:[e.jsx(je,{className:"mb-0.5 text-lg text-secondary mr-1"})," ","Check-in:"]})," ",f?e.jsxs(e.Fragment,{children:[f," to ",g]}):"❌"]}),!!(r!=null&&r.time)&&e.jsxs("div",{children:[e.jsxs("span",{className:"font-medium",children:[" ",e.jsx(je,{className:"mb-0.5 text-lg text-secondary mr-1"})," ","Check-out:"]})," ",(r==null?void 0:r.time)||"❌"]})]}),!!O&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Instructions:"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:O||"No data available"}})]}),!!P&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Special Instructions:"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:P||"No data available"}})]})]})]}),(!!(c!=null&&c.optional)||!!M||!!(i!=null&&i.at(0)))&&e.jsxs("div",{className:"mb-6",children:[e.jsx("h1",{className:"flex items-center gap-1 mb-2 text-xl font-semibold",children:"Additional Information"}),e.jsxs("div",{className:"p-4 space-y-6 rounded-lg bg-neutral/5",children:[!!(c!=null&&c.optional)&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Fees:"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:(c==null?void 0:c.optional)||"No data available"}})]}),!!M&&e.jsxs("div",{className:"mb-3 text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Know before you go:"}),e.jsx("div",{dangerouslySetInnerHTML:{__html:M||"No data available"}})]}),!!(i!=null&&i.at(0))&&e.jsxs("div",{className:"text-xs instructions",children:[e.jsx("h3",{className:"mb-1 text-sm font-semibold",children:"Pets:"}),i!=null&&i.at(0)?e.jsx("ul",{children:i==null?void 0:i.map((l,o)=>e.jsx("li",{children:l},o))}):e.jsx("div",{children:"No data available"})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("img",{src:qe,alt:"",className:"w-[200px]"}),e.jsxs("div",{className:"flex divide-x",children:[e.jsxs("div",{className:"px-4 py-5",children:[e.jsx("h1",{className:"text-sm uppercase text-neutral",children:"Customer Service"}),e.jsx("p",{className:"font-semibold",children:Me})]}),e.jsxs("div",{className:"px-4 py-5",children:[e.jsx("h1",{className:"text-sm uppercase text-neutral",children:"Helpline"}),e.jsx("p",{className:"font-semibold",children:Oe})]})]})]}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 text-sm bg-primary text-primary-content",children:[e.jsxs("p",{children:["Office: ",De]}),e.jsx("p",{children:Pe})]})]})]})]})};export{rs as default};
