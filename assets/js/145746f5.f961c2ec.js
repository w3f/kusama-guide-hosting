"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6789],{15680:(e,a,t)=>{t.d(a,{xA:()=>g,yg:()=>y});var n=t(96540);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=n.createContext({}),s=function(e){var a=n.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=s(e.components);return n.createElement(u.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,g=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=r,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||l;return t?n.createElement(y,i(i({ref:a},g),{},{components:t})):n.createElement(y,i({ref:a},g))}));function y(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},19365:(e,a,t)=>{t.d(a,{A:()=>i});var n=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){var a=e.children,t=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},a)}},11470:(e,a,t)=>{t.d(a,{A:()=>k});var n=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),u=t(57485),s=t(31682),g=t(89466);function d(e){return function(e){var a,t;return null!=(a=null==(t=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(a=e.props)&&"object"==typeof a&&"value"in a)return e;var a;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?a:[]}(e).map((function(e){var a=e.props;return{value:a.value,label:a.label,attributes:a.attributes,default:a.default}}))}function p(e){var a=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=a?a:d(t);return function(e){var a=(0,s.X)(e,(function(e,a){return e.value===a.value}));if(a.length>0)throw new Error('Docusaurus error: Duplicate values "'+a.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[a,t])}function m(e){var a=e.value;return e.tabValues.some((function(e){return e.value===a}))}function y(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId,l=(0,o.W6)(),i=function(e){var a=e.queryString,t=void 0!==a&&a,n=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,u.aZ)(i),(0,r.useCallback)((function(e){if(i){var a=new URLSearchParams(l.location.search);a.set(i,e),l.replace(Object.assign({},l.location,{search:a.toString()}))}}),[i,l])]}function c(e){var a,t,n,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,d=p(e),c=(0,r.useState)((function(){return function(e){var a,t=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(a=n.find((function(e){return e.default})))?a:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),h=c[0],N=c[1],b=y({queryString:u,groupId:s}),f=b[0],v=b[1],k=(a=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),t=(0,g.Dv)(a),n=t[0],l=t[1],[n,(0,r.useCallback)((function(e){a&&l.set(e)}),[a,l])]),T=k[0],w=k[1],P=function(){var e=null!=f?f:T;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){P&&N(P)}),[P]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);N(e),v(e),w(e)}),[v,w,d]),tabValues:d}}var h=t(92303);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var a=e.className,t=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,g=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var a=e.currentTarget,t=g.indexOf(a),n=s[t].value;n!==o&&(d(a),u(n))},m=function(e){var a,t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=g.indexOf(e.currentTarget)+1;t=null!=(n=g[r])?n:g[0];break;case"ArrowLeft":var l,i=g.indexOf(e.currentTarget)-1;t=null!=(l=g[i])?l:g[g.length-1]}null==(a=t)||a.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},a)},s.map((function(e){var a=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:o===a?0:-1,"aria-selected":o===a,key:a,ref:function(e){return g.push(e)},onKeyDown:m,onClick:p},i,{className:(0,l.A)("tabs__item",N.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===a})}),null!=t?t:a)})))}function f(e){var a=e.lazy,t=e.children,n=e.selectedValue,l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){var i=l.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,a){return(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==n})})))}function v(e){var a=c(e);return r.createElement("div",{className:(0,l.A)("tabs-container",N.tabList)},r.createElement(b,(0,n.A)({},e,a)),r.createElement(f,(0,n.A)({},e,a)))}function k(e){var a=(0,h.A)();return r.createElement(v,(0,n.A)({key:String(a)},e))}},51841:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>g,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>m});var n=t(58168),r=t(98587),l=(t(96540),t(15680)),i=t(11470),o=t(19365),u=["components"],s={id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},g=void 0,d={unversionedId:"maintain/maintain-polkadot-parameters",id:"maintain/maintain-polkadot-parameters",title:"Polkadot Parameters",description:"A description about fundamental Polkadot parameters.",source:"@site/../docs/maintain/maintain-polkadot-parameters.md",sourceDirName:"maintain",slug:"/maintain-polkadot-parameters",permalink:"/docs/maintain-polkadot-parameters",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725464514,formattedLastUpdatedAt:"Sep 4, 2024",frontMatter:{id:"maintain-polkadot-parameters",title:"Polkadot Parameters",sidebar_label:"Parameters",description:"A description about fundamental Polkadot parameters.",keywords:["parameters","actions","attributes","behaviors"],slug:"../maintain-polkadot-parameters"},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/docs/kusama-coc"},next:{title:"Timeline",permalink:"/docs/kusama-timeline"}},p={},m=[{value:"Periods of common actions and attributes",id:"periods-of-common-actions-and-attributes",level:3},{value:"Governance",id:"governance",level:3},{value:"Staking, Validating, and Nominating",id:"staking-validating-and-nominating",level:3},{value:"Parachains",id:"parachains",level:3},{value:"Treasury",id:"treasury",level:3},{value:"Precision",id:"precision",level:3}],y={toc:m},c="wrapper";function h(e){var a=e.components,t=(0,r.A)(e,u);return(0,l.yg)(c,(0,n.A)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"Many of these parameter values can be updated via on-chain governance. If you require absolute\ncertainty of these parameter values, it is recommended you directly check the constants by looking\nat the ",(0,l.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate/constants"},"chain state")," and/or\n",(0,l.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/chainstate"},"storage"),"."),(0,l.yg)("h3",{id:"periods-of-common-actions-and-attributes"},"Periods of common actions and attributes"),(0,l.yg)("p",null,(0,l.yg)("em",{parentName:"p"},"NOTE: Polkadot generally runs at ","\xbc","th the speed of Kusama, except in the time slot duration\nitself.")),(0,l.yg)(i.A,{groupId:"periods",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.yg)("li",{parentName:"ul"},"Epoch: 4 hours (2_400 slots x 6 seconds)"),(0,l.yg)("li",{parentName:"ul"},"Session: 4 hours (Session and Epoch lengths are the same)"),(0,l.yg)("li",{parentName:"ul"},"Era: 24 hours (6 sessions per Era, 2_400 slots x 6 epochs x 6 seconds)")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Polkadot"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slot"),(0,l.yg)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Epoch"),(0,l.yg)("td",{parentName:"tr",align:null},"4 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"2_400")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Session"),(0,l.yg)("td",{parentName:"tr",align:null},"4 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"2_400")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Era"),(0,l.yg)("td",{parentName:"tr",align:null},"24 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"14_400"))))),(0,l.yg)(o.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Slot: 6 seconds ","*","(generally one block per slot, although see note below)"),(0,l.yg)("li",{parentName:"ul"},"Epoch: 1 hour (600 slots x 6 seconds)"),(0,l.yg)("li",{parentName:"ul"},"Session: 1 hour (6 sessions per Era)"),(0,l.yg)("li",{parentName:"ul"},"Era: 6 hours (3600 slots x 6 seconds)")),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Kusama"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots","*"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slot"),(0,l.yg)("td",{parentName:"tr",align:null},"6 seconds"),(0,l.yg)("td",{parentName:"tr",align:null},"1")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Epoch"),(0,l.yg)("td",{parentName:"tr",align:null},"1 hour"),(0,l.yg)("td",{parentName:"tr",align:null},"600")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Session"),(0,l.yg)("td",{parentName:"tr",align:null},"1 hour"),(0,l.yg)("td",{parentName:"tr",align:null},"600")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Era"),(0,l.yg)("td",{parentName:"tr",align:null},"6 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"3_600")))))),(0,l.yg)("p",null,"*",(0,l.yg)("em",{parentName:"p"},"A maximum of one block per slot can be in a canonical chain. Occasionally, a slot will be without\na block in the chain. Thus, the times given are ",(0,l.yg)("em",{parentName:"em"},"estimates"),". See\n",(0,l.yg)("a",{parentName:"em",href:"/docs/learn-consensus"},"Consensus")," for more details.")),(0,l.yg)("h3",{id:"governance"},"Governance"),(0,l.yg)(i.A,{groupId:"governance",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Voting period"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network."))))),(0,l.yg)(o.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Voting period"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"100_800"),(0,l.yg)("td",{parentName:"tr",align:null},"How long the public can vote on a referendum.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Enactment period"),(0,l.yg)("td",{parentName:"tr",align:null},"8 days"),(0,l.yg)("td",{parentName:"tr",align:null},"115_200"),(0,l.yg)("td",{parentName:"tr",align:null},"Time it takes for a successful referendum to be implemented on the network.")))))),(0,l.yg)("h3",{id:"staking-validating-and-nominating"},"Staking, Validating, and Nominating"),(0,l.yg)("p",null,"The maximum number of validators that can be nominated by a nominator is\n24."),(0,l.yg)(i.A,{groupId:"staking",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Term duration"),(0,l.yg)("td",{parentName:"tr",align:null},"1 Day"),(0,l.yg)("td",{parentName:"tr",align:null},"14_400"),(0,l.yg)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.yg)("td",{parentName:"tr",align:null},"1 Day"),(0,l.yg)("td",{parentName:"tr",align:null},"14_400"),(0,l.yg)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to ",(0,l.yg)("a",{parentName:"td",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.yg)("td",{parentName:"tr",align:null},"28 days"),(0,l.yg)("td",{parentName:"tr",align:null},"403_200"),(0,l.yg)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.'))))),(0,l.yg)(o.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parameter"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Term duration"),(0,l.yg)("td",{parentName:"tr",align:null},"6 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"3_600"),(0,l.yg)("td",{parentName:"tr",align:null},"The time for which a validator is in the set after being elected. Note, this duration can be shortened in the case that a validator misbehaves.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Nomination period"),(0,l.yg)("td",{parentName:"tr",align:null},"6 hours"),(0,l.yg)("td",{parentName:"tr",align:null},"3_600"),(0,l.yg)("td",{parentName:"tr",align:null},"How often a new validator set is elected according to ",(0,l.yg)("a",{parentName:"td",href:"/docs/learn-phragmen"},"Phragm\xe9n's method"),".")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Bonding duration"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"604_800"),(0,l.yg)("td",{parentName:"tr",align:null},"How long until your funds will be transferrable after unbonding. Note that the bonding duration is defined in eras, not directly by slots.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Slash defer duration"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"604_800"),(0,l.yg)("td",{parentName:"tr",align:null},'Prevents overslashing and validators "escaping" and getting their nominators slashed with no repercussions to themselves. Note that the bonding duration is defined in eras, not directly by slots.')))))),(0,l.yg)("h3",{id:"parachains"},"Parachains"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Crowdloans and Auctions"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Auction duration"),(0,l.yg)("td",{parentName:"tr",align:null},"7 days"),(0,l.yg)("td",{parentName:"tr",align:null},"100_800"),(0,l.yg)("td",{parentName:"tr",align:null},"The total duration of the slot auction, subject to the candle auction mechanism.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Opening period"),(0,l.yg)("td",{parentName:"tr",align:null},"2 days"),(0,l.yg)("td",{parentName:"tr",align:null},"28_800"),(0,l.yg)("td",{parentName:"tr",align:null},"The opening period of the slot auction.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Ending period"),(0,l.yg)("td",{parentName:"tr",align:null},"5 days"),(0,l.yg)("td",{parentName:"tr",align:null},"72_000"),(0,l.yg)("td",{parentName:"tr",align:null},"The ending period of the slot auction.")))),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Parachain Slot"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Lease period"),(0,l.yg)("td",{parentName:"tr",align:null},"12 weeks"),(0,l.yg)("td",{parentName:"tr",align:null},"1_209_600"),(0,l.yg)("td",{parentName:"tr",align:null},"The length of one lease period in a parachain slot.")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Total slot duration"),(0,l.yg)("td",{parentName:"tr",align:null},"2 years"),(0,l.yg)("td",{parentName:"tr",align:null},"10_512_000"),(0,l.yg)("td",{parentName:"tr",align:null},"The maximum duration a parachain can lease by winning a slot auction (8 lease periods).")))),(0,l.yg)("h3",{id:"treasury"},"Treasury"),(0,l.yg)(i.A,{groupId:"treasury",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Treasury"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.yg)("td",{parentName:"tr",align:null},"24 days"),(0,l.yg)("td",{parentName:"tr",align:null},"345_600"),(0,l.yg)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.yg)("p",null,"Burn percentage is currently ",(0,l.yg)("inlineCode",{parentName:"p"},"1.00%"),".")),(0,l.yg)(o.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"Treasury"),(0,l.yg)("th",{parentName:"tr",align:null},"Time"),(0,l.yg)("th",{parentName:"tr",align:null},"Slots"),(0,l.yg)("th",{parentName:"tr",align:null},"Description"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"Periods between spends"),(0,l.yg)("td",{parentName:"tr",align:null},"6 days"),(0,l.yg)("td",{parentName:"tr",align:null},"86_400"),(0,l.yg)("td",{parentName:"tr",align:null},"When the treasury can spend again after spending previously.")))),(0,l.yg)("p",null,"Burn percentage is currently ",(0,l.yg)("inlineCode",{parentName:"p"},"0.20%"),", though instead of being burned this amount is temporarily\nredirected into the ",(0,l.yg)("a",{parentName:"p",href:"/docs/maintain-guides-society-kusama"},"Society"),"'s treasury to\nfund growth."))),(0,l.yg)("h3",{id:"precision"},"Precision"),(0,l.yg)(i.A,{groupId:"precision",values:[{label:"Polkadot",value:"polkadot"},{label:"Kusama",value:"kusama"}],mdxType:"Tabs"},(0,l.yg)(o.A,{value:"polkadot",mdxType:"TabItem"},(0,l.yg)("p",null,"DOT have 10 decimals of precision. In other words, 10 ","*","*"," 10 (10_000_000_000 or ten billion)\nPlancks make up a DOT."),(0,l.yg)("p",null,"The denomination of DOT was changed from 12 decimals of precision at block #1,248,328 in an event\nknown as ",(0,l.yg)("em",{parentName:"p"},"Denomination Day"),". See ",(0,l.yg)("a",{parentName:"p",href:"/docs/learn/learn-redenomination"},"Redenomination")," for\ndetails.")),(0,l.yg)(o.A,{value:"kusama",mdxType:"TabItem"},(0,l.yg)("p",null,"KSM have 12 decimals of precision. In other words, 1e12 (1_000_000_000_000, or one trillion) Plancks\nmake up a single KSM."))))}h.isMDXComponent=!0}}]);