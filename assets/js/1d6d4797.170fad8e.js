"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(d,o(o({ref:t},u),{},{components:n})):a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"learn-xcm-docs-journey-transact",title:"Transact",sidebar_label:"Transact: A General Solution",description:"The Transact Instruction to Execute XCM Calls.",keywords:["xcm","cross-consensus messaging","transact"],slug:"../journey-transact"},c="Transact",s={unversionedId:"learn/xcm/journey/learn-xcm-docs-journey-transact",id:"learn/xcm/journey/learn-xcm-docs-journey-transact",title:"Transact",description:"The Transact Instruction to Execute XCM Calls.",source:"@site/../docs/learn/xcm/journey/transact.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-transact",permalink:"/docs/learn/xcm/journey-transact",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-journey-transact",title:"Transact",sidebar_label:"Transact: A General Solution",description:"The Transact Instruction to Execute XCM Calls.",keywords:["xcm","cross-consensus messaging","transact"],slug:"../journey-transact"}},u={},p=[{value:"XCM Executor",id:"xcm-executor",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Next:",id:"next",level:2}],h={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"transact"},"Transact"),(0,i.kt)("p",null,"XCM contains an instruction that allows for the execution of calls (from a ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeCall")," in a\nFRAME-based system, to a smart contract function call in an EVM-based system) in a consensus system.\nIt is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transact")," instruction and it looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"Transact {\n    origin_kind: OriginKind,\n    require_weight_at_most: Weight,\n    call: DoubleEncoded<Call>\n}\n")),(0,i.kt)("p",null,"The Transact instruction has three fields. The ",(0,i.kt)("inlineCode",{parentName:"p"},"origin_kind")," is of type\n",(0,i.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/doc/xcm/v2/enum.OriginKind.html"},"OriginKind")," and specifies\nhow the origin of the call should be interpreted. In the xcm-executor, the ",(0,i.kt)("inlineCode",{parentName:"p"},"origin_kind")," is used to\ndetermine how to convert a ",(0,i.kt)("inlineCode",{parentName:"p"},"MultiLocation")," origin into a ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeOrigin"),". For more information,\ncheck out the ",(0,i.kt)("a",{parentName:"p",href:"../executor_config/index.html"},"xcm-executor config docs"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"require_weight_at_most")," field tells the XCVM executing the call how much\n",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-fees"},"weight")," it can use. If the call uses more weight than the\nspecified ",(0,i.kt)("inlineCode",{parentName:"p"},"require_weight_at_most"),", the execution of the call fails."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"call")," field is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"DoubleEncoded<Call>"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct DoubleEncoded<T> {\n    encoded: Vec<u8>,\n    #[codec(skip)]\n    decoded: Option<T>,\n}\n")),(0,i.kt)("p",null,"XCM is consensus system agnostic; it does not know what is being encoded in the call field. Hence,\nthe field is a byte vector that can be freely interpreted in whatever form possible. However, the\nXCVM does not inherently know how to interpret this call field nor how to decode it; it is reliant\non the ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," type parameter to specify the proper codec for the byte vector. Instead of just using a\n",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<u8>")," we use ",(0,i.kt)("inlineCode",{parentName:"p"},"DoubleEncoded")," as a wrapper around a pre-encoded call (",(0,i.kt)("inlineCode",{parentName:"p"},"Vec<u8>"),") with extra\nfunctionalities such as caching of the decoded value. We like to emphasize that the call in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"Transact")," instruction can be anything from a ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeCall")," in a FRAME-based system, to a smart\ncontract function call in an EVM-based system."),(0,i.kt)("p",null,"Each XCVM has a Transact Status Register, to record the execution result of the call that is\ndispatched by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transact")," instruction. ",(0,i.kt)("em",{parentName:"p"},"Important note:")," The execution of the XCM instruction\ndoes ",(0,i.kt)("em",{parentName:"p"},"not")," error when the dispatched call errors."),(0,i.kt)("p",null,"The status is described by the ",(0,i.kt)("inlineCode",{parentName:"p"},"MaybeErrorCode")," enum, and can either be a Success, Error or\nTruncatedError if the length of the error exceeds the MaxDispatchErrorLen. For pallet-based calls,\nthe Error is represented as the scale encoded ",(0,i.kt)("inlineCode",{parentName:"p"},"Error")," enum of the called pallet."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ExpectTransactStatus(MaybeErrorCode)\n\npub enum MaybeErrorCode {\n    Success,\n    Error(BoundedVec<u8, MaxDispatchErrorLen>),\n    TruncatedError(BoundedVec<u8, MaxDispatchErrorLen>),\n}\n")),(0,i.kt)("h2",{id:"xcm-executor"},"XCM Executor"),(0,i.kt)("p",null,"In this section, we quickly look at how the XCM executor executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transact")," instruction."),(0,i.kt)("p",null,"It executes, among other things, the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Decode the call field into the actual call that we want to dispatch."),(0,i.kt)("li",{parentName:"ol"},"Check with the ",(0,i.kt)("a",{parentName:"li",href:"../executor_config/index.html#safecallfilter"},"SafeCallFilter")," on whether the\nexecution of this call is allowed."),(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"../executor_config/index.html#originconverter"},"OriginConverter")," to convert the\n",(0,i.kt)("inlineCode",{parentName:"li"},"MultiLocation")," origin into a ",(0,i.kt)("inlineCode",{parentName:"li"},"RuntimeOrigin"),"."),(0,i.kt)("li",{parentName:"ol"},"Check whether the call weight does not exceed ",(0,i.kt)("inlineCode",{parentName:"li"},"require_weight_at_most"),"."),(0,i.kt)("li",{parentName:"ol"},"Dispatch the call with the converted origin and set the ",(0,i.kt)("inlineCode",{parentName:"li"},"transact_status")," register to be the\nresult of the dispatch."),(0,i.kt)("li",{parentName:"ol"},"Calculate the weight that was actually used during the dispatch.")),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"the repo"),"."),(0,i.kt)("p",null,"In this example, the relay chain executes the ",(0,i.kt)("inlineCode",{parentName:"p"},"set_balance")," function of ",(0,i.kt)("inlineCode",{parentName:"p"},"pallet_balances")," on\n",(0,i.kt)("inlineCode",{parentName:"p"},"Parachain(1)"),". This function requires the origin to be root. We enable the root origin for the\nrelay chain by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"ParentAsSuperuser")," for the ",(0,i.kt)("inlineCode",{parentName:"p"},"OriginConverter")," config type."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let call = parachain::RuntimeCall::Balances(\n    pallet_balances::Call::<parachain::Runtime>::set_balance {\n        who: ALICE,\n        new_free: 5 * AMOUNT,\n        new_reserved: 0,\n    },\n);\n\nlet message = Xcm(vec![\n    WithdrawAsset((Here, AMOUNT).into()),\n    BuyExecution { fees: (Here, AMOUNT).into(), weight_limit: WeightLimit::Unlimited },\n    Transact {\n        origin_kind: OriginKind::Superuser,\n        require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n        call: call.encode().into(),\n    },\n]);\n")),(0,i.kt)("h2",{id:"example-2"},"Example 2"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"the repo"),"."),(0,i.kt)("p",null,"In this example, as Parachain(1), we create an NFT collection on the relay chain and we then mint an\nNFT with ID 1. The admin for the nft collection is parachain(1). The call looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let create_collection = relay_chain::RuntimeCall::Uniques(\n    pallet_uniques::Call::<relay_chain::Runtime>::create {\n        collection: 1u32,\n        admin: parachain_sovereign_account_id(1),\n    }\n);\n")),(0,i.kt)("p",null,"The owner of the NFT is Alice. The nft mint call looks as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let mint = relay_chain::RuntimeCall::Uniques(\n    pallet_uniques::Call::<relay_chain::Runtime>::mint {\n        collection: 1u32,\n        item: 1u32,\n        owner: ALICE,\n    }\n);\n")),(0,i.kt)("p",null,"The xcm message contains the following instructions:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Withdraw native assets from the ",(0,i.kt)("inlineCode",{parentName:"li"},"Parachain(1)"),"'s sovereign account."),(0,i.kt)("li",{parentName:"ol"},"Buy weight with these assets."),(0,i.kt)("li",{parentName:"ol"},"Create a collection with as admin and owner the sovereign account of ",(0,i.kt)("inlineCode",{parentName:"li"},"Parachain(1)"),"."),(0,i.kt)("li",{parentName:"ol"},"Mints an NFT in the collection with item ID 1 and as owner Alice.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let message = Xcm(vec![\n    WithdrawAsset((Here, AMOUNT).into()),\n    BuyExecution { fees: (Here, AMOUNT).into(), weight_limit: WeightLimit::Unlimited },\n    Transact {\n        origin_kind: OriginKind::SovereignAccount,\n        require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n        call: create_collection.encode().into(),\n    },\n    Transact {\n        origin_kind: OriginKind::SovereignAccount,\n        require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n        call: mint.encode().into(),\n    },\n]);\n")),(0,i.kt)("h2",{id:"next"},"Next:"),(0,i.kt)("p",null,"Check out the following instructions that interact with the Transact Status Register:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn/xcm/journey-register#cleartransactstatus"},"ClearTransactStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn/xcm/journey-queries#reporttransactstatus"},"ReportTransactStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/learn/xcm/journey-expectations#expecttransactstatus"},"ExpectTransactStatus"))))}d.isMDXComponent=!0}}]);