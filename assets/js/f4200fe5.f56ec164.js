"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),o=a(86010);const r={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:a},t)}},74866:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),o=a(67294),r=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){var t,a;return null!=(t=null==(a=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,r=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(r.location.search);t.set(l,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[l,r])]}function k(e){var t,a,n,r,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=c(e),k=(0,o.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:l,tabValues:d})})),b=k[0],f=k[1],g=h({queryString:s,groupId:u}),y=g[0],N=g[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,p.Nk)(t),n=a[0],r=a[1],[n,(0,o.useCallback)((function(e){t&&r.set(e)}),[t,r])]),w=v[0],T=v[1],C=function(){var e=null!=y?y:w;return m({value:e,tabValues:d})?e:null}();return(0,o.useLayoutEffect)((function(){C&&f(C)}),[C]),{selectedValue:b,selectValue:(0,o.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);f(e),N(e),T(e)}),[N,T,d]),tabValues:d}}var b=a(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,o=p.indexOf(e.currentTarget)+1;a=null!=(n=p[o])?n:p[0];break;case"ArrowLeft":var r,l=p.indexOf(e.currentTarget)-1;a=null!=(r=p[l])?r:p[p.length-1]}null==(t=a)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return o.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,r.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,r=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=r.find((function(e){return e.props.value===n}));return l?(0,o.cloneElement)(l,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function N(e){var t=k(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(g,(0,n.Z)({},e,t)),o.createElement(y,(0,n.Z)({},e,t)))}function v(e){var t=(0,b.Z)();return o.createElement(N,(0,n.Z)({key:String(t)},e))}},31101:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>d,toc:()=>m});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=a(74866),i=a(85162),s=["components"],u={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},p=void 0,d={unversionedId:"maintain/maintain-sync",id:"maintain/maintain-sync",title:"Set up a Full Node",description:"Steps on how to set up a full node.",source:"@site/../docs/maintain/maintain-sync.md",sourceDirName:"maintain",slug:"/maintain-sync",permalink:"/docs/maintain-sync",draft:!1,tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1683802439,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"}},c={},m=[{value:"Types of Nodes",id:"types-of-nodes",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Debian-based (Debian, Ubuntu)",id:"debian-based-debian-ubuntu",level:3},{value:"RPM-based (Fedora, CentOS)",id:"rpm-based-fedora-centos",level:3},{value:"Get Substrate",id:"get-substrate",level:2},{value:"Clone and Build",id:"clone-and-build",level:2},{value:"Run",id:"run",level:2},{value:"Running an Archive Node",id:"running-an-archive-node",level:2},{value:"Using Docker",id:"using-docker",level:2}],h={toc:m},k="wrapper";function b(e){var t=e.components,a=(0,o.Z)(e,s);return(0,r.kt)(k,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"If you're building dApps or products on a Substrate-based chain like Polkadot, Kusama, or a custom\nSubstrate implementation, you want the ability to run a node-as-a-back-end. After all, relying on\nyour infrastructure is always better than a third-party-hosted one in this brave new decentralized\nworld."),(0,r.kt)("p",null,"This guide will show you how to connect to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the\nsame process applies to any other ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),"-based chain. First, let's\nclarify the term ",(0,r.kt)("em",{parentName:"p"},"full node"),"."),(0,r.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,r.kt)("p",null,"A blockchain's growth comes from a ",(0,r.kt)("em",{parentName:"p"},"genesis block"),", ",(0,r.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,r.kt)("em",{parentName:"p"},"events"),"."),(0,r.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it and emits the events resulting from these changes. Later, the chain\u2019s\nstate at block one is used the same way to build the chain\u2019s state at block 2, and so on. Once\ntwo-thirds of the validators agree on a specific block being valid, it is finalized."),(0,r.kt)("p",null,"An ",(0,r.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks and their states. An archive node makes it convenient\nto query the past state of the chain at any point in time. Finding out what an account's balance at\na particular block was or which extrinsics resulted in a specific state change are fast operations\nwhen using an archive node. However, an archive node takes up a lot of disk space - around Kusama's\n12 millionth block, this was around 660 GB."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On the ",(0,r.kt)("a",{parentName:"p",href:"https://paranodes.io/DBSize"},"Paranodes")," or ",(0,r.kt)("a",{parentName:"p",href:"https://stakeworld.io/docs/dbsize"},"Stakeworld"),"\nwebsites, you can find lists of the database sizes of Polkadot and Kusama nodes.")),(0,r.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,r.kt)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data."),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"full node")," prunes historical states: all finalized blocks' states older than a configurable\nnumber except the genesis block's state. This is 256 blocks from the last finalized one by default.\nA pruned node this way requires much less space than an archive node."),(0,r.kt)("p",null,"A full node could eventually rebuild every block's state without additional information and become\nan archive node. This still needs to be implemented at the time of writing. If you need to query\nhistorical blocks' states past what you pruned, you must purge your database and resync your node,\nstarting in archive mode. Alternatively, you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network and only need the states of blocks past that\nsnapshot."),(0,r.kt)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,r.kt)("p",null,"Another type of node is a ",(0,r.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource-restricted devices. An interesting use-case of\nlight nodes is a browser extension, which is a node in its own right, running the runtime in WASM\nformat, as well as a full or light node that is completely encapsulated in WASM and can be\nintegrated into web apps: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot#wasm-light-node"},"https://github.com/paritytech/smoldot#wasm-light-node"),"."),(0,r.kt)("admonition",{title:"Substrate Connect",type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-connect"},"Substrate Connect")," provides a way to interact with\nsubstrate-based blockchains in the browser without using an RPC server. It is a light node that runs\nentirely in Javascript. Substrate Connect uses a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot"},"smoldot WASM light client")," to securely connect to the\nblockchain network without relying on specific 3rd parties. Substrate Connect is available on Chrome\nand Firefox as a ",(0,r.kt)("a",{parentName:"p",href:"https://substrate.io/developers/substrate-connect/"},"browser extension"),".")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,r.kt)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator setup")," if you are running validator."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"The bash commands that are provided to run against ",(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"your node")," use ",(0,r.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"Polkadot")," as the"),(0,r.kt)("p",{parentName:"admonition"},"default chain"),(0,r.kt)("p",{parentName:"admonition"},"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--chain")," flag if you follow the setup instructions to setup a ",(0,r.kt)("inlineCode",{parentName:"p"},"Kusama")," node. For example:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n'))),(0,r.kt)(l.Z,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux (standalone)",value:"linux-standalone"},{label:"Linux (package)",value:"linux-package"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm protobuf\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install Rust by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After Rust is installed, update and add the nightly version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Ensure the current shell has cargo\nsource ~/.cargo/env\n\n# Update the Rust toolchain\nrustup default stable\nrustup update\n\n# Add the nightly and WebAssembly targets:\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Verify your installation by running the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup show\n\n# You should see output similar to:\n\nactive toolchain\n----------------\n\nstable-aarch64-apple-darwin (default)\nrustc 1.68.1 (8460ca823 2023-03-20)\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"rustup +nightly show\n\n# You should see output similar to:\n\ninstalled targets for active toolchain\n--------------------------------------\n\naarch64-apple-darwin\nwasm32-unknown-unknown\n\nactive toolchain\n----------------\n\nnightly-aarch64-apple-darwin (overridden by +toolchain on the command line)\nrustc 1.71.0-nightly (9ecda8de8 2023-04-30)\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once Rust is configured, run the following command to clone and build the Polkadot code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start your node:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find your node on ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Determine the latest version of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then, run the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x polkadot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start your node:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find your node on ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.kt)(i.Z,{value:"linux-standalone",mdxType:"TabItem"},(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Determine the latest version of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),"."),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The nature of pre-built binaries means that they may not work on your particular architecture or\nLinux distribution. If you see an error like ",(0,r.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error")," it\nlikely means the binary is not compatible with your system. You will either need to compile the\n",(0,r.kt)("a",{parentName:"p",href:"#clone-and-build"},(0,r.kt)("strong",{parentName:"a"},"source code"))," or use ",(0,r.kt)("a",{parentName:"p",href:"#using-docker"},(0,r.kt)("strong",{parentName:"a"},"Docker")),"."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,r.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the following: ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chmod +x polkadot"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Run the following:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find your node on ",(0,r.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,r.kt)(i.Z,{value:"linux-package",mdxType:"TabItem"},(0,r.kt)("p",null,"You can also install Polkadot from one of our package repositories."),(0,r.kt)("p",null,"Installation from the Debian or rpm repositories will create a ",(0,r.kt)("inlineCode",{parentName:"p"},"systemd")," service that can be used to\nrun a Polkadot node. The service is disabled by default, and can be started by running\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl start polkadot")," on demand (use ",(0,r.kt)("inlineCode",{parentName:"p"},"systemctl enable polkadot")," to make it auto-start after\nreboot). By default, it will run as the ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot")," user. Command-line flags passed to the binary can\nbe customized by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/default/polkadot"),". This file will not be overwritten on updating\npolkadot."),(0,r.kt)("h3",{id:"debian-based-debian-ubuntu"},"Debian-based (Debian, Ubuntu)"),(0,r.kt)("p",null,"Currently supports Debian 10 (Buster) and Ubuntu 20.04 (Focal), and derivatives. Run the following\ncommands as the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Import the security@parity.io GPG key\ngpg --recv-keys --keyserver hkps://keys.mailvelope.com 9D4B2B6EB8F97156D19669A9FF0812D491B96798\ngpg --export 9D4B2B6EB8F97156D19669A9FF0812D491B96798 > /usr/share/keyrings/parity.gpg\n# Add the Parity repository and update the package index\necho 'deb [signed-by=/usr/share/keyrings/parity.gpg] https://releases.parity.io/deb release main' > /etc/apt/sources.list.d/parity.list\napt update\n# Install the `parity-keyring` package - This will ensure the GPG key\n# used by APT remains up-to-date\napt install parity-keyring\n# Install polkadot\napt install polkadot\n\n")),(0,r.kt)("p",null,"If you don't want polkadot package to be automatically updated when you update packages on your\nserver, you can issue the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-mark hold polkadot\n")),(0,r.kt)("h3",{id:"rpm-based-fedora-centos"},"RPM-based (Fedora, CentOS)"),(0,r.kt)("p",null,"Currently supports Fedora 32 and CentOS 8, and derivatives."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dnf-plugins-core (This might already be installed)\ndnf install dnf-plugins-core\n# Add the repository and enable it\ndnf config-manager --add-repo https://releases.parity.io/rpm/polkadot.repo\ndnf config-manager --set-enabled polkadot\n# Install polkadot (You may have to confirm the import of the GPG key, which\n# should have the following fingerprint: 9D4B2B6EB8F97156D19669A9FF0812D491B96798)\ndnf install polkadot\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you choose to use a custom folder for the polkadot home by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"--base-path '/custom-path'"),",\nyou will need to issue following command:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo mkdir /etc/systemd/system/polkadot.service.d\n")),(0,r.kt)("p",{parentName:"admonition"},"And create a new file inside this folder:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -e /etc/systemd/system/polkadot.service.d/custom.conf\n")),(0,r.kt)("p",{parentName:"admonition"},"With the following content:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"[Service]\nReadWritePaths=/custom-path\n")),(0,r.kt)("p",{parentName:"admonition"},"And finally issue a reload to have your modifications applied by systemd:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl daemon-reload\n"))))),(0,r.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,r.kt)("p",null,"Follow instructions as outlined ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/quick-start/"},"here")," - note that Windows\nusers will have their work cut out for them. It's better to use a virtual machine instead."),(0,r.kt)("p",null,"Test if the installation was successful by running ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,r.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repo's master branch contains the\nlatest Polkadot code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n")),(0,r.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,r.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,r.kt)("h2",{id:"run"},"Run"),(0,r.kt)("p",null,"The built binary will be in the ",(0,r.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,r.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag to determine which flags you can use when running the node. For example, if\n",(0,r.kt)("a",{parentName:"p",href:"/docs/maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,r.kt)("p",null,"The syncing process will take a while, depending on your capacity, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,r.kt)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,r.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,r.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. It\ndefaults to ",(0,r.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode")," when validating. To support the full state, use the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,r.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,r.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node syncs."),(0,r.kt)("h2",{id:"using-docker"},"Using Docker"),(0,r.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is more advanced, so it's\nbest left up to those already familiar with docker or who have completed the other set-up\ninstructions in this guide. Be aware that when you run polkadot in docker, the process only listens\non localhost by default. If you would like to connect to your node's services (rpc, websockets, and\nprometheus) you need to ensure that you run you node with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpc-external"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--ws-external"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," commands."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 -p 9615:9615 parity/polkadot:v0.9.13 --name "calling_home_from_a_docker_container" --rpc-external --ws-external --prometheus-external\n')))}b.isMDXComponent=!0}}]);