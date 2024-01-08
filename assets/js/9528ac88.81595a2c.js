"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[315],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>u});var n=t(67294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=n.createContext({}),p=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,u=m["".concat(l,".").concat(d)]||m[d]||h[d]||i;return t?n.createElement(u,r(r({ref:a},c),{},{components:t})):n.createElement(u,r({ref:a},c))}));function u(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var i=t.length,r=new Array(i);r[0]=d;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[m]="string"==typeof e?e:s,r[1]=o;for(var p=2;p<i;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85517:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var n=t(87462),s=t(63366),i=(t(67294),t(3905)),r=["components"],o={id:"learn-xcm-transport",title:"XCM Transport Methods (XCMP, HRMP, VMP)",sidebar_label:"XCM Transport",description:"Methods to send XCM Messages across Networks.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-transport"},l=void 0,p={unversionedId:"learn/learn-xcm-transport",id:"learn/learn-xcm-transport",title:"XCM Transport Methods (XCMP, HRMP, VMP)",description:"Methods to send XCM Messages across Networks.",source:"@site/../docs/learn/learn-xcm-transport.md",sourceDirName:"learn",slug:"/learn-xcm-transport",permalink:"/docs/learn-xcm-transport",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1695304296,formattedLastUpdatedAt:"Sep 21, 2023",frontMatter:{id:"learn-xcm-transport",title:"XCM Transport Methods (XCMP, HRMP, VMP)",sidebar_label:"XCM Transport",description:"Methods to send XCM Messages across Networks.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-transport"},sidebar:"docs",previous:{title:"XCM Use-cases",permalink:"/docs/learn-xcm-usecases"},next:{title:"XCM Virtual Machine (XCVM)",permalink:"/docs/learn-xcvm"}},c={},m=[{value:"XCMP (Cross-Chain Message Passing)",id:"xcmp-cross-chain-message-passing",level:3},{value:"VMP (Vertical Message Passing)",id:"vmp-vertical-message-passing",level:3},{value:"HRMP (XCMP-Lite)",id:"hrmp-xcmp-lite",level:3},{value:"XCMP (Cross Consensus Message Passing) Design Summary",id:"xcmp-cross-consensus-message-passing-design-summary",level:3},{value:"The Anatomy of an XCMP Interaction",id:"the-anatomy-of-an-xcmp-interaction",level:4}],h={toc:m},d="wrapper";function u(e){var a=e.components,o=(0,s.Z)(e,r);return(0,i.kt)(d,(0,n.Z)({},h,o,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"XCM Documentation",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For a more practical approach to utilizing XCM, refer to the ",(0,i.kt)("a",{parentName:"p",href:"./learn/xcm"},"XCM Docs"),". Please keep in\nmind that XCM is under active development.")),(0,i.kt)("p",null,"With the XCM format established, common patterns for protocols of these messages are needed.\nKusama implements two message passing\nprotocols for acting on XCM messages between its constituent parachains."),(0,i.kt)("p",null,"There are three primary methods for message passing, one of which is under development:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"XCMP (Cross-Consensus Message Passing)"),(0,i.kt)("li",{parentName:"ol"},"Horizontal Relay-routed Message Passing (HRMP/XCMP-lite)"),(0,i.kt)("li",{parentName:"ol"},"VMP (Vertical Message Passing)")),(0,i.kt)("h3",{id:"xcmp-cross-chain-message-passing"},"XCMP (Cross-Chain Message Passing)"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"XCMP is currently under development, and most of the cross-chain messages pass through HRMP channels\nfor the time being.")),(0,i.kt)("p",null,"XCM is related to XCMP in the same way that REST is related to RESTful."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Cross-Consensus Message Passing")," secure message passing between parachains. There are two variants:\n",(0,i.kt)("em",{parentName:"p"},"Direct")," and ",(0,i.kt)("em",{parentName:"p"},"Relayed"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("em",{parentName:"li"},"Direct"),", message data goes direct between parachains and is O(1) on the side of the\nRelay-chain and is very scalable."),(0,i.kt)("li",{parentName:"ul"},"With ",(0,i.kt)("em",{parentName:"li"},"Relayed"),", message data is passed via the Relay-chain, and piggy-backs over VMP. It is much\nless scalable, and parathreads in particular may not receive messages due to excessive queue\ngrowth.")),(0,i.kt)("p",null,"Cross-chain transactions are resolved using a simple queuing mechanism based around a Merkle tree to\nensure fidelity. It is the task of the Relay Chain validators to move transactions on the output\nqueue of one parachain into the input queue of the destination parachain. However, only the\nassociated metadata is stored as a hash in the Relay Chain storage."),(0,i.kt)("p",null,"The input and output queue are sometimes referred to in the\nKusama codebase and associated documentation\nas ",(0,i.kt)("inlineCode",{parentName:"p"},"ingress")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"egress")," messages, respectively."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about VMP see dedicated section in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/messaging.html#horizontal-message-passing"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,i.kt)("h3",{id:"vmp-vertical-message-passing"},"VMP (Vertical Message Passing)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Vertical Message Passing")," message passing between the Relay-chain itself and a parachain. Message\ndata in both cases exists on the Relay-chain and are interpreted by the relay chain according to\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn-xcm/#cross-consensus-message-format-xcm"},"XCM")," standards. This includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"ump-upward-message-passing"},"UMP (Upward Message Passing)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Upward Message Passing")," message passing from a parachain to the Relay-chain.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"dmp-downward-message-passing"},"DMP (Downward Message Passing)"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"Downward Message Passing")," message passing from the Relay-chain to a parachain."))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For detailed information about VMP see dedicated section in\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/book/messaging.html#vertical-message-passing"},"The Polkadot Parachain Host Implementers' Guide"),".")),(0,i.kt)("h3",{id:"hrmp-xcmp-lite"},"HRMP (XCMP-Lite)"),(0,i.kt)("p",null,"While XCMP is still being implemented, a stop-gap protocol (see definition below) known as\n",(0,i.kt)("strong",{parentName:"p"},"Horizontal Relay-routed Message Passing (HRMP)")," exists in its place. HRMP has the same interface\nand functionality as XCMP but is much more demanding on resources since it stores all messages in\nthe Relay Chain storage. When XCMP has been implemented, HRMP is planned to be deprecated and phased\nout in favor of it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"xcm",src:t(20267).Z,width:"2664",height:"1754"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A stop-gap protocol is a temporary substitute for the functionality that is not fully complete.\nWhile XCMP proper is still in development, HRMP is a working replacement.")),(0,i.kt)("p",null,"A tutorial on how to open an HRMP channel on a parachain can be found\n",(0,i.kt)("a",{parentName:"p",href:"/docs/build-hrmp-channels"},"here"),"."),(0,i.kt)("h3",{id:"xcmp-cross-consensus-message-passing-design-summary"},"XCMP (Cross Consensus Message Passing) Design Summary"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tOnzk4AROUY"},(0,i.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/tOnzk4AROUY/0.jpg",alt:"XCMP explained"}))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"XCMP is not yet implemented. The following illustrates the overall design goals and expectations for\nXCMP.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Cross-chain messages will ",(0,i.kt)("em",{parentName:"li"},"not")," be delivered to the Relay Chain."),(0,i.kt)("li",{parentName:"ul"},"Cross-chain messages will be constrained to a maximum size specified in bytes."),(0,i.kt)("li",{parentName:"ul"},"Parachains are allowed to block messages from other parachains, in which case the dispatching\nparachain would be aware of this block."),(0,i.kt)("li",{parentName:"ul"},"Collator nodes are responsible for routing messages between chains."),(0,i.kt)("li",{parentName:"ul"},"Collators produce a list of ",(0,i.kt)("inlineCode",{parentName:"li"},"egress")," messages and will receive the ",(0,i.kt)("inlineCode",{parentName:"li"},"ingress")," messages from other\nparachains."),(0,i.kt)("li",{parentName:"ul"},"On each block, parachains are expected to route messages from some subset of all other parachains."),(0,i.kt)("li",{parentName:"ul"},"When a collator produces a new block to hand off to a validator, it will collect the latest\ningress queue information and process it."),(0,i.kt)("li",{parentName:"ul"},"Validators will check the proof that the new candidate for the next parachain block includes the\nprocessing of the expected ingress messages to that parachain.")),(0,i.kt)("p",null,"XCMP queues must be initiated by first opening a channel between two parachains. The channel is\nidentified by both the sender and recipient parachains, meaning that it's a one-way channel. A pair\nof parachains can have at most establish two channels between them, one for sending messages to the\nother chain and another for receiving messages. The channel will require a deposit in DOT to be\nopened, which will get returned when the channel is closed."),(0,i.kt)("h4",{id:"the-anatomy-of-an-xcmp-interaction"},"The Anatomy of an XCMP Interaction"),(0,i.kt)("p",null,"A smart contract that exists on parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will route a message to parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," in which another\nsmart contract is called that makes a transfer of some assets within that chain."),(0,i.kt)("p",null,"Charlie executes the smart contract on parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", which initiates a new cross-chain message for\nthe destination of a smart contract on parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,i.kt)("p",null,"The collator node of parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will place this new cross-chain message into its outbound\nmessages queue, along with a ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," and a ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),"."),(0,i.kt)("p",null,"The collator node of parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," routinely pings all other collator nodes asking for new messages\n(filtering by the ",(0,i.kt)("inlineCode",{parentName:"p"},"destination")," field). When the collator of parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," makes its next ping, it\nwill see this new message on parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and add it into its own inbound queue for processing into\nthe next block."),(0,i.kt)("p",null,"Validators for parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will also read the outbound queue and know the message. Validators for\nparachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," will do the same. This is so that they will be able to verify the message transmission\nhappened."),(0,i.kt)("p",null,"When the collator of parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," is building the next block in its chain, it will process the new\nmessage in its inbound queue as well as any other messages it may have found/received."),(0,i.kt)("p",null,"During processing, the message will execute the smart contract on parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and complete the\nasset transfer as intended."),(0,i.kt)("p",null,"The collator now hands this block to the validator, which itself will verify that this message was\nprocessed. If the message was processed and all other aspects of the block are valid, the validator\nwill include this block for parachain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," into the Relay Chain."))}u.isMDXComponent=!0},20267:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/hrmp-ex-d985c82747b653714ff4cde293e1eccc.png"}}]);