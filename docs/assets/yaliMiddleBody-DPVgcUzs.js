import"./base-sxyP_R98.js";import{b as I}from"./Index-CdlF-dbX.js";/* empty css                 */import{f as C,X as $,a7 as N,Y as D,q,D as k,w as j,l as w,b as R,v as Z,T as G,O,a0 as F,C as Q,K,a8 as Y,_ as H,j as X,o as J,g as U,a as _}from"./index-DKGOroms.js";import{E as W}from"./index-Dolsta80.js";import{u as ee}from"./base-DxwXKsdW.js";import{i as A,L as P}from"./index-UhZta3NQ.js";import{A as te,r as z,c as ae,g as S,d as V}from"./index-qaiCiQ--.js";function oe(t){let e;const o=C(!1),a=$({...t,originalPosition:"",originalOverflow:"",visible:!1});function c(s){a.text=s}function l(){const s=a.parent,d=n.ns;if(!s.vLoadingAddClassList){let f=s.getAttribute("loading-number");f=Number.parseInt(f)-1,f?s.setAttribute("loading-number",f.toString()):(z(s,d.bm("parent","relative")),s.removeAttribute("loading-number")),z(s,d.bm("parent","hidden"))}v(),u.unmount()}function v(){var s,d;(d=(s=n.$el)==null?void 0:s.parentNode)==null||d.removeChild(n.$el)}function p(){var s;t.beforeClose&&!t.beforeClose()||(o.value=!0,clearTimeout(e),e=window.setTimeout(h,400),a.visible=!1,(s=t.closed)==null||s.call(t))}function h(){if(!o.value)return;const s=a.parent;o.value=!1,s.vLoadingAddClassList=void 0,l()}const r=q({name:"ElLoading",setup(s,{expose:d}){const{ns:f,zIndex:y}=te("loading");return d({ns:f,zIndex:y}),()=>{const b=a.spinner||a.svg,x=k("svg",{class:"circular",viewBox:a.svgViewBox?a.svgViewBox:"0 0 50 50",...b?{innerHTML:b}:{}},[k("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),m=a.text?k("p",{class:f.b("text")},[a.text]):void 0;return k(G,{name:f.b("fade"),onAfterLeave:h},{default:j(()=>[w(R("div",{style:{backgroundColor:a.background||""},class:[f.b("mask"),a.customClass,a.fullscreen?"is-fullscreen":""]},[k("div",{class:f.b("spinner")},[x,m])]),[[Z,a.visible]])])})}}}),u=N(r),n=u.mount(document.createElement("div"));return{...D(a),setText:c,removeElLoadingChild:v,close:p,handleAfterLeave:h,vm:n,get $el(){return n.$el}}}let L;const se=function(t={}){if(!ae)return;const e=le(t);if(e.fullscreen&&L)return L;const o=oe({...e,closed:()=>{var c;(c=e.closed)==null||c.call(e),e.fullscreen&&(L=void 0)}});re(e,e.parent,o),E(e,e.parent,o),e.parent.vLoadingAddClassList=()=>E(e,e.parent,o);let a=e.parent.getAttribute("loading-number");return a?a=`${Number.parseInt(a)+1}`:a="1",e.parent.setAttribute("loading-number",a),e.parent.appendChild(o.$el),O(()=>o.visible.value=e.visible),e.fullscreen&&(L=o),o},le=t=>{var e,o,a,c;let l;return F(t.target)?l=(e=document.querySelector(t.target))!=null?e:document.body:l=t.target||document.body,{parent:l===document.body||t.body?document.body:l,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:l===document.body&&((o=t.fullscreen)!=null?o:!0),lock:(a=t.lock)!=null?a:!1,customClass:t.customClass||"",visible:(c=t.visible)!=null?c:!0,target:l}},re=async(t,e,o)=>{const{nextZIndex:a}=o.vm.zIndex||o.vm._.exposed.zIndex,c={};if(t.fullscreen)o.originalPosition.value=S(document.body,"position"),o.originalOverflow.value=S(document.body,"overflow"),c.zIndex=a();else if(t.parent===document.body){o.originalPosition.value=S(document.body,"position"),await O();for(const l of["top","left"]){const v=l==="top"?"scrollTop":"scrollLeft";c[l]=`${t.target.getBoundingClientRect()[l]+document.body[v]+document.documentElement[v]-Number.parseInt(S(document.body,`margin-${l}`),10)}px`}for(const l of["height","width"])c[l]=`${t.target.getBoundingClientRect()[l]}px`}else o.originalPosition.value=S(e,"position");for(const[l,v]of Object.entries(c))o.$el.style[l]=v},E=(t,e,o)=>{const a=o.vm.ns||o.vm._.exposed.ns;["absolute","fixed","sticky"].includes(o.originalPosition.value)?z(e,a.bm("parent","relative")):V(e,a.bm("parent","relative")),t.fullscreen&&t.lock?V(e,a.bm("parent","hidden")):z(e,a.bm("parent","hidden"))},B=Symbol("ElLoading"),M=(t,e)=>{var o,a,c,l;const v=e.instance,p=s=>Q(e.value)?e.value[s]:void 0,h=s=>{const d=F(s)&&(v==null?void 0:v[s])||s;return d&&C(d)},r=s=>h(p(s)||t.getAttribute(`element-loading-${Y(s)}`)),u=(o=p("fullscreen"))!=null?o:e.modifiers.fullscreen,n={text:r("text"),svg:r("svg"),svgViewBox:r("svgViewBox"),spinner:r("spinner"),background:r("background"),customClass:r("customClass"),fullscreen:u,target:(a=p("target"))!=null?a:u?void 0:t,body:(c=p("body"))!=null?c:e.modifiers.body,lock:(l=p("lock"))!=null?l:e.modifiers.lock};t[B]={options:n,instance:se(n)}},ne=(t,e)=>{for(const o of Object.keys(e))K(e[o])&&(e[o].value=t[o])},ie={mounted(t,e){e.value&&M(t,e)},updated(t,e){const o=t[B];e.oldValue!==e.value&&(e.value&&!e.oldValue?M(t,e):e.value&&e.oldValue?Q(e.value)&&ne(e.value,o.options):o==null||o.instance.close())},unmounted(t){var e;(e=t[B])==null||e.instance.close(),t[B]=null}},T=t=>{const e={distance:t.distance,diameter:t.diameter,k:0,b:0};switch(t.distance+t.diameter){case 164:e.k=27.32,e.b=.26;break;case 166:e.k=31.284,e.b=.2983;break;case 168:e.k=49.713,e.b=.6157;break;case 172:e.k=108.45,e.b=2.088;break;case 204:e.k=23.965,e.b=.3526;break;case 206:e.k=30.091,e.b=.3697;break;case 208:e.k=41.976,e.b=.5744;break;case 210:e.k=54.93,e.b=.8853;break;case 212:e.k=82.883,e.b=1.5553;break;case 244:e.k=16.283,e.b=.1952;break;case 246:e.k=27.403,e.b=.4438;break;case 248:e.k=36.023,e.b=.5435;break;case 250:e.k=48.444,e.b=.8412;break;case 252:e.k=71.05,e.b=1.007;break;case 284:e.k=16.04,e.b=.2652;break;case 286:e.k=22.279,e.b=.4185;break;case 288:e.k=33.442,e.b=.6311;break;case 290:e.k=46.06,e.b=.985;break;default:W.error("仪器规格错误,请重新选择");return}return e},ce={class:"body"},ue={class:"echarts",id:"echartBoxQt"},de={class:"echarts",id:"echartBoxSt"},me={class:"echarts",id:"echartBoxQS"},be={class:"echarts",id:"echartBoxqS"},fe={__name:"yaliMiddleBody",setup(t,{expose:e}){const o=ee(),a=C({}),c=C(!1);X(()=>{I.on("InstrumentData",r=>{a.value=T(r)}),I.on("getBaseFig",()=>{a.value=T(o.parameter),l()}),o.testData.length>0&&(a.value=T(o.parameter),l())});const l=()=>{c.value=!0;const r=o.testData.map(s=>s.P1),u=o.testData.map(s=>s.P2),n=o.testData.map(s=>s.t);v(r,u,n),p(r,u,n),h(r,u),setTimeout(()=>{c.value=!1},200)},v=(r,u,n)=>{window.onresize=function(){d.resize()};const s=document.getElementById("echartBoxQt"),d=A(s),y=r.map((b,x)=>Math.sqrt(Math.abs(b-u[x]))).map(b=>a.value.k*b-a.value.b);d.setOption({title:{text:"Q-t曲线图",textStyle:{color:"black",fontSize:20},top:3},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},toolbox:{show:!0,top:28,right:20,feature:{dataZoom:{show:!0},dataView:{readOnly:!1},magicType:{type:["line","bar"]},saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",top:"16%",containLabel:!0},xAxis:{interval:24,axisLine:{show:!0,linestyle:{color:"black"}},axisTick:{show:!1},axisLabel:{formatter:b=>b+"时",textStyle:{color:"black",fontSize:14}}},yAxis:{type:"value",name:"流量/(m³/h)",nameLocation:"end",nameTextStyle:{fontSize:14},axisLine:{show:!0,linestyle:{color:"black"}},axisTick:{show:!1},axisLabel:{formatter:b=>b?b.toFixed(1):0,textStyle:{color:"black",fontSize:14}}},series:[{name:"流量：",data:y.map((b,x)=>[n[x].toFixed(0),b.toFixed(2)]),type:"line",showSymbol:!0,symbolSize:6,smooth:!0,areaStyle:{opacity:.8,color:new P(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])}}]})},p=(r,u,n)=>{window.onresize=function(){d.resize()};const s=document.getElementById("echartBoxSt"),d=A(s),y=r.map((i,g)=>Math.sqrt(Math.abs(i-u[g]))).map(i=>a.value.k*i-a.value.b),b=Math.pow(a.value.diameter/2e3,2)*Math.PI,m=y.map(i=>i/b/3600).map((i,g)=>i**2/19.6+(r[g]+u[g])/.0098);o.St=m.map((i,g)=>[i,n[g],y[g]]),d.setOption({title:{text:"S-t曲线图",textStyle:{color:"black",fontSize:20},top:3},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},toolbox:{show:!0,top:28,right:20,feature:{dataZoom:{show:!0},dataView:{readOnly:!1},magicType:{type:["line","bar"]},saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",top:"16%",containLabel:!0},xAxis:{interval:24,axisLine:{show:!0,linestyle:{color:"black"}},axisTick:{show:!1},axisLabel:{formatter:i=>i+"时",textStyle:{color:"black",fontSize:14}}},yAxis:{type:"value",name:"降升/m",nameLocation:"end",nameTextStyle:{fontSize:14},axisLine:{show:!0,linestyle:{color:"black"}},axisTick:{show:!1},axisLabel:{formatter:i=>i?i.toFixed(1):0,textStyle:{color:"black",fontSize:14}}},series:[{name:"流量：",data:m.map((i,g)=>[n[g].toFixed(0),i.toFixed(2)]),type:"line",showSymbol:!0,symbolSize:6,smooth:!0,areaStyle:{opacity:.8,color:new P(0,0,0,1,[{offset:0,color:"rgb(128, 255, 165)"},{offset:1,color:"rgb(1, 191, 236)"}])}}]})},h=(r,u)=>{window.onresize=function(){s.resize()};const n=document.getElementById("echartBoxQS"),s=A(n),f=r.map((m,i)=>Math.sqrt(Math.abs(m-u[i]))).map(m=>a.value.k*m-a.value.b),y=Math.pow(a.value.diameter/2e3,2)*Math.PI,x=f.map(m=>m/y/3600).map((m,i)=>m**2/19.6+(r[i]+u[i])/.0098);console.log(x),s.setOption({title:{text:"Q-S散点图",textStyle:{color:"black",fontSize:20},top:3},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},toolbox:{show:!0,top:28,right:20,feature:{dataZoom:{show:!0},dataView:{readOnly:!1},saveAsImage:{}}},grid:{left:"3%",right:"3%",bottom:"3%",top:"16%",containLabel:!0},xAxis:{axisTick:{show:!1},axisLabel:{textStyle:{color:"black",fontSize:14}}},yAxis:{type:"value",nameLocation:"end",nameTextStyle:{fontSize:14},axisLine:{show:!0,linestyle:{color:"black"}},axisTick:{show:!1},axisLabel:{formatter:m=>m?m.toFixed(1):0,textStyle:{color:"black",fontSize:14}}},series:[{data:x.map((m,i)=>[m.toFixed(2),f[i].toFixed(2)]),type:"scatter",showSymbol:!0,symbolSize:10,smooth:!0}]})};return e({getEcharts:l}),(r,u)=>{const n=ie;return J(),U("div",ce,[w(_("div",ue,null,512),[[n,c.value]]),w(_("div",de,null,512),[[n,c.value]]),w(_("div",me,null,512),[[n,c.value]]),w(_("div",be,null,512),[[n,c.value]])])}}},we=H(fe,[["__scopeId","data-v-dc10caa1"]]);export{we as default};