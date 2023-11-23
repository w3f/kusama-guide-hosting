"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7837],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||r;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83388:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],i={id:"ledger",title:"Using the Polkadot & Kusama Ledger Applications",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},s=void 0,p={unversionedId:"general/ledger",id:"general/ledger",title:"Using the Polkadot & Kusama Ledger Applications",description:"Use the Polkadot Ledger Application.",source:"@site/../docs/general/ledger.md",sourceDirName:"general",slug:"/ledger",permalink:"/docs/ledger",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1699519944,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{id:"ledger",title:"Using the Polkadot & Kusama Ledger Applications",sidebar_label:"Ledger",description:"Use the Polkadot Ledger Application.",keywords:["ledger","staking","polkadot app"],slug:"../ledger"},sidebar:"docs",previous:{title:"Voting for Councillors",permalink:"/docs/maintain-guides-how-to-vote-councillor"},next:{title:"Asset Hub Ledger App",permalink:"/docs/learn-guides-assets-ledger"}},d={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Using Ledger Live",id:"using-ledger-live",level:2},{value:"Ledger Developer Release",id:"ledger-developer-release",level:2},{value:"Why you might need the Developer Release",id:"why-you-might-need-the-developer-release",level:3},{value:"Install the Developer Release",id:"install-the-developer-release",level:3}],h={toc:u},c="wrapper";function m(e){var t=e.components,i=(0,o.Z)(e,l);return(0,r.kt)(c,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Need support with your Ledger Wallet?",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you need help using Ledger you can contact the\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},(0,r.kt)("strong",{parentName:"a"},"Polkadot Support Team")),".")),(0,r.kt)("admonition",{title:"Please Note",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Because of required WebUSB support, Ledger wallets currently only work on Chromium-based browsers\nlike Google Chrome.")),(0,r.kt)("p",null,"The Kusama ",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/"},"Ledger"),"\napplication is compatible with the Ledger Nano S and the Ledger Nano X devices. Ledger devices are\nhardware wallets that keep your secret key secured on a physical device that does not expose it to\nyour computer or the internet. The private keys will not be leaked even if you connect your nano via\nUSB to your computer. Ledger devices are also hierarchical deterministic wallets (HD wallets), that\nis:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Deterministic")," means that only one seed phrase generates all the accounts for different\nblockchain networks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Hierarchical")," means that the accounts are generated in a tree-like structure for different\npurposes.")),(0,r.kt)("p",null,"Ledger devices can be equipped with applications that are blockchain-specific. Third parties usually\ndevelop such applications, enabling the user to transact securely on the blockchain network. The\nPolkadot Ledger application allows you to manage\nKusama's native token,\nKSM. It supports most of the transaction types of\nthe network, including batch transactions from the Utility pallet."),(0,r.kt)("admonition",{title:"Ledger apps may not support all the transactions",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Check the\n","",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-kusama"},"Ledger Kusama App"),"\nspecification for the list of transactions supported. Some transactions are supported only on a\nspecific app version, and others are not supported by any version. For instance, the staking ",(0,r.kt)("inlineCode",{parentName:"p"},"rebag"),"\nextrinsic is supported on the ",(0,r.kt)("strong",{parentName:"p"},"XL version")," but not on the ",(0,r.kt)("strong",{parentName:"p"},"lite version"),". Also, joining a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," is only possible with the XL version.")),(0,r.kt)("p",null,"If you have trouble using Ledger or following the directions below, you can try searching for your\nissue on the ",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/"},"Polkadot support pages"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("admonition",{title:"For Ledger Nano S users only",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The lite version of the Polkadot Ledger App that you can install by default in the Ledger Nano S has\nlimited functionality. The Ledger Nano S is no longer produced and has limited memory that is just\nright to accommodate the XL version of the Polkadot Ledger App, which gives the user more\nfunctionalities."),(0,r.kt)("p",{parentName:"admonition"},"If you do use a Nano S with the XL version you will not be able to:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Install any other Ledger application on your device"),(0,r.kt)("li",{parentName:"ul"},"Add Polkadot accounts to the Ledger Live App.")),(0,r.kt)("p",{parentName:"admonition"},"But you will be able to add them to ",(0,r.kt)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},(0,r.kt)("strong",{parentName:"a"},"wallets and extensions"))," that\nsupport Ledger devices.")),(0,r.kt)("p",null,"Here is a list of what you will need before using\nKusama with Ledger:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Ledger Nano X or Nano S plus (recommended for\nKusama Ledger App space requirements and\nfunctionalities)."),(0,r.kt)("li",{parentName:"ul"},'The latest firmware of the Kusama Ledger\nApp installed (always check for updates in Ledger Live under the "Manager" tab, you will need to\nallow access with your nano).'),(0,r.kt)("li",{parentName:"ul"},"Ledger Live is installed and up-to-date."),(0,r.kt)("li",{parentName:"ul"},"A Chromium-based web browser if you use a browser extension.")),(0,r.kt)("h2",{id:"using-ledger-live"},"Using Ledger Live"),(0,r.kt)("p",null,"See\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000175822-how-to-use-polkadot-and-stake-with-ledger-live"},"this support article"),"\nto learn how to use Kusama with ledger live."),(0,r.kt)("h2",{id:"ledger-developer-release"},"Ledger Developer Release"),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This section is for developers only. It is recommended to install the application from Ledger Live\nunless you ",(0,r.kt)("em",{parentName:"p"},"know precisely what you're doing"),".")),(0,r.kt)("h3",{id:"why-you-might-need-the-developer-release"},"Why you might need the Developer Release"),(0,r.kt)("p",null,"Ledger apps for the Kusama ecosystem are\ndeveloped by ",(0,r.kt)("a",{parentName:"p",href:"https://zondax.ch/"},"Zondax"),". When new functionalities are added to the Ledger apps,\nthey are made available on a developer release for testing purposes. After a successful audit and\nreview, the apps would be available for download and installation using\n",(0,r.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},"Ledger Live"),". As it takes some time for Ledger to audit and\nreview the release, the app upgrade option may not be available on Ledger Live when the new runtime\nis deployed on the network. If this happens, users cannot use Ledger devices to sign transactions.\nSuppose you cannot wait a few days until the app passes the Ledger audit, you can install the\ndeveloper release from the shell using the latest version published on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Zondax/ledger-polkadot/releases"},"the Zondax GitHub repository"),"."),(0,r.kt)("h3",{id:"install-the-developer-release"},"Install the Developer Release"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/4SyVQrlXZ_Q"},(0,r.kt)("strong",{parentName:"a"},"this video tutorial"))," to learn how to install the developer\nrelease of your ledger app."),(0,r.kt)("p",{parentName:"admonition"},"Currently, the developer release can be installed only on the Nano S and S plus devices and can't be\ninstalled on the Nano X.")),(0,r.kt)("p",null,"To install the developer version, make sure you have the latest ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," version and follow the steps\nbelow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("em",{parentName:"li"},"ledgerblue")," running the command ",(0,r.kt)("inlineCode",{parentName:"li"},"python3 -m pip install ledgerblue"),"."),(0,r.kt)("li",{parentName:"ul"},"Download the developer release from the\n",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Zondax/ledger-polkadot/releases"},"Zondax GitHub repository"),". The file will be\nnamed ",(0,r.kt)("inlineCode",{parentName:"li"},"installer_nanos_plus.sh")," or something similar, depending on your ledger device."),(0,r.kt)("li",{parentName:"ul"},"Locate the downloaded shell script and make it executable in your shell by typing the command\n",(0,r.kt)("inlineCode",{parentName:"li"},"chmod +x installer_nanos_plus.sh"),"."),(0,r.kt)("li",{parentName:"ul"},"You can now use the ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh --help")," command to visualize the available options\n(see below)")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Dev Ledger Help Menu",src:n(95932).Z,width:"525",height:"54"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Attach your Ledger Nano (in this case Nano S Plus) to your computer, enter the PIN code, and run\nthe command ",(0,r.kt)("inlineCode",{parentName:"li"},"./installer_nanos_plus.sh load"),'. Scroll with the right button until you see "Allow\nunsafe manager", left and right press to confirm. You will be asked to confirm the action of\nuninstalling the app and subsequently installing the newer version. After confirming both actions,\nthe shell script will install the version on your device. You must insert the PIN code to use the\ndevice after the installation.'),(0,r.kt)("li",{parentName:"ul"},"If you wish to revert the version to the stable release, go to Ledger Live. The app will\nautomatically detect the developer release and give the option to install the previous stable\nrelease.")))}m.isMDXComponent=!0},95932:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ledger-help-menu-3af6592c7bc1830644f7ca9d55005cf4.png"}}]);