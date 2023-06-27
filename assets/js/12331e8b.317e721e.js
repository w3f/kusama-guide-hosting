"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(a),u=o,k=c["".concat(l,".").concat(u)]||c[u]||h[u]||s;return a?n.createElement(k,i(i({ref:t},d),{},{components:a})):n.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,i=new Array(s);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var n=a(87462),o=a(63366),s=(a(67294),a(3905)),i=["components"],r={id:"polkadotjs",title:"Polkadot-JS",sidebar_label:"Polkadot-JS",description:"Learn about the Polkadot-JS tool collection.",keywords:["polkadotjs","polkadotjs apps","apps UI","extension"],slug:"../polkadotjs"},l=void 0,p={unversionedId:"general/polkadotjs",id:"general/polkadotjs",title:"Polkadot-JS",description:"Learn about the Polkadot-JS tool collection.",source:"@site/../docs/general/polkadotjs.md",sourceDirName:"general",slug:"/polkadotjs",permalink:"/docs/polkadotjs",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1687778931,formattedLastUpdatedAt:"Jun 26, 2023",frontMatter:{id:"polkadotjs",title:"Polkadot-JS",sidebar_label:"Polkadot-JS",description:"Learn about the Polkadot-JS tool collection.",keywords:["polkadotjs","polkadotjs apps","apps UI","extension"],slug:"../polkadotjs"},sidebar:"docs",previous:{title:"Wallets and Extensions",permalink:"/docs/wallets-and-extensions"},next:{title:"Balances Transfers",permalink:"/docs/learn-balance-transfers"}},d={},c=[{value:"Polkadot-JS UI",id:"polkadot-js-ui",level:2},{value:"Polkadot-JS UI Desktop App",id:"polkadot-js-ui-desktop-app",level:3},{value:"Polkadot-JS Extension",id:"polkadot-js-extension",level:2},{value:"Polkadot-JS Phishing List",id:"polkadot-js-phishing-list",level:2},{value:"Polkadot-JS API",id:"polkadot-js-api",level:2},{value:"Querying On-chain Data",id:"querying-on-chain-data",level:3},{value:"Issuing Extrinsics",id:"issuing-extrinsics",level:3}],h={toc:c},u="wrapper";function k(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)(u,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/"},(0,s.kt)("strong",{parentName:"a"},"Polkadot-JS"))," is a collection of tools that interfaces with the\nKusama blockchain in a granular way. Below\nwe describe the different components of Polkadot-JS. For more information about Polkadot-JS you can\nconsult the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/"},(0,s.kt)("strong",{parentName:"a"},"official documentation")),"."),(0,s.kt)("h2",{id:"polkadot-js-ui"},"Polkadot-JS UI"),(0,s.kt)("admonition",{title:"Supported Wallet",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If you need help using the Polkadot-JS UI you can contact the\n",(0,s.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},(0,s.kt)("strong",{parentName:"a"},"Polkadot Support Team")),". Please note that this\nwallet is oriented toward developers and power users. For more user-friendly wallets, check out the\nsupported and treasury-funded wallets on the ",(0,s.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"Wallets Page"),".")),(0,s.kt)("p",null,"The Polkadot-JS UI is an application that loads in your browser. There is a standard DNS\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/"},(0,s.kt)("strong",{parentName:"a"},"hosted version")),", which always has the latest features, and an\n",(0,s.kt)("a",{parentName:"p",href:"https://dotapps.io/"},(0,s.kt)("strong",{parentName:"a"},"IPFS version"))," that is less frequently updated but is more decentralized.\nThis is also often referred to as Polkadot-JS Apps, UI or the Apps UI. In the Wiki pages we will\nalways refer to Polkadot-JS UI."),(0,s.kt)("p",null,"Polkadot-JS Apps has many capabilities that go beyond basic wallet functions such as account\ncreation and sending or receiving transactions. See the ",(0,s.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},(0,s.kt)("strong",{parentName:"a"},"dedicated section")),"\nfor more information about the UI."),(0,s.kt)("h3",{id:"polkadot-js-ui-desktop-app"},"Polkadot-JS UI Desktop App"),(0,s.kt)("p",null,"The Polkadot-JS UI also exists as a\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/releases/"},(0,s.kt)("strong",{parentName:"a"},"desktop application"))," for Windows, Mac and Linux.\nThe main advantage of using it is that by default it stores encrypted accounts on the filesystem\ninstead of browser's local storage. Local storage is susceptible to attacks using XSS (Cross-Site\nScripting). There's no such risk when with files stored on disk."),(0,s.kt)("p",null,"The desktop app uses the ",(0,s.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},(0,s.kt)("strong",{parentName:"a"},"Electron"))," framework. It provides the same\nfeatures as web app, the only difference being different account storage."),(0,s.kt)("admonition",{title:"Ledger not supported",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The desktop application does not support Ledger accounts. If you need a cold storage solution you\ncan try Parity Signer (aka Polkadot Vault).")),(0,s.kt)("h2",{id:"polkadot-js-extension"},"Polkadot-JS Extension"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},(0,s.kt)("strong",{parentName:"a"},"Polkadot-JS browser extension"))," is not a wallet ",(0,s.kt)("em",{parentName:"p"},"per se"),"\nbut an account management tool. It allows you to create accounts and import accounts from\n",(0,s.kt)("a",{parentName:"p",href:"/docs/ledger"},(0,s.kt)("strong",{parentName:"a"},"Ledger"))," devices or Parity Signer, allowing the signing of\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics"},(0,s.kt)("strong",{parentName:"a"},"extrinsics"))," using these accounts. It also allows you export\nexisting accounts and restore lost accounts (given you have the information to restore them)."),(0,s.kt)("p",null,"The extension is not made for users to interact with on-chain functions as one would find through a\nwallet app, i.e. it does not allow you to transact or do anything else other than adding and\nmanaging accounts. However, it also provides a simple interface for interacting with\nextension-compliant dApps such as the ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},(0,s.kt)("strong",{parentName:"a"},"Polkadot-JS UI")),"\nand the ",(0,s.kt)("a",{parentName:"p",href:"https://staking.polkadot.network/#/overview"},(0,s.kt)("strong",{parentName:"a"},"Polkadot Staking Dashboard")),"."),(0,s.kt)("p",null,"The extension is a robust key-storage tool, i.e. if you clear the cache of your browser your\naccounts will be kept. This does not happen if you added an account directly to the Polkadot-JS UI.\nAlso, the extension recognizes websites that have been flagged for malicious activity. Another\nsecurity note, the extension will always ask you if you want a specific website to access the\naccount information in it."),(0,s.kt)("admonition",{title:"Metadata Updates",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"The browser extension is a tool that interacts with the Polkadot network, but it is disconnected\nfrom it when it is not in use. It is important you\n",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics#metadata-updates"},(0,s.kt)("strong",{parentName:"a"},"always check for metadata updates"))," before using\nthe extension or other account management tools such as Parity Signer (aka Polkadot Vault).")),(0,s.kt)("h2",{id:"polkadot-js-phishing-list"},"Polkadot-JS Phishing List"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/phishing/"},(0,s.kt)("strong",{parentName:"a"},"Polkadot-JS phishing list"))," website is a community-driven\ncuration of malicious actors and operators. The Polkadot-JS extension uses this list to warn a user\nabout suspicious URLs and addresses that are part of the list, and automatically blocks the account\naddress."),(0,s.kt)("h2",{id:"polkadot-js-api"},"Polkadot-JS API"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/api"},(0,s.kt)("strong",{parentName:"a"},"Polkadot-JS API"))," is a JavaScript API allowing for\nprograms to interface with the functionalities of\nKusama."),(0,s.kt)("p",null,"While interacting with the underlying\n",(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@polkadot/api"},(0,s.kt)("strong",{parentName:"a"},"@polkadot/api")),", most interfaces are generated\nautomatically when connecting to an available node. This is quite a departure from many other API\ndesigns where the interfaces are commonly static."),(0,s.kt)("p",null,"When the API connects to a node, it initially retrieves the\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/runtime"},(0,s.kt)("strong",{parentName:"a"},"metadata")),' which is used to "decorate" the API based on\nits contents. The metadata provides data in the form of ',(0,s.kt)("inlineCode",{parentName:"p"},"api.<type>.<module>.<section>")," where ",(0,s.kt)("inlineCode",{parentName:"p"},"type"),"\nfits into one of the following categories:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"consts")," - runtime constants (these are not functions so the values are returned directly as they\nare defined by the endpoint)"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"query")," - chain state values"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tx")," - all extrinsics")),(0,s.kt)("p",null,"The metadata also provides information on\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/substrate/events/"},(0,s.kt)("strong",{parentName:"a"},"events")),", which can be queried using the\n",(0,s.kt)("inlineCode",{parentName:"p"},"api.query.system.events()")," interface."),(0,s.kt)("p",null,"None of the information contained within the ",(0,s.kt)("inlineCode",{parentName:"p"},"api.{consts, query, tx}.<module>.<method>")," endpoints\nare hard-coded in the API. These values are defined by the decoration applied from the initial\nmetadata response and are therefore completely dynamic. This suggests that when you connect to\ndifferent parachains, the metadata and API decoration will change and provide varying interfaces\nbased on the chain."),(0,s.kt)("p",null,"A developer can use Polkadot-JS Apps to test code's functionality. Interacting with the Polkadot-JS\ncomes down to either ",(0,s.kt)("a",{parentName:"p",href:"#querying-on-chain-data"},(0,s.kt)("strong",{parentName:"a"},"querying on-chain data"))," or\n",(0,s.kt)("a",{parentName:"p",href:"#issuing-extrinsics"},(0,s.kt)("strong",{parentName:"a"},"issuing an extrinsic")),"."),(0,s.kt)("h3",{id:"querying-on-chain-data"},"Querying On-chain Data"),(0,s.kt)("p",null,"To populate the Apps UI, the web app queries the Polkadot-JS API. The API then queries a\nKusama node and uses JavaScript to return\ninformation that the UI will display on the screen. You can choose which node to connect to by\nchanging it in the upper-left-hand corner of the screen."),(0,s.kt)("p",null,"Let's see how we can query on-chain data with Polkadot-JS UI on the Polkadot network with an\nexample. To find out the current value for existential deposit, navigate to Developer > Chain\nstate > Constants and query the balances pallet for existential deposit as shown in the snapshot\nbelow. You need to click on the plus button to execute the query. The value displayed is in\n",(0,s.kt)("a",{parentName:"p",href:"learn-DOT#polkadot"},"plancks")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"query chain state",src:a(75506).Z,width:"1728",height:"380"})),(0,s.kt)("h3",{id:"issuing-extrinsics"},"Issuing Extrinsics"),(0,s.kt)("p",null,"Extrinsics are pieces of information that come from outside the chain and are included in a block.\nExtrinsics can be one of three types: inherents, signed, and unsigned transactions."),(0,s.kt)("p",null,"Most extrinsics displayed on Polkadot-JS Apps are signed transactions. Inherits are non-signed and\nnon-gossiped pieces of information included in blocks by the block author, such as timestamps, which\nare \u201ctrue\u201d because a sufficient number of validators have agreed about validity."),(0,s.kt)("p",null,"Unsigned transactions are information that does not require a signature but will require some sort\nof spam prevention, whereas signed transactions are issued by the originator account of a\ntransaction which contains a signature of that account, which will be subject to a fee to include it\non the chain."))}k.isMDXComponent=!0},75506:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chain-state-constant-8663ba40c98411da3308fdaf40cb13ee.png"}}]);