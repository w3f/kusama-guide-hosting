"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2949],{3905:(e,t,s)=>{s.d(t,{Zo:()=>p,kt:()=>d});var a=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function r(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?r(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,a,n=function(e,t){if(null==e)return{};var s,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)s=r[a],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var s=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(s),m=n,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||r;return s?a.createElement(d,o(o({ref:t},p),{},{components:s})):a.createElement(d,o({ref:t},p))}));function d(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=s.length,o=new Array(r);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var l=2;l<r;l++)o[l]=s[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,s)}m.displayName="MDXCreateElement"},84941:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=s(87462),n=s(63366),r=(s(67294),s(3905)),o=["components"],i={id:"learn-xcm-usecases",title:"XCM Use-cases & Examples",sidebar_label:"XCM Use-cases",description:"Cross-consensus Interactions and the XCM Format.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-usecases"},c=void 0,l={unversionedId:"learn/learn-xcm-usecases",id:"learn/learn-xcm-usecases",title:"XCM Use-cases & Examples",description:"Cross-consensus Interactions and the XCM Format.",source:"@site/../docs/learn/learn-xcm-usecases.md",sourceDirName:"learn",slug:"/learn-xcm-usecases",permalink:"/docs/learn-xcm-usecases",draft:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1688135081,formattedLastUpdatedAt:"Jun 30, 2023",frontMatter:{id:"learn-xcm-usecases",title:"XCM Use-cases & Examples",sidebar_label:"XCM Use-cases",description:"Cross-consensus Interactions and the XCM Format.",keywords:["cross-consensus","XCM","XCMP","interoperability","communication"],slug:"../learn-xcm-usecases"}},p={},u=[{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Asset Teleportation",id:"asset-teleportation",level:3},{value:"Reserve Asset Transfer",id:"reserve-asset-transfer",level:3}],h={toc:u},m="wrapper";function d(e){var t=e.components,i=(0,n.Z)(e,o);return(0,r.kt)(m,(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"XCM has a multitude of use cases. While the wiki covers some of the key commonplace interactions,\nthe XCM format can be used to construct many more combinations to suit the use case at hand."),(0,r.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Request for specific operations to occur on the recipient system such as governance voting."),(0,r.kt)("li",{parentName:"ul"},"Enables single use-case chains e.g. the ",(0,r.kt)("a",{parentName:"li",href:"/docs/learn-guides-assets-create"},"Asset Hub")," as asset\nparachains"),(0,r.kt)("li",{parentName:"ul"},"Optionally include payment of fees on a target network for requested operation."),(0,r.kt)("li",{parentName:"ul"},"Provide methods for various asset transfer models:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Remote Transfers"),": control an account on a remote chain, allowing the local chain to have an\naddress on the remote chain for receiving funds and to eventually transfer those funds it\ncontrols into other accounts on that remote chain."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Asset Teleportation"),": movement of an asset happens by destroying it on one side and creating\na clone on the other side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reserve Asset Transfer"),": there may be two chains that want to nominate a third chain, where\none includes a native asset that can be used as a reserve for that asset. Then, the derivative\nform of the asset on each of those chains would be fully backed, allowing the derivative asset\nto be exchanged for the underlying asset on the reserve chain backing it.")))),(0,r.kt)("p",null,"Let's review two of these example asset transfer use cases: ",(0,r.kt)("strong",{parentName:"p"},"Asset Teleportation")," and ",(0,r.kt)("strong",{parentName:"p"},"Reserve\nAsset Transfer"),"."),(0,r.kt)("h3",{id:"asset-teleportation"},"Asset Teleportation"),(0,r.kt)("p",null,"An asset teleport operation from a single source to a single destination."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Diagram of the usage flow while teleporting assets",src:s(50871).Z,width:"659",height:"304"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#initiateteleport"},"InitiateTeleport"))),(0,r.kt)("p",null,"The source gathers the assets to be teleported from the sending account and takes them out of the\ncirculating supply, taking note of the total amount of assets that was taken out."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#receiveteleportedasset"},"ReceiveTeleportedAsset"))),(0,r.kt)("p",null,"The source then creates an XCM instruction called ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets")," and puts the amount of\nassets taken out of circulation and the receiving account as parameters to this instruction. It then\nsends this instruction over to the destination, where it gets processed and new assets gets put back\ninto circulating supply accordingly."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#depositasset"},"DepositAsset"))),(0,r.kt)("p",null,"The destination then deposits the assets to the receiving account of the asset."),(0,r.kt)("h3",{id:"reserve-asset-transfer"},"Reserve Asset Transfer"),(0,r.kt)("p",null,"When consensus systems do not have a established layer of trust over which they can transfer assets,\nthey can opt for a trusted 3rd entity to store the assets."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"xcm-reserve-asset-transfer",src:s(40826).Z,width:"656",height:"482"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#initiatereservewithdraw"},"InitiateReserveWithdraw"))),(0,r.kt)("p",null,"The source gathers the derivative assets to be transferred from the sending account and burns them,\ntaking note of the amount of derivatives that were burned."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#withdrawasset"},"WithdrawAsset"))),(0,r.kt)("p",null,"The source sends a WithdrawAsset instruction to the reserve, instructing the reserve to withdraw\nassets equivalent to the amount of derivatives burned from the source's sovereign account."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#depositreserveasset"},"DepositReserveAsset"))),(0,r.kt)("p",null,"The reserve deposits the assets withdrawn from the previous step to the destination's sovereign\naccount, taking note of the amount of assets deposited."),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#reserveassetdeposited"},"ReserveAssetDeposited"))),(0,r.kt)("p",null,"The reserve creates a ReserveAssetDeposited instruction with the amount of assets deposited to the\ndestination's sovereign account, and sends this instruction onwards to the destination. The\ndestination receives the instruction and processes it, minting the derivative assets as a result of\nthe process."),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/paritytech/xcm-format#depositasset"},"DepositAsset"))),(0,r.kt)("p",null,"The destination deposits the derivative assets minted to the receiving account."))}d.isMDXComponent=!0},50871:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/xcm-asset-teleportation-fa5ec3787ee0c9bed184c11b95444385.png"},40826:(e,t,s)=>{s.d(t,{Z:()=>a});const a=s.p+"assets/images/xcm-reserve-asset-transfer-daa1c383e969a1b782c40109f70dcfde.png"}}]);