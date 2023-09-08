"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||s;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(87462),o=n(63366),s=(n(67294),n(3905)),a=["components"],i={id:"learn-xcm-docs-intro",title:"XCM: Cross-Consensus Messaging",sidebar_label:"XCM: Cross-Consensus Messaging",description:"Introduction to the XCM Documentation.",keywords:["xcm","cross-consensus messaging"],slug:"../xcm/introduction"},c="XCM: Cross-Consensus Messaging",u={unversionedId:"learn/xcm/learn-xcm-docs-intro",id:"learn/xcm/learn-xcm-docs-intro",title:"XCM: Cross-Consensus Messaging",description:"Introduction to the XCM Documentation.",source:"@site/../docs/learn/xcm/learn-xcm-docs-intro.md",sourceDirName:"learn/xcm",slug:"/learn/xcm/introduction",permalink:"/docs/learn/xcm/introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1694074887,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-intro",title:"XCM: Cross-Consensus Messaging",sidebar_label:"XCM: Cross-Consensus Messaging",description:"Introduction to the XCM Documentation.",keywords:["xcm","cross-consensus messaging"],slug:"../xcm/introduction"}},l={},p=[{value:"Getting started",id:"getting-started",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Glossary",id:"glossary",level:2},{value:"Contribute",id:"contribute",level:2}],m={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"xcm-cross-consensus-messaging"},"XCM: Cross-Consensus Messaging"),(0,s.kt)("p",null,"Welcome to the Cross-Consensus Messaging (XCM) documentation! XCM is a ",(0,s.kt)("strong",{parentName:"p"},"language")," for\ncommunicating ",(0,s.kt)("strong",{parentName:"p"},"intentions")," between ",(0,s.kt)("strong",{parentName:"p"},"consensus systems"),". Whether you're a developer, a blockchain\nenthusiast, or just interested in Polkadot, this guide aims to provide you with an\neasy-to-understand and comprehensive introduction to XCM."),(0,s.kt)("h2",{id:"getting-started"},"Getting started"),(0,s.kt)("p",null,"Head over to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/xcm/overview-summary"},"overview")," to begin your journey with XCM."),(0,s.kt)("h2",{id:"configuration"},"Configuration"),(0,s.kt)("p",null,"Head over to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/xcm/config-deep-dive"},"configuration section")," if you want to learn how to\nconfigure your project to use XCM."),(0,s.kt)("h2",{id:"glossary"},"Glossary"),(0,s.kt)("p",null,"Go to the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn/xcm/reference-glossary"},"glossary")," section for a quick explanation of all the terms used\nwhen dealing with XCM."),(0,s.kt)("h2",{id:"contribute"},"Contribute"),(0,s.kt)("p",null,"Both the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"format")," and this\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs"},"documentation")," are open for anyone to contribute. If\nthere's anything you'd like to see in the documentation, feel free to\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/issues"},"open an issue"),". If you want to contribute to the\nformat, check out the\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format/blob/master/proposals/0001-process.md"},"RFC process"),"."))}f.isMDXComponent=!0}}]);