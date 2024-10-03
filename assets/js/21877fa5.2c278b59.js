(self.webpackChunk=self.webpackChunk||[]).push([[6466],{98285:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=a(74848),r=a(28453),s=(a(47379),a(11470)),o=a(19365);const i={id:"learn-system-chains",title:"System Parachains",sidebar_label:"System Parachains",description:"System Parachains currently deployed on Polkadot.",keywords:["common good","system","parachains","system level","public utility"],slug:"../learn-system-chains"},l=void 0,c={id:"learn/learn-system-chains",title:"System Parachains",description:"System Parachains currently deployed on Polkadot.",source:"@site/../docs/learn/learn-system-chains.md",sourceDirName:"learn",slug:"/learn-system-chains",permalink:"/docs/learn-system-chains",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1727943421e3,frontMatter:{id:"learn-system-chains",title:"System Parachains",sidebar_label:"System Parachains",description:"System Parachains currently deployed on Polkadot.",keywords:["common good","system","parachains","system level","public utility"],slug:"../learn-system-chains"},sidebar:"docs",previous:{title:"Protocol Overview",permalink:"/docs/learn-parachains-protocol"},next:{title:"Parachains FAQ",permalink:"/docs/learn-parachains-faq"}},u={},h=[{value:"Overview",id:"overview",level:2},{value:"Existing System Chains",id:"existing-system-chains",level:2},{value:"Asset Hub",id:"asset-hub",level:3},{value:"Collectives",id:"collectives",level:3},{value:"Bridge Hub",id:"bridge-hub",level:3},{value:"People Chain",id:"people-chain",level:3},{value:"Coretime Chain",id:"coretime-chain",level:3},{value:"Encointer",id:"encointer",level:3}];function d(e){const t={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The primary functionality of the Relay chain is to secure the parachains and facilitate secure\ncommunication between them. All other functionalities like asset transfers, governance, identities\nand bridging (a potentially resource intensive task) can benefit from operating separately on system\nchains. System chains are responsible for delegating functionality away from the relay chain for\npeformance reasons, taking advantage of the inherent parallelization the architecture of Polkadot\nprovides."}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsxs)(t.p,{children:["System parachains are those that contain core Polkadot protocol features, but in parachains rather\nthan the relay chain. Rather than purchasing coretime on a marketplace, execution cores for system chains are allocated\nthrough the network ",(0,n.jsx)(t.a,{href:"/docs/learn-guides-polkadot-opengov",children:"governance"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["By hosting core protocol logic in parachains instead of the relay chain, Polkadot uses its own\nscaling technology -- namely, parallel execution -- to host ",(0,n.jsx)(t.em,{children:"itself"}),". System parachains remove\ntransactions from the relay chain, allowing more relay chain\n",(0,n.jsx)(t.a,{href:"https://www.rob.tech/polkadot-blockspace-over-blockchains/",children:"blockspace"})," to be used for Polkadot's\nprimary purpose: validating parachains."]}),"\n",(0,n.jsx)(t.p,{children:"System parachains always defer to on-chain governance to manage their upgrades and other sensitive\nactions. That is, they do not have their own native tokens or governance systems separate from DOT\nKSM. In fact, there will likely be a system parachain specifically for network governance."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:['In the past, these were often called "Common Good Parachains", so you may come across articles and\ndiscussions using that term. As the network has evolved, that term has been confusing in many cases,\nso "System Parachains" is preferred now. A discussion on this evolution can be found in\n',(0,n.jsx)(t.a,{href:"https://forum.polkadot.network/t/polkadot-protocol-and-common-good-parachains/866",children:"this forum thread"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"existing-system-chains",children:"Existing System Chains"}),"\n",(0,n.jsxs)(s.A,{groupId:"clients",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],children:[(0,n.jsxs)(o.A,{value:"polkadot",children:[(0,n.jsx)(t.h3,{id:"asset-hub",children:"Asset Hub"}),(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus#asset-hub-",children:"Asset Hub"})," on both\nPolkadot and Kusama are the first system parachains."]}),(0,n.jsx)(t.p,{children:"The Asset Hub is an asset portal for the entire network. It helps asset creators (e.g. reserve\nbacked stablecoin issuers) to track the total issuance of their asset in the network, including\namounts that have been transferred to other parachains. It is also the point where they can\ntransact, to mint and burn, to manage the on-chain asset."}),(0,n.jsxs)(t.p,{children:["The Asset Hub also supports non-fungible assets (NFTs) via the\n",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/docs/substrate/extrinsics#uniques",children:"Uniques pallet"})," and the new\n",(0,n.jsx)(t.a,{href:"https://polkadot.js.org/docs/substrate/extrinsics#nfts",children:"nfts pallet"}),". For more information about\nNFTs see the ",(0,n.jsx)(t.a,{href:"/docs/learn-nft-pallets",children:"dedicated wiki page"}),"."]}),(0,n.jsx)(t.p,{children:"This logic for asset management is not encoded in smart contracts, but rather directly in the\nruntime of the chain. Because of the efficiency of executing logic in a parachain, fees and deposits\nare about 1/10th of their respective value on the relay chain."}),(0,n.jsx)(t.p,{children:"These low fee levels mean that the Asset Hub is well suited for handling balances and transfers as\nwell as managing on-chain assets."}),(0,n.jsx)(t.h3,{id:"collectives",children:"Collectives"}),(0,n.jsxs)(t.p,{children:["The Polkadot Collectives parachain was added in\n",(0,n.jsx)(t.a,{href:"https://polkadot.polkassembly.io/referendum/81",children:"Referendum 81"})," and exists only on Polkadot (i.e.,\nthere is no Kusama equivalent). The Collectives chain hosts on-chain collectives that serve the\nPolkadot network."]}),(0,n.jsxs)(t.p,{children:["Some of these collectives are the\n",(0,n.jsx)(t.a,{href:"https://polkadot.polkassembly.io/referendum/94",children:"Polkadot Alliance"})," and the Polkadot Technical\n",(0,n.jsx)(t.a,{href:"/docs/learn-polkadot-technical-fellowship",children:"Fellowship"}),". These on-chain collectives will play\nimportant roles in the future of network stewardship and decentralized governance."]}),(0,n.jsxs)(t.p,{children:["Networks themselves can act as collectives and express their legislative voices as single opinions\nwithin other networks. This is achieved with the assistance from a ",(0,n.jsx)(t.a,{href:"#bridge-hub",children:"bridge hub"}),"."]}),(0,n.jsx)(t.h3,{id:"bridge-hub",children:"Bridge Hub"}),(0,n.jsx)(t.p,{children:"Before Polkadot and Kusama supported their first parachains, the only way to design a bridge was to\nput the logic onto the relay chain itself. Since both networks now support parachains, it makes\nsense to have a parachain on each network dedicated to bridges. This is because of the execution\nisolation provided by parachains."}),(0,n.jsxs)(t.p,{children:["The Bridge Hub system parachain operates on the relay chain, and is responsible for faciliating\nbridges to the wider Web3 space. It contains the required bridge\n",(0,n.jsx)(t.a,{href:"/docs/glossary#pallet",children:"pallets"})," in its runtime, which enable trustless bridging with other\nblockchain networks like Polkadot, Kusama and Ethereum. The Bridge Hub uses the native token of the\nrelay chain."]}),(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"/docs/learn-bridges",children:"Bridges page"})," for information on the latest bridge projects."]}),(0,n.jsx)(t.h3,{id:"people-chain",children:"People Chain"}),(0,n.jsxs)(t.p,{children:["The People Chain allows users to mange their account ",(0,n.jsx)(t.a,{href:"/docs/learn-identity",children:"identity"}),"."]}),(0,n.jsx)(t.h3,{id:"coretime-chain",children:"Coretime Chain"}),(0,n.jsxs)(t.p,{children:["The Coretime system chain allows users to buy coretime to access Polkadot's computation.\n",(0,n.jsx)(t.a,{href:"/docs/learn-guides-coretime-marketplaces",children:"Coretime marketplaces"})," run on top of the Coretime chain.\nFor more information about agile coretime, see ",(0,n.jsx)(t.a,{href:"/docs/learn-agile-coretime",children:"here"}),"."]})]}),(0,n.jsxs)(o.A,{value:"kusama",children:[(0,n.jsxs)(t.p,{children:["Compared to Polkadot, Kusama does not have the Collectives system chain, and it has the\n",(0,n.jsx)(t.a,{href:"https://encointer.org/encointer-for-web3/",children:"Encointer"})," system chain."]}),(0,n.jsx)(t.h3,{id:"encointer",children:"Encointer"}),(0,n.jsxs)(t.p,{children:["Encointer is a blockchain platform for self-sovereign ID and a global universal basic income. With\n",(0,n.jsx)(t.a,{href:"https://kusama.polkassembly.io/referendum/158",children:"referendum 158"})," Encointer was registered as the\nsecond system parachain on Kusama's network. The functionality of Encointer adds logic to the Relay\nChain that aims to bring financial inclusivity to Web3 and mitigate Sybil attacks with a novel Proof\nof Personhood (PoP) system for unique identity."]}),(0,n.jsxs)(t.p,{children:["Encointer offers a framework that, in principle, allows for any group of real people to create,\ndistribute, and use their own digital community tokens.\n",(0,n.jsx)(t.a,{href:"https://kusama.polkassembly.io/referendum/187",children:"Referendum 187"})," introduced a runtime upgrade\nbringing governance and full functionality for communities to be able to use the protocol."]}),(0,n.jsxs)(t.p,{children:["Encointer aims to invert the\n",(0,n.jsx)(t.a,{href:"https://www.newworldencyclopedia.org/entry/Richard_Cantillon",children:"Cantillon Effect"}),", where money is\nissued at the bottom, and not as credit to businesses or creditworthy individuals. This way, every\nindividual gets a ",(0,n.jsx)(t.a,{href:"https://book.encointer.org/economics-ubi.html",children:"universal basic income (UBI)"}),"."]}),(0,n.jsxs)(t.p,{children:["To resist Sybil attacks, the Encointer protocol uses a PoP mechanism to foster a unique identity\nsystem. The notion is that a person can only be present at one place at a given time. Participants\nare requested to attend physical key-signing ceremonies with small groups of random people at\nrandomized locations, where these local meetings are part of one global ceremony that co-occur.\nParticipants use the Encointer wallet app to participate in these ceremonies, and the wallet enables\nthe management of local community currencies. Watch an Encointer ceremony in action in\n",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=tcgpCCYBqko",children:"this video"}),"."]}),(0,n.jsxs)(t.p,{children:["The protocol involves ",(0,n.jsx)(t.a,{href:"https://book.encointer.org/ssi.html#privacy-considerations",children:"other mechanisms"}),"\nto protect the privacy of users in addition to the physical key-signing ceremonies."]}),(0,n.jsx)(t.p,{children:"Encointer was accepted as a system chain based on its offer of a Sybil defense mechanism as a basis\nfor digital democracy. This can also be adapted by other chains, which can use the unique identity\nsystem to prevent Sybil attacks and use PoP for token airdrops or faucets."}),(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["To learn more about Encointer, check out the official\n",(0,n.jsx)(t.a,{href:"https://book.encointer.org/introduction.html",children:"Encointer book"}),"."]})})]})]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},47379:(e,t,a)=>{"use strict";a.d(t,{A:()=>d});var n=a(90675),r=a(10467),s=a(96540),o=a(69761),i=a(84393),l=a(11135);function c(e,t,a){return u.apply(this,arguments)}function u(){return(u=(0,r.A)((0,n.A)().mark((function e(t,a,r){var s,l,c,u,h;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return s="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return s="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return s="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return s="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return s="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return s="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==s){e.next=22;break}return e.abrupt("return");case 22:return c=new o.E(s),e.next=25,i.G.create({provider:c});case 25:u=e.sent,(h=a.split(".")).forEach((function(e){e in u&&(u=u[e])})),e.t1=h[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=u.toString(),e.abrupt("break",39);case 33:return e.next=35,u();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+h[0]+") in "+a);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t,a,n){switch(t){case"humanReadable":(0,l.HumanReadable)(e,a,n);break;case"precise":(0,l.Precise)(e,a,n);break;case"blocksToDays":(0,l.BlocksToDays)(e,n);break;case"erasToDays":(0,l.ErasToDays)(e,n,a);break;case"percentage":(0,l.Percentage)(e,n);break;case"permillToPercent":(0,l.PermillToPercent)(e,n);break;case"arrayLength":(0,l.ArrayLength)(e,n);break;default:return void console.log("Ignoring unknown filter type")}}const d=function(e){var t=e.network,a=e.path,o=e.defaultValue,i=e.filter,l=void 0===i?void 0:i,u=(0,s.useState)(""),d=u[0],p=u[1];return t=t.toLowerCase(),(0,s.useEffect)((function(){void 0!==l?h(o.toString(),l,t,p):p(o.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var s=function(){var e=(0,r.A)((0,n.A)().mark((function e(){var r;return(0,n.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t,a,p);case 2:if(void 0!==(r=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(r,l,t,p):p(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{s()}catch(i){console.log(i)}}}),[]),d}},11135:e=>{var t="polkadot",a="kusama",n="statemine",r="statemint",s="polkadotpeople",o="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,c){var u=void 0;if(l===t||l===r)u=3;else if(l===a||l===n||l===s)u=6;else{if(l!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=8}e=parseFloat(e),c((e=Number.isInteger(e/i[l].precision)?e/i[l].precision+" "+i[l].symbol:(e/i[l].precision).toFixed(u)+" "+i[l].symbol).toString())},Precise:function(e,t,a){a(e=(e=parseFloat(e))/i[t].precision+" "+i[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,i,l){var c=void 0;if(l===t||l===r||l==s)c=1;else{if(l!==a&&l!==n&&l!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");c=4}i((e/=c).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},19365:(e,t,a)=>{"use strict";a.d(t,{A:()=>o});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var s=a(74848);function o(e){var t=e.children,a=e.hidden,o=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,o),hidden:a,children:t})}},11470:(e,t,a)=>{"use strict";a.d(t,{A:()=>x});var n=a(96540),r=a(34164),s=a(23104),o=a(56347),i=a(205),l=a(57485),c=a(31682),u=a(42349);function h(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function d(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,c.XI)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,s=(0,o.W6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,l.aZ)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function f(e){var t,a,r,s,o=e.defaultValue,l=e.queryString,c=void 0!==l&&l,h=e.groupId,f=d(e),b=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:f})})),v=b[0],y=b[1],k=m({queryString:c,groupId:h}),g=k[0],w=k[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),a=(0,u.Dv)(t),r=a[0],s=a[1],[r,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),j=x[0],P=x[1],T=function(){var e=null!=g?g:j;return p({value:e,tabValues:f})?e:null}();return(0,i.A)((function(){T&&y(T)}),[T]),{selectedValue:v,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);y(e),w(e),P(e)}),[w,P,f]),tabValues:f}}var b=a(92303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(74848);function k(e){var t=e.className,a=e.block,n=e.selectedValue,o=e.selectValue,i=e.tabValues,l=[],c=(0,s.a_)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,a=l.indexOf(t),r=i[a].value;r!==n&&(c(t),o(r))},h=function(e){var t,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,r=l.indexOf(e.currentTarget)+1;a=null!=(n=l[r])?n:l[0];break;case"ArrowLeft":var s,o=l.indexOf(e.currentTarget)-1;a=null!=(s=l[o])?s:l[l.length-1]}null==(t=a)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:i.map((function(e){var t=e.value,a=e.label,s=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return l.push(e)},onKeyDown:h,onClick:u},s,{className:(0,r.A)("tabs__item",v.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function g(e){var t=e.lazy,a=e.children,s=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===s}));return i?(0,n.cloneElement)(i,{className:(0,r.A)("margin-top--md",i.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function w(e){var t=f(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,y.jsx)(k,Object.assign({},t,e)),(0,y.jsx)(g,Object.assign({},t,e))]})}function x(e){var t=(0,b.A)();return(0,y.jsx)(w,Object.assign({},e,{children:h(e.children)}),String(t))}},47790:()=>{}}]);