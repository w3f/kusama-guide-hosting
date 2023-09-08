"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,k=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(i,".").concat(m)]||u[m]||p[m]||s;return n?a.createElement(h,l(l({ref:t},k),{},{components:n})):a.createElement(h,l({ref:t},k))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,l=new Array(s);l[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[u]="string"==typeof e?e:o,l[1]=r;for(var c=2;c<s;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=n(87462),o=n(63366),s=(n(67294),n(3905)),l=["components"],r={id:"learn-xcm-docs-journey-locks",title:"Locks",sidebar_label:"Locks",description:"Restrict Transfer or Withdrawal of Assets.",keywords:["xcm","cross-consensus messaging","locks"],slug:"../../journey-locks"},i="Locking",c={unversionedId:"learn/xcm/journey/locks/learn-xcm-docs-journey-locks",id:"learn/xcm/journey/locks/learn-xcm-docs-journey-locks",title:"Locks",description:"Restrict Transfer or Withdrawal of Assets.",source:"@site/../docs/learn/xcm/journey/locks/locks.md",sourceDirName:"learn/xcm/journey/locks",slug:"/learn/xcm/journey-locks",permalink:"/docs/learn/xcm/journey-locks",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-journey-locks",title:"Locks",sidebar_label:"Locks",description:"Restrict Transfer or Withdrawal of Assets.",keywords:["xcm","cross-consensus messaging","locks"],slug:"../../journey-locks"}},k={},u=[{value:"LockAsset",id:"lockasset",level:2},{value:"UnlockAsset",id:"unlockasset",level:2},{value:"NoteUnlockable",id:"noteunlockable",level:2},{value:"RequestUnlock",id:"requestunlock",level:2},{value:"Example",id:"example",level:2},{value:"Example 1",id:"example-1",level:3},{value:"Example 2",id:"example-2",level:3}],p={toc:u},m="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"locking"},"Locking"),(0,s.kt)("p",null,"Assets can be locked via XCM, meaning, the transfer or withdrawal of assets can be restricted via\nmessages. The XCM locking mechanism consists of four instructions: ",(0,s.kt)("inlineCode",{parentName:"p"},"LockAsset"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset"),",\n",(0,s.kt)("inlineCode",{parentName:"p"},"NoteUnlockable"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestUnlock"),". Let's explore each instruction in detail:"),(0,s.kt)("h2",{id:"lockasset"},"LockAsset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"LockAsset { asset: MultiAsset, unlocker: MultiLocation }\n")),(0,s.kt)("p",null,"The LockAsset instruction is used to lock locally held assets and prevent further transfers or\nwithdrawals. This instruction requires two parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"asset"),": The asset(s) to be locked."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"unlocker"),": The MultiLocation that can unlock the asset(s). This value must match the origin of a\ncorresponding ",(0,s.kt)("inlineCode",{parentName:"li"},"UnlockAsset")," instruction to unlock the asset.")),(0,s.kt)("p",null,"When the locking operation succeeds, a ",(0,s.kt)("inlineCode",{parentName:"p"},"NoteUnlockable")," instruction is sent to the unlocker. This\ninstruction serves as a notification that the asset is now unlockable."),(0,s.kt)("h2",{id:"unlockasset"},"UnlockAsset"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"UnlockAsset { asset: MultiAsset, target: MultiLocation }\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset")," instruction removes the lock on a specific asset on the local chain, allowing it\nto be transferred if there are no other restrictions. The following parameters are required:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"asset"),": The asset to be unlocked."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"target"),": The owner of the asset on the local chain.")),(0,s.kt)("h2",{id:"noteunlockable"},"NoteUnlockable"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"NoteUnlockable { asset: MultiAsset, owner: MultiLocation }\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"NoteUnlockable")," instruction indicates that an asset has been locked on the system which the\nmessage originated from.",(0,s.kt)("br",{parentName:"p"}),"\n","The locked assets can only be unlocked by receiving an ",(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset")," instruction from this chain.\nThis instruction requires the following parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"asset"),": The asset(s) which are now unlockable from this origin."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"owner"),": The owner of the asset on the chain in which it was locked. This may be a location\nspecific to the origin network. The owner can request this origin to unlock the assets using a\n",(0,s.kt)("inlineCode",{parentName:"li"},"RequestUnlock")," instruction. However, the owner is not able to unlock the assets themselves.")),(0,s.kt)("p",null,"It is essential to trust the origin to have locked the corresponding asset before sending this\nmessage."),(0,s.kt)("h2",{id:"requestunlock"},"RequestUnlock"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust,",metastring:"noplayground",noplayground:!0},"RequestUnlock { asset: MultiAsset, locker: MultiLocation }\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"RequestUnlock")," instruction is used to send an ",(0,s.kt)("inlineCode",{parentName:"p"},"UnlockAsset")," instruction to the ",(0,s.kt)("inlineCode",{parentName:"p"},"locker")," for a\ngiven asset. The following parameters are required:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"asset"),": The asset(s) to be unlocked."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"locker"),": The location from which a previous ",(0,s.kt)("inlineCode",{parentName:"li"},"NoteUnlockable")," was sent, and where the\n",(0,s.kt)("inlineCode",{parentName:"li"},"UnlockAsset")," instruction should be sent.")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("p",null,"To get a better grasp on how these instructions work together, we give two examples in this section.\nThe examples use the xcm-executor with the pallet-xcm as the implementation for the ",(0,s.kt)("inlineCode",{parentName:"p"},"AssetLocker"),"\nconfig item. An important note of this implementation is that only one lock with ID ",(0,s.kt)("inlineCode",{parentName:"p"},"py/xcmlk")," is\nset per account. The pallet-xcm implementation keeps track of all the xcm-related locks that are\nplaced on an account and sets the most restricting one with the ",(0,s.kt)("inlineCode",{parentName:"p"},"py/xcmlk")," lock ID. This principle\nbecomes more clear in the second example."),(0,s.kt)("h3",{id:"example-1"},"Example 1"),(0,s.kt)("p",null,"Check out the full ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"example code"),". The\nscenario of this example is as follows:"),(0,s.kt)("p",null,"Parachain A locks 5 Cents of relay chain native assets of its Sovereign account on the relay chain\nand assigns Parachain B as unlocker. Parachain A then asks Parachain B to unlock the funds partly.\nParachain B responds by sending an UnlockAssets instruction to the relay chain."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Example",src:n(93909).Z,width:"641",height:"371"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"send ",(0,s.kt)("inlineCode",{parentName:"li"},"LockAsset")," instruction from ParaA to relay.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"ParaA::execute_with(|| {\n    let message = Xcm(vec![LockAsset {\n        asset: (Here, CENTS * 5).into(),\n        unlocker: (Parachain(2)).into(),\n    }]);\n    assert_ok!(ParachainPalletXcm::send_xcm(Here, Parent, message.clone()));\n});\n")),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Parachain B receives this ",(0,s.kt)("inlineCode",{parentName:"li"},"NoteUnlockable")," instruction from the relay chain.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"NoteUnlockable {\n    owner: (Parent, Parachain(1)).into(),\n    asset: (Parent, CENTS * 5).into()\n}\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Parachain A sends ",(0,s.kt)("inlineCode",{parentName:"li"},"RequestUnlock")," instruction to Parachain B")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"ParaA::execute_with(|| {\n    let message = Xcm(vec![RequestUnlock {\n        asset: (Parent, 3 * CENTS).into(),\n        locker: Parent.into(),\n    }]);\n    assert_ok!(ParachainPalletXcm::send_xcm(Here, (Parent, Parachain(2)), message.clone()));\n});\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Parachain B sends an ",(0,s.kt)("inlineCode",{parentName:"li"},"UnlockAsset")," instruction to the relay chain. We check if the lock is\nupdated accordingly:")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'assert_eq!(\n    relay_chain::Balances::locks(&parachain_sovereign_account_id(1)),\n    vec![BalanceLock { id: *b"py/xcmlk", amount: 2 * CENTS, reasons: Reasons::All }]\n);\n')),(0,s.kt)("h3",{id:"example-2"},"Example 2"),(0,s.kt)("p",null,"Check out the full ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"example code"),". The\nscenario of this example is as follows:"),(0,s.kt)("p",null,"Parachain A sets two locks on the relay chain with as unlockers Parachain B and Parachain C.\nParachain A then requests Parachain B to partly unlock."),(0,s.kt)("p",null,"Note: The locks overlap. When there are two or more locks, the total assets that are locked is equal\nto the most restrictive lock (the lock that locks the most assets). When the most restrictive lock\nis unlocked, the total locked assets is than equal to the next most restrictive lock."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Example",src:n(24549).Z,width:"821",height:"371"})),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Set locks on the relay chain. Unlockers: B, C; Locks registered in pallet-xcm: 10, 5. Lock set in\npallet-balances: 10.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust,",metastring:"noplayground",noplayground:!0},'ParaA::execute_with(|| {\n    let message = Xcm(vec![\n        LockAsset { asset: (Here, 10 * CENTS).into(), unlocker: (Parachain(2)).into() },\n        LockAsset { asset: (Here, 5 * CENTS).into(), unlocker: (Parachain(3)).into() },\n    ]);\n    assert_ok!(ParachainPalletXcm::send_xcm(Here, Parent, message.clone()));\n});\n\nRelay::execute_with(|| {\n    assert_eq!(\n        relay_chain::Balances::locks(&parachain_sovereign_account_id(1)),\n        vec![BalanceLock { id: *b"py/xcmlk", amount: 10 * CENTS, reasons: Reasons::All }]\n    );\n});\n')),(0,s.kt)("ol",{start:2},(0,s.kt)("li",{parentName:"ol"},"Parachain B and C receive the ",(0,s.kt)("inlineCode",{parentName:"li"},"NoteUnlockable")," instruction.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust,",metastring:"noplayground",noplayground:!0},"ParaB::execute_with(|| {\n    assert_eq!(\n        parachain::MsgQueue::received_dmp(),\n        vec![Xcm(vec![NoteUnlockable {\n            owner: (Parent, Parachain(1)).into(),\n            asset: (Parent, 10 * CENTS).into()\n        }])]\n    );\n});\n\nParaC::execute_with(|| {\n    assert_eq!(\n        parachain::MsgQueue::received_dmp(),\n        vec![Xcm(vec![NoteUnlockable {\n            owner: (Parent, Parachain(1)).into(),\n            asset: (Parent, 5 * CENTS).into()\n        }])]\n    );\n});\n")),(0,s.kt)("ol",{start:3},(0,s.kt)("li",{parentName:"ol"},"Parachain A sends a ",(0,s.kt)("inlineCode",{parentName:"li"},"RequestUnlock")," instruction to Parachain B for 8 CENTS.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust,",metastring:"noplayground",noplayground:!0},"ParaA::execute_with(|| {\n    let message = Xcm(vec![RequestUnlock {\n        asset: (Parent, 8 * CENTS).into(),\n        locker: Parent.into(),\n    }]);\n\n    assert_ok!(ParachainPalletXcm::send_xcm(Here, (Parent, Parachain(2)), message.clone()));\n});\n")),(0,s.kt)("ol",{start:4},(0,s.kt)("li",{parentName:"ol"},"Parachain B Unlocks a part of the funds by sending an ",(0,s.kt)("inlineCode",{parentName:"li"},"UnlockAsset")," to the relay chain. we check\nthe lock in the balances-pallet. Unlockers: B, C; Funds registered in pallet-xcm: 2, 5. Lock set\nin pallet-balances: 5.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'Relay::execute_with(|| {\n    assert_eq!(\n        relay_chain::Balances::locks(&parachain_sovereign_account_id(1)),\n        vec![BalanceLock { id: *b"py/xcmlk", amount: 5 * CENTS, reasons: Reasons::All }]\n    );\n});\n')))}h.isMDXComponent=!0},93909:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Example1-61d1f7cdd7d0e964d4cde7e1b412b1b9.png"},24549:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Example2-6a5a1beb78bc98d9546a7f2771d6f091.png"}}]);