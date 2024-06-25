"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),y=a,h=c["".concat(o,".").concat(y)]||c[y]||p[y]||i;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},52990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"litentry-dashboards",title:"Litentry Dashboards",sidebar_label:"Litentry",description:"Litentry is a decentralized identity aggregator that links user identities while ensuring privacy protection.",keywords:["polkadot","dashboard","dune","litentry","identity","LIT"],slug:"../litentry-dashboards"},o="Litentry Dashboards",d={unversionedId:"general/dune-analytics/parachain-dashboards/litentry-dashboards",id:"general/dune-analytics/parachain-dashboards/litentry-dashboards",title:"Litentry Dashboards",description:"Litentry is a decentralized identity aggregator that links user identities while ensuring privacy protection.",source:"@site/../docs/general/dune-analytics/parachain-dashboards/litentry-dashboards.md",sourceDirName:"general/dune-analytics/parachain-dashboards",slug:"/general/dune-analytics/litentry-dashboards",permalink:"/docs/general/dune-analytics/litentry-dashboards",draft:!1,tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1719215716,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"litentry-dashboards",title:"Litentry Dashboards",sidebar_label:"Litentry",description:"Litentry is a decentralized identity aggregator that links user identities while ensuring privacy protection.",keywords:["polkadot","dashboard","dune","litentry","identity","LIT"],slug:"../litentry-dashboards"}},u={},c=[{value:"Overview",id:"overview",level:2},{value:"Featured Dashboards on Dune",id:"featured-dashboards-on-dune",level:2},{value:"Key Tables",id:"key-tables",level:2},{value:"Useful Queries",id:"useful-queries",level:2},{value:"Getting Started with Queries",id:"getting-started-with-queries",level:2}],p={toc:c},y="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(y,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"litentry-dashboards"},"Litentry Dashboards"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Litentry is a decentralized identity aggregator that links user identities while ensuring privacy\nprotection, thus enabling various social and economic innovations. It features a three-layer\nstructure, comprising source data, address analysis, and identity aggregation layers, all secured\nwith Trusted Execution Environment (TEE) technology to enhance security and privacy. Litentry's\napplications include airdrop whitelisting, credit scoring, and cross-platform reputation building."),(0,i.kt)("h2",{id:"featured-dashboards-on-dune"},"Featured Dashboards on Dune"),(0,i.kt)("p",null,"Here you will find a variety of dashboards that help visualize data from the Litentry parachain:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dune.com/substrate/litentry"},"Litentry"),": A comprehensive analysis of Litentry, including:\nToken Sent To Ethereum, Staking, Asset Analysis.")),(0,i.kt)("h2",{id:"key-tables"},"Key Tables"),(0,i.kt)("p",null,"Data from the Litentry parachain is organized into several key tables:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"litentry.balances")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"litentry.blocks")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"litentry.calls")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"litentry.events")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"litentry.extrinsics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"litentry.transfers"))),(0,i.kt)("p",null,"Start building your own queries using granular data on Dune\n",(0,i.kt)("a",{parentName:"p",href:"https://dune.com/queries?category=canonical&namespace=litentry"},"here"),"."),(0,i.kt)("h2",{id:"useful-queries"},"Useful Queries"),(0,i.kt)("p",null,"Some useful queries for Litentry are provided:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Title"),(0,i.kt)("th",{parentName:"tr",align:null},"Query"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Litentry Latest Collator Info"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://dune.com/queries/3827164"},"query_3827164")),(0,i.kt)("td",{parentName:"tr",align:null},"Find the latest collator information on Litentry")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Litentry LIT Token Sent To Ethereum"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://dune.com/queries/3825036"},"query_3825036")),(0,i.kt)("td",{parentName:"tr",align:null},"Find all records of LIT tokens sent to Ethereum")))),(0,i.kt)("h2",{id:"getting-started-with-queries"},"Getting Started with Queries"),(0,i.kt)("p",null,"To get started with querying data from Unique, you are welcome to use the mentioned materialized\nqueries. You can use the following DuneSQL queries as examples:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Litentry LIT Token Sent To Ethereum" showLineNumbers',title:'"Litentry',LIT:!0,Token:!0,Sent:!0,To:!0,'Ethereum"':!0,showLineNumbers:!0},"SELECT DISTINCT\n  block_time,\n  extrinsic_id,\n  get_href(\n    'https://litentry.statescan.io/#/extrinsics/' || extrinsic_id,\n    extrinsic_id\n  ) AS extrinsic_id_url,\n  JSON_VALUE(data, 'strict $[0]') AS dest_id,\n  JSON_VALUE(data, 'strict $[1]') AS nonce,\n  JSON_VALUE(data, 'strict $[2]') AS source_id,\n  IF(\n    JSON_VALUE(data, 'strict $[3]') LIKE '0x%',\n    bytearray_to_int256(JSON_VALUE(data, 'strict $[3]')) / POW(10, 12),\n    CAST(JSON_VALUE(data, 'strict $[3]') AS int256) / POW(10, 12)\n  ) AS amount,\n  JSON_VALUE(data, 'strict $[4]') AS recipient,\n  get_href(\n    'https://etherscan.io/address/' || JSON_VALUE(data, 'strict $[4]'),\n    CONCAT(\n      SUBSTR(JSON_VALUE(data, 'strict $[4]'), 1, 4),\n      '...',\n      SUBSTR(\n        JSON_VALUE(data, 'strict $[4]'),\n        LENGTH(JSON_VALUE(data, 'strict $[4]')) - 3\n      )\n    )\n  ) AS recipient_url\nFROM\n  litentry.events\nWHERE\n  section = 'chainBridge'\n  AND method = 'FungibleTransfer'\nORDER BY\n  block_time DESC;\n")),(0,i.kt)("p",null,"Query result:"),(0,i.kt)("iframe",{src:"https://dune.com/embeds/3825036/6433535",height:"350",width:"100%"}),(0,i.kt)("admonition",{title:"DuneSQL Reference",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/general/dunesql-cheatsheet"},"DuneSQL Cheatsheet"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL Official Documentation"),".")))}h.isMDXComponent=!0}}]);