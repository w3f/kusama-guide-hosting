"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9057],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),d=o,y=p["".concat(u,".").concat(d)]||p[d]||g[d]||a;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},33383:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),i=["components"],s={id:"kusama-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",keywords:["bug","bounty","error","report"],slug:"../../kusama-bug-bounty"},u=void 0,l={unversionedId:"general/kusama/kusama-bug-bounty",id:"general/kusama/kusama-bug-bounty",title:"Bug Bounty",description:"An overview of how you can help catch bugs.",source:"@site/../docs/general/kusama/kusama-bug-bounty.md",sourceDirName:"general/kusama",slug:"/kusama-bug-bounty",permalink:"/docs/kusama-bug-bounty",draft:!1,tags:[],version:"current",lastUpdatedBy:"Keith Alfaro",lastUpdatedAt:1663541349,formattedLastUpdatedAt:"Sep 18, 2022",frontMatter:{id:"kusama-bug-bounty",title:"Bug Bounty",sidebar_label:"Bug Bounty",description:"An overview of how you can help catch bugs.",keywords:["bug","bounty","error","report"],slug:"../../kusama-bug-bounty"},sidebar:"docs",previous:{title:"Resolving Errors",permalink:"/docs/maintain-errors"},next:{title:"Adversarial Cheatsheet",permalink:"/docs/kusama-adversarial-cheatsheet"}},c={},p=[{value:"Eligibility",id:"eligibility",level:2},{value:"How to report a bug",id:"how-to-report-a-bug",level:2}],g={toc:p},d="wrapper";function y(e){var t=e.components,r=(0,o.A)(e,i);return(0,a.yg)(d,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Program Scope",type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The bug bounty program does ",(0,a.yg)("em",{parentName:"p"},"not")," cover bugs on code bases that are external to or, written on top\nof Kusama, or that use Kusama. To be eligible for the bug bounty program the bug has to be a part of\nthe Kusama codebase, this includes protocols that Polkadot uses such as AnV, XCM, GRANDPA, etc.")),(0,a.yg)("p",null,"We call on our community and all bug bounty hunters to help identify bugs in Kusama."),(0,a.yg)("p",null,"If you discover a bug, we appreciate your cooperation in responsibly investigating and reporting it\nas per ",(0,a.yg)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"instructions on Web3 Foundation website"),".\nDisclosure to any third parties disqualifies bug bounty eligibility."),(0,a.yg)("h2",{id:"eligibility"},"Eligibility"),(0,a.yg)("p",null,"Generally speaking, any bug that poses a significant vulnerability, either to the soundness of\nprotocols and protocol/implementation compliance to network security, to classical client security,\nas well as security of cryptographic primitives, could be eligible for a reward. Please note that\nit's entirely our discretion to decide whether a bug is significant enough to qualify for a reward."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Examples include:")," An attack that could disrupt the entire network and harm the validity to the\nnetwork would be considered a critical threat. An attack that would disrupt service to others would\nbe regarded as a high threat."),(0,a.yg)("p",null,"Please note: The submission quality will be a significant factor in the level of considered\ncompensation. A high-quality submission includes explaining how the bug can be reproduced, how it\nwas discovered, and otherwise critical details. Please disclose responsibly; disclosure to any third\nparties disqualifies bug bounty eligibility."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Responsible investigation and reporting")," Responsible investigation and reporting include, but\nisn't limited to, the following:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Don't violate the privacy of other users, destroy data, etc."),(0,a.yg)("li",{parentName:"ul"},"Don't defraud or harm Kusama network or its users during your research; you should make a good\nfaith effort not to interrupt or degrade our services."),(0,a.yg)("li",{parentName:"ul"},"Don't target the validators' physical security measures, or attempt to use social engineering,\nspam, distributed denial of service (DDoS) attacks, etc."),(0,a.yg)("li",{parentName:"ul"},"Initially, report the bug only to us and not to anyone else."),(0,a.yg)("li",{parentName:"ul"},"Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give\nus adequate written warning before disclosing it to anyone else."),(0,a.yg)("li",{parentName:"ul"},"In general, please investigate and report bugs in a way that makes a reasonable, good-faith effort\nnot to be disruptive or harmful to our users or us. Otherwise, your actions might be interpreted\nas an attack rather than an effort to be helpful.")),(0,a.yg)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,a.yg)("p",null,"Please follow the instructions at\n",(0,a.yg)("a",{parentName:"p",href:"https://web3.foundation/security-report/"},"web3.foundation/security-report/"),"."))}y.isMDXComponent=!0}}]);