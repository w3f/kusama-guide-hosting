"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),u=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?i.createElement(g,o(o({ref:t},l),{},{components:n})):i.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var i,a=n(87462),r=n(63366),o=(n(67294),n(3905)),s=["components"],d={id:"learn-guides-identity",title:"Identity How-to Guides",sidebar_label:"Identity",description:"Advanced How-to Guides about Identity.",keywords:["registrar","identity"],slug:"../learn-guides-identity"},u=void 0,l={unversionedId:"learn/learn-guides-identity",id:"learn/learn-guides-identity",title:"Identity How-to Guides",description:"Advanced How-to Guides about Identity.",source:"@site/../docs/learn/learn-guides-identity.md",sourceDirName:"learn",slug:"/learn-guides-identity",permalink:"/docs/learn-guides-identity",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1687512090,formattedLastUpdatedAt:"Jun 23, 2023",frontMatter:{id:"learn-guides-identity",title:"Identity How-to Guides",sidebar_label:"Identity",description:"Advanced How-to Guides about Identity.",keywords:["registrar","identity"],slug:"../learn-guides-identity"}},c={},p=[{value:"Registrars",id:"registrars",level:2},{value:"Becoming a Registrar",id:"becoming-a-registrar",level:3},{value:"Setting Sub-Identity (Sub-ID) for your Ledger Account",id:"setting-sub-identity-sub-id-for-your-ledger-account",level:2}],m=(i="RPC",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:p},y="wrapper";function h(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)(y,(0,a.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"registrars"},"Registrars"),(0,o.kt)("h3",{id:"becoming-a-registrar"},"Becoming a Registrar"),(0,o.kt)("p",null,"To become a registrar, submit a pre-image and proposal into\n",(0,o.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"Democracy"),", then wait for people to vote on it. For best\nresults, write a post about your identity and intentions beforehand, and once the proposal is in the\nqueue ask people to endorse it so that it gets ahead in the referendum queue."),(0,o.kt)("p",null,"Here's how to submit a proposal to become a registrar:"),(0,o.kt)("p",null,'Go to the Democracy tab, select "Submit preimage", and input the information for this motion -\nnotably which account you\'re nominating to be a registrar in the ',(0,o.kt)("inlineCode",{parentName:"p"},"identity.setRegistrar")," function."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting a registrar",src:n(59097).Z,width:"841",height:"417"})),(0,o.kt)("p",null,"Copy the preimage hash. In the above image, that's\n",(0,o.kt)("inlineCode",{parentName:"p"},"0x90a1b2f648fc4eaff4f236b9af9ead77c89ecac953225c5fafb069d27b7131b7"),". Submit the preimage by signing\na transaction."),(0,o.kt)("p",null,'Next, select "Submit Proposal" and enter the previously copied preimage hash. The ',(0,o.kt)("inlineCode",{parentName:"p"},"locked balance"),"\nfield needs to be at least\n","\n",(0,o.kt)(m,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:33333e6,filter:"humanReadable",mdxType:"RPC"}),".\nYou can find out the minimum by querying the chain state under\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"Chain State")," -> Constants -> democracy ->\nminimumDeposit."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Submitting a proposal",src:n(45208).Z,width:"852",height:"337"})),(0,o.kt)("p",null,"At this point, DOT holders can endorse the motion. With enough endorsements, the motion will become\na referendum, which is then voted on. If it passes, users will be able to request judgement from\nthis registrar."),(0,o.kt)("h2",{id:"setting-sub-identity-sub-id-for-your-ledger-account"},"Setting Sub-Identity (Sub-ID) for your Ledger Account"),(0,o.kt)("p",null,"Setting an Identity is not possible on Ledger app yet, but as a workaround, you can\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity#setting-an-identity"},"set the identity for an on-chain account ")," and then\nuse it to set a sub-identity to your Ledger account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/accounts"},"https://polkadot.js.org/apps/#/accounts"),". Click on the three vertical dots correponding to\nthe account to which you already set identity. You should see an option to set onchain\nsub-identities. Click on it."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Add sub-identity in PolkadotJS",src:n(6865).Z,width:"520",height:"338"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the pop-up window, select your Ledger account from the dropdown and enter text in sub name\nfield. Then, click on set subs button.\n",(0,o.kt)("img",{alt:"Set sub-identity in PolkadotJS",src:n(34440).Z,width:"2155",height:"554"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sign and submit the transaction from the parent account with the identity"))),(0,o.kt)("p",null,"You should now see the sub-identity displayed on-chain. You need to be aware that\n","\n",(0,o.kt)(m,{network:"kusama",path:"consts.identity.basicDeposit",defaultValue:33333e6,filter:"humanReadable",mdxType:"RPC"}),"\nis reserved for setting identity and\n","\n",(0,o.kt)(m,{network:"kusama",path:"consts.identity.subAccountDeposit",defaultValue:6666e6,filter:"humanReadable",mdxType:"RPC"}),"\nfor each sub-identity. This reserved account balance is freed once you\n",(0,o.kt)("a",{parentName:"p",href:"/docs/learn-identity#clearing-and-killing-an-identity"},"clear the identities")," on the account."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Sub-identity example",src:n(31495).Z,width:"370",height:"554"})))}h.isMDXComponent=!0},59097:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/12-0b101bf170ff7602551199f625c54b7d.jpg"},45208:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/13-df6ee832e734da72fd9461f4446ea3b9.jpg"},6865:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sub-id-1-18df099d5c97fdff246815ad91922e32.png"},34440:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sub-id-2-40b39041ca30296d805003d186f66763.png"},31495:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/sub-id-3-a650cce50e6bfef97c03ebd7b463419c.png"}}]);