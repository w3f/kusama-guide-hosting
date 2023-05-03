(self.webpackChunk=self.webpackChunk||[]).push([[2117],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(74165),o=a(15861),s=a(67294),i=a(92519),r=a(9545),l=a(67425);function c(e,t,a){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var s,l,c,p,h;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){e.next=18;break}return e.abrupt("return");case 18:return c=new i.U(s),e.next=21,r.G.create({provider:c});case 21:p=e.sent,(h=a.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=h[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+h[0]+") in "+a);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"percentage":(0,l.Percentage)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,i=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,s.useState)(""),d=p[0],u=p[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?h(i.toString(),l,t,u):u(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,u);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(o,l,t,u):u(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(r){console.log(r)}}}),[]),d}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,a,n){var o=void 0;if("polkadot"===a||"statemint"===a)o=3;else{if("kusama"!==a&&"statemine"!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),n((e=Number.isInteger(e/t[a].precision)?e/t[a].precision+" "+t[a].symbol:(e/t[a].precision).toFixed(o)+" "+t[a].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/t[a].precision+" "+t[a].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},4381:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=a(47940),r=["components"],l={id:"learn-system-chains",title:"System Parachains",sidebar_label:"System Parachains",description:"Learn about System Parachains and ones currently on the network.",keywords:["common good","system","parachains","system level","public utility"],slug:"../learn-system-chains"},c=void 0,p={unversionedId:"learn/learn-system-chains",id:"learn/learn-system-chains",title:"System Parachains",description:"Learn about System Parachains and ones currently on the network.",source:"@site/../docs/learn/learn-system-chains.md",sourceDirName:"learn",slug:"/learn-system-chains",permalink:"/docs/learn-system-chains",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1676276943,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{id:"learn-system-chains",title:"System Parachains",sidebar_label:"System Parachains",description:"Learn about System Parachains and ones currently on the network.",keywords:["common good","system","parachains","system level","public utility"],slug:"../learn-system-chains"}},h={},d=[{value:"Overview",id:"overview",level:2},{value:"Existing System Chains",id:"existing-system-chains",level:2},{value:"Statemint",id:"statemint",level:3},{value:"Encointer",id:"encointer",level:3},{value:"Collectives",id:"collectives",level:3},{value:"Bridge Hubs",id:"bridge-hubs",level:3}],u={toc:d},m="wrapper";function k(e){var t=e.components,a=(0,o.Z)(e,r);return(0,s.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"System parachains are those that contain core Polkadot protocol features, but in parachains rather\nthan the Relay Chain. Rather than leasing an execution core by economic means (e.g., auction),\nexecution cores are allocated by network ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-governance"},"governance"),"."),(0,s.kt)("p",null,"By hosting core protocol logic in parachains instead of the Relay Chain, Polkadot uses its own\nscaling technology -- namely, parallel execution -- to host ",(0,s.kt)("em",{parentName:"p"},"itself"),". System parachains remove\ntransactions from the Relay Chain, allowing more Relay Chain\n",(0,s.kt)("a",{parentName:"p",href:"https://www.rob.tech/polkadot-blockspace-over-blockchains/"},"blockspace")," to be used for Polkadot's\nprimary purpose: validating parachains."),(0,s.kt)("p",null,"System parachains always defer to on-chain governance to manage their upgrades and other sensitive\nactions. That is, they do not have their own native tokens or governance systems separate from DOT\nKSM. In fact, there will likely be a system parachain specifically for network governance."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},'In the past, these were often called "Common Good Parachains", so you may come across articles and\ndiscussions using that term. As the network has evolved, that term has been confusing in many cases,\nso "System Parachains" is preferred now. A discussion on this evolution can be found in\n',(0,s.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-protocol-and-common-good-parachains/866"},"this forum thread"),".")),(0,s.kt)("h2",{id:"existing-system-chains"},"Existing System Chains"),(0,s.kt)("h3",{id:"statemint"},"Statemint"),(0,s.kt)("p",null,"","\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus#statemint-"},"Statemine")," and its cousin\nStatemint on\nPolkadot, are the first system parachains."),(0,s.kt)("p",null,"Statemine is an asset portal for the entire\nnetwork. It helps asset creators (e.g. reserve backed stablecoin issuers) to track the total\nissuance of their asset in the Kusama\nnetwork, including amounts that have been transferred to other parachains. It is also the point\nwhere they can transact, to mint and burn, to manage the on-chain asset."),(0,s.kt)("p",null,"Statemine also supports non-fungible assets\n(NFTs) via the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#uniques"},"Uniques pallet")," and the\nnew ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/extrinsics#nfts"},"nfts pallet"),". For more information\nabout NFTs see the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-nft-pallets"},"dedicated wiki page"),"."),(0,s.kt)("p",null,"This logic for asset management is not encoded in smart contracts, but rather directly in the\nruntime of the chain. Because of the efficiency of executing logic in a parachain, fees and deposits\nare about 1/10th of their respective value on the Relay Chain."),(0,s.kt)("p",null,"These low fee levels mean that Statemine is\nwell suited for handling KSM balances and\ntransfers as well as managing on-chain assets. For example, the existential deposit for\nKusama is\n","\n",(0,s.kt)(i.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:333333333,filter:"humanReadable",mdxType:"RPC"}),",\nwhile only\n","\n",(0,s.kt)(i.Z,{network:"statemine",path:"consts.balances.existentialDeposit",defaultValue:3333333,filter:"humanReadable",mdxType:"RPC"}),"\non Statemine."),(0,s.kt)("p",null,"See this\n",(0,s.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/statemint-update-roadmap/1200"},"November 2022 forum thread")," for\nupdates on Statemint's roadmap."),(0,s.kt)("h3",{id:"encointer"},"Encointer"),(0,s.kt)("p",null,"Encointer is a blockchain platform for self-sovereign ID and a global universal basic income. With\n",(0,s.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/referendum/158"},"referendum 158")," Encointer was registered as the\nsecond system parachain on Kusama's network. The functionality of Encointer adds logic to the Relay\nChain that aims to bring financial inclusivity to WEB3 and mitigate Sybil attacks with a novel Proof\nof Personhood (PoP) system for unique identity."),(0,s.kt)("p",null,"Encointer offers a framework that, in principle, allows for any group of real people to create,\ndistribute, and use their own digital community tokens.\n",(0,s.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/referendum/187"},"Referendum 187")," introduced a runtime upgrade\nbringing governance and full functionality for communities to be able to use the protocol."),(0,s.kt)("p",null,"Encointer aims to invert the\n",(0,s.kt)("a",{parentName:"p",href:"https://www.newworldencyclopedia.org/entry/Richard_Cantillon"},"Cantillon Effect"),", where money is\nissued at the bottom, and not as credit to businesses or creditworthy individuals. This way, every\nindividual gets a ",(0,s.kt)("a",{parentName:"p",href:"https://book.encointer.org/economics-ubi.html"},"universal basic income (UBI)"),"."),(0,s.kt)("p",null,"To resist Sybil attacks, the Encointer protocol uses a PoP mechanism to foster a unique identity\nsystem. The notion is that a person can only be present at one place at a given time. Participants\nare requested to attend physical key-signing ceremonies with small groups of random people at\nrandomized locations, where these local meetings are part of one global ceremony that co-occur.\nParticipants use the Encointer wallet app to participate in these ceremonies, and the wallet enables\nthe management of local community currencies. Watch an Encointer ceremony in action in\n",(0,s.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tcgpCCYBqko"},"this video"),"."),(0,s.kt)("p",null,"The protocol involves ",(0,s.kt)("a",{parentName:"p",href:"https://book.encointer.org/ssi.html#privacy-considerations"},"other mechanisms"),"\nto protect the privacy of users in addition to the physical key-signing ceremonies."),(0,s.kt)("p",null,"Encointer was accepted as a system chain based on its offer of a Sybil defense mechanism as a basis\nfor digital democracy. This can also be adapted by other chains, which can use the unique identity\nsystem to prevent Sybil attacks and use PoP for token airdrops or faucets."),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"To learn more about Encointer, check out the official\n",(0,s.kt)("a",{parentName:"p",href:"https://book.encointer.org/introduction.html"},"Encointer book"),".")),(0,s.kt)("h3",{id:"collectives"},"Collectives"),(0,s.kt)("p",null,"The Polkadot Collectives parachain was added in\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referendum/81"},"Referendum 81")," and exists only on Polkadot (i.e.,\nthere is no Kusama equivalent). The Collectives chain hosts on-chain collectives that serve the\nPolkadot network."),(0,s.kt)("p",null,"Some of these collectives are the\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referendum/94"},"Polkadot Alliance")," and the Polkadot Technical\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-opengov#fellowship"},"Fellowship"),". These on-chain collectives will play important roles in\nthe future of network stewardship and decentralized governance."),(0,s.kt)("p",null,"Networks themselves can act as collectives and express their legislative voices as single opinions\nwithin other networks. This is achieved with the assistance from a ",(0,s.kt)("a",{parentName:"p",href:"#bridge-hubs"},"bridge hub"),"."),(0,s.kt)("h3",{id:"bridge-hubs"},"Bridge Hubs"),(0,s.kt)("p",null,"Before Polkadot and Kusama supported their first parachains, the only way to design a bridge was to\nput the logic onto the Relay Chain itself. Since both networks now support parachains, it makes\nsense to have a parachain on each network dedicated to bridges. This is because of the execution\nisolation provided by parachains."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-bridges"},"Bridges page")," for information on the latest bridge projects. Currently, a\nBridge Hub parachain is in development that will be a portal for trust-minimized bridges to other\nnetworks."))}k.isMDXComponent=!0},46601:()=>{}}]);