(self.webpackChunk=self.webpackChunk||[]).push([[4620],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var o=a(74165),n=a(15861),i=a(67294),r=a(92519),s=a(98177),l=a(67425);function h(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,o.Z)().mark((function e(t,a,n){var i,l,h,d,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return h=new r.U(i),e.next=21,s.G.create({provider:h});case 21:d=e.sent,(c=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,o);break;case"precise":(0,l.Precise)(e,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"percentage":(0,l.Percentage)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,a=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,d=(0,i.useState)(""),p=d[0],u=d[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(r.toString(),l,t,u):u(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t,a,u);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(n,l,t,u):u(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),p}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,o){var n=void 0;if("polkadot"===a||"statemint"===a)n=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}e=parseFloat(e),o((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(n)+" "+t[a].symbol).toString())},Precise:function(e,a,o){o(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},17384:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>h,default:()=>k,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),r=a(47940),s=["components"],l={id:"faq",title:"Frequently Asked Questions (FAQs)",sidebar_label:"FAQ",description:"Some FAQs to help you conquer your experience with Polkadot.",keywords:["FAQ","questions"],slug:"../faq"},h=void 0,d={unversionedId:"general/faq",id:"general/faq",title:"Frequently Asked Questions (FAQs)",description:"Some FAQs to help you conquer your experience with Polkadot.",source:"@site/../docs/general/faq.md",sourceDirName:"general",slug:"/faq",permalink:"/docs/faq",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1678459638,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{id:"faq",title:"Frequently Asked Questions (FAQs)",sidebar_label:"FAQ",description:"Some FAQs to help you conquer your experience with Polkadot.",keywords:["FAQ","questions"],slug:"../faq"}},c={},p=[{value:"Polkadot Launch",id:"polkadot-launch",level:2},{value:"Polkadot Roadmap",id:"polkadot-roadmap",level:2},{value:"Validators",id:"validators",level:2},{value:"How do I apply to be a validator?",id:"how-do-i-apply-to-be-a-validator",level:3},{value:"How are validators rewarded?",id:"how-are-validators-rewarded",level:3},{value:"What is the minimum stake necessary to be elected as an active validator?",id:"what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator",level:3},{value:"Why will Polkadot have only 1000 validators while other projects have hundreds of thousands?",id:"why-will-polkadot-have-only-1000-validators-while-other-projects-have-hundreds-of-thousands",level:3},{value:"Relay Chain",id:"relay-chain",level:2},{value:"What is the block time of the Relay Chain?",id:"what-is-the-block-time-of-the-relay-chain",level:3},{value:"Does Polkadot have smart contracts?",id:"does-polkadot-have-smart-contracts",level:3},{value:"How will the Polkadot Relay Chain connect to external chains in the ecosystem?",id:"how-will-the-polkadot-relay-chain-connect-to-external-chains-in-the-ecosystem",level:3},{value:"DOT",id:"dot",level:2},{value:"What is the difference between DOT (old) and new DOT?",id:"what-is-the-difference-between-dot-old-and-new-dot",level:3},{value:"What is the inflation rate of the DOT?",id:"what-is-the-inflation-rate-of-the-dot",level:3},{value:"Why can&#39;t crowdloaned DOT be staked?",id:"why-cant-crowdloaned-dot-be-staked",level:3},{value:"Governance",id:"governance",level:2},{value:"What prevents Polkadot governance from failing?",id:"what-prevents-polkadot-governance-from-failing",level:3},{value:"What prevents Polkadot governance from becoming plutocratic?",id:"what-prevents-polkadot-governance-from-becoming-plutocratic",level:3},{value:"Parachains",id:"parachains",level:2},{value:"How do parachain economics work?",id:"how-do-parachain-economics-work",level:3},{value:"Are parachains ephemeral? What happens when a parachain loses the next auction?",id:"are-parachains-ephemeral-what-happens-when-a-parachain-loses-the-next-auction",level:3},{value:"Networking",id:"networking",level:2},{value:"What is libp2p?",id:"what-is-libp2p",level:3},{value:"Does Polkadot use libp2p?",id:"does-polkadot-use-libp2p",level:3},{value:"How does libp2p differ from IPFS?",id:"how-does-libp2p-differ-from-ipfs",level:3},{value:"Kusama",id:"kusama",level:2},{value:"What is the minimum amount of KSM / DOT I can have in my account?",id:"what-is-the-minimum-amount-of-ksm--dot-i-can-have-in-my-account",level:3},{value:"What are the transfer fees for Kusama?",id:"what-are-the-transfer-fees-for-kusama",level:3},{value:"Answered by Gav series",id:"answered-by-gav-series",level:2}],u={toc:p},m="wrapper";function k(e){var t=e.components,a=(0,n.Z)(e,s);return(0,i.kt)(m,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This FAQ focuses on technical questions for users interested in developing applications for\nPolkadot. If you have a more general question, you may wish to search for the answer on our support\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},"Knowledge Base")," or the main\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/faq"},"Polkadot network FAQ"),". If you have a question that is not answered,\nplease feel free to ask on the Polkadot Watercooler\n",(0,i.kt)("a",{parentName:"p",href:"https://app.element.io/#/room/#polkadot-watercooler:web3.foundation"},"Element channel")," or contact\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network"},"Polkadot Support"),".")),(0,i.kt)("h2",{id:"polkadot-launch"},"Polkadot Launch"),(0,i.kt)("p",null,"The Genesis block of the Polkadot network was launched on May 26, 2020 at 15:36:21 UTC, as a Proof\nof Authority (PoA) network, with governance controlled by the single Sudo (super-user) account.\nDuring this time, validators started joining the network and signaling their intention to\nparticipate in consensus."),(0,i.kt)("p",null,"The network evolved to become a Proof of Stake (PoS) network on June 18, 2020. With the chain\nsecured by the decentralized community of validators, the Sudo module was removed on July 20, 2020,\ntransitioning the governance of the chain into the hands of the token (DOT) holders. This is the\npoint where Polkadot became decentralized."),(0,i.kt)("p",null,"The final step of the transition to full-functioning Polkadot was the enabling of transfer\nfunctionality, which occurred on Polkadot at block number 1_205_128 on August 18, 2020, at 16:39\nUTC."),(0,i.kt)("p",null,"On August 21, 2020, Redenomination of DOT occurred. From this date, one DOT (old) equals 100 new\nDOT."),(0,i.kt)("h2",{id:"polkadot-roadmap"},"Polkadot Roadmap"),(0,i.kt)("p",null,"For more information on the Polkadot roadmap please visit the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.network/technology/#roadmap"},"official Polkadot website"),"."),(0,i.kt)("h2",{id:"validators"},"Validators"),(0,i.kt)("h3",{id:"how-do-i-apply-to-be-a-validator"},"How do I apply to be a validator?"),(0,i.kt)("p",null,"There is no central authority that decides on validators, so there is not per se an ",(0,i.kt)("em",{parentName:"p"},"application"),"\nthat you can fill out. Registering as a validator is permissionless; in order to become one you must\nonly set up a validator node and mark your intention to validate on chain. For detailed instruction\non how to do this you can consult the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-kusama"},"Kusama validator guide")," on validating\nfor Kusama or the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"Polkadot validator guide")," for validating\non Polkadot."),(0,i.kt)("p",null,"However, once you've set up a validator and have registered your intention it does not mean that you\nwill be included in the ",(0,i.kt)("em",{parentName:"p"},"active set")," right away. The validators are elected to the active set based\non the results of an election algorithm known as ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".\nPhragm\xe9n's method tries to accomplish two goals: 1) select ",(0,i.kt)("inlineCode",{parentName:"p"},"n")," members from a larger set based on\nstake-weighted votes and 2) equalize the stake backing each validator as much as possible."),(0,i.kt)("p",null,"You will likely want to campaign your validator to the community in order to get more backing. You\nare looking for ",(0,i.kt)("em",{parentName:"p"},"nominators")," that will put up their tokens to increase the stake for your validator.\nFor validators who cannot acquire the minimum stake from the community, Parity and Web3 Foundation\nalso run a joint program called ",(0,i.kt)("a",{parentName:"p",href:"/docs/thousand-validators"},"Thousand Validators")," that will nominate\nvalidators if they apply and fit the requirements."),(0,i.kt)("h3",{id:"how-are-validators-rewarded"},"How are validators rewarded?"),(0,i.kt)("p",null,"Validators are rewarded from the inflation of the Relay Chain, transaction fees, and tips. However,\nthey only take a percentage of the former two. More details can be read on the page for\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-validator-payout"},"validator payouts"),"."),(0,i.kt)("h3",{id:"what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator"},"What is the minimum stake necessary to be elected as an active validator?"),(0,i.kt)("p",null,"The minimum stake that is necessary to be elected as an active validator is dynamic and can change\nover time. It depends not only on how much stake is being put behind each validator, but also the\nsize of the active set and how many validators are waiting in the pool."),(0,i.kt)("p",null,"There are a few ways to estimate the minimum stake."),(0,i.kt)("p",null,"One way can be to navigate to the\n",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/ipns/polkadot.dotapps.io/#/staking/targets"},"Polkadot Apps Targets tab"),'. The value\nat the top of the screen saying "Lowest" is the least staked validator. You need at least this\nmuch + 1 to enter the set.'),(0,i.kt)("p",null,"You can also use some tools some to perform estimations."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-debug-kit/tree/master/offline-election"},"Offline Election"),"\ncan provide exact results of running an election on the current set of validators using the same\nRust code that is ran in Polkadot.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/validator-stats"},"Validator stats script")," can give you an estimate that is\nbased on the currently elected set, as well as some statistics about Kusama validators."))),(0,i.kt)("h3",{id:"why-will-polkadot-have-only-1000-validators-while-other-projects-have-hundreds-of-thousands"},"Why will Polkadot have only 1000 validators while other projects have hundreds of thousands?"),(0,i.kt)("p",null,"Polkadot's goal to have 1000 validators is set to be something that is practically achievable in the\nshort term with high confidence of good performance in a live environment. Furthermore, validators\nin Polkadot are not the only stakers, and if we consider the number of stakers that can be possible\non Polkadot the number can scale up to hundreds of thousands. Since validators are performing\ncritical consensus work to maintain the security of the chain including all of its shards, a more\nmodest number of validators is estimated to start. Upon later improvements, such as implementing\nsignature aggregation for finalization messages, the number of validators could reasonably scale up.\nHowever, increasing validators above one thousand remains a goal for later iterations of Polkadot."),(0,i.kt)("p",null,"It is also worth mentioning that one thousand validators is more than the number of validators of\nsimilar PoS chains with comparable levels of economic security as Polkadot. The closest contenders\nare operating with around 150 validators, while Polkadot is already securely running with\n","\n",(0,i.kt)(r.Z,{network:"polkadot",path:"query.staking.validatorCount",defaultValue:297,mdxType:"RPC"}),"\nvalidators."),(0,i.kt)("p",null,"Additionally, other projects sometimes have a different definition of ",(0,i.kt)("em",{parentName:"p"},"validator"),' that approximates\nmore closely to remote signing keys without the full operation of a validating node. On Polkadot,\neach validator is running their own validating node and performing full verification of the Relay\nChain, voting on finality, producing blocks in their decided slots, and verifying parachain state\ntransitions. Other projects may consider validators and "validating nodes" as separate entities.'),(0,i.kt)("p",null,"Finally, individuals may participate in the block production process indirectly by\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominating")," validators. In this way, individuals who are not running a\nnode can still share in staking rewards."),(0,i.kt)("h2",{id:"relay-chain"},"Relay Chain"),(0,i.kt)("h3",{id:"what-is-the-block-time-of-the-relay-chain"},"What is the block time of the Relay Chain?"),(0,i.kt)("p",null,"Both the Kusama and Polkadot networks are currently operating at a rate of one block every six\nseconds."),(0,i.kt)("p",null,"This may be changed in the future. It may go as low as two to three seconds after optimizations, or\npotentially increase in order to handle the capacity of the parachain networking in a live\nenvironment."),(0,i.kt)("h3",{id:"does-polkadot-have-smart-contracts"},"Does Polkadot have smart contracts?"),(0,i.kt)("p",null,"No - and yes. The Polkadot Relay Chain does not implement smart contracts natively. The reason for\nnot having smart contracts on the Relay Chain is part of the design philosophy for Polkadot that\ndictates that the Relay Chain should be the minimal logic required to accomplish its job."),(0,i.kt)("p",null,"However, Polkadot will be a platform for other chains that ",(0,i.kt)("em",{parentName:"p"},"do")," implement smart contracts. It's\npossible for parachains to enable smart contract functionality and then benefit from the security\nand interoperability features of Polkadot. Additionally, existing smart contract chains can connect\nto Polkadot as a parachain, or via a bridge."),(0,i.kt)("p",null,"While the Polkadot Relay Chain does not implement smart contracts directly, undoubtedly there will\nbe parachains that do. So it's better to say that the Polkadot ",(0,i.kt)("em",{parentName:"p"},"ecosystem"),' has smart contracts\nversus "Polkadot has smart contracts."'),(0,i.kt)("h3",{id:"how-will-the-polkadot-relay-chain-connect-to-external-chains-in-the-ecosystem"},"How will the Polkadot Relay Chain connect to external chains in the ecosystem?"),(0,i.kt)("p",null,"One of the cornerstone interoperability technologies being researched and developed for deployment\non Polkadot is cross-chain bridges. Bridges come in a variety of flavors with varying levels of\ntrust associated with them. Polkadot is predominantly researching the trust-minimized flavor that\nimposes economic costs on the operators of the bridge, and therefore makes it economically secure.\nBridge efforts are being worked on in concert with other projects in the ecosystem. Eventually,\nthere will be bridges between Polkadot and most of the other major chains."),(0,i.kt)("h2",{id:"dot"},"DOT"),(0,i.kt)("h3",{id:"what-is-the-difference-between-dot-old-and-new-dot"},"What is the difference between DOT (old) and new DOT?"),(0,i.kt)("p",null,"The DOT (old) unit on Polkadot was at twelve decimal places, otherwise known as 1e12 Plancks. On 21\nAugust, 2020, Denomination Day, the DOT (old) value was redenominated to 1e10 (10_000_000_000, or\nten billion) Plancks, meaning that the new DOT was valued at ten decimal places. Following the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-redenomination"},"redenomination"),", the new DOT is called DOT."),(0,i.kt)("h3",{id:"what-is-the-inflation-rate-of-the-dot"},"What is the inflation rate of the DOT?"),(0,i.kt)("p",null,"The inflation rate is approximately 10% per year."),(0,i.kt)("p",null,"A portion of the inflation is rewarded to validators for performing their duties, while another\nportion may go directly to the treasury. The exact percentage that goes into both varies and is\nbased on the amount of DOT that are staked. Please see the article on\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking/#inflation"},"inflation")," for more information."),(0,i.kt)("h3",{id:"why-cant-crowdloaned-dot-be-staked"},"Why can't crowdloaned DOT be staked?"),(0,i.kt)("p",null,"DOTs contributed to a sucessful crowdloan campaign by a parachain are bonded for the entire lease\nperiod, which is two years on Polkadot. The crowdloaned DOT cannot be used for any other DOT utility\nfunctionalities like staking and democracy. In exchange to the lost staking rewards or liquidity of\nDOTs, the parachain team may offer rewards to the contributor."),(0,i.kt)("p",null,"The utility of crowdloaned DOT is to provide a lease for a parachain. The utility of staked DOT is\nto secure the network through a reward/slash mechanism. Allowing crowdloaned DOT to be staked\nresults in complex consequences like applying a slash on crowdloaned DOT that was meant to be bonded\nfor the entire lease period of a parachain. In a way, the inaccessibility of crowdloaned DOTs and\nthe lack of staking rewards for the entire lease duration encourages the contributors to back\nprojects that are valuable to the ecosystem."),(0,i.kt)("h2",{id:"governance"},"Governance"),(0,i.kt)("h3",{id:"what-prevents-polkadot-governance-from-failing"},"What prevents Polkadot governance from failing?"),(0,i.kt)("p",null,"Polkadot's governance has already been shown to work. Examples can be found in the runtime upgrades\nthat have successfully taken place through on the testnets as well as in a real economic environment\non ",(0,i.kt)("a",{parentName:"p",href:"https://guide.kusama.network"},"Kusama")," and Polkadot itself."),(0,i.kt)("p",null,"It is fair to say that the field of on-chain blockchain governance is still new, and no one can\nclaim to know exactly what the optimal version of on-chain governance is yet. However, Polkadot\ntakes a brave step forward in pioneering thought-through mechanisms for evolving a blockchain."),(0,i.kt)("p",null,"Blockchains need a method to adapt and evolve. Therefore, an on-chain governance system was\nnecessary for the long-term success of Polkadot. Ultimately, it is the token holders that are\nresponsible for preventing Polkadot's governance from failing by using their economic value and\nconviction to sway the progression of the protocol."),(0,i.kt)("h3",{id:"what-prevents-polkadot-governance-from-becoming-plutocratic"},"What prevents Polkadot governance from becoming plutocratic?"),(0,i.kt)("p",null,"A savvy reader might have noticed that the answer to the previous question endowed the token holder\nwith the ultimate responsibility to ensure that Polkadot's governance does not fail. By following\nthe train of this assertion, one might assume that Polkadot's governance is susceptible to becoming\nruled by a few large token holders (called ",(0,i.kt)("em",{parentName:"p"},"whales")," in trading parlance) and therefore become a mere\nplutocracy (rule of the rich)."),(0,i.kt)("p",null,"There are several other mechanisms that are built-in to the governance system to resist this\nplutocratic tendency. One of these mechanisms is called conviction voting, and imbues greater voting\npower to token holders who are willing to lock their tokens on the protocol for longer lengths of\ntime. Longer lock-ups display ",(0,i.kt)("em",{parentName:"p"},"conviction")," in a vote. Conviction voting could allow a highly\ndetermined minority to overrule the vote of an apathetic majority in certain situations. Another\nmechanism is known as Adaptive Quorum Biasing. This makes proposals have a varying threshold for\napproval or rejection based on what part of the governance protocol the proposal originated in. For\ndetails on the subtleties of Polkadot's governance system, please see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance page"),"."),(0,i.kt)("h2",{id:"parachains"},"Parachains"),(0,i.kt)("h3",{id:"how-do-parachain-economics-work"},"How do parachain economics work?"),(0,i.kt)("p",null,"Parachains have the flexibility to implement their own monetary system or incentive structure for\ncollators. However, this is not strictly necessary. Since the collator's job is to continue to give\nrecent state transitions to the validators on the Relay Chain who validate each transition, the\nsecurity of the parachain and the Polkadot network is completely separate from parachain economics.\nParachains need collators to continue to progress, so it wouldn't be unreasonable to see them\nincentivize collator nodes in some way, but the specific mechanism is completely up to parachain\nimplementers."),(0,i.kt)("h3",{id:"are-parachains-ephemeral-what-happens-when-a-parachain-loses-the-next-auction"},"Are parachains ephemeral? What happens when a parachain loses the next auction?"),(0,i.kt)("p",null,"Parachains are not ephemeral. As long as someone is keeping the data for a parachain, the parachain\ncan move between being a parachain, a parathread, or a separate sovereign chain at different points\nof its lifetime. Especially with parathreads, parachains can be decommissioned to only produce\nblocks when their usage and throughput makes it necessary."),(0,i.kt)("p",null,"When a parachain loses an auction for renewal, that parachain has a few options. In most cases,\nbecoming a parathread instead would be a suitable choice. Parathreads are still secured by the Relay\nChain, but don't need to hold a parachain slot and can produce a block when its economically\nfeasible for them. For more on parachains please see the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains page")," and for more on parathreads see\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"the parathreads page"),"."),(0,i.kt)("h2",{id:"networking"},"Networking"),(0,i.kt)("h3",{id:"what-is-libp2p"},"What is libp2p?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://libp2p.io"},"Libp2p")," is a modular and extensible networking stack that is used by IPFS,\nSubstrate, and many other projects. It is a collection of peer-to-peer protocols for finding peers\nand connecting to them. Its modules have logic for content routing, peer routing, peer discovery,\ndifferent transports, and NAT traversals. It is intended to be used by applications for building\nlarge scale peer-to-peer networks by only selecting the parts of the protocol suite that are needed."),(0,i.kt)("p",null,"The Rust implementation of the specification was built and primarily maintained by a team of\ncontributors at Parity Technologies. The Go and JavaScript versions are maintained by Protocol Labs\nas well as community contributors. A ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/status-im/nim-libp2p"},"Nim")," version of the\nlibrary also exists. Libp2p as a whole is an open source project that is actively developed and\nexpanded on various code repositories hosted on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/libp2p"},"their GitHub"),"."),(0,i.kt)("h3",{id:"does-polkadot-use-libp2p"},"Does Polkadot use libp2p?"),(0,i.kt)("p",null,"Yes, since Polkadot is built with Substrate. Substrate uses a networking protocol that is based on\nlibp2p (specifically the Rust libp2p library). However, Substrate uses a mix of standard libp2p\nprotocols and protocols that are homegrown and not official libp2p standards. Of the standards\nprotocols, those which are shared with other implementations of libp2p such as IPFS, are\nconnection-checking (ping), asking for information on a peer (identity), and Kademlia random walks\n(kad)."),(0,i.kt)("p",null,"Of the protocols that are custom to Substrate, there are the legacy Substrate stream, a\nrequest-response for getting information on blocks (sync), a light client protocol, a notification\nprotocol for transactions, and block announcement. For detailed information on how Substrate uses\nlibp2p and the standard and custom protocols, please see the\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/sc_network/index.html"},"networking documentation"),"."),(0,i.kt)("h3",{id:"how-does-libp2p-differ-from-ipfs"},"How does libp2p differ from IPFS?"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"Interplanetary File System"),' (IPFS) is a peer-to-peer hypermedia protocol used\nprimarily for storage of files. It allows one to upload a file onto the network and share it with\nits content addressable URI. IPFS, like Substrate, is an application of libp2p and exists higher on\nthe technology stack. Although both IPFS and Substrate use libp2p, it cannot be said that Substrate\n"uses" IPFS since besides sharing the underlying library for networking there is no native\nintegration between the two applications.'),(0,i.kt)("h2",{id:"kusama"},"Kusama"),(0,i.kt)("h3",{id:"what-is-the-minimum-amount-of-ksm--dot-i-can-have-in-my-account"},"What is the minimum amount of KSM / DOT I can have in my account?"),(0,i.kt)("p",null,"Please see information about ",(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info"},"Existential Deposits"),"."),(0,i.kt)("h3",{id:"what-are-the-transfer-fees-for-kusama"},"What are the transfer fees for Kusama?"),(0,i.kt)("p",null,"It is important to note that the cost of transferring KSM is dynamic. Currently, the minimum cost of\ntransferring KSM is 0.01 KSM (the base fee), although this can be changed via governance. However,\nactual transaction fees will vary based on a variety of factors. Specifically, fee calculation\nfollows the following formula:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"base_fee + (tx_length * length_fee) + WeightToFee(weight)\n")),(0,i.kt)("p",null,"Please see the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/how-to-guides/weights/calculate-fees/"},"fee calculation")," page in\nthe Substrate documentation for more detailed information."),(0,i.kt)("h2",{id:"answered-by-gav-series"},"Answered by Gav series"),(0,i.kt)("p",null,'The "Answered by Gav" series is a collection of posts uploaded to Reddit of questions that have been\nasked in the Polkadot Watercooler Riot channel and answered by Polkadot founder Gavin Wood.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87d96/answered_by_gav_reason_for_using_asynchronous/"},"Reason for using asynchronous rather than synchronous communication? Difference in terms of TPS?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87awr/answered_by_gav_how_exactly_do_validators_in_an/"},"How exactly do validators in an ETH parachain keep moving around and how is communication between zones trustless?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87bua/answered_by_gav_what_are_the_main_issues_with/"},"What are the main issues with Bitcoin integration and will it ever be possible? Same problem with other POW chains? Is Polkadot only going to work with POS chains? How is it trust-less in comparison to Cosmos though?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87cjz/answered_by_gav_what_are_the_current_thoughts/"},"What are the current thoughts around governance especially since projects have to be voted in to receive the parachains security?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/b87ds8/answered_by_gav_also_is_there_any_detailed/"},"Also is there any detailed overview of how exactly a token transfer from ETH could be exchanged with another chain's currency?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/bcqrx9/answered_by_gav_can_i_run_multiple_validators/"},"Can I run multiple Validators with the same Session Key?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/dot/comments/bcqwit/answered_by_gav_how_to_tackle_the_concentration/"},"How to tackle the concentration risk of Validators in data centers?"))))}k.isMDXComponent=!0},95856:()=>{},46601:()=>{}}]);