"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=s,b=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(b,r(r({ref:t},l),{},{components:n})):a.createElement(b,r({ref:t},l))}));function b(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},94521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),r=["components"],o={id:"build-node-interaction",title:"Node Interaction",sidebar_label:"Node Interaction",description:"Tools for node interaction.",keywords:["RPC","api","integration"],slug:"../build-node-interaction"},c=void 0,d={unversionedId:"build/build-node-interaction",id:"build/build-node-interaction",title:"Node Interaction",description:"Tools for node interaction.",source:"@site/../docs/build/build-node-interaction.md",sourceDirName:"build",slug:"/build-node-interaction",permalink:"/docs/build-node-interaction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1665566150,formattedLastUpdatedAt:"Oct 12, 2022",frontMatter:{id:"build-node-interaction",title:"Node Interaction",sidebar_label:"Node Interaction",description:"Tools for node interaction.",keywords:["RPC","api","integration"],slug:"../build-node-interaction"}},l={},p=[{value:"Polkadot RPC",id:"polkadot-rpc",level:2},{value:"Tracking the Chain Head",id:"tracking-the-chain-head",level:3},{value:"Substrate API Sidecar",id:"substrate-api-sidecar",level:2},{value:"Fetching a Block",id:"fetching-a-block",level:3},{value:"Submitting a Transaction",id:"submitting-a-transaction",level:3}],u={toc:p},h="wrapper";function b(e){var t=e.components,n=(0,s.Z)(e,r);return(0,i.kt)(h,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This page will guide you through some basic interactions with your node. This guide should ",(0,i.kt)("em",{parentName:"p"},"guide\nyou to the proper tools,")," not be seen as canonical reference. Always refer to the proper\ndocumentation for the tool you are using:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/sc_rpc_api/index.html"},"Substrate RPC API")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/rpc"},"Polkadot-JS RPC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Polkadot-JS RPC")," is a JavaScript library for interacting with the ",(0,i.kt)("strong",{parentName:"p"},"Substrate RPC API")," endpoint,\ndistributed as ",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," Node.js package.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Substrate API Sidecar")," is using the ",(0,i.kt)("strong",{parentName:"p"},"Polkadot-JS RPC")," to provide separately runnable REST\nservices."),(0,i.kt)("h2",{id:"polkadot-rpc"},"Polkadot RPC"),(0,i.kt)("p",null,"The Parity Polkadot client exposes HTTP and WS endpoints for RPC connections. The default ports are\n9933 for HTTP and 9944 for WS."),(0,i.kt)("p",null,"To get a list of all RPC methods, the node has an RPC endpoint called ",(0,i.kt)("inlineCode",{parentName:"p"},"rpc_methods"),"."),(0,i.kt)("p",null,"For example, using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/vi/websocat#installation"},"websocat"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'{"id":1,"jsonrpc":"2.0","method":"rpc_methods","params":[]}\' | websocat -n1 -B 99999999 ws://127.0.0.1:9944\n\n{"jsonrpc":"2.0","result":{"methods":["account_nextIndex","author_hasKey","author_hasSessionKeys","author_insertKey","author_pendingExtrinsics","author_removeExtrinsic","author_rotateKeys","author_submitAndWatchExtrinsic","author_submitExtrinsic","author_unwatchExtrinsic","babe_epochAuthorship","beefy_getFinalizedHead","beefy_subscribeJustifications","beefy_unsubscribeJustifications","chain_getBlock","chain_getBlockHash","chain_getFinalisedHead","chain_getFinalizedHead","chain_getHead","chain_getHeader","chain_getRuntimeVersion","chain_subscribeAllHeads","chain_subscribeFinalisedHeads","chain_subscribeFinalizedHeads","chain_subscribeNewHead","chain_subscribeNewHeads","chain_subscribeRuntimeVersion","chain_unsubscribeAllHeads","chain_unsubscribeFinalisedHeads","chain_unsubscribeFinalizedHeads","chain_unsubscribeNewHead","chain_unsubscribeNewHeads","chain_unsubscribeRuntimeVersion","childstate_getKeys","childstate_getKeysPaged","childstate_getKeysPagedAt","childstate_getStorage","childstate_getStorageEntries","childstate_getStorageHash","childstate_getStorageSize","grandpa_proveFinality","grandpa_roundState","grandpa_subscribeJustifications","grandpa_unsubscribeJustifications","mmr_generateBatchProof","mmr_generateProof","offchain_localStorageGet","offchain_localStorageSet","payment_queryFeeDetails","payment_queryInfo","state_call","state_callAt","state_getChildReadProof","state_getKeys","state_getKeysPaged","state_getKeysPagedAt","state_getMetadata","state_getPairs","state_getReadProof","state_getRuntimeVersion","state_getStorage","state_getStorageAt","state_getStorageHash","state_getStorageHashAt","state_getStorageSize","state_getStorageSizeAt","state_queryStorage","state_queryStorageAt","state_subscribeRuntimeVersion","state_subscribeStorage","state_traceBlock","state_trieMigrationStatus","state_unsubscribeRuntimeVersion","state_unsubscribeStorage","subscribe_newHead","sync_state_genSyncSpec","system_accountNextIndex","system_addLogFilter","system_addReservedPeer","system_chain","system_chainType","system_dryRun","system_dryRunAt","system_health","system_localListenAddresses","system_localPeerId","system_name","system_nodeRoles","system_peers","system_properties","system_removeReservedPeer","system_reservedPeers","system_resetLogFilter","system_syncState","system_unstable_networkState","system_version","unsubscribe_newHead"],"version":1},"id":1}\n\n')),(0,i.kt)("p",null,"Note that this call will show even those RPC methods which are disabled by a safety flag like\n",(0,i.kt)("inlineCode",{parentName:"p"},"--rpc-methods Safe"),". This is\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/issues/7024"},"being worked on"),"."),(0,i.kt)("p",null,"Add parameters in the call, for example get a block by its hash value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'echo \'{"id":1,"jsonrpc":"2.0","method":"chain_getBlock","params":["0x7d4ef171d483d37aa2339877524f0731af98e367c38f8fa27f133193ed2b5615"]}\' | websocat -n1 -B 99999999 ws://127.0.0.1:9944\n\n{"jsonrpc":"2.0","result":{"block":{"header":{"parentHash":"0xb5e10293122a3c706dfcf5c0e89d5fb90929e7ee580c5167e439afa330fae2c7","number":"0xbb07fe","stateRoot":"0x872dfbb3516a6e3b9becf01bb2192e53a1d77ef6c37e426f03ebf64b33a68ede","extrinsicsRoot":"0xe131e6af57c503ca6c6a151b2e621d05f65ef7be07e24abc2444fa1eb67c444a","digest":{"logs":["0x0642414245b50103b9000000ebdf8810000000002621c85fe312c4b8b9db111b9311a2857e265a62c7bd5a9b08f3e0989e51ea619481408decdc83f0f1322b706b50904f692f3c2dd505e7633dc029ca38a3f40072e7378760cf44e83566ec92ee330042d916684e957399badba91ed342a3270d","0x0542414245010190e94b9f1af95ae7645f85dc3d49f4c73dcce31083c9e1f712523a9b132aff798f89e0e6146429a869dde4ee060e7630831890f15942d5889ac4dfa24150368a"]}},"extrinsics":["0x280403000bd61300888301","..."]},"justifications":null},"id":1}\n')),(0,i.kt)("p",null,"Some return values may not appear meaningful at first glance. Polkadot uses\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/scale-codec/"},"SCALE encoding")," as a format that is suitable for\nresource-constrained execution environments. You will need to decode the information and use the\nchain ",(0,i.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/command-line-tools/subxt/#metadata"},"metadata"),"\n(",(0,i.kt)("inlineCode",{parentName:"p"},"state_getMetadata"),") to obtain human-readable information."),(0,i.kt)("h3",{id:"tracking-the-chain-head"},"Tracking the Chain Head"),(0,i.kt)("p",null,"Use the RPC endpoint ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_subscribeFinalizedHeads")," to subscribe to a stream of hashes of finalized\nheaders, or ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_FinalizedHeads")," to fetch the latest hash of the finalized header. Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"chain_getBlock")," to get the block associated with a given hash. ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_getBlock")," only accepts block\nhashes, so if you need to query intermediate blocks, use ",(0,i.kt)("inlineCode",{parentName:"p"},"chain_getBlockHash")," to get the block hash\nfrom a block number."),(0,i.kt)("h2",{id:"substrate-api-sidecar"},"Substrate API Sidecar"),(0,i.kt)("p",null,"Parity maintains an RPC client, written in TypeScript, that exposes a limited set of endpoints. It\nhandles the metadata and codec logic so that you are always dealing with decoded information. It\nalso aggregates information that an infrastructure business may need for accounting and auditing,\ne.g. transaction fees."),(0,i.kt)("p",null,"The sidecar can fetch blocks, get the balance of an address atomically (i.e., with a corresponding\nblock number), get the chain's metadata, get a transaction fee prediction, calculate outstanding\nstaking rewards for an address, submit transactions to a node's transaction queue, and\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/substrate-api-sidecar/dist/"},"much more"),"."),(0,i.kt)("p",null,"The client runs on an HTTP host. The following examples use python3, but you can query any way you\nprefer at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://HOST:PORT/"),". The default is ",(0,i.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080"),"."),(0,i.kt)("h3",{id:"fetching-a-block"},"Fetching a Block"),(0,i.kt)("p",null,"Fetch a block using the ",(0,i.kt)("inlineCode",{parentName:"p"},"block/number")," endpoint. To get the chain tip, omit the block number."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nurl = 'http://127.0.0.1:8080/blocks/7409038'\nresponse = requests.get(url)\nif response.ok:\n    block_info = json.loads(response.text)\n    print(block_info)\n")),(0,i.kt)("p",null,"This returns a fully decoded block."),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"balances.transfer")," extrinsic, the ",(0,i.kt)("inlineCode",{parentName:"p"},"partialFee"),' item is the transaction fee. It is called\n"partial fee" because the ',(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#fees"},"total fee")," would include the ",(0,i.kt)("inlineCode",{parentName:"p"},"tip")," field.\nNotice that some extrinsics do not have a signature. These are\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-protocol-info#extrinsics"},"inherents"),"."),(0,i.kt)("admonition",{title:"Tracking transaction fees",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When tracking transaction fees, the ",(0,i.kt)("inlineCode",{parentName:"p"},"extrinsics.paysFee")," value is not sufficient for determining if\nthe extrinsic had a fee. This field only means that it would require a fee if submitted as a\ntransaction. In order to charge a fee, a transaction also needs to be signed. So in the following\nexample, the ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp.set")," extrinsic does not pay a fee because it is an ",(0,i.kt)("em",{parentName:"p"},"inherent,")," put in the\nblock by the block author.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'{\n   "number":"7409038",\n   "hash":"0x0e9610f3c89fac046ef83aa625ad414d5403031faa026b7ab2a918184e389968",\n   "parentHash":"0xba308541eb207bc639f36d392706309a031c21622f883fb07411060389c5ffdd",\n   "stateRoot":"0x4426383b64a944ad7222a4019aefd558c749da0c6920cfcdfd587741d54abbe2",\n   "extrinsicsRoot":"0x74749e5f5aeb610bc23fd6d8d79fd8bbf5e4b6053f70ba94ea6b3cc271df4b3a",\n   "authorId":"Fvvz6Ej1D5ZR5ZTK1vE1dCjBvkbxE1VncptEtmFaecXe4PF",\n   "logs":[\n      {\n         "type":"PreRuntime",\n         "index":"6",\n         "value":[\n            "BABE",\n            "0x023a0200009c7d191000000000"\n         ]\n      },\n      {\n         "type":"Seal",\n         "index":"5",\n         "value":[\n            "BABE",\n            "0x2296a50fa4fea3a46a95ad5b1f09de76d22c6ed3dc6755718c976e2d14c63e4dd3c6257813d9bdc03bb180b1e20393f1558ae1204982e5c7570df393e11f908b"\n         ]\n      }\n   ],\n   "onInitialize":{\n      "events":[\n\n      ]\n   },\n   "extrinsics":[\n      {\n         "method":{\n            "pallet":"timestamp",\n            "method":"set"\n         },\n         "signature":null,\n         "nonce":null,\n         "args":{\n            "now":"1620636072000"\n         },\n         "tip":null,\n         "hash":"0x8b853f49b6543e4fcbc796ad3574ea5601d2869d80629e080e501da4cb7b74b4",\n         "info":{\n\n         },\n         "events":[\n            {\n               "method":{\n                  "pallet":"system",\n                  "method":"ExtrinsicSuccess"\n               },\n               "data":[\n                  {\n                     "weight":"185253000",\n                     "class":"Mandatory",\n                     "paysFee":"Yes"\n                  }\n               ]\n            }\n         ],\n         "success":true,\n         "paysFee":false\n      },\n      {\n         "method":{\n            "pallet":"balances",\n            "method":"transfer"\n         },\n         "signature":{\n            "signature":"0x94b63112648e8e692f0076fa1ccab3a04510c269d1392c1df2560503865e144e3afd578f1e37e98063b64b98a77a89a9cdc8ade579dcac0984e78d90646a052001",\n            "signer":{\n               "id":"Gr5sBB1EgdmQ7FG3Ud2BdECWQTMDXNgGPfdHMMtDsmT4Dj3"\n            }\n         },\n         "nonce":"12",\n         "args":{\n            "dest":{\n               "id":"J6ksma2jVeHRcRoYPZBkJRzRbckys7oSmgvjKLrVbj1U8bE"\n            },\n            "value":"100000000"\n         },\n         "tip":"0",\n         "hash":"0xfbc5e5de75d64abe5aa3ee9272a3112b3ce53710664f6f2b9416b2ffda8799c2",\n         "info":{\n            "weight":"201217000",\n            "class":"Normal",\n            "partialFee":"2583332634"\n         },\n         "events":[\n            {\n               "method":{\n                  "pallet":"balances",\n                  "method":"Transfer"\n               },\n               "data":[\n                  "Gr5sBB1EgdmQ7FG3Ud2BdECWQTMDXNgGPfdHMMtDsmT4Dj3",\n                  "J6ksma2jVeHRcRoYPZBkJRzRbckys7oSmgvjKLrVbj1U8bE",\n                  "100000000"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"balances",\n                  "method":"Deposit"\n               },\n               "data":[\n                  "Fvvz6Ej1D5ZR5ZTK1vE1dCjBvkbxE1VncptEtmFaecXe4PF",\n                  "2583332634"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"system",\n                  "method":"ExtrinsicSuccess"\n               },\n               "data":[\n                  {\n                     "weight":"201217000",\n                     "class":"Normal",\n                     "paysFee":"Yes"\n                  }\n               ]\n            }\n         ],\n         "success":true,\n         "paysFee":true\n      },\n      {\n         "method":{\n            "pallet":"utility",\n            "method":"batch"\n         },\n         "signature":{\n            "signature":"0x8aa2fc3f0cff52533745679523705720cff42d0e7258b9797feed193deb0ca73474726e148af0a0b096d44c07f20e5292819ec92279cffb2897e95cc337e638e",\n            "signer":{\n               "id":"F4gmSZGiM9pMYPsKW7xnGktDr4zRmN2jqy5Ze678y9YWR7F"\n            }\n         },\n         "nonce":"687",\n         "args":{\n            "calls":[\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                     "era":"2229"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                     "era":"2230"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                     "era":"2231"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"DifishR4auphofhzxsy2aupgYo4NaUECH7qgt71CgiB2o6P",\n                     "era":"2231"\n                  }\n               },\n               {\n                  "method":{\n                     "pallet":"staking",\n                     "method":"payoutStakers"\n                  },\n                  "args":{\n                     "validator_stash":"J1fishfH94nFZLNScHgC2HorWpFD2xdPxd96wtTCHLvKxfa",\n                     "era":"2231"\n                  }\n               }\n            ]\n         },\n         "tip":"0",\n         "hash":"0x69171ec3f4e5e4dfd27f4d1c5b5dbc884932c5d9a078c84495bb7ab875c8785f",\n         "info":{\n            "weight":"629782467000",\n            "class":"Normal",\n            "partialFee":"5150837715"\n         },\n         "events":[\n            {\n               "method":{\n                  "pallet":"staking",\n                  "method":"Reward"\n               },\n               "data":[\n                  "Cfish3zJiFnTvR9jscCap7imeA9ep3cH1wZfcZwAp2gdZHo",\n                  "40730624074"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"staking",\n                  "method":"Reward"\n               },\n               "data":[\n                  "FhLcXuFkTwyc3o9K82VBahpain1YHWyGeNMDTTyeDJKfm5b",\n                  "4296071738"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"staking",\n                  "method":"Reward"\n               },\n               "data":[\n                  "F1NyXFUayqmVMdjNK45hcaTCE3JiqdU83sEGhQ3HQXn2Rpq",\n                  "1770904403"\n               ]\n            },\n\n            // ...\n\n            {\n               "method":{\n                  "pallet":"utility",\n                  "method":"BatchCompleted"\n               },\n               "data":[\n\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"balances",\n                  "method":"Deposit"\n               },\n               "data":[\n                  "Fvvz6Ej1D5ZR5ZTK1vE1dCjBvkbxE1VncptEtmFaecXe4PF",\n                  "5150837715"\n               ]\n            },\n            {\n               "method":{\n                  "pallet":"system",\n                  "method":"ExtrinsicSuccess"\n               },\n               "data":[\n                  {\n                     "weight":"629782467000",\n                     "class":"Normal",\n                     "paysFee":"Yes"\n                  }\n               ]\n            }\n         ],\n         "success":true,\n         "paysFee":true\n      }\n   ],\n   "onFinalize":{\n      "events":[\n\n      ]\n   },\n   "finalized":true\n}\n')),(0,i.kt)("admonition",{title:"The JS number type is a 53 bit precision float",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is no guarantee that the numerical values in the response will have a numerical type. Any\nnumbers larger than ",(0,i.kt)("inlineCode",{parentName:"p"},"2**53-1")," will have a string type.")),(0,i.kt)("h3",{id:"submitting-a-transaction"},"Submitting a Transaction"),(0,i.kt)("p",null,"Submit a serialized transaction using the ",(0,i.kt)("inlineCode",{parentName:"p"},"transaction")," endpoint with an HTTP POST request."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import requests\nimport json\n\nurl = 'http://127.0.0.1:8080/transaction/'\ntx_headers = {'Content-type' : 'application/json', 'Accept' : 'text/plain'}\nresponse = requests.post(\n    url,\n    data='{\"tx\": \"0xed0...000\"}', # A serialized tx.\n    headers=tx_headers\n)\ntx_response = json.loads(response.text)\n")),(0,i.kt)("p",null,"If successful, this endpoint returns a JSON with the transaction hash. In case of error, it will\nreturn an error report, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "error": "Failed to parse a tx" | "Failed to submit a tx",\n    "cause": "Upstream error description"\n}\n')))}b.isMDXComponent=!0}}]);