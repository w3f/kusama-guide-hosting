"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4479],{98368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(74848),s=t(28453);const a={id:"maintain-networks",title:"Networks",sidebar_label:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",keywords:["networks","mainnet","testnet","canary","substrate"],slug:"../maintain-networks"},i=void 0,r={id:"maintain/maintain-networks",title:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",source:"@site/../docs/maintain/maintain-networks.md",sourceDirName:"maintain",slug:"/maintain-networks",permalink:"/docs/maintain-networks",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:172347396e4,frontMatter:{id:"maintain-networks",title:"Networks",sidebar_label:"Networks",description:"Information about the different networks of the Polkadot ecosystem.",keywords:["networks","mainnet","testnet","canary","substrate"],slug:"../maintain-networks"}},c={},d=[{value:"Main networks",id:"main-networks",level:2},{value:"Polkadot Mainnet",id:"polkadot-mainnet",level:3},{value:"Kusama Canary Network",id:"kusama-canary-network",level:3},{value:"Test Networks",id:"test-networks",level:2},{value:"Westend Test Network",id:"westend-test-network",level:3},{value:"Westend Faucet",id:"westend-faucet",level:4},{value:"Westend Asset Hub",id:"westend-asset-hub",level:3},{value:"Westend Asset Hub Faucet",id:"westend-asset-hub-faucet",level:4},{value:"Rococo Test Network",id:"rococo-test-network",level:3},{value:"Rococo Faucet",id:"rococo-faucet",level:4},{value:"Wococo Test Network (inactive)",id:"wococo-test-network-inactive",level:3},{value:"Differences",id:"differences",level:2},{value:"Telemetry Dashboard",id:"telemetry-dashboard",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Polkadot is built on top of Substrate, a modular framework for blockchains. One feature of Substrate\nis to allow for connection to different networks using a single executable and configuring it with a\nstart-up flag. Here are some of the networks associated with Polkadot or Substrate that you may want\nto connect to and join."}),"\n",(0,o.jsx)(n.h2,{id:"main-networks",children:"Main networks"}),"\n",(0,o.jsxs)(n.p,{children:["To connect to a Polkadot network please follow the ",(0,o.jsx)(n.a,{href:"/docs/maintain-sync",children:"instructions"})," for installing\nthe Polkadot executable."]}),"\n",(0,o.jsx)(n.h3,{id:"polkadot-mainnet",children:"Polkadot Mainnet"}),"\n",(0,o.jsx)(n.p,{children:"Connecting to the Polkadot network is the default option when starting a node."}),"\n",(0,o.jsx)(n.p,{children:"To start a Polkadot node, run the Polkadot binary:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"polkadot\n"})}),"\n",(0,o.jsx)(n.p,{children:"and you will connect and start syncing to Polkadot."}),"\n",(0,o.jsxs)(n.p,{children:["Check your node is connected by viewing it on\n",(0,o.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",children:"Telemetry"}),"\n(you can set a custom node name by specifying ",(0,o.jsx)(n.code,{children:'--name "my-custom-node-name"'}),")"]}),"\n",(0,o.jsx)(n.h3,{id:"kusama-canary-network",children:"Kusama Canary Network"}),"\n",(0,o.jsx)(n.p,{children:"Kusama is a canary network and holds real economic value."}),"\n",(0,o.jsxs)(n.p,{children:["Run the Polkadot binary and specify ",(0,o.jsx)(n.code,{children:"kusama"})," as the chain:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"polkadot --chain=kusama\n"})}),"\n",(0,o.jsx)(n.p,{children:"and you will connect and start syncing to Kusama."}),"\n",(0,o.jsxs)(n.p,{children:["Check your node is connected by viewing it on\n",(0,o.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe",children:"Kusama Telemetry"}),"\n(you can set a custom node name by specifying ",(0,o.jsx)(n.code,{children:'--name "my-custom-node-name"'}),")"]}),"\n",(0,o.jsx)(n.h2,{id:"test-networks",children:"Test Networks"}),"\n",(0,o.jsx)(n.h3,{id:"westend-test-network",children:"Westend Test Network"}),"\n",(0,o.jsxs)(n.p,{children:["Westend is the primary test network of Polkadot. The tokens on this network are called ",(0,o.jsx)(n.em,{children:"Westies"}),"\n(WND) and they purposefully hold no economic value."]}),"\n",(0,o.jsxs)(n.p,{children:["Run the Polkadot binary and specify ",(0,o.jsx)(n.code,{children:"westend"})," as the chain:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"polkadot --chain=westend\n"})}),"\n",(0,o.jsx)(n.p,{children:"and you will connect and start syncing to Westend."}),"\n",(0,o.jsxs)(n.p,{children:["Check that your node is connected by viewing it on\n",(0,o.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/0xe143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423e",children:"Westend Telemetry"}),"\n(you can set a custom node name by specifying ",(0,o.jsx)(n.code,{children:'--name "my-custom-node-name"'}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"westend-faucet",children:"Westend Faucet"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the instruction ",(0,o.jsx)(n.a,{href:"/docs/learn-DOT#getting-tokens-on-the-westend-testnet",children:"here"})," to get\nWesties (WND) tokens."]}),"\n",(0,o.jsx)(n.h3,{id:"westend-asset-hub",children:"Westend Asset Hub"}),"\n",(0,o.jsxs)(n.p,{children:["The Westend\n",(0,o.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/learn-guides-assets-create#creating-assets-on-the-asset-hub",children:"Asset Hub"}),"\nis a system parachain on Westend network."]}),"\n",(0,o.jsx)(n.h4,{id:"westend-asset-hub-faucet",children:"Westend Asset Hub Faucet"}),"\n",(0,o.jsxs)(n.p,{children:["Claim WND tokens from the ",(0,o.jsx)(n.a,{href:"https://faucet.polkadot.io/westend",children:"faucet"})," on Westend and teleport them\nto Westend Asset Hub."]}),"\n",(0,o.jsx)(n.h3,{id:"rococo-test-network",children:"Rococo Test Network"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://substrate.io/developers/rococo-network/",children:"Rococo"})," is a test network built for parachains.\nThe native token of this network (ROC) holds no economic value."]}),"\n",(0,o.jsxs)(n.p,{children:["Run the Polkadot binary and specify ",(0,o.jsx)(n.code,{children:"rococo"})," as the chain:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"polkadot --chain=rococo\n"})}),"\n",(0,o.jsx)(n.p,{children:"and you will connect and start syncing to Rococo."}),"\n",(0,o.jsxs)(n.p,{children:["Check that your node is connected by viewing it on\n",(0,o.jsx)(n.a,{href:"https://telemetry.polkadot.io/#list/0x6408de7737c59c238890533af25896a2c20608d8b380bb01029acb392781063e",children:"Rococo Telemetry"}),"\n(you can set a custom node name by specifying ",(0,o.jsx)(n.code,{children:'--name "my-custom-node-name"'}),")."]}),"\n",(0,o.jsx)(n.h4,{id:"rococo-faucet",children:"Rococo Faucet"}),"\n",(0,o.jsxs)(n.p,{children:["Follow the instruction ",(0,o.jsx)(n.a,{href:"/docs/learn-DOT#getting-tokens-on-the-rococo-testnet",children:"here"})," to get\nROCs tokens."]}),"\n",(0,o.jsx)(n.h3,{id:"wococo-test-network-inactive",children:"Wococo Test Network (inactive)"}),"\n",(0,o.jsx)(n.p,{children:"Wococo used to be a Polkadot test network for testing bridges. The network was shut down following\nthe bridge between Westend and Rococo deployment."}),"\n",(0,o.jsx)(n.h2,{id:"differences",children:"Differences"}),"\n",(0,o.jsxs)(n.p,{children:["Runtime differences (e.g. existential and multisignature deposit sizes) between the different\nnetworks can be found by doing a ",(0,o.jsx)(n.code,{children:"diff"})," between the ",(0,o.jsx)(n.code,{children:"src/lib.rs"})," of the repositories. For example,\nto compare the Polkadot and Kusama runtimes:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"git clone https://github.com/polkadot-fellows/runtimes && cd runtimes/relay"})}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"ls"})," - show the available runtimes"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"diff polkadot/src/lib.rs kusama/src/lib.rs"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["You can also paste the runtimes\n(",(0,o.jsx)(n.a,{href:"https://github.com/polkadot-fellows/runtimes/blob/main/relay/polkadot/src/lib.rs",children:"Polkadot"}),",\n",(0,o.jsx)(n.a,{href:"https://github.com/polkadot-fellows/runtimes/blob/main/relay/kusama/src/lib.rs",children:"Kusama"}),") into a\nweb-based diff tool like ",(0,o.jsx)(n.a,{href:"https://www.diffchecker.com/",children:"Diffchecker"})," if you're not comfortable with\nthe CLI."]}),"\n",(0,o.jsx)(n.h2,{id:"telemetry-dashboard",children:"Telemetry Dashboard"}),"\n",(0,o.jsxs)(n.p,{children:["If you connect to the public networks, the default configuration for your node will connect it to\nthe public ",(0,o.jsx)(n.a,{href:"https://telemetry.polkadot.io/",children:"Telemetry"})," service."]}),"\n",(0,o.jsx)(n.p,{children:"You can verify that your node is connected by navigating to the correct network on the dashboard and\nfinding the name of your node."}),"\n",(0,o.jsx)(n.p,{children:"There is a built-in search function on the nodes page. Simply start typing keystrokes in the main\nwindow to make it available."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var o=t(96540);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);