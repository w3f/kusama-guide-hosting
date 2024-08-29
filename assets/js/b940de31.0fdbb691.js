(self.webpackChunk=self.webpackChunk||[]).push([[4817],{47379:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var n=a(90675),s=a(10467),o=a(96540),i=a(69761),r=a(82285),l=a(11135);function p(e,t,a){return c.apply(this,arguments)}function c(){return(c=(0,s.A)((0,n.A)().mark((function e(t,a,s){var o,l,p,c,u;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return o="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return o="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==o){e.next=22;break}return e.abrupt("return");case 22:return p=new i.E(o),e.next=25,r.G.create({provider:p});case 25:c=e.sent,(u=a.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=c.toString(),e.abrupt("break",39);case 33:return e.next=35,c();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+u[0]+") in "+a);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,i=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,c=(0,o.useState)(""),d=c[0],h=c[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?u(i.toString(),l,t,h):h(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,s.A)((0,n.A)().mark((function e(){var s;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,h);case 2:if(void 0!==(s=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(s,l,t,h):h(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(r){console.log(r)}}}),[]),d}},11135:e=>{var t="polkadot",a="kusama",n="statemine",s="statemint",o="polkadotpeople",i="kusamapeople",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,p){var c=void 0;if(l===t||l===s||l==o)c=3;else{if(l!==a&&l!==n&&l!=i)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=6}e=parseFloat(e),p((e=Number.isInteger(e/r[l].precision)?e/r[l].precision+" "+r[l].symbol:(e/r[l].precision).toFixed(c)+" "+r[l].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,l){var p=void 0;if(l===t||l===s||l==o)p=1;else{if(l!==a&&l!==n&&l!=i)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=4}r((e/=p).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},62427:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(58168),s=a(98587),o=(a(96540),a(15680)),i=a(47379),r=["components"],l={id:"learn-assets",title:"Asset Hub",sidebar_label:"Asset Hub",description:"Fungible Tokens and NFTs on Polkadot.",keywords:["assets","fungible","non-fungible","asset hub","statemine","statemint"],slug:"../learn-assets"},p=void 0,c={unversionedId:"learn/learn-assets",id:"learn/learn-assets",title:"Asset Hub",description:"Fungible Tokens and NFTs on Polkadot.",source:"@site/../docs/learn/learn-assets.md",sourceDirName:"learn",slug:"/learn-assets",permalink:"/docs/learn-assets",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1724683517,formattedLastUpdatedAt:"Aug 26, 2024",frontMatter:{id:"learn-assets",title:"Asset Hub",sidebar_label:"Asset Hub",description:"Fungible Tokens and NFTs on Polkadot.",keywords:["assets","fungible","non-fungible","asset hub","statemine","statemint"],slug:"../learn-assets"},sidebar:"docs",previous:{title:"Tokens and Assets",permalink:"/docs/learn-assets-index"},next:{title:"DOT",permalink:"/docs/learn-DOT"}},u={},d=[{value:"Sufficient Assets",id:"sufficient-assets",level:2},{value:"Asset Conversion",id:"asset-conversion",level:2},{value:"Creation and Management",id:"creation-and-management",level:2},{value:"Fungible Assets",id:"fungible-assets",level:2},{value:"Transferring Asset Balances",id:"transferring-asset-balances",level:3},{value:"Destroying an Asset",id:"destroying-an-asset",level:3},{value:"Application Development",id:"application-development",level:3},{value:"Cross-Chain Accounting",id:"cross-chain-accounting",level:3},{value:"Non-Fungible Assets",id:"non-fungible-assets",level:2},{value:"Transferring NFTs",id:"transferring-nfts",level:3},{value:"Advanced Techniques",id:"advanced-techniques",level:2}],h={toc:d},m="wrapper";function g(e){var t=e.components,a=(0,s.A)(e,r);return(0,o.yg)(m,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Assets in the Kusama network can be\nrepresented on several chains. They can take many forms, from a parachain's native token to on-chain\nrepresentations of off-chain reserves. This page focuses on the latter, namely assets issued by a\ncreator (e.g. rights to audited, off-chain reserves held by the creator, or art issued as an NFT)."),(0,o.yg)("p",null,"The\n",(0,o.yg)("a",{parentName:"p",href:"https://www.parity.io/blog/statemint-generic-assets-chain-proposing-a-common-good-parachain-to-polkadot-governance/"},"Asset Hub system parachain"),'\nhosts data structures and logic that specialize in the creation, management, and use of assets in\nthe Kusama network. Although other\nparachains can host applications dealing with assets on the Asset Hub, the hub can be thought of as\na trusted "home base" of assets in the network.'),(0,o.yg)("p",null,"The Asset Hub uses KSM as its native token. The\nchain yields its governance to its parent Relay Chain and has no inflation or era-based rewards for\ncollators (although collators receive a portion of transaction fees). As a\n",(0,o.yg)("a",{parentName:"p",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"system parachain"),",\nthe Asset Hub has a trusted relationship with the Relay Chain, and as such, can teleport\nKSM between itself and the Relay Chain. That is,\nKSM on the Asset Hub is just as good as\nKSM on the Relay Chain."),(0,o.yg)("p",null,"The Asset Hub does not support smart contracts. See the ",(0,o.yg)("a",{parentName:"p",href:"#advanced-techniques"},"Advanced")," section at\nthe bottom for a discussion on using proxy and multisig accounts to replicate oft-used contract\nlogic."),(0,o.yg)("h2",{id:"sufficient-assets"},"Sufficient Assets"),(0,o.yg)("p",null,"A sufficient asset on Asset Hub can allow for an account to exist on-chain even though it does not\nhave any account balance in KSM. Any registered\nasset on the Asset Hub can be made ",(0,o.yg)("em",{parentName:"p"},"sufficient")," through governance on the Relay Chain. A balance of\na non-sufficient asset can only exist on accounts that are on-chain (i.e., accounts having the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"existential deposit")," of a sufficient asset).\nThat is, a user could not keep an account on-chain by transferring a non-sufficient asset to it; the\naccount must already be on-chain by having more than the existential deposit in\nKSM (or a sufficient asset)."),(0,o.yg)("p",null,"Assets deemed ",(0,o.yg)("em",{parentName:"p"},"sufficient")," can instantiate accounts on the Asset Hub and pay for transaction fees\nwithout the need for KSM. An example would be\nUSDT on the Polkadot Asset Hub. If an account holds 0.7 USDT, it would exist on the Polkadot Asset\nHub system parachain without the need to hold DOT."),(0,o.yg)("admonition",{title:"Transfers of Non-sufficient assets",type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"Before transferring a non-sufficient asset, ensure the receiver account has enough funds to cover\nthe existential deposit and transaction fees for future transfers. Please do so to ensure the asset\ntransfer is successful.")),(0,o.yg)("h2",{id:"asset-conversion"},"Asset Conversion"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot-sdk/master/pallet_asset_conversion/index.html"},"An asset conversion pallet"),"\nis deployed on AssetHub with Uniswap V2-style functionality. It implements a simple AMM (automated\nmarket maker), which employs a mathematical formula to determine the price of a token based on its\nratio within the liquidity pool."),(0,o.yg)("p",null,"This pallet enables fees to be paid in any asset that has corresponding liquidity (in DOT/KSM) on\nAssetHub. Learn more about asset conversion on AssetHub,\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-asset-conversion-assethub"},"including guides on how to use it here.")),(0,o.yg)("h2",{id:"creation-and-management"},"Creation and Management"),(0,o.yg)("admonition",{title:"Walk-through video tutorial about creating assets",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"See\n",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/knNLZEyposM?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&t=63"},"this technical explainer video"),"\nto learn how to create fungible assets on the Asset Hub.")),(0,o.yg)("p",null,"Anyone on the network can create assets on the Asset Hub as long as they can reserve the required\ndeposit of\n","\n",(0,o.yg)(i.A,{network:"statemine",path:"consts.assets.assetDeposit",defaultValue:1e11,filter:"humanReadable",mdxType:"RPC"}),"\nand around\n","\n",(0,o.yg)(i.A,{network:"statemine",path:"consts.assets.metadataDepositBase",defaultValue:668933304,filter:"humanReadable",mdxType:"RPC"}),"\nfor the metadata. The network reserves the deposit on creation. The creator also must specify a\nunique ",(0,o.yg)("inlineCode",{parentName:"p"},"AssetId"),", an integer of type ",(0,o.yg)("inlineCode",{parentName:"p"},"u32"),", to identify the asset. The ",(0,o.yg)("inlineCode",{parentName:"p"},"AssetId"),' should be the\ncanonical identifier for an asset, as the chain does not enforce the uniqueness of metadata like\n"name" and "symbol". The creator must also specify a minimum balance, preventing accounts from\nhaving dust balances.'),(0,o.yg)("admonition",{title:"Advanced How-to Guides",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"See ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-guides-assets-create"},"this page")," to learn more about creating assets using the Asset\nHub.")),(0,o.yg)("p",null,"Asset classes and instances can have associated metadata. The metadata is an array of data that the\nclass owner can add on-chain, for example, a link to an IPFS hash or other off-chain hosting\nservice. The ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-nft-pallets#uniques-pallet"},"Uniques pallet")," also supports setting key/value\npairs as attributes to a class or instance."),(0,o.yg)("p",null,"An asset class has several privileged roles. The asset creator automatically takes on all privileged\nroles but can reassign them after creation. These roles are:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("strong",{parentName:"li"},"owner")," can set the accounts responsible for the other three roles and set asset metadata\n(e.g. name, symbol, decimals)."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("strong",{parentName:"li"},"issuer")," can mint and burn tokens to/from their chosen addresses."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("strong",{parentName:"li"},"admin")," can make force transfers as well as unfreeze accounts of the asset class."),(0,o.yg)("li",{parentName:"ul"},"The ",(0,o.yg)("strong",{parentName:"li"},"freezer")," can freeze assets on target addresses or the entire asset class.")),(0,o.yg)("p",null,"Always refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://crates.parity.io/pallet_assets/index.html"},(0,o.yg)("strong",{parentName:"a"},"reference documentation")),"\nfor certainty on privileged roles."),(0,o.yg)("p",null,"An asset's details contain one field not accessible to its owner or admin team,\n",(0,o.yg)("a",{parentName:"p",href:"#sufficient-assets"},"asset sufficiency"),"."),(0,o.yg)("admonition",{title:"Transaction Fees on Polkadot-JS UI",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Polkadot-JS UI\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/issues/7812"},"doesn't support the functionality to pay with a sufficient asset yet"),".\nWhen using Polkadot-JS UI, transaction fee needs to be paid in\nKSM.")),(0,o.yg)("h2",{id:"fungible-assets"},"Fungible Assets"),(0,o.yg)("p",null,"Fungible assets are interchangeable, i.e. one unit is equivalent to any other unit to claim the\nunderlying item. The Asset Hub represents fungible assets in the Assets pallet. This pallet presents\na similar interface for those familiar with the ERC20 standard. However, the logic is encoded\ndirectly in the chain's runtime. As such, operations are not gas-metered but benchmarked upon every\nrelease, leading to efficient execution and stable transaction fees."),(0,o.yg)("h3",{id:"transferring-asset-balances"},"Transferring Asset Balances"),(0,o.yg)("admonition",{title:"Walk-through video tutorial about transferring assets",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"See\n",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/knNLZEyposM?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&t=326"},"this technical explainer video"),"\nto learn how to transfer assets on the Asset Hub."),(0,o.yg)("p",{parentName:"admonition"},"For Ledger users see ",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/j0O-KziV9iw"},"this video tutorial")," to learn how to use the\nStatemine Ledger app and what its current limitations are.")),(0,o.yg)("p",null,"Users have a simple interface, namely the ability to transfer asset balances to other accounts\non-chain. As mentioned before, if the asset is not ",(0,o.yg)("em",{parentName:"p"},"sufficient"),", then the destination account must\nalready exist for the transfer to succeed."),(0,o.yg)("p",null,"The chain also contains a ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer_keep_alive")," function, similar to that of the Balances pallet,\nthat will fail if execution kills the sending account."),(0,o.yg)("p",null,"The Asset Hub also sweeps dust balances into transfers. For example, if an asset has a minimum\nbalance of 10 and an account has a balance of 25, then an attempt to transfer 20 units would\ntransfer all 25."),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"See\n",(0,o.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000181118-how-to-transfer-tether-usdt-on-statemine"},"this support article"),"\nto learn more about transferring assets using the Asset Hub.")),(0,o.yg)("h3",{id:"destroying-an-asset"},"Destroying an Asset"),(0,o.yg)("admonition",{title:"Walk-through video tutorial about destroying assets",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"See\n",(0,o.yg)("a",{parentName:"p",href:"https://youtu.be/knNLZEyposM?list=PLOyWqupZ-WGuAuS00rK-pebTMAOxW41W8&t=422"},"this technical explainer video"),"\nto learn how to destroy assets on the Asset Hub.")),(0,o.yg)("p",null,"To destroy an asset, go to the Polkadot-JS UI on the Asset Hub > Developer > Extrinsics. If you\ncreated an asset without minting any unit, you could call ",(0,o.yg)("inlineCode",{parentName:"p"},"assets.startDestroy")," and then the\n",(0,o.yg)("inlineCode",{parentName:"p"},"assets.finishDestroy")," extrinsics specifying the asset id you want to destroy. If you created an\nasset and minted some units, follow the steps below:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets.freezeAsset")," will freeze all assets on all accounts holding that asset id. Those accounts\nwill no longer be able to transfer that asset."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets.startDestroy")," will start the destroying process."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets.destroyApprovals")," will destroy all approvals related to that asset id (if there are any\napprovals)."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets.destroyAccounts")," will destroy all accounts related to that asset id. All asset units will\nbe removed from those accounts."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("inlineCode",{parentName:"li"},"assets.finishDestroy")," will finish the destroying process. The asset id will be removed and\navailable for another fungible token.")),(0,o.yg)("h3",{id:"application-development"},"Application Development"),(0,o.yg)("p",null,"The Asset Hub provides an ",(0,o.yg)("inlineCode",{parentName:"p"},"approve_transfer"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"transfer_approved"),", and ",(0,o.yg)("inlineCode",{parentName:"p"},"cancel_approval")," interface.\nApplication developers can use this interface so that users can authorize the application to\neffectuate transfers up to a given amount on behalf of an account."),(0,o.yg)("h3",{id:"cross-chain-accounting"},"Cross-Chain Accounting"),(0,o.yg)("p",null,"The Asset Hub uses a reserve-backed system to manage asset transfers to other parachains. It tracks\nhow much of each asset has gone to each parachain and will not accept more from a particular\nparachain."),(0,o.yg)("p",null,"As a result of this, asset owners can use the Asset Hub to track information like the total issuance\nof their asset in the entire network, as parachain balances would be included in the reserve-backed\ntable. Likewise, for the minting and burning of tokens, an asset's team can perform all operations\non the Asset Hub and propagate any minted tokens to other parachains in the network."),(0,o.yg)("p",null,'Parachains that want to send assets to other parachains should do so via instructions to the Asset\nHub so that the reserve-backed table stays up to date. For more info, see the "Moving Assets between\nChains in XCM" section of the\n',(0,o.yg)("a",{parentName:"p",href:"https://polkadot.network/blog/xcm-the-cross-consensus-message-format/"},"article on the XCM format"),"."),(0,o.yg)("h2",{id:"non-fungible-assets"},"Non-Fungible Assets"),(0,o.yg)("p",null,"Unlike fungible assets, the particular instance of a ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-nft"},"non-fungible asset (NFT)")," has\na separate meaning from another instance of the same class. The Asset Hub represents NFTs in the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-nft-pallets"},"Uniques and NFTs pallets"),"."),(0,o.yg)("p",null,"Similar to the Assets pallet, this functionality is encoded into the chain. Operations are\nbenchmarked before each release instead of any runtime metering, ensuring efficient execution and\nstable transaction fees."),(0,o.yg)("h3",{id:"transferring-nfts"},"Transferring NFTs"),(0,o.yg)("p",null,"Users can transfer their NFTs to other accounts. The chain also provides an ",(0,o.yg)("inlineCode",{parentName:"p"},"approve_transfer"),",\n",(0,o.yg)("inlineCode",{parentName:"p"},"transfer_approved")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"cancel_approval")," interfaces that application developers can use to allow\nusers to authorize an application to transfer an instance on their behalf."),(0,o.yg)("h2",{id:"advanced-techniques"},"Advanced Techniques"),(0,o.yg)("p",null,"Many asset creators on other networks use smart contracts to control privileged functions like\nminting and burning. Although the Asset Hub does not have a smart contract interface, it contains\nthe ",(0,o.yg)("a",{parentName:"p",href:"https://crates.parity.io/pallet_multisig/index.html"},"Multisig"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://crates.parity.io/pallet_proxy/index.html"},"Proxy"),", and\n",(0,o.yg)("a",{parentName:"p",href:"https://crates.parity.io/pallet_utility/index.html"},"Utility")," pallets, which will meet most account\nmanagement needs."),(0,o.yg)("p",null,"For example, if a team wants sign-off from two groups to perform a privileged operation, it could\ncreate a 2-of-2 ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-multisig"},(0,o.yg)("strong",{parentName:"a"},"multisig"))," from two\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-proxies-pure#anonymous-proxy-pure-proxy"},(0,o.yg)("strong",{parentName:"a"},"pure proxies")),", and then set members from\neach group as proxies to those two accounts."))}g.isMDXComponent=!0},47790:()=>{}}]);