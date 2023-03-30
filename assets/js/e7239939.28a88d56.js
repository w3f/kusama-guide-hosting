(self.webpackChunk=self.webpackChunk||[]).push([[6599],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var o=a(74165),n=a(15861),i=a(67294),s=a(92519),r=a(98177),l=a(67425);function d(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,o.Z)().mark((function e(t,a,n){var i,l,d,p,c;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new s.U(i),e.next=21,r.G.create({provider:d});case 21:p=e.sent,(c=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,o){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,o);break;case"precise":(0,l.Precise)(e,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"percentage":(0,l.Percentage)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,a=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,i.useState)(""),u=p[0],k=p[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?c(s.toString(),l,t,k):k(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t,a,k);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?c(n,l,t,k):k(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),u}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,o){var n=void 0;if("polkadot"===a||"statemint"===a)n=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}e=parseFloat(e),o((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(n)+" "+t[a].symbol).toString())},Precise:function(e,a,o){o(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},37127:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=a(87462),n=a(63366),i=(a(67294),a(3905)),s=a(47940),r=["components"],l={id:"learn-staking-guides",title:"Staking How-to Guides",sidebar_label:"Staking",description:"Advanced How-to Guides about Staking.",keyword:["nominate","stake","staking","pools","create","destroy","claim","rewards"],slug:"../learn-staking-guides"},d=void 0,p={unversionedId:"learn/learn-staking-guides",id:"learn/learn-staking-guides",title:"Staking How-to Guides",description:"Advanced How-to Guides about Staking.",source:"@site/../docs/learn/learn-staking-guides.md",sourceDirName:"learn",slug:"/learn-staking-guides",permalink:"/docs/learn-staking-guides",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1679035834,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"learn-staking-guides",title:"Staking How-to Guides",sidebar_label:"Staking",description:"Advanced How-to Guides about Staking.",keyword:["nominate","stake","staking","pools","create","destroy","claim","rewards"],slug:"../learn-staking-guides"}},c={},u=[{value:"Claiming Rewards with the Polkadot-JS UI",id:"claiming-rewards-with-the-polkadot-js-ui",level:2},{value:"Nomination Pools",id:"nomination-pools",level:2},{value:"Creation",id:"creation",level:3},{value:"Upkeep",id:"upkeep",level:3},{value:"Destruction",id:"destruction",level:3}],k={toc:u},m="wrapper";function h(e){var t=e.components,l=(0,n.Z)(e,r);return(0,i.kt)(m,(0,o.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"claiming-rewards-with-the-polkadot-js-ui"},"Claiming Rewards with the Polkadot-JS UI"),(0,i.kt)("p",null,"Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction\nfee. Someone must submit a transaction with a validator ID and an era index.\nKusama will automatically calculate that\nvalidator's reward, find the top\n","\n",(0,i.kt)(s.Z,{network:"kusama",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"\nnominators for that era, and distribute the rewards pro rata."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Staking system only applies the highest\n","\n",(0,i.kt)(s.Z,{network:"kusama",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"\nnominations to each validator to reduce the complexity of the staking set.")),(0,i.kt)("p",null,"These details are handled for you automatically if you use the\n",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payout"},"Polkadot-JS UI"),", which also allows you to submit\nbatches of eras at once."),(0,i.kt)("p",null,'To claim rewards on Polkadot-JS UI, you will need to be in the "Payouts" tab underneath "Staking",\nwhich will list all the pending payouts for your stashes.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pending-payouts",src:a(26416).Z,width:"2876",height:"600"})),(0,i.kt)("p",null,'To then claim your reward, select the "Payout all" button. This will prompt you to select your stash\naccounts for payout.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select-payouts",src:a(32348).Z,width:"2192",height:"624"})),(0,i.kt)("p",null,"Once you are done with payout, another screen will appear asking for you to sign and submit the\ntransaction."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"transaction-payouts",src:a(41083).Z,width:"2878",height:"818"})),(0,i.kt)("h2",{id:"nomination-pools"},"Nomination Pools"),(0,i.kt)("h3",{id:"creation"},"Creation"),(0,i.kt)("p",null,"The depositor calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic, setting the administrative roles and transferring some\nfunds to the pool to add themselves as the first member. As stated above, the depositor must always\nbe a member as long as the pool exists; they will be the last member to leave, ensuring they always\nhave some skin in the game. A significant stake from the depositor is always a good indicator of the\npool's credibility."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The current minimum bond to create a pool on"),"\n","",(0,i.kt)("strong",{parentName:"p"},"Kusama"),"\n","\n",(0,i.kt)("strong",{parentName:"p"},"is ",(0,i.kt)(s.Z,{network:"kusama",path:"query.nominationPools.minCreateBond",defaultValue:1e12,filter:"humanReadable",mdxType:"RPC"}),"."),""),(0,i.kt)("p",null,"The pool\u2019s \u2018nominator role\u2019 selects validators with the nominate extrinsic. On Polkadot JS Apps UI,\nnavigate to Network > Staking > Pools and click on Add Pool button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools",src:a(85209).Z,width:"1412",height:"638"})),(0,i.kt)("p",null,"The UI automatically assigns ID to the pool and allows for entering the name of the pools as well as\nthe deposit to be bonded."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create Nomination Pools - deposit",src:a(58732).Z,width:"1164",height:"458"})),(0,i.kt)("p",null,"When creating a pool using Polkadot JS Apps UI, all the roles are mapped to the Depositor account by\ndefault. If any of these roles need to be assigned to a different account, create the pool using\n",(0,i.kt)("inlineCode",{parentName:"p"},"create")," extrinsic available on Developer > Extrinsics > nominationPools on Polkadot JS Apps UI."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nomination Pool Roles",src:a(12920).Z,width:"1426",height:"558"})),(0,i.kt)("h3",{id:"upkeep"},"Upkeep"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator")," can update the pool\u2019s validator selection. On Polkadot JS Apps UI, navigate to\nNetwork > Staking > Accounts page and click on Pooled button. If you have any pooled accounts with\nthe role of ",(0,i.kt)("inlineCode",{parentName:"p"},"nominator"),", you will notice the option to set nominees. Select the validators to\nnominate like you would normally using a nominator account."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nominate validators",src:a(22455).Z,width:"1810",height:"786"})),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state-toggler")," can update the pool\u2019s state to blocked through ",(0,i.kt)("inlineCode",{parentName:"p"},"setState")," extrinsic and kick\nmembers by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"withdrawUnbonded"),". (The state can also be toggled back to open)."),(0,i.kt)("h3",{id:"destruction"},"Destruction"),(0,i.kt)("p",null,"A pool can be pushed into the \u201cdestroying\u201d state via one of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The state-toggler sets the pool to \u201cdestroying\u201d."),(0,i.kt)("li",{parentName:"ul"},"Any account can set the pool to destroying if over 90% of the pool's active bonded balance has\nbeen slashed."),(0,i.kt)("li",{parentName:"ul"},"When a pool is in \u2018destroying\u2019 state, ",(0,i.kt)("inlineCode",{parentName:"li"},"unbond")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"withdrawUnbonded")," become permissionless, so\nanyone can help all the members exit."),(0,i.kt)("li",{parentName:"ul"},"Once the depositor withdraws, no members belong to the pool, and all the pool\u2019s resources are\nwiped from the state.")))}h.isMDXComponent=!0},41083:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_complete-87ad124d5d70e50c16f1434074562d70.png"},26416:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_page-fc4f62399f71b542e9eaac01405ef528.png"},32348:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_popup-feb847cdfae64f3fa247cdb2beea4ba6.png"},85209:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/Nomination-Pools-1-98ee6b5592f6851aa57c9d427d70598f.png"},58732:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/Nomination-Pools-2-84da587a4d7591f2e2f79a4054214984.png"},22455:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/Nomination-Pools-5-9b16b01bde4e095d3c8fa71aa9a9a6ca.png"},12920:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/Nomination-Pools-7-74928d7825f19208592498e7b12dee5c.png"},95856:()=>{},46601:()=>{}}]);