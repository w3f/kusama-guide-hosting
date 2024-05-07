"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1062],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=r,b=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return a?n.createElement(b,i(i({ref:t},u),{},{components:a})):n.createElement(b,i({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"build-data",title:"Explorer, Data, & Indexing Tools",sidebar_label:"Explorer, Data, & Indexing Tools",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},s=void 0,d={unversionedId:"build/build-data",id:"build/build-data",title:"Explorer, Data, & Indexing Tools",description:"An overview about building with data analytics",source:"@site/../docs/build/build-data.md",sourceDirName:"build",slug:"/build-data",permalink:"/docs/build-data",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715081757,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"build-data",title:"Explorer, Data, & Indexing Tools",sidebar_label:"Explorer, Data, & Indexing Tools",description:"An overview about building with data analytics",keywords:["data","index","query","explorer","dashboard"],slug:"../build-data"},sidebar:"docs",previous:{title:"Tool Index",permalink:"/docs/build-tools-index"},next:{title:"Open Source Stack",permalink:"/docs/build-open-source"}},u={},p=[{value:"Custom Indexer",id:"custom-indexer",level:2},{value:"Subsquid",id:"subsquid",level:3},{value:"SubQuery",id:"subquery",level:3},{value:"The Graph",id:"the-graph",level:3},{value:"Analytics platform",id:"analytics-platform",level:2},{value:"Dolpha Analytics",id:"dolpha-analytics",level:3},{value:"Web3Go",id:"web3go",level:3},{value:"Covalent",id:"covalent",level:3},{value:"Data warehouse",id:"data-warehouse",level:2},{value:"BigQuery by Google Cloud",id:"bigquery-by-google-cloud",level:3},{value:"Block Explorers",id:"block-explorers",level:2}],c={toc:p},h="wrapper";function b(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(h,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The tools that accentuate and aggregate the data within blockchains are integral for a multi-chain\nfuture. Parachains will need robust and secure ways to index and aggregate data, such as a data\naggregation layer."),(0,o.kt)("h2",{id:"custom-indexer"},"Custom Indexer"),(0,o.kt)("h3",{id:"subsquid"},"Subsquid"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://subsquid.io/"},"Subsquid")," is an open-source framework for building tailored GraphQL APIs to\nquery Substrate chain state and history."),(0,o.kt)("p",null,"Subsquid replaces direct gRPC node access with performant Squid archive gateways, allowing quick\nsynchronization of the API with the historical on-chain data."),(0,o.kt)("p",null,"Subsquid-powered APIs support filtering, pagination, union types, interfaces, and full-text search\nout-of-the-box, and can be further extended with custom GraphQL resolvers."),(0,o.kt)("h3",{id:"subquery"},"SubQuery"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://subquery.network/"},"SubQuery")," is a fast, flexible, and reliable open-source data indexer\nthat provides you with custom APIs for your Substrate/Polkadot project. We build the best,\nfully-featured indexer, so you don\u2019t have to, with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"automatic support for any Substrate network"),(0,o.kt)("li",{parentName:"ul"},"support for all Polkadot smart contract frameworks (FrontierEVM, Acala EVM+, and Wasm)"),(0,o.kt)("li",{parentName:"ul"},"automated historical state tracking to enable faster partial re-indexing"),(0,o.kt)("li",{parentName:"ul"},"a lightweight and portable design that doesn't require centralized archives"),(0,o.kt)("li",{parentName:"ul"},"full support for GraphQL filtering, pagination, interfaces, subscriptions, and aggregations"),(0,o.kt)("li",{parentName:"ul"},"a future decentralized network acts as chain-agnostic data aggregation, indexing, and querying\nlayer between blockchains and applications that will not require centralized services.")),(0,o.kt)("p",null,"To start building, head to the ",(0,o.kt)("a",{parentName:"p",href:"https://academy.subquery.network/"},"SubQuery documentation")," where\nyou'll find quick start guides and walkthrough developer tutorials."),(0,o.kt)("h3",{id:"the-graph"},"The Graph"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://thegraph.com/en/"},"The Graph")," is a layer-1 indexing tool and querying layer for the\ndecentralized web, who announced an integration plan to bring\n",(0,o.kt)("a",{parentName:"p",href:"https://medium.com/polkadot-network/the-graph-bringing-indexing-and-querying-to-polkadot-6b433e381fe8"},"indexing and querying to Polkadot"),"."),(0,o.kt)("p",null,"The Graph allows developers to build and publish open APIs, called subgraphs. Applications can query\nsubgraphs using ",(0,o.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL"),"."),(0,o.kt)("h2",{id:"analytics-platform"},"Analytics platform"),(0,o.kt)("h3",{id:"dolpha-analytics"},"Dolpha Analytics"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dolpha.com/"},"Dolpha Analytics")," is an on-chain data analytics and insights platform for the\nPolkadot and Kusama ecosystems. Dolpha empowers casual and power users to get a pulse on the\necosystems, perform due diligence, surface signals, and make informed data-driven decisions."),(0,o.kt)("h3",{id:"web3go"},"Web3Go"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://web3go.xyz/"},"Web3GO")," is a Polkadot-based open data analytics platform that provides\ninfrastructure and tooling to help users visualize, curate, share, and analyze on-chain data."),(0,o.kt)("h3",{id:"covalent"},"Covalent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.covalenthq.com/"},"Covalent")," offers a unified API to understand the data on a blockchain,\nand is currently live on the ",(0,o.kt)("a",{parentName:"p",href:"https://moonbeam.network/"},"Moonbeam")," network, bringing visibility to\nbillions of blockchain data points to Polkadot via their unified API. The approach to deploying on\nMoonbeam simplifies the development of Polkadot-based blockchain applications as compared to\nimplementing a full parachain or an on-demand parachain."),(0,o.kt)("p",null,"Covalent captures the entire history of blockchains and offers a way to zoom into data points\nrecorded in smart contracts that are often not accessible."),(0,o.kt)("h2",{id:"data-warehouse"},"Data warehouse"),(0,o.kt)("h3",{id:"bigquery-by-google-cloud"},"BigQuery by Google Cloud"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"BigQuery")," makes Polkadot blockchain data available for Google\nCloud users. Check this\n",(0,o.kt)("a",{parentName:"p",href:"https://cloud.google.com/blog/products/data-analytics/data-for-11-more-blockchains-in-bigquery-public-datasets"},"announcement"),"\nfor details on how to access the data."),(0,o.kt)("h2",{id:"block-explorers"},"Block Explorers"),(0,o.kt)("p",null,"As you can imagine, blockchain explorers also offer data analytics through an interface where users\ncan examine common data points."),(0,o.kt)("p",null,"Some block explorers in the Polkadot ecosystem are listed on the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-tools-index##block-explorers"},"tools page"),"."))}b.isMDXComponent=!0}}]);