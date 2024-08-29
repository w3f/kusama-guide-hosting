"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6646],{15680:(e,a,t)=>{t.d(a,{xA:()=>u,yg:()=>h});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=n.createContext({}),d=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=d(e.components);return n.createElement(o.Provider,{value:a},e.children)},y="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=d(t),c=r,h=y["".concat(o,".").concat(c)]||y[c]||p[c]||i;return t?n.createElement(h,l(l({ref:a},u),{},{components:t})):n.createElement(h,l({ref:a},u))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s[y]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},61277:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>y});var n=t(58168),r=t(98587),i=(t(96540),t(15680)),l=["components"],s={id:"hydration-dashboards",title:"Hydration Dashboards",sidebar_label:"Hydration",description:"Hydration is a decentralized finance hub on Polkadot. Its main function is a DEX.",keywords:["polkadot","dashboard","dune","hydration","DeFi"],slug:"../hydration-dashboards"},o="Hydration Dashboards",d={unversionedId:"general/dune-analytics/parachain-dashboards/hydration-dashboards",id:"general/dune-analytics/parachain-dashboards/hydration-dashboards",title:"Hydration Dashboards",description:"Hydration is a decentralized finance hub on Polkadot. Its main function is a DEX.",source:"@site/../docs/general/dune-analytics/parachain-dashboards/hydration-dashboards.md",sourceDirName:"general/dune-analytics/parachain-dashboards",slug:"/general/dune-analytics/hydration-dashboards",permalink:"/docs/general/dune-analytics/hydration-dashboards",draft:!1,tags:[],version:"current",lastUpdatedBy:"MK",lastUpdatedAt:1719215716,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{id:"hydration-dashboards",title:"Hydration Dashboards",sidebar_label:"Hydration",description:"Hydration is a decentralized finance hub on Polkadot. Its main function is a DEX.",keywords:["polkadot","dashboard","dune","hydration","DeFi"],slug:"../hydration-dashboards"}},u={},y=[{value:"Overview",id:"overview",level:2},{value:"Featured Dashboards on Dune",id:"featured-dashboards-on-dune",level:2},{value:"Key Tables",id:"key-tables",level:2},{value:"Useful Queries",id:"useful-queries",level:2},{value:"Getting Started with Queries",id:"getting-started-with-queries",level:2}],p={toc:y},c="wrapper";function h(e){var a=e.components,t=(0,r.A)(e,l);return(0,i.yg)(c,(0,n.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"hydration-dashboards"},"Hydration Dashboards"),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("p",null,"Hydration, formerly known as HydraDX, is a decentralized finance hub on Polkadot. It offers several\ntypes of DEX pools:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Omnipool: a single liquidity pool for assets that have been vetted by governance. Typically, these\nwould be currencies that have existed for a while and are expected to generate a high volume of\ntrades."),(0,i.yg)("li",{parentName:"ul"},"Stable pools: pools where all coins in the same pool are expected to trade almost at the same\nprice, e.g. USDC/USDT."),(0,i.yg)("li",{parentName:"ul"},"xyk-pools: pools where the price of the assets is determined by the x ","*"," y = k formula, also known\nas the constant product formula.")),(0,i.yg)("p",null,"Users can swap from any asset to any other asset using an automated router that will calculate the\nmost efficient path."),(0,i.yg)("p",null,"Liquidity providers can earn fees from the trades in the pools they provide liquidity to."),(0,i.yg)("h2",{id:"featured-dashboards-on-dune"},"Featured Dashboards on Dune"),(0,i.yg)("p",null,"Here you will find a variety of dashboards that help visualize data from the Hydration parachain:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://dune.com/substrate/hydradx"},"hydration on Polkadot"),": This dashboard provides a\ncomprehensive view of DEX volumes and liquidity on the Hydration parachain.")),(0,i.yg)("h2",{id:"key-tables"},"Key Tables"),(0,i.yg)("p",null,"Data from the hydration parachain is organized into several key tables:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hydradx.balances")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hydradx.blocks")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hydradx.calls")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hydradx.events")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hydradx.extrinsics")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"hydradx.transfers"))),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"hydradx.traces")," table is created by a snapshot script utilizing Hydration API calls to fetch\naccurate values which would be difficult to calculate from the blockchain events alone."),(0,i.yg)("p",null,"Start building your own queries using granular data on Dune\n",(0,i.yg)("a",{parentName:"p",href:"https://dune.com/queries?category=canonical&namespace=hydradx"},"here"),"."),(0,i.yg)("h2",{id:"useful-queries"},"Useful Queries"),(0,i.yg)("p",null,"Some useful queries for Hydration are made available as materialized views."),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Subject Area"),(0,i.yg)("th",{parentName:"tr",align:null},"Query"),(0,i.yg)("th",{parentName:"tr",align:null},"Materialized View"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Oracle"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://dune.com/queries/3459562"},"query_3459562")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_hydradx_oracle")),(0,i.yg)("td",{parentName:"tr",align:null},"Provides hourly oracle values for all currencies present in the omnipool. Uses LRNA.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Oracle (Alt.)"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://dune.com/queries/3573146"},"query_3573146")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_hydra_dx_oracle_new")),(0,i.yg)("td",{parentName:"tr",align:null},"Provides hourly oracle values for all currencies present in the omnipool. Uses DOT.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Oracle (Alt. Daily)"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://dune.com/queries/3445402"},"query_3445402")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_hydra_dx_oracle_new_daily")),(0,i.yg)("td",{parentName:"tr",align:null},"Same, but aggregated daily.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Oracle Pairs"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://dune.com/queries/3483707"},"query_3483707")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_hydra_dx_oracle_pairs")),(0,i.yg)("td",{parentName:"tr",align:null},"Provides volume and transaction counts for all pairwise trades in the omnipool.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Omnipool Liquidity"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://dune.com/queries/3507194"},"query_3507194")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"dune.substrate.result_hydradx_liquidity_master")),(0,i.yg)("td",{parentName:"tr",align:null},"Provides liquidity in the Omnipool on a per-account basis.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Assets"),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://dune.com/queries/3482301"},"query_3482301")),(0,i.yg)("td",{parentName:"tr",align:null},"N/A"),(0,i.yg)("td",{parentName:"tr",align:null},"Provides asset_id, symbol, and decimals for all assets in the Hydration parachain.")))),(0,i.yg)("p",null,"The first Oracle query is the recommended one to use for any oracle use cases that are not\nhistorical in nature. This is because it relies on the most reliable mechanism for determining the\nactual price, using the intermediate LRNA token price. This level of detail is only available from\nJan. 2024 onwards."),(0,i.yg)("p",null,"For historical price analysis, the alternative oracle query uses DOT as the intermediate currency.\nIt may be slightly less accurate and take a bit longer to calculate."),(0,i.yg)("p",null,"Liquidity in the Omnipool is calculated on a per-account basis, using the NFT positions that\nrepresent shares in the Omnipool."),(0,i.yg)("p",null,"Dune users are encouraged to study the source code of the queries, including parts of a query that\nmay have been commented out for future use."),(0,i.yg)("p",null,"Uncommenting these parts may accelerate your effort of adopting a query to a slightly different use\ncase."),(0,i.yg)("h2",{id:"getting-started-with-queries"},"Getting Started with Queries"),(0,i.yg)("p",null,"To get started with querying data from Hydration, you are welcome to use the mentioned materialized\nqueries. You can also use the following DuneSQL queries as examples:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql",metastring:'title="Hydration Omnipool Asset (Latest)" showLineNumbers',title:'"Hydration',Omnipool:!0,Asset:!0,'(Latest)"':!0,showLineNumbers:!0},"WITH MaxTimestamps AS (\n  SELECT\n    CAST(JSON_VALUE(kv, 'strict $.id') AS INT) AS asset_id,\n    MAX(ts) AS max_ts\n  FROM hydradx.traces\n  WHERE track = 'omniasset'\n  GROUP BY 1\n), A AS (\n  SELECT\n    m.asset_id,\n    A1.ticker,\n    A1.decimals,\n    m.max_ts AS ts,\n    CAST(JSON_VALUE(t.pv, 'strict $.cap') AS UINT256) AS cap,\n    CAST(JSON_VALUE(t.pv, 'strict $.hubReserve') AS UINT256) AS hubReserve,\n    CAST(JSON_VALUE(t.pv, 'strict $.protocolShares') AS UINT256) AS protocolShares,\n    CAST(JSON_VALUE(t.pv, 'strict $.shares') AS UINT256) AS shares,\n    JSON_VALUE(t.pv, 'strict $.tradable.bits') AS tradeable\n  FROM MaxTimestamps m\n  INNER JOIN hydradx.traces t\n    ON m.asset_id = CAST(JSON_VALUE(t.kv, 'strict $.id') AS INT)\n    AND m.max_ts = t.ts\n  JOIN query_3482301 A1\n    ON A1.asset_id = m.asset_id\n  WHERE t.track = 'omniasset'\n)\nSELECT\n  asset_id,\n  ticker,\n  ROUND(100.0 * hubReserve / (SUM(hubReserve) OVER (ORDER BY 1)), 1) AS percentage_of_pool,\n  cap / POW(10, 18) AS cap,\n  ROUND(hubReserve / POW(10, 12)) AS hubReserve,\n  ROUND(protocolShares / POW(10, decimals)) AS protocolShares,\n  ROUND(shares / POW(10, decimals)) AS shares,\n  ts AS last_update -- when this data was collected\nFROM A\nWHERE tradeable = '15' -- all bits set to \"on\"\nORDER BY 3 DESC;\n\n\n")),(0,i.yg)("p",null,"The query is fairly typical for a parachain query on Dune. It calculates the last available values\nfrom the snapshot table ",(0,i.yg)("inlineCode",{parentName:"p"},"hydradx.traces"),"."),(0,i.yg)("p",null,"The query uses Dune's native UINT256 type extensively, which allows to deal with very large numbers\nand still maintain precision."),(0,i.yg)("p",null,"Query result:"),(0,i.yg)("iframe",{src:"https://dune.com/embeds/3485087/5857870/",height:"350",width:"100%"}),(0,i.yg)("admonition",{title:"DuneSQL Reference",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"For more information on DuneSQL, please refer to the ",(0,i.yg)("a",{parentName:"p",href:"/docs/general/dunesql-cheatsheet"},"DuneSQL Cheatsheet"),"\nand\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.dune.com/query-engine/Functions-and-operators/index"},"DuneSQL Official Documentation"),".")))}h.isMDXComponent=!0}}]);