"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2483],{3905:(e,o,t)=>{t.d(o,{Zo:()=>s,kt:()=>h});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),c=function(e){var o=n.useContext(u),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},s=function(e){var o=c(e.components);return n.createElement(u.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(t),h=r,v=p["".concat(u,".").concat(h)]||p[h]||d[h]||a;return t?n.createElement(v,i(i({ref:o},s),{},{components:t})):n.createElement(v,i({ref:o},s))}));function h(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var u in o)hasOwnProperty.call(o,u)&&(l[u]=o[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},41973:(e,o,t)=>{t.r(o),t.d(o,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>c,assets:()=>s,toc:()=>d,default:()=>h});var n=t(87462),r=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors",description:"Steps on how to vote for councillors.",slug:"../maintain-guides-how-to-vote-councillor"},u=void 0,c={unversionedId:"maintain/maintain-guides-how-to-vote-councillor",id:"maintain/maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",description:"Steps on how to vote for councillors.",source:"@site/../docs/maintain/maintain-guides-how-to-vote-councillor.md",sourceDirName:"maintain",slug:"/maintain-guides-how-to-vote-councillor",permalink:"/docs/maintain-guides-how-to-vote-councillor",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-guides-how-to-vote-councillor.md",tags:[],version:"current",lastUpdatedBy:"alex",lastUpdatedAt:1639886869,formattedLastUpdatedAt:"12/19/2021",frontMatter:{id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors",description:"Steps on how to vote for councillors.",slug:"../maintain-guides-how-to-vote-councillor"},sidebar:"docs",previous:{title:"Account Recovery",permalink:"/docs/kusama-social-recovery"},next:{title:"Ledger Devices",permalink:"/docs/kusama-ledger"}},s={},d=[{value:"Voting for Councillors",id:"voting-for-councillors",level:2},{value:"Removing your Vote",id:"removing-your-vote",level:2}],p={toc:d};function h(e){var o=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/learn-governance#council"},"governance page"),". This guide will walk you through voting for\ncouncillors in the elections."),(0,a.kt)("h2",{id:"voting-for-councillors"},"Voting for Councillors"),(0,a.kt)("p",null,"Voting for councillors requires you to reserve\n~0.063 KSM\n(a base amount + a per vote amount). You can then bond whatever amount you wish to put\nbehind your vote. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/maintain-guides-democracy"},"democracy guide")," for more information."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Voting and staking locks ",(0,a.kt)("strong",{parentName:"p"},"can overlap"),"\nA user can use staked funds to vote for Councillors and/or use those funds in referenda).\nA user is only prohibited from transferring these funds to another account.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: If your balance is vesting, you cannot use unvested tokens for this lock. You will have\nto wait until you have at least that many ",(0,a.kt)("strong",{parentName:"p"},"free")," tokens to vote.")),(0,a.kt)("p",null,"Like the validator elections, you can approve up to 16 different councillors and your vote will be\nequalized among the chosen group. Unlike validator elections, there is no unbonding period for your\nreserved tokens. Once you remove your vote, your tokens will be liquid again."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Warning: It is your responsibility not to put your entire balance into the reserved value when you\nmake a vote for councillors. It's best to keep ",(0,a.kt)("em",{parentName:"p"},"at least")," enough DOT/KSM to pay for transaction\nfees.")),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),' and click on the "Council" tab.\nOn the right side of the window there are two blue buttons, click on the one that says "Vote."'),(0,a.kt)("p",null,'Since the council uses approval voting, when you vote you signal which of the candidates you approve\nof and your voted tokens will be equalized among the selected candidates. Select up to 16 council\ncandidates by moving the slider to "Aye" for each one that you want to be elected. When you\'ve made\nthe proper configuration submit your transaction.'),(0,a.kt)("p",null,"You should see your vote appear in the interface immediately after your transaction is included."),(0,a.kt)("h2",{id:"removing-your-vote"},"Removing your Vote"),(0,a.kt)("p",null,"In order to get your reserved tokens back, you will need to remove your vote. Only remove your vote\nwhen you're done participating in elections and you no longer want your reserved tokens to count for\nthe councillors that you approve."),(0,a.kt)("p",null,'Go to the "Governance" > "Council" tab on the\n',(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),"."),(0,a.kt)("p",null,'Under the "Council overview" tab, click on "Vote".'),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",src:t(30301).Z,width:"1878",height:"361"})),(0,a.kt)("p",null,'Issue the "Unvote all" option.'),(0,a.kt)("p",null,"When the transaction is included in a block you should have your reserved tokens made liquid again\nand your vote will no longer be counting for any councillors in the elections starting in the next\nterm."))}h.isMDXComponent=!0},30301:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_removeVoter-b66eb203df51ecdb1d926990120aa76b.png"}}]);