"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5759:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"maintain-endpoints",title:"Node Endpoints",sidebar_label:"Node Endpoints",description:"List of node endpoints and examples of use.",keywords:["endpoints","network","connect"],slug:"../maintain-endpoints"},p=void 0,s={unversionedId:"maintain/maintain-endpoints",id:"maintain/maintain-endpoints",title:"Node Endpoints",description:"List of node endpoints and examples of use.",source:"@site/../docs/maintain/maintain-endpoints.md",sourceDirName:"maintain",slug:"/maintain-endpoints",permalink:"/docs/maintain-endpoints",draft:!1,tags:[],version:"current",lastUpdatedBy:"James Bayly",lastUpdatedAt:1662717478,formattedLastUpdatedAt:"Sep 9, 2022",frontMatter:{id:"maintain-endpoints",title:"Node Endpoints",sidebar_label:"Node Endpoints",description:"List of node endpoints and examples of use.",keywords:["endpoints","network","connect"],slug:"../maintain-endpoints"},sidebar:"docs",previous:{title:"Builder's Guides",permalink:"/docs/build-index"},next:{title:"Builders Starter's Guide",permalink:"/docs/build-build-with-polkadot"}},d={},c=[{value:"Network Endpoints",id:"network-endpoints",level:3},{value:"Main Networks",id:"main-networks",level:4},{value:"Test Networks",id:"test-networks",level:4},{value:"Example usage with Polkadot-JS API",id:"example-usage-with-polkadot-js-api",level:4},{value:"Third Party Providers",id:"third-party-providers",level:3}],u={toc:c};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ideally, one may run their own node when interacting with the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network")," via ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps")," or\nother UIs and programmatic methods. Another option would be to connect to one of the several public\nendpoints provided by infrastructure and API service providers. For development convenience,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity Tech")," maintains archive nodes for Polkadot, Kusama, and their test\nnetworks with public endpoints. These endpoints can be used with\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api"},"Polkadot-JS API")," to interact with their respective chains. The\ntables below list these endpoints."),(0,o.kt)("h3",{id:"network-endpoints"},"Network Endpoints"),(0,o.kt)("h4",{id:"main-networks"},"Main Networks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Network"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://rpc.polkadot.io")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://kusama-rpc.polkadot.io")))),(0,o.kt)("h4",{id:"test-networks"},"Test Networks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Network"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Westend"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://westend-rpc.polkadot.io")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rococo"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://rococo-rpc.polkadot.io")))),(0,o.kt)("h4",{id:"example-usage-with-polkadot-js-api"},"Example usage with Polkadot-JS API"),(0,o.kt)("p",null,"To connect to the Parity node, use the endpoint in your JavaScript apps like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{5}","{5}":!0},"// Using the Polkadot Mainnet Endpoint\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\nasync () => {\n  // Construct a provider with the endpoint URL\n  const provider = new WsProvider('wss://rpc.polkadot.io/');\n  // Create an API instance for Polkadot\n  const api = await ApiPromise.create({ provider });\n  // ...\n")),(0,o.kt)("h3",{id:"third-party-providers"},"Third Party Providers"),(0,o.kt)("p",null,"There are a number of third-party providers of RPC infrastructure to the Polkadot and Kusama communities, commonly providing access to multiple networks and parachains in a single service. They provide additional services such as higher rate limits, potentially more reliable and scalable service, and additional metrics."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://onfinality.io"},"OnFinality")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://dwellir.com"},"Dwellir")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://pinknode.io"},"Pinknode")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://radiumblock.io"},"Radium Block"))))}m.isMDXComponent=!0}}]);