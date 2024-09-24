(self.webpackChunk=self.webpackChunk||[]).push([[1431],{92415:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(74848),s=n(28453),a=(n(47379),n(11470),n(19365),n(3514)),r=n(67141);const i={id:"learn-guides-accounts",title:"Polkadot-JS Guides about Accounts",sidebar_label:"Account Guides",description:"Polkadot-JS Guides about Accounts",keyword:["guides","polkadot-js","accounts"],slug:"../learn-guides-accounts"},c=void 0,l={id:"learn/learn-guides-accounts",title:"Polkadot-JS Guides about Accounts",description:"Polkadot-JS Guides about Accounts",source:"@site/../docs/learn/learn-guides-accounts.md",sourceDirName:"learn",slug:"/learn-guides-accounts",permalink:"/docs/learn-guides-accounts",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727178265e3,frontMatter:{id:"learn-guides-accounts",title:"Polkadot-JS Guides about Accounts",sidebar_label:"Account Guides",description:"Polkadot-JS Guides about Accounts",keyword:["guides","polkadot-js","accounts"],slug:"../learn-guides-accounts"},sidebar:"docs",previous:{title:"Polkadot-JS Guides",permalink:"/docs/learn-polkadot-js-guides"},next:{title:"Multisig Guides",permalink:"/docs/learn-guides-accounts-multisig"}},u={},d=[{value:"Account Address Format",id:"account-address-format",level:2},{value:"Polkadot-JS Browser Extension",id:"polkadot-js-browser-extension",level:2},{value:"Account Backup using the Polkadot-JS Browser Extension",id:"account-backup-using-the-polkadot-js-browser-extension",level:3},{value:"Reset Password using the Polkadot-JS Browser Extension",id:"reset-password-using-the-polkadot-js-browser-extension",level:3},{value:"Restore Account on the Polkadot-JS Browser Extension",id:"restore-account-on-the-polkadot-js-browser-extension",level:3},{value:"Polkadot-JS UI",id:"polkadot-js-ui",level:2},{value:"Account Backup using the Polkadot-JS UI",id:"account-backup-using-the-polkadot-js-ui",level:3},{value:"Reset password using the Polkadot-JS UI",id:"reset-password-using-the-polkadot-js-ui",level:3},{value:"Restore Account on the Polkadot-JS UI",id:"restore-account-on-the-polkadot-js-ui",level:3},{value:"Unlocking Locks",id:"unlocking-locks",level:3},{value:"Query Account Data in Polkadot-JS",id:"query-account-data-in-polkadot-js",level:2},{value:"Vanity Generator",id:"vanity-generator",level:2},{value:"Encryption Enhancement",id:"encryption-enhancement",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](../general/polkadotjs-ui.md), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,o.jsx)(a.A,{}),"\n",(0,o.jsx)(t.h2,{id:"account-address-format",children:"Account Address Format"}),"\n",(0,o.jsxs)(t.p,{children:["An account created on the relay chain can also be used on multiple chains in the ecosystem. More\nspecifically, the account of a chain that uses the ",(0,o.jsx)(t.code,{children:"*25519"})," account address format (the latest list\ncan be accessed on the\n",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json",children:"ss58 registry repository"}),")\nis cross-compatible with all the chains that use the similar format. To switch between the accounts\non different chains, you can follow the guidelines in\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000103707-can-i-use-the-same-account-on-polkadot-kusama-and-parachains-",children:"this support article"}),".\n",(0,o.jsx)(t.a,{href:"https://polkadot.subscan.io/tools/format_transform",children:"Subscan has a tool"})," you can use to convert your\naddress between the different chain formats."]}),"\n",(0,o.jsxs)(t.admonition,{title:"Using the same account on multiple chains - Pros and Cons",type:"info",children:[(0,o.jsx)(t.p,{children:"The address format differs from chain to chain, but that difference is only visual. The same private\nkey can be used to sign transactions on behalf of the respective accounts on multiple chains. Using\na single account on multiple chains is convenient, as you do not have to deal with multiple mnemonic\nphrases or private keys. But, if your account gets compromised on one chain, the attacker can gain\nfull access to the accounts on all other chains. This also has implications for the account holder's\nprivacy, as knowing the identity of an account on one chain can expose the account holder's identity\non all the chains. In the Accounts tab, the Polkadot-JS UI displays a warning message next to each\nAccount you are using on multiple chains and recommends using different Accounts on different chains\n(see below)."}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"warning multiple chains",src:n(36105).A+"",width:"1103",height:"343"})})]}),"\n",(0,o.jsx)(t.p,{children:'On Polkadot-JS Extension, you can copy your address by clicking the account\'s icon while the desired\nchain format is active. E.g. selecting "Substrate" as the format will change your address, and\nclicking the colorful icon of your account will copy it in that format.'}),"\n",(0,o.jsx)(t.h2,{id:"polkadot-js-browser-extension",children:"Polkadot-JS Browser Extension"}),"\n",(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col text--center",children:[(0,o.jsx)("a",{href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc",children:(0,o.jsx)("img",{src:"https://img.youtube.com/vi/DNU0p5G0Gqc/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})}),(0,o.jsx)("p",{children:(0,o.jsx)("a",{href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc",children:"Polkadot-JS Browser Extension Tutorial"})})]})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["For guidelines about how to create an account using the Polkadot Extension, see\n",(0,o.jsx)(t.a,{href:"https://youtu.be/DNU0p5G0Gqc",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," and visit\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000098878-how-to-create-a-dot-account",children:(0,o.jsx)(t.strong,{children:"this support article"})}),"."]})}),"\n",(0,o.jsx)(t.p,{children:"The Polkadot-JS Browser Extension (the Polkadot Extension) provides a reasonable balance of security\nand usability. It provides a separate local mechanism to generate your address and interact with\nPolkadot."}),"\n",(0,o.jsx)(t.p,{children:'This method involves installing the Polkadot Extension and using it as a \u201cvirtual vault," separate\nfrom your browser, to store your private keys. It also allows the signing of transactions and\nsimilar functionality.'}),"\n",(0,o.jsx)(t.p,{children:"It is still running on the same computer you use to connect to the internet and thus is less secure\nthan using Parity Signer or other air-gapped approaches."}),"\n",(0,o.jsx)(t.h3,{id:"account-backup-using-the-polkadot-js-browser-extension",children:"Account Backup using the Polkadot-JS Browser Extension"}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://youtu.be/DNU0p5G0Gqc",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," and visit\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000177677-how-to-export-your-json-backup-file",children:(0,o.jsx)(t.strong,{children:"this support page"})}),"\nto know how to back up your account."]}),"\n",(0,o.jsx)(t.h3,{id:"reset-password-using-the-polkadot-js-browser-extension",children:"Reset Password using the Polkadot-JS Browser Extension"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://www.youtube.com/watch?v=DNU0p5G0Gqc&t=280s",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," to learn how to\nchange the password for an account that has been created on the Polkadot-JS browser extension (i.e.\nan injected account)."]})}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"Before following the instructions below, make sure you have your mnemonic phrase stored in a safe\nplace accessible to you."})}),"\n",(0,o.jsxs)(t.p,{children:["Let's say you created ",(0,o.jsx)(t.code,{children:"ACCOUNT 1"})," protected by password ",(0,o.jsx)(t.code,{children:"PSW 1"}),". To reset the password of your\n",(0,o.jsx)(t.code,{children:"ACCOUNT 1"})," using the browser extension, you must follow the following steps:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Go to ",(0,o.jsx)(t.code,{children:"ACCOUNT 1"}),' on the browser extension and click "Forget account". This action will delete the\naccess to your account. Note that your tokens are still in your account on the Polkadot network.']}),"\n",(0,o.jsxs)(t.li,{children:['On the browser extension click the "+" button in the top right corner and select the option\n"Import account from pre-existing seed". After entering the mnemonic phrase, you can choose a new\npassword, ',(0,o.jsx)(t.code,{children:"PSW 2"}),"."]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{title:"JSON files do not allow changing account passwords",type:"info",children:(0,o.jsxs)(t.p,{children:['If you add the account to the extension using the option "Restore account from backup JSON file",\nthis will allow you to restore access to your account using a JSON file protected by the password\n',(0,o.jsx)(t.code,{children:"PSW 1"}),", but does not let you set a new password. Thus, ",(0,o.jsx)(t.code,{children:"PSW 1"})," will become the account password by\ndefault."]})}),"\n",(0,o.jsx)(t.admonition,{title:"Accounts on Cold wallets do not need passwords",type:"info",children:(0,o.jsxs)(t.p,{children:["For hardware wallets such as ",(0,o.jsx)(t.a,{href:"https://www.ledger.com/",children:"Ledger"}),", you may have to set a PIN for\naccessing the accounts on the device, but you do not need to set a password for every individual\naccount. When you need to make transactions with your account, you are required to sign using your\nLedger device. Also, Ledger wallets let you generate multiple accounts for multiple blockchain\nnetworks without setting different passwords to access such accounts."]})}),"\n",(0,o.jsx)(t.h3,{id:"restore-account-on-the-polkadot-js-browser-extension",children:"Restore Account on the Polkadot-JS Browser Extension"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://youtu.be/9ohp8k4Hz8c",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," and\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000169952-how-to-restore-your-account-in-the-polkadot-extension",children:(0,o.jsx)(t.strong,{children:"this support page"})}),"\nto learn how to restore your account on the Polkadot-JS UI."]})}),"\n",(0,o.jsx)(t.h2,{id:"polkadot-js-ui",children:"Polkadot-JS UI"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["For guidelines about how to create an account using Polkadot-JS UI, see\n",(0,o.jsx)(t.a,{href:"https://youtu.be/DNU0p5G0Gqc",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," and visit\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000180529",children:(0,o.jsx)(t.strong,{children:"this support article"})}),"."]})}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["If you use this method to create your account and clear your cookies in your browser, your account\nwill be lost forever if you do not ",(0,o.jsx)(t.a,{href:"#restore-account-on-the-polkadot-js-ui",children:"back it up"}),". Make sure\nyou store your seed phrase in a safe place or download the account's JSON file if using the\nPolkadot-JS browser extension. Learn more about account backup and restoration\n",(0,o.jsx)(t.a,{href:"#restore-account-on-the-polkadot-js-ui",children:"here"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Local in-browser account storage is disabled by default on the Polkadot-JS UI. To create an account\nusing the Polkadot-JS UI, navigate to settings > account options and click on allow local in-browser\naccount storage in the drop-down menu. Using the Polkadot-JS user interface without a browser\nextension is ",(0,o.jsx)(t.strong,{children:"not recommended"}),". It is the least secure way of generating an account. It should\nonly be used if all other methods are not feasible."]}),"\n",(0,o.jsx)(t.h3,{id:"account-backup-using-the-polkadot-js-ui",children:"Account Backup using the Polkadot-JS UI"}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://youtu.be/DNU0p5G0Gqc",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," and visit\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000177677-how-to-export-your-json-backup-file",children:(0,o.jsx)(t.strong,{children:"this support page"})}),"\nto know how to back up your account."]})}),"\n",(0,o.jsx)(t.h3,{id:"reset-password-using-the-polkadot-js-ui",children:"Reset password using the Polkadot-JS UI"}),"\n",(0,o.jsx)(t.p,{children:'To reset the password of an account created with Polkadot-JS Apps UI, you need to go to the\n"Accounts" tab, click the icon with three vertical dots on your account and select "Change this\naccount\'s password".'}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://youtu.be/DNU0p5G0Gqc?t=261",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," to learn how to change the\npassword for an account created on the Polkadot-JS UI (i.e. a non-injected account)."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["If you create an account first using Polkadot-JS Apps UI and then add it to the browser extension,\nyou need to follow the\n",(0,o.jsx)(t.a,{href:"#reset-password-using-the-browser-extension",children:"guidelines for the browser extension"})," to change the\npassword of such an account."]})}),"\n",(0,o.jsx)(t.h3,{id:"restore-account-on-the-polkadot-js-ui",children:"Restore Account on the Polkadot-JS UI"}),"\n",(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://youtu.be/cBsZqFpBANY",children:(0,o.jsx)(t.strong,{children:"this video tutorial"})})," and\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000180110-how-to-restore-your-account-in-polkadot-js-ui",children:(0,o.jsx)(t.strong,{children:"this support page"})}),"\nto learn how to restore your account on the Polkadot-JS UI."]}),"\n",(0,o.jsx)(t.h3,{id:"unlocking-locks",children:"Unlocking Locks"}),"\n",(0,o.jsx)(t.admonition,{title:"Locks do not stack!",type:"info",children:(0,o.jsxs)(t.p,{children:["The biggest lock decides the total amount of locked funds. See\n",(0,o.jsx)(t.a,{href:"https://youtu.be/LHgY7ds_bZ0",children:(0,o.jsx)(t.strong,{children:"this walk-through video tutorial"})})," that will guide you in the\nprocess of unlocking funds in the example above."]})}),"\n",(0,o.jsx)(t.p,{children:"In the example, the locked balance is 0.55 KSM because the biggest lock is on democracy and is 0.55\nKSM. As soon as the democracy lock is removed the next biggest lock is on staking 0.5 KSM (bonded\n0.4 KSM + redeemable 0.1 KSM). This means that the locked balance will be 0.5 KSM, and 0.05 KSM will\nbe added to the transferrable balance. After redeeming the unbonded 0.1 KSM, the locked balance will\nbe 0.4 KSM, and an additional 0.1 KSM will be added to the transferrable balance. Now the biggest\nlock is still the bonded one. This means that even if we remove the vested lock, the locked balance\nwill still be 0.4 KSM and no tokens will be added to the transferrable balance. To free those bonded\ntokens we will need to unbond them and wait for the unbonding period to make them redeemable. If we\nremove the proxy the reserved funds will be automatically added to the transferrable balance."}),"\n",(0,o.jsx)(t.h2,{id:"query-account-data-in-polkadot-js",children:"Query Account Data in Polkadot-JS"}),"\n",(0,o.jsxs)(t.p,{children:["In the Polkadot-JS UI, you can also query account data under\n",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/chainstate",children:"Developer > Chain state"}),". Under ",(0,o.jsx)(t.code,{children:"selected state query"}),"\nchoose the system pallet followed by ",(0,o.jsx)(t.code,{children:"account(AccountId32): FrameSystemAccountInfo"}),", under ",(0,o.jsx)(t.code,{children:"Option"}),'\nchoose an account, and then click on the "+" button on the right.']}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"account_balance_types",src:n(59637).A+"",width:"1636",height:"343"})}),"\n",(0,o.jsx)(t.p,{children:"Account information include:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"nonce"}),", the number of transactions the account sent."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"consumers"}),", the number of other modules that currently depend on this account's existence. The\naccount cannot be reaped until this is zero."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"providers"}),", the number of other modules that allow this account to exist. The account may not be\nreaped until this and ",(0,o.jsx)(t.code,{children:"sufficients"})," are both zero."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"sufficients"}),", the number of modules that allow this account to exist for their own purposes. The\naccount may not be reaped until this and ",(0,o.jsx)(t.code,{children:"providers"})," are both zero."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"data"}),", the additional data that belongs to this account. Used to store the balance(s) in a lot of\nchains."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["More in-depth information about the above data can be found in the\n",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/2e7fde832b77b242269b136f1c3b6fffef86f9b6/frame/system/src/lib.rs#LL767C1-L781C24",children:"substrate code base"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"AccountData"})," structure defines the balance types in Substrate. The three types of balances\ninclude:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"free"}),", is the balance that is free but not necessarily transferrable."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"reserved"}),", is the balance that is not free, and it is put on hold for on-chain activity such as\ndeposits for multi-signature calls, setting up proxies and identities, and other actions that hold\nstate on the network."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"frozen"}),", is the amount that is free to use for on-chain activity but is locked in staking,\ngovernance, or vesting."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"usable"})," or transferrable balance of the account is currently calculated using the formula\nbelow:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"transferable = free - max(frozen - reserved, ED)\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Where ED is the existential deposit. The ",(0,o.jsx)(t.strong,{children:"total"})," balance of the account is the sum of ",(0,o.jsx)(t.code,{children:"free"})," and\n",(0,o.jsx)(t.code,{children:"reserved"})," funds. The ",(0,o.jsx)(t.code,{children:"flags"})," describe extra information about the account."]}),"\n",(0,o.jsxs)(t.p,{children:["More in-depth information about the above data can be found in the\n",(0,o.jsx)(t.a,{href:"https://github.com/paritytech/substrate/blob/2e7fde832b77b242269b136f1c3b6fffef86f9b6/frame/balances/src/types.rs#LL95-L114",children:"balances pallet in the Substrate code base"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"vanity-generator",children:"Vanity Generator"}),"\n",(0,o.jsxs)(t.p,{children:["The vanity generator is a tool on ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/apps/#/accounts/vanity",children:"Polkadot-JS UI"}),"\nthat lets you generate addresses that contain a specific substring. For the tutorial on how to\ncreate an account using Vanity Generator, visit\n",(0,o.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000171416",children:"this support article"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"encryption-enhancement",children:"Encryption Enhancement"}),"\n",(0,o.jsxs)(t.p,{children:["Some newly generated ",(0,o.jsx)(t.code,{children:"JSON"})," account files cannot be imported (restored) into older wallet software.\nThis is due to an enhanced encryption method, noticeable in a slight delay when\nencrypting/decrypting your wallet. If you cannot load a ",(0,o.jsx)(t.code,{children:"JSON"})," file, please use the latest version\nof the wallet software. If you cannot load it, ensure that the wallet software uses the newest\nversion of the ",(0,o.jsx)(t.a,{href:"https://polkadot.js.org/api/",children:"Polkadot API"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},67141:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(96540),s=n(74848);const a=function(e){var t,n=e.message,a=(0,o.useState)(!0),r=a[0],i=a[1];return(0,s.jsx)(s.Fragment,{children:r&&(0,s.jsxs)("div",{className:"message-box",children:[(0,s.jsx)("button",{className:"close-button",onClick:function(){i(!1)},children:"\u2716 "}),(0,s.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=n,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},47379:(e,t,n)=>{"use strict";n.d(t,{A:()=>h});var o=n(90675),s=n(10467),a=n(96540),r=n(69761),i=n(84393),c=n(11135);function l(e,t,n){return u.apply(this,arguments)}function u(){return(u=(0,s.A)((0,o.A)().mark((function e(t,n,s){var a,c,l,u,d;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=void 0,c=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return a="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return a="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return a="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return a="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return a="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return a="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==a){e.next=22;break}return e.abrupt("return");case 22:return l=new r.E(a),e.next=25,i.G.create({provider:l});case 25:u=e.sent,(d=n.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return c=u.toString(),e.abrupt("break",39);case 33:return e.next=35,u();case 35:return c=(c=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+d[0]+") in "+n);case 39:return e.abrupt("return",c);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,n,o){switch(t){case"humanReadable":(0,c.HumanReadable)(e,n,o);break;case"precise":(0,c.Precise)(e,n,o);break;case"blocksToDays":(0,c.BlocksToDays)(e,o);break;case"erasToDays":(0,c.ErasToDays)(e,o,n);break;case"percentage":(0,c.Percentage)(e,o);break;case"permillToPercent":(0,c.PermillToPercent)(e,o);break;case"arrayLength":(0,c.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var t=e.network,n=e.path,r=e.defaultValue,i=e.filter,c=void 0===i?void 0:i,u=(0,a.useState)(""),h=u[0],p=u[1];return t=t.toLowerCase(),(0,a.useEffect)((function(){void 0!==c?d(r.toString(),c,t,p):p(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var a=function(){var e=(0,s.A)((0,o.A)().mark((function e(){var s;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,n,p);case 2:if(void 0!==(s=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==c?d(s,c,t,p):p(s);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{a()}catch(i){console.log(i)}}}),[]),h}},11135:e=>{var t="polkadot",n="kusama",o="statemine",s="statemint",a="polkadotpeople",r="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,c,l){var u=void 0;if(c===t||c===s)u=3;else if(c===n||c===o||c===a)u=6;else{if(c!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=8}e=parseFloat(e),l((e=Number.isInteger(e/i[c].precision)?e/i[c].precision+" "+i[c].symbol:(e/i[c].precision).toFixed(u)+" "+i[c].symbol).toString())},Precise:function(e,t,n){n(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,c){var l=void 0;if(c===t||c===s||c==a)l=1;else{if(c!==n&&c!==o&&c!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=4}i((e/=l).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},3514:(e,t,n)=>{"use strict";n.d(t,{A:()=>k});n(96540);var o=n(34164),s=n(26972),a=n(28774),r=n(53465),i=n(16654),c=n(21312),l=n(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function h(e){var t=e.href,n=e.children;return(0,d.jsx)(a.A,{href:t,className:(0,o.A)("card padding--lg",u.cardContainer),children:n})}function p(e){var t=e.href,n=e.icon,s=e.title,a=e.description;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,o.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),a&&(0,d.jsx)("p",{className:(0,o.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function f(e){var t,n,o=e.item,a=(0,s.Nr)(o),i=(n=(0,r.W)().selectMessage,function(e){return n(e,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e}))});return a?(0,d.jsx)(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:o.label,description:null!=(t=o.description)?t:i(o.items.length)}):null}function b(e){var t,n,o=e.item,a=(0,i.A)(o.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(null!=(t=o.docId)?t:void 0);return(0,d.jsx)(p,{href:o.href,icon:a,title:o.label,description:null!=(n=o.description)?n:null==r?void 0:r.description})}function m(e){var t=e.item;switch(t.type){case"link":return(0,d.jsx)(b,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function g(e){var t=e.className,n=(0,s.$S)();return(0,d.jsx)(k,{items:n.items,className:t})}function k(e){var t=e.items,n=e.className;if(!t)return(0,d.jsx)(g,Object.assign({},e));var a=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,o.A)("row",n),children:a.map((function(e,t){return(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},t)}))})}},19365:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});n(96540);var o=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(s.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{"use strict";n.d(t,{A:()=>j});var o=n(96540),s=n(34164),a=n(23104),r=n(56347),i=n(205),c=n(57485),l=n(31682),u=n(42349);function d(e){var t,n;return null!=(t=null==(n=o.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,o.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.XI)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId,a=(0,r.W6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:s});return[(0,c.aZ)(i),(0,o.useCallback)((function(e){if(i){var t=new URLSearchParams(a.location.search);t.set(i,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[i,a])]}function b(e){var t,n,s,a,r=e.defaultValue,c=e.queryString,l=void 0!==c&&c,d=e.groupId,b=h(e),m=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var s=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:b})})),g=m[0],k=m[1],x=f({queryString:l,groupId:d}),w=x[0],y=x[1],j=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Dv)(t),s=n[0],a=n[1],[s,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),v=j[0],S=j[1],A=function(){var e=null!=w?w:v;return p({value:e,tabValues:b})?e:null}();return(0,i.A)((function(){A&&k(A)}),[A]),{selectedValue:g,selectValue:(0,o.useCallback)((function(e){if(!p({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),S(e)}),[y,S,b]),tabValues:b}}var m=n(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(74848);function x(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,i=e.tabValues,c=[],l=(0,a.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==o&&(l(t),r(s))},d=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,s=c.indexOf(e.currentTarget)+1;n=null!=(o=c[s])?o:c[0];break;case"ArrowLeft":var a,r=c.indexOf(e.currentTarget)-1;n=null!=(a=c[r])?a:c[c.length-1]}null==(t=n)||t.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,k.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return c.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.A)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function w(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,o.cloneElement)(i,{className:(0,s.A)("margin-top--md",i.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=b(e);return(0,k.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,k.jsx)(x,Object.assign({},t,e)),(0,k.jsx)(w,Object.assign({},t,e))]})}function j(e){var t=(0,m.A)();return(0,k.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},53465:(e,t,n)=>{"use strict";n.d(t,{W:()=>l});var o=n(96540),s=n(44586),a=["zero","one","two","few","many","other"];function r(e){return a.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:r(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,s.A)().i18n.currentLocale;return(0,o.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:r(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(o){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+o.message+"\n"),i}var t,n}),[e])}function l(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var o=e.split("|");if(1===o.length)return o[0];o.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+o.length+": "+e);var s=n.select(t),a=n.pluralForms.indexOf(s);return o[Math.min(a,o.length-1)]}(n,t,e)}}}},59637:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n.p+"assets/images/AccountData-struct-118d0bf533806084460cba05bef62b9c.png"},36105:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n.p+"assets/images/warning-multichain-account-0719ff59691f3ff48562d92ef2295e84.png"},47790:()=>{}}]);