import{aG as h,r as a,ck as x}from"./index.js";function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function L(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function F(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function R(e){var t=F(e,"string");return typeof t=="symbol"?t:String(t)}const E={NOT_LOADED:"NOT_LOADED",LOADING:"LOADING",LOADED:"LOADED",FAILED:"FAILED",AUTH_FAILURE:"AUTH_FAILURE"},j="https://maps.googleapis.com/maps/api/js";class I{static async load(t,n){var r;const i=t.libraries?t.libraries.split(","):[],o=this.serializeParams(t);(r=window.google)!=null&&(r=r.maps)!=null&&r.importLibrary?(this.serializedApiParams||(this.loadingStatus=E.LOADED),n(this.loadingStatus)):(this.serializedApiParams=o,this.initImportLibrary(t,n)),this.serializedApiParams&&this.serializedApiParams!==o&&console.warn("The maps API has already been loaded with different parameters and will not be loaded again. Refresh the page for new values to have effect.");for(const l of["maps",...i])await google.maps.importLibrary(l)}static serializeParams(t){return[t.v,t.key,t.language,t.region,t.authReferrerPolicy,t.solutionChannel].join("/")}static initImportLibrary(t,n){if(window.google||(window.google={}),window.google.maps||(window.google.maps={}),window.google.maps.importLibrary){console.warn("initImportLibrary can only be called once.",t);return}let r=null;const i=o=>r||(r=new Promise((l,c)=>{var d;const u=document.createElement("script"),s=new URLSearchParams;for(const[g,p]of Object.entries(t)){const m=g.replace(/[A-Z]/g,f=>"_"+f[0].toLowerCase());s.set(m,p)}s.set("libraries",o),s.set("loading","async"),s.set("callback","__googleMapsCallback__"),u.async=!0,u.src=j+"?"+s.toString(),window.__googleMapsCallback__=()=>{this.loadingStatus=E.LOADED,n(this.loadingStatus),l()},window.gm_authFailure=()=>{this.loadingStatus=E.AUTH_FAILURE,n(this.loadingStatus)},u.onerror=()=>{this.loadingStatus=E.FAILED,n(this.loadingStatus),c(new Error("The Google Maps JavaScript API could not load."))},u.nonce=((d=document.querySelector("script[nonce]"))==null?void 0:d.nonce)||"",this.loadingStatus=E.LOADING,n(this.loadingStatus),document.head.append(u)}),r);google.maps.importLibrary=o=>i(o).then(()=>google.maps.importLibrary(o))}}I.loadingStatus=E.NOT_LOADED;I.serializedApiParams=void 0;const U=["onLoad","apiKey","version","libraries"],G=["children"],C=h.createContext(null);function B(){const[e,t]=a.useState({});return{mapInstances:e,addMapInstance:(o,l="default")=>{t(c=>y({},c,{[l]:o}))},removeMapInstance:(o="default")=>{t(l=>L(l,[o].map(R)))},clearMapInstances:()=>{t({})}}}function H(e){const{onLoad:t,apiKey:n,version:r,libraries:i=[]}=e,o=L(e,U),[l,c]=a.useState(I.loadingStatus),[d,u]=a.useReducer((m,f)=>y({},m,{[f.name]:f.value}),{}),s=a.useMemo(()=>i==null?void 0:i.join(","),[i]),g=a.useMemo(()=>JSON.stringify(y({apiKey:n,version:r},o)),[n,r,o]),p=a.useCallback(async m=>{var f;if(d[m])return d[m];if(!((f=google)!=null&&(f=f.maps)!=null&&f.importLibrary))throw new Error("[api-provider-internal] importLibrary was called before google.maps.importLibrary was defined.");const v=await window.google.maps.importLibrary(m);return u({name:m,value:v}),v},[d]);return a.useEffect(()=>{(async()=>{try{const m=y({key:n},o);r&&(m.v=r),(s==null?void 0:s.length)>0&&(m.libraries=s),await I.load(m,f=>c(f));for(const f of["core","maps",...i])await p(f);t&&t()}catch(m){console.error("<ApiProvider> failed to load Google Maps API",m)}})()},[n,s,g]),{status:l,loadedLibraries:d,importLibrary:p}}const me=e=>{const{children:t}=e,n=L(e,G),{mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:l}=B(),{status:c,loadedLibraries:d,importLibrary:u}=H(n);return h.createElement(C.Provider,{value:{mapInstances:r,addMapInstance:i,removeMapInstance:o,clearMapInstances:l,status:c,loadedLibraries:d,importLibrary:u}},t)};function S(){var e;return((e=a.useContext(C))==null?void 0:e.status)||E.NOT_LOADED}function N(){return S()===E.LOADED}const D=new Set;function k(...e){const t=JSON.stringify(e);D.has(t)||(D.add(t),console.error(...e))}function $(){const[e,t]=a.useState(null),n=a.useCallback(r=>t(r),[t]);return[e,n]}function J(){return a.useRef({center:{lat:0,lng:0},heading:0,tilt:0,zoom:0})}function W(e,t){const n=e;if(!n.detail.center)return;const{center:r,zoom:i,heading:o,tilt:l}=n.detail;t.current.center=r,t.current.heading=o,t.current.tilt=l,t.current.zoom=i}function K(e,t,n){for(const r of Y){const i=n[r],o=z[r];a.useEffect(()=>{if(!e||!i)return;const l=google.maps.event.addListener(e,o,c=>{const d=Z(o,e,c);W(d,t),i(d)});return()=>l.remove()},[e,t,o,i])}}function Z(e,t,n){const r={type:e,map:t,detail:{},stoppable:!1,stop:()=>{}};if(q.includes(e)){const o=r,l=t.getCenter(),c=t.getZoom(),d=t.getHeading()||0,u=t.getTilt()||0,s=t.getBounds();return(!l||!s||!Number.isFinite(c))&&console.warn("[createEvent] at least one of the values from the map returned undefined. This is not expected to happen. Please report an issue at https://github.com/visgl/react-google-maps/issues/new"),o.detail={center:(l==null?void 0:l.toJSON())||{lat:0,lng:0},zoom:c,heading:d,tilt:u,bounds:(s==null?void 0:s.toJSON())||{north:90,east:180,south:-90,west:-180}},o}else if(V.includes(e)){var i;if(!n)throw new Error("[createEvent] mouse events must provide a srcEvent");const o=r;return o.domEvent=n.domEvent,o.stoppable=!0,o.stop=()=>n.stop(),o.detail={latLng:((i=n.latLng)==null?void 0:i.toJSON())||null,placeId:n.placeId},o}return r}const z={onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onContextmenu:"contextmenu",onDblclick:"dblclick",onDrag:"drag",onDragend:"dragend",onDragstart:"dragstart",onHeadingChanged:"heading_changed",onIdle:"idle",onIsFractionalZoomEnabledChanged:"isfractionalzoomenabled_changed",onMapCapabilitiesChanged:"mapcapabilities_changed",onMapTypeIdChanged:"maptypeid_changed",onMousemove:"mousemove",onMouseout:"mouseout",onMouseover:"mouseover",onProjectionChanged:"projection_changed",onRenderingTypeChanged:"renderingtype_changed",onTilesLoaded:"tilesloaded",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed"},q=["bounds_changed","center_changed","heading_changed","projection_changed","tilt_changed","zoom_changed"],V=["click","contextmenu","dblclick","mousemove","mouseout","mouseover"],Y=Object.keys(z);function Q(e){return!e||typeof e!="object"||!("lat"in e&&"lng"in e)?!1:Number.isFinite(e.lat)&&Number.isFinite(e.lng)}const X=["center","zoom","heading","tilt"],ee=["mapId"];function ne(e,t,n){const{center:r,zoom:i,heading:o,tilt:l}=n,c=L(n,X),d=r?Q(r)?r:r.toJSON():null,u=d&&d.lat,s=d&&d.lng;a.useEffect(()=>{if(!e)return;const g=L(c,ee);e.setOptions(g)},[c]),a.useLayoutEffect(()=>{!e||!Number.isFinite(u)||!Number.isFinite(s)||t.current.center.lat===u&&t.current.center.lng===s||e.moveCamera({center:{lat:u,lng:s}})},[u,s]),a.useLayoutEffect(()=>{!e||!Number.isFinite(i)||t.current.zoom!==i&&e.moveCamera({zoom:i})},[i]),a.useLayoutEffect(()=>{!e||!Number.isFinite(o)||t.current.heading!==o&&e.moveCamera({heading:o})},[o]),a.useLayoutEffect(()=>{!e||!Number.isFinite(l)||t.current.tilt!==l&&e.moveCamera({tilt:l})},[l])}function te(e,t){a.useLayoutEffect(()=>{if(!e||!t)return;e.setOptions({gestureHandling:"none",keyboardShortcuts:!1,disableDefaultUI:!0});const{latitude:n,longitude:r,bearing:i,pitch:o,zoom:l}=t;e.moveCamera({center:{lat:n,lng:r},heading:i,tilt:o,zoom:l+1})},[e,t])}const re=["id","initialBounds"],M=h.createContext(null),oe=e=>{const{children:t,id:n,className:r,style:i,viewState:o,viewport:l}=e,c=a.useContext(C),d=S();if(!c)throw new Error("<Map> can only be used inside an <ApiProvider> component.");const[u,s]=ie(e,c),g=J();ne(u,g,e),K(u,g,e),te(u,o);const p=a.useMemo(()=>!!l,[l]),m=a.useMemo(()=>y({width:"100%",height:"100%",zIndex:p?-1:0},i),[i,p]);return d===E.AUTH_FAILURE?h.createElement("div",{style:y({position:"relative"},r?{}:m),className:r},h.createElement(ae,null)):h.createElement("div",y({ref:s,"data-testid":"map",style:r?void 0:m,className:r},n?{id:n}:{}),u?h.createElement(M.Provider,{value:{map:u}},t):null)};oe.deckGLViewProps=!0;const ae=()=>{const e={position:"absolute",top:0,left:0,bottom:0,right:0,zIndex:999,display:"flex",flexFlow:"column nowrap",textAlign:"center",justifyContent:"center",fontSize:".8rem",color:"rgba(0,0,0,0.6)",background:"#dddddd",padding:"1rem 1.5rem"};return h.createElement("div",{style:e},h.createElement("h2",null,"Error: AuthFailure"),h.createElement("p",null,"A problem with your API key prevents the map from rendering correctly. Please make sure the value of the ",h.createElement("code",null,"APIProvider.apiKey")," prop is correct. Check the error-message in the console for further details."))};function ie(e,t){const n=N(),[r,i]=a.useState(null),[o,l]=$(),{id:c,initialBounds:d}=e,u=L(e,re);return a.useEffect(()=>{if(!o||!n)return;const{addMapInstance:s,removeMapInstance:g}=t,p=new google.maps.Map(o,u);return i(p),s(p,c),d&&p.fitBounds(d),()=>{!o||!n||(google.maps.event.clearInstanceListeners(p),i(null),g(c))}},[c,o,n,e.mapId]),a.useEffect(()=>{if(!c)return;const{mapInstances:s}=t;s[c]&&s[c]!==r&&k(`The map id '${c}' seems to have been used multiple times. This can lead to unexpected problems when accessing the maps. Please use unique ids for all <Map> components.`)},[c,t,r]),[r,l]}function se(e){const t=N(),n=a.useContext(C);return a.useEffect(()=>{!t||!n||n.importLibrary(e)},[t,n,e]),(n==null?void 0:n.loadedLibraries[e])||null}const T=h.createContext(null);function le(e){var t;const[n,r]=a.useState(null),[i,o]=a.useState(null),l=(t=a.useContext(M))==null?void 0:t.map,c=se("marker"),{children:d,className:u,onClick:s,onDrag:g,onDragStart:p,onDragEnd:m,collisionBehavior:f,draggable:v,position:P,title:A,zIndex:_}=e,O=a.Children.count(d);return a.useEffect(()=>{if(!l||!c)return;const b=new c.AdvancedMarkerElement;if(b.map=l,r(b),O>0){const w=document.createElement("div");u&&(w.className=u),b.content=w,o(w)}return()=>{b.map=null,r(null),o(null)}},[l,c,O]),a.useEffect(()=>{i&&(i.className=u??"")},[i,u]),a.useEffect(()=>{if(!n)return;const b=google.maps.event;s&&b.addListener(n,"click",s),g&&b.addListener(n,"drag",g),p&&b.addListener(n,"dragstart",p),m&&b.addListener(n,"dragend",m),(g||p||m)&&!v&&console.warn("You need to set the marker to draggable to listen to drag-events.");const w=n;return()=>{b.clearInstanceListeners(w)}},[n,v,s,p,g,m]),a.useEffect(()=>{n&&(P!==void 0&&(n.position=P),v!==void 0&&(n.gmpDraggable=v),f!==void 0&&(n.collisionBehavior=f),_!==void 0&&(n.zIndex=_),typeof A=="string"&&(n.title=A))},[n,P,v,f,_,A]),[n,i]}const ge=a.forwardRef((e,t)=>{const{children:n}=e,[r,i]=le(e);return a.useImperativeHandle(t,()=>r,[r]),r?h.createElement(T.Provider,{value:{marker:r}},i!==null&&x.createPortal(n,i)):null});function pe(){const[e,t]=a.useState(null);return[a.useCallback(r=>{t(r)},[]),e]}const ce=["children","anchor","onCloseClick"],he=e=>{var t;const{children:n,anchor:r,onCloseClick:i}=e,o=L(e,ce),l=(t=a.useContext(M))==null?void 0:t.map,c=a.useRef(null),[d,u]=a.useState(null);return a.useEffect(()=>{if(!l)return;const s=new google.maps.InfoWindow(o),g=document.createElement("div");return s.setContent(g),c.current=s,u(g),()=>{google.maps.event.clearInstanceListeners(s),s.close(),g.remove(),u(null)}},[l,n]),a.useEffect(()=>{var s;(s=c.current)==null||s.setOptions(o)},[o]),a.useEffect(()=>{if(!c.current)return;let s=null;return i&&(s=google.maps.event.addListener(c.current,"closeclick",i)),()=>{s&&s.remove()}},[i]),a.useEffect(()=>{if(!d||!c.current||r===null)return;const s={map:l};r&&(s.anchor=r),c.current.open(s)},[d,c,r,l]),h.createElement(h.Fragment,null,d!==null&&x.createPortal(n,d))},ve=(e=null)=>{const t=a.useContext(C),{map:n}=a.useContext(M)||{};if(t===null)return k("useMap(): failed to retrieve APIProviderContext. Make sure that the <APIProvider> component exists and that the component you are calling `useMap()` from is a sibling of the <APIProvider>."),null;const{mapInstances:r}=t;return e!==null?r[e]||null:n||r.default||null},ue=["onClick","onDrag","onDragStart","onDragEnd","onMouseOver","onMouseOut"];function de(e){var t;const[n,r]=a.useState(null),i=(t=a.useContext(M))==null?void 0:t.map,{onClick:o,onDrag:l,onDragStart:c,onDragEnd:d,onMouseOver:u,onMouseOut:s}=e,g=L(e,ue),{position:p,draggable:m}=g;return a.useEffect(()=>{if(!i){i===void 0&&console.error("<Marker> has to be inside a Map component.");return}const f=new google.maps.Marker(g);return f.setMap(i),r(f),()=>{f.setMap(null),r(null)}},[i]),a.useEffect(()=>{if(!n)return;const f=n,v=google.maps.event;return o&&v.addListener(f,"click",o),l&&v.addListener(f,"drag",l),c&&v.addListener(f,"dragstart",c),d&&v.addListener(f,"dragend",d),u&&v.addListener(f,"mouseover",u),s&&v.addListener(f,"mouseout",s),n.setDraggable(!!m),()=>{v.clearInstanceListeners(f)}},[n,m,o,l,c,d,u,s]),a.useEffect(()=>{n&&g&&n.setOptions(g)},[n,g]),a.useEffect(()=>{m||!p||!n||n.setPosition(p)},[m,p,n]),n}a.forwardRef((e,t)=>{const n=de(e);return a.useImperativeHandle(t,()=>n,[n]),h.createElement(h.Fragment,null)});const be=e=>{var t;const n=(t=a.useContext(T))==null?void 0:t.marker,r=a.useMemo(()=>document.createElement("div"),[]);return a.useEffect(()=>{if(!n){n===void 0&&console.error("The <Pin> component can only be used inside <AdvancedMarker>.");return}e.glyph&&e.children&&k("The <Pin> component only uses children to render the glyph if both the glyph property and children are present."),a.Children.count(e.children)>1&&k("Passing multiple children to the <Pin> component might lead to unexpected results.");const i=y({},e),o=new google.maps.marker.PinElement(i);e.children&&(o.glyph=r),n.content=o.element},[n,r,e]),x.createPortal(e.children,r)};export{ge as A,he as I,oe as M,be as P,me as a,pe as b,ve as u};
