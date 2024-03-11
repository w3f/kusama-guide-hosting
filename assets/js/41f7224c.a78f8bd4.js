"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3274],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return t?n.createElement(f,c(c({ref:r},u),{},{components:t})):n.createElement(f,c({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[d]="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},52991:(e,r,t)=>{t.d(r,{Z:()=>h});var n=t(67294),a=t(86010),i=t(53438),c=t(39960),o=t(13919),l=t(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var r=e.href,t=e.children;return n.createElement(c.Z,{href:r,className:(0,a.Z)("card padding--lg",s.cardContainer)},t)}function d(e){var r=e.href,t=e.icon,i=e.title,c=e.description;return n.createElement(u,{href:r},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:i},t," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:c},c))}function p(e){var r,t=e.item,a=(0,i.Wl)(t);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!=(r=t.description)?r:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){var r,t,a=e.item,c=(0,o.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.xz)(null!=(r=a.docId)?r:void 0);return n.createElement(d,{href:a.href,icon:c,title:a.label,description:null!=(t=a.description)?t:null==l?void 0:l.description})}function f(e){var r=e.item;switch(r.type){case"link":return n.createElement(m,{item:r});case"category":return n.createElement(p,{item:r});default:throw new Error("unknown item type "+JSON.stringify(r))}}function v(e){var r=e.className,t=(0,i.jA)();return n.createElement(h,{items:t.items,className:r})}function h(e){var r=e.items,t=e.className;if(!r)return n.createElement(v,e);var c=(0,i.MN)(r);return n.createElement("section",{className:(0,a.Z)("row",t)},c.map((function(e,r){return n.createElement("article",{key:r,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},48659:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),c=t(52991),o=["components"],l={id:"learn-archive",title:"Learn Archive",sidebar_label:"Archive",description:"Archive for the Learn Section.",keywords:["Gov1","Gov1 Treasury","Launch","Redenomination","Controller"],slug:"../learn-archive"},s=void 0,u={unversionedId:"learn/learn-archive",id:"learn/learn-archive",title:"Learn Archive",description:"Archive for the Learn Section.",source:"@site/../docs/learn/learn-archive.md",sourceDirName:"learn",slug:"/learn-archive",permalink:"/docs/learn-archive",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1710167319,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{id:"learn-archive",title:"Learn Archive",sidebar_label:"Archive",description:"Archive for the Learn Section.",keywords:["Gov1","Gov1 Treasury","Launch","Redenomination","Controller"],slug:"../learn-archive"},sidebar:"docs",previous:{title:"Hyperbridge",permalink:"/docs/learn-hyperbridge"},next:{title:"Governance V1",permalink:"/docs/learn/learn-governance"}},d={},p=[],m={toc:p},f="wrapper";function v(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)(f,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"sticky"},(0,i.kt)("br",null),(0,i.kt)("p",null,"This section contains archived pages. The content in them no longer applies to Polkadot but can\nstill be relevant for parachains and related projects.")),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);