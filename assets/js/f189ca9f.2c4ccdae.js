"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5312],{6026:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=t(74848),s=t(28453);const o={id:"learn-spree",title:"SPREE",sidebar_label:"SPREE",description:"Fundamentals of SPREE.",keywords:["execution","SPREE","wasm","runtime"],slug:"../learn-spree"},i=void 0,r={id:"learn/learn-spree",title:"SPREE",description:"Fundamentals of SPREE.",source:"@site/../docs/learn/learn-spree.md",sourceDirName:"learn",slug:"/learn-spree",permalink:"/docs/learn-spree",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-spree",title:"SPREE",sidebar_label:"SPREE",description:"Fundamentals of SPREE.",keywords:["execution","SPREE","wasm","runtime"],slug:"../learn-spree"},sidebar:"docs",previous:{title:"Future Implementations",permalink:"/docs/learn-future-implementations-index"},next:{title:"Elastic Scaling",permalink:"/docs/learn-elastic-scaling"}},l={},c=[{value:"Origin",id:"origin",level:2},{value:"What is a SPREE module?",id:"what-is-a-spree-module",level:2},{value:"Why?",id:"why",level:2},{value:"Example",id:"example",level:2}];function h(e){const a={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:'Shared Protected Runtime Execution Enclaves (SPREE) sometimes referred to as "trust wormholes," are\nfragments of logic comparable to runtime modules in Substrate, but live on the relay chain and maybe\nopted into by parachains.'}),"\n",(0,n.jsx)(a.p,{children:"SPREE in brief was described with the following properties and functions:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Parachains can opt-in to special runtime logic fragments (like smart contracts)."}),"\n",(0,n.jsxs)(a.li,{children:["These fragments have their own storage and own ",(0,n.jsx)(a.a,{href:"/docs/learn-xcm",children:"XCM"})," endpoint."]}),"\n",(0,n.jsx)(a.li,{children:"All instances across parachains have identical logic."}),"\n",(0,n.jsx)(a.li,{children:"It executes alongside parachain logic."}),"\n",(0,n.jsx)(a.li,{children:"Protected: storage can not be altered by parachain logic; messages can not be faked from them by\nparachains."}),"\n"]}),"\n",(0,n.jsx)(a.h2,{id:"origin",children:"Origin"}),"\n",(0,n.jsxs)(a.p,{children:["On 28 March, 2019 u/Tawaren, a member of the Polkadot community, made a post on\n",(0,n.jsx)(a.a,{href:"https://www.reddit.com/r/dot/",children:"r/dot"}),' called "SmartProtocols Idea" and laid out a proposal for\n',(0,n.jsx)(a.a,{href:"https://www.reddit.com/r/dot/comments/b6kljn/smartprotocols_idea/",children:"Smart Protocols"}),". The core\ninsight of the post was that XCMP had a complication in that it was difficult to verify and prove\ncode was executed on a parachain without trust. A solution was to install the SmartProtocols in the\nrelay chain that would be isolated blobs of code with their own storage per instance that could only\nbe changed through an interface with each parachain. SmartProtocols are the precursor to SPREE."]}),"\n",(0,n.jsx)(a.h2,{id:"what-is-a-spree-module",children:"What is a SPREE module?"}),"\n",(0,n.jsxs)(a.p,{children:["SPREE modules are fragments of logic (in concrete terms they are blobs of\n",(0,n.jsx)(a.a,{href:"/docs/learn-wasm",children:"WebAssembly"})," code) that are uploaded onto Polkadot through a governance mechanism or\nby parachains. Once the blob is uploaded to the relay chain, all other parachains can decide to\nopt-in to the logic. The SPREE module would retain its own storage independent of the parachain, but\nwould be callable through an interface with the parachain. Parachains will send messages to the\nSPREE module synchronously."]}),"\n",(0,n.jsx)(a.p,{children:"SPREE modules are important to the overall XCMP architecture because they give a guarantee to the\ncode that will be executed on destination parachains. While XCMP guarantees the delivery of a\nmessage, it does not guarantee what code will be executed, i.e. how the receiving parachain will\ninterpret the message. While XCMP accomplishes trustless message passing, SPREE is the trustless\ninterpretation of the message and a key part of the usefulness of XCMP."}),"\n",(0,n.jsx)(a.p,{children:"SPREE modules are like recipes in cookbooks. For example, if we give an order to a cook to make a\nsouffl\xe9, and we\u2019re decently confident in the ability of the cook, we have a vague idea of what will\nbe made but no actual surety of how it will be made. However, let\u2019s say that a cook has the \u201cSouffl\xe9\nMaker\u2019s Manual\u201d on their bookshelf and has committed themselves to only make souffles from this\nbook. Now we can also consult the same book that the cook has, and we have a precise understanding\nof what will happen when we tell the cook to make a souffl\xe9. In this example, \u201cmake a souffl\xe9\u201d was\nthe message in XCMP and the cookbook was the SPREE module."}),"\n",(0,n.jsx)(a.p,{children:"In concrete terms, SPREE modules could be useful for various functionality on Polkadot. One\nsuggested use case of SPREE modules is for a trustless decentralized exchange that is offered as\nfunctionality to any parachain without any extra effort from parachain developers. One can imagine\nthis working by having a SPREE module that exposes the interface for the incrementing and\ndecrementing of balances of various assets based on a unique identifier."}),"\n",(0,n.jsx)(a.h2,{id:"why",children:"Why?"}),"\n",(0,n.jsx)(a.p,{children:"Sending messages across parachains in XCMP only ensures that the message will be delivered but does\nnot specify the code that will be executed, or how the message will be interpreted by the receiving\nparachain. There would be ways around this such as requesting a verifiable receipt of the execution\nfrom the receiving parachain, but in the naked case, the other parachain would have to be trusted.\nHaving shared code that exists in appendices that the parachain can opt-in to resolves the need for\ntrust and makes the execution of the appendices completely trustless."}),"\n",(0,n.jsx)(a.p,{children:"SPREE would be helpful to ensure that the same logic is shared between parachains in the SPREE\nmodules. An especially relevant use case would revolve around the use of token transfers across\nparachains in which it is important that the sending and receiving parachains agree about how to\nchange the total supply of tokens and a basic interface."}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"spree example",src:t(26644).A+"",width:"345",height:"354"})}),"\n",(0,n.jsx)(a.p,{children:"The diagram above is a simplification of the Polkadot system."}),"\n",(0,n.jsx)(a.p,{children:'In this diagram, we see that the Wasm code for SPREE module "X" has been uploaded to the relay\nchain. The two cylinders "A" and "B" represent two distinct parachains that have both opted-in to\nthis SPREE module creating two distinct instances of it with their own XCMP endpoints "A.X" and\n"B.X".'}),"\n",(0,n.jsx)(a.p,{children:'In the example, we assume that this SPREE module "X" contains the functionality for incrementing or\ndecrementing the balance of a particular asset that is unique to this module.'}),"\n",(0,n.jsx)(a.p,{children:"By initiating a transaction at A.X to decrease a particular balance by 1, a message over XCMP can be\ntrustlessly sent to B.X to increase a balance by 1."}),"\n",(0,n.jsx)(a.p,{children:"Collators, represented as the green triangle are responsible for relaying this message from\nparachain A to parachain B, as well as maintaining the storage for each particular instance of A.X\nand B.X for their respective parachains. They provide proofs of valid state transitions to the Relay\nChain validators represented as blue diamonds."}),"\n",(0,n.jsxs)(a.p,{children:["Validators can validate the correct state transitions of SPREE modules A.X and B.X by being provided\nwith the previous state root of the SPREE module instances, the data of the XCMP message between the\ninstances, and the next state root of the instance. They do this validation by checking it against\nthe ",(0,n.jsx)(a.code,{children:"validate"})," function as provided by the SPREE module API. Collators are expected to be able to\nprovide this information to progress their parachains."]})]})}function d(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},26644:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/spree_module-a8eefaaf0abf97f465af31069d8856ff.png"},28453:(e,a,t)=>{t.d(a,{R:()=>i,x:()=>r});var n=t(96540);const s={},o=n.createContext(s);function i(e){const a=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:a},e.children)}}}]);