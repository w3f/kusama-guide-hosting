"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9535],{15680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>y});var o=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,g=i(e,["components","mdxType","originalType","parentName"]),c=p(a),u=n,y=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return a?o.createElement(y,s(s({ref:t},g),{},{components:a})):o.createElement(y,s({ref:t},g))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=a[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>y,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var o=a(58168),n=a(98587),r=(a(96540),a(15680)),s=["components"],i={id:"governance-apps",title:"Polkadot Governance Apps",sidebar_label:"Governance Apps",description:"Governance Apps in the Polkadot Ecosystem.",keywords:["voting","vote","delegate","conviction","OpenGov","delegation dashboard"],slug:"../governance-apps"},l=void 0,p={unversionedId:"general/governance-apps",id:"general/governance-apps",title:"Polkadot Governance Apps",description:"Governance Apps in the Polkadot Ecosystem.",source:"@site/../docs/general/governance-apps.md",sourceDirName:"general",slug:"/governance-apps",permalink:"/docs/governance-apps",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1711375448,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"governance-apps",title:"Polkadot Governance Apps",sidebar_label:"Governance Apps",description:"Governance Apps in the Polkadot Ecosystem.",keywords:["voting","vote","delegate","conviction","OpenGov","delegation dashboard"],slug:"../governance-apps"},sidebar:"docs",previous:{title:"Staking Apps",permalink:"/docs/staking-apps"},next:{title:"Multisig Apps",permalink:"/docs/multisig-apps"}},g={},c=[{value:"Polkassembly",id:"polkassembly",level:2},{value:"SubSquare",id:"subsquare",level:2},{value:"Delegation Dashboard",id:"delegation-dashboard",level:2}],d={toc:c},u="wrapper";function y(e){var t=e.components,a=(0,n.A)(e,s);return(0,r.yg)(u,(0,o.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("admonition",{title:"Community Page",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"This page is open to contributions from the community. Please follow the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki#contributing-to-documentation"},"Wiki contribution guidelines"),"\nand add your Governance app to this page.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#polkassembly"},"Polkassembly")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#subsquare"},"SubSquare")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#delegation-dashboard"},"Delegation Dashboard"))),(0,r.yg)("h2",{id:"polkassembly"},"Polkassembly"),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://github.com/w3f/polkadot-wiki/assets/874046/f2fc1032-ba81-465a-896c-51bd35efd435",alt:"Polkassembly"})),(0,r.yg)("p",null,"Polkassembly is a platform specifically designed to foster open, transparent discussions around\nPolkadot and Kusama governance proposals. By bridging on-chain decisions with off-chain discussions,\nPolkassembly ensures that the community remains at the heart of the decision-making process."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1. Getting Started with Polkassembly")," (",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/"},"https://polkadot.polkassembly.io/"),")"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Registration: Begin by registering on Polkassembly. Choose between email/password sign-up or use\nweb3 enabled wallets."),(0,r.yg)("li",{parentName:"ul"},"Authentication: To provide maximum security, Polkassembly enables a two-factor authentication\nprocess."),(0,r.yg)("li",{parentName:"ul"},"Linking Your Polkadot or Kusama Account:",(0,r.yg)("ol",{parentName:"li"},(0,r.yg)("li",{parentName:"ol"},"Connect your Polkadot or Kusama account from Subwallet, Talisman, Nova, Polkadot.JS for\nseamless proposal tracking and voting."),(0,r.yg)("li",{parentName:"ol"},"Polkasafe (for multisigs) - vote and create proposals with Multisigs by logging in with\n",(0,r.yg)("a",{parentName:"li",href:"https://polkasafe.xyz/"},"Polkasafe"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. Navigating the Polkassembly Interface")," (",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/opengov"},"https://polkadot.polkassembly.io/opengov"),")"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Dashboard: Provides a snapshot of active proposals, treasury motions, referenda, and public\ndiscussions."),(0,r.yg)("li",{parentName:"ul"},"User Profile: Customize your profile settings, manage notifications, and view your activity.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"3. Proposals, Motions, and Referenda")," (",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/big-spender"},"https://polkadot.polkassembly.io/big-spender"),")"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Viewing Details: Access comprehensive details of each proposal, including current status, voting\ntally, and associated discussions."),(0,r.yg)("li",{parentName:"ul"},"Participating in Discussions: Engage with the community, share insights, ask questions, and\ncontribute to a transparent decision-making process.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"4. Delegating on Polkassembly")," (",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/delegation"},"https://polkadot.polkassembly.io/delegation"),")"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Understanding Delegation: Delegate your voting power to community members you trust, enhancing the\ndemocratic process."),(0,r.yg)("li",{parentName:"ul"},"How to Delegate: Navigate to the Delegation section, choose a delegate, specify the amount, and\nconfirm the delegation.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"5. Notifications and Alerts")," (",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/settings"},"https://polkadot.polkassembly.io/settings"),")"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Custom Notifications: Receive real-time updates on topics of interest, proposal status changes,\nand more."),(0,r.yg)("li",{parentName:"ul"},"Setting Alerts: Customize alert preferences to receive notifications tailored to your interests.")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"6. Frequently Asked Questions (FAQs)")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Integration with Polkadot: Polkassembly fetches on-chain data directly from the Polkadot/Substrate\nnode, ensuring real-time accuracy.")),(0,r.yg)("p",null,"Dive into the world of Polkadot governance with Polkassembly and be an active part of the future!\nFor deeper insights or specific tutorials, please refer to the official documentation at\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.polkassembly.io"},"https://docs.polkassembly.io"),"."),(0,r.yg)("h2",{id:"subsquare"},"SubSquare"),(0,r.yg)("p",null,"SubSquare is a governance platform well-designed for substrate based chains. It monitors on-chain\ngovernance events and provides user interfaces to facilitate various governance workflow. It has\nsupported tens of chains including polkadot, kusama, acala, centrifuge, hydradx, interlay, phala,\netc. Please check all deployments ",(0,r.yg)("a",{parentName:"p",href:"https://subsquare.io/"},"here"),"."),(0,r.yg)("h2",{id:"delegation-dashboard"},"Delegation Dashboard"),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://delegation.polkadot.network/"},"Polkadot Delegation Dashboard")," is a web3 application that\nallows you to delegate your voting power on ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Polkadot OpenGov"),"."),(0,r.yg)("admonition",{title:"How to get added as a Delegate on the Dashboard?",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Anyone interested in being listed as a delegate can add their details on the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/governance-ui/blob/main/assets/data/polkadot/delegates.json"},"Governance-UI repository"),".")),(0,r.yg)("p",null,"To make OpenGov multi-role delegation easy and intuitive,\n",(0,r.yg)("a",{parentName:"p",href:"https://delegation.polkadot.network/"},"Delegation Dashboard")," provides an interactive interface that\ndisplays the list of delegates and their details. The video tutorial below walks through the\nfeatures of the Delegation Dashboard and shows how to perform multi-role delegation."),(0,r.yg)("div",{className:"row"},(0,r.yg)("div",{className:"col text--center"},(0,r.yg)("a",{href:"https://www.youtube.com/watch?v=RapBYZc5ZPo"},(0,r.yg)("img",{src:"https://img.youtube.com/vi/RapBYZc5ZPo/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.yg)("p",null,(0,r.yg)("a",{href:"https://www.youtube.com/watch?v=RapBYZc5ZPo"},"Delegation Dashboard Tutorial")))),(0,r.yg)("p",null,"For detailed instructions on how to delegate your voting power using dashboard, check\n",(0,r.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000184123-polkadot-opengov-how-to-delegate-your-voting-power"},"this support guide."),"."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"If you become a nomination pool member or a pool admin, you cannot participate in Governance with\nthe bonded tokens in the pool, as they are held in a\n",(0,r.yg)("a",{parentName:"strong",href:"/docs/learn-account-advanced#system-accounts"},"system account"),".")))}y.isMDXComponent=!0}}]);