(self.webpackChunk=self.webpackChunk||[]).push([[4024],{47379:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var s=a(90675),o=a(10467),n=a(96540),r=a(69761),i=a(82285),l=a(11135);function p(e,t,a){return c.apply(this,arguments)}function c(){return(c=(0,o.A)((0,s.A)().mark((function e(t,a,o){var n,l,p,c,u;return(0,s.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return n="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return n="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return n="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return n="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return n="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return n="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==n){e.next=22;break}return e.abrupt("return");case 22:return p=new r.E(n),e.next=25,i.G.create({provider:p});case 25:c=e.sent,(u=a.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=c.toString(),e.abrupt("break",39);case 33:return e.next=35,c();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+u[0]+") in "+a);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,s){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,s);break;case"precise":(0,l.Precise)(e,a,s);break;case"blocksToDays":(0,l.BlocksToDays)(e,s);break;case"erasToDays":(0,l.ErasToDays)(e,s,a);break;case"percentage":(0,l.Percentage)(e,s);break;case"permillToPercent":(0,l.PermillToPercent)(e,s);break;case"arrayLength":(0,l.ArrayLength)(e,s);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,c=(0,n.useState)(""),d=c[0],h=c[1];return t=t.toLowerCase(),(0,n.useEffect)((function(){void 0!==l?u(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var n=function(){var e=(0,o.A)((0,s.A)().mark((function e(){var o;return(0,s.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{n()}catch(i){console.log(i)}}}),[]),d}},11135:e=>{var t="polkadot",a="kusama",s="statemine",o="statemint",n="polkadotpeople",r="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,p){var c=void 0;if(l===t||l===o||l==n)c=3;else{if(l!==a&&l!==s&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=6}e=parseFloat(e),p((e=Number.isInteger(e/i[l].precision)?e/i[l].precision+" "+i[l].symbol:(e/i[l].precision).toFixed(c)+" "+i[l].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,l){var p=void 0;if(l===t||l===o||l==n)p=1;else{if(l!==a&&l!==s&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=4}i((e/=p).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},83585:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var s=a(58168),o=a(98587),n=(a(96540),a(15680)),r=(a(47379),["components"]),i={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},l=void 0,p={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/docs/learn-teleport",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1704370283,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Teleport Assets between Parachains and Relay Chain.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Token Inflation",permalink:"/docs/learn-inflation"},next:{title:"Introduction to NFTs",permalink:"/docs/learn-nft"}},c={},u=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3}],d={toc:u},h="wrapper";function m(e){var t=e.components,i=(0,o.A)(e,r);return(0,n.yg)(h,(0,s.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"One of the main properties that Kusama\nbrings to the blockchain industry is secure interoperability. This interoperability allows for\n",(0,n.yg)("strong",{parentName:"p"},"asset teleportation"),", i.e., the process of moving assets (such as fungible and non-fungible\ntokens) between chains (parachains) to use them as any other asset native to that chain.\nInteroperability is possible through ",(0,n.yg)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," and ",(0,n.yg)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE modules"),", which\ntogether ensure that assets are not lost or duplicated across multiple chains."),(0,n.yg)("admonition",{title:"Walk-through video tutorial about teleporting assets",type:"info"},(0,n.yg)("p",{parentName:"admonition"},"See ",(0,n.yg)("a",{parentName:"p",href:"https://youtu.be/3tE9ouub5Tg"},"this technical explainer video")," to learn how to teleport assets\nfrom Kusama to the Asset Hub. The same procedure applies to teleporting between Polkadot and the\nPolkadot Asset Hub, or any other parachain.")),(0,n.yg)("h2",{id:"how-teleports-work"},"How Teleports work"),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"teleport",src:a(70883).A,width:"1397",height:"611"})),(0,n.yg)("p",null,"As you can see from the diagram above, there are only two actors within this model: the source and\nthe destination. How we transfer assets between the source and the destination is briefly summarized\nin the numbered labels on the diagram and explained in more detail below."),(0,n.yg)("h3",{id:"initiate-teleport"},"Initiate Teleport"),(0,n.yg)("p",null,"The source gathers the assets to be teleported from the sending account and ",(0,n.yg)("strong",{parentName:"p"},"takes them out")," from\nthe circulating supply, taking note of the total amount of assets that was taken out."),(0,n.yg)("h3",{id:"receive-teleported-assets"},"Receive Teleported Assets"),(0,n.yg)("p",null,"The source chain then creates an ",(0,n.yg)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," instruction called ",(0,n.yg)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets"),"\ncontaining the receiving account and the amount of assets taken out from circulation as parameters."),(0,n.yg)("p",null,"It then sends this instruction over to the destination chain, where it gets processed, and new\nassets are ",(0,n.yg)("strong",{parentName:"p"},"put back into")," the circulating supply."),(0,n.yg)("h3",{id:"deposit-asset"},"Deposit Asset"),(0,n.yg)("p",null,"The destination deposits the assets to the receiving account. The actions of ",(0,n.yg)("strong",{parentName:"p"},"taking out")," from the\ncirculating supply and ",(0,n.yg)("strong",{parentName:"p"},"putting back")," into the circulating supply show the great flexibility that\nan ",(0,n.yg)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," executor has in regulating the flow of an asset without changing its\ncirculating supply. Assets are transferred to an inaccessible account to remove them from\ncirculation. Likewise, for putting assets back into circulation, assets are released from a\npre-filled and inaccessible treasury, or perform a mint of the assets. This process requires mutual\ntrust between the source and destination. The destination must trust the source of having\nappropriately removed the sent assets from the circulating supply, and the source must trust the\ndestination of having put the received assets back into circulation. The result of an asset\nteleportation should result in the same circulating supply of the asset, and failing to uphold this\ncondition will result in a change in the asset's total issuance (in the case of fungible tokens) or\na complete loss/duplication of an NFT."))}m.isMDXComponent=!0},70883:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});const s=a.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"},47790:()=>{}}]);