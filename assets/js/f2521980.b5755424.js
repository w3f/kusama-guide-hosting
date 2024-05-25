(self.webpackChunk=self.webpackChunk||[]).push([[6689],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>k});var o=a(74165),n=a(15861),r=a(67294),i=a(87152),s=a(9712),l=a(67425);function d(t,e,a){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,o.Z)().mark((function t(e,a,n){var r,l,d,p,c;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){t.next=18;break}return t.abrupt("return");case 18:return d=new i.U(r),t.next=21,s.G.create({provider:d});case 21:p=t.sent,(c=a.split(".")).forEach((function(t){t in p&&(p=p[t])})),t.t1=c[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=p.toString(),t.abrupt("break",35);case 29:return t.next=31,p();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t,e,a,o){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,o);break;case"precise":(0,l.Precise)(t,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(t,o);break;case"erasToDays":(0,l.ErasToDays)(t,o,a);break;case"percentage":(0,l.Percentage)(t,o);break;case"permillToPercent":(0,l.PermillToPercent)(t,o);break;case"arrayLength":(0,l.ArrayLength)(t,o);break;default:return void console.log("Ignoring unknown filter type")}}const k=function(t){var e=t.network,a=t.path,i=t.defaultValue,s=t.filter,l=void 0===s?void 0:s,p=(0,r.useState)(""),k=p[0],u=p[1];return e=e.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?c(i.toString(),l,e,u):u(i.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":t="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":t="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var t=(0,n.Z)((0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,a,u);case 2:if(void 0!==(n=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?c(n,l,e,u):u(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),k}},67425:t=>{var e="polkadot",a="kusama",o="statemine",n="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,i,s){var l=void 0;if(i===e||i===n)l=3;else{if(i!==a&&i!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}t=parseFloat(t),s((t=Number.isInteger(t/r[i].precision)?t/r[i].precision+" "+r[i].symbol:(t/r[i].precision).toFixed(l)+" "+r[i].symbol).toString())},Precise:function(t,e,a){a(t=(t=parseFloat(t))/r[e].precision+" "+r[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,r,i){var s=void 0;if(i===e||i===n)s=1;else{if(i!==a&&i!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}r((t/=s).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},24595:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),i=(a(47940),["components"]),s={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"Get started with Polkadot and Web3.",keywords:["introduction","getting started","what is polkadot","why polkadot"],slug:"../getting-started"},l=void 0,d={unversionedId:"general/getting-started",id:"general/getting-started",title:"Getting Started",description:"Get started with Polkadot and Web3.",source:"@site/../docs/general/getting-started.md",sourceDirName:"general",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715101173,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started",description:"Get started with Polkadot and Web3.",keywords:["introduction","getting started","what is polkadot","why polkadot"],slug:"../getting-started"}},p={},c=[{value:"Interact with Polkadot",id:"interact-with-polkadot",level:2},{value:"What is Polkadot?",id:"what-is-polkadot",level:2},{value:"What can I do with my DOT?",id:"what-can-i-do-with-my-dot",level:2},{value:"Polkadot Gifts",id:"polkadot-gifts",level:2},{value:"Why should you use Polkadot?",id:"why-should-you-use-polkadot",level:2},{value:"Where to start learning?",id:"where-to-start-learning",level:2},{value:"Brand-New Polkadot learners",id:"brand-new-polkadot-learners",level:3},{value:"Resources",id:"resources",level:2}],k={toc:c},u="wrapper";function h(t){var e=t.components,a=(0,n.Z)(t,i);return(0,r.kt)(u,(0,o.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Welcome to the Polkadot Wiki",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Polkadot Wiki serves as the central source of truth for Polkadot. It is a community-focused\ninitiative led by Web3 Foundation to keep an up-to-date resource on the best information for\nlearning, building, and maintaining on Polkadot."),(0,r.kt)("p",{parentName:"admonition"},"The Wiki has three main sections:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./learn-index"},(0,r.kt)("strong",{parentName:"a"},"Learn"))," (for people who want to learn about Polkadot)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/build-index"},(0,r.kt)("strong",{parentName:"a"},"Build"))," (for people who want to build on Polkadot)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/maintain-index"},(0,r.kt)("strong",{parentName:"a"},"Maintain"))," (for people who want to maintain the Polkadot\nnetwork)."))),(0,r.kt)("h2",{id:"interact-with-polkadot"},"Interact with Polkadot"),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"100"},(0,r.kt)("a",{href:"../docs/learn-accounts"},(0,r.kt)("img",{src:"/img/polkadot-guide/Creating an account.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-accounts"},"Accounts"))),(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"200"},(0,r.kt)("a",{href:"../docs/learn-transactions"},(0,r.kt)("img",{src:"/img/polkadot-guide/Balance Transfers.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-transactions"},"Transactions"))),(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"300"},(0,r.kt)("a",{href:"../docs/learn-staking"},(0,r.kt)("img",{src:"/img/polkadot-guide/Staking.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-staking"},"Staking")))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"400"},(0,r.kt)("a",{href:"../docs/learn-polkadot-opengov"},(0,r.kt)("img",{src:"/img/polkadot-guide/Polkadot OpenGov.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-polkadot-opengov"},"Polkadot OpenGov"))),(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"500"},(0,r.kt)("a",{href:"../docs/learn-proxies"},(0,r.kt)("img",{src:"/img/polkadot-guide/Proxy Accounts.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-proxies"},"Proxy Accounts"))),(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"600"},(0,r.kt)("a",{href:"../docs/learn-identity"},(0,r.kt)("img",{src:"/img/polkadot-guide/Set an Identity.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-identity"},"Account Identity")))),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"700"},(0,r.kt)("a",{href:"../docs/learn-parachains"},(0,r.kt)("img",{src:"/img/polkadot-guide/Parachains.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-parachains"},"Parachains"))),(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"900"},(0,r.kt)("a",{href:"../docs/learn-bridges"},(0,r.kt)("img",{src:"/img/polkadot-guide/Bridges.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/learn-bridges"},"Bridges"))),(0,r.kt)("div",{className:"col text--center","data-aos":"fade-up","data-aos-delay":"900"},(0,r.kt)("a",{href:"../docs/ambassadors"},(0,r.kt)("img",{src:"/img/polkadot-guide/Become an Ambassador.png",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"../docs/ambassadors"},"Become an Ambassador")))),(0,r.kt)("h2",{id:"what-is-polkadot"},"What is Polkadot?"),(0,r.kt)("p",null,"Polkadot is the first layer-0 (L0) blockchain that provides shared security and secure\ninteroperability to layer-1 (L1) blockchains. Those L1 blockchain attached to Polkadot are also\ncalled ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains"},"parachains")," as their transactions are processed in parallel by\nPolkadot. For more information about Polkadot see the dedicated page about the state of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadot-v1"},"Polkadot 1.0")," released in mid 2023."),(0,r.kt)("p",null,"Polkadot has an on-chain ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"open governance")," (also called Polkadot\nOpenGov) to orchestrate decisions, including accessing funds from the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"treasury"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT token")," gives you the power to participate in Polkadot OpenGov,\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking"),", and ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"parachains' crowdloans"),"."),(0,r.kt)("p",null,"The level of abstraction and generalization of Polkadot allows to build applications that are\nspecific to their use cases, and for those applications to communicate securely leveraging each\nother value proposition. The trustless cooperation between applications is what makes Polkadot an\nideal ecosystem to build a ",(0,r.kt)("a",{parentName:"p",href:"/docs/web3-and-polkadot"},"web3 future"),"."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=_-k0xkooSlA"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/_-k0xkooSlA/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=_-k0xkooSlA"},"Polkadot: Are You Ready to Start Building?"))),(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=BQ60bTU1bPg"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/BQ60bTU1bPg/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=BQ60bTU1bPg"},"What is Polkadot?")))),(0,r.kt)("h2",{id:"what-can-i-do-with-my-dot"},"What can I do with my DOT?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT")," is the native token of the Polkadot Network. DOT can be used for\ntransaction fees, staking, governance, acquisition of a parachain slot and for enabling several key\nfunctionalities on Polkadot."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Explore Polkadot with a secure and user-friendly wallets listed on the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.polkadot.network/ecosystem/wallets/"},"Polkadot website"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"","\nthe minimum balance required to have an active account on Polkadot Network. If your account\nbalance drops below the minimum, your account will be reaped. Learn more about\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts"},"Accounts")," and the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit")," requirement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"","\nthe minimum contribution required to join a ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),"\nand earn staking rewards for contributing to the security of the network. Learn more about\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"","\nthe minimum contribution required to participate in ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-crowdloans"},"crowdloans")," for\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain slot auctions"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Around 20 DOT"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"","\nregister an ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-identity"},"on-chain identity")),(0,r.kt)("li",{parentName:"ul"},"","\ncreate a ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-proxies"},"proxy account"),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"","\nthe minimum stake required to submit your intent to directly nominate validators.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"","\nthe minimum amount of DOT required to become an active nominator and earn rewards, i.e. the\nminimum active bond. To increase the chance of earning staking rewards, your stake should not be\nless than the minimum stake among the active nominators, which is a dynamic threshold. If you have\nlesser DOT than the minimum active nomination, please consider contributing to\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pools"),". Learn more about\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nominator"},"becoming a nominator"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"","\nyou can create your own ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),"."))),(0,r.kt)("p",null,"DOT has utility in ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Polkadot's OpenGov"),". Bonding DOT is a\nrequirement to create proposals, to endorse them and to vote on them when they become referendums.\nBonding\n","\nor 5% of requested funding is a requirement to make a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury"},"treasury proposal"),". DOT can also enable you to\nparticipate in programs like the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/thousand-validators#polkadot"},"Thousand Validators Programme"),"."),(0,r.kt)("h2",{id:"polkadot-gifts"},"Polkadot Gifts"),(0,r.kt)("img",{align:"right",src:"/img/polkadot-guide/Gift.png",width:"210",height:"200"}),(0,r.kt)("p",null,"Polkadot Gifts provide an easy way to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Onboard friends or family who are curious about blockchain but haven\u2019t made the leap yet."),(0,r.kt)("li",{parentName:"ul"},"Share your love of Polkadot and send any amount of DOT."),(0,r.kt)("li",{parentName:"ul"},"Say \u2018thank you\u2019 or send someone tokens when you don\u2019t know their address."),(0,r.kt)("li",{parentName:"ul"},"Get friends and family set up to participate in crowdloans.")),(0,r.kt)("p",null,"Learn more about how you can create and send Polkadot Gifts\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/blog/introducing-polkadot-kusama-gifts/"},"here"),"."),(0,r.kt)("h2",{id:"why-should-you-use-polkadot"},"Why should you use Polkadot?"),(0,r.kt)("p",null,"Whether you're a blockchain developer or if you're interested in taking part of\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/polkadot-ambassador-program/"},"Polkadot's community"),", Polkadot offers a\nplatform for everyone. This wiki offers a place for builders and maintainers to utilize\n",(0,r.kt)("a",{parentName:"p",href:"/docs/build-tools-index"},"tools")," and for brand-new learners to dive into educational material."),(0,r.kt)("h2",{id:"where-to-start-learning"},"Where to start learning?"),(0,r.kt)("p",null,"The\n",(0,r.kt)("a",{parentName:"p",href:"https://mooc.web3.foundation/course/blockchain-fundamentals/"},"Blockchain Fundamentals MOOC course"),"\nis a great introduction to start familiarizing yourself with blockchain concepts such as\ncryptography and networks, and how these play into things like decentralization and cryptocurrency."),(0,r.kt)("p",null,"This is recommended for users with backgrounds of all levels, and the course is free!"),(0,r.kt)("h3",{id:"brand-new-polkadot-learners"},"Brand-New Polkadot learners"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/PolkaDotPaper.pdf"},"Polkadot's original white paper")," is a technical\nsummary around one possible direction of implementing the Polkadot network. This paper uses\nrationale and technical details to support why this direction is beneficial. This original white\npaper also explains how Polkadot's core components work together to build this decentralized\nnetwork."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/research/blob/master/docs/papers/OverviewPaper-V1.pdf"},"Polkadot's overview paper"),"\nis an updated version of the white paper that describes the protocol in more technical terms. We\nwould recommend reading this overview paper if you are interested in digging more into the\nprotocol itself."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/Polkadot-lightpaper.pdf"},"Polkadot's light paper")," is a visual, easy to\nread, and less technical introduction into its blockchain technology. This paper dives into the\ncomponents of Polkadot but is understandable for both a non-technical and technical reader."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://linktr.ee/polkadotbook"},"Polkadot for Beginners: A non-technical guide to decentralization, blockchains & Polkadot")," -\na book funded by the Polkadot Treasury"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/polkadot-spec"},"Polkadot's specification")," is a GitHub repository that holds\nthe latest Polkadot Host protocol specification, Polkadot's specification tests of the many\ncomponents of the network, and the Polkadot Runtime specification. This repo holds algorithms and\nexplores how various processes function in the Polkadot network. The Polkadot specification takes\nPolkadot's ideas and concepts from the light and the white paper but focuses on the technical\nspecs of the technology."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=mNStMPZjiHM&list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8"},"Watching the Technical Explainer Videos"),":\nThese are great introductory videos that explain and demonstrate how to use Polkadot and its\n",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/"},"User Interface"),"."),(0,r.kt)("li",{parentName:"ul"},"Reading\n",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/what-is-polkadot-a-brief-introduction-ca3eac9ddca5"},"What is Polkadot? A Brief Introduction"),"\non Medium. There are also other great articles to read on\n",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network"},"Polkadot's Medium")," or\n",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation"},"Web3 Foundation's Medium"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.study/"},"Polkadot Study")," is a platform where developers can write tutorials for\nthe Polkadot ecosystem. Part of the development of the platform was funded by the\n",(0,r.kt)("a",{parentName:"li",href:"https://kusama.subsquare.io/referenda/102"},"Kusama treasury"),". The platform also hosts\n",(0,r.kt)("a",{parentName:"li",href:"https://polkadot.study/tutorials/substrate-in-bits/"},"Substrate in Bits"),", a technical content\nseries aimed at solving the pain points of developers building with\n",(0,r.kt)("a",{parentName:"li",href:"https://substrate.io/"},"Substrate")," and ",(0,r.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust"),".")),(0,r.kt)("p",null,"For brand-new learners of Kusama, Polkadot's canary cousin network: To learn more about how to build\nand maintain on the Kusama network, please head over to our\n",(0,r.kt)("a",{parentName:"p",href:"https://guide.kusama.network/"},"Kusama Guide"),"."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.crowdcast.io/polkadot"},"Polkadot Crowdcast")," - List of all Crowdcast webinars that the\nWeb3 Foundation has done."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot Explorer")," - Browser for the Polkadot network;\ncan be used for Polkadot, Kusama, or any Substrate-based chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://subscan.io"},"Subscan.io")," - Explorer for Substrate based chains."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://youtu.be/lIghiCmHz0U"},"Polkadot Overview")," - Dr. Gavin Wood presents an overview of\nPolkadot. (Video)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://techcrunch.com/video/fireside-chat-with-jutta-steiner-parity-technologies/"},"Polkadot Overview")," -\nDr. Jutta Steiner presents Polkadot. (Video)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=0IoUZdDi5Is&feature=youtu.be"},"Polkadot & Substrate Overview")," -\nDr. Gavin Wood presents Substrate (blockchain in-a-box + VM) and Polkadot, and builds a blockchain\non-stage in 30 minutes using Substrate. (Video)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/community"},"Community / Ecosystem")," - List of community rooms and channels to talk to others\nabout Polkadot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#"},"Sample Applications")," - Sample applications that are built on or currently being built for\nPolkadot."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/contributing"},"Contributing Guide")," - Rules for contributing to the wiki."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/"},"Polkadot Knowledge Base")," - Troubleshooting resources for\nspecific errors and problems.")))}h.isMDXComponent=!0},46601:()=>{}}]);