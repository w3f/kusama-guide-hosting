"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3477],{51976:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>a,toc:()=>o});var i=t(74848),r=t(28453);const c={id:"learn-xcm-docs-journey-transact",title:"Transact",sidebar_label:"Transact: A General Solution",description:"The Transact Instruction to Execute XCM Calls.",keywords:["xcm","cross-consensus messaging","transact"],slug:"../journey-transact"},s="Transact",a={id:"learn/xcm/journey/learn-xcm-docs-journey-transact",title:"Transact",description:"The Transact Instruction to Execute XCM Calls.",source:"@site/../docs/learn/xcm/journey/transact.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-transact",permalink:"/docs/learn/xcm/journey-transact",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:17012725e5,frontMatter:{id:"learn-xcm-docs-journey-transact",title:"Transact",sidebar_label:"Transact: A General Solution",description:"The Transact Instruction to Execute XCM Calls.",keywords:["xcm","cross-consensus messaging","transact"],slug:"../journey-transact"},sidebar:"docs",previous:{title:"Fee Handling",permalink:"/docs/learn/xcm/journey-fees"},next:{title:"Origin Manipulation",permalink:"/docs/learn/xcm/journey-origin"}},l={},o=[{value:"XCM Executor",id:"xcm-executor",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Next:",id:"next",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"transact",children:"Transact"})}),"\n",(0,i.jsxs)(n.p,{children:["XCM contains an instruction that allows for the execution of calls (from a ",(0,i.jsx)(n.code,{children:"RuntimeCall"})," in a\nFRAME-based system, to a smart contract function call in an EVM-based system) in a consensus system.\nIt is the ",(0,i.jsx)(n.code,{children:"Transact"})," instruction and it looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"Transact {\n    origin_kind: OriginKind,\n    require_weight_at_most: Weight,\n    call: DoubleEncoded<Call>\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The Transact instruction has three fields. The ",(0,i.jsx)(n.code,{children:"origin_kind"})," is of type\n",(0,i.jsx)(n.a,{href:"https://paritytech.github.io/polkadot/doc/xcm/v2/enum.OriginKind.html",children:"OriginKind"})," and specifies\nhow the origin of the call should be interpreted. In the xcm-executor, the ",(0,i.jsx)(n.code,{children:"origin_kind"})," is used to\ndetermine how to convert a ",(0,i.jsx)(n.code,{children:"MultiLocation"})," origin into a ",(0,i.jsx)(n.code,{children:"RuntimeOrigin"}),". For more information,\ncheck out the ",(0,i.jsx)(n.a,{href:"/docs/learn/xcm/config-deep-dive",children:"xcm-executor config docs"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"require_weight_at_most"})," field tells the XCVM executing the call how much\n",(0,i.jsx)(n.a,{href:"/docs/learn/xcm/fundamentals-fees",children:"weight"})," it can use. If the call uses more weight than the\nspecified ",(0,i.jsx)(n.code,{children:"require_weight_at_most"}),", the execution of the call fails."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"call"})," field is of type ",(0,i.jsx)(n.code,{children:"DoubleEncoded<Call>"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub struct DoubleEncoded<T> {\n    encoded: Vec<u8>,\n    #[codec(skip)]\n    decoded: Option<T>,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["XCM is consensus system agnostic; it does not know what is being encoded in the call field. Hence,\nthe field is a byte vector that can be freely interpreted in whatever form possible. However, the\nXCVM does not inherently know how to interpret this call field nor how to decode it; it is reliant\non the ",(0,i.jsx)(n.code,{children:"T"})," type parameter to specify the proper codec for the byte vector. Instead of just using a\n",(0,i.jsx)(n.code,{children:"Vec<u8>"})," we use ",(0,i.jsx)(n.code,{children:"DoubleEncoded"})," as a wrapper around a pre-encoded call (",(0,i.jsx)(n.code,{children:"Vec<u8>"}),") with extra\nfunctionalities such as caching of the decoded value. We like to emphasize that the call in the\n",(0,i.jsx)(n.code,{children:"Transact"})," instruction can be anything from a ",(0,i.jsx)(n.code,{children:"RuntimeCall"})," in a FRAME-based system, to a smart\ncontract function call in an EVM-based system."]}),"\n",(0,i.jsxs)(n.p,{children:["Each XCVM has a Transact Status Register, to record the execution result of the call that is\ndispatched by the ",(0,i.jsx)(n.code,{children:"Transact"})," instruction. ",(0,i.jsx)(n.em,{children:"Important note:"})," The execution of the XCM instruction\ndoes ",(0,i.jsx)(n.em,{children:"not"})," error when the dispatched call errors."]}),"\n",(0,i.jsxs)(n.p,{children:["The status is described by the ",(0,i.jsx)(n.code,{children:"MaybeErrorCode"})," enum, and can either be a Success, Error or\nTruncatedError if the length of the error exceeds the MaxDispatchErrorLen. For pallet-based calls,\nthe Error is represented as the scale encoded ",(0,i.jsx)(n.code,{children:"Error"})," enum of the called pallet."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"ExpectTransactStatus(MaybeErrorCode)\n\npub enum MaybeErrorCode {\n\tSuccess,\n\tError(BoundedVec<u8, MaxDispatchErrorLen>),\n\tTruncatedError(BoundedVec<u8, MaxDispatchErrorLen>),\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"xcm-executor",children:"XCM Executor"}),"\n",(0,i.jsxs)(n.p,{children:["In this section, we quickly look at how the XCM executor executes the ",(0,i.jsx)(n.code,{children:"Transact"})," instruction."]}),"\n",(0,i.jsx)(n.p,{children:"It executes, among other things, the following steps:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Decode the call field into the actual call that we want to dispatch."}),"\n",(0,i.jsxs)(n.li,{children:["Check with the ",(0,i.jsx)(n.a,{href:"/docs/learn/xcm/config-deep-dive#safecallfilter",children:"SafeCallFilter"})," on whether the\nexecution of this call is allowed."]}),"\n",(0,i.jsxs)(n.li,{children:["Use the ",(0,i.jsx)(n.a,{href:"/docs/learn/xcm/config-deep-dive#originconverter",children:"OriginConverter"})," to convert the\n",(0,i.jsx)(n.code,{children:"MultiLocation"})," origin into a ",(0,i.jsx)(n.code,{children:"RuntimeOrigin"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Check whether the call weight does not exceed ",(0,i.jsx)(n.code,{children:"require_weight_at_most"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Dispatch the call with the converted origin and set the ",(0,i.jsx)(n.code,{children:"transact_status"})," register to be the\nresult of the dispatch."]}),"\n",(0,i.jsx)(n.li,{children:"Calculate the weight that was actually used during the dispatch."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["For the full example, check ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"the repo"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the relay chain executes the ",(0,i.jsx)(n.code,{children:"set_balance"})," function of ",(0,i.jsx)(n.code,{children:"pallet_balances"})," on\n",(0,i.jsx)(n.code,{children:"Parachain(1)"}),". This function requires the origin to be root. We enable the root origin for the\nrelay chain by setting ",(0,i.jsx)(n.code,{children:"ParentAsSuperuser"})," for the ",(0,i.jsx)(n.code,{children:"OriginConverter"})," config type."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"let call = parachain::RuntimeCall::Balances(\n    pallet_balances::Call::<parachain::Runtime>::set_balance {\n        who: ALICE,\n        new_free: 5 * AMOUNT,\n        new_reserved: 0,\n    },\n);\n\nlet message = Xcm(vec![\n    WithdrawAsset((Here, AMOUNT).into()),\n    BuyExecution { fees: (Here, AMOUNT).into(), weight_limit: WeightLimit::Unlimited },\n    Transact {\n        origin_kind: OriginKind::Superuser,\n        require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n        call: call.encode().into(),\n    },\n]);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["For the full example, check ",(0,i.jsx)(n.a,{href:"https://github.com/paritytech/xcm-docs/tree/main/examples",children:"the repo"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In this example, as Parachain(1), we create an NFT collection on the relay chain and we then mint an\nNFT with ID 1. The admin for the nft collection is parachain(1). The call looks as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"let create_collection = relay_chain::RuntimeCall::Uniques(\n    pallet_uniques::Call::<relay_chain::Runtime>::create {\n        collection: 1u32,\n        admin: parachain_sovereign_account_id(1),\n    }\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The owner of the NFT is Alice. The nft mint call looks as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"let mint = relay_chain::RuntimeCall::Uniques(\n    pallet_uniques::Call::<relay_chain::Runtime>::mint {\n        collection: 1u32,\n        item: 1u32,\n        owner: ALICE,\n    }\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"The xcm message contains the following instructions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Withdraw native assets from the ",(0,i.jsx)(n.code,{children:"Parachain(1)"}),"'s sovereign account."]}),"\n",(0,i.jsx)(n.li,{children:"Buy weight with these assets."}),"\n",(0,i.jsxs)(n.li,{children:["Create a collection with as admin and owner the sovereign account of ",(0,i.jsx)(n.code,{children:"Parachain(1)"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Mints an NFT in the collection with item ID 1 and as owner Alice."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"let message = Xcm(vec![\n    WithdrawAsset((Here, AMOUNT).into()),\n    BuyExecution { fees: (Here, AMOUNT).into(), weight_limit: WeightLimit::Unlimited },\n    Transact {\n        origin_kind: OriginKind::SovereignAccount,\n        require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n        call: create_collection.encode().into(),\n    },\n    Transact {\n        origin_kind: OriginKind::SovereignAccount,\n        require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n        call: mint.encode().into(),\n    },\n]);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"next",children:"Next:"}),"\n",(0,i.jsx)(n.p,{children:"Check out the following instructions that interact with the Transact Status Register:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/learn/xcm/journey-register#cleartransactstatus",children:"ClearTransactStatus"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/learn/xcm/journey-queries#reporttransactstatus",children:"ReportTransactStatus"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/learn/xcm/journey-expectations#expecttransactstatus",children:"ExpectTransactStatus"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const r={},c=i.createContext(r);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);