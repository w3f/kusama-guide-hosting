(self.webpackChunk=self.webpackChunk||[]).push([[4695],{3905:(e,o,t)=>{"use strict";t.d(o,{Zo:()=>s,kt:()=>h});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),u=function(e){var o=n.useContext(c),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},s=function(e){var o=u(e.components);return n.createElement(c.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},p=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),h=r,v=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return t?n.createElement(v,a(a({ref:o},s),{},{components:t})):n.createElement(v,a({ref:o},s))}));function h(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in o)hasOwnProperty.call(o,c)&&(l[c]=o[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9424:(e,o,t)=>{"use strict";t.r(o),t.d(o,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>u,toc:()=>s,default:()=>p});var n=t(22122),r=t(19756),i=(t(67294),t(3905)),a=["components"],l={id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors"},c=void 0,u={unversionedId:"maintain-guides-how-to-vote-councillor",id:"maintain-guides-how-to-vote-councillor",isDocsHomePage:!1,title:"Voting for Councillors",description:"The council is an elected body of on-chain accounts that are intended to represent the passive",source:"@site/../docs/maintain-guides-how-to-vote-councillor.md",sourceDirName:".",slug:"/maintain-guides-how-to-vote-councillor",permalink:"/zh-CN/docs/maintain-guides-how-to-vote-councillor",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain-guides-how-to-vote-councillor.md",version:"current",lastUpdatedBy:"kalwei",lastUpdatedAt:1625796229,formattedLastUpdatedAt:"2021/7/9",frontMatter:{id:"maintain-guides-how-to-vote-councillor",title:"Voting for Councillors",sidebar_label:"Voting for Councillors"}},s=[{value:"Voting for Councillors",id:"voting-for-councillors",children:[]},{value:"Removing your Vote",id:"removing-your-vote",children:[]}],d={toc:s};function p(e){var o=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,l,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The council is an elected body of on-chain accounts that are intended to represent the passive\nstakeholders of Polkadot and/or Kusama. The council has two major tasks in governance: proposing\nreferenda and vetoing dangerous or malicious referenda. For more information on the council, see the\n",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-governance#council"},"governance page"),". This guide will walk you through voting for councillors\nin the elections."),(0,i.kt)("h2",{id:"voting-for-councillors"},"Voting for Councillors"),(0,i.kt)("p",null,"Voting for councillors requires you to lock 5 DOT on Polkadot or 0.0083 KSM on Kusama for the\nduration of your vote."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warning: If your balance is vesting, you cannot use unvested tokens for this lock. You will have\nto wait until you have at least that many ",(0,i.kt)("strong",{parentName:"p"},"free")," tokens to vote.")),(0,i.kt)("p",null,"Like the validator elections, you can approve up to 16 different councillors and your vote will be\nequalized among the chosen group. Unlike validator elections, there is no unbonding period for your\nreserved tokens. Once you remove your vote, your tokens will be liquid again."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Warning: It is your responsibility not to put your entire balance into the reserved value when you\nmake a vote for councillors. It's best to keep ",(0,i.kt)("em",{parentName:"p"},"at least")," enough DOT/KSM to pay for transaction\nfees.")),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),' and click on the "Council" tab.\nOn the right side of the window there are two blue buttons, click on the one that says "Vote."'),(0,i.kt)("p",null,'Since the council uses approval voting, when you vote you signal which of the candidates you approve\nof and your voted tokens will be equalized among the selected candidates. Select up to 16 council\ncandidates by moving the slider to "Aye" for each one that you want to be elected. When you\'ve made\nthe proper configuration submit your transaction.'),(0,i.kt)("p",null,"You should see your vote appear in the interface immediately after your transaction is included."),(0,i.kt)("h2",{id:"removing-your-vote"},"Removing your Vote"),(0,i.kt)("p",null,"In order to get your reserved tokens back, you will need to remove your vote. Only remove your vote\nwhen you're done participating in elections and you no longer want your reserved tokens to count for\nthe councillors that you approve."),(0,i.kt)("p",null,'Go to the "Governance" > "Council" tab on the\n',(0,i.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps"},"Polkadot-JS Apps Dashboard"),"."),(0,i.kt)("p",null,'Under the "Council overview" tab, click on "Vote".'),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(97740).Z})),(0,i.kt)("p",null,'Issue the "Unvote all" option.'),(0,i.kt)("p",null,"When the transaction is included in a block you should have your reserved tokens made liquid again\nand your vote will no longer be counting for any councillors in the elections starting in the next\nterm."))}p.isMDXComponent=!0},97740:(e,o,t)=>{"use strict";t.d(o,{Z:()=>n});const n=t.p+"assets/images/polkadotjs_removeVoter-b66eb203df51ecdb1d926990120aa76b.png"}}]);