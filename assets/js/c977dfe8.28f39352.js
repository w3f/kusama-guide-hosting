(self.webpackChunk=self.webpackChunk||[]).push([[1506],{47940:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var a=s(74165),o=s(15861),n=s(67294),r=s(33444),i=s(36078),l=s(67425);function p(e,t,s){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,a.Z)().mark((function e(t,s,o){var n,l,p,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return n="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return n="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return n="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return n="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==n){e.next=18;break}return e.abrupt("return");case 18:return p=new r.U(n),e.next=21,i.G.create({provider:p});case 21:c=e.sent,(u=s.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+s);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,s,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,s,a);break;case"precise":(0,l.Precise)(e,s,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,s=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,c=(0,n.useState)(""),d=c[0],h=c[1];return t=t.toLowerCase(),(0,n.useEffect)((function(){void 0!==l?u(r.toString(),l,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var n=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,s,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{n()}catch(i){console.log(i)}}}),[]),d}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,a){var o=void 0;if("polkadot"===s||"statemint"===s)o=3;else{if("kusama"!==s&&"statemine"!==s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[s].precision)?e/t[s].precision+" "+t[s].symbol:(e/t[s].precision).toFixed(o)+" "+t[s].symbol).toString())},Precise:function(e,s,a){a(e=(e=parseFloat(e))/t[s].precision+" "+t[s].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())}}},38948:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=s(87462),o=s(63366),n=(s(67294),s(3905)),r=(s(47940),["components"]),i={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},l=void 0,p={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/docs/learn-teleport",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663544579,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Statemine",permalink:"/docs/kusama-statemine"},next:{title:"Identity",permalink:"/docs/learn-identity"}},c={},u=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3},{value:"Teleporting Tokens using the Polkadot-JS UI",id:"teleporting-tokens-using-the-polkadot-js-ui",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],d={toc:u};function h(e){var t=e.components,i=(0,o.Z)(e,r);return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralized\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NFTs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-spree"},"SPREE\nmodules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,n.kt)("h2",{id:"how-teleports-work"},"How Teleports work"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"teleport",src:s(84532).Z,width:"1397",height:"611"})),(0,n.kt)("p",null,"As you can see from the diagram above, there are only 2 actors within this model: the source and the\ndestination. The way in which we transfer assets between the source and the destination are briefly\nsummarized in the numbered labels on the diagram, and are explained in more detail below:"),(0,n.kt)("h3",{id:"initiate-teleport"},"Initiate Teleport"),(0,n.kt)("p",null,"The source gathers the assets to be teleported from the sending account and ",(0,n.kt)("strong",{parentName:"p"},"takes them out")," from\nthe circulating supply, taking note of the total amount of assets that was taken out."),(0,n.kt)("h3",{id:"receive-teleported-assets"},"Receive Teleported Assets"),(0,n.kt)("p",null,"The source then creates an ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," instruction called ",(0,n.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets")," containing as\nparameters a) the receiving account and b) the amount of assets taken out from circulation. It then\nsends this instruction over to the destination, where it gets processed and new assets are ",(0,n.kt)("strong",{parentName:"p"},"put\nback into")," the circulating supply."),(0,n.kt)("h3",{id:"deposit-asset"},"Deposit Asset"),(0,n.kt)("p",null,"The destination deposits the assets to the receiving account. The actions of ",(0,n.kt)("strong",{parentName:"p"},"taking out")," from the\ncirculating supply and ",(0,n.kt)("strong",{parentName:"p"},"putting back")," into the circulating supply show the great flexibility that\nan ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," executor has in regulating the flow of an asset without changing its circulating supply.\nAssets are transferred to an inaccessible account in order to take them out from circulation.\nLikewise, for putting assets back into circulation, assets are released from a pre-filled and\ninaccessible treasury, or perform a mint of the assets. This process requires mutual trust between\nthe source and destination. The destination must trust the source of having appropriately removed\nthe sent assets from the circulating supply, and the source must trust the destination of having put\nthe received assets back into circulation. The result of an asset teleportation should result in the\nsame circulating supply of the asset, and failing to uphold this condition will result in a change\nin the asset's total issuance (in the case of fungible tokens) or a complete loss/duplication of an\nNFT."),(0,n.kt)("h2",{id:"teleporting-tokens-using-the-polkadot-js-ui"},"Teleporting Tokens using the Polkadot-JS UI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/PGyDpH2kad8"},"Video tutorial on Teleporting")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181119-how-to-teleport-dot-or-ksm-between-statemint-or-statemine"},"Additional support article"))),(0,n.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS UI"),", the source chain that you have selected\ndoes not support teleportation yet."))}h.isMDXComponent=!0},84532:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"},93971:()=>{},46601:()=>{}}]);