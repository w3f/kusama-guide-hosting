"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8568],{15680:(e,a,t)=>{t.d(a,{xA:()=>c,yg:()=>u});var r=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},c=function(e){var a=d(e.components);return r.createElement(l.Provider,{value:a},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(t),y=o,u=h["".concat(l,".").concat(y)]||h[y]||p[y]||s;return t?r.createElement(u,n(n({ref:a},c),{},{components:t})):r.createElement(u,n({ref:a},c))}));function u(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,n=new Array(s);n[0]=y;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[h]="string"==typeof e?e:o,n[1]=i;for(var d=2;d<s;d++)n[d]=t[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},97135:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=t(58168),o=t(98587),s=(t(96540),t(15680)),n=["components"],i={id:"parity-data-dashboards",title:"Parity Data Dashboards",sidebar_label:"Parity Data Dashboards",description:"Data dashboards maintained by the Parity Data team",keywords:["data","data-analytics","polkadot","dashboard","dashboards"],slug:"../parity-data-dashboards"},l=void 0,d={unversionedId:"general/parity-data-dashboards",id:"general/parity-data-dashboards",title:"Parity Data Dashboards",description:"Data dashboards maintained by the Parity Data team",source:"@site/../docs/general/parity-data-dashboards.md",sourceDirName:"general",slug:"/parity-data-dashboards",permalink:"/docs/parity-data-dashboards",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1717417120,formattedLastUpdatedAt:"Jun 3, 2024",frontMatter:{id:"parity-data-dashboards",title:"Parity Data Dashboards",sidebar_label:"Parity Data Dashboards",description:"Data dashboards maintained by the Parity Data team",keywords:["data","data-analytics","polkadot","dashboard","dashboards"],slug:"../parity-data-dashboards"},sidebar:"docs",previous:{title:"Dashboards",permalink:"/docs/dashboards-index"},next:{title:"Staking Dashboard",permalink:"/docs/staking-dashboard"}},c={},h=[{value:"Accessing Polkadot Ecosystem Dashboards",id:"accessing-polkadot-ecosystem-dashboards",level:2},{value:"Notes on How to Use the Interactive Charts",id:"notes-on-how-to-use-the-interactive-charts",level:2},{value:"Where the Data Comes From",id:"where-the-data-comes-from",level:2},{value:"Support: Data Requests, Collaborations, Parachain Onboarding etc.",id:"support-data-requests-collaborations-parachain-onboarding-etc",level:2}],p={toc:h},y="wrapper";function u(e){var a=e.components,i=(0,o.A)(e,n);return(0,s.yg)(y,(0,r.A)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("h2",{id:"accessing-polkadot-ecosystem-dashboards"},"Accessing Polkadot Ecosystem Dashboards"),(0,s.yg)("p",null,"The Parity Data Team has made publicly available a ",(0,s.yg)("a",{parentName:"p",href:"https://dashboards.data.paritytech.io/"},"website"),"\nthat displays a number of dashboards relating to Polkadot Ecosystem On-Chain data. The graphs\nprovided are grouped into the following sections:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/stablecoins.html"},"Stablecoins")," - metrics around stablecoins\nin Polkadot AssetHub."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/treasuries.html"},"Treasury")," - metrics around treasuries in\nthe ecosystem."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/staking.html"},"Staking")," - metrics pertaining to staking,\nnomination pools and more."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/parachains.html"},"Ecosystem")," - high level activity metrics\nfor Relay Chains and Parachains."),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/eoyr.html"},"Monthly Report")," - an updated version of the\n",(0,s.yg)("a",{parentName:"li",href:"https://dashboards.data.paritytech.io/reports/2023/index.html"},"Polkadot in Numbers: Annual Report 2023"),".")),(0,s.yg)("h2",{id:"notes-on-how-to-use-the-interactive-charts"},"Notes on How to Use the Interactive Charts"),(0,s.yg)("p",null,"The ",(0,s.yg)("a",{parentName:"p",href:"https://dashboards.data.paritytech.io/parachains.html"},"Ecosystem Tab")," shows a number of\nuniversally applicable metrics (Active Accounts, Unique Accounts, Transactions, Events) across both\nPolkadot & Kusama Relay/Parachains. Users can select whether they want to view:"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},"Polkadot or Kusama"),(0,s.yg)("li",{parentName:"ul"},"Daily or monthly figures"),(0,s.yg)("li",{parentName:"ul"},"Substrate Only, EVM Only or Substrate + EVM numbers.")),(0,s.yg)("p",null,"The default view is set to Polkadot,Monthly, Substrate + EVM."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Default Selection",src:t(92081).A,width:"2436",height:"1568"})),(0,s.yg)("p",null,"Here is an example of selecting Polkadot, Daily, Substrate Only for Transactions."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Daily Substrate Transactions Selection",src:t(91523).A,width:"2476",height:"1244"})),(0,s.yg)("p",null,"Users can also specify which chains they would like to view metrics for. The default view is set to\nthe entire Relay & Parachain grouping. Below is an example of selecting data for only Polkadot\nRelay, Moonbeam and Nodle chains. Users can hit invert selection for convenience to de-select all\noptions before selecting their desired chains."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Chain Selection",src:t(3415).A,width:"2488",height:"1582"})),(0,s.yg)("p",null,"Also, for all graphs on the website, in the top right users can toggle between chart types: choosing\nbar, line or stacked and a combination of those. See below for an example from the\n",(0,s.yg)("a",{parentName:"p",href:"https://dashboards.data.paritytech.io/stablecoins.html"},"Stablecoins")," tab."),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Stablecoin USDC Example",src:t(47088).A,width:"2198",height:"818"})),(0,s.yg)("h2",{id:"where-the-data-comes-from"},"Where the Data Comes From"),(0,s.yg)("p",null,"The data displayed on the website comes from DotLake, which is a scalable and cost-efficient data\nplatform built on Google Cloud Platform (GCP) by the Data Team at\n",(0,s.yg)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity Technologies"),". It's designed to store all blocks, events,\nextrinsics, and more for all the chains in the Polkadot ecosystem. The platform uses a range of\nexisting technologies, keeping the architecture simple with low operational overhead. This includes\ntools like Terraform, the Substrate Sidecar, Rust & Python programming languages, and various GCP\nservices like Cloud Storage, BigQuery, Cloud Run & Jobs, and Workflows & Functions."),(0,s.yg)("p",null,"The approach allows the processing of data from block number N to M, storing the raw results as JSON\nin Google Cloud Storage. This method not only provides a convenient abstraction, but also avoids the\npitfalls of custom block parsing strategies in the ever-evolving Substrate Framework. The key to the\nplatform's efficiency is the Block Compressor, which optimizes and reduces the data size\nsignificantly, making it more manageable for analytical purposes."),(0,s.yg)("p",null,"DotLake has evolved from it's origins as a data warehouse built to serve Parity's internal data\nneeds. Since then, the scope has been broadened to share data intitiatives and learnings with the\nwider community. The plan is to progressively make datasets available to the public, alongside\ndashboards, metrics, code, and best practices employed to ingest and decode Substrate data."),(0,s.yg)("p",null,"DotLake currently consists of 80+ Polkadot, Kusama, solo-chains and test-nets with their full\nhistory and is continuously expanding."),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"DotLake Batch Architecture")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"DotLake Batch Architecture",src:t(27240).A,width:"1999",height:"1175"})),(0,s.yg)("p",null,(0,s.yg)("strong",{parentName:"p"},"Real-Time Architecture")),(0,s.yg)("p",null,(0,s.yg)("img",{alt:"Real-Time Architecture",src:t(6536).A,width:"1999",height:"1071"})),(0,s.yg)("h2",{id:"support-data-requests-collaborations-parachain-onboarding-etc"},"Support: Data Requests, Collaborations, Parachain Onboarding etc."),(0,s.yg)("p",null,"The Parity Data Team is very eager to collaborate with the Ecosystem. If you have any questions,\ndata requests that you need help with, interest in partnerships or you are a Parachain team and want\nyour chain onboarded to the platform - please get in contact with ",(0,s.yg)("a",{parentName:"p",href:"mailto:data-team@parity.io"},"data-team@parity.io"),"."))}u.isMDXComponent=!0},27240:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dotlake-batch-faf8cffceeafe58fffe1130238cd4efd.png"},6536:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/dotlake-rt-27bf74fd16b4c6e348e7132b7124eae7.png"},3415:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/ecosystem-chain-selection-example-a76c465ade1ad0a26cabd744346155b6.png"},92081:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/ecosystem-chart-default-selection-f6144245cd32be99b964e56aa1b1c36d.png"},91523:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/ecosystem-polkadot-daily-substrate-transactions-selection-d2fab579bc6f4845d00ec4720cc10264.png"},47088:(e,a,t)=>{t.d(a,{A:()=>r});const r=t.p+"assets/images/stablecoins-usdc-toggle-chart-type-example-37f2f6aa33e5a49b26adca7f2980773a.png"}}]);