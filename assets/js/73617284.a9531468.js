(self.webpackChunk=self.webpackChunk||[]).push([[6730],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var o=a(74165),r=a(15861),n=a(67294),i=a(87152),s=a(30967),l=a(67425);function c(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)((0,o.Z)().mark((function e(t,a,r){var n,l,c,p,d;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return n="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return n="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return n="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return n="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==n){e.next=18;break}return e.abrupt("return");case 18:return c=new i.U(n),e.next=21,s.G.create({provider:c});case 21:p=e.sent,(d=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,o);break;case"precise":(0,l.Precise)(e,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"erasToDays":(0,l.ErasToDays)(e,o,a);break;case"percentage":(0,l.Percentage)(e,o);break;case"permillToPercent":(0,l.PermillToPercent)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var t=e.network,a=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,n.useState)(""),h=p[0],u=p[1];return t=t.toLowerCase(),(0,n.useEffect)((function(){void 0!==l?d(i.toString(),l,t,u):u(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var n=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(){var r;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,u);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(r,l,t,u):u(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{n()}catch(s){console.log(s)}}}),[]),h}},67425:e=>{var t="polkadot",a="kusama",o="statemine",r="statemint",n={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,i,s){var l=void 0;if(i===t||i===r)l=3;else{if(i!==a&&i!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/n[i].precision)?e/n[i].precision+" "+n[i].symbol:(e/n[i].precision).toFixed(l)+" "+n[i].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/n[t].precision+" "+n[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,n,i){var s=void 0;if(i===t||i===r)s=1;else{if(i!==a&&i!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}n((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},71298:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),i=(a(47940),["components"]),s={id:"learn-hyperbridge",title:"Hyperbridge",sidebar_label:"Hyperbridge",description:"Polkadot's Bridge to Ethereum.",keywords:["bridge","polkadot","ethereum"],slug:"../learn-hyperbridge"},l=void 0,c={unversionedId:"learn/learn-hyperbridge",id:"learn/learn-hyperbridge",title:"Hyperbridge",description:"Polkadot's Bridge to Ethereum.",source:"@site/../docs/learn/learn-hyperbridge.md",sourceDirName:"learn",slug:"/learn-hyperbridge",permalink:"/docs/learn-hyperbridge",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1705661980,formattedLastUpdatedAt:"Jan 19, 2024",frontMatter:{id:"learn-hyperbridge",title:"Hyperbridge",sidebar_label:"Hyperbridge",description:"Polkadot's Bridge to Ethereum.",keywords:["bridge","polkadot","ethereum"],slug:"../learn-hyperbridge"}},p={},d=[{value:"Coprocessor Model",id:"coprocessor-model",level:2},{value:"Parachain as Coprocessors",id:"parachain-as-coprocessors",level:3},{value:"Interoperable State Machine Protocol (ISMP)",id:"interoperable-state-machine-protocol-ismp",level:3},{value:"Underlying technologies",id:"underlying-technologies",level:3},{value:"Terminology",id:"terminology",level:2},{value:"State Proofs",id:"state-proofs",level:3},{value:"Consensus Proofs",id:"consensus-proofs",level:3},{value:"Learn More",id:"learn-more",level:2}],h={toc:d},u="wrapper";function m(e){var t=e.components,a=(0,r.Z)(e,i);return(0,n.kt)(u,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{title:"Learn about Parachain and Bridges",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"To fully follow the material on this page, it is recommended to be familiar with the concepts of ",(0,n.kt)("a",{parentName:"p",href:"./learn-parachains"},"Parachain")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"Bridges"),".")),(0,n.kt)("p",null,"Interoperability is the core vision of the Kusama technology. Through years of blockchain development, much effort has been put into making a secure interoperability solution between blockchains."),(0,n.kt)("p",null,"Hyperbridge (short for hyper-scalable bridge) is innovated as a cross-chain solution built as an interoperability coprocessor. Hyperbridge is crafted to scale cryptographically secure, consensus, and state-proof-based interoperability across all blockchains."),(0,n.kt)("h2",{id:"coprocessor-model"},"Coprocessor Model"),(0,n.kt)("p",null,"Ensuring secure cross-chain communication involves the meticulous verification of various aspects, including: ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-consensus"},"Consensus Mechanisms"),", ",(0,n.kt)("a",{parentName:"p",href:"https://research.polytope.technology/consensus-proofs"},"Consensus Faults"),", ",(0,n.kt)("a",{parentName:"p",href:"https://research.polytope.technology/state-machine-proofs"},"State Proofs")," and ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-parachains#state-transitions"},"State Transitions"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"What is a coprocessor?"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("strong",{parentName:"p"},"Coprocessor"),", in the context of hardware, can be referred to a microprocessor designed to supplement the capabilities of the primary processor. For example, GPU is a coprocessor of the CPU to be optimized for graphical and simultaneous computation.")),(0,n.kt)("p",null,"Due to the complexity and expensiveness of the onchain verification process, in coprocessor model, the computation is performed off-chain and the outcomes of the execution, along with cryptographic proofs validating their accuracy, are subsequently presented on-chain."),(0,n.kt)("p",null,"Expanding more about the coprocessor model, it has been applied in other solutions of offloading cryptographic computation as well, particularly, ",(0,n.kt)("a",{parentName:"p",href:"https://orochi.network/blog/Exploring-ZK-Coprocessor-What-Comes-Next"},(0,n.kt)("strong",{parentName:"a"},"Zero-knowledge (ZK) coprocessor"))," or ",(0,n.kt)("a",{parentName:"p",href:"https://www.di.ens.fr/~nitulesc/files/Survey-SNARKs.pdf"},"SNARK circuit"),"."),(0,n.kt)("h3",{id:"parachain-as-coprocessors"},"Parachain as Coprocessors"),(0,n.kt)("p",null,"By leveraging the cost-effective consensus proofs facilitated by ",(0,n.kt)("a",{parentName:"p",href:"https://spec.polkadot.network/sect-finality#sect-grandpa-beefy"},"BEEFY"),", Hyperbridge affirms the legitimacy of all parachain state transitions safeguarded by the network."),(0,n.kt)("p",null,"This capability enables the distribution of the validation workload for consensus, state proofs, and state transition re-execution across various designated ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs/blob/6f29561a4747bbfd95307ce75cd949dfff359e39/text/0001-agile-coretime.md"},"Parachain Cores"),". Hence, Polkadot is utilized by the Hyperbridge as a verifiable computation layer to provide the ",(0,n.kt)("a",{parentName:"p",href:"https://blog.polytope.technology/introducing-hyperbridge-interoperability-coprocessor#full-node-level-security"},'"Full Node Security"')," in cross-chain bridges."),(0,n.kt)("p",null,"Hence, an additional layer of security is provided, allowing Hyperbridge to detect and prevent ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Byzantine_fault"},"Byzantine")," behaviors across connected chains."),(0,n.kt)("h3",{id:"interoperable-state-machine-protocol-ismp"},"Interoperable State Machine Protocol (ISMP)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://blog.polytope.technology/introducing-hyperbridge-interoperability-coprocessor"},"Interoperable State Machine Protocol (ISMP)")," provides a familiar HTTP-like API for developers who want to make cross-chain requests to trigger certain logic on the counterparty chain. It allows making POST requests to send arbitrary data to connected chains, as well as GET requests to read the storage (verified through state proofs) of applications on connected chains."),(0,n.kt)("p",null,"In addition to facilitating cross-chain message passing among connected chains, ISMP also serves as a synchronisation primitive across Hyperbridge's internal state machines. This enables its parachain cores to communicate with each other and delegate tasks."),(0,n.kt)("h3",{id:"underlying-technologies"},"Underlying technologies"),(0,n.kt)("p",null,"Underlying technologies of the Hyperbridge is integrated with:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2019/953.pdf"},"PLONK verifier"),": The PLONK Verifier within Hyperbridge can be likened to a sophisticated security apparatus. It operates akin to an expert detective, meticulously ensuring the legitimacy of every transaction without compromising private details. Continuously enhancing its capabilities, particularly with advancements like UltraPLONK, this integral component plays a pivotal role in maintaining the utmost integrity and confidentiality of cross-chain communications."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://spec.polkadot.network/sect-finality#sect-grandpa-beefy"},"BEEFY consensus"),": The BEEFY (Bridge Efficiency Enabling Finality Yielder) protocol functions as a complementary system to GRANDPA, specifically designed to facilitate efficient bridging between the Polkadot network's relay chain and external, isolated blockchains like Ethereum. Notably, BEEFY addresses the challenge of interoperability with blockchains that were not initially constructed to integrate seamlessly with the Polkadot interchain framework."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/AztecProtocol/barretenberg"},"The Barretenberg backend"),": Within the realm of Hyperbridge, Barretenberg functions as a powerhouse engine, adeptly managing intricate mathematical computations. Serving as the backend infrastructure, it guarantees the swift, secure, and reliable execution of all cryptographic operations within the Hyperbridge ecosystem.")),(0,n.kt)("h2",{id:"terminology"},"Terminology"),(0,n.kt)("h3",{id:"state-proofs"},"State Proofs"),(0,n.kt)("p",null,"State proofs are a critical primitive of the blockchain stack that enable things like trustless bridges, off-chain light clients that can access on-chain data in a permissionless and secure manner as well as modular blockchains architectures where the execution layer can be decoupled from the consensus layer."),(0,n.kt)("h3",{id:"consensus-proofs"},"Consensus Proofs"),(0,n.kt)("p",null,"Consensus Proofs in a blockchain system denote the mechanism by which participants, often nodes or validators, collectively agree on the validity of new transactions or blocks. The nature of consensus proofs varies across different blockchain architectures, such as Proof-of-Work, Proof-of-Stake, or other consensus algorithms."),(0,n.kt)("p",null,"The ultimate goal is to ensure a widespread and verifiable agreement among network participants, enhancing the security and reliability of the distributed ledger."),(0,n.kt)("p",null,"For example, Consensus Proofs in a proof of stake system is given as the signatures over the latest block header in the chain from a supermajority (two-thirds plus one) subset of the full authority set."),(0,n.kt)("h2",{id:"learn-more"},"Learn More"),(0,n.kt)("p",null,"The information provided here is subject to change; keep up to date using the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://blog.polytope.technology/introducing-hyperbridge-interoperability-coprocessor"},"Introducing Hyperbridge: An Interoperability Coprocessor")," - Article by Seun Lanlege, Polytope Lab founder."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://polkadot-blockchain-academy.github.io/pba-book/blockchain-contracts/services-as-state-machines/page.html"},"Digital Services as State Machines")," - Lecture about state machine from Polkadot Blockchain Academy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-bridges"},"Polkadot Wiki - Bridges")," - Learn about bridges in Polkadot"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/learn-parachains"},"Polkadot Wiki - Parachain")," - Learn about parachain in Polkadot"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polytope-labs/hyperbridge"},"Hyperbridge Source Code")," - Public codebase repository of hyperbridge."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ismp.polytope.technology/"},"Interoperable State Machine Protocol (ISMP) Book")," - Guidebook of the ISMP"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/stakenode_dev/status/1744653040764817675"},"The Puzzle of Blockchain Interoperability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/polkadot-fellows/RFCs/blob/6f29561a4747bbfd95307ce75cd949dfff359e39/text/0001-agile-coretime.md"},"RFC-1: Agile Coretime")," - Agile periodic-sale-based model for assigning Coretime on the Polkadot Ubiquitous Computer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=MCOAwooWecs"},"ISMP, The Endgame for Parachain Interoperability | Sub0 2023")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.smartcontractresearch.org/t/research-summary-plonk-permutations-over-lagrange-bases-for-oecumenical-noninteractive-arguments-of-knowledge/382"},"Research Summary: PlonK: Permutations over Lagrange-bases for Oecumenical Noninteractive arguments of Knowledge"))))}m.isMDXComponent=!0},46601:()=>{}}]);