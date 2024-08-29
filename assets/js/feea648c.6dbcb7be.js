"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9175],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,g=p["".concat(l,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},42570:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(58168),i=n(98587),o=(n(96540),n(15680)),r=["components"],s={id:"learn-xcvm",title:"XCM Virtual Machine (XCVM) & XCM Executor",sidebar_label:"XCM Virtual Machine (XCVM)",description:"Design of the XCM Executor and Mechanics of the XCM Virtual Machine.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcvm"},l=void 0,c={unversionedId:"learn/learn-xcvm",id:"learn/learn-xcvm",title:"XCM Virtual Machine (XCVM) & XCM Executor",description:"Design of the XCM Executor and Mechanics of the XCM Virtual Machine.",source:"@site/../docs/learn/learn-xcvm.md",sourceDirName:"learn",slug:"/learn-xcvm",permalink:"/docs/learn-xcvm",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1712558849,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{id:"learn-xcvm",title:"XCM Virtual Machine (XCVM) & XCM Executor",sidebar_label:"XCM Virtual Machine (XCVM)",description:"Design of the XCM Executor and Mechanics of the XCM Virtual Machine.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcvm"},sidebar:"docs",previous:{title:"XCM Transport",permalink:"/docs/learn-xcm-transport"},next:{title:"XCM Instructions",permalink:"/docs/learn-xcm-instructions"}},u={},p=[{value:"XCMs are XCVM Programs",id:"xcms-are-xcvm-programs",level:2},{value:"XCM Executor &amp; Configuration",id:"xcm-executor--configuration",level:2},{value:"Cross Consensus Message (XCM) Anatomy &amp; Flow",id:"cross-consensus-message-xcm-anatomy--flow",level:2},{value:"Example Register: The Holding Register",id:"example-register-the-holding-register",level:3},{value:"Example: TransferAsset",id:"example-transferasset",level:3},{value:"Locations in XCM",id:"locations-in-xcm",level:2},{value:"MultiLocation Scenario Example",id:"multilocation-scenario-example",level:3},{value:"UniversalLocation in XCM",id:"universallocation-in-xcm",level:3},{value:"Simulating XCVM using the xcm-simulator",id:"simulating-xcvm-using-the-xcm-simulator",level:2}],m={toc:p},h="wrapper";function g(e){var t=e.components,s=(0,i.A)(e,r);return(0,o.yg)(h,(0,a.A)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"XCM Documentation",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"For a more practical approach to utilizing XCM, refer to the ",(0,o.yg)("a",{parentName:"p",href:"./learn/xcm"},"XCM Docs"),". Please keep in\nmind that XCM is under active development.")),(0,o.yg)("p",null,"At the core of XCM lies the Cross-Consensus Virtual Machine (XCVM). A \u201cmessage\u201d in XCM is an XCVM\nprogram, referred to as an ",(0,o.yg)("strong",{parentName:"p"},'"XCM"')," or ",(0,o.yg)("strong",{parentName:"p"},'"XCMs"')," for multiple messages. The XCVM is a\nregister-based state machine. The state is tracked in domain-specific registers that hold\ninformation that is used and mutated along the execution of a particular message. Most of the XCM\nformat comprises these registers and the instructions used to compose XCVM programs."),(0,o.yg)("p",null,"The XCVM is an ultra-high-level non-Turing-complete computer whose instructions are designed to be\nroughly at the same level as transactions in terms of definition. Messages are one or more XCM\ninstructions executed in order by the XCVM. An XCM is executed until it either runs to the end or\nhits an error, at which point it finishes up and halts."),(0,o.yg)("p",null,"The first implementation of the XCVM is the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/tree/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor"},(0,o.yg)("inlineCode",{parentName:"a"},"xcm-executor")),".\nIt follows the XCVM specification provided by Parity. It's engineered to be extendable, providing\nmaximum customizability when configuring XCM. Because the ",(0,o.yg)("inlineCode",{parentName:"p"},"xcm-executor")," is just an implementation\nof XCVM, it's entirely possible to create another implementation if desired."),(0,o.yg)("h2",{id:"xcms-are-xcvm-programs"},"XCMs are XCVM Programs"),(0,o.yg)("p",null,"A cross consensus message (XCM) is just a program that runs on the ",(0,o.yg)("inlineCode",{parentName:"p"},"XCVM"),": in other words, one or\nmore XCM instructions that are executed by an XCVM implementation, such as the ",(0,o.yg)("inlineCode",{parentName:"p"},"xcm-executor"),". To\nlearn more about the XCVM and the XCM format, see the latest\n",(0,o.yg)("a",{parentName:"p",href:"https://medium.com/polkadot-network/xcm-part-iii-execution-and-error-management-ceb8155dd166"},"blog post on XCM"),"\nby Dr. Gavin Wood."),(0,o.yg)("p",null,"XCM instructions might change a register, the state of the consensus system, or both. Depending on\nthe program's goal, whether it is to teleport assets from one chain to another or call a smart\ncontract on another chain, XCMs usually require changes to the registers before any changes to the\nconsensus system can be made."),(0,o.yg)("h2",{id:"xcm-executor--configuration"},"XCM Executor & Configuration"),(0,o.yg)("p",null,"The XCM Executor's implementation centers around a core piece: the XCM configuration. Each instance\nof the Executor must have a valid configuration, which specifies a multitude of options on how a\nchain may treat incoming messages via\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L52"},"Barriers"),",\ncalculate weight for a message via the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L55"},"Weigher"),",\nhow much weight to purchase via the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L58"},"Trader"),",\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L89"},"configure fees"),",\nhow to\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/blob/26b0c4f6273190f4538b24939a56b6a0b51a344c/xcm/xcm-executor/src/config.rs#L40"},"convert origins"),",\nand more."),(0,o.yg)("h2",{id:"cross-consensus-message-xcm-anatomy--flow"},"Cross Consensus Message (XCM) Anatomy & Flow"),(0,o.yg)("p",null,"An XCM is made up of a list of instructions that are executed in order. There are four different\nkinds of XCM instructions:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Instruction")," - Results in a state change in the local consensus system or some state change."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Trusted Indication")," - Tells the XCVM, or the Executor, that some action has been done before\nalready - meaning, this action is now trusted and can be acted on, i.e., in a teleport scenario."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"Information")," - Provides additional information about a particular origin, usually the result\nof a query, i.e., a ",(0,o.yg)("inlineCode",{parentName:"li"},"QueryResponse")," instruction."),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("strong",{parentName:"li"},"System Notification")," - Typically used in the context of when an HRMP channel is being opened,\nclosed, or accepted.")),(0,o.yg)("p",null,"Typically, an XCM takes the following path through the XCVM:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Instructions within an XCM are read one-by-one by the XCVM. An XCM may contain one or more\ninstructions."),(0,o.yg)("li",{parentName:"ol"},"The instruction is executed. This means that the current values of the ",(0,o.yg)("em",{parentName:"li"},"XCVM registers"),", the\n",(0,o.yg)("em",{parentName:"li"},"instruction type"),", and the ",(0,o.yg)("em",{parentName:"li"},"instruction operands")," are all used to execute some operation, which\nmight result in some registers changing their value, or in an error being thrown, which would\nhalt execution."),(0,o.yg)("li",{parentName:"ol"},"Each subsequent instruction within the XCM is read until the end of the message has been\nreached.")),(0,o.yg)("h3",{id:"example-register-the-holding-register"},"Example Register: The Holding Register"),(0,o.yg)("p",null,"There are many instructions that depend on the ",(0,o.yg)("em",{parentName:"p"},"Holding register"),". The ",(0,o.yg)("em",{parentName:"p"},"Holding register")," is an XCVM\nregister that provides a place for any assets that are in an intermediary state to be held until\nthey are taken out of the Holding register. It requires an instruction to place assets within it and\nanother to withdraw them. The simplest example of this occurring is the ",(0,o.yg)("inlineCode",{parentName:"p"},"DepositAsset")," instruction,\nwhich in its Rust form looks like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"enum Instruction {\n    DepositAsset {\n        assets: MultiAssetFilter,\n        beneficiary: MultiLocation,\n    },\n    /* snip */\n}\n")),(0,o.yg)("p",null,"This instruction specifies which assets (asset type and amount), already present in the Holding\nregister, are going to be taken from it and deposited to the specified beneficiary (recipient). It\nis very common for instructions to remove and place assets into the Holding register when\ntransacting between chains."),(0,o.yg)("h3",{id:"example-transferasset"},"Example: TransferAsset"),(0,o.yg)("p",null,"An example below illustrates how a chain may transfer assets locally, or locally on a remote chain\n(as part of another instruction) using an XCM. In this message, the ",(0,o.yg)("inlineCode",{parentName:"p"},"TransferAsset")," instruction is\ndefined with two parameters: ",(0,o.yg)("inlineCode",{parentName:"p"},"assets"),", which are the assets to be transferred, and the\n",(0,o.yg)("inlineCode",{parentName:"p"},"beneficiary"),", whoever will be the sole beneficiary of these assets. More complex instructions,\nespecially those which perform actions that target a location other than the interpreting consensus\nsystem may make use of XCVM registers."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"enum Instruction {\n    TransferAsset {\n        assets: MultiAssets,\n        beneficiary: MultiLocation,\n    }\n    /* snip */\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiAsset")," is a general identifier for an asset. It may represent both fungible and\nnon-fungible assets, and in the case of a fungible asset, it represents some defined amount of the\nasset.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"A ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiLocation")," is a relative identifier, meaning that it can only be used to define the\nrelative path between two locations, and cannot generally be used to refer to a location\nuniversally."))),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"TransferAsset")," is one of the many instructions that can be contained within an XCM. For more\ninformation, please read ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-xcm-instructions"},"XCM Instructions in the wiki"),"."),(0,o.yg)("h2",{id:"locations-in-xcm"},"Locations in XCM"),(0,o.yg)("p",null,'XCM\'s generic nature involves specifying a wide array of "locations", or any body that is governed\nby consensus (parachains, solochains, smart contracts, accounts, etc). These are relatively abstract\nnotions that point to ',(0,o.yg)("em",{parentName:"p"},"where")," but also ",(0,o.yg)("em",{parentName:"p"},"to who")," a particular action may affect. The ",(0,o.yg)("inlineCode",{parentName:"p"},"MulitLocation"),"\ntype is what XCM uses to define these locations."),(0,o.yg)("p",null,"A ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiLocation")," is a relative identifier that defines a ",(0,o.yg)("strong",{parentName:"p"},"relative")," path into some state-bearing\nconsensus system."),(0,o.yg)("p",null,"It is used to define the relative path between two locations, and cannot generally be used to refer\nto a location universally. It is very much akin to how a ",(0,o.yg)("strong",{parentName:"p"},"relative")," filesystem path works and is\ndependent on which consensus system the location expression is being evaluated."),(0,o.yg)("p",null,(0,o.yg)("img",{alt:"XCM MultiLocation",src:n(84627).A,width:"3612",height:"772"})),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"MultiLocation")," has two primary fields:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"A series of paths, called ",(0,o.yg)("inlineCode",{parentName:"li"},"Junctions"),', which define an interior portion of state to descend into\nit (sometimes called a "sub-consensus" system, such as a smart contract or pallet). An interior\nlocation may also be used to refer to a Junction, used in the context of "a parachain is an\n',(0,o.yg)("strong",{parentName:"li"},"interior location")," of the relay chain\", or how a UTXO is interior to Bitcoin's consensus."),(0,o.yg)("li",{parentName:"ul"},"The number of parent junctions at the beginning of a ",(0,o.yg)("inlineCode",{parentName:"li"},"MultiLocation"),"'s formation - in other words,\nthe number of parent consensus systems above it.")),(0,o.yg)("p",null,"There are a number of various ",(0,o.yg)("inlineCode",{parentName:"p"},"Junction")," variants that may be used to describe a particular\nlocation - whether it's a 32 byte account, a Substrate pallet, or a pluralistic body."),(0,o.yg)("h3",{id:"multilocation-scenario-example"},"MultiLocation Scenario Example"),(0,o.yg)("p",null,"In this scenario, assume an XCM is to be sent from our parachain to the Asset Hub\n(",(0,o.yg)("inlineCode",{parentName:"p"},"Parachain 1000"),"). This XCM references an account on the Asset Hub. As a general path, the\n",(0,o.yg)("inlineCode",{parentName:"p"},"MultiLocation")," would look like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"../Parachain(1000)/AccountId32(<some_account_id>)\n")),(0,o.yg)("p",null,"Or, as a Rust enum:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-rust"},"MultiLocation {\n  parents: 1,\n  interior: X2(Parachain(1000), <some_account_id>.into())\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"In the first field, ",(0,o.yg)("inlineCode",{parentName:"p"},"parents"),", there is a parent of ",(0,o.yg)("inlineCode",{parentName:"p"},"1"),". This is because our parachain has the\nrelay chain as a parent - in other words, it will go ",(0,o.yg)("strong",{parentName:"p"},"up")," by one consensus system to the relay\nchain. This is also illustrated by the ",(0,o.yg)("inlineCode",{parentName:"p"},"../"),' of the "file path" representation.')),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"The second field, ",(0,o.yg)("inlineCode",{parentName:"p"},"interior"),", defines where to go after the relay chain. In this case, from the\nrelay chain this message will go to the Asset Hub (",(0,o.yg)("inlineCode",{parentName:"p"},"Parachain 1000"),"), then reference the account\n(",(0,o.yg)("inlineCode",{parentName:"p"},"some_account_id"),") located within."))),(0,o.yg)("p",null,"Keep in mind that this location is specific to this interaction. The identities may need to change\nif this location was defined on another consensus system, such as Kusama. On other consensus\nsystems, such as Ethereum, it won't be able to interpret it."),(0,o.yg)("h3",{id:"universallocation-in-xcm"},"UniversalLocation in XCM"),(0,o.yg)("p",null,"A ",(0,o.yg)("inlineCode",{parentName:"p"},"UniversalLocation")," refers to any global consensus system. A global consensus system is an entity\nthat provides its top-level consensus through some non-derivative consensus algorithm that can exist\nwithout reference to any other singleton data system. Such global consensus systems include Polkadot\n(or other relay chains), Bitcoin, or Ethereum. It provides a point of reference for overarching\nconsensus systems."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"GlobalConsensus")," junction refers to a global consensus system and takes a ",(0,o.yg)("inlineCode",{parentName:"p"},"NetworkId")," that\nspecifies a particular remote network. A ",(0,o.yg)("inlineCode",{parentName:"p"},"UniversalLocation")," allows overarching consensus systems to\ncommunicate using this junction. Sub-consensus systems (i.e., a parachain on Polkadot) may refer to\nother ",(0,o.yg)("em",{parentName:"p"},"remote")," sub-consensus systems (i.e., a parachain on Kusama) using a relative path defined via\na ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiLocation"),"."),(0,o.yg)("h2",{id:"simulating-xcvm-using-the-xcm-simulator"},"Simulating XCVM using the xcm-simulator"),(0,o.yg)("p",null,"Within the Polkadot repository exists the\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/xcm/xcm-simulator"},(0,o.yg)("inlineCode",{parentName:"a"},"xcm-simulator")),",\nwhich allows developers to experiment with building, executing, and simulating various XCM use\nscenarios."))}g.isMDXComponent=!0},84627:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/multilocation-faf4a11faddbbf2111e7fa25e08f7758.png"}}]);