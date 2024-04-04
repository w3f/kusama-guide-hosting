(self.webpackChunk=self.webpackChunk||[]).push([[8191],{47940:(e,t,o)=>{"use strict";o.d(t,{Z:()=>u});var a=o(74165),n=o(15861),r=o(67294),i=o(87152),s=o(9712),l=o(67425);function c(e,t,o){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)((0,a.Z)().mark((function e(t,o,n){var r,l,c,p,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return c=new i.U(r),e.next=21,s.G.create({provider:c});case 21:p=e.sent,(d=o.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=p.toString(),e.abrupt("break",35);case 29:return e.next=31,p();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+o);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,o,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,o,a);break;case"precise":(0,l.Precise)(e,o,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,o);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,o=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,p=(0,r.useState)(""),u=p[0],h=p[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==l?d(i.toString(),l,t,h):h(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,o,h);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(n,l,t,h):h(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(s){console.log(s)}}}),[]),u}},67425:e=>{var t="polkadot",o="kusama",a="statemine",n="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,i,s){var l=void 0;if(i===t||i===n)l=3;else{if(i!==o&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/r[i].precision)?e/r[i].precision+" "+r[i].symbol:(e/r[i].precision).toFixed(l)+" "+r[i].symbol).toString())},Precise:function(e,t,o){o(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,i){var s=void 0;if(i===t||i===n)s=1;else{if(i!==o&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}r((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},56870:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=(o(47940),["components"]),s={id:"learn-guides-accounts-proxy",title:"Polkadot-JS Guides about Proxy Accounts",sidebar_label:"Proxy Guides",description:"Polkadot-JS Guides about Proxy Accounts",keyword:["guides","polkadot-js","accounts","proxy"],slug:"../learn-guides-accounts-proxy"},l=void 0,c={unversionedId:"learn/learn-guides-accounts-proxy",id:"learn/learn-guides-accounts-proxy",title:"Polkadot-JS Guides about Proxy Accounts",description:"Polkadot-JS Guides about Proxy Accounts",source:"@site/../docs/learn/learn-guides-accounts-proxy.md",sourceDirName:"learn",slug:"/learn-guides-accounts-proxy",permalink:"/docs/learn-guides-accounts-proxy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1711551545,formattedLastUpdatedAt:"Mar 27, 2024",frontMatter:{id:"learn-guides-accounts-proxy",title:"Polkadot-JS Guides about Proxy Accounts",sidebar_label:"Proxy Guides",description:"Polkadot-JS Guides about Proxy Accounts",keyword:["guides","polkadot-js","accounts","proxy"],slug:"../learn-guides-accounts-proxy"},sidebar:"docs",previous:{title:"Multisig Guides",permalink:"/docs/learn-guides-accounts-multisig"},next:{title:"Pure Proxy Guides",permalink:"/docs/learn-guides-accounts-proxy-pure"}},p={},d=[{value:"Creating Proxy with Polkadot-JS",id:"creating-proxy-with-polkadot-js",level:2},{value:"Removing Proxy with Polkadot-JS",id:"removing-proxy-with-polkadot-js",level:2},{value:"View your Proxy on Polkadot-JS",id:"view-your-proxy-on-polkadot-js",level:2},{value:"Set-up and Use of Time-delayed Proxies with Polkadot-JS",id:"set-up-and-use-of-time-delayed-proxies-with-polkadot-js",level:2},{value:"Proxy calls",id:"proxy-calls",level:2},{value:"Nested Proxy Calls",id:"nested-proxy-calls",level:3}],u={toc:d},h="wrapper";function y(e){var t=e.components,s=(0,n.Z)(e,i);return(0,r.kt)(h,(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"sticky",style:{zIndex:1}},(0,r.kt)("br",null),(0,r.kt)("p",null,"Polkadot-JS is for developers and power users only. If you need help using the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS UI"),", you can contact the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},"Polkadot Support Team"),". For more user-friendly tools\nsee the ",(0,r.kt)("a",{parentName:"p",href:"./wallets-index"},"wallets"),", ",(0,r.kt)("a",{parentName:"p",href:"./apps-index"},"apps")," and ",(0,r.kt)("a",{parentName:"p",href:"./dashboards-index"},"dashboard")," pages.")),(0,r.kt)("p",null,"Proxies allow users to use an account (it can be in cold storage or a hot wallet) less frequently\nbut actively participate in the network with the weight of the tokens in that account. Proxies are\nallowed to perform a limited amount of actions related to specific\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/reference/frame-pallets/"},"substrate pallets")," on behalf of another\naccount. The video below contains more information about using proxies."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=1tcygkq52tU"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/1tcygkq52tU/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=1tcygkq52tU"},"Proxy Accounts Tutorial")))),(0,r.kt)("admonition",{title:"Know how to check the calls and pallets accessible by proxies",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"For the latest information on the calls and pallets that can be fully accessed by proxies, check the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/153543b0c8c582e73f520e5c08cbe33bddfb5f69/runtime/polkadot/src/lib.rs#L1158"},"source code in the runtime folder"),"\non the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk"},"Polkadot repository"))),(0,r.kt)("h2",{id:"creating-proxy-with-polkadot-js"},"Creating Proxy with Polkadot-JS"),(0,r.kt)("p",null,"To create a proxy account with Polkadot-JS read\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182179-how-to-create-a-proxy-account"},"this support article"),"."),(0,r.kt)("h2",{id:"removing-proxy-with-polkadot-js"},"Removing Proxy with Polkadot-JS"),(0,r.kt)("p",null,'Read the section "Removing Proxies" on\n',(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182179-how-to-create-a-proxy-account"},"this support page"),"\nto learn how to remove proxies."),(0,r.kt)("h2",{id:"view-your-proxy-on-polkadot-js"},"View your Proxy on Polkadot-JS"),(0,r.kt)("p",null,"To view your proxy, just go on the ",(0,r.kt)("em",{parentName:"p"},"Accounts")," menu in the Polkadot-JS UI, next to the proxied\naccount you will notice a blue icon. Hover on it, and you will see ",(0,r.kt)("em",{parentName:"p"},"Proxy overview"),". Click on it and\nyou will be presented with a list of all proxies for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot_view_proxies",src:o(42273).Z,width:"1842",height:"120"})),(0,r.kt)("p",null,"Additionally, you can head over to the ",(0,r.kt)("em",{parentName:"p"},"Chain State")," tab (underneath the ",(0,r.kt)("em",{parentName:"p"},"Developer")," menu) on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate"},"Polkadot-JS Apps"),". If\nyou've created your proxy on a Kusama\naccount, it is required to change your network accordingly using the top left navigation button. On\nthis page, the proxy pallet should be selected, returning the announcements and proxies functions.\nThe proxies function will allow you to see your created proxies for either one account or for all\naccounts (using the toggle will enable this). Proxy announcements are what time lock proxies do to\nannounce they are going to conduct an action."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkadot_view_proxies_dev",src:o(28902).Z,width:"1871",height:"820"})),(0,r.kt)("h2",{id:"set-up-and-use-of-time-delayed-proxies-with-polkadot-js"},"Set-up and Use of Time-delayed Proxies with Polkadot-JS"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/3L7Vu2SX0PE"},"this video tutorial")," to learn how you can setup and use\ntime-delayed proxies. The video goes through the example below.")),(0,r.kt)("p",null,"Initially the time time-delayed proxy announces its intended action using the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.announce"),"\nextrinsic and will wait for the number of blocks defined in the delay time before executing it. The\nproxy will include the hash of the intended function call in the announcement. Within this time\nwindow, the intended action may be canceled by accounts that control the proxy. This can be done by\nthe proxy itself using the ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.removeAnnouncement")," extrinsic or by the proxied account using the\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.rejectAnnouncement")," extrinsic. Now we can use proxies knowing that any malicious actions\ncan be noticed and reverted within a delay period. After the time-delay, the proxy can use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxyAnnounced")," extrinsic to execute the announced call."),(0,r.kt)("p",null,"Let's take for example the stash account Eleanor setting Bob as a time-delayed staking proxy. In\nthis way, if Bob submits an extrinsic to change the reward destination, such extrinsic can be\nrejected by Eleanor. This implies that Eleanor monitors Bob, and that within the time-delay she can\nspot the announced extrinsic. Eleanor can check all the proxy call announcements made by her\naccount's proxies on-chain. On Polkadot-JS UI, go to Developer > Storage > Proxy > Announcements to\ncheck the hashes for the calls made by the proxy accounts and the block height at which they are\nenabled for execution."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"time-delayed proxies",src:o(54481).Z,width:"1920",height:"800"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you try to use ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxyAnnounced"),' to execute the call within the time-delay window you will\nget an error "Proxy unannounced" since the announcement will be done after the time delay. Also note\nthat regular ',(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," calls do not work with time-delayed proxies, you need to announce the\ncall first and then execute the announced call on a separate transaction.")),(0,r.kt)("h2",{id:"proxy-calls"},"Proxy calls"),(0,r.kt)("p",null,"Proxy calls are used by proxies to call proxied accounts. These calls are important for example in\nthe case of ",(0,r.kt)("em",{parentName:"p"},"pure")," proxies, as any attempt to sign transactions with a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy will fail. For\nmore details see the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-proxies-pure"},"dedicated section about pure proxies"),"."),(0,r.kt)("h3",{id:"nested-proxy-calls"},"Nested Proxy Calls"),(0,r.kt)("p",null,"As the term suggests, nested proxy calls are proxy calls within proxy calls. Such calls are needed\nif there are proxied accounts that are proxies themselves. In the example diagram below, Alice has a\nstash account that has a ",(0,r.kt)("em",{parentName:"p"},"staking")," proxy account, P-C. P-C is a ",(0,r.kt)("em",{parentName:"p"},"pure")," proxy, a proxied account\noriginally spawned by Charly that is now an ",(0,r.kt)("em",{parentName:"p"},"any")," proxy of P-C and signs everything on its behalf."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nested proxy calls",src:o(51050).Z,width:"1920",height:"800"})),(0,r.kt)("p",null,"For example, to bond more funds, Charly needs to submit a ",(0,r.kt)("inlineCode",{parentName:"p"},"prox.proxy")," extrinsic to P-C, which in\nturn submits a ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic to Alice including for example a ",(0,r.kt)("inlineCode",{parentName:"p"},"staking.bondExtra"),"\nextrinsic, specifying the number of extra tokens that need to be bounded. If Charly wants to leave,\na new account can take his place as any proxy (before Charly leaves!). There is no need to change\nthe staking proxy account. Also, Alice is the only one who can remove P-C as a staking proxy, and\nP-C can only perform staking-related tasks. For example, P-C cannot send funds out from Alice's\naccount."),(0,r.kt)("p",null,"Proxy calls can be done using the Extrinsic Tab in the Polkadot-JS UI. Nested proxy calls can be\ndone by calling each ",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic separately, or in some cases by just calling the last\n",(0,r.kt)("inlineCode",{parentName:"p"},"proxy.proxy")," extrinsic. In the diagram above, submitting the proxy call from P-C to Alice will\nautomatically ask for Charly's signature. Thus one proxy call will trigger the second one because\nCharly's is the only ",(0,r.kt)("em",{parentName:"p"},"any")," proxy of P-C, and P-C cannot sign anything. While if we want to use Bob's\naccount we will need to submit all three proxy calls."))}y.isMDXComponent=!0},51050:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/nested-proxy-calls-65bdc70624a0b21a087da639743c710d.png"},42273:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/polkadot_view_proxies-5c65a3f24dc6902f1734de8887dd5696.png"},28902:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/polkadot_view_proxies_dev-c7f33e592f2c37cade0cc3d37e356aef.png"},54481:(e,t,o)=>{"use strict";o.d(t,{Z:()=>a});const a=o.p+"assets/images/time-delayed-proxies-8b85523c3caac25b32d1d884af71c048.png"},46601:()=>{}}]);