(self.webpackChunk=self.webpackChunk||[]).push([[2802],{47379:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var a=n(90675),o=n(10467),i=n(96540),s=n(69761),r=n(82285),l=n(11135);function c(e,t,n){return p.apply(this,arguments)}function p(){return(p=(0,o.A)((0,a.A)().mark((function e(t,n,o){var i,l,c,p,d;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return c=new s.E(i),e.next=25,r.G.create({provider:c});case 25:p=e.sent,(d=n.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=p.toString(),e.abrupt("break",39);case 33:return e.next=35,p();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+d[0]+") in "+n);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,n);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var t=e.network,n=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,i.useState)(""),h=p[0],u=p[1];return t=t.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?d(s.toString(),l,t,u):u(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.A)((0,a.A)().mark((function e(){var o;return(0,a.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,n,u);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(o,l,t,u):u(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),h}},11135:e=>{var t="polkadot",n="kusama",a="statemine",o="statemint",i="polkadotpeople",s="kusamapeople",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,c){var p=void 0;if(l===t||l===o)p=3;else if(l===n||l===a||l===i)p=6;else{if(l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=8}e=parseFloat(e),c((e=Number.isInteger(e/r[l].precision)?e/r[l].precision+" "+r[l].symbol:(e/r[l].precision).toFixed(p)+" "+r[l].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,l){var c=void 0;if(l===t||l===o||l==i)c=1;else{if(l!==n&&l!==a&&l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}r((e/=c).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},14615:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var a=n(58168),o=n(98587),i=(n(96540),n(15680)),s=n(47379),r=["components"],l={id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"},c=void 0,p={unversionedId:"maintain/maintain-guides-how-to-chill",id:"maintain/maintain-guides-how-to-chill",title:"How to Chill",description:"Steps on chilling as a network participant.",source:"@site/../docs/maintain/maintain-guides-how-to-chill.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-chill",permalink:"/docs/maintain-guides-how-to-chill",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714735401,formattedLastUpdatedAt:"May 3, 2024",frontMatter:{id:"maintain-guides-how-to-chill",title:"How to Chill",sidebar_label:"How to Chill",description:"Steps on chilling as a network participant.",keywords:["chill","chilling","pause"],slug:"../maintain-guides-how-to-chill"}},d={},h=[{value:"Consideration for Staking Election",id:"consideration-for-staking-election",level:2},{value:"Chilling as a Nominator",id:"chilling-as-a-nominator",level:2},{value:"Chilling as a Validator",id:"chilling-as-a-validator",level:2},{value:"Chill Other",id:"chill-other",level:2}],u={toc:h},m="wrapper";function g(e){var t=e.components,l=(0,o.A)(e,r);return(0,i.yg)(m,(0,a.A)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,'Staking bonds can be in any of the three states: validating, nominating, or chilled (neither\nvalidating nor nominating). When a staker wants to temporarily pause their active engagement in\nstaking but does not want to unbond their funds, they can choose to "chill" their involvement and\nkeep their funds bonded.'),(0,i.yg)("p",null,'An account can step back from participating in active staking by clicking "Stop" under the Network >\nStaking > Account actions page in ',(0,i.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps")," or by calling the\n",(0,i.yg)("inlineCode",{parentName:"p"},"chill")," extrinsic in the\n",(0,i.yg)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_staking/pallet/enum.Call.html#variant.chill"},"staking pallet"),".\nWhen an account chooses to chill, it becomes inactive in the next era. The call must be signed by\nthe ",(0,i.yg)("em",{parentName:"p"},"staking proxy")," account, not the ",(0,i.yg)("em",{parentName:"p"},"stash"),"."),(0,i.yg)("admonition",{title:"Primer on stash and staking proxy accounts",type:"note"},(0,i.yg)("p",{parentName:"admonition"},"If you need a refresher on the different responsibilities of the stash and staking proxy account\nwhen staking, take a look at the ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-staking#accounts"},"accounts")," section in the\ngeneral staking guide.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"staking",src:n(32226).A,width:"1920",height:"800"})),(0,i.yg)("h2",{id:"consideration-for-staking-election"},"Consideration for Staking Election"),(0,i.yg)("p",null,"A bond that is actively participating in staking but chilled would continue to participate in\nstaking for the rest of the current era. If the bond was chilled in sessions 1 through 4 and\ncontinues to be chilled for the rest of the era, it would NOT be selected for election in the next\nera. If a bond was chilled for the entire session 5, it would not be considered in the next\nelection. If the bond was chilled in session 6, its participation in the next era's election would\ndepend on its state in session 5."),(0,i.yg)("h2",{id:"chilling-as-a-nominator"},"Chilling as a Nominator"),(0,i.yg)("p",null,"When you chill after being a nominator, your nominations will be reset. This means that when you\ndecide to start nominating again you will need to select validators to nominate once again. These\ncan be the same validators if you prefer, or, a completely new set. Just be aware - your nominations\nwill not persist across chills."),(0,i.yg)("p",null,"Your nominator will remain bonded when it is chilled. When you are ready to nominate again, you will\nnot need to go through the whole process of bonding again, rather, you will issue a new nominate\ncall that specifies the new validators to nominate."),(0,i.yg)("h2",{id:"chilling-as-a-validator"},"Chilling as a Validator"),(0,i.yg)("p",null,"When you voluntarily chill after being a validator, your nominators will remain. As long as your\nnominators make no action, you will still have the nominations when you choose to become an active\nvalidator once again. You bond however would not be listed as a nominable validator thus any\nnominators issuing new or revisions to existing nominations would not be able to select your bond."),(0,i.yg)("p",null,"When you become an active validator, you will also need to reset your validator preferences\n(commission, etc.). These can be configured as the same values set previously or something\ndifferent."),(0,i.yg)("h2",{id:"chill-other"},"Chill Other"),(0,i.yg)("p",null,"An unbounded and unlimited number of nominators and validators in Polkadot's NPoS is not possible\ndue to constraints in the runtime. As a result, multiple checks are incorporated to keep the size of\nstaking system manageable, like mandating minimum active bond requirements for both nominators and\nvalidators. When these requirements are modified through on-chain governance, they can be enforced\nonly on the accounts that newly call ",(0,i.yg)("inlineCode",{parentName:"p"},"nominate")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"validate")," after the update. The changes to the\nbonding parameters would not automatically chill the active accounts on-chain which do not meet the\nrequirements."),(0,i.yg)("admonition",{title:"Chill Threshold",type:"note"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("inlineCode",{parentName:"p"},"ChillThreshold")," defines how close to the max nominators or validators we must reach before users\ncan start chilling one-another. This value is currently set to\n","\n",(0,i.yg)(s.A,{network:"kusama",path:"query.staking.chillThreshold",defaultValue:90,mdxType:"RPC"}),"%")),(0,i.yg)("p",null,"For instance, let us consider a scenario where the minimum staking requirement for nominators is\nchanged from 80 DOTs to 120 DOTs. An account that was actively nominating with 80 DOTs before this\nupdate would still keep receiving staking rewards. To handle this corner case, the ",(0,i.yg)("inlineCode",{parentName:"p"},"chillOther"),"\nextrinsic was incorporated which also helps to keep things backwards compatible and safe. The\n",(0,i.yg)("inlineCode",{parentName:"p"},"chillOther")," extrinsic is permissionless and any third party user can target it on an account where\nthe minimum active bond is not satisfied, and chill that account. The list of addresses of all the\nactive validators and their nominators can be viewed by running\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/w3f/validator-stats"},"validator stats")," script."),(0,i.yg)("admonition",{title:"Chill Other on Polkadot Network",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Through ",(0,i.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referendum/90"},"Referendum 90"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"maxNominatorCount")," on\nPolkadot is set to ",(0,i.yg)("inlineCode",{parentName:"p"},"None")," eliminating the upper bound on the number of nominators on the network.\nDue to this, the ",(0,i.yg)("inlineCode",{parentName:"p"},"chillOther")," extrinsic on Polkadot network has no effect as the chill threshold\nwill never be met.")))}g.isMDXComponent=!0},32226:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});const a=n.p+"assets/images/staking-keys-stash-proxy-503c2b8b6c40b269a16576dd7fe805b8.png"},47790:()=>{}}]);