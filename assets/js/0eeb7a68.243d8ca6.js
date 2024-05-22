"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1713],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>b});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function r(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)s=o[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):r(r({},t),e)),s},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(s),p=n,b=l["".concat(d,".").concat(p)]||l[p]||h[p]||o;return s?a.createElement(b,r(r({ref:t},c),{},{components:s})):a.createElement(b,r({ref:t},c))}));function b(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,r=new Array(o);r[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:n,r[1]=i;for(var u=2;u<o;u++)r[u]=s[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,s)}p.displayName="MDXCreateElement"},35703:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(67294);const n=function(e){var t,s=e.message,n=(0,a.useState)(!0),o=n[0],r=n[1];return a.createElement(a.Fragment,null,o&&a.createElement("div",{className:"message-box"},a.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),a.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=s,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},51846:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>h});var a=s(87462),n=s(63366),o=(s(67294),s(3905)),r=s(35703),i=["components"],d={id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},u=void 0,c={unversionedId:"learn/learn-guides-dot-ksm-bridge",id:"learn/learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",source:"@site/../docs/learn/learn-guides-DOT-KSM-bridge.md",sourceDirName:"learn",slug:"/learn-guides-dot-ksm-bridge",permalink:"/docs/learn-guides-dot-ksm-bridge",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1716295516,formattedLastUpdatedAt:"May 21, 2024",frontMatter:{id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},sidebar:"docs",previous:{title:"Bridge Hub Guides",permalink:"/docs/learn-guides-bridges"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},l={},h=[{value:"Transfer DOT to Kusama Asset Hub",id:"transfer-dot-to-kusama-asset-hub",level:2},{value:"Transfer DOT from Kusama Asset Hub to Polkadot Asset Hub",id:"transfer-dot-from-kusama-asset-hub-to-polkadot-asset-hub",level:2},{value:"Transfer KSM to Polkadot Asset Hub",id:"transfer-ksm-to-polkadot-asset-hub",level:2},{value:"Transfer KSM from Polkadot Asset Hub to Kusama Asset Hub",id:"transfer-ksm-from-polkadot-asset-hub-to-kusama-asset-hub",level:2},{value:"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub",id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub",level:2}],p={toc:h},b="wrapper";function f(e){var t=e.components,d=(0,n.Z)(e,i);return(0,o.kt)(b,(0,a.Z)({},p,d,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.kt)("p",null,"The fully functional Polkadot < > Kusama bridge facilitates secure asset transfers between the\nchains in both the ecosystems. The progress of Polkadot < > Kusama bridge implementation can be\ntracked ",(0,o.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/1"},"here"),"."),(0,o.kt)("h2",{id:"transfer-dot-to-kusama-asset-hub"},"Transfer DOT to Kusama Asset Hub"),(0,o.kt)("p",null,"This tutorial shows how to transfer DOT on Polkadot Asset Hub to Kusama Asset Hub. The first step is\nto ensure that your account on Polkadot Asset Hub has enough DOT to cover the XCM transfer fee and\nthe bridge fee (which is around 2 DOT). The next step is to craft an XCM message to be sent from\nPolkadot Asset Hub."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://xcmsend.com/#/builder"},"BagPipes (formerly called xcmsend)")," is an opensource application\nthat lets you create workflows in a drag and drop style interface in order to build execution flows\nof cross chain assets transfers using XCM. Check\n",(0,o.kt)("a",{parentName:"p",href:"https://xcmsend.github.io/workflows/dotksm.html"},"Bagpipes docs")," for more information on how to\ncreate workflows for crafting XCM transfers. The snapshot below shows a workflow on BagPipes that is\ndesigned to send 3 DOT from an account Polkadot Asset Hub to Kusama Asset Hub."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"BagPipes Snapshot DOT Transfer",src:s(531).Z,width:"2035",height:"962"})),(0,o.kt)("p",null,"This workflow crafts an XCM transfer as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "isSigned": false,\n  "method": {\n    "args": {\n      "dest": {\n        "V3": {\n          "parents": "2",\n          "interior": {\n            "X2": [\n              {\n                "GlobalConsensus": "Kusama"\n              },\n              {\n                "Parachain": "1,000"\n              }\n            ]\n          }\n        }\n      },\n      "beneficiary": {\n        "V3": {\n          "parents": "0",\n          "interior": {\n            "X1": {\n              "AccountId32": {\n                "network": null,\n                "id": "0x9e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818"\n              }\n            }\n          }\n        }\n      },\n      "assets": {\n        "V3": [\n          {\n            "id": {\n              "Concrete": {\n                "parents": "1",\n                "interior": "Here"\n              }\n            },\n            "fun": {\n              "Fungible": "30,000,000,000"\n            }\n          }\n        ]\n      },\n      "fee_asset_item": "0",\n      "weight_limit": "Unlimited"\n    },\n    "method": "limitedReserveTransferAssets",\n    "section": "polkadotXcm"\n  }\n}\n')),(0,o.kt)("p",null,"Once this ",(0,o.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6028374-2"},"extrinsic")," is signed and\nsubmitted, it is broadcast to Polkadot Asset Hub nodes. As this is a reserve asset transfer, the DOT\nis transferred to the destination's sovereign account on Polkadot Asset Hub and\n",(0,o.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6758392-0?event=6758392-1"},"DOT is issued")," as a foreign\nasset and deposited onto the destination account on Kusama Asset Hub. The foreign asset balances of\nany account on Kusama Asset Hub can be queried on-chain through the ",(0,o.kt)("inlineCode",{parentName:"p"},"foreignAssets"),"pallet as shown\nbelow."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOT Balance Kusama Asset Hub",src:s(72760).Z,width:"2820",height:"1874"})),(0,o.kt)("h2",{id:"transfer-dot-from-kusama-asset-hub-to-polkadot-asset-hub"},"Transfer DOT from Kusama Asset Hub to Polkadot Asset Hub"),(0,o.kt)("p",null,"This tutorial shows how to transfer DOT on Kusama Asset Hub to Polkadot Asset Hub. The first step is\nto ensure that your account on Kusama Asset Hub has enough KSM to cover the XCM transfer fee and the\nbridge fee (which is around 0.4 KSM). The next step is to craft an XCM message to be sent from\nKusama Asset Hub."),(0,o.kt)("p",null,"DOT which is registered as a foreign asset on Kusama Asset Hub can be transferred to Polkadot Asset\nHub through an extrinsic like the one below, whose call data is\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f0b040202090200a10f04000101009e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818040402010902000700e40b54020000000000"},(0,o.kt)("inlineCode",{parentName:"a"},"0x1f0b040202090200a10f04000101009e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818040402010902000700e40b54020000000000")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DOT transferred out from Kusama Asset Hub",src:s(56290).Z,width:"2834",height:"5018"})),(0,o.kt)("p",null,"For reference, this ",(0,o.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/7015118-2"},"extrinsic")," is signed\nand submitted successfully, and the destination account on Polkadot Asset Hub received DOT."),(0,o.kt)("h2",{id:"transfer-ksm-to-polkadot-asset-hub"},"Transfer KSM to Polkadot Asset Hub"),(0,o.kt)("p",null,"This tutorial shows how to transfer KSM on Kusama Asset Hub to Polkadot Asset Hub. The first step is\nto ensure that your account on Kusama Asset Hub has enough KSM to cover the XCM transfer fee and the\nbridge fee (which is around 0.4 KSM). The next step is to craft an XCM message to be sent from\nKusama Asset Hub."),(0,o.kt)("p",null,"The XCM transfer extrinsic shown below can be accessed\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f08030202090200a10f03000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33030400010000070088526a740000000000"},"here."),"\nIf you plan on reusing this extrinsic, ensure that you change the Account ID and the transfer amount\nhighlighted in the snapshot below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"PJS Snapshot KSM Transfer",src:s(27441).Z,width:"2858",height:"4398"})),(0,o.kt)("p",null,"Once this ",(0,o.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6761480-2"},"extrinsic")," is signed and\nsubmitted, it is broadcast to Kusama Asset Hub nodes. As this is a reserve asset transfer, the KSM\nis transferred to the sovereign account on Kusama Asset Hub and\n",(0,o.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6031467-0?event=6031467-6"},"KSM is issued")," as a\nforeign asset and deposited onto the destination account on Kusama Asset Hub. The foreign asset\nbalances of any account on Kusama Asset Hub can be queried on-chain through the\n",(0,o.kt)("inlineCode",{parentName:"p"},"foreignAssets"),"pallet as shown below."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"KSM Balance on Polkadot Asset Hub",src:s(53380).Z,width:"2854",height:"1960"})),(0,o.kt)("h2",{id:"transfer-ksm-from-polkadot-asset-hub-to-kusama-asset-hub"},"Transfer KSM from Polkadot Asset Hub to Kusama Asset Hub"),(0,o.kt)("p",null,"This tutorial shows how to transfer KSM on Polkadot Asset Hub to Kusama Asset Hub. The first step is\nto ensure that your account on Polkadot Asset Hub has enough DOT to cover the XCM transfer fee and\nthe bridge fee (which is around 2 DOT). The next step is to craft an XCM message to be sent from\nPolkadot Asset Hub."),(0,o.kt)("p",null,"KSM which is registered as a foreign asset on Polkadot Asset Hub can be transferred to Kusama Asset\nHub through an extrinsic like the one below, whose call data is\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f0b040202090300a10f04000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33040402010903000700a0db215d0000000000"},(0,o.kt)("inlineCode",{parentName:"a"},"0x1f0b040202090300a10f04000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33040402010903000700a0db215d0000000000"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"KSM transferred out from Polkadot Asset Hub",src:s(50831).Z,width:"2854",height:"4784"})),(0,o.kt)("p",null,"For reference, this ",(0,o.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6303823-2"},"extrinsic")," was signed\nand submitted successfully, and the destination account on Kusama Asset Hub received KSM."),(0,o.kt)("h2",{id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub"},"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub"),(0,o.kt)("p",null,"Transfer functionality of assets other than DOT and KSM between Asset Hubs is yet to be enabled.\nOnce this functionality is enabled, assets which are sufficient or non-sufficient on the Asset Hubs\ncan be bridged."),(0,o.kt)("admonition",{title:"Avoid Asset Traps",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To avoid issues on the receiving side for non-sufficient assets, make sure to call\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1531"},"pallet_assets::touch()"),"\nor\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1616"},"pallet_assets::touch_other()"),"\neffectively guaranteeing the ability to successfully receive and accept the bridged assets in your\naccount on the destination chain. This eliminates issues like your account on destination not\nexisting or not having enough ED or having reached the maximum limit of different assets it can\nhold. Without this sanity step, you risk that the bridged assets will make their way to the\ndestination chain but will not be accepted by your account, and instead get trapped in the Asset\nTrap on the destination chain.")),(0,o.kt)("p",null,"Once arbitrary asset transfers are enabled by the Asset Hubs, a guide will be posted to this Wiki\npage."))}f.isMDXComponent=!0},72760:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/KAH-DOT-Balance-f587755f88564c19d1578f162d9dd0ff.png"},56290:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/KAH-DOT-transfer-PAH-a6dd9187db4d6f449092d026c726a8c6.png"},27441:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/KAH-PAH-KSM-Transfer-PJS-Extrinsic-55c8a01313cec43f8119b6aca8904e23.png"},53380:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/PAH-KSM-Balance-ffa6f6093f73aa45b0c1bc7b6d0c78c7.png"},50831:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/PAH-KSM-Transfer-KAH-0d8843fc681b2cce6939cc6e607ff122.png"},531:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/PAH-to-KAH-DOT-transfer-b97431dce4c4cd85c5dc17007357fb9a.png"}}]);