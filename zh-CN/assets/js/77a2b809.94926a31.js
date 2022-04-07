"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,f=u["".concat(l,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83583:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"Balances Transfers",description:"Steps on how to perform balance transfers.",slug:"../learn-balance-transfers"},l=void 0,c={unversionedId:"learn/learn-balance-transfers",id:"learn/learn-balance-transfers",title:"Balance Transfers",description:"Steps on how to perform balance transfers.",source:"@site/../docs/learn/learn-balance-transfers.md",sourceDirName:"learn",slug:"/learn-balance-transfers",permalink:"/zh-CN/docs/learn-balance-transfers",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-balance-transfers.md",tags:[],version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1649360742,formattedLastUpdatedAt:"2022/4/7",frontMatter:{id:"learn-balance-transfers",title:"Balance Transfers",sidebar_label:"Balances Transfers",description:"Steps on how to perform balance transfers.",slug:"../learn-balance-transfers"},sidebar:"docs",previous:{title:"PolkadotJS",permalink:"/zh-CN/docs/learn-polkadotjs"},next:{title:"Parachain Slots Auction",permalink:"/zh-CN/docs/learn-auction"}},d=[{value:"Polkadot-JS Apps UI",id:"polkadot-js-apps-ui",children:[{value:"Using the Transfer Tab",id:"using-the-transfer-tab",children:[],level:3},{value:"Signing on Polkadot Extension",id:"signing-on-polkadot-extension",children:[],level:3},{value:"Signing on Ledger device",id:"signing-on-ledger-device",children:[],level:3},{value:"Signing Transactions with Parity Signer",id:"signing-transactions-with-parity-signer",children:[],level:3},{value:"Keep-Alive Checks",id:"keep-alive-checks",children:[],level:3},{value:"Existing Reference Error",id:"existing-reference-error",children:[{value:"Bonded Tokens",id:"bonded-tokens",children:[],level:4},{value:"Purging Session Keys",id:"purging-session-keys",children:[],level:4},{value:"Checking for Locks",id:"checking-for-locks",children:[],level:4},{value:"Existing Recovery Info",id:"existing-recovery-info",children:[],level:4},{value:"Existing {{ polkadot: Non-DOT :polkadot }}{{ kusama: Non-KSM :kusama }} Assets",id:"existing--polkadot-non-dot-polkadot--kusama-non-ksm-kusama--assets",children:[],level:4}],level:3},{value:"From the Accounts Page",id:"from-the-accounts-page",children:[],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Balance transfers are used to send a balance from one account to another account. To start\ntransferring a balance, we will begin by using ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),". This guide assumes that you've\nalready ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-account-generation"},"created an account")," and have some funds that are ready to be\ntransferred. This guide also contains instructions on how to sign the balance transfer transactions\nfor accounts created on Polkadot JS Extension, Ledger devices and Parity Signer App."),(0,r.kt)("h2",{id:"polkadot-js-apps-ui"},"Polkadot-JS Apps UI"),(0,r.kt)("p",null,"Let's begin by opening ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps"),". There are two ways to conduct a balance transfer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'By using the "Transfer" tab in the "Accounts" dropdown (located on the top navigational menu).'),(0,r.kt)("li",{parentName:"ol"},'Clicking the "Send" button while in the "Accounts" page.')),(0,r.kt)("h3",{id:"using-the-transfer-tab"},"Using the Transfer Tab"),(0,r.kt)("p",null,'Click on the "Transfer" tab in the "Accounts" dropdown.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(59075).Z,width:"310",height:"357"})),(0,r.kt)("p",null,"Now a modal window will appear on the page. The modal asks you to enter three inputs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"send from account": Your account with funds that you will send from.'),(0,r.kt)("li",{parentName:"ul"},'"send to address": The address of the account that will receive the funds.'),(0,r.kt)("li",{parentName:"ul"},'"amount": The amount of tokens you will transfer.')),(0,r.kt)("p",null,'The "existential deposit" box shows you the ',(0,r.kt)("strong",{parentName:"p"},"minimum amount of funds you must keep in the account\nfor it to remain active.")," See the ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/build-protocol-info#existential-deposit"},"existential deposit")," section for more information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(16117).Z,width:"1641",height:"673"})),(0,r.kt)("p",null,'After setting your inputs correctly, click the "Make Transfer" button and confirm. Once the transfer\nis included in a block you will see a green notification in the top-right corner of your screen.'),(0,r.kt)("h3",{id:"signing-on-polkadot-extension"},"Signing on Polkadot Extension"),(0,r.kt)("p",null,"If you inject your account in Polkadot-JS Apps through the Polkadot-JS Extension, you need to sign the balance transfer transaction\non the pop-up window. You can examine the method and info dropdowns (highlighted in the screenshot below) and ensure they match with the original transaction submission. Then, sign the transaction by entering the account password."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"extension transfer",src:n(80601).Z,width:"1106",height:"1222"})),(0,r.kt)("h3",{id:"signing-on-ledger-device"},"Signing on Ledger device"),(0,r.kt)("p",null,"Assuming that you have imported your Ledger account to the Polkadot-JS Extension, you will see a pop-up window for signing the balance transfer transaction. Review the transaction details on the Ledger device and approve it to sign the transaction."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Connect Ledger to Polkadot-JS Apps")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you are looking for instructions in a video, watch the tutorial on how to connect ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/7VlTncHCGPc"},"Ledger to Polkadot-JS Apps"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Ledger transfer",src:n(99920).Z,width:"1116",height:"1180"})),(0,r.kt)("h3",{id:"signing-transactions-with-parity-signer"},"Signing Transactions with Parity Signer"),(0,r.kt)("p",null,"If you directly import your Parity Signer account to Polkadot-JS Apps, you will see a pop-up window with a QR code and a camera window, as shown below.\nOpen the QR scanner on Parity Signer and scan the QR code. You may be prompted to enter your PIN to sign the transaction.\nThe signed extrinsic will then be available as a QR code that needs to be shown in front of your computer's camera (as shown in the red square window shown to the right in the screenshot below)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Companion transfer",src:n(42241).Z,width:"1926",height:"1034"})),(0,r.kt)("p",null,"If your account was setup on ",(0,r.kt)("a",{parentName:"p",href:"https://parity.link/signer-companion"},"Parity Signer Companion")," instead of Polkadot-JS Apps, you will see a pop-up window with a QR code, as shown below for this transaction."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Companion transfer",src:n(52207).Z,width:"1179",height:"1081"})),(0,r.kt)("p",null,"Scan the QR code using Parity Signer. You will see a QR code consisting of the signed extrinsic for this transaction. Click on the ",(0,r.kt)("strong",{parentName:"p"},"next to signing")," button in the pop-up window, as shown above. You can then show the QR code on your phone within the red square window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Companion transfer",src:n(92224).Z,width:"1189",height:"1180"})),(0,r.kt)("h3",{id:"keep-alive-checks"},"Keep-Alive Checks"),(0,r.kt)("p",null,"At an ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/glossary#extrinsic"},"extrinsic")," level, there are two main ways to transfer funds\nfrom one account to another. These are ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," will allow you\nto send KSM regardless of the consequence;\n",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive")," will not allow you to send an amount\nthat would allow the sending account to be removed due to it going below the existential deposit."),(0,r.kt)("p",null,"By default, Polkadot-JS Apps will use ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),", ensuring that the account you send from\ncannot drop below the existential deposit of\n0.001666 KSM."),(0,r.kt)("p",null,'However, it may be that you do not want to keep this account alive (for example, because you are moving\nall of your funds to a different address). In this case, click on the "keep-alive" toggle at the bottom\nof the modal window. The label should switch from "Transfer with account keep-alive\nchecks" - ',(0,r.kt)("inlineCode",{parentName:"p"},"transfer_keep_alive"),' will be used, to "Normal transfer without keep-alive checks" -\n',(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," extrinsic will be used. As a common use case for using normal transfers is to entirely clear\nout the account, a second toggle will appear if you have the keep-alive check turned off that will send all\nthe tokens in the account, minus a transaction fee, to the destination address."),(0,r.kt)("p",null,"Attempting to send less than the existential deposit to an account with\n0 KSM will always fail, no matter if the keep-alive\ncheck is on or not."),(0,r.kt)("p",null,"For instance, attempting to transfer\n0.0001 KSM to an account you just generated (and thus has no KSM) will fail, since 0.1 is less than the\nexistential deposit of 0.001666 KSM and the account cannot be initialized with such a low balance."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Even if the transfer fails due to a keep-alive check, the transaction fee will be deducted\nfrom the sending account if you attempt to transfer."))),(0,r.kt)("h3",{id:"existing-reference-error"},"Existing Reference Error"),(0,r.kt)("p",null,'If you are trying to reap an account and you receive an error similar to "There is an existing\nreference count on the sender account. As such the account cannot be reaped from the state", then\nyou have existing references to this account that must first be removed before it can be reaped.\nReferences may still exist from:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bonded tokens (most likely)"),(0,r.kt)("li",{parentName:"ul"},"Unpurged session keys (if you were previously a validator)"),(0,r.kt)("li",{parentName:"ul"},"Token locks"),(0,r.kt)("li",{parentName:"ul"},"Existing recovery info"),(0,r.kt)("li",{parentName:"ul"},"Existing assets")),(0,r.kt)("h4",{id:"bonded-tokens"},"Bonded Tokens"),(0,r.kt)("p",null,"If you have tokens that are bonded, you will need to unbond them before you can reap your account.\nFollow the instructions at ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-unbond"},"Unbonding and Rebonding")," to check if\nyou have bonded tokens, stop nominating (if necessary) and unbond your tokens."),(0,r.kt)("h4",{id:"purging-session-keys"},"Purging Session Keys"),(0,r.kt)("p",null,"If you used this account to set up a validator and you did not purge your keys before unbonding your\ntokens, you need to purge your keys. You can do this by seeing the\n",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/maintain-guides-how-to-stop-validating"},"How to Stop Validating")," page. This can also be\nchecked by checking ",(0,r.kt)("inlineCode",{parentName:"p"},"session.nextKeys")," in the chain state for an existing key."),(0,r.kt)("h4",{id:"checking-for-locks"},"Checking for Locks"),(0,r.kt)("p",null,"You can check for locks by querying ",(0,r.kt)("inlineCode",{parentName:"p"},"system.account(AccountId)")," under ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer > Chain state"),'.\nSelect your account, then click the "+" button next to the dropdowns, and check the relative ',(0,r.kt)("inlineCode",{parentName:"p"},"data"),"\nJSON object. If you see a non-zero value for anything other than ",(0,r.kt)("inlineCode",{parentName:"p"},"free"),", you have locks on your\naccount that need to get resolved."),(0,r.kt)("p",null,"You can also check for locks by navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"Accounts > Accounts")," in\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/"},"PolkadotJS Apps"),". Then, click the dropdown arrow of the relevant\naccount under the 'balances' column. If it shows that some tokens are in a 'locked' state, you can\nsee why by hovering over the information icon next to it."),(0,r.kt)("h4",{id:"existing-recovery-info"},"Existing Recovery Info"),(0,r.kt)("p",null,"Currently, Kusama does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/blob/master/frame/recovery/"},"Recovery Pallet"),", so this is\nprobably not the reason for your tokens having existing references."),(0,r.kt)("p",null,"On Kusama, you can check if recovery has been set up by checking the ",(0,r.kt)("inlineCode",{parentName:"p"},"recovery.recoverable(AccountId)"),"\nchain state. This can be found under ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer > Chain state")," in ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"PolkadotJS Apps"),"."),(0,r.kt)("h4",{id:"existing--polkadot-non-dot-polkadot--kusama-non-ksm-kusama--assets"},"Existing Non-KSM Assets"),(0,r.kt)("p",null,"Currently, Kusama does not use the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/assets"},"Assets Pallet"),", so this is\nprobably not the reason for your tokens having existing references."),(0,r.kt)("h3",{id:"from-the-accounts-page"},"From the Accounts Page"),(0,r.kt)("p",null,'Navigate to the "Accounts" page by selecting the "Accounts" tab from the "Accounts" dropdown located\non the top navigational menu of Polkadot-JS Apps.'),(0,r.kt)("p",null,'You will see a list of accounts you have loaded. Click the "Send" button in the row for the account\nyou will like to send funds from.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"transfer",src:n(41058).Z,width:"2404",height:"73"})),(0,r.kt)("p",null,'Now you will see the same modal window as if using the "Transfer" tab. Fill in the inputs correctly\nand hit "Make Transfer" then confirm the balance transfer. You will see a green notification in the\ntop-right corner of the screen when the transfer is included in a block.'))}u.isMDXComponent=!0},52207:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/companion-transfer-55f29864c5bc765e9dce8c3d03b153c9.png"},92224:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/companion-transfer2-5a8bff083949ec2807e6469bd10f33c6.png"},80601:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/extenstion-transaction-7e00c7e785ca4426321c45ba7296da47.png"},99920:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ledger-transaction-5f27684e2c301a02f1d6092479ad11ec.png"},42241:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/signer-transaction-65df6dcf50a7eb62f830cf68f81ddae6.png"},59075:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-1-f6f309bbc7388327e58853eae66c5d1e.png"},16117:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-2-65ec4db364371a79f239abe5b190d7b9.png"},41058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/transfer-3-ed7c8c2299bbe828723b721321b88868.png"}}]);