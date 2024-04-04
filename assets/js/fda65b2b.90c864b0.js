"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1975],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?o.createElement(f,r(r({ref:t},d),{},{components:n})):o.createElement(f,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30742:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var o=n(87462),i=n(63366),a=(n(67294),n(3905)),r=["components"],s={id:"learn-guides-asset-conversion",title:"Asset Conversion Tutorials",sidebar_label:"Asset Conversion Tutorials",description:"Asset Conversion implementation details on AssetHub.",keywords:["Assets","DEX","Exchange","Pools","Tokens"],slug:"../learn-guides-asset-conversion"},l=void 0,u={unversionedId:"learn/learn-guides-asset-conversion",id:"learn/learn-guides-asset-conversion",title:"Asset Conversion Tutorials",description:"Asset Conversion implementation details on AssetHub.",source:"@site/../docs/learn/learn-guides-asset-conversion.md",sourceDirName:"learn",slug:"/learn-guides-asset-conversion",permalink:"/docs/learn-guides-asset-conversion",draft:!1,tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1712137372,formattedLastUpdatedAt:"Apr 3, 2024",frontMatter:{id:"learn-guides-asset-conversion",title:"Asset Conversion Tutorials",sidebar_label:"Asset Conversion Tutorials",description:"Asset Conversion implementation details on AssetHub.",keywords:["Assets","DEX","Exchange","Pools","Tokens"],slug:"../learn-guides-asset-conversion"}},d={},p=[{value:"Create a Liquidity Pool",id:"create-a-liquidity-pool",level:2},{value:"Liquidity Provision",id:"liquidity-provision",level:2},{value:"Withdraw Provided Liquidity",id:"withdraw-provided-liquidity",level:2},{value:"Swap Assets",id:"swap-assets",level:2},{value:"Swap from an exact amount of Tokens",id:"swap-from-an-exact-amount-of-tokens",level:3},{value:"Swap to an exact amount of Tokens",id:"swap-to-an-exact-amount-of-tokens",level:3}],c={toc:p},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"sticky",style:{zIndex:1}},(0,a.kt)("br",null),(0,a.kt)("p",null,"Polkadot-JS is for developers and power users only. If you need help using the\n",(0,a.kt)("a",{parentName:"p",href:"/docs/polkadotjs-ui"},"Polkadot-JS UI"),", you can contact the\n",(0,a.kt)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},"Polkadot Support Team"),". For more user-friendly tools\nsee the ",(0,a.kt)("a",{parentName:"p",href:"./wallets-index"},"wallets"),", ",(0,a.kt)("a",{parentName:"p",href:"./apps-index"},"apps")," and ",(0,a.kt)("a",{parentName:"p",href:"./dashboards-index"},"dashboard")," pages.")),(0,a.kt)("h2",{id:"create-a-liquidity-pool"},"Create a Liquidity Pool"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"create_pool")," function is used to create an empty liquidity pool along with a new ",(0,a.kt)("inlineCode",{parentName:"p"},"lp_token"),"\nasset. This asset's ID is announced in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Event::PoolCreated")," event. After creating a pool,\nliquidity can be added to it via the ",(0,a.kt)("inlineCode",{parentName:"p"},"Pallet::add_liquidity")," function."),(0,a.kt)("h2",{id:"liquidity-provision"},"Liquidity Provision"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"add_liquidity")," function allows users to provide liquidity to a pool composed of two assets. It\nrequires specifying the desired amounts for both assets and minimum acceptable amounts. The function\ncalculates an optimal contribution of assets, which may differ from the desired amounts but will not\nbe less than the specified minimums. Liquidity providers receive liquidity tokens representing their\nshare of the pool."),(0,a.kt)("h2",{id:"withdraw-provided-liquidity"},"Withdraw Provided Liquidity"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"remove_liquidity")," function allows users to withdraw their provided liquidity from a pool,\nreceiving back the original assets. When calling this function, users specify the amount of\nliquidity tokens (representing their share in the pool) they wish to burn. They also set minimum\nacceptable amounts for the assets they expect to receive back. This mechanism ensures users can\ncontrol the minimum value they receive, protecting against unfavourable price movements during the\nwithdrawal process\u200b."),(0,a.kt)("h2",{id:"swap-assets"},"Swap Assets"),(0,a.kt)("h3",{id:"swap-from-an-exact-amount-of-tokens"},"Swap from an exact amount of Tokens"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"swap_exact_tokens_for_tokens")," function allows users to swap a precise amount of one asset for\nanother within a specified liquidity pool, ensuring the user receives at least a minimum expected\namount of the second asset in return. This function aims to provide predictability in trading\noutcomes, allowing users to manage their asset exchanges with confidence regarding the minimum\nreturn."),(0,a.kt)("h3",{id:"swap-to-an-exact-amount-of-tokens"},"Swap to an exact amount of Tokens"),(0,a.kt)("p",null,"On the other hand, the ",(0,a.kt)("inlineCode",{parentName:"p"},"swap_tokens_for_exact_tokens")," function allows users to trade a flexible\namount of one asset to precisely obtain a specified amount of another asset. It ensures that users\ndo not spend more than a predetermined maximum amount of the initial asset to acquire the exact\ntarget amount of the second asset, providing a way to control the cost of the transaction while\nachieving the desired outcome."))}f.isMDXComponent=!0}}]);