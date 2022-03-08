"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1239],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),s=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15759:(t,e,n)=>{n.r(e),n.d(e,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,assets:()=>d,toc:()=>c,default:()=>m});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],p={id:"maintain-endpoints",title:"Node Endpoints",sidebar_label:"Node Endpoints",description:"List of node endpoints and examples of use.",slug:"../maintain-endpoints"},l=void 0,s={unversionedId:"maintain/maintain-endpoints",id:"maintain/maintain-endpoints",title:"Node Endpoints",description:"List of node endpoints and examples of use.",source:"@site/../docs/maintain/maintain-endpoints.md",sourceDirName:"maintain",slug:"/maintain-endpoints",permalink:"/docs/maintain-endpoints",editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-endpoints.md",tags:[],version:"current",lastUpdatedBy:"alex",lastUpdatedAt:1640195478,formattedLastUpdatedAt:"12/22/2021",frontMatter:{id:"maintain-endpoints",title:"Node Endpoints",sidebar_label:"Node Endpoints",description:"List of node endpoints and examples of use.",slug:"../maintain-endpoints"},sidebar:"docs",previous:{title:"Builder's Guides",permalink:"/docs/build-index"},next:{title:"Builders Starter's Guide",permalink:"/docs/build-build-with-polkadot"}},d={},c=[{value:"Network Endpoints",id:"network-endpoints",level:3},{value:"Main Networks",id:"main-networks",level:4},{value:"Test Networks",id:"test-networks",level:4},{value:"Example usage with Polkadot-JS API",id:"example-usage-with-polkadot-js-api",level:4}],u={toc:c};function m(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Ideally, one may run their own node when interacting with the\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network")," via ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps")," or\nother UIs and programmatic methods. Another option would be to connect to one of the several public\nendpoints provided by infrastructure and API service providers. For development convenience,\n",(0,o.kt)("a",{parentName:"p",href:"https://www.parity.io/"},"Parity Tech")," maintains archive nodes for Polkadot, Kusama, and their test\nnetworks with public endpoints. These endpoints can be used with\n",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api"},"Polkadot-JS API")," to interact with their respective chains. The\ntables below list these endpoints."),(0,o.kt)("h3",{id:"network-endpoints"},"Network Endpoints"),(0,o.kt)("h4",{id:"main-networks"},"Main Networks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Network"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Polkadot"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://rpc.polkadot.io")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Kusama"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://kusama-rpc.polkadot.io")))),(0,o.kt)("h4",{id:"test-networks"},"Test Networks"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Network"),(0,o.kt)("th",{parentName:"tr",align:null},"URL"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Westend"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://westend-rpc.polkadot.io")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Rococo"),(0,o.kt)("td",{parentName:"tr",align:null},"wss://rococo-rpc.polkadot.io")))),(0,o.kt)("h4",{id:"example-usage-with-polkadot-js-api"},"Example usage with Polkadot-JS API"),(0,o.kt)("p",null,"To connect to the Parity node, use the endpoint in your JavaScript apps like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript",metastring:"{5}","{5}":!0},"// Using the Polkadot Mainnet Endpoint\nconst { ApiPromise, WsProvider } = require('@polkadot/api');\nasync () => {\n  // Construct a provider with the endpoint URL\n  const provider = new WsProvider('wss://rpc.polkadot.io/');\n  // Create an API instance for Polkadot\n  const api = await ApiPromise.create({ provider });\n  // ...\n")))}m.isMDXComponent=!0}}]);