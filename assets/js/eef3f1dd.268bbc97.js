(self.webpackChunk=self.webpackChunk||[]).push([[4097],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var r=a(74165),n=a(15861),o=a(67294),i=a(87152),s=a(17145),l=a(67425);function u(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,r.Z)().mark((function e(t,a,n){var o,l,u,p,d;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return u=new i.U(o),e.next=21,s.G.create({provider:u});case 21:p=e.sent,(d=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,a,r){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,r);break;case"precise":(0,l.Precise)(e,a,r);break;case"blocksToDays":(0,l.BlocksToDays)(e,r);break;case"percentage":(0,l.Percentage)(e,r);break;case"permillToPercent":(0,l.PermillToPercent)(e,r);break;case"arrayLength":(0,l.ArrayLength)(e,r);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,o.useState)(""),c=p[0],m=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(i.toString(),l,t,m):m(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,n.Z)((0,r.Z)().mark((function e(){var n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,a,m);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(n,l,t,m):m(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(s){console.log(s)}}}),[]),c}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,r){var n=void 0;if("polkadot"===a||"statemint"===a)n=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}e=parseFloat(e),r((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(n)+" "+t[a].symbol).toString())},Precise:function(e,a,r){r(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},7522:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),i=a(47940),s=["components"],l={id:"learn-guides-treasury",title:"Polkadot Treasury How-to Guides",sidebar_label:"Treasury",description:"Advanced How-to Guides about requesting funds from the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","bounties"],slug:"../learn-guides-treasury"},u=void 0,p={unversionedId:"learn/learn-guides-treasury",id:"learn/learn-guides-treasury",title:"Polkadot Treasury How-to Guides",description:"Advanced How-to Guides about requesting funds from the Polkadot Treasury.",source:"@site/../docs/learn/learn-guides-treasury.md",sourceDirName:"learn",slug:"/learn-guides-treasury",permalink:"/docs/learn-guides-treasury",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1697709829,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"learn-guides-treasury",title:"Polkadot Treasury How-to Guides",sidebar_label:"Treasury",description:"Advanced How-to Guides about requesting funds from the Polkadot Treasury.",keywords:["opengov","polkadot opengov","referenda","treasury","tipps","bounties"],slug:"../learn-guides-treasury"}},d={},c=[{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",level:2},{value:"Announcing the Proposal",id:"announcing-the-proposal",level:3},{value:"Submit Treasury Proposal Preimage",id:"submit-treasury-proposal-preimage",level:3},{value:"Submit a Treasury Track Referendum",id:"submit-a-treasury-track-referendum",level:3},{value:"Place a Decision Deposit for the Treasury Track Referendum",id:"place-a-decision-deposit-for-the-treasury-track-referendum",level:3},{value:"Requesting Tips from the Treasury",id:"requesting-tips-from-the-treasury",level:2}],m={toc:c},h="wrapper";function k(e){var t=e.components,l=(0,n.Z)(e,s);return(0,o.kt)(h,(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-a-treasury-proposal"},"Creating a Treasury Proposal"),(0,o.kt)("p",null,"Your proposal should address a problem, outline a goal, give a detailed account of how you will\nreach that goal, and include any ongoing maintenance needs. As much as possible, you should itemize\nthe tasks to be completed so fees can be evaluated and milestones can be followed. You can check the\n"," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1CzEnurqwqLBOGrJI9CQORiGW9m6QyPOSshhzJdR57Pk"},"guidelines for a successful proposal"),"\nand fill out the\n"," Treasury proposal template\nprovided."),(0,o.kt)("h3",{id:"announcing-the-proposal"},"Announcing the Proposal"),(0,o.kt)("p",null,"To minimize storage on-chain, proposals don't contain contextual information. When a user submits a\nproposal, they will need to find an off-chain way to explain the proposal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Many community members participate in discussion in the\n",(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Kusama-Direction:parity.io"},"Kusama Direction room")," and the\n",(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusamawatercooler:polkadot.builders"},"Kusama Watercooler"),"."),(0,o.kt)("li",{parentName:"ul"},"Use platforms like ",(0,o.kt)("a",{parentName:"li",href:"https://polkassembly.io"},"Polkassembly")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://www.subsquare.io/"},"SubSquare")," to initiate discussion with the community. They also offer\na gauge poll to capture the community sentiment before submitting an on-chain referendum.")),(0,o.kt)("p",null,"Spreading the word about the proposal's explanation to the community is ultimately up to the\nproposer."),(0,o.kt)("admonition",{title:"Use Accounts with Verified On-Chain Identity for Treasury Proposals",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"To ensure legitimacy, it is required that the account linked to the Treasury proposal has an\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181981-how-to-set-and-clear-an-identity"},"identity set"),"\nand is\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181990-how-to-request-and-cancel-identity-judgement"},"verified by an on-chain registrar"),".")),(0,o.kt)("h3",{id:"submit-treasury-proposal-preimage"},"Submit Treasury Proposal Preimage"),(0,o.kt)("p",null,"The example below shows how to create a ",(0,o.kt)("a",{parentName:"p",href:"../general/glossary#preimage"},"preimage")," for a transaction\nthat requests 100 DOT from Treasury."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/preimages"},"Polkadot-JS UI > Governance > Preimages"),"\nand then click on Add Preimage."),(0,o.kt)("li",{parentName:"ul"},"Select the account which will be used to submit the preimage."),(0,o.kt)("li",{parentName:"ul"},"Choose ",(0,o.kt)("inlineCode",{parentName:"li"},"treasury"),' pallet in the "propose" dropdown and the ',(0,o.kt)("inlineCode",{parentName:"li"},"spend(amount, beneficiary)"),"call"),(0,o.kt)("li",{parentName:"ul"},"Enter the DOT amount."),(0,o.kt)("li",{parentName:"ul"},"Enter the AccountID of the beneficiary (which has a verified on-chain identity)."),(0,o.kt)("li",{parentName:"ul"},"Submit preimage"),(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction by paying the specified transaction fees.")),(0,o.kt)("admonition",{title:"Preimage Submission Deposit",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"A deposit is required for the preimage to be stored on chain. The preimage deposit is proportional\nto the amount of information stored within the preimage. The deposit amount required for a preimage\nwith a treasury spend transaction is around\n1.4 KSM . Ensure you have enough account\nbalance to pay for the submission deposit and the transaction fees.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Treasury Preimage",src:a(95773).Z,width:"2147",height:"1199"})),(0,o.kt)("p",null,"After successful submission of the preimage, it is displayed on Polkadot-JS UI > Governance >\nPreimages page. Every preimage is associated with a unique preimage hash (highlighted in a box in\nthe image below). Take a note of this preimage hash, which is required to submit a referendum."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Treasury Preimage Hash",src:a(83601).Z,width:"2879",height:"453"})),(0,o.kt)("h3",{id:"submit-a-treasury-track-referendum"},"Submit a Treasury Track Referendum"),(0,o.kt)("p",null,"The example below shows how to submit a Treasury track referendum."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/referenda"},"Polkadot-JS UI > Governance > Referenda"),"\nand then click on Submit proposal."),(0,o.kt)("li",{parentName:"ul"},"Select the account which will be used to submit the proposal."),(0,o.kt)("li",{parentName:"ul"},"Choose the appropriate submission track (The example below selected Small Spender track)."),(0,o.kt)("li",{parentName:"ul"},"Enter the preimage hash of the treasury spend transaction.(If the preimage exists on-chain, the\npreimage length box is automatically populated)"),(0,o.kt)("li",{parentName:"ul"},"Click on Submit proposal."),(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit Treasury Proposal",src:a(67847).Z,width:"2141",height:"1238"})),(0,o.kt)("p",null,"Once your submission is executed, your referendum will appear under your chosen track on the\nPolkadot-JS UI ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/referenda"},"referenda page"),"."),(0,o.kt)("h3",{id:"place-a-decision-deposit-for-the-treasury-track-referendum"},"Place a Decision Deposit for the Treasury Track Referendum"),(0,o.kt)("p",null,"For the referendum to move from preparing phase to the deciding phase, a decision deposit needs to\nbe placed. The decision deposit values for each individual\n",(0,o.kt)("a",{parentName:"p",href:"./learn-polkadot-opengov-treasury#treasury-tracks"},"Treasury Tracks")," are listed in a section above\nin this document."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submit Treasury Proposal Decision Deposit",src:a(49431).Z,width:"2133",height:"168"})),(0,o.kt)("p",null,"The preimage and decision deposits\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits"},"can be claimed once the referendum ends"),"."),(0,o.kt)("h2",{id:"requesting-tips-from-the-treasury"},"Requesting Tips from the Treasury"),(0,o.kt)("p",null,"To request a tip funded by the treasury, you can follow the above steps for\n",(0,o.kt)("a",{parentName:"p",href:"#creating-a-treasury-proposal"},"creating a treasury proposal")," but instead of submitting the proposal\nto the ",(0,o.kt)("inlineCode",{parentName:"p"},"32 / Small Spender")," track, you will need to submit it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"30 / Small Tipper")," or\n",(0,o.kt)("inlineCode",{parentName:"p"},"31 / Big Tipper")," tracks depending on the number of tokens to be requested."),(0,o.kt)("p",null,"Briefly, you will need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a preimage using the ",(0,o.kt)("inlineCode",{parentName:"li"},"treasury.Spend")," extrinsic and specifying the number of tokens and the\nbeneficiary of the tip"),(0,o.kt)("li",{parentName:"ul"},"Submit a proposal to the right track (i.e. ",(0,o.kt)("inlineCode",{parentName:"li"},"30")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"31"),") using the preimage hash"),(0,o.kt)("li",{parentName:"ul"},"Once you started the referendum go to ",(0,o.kt)("a",{parentName:"li",href:"https://polkassembly.io/"},"Polkassembly"),", log in with the\nproposer account and edit the referendum details"),(0,o.kt)("li",{parentName:"ul"},"Notify the\n","",(0,o.kt)("a",{parentName:"li",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Kusama Direction Element Channel"),"\nabout your referendum"),(0,o.kt)("li",{parentName:"ul"},"Place the decision deposit before the\n","",(0,o.kt)(i.Z,{network:"kusama",path:"consts.referenda.undecidingTimeout",defaultValue:201600,filter:"blocksToDays",mdxType:"RPC"}),"-day\ntimeout"),(0,o.kt)("li",{parentName:"ul"},"Once the referendum ends you can\n",(0,o.kt)("a",{parentName:"li",href:"/docs/learn-guides-polkadot-opengov#claiming-the-preimage-and-decision-deposits"},"claim the preimage and decision deposits back"))))}k.isMDXComponent=!0},67847:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/submit-proposal-treasury-3948a231c4f3162a8680ad052af9e903.png"},83601:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/treasury-preimage-hash-05bb427d21d3ecf7d5e38418a0a0f4ed.png"},95773:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/treasury-preimage-3024cca2a7b9593c35b4d44e64d9414e.png"},49431:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});const r=a.p+"assets/images/treasury-proposal-decision-deposit-849d27481ba0134acf743f7474d8f6a4.png"},46601:()=>{}}]);