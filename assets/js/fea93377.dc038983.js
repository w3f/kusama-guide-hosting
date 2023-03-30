(self.webpackChunk=self.webpackChunk||[]).push([[6730],{47940:(e,a,t)=>{"use strict";t.d(a,{Z:()=>h});var n=t(74165),o=t(15861),i=t(67294),r=t(92519),s=t(98177),l=t(67425);function d(e,a,t){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,n.Z)().mark((function e(a,t,o){var i,l,d,p,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return d=new r.U(i),e.next=21,s.G.create({provider:d});case 21:p=e.sent,(u=t.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+t);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,a,t,n){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,n);break;case"precise":(0,l.Precise)(e,t,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var a=e.network,t=e.path,r=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,i.useState)(""),h=p[0],m=p[1];return a=a.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?u(r.toString(),l,a,m):m(r.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a,t,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(o,l,a,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),h}},67425:e=>{var a={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,t,n){var o=void 0;if("polkadot"===t||"statemint"===t)o=3;else{if("kusama"!==t&&"statemine"!==t)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/a[t].precision)?e/a[t].precision+" "+a[t].symbol:(e/a[t].precision).toFixed(o)+" "+a[t].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/a[t].precision+" "+a[t].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},Percentage:function(e,a){a((e/=1e7).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},26029:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),r=t(47940),s=["components"],l={id:"maintain-guides-validator-payout",title:"Validator Payout Overview",sidebar_label:"Validator Payout Overview",description:"How validator payout works on the network and what you should expect.",keywords:["validator payout","payments","rewards","era points"],slug:"../maintain-guides-validator-payout"},d=void 0,p={unversionedId:"maintain/maintain-guides-validator-payout",id:"maintain/maintain-guides-validator-payout",title:"Validator Payout Overview",description:"How validator payout works on the network and what you should expect.",source:"@site/../docs/maintain/maintain-guides-validator-payout.md",sourceDirName:"maintain",slug:"/maintain-guides-validator-payout",permalink:"/docs/maintain-guides-validator-payout",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1673981325,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{id:"maintain-guides-validator-payout",title:"Validator Payout Overview",sidebar_label:"Validator Payout Overview",description:"How validator payout works on the network and what you should expect.",keywords:["validator payout","payments","rewards","era points"],slug:"../maintain-guides-validator-payout"}},u={},h=[{value:"Era Points",id:"era-points",level:2},{value:"Payout Scheme",id:"payout-scheme",level:2},{value:"Running Multiple Validators",id:"running-multiple-validators",level:2},{value:"Slashing",id:"slashing",level:2},{value:"Nominators and Validator Payments",id:"nominators-and-validator-payments",level:2}],m={toc:h},c="wrapper";function v(e){var a=e.components,t=(0,o.Z)(e,s);return(0,i.kt)(c,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"era-points"},"Era Points"),(0,i.kt)("p",null,"For every era (a period of time approximately 6 hours in length in Kusama, and 24 hours in\nPolkadot), validators are paid proportionally to the amount of ",(0,i.kt)("em",{parentName:"p"},"era points")," they have collected. Era\npoints are reward points earned for payable actions like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"issuing validity statements for ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn-parachains"},"parachain")," blocks."),(0,i.kt)("li",{parentName:"ul"},"producing a non-uncle block in the Relay Chain."),(0,i.kt)("li",{parentName:"ul"},"producing a reference to a previously unreferenced uncle block."),(0,i.kt)("li",{parentName:"ul"},"producing a referenced uncle block.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"An uncle block is a Relay Chain block that is valid in every regard, but which failed to become\ncanonical. This can happen when two or more validators are block producers in a single slot, and the\nblock produced by one validator reaches the next block producer before the others. We call the\nlagging blocks uncle blocks.")),(0,i.kt)("p",null,"Payments occur at the end of every era."),(0,i.kt)("p",null,"Era points create a probabilistic component for staking rewards."),(0,i.kt)("p",null,"If the ",(0,i.kt)("em",{parentName:"p"},"mean")," of staking rewards is the average rewards per era, then the ",(0,i.kt)("em",{parentName:"p"},"variance")," is the\nvariability from the average staking rewards. The exact DOT value of each era point is not known in\nadvance since it depends on the total number of points earned by all validators in a given era. This\nis designed this way so that the total payout per era depends on Polkadot's\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced#inflation"},"inflation model"),", and not on the number of payable\nactions (f.e., authoring a new block) executed. For more information, check\n",(0,i.kt)("a",{parentName:"p",href:"https://substrate.stackexchange.com/questions/5353/how-are-rewards-in-dot-calculated-from-the-era-points-earned-by-validators-in-po"},"this stackexchange post"),"."),(0,i.kt)("p",null,"With parachains now on Polkadot, a large percentage of era points will come from parachain\nvalidation, as a subset of validators are selected to para-validate for all parachains each epoch,\nand those para-validators can generate more era points as a result. Para-validators are rewarded 20\nera points each for each parachain block that they validate."),(0,i.kt)("p",null,"In this case, analyzing the ",(0,i.kt)("em",{parentName:"p"},"expected value")," of staking rewards will paint a better picture as the\nweight of era points of validators and para-validators in the reward average are taken into\nconsideration."),(0,i.kt)("admonition",{title:"High-level breakdown of reward variance",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This should only serve as a high-level overview of the probabilistic nature for staking rewards."),(0,i.kt)("p",{parentName:"admonition"},"Let:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pe")," = para-validator era points,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ne")," = non-para-validator era points,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EV")," = expected value of staking rewards,")),(0,i.kt)("p",{parentName:"admonition"},"Then, ",(0,i.kt)("inlineCode",{parentName:"p"},"EV(pe)")," has more influence on the ",(0,i.kt)("inlineCode",{parentName:"p"},"EV")," than ",(0,i.kt)("inlineCode",{parentName:"p"},"EV(ne)"),"."),(0,i.kt)("p",{parentName:"admonition"},"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"EV(pe)")," has a more weighted probability on the ",(0,i.kt)("inlineCode",{parentName:"p"},"EV"),", the increase in variance against the\n",(0,i.kt)("inlineCode",{parentName:"p"},"EV")," becomes apparent between the different validator pools (aka. validators in the active set and\nthe ones chosen to para-validate)."),(0,i.kt)("p",{parentName:"admonition"},"Also, let:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"v")," = the variance of staking rewards,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"p")," = number of para-validators,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"w")," = number validators in the active set,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"e")," = era,")),(0,i.kt)("p",{parentName:"admonition"},"Then, ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," ","\u2191"," if ",(0,i.kt)("inlineCode",{parentName:"p"},"w")," ","\u2191",", as this reduces ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," : ",(0,i.kt)("inlineCode",{parentName:"p"},"w"),", with respect to ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),"."),(0,i.kt)("p",{parentName:"admonition"},"Increased ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," is expected, and initially keeping ",(0,i.kt)("inlineCode",{parentName:"p"},"p")," ","\u2193"," using the same para-validator set for\nall parachains ensures ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-availability"},"availability")," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"approval voting"),". In addition, despite ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," ","\u2191"," on an ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),"\nbasis, over time, the amount of rewards each validator receives will equal out based on the\ncontinuous selection of para-validators."),(0,i.kt)("p",{parentName:"admonition"},"There are plans to scale the active para-validation set in the future")),(0,i.kt)("h2",{id:"payout-scheme"},"Payout Scheme"),(0,i.kt)("p",null,"No matter how much total stake is behind a validator, all validators split the block authoring\npayout essentially equally. The payout of a specific validator, however, may differ based on\n",(0,i.kt)("a",{parentName:"p",href:"#era-points"},"era points"),", as described above. Although there is a probabilistic component to\nreceiving era points, and they may be impacted slightly depending on factors such as network\nconnectivity, well-behaving validators should generally average out to having similar era point\ntotals over a large number of eras."),(0,i.kt)("p",null,'Validators may also receive "tips" from senders as an incentive to include transactions in their\nproduced blocks. Validators will receive 100% of these tips directly.'),(0,i.kt)("p",null,"Validators will receive staking rewards in the form of the native token of that chain (KSM for\nKusama and DOT for Polkadot)."),(0,i.kt)("p",null,"For simplicity, the examples below will assume all validators have the same amount of era points,\nand received no tips."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 tokens\nValidator 2 Stake (v2):  9 tokens\nValidator 3 Stake (v3):  8 tokens\nValidator 4 Stake (v4):  7 tokens\nPayout (p): 8 DOT\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 tokens\n")),(0,i.kt)("p",null,"Note that this is different than most other Proof-of-Stake systems such as Cosmos. As long as a\nvalidator is in the validator set, it will receive the same block reward as every other validator.\nValidator ",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),", who had 18 tokens staked, received the same reward (2 tokens) in this era as ",(0,i.kt)("inlineCode",{parentName:"p"},"v4"),"\nwho had only 7 tokens staked."),(0,i.kt)("h2",{id:"running-multiple-validators"},"Running Multiple Validators"),(0,i.kt)("p",null,"It is possible for a single entity to run multiple validators. Running multiple validators may\nprovide a better risk/reward ratio. Assuming you have enough DOT, or enough stake nominates your\nvalidator, to ensure that your validators remain in the validator set, running multiple validators\nwill result in a higher return than running a single validator."),(0,i.kt)("p",null,"For the following example, assume you have 18 DOT to stake. For simplicity's sake, we will ignore\nnominators. Running a single validator, as in the example above, would net you 2 DOT in this era."),(0,i.kt)("p",null,"Note that while DOT is used as an example, this same formula would apply to KSM when running a\nvalidator on Kusama."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 18 DOT <- Your validator\nValidator 2 Stake (v2):  9 DOT\nValidator 3 Stake (v3):  8 DOT\nValidator 4 Stake (v4):  7 DOT\nPayout (p): 8 DOT\n\nYour payout = (p / v) * 1 = (8 / 4) * 1 = 2\n")),(0,i.kt)("p",null,"Running two validators, and splitting the stake equally, would result in the original validator ",(0,i.kt)("inlineCode",{parentName:"p"},"v4"),"\nto be kicked out of the validator set, as only the top ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," validators (as measured by stake) are\nselected to be in the validator set. More important, it would also double the reward that you get\nfrom each era."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1): 9 DOT <- Your first validator\nValidator 2 Stake (v2): 9 DOT <- Your second validator\nValidator 3 Stake (v3): 9 DOT\nValidator 4 Stake (v4): 8 DOT\nPayout (p): 8 DOT\n\nYour payout = (p / v) * 2 = (8 / 4) * 2 = 4\n")),(0,i.kt)("p",null,"With enough stake, you could run more than two validators. However, each validator must have enough\nstake behind it to be in the validator set."),(0,i.kt)("p",null,"The incentives of the system favor equally-staked validators. This works out to be a dynamic, rather\nthan static, equilibrium. Potential validators will run different numbers of validators and apply\ndifferent amounts of stake to them as time goes on, and in response to the actions of other\nvalidators on the network."),(0,i.kt)("h2",{id:"slashing"},"Slashing"),(0,i.kt)("p",null,"Although rewards are paid equally, slashes are relative to a validator's stake. Therefore, if you do\nhave enough DOT to run multiple validators, it is in your best interest to do so. A slash of 30%\nwill, of course, be more DOT for a validator with 18 DOT staked than one with 9 DOT staked."),(0,i.kt)("p",null,"Running multiple validators does not absolve you of the consequences of misbehavior. Polkadot\npunishes attacks that appear coordinated more severely than individual attacks. You should not, for\nexample, run multiple validators hosted on the same infrastructure. A proper multi-validator\nconfiguration would ensure that they do not fail simultaneously."),(0,i.kt)("p",null,"Nominators have the incentive to nominate the lowest-staked validator, as this will result in the\nlowest risk and highest reward. This is due to the fact that while their vulnerability to slashing\nremains the same (since it is percentage-based), their rewards are higher since they will be a\nhigher proportion of the total stake allocated to that validator."),(0,i.kt)("p",null,"To clarify this, let us imagine two validators, ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),". Assume both are in the active set,\nhave commission set to 0%, and are well-behaved. The only difference is that ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," has 90 DOT\nnominating it and ",(0,i.kt)("inlineCode",{parentName:"p"},"v2")," only has 10. If you nominate ",(0,i.kt)("inlineCode",{parentName:"p"},"v1"),", it now has ",(0,i.kt)("inlineCode",{parentName:"p"},"90 + 10 = 100")," DOT, and you\nwill get 10% of the staking rewards for the next era. If you nominate ",(0,i.kt)("inlineCode",{parentName:"p"},"v2"),", it now has\n",(0,i.kt)("inlineCode",{parentName:"p"},"10 + 10 = 20")," DOT nominating it, and you will get 50% of the staking rewards for the next era. In\nactuality, it would be quite rare to see such a large difference between the stake of validators,\nbut the same principle holds even for smaller differences. If there is a 10% slash of either\nvalidator, then you will lose 1 DOT in each case."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If a validator is oversubscribed in an era, staking rewards are distributed only to the the top\n","\n",(0,i.kt)(r.Z,{network:"kusama",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"\nnominators and the rest of the nominators do not receive any rewards. This is not the case for\nslashing! Every active nominator of the validator committing slashable offence will be slashed.")),(0,i.kt)("h2",{id:"nominators-and-validator-payments"},"Nominators and Validator Payments"),(0,i.kt)("p",null,'Nominated stake allows you to "vote" for validators and share in the rewards (and slashing) without\nrunning a validator node yourself. Validators can choose to keep a percentage of the rewards due to\ntheir validator to "reimburse" themselves for the cost of running a validator node. Other than that,\nall rewards are shared based on the stake behind each validator. This includes the stake of the\nvalidator itself, plus any stake bonded by nominators.'),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Validators set their preference as a percentage of the block reward, ",(0,i.kt)("em",{parentName:"p"},"not")," an absolute number of\nDOT. Polkadot's block reward is based on the ",(0,i.kt)("em",{parentName:"p"},"total")," amount at stake, with the reward peaking when\nthe amount staked is at 50% of the total supply. The commission is set as the amount taken by the\nvalidator; that is, 0% commission means that the validator does not receive any proportion of the\nrewards besides that owed to it from self-stake, and 100% commission means that the validator\noperator gets all rewards and gives none to its nominators.")),(0,i.kt)("p",null,"In the following examples, we can see the results of several different validator payment schemes and\nsplit between nominator and validator stake. We will assume a single nominator for each validator.\nHowever, there can be numerous nominators for each validator. Rewards are still distributed\nproportionally - for example, if the total rewards to be given to nominators is 2 DOT, and there are\nfour nominators with equal stake bonded, each will receive 0.5 DOT. Note also that a single\nnominator may stake different validators."),(0,i.kt)("p",null,"Each validator in the example has selected a different validator payment (that is, a percentage of\nthe reward set aside directly for the validator before sharing with all bonded stake). The\nvalidator's payment percentage (in DOT, although the same calculations work for KSM) is listed in\nbrackets (",(0,i.kt)("inlineCode",{parentName:"p"},"[]"),") next to each validator. Note that since the validator payment is public knowledge,\nhaving a low or non-existent validator payment may attract more stake from nominators, since they\nknow they will receive a larger reward."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Validator Set Size (v): 4\nValidator 1 Stake (v1) [20% commission]: 18 DOT (9 validator, 9 nominator)\nValidator 2 Stake (v2) [40% commission]:  9 DOT (3 validator, 6 nominator)\nValidator 3 Stake (v3) [10% commission]:  8 DOT (4 validator, 4 nominator)\nValidator 4 Stake (v4) [ 0% commission]:  6 DOT (1 validator, 5 nominator)\nPayout (p): 8 DOT\n\nPayout for each validator (v1 - v4):\np / v = 8 / 4 = 2 DOT\n\nv1:\n(0.2 * 2) = 0.4 DOT -> validator payment\n(2 - 0.4) = 1.6 -> shared between all stake\n(9 / 18) * 1.6 = 0.8 -> validator stake share\n(9 / 18) * 1.6 = 0.8 -> nominator stake share\nv1 validator total reward: 0.4 + 0.8 = 1.2 DOT\nv1 nominator reward: 0.8 DOT\n\nv2:\n(0.4 * 2) = 0.8 DOT -> validator payment\n(2 - 0.8) = 1.2 -> shared between all stake\n(3 / 9) * 1.2 = 0.4 -> validator stake share\n(6 / 9) * 1.2 = 0.8 -> nominator stake share\nv2 validator total reward: 0.8 + 0.4 = 1.2 DOT\nv2 nominator reward: 0.8 DOT\n\nv3:\n(0.1 * 2) = 0.2 DOT -> validator payment\n(2 - 0.2) = 1.8 -> shared between all stake\n(4 / 8) * 1.8 = 0.9 -> validator stake share\n(4 / 8) * 1.8 = 0.9 -> nominator stake share\nv3 validator total reward: 0.2 + 0.9 DOT = 1.1 DOT\nv3 nominator reward: 0.9 DOT\n\nv4:\n(0 * 2) = 0 DOT -> validator payment\n(2 - 0) = 2.0 -> shared between all stake\n(1 / 6) * 2 = 0.33 -> validator stake share\n(5 / 6) * 2 = 1.67 -> nominator stake share\nv4 validator total reward: 0 + 0.33 DOT = 0.33 DOT\nv4 nominator reward: 1.67 DOT\n")))}v.isMDXComponent=!0},95856:()=>{},46601:()=>{}}]);