"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2042],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),h=o,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},63689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"polkadot-vault",title:"Polkadot Vault (formerly Parity Signer)",sidebar_label:"Polkadot Vault",description:"Your old Smartphone as an Air-gapped Wallet.",keywords:["parity signer","signer","polkadot vault"],slug:"../polkadot-vault"},s=void 0,p={unversionedId:"general/polkadot-vault",id:"general/polkadot-vault",title:"Polkadot Vault (formerly Parity Signer)",description:"Your old Smartphone as an Air-gapped Wallet.",source:"@site/../docs/general/polkadot-vault.md",sourceDirName:"general",slug:"/polkadot-vault",permalink:"/docs/polkadot-vault",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1695304296,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"polkadot-vault",title:"Polkadot Vault (formerly Parity Signer)",sidebar_label:"Polkadot Vault",description:"Your old Smartphone as an Air-gapped Wallet.",keywords:["parity signer","signer","polkadot vault"],slug:"../polkadot-vault"}},d={},c=[{value:"Vault vs. Ledger",id:"vault-vs-ledger",level:2},{value:"Create and Import Accounts",id:"create-and-import-accounts",level:2},{value:"Signing Extrinsics",id:"signing-extrinsics",level:2},{value:"Update the Vault App",id:"update-the-vault-app",level:2},{value:"Security Notes",id:"security-notes",level:2},{value:"Add Chains",id:"add-chains",level:2}],u={toc:c},h="wrapper";function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Rebranding of Parity Signer to Polkadot Vault",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The Polkadot Vault app rebranding is live on\n",(0,r.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/parity-signer/id1218174838"},"iOS")," and\n",(0,r.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=io.parity.signer"},"Android")," devices. The source code\nof all versions can be downloaded on\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/releases"},"the GitHub repo"),"."),(0,r.kt)("p",{parentName:"admonition"},"The Polkadot Vault app is an air-gapped cold storage solution for all users, including developers\nand power users. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/ledger"},"Ledger")," devices for other cold storage solutions.")),(0,r.kt)("admonition",{title:"Smartphone compatibility with Polkadot Vault",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Note that although the Vault app is available for old smartphones, different versions will be\ninstalled according to the phone's hardware. For example, smartphones like iPhone 6 will install\nParity Signer (the old brand name of the Vault app) with limited capabilities. There will be no log\nor warning if the phone was connected to the internet while not using the app. Also, no metadata\nupdates are possible, and no option to add new networks. This would not be as secure as the latest\nversion of the app. We would recommend that you use smartphones compatible with the latest Polkadot\nVault app.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IG_RGLsb2g0"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/IG_RGLsb2g0/0.jpg",alt:"Polkadot Vault Tutorial"}))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer"},"Polkadot Vault")," (formerly Parity Signer) is a cold\nstorage solution that allows you to use a phone in airplane mode as an air-gapped wallet. The Vault\napp is not technically a wallet, as it does not allow to transfer funds. It is more of a key-chain\ntool that will enable you the create, manage, and restore accounts."),(0,r.kt)("p",null,"By default, the Vault app contains chain specifications for Polkadot, Kusama, and Westend. Metadata\nupdates are possible via a ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.parity.io/#/polkadot"},"QR code fountain"),". It is also\npossible to ",(0,r.kt)("a",{parentName:"p",href:"#add-chains"},"add other Substrate-based chains and do metadata updates")," for those. The\napp allows you to securely sign ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-extrinsics"},"extrinsics")," via QR codes without\nexposing your private keys to the internet."),(0,r.kt)("h2",{id:"vault-vs-ledger"},"Vault vs. Ledger"),(0,r.kt)("p",null,"The Polkadot Vault and ",(0,r.kt)("a",{parentName:"p",href:"/docs/ledger"},"Ledger")," are cold storage solutions because private keys of\naccounts created on the Vault app or Ledger device are not stored on your computer or, more in\ngeneral, on a device that has an internet connection. However, the two solutions differ, and you\nshould consider one or the other depending on your user type."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Ledger"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Polkadot Vault"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hardware designed to stay offline and be secure. Certified by French cybersecurity agency ",(0,r.kt)("a",{parentName:"td",href:"https://www.ssi.gouv.fr/en/cybersecurity-in-france/the-national-cybersecurity-agency-of-france/"},"ANSSI"),"."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Hardware not designed to stay offline. The user must switch off all inbound and outbound connections (network, wifi, Bluetooth, NFC).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Hardware is resistant to side-channel attacks via ",(0,r.kt)("a",{parentName:"td",href:"https://www.ledger.com/academy/security/the-secure-element-whistanding-security-attacks/"},"Secure Element"),". The secure element will destroy itself if opened."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Although there is no wired connection, side-channel attacks are possible. Without a secure element, the phone can be opened, and the keys will be accessible in its storage unit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Accounts derived from one mnemonic seed phrase."),(0,r.kt)("td",{parentName:"tr",align:"center"},"One mnemonic for each account or one mnemonic for multiple accounts via ",(0,r.kt)("a",{parentName:"td",href:"/docs/learn-account-advanced#derivation-paths"},"account derivation")," or default ",(0,r.kt)("a",{parentName:"td",href:"/docs/learn-account-advanced#address-format"},"Substrate address format"),". See ",(0,r.kt)("a",{parentName:"td",href:"https://support.polkadot.network/support/solutions/articles/65000103707-can-i-use-the-same-account-on-polkadot-kusama-and-parachains-#Should-I-use-the-same-account-across-different-chains?"},"this support article")," for information on whether to use the same account or different accounts on different chains based on your needs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Easy firmware and application upgrades through the Ledger Live application."),(0,r.kt)("td",{parentName:"tr",align:"center"},"The app should never be connected to the internet after installation, so the version installed on the phone should not be updated directly. For ",(0,r.kt)("a",{parentName:"td",href:"#update-the-vault-app"},"app upgrades"),", users must factory reset the phone and recover all accounts through seed phrases. Metadata updates for each chain must be done via the QR code fountain.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Currently, not all parachains are supported."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Users can add all parachains either through a third-party provider or if they have the wss endpoint and know ",(0,r.kt)("a",{parentName:"td",href:"#add-chains"},"how to extract the chain specifications and metadata"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"Ledger app updates on Ledger Live sometimes lag behind chain updates resulting in users only being able to transact if they ",(0,r.kt)("a",{parentName:"td",href:"/docs/ledger#install-the-developer-release"},"install developer versions")," (only for advanced users)."),(0,r.kt)("td",{parentName:"tr",align:"center"},"Metadata updates are always available to install once released, either through the third-party provider or manually. In this case, the installation process requires familiarity with working on the command prompt.")))),(0,r.kt)("h2",{id:"create-and-import-accounts"},"Create and Import Accounts"),(0,r.kt)("p",null,"You can create a new account directly within the Vault app (Add Key Set > Add new Key Set). This\nwill generate a new mnemonic seed phrase on the app. Alternatively, you can import a new account in\nthe app using a seed phrase generated elsewhere with a compatible account generation scheme. For\nexample, you can have an air-gapped laptop with the Subkey tool installed and generate a new account\nthere. The seed phrase of that account can be imported into the Vault App (Add Key Set > Recover Key\nSet)."),(0,r.kt)("p",null,"We recommend importing a Vault account into the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/polkadotjs#polkadot-js-extension"},"Polkadot-JS Browser Extension")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/parity-signer-companion/damllfnhhcbmclmjilomenbhkappdjgb"},"Parity Signer Companion"),".\nAlternatively, you can import a Vault account directly into the Polkadot-JS UI but keep in mind that\nclearing the cache of your browser will remove those accounts (this will not happen for accounts\nimported into an extension). See the instructions in\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184076-polkadot-vault-how-to-create-an-account"},"this article"),"\nto learn more about creating Vault accounts, and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184118-polkadot-vault-how-to-add-your-account-on-polkadot-js-ui"},"this article"),"\non how to import them to the Polkadot extension or Polkadot-JS UI."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Importing an account into an extension will not import its private key. Only the public key will be\nimported and you must sign using your air-gapped phone which holds the private key.")),(0,r.kt)("h2",{id:"signing-extrinsics"},"Signing Extrinsics"),(0,r.kt)("p",null,"Remember to always check for metadata updates before signing transactions. See\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki/pull/4600/files#diff-5d4d0a286cdc7b1d016ee155f9694dbcddc13f5264490fc1a960c38000baca4d"},"this article"),"\nto learn how to sign transactions and\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184128-polkadot-vault-how-to-add-a-new-chain-and-update-the-metadata"},"this article"),"\non how to easily add new chains and do metadata updates using the Vault app."),(0,r.kt)("p",null,"The procedure to sign transactions with the Vault app is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The wallet or browser extension will show a QR code encoding the information about what you are\ngoing to sign."),(0,r.kt)("li",{parentName:"ul"},"After scanning the QR code with the Vault app, you will be presented with decoded information\nabout what you will sign. Make sure the information matches what you intended to sign in the first\nplace. If something does not feel right, do not sign. Check\n",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-extrinsics#corrupted-qr-code-parity-signer"},"this page")," for more information and\ncontact ",(0,r.kt)("a",{parentName:"li",href:"https://support.polkadot.network/support/home"},"the Polkadot Support Team"),"."),(0,r.kt)("li",{parentName:"ul"},"If the information shown by the Vault app is correct, you can present the QR code (signature) to\nthe camera on your laptop to sign for the transaction.")),(0,r.kt)("admonition",{title:"QR codes are signature-specific",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that QR codes are signature-specific. If someone by chance has access to the QR code signature\nfor one of your transactions, future transactions cannot be signed with that same QR code, and it is\nimpossible to find out the private key of your account only with that QR code.")),(0,r.kt)("h2",{id:"update-the-vault-app"},"Update the Vault App"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Ensure you always have your mnemonic seed phrase secure and available.")),(0,r.kt)("p",null,"To securely update the Polkadot Vault app follow the instructions\n",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/parity-signer/tutorials/Upgrading.html"},"here"),". Briefly,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"backup your accounts (Backup key Set > write down the mnemonic seed phrase),"),(0,r.kt)("li",{parentName:"ul"},"factory reset your Vault app (Settings > Wipe all Data),"),(0,r.kt)("li",{parentName:"ul"},"factory reset your phone,"),(0,r.kt)("li",{parentName:"ul"},"re-install the Vault app,"),(0,r.kt)("li",{parentName:"ul"},"go offline (airplane mode, no wifi),"),(0,r.kt)("li",{parentName:"ul"},"recover your accounts (Add Key Set > Recover Key Set).")),(0,r.kt)("h2",{id:"security-notes"},"Security Notes"),(0,r.kt)("admonition",{title:"Remove SIM cards and Forget Networks",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To avoid unintended connection of your phone to the Internet, remove SIM cards, reset eSIM settings,\nand forget any added WiFi networks. In this way, the only possibility of having an unintended\ninternet connection is either through the cellular network or through WiFi connection.")),(0,r.kt)("p",null,"The Vault app has a Log that will tell you all activities performed with it. It is important to mark\ndown the last action, you did so that you can do a security check the next time you use the app.\nAlso, the Vault app will always tell you if the phone has been (even briefly) connected to the\nInternet. In case of an unrecognized connection, it is recommended to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Backup your accounts (i.e. make sure you have the mnemonic seed phrases)"),(0,r.kt)("li",{parentName:"ul"},"Follow the steps in ",(0,r.kt)("a",{parentName:"li",href:"#update-the-vault-app"},"Update the Vault app")),(0,r.kt)("li",{parentName:"ul"},"Once offline, create a new account on the Vault app"),(0,r.kt)("li",{parentName:"ul"},"Import the compromised accounts and transfer the funds to the new non-compromised account.")),(0,r.kt)("admonition",{title:"The Vault App has the option to export private keys",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},'If an account\'s private key has been exported from the Vault app, the public key will be marked as\n"hot" and the following message will be displayed ',(0,r.kt)("em",{parentName:"p"},"This key is marked hot because its root private\nkey has been exported"),".")),(0,r.kt)("p",null,"You might consider exporting the private key if you are switching air-gapped phone. If you choose to\nexport your private key, avoid the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Do not export your private key to a device that is connected to the internet, as your key will not\nbe "cold" anymore.'),(0,r.kt)("li",{parentName:"ul"},"Do not print private keys QR codes over an internet connection.")),(0,r.kt)("h2",{id:"add-chains"},"Add Chains"),(0,r.kt)("p",null,"The Vault app contains default chain specs for Polkadot, Kusama, and Westend. It is possible to add\nmore chains via QR-code, and update their metadata by generating your own QR-code fountain in a\nmetadata portal similar to that ",(0,r.kt)("a",{parentName:"p",href:"https://metadata.parity.io/#/polkadot"},"signed by Parity"),".\nAlternatively, you can use a third-party provider to add chains and their metadata. Check\n",(0,r.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184128-polkadot-vault-how-to-add-a-new-chain-and-update-the-metadata"},"this article"),"\nfor detailed instructions. If you choose this approach, you should trust the provider you choose."),(0,r.kt)("admonition",{title:"Advanced How-to Guides",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-vault"},"advanced guides")," for more information about how to add\nchain specification and do metadata updates yourself.")))}m.isMDXComponent=!0}}]);