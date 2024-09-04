"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6361],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>f});var a=t(96540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return t?a.createElement(f,s(s({ref:n},d),{},{components:t})):a.createElement(f,s({ref:n},d))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=u;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r[p]="string"==typeof e?e:o,s[1]=r;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},11635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var a=t(58168),o=t(98587),i=(t(96540),t(15680)),s=["components"],r={id:"learn-consensus",title:"Polkadot's Consensus Protocols",sidebar_label:"Consensus",description:"The Consensus Mechanisms of Polkadot.",keywords:["consensus","proof of stake","nominated proof of stake","hybrid consensus","finality"],slug:"../learn-consensus"},l=void 0,c={unversionedId:"learn/learn-consensus",id:"learn/learn-consensus",title:"Polkadot's Consensus Protocols",description:"The Consensus Mechanisms of Polkadot.",source:"@site/../docs/learn/learn-consensus.md",sourceDirName:"learn",slug:"/learn-consensus",permalink:"/docs/learn-consensus",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725460864,formattedLastUpdatedAt:"Sep 4, 2024",frontMatter:{id:"learn-consensus",title:"Polkadot's Consensus Protocols",sidebar_label:"Consensus",description:"The Consensus Mechanisms of Polkadot.",keywords:["consensus","proof of stake","nominated proof of stake","hybrid consensus","finality"],slug:"../learn-consensus"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/learn-architecture"},next:{title:"Parachains",permalink:"/docs/learn-parachains-index"}},d={},p=[{value:"Nominated Proof of Stake",id:"nominated-proof-of-stake",level:2},{value:"Hybrid Consensus",id:"hybrid-consensus",level:2},{value:"Block Production: BABE",id:"block-production-babe",level:2},{value:"Multiple Validators per Slot",id:"multiple-validators-per-slot",level:3},{value:"No Validators in Slot",id:"no-validators-in-slot",level:3},{value:"Finality Gadget: GRANDPA",id:"finality-gadget-grandpa",level:2},{value:"Probabilistic vs. Provable Finality",id:"probabilistic-vs-provable-finality",level:3},{value:"Fork Choice",id:"fork-choice",level:2},{value:"Comparisons",id:"comparisons",level:2},{value:"Nakamoto consensus",id:"nakamoto-consensus",level:3},{value:"PBFT / Tendermint",id:"pbft--tendermint",level:3},{value:"Casper FFG",id:"casper-ffg",level:3},{value:"Bridging: BEEFY",id:"bridging-beefy",level:2},{value:"Resources",id:"resources",level:2}],h={toc:p},u="wrapper";function f(e){var n=e.components,r=(0,o.A)(e,s);return(0,i.yg)(u,(0,a.A)({},h,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In traditional PoS systems, block production participation is dependent on token holdings as opposed\nto computational power. While PoS developers usually have a proponent for equitable participation in\na decentralized manner, most projects propose some level of centralized operation, where the number\nof validators with full participation rights is limited. These validators are often seen to be the\nmost wealthy and, as a result, influence the PoS network as they are the most staked. Usually, the\nnumber of candidates to maintain the network with the necessary knowledge (and equipment) is\nlimited; this can also increase operational costs. Systems with a large number of validators tend to\nform pools to decrease the variance of their revenue and profit from economies of scale. These pools\nare often off-chain."),(0,i.yg)("p",null,"A way to alleviate this is to implement pool formation on-chain and allow token holders to vote with\ntheir stake for validators to represent them."),(0,i.yg)("h2",{id:"nominated-proof-of-stake"},"Nominated Proof of Stake"),(0,i.yg)("p",null,"Kusama uses NPoS (Nominated Proof-of-Stake)\nas its mechanism for selecting the validator set. It is designed with the roles of\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-validator"},(0,i.yg)("strong",{parentName:"a"},"validators"))," and ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-nominator"},(0,i.yg)("strong",{parentName:"a"},"nominators")),", to maximize chain\nsecurity. Actors who are interested in maintaining the network can run a validator node."),(0,i.yg)("p",null,"Validators assume the role of producing new blocks, validating parachain blocks, and guaranteeing\nfinality. Nominators can choose to backselect validators with their stake. Nominators can approve\ncandidates that they trust and back them with their tokens."),(0,i.yg)("h2",{id:"hybrid-consensus"},"Hybrid Consensus"),(0,i.yg)("p",null,"Kusama uses what is known as ",(0,i.yg)("em",{parentName:"p"},"hybrid\nconsensus"),". Hybrid consensus splits up the finality gadget (",(0,i.yg)("a",{parentName:"p",href:"#finality-gadget-grandpa"},"GRANDPA"),")\nfrom the block production mechanism (",(0,i.yg)("a",{parentName:"p",href:"#block-production-babe"},"BABE"),")."),(0,i.yg)("p",null,"This is a way of getting the benefits of ",(0,i.yg)("strong",{parentName:"p"},"probabilistic finality")," (the ability always to produce\nnew blocks) and ",(0,i.yg)("strong",{parentName:"p"},"provable finality"),' (having a universal agreement on the canonical chain with no\nchance for reversion) in Kusama. It also\navoids the corresponding drawbacks of each mechanism (the chance of unknowingly following the wrong\nfork in probabilistic finality, and a chance for "stalling" - not being able to produce new blocks -\nin provable finality). By combining these two mechanisms,\nKusama allows for blocks to be rapidly\nproduced, and the slower finality mechanism to run in a separate process to finalize blocks without\nrisking slower transaction processing or stalling.'),(0,i.yg)("p",null,"Hybrid consensus has been proposed in the past. Notably, it was proposed (now defunct) as a step in\nEthereum's transition to proof of stake in ",(0,i.yg)("a",{parentName:"p",href:"http://eips.ethereum.org/EIPS/eip-1011"},"EIP 1011"),", which\nspecified ",(0,i.yg)("a",{parentName:"p",href:"#casper-ffg"},"Casper FFG"),"."),(0,i.yg)("h2",{id:"block-production-babe"},"Block Production: BABE"),(0,i.yg)("p",null,"BABE (Blind Assignment for Blockchain Extension) is the block production mechanism that runs between\nthe validator nodes and determines the authors of new blocks. BABE is comparable as an algorithm to\n",(0,i.yg)("a",{parentName:"p",href:"https://eprint.iacr.org/2017/573.pdf"},"Ouroboros Praos"),", with some key differences in chain\nselection rule and slot time adjustments. BABE assigns block production slots to validators\naccording to stake and using the Kusama\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-cryptography#randomness"},"randomness cycle"),". The chain\u2019s runtime is required to provide\nthe BABE authority list and randomness to the host via a consensus message in the header of the\nfirst block of each epoch."),(0,i.yg)("p",null,"BABE execution happens in sequential non-overlapping phases known as epochs. Each epoch is divided\ninto a predefined number of slots. All slots in each epoch are sequentially indexed starting from 0\n(slot number). At the beginning of each epoch, the BABE node needs to run the\n",(0,i.yg)("a",{parentName:"p",href:"https://spec.polkadot.network/#algo-block-production-lottery"},"Block-Production-Lottery algorithm"),"\nto find out in which slots it should produce a block and gossip to the other block producers."),(0,i.yg)("p",null,"Validators participate in a lottery for every slot, which will inform whether or not they are the\nblock producer candidate for that slot. Slots are discrete units of time of approximately 6 seconds\nin length. Because the mechanism of allocating slots to validators is based on a randomized design,\nmultiple validators could be candidates for the same slot. Other times, a slot could be empty,\nresulting in inconsistent block time."),(0,i.yg)("h3",{id:"multiple-validators-per-slot"},"Multiple Validators per Slot"),(0,i.yg)("p",null,"When multiple validators are block producer candidates in a given slot, all will produce a block and\nbroadcast it to the network. At that point, it's a race. The validator whose block reaches most of\nthe network first wins. Depending on network topology and latency, both chains will continue to\nbuild in some capacity until finalization kicks in and amputates a fork. See\n",(0,i.yg)("a",{parentName:"p",href:"#fork-choice"},"Fork Choice")," below for how that works."),(0,i.yg)("h3",{id:"no-validators-in-slot"},"No Validators in Slot"),(0,i.yg)("p",null,"When no validators have rolled low enough in the randomness lottery to qualify for block production,\na slot can remain seemingly blockless. We avoid this by running a secondary, round-robin style\nvalidator selection algorithm in the background. The validators selected to produce blocks through\nthis algorithm always produce blocks. Still, these ",(0,i.yg)("em",{parentName:"p"},"secondary")," blocks are ignored if the same slot\nalso produces a primary block from a ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-cryptography#randomness"},"VRF-selected")," validator.\nThus, a slot can have either a ",(0,i.yg)("em",{parentName:"p"},"primary")," or a ",(0,i.yg)("em",{parentName:"p"},"secondary")," block, and no slots are ever skipped."),(0,i.yg)("p",null,"For more details on BABE, please see the\n",(0,i.yg)("a",{parentName:"p",href:"https://research.web3.foundation/Polkadot/protocols/block-production/Babe"},"BABE paper"),"."),(0,i.yg)("h2",{id:"finality-gadget-grandpa"},"Finality Gadget: GRANDPA"),(0,i.yg)("p",null,"GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement) is the finality gadget that is\nimplemented for the Kusama Relay Chain."),(0,i.yg)("p",null,"The Kusama Host uses the GRANDPA Finality\nprotocol to finalize blocks. Finality is obtained by consecutive rounds of voting by the validator\nnodes. Validators execute the GRANDPA finality process in parallel to Block Production as an\nindependent service."),(0,i.yg)("p",null,"It works in a partially synchronous network model as long as 2/3 of nodes are honest and can cope\nwith 1/5 Byzantine nodes in an asynchronous setting."),(0,i.yg)("p",null,"A notable distinction is that GRANDPA reaches agreements on chains rather than blocks, greatly\nspeeding up the finalization process, even after long-term network partitioning or other networking\nfailures."),(0,i.yg)("p",null,"In other words, as soon as more than 2/3 of validators attest to a chain containing a particular\nblock, all blocks leading up to that one are finalized at once."),(0,i.yg)("admonition",{title:"GRANDPA description and implementation",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Please refer to ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"the GRANDPA paper"),"\nfor a full description of the protocol. GRANDPA is implemented as a\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/grandpa/src/lib.rs"},"module of the Substrate Frame System"),".")),(0,i.yg)("h3",{id:"probabilistic-vs-provable-finality"},"Probabilistic vs. Provable Finality"),(0,i.yg)("p",null,"A pure Nakamoto consensus blockchain that runs PoW is only able to achieve the notion of\n",(0,i.yg)("em",{parentName:"p"},"probabilistic finality")," and reach ",(0,i.yg)("em",{parentName:"p"},"eventual consensus"),". Probabilistic finality means that under\nsome assumptions about the network and participants, if we see a few blocks building on a given\nblock, we can estimate the probability that it is final. Eventual consensus means that at some point\nin the future, all nodes will agree on the truthfulness of one set of data. This eventual consensus\nmay take a long time, and will not be able to determine how long it will take ahead of time.\nHowever, finality gadgets such as GRANDPA (GHOST-based Recursive ANcestor Deriving Prefix Agreement)\nor Ethereum's Casper FFG (the Friendly Finality Gadget) are designed to give stronger and quicker\nguarantees on the finality of blocks - specifically, that they can never be reverted after some\nprocess of Byzantine agreements has taken place. The notion of irreversible consensus is known as\n",(0,i.yg)("em",{parentName:"p"},"provable finality.")),(0,i.yg)("p",null,"In the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"GRANDPA paper"),", it is phrased\nin this way:"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"We say an Oracle A in a protocol is ",(0,i.yg)("em",{parentName:"p"},"eventually consistent")," if it returns the same value to all\nparticipants after some unspecified time.")),(0,i.yg)("h2",{id:"fork-choice"},"Fork Choice"),(0,i.yg)("p",null,"Bringing BABE and GRANDPA together, the fork choice of\nKusama becomes clear. BABE must always build\non the chain that GRANDPA has finalized. BABE provides probabilistic finality when there are forks\nafter the finalized head by building on the chain with the most primary blocks."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Best chain choice",src:t(25704).A,width:"1739",height:"817"})),(0,i.yg)("p",null,'In the above image, the black blocks are finalized, and the yellow blocks are not. Blocks marked\nwith a "1" are primary blocks; those marked with a "2" are secondary blocks. Even though the topmost\nchain is the longest chain on the latest finalized block, it does not qualify because it has fewer\nprimaries at the time of evaluation than the one below it.'),(0,i.yg)("h2",{id:"comparisons"},"Comparisons"),(0,i.yg)("h3",{id:"nakamoto-consensus"},"Nakamoto consensus"),(0,i.yg)("p",null,"Nakamoto consensus consists of the longest chain rule using proof of work as its Sybil resistance\nmechanism and leader election."),(0,i.yg)("p",null,"Nakamoto consensus only gives us probabilistic finality. Probabilistic finality states that a block\nin the past is only as safe as the number of confirmations it has, or the number of blocks that have\nbeen built on top of it. As more blocks are built on top of a specific block in a Proof of Work\nchain, more computational work has been expended behind this particular chain. However, it does not\nguarantee that the chain containing the block will always remain the agreed-upon chain since an\nactor with unlimited resources could potentially build a competing chain and expend enough\ncomputational resources to create a chain that did not contain a specific block. In such a\nsituation, the longest chain rule employed in Bitcoin and other proof of work chains would move to\nthis new chain as the canonical one."),(0,i.yg)("h3",{id:"pbft--tendermint"},"PBFT / Tendermint"),(0,i.yg)("p",null,"Please see the ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-comparisons-cosmos#consensus"},"relevant section")," in the Cosmos comparison\narticle."),(0,i.yg)("h3",{id:"casper-ffg"},"Casper FFG"),(0,i.yg)("p",null,"The two main differences between GRANDPA and Casper FFG are:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"in GRANDPA, different voters can cast votes simultaneously for blocks at different heights"),(0,i.yg)("li",{parentName:"ul"},"GRANDPA only depends on finalized blocks to affect the fork-choice rule of the underlying block\nproduction mechanism")),(0,i.yg)("h2",{id:"bridging-beefy"},"Bridging: BEEFY"),(0,i.yg)("p",null,"The BEEFY (Bridge Efficiency Enabling Finality Yielder) is a secondary protocol to GRANDPA to\nsupport efficient bridging between relay chains (Polkadot and Kusama) and remote, segregated\nblockchains, such as Ethereum, which were not built with the Polkadot native interoperability in\nmind. The protocol allows participants of the remote network to efficiently verify finality proofs\ncreated by validators on the relay chain, i.e. clients in the Ethereum network can verify that the\nPolkadot network is at a specific state."),(0,i.yg)("p",null,"Storing all the information necessary to verify the state of the remote chain, such as the block\nheaders, is too expensive. In BEEFY, all honest validators sign on a GRANDPA finalized block. This\nreduces the efforts on the light client side, as tracking forks, GRANDPA justifications, etc., is no\nlonger necessary. Moreover, BEEFY utilizes Merkle Mountain Ranges (MMR) as an efficient data\nstructure for storing and transmitting block headers and signatures to light clients and the ECDSA\nsignature schemes (more efficiently verifiable on EVM). Light clients now only have to check if the\nblock has a super-majority of BEEFY votes by validators."),(0,i.yg)("p",null,"Overall, BEEFY addresses the limitations of GRANDPA finality for bridges to chains like Ethereum by\nproviding a more lightweight and efficient finality solution."),(0,i.yg)("p",null,"For additional implementation details about BEEFY, see\n",(0,i.yg)("a",{parentName:"p",href:"https://spec.polkadot.network/#sect-grandpa-beefy"},"the Polkadot Specification"),"."),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/protocols/block-production/Babe"},"BABE paper")," - The\nacademic description of the BABE protocol."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/w3f/consensus/blob/master/pdf/grandpa.pdf"},"GRANDPA paper")," - The academic\ndescription of the GRANDPA finality gadget. Contains formal proofs of the algorithm."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/paritytech/finality-grandpa"},"Rust implementation")," - The reference\nimplementation and the accompanying\n",(0,i.yg)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/grandpa/src/lib.rs"},"Substrate pallet"),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-block-production"},"Block Production and Finalization in Polkadot")," -\nAn explanation of how BABE and GRANDPA work together to produce and finalize blocks on Kusama with\nBill Laboon."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=1CuTSluL7v4&t=4s"},"Block Production and Finalization in Polkadot: Understanding the BABE and GRANDPA Protocols")," -\nAn academic talk by Bill Laboon, given at MIT Cryptoeconomic Systems 2020, describing Polkadot's\nhybrid consensus model in-depth.")))}f.isMDXComponent=!0},25704:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/best_chain-52a3da00fb2f804a198c73690fcedc4f.png"}}]);