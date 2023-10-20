(self.webpackChunk=self.webpackChunk||[]).push([[5483],{47940:(e,t,s)=>{"use strict";s.d(t,{Z:()=>p});var a=s(74165),n=s(15861),o=s(67294),r=s(87152),i=s(17145),u=s(67425);function l(e,t,s){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)((0,a.Z)().mark((function e(t,s,n){var o,u,l,c,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,u=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return l=new r.U(o),e.next=21,i.G.create({provider:l});case 21:c=e.sent,(d=s.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return u=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return u=(u=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+s);case 35:return e.abrupt("return",u);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,s,a){switch(t){case"humanReadable":(0,u.HumanReadable)(e,s,a);break;case"precise":(0,u.Precise)(e,s,a);break;case"blocksToDays":(0,u.BlocksToDays)(e,a);break;case"percentage":(0,u.Percentage)(e,a);break;case"permillToPercent":(0,u.PermillToPercent)(e,a);break;case"arrayLength":(0,u.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,s=e.path,r=e.defaultValue,i=e.filter,u=void 0===i?void 0:i,c=(0,o.useState)(""),p=c[0],h=c[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==u?d(r.toString(),u,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,s,h);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==u?d(n,u,t,h):h(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(i){console.log(i)}}}),[]),p}},67425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,a){var n=void 0;if("polkadot"===s||"statemint"===s)n=3;else{if("kusama"!==s&&"statemine"!==s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");n=6}e=parseFloat(e),a((e=Number.isInteger(e/t[s].precision)?e/t[s].precision+" "+t[s].symbol:(e/t[s].precision).toFixed(n)+" "+t[s].symbol).toString())},Precise:function(e,s,a){a(e=(e=parseFloat(e))/t[s].precision+" "+t[s].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},49736:(e,t,s)=>{"use strict";s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=s(87462),n=s(63366),o=(s(67294),s(3905)),r=s(47940),i=["components"],u={id:"learn-guides-assets-create",title:"Creating Assets with the Asset Hub",sidebar_label:"Creating Assets",description:"Advanced How-to Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint"],slug:"../learn-guides-assets-create"},l=void 0,c={unversionedId:"learn/learn-guides-assets-create",id:"learn/learn-guides-assets-create",title:"Creating Assets with the Asset Hub",description:"Advanced How-to Guides about Creating Assets.",source:"@site/../docs/learn/learn-guides-assets-create.md",sourceDirName:"learn",slug:"/learn-guides-assets-create",permalink:"/docs/learn-guides-assets-create",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1697176471,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"learn-guides-assets-create",title:"Creating Assets with the Asset Hub",sidebar_label:"Creating Assets",description:"Advanced How-to Guides about Creating Assets.",keywords:["asset hub","assets","statemine","statemint"],slug:"../learn-guides-assets-create"},sidebar:"docs",previous:{title:"Asset Hub",permalink:"/docs/learn-assets"},next:{title:"Teleporting Assets",permalink:"/docs/learn-teleport"}},d={},p=[{value:"Creating Assets on the Asset Hub",id:"creating-assets-on-the-asset-hub",level:2}],h={toc:p},k="wrapper";function b(e){var t=e.components,u=(0,n.Z)(e,i);return(0,o.kt)(k,(0,a.Z)({},h,u,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Asset Hub is a generic assets system parachain which provides functionality for deploying and\ntransferring assets \u2014 both Fungible and Non-Fungible Tokens (NFTs). The native token of the Asset\nhub is KSM. The Existential Deposit (ED),\ntransaction fees, and the deposits for proxy/multisig operations are about 1/10th of the values on\nthe Relay chains. For example, the Existential Deposit of an Asset Hub account is\n","\n",(0,o.kt)(r.Z,{network:"statemint",path:"consts.balances.existentialDeposit",defaultValue:1e9,filter:"humanReadable",mdxType:"RPC"}),",\nwhen compared to\n","\n",(0,o.kt)(r.Z,{network:"polkadot",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"})," on Kusama.\nApart from the core protocol token KSM, the\nassets held on the Asset Hub can be broadly categorized as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,o.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,o.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,o.kt)("p",null,"For additional background on the Asset Hub check out\n",(0,o.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181800-what-is-statemint-and-statemine-and-how-do-i-use-them-"},"this support article"),"."),(0,o.kt)("h2",{id:"creating-assets-on-the-asset-hub"},"Creating Assets on the Asset Hub"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Before minting assets on the Asset Hub, we recommend that you try out this tutorial on Westmint,\nwhich is a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),"."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"The images in the guides below are for Polkadot, but they also apply to Kusama."))),(0,o.kt)("p",null,"To create an asset on the Asset Hub, you would need a deposit of\n","\n",(0,o.kt)(r.Z,{network:"statemine",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\nand around\n","\n",(0,o.kt)(r.Z,{network:"statemine",path:"consts.assets.metadataDepositBase",defaultValue:20068e5,filter:"humanReadable",mdxType:"RPC"}),"\nfor the metadata. Before you create an asset on the Asset Hub, ensure that your Asset Hub account\nbalance is a bit more than the sum of those two deposits, which should seamlessly account for the\nrequired deposits and transaction fees. You can send\nKSM from a\nKusama account to a the Asset Hub account\nusing the teleport functionality. For instructions on teleporting\nKSM, check this\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,o.kt)("p",null,"Assuming you have the required KSM balance on\nyour Asset Hub account, the following instructions should let you successfully create an asset on\nthe Asset Hub"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Access the Asset Hub through ",(0,o.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),"."),(0,o.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Navigate to Assets page",src:s(85353).Z,width:"1710",height:"554"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on the Asset Hub, the asset's symbol, number of\ndecimals for the asset, the minimum balance required to hold this asset on an Asset Hub account\nand the most important field of your asset - the unique asset ID. The UI would not let you enter\nan ID that has already been taken. After all the details are entered, click on the next button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Asset Metadata",src:s(3910).Z,width:"1510",height:"798"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset managing accounts",src:s(25965).Z,width:"1518",height:"510"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sign and submit the transaction (If you like to verify the transaction details before signing, you\ncan click on the dropdown button pointed by the arrow in the snapshot below).")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sign asset creating transaction",src:s(39764).Z,width:"1520",height:"610"})),(0,o.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on the Asset Hub."))}b.isMDXComponent=!0},85353:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-0-71cbceb69c712729d7920b4575ab8f46.png"},3910:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},25965:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},39764:(e,t,s)=>{"use strict";s.d(t,{Z:()=>a});const a=s.p+"assets/images/hub-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},46601:()=>{}}]);