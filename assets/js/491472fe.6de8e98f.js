(self.webpackChunk=self.webpackChunk||[]).push([[5683],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>h,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(a),p=r,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},46997:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>u});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"learn-transaction-fees",title:"Transaction Fees",sidebar_label:"Transaction Fees"},l=void 0,c={unversionedId:"learn-transaction-fees",id:"learn-transaction-fees",isDocsHomePage:!1,title:"Transaction Fees",description:"Several resources in a blockchain network are limited, for example, storage and computation.",source:"@site/../docs/learn-transaction-fees.md",sourceDirName:".",slug:"/learn-transaction-fees",permalink:"/docs/learn-transaction-fees",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-transaction-fees.md",version:"current",lastUpdatedBy:"Trevor Arjeski",lastUpdatedAt:1626103540,formattedLastUpdatedAt:"7/12/2021",frontMatter:{id:"learn-transaction-fees",title:"Transaction Fees",sidebar_label:"Transaction Fees"}},h=[{value:"Fee Calculation",id:"fee-calculation",children:[]},{value:"Block Limits and Transaction Priority",id:"block-limits-and-transaction-priority",children:[]},{value:"Fee Adjustment",id:"fee-adjustment",children:[]},{value:"Shard Transactions",id:"shard-transactions",children:[]},{value:"Other Resource Limitation Strategies",id:"other-resource-limitation-strategies",children:[]},{value:"Advanced",id:"advanced",children:[]},{value:"Learn More",id:"learn-more",children:[]}],d={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Several resources in a blockchain network are limited, for example, storage and computation.\nTransaction fees prevent individual users from consuming too many resources. Polkadot uses a\nweight-based fee model as opposed to a gas-metering model. As such, fees are charged prior to\ntransaction execution; once the fee is paid, nodes will execute the transaction."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://research.web3.foundation/en/latest/polkadot/Token%20Economics.html"},"Web3 Foundation Research"),"\ndesigned the Polkadot fee system with the following objectives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Each Relay Chain block should be processed efficiently to avoid delays in block production."),(0,o.kt)("li",{parentName:"ul"},"The growth rate of the Relay Chain should be bounded."),(0,o.kt)("li",{parentName:"ul"},"Each block should have space for special, high-priority transactions like misconduct reports."),(0,o.kt)("li",{parentName:"ul"},"The system should be able to handle spikes in demand."),(0,o.kt)("li",{parentName:"ul"},"Fees should change slowly so that senders can accurately predict the fee for a given transaction.")),(0,o.kt)("h2",{id:"fee-calculation"},"Fee Calculation"),(0,o.kt)("p",null,"Fees on the Polkadot Relay Chain are calculated based on three parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'A per-byte fee (also known as the "length fee")'),(0,o.kt)("li",{parentName:"ul"},"A weight fee"),(0,o.kt)("li",{parentName:"ul"},"A tip (optional)")),(0,o.kt)("p",null,"The length fee is the product of a constant per-byte fee and the size of the transaction in bytes."),(0,o.kt)("p",null,"Weights are a fixed number designed to manage the time it takes to validate a block. Each\ntransaction has a base weight that accounts for the overhead of inclusion (e.g. signature\nverification) as well as a dispatch weight that accounts for the time to execute the transaction.\nThe total weight is multiplied by a per-weight fee to calculate the transaction's weight fee."),(0,o.kt)("p",null,"Tips are an optional transaction fee that users can add to give a transaction higher priority."),(0,o.kt)("p",null,"Together, these three fees constitute the inclusion fee. This fee is deducted from the sender's\naccount prior to transaction execution. A portion of the fee will go to the block producer and the\nremainder will go to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-treasury"},"Treasury"),". At Polkadot's genesis, this is set to 20% and\n80%, respectively."),(0,o.kt)("h2",{id:"block-limits-and-transaction-priority"},"Block Limits and Transaction Priority"),(0,o.kt)("p",null,"Blocks in Polkadot have both a maximum length (in bytes) and a maximum weight. Block producers will\nfill blocks with transactions up to these limits. A portion of each block - currently 25% - is\nreserved for critical transactions that are related to the chain's operation. Block producers will\nonly fill up to 75% of a block with normal transactions. Some examples of operational transactions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Misbehavior reports"),(0,o.kt)("li",{parentName:"ul"},"Council operations"),(0,o.kt)("li",{parentName:"ul"},"Member operations in an election (e.g. renouncing candidacy)")),(0,o.kt)("p",null,"Block producers prioritize transactions based on each transaction's total fee. Since a portion of\nthe fee will go to the block producer, producers will include the transactions with the highest fees\nto maximize their reward."),(0,o.kt)("h2",{id:"fee-adjustment"},"Fee Adjustment"),(0,o.kt)("p",null,"Transaction volume on blockchains is highly irregular, and therefore transaction fees need a\nmechanism to adjust. However, users should be able to predict transaction fees."),(0,o.kt)("p",null,"Polkadot uses a slow-adjusting fee mechanism with tips to balance these two considerations. In\naddition to block ",(0,o.kt)("em",{parentName:"p"},"limits,")," Polkadot also has a block fullness ",(0,o.kt)("em",{parentName:"p"},"target.")," Fees increase or decrease\nfor the next block based on the fullness of the current block relative to the target. The per-weight\nfee can change up to 30% in a 24 hour period. This rate captures long-term trends in demand, but not\nshort-term spikes. To consider short term spikes, Polkadot uses tips on top of the length and weight\nfees. Users can optionally add a tip to the fee to give the transaction a higher priority."),(0,o.kt)("h2",{id:"shard-transactions"},"Shard Transactions"),(0,o.kt)("p",null,"The transactions that take place within Polkadot's shards - parachains and parathreads - do not\nincur Relay Chain transaction fees. Users of shard applications do not even need to hold DOT tokens,\nas each shard has its own economic model and may or may not have a token. There are, however,\nsituations where shards themselves make transactions on the Relay Chain."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"Parachains")," have a dedicated slot on the Relay Chain for execution, so their\ncollators do not need to own DOT in order to include blocks. The parachain will make some\ntransactions itself, for example, opening or closing an ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-crosschain"},"XCMP")," channel,\nparticipating in an ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"auction")," to renew its slot, or upgrading its runtime. Parachains\nhave their own accounts on the Relay Chain and will need to use those funds to issue transactions on\nthe parachain's behalf."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/learn-parathreads"},"Parathreads")," will also make all the same transactions that a parachain might. In\naddition, the collators need to participate in an auction every block to progress their chain. The\ncollators will need to have DOT to participate in these auctions."),(0,o.kt)("h2",{id:"other-resource-limitation-strategies"},"Other Resource Limitation Strategies"),(0,o.kt)("p",null,"Transaction weight must be computable prior to execution, and therefore can only represent fixed\nlogic. Some transactions warrant limiting resources with other strategies. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bonds: Some transactions, like voting, may require a bond that will be returned or slashed after\nan on-chain event. In the voting example, returned at the end of the election or slashed if the\nvoter tried anything malicious."),(0,o.kt)("li",{parentName:"ul"},"Deposits: Some transactions, like setting an ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"identity")," or claiming an index, use\nstorage space indefinitely. These require a deposit that will be returned if the user decides to\nfree storage (e.g. clear their ide)."),(0,o.kt)("li",{parentName:"ul"},"Burns: A transaction may burn funds internally based on its logic. For example, a transaction may\nburn funds from the sender if it creates new storage entries, thus increasing the state size."),(0,o.kt)("li",{parentName:"ul"},"Limits: Some limits are part of the protocol. For example, nominators can only nominate 16\nvalidators. This limits the complexity of ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-phragmen"},"Phragm\xe9n"),".")),(0,o.kt)("h2",{id:"advanced"},"Advanced"),(0,o.kt)("p",null,'This page only covered transactions that come from normal users. If you look at blocks in a block\nexplorer, though, you may see some "extrinsics" that look different from these transactions. In\nPolkadot (and any chain built on Substrate), an extrinsic is a piece of information that comes from\noutside the chain. Extrinsics fall into three categories:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Signed transactions"),(0,o.kt)("li",{parentName:"ul"},"Unsigned transactions"),(0,o.kt)("li",{parentName:"ul"},"Inherents")),(0,o.kt)("p",null,"This page only covered signed transactions, which is the way that most users will interact with\nPolkadot. Signed transactions come from an account that has funds, and therefore Polkadot can charge\na transaction fee as a way to prevent spam."),(0,o.kt)("p",null,"Unsigned transactions are for special cases where a user needs to submit an extrinsic from a key\npair that does not control funds. For example, when users\n",(0,o.kt)("a",{parentName:"p",href:"https://claims.polkadot.network"},"claim their DOT tokens")," after genesis, their DOT address doesn't\nhave any funds yet, so that uses an unsigned transaction. Validators also submit unsigned\ntransactions in the form of \"heartbeat\" messages to indicate that they are online. These heartbeats\nmust be signed by one of the validator's ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-keys"},"session keys"),". Session keys never control\nfunds. Unsigned transactions are only used in special cases because, since Polkadot cannot charge a\nfee for them, each one needs its own, custom validation logic."),(0,o.kt)("p",null,'Finally, inherents are pieces of information that are not signed or included in the transaction\nqueue. As such, only the block author can add inherents to a block. Inherents are assumed to be\n"true" simply because a sufficiently large number of validators have agreed on them being\nreasonable. For example, Polkadot blocks include a timestamp inherent. There is no way to prove that\na timestamp is true the way one proves the desire to send funds with a signature. Rather, validators\naccept or reject the block based on how reasonable they find the timestamp. In Polkadot, it must be\nwithin some acceptable range of their own system clocks.'),(0,o.kt)("h2",{id:"learn-more"},"Learn More"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/Token%20Economics.html#relay-chain-transaction-fees-and-per-block-transaction-limits"},"Web3 Foundation Research")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/weight"},"Substrate Weights")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/runtime/fees"},"Substrate Fees")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://substrate.dev/docs/en/knowledgebase/learn-substrate/extrinsics"},"Extrinsics"))))}u.isMDXComponent=!0}}]);