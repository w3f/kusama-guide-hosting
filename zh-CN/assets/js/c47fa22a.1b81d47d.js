(self.webpackChunk=self.webpackChunk||[]).push([[9255],{3905:(e,a,t)=>{"use strict";t.d(a,{Zo:()=>h,kt:()=>u});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=n,f=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return t?r.createElement(f,i(i({ref:a},h),{},{components:t})):r.createElement(f,i({ref:a},h))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=p;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},57498:(e,a,t)=>{"use strict";t.r(a),t.d(a,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>c,toc:()=>h,default:()=>p});var r=t(22122),n=t(19756),o=(t(67294),t(3905)),i=["components"],s={id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture"},l=void 0,c={unversionedId:"learn-architecture",id:"learn-architecture",isDocsHomePage:!1,title:"Architecture",description:"Polkadot is a heterogeneous multichain with shared security and interoperability.",source:"@site/../docs/learn-architecture.md",sourceDirName:".",slug:"/learn-architecture",permalink:"/zh-CN/docs/learn-architecture",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn-architecture.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1625003065,formattedLastUpdatedAt:"2021/6/29",frontMatter:{id:"learn-architecture",title:"Architecture",sidebar_label:"Architecture"}},h=[{value:"Relay Chain",id:"relay-chain",children:[]},{value:"Parachain and Parathread Slots",id:"parachain-and-parathread-slots",children:[]},{value:"Shared Security",id:"shared-security",children:[]},{value:"Roles",id:"roles",children:[{value:"Validators",id:"validators",children:[]},{value:"Collators",id:"collators",children:[]},{value:"Nominators",id:"nominators",children:[]}]},{value:"Whiteboard Series",id:"whiteboard-series",children:[]}],d={toc:h};function p(e){var a=e.components,t=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Polkadot is a heterogeneous multichain with shared security and interoperability."),(0,o.kt)("h2",{id:"relay-chain"},"Relay Chain"),(0,o.kt)("p",null,"The Relay Chain is the central chain of Polkadot. All validators of Polkadot are staked on the Relay\nChain in DOT and validate for the Relay Chain. The Relay Chain is composed of a relatively small\nnumber of transaction types that include ways to interact with the governance mechanism, parachain\nauctions, and participating in NPoS. The Relay Chain has deliberately minimal functionality - for\ninstance, smart contracts are not supported. The main responsibility is to coordinate the system as\na whole, including parachains. Other specific work is delegated to the parachains, which have\ndiffering implementations and features."),(0,o.kt)("h2",{id:"parachain-and-parathread-slots"},(0,o.kt)("a",{parentName:"h2",href:"learn-parachains"},"Parachain")," and ",(0,o.kt)("a",{parentName:"h2",href:"learn-parathreads"},"Parathread")," Slots"),(0,o.kt)("p",null,"Polkadot can support a number of execution slots. These slots are like cores on a computer's\nprocessor (a modern laptop's processor may have eight cores, for example). Each one of these cores\ncan run one process at a time. Polkadot allots these slots using two subscription models: parachains\nand parathreads. Parachains have a dedicated slot (core) for their chain and are like a process that\nruns constantly. Parathreads share slots amongst a group, and are thus more like processes that need\nto be woken up and run less frequently."),(0,o.kt)("p",null,"Most of the computation that happens across the Polkadot network as a whole will be delegated to\nspecific parachain or parathread implementations that handle various use cases. Polkadot places no\nconstraints over what parachains are able to do besides that they must be able to generate a proof\nthat can be validated by the validators assigned to the parachain. This proof verifies the state\ntransition of the parachain. Some parachains may be specific to a particular application, others may\nfocus on specific features like smart contracts, privacy, or scalability ","\u2014"," still others might\nbe experimental architectures that are not necessarily blockchain in nature."),(0,o.kt)("p",null,"Polkadot provides many ways to secure a slot for a parachain slot for a particular length of time.\nParathreads are part of a pool that shares slots and must win auctions for individual blocks.\nParathreads and parachains have the exact same API; their difference is economic. Parachains will\nhave to reserve DOT for duration of their slot lease; parathreads will pay on a per-block basis.\nParathreads can become parachains, and vice-versa."),(0,o.kt)("h2",{id:"shared-security"},"Shared Security"),(0,o.kt)("p",null,"Parachains connected to the Polkadot Relay Chain all share in the security of the Relay Chain.\nPolkadot has a shared state between the Relay Chain and all of the connected parachains. If the\nRelay Chain must revert for any reason, then all of the parachains would also revert. This is to\nensure that the validity of the entire system can persist and no individual part is corruptible."),(0,o.kt)("p",null,"The shared state makes it so that the trust assumptions when using Polkadot parachains are only\nthose of the Relay Chain validator set, and no other. Since the validator set on the Relay Chain is\nexpected to be secure with a large amount of stake put up to back it, it is desirable for parachains\nto benefit from this security."),(0,o.kt)("h2",{id:"roles"},"Roles"),(0,o.kt)("h3",{id:"validators"},"Validators"),(0,o.kt)("p",null,"Validators, if elected to the validator set, produce blocks on the Relay Chain. They also accept\nproofs of valid state transition from collators. In return, they will receive staking rewards."),(0,o.kt)("h3",{id:"collators"},"Collators"),(0,o.kt)("p",null,"Collators are full nodes on both a parachain and the Relay Chain. They collect parachain\ntransactions and produce state transition proofs for the validators on the Relay Chain. They can\nalso send and receive messages from other parachains using XCMP."),(0,o.kt)("h3",{id:"nominators"},"Nominators"),(0,o.kt)("p",null,"Nominators bond their stake to particular validators in order to help them get into the active\nvalidator set and thus produce blocks for the chain. In return, nominators are generally rewarded\nwith the portion of the staking rewards from that validator."),(0,o.kt)("h2",{id:"whiteboard-series"},"Whiteboard Series"),(0,o.kt)("p",null,"For a video overview of the architecture of Polkadot watch the video below for the whiteboard\ninterview with W3F researcher Alistair Stewart:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xBfC6uTjvbM",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))}p.isMDXComponent=!0}}]);