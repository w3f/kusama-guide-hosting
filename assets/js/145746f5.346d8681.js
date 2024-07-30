(self.webpackChunk=self.webpackChunk||[]).push([[691],{47940:(t,e,a)=>{"use strict";a.d(e,{Z:()=>m});var n=a(74165),r=a(15861),l=a(67294),o=a(87152),i=a(18509),s=a(67425);function u(t,e,a){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)((0,n.Z)().mark((function t(e,a,r){var l,s,u,d,p;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:l=void 0,s=void 0,t.t0=e,t.next="polkadot"===t.t0?5:"kusama"===t.t0?7:"statemine"===t.t0?9:"statemint"===t.t0?11:"polkadotpeople"===t.t0?13:"kusamapeople"===t.t0?15:17;break;case 5:return l="wss://rpc.polkadot.io",t.abrupt("break",18);case 7:return l="wss://kusama-rpc.polkadot.io/",t.abrupt("break",18);case 9:return l="wss://statemine-rpc.polkadot.io/",t.abrupt("break",18);case 11:return l="wss://statemint-rpc.polkadot.io/",t.abrupt("break",18);case 13:return l="wss://polkadot-people-rpc.polkadot.io/",t.abrupt("break",18);case 15:return l="wss://kusama-people-rpc.polkadot.io/",t.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==l){t.next=22;break}return t.abrupt("return");case 22:return u=new o.U(l),t.next=25,i.G.create({provider:u});case 25:d=t.sent,(p=a.split(".")).forEach((function(t){t in d&&(d=d[t])})),t.t1=p[0],t.next="consts"===t.t1?31:"query"===t.t1?33:38;break;case 31:return s=d.toString(),t.abrupt("break",39);case 33:return t.next=35,d();case 35:return s=(s=t.sent).toString(),t.abrupt("break",39);case 38:console.log("Unknown path prefix ("+p[0]+") in "+a);case 39:return t.abrupt("return",s);case 40:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t,e,a,n){switch(e){case"humanReadable":(0,s.HumanReadable)(t,a,n);break;case"precise":(0,s.Precise)(t,a,n);break;case"blocksToDays":(0,s.BlocksToDays)(t,n);break;case"erasToDays":(0,s.ErasToDays)(t,n,a);break;case"percentage":(0,s.Percentage)(t,n);break;case"permillToPercent":(0,s.PermillToPercent)(t,n);break;case"arrayLength":(0,s.ArrayLength)(t,n);break;default:return void console.log("Ignoring unknown filter type")}}const m=function(t){var e=t.network,a=t.path,o=t.defaultValue,i=t.filter,s=void 0===i?void 0:i,d=(0,l.useState)(""),m=d[0],k=d[1];return e=e.toLowerCase(),(0,l.useEffect)((function(){void 0!==s?p(o.toString(),s,e,k):k(o.toString());var t=void 0;switch(e){case"polkadot":t="wss://rpc.polkadot.io";break;case"kusama":t="wss://kusama-rpc.polkadot.io/";break;case"statemine":t="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":t="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":t="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":t="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+e)}if(void 0===t)console.log("Failed to connect to a valid websocket, applying default");else{var l=function(){var t=(0,r.Z)((0,n.Z)().mark((function t(){var r;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e,a,k);case 2:if(void 0!==(r=t.sent)){t.next=7;break}return t.abrupt("return");case 7:void 0!==s?p(r,s,e,k):k(r);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();try{l()}catch(i){console.log(i)}}}),[]),m}},67425:t=>{var e="polkadot",a="kusama",n="statemine",r="statemint",l="polkadotpeople",o="kusamapeople",i={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e7,symbol:"milliDOT"},kusamapeople:{precision:1e9,symbol:"milliKSM"}};t.exports={HumanReadable:function(t,s,u){var d=void 0;if(s===e||s===r||s==l)d=3;else{if(s!==a&&s!==n&&s!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=6}t=parseFloat(t),u((t=Number.isInteger(t/i[s].precision)?t/i[s].precision+" "+i[s].symbol:(t/i[s].precision).toFixed(d)+" "+i[s].symbol).toString())},Precise:function(t,e,a){a(t=(t=parseFloat(t))/i[e].precision+" "+i[e].symbol)},BlocksToDays:function(t,e){e((t=6*t/86400).toString())},ErasToDays:function(t,i,s){var u=void 0;if(s===e||s===r||s==l)u=1;else{if(s!==a&&s!==n&&s!=o)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");u=4}i((t/=u).toString())},Percentage:function(t,e){e((t/=1e7).toString())},PermillToPercent:function(t,e){e((t/=1e4).toString())},ArrayLength:function(t,e){e((t=t.split(",").length).toString())}}},85162:(t,e,a)=>{"use strict";a.d(e,{Z:()=>o});var n=a(67294),r=a(86010);const l={tabItem:"tabItem_Ymn6"};function o(t){var e=t.children,a=t.hidden,o=t.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},e)}},74866:(t,e,a)=>{"use strict";a.d(e,{Z:()=>y});var n=a(87462),r=a(67294),l=a(86010),o=a(12466),i=a(16550),s=a(91980),u=a(67392),d=a(50012);function p(t){return function(t){var e,a;return null!=(e=null==(a=r.Children.map(t,(function(t){if(!t||(0,r.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function m(t){var e=t.values,a=t.children;return(0,r.useMemo)((function(){var t=null!=e?e:p(a);return function(t){var e=(0,u.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,a])}function k(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function c(t){var e=t.queryString,a=void 0!==e&&e,n=t.groupId,l=(0,i.k6)(),o=function(t){var e=t.queryString,a=void 0!==e&&e,n=t.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((function(t){if(o){var e=new URLSearchParams(l.location.search);e.set(o,t),l.replace(Object.assign({},l.location,{search:e.toString()}))}}),[o,l])]}function g(t){var e,a,n,l,o=t.defaultValue,i=t.queryString,s=void 0!==i&&i,u=t.groupId,p=m(t),g=(0,r.useState)((function(){return function(t){var e,a=t.defaultValue,n=t.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!k({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(e=n.find((function(t){return t.default})))?e:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:o,tabValues:p})})),h=g[0],b=g[1],N=c({queryString:s,groupId:u}),f=N[0],v=N[1],y=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:u}.groupId),a=(0,d.Nk)(e),n=a[0],l=a[1],[n,(0,r.useCallback)((function(t){e&&l.set(t)}),[e,l])]),T=y[0],w=y[1],S=function(){var t=null!=f?f:T;return k({value:t,tabValues:p})?t:null}();return(0,r.useLayoutEffect)((function(){S&&b(S)}),[S]),{selectedValue:h,selectValue:(0,r.useCallback)((function(t){if(!k({value:t,tabValues:p}))throw new Error("Can't select invalid tab value="+t);b(t),v(t),w(t)}),[v,w,p]),tabValues:p}}var h=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(t){var e=t.className,a=t.block,i=t.selectedValue,s=t.selectValue,u=t.tabValues,d=[],p=(0,o.o5)().blockElementScrollPositionUntilNextRender,m=function(t){var e=t.currentTarget,a=d.indexOf(e),n=u[a].value;n!==i&&(p(e),s(n))},k=function(t){var e,a=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":var n,r=d.indexOf(t.currentTarget)+1;a=null!=(n=d[r])?n:d[0];break;case"ArrowLeft":var l,o=d.indexOf(t.currentTarget)-1;a=null!=(l=d[o])?l:d[d.length-1]}null==(e=a)||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},u.map((function(t){var e=t.value,a=t.label,o=t.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:function(t){return d.push(t)},onKeyDown:k,onClick:m},o,{className:(0,l.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":i===e})}),null!=a?a:e)})))}function f(t){var e=t.lazy,a=t.children,n=t.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){var o=l.find((function(t){return t.props.value===n}));return o?(0,r.cloneElement)(o,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n})})))}function v(t){var e=g(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(N,(0,n.Z)({},t,e)),r.createElement(f,(0,n.Z)({},t,e)))}function y(t){var e=(0,h.Z)();return r.createElement(v,(0,n.Z)({key:String(e)},t))}},30536:(t,e,a)=>{"use strict";a.r(e),a.d(e,{assets:()=>k,contentTitle:()=>p,default:()=>b,frontMatter:()=>d,metadata:()=>m,toc:()=>c});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),o=a(47940),i=a(74866),s=a(85162),u=["components"],d={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},p=void 0,m={unversionedId:"maintain/maintain-polkadot-parameters",id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",draft:!1,tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1722235562,formattedLastUpdatedAt:"Jul 29, 2024",frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/docs/kusama-coc"},next:{title:"Timeline",permalink:"/docs/kusama-timeline"}},k={},c=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Accounts, Identity and Crowdloans",id:"accounts-identity-and-crowdloans",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}],g={toc:c},h="wrapper";function b(t){var e=t.components,a=(0,r.Z)(t,u);return(0,l.kt)(h,(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.kt)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"NOTE: Polkadot generally runs at ","\xbc","th the speed of Kusama, except in the time slot duration\nitself.")),(0,l.kt)(i.Z,{groupId:"periods",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"polkadot",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.kt)("li",{parentName:"ul"},"Epoch: 4 hours (2_400 slots x 6 seconds)"),(0,l.kt)("li",{parentName:"ul"},"Session: 4 hours (Session and Epoch lengths are the same)"),(0,l.kt)("li",{parentName:"ul"},"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Epoch"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session"),(0,l.kt)("td",{parentName:"tr",align:null},"4 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"2_400")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Era"),(0,l.kt)("td",{parentName:"tr",align:null},"24 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"))))),(0,l.kt)(s.Z,{value:"kusama",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.kt)("li",{parentName:"ul"},"Epoch: 1 hour (600 slots x 6 seconds)"),(0,l.kt)("li",{parentName:"ul"},"Session: 1 hour (6 sessions per Era)"),(0,l.kt)("li",{parentName:"ul"},"Era: 6 hours (3600 slots x 6 seconds)")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Kusama"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slot"),(0,l.kt)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Epoch"),(0,l.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,l.kt)("td",{parentName:"tr",align:null},"600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session"),(0,l.kt)("td",{parentName:"tr",align:null},"1 hour"),(0,l.kt)("td",{parentName:"tr",align:null},"600")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Era"),(0,l.kt)("td",{parentName:"tr",align:null},"6 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"3_600")))))),(0,l.kt)("p",null,"*",(0,l.kt)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.kt)("em",{parentName:"em"},"estimates"),". See\n",(0,l.kt)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for more details.")),(0,l.kt)("h3",{id:"accounts-identity-and-crowdloans"},"Accounts, Identity and Crowdloans"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("a",{parentName:"li",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"Existential Deposit")," is\n",(0,l.kt)(o.Z,{network:"kusama",path:"consts.balances.existentialDeposit",defaultValue:1e10,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.kt)("li",{parentName:"ul"},"The deposit required to set an Identity is\n",(0,l.kt)(o.Z,{network:"kusamapeople",path:"consts.identity.basicDeposit",defaultValue:6672333321,filter:"humanReadable",mdxType:"RPC"}),""),(0,l.kt)("li",{parentName:"ul"},"The minimum contribution required to participate in a crowdloan is\n",(0,l.kt)(o.Z,{network:"kusama",path:"consts.crowdloan.minContribution",defaultValue:5e10,filter:"humanReadable",mdxType:"RPC"}),"")),(0,l.kt)("h3",{id:"governance"},"Governance"),(0,l.kt)(i.Z,{groupId:"governance",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"polkadot",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network."))))),(0,l.kt)(s.Z,{value:"kusama",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Voting period"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.kt)("td",{parentName:"tr",align:null},"8 days"),(0,l.kt)("td",{parentName:"tr",align:null},"115_200"),(0,l.kt)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))))),(0,l.kt)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.kt)("p",null,"The maximum number of validators that can be nominated by a nominator is\n24."),(0,l.kt)(i.Z,{groupId:"staking",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"polkadot",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.kt)("td",{parentName:"tr",align:null},"1 Day"),(0,l.kt)("td",{parentName:"tr",align:null},"14_400"),(0,l.kt)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to ",(0,l.kt)("a",{parentName:"td",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.kt)("td",{parentName:"tr",align:null},"28 days"),(0,l.kt)("td",{parentName:"tr",align:null},"403_200"),(0,l.kt)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.'))))),(0,l.kt)(s.Z,{value:"kusama",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Term duration"),(0,l.kt)("td",{parentName:"tr",align:null},"6 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"3_600"),(0,l.kt)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.kt)("td",{parentName:"tr",align:null},"6 hours"),(0,l.kt)("td",{parentName:"tr",align:null},"3_600"),(0,l.kt)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to ",(0,l.kt)("a",{parentName:"td",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"604_800"),(0,l.kt)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"604_800"),(0,l.kt)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))))),(0,l.kt)("h3",{id:"parachains"},"Parachains"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Crowdloans and Auctions"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Auction duration"),(0,l.kt)("td",{parentName:"tr",align:null},"7 days"),(0,l.kt)("td",{parentName:"tr",align:null},"100_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The total duration of the slot auction, subject to the candle auction mechanism.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Opening period"),(0,l.kt)("td",{parentName:"tr",align:null},"2 days"),(0,l.kt)("td",{parentName:"tr",align:null},"28_800"),(0,l.kt)("td",{parentName:"tr",align:null},"The opening period of the slot auction.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ending period"),(0,l.kt)("td",{parentName:"tr",align:null},"5 days"),(0,l.kt)("td",{parentName:"tr",align:null},"72_000"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending period of the slot auction.")))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parachain Slot"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Lease period"),(0,l.kt)("td",{parentName:"tr",align:null},"12 weeks"),(0,l.kt)("td",{parentName:"tr",align:null},"1_209_600"),(0,l.kt)("td",{parentName:"tr",align:null},"The length of one lease period in a parachain slot.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total slot duration"),(0,l.kt)("td",{parentName:"tr",align:null},"2 years"),(0,l.kt)("td",{parentName:"tr",align:null},"10_512_000"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum duration a parachain can lease by winning a slot auction (8 lease periods).")))),(0,l.kt)("h3",{id:"treasury"},"Treasury"),(0,l.kt)(i.Z,{groupId:"treasury",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"polkadot",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.kt)("td",{parentName:"tr",align:null},"24 days"),(0,l.kt)("td",{parentName:"tr",align:null},"345_600"),(0,l.kt)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.kt)("p",null,"Burn percentage is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"1.00%"),".")),(0,l.kt)(s.Z,{value:"kusama",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Treasury"),(0,l.kt)("th",{parentName:"tr",align:null},"Time"),(0,l.kt)("th",{parentName:"tr",align:null},"Slots"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.kt)("td",{parentName:"tr",align:null},"6 days"),(0,l.kt)("td",{parentName:"tr",align:null},"86_400"),(0,l.kt)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.kt)("p",null,"Burn percentage is currently ",(0,l.kt)("inlineCode",{parentName:"p"},"0.20%"),", though instead of being burned this amount is temporarily\nredirected into the ",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-guides-society-kusama"},"Society"),"'s treasury to\nfund growth."))),(0,l.kt)("h3",{id:"precision"},"Precision"),(0,l.kt)(i.Z,{groupId:"precision",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"polkadot",mdxType:"TabItem"},(0,l.kt)("p",null,"DOT have 10 decimals of precision. In other words, 10 ","*","*"," 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."),(0,l.kt)("p",null,"The denomination of DOT was changed from 12 decimals of precision at block #1,248,328 in an event\nknown as ",(0,l.kt)("em",{parentName:"p"},"Denomination Day"),". See ",(0,l.kt)("a",{parentName:"p",href:"/docs/learn/learn-redenomination"},"Redenomination")," for\ndetails.")),(0,l.kt)(s.Z,{value:"kusama",mdxType:"TabItem"},(0,l.kt)("p",null,"KSM have 12 decimals of precision. In other words, 1e12 (1_000_000_000_000, or one trillion) Plancks\nmake up a single KSM."))))}b.isMDXComponent=!0},46601:()=>{}}]);