(self.webpackChunk=self.webpackChunk||[]).push([[5013],{47940:(a,e,t)=>{"use strict";t.d(e,{Z:()=>m});var n=t(74165),o=t(15861),r=t(67294),i=t(87152),s=t(24354),u=t(67425);function l(a,e,t){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,n.Z)().mark((function a(e,t,o){var r,u,l,d,c;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:r=void 0,u=void 0,a.t0=e,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",a.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",a.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",a.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",a.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){a.next=18;break}return a.abrupt("return");case 18:return l=new i.U(r),a.next=21,s.G.create({provider:l});case 21:d=a.sent,(c=t.split(".")).forEach((function(a){a in d&&(d=d[a])})),a.t1=c[0],a.next="consts"===a.t1?27:"query"===a.t1?29:34;break;case 27:return u=d.toString(),a.abrupt("break",35);case 29:return a.next=31,d();case 31:return u=(u=a.sent).toString(),a.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+t);case 35:return a.abrupt("return",u);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function c(a,e,t,n){switch(e){case"humanReadable":(0,u.HumanReadable)(a,t,n);break;case"precise":(0,u.Precise)(a,t,n);break;case"blocksToDays":(0,u.BlocksToDays)(a,n);break;case"erasToDays":(0,u.ErasToDays)(a,n,t);break;case"percentage":(0,u.Percentage)(a,n);break;case"permillToPercent":(0,u.PermillToPercent)(a,n);break;case"arrayLength":(0,u.ArrayLength)(a,n);break;default:return void console.log("Ignoring unknown filter type")}}const m=function(a){var e=a.network,t=a.path,i=a.defaultValue,s=a.filter,u=void 0===s?void 0:s,d=(0,r.useState)(""),m=d[0],p=d[1];return e=e.toLowerCase(),(0,r.useEffect)((function(){void 0!==u?c(i.toString(),u,e,p):p(i.toString());var a=void 0;switch(e){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":a="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":a="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+e)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var a=(0,o.Z)((0,n.Z)().mark((function a(){var o;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l(e,t,p);case 2:if(void 0!==(o=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==u?c(o,u,e,p):p(o);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),m}},67425:a=>{var e="polkadot",t="kusama",n="statemine",o="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,i,s){var u=void 0;if(i===e||i===o)u=3;else{if(i!==t&&i!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=6}a=parseFloat(a),s((a=Number.isInteger(a/r[i].precision)?a/r[i].precision+" "+r[i].symbol:(a/r[i].precision).toFixed(u)+" "+r[i].symbol).toString())},Precise:function(a,e,t){t(a=(a=parseFloat(a))/r[e].precision+" "+r[e].symbol)},BlocksToDays:function(a,e){e((a=6*a/86400).toString())},ErasToDays:function(a,r,i){var s=void 0;if(i===e||i===o)s=1;else{if(i!==t&&i!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}r((a/=s).toString())},Percentage:function(a,e){e((a/=1e7).toString())},PermillToPercent:function(a,e){e((a/=1e4).toString())},ArrayLength:function(a,e){e((a=a.split(",").length).toString())}}},6381:(a,e,t)=>{"use strict";t.r(e),t.d(e,{assets:()=>w,contentTitle:()=>y,default:()=>T,frontMatter:()=>v,metadata:()=>g,toc:()=>b});var n=t(87462),o=t(63366),r=t(67294),i=t(3905),s=t(47940),u=t(74165),l=t(15861),d=t(87152),c=t(24354),m=t(67425);function p(a,e,t){return k.apply(this,arguments)}function k(){return(k=(0,l.Z)((0,u.Z)().mark((function a(e,t,n){var o,r,i,s,l,p,k,h;return(0,u.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return o=new d.U(t),a.next=3,c.G.create({provider:o});case 3:return r=a.sent,a.next=6,Promise.all([r.query.session.validators(),r.query.staking.currentEra()]);case 6:return i=a.sent,s=i[0],l=i[1],a.next=11,r.query.staking.erasStakers(l.toString(),s[0]);case 11:return p=a.sent,k=parseInt(p.total),a.next=15,r.query.staking.erasStakers.entries(l.toString());case 15:a.sent.forEach((function(a){a[0];var e=a[1],t=parseInt(e.total);t<k&&(k=t)})),h=k.toString(),(0,m.HumanReadable)(h,e,n);case 19:case"end":return a.stop()}}),a)})))).apply(this,arguments)}const h=function(a){var e=a.network,t=a.defaultValue,n=(0,r.useState)(""),o=n[0],i=n[1];return(0,r.useEffect)((0,l.Z)((0,u.Z)().mark((function a(){var n;return(0,u.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=void 0,"polkadot"!==e){a.next=5;break}n="wss://rpc.polkadot.io",a.next=10;break;case 5:if("kusama"!==e){a.next=9;break}n="wss://kusama-rpc.polkadot.io/",a.next=10;break;case 9:return a.abrupt("return",r.createElement("div",null));case 10:return(0,m.HumanReadable)(t,e,i),a.next=13,p(e,n,i);case 13:case"end":return a.stop()}}),a)}))),[]),o};var f=["components"],v={id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"},y=void 0,g={unversionedId:"maintain/kusama/maintain-guides-how-to-validate-kusama",id:"maintain/kusama/maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",description:"The fundamentals for running a Kusama validator.",source:"@site/../docs/maintain/kusama/maintain-guides-how-to-validate-kusama.md",sourceDirName:"maintain/kusama",slug:"/maintain-guides-how-to-validate-kusama",permalink:"/docs/maintain-guides-how-to-validate-kusama",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1718028821,formattedLastUpdatedAt:"Jun 10, 2024",frontMatter:{id:"maintain-guides-how-to-validate-kusama",title:"Run a Validator (Kusama)",sidebar_label:"How to run a Validator on Kusama",description:"The fundamentals for running a Kusama validator.",keywords:["validate","validator","kusama","stake","maintain"],slug:"../../maintain-guides-how-to-validate-kusama"},sidebar:"docs",previous:{title:"Network Maintainers",permalink:"/docs/maintain-index"},next:{title:"How to Stop Validating",permalink:"/docs/maintain-guides-how-to-stop-validating"}},w={},b=[{value:"Preliminaries",id:"preliminaries",level:2},{value:"How many KSM do I need to become an active Validator?",id:"how-many-ksm-do-i-need-to-become-an-active-validator",level:3},{value:"Validator Rewards",id:"validator-rewards",level:3},{value:"Run a Kusama Validator",id:"run-a-kusama-validator",level:2}],x={toc:b},S="wrapper";function T(a){var e=a.components,t=(0,o.Z)(a,f);return(0,i.kt)(S,(0,n.Z)({},x,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"preliminaries"},"Preliminaries"),(0,i.kt)("p",null,"Running a validator on a live network is a lot of responsibility! You will be accountable for not\nonly your own stake, but also the stake of your current nominators. If you make a mistake and get\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-offenses"},"slashed"),", your tokens and your reputation will be at risk. However,\nrunning a validator can also be very rewarding, knowing that you contribute to the security of a\ndecentralized network while growing your stash."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"It is highly recommended that you have significant system administration experience before\nattempting to run your own validator."),(0,i.kt)("p",{parentName:"admonition"},"You must be able to handle technical issues and anomalies with your node which you must be able to\ntackle yourself. Being a validator involves more than just executing the binary file.")),(0,i.kt)("p",null,"Since security is so important to running a successful validator, you should take a look at the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator")," information to make sure you understand\nthe factors to consider when constructing your infrastructure. As you progress in your journey as a\nvalidator, you will likely want to use this repository as a ",(0,i.kt)("em",{parentName:"p"},"starting point")," for your own\nmodifications and customizations."),(0,i.kt)("p",null,"If you need help, please reach out on the\n",(0,i.kt)("a",{parentName:"p",href:"https://matrix.to/#/#KusamaValidatorLounge:polkadot.builders"},"Kusama Validator Lounge")," on Element.\nThe team and other validators are there to help answer questions and provide tips from experience."),(0,i.kt)("h3",{id:"how-many-ksm-do-i-need-to-become-an-active-validator"},"How many KSM do I need to become an active Validator?"),(0,i.kt)("admonition",{title:"Controller accounts are deprecated",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Controller accounts are deprecated. For more information, see\n",(0,i.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/staking-controller-deprecation-plan-staking-ui-leads-comms/2748"},"this discussion"),".")),(0,i.kt)("p",null,"You can have a rough estimate on that by using the methods listed\n",(0,i.kt)("a",{parentName:"p",href:"/docs/faq/#what-is-the-minimum-stake-necessary-to-be-elected-as-an-active-validator"},"here"),".\nTo be elected into the set, you need a minimum stake behind your validator. This stake can come from\nyourself or from ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominators"),". This means that as a minimum, you\nwill need enough KSM to set up Stash and staking proxy ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-cryptography"},"accounts"),"\nwith the existential deposit, plus a little extra for transaction fees. The rest can come from\nnominators. To understand how validators are elected, check the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-phragmen"},"NPoS Election algorithms")," page."),(0,i.kt)("admonition",{title:"On-Chain Data for Reference",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"On Kusama, the minimum stake backing a validator in the active set is\n",(0,i.kt)(h,{network:"kusama",defaultValue:5288388652143741,mdxType:"MinimumStake"}),"\n"," in the\nera\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.staking.currentEra",defaultValue:"4838",mdxType:"RPC"}),".\n",""),(0,i.kt)("p",{parentName:"admonition"},"On Polkadot, the minimum stake backing a validator in the active set is\n","\n",(0,i.kt)(h,{network:"polkadot",defaultValue:0x3d83c4f4e51b08,mdxType:"MinimumStake"})," in the era\n","\n",(0,i.kt)(s.Z,{network:"polkadot",path:"query.staking.currentEra",defaultValue:"998",mdxType:"RPC"}),".")),(0,i.kt)("admonition",{title:"Join the Thousand Validator Programme",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"/docs/thousand-validators"},"The Thousand Validator Programme")," is an initiative by Web3\nFoundation and Parity Technologies to use the funds held by both organizations to nominate\nvalidators in the community.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Warning:")," Any KSM that you stake for your validator is liable to be slashed, meaning that an\ninsecure or improper setup may result in loss of KSM tokens! If you are not confident in your\nability to run a validator node, it is recommended to nominate your KSM to a trusted validator node\ninstead."),(0,i.kt)("h3",{id:"validator-rewards"},"Validator Rewards"),(0,i.kt)("p",null,"On Kusama, one day is approximately four eras whereas on Polkadot, one era is approximately a day.\nIn each era, the validators elected to the active set earn era points which correspond to the actual\nrewards earned that are distributed proportionally to the nominators after deducting the validator\ncommission. Currently, the minimum validator commission is set to\n",(0,i.kt)(s.Z,{network:"kusama",path:"query.staking.minCommission",filter:"percentage",defaultValue:"10",mdxType:"RPC"}),"%\n","\nwhich can be set through on-chain governance. For more information rewards and payouts, check the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-validator-payout"},"validator payout")," document."),(0,i.kt)("h2",{id:"run-a-kusama-validator"},"Run a Kusama Validator"),(0,i.kt)("p",null,"Running a validator on the Kusama network is identical to running a Polkadot validator. Check out\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"Polkadot guide")," on how to setup a validator."),(0,i.kt)("p",null,"Make sure to adjust the Polkadot guide to run a Kusama network validator (the instructions will also\nbe available in the Polkadot Validator guide):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When starting the node pass ",(0,i.kt)("inlineCode",{parentName:"li"},"--chain=kusama")," CLI flag")))}T.isMDXComponent=!0},46601:()=>{}}]);