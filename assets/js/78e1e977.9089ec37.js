"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5884],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>h});var r=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),g=c(t),u=i,h=g["".concat(l,".").concat(u)]||g[u]||d[u]||a;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=u;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[g]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},38627:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>g});var r=t(58168),i=t(98587),a=(t(96540),t(15680)),s=["components"],o={id:"learn-xcm-docs-journey-holding",title:"More Holding Modifiers",sidebar_label:"More Holding Modifiers",description:"More Instructions to Alter the Holding Register.",keywords:["xcm","cross-consensus messaging","transfers","holding"],slug:"../journey-holding"},l="Holding Register Modifiers",c={unversionedId:"learn/xcm/journey/learn-xcm-docs-journey-holding",id:"learn/xcm/journey/learn-xcm-docs-journey-holding",title:"More Holding Modifiers",description:"More Instructions to Alter the Holding Register.",source:"@site/../docs/learn/xcm/journey/holding-modifiers.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-holding",permalink:"/docs/learn/xcm/journey-holding",draft:!1,tags:[],version:"current",lastUpdatedBy:"divdeploy",lastUpdatedAt:1712340071,formattedLastUpdatedAt:"Apr 5, 2024",frontMatter:{id:"learn-xcm-docs-journey-holding",title:"More Holding Modifiers",sidebar_label:"More Holding Modifiers",description:"More Instructions to Alter the Holding Register.",keywords:["xcm","cross-consensus messaging","transfers","holding"],slug:"../journey-holding"},sidebar:"docs",previous:{title:"More Register Modifiers",permalink:"/docs/learn/xcm/journey-register"},next:{title:"Trap and Claim Assets",permalink:"/docs/learn/xcm/journey-assets"}},p={},g=[{value:"BurnAsset",id:"burnasset",level:2},{value:"Example",id:"example",level:3},{value:"ExchangeAsset",id:"exchangeasset",level:2},{value:"Example",id:"example-1",level:3}],d={toc:g},u="wrapper";function h(e){var n=e.components,t=(0,i.A)(e,s);return(0,a.yg)(u,(0,r.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"holding-register-modifiers"},"Holding Register Modifiers"),(0,a.yg)("p",null,"Most of the XCM instructions alter the Holding Register. We already have seen instructions that\nalter the Holding Register, like the ",(0,a.yg)("inlineCode",{parentName:"p"},"WithdrawAsset")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"DepositAsset")," instructions. In this chapter\nwe go over more instructions that alter the holding register, namely:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"BurnAsset"),(0,a.yg)("li",{parentName:"ul"},"ExchangeAsset")),(0,a.yg)("h2",{id:"burnasset"},"BurnAsset"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"BurnAsset(MultiAssets)\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"BurnAsset")," instruction allows for the reduction of assets in the Holding Register by up to the\nspecified assets. The execution of the instruction does not throw an error if the Holding Register\ndoes not contain the assets (to make this an error, use ",(0,a.yg)("inlineCode",{parentName:"p"},"ExpectAsset")," prior)."),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("p",null,"For the full example, check ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"the repo"),".\nThe Scenario of the example is as follows: Parachain A withdraws 10 units from its sovereign account\non the relay chain and burns 4 of them. The relay chain then reports back the status of the Holding\nRegister to Parachain A. We expect the Holding Register to hold 6 units. Note: If we would have\nadded more then 10 units worth of assets in the ",(0,a.yg)("inlineCode",{parentName:"p"},"BurnAsset")," instruction, we would have burned all\nassets in the Holding Register and the execution would succeed."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let message = Xcm(vec![\n    WithdrawAsset((Here, 10 * CENTS).into()),\n    BuyExecution { fees: (Here, CENTS).into(), weight_limit: WeightLimit::Unlimited },\n    BurnAsset((Here, 4 * CENTS).into()),\n    ReportHolding {\n        response_info: QueryResponseInfo {\n            destination: Parachain(1).into(),\n            query_id: QUERY_ID,\n            max_weight: Weight::from_parts(1_000_000_000, 64*64) },\n        assets: All.into()\n    }\n]);\n")),(0,a.yg)("p",null,"We expect the following response:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"Response::Assets((Parent, 6 * CENTS).into())\n")),(0,a.yg)("h2",{id:"exchangeasset"},"ExchangeAsset"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"ExchangeAsset { give: MultiAssetFilter, want: MultiAssets, maximal: bool }\n")),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"ExchangeAsset")," instruction allows us to remove asset(s) (",(0,a.yg)("inlineCode",{parentName:"p"},"give"),") from the Holding Register and\nreplace them with alternative assets (",(0,a.yg)("inlineCode",{parentName:"p"},"want"),"). The ",(0,a.yg)("inlineCode",{parentName:"p"},"ExchangeAsset")," instruction has three fields."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"give")," field indicates the maximum number of assets that can be removed from the Holding\nregister."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"want")," field indicates the minimum amount of assets which ",(0,a.yg)("inlineCode",{parentName:"p"},"give")," should be exchanged for. We\nshould at a minimum get the assets in ",(0,a.yg)("inlineCode",{parentName:"p"},"want")," for the execution of the instruction not to fail."),(0,a.yg)("p",null,"If the ",(0,a.yg)("inlineCode",{parentName:"p"},"maximal")," field is ",(0,a.yg)("inlineCode",{parentName:"p"},"true"),", then we prefer to give as much as possible up to the limit of\n",(0,a.yg)("inlineCode",{parentName:"p"},"give")," and receive accordingly more assets then stated in ",(0,a.yg)("inlineCode",{parentName:"p"},"want"),". If the ",(0,a.yg)("inlineCode",{parentName:"p"},"maximal")," field is ",(0,a.yg)("inlineCode",{parentName:"p"},"false"),",\nthen we prefer to give as little as possible in order to receive as little as possible while\nreceiving at least ",(0,a.yg)("inlineCode",{parentName:"p"},"want"),"."),(0,a.yg)("h3",{id:"example-1"},"Example"),(0,a.yg)("p",null,"The full example can be found in\n",(0,a.yg)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"the repo"),"."),(0,a.yg)("p",null,"The scenario for the example is this: Scenario: The relay chain sends an XCM to Parachain A that: .1\nWithdraws some native assets .2 Exchanges these assets for relay chain derivative tokens, with\nmaximal set to true. .3 Deposit all the assets that are in the Holding in the account of Alice."),(0,a.yg)("p",null,"NOTE: The implementation of the AssetExchanger is simple and in this case swaps all the assets in\nthe exchange for the assets in ",(0,a.yg)("inlineCode",{parentName:"p"},"give"),". Depending on the implementation of AssetExchanger, the test\nresults could differ."),(0,a.yg)("p",null,"The Assets in the exchange in Parachain(1). This is a custom exchange implementation just for\ntesting purposes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let assets_in_exchange = vec![(Parent, 10 * CENTS).into()];\nparachain::set_exchange_assets(assets_in_exchange);\n")),(0,a.yg)("p",null,"The message that is send:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-rust"},"let message = Xcm(vec![\n    WithdrawAsset((Here, 10 * CENTS).into()),\n    BuyExecution { fees: (Here, CENTS).into(), weight_limit: WeightLimit::Unlimited },\n    // Maximal field set to true.\n    ExchangeAsset {\n        give: Definite((Here, 5 * CENTS).into()),\n        want: (Parent, 5 * CENTS).into(),\n        maximal: true,\n    },\n    DepositAsset {\n        assets: AllCounted(2).into(),\n        beneficiary: AccountId32 {\n            network: Some(parachain::RelayNetwork::get()),\n            id: ALICE.into(),\n        }\n        .into(),\n    },\n]);\n")),(0,a.yg)("p",null,"Alice receives ",(0,a.yg)("inlineCode",{parentName:"p"},"5 CENTS")," worth of native assets (",(0,a.yg)("inlineCode",{parentName:"p"},"Here"),") and ",(0,a.yg)("inlineCode",{parentName:"p"},"5 CENTS")," worth of relay chain\nderivative assets (",(0,a.yg)("inlineCode",{parentName:"p"},"Parent"),")."))}h.isMDXComponent=!0}}]);