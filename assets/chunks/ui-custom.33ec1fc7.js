import{_ as n,f as d,n as l,o as p,c as _,p as i,q as r,a as u}from"../app.f75c35c2.js";const m=s=>(i("data-v-2d84ebea"),s=s(),r(),s),b={class:"buy-sell-ads"},f=m(()=>u("div",{class:"bsa-cpc"},null,-1)),y=[f],h=d({props:{code:null,placement:null},setup(s){const{code:c,placement:o}=s,t="bsa-cpc-script";l(()=>{if(document.getElementById(t))a();else{const e=document.createElement("script");e.id=t,e.src="//m.servedby-buysellads.com/monetization.js",document.head.appendChild(e),e.onload=()=>{a()}}});function a(){if(typeof _bsa!="undefined"&&_bsa){const e=document.querySelector(".bsa-cpc");e.innerHTML="",_bsa.init("default",c,`placement:${o}`,{target:".bsa-cpc",align:"horizontal",disable_css:"true"})}}return(e,v)=>(p(),_("div",b,y))}});var I=n(h,[["__scopeId","data-v-2d84ebea"]]);export{I as default};
