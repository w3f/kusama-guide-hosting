(self.webpackChunk=self.webpackChunk||[]).push([[1949],{47379:(e,a,t)=>{"use strict";t.d(a,{A:()=>c});var o=t(90675),n=t(10467),s=t(96540),r=t(69761),i=t(82285),l=t(11135);function p(e,a,t){return u.apply(this,arguments)}function u(){return(u=(0,n.A)((0,o.A)().mark((function e(a,t,n){var s,l,p,u,d;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return s="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return s="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==s){e.next=22;break}return e.abrupt("return");case 22:return p=new r.E(s),e.next=25,i.G.create({provider:p});case 25:u=e.sent,(d=t.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=d[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=u.toString(),e.abrupt("break",39);case 33:return e.next=35,u();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+d[0]+") in "+t);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,a,t,o){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,o);break;case"precise":(0,l.Precise)(e,t,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"erasToDays":(0,l.ErasToDays)(e,o,t);break;case"percentage":(0,l.Percentage)(e,o);break;case"permillToPercent":(0,l.PermillToPercent)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const c=function(e){var a=e.network,t=e.path,r=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,s.useState)(""),c=u[0],m=u[1];return a=a.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?d(r.toString(),l,a,m):m(r.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,n.A)((0,o.A)().mark((function e(){var n;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(a,t,m);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(n,l,a,m):m(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),c}},11135:e=>{var a="polkadot",t="kusama",o="statemine",n="statemint",s="polkadotpeople",r="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};e.exports={HumanReadable:function(e,l,p){var u=void 0;if(l===a||l===n||l==s)u=3;else{if(l!==t&&l!==o&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=6}e=parseFloat(e),p((e=Number.isInteger(e/i[l].precision)?e/i[l].precision+" "+i[l].symbol:(e/i[l].precision).toFixed(u)+" "+i[l].symbol).toString())},Precise:function(e,a,t){t(e=(e=parseFloat(e))/i[a].precision+" "+i[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,i,l){var p=void 0;if(l===a||l===n||l==s)p=1;else{if(l!==t&&l!==o&&l!=r)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=4}i((e/=p).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},52117:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var o=t(58168),n=t(98587),s=(t(96540),t(15680)),r=(t(47379),["components"]),i={id:"learn-comparisons-kusama",title:"Polkadot vs. Kusama",sidebar_label:"Kusama",description:"Comparing the cousins.",keywords:["polkadot","kusama","polkadot vs kusama","canary"],slug:"../learn-comparisons-kusama"},l=void 0,p={unversionedId:"learn/learn-comparisons-kusama",id:"learn/learn-comparisons-kusama",title:"Polkadot vs. Kusama",description:"Comparing the cousins.",source:"@site/../docs/learn/learn-comparisons-kusama.md",sourceDirName:"learn",slug:"/learn-comparisons-kusama",permalink:"/docs/learn-comparisons-kusama",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725286484,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"learn-comparisons-kusama",title:"Polkadot vs. Kusama",sidebar_label:"Kusama",description:"Comparing the cousins.",keywords:["polkadot","kusama","polkadot vs kusama","canary"],slug:"../learn-comparisons-kusama"}},u={},d=[{value:"Cost and Speed",id:"cost-and-speed",level:2},{value:"Canary network",id:"canary-network",level:2},{value:"Going forward",id:"going-forward",level:2},{value:"Explore more",id:"explore-more",level:2}],c={toc:d},m="wrapper";function k(e){var a=e.components,t=(0,n.A)(e,r);return(0,s.yg)(m,(0,o.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.yg)("p",null,"Although they are like cousins and share many parts of their code, Polkadot and Kusama are\nindependent, standalone networks with different priorities. Kusama is wild and fast, and great for\nbold experimentation and early-stage deployment. Polkadot is more conservative, prioritizing\nstability and dependability. Cousins have their differences after all."),(0,s.yg)("admonition",{type:"info"},(0,s.yg)("p",{parentName:"admonition"},"To get a better understanding of the key similarities and difference between Polkadot and Kusama,\ncheckout\n",(0,s.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182146-kusama-and-polkadot-what-s-the-difference-"},"this support article"),".")),(0,s.yg)("h2",{id:"cost-and-speed"},"Cost and Speed"),(0,s.yg)("p",null,"Teams wishing to run a parachain are required to bond tokens as security. The bonding requirement on\nKusama is lower than on Polkadot, making it the more affordable development environment."),(0,s.yg)("p",null,"Another key technical difference between Polkadot and Kusama is that Kusama has modified governance\nparameters that allow for faster upgrades. Kusama is up to four times faster than Polkadot. This\ndoes not mean that the Kusama blockchain itself is faster, in the sense of faster block times or\ntransaction throughput (these are the same on both networks), but that there's a shorter amount of\ntime between governance events such as proposing new referenda, voting, and enacting approved\nupgrades. This allows Kusama to adapt and evolve faster than Polkadot."),(0,s.yg)("h2",{id:"canary-network"},"Canary network"),(0,s.yg)("p",null,"The initial use case for Kusama was as a pre-production environment, a \u201ccanary network\u201d."),(0,s.yg)("p",null,"Canary is a type of bird: back in the day, coal miners would put canaries into coal mines as a way\nto measure the amount of toxic gases in the tunnels. Similarly, canary testing is a way to validate\nsoftware by releasing software to a limited number of users, or perhaps, an isolated environment -\nwithout hurting a wide range of users."),(0,s.yg)("p",null,"Releases made onto Kusama can be thought of as\n",(0,s.yg)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CanaryRelease.html"},"Canary Releases"),". These releases are usually\nstaged. In Kusama's early days, the network won't just be used for parachain candidates to innovate\nand test changes, but a proof of concept for Polkadot's sharded model."),(0,s.yg)("p",null,'Kusama is not simply a testnet, the blockchain is fully functional with attached economic value, and\nown governance. The future of Kusama is in the hands of its participants. In a typical blockchain\ndevelopment pipeline, Kusama would sit in between a "testnet" and a "mainnet":'),(0,s.yg)("admonition",{title:"Testnet --\x3e Kusama --\x3e Polkadot",type:"info"}),(0,s.yg)("p",null,"As you can imagine, building on Kusama first allows teams to test things out in a live, fully\ndecentralized, and community-controlled network with real-world conditions and lower stakes in the\nevent of problems or bugs than on Polkadot."),(0,s.yg)("p",null,"Many projects will maintain parachains on both networks, experimenting and testing new technologies\nand features on Kusama before deploying them to Polkadot. Some teams will decide just to stay on\nKusama, which is likely to be a place where we see some exciting experimentation with new\ntechnologies going forward. Projects that require high-throughput but don\u2019t necessarily require\nbank-like security, such as some gaming, social networking, and content distribution applications,\nare particularly good candidates for this use case."),(0,s.yg)("p",null,"Kusama may also prove to be the perfect environment for ambitious experiments with new ideas and\ninnovations in areas like governance, incentives, monetary policy, and DAOs (decentralized\nautonomous organizations). Future upgrades to the Polkadot runtime will also likely be deployed to\nKusama before Polkadot mainnet. This way, not only will we be able to see how these new technologies\nand features will perform under real-world conditions before bringing them to Polkadot, but teams\nwho have deployed to both networks will also get an advanced look at how their own technology will\nperform under those upgrades."),(0,s.yg)("h2",{id:"going-forward"},"Going forward"),(0,s.yg)("p",null,"Ultimately, Kusama and Polkadot will live on as independent, standalone networks with their own\ncommunities, their own governance, and their own complementary use cases, though they will continue\nto maintain a close relationship, with many teams likely deploying applications to both networks. In\nthe future, we\u2019re also likely to see Kusama bridged to Polkadot for cross-network interoperability.\nWeb3 Foundation remains committed to both networks going forward, providing crucial support and\nguidance to teams building for the ecosystem."),(0,s.yg)("h2",{id:"explore-more"},"Explore more"),(0,s.yg)("ul",null,(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://kusama.network"},"About Kusama")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://guide.kusama.network"},"The Kusama Wiki")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://kusama.dotapps.io"},"Kusama on Polkadot-JS Apps")),(0,s.yg)("li",{parentName:"ul"},(0,s.yg)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182146-kusama-and-polkadot-what-s-the-difference-"},"Polkadot and Kusama: What's the difference?"))))}k.isMDXComponent=!0},47790:()=>{}}]);