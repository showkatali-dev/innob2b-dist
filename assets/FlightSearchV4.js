import{ac as pe,ad as w,m as ve,e as S,o as e,b0 as _e,l as Pe,a$ as qe,O as ce,am as we,G as de,Q as Se,ae as Ce,aa as $e,Y as He,al as Le}from"./index.js";import{a as Re}from"./index.esm6.js";import{P as Oe,a as ye,b as je,c as ke,F as Ne,f as Ue,m as Qe,cy as Ve,g as Ye,h as Ge,i as We,n as Xe,c9 as Je,ca as Ke,aC as Ze,cb as De,q as ea,r as aa,s as ta,t as ra,cz as sa}from"./App.js";import{T as ia,R as la,S as na,b as oa,a as ca,P as da,F as pa,c as ma}from"./Searchbox3.js";import{a as ua,T as xa}from"./index.esm3.js";import{F as ha,R as fa,S as ga,a as _a}from"./SearchboxSkeleton.js";import{C as H}from"./Checkbox.js";import{g as ba}from"./SuppliersSelection2.js";import{F as ja}from"./FlightItineraryData.js";import{F as va}from"./index3.js";import{b as ya}from"./index.esm2.js";import"./index.esm4.js";import"./MultipleFlight2.js";import"./CustomPopOver.js";import"./_commonjs-dynamic-modules.js";import"./sweetalert2-react-content.es.js";import"./FareTypeSection.js";import"./SingleSelect.js";import"./InputDate.js";import"./shortcut-buttons-flatpickr.min.js";import"./PrimaryTabsWithIcon.js";import"./index.esm.js";const Fe=({filterData:E,additionalData:m})=>{const{flight_search_sidebar:{mobile:{isActive:$}}}=pe.useState(),{axiosInstance:O}=ye(),{data:L=[],isLoading:M}=je("AIRLINES",async()=>{const a=await O.get("/tools/airlines-data");return Object.entries(a.data.data).map(([l,c])=>({value:l,name:c.airline_name}))}),{price:g,duration:C,no_stop_summery:R,baggage_summery:U,departure:Q,arrival:X,operating:z,cabin_class:J,aircraft_names:P,provider:k}=w.useState(a=>a),{min_price:y,max_price:V}=E,{min_duration:F,max_duration:K}=E,{supplier_option:p}=ve.useState(),h=S.useMemo(()=>{var a;return((a=p==null?void 0:p.data)==null?void 0:a.filter(i=>(i==null?void 0:i.supplier_type)==="FLIGHT"&&((m==null?void 0:m.supplier_uid)==="all"||(i==null?void 0:i.supplier_uid)===(m==null?void 0:m.supplier_uid))))||[]},[p==null?void 0:p.data,m==null?void 0:m.supplier_uid]);S.useEffect(()=>{const{min_price:a,max_price:i,min_duration:l,max_duration:c,cabin_class:b,aircraft_names:Y,no_stop_summery:G,baggage_summery:n,departure:A,arrival:W,carrier:Z}=E;w.update(f=>{f.price={min_price:a-5,max_price:i+5},f.duration={min_duration:l-5,max_duration:c+5},h==null||h.forEach(d=>{f.provider[d==null?void 0:d.supplier_code]=!1}),Object.values(G).forEach(d=>{f.no_stop_summery[d]=!1}),Object.values(b).forEach(d=>{f.cabin_class[d]=!1}),Object.values(Y).forEach(d=>{f.aircraft_names[d]=!1}),Object.values(n).forEach(d=>{f.baggage_summery[d]=!1}),Object.values(A.timing_slot).forEach(d=>{f.departure[d]&&(f.departure[d].value=!1)}),Object.values(W.timing_slot).forEach(d=>{f.arrival[d]&&(f.arrival[d].value=!1)}),Object.values(Z.operating).forEach(d=>{f.operating[d]=!1})})},[E,h]);const[N,I]=S.useState(!1),[_,r]=S.useState(!1);return M?e.jsx(ha,{}):e.jsxs(e.Fragment,{children:[e.jsx("aside",{className:ke("filter-section fixed lg:translate-x-0 max-w-xs lg:max-w-full max-lg:top-0 max-lg:left-0 max-lg:bottom-0 overflow-auto duration-500 z-30 lg:z-0 bg-base-200 lg:bg-transparent lg:sticky lg:top-20 h-fit lg:rounded-lg lg:shadow-custom2 lg:mb-16",$?"translate-x-0":"translate-x-[-400px]"),children:e.jsxs("div",{className:"py-5 rounded-lg lg:shadow-lg lg:bg-base-200 max-h-screen lg:max-h-[calc(100vh-80px)] overflow-auto custom-scrollbar px-4",children:[(m==null?void 0:m.journey_type)!=="MultiCity"&&e.jsx("div",{className:"flex justify-center mb-4 max-sm:hidden",children:e.jsx(ia,{})}),e.jsx("button",{onClick:()=>pe.update(a=>{a.flight_search_sidebar.mobile.isActive=!1}),className:"absolute z-30 flex ml-auto btn btn-sm btn-ghost btn-circle bg-red-500/20 hover:bg-red-500 hover:text-white lg:hidden top-1 right-1",children:e.jsx(Ne,{})}),e.jsx("div",{className:"flex items-center justify-between gap-5 my-4 lg:mt-0",children:e.jsx("h6",{className:"font-medium",children:"Filters"})}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Ue,{className:"mr-1"}),"Price Range"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx(fa,{min:y-5,max:V+5,defaultValue:[y-5,V+5],value:[g==null?void 0:g.min_price,g==null?void 0:g.max_price],action:a=>w.update(i=>{i.price={min_price:a[0],max_price:a[1]}})})})]}),e.jsx("hr",{className:"mb-3"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Qe,{className:"mr-1"}),"Duration"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx(la,{min:F>5?F-5:F,max:K+5,defaultValue:[F-5,K+5],value:[C==null?void 0:C.min_duration,C==null?void 0:C.max_duration],action:a=>w.update(i=>{i.duration={min_duration:a[0],max_duration:a[1]}})})})]}),e.jsx("hr",{className:"mb-3"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Ve,{}),"Provider Filter"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(k).sort().map(([a,i])=>{var l;return e.jsx(H,{label:(l=h.find(c=>c.supplier_code===a))==null?void 0:l.title,defaultChecked:i,action:c=>w.update(b=>{b.provider[a]=c})},a)})})})]}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Ye,{className:"mr-1"}),"Baggage"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(U).sort().map(([a,i])=>e.jsx(H,{label:a,defaultChecked:i,action:l=>w.update(c=>{c.baggage_summery[a]=l})},a))})})]}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Ge,{className:"mr-1"}),"No of Stops"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(R).sort().map(([a,i])=>e.jsx(H,{label:a,defaultChecked:i,action:l=>w.update(c=>{c.no_stop_summery[a]=l})},a))})})]}),e.jsx("hr",{className:"my-3"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(We,{}),"Flight Timings"]})}),e.jsxs("div",{className:"px-0 mt-3 collapse-content",children:[e.jsx("h6",{className:"mb-3 text-xs rounded badge badge-sm text-neutral",children:"Based On Departure Location"}),e.jsx("div",{className:"flex flex-col gap-3 mb-4 text-xs",children:Object.entries(Q).map(([a,i])=>e.jsx(H,{label:i.label,defaultChecked:i.value,action:l=>w.update(c=>{c.departure[a].value=l})},a))}),e.jsx("h6",{className:"mb-3 text-xs rounded badge badge-sm text-neutral",children:"Based On Arrival Location"}),e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(X).map(([a,i])=>e.jsx(H,{label:i.label,defaultChecked:i.value,action:l=>w.update(c=>{c.arrival[a].value=l})},a))})]})]}),e.jsx("hr",{className:"my-3"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0",defaultChecked:!0}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(Xe,{className:"mr-1"}),"Cabin"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsx("div",{className:"flex flex-col gap-3 text-xs",children:Object.entries(J).sort().map(([a,i])=>e.jsx(H,{label:a,defaultChecked:i,action:l=>w.update(c=>{c.cabin_class[a]=l})},a))})})]}),e.jsx("hr",{className:"my-3"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0"}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(ua,{className:"mr-1"}),"Aircraft"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsxs("div",{className:"flex flex-col gap-3 text-xs",children:[Object.entries(P).sort().slice(0,N?void 0:4).map(([a,i])=>e.jsx(H,{label:a,defaultChecked:i,action:l=>w.update(c=>{c.aircraft_names[a]=l})},a)),!N&&Object.entries(P).length>4&&e.jsxs("button",{onClick:()=>I(!0),className:"font-medium text-left text-primary",children:["+",Object.entries(P).length-4," Aircraft"]})]})})]}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"collapse collapse-arrow",children:[e.jsx("input",{type:"checkbox",className:"min-h-0"}),e.jsx("div",{className:"min-h-0 p-0 h-fit collapse-title after:!right-1.5",children:e.jsxs("h6",{className:"flex items-center gap-1 font-medium",children:[e.jsx(xa,{}),"Airlines"]})}),e.jsx("div",{className:"px-0 mt-3 collapse-content",children:e.jsxs("div",{className:"flex flex-col gap-3 text-xs",children:[Object.entries(z).sort().slice(0,_?void 0:4).map(([a,i])=>{var l;return e.jsx(H,{label:((l=L.find(c=>c.value===a))==null?void 0:l.name)||a,defaultChecked:i,action:c=>w.update(b=>{b.operating[a]=c})},a)}),!_&&Object.entries(z).length>4&&e.jsxs("button",{onClick:()=>r(!0),className:"font-medium text-left text-primary",children:["+",Object.entries(z).length-4," Airlines"]})]})})]})]})}),$&&e.jsx("div",{onClick:()=>pe.update(a=>{a.flight_search_sidebar.mobile.isActive=!1}),className:"fixed top-0 bottom-0 left-0 right-0 z-20 lg:hidden bg-black/10 backdrop-blur-[2px]"})]})};Fe.propTypes={filterData:Oe.object.isRequired,additionalData:Oe.object.isRequired};const Na=()=>{const{active:E}=pe.useState(p=>p.modal),{data:m}=_e.useState(),[$,O]=S.useState(!1),[L,M]=S.useState(!1),[g,C]=S.useState(!1),{user_data:R}=Pe.useState(),{member_id:U,partner_from_email_full_name:Q,partner_from_email_address:X}=R||{},[z,J]=Je(),P=S.useRef(),{axiosInstance:k}=ye(),{system_config:y}=ve.useState(),V=()=>{qe(),M(!1)},F=async p=>{var h,N,I;if(p.preventDefault(),!$){O(!0);try{const _=p.target,r=_.name.value,a=_.email.value,i=_.message.value,l=await k.post("/tools/send-email",{email_subject:"Multiple Flight Sharing with you",email_body:`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
                * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                    font-size: inherit;
        
                }
        
                body {
                    font-size: 16px;
                    line-height: 20px;
                }
            </style>
        
        </head>
        
        <body>
        
        
            <div
                style="min-height: 100vh; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; color: #60636b; font-size: 15px;">
        
                <div style="width: 100%; border-radius: 5px; background-color: #fff; font-weight: 500; overflow: hidden;">
        
                    <div style="margin-bottom: 14px; padding: 1rem 1rem 0 1rem;">
                        <h5 style="font-weight: bold; margin-bottom: 10px; font-size: 16px;">Hi, ${r}</h5>
                        <p style="font-size: 14px;">${i}</p>
                    </div>
        
                    <div style="padding: 1rem;">
                        ${m.map(({flight_group:c,price_breakdown:b})=>{var Y,G;return`
                        <div style="padding: 12px; border-radius: 8px; border: 1px solid #f0f0f0;">
        
                            <div style="border: 1px solid #E5E7EB; border-radius: 8px; margin-bottom: 30px;">
                                ${c.map(n=>`
                                <div>
                                    <div style="padding: 12px; border-bottom: 1px solid #E5E7EB;">
                                        <h6 style="font-weight: 500;">${n.routes[0].origin_airport.city} to
                                            ${n.routes.at(-1).destination_airport.city},
                                            ${ce(n.routes[0].departure_time).format(y.default_date_format_print)}</h6>
                                    </div>
                                    <div style="padding: 12px;">
                                        ${n.routes.map(A=>{var s,o,j,T,B,he,le,fe,ne,D;const{lay_over:W,operating:{carrier_name:Z,carrier:f,flight_number:d,carrier_logo:me},aircraft:{name:ee},departure_time:ae,origin_airport:{name:te},origin_terminal:re,arrival_time:se,destination_airport:{name:ue,destination_terminal:ie},flight_time:xe,baggages:u,booking_class:t}=A;return`
                                        <div>
        
                                            ${W!=="not-applicable"?`
                                            <div
                                                style="background-color: #f4f4f4; border-radius: 8px; padding: 4px 8px; margin-top: 30px; margin-bottom: 30px; width: fit-content; margin-left: auto; margin-right: auto;">
                                                <p style="text-align: center; font-size: 12px;"><span
                                                        style="color: #dfa33a; font-weight: 700;">Change
                                                        of Airport</span> • Change of planes • ${we(W)} layover in ${te}</p>
                                            </div>
                                            `:""}
        
                                            <div style="display: flex; margin-bottom: 16px;">
                                                <img style="border: 1px solid #f0f0f0; width: 2.4rem; height: 2.4rem; border-radius: 50%; margin-right: 12px;"
                                                    src="https://gtrs-airlineimages.s3.ap-southeast-1.amazonaws.com/icon/${me}"
                                                    alt="" />
                                                <h6 style="font-weight: 500;">${Z} <span
                                                        style="color: #9BA0B2;">${f} | ${d}</span></h6>
                                            </div>
                                            <table style="width: 100%; margin-bottom: 16px;">
                                                <tr>
                                                    <td>
                                                        <div style="text-align: center;">
                                                            <h4 style="font-size: 24px; font-weight: 600px;">${ce(ae).format("HH:mm")}</h4>
                                                            <p style="font-size: 12px; color: #7a7a7a;">${ce(ae).format(y.default_date_format_print)}</p>
                                                            <p style="font-size: 12px; color: #7a7a7a;">
                                                                ${te}
                                                            </p>
                                                            ${re?`
                                                            <p style="font-size: 10px; color: #b6b6b6;">Terminal
                                                                ${re}</p>
                                                            `:""}
        
                                                        </div>
        
        
                                                    </td>
                                                    <td>
                                                        <div style="flex-shrink: 0; text-align: center;">
                                                            <h6
                                                                style="margin-left: auto; margin-right: auto; font-size: 12px; font-weight: 500; width: fit-content;">
                                                                ${we(xe)}</h6>
        
                                                            <div
                                                                style="width: 56px; height: 2px; margin-left: auto; margin-right: auto; margin-top: 8px; margin-bottom: 8px; display: flex; background-color: #f97316;">
        
                                                            </div>
        
        
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div style="text-align: center;">
                                                            <h4 style="font-size: 24px; font-weight: 600px;">${ce(se).format("HH:mm")}</h4>
                                                            <p style="font-size: 12px; color: #7a7a7a;">${ce(se).format(y.default_date_format_print)}</p>
                                                            <p style="font-size: 12px; color: #7a7a7a;">
                                                                ${ue}</p>
        
                                                            ${ie?`
                                                            <p style="font-size: 10px; color: #b6b6b6;">Terminal
                                                                ${ie}</p>
                                                            `:""}
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                            <table style="width: 100%;">
                                                <tr>
                                                    <td style="width: 100%;">
                                                        <div>
                                                            <div
                                                                style="display: flex; gap: 8px; font-size: 12px; color: #0FA976;">
                                                                <p style="font-weight: 500; margin-right: 2px;">
                                                                    Baggage:
                                                                </p>
                                                                <p>
                                                                    ${(o=(s=u==null?void 0:u.checked)==null?void 0:s.ADT)!=null&&o.title?u.checked.ADT.title:"0 pieces"} for ADT
                                                                </p>
        
                                                                ${(T=(j=u==null?void 0:u.checked)==null?void 0:j.CNN)!=null&&T.title?`
                                                                <p>
                                                                    ${u.checked.CNN.title}{" "}
                                                                    for CNN
                                                                </p>
                                                                `:""}
        
                                                                ${(he=(B=u==null?void 0:u.checked)==null?void 0:B.INF)!=null&&he.title?`
                                                                <p>
                                                                    ${u.checked.INF.title}{" "}
                                                                    for INF
                                                                </p>
                                                                `:""}
                                                            </div>
                                                            <div
                                                                style="display: flex; gap: 8px; font-size: 12px; color: #078db6;">
                                                                <p style="font-weight: 500; margin-right: 2px;">Hand
                                                                    Baggage: ${(fe=(le=u==null?void 0:u.carry_on)==null?void 0:le.ADT)!=null&&fe.title?u.carry_on.ADT.title:"7 kg*"} for ADT</p>
        
                                                              
                                                                <p style="font-weight: 500; margin-right: 2px;">
                                                                    ${((D=(ne=u==null?void 0:u.carry_on)==null?void 0:ne.CNN)==null?void 0:D.title)||"7 kg*"}{" "}
                                                                    for
                                                                    CNN
                                                                </p>
                                                            </div>
                                                        </div>
        
                                                    </td>
                                                    <td style="width: fit-content; white-space: nowrap;">
                                                        <div>
                                                            <div style="display: flex; font-size: 12px; color: #eab308;">
                                                                <p style="font-weight: 500; margin-right: 8px;">Cabin Class:
                                                                    <span class="capitalize">${t!=null&&t.cabin_class?t==null?void 0:t.cabin_class:"N/A"}</span>
                                                                </p>
                                                            </div>
                                                            <div style="display: flex; font-size: 12px; color: #078db6;">
                                                                <p
                                                                    style="margin-right: 8px; font-weight: 500; display: flex; align-items: center;">
                                                                    Aircraft: ${ee||"N/A"}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                        `}).join(`
`)}
        
                                    </div>
                                </div>
                                `).join(`
`)}
        
                            </div>
        
        
                            ${g?`
                            <div style="border: 1px solid #e0e0e0; border-radius: 8px; margin-bottom: 30px;">
                                <div style="padding: 12px; border-bottom: 1px solid #e0e0e0;">
                                    <h6 style="font-weight: 500;">Fare breakdown</h6>
                                </div>
                                <div style="width: 100%; padding: 12px; overflow-x: auto;">
                                    <table style="font-size: 14px; border-collapse: collapse; text-align: center; width: 100%;">
                                        <thead>
                                            <tr>
                                                <th style="padding: 8px; border: 1px solid #e0e0e0;">Fare Summary</th>
                                                <th style="padding: 8px; border: 1px solid #e0e0e0;">Base Fare</th>
                                                <th style="padding: 8px; border: 1px solid #e0e0e0;">Taxes + Fees</th>
                                                <th style="padding: 8px; border: 1px solid #e0e0e0;">Per Passenger</th>
                                                <th style="padding: 8px; border: 1px solid #e0e0e0;">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${b==null?void 0:b.map(n=>`
                                            <tr>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;">${n.passenger_type}
                                                </td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;">
                                                    ${de(n.base_fare.currency)}
                                                    ${n.base_fare.amount}</td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;">
                                                    ${de(n.tax.currency)} ${n.tax.amount}
                                                </td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;">
                                                    ${de(n.total.currency)} (
                                                    ${n.total.amount/n.passenger_total} x
                                                    ${n.passenger_total})</td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;">
                                                    ${de(n.total.currency)} ${n.total.amount}</td>
                                            </tr>
                                            `).join(`
`)}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th
                                                    style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;text-align: start;">
                                                    Total (
                                                    ${b.map(n=>n.passenger_total).reduce((n,A)=>n+A,0)}
                                                    Travelers)</th>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;"></td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;"></td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;"></td>
                                                <td style="padding: 8px; border: 1px solid #e0e0e0; color: #7a7a7a;">
                                                    ${de((G=(Y=b[0])==null?void 0:Y.total)==null?void 0:G.currency)}
                                                    ${b.map(n=>n.total.amount).reduce((n,A)=>n+A,0)}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                            `:""}
        
                        </div>
        
        
                        `}).join(`
`)}
                    </div>
                </div>
            </div>
        
        </body>
        
        </html>`,email_to:{full_name:r,email_addresss:a},email_from:{full_name:Q,email_addresss:X}});if(V(),((h=l==null?void 0:l.data)==null?void 0:h.status)==="success")Se("success","Sent!",(N=l==null?void 0:l.data)==null?void 0:N.reason);else throw new Error((I=l==null?void 0:l.data)==null?void 0:I.reason)}catch(_){Se("error","Failed!",_.message)}finally{O(!1)}}},K=async()=>{var p;try{const h=z||await J(P.current),N=h==null?void 0:h.match(/^data:image\/([^;]+)/),I=N?N[1]:null,_=h.replace(/^data:image\/[^;]+;base64,/,""),r=await k.post("/tools/upload-base64-file",{image_type:"data",category:"flight_details",fileExtension:I,documents_image_url:_,member_id:U});if(((p=r.data)==null?void 0:p.status)==="success"){const{ObjectURL:a}=r.data;navigator.clipboard.writeText(a),M(!0)}}catch(h){console.error(h)}};return e.jsx("div",{className:"modal",open:E==="multiple_flight_share",children:e.jsxs("form",{onSubmit:F,className:"max-w-5xl p-0 rounded-md modal-box bg-base-200",children:[e.jsxs("div",{className:"sticky top-0 flex items-start justify-between px-4 py-2 text-white rounded-t-md bg-primary-focus",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Flight Share"}),e.jsx("button",{onClick:V,type:"button",className:"btn btn-sm btn-circle btn-ghost",children:e.jsx(Ne,{})})]}),e.jsxs("div",{className:"p-5 max-h-[70vh] h-full overflow-auto",children:[e.jsx("div",{className:"grid gap-4",ref:P,children:m.map(p=>{const{flight_group:h,price_breakdown:N}=p;return e.jsxs("div",{className:"p-3 space-y-4 border rounded-lg",children:[e.jsx(ja,{flight_group:h}),g&&e.jsx(va,{price_breakdown:N})]},p==null?void 0:p.flight_key)})}),e.jsxs("div",{className:"grid grid-cols-3 gap-5 mt-8",children:[e.jsxs("div",{className:"gap-2 form-control",children:[e.jsx("label",{children:"Name:"}),e.jsx("input",{autoComplete:"off",type:"text",className:"h-10 min-h-0 bg-transparent rounded input input-bordered focus:outline-none focus:border-primary",name:"name",placeholder:"Name",required:!0})]}),e.jsxs("div",{className:"gap-2 form-control",children:[e.jsx("label",{children:"Email:"}),e.jsx("input",{autoComplete:"off",type:"email",className:"h-10 min-h-0 bg-transparent rounded input input-bordered focus:outline-none focus:border-primary",name:"email",placeholder:"Email",required:!0})]}),e.jsxs("div",{className:"gap-2 form-control",children:[e.jsx("label",{children:"Price Include"}),e.jsxs("select",{className:"h-10 min-h-0 bg-transparent rounded select select-bordered focus:outline-none focus:border-primary",required:!0,value:g?"yes":"no",onChange:p=>C(p.target.value==="yes"),children:[e.jsx("option",{value:"no",children:"No"}),e.jsx("option",{value:"yes",children:"Yes"})]})]}),e.jsxs("div",{className:"col-span-3 gap-2 form-control",children:[e.jsx("label",{children:"Message:"}),e.jsx("textarea",{className:"py-2 bg-transparent rounded min-h-16 input input-bordered focus:outline-none focus:border-primary",name:"message",placeholder:"Message",required:!0})]})]})]}),e.jsxs("div",{className:"flex justify-end gap-3 px-4 py-2 mt-2 border-t bg-base-300",children:[e.jsxs("div",{className:"dropdown dropdown-top dropdown-end",children:[e.jsxs("div",{tabIndex:0,role:"button",className:"min-h-0 normal-case btn btn-primary h-11",children:[e.jsx(ba,{})," Share"]}),e.jsx("ul",{tabIndex:0,className:"dropdown-content mb-2 z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",children:e.jsx("li",{className:"flex items-center justify-center px-3 py-3",children:e.jsxs("button",{type:"button",tabIndex:-1,onClick:K,className:"flex flex-col items-center justify-center gap-2 text-center duration-100 hover:!bg-primary/10 focus:!bg-primary/10 active:scale-90",children:[e.jsx(Ke,{className:"text-xl text-primary"})," ",e.jsx("span",{className:"text-xs",children:L?"Copied":"Copy Link to Clipboard"})]})})})]}),e.jsx("button",{type:"submit",className:"min-h-0 normal-case btn btn-secondary h-11",children:$?e.jsxs(e.Fragment,{children:[e.jsx(Ze,{className:"animate-spin"})," Sending..."]}):e.jsxs(e.Fragment,{children:[e.jsx(De,{})," Send Email"]})})]})]})})},Ya=()=>{var Y,G,n,A,W,Z,f,d,me,ee,ae,te,re,se,ue,ie,xe,u;const{axiosInstance:E}=ye(),{filteredData:m}=Ce.useState(t=>t),{price:$,duration:O,baggage_summery:L,no_stop_summery:M,cabin_class:g,aircraft_names:C,departure:R,arrival:U,operating:Q,sorting:X,provider:z}=w.useState(t=>t),{site_title:J,login_required:P,system_config:k,component_version:y}=ve.useState(),[V]=ea(),F=V.get("tracking_id"),K=aa(),[p,h]=S.useState(!0),[N,I]=S.useState(null),{data:_=[]}=je(["AIRPORTS_DATA"],async()=>(await E.get("/tools/airport-autosuggetion-data")).data),{data:r,isLoading:a,error:i}=je(["SEARCH_RESULT",F],async()=>{var s,o,j;const t=await E.get(`/flight_logs?tracking_id=${F}&base_url=${k!=null&&k.supplier_logs_file_base_url?k==null?void 0:k.supplier_logs_file_base_url:""}&login_required=${P}`);if(!F)return K("/"),null;if(((s=t==null?void 0:t.data)==null?void 0:s.status)==="success")return pe.update(T=>{var B;T.modal.data=(B=t.data)==null?void 0:B.data[0]}),I((o=t.data)==null?void 0:o.message),t.data;throw{...t,message:((j=t.data)==null?void 0:j.reason)||"Request failed!"}});S.useEffect(()=>{if(!a){if(r){let t=[...r.data];t=t.filter(s=>s.filter.price>$.min_price&&s.filter.price<$.max_price||!$.min_price||!$.max_price),t=t.filter(s=>!(O!=null&&O.min_duration)||s.filter.journey.duration_seconds>O.min_duration&&s.filter.journey.duration_seconds<O.max_duration),t=t.filter(s=>Object.values(z).every(o=>o===!1)?!0:z[s.supplier.supplier_code]===!0),t=t.filter(s=>Object.values(L).every(o=>o===!1)?!0:L[s.filter.baggage_summery]===!0),t=t.filter(s=>Object.values(M).every(o=>o===!1)?!0:M[s.filter.no_stop_summery]===!0),t=t.filter(s=>{var o;return Object.values(R).every(j=>j.value===!1)?!0:((o=R[s.filter.departure_timing_slot])==null?void 0:o.value)===!0}),t=t.filter(s=>{var o;return Object.values(U).every(j=>j.value===!1)?!0:((o=U[s.filter.arrival_timing_slot])==null?void 0:o.value)===!0}),t=t.filter(s=>Object.values(Q).every(o=>o===!1)?!0:Q[s.filter.carrier_operating]===!0),t=t.filter(s=>Object.values(g).every(o=>o===!1)?!0:g[s.filter.cabin_class]===!0),t=t.filter(s=>Object.values(C).every(o=>o===!1)?!0:C[s.filter.aircraft_name]===!0),t=t.map(s=>{var j;return{...s,package_count:((j=[...t].filter(T=>(T==null?void 0:T.filter_unique_filter_code)===(s==null?void 0:s.filter_unique_filter_code)))==null?void 0:j.length)||1}}),t.sort((s,o)=>X.sortBy==="cheapest"?s.filter.price-o.filter.price:s.filter.journey.duration_seconds-o.filter.journey.duration_seconds),Ce.update(s=>{s.filteredData=t})}h(!1)}},[$,O,r,L,M,R,U,Q,X,C,g,a,z]),S.useEffect(()=>{var t;if(((t=r==null?void 0:r.data)==null?void 0:t.length)>0&&_.length>0){const{search_parameter:{journey_type:s,non_stop_flight:o,baggage_option:j,booking_class:T,segment:B,travelers_adult:he,travelers_child:le,travelers_child_age:fe,travelers_infants:ne,travelers_infants_age:D,preferred_carrier:Ae,supplier_uid:Te,fare_type:Ee,fare_corporate_code:ze,travelers_ptc:Ie,fare_option:Be}}=r.data[0],Me=window.location.origin,ge=_.reduce((x,v)=>(x[v.code]=v,x),{});$e.update(x=>{x.fare_type=Ee,x.fare_corporate_code=ze,x.travelers_ptc=Ie,x.fare_option=Be,x.journey_type=s,x.non_stop_flight=o,x.baggage_option=j,x.booking_class=T,x.travelers_adult=Number(he)||0,x.travelers_child=Number(le)||0,x.travelers_child_age=fe.slice(0,Number(le))||[],x.travelers_infants=Number(ne)||0,x.travelers_infants_age=(D==null?void 0:D.slice(0,Number(ne)))||[],B.forEach((v,oe)=>{x.segment[oe]={...v,departure_airport_type:v.departure_airport_type,departure_airport:v.departure_airport_type==="AIRPORT"?ge[v.departure_airport]:Object.values(ge).find(q=>q.city_code===v.departure_airport),arrival_airport_type:v.arrival_airport_type,arrival_airport:v.arrival_airport_type==="AIRPORT"?ge[v.arrival_airport]:Object.values(ge).find(q=>q.city_code===v.arrival_airport)}}),x.flight_count=B.length>2?B.length:2,x.supplier_uid=Te}),ta.get(`${Me}/airlines_list.json`).then(x=>{const v=Object.keys(x.data.data).map(oe=>{const{iata_code:q,airline_name:be}=x.data.data[oe];return{label:`${be} (${q})`,value:q}});$e.update(oe=>{oe.preferred_carrier=Ae.map(q=>v.find(be=>be.value===q))||[]})}),c(!1)}},[r,_]),ra.useMediaQuery({query:"(max-width: 640px)"});const[l,c]=S.useState(!1),{isActive:b}=_e.useState();if(i)throw i;return e.jsxs("main",{className:"container min-h-screen pt-20",children:[e.jsx(He,{children:e.jsxs("title",{children:["Flight Search",J?" - "+J:""]})}),!a&&(r!=null&&r.filter_data)?((Y=y==null?void 0:y.flight)==null?void 0:Y.search_box)==="2"?e.jsx(na,{}):((G=y==null?void 0:y.flight)==null?void 0:G.search_box)==="3"?e.jsx(oa,{}):e.jsx(ca,{}):e.jsx(ga,{}),((W=(A=(n=r==null?void 0:r.data)==null?void 0:n.at(0))==null?void 0:A.search_parameter)==null?void 0:W.journey_type)!=="MultiCity"&&((Z=r==null?void 0:r.data)==null?void 0:Z.length)>0&&e.jsx(da,{search_parameter:(f=r==null?void 0:r.data[0])==null?void 0:f.search_parameter}),!a&&(r==null?void 0:r.filter_data)&&N&&e.jsx("div",{className:"mb-4 overflow-hidden border rounded-md shadow bg-base-200 border-warning animate-pulse",children:e.jsxs("div",{className:"relative px-3 py-2 bg-warning/10",children:[e.jsxs("div",{className:"flex items-center gap-2 text-sm",children:[e.jsx("div",{className:"py-1 text-warning",children:e.jsx(ya,{className:"text-xl"})}),e.jsx("div",{children:e.jsx("p",{className:"text-xs font-normal",children:N})})]}),e.jsx("button",{onClick:()=>I(null),className:"absolute top-1 right-1 btn btn-ghost btn-circle btn-sm !bg-transparent",children:e.jsx(Ne,{})})]})}),e.jsxs("div",{className:"grid grid-cols-1 gap-4 mt-5 mb-5 lg:grid-cols-4",children:[!a&&(r==null?void 0:r.filter_data)&&e.jsx(Fe,{filterData:r.filter_data,additionalData:{date:(me=(d=r.data[0])==null?void 0:d.search_parameter)==null?void 0:me.departure_date[0],departure_from:(ae=(ee=r.data[0])==null?void 0:ee.search_parameter)==null?void 0:ae.departure_airport[0],arrival_to:(se=(re=(te=r.data[0])==null?void 0:te.search_parameter)==null?void 0:re.arrival_airport)==null?void 0:se.at(-1),total_fight:(m==null?void 0:m.length)||0,journey_type:(ie=(ue=r.data[0])==null?void 0:ue.search_parameter)==null?void 0:ie.journey_type,tracking_id:F,supplier_uid:(u=(xe=r.data[0])==null?void 0:xe.search_parameter)==null?void 0:u.supplier_uid}}),e.jsxs("section",{className:"lg:col-span-3",children:[!a&&(r!=null&&r.filter_data)?e.jsx(pa,{filterData:r.filter_data,currency:r==null?void 0:r.currency}):e.jsx("div",{className:"h-20 mb-5 skeleton-box"}),p?e.jsx(_a,{}):e.jsx(ma,{})]})]}),e.jsx("div",{className:ke("fixed bottom-0 left-0 right-0 bg-base-200 shadow-[0_-10px_15px_-3px_rgb(0_0_0_/_0.1),_0_-4px_6px_-4px_rgb(0_0_0_/_0.1)] duration-200 transition-all",b?"translate-y-0":"translate-y-full"),children:e.jsxs("div",{className:"container flex items-center justify-end gap-4 py-4",children:[e.jsxs("button",{onClick:()=>{Le("multiple_flight_share",m==null?void 0:m.at(0)),_e.update(t=>{t.isActive=!1})},className:"h-10 min-h-0 font-normal text-white normal-case rounded-md btn btn-warning",children:[e.jsx(sa,{})," Share"]}),e.jsxs("button",{onClick:()=>_e.update(t=>{t.isActive=!1}),className:"h-10 min-h-0 font-normal normal-case rounded-md hover:!text-white btn btn-warning btn-outline",children:[e.jsx(Re,{})," Cancel"]})]})}),e.jsx(Na,{})]})};export{Ya as default};
