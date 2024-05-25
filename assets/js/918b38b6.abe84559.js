(self.webpackChunk=self.webpackChunk||[]).push([[2508],{47940:(e,a,n)=>{"use strict";n.d(a,{Z:()=>h});var t=n(74165),o=n(15861),i=n(67294),r=n(87152),s=n(9712),c=n(67425);function l(e,a,n){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,t.Z)().mark((function e(a,n,o){var i,c,l,d,p;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,c=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==i){e.next=18;break}return e.abrupt("return");case 18:return l=new r.U(i),e.next=21,s.G.create({provider:l});case 21:d=e.sent,(p=n.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return c=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return c=(c=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+n);case 35:return e.abrupt("return",c);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,a,n,t){switch(a){case"humanReadable":(0,c.HumanReadable)(e,n,t);break;case"precise":(0,c.Precise)(e,n,t);break;case"blocksToDays":(0,c.BlocksToDays)(e,t);break;case"erasToDays":(0,c.ErasToDays)(e,t,n);break;case"percentage":(0,c.Percentage)(e,t);break;case"permillToPercent":(0,c.PermillToPercent)(e,t);break;case"arrayLength":(0,c.ArrayLength)(e,t);break;default:return void console.log("Ignoring unknown filter type")}}const h=function(e){var a=e.network,n=e.path,r=e.defaultValue,s=e.filter,c=void 0===s?void 0:s,d=(0,i.useState)(""),h=d[0],k=d[1];return a=a.toLowerCase(),(0,i.useEffect)((function(){void 0!==c?p(r.toString(),c,a,k):k(r.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusama-people":e="wss://kusama-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(a,n,k);case 2:if(void 0!==(o=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==c?p(o,c,a,k):k(o);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(s){console.log(s)}}}),[]),h}},67425:e=>{var a="polkadot",n="kusama",t="statemine",o="statemint",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,r,s){var c=void 0;if(r===a||r===o)c=3;else{if(r!==n&&r!==t)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=6}e=parseFloat(e),s((e=Number.isInteger(e/i[r].precision)?e/i[r].precision+" "+i[r].symbol:(e/i[r].precision).toFixed(c)+" "+i[r].symbol).toString())},Precise:function(e,a,n){n(e=(e=parseFloat(e))/i[a].precision+" "+i[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,i,r){var s=void 0;if(r===a||r===o)s=1;else{if(r!==n&&r!==t)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}i((e/=s).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},90594:(e,a,n)=>{"use strict";n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),r=(n(47940),["components"]),s={id:"learn-async-backing",title:"Asynchronous Backing",sidebar_label:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",keywords:["parachains","backing","parablock","perspective parachains","unincluded segments"],slug:"../learn-async-backing"},c=void 0,l={unversionedId:"learn/learn-async-backing",id:"learn/learn-async-backing",title:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",source:"@site/../docs/learn/learn-async-backing.md",sourceDirName:"learn",slug:"/learn-async-backing",permalink:"/docs/learn-async-backing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715604504,formattedLastUpdatedAt:"May 13, 2024",frontMatter:{id:"learn-async-backing",title:"Asynchronous Backing",sidebar_label:"Asynchronous Backing",description:"A brief overview of asynchronous backing, and how it affects Polkadot's scalability.",keywords:["parachains","backing","parablock","perspective parachains","unincluded segments"],slug:"../learn-async-backing"},sidebar:"docs",previous:{title:"Parachains FAQ",permalink:"/docs/learn-parachains-faq"},next:{title:"Agile Coretime",permalink:"/docs/learn-agile-coretime-index"}},d={},p=[{value:"Synchronous Backing",id:"synchronous-backing",level:2},{value:"Asynchronous Backing",id:"asynchronous-backing",level:2},{value:"Synchronous vs. Asynchronous Backing",id:"synchronous-vs-asynchronous-backing",level:3},{value:"Sync Backing as a special case of Async Backing",id:"sync-backing-as-a-special-case-of-async-backing",level:3},{value:"Async Backing Diagram",id:"async-backing-diagram",level:3},{value:"Terminology",id:"terminology",level:2},{value:"Candidate Receipt",id:"candidate-receipt",level:3},{value:"Pipelining",id:"pipelining",level:3},{value:"Unincluded Segments",id:"unincluded-segments",level:3},{value:"Prospective Parachains",id:"prospective-parachains",level:3},{value:"Learn More",id:"learn-more",level:2}],h={toc:p},k="wrapper";function u(e){var a=e.components,s=(0,o.Z)(e,r);return(0,i.kt)(k,(0,t.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Asynchronous Backing Guide for Parachains",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For upgrading a parachain for Asynchronous Backing compatibility, follow the instructions on\n",(0,i.kt)("a",{parentName:"p",href:"/docs/maintain-guides-async-backing"},"this Wiki document."))),(0,i.kt)("admonition",{title:"Learn about Parachain Consensus",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"To fully follow the material on this page, it is recommended to be familiar with the primary stages\nof the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"Parachain Protocol"),".")),(0,i.kt)("p",null,"In Polkadot, parablocks are generated by ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-collator"},"collators")," on the parachain side and\nsent to ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-validator"},"validators")," on the relay chain side for backing."),(0,i.kt)("admonition",{title:"What is backing?",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Backing")," refers to the process in which parablocks are verified by a subset of validators or\nbacking groups. It is an important step in the validation process for parablocks, as it is the first\nline of defense in ensuring censorship resistance. Parablocks only need to be backed by one\nvalidator, and as a consequence, backing does not ensure parablock validity.")),(0,i.kt)("p",null,"Backed parablocks are sent to other validators for inclusion into the relay chain. Parablocks are\nincluded when validators have attested to having received\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol#erasure-codes"},"erasure coded chunks")," of the parablock data. Note\n",(0,i.kt)("a",{parentName:"p",href:"#candidate-receipt"},"candidate receipts")," and not the parablocks themselves are included in relay\nblocks (but for simplicity, we refer to parablocks as being included). When generated, parablocks\nmust be anchored to a relay chain block called ",(0,i.kt)("strong",{parentName:"p"},"relay parent"),". The relay parent is an input to\nparablock candidate generation. It provides the necessary context to build the next parablock. Note\nthat the relay parent of a parablock and the relay block including that parablock are always\ndifferent."),(0,i.kt)("h2",{id:"synchronous-backing"},"Synchronous Backing"),(0,i.kt)("p",null,"Before diving into asynchronous backing, it is important to understand what synchronous backing is\nand its main limitations. In synchronous backing, parablock generation is tightly coupled to the\nrelay chain's progression:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A new parablock can be produced after including the previous one (i.e., every 12 seconds)."),(0,i.kt)("li",{parentName:"ol"},"Context to build the next parablock is drawn from the latest included parablock ancestor"),(0,i.kt)("li",{parentName:"ol"},"The relay parent must be the latest relay chain block.")),(0,i.kt)("p",null,"Because of (1) parablocks can be generated every other relay chain block (i.e., every 12 seconds).\nBecause of (2) generation of parablock ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," can only start when ",(0,i.kt)("inlineCode",{parentName:"p"},"P - 1")," is included (there is no\n",(0,i.kt)("a",{parentName:"p",href:"#pipelining"},"pipelining"),"). Because of (3) execution time can take maximum 0.5 seconds as parablock\n",(0,i.kt)("inlineCode",{parentName:"p"},"P")," is rushing to be backed in the next 5.5 seconds (2 seconds needed for backing and the rest for\ngossiping). Every parablock is backed in 6 seconds (one relay chain block) and included in the next\n6 seconds (next relay chain block). The time from generation to inclusion is 12 seconds. This limits\nthe amount of data a collator can add to each parablock."),(0,i.kt)("p",null,"Parablock generation will choose the most recently received relay block as a relay parent, although\nwith an imperfect network that may differ from the true most recent relay block. So, in general, if\nrelay block ",(0,i.kt)("inlineCode",{parentName:"p"},"R")," is the relay parent of parablock ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"P")," could be backed in ",(0,i.kt)("inlineCode",{parentName:"p"},"R + 1")," and\nincluded in ",(0,i.kt)("inlineCode",{parentName:"p"},"R + 2"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sync-backing",src:n(54804).Z,width:"1211",height:"503"})),(0,i.kt)("p",null,"From left to right, parablock P1 is anchored to the relay parent R0 (showed with an ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"), backed\ninto the relay chain block R1, and included in R2. After including P1, collators can start\ngenerating P2 that must be anchored to the relay parent R2. Note that R2 will be the relay parent of\nP2 if R2 is included on the relay chain and gossiped to the collator producing P2."),(0,i.kt)("admonition",{title:"Every collator also runs an attached relay chain full node",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The attached relay node receives relay blocks via gossip. Then, the relay node talks to the\nparachain node through the ",(0,i.kt)("inlineCode",{parentName:"p"},"CollationGeneration")," subsystem. R2 is gossiped to the relay full node\nattached to the collator producing P2. Then, ",(0,i.kt)("inlineCode",{parentName:"p"},"CollationGeneration")," passes information about R2 to\nthe collator node. Finally, relay parent information from R2 informs the generation of candidate P2.")),(0,i.kt)("p",null,"Because P2 is rushing to be backed in 6 seconds into R3, validators have only 0.5 seconds for\nexecution. Backing groups will take approximately 2 seconds to back it and some extra time for\ngossiping it (the whole process from collation to backing lasts 6 seconds). P2 is included in R4,\nwhich could be used as a relay parent for P3 (not shown). After 24 seconds P1 and P2 are included in\nthe relay chain. Note how collators can start new parablocks every 12 seconds but only have 0.5\nseconds for execution."),(0,i.kt)("h2",{id:"asynchronous-backing"},"Asynchronous Backing"),(0,i.kt)("admonition",{title:"Disclaimer: Performance Measurements",type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Due to asynchronous backing not being fully implemented in a running production network, each\nperformance metric is not thoroughly tested nor guaranteed until proper benchmarking has occurred.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sync-vs-async-backing",src:n(4919).Z,width:"1920",height:"800"})),(0,i.kt)("p",null,"In asynchronous backing, parablocks (P) are included every 6 seconds, and backing (B) and inclusion\n(I) can happen within the same relay chain block (R)."),(0,i.kt)("h3",{id:"synchronous-vs-asynchronous-backing"},"Synchronous vs. Asynchronous Backing"),(0,i.kt)("p",null,"Below is a table showing the main differences between synchronous and asynchronous backing."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"}),(0,i.kt)("th",{parentName:"tr",align:"center"},"Sync Backing"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Async Backing"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Async Backing Advantage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Parablocks included every")),(0,i.kt)("td",{parentName:"tr",align:"center"},"12 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"6 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2x more throughput or 2x less latency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Parablock's maximum execution time")),(0,i.kt)("td",{parentName:"tr",align:"center"},"0.5 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"2 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"4x more data in a parablock")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Relay parent")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Is the latest relay chain block"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Is not necessarily the latest relay chain block"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Collators can submit parablocks to backing groups in advance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Collators can build on")),(0,i.kt)("td",{parentName:"tr",align:"center"},"The most recent ancestor included in the latest relay chain block"),(0,i.kt)("td",{parentName:"tr",align:"center"},"An ancestor included in a relay chain block (not necessarily the latest), with augmented information from the latest ancestor in the ",(0,i.kt)("a",{parentName:"td",href:"#unincluded-segments"},"unincluded segment")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Collators can start building parablocks in advance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Number of unincluded parablocks")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Only one"),(0,i.kt)("td",{parentName:"tr",align:"center"},"One, or more than one (depends on configuration parameters)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"More efficiency and scalability")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Unincluded parablocks")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Cannot be re-proposed"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Can be re-proposed if not successfully included in the first attempt"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Decrease wastage of unused blockspace")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Parablock's Backing-to-inclusion time")),(0,i.kt)("td",{parentName:"tr",align:"center"},"12 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"12 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No change")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Parablock's Inclusion-to-finality time")),(0,i.kt)("td",{parentName:"tr",align:"center"},"30 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"30 seconds"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No change")))),(0,i.kt)("p",null,"In synchronous backing, collators generate parablocks using context entirely pulled from the relay\nchain. While in asynchronous backing, collators use additional context from the\n",(0,i.kt)("a",{parentName:"p",href:"#unincluded-segments"},"unincluded segment"),". Parablocks are included every 6 seconds because backing\nof parablock ",(0,i.kt)("inlineCode",{parentName:"p"},"N + 1")," and inclusion of parablock ",(0,i.kt)("inlineCode",{parentName:"p"},"N")," can happen on the same relay chain bock\n(",(0,i.kt)("a",{parentName:"p",href:"#pipelining"},"pipelining"),"). However, as for synchronous backing, a parablock takes 12 seconds to\nget backed and included, and from inclusion to finality there is an additional 30-second time\nwindow."),(0,i.kt)("p",null,"Because the throughput is increased by 2x and parachains have 4x more execution time, asynchronous\nbacking is expected to deliver 8x more blockspace to parachains."),(0,i.kt)("h3",{id:"sync-backing-as-a-special-case-of-async-backing"},"Sync Backing as a special case of Async Backing"),(0,i.kt)("p",null,"Two parameters of asynchronous backing can be controlled by\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov"},"Governance"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/f204e3264f945c33b4cea18a49f7232c180b07c5/polkadot/primitives/src/vstaging/mod.rs#L49"},(0,i.kt)("inlineCode",{parentName:"a"},"max_candidate_depth")),":\nthe number of parachain blocks a collator can produce that are not yet included in the relay\nchain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/f204e3264f945c33b4cea18a49f7232c180b07c5/polkadot/primitives/src/vstaging/mod.rs#L54"},(0,i.kt)("inlineCode",{parentName:"a"},"allowed_ancestry_len")),":\nthe oldest relay chain parent a parachain block can be built on top of."))),(0,i.kt)("p",null,"Values of zero for both correspond to synchronous backing: ",(0,i.kt)("inlineCode",{parentName:"p"},"max_candidate_depth = 0")," means there can\nbe only one unincluded parablock at all times, and ",(0,i.kt)("inlineCode",{parentName:"p"},"allowed_ancestry_len = 0")," means a parablock can\nbe built only on the latest relay parent for that parachain. Initial values will be set to 3 (4\nunincluded parablocks at all times) and 2 (relay parent can be the third last)."),(0,i.kt)("h3",{id:"async-backing-diagram"},"Async Backing Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"async-backing",src:n(16588).Z,width:"1209",height:"503"})),(0,i.kt)("p",null,"The diagram assumes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_candidate_depth = 2"),", meaning that there can be a maximum of three unincluded parablocks at\nall times"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"allowed_ancestry_len = 1"),", meaning parablocks can be anchored to the last or second-last relay\nparent (i.e., collators can start preparing parablocks 6 seconds in advance)")),(0,i.kt)("p",null,"From left to right, parablock P1 is backed into the relay chain block R1 and included in R2. While\nP1 undergoes backing, collators can already generate P2, which will have R0 as a relay parent\n(showed with an ",(0,i.kt)("inlineCode",{parentName:"p"},"x"),"). Note how R0 can also be relay parent for P1 as long as in the unincluded\nsegment there is a maximum of three unincluded parablocks. Parablock P2 can be backed in R2 (the\nsame relay block where P1 is included) and included in R3. Collators can now use up to two seconds\nfor execution. And so on, P3 can be generated while backing groups check P2, and P4 can be built\nwhile P3 undergoing backing. In 24 seconds, P1 to P3 are included in the relay chain."),(0,i.kt)("p",null,"Note how there are always three unincluded parablocks at all times, i.e. compared to synchronous\nbacking there can be multiple unincluded parablocks (i.e. ",(0,i.kt)("a",{parentName:"p",href:"#pipelining"},"pipelining"),"). For example,\nwhen P1 is undergoing inclusion, P2 and P3 are undergoing backing. Collators were able to generate\nmultiple unincluded parablocks because on their end they have the\n",(0,i.kt)("a",{parentName:"p",href:"#unincluded-segments"},"unincluded segment"),", a local storage of not-included parablock ancestors that\nthey can use to fetch information to build new parablocks. On the relay chain side,\n",(0,i.kt)("a",{parentName:"p",href:"#prospective-parachains"},"perspective parachains")," repeats the work each unincluded segment does in\ntracking candidates (as validators cannot trust the record kept on parachains)."),(0,i.kt)("p",null,"The 6-second relay chain block delay includes a backing execution timeout (2 seconds) and some time\nfor network latency (the time it takes to gossip messages across the entire network). The limit\ncollators have to generate parablocks is how long it takes to back it (i.e., 2 seconds). Collation\ngeneration conservatively always gives itself the same time limits. If there is extra time for\ncollation generation and backing (i.e., more than 2s + 6s), then all that extra time is allocated to\nbacking (see figure). This could result in backable blocks waiting their turn at the end of the\nbacking step for a few extra seconds until a core frees up to back that block as of the next relay\nblock or some later relay block. Note a core is occupied after backing and before inclusion."),(0,i.kt)("p",null,"The 2-second execution time is thus a limiter, not a system limitation. If parablock generation\ntakes >2 seconds, the unincluded segment will shrink (less unincluded parablocks), while if it takes\n<2 seconds, the segment will grow (more unincluded parablocks that will need to be backed and\nincluded). Such flexibility from the parachain side will be possible when, on the relay chain side,\nthere will be elastic scaling (i.e.,\n",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadot-direction#agile-core-usage"},"agile core usage")," and\n",(0,i.kt)("a",{parentName:"p",href:"/docs/polkadot-direction#agile-coretime-allocation"},"coretime allocation"),")."),(0,i.kt)("h2",{id:"terminology"},"Terminology"),(0,i.kt)("h3",{id:"candidate-receipt"},"Candidate Receipt"),(0,i.kt)("p",null,"Saying that a parablock has been included in a relay chain parent does not mean the entire parablock\nis in the relay chain block. Instead, ",(0,i.kt)("strong",{parentName:"p"},"candidate receipt")," consisting of the hash of the parablock,\nstate roots, and ID info is placed on the parent block on the relay chain. The relay chain does not\naccess the entire state of a parachain but only the values that changed during that block and the\nmerkelized hashes of the unchanged values."),(0,i.kt)("h3",{id:"pipelining"},"Pipelining"),(0,i.kt)("p",null,"Asynchronous backing is a feature that introduces\n",(0,i.kt)("a",{parentName:"p",href:"https://www.techtarget.com/whatis/definition/pipelining"},"pipelining")," to the parachain block\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-parachains-protocol"},"generation, backing and inclusion"),'. It is analogous to the logical\npipelining of processor instruction in "traditional" architectures, where some instructions may be\nexecuted before others are complete. Instructions may also be executed in parallel, enabling\nmultiple processor parts to work on potentially different instructions simultaneously.'),(0,i.kt)("p",null,"Bundles of state transitions represented as blocks may be processed similarly. In the context of\nKusama, pipelining aims to increase the\nthroughput of the entire network by completing the backing and inclusion steps for different blocks\nat the same time. Asynchronous backing does not just allow for pipelining within a single pipe (or\ncore). It lays the foundation for a large number of pipes (or cores) to run for the same parachain\nat the same time. In that way, we have two distinct new forms of parallel computation."),(0,i.kt)("h3",{id:"unincluded-segments"},"Unincluded Segments"),(0,i.kt)("p",null,"Unincluded segments are chains of candidate parablocks that have yet to be included in the relay\nchain, i.e. they can contain parablocks at any stage pre-inclusion. An unincluded segment may thus\ninclude candidates that are seconded, backable, or backed. Every parablock candidate recorded in the\nunincluded segment is immediately advertised to validators to begin the backing process."),(0,i.kt)("p",null,"The backing process occurs on the relay chain, whereas unincluded segments live in the runtimes of\nparachain collators. The core functionality that asynchronous backing brings is the ability to build\non these unincluded segments of block ancestors rather than building only on ancestors included in\nthe relay chain state."),(0,i.kt)("p",null,"The purpose of each unincluded segment is twofold:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make each parachain aware of when and at what depth it can build blocks that won't be rejected by\nthe relay chain"),(0,i.kt)("li",{parentName:"ul"},"Provide critical context necessary to build parablocks with parent blocks that have yet to be\nincluded. The unincluded segment is all about building parablocks.")),(0,i.kt)("h3",{id:"prospective-parachains"},"Prospective Parachains"),(0,i.kt)("p",null,"The purpose of\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/node/backing/prospective-parachains.html"},"prospective parachains"),"\nis twofold:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keep track of parablocks that have been submitted to backers but have yet to be included. This\nincludes tracking the full unincluded ancestry of each parablock, without which it wouldn't be\npossible to verify their legitimacy.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Look up and provide candidates which are children of the most recently included parablock for each\nparachain. These are taken as inputs to the availability process. Prospective parachains is all\nabout tracking, storing, and providing candidates to the availability/inclusion step."))),(0,i.kt)("p",null,"Prospective parachains essentially repeats the work each ",(0,i.kt)("a",{parentName:"p",href:"#unincluded-segments"},"unincluded segment"),"\ndoes in tracking candidates. Validators cannot simply trust the availability or validity of records\nkept on parachains. Prospective parachains is the relay chain's record of all parablock candidates\nundergoing the backing and inclusion process. It is the authoritative gatekeeper for parablock\nvalidity. Whereas the unincluded segment is a local record that allows parachains to produce blocks\nthat comply with the rules prospective parachains later enforces."),(0,i.kt)("p",null,"The unincluded segment lives in the parachain runtime, so it doesn't know or care about forks/other\nparachains. Prospective parachains lives in the relay chain client. So it has to simultaneously keep\ntrack of candidates from all forks of all parachains. It is as if you folded the unincluded segments\nfrom every fork of every parachain into one giant data structure. When you fold unincluded segments\nrepresenting different chain forks together, they create a tree structure. Hence the term\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/node/backing/prospective-parachains.html#fragment-trees"},(0,i.kt)("strong",{parentName:"a"},"fragment tree")),"."),(0,i.kt)("p",null,"A single unincluded segment tells a collator whether it can build on top of one fork of one\nparachain. Prospective parachains tells a validator whether it should accept blocks built on top of\nany fork from any parachain."),(0,i.kt)("p",null,"A parablock stops being a prospective parablock when it is included on chain. At that point\nprospective parachains does not have to care about it anymore. Alternatively, a parablock's relay\nparent can get too old before that parablock is included, in which case prospective parachains can\nthrow away the candidate."),(0,i.kt)("h2",{id:"learn-more"},"Learn More"),(0,i.kt)("p",null,"The information provided here is subject to change; keep up to date using the following resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://polkadot.network/blog/polkadot-roadmap-roundup"},"Polkadot Roadmap Roundup")," - Article by\nRob Habermeier, Polkadot founder, details the plans for Polkadot for 2023."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/paritytech/polkadot/issues/3779"},"Asynchronous Backing Spec & Tracking Issue")," -\nThe implementation tracking issue for asynchronous backing"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://paritytech.github.io/polkadot/book/node/backing/prospective-parachains.html"},"Prospective Parachains Subsystem - The Polkadot Parachain Host Implementers' Guide")),(0,i.kt)("li",{parentName:"ul"},"Chapter 6.11. from Polkadot Blockchain Academy (PBA) lecture material:\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot-blockchain-academy.github.io/pba-book/polkadot/async-backing-shallow/page.html"},"Asynchronous Backing (Shallow)")),(0,i.kt)("li",{parentName:"ul"},"Chapter 6.15. from PBA lecture material:\n",(0,i.kt)("a",{parentName:"li",href:"https://polkadot-blockchain-academy.github.io/pba-book/polkadot/async-backing-deep/page.html"},"Asynchronous Backing (Deep)")),(0,i.kt)("li",{parentName:"ul"},"Polkadot Blog Post -\n",(0,i.kt)("a",{parentName:"li",href:"https://www.polkadot.network/blog/elevating-polkadots-performance-and-scale-with-asynchronous-backing"},"Asynchronous Backing: Elevating Polkadot's Performance and Scale")),(0,i.kt)("li",{parentName:"ul"},"Blog posts by Filippo Franchini on\n",(0,i.kt)("a",{parentName:"li",href:"https://grillapp.net/10124/polkadot-s-synchronous-backing-explained-40627?ref=10124"},"Synchronous"),"\nand\n",(0,i.kt)("a",{parentName:"li",href:"https://grillapp.net/10124/polkadot-s-asynchronous-backing-explained-40701?ref=10124"},"Asynchronous Backing"))))}u.isMDXComponent=!0},16588:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/async-backing-97a966a8148c023012205ad71a146bcc.png"},54804:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/sync-backing-39f23741e043faaf52bb5ddc880ea409.png"},4919:(e,a,n)=>{"use strict";n.d(a,{Z:()=>t});const t=n.p+"assets/images/sync-vs-async-backing-3548388f98c44fc684a6176a6ccb8ed2.png"},46601:()=>{}}]);