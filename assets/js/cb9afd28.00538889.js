(self.webpackChunk=self.webpackChunk||[]).push([[3643],{47940:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var a=r(74165),n=r(15861),o=r(67294),i=r(87152),s=r(14741),l=r(67425);function u(e,t,r){return c.apply(this,arguments)}function c(){return(c=(0,n.Z)((0,a.Z)().mark((function e(t,r,n){var o,l,u,c,d;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=void 0,l=void 0,e.t0=t,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:13;break;case 5:return o="wss://rpc.polkadot.io",e.abrupt("break",14);case 7:return o="wss://kusama-rpc.polkadot.io/",e.abrupt("break",14);case 9:return o="wss://statemine-rpc.polkadot.io/",e.abrupt("break",14);case 11:return o="wss://statemint-rpc.polkadot.io/",e.abrupt("break",14);case 13:console.log("Unknown socket url provided, no connection made.");case 14:if(void 0!==o){e.next=18;break}return e.abrupt("return");case 18:return u=new i.U(o),e.next=21,s.G.create({provider:u});case 21:c=e.sent,(d=r.split(".")).forEach((function(e){e in c&&(c=c[e])})),e.t1=d[0],e.next="consts"===e.t1?27:"query"===e.t1?29:34;break;case 27:return l=c.toString(),e.abrupt("break",35);case 29:return e.next=31,c();case 31:return l=(l=e.sent).toString(),e.abrupt("break",35);case 34:console.log("Unknown path prefix ("+d[0]+") in "+r);case 35:return e.abrupt("return",l);case 36:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e,t,r,a){switch(t){case"humanReadable":(0,l.HumanReadable)(e,r,a);break;case"precise":(0,l.Precise)(e,r,a);break;case"blocksToDays":(0,l.BlocksToDays)(e,a);break;case"erasToDays":(0,l.ErasToDays)(e,a,r);break;case"percentage":(0,l.Percentage)(e,a);break;case"permillToPercent":(0,l.PermillToPercent)(e,a);break;case"arrayLength":(0,l.ArrayLength)(e,a);break;default:return void console.log("Ignoring unknown filter type")}}const p=function(e){var t=e.network,r=e.path,i=e.defaultValue,s=e.filter,l=void 0===s?void 0:s,c=(0,o.useState)(""),p=c[0],m=c[1];return t=t.toLowerCase(),(0,o.useEffect)((function(){void 0!==l?d(i.toString(),l,t,m):m(i.toString());var e=void 0;switch(t){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;default:console.log("Unknown network provided, "+t)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var o=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(){var n;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t,r,m);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?d(n,l,t,m):m(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{o()}catch(s){console.log(s)}}}),[]),p}},67425:e=>{var t="polkadot",r="kusama",a="statemine",n="statemint",o={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,i,s){var l=void 0;if(i===t||i===n)l=3;else{if(i!==r&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");l=6}e=parseFloat(e),s((e=Number.isInteger(e/o[i].precision)?e/o[i].precision+" "+o[i].symbol:(e/o[i].precision).toFixed(l)+" "+o[i].symbol).toString())},Precise:function(e,t,r){r(e=(e=parseFloat(e))/o[t].precision+" "+o[t].symbol)},BlocksToDays:function(e,t){t((e=6*e/86400).toString())},ErasToDays:function(e,o,i){var s=void 0;if(i===t||i===n)s=1;else{if(i!==r&&i!==a)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");s=4}o((e/=s).toString())},Percentage:function(e,t){t((e/=1e7).toString())},PermillToPercent:function(e,t){t((e/=1e4).toString())},ArrayLength:function(e,t){t((e=e.split(",").length).toString())}}},52991:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var a=r(67294),n=r(86010),o=r(53438),i=r(39960),s=r(13919),l=r(95999);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){var t=e.href,r=e.children;return a.createElement(i.Z,{href:t,className:(0,n.Z)("card padding--lg",u.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,i=e.description;return a.createElement(c,{href:t},a.createElement("h2",{className:(0,n.Z)("text--truncate",u.cardTitle),title:o},r," ",o),i&&a.createElement("p",{className:(0,n.Z)("text--truncate",u.cardDescription),title:i},i))}function p(e){var t,r=e.item,n=(0,o.Wl)(r);return n?a.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function m(e){var t,r,n=e.item,i=(0,s.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",l=(0,o.xz)(null!=(t=n.docId)?t:void 0);return a.createElement(d,{href:n.href,icon:i,title:n.label,description:null!=(r=n.description)?r:null==l?void 0:l.description})}function f(e){var t=e.item;switch(t.type){case"link":return a.createElement(m,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function k(e){var t=e.className,r=(0,o.jA)();return a.createElement(b,{items:r.items,className:t})}function b(e){var t=e.items,r=e.className;if(!t)return a.createElement(k,e);var i=(0,o.MN)(t);return a.createElement("section",{className:(0,n.Z)("row",r)},i.map((function(e,t){return a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e}))})))}},85162:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var a=r(67294),n=r(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,r=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:r},t)}},74866:(e,t,r)=>{"use strict";r.d(t,{Z:()=>w});var a=r(87462),n=r(67294),o=r(86010),i=r(12466),s=r(16550),l=r(91980),u=r(67392),c=r(50012);function d(e){return function(e){var t,r;return null!=(t=null==(r=n.Children.map(e,(function(e){if(!e||(0,n.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,o=(0,s.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function k(e){var t,r,a,o,i=e.defaultValue,s=e.queryString,l=void 0!==s&&s,u=e.groupId,d=p(e),k=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:d})})),b=k[0],v=k[1],g=f({queryString:l,groupId:u}),h=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),r=(0,c.Nk)(t),a=r[0],o=r[1],[a,(0,n.useCallback)((function(e){t&&o.set(e)}),[t,o])]),E=w[0],S=w[1],N=function(){var e=null!=h?h:E;return m({value:e,tabValues:d})?e:null}();return(0,n.useLayoutEffect)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),S(e)}),[y,S,d]),tabValues:d}}var b=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,r=e.block,s=e.selectedValue,l=e.selectValue,u=e.tabValues,c=[],d=(0,i.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),a=u[r].value;a!==s&&(d(t),l(a))},m=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,n=c.indexOf(e.currentTarget)+1;r=null!=(a=c[n])?a:c[0];break;case"ArrowLeft":var o,i=c.indexOf(e.currentTarget)-1;r=null!=(o=c[i])?o:c[c.length-1]}null==(t=r)||t.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((function(e){var t=e.value,r=e.label,i=e.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=r?r:t)})))}function h(e){var t=e.lazy,r=e.children,a=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===a}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})})))}function y(e){var t=k(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",v.tabList)},n.createElement(g,(0,a.Z)({},e,t)),n.createElement(h,(0,a.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return n.createElement(y,(0,a.Z)({key:String(t)},e))}},46301:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=r(87462),n=r(63366),o=(r(67294),r(3905)),i=(r(47940),r(74866),r(85162),r(52991)),s=["components"],l={id:"learn-polkadot-js-guides",title:"Polkadot-JS Guides",sidebar_label:"Polkadot-JS Guides",description:"Guides about Polkadot-JS.",keywords:["polkadot-JS","polkadotjs","guides","advanced"],slug:"../learn-polkadot-js-guides"},u=void 0,c={unversionedId:"learn/learn-polkadot-js-guides",id:"learn/learn-polkadot-js-guides",title:"Polkadot-JS Guides",description:"Guides about Polkadot-JS.",source:"@site/../docs/learn/learn-polkadot-js-guides.md",sourceDirName:"learn",slug:"/learn-polkadot-js-guides",permalink:"/docs/learn-polkadot-js-guides",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1704367237,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{id:"learn-polkadot-js-guides",title:"Polkadot-JS Guides",sidebar_label:"Polkadot-JS Guides",description:"Guides about Polkadot-JS.",keywords:["polkadot-JS","polkadotjs","guides","advanced"],slug:"../learn-polkadot-js-guides"},sidebar:"docs",previous:{title:"Polkadot-JS UI",permalink:"/docs/polkadotjs-ui"},next:{title:"Accounts",permalink:"/docs/learn-guides-accounts"}},d={},p=[],m={toc:p},f="wrapper";function k(e){var t=e.components,r=(0,n.Z)(e,s);return(0,o.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We support only the use of the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/#/explorer"},(0,o.kt)("strong",{parentName:"a"},"Polkadot-JS UI")),"\ntogether with the ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/extension/"},(0,o.kt)("strong",{parentName:"a"},"Polkadot-JS browser extension")),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.ledger.com/ledger-live"},(0,o.kt)("strong",{parentName:"a"},"Ledger"))," and\n",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/technologies/signer/"},(0,o.kt)("strong",{parentName:"a"},"Polkadot Vault"))," for signing transactions. We do not\nprovide support for third party applications.")),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}k.isMDXComponent=!0},46601:()=>{}}]);