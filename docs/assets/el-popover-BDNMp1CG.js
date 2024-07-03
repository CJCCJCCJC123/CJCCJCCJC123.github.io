import{g as N,u as l,f as M}from"./el-tag-RlgbTzdF.js";import{_ as S,b as g,d as c,u as R,f as k,w as U}from"./base-BMXBxwcC.js";import{f as j,p as D,a as V}from"./index-ByU7zivg.js";import{q as h,y,f as I,x as $,B as K,j as z,u as a,J as H,s as b,o as T,c as J,w as B,g as q,z as F,t as _,G as P,m as G,W}from"./index-nyadhyy-.js";const Y=h({inheritAttrs:!1});function Q(t,r,n,o,f,i){return y(t.$slots,"default")}var X=S(Y,[["render",Q],["__file","collection.vue"]]);const Z=h({name:"ElCollectionItem",inheritAttrs:!1});function x(t,r,n,o,f,i){return y(t.$slots,"default")}var ee=S(Z,[["render",x],["__file","collection-item.vue"]]);const te="data-el-collection-item",oe=t=>{const r=`El${t}Collection`,n=`${r}Item`,o=Symbol(r),f=Symbol(n),i={...X,name:r,setup(){const v=I(null),d=new Map;$(o,{itemMap:d,getItems:()=>{const p=a(v);if(!p)return[];const s=Array.from(p.querySelectorAll(`[${te}]`));return[...d.values()].sort((C,E)=>s.indexOf(C.ref)-s.indexOf(E.ref))},collectionRef:v})}},m={...ee,name:n,setup(v,{attrs:d}){const u=I(null),p=K(o,void 0);$(f,{collectionItemRef:u}),z(()=>{const s=a(u);s&&p.itemMap.set(s,{ref:s,...d})}),H(()=>{const s=a(u);p.itemMap.delete(s)})}};return{COLLECTION_INJECTION_KEY:o,COLLECTION_ITEM_INJECTION_KEY:f,ElCollection:i,ElCollectionItem:m}},w=g({trigger:N.trigger,effect:{...l.effect,default:"light"},type:{type:c(String)},placement:{type:c(String),default:"bottom"},popperOptions:{type:c(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:c([Number,String]),default:0},maxHeight:{type:c([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:c(Object)},teleported:l.teleported});g({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:j}});g({onKeydown:{type:c(Function)}});oe("Dropdown");const re=g({trigger:N.trigger,placement:w.placement,disabled:N.disabled,visible:l.visible,transition:l.transition,popperOptions:w.popperOptions,tabindex:w.tabindex,content:l.content,popperStyle:l.popperStyle,popperClass:l.popperClass,enterable:{...l.enterable,default:!0},effect:{...l.effect,default:"light"},teleported:l.teleported,title:String,width:{type:[String,Number],default:150},offset:{type:Number,default:void 0},showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0},showArrow:{type:Boolean,default:!0},persistent:{type:Boolean,default:!0},"onUpdate:visible":{type:Function}}),ne={"update:visible":t=>D(t),"before-enter":()=>!0,"before-leave":()=>!0,"after-enter":()=>!0,"after-leave":()=>!0},se="onUpdate:visible",le=h({name:"ElPopover"}),ae=h({...le,props:re,emits:ne,setup(t,{expose:r,emit:n}){const o=t,f=b(()=>o[se]),i=R("popover"),m=I(),v=b(()=>{var e;return(e=a(m))==null?void 0:e.popperRef}),d=b(()=>[{width:V(o.width)},o.popperStyle]),u=b(()=>[i.b(),o.popperClass,{[i.m("plain")]:!!o.content}]),p=b(()=>o.transition===`${i.namespace.value}-fade-in-linear`),s=()=>{var e;(e=m.value)==null||e.hide()},O=()=>{n("before-enter")},C=()=>{n("before-leave")},E=()=>{n("after-enter")},L=()=>{n("update:visible",!1),n("after-leave")};return r({popperRef:v,hide:s}),(e,de)=>(T(),J(a(M),W({ref_key:"tooltipRef",ref:m},e.$attrs,{trigger:e.trigger,placement:e.placement,disabled:e.disabled,visible:e.visible,transition:e.transition,"popper-options":e.popperOptions,tabindex:e.tabindex,content:e.content,offset:e.offset,"show-after":e.showAfter,"hide-after":e.hideAfter,"auto-close":e.autoClose,"show-arrow":e.showArrow,"aria-label":e.title,effect:e.effect,enterable:e.enterable,"popper-class":a(u),"popper-style":a(d),teleported:e.teleported,persistent:e.persistent,"gpu-acceleration":a(p),"onUpdate:visible":a(f),onBeforeShow:O,onBeforeHide:C,onShow:E,onHide:L}),{content:B(()=>[e.title?(T(),q("div",{key:0,class:F(a(i).e("title")),role:"title"},_(e.title),3)):P("v-if",!0),y(e.$slots,"default",{},()=>[G(_(e.content),1)])]),default:B(()=>[e.$slots.reference?y(e.$slots,"reference",{key:0}):P("v-if",!0)]),_:3},16,["trigger","placement","disabled","visible","transition","popper-options","tabindex","content","offset","show-after","hide-after","auto-close","show-arrow","aria-label","effect","enterable","popper-class","popper-style","teleported","persistent","gpu-acceleration","onUpdate:visible"]))}});var ie=S(ae,[["__file","popover.vue"]]);const A=(t,r)=>{const n=r.arg||r.value,o=n==null?void 0:n.popperRef;o&&(o.triggerRef=t)};var pe={mounted(t,r){A(t,r)},updated(t,r){A(t,r)}};const ce="popover",fe=k(pe,ce),ye=U(ie,{directive:fe});export{ye as E};
