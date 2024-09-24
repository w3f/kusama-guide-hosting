"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6993],{5596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var s=r(74848),i=r(28453);const n={id:"learn-xcm-docs-overview-architecture",title:"The XCM Architecture",sidebar_label:"Architecture",description:"The XCM Architecture.",keywords:["xcm","cross-consensus messaging","xcvm","architecture"],slug:"../overview-architecture"},c="Architecture",o={id:"learn/xcm/overview/learn-xcm-docs-overview-architecture",title:"The XCM Architecture",description:"The XCM Architecture.",source:"@site/../docs/learn/xcm/overview/architecture.md",sourceDirName:"learn/xcm/overview",slug:"/learn/xcm/overview-architecture",permalink:"/docs/learn/xcm/overview-architecture",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849e3,frontMatter:{id:"learn-xcm-docs-overview-architecture",title:"The XCM Architecture",sidebar_label:"Architecture",description:"The XCM Architecture.",keywords:["xcm","cross-consensus messaging","xcvm","architecture"],slug:"../overview-architecture"},sidebar:"docs",previous:{title:"The XCVM",permalink:"/docs/learn/xcm/overview-xcvm"},next:{title:"Quickstart",permalink:"/docs/learn/xcm/quickstart"}},a={},l=[{value:"Executor",id:"executor",level:2},{value:"Builder",id:"builder",level:2},{value:"Pallet",id:"pallet",level:2},{value:"Simulator",id:"simulator",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,s.jsxs)(t.p,{children:["XCM is a ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/xcm-format",children:"format"}),". Anyone can create an implementation of\nthe XCVM to interpret said format."]}),"\n",(0,s.jsxs)(t.p,{children:["Parity Technologies maintains a Rust implementation, primarily for\n",(0,s.jsx)(t.a,{href:"https://substrate.io/",children:"Substrate"}),"-based chains in the ",(0,s.jsx)(t.a,{href:"https://polkadot.network/",children:"Polkadot"}),"\necosystem. It is this implementation that we use throughout this documentation."]}),"\n",(0,s.jsxs)(t.p,{children:["All the code lives in the\n",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm",children:"Polkadot repo"}),". The main\nstructure is as follows:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/src",children:"XCM"}),": Defines the\nfundamental constructs used in XCM and an enum with all the instructions available."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-executor/src",children:"Executor"}),":\nImplements the XCVM, capable of executing XCMs. Highly configurable."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-builder/src",children:"Builder"}),":\nOffers common configuration building blocks for the executor."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/pallet-xcm/src",children:"Pallet"}),":\nFRAME pallet that provides extrinsics for interacting with the XCM executor, as well as specific\nXCM programs, such as teleports and reserve asset transfers."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-simulator/example/src",children:"Simulator"}),":\nAllows for testing of XCM programs."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"executor",children:"Executor"}),"\n",(0,s.jsx)(t.p,{children:"The XCM executor is responsible for interpreting and executing XCM messages. It is the core engine\nthat processes and handles XCM instructions, ensuring that they are carried out accurately and in\nthe correct order. The XCM executor follows the Cross-Consensus Virtual Machine (XCVM) specification\nand can be extended, customized, or even replaced with an alternative construct that adheres to the\nXCVM spec."}),"\n",(0,s.jsx)(t.h2,{id:"builder",children:"Builder"}),"\n",(0,s.jsxs)(t.p,{children:["The XCM executor is highly configurable. XCM builder provides building blocks people can use to\nconfigure their executor according to their needs. Many of these building blocks will be explained\nin the ",(0,s.jsx)(t.a,{href:"/docs/learn/xcm/config-deep-dive",children:"Config Deep Dive"})," chapter. They cover common use-cases but are\nnot meant to be exhaustive. It's very easy to build your own building blocks for your specific\nconfiguration when needed, using these as examples."]}),"\n",(0,s.jsx)(t.h2,{id:"pallet",children:"Pallet"}),"\n",(0,s.jsxs)(t.p,{children:["The XCM pallet is a ",(0,s.jsx)(t.a,{href:"https://docs.substrate.io/quick-start/substrate-at-a-glance/",children:"FRAME"})," pallet\nthat can be used to execute XCMs locally or send them to a different system. It also has extrinsics\nfor specific use cases such as teleporting assets or doing reserve asset transfers, which we'll talk\nabout later. It's the glue between XCM and FRAME, which is highly used in the Polkadot ecosystem."]}),"\n",(0,s.jsx)(t.h2,{id:"simulator",children:"Simulator"}),"\n",(0,s.jsx)(t.p,{children:"The simulator allows for testing XCMs fast, without needing to boot up several different nodes in a\nnetwork, or test in production. It's a very useful tool which we'll use throughout this document to\nbuild and test different XCMs."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>o});var s=r(96540);const i={},n=s.createContext(i);function c(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);