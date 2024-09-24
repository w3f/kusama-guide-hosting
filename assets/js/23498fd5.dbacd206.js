"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7276],{34632:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var t=n(74848),a=n(28453);const i={id:"build-integrate-assets",title:"Using AssetHub",sidebar_label:"Using AssetHub",description:"Tools that you can use for integrating assets.",keywords:["assets","integration","api","operations"],slug:"../build-integrate-assets"},r=void 0,o={id:"build/build-integrate-assets",title:"Using AssetHub",description:"Tools that you can use for integrating assets.",source:"@site/../docs/build/build-integrate-assets.md",sourceDirName:"build",slug:"/build-integrate-assets",permalink:"/docs/build-integrate-assets",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726730833e3,frontMatter:{id:"build-integrate-assets",title:"Using AssetHub",sidebar_label:"Using AssetHub",description:"Tools that you can use for integrating assets.",keywords:["assets","integration","api","operations"],slug:"../build-integrate-assets"},sidebar:"docs",previous:{title:"Polkadot Protocol Overview",permalink:"/docs/build-protocol-info"},next:{title:"Opening HRMP Channels",permalink:"/docs/build-hrmp-channels"}},c={},h=[{value:"Assets Basics",id:"assets-basics",level:2},{value:"Asset Operations",id:"asset-operations",level:3},{value:"Paying Transaction Fees in Another Asset",id:"paying-transaction-fees-in-another-asset",level:4},{value:"How to Build Transactions Paying Fees with Other Assets",id:"how-to-build-transactions-paying-fees-with-other-assets",level:5},{value:"Foreign Assets",id:"foreign-assets",level:3},{value:"Integration",id:"integration",level:2},{value:"Parachain Node",id:"parachain-node",level:3},{value:"Asset Transfer API",id:"asset-transfer-api",level:3},{value:"Sidecar",id:"sidecar",level:3},{value:"Tx Wrapper Polkadot",id:"tx-wrapper-polkadot",level:3},{value:"XCM Transfer Monitoring",id:"xcm-transfer-monitoring",level:3},{value:"Monitoring of XCM deposits",id:"monitoring-of-xcm-deposits",level:4},{value:"Tracking back XCM information",id:"tracking-back-xcm-information",level:4},{value:"Additional Examples of Monitoring XCM Transfers",id:"additional-examples-of-monitoring-xcm-transfers",level:4},{value:"Monitoring of Failed XCM Transfers",id:"monitoring-of-failed-xcm-transfers",level:4}];function l(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"The relay chain does not natively support assets beyond its native token. This functionality exists\nin parachains. On both Polkadot and Kusama, this parachain is called Asset Hub."}),"\n",(0,t.jsx)(s.p,{children:"The Asset Hub provides a first-class interface for creating, managing, and using fungible and\nnon-fungible assets. The fungible interface is similar to Ethereum's ERC-20 standard. However, the\ndata structures and stateful operations are encoded directly into the chain's runtime, making\noperations fast and fee-efficient."}),"\n",(0,t.jsx)(s.p,{children:"Beyond merely supporting assets, integrating an Asset Hub into your systems has several benefits for\ninfrastructure providers and users:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Support for on-chain assets."}),"\n",(0,t.jsx)(s.li,{children:"Significantly lower transaction fees (about 1/10) than the relay chain."}),"\n",(0,t.jsx)(s.li,{children:"Significantly lower deposits (1/100) than the relay chain. This includes the existential deposit\nand deposits for proxy/multisig operations."}),"\n",(0,t.jsxs)(s.li,{children:["Ability to pay transaction fees in certain assets. As in, accounts would ",(0,t.jsx)(s.strong,{children:"not"})," need DOT to exist\non-chain or pay fees."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The Asset Hub will use DOT as its native currency. Users can transfer DOT from the relay chain into\nthe Asset Hub and use it natively. The relay chain will also accept DOT transfers from the Asset Hub\nback to the relay chain for staking, governance, or any other activity."}),"\n",(0,t.jsx)(s.p,{children:"Using the Asset Hub for DOT/KSM balance transfers will be much more efficient than the relay chain\nand is highly recommended. Until domain-specific parachains are built, the relay chain will still\nneed to be used for staking and governance."}),"\n",(0,t.jsx)(s.h2,{id:"assets-basics",children:"Assets Basics"}),"\n",(0,t.jsxs)(s.p,{children:["See the\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/assets",children:"Assets pallet"})," for\nthe most up-to-date info and reference documentation."]}),"\n",(0,t.jsx)(s.p,{children:"Assets are stored as a map from an ID to information about the asset, including a management team,\ntotal supply, total number of accounts, its sufficiency for account existence, and more.\nAdditionally, the asset owner can register metadata like the name, symbol, and number of decimals\nfor representation."}),"\n",(0,t.jsx)(s.p,{children:"Some assets, as determined by on-chain governance, are regarded as \u201csufficient\u201d. Sufficiency means\nthat the asset balance is enough to create the account on-chain, with no need for the DOT/KSM\nexistential deposit. Likewise, you cannot send a non-sufficient asset to an account that does not\nexist. Sufficient assets can be used to pay transaction fees (i.e. there is no need to hold DOT/KSM\non the account)."}),"\n",(0,t.jsx)(s.p,{children:"Assets do have a minimum balance (set by the creator), and if an account drops below that balance,\nthe dust is lost."}),"\n",(0,t.jsx)(s.h3,{id:"asset-operations",children:"Asset Operations"}),"\n",(0,t.jsxs)(s.p,{children:["The Assets pallet has its interface for dealing with assets. See the ",(0,t.jsx)(s.a,{href:"#integration",children:"Integration"}),"\nsection below for how to fetch information and construct transactions."]}),"\n",(0,t.jsxs)(s.p,{children:["The main functions you will probably interact with are ",(0,t.jsx)(s.code,{children:"transfer"})," and ",(0,t.jsx)(s.code,{children:"transfer_keep_alive"}),". These\nfunctions transfer some ",(0,t.jsx)(s.code,{children:"amount"})," (balance) of an ",(0,t.jsx)(s.code,{children:"AssetId"})," (a ",(0,t.jsx)(s.code,{children:"u32"}),", not a contract address) to\nanother account."]}),"\n",(0,t.jsxs)(s.p,{children:["The Assets pallet also provides an ",(0,t.jsx)(s.code,{children:"approve_transfer"}),", ",(0,t.jsx)(s.code,{children:"cancel_approval"}),", and ",(0,t.jsx)(s.code,{children:"transfer_approved"}),"\ninterface for non-custodial operations."]}),"\n",(0,t.jsxs)(s.p,{children:["Asset transfers will result in an ",(0,t.jsx)(s.code,{children:"assets.transferred"})," event. The same instructions for\n",(0,t.jsxs)(s.a,{href:"/docs/build-protocol-info#events",children:["monitoring events and ",(0,t.jsx)(s.strong,{children:"not"})," transactions"]})," applies to asset\ntransfers."]}),"\n",(0,t.jsxs)(s.p,{children:["Note that you can use the same addresses (except\n",(0,t.jsx)(s.a,{href:"/docs/learn-proxies-pure#anonymous-proxy-pure-proxy",children:"pure proxies"}),"!) on the Asset Hub that\nyou use on the relay chain. The SS58 encodings are the same; only the chain information (genesis\nhash, etc.) will change on transaction construction."]}),"\n",(0,t.jsx)(s.h4,{id:"paying-transaction-fees-in-another-asset",children:"Paying Transaction Fees in Another Asset"}),"\n",(0,t.jsxs)(s.p,{children:["Users in the Asset Hub can pay the fees of their transactions with assets other than DOT. The only\nrequirement is that a liquidity pool of the relevant asset against DOT should already exist as a\nstorage entry of ",(0,t.jsx)(s.a,{href:"../learn/learn-asset-conversion-assethub",children:"the Asset Conversion pallet"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Technically speaking, this is enabled by\n",(0,t.jsxs)(s.a,{href:"https://github.com/polkadot-fellows/runtimes/blob/bb52c327360d1098d3b3d36f4eafb40a74636e80/system-parachains/asset-hubs/asset-hub-polkadot/src/lib.rs#L1016",children:["the ",(0,t.jsx)(s.code,{children:"ChargeAssetTxPayment"})," signed-extension"]}),"\nimplemented in the Asset Hub runtime. This signed-extension extends transactions to include an\noptional ",(0,t.jsx)(s.code,{children:"AssetId"})," that specifies the asset to be used for payment of both the execution fees and\nthe optional tip. It defaults to the native token when it is set to ",(0,t.jsx)(s.code,{children:"None"}),". In case it is given,\nthis ",(0,t.jsx)(s.code,{children:"AssetId"})," has to be an\n",(0,t.jsxs)(s.a,{href:"../learn/learn/xcm/fundamentals/multilocation-summary",children:["XCM ",(0,t.jsx)(s.code,{children:"Multilocation"})]}),". Once the transaction\nis executed in the block, it will emit an ",(0,t.jsx)(s.code,{children:"AssetTxFeePaid"})," event, informing of the account paying\nthe fees, the amount in the asset paid as fee, the tip (if any), and the asset ID of the asset\npaying the fees."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Handling Pools with Low Liquidity"})}),"\n",(0,t.jsx)(s.p,{children:"Wallets and UIs enabling this functionality should ensure that the user is prompted with the\nnecessary warnings, such that they do not accidentally spend all of their funds to perform a swap on\na pool with no or low liquidity."}),"\n",(0,t.jsx)(s.h5,{id:"how-to-build-transactions-paying-fees-with-other-assets",children:"How to Build Transactions Paying Fees with Other Assets"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/bee344/asset-conversion-example/tree/main",children:"This repository"})," contains the\ncomplete workflow on how to create a liquidity pool for a given asset, add liquidity to it and\nthen build a transaction to pays fees with this asset (including fees estimation). It is done with\nseveral libraries: Polkadot.js API and Subxt."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/paritytech/asset-transfer-api/blob/main/examples/polkadot/assetHub/paysWithFeeOriginTransfers/dotToHydrationPaysWithGLMR.ts",children:"Example using Asset Transfer API"}),"\nto do a cross-chain transfer in Polkadot Asset Hub paying fees with GLMR."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://github.com/bee344/asset-hub-examples/blob/main/polkadot-js-example/src/foreignAssetTransferWithFee.ts",children:"A simple script"}),"\nusing Polkadot.js API to do a local transfer of bridged KSM in Polkadot Asset Hub paying fees with\nUSDT."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"foreign-assets",children:"Foreign Assets"}),"\n",(0,t.jsx)(s.p,{children:"Foreign assets are those assets in Asset Hub whose native blockchain is not Asset Hub. These are\nmainly native tokens from other parachains or bridged tokens from other consensus systems (such as\nEthereum). Once a foreign asset has been registered in Asset Hub (by its root origin), users are\nenabled to send this token from its native blockchain to Asset Hub and operate with it as if it were\nany other asset."}),"\n",(0,t.jsxs)(s.p,{children:["Practically speaking, foreign assets are handled by the ",(0,t.jsx)(s.code,{children:"foreign-assets"})," pallet in Asset Hub, which\nis an instance of the Assets pallet. Hence, this pallet exposes the same interface to users and\nother pallets as the Assets pallet."]}),"\n",(0,t.jsxs)(s.p,{children:["The main difference to take into account for foreign assets is their identifier. Instead of using\nintegers as identifiers like in the Assets pallet, assets stored in the ",(0,t.jsx)(s.code,{children:"foreign-assets"})," pallet are\nidentified by\n",(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/learn/xcm/fundamentals/multilocation-summary",children:"their XCM multilocation"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"integration",children:"Integration"}),"\n",(0,t.jsxs)(s.p,{children:["The Asset Hub will come with the same tooling suite that Parity Technologies provides for the Relay\nChain, namely ",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/substrate-api-sidecar",children:"API Sidecar"})," and\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/txwrapper-core/tree/main/packages/txwrapper-polkadot",children:"TxWrapper Polkadot"}),",\nas well as the ",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/asset-transfer-api",children:"Asset Transfer API"}),". If you have a\ntechnical question or issue about how to use one of the integration tools, please file a GitHub\nissue so a developer can help."]}),"\n",(0,t.jsx)(s.h3,{id:"parachain-node",children:"Parachain Node"}),"\n",(0,t.jsxs)(s.p,{children:["Using the Asset Hub will require running a parachain node to sync the chain. This is very similar to\nrunning a relay chain node, with the addition of some extra flags. You can follow\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus#asset-hub-",children:"these guidelines"})," to set\nup an Asset Hub node."]}),"\n",(0,t.jsx)(s.h3,{id:"asset-transfer-api",children:"Asset Transfer API"}),"\n",(0,t.jsxs)(s.p,{children:["Asset-transfer-api is a library focused on simplifying the construction of asset transfers for\nSubstrate-based chains that involve system parachains like Asset Hub (Polkadot and Kusama). It\nexposes a reduced set of methods that facilitate users to send transfers to other (para) chains or\nlocally. You can refer to\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/asset-transfer-api/tree/main#current-cross-chain-support",children:"this table"}),"\nfor the current cross-chain support and ",(0,t.jsx)(s.a,{href:"https://paritytech.github.io/asset-transfer-api/",children:"here"})," for\nthe complete documentation, including installation guide and usage examples."]}),"\n",(0,t.jsx)(s.h3,{id:"sidecar",children:"Sidecar"}),"\n",(0,t.jsx)(s.p,{children:"API Sidecar is a REST service for relay chain and parachain nodes. It comes with endpoints to query\ninformation about assets and asset balances on the Asset Hub."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Asset lookups always use the ",(0,t.jsx)(s.code,{children:"AssetId"})," to refer to an asset class. On-chain metadata is subject to\nchange and thus unsuitable as a canonical index."]}),"\n",(0,t.jsxs)(s.li,{children:["Please refer to ",(0,t.jsx)(s.a,{href:"https://paritytech.github.io/substrate-api-sidecar/dist/",children:"docs"})," for full usage\ninformation. Details on options like how to make a historical query are not included here."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Here are the available public instances:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.a,{href:"https://polkadot-asset-hub-public-sidecar.parity-chains.parity.io",children:"Sidecar connected to Polkadot Asset Hub"}),"\nand"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"https://kusama-asset-hub-public-sidecar.parity-chains.parity.io",children:"Sidecar connected to Kusama Asset Hub"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"The purpose of these instances is to allow anyone to check and get a quick overview of the info that\nthe asset-related endpoints provide."}),"\n",(0,t.jsx)(s.admonition,{type:"caution",children:(0,t.jsx)(s.p,{children:"These instances should only be used for ad-hoc checks or tests and not for production, heavy testing\nor any other critical purpose."})}),"\n",(0,t.jsx)(s.h3,{id:"tx-wrapper-polkadot",children:"Tx Wrapper Polkadot"}),"\n",(0,t.jsxs)(s.p,{children:["TxWrapper Polkadot is a library designed to facilitate transaction construction and signing in\noffline environments. It comes with asset-specific functions to use on the Asset Hub. When\nconstructing parachain transactions, you can use ",(0,t.jsx)(s.code,{children:"txwrapper-polkadot"})," exactly as on the relay chain,\nbut construct transactions with the appropriate parachain metadata like genesis hash, spec version,\nand type registry."]}),"\n",(0,t.jsx)(s.h3,{id:"xcm-transfer-monitoring",children:"XCM Transfer Monitoring"}),"\n",(0,t.jsx)(s.h4,{id:"monitoring-of-xcm-deposits",children:"Monitoring of XCM deposits"}),"\n",(0,t.jsxs)(s.p,{children:["Thanks to XCM and a growing number of parachains, the relay chain native token can exist across\nseveral blockchains, which means the providers need to monitor cross-chain transfers on top of local\ntransfers and corresponding ",(0,t.jsx)(s.code,{children:"balances.transfer"})," events."]}),"\n",(0,t.jsxs)(s.p,{children:["Currently, DOT can be sent and received in the relay chain and in the Asset Hub either with a\n",(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/learn-teleport",children:"Teleport"})," from\n",(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/learn-system-chains",children:"system parachains"})," or with a\n",(0,t.jsx)(s.a,{href:"https://wiki.polkadot.network/docs/learn-xcm-pallet#transfer-reserve-vs-teleport",children:"Reserve Backed Transfer"}),"\nfrom any other parachain. In both cases, the event emitted when processing the transfer is the\n",(0,t.jsx)(s.code,{children:"balances.minted"})," event. Hence, providers should listen to these events, pointing to an address in\ntheir system. For this, the service provider must query every new block created, loop through the\nevents array, filter for any ",(0,t.jsx)(s.code,{children:"balances.minted"})," event, and apply the appropriate business logic."]}),"\n",(0,t.jsx)(s.h4,{id:"tracking-back-xcm-information",children:"Tracking back XCM information"}),"\n",(0,t.jsxs)(s.p,{children:["What has been mentioned earlier should be sufficient to confirm that DOT has arrived in a given\naccount via XCM. However, in some cases, it may be interesting to identify the cross-chain message\nthat emitted the relevant ",(0,t.jsx)(s.code,{children:"balances.minted"})," event. This can be done as follows:"]}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["Query the relevant chain ",(0,t.jsx)(s.code,{children:"at"})," the block the ",(0,t.jsx)(s.code,{children:"balances.minted"})," event was emitted."]}),"\n",(0,t.jsxs)(s.li,{children:["Filter for a ",(0,t.jsx)(s.code,{children:"messageQueue(Processed)"})," event, also emitted during block initialization. This\nevent has a parameter ",(0,t.jsx)(s.code,{children:"Id"}),". The value of ",(0,t.jsx)(s.code,{children:"Id"})," identifies the cross-chain message received in the\nrelay chain or in the Asset Hub. It can be used to track back the message in the origin parachain\nif needed. Note that a block may contain several ",(0,t.jsx)(s.code,{children:"messageQueue(Processed)"})," events corresponding\nto several cross-chain messages processed for this block."]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"additional-examples-of-monitoring-xcm-transfers",children:"Additional Examples of Monitoring XCM Transfers"}),"\n",(0,t.jsx)(s.p,{children:"The two previous sections outline the process of monitoring XCM deposits to specific account(s) and\nthen tracing back the origin of these deposits. However, the process of tracking an XCM transfer\n(hence the events to look for) may vary based on the direction of the XCM message. Here are some\nexamples to showcase the slight differences:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For an XCM transfer from a Parachain to a Relay chain\n",(0,t.jsxs)(s.em,{children:["(",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/xcm_message/polkadot-3effaf637dd2a3ac5a644ccc693cbf58a6957d84",children:"example"}),")"]}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"https://hydradx.subscan.io/extrinsic/5136464-2?event=5136464-7",children:"event"})," to look for in the\nParachain side is called ",(0,t.jsx)(s.code,{children:"parachainsystem (UpwardMessageSent)"}),", and the parameter\n",(0,t.jsx)(s.code,{children:"message_hash"})," in this event identifies the XCM transfer."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/block/20810935?tab=event&&event=20810935-4",children:"event"})," to track in\nthe Relay chain side is called ",(0,t.jsx)(s.code,{children:"messagequeue (Processed)"}),", and the parameter ",(0,t.jsx)(s.code,{children:"id"})," of the event\nshould be the same as the ",(0,t.jsx)(s.code,{children:"message_hash"})," found in the Parachain event."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For an XCM transfer from a Relay chain to a Parachain\n",(0,t.jsxs)(s.em,{children:["(",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/xcm_message/polkadot-b2f455ed6ca1b4fdea746dfe8d150c10ec74440e",children:"example"}),")"]}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/extrinsic/20810793-2?event=20810793-53",children:"event"})," to look for in\nthe Relay chain side is called ",(0,t.jsx)(s.code,{children:"xcmPallet (sent)"}),", and the parameter ",(0,t.jsx)(s.code,{children:"message_id"})," in this event\nidentifies the XCM transfer."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"https://moonbeam.subscan.io/extrinsic/6174523-0?event=6174523-5",children:"event"})," to look for in the\nParachain side is called ",(0,t.jsx)(s.code,{children:"dmpqueue (ExecutedDownward)"}),", and the parameter that identifies the\nXCM message is either called ",(0,t.jsx)(s.code,{children:"message_hash"})," or ",(0,t.jsx)(s.code,{children:"message_id"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["For an XCM transfer from a System Parachain to a Parachain\n",(0,t.jsxs)(s.em,{children:["(",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/xcm_message/polkadot-72ed4496d1cb793e10084170548d5caf622ea338",children:"example"}),")"]}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.a,{href:"https://assethub-polkadot.subscan.io/extrinsic/6275027-4?event=6275027-22",children:"event"})," to look\nfor in the System Parachain side is called ",(0,t.jsx)(s.code,{children:"xcmpqueue (XcmpMessageSent)"}),", and again the\n",(0,t.jsx)(s.code,{children:"message_hash"})," is one of the parameters of the event."]}),"\n",(0,t.jsxs)(s.li,{children:["The corresponding ",(0,t.jsx)(s.a,{href:"https://hydradx.subscan.io/extrinsic/5135860-1?event=5135860-6",children:"event"})," in\nthe Parachain side is the ",(0,t.jsx)(s.code,{children:"xcmpqueue (Success)"})," and the ",(0,t.jsx)(s.code,{children:"message_hash"})," found in that event\nshould have the same value as the one in the System parachain."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"monitoring-of-failed-xcm-transfers",children:"Monitoring of Failed XCM Transfers"}),"\n",(0,t.jsx)(s.p,{children:"In case that an XCM transfer fails to complete successfully, then we will notice some different\nparameters in the events emitted or different events. Below are some examples:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["From a Relay chain to a System Parachain\n",(0,t.jsxs)(s.em,{children:["(",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/xcm_message/polkadot-c8d7186edb43a592d65b3b5a87c4ecaac38c5aa2",children:"example"}),")"]}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["We will see the\n",(0,t.jsx)(s.a,{href:"https://assethub-polkadot.subscan.io/extrinsic/4671081-0?event=4671081-1",children:"event"}),"\n",(0,t.jsx)(s.code,{children:"dmpqueue (ExecutedDownward)"})," in the System Parachain side with the following parameters:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"outcome"})," with value ",(0,t.jsx)(s.code,{children:"Incomplete"})," and with the type of error which in this example is\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/c54ea64af43b522d23bfabb8d917a490c0f23217/polkadot/xcm/src/v2/traits.rs#L43",children:"UntrustedReserveLocation"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"message_id"})," which shows the hash of the XCM Transfer."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["From a Parachain to another Parachain\n",(0,t.jsxs)(s.em,{children:["(",(0,t.jsx)(s.a,{href:"https://polkadot.subscan.io/xcm_message/polkadot-3e74e95204faa6ecf3c81f5129b85f498b89cff2",children:"example"}),")"]}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["We will see the ",(0,t.jsx)(s.a,{href:"https://interlay.subscan.io/extrinsic/3627057-1?event=3627057-8",children:"event"}),"\n",(0,t.jsx)(s.code,{children:"xcmpqueue (Fail)"})," in the destination Parachain with the following parameters:","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"error"})," which in this example is\n",(0,t.jsx)(s.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/c54ea64af43b522d23bfabb8d917a490c0f23217/polkadot/xcm/src/v2/traits.rs#L98",children:"TooExpensive"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"message_hash"})," which identifies the XCM Transfer."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Note"}),": there might be another\n",(0,t.jsx)(s.a,{href:"https://interlay.subscan.io/extrinsic/3627057-1?event=3627057-7",children:"event"})," called\n",(0,t.jsx)(s.code,{children:"polkadotxcm (AssetsTrapped)"})," which indicates that some assets have been trapped (and hence can\nbe claimed)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["A great resource to learn more about Error Management in XCM is the Polkadot blog post from Gavin\nWood,\n",(0,t.jsx)(s.a,{href:"https://www.polkadot.network/blog/xcm-part-three-execution-and-error-management",children:"XCM Part III: Execution and Error Management"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>o});var t=n(96540);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);