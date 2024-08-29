"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1710],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>g});var n=a(96540);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},86871:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(58168),o=a(98587),r=(a(96540),a(15680)),i=["components"],l={id:"build-guides-coretime-start",title:"Getting Started - Intro to the Polkadot SDK",sidebar_label:"Intro to the Polkadot SDK",description:"Introduction to the Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../build-guides-coretime-start"},s=void 0,p={unversionedId:"build/build-guides-coretime-start",id:"build/build-guides-coretime-start",title:"Getting Started - Intro to the Polkadot SDK",description:"Introduction to the Polkadot SDK",source:"@site/../docs/build/build-guides-coretime-start.md",sourceDirName:"build",slug:"/build-guides-coretime-start",permalink:"/docs/build-guides-coretime-start",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1715843874,formattedLastUpdatedAt:"May 16, 2024",frontMatter:{id:"build-guides-coretime-start",title:"Getting Started - Intro to the Polkadot SDK",sidebar_label:"Intro to the Polkadot SDK",description:"Introduction to the Polkadot SDK",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../build-guides-coretime-start"},sidebar:"docs",previous:{title:"Install Dependencies",permalink:"/docs/build-guides-install-deps"},next:{title:"Parachain Template Guide",permalink:"/docs/build-guides-template-basic"}},d={},c=[{value:"Using the Polkadot SDK",id:"using-the-polkadot-sdk",level:2},{value:"Deploying on a Core",id:"deploying-on-a-core",level:2},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Deployment Example - Adder Collator",id:"deployment-example---adder-collator",level:3},{value:"OpenZeppelin Templates &amp; Guides",id:"openzeppelin-templates--guides",level:2},{value:"Polkadot SDK Parachain Template",id:"polkadot-sdk-parachain-template",level:2}],u={toc:c},m="wrapper";function g(e){var t=e.components,a=(0,o.A)(e,i);return(0,r.yg)(m,(0,n.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"This section is under construction and moving! (Expect Chaos)",type:"warning"}),(0,r.yg)("admonition",{title:"Not a production ready guide.",type:"warning"},(0,r.yg)("p",{parentName:"admonition"},"Agile coretime is only for the Kusama and testnet networks at the moment, and is not yet deployed on\nPolkadot. These guides are ",(0,r.yg)("strong",{parentName:"p"},"not")," production ready due to the moving nature of these features.")),(0,r.yg)("h2",{id:"using-the-polkadot-sdk"},"Using the Polkadot SDK"),(0,r.yg)("p",null,"At first glance, the Polkadot SDK can be rather overwhelming, and in a way it is - it packs a lot of\ntech into one place. The Polkadot SDK used to be overarching ",(0,r.yg)("strong",{parentName:"p"},"three")," repositories:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html#polkadot"},(0,r.yg)("strong",{parentName:"a"},"Polkadot"))," -\nWhich for a time, included both the client implementation and runtime, until the runtime was moved\nto the Polkadot Fellows organization."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html#substrate"},(0,r.yg)("strong",{parentName:"a"},"Substrate"))," -\nThe underlying, core primitives and libraries for building blockchains (any blockchain, not just\none for Polkadot). Much of Polkadot is built with Substrate!"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html#cumulus"},(0,r.yg)("strong",{parentName:"a"},"Cumulus"))," -\nA set of libraries and tools which pertain specifically with connecting blockchains to Polkadot,\nknown as parachains.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"For an in-depth dive into the monorepo, it is highly recommended that you look into the\n",(0,r.yg)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/polkadot_sdk_docs/polkadot_sdk/index.html"},"Polkadot SDK Docs, which explains everything."))),(0,r.yg)("admonition",{title:"What is a task?",type:"info"},(0,r.yg)("p",{parentName:"admonition"},'You might see the term "task" referenced quite a bit, but in most cases, it refers to a process\nutilizing Polkadot\'s compute. This could be a parachain or any other computational process, provided\nthat it adheres to the Polkadot protocol.'),(0,r.yg)("p",{parentName:"admonition"},"The full definition can be found ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime#task"},"here"),".")),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Reserving")," a ",(0,r.yg)("a",{parentName:"li",href:"/docs/glossary#paraid"},(0,r.yg)("inlineCode",{parentName:"a"},"ParaId")),", where you will upload your runtime and\ngenesis state."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Compiling")," the runtime (written in Rust) to a ",(0,r.yg)("a",{parentName:"li",href:"/docs/learn-wasm"},"WebAssembly")," blob,\nthereby defining how your state transitions from one state to the next. This runtime is created\nusing the Polkadot SDK."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Ensure")," your chain spec is viable and ready to be deployed as a live, working parachain."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Generating")," your genesis state and wasm."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Obtaining")," a core, most likely through a\n",(0,r.yg)("a",{parentName:"li",href:"/docs/learn-guides-coretime-marketplaces"},"Coretime marketplace"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Assigning")," that core to your",(0,r.yg)("a",{parentName:"li",href:"/docs/glossary#paraid"}," ",(0,r.yg)("inlineCode",{parentName:"a"},"ParaId")),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Ensuring")," you have at least one honest, synced collator for your task")),(0,r.yg)("h2",{id:"deploying-on-a-core"},"Deploying on a Core"),(0,r.yg)("p",null,"Once you have your runtime and pallets developed, you will be able to deploy it on a\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime#core"},"core"),", which is how one utilizes the shared security of the\nKusama network. One does so by:"),(0,r.yg)("mermaid",{value:"%%{\n init: {\n 'theme': 'base',\n 'themeVariables': {\n 'fontFamily': 'Unbounded',\n 'primaryColor': '#E6007A',\n 'fontSize': '16px',\n 'primaryTextColor': '#fff',\n 'primaryBorderColor': '#7C0000',\n 'lineColor': '#140523',\n 'secondaryColor': '#552BBF',\n 'tertiaryColor': '#fff'\n }\n }\n}%%\nflowchart TD\n    subgraph GA[\"Generate Artifacts\"]\n        direction LR\n        A[\"Creating a runtime\"]--\x3eB[\"Compiling to Wasm\"]--\x3eC[\"Generate Genesis State\"]\n    end\n\n    subgraph PC[\"Procure ParaId & Core\"]\n        direction LR\n        PARAID[\"Reserve ParaId\"]\n        PARAID--\x3eD[\"Buy Bulk Coretime\"]\n        PARAID--\x3eE[\"Issue On-Demand Coretime Extrinsic\"]\n    end\n\n\n    subgraph DEP[\"Deploying\"]\n        direction LR\n        F[\"Register artifacts to ParaId\"]--\x3eassign[\"Assign Core\"]--\x3eG[\"Sync collator\"]--\x3eH[\"Begin generating blocks!\"]\n    end\n\nGA--\x3ePC\nPC--\x3eDEP"}),(0,r.yg)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.yg)("p",null,"Make sure you have everything you need for your target system\n",(0,r.yg)("a",{parentName:"p",href:"/docs/build-guides-install-deps"},"here.")),(0,r.yg)("h3",{id:"deployment-example---adder-collator"},"Deployment Example - Adder Collator"),(0,r.yg)("p",null,"Try out the above by deploying the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-guides-coretime-parachains"},'adder collator, a very simple "counter" parachain implementation.'),"."),(0,r.yg)("h2",{id:"openzeppelin-templates--guides"},"OpenZeppelin Templates & Guides"),(0,r.yg)("p",null,"OpenZeppelin offers a\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/polkadot-generic-runtime-template"},"generic parachain template"),",\nwhich has support for:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Proxy Pallet"),(0,r.yg)("li",{parentName:"ul"},"Multisig Pallet"),(0,r.yg)("li",{parentName:"ul"},"Governance support - a treasury, referenda (OpenGov!), and assets configuration"),(0,r.yg)("li",{parentName:"ul"},"Collation/Parachain Support"),(0,r.yg)("li",{parentName:"ul"},"XCM (Cross Consensus Messaging) Configuration and Support")),(0,r.yg)("p",null,"For more information, check their\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.openzeppelin.com/substrate-runtimes/1.0.0/"},"Substrate parachain runtime guide.")),(0,r.yg)("h2",{id:"polkadot-sdk-parachain-template"},"Polkadot SDK Parachain Template"),(0,r.yg)("p",null,"If you wish to the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/templates/parachain"},"Polkadot SDK's Parachain template"),",\nplease follow the ",(0,r.yg)("a",{parentName:"p",href:"/docs/build-guides-template-basic"},"Template to Core guide.")))}g.isMDXComponent=!0}}]);