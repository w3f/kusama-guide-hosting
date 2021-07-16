(self.webpackChunk=self.webpackChunk||[]).push([[4540],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),h=n,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||o;return a?r.createElement(u,i(i({ref:t},c),{},{components:a})):r.createElement(u,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15624:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>m});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=["components"],s={id:"research",title:"Research Pages",sidebar_label:"Research Pages"},l=void 0,p={unversionedId:"research",id:"research",isDocsHomePage:!1,title:"Research Pages",description:"The Polkadot research pages are",source:"@site/../docs/research.md",sourceDirName:".",slug:"/research",permalink:"/zh-CN/docs/research",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/research.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1626467613,formattedLastUpdatedAt:"2021/7/16",frontMatter:{id:"research",title:"Research Pages",sidebar_label:"Research Pages"}},c=[{value:"Research Papers",id:"research-papers",children:[]},{value:"Research Blogs",id:"research-blogs",children:[]}],d={toc:c};function m(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Polkadot ",(0,o.kt)("a",{parentName:"p",href:"https://w3f-research.readthedocs.io/en/latest/Publications.html"},"research pages")," are\nedited directly by the researchers at W3F and contain papers, articles and documents that are\nsources for the information on the wiki."),(0,o.kt)("p",null,"The following papers and articles may be of special interest for those interested in exploring Polkadot from a research or academic perspective."),(0,o.kt)("h2",{id:"research-papers"},"Research Papers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/2005.13456.pdf"},(0,o.kt)("inlineCode",{parentName:"a"},"Overview of Polkadot and its Design Considerations"))," - A\nbroad overview of the design of Polkadot. Authors: Jeff Burdges, Alfonso Cevallos, Peter Czaban,\nRob Habermeier, Syed Hosseini, Fabio Lama, Handan K\u0131l\u0131n\xe7 Alper, Ximin Luo, Fatemeh Shirazi,\nAlistair Stewart, Gavin Wood"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://research.web3.foundation/en/latest/polkadot/NPoS/index.html"},(0,o.kt)("inlineCode",{parentName:"a"},"Intro to Nominated Proof of Stake"))," -\nA description of the NPoS scheme which selects which validators are allowed to participate in the\nconsensus protocol of Polkadot. Author: Alfonso Cevallos"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},(0,o.kt)("inlineCode",{parentName:"a"},"GRANDPA: A Byzantine Finality Gadget"))," - GHOST-based Recursive\nAncestor Deriving Prefix Agreement, Polkadot's finality gadget. Authors: Alistair Stewart and\nLefteris Kokoris Kogias"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2004.12990"},(0,o.kt)("inlineCode",{parentName:"a"},"A Verifiably Secure and Proportional Committee Election Rule"))," -\nValidator Election in Nominated Proof of Stake. Authors: Alfonso Cevallos and Alistair Stewart"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2007.01560"},(0,o.kt)("inlineCode",{parentName:"a"},"Network Time with a Consensus on Clock"))," - Consensus on Clock in\nUniversally Composable Timing. Author: Handan K\u0131l\u0131n\xe7 Alper"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eprint.iacr.org/2020/638"},(0,o.kt)("inlineCode",{parentName:"a"},"Delay Encryption"))," - Delay Encryption can roughly be described\nas \u201cidentity based encryption with slow derived private key issuance\u201d. Authors: Jeff Burdges and Luca de Feo")),(0,o.kt)("h2",{id:"research-blogs"},"Research Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadot.network/an-updated-overview-of-polkadot/"},(0,o.kt)("inlineCode",{parentName:"a"},"An Updated Overview of Polkadot"))," \u2013\nGives a summary of the paper \u201cOverview of Polkadot and its Design Considerations\u201d"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://polkadot.network/polkadot-research-update/"},(0,o.kt)("inlineCode",{parentName:"a"},"Polkadot Research Update"))," \u2013 Gives a summary\nof the papers on Validator Election in Nominated Proof of Stake, Network Time with a Consensus on\nClock, and Byzantine Finality Gadgets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/polkadots-messaging-scheme-b1ec560908b7"},(0,o.kt)("inlineCode",{parentName:"a"},"Polkadot\u2019s Messaging Scheme")),"\n\u2013 Gives an outline of Cross-Chain Message Passing (XCMP). Authors: Fatemeh Shirazi, Logan Saether,\nAlistair Stewart, Rob Habermeier, Gavin Wood"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/how-nominated-proof-of-stake-will-work-in-polkadot-377d70c6bd43"},(0,o.kt)("inlineCode",{parentName:"a"},"How Nominated Proof of Stake Will Work in Polkadot")),"\n\u2013 Gives an outline of Nominated Proof of Stake in Polkadot. Author: Alfonzo Cevallos"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/web3foundation/messaging-protocol-workshop-outcomes-7a827d02a81a"},(0,o.kt)("inlineCode",{parentName:"a"},"Messaging Protocol Workshop Outcomes")),"\n\u2013 An initiative to design and implement a privacy-preserving communication system for\ndecentralized applications.")))}m.isMDXComponent=!0}}]);