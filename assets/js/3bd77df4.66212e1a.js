"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3976],{15680:(e,t,a)=>{a.d(t,{xA:()=>c,yg:()=>u});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=d(a),p=r,u=g["".concat(l,".").concat(p)]||g[p]||h[p]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},3514:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(96540),r=a(20053),i=a(84142),o=a(75489),s=a(16654),l=a(21312);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){var t=e.href,a=e.children;return n.createElement(o.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer)},a)}function g(e){var t=e.href,a=e.icon,i=e.title,o=e.description;return n.createElement(c,{href:t},n.createElement("h2",{className:(0,r.A)("text--truncate",d.cardTitle),title:i},a," ",i),o&&n.createElement("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:o},o))}function h(e){var t,a=e.item,r=(0,i._o)(a);return r?n.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function p(e){var t,a,r=e.item,o=(0,s.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.cC)(null!=(t=r.docId)?t:void 0);return n.createElement(g,{href:r.href,icon:o,title:r.label,description:null!=(a=r.description)?a:null==l?void 0:l.description})}function u(e){var t=e.item;switch(t.type){case"link":return n.createElement(p,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function m(e){var t=e.className,a=(0,i.$S)();return n.createElement(y,{items:a.items,className:t})}function y(e){var t=e.items,a=e.className;if(!t)return n.createElement(m,e);var o=(0,i.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},o.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(u,{item:e}))})))}},95686:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=a(58168),r=a(98587),i=(a(96540),a(15680)),o=a(3514),s=["components"],l={id:"learn-bridges",title:"Bridges",sidebar_label:"Bridges",description:"Bridges and Examples of Common Bridges.",keywords:["bridges","cross-chain","bridge methods"],slug:"../learn-bridges"},d=void 0,c={unversionedId:"learn/learn-bridges",id:"learn/learn-bridges",title:"Bridges",description:"Bridges and Examples of Common Bridges.",source:"@site/../docs/learn/learn-bridges.md",sourceDirName:"learn",slug:"/learn-bridges",permalink:"/docs/learn-bridges",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725460864,formattedLastUpdatedAt:"Sep 4, 2024",frontMatter:{id:"learn-bridges",title:"Bridges",sidebar_label:"Bridges",description:"Bridges and Examples of Common Bridges.",keywords:["bridges","cross-chain","bridge methods"],slug:"../learn-bridges"},sidebar:"docs",previous:{title:"Troubleshooting FAQ",permalink:"/docs/build-guides-coretime-troubleshoot"},next:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-dot-ksm-bridge"}},g={},h=[{value:"Trustless Bridges",id:"trustless-bridges",level:2},{value:"On-chain Bridge Components",id:"on-chain-bridge-components",level:2},{value:"via Bridge Pallets",id:"via-bridge-pallets",level:3},{value:"via Smart Contracts",id:"via-smart-contracts",level:3},{value:"via Higher-Order Protocols",id:"via-higher-order-protocols",level:3},{value:"Bitcoin Bridge (XCLAIM &lt;-&gt; Substrate &lt;-&gt; Polkadot)",id:"bitcoin-bridge-xclaim---substrate---polkadot",level:4},{value:"Offchain Bridge Components",id:"offchain-bridge-components",level:2},{value:"Bridge Comparison",id:"bridge-comparison",level:2},{value:"Resources",id:"resources",level:2}],p={toc:h},u="wrapper";function m(e){var t=e.components,a=(0,r.A)(e,s);return(0,i.yg)(u,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Bridges are vital infrastructure, enabling cross-chain communication between technically diverse\nnetworks like Polkadot and Ethereum. Bridges allow these chains to acknowledge and trust each\nother\u2019s finalized states, paving the way for many applications like asset swaps and chain\nmigrations."),(0,i.yg)("p",null,"Current bridge architectures rely on centralized intermediaries, such as multi-signature relayers,\nto validate information passed between chains. This approach introduces additional trust assumptions\nand creates a single point of failure, opening up attack vectors like censorship. Recent history has\nshown how risky this can be \u2014 centralized entities can be compromised or act maliciously. According\nto ",(0,i.yg)("a",{parentName:"p",href:"https://www.chainalysis.com/blog/cross-chain-bridge-hacks-2022/"},"Chainalysis report"),", failures\nin centralized bridges account for over 60% of all crypto hacks, resulting in losses exceeding $2\nbillion. Four of the top five incidents on the ",(0,i.yg)("a",{parentName:"p",href:"https://rekt.news/tr/leaderboard/"},"rekt leaderboard"),"\nare bridge-related hacks. A system\u2019s security is only ",(0,i.yg)("strong",{parentName:"p"},"as strong as its weakest link"),", and bridges\nhave proven to be a critical vulnerability."),(0,i.yg)("admonition",{title:"Purpose of bridging",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Bridges enable Polkadot to communicate with external blockchains such as Bitcoin and Ethereum.\nWithin Polkadot, chains already benefit from secure interoperability. For more information about the\nnative interoperability technology that allows parachains to communicate trustlessly, please see the\ndedicated ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-xcm"},"cross consensus")," page on the Wiki.")),(0,i.yg)("p",null,"Thus, Bridge designs come in various flavors ranging from centralized and trusted to more\ndecentralized and trustless. Polkadot favors the latter bridge designs for its ecosystem."),(0,i.yg)(o.A,{mdxType:"DocCardList"}),(0,i.yg)("h2",{id:"trustless-bridges"},"Trustless Bridges"),(0,i.yg)("p",null,"A two-way trustless bridge between chains A and B can be viewed as two one-way bridges (A \u2192 B and B\n\u2192 A). Hence, the design of a two-way bridge can be explained in terms of a one-way bridge with a\nsource and a target chain. Any trustless bridge will have ",(0,i.yg)("strong",{parentName:"p"},"on-chain and off-chain components"),"."),(0,i.yg)("p",null,"Trustlessness means that users do not need to trust particular individuals or organizations; they\nonly need to trust mathematics, code, cryptography, and protocol. An example of a system which\nimplies a high level of trust would be that of a bridge which is controlled via a multi-signature\nscheme, wherein you must trust the cosignatories."),(0,i.yg)("p",null,"Basic assumptions are always needed in principle when defining a trustless system as a completely\ntrustless setup cannot always be guaranteed."),(0,i.yg)("h2",{id:"on-chain-bridge-components"},"On-chain Bridge Components"),(0,i.yg)("p",null,"Building a trustless bridge can be done through the implementation of the following on-chain\ncomponents (ordered by suggested methodology):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Bridge pallets")," - For Substrate-native chains, use a bridge pallet (e.g.\n",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-dot-ksm-bridge"},"Kusama ",(0,i.yg)("inlineCode",{parentName:"a"},"<->")," Polkadot bridge"),", since both networks' parachains use\nSubstrate)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Smart contracts")," - If the chain is not on Substrate, you should have smart contracts on the\nnon-Substrate chain to bridge (e.g. ",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-snowbridge"},"Snowbridge"),", Ethereum mainnet has a\nbridge smart contract that initiates Eth transactions based on incoming XCMP messages)."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("em",{parentName:"li"},"Higher-order protocols")," - If your chain does not support smart contracts (e.g. Bitcoin), you\nshould use ",(0,i.yg)("a",{parentName:"li",href:"https://eprint.iacr.org/2018/643.pdf"},"XClaim")," or similar protocols to bridge.")),(0,i.yg)("p",null,"On-chain bridge components are modules (usually pallets or smart contracts) deployed on the chain's\nruntime. Modules that track the finality of the source chain are required to be deployed on the\ntarget chain, while the modules that deal with cross-chain messaging need to be deployed on both\nsource and target chains."),(0,i.yg)("p",null,"There are also on-chain components responsible for queuing messages at the source chain and\nreceiving the message proofs at the target chain. The messages are sent through a particular lane,\nwhere they are guaranteed to be received in the same order they are sent. On Bridge Hub, the\nmessages are in XCM format, and an XCM executor is used to dispatch them."),(0,i.yg)("h3",{id:"via-bridge-pallets"},"via Bridge Pallets"),(0,i.yg)("p",null,"Operating a bridge between chains that finalize through GRANDPA consensus is straightforward. A\nGRANDPA light client of the source chain built into the target chain's runtime provides a \"source of\ntruth\" about the source chain's finality. For instance,\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-system-chains#bridge-hub"},"Bridge Hub")," runs an on-chain light client of Kusama which uses\nGRANDPA consensus and infers the finality of all the transactions on Kusama and its parachains."),(0,i.yg)("p",null,"Receiving messages on Polkadot from an external, non-parachain blockchain is possible through a\nSubstrate pallet. The Substrate instance can then be deployed to Polkadot either as a system-level\nparachain (native extension to the core Polkadot software) or as a community-operated parachain."),(0,i.yg)("p",null,"An example of a bridge that would strictly use bridge pallets would be\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-dot-ksm-bridge"},"the Kusama ",(0,i.yg)("inlineCode",{parentName:"a"},"<->")," Polkadot bridge"),", since both use parachains based on\nSubstrate."),(0,i.yg)("p",null,"For the standalone chains that will not have a parachain bridging module (non-Substrate), it will be\nnecessary to deploy bridge contracts."),(0,i.yg)("h3",{id:"via-smart-contracts"},"via Smart Contracts"),(0,i.yg)("p",null,"Given the generality of blockchain platforms with Turing-complete smart contract languages, it is\npossible to bridge Polkadot and any other smart-contract-capable blockchain. For instance,\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-snowbridge"},"Snowbridge")," uses the Polkadot Bridge Hub to run an on-chain light client of\nEthereum to infer the finality of transactions on the Ethereum chain. Running a GRANDPA light client\nthrough smart contracts on Ethereum is possible but expensive. Hence,\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-consensus#bridging-beefy"},"BEEFY consensus layer")," sitting on top of GRANDPA enables a\ncost-effective solution for operating a trustless bridge with Ethereum and other protocols.\nTrustless bridges to chains like Cosmos, Avalanche, NEAR, etc., would require custom pallets to be\ndeployed on Bridge Hub."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"To learn more on how Bitcoin and Ethereum can cooperate and collaborate through Polkadot, check out\nthis explainer video ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=rvoFUiOR3cM"},"here"))),(0,i.yg)("h3",{id:"via-higher-order-protocols"},"via Higher-Order Protocols"),(0,i.yg)("p",null,"Higher-order protocols (like ",(0,i.yg)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/643.pdf"},"XCLAIM"),") can be used to bridge\nbut should only be used when other options are not available. XCLAIM, in particular, requires any\nswappable asset to be backed by a collateral of higher value than the swappable assets, which adds\nadditional overhead."),(0,i.yg)("p",null,"An example of a network that would be well-suited for higher-order protocols would be Bitcoin, since\nit does not support smart contracts, and it's not based on Substrate."),(0,i.yg)("h4",{id:"bitcoin-bridge-xclaim---substrate---polkadot"},"Bitcoin Bridge (XCLAIM <-> Substrate <-> Polkadot)"),(0,i.yg)("p",null,"The Interlay team has written a ",(0,i.yg)("a",{parentName:"p",href:"https://spec.interlay.io/"},"specification")," on a Bitcoin bridge that\nis based on the ",(0,i.yg)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/643.pdf"},"XCLAIM")," design paper. The protocol enables a\ntwo-way bridge between Polkadot and Bitcoin. It allows holders of BTC to issue iBTC in Polkadot and\nholders of iBTC to redeem BTC on the Bitcoin chain."),(0,i.yg)("p",null,"The Bitcoin bridge, as documented in the specification, is composed of two logically different\ncomponents:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The XCLAIM component maintains all accounts that own iBTC."),(0,i.yg)("li",{parentName:"ul"},"The BTC-Relay verifies the Bitcoin state when a new transaction is submitted.")),(0,i.yg)("p",null,"For full details on how it works, please refer to the specification."),(0,i.yg)("p",null,"There is now a\n",(0,i.yg)("a",{parentName:"p",href:"https://app.interlay.io/btc?tab=issue"},"working implementation and mainnet bridge available"),"."),(0,i.yg)("h2",{id:"offchain-bridge-components"},"Offchain Bridge Components"),(0,i.yg)("p",null,"Offchain bridge components are separate processes called relayers. Relayers are connected both to\nthe source chain and target chain nodes. For instance, the task of relayer between chains that run\non GRANDPA consensus is to submit source chain GRANDPA justifications and their corresponding\nheaders to the Bridge GRANDPA Finality Pallet deployed at the target chain. For that, the relayer\nsubscribes to the source chain GRANDPA justifications stream and submits every new justification to\nthe target chain GRANDPA light client."),(0,i.yg)("p",null,"Messages between chains are relayed through the relayers, which involve messages delivery relay and\ndelivery confirmation relay. For more information on relayers and the Bridge Hub design, read\nthrough the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/master/bridges/docs/high-level-overview.md"},"High-level bridge documentation on the Polkadot-SDK repository"),"."),(0,i.yg)("h2",{id:"bridge-comparison"},"Bridge Comparison"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/docs/learn-snowbridge"},"Snowbridge")," and ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-hyperbridge"},"Hyperbridge")," are two trustless\nbridges that connect Polkadot with other ecosystems. Here below is a main technical comparison\nbetween the two."),(0,i.yg)("admonition",{title:"Tokens sent through different bridges are different",type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"Unless specific logic is implemented, WETH sent through Snowbridge cannot be sent back using\nHyperbridge, and ",(0,i.yg)("em",{parentName:"p"},"vice versa"),". ",(0,i.yg)("strong",{parentName:"p"},"Sending tokens using different bridges might lead to loss of\nfunds."))),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:"center"},"Snowbridge"),(0,i.yg)("th",{parentName:"tr",align:"center"},"Hyperbridge"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"Ethereum only",(0,i.yg)("sup",null,"1"),"."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Multichain.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"Ethereum light client on ",(0,i.yg)("a",{parentName:"td",href:"/docs/learn-system-chains#bridge-hub"},"Bridge Hub System Chain"),(0,i.yg)("sup",null,"2")," and Polkadot light client on Ethereum smart contract."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Own parachain.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("a",{parentName:"td",href:"/docs/learn-DOT"},"DOT token"),"."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Hyperbridge native token.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},(0,i.yg)("a",{parentName:"td",href:"/docs/learn-snowbridge#random-sampling-beefy"},"Random-sampling BEEFY")," for prover."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Zero-knowledge Proofs.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"Simple codebase but complex analysis by the verifier."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Complex codebase, but simple analysis by the verifier.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"Low-spec hardware for prover, permissionless."),(0,i.yg)("td",{parentName:"tr",align:"center"},"High-spec hardware for prover, permissionless but somewhat permissioned due to the ZK-based nature.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"Possible high-level decentralization for the prover."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Prover decentralization possible but probably by removing dependency on ZK circuits through BLS (",(0,i.yg)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/BLS_digital_signature"},"Boneh\u2013Lynn\u2013Shacham"),") version of BEEFY and BLS precompiles on Ethereum.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"High latency as two epochs (",(0,i.yg)("a",{parentName:"td",href:"https://app.snowbridge.network/status"},"tens of minutes"),") are needed on Ethereum to achieve unpredictable randomness to update the Polkadot's state."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Low latency, 5-7 minutes on reference hardware.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"No dependency on external libraries."),(0,i.yg)("td",{parentName:"tr",align:"center"},"Dependency on external libraries due to ZK-based nature. Such libraries include ",(0,i.yg)("a",{parentName:"td",href:"https://eprint.iacr.org/2019/953.pdf"},"PLONK"),".")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:"center"},"Live."),(0,i.yg)("td",{parentName:"tr",align:"center"},"On Testnet.")))),(0,i.yg)("sup",null,"1")," WETH sent through different bridges are different. Unless specific logic is implemented, WETH sent through Snowbridge cannot be sent back using Hyperbridge.",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("sup",null,"2"),' Because Snowbridge is deployed on a system chain, Snowbridge WETH can be considered as the "official" WETH on Polkadot (although this must not be interpreted as a positive sign for Snowbridge and negative sign for Hyperbridge).',(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.snowbridge.network/"},"Snowbridge - a trustless, decentralized bridge between Polkadot and Ethereum")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/paritytech/parity-bridges-common"},"Parity Bridges Common Resources")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/ChainSafe/ChainBridge"},"Substrate/Ethereum Bridge")," - ChainSafe and Centrifuge\nwere awarded a grant in W3F Grants\n",(0,i.yg)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5"),"\nto build a Substrate to Ethereum two-way bridge."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://docs.interlay.io/#//"},"iBTC (Bitcoin <-> Polkadot Bridge)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/bifrost-codes/bifrost"},"EOS Bridge")," - The Bifrost team was awarded a grant in\nW3F Grants\n",(0,i.yg)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5"),"\nto build a bridge to EOS."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/ChorusOne/tendermint-light-client"},"Tendermint Bridge")," - ChorusOne was awarded\na grant in\n",(0,i.yg)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5"),"\nto build a GRANDPA light client in Tendermint."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://app.interlay.io/btc?tab=issue"},"Interlay BTC Bridge")," - The Interlay team was awarded a\ngrant in W3F grants\n",(0,i.yg)("a",{parentName:"li",href:"https://medium.com/web3foundation/web3-foundation-grants-wave-5-recipients-2205f4fde096"},"Wave 5"),"\nto build a trust-minimized BTC bridge."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/chainx-org/ChainX/tree/master/xpallets/gateway/bitcoin"},"ChainX BTC Bridge")," -\nChainX has implemented a BTC to Substrate bridge for their parachain."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://poa.network/"},"POA Network")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://medium.com/giveth/ethereum-dapp-scaling-poa-network-acee8a51e772"},"Case study")," of POA\nNetwork's implementation of Parity's bridge chain solution."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/hicommonwealth/edgeth_bridge/"},"Edgeth Bridge")," - a bridge from Ethereum to\nEdgeware chain (a Substrate-based chain) is now defunct and not maintained, but it is a good\nexample."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://eprint.iacr.org/2018/643.pdf"},"XCLAIM")," - XCLAIM is a framework for achieving trustless and\nefficient cross-chain exchanges using cryptocurrency-backed assets."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/celer-network/cBridge-contracts"},"Celer cBridge")," - a bridge to transfer assets\nfrom Ethereum & Binance Smart Chain to the Astar Polkadot EVM.")))}m.isMDXComponent=!0}}]);