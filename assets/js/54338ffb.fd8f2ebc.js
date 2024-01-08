"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=r,g=d["".concat(l,".").concat(p)]||d[p]||m[p]||i;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"learn-account-multisig",title:"Multi-Signature Accounts",sidebar_label:"Multi-Signature Accounts",description:"Multi-signature Accounts on Polkadot.",keywords:["account","multisig","polkadot account","polkadotjs","multix"],slug:"../learn-account-multisig"},l=void 0,c={unversionedId:"learn/learn-account-multisig",id:"learn/learn-account-multisig",title:"Multi-Signature Accounts",description:"Multi-signature Accounts on Polkadot.",source:"@site/../docs/learn/learn-account-multisig.md",sourceDirName:"learn",slug:"/learn-account-multisig",permalink:"/docs/learn-account-multisig",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1701187212,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{id:"learn-account-multisig",title:"Multi-Signature Accounts",sidebar_label:"Multi-Signature Accounts",description:"Multi-signature Accounts on Polkadot.",keywords:["account","multisig","polkadot account","polkadotjs","multix"],slug:"../learn-account-multisig"},sidebar:"docs",previous:{title:"Account Identity",permalink:"/docs/learn-identity"},next:{title:"Proxy Accounts",permalink:"/docs/learn-proxies"}},u={},d=[],m={toc:d},p="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Mulisig Apps",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/multisig-apps"},"multisig apps")," page for more information about user-friendly\ntools about multi-signature accounts.")),(0,i.kt)("p",null,"It is possible to create multi-signature accounts (multisig) in Substrate-based chains. A multisig\nis composed of one or more addresses and a threshold. The threshold defines how many signatories\n(participating addresses) need to agree on submitting an extrinsic for the call to be successful."),(0,i.kt)("p",null,"For example, Alice, Bob, and Charlie set up a multisig with a threshold of 2. This means Alice and\nBob can execute any call even if Charlie disagrees with it. Likewise, Charlie and Bob can execute\nany call without Alice. A threshold is typically a number smaller than the total number of members\nbut can also be equal to it, which means they all have to agree."),(0,i.kt)("p",null,"Multi-signature accounts have several uses:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"securing your stash: use additional signatories as a 2FA mechanism to secure your funds. One\nsigner can be on one computer, and another can be on another or in cold storage. This slows down\nyour interactions with the chain but is orders of magnitude more secure."),(0,i.kt)("li",{parentName:"ul"},"board decisions: legal entities such as businesses and foundations use multisigs to govern over\nthe entity's treasury collectively."),(0,i.kt)("li",{parentName:"ul"},"group participation in governance: a multisig account can do everything a regular account can. A\nmultisig account could be a council member in\nKusama's governance, where a set of\ncommunity members could vote as one entity.")),(0,i.kt)("p",null,"Multi-signature accounts ",(0,i.kt)("strong",{parentName:"p"},"cannot be modified after being created"),". Changing the set of members or\naltering the threshold is not possible and instead requires the dissolution of the current multisig\nand creation of a new one. As such, multisig account addresses are ",(0,i.kt)("strong",{parentName:"p"},"deterministic"),", i.e. you can\nalways calculate the address of a multisig by knowing the members and the threshold, without the\naccount existing yet. This means one can send tokens to an address that does not exist yet, and if\nthe entities designated as the recipients come together in a new multisig under a matching\nthreshold, they will immediately have access to these tokens."),(0,i.kt)("hr",null),(0,i.kt)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you are an advanced user, see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-guides-accounts-multisig"},"Polkadot-JS guides about multi-signature accounts"),".")))}g.isMDXComponent=!0}}]);