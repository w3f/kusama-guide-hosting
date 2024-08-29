"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7809],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),g=a,y=d["".concat(l,".").concat(g)]||d[g]||p[g]||i;return t?o.createElement(y,r(r({ref:n},u),{},{components:t})):o.createElement(y,r({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=g;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[d]="string"==typeof e?e:a,r[1]=c;for(var s=2;s<i;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}g.displayName="MDXCreateElement"},67141:(e,n,t)=>{t.d(n,{A:()=>a});var o=t(96540);const a=function(e){var n,t=e.message,a=(0,o.useState)(!0),i=a[0],r=a[1];return o.createElement(o.Fragment,null,i&&o.createElement("div",{className:"message-box"},o.createElement("button",{className:"close-button",onClick:function(){r(!1)}},"\u2716 "),o.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(n=t,n.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},71066:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=t(58168),a=t(98587),i=(t(96540),t(15680)),r=t(67141),c=["components"],l={id:"maintain-guides-how-to-join-council",title:"Join the Council",sidebar_label:"Join the Council",description:"Steps on how to join the official on-chain council.",keywords:["council","how to join council","governance","candidate"],slug:"../maintain-guides-how-to-join-council"},s=void 0,u={unversionedId:"maintain/archive/maintain-guides-how-to-join-council",id:"maintain/archive/maintain-guides-how-to-join-council",title:"Join the Council",description:"Steps on how to join the official on-chain council.",source:"@site/../docs/maintain/archive/maintain-guides-how-to-join-council.md",sourceDirName:"maintain/archive",slug:"/maintain/maintain-guides-how-to-join-council",permalink:"/docs/maintain/maintain-guides-how-to-join-council",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"maintain-guides-how-to-join-council",title:"Join the Council",sidebar_label:"Join the Council",description:"Steps on how to join the official on-chain council.",keywords:["council","how to join council","governance","candidate"],slug:"../maintain-guides-how-to-join-council"},sidebar:"docs",previous:{title:"Participate in Democracy",permalink:"/docs/maintain/maintain-guides-democracy"},next:{title:"Voting for Councillors",permalink:"/docs/maintain/maintain-guides-how-to-vote-councillor"}},d={},p=[{value:"Submit Candidacy",id:"submit-candidacy",level:2},{value:"Voting on Candidates",id:"voting-on-candidates",level:2},{value:"Winning",id:"winning",level:2}],g={toc:p},y="wrapper";function m(e){var n=e.components,l=(0,a.A)(e,c);return(0,i.yg)(y,(0,o.A)({},g,l,{components:n,mdxType:"MDXLayout"}),(0,i.yg)(r.A,{message:"The content on this page is archived. For up-to-date information about governance, see the\n[Polkadot OpenGov page](/docs/learn-polkadot-opengov).",mdxType:"MessageBox"}),(0,i.yg)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn/learn-governance#council"},"governance page"),". This guide will walk you through\nentering your candidacy to the council."),(0,i.yg)("h2",{id:"submit-candidacy"},"Submit Candidacy"),(0,i.yg)("p",null,"Submitting your candidacy for the council requires a small bond of DOT / KSM. Unless your candidacy\nwins, the bond will be forfeited. You can receive your bond back if you manually renounce your\ncandidacy before losing. Runners-up are selected after every round and are reserved members in case\none of the winners gets forcefully removed."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Currently the bond for submitting a council candidacy on Polkadot is 100 DOT, and 0.0033 KSM on\nKusama.")),(0,i.yg)("p",null,"It is a good idea to announce your council intention before submitting your candidacy so that your\nsupporters will know when they can start to vote for you. You can also vote for yourself in case no\none else does."),(0,i.yg)("p",null,"Go to ",(0,i.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot Apps Dashboard"),' and navigate to the "Council" tab.\nClick the button on the right that says "Submit Candidacy."'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"submit candidacy button",src:t(96113).A,width:"580",height:"120"})),(0,i.yg)("p",null,'After making the transaction, you will see your account appear underneath the row "Candidates."'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"candidates list",src:t(97214).A,width:"2880",height:"298"})),(0,i.yg)("p",null,"It is a good idea now to lead by example and give yourself a vote."),(0,i.yg)("h2",{id:"voting-on-candidates"},"Voting on Candidates"),(0,i.yg)("p",null,'Next to the button to submit candidacy is another button titled "Vote." You will click this button\nto make a vote for yourself (optional).'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"voting button on UI",src:t(35349).A,width:"556",height:"120"})),(0,i.yg)("p",null,"The council uses ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-phragmen"},"Phragm\xe9n"),' approval voting, which is also used in\nthe validator elections. This means that you can choose up to 16 distinct candidates to vote for and\nyour stake will equalize between them. For this guide, choose to approve your own candidacy by\nclicking on the switch next to your account and changing it to say "Aye."'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"voting pop up on UI",src:t(39365).A,width:"2186",height:"1104"})),(0,i.yg)("h2",{id:"winning"},"Winning"),(0,i.yg)("p",null,'If you are one of the lucky ones to win a council election you will see your account move underneath\nthe row "Members".'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"council members list",src:t(5483).A,width:"2880",height:"1346"})),(0,i.yg)("p",null,"Now you are able to participate on the council by making motions or voting proposals. To join in on\nthe active discussions, join the\n",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Polkadot Direction channel"),"."))}m.isMDXComponent=!0},97214:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/polkadotjs_candidates-bc420d7637b02bd43169dd6bc44a9bd9.png"},5483:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/polkadotjs_council_members-c731a3fa3e5eb821427126149431dbfe.png"},96113:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/polkadotjs_submit_candidancy-04eabb0aa998c350427386dcff208d1c.png"},35349:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/polkadotjs_vote_button-9f5daf5f27fda6df219d0f959e7632b4.png"},39365:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/polkadotjs_voting-cc5698e8e8f5de77644d3a7cb316a2ea.png"}}]);