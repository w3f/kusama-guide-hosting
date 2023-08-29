"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3599],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var h=n.createContext({}),l=function(e){var a=n.useContext(h),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=l(e.components);return n.createElement(h.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,h=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,u=p["".concat(h,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(u,r(r({ref:a},c),{},{components:t})):n.createElement(u,r({ref:a},c))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var h in a)hasOwnProperty.call(a,h)&&(s[h]=a[h]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=t[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2741:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>h,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(87462),i=t(63366),o=(t(67294),t(3905)),r=["components"],s={id:"learn-parachains",title:"Parachains",sidebar_label:"Introduction to Parachains",description:"An Introduction to Polkadot's Parachains.",keywords:["parachains","application-specific","sharding"],slug:"../learn-parachains"},h=void 0,l={unversionedId:"learn/learn-parachains",id:"learn/learn-parachains",title:"Parachains",description:"An Introduction to Polkadot's Parachains.",source:"@site/../docs/learn/learn-parachains.md",sourceDirName:"learn",slug:"/learn-parachains",permalink:"/docs/learn-parachains",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1693218432,formattedLastUpdatedAt:"Aug 28, 2023",frontMatter:{id:"learn-parachains",title:"Parachains",sidebar_label:"Introduction to Parachains",description:"An Introduction to Polkadot's Parachains.",keywords:["parachains","application-specific","sharding"],slug:"../learn-parachains"},sidebar:"docs",previous:{title:"Parachain Slot Auctions",permalink:"/docs/learn-auction"},next:{title:"Metadata Explorer",permalink:"/docs/metadata"}},c={},p=[{value:"Definition of a Parachain",id:"definition-of-a-parachain",level:2},{value:"State Transitions",id:"state-transitions",level:3},{value:"Why Parachains?",id:"why-parachains",level:2},{value:"Shared Security",id:"shared-security",level:3},{value:"PoW vs Parachain Model",id:"pow-vs-parachain-model",level:3},{value:"Parachain Economies",id:"parachain-economies",level:2},{value:"Parachain Hubs",id:"parachain-hubs",level:2},{value:"Parachain Slot Acquisition",id:"parachain-slot-acquisition",level:2},{value:"Parachain Lease Expiration",id:"parachain-lease-expiration",level:3},{value:"System Parachains",id:"system-parachains",level:2},{value:"Parachains&#39; Use Cases",id:"parachains-use-cases",level:2},{value:"Parachain Host",id:"parachain-host",level:2},{value:"Resources",id:"resources",level:2}],d={toc:p},m="wrapper";function u(e){var a=e.components,s=(0,i.Z)(e,r);return(0,o.kt)(m,(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Testing on Rococo",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For information on how to participate in the crowdloan and parachain auction testing on Rococo,\nplease see the\n","\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-pdk##testing-a-parachains:-rococo-testnet"},"Rococo Content"),"\non the parachain development guide.")),(0,o.kt)("h2",{id:"definition-of-a-parachain"},"Definition of a Parachain"),(0,o.kt)("p",null,"A parachain is an application-specific data structure that is globally coherent and can be validated\nby the validators of the Relay Chain. They take their name from the concept of parallelized chains\nthat run parallel to the Relay Chain. Most commonly, a parachain will take the form of a blockchain,\nbut there is no specific need for them to be actual blockchains."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"One parachain",src:t(7747).Z,width:"1920",height:"800"})),(0,o.kt)("p",null,"Due to their parallel nature, they can parallelize transaction processing and achieve scalability of\nthe Kusama protocol. They\n",(0,o.kt)("a",{parentName:"p",href:"#shared-security"},"inherit the security")," of the entire network and can communicate with other\nparachains through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," format."),(0,o.kt)("p",null,"Parachains are maintained by a network maintainer known as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collator"),". The role\nof the collator node is to maintain a full node of the parachain, retain all necessary information\nabout the parachain, and produce new block candidates to pass to the Relay Chain validators for\nverification and inclusion in the shared state of\nKusama. The incentivization of a collator\nnode is an implementation detail of the parachain. They are not required to be staked on the Relay\nChain or own the native token unless stipulated by the parachain implementation."),(0,o.kt)("h3",{id:"state-transitions"},"State Transitions"),(0,o.kt)("p",null,"Like other blockchains, parachains are ",(0,o.kt)("strong",{parentName:"p"},"deterministic state machines"),". Each parachain has a\n",(0,o.kt)("strong",{parentName:"p"},"state"),", executes a batch of transactions grouped into a block, and achieves a new state. Joe\nPetrowski provided in ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/the-path-of-a-parachain-block/"},"this article")," a\ngood analogy of a state with a light switch that can be either on or off, which is one of the\nsimplest examples of how a state machine functions. Each parachain has its own state, and the Relay\nChain links all those states into one state, i.e. a state of states. A multi-chain network like\nKusama can be viewed like one computer's\nstate with many light switches where a ",(0,o.kt)("strong",{parentName:"p"},"state transition function")," is the logic to decide which\nswitches should be toggled. Parachains have their own transition rule, separate economies,\ngovernance mechanisms, and users."),(0,o.kt)("p",null,"A parachain's state is stored in a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Merkle_tree"},"Merkle tree"),". Merkle\ntrees have the convenient property that if some values within the tree change, this will be\nreflected in the Merkle root (in this case, the state root). One can verify the change by only\nlooking at the new values and the paths that are affected within the tree."),(0,o.kt)("p",null,"The Kusama Host requires that the state\ntransitions performed on parachains be specified as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-wasm"},"Wasm")," executable. Proofs of\nnew state transitions that occur on a parachain must be validated against the registered state\ntransition function (STF) that is stored on the Relay Chain by the validators before\nKusama acknowledges a state transition has\noccurred on a parachain. The key constraint regarding the logic of a parachain is that it must be\nverifiable by the Relay Chain validators. Verification most commonly takes the form of a bundled\nproof of a state transition known as a Proof-of-Verification (PoV) block, which is submitted for\nchecking to the validators from one or more parachain collators."),(0,o.kt)("h2",{id:"why-parachains"},"Why Parachains?"),(0,o.kt)("p",null,"Parachains are a solution to two fundamental problems in blockchains:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scalability"),": Having one blockchain for many purposes makes it difficult to scale as future\nimplementations and upgrades will likely advantage some purposes and disadvantage others.\nConversely, having different blockchains will allow them to implement features without affecting\nother chains."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Flexibility"),": It is reasonable to state a blockchain will either be really good at solving one\nproblem or not so good at trying to solve many problems. A blockchain specializing in solving a\nspecific problem has more leverage toward itself and its users. Parachains are purpose-built\nblockchains are highly specialized and can take advantage of each other through cooperation.")),(0,o.kt)("h3",{id:"shared-security"},"Shared Security"),(0,o.kt)("p",null,"Shared security, sometimes referred as ",(0,o.kt)("em",{parentName:"p"},"pooled security"),", is one of the unique value propositions\nfor chains considering becoming a ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachain")," and joining the\nKusama network. On a high level, shared\nsecurity means that all parachains that are connected to the\nKusama Relay Chain by leasing a parachain\nslot will benefit from the economic security provided by the Relay Chain\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-validator"},"validators"),"."),(0,o.kt)("p",null,"The notion of shared security is different from inter-chain protocols that build on an architecture\nof bridges. For bridge protocols, each chain is considered sovereign and must maintain its own\nvalidator set and economic security. One concern in these protocols is the point of scalability of\nsecurity. For example, one suggestion to scale blockchains is that of ",(0,o.kt)("em",{parentName:"p"},"scale by altcoins,")," which\nsuggests that transaction volumes will filter down to lower market cap altcoins as the bigger ones\nfill their blocks. A major flaw in this idea is that the lower market cap coins will have less\neconomic security attached and be easier to attack. A real-life example of a 51% attack occurred\nrecently (\n",(0,o.kt)("a",{parentName:"p",href:"https://cointelegraph.com/news/ethereum-classic-51-attack-the-reality-of-proof-of-work"},"Ethereum Classic attack on January 10, 2019"),"\n), in which an unknown attacker double spent 219_500 ETC (~1.1 million USD). This was followed by\ntwo more 51% attacks on ETC."),(0,o.kt)("p",null,"Kusama overcomes security scalability\nconcerns since it gravitates all the economic incentives to the Relay Chain and allows the\nparachains to tap into stronger guarantees at genesis. Sovereign chains must expend much more effort\nto grow the value of their coin so that it is sufficiently secure against well-funded attackers."),(0,o.kt)("h3",{id:"pow-vs-parachain-model"},"PoW vs Parachain Model"),(0,o.kt)("p",null,"Let's compare the standard sovereign security model that exists on current proof-of-work (PoW)\nchains to that of the shared security of\nKusama. Chains secured by their security\nmodels, like Bitcoin, Zcash, and their derivatives, must bootstrap their independent network of\nminers and maintain a competitive portion of honest hashing power. Since mining is becoming a larger\nindustry that increasingly centralizes key players, it is becoming more real that a single actor may\ncontrol enough hash power to attack a chain."),(0,o.kt)("p",null,"This means that smaller chains that cannot maintain a secure amount of hash power on their networks\ncould potentially be attacked by a large mining cartel at the simple whim of redirecting its hash\npower away from Bitcoin and toward a new and less secure chain.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.crypto51.app"},"51% attacks are viable today")," with attacks having been reported on\nEthereum Classic (see above),\n",(0,o.kt)("a",{parentName:"p",href:"https://coincentral.com/verge-suffers-51-attack-hard-forks-in-response/"},"Verge"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://bitcoingold.org/responding-to-attacks/"},"Bitcoin Gold"),", and other cryptocurrencies."),(0,o.kt)("p",null,"On Kusama, this disparity between chain\nsecurity will not be present. When a parachain connects to\nKusama, the relay chain validators become\nthe securers of that parachain's state transitions. The parachain will only have the overhead of\nrunning a few collator nodes to keep the validators informed with the latest state transitions and\nproofs/witness. Validators will then check these for the parachains to which they are assigned. In\nthis way, new parachains instantly benefit from the overall security of\nKusama even if they have just been launched."),(0,o.kt)("h2",{id:"parachain-economies"},"Parachain Economies"),(0,o.kt)("p",null,"Parachains may have their economies with their native tokens. Schemes such as Proof-of-Stake are\nusually used to select the validator set to handle validation and finalization; parachains will not\nbe required to do either of those things. However, since\nKusama is not overly particular about what\nthe parachain can implement, it may be the choice of the parachain to implement a staking token, but\nit's not generally necessary."),(0,o.kt)("p",null,"Collators may be incentivized through the inflation of a native parachain token. There may be other\nways to incentivize the collator nodes that do not involve inflating the native parachain token."),(0,o.kt)("p",null,"Transaction fees in a native parachain token can also be an implementation choice of parachains.\nKusama makes no hard and fast rules for how\nthe parachains decide on the original validity of transactions. For example, a parachain may be\nimplemented so that transactions must pay a minimum fee to collators to be valid. The Relay Chain\nwill enforce this validity. Similarly, a parachain could not include that in their implementation,\nand Kusama would still enforce its validity."),(0,o.kt)("p",null,"Parachains are not required to have their token. If they do, it is up to the parachain to make the\neconomic case for their token, not Kusama."),(0,o.kt)("h2",{id:"parachain-hubs"},"Parachain Hubs"),(0,o.kt)("p",null,"While Kusama enables crosschain\nfunctionality amongst the parachains, it necessitates that there is some latency between the\ndispatch of a message from one parachain until the destination parachain receives the message. In\nthe optimistic scenario, the latency for this message should be at least two blocks - one block for\nthe message to be dispatched and one block for the receiving parachain to process and produce a\nblock that acts upon the message. However, in some cases, we may see that the latency for messages\nis higher if many messages are in queue to be processed or if no nodes are running both parachain\nnetworks that can quickly gossip the message across the networks."),(0,o.kt)("p",null,"Due to the necessary latency in sending crosschain messages, some parachains plan to become ",(0,o.kt)("em",{parentName:"p"},"hubs"),"\nfor an entire industry. For example, a parachain project ",(0,o.kt)("a",{parentName:"p",href:"https://acala.network"},"Acala")," is planning\nto become a hub for decentralized finance (DeFi) applications. Many DeFi applications take advantage\nof a property known as ",(0,o.kt)("em",{parentName:"p"},"composability")," which means that functions of one application can be\nsynergistically composed with others to create new applications. One example of this includes flash\nloans, which borrow funds to execute some on-chain logic as long as the loan is repaid at the end of\nthe transaction."),(0,o.kt)("p",null,"An issue with crosschain latency means that composability property weakens among parachains compared\nto a single blockchain. ",(0,o.kt)("strong",{parentName:"p"},"This implication is common to all sharded blockchain designs, including\nPolkadot, Eth2.0, and others.")," The solution to this is the introduction of parachain hubs, which\nmaintain the stronger property of single block composability."),(0,o.kt)("h2",{id:"parachain-slot-acquisition"},"Parachain Slot Acquisition"),(0,o.kt)("p",null,"There are several ways to allocate parachain slots on Kusama:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Governance granted parachains, or "system parachains"'),(0,o.kt)("li",{parentName:"ul"},"Auction granted parachains"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/learn-parathreads"},"Parathreads"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#system-parachains"},"System parachains")," are allocated by\nKusama's on-chain\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," and are part of the network's protocol, such as bridges to other\nnetworks or chains. These typically do not have an economic model and help remove transactions from\nthe Relay Chain, allowing for more efficient parachain processing."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"Auction granted parachains")," are granted in a permissionless auction. Parachain\nteams can either bid with their own KSM tokens,\nor source them from the community using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloan functionality"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"Parathreads")," have the same API as parachains, but are scheduled for execution\non a pay-as-you-go basis with an auction for each block."),(0,o.kt)("h3",{id:"parachain-lease-expiration"},"Parachain Lease Expiration"),(0,o.kt)("p",null,"When a parachain wins an auction, the tokens it bids get reserved until the lease's end. Reserved\nbalances are non-transferrable and cannot be used for staking. At the end of the lease, the tokens\nare unreserved. Parachains that have not secured a new lease to extend their slot will automatically\nbecome ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"parathreads"),"."),(0,o.kt)("h2",{id:"system-parachains"},"System Parachains"),(0,o.kt)("p",null,"System parachains are parachains that use execution cores allocated by the network's governance.\nThese chains remove transactions from the Relay Chain, allowing network validators to allocate\nresources to validating parachains. System chains are Polkadot using its scaling technology to host\nitself."),(0,o.kt)("p",null,"See the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"Polkadot blog article"),",\nthis\n",(0,o.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-protocol-and-common-good-parachains/866"},"Polkadot Forum thread"),",\nand the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-system-chains"},"system parachains")," page for more information."),(0,o.kt)("h2",{id:"parachains-use-cases"},"Parachains' Use Cases"),(0,o.kt)("p",null,"Note that we still have to see the true potential of parachains and what it is listed below are just\na few examples."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Encrypted Consortium Chains"),": These are possibly private chains that do not leak any\ninformation to the public but still can be interacted with trustlessly due to the nature of the\nXCMP protocol."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"High-Frequency Chains"),": These chains can compute many transactions in a short amount of time by\ntaking certain trade-offs or making optimizations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Privacy Chains"),": These chains do not leak any information to the public through novel\ncryptography."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Smart Contract Chains"),": These chains can have additional logic implemented through the\ndeployment of code known as ",(0,o.kt)("em",{parentName:"li"},"smart contracts"),".")),(0,o.kt)("h2",{id:"parachain-host"},"Parachain Host"),(0,o.kt)("p",null,"Kusama includes a blockchain called a relay\nchain. A blockchain is a\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Directed_acyclic_graph"},"Directed Acyclic Graph")," (DAG) of state\ntransitions, where every added block can be viewed as the head of the chain or fork with cumulative\nstate. All paths through the DAG terminate at the Genesis Block. A blockchain is a tree, as each\nblock can have only one parent."),(0,o.kt)("p",null,"A blockchain network is made of nodes that have a view of many forks of the chain and must decide\nwhich fork to follow. To construct the parachain host we need to answer two categories of questions\naddressed by two different components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What is the state transition function of the blockchain? This is handled by the ",(0,o.kt)("strong",{parentName:"p"},"Runtime"),", which\ndefines the state transition logic of the chain. The Runtime logic is divided into:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Modules")," encapsulate particular behavior of the protocol and consist of:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Storage"),(0,o.kt)("li",{parentName:"ul"},"Routines are invoked by entry points and other modules upon block initialization or closing.\nRoutines can alter the storage of a module."),(0,o.kt)("li",{parentName:"ul"},"The entry point defines how new information is introduced to a module and can limit the origin\nfrom which they are called (user, root, parachain)."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"API")," provides means for the node-side behavior to extract meaningful information from the\nstate of a single fork.")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Polkadot Parachain Host Implementers' Guide provides details about\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/runtime/index.html"},"Runtime Architecture")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/runtime-api/index.html"},"Runtime API"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Knowing various forks of the blockchain, what behaviors should a node take? What information\nshould a node extract from the state of which forks, and how should that information be used? This\nis handled by the ",(0,o.kt)("strong",{parentName:"p"},"Node-side behavior"),", which defines all activities a node undertakes given its\nview of the blockchain. The node-side behavior can be divided into two categories:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Networking behaviors"),", relate to how information is distributed between nodes but not how the\ninformation is used afterward."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Core behaviors"),", relate to internal work that a specific node does. Such behavior cares about\nthat information is ",(0,o.kt)("em",{parentName:"li"},"distributed")," and ",(0,o.kt)("em",{parentName:"li"},"received"),", but not how these two are achieved.")),(0,o.kt)("p",{parentName:"li"},"These two categories often interact, but they can be heavily abstracted from each other. The\nnode-side behavior is split into various ",(0,o.kt)("strong",{parentName:"p"},"subsystems"),", which perform a particular category of\nwork. Subsystems can communicate with each other through an\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/node/overseer.html"},"Overseer")," that prevents race\nconditions."),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The Polkadot Parachain Host Implementers' Guide provides details about\n",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/node/index.html"},"node architecture")," the main\nsubsystems:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/collators/index.html"},"Collator subsystem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/backing/index.html"},"Backing subsystem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/availability/index.html"},"Availability subsystem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/approval/index.html"},"Approval subsystem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/disputes/index.html"},"Dispute subsystem")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/utility/index.html"},"Utility subsystem")))))),(0,o.kt)("p",null,"The Runtime and Node-side behavior are dependent on each other. The Runtime depends on Node-side\nbehavior to author blocks, and to include ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics"},"extrinsics")," which trigger the\ncorrect entry points. The Node-side behavior relies on the Runtime APIs to extract information\nnecessary to determine which action to take."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkadot-the-parachain-3808040a769a"},"Polkadot: The Parachain"),' -\nBlog post by Polkadot co-founder Rob Habermeier who introduced parachains in 2017 as "a simpler\nform of blockchain, which attaches to the security provided by a Relay Chain rather than providing\nits own. The Relay Chain provides security to attached parachains, but also provides a guarantee\nof secure message-passing between them."'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadot.network/the-path-of-a-parachain-block/"},"The Path of a Parachain Block")," - A\ntechnical walk-through of how parachains interact with the Relay Chain.")))}u.isMDXComponent=!0},7747:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/one-parachain-f8e0673144a718bd67834cdd69894ca2.png"}}]);