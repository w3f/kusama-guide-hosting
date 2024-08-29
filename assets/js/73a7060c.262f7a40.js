(self.webpackChunk=self.webpackChunk||[]).push([[5208],{47379:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var o=a(90675),n=a(10467),r=a(96540),l=a(69761),i=a(82285),s=a(11135);function p(e,t,a){return c.apply(this,arguments)}function c(){return(c=(0,n.A)((0,o.A)().mark((function e(t,a,n){var r,s,p,c,h;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=void 0,s=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return r="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return r="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return r="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return r="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return r="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return r="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==r){e.next=22;break}return e.abrupt("return");case 22:return p=new l.E(r),e.next=25,i.G.create({provider:p});case 25:c=e.sent,(h=a.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=h[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return s=c.toString(),e.abrupt("break",39);case 33:return e.next=35,c();case 35:return s=(s=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+h[0]+") in "+a);case 39:return e.abrupt("return",s);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,a,o){switch(t){case"humanReadable":(0,s.HumanReadable)(e,a,o);break;case"precise":(0,s.Precise)(e,a,o);break;case"blocksToDays":(0,s.BlocksToDays)(e,o);break;case"erasToDays":(0,s.ErasToDays)(e,o,a);break;case"percentage":(0,s.Percentage)(e,o);break;case"permillToPercent":(0,s.PermillToPercent)(e,o);break;case"arrayLength":(0,s.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,l=e.defaultValue,i=e.filter,s=void 0===i?void 0:i,c=(0,r.useState)(""),d=c[0],m=c[1];return t=t.toLowerCase(),(0,r.useEffect)((function(){void 0!==s?h(l.toString(),s,t,m):m(l.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var r=function(){var e=(0,n.A)((0,o.A)().mark((function e(){var n;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t,a,m);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==s?h(n,s,t,m):m(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{r()}catch(i){console.log(i)}}}),[]),d}},11135:e=>{var t="polkadot",a="kusama",o="statemine",n="statemint",r="polkadotpeople",l="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,s,p){var c=void 0;if(s===t||s===n||s==r)c=3;else{if(s!==a&&s!==o&&s!=l)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=6}e=parseFloat(e),p((e=Number.isInteger(e/i[s].precision)?e/i[s].precision+" "+i[s].symbol:(e/i[s].precision).toFixed(c)+" "+i[s].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,s){var p=void 0;if(s===t||s===n||s==r)p=1;else{if(s!==a&&s!==o&&s!=l)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=4}i((e/=p).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},67262:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var o=a(58168),n=a(98587),r=(a(96540),a(15680)),l=(a(47379),["components"]),i={id:"learn-polkadot-technical-fellowship",title:"Polkadot Technical Fellowship",sidebar_label:"Technical Fellowship",description:"Self-governing body of experts and developers of the Polkadot protocol.",keywords:["governance","referenda","proposal","voting","whitelist","fellowship","opengov","rank"],slug:"../learn-polkadot-technical-fellowship"},s=void 0,p={unversionedId:"learn/learn-polkadot-technical-fellowship",id:"learn/learn-polkadot-technical-fellowship",title:"Polkadot Technical Fellowship",description:"Self-governing body of experts and developers of the Polkadot protocol.",source:"@site/../docs/learn/learn-polkadot-technical-fellowship.md",sourceDirName:"learn",slug:"/learn-polkadot-technical-fellowship",permalink:"/docs/learn-polkadot-technical-fellowship",draft:!1,tags:[],version:"current",lastUpdatedBy:"Sebastian M\xfcller",lastUpdatedAt:1714654478,formattedLastUpdatedAt:"May 2, 2024",frontMatter:{id:"learn-polkadot-technical-fellowship",title:"Polkadot Technical Fellowship",sidebar_label:"Technical Fellowship",description:"Self-governing body of experts and developers of the Polkadot protocol.",keywords:["governance","referenda","proposal","voting","whitelist","fellowship","opengov","rank"],slug:"../learn-polkadot-technical-fellowship"}},c={},h=[{value:"Technical Fellowship Referenda",id:"technical-fellowship-referenda",level:2},{value:"Whitelisting",id:"whitelisting",level:3},{value:"Technical Fellowship Ranking and Salary",id:"technical-fellowship-ranking-and-salary",level:2},{value:"Membership Management",id:"membership-management",level:2},{value:"Becoming a Member",id:"becoming-a-member",level:3},{value:"Rank Updates",id:"rank-updates",level:3}],d={toc:h},m="wrapper";function g(e){var t=e.components,i=(0,n.A)(e,l);return(0,r.yg)(m,(0,o.A)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"The Technical Fellowship is a self-governing body of experts and developers of Polkadot and Kusama\nnetworks protocols. It operates on-chain through the Polkadot\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot-collectives-rpc.polkadot.io#/fellowship/referenda"},"Collectives"),"\nsystem chain and off-chain through the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows"},"Polkadot Fellows"),"\nrepository."),(0,r.yg)("admonition",{title:"Historical Context",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The Polkadot Technical Fellowship was established in 2022 and plays an important role in the\nPolkadot OpenGov. This fellowship replaced the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn/learn-governance#technical-committee"},"Technical Committee")," from Polkadot's first\niteration of governance, and will be serving both the Polkadot and Kusama networks. This Fellowship\nis designed to be far broader in membership (i.e. to work well with even tens of thousands of\nmembers) and with far lower barriers to entry both in terms of administrative process flow and\nlevels of expertise. For more information, read through the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/manifesto/blob/0c3df46d76625980b8b48742cb86f4d8fa6dda8d/manifesto.pdf"},"Fellowship Manifesto"),".")),(0,r.yg)("p",null,"Apart from the collectives system chain and the GitHub repository, the Polkadot Technical Fellowship\nalso uses multiple public avenues to discuss updates related to the Polkadot protocol. Their public\ndiscussions can be viewed on ",(0,r.yg)("a",{parentName:"p",href:"https://matrix.to/#/#fellowship-members:parity.io"},"this chatroom")," and\ntheir monthly meetings are posted to this OpenDev - Polkadot Fellowship Core Dev Call\n",(0,r.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=5P6Axm4JrmQ&list=PLtyd7v_I7PGlDJCCCLGLjJ0yv33JAEE_-"},"YouTube playlist.")),(0,r.yg)("h2",{id:"technical-fellowship-referenda"},"Technical Fellowship Referenda"),(0,r.yg)("p",null,"The fellowship's governance model has multiple tracks with their own approval and support\nparameters, where the votes are weighted by the rank of the member. Members of the Fellowship can\nvote on any given Fellowship proposal and the aggregated opinion of the members (weighted by their\nrank) constitutes the Fellowship's collective opinion. The list of current and historic fellowship\nreferenda can be viewed on ",(0,r.yg)("a",{parentName:"p",href:"https://collectives.polkassembly.io/"},"Polkassembly")," or\n",(0,r.yg)("a",{parentName:"p",href:"https://collectives.subsquare.io/"},"Subsquare.")," The fellowship governance is primarily used for its\nmembership management, ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs"},"approving RFCs")," and whitelisting\nPolkadot OpenGov proposals created on the whitelist track."),(0,r.yg)("h3",{id:"whitelisting"},"Whitelisting"),(0,r.yg)("p",null,'Polkadot OpenGov allows the Technical Fellowship to authorize an origin known as\n"Whitelisted-Caller" to execute with Root-level privileges for calls approved by the Fellowship\n(currently only level-three fellows and above can vote for whitelist calls). Note that the\nfellowship cannot unanimously change the network parameters, conduct rescues or move assets. The\nwhitelisted proposals still have to go through the whole life cycle of an OpenGov referendum and can\nonly be enacted when the referendum passes successfully.'),(0,r.yg)("p",null,"The whitelisting process starts as a fellowship referenda with embedded XCM call from the\ncollectives system chain to the Polkadot relay chain. For instance,\n",(0,r.yg)("a",{parentName:"p",href:"https://collectives.polkassembly.io/referenda/68"},"the Polkadot Fellowship referenda 68")," was used to\n",(0,r.yg)("strong",{parentName:"p"},"whitelist")," ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/referenda/440"},"the Polkadot OpenGov referenda 440"),"."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"whitelist-xcm",src:a(93796).A,width:"2880",height:"374"})),(0,r.yg)("admonition",{title:"Submitting Whitelisted Proposals",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"For more information about how to submit a whitelisted proposal see the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-guides-polkadot-opengov#submitting-a-referendum-on-the-whitelisted-caller-track"},"dedicated advanced how-to guides"),".")),(0,r.yg)("h2",{id:"technical-fellowship-ranking-and-salary"},"Technical Fellowship Ranking and Salary"),(0,r.yg)("p",null,"The Fellowship ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/manifesto"},"manifesto")," outlines the requirements\nand expectations for individuals to attain and retain any given rank, ranging between 0 to 9. By\ndefault, an active account on the collectives system chain has no assigned rank and can be inducted\ninto the Polkadot Technical Fellowship starting with rank 0. The Fellowship Manifesto states that\nmembers should receive a monthly allowance on par with gross income in OECD countries. A\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/RFCs/pull/50"},"fellowship RFC")," was proposed with concrete\namounts for each ranked members."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Dan"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Title"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Annual Salary"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"I"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Member"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$10,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"II"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Proficient"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$20,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"III"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Fellow"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$80,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"IV"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Architect"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$120,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"V"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Architect Adept"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$160,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"VI"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Grand Architect"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$200,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"VII"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Free Master"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$200,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"VIII"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Master Constant"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$200,000")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"IX"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Grand Master"),(0,r.yg)("td",{parentName:"tr",align:"center"},"$200,000")))),(0,r.yg)("h2",{id:"membership-management"},"Membership Management"),(0,r.yg)("p",null,"The Polkadot technical Fellowship was initially\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/polkadot-fellows/seeding"},"seeded")," with its members and their corresponding\nranks, and got ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/motion/403"},"added on to Polkadot's Collectives"),"\nsystem chain. All new membership requests will go through the fellowship governance and the\nprocedure is outlined in the section below."),(0,r.yg)("h3",{id:"becoming-a-member"},"Becoming a Member"),(0,r.yg)("p",null,"As a member of the Polkadot Technical Fellowship, you are expected to faithfully uphold the below\ntenets:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Sincerely uphold the interests of Polkadot and avoid actions which clearly work against it."),(0,r.yg)("li",{parentName:"ul"},"Respect the philosophy and principles of Polkadot."),(0,r.yg)("li",{parentName:"ul"},"Respect the operational procedures, norms and voting conventions of the Fellowship."),(0,r.yg)("li",{parentName:"ul"},"Respect fellow Members and the wider community.")),(0,r.yg)("admonition",{title:"Register your interest",type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"For new fellowship inductions, Polkassembly has created an interface (still in beta) to\n",(0,r.yg)("a",{parentName:"p",href:"https://collectives.polkassembly.io/join-fellowship?network=collectives"},"apply for the Polkadot Technical Fellowship."),"\nThis initiative is funded by Polkadot treasury through\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.polkassembly.io/treasury/574"},"OpenGov referendum 373"))),(0,r.yg)("p",null,"The full set of instructions to be inducted to the Polkadot Technical Fellowship are available on\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot-fellows.github.io/dashboard/#/membership"},"the fellowship dasboard"),"."),(0,r.yg)("h3",{id:"rank-updates"},"Rank Updates"),(0,r.yg)("p",null,"The Polkadot Technical Fellowship members are expected to provide a periodic evidence to request for\nretaining their rank or to get promoted to a higher rank. Any fellowship member upto rank 4 can be\npromoted to the next rank through a fellowship referenda that can be voted by the members who are 2\nranks higher. For instance, the fellowship\n",(0,r.yg)("a",{parentName:"p",href:"https://collectives.subsquare.io/fellowship/referenda/64"},"referenda 64")," which promotes a member\nfrom rank 1 to rank 2 can only be voted by members whose ranks are greater than or equal to 3.\nPromotion of the Polkadot Fellowship members from rank 5 needs to be done through an OpenGov\nreferendum. For more information, check the rank updates section on\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot-fellows.github.io/dashboard/#/membership"},"the fellowship dashboard"),"."))}g.isMDXComponent=!0},93796:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});const o=a.p+"assets/images/fellowship-whitelist-xcm-02a3e8aa5ac0c678b739738f383a6e57.png"},47790:()=>{}}]);