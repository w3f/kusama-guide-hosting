"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8255],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>y});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(o),g=r,y=c["".concat(l,".").concat(g)]||c[g]||d[g]||a;return o?n.createElement(y,i(i({ref:t},p),{},{components:o})):n.createElement(y,i({ref:t},p))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}g.displayName="MDXCreateElement"},77847:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var n=o(58168),r=o(98587),a=(o(96540),o(15680)),i=["components"],s={id:"bug-bounty",title:"Bug Bounty Program",sidebar_label:"Bug Bounty",description:"An Overview of How you can Help Catch Bugs.",keywords:["bug","bug bounty","report"],slug:"../bug-bounty"},l=void 0,u={unversionedId:"general/bug-bounty",id:"general/bug-bounty",title:"Bug Bounty Program",description:"An Overview of How you can Help Catch Bugs.",source:"@site/../docs/general/bug-bounty.md",sourceDirName:"general",slug:"/bug-bounty",permalink:"/docs/bug-bounty",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1710432171,formattedLastUpdatedAt:"Mar 14, 2024",frontMatter:{id:"bug-bounty",title:"Bug Bounty Program",sidebar_label:"Bug Bounty",description:"An Overview of How you can Help Catch Bugs.",keywords:["bug","bug bounty","report"],slug:"../bug-bounty"},sidebar:"docs",previous:{title:"Grants",permalink:"/docs/grants"},next:{title:"Polkadot Ambassadors",permalink:"/docs/ambassadors"}},p={},c=[{value:"Eligibility",id:"eligibility",level:2},{value:"How to report a bug",id:"how-to-report-a-bug",level:2}],d={toc:c},g="wrapper";function y(e){var t=e.components,o=(0,r.A)(e,i);return(0,a.yg)(g,(0,n.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it\nas per ",(0,a.yg)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"instructions on Web3 Foundation website"),".\nDisclosure to any third parties disqualifies bug bounty eligibility."),(0,a.yg)("admonition",{title:"Bug bounty program scope",type:"info"},(0,a.yg)("p",{parentName:"admonition"},"The bug bounty program does ",(0,a.yg)("em",{parentName:"p"},"not")," cover bugs on code bases that are external to or, written on top\nof Polkadot, or that use Polkadot. To be eligible for the bug bounty program the bug has to be a\npart of the Polkadot codebase, this includes protocols that Polkadot uses such as AnV, XCM, GRANDPA,\netc."),(0,a.yg)("p",{parentName:"admonition"},"We call on our community and all bug bounty hunters to help identify bugs in Polkadot.")),(0,a.yg)("h2",{id:"eligibility"},"Eligibility"),(0,a.yg)("p",null,"Generally speaking, any bug that poses a significant vulnerability, either to the soundness of\nprotocols and protocol/implementation compliance to network security, to classical client security,\nas well as security of cryptographic primitives, could be eligible for a reward. Please note that\nit's entirely our discretion to decide whether a bug is significant enough to qualify for a reward."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The submission quality will be a significant factor in the level of considered compensation. A\nhigh-quality submission includes explaining how the bug can be reproduced, how it was discovered,\nand otherwise critical details. Please disclose responsibly; disclosure to any third parties\ndisqualifies bug bounty eligibility."),(0,a.yg)("p",{parentName:"admonition"},"Examples:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"An attack that could disrupt the entire network and harm the validity to the network would be\nconsidered a critical threat."),(0,a.yg)("li",{parentName:"ul"},"An attack that would disrupt service to others would be regarded as a high threat."))),(0,a.yg)("admonition",{title:"Responsible investigation and reporting",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Responsible investigation and reporting include, but isn't limited to, the following:"),(0,a.yg)("ul",{parentName:"admonition"},(0,a.yg)("li",{parentName:"ul"},"Don't violate the privacy of other users, destroy data, etc."),(0,a.yg)("li",{parentName:"ul"},"Don't defraud or harm Polkadot network or its users during your research; you should make a good\nfaith effort not to interrupt or degrade our services."),(0,a.yg)("li",{parentName:"ul"},"Don't target the validators' physical security measures, or attempt to use social engineering,\nspam, distributed denial of service (DDoS) attacks, etc."),(0,a.yg)("li",{parentName:"ul"},"Initially, report the bug only to us and not to anyone else."),(0,a.yg)("li",{parentName:"ul"},"Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give\nus adequate written warning before disclosing it to anyone else."),(0,a.yg)("li",{parentName:"ul"},"In general, please investigate and report bugs in a way that makes a reasonable, good-faith effort\nnot to be disruptive or harmful to our users or us. Otherwise, your actions might be interpreted\nas an attack rather than an effort to be helpful."))),(0,a.yg)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,a.yg)("p",null,"Please follow the instructions at\n",(0,a.yg)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"web3.foundation/security-report/"),"."))}y.isMDXComponent=!0}}]);