"use strict";(self["webpackChunkproject"]=self["webpackChunkproject"]||[]).push([[935],{3935:function(t,e,a){a.r(e),a.d(e,{default:function(){return y}});a(560);var l=a(3396),u=a(4870),n=a(7139);const r={class:"post-content"};var o=(0,l.aZ)({__name:"PostField",props:{currentTitle:{type:String,required:!0}},setup(t){return(e,a)=>((0,l.wg)(),(0,l.iD)("div",r,[(0,l._)("h2",null,(0,n.zw)(t.currentTitle),1),(0,l.WI)(e.$slots,"default")]))}});const s=o;var c=s,i=(0,l.aZ)({__name:"AppRouterLink",props:{path:String},emits:["click"],setup(t,{emit:e}){const a=t,u=(0,l.Fl)((()=>a.path)),n=e;return(t,e)=>{const a=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.j4)(a,{to:u.value,onClick:e[0]||(e[0]=t=>n("click"))},{default:(0,l.w5)((()=>[(0,l.WI)(t.$slots,"default")])),_:3},8,["to"])}}});const p=i;var d=p,h=(0,l.aZ)({__name:"PostNavigationButton",props:{path:String,isForward:{type:Boolean,default:!1}},emits:["click"],setup(t,{emit:e}){const a=t,n=e,r=a.isForward?"1 1":"-1 1";return(e,a)=>{const o=(0,l.up)("IconArrow"),s=(0,l.up)("IconBase");return(0,l.wg)(),(0,l.j4)(d,{path:t.path,onClick:a[0]||(a[0]=t=>n("click"))},{default:(0,l.w5)((()=>[(0,l.Wm)(s,{width:"100",height:"100",transform:(0,u.SU)(r)},{default:(0,l.w5)((()=>[(0,l.Wm)(o)])),_:1},8,["transform"])])),_:1},8,["path"])}}});const m=h;var w=m,v=a(8569),f=a(6866),k=a(4845);const _="route";var g=(0,l.aZ)({__name:"PostPage",setup(t){const e=(0,v.T)(),a=(0,f.yj)(),n=(0,f.tv)();let r=e.getCurrentPath(a.path,_);n.push({name:r?.name});let o=(0,u.iH)(r?.title),s=(0,l.Fl)((()=>[{title:"Главная",disable:!1,to:h(a.fullPath)},{title:o.value,disable:!0,to:""}]));const i=(0,l.Fl)((()=>e.getNextLink(a.path,r))),p=(0,l.Fl)((()=>e.getPrevLink(a.path,r))),d=t=>{r=t},h=t=>{const e=(0,k.uQ)(t),a=(0,k.pk)(t,e),l=(0,k.pk)(t,a),u=(0,k.pk)(t,l);return`/${u}/${a}`};return(0,l.ic)((()=>{r=e.getCurrentPath(a.path,_),o.value=r?.title})),(0,f.ao)((async(t,a)=>{e.saveCurrentPathLocalStorage(_,r)})),(0,l.Ah)((async()=>{e.deleteCurrentPathLocalStorage(_)})),(t,e)=>{const a=(0,l.up)("v-breadcrumbs"),n=(0,l.up)("v-row"),r=(0,l.up)("RouterView"),h=(0,l.up)("v-col"),m=(0,l.up)("v-container");return(0,l.wg)(),(0,l.j4)(m,{fluid:"",class:"h-100"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[(0,l.Wm)(a,{items:(0,u.SU)(s)},null,8,["items"])])),_:1}),(0,l.Wm)(n,{style:{"min-height":"86vh"}},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{cols:"12"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{currentTitle:(0,u.SU)(o)},{default:(0,l.w5)((()=>[(0,l.Wm)(r)])),_:1},8,["currentTitle"])])),_:1}),(0,l.Wm)(h,{class:"align-self-end"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{justify:"space-between"},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{cols:"1"},{default:(0,l.w5)((()=>[void 0!=p.value?((0,l.wg)(),(0,l.j4)(w,{key:0,path:p.value.path,onClick:e[0]||(e[0]=t=>d(p.value)),class:"sticky-md-top"},null,8,["path"])):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(h,{cols:"1"},{default:(0,l.w5)((()=>[void 0!=i.value?((0,l.wg)(),(0,l.j4)(w,{key:0,to:i.value.path,isForward:!0,onClick:e[1]||(e[1]=t=>d(i.value))},null,8,["to"])):(0,l.kq)("",!0)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}}});const W=g;var y=W}}]);
//# sourceMappingURL=935.649b8eef.js.map