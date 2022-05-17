"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40956:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>w,contentTitle:()=>v,default:()=>C,frontMatter:()=>N,metadata:()=>y,toc:()=>x});var n=a(87462),o=a(63366),r=a(67294),l=a(3905),i=a(72389),s=a(67392),p=a(7094),u=a(12466),d=a(86010);const c="tabList_uSqn",m="tabItem_LplD";function h(e){var t,a,o,l=e.lazy,i=e.block,h=e.defaultValue,k=e.values,g=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=k?k:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),v=(0,s.l)(N,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===h?h:null!=(t=null!=h?h:null==(a=f.find((function(e){return e.props.default})))?void 0:a.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==y&&!N.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,p.U)(),x=w.tabGroupChoices,T=w.setTabGroupChoices,C=(0,r.useState)(y),O=C[0],S=C[1],P=[],I=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var E=x[g];null!=E&&E!==O&&N.some((function(e){return e.value===E}))&&S(E)}var A=function(e){var t=e.currentTarget,a=P.indexOf(t),n=N[a].value;n!==O&&(I(t),S(n),null!=g&&T(g,n))},D=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=P.indexOf(e.currentTarget)+1;a=P[n]||P[0];break;case"ArrowLeft":var o=P.indexOf(e.currentTarget)-1;a=P[o]||P[P.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,d.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},b)},N.map((function(e){var t=e.value,a=e.label,o=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return P.push(e)},onKeyDown:D,onFocus:A,onClick:A},o,{className:(0,d.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=a?a:t)}))),l?(0,r.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function k(e){var t=(0,i.Z)();return r.createElement(h,(0,n.Z)({key:String(t)},e))}const g="tabItem_OmH5";function b(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",className:(0,d.Z)(g,n),hidden:a},t)}var f=["components"],N={id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"},v=void 0,y={unversionedId:"maintain/maintain-sync",id:"maintain/maintain-sync",title:"Set up a Full Node",description:"Steps on how to set up a full node.",source:"@site/../docs/maintain/maintain-sync.md",sourceDirName:"maintain",slug:"/maintain-sync",permalink:"/docs/maintain-sync",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/maintain/maintain-sync.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1652796788,formattedLastUpdatedAt:"5/17/2022",frontMatter:{id:"maintain-sync",title:"Set up a Full Node",sidebar_label:"Set up a Full Node",description:"Steps on how to set up a full node.",keywords:["node","full node","sync","setup node"],slug:"../maintain-sync"}},w={},x=[{value:"Types of Nodes",id:"types-of-nodes",level:3},{value:"Setup Instructions",id:"setup-instructions",level:2},{value:"Get Substrate",id:"get-substrate",level:2},{value:"Clone and Build",id:"clone-and-build",level:2},{value:"Run",id:"run",level:2},{value:"Running an Archive Node",id:"running-an-archive-node",level:2},{value:"Using Docker",id:"using-docker",level:2}],T={toc:x};function C(e){var t=e.components,a=(0,o.Z)(e,f);return(0,l.kt)("wrapper",(0,n.Z)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"If you're building dapps or products on a Substrate-based chain like Polkadot, Kusama or a custom\nSubstrate implementation, you probably want the ability to run a node-as-a-back-end. After all, it's\nalways better to rely on your own infrastructure than on a third-party-hosted one in this brave new\ndecentralized world."),(0,l.kt)("p",null,"This guide will show you how to connect to ",(0,l.kt)("a",{parentName:"p",href:"https://polkadot.network/"},"Polkadot network"),", but the\nsame process applies to any other ",(0,l.kt)("a",{parentName:"p",href:"https://substrate.io"},"Substrate"),"-based chain. First,\nlet's clarify the term ",(0,l.kt)("em",{parentName:"p"},"full node"),"."),(0,l.kt)("h3",{id:"types-of-nodes"},"Types of Nodes"),(0,l.kt)("p",null,"A blockchain's growth comes from a ",(0,l.kt)("em",{parentName:"p"},"genesis block"),", ",(0,l.kt)("em",{parentName:"p"},"extrinsics"),", and ",(0,l.kt)("em",{parentName:"p"},"events"),"."),(0,l.kt)("p",null,"When a validator seals block 1, it takes the blockchain's state at block 0. It then applies all\npending changes on top of it, and emits the events that are the result of these changes. Later, the\nstate of the chain at block 1 is used in the same way to build the state of the chain at block 2,\nand so on. Once two thirds of the validators agree on a specific block being valid, it is finalized."),(0,l.kt)("p",null,"An ",(0,l.kt)("strong",{parentName:"p"},"archive node")," keeps all the past blocks. An archive node makes it convenient to query the past\nstate of the chain at any point in time. Finding out what an account's balance at a certain block\nwas, or which extrinsics resulted in a certain state change are fast operations when using an\narchive node. However, an archive node takes up a lot of disk space - around Kusama's 12 millionth\nblock this was around 660 GB."),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The ",(0,l.kt)("a",{parentName:"p",href:"https://paranodes.io/DBSize"},"Paranodes")," website lists the database sizes of Polkadot and Kusama nodes\nin real-time."))),(0,l.kt)("p",null,"Archive nodes are used by utilities that need past information - like block explorers, council\nscanners, discussion platforms like ",(0,l.kt)("a",{parentName:"p",href:"https://polkassembly.io"},"Polkassembly"),", and others. They need\nto be able to look at past on-chain data."),(0,l.kt)("p",null,"A ",(0,l.kt)("strong",{parentName:"p"},"full node")," is ",(0,l.kt)("em",{parentName:"p"},"pruned"),": it discards all finalized blocks older than a configurable number\nexcept the genesis block: This is 256 blocks from the last finalized one, by default. A node that is\npruned this way requires much less space than an archive node."),(0,l.kt)("p",null,"A full node may eventually be able to rebuild the entire chain with no additional information, and\nbecome an archive node, but at the time of writing, this is not implemented. If you need to query\nhistorical blocks past what you pruned, you need to purge your database and resync your node\nstarting in archive mode. Alternatively you can use a backup or snapshot of a trusted source to\navoid needing to sync from genesis with the network, and only need the blocks past that snapshot."),(0,l.kt)("p",null,"Full nodes allow you to read the current state of the chain and to submit and validate extrinsics\ndirectly on the network without relying on a centralized infrastructure provider."),(0,l.kt)("p",null,"Another type of node is a ",(0,l.kt)("strong",{parentName:"p"},"light node"),". A light node has only the runtime and the current state,\nbut does not store past blocks and so cannot read historical data without requesting it from a node\nthat has it. Light nodes are useful for resource restricted devices. An interesting use-case of\nlight nodes is a Chrome extension, which is a node in its own right, running the runtime in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-light-ui"},"WASM\nformat")," as well as a full or light node that is\ncompletely encapsulated in WASM and can be integrated into webapps:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/smoldot#wasm-light-node"},"https://github.com/paritytech/smoldot#wasm-light-node")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"setup-instructions"},"Setup Instructions"),(0,l.kt)("p",null,"This is not recommended if you're a validator. Please see the\n",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-guides-secure-validator"},"secure validator setup")," if you are running validator."),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"The bash commands that are provided to run against ",(0,l.kt)("strong",{parentName:"h5"},"your node")," use")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"Polkadot")," as the default chain"),(0,l.kt)("p",{parentName:"div"},"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--chain")," flag if you are\nfollowing the setup instructions to setup a ",(0,l.kt)("inlineCode",{parentName:"p"},"Kusama")," node.\nFor example:"),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name" --chain kusama\n')))),(0,l.kt)(k,{groupId:"operating-systems",values:[{label:"macOS",value:"mac"},{label:"Windows",value:"win"},{label:"Linux",value:"linux"}],mdxType:"Tabs"},(0,l.kt)(b,{value:"mac",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Homebrew within the terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew install openssl cmake llvm\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install Rust in your terminal by running:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Once Rust is installed, run the following command to clone and build the polkadot code:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(b,{value:"win",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Install ",(0,l.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Ubuntu")," (same webpage).")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Determine the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then, run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo chmod +x polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Start your node:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry"))))),(0,l.kt)(b,{value:"linux",mdxType:"TabItem"},(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Determine the latest version of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot/releases"},"Polkadot binary"),"."),(0,l.kt)("div",{parentName:"li",className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"The nature of pre-built binaries means that they may not work on your particular architecture\nor Linux distribution. If you see an error like ",(0,l.kt)("inlineCode",{parentName:"p"},"cannot execute binary file: Exec format error"),"\nit likely means the binary is not compatible with your system. You will either need to compile\nthe ",(0,l.kt)("a",{parentName:"p",href:"#clone-and-build"},(0,l.kt)("strong",{parentName:"a"},"source code"))," or use ",(0,l.kt)("a",{parentName:"p",href:"#using-docker"},(0,l.kt)("strong",{parentName:"a"},"Docker")),".")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Download the correct Polkadot binary within Ubuntu by running the following command. Replace\n",(0,l.kt)("inlineCode",{parentName:"p"},"*VERSION*")," with the tag of the latest version from the last step (e.g. ",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.22"),"):"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -sL https://github.com/paritytech/polkadot/releases/download/*VERSION*/polkadot -o polkadot\n"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following: ",(0,l.kt)("inlineCode",{parentName:"p"},"sudo chmod +x polkadot"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Run the following:"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Find your node on ",(0,l.kt)("a",{parentName:"p",href:"https://telemetry.polkadot.io/#list/Polkadot"},"Telemetry")))))),(0,l.kt)("h2",{id:"get-substrate"},"Get Substrate"),(0,l.kt)("p",null,"Follow instructions as outlined\n",(0,l.kt)("a",{parentName:"p",href:"https://docs.substrate.io/v3/getting-started/overview/"},"here")," - note that Windows users will\nhave their work cut out for them. It's better to use a virtual machine instead."),(0,l.kt)("p",null,"Test if the installation was successful by running ",(0,l.kt)("inlineCode",{parentName:"p"},"cargo --version"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"\u03bb cargo --version\ncargo 1.41.0 (626f0f40e 2019-12-03)\n")),(0,l.kt)("h2",{id:"clone-and-build"},"Clone and Build"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot"},"paritytech/polkadot")," repo's master branch contains the\nlatest Polkadot code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("p",null,"Alternatively, if you wish to use a specific release, you can check out a specific tag (",(0,l.kt)("inlineCode",{parentName:"p"},"v0.8.3")," in\nthe example below):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/paritytech/polkadot polkadot\ncd polkadot\ngit checkout tags/v0.8.3\n./scripts/init.sh\ncargo build --release\n")),(0,l.kt)("h2",{id:"run"},"Run"),(0,l.kt)("p",null,"The built binary will be in the ",(0,l.kt)("inlineCode",{parentName:"p"},"target/release")," folder, called ",(0,l.kt)("inlineCode",{parentName:"p"},"polkadot"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "Your Node\'s Name"\n')),(0,l.kt)("p",null,"Use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--help")," flag to find out which flags you can use when running the node. For example, if\n",(0,l.kt)("a",{parentName:"p",href:"/docs/maintain-wss"},"connecting to your node remotely"),", you'll probably want to use ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external")," and\n",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-cors all"),"."),(0,l.kt)("p",null,"The syncing process will take a while depending on your bandwidth, processing power, disk speed and\nRAM. On a \\$10 DigitalOcean droplet, the process can complete in some 36 hours."),(0,l.kt)("p",null,"Congratulations, you're now syncing with Polkadot. Keep in mind that the process is identical when\nusing any other Substrate chain."),(0,l.kt)("h2",{id:"running-an-archive-node"},"Running an Archive Node"),(0,l.kt)("p",null,"When running as a simple sync node (above), only the state of the past 256 blocks will be kept. When\nvalidating, it defaults to ",(0,l.kt)("a",{parentName:"p",href:"#types-of-nodes"},"archive mode"),". To keep the full state use the\n",(0,l.kt)("inlineCode",{parentName:"p"},"--pruning")," flag:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Polkadot"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'./target/release/polkadot --name "My node\'s name" --pruning archive\n')),(0,l.kt)("p",null,"It is possible to almost quadruple synchronization speed by using an additional flag:\n",(0,l.kt)("inlineCode",{parentName:"p"},"--wasm-execution Compiled"),". Note that this uses much more CPU and RAM, so it should be turned off\nafter the node is in sync."),(0,l.kt)("h2",{id:"using-docker"},"Using Docker"),(0,l.kt)("p",null,"Finally, you can use Docker to run your node in a container. Doing this is a bit more advanced so\nit's best left up to those that either already have familiarity with docker, or have completed the\nother set-up instructions in this guide.\nBe aware that when you run polkadot in docker the process only listen on localhost by default.\nIf you would like to connect to your node's services (rpc, websockets, and prometheus) you need to ensure\nthat you run you node with the ",(0,l.kt)("inlineCode",{parentName:"p"},"--rpc-external"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"--ws-external"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"--prometheus-external")," commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-zsh"},'docker run -p 9944:9944 -p 9615:9615 parity/polkadot:v0.9.13 --name "calling_home_from_a_docker_container" --rpc-external --ws-external --prometheus-external\n')))}C.isMDXComponent=!0}}]);