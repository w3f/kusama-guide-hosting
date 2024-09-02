"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2409],{15680:(e,a,t)=>{t.d(a,{xA:()=>p,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},p=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},g=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=n,m=d["".concat(l,".").concat(g)]||d[g]||h[g]||i;return t?r.createElement(m,o(o({ref:a},p),{},{components:t})):r.createElement(m,o({ref:a},p))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},89011:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=t(58168),n=t(98587),i=(t(96540),t(15680)),o=["components"],s={id:"learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",sidebar_label:"Coretime for Parachains",description:"Agile Coretime from Parachains perspective",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../learn-guides-coretime-parachains"},l=void 0,c={unversionedId:"learn/learn-guides-coretime-parachains",id:"learn/learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",description:"Agile Coretime from Parachains perspective",source:"@site/../docs/learn/learn-guides-coretime-parachains.md",sourceDirName:"learn",slug:"/learn-guides-coretime-parachains",permalink:"/docs/learn-guides-coretime-parachains",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725286484,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"learn-guides-coretime-parachains",title:"Agile Coretime for Parachains",sidebar_label:"Coretime for Parachains",description:"Agile Coretime from Parachains perspective",keywords:["coretime","blockspace","parathread","parachain","cores"],slug:"../learn-guides-coretime-parachains"},sidebar:"docs",previous:{title:"Coretime Marketplaces",permalink:"/docs/learn-guides-coretime-marketplaces"},next:{title:"Advanced Coretime Guides",permalink:"/docs/learn-agile-coretime-getting-started"}},p={},d=[{value:"Reserve ParaID",id:"reserve-paraid",level:2},{value:"Register Parachain State and Code",id:"register-parachain-state-and-code",level:2},{value:"Run Parachain Collator",id:"run-parachain-collator",level:2},{value:"Run a Parachain with Bulk Coretime",id:"run-a-parachain-with-bulk-coretime",level:2},{value:"Run a Parachain with On-demand Coretime",id:"run-a-parachain-with-on-demand-coretime",level:2}],h={toc:d},g="wrapper";function m(e){var a=e.components,s=(0,n.A)(e,o);return(0,i.yg)(g,(0,r.A)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"If you aren't sure what Agile Coretime is, be sure to read the\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime"},"introduction"),",\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime#agile-coretime-terminology"},"terminology"),", and\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime#agile-coretime-faq"},"FAQ"),".")),(0,i.yg)("p",null,"The landscape for parachains on Kusama\nchanges with the rollout of ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime"},"Agile Coretime"),". With\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain auctions")," being phased out in favor of direct\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime#coretime"},"coretime")," sales, the existing parachains on the relaychain and\nthe prospective parachains are presented with the following scenarios:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Migrating")," from a legacy parachain lease into a\n",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-agile-coretime#bulk-coretime"},"bulk coretime")," model"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Starting")," with bulk coretime model from scratch"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Running"),' a parachain with on-demand coretime purchases ("pay as you go")')),(0,i.yg)("p",null,"The parachain lease auctions will stop on-chain with the enactment of the\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/runtimes/releases/tag/v1.2.0"},"runtime upgrade 1.2.0"),", and the\nexisting leases will be migrated to bulk coretime automatically. Leases that are yet to be started\nwill be canceled and the locked KSM",(0,i.yg)("br",{parentName:"p"}),"\n","will be refunded. The existing parachains benefit from\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.lastic.xyz/coretime/renewals.html"},"coretime renewals")," which allows for the continued\nassignment of bulk coretime for a core without going through the regular purchasing process."),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The tutorials below assume that you have already developed the parachain runtime and a fully\nconfigured parachain ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-collator"},"collator")," for the target relay chain using the Polkadot\nSDK.")),(0,i.yg)("p",null,"For the tutorials below,\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/6f3d890ed35bfdee3e3f7d59018345635a62d1cd/polkadot/parachain/test-parachains/adder"},"the adder test parachain"),"\non the Polkadot SDK has been used. To compile the ",(0,i.yg)("inlineCode",{parentName:"p"},"adder-collator"),", run the command below in the\n",(0,i.yg)("em",{parentName:"p"},"root")," of the Polkadot SDK repository. You must have ",(0,i.yg)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"Rust"),"\nand its associated tooling installed before following along."),(0,i.yg)("p",null,"Ensure the Polkadot SDK is cloned, and you are within the root directory (",(0,i.yg)("inlineCode",{parentName:"p"},"cd polkadot-sdk"),")"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"cargo build -r -p test-parachain-adder-collator\n")),(0,i.yg)("p",null,"After the test parachain collator node is successfully compiled, export its genesis state and the\ncode using the following commands. If the export succeeds, these two files should appear in the\nPolkadot-SDK repository."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"./target/release/adder-collator export-genesis-state genesis\n")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"./target/release/adder-collator export-genesis-wasm genesis-wasm\n")),(0,i.yg)("h2",{id:"reserve-paraid"},"Reserve ParaID"),(0,i.yg)("p",null,"Reserving a ",(0,i.yg)("inlineCode",{parentName:"p"},"ParaID")," requires a\n",(0,i.yg)("a",{parentName:"p",href:"/docs/chain-state-values#parachain-id-registration-deposit"},"deposit"),". The first step is to\nregister a ",(0,i.yg)("a",{parentName:"p",href:"/docs/glossary#paraid"},(0,i.yg)("inlineCode",{parentName:"a"},"ParaID"))," for the parachain. This can be done through\nPolkadot-JS UI by navigating to\n",(0,i.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/parachains/parathreads"},"Network > Parachains > Parathreads")," and\nclicking on ParaID button. Ensure that you have sufficient tokens to reserve the displayed ",(0,i.yg)("inlineCode",{parentName:"p"},"ParaID"),"\nsuccessfully."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-reserve-paraID",src:t(74180).A,width:"2161",height:"713"})),(0,i.yg)("h2",{id:"register-parachain-state-and-code"},"Register Parachain State and Code"),(0,i.yg)("admonition",{title:"Deposit requirements for registering a parachain",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Due to the reasons ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/pull/2372"},"discussed here"),", instead\nof the usual per-byte method of charging for storing validation and genesis code upon registration,\nthe cost is fixed to the maximum possible code size (",(0,i.yg)("inlineCode",{parentName:"p"},"MAX_CODE_SIZE"),"), regardless of the actual\nsize."),(0,i.yg)("p",{parentName:"admonition"},"On ",(0,i.yg)("strong",{parentName:"p"},"Kusama"),", the deposit required to register a parachain is ",(0,i.yg)("strong",{parentName:"p"},"~1100 KSM")," and an estimated fee of\n",(0,i.yg)("strong",{parentName:"p"},"~5 KSM"),"."),(0,i.yg)("p",{parentName:"admonition"},"On ",(0,i.yg)("strong",{parentName:"p"},"Polkadot"),", the deposit required to register a parachain is ",(0,i.yg)("strong",{parentName:"p"},"~3300 DOT")," and an estimated fee\nof ",(0,i.yg)("strong",{parentName:"p"},"~150 DOT"),"."),(0,i.yg)("p",{parentName:"admonition"},"It is possible to deregister the parachain and withdraw the deposit if the parachain has not\nproduced any blocks. If the parachain produced blocks, then the parachain can only be deregistered\nthrough the relay chain's governance.")),(0,i.yg)("p",null,"The next step is to register the parachain's genesis wasm and state, which you should have generated\nearlier. Note that for this example, we are using ",(0,i.yg)("inlineCode",{parentName:"p"},"adder-collator"),", but in theory a custom runtime\ncompiled from a\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/88a2f360238787bf5256cfdd14b40c08f519b38e/templates/parachain"},"template"),"\nwould work as well."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-register-parathread",src:t(13070).A,width:"2140",height:"978"})),(0,i.yg)("p",null,"After successful registration, the parachain starts onboarding as a parathread."),(0,i.yg)("h2",{id:"run-parachain-collator"},"Run Parachain Collator"),(0,i.yg)("p",null,"While the parachain is onboarding, start syncing the ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-collator"},"collator")," using the\nfollowing command to rapidly sync with the specified relay chain."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"./target/release/adder-collator --parachain-id= $ParaID --chain=rococo --sync fast-unsafe\n")),(0,i.yg)("h2",{id:"run-a-parachain-with-bulk-coretime"},"Run a Parachain with Bulk Coretime"),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Note that we have two options: ",(0,i.yg)("strong",{parentName:"p"},"bulk coretime")," and ",(0,i.yg)("strong",{parentName:"p"},"on-demand coretime"),". Bulk coretime is\npurchased via the ",(0,i.yg)("inlineCode",{parentName:"p"},"broker")," pallet, which is on the respective Coretime system parachain. On-demand\ncoretime is ordered via the ",(0,i.yg)("inlineCode",{parentName:"p"},"OnDemandAssignment")," pallet/module, which is located on the respective\nrelay chain.")),(0,i.yg)("p",null,"You can purchase bulk coretime on ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-guides-coretime-marketplaces"},"Coretime chain")," and\nassign the purchased core to the registered ",(0,i.yg)("inlineCode",{parentName:"p"},"ParaID"),". The snapshot below is from\n",(0,i.yg)("a",{parentName:"p",href:"https://test.lastic.xyz/"},"Lastic")," interface."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-bulk-assign-lastic",src:t(64653).A,width:"1322",height:"1033"})),(0,i.yg)("p",null,"After successful assignment of the core, the ",(0,i.yg)("inlineCode",{parentName:"p"},"adder-collator")," logs show new collations at regular\nintervals, gradually incrementing the state by ",(0,i.yg)("inlineCode",{parentName:"p"},"2"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-collation-bulk",src:t(57502).A,width:"1777",height:"696"})),(0,i.yg)("h2",{id:"run-a-parachain-with-on-demand-coretime"},"Run a Parachain with On-demand Coretime"),(0,i.yg)("p",null,"After the collator node is fully synced with the relay chain, navigate to\n",(0,i.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Developer > Extrinsics")," on the relay chain and issue\n",(0,i.yg)("inlineCode",{parentName:"p"},"onDemandAssignmentProvider.placeOrderAllowDeath")," extrinsic from the account that registered the\n",(0,i.yg)("inlineCode",{parentName:"p"},"ParaID")," by specifying sufficient ",(0,i.yg)("inlineCode",{parentName:"p"},"maxAmount"),"for the transaction to go through successfully."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-ondemand-assignment",src:t(4265).A,width:"2873",height:"1394"})),(0,i.yg)("admonition",{type:"info"},(0,i.yg)("p",{parentName:"admonition"},"There are two extrinsics which allow you to place orders for on-demand coretime:"),(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"onDemandAssignmentProvider.placeOrderAllowDeath")," will\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"reap")," the account once the provided funds\nrun out.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"onDemandAssignmentProvider.placeOrderKeepAlive")," includes a check which will ",(0,i.yg)("strong",{parentName:"p"},"not")," reap the\naccount if the provided funds will run out, ensuring the account is kept alive.")))),(0,i.yg)("p",null,"With each successful on-demand extrinsic, the parachain head changes (you may have to zoom out on\nthe browser for parachain head details to show up on Polkadot-JS UI)."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-ondemand-parahead",src:t(68806).A,width:"1435",height:"319"})),(0,i.yg)("p",null,"The successful collation can also be verified in the parachain collator logs. It can be noticed that\nwith each parachain block, the state of ",(0,i.yg)("inlineCode",{parentName:"p"},"adder-collator")," is incremented by ",(0,i.yg)("inlineCode",{parentName:"p"},"2"),"."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"coretime-new-collation",src:t(82303).A,width:"1782",height:"426"})))}m.isMDXComponent=!0},13070:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/Register-Parachain-771de918d394808bfc41e9b6fd097a44.png"},57502:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/coretime-collation-bulk-d6f817e5970e0194d4d5a3dfe70959b7.png"},82303:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/coretime-create-new-collation-7da7b7b28f77f12a731dc4d84baf2e38.png"},4265:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/coretime-on-demand-assignment-098632f2c2246a688ffb1405c12e87b5.png"},68806:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/coretime-on-demand-parahead-36a2079a7b6575851931724c54415a4d.png"},74180:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/coretime-reserve-paraID-59fe64fdbcc55e6029182070bf3d416d.png"},64653:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/lastic-assign-core-bf4ebbb0f6bf5633a10a17c08f22cd79.png"}}]);