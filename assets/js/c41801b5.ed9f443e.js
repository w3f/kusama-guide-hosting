"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5013],{3905:(a,t,e)=>{e.d(t,{Zo:()=>d,kt:()=>p});var n=e(67294);function r(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}function o(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,n)}return e}function i(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){r(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}function l(a,t){if(null==a)return{};var e,n,r=function(a,t){if(null==a)return{};var e,n,r={},o=Object.keys(a);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||(r[e]=a[e]);return r}(a,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)e=o[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(r[e]=a[e])}return r}var u=n.createContext({}),s=function(a){var t=n.useContext(u),e=t;return a&&(e="function"==typeof a?a(t):i(i({},t),a)),e},d=function(a){var t=s(a.components);return n.createElement(u.Provider,{value:t},a.children)},m={inlineCode:"code",wrapper:function(a){var t=a.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(a,t){var e=a.components,r=a.mdxType,o=a.originalType,u=a.parentName,d=l(a,["components","mdxType","originalType","parentName"]),c=s(e),p=r,f=c["".concat(u,".").concat(p)]||c[p]||m[p]||o;return e?n.createElement(f,i(i({ref:t},d),{},{components:e})):n.createElement(f,i({ref:t},d))}));function p(a,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof a||r){var o=e.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=a,l.mdxType="string"==typeof a?a:r,i[1]=l;for(var s=2;s<o;s++)i[s]=e[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}c.displayName="MDXCreateElement"},63801:(a,t,e)=>{e.r(t),e.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var n=e(87462),r=e(63366),o=(e(67294),e(3905)),i=["components"],l={id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"},u=void 0,s={unversionedId:"maintain/kusama/maintain-guides-how-to-validate-kusama",id:"maintain/kusama/maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",description:"The fundamentals for running a Kusama validator.",source:"@site/../docs/maintain/kusama/maintain-guides-how-to-validate-kusama.md",sourceDirName:"maintain/kusama",slug:"/maintain-guides-how-to-validate-kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama",draft:!1,tags:[],version:"current",lastUpdatedBy:"Oliver Tale-Yazdi",lastUpdatedAt:1660036276,formattedLastUpdatedAt:"Aug 9, 2022",frontMatter:{id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"},sidebar:"docs",previous:{title:"How to Nominate on Kusama",permalink:"/docs/maintain-guides-how-to-nominate-kusama"},next:{title:"How to Stop Validating",permalink:"/docs/maintain-guides-how-to-stop-validating"}},d={},m=[],c={toc:m};function p(a){var t=a.components,e=(0,r.Z)(a,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Running a validator on the Kusama network is identical to running a Polkadot validator. Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"Polkadot guide")," on how to setup a validator."),(0,o.kt)("p",null,"Make sure to adjust the Polkadot guide to run a Kusama network validator:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When starting the node pass ",(0,o.kt)("inlineCode",{parentName:"li"},"--chain=kusama")," CLI flag:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./target/release/polkadot --pruning=archive --chain kusama\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Similar to Polkadot network Kusama has its own token called KSM")))}p.isMDXComponent=!0}}]);