(self.webpackChunk=self.webpackChunk||[]).push([[3978],{47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(74165),o=a(15861),r=a(67294),i=a(87152),s=a(14741),p=a(67425);function u(e,t,a){return l.apply(this,arguments)}function l(){return(l=(0,o.Z)((0,n.Z)().mark((function e(t,a,o){var r,p,u,l,c;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,p=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return u=new i.U(r),e.next=21,s.G.create({provider:u});case 21:l=e.sent,(c=a.split(".")).forEach((function(e){e in l&&(l=l[e])})),e.t1=c[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return p=l.toString(),e.abrupt("break",35);case 29:return e.next=31,l();case 31:return p=(p=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return e.abrupt("return",p);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,a,n){switch(t){case"humanReadable":(0,p.HumanReadable)(e,a,n);break;case"precise":(0,p.Precise)(e,a,n);break;case"blocksToDays":(0,p.BlocksToDays)(e,n);break;case"erasToDays":(0,p.ErasToDays)(e,n,a);break;case"percentage":(0,p.Percentage)(e,n);break;case"permillToPercent":(0,p.PermillToPercent)(e,n);break;case"arrayLength":(0,p.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,i=e.defaultValue,s=e.filter,p=void 0===s?void 0:s,l=(0,r.useState)(""),d=l[0],m=l[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==p?c(i.toString(),p,t,m):m(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,o.Z)((0,n.Z)().mark((function e(){var o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,a,m);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==p?c(o,p,t,m):m(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),d}},67425:e=>{var t="polkadot",a="kusama",n="statemine",o="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,i,s){var p=void 0;if(i===t||i===o)p=3;else{if(i!==a&&i!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=6}e=parseFloat(e),s((e=Number.isInteger(e/r[i].precision)?e/r[i].precision+" "+r[i].symbol:(e/r[i].precision).toFixed(p)+" "+r[i].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,i){var s=void 0;if(i===t||i===o)s=1;else{if(i!==a&&i!==n)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}r((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},82651:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=(a(47940),["components"]),s={id:"learn-guides-accounts-proxy-pure",title:"Polkadot-JS Guides about Pure Proxy Accounts",sidebar_label:"Pure Proxy Guides",description:"Polkadot-JS Guides about Pure Proxy Accounts",keyword:["guides","polkadot-js","accounts","proxy","pure proxy","anonymous proxy"],slug:"../learn-guides-accounts-proxy-pure"},p=void 0,u={unversionedId:"learn/learn-guides-accounts-proxy-pure",id:"learn/learn-guides-accounts-proxy-pure",title:"Polkadot-JS Guides about Pure Proxy Accounts",description:"Polkadot-JS Guides about Pure Proxy Accounts",source:"@site/../docs/learn/learn-guides-accounts-proxy-pure.md",sourceDirName:"learn",slug:"/learn-guides-accounts-proxy-pure",permalink:"/docs/learn-guides-accounts-proxy-pure",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1711019259,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{id:"learn-guides-accounts-proxy-pure",title:"Polkadot-JS Guides about Pure Proxy Accounts",sidebar_label:"Pure Proxy Guides",description:"Polkadot-JS Guides about Pure Proxy Accounts",keyword:["guides","polkadot-js","accounts","proxy","pure proxy","anonymous proxy"],slug:"../learn-guides-accounts-proxy-pure"},sidebar:"docs",previous:{title:"Proxy Guides",permalink:"/docs/learn-guides-accounts-proxy"},next:{title:"Transfer Guides",permalink:"/docs/learn-guides-transfers"}},l={},c=[{value:"Create and Remove Pure Proxies with Polkadot-JS",id:"create-and-remove-pure-proxies-with-polkadot-js",level:2},{value:"Advanced Account Management with Pure Proxies",id:"advanced-account-management-with-pure-proxies",level:2},{value:"Pure Proxies and Multisigs",id:"pure-proxies-and-multisigs",level:2},{value:"Scenario One: One Pure Proxy within a Multisig",id:"scenario-one-one-pure-proxy-within-a-multisig",level:3},{value:"Scenario Two: Multisig made of Pure Proxies",id:"scenario-two-multisig-made-of-pure-proxies",level:3},{value:"Scenario Three: Multisig controlling a Pure Proxy",id:"scenario-three-multisig-controlling-a-pure-proxy",level:3}],d={toc:c},m="wrapper";function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,r.kt)(m,(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"sticky",style:{zIndex:1}},(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS")," is for developers and power users only. For more\nuser-friendly tools see the ",(0,r.kt)("a",{parentName:"p",href:"./wallets-index"},"wallets"),", ",(0,r.kt)("a",{parentName:"p",href:"./apps-index"},"apps")," and\n",(0,r.kt)("a",{parentName:"p",href:"./dashboards-index"},"dashboard")," pages.")),(0,r.kt)("admonition",{title:"The Account Tab in the Polkadot-JS UI cannot handle complex proxy setups",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The Accounts Tab in the Polkadot-JS UI cannot handle complex proxy setups (e.g. a proxy -> multisig\n-> a pure proxy which is part of another multisig). These complex setups must be done using the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/extrinsics"},"Extrinsics Tab")," directly."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"We recommend to use the ",(0,r.kt)("a",{parentName:"strong",href:"/docs/learn-DOT#getting-tokens-on-the-westend-testnet"},"Westend Testnet")," if\nyou are testing features for the first time.")," By performing the complex proxy setups on the\ntestnet, you can comfortably replicate the procedure on the main networks.")),(0,r.kt)("admonition",{title:"Risk of loss of funds",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Read carefully the text below and before performing any action using anonymous proxies on\nKusama, experiment on the Westend testnet.")),(0,r.kt)("h2",{id:"create-and-remove-pure-proxies-with-polkadot-js"},"Create and Remove Pure Proxies with Polkadot-JS"),(0,r.kt)("p",null,"To create a ",(0,r.kt)("strong",{parentName:"p"},"pure proxy")," see\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182196"},"this support article"),", or\nwatch ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T443RcCYP24"},"this technical explainer video"),"."),(0,r.kt)("admonition",{title:"Removing Pure Proxies",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The procedure for removing a ",(0,r.kt)("em",{parentName:"p"},"pure"),' proxy is different from the one used to remove other proxies.\nVisit the section "Removing an Anonymous Proxy" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182196"},"this support article"),", or\nwatch ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=T443RcCYP24"},"this technical explainer video"),".")),(0,r.kt)("p",null,"Learn more about pure proxies from our\n",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YkYApbhU3i0"},"technical explainer video"),"."),(0,r.kt)("h2",{id:"advanced-account-management-with-pure-proxies"},"Advanced Account Management with Pure Proxies"),(0,r.kt)("admonition",{title:"Walk-through tutorial video of Account Management",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=YkYApbhU3i0"},"this video tutorial")," that goes through the\nexample below. The tutorial requires some familiarity with the Extrinsic Tab of the Polkadot-JS UI.")),(0,r.kt)("p",null,"Let's take for example 3 accounts belonging to Charlie, Dan and Eleanor working for Company X.\nCharlie holds funds belonging to Company X, but he wants to leave the company and transfer the\neconomic responsibility to Eleanor. Dan is a staking proxy of Charlie."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Without ",(0,r.kt)("em",{parentName:"strong"},"Pure")," Proxy"),", Charlie must (see ",(0,r.kt)("em",{parentName:"p"},"left")," side of the Figure below):"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Remove Dan as a staking proxy, this step requires 1 signature"),(0,r.kt)("li",{parentName:"ul"},"Stop nominating and unbound all funds , this step requires 2 signatures"),(0,r.kt)("li",{parentName:"ul"},"Transfer the funds to Eleanor, this step requires 1 signature")),(0,r.kt)("p",null,"Then Eleanor adds Dan as a staking proxy (1 signature). The whole process requires 5 signatures.\nHere we are presenting a simple example, in fact, with multi-signature accounts and multiple proxies\nthe procedure would be more time-consuming and labor-intensive."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"why anonymous proxies",src:a(9518).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"With ",(0,r.kt)("em",{parentName:"strong"},"Pure")," Proxy")," (see ",(0,r.kt)("em",{parentName:"p"},"right")," side of the Figure above), Charlie must add Eleanor as ",(0,r.kt)("em",{parentName:"p"},"any"),"\nproxy of the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, and remove himself (or Eleanor can remove him). The process requires just\n2 signatures (1 signature to add the new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy and 1 signature the remove the old one). The\nfunds remain in the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, and it is not necessary to stop nominating or unbond funds. Also,\nany proxy relationships with the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy stay in place. Thus, if we use the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, with\nan increasing number of proxies we will always have to sign twice (not necessarily true in\nmulti-signature accounts). While if we are not using the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, the more the proxies the more\nsignatures we need to detach them from the old stash and attach them to the new stash (see Figure\nbelow)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"anon vs stash plot",src:a(78618).Z,width:"1920",height:"800"})),(0,r.kt)("h2",{id:"pure-proxies-and-multisigs"},"Pure Proxies and Multisigs"),(0,r.kt)("h3",{id:"scenario-one-one-pure-proxy-within-a-multisig"},"Scenario One: One Pure Proxy within a Multisig"),(0,r.kt)("admonition",{title:"Walk-through tutorial video",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=iGRoGstB_pQ"},"this video tutorial")," that goes through\nthis scenario. The tutorial requires some familiarity with the Extrinsic Tab of the Polkadot-JS UI.")),(0,r.kt)("p",null,"It is possible to put a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy within a multisig, and then transactions will be signed by the\n",(0,r.kt)("em",{parentName:"p"},"any")," proxy on behalf of the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy (proxied account). Let's take for example the diagram\nbelow. Alice, Bob and Anon are part of the multisig ABC, a multisig account with threshold 2. P-C is\na ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy spawned by Charlie, who now acts as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy and thus signs anything on behalf of\nP-C. The ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy cannot sign directly because it does not have a private key. So, for example,\nto send funds from the multisig to Dan, Charly needs to submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic to P-C,\nwhich in turn will submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic to ABC containing the call data for the\n",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic about the transfer of some funds from ABC to Dan. Alice can\nthen approve the transfer by submitting a ",(0,r.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic also containing the call data\nfor the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic about the transfer of some funds from ABC to Dan."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multisig with one anon",src:a(19372).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"If Charly wants to leave the multisig, a new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy can be added to P-C and Charly can be\nremoved (by himself or by the new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy). Note that the multisig also contains Bob that in\nthis specific example does not do anything."),(0,r.kt)("admonition",{title:"Proxy calls",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"To use a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy within a multisig you need to use the Extrinsic Tab and generate a\n",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic. If you try to sign a multisig transaction using the ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy you will\nbe prompted with a warning. Remember, you cannot sign something directly if you do not have a\nprivate key.")),(0,r.kt)("h3",{id:"scenario-two-multisig-made-of-pure-proxies"},"Scenario Two: Multisig made of Pure Proxies"),(0,r.kt)("admonition",{title:"Walk-through Tutorial Video",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=F82C3zDNJyk"},"this video tutorial")," that goes through\nthis scenario. The tutorial requires some familiarity with the Extrinsic Tab of the Polkadot-JS UI.")),(0,r.kt)("p",null,"The diagram below shows a multisig that is made only with ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies (P-A, P-B and P-C). In this\nsituation Alice, Bob or Charly can leave the multisig at any time without the requirement of\ncreating a new multisig. If for example, Bob leaves the multisig the procedure will require somebody\nelse to be added as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy to P-B, and then Bob can remove himself (or the new ",(0,r.kt)("em",{parentName:"p"},"any")," proxy can\nremove Bob)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multisig with anons",src:a(58047).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"In the diagram above, Alice submits the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic to P-A, which in turn submits the\n",(0,r.kt)("inlineCode",{parentName:"p"},"multisig.asMulti")," extrinsic containing the ",(0,r.kt)("inlineCode",{parentName:"p"},"balances.transferKeepAlive")," extrinsic about the\ntransfer of some tokens from ABC to Dan. Then, Charly does the same to confirm the transaction. Note\nthat Charly will need to pay for some weight, for the computation that is necessary to execute the\ntransaction."),(0,r.kt)("h3",{id:"scenario-three-multisig-controlling-a-pure-proxy"},"Scenario Three: Multisig controlling a Pure Proxy"),(0,r.kt)("p",null,"This setup is used by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/multisig-apps#multix"},"MultiX")," tool."),(0,r.kt)("p",null,"After its creation, a multi-signature account creates a pure proxy that becomes the proxied account.\nThe multi-signature account behaves as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy of the pure. If signatories of the\nmulti-signature account change, a new multisig can be created, assigned as ",(0,r.kt)("em",{parentName:"p"},"any")," proxy of the pure,\nand then the old multisig can be removed as a proxy."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multisig with pure",src:a(5348).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"Compared to ",(0,r.kt)("a",{parentName:"p",href:"#scenario-two-multisig-made-of-pure-proxies"},"Scenario Two"),", signatories do not need to\ncreate pure proxies here. Multisig controlling a Pure Proxy is a more practical solution, where the\nsignatories, number of signatories and/or the threshold can be changed, which changes the multisig\naddress but does not impact the pure proxy address. In Scenario Two, if signatories behind the pure\nproxies change, the address of the multisig stays the same. However, changing the number of\nsignatories and threshold would not be possible."))}h.isMDXComponent=!0},78618:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/anon-vs-stash-plot-fa8f730710dbf5cbec2d7db43d5d962d.png"},58047:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/multisig-with-anons-209a0f481e6a13ed943a952be07e1a75.png"},19372:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/multisig-with-one-anon-b8bb0a5183fbdc1d1809d4cd58489ab4.png"},5348:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/multisig-with-pure-684efe47eba1ab52cd41218daf674357.png"},9518:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});const n=a.p+"assets/images/why-anon-proxy-48fc32ddd2da9a5e9342554c68372d98.png"},46601:()=>{}}]);