"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3668],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=i,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||o;return n?a.createElement(d,r(r({ref:t},u),{},{components:n})):a.createElement(d,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"learn-xcm-docs-multilocation-summary",title:"MultiLocation",sidebar_label:"Summary",description:"Learn about XCM fundamentals.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../multilocation-summary"},s="MultiLocation",c={unversionedId:"learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-summary",id:"learn/xcm/fundamentals/multilocation/learn-xcm-docs-multilocation-summary",title:"MultiLocation",description:"Learn about XCM fundamentals.",source:"@site/../docs/learn/xcm/fundamentals/multilocation/summary.md",sourceDirName:"learn/xcm/fundamentals/multilocation",slug:"/learn/xcm/fundamentals/multilocation-summary",permalink:"/docs/learn/xcm/fundamentals/multilocation-summary",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-multilocation-summary",title:"MultiLocation",sidebar_label:"Summary",description:"Learn about XCM fundamentals.",keywords:["xcm","cross-consensus messaging","multilocation"],slug:"../multilocation-summary"},sidebar:"docs",previous:{title:"MultiLocation",permalink:"/docs/learn/xcm/fundamentals/multilocation"},next:{title:"Junction(s)",permalink:"/docs/learn/xcm/fundamentals/multilocation-junctions"}},u={},p=[{value:"Location is relative",id:"location-is-relative",level:3},{value:"Hierarchical structure",id:"hierarchical-structure",level:3},{value:"So what is a MultiLocation: Simple example",id:"so-what-is-a-multilocation-simple-example",level:3},{value:"What&#39;s next:",id:"whats-next",level:2}],m={toc:p},h="wrapper";function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)(h,(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multilocation"},"MultiLocation"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://paritytech.github.io/polkadot/doc/xcm/v3/struct.MultiLocation.html"},"MultiLocation")," type\nidentifies any single location that exists within the world of consensus. It can represent all\nmanner of things that exist within consensus, from a scalable multi-shard blockchain such as\nPolkadot down to an ERC-20 asset account on a parachain. MultiLocations are used to identify places\nto send XCMs, places that can receive assets, and can even help describe the type of an asset\nitself, as we will see in ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-multiasset"},"MultiAsset"),"."),(0,o.kt)("h3",{id:"location-is-relative"},"Location is relative"),(0,o.kt)("p",null,"MultiLocation always expresses a location relative to the current location. It can be thought of as\na file system path, without the ability to directly express the \u201croot\u201d of the file system tree. This\nis for a simple reason: In the world of Polkadot, blockchains can be merged into, and split from\nother blockchains. A blockchain can begin as a standalone sovereign chain, and could eventually be\nelevated to become a parachain within a larger consensus. If it did that, then the meaning of \u201croot\u201d\nwould change overnight and this could spell chaos for XCMs and anything else using MultiLocation. To\nkeep things simple, we exclude this possibility altogether."),(0,o.kt)("h3",{id:"hierarchical-structure"},"Hierarchical structure"),(0,o.kt)("p",null,"Locations in XCM are hierarchical; some places in consensus are wholly encapsulated within other\nplaces in consensus. A parachain of Polkadot exists wholly within the overall Polkadot consensus; we\ncall this an interior location. Or a pallet exists wholly within a parachain or relay chain. Putting\nit more strictly, say we have two consensus systems, A and B. If any change in A implies a change in\nB, then we say A is interior to B."),(0,o.kt)("h3",{id:"so-what-is-a-multilocation-simple-example"},"So what is a MultiLocation: Simple example"),(0,o.kt)("p",null,"A quick summary of the previous points:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A MultiLocation identifies any single location that exists within the world of consensus."),(0,o.kt)("li",{parentName:"ul"},"A MultiLocation is always relative to the current location."),(0,o.kt)("li",{parentName:"ul"},"MultiLocations in XCM are hierarchical.")),(0,o.kt)("p",null,"Now take a look at the MultiLocation struct:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct MultiLocation {\n    pub parents: u8,\n    pub interior: Junctions,\n}\n")),(0,o.kt)("p",null,"As we have already discussed, locations in XCM are hierarchical. The following image shows an\nexample of such a Hierarchy."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Simple Example",src:n(82254).Z,width:"341",height:"271"})),(0,o.kt)("p",null,"Relay chain A completely encapsulates Parachain A and B (indicated by the arrows) and parachain A\nencapsulates an account ",(0,o.kt)("inlineCode",{parentName:"p"},"0x00..."),". So RelayA is higher in the hierarchy than ParaA and ParaB and can\nbe described as the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent")," of these parachains. The ",(0,o.kt)("inlineCode",{parentName:"p"},"parents: u8")," in the MultiLocation struct\ndescribes the number of steps in the hierarchy we want to move up. The ",(0,o.kt)("inlineCode",{parentName:"p"},"interior: Junctions")," express\nthe steps in the hierarchy we want to move down. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Junctions")," type will be further discussed in\nthe next chapter about ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals/multilocation-junctions"},"Junctions"),", but for now, it's just a way to express a way down\nthe hierarchy. As all MultiLocations are relative to the current location, Parachain B relative to\nParachain A is one step up and one step down in the hierarchy."),(0,o.kt)("p",null,"To get a better understanding of this concept, we show some simple MultiLocations in the code\nexample below. The first two examples are relative to RelayA and the second set of examples is\nrelative to ParaB. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Location")," comments, we expressed the locations in text. The ",(0,o.kt)("inlineCode",{parentName:"p"},"..")," express\na step up in the hierarchical structure (the \u201cparent\u201d or the encapsulating consensus system). The\n",(0,o.kt)("inlineCode",{parentName:"p"},"..")," are followed by some number of ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals/multilocation-junctions"},"Junctions"),", all separated by ",(0,o.kt)("inlineCode",{parentName:"p"},"/"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"X1")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"X2")," variants are expressing the number of ",(0,o.kt)("inlineCode",{parentName:"p"},"Junction"),"s that we step down in the hierarchical\nstructure (see ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals/multilocation-junctions"},"Junctions")," for an explanation)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// From: RelayA\n// To: ParaB\n// Location: Parachain(2000)\nMultiLocation {parents: 0, interior: X1(Parachain(2000))};\n// To: Account in ParaA\n// Location: Parachain(1000)/AccountId32(0x00..)\nMultiLocation {\n    parents: 0,\n    interior: X2(\n        Parachain(1000),\n        AccountId32{network: None, id: [0u8; 32]}\n    )\n};\n\n// From: ParaB\n// To: RelayA\n// Location: ../Here\nMultiLocation {parents: 1, interior: Here};\n// To: Account in ParaA\n// Location: ../Parachain(1000)/AccountId32(0x00..)\nMultiLocation {\n    parents: 1,\n    interior: X2(\n        Parachain(1000),\n        AccountId32{network: None, id: [0u8; 32]}\n    )\n};\n")),(0,o.kt)("h2",{id:"whats-next"},"What's next:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"More information about ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/xcm/fundamentals/multilocation-junctions"},"junctions")),(0,o.kt)("li",{parentName:"ul"},"More MultiLocation ",(0,o.kt)("a",{parentName:"li",href:"/docs/learn/xcm/fundamentals/multilocation-example"},"examples")),(0,o.kt)("li",{parentName:"ul"},"Expressing assets using Multilocations: ","[MultiAsset][../multiasset.md]")))}d.isMDXComponent=!0},82254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/MultiLocation_simple_example-f2857ab7c4530ec864532d6ee3c4e30c.png"}}]);