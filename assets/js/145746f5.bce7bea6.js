(self.webpackChunk=self.webpackChunk||[]).push([[691],{47940:(t,a,e)=>{"use strict";e.d(a,{Z:()=>k});var n=e(74165),r=e(15861),l=e(67294),i=e(11306),o=e(76670),d="polkadot",s="kusama";function p(t,a,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)((0,n.Z)().mark((function t(a,e,r){var l,d,s,p,m;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=void 0,d=void 0,t.t0=a,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:9;break;case 5:return l="wss://rpc.polkadot.io",t.abrupt("break",10);case 7:return l="wss://kusama-rpc.polkadot.io/",t.abrupt("break",10);case 9:console.log("Unknown socket url provided, no connection made.");case 10:if(void 0!==l){t.next=14;break}return t.abrupt("return");case 14:return s=new i.U(l),t.next=17,o.G.create({provider:s});case 17:p=t.sent,(m=e.split(".")).forEach((function(t){p=p[t]})),t.t1=m[0],t.next="consts"===t.t1?23:"query"===t.t1?25:30;break;case 23:return d=p.toString(),t.abrupt("break",31);case 25:return t.next=27,p();case 27:return d=(d=t.sent).toString(),t.abrupt("break",31);case 30:console.log("Unknown path prefix ("+m[0]+") in "+e);case 31:if(void 0!==d){t.next=33;break}return t.abrupt("return");case 33:r(d);case 34:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,a,e,n){var r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"}};switch(a){case"humanReadable":var l=void 0;if(e===d)l=3;else{if(e!==s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}t=((t=parseFloat(t))/r[e].precision).toFixed(l)+" "+r[e].symbol;break;case"blocksToDays":t=6*t/86400;break;default:return void console.log("Ignoring unknown filter type")}n(t.toString())}const k=function(t){var a=t.network,e=t.path,i=t.defaultValue,o=t.filter,m=void 0===o?void 0:o,k=(0,l.useState)(""),c=k[0],h=k[1];return(0,l.useEffect)((function(){void 0!==m?u(i.toString(),m,a,h):h(i.toString());var t=void 0;switch(a){case d:t="wss://rpc.polkadot.io";break;case s:t="wss://kusama-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+net)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var l=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(a,e,h);case 2:void 0!==m&&u(i.toString(),m,a,h);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{l()}catch(o){console.log(o)}}}),[]),c}},1735:(t,a,e)=>{"use strict";e.r(a),e.d(a,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>d,metadata:()=>p,toc:()=>u});var n=e(87462),r=e(63366),l=(e(67294),e(3905)),i=e(47940),o=["components"],d={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},s=void 0,p={unversionedId:"maintain/maintain-polkadot-parameters",id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1658564248,formattedLastUpdatedAt:"Jul 23, 2022",frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"}},m={},u=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Accounts, Identity and Crowdloans",id:"accounts-identity-and-crowdloans",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}],k={toc:u};function c(t){var a=t.components,e=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},k,e,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.kt)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE: Polkadot generally runs at ","\xbc","th the speed of Kusama, except in the time slot duration\nitself. See ",(0,l.kt)("a",{parentName:"em",href:"https://guide.kusama.network/docs/kusama-parameters/"},"Kusama Parameters")," for more details on how Polkadot's parameters\ndiffer from Kusama's.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.kt)("li",{parentName:"ul"},"Epoch: 4 hours (2_400 slots x 6 seconds)"),(0,l.kt)("li",{parentName:"ul"},"Session: 4 hours (Session and Epoch lengths are the same)"),(0,l.kt)("li",{parentName:"ul"},"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Epoch"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Era"),(0,l.kt)("td",{parentName:"tr",align:null},"24 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400")))),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.kt)("em",{parentName:"em"},"estimates"),". See ",(0,l.kt)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for\nmore details.")),(0,l.kt)("h3",{id:"accounts-identity-and-crowdloans"},"Accounts, Identity and Crowdloans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit")," is ",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"})),(0,l.kt)("li",{parentName:"ul"},"The deposit required to set an Identity is ",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.identity.basicDeposit",defaultValue:20258e7,filter:"humanReadable",mdxType:"RPC"})),(0,l.kt)("li",{parentName:"ul"},"The minimum contribution required to participate in a crowdloan is ",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.crowdloan.minContribution",defaultValue:5e10,filter:"humanReadable",mdxType:"RPC"}))),(0,l.kt)("h3",{id:"governance"},"Governance"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Democracy"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Launch period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can select which proposal to hold a referendum on, i.e., every week, the highest-weighted proposal will be selected to have a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Council"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of a council member's term until the next election round.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The council's voting period for motions.")))),(0,l.kt)("p",null,"The Polkadot Council consists of up to 13 members and up to 20 runners up."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Technical committee"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cool-off period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The time a veto from the technical committee lasts before the proposal can be submitted again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Emergency voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"3 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"1_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The voting period after the technical committee expedites voting.")))),(0,l.kt)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.kt)("p",null,"Maximum number of Validators that can be nominated by a nominator - ",(0,l.kt)(i.Z,{network:"polkadot",path:"consts.staking.maxNominations",defaultValue:16,mdxType:"RPC"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to Phragm\xe9n's method.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))),(0,l.kt)("h3",{id:"parachains"},"Parachains"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans and Auctions"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Auction duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The total duration of the slot auction, subject to the candle auction mechanism.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Opening period"),(0,l.kt)("td",{parentName:"tr",align:null},"2 days"),(0,l.kt)("td",{parentName:"tr",align:null},"28_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening period of the slot auction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ending period"),(0,l.kt)("td",{parentName:"tr",align:null},"5 days"),(0,l.kt)("td",{parentName:"tr",align:null},"72_000"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending period of the slot auction.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parachain Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lease period"),(0,l.kt)("td",{parentName:"tr",align:null},"12 weeks"),(0,l.kt)("td",{parentName:"tr",align:null},"1_209_600"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of one lease period in a parachain slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total slot duration"),(0,l.kt)("td",{parentName:"tr",align:null},"2 years"),(0,l.kt)("td",{parentName:"tr",align:null},"10_512_000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum duration a parachain can lease by winning a slot auction (8 lease periods).")))),(0,l.kt)("h3",{id:"treasury"},"Treasury"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.kt)("td",{parentName:"tr",align:null},"24 days"),(0,l.kt)("td",{parentName:"tr",align:null},"345_600"),(0,l.kt)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.kt)("p",null,"Burn percentage is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"1.00%"),"."),(0,l.kt)("h3",{id:"precision"},"Precision"),(0,l.kt)("p",null,"DOT have 10 decimals of precision. In other words, 10 ","*","*"," 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."),(0,l.kt)("p",null,"The denomination of DOT was changed from 12 decimals of precision at block #1","_","248","_","328 in an event\nknown as ",(0,l.kt)("em",{parentName:"p"},"Denomination Day"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/redenomination"},"Redenomination")," for details."))}c.isMDXComponent=!0},69396:()=>{},46601:()=>{}}]);