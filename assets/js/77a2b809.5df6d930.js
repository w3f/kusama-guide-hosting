(self.webpackChunk=self.webpackChunk||[]).push([[8080],{7940:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(4165),o=n(5861),r=n(7294),s=n(3444),i=n(1998),l=n(7425);function p(e,t,n){return c.apply(this,arguments)}function c(){return(c=(0,o.Z)((0,a.Z)().mark((function e(t,n,o){var r,l,p,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return p=new s.U(r),e.next=21,i.G.create({provider:p});case 21:c=e.sent,(u=n.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=u[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+u[0]+") in "+n);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,t,n,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,n,a);break;case"precise":(0,l.Precise)(e,n,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,n=e.path,s=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,c=(0,r.useState)(""),d=c[0],h=c[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?u(s.toString(),l,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://statemine-rpc.polkadot.io/";break;case"statemint":e="wss://statemint-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,n,h);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?u(o,l,t,h):h(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),d}},7425:e=>{var t={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,n,a){var o=void 0;if("polkadot"===n||"statemint"===n)o=3;else{if("kusama"!==n&&"statemine"!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");o=6}e=parseFloat(e),a((e=Number.isInteger(e/t[n].precision)?e/t[n].precision+" "+t[n].symbol:(e/t[n].precision).toFixed(o)+" "+t[n].symbol).toString())},Precise:function(e,n,a){a(e=(e=parseFloat(e))/t[n].precision+" "+t[n].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},3583:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=n(7940),i=["components"],l={id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"Balances Transfers",keywords:["balance","transfers","transaction","signing"],description:"Steps on how to perform balance transfers.",slug:"../learn-balance-transfers"},p=void 0,c={unversionedId:"learn/learn-balance-transfers",id:"learn/learn-balance-transfers",title:"Balance Transfers",description:"Steps on how to perform balance transfers.",source:"@site/../docs/learn/learn-balance-transfers.md",sourceDirName:"learn",slug:"/learn-balance-transfers",permalink:"/docs/learn-balance-transfers",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1671489830,formattedLastUpdatedAt:"Dec 19, 2022",frontMatter:{id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"Balances Transfers",keywords:["balance","transfers","transaction","signing"],description:"Steps on how to perform balance transfers.",slug:"../learn-balance-transfers"},sidebar:"docs",previous:{title:"PolkadotJS",permalink:"/docs/learn-polkadotjs"},next:{title:"Parachain Slot Auctions",permalink:"/docs/learn-auction"}},u={},d=[{value:"Sending Funds using UI, Extension, Parity Signer &amp; Ledger",id:"sending-funds-using-ui-extension-parity-signer--ledger",level:2},{value:"Keep-Alive Checks",id:"keep-alive-checks",level:2},{value:"Vested Transfers",id:"vested-transfers",level:2},{value:"Lazy Vesting",id:"lazy-vesting",level:3},{value:"Batch Transfers",id:"batch-transfers",level:2},{value:"Existing Reference Error",id:"existing-reference-error",level:2},{value:"Bonded Tokens",id:"bonded-tokens",level:3},{value:"Checking for Locks",id:"checking-for-locks",level:3},{value:"Purging Session Keys",id:"purging-session-keys",level:3},{value:"Existing Recovery Info",id:"existing-recovery-info",level:3},{value:"Existing Non-Native Assets",id:"existing-non-native-assets",level:3}],h={toc:d};function k(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Balance transfers are used to send a balance from one account to another account. To start\ntransferring a balance, we will begin by using\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS UI"),". This guide assumes that you've already\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"created an account")," and have some funds that are ready to be\ntransferred."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"We support only the use of the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},(0,r.kt)("strong",{parentName:"a"},"Polkadot-JS UI")),"\ntogether with the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},(0,r.kt)("strong",{parentName:"a"},"browser extension")),",\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},(0,r.kt)("strong",{parentName:"a"},"Ledger"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},(0,r.kt)("strong",{parentName:"a"},"Parity Signer"))," for signing transactions. We do not\nprovide support for third party applications.")),(0,r.kt)("h2",{id:"sending-funds-using-ui-extension-parity-signer--ledger"},"Sending Funds using UI, Extension, Parity Signer & Ledger"),(0,r.kt)("p",null,"See the video tutorial below to learn how to send funds using the supported tools. See the Polkadot\nSupport pages for detailed information about transferring funds using the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000170304-how-to-send-transfer-funds-out-of-your-dot-account-on-the-polkadot-js-ui"},"Polkadot-JS UI"),"."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://youtube.com/embed/gbvrHzr4EDY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Signing Transactions",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the Polkadot Support pages for detailed information about signing transactions using:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181993-how-to-sign-a-transaction-directly-on-polkadot-js-ui"},"The Polkadot-JS UI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181989"},"The Polkadot-JS browser extension")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000181994-how-to-sign-a-transaction-on-ledger"},"Ledger devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182000-how-to-sign-a-transaction-in-parity-signer"},"The Parity Signer app"),"."))),(0,r.kt)("h2",{id:"keep-alive-checks"},"Keep-Alive Checks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/Wg0pH05CC9Y"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},(0,r.kt)("strong",{parentName:"a"},"this support page")),"\nto learn about keep-alive checks and existential deposit.")),(0,r.kt)("p",null,"In Kusama there are two main ways to\ntransfer funds from one account to another:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer keep-alive")," (default option) will not allow you to send an amount that would allow the\nsending account to be removed due to it going below the\n",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},"existential deposit"),"\nof\n",(0,r.kt)(s.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:33333333,filter:"humanReadable",mdxType:"RPC"}),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transfer")," will allow you to send KSM\nregardless of the consequence. If the balance drops below the existential deposit your account\nwill be reaped. It may be that you do not want to keep the account alive (for example, because you\nare moving all of your funds to a different address). To switch the keep-alive check off visit\n",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000169248"},"this support article"),".")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Attempting to send less than the existential deposit to an account with\n0 KSM will always fail, no matter if the\nkeep-alive check is on or not.")),(0,r.kt)("p",null,"For instance, attempting to transfer\n0.0001 KSM to an account you just generated\n(and thus has no balance) will fail, since\n0.0001 KSM is less than the existential\ndeposit of\n","\n",(0,r.kt)(s.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:333333333,filter:"humanReadable",mdxType:"RPC"}),"\nand the account cannot be initialized with such a low balance."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Even if the transfer fails due to a keep-alive check, the transaction fee will be deducted from the\nsending account if you attempt to transfer.")),(0,r.kt)("h2",{id:"vested-transfers"},"Vested Transfers"),(0,r.kt)("p",null,"KSM may have a lock placed on them to account for\nvesting funds. Like other types of locks, these funds cannot be transferred but can be used in other\nparts of the protocol such as voting in governance or being staked as a validator or nominator."),(0,r.kt)("p",null,"Vesting funds are on a release schedule and unlock a constant number of tokens at each block\n(",(0,r.kt)("strong",{parentName:"p"},"linear vesting"),") or can unlock the full amount after a specific block number (",(0,r.kt)("strong",{parentName:"p"},"cliff\nvesting"),"). Although the tokens are released in this manner, it does not get reflected on-chain\nautomatically since locks are ",(0,r.kt)("a",{parentName:"p",href:"#lazy-vesting"},"lazy")," and require an extrinsic to update."),(0,r.kt)("p",null,"There are two ways that vesting schedules can be created."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One way is through an extrinsic type available in the Vesting pallet, ",(0,r.kt)("inlineCode",{parentName:"li"},"vested_transfer"),". The\nvested transfer function allows anyone to create a vesting schedule with a transfer of funds, as\nlong as the account for which the vesting schedule will be created does not already have one and\nthe transfer moves at least ",(0,r.kt)("inlineCode",{parentName:"li"},"MinVestedTransfer")," funds, which is specified as a chain constant."),(0,r.kt)("li",{parentName:"ul"},"A second way is as part of the genesis configuration of the chain. In the case of\nKusama, the chain specification genesis\nscript reads the state of the Claims contract that exists on the Ethereum blockchain and creates\nvesting schedules in genesis for all the allocations registered as being vested.")),(0,r.kt)("p",null,"Vesting schedules have three parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"locked"),", the amount of tokens to be transferred in\n",(0,r.kt)("a",{parentName:"li",href:"../learn/learn-DOT#the-planck-unit"},"Planck units"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"per block"),", the number of tokens that are released per block"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"starting block"),", the block number after which the vesting schedule starts")),(0,r.kt)("p",null,"The configuration of these three fields dictates the amount of funds that are originally locked, the\nslope of the unlock line and the block number for when the unlocking begins."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can watch ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/JVlwTQBwNGc"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to understand how to do vested\ntransfers, including linear and cliff vesting. Note the tutorial uses the Westend Testnet, but the\nsame applies to both Polkadot and Kusama.")),(0,r.kt)("h3",{id:"lazy-vesting"},"Lazy Vesting"),(0,r.kt)("p",null,"Like ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-staking-advanced"},"simple payouts"),", vesting is ",(0,r.kt)("em",{parentName:"p"},"lazy"),", which means that someone must\nexplicitly call an extrinsic to update the lock that is placed on an account."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"vest")," extrinsic will update the lock that is placed on the caller."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"vest_other"),' will update the lock that is placed on another "target" account\'s funds.')),(0,r.kt)("p",null,"These extrinsics are exposed from the Vesting pallet."),(0,r.kt)("p",null,"If you are using the Polkadot-JS UI, when there are\nKSM available to vest for an account, then you\nwill have the ability to unlock KSM which has\nalready vested from the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts")," page."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"unbond",src:n(7152).Z,width:"241",height:"301"})),(0,r.kt)("h2",{id:"batch-transfers"},"Batch Transfers"),(0,r.kt)("p",null,"Batch transfers are balances transfers to multiple accounts executed by one account. In order to\nconstruct a batch transfer you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"utility.batch(calls)")," extrinsic using the\n",(0,r.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_utility/index.html"},"utility pallet"),", and"),(0,r.kt)("li",{parentName:"ul"},"Within the batch call you can create multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"balances.transferKeepAlive")," extrinsics using the\n",(0,r.kt)("a",{parentName:"li",href:"https://paritytech.github.io/substrate/master/pallet_balances/index.html"},"balances pallet"),". You\ncan specify as many receivers as you desire.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can watch ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/uoUC2K8muvw"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to do batch\ntransfers. Note the tutorial uses the Westend Testnet, but the same applies to both Polkadot and\nKusama.")),(0,r.kt)("h2",{id:"existing-reference-error"},"Existing Reference Error"),(0,r.kt)("p",null,"If you are trying to reap an account and you receive an error similar to\n",(0,r.kt)("inlineCode",{parentName:"p"},'"There is an existing reference count on the sender account. As such the account cannot be reaped from the state"'),",\nthen you have existing references to this account that must be first removed before it can be\nreaped. References may still exist from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonded tokens (most likely)"),(0,r.kt)("li",{parentName:"ul"},"Unpurged session keys (if you were previously a validator)"),(0,r.kt)("li",{parentName:"ul"},"Token locks"),(0,r.kt)("li",{parentName:"ul"},"Existing recovery info"),(0,r.kt)("li",{parentName:"ul"},"Existing assets")),(0,r.kt)("h3",{id:"bonded-tokens"},"Bonded Tokens"),(0,r.kt)("p",null,"If you have tokens that are bonded, you will need to unbond them before you can reap your account.\nFollow the instructions at\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-nominate-polkadot"},"Unbonding and Rebonding")," to check if you\nhave bonded tokens, stop nominating (if necessary) and unbond your tokens."),(0,r.kt)("h3",{id:"checking-for-locks"},"Checking for Locks"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/LHgY7ds_bZ0"},"this video tutorial")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000169437-why-can-t-i-transfer-tokens-"},"this support page"),"\nto learn how to check for locks and remove them.")),(0,r.kt)("p",null,"You can also check for locks by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"system.account(AccountId)")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},(0,r.kt)("inlineCode",{parentName:"a"},"Chain state")," tab under the ",(0,r.kt)("inlineCode",{parentName:"a"},"Developer")," drop-down menu in the Polkadot-JS UI"),'.\nSelect your account, then click the "+" button next to the dropdowns, and check the relative ',(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\nJSON object. If you see a non-zero value for anything other than ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),", you have locks on your\naccount that need to get resolved."),(0,r.kt)("h3",{id:"purging-session-keys"},"Purging Session Keys"),(0,r.kt)("p",null,"If you used this account to set up a validator and you did not purge your keys before unbonding your\ntokens, you need to purge your keys. You can do this by seeing the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," page. This can also\nbe checked by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"session.nextKeys")," in the chain state for an existing key."),(0,r.kt)("h3",{id:"existing-recovery-info"},"Existing Recovery Info"),(0,r.kt)("p",null,"",""),(0,r.kt)("p",null,"On Kusama, you can check if recovery has been set up by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery.recoverable(AccountId)"),"\nchain state. This can be found under ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer > Chain state")," in ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),"."),(0,r.kt)("h3",{id:"existing-non-native-assets"},"Existing Non-Native Assets"),(0,r.kt)("p",null,"Currently, Kusama does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/assets"},"Assets Pallet"),", so this is\nprobably not the reason for your tokens having existing references."))}k.isMDXComponent=!0},7152:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/unlock-vesting-deefc0d6d9a08a91af1490a82e01069b.png"},3971:()=>{},6601:()=>{}}]);