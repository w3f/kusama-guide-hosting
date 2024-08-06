"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5969],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(b,i(i({ref:t},c),{},{components:a})):n.createElement(b,i({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(87462),r=a(67294),o=a(86010),i=a(12466),l=a(16550),s=a(91980),u=a(67392),c=a(50012);function d(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function b(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,a,n,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,d=p(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),f=m[0],k=m[1],v=b({queryString:s,groupId:u}),g=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=w[0],S=w[1],x=function(){var e=null!=g?g:T;return h({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){x&&k(x)}),[x]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);k(e),y(e),S(e)}),[y,S,d]),tabValues:d}}var f=a(72389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,a=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==l&&(d(t),s(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;a=null!=(o=c[i])?o:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:p},i,{className:(0,o.Z)("tabs__item",k.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=a?a:t)})))}function g(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=m(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},r.createElement(v,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function w(e){var t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},69185:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=a(74866),l=a(85162),s=["components"],u={id:"build-client-side",title:"Building Client-side Apps",sidebar_label:"Building Client-side Apps",description:"An overview about building clients that use Polkadot",keywords:["data","index","query","explorer","dashboard","dapp","uapp","app","frontend","client"],slug:"../build-client-side"},c=void 0,d={unversionedId:"build/build-client-side",id:"build/build-client-side",title:"Building Client-side Apps",description:"An overview about building clients that use Polkadot",source:"@site/../docs/build/build-client-side.md",sourceDirName:"build",slug:"/build-client-side",permalink:"/docs/build-client-side",draft:!1,tags:[],version:"current",lastUpdatedBy:"Ti\u1ebfn Nguy\u1ec5n Kh\u1eafc",lastUpdatedAt:1722856845,formattedLastUpdatedAt:"Aug 5, 2024",frontMatter:{id:"build-client-side",title:"Building Client-side Apps",sidebar_label:"Building Client-side Apps",description:"An overview about building clients that use Polkadot",keywords:["data","index","query","explorer","dashboard","dapp","uapp","app","frontend","client"],slug:"../build-client-side"},sidebar:"docs",previous:{title:"Client-side Development",permalink:"/docs/build-client-index"},next:{title:"Using Light Clients",permalink:"/docs/build-light-clients"}},p={},h=[{value:"SDKS &amp; Libraries",id:"sdks--libraries",level:2},{value:"Frameworks &amp; Toolkits",id:"frameworks--toolkits",level:2},{value:"Oracle Options",id:"oracle-options",level:2},{value:"Decentralized Storage Options",id:"decentralized-storage-options",level:2},{value:"DCS (Decentralized Cloud Storage)",id:"dcs-decentralized-cloud-storage",level:2}],b={toc:h},m="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As with any blockchain, building decentralized applications (dApps) is a significant part of how a\ndeveloper can build on Kusama."),(0,o.kt)("p",null,"As an application developer, you can compose your front-end apps in a few different ways. Because\nKusama and its parachains are all built\nusing the Polkadot SDK. You can often use the same SDK to communicate with\nKusama, a parachain, or any other\nSubstrate-based chain."),(0,o.kt)("admonition",{title:"Substrate-based chains use an SS58 encoding for their address formats.",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please see the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/"},"SS58 registry")," to see which\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"chain corresponds to a given prefix"),",\nand which prefixes are available.")),(0,o.kt)("h2",{id:"sdks--libraries"},"SDKS & Libraries"),(0,o.kt)("p",null,"If one aims to develop a ",(0,o.kt)("strong",{parentName:"p"},"dApp")," (Decentralized App), the Polkadot ecosystem contains various SDKs\nto tap into the relay chain and parachains. There are several languages already supported -\n",(0,o.kt)("a",{parentName:"p",href:"/docs/build-tools-index"},"see the tooling page for a detailed overview of different SDKs and libraries that are available.")),(0,o.kt)("h2",{id:"frameworks--toolkits"},"Frameworks & Toolkits"),(0,o.kt)("p",null,"For front-end applications, several options exist for interfacing with Substrate-based chains\n(parachains, relay chains, etc.) and smart contracts. These will often interact with the RPC of a\nSubstrate node:"),(0,o.kt)(i.Z,{groupId:"clients",values:[{label:"Polkadot.js",value:"pjs"},{label:"Polkadot-API",value:"papi"},{label:"Reactive DOT",value:"reactive-dot"},{label:"Subxt",value:"subxt"},{label:"React Hooks for ink!",value:"useink"},{label:"ink!athon Boilerplate",value:"inkathon"},{label:"Polkadot Cloud",value:"pcloud"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"pjs",mdxType:"TabItem"}," Promise and RxJS APIs around Polkadot, Kusama, and other Substrate-based chains via RPC calls. It is dynamically generated based on what the Substrate runtime provides regarding metadata. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://polkadot.js.org/docs",target:"_blank"},"here"),". "),(0,o.kt)(l.Z,{value:"papi",mdxType:"TabItem"}," Polkadot-API will serve as a replacement for Polkadot JS. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://papi.how/",target:"_blank"},"here"),". "),(0,o.kt)(l.Z,{value:"reactive-dot",mdxType:"TabItem"}," A reactive library for building Substrate front-ends. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://reactivedot.dev/",target:"_blank"},"here"),"."),(0,o.kt)(l.Z,{value:"subxt",mdxType:"TabItem"}," Query and submit extrinsics (transactions) to a Substrate node via RPC using Rust. Also referred to as Rust Parity. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://github.com/paritytech/subxt",target:"_blank"},"here"),". "),(0,o.kt)(l.Z,{value:"useink",mdxType:"TabItem"}," React hooks library for ink! smart contracts that abstract the functionality of polkadot.js. Full documentation & examples available\xa0",(0,o.kt)("a",{href:"https://use.ink",target:"_blank"},"here"),". "),(0,o.kt)(l.Z,{value:"inkathon",mdxType:"TabItem"},"ink!athon is a starter kit for full-stack dApp development with ink! smart contracts and a React-based frontend in one place. With convenient helper scripts and a pre-configured project setup, you can quickly scaffold any dApp. Live example & full documentation available\xa0",(0,o.kt)("a",{href:"https://inkathon.xyz",target:"_blank"},"here"),". "),(0,o.kt)(l.Z,{value:"pcloud",mdxType:"TabItem"},"Polkadot Cloud hosts a library of assets, ranging from data sources, graphical elements, to fully functional components, for app developers to plug and play into their codebases. \xa0",(0,o.kt)("a",{href:"https://polkadot.cloud/",target:"_blank"},"Learn more here"),". ")),(0,o.kt)("h2",{id:"oracle-options"},"Oracle Options"),(0,o.kt)("p",null,"In the blockchain context, an ",(0,o.kt)("em",{parentName:"p"},"oracle")," is a way to bring real-world data onto the blockchain so that\nit can be used by a decentralized application."),(0,o.kt)("p",null,"Oracles serve many purposes for application builder, as they allow for outside data (price feeds,\nthe ability to make HTTP requests, etc) to enter the decentralized world."),(0,o.kt)("p",null,"Oracle solutions range from centralized and trusted to decentralized and game-theory based. On the\ncentralized end of the spectrum, an oracle could be a single account that has the authority to\ndictate the real-world data on-chain. On the decentralized end, a\n",(0,o.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2014/03/28/schellingcoin-a-minimal-trust-universal-data-feed/"},'complex game of "chicken"'),"\ncan be played among various staked actors who risk getting ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-offenses"},"slashed")," if\nthey don't submit the same data as everyone else."),(0,o.kt)(i.Z,{groupId:"clients",values:[{label:"Chainlink",value:"chainlink"},{label:"Acurast",value:"acurast"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"chainlink",mdxType:"TabItem"}," Solutions such as",(0,o.kt)("a",{href:"https://polkadot.network/chainlink-reaches-milestone-with-polkadot/",target:"_blank"},"Chainlink")," fit somewhere in the middle, where the amount of trust you put into the reporting oracles can be adjusted based on your preferences. A Chainlink",(0,o.kt)("a",{href:"https://github.com/smartcontractkit/chainlink-polkadot/blob/master/pallet-chainlink-feed/README.md",target:"_blank"},"Feed Pallet")," is available to allow smart contracts across smart contract-enabled parachains to access price reference data, and is available as a Substrate oracle pallet.\xa0"),(0,o.kt)(l.Z,{value:"acurast",mdxType:"TabItem"}," Solutions such as",(0,o.kt)("a",{href:"https://acurast.com",target:"_blank"},"Acurast")," enables developers to delegate oracle requests to their network of phones, which provide off-chain data and computation to the",(0,o.kt)("a",{href:"https://docs.acurast.com/integrations/substrate",target:"_blank"},"Acurast Pallet"),". Acurast supports both Substrate (WASM) and EVM environments.")),(0,o.kt)("p",null,"When using an oracle in your application you should be aware of the benefits and risks that are\nbaked into its specific model."),(0,o.kt)("h2",{id:"decentralized-storage-options"},"Decentralized Storage Options"),(0,o.kt)("p",null,"Storage is an integral part of modern computer systems, and the same is true for distributed and\ndecentralized systems like a blockchain. When interacting with the\nKusama ecosystem, it will be helpful if you\nfamiliarize yourself with the current Web3 approach towards decentralized storage."),(0,o.kt)("h2",{id:"dcs-decentralized-cloud-storage"},"DCS (Decentralized Cloud Storage)"),(0,o.kt)("p",null,"The key attribute that characterizes centralized cloud storage is the location of data. In\ndecentralized cloud storage, the key attribute becomes the data itself instead of the data's\nlocation. This can be viewed as the shift from the centralized ",(0,o.kt)("em",{parentName:"p"},"location-centric")," storage approach\nto the decentralized ",(0,o.kt)("em",{parentName:"p"},"content-centric")," approach."),(0,o.kt)(i.Z,{groupId:"clients",values:[{label:"IPFS (Interplanetary File System)",value:"ipfs"},{label:"Crust Storage",value:"crust"},{label:"Filebase",value:"filebase"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"ipfs",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ipfs.io/"},"IPFS")," is a peer-to-peer distributed file system that seeks to connect all\ncomputing devices with the same system of files, by utilizing features such as content-addressing,\ncontent-signing, and enhanced security methods through encryption. IPFS aims to address the current\nhurdles of the HTTP-based Internet.")),(0,o.kt)(l.Z,{value:"crust",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://crust.network"},"Crust Network")," provides a Web3.0 decentralized storage network for the\nMetaverse. It is designed to realize core values of decentralization, privacy, and assurance. Crust\nsupports multiple storage-layer protocols such as ",(0,o.kt)("a",{parentName:"p",href:"#ipfs-interplanetary-file-system"},"IPFS"),", and\nexposes instant accessible on-chain storage functions to users. Crust\u02bcs technical stack is also\ncapable of supporting data manipulating and computing."),(0,o.kt)("p",null,"Crust provides a native cross-chain communication pallet based on\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-xcm"},"XCMP"),", called\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/crustio/crust/tree/parachain/shadow/crust-collator/pallets/xstorage"},"xStorage"),"."),(0,o.kt)("p",null,"The protocol also supports most smart contract platforms, including Ethereum, with its\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/buildCrossChainSolution"},"cross-chain dStorage solution"),"."),(0,o.kt)("p",null,"To learn more about Crust, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/en"},"Crust Network Wiki"),". Try\nintegrating with Crust by following their\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.crust.network/docs/en/build101"},"Crust Storage 101")," guide.")),(0,o.kt)(l.Z,{value:"filebase",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://filebase.com"},"Filebase")," is the first S3-compatible object storage platform that allows you\nto store data in a secure, redundant, and performant manner across multiple decentralized storage\nnetworks."),(0,o.kt)("p",null,"Filebase offers a geo-redundant IPFS pinning service that allows you to pin files to IPFS across\nmultiple diverse geographic locations. All files uploaded to IPFS through Filebase are automatically\npinned to the Filebase infrastructure with 3x replication across the globe. This ensures that your\ndata is globally available and redundant at all times."),(0,o.kt)("p",null,"Filebase acts as an easy on-ramp to IPFS and decentralized storage by offering a user-friendly web\nconsole dashboard, making drag-and-dropping files onto Web3 simple and easy. Filebase also provides\nan S3-compatible API for widespread integrations and configurations in current workflows."),(0,o.kt)("p",null,"To learn more about Filebase, check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.filebase.com"},"Filebase Documentation"),", and\nspecifically the documentation on\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.filebase.com/web3-education/web3-tutorials/polkadot/polkadot-deploy-a-polkadot-dapp-on-decentralized-storage"},"deploying Polkadot dApp on decentralized storage."),"\nYou can get started with Filebase by signing up ",(0,o.kt)("a",{parentName:"p",href:"https://filebase.com/signup"},"here.")))))}f.isMDXComponent=!0}}]);