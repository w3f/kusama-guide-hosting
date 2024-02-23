(self.webpackChunk=self.webpackChunk||[]).push([[8138],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>p});var o=a(74165),n=a(15861),s=a(67294),r=a(87152),i=a(14741),l=a(67425);function d(t,e,a){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)((0,o.Z)().mark((function t(e,a,n){var s,l,d,u,c;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s=void 0,l=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:13;break;case 5:return s="wss://rpc.polkadot.io",t.abrupt("break",14);case 7:return s="wss://kusama-rpc.polkadot.io/",t.abrupt("break",14);case 9:return s="wss://statemine-rpc.polkadot.io/",t.abrupt("break",14);case 11:return s="wss://statemint-rpc.polkadot.io/",t.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==s){t.next=18;break}return t.abrupt("return");case 18:return d=new r.U(s),t.next=21,i.G.create({provider:d});case 21:u=t.sent,(c=a.split(".")).forEach((function(t){t in u&&(u=u[t])})),t.t1=c[0],t.next="consts"===t.t1?27:"query"===t.t1?29:34;break;case 27:return l=u.toString(),t.abrupt("break",35);case 29:return t.next=31,u();case 31:return l=(l=t.sent).toString(),t.abrupt("break",35);case 34:console.log("Unknown path prefix ("+c[0]+") in "+a);case 35:return t.abrupt("return",l);case 36:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(t,e,a,o){switch(e){case"humanReadable":(0,l.HumanReadable)(t,a,o);break;case"precise":(0,l.Precise)(t,a,o);break;case"blocksToDays":(0,l.BlocksToDays)(t,o);break;case"erasToDays":(0,l.ErasToDays)(t,o,a);break;case"percentage":(0,l.Percentage)(t,o);break;case"permillToPercent":(0,l.PermillToPercent)(t,o);break;case"arrayLength":(0,l.ArrayLength)(t,o);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(t){var e=t.network,a=t.path,r=t.defaultValue,i=t.filter,l=void 0===i?void 0:i,u=(0,s.useState)(""),p=u[0],k=u[1];return e=e.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?c(r.toString(),l,e,k):k(r.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":t="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var t=(0,n.Z)((0,o.Z)().mark((function t(){var n;return(0,o.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e,a,k);case 2:if(void 0!==(n=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==l?c(n,l,e,k):k(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),p}},67425:t=>{var e="polkadot",a="kusama",o="statemine",n="statemint",s={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};t.exports={HumanReadable:function(t,r,i){var l=void 0;if(r===e||r===n)l=3;else{if(r!==a&&r!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}t=parseFloat(t),i((t=Number.isInteger(t/s[r].precision)?t/s[r].precision+" "+s[r].symbol:(t/s[r].precision).toFixed(l)+" "+s[r].symbol).toString())},Precise:function(t,e,a){a(t=(t=parseFloat(t))/s[e].precision+" "+s[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,s,r){var i=void 0;if(r===e||r===n)i=1;else{if(r!==a&&r!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}s((t/=i).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},29576:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=a(87462),n=a(63366),s=(a(67294),a(3905)),r=a(47940),i=["components"],l={id:"learn-guides-staking",title:"Polkadot-JS Guides For Nominators",sidebar_label:"Staking",description:"Polkadot-JS Guides for Nominators.",keyword:["nominate","stake","staking","claim","rewards","polkadot-js"],slug:"../learn-guides-staking"},d=void 0,u={unversionedId:"learn/learn-guides-staking",id:"learn/learn-guides-staking",title:"Polkadot-JS Guides For Nominators",description:"Polkadot-JS Guides for Nominators.",source:"@site/../docs/learn/learn-guides-staking.md",sourceDirName:"learn",slug:"/learn-guides-staking",permalink:"/docs/learn-guides-staking",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1699519944,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{id:"learn-guides-staking",title:"Polkadot-JS Guides For Nominators",sidebar_label:"Staking",description:"Polkadot-JS Guides for Nominators.",keyword:["nominate","stake","staking","claim","rewards","polkadot-js"],slug:"../learn-guides-staking"},sidebar:"docs",previous:{title:"Staking",permalink:"/docs/learn-guides-staking-index"},next:{title:"Nomination Pools",permalink:"/docs/learn-guides-staking-pools"}},c={},p=[{value:"Claiming Rewards with Polkadot-JS",id:"claiming-rewards-with-polkadot-js",level:2}],k={toc:p},m="wrapper";function g(t){var e=t.components,l=(0,n.Z)(t,i);return(0,s.kt)(m,(0,o.Z)({},k,l,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"See ",(0,s.kt)("a",{parentName:"p",href:"/docs/learn-staking"},"this page")," to learn about staking."),(0,s.kt)("h2",{id:"claiming-rewards-with-polkadot-js"},"Claiming Rewards with Polkadot-JS"),(0,s.kt)("p",null,"Anyone can trigger a payout for any validator, as long as they are willing to pay the transaction\nfee. Someone must submit a transaction with a validator ID and an era index.\nKusama will automatically calculate that\nvalidator's reward, find the top\n","\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"\nnominators for that era, and distribute the rewards pro rata."),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The Staking system only applies the highest\n","\n",(0,s.kt)(r.Z,{network:"kusama",path:"consts.staking.maxNominatorRewardedPerValidator",defaultValue:512,mdxType:"RPC"}),"\nnominations to each validator to reduce the complexity of the staking set.")),(0,s.kt)("p",null,"These details are handled for you automatically if you use the\n",(0,s.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/staking/payout"},"Polkadot-JS UI"),", which also allows you to submit\nbatches of eras at once."),(0,s.kt)("p",null,'To claim rewards on Polkadot-JS UI, you will need to be in the "Payouts" tab underneath "Staking",\nwhich will list all the pending payouts for your stashes.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"pending-payouts",src:a(26416).Z,width:"2876",height:"600"})),(0,s.kt)("p",null,'To then claim your reward, select the "Payout all" button. This will prompt you to select your stash\naccounts for payout.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"select-payouts",src:a(32348).Z,width:"2192",height:"624"})),(0,s.kt)("p",null,"Once you are done with payout, another screen will appear asking for you to sign and submit the\ntransaction."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"transaction-payouts",src:a(41083).Z,width:"2878",height:"818"})))}g.isMDXComponent=!0},41083:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_complete-87ad124d5d70e50c16f1434074562d70.png"},26416:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_page-fc4f62399f71b542e9eaac01405ef528.png"},32348:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});const o=a.p+"assets/images/polkadotjs_payout_popup-feb847cdfae64f3fa247cdb2beea4ba6.png"},46601:()=>{}}]);