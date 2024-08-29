"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8225],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),s=function(e){var a=n.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),g=r,h=p["".concat(d,".").concat(g)]||p[g]||c[g]||o;return t?n.createElement(h,i(i({ref:a},u),{},{components:t})):n.createElement(h,i({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},29634:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=t(58168),r=t(98587),o=(t(96540),t(15680)),i=["components"],l={id:"build-data",title:"Explorer, Data, & Indexing Tools",sidebar_label:"Explorer, Data, & Indexing Tools",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},d=void 0,s={unversionedId:"build/build-data",id:"build/build-data",title:"Explorer, Data, & Indexing Tools",description:"An overview about building with data analytics",source:"@site/../docs/build/build-data.md",sourceDirName:"build",slug:"/build-data",permalink:"/docs/build-data",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ti\u1ebfn Nguy\u1ec5n Kh\u1eafc",lastUpdatedAt:1722855366,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{id:"build-data",title:"Explorer, Data, & Indexing Tools",sidebar_label:"Explorer, Data, & Indexing Tools",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},sidebar:"docs",previous:{title:"Tool Index",permalink:"/docs/build-tools-index"},next:{title:"Open Source Stack",permalink:"/docs/build-open-source"}},u={},p=[{value:"Custom Indexer",id:"custom-indexer",level:2},{value:"Subsquid",id:"subsquid",level:3},{value:"SubQuery",id:"subquery",level:3},{value:"The Graph",id:"the-graph",level:3},{value:"Analytics platform",id:"analytics-platform",level:2},{value:"DIN",id:"din",level:3},{value:"Covalent",id:"covalent",level:3},{value:"Data warehouse",id:"data-warehouse",level:2},{value:"BigQuery by Google Cloud",id:"bigquery-by-google-cloud",level:3},{value:"Block Explorers",id:"block-explorers",level:2}],c={toc:p},g="wrapper";function h(e){var a=e.components,t=(0,r.A)(e,i);return(0,o.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The tools that accentuate and aggregate the data within blockchains are integral for a multi-chain\nfuture. Parachains will need robust and secure ways to index and aggregate data, such as a data\naggregation layer."),(0,o.yg)("h2",{id:"custom-indexer"},"Custom Indexer"),(0,o.yg)("h3",{id:"subsquid"},"Subsquid"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://subsquid.io/"},"Subsquid")," is an open-source framework for building tailored GraphQL APIs to\nquery Substrate chain state and history."),(0,o.yg)("p",null,"Subsquid replaces direct gRPC node access with performant Squid archive gateways, allowing quick\nsynchronization of the API with the historical on-chain data."),(0,o.yg)("p",null,"Subsquid-powered APIs support filtering, pagination, union types, interfaces, and full-text search\nout-of-the-box, and can be further extended with custom GraphQL resolvers."),(0,o.yg)("h3",{id:"subquery"},"SubQuery"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://subquery.network/"},"SubQuery")," is a fast, flexible, and reliable open-source data indexer\nthat provides you with custom APIs for your Substrate/Polkadot project. We build the best,\nfully-featured indexer, so you don\u2019t have to, with:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"automatic support for any Substrate network"),(0,o.yg)("li",{parentName:"ul"},"support for all Polkadot smart contract frameworks (FrontierEVM, Acala EVM+, and Wasm)"),(0,o.yg)("li",{parentName:"ul"},"automated historical state tracking to enable faster partial re-indexing"),(0,o.yg)("li",{parentName:"ul"},"a lightweight and portable design that doesn't require centralized archives"),(0,o.yg)("li",{parentName:"ul"},"full support for GraphQL filtering, pagination, interfaces, subscriptions, and aggregations"),(0,o.yg)("li",{parentName:"ul"},"a future decentralized network acts as chain-agnostic data aggregation, indexing, and querying\nlayer between blockchains and applications that will not require centralized services.")),(0,o.yg)("p",null,"To start building, head to the ",(0,o.yg)("a",{parentName:"p",href:"https://academy.subquery.network/"},"SubQuery documentation")," where\nyou'll find quick start guides and walkthrough developer tutorials."),(0,o.yg)("h3",{id:"the-graph"},"The Graph"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://thegraph.com/en/"},"The Graph")," is a layer-1 indexing tool and querying layer for the\ndecentralized web, who announced an integration plan to bring\n",(0,o.yg)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-graph-bringing-indexing-and-querying-to-polkadot-6b433e381fe8"},"indexing and querying to Polkadot"),"."),(0,o.yg)("p",null,"The Graph allows developers to build and publish open APIs, called subgraphs. Applications can query\nsubgraphs using ",(0,o.yg)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"."),(0,o.yg)("h2",{id:"analytics-platform"},"Analytics platform"),(0,o.yg)("h3",{id:"din"},"DIN"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://din.lol/"},"DIN"),"(formally named Web3Go) is a Polkadot-based open data analytics platform that\nprovides infrastructure and tooling to help users visualize, curate, share, and analyze on-chain\ndata."),(0,o.yg)("h3",{id:"covalent"},"Covalent"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://www.covalenthq.com/"},"Covalent")," offers a unified API to understand the data on a blockchain,\nand is currently live on the ",(0,o.yg)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," network, bringing visibility to\nbillions of blockchain data points to Polkadot via their unified API. The approach to deploying on\nMoonbeam simplifies the development of Polkadot-based blockchain applications as compared to\nimplementing a full parachain or an on-demand parachain."),(0,o.yg)("p",null,"Covalent captures the entire history of blockchains and offers a way to zoom into data points\nrecorded in smart contracts that are often not accessible."),(0,o.yg)("h2",{id:"data-warehouse"},"Data warehouse"),(0,o.yg)("h3",{id:"bigquery-by-google-cloud"},"BigQuery by Google Cloud"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"BigQuery")," makes Polkadot blockchain data available for Google\nCloud users. Check this\n",(0,o.yg)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/data-for-11-more-blockchains-in-bigquery-public-datasets"},"announcement"),"\nfor details on how to access the data."),(0,o.yg)("h2",{id:"block-explorers"},"Block Explorers"),(0,o.yg)("p",null,"As you can imagine, blockchain explorers also offer data analytics through an interface where users\ncan examine common data points."),(0,o.yg)("p",null,"Some block explorers in the Polkadot ecosystem are listed on the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/build-tools-index##block-explorers"},"tools page"),"."))}h.isMDXComponent=!0}}]);