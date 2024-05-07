(self.webpackChunk=self.webpackChunk||[]).push([[8609],{35703:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var o=a(67294);const n=function(e){var t,a=e.message,n=(0,o.useState)(!0),r=n[0],s=n[1];return o.createElement(o.Fragment,null,r&&o.createElement("div",{className:"message-box"},o.createElement("button",{className:"close-button",onClick:function(){s(!1)}},"\u2716 "),o.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=a,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},47940:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(74165),n=a(15861),r=a(67294),s=a(87152),i=a(9712),u=a(67425);function l(e,t,a){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)((0,o.Z)().mark((function e(t,a,n){var r,u,l,d,p;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,u=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==r){e.next=18;break}return e.abrupt("return");case 18:return l=new s.U(r),e.next=21,i.G.create({provider:l});case 21:d=e.sent,(p=a.split(".")).forEach((function(e){e in d&&(d=d[e])})),e.t1=p[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return u=d.toString(),e.abrupt("break",35);case 29:return e.next=31,d();case 31:return u=(u=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+p[0]+") in "+a);case 35:return e.abrupt("return",u);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,a,o){switch(t){case"humanReadable":(0,u.HumanReadable)(e,a,o);break;case"precise":(0,u.Precise)(e,a,o);break;case"blocksToDays":(0,u.BlocksToDays)(e,o);break;case"erasToDays":(0,u.ErasToDays)(e,o,a);break;case"percentage":(0,u.Percentage)(e,o);break;case"permillToPercent":(0,u.PermillToPercent)(e,o);break;case"arrayLength":(0,u.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var t=e.network,a=e.path,s=e.defaultValue,i=e.filter,u=void 0===i?void 0:i,d=(0,r.useState)(""),c=d[0],h=d[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==u?p(s.toString(),u,t,h):h(s.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,n.Z)((0,o.Z)().mark((function e(){var n;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t,a,h);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==u?p(n,u,t,h):h(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),c}},67425:e=>{var t="polkadot",a="kusama",o="statemine",n="statemint",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,s,i){var u=void 0;if(s===t||s===n)u=3;else{if(s!==a&&s!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=6}e=parseFloat(e),i((e=Number.isInteger(e/r[s].precision)?e/r[s].precision+" "+r[s].symbol:(e/r[s].precision).toFixed(u)+" "+r[s].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/r[t].precision+" "+r[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,r,s){var i=void 0;if(s===t||s===n)i=1;else{if(s!==a&&s!==o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");i=4}r((e/=i).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},64539:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var o=a(87462),n=a(63366),r=(a(67294),a(3905)),s=a(47940),i=a(35703),u=["components"],l={id:"learn-guides-bounties",title:"Polkadot-JS Guides about Bounties",sidebar_label:"Bounty Guides",description:"Polkadot-JS Guides for Bounties",keyword:["treasury","bounties","guides","child bounty","polkadot-js"],slug:"../learn-guides-bounties"},d=void 0,p={unversionedId:"learn/learn-guides-bounties",id:"learn/learn-guides-bounties",title:"Polkadot-JS Guides about Bounties",description:"Polkadot-JS Guides for Bounties",source:"@site/../docs/learn/learn-guides-bounties.md",sourceDirName:"learn",slug:"/learn-guides-bounties",permalink:"/docs/learn-guides-bounties",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-guides-bounties",title:"Polkadot-JS Guides about Bounties",sidebar_label:"Bounty Guides",description:"Polkadot-JS Guides for Bounties",keyword:["treasury","bounties","guides","child bounty","polkadot-js"],slug:"../learn-guides-bounties"},sidebar:"docs",previous:{title:"Treasury Guides",permalink:"/docs/learn-guides-treasury"},next:{title:"Identity Guides",permalink:"/docs/learn-guides-identity"}},c={},h=[{value:"Submit a Bounty Proposal",id:"submit-a-bounty-proposal",level:2},{value:"Assign a Curator to a Bounty",id:"assign-a-curator-to-a-bounty",level:2},{value:"Create and Award Child Bounties",id:"create-and-award-child-bounties",level:2},{value:"Claim a Child Bounty Reward",id:"claim-a-child-bounty-reward",level:2}],m={toc:h},b="wrapper";function k(e){var t=e.components,l=(0,n.Z)(e,u);return(0,r.kt)(b,(0,o.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov-treasury#bounties"},"this page")," to learn about Bounties."),(0,r.kt)("admonition",{title:"Notify the Polkadot Direction Channel",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Remember always to notify the\n",(0,r.kt)("a",{parentName:"p",href:"https://matrix.to/#/#Polkadot-Direction:parity.io"},"Polkadot Direction Element Channel")," about\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-polkadot-opengov#referenda"},"OpenGov referenda")," so that the community can start reviewing\nthem and voting on them.")),(0,r.kt)("h2",{id:"submit-a-bounty-proposal"},"Submit a Bounty Proposal"),(0,r.kt)("admonition",{title:"Step-by-step written tutorial",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See\n",(0,r.kt)("a",{parentName:"p",href:"https://scribehow.com/shared/How_to_Submit_a_Bounty_Proposal_on_Polkadotjs_Apps__Ps_zfmNXRbm6PuZaj28JBQ"},"this written tutorial"),"\nto learn more about how to submit a bounty proposal.")),(0,r.kt)("p",null,"See the video tutorial below to learn how you can create a bounty and submit it for approval through\nan OpenGov referendum."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=8Cft1-8RWmk"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/8Cft1-8RWmk/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=8Cft1-8RWmk"},"Submit a Bounty")))),(0,r.kt)("p",null,'When you add a bounty, this will show as "proposed" in the main\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),'. Once the community approves your bounty\nproposal as an OpenGov referendum, the bounty will show as "funded" at the end of the\n',(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spending period")," on the main\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),". You can then proceed with assigning\ncurators to the bounty."),(0,r.kt)("p",null,"To minimize storage on chain in the same way as any proposal, bounties don't contain contextual\ninformation. When a user submits a bounty spending proposal, they will need to find an off-chain\nmedium to explain the proposal, for example a bounty proposal document on\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/opengov"},"Polkassembly")," or\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.subsquare.io/"},"Subsquare"),".\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1-IBz_owspV5OcvezWXpksWDQReWowschD0TFuaVKKcU/edit?usp=sharing"},"This template"),"\ncan be used to submit all the information needed by OpenGov voters to make an informed decision."),(0,r.kt)("p",null,"Submitting a bounty proposal will reserve\n","",(0,r.kt)(s.Z,{network:"kusama",path:"consts.bounties.bountyDepositBase",defaultValue:33333333300,filter:"humanReadable",mdxType:"RPC"}),"."),(0,r.kt)("h2",{id:"assign-a-curator-to-a-bounty"},"Assign a Curator to a Bounty"),(0,r.kt)("admonition",{title:"Step-by-step written tutorial",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See\n",(0,r.kt)("a",{parentName:"p",href:"https://scribehow.com/shared/How_to_Assign_a_Curator_to_a_Bounty_on_Polkadotjs_Apps__JgK3eSfXQdm_PSvtz8TelQ"},"this written tutorial"),"\nto learn more about how to assign a curator to a bounty.")),(0,r.kt)("p",null,'Once your bounty is shown as "funded" on the main\n',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),", you can propose a bounty curator. See the\nvideo tutorial below to learn how you can add a curator to a bounty and submit it for approval\nthrough an OpenGov referendum."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=TM7vk3oP9IA"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/TM7vk3oP9IA/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=TM7vk3oP9IA"},"Assign Curator to a Bounty")))),(0,r.kt)("p",null,"Once your OpenGov referendum has been approved by the community and served the required\n",(0,r.kt)("a",{parentName:"p",href:"/docs/glossary#spend-period"},"spending period"),', the bounty will still show as "funded" on\nthe main ',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page")," and await the curator's\nacceptance. The curator must formally accept the curator role by signing a ",(0,r.kt)("inlineCode",{parentName:"p"},"bounties.acceptCurator"),"\nextrinsic. More information about when to do this can be found on the main\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/bounties"},"Bounties page"),'. Only after the curators claim their\ncandidacy the bounty will show as "active" on the main Bounty page.'),(0,r.kt)("admonition",{title:"Curator assignment call must be executed after bounty is funded",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Curator assignment must take place after the bounty has been funded, and approved bounties are\nfunded after a spend period has been completed. A curator assignment referendum cannot be executed\nduring the same spend period when the bounty is funded."),(0,r.kt)("p",{parentName:"admonition"},"If your bounty has been awarded but is not funded yet, you need to make sure that the curator\nassignment referendum gets enacted in the subsequent spending period (you can set a delay in\n",(0,r.kt)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov#submitting-a-proposal"},"Polkadot-JS")," when you submit the proposal\nduring the current spend period).")),(0,r.kt)("h2",{id:"create-and-award-child-bounties"},"Create and Award Child Bounties"),(0,r.kt)("admonition",{title:"Step-by-step written tutorial",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See\n",(0,r.kt)("a",{parentName:"p",href:"https://scribehow.com/shared/How_to_Create_and_Award_a_Child_Bounty__Q-YFGkYAR3WxMnvYGHiU3Q"},"this written tutorial"),"\nto learn more about how to create and award child bounties.")),(0,r.kt)("admonition",{title:"Remember to add contextual information about child bounties",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When you add child bounties, please add contextual information on the governance forums\n",(0,r.kt)("a",{parentName:"p",href:"https://polkassembly.io/"},"Polkassembly")," or ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.subsquare.io/"},"Subsquare"),".")),(0,r.kt)("p",null,"See the video tutorial below to learn how to create a child bounty, assign a curator, and award a\nchild bounty."),(0,r.kt)("p",null,"The video will show how to create and award a child bounty using a batch call. We will also include\nproposing and approving curator candidacy for the child bounty. The calls can be executed\nseparately, depending on the process curators consider appropriate for their bounty."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=mLpvx0OQoyM"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/mLpvx0OQoyM/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=mLpvx0OQoyM"},"Create and Award Child Bounties")))),(0,r.kt)("p",null,"Note that once a child bounty is awarded, awardees need to wait for the\n4-day delay to be complete before claiming the\nchild bounty."),(0,r.kt)("h2",{id:"claim-a-child-bounty-reward"},"Claim a Child Bounty Reward"),(0,r.kt)("admonition",{title:"Step-by-step written tutorial",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See\n",(0,r.kt)("a",{parentName:"p",href:"https://scribehow.com/shared/How_to_claim_a_Child_Bounty_reward_on_Polkadotjs__t3V7NDUjQlus40EUjc-5Kw"},"this written tutorial"),"\nto learn more about how to claim a child bounty reward.")),(0,r.kt)("p",null,"The status of child bounties can be viewed on the\n",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/bounties"},"Polkassembly Bounty page"),' under the specific parent\nbounty. A child bounty status can be "Added", "Awarded", or "Claimed". For example, the parent\nbounty 17 refers to the Community Events Bounty, which has 183 child bounties.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"polkassembly-child-bounties",src:a(83001).Z,width:"2408",height:"1053"})),(0,r.kt)("p",null,"After a child bounty has been awarded and the\n","",(0,r.kt)(s.Z,{network:"kusama",path:"consts.bounties.bountyDepositPayoutDelay",defaultValue:57600,filter:"blocksToDays",mdxType:"RPC"}),"-day\ndelay elapsed, follow the guidelines in the video tutorial below to learn how to claim a child\nbounty reward. Note that the extrinsic to claim the child bounty reward is permissionless, and\nanyone can initiate the claim on behalf of the beneficiary."),(0,r.kt)("div",{className:"row"},(0,r.kt)("div",{className:"col text--center"},(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=db82aHgy23c"},(0,r.kt)("img",{src:"https://img.youtube.com/vi/db82aHgy23c/0.jpg",width:"350",style:{borderRadius:10,border:"1px solid slategrey"}})),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://www.youtube.com/watch?v=db82aHgy23c"},"Claim Child Bounty Reward")))))}k.isMDXComponent=!0},83001:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});const o=a.p+"assets/images/polkassembly-child-bounties-fde994e770f3e109a07752068aa417b1.png"},46601:()=>{}}]);