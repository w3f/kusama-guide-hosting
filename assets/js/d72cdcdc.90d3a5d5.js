"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4800],{3905:(e,t,n)=>{n.d(t,{Zo:()=>A,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,A=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return n?o.createElement(h,s(s({ref:t},A),{},{components:n})):o.createElement(h,s({ref:t},A))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13392:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Polkadot account.",keywords:["account","restore account","polkadot account","polkadotjs"],slug:"../learn-account-restore"},c=void 0,l={unversionedId:"learn/learn-account-restore",id:"learn/learn-account-restore",title:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Polkadot account.",source:"@site/../docs/learn/learn-account-restore.md",sourceDirName:"learn",slug:"/learn-account-restore",permalink:"/docs/learn-account-restore",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1656407888,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{id:"learn-account-restore",title:"Backing up and Restoring Accounts",sidebar_label:"Backing up and Restoring Accounts",description:"Steps on backing up and restoring a Polkadot account.",keywords:["account","restore account","polkadot account","polkadotjs"],slug:"../learn-account-restore"},sidebar:"docs",previous:{title:"Account Generation",permalink:"/docs/learn-account-generation"},next:{title:"Account Recovery",permalink:"/docs/kusama-social-recovery"}},A={},d=[{value:"Polkadot{.js} Browser Plugin",id:"polkadotjs-browser-plugin",level:2},{value:"Polkadot-JS",id:"polkadot-js",level:2},{value:"Using an Existing Mnemonic Seed to Restore an Account with Polkadot.js Extension (Preferred)",id:"using-an-existing-mnemonic-seed-to-restore-an-account-with-polkadotjs-extension-preferred",level:3},{value:"Using an Existing Mnemonic Seed to Restore an Account with Polkadot.js UI",id:"using-an-existing-mnemonic-seed-to-restore-an-account-with-polkadotjs-ui",level:3},{value:"Parity Signer",id:"parity-signer",level:2},{value:"Transferring Polkadot-JS Apps Accounts/Addresses From One Computer to Another",id:"transferring-polkadot-js-apps-accountsaddresses-from-one-computer-to-another",level:2}],p={toc:d};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Depending on what software you are using to access your account, there are various ways to back up\nand restore your account. It is a good idea to back your information up and keep it in a secure\nplace.. Note that in order to recover an account, you should create your account according to the\ninstructions ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-account-generation"},"here"),". In general, however, as long as you know how you\ncreated your account, and have the seed phrase (",(0,r.kt)("a",{parentName:"p",href:"learn-accounts#portability"},"mnemonic phrase"),") or\nJSON file (and password) stored securely, you will be able to restore your account."),(0,r.kt)("p",null,"This page covers backing up and restoring accounts in Polkadot{.js} Browser Plugin, Polkadot-JS UI,\nand Parity Signer. For other wallet applications, please see their specific documentation."),(0,r.kt)("h2",{id:"polkadotjs-browser-plugin"},"Polkadot{.js} Browser Plugin"),(0,r.kt)("p",null,"To back up an account using the Polkadot{.js} browser plugin, open the extension and select the\ndesired account to back up. Click on the three dots beside the address to open up the account\noptions menu."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"list-accounts-extension",src:n(95631).Z,width:"640",height:"234"})),(0,r.kt)("p",null,"Click on the Export Account button, which will then ask you for the password for that specific\naccount. Once you enter the correct password, the browser will automatically download a ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file\nthat will hold all the account restoration details that will be used when you restore your account.\nYou should store this file securely. Note that you will need the password for this account to\nrestore it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"enter-password-extension",src:n(67374).Z,width:"504",height:"640"})),(0,r.kt)("p",null,'To restore the account from this JSON file, once again open the Polkadot{.js} browser plugin. Click\non the + button at the top. This will open up a menu with several choices - select "Restore account\nfrom backup JSON file". The program then prompts you for the ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file which was download earlier\nand the password for that account."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-extension",src:n(38082).Z,width:"560",height:"374"})),(0,r.kt)("p",null,'Once these are filled out, and the "Restore" button has been pressed, you\'ll be taken back to the\nmain page of the plugin. This account will now be listed with the rest of your accounts.'),(0,r.kt)("h2",{id:"polkadot-js"},"Polkadot-JS"),(0,r.kt)("p",null,"If you're using the main Polkadot-JS UI, restoring an account will feel similar to restoring an\naccount on Polkadot-JS browser plugin. Navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Accounts page")," of Polkadot-JS."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"click-account-restore-polkadot",src:n(46617).Z,width:"2868",height:"1656"})),(0,r.kt)("p",null,'Click on the "Restore JSON" button, which will let you upload your ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file that you downloaded\nand enter your password for that account. This ",(0,r.kt)("inlineCode",{parentName:"p"},".json")," file holds all relevant data about the\naccount to be used in account restoration. Note that you will need to enter your password here; the\nfile cannot be unencrypted without it."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-polkadot",src:n(6181).Z,width:"1075",height:"470"})),(0,r.kt)("p",null,'After you press the "Restore" button, you should see a green notification letting you know that your\naccount has been restored. It will now be included in your accounts list on this browser.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-complete-polkadot",src:n(51439).Z,width:"2558",height:"452"})),(0,r.kt)("h3",{id:"using-an-existing-mnemonic-seed-to-restore-an-account-with-polkadotjs-extension-preferred"},"Using an Existing Mnemonic Seed to Restore an Account with Polkadot.js Extension (Preferred)"),(0,r.kt)("p",null,"Using the Polkadot JS ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},"Extension")," is the preferred way of managing\nyour accounts. So when restoring accounts using an existing seed phrase the extension is the way to go."),(0,r.kt)("p",null,'Navigate to the polkadot.js extension and click the plus sign on the top right\nOut of the options select "Import account from pre-existing seed"'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-polkadot-extension",src:n(67135).Z,width:"344",height:"372"})),(0,r.kt)("p",null,"It will ask you to provide the seed phrase, copy it and paste it where is asks."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-polkadot-extension",src:n(34459).Z,width:"560",height:"442"})),(0,r.kt)("p",null,"Once a valid seed phrase is provided it will ask you to rename the account and set a new password.\nThe name of the account doesn't have to match the old name, you can choose a new one if you please.\nAlso the password should be saved carefully. Ideally in a password manager."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-polkadot-extension",src:n(59771).Z,width:"559",height:"438"})),(0,r.kt)("p",null,'Once all the fields are filled out click "Add account with the supplied seed" button. And you should\nnow have access to your recovered account.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-account-polkadot-extension",src:n(51065).Z,width:"557",height:"71"})),(0,r.kt)("h3",{id:"using-an-existing-mnemonic-seed-to-restore-an-account-with-polkadotjs-ui"},"Using an Existing Mnemonic Seed to Restore an Account with Polkadot.js UI"),(0,r.kt)("p",null,"You can also always restore an account by using the mnemonic phrase (seed words)."),(0,r.kt)("p",null,"To do this with Polkadot-JS, navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"Polkadot-JS Accounts Page"),'. Click on the "Add Account"\nbutton, and enter a name and password for the account. The name and the password of this added\naccount can be set to whatever you\'d like, it does not need to be the same name and password as when\nthis account was initially created.'),(0,r.kt)("p",null,"After this, delete the generated mnemonic phrase (seed words) and replace them with your ",(0,r.kt)("em",{parentName:"p"},"existing\nseed words"),". When you replace the generated mnemonic seed with your existing one, you are not\ncreating a new account, rather adding that account onto the Polkadot-JS UI. Any account using the\nsame seed words will have control over that account on-chain. This is why it is so important to keep\nyour seed words secret and safe."),(0,r.kt)("p",null,"Step 1\n",(0,r.kt)("img",{alt:"restore-via-esiting-seed",src:n(12820).Z,width:"1075",height:"493"})),(0,r.kt)("p",null,"Step 2\n",(0,r.kt)("img",{alt:"restore-via-esiting-seed",src:n(47985).Z,width:"1076",height:"583"})),(0,r.kt)("p",null,"Step 3\n",(0,r.kt)("img",{alt:"restore-via-esiting-seed",src:n(57202).Z,width:"1076",height:"461"})),(0,r.kt)("p",null,'Finally, click the "Save" button, then click the "Create and backup account" button. This will\ndownload the ',(0,r.kt)("inlineCode",{parentName:"p"},".json")," file which contains the data to be used in account restoration. You can use\nthis JSON file to restore this account in the future using the instructions above, or simply delete\nthe file and continue to use the mnemonic phrase to restore the account if necessary."),(0,r.kt)("h2",{id:"parity-signer"},"Parity Signer"),(0,r.kt)("p",null,"If you've created an account with Parity Signer, you can recover that account with your seed words.\nIf you generated the account with another wallet, there may be additional steps necessary, including\nsetting the derivation path: see\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/parity-signer/blob/master/docs/src/tutorials/Recover-Account-Polkadotjs.md"},"this document"),"\nfor details."),(0,r.kt)("p",null,'On Parity Signer, click on the top-right user icon on the screen. Proceed to "+ Add Identity". On\nthis screen, tap on the "recover existing identity" button.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-parity",src:n(77806).Z,width:"360",height:"640"})),(0,r.kt)("p",null,"Enter in the identity name and the mnemonic seed phrase from the account you'd like to restore."),(0,r.kt)("p",null,"Set an identity PIN that will be used to unlock this account when you need to."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"restore-using-parity",src:n(33200).Z,width:"360",height:"640"})),(0,r.kt)("p",null,"The identity has now been recovered and you can select a network to create the first account."),(0,r.kt)("h2",{id:"transferring-polkadot-js-apps-accountsaddresses-from-one-computer-to-another"},"Transferring Polkadot-JS Apps Accounts/Addresses From One Computer to Another"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"This will overwrite any existing accounts with the same pubkey on your new computer.\nThis generally should not make a difference (since it can still access the same account), but might\nif you have e.g. an account which was stored externally in the extension on the old computer but was\ncreated directly in browser on the new one.")),(0,r.kt)("p",null,"This has been tested on Brave and Chrome, but not other browsers."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to Polkadot-JS Apps"),(0,r.kt)("li",{parentName:"ol"},"Go to JavaScript console on the browser (Available in Developer Tools)"),(0,r.kt)("li",{parentName:"ol"},"Type in the command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.stringify(localStorage)\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Copy and paste the returned string to a text editor and save the file."),(0,r.kt)("li",{parentName:"ol"},"Check that the string you pasted both begins and ends with a tick mark ('). If not, add one to the beginning and end."),(0,r.kt)("li",{parentName:"ol"},"Save and send that file with the copied string to the new computer."),(0,r.kt)("li",{parentName:"ol"},"On new computer, go to Polkadot-JS Apps"),(0,r.kt)("li",{parentName:"ol"},"Open the Javascript console on the browser (Available in Developer Tools)"),(0,r.kt)("li",{parentName:"ol"},"Set a variable raw equal to the string from the text file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"raw = ... copy-pasted json from original computer ...\n")),(0,r.kt)("ol",{start:10},(0,r.kt)("li",{parentName:"ol"},"Run the following code on the console:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"accounts = JSON.parse(raw);\nfor (var key in accounts) {\n    if (accounts.hasOwnProperty(key)) {\n        val = JSON.stringify(accounts[key]).replace(/\\\\/g,'').slice(1,-1);\n        console.log(key + \" -> \" + val);\n        localStorage.setItem(key, val);\n    }\n}\n")),(0,r.kt)("ol",{start:11},(0,r.kt)("li",{parentName:"ol"},"Refresh Polkadot-JS App browser and check Accounts and Addresses pages. All of your accounts and addresses should now be available.")))}u.isMDXComponent=!0},38082:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/extension_restore-e93288e4fdb380c9a196bacb99232792.png"},12820:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_existing_seed_1-0c08db721a937391815acc5c270f3eda.png"},47985:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_existing_seed_2-bacb2ed7be02ddd879ccd26187c37386.png"},57202:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_existing_seed_3-18ce6df8840b12858b486fe14c1ad120.png"},67135:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_existing_seed_extension_1-bb6198006f492995a942a2f871eb8c23.png"},34459:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_existing_seed_extension_2-31a549ebe7e21f8c3554c0259a1b745b.png"},59771:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_existing_seed_extension_3-427f1ca6b087abb692b9813d8e573368.png"},51065:(e,t,n)=>{n.d(t,{Z:()=>o});const o="data:image/png;base64,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"},6181:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/via_json-3ce0970a652091b4ba07e9eb7a3dd68e.png"},67374:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot.js_enter_password-abb38a2301e372e2e3afdde709d4056a.png"},95631:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot.js_list_accounts-08fef80965c2a217f6bf77ac7cbdbf56.png"},46617:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_click_restore-e9b83e7c348549576f20b59734883b52.png"},51439:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/polkadot_restore_complete-e86533985224102ac648fd3bffc5a9ab.png"},77806:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/parity_Signer_restore1-9157480e755d852dc5a965b12228b98d.PNG"},33200:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/parity_Signer_restore2-b6d42676241617033f6a26ffc87eaf68.PNG"}}]);