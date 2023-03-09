"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4916],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(o),u=n,m=p["".concat(s,".").concat(u)]||p[u]||h[u]||r;return o?a.createElement(m,i(i({ref:t},c),{},{components:o})):a.createElement(m,i({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<r;d++)i[d]=o[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},27122:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host",description:"Learn about the components of the Polkadot host.",keywords:["polkadot host","runtime"],slug:"../learn-polkadot-host"},s=void 0,d={unversionedId:"learn/learn-polkadot-host",id:"learn/learn-polkadot-host",title:"Polkadot Host (PH)",description:"Learn about the components of the Polkadot host.",source:"@site/../docs/learn/learn-polkadot-host.md",sourceDirName:"learn",slug:"/learn-polkadot-host",permalink:"/docs/learn-polkadot-host",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alan P\u0142\xf3cieniak",lastUpdatedAt:1678347109,formattedLastUpdatedAt:"Mar 9, 2023",frontMatter:{id:"learn-polkadot-host",title:"Polkadot Host (PH)",sidebar_label:"Polkadot Host",description:"Learn about the components of the Polkadot host.",keywords:["polkadot host","runtime"],slug:"../learn-polkadot-host"}},c={},p=[{value:"Components of the Polkadot host",id:"components-of-the-polkadot-host",level:2},{value:"Diagram",id:"diagram",level:2},{value:"Code Executor",id:"code-executor",level:2},{value:"Resources",id:"resources",level:2}],h={toc:p};function u(e){var t=e.components,l=(0,n.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The architecture of Polkadot can be divided into two different parts, the Polkadot ",(0,r.kt)("em",{parentName:"p"},"runtime")," and the\nPolkadot ",(0,r.kt)("em",{parentName:"p"},"host"),". The Polkadot runtime is the core state transition logic of the chain and can be\nupgraded over the course of time and without the need for a hard fork. In comparison, the Polkadot\nhost is the environment in which the runtime executes and is expected to remain stable and mostly\nstatic over the lifetime of Polkadot."),(0,r.kt)("p",null,"The Polkadot host interacts with the Polkadot runtime in limited, and well-specified ways. For this\nreason, implementation teams can build an alternative implementation of the Polkadot host while\ntreating the Polkadot runtime as a black box. For more details of the interactions between the host\nand the runtime, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/"},"specification"),"."),(0,r.kt)("h2",{id:"components-of-the-polkadot-host"},"Components of the Polkadot host"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Networking components such as ",(0,r.kt)("inlineCode",{parentName:"li"},"Libp2p")," that facilitates network interactions."),(0,r.kt)("li",{parentName:"ul"},"State storage and the storage trie along with the database layer."),(0,r.kt)("li",{parentName:"ul"},"Consensus engine for GRANDPA and BABE."),(0,r.kt)("li",{parentName:"ul"},"Wasm interpreter and virtual machine."),(0,r.kt)("li",{parentName:"ul"},"Low level primitives for a blockchain, such as cryptographic primitives like hash functions.")),(0,r.kt)("p",null,"A compiled Polkadot runtime, a blob of Wasm code, can be uploaded into the Polkadot host and used as\nthe logic for the execution of state transitions. Without a runtime, the Polkadot host is unable to\nmake state transitions or produce any blocks."),(0,r.kt)("p",null,"A host node..."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"must populate the state storage with the official genesis state."),(0,r.kt)("li",{parentName:"ol"},"should maintain a set of around 50 active peers at any time. New peers can be found using the\ndiscovery protocols."),(0,r.kt)("li",{parentName:"ol"},"should open and maintain the various required streams with each of its active peers."),(0,r.kt)("li",{parentName:"ol"},"should send block requests to these peers to receive all blocks in the chain and execute each of\nthem."),(0,r.kt)("li",{parentName:"ol"},"should exchange neighbor packets.")),(0,r.kt)("p",null,"Consensus in the Polkadot Host is achieved during the execution of two different procedures,\nblock-production and finality. The Polkadot Host must run these procedures if (and only if) it is\nrunning on a validator node."),(0,r.kt)("p",null,"Additional information on each of these requirements can be found\n",(0,r.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#sect-node-full"},"here"),"."),(0,r.kt)("h2",{id:"diagram"},"Diagram"),(0,r.kt)("p",null,"Below is a diagram that displays the Polkadot host surrounding the Polkadot runtime. Think of the\nruntime (in white) as a component that can be inserted, swapped out, or removed entirely. While the\nparts in grey are stable and can not change without an explicit hard fork."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot host",src:o(50446).Z,width:"923",height:"1018"})),(0,r.kt)("h2",{id:"code-executor"},"Code Executor"),(0,r.kt)("p",null,"The Polkadot Host executes the calls of Runtime entrypoints inside a Wasm Virtual Machine (VM),\nwhich in turn provides the Runtime with access to the Polkadot Host API. This part of the Polkadot\nHost is referred to as the Executor. For additional technical implementation details, check out\n",(0,r.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/#sect-code-executor"},"this section")," of the Polkadot Spec."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot Host Protocol Specification")," - Incubator for the\nPolkadot Host spec, including tests."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/gossamer"},"Gossamer: A Go implementation of the Polkadot Host")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/kagome"},"Kagome - C++ implementation of Polkadot Host"))))}u.isMDXComponent=!0},50446:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/updated_pre-d5849e650527f0dc796f8cad044d1f35.png"}}]);