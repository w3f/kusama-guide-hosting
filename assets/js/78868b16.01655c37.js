"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1539],{97131:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var c=t(74848),n=t(28453);const a={id:"kusama-social-recovery",title:"Social Recovery",sidebar_label:"Account Recovery",description:"Steps on how to perform account recovery on Kusama.",keywords:["recovery","social recovery","account","kusama"],slug:"../../kusama-social-recovery"},s=void 0,r={id:"general/kusama/kusama-social-recovery",title:"Social Recovery",description:"Steps on how to perform account recovery on Kusama.",source:"@site/../docs/general/kusama/kusama-social-recovery.md",sourceDirName:"general/kusama",slug:"/kusama-social-recovery",permalink:"/docs/kusama-social-recovery",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"gui",lastUpdatedAt:1712067554e3,frontMatter:{id:"kusama-social-recovery",title:"Social Recovery",sidebar_label:"Account Recovery",description:"Steps on how to perform account recovery on Kusama.",keywords:["recovery","social recovery","account","kusama"],slug:"../../kusama-social-recovery"},sidebar:"docs",previous:{title:"Pure Proxy Accounts",permalink:"/docs/learn-proxies-pure"},next:{title:"Transactions",permalink:"/docs/learn-transactions"}},i={},l=[{value:"Create a Recoverable Account",id:"create-a-recoverable-account",level:2},{value:"Recover your Account",id:"recover-your-account",level:2},{value:"Further Reading",id:"further-reading",level:2}];function h(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.p,{children:"Managing an account is not an easy task. Many people have lost their private keys due to improper\nkey management over the past few years. Kusama provides a method that allows users to recover their\naccounts by setting up a social recovery. It is an M-of-N recovery tool based on the multi-signature\nwallet to get back access to your lost account."}),"\n",(0,c.jsx)(o.admonition,{title:"There is no way to get back your private key by using this method",type:"caution",children:(0,c.jsx)(o.p,{children:"This is just a way of performing transactions on behalf of the lost account, so you can think of it\nas a proxy instead."})}),"\n",(0,c.jsx)(o.p,{children:"In this guide, you will learn how to create a recoverable account, how to recover it, and what you\nneed to be aware of when using it."}),"\n",(0,c.jsx)(o.h2,{id:"create-a-recoverable-account",children:"Create a Recoverable Account"}),"\n",(0,c.jsxs)(o.p,{children:["You will use your existing account to call ",(0,c.jsx)(o.code,{children:"createRecovery"})," to select a list of accounts you trust\nto help you recover the account when you lose the private key. To create a recoverable account, you\nwill be required to set a ",(0,c.jsx)(o.code,{children:"threshold"})," that is the number of your friends who need to approve the\nrecovery process to recover your account."]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-diag-1",src:t(96721).A+"",width:"1700",height:"1070"})}),"\n",(0,c.jsx)(o.admonition,{title:"Account Recovery",type:"note",children:(0,c.jsx)(o.p,{children:"If you are recovering an account, ensure that your network is set to Kusama. You can do this by\nselecting the network from the top right corner in the Polkadot-JS UI."})}),"\n",(0,c.jsxs)(o.p,{children:["First, see the ",(0,c.jsx)(o.a,{href:"https://polkadot.js.org/apps/#/accounts",children:"Accounts"})," page on Polkadot-JS Apps that\nshows all available accounts on your browser's local storage and Polkadot-JS extension. To create a\nrecoverable account, make sure you have some KSM to pay the transaction fees. You You will also need\nsome for the reserve required by the account recovery setup."]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"kusama accounts page",src:t(97990).A+"",width:"2870",height:"1638"})}),"\n",(0,c.jsx)(o.p,{children:'Then, click the menu beside the "send" button, and choose "Make recoverable".'}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"kusama accounts make recoverable",src:t(94557).A+"",width:"2878",height:"1022"})}),"\n",(0,c.jsx)(o.p,{children:"Now you need to provide the following information:"}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:"trusted social recovery helpers"})," - A list of accounts that you trust. These can help you if you\nlose the private key. Since setting up a recoverable account requires you to lock up KSM, ensure\nyour account has enough transferable balance to cover it. As you select additional recovery helpers,\nmore KSM will be required."]}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:"recovery threshold"})," - The number of friends required to submit a ",(0,c.jsx)(o.code,{children:"vouchRecovery"})," transaction in\norder to recover the account."]}),"\n",(0,c.jsx)(o.admonition,{type:"info",children:(0,c.jsx)(o.p,{children:"1 is the minimum, but it is not recommended to set a small number. If you set 1, that means any of\nyour recovery helpers would be able to recover your account."})}),"\n",(0,c.jsxs)(o.p,{children:[(0,c.jsx)(o.code,{children:"recovery block delay"})," - Once the threshold is reached, you will need to wait until the block delay\nhas passed until you can claim the recovery. This is a protection mechanism to allow the account\nowner to have enough time to check and react in case someone pretends to be you and initiates a\nrecovery process."]}),"\n",(0,c.jsx)(o.admonition,{type:"info",children:(0,c.jsx)(o.p,{children:"Setting the block delay to be a little longer would be better since even if an attacker acquired\nenough signatures to recover your account, they would still have to wait until the block delay is\npassed to control your account."})}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"kusama accounts page2",src:t(18545).A+"",width:"2194",height:"1232"})}),"\n",(0,c.jsx)(o.h2,{id:"recover-your-account",children:"Recover your Account"}),"\n",(0,c.jsx)(o.p,{children:"This section would be showing you how to initiate a recovery process and get back the balance that\nheld in the lost account to the new account."}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-diag-2",src:t(75610).A+"",width:"2675",height:"1705"})}),"\n",(0,c.jsx)(o.p,{children:"The above diagram shows the whole process of recovering an account."}),"\n",(0,c.jsx)(o.admonition,{type:"info",children:(0,c.jsx)(o.p,{children:"Ensure that your new account has enough KSM to pay for the transaction fees and the amount that is\nused for reserve when making a recovery."})}),"\n",(0,c.jsx)(o.p,{children:'Navigate to the menu beside the send button in the row of your new account and click the "Initiate\nrecover for another" option.'}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"kusama accounts initial recoverable",src:t(94557).A+"",width:"2878",height:"1022"})}),"\n",(0,c.jsx)(o.p,{children:'Then input the address you would like to recover in the "recover this account" field and click\n"Start recovery".'}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"kusama accounts initial recoverable2",src:t(91637).A+"",width:"1832",height:"544"})}),"\n",(0,c.jsx)(o.p,{children:"Once the transaction went through, some KSM will be locked to prevent malicious behavior."}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-6",src:t(13794).A+"",width:"2802",height:"180"})}),"\n",(0,c.jsxs)(o.p,{children:['Now call your friends that you have set in the first section, but heading over to "Developer" >\n"Extrinsics" and using the recovery pallet. They are required to submit a ',(0,c.jsx)(o.code,{children:"vouchRecovery"}),"\ntransaction."]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-7",src:t(4299).A+"",width:"2874",height:"890"})}),"\n",(0,c.jsxs)(o.p,{children:["Once the threshold is reached and the block delay is passed, use the new account to submit a\n",(0,c.jsx)(o.code,{children:"claimRecovery"})," transaction that would set a proxy on behalf of your lost account. It means that you\ncan still indirectly use the lost account to interact with the network."]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-8",src:t(82908).A+"",width:"2886",height:"850"})}),"\n",(0,c.jsxs)(o.p,{children:['To see the proxy information, use your new account by calling the "recovery->proxy(Accountid)"\nfunction at the ',(0,c.jsx)(o.a,{href:"https://polkadot.js.org/apps/#/chainstate",children:"Chain state"})," page. It should point to\nyour lost account."]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-9",src:t(35173).A+"",width:"2868",height:"670"})}),"\n",(0,c.jsx)(o.p,{children:'Next, in order to call the "closeRecovery" transaction, you can make use of the "asRecovered"\nfunction as your lost account to get the locked KSM.'}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-10",src:t(46281).A+"",width:"2866",height:"1044"})}),"\n",(0,c.jsx)(o.p,{children:'Once the transaction goes through, the reserved KSM from the "NEW-ACC" will have been moved to the\nlost account. This is a way of preventing someone from recovering other accounts maliciously.\nImagine if someone tried to initiate recovery on your account; you can do this to slash their locked\nKSM.'}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-11",src:t(68160).A+"",width:"2852",height:"380"})}),"\n",(0,c.jsxs)(o.p,{children:["Moving on, we use the ",(0,c.jsx)(o.code,{children:"asRecovered"})," function to submit the ",(0,c.jsx)(o.code,{children:"removeRecovery"})," transaction on behalf of\nthe lost account to release the reserved KSM from your lost account."]}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-12",src:t(46491).A+"",width:"2864",height:"828"})}),"\n",(0,c.jsx)(o.p,{children:"Now your account balance should be transferable."}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-13",src:t(31666).A+"",width:"2866",height:"324"})}),"\n",(0,c.jsx)(o.p,{children:"Finally, transfer all of your available balance from the lost account to the new account."}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-14",src:t(36525).A+"",width:"2860",height:"1068"})}),"\n",(0,c.jsx)(o.p,{children:"The recovery process is now complete and successful."}),"\n",(0,c.jsx)(o.p,{children:(0,c.jsx)(o.img,{alt:"social-recovery-15",src:t(82628).A+"",width:"2892",height:"348"})}),"\n",(0,c.jsxs)(o.admonition,{type:"tip",children:[(0,c.jsxs)(o.mdxAdmonitionTitle,{children:["Using ",(0,c.jsx)(o.code,{children:"Root"})," origin"]}),(0,c.jsxs)(o.p,{children:["There is still one possible way to recover the account without going through the recovery process.\nThat is by using the ",(0,c.jsx)(o.code,{children:"Root"})," origin. However, in order to use root permissions, you will need to\neither go through ",(0,c.jsx)(o.a,{href:"/docs/learn-polkadot-opengov",children:"governance"}),"."]})]}),"\n",(0,c.jsx)(o.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,c.jsxs)(o.ul,{children:["\n",(0,c.jsxs)(o.li,{children:[(0,c.jsx)(o.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/recovery/src/lib.rs",children:"Substrate's Recovery Pallet"})," -\nThe Rust implementation of the recovery pallet."]}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,c.jsx)(o,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},91637:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/kusama_make_account_initial-3061c821ee7789052080f87088e04e91.png"},18545:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/kusama_make_account_recoverable-62d204d0f94bee69417a9eed0923a8ab.png"},94557:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/kusama_make_recoverable-cf8cc2b88a20470cc7b9b475fe74b2b4.png"},97990:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/kusama_social_recovery_accounts_page-9a2106084803cc8bb9c3d33251d9fda4.png"},46281:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-10-c5174d9c34444108a0f9b65c8709a088.png"},68160:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-11-8d65e3b3645c8d577a04ce5711a23da1.png"},46491:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-12-d6d627497f4bf3b1f4af8cd69c86ac33.png"},31666:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-13-48311acc0e472c4d1d8995fc58a1e661.png"},36525:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-14-b80cf0a40d80b3c845a23d0817f9634e.png"},82628:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-15-20dbcbcf49e1f513b798b1b05e01543c.png"},13794:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-6-474cafc1a1ef60b8cd79b4e48bef24e2.png"},4299:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-7-23c91290b58d407c23fc2ac389626e6a.png"},82908:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-8-8062fe4c4c20f3da45f1460b1cc3a5fa.png"},35173:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-9-c6a6920959523fadb5942449ccc17441.png"},96721:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-diag-1-7d7432fe88f494dfa884b1268204e77f.png"},75610:(e,o,t)=>{t.d(o,{A:()=>c});const c=t.p+"assets/images/social-recovery-diag-2-872bb7e71e872580fb1be0d523775c3a.png"},28453:(e,o,t)=>{t.d(o,{R:()=>s,x:()=>r});var c=t(96540);const n={},a=c.createContext(n);function s(e){const o=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),c.createElement(a.Provider,{value:o},e.children)}}}]);