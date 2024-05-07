"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[289],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},35703:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(67294);const a=function(e){var t,r=e.message,a=(0,n.useState)(!0),o=a[0],l=a[1];return n.createElement(n.Fragment,null,o&&n.createElement("div",{className:"message-box"},n.createElement("button",{className:"close-button",onClick:function(){l(!1)}},"\u2716 "),n.createElement("div",{className:"message-content",dangerouslySetInnerHTML:{__html:(t=r,t.replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>'))}})))}},52991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(67294),a=r(86010),o=r(53438),l=r(39960),i=r(13919),u=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function c(e){var t=e.href,r=e.children;return n.createElement(l.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},r)}function d(e){var t=e.href,r=e.icon,o=e.title,l=e.description;return n.createElement(c,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:o},r," ",o),l&&n.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:l},l))}function p(e){var t,r=e.item,a=(0,o.Wl)(r);return a?n.createElement(d,{href:a,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:null!=(t=r.description)?t:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function f(e){var t,r,a=e.item,l=(0,i.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,o.xz)(null!=(t=a.docId)?t:void 0);return n.createElement(d,{href:a.href,icon:l,title:a.label,description:null!=(r=a.description)?r:null==u?void 0:u.description})}function m(e){var t=e.item;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){var t=e.className,r=(0,o.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){var t=e.items,r=e.className;if(!t)return n.createElement(b,e);var l=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},l.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e}))})))}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),a=r(86010);const o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,r=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},74866:(e,t,r)=>{r.d(t,{Z:()=>E});var n=r(87462),a=r(67294),o=r(86010),l=r(12466),i=r(16550),u=r(91980),s=r(67392),c=r(50012);function d(e){return function(e){var t,r;return null!=(t=null==(r=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,r=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:d(r);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:n});return[(0,u._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function b(e){var t,r,n,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,s=e.groupId,d=p(e),b=(0,a.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:d})})),v=b[0],g=b[1],h=m({queryString:u,groupId:s}),y=h[0],k=h[1],E=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),r=(0,c.Nk)(t),n=r[0],o=r[1],[n,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),w=E[0],O=E[1],T=function(){var e=null!=y?y:w;return f({value:e,tabValues:d})?e:null}();return(0,a.useLayoutEffect)((function(){T&&g(T)}),[T]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),k(e),O(e)}),[k,O,d]),tabValues:d}}var v=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){var t=e.className,r=e.block,i=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,r=c.indexOf(t),n=s[r].value;n!==i&&(d(t),u(n))},f=function(e){var t,r=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,a=c.indexOf(e.currentTarget)+1;r=null!=(n=c[a])?n:c[0];break;case"ArrowLeft":var o,l=c.indexOf(e.currentTarget)-1;r=null!=(o=c[l])?o:c[c.length-1]}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},s.map((function(e){var t=e.value,r=e.label,l=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return c.push(e)},onKeyDown:f,onClick:p},l,{className:(0,o.Z)("tabs__item",g.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=r?r:t)})))}function y(e){var t=e.lazy,r=e.children,n=e.selectedValue,o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function k(e){var t=b(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(h,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function E(e){var t=(0,v.Z)();return a.createElement(k,(0,n.Z)({key:String(t)},e))}},24284:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>v,frontMatter:()=>s,metadata:()=>d,toc:()=>f});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),l=(r(74866),r(85162),r(52991)),i=r(35703),u=["components"],s={id:"learn-guides-bridges",title:"Polkadot-JS Guides about Bridge Hub",sidebar_label:"Bridge Hub Guides",description:"Polkadot-JS Guides about the Bridge Hub.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-bridges"},c=void 0,d={unversionedId:"learn/learn-guides-bridges",id:"learn/learn-guides-bridges",title:"Polkadot-JS Guides about Bridge Hub",description:"Polkadot-JS Guides about the Bridge Hub.",source:"@site/../docs/learn/learn-guides-bridges.md",sourceDirName:"learn",slug:"/learn-guides-bridges",permalink:"/docs/learn-guides-bridges",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1714545713,formattedLastUpdatedAt:"May 1, 2024",frontMatter:{id:"learn-guides-bridges",title:"Polkadot-JS Guides about Bridge Hub",sidebar_label:"Bridge Hub Guides",description:"Polkadot-JS Guides about the Bridge Hub.",keywords:["Bridge","XCM","Bridge Hub","polkadot-js"],slug:"../learn-guides-bridges"},sidebar:"docs",previous:{title:"Asset Conversion Tutorials",permalink:"/docs/learn-guides-asset-conversion"},next:{title:"DOT <> KSM Bridge",permalink:"/docs/learn-guides-dot-ksm-bridge"}},p={},f=[],m={toc:f},b="wrapper";function v(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)(b,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{message:"Polkadot-JS is for developers and power users only. If you need help using the\n[Polkadot-JS UI](/docs/polkadotjs-ui), you can contact the\n[Polkadot Support Team](https://support.polkadot.network/support/home). For more user-friendly tools\nsee the [wallets](./wallets-index), [apps](./apps-index) and [dashboard](./dashboards-index) pages.",mdxType:"MessageBox"}),(0,o.kt)(l.Z,{mdxType:"DocCardList"}))}v.isMDXComponent=!0}}]);