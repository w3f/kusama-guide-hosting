(self.webpackChunk=self.webpackChunk||[]).push([[2393],{63362:(e,t,o)=>{"use strict";o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=o(74848),a=o(28453),s=(o(47379),o(67141));const r={id:"learn-guides-accounts-proxy",title:"Polkadot-JS Guides about Proxy Accounts",sidebar_label:"Proxy Guides",description:"Polkadot-JS Guides about Proxy Accounts",keyword:["guides","polkadot-js","accounts","proxy"],slug:"../learn-guides-accounts-proxy"},i=void 0,c={id:"learn/learn-guides-accounts-proxy",title:"Polkadot-JS Guides about Proxy Accounts",description:"Polkadot-JS Guides about Proxy Accounts",source:"@site/../docs/learn/learn-guides-accounts-proxy.md",sourceDirName:"learn",slug:"/learn-guides-accounts-proxy",permalink:"/docs/learn-guides-accounts-proxy",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726760224e3,frontMatter:{id:"learn-guides-accounts-proxy",title:"Polkadot-JS Guides about Proxy Accounts",sidebar_label:"Proxy Guides",description:"Polkadot-JS Guides about Proxy Accounts",keyword:["guides","polkadot-js","accounts","proxy"],slug:"../learn-guides-accounts-proxy"},sidebar:"docs",previous:{title:"Multisig Guides",permalink:"/docs/learn-guides-accounts-multisig"},next:{title:"Pure Proxy Guides",permalink:"/docs/learn-guides-accounts-proxy-pure"}},l={},d=[{value:"Creating Proxy with Polkadot-JS",id:"creating-proxy-with-polkadot-js",level:2},{value:"Removing Proxy with Polkadot-JS",id:"removing-proxy-with-polkadot-js",level:2},{value:"View your Proxy on Polkadot-JS",id:"view-your-proxy-on-polkadot-js",level:2},{value:"Set-up and Use of Time-delayed Proxies with Polkadot-JS",id:"set-up-and-use-of-time-delayed-proxies-with-polkadot-js",level:2},{value:"Proxy calls",id:"proxy-calls",level:2},{value:"Nested Proxy Calls",id:"nested-proxy-calls",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.A,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](../general/polkadotjs-ui.md), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages."}),"\n",(0,n.jsxs)(t.p,{children:["Proxies allow users to use an account (it can be in cold storage or a hot wallet) less frequently\nbut actively participate in the network with the weight of the tokens in that account. Proxies are\nallowed to perform a limited amount of actions related to specific\n",(0,n.jsx)(t.a,{href:"https://docs.substrate.io/reference/frame-pallets/",children:"substrate pallets"})," on behalf of another\naccount. The videos below contain more information about using proxies."]}),"\n",(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col text--center",children:[(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=1tcygkq52tU",children:(0,n.jsx)("img",{src:"https://img.youtube.com/vi/1tcygkq52tU/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=1tcygkq52tU",children:"Proxy Accounts Tutorial"})})]}),(0,n.jsxs)("div",{className:"col text--center",children:[(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=Qv_nJVcvQr8&t=4437s",children:(0,n.jsx)("img",{src:"https://img.youtube.com/vi/Qv_nJVcvQr8/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://www.youtube.com/watch?v=Qv_nJVcvQr8&t=4437s",children:"Proxy Accounts Advanced Tutorial"})})]})]}),"\n",(0,n.jsx)(t.admonition,{title:"Know how to check the calls and pallets accessible by proxies",type:"tip",children:(0,n.jsxs)(t.p,{children:["For the latest information on the calls and pallets that can be fully accessed by proxies, check the\n",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/blob/153543b0c8c582e73f520e5c08cbe33bddfb5f69/runtime/polkadot/src/lib.rs#L1158",children:"source code in the runtime folder"}),"\non the ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk",children:"Polkadot repository"})]})}),"\n",(0,n.jsx)(t.h2,{id:"creating-proxy-with-polkadot-js",children:"Creating Proxy with Polkadot-JS"}),"\n",(0,n.jsxs)(t.p,{children:["To create a proxy account with Polkadot-JS read\n",(0,n.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000182179-how-to-create-a-proxy-account",children:"this support article"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"removing-proxy-with-polkadot-js",children:"Removing Proxy with Polkadot-JS"}),"\n",(0,n.jsxs)(t.p,{children:['Read the section "Removing Proxies" on\n',(0,n.jsx)(t.a,{href:"https://support.polkadot.network/support/solutions/articles/65000182179-how-to-create-a-proxy-account",children:"this support page"}),"\nto learn how to remove proxies."]}),"\n",(0,n.jsx)(t.h2,{id:"view-your-proxy-on-polkadot-js",children:"View your Proxy on Polkadot-JS"}),"\n",(0,n.jsxs)(t.p,{children:["To view your proxy, just go on the ",(0,n.jsx)(t.em,{children:"Accounts"})," menu in the Polkadot-JS UI, next to the proxied\naccount you will notice a blue icon. Hover on it, and you will see ",(0,n.jsx)(t.em,{children:"Proxy overview"}),". Click on it and\nyou will be presented with a list of all proxies for that account."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"polkadot_view_proxies",src:o(2997).A+"",width:"1842",height:"120"})}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, you can head over to the ",(0,n.jsx)(t.em,{children:"Chain State"})," tab (underneath the ",(0,n.jsx)(t.em,{children:"Developer"})," menu) on\n",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frpc.polkadot.io#/chainstate",children:"Polkadot-JS Apps"}),". If\nyou've created your proxy on a Polkadot account, it is required to change your network accordingly\nusing the top left navigation button. On this page, the proxy pallet should be selected, returning\nthe announcements and proxies functions. The proxies function will allow you to see your created\nproxies for either one account or for all accounts (using the toggle will enable this). Proxy\nannouncements are what time lock proxies do to announce they are going to conduct an action."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"polkadot_view_proxies_dev",src:o(16809).A+"",width:"1871",height:"820"})}),"\n",(0,n.jsx)(t.h2,{id:"set-up-and-use-of-time-delayed-proxies-with-polkadot-js",children:"Set-up and Use of Time-delayed Proxies with Polkadot-JS"}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"https://youtu.be/3L7Vu2SX0PE",children:"this video tutorial"})," to learn how you can setup and use\ntime-delayed proxies. The video goes through the example below."]})}),"\n",(0,n.jsxs)(t.p,{children:["Initially the time time-delayed proxy announces its intended action using the ",(0,n.jsx)(t.code,{children:"proxy.announce"}),"\nextrinsic and will wait for the number of blocks defined in the delay time before executing it. The\nproxy will include the hash of the intended function call in the announcement. Within this time\nwindow, the intended action may be canceled by accounts that control the proxy. This can be done by\nthe proxy itself using the ",(0,n.jsx)(t.code,{children:"proxy.removeAnnouncement"})," extrinsic or by the proxied account using the\nthe ",(0,n.jsx)(t.code,{children:"proxy.rejectAnnouncement"})," extrinsic. Now we can use proxies knowing that any malicious actions\ncan be noticed and reverted within a delay period. After the time-delay, the proxy can use the\n",(0,n.jsx)(t.code,{children:"proxy.proxyAnnounced"})," extrinsic to execute the announced call."]}),"\n",(0,n.jsx)(t.p,{children:"Let's take for example the stash account Eleanor setting Bob as a time-delayed staking proxy. In\nthis way, if Bob submits an extrinsic to change the reward destination, such extrinsic can be\nrejected by Eleanor. This implies that Eleanor monitors Bob, and that within the time-delay she can\nspot the announced extrinsic. Eleanor can check all the proxy call announcements made by her\naccount's proxies on-chain. On Polkadot-JS UI, go to Developer > Storage > Proxy > Announcements to\ncheck the hashes for the calls made by the proxy accounts and the block height at which they are\nenabled for execution."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"time-delayed proxies",src:o(25225).A+"",width:"1920",height:"800"})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["If you try to use ",(0,n.jsx)(t.code,{children:"proxy.proxyAnnounced"}),' to execute the call within the time-delay window you will\nget an error "Proxy unannounced" since the announcement will be done after the time delay. Also note\nthat regular ',(0,n.jsx)(t.code,{children:"proxy.proxy"})," calls do not work with time-delayed proxies, you need to announce the\ncall first and then execute the announced call on a separate transaction."]})}),"\n",(0,n.jsx)(t.h2,{id:"proxy-calls",children:"Proxy calls"}),"\n",(0,n.jsxs)(t.p,{children:["Proxy calls are used by proxies to call proxied accounts. These calls are important for example in\nthe case of ",(0,n.jsx)(t.em,{children:"pure"})," proxies, as any attempt to sign transactions with a ",(0,n.jsx)(t.em,{children:"pure"})," proxy will fail. For\nmore details see the ",(0,n.jsx)(t.a,{href:"/docs/learn-proxies-pure",children:"dedicated section about pure proxies"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"nested-proxy-calls",children:"Nested Proxy Calls"}),"\n",(0,n.jsxs)(t.p,{children:["As the term suggests, nested proxy calls are proxy calls within proxy calls. Such calls are needed\nif there are proxied accounts that are proxies themselves. In the example diagram below, Alice has a\nstash account that has a ",(0,n.jsx)(t.em,{children:"staking"})," proxy account, P-C. P-C is a ",(0,n.jsx)(t.em,{children:"pure"})," proxy, a proxied account\noriginally spawned by Charly that is now an ",(0,n.jsx)(t.em,{children:"any"})," proxy of P-C and signs everything on its behalf."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"nested proxy calls",src:o(42030).A+"",width:"1920",height:"800"})}),"\n",(0,n.jsxs)(t.p,{children:["For example, to bond more funds, Charly needs to submit a ",(0,n.jsx)(t.code,{children:"prox.proxy"})," extrinsic to P-C, which in\nturn submits a ",(0,n.jsx)(t.code,{children:"proxy.proxy"})," extrinsic to Alice including for example a ",(0,n.jsx)(t.code,{children:"staking.bondExtra"}),"\nextrinsic, specifying the number of extra tokens that need to be bounded. If Charly wants to leave,\na new account can take his place as any proxy (before Charly leaves!). There is no need to change\nthe staking proxy account. Also, Alice is the only one who can remove P-C as a staking proxy, and\nP-C can only perform staking-related tasks. For example, P-C cannot send funds out from Alice's\naccount."]}),"\n",(0,n.jsxs)(t.p,{children:["Proxy calls can be done using the Extrinsic Tab in the Polkadot-JS UI. Nested proxy calls can be\ndone by calling each ",(0,n.jsx)(t.code,{children:"proxy.proxy"})," extrinsic separately, or in some cases by just calling the last\n",(0,n.jsx)(t.code,{children:"proxy.proxy"})," extrinsic. In the diagram above, submitting the proxy call from P-C to Alice will\nautomatically ask for Charly's signature. Thus one proxy call will trigger the second one because\nCharly's is the only ",(0,n.jsx)(t.em,{children:"any"})," proxy of P-C, and P-C cannot sign anything. While if we want to use Bob's\naccount we will need to submit all three proxy calls."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},67141:(e,t,o)=>{"use strict";o.d(t,{A:()=>s});var n=o(96540),a=o(74848);const s=function(e){var t,o=e.message,s=(0,n.useState)(!0),r=s[0],i=s[1];return(0,a.jsx)(a.Fragment,{children:r&&(0,a.jsxs)("div",{className:"message-box",children:[(0,a.jsx)("button",{className:"close-button",onClick:function(){i(!1)},children:"\u2716 "}),(0,a.jsx)("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=o,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})]})})}},47379:(e,t,o)=>{"use strict";o.d(t,{A:()=>u});var n=o(90675),a=o(10467),s=o(96540),r=o(69761),i=o(84393),c=o(11135);function l(e,t,o){return d.apply(this,arguments)}function d(){return(d=(0,a.A)((0,n.A)().mark((function e(t,o,a){var s,c,l,d,p;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,c=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return s="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return s="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==s){e.next=22;break}return e.abrupt("return");case 22:return l=new r.E(s),e.next=25,i.G.create({provider:l});case 25:d=e.sent,(p=o.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return c=d.toString(),e.abrupt("break",39);case 33:return e.next=35,d();case 35:return c=(c=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+p[0]+") in "+o);case 39:return e.abrupt("return",c);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,o,n){switch(t){case"humanReadable":(0,c.HumanReadable)(e,o,n);break;case"precise":(0,c.Precise)(e,o,n);break;case"blocksToDays":(0,c.BlocksToDays)(e,n);break;case"erasToDays":(0,c.ErasToDays)(e,n,o);break;case"percentage":(0,c.Percentage)(e,n);break;case"permillToPercent":(0,c.PermillToPercent)(e,n);break;case"arrayLength":(0,c.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var t=e.network,o=e.path,r=e.defaultValue,i=e.filter,c=void 0===i?void 0:i,d=(0,s.useState)(""),u=d[0],h=d[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==c?p(r.toString(),c,t,h):h(r.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,a.A)((0,n.A)().mark((function e(){var a;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,o,h);case 2:if(void 0!==(a=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==c?p(a,c,t,h):h(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),u}},11135:e=>{var t="polkadot",o="kusama",n="statemine",a="statemint",s="polkadotpeople",r="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,c,l){var d=void 0;if(c===t||c===a)d=3;else if(c===o||c===n||c===s)d=6;else{if(c!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=8}e=parseFloat(e),l((e=Number.isInteger(e/i[c].precision)?e/i[c].precision+" "+i[c].symbol:(e/i[c].precision).toFixed(d)+" "+i[c].symbol).toString())},Precise:function(e,t,o){o(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,c){var l=void 0;if(c===t||c===a||c==s)l=1;else{if(c!==o&&c!==n&&c!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=4}i((e/=l).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},42030:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});const n=o.p+"assets/images/nested-proxy-calls-65bdc70624a0b21a087da639743c710d.png"},2997:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});const n=o.p+"assets/images/polkadot_view_proxies-5c65a3f24dc6902f1734de8887dd5696.png"},16809:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});const n=o.p+"assets/images/polkadot_view_proxies_dev-c7f33e592f2c37cade0cc3d37e356aef.png"},25225:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});const n=o.p+"assets/images/time-delayed-proxies-8b85523c3caac25b32d1d884af71c048.png"},47790:()=>{}}]);