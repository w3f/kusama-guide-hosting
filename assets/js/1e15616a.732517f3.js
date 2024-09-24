"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3751],{59247:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(74848),a=t(28453);const i={id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"WASM and its Role in Polkadot's Runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},r=void 0,l={id:"learn/learn-wasm",title:"WebAssembly (Wasm)",description:"WASM and its Role in Polkadot's Runtime.",source:"@site/../docs/learn/learn-wasm.md",sourceDirName:"learn",slug:"/learn-wasm",permalink:"/docs/learn-wasm",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081e3,frontMatter:{id:"learn-wasm",title:"WebAssembly (Wasm)",sidebar_label:"WebAssembly (Wasm)",description:"WASM and its Role in Polkadot's Runtime.",keywords:["webassembly","wasm","runtime"],slug:"../learn-wasm"},sidebar:"docs",previous:{title:"Polkadot Host",permalink:"/docs/learn-polkadot-host"},next:{title:"Runtime Upgrades",permalink:"/docs/learn-runtime-upgrades"}},o={},c=[{value:"What is WebAssembly?",id:"what-is-webassembly",level:2},{value:"Why WebAssembly?",id:"why-webassembly",level:2},{value:"Resources",id:"resources",level:2}];function m(e){const s={a:"a",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"WebAssembly is used in Polkadot and Substrate as the compilation target for the runtime."}),"\n",(0,n.jsx)(s.h2,{id:"what-is-webassembly",children:"What is WebAssembly?"}),"\n",(0,n.jsxs)(s.p,{children:["WebAssembly, shortened to ",(0,n.jsx)(s.em,{children:"Wasm"}),", is a binary instruction format for a stack-based virtual machine.\nWasm is designed as a portable target for the compilation of high-level languages like C/C++/Rust,\nenabling deployment on the web for client and server applications."]}),"\n",(0,n.jsx)(s.h2,{id:"why-webassembly",children:"Why WebAssembly?"}),"\n",(0,n.jsx)(s.p,{children:"WebAssembly is a platform-agnostic binary format, meaning it will run the exact instructions across\nwhatever machine it operates on. Blockchains need determinacy to have reliable state transition\nupdates across all nodes in the peer-to-peer network without forcing every peer to run the same\nhardware. Wasm is an excellent fit for reliability among the diverse set of machines. Wasm is both\nefficient and fast. The efficiency means that it can be uploaded onto the chain as a blob of code\nwithout causing too much state bloat while keeping its ability to execute at near-native speeds."}),"\n",(0,n.jsx)(s.h2,{id:"resources",children:"Resources"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://webassembly.org/",children:"WebAssembly.org"})," - WebAssembly homepage that contains a link to the\nspec."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/paritytech/Wasmi",children:"Wasmi"})," - WebAssembly interpreter written in Rust."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/paritytech/parity-Wasm",children:"Parity Wasm"})," - WebAssembly\nserialization/deserialization in Rust."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/paritytech/Wasm-utils",children:"Wasm utils"})," - Collection of Wasm utilities used in\nParity and Wasm contract development."]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(96540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);