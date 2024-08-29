"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5362],{15680:(e,o,n)=>{n.d(o,{xA:()=>u,yg:()=>y});var t=n(96540);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=t.createContext({}),s=function(e){var o=t.useContext(c),n=o;return e&&(n="function"==typeof e?e(o):i(i({},o),e)),n},u=function(e){var o=s(e.components);return t.createElement(c.Provider,{value:o},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},g=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,y=d["".concat(c,".").concat(g)]||d[g]||p[g]||a;return n?t.createElement(y,i(i({ref:o},u),{},{components:n})):t.createElement(y,i({ref:o},u))}));function y(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},67141:(e,o,n)=>{n.d(o,{A:()=>r});var t=n(96540);const r=function(e){var o,n=e.message,r=(0,t.useState)(!0),a=r[0],i=r[1];return t.createElement(t.Fragment,null,a&&t.createElement("div",{className:"message-box"},t.createElement("button",{className:"close-button",onClick:function(){i(!1)}},"\u2716 "),t.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(o=n,o.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},76577:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=n(58168),r=n(98587),a=(n(96540),n(15680)),i=n(67141),l=["components"],c={id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors",description:"Steps on how to vote for councillors.",keywords:["council","vote","councillors"],slug:"../maintain-guides-how-to-vote-councillor"},s=void 0,u={unversionedId:"maintain/archive/maintain-guides-how-to-vote-councillor",id:"maintain/archive/maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",description:"Steps on how to vote for councillors.",source:"@site/../docs/maintain/archive/maintain-guides-how-to-vote-councillor.md",sourceDirName:"maintain/archive",slug:"/maintain/maintain-guides-how-to-vote-councillor",permalink:"/docs/maintain/maintain-guides-how-to-vote-councillor",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1715101173,formattedLastUpdatedAt:"May 7, 2024",frontMatter:{id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors",description:"Steps on how to vote for councillors.",keywords:["council","vote","councillors"],slug:"../maintain-guides-how-to-vote-councillor"},sidebar:"docs",previous:{title:"Join the Council",permalink:"/docs/maintain/maintain-guides-how-to-join-council"},next:{title:"Polkadot Developer Portal",permalink:"/docs/build-guide"}},d={},p=[{value:"Voting for Councillors",id:"voting-for-councillors",level:2},{value:"Removing your Vote",id:"removing-your-vote",level:2}],g={toc:p},y="wrapper";function m(e){var o=e.components,c=(0,r.A)(e,l);return(0,a.yg)(y,(0,t.A)({},g,c,{components:o,mdxType:"MDXLayout"}),(0,a.yg)(i.A,{message:"The content on this page is archived. For up-to-date information about governance, see the\n[Polkadot OpenGov page](/docs/learn-polkadot-opengov).",mdxType:"MessageBox"}),(0,a.yg)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,a.yg)("a",{parentName:"p",href:"/docs/learn/learn-governance#council"},"governance page"),". This guide will walk you through\nvoting for councillors in the elections."),(0,a.yg)("h2",{id:"voting-for-councillors"},"Voting for Councillors"),(0,a.yg)("p",null,"Voting for councillors requires you to reserve\n0.067 KSM as a base amount and an amount\nof 0.0001 KSM per vote. You can then bond\nwhatever amount you wish to put behind your vote. See the\n",(0,a.yg)("a",{parentName:"p",href:"/docs/maintain/maintain-guides-democracy"},"democracy guide")," for more information."),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"If your balance is vesting, you cannot use unvested tokens for this lock. You will have to wait\nuntil you have at least that many ",(0,a.yg)("strong",{parentName:"p"},"free")," tokens to vote.")),(0,a.yg)("p",null,"Like the validator elections, you can approve up to 16 different councillors and your vote will be\nequalized among the chosen group. Unlike validator elections, there is no unbonding period for your\nreserved tokens. Once you remove your vote, your tokens will be liquid again."),(0,a.yg)("admonition",{type:"warning"},(0,a.yg)("p",{parentName:"admonition"},"It is your responsibility not to put your entire balance into the reserved value when you make a\nvote for councillors. It's best to keep ",(0,a.yg)("em",{parentName:"p"},"at least")," enough DOT/KSM to pay for transaction fees.")),(0,a.yg)("p",null,"Go to the ",(0,a.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),' and click on the "Council" tab.\nOn the right side of the window there are two blue buttons, click on the one that says "Vote."'),(0,a.yg)("p",null,'Since the council uses approval voting, when you vote you signal which of the candidates you approve\nof and your voted tokens will be equalized among the selected candidates. Select up to 16 council\ncandidates by moving the slider to "Aye" for each one that you want to be elected. When you\'ve made\nthe proper configuration submit your transaction.'),(0,a.yg)("p",null,"You should see your vote appear in the interface immediately after your transaction is included."),(0,a.yg)("h2",{id:"removing-your-vote"},"Removing your Vote"),(0,a.yg)("p",null,"In order to get your reserved tokens back, you will need to remove your vote. Only remove your vote\nwhen you're done participating in elections and you no longer want your reserved tokens to count for\nthe councillors that you approve."),(0,a.yg)("p",null,'Go to the "Governance" > "Council" tab on the\n',(0,a.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),"."),(0,a.yg)("p",null,'Under the "Council overview" tab, click on "Vote".'),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"polkadotjs_removeVoter",src:n(15496).A,width:"1878",height:"361"})),(0,a.yg)("p",null,'Issue the "Unvote all" option.'),(0,a.yg)("p",null,"When the transaction is included in a block you should have your reserved tokens made liquid again\nand your vote will no longer be counting for any councillors in the elections starting in the next\nterm."))}m.isMDXComponent=!0},15496:(e,o,n)=>{n.d(o,{A:()=>t});const t=n.p+"assets/images/polkadotjs_removeVoter-b66eb203df51ecdb1d926990120aa76b.png"}}]);