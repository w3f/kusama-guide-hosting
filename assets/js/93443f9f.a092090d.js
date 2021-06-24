(self.webpackChunk=self.webpackChunk||[]).push([[422],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(u,i(i({ref:t},h),{},{components:n})):a.createElement(u,i({ref:t},h))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73889:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>c,metadata:()=>l,toc:()=>h,default:()=>d});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],s={id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?"},c=void 0,l={unversionedId:"learn-comparisons",id:"learn-comparisons",isDocsHomePage:!1,title:"Polkadot Comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?",source:"@site/../docs/learn-comparisons.md",sourceDirName:".",slug:"/learn-comparisons",permalink:"/docs/learn-comparisons",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-comparisons.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1624504676,formattedLastUpdatedAt:"6/24/2021",frontMatter:{id:"learn-comparisons",title:"Polkadot Comparisons",sidebar_label:"Other comparisons",description:"How does Polkadot compare to Ethereum 2, Cosmos, and other chains?"}},h=[{value:"In-Depth Comparisons",id:"in-depth-comparisons",children:[]},{value:"Other Comparisons",id:"other-comparisons",children:[{value:"Ethereum 1.x",id:"ethereum-1x",children:[]}]},{value:"Binance Smart Chain",id:"binance-smart-chain",children:[]}],p={toc:h};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot is a blockchain technology but makes some innovations that sets it apart from other popular\nchains."),(0,o.kt)("h2",{id:"in-depth-comparisons"},"In-Depth Comparisons"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"learn-comparisons-ethereum-2"},"vs Ethereum 2.0"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"learn-comparisons-cosmos"},"vs Cosmos")))),(0,o.kt)("h2",{id:"other-comparisons"},"Other Comparisons"),(0,o.kt)("h3",{id:"ethereum-1x"},"Ethereum 1.x"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org"},"Ethereum")," is a smart contract blockchain that allows for general computation\nto be deployed on-chain and operated across the p2p network. Ethereum 1.x refers to the current\nEthereum release and the immediately planned future upgrades."),(0,o.kt)("p",null,"The difference between Ethereum 1.x and Polkadot is quite large. Ethereum is a single chain that\nallows developers to extend its functionality through the deployment of blobs of code onto the chain\n(called smart contracts). Polkadot, as described in the whitepaper, is a fully extensible and\nscalable blockchain network that provides security and interoperability through shared state."),(0,o.kt)("p",null,"In practical terms, this means that the layer of abstraction between these two projects is\nremarkably different for developers. In Ethereum, developers write smart contracts that all execute\non a single virtual machine, called the Ethereum Virtual Machine (EVM).\nIn Polkadot, however, developers write their logic into individual blockchains, where the interface\nis part of the state transition function of the blockchain itself.\nPolkadot will also support smart contract blockchains for Wasm and EVM to provide compatibility with\nexisting contracts, but will not have smart contract functionality on its core chain, the Relay\nChain."),(0,o.kt)("p",null,"As such, Polkadot is a possible augmentation and scaling method for Ethereum 1.x, rather than\ncompetition."),(0,o.kt)("h2",{id:"binance-smart-chain"},"Binance Smart Chain"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.binance.com"},"Binance Chain")," is a Proof of Stake Authority (PoSA) blockchain used to exchange\ndigital assets on Binance DEX. Binance Smart Chain is an EVM-compatible smart contract chain bridged\nto Binance Chain. Together, they form the Binance Dual Chain System. Binance Smart Chain is also a\nProof of Stake Authority chain and allows users to create smart contracts and dapps."),(0,o.kt)("p",null,"Both chains are built with Cosmos SDK and therefore are a part of the\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-comparisons-cosmos"},"Cosmos")," ecosystem. Due to specifics\nof the Cosmos architecture, interoperability of Binance Smart Chain is based on bridges. This means\nall validators of both chains are also bridge operators, therefore the security of the system relies\non trusting validators. At the moment, there are 21 Binance Smart Chain validator nodes."),(0,o.kt)("p",null,"Polkadot has an entirely different purpose, as it was built to connect and secure unique\nblockchains. It is a protocol on which single blockchains (such as Binance Smart Chain) could be\nbuilt and benefit from shared security, interoperability and scalability. Interoperability within\nPolkadot is based on pooled security on Polkadot, and the security of the entire Polkadot network,\nand has much stronger economic security."),(0,o.kt)("p",null,"Scalability based on bridges relies on each bridged chain finding its own set of validators,\ntherefore duplicate resources are required. Scalability on Polkadot is based on the security of the\nRelay Chain, and as the number of validators in the active set on Polkadot are increased, more\nparachains can be supported."))}d.isMDXComponent=!0}}]);