"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2950],{11193:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=t(74848),i=t(28453);const l={id:"learn-xcm-docs-fundamentals-multiasset",title:"MultiAsset",sidebar_label:"MultiAsset",description:"The MultiAsset Datatype.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../fundamentals-multiasset"},a="MultiAsset",r={id:"learn/xcm/fundamentals/learn-xcm-docs-fundamentals-multiasset",title:"MultiAsset",description:"The MultiAsset Datatype.",source:"@site/../docs/learn/xcm/fundamentals/multiasset.md",sourceDirName:"learn/xcm/fundamentals",slug:"/learn/xcm/fundamentals-multiasset",permalink:"/docs/learn/xcm/fundamentals-multiasset",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726730833e3,frontMatter:{id:"learn-xcm-docs-fundamentals-multiasset",title:"MultiAsset",sidebar_label:"MultiAsset",description:"The MultiAsset Datatype.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../fundamentals-multiasset"},sidebar:"docs",previous:{title:"Example",permalink:"/docs/learn/xcm/fundamentals/multilocation-example"},next:{title:"XCVM",permalink:"/docs/learn/xcm/fundamentals-xcvm"}},o={},d=[{value:"MultiAsset Breakdown",id:"multiasset-breakdown",level:2},{value:"How to use Multiple Assets Together?",id:"how-to-use-multiple-assets-together",level:2},{value:"MultiAssets",id:"multiassets",level:3},{value:"WildMultiAsset",id:"wildmultiasset",level:3},{value:"MultiAssetFilter",id:"multiassetfilter",level:3},{value:"Examples",id:"examples",level:2},{value:"MultiAsset",id:"multiasset-1",level:3},{value:"MultiAssetFilter",id:"multiassetfilter-1",level:3}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"multiasset",children:"MultiAsset"})}),"\n",(0,n.jsx)(s.p,{children:"When working with XCM, it is often needed to represent an asset of some sort. This is because\npractically all public blockchains in existence rely on some native digital asset to provide the\nbackbone for its internal economy and security mechanism. For example, the native asset for the\nPolkadot relay chain is DOT."}),"\n",(0,n.jsx)(s.p,{children:"Some blockchains manage multiple assets, e.g. Ethereum\u2019s ERC-20 framework allows for many different\nassets to be managed on-chain. Some manage assets that are not fungible, such as Ethereum\u2019s\nCrypto-kitties \u2014 each kitty is a one-of-a-kind instance. It was an early example of such\nnon-fungible tokens or NFTs."}),"\n",(0,n.jsxs)(s.p,{children:["XCM is designed to be able to describe all such assets without breaking a sweat. For this purpose,\nthere is the ",(0,n.jsx)(s.code,{children:"MultiAsset"})," datatype, along with its related types ",(0,n.jsx)(s.code,{children:"MultiAssets"}),", ",(0,n.jsx)(s.code,{children:"WildMultiAsset"}),",\nand ",(0,n.jsx)(s.code,{children:"MultiAssetFilter"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"multiasset-breakdown",children:"MultiAsset Breakdown"}),"\n",(0,n.jsx)(s.p,{children:"Let's take a look at the MultiAsset struct:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"pub struct MultiAsset {\n    pub id: AssetId,\n    pub fun: Fungibility,\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"So two fields define our asset: id and fun. These fields are indicative of how XCM approaches\nassets. Firstly, an overall asset identity must be provided. For fungible assets, this is simply a\nsymbol that identifies the asset. For NFTs this identifies the overall asset \u201cclass\u201d \u2014 different\nasset instances may be within this class."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"enum AssetId {\n   Concrete(MultiLocation),\n   Abstract([u8; 32]),\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The asset identity is expressed in one of two ways; either Concrete or Abstract. Abstract identities\nallow assets to be specified by a 32-byte blob. This is convenient, but it relies on the receiver to\ninterpret the blob in the way that the sender expects, which will require a common definition\nbetween the sender and the receiver, and may not be simple to achieve. Concrete identities use a\n",(0,n.jsx)(s.code,{children:"MultiLocation"})," to identify an asset unambiguously. For native assets (such as DOT), the asset is\nidentified as the chain which mints the asset (the Polkadot relay chain in this case, which would be\nthe location ",(0,n.jsx)(s.code,{children:".."})," from one of its parachains). Other assets (e.g. non-native assets or NFTs) can be\nidentified by a ",(0,n.jsx)(s.code,{children:"GeneralIndex"})," junction. Depending on the implementation of the encapsulating\nconsensus system, the exact location may differ (e.g. ",(0,n.jsx)(s.code,{children:"GeneralIndex(AssetID)"})," or\n",(0,n.jsx)(s.code,{children:"PalletInstance(PalletID)/GeneralIndex(AssetID)"})," can both be valid asset identities)."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"enum Fungibility {\n   // Fungible cannot be 0\n   Fungible(u128),\n   NonFungible(AssetInstance),\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Secondly, they must be either fungible or non-fungible. If they\u2019re fungible, then there should be\nsome associated non-zero amount of assets specified. If they\u2019re not fungible, then instead of an\namount, there should be some indication of which\n",(0,n.jsx)(s.a,{href:"https://paritytech.github.io/polkadot/doc/xcm/v3/enum.AssetInstance.html",children:"AssetInstance"})," they are.\n(This is commonly expressed with an index, but XCM also allows arrays.)"]}),"\n",(0,n.jsx)(s.h2,{id:"how-to-use-multiple-assets-together",children:"How to use Multiple Assets Together?"}),"\n",(0,n.jsx)(s.p,{children:"There are multiple ways to group Assets. In this section, we go over these methods."}),"\n",(0,n.jsx)(s.h3,{id:"multiassets",children:"MultiAssets"}),"\n",(0,n.jsxs)(s.p,{children:["One way to group a set of ",(0,n.jsx)(s.code,{children:"MultiAsset"})," items is the\n",(0,n.jsx)(s.a,{href:"https://paritytech.github.io/polkadot/doc/xcm/v3/struct.MultiAssets.html",children:"MultiAssets"})," type."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"struct MultiAssets(Vec<MultiAsset>);\n"})}),"\n",(0,n.jsx)(s.p,{children:"This structure must uphold some rules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["It may not contain duplicate ",(0,n.jsx)(s.code,{children:"MultiAsset"}),"s (",(0,n.jsx)(s.code,{children:"Fungible"})," assets are considered the same if their IDs\nmatch. However, ",(0,n.jsx)(s.code,{children:"NonFungible"})," assets are different if the ",(0,n.jsx)(s.code,{children:"AssetInstance"})," is different);"]}),"\n",(0,n.jsx)(s.li,{children:"All items must be ordered;"}),"\n",(0,n.jsx)(s.li,{children:"The number of items should grow no larger than MAX_ITEMS_IN_MULTIASSETS (currently set to 20)."}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"wildmultiasset",children:"WildMultiAsset"}),"\n",(0,n.jsxs)(s.p,{children:["Then we have WildMultiAsset; this is a wildcard that can be used to match against one or more\nMultiAsset items. All the WildMultiAsset wildcards can be used to select/filter assets in the\n",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/overview-xcvm",children:"Holding register"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"pub enum WildMultiAsset {\n    /// All assets in Holding.\n    All,\n    /// All assets in Holding of a given fungibility and ID.\n    AllOf { id: AssetId, fun: WildFungibility },\n    /// All assets in Holding, up to `u32` individual assets (different instances of non-fungibles\n    /// are separate assets).\n    AllCounted(#[codec(compact)] u32),\n    /// All assets in Holding of a given fungibility and ID up to `count` individual assets\n    /// (different instances of non-fungibles are separate assets).\n    AllOfCounted {\n        id: AssetId,\n        fun: WildFungibility,\n        #[codec(compact)]\n        count: u32,\n    },\n}\n"})}),"\n",(0,n.jsx)(s.h3,{id:"multiassetfilter",children:"MultiAssetFilter"}),"\n",(0,n.jsxs)(s.p,{children:["Finally, there is ",(0,n.jsx)(s.code,{children:"MultiAssetFilter"}),". This is used most often and is just a combination of\nMultiAssets and WildMultiAsset allowing either a wildcard or a list of definite (i.e. not wildcard)\nassets to be specified."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"pub enum MultiAssetFilter {\n    /// Specify the filter as being everything contained by the given `MultiAssets` inner.\n    Definite(MultiAssets),\n    /// Specify the filter as the given `WildMultiAsset` wildcard.\n    Wild(WildMultiAsset),\n}\n"})}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.h3,{id:"multiasset-1",children:"MultiAsset"}),"\n",(0,n.jsxs)(s.p,{children:["For more information about the MultiLocations used to define concrete assets, see\n",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/fundamentals/multilocation-summary",children:"MultiLocation"})," and ",(0,n.jsx)(s.a,{href:"/docs/learn/xcm/fundamentals/multilocation-junctions",children:"Junction"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"// Location relay chain\n// 100 Native Asset (three ways)\nMultiAsset {id: Concrete(MultiLocation {parents: 0, interior: Here}), fun: Fungible(100u128)};\nMultiAsset {id: Here.into(), fun: 100.into()};\nlet _: MultiAsset = (Here, 100u128).into();\n\n// 100 Parachain's Native Asset\nlet _: MultiAsset = (X1(Parachain(1000)), 100u128).into();\n// 100 Fungible assets in Parachain 1000 with id 1234\nlet _: MultiAsset = (X2(Parachain(1000), GeneralIndex(1234)), 100u128).into();\n// Non Fungible asset with asset class 1234 containing only one nft instance in Parachain 1000\nlet _: MultiAsset = (X2(Parachain(1000), GeneralIndex(1234)), Undefined).into();\n// Non Fungible asset with asset class 1234 and AssetInstance 1 in Parachain 1000\nlet _: MultiAsset = (X2(Parachain(1000), GeneralIndex(1234)), Index(1)).into();\n"})}),"\n",(0,n.jsx)(s.h3,{id:"multiassetfilter-1",children:"MultiAssetFilter"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-rust",children:"let a1: MultiAssets = MultiAssets::from(vec![MultiAsset {id: Here.into(), fun: 100u128.into()}]);\nlet b1: MultiAssets = (Here, 100u128).into();\nassert_eq!(a1, b1);\n\nlet a2: MultiAssetFilter = a1.into();\nlet b2 = MultiAssetFilter::Definite((Here, 100u128).into());\nassert_eq!(a2, b2);\n\nlet a3 = MultiAssetFilter::Wild(WildMultiAsset::All);\nlet b3: MultiAssetFilter = All.into();\nassert_eq!(a3, b3);\n"})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(96540);const i={},l=n.createContext(i);function a(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);