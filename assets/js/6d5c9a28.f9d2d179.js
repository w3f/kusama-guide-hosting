"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2119],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>h});var n=e(67294);function s(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function i(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?i(Object(e),!0).forEach((function(a){s(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function r(t,a){if(null==t)return{};var e,n,s=function(t,a){if(null==t)return{};var e,n,s={},i=Object.keys(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||(s[e]=t[e]);return s}(t,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)e=i[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(s[e]=t[e])}return s}var l=n.createContext({}),p=function(t){var a=n.useContext(l),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},d=function(t){var a=p(t.components);return n.createElement(l.Provider,{value:a},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,s=t.mdxType,i=t.originalType,l=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=p(e),k=s,h=c["".concat(l,".").concat(k)]||c[k]||u[k]||i;return e?n.createElement(h,o(o({ref:a},d),{},{components:e})):n.createElement(h,o({ref:a},d))}));function h(t,a){var e=arguments,s=a&&a.mdxType;if("string"==typeof t||s){var i=e.length,o=new Array(i);o[0]=k;var r={};for(var l in a)hasOwnProperty.call(a,l)&&(r[l]=a[l]);r.originalType=t,r[c]="string"==typeof t?t:s,o[1]=r;for(var p=2;p<i;p++)o[p]=e[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},94927:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=e(87462),s=e(63366),i=(e(67294),e(3905)),o=["components"],r={id:"staking-apps",title:"Polkadot Staking Apps",sidebar_label:"Staking Apps",description:"Staking Apps in the Polkadot Ecosystem.",keywords:["staking","stake","nominate","nominating","NPoS","staking dashboard"],slug:"../staking-apps"},l=void 0,p={unversionedId:"general/staking-apps",id:"general/staking-apps",title:"Polkadot Staking Apps",description:"Staking Apps in the Polkadot Ecosystem.",source:"@site/../docs/general/staking-apps.md",sourceDirName:"general",slug:"/staking-apps",permalink:"/docs/staking-apps",draft:!1,tags:[],version:"current",lastUpdatedBy:"Sid",lastUpdatedAt:1701774338,formattedLastUpdatedAt:"Dec 5, 2023",frontMatter:{id:"staking-apps",title:"Polkadot Staking Apps",sidebar_label:"Staking Apps",description:"Staking Apps in the Polkadot Ecosystem.",keywords:["staking","stake","nominate","nominating","NPoS","staking dashboard"],slug:"../staking-apps"}},d={},c=[{value:"Polkadot Staking Dashboard",id:"polkadot-staking-dashboard",level:2},{value:"Sub.ID",id:"subid",level:2},{value:"NOMI",id:"nomi",level:2},{value:"SubWallet Earning",id:"subwallet-earning",level:2}],u={toc:c},k="wrapper";function h(t){var a=t.components,e=(0,s.Z)(t,o);return(0,i.kt)(k,(0,n.Z)({},u,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Community Page",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This page is open to contributions from the community. Please follow the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki#contributing-to-documentation"},"Wiki contribution guidelines"),"\nand add your protocol native, permissionless, non-custodial NPoS Staking app to this page.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#polkadot-staking-dashboard"},"Polkadot Staking Dashboard")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subid"},"Sub.ID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nomi"},"NOMI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#subwallet-earning"},"SubWallet Earning"))),(0,i.kt)("h2",{id:"polkadot-staking-dashboard"},"Polkadot Staking Dashboard"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},"Polkadot Staking Dashboard")," is a web3 application\ndedicated to native non-custodial ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"staking")," on the\nKusama relay chain. The dashboard allows to\nstake as a solo nominator or as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," member.\nUsers can also create their nomination pools. The dashboard supports ",(0,i.kt)("a",{parentName:"p",href:"/docs/ledger"},"Ledger"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadot-vault"},"Polkadot Vault"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions#subwallet"},"SubWallet"),",\n",(0,i.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions#talisman"},"Talisman"),", WalletConnect, Fearless Wallet,\nPolkaGate, and Enkrypt. The dashboard also supports\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-proxies#staking-proxy"},"staking proxies"),"."),(0,i.kt)("p",null,"You can find more information about the Polkadot staking dashboard on the dedicated\n",(0,i.kt)("a",{parentName:"p",href:"/docs/staking-dashboard"},"wiki page")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/folders/65000157523"},"support articles"),"."),(0,i.kt)("p",null,"Below a list of video tutorial about the Polkadot Staking Dashboard."),(0,i.kt)("tr",{class:"cards-container"},(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"https://youtu.be/F59N3YKYCRs?feature=shared"},(0,i.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/F59N3YKYCRs/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Nominate")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"https://youtu.be/dDIG7QAApig?feature=shared"},(0,i.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/dDIG7QAApig/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Join a Nomination Pool")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"https://youtu.be/hvXLc4H7rA4?feature=shared"},(0,i.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/hvXLc4H7rA4/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Staking Dashboard Walkthrough"))))),(0,i.kt)("br",null),(0,i.kt)("tr",{class:"cards-container"},(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"https://youtu.be/58pIe8tt2o4?feature=shared"},(0,i.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/58pIe8tt2o4/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"After Staking")))),(0,i.kt)("td",null,(0,i.kt)("a",{class:"guide-link",href:"https://youtu.be/aTFWhwy_Mxg?feature=shared"},(0,i.kt)("img",{class:"guide-image",src:"https://img.youtube.com/vi/aTFWhwy_Mxg/0.jpg",alt:"Drawing",width:"250",height:"150"}),(0,i.kt)("div",{class:"cards-body"},(0,i.kt)("h5",{class:"cards-title"},"Create, Manage & Destroy Pools"))))),(0,i.kt)("h2",{id:"subid"},"Sub.ID"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sub.id/"},"Sub.ID")," is a one-stop-shop for managing your Polkadot accounts, viewing your\naddresses and balances, and looking at other accounts."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sub.id/"},(0,i.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/893485384154095640/1166807359411204228/image.png?ex=654bd508&is=65396008&hm=ddf3dc26f525d0021df4d8879f19973b81040514bfb10423e748d397c7a66329&",alt:null}))),(0,i.kt)("p",null,"It features a Polkadot ",(0,i.kt)("a",{parentName:"p",href:"https://sub.id/validator/polkadot"},"staking page"),", where you can easily start\nstaking KSM. Stakers can choose their preferred\nvalidators or stake with the recommended validator set."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://sub.id/validator/polkadot"},(0,i.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/893485384154095640/1166807508837474394/image.png?ex=654bd52c&is=6539602c&hm=f78e346cfd364529b1b03d5207a8ad0cd100fc5093ee832eece397e788200cf0&",alt:null}))),(0,i.kt)("h2",{id:"nomi"},"NOMI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apps.turboflakes.io/?app=nomi"},"NOMI")," is designed to actively involve Nominators in Native\nStaking within the Kusama networks. It aims\nto offer a unique and enhanced nomination experience, using\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multiple-criteria_decision_analysis"},"Multiple-Criteria Decision Analysis"),"\n(MCDA) as a base for the analytical research. MCDA is an open and transparent approach for\nevaluating numerous conflicting traits in the decision-making process. For the analysis, validator\ndata is collected at the last block of every session."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://turboflakes.io/"},(0,i.kt)("img",{parentName:"a",src:"https://github.com/turboflakes/apps/blob/main/src/assets/nomi_dashboard.webp?raw=true",alt:null}))),(0,i.kt)("p",null,"source: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/turboflakes/apps"},"https://github.com/turboflakes/apps")),(0,i.kt)("h2",{id:"subwallet-earning"},"SubWallet Earning"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.subwallet.app/"},"SubWallet Web Dashboard")," is the all-in-one solution to manage assets and stake on multiple networks in the Polkadot, Kusama and Polkadot SDK (Substrate) ecosystems. "),(0,i.kt)("p",null,"The Web Dashboard features an Earning tab which allows users to stake DOT easily via native nomination pools, as well as in liquid staking and lending protocols, without having to manage multiple applications with different interfaces and experiences."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://web.subwallet.app/"},(0,i.kt)("img",{parentName:"a",src:"https://cdn.discordapp.com/attachments/865823369092661279/1181493922166493214/earning_tab.gif?ex=658142f6&is=656ecdf6&hm=b02716903c18d046896c59eb1c5935518f75cf9f52845c1636609ccaf43c57cd&",alt:null}))))}h.isMDXComponent=!0}}]);