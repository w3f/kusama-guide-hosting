"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2298],{15680:(e,a,t)=>{t.d(a,{xA:()=>h,yg:()=>m});var r=t(96540);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},h=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=n,m=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return t?r.createElement(m,o(o({ref:a},h),{},{components:t})):r.createElement(m,o({ref:a},h))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3514:(e,a,t)=>{t.d(a,{A:()=>f});var r=t(96540),n=t(20053),i=t(84142),o=t(75489),s=t(16654),l=t(21312);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function h(e){var a=e.href,t=e.children;return r.createElement(o.A,{href:a,className:(0,n.A)("card padding--lg",c.cardContainer)},t)}function d(e){var a=e.href,t=e.icon,i=e.title,o=e.description;return r.createElement(h,{href:a},r.createElement("h2",{className:(0,n.A)("text--truncate",c.cardTitle),title:i},t," ",i),o&&r.createElement("p",{className:(0,n.A)("text--truncate",c.cardDescription),title:o},o))}function u(e){var a,t=e.item,n=(0,i._o)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:null!=(a=t.description)?a:(0,l.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function p(e){var a,t,n=e.item,o=(0,s.A)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,i.cC)(null!=(a=n.docId)?a:void 0);return r.createElement(d,{href:n.href,icon:o,title:n.label,description:null!=(t=n.description)?t:null==l?void 0:l.description})}function m(e){var a=e.item;switch(a.type){case"link":return r.createElement(p,{item:a});case"category":return r.createElement(u,{item:a});default:throw new Error("unknown item type "+JSON.stringify(a))}}function y(e){var a=e.className,t=(0,i.$S)();return r.createElement(f,{items:t.items,className:a})}function f(e){var a=e.items,t=e.className;if(!a)return r.createElement(y,e);var o=(0,i.d1)(a);return r.createElement("section",{className:(0,n.A)("row",t)},o.map((function(e,a){return r.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},r.createElement(m,{item:e}))})))}},1701:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var r=t(58168),n=t(98587),i=(t(96540),t(15680)),o=t(3514),s=["components"],l={id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture",description:"Key Components to Polkadot's Architecture.",keywords:["polkadot","components","architecture"],slug:"../learn-architecture"},c=void 0,h={unversionedId:"learn/learn-architecture",id:"learn/learn-architecture",title:"Architecture",description:"Key Components to Polkadot's Architecture.",source:"@site/../docs/learn/learn-architecture.md",sourceDirName:"learn",slug:"/learn-architecture",permalink:"/docs/learn-architecture",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715081757,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture",description:"Key Components to Polkadot's Architecture.",keywords:["polkadot","components","architecture"],slug:"../learn-architecture"},sidebar:"docs",previous:{title:"Claim Guides",permalink:"/docs/learn-guides-claims"},next:{title:"Consensus",permalink:"/docs/learn-consensus"}},d={},u=[{value:"Relay Chain",id:"relay-chain",level:2},{value:"Parachain Slots",id:"parachain-slots",level:2},{value:"Shared Security",id:"shared-security",level:3},{value:"Interoperability",id:"interoperability",level:2},{value:"XCM",id:"xcm",level:3},{value:"Bridges",id:"bridges",level:3},{value:"Validators",id:"validators",level:2},{value:"Nominators",id:"nominators",level:2},{value:"Collators",id:"collators",level:2}],p={toc:u},m="wrapper";function y(e){var a=e.components,t=(0,n.A)(e,s);return(0,i.yg)(m,(0,r.A)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Kusama is a heterogeneous multichain with\nshared security and interoperability."),(0,i.yg)(o.A,{mdxType:"DocCardList"}),(0,i.yg)("h2",{id:"relay-chain"},"Relay Chain"),(0,i.yg)("p",null,"The Relay Chain is the central chain of\nKusama. All validators of\nKusama are staked on the Relay Chain in DOT\nand validate for the Relay Chain. The Relay Chain is composed of a relatively small number of\ntransaction types that include ways to interact with the governance mechanism, parachain auctions,\nand participating in NPoS. The Relay Chain has deliberately minimal functionality - for instance,\nsmart contracts are not supported. The main responsibility is to coordinate the system as a whole,\nincluding parachains. Other specific work is delegated to the parachains, which have different\nimplementations and features."),(0,i.yg)("h2",{id:"parachain-slots"},(0,i.yg)("a",{parentName:"h2",href:"/docs/learn-parachains"},"Parachain")," Slots"),(0,i.yg)("p",null,"Kusama can support a number of execution\nslots. These slots are like cores on a computer's processor (a modern laptop's processor may have\neight cores, for example). Each one of these cores can run one process at a time.\nKusama allows these slots using two\nsubscription models: parachains and on-demand parachains. Parachains have a dedicated slot (core)\nfor their chain and are like a process that runs constantly. On-demand parachains share slots\namongst a group, and are thus more like processes that need to be woken up and run less frequently."),(0,i.yg)("p",null,"Most of the computation that happens across the\nKusama network as a whole will be delegated\nto specific parachain implementations that handle various use cases.\nKusama places no constraints over what\nparachains can do besides that they must be able to generate a proof that can be validated by the\nvalidators assigned to the parachain. This proof verifies the state transition of the parachain.\nSome parachains may be specific to a particular application, others may focus on specific features\nlike smart contracts, privacy, or scalability ","\u2014"," still, others might be experimental\narchitectures that are not necessarily blockchain in nature."),(0,i.yg)("p",null,"Kusama provides many ways to secure a slot\nfor a parachain for a particular length of time. On-demand parachains share slots with other\nparachains. Both regular and on-demand parachains have the same API; their difference is economic.\nParachains will have to reserve KSM for the\nduration of their slot lease; on-demand parachains will pay on a per-block basis. Parachains can\nswitch between being on-demand and permanent."),(0,i.yg)("h3",{id:"shared-security"},(0,i.yg)("a",{parentName:"h3",href:"/docs/learn-parachains"},"Shared Security")),(0,i.yg)("p",null,"Parachains connected to the Kusama Relay\nChain all share in the security of the Relay Chain.\nKusama has a shared state between the Relay\nChain and all of the connected parachains. If the Relay Chain must revert for any reason, then all\nof the parachains would also revert. This is to ensure that the validity of the entire system can\npersist and no individual part is corruptible."),(0,i.yg)("p",null,"The shared state ensures that the trust assumptions when using\nKusama parachains are only those of the\nRelay Chain validator set and no other. Since the validator set on the Relay Chain is expected to be\nsecure with a large amount of stake put up to back it, parachains should benefit from this security."),(0,i.yg)("h2",{id:"interoperability"},"Interoperability"),(0,i.yg)("h3",{id:"xcm"},(0,i.yg)("a",{parentName:"h3",href:"learn-xcm"},"XCM")),(0,i.yg)("p",null,"XCM, short for cross-consensus message, is a format and not a protocol. The format does not assume\nanything about the receiver or senders consensus mechanism, it only cares about the format in which\nthe messages must be structured in. The XCM format is how parachains will be able to communicate\nwith one another. Different from XCMP, which is short for cross-chain messaging protocol, XCM is\nwhat gets delivered, and XCMP is the delivery mechanism. The best way to learn more about XCM is by\nreading the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-format"},"specification"),"."),(0,i.yg)("h3",{id:"bridges"},(0,i.yg)("a",{parentName:"h3",href:"/docs/learn-bridges"},"Bridges")),(0,i.yg)("p",null,"A blockchain ",(0,i.yg)("a",{parentName:"p",href:"/docs/glossary#bridge"},"bridge")," is a connection that allows for arbitrary data\nto transfer from one network to another. These chains are interoperable through the bridge but can\nexist as standalone chains with different protocols, rules, and governance models. In\nKusama, bridges connect to the Relay Chain\nand are secured through the Kusama consensus\nmechanism, maintained by ",(0,i.yg)("a",{parentName:"p",href:"#collators"},"collators"),"."),(0,i.yg)("p",null,"Polkadot uses bridges to bridge the future of Web 3.0, as bridges are fundamental to\nKusama's interoperable architecture by\nacting as a ","[secure and robust]"," communication channel for chains in isolation."),(0,i.yg)("h1",{id:"main-actors"},"Main Actors"),(0,i.yg)("h2",{id:"validators"},"Validators"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/docs/glossary#validator"},"Validators"),", if elected to the validator set, produce blocks on\nthe Relay Chain. They also accept proofs of valid state transition from collators and receive\nstaking rewards in return."),(0,i.yg)("p",null,"Validators are required to keep enough parachain blocks available for later use in their local\nstorage. Those blocks are retrievable by peers who lack that information, so that they can reliably\nconfirm the issued validity statements about parachain blocks. The\n",(0,i.yg)("a",{parentName:"p",href:"https://spec.polkadot.network/#chapter-anv"},"Availability & Validity")," (AnV) protocol consists of\nmultiple steps for successfully upholding those responsibilities."),(0,i.yg)("h2",{id:"nominators"},"Nominators"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/docs/glossary#nominator"},"Nominators")," bond their stake to particular validators in order to\nhelp them get into the active validator set and thus produce blocks for the chain. In return,\nnominators are generally rewarded with a portion of the staking rewards from that validator."),(0,i.yg)("h2",{id:"collators"},"Collators"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/docs/glossary#collator"},"Collators")," are full nodes on both a parachain and the Relay Chain.\nThey collect parachain transactions and produce state transition proofs for the validators on the\nRelay Chain. They can also send and receive messages from other parachains using XCMP."),(0,i.yg)("p",null,"Parachain blocks themselves are produced by collators, whereas the relay chain validators only\nverify their validity (and later, their availability)."))}y.isMDXComponent=!0}}]);