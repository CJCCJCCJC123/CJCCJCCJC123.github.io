import{b as le,d as oe,u as ne,_ as ie,w as se}from"./base-sxyP_R98.js";import{E as ue}from"./el-empty-L946cLz2.js";import{b as re,a as de,E as ce}from"./el-form-item-B9kUlWqR.js";import{_ as ve}from"./myText-CZnWv_7_.js";import{e as me,U as q,C as H,I as Q,b as pe,u as fe,c as he,f as ye,d as be,t as _e,E as Ve}from"./el-button-Dr-xovy3.js";import{a0 as L,q as ee,s as E,f as m,k as R,j as ge,o as n,g,a as r,u as a,z as V,a2 as ke,c as h,w as v,A,G as b,t as C,b as u,y as W,n as we,V as Se,O as Ie,a9 as J,_ as Ee,m as X,l as Y,v as Z,p as Te,d as Ce}from"./index-DKGOroms.js";import{u as Ne}from"./base-DxwXKsdW.js";import{k as Be,a as Pe}from"./iterative-Dacpr9Dc.js";import{E as ze}from"./index-Dolsta80.js";import{p as Ue,e as $,j as D,i as G,o as Ae,E as P,B as Fe,a as Me}from"./index-qaiCiQ--.js";import"./mySvg-BViP98k0.js";const Ke=i=>["",...Ue].includes(i),$e=le({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:Ke},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:$},activeActionIcon:{type:$},activeIcon:{type:$},inactiveIcon:{type:$},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:oe(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0},...me(["ariaLabel"])}),De={[q]:i=>D(i)||L(i)||G(i),[H]:i=>D(i)||L(i)||G(i),[Q]:i=>D(i)||L(i)||G(i)},xe=["onClick"],Oe=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],je=["aria-hidden"],Le=["aria-hidden"],Ge=["aria-hidden"],ae="ElSwitch",qe=ee({name:ae}),He=ee({...qe,props:$e,emits:De,setup(i,{expose:x,emit:p}){const o=i,{formItem:f}=pe(),F=fe(),s=ne("switch"),{inputId:k}=he(o,{formItemContext:f}),w=ye(E(()=>o.loading)),S=m(o.modelValue!==!1),_=m(),N=m(),z=E(()=>[s.b(),s.m(F.value),s.is("disabled",w.value),s.is("checked",d.value)]),U=E(()=>[s.e("label"),s.em("label","left"),s.is("active",!d.value)]),O=E(()=>[s.e("label"),s.em("label","right"),s.is("active",d.value)]),j=E(()=>({width:Me(o.width)}));R(()=>o.modelValue,()=>{S.value=!0});const M=E(()=>S.value?o.modelValue:!1),d=E(()=>M.value===o.activeValue);[o.activeValue,o.inactiveValue].includes(M.value)||(p(q,o.inactiveValue),p(H,o.inactiveValue),p(Q,o.inactiveValue)),R(d,e=>{var l;_.value.checked=e,o.validateEvent&&((l=f==null?void 0:f.validate)==null||l.call(f,"change").catch(I=>be()))});const t=()=>{const e=d.value?o.inactiveValue:o.activeValue;p(q,e),p(H,e),p(Q,e),Ie(()=>{_.value.checked=d.value})},y=()=>{if(w.value)return;const{beforeChange:e}=o;if(!e){t();return}const l=e();[J(l),D(l)].includes(!0)||_e(ae,"beforeChange must return type `Promise<boolean>` or `boolean`"),J(l)?l.then(K=>{K&&t()}).catch(K=>{}):l&&t()},B=()=>{var e,l;(l=(e=_.value)==null?void 0:e.focus)==null||l.call(e)};return ge(()=>{_.value.checked=d.value}),Ae({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},E(()=>!!o.label)),x({focus:B,checked:d}),(e,l)=>(n(),g("div",{class:V(a(z)),onClick:Se(y,["prevent"])},[r("input",{id:a(k),ref_key:"input",ref:_,class:V(a(s).e("input")),type:"checkbox",role:"switch","aria-checked":a(d),"aria-disabled":a(w),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(w),tabindex:e.tabindex,onChange:t,onKeydown:ke(y,["enter"])},null,42,Oe),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(n(),g("span",{key:0,class:V(a(U))},[e.inactiveIcon?(n(),h(a(P),{key:0},{default:v(()=>[(n(),h(A(e.inactiveIcon)))]),_:1})):b("v-if",!0),!e.inactiveIcon&&e.inactiveText?(n(),g("span",{key:1,"aria-hidden":a(d)},C(e.inactiveText),9,je)):b("v-if",!0)],2)):b("v-if",!0),r("span",{ref_key:"core",ref:N,class:V(a(s).e("core")),style:we(a(j))},[e.inlinePrompt?(n(),g("div",{key:0,class:V(a(s).e("inner"))},[e.activeIcon||e.inactiveIcon?(n(),h(a(P),{key:0,class:V(a(s).is("icon"))},{default:v(()=>[(n(),h(A(a(d)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(n(),g("span",{key:1,class:V(a(s).is("text")),"aria-hidden":!a(d)},C(a(d)?e.activeText:e.inactiveText),11,Le)):b("v-if",!0)],2)):b("v-if",!0),r("div",{class:V(a(s).e("action"))},[e.loading?(n(),h(a(P),{key:0,class:V(a(s).is("loading"))},{default:v(()=>[u(a(Fe))]),_:1},8,["class"])):a(d)?W(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(n(),h(a(P),{key:0},{default:v(()=>[(n(),h(A(e.activeActionIcon)))]),_:1})):b("v-if",!0)]):a(d)?b("v-if",!0):W(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(n(),h(a(P),{key:0},{default:v(()=>[(n(),h(A(e.inactiveActionIcon)))]),_:1})):b("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(n(),g("span",{key:1,class:V(a(O))},[e.activeIcon?(n(),h(a(P),{key:0},{default:v(()=>[(n(),h(A(e.activeIcon)))]),_:1})):b("v-if",!0),!e.activeIcon&&e.activeText?(n(),g("span",{key:1,"aria-hidden":!a(d)},C(e.activeText),9,Ge)):b("v-if",!0)],2)):b("v-if",!0)],10,xe))}});var Qe=ie(He,[["__file","switch.vue"]]);const Re=se(Qe),T=i=>(Te("data-v-52ea3564"),i=i(),Ce(),i),We={class:"box"},Je={class:"left"},Xe=T(()=>r("div",{style:{"font-size":"30px","font-weight":"bolder","margin-bottom":"20px"}},"第一步",-1)),Ye=T(()=>r("br",null,null,-1)),Ze=T(()=>r("br",null,null,-1)),ea=T(()=>r("br",null,null,-1)),aa=T(()=>r("p",null,"判断依据：流量稳定时刻收敛差距小于2m³/h（可以手动修改）",-1)),ta=T(()=>r("br",null,null,-1)),la={class:"middle"},oa=T(()=>r("div",{style:{"font-size":"30px","font-weight":"bolder","margin-bottom":"20px"}},"第二步",-1)),na={style:{display:"flex","justify-content":"space-between"}},ia={class:"right"},sa=T(()=>r("div",{style:{"font-size":"30px","font-weight":"bolder","margin-bottom":"20px"}},"计算结果",-1)),ua={key:1},ra={style:{"font-size":"18px"}},da={__name:"steadyMany",setup(i){const x=Ne(),p=m(),o=m(),f=m(),F=x.St,s=m([0,0]),k=m(),w=m(),S=m(!1),_=m(),N=m(),z=m(),U=m(),O=()=>{s.value=F.find((d,t)=>{const y=F.slice(t),B=y.map(e=>e[0]).reduce((e,l)=>e+l)/y.length;return k.value=B.toFixed(2),f.value=(y.map(e=>e[2]).reduce((e,l)=>e+l)/y.length).toFixed(2),y.map(e=>e[0]).every(e=>Math.abs(e-B)<2)}),M.value=!0},j=()=>{if(p.value===void 0||f.value===void 0||k.value===void 0){ze.error("请填写完整参数");return}w.value=S.value?Be(U.value,N.value,f.value,p.value,z.value,_.value):Pe(k.value,N.value,f.value,p.value,o.value,_.value)},M=m(!1);return(d,t)=>{const y=Ve,B=ve,e=Re,l=de,I=ce,K=re,te=ue;return n(),g("div",We,[r("div",Je,[Xe,u(y,{type:"primary",onClick:O},{default:v(()=>[X("稳定时段获取")]),_:1}),u(B,null,{context:v(()=>[r("p",null,"降深："+C(k.value)+"m",1),Ye,r("p",null,"流量："+C(f.value)+"m³/h",1),Ze,r("p",null,"时间："+C(s.value[1])+"h",1),ea,aa,ta]),_:1})]),r("div",la,[oa,r("div",na,[u(y,{type:"primary",onClick:j,style:{"margin-bottom":"10px"}},{default:v(()=>[X("获取参数")]),_:1}),u(e,{modelValue:S.value,"onUpdate:modelValue":t[0]||(t[0]=c=>S.value=c),"inline-prompt":"","active-text":"双观测孔","inactive-text":"单观测孔",size:"large",width:"100px",style:{"margin-left":"10px"}},null,8,["modelValue"])]),u(K,null,{default:v(()=>[u(I,{label:"流量："},{default:v(()=>[u(l,{modelValue:f.value,"onUpdate:modelValue":t[1]||(t[1]=c=>f.value=c),type:"number",placeholder:"稳定时刻流量（m³/h）"},null,8,["modelValue"])]),_:1}),u(I,{label:"降深："},{default:v(()=>[u(l,{modelValue:k.value,"onUpdate:modelValue":t[2]||(t[2]=c=>k.value=c),type:"number",placeholder:"稳定时刻流量（m³/h）"},null,8,["modelValue"])]),_:1}),u(I,{label:"厚度："},{default:v(()=>[u(l,{modelValue:p.value,"onUpdate:modelValue":t[3]||(t[3]=c=>p.value=c),type:"number",placeholder:"请输入含水层厚度（m）"},null,8,["modelValue"])]),_:1}),Y(u(I,{label:"井径："},{default:v(()=>[u(l,{modelValue:o.value,"onUpdate:modelValue":t[4]||(t[4]=c=>o.value=c),type:"number",placeholder:"井半径（m）"},null,8,["modelValue"])]),_:1},512),[[Z,!S.value]]),u(I,{label:"观测孔1："},{default:v(()=>[u(l,{modelValue:_.value,"onUpdate:modelValue":t[5]||(t[5]=c=>_.value=c),type:"number",placeholder:"距抽水井距离（m）"},null,8,["modelValue"]),u(l,{modelValue:N.value,"onUpdate:modelValue":t[6]||(t[6]=c=>N.value=c),type:"number",placeholder:"水位降深（m）"},null,8,["modelValue"])]),_:1}),Y(u(I,{label:"观测孔2："},{default:v(()=>[u(l,{modelValue:z.value,"onUpdate:modelValue":t[7]||(t[7]=c=>z.value=c),type:"number",placeholder:"距抽水井距离（m）"},null,8,["modelValue"]),u(l,{modelValue:U.value,"onUpdate:modelValue":t[8]||(t[8]=c=>U.value=c),type:"number",placeholder:"水位降深（m）"},null,8,["modelValue"])]),_:1},512),[[Z,S.value]])]),_:1})]),r("div",ia,[sa,w.value?(n(),g("div",ua,[r("p",ra," 渗透系数："+C(w.value)+" m/d ",1)])):(n(),h(te,{key:0,description:"暂无结果"}))])])}}},ka=Ee(da,[["__scopeId","data-v-52ea3564"]]);export{ka as default};