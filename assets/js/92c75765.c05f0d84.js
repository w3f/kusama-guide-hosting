"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[434],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var i=n.createContext({}),p=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=p(a),k=r,c=u["".concat(i,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(c,o(o({ref:e},d),{},{components:a})):n.createElement(c,o({ref:e},d))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s[u]="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},61656:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=["components"],s={id:"wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of wallets in Polkadot ecosystem.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../wallets"},i=void 0,p={unversionedId:"general/wallets",id:"general/wallets",title:"Wallets",description:"An overview of wallets in Polkadot ecosystem.",source:"@site/../docs/general/wallets.md",sourceDirName:"general",slug:"/wallets",permalink:"/docs/wallets",draft:!1,tags:[],version:"current",lastUpdatedBy:"Kami",lastUpdatedAt:1675355576,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{id:"wallets",title:"Wallets",sidebar_label:"Wallets",description:"An overview of wallets in Polkadot ecosystem.",keywords:["wallets","account","signer","supported wallets","balance","token"],slug:"../wallets"},sidebar:"docs",previous:{title:"Claims",permalink:"/docs/kusama-claims"},next:{title:"PolkadotJS",permalink:"/docs/learn-polkadotjs"}},d={},u=[{value:"Non-Custodial Wallets",id:"non-custodial-wallets",level:2},{value:"Browser Extensions",id:"browser-extensions",level:3},{value:"Mobile Wallets",id:"mobile-wallets",level:3},{value:"Enkrypt",id:"enkrypt",level:3},{value:"PolkaGate",id:"polkagate",level:3},{value:"SubWallet",id:"subwallet",level:3},{value:"Talisman",id:"talisman",level:3},{value:"Fearless Wallet",id:"fearless-wallet",level:3},{value:"Nova Wallet",id:"nova-wallet",level:3},{value:"Polkawallet",id:"polkawallet",level:3},{value:"Supported Wallets",id:"supported-wallets",level:2},{value:"Encryption Enhancement",id:"encryption-enhancement",level:2}],m={toc:u};function k(t){var e=t.components,a=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Navigating the space of wallets can be overwhelming, if you are new to blockchain technology. In\ngeneral, an account on a typical blockchain network is a public-private key pair. Access to a\nprivate key gives full access to all the allowed transactions on that blockchain account. It is\nimportant to keep the private key secure."),(0,l.kt)("admonition",{title:"Not your keys, not your tokens!",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"With custodial wallets (like accounts central exchanges), another party controls your private keys.\nWith non-custodial wallets, only you have access to your account's private key.")),(0,l.kt)("p",null,"To realize the multichain vision of Polkadot, it is important to have non-custodial wallets that\nmake it convenient to interact with multiple blockchains in Polkadot ecosystem."),(0,l.kt)("h2",{id:"non-custodial-wallets"},"Non-Custodial Wallets"),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"You should use your own due diligence in researching and using the wallets listed below. For any\nissues related to these wallet, reach out to their support teams directly.")),(0,l.kt)("p",null,"Typically, the account keys are either stored and accessed through a browser extension or a\nsmartphone app (which are considered as a hot wallets as they are exposed online) or an airgapped\ndevice or a hardware wallet (which considered as a cold wallets as they are offline)."),(0,l.kt)("h3",{id:"browser-extensions"},"Browser Extensions"),(0,l.kt)("p",null,"Browser extension wallets at bare minimum act as key storage and management solution, allowing you to use your accounts with apps in the Web3 space. The wallets listed below offer functionality beyond that, allowing the featured actions to be performed directly through the extension. Some of them also allow interaction with air-gapped wallets and hardware devices"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,l.kt)("th",{parentName:"tr",align:null},"Browsers"),(0,l.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,l.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,l.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,l.kt)("th",{parentName:"tr",align:null},"Governance"),(0,l.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.enkrypt.com/"},"Enkrypt")),(0,l.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox, Opera, Safari"),(0,l.kt)("td",{parentName:"tr",align:null},"No, No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#enkrypt"},"Enkrypt Features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadotjs.plus/"},"PolkaGate")),(0,l.kt)("td",{parentName:"tr",align:null},"Chrome, Firefox"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#polkagate"},"PolkaGate features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,l.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.talisman.xyz/"},"Talisman")),(0,l.kt)("td",{parentName:"tr",align:null},"Brave, Chrome, Edge, Firefox"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#talisman"},"Talisman features"))))),(0,l.kt)("h3",{id:"mobile-wallets"},"Mobile Wallets"),(0,l.kt)("p",null,"Mobile wallets are fully packaged apps that allow all the featured actions, as well as the storage and management of your accounts, through the mobile app. Contrary to browser extensions, mobile wallets usually can't connect to third-party web apps. Some mobile wallets provide support for hardware wallets through bluetooth connectivity."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet"),(0,l.kt)("th",{parentName:"tr",align:null},"Platforms"),(0,l.kt)("th",{parentName:"tr",align:null},"Staking and Nomination Pools"),(0,l.kt)("th",{parentName:"tr",align:null},"NFTs"),(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans"),(0,l.kt)("th",{parentName:"tr",align:null},"Ledger support"),(0,l.kt)("th",{parentName:"tr",align:null},"Governance"),(0,l.kt)("th",{parentName:"tr",align:null},"Other features"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://fearlesswallet.io/"},"Fearless Wallet")),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#fearless-wallet"},"Fearless Wallet Features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://novawallet.io/"},"Nova Wallet"),"*"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#nova-wallet"},"Nova Wallet features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkawallet.io/"},"Polkawallet")),(0,l.kt)("td",{parentName:"tr",align:null},"iOS, Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#polkawallet"},"Polkawallet features"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://subwallet.app/"},"SubWallet")),(0,l.kt)("td",{parentName:"tr",align:null},"iOS (Testflight), Android"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes"),", ",(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"Yes")),(0,l.kt)("td",{parentName:"tr",align:null},"No"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#subwallet"},"SubWallet features"))))),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"*","Note about Nova wallet"),(0,l.kt)("p",{parentName:"admonition"},"There's ",(0,l.kt)("strong",{parentName:"p"},"another")," Nova wallet that is ",(0,l.kt)("strong",{parentName:"p"},"unrelated")," to the Polkadot ecosystem. Users are advised\nto ensure that they use the correct Nova wallet by downloading the app from their official website:\n",(0,l.kt)("a",{parentName:"p",href:"https://novawallet.io/"},"https://novawallet.io/"),". Before creating or restoring accounts , it is wise\nto double-check the wallet website URLs through official channels (most projects have it listed on\ntheir official social media handles).")),(0,l.kt)("h3",{id:"enkrypt"},"Enkrypt"),(0,l.kt)("p",null,"A multichain crypto wallet - Bitcoin, Ethereum, Polkadot, Kusama and a few parachains.\nNon-custodial, private, hardware wallet support (Ledger and Trezor). Private and open source. Hold,\nsend, and receive tokens and NFTs. Swap tokens and bridge assets between chains. Manage multiple\naccounts on multiple networks. Connect to web3 apps. Recipient of development grant from Web3\nFoundation."),(0,l.kt)("h3",{id:"polkagate"},"PolkaGate"),(0,l.kt)("p",null,"PolkaGate extension is a Kusama Treasury supported\n[",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/205"},"1"),"] extension/wallet. It is the next version of\nPolkadot-JS Plus, completely re-developed, with a new look and many\nperformance improvements. Supports proxy accounts and social recovery, address (watch-only) accounts,\nparachain accounts, custom remote nodes, phishing detection, QR account import, export/import/derive\naccount(s). "),(0,l.kt)("h3",{id:"subwallet"},"SubWallet"),(0,l.kt)("p",null,"Web3 multiverse gateway for Polkadot & Kusama ecosystem. Track, send, receive and monitor\nmulti-chain assets. XCM Transfer, NFT Management, Parity Signer & Ledger support, light\nclients support, QR-code account import, token import, EVM DApp support, MetaMask compatibility,\ncustom endpoint, fiat on-ramp. Subwallet received funding from Polkadot Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/138"},"1"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/162"},"2"),"]."),(0,l.kt)("h3",{id:"talisman"},"Talisman"),(0,l.kt)("p",null,"A better way to explore Web3. Keep your assets safe, manage your portfolio and explore Polkadot and\nEthereum apps with Talisman. Interact with Web3 apps, store your favourite crypto assets and manage\nyour accounts on over 150+ Substrate and EVM networks. NFT Management, ledger Support, fiat On-ramp,\nportfolio tracking. Talisman received funding from Polkadot Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/148"},"1"),"]."),(0,l.kt)("h3",{id:"fearless-wallet"},"Fearless Wallet"),(0,l.kt)("p",null,"The DeFi Wallet for the Future Android and iOS native mobile Polkadot/Kusama wallet for the Dotsama\necosystem with emphasis on UX, performance, and security. Get access to charts to better understand\nyour profits and how to maximize your staking performance. The goal of Fearless Wallet is to\nradically expand access to decentralized finance (DeFi) by making complex functions much easier to\nuse and understand. Fearless Wallet received funding from Kusama Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/23"},"1"),", ",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/34"},"2"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/74"},"3"),", ",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/102"},"4"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/178"},"5"),"]."),(0,l.kt)("h3",{id:"nova-wallet"},"Nova Wallet"),(0,l.kt)("p",null,"Supports OpenGov, Governance v1, XCM Transfers, Parity Signer & Ledger Support, DApp Support with\nPolkadot JS and MetaMask/EVM Integration. Nova Wallet received funding from Kusama Treasury\n[",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/122"},"1"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/158"},"2"),"]."),(0,l.kt)("h3",{id:"polkawallet"},"Polkawallet"),(0,l.kt)("p",null,"Polkawallet provides cross-chain asset one-stop management, convenient staking, governance, and\nmultiple DeFi services, the private key is self-owned. Polkawallet received funding from Kusama\nTreasury [",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/32"},"1"),",\n",(0,l.kt)("a",{parentName:"p",href:"https://kusama.polkassembly.io/treasury/41"},"2"),"]."),(0,l.kt)("h2",{id:"supported-wallets"},"Supported Wallets"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support")," can provide assistance with issues related to\nPolkadot-JS UI, the Polkadot-JS extension, or Parity Signer. For other wallet software, you should\ncontact the developers of that wallet. Please note that these wallets are oriented towards developers\nand power users."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Wallet Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Development State"),(0,l.kt)("th",{parentName:"tr",align:null},"Team Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://www.parity.io/signer/"},"Parity Signer")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"iOS and Android app used with ",(0,l.kt)("a",{parentName:"td",href:"https://parity.link/signer-companion"},"Companion")," or ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-JS Extension"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/apps/releases"},"Polkadot-JS Desktop")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Win, Mac, Linux")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Parity"),(0,l.kt)("td",{parentName:"tr",align:null},"Browser based wallet used with ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-JS Extension"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Zondax/ledger-polkadot"},"Ledger")),(0,l.kt)("td",{parentName:"tr",align:null},"Live"),(0,l.kt)("td",{parentName:"tr",align:null},"Zondax"),(0,l.kt)("td",{parentName:"tr",align:null},"Hardware wallet app used with ",(0,l.kt)("a",{parentName:"td",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS UI")," (and ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/polkadot-js/extension"},"Polkadot-JS Extension"),")")))),(0,l.kt)("h2",{id:"encryption-enhancement"},"Encryption Enhancement"),(0,l.kt)("p",null,"Some newly generated ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," account files cannot be imported (restored) into older wallet software.\nThis is due to an enhanced encryption method, which is also noticeable in a slight delay when\nencrypting/decrypting your wallet. If you are unable to load a ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," file, please ensure that you\nare using the latest version of the wallet software. If you are still unable to load it, ensure that\nthe wallet software is using the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/api/"},"Polkadot API"),"."))}k.isMDXComponent=!0}}]);