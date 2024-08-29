"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5144],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>p});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(t),g=a,p=h["".concat(l,".").concat(g)]||h[g]||u[g]||i;return t?r.createElement(p,o(o({ref:n},d),{},{components:t})):r.createElement(p,o({ref:n},d))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},18889:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var r=t(58168),a=t(98587),i=(t(96540),t(15680)),o=["components"],s={id:"learn-bridge-hub",title:"Bridge Hub",sidebar_label:"Bridge Hub",description:"Overview of the Bridge Hub System Parachain.",keywords:["Bridge","XCM","Bridge Hub"],slug:"../learn-bridge-hub"},l=void 0,c={unversionedId:"learn/learn-bridge-hub",id:"learn/learn-bridge-hub",title:"Bridge Hub",description:"Overview of the Bridge Hub System Parachain.",source:"@site/../docs/learn/learn-bridge-hub.md",sourceDirName:"learn",slug:"/learn-bridge-hub",permalink:"/docs/learn-bridge-hub",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1724864659,formattedLastUpdatedAt:"Aug 28, 2024",frontMatter:{id:"learn-bridge-hub",title:"Bridge Hub",sidebar_label:"Bridge Hub",description:"Overview of the Bridge Hub System Parachain.",keywords:["Bridge","XCM","Bridge Hub"],slug:"../learn-bridge-hub"},sidebar:"docs",previous:{title:"Bridges",permalink:"/docs/learn-bridges"},next:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-dot-ksm-bridge"}},d={},h=[{value:"Trustless Bridges on Bridge Hub",id:"trustless-bridges-on-bridge-hub",level:2},{value:"On-chain Bridge Components",id:"on-chain-bridge-components",level:3},{value:"Offchain Bridge Components",id:"offchain-bridge-components",level:3}],u={toc:h},g="wrapper";function p(e){var n=e.components,t=(0,a.A)(e,o);return(0,i.yg)(g,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"The primary functionality of the Kusama\nrelay chain is to secure the parachains and facilitate secure communication between them. All other\nfunctionalities like asset transfers, governance, identities and bridging (a potentially resource\nintensive task) can benefit from operating separately on ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-system-chains"},"system parachains"),". System parachains are\nresponsible for delegating functionality away from the relay chain for peformance reasons, taking\nadvantage of the inherent parallelization the architecture of Polkadot provides."),(0,i.yg)("p",null,"The Bridge Hub system parachain operates on\nKusama, and is responsible for faciliating\nbridges to the wider Web3 space. It contains the required bridge\n",(0,i.yg)("a",{parentName:"p",href:"/docs/glossary#pallet"},"pallets")," in its runtime, which enable trustless bridging with other\nblockchain networks like Polkadot and Ethereum\n. The Bridge Hub uses the native token of the relay chain,\nKSM."),(0,i.yg)("h2",{id:"trustless-bridges-on-bridge-hub"},"Trustless Bridges on Bridge Hub"),(0,i.yg)("p",null,"A two-way trustless bridge between chains A and B can be viewed as two one-way bridges (A \u2192 B and B\n\u2192 A). Hence, the design of a two-way bridge can be explained in terms of a one-way bridge with a\nsource and a target chain. Any bridge operating on the Bridge Hub will have on-chain (pallets) and\noffchain (relayers) components."),(0,i.yg)("p",null,"Examples of trustless bridges on Bridge Hub include:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Snowfork, a decentralized bridge between Polkadot and Ethereum"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/learn-dot-ksm-bridge"},"The Polkadot-to-Kusama Bridge"))),(0,i.yg)("h3",{id:"on-chain-bridge-components"},"On-chain Bridge Components"),(0,i.yg)("p",null,"On-chain bridge components are modules (pallets or smart contracts) that are deployed on the chain's\nruntime. Modules that track the finality of the source chain are required to be deployed on the\ntarget chain, while the modules that deal with cross-chain messaging need to be deployed on both,\nsource and target chains."),(0,i.yg)("p",null,"Operating a bridge between chains that finalize through GRANDPA consensus is straight-forward. A\nGRANDPA light client of the source chain built into the target chain's runtime provides a \"source of\ntruth\" about the source chain's finality. For instance, Polkadot Bridge Hub runs an on-chain light\nclient of Kusama which uses GRANDPA consensus and infers the finality of all the transactions on\nKusama and its parachains."),(0,i.yg)("p",null,"Operating a bridge between chains with different consensus models can require a sophisticated\ndesign. For instance, Kusama Bridge Hub\nneeds to run an on-chain light client of Ethereum to infer the finality of transactions on Ethereum\nchain. On the other hand, running a GRANDPA light client through smart contracts on Ethereum is\npossible but can be very expensive. Hence, BEEFY (Bridge Efficiency Enabling Finality Yielder)\nconsensus layer has been added to Kusama\nwhich enables a cost effective solution for operating a trustless bridge with Ethereum. Trustless\nbridges to chains like Solana, Cosmos, Avalanche, NEAR etc. would require custom pallets to be\ndeployed on Kusama Bridge Hub."),(0,i.yg)("p",null,"There are also on-chain components that are responsible for queuing messages at the source chain and\nfor receiving the messages proofs at the target chain. The messages are sent through a particular\n",(0,i.yg)("strong",{parentName:"p"},"lane"),", where they are guaranteed to be received in the same order they are sent. On\nKusama Bridge Hub, the messages are in XCM\nformat and an XCM executor is used to dispatch them."),(0,i.yg)("h3",{id:"offchain-bridge-components"},"Offchain Bridge Components"),(0,i.yg)("p",null,"Offchain bridge components are separate processes, called relayers. Relayers are connected both to\nthe source chain and target chain nodes. For instance, the task of relayer between chains that run\non GRANDPA consensus is to submit source chain GRANDPA justifications and their corresponding\nheaders to the Bridge GRANDPA Finality Pallet deployed at the target chain. For that, the relayer\nsubscribes to the source chain GRANDPA justifications stream and submits every new justification it\nsees to the target chain GRANDPA light client."),(0,i.yg)("p",null,"Messages between chains are relayed through the relayers, which involve messages delivery relay and\ndelivery confirmation relay. For more information on relayers and the Bridge Hub design, read\nthrough the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/master/bridges/docs/high-level-overview.md"},"high level documentation on bridges on the Polkadot-SDK repository"),"."))}p.isMDXComponent=!0}}]);