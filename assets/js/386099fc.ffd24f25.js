(self.webpackChunk=self.webpackChunk||[]).push([[8139],{47940:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var a=r(74165),n=r(15861),o=r(67294),s=r(87152),i=r(17145),l=r(67425);function u(e,t,r){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,a.Z)().mark((function e(t,r,n){var o,l,u,p,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return u=new s.U(o),e.next=21,i.G.create({provider:u});case 21:p=e.sent,(d=r.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+r);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,r,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,r,a);break;case"precise":(0,l.Precise)(e,r,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,r=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,p=(0,o.useState)(""),c=p[0],k=p[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(s.toString(),l,t,k):k(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,r,k);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(n,l,t,k):k(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),c}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,a){var n=void 0;if("polkadot"===r||"statemint"===r)n=3;else{if("kusama"!==r&&"statemine"!==r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}e=parseFloat(e),a((e=Number.isInteger(e/t[r].precision)?e/t[r].precision+" "+t[r].symbol:(e/t[r].precision).toFixed(n)+" "+t[r].symbol).toString())},Precise:function(e,r,a){a(e=(e=parseFloat(e))/t[r].precision+" "+t[r].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},60283:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),s=r(47940),i=["components"],l={id:"learn-polkadot-opengov-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Polkadot's On-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-polkadot-opengov-treasury"},u=void 0,p={unversionedId:"learn/learn-polkadot-opengov-treasury",id:"learn/learn-polkadot-opengov-treasury",title:"Treasury",description:"Polkadot's On-chain Treasury.",source:"@site/../docs/learn/learn-polkadot-opengov-treasury.md",sourceDirName:"learn",slug:"/learn-polkadot-opengov-treasury",permalink:"/docs/learn-polkadot-opengov-treasury",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1697709829,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{id:"learn-polkadot-opengov-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Polkadot's On-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-polkadot-opengov-treasury"},sidebar:"docs",previous:{title:"Gov1 Treasury",permalink:"/docs/learn-treasury"},next:{title:"Asset Hub",permalink:"/docs/learn-assets"}},d={},c=[{value:"Treasury Inflow and Outflow",id:"treasury-inflow-and-outflow",level:2},{value:"Treasury Tracks",id:"treasury-tracks",level:2},{value:"Treasurer",id:"treasurer",level:3},{value:"Big Spender",id:"big-spender",level:3},{value:"Medium Spender",id:"medium-spender",level:3},{value:"Small Spender",id:"small-spender",level:3},{value:"Big Tipper",id:"big-tipper",level:3},{value:"Small Tipper",id:"small-tipper",level:3}],k={toc:c},m="wrapper";function f(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Treasury is a pot of funds collected through a portion of block production rewards, transaction\nfees, slashing, and ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-inflation"},"staking inefficiencies"),".Treasury funds are held in a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system account")," that cannot be controlled by any\nexternal account; only the system internal logic can access it."),(0,o.kt)("admonition",{title:"Creating a Treasury Proposal on Polkadot OpenGov",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you would like to create a treasury proposal on Polkadot OpenGov, follow the instructions\noutlined on ",(0,o.kt)("a",{parentName:"p",href:"./learn-guides-treasury#creating-a-treasury-proposal"},"this how-to guide"),".")),(0,o.kt)("h2",{id:"treasury-inflow-and-outflow"},"Treasury Inflow and Outflow"),(0,o.kt)("p",null,"Tokens that are deposited into the Treasury (i.e. the inflow) is determined by the following\nmechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transaction fees:")," 80% of the transaction fees of every submitted extrinsic is diverted to the\nTreasury, while 20% is given to the block producers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Staking inefficiencies:")," the network knows an exogenously determined parameter called ideal\nstaking rate. The APY for stakers (nominators & validators) decreases whenever the actual staking\nrate is not equal to the ideal staking rate. To keep inflation constant at 10%, the system does\nnot creates less tokens, rather some share of the overall reward for stakers is diverted to the\nTreasury (more information\n",(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/Polkadot/overview/token-economics"},"here"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Slashes:")," whenever validators and nominators are slashed, a share of the slashed tokens are\ndiverted to Treasury. They are typically rare and unpredictable events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Transfers:")," everyone can send funds to the Treasury directly. This is a rare event and\ntypically due to grantees reimbursing some of the amount they got allocated for various reasons.")),(0,o.kt)("p",null,"The outflow is determined by the following mechanisms:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Burned tokens:")," at the end of each spend period\n","",(0,o.kt)(s.Z,{network:"kusama",path:"consts.treasury.burn",defaultValue:2e3,filter:"permillToPercent",mdxType:"RPC"}),"%\nof the available funds are burned."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Treasury proposals & Bounties:")," they make up the largest share of outflow tokens to the\ncommunity and need to be approved by governance. Then, payouts occur at the end of a\n",(0,o.kt)("a",{parentName:"li",href:"/docs/glossary#spend-period"},"spend period"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tips:")," smaller payouts directly to grantees that can happen within a\n",(0,o.kt)("a",{parentName:"li",href:"/docs/glossary#spend-period"},"spend period"),".")),(0,o.kt)("admonition",{title:"Spend Period Schedule",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"On Polkadot-JS UI, navigate to Governance > Treasury to view the status of current\n",(0,o.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spend period"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("img",{alt:"preimage-whitelist",src:r(29620).Z,width:"2508",height:"413"}))),(0,o.kt)("h2",{id:"treasury-tracks"},"Treasury Tracks"),(0,o.kt)("p",null,"OpenGov allows for managing funds through six tracks, each with its own\n",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-guides-polkadot-opengov#origins-and-tracks-info"},"origin and track parameters"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Treasurer"),(0,o.kt)("li",{parentName:"ul"},"Big Spender"),(0,o.kt)("li",{parentName:"ul"},"Medium Spender"),(0,o.kt)("li",{parentName:"ul"},"Small Spender"),(0,o.kt)("li",{parentName:"ul"},"Big Tipper"),(0,o.kt)("li",{parentName:"ul"},"Small Tipper")),(0,o.kt)("admonition",{title:"How to access Treasury funds?",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Access to Treasury funds requires successful enactment of referendum in the respective treasury\ntrack on-chain. Learn how to submit a treasury proposal for referendum\n",(0,o.kt)("a",{parentName:"p",href:"./learn-guides-treasury#creating-a-treasury-proposal"},"here"),".")),(0,o.kt)("h3",{id:"treasurer"},"Treasurer"),(0,o.kt)("p",null,"This track can be used for treasury spending requests up to\n333333.33 KSM  per referendum. Each\nreferendum requires a decision deposit of\n33.33 KSM ."),(0,o.kt)("h3",{id:"big-spender"},"Big Spender"),(0,o.kt)("p",null,"This track can be used for treasury spending requests up to\n33333.33 KSM  per referendum. Each referendum\nrequires a decision deposit of  13.33 KSM ."),(0,o.kt)("h3",{id:"medium-spender"},"Medium Spender"),(0,o.kt)("p",null,"This track can be used for treasury spending requests up to\n3333.33 KSM  per referendum. Each\nreferendum requires a decision deposit of\n6.66 KSM ."),(0,o.kt)("h3",{id:"small-spender"},"Small Spender"),(0,o.kt)("p",null,"This track can be used for treasury spending requests up to\n333.33 KSM  per referendum. Each referendum\nrequires a decision deposit of  3.33 KSM ."),(0,o.kt)("h3",{id:"big-tipper"},"Big Tipper"),(0,o.kt)("p",null,"This track can be used for treasury spending requests up to\n33.33 KSM  per referendum. Each referendum\nrequires a decision deposit of  0.33 KSM ."),(0,o.kt)("h3",{id:"small-tipper"},"Small Tipper"),(0,o.kt)("p",null,"This track can be used for treasury spending requests up to\n8.25 KSM  per referendum. Each referendum\nrequires a decision deposit of  0.033 KSM ."))}f.isMDXComponent=!0},29620:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const a=r.p+"assets/images/treasury-spend-period-a4883f21d69a6f05ca497b9893cc89a5.png"},46601:()=>{}}]);