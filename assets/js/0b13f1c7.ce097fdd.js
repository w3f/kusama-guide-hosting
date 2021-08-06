(self.webpackChunk=self.webpackChunk||[]).push([[8302],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=d(a),h=o,c=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?n.createElement(c,i(i({ref:t},m),{},{components:a})):n.createElement(c,i({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58962:(e,t,a)=>{"use strict";a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>m,default:()=>p});var n=a(22122),o=a(19756),r=(a(67294),a(3905)),i=["components"],l={id:"thousand-validators",title:"Thousand Validators Programme",sidebar_label:"Thousand Validators Programme"},s=void 0,d={unversionedId:"thousand-validators",id:"thousand-validators",isDocsHomePage:!1,title:"Thousand Validators Programme",description:"The Thousand Validators Programme is an initiative by Web3 Foundation and Parity Technologies to use",source:"@site/../docs/thousand-validators.md",sourceDirName:".",slug:"/thousand-validators",permalink:"/docs/thousand-validators",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/thousand-validators.md",version:"current",lastUpdatedBy:"Danny Salman",lastUpdatedAt:1628272438,formattedLastUpdatedAt:"8/6/2021",frontMatter:{id:"thousand-validators",title:"Thousand Validators Programme",sidebar_label:"Thousand Validators Programme"}},m=[{value:"How it Works",id:"how-it-works",children:[]},{value:"Setting up a Validator",id:"setting-up-a-validator",children:[]},{value:"How to Apply",id:"how-to-apply",children:[{value:"Kusama",id:"kusama",children:[]},{value:"Polkadot",id:"polkadot",children:[]}]}],u={toc:m};function p(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Thousand Validators Programme is an initiative by Web3 Foundation and Parity Technologies to use\nthe funds held by both organizations to nominate validators in the community."),(0,r.kt)("p",null,"It serves two major purposes: 1) to give validators a structured on-ramp to join the active set of\nvalidators on Kusama and Polkadot and 2) to further decentralize the validator active set."),(0,r.kt)("h2",{id:"how-it-works"},"How it Works"),(0,r.kt)("p",null,"The nominating backend will routinely change its nominations at every era (or every 4 eras on\nKusama). It will nominate validators which fit all the requirements and are eligible. Of this pool,\nit will nominate as many as possible although some validators which are eligible might not receive\nnominations every round (due to the constraint of nominating a maximum of 16 validators per\nnominator). If a validator is active during a single nomination period (the time after a new\nnomination and before the next one) and does not break any of the requirements, it will have its\nrank increased by 1. Validators with higher rank have performed well within the programme for a\nlonger period of time."),(0,r.kt)("h2",{id:"setting-up-a-validator"},"Setting up a Validator"),(0,r.kt)("p",null,"Please see the wiki page for ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-how-to-validate-polkadot"},"setting up a validator"),"\nas well as additional information on ",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"validator secure"),"."),(0,r.kt)("h2",{id:"how-to-apply"},"How to Apply"),(0,r.kt)("h3",{id:"kusama"},"Kusama"),(0,r.kt)("p",null,"In order to apply to the Kusama programme, set up your node to adhere to the requirements below and\nfill in the ",(0,r.kt)("a",{parentName:"p",href:"https://forms.gle/xqYLoceTwg1qvc9i6"},"application form"),". You will hear back from the team shortly."),(0,r.kt)("h4",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verified identity (see ",(0,r.kt)("a",{parentName:"li",href:"https://guide.kusama.network/docs/mirror-learn-identity#setting-an-identity"},"here")," for instructions)"),(0,r.kt)("li",{parentName:"ul"},"Connect to dedicated telemetry (use\n",(0,r.kt)("inlineCode",{parentName:"li"},"--telemetry-url 'wss://telemetry-backend.w3f.community/submit 1'")," when starting the node)"),(0,r.kt)("li",{parentName:"ul"},"Minimum of 50 KSM self-stake"),(0,r.kt)("li",{parentName:"ul"},"No more than 10% commission"),(0,r.kt)("li",{parentName:"ul"},"Separate controller and stash (or have a Staking proxy set up)"),(0,r.kt)("li",{parentName:"ul"},"Must be on the latest release"),(0,r.kt)("li",{parentName:"ul"},"Max two nodes (under same sub/super identity)")),(0,r.kt)("h4",{id:"leaderboard"},"Leaderboard"),(0,r.kt)("p",null,"The leaderboard is available at ",(0,r.kt)("a",{parentName:"p",href:"https://thousand-validators.kusama.network/#/leaderboard"},"https://thousand-validators.kusama.network/#/leaderboard"),"."),(0,r.kt)("h4",{id:"nominators"},"Nominators"),(0,r.kt)("p",null,'The below addresses are the stash / controller pairs for the nominators involved in the Kusama\nThousand Validators programme. They are formatted like "',(0,r.kt)("inlineCode",{parentName:"p"},"stash")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"controller"),'".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"G1rrUNQSk7CjjEmLSGcpNu72tVtyzbWdUvgmSer9eBitXWf")," /\n",(0,r.kt)("inlineCode",{parentName:"li"},"H9BFvNPTqDEmWZ63M82ohrFmvEFASm25ErUMzmXDrbAr1kq")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HgTtJusFEn2gmMmB5wmJDnMRXKD6dzqCpNR7a99kkQ7BNvX")," /\n",(0,r.kt)("inlineCode",{parentName:"li"},"H4UgNEEN92YXz96AyQgwkJQSpXGdptYLkj9jXVKrNXjQHRJ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EX9uchmfeSqKTM7cMMg8DkH49XV8i4R7a7rqCn8btpZBHDP")," /\n",(0,r.kt)("inlineCode",{parentName:"li"},"H54GA3nq3xeNrdbHkepAufSPMjaCxxkmfej4PosqD84bY3V"))),(0,r.kt)("p",null,"A time delay proxy is used as the interaction method for some of these accounts."),(0,r.kt)("p",null,"Since approximately early January 2021, the nominators will select an automatic number of validators\nto nominate based on the lowest amount staked for a validator and the amount of funds it holds. This\ncan be anywhere from a few validators receiving nomination from a single nominator to the max of 16."),(0,r.kt)("h3",{id:"polkadot"},"Polkadot"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Entrance to the Polkadot programme requires a rank of 25 or higher in the Kusama programme.\nThis usually takes about a month.")),(0,r.kt)("p",null,"In order to apply to the Polkadot programme, set up your node to adhere to the requirements below\nand fill in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/forms/d/e/1FAIpQLSdS-alI-J2wgIRCQVjQC7ZbFiTnf36hYBdmO-1ARMjKbC7H9w/viewform"},"application form"),". You will hear back from the team shortly."),(0,r.kt)("h4",{id:"requirements-1"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verified identity (see ",(0,r.kt)("a",{parentName:"li",href:"https://guide.kusama.network/docs/mirror-learn-identity#setting-an-identity"},"here")," for instructions)"),(0,r.kt)("li",{parentName:"ul"},"Connect to dedicated Telemetry (use\n",(0,r.kt)("inlineCode",{parentName:"li"},"--telemetry-url 'wss://telemetry-backend.w3f.community/submit 1'")," when starting the node)"),(0,r.kt)("li",{parentName:"ul"},"Rank 25 or higher on Kusama Thousand Validators Programme"),(0,r.kt)("li",{parentName:"ul"},"Minimum of 5_000 DOTs self stake (exceptions by approval for good intentions)"),(0,r.kt)("li",{parentName:"ul"},"Reward destination 'Staked'"),(0,r.kt)("li",{parentName:"ul"},"No more than 3% commission"),(0,r.kt)("li",{parentName:"ul"},"Separate stash and controller (or have a Staking proxy set up)"),(0,r.kt)("li",{parentName:"ul"},"Must be on the latest release")),(0,r.kt)("h4",{id:"nominators-1"},"Nominators"),(0,r.kt)("p",null,'The below addresses are the stash / controller pairs for the nominators involved in the Polkadot\nThousand Validators programme. They are formatted like "',(0,r.kt)("inlineCode",{parentName:"p"},"stash")," / ",(0,r.kt)("inlineCode",{parentName:"p"},"controller"),'".'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ")," /\n",(0,r.kt)("inlineCode",{parentName:"li"},"16XJHQ58dEPnZn5J5YqmRcJmKtvVFFMoMrXgj6fWJfeGGkQw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y")," /\n",(0,r.kt)("inlineCode",{parentName:"li"},"13GLXK1TZKKDM9aRBBK3VYZymHjKChtQjJznsRqaR9dwwrQU")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B")," /\n",(0,r.kt)("inlineCode",{parentName:"li"},"16eM1npMwKzpGy48NDna1jC6P71S783wjpbdeKT8RgzQx8Jd"))),(0,r.kt)("p",null,"A time delay proxy is used as the main interaction method for all of these accounts."),(0,r.kt)("p",null,"Since approximately early January 2021, the nominators will select an automatic number of validators\nto nominate based on the lowest amount staked for a validator and the amount of funds it holds. This\ncan be anywhere from a few validators receiving nominations from a single nominator to the max\nof 16."))}p.isMDXComponent=!0}}]);