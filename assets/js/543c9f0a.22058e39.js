"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1306],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>y});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(o),p=n,y=h["".concat(c,".").concat(p)]||h[p]||d[p]||r;return o?a.createElement(y,i(i({ref:t},u),{},{components:o})):a.createElement(y,i({ref:t},u))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},75959:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={id:"build-guides-coretime-troubleshoot",title:"Coretime Troubleshooting FAQ",sidebar_label:"Troubleshooting FAQ",description:"FAQ on issues related to using coretime and testing/deploying parachains using Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores","coretime","agile"],slug:"../build-guides-coretime-troubleshoot"},c=void 0,l={unversionedId:"build/build-guides-coretime-troubleshoot",id:"build/build-guides-coretime-troubleshoot",title:"Coretime Troubleshooting FAQ",description:"FAQ on issues related to using coretime and testing/deploying parachains using Polkadot SDK",source:"@site/../docs/build/build-guides-coretime-troubleshoot.md",sourceDirName:"build",slug:"/build-guides-coretime-troubleshoot",permalink:"/docs/build-guides-coretime-troubleshoot",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1715629620,formattedLastUpdatedAt:"May 13, 2024",frontMatter:{id:"build-guides-coretime-troubleshoot",title:"Coretime Troubleshooting FAQ",sidebar_label:"Troubleshooting FAQ",description:"FAQ on issues related to using coretime and testing/deploying parachains using Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores","coretime","agile"],slug:"../build-guides-coretime-troubleshoot"},sidebar:"docs",previous:{title:"Parachain Template Guide",permalink:"/docs/build-guides-template-basic"},next:{title:"Smart Contracts",permalink:"/docs/build-smart-contracts"}},u={},h=[{value:"FAQ / Troubleshooting",id:"faq--troubleshooting",level:2},{value:"Why do I have to sync Rococo locally? Can&#39;t I just use a remote, trusted node and connect to that?",id:"why-do-i-have-to-sync-rococo-locally-cant-i-just-use-a-remote-trusted-node-and-connect-to-that",level:3},{value:"Is there a faster way to sync Rococo? Why not warp sync?",id:"is-there-a-faster-way-to-sync-rococo-why-not-warp-sync",level:3},{value:"My collator is not producing blocks",id:"my-collator-is-not-producing-blocks",level:3},{value:"I want to run more than one collator, how do I do that?",id:"i-want-to-run-more-than-one-collator-how-do-i-do-that",level:3},{value:"Why do we only have one collator in the parachain guides on the Wiki? Isn&#39;t it better to have more?",id:"why-do-we-only-have-one-collator-in-the-parachain-guides-on-the-wiki-isnt-it-better-to-have-more",level:3},{value:"Why are we registering parathreads and not parachains?",id:"why-are-we-registering-parathreads-and-not-parachains",level:3}],d={toc:h},p="wrapper";function y(e){var t=e.components,o=(0,n.Z)(e,i);return(0,r.kt)(p,(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This page aims to cover and aggregate various resources that relate to troubleshooting common\nproblems when using the Polkadot SDK or deploying on a core."),(0,r.kt)("h2",{id:"faq--troubleshooting"},"FAQ / Troubleshooting"),(0,r.kt)("h3",{id:"why-do-i-have-to-sync-rococo-locally-cant-i-just-use-a-remote-trusted-node-and-connect-to-that"},"Why do I have to sync Rococo locally? Can't I just use a remote, trusted node and connect to that?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," You can remotely connect to Rococo network via the --relay-chain-rpc-urls flag, which can be passed to your node. Unfortunately, the caveat is you can't use this node for collation at this time - meaning if\nyou intend on being a collator/validator for your blockchain and intend to create blocks, you need\nto sync the chain locally."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"is-there-a-faster-way-to-sync-rococo-why-not-warp-sync"},"Is there a faster way to sync Rococo? Why not warp sync?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Warp sync is currently not possible on Rococo or Westend.\n",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/9730/rococo-cant-warp-sync-stuck-at-16mb-finality-proof-download"},"See this answer for more context."),". However, ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain=rococo\u2014-sync fast-unsafe")," should provide a faster way to sync with the relay chain by skipping downloading state proofs and just verifying the block headers. "),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"my-collator-is-not-producing-blocks"},"My collator is not producing blocks"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Check these sanity checklists:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/questions/178/how-can-i-get-my-parachain-to-produce-blocks-sanity-checklist"},"https://substrate.stackexchange.com/questions/178/how-can-i-get-my-parachain-to-produce-blocks-sanity-checklist")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://substrate.stackexchange.com/questions/1394/our-parachain-doesnt-produce-blocks-checklist"},"https://substrate.stackexchange.com/questions/1394/our-parachain-doesnt-produce-blocks-checklist"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"i-want-to-run-more-than-one-collator-how-do-i-do-that"},"I want to run more than one collator, how do I do that?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Ideally, you would want to run these on separate machines/servers, but you could as long as\nyou ensure you can provide different RPC/WebSocket and P2P ports for each collator. You also may\nneed to sync a separate instance of Rococo for each collator on the same machine. You also will need to choose the block production mechanism like ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/5572/production-like-parachain-setup-and-launch"},"Aura"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"why-do-we-only-have-one-collator-in-the-parachain-guides-on-the-wiki-isnt-it-better-to-have-more"},"Why do we only have one collator in the parachain guides on the Wiki? Isn't it better to have more?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," Mostly for simplicity. If we have more than one collator, we would have to also spin it up,\nwhich would be a hassle on a single machine (it is possible though). Of course, if you had an actual\nnetwork with multiple collators, it is assumed you'd have separate VPS/servers for each."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"why-are-we-registering-parathreads-and-not-parachains"},"Why are we registering parathreads and not parachains?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A:")," When registering a parachain on a relay chain, they are assigned a ",(0,r.kt)("inlineCode",{parentName:"p"},"ParaID"),", and they are referred to as Parathreads till they start producing blocks. ",(0,r.kt)("em",{parentName:"p"},"Parathreads")," are a bit of an outdated term now. They refer to what are now known as\non-demand parachains. Although they be references in various places through PolkadotJS, docs, or\nother UIs, really we only have two types of parachain: on-demand parachains, and parachains which\nuse bulk coretime."),(0,r.kt)("hr",null))}y.isMDXComponent=!0}}]);