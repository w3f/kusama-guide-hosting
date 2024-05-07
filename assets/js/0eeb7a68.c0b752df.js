"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1713],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>b});var s=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,s,n=function(e,t){if(null==e)return{};var a,s,n={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=s.createContext({}),u=function(e){var t=s.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=u(e.components);return s.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(a),h=n,b=c["".concat(d,".").concat(h)]||c[h]||p[h]||r;return a?s.createElement(b,o(o({ref:t},l),{},{components:a})):s.createElement(b,o({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:n,o[1]=i;for(var u=2;u<r;u++)o[u]=a[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,a)}h.displayName="MDXCreateElement"},35703:(e,t,a)=>{a.d(t,{Z:()=>n});var s=a(67294);const n=function(e){var t,a=e.message,n=(0,s.useState)(!0),r=n[0],o=n[1];return s.createElement(s.Fragment,null,r&&s.createElement("div",{className:"message-box"},s.createElement("button",{className:"close-button",onClick:function(){o(!1)}},"\u2716 "),s.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},51846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var s=a(87462),n=a(63366),r=(a(67294),a(3905)),o=a(35703),i=["components"],d={id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},u=void 0,l={unversionedId:"learn/learn-guides-dot-ksm-bridge",id:"learn/learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",source:"@site/../docs/learn/learn-guides-DOT-KSM-bridge.md",sourceDirName:"learn",slug:"/learn-guides-dot-ksm-bridge",permalink:"/docs/learn-guides-dot-ksm-bridge",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1714978178,formattedLastUpdatedAt:"May 6, 2024",frontMatter:{id:"learn-guides-dot-ksm-bridge",title:"Polkadot and Kusama Bridge Guides",sidebar_label:"DOT <> KSM Bridge",description:"Polkadot-JS Guides about Polkadot and Kusama Bridge.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-dot-ksm-bridge"},sidebar:"docs",previous:{title:"Bridge Hub Guides",permalink:"/docs/learn-guides-bridges"},next:{title:"Architecture",permalink:"/docs/learn-architecture"}},c={},p=[{value:"Transfer DOT to Kusama Asset Hub",id:"transfer-dot-to-kusama-asset-hub",level:2},{value:"Transfer KSM to Polkadot Asset Hub",id:"transfer-ksm-to-polkadot-asset-hub",level:2},{value:"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub",id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub",level:2}],h={toc:p},b="wrapper";function f(e){var t=e.components,d=(0,n.Z)(e,i);return(0,r.kt)(b,(0,s.Z)({},h,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.kt)("p",null,"The fully functional Polkadot < > Kusama bridge facilitates secure asset transfers between the\nchains in both the ecosystems. The progress of Polkadot < > Kusama bridge implementation can be\ntracked ",(0,r.kt)("a",{parentName:"p",href:"https://forum.polkadot.network/t/polkadot-kusama-bridge/2971/1"},"here"),"."),(0,r.kt)("admonition",{title:"Polkadot < > Kusama Bridge is stuck.",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Do not send DOT and KSM tokens through the bridge until Polkadot OpenGov\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referenda/694"},"Referendum 694")," is enacted.")),(0,r.kt)("h2",{id:"transfer-dot-to-kusama-asset-hub"},"Transfer DOT to Kusama Asset Hub"),(0,r.kt)("p",null,"This tutorial shows how to transfer DOT on Polkadot Asset Hub to Kusama Asset Hub. The first step is\nto ensure that your account on Polkadot Asset Hub has enough DOT to cover the XCM transfer fee and\nthe bridge fee (which is around 2 DOT). The next step is to craft an XCM message to be sent from\nPolkadot Asset Hub."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://xcmsend.com/#/builder"},"BagPipes (formerly called xcmsend)")," is an opensource application\nthat lets you create workflows in a drag and drop style interface in order to build execution flows\nof cross chain assets transfers using XCM. Check\n",(0,r.kt)("a",{parentName:"p",href:"https://xcmsend.github.io/workflows/dotksm.html"},"Bagpipes docs")," for more information on how to\ncreate workflows for crafting XCM transfers. The snapshot below shows a workflow on BagPipes that is\ndesigned to send 3 DOT from an account Polkadot Asset Hub to Kusama Asset Hub."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"BagPipes Snapshot DOT Transfer",src:a(531).Z,width:"2035",height:"962"})),(0,r.kt)("p",null,"This workflow crafts an XCM transfer as shown below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "isSigned": false,\n  "method": {\n    "args": {\n      "dest": {\n        "V3": {\n          "parents": "2",\n          "interior": {\n            "X2": [\n              {\n                "GlobalConsensus": "Kusama"\n              },\n              {\n                "Parachain": "1,000"\n              }\n            ]\n          }\n        }\n      },\n      "beneficiary": {\n        "V3": {\n          "parents": "0",\n          "interior": {\n            "X1": {\n              "AccountId32": {\n                "network": null,\n                "id": "0x9e4e7009937c56d267338762a60ed004293afd40e7c2081847c12cb63c76a818"\n              }\n            }\n          }\n        }\n      },\n      "assets": {\n        "V3": [\n          {\n            "id": {\n              "Concrete": {\n                "parents": "1",\n                "interior": "Here"\n              }\n            },\n            "fun": {\n              "Fungible": "30,000,000,000"\n            }\n          }\n        ]\n      },\n      "fee_asset_item": "0",\n      "weight_limit": "Unlimited"\n    },\n    "method": "limitedReserveTransferAssets",\n    "section": "polkadotXcm"\n  }\n}\n')),(0,r.kt)("p",null,"Once this ",(0,r.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6028374-2"},"extrinsic")," is signed and\nsubmitted, it is broadcast to Polkadot Asset Hub nodes. As this is a reserve asset transfer, the DOT\nis transferred to the destination's sovereign account on Polkadot Asset Hub and\n",(0,r.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6758392-0?event=6758392-1"},"the wrapped DOT is issued"),"\nas a foreign asset and deposited onto the destination account on Kusama Asset Hub. The foreign asset\nbalances of any account on Kusama Asset Hub can be queried on-chain through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"foreignAssets"),"pallet as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wrapped DOT Balance",src:a(72760).Z,width:"2820",height:"1874"})),(0,r.kt)("h2",{id:"transfer-ksm-to-polkadot-asset-hub"},"Transfer KSM to Polkadot Asset Hub"),(0,r.kt)("p",null,"This tutorial shows how to transfer KSM on Kusama Asset Hub to Polkadot Asset Hub. The first step is\nto ensure that your account on Kusama Asset Hub has enough KSM to cover the XCM transfer fee and the\nbridge fee (which is around 0.4 KSM). The next step is to craft an XCM message to be sent from\nKusama Asset Hub."),(0,r.kt)("p",null,"The XCM transfer extrinsic shown below can be accessed\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-asset-hub-rpc.polkadot.io#/extrinsics/decode/0x1f08030202090200a10f03000101008479c8ea5480acca5a847133cd97a87801b6e698a98f2eab0e8e9d5c51b14a33030400010000070088526a740000000000"},"here."),"\nIf you plan on reusing this extrinsic, ensure that you change the Account ID and the transfer amount\nhighlighted in the snapshot below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"PJS Snapshot KSM Transfer",src:a(27441).Z,width:"2858",height:"4398"})),(0,r.kt)("p",null,"Once this ",(0,r.kt)("a",{parentName:"p",href:"https://assethub-kusama.subscan.io/extrinsic/6761480-2"},"extrinsic")," is signed and\nsubmitted, it is broadcast to Kusama Asset Hub nodes. As this is a reserve asset transfer, the KSM\nis transferred to the sovereign account on Kusama Asset Hub and\n",(0,r.kt)("a",{parentName:"p",href:"https://assethub-polkadot.subscan.io/extrinsic/6031467-0?event=6031467-6"},"the wrapped KSM is issued"),"\nas a foreign asset and deposited onto the destination account on Kusama Asset Hub. The foreign asset\nbalances of any account on Kusama Asset Hub can be queried on-chain through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"foreignAssets"),"pallet as shown below."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Wrapped KSM Balance",src:a(53380).Z,width:"2854",height:"1960"})),(0,r.kt)("h2",{id:"transfer-of-arbitrary-assets-between-polkadot-asset-hub-and-kusama-asset-hub"},"Transfer of arbitrary assets between Polkadot Asset Hub and Kusama Asset Hub"),(0,r.kt)("p",null,"Transfer functionality of assets other than DOT and KSM between Asset Hubs is yet to be enabled.\nOnce this functionality is enabled, assets which are sufficient or non-sufficient on the Asset Hubs\ncan be bridged."),(0,r.kt)("admonition",{title:"Avoid Asset Traps",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To avoid issues on the receiving side for non-sufficient assets, make sure to call\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1531"},"pallet_assets::touch()"),"\nor\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/0ef37c75401b78b61ed35ce27af8b964da27bb3c/substrate/frame/assets/src/lib.rs#L1616"},"pallet_assets::touch_other()"),"\neffectively guaranteeing the ability to successfully receive and accept the bridged assets in your\naccount on the destination chain. This eliminates issues like your account on destination not\nexisting or not having enough ED or having reached the maximum limit of different assets it can\nhold. Without this sanity step, you risk that the bridged assets will make their way to the\ndestination chain but will not be accepted by your account, and instead get trapped in the Asset\nTrap on the destination chain.")),(0,r.kt)("p",null,"Once arbitrary asset transfers are enabled by the Asset Hubs, a guide will be posted to this Wiki\npage."))}f.isMDXComponent=!0},72760:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/KAH-DOT-Balance-f587755f88564c19d1578f162d9dd0ff.png"},27441:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/KAH-PAH-KSM-Transfer-PJS-Extrinsic-55c8a01313cec43f8119b6aca8904e23.png"},53380:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/PAH-KSM-Balance-ffa6f6093f73aa45b0c1bc7b6d0c78c7.png"},531:(e,t,a)=>{a.d(t,{Z:()=>s});const s=a.p+"assets/images/PAH-to-KAH-DOT-transfer-b97431dce4c4cd85c5dc17007357fb9a.png"}}]);