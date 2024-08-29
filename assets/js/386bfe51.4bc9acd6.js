"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6319],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>m});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=u(n),p=i,m=g["".concat(s,".").concat(p)]||g[p]||d[p]||r;return n?o.createElement(m,a(a({ref:t},c),{},{components:n})):o.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53449:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>g});var o=n(58168),i=n(98587),r=(n(96540),n(15680)),a=["components"],l={id:"contributing",title:"Contributing to the Polkadot Wiki",sidebar_label:"Contributing to the Wiki",description:"Contribute to the Polkadot Wiki.",keywords:["contributing","contributions","translations"],slug:"../contributing"},s=void 0,u={unversionedId:"general/contributing",id:"general/contributing",title:"Contributing to the Polkadot Wiki",description:"Contribute to the Polkadot Wiki.",source:"@site/../docs/general/contributing.md",sourceDirName:"general",slug:"/contributing",permalink:"/docs/contributing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1711361405,formattedLastUpdatedAt:"Mar 25, 2024",frontMatter:{id:"contributing",title:"Contributing to the Polkadot Wiki",sidebar_label:"Contributing to the Wiki",description:"Contribute to the Polkadot Wiki.",keywords:["contributing","contributions","translations"],slug:"../contributing"},sidebar:"docs",previous:{title:"Community",permalink:"/docs/community"},next:{title:"Contributors",permalink:"/docs/contributors"}},c={},g=[{value:"How to Contribute",id:"how-to-contribute",level:2},{value:"Guideline and Rules for Contributing",id:"guideline-and-rules-for-contributing",level:2},{value:"Heritage",id:"heritage",level:2}],d={toc:g},p="wrapper";function m(e){var t=e.components,l=(0,i.A)(e,a);return(0,r.yg)(p,(0,o.A)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The wiki was started and is maintained by Web3 Foundation. It is an open source project and aims to\nbe the most extensive resource of knowledge on the Polkadot and Kusama ecosystem. A large part of\nthe material currently focuses on Polkadot and Kusama directly but it is not opposed to covering\ninformational material for community projects."),(0,r.yg)("admonition",{title:"Marketing material",type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Please do not try to pull request any marketing material as this will be rejected.")),(0,r.yg)("p",null,"Nonetheless, pull requests, discussions, and contributions from the community are encouraged. Active\ncommunity members who demonstrate a record of good contributions may be given write access to the\nrepository."),(0,r.yg)("p",null,"Otherwise, Web3 Foundation holds the administrative position and final say on the content that is\nincluded. Specifically, the Technical Education team at the foundation are most directly involved."),(0,r.yg)("admonition",{title:"Contributing Explainer",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Check out the ",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=6i55KOcy7B0"},"How to Contribute to the Polkadot Wiki"),"\nvideo for steps on contributions.")),(0,r.yg)("h2",{id:"how-to-contribute"},"How to Contribute"),(0,r.yg)("p",null,"You can contribute to the wiki on the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/w3f/polkadot-wiki"},"w3f/polkadot-wiki GitHub repository"),". Every page is a\n",(0,r.yg)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"MarkDown")," file, which is an easy to learn\nsyntax extension to plain text that makes creating links, rendering images, and nice-looking\nformatting simple."),(0,r.yg)("p",null,'Each page has an "Edit this page" link at the bottom of the content. By clicking it you are taken to\nthe GitHub sign-in page, where you can either log in or create an account.'),(0,r.yg)("p",null,"Once logged in, you'll be taken to the GitHub built-in text editor where you can make your edits\ndirectly. When you've completed your changes, you can add any specific details on what was changed\nand commit to a ",(0,r.yg)("strong",{parentName:"p"},"new branch")," to create a new Pull Request to the repository. From there one of the\nmaintainers will review your changes, and either merge them or request changes."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"contributing",src:n(94876).A,width:"2044",height:"1402"}),"\n",(0,r.yg)("img",{alt:"creating-pull-request",src:n(15389).A,width:"2112",height:"812"})),(0,r.yg)("p",null,'Remember that after you click "Propose Changes", you must also click on "Create Pull Request" on the\nnext page.'),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"creating-pull-request-2",src:n(96916).A,width:"1201",height:"655"})),(0,r.yg)("h2",{id:"guideline-and-rules-for-contributing"},"Guideline and Rules for Contributing"),(0,r.yg)("p",null,"There are a few basic ground-rules for contributors:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"No ",(0,r.yg)("inlineCode",{parentName:"strong"},"--force")," pushes")," or modifying the Git history in any way."),(0,r.yg)("li",{parentName:"ol"},"Pull requests are preferred to issues, especially for small changes such as typos. Issues should\nbe used for generic or broad-based changes or missing content. Suggestions and requests are\nencouraged."),(0,r.yg)("li",{parentName:"ol"},"Only use ",(0,r.yg)("strong",{parentName:"li"},"non-master branches"),"."),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("strong",{parentName:"li"},"Significant modifications"),", even by contributors, ought to be subject to a ",(0,r.yg)("strong",{parentName:"li"},"pull request")," to\nsolicit feedback from other contributors."),(0,r.yg)("li",{parentName:"ol"},"Pull requests to solicit feedback are ",(0,r.yg)("em",{parentName:"li"},"encouraged")," for any other non-trivial contribution but\nleft to the discretion of the contributor."),(0,r.yg)("li",{parentName:"ol"},"Contributors should attempt to adhere to the prevailing ",(0,r.yg)("inlineCode",{parentName:"li"},"MarkDown")," style, language, and layout."),(0,r.yg)("li",{parentName:"ol"},"Correct grammar should be used at all times. Pull requests with typos will not be merged until\nfixed."),(0,r.yg)("li",{parentName:"ol"},"Care should be taken to remain as objective and informative as possible. There should be no\neditorializing, and external bias should not be present."),(0,r.yg)("li",{parentName:"ol"},"We use a plugin called Prettier to standardize the style across documents. You can run this on\nyour local copy with ",(0,r.yg)("inlineCode",{parentName:"li"},"npx lint-staged"),", but for simplicity we also have a bot which runs this for\nus in your PRs.")),(0,r.yg)("h2",{id:"heritage"},"Heritage"),(0,r.yg)("p",null,"This document is based on the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Level/community/blob/master/CONTRIBUTING.md"},"Level contribution guidelines"),"."),(0,r.yg)("hr",null))}m.isMDXComponent=!0},94876:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/contributing-69801a2ab9b4924d0057fd15ffeb53ab.png"},96916:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/creating-pull-request-2-dbd958496c4e13a05ce366472d8235f0.png"},15389:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/creating-pull-request-d619fd33e91fa84290fb190070c603f4.png"}}]);