"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),s=r(53438),o=r(39960),i=r(13919),l=r(95999);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,r=e.children;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,s=e.title,o=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:s},r," ",s),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:o},o))}function p(e){var t,r=e.item,a=(0,s.Wl)(r);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r,a=e.item,o=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,s.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(d,{href:a.href,icon:o,title:a.label,description:null!=(r=a.description)?r:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return n.createElement(m,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,r=(0,s.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){var t=e.items,r=e.className;if(!t)return n.createElement(b,e);var o=(0,s.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e}))})))}},30998:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=r(52991),i=["components"],l={id:"learn-guides-assets",title:"Polkadot-JS Guides about Asset Hub",sidebar_label:"Asset Hub Guides",description:"Polkadot-JS Guides about Asset Hub.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets"},c=void 0,u={unversionedId:"learn/learn-guides-assets",id:"learn/learn-guides-assets",title:"Polkadot-JS Guides about Asset Hub",description:"Polkadot-JS Guides about Asset Hub.",source:"@site/../docs/learn/learn-guides-assets.md",sourceDirName:"learn",slug:"/learn-guides-assets",permalink:"/docs/learn-guides-assets",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1711019259,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{id:"learn-guides-assets",title:"Polkadot-JS Guides about Asset Hub",sidebar_label:"Asset Hub Guides",description:"Polkadot-JS Guides about Asset Hub.",keywords:["asset hub","assets","statemine","statemint","polkadot-js"],slug:"../learn-guides-assets"},sidebar:"docs",previous:{title:"Polkadot Vault Guides",permalink:"/docs/learn-guides-vault"},next:{title:"Create Asset Guides",permalink:"/docs/learn-guides-assets-create"}},d={},p=[],m={toc:p},f="wrapper";function b(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("div",{className:"sticky",style:{zIndex:1}},(0,s.kt)("br",null),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS")," is for developers and power users only. For more\nuser-friendly tools see the ",(0,s.kt)("a",{parentName:"p",href:"./wallets-index"},"wallets"),", ",(0,s.kt)("a",{parentName:"p",href:"./apps-index"},"apps")," and\n",(0,s.kt)("a",{parentName:"p",href:"./dashboards-index"},"dashboard")," pages.")),(0,s.kt)(o.Z,{mdxType:"DocCardList"}))}b.isMDXComponent=!0}}]);