(self.webpackChunk=self.webpackChunk||[]).push([[6827],{47940:(a,t,e)=>{"use strict";e.d(t,{Z:()=>k});var n=e(74165),i=e(15861),s=e(67294),r=e(87152),o=e(34200),l=e(67425);function d(a,t,e){return u.apply(this,arguments)}function u(){return(u=(0,i.Z)((0,n.Z)().mark((function a(t,e,i){var s,l,d,u,c;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:s=void 0,l=void 0,a.t0=t,a.next="polkadot"===a.t0?5:"kusama"===a.t0?7:"statemine"===a.t0?9:"statemint"===a.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",a.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",a.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",a.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",a.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){a.next=18;break}return a.abrupt("return");case 18:return d=new r.U(s),a.next=21,o.G.create({provider:d});case 21:u=a.sent,(c=e.split(".")).forEach((function(a){a in u&&(u=u[a])})),a.t1=c[0],a.next="consts"===a.t1?27:"query"===a.t1?29:34;break;case 27:return l=u.toString(),a.abrupt("break",35);case 29:return a.next=31,u();case 31:return l=(l=a.sent).toString(),a.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+e);case 35:return a.abrupt("return",l);case 36:case"end":return a.stop()}}),a)})))).apply(this,arguments)}function c(a,t,e,n){switch(t){case"humanReadable":(0,l.HumanReadable)(a,e,n);break;case"precise":(0,l.Precise)(a,e,n);break;case"blocksToDays":(0,l.BlocksToDays)(a,n);break;case"percentage":(0,l.Percentage)(a,n);break;case"arrayLength":(0,l.ArrayLength)(a,n);break;default:return void console.log("Ignoring unknown filter type")}}const k=function(a){var t=a.network,e=a.path,r=a.defaultValue,o=a.filter,l=void 0===o?void 0:o,u=(0,s.useState)(""),k=u[0],m=u[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?c(r.toString(),l,t,m):m(r.toString());var a=void 0;switch(t){case"polkadot":a="wss://rpc.polkadot.io";break;case"kusama":a="wss://kusama-rpc.polkadot.io/";break;case"statemine":a="wss://statemine-rpc.polkadot.io/";break;case"statemint":a="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===a)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var a=(0,i.Z)((0,n.Z)().mark((function a(){var i;return(0,n.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d(t,e,m);case 2:if(void 0!==(i=a.sent)){a.next=7;break}return a.abrupt("return");case 7:void 0!==l?c(i,l,t,m):m(i);case 8:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();try{s()}catch(o){console.log(o)}}}),[]),k}},67425:a=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};a.exports={HumanReadable:function(a,e,n){var i=void 0;if("polkadot"===e||"statemint"===e)i=3;else{if("kusama"!==e&&"statemine"!==e)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=6}a=parseFloat(a),n((a=Number.isInteger(a/t[e].precision)?a/t[e].precision+" "+t[e].symbol:(a/t[e].precision).toFixed(i)+" "+t[e].symbol).toString())},Precise:function(a,e,n){n(a=(a=parseFloat(a))/t[e].precision+" "+t[e].symbol)},BlocksToDays:function(a,t){t((a=6*a/86400).toString())},Percentage:function(a,t){t((a/=1e7).toString())},ArrayLength:function(a,t){t((a=a.split(",").length).toString())}}},81807:(a,t,e)=>{"use strict";e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>k});var n=e(87462),i=e(63366),s=(e(67294),e(3905)),r=e(47940),o=["components"],l={id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",keywords:["getting started","introduction","kusama","interact"],slug:"../../kusama-getting-started"},d=void 0,u={unversionedId:"general/kusama/kusama-getting-started",id:"general/kusama/kusama-getting-started",title:"Interact with Kusama",description:"Reference point for Kusama content.",source:"@site/../docs/general/kusama/kusama-getting-started.md",sourceDirName:"general/kusama",slug:"/kusama-getting-started",permalink:"/docs/kusama-getting-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1687933561,formattedLastUpdatedAt:"Jun 28, 2023",frontMatter:{id:"kusama-getting-started",title:"Interact with Kusama",sidebar_label:"Home",description:"Reference point for Kusama content.",keywords:["getting started","introduction","kusama","interact"],slug:"../../kusama-getting-started"},sidebar:"docs",next:{title:"Code of Conduct",permalink:"/docs/kusama-coc"}},c={},k=[{value:"Polkadot&#39;s Canary Network",id:"polkadots-canary-network",level:3},{value:"What can I do with my KSM?",id:"what-can-i-do-with-my-ksm",level:3},{value:"Kusama Gifts",id:"kusama-gifts",level:3}],m={toc:k},p="wrapper";function g(a){var t=a.components,e=(0,i.Z)(a,o);return(0,s.kt)(p,(0,n.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"polkadots-canary-network"},"Polkadot's Canary Network"),(0,s.kt)("p",null,"Kusama is a ",(0,s.kt)("em",{parentName:"p"},"canary network")," for Polkadot; an earlier release of the code that is available first\nand holds real economic value. For developers, Kusama is a proving ground for runtime upgrades,\non-chain governance, and parachains."),(0,s.kt)("admonition",{title:"No Promises",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Kusama is owned by those who hold the Kusama tokens (KSM). There's no central kill switch and all\nchanges are made through the protocol's on-chain governance."),(0,s.kt)("p",{parentName:"admonition"},"The network is a permissionless and anyone can come along and start using it. Those who participated\nin the Polkadot sale can claim a proportional amount of KSM through the\n",(0,s.kt)("a",{parentName:"p",href:"kusama-claims"},"Kusama Claims process"),"."),(0,s.kt)("p",{parentName:"admonition"},"Kusama is experimental. ",(0,s.kt)("strong",{parentName:"p"},"Expect Chaos"),".")),(0,s.kt)("admonition",{title:"As a KSM holder",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can interact with all the features of the Kusama network such as staking (i.e. validating or\nnominating), governance, parachain auctions, basic transfers and everything else.")),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-account-generation"},(0,s.kt)("img",{src:"/img/kusama-guide/Account.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Creating an Account")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-balance-transfers"},(0,s.kt)("img",{src:"/img/kusama-guide/Transfer.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Balance Transfers")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-staking"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Stake.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Staking"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-parachains"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Parachain.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Parachains")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-bridges"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Bridges.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Bridges")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/maintain-guides-how-to-vote-councillor"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Voting.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Vote for Councilors"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-treasury#creating-the-proposal"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Proposal.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Make Proposals")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/maintain-guides-how-to-join-council#submit-candidacy"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Council.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Council Candidacy")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-treasury"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Treasury.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Treasury"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-identity"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Identity.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Set an Identity")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/maintain-guides-how-to-nominate-kusama"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Nominate.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Become a Nominator")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-proxies"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Proxy.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Proxy Accounts"))))),(0,s.kt)("br",null),(0,s.kt)("tr",{class:"cards-container"},(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/learn-crowdloans/"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Crowdloans.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Participate in Crowdloans")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/maintain-guides-society-kusama"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Kusama-Society.png",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Join Kappa Sigma Mu")))),(0,s.kt)("td",null,(0,s.kt)("a",{class:"guide-link",href:"https://guide.kusama.network/docs/ambassadors"},(0,s.kt)("img",{class:"guide-image",src:"/img/kusama-guide/Ambassadors.jpg",alt:"Drawing",width:"250",height:"150"}),(0,s.kt)("div",{class:"cards-body"},(0,s.kt)("h5",{class:"cards-title"},"Become an Ambassador"))))),(0,s.kt)("br",null),(0,s.kt)("p",null,"For brand-new learners of Kusama's cousin network, Polkadot, please head over to the\n",(0,s.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/"},"Polkadot Wiki"),"."),(0,s.kt)("h3",{id:"what-can-i-do-with-my-ksm"},"What can I do with my KSM?"),(0,s.kt)("p",null,"KSM is the native token of the Kusama Network. KSM can be used for transaction fees, staking,\ngovernance, acquisition of a parachain slot and for enabling several key functionalities on Kusama."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:333333333,filter:"humanReadable",mdxType:"RPC"}),":"),"\nthe minimum balance required to have an active account on Kusama Network. If your account balance\ndrops below the minimum, your account will be reaped. Learn more about\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"Accounts")," and the\n",(0,s.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#existential-deposit"},"Existential Deposit")," requirement.")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"query.nominationPools.minJoinBond",defaultValue:1666666650,filter:"humanReadable",mdxType:"RPC"}),":"),"\nthe minimum contribution required to join a\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," and earn staking rewards for contributing\nto the security of the network. Learn more about\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"consts.crowdloan.minContribution",defaultValue:999999999e3,filter:"humanReadable",mdxType:"RPC"}),":"),"\nthe minimum contribution required to participate in ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloans"),"\nfor ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain slot auctions"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:333333333e3,filter:"humanReadable",mdxType:"RPC"}),":"),"\nregister an ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-identity"},"on-chain identity"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"consts.proxy.proxyDepositBase",defaultValue:666933332400,filter:"humanReadable",mdxType:"RPC"}),":"),"\ncreate a ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-proxies"},"proxy account"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"query.nominationPools.minCreateBond",defaultValue:1e12,filter:"humanReadable",mdxType:"RPC"}),":"),"\nyou can create your own ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),".")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"",(0,s.kt)("strong",{parentName:"p"},(0,s.kt)(r.Z,{network:"kusama",path:"query.staking.minimumActiveStake",defaultValue:0,filter:"humanReadable",mdxType:"RPC"}),":"),"\nthe minimum amount of KSM required to become an active nominator and earn rewards."))),(0,s.kt)("p",null,"KSM has utility in ",(0,s.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Kusama's democracy"),". Bonding KSM is\na requirement to create proposals, to endorse them and to vote on them when they become referendums.\nBonding\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.treasury.proposalBondMinimum",defaultValue:666666666e3,filter:"humanReadable",mdxType:"RPC"}),"\nor 5% of requested funding is a requirement to make a\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-treasury#creating-a-treasury-proposal"},"treasury proposal"),"."),(0,s.kt)("h3",{id:"kusama-gifts"},"Kusama Gifts"),(0,s.kt)("img",{align:"right",src:"/img/kusama-gift.png",width:"210",height:"200"}),(0,s.kt)("p",null,"Kusama Gifts provide an easy way to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,s.kt)("li",{parentName:"ul"},"Share your love of Kusama and send any amount of KSM."),(0,s.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,s.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,s.kt)("p",null,"Learn more about how you can create and send Kusama Gifts\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,s.kt)("p",null,"While Kusama does not support smart contracts natively, building apps on it is still possible (e.g.\n",(0,s.kt)("a",{parentName:"p",href:"https://rmrk.app"},"RMRK.app"),"). If you're interested in diving deeper into ",(0,s.kt)("em",{parentName:"p"},"proper")," development,\nhowever, check out the ",(0,s.kt)("a",{parentName:"p",href:"build-index"},"builders guide"),"."),(0,s.kt)("p",null,"Additional Resources:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://mooc.web3.foundation/course/blockchain-fundamentals/"},"mooc")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/kusama-network-7446706b8f4c"},"medium")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"kusama-claims"},"claims")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"maintain-endpoints"},"endpoints")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://claim.kusama.network/"},"tokens")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-validate-kusama"},"validator")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/maintain-guides-how-to-nominate-kusama"},"nominator")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/"},"polkadot wiki"))))}g.isMDXComponent=!0},46601:()=>{}}]);