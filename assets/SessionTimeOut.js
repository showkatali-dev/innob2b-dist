import{e as n,o as e}from"./index.js";import{P as a}from"./App.js";const d=({session_expire:l,action:t})=>{const{datetime:o,timestamp:c}=l,[s,i]=n.useState(c-Date.now()/1e3);return n.useEffect(()=>{const m=()=>{i(null),t(!0)},r=setInterval(()=>{i(x=>x-1),s<=0&&(clearInterval(r),m())},1e3);return()=>{clearInterval(r)}},[s,t]),e.jsxs("div",{className:"mb-3 overflow-hidden text-sm rounded-lg session-timeout",children:[e.jsx("h6",{className:"p-1 font-semibold text-center bg-base-300",children:"Session Timeout in"}),e.jsx("div",{className:"p-1 bg-primary/10",children:e.jsx("div",{className:"flex justify-center gap-4 mx-auto text-center",children:s?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"time",children:[e.jsx("h5",{className:"text-2xl font-semibold text-primary",children:Math.floor(s/60)}),e.jsx("p",{children:"min"})]}),e.jsx("div",{className:"time",children:e.jsx("h5",{className:"text-2xl font-semibold text-primary",children:":"})}),e.jsxs("div",{className:"time",children:[e.jsx("h5",{id:"timeout_sec",className:"text-2xl font-semibold text-primary",children:Math.floor(s%60)}),e.jsx("p",{children:"sec"})]})]}):e.jsx("h5",{className:"text-2xl font-semibold text-primary",children:"Expired"})})}),e.jsx("p",{className:"p-1 text-center text-neutral bg-base-300",children:o})]})};d.propTypes={session_expire:a.object.isRequired,action:a.func};export{d as S};
