import{R as p,e as R,u as z,o as r,l as G,P as H,Q as W}from"./index.js";import{c as X}from"./index.esm.js";import{U as Y,a as Z,r as $,cv as ee,L as te}from"./App.js";var T=function(n){return typeof n=="object"&&n!==null},ne=function(n){var D=n.value,y=D===void 0?"":D,v=n.numInputs,i=v===void 0?4:v,C=n.onChange,_=n.onPaste,O=n.renderInput,b=n.shouldAutoFocus,x=b===void 0?!1:b,S=n.inputType,I=S===void 0?"text":S,j=n.renderSeparator,m=n.placeholder,h=n.containerStyle,u=n.inputStyle,w=n.skipDefaultStyles,P=w===void 0?!1:w,f=p.useState(0),o=f[0],N=f[1],l=p.useRef([]),g=function(){return y?y.toString().split(""):[]},L=I==="number"||I==="tel";p.useEffect(function(){l.current=l.current.slice(0,i)},[i]),p.useEffect(function(){var e;x&&((e=l.current[0])===null||e===void 0||e.focus())},[x]);var M=function(){if(typeof m=="string"){if(m.length===i)return m;m.length>0&&console.error("Length of the placeholder should be equal to the number of inputs.")}},E=function(e){var t=L?!isNaN(Number(e)):typeof e=="string";return t&&e.trim().length===1},V=function(e){var t=e.target.value;E(t)&&(k(t),d(o+1))},B=function(e){var t=e.nativeEvent,a=e.target.value;if(!E(a)){if(a.length===i){var s=a.split("").some(function(c){return!E(c)});s||(F(a.split("")),d(i-1))}t.data===null&&t.inputType==="deleteContentBackward"&&(e.preventDefault(),k(""),d(o-1)),e.target.value=""}},q=function(e){return function(t){N(t),e.target.select()}},K=function(){N(o-1)},Q=function(e){var t=g();[e.code,e.key].includes("Backspace")?(e.preventDefault(),k(""),d(o-1)):e.code==="Delete"?(e.preventDefault(),k("")):e.code==="ArrowLeft"?(e.preventDefault(),d(o-1)):e.code==="ArrowRight"||e.key===t[o]?(e.preventDefault(),d(o+1)):(e.code==="Spacebar"||e.code==="Space"||e.code==="ArrowUp"||e.code==="ArrowDown")&&e.preventDefault()},d=function(e){var t,a,s=Math.max(Math.min(i-1,e),0);l.current[s]&&((t=l.current[s])===null||t===void 0||t.focus(),(a=l.current[s])===null||a===void 0||a.select(),N(s))},k=function(e){var t=g();t[o]=e[0],F(t)},F=function(e){var t=e.join("");C(t)},U=function(e){var t;e.preventDefault();var a=g(),s=o,c=e.clipboardData.getData("text/plain").slice(0,i-o).split("");if(!(L&&c.some(function(J){return isNaN(Number(J))}))){for(var A=0;A<i;++A)A>=o&&c.length>0&&(a[A]=(t=c.shift())!==null&&t!==void 0?t:"",s++);d(s),F(a)}};return p.createElement("div",{style:Object.assign({display:"flex",alignItems:"center"},T(h)&&h),className:typeof h=="string"?h:void 0,onPaste:_},Array.from({length:i},function(e,t){return t}).map(function(e){var t,a,s;return p.createElement(p.Fragment,{key:e},O({value:(t=g()[e])!==null&&t!==void 0?t:"",placeholder:(s=(a=M())===null||a===void 0?void 0:a[e])!==null&&s!==void 0?s:void 0,ref:function(c){return l.current[e]=c},onChange:V,onFocus:function(c){return q(c)(e)},onBlur:K,onKeyDown:Q,onPaste:U,autoComplete:"off","aria-label":"Please enter OTP character ".concat(e+1),style:Object.assign(P?{}:{width:"1em",textAlign:"center"},T(u)?u:{}),className:typeof u=="string"?u:void 0,type:I,inputMode:L?"numeric":"text",onInput:B},e),e<i-1&&(typeof j=="function"?j(e):j))}))};const se=({redirectTo:n=null})=>{const[D,y]=R.useState(!1),[v,i]=R.useState(""),[C,_]=R.useState(!1),{state:O}=Y(),{email:b,password:x,member_id:S}=O||{},{axiosInstance:I}=Z(),j=z(),m=$();if(!b||!x||!S)return r.jsx(ee,{to:"/login",from:{redirectTo:n}});const h=async u=>{var w,P;if(u.preventDefault(),!!v){y(!0);try{const f=await I.post("/user/secure-login-otp",{email:b,password:x,member_id:S,otp:v,save_device:C?"yes":"no"});if(((w=f.data)==null?void 0:w.status)==="success"){const{login_key:o,member_id:N,token:l}=f.data;localStorage.setItem("user_info",JSON.stringify({login_key:o,member_id:N,token:l})),G.update(g=>{g.token=l}),j.invalidateQueries({queryKey:["USER_INFO"]}),H(),n&&m(n)}else throw new Error(((P=f.data)==null?void 0:P.reason)||"Something wrong!")}catch(f){W("error","Failed!",f.message)}finally{y(!1)}}};return D?r.jsx(te,{}):r.jsxs("form",{onSubmit:h,children:[r.jsx("p",{className:"mb-8 text-sm text-center text-neutral/80",children:"Please enter the OTP, sent to your email"}),r.jsxs("div",{className:"flex flex-col w-full gap-y-4",children:[r.jsx("div",{className:"flex items-center justify-center mb-3",children:r.jsx(ne,{value:v,onChange:i,numInputs:5,renderSeparator:r.jsx("span",{}),renderInput:u=>r.jsx("input",{...u,className:"!w-12 rounded input input-bordered !outline-0 bg-transparent mx-1"})})}),r.jsx("div",{className:"flex justify-between",children:r.jsxs("label",{className:"flex items-center gap-2 cursor-pointer text-neutral",children:[r.jsx("input",{type:"checkbox",className:"toggle border-primary bg-primary",checked:C,onChange:u=>_(u.target.checked)}),r.jsx("span",{children:"Save device"})]})}),r.jsxs("button",{type:"submit",className:"h-10 min-h-0 font-normal normal-case transition-all duration-300 rounded-full shadow-lg btn btn-primary shadow-primary/50 hover:shadow-none",children:["Log In ",r.jsx(X,{})]})]})]})};export{se as L};