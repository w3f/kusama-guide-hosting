(self.webpackChunk=self.webpackChunk||[]).push([[4097],{35703:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var n=a(67294);const i=function(e){var t,a=e.message,i=(0,n.useState)(!0),o=i[0],r=i[1];return n.createElement(n.Fragment,null,o&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(74165),i=a(15861),o=a(67294),r=a(87152),s=a(9712),l=a(67425);function p(e,t,a){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,n.Z)().mark((function e(t,a,i){var o,l,p,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return p=new r.U(o),e.next=21,s.G.create({provider:p});case 21:u=e.sent,(d=a.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,u=(0,o.useState)(""),c=u[0],h=u[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":e="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(){var i;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,h);case 2:if(void 0!==(i=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(i,l,t,h):h(i);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(s){console.log(s)}}}),[]),c}},67425:e=>{var t="polkadot",a="kusama",n="statemine",i="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,s){var l=void 0;if(r===t||r===i)l=3;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/o[r].precision)?e/o[r].precision+" "+o[r].symbol:(e/o[r].precision).toFixed(l)+" "+o[r].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,o,r){var s=void 0;if(r===t||r===i)s=1;else{if(r!==a&&r!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}o((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},7522:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=a(87462),i=a(63366),o=(a(67294),a(3905)),r=a(47940),s=a(35703),l=["components"],p={id:"learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",sidebar_label:"Treasury Guides",description:"Polkadot-JS Guides about the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","polkadot-js"],slug:"../learn-guides-treasury"},u=void 0,d={unversionedId:"learn/learn-guides-treasury",id:"learn/learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",description:"Polkadot-JS Guides about the Polkadot Treasury.",source:"@site/../docs/learn/learn-guides-treasury.md",sourceDirName:"learn",slug:"/learn-guides-treasury",permalink:"/docs/learn-guides-treasury",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1718209198,formattedLastUpdatedAt:"Jun 12, 2024",frontMatter:{id:"learn-guides-treasury",title:"Polkadot-JS Guides about the Treasury",sidebar_label:"Treasury Guides",description:"Polkadot-JS Guides about the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","polkadot-js"],slug:"../learn-guides-treasury"},sidebar:"docs",previous:{title:"OpenGov Guides",permalink:"/docs/learn-guides-polkadot-opengov"},next:{title:"Bounty Guides",permalink:"/docs/learn-guides-bounties"}},c={},h=[{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",level:2},{value:"Announcing the Proposal",id:"announcing-the-proposal",level:3},{value:"Creating a Treasury Proposal - Spend Local",id:"creating-a-treasury-proposal---spend-local",level:2},{value:"Submit Treasury Proposal Preimage",id:"submit-treasury-proposal-preimage",level:3},{value:"Submit a Treasury Track Referendum",id:"submit-a-treasury-track-referendum",level:3},{value:"Place a Decision Deposit for the Treasury Track Referendum",id:"place-a-decision-deposit-for-the-treasury-track-referendum",level:3},{value:"Creating a Multistage Payout Proposal with <code>validFrom</code>",id:"creating-a-multistage-payout-proposal-with-validfrom",level:2},{value:"Using <code>batch</code> for Multi-Spend Proposals",id:"using-batch-for-multi-spend-proposals",level:3},{value:"Using <code>validFrom</code> for a Milestone-Based Proposal",id:"using-validfrom-for-a-milestone-based-proposal",level:3},{value:"Creating a USDT Treasury Proposal - Spend (with AssetHub)",id:"creating-a-usdt-treasury-proposal---spend-with-assethub",level:2},{value:"Creating a Preimage",id:"creating-a-preimage",level:3},{value:"Specifying Asset Kind",id:"specifying-asset-kind",level:3},{value:"Specifying the Amount",id:"specifying-the-amount",level:3},{value:"Specifying the Beneficiary",id:"specifying-the-beneficiary",level:3},{value:"Specifying <code>validFrom</code> (optional)",id:"specifying-validfrom-optional",level:3},{value:"Manually Claiming Payouts",id:"manually-claiming-payouts",level:3},{value:"Proposing a &quot;Void&quot; for a Staged Proposal",id:"proposing-a-void-for-a-staged-proposal",level:3},{value:"Submit Treasury Proposal via Polkassembly",id:"submit-treasury-proposal-via-polkassembly",level:2},{value:"Requesting Tips from the Treasury",id:"requesting-tips-from-the-treasury",level:2}],m={toc:h},k="wrapper";function g(e){var t=e.components,p=(0,i.Z)(e,l);return(0,o.kt)(k,(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"this page")," to learn about the Polkadot Treasury."),(0,o.kt)("h2",{id:"creating-a-treasury-proposal"},"Creating a Treasury Proposal"),(0,o.kt)("p",null,"Your proposal should address a problem, outline a goal, give a detailed account of how you will\nreach that goal, and include any ongoing maintenance needs. As much as possible, you should itemize\nthe tasks to be completed so fees can be evaluated and milestones can be followed. You can check the\n"," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1CzEnurqwqLBOGrJI9CQORiGW9m6QyPOSshhzJdR57Pk"},"guidelines for a successful proposal"),"\nand fill out the\n"," Treasury proposal template\nprovided."),(0,o.kt)("h3",{id:"announcing-the-proposal"},"Announcing the Proposal"),(0,o.kt)("p",null,"To minimize storage on-chain, proposals don't contain contextual information. When a user submits a\nproposal, they will need to find an off-chain way to explain the proposal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many community members participate in discussion in the\n",(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Kusama-Direction:parity.io"},"Kusama Direction room")," and the\n",(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusamawatercooler:polkadot.builders"},"Kusama Watercooler"),"."),(0,o.kt)("li",{parentName:"ul"},"Use platforms like ",(0,o.kt)("a",{parentName:"li",href:"https://polkassembly.io"},"Polkassembly")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://www.subsquare.io/"},"SubSquare")," to initiate discussion with the community. They also offer\na gauge poll to capture the community sentiment before submitting an on-chain referendum.")),(0,o.kt)("p",null,"Spreading the word about the proposal's explanation to the community is ultimately up to the\nproposer."),(0,o.kt)("admonition",{title:"Use Accounts with Verified On-Chain Identity for Treasury Proposals",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To ensure legitimacy, it is required that the account linked to the Treasury proposal has an\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"identity set"),"\nand is\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"verified by an on-chain registrar"),".")),(0,o.kt)("h2",{id:"creating-a-treasury-proposal---spend-local"},"Creating a Treasury Proposal - Spend Local"),(0,o.kt)("admonition",{title:'"Spend" vs. "Spend Local"',type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You may notice that the Treasury pallet contains two extrinsics - ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spend")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spendLocal"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spendLocal")," (formally called ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spend"),") refers to a spend of\nDOT that is locally available, i.e., DOT from the Relay Chain's treasury account. ",(0,o.kt)("inlineCode",{parentName:"p"},"spend")," actually\nallows the caller to specify an asset other than DOT, or even assets in other locations, e.g.\n",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#asset-hub"},"Asset Hub"),"."),(0,o.kt)("p",{parentName:"admonition"},"Unlike ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spendLocal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spend")," is ",(0,o.kt)("strong",{parentName:"p"},"not")," bound by a spend period, and must be\nclaimed manually via the ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.payout")," extrinsic. ",(0,o.kt)("inlineCode",{parentName:"p"},"treasuy.spendLocal")," behavior remains\nunchanged.")),(0,o.kt)("h3",{id:"submit-treasury-proposal-preimage"},"Submit Treasury Proposal Preimage"),(0,o.kt)("p",null,"The example below shows how to create a ",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#preimage"},"preimage")," for a\ntransaction that requests 100 DOT from Treasury."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Preimages"),"\nand then click on Add Preimage."),(0,o.kt)("li",{parentName:"ul"},"Select the account which will be used to submit the preimage."),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"treasury"),' pallet in the "propose" dropdown and the ',(0,o.kt)("inlineCode",{parentName:"li"},"spendLocal(amount, beneficiary)"),"call"),(0,o.kt)("li",{parentName:"ul"},"Enter the DOT amount."),(0,o.kt)("li",{parentName:"ul"},"Enter the AccountID of the beneficiary (which has a verified on-chain identity)."),(0,o.kt)("li",{parentName:"ul"},"Submit preimage"),(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction by paying the specified transaction fees.")),(0,o.kt)("admonition",{title:"Preimage Submission Deposit",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around\n1.4 KSM . Ensure you have enough account\nbalance to pay for the submission deposit and the transaction fees.")),(0,o.kt)("p",null,"Here is the preimage requesting for 100 DOT."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Treasury Preimage",src:a(95335).Z,width:"2148",height:"1191"})),(0,o.kt)("admonition",{title:"Balance entered is in Plancks",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Polkadot JS UI is for developers and the UI takes input of the balance in\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-DOT#the-planck-unit"},"plancks"),". DOT has 10 decimals, which is 10000000000 plancks per DOT.")),(0,o.kt)("p",null,"After successful submission of the preimage, it is displayed on Polkadot-JS UI > Governance >\nPreimages page. Every preimage is associated with a unique preimage hash (highlighted in a box in\nthe image below). Take a note of this preimage hash, which is required to submit a referendum."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Treasury Preimage Hash",src:a(83601).Z,width:"2879",height:"453"})),(0,o.kt)("h3",{id:"submit-a-treasury-track-referendum"},"Submit a Treasury Track Referendum"),(0,o.kt)("p",null,"The example below shows how to submit a Treasury track referendum."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),"\nand then click on Submit proposal."),(0,o.kt)("li",{parentName:"ul"},"Select the account which will be used to submit the proposal."),(0,o.kt)("li",{parentName:"ul"},"Choose the appropriate submission track (The example below selected Small Spender track)."),(0,o.kt)("li",{parentName:"ul"},"Enter the preimage hash of the treasury spend transaction.(If the preimage exists on-chain, the\npreimage length box is automatically populated)"),(0,o.kt)("li",{parentName:"ul"},"Click on Submit proposal."),(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit Treasury Proposal",src:a(67847).Z,width:"2141",height:"1238"})),(0,o.kt)("p",null,"Once your submission is executed, your referendum will appear under your chosen track on the\nPolkadot-JS UI ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"referenda page"),"."),(0,o.kt)("h3",{id:"place-a-decision-deposit-for-the-treasury-track-referendum"},"Place a Decision Deposit for the Treasury Track Referendum"),(0,o.kt)("p",null,"For the referendum to move from preparing phase to the deciding phase, a decision deposit needs to\nbe placed. The decision deposit values for each individual\n",(0,o.kt)("a",{parentName:"p",href:"./learn-polkadot-opengov-treasury#treasury-tracks"},"Treasury Tracks")," are listed in a section above\nin this document."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit Treasury Proposal Decision Deposit",src:a(49431).Z,width:"2133",height:"168"})),(0,o.kt)("p",null,"The preimage and decision deposits\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits"},"can be claimed once the referendum ends"),"."),(0,o.kt)("h2",{id:"creating-a-multistage-payout-proposal-with-validfrom"},"Creating a Multistage Payout Proposal with ",(0,o.kt)("inlineCode",{parentName:"h2"},"validFrom")),(0,o.kt)("p",null,"Staged proposals are similar to a tranche or milestone-based funding model; instead of all spends\nbeing paid simultaneously, each portion is redeemable at a certain block height. This is done by\nspecifying each milestone, set at its respective amount and block height at which it becomes\nredeemable."),(0,o.kt)("p",null,'For example, take the following "staged" proposal, which has three milestones, each at 100 DOT, and\nis redeemable at the following block heights. Usually, block heights correspond to a date in the\nfuture:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"100 DOT paid out at block height 1000"),(0,o.kt)("li",{parentName:"ul"},"200 DOT paid out at block height 2000"),(0,o.kt)("li",{parentName:"ul"},"500 DOT paid out at block height 4000")),(0,o.kt)("p",null,"Governance can also propose to ",(0,o.kt)("strong",{parentName:"p"},"void")," a staged proposal before it has completed all of its\npayouts."),(0,o.kt)("admonition",{title:"Calculating dates from block heights",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Although not the most accurate form of measurement, block heights can be used to correspond to\ncertain dates in the future.")),(0,o.kt)("h3",{id:"using-batch-for-multi-spend-proposals"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"batch")," for Multi-Spend Proposals"),(0,o.kt)("p",null,"Using the Utility pallet, one can batch multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.spend")," calls together. Each of these\ncalls can have its own ",(0,o.kt)("inlineCode",{parentName:"p"},"validFrom")," block height, which allows for scenarios such as the above to be\npossible."),(0,o.kt)("admonition",{title:"Multistage payout proposal example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For reference on how to create a multistage payout proposal, please check\n",(0,o.kt)("a",{parentName:"p",href:"https://kusama.subsquare.io/referenda/382?tab=call"},"Referendum 382")," on Kusama.")),(0,o.kt)("h3",{id:"using-validfrom-for-a-milestone-based-proposal"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"validFrom")," for a Milestone-Based Proposal"),(0,o.kt)("p",null,"Once each spend is defined within the batched call, the ",(0,o.kt)("inlineCode",{parentName:"p"},"validFrom"),' field can be utilized to specify\nthe "date", or block height, at which each spend will be executed.'),(0,o.kt)("admonition",{title:"Treasury Spends have to be claimed manually. Spends can expire!",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep in mind that once the ",(0,o.kt)("inlineCode",{parentName:"p"},"validFrom")," block height has been reached, you will have to claim the\nspend within 30 days. Check the claiming process for treasury spends\n",(0,o.kt)("a",{parentName:"p",href:"#manually-claiming-payouts"},"here"))),(0,o.kt)("h2",{id:"creating-a-usdt-treasury-proposal---spend-with-assethub"},"Creating a USDT Treasury Proposal - Spend (with AssetHub)"),(0,o.kt)("p",null,"The following tutorial mostly goes over how to utilize the ",(0,o.kt)("inlineCode",{parentName:"p"},"spend")," extrinsic, which, unlike\n",(0,o.kt)("inlineCode",{parentName:"p"},"spendLocal"),", is able to specify assets besides the native asset in other locations, such as\n",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#asset-hub"},"Asset Hub"),"."),(0,o.kt)("h3",{id:"creating-a-preimage"},"Creating a Preimage"),(0,o.kt)("p",null,"The example below shows how to create a ",(0,o.kt)("a",{parentName:"p",href:"../general/glossary#preimage"},"preimage")," for a transaction\nthat requests 100 USDT from AssetHub."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Referenda"),"\nand then click on Add Preimage."),(0,o.kt)("li",{parentName:"ul"},"Select the account to submit the preimage."),(0,o.kt)("li",{parentName:"ul"},"Choose the ",(0,o.kt)("inlineCode",{parentName:"li"},"treasury"),' pallet in the "propose" dropdown and the\n',(0,o.kt)("inlineCode",{parentName:"li"},"spend(assetKind, amount, beneficiary, validFrom)")," call.")),(0,o.kt)("p",null,"Now, let's go through each field one-by-one and fill them in accordingly:"),(0,o.kt)("h3",{id:"specifying-asset-kind"},"Specifying Asset Kind"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"assetKind")," refers to the asset to be used, specified via XCM. In short, we need to be able to find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The relative location of the asset, and"),(0,o.kt)("li",{parentName:"ul"},"How it is identified within this location.")),(0,o.kt)("p",null,"For this example, we are using USDT, which from the perspective of the Relay Chain would be:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Parachain 1000 (AssetHub) > AssetId (Concrete) > PalletInstance 50 > General Index 1984")),(0,o.kt)("p",null,"First, we specify the location - in this case, Asset Hub (parachain 1,000). ",(0,o.kt)("inlineCode",{parentName:"p"},"PalletInstance 50"),"\nrefers to the Assets pallet instance on Asset Hub. The general index is ",(0,o.kt)("inlineCode",{parentName:"p"},"1984"),", which is the ID of\nUSDT in this instance of the Assets pallet."),(0,o.kt)("admonition",{title:"Bug on Polkadot-JS UI",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As the Polkadot-JS UI is interpreting the general index in DOT, it multiplies the entered values\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000")," (As DOT token has 10 decimals) and places it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"u128")," argument. As we would\nlike to have ",(0,o.kt)("inlineCode",{parentName:"p"},"1984")," as the input argument, we can offset this UI induced error by entering\n",(0,o.kt)("inlineCode",{parentName:"p"},"0.0000001984"),"."),(0,o.kt)("p",{parentName:"admonition"},"The issue on Polkadot-JS repo can be tracked\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/10430"},"here"),".")),(0,o.kt)("p",null,"Here is how the final ",(0,o.kt)("inlineCode",{parentName:"p"},"assetKind")," field should look:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset Kind",src:a(71365).Z,width:"1564",height:"1316"})),(0,o.kt)("h3",{id:"specifying-the-amount"},"Specifying the Amount"),(0,o.kt)("p",null,"The amount should be simply the amount of USDT, where each ",(0,o.kt)("inlineCode",{parentName:"p"},"1")," USDT is ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000"),". Because we are\nasking for 100 USDT, we put ",(0,o.kt)("inlineCode",{parentName:"p"},"100000000")," as the input for the amount."),(0,o.kt)("admonition",{title:"Bug on Polkadot-JS UI",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"As the Polkadot-JS UI is interpreting the asset balance in DOT, it multiplies the entered values\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000")," (As DOT token has 10 decimals) and places it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"u128")," argument. As we would\nlike to have ",(0,o.kt)("inlineCode",{parentName:"p"},"100000000")," as the input argument, we can offset this UI induced error by entering\n",(0,o.kt)("inlineCode",{parentName:"p"},"0.01")," for this particular example where we like to input 100 USDT."),(0,o.kt)("p",{parentName:"admonition"},"The issue on Polkadot-JS repo can be tracked\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/10430"},"here"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset Value, Beneficiary and ValidFrom",src:a(53314).Z,width:"1591",height:"1279"})),(0,o.kt)("h3",{id:"specifying-the-beneficiary"},"Specifying the Beneficiary"),(0,o.kt)("p",null,"The beneficiary account will be one on Asset Hub. For this reason, the XCM junction must be\nspecified as follows, with one junction (",(0,o.kt)("inlineCode",{parentName:"p"},"X1"),") and the beneficiary account (",(0,o.kt)("inlineCode",{parentName:"p"},"AccountId32"),"), which is\nan account address on the chain."),(0,o.kt)("h3",{id:"specifying-validfrom-optional"},"Specifying ",(0,o.kt)("inlineCode",{parentName:"h3"},"validFrom")," (optional)"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"validFrom")," field is optional, and refers to the block height of the Relay Chain upon which the\npayout can be issued. If the ",(0,o.kt)("inlineCode",{parentName:"p"},"validFrom")," parameter is not set, the spend can be paid out immediately\nafter approval. For more information on this field, refer to the\n",(0,o.kt)("a",{parentName:"p",href:"#creating-a-staged-proposal-with-validfrom"},"guide below"),"."),(0,o.kt)("p",null,"The final call should look like the following, where we:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specify our asset as ",(0,o.kt)("strong",{parentName:"li"},"USDT")," on ",(0,o.kt)("strong",{parentName:"li"},"Asset Hub"),"."),(0,o.kt)("li",{parentName:"ul"},"Specify the ",(0,o.kt)("strong",{parentName:"li"},"amount")," of ",(0,o.kt)("strong",{parentName:"li"},"USDT")," (100)."),(0,o.kt)("li",{parentName:"ul"},"Specify the beneficiary address."),(0,o.kt)("li",{parentName:"ul"},"If applicable, use the ",(0,o.kt)("inlineCode",{parentName:"li"},"validFrom")," field to specify a block number upon which the payout becomes\nvalid.")),(0,o.kt)("p",null,"The next steps are to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the preimage (and its length)"),(0,o.kt)("li",{parentName:"ul"},"Sign and submit the preimage")),(0,o.kt)("p",null,"Once this is finished, one may submit a proposal\n",(0,o.kt)("a",{parentName:"p",href:"#submit-a-treasury-track-referendum"},"as stated above"),". Keep in mind one will also need to\n",(0,o.kt)("a",{parentName:"p",href:"#place-a-decision-deposit-for-the-treasury-track-referendum"},"provide the decision deposit as well"),"."),(0,o.kt)("h3",{id:"manually-claiming-payouts"},"Manually Claiming Payouts"),(0,o.kt)("p",null,"In order to claim the spend, you must manually call the ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.payout")," extrinsic via a ",(0,o.kt)("inlineCode",{parentName:"p"},"Signed"),"\norigin. The ",(0,o.kt)("inlineCode",{parentName:"p"},"spendID")," for the pending payout can be queried on-chain through Polkadot-JS UI >\nDeveloper > Chain State > Storage > treasury > spends and unselect the include option and then click\non the plus button to the right."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"payout",src:a(85304).Z,width:"2768",height:"1370"})),(0,o.kt)("p",null,"From the list of spends, find the ",(0,o.kt)("inlineCode",{parentName:"p"},"spendID")," of your respetive payout and issue the payout extrinsic."),(0,o.kt)("admonition",{title:"payout example",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To claim the first payout of ",(0,o.kt)("a",{parentName:"p",href:"https://kusama.subsquare.io/referenda/382?tab=call"},"Referendum 382")," on\nKusama, ",(0,o.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/extrinsic/23061444-2"},"this payout extrinsic")," was issued. After\nissuing the payout extrinsic, the status of the payout changes from ",(0,o.kt)("inlineCode",{parentName:"p"},"pending")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Attempted")," with a\nreference to a payment ID. If the payout is successful, the balance on Asset Hub should be updated.\n",(0,o.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6923602-0"},"Here")," is the transfer extrinsic on Asset\nHub for the first payout of ",(0,o.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/referenda_v2/382"},"Referendum 382"),".")),(0,o.kt)("p",null,"To clear the on-chain storage of a successful or expired spend, Treasury pallet's ",(0,o.kt)("inlineCode",{parentName:"p"},"checkStatus"),"\nextrinsic can be used. The transaction fees paid for issuing this extrinsic will be refunded."),(0,o.kt)("h3",{id:"proposing-a-void-for-a-staged-proposal"},'Proposing a "Void" for a Staged Proposal'),(0,o.kt)("p",null,"If a proposal that hasn't completed all of its spends needs to be voided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"treasury.voidSpend"),"\nextrinsic can be utilized via a governance proposal."),(0,o.kt)("admonition",{title:"Example proposal - Voiding a Treasury Spend",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For reference, check the referenda on Kusama that\n",(0,o.kt)("a",{parentName:"p",href:"https://kusama.subsquare.io/referenda/391"},"tests VoidSpend functionality for Treasury Payouts"),".\nThrough this referenda, a treasury spend was\n",(0,o.kt)("a",{parentName:"p",href:"https://kusama.subscan.io/event?page=1&time_dimension=date&module=treasury&event_id=assetspendvoided"},"successfully voided"),".")),(0,o.kt)("h2",{id:"submit-treasury-proposal-via-polkassembly"},"Submit Treasury Proposal via Polkassembly"),(0,o.kt)("p",null,"To submit a treasury track referendum via ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/opengov"},"Polkassembly"),"\nclick on the FAB button in the bottom right corner. Then,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click on "Create Treasury Proposal" and choose an address for the proposer.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After choosing an address, you will enter a three-stage guideline:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Write a proposal: you can add a detailed description for the proposal, which will be stored on\nPolkassembly. Alternatively, you can link an existing discussion post.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"polkassembly-write-proposal",src:a(90348).Z,width:"2130",height:"1596"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create a preimage: an existing preimage can be linked, or a new one can be created. To create a\npreimage, add the beneficiary address and the\nKSM amount. The track will be auto-selected\nand the user can proceed with the creation of a preimage.")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"polkassembly-create-preimage",src:a(76869).Z,width:"2154",height:"1598"})),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Create a proposal: final confirmation about the proposal creation. The description of the\nproposal and the preimage are automatically linked to the proposal.")))),(0,o.kt)("h2",{id:"requesting-tips-from-the-treasury"},"Requesting Tips from the Treasury"),(0,o.kt)("p",null,"To request a tip funded by the treasury, you can follow the above steps for\n",(0,o.kt)("a",{parentName:"p",href:"#creating-a-treasury-proposal"},"creating a treasury proposal")," but instead of submitting the proposal\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"32 / Small Spender")," track, you will need to submit it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"30 / Small Tipper")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"31 / Big Tipper")," tracks depending on the number of tokens to be requested."),(0,o.kt)("p",null,"Briefly, you will need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a preimage using the ",(0,o.kt)("inlineCode",{parentName:"li"},"treasury.spendLocal")," extrinsic and specifying the number of tokens\nand the beneficiary of the tip"),(0,o.kt)("li",{parentName:"ul"},"Submit a proposal to the right track (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"30")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"31"),") using the preimage hash"),(0,o.kt)("li",{parentName:"ul"},"Once you started the referendum go to ",(0,o.kt)("a",{parentName:"li",href:"https://polkassembly.io/"},"Polkassembly"),", log in with the\nproposer account and edit the referendum details"),(0,o.kt)("li",{parentName:"ul"},"Notify the\n","",(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Kusama Direction Element Channel"),"\nabout your referendum"),(0,o.kt)("li",{parentName:"ul"},"Place the decision deposit before the\n","",(0,o.kt)(r.Z,{network:"kusama",path:"consts.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"-day\ntimeout"),(0,o.kt)("li",{parentName:"ul"},"Once the referendum ends you can\n",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits"},"claim the preimage and decision deposits back"))))}g.isMDXComponent=!0},53314:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/spend-amount-account-validfrom-temp-51145f395b6786e783600e3665bc7fab.png"},71365:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/spend-usdt-assethub-temp-4182c6d400d00e1c4d8e94efc96dadcf.png"},76869:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkassembly-create-preimage-7396a8ce796d0f0dcad30d3edced8618.png"},90348:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/polkassembly-write-proposal-a3ce8ab9303111f6003ac8103ba29507.png"},95335:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/OpenGov-Treasury-Preimage-SpendLocal-693c955b1e3e27bb6c98a6aad4d1b697.png"},67847:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/submit-proposal-treasury-3948a231c4f3162a8680ad052af9e903.png"},85304:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-multistage-payout-spend-id-54e73a1e8829cb911284ad15654d5661.png"},83601:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-preimage-hash-05bb427d21d3ecf7d5e38418a0a0f4ed.png"},49431:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/treasury-proposal-decision-deposit-849d27481ba0134acf743f7474d8f6a4.png"},46601:()=>{}}]);