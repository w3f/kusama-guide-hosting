"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1713],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>b});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=u(s),h=n,b=l["".concat(d,".").concat(h)]||l[h]||p[h]||r;return s?a.createElement(b,o(o({ref:t},c),{},{components:s})):a.createElement(b,o({ref:t},c))}));function b(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,o=new Array(r);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[l]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=s[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}h.displayName="MDXCreateElement"},51846:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>b,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var a=s(87462),n=s(63366),r=(s(67294),s(3905)),o=["components"],i={id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},d=void 0,u={unversionedId:"learn/learn-guides-dot-ksm-bridge",id:"learn/learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",source:"@site/../docs/learn/learn-guides-DOT-KSM-bridge.md",sourceDirName:"learn",slug:"/learn-guides-dot-ksm-bridge",permalink:"/docs/learn-guides-dot-ksm-bridge",draft:!1,tags:[],version:"current",lastUpdatedBy:"Adrian Catangiu",lastUpdatedAt:1713278186,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},sidebar:"docs",previous:{title:"Bridge Hub Guides",permalink:"/docs/learn-guides-bridges"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},c={},l=[{value:"Transfer DOT to Kusama Asset Hub",id:"transfer-dot-to-kusama-asset-hub",level:2},{value:"Transfer KSM to Polkadot Asset Hub",id:"transfer-ksm-to-polkadot-asset-hub",level:2},{value:"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub",id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub",level:2}],p={toc:l},h="wrapper";function b(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)(h,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"sticky",style:{zIndex:1}},(0,r.kt)("br",null),(0,r.kt)("p",null,"These guides are for developers and power users only.")),(0,r.kt)("p",null,"The fully functional Polkadot < > Kusama bridge facilitates secure asset transfers between the\nchains in both the ecosystems. The progress of Polkadot < > Kusama bridge implementation can be\ntracked ",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/1"},"here"),"."),(0,r.kt)("h2",{id:"transfer-dot-to-kusama-asset-hub"},"Transfer DOT to Kusama Asset Hub"),(0,r.kt)("p",null,"This tutorial shows how to transfer DOT on Polkadot Asset Hub to Kusama Asset Hub. The first step is\nto ensure that your account on Polkadot Asset Hub has enough DOT to cover the XCM transfer fee and\nthe bridge fee (which is around 2 DOT). The next step is to craft an XCM message to be sent from\nPolkadot Asset Hub."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://xcmsend.com/#/builder"},"BagPipes (formerly called xcmsend)")," is an opensource application\nthat lets you create workflows in a drag and drop style interface in order to build execution flows\nof cross chain assets transfers using XCM. Check\n",(0,r.kt)("a",{parentName:"p",href:"https://xcmsend.github.io/workflows/dotksm.html"},"Bagpipes docs")," for more information on how to\ncreate workflows for crafting XCM transfers. The snapshot below shows a workflow on BagPipes that is\ndesigned to send 3 DOT from an account Polkadot Asset Hub to Kusama Asset Hub."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BagPipes Snapshot DOT Transfer",src:s(531).Z,width:"2035",height:"962"})),(0,r.kt)("p",null,"This workflow crafts an XCM transfer as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "isSigned": false,\n  "method": {\n    "args": {\n      "dest": {\n        "V3": {\n          "parents": "2",\n          "interior": {\n            "X2": [\n              {\n                "GlobalConsensus": "Kusama"\n              },\n              {\n                "Parachain": "1,000"\n              }\n            ]\n          }\n        }\n      },\n      "beneficiary": {\n        "V3": {\n          "parents": "0",\n          "interior": {\n            "X1": {\n              "AccountId32": {\n                "network": null,\n                "id": "0x9e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818"\n              }\n            }\n          }\n        }\n      },\n      "assets": {\n        "V3": [\n          {\n            "id": {\n              "Concrete": {\n                "parents": "1",\n                "interior": "Here"\n              }\n            },\n            "fun": {\n              "Fungible": "30,000,000,000"\n            }\n          }\n        ]\n      },\n      "fee_asset_item": "0",\n      "weight_limit": "Unlimited"\n    },\n    "method": "limitedReserveTransferAssets",\n    "section": "polkadotXcm"\n  }\n}\n')),(0,r.kt)("p",null,"Once this ",(0,r.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6028374-2"},"extrinsic")," is signed and\nsubmitted, it is broadcast to Polkadot Asset Hub nodes. As this is a reserve asset transfer, the DOT\nis transferred to the destination's sovereign account on Polkadot Asset Hub and\n",(0,r.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6758392-0?event=6758392-1"},"the wrapped DOT is issued"),"\nas a foreign asset and deposited onto the destination account on Kusama Asset Hub. The foreign asset\nbalances of any account on Kusama Asset Hub can be queried on-chain through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"foreignAssets"),"pallet as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wrapped DOT Balance",src:s(72760).Z,width:"2820",height:"1874"})),(0,r.kt)("h2",{id:"transfer-ksm-to-polkadot-asset-hub"},"Transfer KSM to Polkadot Asset Hub"),(0,r.kt)("p",null,"This tutorial shows how to transfer KSM on Kusama Asset Hub to Polkadot Asset Hub. The first step is\nto ensure that your account on Kusama Asset Hub has enough KSM to cover the XCM transfer fee and the\nbridge fee (which is around 0.4 KSM). The next step is to craft an XCM message to be sent from\nKusama Asset Hub."),(0,r.kt)("p",null,"The XCM transfer extrinsic shown below can be accessed\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f08030202090200a10f03000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33030400010000070088526a740000000000"},"here."),"\nIf you plan on reusing this extrinsic, ensure that you change the Account ID and the transfer amount\nhighlighted in the snapshot below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PJS Snapshot KSM Transfer",src:s(27441).Z,width:"2858",height:"4398"})),(0,r.kt)("p",null,"Once this ",(0,r.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6761480-2"},"extrinsic")," is signed and\nsubmitted, it is broadcast to Kusama Asset Hub nodes. As this is a reserve asset transfer, the KSM\nis transferred to the sovereign account on Kusama Asset Hub and\n",(0,r.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6031467-0?event=6031467-6"},"the wrapped KSM is issued"),"\nas a foreign asset and deposited onto the destination account on Kusama Asset Hub. The foreign asset\nbalances of any account on Kusama Asset Hub can be queried on-chain through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"foreignAssets"),"pallet as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wrapped KSM Balance",src:s(53380).Z,width:"2854",height:"1960"})),(0,r.kt)("h2",{id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub"},"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub"),(0,r.kt)("p",null,"Transfer functionality of assets other than DOT and KSM between Asset Hubs is yet to be enabled. Once this\nfunctionality is enabled, assets which are sufficient or non-sufficient on the Asset Hubs can be bridged. "),(0,r.kt)("admonition",{title:"Avoid Asset Traps",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid issues on the receiving side for non-sufficient assets, make sure to call\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1531"},"pallet_assets::touch()")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1616"},"pallet_assets::touch_other()"),"\neffectively guaranteeing the ability to successfully receive and accept the bridged assets in your\naccount on the destination chain.\nThis eliminates issues like your account on destination not existing or not having enough ED or having\nreached the maximum limit of different assets it can hold.\nWithout this sanity step, you risk that the bridged assets will make their way to the destination chain\nbut will not be accepted by your account, and instead get trapped in the Asset Trap on the destination chain.")),(0,r.kt)("p",null,"Once arbitrary asset transfers are enabled by the Asset Hubs, a guide will be posted to this Wiki page."))}b.isMDXComponent=!0},72760:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/KAH-DOT-Balance-f587755f88564c19d1578f162d9dd0ff.png"},27441:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/KAH-PAH-KSM-Transfer-PJS-Extrinsic-55c8a01313cec43f8119b6aca8904e23.png"},53380:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/PAH-KSM-Balance-ffa6f6093f73aa45b0c1bc7b6d0c78c7.png"},531:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/PAH-to-KAH-DOT-transfer-b97431dce4c4cd85c5dc17007357fb9a.png"}}]);