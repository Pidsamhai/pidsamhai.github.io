"use strict";(self["webpackChunkpidsamhai"]=self["webpackChunkpidsamhai"]||[]).push([[505],{505:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var i=s(3396);const r={class:"tw-p-4 tw-h-full tw-w-full tw-flex-col tw-flex"},a=(0,i._)("div",{class:"tw-text-2xl md:tw-text-3xl font-weight-bold tw-mt-4 tw-mb-4"}," Latest Release track ",-1),n={key:0,class:"tw-grow tw-h-0 tw-flex tw-items-center tw-justify-center"},l={key:1,class:"tw-grow tw-h-0"};function o(e,t,s,o,c,w){const d=(0,i.up)("loading"),u=(0,i.up)("ReleaseItem");return(0,i.wg)(),(0,i.iD)("div",r,[a,e.isLoading?((0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(d)])):(0,i.kq)("",!0),e.isLoading?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",l,[(0,i._)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.release,((e,t)=>((0,i.wg)(),(0,i.j4)(u,{key:t,item:e},null,8,["item"])))),128))])]))])}var c=s(2482),w=s(6520),d=s(7139);const u=["href"];function h(e,t,s,r,a,n){return(0,i.wg)(),(0,i.iD)("div",{class:(0,d.C_)([{dark:"dark"==e.store.state.themeMode},"release-item tw-flex-row tw-flex tw-text-base md:tw-text-lg tw-justify-between tw-p-4"])},[(0,i._)("a",{href:e.item.html_url,target:"_blank"},(0,d.zw)(e.item.url.split("/").reverse()[2])+" : "+(0,d.zw)(e.item.tag_name),9,u),(0,i._)("p",null,(0,d.zw)(new Date(Date.parse(e.item.published_at)).toLocaleString("default",{month:"short",day:"2-digit",year:"numeric"})),1)],2)}var f=s(2539);class g{constructor(){(0,c.Z)(this,"item",(0,w.vg)({required:!0}))}}class m extends(w.w3["with"](g)){constructor(...e){super(...e),(0,c.Z)(this,"store",(0,f.oR)()),(0,c.Z)(this,"showChangelog",!1)}}var p=s(89);const v=(0,p.Z)(m,[["render",h],["__scopeId","data-v-1cd220a9"]]);var k=v,x=s(9839),y=function(e,t,s,i){var r,a=arguments.length,n=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(e,t,s,i);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(n=(a<3?r(n):a>3?r(t,s,n):r(t,s))||n);return a>3&&n&&Object.defineProperty(t,s,n),n};let b=class extends w.w3{constructor(...e){super(...e),(0,c.Z)(this,"release",[]),(0,c.Z)(this,"isLoading",!1)}async fetch(){this.isLoading=!0,this.release=await this.$apiServices.getRelease(),this.isLoading=!1}mounted(){this.fetch()}};b=y([(0,w.Ei)({components:{ReleaseItem:k,Loading:x.Z}})],b);var _=b;const D=(0,p.Z)(_,[["render",o]]);var L=D}}]);
//# sourceMappingURL=505.85d5e7d4.js.map