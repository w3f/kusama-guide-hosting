"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3933],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)a=i[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=o.createContext({}),p=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},u=function(t){var e=p(t.components);return o.createElement(s.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(s,".").concat(d)]||c[d]||h[d]||i;return a?o.createElement(m,n(n({ref:e},u),{},{components:a})):o.createElement(m,n({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,n=new Array(i);n[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},27023:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=a(87462),r=a(63366),i=(a(67294),a(3905)),n=["components"],l={id:"build-tools-index",title:"Tool Index",sidebar_label:"Tool Index",description:"Reference point for a list of tools to support your development.",keywords:["tools","clients","libraries","explorers","monitor","data","SCALE"],slug:"../build-tools-index"},s=void 0,p={unversionedId:"build/build-tools-index",id:"build/build-tools-index",title:"Tool Index",description:"Reference point for a list of tools to support your development.",source:"@site/../docs/build/build-tools-index.md",sourceDirName:"build",slug:"/build-tools-index",permalink:"/docs/build-tools-index",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"build-tools-index",title:"Tool Index",sidebar_label:"Tool Index",description:"Reference point for a list of tools to support your development.",keywords:["tools","clients","libraries","explorers","monitor","data","SCALE"],slug:"../build-tools-index"},sidebar:"docs",previous:{title:"Using Light Clients",permalink:"/docs/build-light-clients"},next:{title:"Open Source Stack",permalink:"/docs/build-open-source"}},u={},c=[{value:"Wallets",id:"wallets",level:2},{value:"Block Explorers",id:"block-explorers",level:2},{value:"Blockchain Analytics",id:"blockchain-analytics",level:2},{value:"Network Monitoring &amp; Reporting",id:"network-monitoring--reporting",level:2},{value:"Clients",id:"clients",level:2},{value:"Tools",id:"tools",level:2},{value:"IDEs",id:"ides",level:2},{value:"UI",id:"ui",level:2},{value:"Libraries",id:"libraries",level:2},{value:"Polkadot-JS API",id:"polkadot-js-api",level:3},{value:"Alternative Libraries",id:"alternative-libraries",level:3},{value:"CLI Tools",id:"cli-tools",level:3},{value:"WASM",id:"wasm",level:3},{value:"RPC and API Tools",id:"rpc-and-api-tools",level:3},{value:"SCALE Codec",id:"scale-codec",level:3},{value:"Data Crawling and Conversion",id:"data-crawling-and-conversion",level:2}],h={toc:c},d="wrapper";function m(t){var e=t.components,a=(0,r.Z)(t,n);return(0,i.kt)(d,(0,o.Z)({},h,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Here, we provide a list of tools available for your development needs. They are sorted by context.\nIf you're actively maintaining a tool that might be useful to other Polkadot, Kusama or Substrate\ndevelopers, feel free to ",(0,i.kt)("a",{parentName:"p",href:"/docs/contributing"},"add it in"),"."),(0,i.kt)("h2",{id:"wallets"},"Wallets"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"Wallets")," page."),(0,i.kt)("h2",{id:"block-explorers"},"Block Explorers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps/#/explorer"},"Polkadot-JS Apps Explorer")," - Polkadot dashboard block\nexplorer. Supports dozens of other networks, including Kusama, Westend, and other remote or local\nendpoints. ",(0,i.kt)("a",{parentName:"li",href:"https://cloudflare-ipfs.com/ipns/dotapps.io"},"Access via IPFS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://subscan.io"},"Subscan")," - Blockchain explorer for Substrate chains.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/itering/subscan-essentials"},"Repo"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://3xpl.com/polkadot"},"3xpl.com")," - Fastest ad-free universal block explorer and JSON API with\nPolkadot support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://blockchair.com/polkadot"},"Blockchair.com")," - Universal blockchain explorer and search\nengine with Polkadot support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.statescan.io/"},"Statescan.io")," - Polkadot & Kusama Blockchain explorer.")),(0,i.kt)("h2",{id:"blockchain-analytics"},"Blockchain Analytics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://app.web3go.xyz/#/"},"Web3go")," - An open platform for everyone to play with, curate and\nvisualize multi-blockchain data"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkawatch.app/"},"Polkawatch")," - Polkadot Decentralization Analytics")),(0,i.kt)("h2",{id:"network-monitoring--reporting"},"Network Monitoring & Reporting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://telemetry.polkadot.io/"},"Polkadot Telemetry Service")," - Network information including what\nnodes are running the chain, what software versions they are running, sync status, and location."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/Polkabot"},"Polkabot")," - Polkadot network monitoring and reporting using Matrix\n(Riot / Element) chat. Users may create custom bot plugins.\n",(0,i.kt)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkabot-a3dba18c20c8"},"Blogpost"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Ryabina-io/substratebot"},"Ryabina's Telegram Bot")," - A Telegram bot for\nmonitoring on-chain events of Substrate chains.\n",(0,i.kt)("a",{parentName:"li",href:"https://gitlab.com/Polkabot/polkabot"},"GitHub Repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkastats.io/"},"PolkaStats")," - Polkadot network statistics (includes Kusama). Shows\nnetwork information and staking details from validators and intentions.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Colm3na/polkastats-v2/"},"GitHub Repository"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/panic"},"Panic")," - A node monitoring and alert server for validators."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-web3-stack/guardian"},"OpenWeb3/Guardian")," - A CLI tool and JS library to\nmonitor on chain states and events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sodazone/ocelloids"},"Ocelloids SDK")," - Typescript SDK for multi-chain monitoring\nthat supports domain-specific logic for different pallets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ArthurHoeke/cyclops/"},"Cyclops Dashboard")," - a validator dashboard application\nthat helps Polkadot network validators keep track of all their validators, their staking rewards,\nand performance.")),(0,i.kt)("h2",{id:"clients"},"Clients"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot"},"Polkadot")," - The original Rust\nimplementation of the Polkadot Host."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/kagome"},"Kagome")," - A C++ Polkadot implementation of the Polkadot Host\ndeveloped by ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/soramitsu"},"Soramitsu"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ChainSafe/gossamer"},"Gossamer")," - A Go implementation of the Polkadot Host\ndeveloped by ",(0,i.kt)("a",{parentName:"li",href:"https://chainsafe.io/"},"ChainSafe Systems"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/txwrapper"},"TX Wrapper")," - Helper functions for offline transaction\ngeneration.")),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate"},"Substrate")," - Blockchain\ndevelopment platform written in Rust. The Rust version of the Polkadot Host is being built with\nSubstrate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/"},"Substrate Docs")," - Comprehensive documentation and tutorials for\nbuilding a blockchain using Substrate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/vscode-substrate"},"Substrate VSCode plugin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-debug-kit"},"Substrate Debug Kit")," - A collection of debug\ntools and libraries around substrate chains. Includes tools to calculate NPoS elections offline,\ndisk usage monitoring, test templates against chain state and other pallet-specific helper."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://crates.io/crates/diener"},"Diener")," - A tool for easy changing of Polkadot or Substrate\ndependency versions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/shawntabrizi/polkadot-launch"},"Polkadot Launch")," - A tool to easily launch\ncustom local parachain-enabled Polkadot versions."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/halva-suite/halva"},"Halva")," - A Truffle-inspired local development environment\nfor Substrate."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/maxsam4/fork-off-substrate"},"Fork-off Substrate")," - Copies the state of an\nexisting chain into your local version and lets you further experiment on it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.chevdor.com/tags/srtool/"},"srtool")," - A tool for verifying runtime versions against\non-chain proposal hashes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nikvolf/sub-bench"},"sub-bench")," - A tool to spam your node with transactions for\nthe sake of benchmarking."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/danforbes/substrate-devhub-utils"},"substrate-devhub-utils")," - A set of\nJavaScript utilities making life with Substrate a little easier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/NikVolf/sub-flood"},"sub-flood")," - A tool to benchmark Substrate by flooding it\nwith requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Apillon"},"Apillon")," - A Web3 development platform with a complete toolbox and\naccess to Polkadot\u2019s technology stack.")),(0,i.kt)("h2",{id:"ides"},"IDEs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://chainide.gitbook.io/chainide-english-1/ethereum-ide-1/13.-astar-ide"},"Astar IDE")," by\n",(0,i.kt)("a",{parentName:"li",href:"https://chainide.com/"},"Chain IDE")," is a tool for lightning-speed smart contracts and dApp\ndevelopment for ",(0,i.kt)("a",{parentName:"li",href:"https://chainide.com/s/createTempProject/astar-wasm?language=en"},"Wasm")," and\n",(0,i.kt)("a",{parentName:"li",href:"https://chainide.com/s/createTempProject/astar-evm?language=en"},"EVM"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/sandoxio/sandox"},"Sandox IDE")," is an integrated development environment (IDE)\nwith tools for building in the Polkadot environment. Currently helpful for creating applications\nin JS.")),(0,i.kt)("h2",{id:"ui"},"UI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Swader/polkadash"},"Polkadash")," - VueJS-based starter kit for custom user\ninterfaces for Substrate chains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/apps"},"Polkadot JS Apps UI")," - Repository of the\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/apps"},"polkadot.js.org/apps")," UI."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Front-end Template")," -\nReactJS-based starter UI for custom user interfaces for Substrate chains."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/extension"},"Polkadot JS Browser Extension")," - Key management in a\nChrome extension."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot-ui.info/"},"Polkadot UI")," - A library and platform for developing and publishing\nassets for Polkadot dapps.")),(0,i.kt)("h2",{id:"libraries"},"Libraries"),(0,i.kt)("h3",{id:"polkadot-js-api"},"Polkadot-JS API"),(0,i.kt)("p",null,"The Polkadot-JS API provides various utility functions that are used across all projects in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"@polkadot")," namespace and is split into a number of internal utility packages. The documentation and\nusage instructions are provided at ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},"Polkadot-JS API Documentation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/keyring"},"@polkadot/keyring")," This allows you to create and load\naccounts in JavaScript. It is helpful for creating wallets or any application that will require\nthe user to write to chain. ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/keyring/start/create"},"Examples"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/keyring/start/install#other-dependencies"},"@polkadot/util")," Utility\nfunctions like checking if a string is hex-encoded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/util-crypto/"},"@polkadot/util-crypto")," Useful cryptographic utilities\nfor developing with Polkadot.")),(0,i.kt)("h3",{id:"alternative-libraries"},"Alternative Libraries"),(0,i.kt)("p",null,"The following libraries/SDKs allow for interfacing with a Substrate node in other languages:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkascan/py-substrate-interface"},"Python Library by Polkascan")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/centrifuge/go-substrate-rpc-client"},"Go Library by Centrifuge")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/strategyobject/substrate-client-java"},"Java Library by StrategyObject")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/fearless-utils-iOS"},"Fearless Utils iOS Swift SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nova-wallet/substrate-sdk-ios"},"Nova Wallet iOS/Swift Substrate SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/soramitsu/fearless-utils-Android"},"Kotlin SDK")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/leonardocustodio/polkadart"},"Dart/Flutter Library"))),(0,i.kt)("h3",{id:"cli-tools"},"CLI Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools/tree/master/packages/api-cli"},"@polkadot/api-cli")," Command\nline interface for the polkadot API. ",(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/api/start"},"Documentation"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools/tree/master/packages/monitor-rpc"},"@polkadot/monitor-rpc")," An\nRPC monitor for Polkadot. See the RPC tools below for additional information."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/tools/tree/master/packages/signer-cli"},"@polkadot/signer-cli")," A\nTool to construct, sign, and broadcast transactions. Signing can be done offline."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usetech-llc/polkadot_api_cpp"},"Polkadot API Cpp")," - A \u0421++ API for Polkadot, can\nbuild ",(0,i.kt)("inlineCode",{parentName:"li"},"clip"),", a command line tool."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.substrate.io/reference/command-line-tools/subkey/"},"Subkey")," - Command line utility\nfor generating and inspecting key pairs.")),(0,i.kt)("h3",{id:"wasm"},"WASM"),(0,i.kt)("p",null,"WebAssembly related tools and projects."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/ink/"},"ink!")," - An eDSL to write WebAssembly based smart contracts\nusing the Rust programming language."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/parity-wasm"},"parity-wasm")," - Low-level WebAssembly format library."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/wasm-utils"},"wasm-utils")," - Collection of WebAssembly utilities used\nin pwasm-ethereum and substrate contract development."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/wasmi"},"wasmi")," - A WebAssembly interpreter conceived as a component\nof parity-ethereum (Ethereum-like contracts in Wasm) and Substrate.")),(0,i.kt)("h3",{id:"rpc-and-api-tools"},"RPC and API Tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkadot-js/api/tree/master/packages/rpc-provider"},"@polkadot/api/rpc-provider"),"\nDemonstrates how the JS tools interact with the node over RPC."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.js.org/docs/substrate/rpc"},"RPC documentation")," - Documentation of Substrate RPC\nmethods."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/SimplyVC/polkadot_api_server"},"Polkadot API Server by SimplyVC")," - A wrapper\naround the Polkadot API which makes it easier to make Polkadot API calls from any programming\nlanguage."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/itering/substrate-api-rpc"},"Go: Subscan API")," - Go API for Polkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usetech-llc/polkadot_api_cpp"},"C++ Polkadot API")," - \u0421++ API for Polkadot."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ajuna-network/Ajuna.SDK"},".NET Toolchain for Polkadot/Substrate API")," -\nToolchain to generate Polkadot API & Service Layer for .NET (usable in Unity)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/usetech-llc/polkadot_api_dotnet"},".NET Polkadot API")," - Polkadot Substrate API\nfor .NET."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/polkascan/py-substrate-interface"},"Python Polkadot API")," - Polkadot library for\nPython."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/centrifuge/go-substrate-rpc-client/"},"GSRPC")," - Substrate RPC client in Go,\na.k.a. GSRPC."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-api-sidecar"},"Substrate API Sidecar")," - An HTTP wrapper for\nSubstrate, abstracting some complex RPC calls into simple REST calls."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-subxt"},"Subxt")," - A Rust library to submit extrinsics to a\nSubstrate node via RPC.")),(0,i.kt)("h3",{id:"scale-codec"},"SCALE Codec"),(0,i.kt)("p",null,"The SCALE (Simple Concatenated Aggregate Little-Endian) Codec is a lightweight, efficient, binary\nserialization and deserialization codec."),(0,i.kt)("p",null,"It is designed for high-performance, copy-free encoding and decoding of data in resource-constrained\nexecution contexts, such as the Substrate runtime. It is not self-describing in any way and assumes\nthe decoding context has all type knowledge about the encoded data."),(0,i.kt)("p",null,"It is used in almost all communication to/from Substrate nodes, so implementations in different\nlanguages exist:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/substrate-developer-hub/awesome-substrate#scale-codec"},"Substrate Awesome"),"\nmaintains a list of SCALE codex implementations.")),(0,i.kt)("h2",{id:"data-crawling-and-conversion"},"Data Crawling and Conversion"),(0,i.kt)("p",null,"The following tools help you extract and structure data from a Substrate node."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate-archive"},"Parity's Substrate Archive")," - Can be run\nalongside a Substrate node to archive all blocks, state, and extrinsic data into PostgreSQL\ndatabase."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/subsquid/squid-archive-setup"},"Subsquid Archives")," - Generate a GraphQL database\nfrom a Substrate chain's data with rich filtering and querying capabilities. The data (events,\nextrinsics, blocks) for most parachains is readily available though public archive GraphQL\nendpoints, kept in\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/subsquid/archive-registry/blob/main/archives.json"},"Squid Archive Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/TheGoldenEye/polka-store"},"Polka-store")," - A tool which scans a Substrate chain\nand stores balance-relevant transactions in an SQLite database."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/playzero/substrate-graph"},"Substrate-graph")," - A compact indexer for Substrate\nbased nodes providing a GraphQL interface.")))}m.isMDXComponent=!0}}]);