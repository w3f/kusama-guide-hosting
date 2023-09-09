"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2508],{3905:(e,n,a)=>{a.d(n,{Zo:()=>p,kt:()=>k});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,k=h["".concat(s,".").concat(u)]||h[u]||d[u]||r;return a?t.createElement(k,i(i({ref:n},p),{},{components:a})):t.createElement(k,i({ref:n},p))}));function k(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90594:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],l={id:"learn-async-backing",title:"Asynchronous Backing",sidebar_label:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",keywords:["parachains","slots","backing","parablock"],slug:"../learn-async-backing"},s=void 0,c={unversionedId:"learn/learn-async-backing",id:"learn/learn-async-backing",title:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",source:"@site/../docs/learn/learn-async-backing.md",sourceDirName:"learn",slug:"/learn-async-backing",permalink:"/docs/learn-async-backing",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694180446,formattedLastUpdatedAt:"Sep 8, 2023",frontMatter:{id:"learn-async-backing",title:"Asynchronous Backing",sidebar_label:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",keywords:["parachains","slots","backing","parablock"],slug:"../learn-async-backing"}},p={},h=[{value:"Synchronous Backing on Polkadot",id:"synchronous-backing-on-polkadot",level:2},{value:"Asynchronous Backing on Polkadot",id:"asynchronous-backing-on-polkadot",level:2},{value:"Learn More",id:"learn-more",level:2}],d={toc:h},u="wrapper";function k(e){var n=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(u,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Asynchronous backing is a feature that introduces\n",(0,r.kt)("a",{parentName:"p",href:"https://www.techtarget.com/whatis/definition/pipelining"},"pipelining"),' to the parachain block\ngeneration and validation process. It is analogous to the logical pipelining of processor\ninstruction in "traditional" architectures, where some instructions may be executed before others\nare complete. Instructions may also be executed in parallel, enabling multiple parts of the\nprocessor to be working on potentially different instructions at the same time.'),(0,r.kt)("p",null,"Bundles of state transitions represented as blocks may be processed similarly. In the context of\nPolkadot, it aims to increase the throughput of the entire network."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"In order to realize which exact processes this upgrade improves, it is recommended to be familiar\nwith the stages of parablock validation, which you may ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"read here"),".")),(0,r.kt)("p",null,"Asynchronous backing enables logical pipelining over the parablock\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-parachains-protocol#collators"},(0,r.kt)("strong",{parentName:"a"},"generation")),",\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-parachains-protocol#parachain-phase"},(0,r.kt)("strong",{parentName:"a"},"backing")),", and\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-parachains-protocol#inclusion-pipeline"},(0,r.kt)("strong",{parentName:"a"},"inclusion")),"\nprocesses. A parablock may be at different stages, but multiple parablocks can be processed\nsimultaneously (in parallel) if needed. Most notably, parablock N + 1 can be generated and backed\nwhile its predecessor, parablock N, is undergoing inclusion on the relay chain. Processes can occur\nwhile their ancestors are included on the relay chain."),(0,r.kt)("p",null,"This pipeline will allow ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#collators"},"collators")," to include an\nestimated ~3-5x more transactions/data while speeding up parachain block times from 12 to 6 seconds.\nIn short, Polkadot with asynchronous backing will deliver an estimated ~6-10x more blockspace to its\nparachains."),(0,r.kt)("p",null,"Asynchronous Backing has three overarching goals:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Decrease parachain block (parablock) validation time to ",(0,r.kt)("strong",{parentName:"li"},"6 seconds")," from ",(0,r.kt)("strong",{parentName:"li"},"12 seconds")),(0,r.kt)("li",{parentName:"ol"},"Increase the amount of usable blockspace, allowing more state changes per relay chain block."),(0,r.kt)("li",{parentName:"ol"},"Allow for parablocks to be re-proposed to the network if they are not included successfully on\nthe first attempt.")),(0,r.kt)("p",null,"Asynchronous backing provides a form of ",(0,r.kt)("strong",{parentName:"p"},"contextual execution"),", which allows for more time for\nparachain collators to fit more transactions and prepare block candidates for backing and inclusion.\n",(0,r.kt)("strong",{parentName:"p"},"Contextual execution")," refers to how a parablock can be built earlier using the context provided\nby an ",(0,r.kt)("em",{parentName:"p"},"unincluded segment")," of recent block ancestors."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Unincluded segments")," are chains of candidate blocks that are not yet included in the relay chain.\nParablocks can be added to this unincluded segment without waiting for the latest included parent\nblock of the relay chain. The core functionality that asynchronous backing brings is the ability to\nbuild on these unincluded segments of block ancestors rather than ancestors included in the relay\nchain state."),(0,r.kt)("p",null,"Currently, parablocks rely on the most recent relay chain block (often referred to as the ",(0,r.kt)("strong",{parentName:"p"},"parent"),"\nblock, as the parablock anchors itself to it). Each parablock must be generated and go through the\nentire backing process in a single relay block. It then proceeds to the availability + inclusion\nprocess during the next block."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is important to note the following clarifications:"),(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"The parablock is not placed on the relay chain in its entirety, but rather the ",(0,r.kt)("strong",{parentName:"li"},"paraheader")),(0,r.kt)("li",{parentName:"ol"},"The relay chain does not access the entire state of a parachain but only the values that changed\nduring that block and the merkelized hashes of the unchanged values."))),(0,r.kt)("p",null,"For more information on the validity and availability process, be sure to visit the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"parachain protocol")," page."),(0,r.kt)("h2",{id:"synchronous-backing-on-polkadot"},"Synchronous Backing on Polkadot"),(0,r.kt)("p",null,"With synchronous backing, there was only about a single relay chain block (6-second window), to\ncomplete the parablock candidate generation and backing process. This was tightly coupled to the\nrelay chain's progress, where blocks had to be created within this window."),(0,r.kt)("p",null,"The main limitation of synchronous backing is that parablock validation is tightly coupled to the\nrelay chain's progression on a 1-1 basis, meaning every parablock must be generated and backed\nwithin six seconds. This time limit reduces the amount of data a collator has time to add to each\nblock."),(0,r.kt)("p",null,"A particular parablock, ",(0,r.kt)("inlineCode",{parentName:"p"},"P1"),", would ",(0,r.kt)("strong",{parentName:"p"},"only")," be valid for backing at relay chain parent ",(0,r.kt)("inlineCode",{parentName:"p"},"R1 + 1")," and\nsubsequently, be included at ",(0,r.kt)("inlineCode",{parentName:"p"},"R1 + 2")," should it be backed successfully. Essentially, a parablock is\nrushing to be backed and included within this two-block window due to the inherent requirement for\nsynchrony between the parachain and relay chain."),(0,r.kt)("h2",{id:"asynchronous-backing-on-polkadot"},"Asynchronous Backing on Polkadot"),(0,r.kt)("p",null,"With asynchronous backing, the window of time is customizable and will most likely sit around the\n6-18 second range. It also introduces a parameter to aid in defining the maximum amount of ancestor\nblocks, which allows for a parablock to be backed later in the future, enabling more computational\nand storage time per block. The context for the latest parablock is derived from the unincluded\nsegment of block ancestors upon which the newest parablock is built."),(0,r.kt)("p",null,"These blocks can be prepared in anticipation of being included later rather than keeping in sync\nwith the relay chain's progress 1-1. The block can be in a different stage from another block being\nbuilt, as long as it abides by the parameters set forth by the asynchronous backing configuration."),(0,r.kt)("p",null,"This combination of lower latency, higher storage per block, and a logical pipeline spanning\nPolkadot's networking, runtime, and collation aspects will allow for higher, more robust throughput."),(0,r.kt)("h2",{id:"learn-more"},"Learn More"),(0,r.kt)("p",null,"This topic is evolving and being implemented at the moment, keep up to date using the following\nresources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/polkadot-roadmap-roundup"},"Polkadot Roadmap Roundup")," - Article by\nRob Habermeier, Polkadot founder, details the plans for Polkadot for 2023."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/issues/3779"},"Asynchronous Backing Spec & Tracking Issue")," -\nThe implementation tracking issue for asynchronous backing")))}k.isMDXComponent=!0}}]);