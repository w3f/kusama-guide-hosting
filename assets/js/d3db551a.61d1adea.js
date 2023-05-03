(self.webpackChunk=self.webpackChunk||[]).push([[7485],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(74165),o=a(15861),s=a(67294),r=a(92519),i=a(9545),l=a(67425);function p(e,t,a){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var s,l,p,u,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){e.next=18;break}return e.abrupt("return");case 18:return p=new r.U(s),e.next=21,i.G.create({provider:p});case 21:u=e.sent,(h=a.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=h[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=u.toString(),e.abrupt("break",35);case 29:return e.next=31,u();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+h[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,s.useState)(""),d=u[0],c=u[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?h(r.toString(),l,t,c):c(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,c);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(o,l,t,c):c(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),d}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},67445:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),r=a(47940),i=["components"],l={id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Polkadot's on-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-treasury"},p=void 0,u={unversionedId:"learn/learn-treasury",id:"learn/learn-treasury",title:"Treasury",description:"Details about Polkadot's on-chain Treasury.",source:"@site/../docs/learn/learn-treasury.md",sourceDirName:"learn",slug:"/learn-treasury",permalink:"/docs/learn-treasury",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1681310164,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{id:"learn-treasury",title:"Treasury",sidebar_label:"Treasury",description:"Details about Polkadot's on-chain Treasury.",keywords:["treasury","funds","funding","tips","tipping"],slug:"../learn-treasury"},sidebar:"docs",previous:{title:"Proxy Accounts",permalink:"/docs/learn-proxies"},next:{title:"Assets",permalink:"/docs/learn-assets"}},h={},d=[{value:"Funding the Treasury",id:"funding-the-treasury",level:2},{value:"Creating a Treasury Proposal",id:"creating-a-treasury-proposal",level:2},{value:"Announcing the Proposal",id:"announcing-the-proposal",level:3},{value:"Creating the Proposal",id:"creating-the-proposal",level:3},{value:"Tipping",id:"tipping",level:2},{value:"Example",id:"example",level:3},{value:"Bounties Spending",id:"bounties-spending",level:2},{value:"Creating a Bounty Proposal",id:"creating-a-bounty-proposal",level:3},{value:"Closing a bounty",id:"closing-a-bounty",level:3},{value:"FAQ",id:"faq",level:2},{value:"What prevents the Treasury from being captured by a majority of the Council?",id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council",level:3},{value:"Further Reading",id:"further-reading",level:2}],c={toc:d},m="wrapper";function f(e){var t=e.components,l=(0,o.Z)(e,i);return(0,s.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"",(0,s.kt)("strong",{parentName:"p"},"OpenGov is live on Kusama and all treasury proposals need to be submitted through the respective\n",(0,s.kt)("a",{parentName:"strong",href:"/docs/maintain-guides-opengov#origins-and-tracks-info"},"OpenGov tracks.")),""),(0,s.kt)("p",null,"The Treasury is a pot of funds collected through a portion of block production rewards, transaction\nfees, slashing, ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-staking#inflation"},"staking inefficiencies"),", etc."),(0,s.kt)("p",null,"The Treasury funds are held in a ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system account")," not\naccessible by anyone; only the system internal logic can access it. Funds can be spent by making a\nspending proposal that, if approved by the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-governance#council"},"Council"),", will enter a\nwaiting period before distribution. This waiting period is known as the ",(0,s.kt)("em",{parentName:"p"},"spend period"),", and its\nduration is subject to ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance"),", with the current default set to\n","\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.treasury.spendPeriod",defaultValue:86400,filter:"blocksToDays",mdxType:"RPC"}),"\ndays. The Treasury attempts to spend as many proposals in the queue as it can without running out of\nfunds."),(0,s.kt)("p",null,"Treasury payout is an automatic process:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"If the Treasury funds run out with approved proposals left to fund, those proposals are kept in\nthe approved queue, and will receive funding in the following spend period."),(0,s.kt)("li",{parentName:"ul"},"If the Treasury ends a spend period without spending all of its funds, it suffers a burn of a\npercentage of its funds - thereby causing deflationary pressure. This encourages the spending of\nthe funds in the Treasury by Polkadot's governance system.\n\nThis percentage is currently 0.2% on Kusama, with the amount currently\ngoing to ",(0,s.kt)("a",{parentName:"li",href:"https://guide.kusama.network/docs/maintain-guides-society-kusama"},"Society")," rather than being\nburned.")),(0,s.kt)("p",null,"When a stakeholder wishes to propose a spend from the Treasury, they must reserve a deposit of at\nleast 5% of the proposed spend (see below for variations). This deposit will be slashed if the\nproposal is rejected, and returned if it is accepted."),(0,s.kt)("p",null,"Proposals may consist of (but are not limited to):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Infrastructure deployment and continued operation."),(0,s.kt)("li",{parentName:"ul"},"Network security operations (monitoring services, continuous auditing)."),(0,s.kt)("li",{parentName:"ul"},"Ecosystem provisions (collaborations with friendly chains)."),(0,s.kt)("li",{parentName:"ul"},"Marketing activities (advertising, paid features, collaborations)."),(0,s.kt)("li",{parentName:"ul"},"Community events and outreach (meetups, pizza parties, hackerspaces)."),(0,s.kt)("li",{parentName:"ul"},"Software development (wallets and wallet integration, clients and client upgrades).")),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"learn-governance#council"},"Council")," governs the Treasury and how the funds are spent is up to\ntheir judgment."),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"The Council does not approve or deny Treasury Proposals based on the available funds. Proposals are\nnot approved just because there are funds ready to spend but are subject to a burn.")),(0,s.kt)("h2",{id:"funding-the-treasury"},"Funding the Treasury"),(0,s.kt)("p",null,"The Treasury is funded from different sources:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Slashing: When a validator is slashed for any reason, the slashed amount is sent to the Treasury\nwith a reward going to the entity that reported the validator (another validator). The reward is\ntaken from the slash amount and varies per offence and number of reporters."),(0,s.kt)("li",{parentName:"ol"},"Transaction fees: A portion of each block's transaction fees goes to the Treasury, with the\nremainder going to the block author."),(0,s.kt)("li",{parentName:"ol"},"Staking inefficiency: ",(0,s.kt)("a",{parentName:"li",href:"/docs/learn-staking#inflation"},"Inflation")," is designed to be 10% in the first\nyear, and the ideal staking ratio is set at 50%, meaning half of all tokens should be locked in\nstaking. Any deviation from this ratio will cause a proportional amount of the inflation to go to\nthe Treasury. In other words, if 50% of all tokens are staked, then 100% of the inflation goes to\nthe validators as reward. If the staking rate is greater than or less than 50%, then the\nvalidators will receive less, with the remainder going to the Treasury."),(0,s.kt)("li",{parentName:"ol"},"Parathreads: ",(0,s.kt)("a",{parentName:"li",href:"/docs/learn-parathreads"},"Parathreads")," participate in a per-block auction for block\ninclusion. Part of this bid goes to the validator that accepts the block and the remainder goes\nto the Treasury.")),(0,s.kt)("h2",{id:"creating-a-treasury-proposal"},"Creating a Treasury Proposal"),(0,s.kt)("p",null,"",(0,s.kt)("strong",{parentName:"p"},"Legacy Instructions below will be removed when Governance V1 is completely removed from Kusama.\nCheck the instructions on\n",(0,s.kt)("a",{parentName:"strong",href:"/docs/maintain-guides-opengov#create-a-referenda-proposal-using-polkadot-js-ui"},"how to submit a proposal through OpenGov"),"."),""),(0,s.kt)("p",null,"",(0,s.kt)("strong",{parentName:"p"},"Your proposal should address a problem, outline a goal, give a detailed account of how you will\nreach that goal, and include any ongoing maintenance needs. As much as possible, you should itemize\nthe tasks to be completed so fees can be evaluated and milestones can be followed. You can check the\n",(0,s.kt)("a",{parentName:"strong",href:"https://ipfs.io/ipfs/QmXHwouq6dfjC3AqkYbwJe92pTQhrWgJxLAcffoPtvSni6/kusama_treasury_project_propsal.pdf"},"guidelines for a successful proposal"),"\nand fill out the Treasury proposal template provided for Kusama."),""),(0,s.kt)("p",null,"The proposer has to deposit a minimum of\n","\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.treasury.proposalBondMinimum",defaultValue:66e9,filter:"humanReadable",mdxType:"RPC"}),"\nor 5% of the requested amount with a maximum cap of\n","\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.treasury.proposalBondMaximum",defaultValue:3333e9,filter:"humanReadable",mdxType:"RPC"}),'\nas an anti-spam measure. If the treasury proposal does not pass due to lack of votes from the\ncouncil members, the proposal goes back to the waiting queue and the deposit amount will stay\nlocked. If the treasury proposal passes successfully, the deposit amount is refunded. If the\nproposal is explicitly rejected by the council through "Nay" votes, then the deposit amount is\nburned.'),(0,s.kt)("p",null,"These values are subject to ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance")," so they may change in the future."),(0,s.kt)("p",null,"Please note that there is no way for a user to revoke a treasury proposal after it has been\nsubmitted. The Council will either accept or reject the proposal, and if the proposal is rejected,\nthe bonded funds are burned."),(0,s.kt)("h3",{id:"announcing-the-proposal"},"Announcing the Proposal"),(0,s.kt)("p",null,"To minimize storage on chain, proposals don't contain contextual information. When a user submits a\nproposal, they will probably need to find an off-chain way to explain the proposal. Most discussion\ntakes place on the following platforms:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Many community members participate in discussion in the\n",(0,s.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"Kusama Direction room")," and the\n",(0,s.kt)("a",{parentName:"li",href:"https://matrix.to/#/#kusamawatercooler:polkadot.builders"},"Kusama Watercooler"),"."),(0,s.kt)("li",{parentName:"ul"},"The ",(0,s.kt)("a",{parentName:"li",href:"https://polkassembly.io"},"Polkassembly")," and ",(0,s.kt)("a",{parentName:"li",href:"https://www.subsquare.io/"},"SubSquare")," discussion\nplatforms automatically read proposals from the chain, turning them into discussion threads and\nallow users to log in with their Web3 address. It also offers a sentiment gauge poll to get a feel\nfor a proposal before committing to a vote.")),(0,s.kt)("p",null,"Spreading the word about the proposal's explanation to the community is ultimately up to the\nproposer."),(0,s.kt)("h3",{id:"creating-the-proposal"},"Creating the Proposal"),(0,s.kt)("p",null,"One way to create the proposal is to use the Polkadot-JS Apps\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"website"),". From the website, use either the\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"extrinsics tab")," and select the Treasury pallet, then\n",(0,s.kt)("inlineCode",{parentName:"p"},"proposeSpend")," and enter the desired amount and recipient, or use the\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/treasury"},"Treasury tab")," and its dedicated Submit Proposal button:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"A proposal being created",src:a(52737).Z,width:"1151",height:"555"})),(0,s.kt)("p",null,"The system will automatically take the required deposit, picking the higher of the two values\nmentioned ",(0,s.kt)("a",{parentName:"p",href:"#creating-a-treasury-proposal"},"above"),"."),(0,s.kt)("p",null,"Once created, your proposal will become visible in the Treasury screen and the Council can start\nvoting on it."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Pending proposals",src:a(40096).Z,width:"966",height:"510"})),(0,s.kt)("p",null,"Remember that the proposal has no metadata, so it's up to the proposer to create a description and\npurpose that the Council could study and base their votes on."),(0,s.kt)("p",null,"At this point, a Council member can create a motion to accept or to reject the treasury proposal. It\nis possible that one motion to accept and another motion to reject are both created. The proportions\nto accept and reject Council proposals vary between accept or reject, and possibly depend on which\nnetwork the Treasury is implemented."),(0,s.kt)("p",null,"The threshold for accepting a treasury proposal is at least three-fifths of the Council. On the\nother hand, the threshold for rejecting a proposal is at least one-half of the Council."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Motions in action",src:a(15432).Z,width:"1393",height:"662"})),(0,s.kt)("p",null,'You will notice the "spend period" at the top of the Treasury UI.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Proposal Spend Period",src:a(26571).Z,width:"3424",height:"1070"})),(0,s.kt)("h2",{id:"tipping"},"Tipping"),(0,s.kt)("p",null,"Next to the proposals process, a separate system for making tips exists for the Treasury. Tips can\nbe suggested by anyone and are supported by members of the Council. Tips do not have any definite\nvalue, and the final value of the tip is decided based on the median of all tips issued by the\ntippers."),(0,s.kt)("p",null,"Currently, the tippers are the same as the members of the Council. However, being a tipper is not\nthe direct responsibility of the Council, and at some point the Council and the tippers may be\ndifferent groups of accounts."),(0,s.kt)("p",null,"A tip will enter a closing phase when more than a half plus one of the tipping group have endorsed a\ntip. During that time frame, the other members of the tipping group can still issue their tips, but\ndo not have to. Once the window closes, anyone can call the ",(0,s.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic, and the tip will\nbe paid out."),(0,s.kt)("p",null,"There are two types of tips:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"public: A small bond is required to place them. This bond depends on the tip message length, and a\nfixed bond constant defined on chain, currently\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.tips.tipReportDepositBase",defaultValue:166e9,filter:"humanReadable",mdxType:"RPC"}),".\nPublic tips carry a finder's fee of\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.tips.tipFindersFee",defaultValue:20,mdxType:"RPC"}),"%,\nwhich is paid out from the total amount."),(0,s.kt)("li",{parentName:"ul"},"tipper-initiated: Tips that a Council member published, do not have a finder's fee or a bond.")),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"For information about how to submit a tip from the Treasury you can read\n",(0,s.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181971"},"this support article"),".")),(0,s.kt)("p",null,"To better understand the process a tip goes through until it is paid out, let's consider the example\nbelow."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Bob has done something great for Kusama.\nAlice has noticed this and decides to report Bob as deserving a tip from the Treasury. The Council\nis composed of three members Charlie, Dave, and Eve."),(0,s.kt)("p",null,"Alice begins the process by issuing the ",(0,s.kt)("inlineCode",{parentName:"p"},"report_awesome")," extrinsic. This extrinsic requires two\narguments, a reason and the beneficiary. Alice submits Bob's address with the reason being a UTF-8\nencoded URL to a post on ","\n",(0,s.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io"},"Polkassembly")," that explains her reasoning for\nwhy Bob deserves the tip."),(0,s.kt)("p",null,"As mentioned above, Alice must also lock up a deposit for making this report. The deposit is the\nbase deposit as set in the chain's parameter list, plus the additional deposit per byte contained in\nthe reason. This is why Alice submitted a URL as the reason instead of the explanation directly: it\nwas cheaper for her to do so. For her trouble, Alice is able to claim the eventual finder's fee if\nthe tip is approved by the tippers."),(0,s.kt)("p",null,"Since the tipper group is the same as the Council, the Council must now collectively (but also\nindependently) decide on the value of the tip that Bob deserves. Charlie, Dave, and Eve all review\nthe report and make tips according to their personal valuation of the benefit Bob has provided to\nKusama. Charlie tips\n1 KSM, Dave tips\n3 KSM, and Eve tips\n10 KSM."),(0,s.kt)("p",null,"The tip could have been closed out with only two of the three tippers. Once more than half of the\ntippers group have issued tip valuations, the countdown to close the tip will begin. In this case,\nthe third tipper issued their tip before the end of the closing period, so all three were able to\nmake their tip valuations known."),(0,s.kt)("p",null,"The actual tip that will be paid out to Bob is the median of these tips, so Bob will be paid out\n3 KSM from the Treasury. In order for Bob to\nbe paid his tip, some account must call the ",(0,s.kt)("inlineCode",{parentName:"p"},"close_tip")," extrinsic at the end of the closing period\nfor the tip. This extrinsic may be called by anyone."),(0,s.kt)("h2",{id:"bounties-spending"},"Bounties Spending"),(0,s.kt)("p",null,"There are practical limits to Council Members curation capabilities when it comes to treasury\nproposals: Council members likely do not have the expertise to make a proper assessment of the\nactivities described in all proposals. Even if individual Councillors have that expertise, it is\nhighly unlikely that a majority of members are capable in such diverse topics."),(0,s.kt)("p",null,"Bounties Spending proposals aim to delegate the curation activity of spending proposals to experts\ncalled Curators: They can be defined as addresses with agency over a portion of the Treasury with\nthe goal of fixing a bug or vulnerability, developing a strategy, or monitoring a set of tasks\nrelated to a specific topic: all for the benefit of the\nKusama ecosystem."),(0,s.kt)("p",null,"A proposer can submit a bounty proposal for the Council to pass, with a curator to be defined later,\nwhose background and expertise is such that they are capable of determining when the task is\ncomplete. Curators are selected by the Council after the bounty proposal passes, and need to add an\nupfront payment to take the position. This deposit can be used to punish them if they act\nmaliciously. However, if they are successful in their task of getting someone to complete the bounty\nwork, they will receive their deposit back and part of the bounty reward."),(0,s.kt)("p",null,"When submitting the value of the bounty, the proposer includes a reward for curators willing to\ninvest their time and expertise in the task: this amount is included in the total value of the\nbounty. In this sense, the curator's fee can be defined as the result of subtracting the value paid\nto the bounty rewardee from the total value of the bounty."),(0,s.kt)("p",null,"In general terms, curators are expected to have a well-balanced track record related to the issues\nthe bounty tries to resolve: they should be at least knowledgeable on the topics the bounty touches,\nand show project management skills or experience. These recommendations ensure an effective use of\nthe mechanism. A Bounty Spending is a reward for a specified body of work - or specified set of\nobjectives - that needs to be executed for a predefined treasury amount to be paid out. The\nresponsibility of assigning a payout address once the specified set of objectives is completed is\ndelegated to the curator."),(0,s.kt)("p",null,"After the Council has activated a bounty, it delegates the work that requires expertise to the\ncurator who gets to close the active bounty. Closing the active bounty enacts a delayed payout to\nthe payout address and a payout of the curator fee. The delay phase allows the Council to act if any\nissues arise."),(0,s.kt)("p",null,"To minimize storage on chain in the same way as any proposal, bounties don't contain contextual\ninformation. When a user submits a bounty spending proposal, they will probably need to find an\noff-chain way to explain the proposal (any of the available community forums serve this purpose).\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?usp=sharing"},"This template"),"\ncan help as a checklist of all needed information for the Council to make an informed decision."),(0,s.kt)("p",null,"The bounty has a predetermined duration of 90 days with the possibility of being extended by the\ncurator. Aiming to maintain flexibility on the tasks\u2019 curation, the curator will be able to create\nsub-bounties for more granularity and allocation in the next iteration of the mechanism."),(0,s.kt)("h3",{id:"creating-a-bounty-proposal"},"Creating a Bounty Proposal"),(0,s.kt)("p",null,"Anyone can create a Bounty proposal using Polkadot-JS Apps: Users are able to submit a proposal on\nthe dedicated Bounty section under Governance. The development of a robust user interface to view\nand manage bounties in the Polkadot Apps is still under development and it will serve Council\nmembers, Curators and Beneficiaries of the bounties, as well as all users observing the on-chain\ntreasury governance. For now, the help of a Councillor is needed to open a bounty proposal as a\nmotion to be voted."),(0,s.kt)("p",null,"To submit a bounty, please visit ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps")," and click on the\ngovernance tab in the options bar on the top of the site. After, click on 'Bounties' and find the\nbutton '+ Add Bounty' on the upper-right side of the interface. Complete the bounty title, the\nrequested allocation (including curator's fee) and confirm the call."),(0,s.kt)("p",null,"After this, a Council member will need to assist you to pass the bounty proposal for vote as a\nmotion. You can contact the Council by joining the\n","\nKusama Direction ",(0,s.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kusama:matrix.parity.io"},"channel")," in\nElement or joining our\n","\nKusama Discord ",(0,s.kt)("a",{parentName:"p",href:"https://parity.link/kusama-discord"},"server")," and publishing a\nshort description of your bounty, with a link to one of the ",(0,s.kt)("a",{parentName:"p",href:"#announcing-the-proposal"},"forums")," for\ncontextual information."),(0,s.kt)("p",null,"A bounty can be cancelled by deleting the earmark for a specific treasury amount or be closed if the\ntasks have been completed. On the opposite side, the 90 days life of a bounty can be extended by\namending the expiry block number of the bounty to stay active."),(0,s.kt)("h3",{id:"closing-a-bounty"},"Closing a bounty"),(0,s.kt)("p",null,"The curator can close the bounty once they approve the completion of its tasks. The curator should\nmake sure to set up the payout address on the active bounty beforehand. Closing the Active bounty\nenacts a delayed payout to the payout address and a payout of the curator fee."),(0,s.kt)("p",null,"A bounty can be closed by using the extrinsics tab and selecting the Treasury pallet, then\n",(0,s.kt)("inlineCode",{parentName:"p"},"Award_bounty"),", making sure the right bounty is to be closed and finally sign the transaction. It is\nimportant to note that those who received a reward after the bounty is completed, must claim the\nspecific amount of the payout from the payout address, by calling ",(0,s.kt)("inlineCode",{parentName:"p"},"Claim_bounty")," after the curator\nclosed the allocation."),(0,s.kt)("p",null,"To understand more about Bounties and how this new mechanism works, read this\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.network/kusama-and-polkadot-now-reward-curators-helping-to-scale-councils-functions-join-the-force-moving-the-community-forward/"},"Polkadot Blog post"),"."),(0,s.kt)("h2",{id:"faq"},"FAQ"),(0,s.kt)("h3",{id:"what-prevents-the-treasury-from-being-captured-by-a-majority-of-the-council"},"What prevents the Treasury from being captured by a majority of the Council?"),(0,s.kt)("p",null,"The majority of the Council can decide the outcome of a treasury spend proposal. In an adversarial\nmindset, we may consider the possibility that the Council may at some point go rogue and attempt to\nsteal all of the treasury funds. It is a possibility that the treasury pot becomes so great, that a\nlarge financial incentive would present itself."),(0,s.kt)("p",null,"For one, the Treasury has deflationary pressure due to the burn that is suffered every spend period.\nThe burn aims to incentivize the complete spend of all treasury funds at every burn period, so\nideally the treasury pot doesn't have time to accumulate mass amounts of wealth. However, it is the\ncase that the burn on the Treasury could be so little that it does not matter - as is the case\ncurrently on Kusama with a 0.2% burn."),(0,s.kt)("p",null,"However, it is the case on Kusama that the Council is composed of mainly well-known members of the\ncommunity. Remember, the Council is voted in by the token holders, so they must do some campaigning\nor otherwise be recognized to earn votes. In the scenario of an attack, the Council members would\nlose their social credibility. Furthermore, members of the Council are usually externally motivated\nby the proper operation of the chain. This external motivation is either because they run businesses\nthat depend on the chain, or they have direct financial gain (through their holdings) of the token\nvalue remaining steady."),(0,s.kt)("p",null,"Concretely, there are a couple on-chain methods that resist this kind of attack. One, the Council\nmajority may not be the token majority of the chain. This means that the token majority could vote\nto replace the Council if they attempted this attack - or even reverse the treasury spend. They\nwould do this through a normal referendum. Two, there are time delays to treasury spends. They are\nonly enacted every spend period. This means that there will be some time to observe this attack is\ntaking place. The time delay then allows chain participants time to respond. The response may take\nthe form of governance measures or - in the most extreme cases a liquidation of their holdings and a\nmigration to a minority fork. However, the possibility of this scenario is quite low."),(0,s.kt)("h2",{id:"further-reading"},"Further Reading"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/treasury/src/lib.rs"},"Substrate's Treasury Pallet"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},(0,s.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate/master/pallet_treasury/index.html"},"Documentation of the Rust implementation of the Treasury")))))}f.isMDXComponent=!0},15432:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/motion-f2fc13da7c5579a8d07062ea229791f6.png"},40096:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/proposals-c4ac9aead89864b9bce490955fd7a92f.png"},26571:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/spend-period-8d84cceee03c4513c1b4a52864bab65b.png"},52737:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/submit-new-2b0f4754866f7a162e0089ec42a09340.png"},46601:()=>{}}]);